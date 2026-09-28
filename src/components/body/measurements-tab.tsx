import { Plus } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { MeasurementSheet } from '@/components/body/measurement-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { WeightChart } from '@/components/weight/weight-chart';
import { colors } from '@/constants/colors';
import { useBody } from '@/lib/queries';
import { formatDay, fromIsoDate } from '@/lib/time';
import { cmToInches, formatLength, lengthUnit, MEASUREMENT_LABELS, MEASUREMENTS, type Measurement } from '@/shared/body';
import type { UnitSystem } from '@/shared/onboarding';

const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

/** Waist, hips, chest, arm, thigh and neck over time, in cm or inches. */
export function MeasurementsTab({ unit }: { unit: UnitSystem }) {
  const body = useBody();
  const [sheet, setSheet] = useState<{ date?: string } | null>(null);
  const entries = body.data?.measurements ?? [];
  const measured = MEASUREMENTS.filter((key) => entries.some((e) => e[key] !== null));
  const [picked, setPicked] = useState<Measurement | null>(null);
  const shown = picked && measured.includes(picked) ? picked : (measured[0] ?? null);
  const inUnit = (cm: number) => (unit === 'metric' ? cm : cmToInches(cm));
  const signed = (cm: number) => {
    const value = Math.round(inUnit(cm) * 10) / 10;
    return `${value > 0 ? '+' : value < 0 ? '−' : '±'}${Math.abs(value).toFixed(1).replace(/\.0$/, '')} ${lengthUnit(unit)}`;
  };

  if (body.isPending) return <ActivityIndicator color={colors.ink} />;
  if (body.isError) return <Text className="text-[15px] text-muted">We couldn&apos;t load your measurements.</Text>;

  const series = (key: Measurement) => entries.filter((e) => e[key] !== null).map((e) => ({ date: e.date, cm: e[key]! }));
  const points = shown ? series(shown).map((p) => ({ date: p.date, value: inUnit(p.cm), trend: inUnit(p.cm) })) : [];

  return (
    <View className="gap-5">
      {measured.length === 0 ? (
        <View className="items-center rounded-card bg-surface px-6 py-8">
          <Text className="text-center text-[16px] font-semibold text-ink">No measurements yet</Text>
          <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
            A tape measure shows changes the scale can miss. Add any of waist, hips, chest, arm, thigh or neck.
          </Text>
        </View>
      ) : (
        <>
          <View className="flex-row flex-wrap gap-2.5">
            {measured.map((key) => {
              const s = series(key);
              const latest = s[s.length - 1];
              return (
                <Pressable
                  key={key}
                  accessibilityRole="button"
                  accessibilityState={{ selected: key === shown }}
                  onPress={() => setPicked(key)}
                  style={{ width: '48%' }}
                  className={`rounded-[20px] border px-4 py-3 ${key === shown ? 'border-ink' : 'border-line'}`}>
                  <Text className="text-[13px] text-muted">{MEASUREMENT_LABELS[key]}</Text>
                  <Text className="text-[22px] font-bold tracking-tight text-ink">{formatLength(latest.cm, unit)}</Text>
                  <Text className="text-[13px] text-muted">
                    {s.length > 1 ? `${signed(latest.cm - s[0].cm)} since ${shortDate(s[0].date)}` : shortDate(latest.date)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          {shown && points.length > 0 ? (
            <View>
              <View className="mb-2 flex-row flex-wrap gap-2">
                {measured.map((key) => (
                  <Chip key={key} label={MEASUREMENT_LABELS[key]} selected={key === shown} onPress={() => setPicked(key)} className="h-9 px-3" />
                ))}
              </View>
              <WeightChart points={points} goal={null} unit={lengthUnit(unit)} label={MEASUREMENT_LABELS[shown]} pointName={['measurement', 'measurements']} />
            </View>
          ) : null}
        </>
      )}

      <Button title="Add measurements" icon={<Plus size={18} color={colors.canvas} />} onPress={() => setSheet({})} />

      {entries.length > 0 ? (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">History</Text>
          <View className="overflow-hidden rounded-[20px] border border-line">
            {[...entries].reverse().map((entry, index) => {
              const text = MEASUREMENTS.filter((key) => entry[key] !== null)
                .map((key) => `${MEASUREMENT_LABELS[key]} ${formatLength(entry[key]!, unit, false)}`)
                .join(' · ');
              return (
                <Pressable
                  key={entry.id}
                  accessibilityRole="button"
                  accessibilityLabel={`${formatDay(entry.date)}: ${text}. Edit`}
                  onPress={() => setSheet({ date: entry.date })}
                  className={`min-h-[56px] justify-center px-4 py-2 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
                  <Text className="text-[15px] text-ink">{formatDay(entry.date)}</Text>
                  <Text className="text-[13px] text-muted">
                    {text} {lengthUnit(unit)}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <Text className="mt-2 px-1 text-[13px] leading-[18px] text-muted">Tap a day to change or delete it.</Text>
        </View>
      ) : null}

      {sheet ? <MeasurementSheet unit={unit} entries={entries} initialDate={sheet.date} onClose={() => setSheet(null)} /> : null}
    </View>
  );
}
