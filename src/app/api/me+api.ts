import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';
import { clerkClient, requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { updateProfileSchema } from '@/shared/user';

/** Current user's profile. `user` is null until onboarding (or the Clerk webhook) created the row. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  return Response.json({ user: user ? toProfile(user) : null });
});

/** Personal details edits and time zone updates. */
export const PATCH = handle(async (request) => {
  const userId = await requireUserId(request);
  const body = updateProfileSchema.parse(await readJson(request));
  if (body.timezone && !isValidTimeZone(body.timezone)) throw new HttpError(400, 'Unknown time zone');
  if (Object.keys(body).length === 0) throw new HttpError(400, 'Nothing to update');

  const [row] = await db.update(users).set(body).where(eq(users.id, userId)).returning();
  if (!row) throw new HttpError(404, 'Profile not found');
  return Response.json({ user: toProfile(row) });
});

/**
 * Delete account (required by the App Store): Clerk user, database user, meals and ImageKit photos.
 * Clerk is deleted first; its `user.deleted` webhook runs the same cleanup again as a safety net.
 */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);

  try {
    await clerkClient().users.deleteUser(userId);
  } catch (error) {
    const status = (error as { status?: number }).status;
    if (status !== 404) throw error;
  }

  try {
    const result = await deleteUserData(userId);
    return Response.json({ deleted: true, ...result });
  } catch (error) {
    // The account is gone; the webhook task retries the data cleanup.
    console.error('[account] cleanup failed, the clerk-user-deleted task will retry it', error);
    return Response.json({ deleted: true, cleanup: 'pending' });
  }
});
