import { and, asc, count, desc, eq, inArray, sql } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { mealRepeatResponses, mealRepeats, meals, type MealRow } from '@/db/schema';
import {
  MAX_REPEATS,
  MAX_SAVED_MEALS,
  weekdayOf,
  type CreateSavedMealBody,
  type MealRepeat,
  type PlannedMeal,
  type SavedMeal,
} from '@/shared/saved-meals';

import { userTimeZone } from './day';
import { toMeal } from './dto';
import { foodNutrients, type ComputedItem } from './food-match';
import { foodsByIds } from './foods';
import { HttpError } from './http';
import { createMeal } from './instant-meals';
import { copyMeal } from './meal-values';
import { localDate } from './streak';

const uuid = z.string().uuid();

/** One of the user's saved meals (404 otherwise). */
export async function findSavedMeal(userId: string, id: string) {
  const parsed = uuid.safeParse(id);
  const meal = parsed.success
    ? await db.query.meals.findFirst({ where: and(eq(meals.id, parsed.data), eq(meals.userId, userId), eq(meals.status, 'saved')) })
    : undefined;
  if (!meal) throw new HttpError(404, 'Saved meal not found');
  return meal;
}

/** A logged meal kept as a saved meal (a copy, so later edits never touch the day it was logged), or a new one from database foods. */
export async function createSavedMeal(userId: string, body: CreateSavedMealBody): Promise<MealRow> {
  const [{ saved }] = await db
    .select({ saved: count() })
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'saved')));
  if (saved >= MAX_SAVED_MEALS) {
    throw new HttpError(409, `You can keep up to ${MAX_SAVED_MEALS} saved meals. Delete one to save another.`);
  }

  if ('mealId' in body) {
    const meal = await db.query.meals.findFirst({ where: and(eq(meals.id, body.mealId), eq(meals.userId, userId)) });
    if (!meal) throw new HttpError(404, 'Meal not found');
    if (meal.status !== 'completed') throw new HttpError(409, 'Only analyzed meals can be saved');
    return copyMeal(meal, new Date(), { status: 'saved', name: body.name });
  }

  const foodMap = await foodsByIds(body.items.map((item) => item.foodId));
  const items: ComputedItem[] = body.items.map((input) => {
    const food = foodMap.get(input.foodId);
    if (!food) throw new HttpError(400, 'That food is not in the database.');
    return {
      name: input.name ?? food.description.split(',')[0],
      foodId: food.id,
      grams: input.grams,
      nutrients: foodNutrients(food, input.grams),
    };
  });
  return createMeal(userId, 'food', body.name, items, 'saved');
}

/** Saved meals with their repeats, the most recently used first. */
export async function listSavedMeals(userId: string): Promise<SavedMeal[]> {
  const rows = await db
    .select()
    .from(meals)
    .where(and(eq(meals.userId, userId), eq(meals.status, 'saved')))
    .orderBy(desc(meals.createdAt));
  if (rows.length === 0) return [];

  const [repeats, usage] = await Promise.all([
    db.select().from(mealRepeats).where(eq(mealRepeats.userId, userId)),
    db
      .select({
        id: meals.savedMealId,
        times: sql<number>`count(*)::int`,
        // When it was last used (a meal logged for an earlier day still counts as used now).
        last: sql<Date>`max(${meals.createdAt})`.mapWith(meals.createdAt),
      })
      .from(meals)
      .where(
        and(
          eq(meals.userId, userId),
          eq(meals.status, 'completed'),
          inArray(
            meals.savedMealId,
            rows.map((row) => row.id),
          ),
        ),
      )
      .groupBy(meals.savedMealId),
  ]);
  const repeatOf = new Map(repeats.map((repeat) => [repeat.savedMealId, repeat]));
  const usageOf = new Map(usage.map((u) => [u.id, u]));
  const lastUsed = (row: MealRow) => (usageOf.get(row.id)?.last ?? row.createdAt).getTime();

  return Promise.all(
    [...rows]
      .sort((a, b) => lastUsed(b) - lastUsed(a))
      .map(async (row) => {
        const repeat = repeatOf.get(row.id);
        return {
          ...(await toMeal(row)),
          repeat: repeat ? { weekdays: repeat.weekdays, time: repeat.time } : null,
          timesLogged: usageOf.get(row.id)?.times ?? 0,
        };
      }),
  );
}

/** Repeats a saved meal on these weekdays (replacing its earlier days and time). */
export async function setRepeat(userId: string, savedMealId: string, repeat: MealRepeat) {
  const saved = await findSavedMeal(userId, savedMealId);
  const existing = await db.query.mealRepeats.findFirst({ where: eq(mealRepeats.savedMealId, saved.id) });
  if (!existing) {
    const [{ repeats }] = await db.select({ repeats: count() }).from(mealRepeats).where(eq(mealRepeats.userId, userId));
    if (repeats >= MAX_REPEATS) {
      throw new HttpError(409, `You can repeat up to ${MAX_REPEATS} meals. Stop repeating one to add another.`);
    }
  }
  const weekdays = [...repeat.weekdays].sort((a, b) => a - b);
  const [row] = await db
    .insert(mealRepeats)
    .values({ userId, savedMealId: saved.id, weekdays, time: repeat.time })
    .onConflictDoUpdate({ target: mealRepeats.savedMealId, set: { weekdays, time: repeat.time, updatedAt: new Date() } })
    .returning();
  return { weekdays: row.weekdays, time: row.time };
}

export async function deleteRepeat(userId: string, savedMealId: string) {
  const saved = await findSavedMeal(userId, savedMealId);
  await db.delete(mealRepeats).where(and(eq(mealRepeats.savedMealId, saved.id), eq(mealRepeats.userId, userId)));
}

/**
 * Saved meals planned for a day (its weekday), with how they were answered. A logged meal that
 * was deleted afterwards counts as unanswered, so it is offered again.
 */
export async function plannedMeals(userId: string, date: string): Promise<PlannedMeal[]> {
  const rows = await db
    .select({ repeat: mealRepeats, meal: meals, answer: mealRepeatResponses })
    .from(mealRepeats)
    .innerJoin(meals, eq(meals.id, mealRepeats.savedMealId))
    .leftJoin(mealRepeatResponses, and(eq(mealRepeatResponses.repeatId, mealRepeats.id), eq(mealRepeatResponses.date, date)))
    .where(and(eq(mealRepeats.userId, userId), sql`${weekdayOf(date)}::smallint = any(${mealRepeats.weekdays})`))
    .orderBy(asc(mealRepeats.time), asc(meals.name));
  return Promise.all(
    rows.map(async ({ repeat, meal, answer }) => {
      const answered = answer && !(answer.response === 'logged' && !answer.mealId);
      return {
        repeatId: repeat.id,
        time: repeat.time,
        meal: await toMeal(meal),
        response: answered ? answer.response : null,
        loggedMealId: answered ? answer.mealId : null,
      };
    }),
  );
}

async function findRepeat(userId: string, repeatId: string) {
  const parsed = uuid.safeParse(repeatId);
  const repeat = parsed.success
    ? await db.query.mealRepeats.findFirst({ where: and(eq(mealRepeats.id, parsed.data), eq(mealRepeats.userId, userId)) })
    : undefined;
  if (!repeat) throw new HttpError(404, 'Planned meal not found');
  return repeat;
}

const responseOn = (repeatId: string, date: string) =>
  and(eq(mealRepeatResponses.repeatId, repeatId), eq(mealRepeatResponses.date, date));

/**
 * "Log it" on a planned meal: a copy of the saved meal at its usual time that day (or now, when
 * that time is still ahead). Tapping twice never logs it twice.
 */
export async function logPlanned(userId: string, repeatId: string, date: string) {
  const repeat = await findRepeat(userId, repeatId);
  const saved = await findSavedMeal(userId, repeat.savedMealId);
  const timeZone = await userTimeZone(userId);
  if (date > localDate(new Date(), timeZone)) throw new HttpError(400, "You can't log things in the future.");
  const usualTime = sql`((${date}::date + ${repeat.time}::time)::timestamp at time zone ${timeZone})`;

  return db.transaction(async (tx) => {
    // One answer at a time per planned meal (a double tap waits here, then finds the first copy).
    await tx.execute(sql`select 1 from ${mealRepeats} where ${mealRepeats.id} = ${repeat.id} for update`);
    const answer = await tx.query.mealRepeatResponses.findFirst({ where: responseOn(repeat.id, date) });
    if (answer?.response === 'logged' && answer.mealId) {
      const logged = await tx.query.meals.findFirst({ where: eq(meals.id, answer.mealId) });
      if (logged) return { meal: logged, created: false };
    }
    const meal = await copyMeal(saved, sql`least(now(), ${usualTime})`);
    await tx
      .insert(mealRepeatResponses)
      .values({ repeatId: repeat.id, date, response: 'logged', mealId: meal.id })
      .onConflictDoUpdate({
        target: [mealRepeatResponses.repeatId, mealRepeatResponses.date],
        set: { response: 'logged', mealId: meal.id, updatedAt: new Date() },
      });
    return { meal, created: true };
  });
}

/** "Not today": nothing is logged, and the planned meal is not offered again that day. */
export async function skipPlanned(userId: string, repeatId: string, date: string) {
  const repeat = await findRepeat(userId, repeatId);
  const answer = await db.query.mealRepeatResponses.findFirst({ where: responseOn(repeat.id, date) });
  if (answer?.response === 'logged' && answer.mealId) throw new HttpError(409, 'This meal is already logged for that day.');
  await db
    .insert(mealRepeatResponses)
    .values({ repeatId: repeat.id, date, response: 'skipped', mealId: null })
    .onConflictDoUpdate({
      target: [mealRepeatResponses.repeatId, mealRepeatResponses.date],
      set: { response: 'skipped', mealId: null, updatedAt: new Date() },
    });
}
