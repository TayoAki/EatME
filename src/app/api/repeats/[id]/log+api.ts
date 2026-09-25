import { requireUserId } from '@/lib/server/auth';
import { toMeal } from '@/lib/server/dto';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { logPlanned } from '@/lib/server/saved-meals';
import { repeatDaySchema } from '@/shared/saved-meals';

/** "Log it" on a planned meal for `{ date }` (the person's local day). Free: no AI call. */
export const POST = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`repeats:${userId}`, 120, 60 * 60 * 1000);
  const { date } = repeatDaySchema.parse(await readJson(request));
  const { meal, created } = await logPlanned(userId, id, date);
  return Response.json({ meal: await toMeal(meal) }, { status: created ? 201 : 200 });
});
