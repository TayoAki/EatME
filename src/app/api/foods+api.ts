import { requireUserId } from '@/lib/server/auth';
import { toFoodSummary } from '@/lib/server/dto';
import { searchFoods } from '@/lib/server/foods';
import { handle } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';

/** Food search in the USDA database (`?q=`, the last word may be incomplete). */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`foods:${userId}`, 600, 60 * 60 * 1000);
  const q = (new URL(request.url).searchParams.get('q') ?? '').slice(0, 100);
  const rows = q.trim().length >= 2 ? await searchFoods(q, 20, { prefix: true }) : [];
  return Response.json({ foods: rows.map(toFoodSummary) });
});
