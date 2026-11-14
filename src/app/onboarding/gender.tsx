import { View } from 'react-native';

import { OnboardingScreen, ROWS_AFTER_MS } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { GENDER_LABELS, GENDERS } from '@/shared/onboarding';

export default function GenderStep() {
  const gender = useOnboardingStore((s) => s.answers.gender);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="gender"
      contentEnters={false}
      title="Choose your gender"
      subtitle="This will be used to calibrate your custom plan."
      canContinue={!!gender}>
      <View className="gap-3">
        {GENDERS.map((value, index) => (
          <OptionRow
            key={value}
            enterIndex={index}
            enterAfter={ROWS_AFTER_MS}
            centered
            title={GENDER_LABELS[value]}
            selected={gender === value}
            onPress={() => setAnswers({ gender: value })}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}
