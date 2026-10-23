import { MENU_CONSENT_VERSION } from '@/shared/onboarding';

import { aiProviders } from './ai';
import { HttpError } from './http';

type ConsentFields = { aiConsentAt: Date | null; aiConsentProviders: string[] | null; aiConsentVersion: number | null };
type Consent = Pick<ConsentFields, 'aiConsentAt' | 'aiConsentProviders'>;

/**
 * Whether the person allowed AI processing by every company that would get their data now (Apple
 * 5.1.2(i)): the consent screen named them, and a new name means asking again.
 */
export function hasAiConsent(user: Consent) {
  if (!user.aiConsentAt) return false;
  const allowed = new Set(user.aiConsentProviders ?? []);
  return aiProviders().every((provider) => allowed.has(provider));
}

/** Meal photos, labels and descriptions go to AI only after the person allowed it. */
export function requireAiConsent(user: Consent) {
  if (!hasAiConsent(user)) {
    throw new HttpError(403, 'Allow AI analysis to estimate meals from photos and descriptions.', 'ai_consent_required');
  }
}

/**
 * What to order (v2.5): menus go to AI only after the person saw wording that names them (version 2).
 * People who agreed before menus existed are asked once more, before their first menu scan.
 */
export function hasMenuConsent(user: ConsentFields) {
  return hasAiConsent(user) && (user.aiConsentVersion ?? 1) >= MENU_CONSENT_VERSION;
}

export function requireMenuConsent(user: ConsentFields) {
  if (!hasMenuConsent(user)) {
    throw new HttpError(403, 'Allow AI analysis of menus to see what fits.', 'ai_consent_required');
  }
}

/**
 * Column values for giving (true) or withdrawing (false) consent. `version`: the wording the person
 * saw (an app without it showed version 1).
 */
export function aiConsentValues(allowed: boolean, version = 1): ConsentFields {
  return allowed
    ? { aiConsentAt: new Date(), aiConsentProviders: aiProviders(), aiConsentVersion: version }
    : { aiConsentAt: null, aiConsentProviders: null, aiConsentVersion: null };
}
