import { router } from 'expo-router';
import { Plus, X } from 'lucide-react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { FoodAmountSheet, type FoodDraft } from '@/components/meal/food-amount-sheet';
import { FoodSearchSheet } from '@/components/meal/food-search-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useCreateSavedMeal } from '@/lib/queries';
import type { FoodSummary } from '@/shared/meals';

const draftFromFood = (food: FoodSummary): FoodDraft => ({
  foodId: food.id,
  name: food.description.split(',')[0],
  foodName: food.description,
  grams: food.portions[0]?.[1] ?? 100,
  kcalPerGram: food.per100g.calories / 100,
  portions: food.portions,
});

/** Which food the amount sheet is for: a new one from search, or one already in the list. */
type Editing = { draft: FoodDraft; index: number | null } | null;

/** "New meal" (Scan → Saved meals): a saved meal built from database foods, ready to repeat. */
export default function NewSavedMealScreen() {
  const create = useCreateSavedMeal();
  const calm = useCalmMode();
  const [name, setName] = useState('');
  const [foods, setFoods] = useState<FoodDraft[]>([]);
  const [searching, setSearching] = useState(false);
  const [editing, setEditing] = useState<Editing>(null);
  const total = Math.round(foods.reduce((sum, food) => sum + food.grams * food.kcalPerGram, 0));
  const ready = name.trim().length > 0 && foods.length > 0;

  const save = () =>
    create.mutate(
      {
        name: name.trim(),
        items: foods.map((food) => ({ foodId: food.foodId as number, grams: Math.round(food.grams), name: food.name })),
      },
      {
        onSuccess: ({ meal }) => {
          haptics.success();
          router.replace({ pathname: '/meal/[id]', params: { id: meal.id } });
        },
        onError: (error) => notify("We couldn't save this meal", error.message),
      },
    );

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Close" icon={<X size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerClassName="px-5 pb-6" keyboardShouldPersistTaps="handled">
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            New meal
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Build a meal you eat often from the food database. Once it&apos;s saved you can log it with one tap or repeat
            it on the days you have it.
          </Text>

          <TextInput
            accessibilityLabel="Meal name"
            value={name}
            onChangeText={(text) => setName(text.slice(0, 80))}
            placeholder="Name, e.g. Weekday breakfast"
            placeholderTextColor={colors.faint}
            className="mt-5 h-14 rounded-field border border-line px-4 text-[17px] text-ink"
          />

          <View className="mt-6 flex-row items-center justify-between">
            <Text className="text-[18px] font-bold text-ink">Foods</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Add food"
              hitSlop={8}
              onPress={() => setSearching(true)}
              className="flex-row items-center gap-1 active:opacity-60">
              <Plus size={17} color={colors.ink} strokeWidth={2.4} />
              <Text className="text-[15px] font-semibold text-ink">Add food</Text>
            </Pressable>
          </View>
          {foods.length === 0 ? (
            <Text className="mt-3 rounded-card bg-surface px-5 py-6 text-center text-[15px] leading-[21px] text-muted">
              Add the foods of this meal and how much of each.
            </Text>
          ) : (
            <View className="mt-3 gap-2">
              {foods.map((food, index) => (
                <Pressable
                  key={`${food.foodId}-${index}`}
                  accessibilityRole="button"
                  accessibilityLabel={`${food.name}, ${Math.round(food.grams)} grams. Change the amount`}
                  onPress={() => setEditing({ draft: food, index })}
                  className="flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:opacity-70">
                  <View className="flex-1">
                    <Text numberOfLines={1} className="text-[16px] text-ink">
                      {food.name}
                    </Text>
                    <Text numberOfLines={1} className="text-[13px] text-muted">
                      {food.foodName}
                    </Text>
                  </View>
                  <Text className="text-[15px] text-muted">{Math.round(food.grams)} g</Text>
                  {calm ? null : (
                    <Text className="w-[76px] text-right text-[15px] font-semibold text-ink">
                      {Math.round(food.grams * food.kcalPerGram)} kcal
                    </Text>
                  )}
                </Pressable>
              ))}
              {calm ? null : (
                <Text className="mt-1 px-1 text-right text-[15px] font-semibold text-ink">Total {total.toLocaleString('en-US')} kcal</Text>
              )}
            </View>
          )}
        </ScrollView>
        <View className="px-5 pb-4 pt-2">
          <Button title="Save meal" disabled={!ready} loading={create.isPending} onPress={save} />
        </View>
      </KeyboardAvoidingView>

      <FoodSearchSheet
        visible={searching}
        onClose={() => setSearching(false)}
        onPick={(food) => {
          setSearching(false);
          setEditing({ draft: draftFromFood(food), index: null });
        }}
      />
      {editing ? (
        <FoodAmountSheet
          draft={editing.draft}
          saving={false}
          saveLabel={editing.index === null ? 'Add' : 'Save'}
          hideCalories={calm}
          onClose={() => setEditing(null)}
          onSave={(grams) => {
            const next = { ...editing.draft, grams };
            setFoods((current) =>
              editing.index === null ? [...current, next] : current.map((food, i) => (i === editing.index ? next : food)),
            );
            setEditing(null);
          }}
          onRemove={
            editing.index === null
              ? undefined
              : () => {
                  setFoods((current) => current.filter((_, i) => i !== editing.index));
                  setEditing(null);
                }
          }
        />
      ) : null}
    </Screen>
  );
}
