import { router } from 'expo-router';
import { Camera, ChevronRight, Copy, Plus, Search } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DoseSheet } from '@/components/glp1/dose-sheet';
import { Glp1Card } from '@/components/glp1/glp1-card';
import { SymptomSheet } from '@/components/glp1/symptom-sheet';
import { DateStrip } from '@/components/home/date-strip';
import { FiberWaterRow } from '@/components/home/fiber-water-row';
import { HomeHeader } from '@/components/home/home-header';
import { ActivityRow } from '@/components/home/activity-row';
import { CheckInArea } from '@/components/home/checkin-card';
import { CopyDaySheet } from '@/components/home/copy-day-sheet';
import { MealCard } from '@/components/home/meal-card';
import { NutritionSummary, type Totals } from '@/components/home/nutrition-summary';
import { DraftDay, PlanTomorrowCard } from '@/components/home/plan-tomorrow';
import { PlannedCard } from '@/components/home/planned-card';
import { StreakSheet } from '@/components/home/streak-sheet';
import { SupplementsCard } from '@/components/home/supplements-card';
import { WaterSheet } from '@/components/home/water-sheet';
import { WeeklyCard, WeeklySheet } from '@/components/home/weekly-card';
import { QuickAddSheet } from '@/components/meal/quick-add-sheet';
import { SourcesLink, SourcesScreenLink } from '@/components/sources';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { useFlamie } from '@/lib/flamie';
import { haptics } from '@/lib/haptics';
import {
  useAddWater,
  useCopyDay,
  useGlp1,
  useMeals,
  useProfile,
  useStreak,
  useSupplements,
  useWater,
  useWeeklyInsights,
} from '@/lib/queries';
import { addDays, formatDay, todayIso, toIsoDate } from '@/lib/time';
import type { Spark } from '@/shared/flamie';
import type { Profile } from '@/shared/user';

/** Space for the floating native tab bar so it never covers the last meal. */
const TAB_BAR_SPACE = 110;

export default function HomeScreen() {
  const profile = useProfile();
  return profile ? <Home profile={profile} /> : null;
}

function Home({ profile }: { profile: Profile }) {
  const insets = useSafeAreaInsets();
  // Calm mode (Preferences): words instead of calorie and macro numbers, days logged instead of the streak.
  const calm = !!profile.preferences.calmMode;
  const [selectedDate, setSelectedDate] = useState(todayIso);
  const [streakOpen, setStreakOpen] = useState(false);
  const [waterOpen, setWaterOpen] = useState(false);
  const [weeklyOpen, setWeeklyOpen] = useState(false);
  const [doseOpen, setDoseOpen] = useState(false);
  const [symptomsOpen, setSymptomsOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);
  const [copyOpen, setCopyOpen] = useState(false);

  const meals = useMeals(selectedDate);
  const streak = useStreak();
  const water = useWater(selectedDate);
  const addWater = useAddWater(selectedDate);
  const copyDay = useCopyDay();
  const yesterday = toIsoDate(addDays(new Date(), -1));
  const yesterdayMeals = useMeals(yesterday);
  const weekly = useWeeklyInsights();
  const glp1 = useGlp1(!!profile.glp1);
  const supplements = useSupplements(selectedDate);
  // Two logged days are the least that says something about a week.
  const insights = weekly.data && weekly.data.daysLogged >= 2 ? weekly.data : null;

  // Flamie (FLAMIE.md): today's goals reached are its sparks, whichever day the strip shows.
  const today = todayIso();
  const todayMeals = useMeals(today);
  const todayWater = useWater(today);
  const sparks = useMemo<Spark[] | undefined>(() => {
    if (!todayMeals.data || !todayWater.data) return undefined;
    const done = todayMeals.data.meals.filter((m) => m.status === 'completed');
    const protein = done.reduce((sum, m) => sum + (m.proteinG ?? 0), 0);
    const fiber = done.reduce((sum, m) => sum + (m.fiberG ?? 0), 0);
    const reached: Spark[] = [];
    if (protein >= (profile.dailyProteinG ?? 120)) reached.push('protein');
    if (todayWater.data.totalMl >= profile.dailyWaterMl) reached.push('water');
    if (fiber >= profile.dailyFiberG) reached.push('fiber');
    return reached;
  }, [todayMeals.data, todayWater.data, profile.dailyProteinG, profile.dailyWaterMl, profile.dailyFiberG]);
  const flamie = useFlamie({ userId: profile.id, streak: streak.data, sparks, enabled: !calm });
  // A milestone opens the streak sheet once, with Flamie cheering; goals only cheer in the pill.
  const [openedFor, setOpenedFor] = useState(0);
  const [celebration, setCelebration] = useState<string | null>(null);
  if (flamie.cheering?.celebration.kind === 'milestone' && flamie.cheering.count !== openedFor) {
    setOpenedFor(flamie.cheering.count);
    setCelebration(flamie.cheering.text);
    setStreakOpen(true);
  }

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
  // Plan tomorrow: tomorrow can be picked in the date strip, and the evening brings the card.
  const tomorrow = toIsoDate(addDays(new Date(), 1));
  const isTomorrow = selectedDate === tomorrow;
  const evening = new Date().getHours() >= 17;
  // Vitamins and minerals come from database foods and from supplements ticked that day; the same
  // screen shows the day's alcohol.
  const hasNutrients =
    (list ?? []).some((m) => m.status === 'completed' && ((m.matchedShare ?? 0) > 0 || m.source === 'drink')) ||
    (supplements.data?.supplements.some((s) => s.taken) ?? false);
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
              void weekly.refetch();
              if (profile.glp1) void glp1.refetch();
            }}
            tintColor={colors.ink}
          />
        }>
        <HomeHeader
          streak={streak.data?.current ?? 0}
          daysLogged={streak.data?.totalDays ?? 0}
          calm={calm}
          flamie={{ mood: flamie.mood, stage: flamie.stage.key, line: flamie.line, cheerKey: flamie.cheering?.count, cheerText: flamie.cheering?.text }}
          onStreakPress={() => setStreakOpen(true)}
        />

        <View className="mb-4 mt-2">
          <DateStrip
            selected={selectedDate}
            onSelect={setSelectedDate}
            loggedDates={streak.data?.loggedDates ?? []}
            plannable={tomorrow}
          />
        </View>

        {isTomorrow ? (
          <DraftDay date={tomorrow} calm={calm} />
        ) : (
          <>
            {isToday && profile.glp1 && glp1.data?.settings ? (
              <Glp1Card
                glp1={glp1.data}
                proteinG={consumed.proteinG}
                proteinGoalG={targets.proteinG}
                fiberG={fiberG}
                fiberGoalG={profile.dailyFiberG}
                waterMl={water.data?.totalMl ?? 0}
                waterGoalMl={profile.dailyWaterMl}
                unit={profile.unitSystem}
                onLogDose={() => setDoseOpen(true)}
                onLogSymptoms={() => setSymptomsOpen(true)}
                calm={calm}
              />
            ) : null}

            {isToday ? <CheckInArea userId={profile.id} unit={profile.unitSystem} calm={calm} /> : null}

            <NutritionSummary consumed={consumed} targets={targets} calm={calm} />
            <FiberWaterRow
              fiberG={fiberG}
              fiberGoalG={profile.dailyFiberG}
              waterMl={water.data?.totalMl ?? 0}
              waterGoalMl={profile.dailyWaterMl}
              unit={profile.unitSystem}
              onAddWater={(ml) => addWater.mutate(ml, { onError: (error) => notify("We couldn't log that drink", error.message) })}
              onOpenWater={() => setWaterOpen(true)}
            />
            <ActivityRow date={selectedDate} />
            {isToday ? <SupplementsCard date={selectedDate} /> : null}
            {hasNutrients ? (
              <Pressable
                accessibilityRole="link"
                onPress={() => router.push({ pathname: '/nutrients', params: { date: selectedDate } })}
                className="mx-5 mt-3 flex-row items-center justify-between rounded-[20px] border border-line px-4 py-3 active:bg-surface">
                <Text className="text-[15px] font-semibold text-ink">Vitamins & minerals</Text>
                <ChevronRight size={18} color={colors.faint} />
              </Pressable>
            ) : null}
            <SourcesScreenLink label="Sources: how your goals are worked out" className="mx-5 mt-2" />
            {isToday && evening ? <PlanTomorrowCard tomorrow={tomorrow} calm={calm} onOpen={() => setSelectedDate(tomorrow)} /> : null}

            <View className="mt-7 px-5">
              <View className="mb-3 flex-row items-center justify-between gap-3">
                <Text accessibilityRole="header" className="flex-1 text-[20px] font-bold tracking-tight text-ink">
                  {isToday ? "Today's meals" : `Meals · ${formatDay(selectedDate)}`}
                </Text>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Copy meals from another day"
                  hitSlop={6}
                  onPress={() => setCopyOpen(true)}
                  className="h-9 w-9 items-center justify-center rounded-full active:bg-surface">
                  <Copy size={18} color={colors.ink} />
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Quick add"
                  hitSlop={10}
                  onPress={() => setQuickOpen(true)}
                  className="flex-row items-center gap-1 active:opacity-60">
                  <Plus size={17} color={colors.ink} strokeWidth={2.4} />
                  <Text className="text-[15px] font-semibold text-ink">Quick add</Text>
                </Pressable>
              </View>

              {/* Look a food up and log it without the Scan tab, on the day shown. */}
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={isToday ? 'Search foods' : `Search foods to log for ${formatDay(selectedDate)}`}
                onPress={() => router.push({ pathname: '/search', params: isToday ? {} : { date: selectedDate } })}
                className="mb-3 h-12 flex-row items-center gap-2 rounded-field bg-surface px-4 active:opacity-70">
                <Search size={18} color={colors.muted} />
                <Text className="text-[16px] text-muted">Search foods</Text>
              </Pressable>

              {isToday ? <PlannedCard date={selectedDate} calm={calm} /> : null}

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
                    <MealCard key={meal.id} meal={meal} showQuality={!!profile.preferences.foodQualityTag} calm={calm} />
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

            {isToday && insights ? (
              <View className="mt-7 px-5">
                <WeeklyCard insights={insights} onPress={() => setWeeklyOpen(true)} calm={calm} />
                <SourcesLink topic="weekly" className="mt-2" />
              </View>
            ) : null}
          </>
        )}
      </ScrollView>

      <WaterSheet
        visible={waterOpen}
        onClose={() => setWaterOpen(false)}
        date={selectedDate}
        unit={profile.unitSystem}
        goalMl={profile.dailyWaterMl}
      />

      {insights ? (
        <WeeklySheet
          visible={weeklyOpen}
          onClose={() => setWeeklyOpen(false)}
          insights={insights}
          unit={profile.unitSystem}
          calm={calm}
        />
      ) : null}

      {profile.glp1 ? (
        <>
          <DoseSheet
            key={glp1.data?.doses[0]?.id ?? 'first-dose'}
            visible={doseOpen}
            onClose={() => setDoseOpen(false)}
            medication={profile.glp1.medication}
            glp1={glp1.data}
          />
          <SymptomSheet visible={symptomsOpen} onClose={() => setSymptomsOpen(false)} />
        </>
      ) : null}

      <QuickAddSheet visible={quickOpen} onClose={() => setQuickOpen(false)} date={selectedDate} />
      <CopyDaySheet visible={copyOpen} onClose={() => setCopyOpen(false)} to={selectedDate} />

      <StreakSheet
        visible={streakOpen}
        onClose={() => {
          setStreakOpen(false);
          setCelebration(null);
        }}
        streak={streak.data?.current ?? 0}
        loggedDates={streak.data?.loggedDates ?? []}
        calm={calm}
        daysLogged={streak.data?.totalDays ?? 0}
        flamie={{
          mood: flamie.mood,
          stage: flamie.stage,
          nextStage: flamie.nextStage,
          line: flamie.line,
          sparks: sparks ?? [],
          cheerKey: celebration && flamie.cheering?.count === openedFor ? openedFor : undefined,
          celebration: celebration ?? undefined,
        }}
      />
    </View>
  );
}
