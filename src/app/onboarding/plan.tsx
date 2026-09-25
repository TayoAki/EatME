import { Redirect, router } from 'expo-router';
import { Check, ClipboardList, Scale, Sparkles, Target, type LucideIcon } from 'lucide-react-native';
import { useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { PricingNote } from '@/components/onboarding/pricing-note';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/ui/progress-ring';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/lib/auth-client';
import { completeAnswers, useOnboardingStore } from '@/lib/onboarding-store';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';
import { formatLongDate } from '@/lib/time';
import { goalDate } from '@/shared/nutrition';
import { formatWeight } from '@/shared/units';

const TIPS: { icon: LucideIcon; text: string }[] = [
  { icon: ClipboardList, text: 'Track your food every day' },
  { icon: Target, text: 'Follow your daily calorie target' },
  { icon: Scale, text: 'Balance your carbs, protein and fat' },
];

function TargetCard({ label, value, unit, color }: { label: string; value: number; unit?: string; color: string }) {
  return (
    <View className="flex-1 items-center rounded-[20px] border border-line bg-canvas py-4">
      <Text className="mb-3 text-[15px] font-medium text-ink">{label}</Text>
      <ProgressRing progress={0.78} size={92} strokeWidth={7} color={color}>
        <Text className="text-[20px] font-bold tracking-tight text-ink">
          {value.toLocaleString()}
          {unit ? <Text className="text-[15px] font-semibold">{unit}</Text> : null}
        </Text>
      </ProgressRing>
    </View>
  );
}

export default function PlanReadyScreen() {
  const plan = useOnboardingStore((s) => s.plan);
  const rawAnswers = useOnboardingStore((s) => s.answers);
  const markPendingSave = useOnboardingStore((s) => s.markPendingSave);
  const { isSignedIn } = useSession();
  const answers = useMemo(() => completeAnswers(rawAnswers), [rawAnswers]);

  if (!plan || !answers) return <Redirect href={FIRST_STEP_HREF} />;

  const reachBy = goalDate(answers);
  const difference = Math.abs(answers.targetWeightKg - answers.weightKg);

  const onContinue = () => {
    markPendingSave();
    // Signed-in users (who skipped onboarding before) are saved by the root layout right away.
    if (!isSignedIn) router.push({ pathname: '/sign-in', params: { mode: 'signup' } });
  };

  return (
    <Screen>
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pb-8 pt-6"
        showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <View className="h-12 w-12 items-center justify-center rounded-full bg-ink">
            <Check size={26} color={colors.canvas} strokeWidth={3} />
          </View>
          <Text
            accessibilityRole="header"
            className="mt-4 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
            Congratulations,{'\n'}your custom plan is ready!
          </Text>

          {answers.goal === 'maintain' ? (
            <Text className="mt-4 text-center text-[16px] text-muted">
              Keep your weight at {formatWeight(answers.weightKg, answers.unitSystem, 0)}
            </Text>
          ) : (
            <>
              <Text className="mt-4 text-[16px] text-muted">
                You should {answers.goal === 'gain' ? 'gain' : 'lose'}:
              </Text>
              <View className="mt-2 rounded-full bg-surface px-4 py-2">
                <Text className="text-[17px] font-semibold text-ink">
                  {formatWeight(difference, answers.unitSystem, difference % 1 === 0 ? 0 : 1)}
                  {reachBy ? ` by ${formatLongDate(reachBy)}` : ''}
                </Text>
              </View>
            </>
          )}
        </View>

        <View className="mt-7 rounded-card border border-line p-4">
          <Text className="text-[18px] font-semibold text-ink">Daily recommendation</Text>
          <Text className="mb-4 mt-0.5 text-[14px] text-muted">
            {plan.source === 'ai'
              ? 'Calculated by AI from your answers'
              : 'Calculated with the Mifflin-St Jeor formula'}
          </Text>
          <View className="gap-3">
            <View className="flex-row gap-3">
              <TargetCard label="Calories" value={plan.calories} color={colors.ink} />
              <TargetCard label="Carbs" value={plan.carbsG} unit="g" color={colors.carbs} />
            </View>
            <View className="flex-row gap-3">
              <TargetCard label="Protein" value={plan.proteinG} unit="g" color={colors.protein} />
              <TargetCard label="Fats" value={plan.fatG} unit="g" color={colors.fat} />
            </View>
          </View>
          {plan.summary ? (
            <View className="mt-4 flex-row gap-3 rounded-2xl bg-surface p-3.5">
              <Sparkles size={18} color={colors.ink} />
              <Text className="flex-1 text-[14px] leading-5 text-ink">{plan.summary}</Text>
            </View>
          ) : null}
        </View>

        <Text className="mb-3 mt-7 text-[18px] font-semibold text-ink">How to reach your goals</Text>
        <View className="gap-2">
          {TIPS.map(({ icon: Icon, text }) => (
            <View key={text} className="flex-row items-center gap-3 rounded-2xl bg-surface px-4 py-3.5">
              <Icon size={20} color={colors.ink} strokeWidth={1.7} />
              <Text className="text-[15px] text-ink">{text}</Text>
            </View>
          ))}
        </View>

        <PricingNote />
      </ScrollView>

      <View className="border-t border-line px-6 pt-3">
        <Button title="Let's get started" onPress={onContinue} />
      </View>
    </Screen>
  );
}
