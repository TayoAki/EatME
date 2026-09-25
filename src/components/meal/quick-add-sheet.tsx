import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useQuickAdd } from '@/lib/queries';
import type { Meal } from '@/shared/meals';
import { caloriesFromMacros, macrosDisagree } from '@/shared/nutrition';

type QuickAddSheetProps = {
  visible: boolean;
  onClose: () => void;
  /** The day to log it on (today when left out). */
  date?: string;
  onLogged?: (meal: Meal) => void;
};

/** Largest values `POST /api/meals` accepts for a quick add. */
const MAX = { calories: 10000, proteinG: 1000, carbsG: 2000, fatG: 1000, fiberG: 500 };
type Key = keyof typeof MAX;

/** Digits and one decimal point (a comma counts as one), at most 6 characters. */
const cleanNumber = (text: string, decimals: boolean) => {
  const cleaned = text.replace(',', '.').replace(decimals ? /[^0-9.]/g : /[^0-9]/g, '');
  return cleaned.replace(/(\..*)\./g, '$1').slice(0, 6);
};
const parse = (text: string) => (text === '' || text === '.' ? undefined : Number(text));

function Field({
  label,
  unit,
  value,
  onChange,
  dot,
  decimals = true,
  placeholder = '0',
}: {
  label: string;
  unit: string;
  value: string;
  onChange: (value: string) => void;
  dot?: string;
  decimals?: boolean;
  placeholder?: string;
}) {
  return (
    <View className="flex-1 rounded-field border border-line px-3.5 py-2.5">
      <View className="flex-row items-center gap-1.5">
        {dot ? <View style={{ backgroundColor: dot }} className="h-2 w-2 rounded-full" /> : null}
        <Text className="text-[13px] text-muted">{label}</Text>
      </View>
      <View className="mt-0.5 flex-row items-center">
        <TextInput
          accessibilityLabel={label}
          value={value}
          onChangeText={(text) => onChange(cleanNumber(text, decimals))}
          placeholder={placeholder}
          placeholderTextColor={colors.faint}
          keyboardType={decimals ? 'decimal-pad' : 'number-pad'}
          selectTextOnFocus
          className="min-w-0 flex-1 py-0.5 text-[22px] font-bold tracking-tight text-ink"
        />
        <Text className="ml-1 text-[15px] text-muted">{unit}</Text>
      </View>
    </View>
  );
}

/**
 * Quick add: type calories and macros (from a label, a menu or memory) — no photo, no AI, never
 * counted as a scan. Calories left empty are worked out from the macros.
 */
export function QuickAddSheet({ visible, onClose, date, onLogged }: QuickAddSheetProps) {
  const quickAdd = useQuickAdd();
  const [name, setName] = useState('');
  const [text, setText] = useState<Record<Key, string>>({ calories: '', proteinG: '', carbsG: '', fatG: '', fiberG: '' });
  const values = Object.fromEntries(Object.entries(text).map(([key, value]) => [key, parse(value)])) as Record<
    Key,
    number | undefined
  >;
  const macros = { proteinG: values.proteinG ?? 0, carbsG: values.carbsG ?? 0, fatG: values.fatG ?? 0 };
  const fromMacros = Math.round(caloriesFromMacros(macros));
  const tooBig = (Object.keys(MAX) as Key[]).some((key) => (values[key] ?? 0) > MAX[key]);
  const ready = Object.values(values).some((value) => (value ?? 0) > 0) && !tooBig;
  const disagree = values.calories !== undefined && macrosDisagree(values.calories, macros);
  const set = (key: Key) => (value: string) => setText((current) => ({ ...current, [key]: value }));

  const reset = () => {
    setName('');
    setText({ calories: '', proteinG: '', carbsG: '', fatG: '', fiberG: '' });
  };
  const close = () => {
    reset();
    onClose();
  };
  const log = () =>
    quickAdd.mutate(
      { name: name.trim() || undefined, ...values, date },
      {
        onSuccess: ({ meal }) => {
          haptics.success();
          reset();
          onClose();
          onLogged?.(meal);
        },
        onError: (error) => notify("We couldn't log that", error.message),
      },
    );

  return (
    <BottomSheet visible={visible} onClose={close}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Quick add
      </Text>
      <Text className="mt-0.5 text-[14px] leading-5 text-muted">Type what you know. No photo, no AI.</Text>

      <ScrollView style={{ maxHeight: 400 }} className="mt-4" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View className="gap-2.5">
          <TextInput
            accessibilityLabel="Name"
            value={name}
            onChangeText={(next) => setName(next.slice(0, 80))}
            placeholder="Name (optional)"
            placeholderTextColor={colors.faint}
            className="h-12 rounded-field border border-line px-3.5 text-[16px] text-ink"
          />
          <Field
            label="Calories"
            unit="kcal"
            value={text.calories}
            onChange={set('calories')}
            decimals={false}
            placeholder={fromMacros > 0 ? String(fromMacros) : '0'}
          />
          <View className="flex-row gap-2.5">
            <Field label="Protein" unit="g" value={text.proteinG} onChange={set('proteinG')} dot={colors.protein} />
            <Field label="Carbs" unit="g" value={text.carbsG} onChange={set('carbsG')} dot={colors.carbs} />
          </View>
          <View className="flex-row gap-2.5">
            <Field label="Fat" unit="g" value={text.fatG} onChange={set('fatG')} dot={colors.fat} />
            <Field label="Fiber" unit="g" value={text.fiberG} onChange={set('fiberG')} dot={colors.fiber} />
          </View>
        </View>

        {tooBig ? (
          <Text className="mt-3 text-[14px] leading-5 text-danger">That looks like more than one meal. Check the numbers.</Text>
        ) : values.calories === undefined && fromMacros > 0 ? (
          <Text className="mt-3 text-[14px] leading-5 text-muted">
            Calories left empty: about {fromMacros.toLocaleString('en-US')} kcal from the macros.
          </Text>
        ) : disagree ? (
          <Text className="mt-3 text-[14px] leading-5 text-muted">
            Protein, carbs and fat add up to about {fromMacros.toLocaleString('en-US')} kcal. That&apos;s fine if the label
            says so — rounding and alcohol make a difference.
          </Text>
        ) : null}
      </ScrollView>

      <Button title="Log it" className="mt-5" loading={quickAdd.isPending} disabled={!ready} onPress={log} />
    </BottomSheet>
  );
}
