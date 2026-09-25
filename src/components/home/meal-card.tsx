import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Flame, PenLine, UtensilsCrossed } from 'lucide-react-native';
import { useEffect } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/constants/colors';
import { formatTime } from '@/lib/time';
import type { Meal } from '@/shared/meals';

const THUMB = 88;

/** `cacheKey` keeps the photo cached although its signed link changes on every refresh. */
function Thumbnail({
  uri,
  cacheKey,
  dimmed,
  described,
}: {
  uri: string | null;
  cacheKey: string;
  dimmed?: boolean;
  /** Logged in words: a pen instead of the plate icon. */
  described?: boolean;
}) {
  return (
    <View style={{ width: THUMB, height: THUMB }} className="overflow-hidden rounded-2xl bg-surface">
      {uri ? (
        <Image source={{ uri, cacheKey }} style={{ width: THUMB, height: THUMB }} contentFit="cover" transition={200} />
      ) : (
        <View className="flex-1 items-center justify-center">
          {described ? <PenLine size={26} color={colors.faint} /> : <UtensilsCrossed size={28} color={colors.faint} />}
        </View>
      )}
      {dimmed ? (
        <View className="absolute inset-0 items-center justify-center bg-black/35">
          <ActivityIndicator color={colors.canvas} />
        </View>
      ) : null}
    </View>
  );
}

function MacroValue({ color, value }: { color: string; value: number | null }) {
  return (
    <View className="flex-row items-center gap-1.5">
      <View style={{ backgroundColor: color }} className="h-2 w-2 rounded-full" />
      <Text className="text-[13px] text-ink">{value ?? 0}g</Text>
    </View>
  );
}

/** Pulsing gray bar used while a meal is being analyzed. */
export function SkeletonBar({ width, height = 12 }: { width: number | `${number}%`; height?: number }) {
  const opacity = useSharedValue(0.5);
  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 700 }), -1, true);
  }, [opacity]);
  const style = useAnimatedStyle(() => ({ opacity: opacity.value }));
  return <Animated.View style={[{ width, height, borderRadius: height, backgroundColor: colors.track }, style]} />;
}

export function MealCard({ meal }: { meal: Meal }) {
  const analyzing = meal.status === 'analyzing';
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={analyzing ? 'Meal being analyzed' : `${meal.name}, ${meal.calories} calories`}
      disabled={analyzing}
      onPress={() => router.push({ pathname: '/meal/[id]', params: { id: meal.id } })}
      className="flex-row gap-3.5 rounded-[22px] border border-line bg-canvas p-2.5 active:opacity-80">
      <Thumbnail uri={meal.imageUrl} cacheKey={meal.id} dimmed={analyzing} described={!meal.imageUrl && !!meal.note} />
      {analyzing ? (
        <View className="flex-1 justify-center gap-2.5 pr-2">
          <Text className="text-[16px] font-semibold text-ink">Analyzing…</Text>
          <SkeletonBar width="85%" />
          <SkeletonBar width="55%" />
        </View>
      ) : (
        <View className="flex-1 justify-center gap-1.5 pr-2">
          <View className="flex-row items-start gap-2">
            <Text numberOfLines={1} className="flex-1 text-[16px] font-semibold text-ink">
              {meal.name}
            </Text>
            <Text className="text-[13px] text-muted">{formatTime(meal.loggedAt)}</Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <Flame size={15} color={colors.ink} fill={colors.ink} />
            <Text className="text-[14px] text-ink">{meal.calories ?? 0} calories</Text>
          </View>
          <View className="flex-row gap-4">
            <MacroValue color={colors.protein} value={meal.proteinG} />
            <MacroValue color={colors.carbs} value={meal.carbsG} />
            <MacroValue color={colors.fat} value={meal.fatG} />
          </View>
        </View>
      )}
    </Pressable>
  );
}
