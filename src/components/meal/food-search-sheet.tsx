import { PenLine, Search } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { cn } from '@/lib/cn';
import { useFoodSearch } from '@/lib/queries';
import type { FoodSummary } from '@/shared/meals';
import type { MenuRow } from '@/shared/menus';

type FoodSearchListProps = {
  onPick: (food: FoodSummary) => void;
  /** Search → Foods (v2.5): the chains' own dishes come first, a tap opens the dish. */
  onPickDish?: (dish: MenuRow) => void;
  /** "Describe it instead": the words typed go to Describe a meal (the AI estimates it). */
  onDescribe?: (text: string) => void;
  /** Fixed list height inside a sheet; the list fills the screen otherwise. */
  listHeight?: number;
};

const SECTION = 'px-1 text-[13px] font-semibold uppercase tracking-wider text-muted';

/** Search box and results from the USDA food database (FNDDS), and with `onPickDish` the chains' dishes. */
export function FoodSearchList({ onPick, onPickDish, onDescribe, listHeight }: FoodSearchListProps) {
  const [query, setQuery] = useState('');
  const search = useFoodSearch(query);
  const foods = search.data?.foods ?? [];
  const dishes = onPickDish ? (search.data?.chainDishes ?? []) : [];
  // Calm mode: food names only, no calorie and macro numbers.
  const calm = useCalmMode();
  const typed = query.trim().length >= 2;
  // Nothing has every word typed ("taco soup" finds only other soups): describing it is the better way. The
  // previous search's results don't count while the new one loads.
  const noCloseMatch = typed && !!search.data && !search.isPlaceholderData && search.data.closeMatch === false && dishes.length === 0;
  const describe = onDescribe ? () => onDescribe(query.trim()) : undefined;

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
          placeholder={onPickDish ? 'e.g. banana, rice, Big Mac' : 'e.g. banana, rice, latte'}
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
            {onPickDish
              ? "Foods come from the USDA food database, with calories and nutrients per 100 g. Restaurant dishes come from the chains' own nutrition guides."
              : 'Foods come from the USDA food database, with calories and nutrients per 100 g.'}
          </Text>
        ) : foods.length === 0 && dishes.length === 0 && !search.isFetching ? (
          describe ? (
            <DescribeInstead query={query.trim()} found={false} onPress={describe} />
          ) : (
            <Text className="px-1 text-[14px] text-muted">No foods found. Try a simpler word.</Text>
          )
        ) : (
          <>
            {describe && noCloseMatch ? <DescribeInstead query={query.trim()} found onPress={describe} /> : null}
            {dishes.length > 0 ? (
              <>
                <Text className={SECTION}>Restaurant dishes</Text>
                {dishes.map((dish) => {
                  const where = [dish.citation?.chain, dish.serving].filter(Boolean).join(' · ');
                  return (
                    <Pressable
                      key={dish.key}
                      accessibilityRole="button"
                      accessibilityLabel={calm ? `${dish.name}, ${where}` : `${dish.name}, ${where}, ${dish.calories} calories`}
                      onPress={() => onPickDish?.(dish)}
                      className="border-b border-line py-3 active:opacity-60">
                      <Text className="text-[15px] leading-5 text-ink">{dish.name}</Text>
                      <Text className="mt-0.5 text-[13px] text-muted">{calm ? where : `${where} · ${dish.calories.toLocaleString()} kcal`}</Text>
                    </Pressable>
                  );
                })}
                {foods.length > 0 ? <Text className={cn(SECTION, 'mt-5')}>Foods</Text> : null}
              </>
            ) : null}
            {foods.map((food) => (
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
            ))}
            {describe && search.data && !noCloseMatch && !search.isPlaceholderData ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Describe ${query.trim()} instead`}
                onPress={describe}
                className="flex-row items-center gap-2 py-4 active:opacity-60">
                <PenLine size={16} color={colors.ink} />
                <Text className="text-[15px] text-ink">
                  Not what you had? <Text className="font-semibold">Describe it instead</Text>
                </Text>
              </Pressable>
            ) : null}
          </>
        )}
      </ScrollView>
    </>
  );
}

/** No food has every word typed: describe the meal and the AI estimates it (one scan, like a photo). */
function DescribeInstead({ query, found, onPress }: { query: string; found: boolean; onPress: () => void }) {
  return (
    <View className={cn('rounded-card bg-surface p-4', found && 'mb-2')}>
      <Text className="text-[16px] font-semibold text-ink">{found ? `No close match for “${query}”` : `No foods match “${query}”`}</Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Describe it in a few words and Weight Class estimates it with AI.</Text>
      <Button
        title="Describe it instead"
        variant="outline"
        size="md"
        className="mt-3 self-start"
        icon={<PenLine size={16} color={colors.ink} />}
        onPress={onPress}
      />
    </View>
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
