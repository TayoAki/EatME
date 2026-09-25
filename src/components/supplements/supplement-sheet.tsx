import { X } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { NUTRIENT_INFO, type NutrientAmounts, type NutrientKey } from '@/shared/nutrients';
import { SUPPLEMENT_NUTRIENTS, SUPPLEMENT_PRESETS, type SupplementBody, type SupplementSchedule } from '@/shared/supplements';

const INFO = NUTRIENT_INFO;
const SCHEDULES = [
  { label: 'Every day', value: 'daily' },
  { label: 'When needed', value: 'as_needed' },
] as const;

type SupplementSheetProps = {
  initial?: SupplementBody;
  saving: boolean;
  onClose: () => void;
  onSave: (body: SupplementBody) => void;
  /** Shown when editing: removes it from the list. */
  onRemove?: () => void;
};

/** Add or edit a supplement: a preset or your own, with the amounts from your label. */
export function SupplementSheet({ initial, saving, onClose, onSave, onRemove }: SupplementSheetProps) {
  const [name, setName] = useState(initial?.name ?? '');
  const [schedule, setSchedule] = useState<SupplementSchedule>(initial?.schedule ?? 'daily');
  const [amounts, setAmounts] = useState<Record<string, string>>(
    Object.fromEntries(Object.entries(initial?.nutrients ?? {}).map(([k, v]) => [k, String(v)])),
  );
  const keys = Object.keys(amounts) as NutrientKey[];
  const valid = name.trim().length > 0 && keys.every((k) => Number(amounts[k]) > 0);

  const applyPreset = (preset: (typeof SUPPLEMENT_PRESETS)[number]) => {
    setName(preset.name);
    setAmounts(Object.fromEntries(Object.entries(preset.nutrients).map(([k, v]) => [k, String(v)])));
  };

  const save = () => {
    const nutrients: NutrientAmounts = {};
    for (const key of keys) nutrients[key] = Number(amounts[key].replace(',', '.'));
    onSave({ name: name.trim(), nutrients, schedule });
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">{initial ? 'Edit supplement' : 'Add a supplement'}</Text>
      <ScrollView style={{ maxHeight: 460 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        {!initial ? (
          <View className="mt-3 flex-row flex-wrap gap-2">
            {SUPPLEMENT_PRESETS.map((preset) => (
              <Chip key={preset.name} label={preset.name} selected={name === preset.name} onPress={() => applyPreset(preset)} />
            ))}
          </View>
        ) : null}

        <TextInput
          accessibilityLabel="Supplement name"
          value={name}
          onChangeText={setName}
          maxLength={60}
          placeholder="Name, e.g. Vitamin D3"
          placeholderTextColor={colors.faint}
          className="mt-4 h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
        />

        <Text className="mb-1 mt-4 text-[14px] font-semibold text-ink">Per dose (check your label)</Text>
        {keys.length === 0 ? <Text className="text-[14px] text-muted">No vitamins or minerals tracked.</Text> : null}
        {keys.map((key) => (
          <View key={key} className="h-12 flex-row items-center gap-3 border-b border-line">
            <Text className="flex-1 text-[15px] text-ink">{INFO[key].label}</Text>
            <TextInput
              accessibilityLabel={`${INFO[key].label} per dose`}
              value={amounts[key]}
              onChangeText={(text) => setAmounts({ ...amounts, [key]: text.replace(/[^0-9.,]/g, '').slice(0, 7) })}
              keyboardType="decimal-pad"
              className="w-20 text-right text-[16px] font-semibold text-ink"
            />
            <Text className="w-8 text-[14px] text-muted">{INFO[key].unit}</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Remove ${INFO[key].label}`}
              hitSlop={8}
              onPress={() => {
                const { [key]: _removed, ...rest } = amounts;
                setAmounts(rest);
              }}>
              <X size={16} color={colors.muted} />
            </Pressable>
          </View>
        ))}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" contentContainerClassName="gap-2">
          {SUPPLEMENT_NUTRIENTS.filter((key) => !keys.includes(key)).map((key) => (
            <Chip key={key} role="button" label={`+ ${INFO[key].label}`} selected={false} onPress={() => setAmounts({ ...amounts, [key]: '' })} />
          ))}
        </ScrollView>

        <Text className="mb-2 mt-4 text-[14px] font-semibold text-ink">How often</Text>
        <SegmentedControl options={SCHEDULES} value={schedule} onChange={setSchedule} />
      </ScrollView>
      <Button title="Save" className="mt-4" disabled={!valid} loading={saving} onPress={save} />
      {onRemove ? <Button title="Remove supplement" variant="danger" size="md" className="mt-1" onPress={onRemove} /> : null}
    </BottomSheet>
  );
}
