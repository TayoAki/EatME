import type { ActivityLevel, Diet, Gender, Goal, NutritionPlan, OnboardingAnswers } from './onboarding';

/**
 * Deterministic nutrition math. Used as the fallback when the AI plan fails and to sanity-check
 * whatever the model returns.
 */

export const KCAL_PER_KG = 7700;

/** Daily calorie and macro targets. */
export type MacroTargets = { calories: number; proteinG: number; carbsG: number; fatG: number };

/**
 * The lowest daily calorie target EatME suggests or accepts (below this, dieting needs medical
 * supervision): 1,500 kcal for men, 1,200 for women, the midpoint otherwise.
 */
export function minimumCalories(gender: Gender | null | undefined) {
  return bySex(gender, { female: 1200, male: 1500 });
}

/** The weight at a BMI of 18.5 for this height: EatME never sets a milestone (or goal) below it. */
export function bmiFloorKg(heightCm: number) {
  return 18.5 * (heightCm / 100) ** 2;
}

/** Protein worth aiming for at each meal: the daily goal spread over about four meals, at least 20 g. */
export function proteinPerMeal(dailyProteinG: number) {
  return Math.max(20, Math.round(dailyProteinG / 4 / 5) * 5);
}

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
  const calories = Math.max(minimumCalories(answers.gender), Math.round(target / 10) * 10);
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
 * Typed-in calories and macros that disagree by more than 20% (quick add). Labels round and
 * alcohol or sugar alcohols add calories, so this is only ever a gentle note.
 */
export function macrosDisagree(calories: number, m: { proteinG: number; carbsG: number; fatG: number }) {
  const fromMacros = caloriesFromMacros(m);
  if (calories <= 0 || fromMacros <= 0) return false;
  return Math.abs(fromMacros - calories) / calories > 0.2;
}

/**
 * Validate an AI plan against the formula. Returns `null` when the plan is unsafe or wildly off,
 * otherwise the plan with carbs adjusted so the macros add up to the calories.
 */
export function sanitizePlan(plan: NutritionPlan, answers: OnboardingAnswers): NutritionPlan | null {
  const reference = formulaPlan(answers).calories;
  if (plan.calories < minimumCalories(answers.gender)) return null;
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

/** Picks the value for the user's sex; "other" (or unknown) gets the midpoint. */
function bySex(gender: Gender | null | undefined, values: { female: number; male: number }) {
  if (gender === 'female') return values.female;
  if (gender === 'male') return values.male;
  return Math.round((values.female + values.male) / 2);
}

/** Daily fiber in grams: US/Canada adequate intakes (Dietary Reference Intakes) by sex and age. */
export function recommendedFiberG(gender: Gender | null | undefined, age: number) {
  if (age < 14) return bySex(gender, { female: 26, male: 31 });
  if (age < 51) return bySex(gender, { female: age < 19 ? 26 : 25, male: 38 });
  return bySex(gender, { female: 21, male: 30 });
}

/**
 * Daily water from drinks in millilitres: about 80% of the IOM (2004) adequate intake for total
 * water; the rest comes from food. A guide, not a quota — thirst is the better signal.
 */
export function recommendedWaterMl(gender: Gender | null | undefined, age: number) {
  if (age < 14) return bySex(gender, { female: 1600, male: 1800 });
  if (age < 19) return bySex(gender, { female: 1800, male: 2600 });
  return bySex(gender, { female: 2200, male: 3000 });
}
