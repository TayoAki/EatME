import { logger, metadata, schemaTask } from '@trigger.dev/sdk';

import { ageFromDateOfBirth, formulaPlan, sanitizePlan } from '@/shared/nutrition';
import { nutritionPlanSchema, onboardingAnswersSchema, type NutritionPlan } from '@/shared/onboarding';

import { modelFor, structuredCompletion } from './ai';
import { PLAN_JSON_SCHEMA, PLAN_SYSTEM_PROMPT } from './prompts';

const MAX_ATTEMPTS = 2;

/** Realtime metadata the "Building your plan" screen listens to. */
export type PlanRunMetadata = { progress: number; stage: string };

/**
 * AI agent that turns the onboarding answers into daily calorie + macro targets.
 * Triggered by `POST /api/plan`; the app follows the run with Trigger.dev Realtime.
 * If the AI keeps failing, the last attempt falls back to the Mifflin-St Jeor formula so onboarding
 * never gets stuck.
 */
export const generatePlan = schemaTask({
  id: 'generate-plan',
  schema: onboardingAnswersSchema,
  retry: { maxAttempts: MAX_ATTEMPTS, minTimeoutInMs: 500, maxTimeoutInMs: 2000 },
  maxDuration: 120,
  run: async (answers, { ctx }): Promise<NutritionPlan> => {
    const isLastAttempt = ctx.attempt.number >= MAX_ATTEMPTS;
    metadata.set('progress', 15);
    metadata.set('stage', 'Estimating your metabolic rate…');

    try {
      const { data, usage } = await structuredCompletion({
        model: modelFor('text'),
        name: 'nutrition_plan',
        jsonSchema: PLAN_JSON_SCHEMA,
        schema: nutritionPlanSchema.omit({ source: true }),
        messages: [
          { role: 'system', content: PLAN_SYSTEM_PROMPT },
          {
            role: 'user',
            content: JSON.stringify({
              gender: answers.gender,
              age: ageFromDateOfBirth(answers.dateOfBirth),
              heightCm: answers.heightCm,
              weightKg: answers.weightKg,
              goal: answers.goal,
              targetWeightKg: answers.targetWeightKg,
              weeklyChangeKg: answers.weeklyGoalKg,
              activityLevel: answers.activityLevel,
              diet: answers.diet,
            }),
          },
        ],
      });
      logger.info('AI plan generated', { plan: data, usage });

      metadata.set('progress', 80);
      metadata.set('stage', 'Balancing your macros…');

      const plan = sanitizePlan({ ...data, source: 'ai' }, answers);
      if (plan) {
        metadata.set('progress', 100);
        metadata.set('stage', 'Your plan is ready');
        return plan;
      }
      logger.warn('AI plan failed the sanity check, using the formula instead', { plan: data });
    } catch (error) {
      // Let Trigger.dev retry; only the last attempt falls back to the formula.
      if (!isLastAttempt) throw error;
      logger.error('AI plan generation failed on the last attempt, using the formula', {
        error: error instanceof Error ? error.message : String(error),
      });
    }

    metadata.set('progress', 100);
    metadata.set('stage', 'Your plan is ready');
    return formulaPlan(answers);
  },
});
