import { z } from 'zod';

import { ageFromDateOfBirth } from './nutrition';

/**
 * Onboarding answers and the AI-generated nutrition plan.
 * Shared by the app (onboarding screens), the API routes and the Trigger.dev tasks.
 */

export const GENDERS = ['male', 'female', 'other'] as const;
export const GOALS = ['lose', 'maintain', 'gain'] as const;
export const ACTIVITY_LEVELS = ['sedentary', 'light', 'active', 'very_active'] as const;
export const DIETS = ['classic', 'pescatarian', 'vegetarian', 'vegan'] as const;
export const UNIT_SYSTEMS = ['metric', 'imperial'] as const;
export const PLAN_SOURCES = ['ai', 'formula'] as const;

export type Gender = (typeof GENDERS)[number];
export type Goal = (typeof GOALS)[number];
export type ActivityLevel = (typeof ACTIVITY_LEVELS)[number];
export type Diet = (typeof DIETS)[number];
export type UnitSystem = (typeof UNIT_SYSTEMS)[number];
export type PlanSource = (typeof PLAN_SOURCES)[number];

export const MIN_WEEKLY_GOAL_KG = 0.1;
export const MAX_WEEKLY_GOAL_KG = 1.5;
export const DEFAULT_WEEKLY_GOAL_KG = 0.5;

/** Minimum age in the Terms of Service; the birthday pickers stop at these ages too. */
export const MIN_AGE = 13;
export const MAX_AGE = 100;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Expected a YYYY-MM-DD date');

export const dateOfBirthSchema = isoDate
  .refine((value) => ageFromDateOfBirth(value) >= MIN_AGE, `You must be at least ${MIN_AGE} years old to use EatME`)
  .refine((value) => ageFromDateOfBirth(value) <= MAX_AGE, 'Enter a valid date of birth');

export const onboardingAnswersSchema = z.object({
  gender: z.enum(GENDERS),
  dateOfBirth: dateOfBirthSchema,
  heightCm: z.number().min(100).max(250),
  weightKg: z.number().min(30).max(300),
  goal: z.enum(GOALS),
  targetWeightKg: z.number().min(30).max(300),
  activityLevel: z.enum(ACTIVITY_LEVELS),
  weeklyGoalKg: z.number().min(0).max(MAX_WEEKLY_GOAL_KG),
  diet: z.enum(DIETS),
  unitSystem: z.enum(UNIT_SYSTEMS),
});
export type OnboardingAnswers = z.infer<typeof onboardingAnswersSchema>;

export const nutritionPlanSchema = z.object({
  calories: z.number().int().min(800).max(7000),
  proteinG: z.number().int().min(0).max(500),
  carbsG: z.number().int().min(0).max(1000),
  fatG: z.number().int().min(0).max(400),
  summary: z.string().max(600),
  source: z.enum(PLAN_SOURCES),
});
export type NutritionPlan = z.infer<typeof nutritionPlanSchema>;

/** Body of `POST /api/plan`: the answers, and whether the person allowed AI (else the formula plan). */
export const planRequestSchema = onboardingAnswersSchema.extend({ aiConsent: z.boolean().optional() });

/** Body of `POST /api/onboarding`. `aiConsent`: the choice on the AI consent screen. */
export const saveOnboardingSchema = z.object({
  answers: onboardingAnswersSchema,
  plan: nutritionPlanSchema,
  timezone: z.string().min(1).max(100),
  aiConsent: z.boolean().optional(),
});
export type SaveOnboardingBody = z.infer<typeof saveOnboardingSchema>;

export const GENDER_LABELS: Record<Gender, string> = {
  male: 'Male',
  female: 'Female',
  other: 'Other',
};

export const GOAL_LABELS: Record<Goal, string> = {
  lose: 'Lose weight',
  maintain: 'Maintain',
  gain: 'Gain weight',
};

export const ACTIVITY_LABELS: Record<ActivityLevel, { title: string; description: string }> = {
  sedentary: { title: 'Sedentary', description: 'Little or no exercise' },
  light: { title: 'Lightly active', description: '1–3 workouts per week' },
  active: { title: 'Active', description: '3–5 workouts per week' },
  very_active: { title: 'Very active', description: '6+ workouts per week' },
};

export const DIET_LABELS: Record<Diet, string> = {
  classic: 'Classic',
  pescatarian: 'Pescatarian',
  vegetarian: 'Vegetarian',
  vegan: 'Vegan',
};
