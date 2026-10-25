import { requireUserId } from '@/lib/server/auth';
import { searchChainItems, wantsChainMatch } from '@/lib/server/chain-match';
import { toFoodSummary } from '@/lib/server/dto';
import { searchFoods } from '@/lib/server/foods';
import { handle } from '@/lib/server/http';
import { describeError } from '@/lib/server/log';
import { chainRows, menuUser } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';
import type { FoodSearchResponse } from '@/shared/meals';

/**
 * Food search in the USDA database (`?q=`, the last word may be incomplete), and for the v2.5 app the chains'
 * own dishes too (`chainDishes`, WHAT-TO-ORDER.md §5).
 */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`foods:${userId}`, 600, 60 * 60 * 1000);
  const q = (new URL(request.url).searchParams.get('q') ?? '').slice(0, 100);
  const searching = q.trim().length >= 2;
  const [rows, chainDishes] = await Promise.all([
    searching ? searchFoods(q, 20, { prefix: true }) : [],
    searching && wantsChainMatch(request)
      ? searchChainItems(q)
          .then(async (items) => (items.length > 0 ? chainRows(await menuUser(userId), items) : []))
          // The chains are an extra: the database foods still answer.
          .catch((error: unknown) => {
            console.warn(`[foods] chain dishes for a search failed: ${describeError(error)}`);
            return [];
          })
      : undefined,
  ]);
  const body: FoodSearchResponse = { foods: rows.map(toFoodSummary), ...(chainDishes ? { chainDishes } : {}) };
  return Response.json(body);
});
