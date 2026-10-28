import { requireUserId } from '@/lib/server/auth';
import { searchChainItems, wantsChainMatch } from '@/lib/server/chain-match';
import { toFoodSummary } from '@/lib/server/dto';
import { rankFoods } from '@/lib/server/foods';
import { handle } from '@/lib/server/http';
import { describeError } from '@/lib/server/log';
import { chainRows, menuUser } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';
import type { FoodSearchResponse } from '@/shared/meals';

/**
 * Food search in the USDA database (`?q=`, the last word may be incomplete), and for the v2.5 app the chains'
 * own dishes too (`chainDishes`, WHAT-TO-ORDER.md §5). `closeMatch`: a food has every word searched, or a
 * chain's dish matched; without one the app offers to describe the meal instead.
 */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`foods:${userId}`, 600, 60 * 60 * 1000);
  const q = (new URL(request.url).searchParams.get('q') ?? '').slice(0, 100);
  const searching = q.trim().length >= 2;
  const [ranked, chainDishes] = await Promise.all([
    searching ? rankFoods(q, 20, { prefix: true }) : [],
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
  const body: FoodSearchResponse = {
    foods: ranked.map((row) => toFoodSummary(row.food)),
    ...(chainDishes ? { chainDishes } : {}),
    closeMatch: ranked.some((row) => row.allWords) || (chainDishes?.length ?? 0) > 0,
  };
  return Response.json(body);
});
