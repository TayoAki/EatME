import { z } from 'zod';

import { applyWebhookEvent, paymentsEnabled } from '@/lib/server/billing';
import { handle, HttpError, readJson } from '@/lib/server/http';

const eventSchema = z
  .object({
    id: z.string().min(1),
    type: z.string().min(1),
    app_user_id: z.string().nullish(),
    original_app_user_id: z.string().nullish(),
    aliases: z.array(z.string()).nullish(),
    entitlement_ids: z.array(z.string()).nullish(),
    entitlement_id: z.string().nullish(),
    product_id: z.string().nullish(),
    expiration_at_ms: z.number().nullish(),
    event_timestamp_ms: z.number(),
    store: z.string().nullish(),
    transferred_from: z.array(z.string()).nullish(),
    transferred_to: z.array(z.string()).nullish(),
  })
  .passthrough();

/** Same length and characters, checked without an early exit. */
function sameSecret(a: string, b: string) {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

/**
 * RevenueCat's webhook (set its Authorization header to "Bearer <REVENUECAT_WEBHOOK_SECRET>").
 * Purchases, renewals, cancellations, expirations and transfers keep `subscriptions` current.
 */
export const POST = handle(async (request) => {
  if (!paymentsEnabled()) throw new HttpError(404, 'Not found');
  if (!sameSecret(request.headers.get('authorization') ?? '', `Bearer ${process.env.REVENUECAT_WEBHOOK_SECRET}`)) {
    throw new HttpError(401, 'Unauthorized');
  }
  const { event } = z.object({ event: eventSchema }).parse(await readJson(request));
  const result = await applyWebhookEvent(event);
  console.log(`[billing] ${event.type} ${event.id}: ${result}`);
  return Response.json({ ok: true, result });
});
