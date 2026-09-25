import { z } from 'zod';

import {
  ACTIVITY_LEVELS,
  DIETS,
  GENDERS,
  GOALS,
  UNIT_SYSTEMS,
  dateOfBirthSchema,
  type ActivityLevel,
  type Diet,
  type Gender,
  type Goal,
  type PlanSource,
  type UnitSystem,
} from './onboarding';
import type { Glp1Settings } from './glp1';
import type { MacroTargets } from './nutrition';

/** App preferences kept on the account (all off by default). */
export type Preferences = {
  /** Food-quality tag on meals (V2 experiment, when the server offers it). */
  foodQualityTag?: boolean;
};

/** Profile returned by `GET /api/me`. */
export type Profile = {
  id: string;
  email: string;
  /** Confirmed with an emailed code (V2). */
  emailVerified: boolean;
  preferences: Preferences;
  name: string;
  gender: Gender | null;
  dateOfBirth: string | null;
  heightCm: number | null;
  weightKg: number | null;
  goal: Goal | null;
  targetWeightKg: number | null;
  activityLevel: ActivityLevel | null;
  weeklyGoalKg: number | null;
  diet: Diet | null;
  unitSystem: UnitSystem;
  timezone: string;
  dailyCalories: number | null;
  dailyProteinG: number | null;
  dailyCarbsG: number | null;
  dailyFatG: number | null;
  /** What the plan suggested, for "Use my plan" once the user has changed the targets. */
  planTargets: MacroTargets | null;
  /** Daily fiber goal (g): the user's own, or the recommended one. */
  dailyFiberG: number;
  /** Daily water goal from drinks (ml): the user's own, or the recommended one. */
  dailyWaterMl: number;
  /** Official recommendations for this user, for "Use recommended". */
  recommended: { fiberG: number; waterMl: number };
  /** GLP-1 mode settings, or null when it is off. */
  glp1: Glp1Settings | null;
  planSource: PlanSource | null;
  planSummary: string | null;
  onboardingCompletedAt: string | null;
  createdAt: string;
};

export type MeResponse = { user: Profile | null };

export type StreakResponse = {
  /** Consecutive days (ending today, or yesterday if nothing is logged yet today) with a logged meal. */
  current: number;
  /** Local dates (YYYY-MM-DD) with at least one logged meal in the last 3 weeks. */
  loggedDates: string[];
  today: string;
};

/** Accepted range for the user's own macro targets (grams a day). Fat and protein keep a safe minimum. */
export const MACRO_LIMITS = {
  proteinG: { min: 30, max: 400 },
  carbsG: { min: 20, max: 900 },
  fatG: { min: 20, max: 300 },
} as const;

/** Body of `PATCH /api/me` — personal details, daily goals and the device time zone. */
export const updateProfileSchema = z
  .object({
    gender: z.enum(GENDERS),
    dateOfBirth: dateOfBirthSchema,
    heightCm: z.number().min(100).max(250),
    weightKg: z.number().min(30).max(300),
    targetWeightKg: z.number().min(30).max(300),
    goal: z.enum(GOALS),
    activityLevel: z.enum(ACTIVITY_LEVELS),
    diet: z.enum(DIETS),
    unitSystem: z.enum(UNIT_SYSTEMS),
    timezone: z.string().min(1).max(100),
    /** null = go back to the recommended goal. */
    dailyFiberG: z.number().int().min(5).max(100).nullable(),
    dailyWaterMl: z.number().int().min(500).max(6000).nullable(),
    /** The user's own calorie and macro targets; null = back to the plan's value. The calorie
     * floor depends on sex and is checked on the server (`minimumCalories`). */
    dailyCalories: z.number().int().min(1000).max(6000).nullable(),
    dailyProteinG: z.number().int().min(MACRO_LIMITS.proteinG.min).max(MACRO_LIMITS.proteinG.max).nullable(),
    dailyCarbsG: z.number().int().min(MACRO_LIMITS.carbsG.min).max(MACRO_LIMITS.carbsG.max).nullable(),
    dailyFatG: z.number().int().min(MACRO_LIMITS.fatG.min).max(MACRO_LIMITS.fatG.max).nullable(),
    /** Merged into the stored preferences. */
    preferences: z.object({ foodQualityTag: z.boolean() }).partial().strict(),
  })
  .partial();
export type UpdateProfileBody = z.infer<typeof updateProfileSchema>;
