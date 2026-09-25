import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { replaceItems, toMealWithItems } from '@/lib/server/meal-items';
import { updateMealItemsSchema } from '@/shared/meals';

/** Edits a meal's foods and grams; every number of the meal is recalculated. */
export const PUT = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const body = updateMealItemsSchema.parse(await readJson(request));
  const mealId = z.string().uuid().safeParse(id);
  if (!mealId.success) throw new HttpError(404, 'Meal not found');
  const meal = await db.query.meals.findFirst({ where: and(eq(meals.id, mealId.data), eq(meals.userId, userId)) });
  if (!meal) throw new HttpError(404, 'Meal not found');
  if (meal.status !== 'completed' && meal.status !== 'saved') throw new HttpError(409, 'This meal is still being analyzed');
  const saved = await replaceItems(meal, body);
  return Response.json({ meal: await toMealWithItems(saved) });
});
