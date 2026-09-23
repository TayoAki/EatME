import { View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { UnitToggle } from '@/components/onboarding/unit-toggle';
import { WeightWheel } from '@/components/pickers/body-wheels';
import { useOnboardingStore } from '@/lib/onboarding-store';

export default function WeightStep() {
  const weightKg = useOnboardingStore((s) => s.answers.weightKg) ?? 70;
  const unit = useOnboardingStore((s) => s.answers.unitSystem) ?? 'metric';
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="weight"
      title="What's your current weight?"
      subtitle="This will be used to calibrate your custom plan.">
      <UnitToggle />
      <View className="mt-6">
        <WeightWheel weightKg={weightKg} unit={unit} onChange={(kg) => setAnswers({ weightKg: kg })} />
      </View>
    </OnboardingScreen>
  );
}
