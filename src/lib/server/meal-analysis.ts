import { and, eq, isNull, lt, or, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { mealAnalysisSchema } from '@/shared/meals';

import { modelFor, structuredCompletion } from './ai';
import { MEAL_JSON_SCHEMA, MEAL_SYSTEM_PROMPT } from './prompts';
import { deleteObject, getObject } from './storage';

/** An attempt older than this is considered dead (server restarted mid-way) and is retried. */
const LEASE_MS = 150_000;
const MAX_ATTEMPTS = 3;

const stale = () =>
  or(isNull(meals.analysisStartedAt), lt(meals.analysisStartedAt, new Date(Date.now() - LEASE_MS)));

/**
 * Analyzes a meal photo in the background of the API server (the request that created the meal has
 * already answered). The app polls `GET /api/meals/:id` for the result.
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

function toDataUrl(bytes: ArrayBuffer) {
  const view = new Uint8Array(bytes);
  let binary = '';
  for (let i = 0; i < view.length; i += 0x8000) {
    binary += String.fromCharCode(...view.subarray(i, i + 0x8000));
  }
  return `data:image/jpeg;base64,${btoa(binary)}`;
}

async function analyzeMeal(mealId: string) {
  const meal = await claim(mealId);
  if (!meal) return;

  if (!meal.imageKey) {
    await db.update(meals).set({ status: 'failed', error: 'This meal has no photo' }).where(eq(meals.id, mealId));
    return;
  }

  try {
    const photo = await getObject(meal.imageKey);
    const { data: analysis, usage } = await structuredCompletion({
      model: modelFor('vision'),
      name: 'meal_analysis',
      jsonSchema: MEAL_JSON_SCHEMA,
      schema: mealAnalysisSchema,
      messages: [
        { role: 'system', content: MEAL_SYSTEM_PROMPT },
        {
          role: 'user',
          content: [
            { type: 'text', text: 'Analyze this meal photo.' },
            { type: 'image_url', image_url: { url: toDataUrl(photo), detail: 'low' } },
          ],
        },
      ],
    });
    console.info('[meals] analyzed', JSON.stringify({ mealId, isFood: analysis.isFood, calories: analysis.calories, usage }));

    if (!analysis.isFood) {
      // Nothing to log. Keep the row (so the app can show why) but never keep the photo.
      await db
        .update(meals)
        .set({
          status: 'not_food',
          error: analysis.notFoodReason || "That doesn't look like food.",
          imageKey: null,
          analysisStartedAt: null,
        })
        .where(eq(meals.id, mealId));
      await deleteObject(meal.imageKey).catch((error: unknown) =>
        console.warn(`[meals] could not delete the photo of ${mealId}`, error),
      );
      return;
    }

    await db
      .update(meals)
      .set({
        status: 'completed',
        name: analysis.name.trim() || 'Meal',
        calories: Math.round(analysis.calories),
        proteinG: Math.round(analysis.proteinG),
        carbsG: Math.round(analysis.carbsG),
        fatG: Math.round(analysis.fatG),
        error: null,
        analysisStartedAt: null,
      })
      .where(and(eq(meals.id, mealId), eq(meals.status, 'analyzing')));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[meals] attempt ${meal.analysisAttempts} of ${MAX_ATTEMPTS} for ${mealId} failed`, error);

    if (meal.analysisAttempts >= MAX_ATTEMPTS) {
      // Failed meals are hidden in the app, so their photo is of no use: delete it.
      await db
        .update(meals)
        .set({ status: 'failed', error: message.slice(0, 500), imageKey: null, analysisStartedAt: null })
        .where(eq(meals.id, mealId));
      await deleteObject(meal.imageKey).catch((deleteError: unknown) =>
        console.warn(`[meals] could not delete the photo of ${mealId}`, deleteError),
      );
      return;
    }
    // Release the lease and try again shortly.
    await db.update(meals).set({ analysisStartedAt: null }).where(eq(meals.id, mealId));
    setTimeout(() => startMealAnalysis(mealId), 2000 * meal.analysisAttempts);
  }
}
