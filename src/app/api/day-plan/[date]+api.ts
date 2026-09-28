import { requireUserId } from '@/lib/server/auth';
import { clearDayPlan, dayPlanResponse, planDate, planUser } from '@/lib/server/day-draft';
import { handle } from '@/lib/server/http';

type Params = { date: string };

/**
 * Plan tomorrow: the draft of a day with its totals and what Swap offers for each meal, or
 * `plan: null` with whether there is enough history to draft (and whether it is Premium).
 */
export const GET = handle<Params>(async (request, { date }) => {
  const user = await planUser(await requireUserId(request));
  return Response.json(await dayPlanResponse(user, planDate(date)));
});

/** "Clear draft": nothing logged from it is touched. */
export const DELETE = handle<Params>(async (request, { date }) => {
  const userId = await requireUserId(request);
  await clearDayPlan(userId, planDate(date));
  return Response.json({ ok: true });
});
