import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { reportProduct, withdrawReport } from '@/lib/server/product-reports';
import { rateLimit } from '@/lib/server/rate-limit';
import { productReportSchema } from '@/shared/products';

type Params = { code: string };

/** "Report a problem" with a barcode product: `{ reason, note? }`. 20 a day. */
export const POST = handle<Params>(async (request, { code }) => {
  const userId = await requireUserId(request);
  rateLimit(`product-reports:${userId}`, 20, 24 * 60 * 60 * 1000);
  const body = productReportSchema.parse(await readJson(request));
  await reportProduct(userId, code, body);
  return Response.json({ reported: true }, { status: 201 });
});

/** Takes the report back. */
export const DELETE = handle<Params>(async (request, { code }) => {
  const userId = await requireUserId(request);
  await withdrawReport(userId, code);
  return Response.json({ deleted: true });
});
