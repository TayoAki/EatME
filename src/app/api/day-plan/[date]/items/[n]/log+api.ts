import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { logDraftItem, planDate, planItem, planUser } from '@/lib/server/day-draft';
import { handle } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';

/** "Log it" on a drafted meal, on its day. Free: no AI call. Tapping twice logs it once. */
export const POST = handle<{ date: string; n: string }>(async (request, { date, n }) => {
  const userId = await requireUserId(request);
  rateLimit(`day-plan-log:${userId}`, 120, 60 * 60 * 1000);
  const user = await planUser(userId);
  const { meal, created } = await logDraftItem(user, planDate(date), planItem(n));
  return Response.json({ meal: await toMeal(meal) }, { status: created ? 201 : 200 });
});
