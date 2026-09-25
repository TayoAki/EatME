import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import type { MealItem } from '@/shared/meals';
import { distinctBrand, PRODUCT_SOURCE_LABELS } from '@/shared/products';

export type FoodDraft = {
  /** Existing item id; empty for a food being added. */
  id?: string;
  foodId: number | null;
  name: string;
  /** Database description, or null for a packaged product or the AI's own estimate. */
  foodName: string | null;
  /** A packaged product logged by barcode (its label's numbers). */
  product?: MealItem['product'];
  grams: number;
  /** Calories per gram, for the live preview. */
  kcalPerGram: number;
  portions: [string, number][];
};

type FoodAmountSheetProps = {
  draft: FoodDraft;
  saving: boolean;
  onClose: () => void;
  onSave: (grams: number) => void;
  /** "Save" by default. */
  saveLabel?: string;
  onChangeFood?: () => void;
  onRemove?: () => void;
  /** Calm mode: no calorie preview. */
  hideCalories?: boolean;
};

/** How much of a food: grams, or one of the database's household measures. */
export function FoodAmountSheet({
  draft,
  saving,
  onClose,
  onSave,
  saveLabel = 'Save',
  onChangeFood,
  onRemove,
  hideCalories = false,
}: FoodAmountSheetProps) {
  const [text, setText] = useState(String(Math.round(draft.grams)));
  const grams = Number(text);
  const valid = Number.isFinite(grams) && grams >= 1 && grams <= 3000;

  return (
    <BottomSheet visible onClose={onClose}>
      <Text numberOfLines={2} className="text-[22px] font-bold tracking-tight text-ink">
        {draft.name}
      </Text>
      <Text className="mt-0.5 text-[14px] leading-5 text-muted">
        {draft.foodName ??
          (draft.product
            ? ['Package label', distinctBrand({ name: draft.name, brand: draft.product.brand }), PRODUCT_SOURCE_LABELS[draft.product.source ?? 'off']]
                .filter(Boolean)
                .join(' · ')
            : 'AI estimate — this food is not in the database')}
      </Text>

      <View className="mt-4 h-20 flex-row items-center justify-center gap-2 rounded-card bg-surface px-5">
        <TextInput
          accessibilityLabel="Grams"
          value={text}
          onChangeText={(next) => setText(next.replace(/[^0-9]/g, '').slice(0, 4))}
          keyboardType="number-pad"
          selectTextOnFocus
          className="min-w-[80px] text-center text-[40px] font-bold tracking-tight text-ink"
        />
        <Text className="text-[20px] font-semibold text-muted">g</Text>
      </View>
      {valid && hideCalories ? null : (
        <Text className="mt-2 text-center text-[14px] text-muted">
          {valid ? `${Math.round(grams * draft.kcalPerGram)} kcal` : 'Between 1 and 3,000 g'}
        </Text>
      )}

      {draft.portions.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" contentContainerClassName="gap-2">
          {draft.portions.map(([label, portionGrams]) => (
            <Chip
              key={label}
              label={`${label} · ${Math.round(portionGrams)} g`}
              selected={Math.round(portionGrams) === grams}
              onPress={() => setText(String(Math.round(portionGrams)))}
            />
          ))}
        </ScrollView>
      ) : null}

      <Button title={saveLabel} className="mt-5" loading={saving} disabled={!valid} onPress={() => onSave(grams)} />
      {onChangeFood || onRemove ? (
        <View className="mt-2 flex-row gap-2">
          {onChangeFood ? <Button title="Change food" variant="secondary" size="md" className="flex-1" onPress={onChangeFood} /> : null}
          {onRemove ? <Button title="Remove" variant="danger" size="md" className="flex-1" onPress={onRemove} /> : null}
        </View>
      ) : null}
    </BottomSheet>
  );
}
