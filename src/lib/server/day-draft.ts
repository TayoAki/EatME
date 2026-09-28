import { and, desc, eq, gte, sql } from 'drizzle-orm';

import { db, type Executor } from '@/db';
import { dayPlans, mealRepeats, meals, users, type DayPlanRow, type User } from '@/db/schema';
import {
  DRAFT_SLOTS,
  draftTotals,
  MAIN_SLOTS,
  MAX_CHOICES,
  MIN_CHOICE_KCAL,
  MIN_DIFFERENT_MEALS,
  MIN_LOGGED_DAYS,
  mealKey,
  rankDrafts,
  slotOf,
  slotTimes,
  swapChoices,
  type DayPlanResponse,
  type DraftChoice,
  type DraftGoal,
  type DraftItem,
  type DraftNumbers,
  type DraftSlot,
  type DraftSlotChoices,
} from '@/shared/day-draft';
import { minimumCalories } from '@/shared/nutrition';

import { hasPremiumAccess, requirePremium } from './billing';
import { DATE_RE } from './day';
import { HttpError } from './http';
import { describeError } from './log';
import { copyMeal, copyPhoto } from './meal-values';
import { plannedMeals } from './saved-meals';
import { deleteObject } from './storage';
import { localDate } from './streak';

const HISTORY_DAYS = 30;

/** The signed-in person, once onboarding is done (their targets and time zone shape the draft). */
export async function planUser(userId: string) {
  const user = await db.query.users.findFirst({ where: eq(users.id, userId) });
  if (!user?.onboardingCompletedAt) throw new HttpError(409, 'Finish onboarding first.');
  return user;
}

/** The `:date` of a day-plan route. */
export function planDate(date: string) {
  if (!DATE_RE.test(date)) throw new HttpError(400, 'Use a date like 2026-09-29.');
  return date;
}

/** Item `:n` of a day-plan route. */
export function planItem(n: string) {
  const index = Number(n);
  if (!/^\d{1,2}$/.test(n) || !Number.isInteger(index)) throw new HttpError(404, 'That meal is not in the draft.');
  return index;
}
const NOT_ENOUGH = 'Log a few more meals and EatME can draft your day.';

const addDay = (date: string, days: number) => {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
};

const numbersOf = (row: { calories: number | null; proteinG: number | null; carbsG: number | null; fatG: number | null }): DraftNumbers => ({
  calories: Math.round(row.calories ?? 0),
  proteinG: Math.round(row.proteinG ?? 0),
  carbsG: Math.round(row.carbsG ?? 0),
  fatG: Math.round(row.fatG ?? 0),
});

/** A name worth planning (quick adds keep their generic name and are left out). */
const plannable = (name: string | null): name is string => !!name && name.trim() !== '' && name !== 'Quick add';

type History = {
  choices: Map<DraftSlot, DraftChoice[]>;
  /** Local times (minutes) of the meals in each slot. */
  minutes: Partial<Record<DraftSlot, number[]>>;
  loggedDays: number;
  differentMeals: number;
  /** Meal keys eaten on each local day. */
  keysByDay: Map<string, string[]>;
};

/**
 * The person's last 30 days: for each slot, the meals they ate there (grouped by name, the most
 * eaten first) and their saved meals, with the numbers of one portion as they eat it. Alcoholic
 * drinks are never planned.
 */
async function history(user: User): Promise<History> {
  const tz = user.timezone;
  const localMinutes = (column: typeof meals.loggedAt | typeof meals.createdAt) =>
    sql<number>`(extract(hour from ${column} at time zone ${tz}) * 60 + extract(minute from ${column} at time zone ${tz}))::int`;
  const [logged, saved, repeats] = await Promise.all([
    db
      .select({
        id: meals.id,
        name: meals.name,
        calories: meals.calories,
        proteinG: meals.proteinG,
        carbsG: meals.carbsG,
        fatG: meals.fatG,
        source: meals.source,
        minutes: localMinutes(meals.loggedAt),
        day: sql<string>`to_char(${meals.loggedAt} at time zone ${tz}, 'YYYY-MM-DD')`,
      })
      .from(meals)
      .where(
        and(
          eq(meals.userId, user.id),
          eq(meals.status, 'completed'),
          gte(meals.loggedAt, sql`now() - make_interval(days => ${HISTORY_DAYS})`),
        ),
      )
      .orderBy(desc(meals.loggedAt)),
    db
      .select({
        id: meals.id,
        name: meals.name,
        calories: meals.calories,
        proteinG: meals.proteinG,
        carbsG: meals.carbsG,
        fatG: meals.fatG,
        minutes: localMinutes(meals.createdAt),
      })
      .from(meals)
      .where(and(eq(meals.userId, user.id), eq(meals.status, 'saved')))
      .orderBy(desc(meals.createdAt)),
    db.select({ savedMealId: mealRepeats.savedMealId, time: mealRepeats.time }).from(mealRepeats).where(eq(mealRepeats.userId, user.id)),
  ]);

  // Saved meals by name (the newest of a name wins): logging one logs the saved meal.
  const savedByKey = new Map<string, (typeof saved)[number]>();
  for (const row of saved) if (plannable(row.name) && !savedByKey.has(mealKey(row.name))) savedByKey.set(mealKey(row.name), row);
  const repeatTime = new Map(repeats.map((r) => [r.savedMealId, r.time]));

  type Group = { latest: (typeof logged)[number]; bySlot: Map<DraftSlot, number> };
  const groups = new Map<string, Group>();
  const minutes: Partial<Record<DraftSlot, number[]>> = {};
  const days = new Set<string>();
  const keysByDay = new Map<string, string[]>();
  for (const row of logged) {
    days.add(row.day);
    if (row.source === 'drink' || !plannable(row.name) || (row.calories ?? 0) < MIN_CHOICE_KCAL) continue;
    const slot = slotOf(row.minutes);
    (minutes[slot] ??= []).push(row.minutes);
    const key = mealKey(row.name);
    keysByDay.set(row.day, [...(keysByDay.get(row.day) ?? []), key]);
    // Rows come newest first: the first of a name is the one logged again.
    const group = groups.get(key) ?? { latest: row, bySlot: new Map() };
    group.bySlot.set(slot, (group.bySlot.get(slot) ?? 0) + 1);
    groups.set(key, group);
  }

  const choices = new Map<DraftSlot, DraftChoice[]>(DRAFT_SLOTS.map((slot) => [slot, []]));
  for (const [key, group] of groups) {
    const savedMeal = savedByKey.get(key);
    for (const [slot, times] of group.bySlot) {
      choices.get(slot)!.push({
        key,
        savedMealId: savedMeal?.id ?? null,
        sourceMealId: group.latest.id,
        name: savedMeal?.name ?? group.latest.name!,
        nutrients: numbersOf(savedMeal ?? group.latest),
        times,
      });
    }
  }
  // Saved meals not eaten lately: in the slot of their repeat time, or of when they were saved.
  for (const [key, row] of savedByKey) {
    if (groups.has(key) || (row.calories ?? 0) < MIN_CHOICE_KCAL) continue;
    const time = repeatTime.get(row.id);
    const slot = slotOf(time ? Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5)) : row.minutes);
    choices.get(slot)!.push({ key, savedMealId: row.id, sourceMealId: null, name: row.name!, nutrients: numbersOf(row), times: 0 });
  }
  for (const [slot, list] of choices) {
    choices.set(
      slot,
      list.sort((a, b) => b.times - a.times || Number(!!b.savedMealId) - Number(!!a.savedMealId) || a.name.localeCompare(b.name)).slice(0, MAX_CHOICES),
    );
  }
  const differentMeals = new Set([...groups.keys(), ...savedByKey.keys()]).size;
  return { choices, minutes, loggedDays: days.size, differentMeals, keysByDay };
}

const eligibleFrom = (h: History) => h.loggedDays >= MIN_LOGGED_DAYS && h.differentMeals >= MIN_DIFFERENT_MEALS;

function goalOf(user: User): DraftGoal {
  return {
    calories: user.dailyCalories ?? 2000,
    proteinG: user.dailyProteinG ?? 0,
    floor: minimumCalories(user.gender),
    glp1: !!user.glp1,
  };
}

/** Only tomorrow is drafted (the person's local day). */
function assertTomorrow(user: User, date: string) {
  if (date !== addDay(localDate(new Date(), user.timezone), 1)) throw new HttpError(400, 'Only tomorrow can be drafted.');
}

async function findPlan(userId: string, date: string) {
  return db.query.dayPlans.findFirst({ where: and(eq(dayPlans.userId, userId), eq(dayPlans.date, date)) });
}

/**
 * Drafts `date` (tomorrow) from the person's own meals: repeats planned that day stay as they are,
 * and one meal for each other slot (a snack only if the day needs one) so the total lands near the
 * target with enough protein. `shuffle` shows the next-best day.
 */
export async function draftDay(user: User, date: string, { shuffle = false } = {}) {
  assertTomorrow(user, date);
  await requirePremium(user.id, 'Plan tomorrow');
  const h = await history(user);
  if (!eligibleFrom(h)) throw new HttpError(409, NOT_ENOUGH, 'not_enough_history');

  const times = slotTimes(h.minutes);
  const repeats = (await plannedMeals(user.id, date)).filter((p) => p.response !== 'skipped');
  const fixed: DraftItem[] = repeats.map((p) => ({
    slot: slotOf(Number(p.time.slice(0, 2)) * 60 + Number(p.time.slice(3, 5))),
    time: p.time,
    key: mealKey(p.meal.name ?? ''),
    savedMealId: p.meal.id,
    sourceMealId: null,
    name: p.meal.name ?? 'Meal',
    nutrients: numbersOf(p.meal),
    status: 'planned',
    repeatId: p.repeatId,
  }));
  const taken = new Set(fixed.map((f) => f.slot));
  const slots: DraftSlotChoices[] = DRAFT_SLOTS.filter((slot) => !taken.has(slot) && (h.choices.get(slot)?.length ?? 0) > 0).map((slot) => ({
    slot,
    choices: h.choices.get(slot)!,
  }));
  if (!slots.some((s) => MAIN_SLOTS.includes(s.slot)) && fixed.length === 0) throw new HttpError(409, NOT_ENOUGH, 'not_enough_history');

  const goal = goalOf(user);
  const ranked = rankDrafts({
    goal,
    fixed: fixed.map((f) => ({ ...f, times: 0 })),
    slots,
    dayBefore: h.keysByDay.get(addDay(date, -1)) ?? [],
  });
  const existing = await findPlan(user.id, date);
  const index = shuffle && existing ? existing.shuffle + 1 : 0;
  const best = ranked.length > 0 ? ranked[index % ranked.length] : null;
  const drafted: DraftItem[] = (best?.picks ?? []).flatMap((pick, i) =>
    pick
      ? [
          {
            slot: slots[i].slot,
            time: times[slots[i].slot],
            key: pick.key,
            savedMealId: pick.savedMealId,
            sourceMealId: pick.sourceMealId,
            name: pick.name,
            nutrients: pick.nutrients,
            status: 'planned' as const,
          },
        ]
      : [],
  );
  const items = [...fixed, ...drafted].sort((a, b) => a.time.localeCompare(b.time));
  const values = { items, choices: slots, shuffle: index, belowFloor: best?.belowFloor ?? false };
  await db
    .insert(dayPlans)
    .values({ userId: user.id, date, ...values })
    .onConflictDoUpdate({ target: [dayPlans.userId, dayPlans.date], set: { ...values, updatedAt: new Date() } });
  return dayPlanResponse(user, date);
}

/** The draft of `date` for the app, with what Swap offers for each meal. */
export async function dayPlanResponse(user: User, date: string): Promise<DayPlanResponse> {
  const [row, premium] = await Promise.all([findPlan(user.id, date), hasPremiumAccess(user.id)]);
  if (!row) {
    // Only tomorrow can be drafted, so only then is the history worth reading.
    const tomorrow = addDay(localDate(new Date(), user.timezone), 1);
    return { date, premium, eligible: date === tomorrow && eligibleFrom(await history(user)), plan: null };
  }
  const goal = goalOf(user);
  const items = row.items.map((item, n) => {
    const slotChoices = row.choices.find((c) => c.slot === item.slot)?.choices ?? [];
    const rest = row.items.filter((other, i) => i !== n && other.status !== 'removed').map((other) => other.nutrients);
    const current = slotChoices.find((c) => c.key === item.key) ?? null;
    const alternatives =
      item.repeatId || item.status !== 'planned'
        ? []
        : swapChoices(slotChoices, current ?? { ...item, times: 0 }, rest, goal).map(({ key, name, nutrients }) => ({ key, name, nutrients }));
    return { ...item, n, alternatives };
  });
  return {
    date,
    premium,
    eligible: true,
    plan: {
      items,
      totals: draftTotals(row.items),
      target: { calories: goal.calories, proteinG: goal.proteinG },
      belowFloor: row.belowFloor,
      updatedAt: row.updatedAt.toISOString(),
    },
  };
}

/** One change at a time per draft: a double tap waits here. */
async function lockedPlan(tx: Executor, userId: string, date: string) {
  const [row] = await tx
    .select()
    .from(dayPlans)
    .where(and(eq(dayPlans.userId, userId), eq(dayPlans.date, date)))
    .for('update');
  if (!row) throw new HttpError(404, 'There is no draft for that day.');
  return row;
}

function itemAt(row: DayPlanRow, n: number) {
  const item = Number.isInteger(n) ? row.items[n] : undefined;
  if (!item) throw new HttpError(404, 'That meal is not in the draft.');
  return item;
}

/** Swap a drafted meal for another choice of its slot, or take it out. Repeats stay as they are. */
export async function updateDraftItem(user: User, date: string, n: number, change: { key: string } | { status: 'removed' }) {
  await db.transaction(async (tx) => {
    const row = await lockedPlan(tx, user.id, date);
    const item = itemAt(row, n);
    if (item.repeatId) throw new HttpError(400, 'This meal repeats on this day. Change it in Saved meals.');
    if (item.status === 'logged') throw new HttpError(409, 'This meal is already logged.');
    let next: DraftItem;
    if ('key' in change) {
      const choice = row.choices.find((c) => c.slot === item.slot)?.choices.find((c) => c.key === change.key);
      if (!choice) throw new HttpError(400, 'Pick one of the choices for this meal.');
      next = { ...item, key: choice.key, savedMealId: choice.savedMealId, sourceMealId: choice.sourceMealId, name: choice.name, nutrients: choice.nutrients, status: 'planned' };
    } else {
      next = { ...item, status: 'removed' };
    }
    const items = row.items.map((it, i) => (i === n ? next : it));
    await tx.update(dayPlans).set({ items }).where(eq(dayPlans.id, row.id));
  });
  return dayPlanResponse(user, date);
}

/**
 * "Log it" on a drafted meal on the day: a copy of the saved meal (or of the meal it came from)
 * at its planned time, or now when that is still ahead, the way Log again copies. Tapping twice
 * logs it once.
 */
export async function logDraftItem(user: User, date: string, n: number) {
  const today = localDate(new Date(), user.timezone);
  if (date > today) throw new HttpError(400, "You can't log things in the future.");
  const row = await findPlan(user.id, date);
  if (!row) throw new HttpError(404, 'There is no draft for that day.');
  const item = itemAt(row, n);
  if (item.repeatId) throw new HttpError(400, 'Log this repeat from Planned for today.');

  // The meal to copy: the saved meal, or the meal it was eaten as (it may have been deleted since).
  const source =
    (item.savedMealId
      ? await db.query.meals.findFirst({ where: and(eq(meals.id, item.savedMealId), eq(meals.userId, user.id), eq(meals.status, 'saved')) })
      : undefined) ??
    (item.sourceMealId
      ? await db.query.meals.findFirst({ where: and(eq(meals.id, item.sourceMealId), eq(meals.userId, user.id), eq(meals.status, 'completed')) })
      : undefined);
  const planned = sql`least(now(), ((${date}::date + ${item.time}::time)::timestamp at time zone ${user.timezone}))`;
  const id = crypto.randomUUID();
  const photo = { id, imageKey: source ? await copyPhoto(source, id) : null };
  let created = false;
  try {
    const result = await db.transaction(async (tx) => {
      const locked = await lockedPlan(tx, user.id, date);
      const current = itemAt(locked, n);
      if (current.status === 'logged' && current.loggedMealId) {
        const logged = await tx.query.meals.findFirst({ where: and(eq(meals.id, current.loggedMealId), eq(meals.userId, user.id)) });
        if (logged) return { meal: logged, created: false };
      }
      const meal = source
        ? await copyMeal(source, planned, { photo, executor: tx })
        : // Its meal is gone: log the numbers the draft kept.
          (
            await tx
              .insert(meals)
              .values({
                id,
                userId: user.id,
                status: 'completed',
                source: 'copy',
                name: current.name,
                confidence: 'high',
                ...current.nutrients,
                fiberG: null,
                baseNutrition: { ...current.nutrients, fiberG: null },
                portion: 1,
                loggedAt: planned,
              })
              .returning()
          )[0];
      const items = locked.items.map((it, i) => (i === n ? { ...it, status: 'logged' as const, loggedMealId: meal.id } : it));
      await tx.update(dayPlans).set({ items }).where(eq(dayPlans.id, locked.id));
      return { meal, created: true };
    });
    created = result.created;
    return result;
  } finally {
    if (!created && photo.imageKey) {
      await deleteObject(photo.imageKey).catch((error: unknown) => console.warn(`[day-plan] could not delete a spare photo: ${describeError(error)}`));
    }
  }
}

/** "Clear draft". */
export async function clearDayPlan(userId: string, date: string) {
  await db.delete(dayPlans).where(and(eq(dayPlans.userId, userId), eq(dayPlans.date, date)));
}
