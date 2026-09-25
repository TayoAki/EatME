import { expoClient } from '@better-auth/expo/client';
import { emailOTPClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import * as SecureStore from 'expo-secure-store';

import { API_URL } from './api-url';

/**
 * Better Auth client. On iOS/Android the session cookie lives in SecureStore (Keychain / Keystore)
 * and the last session is cached there too, so the app opens signed in without a spinner.
 */
export const authClient = createAuthClient({
  // Falls back to a placeholder only while the web build is rendered on the server.
  baseURL: API_URL || 'http://localhost:8081',
  plugins: [expoClient({ scheme: 'eatme', storagePrefix: 'eatme', storage: SecureStore }), emailOTPClient()],
});

/** Sign-in state for the whole app. */
export function useSession() {
  const { data, isPending } = authClient.useSession();
  return {
    isLoaded: !isPending,
    isSignedIn: !!data,
    userId: data?.user.id ?? null,
    user: data?.user ?? null,
  };
}

const FRIENDLY_ERRORS: Record<string, string> = {
  USER_ALREADY_EXISTS: 'An account with this email already exists. Sign in instead.',
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: 'An account with this email already exists. Sign in instead.',
  INVALID_EMAIL_OR_PASSWORD: 'Wrong email or password.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: 'Your password needs at least 8 characters.',
  PASSWORD_TOO_LONG: 'That password is too long.',
  INVALID_OTP: "That code isn't right. Check the email and try again.",
  OTP_EXPIRED: 'That code has expired. Ask for a new one.',
  TOO_MANY_ATTEMPTS: 'Too many wrong codes. Ask for a new one.',
  // Linking a new sign-in method needs the existing account's email to be verified.
  OAUTH_LINK_ERROR:
    'This email already has an EatME account. Sign in with your password and verify your email in Profile — then this works too.',
};

/** Human-readable message for a Better Auth error. */
export function authErrorMessage(error: { code?: string; message?: string; status?: number } | null | undefined) {
  if (!error) return 'Something went wrong. Please try again.';
  if (error.code && FRIENDLY_ERRORS[error.code]) return FRIENDLY_ERRORS[error.code];
  if (error.status === 429) return 'Too many attempts. Please wait a moment and try again.';
  return error.message || 'Something went wrong. Please try again.';
}
