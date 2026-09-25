import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { weightLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';
import { syncCurrentWeight } from '@/lib/server/weights';

type Params = { id: string };

/** Removes a weigh-in; the profile's weight goes back to the latest one left. */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const parsed = z.string().uuid().safeParse(id);
  if (!parsed.success) throw new HttpError(404, 'Weigh-in not found');
  const [row] = await db
    .delete(weightLogs)
    .where(and(eq(weightLogs.id, parsed.data), eq(weightLogs.userId, userId)))
    .returning();
  if (!row) throw new HttpError(404, 'Weigh-in not found');
  await syncCurrentWeight(userId);
  return Response.json({ deleted: true });
});
