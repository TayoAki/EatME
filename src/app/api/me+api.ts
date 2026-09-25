import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { users } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';
import { requireUserId } from '@/lib/server/auth';
import { toProfile } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { localDate } from '@/lib/server/streak';
import { isValidTimeZone } from '@/lib/server/time-zone';
import { ensureStartingWeight, logWeight } from '@/lib/server/weights';
import { minimumCalories, type MacroTargets } from '@/shared/nutrition';
import { updateProfileSchema, type UpdateProfileBody } from '@/shared/user';

const TARGET_FIELDS = {
  dailyCalories: 'calories',
  dailyProteinG: 'proteinG',
  dailyCarbsG: 'carbsG',
  dailyFatG: 'fatG',
} as const satisfies Record<string, keyof MacroTargets>;

type User = typeof users.$inferSelect;

/**
 * Calorie and macro goals: `null` goes back to the plan's value. The plan's targets are kept the
 * first time the user changes them, and the calorie goal never goes below the safety floor.
 */
function targetChanges(user: User, body: UpdateProfileBody) {
  const fields = (Object.keys(TARGET_FIELDS) as (keyof typeof TARGET_FIELDS)[]).filter((f) => body[f] !== undefined);
  if (fields.length === 0) return {};

  const plan: MacroTargets | null =
    user.planTargets ??
    (user.dailyCalories && user.dailyProteinG && user.dailyCarbsG !== null && user.dailyFatG
      ? { calories: user.dailyCalories, proteinG: user.dailyProteinG, carbsG: user.dailyCarbsG, fatG: user.dailyFatG }
      : null);
  if (!plan) throw new HttpError(409, 'Finish onboarding before changing your goals.');

  const changes: Partial<User> = { planTargets: plan };
  for (const field of fields) changes[field] = body[field] ?? plan[TARGET_FIELDS[field]];

  const floor = minimumCalories(body.gender ?? user.gender);
  if (changes.dailyCalories !== undefined && changes.dailyCalories !== null && changes.dailyCalories < floor) {
    throw new HttpError(
      400,
      `For safety, EatME keeps the calorie goal at ${floor.toLocaleString('en-US')} kcal a day or more. A doctor or dietitian can guide you below that.`,
    );
  }
  return changes;
}

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

  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user) throw new HttpError(404, 'Profile not found');
  const { dailyCalories, dailyProteinG, dailyCarbsG, dailyFatG, ...rest } = body;
  const targets = targetChanges(user, { ...rest, dailyCalories, dailyProteinG, dailyCarbsG, dailyFatG });

  // A new weight in Personal details is today's weigh-in (after keeping the starting weight).
  if (rest.weightKg !== undefined) await ensureStartingWeight(user);
  const [row] = await db
    .update(users)
    .set({ ...rest, ...targets })
    .where(eq(users.id, userId))
    .returning();
  if (rest.weightKg !== undefined && row.onboardingCompletedAt) {
    await logWeight(userId, localDate(new Date(), row.timezone), rest.weightKg);
  }
  return Response.json({ user: toProfile(row) });
});

/** Delete account (required by the App Store): photos, meals, sessions, password and profile. */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);
  const result = await deleteUserData(userId);
  return Response.json({ deleted: true, ...result });
});
