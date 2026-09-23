import { View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { GENDER_LABELS, GENDERS } from '@/shared/onboarding';

export default function GenderStep() {
  const gender = useOnboardingStore((s) => s.answers.gender);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="gender"
      title="Choose your gender"
      subtitle="This will be used to calibrate your custom plan."
      canContinue={!!gender}>
      <View className="gap-3">
        {GENDERS.map((value) => (
          <OptionRow
            key={value}
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
