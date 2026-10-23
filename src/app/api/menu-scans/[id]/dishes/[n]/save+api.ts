import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { menuUser, orderScanDish, requireWhatToOrder } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';
import { orderDishSchema } from '@/shared/menus';

type Params = { id: string; n: string };

/** Save for later: the dish in Saved meals, to log when the food arrives (whole or half, a tweak, the question's answer). Tapping twice logs once (`requestId`). */
export const POST = handle<Params>(async (request, { id, n }) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  rateLimit(`menu-orders:${userId}`, 300, 24 * 60 * 60 * 1000);
  if (!/^\d{1,2}$/.test(n)) throw new HttpError(404, "That dish isn't on this menu.");
  const body = orderDishSchema.parse(await readJson(request));
  const meal = await orderScanDish(await menuUser(userId), id, Number(n), body, 'saved');
  return Response.json({ meal: await toMeal(meal) }, { status: 201 });
});
