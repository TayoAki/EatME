import type { DoseLogRow, FoodRow, MealItemRow, MealRow, SymptomLogRow, User, WaterLogRow } from '@/db/schema';
import type { DoseLog, Severity, SymptomLog } from '@/shared/glp1';
import type { FoodSummary, Meal, MealItem } from '@/shared/meals';
import { scaleNutrients } from '@/shared/nutrients';
import { ageFromDateOfBirth, recommendedFiberG, recommendedWaterMl } from '@/shared/nutrition';
import type { Profile } from '@/shared/user';
import type { WaterEntry } from '@/shared/water';

import { signedGetUrl } from './storage';
import { hasAiConsent } from './ai-consent';

export function toProfile(user: User): Profile {
  // Without a birthday yet (mid-onboarding), assume an adult.
  const age = user.dateOfBirth ? ageFromDateOfBirth(user.dateOfBirth) : 30;
  const recommended = { fiberG: recommendedFiberG(user.gender, age), waterMl: recommendedWaterMl(user.gender, age) };
  return {
    id: user.id,
    email: user.email,
    emailVerified: user.emailVerified,
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
    glp1: user.glp1,
    recommended,
    planSource: user.planSource,
    planSummary: user.planSummary,
    preferences: user.preferences ?? {},
    aiConsent: hasAiConsent(user),
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
    nutrients: meal.nutrients ? scaleNutrients(meal.nutrients, meal.portion) : null,
    matchedShare: meal.matchedShare,
    processing: meal.processing,
    processingReason: meal.processingReason,
    addedSugarG: meal.addedSugarG === null ? null : Math.round(meal.addedSugarG * meal.portion),
    savedMealId: meal.savedMealId,
    imageUrl: meal.imageKey ? await signedGetUrl(meal.imageKey) : null,
    extraImageUrls: meal.extraImageKeys ? await Promise.all(meal.extraImageKeys.map((key) => signedGetUrl(key))) : [],
    // How each answer changes the meal stays on the server.
    followUp: meal.followUp
      ? { ...meal.followUp, options: meal.followUp.options.map(({ label, calories }) => ({ label, calories })) }
      : null,
    error: meal.error,
    loggedAt: meal.loggedAt.toISOString(),
    createdAt: meal.createdAt.toISOString(),
    updatedAt: meal.updatedAt.toISOString(),
  };
}

export function toWaterEntry(row: WaterLogRow): WaterEntry {
  return { id: row.id, amountMl: row.amountMl, loggedAt: row.loggedAt.toISOString() };
}

export function toDoseLog(row: DoseLogRow): DoseLog {
  return { id: row.id, takenAt: row.takenAt.toISOString(), doseLabel: row.doseLabel, site: row.site, note: row.note };
}

export function toSymptomLog(row: SymptomLogRow): SymptomLog {
  return {
    id: row.id,
    loggedAt: row.loggedAt.toISOString(),
    symptoms: row.symptoms,
    severity: row.severity as Severity,
    note: row.note,
  };
}

/** A meal food for the logged portion (items are stored for a portion of 1). */
export function toMealItem(
  item: MealItemRow,
  portion: number,
  food: { description: string; portions: [string, number][] } | null,
  product: MealItem['product'] = null,
): MealItem {
  const n = scaleNutrients(item.nutrients, portion);
  const round = (value: number | undefined) => Math.round(value ?? 0);
  return {
    id: item.id,
    name: item.name,
    foodId: item.foodId,
    foodName: food?.description ?? null,
    grams: Math.round(item.grams * portion),
    calories: round(n.calories),
    proteinG: round(n.protein),
    carbsG: round(n.carbs),
    fatG: round(n.fat),
    fiberG: n.fiber === undefined ? null : round(n.fiber),
    portions: food?.portions ?? [],
    product,
    personalFoodId: item.personalFoodId,
    restaurant: item.restaurant
      ? { chain: item.restaurant.chain, serving: item.restaurant.serving, count: Math.round(item.restaurant.count * portion * 100) / 100 }
      : null,
  };
}

export function toFoodSummary(food: FoodRow): FoodSummary {
  const n = food.nutrients;
  const round1 = (value: number | undefined) => Math.round((value ?? 0) * 10) / 10;
  return {
    id: food.id,
    description: food.description,
    category: food.category,
    per100g: {
      calories: Math.round(n.calories ?? 0),
      proteinG: round1(n.protein),
      carbsG: round1(n.carbs),
      fatG: round1(n.fat),
      fiberG: n.fiber === undefined ? null : round1(n.fiber),
    },
    portions: food.portions,
  };
}
