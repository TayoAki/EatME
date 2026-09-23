import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, type ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { nextStepHref, stepProgress, stepsFor, type OnboardingStep } from '@/lib/onboarding-steps';

type OnboardingScreenProps = {
  step: OnboardingStep;
  title: string;
  subtitle?: string;
  /** Centered title/content for the "big number" questions. */
  centered?: boolean;
  canContinue?: boolean;
  /** Runs before navigating to the next step (e.g. to normalize answers). */
  onContinue?: () => void;
  scrollable?: boolean;
  children: ReactNode;
};

export function OnboardingScreen({
  step,
  title,
  subtitle,
  centered = false,
  canContinue = true,
  onContinue,
  scrollable = false,
  children,
}: OnboardingScreenProps) {
  const goal = useOnboardingStore((s) => s.answers.goal);
  const progress = stepProgress(step, goal);
  const previous = Math.max(0, progress - 1 / (stepsFor(goal).length + 1));

  const width = useSharedValue(previous);
  useEffect(() => {
    width.value = withTiming(progress, { duration: 450 });
  }, [progress, width]);
  const barStyle = useAnimatedStyle(() => ({ width: `${width.value * 100}%` }));

  return (
    <Screen>
      <View className="h-14 flex-row items-center gap-4 px-5">
        <IconButton
          accessibilityLabel="Go back"
          icon={<ArrowLeft size={20} color={colors.ink} strokeWidth={2} />}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/welcome'))}
        />
        <View
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: Math.round(progress * 100) }}
          className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
          <Animated.View style={barStyle} className="h-full rounded-full bg-ink" />
        </View>
      </View>

      <View className={cn('px-6 pt-6', centered && 'items-center')}>
        <Text
          accessibilityRole="header"
          className={cn(
            'text-[32px] font-bold leading-[38px] tracking-tight text-ink',
            centered && 'text-center',
          )}>
          {title}
        </Text>
        {subtitle ? (
          <Text className={cn('mt-2 text-[16px] leading-[22px] text-muted', centered && 'text-center')}>
            {subtitle}
          </Text>
        ) : null}
      </View>

      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName="px-6 pb-6 pt-8"
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      ) : (
        <View className="flex-1 px-6 pt-8">{children}</View>
      )}

      <View className="px-6 pt-3">
        <Button
          title="Continue"
          disabled={!canContinue}
          onPress={() => {
            onContinue?.();
            router.push(nextStepHref(step, goal));
          }}
        />
      </View>
    </Screen>
  );
}
