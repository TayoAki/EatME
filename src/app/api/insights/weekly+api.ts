import { and, eq, gte, lt, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users, waterLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dayBounds } from '@/lib/server/day';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError } from '@/lib/server/http';
import { localDate } from '@/lib/server/streak';
import { weeklyFocus, type DaySummary, type WeeklyAverages, type WeeklyInsights } from '@/shared/insights';

const DAYS = 7;

function shiftDate(isoDate: string, days: number) {
  const d = new Date(`${isoDate}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

const average = (values: number[]) => values.reduce((sum, v) => sum + v, 0) / values.length;

/** The last 7 complete days in the user's time zone: totals per day, averages and goals. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  const timeZone = user.timezone;

  const today = localDate(new Date(), timeZone);
  const from = shiftDate(today, -DAYS);
  const to = shiftDate(today, -1);
  const start = dayBounds(from, timeZone).start;
  const end = dayBounds(today, timeZone).start;

  const mealDay = sql<string>`to_char(${meals.loggedAt} at time zone ${timeZone}, 'YYYY-MM-DD')`;
  const mealRows = await db
    .select({
      day: mealDay,
      calories: sql<number>`coalesce(sum(${meals.calories}), 0)::int`,
      proteinG: sql<number>`coalesce(sum(${meals.proteinG}), 0)::int`,
      carbsG: sql<number>`coalesce(sum(${meals.carbsG}), 0)::int`,
      fatG: sql<number>`coalesce(sum(${meals.fatG}), 0)::int`,
      fiberG: sql<number>`coalesce(sum(${meals.fiberG}), 0)::int`,
    })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'completed'), gte(meals.loggedAt, start), lt(meals.loggedAt, end)))
    // By position: the day expression binds the time zone as a parameter, so Postgres would not
    // recognise a repeated expression in GROUP BY as the same one.
    .groupBy(sql`1`);

  const waterDay = sql<string>`to_char(${waterLogs.loggedAt} at time zone ${timeZone}, 'YYYY-MM-DD')`;
  const waterRows = await db
    .select({ day: waterDay, waterMl: sql<number>`sum(${waterLogs.amountMl})::int` })
    .from(waterLogs)
    .where(and(eq(waterLogs.userId, userId), gte(waterLogs.loggedAt, start), lt(waterLogs.loggedAt, end)))
    .groupBy(sql`1`);

  const mealsByDay = new Map(mealRows.map((r) => [r.day, r]));
  const waterByDay = new Map(waterRows.map((r) => [r.day, r.waterMl]));
  const days: DaySummary[] = Array.from({ length: DAYS }, (_, i) => {
    const date = shiftDate(from, i);
    const m = mealsByDay.get(date);
    return {
      date,
      logged: !!m,
      calories: m?.calories ?? 0,
      proteinG: m?.proteinG ?? 0,
      carbsG: m?.carbsG ?? 0,
      fatG: m?.fatG ?? 0,
      fiberG: m?.fiberG ?? 0,
      waterMl: waterByDay.get(date) ?? 0,
    };
  });

  const logged = days.filter((d) => d.logged);
  const withWater = days.filter((d) => d.waterMl > 0);
  const averages: WeeklyAverages | null = logged.length
    ? {
        calories: Math.round(average(logged.map((d) => d.calories))),
        proteinG: Math.round(average(logged.map((d) => d.proteinG))),
        carbsG: Math.round(average(logged.map((d) => d.carbsG))),
        fatG: Math.round(average(logged.map((d) => d.fatG))),
        fiberG: Math.round(average(logged.map((d) => d.fiberG))),
        waterMl: withWater.length ? Math.round(average(withWater.map((d) => d.waterMl))) : null,
      }
    : null;

  const profile = toProfile(user);
  const goals = {
    calories: profile.dailyCalories,
    proteinG: profile.dailyProteinG,
    carbsG: profile.dailyCarbsG,
    fatG: profile.dailyFatG,
    fiberG: profile.dailyFiberG,
    waterMl: profile.dailyWaterMl,
  };

  const insights: WeeklyInsights = {
    from,
    to,
    daysLogged: logged.length,
    averages,
    goals,
    days,
    focus: weeklyFocus(averages, goals, logged.length, withWater.length),
  };
  return Response.json(insights);
});
