import { View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { UnitToggle } from '@/components/onboarding/unit-toggle';
import { HeightWheels } from '@/components/pickers/body-wheels';
import { useOnboardingStore } from '@/lib/onboarding-store';

export default function HeightStep() {
  const heightCm = useOnboardingStore((s) => s.answers.heightCm) ?? 175;
  const unit = useOnboardingStore((s) => s.answers.unitSystem) ?? 'metric';
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen step="height" title="How tall are you?" subtitle="This will be used to calibrate your custom plan.">
      <UnitToggle />
      <View className="mt-6">
        <HeightWheels heightCm={heightCm} unit={unit} onChange={(cm) => setAnswers({ heightCm: cm })} />
      </View>
    </OnboardingScreen>
  );
}
