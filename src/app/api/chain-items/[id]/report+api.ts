import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { reportChainItem, requireWhatToOrder } from '@/lib/server/menus';
import { rateLimit } from '@/lib/server/rate-limit';
import { chainItemReportSchema } from '@/shared/menus';

type Params = { id: string };

/** "Report a wrong item": `{ reason, note? }`, reviewed by hand. 20 a day. */
export const POST = handle<Params>(async (request, { id }) => {
  requireWhatToOrder();
  const userId = await requireUserId(request);
  rateLimit(`chain-item-reports:${userId}`, 20, 24 * 60 * 60 * 1000);
  await reportChainItem(userId, id, chainItemReportSchema.parse(await readJson(request)));
  return Response.json({ reported: true }, { status: 201 });
});
