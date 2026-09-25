import { and, eq } from 'drizzle-orm';

import { db } from '@/db';
import { supplementLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { DATE_RE, userTimeZone } from '@/lib/server/day';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { localDate } from '@/lib/server/streak';
import { findSupplement } from '@/lib/server/supplements';

type Params = { id: string };

async function dayFor(request: Request, userId: string, fromBody: boolean) {
  const raw = fromBody
    ? ((await readJson(request).catch(() => ({}))) as { date?: unknown }).date
    : new URL(request.url).searchParams.get('date');
  const today = localDate(new Date(), await userTimeZone(userId));
  if (raw === undefined || raw === null) return today;
  if (typeof raw !== 'string' || !DATE_RE.test(raw)) throw new HttpError(400, 'Pass the date as YYYY-MM-DD');
  if (raw > today) throw new HttpError(400, "You can't log things in the future.");
  return raw;
}

/** Ticks the supplement as taken on a day (today by default). Ticking twice changes nothing. */
export const POST = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const supplement = await findSupplement(userId, id);
  const date = await dayFor(request, userId, true);
  await db
    .insert(supplementLogs)
    .values({ supplementId: supplement.id, userId, date, nutrients: supplement.nutrients })
    .onConflictDoNothing();
  return Response.json({ taken: true, date }, { status: 201 });
});

/** Un-ticks it for a day (`?date=`, today by default). */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const supplement = await findSupplement(userId, id);
  const date = await dayFor(request, userId, false);
  await db.delete(supplementLogs).where(and(eq(supplementLogs.supplementId, supplement.id), eq(supplementLogs.date, date)));
  return Response.json({ taken: false, date });
});
