import { aiProviders } from './ai';
import { HttpError } from './http';

type ConsentFields = { aiConsentAt: Date | null; aiConsentProviders: string[] | null };

/**
 * Whether the person allowed AI processing by every company that would get their data now (Apple
 * 5.1.2(i)): the consent screen named them, and a new name means asking again.
 */
export function hasAiConsent(user: ConsentFields) {
  if (!user.aiConsentAt) return false;
  const allowed = new Set(user.aiConsentProviders ?? []);
  return aiProviders().every((provider) => allowed.has(provider));
}

/** Meal photos, labels and descriptions go to AI only after the person allowed it. */
export function requireAiConsent(user: ConsentFields) {
  if (!hasAiConsent(user)) {
    throw new HttpError(403, 'Allow AI analysis to estimate meals from photos and descriptions.', 'ai_consent_required');
  }
}

/** Column values for giving (true) or withdrawing (false) consent. */
export function aiConsentValues(allowed: boolean): ConsentFields {
  return allowed ? { aiConsentAt: new Date(), aiConsentProviders: aiProviders() } : { aiConsentAt: null, aiConsentProviders: null };
}
