import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { requireWhatToOrder, searchChains } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';

/** What to order: the chains in our table whose name has the words typed (`?q=`), biggest first. */
export const GET = handle(async (request) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  rateLimit(`chains:${userId}`, 300, 60 * 60 * 1000);
  const q = new URL(request.url).searchParams.get('q') ?? '';
  return Response.json({ chains: await searchChains(q) });
});
