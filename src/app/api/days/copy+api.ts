import { and, asc, eq, gte, inArray, lt, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dayBounds, userTimeZone } from '@/lib/server/day';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { copyMeal } from '@/lib/server/meal-values';
import { rateLimit } from '@/lib/server/rate-limit';
import { localDate } from '@/lib/server/streak';
import { copyDaySchema } from '@/shared/meals';

/** Most meals one copy can bring over — a day with more than this is unusual. */
const MAX_MEALS = 30;

/**
 * "Copy yesterday" and "Copy a day": logs the analyzed meals of `from` (all of them, or only
 * `mealIds`) again on `to`, at the same local times.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`copy-day:${userId}`, 20, 60 * 60 * 1000);
  const { from, to, mealIds } = copyDaySchema.parse(await readJson(request));
  if (from === to) throw new HttpError(400, 'Pick two different days');

  const timeZone = await userTimeZone(userId);
  if (to > localDate(new Date(), timeZone)) throw new HttpError(400, "You can't log things in the future.");

  const { start, end } = dayBounds(from, timeZone);
  const source = await db
    .select()
    .from(meals)
    .where(
      and(
        eq(meals.userId, userId),
        eq(meals.status, 'completed'),
        gte(meals.loggedAt, start),
        lt(meals.loggedAt, end),
        mealIds ? inArray(meals.id, mealIds) : undefined,
      ),
    )
    .orderBy(asc(meals.loggedAt))
    .limit(MAX_MEALS);
  if (source.length === 0) throw new HttpError(404, 'There are no meals on that day to copy');

  const shift = sql`(${to}::date - ${from}::date)`;
  const copies = [];
  for (const meal of source) {
    // Same wall-clock time on the new day (computed in the user's time zone, so DST is handled).
    const loggedAt = sql`(((${meal.loggedAt.toISOString()}::timestamptz at time zone ${timeZone}) + ${shift} * interval '1 day') at time zone ${timeZone})`;
    copies.push(await copyMeal(meal, loggedAt));
  }
  return Response.json({ meals: await Promise.all(copies.map(toMeal)) }, { status: 201 });
});
