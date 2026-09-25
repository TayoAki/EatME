import { router } from 'expo-router';
import { ArrowLeft, Plus } from 'lucide-react-native';
import { useState } from 'react';
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
import { addDays, formatDay, fromIsoDate, toIsoDate } from '@/lib/time';
import { formatWeight, kgToLb } from '@/shared/units';
import { goalProgress, WEIGHT_RANGES, type WeightEntry, type WeightRange } from '@/shared/weight';

const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

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
  const since = range === 'all' ? null : toIsoDate(addDays(new Date(), -Number(range)));
  const inRange = since ? entries.filter((e) => e.date >= since) : entries;
  const points = (inRange.length > 0 ? inRange : latest ? [latest] : []).map((e) => ({ date: e.date, value: shown(e.weightKg) }));

  const goal = weights.data?.goal ?? null;
  const target = weights.data?.targetWeightKg ?? null;
  const chasing = !!latest && !!start && target !== null && (goal === 'lose' || goal === 'gain');
  const reached = chasing && (goal === 'lose' ? latest.weightKg <= target : latest.weightKg >= target);

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

            <SegmentedControl options={WEIGHT_RANGES} value={range} onChange={setRange} />
            <WeightChart points={points} goal={target !== null && goal !== 'maintain' ? shown(target) : null} unit={unit === 'metric' ? 'kg' : 'lb'} />
          </>
        )}

        <Button title="Log weight" icon={<Plus size={18} color={colors.canvas} />} onPress={() => setLogging(true)} />

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
          digestion. The line over a few weeks says more than any single weigh-in.
        </Text>
      </ScrollView>

      {logging ? (
        <WeightSheet unit={unit} initialKg={latest?.weightKg ?? profile?.weightKg ?? null} saving={log.isPending} onClose={() => setLogging(false)} onSave={onSave} />
      ) : null}
    </Screen>
  );
}
