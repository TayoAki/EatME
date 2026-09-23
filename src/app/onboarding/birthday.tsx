import { Text } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { DateWheels } from '@/components/pickers/date-wheels';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { ageFromDateOfBirth } from '@/shared/nutrition';
import { MIN_AGE } from '@/shared/onboarding';

export default function BirthdayStep() {
  const dateOfBirth = useOnboardingStore((s) => s.answers.dateOfBirth) ?? '2000-01-01';
  const setAnswers = useOnboardingStore((s) => s.setAnswers);
  const tooYoung = ageFromDateOfBirth(dateOfBirth) < MIN_AGE;

  return (
    <OnboardingScreen
      step="birthday"
      title="When were you born?"
      subtitle="This will be used to calibrate your custom plan."
      canContinue={!tooYoung}>
      <DateWheels value={dateOfBirth} onChange={(value) => setAnswers({ dateOfBirth: value })} />
      {tooYoung ? (
        <Text className="mt-4 text-center text-[14px] text-muted">You need to be at least {MIN_AGE} to use EatME.</Text>
      ) : null}
    </OnboardingScreen>
  );
}
