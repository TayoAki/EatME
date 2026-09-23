import { expo } from '@better-auth/expo';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

import { db } from '@/db';
import { accounts, sessions, users, verifications } from '@/db/schema';

import { HttpError } from './http';

const isProduction = process.env.NODE_ENV === 'production';
/**
 * Inside Expo Go the app identifies itself as exp://… instead of eatme://. ALLOW_EXPO_GO=true lets
 * testers use Expo Go against the live server. Turn it off before release, and before adding
 * Google/Apple sign-in (their redirects must only go back to eatme://).
 */
const allowExpoGo = !isProduction || process.env.ALLOW_EXPO_GO === 'true';

function createAuth() {
  return betterAuth({
    appName: 'EatME',
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    basePath: '/api/auth',
    database: drizzleAdapter(db, {
      provider: 'pg',
      usePlural: true,
      schema: { users, sessions, accounts, verifications },
    }),
    // V1: email + password only. "Forgot password" and email verification need an email service (V2).
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
    },
    // Stay signed in for 30 days; every day of use extends the session.
    session: { expiresIn: 60 * 60 * 24 * 30, updateAge: 60 * 60 * 24 },
    // "exp://" matches every Expo Go address (exp://<host>:<port>).
    trustedOrigins: [
      'eatme://',
      ...(allowExpoGo ? ['exp://'] : []),
      ...(isProduction ? [] : ['http://localhost:8081']),
    ],
    advanced: {
      // Railway's proxy puts the caller's address in X-Real-IP (used by the sign-in rate limiter).
      ipAddress: { ipAddressHeaders: ['x-real-ip'] },
    },
    plugins: [expo()],
  });
}

let instance: ReturnType<typeof createAuth> | undefined;

/** Better Auth server instance, created on first use (it needs the database). Server only. */
export function getAuth() {
  instance ??= createAuth();
  return instance;
}

/**
 * Reads the session cookie the app sends with every request and returns the signed-in user's id.
 * Throws a 401 HttpError when there is no valid session.
 */
export async function requireUserId(request: Request): Promise<string> {
  const result = await getAuth().api.getSession({ headers: request.headers });
  if (!result) throw new HttpError(401, 'Please sign in again.');
  return result.user.id;
}
