import { expo } from '@better-auth/expo';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { APIError, createAuthMiddleware } from 'better-auth/api';
import { emailOTP } from 'better-auth/plugins/email-otp';

import { db } from '@/db';
import { accounts, sessions, users, verifications } from '@/db/schema';

import { codeEmail, emailConfigured, sendEmail } from './email';
import { HttpError } from './http';
import { socialProviders } from './social';

/** Email codes (password reset, email verification) work for 10 minutes and 5 tries. */
const CODE_MINUTES = 10;

const isProduction = process.env.NODE_ENV === 'production';
/**
 * Inside Expo Go the app identifies itself as exp://… instead of eatme://. ALLOW_EXPO_GO=true lets
 * testers use Expo Go against the live server. Turn it off before release. Social sign-in never
 * returns to exp:// in production anyway (see `hooks` below).
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
    // Email + password. With an email service (V2), a 6-digit code resets the password or verifies
    // the address — codes work on phones without deep links.
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
      maxPasswordLength: 128,
      autoSignIn: true,
      // A new password signs every other device out.
      revokeSessionsOnPasswordReset: true,
    },
    // The email-OTP plugin also offers passwordless sign-in and email changes; EatME uses neither.
    disabledPaths: ['/sign-in/email-otp', '/email-otp/request-email-change', '/email-otp/change-email', '/forget-password/email-otp'],
    // Stay signed in for 30 days; every day of use extends the session.
    session: { expiresIn: 60 * 60 * 24 * 30, updateAge: 60 * 60 * 24 },
    // "exp://" matches every Expo Go address (exp://<host>:<port>).
    trustedOrigins: [
      'eatme://',
      ...(allowExpoGo ? ['exp://'] : []),
      ...(isProduction ? [] : ['http://localhost:8081']),
    ],
    socialProviders: socialProviders(),
    hooks: {
      // The browser flow hands the session to the app in the redirect back to the callback URL:
      // in production that must be the EatME app itself, never another exp:// or web address.
      before: createAuthMiddleware(async (ctx) => {
        if (!isProduction || ctx.path !== '/sign-in/social') return;
        const callbackURL = (ctx.body as { callbackURL?: unknown } | undefined)?.callbackURL;
        if (typeof callbackURL === 'string' && !callbackURL.startsWith('eatme://') && !callbackURL.startsWith('/')) {
          throw new APIError('FORBIDDEN', { message: 'Sign-in can only return to the EatME app.' });
        }
      }),
    },
    advanced: {
      // Railway's proxy puts the caller's address in X-Real-IP (used by the sign-in rate limiter).
      ipAddress: { ipAddressHeaders: ['x-real-ip'] },
    },
    plugins: [
      expo(),
      emailOTP({
        otpLength: 6,
        expiresIn: CODE_MINUTES * 60,
        allowedAttempts: 5,
        storeOTP: 'hashed',
        disableSignUp: true,
        sendVerificationOnSignUp: emailConfigured(),
        async sendVerificationOTP({ email, otp, type }) {
          if (type !== 'email-verification' && type !== 'forget-password') return;
          try {
            await sendEmail({ to: email, ...codeEmail(type, otp, CODE_MINUTES) });
          } catch (error) {
            // Never log the code itself.
            console.error(`[auth] could not send the ${type} email`, error instanceof Error ? error.message : error);
          }
        },
      }),
    ],
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
