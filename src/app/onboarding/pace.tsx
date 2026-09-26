import Slider from '@react-native-community/slider';
import { Info, Rabbit, Turtle, Zap, type LucideIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { DEFAULT_WEEKLY_GOAL_KG, MAX_WEEKLY_GOAL_KG, MIN_WEEKLY_GOAL_KG } from '@/shared/onboarding';
import { kgToLb } from '@/shared/units';

type Speed = 'slow' | 'recommended' | 'fast';

const SPEEDS: { key: Speed; icon: LucideIcon; label: string }[] = [
  { key: 'slow', icon: Turtle, label: 'Slow' },
  { key: 'recommended', icon: Rabbit, label: 'Recommended' },
  { key: 'fast', icon: Zap, label: 'Fast' },
];

const speedFor = (kg: number): Speed => (kg <= 0.3 ? 'slow' : kg <= 0.7 ? 'recommended' : 'fast');

const HINTS: Record<Speed, string> = {
  slow: 'Slow and steady — the easiest pace to stick with.',
  recommended: 'Recommended pace — a good balance of progress and comfort.',
  fast: 'Faster pace — you may feel hungrier. EatME keeps it to 1 kg (2.2 lb) a week at most.',
};

export default function PaceStep() {
  const goal = useOnboardingStore((s) => s.answers.goal) ?? 'lose';
  const unit = useOnboardingStore((s) => s.answers.unitSystem) ?? 'metric';
  const weeklyGoalKg = useOnboardingStore((s) => s.answers.weeklyGoalKg) || DEFAULT_WEEKLY_GOAL_KG;
  const setAnswers = useOnboardingStore((s) => s.setAnswers);

  const metric = unit === 'metric';
  const display = (kg: number) => (metric ? kg.toFixed(1) : kgToLb(kg).toFixed(1));
  const speed = speedFor(weeklyGoalKg);

  return (
    <OnboardingScreen step="pace" title="How fast do you want to reach your goal?" centered>
      <View className="flex-1 items-center">
        <Text className="text-[16px] text-muted">
          {goal === 'gain' ? 'Gain' : 'Lose'} weight speed per week
        </Text>
        <View className="mt-4 flex-row items-end">
          <Text className="text-[64px] font-bold leading-[70px] tracking-tighter text-ink">
            {display(weeklyGoalKg)}
          </Text>
          <Text className="mb-3 ml-2 text-[20px] font-semibold text-ink">{metric ? 'kg' : 'lb'}</Text>
        </View>

        <View className="mt-8 w-full flex-row justify-between px-2">
          {SPEEDS.map(({ key, icon: Icon, label }) => (
            <View
              key={key}
              accessibilityLabel={label}
              className={cn(
                'h-16 w-16 items-center justify-center rounded-2xl',
                speed === key ? 'border-2 border-ink bg-canvas' : 'bg-surface',
              )}>
              <Icon size={28} strokeWidth={1.6} color={speed === key ? colors.ink : colors.muted} />
            </View>
          ))}
        </View>

        <Slider
          accessibilityLabel="Weekly pace"
          style={{ width: '100%', height: 48, marginTop: 20 }}
          minimumValue={MIN_WEEKLY_GOAL_KG}
          maximumValue={MAX_WEEKLY_GOAL_KG}
          step={0.1}
          value={weeklyGoalKg}
          minimumTrackTintColor={colors.ink}
          maximumTrackTintColor={colors.line}
          thumbTintColor={colors.ink}
          onValueChange={(v) => {
            const kg = Math.round(v * 10) / 10;
            if (kg !== weeklyGoalKg) {
              haptics.selection();
              setAnswers({ weeklyGoalKg: kg });
            }
          }}
        />
        <View className="w-full flex-row justify-between">
          <Text className="text-[14px] text-muted">{display(MIN_WEEKLY_GOAL_KG)} {metric ? 'kg' : 'lb'}</Text>
          <Text className="text-[14px] text-muted">{display(DEFAULT_WEEKLY_GOAL_KG)} {metric ? 'kg' : 'lb'}</Text>
          <Text className="text-[14px] text-muted">{display(MAX_WEEKLY_GOAL_KG)} {metric ? 'kg' : 'lb'}</Text>
        </View>

        <View className="mt-6 w-full flex-row items-center gap-3 rounded-2xl bg-surface px-4 py-3.5">
          <Info size={18} color={colors.muted} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">{HINTS[speed]}</Text>
        </View>
      </View>
    </OnboardingScreen>
  );
}
