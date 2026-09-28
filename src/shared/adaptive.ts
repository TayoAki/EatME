import { z } from 'zod';

import {
  basalMetabolicRate,
  bmiFloorKg,
  dailyCalorieAdjustment,
  KCAL_PER_KG,
  maintenanceCalories,
  ageFromDateOfBirth,
  minimumCalories,
} from './nutrition';
import type { ActivityLevel, Gender, Goal } from './onboarding';
import { FAST_LOSS_KG_PER_WEEK } from './weight';

/**
 * The calorie target that adjusts to the weight trend (v2.3, Premium, opt-in). Once a week the
 * check-in compares what was eaten with how the weight moved, estimates the energy the body used,
 * and proposes a target inside the same safety limits as the plan. The person uses it or keeps
 * their target; nothing changes on its own.
 */

/** Days looked back (fewer for someone who started more recently, but at least 14). */
export const CHECKIN_WINDOW_DAYS = 28;
export const CHECKIN_MIN_WINDOW_DAYS = 14;
/** A day counts when at least this much was logged, and at least half the target. */
export const COUNTED_DAY_MIN_KCAL = 800;
export const MIN_COUNTED_DAYS = 10;
export const MIN_RECENT_DAYS = 5;
export const MIN_WEIGH_INS = 4;
export const MIN_WEIGH_IN_SPAN_DAYS = 10;
/** Largest move of the estimate from last week's, and of the target at one check-in. */
export const MAX_WEEKLY_CHANGE_KCAL = 150;

export const CHECKIN_REASONS = [
  'ok',
  'not_enough_logging',
  'not_enough_weights',
  'calorie_floor',
  'bmi_floor',
  'fast_loss',
  'glp1_hold',
  'goal_reached',
] as const;
export type CheckInReason = (typeof CHECKIN_REASONS)[number];
/** Reasons with no proposal (the card says what's missing). */
export const MISSING_DATA: readonly CheckInReason[] = ['not_enough_logging', 'not_enough_weights'];

export const CHECKIN_STATUSES = ['proposed', 'accepted', 'kept'] as const;
export type CheckInStatus = (typeof CHECKIN_STATUSES)[number];

export type CheckInProfile = {
  gender: Gender;
  dateOfBirth: string;
  heightCm: number;
  activityLevel: ActivityLevel;
  goal: Goal;
  weeklyGoalKg: number;
  targetWeightKg: number | null;
};

export type CheckInInput = {
  /** The person's local date. */
  today: string;
  /** Calories logged per local day (any order; days without meals can be left out). */
  days: readonly { date: string; calories: number }[];
  /** Every weigh-in, any order. */
  weights: readonly { date: string; weightKg: number }[];
  /** The first day anything was logged (the window never starts before it). */
  firstLoggedDay: string | null;
  /** Today's calorie target. */
  target: number;
  profile: CheckInProfile;
  glp1: boolean;
  /** Last week's estimate of the energy used, when there was a check-in. */
  previousEstimate: number | null;
};

export type CheckInResult = {
  reason: CheckInReason;
  windowStart: string;
  windowDays: number;
  /** Days that counted in the window, and in the last 7. */
  dataDays: number;
  recentDays: number;
  weighIns: number;
  /** Average calories on counted days. */
  averageIntake: number | null;
  /** Weight change over the window from the line through the weigh-ins (kg), and per week. */
  trendChangeKg: number | null;
  trendPerWeekKg: number | null;
  /** Energy used from the data alone, from the formula, and the share given to the data. */
  dataKcal: number | null;
  formulaKcal: number;
  dataWeight: number;
  /** Estimated energy used a day (the blend, limited and smoothed). */
  estimatedKcal: number | null;
  previousKcal: number;
  /** The proposed target; null when data is missing. */
  proposedKcal: number | null;
};

const DAY_MS = 86_400_000;
const dayNumber = (iso: string) => Date.parse(`${iso}T12:00:00Z`) / DAY_MS;
function shiftDay(iso: string, days: number) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}
const clamp = (value: number, low: number, high: number) => Math.min(high, Math.max(low, value));
const round10 = (value: number) => Math.round(value / 10) * 10;

/** The line through the weigh-ins (least squares): kg per day. */
export function weightSlope(points: readonly { date: string; weightKg: number }[]) {
  const xs = points.map((p) => dayNumber(p.date));
  const meanX = xs.reduce((a, b) => a + b, 0) / xs.length;
  const meanY = points.reduce((a, p) => a + p.weightKg, 0) / points.length;
  let num = 0;
  let den = 0;
  points.forEach((p, i) => {
    num += (xs[i] - meanX) * (p.weightKg - meanY);
    den += (xs[i] - meanX) ** 2;
  });
  return den === 0 ? 0 : num / den;
}

/** The day this week's check-in belongs to: the latest check-in weekday on or before today. */
export function checkInWeekStart(today: string, weekday: number) {
  const current = new Date(`${today}T12:00:00Z`).getUTCDay();
  return shiftDay(today, -((current - weekday + 7) % 7));
}

export function computeCheckIn(input: CheckInInput): CheckInResult {
  const { today, profile, target } = input;
  const yesterday = shiftDay(today, -1);
  const earliest = shiftDay(yesterday, -(CHECKIN_WINDOW_DAYS - 1));
  const windowStart = input.firstLoggedDay && input.firstLoggedDay > earliest ? input.firstLoggedDay : earliest;
  const windowDays = Math.max(0, Math.round(dayNumber(yesterday) - dayNumber(windowStart)) + 1);
  const recentStart = shiftDay(yesterday, -6);

  const counted = input.days.filter(
    (d) => d.date >= windowStart && d.date <= yesterday && d.calories >= COUNTED_DAY_MIN_KCAL && d.calories >= target / 2,
  );
  const recentDays = counted.filter((d) => d.date >= recentStart).length;
  const weights = input.weights.filter((w) => w.date >= windowStart && w.date <= today).sort((a, b) => a.date.localeCompare(b.date));
  const latestWeight = [...input.weights].sort((a, b) => a.date.localeCompare(b.date)).at(-1)?.weightKg ?? null;
  const age = ageFromDateOfBirth(profile.dateOfBirth, new Date(`${today}T12:00:00Z`));
  const weightNow = latestWeight ?? 70;
  const bmr = basalMetabolicRate(profile.gender, weightNow, profile.heightCm, age);
  const formulaKcal = Math.round(
    maintenanceCalories({
      gender: profile.gender,
      dateOfBirth: profile.dateOfBirth,
      heightCm: profile.heightCm,
      weightKg: weightNow,
      goal: profile.goal,
      targetWeightKg: profile.targetWeightKg ?? weightNow,
      activityLevel: profile.activityLevel,
      weeklyGoalKg: profile.weeklyGoalKg,
      diet: 'classic',
      unitSystem: 'metric',
    }),
  );

  const base: CheckInResult = {
    reason: 'ok',
    windowStart,
    windowDays,
    dataDays: counted.length,
    recentDays,
    weighIns: weights.length,
    averageIntake: null,
    trendChangeKg: null,
    trendPerWeekKg: null,
    dataKcal: null,
    formulaKcal,
    dataWeight: 0,
    estimatedKcal: null,
    previousKcal: target,
    proposedKcal: null,
  };

  if (windowDays < CHECKIN_MIN_WINDOW_DAYS || counted.length < MIN_COUNTED_DAYS || recentDays < MIN_RECENT_DAYS) {
    return { ...base, reason: 'not_enough_logging' };
  }
  const span = weights.length > 0 ? dayNumber(weights[weights.length - 1].date) - dayNumber(weights[0].date) : 0;
  if (weights.length < MIN_WEIGH_INS || span < MIN_WEIGH_IN_SPAN_DAYS) return { ...base, reason: 'not_enough_weights' };

  const averageIntake = counted.reduce((sum, d) => sum + d.calories, 0) / counted.length;
  const slope = weightSlope(weights);
  const trendChangeKg = slope * windowDays;
  const dataKcal = averageIntake - slope * KCAL_PER_KG;
  // Early on the formula counts more; with every day of four weeks logged, only the data counts.
  const dataWeight = Math.min(1, counted.length / CHECKIN_WINDOW_DAYS);
  let estimate = dataWeight * dataKcal + (1 - dataWeight) * formulaKcal;
  estimate = clamp(estimate, 1.1 * bmr, 2.4 * bmr);
  if (input.previousEstimate !== null) {
    estimate = clamp(estimate, input.previousEstimate - MAX_WEEKLY_CHANGE_KCAL, input.previousEstimate + MAX_WEEKLY_CHANGE_KCAL);
  }
  const estimatedKcal = Math.round(estimate);

  let reason: CheckInReason = 'ok';
  let proposed: number;
  const reachedGoal =
    profile.targetWeightKg !== null &&
    ((profile.goal === 'lose' && weightNow <= profile.targetWeightKg + 0.5) || (profile.goal === 'gain' && weightNow >= profile.targetWeightKg - 0.5));
  if (reachedGoal) {
    reason = 'goal_reached';
    proposed = estimate;
  } else if (profile.goal === 'lose' && weightNow <= bmiFloorKg(profile.heightCm)) {
    reason = 'bmi_floor';
    proposed = estimate;
  } else {
    proposed = estimate + dailyCalorieAdjustment(profile.goal, profile.weeklyGoalKg);
  }
  proposed = clamp(round10(proposed), target - MAX_WEEKLY_CHANGE_KCAL, target + MAX_WEEKLY_CHANGE_KCAL);

  const floor = minimumCalories(profile.gender);
  if (proposed < floor) {
    proposed = floor;
    if (reason === 'ok') reason = 'calorie_floor';
  }
  if (proposed < target && slope * 7 < -FAST_LOSS_KG_PER_WEEK) {
    proposed = target;
    reason = 'fast_loss';
  }
  if (proposed < target && input.glp1) {
    // Appetite is already low on a GLP-1 medicine and the aim is enough protein: never lower.
    proposed = target;
    reason = 'glp1_hold';
  }

  return {
    ...base,
    reason,
    averageIntake: Math.round(averageIntake),
    trendChangeKg: Math.round(trendChangeKg * 10) / 10,
    trendPerWeekKg: Math.round(slope * 7 * 10) / 10,
    dataKcal: Math.round(dataKcal),
    dataWeight: Math.round(dataWeight * 100) / 100,
    estimatedKcal,
    proposedKcal: proposed,
  };
}

/** New macros for a new calorie target: protein and fat stay, carbs take the difference. */
export function macrosForNewTarget(calories: number, current: { proteinG: number; fatG: number }) {
  return { proteinG: current.proteinG, fatG: current.fatG, carbsG: Math.max(20, Math.round((calories - current.proteinG * 4 - current.fatG * 9) / 4)) };
}

/** A saved check-in, as the app sees it. */
export type CheckIn = {
  id: string | null;
  weekStart: string;
  status: CheckInStatus | null;
  reason: CheckInReason;
  estimatedKcal: number | null;
  averageIntake: number | null;
  trendPerWeekKg: number | null;
  dataDays: number;
  recentDays: number;
  weighIns: number;
  previousKcal: number;
  proposedKcal: number | null;
  createdAt: string | null;
};

/** `GET /api/checkin`. */
export type CheckInResponse = {
  /** "Adjust my calorie target each week" is on. */
  enabled: boolean;
  /** Premium (or payments off): the check-in can run. */
  premium: boolean;
  /** 14 days logged and 4 weigh-ins: Home can offer the feature once. */
  eligible: boolean;
  weekday: number;
  /** This week's check-in (null when off or not Premium). */
  checkIn: CheckIn | null;
  /** Earlier check-ins with a proposal, the latest first. */
  history: CheckIn[];
};

/** `PUT /api/checkin/settings`. */
export const checkInSettingsSchema = z.object({
  enabled: z.boolean(),
  weekday: z.number().int().min(0).max(6).optional(),
});
export type CheckInSettingsBody = z.infer<typeof checkInSettingsSchema>;
