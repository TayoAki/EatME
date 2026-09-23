import { db } from '@/db';
import { users } from '@/db/schema';
import { clerkClient, requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { handle, readJson } from '@/lib/server/http';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { saveOnboardingSchema } from '@/shared/onboarding';

/**
 * Saves the onboarding answers + the AI plan after sign-up. Upserts, because the Clerk webhook task
 * may not have created the user row yet.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  const { answers, plan, timezone } = saveOnboardingSchema.parse(await readJson(request));

  // Fill in the identity now in case the webhook has not synced this user yet.
  const clerkUser = await clerkClient()
    .users.getUser(userId)
    .catch(() => null);
  const identity = clerkUser
    ? {
        email: clerkUser.primaryEmailAddress?.emailAddress ?? null,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
        imageUrl: clerkUser.imageUrl,
      }
    : {};

  const profile = {
    ...identity,
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
    planSource: plan.source,
    planSummary: plan.summary,
    onboardingCompletedAt: new Date(),
  };

  const [row] = await db
    .insert(users)
    .values({ id: userId, ...profile })
    .onConflictDoUpdate({ target: users.id, set: profile })
    .returning();

  return Response.json({ user: toProfile(row) });
});
