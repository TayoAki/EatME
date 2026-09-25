import { requireUserId } from '@/lib/server/auth';
import { dateParam } from '@/lib/server/day';
import { handle } from '@/lib/server/http';
import { plannedMeals } from '@/lib/server/saved-meals';

/** Saved meals planned for `?date=YYYY-MM-DD` (its weekday), with how each was answered. */
export const GET = handle(async (request) => {
  const userId = await requireUserId(request);
  const date = dateParam(request);
  return Response.json({ date, planned: await plannedMeals(userId, date) });
});
