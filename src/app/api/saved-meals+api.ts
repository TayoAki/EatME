import { requireUserId } from '@/lib/server/auth';
import { toMealWithItems } from '@/lib/server/meal-items';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { createSavedMeal, listSavedMeals } from '@/lib/server/saved-meals';
import { createSavedMealSchema } from '@/shared/saved-meals';

/** Saved meals (Scan → star) with their repeats, the most recently used first. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  return Response.json({ meals: await listSavedMeals(userId) });
});

/**
 * Saves a meal: `{ mealId }` keeps a copy of a logged meal, `{ name, items }` builds one from
 * database foods. Saved meals never show in a day until they are logged.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`saved-meals:${userId}`, 60, 60 * 60 * 1000);
  const body = createSavedMealSchema.parse(await readJson(request));
  const meal = await createSavedMeal(userId, body);
  return Response.json({ meal: await toMealWithItems(meal) }, { status: 201 });
});
