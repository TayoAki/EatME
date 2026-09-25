import { and, asc, eq, gte, lt } from 'drizzle-orm';

import { db } from '@/db';
import { waterLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dateParam, dayBounds, loggedAtFor, userTimeZone } from '@/lib/server/day';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { toWaterEntry } from '@/lib/server/dto';
import { addWaterSchema, type WaterDay } from '@/shared/water';

/** Water logged on one local day (`?date=YYYY-MM-DD`). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);
  const { start, end } = dayBounds(date, await userTimeZone(userId));

  const rows = await db
    .select()
    .from(waterLogs)
    .where(and(eq(waterLogs.userId, userId), gte(waterLogs.loggedAt, start), lt(waterLogs.loggedAt, end)))
    .orderBy(asc(waterLogs.loggedAt));

  const entries = rows.map(toWaterEntry);
  const day: WaterDay = { date, entries, totalMl: entries.reduce((sum, e) => sum + e.amountMl, 0) };
  return Response.json(day);
});

/** Adds a drink. Without `date` it counts for now; with an earlier date it is stored at noon. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`water:${userId}`, 200, 24 * 60 * 60 * 1000);
  const body = addWaterSchema.parse(await readJson(request));

  const [row] = await db
    .insert(waterLogs)
    .values({ userId, amountMl: body.amountMl, loggedAt: loggedAtFor(body.date, await userTimeZone(userId)) })
    .returning();
  return Response.json({ entry: toWaterEntry(row) }, { status: 201 });
});
