import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { doseLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';

/** Removes one of the user's dose entries. */
export const DELETE = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const doseId = z.string().uuid().safeParse(id);
  if (!doseId.success) throw new HttpError(404, 'Dose not found');
  const deleted = await db
    .delete(doseLogs)
    .where(and(eq(doseLogs.id, doseId.data), eq(doseLogs.userId, userId)))
    .returning({ id: doseLogs.id });
  if (deleted.length === 0) throw new HttpError(404, 'Dose not found');
  return Response.json({ deleted: true });
});
