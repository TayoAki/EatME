import { z } from 'zod';

import { bmiFloorKg } from './nutrition';
import type { Goal } from './onboarding';

/** Same bounds as onboarding and Personal details. */
export const MIN_WEIGHT_KG = 30;
export const MAX_WEIGHT_KG = 300;

/** Body of `POST /api/weights`: a weigh-in for today, or for an earlier `date`. */
export const addWeightSchema = z.object({
  weightKg: z.number().min(MIN_WEIGHT_KG).max(MAX_WEIGHT_KG),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});
export type AddWeightBody = z.infer<typeof addWeightSchema>;

export type WeightEntry = { id: string; date: string; weightKg: number };

/** `GET /api/weights`: every weigh-in, oldest first, and the goal from onboarding. */
export type WeightHistory = {
  entries: WeightEntry[];
  goal: Goal | null;
  targetWeightKg: number | null;
};

/** Chart ranges on the Weight screen (null = everything). */
export const WEIGHT_RANGES = [
  { label: '1M', value: '30' },
  { label: '3M', value: '90' },
  { label: '6M', value: '182' },
  { label: '1Y', value: '365' },
  { label: 'All', value: 'all' },
] as const;
export type WeightRange = (typeof WEIGHT_RANGES)[number]['value'];

/** Share of the way from the first weigh-in to the goal weight (0–1), for lose and gain goals. */
export function goalProgress(startKg: number, currentKg: number, targetKg: number) {
  const total = targetKg - startKg;
  if (Math.abs(total) < 0.05) return 1;
  return Math.min(1, Math.max(0, (currentKg - startKg) / total));
}

/** A weigh-in with the trend at that day. */
export type TrendPoint = { date: string; weightKg: number; trendKg: number };

const DAY_MS = 86_400_000;
const daysBetween = (from: string, to: string) => Math.round((Date.parse(`${to}T12:00:00Z`) - Date.parse(`${from}T12:00:00Z`)) / DAY_MS);
const round1 = (kg: number) => Math.round(kg * 10) / 10;

/**
 * The trend line: a daily moving average that handles gaps. Each day moves it 10% of the way to
 * the weight, so a weigh-in after `n` days pulls it by 1 − 0.9ⁿ of the difference (a week-long gap
 * counts like a week of daily weigh-ins). Water and salt swings of a day barely move it.
 */
export function weightTrend(entries: readonly Pick<WeightEntry, 'date' | 'weightKg'>[]): TrendPoint[] {
  const points: TrendPoint[] = [];
  for (const entry of entries) {
    const previous = points[points.length - 1];
    const trendKg = previous
      ? previous.trendKg + (1 - 0.9 ** Math.max(1, daysBetween(previous.date, entry.date))) * (entry.weightKg - previous.trendKg)
      : entry.weightKg;
    points.push({ date: entry.date, weightKg: entry.weightKg, trendKg });
  }
  return points;
}

/**
 * Milestones on the way to a lose or gain goal: every 5% of the way (at least 1 kg apart), the
 * goal last, and never below the BMI 18.5 floor.
 */
export function weightMilestones(startKg: number, targetKg: number, goal: Goal | null, heightCm: number | null) {
  const way = targetKg - startKg;
  if ((goal !== 'lose' || way >= 0) && (goal !== 'gain' || way <= 0)) return [];
  const step = Math.max(Math.abs(way) * 0.05, 1);
  const floor = heightCm ? bmiFloorKg(heightCm) : 0;
  const milestones: number[] = [];
  for (let k = 1; k * step < Math.abs(way) - 0.05; k++) milestones.push(round1(startKg + Math.sign(way) * k * step));
  milestones.push(round1(targetKg));
  return milestones.filter((kg) => kg >= floor);
}

/** The furthest milestone the trend has crossed (null when none yet). */
export function reachedMilestone(milestones: readonly number[], trendKg: number, goal: Goal | null) {
  const crossed = milestones.filter((kg) => (goal === 'lose' ? trendKg <= kg : trendKg >= kg));
  if (crossed.length === 0) return null;
  return goal === 'lose' ? Math.min(...crossed) : Math.max(...crossed);
}

/**
 * How fast the trend moved over the last 4 weeks, in kg a week (negative = losing). Null until
 * the weigh-ins cover at least 3 weeks.
 */
export function trendPerWeek(trend: readonly TrendPoint[], weeks = 4) {
  const last = trend[trend.length - 1];
  if (!last) return null;
  const since = new Date(Date.parse(`${last.date}T12:00:00Z`) - weeks * 7 * DAY_MS).toISOString().slice(0, 10);
  const from = [...trend].reverse().find((point) => point.date <= since) ?? trend[0];
  const days = daysBetween(from.date, last.date);
  if (days < 21) return null;
  return ((last.trendKg - from.trendKg) / days) * 7;
}

/** Losing faster than this (kg a week, over 4 weeks) shows a note to check in with a doctor. */
export const FAST_LOSS_KG_PER_WEEK = 1;
