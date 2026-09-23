import type { MealRow, User } from '@/db/schema';
import type { Meal } from '@/shared/meals';
import type { Profile } from '@/shared/user';

import { signedGetUrl } from './storage';

export function toProfile(user: User): Profile {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
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

export async function toMeal(meal: MealRow): Promise<Meal> {
  return {
    id: meal.id,
    status: meal.status,
    name: meal.name,
    calories: meal.calories,
    proteinG: meal.proteinG,
    carbsG: meal.carbsG,
    fatG: meal.fatG,
    imageUrl: meal.imageKey ? await signedGetUrl(meal.imageKey) : null,
    error: meal.error,
    loggedAt: meal.loggedAt.toISOString(),
    createdAt: meal.createdAt.toISOString(),
  };
}
