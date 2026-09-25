import type { MealRow, User, WaterLogRow } from '@/db/schema';
import type { Meal } from '@/shared/meals';
import { ageFromDateOfBirth, recommendedFiberG, recommendedWaterMl } from '@/shared/nutrition';
import type { Profile } from '@/shared/user';
import type { WaterEntry } from '@/shared/water';

import { signedGetUrl } from './storage';

export function toProfile(user: User): Profile {
  // Without a birthday yet (mid-onboarding), assume an adult.
  const age = user.dateOfBirth ? ageFromDateOfBirth(user.dateOfBirth) : 30;
  const recommended = { fiberG: recommendedFiberG(user.gender, age), waterMl: recommendedWaterMl(user.gender, age) };
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
    planTargets: user.planTargets,
    dailyFiberG: user.dailyFiberG ?? recommended.fiberG,
    dailyWaterMl: user.dailyWaterMl ?? recommended.waterMl,
    recommended,
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
    fiberG: meal.fiberG,
    confidence: meal.confidence,
    source: meal.source,
    isFavorite: meal.isFavorite,
    portion: meal.portion,
    note: meal.note,
    servingSize: meal.servingSize,
    imageUrl: meal.imageKey ? await signedGetUrl(meal.imageKey) : null,
    error: meal.error,
    loggedAt: meal.loggedAt.toISOString(),
    createdAt: meal.createdAt.toISOString(),
  };
}

export function toWaterEntry(row: WaterLogRow): WaterEntry {
  return { id: row.id, amountMl: row.amountMl, loggedAt: row.loggedAt.toISOString() };
}
