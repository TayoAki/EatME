import { createClerkClient, verifyToken } from '@clerk/backend';

import { HttpError } from './http';

let clerk: ReturnType<typeof createClerkClient> | null = null;

/** Clerk Backend API client (server only). */
export function clerkClient() {
  const secretKey = process.env.CLERK_SECRET_KEY;
  if (!secretKey) throw new Error('CLERK_SECRET_KEY is not set. Add it to .env (Clerk dashboard → API keys).');
  clerk ??= createClerkClient({ secretKey });
  return clerk;
}

/**
 * Verifies the Clerk session token sent by the app (`Authorization: Bearer <token>`) and returns the
 * Clerk user id. Throws a 401 HttpError when the token is missing or invalid.
 */
export async function requireUserId(request: Request): Promise<string> {
  const header = request.headers.get('authorization');
  const token = header?.startsWith('Bearer ') ? header.slice('Bearer '.length).trim() : null;
  if (!token) throw new HttpError(401, 'Sign in required');

  try {
    const payload = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });
    if (!payload.sub) throw new Error('Token has no subject');
    return payload.sub;
  } catch {
    throw new HttpError(401, 'Your session has expired. Please sign in again.');
  }
}
