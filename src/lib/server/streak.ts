import { and, eq, gte, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals } from '@/db/schema';
import type { StreakResponse } from '@/shared/user';

const LOOKBACK_DAYS = 400;
const LOGGED_DATES_DAYS = 21;

/** YYYY-MM-DD of `date` in the given IANA time zone. */
export function localDate(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(
    date,
  );
}

function shiftDate(isoDate: string, days: number) {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * Streak = consecutive days with at least one analyzed meal, counted in the user's time zone.
 * Today without a meal yet does not break the streak (it ends yesterday until the day is over).
 */
export async function getStreak(userId: string, timeZone: string): Promise<StreakResponse> {
  const since = new Date(Date.now() - LOOKBACK_DAYS * 24 * 60 * 60 * 1000);
  const localDay = sql<string>`to_char(${meals.loggedAt} at time zone ${timeZone}, 'YYYY-MM-DD')`;

  const rows = await db
    .selectDistinct({ day: localDay })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'completed'), gte(meals.loggedAt, since)));

  const days = new Set(rows.map((r) => r.day));
  const today = localDate(new Date(), timeZone);

  let cursor = days.has(today) ? today : shiftDate(today, -1);
  let current = 0;
  while (days.has(cursor)) {
    current += 1;
    cursor = shiftDate(cursor, -1);
  }

  const oldest = shiftDate(today, -LOGGED_DATES_DAYS);
  const loggedDates = [...days].filter((d) => d >= oldest).sort();

  // Every logged day ever (calm mode's "days logged", which never resets).
  const [{ total }] = await db
    .select({ total: sql<number>`count(distinct ${localDay})::int` })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'completed')));

  return { current, totalDays: total, loggedDates, today };
}
