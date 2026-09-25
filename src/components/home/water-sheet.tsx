import { GlassWater, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useAddWater, useDeleteWater, useWater } from '@/lib/queries';
import { formatDay, formatTime, todayIso } from '@/lib/time';
import type { UnitSystem } from '@/shared/onboarding';
import { flOzToMl, formatVolume, waterAmounts } from '@/shared/units';
import { FAST_DRINKING_ML_PER_HOUR, MAX_WATER_ENTRY_ML, mlInLastHour } from '@/shared/water';

type WaterSheetProps = {
  visible: boolean;
  onClose: () => void;
  date: string;
  unit: UnitSystem;
  goalMl: number;
};

/** Water log for one day: quick amounts, a custom amount, and the day's entries with undo. */
export function WaterSheet({ visible, onClose, date, unit, goalMl }: WaterSheetProps) {
  const water = useWater(date);
  const add = useAddWater(date);
  const remove = useDeleteWater(date);
  const [custom, setCustom] = useState('');

  const entries = water.data?.entries ?? [];
  const total = water.data?.totalMl ?? 0;
  const isToday = date === todayIso();
  const drinkingFast = isToday && mlInLastHour(entries) > FAST_DRINKING_ML_PER_HOUR;

  const addAmount = (ml: number) => {
    haptics.light();
    add.mutate(ml, { onError: (error) => notify("We couldn't log that drink", error.message) });
  };

  const addCustom = () => {
    const value = Number(custom.replace(',', '.'));
    if (!Number.isFinite(value) || value <= 0) return;
    const ml = Math.round(unit === 'imperial' ? flOzToMl(value) : value);
    if (ml > MAX_WATER_ENTRY_ML) {
      notify('That is a lot at once', `Log up to ${formatVolume(MAX_WATER_ENTRY_ML, unit)} at a time.`);
      return;
    }
    addAmount(ml);
    setCustom('');
  };

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <GlassWater size={22} color={colors.water} />
          <Text className="text-[22px] font-bold tracking-tight text-ink">Water</Text>
        </View>
        <Text className="text-[15px] text-muted">{formatDay(date)}</Text>
      </View>

      <Text className="mt-4 text-[32px] font-bold tracking-tight text-ink">
        {formatVolume(total, unit)}
        <Text className="text-[16px] font-semibold text-muted"> of {formatVolume(goalMl, unit)}</Text>
      </Text>
      <View className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface">
        <View
          style={{ width: `${Math.min(1, goalMl > 0 ? total / goalMl : 0) * 100}%`, backgroundColor: colors.water }}
          className="h-full rounded-full"
        />
      </View>
      <Text className="mt-2 text-[13px] leading-[18px] text-muted">
        All drinks count, not just water. The goal is a guide — thirst is a good signal too.
      </Text>

      <View className="mt-5 flex-row gap-2">
        {waterAmounts(unit).map((amount) => (
          <Pressable
            key={amount.ml}
            accessibilityRole="button"
            accessibilityLabel={`Add ${amount.label}`}
            onPress={() => addAmount(amount.ml)}
            className="h-12 flex-1 items-center justify-center rounded-2xl bg-surface active:opacity-70">
            <Text className="text-[15px] font-semibold text-ink">+ {amount.label}</Text>
          </Pressable>
        ))}
      </View>

      <View className="mt-3 flex-row items-center gap-2">
        <View className="h-12 flex-1 flex-row items-center rounded-2xl border border-line px-4">
          <TextInput
            accessibilityLabel={`Custom amount in ${unit === 'imperial' ? 'fluid ounces' : 'millilitres'}`}
            value={custom}
            onChangeText={(text) => setCustom(text.replace(/[^0-9.,]/g, '').slice(0, 6))}
            keyboardType="decimal-pad"
            placeholder="Custom amount"
            placeholderTextColor={colors.faint}
            returnKeyType="done"
            onSubmitEditing={addCustom}
            className="min-w-0 flex-1 text-[16px] text-ink"
          />
          <Text className="text-[15px] text-muted">{unit === 'imperial' ? 'fl oz' : 'ml'}</Text>
        </View>
        <Button title="Add" size="md" className="px-5" disabled={!custom} onPress={addCustom} />
      </View>

      {drinkingFast ? (
        <View className="mt-4 rounded-2xl bg-surface p-3.5">
          <Text className="text-[14px] leading-5 text-ink">
            That&apos;s a lot in a short time. Sip rather than chug — your kidneys can only clear about a litre an
            hour.
          </Text>
        </View>
      ) : null}

      <Text className="mb-2 mt-5 text-[15px] font-semibold text-ink">Logged</Text>
      {water.isPending ? (
        <ActivityIndicator color={colors.ink} />
      ) : entries.length === 0 ? (
        <Text className="text-[14px] text-muted">Nothing yet.</Text>
      ) : (
        <ScrollView style={{ maxHeight: 180 }} showsVerticalScrollIndicator={false}>
          {[...entries].reverse().map((entry) => (
            <View key={entry.id} className="h-11 flex-row items-center justify-between border-b border-line">
              <Text className="text-[15px] text-ink">{formatVolume(entry.amountMl, unit)}</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-[14px] text-muted">{formatTime(entry.loggedAt)}</Text>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={`Remove ${formatVolume(entry.amountMl, unit)}`}
                  hitSlop={10}
                  disabled={entry.id.startsWith('pending-')}
                  onPress={() => remove.mutate(entry.id, { onError: (error) => notify("We couldn't remove that drink", error.message) })}>
                  <X size={18} color={colors.muted} />
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}
