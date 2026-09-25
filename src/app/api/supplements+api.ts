import { and, asc, eq, isNull } from 'drizzle-orm';

import { db } from '@/db';
import { supplementLogs, supplements } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { dateParam } from '@/lib/server/day';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { supplementSchema, type SupplementsDay } from '@/shared/supplements';

const MAX_SUPPLEMENTS = 30;

/** The user's supplements and whether each was taken on `?date=`. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);
  const rows = await db
    .select({ supplement: supplements, logId: supplementLogs.id })
    .from(supplements)
    .leftJoin(supplementLogs, and(eq(supplementLogs.supplementId, supplements.id), eq(supplementLogs.date, date)))
    .where(and(eq(supplements.userId, userId), isNull(supplements.archivedAt)))
    .orderBy(asc(supplements.createdAt));
  const day: SupplementsDay = {
    date,
    supplements: rows.map(({ supplement, logId }) => ({
      id: supplement.id,
      name: supplement.name,
      nutrients: supplement.nutrients,
      schedule: supplement.schedule,
      taken: logId !== null,
    })),
  };
  return Response.json(day);
});

/** Adds a supplement to the user's list. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`supplements:${userId}`, 60, 60 * 60 * 1000);
  const body = supplementSchema.parse(await readJson(request));
  const count = await db.$count(supplements, and(eq(supplements.userId, userId), isNull(supplements.archivedAt)));
  if (count >= MAX_SUPPLEMENTS) throw new HttpError(400, `You can keep up to ${MAX_SUPPLEMENTS} supplements.`);
  const [row] = await db.insert(supplements).values({ userId, ...body }).returning();
  return Response.json({ id: row.id }, { status: 201 });
});
