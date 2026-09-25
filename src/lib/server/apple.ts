import { and, eq, isNotNull } from 'drizzle-orm';

import { db } from '@/db';
import { accounts } from '@/db/schema';

/**
 * Apps offering Sign in with Apple must revoke the user's Apple tokens when the account is deleted
 * (App Store rule 5.1.1(v)). That needs the Sign in with Apple key: APPLE_TEAM_ID, APPLE_KEY_ID and
 * APPLE_PRIVATE_KEY (the .p8 file's contents; newlines may be written as \n).
 */
export const appleRevocationConfigured = () =>
  !!(process.env.APPLE_BUNDLE_ID && process.env.APPLE_TEAM_ID && process.env.APPLE_KEY_ID && process.env.APPLE_PRIVATE_KEY);

const APPLE = 'https://appleid.apple.com';
const b64url = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
const encodePart = (value: object) => b64url(new TextEncoder().encode(JSON.stringify(value)));

/** The client secret Apple asks for: a short-lived JWT signed with the Sign in with Apple key (ES256). */
async function clientSecret() {
  const pem = (process.env.APPLE_PRIVATE_KEY as string).replace(/\\n/g, '\n');
  const der = Uint8Array.from(atob(pem.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '')), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey('pkcs8', der, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const now = Math.floor(Date.now() / 1000);
  const data = `${encodePart({ alg: 'ES256', kid: process.env.APPLE_KEY_ID })}.${encodePart({
    iss: process.env.APPLE_TEAM_ID,
    iat: now,
    exp: now + 300,
    aud: APPLE,
    sub: process.env.APPLE_BUNDLE_ID,
  })}`;
  const signature = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, new TextEncoder().encode(data));
  return `${data}.${b64url(new Uint8Array(signature))}`;
}

async function appleRequest(path: 'token' | 'revoke', params: Record<string, string>) {
  const res = await fetch(`${APPLE}/auth/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: process.env.APPLE_BUNDLE_ID as string, client_secret: await clientSecret(), ...params }).toString(),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Apple answered ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res;
}

/** The claims of a JWT that came straight from Apple over TLS (its signature needs no second check). */
function jwtPayload(token: string): { sub?: string } {
  const part = token.split('.')[1] ?? '';
  return JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/'))) as { sub?: string };
}

/**
 * Sign in with Apple on iPhone also returns a one-time authorization code. Exchanged here for a
 * refresh token, it lets account deletion revoke EatME's access at Apple. Returns whether it was kept.
 */
export async function storeAppleRefreshToken(userId: string, code: string) {
  if (!appleRevocationConfigured()) return false;
  const body = (await (await appleRequest('token', { code, grant_type: 'authorization_code' })).json()) as {
    refresh_token?: string;
    id_token?: string;
  };
  const sub = body.id_token ? jwtPayload(body.id_token).sub : undefined;
  if (!body.refresh_token || !sub) return false;
  const updated = await db
    .update(accounts)
    .set({ refreshToken: body.refresh_token })
    .where(and(eq(accounts.userId, userId), eq(accounts.providerId, 'apple'), eq(accounts.accountId, sub)))
    .returning({ id: accounts.id });
  return updated.length > 0;
}

/** Revokes EatME's Apple tokens before the account is deleted. Never blocks the deletion. */
export async function revokeAppleTokens(userId: string) {
  if (!appleRevocationConfigured()) return;
  const rows = await db
    .select({ token: accounts.refreshToken })
    .from(accounts)
    .where(and(eq(accounts.userId, userId), eq(accounts.providerId, 'apple'), isNotNull(accounts.refreshToken)));
  await Promise.all(
    rows.map(async (row) => {
      try {
        await appleRequest('revoke', { token: row.token as string, token_type_hint: 'refresh_token' });
      } catch (error) {
        console.error('[account] Apple token revocation failed', error instanceof Error ? error.message : error);
      }
    }),
  );
}
