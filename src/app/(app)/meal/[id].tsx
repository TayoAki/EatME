import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import {
  BookmarkPlus,
  Brain,
  CalendarPlus,
  ChevronRight,
  Pencil,
  PenLine,
  Repeat,
  ScanBarcode,
  Search,
  SquarePlus,
  Star,
  UtensilsCrossed,
  X,
} from 'lucide-react-native';
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
import { CopyToDaySheet } from '@/components/meal/copy-to-day-sheet';
import { FoodsSection } from '@/components/meal/foods-section';
import { QualityTag } from '@/components/meal/quality-tag';
import { ProteinHint } from '@/components/meal/protein-hint';
import { RepeatSheet } from '@/components/meal/repeat-sheet';
import { ServingsStepper } from '@/components/meal/servings-stepper';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { ShowNumbers } from '@/components/ui/show-numbers';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { cn } from '@/lib/cn';
import {
  useCreateSavedMeal,
  useDeleteMeal,
  useDuplicateMeal,
  useMeal,
  useProfile,
  useRememberFoods,
  useSavedMeals,
  useUpdateMeal,
} from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { formatDay, formatTime, toIsoDate } from '@/lib/time';
import { PORTION_OPTIONS, type Meal } from '@/shared/meals';
import type { FoodCorrection } from '@/shared/personal-foods';
import { repeatDaysLabel, type MealRepeat } from '@/shared/saved-meals';

const PORTION_LABELS: Record<(typeof PORTION_OPTIONS)[number], string> = { 0.5: '½×', 1: '1×', 1.5: '1½×', 2: '2×' };

const repeatSummary = (repeat: MealRepeat | null) =>
  repeat
    ? `${repeatDaysLabel(repeat.weekdays)} at ${formatTimeOfDay({ hour: Number(repeat.time.slice(0, 2)), minute: Number(repeat.time.slice(3, 5)) })}`
    : 'Off';

/**
 * Personal food memory: after food edits, "Remember these next time?" (Rice → Brown rice, 250 g).
 * Saving is always the person's choice.
 */
function RememberCard({ corrections, onDone }: { corrections: FoodCorrection[]; onDone: () => void }) {
  const remember = useRememberFoods();
  return (
    <View className="mt-4 rounded-card border border-line p-4">
      <View className="flex-row items-center gap-2">
        <Brain size={18} color={colors.ink} />
        <Text className="text-[16px] font-semibold text-ink">Remember these next time?</Text>
      </View>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        When EatME sees them again, it uses your version and amount first.
      </Text>
      <View className="mt-2 gap-1">
        {corrections.map((c) => (
          <Text key={c.itemId} className="text-[15px] leading-[21px] text-ink">
            {c.from.toLowerCase() === c.to.toLowerCase() ? c.from : `${c.from} → ${c.to}`}
            {c.food ? <Text className="text-muted"> ({c.food})</Text> : null}, {c.grams} g
          </Text>
        ))}
      </View>
      <View className="mt-3 flex-row gap-2">
        <Button
          title="Remember"
          size="md"
          className="flex-1"
          loading={remember.isPending}
          onPress={() =>
            remember.mutate(
              { itemIds: corrections.map((c) => c.itemId) },
              {
                onSuccess: () => {
                  haptics.success();
                  onDone();
                },
                onError: (error) => notify("We couldn't remember them", error.message),
              },
            )
          }
        />
        <Button title="Not now" variant="secondary" size="md" className="flex-1" onPress={onDone} />
      </View>
    </View>
  );
}

/** Saved meals only: which days it is planned for (opens the repeat sheet). */
function RepeatRow({ meal }: { meal: Meal }) {
  const savedMeals = useSavedMeals();
  const [open, setOpen] = useState(false);
  const repeat = savedMeals.data?.meals.find((m) => m.id === meal.id)?.repeat ?? null;
  return (
    <>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Repeat: ${repeatSummary(repeat)}. Change`}
        onPress={() => setOpen(true)}
        className="mt-5 flex-row items-center gap-3 rounded-card border border-line px-4 py-4 active:bg-surface">
        <Repeat size={20} color={colors.ink} />
        <View className="flex-1">
          <Text className="text-[16px] font-semibold text-ink">Repeat</Text>
          <Text className="text-[14px] text-muted">{repeatSummary(repeat)}</Text>
        </View>
        <ChevronRight size={18} color={colors.faint} />
      </Pressable>
      {open ? <RepeatSheet visible savedMealId={meal.id} repeat={repeat} onClose={() => setOpen(false)} /> : null}
    </>
  );
}

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

type MealEditorProps = {
  meal: Meal;
  /** False in calm mode until the person taps "Show numbers". */
  showNumbers: boolean;
  onShowNumbers: () => void;
  /** Food edits worth remembering, kept by the screen (the editor re-mounts after each change). */
  corrections: FoodCorrection[];
  onCorrections: (corrections: FoodCorrection[] | null) => void;
};

function MealEditor({ meal, showNumbers, onShowNumbers, corrections, onCorrections }: MealEditorProps) {
  const update = useUpdateMeal(meal.id);
  const remove = useDeleteMeal();
  const duplicate = useDuplicateMeal();
  const createSaved = useCreateSavedMeal();
  const rememberFood = useRememberFoods();
  const profile = useProfile();
  const [copying, setCopying] = useState(false);
  // A saved meal (repeat meals) is a template: no day, no favourite, "Log it now" instead of "Log again".
  const saved = meal.status === 'saved';
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
          notify(saved ? 'Logged' : 'Logged again', `${meal.name ?? 'This meal'} was added to today.`);
        },
        onError: (error) => notify("We couldn't log this meal again", error.message),
      },
    );

  const saveAsMeal = () =>
    createSaved.mutate(
      { mealId: meal.id },
      {
        onSuccess: async ({ meal: savedMeal }) => {
          haptics.success();
          const repeat = await confirm({
            title: 'Saved as a meal',
            message: 'Find it under the star on the Scan tab. Do you want it planned on certain days?',
            confirmLabel: 'Repeat it',
          });
          if (repeat) router.push({ pathname: '/meal/[id]', params: { id: savedMeal.id } });
        },
        onError: (error) => notify("We couldn't save this meal", error.message),
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
    const confirmed = await confirm(
      saved
        ? {
            title: 'Delete this saved meal?',
            message: 'It stops repeating. Meals you already logged from it stay in your log.',
            confirmLabel: 'Delete',
            destructive: true,
          }
        : {
            title: 'Delete this meal?',
            message: 'It will be removed from your log together with its photo.',
            confirmLabel: 'Delete',
            destructive: true,
          },
    );
    if (!confirmed) return;
    remove.mutate(meal.id, {
      onSuccess: () => router.back(),
      onError: (error) => notify("We couldn't delete this meal", error.message),
    });
  };

  // "Save as my food": a quick add or label as one serving, or the one food of a meal.
  const mealItems = meal.items ?? [];
  const pending = corrections.filter((c) => mealItems.some((item) => item.id === c.itemId));
  const canRememberMeal = mealItems.length === 0 && (meal.source === 'quick' || meal.source === 'label') && meal.name !== 'Quick add';
  const canRememberItem = mealItems.length === 1 && !mealItems[0].personalFoodId;
  const saveAsMyFood = () =>
    rememberFood.mutate(canRememberMeal ? { mealId: meal.id } : { itemIds: [mealItems[0].id] }, {
      onSuccess: ({ remembered }) => {
        haptics.success();
        notify('Saved to Your foods', `EatME uses ${remembered[0]?.name ?? 'it'} first when it sees it again.`);
      },
      onError: (error) => notify("We couldn't save it", error.message),
    });

  const hero = meal.imageUrl;
  // Logged in words (or a copy of such a meal): the description takes the photo's place.
  const described = !meal.imageUrl && !!meal.note;
  // Logged by barcode or from the database search: a short line instead of an empty photo box.
  const items = meal.items ?? [];
  const fromBarcode = items.length > 0 && items.every((item) => item.product);
  const fromDatabase = meal.source === 'food';
  const quick = meal.source === 'quick';
  const barcodes = [...new Set(items.flatMap((item) => (item.product ? [item.product.code] : [])))];

  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerClassName="px-5 pb-8" keyboardShouldPersistTaps="handled">
        {described ? (
          <View className="flex-row gap-3 rounded-card bg-surface p-4">
            <PenLine size={18} color={colors.muted} style={{ marginTop: 2 }} />
            <Text className="flex-1 text-[17px] leading-6 text-ink">{meal.note}</Text>
          </View>
        ) : !hero && (fromBarcode || fromDatabase || quick) ? (
          <View className="flex-row gap-3 rounded-card bg-surface p-4">
            {fromBarcode ? (
              <ScanBarcode size={18} color={colors.muted} style={{ marginTop: 2 }} />
            ) : quick ? (
              <SquarePlus size={18} color={colors.muted} style={{ marginTop: 2 }} />
            ) : (
              <Search size={18} color={colors.muted} style={{ marginTop: 2 }} />
            )}
            <Text className="flex-1 text-[15px] leading-[21px] text-ink">
              {fromBarcode
                ? `Logged from a barcode (${barcodes.join(', ')}) with the numbers on the package.`
                : quick
                  ? 'Quick add: your own numbers, no AI.'
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
          {saved ? 'Saved meal' : `${formatDay(toIsoDate(new Date(meal.loggedAt)))} · ${formatTime(meal.loggedAt)}`}
        </Text>
        {saved ? <RepeatRow meal={meal} /> : null}
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

        {showNumbers ? (
          <View className="mt-5 rounded-card border border-line px-4 py-2">
            <NumberField label="Calories" value={calories} onChange={setCalories} />
            <View className="h-px bg-line" />
            <NumberField label="Protein" value={protein} onChange={setProtein} unit="g" dot={colors.protein} />
            <NumberField label="Carbs" value={carbs} onChange={setCarbs} unit="g" dot={colors.carbs} />
            <NumberField label="Fats" value={fat} onChange={setFat} unit="g" dot={colors.fat} />
            <NumberField label="Fiber" value={fiber} onChange={setFiber} unit="g" dot={colors.fiber} />
          </View>
        ) : (
          // Calm mode: fiber keeps its number.
          <View className="mt-5 gap-3">
            <ShowNumbers onPress={onShowNumbers} />
            <View className="rounded-card border border-line px-4 py-2">
              <NumberField label="Fiber" value={fiber} onChange={setFiber} unit="g" dot={colors.fiber} />
            </View>
          </View>
        )}

        {profile?.dailyProteinG && showNumbers ? (
          <View className="mt-4">
            <ProteinHint proteinG={meal.proteinG ?? 0} dailyProteinG={profile.dailyProteinG} />
          </View>
        ) : null}
        {profile?.preferences.foodQualityTag && meal.processing ? (
          <View className="mt-4">
            <QualityTag meal={meal} hideSugar={!showNumbers} />
          </View>
        ) : null}

        <FoodsSection meal={meal} showNumbers={showNumbers} onCorrections={onCorrections} />
        {pending.length > 0 && !saved ? <RememberCard corrections={pending} onDone={() => onCorrections(null)} /> : null}

        <Button title="Save changes" className="mt-6" loading={update.isPending} onPress={save} />
        <Button
          title={saved ? 'Log it now' : 'Log again today'}
          variant="secondary"
          className="mt-2"
          icon={<Repeat size={18} color={colors.ink} />}
          loading={duplicate.isPending}
          onPress={logAgain}
        />
        {saved ? null : (
          <View className="mt-2 flex-row gap-2">
            <Button
              title="Copy to…"
              accessibilityLabel="Copy to another day"
              variant="outline"
              size="md"
              className="flex-1 px-3"
              icon={<CalendarPlus size={17} color={colors.ink} />}
              onPress={() => setCopying(true)}
            />
            <Button
              title="Save as a meal"
              variant="outline"
              size="md"
              className="flex-1 px-3"
              icon={<BookmarkPlus size={17} color={colors.ink} />}
              loading={createSaved.isPending}
              onPress={saveAsMeal}
            />
          </View>
        )}
        {!saved && (canRememberMeal || canRememberItem) ? (
          <Button
            title="Save as my food"
            variant="outline"
            size="md"
            className="mt-2"
            icon={<Brain size={17} color={colors.ink} />}
            loading={rememberFood.isPending}
            onPress={saveAsMyFood}
          />
        ) : null}
        <Button
          title={saved ? 'Delete saved meal' : 'Delete meal'}
          variant="danger"
          className="mt-2"
          loading={remove.isPending}
          onPress={() => void deleteMeal()}
        />
      </ScrollView>
      {saved ? null : <CopyToDaySheet meal={meal} visible={copying} onClose={() => setCopying(false)} />}
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
  const profile = useProfile();
  // Kept here (not in the editor, which re-mounts after each change) so the numbers stay shown.
  const [revealed, setRevealed] = useState(false);
  const showNumbers = !profile?.preferences.calmMode || revealed;
  // Food edits worth remembering, newest per item.
  const [corrections, setCorrections] = useState<FoodCorrection[]>([]);
  const addCorrections = (next: FoodCorrection[] | null) =>
    setCorrections((current) =>
      next === null ? [] : [...current.filter((c) => !next.some((n) => n.itemId === c.itemId)), ...next],
    );

  return (
    <Screen>
      <View className="h-14 flex-row items-center justify-between px-5">
        <IconButton accessibilityLabel="Close" icon={<X size={20} color={colors.ink} />} onPress={() => router.back()} />
        <Text className="text-[17px] font-semibold text-ink">{loaded?.status === 'saved' ? 'Saved meal' : 'Meal'}</Text>
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
        <MealEditor
          key={`${meal.data.meal.id}:${meal.data.meal.updatedAt}`}
          meal={meal.data.meal}
          showNumbers={showNumbers}
          onShowNumbers={() => setRevealed(true)}
          corrections={corrections}
          onCorrections={addCorrections}
        />
      )}
    </Screen>
  );
}
