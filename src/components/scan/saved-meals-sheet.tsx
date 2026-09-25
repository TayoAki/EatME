import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ChevronRight, Plus, Repeat, Star, UtensilsCrossed } from 'lucide-react-native';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { useDuplicateMeal, useFavorites, useSavedMeals } from '@/lib/queries';
import type { Meal } from '@/shared/meals';
import { repeatDaysLabel, type SavedMeal } from '@/shared/saved-meals';

type SavedMealsSheetProps = { visible: boolean; onClose: () => void };

const repeatLabel = ({ weekdays, time }: NonNullable<SavedMeal['repeat']>) =>
  `${repeatDaysLabel(weekdays)} · ${formatTimeOfDay({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3, 5)) })}`;

function Thumb({ meal }: { meal: Meal }) {
  return (
    <View className="h-14 w-14 overflow-hidden rounded-2xl bg-surface">
      {meal.imageUrl ? (
        <Image source={{ uri: meal.imageUrl, cacheKey: meal.id }} style={{ width: 56, height: 56 }} contentFit="cover" />
      ) : (
        <View className="flex-1 items-center justify-center">
          <UtensilsCrossed size={20} color={colors.faint} />
        </View>
      )}
    </View>
  );
}

/**
 * Scan → star: saved meals (tap to log now, the arrow to edit or repeat it) and favourite logged
 * meals. One tap logs a copy — no photo, no AI, no waiting.
 */
export function SavedMealsSheet({ visible, onClose }: SavedMealsSheetProps) {
  const saved = useSavedMeals();
  const favorites = useFavorites();
  const duplicate = useDuplicateMeal();
  const calm = useCalmMode();
  const savedList = saved.data?.meals ?? [];
  const favoriteList = favorites.data?.meals ?? [];
  const loading = saved.isPending || favorites.isPending;

  const log = (meal: Meal) =>
    duplicate.mutate(
      { id: meal.id },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
          router.navigate('/');
        },
        onError: (error) => notify(`We couldn't log ${meal.name ?? 'this meal'}`, error.message),
      },
    );
  const open = (path: '/saved-meal/new' | `/meal/${string}`) => {
    onClose();
    router.push(path);
  };
  const numbers = (meal: Meal) => `${meal.calories} cal · P ${meal.proteinG}g · C ${meal.carbsG}g · F ${meal.fatG}g`;
  const busy = (meal: Meal) => duplicate.isPending && duplicate.variables?.id === meal.id;

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="flex-row items-center gap-2">
        <Star size={22} color={colors.flame} fill={colors.flame} />
        <Text accessibilityRole="header" className="flex-1 text-[22px] font-bold tracking-tight text-ink">
          Saved meals
        </Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="New meal"
          hitSlop={8}
          onPress={() => open('/saved-meal/new')}
          className="flex-row items-center gap-1 rounded-full bg-surface px-3.5 py-2 active:opacity-70">
          <Plus size={16} color={colors.ink} strokeWidth={2.4} />
          <Text className="text-[14px] font-semibold text-ink">New meal</Text>
        </Pressable>
      </View>
      <Text className="mt-1 text-[14px] text-muted">Tap a meal to log it now.</Text>

      <View className="mt-4" style={{ minHeight: 120 }}>
        {loading ? (
          <ActivityIndicator color={colors.ink} />
        ) : savedList.length === 0 && favoriteList.length === 0 ? (
          <View className="items-center rounded-card bg-surface px-6 py-7">
            <Text className="text-center text-[15px] font-semibold text-ink">No saved meals yet</Text>
            <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
              Open a meal and tap “Save as a meal”, or build one with New meal. Saved meals can repeat on chosen days.
            </Text>
          </View>
        ) : (
          <ScrollView style={{ maxHeight: 420 }} showsVerticalScrollIndicator={false}>
            <View className="gap-2.5">
              {savedList.map((meal) => (
                <View key={meal.id} className="flex-row items-center gap-1 rounded-[20px] border border-line p-2">
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={calm ? `Log ${meal.name} now` : `Log ${meal.name} now, ${meal.calories} calories`}
                    disabled={duplicate.isPending}
                    onPress={() => log(meal)}
                    className="flex-1 flex-row items-center gap-3 active:opacity-70">
                    <Thumb meal={meal} />
                    <View className="flex-1">
                      <Text numberOfLines={1} className="text-[16px] font-semibold text-ink">
                        {meal.name}
                      </Text>
                      {meal.repeat ? (
                        <View className="flex-row items-center gap-1">
                          <Repeat size={12} color={colors.muted} />
                          <Text numberOfLines={1} className="flex-1 text-[13px] text-muted">
                            {repeatLabel(meal.repeat)}
                          </Text>
                        </View>
                      ) : calm ? null : (
                        <Text numberOfLines={1} className="text-[13px] text-muted">
                          {numbers(meal)}
                        </Text>
                      )}
                    </View>
                    {busy(meal) ? <ActivityIndicator color={colors.ink} /> : null}
                  </Pressable>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Edit or repeat ${meal.name}`}
                    hitSlop={6}
                    onPress={() => open(`/meal/${meal.id}`)}
                    className="h-10 w-10 items-center justify-center rounded-full active:bg-surface">
                    <ChevronRight size={20} color={colors.faint} />
                  </Pressable>
                </View>
              ))}

              {favoriteList.length > 0 ? (
                <Text className="ml-1 mt-2 text-[15px] font-medium text-muted">Favourites</Text>
              ) : null}
              {favoriteList.map((meal) => (
                <Pressable
                  key={meal.id}
                  accessibilityRole="button"
                  accessibilityLabel={calm ? `Log ${meal.name} again` : `Log ${meal.name} again, ${meal.calories} calories`}
                  disabled={duplicate.isPending}
                  onPress={() => log(meal)}
                  className="flex-row items-center gap-3 rounded-[20px] border border-line p-2 active:opacity-70">
                  <Thumb meal={meal} />
                  <View className="flex-1">
                    <Text numberOfLines={1} className="text-[16px] font-semibold text-ink">
                      {meal.name}
                    </Text>
                    {calm ? null : <Text className="text-[13px] text-muted">{numbers(meal)}</Text>}
                  </View>
                  {busy(meal) ? <ActivityIndicator color={colors.ink} /> : null}
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </BottomSheet>
  );
}
