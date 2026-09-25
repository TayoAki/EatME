import { z } from 'zod';

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
