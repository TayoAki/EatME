import { View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { DEFAULT_WEEKLY_GOAL_KG, GOAL_LABELS, GOALS, type Goal } from '@/shared/onboarding';

export default function GoalStep() {
  const goal = useOnboardingStore((s) => s.answers.goal);
  const weightKg = useOnboardingStore((s) => s.answers.weightKg) ?? 70;
  const targetWeightKg = useOnboardingStore((s) => s.answers.targetWeightKg);
  const weeklyGoalKg = useOnboardingStore((s) => s.answers.weeklyGoalKg);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  const select = (value: Goal) => {
    // Keep the desired weight on the right side of the current weight for the chosen goal.
    const targetIsValid =
      targetWeightKg !== undefined &&
      ((value === 'lose' && targetWeightKg < weightKg) || (value === 'gain' && targetWeightKg > weightKg));
    const defaultTarget = value === 'lose' ? weightKg - 5 : value === 'gain' ? weightKg + 5 : weightKg;
    setAnswers({
      goal: value,
      targetWeightKg: value === 'maintain' ? weightKg : targetIsValid ? targetWeightKg : defaultTarget,
      weeklyGoalKg: value === 'maintain' ? 0 : weeklyGoalKg || DEFAULT_WEEKLY_GOAL_KG,
    });
  };

  return (
    <OnboardingScreen
      step="goal"
      title="What is your goal?"
      subtitle="This helps us generate a plan for your calorie intake."
      canContinue={!!goal}>
      <View className="gap-3">
        {GOALS.map((value) => (
          <OptionRow
            key={value}
            centered
            title={GOAL_LABELS[value]}
            selected={goal === value}
            onPress={() => select(value)}
          />
        ))}
      </View>
    </OnboardingScreen>
  );
}
