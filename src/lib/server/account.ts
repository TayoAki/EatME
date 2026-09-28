import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';

import { revokeAppleTokens } from './apple';
import { deleteObject, listKeys, progressPhotosPrefix, userPhotosPrefix } from './storage';

/**
 * Removes everything we store for a user: Apple's sign-in tokens are revoked, meal and progress
 * photos leave the bucket, then the user row goes — which also deletes their meals, measurements,
 * sessions and password (ON DELETE CASCADE).
 */
export async function deleteUserData(userId: string) {
  await revokeAppleTokens(userId);
  const [listed, progress, rows] = await Promise.all([
    listKeys(userPhotosPrefix(userId)),
    listKeys(progressPhotosPrefix(userId)),
    db.select({ key: meals.imageKey }).from(meals).where(eq(meals.userId, userId)),
  ]);
  const keys = [...new Set([...listed, ...progress, ...rows.map((r) => r.key).filter((k): k is string => !!k)])];
  const results = await Promise.allSettled(keys.map((key) => deleteObject(key)));
  const failed = results.filter((r) => r.status === 'rejected').length;
  if (failed) console.error(`[account] ${failed} photo(s) of ${userId} could not be deleted`);

  const deleted = await db.delete(users).where(eq(users.id, userId)).returning({ id: users.id });
  return { userDeleted: deleted.length > 0, photosDeleted: keys.length - failed };
}
