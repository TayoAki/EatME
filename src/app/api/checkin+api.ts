import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { checkInState } from '@/lib/server/checkin';
import { handle, HttpError } from '@/lib/server/http';

/**
 * The adjusting calorie target: whether it is on, this week's check-in (worked out the first time
 * it is asked for that week) and the earlier ones.
 */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding first.');
  return Response.json(await checkInState(user));
});
