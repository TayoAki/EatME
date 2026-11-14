import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useRef, type ReactNode } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Rise } from '@/components/ui/motion';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { useOnboardingStore } from '@/lib/onboarding-store';
import { nextStepHref, stepProgress, stepsFor, type OnboardingStep } from '@/lib/onboarding-steps';

/** The title starts rising while the screen slides in; the rest follows it, 100 ms apart. */
export const ENTER_AFTER_MS = 80;
/** Where a screen's own rows start their stagger (after the title and subtitle). */
export const ROWS_AFTER_MS = ENTER_AFTER_MS + 200;

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
  /** False when the screen's rows rise one by one themselves (`OptionRow`'s `enterIndex`). */
  contentEnters?: boolean;
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
  contentEnters = true,
  children,
}: OnboardingScreenProps) {
  const reduceMotion = useReducedMotion();
  const goal = useOnboardingStore((s) => s.answers.goal);
  const progress = stepProgress(step, goal);
  const previous = Math.max(0, progress - 1 / (stepsFor(goal).length + 1));

  const width = useSharedValue(previous);
  useEffect(() => {
    width.value = withTiming(progress, { duration: 600, easing: Easing.out(Easing.cubic) });
  }, [progress, width]);
  const barStyle = useAnimatedStyle(() => ({ width: `${width.value * 100}%` }));

  // Continue pops once when the screen's question gets its first answer.
  const buttonScale = useSharedValue(1);
  const couldContinue = useRef(canContinue);
  useEffect(() => {
    if (canContinue && !couldContinue.current && !reduceMotion) {
      buttonScale.value = withSequence(
        withTiming(1.04, { duration: 120 }),
        withSpring(1, { damping: 12, stiffness: 240 }),
      );
    }
    couldContinue.current = canContinue;
  }, [canContinue, reduceMotion, buttonScale]);
  const buttonStyle = useAnimatedStyle(() => ({ transform: [{ scale: buttonScale.value }] }));

  const content = contentEnters ? (
    <Rise index={2} after={ENTER_AFTER_MS} style={{ flex: scrollable ? undefined : 1 }}>
      {children}
    </Rise>
  ) : (
    children
  );

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
          <Animated.View style={[{ height: '100%', borderRadius: 999, backgroundColor: colors.ink }, barStyle]} />
        </View>
      </View>

      <View className={cn('px-6 pt-6', centered && 'items-center')}>
        <Rise index={0} after={ENTER_AFTER_MS}>
          <Text
            accessibilityRole="header"
            className={cn('text-[32px] font-bold leading-[38px] tracking-tight text-ink', centered && 'text-center')}>
            {title}
          </Text>
        </Rise>
        {subtitle ? (
          <Rise index={1} after={ENTER_AFTER_MS}>
            <Text className={cn('mt-2 text-[16px] leading-[22px] text-muted', centered && 'text-center')}>
              {subtitle}
            </Text>
          </Rise>
        ) : null}
      </View>

      {scrollable ? (
        <ScrollView className="flex-1" contentContainerClassName="px-6 pb-6 pt-8" showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        <View className="flex-1 px-6 pt-8">{content}</View>
      )}

      <Animated.View style={[{ paddingHorizontal: 24, paddingTop: 12 }, buttonStyle]}>
        <Button
          title="Continue"
          disabled={!canContinue}
          onPress={() => {
            onContinue?.();
            router.push(nextStepHref(step, goal));
          }}
        />
      </Animated.View>
    </Screen>
  );
}
