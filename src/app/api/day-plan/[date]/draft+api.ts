import { requireUserId } from '@/lib/server/auth';
import { draftDay, planDate, planUser } from '@/lib/server/day-draft';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { draftBodySchema } from '@/shared/day-draft';

/**
 * Drafts tomorrow from the person's own meals (Premium; no AI). `{ shuffle: true }` shows the
 * next-best day.
 */
export const POST = handle<{ date: string }>(async (request, { date }) => {
  const userId = await requireUserId(request);
  rateLimit(`day-plan:${userId}`, 120, 60 * 60 * 1000);
  const body = draftBodySchema.parse(await readJson(request));
  const user = await planUser(userId);
  return Response.json(await draftDay(user, planDate(date), { shuffle: body.shuffle }));
});
