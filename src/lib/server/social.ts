/**
 * Sign in with Apple and Google. Each is on only when its variables are set; `/api/features` tells
 * the app which buttons to show (on iPhone, Google only ever appears next to Apple — App Store rule
 * 4.8).
 *
 * - Apple: native Sign in with Apple on iPhone; the app sends Apple's ID token, checked against the
 *   bundle identifier (APPLE_BUNDLE_ID). APPLE_CLIENT_ID + APPLE_CLIENT_SECRET add the web flow.
 * - Google: the browser flow (GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET of a "Web application" OAuth
 *   client, redirect URI <BETTER_AUTH_URL>/api/auth/callback/google).
 */

export const appleConfigured = () => !!process.env.APPLE_BUNDLE_ID;
export const googleConfigured = () => !!process.env.GOOGLE_CLIENT_ID && !!process.env.GOOGLE_CLIENT_SECRET;

export function socialProviders() {
  return {
    ...(appleConfigured()
      ? {
          apple: {
            clientId: process.env.APPLE_CLIENT_ID || (process.env.APPLE_BUNDLE_ID as string),
            clientSecret: process.env.APPLE_CLIENT_SECRET ?? '',
            appBundleIdentifier: process.env.APPLE_BUNDLE_ID,
          },
        }
      : {}),
    ...(googleConfigured()
      ? {
          google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            prompt: 'select_account' as const,
          },
        }
      : {}),
  };
}
