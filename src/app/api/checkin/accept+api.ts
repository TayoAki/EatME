import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { requirePremium } from '@/lib/server/billing';
import { acceptCheckIn } from '@/lib/server/checkin';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError } from '@/lib/server/http';

/** "Use …": this week's proposed target becomes the calorie goal (carbs take the difference). */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  await requirePremium(userId, 'The adjusting calorie target');
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  const result = await acceptCheckIn(user);
  return Response.json({ user: toProfile(result.user), checkIn: result.checkIn });
});
