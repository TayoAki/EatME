import { and, eq, isNull, lt, or, sql } from 'drizzle-orm';

import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

import { db } from '@/db';
import { mealItems, meals, type MealRow } from '@/db/schema';
import {
  labelAnalysisSchema,
  mealAnalysisSchema,
  scaleNutrition,
  type BaseNutrition,
  type LabelAnalysis,
  type MealAnalysis,
} from '@/shared/meals';

import { modelFor, structuredCompletion } from './ai';
import { foodQualityEnabled } from './experiments';
import { computeItems, itemTotals, type ComputedItem } from './food-match';
import {
  LABEL_JSON_SCHEMA,
  LABEL_QUALITY_RULES,
  LABEL_SYSTEM_PROMPT,
  MEAL_JSON_SCHEMA,
  MEAL_QUALITY_RULES,
  MEAL_SYSTEM_PROMPT,
  MEAL_TEXT_SYSTEM_PROMPT,
  photoNoteText,
  withQuality,
} from './prompts';
import { deleteObject, getObject } from './storage';

/** An attempt older than this is considered dead (server restarted mid-way) and is retried. */
const LEASE_MS = 150_000;
const MAX_ATTEMPTS = 3;

const stale = () =>
  or(isNull(meals.analysisStartedAt), lt(meals.analysisStartedAt, new Date(Date.now() - LEASE_MS)));

/**
 * Analyzes a meal (photo, nutrition label or description) in the background of the API server
 * (the request that created the meal has already answered). The app polls `GET /api/meals/:id`.
 */
export function startMealAnalysis(mealId: string) {
  void analyzeMeal(mealId).catch((error: unknown) => console.error(`[meals] analysis of ${mealId} crashed`, error));
}

/** Restarts analyses that a restart or deploy interrupted. Called whenever the app loads meals. */
export async function resumeStalledAnalyses(userId: string) {
  const stalled = await db
    .select({ id: meals.id })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'analyzing'), stale()));
  for (const { id } of stalled) startMealAnalysis(id);
}

/** Takes the lease on a meal. Only one analysis per meal can hold it at a time. */
async function claim(mealId: string) {
  const [meal] = await db
    .update(meals)
    .set({ analysisStartedAt: new Date(), analysisAttempts: sql`${meals.analysisAttempts} + 1` })
    .where(and(eq(meals.id, mealId), eq(meals.status, 'analyzing'), stale()))
    .returning();
  return meal;
}

/** Base numbers (a portion of 1) from the nutrient totals of the meal's foods. */
export function baseFromNutrients(n: ComputedItem['nutrients']): BaseNutrition {
  const carbs = n.carbs ?? 0;
  return {
    calories: n.calories ?? 0,
    proteinG: n.protein ?? 0,
    carbsG: carbs,
    fatG: n.fat ?? 0,
    fiberG: n.fiber === undefined ? null : Math.min(n.fiber, carbs),
  };
}

/** Saves the meal's foods (replacing any earlier list). */
export async function saveItems(mealId: string, items: readonly ComputedItem[]) {
  await db.delete(mealItems).where(eq(mealItems.mealId, mealId));
  if (items.length === 0) return;
  await db.insert(mealItems).values(
    items.map((item, position) => ({
      mealId,
      position,
      name: item.name,
      foodId: item.foodId,
      productCode: item.productCode ?? null,
      grams: item.grams,
      nutrients: item.nutrients,
    })),
  );
}

/** The AI's numbers for one portion. Fiber is part of the carbs and never more than 60 g a meal. */
export function baseNutrition(analysis: Pick<MealAnalysis, 'calories' | 'proteinG' | 'carbsG' | 'fatG' | 'fiberG'>): BaseNutrition {
  return {
    calories: analysis.calories,
    proteinG: analysis.proteinG,
    carbsG: analysis.carbsG,
    fatG: analysis.fatG,
    fiberG: Math.min(analysis.fiberG, analysis.carbsG, 60),
  };
}

function toDataUrl(bytes: ArrayBuffer) {
  const view = new Uint8Array(bytes);
  let binary = '';
  for (let i = 0; i < view.length; i += 0x8000) {
    binary += String.fromCharCode(...view.subarray(i, i + 0x8000));
  }
  return `data:image/jpeg;base64,${btoa(binary)}`;
}

const userPhoto = (text: string, photo: ArrayBuffer, detail: 'low' | 'high'): ChatCompletionMessageParam => ({
  role: 'user',
  content: [
    { type: 'text', text },
    { type: 'image_url', image_url: { url: toDataUrl(photo), detail } },
  ],
});

/** One AI call for the meal, depending on how it was logged. Labels also return the serving size. */
async function askAi(meal: MealRow): Promise<MealAnalysis & Partial<Pick<LabelAnalysis, 'servingSize'>>> {
  // The food-quality experiment adds three fields to the same call.
  const quality = foodQualityEnabled();
  const mealSchema = quality ? withQuality(MEAL_JSON_SCHEMA) : MEAL_JSON_SCHEMA;
  const mealRules = quality ? MEAL_QUALITY_RULES : '';
  if (meal.source === 'text') {
    const { data, usage } = await structuredCompletion({
      model: modelFor('text'),
      name: 'meal_analysis',
      jsonSchema: mealSchema,
      schema: mealAnalysisSchema,
      messages: [
        { role: 'system', content: MEAL_TEXT_SYSTEM_PROMPT + mealRules },
        { role: 'user', content: meal.note ?? '' },
      ],
    });
    console.info('[meals] described', JSON.stringify({ mealId: meal.id, isFood: data.isFood, calories: data.calories, usage }));
    return data;
  }

  if (!meal.imageKey) throw new Error('This meal has no photo');
  const photo = await getObject(meal.imageKey);
  if (meal.source === 'label') {
    // Label print is small: the model needs the full-resolution image to read it.
    const { data, usage } = await structuredCompletion({
      model: modelFor('vision'),
      name: 'nutrition_label',
      jsonSchema: quality ? withQuality(LABEL_JSON_SCHEMA) : LABEL_JSON_SCHEMA,
      schema: labelAnalysisSchema,
      messages: [
        { role: 'system', content: LABEL_SYSTEM_PROMPT + (quality ? LABEL_QUALITY_RULES : '') },
        userPhoto('Read this nutrition label.', photo, 'high'),
      ],
    });
    console.info('[meals] label read', JSON.stringify({ mealId: meal.id, isFood: data.isFood, calories: data.calories, usage }));
    // A label is one product: its printed numbers are the answer, no foods to match.
    return { ...data, items: [] };
  }

  const { data, usage } = await structuredCompletion({
    model: modelFor('vision'),
    name: 'meal_analysis',
    jsonSchema: mealSchema,
    schema: mealAnalysisSchema,
    messages: [
      { role: 'system', content: MEAL_SYSTEM_PROMPT + mealRules },
      userPhoto(meal.note ? photoNoteText(meal.note) : 'Analyze this meal photo.', photo, 'low'),
    ],
  });
  console.info('[meals] analyzed', JSON.stringify({ mealId: meal.id, isFood: data.isFood, calories: data.calories, usage }));
  return data;
}

async function deletePhoto(meal: MealRow) {
  if (!meal.imageKey) return;
  await deleteObject(meal.imageKey).catch((error: unknown) =>
    console.warn(`[meals] could not delete the photo of ${meal.id}`, error),
  );
}

async function analyzeMeal(mealId: string) {
  const meal = await claim(mealId);
  if (!meal) return;

  try {
    const analysis = await askAi(meal);

    if (!analysis.isFood) {
      // Nothing to log. Keep the row (so the app can show why) but never keep the photo.
      const fallback =
        meal.source === 'text'
          ? "That doesn't sound like food."
          : meal.source === 'label'
            ? "We couldn't read a nutrition label in this photo."
            : "That doesn't look like food.";
      await db
        .update(meals)
        .set({ status: 'not_food', error: analysis.notFoodReason || fallback, imageKey: null, analysisStartedAt: null })
        .where(eq(meals.id, mealId));
      await deletePhoto(meal);
      return;
    }

    // Split pipeline: the AI listed the foods and grams, the USDA database does the math where a
    // food matches. Without items (labels) the AI's totals are used as they are.
    const items = analysis.items.length > 0 ? await computeItems(analysis.items) : [];
    const totals = items.length > 0 ? itemTotals(items) : null;
    const base = totals ? baseFromNutrients(totals.nutrients) : baseNutrition(analysis);
    const [updated] = await db
      .update(meals)
      .set({
        status: 'completed',
        name: analysis.name.trim() || 'Meal',
        ...scaleNutrition(base, meal.portion),
        baseNutrition: base,
        nutrients: totals?.nutrients ?? null,
        matchedShare: totals?.matchedShare ?? null,
        confidence: analysis.confidence,
        servingSize: analysis.servingSize?.trim() || null,
        processing: analysis.processing ?? null,
        processingReason: analysis.processingReason?.trim() || null,
        addedSugarG: analysis.addedSugarG ?? null,
        error: null,
        analysisStartedAt: null,
      })
      .where(and(eq(meals.id, mealId), eq(meals.status, 'analyzing')))
      .returning({ id: meals.id });
    if (updated) await saveItems(mealId, items);
    if (totals) {
      console.info('[meals] foods', JSON.stringify({ mealId, items: items.length, matchedShare: totals.matchedShare }));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[meals] attempt ${meal.analysisAttempts} of ${MAX_ATTEMPTS} for ${mealId} failed`, error);

    if (meal.analysisAttempts >= MAX_ATTEMPTS) {
      // Failed meals are hidden in the app, so their photo is of no use: delete it.
      await db
        .update(meals)
        .set({ status: 'failed', error: message.slice(0, 500), imageKey: null, analysisStartedAt: null })
        .where(eq(meals.id, mealId));
      await deletePhoto(meal);
      return;
    }
    // Release the lease and try again shortly.
    await db.update(meals).set({ analysisStartedAt: null }).where(eq(meals.id, mealId));
    setTimeout(() => startMealAnalysis(mealId), 2000 * meal.analysisAttempts);
  }
}
