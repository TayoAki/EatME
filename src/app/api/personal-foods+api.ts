import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { listPersonalFoods, rememberItems, rememberMeal } from '@/lib/server/personal-foods';
import { rateLimit } from '@/lib/server/rate-limit';
import { rememberFoodsSchema } from '@/shared/personal-foods';

/** "Your foods": the foods the person chose to remember, most used first. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  return Response.json({ foods: await listPersonalFoods(userId) });
});

/**
 * Remember foods: `{ itemIds }` (corrected meal items, or the one food of a meal) or `{ mealId }`
 * (a quick add or a label, as one serving). Never an AI call.
 */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`personal-foods:${userId}`, 60, 60 * 60 * 1000);
  const body = rememberFoodsSchema.parse(await readJson(request));
  const saved = 'itemIds' in body ? await rememberItems(userId, body.itemIds) : [await rememberMeal(userId, body.mealId)];
  return Response.json({ remembered: saved.map((food) => ({ id: food.id, name: food.name })) }, { status: 201 });
});
