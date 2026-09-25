import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { waterLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';

type Params = { id: string };

/** Undo: removes one of the user's own water entries. */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const entryId = z.string().uuid().safeParse(id);
  if (!entryId.success) throw new HttpError(404, 'Entry not found');

  const deleted = await db
    .delete(waterLogs)
    .where(and(eq(waterLogs.id, entryId.data), eq(waterLogs.userId, userId)))
    .returning({ id: waterLogs.id });
  if (deleted.length === 0) throw new HttpError(404, 'Entry not found');
  return Response.json({ deleted: true });
});
