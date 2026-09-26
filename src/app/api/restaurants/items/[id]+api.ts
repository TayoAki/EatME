import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';
import { checkRestaurantAccess } from '@/lib/server/restaurant-access';
import { restaurantItem } from '@/lib/server/restaurants';

type Params = { id: string };

/** A menu item with every serving (FatSecret food ID). */
export const GET = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  checkRestaurantAccess(userId);
  if (!/^\d{1,20}$/.test(id)) throw new HttpError(404, "This menu item isn't available any more.");
  return Response.json({ item: await restaurantItem(id) });
});
