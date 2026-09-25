import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { addDays, toIsoDate } from '@/lib/time';
import type { UnitSystem } from '@/shared/onboarding';
import { kgToLb, lbToKg, weightUnitLabel } from '@/shared/units';
import { MAX_WEIGHT_KG, MIN_WEIGHT_KG, type AddWeightBody } from '@/shared/weight';

type WeightSheetProps = {
  unit: UnitSystem;
  /** Pre-filled with the latest weigh-in. */
  initialKg: number | null;
  saving: boolean;
  onClose: () => void;
  onSave: (body: AddWeightBody) => void;
};

/** Log a weigh-in for today or yesterday, in kg or lb. */
export function WeightSheet({ unit, initialKg, saving, onClose, onSave }: WeightSheetProps) {
  const toShown = (kg: number) => (unit === 'metric' ? kg : kgToLb(kg));
  const [text, setText] = useState(initialKg ? toShown(initialKg).toFixed(1) : '');
  const [yesterday, setYesterday] = useState(false);
  const value = Number(text.replace(',', '.'));
  const kg = unit === 'metric' ? value : lbToKg(value);
  const valid = Number.isFinite(value) && kg >= MIN_WEIGHT_KG && kg <= MAX_WEIGHT_KG;
  const label = weightUnitLabel(unit);

  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">Log your weight</Text>
      <View className="mt-4 h-20 flex-row items-center justify-center gap-2 rounded-card bg-surface px-5">
        <TextInput
          accessibilityLabel={`Weight in ${label}`}
          value={text}
          onChangeText={(next) => setText(next.replace(/[^0-9.,]/g, '').slice(0, 5))}
          keyboardType="decimal-pad"
          autoFocus
          selectTextOnFocus
          className="min-w-[110px] text-center text-[40px] font-bold tracking-tight text-ink"
        />
        <Text className="text-[20px] font-semibold text-muted">{label}</Text>
      </View>
      {text && !valid ? (
        <Text className="mt-2 text-center text-[14px] text-muted">
          Between {Math.round(toShown(MIN_WEIGHT_KG))} and {Math.round(toShown(MAX_WEIGHT_KG))} {label}
        </Text>
      ) : null}
      <View className="mt-3 flex-row justify-center gap-2">
        <Chip label="Today" selected={!yesterday} onPress={() => setYesterday(false)} />
        <Chip label="Yesterday" selected={yesterday} onPress={() => setYesterday(true)} />
      </View>
      <Button
        title="Save"
        className="mt-5"
        disabled={!valid}
        loading={saving}
        onPress={() => onSave({ weightKg: kg, date: yesterday ? toIsoDate(addDays(new Date(), -1)) : undefined })}
      />
    </BottomSheet>
  );
}
