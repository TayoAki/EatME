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
  /** Restaurant menus (FatSecret): search chains and menu items, build a plate, log or save it. */
  restaurants: boolean;
  /** The companies that get data for AI work, named on the AI consent screen (e.g. OpenRouter, OpenAI). */
  aiProviders: string[];
};

/** Shown on the AI consent screen until the server's list has loaded (the server's own setup). */
export const DEFAULT_AI_PROVIDERS = ['OpenRouter', 'OpenAI'];

/**
 * Who gets the data, in words: "OpenRouter, which passes it to OpenAI's AI model" (or the model
 * makers alone when the server talks to them directly). `them` for plural data (answers, photos).
 */
export function aiRecipients(providers: readonly string[], pronoun: 'it' | 'them' = 'it') {
  const makers = providers.filter((provider) => provider !== 'OpenRouter');
  const owners = makers.map((maker) => `${maker}'s`);
  const joined = owners.length > 1 ? `${owners.slice(0, -1).join(', ')} and ${owners.at(-1)}` : (owners[0] ?? 'an');
  const models = `${joined} AI model${makers.length > 1 ? 's' : ''}`;
  return providers.includes('OpenRouter') ? `OpenRouter, which passes ${pronoun} to ${models}` : models;
}
