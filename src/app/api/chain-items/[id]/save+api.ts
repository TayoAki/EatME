import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle, readJson } from '@/lib/server/http';
import { menuUser, orderChainItem, requireWhatToOrder } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';
import { orderDishSchema } from '@/shared/menus';

type Params = { id: string };

/** Save for later: the chain item in Saved meals, to log when the food arrives (whole or half, one side at most). Tapping twice logs once (`requestId`). */
export const POST = handle<Params>(async (request, { id }) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  rateLimit(`menu-orders:${userId}`, 300, 24 * 60 * 60 * 1000);
  const body = orderDishSchema.parse(await readJson(request));
  const meal = await orderChainItem(await menuUser(userId), id, body, 'saved');
  return Response.json({ meal: await toMeal(meal) }, { status: 201 });
});
