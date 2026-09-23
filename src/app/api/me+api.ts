import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';
import { requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { updateProfileSchema } from '@/shared/user';

/** Current user's profile. `onboardingCompletedAt` stays null until onboarding is saved. */
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

/** Delete account (required by the App Store): photos, meals, sessions, password and profile. */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);
  const result = await deleteUserData(userId);
  return Response.json({ deleted: true, ...result });
});
