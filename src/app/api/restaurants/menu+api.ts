import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';
import { checkRestaurantAccess } from '@/lib/server/restaurant-access';
import { chainMenu } from '@/lib/server/restaurants';

/** One page of a chain's menu: `?chain=McDonald's&q=&page=0` (50 items a page). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  checkRestaurantAccess(userId);
  const params = new URL(request.url).searchParams;
  const chain = (params.get('chain') ?? '').trim().slice(0, 80);
  if (!chain) throw new HttpError(400, 'Pass ?chain=');
  const q = (params.get('q') ?? '').trim().slice(0, 80);
  const page = Number(params.get('page') ?? 0);
  return Response.json(await chainMenu(chain, q, Number.isFinite(page) ? page : 0));
});
