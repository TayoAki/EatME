import { Redirect, router } from 'expo-router';
import { Check, ClipboardList, Scale, Sparkles, Stethoscope, Target, type LucideIcon } from 'lucide-react-native';
import { useEffect, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withTiming,
  ZoomIn,
  type SharedValue,
} from 'react-native-reanimated';

import { PricingNote } from '@/components/onboarding/pricing-note';
import { openSources, SourcesScreenLink } from '@/components/sources';
import { Button } from '@/components/ui/button';
import { Rise, useCountUp } from '@/components/ui/motion';
import { ProgressRing } from '@/components/ui/progress-ring';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/lib/auth-client';
import { OBSTACLE_INFO, type ObstacleFlags } from '@/lib/onboarding-obstacles';
import { completeAnswers, useOnboardingStore } from '@/lib/onboarding-store';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';
import { useFeatures } from '@/lib/queries';
import { formatLongDate } from '@/lib/time';
import { goalDate } from '@/shared/nutrition';
import { formatWeight, kgToLb } from '@/shared/units';

const TIPS: { icon: LucideIcon; text: string }[] = [
  { icon: ClipboardList, text: 'Track your food every day' },
  { icon: Target, text: 'Follow your daily calorie target' },
  { icon: Scale, text: 'Balance your carbs, protein and fat' },
];

/** The burst around the check: the colors of the rings below. */
const BURST_COLORS = [colors.protein, colors.carbs, colors.fat, colors.fiber, colors.water, colors.flame];
const BURST_DOTS = 14;
/** When the numbers start counting, after the card has risen in. */
const COUNT_AFTER_MS = 650;

function BurstDot({ index, progress }: { index: number; progress: SharedValue<number> }) {
  const angle = (index / BURST_DOTS) * 2 * Math.PI + (index % 2 ? 0.2 : 0);
  const distance = index % 2 ? 44 : 58;
  const size = index % 3 === 0 ? 7 : 5;
  const style = useAnimatedStyle(() => {
    const p = progress.value;
    return {
      opacity: p === 0 ? 0 : 1 - p * p,
      transform: [
        { translateX: Math.cos(angle) * distance * p },
        { translateY: Math.sin(angle) * distance * p },
        { scale: 1 - 0.4 * p },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          left: 24 - size / 2,
          top: 24 - size / 2,
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: BURST_COLORS[index % BURST_COLORS.length],
        },
        style,
      ]}
    />
  );
}

/** The check that pops in, with a small burst of the macro colors around it. */
function ReadyBadge() {
  const reduceMotion = useReducedMotion();
  const burst = useSharedValue(0);
  useEffect(() => {
    if (reduceMotion) return;
    burst.value = withDelay(220, withTiming(1, { duration: 900, easing: Easing.out(Easing.cubic) }));
  }, [reduceMotion, burst]);
  return (
    <View style={{ width: 48, height: 48 }}>
      {reduceMotion
        ? null
        : Array.from({ length: BURST_DOTS }, (_, i) => <BurstDot key={i} index={i} progress={burst} />)}
      <Animated.View
        entering={ZoomIn.springify().damping(10).stiffness(200)}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.ink,
        }}>
        <Check size={26} color={colors.canvas} strokeWidth={3} />
      </Animated.View>
    </View>
  );
}

type TargetCardProps = { label: string; value: number; unit?: string; color: string; index: number };

function TargetCard({ label, value, unit, color, index }: TargetCardProps) {
  const shown = useCountUp(value, { duration: 900, delay: COUNT_AFTER_MS + index * 90 });
  return (
    <View
      className="flex-1 items-center rounded-[20px] border border-line bg-canvas py-4"
      accessible
      accessibilityLabel={`${label}: ${value.toLocaleString()}${unit ? ` ${unit === 'g' ? 'grams' : unit}` : ' kcal'}`}>
      <Text className="mb-3 text-[15px] font-medium text-ink">{label}</Text>
      <ProgressRing progress={0.78} size={92} strokeWidth={7} color={color}>
        <Text className="text-[20px] font-bold tracking-tight text-ink" style={{ fontVariant: ['tabular-nums'] }}>
          {Math.round(shown).toLocaleString()}
          {unit ? <Text className="text-[15px] font-semibold">{unit}</Text> : null}
        </Text>
      </ProgressRing>
    </View>
  );
}

export default function PlanReadyScreen() {
  const plan = useOnboardingStore((s) => s.plan);
  const rawAnswers = useOnboardingStore((s) => s.answers);
  const obstacles = useOnboardingStore((s) => s.obstacles);
  const markPendingSave = useOnboardingStore((s) => s.markPendingSave);
  const { isSignedIn } = useSession();
  const features = useFeatures();
  const answers = useMemo(() => completeAnswers(rawAnswers), [rawAnswers]);

  const difference = answers ? Math.abs(answers.targetWeightKg - answers.weightKg) : 0;
  const differenceShown = useCountUp(answers?.unitSystem === 'imperial' ? kgToLb(difference) : difference, {
    duration: 800,
    delay: 450,
  });

  if (!plan || !answers) return <Redirect href={FIRST_STEP_HREF} />;

  const reachBy = goalDate(answers);
  const flags: ObstacleFlags = { payments: !!features.data?.payments, whatToOrder: !!features.data?.whatToOrder };
  // Pounds come from whole-pound pickers; kilograms can be halves.
  const decimals = answers.unitSystem === 'imperial' || difference % 1 === 0 ? 0 : 1;
  const unitLabel = answers.unitSystem === 'imperial' ? 'lb' : 'kg';

  const onContinue = () => {
    markPendingSave();
    // Signed-in users (who skipped onboarding before) are saved by the root layout right away.
    if (!isSignedIn) router.push({ pathname: '/sign-in', params: { mode: 'signup' } });
  };

  return (
    <Screen>
      <ScrollView className="flex-1" contentContainerClassName="px-6 pb-8 pt-6" showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <ReadyBadge />
          <Rise index={1}>
            <Text
              accessibilityRole="header"
              className="mt-4 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
              Congratulations,{'\n'}your custom plan is ready!
            </Text>
          </Rise>

          {answers.goal === 'maintain' ? (
            <Rise index={2}>
              <Text className="mt-4 text-center text-[16px] text-muted">
                Keep your weight at {formatWeight(answers.weightKg, answers.unitSystem, 0)}
              </Text>
            </Rise>
          ) : (
            <Rise index={2} style={{ alignItems: 'center' }}>
              <Text className="mt-4 text-[16px] text-muted">
                Your goal is to {answers.goal === 'gain' ? 'gain' : 'lose'}:
              </Text>
              <View
                className="mt-2 rounded-full bg-surface px-4 py-2"
                accessible
                accessibilityLabel={`${formatWeight(difference, answers.unitSystem, decimals)}${reachBy ? ` by ${formatLongDate(reachBy)}` : ''}`}>
                <Text className="text-[17px] font-semibold text-ink" style={{ fontVariant: ['tabular-nums'] }}>
                  {`${differenceShown.toFixed(decimals)} ${unitLabel}`}
                  {reachBy ? ` by ${formatLongDate(reachBy)}` : ''}
                </Text>
              </View>
            </Rise>
          )}
        </View>

        <Rise index={3} style={{ marginTop: 28 }}>
          <View className="rounded-card border border-line p-4">
            <Text className="text-[18px] font-semibold text-ink">Daily recommendation</Text>
            <Text className="mt-0.5 text-[14px] text-muted">
              {plan.source === 'ai'
                ? 'Estimated by AI from your answers, checked against the Mifflin-St Jeor formula'
                : 'Estimated with the Mifflin-St Jeor formula'}
            </Text>
            <SourcesScreenLink topic="calories" className="mb-3" />
            <View className="gap-3">
              <View className="flex-row gap-3">
                <TargetCard label="Calories" value={plan.calories} color={colors.ink} index={0} />
                <TargetCard label="Carbs" value={plan.carbsG} unit="g" color={colors.carbs} index={1} />
              </View>
              <View className="flex-row gap-3">
                <TargetCard label="Protein" value={plan.proteinG} unit="g" color={colors.protein} index={2} />
                <TargetCard label="Fats" value={plan.fatG} unit="g" color={colors.fat} index={3} />
              </View>
            </View>
            {plan.summary ? (
              <View className="mt-4 flex-row gap-3 rounded-2xl bg-surface p-3.5">
                <Sparkles size={18} color={colors.ink} />
                <Text className="flex-1 text-[14px] leading-5 text-ink">{plan.summary}</Text>
              </View>
            ) : null}
          </View>
        </Rise>

        {obstacles.length > 0 ? (
          <>
            <Rise index={4}>
              <Text className="mb-3 mt-7 text-[18px] font-semibold text-ink">Built for what got in your way</Text>
            </Rise>
            <View className="gap-2">
              {obstacles.map((obstacle, i) => {
                const { icon: Icon, title, help } = OBSTACLE_INFO[obstacle];
                return (
                  <Rise key={obstacle} index={5 + i}>
                    <View className="flex-row gap-3 rounded-2xl bg-surface px-4 py-3.5">
                      <Icon size={20} color={colors.ink} strokeWidth={1.7} style={{ marginTop: 1 }} />
                      <View className="flex-1">
                        <Text className="text-[13px] text-muted">{title}</Text>
                        <Text className="mt-0.5 text-[15px] leading-[21px] text-ink">{help(flags)}</Text>
                      </View>
                    </View>
                  </Rise>
                );
              })}
            </View>
          </>
        ) : (
          <>
            <Rise index={4}>
              <Text className="mb-3 mt-7 text-[18px] font-semibold text-ink">How to reach your goals</Text>
            </Rise>
            <View className="gap-2">
              {TIPS.map(({ icon: Icon, text }, i) => (
                <Rise key={text} index={5 + i}>
                  <View className="flex-row items-center gap-3 rounded-2xl bg-surface px-4 py-3.5">
                    <Icon size={20} color={colors.ink} strokeWidth={1.7} />
                    <Text className="text-[15px] text-ink">{text}</Text>
                  </View>
                </Rise>
              ))}
            </View>
          </>
        )}

        {/* General estimate, not medical advice (Apple 1.4.1). */}
        <View className="mt-5 flex-row gap-3 rounded-2xl border border-line p-3.5">
          <Stethoscope size={18} color={colors.ink} strokeWidth={1.8} style={{ marginTop: 1 }} />
          <View className="flex-1">
            <Text className="text-[14px] leading-5 text-ink">
              This plan is a general estimate, not medical advice. Check with a doctor before big changes to how you
              eat, especially if you&apos;re pregnant or breastfeeding, have a health condition such as diabetes, take
              medicine such as a GLP-1, or have had an eating disorder.
            </Text>
            <Text
              accessibilityRole="link"
              className="mt-2 text-[14px] font-semibold text-ink underline"
              onPress={() => openSources('calories')}>
              Sources: how Weight Class works out your numbers
            </Text>
          </View>
        </View>

        <PricingNote />
      </ScrollView>

      <Rise
        index={3}
        after={300}
        style={{ borderTopWidth: 1, borderTopColor: colors.line, paddingHorizontal: 24, paddingTop: 12 }}>
        <Button title="Let's get started" onPress={onContinue} />
      </Rise>
    </Screen>
  );
}
