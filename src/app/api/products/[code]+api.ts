import { requireUserId } from '@/lib/server/auth';
import { handle, HttpError } from '@/lib/server/http';
import { lookupProduct } from '@/lib/server/products';
import { rateLimit } from '@/lib/server/rate-limit';

type Params = { code: string };

/** A packaged product by its barcode (Open Food Facts, then USDA Branded Foods), cached on our side. */
export const GET = handle<Params>(async (request, { code }) => {
  const userId = await requireUserId(request);
  rateLimit(`products:${userId}`, 120, 60 * 60 * 1000);
  const product = await lookupProduct(code);
  if (!product) throw new HttpError(404, "We couldn't find this product. Try scanning its nutrition label instead.");
  return Response.json({ product });
});
