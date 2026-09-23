import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { meals } from '@/db/schema';
import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { resumeStalledAnalyses } from '@/lib/server/meal-analysis';
import { deleteObject } from '@/lib/server/storage';
import { updateMealSchema } from '@/shared/meals';

type Params = { id: string };

const mealId = (id: string) => {
  const parsed = z.string().uuid().safeParse(id);
  if (!parsed.success) throw new HttpError(404, 'Meal not found');
  return parsed.data;
};

async function findMeal(userId: string, id: string) {
  const meal = await db.query.meals.findFirst({
    where: and(eq(meals.id, mealId(id)), eq(meals.userId, userId)),
  });
  if (!meal) throw new HttpError(404, 'Meal not found');
  return meal;
}

/** One meal. The scan screen polls this while the photo is analyzed. */
export const GET = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const meal = await findMeal(userId, id);
  if (meal.status === 'analyzing') {
    void resumeStalledAnalyses(userId).catch((error: unknown) => console.error('[meals] resume failed', error));
  }
  return Response.json({ meal: await toMeal(meal) });
});

/** Manual corrections of the AI estimate. */
export const PATCH = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const changes = updateMealSchema.parse(await readJson(request));
  if (Object.keys(changes).length === 0) throw new HttpError(400, 'Nothing to update');

  const meal = await findMeal(userId, id);
  if (meal.status !== 'completed') throw new HttpError(409, 'This meal is still being analyzed');

  const [saved] = await db.update(meals).set(changes).where(eq(meals.id, meal.id)).returning();
  return Response.json({ meal: await toMeal(saved) });
});

export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  const meal = await findMeal(userId, id);

  await db.delete(meals).where(eq(meals.id, meal.id));
  if (meal.imageKey) {
    await deleteObject(meal.imageKey).catch((error: unknown) =>
      console.error('[meals] could not delete the photo from the bucket', error),
    );
  }
  return Response.json({ deleted: true });
});
