import { z } from 'zod';

/** Largest single entry — a guard against typos and against encouraging people to over-drink. */
export const MAX_WATER_ENTRY_ML = 2000;
/** Above this much within an hour the app suggests sipping instead (kidneys clear about 0.8–1 L an hour). */
export const FAST_DRINKING_ML_PER_HOUR = 1000;

export type WaterEntry = { id: string; amountMl: number; loggedAt: string };
export type WaterDay = { date: string; entries: WaterEntry[]; totalMl: number };

/** Body of `POST /api/water`. `date` logs on an earlier day (stored at noon, local time). */
export const addWaterSchema = z.object({
  amountMl: z.number().int().min(1).max(MAX_WATER_ENTRY_ML),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
});
export type AddWaterBody = z.infer<typeof addWaterSchema>;

/** Water logged in the hour before `now` (for the "sip, don't chug" note). */
export function mlInLastHour(entries: WaterEntry[], now = Date.now()) {
  return entries
    .filter((e) => now - new Date(e.loggedAt).getTime() <= 60 * 60 * 1000 && new Date(e.loggedAt).getTime() <= now)
    .reduce((sum, e) => sum + e.amountMl, 0);
}
