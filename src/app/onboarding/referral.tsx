import { Platform, View } from 'react-native';

import { OnboardingScreen, ROWS_AFTER_MS } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { REFERRAL_LABELS, REFERRAL_SOURCES, type ReferralSource } from '@/shared/onboarding';

const label = (source: ReferralSource) =>
  source === 'app_store' && Platform.OS === 'android' ? 'Google Play' : REFERRAL_LABELS[source];

/**
 * The last question (PLAN.md §3, v2.8), optional: where the person heard about Weight Class. Saved with the plan
 * after sign-up (`users.referral_source`), never sent to AI; "Skip" until something is picked, and a second tap on
 * the picked answer takes it back.
 */
export default function ReferralStep() {
  const referral = useOnboardingStore((s) => s.referral);
  const setReferral = useOnboardingStore((s) => s.setReferral);

  return (
    <OnboardingScreen
      step="referral"
      contentEnters={false}
      scrollable
      title="How did you hear about Weight Class?"
      subtitle="Optional. It helps us find more people like you."
      continueTitle={referral ? 'Continue' : 'Skip'}>
      <View className="gap-3">
        {REFERRAL_SOURCES.map((source, index) => (
          <OptionRow
            key={source}
            enterIndex={index}
            enterAfter={ROWS_AFTER_MS}
            title={label(source)}
            selected={referral === source}
            onPress={() => setReferral(referral === source ? null : source)}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}
