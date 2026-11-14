import { Bike, Dumbbell, Footprints, Sofa, type LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { OnboardingScreen, ROWS_AFTER_MS } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { ACTIVITY_LABELS, ACTIVITY_LEVELS, type ActivityLevel } from '@/shared/onboarding';

const ICONS: Record<ActivityLevel, LucideIcon> = {
  sedentary: Sofa,
  light: Footprints,
  active: Bike,
  very_active: Dumbbell,
};

export default function ActivityStep() {
  const activityLevel = useOnboardingStore((s) => s.answers.activityLevel);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="activity"
      contentEnters={false}
      title="How active are you?"
      subtitle="Workouts and daily movement in a typical week."
      canContinue={!!activityLevel}>
      <View className="gap-3">
        {ACTIVITY_LEVELS.map((value, index) => (
          <OptionRow
            key={value}
            enterIndex={index}
            enterAfter={ROWS_AFTER_MS}
            icon={ICONS[value]}
            title={ACTIVITY_LABELS[value].title}
            description={ACTIVITY_LABELS[value].description}
            selected={activityLevel === value}
            onPress={() => setAnswers({ activityLevel: value })}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}
