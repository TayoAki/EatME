import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { skipPlanned } from '@/lib/server/saved-meals';
import { repeatDaySchema } from '@/shared/saved-meals';

/** "Not today" on a planned meal for `{ date }`: nothing is logged. */
export const POST = handle<{ id: string }>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`repeats:${userId}`, 120, 60 * 60 * 1000);
  const { date } = repeatDaySchema.parse(await readJson(request));
  await skipPlanned(userId, id, date);
  return Response.json({ skipped: true });
});
