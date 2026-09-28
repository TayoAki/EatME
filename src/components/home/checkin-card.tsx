import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { TrendingUp, X } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useAnswerCheckIn, useCheckIn, useCheckInSettings } from '@/lib/queries';
import { ApiError } from '@/lib/api';
import type { CheckIn } from '@/shared/adaptive';
import type { UnitSystem } from '@/shared/onboarding';
import { kgToLb } from '@/shared/units';

const kcal = (n: number) => n.toLocaleString('en-US');

/** "−0.4 kg a week" in the person's unit. */
function trendText(kgPerWeek: number, unit: UnitSystem) {
  const value = unit === 'metric' ? kgPerWeek : kgToLb(kgPerWeek);
  const rounded = Math.round(value * 10) / 10;
  return `${rounded > 0 ? '+' : rounded < 0 ? '−' : '±'}${Math.abs(rounded).toFixed(1)} ${unit === 'metric' ? 'kg' : 'lb'} a week`;
}

/** Why the proposal is what it is, when a safety limit shaped it. */
const REASON_NOTES: Partial<Record<CheckIn['reason'], string>> = {
  calorie_floor: 'For safety, EatME keeps your target at this floor or above.',
  bmi_floor: "You're at the lowest weight EatME plans for (a BMI of 18.5), so this target is to stay there. A doctor can guide you below it.",
  goal_reached: "You've reached your goal weight. This target is to stay there; using it switches your goal to maintaining.",
};

/** How the estimate is made, in plain words, with this week's numbers. */
export function HowSheet({ checkIn, unit, onClose }: { checkIn: CheckIn; unit: UnitSystem; onClose: () => void }) {
  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        How this is worked out
      </Text>
      <View className="mt-3 gap-2.5">
        <Text className="text-[15px] leading-[21px] text-ink">
          EatME looks at the last 4 weeks: the days you logged fully (800 kcal or more){checkIn.averageIntake !== null ? `, about ${kcal(checkIn.averageIntake)} kcal a day on average,` : ''} and the line through your weigh-ins
          {checkIn.trendPerWeekKg !== null ? ` (${trendText(checkIn.trendPerWeekKg, unit)})` : ''}.
        </Text>
        <Text className="text-[15px] leading-[21px] text-ink">
          A kilogram of body weight is about 7,700 kcal, so eating the same while your weight goes down means your body
          used more than you ate. Early on, a formula from your age, height, weight and activity counts more; after four
          weeks of logging, your own numbers take over.
        </Text>
        <Text className="text-[15px] leading-[21px] text-ink">
          Your goal&apos;s weekly pace is then added or taken away. The target moves at most 150 kcal a week, never below
          your safety floor, never lower while you&apos;re losing more than 1 kg a week, and never lower in GLP-1 mode.
        </Text>
        <Text className="text-[13px] leading-[18px] text-muted">An estimate from what you logged, not a measurement. It never changes without your tap.</Text>
      </View>
      <Button title="Got it" className="mt-5" onPress={onClose} />
    </BottomSheet>
  );
}

/** This week's proposal, with "Use" and "Keep". Nothing changes until the person taps. */
function ProposalCard({ checkIn, unit }: { checkIn: CheckIn; unit: UnitSystem }) {
  const answer = useAnswerCheckIn();
  const [how, setHow] = useState(false);
  const proposed = checkIn.proposedKcal!;
  const reply = (choice: 'accept' | 'keep') =>
    answer.mutate(choice, {
      onSuccess: () => haptics.success(),
      onError: (error) => {
        if (error instanceof ApiError && error.status === 402) router.push('/premium');
        else notify("We couldn't save your answer", error.message);
      },
    });
  const facts = [
    checkIn.trendPerWeekKg !== null
      ? Math.abs(checkIn.trendPerWeekKg) < 0.05
        ? 'weight steady'
        : `trend ${trendText(checkIn.trendPerWeekKg, unit)}`
      : null,
    checkIn.averageIntake !== null ? `you logged about ${kcal(checkIn.averageIntake)} kcal a day` : null,
    checkIn.estimatedKcal !== null ? `your body used about ${kcal(checkIn.estimatedKcal)} (estimate)` : null,
  ].filter(Boolean);

  return (
    <View className="mx-5 mb-4 rounded-card border border-line bg-canvas p-4">
      <View className="flex-row items-center gap-2">
        <TrendingUp size={18} color={colors.ink} strokeWidth={1.8} />
        <Text className="flex-1 text-[16px] font-bold tracking-tight text-ink">Weekly check-in</Text>
      </View>
      <Text className="mt-2 text-[14px] leading-5 text-muted">This week: {facts.join(' · ')}.</Text>
      <Text className="mt-2 text-[17px] font-semibold text-ink">
        New target: {kcal(checkIn.previousKcal)} → {kcal(proposed)} kcal
      </Text>
      {REASON_NOTES[checkIn.reason] ? <Text className="mt-1 text-[13px] leading-[18px] text-muted">{REASON_NOTES[checkIn.reason]}</Text> : null}
      <View className="mt-3 flex-row gap-2">
        <Button title={`Use ${kcal(proposed)}`} size="md" className="flex-1 px-3" loading={answer.isPending && answer.variables === 'accept'} onPress={() => reply('accept')} />
        <Button title={`Keep ${kcal(checkIn.previousKcal)}`} size="md" variant="secondary" className="flex-1 px-3" loading={answer.isPending && answer.variables === 'keep'} onPress={() => reply('keep')} />
      </View>
      <Pressable accessibilityRole="button" onPress={() => setHow(true)} hitSlop={8} className="mt-3 self-start">
        <Text className="text-[14px] font-semibold text-ink underline">How this is worked out</Text>
      </Pressable>
      {how ? <HowSheet checkIn={checkIn} unit={unit} onClose={() => setHow(false)} /> : null}
    </View>
  );
}

/** Offered once when there is enough history (14 days logged, 4 weigh-ins). */
function OfferCard({ onDismiss }: { onDismiss: () => void }) {
  const settings = useCheckInSettings();
  const turnOn = () =>
    settings.mutate(
      { enabled: true },
      {
        onSuccess: () => {
          haptics.success();
          onDismiss();
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 402) router.push('/premium');
          else notify("We couldn't turn it on", error.message);
        },
      },
    );
  return (
    <View className="mx-5 mb-4 rounded-card bg-surface p-4">
      <View className="flex-row items-start gap-2">
        <TrendingUp size={18} color={colors.ink} strokeWidth={1.8} style={{ marginTop: 2 }} />
        <Text className="flex-1 text-[16px] font-semibold leading-[22px] text-ink">
          Want EatME to fine-tune your target from your real results?
        </Text>
        <Pressable accessibilityRole="button" accessibilityLabel="Not now" hitSlop={10} onPress={onDismiss}>
          <X size={18} color={colors.muted} />
        </Pressable>
      </View>
      <Text className="ml-[26px] mt-1 text-[14px] leading-5 text-muted">
        Once a week, a check-in compares what you logged with your weight trend and suggests a target. You decide.
      </Text>
      <View className="ml-[26px] mt-3 flex-row gap-2">
        <Button title="Turn on" size="md" className="px-5" loading={settings.isPending} onPress={turnOn} />
        <Button title="Not now" size="md" variant="ghost" className="px-3" onPress={onDismiss} />
      </View>
    </View>
  );
}

const offerKey = (userId: string) => `eatme-checkin-offer-${userId}`;

/** Home: this week's check-in, or the one-time offer. Calm mode shows neither. */
export function CheckInArea({ userId, unit, calm }: { userId: string; unit: UnitSystem; calm: boolean }) {
  const state = useCheckIn(!calm);
  const [offerDismissed, setOfferDismissed] = useState<boolean | null>(null);
  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(offerKey(userId))
      .then((value) => active && setOfferDismissed(value === 'dismissed'))
      .catch(() => active && setOfferDismissed(false));
    return () => {
      active = false;
    };
  }, [userId]);

  if (calm || !state.data) return null;
  const { enabled, premium, eligible, checkIn } = state.data;
  if (!enabled) {
    if (!eligible || offerDismissed !== false) return null;
    return (
      <OfferCard
        onDismiss={() => {
          setOfferDismissed(true);
          void AsyncStorage.setItem(offerKey(userId), 'dismissed').catch(() => undefined);
        }}
      />
    );
  }
  if (!premium || !checkIn || checkIn.status !== 'proposed' || checkIn.proposedKcal === null) return null;
  return <ProposalCard checkIn={checkIn} unit={unit} />;
}
