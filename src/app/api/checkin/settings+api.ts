import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { requirePremium } from '@/lib/server/billing';
import { checkInState } from '@/lib/server/checkin';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { checkInSettingsSchema } from '@/shared/adaptive';

/** Turns the weekly check-in on (Premium) or off, and sets its day. */
export const PUT = handle(async (request) => {
  const userId = await requireUserId(request);
  const body = checkInSettingsSchema.parse(await readJson(request));
  if (body.enabled) await requirePremium(userId, 'The adjusting calorie target');
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding first.');
  const preferences = {
    ...user.preferences,
    adaptiveTarget: body.enabled,
    ...(body.weekday !== undefined ? { checkInWeekday: body.weekday } : {}),
  };
  const [row] = await db.update(users).set({ preferences }).where(eq(users.id, userId)).returning();
  return Response.json(await checkInState(row));
});
