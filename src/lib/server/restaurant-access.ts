import { restaurantsEnabled } from './fatsecret';
import { HttpError } from './http';
import { rateLimit } from './rate-limit';

/** Restaurant menus must be switched on (`RESTAURANTS` and the FatSecret keys); 600 requests an hour per person. */
export function checkRestaurantAccess(userId: string) {
  if (!restaurantsEnabled()) throw new HttpError(404, "Restaurant menus aren't available yet.");
  rateLimit(`restaurants:${userId}`, 600, 60 * 60 * 1000);
}
