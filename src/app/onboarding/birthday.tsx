import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { DateWheels } from '@/components/pickers/date-wheels';
import { useOnboardingStore } from '@/lib/onboarding-store';

export default function BirthdayStep() {
  const dateOfBirth = useOnboardingStore((s) => s.answers.dateOfBirth) ?? '2000-01-01';
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="birthday"
      title="When were you born?"
      subtitle="This will be used to calibrate your custom plan.">
      <DateWheels value={dateOfBirth} onChange={(value) => setAnswers({ dateOfBirth: value })} />
    </OnboardingScreen>
  );
}
