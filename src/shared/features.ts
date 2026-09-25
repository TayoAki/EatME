/** `GET /api/features`: optional features this server has set up. The app hides the others. */
export type Features = {
  /** Password reset and email verification codes (RESEND_API_KEY + EMAIL_FROM). */
  email: boolean;
  /** Sign in with Apple (iPhone). */
  apple: boolean;
  /** Sign in with Google. */
  google: boolean;
  /** Premium subscriptions (App Store / Google Play through RevenueCat). */
  payments: boolean;
  /** Free AI scans a day when payments are on. */
  freeScansPerDay: number;
};
