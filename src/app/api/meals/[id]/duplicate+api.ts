import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { loggedAtFor, userTimeZone } from '@/lib/server/day';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { copyMeal } from '@/lib/server/meal-values';
import { rateLimit } from '@/lib/server/rate-limit';
import { duplicateMealSchema } from '@/shared/meals';

type Params = { id: string };

/** "Log again": copies one of the user's meals to now (or to noon of an earlier `date`). */
export const POST = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`copy:${userId}`, 120, 60 * 60 * 1000);
  const body = duplicateMealSchema.parse(await readJson(request));
  const mealId = z.string().uuid().safeParse(id);
  if (!mealId.success) throw new HttpError(404, 'Meal not found');

  const meal = await db.query.meals.findFirst({ where: and(eq(meals.id, mealId.data), eq(meals.userId, userId)) });
  if (!meal) throw new HttpError(404, 'Meal not found');

  const copy = await copyMeal(meal, loggedAtFor(body.date, await userTimeZone(userId)));
  return Response.json({ meal: await toMeal(copy) }, { status: 201 });
});
