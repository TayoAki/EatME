import { router } from 'expo-router';
import { ArrowLeft, Brain, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useForgetPersonalFood, usePersonalFoods, useUpdatePersonalFood } from '@/lib/queries';
import type { PersonalFood } from '@/shared/personal-foods';

const KIND_LABELS: Record<PersonalFood['kind'], string> = {
  food: 'USDA food',
  product: 'Package label',
  own: 'Your numbers',
  serving: 'One serving',
};

function describe(food: PersonalFood) {
  const amount = food.usualGrams === null ? '1 serving' : `${Math.round(food.usualGrams)} g`;
  return `${amount} · ${food.detail ?? KIND_LABELS[food.kind]}`;
}

/** Rename a remembered food, change its usual grams, or forget it. */
function EditFoodSheet({ food, onClose }: { food: PersonalFood; onClose: () => void }) {
  const update = useUpdatePersonalFood(food.id);
  const forget = useForgetPersonalFood();
  const [name, setName] = useState(food.name);
  const [grams, setGrams] = useState(food.usualGrams === null ? '' : String(Math.round(food.usualGrams)));
  const gramsValue = Number(grams);
  const gramsValid = food.usualGrams === null || (Number.isFinite(gramsValue) && gramsValue >= 1 && gramsValue <= 3000);
  const changed = name.trim() !== food.name || (food.usualGrams !== null && gramsValue !== Math.round(food.usualGrams));

  const save = () =>
    update.mutate(
      {
        ...(name.trim() !== food.name ? { name: name.trim() } : {}),
        ...(food.usualGrams !== null && gramsValue !== Math.round(food.usualGrams) ? { usualGrams: gramsValue } : {}),
      },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't save that", error.message),
      },
    );
  const remove = async () => {
    const ok = await confirm({
      title: `Forget ${food.name}?`,
      message: 'EatME stops using it. Meals you already logged keep their numbers.',
      confirmLabel: 'Forget',
      destructive: true,
    });
    if (!ok) return;
    forget.mutate(food.id, {
      onSuccess: () => {
        haptics.success();
        onClose();
      },
      onError: (error) => notify("We couldn't forget it", error.message),
    });
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        {food.name}
      </Text>
      <Text className="mt-0.5 text-[14px] text-muted">
        {food.detail ?? KIND_LABELS[food.kind]} · used {food.uses === 1 ? 'once' : `${food.uses} times`}
      </Text>
      <Text className="mt-4 text-[14px] font-medium text-muted">Name</Text>
      <TextInput
        accessibilityLabel="Name"
        value={name}
        onChangeText={(text) => setName(text.slice(0, 60))}
        className="mt-1 h-12 rounded-field border border-line px-4 text-[16px] text-ink"
      />
      {food.usualGrams !== null ? (
        <>
          <Text className="mt-3 text-[14px] font-medium text-muted">Usual amount (g)</Text>
          <TextInput
            accessibilityLabel="Usual grams"
            value={grams}
            onChangeText={(text) => setGrams(text.replace(/[^0-9]/g, '').slice(0, 4))}
            keyboardType="number-pad"
            className="mt-1 h-12 rounded-field border border-line px-4 text-[16px] text-ink"
          />
        </>
      ) : null}
      <Button
        title="Save"
        className="mt-5"
        disabled={!changed || !name.trim() || !gramsValid}
        loading={update.isPending}
        onPress={save}
      />
      <Button title="Forget this food" variant="danger" className="mt-2" loading={forget.isPending} onPress={() => void remove()} />
    </BottomSheet>
  );
}

/** Profile → Your foods: what personal food memory knows, to rename or forget. */
export default function PersonalFoodsScreen() {
  const foods = usePersonalFoods();
  const calm = useCalmMode();
  const [editing, setEditing] = useState<PersonalFood | null>(null);
  const list = foods.data?.foods ?? [];

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            Your foods
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Foods you asked EatME to remember. When the AI sees one again, EatME uses your version and your usual amount
            before the food database. Their names go along with your meal photos so the AI names them the same way.
          </Text>
        </View>

        {foods.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : foods.isError ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t load your foods.</Text>
        ) : list.length === 0 ? (
          <View className="items-center rounded-card bg-surface px-6 py-8">
            <Brain size={24} color={colors.ink} />
            <Text className="mt-3 text-center text-[16px] font-semibold text-ink">Nothing remembered yet</Text>
            <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
              When you correct a food in a meal, EatME asks whether to remember it. Quick adds and one-food meals have
              “Save as my food”.
            </Text>
          </View>
        ) : (
          <View className="overflow-hidden rounded-[20px] border border-line">
            {list.map((food, index) => (
              <Pressable
                key={food.id}
                accessibilityRole="button"
                accessibilityLabel={`${food.name}, ${describe(food)}${calm ? '' : `, ${food.calories} calories`}. Edit`}
                onPress={() => setEditing(food)}
                className={`min-h-[60px] flex-row items-center gap-3 px-4 py-3 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
                <View className="flex-1">
                  <Text numberOfLines={1} className="text-[16px] text-ink">
                    {food.name}
                  </Text>
                  <Text numberOfLines={2} className="text-[13px] leading-[18px] text-muted">
                    {describe(food)}
                  </Text>
                </View>
                {calm ? null : <Text className="text-[15px] font-semibold text-ink">{food.calories} kcal</Text>}
                <ChevronRight size={18} color={colors.faint} />
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
      {editing ? <EditFoodSheet key={editing.id} food={editing} onClose={() => setEditing(null)} /> : null}
    </Screen>
  );
}
