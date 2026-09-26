import { router } from 'expo-router';
import { Database, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useForgetPersonalFood, useUpdateMealItems } from '@/lib/queries';
import { toIsoDate } from '@/lib/time';
import type { FoodSummary, Meal, MealItem } from '@/shared/meals';
import type { FoodCorrection } from '@/shared/personal-foods';
import { distinctBrand, PRODUCT_SOURCE_LABELS } from '@/shared/products';
import { countLabel } from '@/shared/restaurants';

import { FatSecretCredit } from '../restaurants/fatsecret-credit';

import { FoodAmountSheet, type FoodDraft } from './food-amount-sheet';
import { FoodSearchSheet } from './food-search-sheet';

const packageLabel = (name: string, brand: string | null) =>
  ['Package label', distinctBrand({ name, brand })].filter(Boolean).join(' · ');

const draftFromItem = (item: MealItem): FoodDraft => ({
  id: item.id,
  foodId: item.foodId,
  name: item.name,
  foodName: item.foodName,
  product: item.product,
  personalFoodId: item.personalFoodId,
  restaurant: item.restaurant,
  grams: item.grams,
  kcalPerGram: item.grams > 0 ? item.calories / item.grams : 0,
  portions: item.portions,
});

/** "McDonald's menu · 2 × 1 sandwich". */
const menuLabel = (restaurant: NonNullable<MealItem['restaurant']>) =>
  `${restaurant.chain} menu · ${restaurant.count === 1 ? restaurant.serving : `${countLabel(restaurant.count)} × ${restaurant.serving}`}`;

const draftFromFood = (food: FoodSummary, keep?: FoodDraft): FoodDraft => ({
  id: keep?.id,
  foodId: food.id,
  name: keep?.name ?? food.description.split(',')[0],
  foodName: food.description,
  grams: keep?.grams ?? food.portions[0]?.[1] ?? 100,
  kcalPerGram: food.per100g.calories / 100,
  portions: food.portions,
});

/**
 * The foods of a meal with their weights. Changing a weight or a food recalculates the meal from
 * the USDA database; packaged products and AI estimates without a database food scale with their weight.
 */
/**
 * `showNumbers`: false in calm mode (grams stay, calories are hidden). `onCorrections` gets the
 * edits worth remembering (personal food memory).
 */
export function FoodsSection({
  meal,
  showNumbers = true,
  onCorrections,
}: {
  meal: Meal;
  showNumbers?: boolean;
  onCorrections?: (corrections: FoodCorrection[]) => void;
}) {
  const items = meal.items ?? [];
  const update = useUpdateMealItems(meal.id, onCorrections);
  const forget = useForgetPersonalFood();
  const [editing, setEditing] = useState<FoodDraft | null>(null);
  const [searching, setSearching] = useState<{ replace?: FoodDraft } | null>(null);

  const save = (list: { id?: string; foodId: number | null; name: string; grams: number }[], after?: () => void) =>
    update.mutate(
      { items: list.map(({ id, foodId, name, grams }) => ({ id, foodId, name, grams })) },
      {
        onSuccess: () => {
          haptics.success();
          after?.();
        },
        onError: (error) => notify("We couldn't update the foods", error.message),
      },
    );

  const saveDraft = (draft: FoodDraft, grams: number) => {
    const next = { ...draft, grams };
    const list = draft.id ? items.map((item) => (item.id === draft.id ? next : item)) : [...items, next];
    save(list, () => setEditing(null));
  };

  const remove = async (draft: FoodDraft) => {
    const ok = await confirm({ title: `Remove ${draft.name}?`, message: 'The meal is recalculated without it.', confirmLabel: 'Remove', destructive: true });
    if (ok) save(items.filter((item) => item.id !== draft.id), () => setEditing(null));
  };

  const forgetFood = async (draft: FoodDraft) => {
    if (!draft.personalFoodId) return;
    const ok = await confirm({
      title: `Forget ${draft.name}?`,
      message: 'EatME stops using your version next time. This meal stays as it is.',
      confirmLabel: 'Forget',
      destructive: true,
    });
    if (!ok) return;
    forget.mutate(draft.personalFoodId, {
      onSuccess: () => {
        haptics.success();
        setEditing(null);
      },
      onError: (error) => notify("We couldn't forget it", error.message),
    });
  };

  if (items.length === 0) return null;
  const share = Math.round((meal.matchedShare ?? 0) * 100);
  const packaged = items.every((item) => item.product);
  const fromMenus = items.some((item) => item.restaurant);
  const chains = [...new Set(items.flatMap((item) => (item.restaurant ? [item.restaurant.chain] : [])))];
  const logged = toIsoDate(new Date(meal.loggedAt));

  return (
    <View className="mt-5">
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-[15px] font-semibold text-ink">Foods</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add a food"
          hitSlop={8}
          onPress={() => setSearching({})}
          className="flex-row items-center gap-1 active:opacity-60">
          <Plus size={16} color={colors.ink} />
          <Text className="text-[15px] font-semibold text-ink">Add food</Text>
        </Pressable>
      </View>
      <View className="overflow-hidden rounded-card border border-line">
        {items.map((item, index) => {
          // A menu item without a weight is kept as logged (it follows the meal's portion): remove only.
          const weightless = !!item.restaurant && item.grams <= 0;
          const amount = weightless ? menuLabel(item.restaurant!) : `${item.grams} grams`;
          return (
            <Pressable
              key={item.id}
              accessibilityRole="button"
              accessibilityLabel={`${item.name}, ${amount}${showNumbers ? `, ${item.calories} calories` : ''}${
                weightless ? (items.length > 1 ? '. Remove' : '') : '. Edit'
              }`}
              disabled={weightless && items.length <= 1}
              onPress={() => (weightless ? void remove(draftFromItem(item)) : setEditing(draftFromItem(item)))}
              className={`min-h-[56px] flex-row items-center gap-3 px-4 py-2.5 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
              <View className="flex-1">
                <Text numberOfLines={1} className="text-[15px] text-ink">
                  {item.name}
                </Text>
                <View className="flex-row items-center gap-1.5">
                  {item.personalFoodId ? (
                    <View className="rounded-full bg-surface px-2 py-px">
                      <Text className="text-[11px] font-semibold text-ink">Your usual</Text>
                    </View>
                  ) : null}
                  <Text numberOfLines={1} className="flex-1 text-[12px] text-muted">
                    {item.foodName ??
                      (item.restaurant
                        ? menuLabel(item.restaurant)
                        : item.product
                          ? packageLabel(item.name, item.product.brand)
                          : item.personalFoodId
                            ? 'Your numbers'
                            : 'AI estimate')}
                  </Text>
                </View>
              </View>
              {weightless ? null : <Text className="text-[14px] text-muted">{item.grams} g</Text>}
              {showNumbers ? (
                <Text className="w-[64px] text-right text-[15px] font-semibold text-ink">{item.calories} kcal</Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>
      <Pressable
        accessibilityRole="link"
        onPress={() => router.push({ pathname: '/nutrients', params: { date: logged } })}
        className="mt-2 flex-row items-center gap-1.5 px-1 active:opacity-60">
        <Database size={13} color={colors.muted} />
        <Text className="flex-1 text-[12px] leading-4 text-muted">
          {packaged
            ? `Numbers from the package label (${PRODUCT_SOURCE_LABELS[items[0].product?.source ?? 'off']}). See the day's nutrients ›`
            : fromMenus
              ? `Numbers from the ${chains.join(' and ')} menu. See the day's nutrients ›`
              : share > 0
              ? `${share}% of the calories come from the USDA food database. See the day's vitamins and minerals ›`
              : 'These are AI estimates. Pick database foods for vitamins and minerals.'}
        </Text>
      </Pressable>

      {fromMenus ? <FatSecretCredit align="start" className="mt-1 px-1" /> : null}

      {editing && !searching ? (
        <FoodAmountSheet
          key={`${editing.id ?? 'new'}:${editing.foodId}`}
          draft={editing}
          hideCalories={!showNumbers}
          saving={update.isPending}
          onClose={() => setEditing(null)}
          onSave={(grams) => saveDraft(editing, grams)}
          onChangeFood={editing.id ? () => setSearching({ replace: editing }) : undefined}
          onRemove={editing.id && items.length > 1 ? () => void remove(editing) : undefined}
          onForget={editing.personalFoodId ? () => void forgetFood(editing) : undefined}
        />
      ) : null}
      <FoodSearchSheet
        visible={!!searching}
        title={searching?.replace ? `Replace ${searching.replace.name}` : 'Add a food'}
        onClose={() => setSearching(null)}
        onPick={(food) => {
          setEditing(draftFromFood(food, searching?.replace));
          setSearching(null);
        }}
      />
    </View>
  );
}
