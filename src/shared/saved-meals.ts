import { z } from 'zod';

import type { Meal } from './meals';

/** Most saved meals and repeats one person can keep (PLAN.md §16). */
export const MAX_SAVED_MEALS = 100;
export const MAX_REPEATS = 20;

/** How a planned (repeated) meal was answered on a day. Nothing is ever logged without a tap. */
export const REPEAT_RESPONSES = ['logged', 'skipped'] as const;
export type RepeatResponse = (typeof REPEAT_RESPONSES)[number];

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const name = z.string().trim().min(1).max(80);

/**
 * When a saved meal repeats: weekdays as in `Date.getDay()` (0 = Sunday … 6 = Saturday, like the
 * GLP-1 dose day) and the usual local time, "HH:MM".
 */
export const repeatSchema = z
  .object({
    weekdays: z
      .array(z.number().int().min(0).max(6))
      .min(1, 'Pick at least one day.')
      .max(7)
      .refine((days) => new Set(days).size === days.length, 'Each day once.'),
    time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Use HH:MM.'),
  })
  .strict();
export type MealRepeat = z.infer<typeof repeatSchema>;

/**
 * Body of `POST /api/saved-meals`: save a logged meal (`mealId`, a copy is kept) or build a new
 * one from database foods.
 */
export const createSavedMealSchema = z.union([
  z.object({ mealId: z.string().uuid(), name: name.optional() }).strict(),
  z
    .object({
      name,
      items: z
        .array(z.object({ foodId: z.number().int().positive(), grams: z.number().min(1).max(3000), name: name.optional() }).strict())
        .min(1)
        .max(30),
    })
    .strict(),
]);
export type CreateSavedMealBody = z.infer<typeof createSavedMealSchema>;

/** A saved meal with its repeat, as `GET /api/saved-meals` returns it. */
export type SavedMeal = Meal & { repeat: MealRepeat | null; timesLogged: number };

/** Body of `POST /api/repeats/:id/log|skip`: the person's local day. */
export const repeatDaySchema = z.object({ date: isoDate }).strict();

/** A saved meal planned for a day (`GET /api/repeats?date=`), with the answer if there is one. */
export type PlannedMeal = {
  repeatId: string;
  time: string;
  meal: Meal;
  response: RepeatResponse | null;
  /** The meal logged from it that day. */
  loggedMealId: string | null;
};

/** Weekday of an ISO date (0 = Sunday), the same everywhere. */
export const weekdayOf = (isoDate: string) => new Date(`${isoDate}T12:00:00Z`).getUTCDay();

const SHORT_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
/** Monday first, as the app's week strips. */
export const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0] as const;

/** "Every day", "Weekdays", "Weekends" or "Mon, Wed, Fri". */
export function repeatDaysLabel(weekdays: readonly number[]) {
  const days = new Set(weekdays);
  if (days.size === 7) return 'Every day';
  if (days.size === 5 && [1, 2, 3, 4, 5].every((d) => days.has(d))) return 'Weekdays';
  if (days.size === 2 && days.has(0) && days.has(6)) return 'Weekends';
  return WEEK_ORDER.filter((d) => days.has(d))
    .map((d) => SHORT_DAYS[d])
    .join(', ');
}
