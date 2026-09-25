import type { SQL } from 'drizzle-orm';

import { db, type Executor } from '@/db';
import { meals, type MealRow } from '@/db/schema';
import { scaleNutrition, type BaseNutrition, type UpdateMealBody } from '@/shared/meals';

import { HttpError } from './http';
import { copyItems } from './meal-items';
import { getObject, mealPhotoKey, putObject } from './storage';

const NUMBER_FIELDS = ['calories', 'proteinG', 'carbsG', 'fatG', 'fiberG'] as const;

/** Numbers for a portion of 1. Older meals have no stored base, so it is derived from the totals. */
export function currentBase(meal: MealRow): BaseNutrition {
  if (meal.baseNutrition) return meal.baseNutrition;
  const per = (value: number | null) => (value ?? 0) / meal.portion;
  return {
    calories: per(meal.calories),
    proteinG: per(meal.proteinG),
    carbsG: per(meal.carbsG),
    fatG: per(meal.fatG),
    fiberG: meal.fiberG === null ? null : per(meal.fiberG),
  };
}

/**
 * Turns a `PATCH /api/meals/:id` body into column updates:
 * - a new portion alone rescales every number from the unrounded base (no drift);
 * - typed-in numbers win, and the base is updated so later portion changes start from them.
 */
export function mealChanges(meal: MealRow, changes: UpdateMealBody) {
  const { portion, isFavorite, name, ...numbers } = changes;
  const update: Partial<typeof meals.$inferInsert> = {};
  if (name !== undefined) update.name = name;
  if (isFavorite !== undefined) update.isFavorite = isFavorite;

  const nextPortion = portion ?? meal.portion;
  const typed = NUMBER_FIELDS.filter((field) => numbers[field] !== undefined);
  const base = { ...currentBase(meal) };

  if (typed.length > 0) {
    for (const field of typed) base[field] = (numbers[field] as number) / nextPortion;
    update.baseNutrition = base;
    Object.assign(update, scaleNutrition(base, nextPortion));
    for (const field of typed) update[field] = numbers[field];
    update.portion = nextPortion;
  } else if (portion !== undefined && portion !== meal.portion) {
    update.baseNutrition = base;
    Object.assign(update, scaleNutrition(base, portion));
    update.portion = portion;
  }
  return update;
}

/** A copy of the meal's photo for the new meal `id`: its key, or null (no photo, or the copy failed). */
export async function copyPhoto(meal: MealRow, id: string) {
  if (!meal.imageKey) return null;
  try {
    const imageKey = mealPhotoKey(meal.userId, id);
    await putObject(imageKey, await getObject(meal.imageKey), 'image/jpeg');
    return imageKey;
  } catch (error) {
    // The copy is still useful without a picture.
    console.warn(`[meals] could not copy the photo of ${meal.id}`, error);
    return null;
  }
}

type CopyOptions = {
  status?: 'completed' | 'saved';
  name?: string;
  /** Inside a transaction: the new meal's id and its photo, copied beforehand with `copyPhoto`. */
  photo?: { id: string; imageKey: string | null };
  executor?: Executor;
};

/**
 * "Log again": a completed copy of `meal` for the same user, with its own copy of the photo
 * (so deleting either meal never removes the other's picture). No AI call, so it is free and instant.
 * `status: 'saved'` keeps the copy as a saved meal instead; logging a saved meal records where the
 * copy came from.
 */
export async function copyMeal(
  meal: MealRow,
  loggedAt: Date | SQL,
  { status = 'completed', name, photo, executor = db }: CopyOptions = {},
) {
  if (meal.status !== 'completed' && meal.status !== 'saved') throw new HttpError(409, 'Only analyzed meals can be logged again');
  const id = photo?.id ?? crypto.randomUUID();
  const imageKey = photo ? photo.imageKey : await copyPhoto(meal, id);
  const [copy] = await executor
    .insert(meals)
    .values({
      id,
      userId: meal.userId,
      status,
      name: name ?? meal.name,
      calories: meal.calories,
      proteinG: meal.proteinG,
      carbsG: meal.carbsG,
      fatG: meal.fatG,
      fiberG: meal.fiberG,
      confidence: meal.confidence,
      source: 'copy',
      portion: meal.portion,
      baseNutrition: currentBase(meal),
      note: meal.note,
      servingSize: meal.servingSize,
      nutrients: meal.nutrients,
      matchedShare: meal.matchedShare,
      processing: meal.processing,
      processingReason: meal.processingReason,
      addedSugarG: meal.addedSugarG,
      imageKey,
      savedMealId: status === 'saved' ? null : meal.status === 'saved' ? meal.id : meal.savedMealId,
      loggedAt,
    })
    .returning();
  await copyItems(meal.id, copy.id, executor);
  return copy;
}
