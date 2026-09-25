import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { answerFollowUp, toMealWithItems } from '@/lib/server/meal-items';
import { followUpAnswerSchema } from '@/shared/meals';

/** The answer to the meal's one question (`{ option }` or `{ option: "skip" }`). Never an AI call. */
export const POST = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const { option } = followUpAnswerSchema.parse(await readJson(request));
  const mealId = z.string().uuid().safeParse(id);
  if (!mealId.success) throw new HttpError(404, 'Meal not found');
  const meal = await db.query.meals.findFirst({ where: and(eq(meals.id, mealId.data), eq(meals.userId, userId)) });
  if (!meal || meal.status !== 'completed') throw new HttpError(404, 'Meal not found');
  const saved = await answerFollowUp(meal, option);
  return Response.json({ meal: await toMealWithItems(saved) });
});
