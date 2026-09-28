import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Switch, Text, View } from 'react-native';

import { HowSheet } from '@/components/home/checkin-card';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useCheckIn, useCheckInSettings } from '@/lib/queries';
import { fromIsoDate } from '@/lib/time';
import { MISSING_DATA, type CheckIn } from '@/shared/adaptive';
import type { Profile } from '@/shared/user';

const WEEKDAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
const SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const kcal = (n: number) => n.toLocaleString('en-US');
const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

const MISSING_TEXT: Record<string, string> = {
  not_enough_logging: 'For a check-in, log at least 5 of the last 7 days (and 10 in the last 4 weeks), and weigh in twice a week.',
  not_enough_weights: 'For a check-in, weigh in at least twice a week: 4 weigh-ins over 10 days or more.',
};

function answerText(checkIn: CheckIn, calm: boolean) {
  const outcome = checkIn.status === 'accepted' ? 'Used' : checkIn.status === 'kept' ? 'Kept' : 'Waiting on Home';
  if (calm || checkIn.proposedKcal === null) return `${shortDate(checkIn.weekStart)} · ${checkIn.status === 'accepted' ? 'Target updated' : outcome}`;
  return `${shortDate(checkIn.weekStart)} · ${kcal(checkIn.previousKcal)} → ${kcal(checkIn.proposedKcal)} kcal · ${outcome}`;
}

/** Daily goals → "Adjust my calorie target each week" (Premium), its day and the check-ins so far. */
export function AdaptiveTargetSection({ profile }: { profile: Profile }) {
  const state = useCheckIn();
  const settings = useCheckInSettings();
  const [how, setHow] = useState<CheckIn | null>(null);
  const calm = !!profile.preferences.calmMode;
  const data = state.data;
  const enabled = data?.enabled ?? !!profile.preferences.adaptiveTarget;
  const weekday = data?.weekday ?? profile.preferences.checkInWeekday ?? 1;
  const checkIn = data?.checkIn ?? null;
  const answered = [...(checkIn?.id && checkIn.proposedKcal !== null ? [checkIn] : []), ...(data?.history ?? [])];

  const change = (body: { enabled: boolean; weekday?: number }) =>
    settings.mutate(body, {
      onSuccess: () => haptics.selection(),
      onError: (error) => {
        if (error instanceof ApiError && error.status === 402) router.push('/premium');
        else notify("We couldn't save it", error.message);
      },
    });

  return (
    <View>
      <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Adjusting target</Text>
      <View className="overflow-hidden rounded-[20px] border border-line">
        <View className="min-h-[64px] flex-row items-center gap-3 px-4 py-3">
          <View className="flex-1">
            <Text className="text-[16px] text-ink">Adjust my calorie target each week</Text>
            <Text className="text-[13px] text-muted">
              {enabled ? `Check-in on ${WEEKDAYS[weekday]}` : data && !data.premium ? 'Premium' : 'Off'}
            </Text>
          </View>
          {settings.isPending ? (
            <ActivityIndicator color={colors.ink} />
          ) : (
            <Switch
              accessibilityLabel="Adjust my calorie target each week"
              value={enabled}
              onValueChange={(on) => change({ enabled: on })}
              trackColor={{ true: colors.ink, false: colors.line }}
              thumbColor={colors.canvas}
              ios_backgroundColor={colors.line}
            />
          )}
        </View>
        {enabled ? (
          <View className="border-t border-line px-4 py-3">
            <Text className="mb-2 text-[14px] text-muted">Check-in day</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
              {[1, 2, 3, 4, 5, 6, 0].map((day) => (
                <Chip key={day} label={SHORT[day]} selected={weekday === day} onPress={() => day !== weekday && change({ enabled: true, weekday: day })} className="h-9 px-3" />
              ))}
            </ScrollView>
          </View>
        ) : null}
      </View>
      <Text className="mt-2 px-1 text-[13px] leading-[18px] text-muted">
        {calm
          ? 'Once a week EatME compares what you logged with your weight trend and suggests a target. Nothing changes unless you choose it.'
          : 'Once a week EatME compares what you logged with your weight trend and suggests a target, at most 150 kcal from the one you have and never below your safety floor. Nothing changes unless you choose it.'}
      </Text>
      {enabled && checkIn && MISSING_DATA.includes(checkIn.reason) ? (
        <View className="mt-3 rounded-2xl bg-surface p-3">
          <Text className="text-[14px] leading-5 text-ink">{MISSING_TEXT[checkIn.reason]}</Text>
        </View>
      ) : null}
      {answered.length > 0 ? (
        <View className="mt-3 overflow-hidden rounded-[20px] border border-line">
          {answered.map((row, index) => (
            <Pressable
              key={row.id ?? row.weekStart}
              accessibilityRole="button"
              accessibilityLabel={`${answerText(row, calm)}. How this is worked out`}
              onPress={() => !calm && setHow(row)}
              className={`min-h-[48px] justify-center px-4 py-2 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
              <Text className="text-[14px] text-ink">{answerText(row, calm)}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
      {how ? <HowSheet checkIn={how} unit={profile.unitSystem} onClose={() => setHow(null)} /> : null}
    </View>
  );
}
