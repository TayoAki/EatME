import type { ActivityLevel, Diet, Gender, Goal, NutritionPlan, OnboardingAnswers } from './onboarding';

/**
 * Deterministic nutrition math. Used as the fallback when the AI plan fails and to sanity-check
 * whatever the model returns.
 */

export const KCAL_PER_KG = 7700;
export const MIN_DAILY_CALORIES = 1200;

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  active: 1.55,
  very_active: 1.725,
};

/** Grams of protein per kg of body weight. */
const PROTEIN_PER_KG: Record<Goal, number> = {
  lose: 2.0,
  maintain: 1.6,
  gain: 1.8,
};

/** Share of calories from fat. */
const FAT_SHARE: Record<Diet, number> = {
  classic: 0.28,
  pescatarian: 0.28,
  vegetarian: 0.27,
  vegan: 0.25,
};

export function ageFromDateOfBirth(dateOfBirth: string, today = new Date()): number {
  const [y, m, d] = dateOfBirth.split('-').map(Number);
  let age = today.getFullYear() - y;
  const beforeBirthday = today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d);
  if (beforeBirthday) age -= 1;
  return age;
}

/** Mifflin-St Jeor basal metabolic rate. */
export function basalMetabolicRate(gender: Gender, weightKg: number, heightCm: number, age: number) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  if (gender === 'male') return base + 5;
  if (gender === 'female') return base - 161;
  return base - 78; // average of both offsets
}

export function maintenanceCalories(answers: OnboardingAnswers) {
  const age = ageFromDateOfBirth(answers.dateOfBirth);
  const bmr = basalMetabolicRate(answers.gender, answers.weightKg, answers.heightCm, age);
  return bmr * ACTIVITY_MULTIPLIER[answers.activityLevel];
}

/** Daily calorie surplus (positive) or deficit (negative) needed for the weekly goal. */
export function dailyCalorieAdjustment(goal: Goal, weeklyGoalKg: number) {
  if (goal === 'maintain') return 0;
  const perDay = (weeklyGoalKg * KCAL_PER_KG) / 7;
  return goal === 'gain' ? perDay : -perDay;
}

/** Keep macros consistent with the calorie target: protein and fat first, carbs fill the rest. */
export function macrosForCalories(
  calories: number,
  answers: Pick<OnboardingAnswers, 'goal' | 'diet' | 'weightKg'>,
) {
  const proteinG = Math.round(answers.weightKg * PROTEIN_PER_KG[answers.goal]);
  const fatG = Math.round((calories * FAT_SHARE[answers.diet]) / 9);
  const carbsG = Math.max(0, Math.round((calories - proteinG * 4 - fatG * 9) / 4));
  return { proteinG, carbsG, fatG };
}

export function formulaPlan(answers: OnboardingAnswers): NutritionPlan {
  const target = maintenanceCalories(answers) + dailyCalorieAdjustment(answers.goal, answers.weeklyGoalKg);
  const calories = Math.max(MIN_DAILY_CALORIES, Math.round(target / 10) * 10);
  return {
    calories,
    ...macrosForCalories(calories, answers),
    summary: 'Calculated with the Mifflin-St Jeor equation and your activity level.',
    source: 'formula',
  };
}

export function caloriesFromMacros(m: { proteinG: number; carbsG: number; fatG: number }) {
  return m.proteinG * 4 + m.carbsG * 4 + m.fatG * 9;
}

/**
 * Validate an AI plan against the formula. Returns `null` when the plan is unsafe or wildly off,
 * otherwise the plan with carbs adjusted so the macros add up to the calories.
 */
export function sanitizePlan(plan: NutritionPlan, answers: OnboardingAnswers): NutritionPlan | null {
  const reference = formulaPlan(answers).calories;
  if (plan.calories < MIN_DAILY_CALORIES) return null;
  if (Math.abs(plan.calories - reference) / reference > 0.35) return null;

  const proteinG = Math.round(plan.proteinG);
  const fatG = Math.round(plan.fatG);
  const macroCalories = caloriesFromMacros({ proteinG, carbsG: plan.carbsG, fatG });
  const carbsG =
    Math.abs(macroCalories - plan.calories) / plan.calories > 0.05
      ? Math.max(0, Math.round((plan.calories - proteinG * 4 - fatG * 9) / 4))
      : Math.round(plan.carbsG);

  return { ...plan, calories: Math.round(plan.calories), proteinG, carbsG, fatG };
}

/** Estimated date to reach the target weight, or null when maintaining. */
export function goalDate(
  answers: Pick<OnboardingAnswers, 'goal' | 'weightKg' | 'targetWeightKg' | 'weeklyGoalKg'>,
  from = new Date(),
): Date | null {
  if (answers.goal === 'maintain' || answers.weeklyGoalKg <= 0) return null;
  const weeks = Math.abs(answers.targetWeightKg - answers.weightKg) / answers.weeklyGoalKg;
  const date = new Date(from);
  date.setDate(date.getDate() + Math.ceil(weeks * 7));
  return date;
}
