import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { keepCheckIn } from '@/lib/server/checkin';
import { handle, HttpError } from '@/lib/server/http';

/** "Keep …": the calorie goal stays as it is this week. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  return Response.json({ checkIn: await keepCheckIn(user) });
});
