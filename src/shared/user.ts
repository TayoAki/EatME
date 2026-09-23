import { z } from 'zod';

import {
  ACTIVITY_LEVELS,
  DIETS,
  GENDERS,
  GOALS,
  UNIT_SYSTEMS,
  type ActivityLevel,
  type Diet,
  type Gender,
  type Goal,
  type PlanSource,
  type UnitSystem,
} from './onboarding';

/** Profile returned by `GET /api/me`. */
export type Profile = {
  id: string;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
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

/** Body of `PATCH /api/me` — personal details edits and the device time zone. */
export const updateProfileSchema = z
  .object({
    gender: z.enum(GENDERS),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    heightCm: z.number().min(100).max(250),
    weightKg: z.number().min(30).max(300),
    targetWeightKg: z.number().min(30).max(300),
    goal: z.enum(GOALS),
    activityLevel: z.enum(ACTIVITY_LEVELS),
    diet: z.enum(DIETS),
    unitSystem: z.enum(UNIT_SYSTEMS),
    timezone: z.string().min(1).max(100),
  })
  .partial();
export type UpdateProfileBody = z.infer<typeof updateProfileSchema>;
