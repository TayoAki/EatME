import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { aiConsentValues } from '@/lib/server/ai-consent';
import { requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { formulaPlan, minimumCalories } from '@/shared/nutrition';
import { saveOnboardingSchema } from '@/shared/onboarding';

/** Saves the onboarding answers + the AI plan right after sign-up (the account row already exists). */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  const { answers, plan: sentPlan, timezone, aiConsent } = saveOnboardingSchema.parse(await readJson(request));
  // The plan comes from the app: never store one below the safety floor.
  const plan = sentPlan.calories >= minimumCalories(answers.gender) ? sentPlan : formulaPlan(answers);

  const [row] = await db
    .update(users)
    .set({
      gender: answers.gender,
      dateOfBirth: answers.dateOfBirth,
      heightCm: answers.heightCm,
      weightKg: answers.weightKg,
      goal: answers.goal,
      targetWeightKg: answers.goal === 'maintain' ? answers.weightKg : answers.targetWeightKg,
      activityLevel: answers.activityLevel,
      weeklyGoalKg: answers.goal === 'maintain' ? 0 : answers.weeklyGoalKg,
      diet: answers.diet,
      unitSystem: answers.unitSystem,
      timezone: isValidTimeZone(timezone) ? timezone : 'UTC',
      dailyCalories: plan.calories,
      dailyProteinG: plan.proteinG,
      dailyCarbsG: plan.carbsG,
      dailyFatG: plan.fatG,
      planTargets: { calories: plan.calories, proteinG: plan.proteinG, carbsG: plan.carbsG, fatG: plan.fatG },
      planSource: plan.source,
      planSummary: plan.summary,
      onboardingCompletedAt: new Date(),
      ...(aiConsent !== undefined ? aiConsentValues(aiConsent) : {}),
    })
    .where(eq(users.id, userId))
    .returning();
  if (!row) throw new HttpError(404, 'Account not found. Please sign in again.');

  return Response.json({ user: toProfile(row) });
});
