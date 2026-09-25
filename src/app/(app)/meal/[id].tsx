import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { Pencil, PenLine, Repeat, ScanBarcode, Search, Star, UtensilsCrossed, X } from 'lucide-react-native';
import { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

import { ErrorScreen } from '@/components/full-screen-state';
import { FoodsSection } from '@/components/meal/foods-section';
import { QualityTag } from '@/components/meal/quality-tag';
import { ProteinHint } from '@/components/meal/protein-hint';
import { ServingsStepper } from '@/components/meal/servings-stepper';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { cn } from '@/lib/cn';
import { useDeleteMeal, useDuplicateMeal, useMeal, useProfile, useUpdateMeal } from '@/lib/queries';
import { formatDay, formatTime, toIsoDate } from '@/lib/time';
import { PORTION_OPTIONS, type Meal } from '@/shared/meals';

const PORTION_LABELS: Record<(typeof PORTION_OPTIONS)[number], string> = { 0.5: '½×', 1: '1×', 1.5: '1½×', 2: '2×' };

/** One-tap portion sizes; the server rescales every number from the original estimate. */
function PortionPicker({ meal }: { meal: Meal }) {
  const update = useUpdateMeal(meal.id);
  const custom = !PORTION_OPTIONS.includes(meal.portion as (typeof PORTION_OPTIONS)[number]);
  return (
    <View className="mt-5">
      <Text className="mb-2 text-[15px] font-semibold text-ink">
        Portion{custom ? ` · ${Math.round(meal.portion * 100) / 100}×` : ''}
      </Text>
      <View className="flex-row gap-2">
        {PORTION_OPTIONS.map((portion) => {
          const selected = meal.portion === portion;
          return (
            <Pressable
              key={portion}
              accessibilityRole="button"
              accessibilityLabel={`${portion} times the portion`}
              accessibilityState={{ selected, disabled: update.isPending }}
              disabled={update.isPending || selected}
              onPress={() => {
                haptics.selection();
                update.mutate({ portion }, { onError: (error) => notify("We couldn't change the portion", error.message) });
              }}
              className={cn(
                'h-11 flex-1 items-center justify-center rounded-2xl border',
                selected ? 'border-ink bg-ink' : 'border-line bg-canvas',
              )}>
              <Text className={cn('text-[15px] font-semibold', selected ? 'text-white' : 'text-ink')}>
                {PORTION_LABELS[portion]}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

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
  const duplicate = useDuplicateMeal();
  const profile = useProfile();
  const [name, setName] = useState(meal.name ?? '');
  const [calories, setCalories] = useState(String(meal.calories ?? 0));
  const [protein, setProtein] = useState(String(meal.proteinG ?? 0));
  const [carbs, setCarbs] = useState(String(meal.carbsG ?? 0));
  const [fat, setFat] = useState(String(meal.fatG ?? 0));
  const [fiber, setFiber] = useState(meal.fiberG === null ? '' : String(meal.fiberG));

  const logAgain = () =>
    duplicate.mutate(
      { id: meal.id },
      {
        onSuccess: () => {
          haptics.success();
          notify('Logged again', `${meal.name ?? 'This meal'} was added to today.`);
        },
        onError: (error) => notify("We couldn't log this meal again", error.message),
      },
    );

  const save = () =>
    update.mutate(
      {
        name: name.trim() || 'Meal',
        calories: Number(calories || 0),
        proteinG: Number(protein || 0),
        carbsG: Number(carbs || 0),
        fatG: Number(fat || 0),
        // Older meals have no fiber estimate: only send it once someone types a value.
        ...(fiber === '' ? {} : { fiberG: Number(fiber) }),
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

  const hero = meal.imageUrl;
  // Logged in words (or a copy of such a meal): the description takes the photo's place.
  const described = !meal.imageUrl && !!meal.note;
  // Logged by barcode or from the database search: a short line instead of an empty photo box.
  const items = meal.items ?? [];
  const fromBarcode = items.length > 0 && items.every((item) => item.product);
  const fromDatabase = meal.source === 'food';
  const barcodes = [...new Set(items.flatMap((item) => (item.product ? [item.product.code] : [])))];

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerClassName="px-5 pb-8" keyboardShouldPersistTaps="handled">
        {described ? (
          <View className="flex-row gap-3 rounded-card bg-surface p-4">
            <PenLine size={18} color={colors.muted} style={{ marginTop: 2 }} />
            <Text className="flex-1 text-[17px] leading-6 text-ink">{meal.note}</Text>
          </View>
        ) : !hero && (fromBarcode || fromDatabase) ? (
          <View className="flex-row gap-3 rounded-card bg-surface p-4">
            {fromBarcode ? (
              <ScanBarcode size={18} color={colors.muted} style={{ marginTop: 2 }} />
            ) : (
              <Search size={18} color={colors.muted} style={{ marginTop: 2 }} />
            )}
            <Text className="flex-1 text-[15px] leading-[21px] text-ink">
              {fromBarcode
                ? `Logged from a barcode (${barcodes.join(', ')}) with the numbers on the package.`
                : 'Logged from the USDA food database.'}
            </Text>
          </View>
        ) : (
          <View className="overflow-hidden rounded-card bg-surface">
            {hero ? (
              <Image
                source={{ uri: hero, cacheKey: meal.id }}
                style={{ width: '100%', aspectRatio: 4 / 3 }}
                contentFit="cover"
              />
            ) : (
              <View className="aspect-[4/3] items-center justify-center">
                <UtensilsCrossed size={40} color={colors.faint} />
              </View>
            )}
          </View>
        )}

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
        {meal.note && !described ? (
          <Text className="mt-2 text-[15px] leading-[21px] text-ink">
            <Text className="font-semibold">Your note: </Text>
            {meal.note}
          </Text>
        ) : null}
        {meal.confidence === 'low' ? (
          <View className="mt-3 rounded-2xl bg-surface p-3.5">
            <Text className="text-[14px] leading-5 text-ink">
              {described
                ? 'Rough estimate — the description left out amounts. Check the numbers or adjust the portion.'
                : "Rough estimate — the photo didn't show everything clearly. Check the numbers or adjust the portion."}
            </Text>
          </View>
        ) : null}

        {meal.servingSize ? (
          <View className="mt-5">
            <ServingsStepper meal={meal} />
          </View>
        ) : (
          <PortionPicker meal={meal} />
        )}

        <View className="mt-5 rounded-card border border-line px-4 py-2">
          <NumberField label="Calories" value={calories} onChange={setCalories} />
          <View className="h-px bg-line" />
          <NumberField label="Protein" value={protein} onChange={setProtein} unit="g" dot={colors.protein} />
          <NumberField label="Carbs" value={carbs} onChange={setCarbs} unit="g" dot={colors.carbs} />
          <NumberField label="Fats" value={fat} onChange={setFat} unit="g" dot={colors.fat} />
          <NumberField label="Fiber" value={fiber} onChange={setFiber} unit="g" dot={colors.fiber} />
        </View>

        {profile?.dailyProteinG ? (
          <View className="mt-4">
            <ProteinHint proteinG={meal.proteinG ?? 0} dailyProteinG={profile.dailyProteinG} />
          </View>
        ) : null}
        {profile?.preferences.foodQualityTag && meal.processing ? (
          <View className="mt-4">
            <QualityTag meal={meal} />
          </View>
        ) : null}

        <FoodsSection meal={meal} />

        <Button title="Save changes" className="mt-6" loading={update.isPending} onPress={save} />
        <Button
          title="Log again today"
          variant="secondary"
          className="mt-2"
          icon={<Repeat size={18} color={colors.ink} />}
          loading={duplicate.isPending}
          onPress={logAgain}
        />
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

function FavoriteButton({ meal }: { meal: Meal }) {
  const update = useUpdateMeal(meal.id);
  const favorite = meal.isFavorite;
  return (
    <IconButton
      accessibilityLabel={favorite ? 'Remove from favourites' : 'Add to favourites'}
      icon={<Star size={20} color={favorite ? colors.flame : colors.ink} fill={favorite ? colors.flame : 'transparent'} />}
      onPress={() => {
        haptics.selection();
        update.mutate(
          { isFavorite: !favorite },
          { onError: (error) => notify("We couldn't update your favourites", error.message) },
        );
      }}
    />
  );
}

export default function MealDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meal = useMeal(id);
  const loaded = meal.data?.meal;

  return (
    <Screen>
      <View className="h-14 flex-row items-center justify-between px-5">
        <IconButton accessibilityLabel="Close" icon={<X size={20} color={colors.ink} />} onPress={() => router.back()} />
        <Text className="text-[17px] font-semibold text-ink">Meal</Text>
        {loaded?.status === 'completed' ? <FavoriteButton meal={loaded} /> : <View className="w-10" />}
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
        // Re-mount whenever the meal changes on the server (portion, foods) so the fields show the
        // recalculated numbers instead of stale ones.
        <MealEditor key={`${meal.data.meal.id}:${meal.data.meal.updatedAt}`} meal={meal.data.meal} />
      )}
    </Screen>
  );
}
