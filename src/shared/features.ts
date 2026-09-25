/** `GET /api/features`: optional features this server has set up. The app hides the others. */
export type Features = {
  /** Password reset and email verification codes (RESEND_API_KEY + EMAIL_FROM). */
  email: boolean;
};
