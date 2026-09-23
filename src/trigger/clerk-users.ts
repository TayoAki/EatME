import { logger, schemaTask } from '@trigger.dev/sdk';
import { z } from 'zod';

import { db } from '@/db';
import { users } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';

/**
 * Keep the `users` table in sync with Clerk. The Clerk webhook (src/app/api/webhooks/clerk+api.ts)
 * triggers these tasks; Trigger.dev retries them automatically if the database is slow or down.
 */

export const clerkUserPayload = z.object({
  id: z.string(),
  email: z.string().nullable(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  imageUrl: z.string().nullable(),
});
export type ClerkUserPayload = z.infer<typeof clerkUserPayload>;

async function upsertUser({ id, ...profile }: ClerkUserPayload) {
  const [row] = await db
    .insert(users)
    .values({ id, ...profile })
    .onConflictDoUpdate({ target: users.id, set: profile })
    .returning({ id: users.id });
  return row;
}

export const clerkUserCreated = schemaTask({
  id: 'clerk-user-created',
  schema: clerkUserPayload,
  run: async (payload) => {
    const row = await upsertUser(payload);
    logger.info('User created in the database', { userId: row.id });
    return { userId: row.id };
  },
});

export const clerkUserUpdated = schemaTask({
  id: 'clerk-user-updated',
  schema: clerkUserPayload,
  run: async (payload) => {
    const row = await upsertUser(payload);
    logger.info('User updated in the database', { userId: row.id });
    return { userId: row.id };
  },
});

export const clerkUserDeleted = schemaTask({
  id: 'clerk-user-deleted',
  schema: z.object({ id: z.string() }),
  run: async ({ id }) => {
    const result = await deleteUserData(id);
    logger.info('User data deleted', { userId: id, ...result });
    return result;
  },
});
