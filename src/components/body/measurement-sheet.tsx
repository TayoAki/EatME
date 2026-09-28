import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { DayChips } from '@/components/meal/day-chips';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useSaveMeasurements } from '@/lib/queries';
import { formatDay, todayIso } from '@/lib/time';
import {
  formatLength,
  lengthUnit,
  MEASUREMENT_LABELS,
  MEASUREMENT_RANGE_CM,
  MEASUREMENTS,
  toCm,
  type BodyMeasurement,
  type Measurement,
} from '@/shared/body';
import type { UnitSystem } from '@/shared/onboarding';

type Texts = Record<Measurement, string>;

/** A day's saved values as text in the person's unit. */
const textsFor = (entry: BodyMeasurement | undefined, unit: UnitSystem): Texts =>
  Object.fromEntries(MEASUREMENTS.map((key) => [key, entry?.[key] ? formatLength(entry[key], unit, false) : ''])) as Texts;

/** Digits and one decimal point (a comma counts as one). */
const clean = (text: string) => text.replace(',', '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').slice(0, 5);

type MeasurementSheetProps = {
  unit: UnitSystem;
  entries: BodyMeasurement[];
  initialDate?: string;
  onClose: () => void;
};

/** Add or edit a day's measurements (one entry a day; saving again replaces it). */
export function MeasurementSheet({ unit, entries, initialDate, onClose }: MeasurementSheetProps) {
  const save = useSaveMeasurements();
  const [date, setDate] = useState(initialDate ?? todayIso());
  const existing = entries.find((e) => e.date === date);
  const [texts, setTexts] = useState<Texts>(() => textsFor(existing, unit));
  // A field left as it was keeps its exact saved value (no cm → in → cm rounding).
  const shownBefore = textsFor(existing, unit);
  const values = Object.fromEntries(
    MEASUREMENTS.map((key) => [
      key,
      texts[key] === '' || texts[key] === '.'
        ? null
        : existing?.[key] && texts[key] === shownBefore[key]
          ? existing[key]
          : toCm(Number(texts[key]), unit),
    ]),
  ) as Record<Measurement, number | null>;
  const outOfRange = MEASUREMENTS.some((key) => values[key] !== null && (values[key]! < MEASUREMENT_RANGE_CM.min || values[key]! > MEASUREMENT_RANGE_CM.max));
  const ready = MEASUREMENTS.some((key) => values[key] !== null) && !outOfRange;

  const pickDate = (next: string) => {
    setDate(next);
    setTexts(textsFor(entries.find((e) => e.date === next), unit));
  };

  const submit = () =>
    save.mutate(
      { date, values },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't save your measurements", error.message),
      },
    );

  const remove = async () => {
    const ok = await confirm({ title: 'Delete this day?', message: "That day's measurements will be deleted.", confirmLabel: 'Delete', destructive: true });
    if (ok) save.mutate({ date, values: null }, { onSuccess: onClose, onError: (error) => notify("We couldn't delete them", error.message) });
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        {existing ? 'Edit measurements' : 'Add measurements'}
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        {formatDay(date)}. Any you have, in {lengthUnit(unit) === 'cm' ? 'centimeters' : 'inches'}; measure at the same spot each
        time.
      </Text>
      <ScrollView style={{ maxHeight: 420 }} className="mt-4" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <DayChips selected={date} onSelect={pickDate} />
        <View className="mt-4 flex-row flex-wrap gap-2.5">
          {MEASUREMENTS.map((key) => (
            <View key={key} style={{ width: '48%' }} className="rounded-field border border-line px-3.5 py-2.5">
              <Text className="text-[13px] text-muted">{MEASUREMENT_LABELS[key]}</Text>
              <View className="mt-0.5 flex-row items-center">
                <TextInput
                  accessibilityLabel={MEASUREMENT_LABELS[key]}
                  value={texts[key]}
                  onChangeText={(text) => setTexts((current) => ({ ...current, [key]: clean(text) }))}
                  placeholder="—"
                  placeholderTextColor={colors.faint}
                  keyboardType="decimal-pad"
                  selectTextOnFocus
                  className="min-w-0 flex-1 py-0.5 text-[22px] font-bold tracking-tight text-ink"
                />
                <Text className="ml-1 text-[15px] text-muted">{lengthUnit(unit)}</Text>
              </View>
            </View>
          ))}
        </View>
        {outOfRange ? (
          <Text className="mt-3 text-[14px] text-danger">
            Measurements are between {formatLength(MEASUREMENT_RANGE_CM.min, unit)} and {formatLength(MEASUREMENT_RANGE_CM.max, unit)}.
          </Text>
        ) : null}
        {existing ? <Button title="Delete this day" variant="danger" size="md" className="mt-3" onPress={() => void remove()} /> : null}
      </ScrollView>
      <Button title="Save" className="mt-5" disabled={!ready} loading={save.isPending} onPress={submit} />
    </BottomSheet>
  );
}
