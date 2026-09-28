import { requireUserId } from '@/lib/server/auth';
import { planDate, planItem, planUser, updateDraftItem } from '@/lib/server/day-draft';
import { handle, readJson } from '@/lib/server/http';
import { draftItemBodySchema } from '@/shared/day-draft';

/** Swap a drafted meal for another choice of its slot (`{ key }`), or take it out (`{ status: 'removed' }`). */
export const PATCH = handle<{ date: string; n: string }>(async (request, { date, n }) => {
  const userId = await requireUserId(request);
  const change = draftItemBodySchema.parse(await readJson(request));
  const user = await planUser(userId);
  return Response.json(await updateDraftItem(user, planDate(date), planItem(n), change));
});
