import { requireUserId } from '@/lib/server/auth';
import { userTimeZone } from '@/lib/server/day';
import { clearSupply, saveSupply } from '@/lib/server/glp1';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { supplySchema } from '@/shared/glp1';

/**
 * Pens & vials: sets up or fixes the counts for the current medicine (counting starts again from
 * now; the dose log doesn't change). Counts only: never an amount, unit or dose.
 */
export const PUT = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`glp1-supply:${userId}`, 60, 60 * 60 * 1000);
  const body = supplySchema.parse(await readJson(request));
  const supply = await saveSupply(userId, body, await userTimeZone(userId));
  return Response.json({ supply });
});

/** Stops tracking Pens & vials. */
export const DELETE = handle(async (request) => {
  const userId = await requireUserId(request);
  await clearSupply(userId);
  return Response.json({ deleted: true });
});
