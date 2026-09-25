import { z } from 'zod';

import { appleRevocationConfigured, storeAppleRefreshToken } from '@/lib/server/apple';
import { requireUserId } from '@/lib/server/auth';
import { handle, readJson } from '@/lib/server/http';
import { rateLimit } from '@/lib/server/rate-limit';

const bodySchema = z.object({ code: z.string().min(1).max(2000) });

/** After Sign in with Apple: keeps what's needed to revoke Apple's tokens when the account is deleted. */
export const POST = handle(async (request) => {
  const userId = await requireUserId(request);
  rateLimit(`apple-authorization:${userId}`, 10, 60 * 60 * 1000);
  const { code } = bodySchema.parse(await readJson(request));
  if (!appleRevocationConfigured()) return Response.json({ stored: false });
  try {
    return Response.json({ stored: await storeAppleRefreshToken(userId, code) });
  } catch (error) {
    console.error('[apple] authorization code exchange failed', error instanceof Error ? error.message : error);
    return Response.json({ stored: false });
  }
});
