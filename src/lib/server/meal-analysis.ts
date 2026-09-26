import { and, eq, isNull, lt, or, sql } from 'drizzle-orm';

import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

import { db, type Executor } from '@/db';
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
import { followUpEnabled, foodQualityEnabled } from './experiments';
import { buildFollowUp } from './follow-up';
import { computeItems, itemTotals, type ComputedItem } from './food-match';
import { describeError } from './log';
import { markUsed, personalFoodsFor, promptNames } from './personal-foods';
import {
  FOLLOW_UP_RULES,
  LABEL_JSON_SCHEMA,
  LABEL_QUALITY_RULES,
  LABEL_SYSTEM_PROMPT,
  MEAL_JSON_SCHEMA,
  MEAL_QUALITY_RULES,
  MEAL_SYSTEM_PROMPT,
  MEAL_TEXT_SYSTEM_PROMPT,
  multiPhotoText,
  photoNoteText,
  savedNamesText,
  withFollowUp,
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
  void analyzeMeal(mealId).catch((error: unknown) => console.error(`[meals] analysis of ${mealId} crashed: ${describeError(error)}`));
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

/** Saves the meal's foods (replacing any earlier list); returns their ids in order. */
export async function saveItems(mealId: string, items: readonly ComputedItem[], executor: Executor = db) {
  await executor.delete(mealItems).where(eq(mealItems.mealId, mealId));
  if (items.length === 0) return [];
  const rows = await executor
    .insert(mealItems)
    .values(
      items.map((item, position) => ({
        ...(item.id ? { id: item.id } : {}),
        mealId,
        position,
        name: item.name,
        foodId: item.foodId,
        productCode: item.productCode ?? null,
        grams: item.grams,
        nutrients: item.nutrients,
        aiName: item.aiName ?? null,
        personalFoodId: item.personalFoodId ?? null,
      })),
    )
    .returning({ id: mealItems.id, position: mealItems.position });
  return rows.sort((a, b) => a.position - b.position).map((row) => row.id);
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

const userPhotos = (text: string, photos: readonly ArrayBuffer[], detail: 'low' | 'high'): ChatCompletionMessageParam => ({
  role: 'user',
  content: [
    { type: 'text', text },
    ...photos.map((photo) => ({ type: 'image_url' as const, image_url: { url: toDataUrl(photo), detail } })),
  ],
});

/** Every photo key of a meal: the first, then the extra angles. */
const photoKeys = (meal: Pick<MealRow, 'imageKey' | 'extraImageKeys'>) =>
  [meal.imageKey, ...(meal.extraImageKeys ?? [])].filter((key): key is string => !!key);

/**
 * One AI call for the meal, depending on how it was logged. Labels also return the serving size.
 * `savedNames` are the person's remembered foods (sent as data).
 */
async function askAi(
  meal: MealRow,
  savedNames: readonly string[] = [],
): Promise<MealAnalysis & Partial<Pick<LabelAnalysis, 'servingSize'>>> {
  const saved = savedNames.length > 0 ? savedNamesText(savedNames) : null;
  // The food-quality experiment adds three fields to the same call, the follow-up question one.
  const quality = foodQualityEnabled();
  const followUp = followUpEnabled();
  const withQualityFields = quality ? withQuality(MEAL_JSON_SCHEMA) : MEAL_JSON_SCHEMA;
  const mealSchema = followUp ? withFollowUp(withQualityFields) : withQualityFields;
  const mealRules = (quality ? MEAL_QUALITY_RULES : '') + (followUp ? FOLLOW_UP_RULES : '');
  if (meal.source === 'text') {
    const { data, usage } = await structuredCompletion({
      model: modelFor('text'),
      name: 'meal_analysis',
      jsonSchema: mealSchema,
      schema: mealAnalysisSchema,
      messages: [
        { role: 'system', content: MEAL_TEXT_SYSTEM_PROMPT + mealRules },
        ...(saved ? [{ role: 'user' as const, content: saved }] : []),
        { role: 'user', content: meal.note ?? '' },
      ],
    });
    console.info('[meals] described', JSON.stringify({ mealId: meal.id, isFood: data.isFood, usage }));
    return data;
  }

  if (!meal.imageKey) throw new Error('This meal has no photo');
  const photos = await Promise.all(photoKeys(meal).map((key) => getObject(key)));
  const photo = photos[0];
  if (meal.source === 'label') {
    // Label print is small: the model needs the full-resolution image to read it.
    const { data, usage } = await structuredCompletion({
      model: modelFor('vision'),
      name: 'nutrition_label',
      jsonSchema: quality ? withQuality(LABEL_JSON_SCHEMA) : LABEL_JSON_SCHEMA,
      schema: labelAnalysisSchema,
      messages: [
        { role: 'system', content: LABEL_SYSTEM_PROMPT + (quality ? LABEL_QUALITY_RULES : '') },
        userPhotos('Read this nutrition label.', [photo], 'high'),
      ],
    });
    console.info('[meals] label read', JSON.stringify({ mealId: meal.id, isFood: data.isFood, usage }));
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
      userPhotos(
        [
          photos.length > 1 ? multiPhotoText(photos.length) : null,
          meal.note ? photoNoteText(meal.note) : 'Analyze this meal photo.',
          saved,
        ]
          .filter(Boolean)
          .join('\n\n'),
        photos,
        'low',
      ),
    ],
  });
  console.info('[meals] analyzed', JSON.stringify({ mealId: meal.id, isFood: data.isFood, usage }));
  return data;
}

async function deletePhoto(meal: MealRow) {
  await Promise.all(
    photoKeys(meal).map((key) =>
      deleteObject(key).catch((error: unknown) => console.warn(`[meals] could not delete a photo of ${meal.id}: ${describeError(error)}`)),
    ),
  );
}

async function analyzeMeal(mealId: string) {
  const meal = await claim(mealId);
  if (!meal) return;

  try {
    // The person's remembered foods: their names go to the AI, the foods come before the database.
    const memory = meal.source === 'label' ? [] : await personalFoodsFor(meal.userId);
    const analysis = await askAi(meal, promptNames(memory));

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
        .set({
          status: 'not_food',
          error: analysis.notFoodReason || fallback,
          imageKey: null,
          extraImageKeys: null,
          analysisStartedAt: null,
        })
        .where(eq(meals.id, mealId));
      await deletePhoto(meal);
      return;
    }

    // Split pipeline: the AI listed the foods and grams, the USDA database does the math where a
    // food matches. Without items (labels) the AI's totals are used as they are. The ids are made
    // here because the question's answers point at the foods.
    const computed = analysis.items.length > 0 ? await computeItems(analysis.items, memory) : [];
    const items = computed.map((item) => ({ ...item, id: crypto.randomUUID() }));
    const totals = items.length > 0 ? itemTotals(items) : null;
    const base = totals ? baseFromNutrients(totals.nutrients) : baseNutrition(analysis);
    // Steer the AI: the options of its question are worked out now, so answering needs no AI call.
    const followUp =
      followUpEnabled() && analysis.question && items.length > 0
        ? await buildFollowUp(analysis.question, analysis.items, items).catch((error: unknown) => {
            console.warn(`[meals] follow-up question for ${mealId} failed: ${describeError(error)}`);
            return null;
          })
        : null;
    // The meal, its foods and its question are saved together: the app stops polling at the first
    // finished answer, so it must never see a finished meal without them.
    const updated = await db.transaction(async (tx) => {
      const [row] = await tx
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
          followUp,
          error: null,
          analysisStartedAt: null,
        })
        .where(and(eq(meals.id, mealId), eq(meals.status, 'analyzing')))
        .returning({ id: meals.id });
      if (row) await saveItems(mealId, items, tx);
      return !!row;
    });
    if (updated) await markUsed(items.flatMap((item) => (item.personalFoodId ? [item.personalFoodId] : [])));
    if (totals) {
      const remembered = items.filter((item) => item.personalFoodId).length;
      console.info('[meals] foods', JSON.stringify({ mealId, items: items.length, remembered, matchedShare: totals.matchedShare }));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[meals] attempt ${meal.analysisAttempts} of ${MAX_ATTEMPTS} for ${mealId} failed: ${describeError(error)}`);

    if (meal.analysisAttempts >= MAX_ATTEMPTS) {
      // Failed meals are hidden in the app, so their photo is of no use: delete it.
      await db
        .update(meals)
        .set({ status: 'failed', error: message.slice(0, 500), imageKey: null, extraImageKeys: null, analysisStartedAt: null })
        .where(eq(meals.id, mealId));
      await deletePhoto(meal);
      return;
    }
    // Release the lease and try again shortly.
    await db.update(meals).set({ analysisStartedAt: null }).where(eq(meals.id, mealId));
    setTimeout(() => startMealAnalysis(mealId), 2000 * meal.analysisAttempts);
  }
}
