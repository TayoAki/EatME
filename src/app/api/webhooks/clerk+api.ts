import type { UserJSON } from '@clerk/backend';
import { verifyWebhook } from '@clerk/backend/webhooks';
import { tasks } from '@trigger.dev/sdk';

import type {
  ClerkUserPayload,
  clerkUserCreated,
  clerkUserDeleted,
  clerkUserUpdated,
} from '@/trigger/clerk-users';

/**
 * Clerk → Postgres sync. Clerk calls this endpoint (via ngrok in development) whenever a user is
 * created, updated or deleted. We verify the signature, then hand the work to a Trigger.dev task
 * so it is retried automatically if the database is unavailable.
 *
 * Clerk dashboard → Configure → Webhooks → Add endpoint → https://<your-ngrok-domain>/api/webhooks/clerk
 */

function toPayload(user: UserJSON): ClerkUserPayload {
  const primaryEmail =
    user.email_addresses.find((e) => e.id === user.primary_email_address_id) ?? user.email_addresses[0];
  return {
    id: user.id,
    email: primaryEmail?.email_address ?? null,
    firstName: user.first_name ?? null,
    lastName: user.last_name ?? null,
    imageUrl: user.image_url ?? null,
  };
}

export async function POST(request: Request) {
  let event;
  try {
    event = await verifyWebhook(request, { signingSecret: process.env.CLERK_WEBHOOK_SIGNING_SECRET });
  } catch (error) {
    console.error('[clerk webhook] signature verification failed', error);
    return Response.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  // Clerk retries deliveries — the message id makes each task run happen only once.
  const idempotencyKey = request.headers.get('svix-id') ?? request.headers.get('webhook-id') ?? undefined;

  try {
    switch (event.type) {
      case 'user.created': {
        const run = await tasks.trigger<typeof clerkUserCreated>('clerk-user-created', toPayload(event.data), {
          idempotencyKey,
        });
        return Response.json({ ok: true, runId: run.id });
      }
      case 'user.updated': {
        const run = await tasks.trigger<typeof clerkUserUpdated>('clerk-user-updated', toPayload(event.data), {
          idempotencyKey,
        });
        return Response.json({ ok: true, runId: run.id });
      }
      case 'user.deleted': {
        if (!event.data.id) return Response.json({ ok: true, skipped: 'missing user id' });
        const run = await tasks.trigger<typeof clerkUserDeleted>(
          'clerk-user-deleted',
          { id: event.data.id },
          { idempotencyKey },
        );
        return Response.json({ ok: true, runId: run.id });
      }
      default:
        return Response.json({ ok: true, ignored: event.type });
    }
  } catch (error) {
    // A non-2xx response makes Clerk retry the delivery later.
    console.error(`[clerk webhook] could not trigger a task for ${event.type}`, error);
    return Response.json({ error: 'Could not process the webhook' }, { status: 500 });
  }
}
