import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AiConsentView } from '@/components/ai-consent-view';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { useFeatures } from '@/lib/queries';
import { DEFAULT_AI_PROVIDERS } from '@/shared/features';

/**
 * After the questions, before anything goes to AI (Apple 5.1.2(i)): allow AI for the plan and meal
 * analysis, or continue with the standard formula plan (scans ask again later).
 */
export default function AiConsentStep() {
  const insets = useSafeAreaInsets();
  const features = useFeatures();
  const setAiConsent = useOnboardingStore((s) => s.setAiConsent);
  const choose = (allowed: boolean) => {
    setAiConsent(allowed);
    router.push('/onboarding/building-plan');
  };
  return (
    <AiConsentView
      context="plan"
      providers={features.data?.aiProviders ?? DEFAULT_AI_PROVIDERS}
      onAllow={() => choose(true)}
      onDecline={() => choose(false)}
      onBack={() => router.back()}
      bottomSpace={insets.bottom + 16}
    />
  );
}
