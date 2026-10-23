import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AiConsentView } from '@/components/ai-consent-view';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { useFeatures } from '@/lib/queries';
import { DEFAULT_AI_PROVIDERS } from '@/shared/features';
import { MENU_CONSENT_VERSION } from '@/shared/onboarding';

/**
 * After the questions, before anything goes to AI (Apple 5.1.2(i)): allow AI for the plan and meal
 * analysis, or continue with the standard formula plan (scans ask again later).
 */
export default function AiConsentStep() {
  const insets = useSafeAreaInsets();
  const features = useFeatures();
  const setAiConsent = useOnboardingStore((s) => s.setAiConsent);
  const menus = !!features.data?.whatToOrder;
  const choose = (allowed: boolean) => {
    setAiConsent(allowed, menus ? MENU_CONSENT_VERSION : 1);
    router.push('/onboarding/building-plan');
  };
  return (
    <AiConsentView
      context="plan"
      menus={menus}
      providers={features.data?.aiProviders ?? DEFAULT_AI_PROVIDERS}
      onAllow={() => choose(true)}
      onDecline={() => choose(false)}
      onBack={() => router.back()}
      bottomSpace={insets.bottom + 16}
    />
  );
}
