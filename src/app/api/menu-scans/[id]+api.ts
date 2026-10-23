import { requireUserId } from '@/lib/server/auth';
import { handle } from '@/lib/server/http';
import { menuScanResponse, menuUser, requireWhatToOrder } from '@/lib/server/menus';

type Params = { id: string };

/** A menu scan: still reading, failed (and why), or its dishes ranked for the person's day as it is now. */
export const GET = handle<Params>(async (request, { id }) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  return Response.json(await menuScanResponse(await menuUser(userId), id));
});
