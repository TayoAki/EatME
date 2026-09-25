import { and, desc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle } from '@/lib/server/http';

/** The user's favourite meals, newest first — for one-tap "Log again" on the Scan screen. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const rows = await db
    .select()
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.isFavorite, true), eq(meals.status, 'completed')))
    .orderBy(desc(meals.loggedAt))
    .limit(50);
  return Response.json({ meals: await Promise.all(rows.map(toMeal)) });
});
