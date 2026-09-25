import { and, eq, isNull } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { supplements } from '@/db/schema';

import { HttpError } from './http';

/** One of the user's (not archived) supplements, or 404. */
export async function findSupplement(userId: string, id: string) {
  const parsed = z.string().uuid().safeParse(id);
  if (!parsed.success) throw new HttpError(404, 'Supplement not found');
  const row = await db.query.supplements.findFirst({
    where: and(eq(supplements.id, parsed.data), eq(supplements.userId, userId), isNull(supplements.archivedAt)),
  });
  if (!row) throw new HttpError(404, 'Supplement not found');
  return row;
}
