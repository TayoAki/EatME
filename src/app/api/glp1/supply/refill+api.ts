import { requireUserId } from '@/lib/server/auth';
import { userTimeZone } from '@/lib/server/day';
import { refillSupply } from '@/lib/server/glp1';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';
import { refillSchema } from '@/shared/glp1';

/** Refill: adds unopened pens, vials or packs to what is left now. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`glp1-supply:${userId}`, 60, 60 * 60 * 1000);
  const { containers } = refillSchema.parse(await readJson(request));
  const supply = await refillSupply(userId, containers, await userTimeZone(userId));
  return Response.json({ supply });
});
