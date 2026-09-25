import { and, eq, gte, lt } from 'drizzle-orm';

import { db } from '@/db';
import { meals, supplementLogs, supplements, users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dateParam, dayBounds } from '@/lib/server/day';
import { handle, HttpError } from '@/lib/server/http';
import { ageFromDateOfBirth } from '@/shared/nutrition';
import { addNutrients, nutrientTargets, overUpperLimits, scaleNutrients, type NutrientDay } from '@/shared/nutrients';

/** Vitamins and minerals of one local day, from the foods matched in the USDA database. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  const { start, end } = dayBounds(date, user.timezone);

  const rows = await db
    .select({ calories: meals.calories, nutrients: meals.nutrients, matchedShare: meals.matchedShare, portion: meals.portion })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'completed'), gte(meals.loggedAt, start), lt(meals.loggedAt, end)));

  const calories = rows.reduce((sum, r) => sum + (r.calories ?? 0), 0);
  const coveredCalories = Math.round(rows.reduce((sum, r) => sum + (r.calories ?? 0) * (r.matchedShare ?? 0), 0));
  const totals = addNutrients(rows.flatMap((r) => (r.nutrients ? [scaleNutrients(r.nutrients, r.portion)] : [])));
  const age = user.dateOfBirth ? ageFromDateOfBirth(user.dateOfBirth) : 30;

  const taken = await db
    .select({ name: supplements.name, nutrients: supplementLogs.nutrients })
    .from(supplementLogs)
    .innerJoin(supplements, eq(supplements.id, supplementLogs.supplementId))
    .where(and(eq(supplementLogs.userId, userId), eq(supplementLogs.date, date)));
  const fromSupplements = addNutrients(taken.map((t) => t.nutrients));

  const day: NutrientDay = {
    date,
    totals,
    calories,
    coveredCalories,
    meals: rows.length,
    supplements: fromSupplements,
    supplementNames: taken.map((t) => t.name),
    overLimit: overUpperLimits(fromSupplements),
    targets: nutrientTargets(user.gender, age, user.dailyCalories ?? 2000),
  };
  return Response.json(day);
});
