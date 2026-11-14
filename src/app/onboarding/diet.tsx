import { Fish, Leaf, Sandwich, Sprout, type LucideIcon } from 'lucide-react-native';
import { View } from 'react-native';

import { OnboardingScreen, ROWS_AFTER_MS } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { DIET_LABELS, DIETS, type Diet } from '@/shared/onboarding';

const ICONS: Record<Diet, LucideIcon> = {
  classic: Sandwich,
  pescatarian: Fish,
  vegetarian: Leaf,
  vegan: Sprout,
};

export default function DietStep() {
  const diet = useOnboardingStore((s) => s.answers.diet);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  return (
    <OnboardingScreen
      step="diet"
      contentEnters={false}
      title="Do you follow a specific diet?"
      subtitle="We'll balance your macros around it."
      canContinue={!!diet}>
      <View className="gap-3">
        {DIETS.map((value, index) => (
          <OptionRow
            key={value}
            enterIndex={index}
            enterAfter={ROWS_AFTER_MS}
            icon={ICONS[value]}
            title={DIET_LABELS[value]}
            selected={diet === value}
            onPress={() => setAnswers({ diet: value })}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}
