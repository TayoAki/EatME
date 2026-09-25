import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Star, UtensilsCrossed } from 'lucide-react-native';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDuplicateMeal, useFavorites } from '@/lib/queries';

type FavoritesSheetProps = { visible: boolean; onClose: () => void };

/** Favourite meals: one tap logs a copy for now — no photo, no AI, no waiting. */
export function FavoritesSheet({ visible, onClose }: FavoritesSheetProps) {
  const favorites = useFavorites();
  const duplicate = useDuplicateMeal();
  const list = favorites.data?.meals ?? [];

  const log = (id: string, name: string | null) =>
    duplicate.mutate(
      { id },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
          router.navigate('/');
        },
        onError: (error) => notify(`We couldn't log ${name ?? 'this meal'}`, error.message),
      },
    );

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="flex-row items-center gap-2">
        <Star size={22} color={colors.flame} fill={colors.flame} />
        <Text className="text-[22px] font-bold tracking-tight text-ink">Favourites</Text>
      </View>
      <Text className="mt-1 text-[14px] text-muted">Tap a meal to log it again now.</Text>

      <View className="mt-4" style={{ minHeight: 120 }}>
        {favorites.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : list.length === 0 ? (
          <View className="items-center rounded-card bg-surface px-6 py-7">
            <Text className="text-center text-[15px] font-semibold text-ink">No favourites yet</Text>
            <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
              Open a meal and tap the star to keep it here.
            </Text>
          </View>
        ) : (
          <ScrollView style={{ maxHeight: 380 }} showsVerticalScrollIndicator={false}>
            <View className="gap-2.5">
              {list.map((meal) => (
                <Pressable
                  key={meal.id}
                  accessibilityRole="button"
                  accessibilityLabel={`Log ${meal.name} again, ${meal.calories} calories`}
                  disabled={duplicate.isPending}
                  onPress={() => log(meal.id, meal.name)}
                  className="flex-row items-center gap-3 rounded-[20px] border border-line p-2 active:opacity-70">
                  <View className="h-14 w-14 overflow-hidden rounded-2xl bg-surface">
                    {meal.imageUrl ? (
                      <Image source={{ uri: meal.imageUrl, cacheKey: meal.id }} style={{ width: 56, height: 56 }} contentFit="cover" />
                    ) : (
                      <View className="flex-1 items-center justify-center">
                        <UtensilsCrossed size={20} color={colors.faint} />
                      </View>
                    )}
                  </View>
                  <View className="flex-1">
                    <Text numberOfLines={1} className="text-[16px] font-semibold text-ink">
                      {meal.name}
                    </Text>
                    <Text className="text-[13px] text-muted">
                      {meal.calories} cal · P {meal.proteinG}g · C {meal.carbsG}g · F {meal.fatG}g
                    </Text>
                  </View>
                  {duplicate.isPending && duplicate.variables?.id === meal.id ? (
                    <ActivityIndicator color={colors.ink} />
                  ) : null}
                </Pressable>
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </BottomSheet>
  );
}
