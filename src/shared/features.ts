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
  /** Food-quality tag experiment: people can switch it on in Preferences. */
  foodQuality: boolean;
  /** Up to 3 photos of one meal (Premium when payments are on). */
  multiPhoto: boolean;
  /** The AI may ask one tap-to-answer question after a scan. */
  followUp: boolean;
};
