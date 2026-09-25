import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { ArrowLeft, Bell, ChevronRight, Flag, Plus } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { WeightChart } from '@/components/weight/weight-chart';
import { WeightSheet } from '@/components/weight/weight-sheet';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDeleteWeight, useLogWeight, useProfile, useWeights } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { useReminderStore } from '@/lib/reminder-store';
import { addDays, formatDay, fromIsoDate, toIsoDate } from '@/lib/time';
import type { Goal } from '@/shared/onboarding';
import { formatWeight, kgToLb } from '@/shared/units';
import {
  FAST_LOSS_KG_PER_WEEK,
  goalProgress,
  reachedMilestone,
  trendPerWeek,
  weightMilestones,
  weightTrend,
  WEIGHT_RANGES,
  type WeightEntry,
  type WeightRange,
} from '@/shared/weight';

const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const WEEKDAY_NAMES = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

/**
 * A milestone the trend just crossed, shown once (this phone remembers the furthest one shown).
 * Plain facts only: no praise around weight (PLAN.md §4).
 */
function useNewMilestone(userId: string | undefined, reached: number | null, goal: Goal | null) {
  const [milestone, setMilestone] = useState<number | null>(null);
  useEffect(() => {
    if (!userId || reached === null) return;
    const key = `eatme-weight-milestone-${userId}`;
    let active = true;
    void (async () => {
      const stored = await AsyncStorage.getItem(key).catch(() => null);
      const last = stored === null ? null : Number(stored);
      const isNew = last === null || !Number.isFinite(last) || (goal === 'lose' ? reached < last : reached > last);
      if (!isNew || !active) return;
      setMilestone(reached);
      await AsyncStorage.setItem(key, String(reached)).catch(() => undefined);
    })();
    return () => {
      active = false;
    };
  }, [userId, reached, goal]);
  return [milestone, () => setMilestone(null)] as const;
}

export default function WeightScreen() {
  const profile = useProfile();
  const weights = useWeights();
  const log = useLogWeight();
  const remove = useDeleteWeight();
  const [range, setRange] = useState<WeightRange>('90');
  const [logging, setLogging] = useState(false);

  const unit = profile?.unitSystem ?? 'metric';
  const shown = (kg: number) => (unit === 'metric' ? kg : kgToLb(kg));
  const signed = (kg: number) => {
    const value = Math.round(shown(kg) * 10) / 10;
    return `${value > 0 ? '+' : value < 0 ? '−' : '±'}${Math.abs(value).toFixed(1)} ${unit === 'metric' ? 'kg' : 'lb'}`;
  };

  const entries = weights.data?.entries ?? [];
  const start = entries[0];
  const latest = entries[entries.length - 1];
  // The trend runs over every weigh-in, so a shorter range starts from the trend of that day.
  const trend = weightTrend(entries);
  const trendNow = trend[trend.length - 1]?.trendKg ?? null;
  const since = range === 'all' ? null : toIsoDate(addDays(new Date(), -Number(range)));
  const inRange = since ? trend.filter((p) => p.date >= since) : trend;
  const points = (inRange.length > 0 ? inRange : trend.slice(-1)).map((p) => ({
    date: p.date,
    value: shown(p.weightKg),
    trend: shown(p.trendKg),
  }));

  const goal = weights.data?.goal ?? null;
  const target = weights.data?.targetWeightKg ?? null;
  const chasing = !!latest && !!start && trendNow !== null && target !== null && (goal === 'lose' || goal === 'gain');
  const reached = chasing && (goal === 'lose' ? latest.weightKg <= target : latest.weightKg >= target);
  // Milestones are only reached when the trend crosses them (one low weigh-in doesn't count).
  const milestones = chasing ? weightMilestones(start.weightKg, target, goal, profile?.heightCm ?? null) : [];
  const [milestone, dismissMilestone] = useNewMilestone(
    profile?.id,
    chasing ? reachedMilestone(milestones, trendNow, goal) : null,
    goal,
  );
  const perWeek = trendPerWeek(trend);
  const fastLoss = perWeek !== null && perWeek < -FAST_LOSS_KG_PER_WEEK;
  const weighIn = useReminderStore((state) => state.settings.weighIn);

  const onSave = (body: Parameters<typeof log.mutate>[0]) =>
    log.mutate(body, {
      onSuccess: () => {
        haptics.success();
        setLogging(false);
      },
      onError: (error) => notify("We couldn't save your weight", error.message),
    });

  const onRemove = async (entry: WeightEntry) => {
    const ok = await confirm({
      title: 'Remove this weigh-in?',
      message: `${formatWeight(entry.weightKg, unit)} on ${formatDay(entry.date)}.`,
      confirmLabel: 'Remove',
      destructive: true,
    });
    if (ok) remove.mutate(entry.id, { onError: (error) => notify("We couldn't remove it", error.message) });
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Weight
        </Text>

        {weights.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : weights.isError ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t load your weight history.</Text>
        ) : !latest || !start ? (
          <Text className="text-[15px] text-muted">No weigh-ins yet.</Text>
        ) : (
          <>
            <View className="rounded-card border border-line p-5">
              <Text className="text-[40px] font-bold tracking-tighter text-ink">{formatWeight(latest.weightKg, unit)}</Text>
              <Text className="mt-0.5 text-[15px] text-muted">
                {entries.length > 1
                  ? `${signed(latest.weightKg - start.weightKg)} since ${shortDate(start.date)}`
                  : `Starting weight · ${formatDay(latest.date)}`}
              </Text>
              {entries.length > 1 && trendNow !== null ? (
                <Text className="mt-0.5 text-[15px] text-ink">
                  Trend {formatWeight(trendNow, unit)}
                  {perWeek !== null ? <Text className="text-muted"> · {signed(perWeek)} a week</Text> : null}
                </Text>
              ) : null}
              {chasing && target !== null ? (
                <View className="mt-4">
                  <View className="flex-row justify-between">
                    <Text className="text-[14px] font-medium text-ink">Goal {formatWeight(target, unit)}</Text>
                    <Text className="text-[14px] text-muted">
                      {reached ? 'Goal reached' : `${formatWeight(Math.abs(latest.weightKg - target), unit)} to go`}
                    </Text>
                  </View>
                  <View className="mt-2 h-2 overflow-hidden rounded-full bg-surface">
                    <View
                      style={{ width: `${goalProgress(start.weightKg, latest.weightKg, target) * 100}%` }}
                      className="h-full rounded-full bg-ink"
                    />
                  </View>
                </View>
              ) : goal === 'maintain' ? (
                <Text className="mt-3 text-[14px] text-ink">Goal: stay around {formatWeight(target ?? start.weightKg, unit)}</Text>
              ) : null}
            </View>

            {milestone !== null && target !== null ? (
              <View className="flex-row gap-3 rounded-card bg-surface p-4">
                <Flag size={18} color={colors.ink} style={{ marginTop: 2 }} />
                <Text className="flex-1 text-[15px] leading-[21px] text-ink">
                  {milestone === target
                    ? `Your trend reached your goal of ${formatWeight(target, unit)}.`
                    : `Milestone: your trend is ${goal === 'lose' ? 'below' : 'above'} ${formatWeight(milestone, unit)} for the first time. ${formatWeight(Math.abs(target - milestone), unit)} from there to your goal.`}
                </Text>
                <Pressable accessibilityRole="button" accessibilityLabel="Dismiss" hitSlop={8} onPress={dismissMilestone}>
                  <Text className="text-[14px] font-semibold text-ink">OK</Text>
                </Pressable>
              </View>
            ) : null}

            {fastLoss && perWeek !== null ? (
              <View className="rounded-card border border-line p-4">
                <Text className="text-[15px] leading-[21px] text-ink">
                  Over the last 4 weeks your trend went down about {formatWeight(Math.abs(perWeek), unit)} a week. Losing more
                  than {unit === 'metric' ? '1 kg' : '2 lb'} a week is fast — it&apos;s worth checking in with your doctor.
                </Text>
              </View>
            ) : null}

            <SegmentedControl options={WEIGHT_RANGES} value={range} onChange={setRange} />
            <View>
              <WeightChart points={points} goal={target !== null && goal !== 'maintain' ? shown(target) : null} unit={unit === 'metric' ? 'kg' : 'lb'} />
              <View className="mt-2 flex-row items-center justify-center gap-5">
                <View className="flex-row items-center gap-1.5">
                  <View className="h-[3px] w-4 rounded-full bg-ink" />
                  <Text className="text-[13px] text-muted">Trend</Text>
                </View>
                <View className="flex-row items-center gap-1.5">
                  <View className="h-2 w-2 rounded-full bg-faint" />
                  <Text className="text-[13px] text-muted">Weigh-ins</Text>
                </View>
              </View>
            </View>
          </>
        )}

        <Button title="Log weight" icon={<Plus size={18} color={colors.canvas} />} onPress={() => setLogging(true)} />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Weigh-in reminder: ${weighIn.enabled ? `${weighIn.weekday === null ? 'every day' : WEEKDAY_NAMES[weighIn.weekday]} at ${formatTimeOfDay(weighIn)}` : 'off'}. Change`}
          onPress={() => router.push('/reminders')}
          className="-mt-2 flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
          <Bell size={18} color={colors.ink} />
          <View className="flex-1">
            <Text className="text-[15px] text-ink">Weigh-in reminder</Text>
            <Text className="text-[13px] text-muted">
              {weighIn.enabled
                ? `${weighIn.weekday === null ? 'Every day' : WEEKDAY_NAMES[weighIn.weekday]} at ${formatTimeOfDay(weighIn)}`
                : 'Off'}
            </Text>
          </View>
          <ChevronRight size={18} color={colors.faint} />
        </Pressable>

        {entries.length > 0 ? (
          <View>
            <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">History</Text>
            <View className="overflow-hidden rounded-[20px] border border-line">
              {[...entries].reverse().map((entry, index, list) => {
                const previous = list[index + 1];
                return (
                  <Pressable
                    key={entry.id}
                    accessibilityRole="button"
                    accessibilityLabel={`${formatWeight(entry.weightKg, unit)} on ${formatDay(entry.date)}. Remove`}
                    onPress={() => void onRemove(entry)}
                    className={`min-h-[52px] flex-row items-center px-4 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
                    <Text className="flex-1 text-[15px] text-ink">{formatDay(entry.date)}</Text>
                    {previous ? (
                      <Text className="mr-3 text-[13px] text-muted">{signed(entry.weightKg - previous.weightKg)}</Text>
                    ) : null}
                    <Text className="text-[15px] font-semibold text-ink">{formatWeight(entry.weightKg, unit)}</Text>
                  </Pressable>
                );
              })}
            </View>
            <Text className="mt-2 px-1 text-[13px] leading-[18px] text-muted">Tap a weigh-in to remove it.</Text>
          </View>
        ) : null}

        <Text className="px-1 text-[12px] leading-4 text-muted">
          Your weight goes up and down by {unit === 'metric' ? '1–2 kg' : '2–4 lb'} from day to day with water, salt and
          digestion. The trend line smooths that out: each day it moves a tenth of the way toward your weigh-in, so it
          shows where you are heading.
        </Text>
      </ScrollView>

      {logging ? (
        <WeightSheet unit={unit} initialKg={latest?.weightKg ?? profile?.weightKg ?? null} saving={log.isPending} onClose={() => setLogging(false)} onSave={onSave} />
      ) : null}
    </Screen>
  );
}
