import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { chainMenu, menuUser, requireWhatToOrder } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';

type Params = { slug: string };

/**
 * A chain's menu from our table, ranked for the person's day (What fits): every item with its citation.
 * Premium, after one free try (402 `premium_required`).
 */
export const GET = handle<Params>(async (request, { slug }) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  rateLimit(`chain-menus:${userId}`, 300, 60 * 60 * 1000);
  return Response.json(await chainMenu(await menuUser(userId), slug));
});
