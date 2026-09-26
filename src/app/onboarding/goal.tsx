import { Text, View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { OptionRow } from '@/components/ui/option-row';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { canLoseWeight, DEFAULT_WEEKLY_GOAL_KG, GOAL_LABELS, GOALS, lowestGoalWeightKg, type Goal } from '@/shared/onboarding';

export default function GoalStep() {
  const goal = useOnboardingStore((s) => s.answers.goal);
  const weightKg = useOnboardingStore((s) => s.answers.weightKg) ?? 70;
  const heightCm = useOnboardingStore((s) => s.answers.heightCm) ?? 175;
  // No weight-loss goal below a BMI of 18.5: at (or close to) that weight, "Lose weight" is off.
  const canLose = canLoseWeight(weightKg, heightCm);
  const targetWeightKg = useOnboardingStore((s) => s.answers.targetWeightKg);
  const weeklyGoalKg = useOnboardingStore((s) => s.answers.weeklyGoalKg);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  const select = (value: Goal) => {
    // Keep the desired weight on the right side of the current weight for the chosen goal.
    const lowest = lowestGoalWeightKg(heightCm);
    const targetIsValid =
      targetWeightKg !== undefined &&
      ((value === 'lose' && targetWeightKg < weightKg && targetWeightKg >= lowest) ||
        (value === 'gain' && targetWeightKg > weightKg));
    const defaultTarget = value === 'lose' ? Math.max(weightKg - 5, lowest) : value === 'gain' ? weightKg + 5 : weightKg;
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
      canContinue={!!goal && (goal !== 'lose' || canLose)}>
      <View className="gap-3">
        {GOALS.map((value) => (
          <OptionRow
            key={value}
            centered
            title={GOAL_LABELS[value]}
            selected={goal === value && (value !== 'lose' || canLose)}
            disabled={value === 'lose' && !canLose}
            onPress={() => select(value)}
          />
        ))}
        {canLose ? null : (
          <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
            Your weight is already at the low end of the healthy range for your height, so EatME doesn&apos;t set
            weight-loss goals. Maintaining or gaining works.
          </Text>
        )}
      </View>
    </OnboardingScreen>
  );
}
