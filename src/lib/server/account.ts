import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { meals, users } from '@/db/schema';

import { deleteFile, deleteFolder, mealsFolder } from './imagekit';

/**
 * Removes everything we store for a user: meal photos in ImageKit, meals and the user row.
 * Idempotent — safe to run from both `DELETE /api/me` and the Clerk `user.deleted` webhook task.
 */
export async function deleteUserData(userId: string) {
  const photos = await db
    .select({ fileId: meals.imageFileId })
    .from(meals)
    .where(eq(meals.userId, userId));

  // Delete known files first, then the folder (also catches uploads that never became a meal).
  const fileIds = photos.map((p) => p.fileId).filter((id): id is string => !!id);
  const results = await Promise.allSettled(fileIds.map((id) => deleteFile(id)));
  const failedFiles = results.filter((r) => r.status === 'rejected').length;
  await deleteFolder(mealsFolder(userId));

  // Meals are removed by the ON DELETE CASCADE foreign key.
  const deleted = await db.delete(users).where(eq(users.id, userId)).returning({ id: users.id });

  return { userDeleted: deleted.length > 0, photosDeleted: fileIds.length - failedFiles };
}
