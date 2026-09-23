import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { Pencil, UtensilsCrossed, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import { ErrorScreen } from '@/components/full-screen-state';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { mealHeroUrl } from '@/lib/image-url';
import { useDeleteMeal, useMeal, useUpdateMeal } from '@/lib/queries';
import { formatDay, formatTime, toIsoDate } from '@/lib/time';
import type { Meal } from '@/shared/meals';

const digitsOnly = (text: string) => text.replace(/[^0-9]/g, '').slice(0, 5);

function NumberField({
  label,
  value,
  onChange,
  unit,
  dot,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit?: string;
  dot?: string;
}) {
  return (
    <View className="min-h-[60px] flex-row items-center gap-3">
      {dot ? <View style={{ backgroundColor: dot }} className="h-2.5 w-2.5 rounded-full" /> : null}
      <Text className="flex-1 text-[16px] text-muted">{label}</Text>
      <View className="h-12 w-[132px] flex-row items-center rounded-field border border-line px-3">
        <TextInput
          accessibilityLabel={label}
          value={value}
          onChangeText={(text) => onChange(digitsOnly(text))}
          keyboardType="number-pad"
          selectTextOnFocus
          className="min-w-0 flex-1 text-right text-[18px] font-semibold text-ink"
        />
        {unit ? <Text className="ml-1 text-[15px] text-muted">{unit}</Text> : null}
        <Pencil size={14} color={colors.muted} style={{ marginLeft: 8 }} />
      </View>
    </View>
  );
}

function MealEditor({ meal }: { meal: Meal }) {
  const update = useUpdateMeal(meal.id);
  const remove = useDeleteMeal();
  const [name, setName] = useState(meal.name ?? '');
  const [calories, setCalories] = useState(String(meal.calories ?? 0));
  const [protein, setProtein] = useState(String(meal.proteinG ?? 0));
  const [carbs, setCarbs] = useState(String(meal.carbsG ?? 0));
  const [fat, setFat] = useState(String(meal.fatG ?? 0));

  const save = () =>
    update.mutate(
      {
        name: name.trim() || 'Meal',
        calories: Number(calories || 0),
        proteinG: Number(protein || 0),
        carbsG: Number(carbs || 0),
        fatG: Number(fat || 0),
      },
      {
        onSuccess: () => {
          haptics.success();
          router.back();
        },
        onError: (error) => notify("We couldn't save your changes", error.message),
      },
    );

  const deleteMeal = async () => {
    const confirmed = await confirm({
      title: 'Delete this meal?',
      message: 'It will be removed from your log together with its photo.',
      confirmLabel: 'Delete',
      destructive: true,
    });
    if (!confirmed) return;
    remove.mutate(meal.id, {
      onSuccess: () => router.back(),
      onError: (error) => notify("We couldn't delete this meal", error.message),
    });
  };

  const hero = mealHeroUrl(meal.imageUrl);

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerClassName="px-5 pb-8" keyboardShouldPersistTaps="handled">
        <View className="overflow-hidden rounded-card bg-surface">
          {hero ? (
            <Image source={{ uri: hero }} style={{ width: '100%', aspectRatio: 4 / 3 }} contentFit="cover" />
          ) : (
            <View className="aspect-[4/3] items-center justify-center">
              <UtensilsCrossed size={40} color={colors.faint} />
            </View>
          )}
        </View>

        <View className="mt-5 flex-row items-center gap-3">
          <TextInput
            accessibilityLabel="Meal name"
            value={name}
            onChangeText={setName}
            maxLength={80}
            className="min-w-0 flex-1 text-[28px] font-bold tracking-tight text-ink"
          />
          <Pencil size={20} color={colors.ink} />
        </View>
        <Text className="mt-1 text-[15px] text-muted">
          {formatDay(toIsoDate(new Date(meal.loggedAt)))} · {formatTime(meal.loggedAt)}
        </Text>

        <View className="mt-5 rounded-card border border-line px-4 py-2">
          <NumberField label="Calories" value={calories} onChange={setCalories} />
          <View className="h-px bg-line" />
          <NumberField label="Protein" value={protein} onChange={setProtein} unit="g" dot={colors.protein} />
          <NumberField label="Carbs" value={carbs} onChange={setCarbs} unit="g" dot={colors.carbs} />
          <NumberField label="Fats" value={fat} onChange={setFat} unit="g" dot={colors.fat} />
        </View>

        <Button title="Save changes" className="mt-6" loading={update.isPending} onPress={save} />
        <Button
          title="Delete meal"
          variant="danger"
          className="mt-2"
          loading={remove.isPending}
          onPress={() => void deleteMeal()}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default function MealDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meal = useMeal(id);

  return (
    <Screen>
      <View className="h-14 flex-row items-center justify-between px-5">
        <IconButton accessibilityLabel="Close" icon={<X size={20} color={colors.ink} />} onPress={() => router.back()} />
        <Text className="text-[17px] font-semibold text-ink">Meal</Text>
        <View className="w-10" />
      </View>
      {meal.isPending ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color={colors.ink} />
        </View>
      ) : meal.isError ? (
        <ErrorScreen
          title="We couldn't load this meal"
          message={meal.error.message}
          onRetry={() => void meal.refetch()}
          secondaryAction={{ label: 'Close', onPress: () => router.back() }}
        />
      ) : (
        <MealEditor key={meal.data.meal.id} meal={meal.data.meal} />
      )}
    </Screen>
  );
}
