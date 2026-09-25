import { Camera, Copy } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { ActivityIndicator, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DateStrip } from '@/components/home/date-strip';
import { FiberWaterRow } from '@/components/home/fiber-water-row';
import { HomeHeader } from '@/components/home/home-header';
import { MealCard } from '@/components/home/meal-card';
import { NutritionSummary, type Totals } from '@/components/home/nutrition-summary';
import { StreakSheet } from '@/components/home/streak-sheet';
import { WaterSheet } from '@/components/home/water-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useAddWater, useCopyDay, useMeals, useProfile, useStreak, useWater } from '@/lib/queries';
import { addDays, formatDay, todayIso, toIsoDate } from '@/lib/time';
import type { Profile } from '@/shared/user';

/** Space for the floating native tab bar so it never covers the last meal. */
const TAB_BAR_SPACE = 110;

export default function HomeScreen() {
  const profile = useProfile();
  return profile ? <Home profile={profile} /> : null;
}

function Home({ profile }: { profile: Profile }) {
  const insets = useSafeAreaInsets();
  const [selectedDate, setSelectedDate] = useState(todayIso);
  const [streakOpen, setStreakOpen] = useState(false);
  const [waterOpen, setWaterOpen] = useState(false);

  const meals = useMeals(selectedDate);
  const streak = useStreak();
  const water = useWater(selectedDate);
  const addWater = useAddWater(selectedDate);
  const copyDay = useCopyDay();
  const yesterday = toIsoDate(addDays(new Date(), -1));
  const yesterdayMeals = useMeals(yesterday);

  const targets: Totals = {
    calories: profile.dailyCalories ?? 2000,
    proteinG: profile.dailyProteinG ?? 120,
    carbsG: profile.dailyCarbsG ?? 220,
    fatG: profile.dailyFatG ?? 65,
  };

  const list = meals.data?.meals;
  const consumed = useMemo<Totals>(() => {
    const done = (list ?? []).filter((m) => m.status === 'completed');
    return {
      calories: done.reduce((sum, m) => sum + (m.calories ?? 0), 0),
      proteinG: done.reduce((sum, m) => sum + (m.proteinG ?? 0), 0),
      carbsG: done.reduce((sum, m) => sum + (m.carbsG ?? 0), 0),
      fatG: done.reduce((sum, m) => sum + (m.fatG ?? 0), 0),
    };
  }, [list]);
  // Meals logged before fiber tracking have no fiber estimate; they are left out of the total.
  const fiberG = (list ?? []).reduce((sum, m) => sum + (m.status === 'completed' ? (m.fiberG ?? 0) : 0), 0);

  const isToday = selectedDate === todayIso();
  const canCopyYesterday =
    isToday && list?.length === 0 && (yesterdayMeals.data?.meals.some((m) => m.status === 'completed') ?? false);

  const copyYesterday = () =>
    copyDay.mutate(
      { from: yesterday, to: selectedDate },
      {
        onSuccess: () => haptics.success(),
        onError: (error) => notify("We couldn't copy yesterday's meals", error.message),
      },
    );

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom + TAB_BAR_SPACE }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={meals.isRefetching || streak.isRefetching}
            onRefresh={() => {
              void meals.refetch();
              void streak.refetch();
              void water.refetch();
            }}
            tintColor={colors.ink}
          />
        }>
        <HomeHeader streak={streak.data?.current ?? 0} onStreakPress={() => setStreakOpen(true)} />

        <View className="mb-4 mt-2">
          <DateStrip selected={selectedDate} onSelect={setSelectedDate} loggedDates={streak.data?.loggedDates ?? []} />
        </View>

        <NutritionSummary consumed={consumed} targets={targets} />
        <FiberWaterRow
          fiberG={fiberG}
          fiberGoalG={profile.dailyFiberG}
          waterMl={water.data?.totalMl ?? 0}
          waterGoalMl={profile.dailyWaterMl}
          unit={profile.unitSystem}
          onAddWater={(ml) => addWater.mutate(ml, { onError: (error) => notify("We couldn't log that drink", error.message) })}
          onOpenWater={() => setWaterOpen(true)}
        />

        <View className="mt-7 px-5">
          <Text accessibilityRole="header" className="mb-3 text-[20px] font-bold tracking-tight text-ink">
            {isToday ? "Today's meals" : `Meals · ${formatDay(selectedDate)}`}
          </Text>

          {meals.isPending ? (
            <View className="items-center py-10">
              <ActivityIndicator color={colors.ink} />
            </View>
          ) : meals.isError ? (
            <View className="items-center rounded-card bg-surface px-6 py-8">
              <Text className="text-center text-[15px] text-muted">We couldn&apos;t load your meals.</Text>
              <Text className="mt-2 text-[15px] font-semibold text-ink" onPress={() => void meals.refetch()}>
                Try again
              </Text>
            </View>
          ) : list && list.length > 0 ? (
            <View className="gap-3">
              {list.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </View>
          ) : (
            <View className="items-center rounded-card bg-surface px-6 py-9">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-canvas">
                <Camera size={22} color={colors.ink} />
              </View>
              <Text className="mt-3 text-center text-[16px] font-semibold text-ink">
                {isToday ? "You haven't logged any meals yet" : 'No meals logged on this day'}
              </Text>
              <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
                {isToday ? 'Open the Scan tab and snap a photo of your food.' : 'Pick another day or scan a meal today.'}
              </Text>
              {canCopyYesterday ? (
                <Button
                  title="Copy yesterday's meals"
                  variant="outline"
                  size="md"
                  className="mt-4"
                  icon={<Copy size={16} color={colors.ink} />}
                  loading={copyDay.isPending}
                  onPress={copyYesterday}
                />
              ) : null}
            </View>
          )}
        </View>
      </ScrollView>

      <WaterSheet
        visible={waterOpen}
        onClose={() => setWaterOpen(false)}
        date={selectedDate}
        unit={profile.unitSystem}
        goalMl={profile.dailyWaterMl}
      />

      <StreakSheet
        visible={streakOpen}
        onClose={() => setStreakOpen(false)}
        streak={streak.data?.current ?? 0}
        loggedDates={streak.data?.loggedDates ?? []}
      />
    </View>
  );
}
