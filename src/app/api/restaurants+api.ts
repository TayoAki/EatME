import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { checkRestaurantAccess } from '@/lib/server/restaurant-access';
import { searchRestaurants } from '@/lib/server/restaurants';
import type { RestaurantSearch } from '@/shared/restaurants';

/** Restaurant chains and menu items matching `?q=` (FatSecret, US chains). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  checkRestaurantAccess(userId);
  const q = (new URL(request.url).searchParams.get('q') ?? '').trim().slice(0, 80);
  const result: RestaurantSearch = q.length >= 2 ? await searchRestaurants(q) : { chains: [], items: [] };
  return Response.json(result);
});
