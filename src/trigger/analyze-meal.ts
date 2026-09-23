import { AbortTaskRunError, logger, metadata, schemaTask } from '@trigger.dev/sdk';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { toMeal } from '@/lib/server/dto';
import { deleteFile, visionImageUrl } from '@/lib/server/imagekit';
import { mealAnalysisSchema, type Meal, type MealAnalysisStage } from '@/shared/meals';

import { modelFor, structuredCompletion } from './ai';
import { MEAL_JSON_SCHEMA, MEAL_SYSTEM_PROMPT } from './prompts';

export type AnalyzeMealOutput =
  | { status: 'completed'; meal: Meal }
  | { status: 'not_food'; reason: string };

const setStage = (stage: MealAnalysisStage) => metadata.set('stage', stage);

/**
 * AI agent that analyzes a meal photo: ImageKit URL (downscaled) → vision model → calories + macros.
 * Triggered by `POST /api/meals`. Failed attempts are retried by Trigger.dev; when every attempt
 * fails the meal is marked as failed so the app can offer a retake.
 */
export const analyzeMeal = schemaTask({
  id: 'analyze-meal',
  schema: z.object({ mealId: z.string().uuid() }),
  retry: { maxAttempts: 3, factor: 2, minTimeoutInMs: 1000, maxTimeoutInMs: 8000, randomize: true },
  maxDuration: 180,
  run: async ({ mealId }): Promise<AnalyzeMealOutput> => {
    setStage('preparing');
    const meal = await db.query.meals.findFirst({ where: eq(meals.id, mealId) });
    if (!meal) throw new AbortTaskRunError(`Meal ${mealId} does not exist`);
    if (!meal.imageUrl) throw new AbortTaskRunError(`Meal ${mealId} has no photo`);

    setStage('identifying');
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
            { type: 'image_url', image_url: { url: visionImageUrl(meal.imageUrl), detail: 'low' } },
          ],
        },
      ],
    });
    logger.info('Meal analyzed', { mealId, analysis, usage });

    if (!analysis.isFood) {
      // Not food: nothing to log. Remove the meal and its photo so it never shows up in the list.
      await db.delete(meals).where(eq(meals.id, mealId));
      if (meal.imageFileId) {
        await deleteFile(meal.imageFileId).catch((error: unknown) =>
          logger.warn('Could not delete the photo', { mealId, error: String(error) }),
        );
      }
      setStage('done');
      logger.info('This photo is not food', { mealId, reason: analysis.notFoodReason });
      return {
        status: 'not_food',
        reason: analysis.notFoodReason || "That doesn't look like food.",
      };
    }

    setStage('saving');
    const [saved] = await db
      .update(meals)
      .set({
        status: 'completed',
        name: analysis.name.trim() || 'Meal',
        calories: Math.round(analysis.calories),
        proteinG: Math.round(analysis.proteinG),
        carbsG: Math.round(analysis.carbsG),
        fatG: Math.round(analysis.fatG),
        error: null,
      })
      .where(eq(meals.id, mealId))
      .returning();
    if (!saved) throw new AbortTaskRunError(`Meal ${mealId} was deleted during analysis`);

    setStage('done');
    return { status: 'completed', meal: toMeal(saved) };
  },
  onFailure: async ({ payload, error }) => {
    await db
      .update(meals)
      .set({ status: 'failed', error: error instanceof Error ? error.message : 'Analysis failed' })
      .where(eq(meals.id, payload.mealId));
  },
});
