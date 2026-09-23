import { Text, View } from 'react-native';

import { OnboardingScreen } from '@/components/onboarding/onboarding-screen';
import { RulerPicker } from '@/components/ui/ruler-picker';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { GOAL_LABELS } from '@/shared/onboarding';
import { kgToLb, lbToKg } from '@/shared/units';

const round1 = (n: number) => Math.round(n * 10) / 10;

export default function DesiredWeightStep() {
  const answers = useOnboardingStore((s) => s.answers);
  const setAnswers = useOnboardingStore((s) => s.setAnswers);
  const goal = answers.goal ?? 'lose';
  const weightKg = answers.weightKg ?? 70;
  const unit = answers.unitSystem ?? 'metric';
  const targetKg = answers.targetWeightKg ?? weightKg;

  const metric = unit === 'metric';
  const current = metric ? weightKg : kgToLb(weightKg);
  const step = metric ? 0.5 : 1;
  // Only weights on the right side of the current weight can be picked.
  const min = goal === 'gain' ? Math.ceil((current + step) / step) * step : metric ? 35 : 80;
  const max = goal === 'lose' ? Math.floor((current - step) / step) * step : metric ? 250 : 550;
  const value = Math.min(max, Math.max(min, metric ? targetKg : Math.round(kgToLb(targetKg))));

  return (
    <OnboardingScreen step="desired-weight" title="What's your desired weight?" centered>
      <View className="flex-1 items-center">
        <Text className="text-[16px] text-muted">{GOAL_LABELS[goal]}</Text>
        <View className="mb-8 mt-6 flex-row items-end">
          <Text className="text-[64px] font-bold leading-[70px] tracking-tighter text-ink">
            {metric ? value.toFixed(1) : Math.round(value)}
          </Text>
          <Text className="mb-3 ml-2 text-[20px] font-semibold text-ink">{metric ? 'kg' : 'lb'}</Text>
        </View>
        <RulerPicker
          key={`${unit}-${goal}`}
          min={min}
          max={max}
          step={step}
          value={value}
          majorStep={metric ? 5 : 10}
          onChange={(v) => setAnswers({ targetWeightKg: metric ? v : round1(lbToKg(v)) })}
        />
      </View>
    </OnboardingScreen>
  );
}
