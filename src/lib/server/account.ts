import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';

import { deleteObject, listKeys, userPhotosPrefix } from './storage';

/**
 * Removes everything we store for a user: meal photos in the bucket, then the user row — which
 * also deletes their meals, sessions and password (ON DELETE CASCADE).
 */
export async function deleteUserData(userId: string) {
  const [listed, rows] = await Promise.all([
    listKeys(userPhotosPrefix(userId)),
    db.select({ key: meals.imageKey }).from(meals).where(eq(meals.userId, userId)),
  ]);
  const keys = [...new Set([...listed, ...rows.map((r) => r.key).filter((k): k is string => !!k)])];
  const results = await Promise.allSettled(keys.map((key) => deleteObject(key)));
  const failed = results.filter((r) => r.status === 'rejected').length;
  if (failed) console.error(`[account] ${failed} photo(s) of ${userId} could not be deleted`);

  const deleted = await db.delete(users).where(eq(users.id, userId)).returning({ id: users.id });
  return { userDeleted: deleted.length > 0, photosDeleted: keys.length - failed };
}
