import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { supplements } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { findSupplement } from '@/lib/server/supplements';
import { supplementSchema } from '@/shared/supplements';

type Params = { id: string };

/** Changes the name, dose or schedule. Days already ticked keep the dose they had. */
export const PATCH = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const changes = supplementSchema.partial().parse(await readJson(request));
  if (Object.keys(changes).length === 0) throw new HttpError(400, 'Nothing to update');
  const supplement = await findSupplement(userId, id);
  await db.update(supplements).set(changes).where(eq(supplements.id, supplement.id));
  return Response.json({ updated: true });
});

/** Removes it from the list; days it was taken keep their numbers. */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const supplement = await findSupplement(userId, id);
  await db.update(supplements).set({ archivedAt: new Date() }).where(eq(supplements.id, supplement.id));
  return Response.json({ deleted: true });
});
