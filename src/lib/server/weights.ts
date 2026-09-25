import { desc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { users, weightLogs, type User } from '@/db/schema';

import { localDate } from './streak';

/** The weight history starts with the onboarding weight (also for accounts from before it existed). */
export async function ensureStartingWeight(user: User) {
  if (!user.weightKg || !user.onboardingCompletedAt) return;
  const [existing] = await db.select({ id: weightLogs.id }).from(weightLogs).where(eq(weightLogs.userId, user.id)).limit(1);
  if (existing) return;
  await db
    .insert(weightLogs)
    .values({ userId: user.id, date: localDate(user.onboardingCompletedAt, user.timezone), weightKg: user.weightKg })
    .onConflictDoNothing();
}

/** The profile's weight is always the latest weigh-in (the plan and BMI use it). */
export async function syncCurrentWeight(userId: string) {
  const [latest] = await db
    .select({ weightKg: weightLogs.weightKg })
    .from(weightLogs)
    .where(eq(weightLogs.userId, userId))
    .orderBy(desc(weightLogs.date))
    .limit(1);
  if (latest) await db.update(users).set({ weightKg: latest.weightKg }).where(eq(users.id, userId));
}

/** Saves a weigh-in, replacing one already logged that day. */
export async function logWeight(userId: string, date: string, weightKg: number) {
  const value = Math.round(weightKg * 100) / 100;
  const [row] = await db
    .insert(weightLogs)
    .values({ userId, date, weightKg: value })
    .onConflictDoUpdate({ target: [weightLogs.userId, weightLogs.date], set: { weightKg: value } })
    .returning();
  await syncCurrentWeight(userId);
  return row;
}
