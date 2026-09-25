import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { symptomLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';

/** Removes one of the user's side-effect entries. */
export const DELETE = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const entryId = z.string().uuid().safeParse(id);
  if (!entryId.success) throw new HttpError(404, 'Entry not found');
  const deleted = await db
    .delete(symptomLogs)
    .where(and(eq(symptomLogs.id, entryId.data), eq(symptomLogs.userId, userId)))
    .returning({ id: symptomLogs.id });
  if (deleted.length === 0) throw new HttpError(404, 'Entry not found');
  return Response.json({ deleted: true });
});
