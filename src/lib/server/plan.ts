import { ageFromDateOfBirth, formulaPlan, sanitizePlan } from '@/shared/nutrition';
import { nutritionPlanSchema, type NutritionPlan, type OnboardingAnswers } from '@/shared/onboarding';

import { modelFor, structuredCompletion } from './ai';
import { describeError } from './log';
import { PLAN_JSON_SCHEMA, PLAN_SYSTEM_PROMPT } from './prompts';

const ATTEMPTS = 2;

/**
 * AI agent that turns the onboarding answers into daily calorie + macro targets.
 * Never fails: when the AI keeps failing (or answers nonsense) it falls back to the Mifflin-St Jeor
 * formula, so onboarding cannot get stuck.
 */
export async function generatePlan(answers: OnboardingAnswers): Promise<NutritionPlan> {
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
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

      const plan = sanitizePlan({ ...data, source: 'ai' }, answers);
      if (plan) {
        console.info('[plan] AI plan generated', JSON.stringify({ usage }));
        return plan;
      }
      console.warn('[plan] AI plan failed the sanity check, using the formula');
      break;
    } catch (error) {
      console.error(`[plan] attempt ${attempt} of ${ATTEMPTS} failed: ${describeError(error)}`);
    }
  }
  return formulaPlan(answers);
}
