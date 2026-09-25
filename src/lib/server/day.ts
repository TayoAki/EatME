import { eq, sql } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';

import { HttpError } from './http';
import { localDate } from './streak';

export const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

/** `?date=YYYY-MM-DD` from the request URL (400 when missing or malformed). */
export function dateParam(request: Request) {
  const date = new URL(request.url).searchParams.get('date');
  if (!date || !DATE_RE.test(date)) throw new HttpError(400, 'Pass ?date=YYYY-MM-DD');
  return date;
}

export async function userTimeZone(userId: string) {
  const user = await db.query.users.findFirst({ where: eq(users.id, userId), columns: { timezone: true } });
  return user?.timezone ?? 'UTC';
}

/**
 * Local midnight → next local midnight of `date` in the user's time zone, as timestamps, so
 * queries can use the (user_id, logged_at) indexes. Meals, water and streaks all use this.
 */
export function dayBounds(date: string, timeZone: string) {
  return {
    start: sql`(${date}::timestamp at time zone ${timeZone})`,
    end: sql`((${date}::date + 1)::timestamp at time zone ${timeZone})`,
  };
}

/**
 * When to log something the user adds for `date`: now for today, noon (local) for an earlier day.
 * Future days are refused.
 */
export function loggedAtFor(date: string | undefined, timeZone: string) {
  if (!date) return new Date();
  const today = localDate(new Date(), timeZone);
  if (date > today) throw new HttpError(400, "You can't log things in the future.");
  if (date === today) return new Date();
  return sql`((${date}::date + time '12:00')::timestamp at time zone ${timeZone})`;
}
