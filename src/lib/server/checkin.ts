import { and, asc, desc, eq, gte, isNotNull, sql } from 'drizzle-orm';

import { db } from '@/db';
import { meals, targetCheckins, users, weightLogs, type TargetCheckinRow, type User } from '@/db/schema';
import {
  checkInWeekStart,
  computeCheckIn,
  macrosForNewTarget,
  MISSING_DATA,
  type CheckIn,
  type CheckInResponse,
  type CheckInResult,
} from '@/shared/adaptive';

import { hasPremiumAccess } from './billing';
import { HttpError } from './http';
import { localDate } from './streak';

/** Monday unless the person picked another day. */
export const checkInWeekday = (user: Pick<User, 'preferences'>) => user.preferences?.checkInWeekday ?? 1;

const HISTORY = 12;

export function toCheckIn(row: TargetCheckinRow): CheckIn {
  return {
    id: row.id,
    weekStart: row.weekStart,
    status: row.status,
    reason: row.reason,
    estimatedKcal: row.estimatedKcal,
    averageIntake: row.averageIntake,
    trendPerWeekKg: row.trendPerWeekKg,
    dataDays: row.dataDays,
    recentDays: 0,
    weighIns: 0,
    previousKcal: row.previousKcal,
    proposedKcal: row.proposedKcal,
    createdAt: row.createdAt.toISOString(),
  };
}

/** A check-in worked out now but not saved (data missing): the card says what's needed. */
const transient = (weekStart: string, result: CheckInResult): CheckIn => ({
  id: null,
  weekStart,
  status: null,
  reason: result.reason,
  estimatedKcal: result.estimatedKcal,
  averageIntake: result.averageIntake,
  trendPerWeekKg: result.trendPerWeekKg,
  dataDays: result.dataDays,
  recentDays: result.recentDays,
  weighIns: result.weighIns,
  previousKcal: result.previousKcal,
  proposedKcal: result.proposedKcal,
  createdAt: null,
});

/** Calories logged per local day since `from` (completed meals only). */
async function loggedDays(user: User, from: string) {
  const day = sql<string>`to_char(${meals.loggedAt} at time zone ${user.timezone}, 'YYYY-MM-DD')`;
  return db
    .select({ date: day, calories: sql<number>`coalesce(sum(${meals.calories}), 0)::int` })
    .from(meals)
    .where(and(eq(meals.userId, user.id), eq(meals.status, 'completed'), gte(meals.loggedAt, sql`(${from}::timestamp at time zone ${user.timezone})`)))
    // By position: the time zone is a separate parameter in the select and here.
    .groupBy(sql`1`);
}

async function firstLoggedDay(user: User) {
  const [row] = await db
    .select({ at: meals.loggedAt })
    .from(meals)
    .where(and(eq(meals.userId, user.id), eq(meals.status, 'completed')))
    .orderBy(asc(meals.loggedAt))
    .limit(1);
  return row ? localDate(row.at, user.timezone) : null;
}

/** Works out this week's check-in from the logged days and weigh-ins. */
async function compute(user: User, today: string) {
  if (!user.gender || !user.dateOfBirth || !user.heightCm || !user.activityLevel || !user.goal || !user.dailyCalories) {
    throw new HttpError(409, 'Finish onboarding first.');
  }
  const since = new Date(`${today}T12:00:00Z`);
  since.setUTCDate(since.getUTCDate() - 35);
  const [days, weights, first, previous] = await Promise.all([
    loggedDays(user, since.toISOString().slice(0, 10)),
    db.select({ date: weightLogs.date, weightKg: weightLogs.weightKg }).from(weightLogs).where(eq(weightLogs.userId, user.id)),
    firstLoggedDay(user),
    db
      .select({ estimatedKcal: targetCheckins.estimatedKcal })
      .from(targetCheckins)
      .where(and(eq(targetCheckins.userId, user.id), isNotNull(targetCheckins.estimatedKcal)))
      .orderBy(desc(targetCheckins.weekStart))
      .limit(1),
  ]);
  return computeCheckIn({
    today,
    days,
    weights,
    firstLoggedDay: first,
    target: user.dailyCalories,
    profile: {
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      heightCm: user.heightCm,
      activityLevel: user.activityLevel,
      goal: user.goal,
      weeklyGoalKg: user.weeklyGoalKg ?? 0,
      targetWeightKg: user.targetWeightKg,
    },
    glp1: !!user.glp1,
    previousEstimate: previous[0]?.estimatedKcal ?? null,
  });
}

/** This week's check-in: saved the first time it has a proposal, worked out again until then. */
async function thisWeek(user: User): Promise<CheckIn> {
  const today = localDate(new Date(), user.timezone);
  const weekStart = checkInWeekStart(today, checkInWeekday(user));
  const [saved] = await db
    .select()
    .from(targetCheckins)
    .where(and(eq(targetCheckins.userId, user.id), eq(targetCheckins.weekStart, weekStart)));
  if (saved) return toCheckIn(saved);
  const result = await compute(user, today);
  if (MISSING_DATA.includes(result.reason)) return transient(weekStart, result);
  const [row] = await db
    .insert(targetCheckins)
    .values({
      userId: user.id,
      weekStart,
      estimatedKcal: result.estimatedKcal,
      averageIntake: result.averageIntake,
      dataDays: result.dataDays,
      trendPerWeekKg: result.trendPerWeekKg,
      previousKcal: result.previousKcal,
      proposedKcal: result.proposedKcal,
      reason: result.reason,
      // A proposal equal to today's target needs no answer.
      status: result.proposedKcal === result.previousKcal ? 'kept' : 'proposed',
    })
    .onConflictDoNothing()
    .returning();
  if (row) return { ...toCheckIn(row), recentDays: result.recentDays, weighIns: result.weighIns };
  const [existing] = await db
    .select()
    .from(targetCheckins)
    .where(and(eq(targetCheckins.userId, user.id), eq(targetCheckins.weekStart, weekStart)));
  return toCheckIn(existing);
}

/** Enough history to offer the feature: 14 days logged and 4 weigh-ins. */
async function isEligible(user: User) {
  const day = sql<string>`to_char(${meals.loggedAt} at time zone ${user.timezone}, 'YYYY-MM-DD')`;
  const [[{ days }], [{ weighIns }]] = await Promise.all([
    db
      .select({ days: sql<number>`count(distinct ${day})::int` })
      .from(meals)
      .where(and(eq(meals.userId, user.id), eq(meals.status, 'completed'))),
    db.select({ weighIns: sql<number>`count(*)::int` }).from(weightLogs).where(eq(weightLogs.userId, user.id)),
  ]);
  return days >= 14 && weighIns >= 4;
}

export async function checkInState(user: User): Promise<CheckInResponse> {
  const enabled = !!user.preferences?.adaptiveTarget;
  const [premium, eligible, history] = await Promise.all([
    hasPremiumAccess(user.id),
    isEligible(user),
    db.select().from(targetCheckins).where(eq(targetCheckins.userId, user.id)).orderBy(desc(targetCheckins.weekStart)).limit(HISTORY),
  ]);
  const checkIn = enabled && premium ? await thisWeek(user) : null;
  return {
    enabled,
    premium,
    eligible,
    weekday: checkInWeekday(user),
    checkIn,
    history: history.filter((row) => row.weekStart !== checkIn?.weekStart && row.proposedKcal !== null).map(toCheckIn),
  };
}

/** "Use …": the new target, protein and fat as they were, carbs taking the difference. */
export async function acceptCheckIn(user: User) {
  const today = localDate(new Date(), user.timezone);
  const weekStart = checkInWeekStart(today, checkInWeekday(user));
  return db.transaction(async (tx) => {
    const [row] = await tx
      .select()
      .from(targetCheckins)
      .where(and(eq(targetCheckins.userId, user.id), eq(targetCheckins.weekStart, weekStart)))
      .for('update');
    if (!row || row.proposedKcal === null) throw new HttpError(404, 'No check-in to answer this week.');
    if (row.status !== 'proposed') throw new HttpError(409, 'This week’s check-in is already answered.');
    const current = { proteinG: user.dailyProteinG ?? 0, fatG: user.dailyFatG ?? 0 };
    const macros = macrosForNewTarget(row.proposedKcal, current);
    const planTargets =
      user.planTargets ??
      (user.dailyCalories && user.dailyProteinG && user.dailyCarbsG !== null && user.dailyFatG
        ? { calories: user.dailyCalories, proteinG: user.dailyProteinG, carbsG: user.dailyCarbsG, fatG: user.dailyFatG }
        : null);
    const [updated] = await tx
      .update(users)
      .set({
        dailyCalories: row.proposedKcal,
        dailyCarbsG: macros.carbsG,
        planTargets,
        // Goal reached: from now on the plan is to stay there.
        ...(row.reason === 'goal_reached' ? { goal: 'maintain' as const, weeklyGoalKg: 0 } : {}),
      })
      .where(eq(users.id, user.id))
      .returning();
    const [answered] = await tx.update(targetCheckins).set({ status: 'accepted' }).where(eq(targetCheckins.id, row.id)).returning();
    return { user: updated, checkIn: toCheckIn(answered) };
  });
}

/** "Keep …": the target stays as it is. */
export async function keepCheckIn(user: User) {
  const today = localDate(new Date(), user.timezone);
  const weekStart = checkInWeekStart(today, checkInWeekday(user));
  const [row] = await db
    .update(targetCheckins)
    .set({ status: 'kept' })
    .where(and(eq(targetCheckins.userId, user.id), eq(targetCheckins.weekStart, weekStart), eq(targetCheckins.status, 'proposed')))
    .returning();
  if (!row) throw new HttpError(404, 'No check-in to answer this week.');
  return toCheckIn(row);
}
