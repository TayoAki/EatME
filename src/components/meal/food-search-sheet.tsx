import { Search } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { cn } from '@/lib/cn';
import { useFoodSearch } from '@/lib/queries';
import type { FoodSummary } from '@/shared/meals';

type FoodSearchListProps = {
  onPick: (food: FoodSummary) => void;
  /** Fixed list height inside a sheet; the list fills the screen otherwise. */
  listHeight?: number;
};

/** Search box and results from the USDA food database (FNDDS). */
export function FoodSearchList({ onPick, listHeight }: FoodSearchListProps) {
  const [query, setQuery] = useState('');
  const search = useFoodSearch(query);
  const foods = search.data?.foods ?? [];
  // Calm mode: food names only, no calorie and macro numbers.
  const calm = useCalmMode();
  const typed = query.trim().length >= 2;

  return (
    <>
      <View className="mt-3 h-12 flex-row items-center gap-2 rounded-field bg-surface px-4">
        <Search size={18} color={colors.muted} />
        <TextInput
          accessibilityLabel="Search foods"
          value={query}
          onChangeText={setQuery}
          autoFocus
          autoCorrect={false}
          placeholder="e.g. banana, rice, latte"
          placeholderTextColor={colors.faint}
          returnKeyType="search"
          className="min-w-0 flex-1 text-[16px] text-ink"
        />
        {search.isFetching ? <ActivityIndicator color={colors.muted} /> : null}
      </View>
      <ScrollView
        style={listHeight ? { height: listHeight } : undefined}
        className={cn('mt-3', !listHeight && 'flex-1')}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag">
        {!typed ? (
          <Text className="px-1 text-[14px] leading-5 text-muted">
            Foods come from the USDA food database, with calories and nutrients per 100 g.
          </Text>
        ) : foods.length === 0 && !search.isFetching ? (
          <Text className="px-1 text-[14px] text-muted">No foods found. Try a simpler word.</Text>
        ) : (
          foods.map((food) => (
            <Pressable
              key={food.id}
              accessibilityRole="button"
              accessibilityLabel={calm ? food.description : `${food.description}, ${food.per100g.calories} calories per 100 grams`}
              onPress={() => onPick(food)}
              className="border-b border-line py-3 active:opacity-60">
              <Text className="text-[15px] leading-5 text-ink">{food.description}</Text>
              {calm ? null : (
                <Text className="mt-0.5 text-[13px] text-muted">
                  {food.per100g.calories} kcal · P {food.per100g.proteinG} · C {food.per100g.carbsG} · F {food.per100g.fatG} per 100 g
                </Text>
              )}
            </Pressable>
          ))
        )}
      </ScrollView>
    </>
  );
}

type FoodSearchSheetProps = { visible: boolean; onClose: () => void; onPick: (food: FoodSummary) => void; title?: string };

/** Search the USDA food database (FNDDS) and pick a food. */
export function FoodSearchSheet({ visible, onClose, onPick, title = 'Add a food' }: FoodSearchSheetProps) {
  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">{title}</Text>
      <FoodSearchList onPick={onPick} listHeight={340} />
    </BottomSheet>
  );
}
