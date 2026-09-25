import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { users, weightLogs } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { localDate } from '@/lib/server/streak';
import { ensureStartingWeight, logWeight } from '@/lib/server/weights';
import { addWeightSchema, type WeightHistory } from '@/shared/weight';

async function findUser(userId: string) {
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding first.');
  return user;
}

/** Every weigh-in, oldest first, with the goal set at onboarding. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const user = await findUser(userId);
  await ensureStartingWeight(user);
  const rows = await db.select().from(weightLogs).where(eq(weightLogs.userId, userId)).orderBy(asc(weightLogs.date));
  const history: WeightHistory = {
    entries: rows.map((r) => ({ id: r.id, date: r.date, weightKg: r.weightKg })),
    goal: user.goal,
    targetWeightKg: user.targetWeightKg,
  };
  return Response.json(history);
});

/** Logs a weigh-in for today (or an earlier `date`); the profile's weight follows the latest one. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`weights:${userId}`, 60, 60 * 60 * 1000);
  const body = addWeightSchema.parse(await readJson(request));
  const user = await findUser(userId);
  const today = localDate(new Date(), user.timezone);
  const date = body.date ?? today;
  if (date > today) throw new HttpError(400, "You can't log things in the future.");
  await ensureStartingWeight(user);
  const row = await logWeight(userId, date, body.weightKg);
  return Response.json({ entry: { id: row.id, date: row.date, weightKg: row.weightKg } }, { status: 201 });
});
