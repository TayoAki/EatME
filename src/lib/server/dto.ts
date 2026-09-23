import type { MealRow, User } from '@/db/schema';
import type { Meal } from '@/shared/meals';
import type { Profile } from '@/shared/user';

export function toProfile(user: User): Profile {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl: user.imageUrl,
    gender: user.gender,
    dateOfBirth: user.dateOfBirth,
    heightCm: user.heightCm,
    weightKg: user.weightKg,
    goal: user.goal,
    targetWeightKg: user.targetWeightKg,
    activityLevel: user.activityLevel,
    weeklyGoalKg: user.weeklyGoalKg,
    diet: user.diet,
    unitSystem: user.unitSystem,
    timezone: user.timezone,
    dailyCalories: user.dailyCalories,
    dailyProteinG: user.dailyProteinG,
    dailyCarbsG: user.dailyCarbsG,
    dailyFatG: user.dailyFatG,
    planSource: user.planSource,
    planSummary: user.planSummary,
    onboardingCompletedAt: user.onboardingCompletedAt?.toISOString() ?? null,
    createdAt: user.createdAt.toISOString(),
  };
}

export function toMeal(meal: MealRow): Meal {
  return {
    id: meal.id,
    status: meal.status,
    name: meal.name,
    calories: meal.calories,
    proteinG: meal.proteinG,
    carbsG: meal.carbsG,
    fatG: meal.fatG,
    imageUrl: meal.imageUrl,
    triggerRunId: meal.triggerRunId,
    error: meal.error,
    loggedAt: meal.loggedAt.toISOString(),
    createdAt: meal.createdAt.toISOString(),
  };
}
