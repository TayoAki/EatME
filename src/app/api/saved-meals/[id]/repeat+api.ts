import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { deleteRepeat, setRepeat } from '@/lib/server/saved-meals';
import { repeatSchema } from '@/shared/saved-meals';

type Params = { id: string };

/** Repeats a saved meal on chosen weekdays at a usual time: `{ weekdays: [1, 3, 5], time: "08:00" }`. */
export const PUT = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  rateLimit(`repeats:${userId}`, 120, 60 * 60 * 1000);
  const repeat = await setRepeat(userId, id, repeatSchema.parse(await readJson(request)));
  return Response.json({ repeat });
});

/** Stops repeating it (the saved meal stays). */
export const DELETE = handle<Params>(async (request, { id }) => {
  const userId = await requireUserId(request);
  await deleteRepeat(userId, id);
  return Response.json({ deleted: true });
});
