import * as Sentry from '@sentry/react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { Flame, ImageOff, TriangleAlert } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SkeletonBar } from '@/components/home/meal-card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { colors } from '@/constants/colors';
import { useApi } from '@/lib/api';
import { haptics } from '@/lib/haptics';
import { uploadMeal } from '@/lib/meal-upload';
import { useInvalidateMeals } from '@/lib/queries';
import { MEAL_ANALYSIS_STAGES, type Meal } from '@/shared/meals';

import type { Photo } from './camera-capture';

/** Stop waiting after this long; the analysis keeps running and the meal shows up on Home later. */
const GIVE_UP_AFTER_SECONDS = 90;

function MacroBox({ label, value, color }: { label: string; value: number | null; color: string }) {
  return (
    <View className="flex-1 rounded-2xl border border-line px-3 py-3">
      <View className="flex-row items-center gap-1.5">
        <View style={{ backgroundColor: color }} className="h-2 w-2 rounded-full" />
        <Text className="text-[13px] text-ink">{label}</Text>
      </View>
      <Text style={{ color }} className="mt-1 text-[24px] font-bold tracking-tight">
        {value ?? 0}
        <Text className="text-[16px]">g</Text>
      </Text>
    </View>
  );
}

type AnalysisViewProps = {
  photo: Photo;
  onScanAnother: () => void;
  onDone: () => void;
  bottomSpace: number;
};

/**
 * Optimistic result card: the photo shows immediately, then the card fills in when the server has
 * analyzed the meal (the app checks every 1.5 seconds).
 */
export function AnalysisView({ photo, onScanAnother, onDone, bottomSpace }: AnalysisViewProps) {
  const insets = useSafeAreaInsets();
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();

  const upload = useMutation({
    mutationFn: () => uploadMeal(api, photo),
    // Home shows the new meal as "Analyzing…" right away and keeps checking on it.
    onSuccess: () => void invalidateMeals(),
    onError: (error) => Sentry.logger.error('Meal upload failed', { error: error.message }),
  });
  const started = useRef(false);
  const startedAt = useRef(0);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    startedAt.current = Date.now();
    upload.mutate();
  });

  const mealId = upload.data?.id;
  const [elapsed, setElapsed] = useState(0);
  const timedOut = elapsed >= GIVE_UP_AFTER_SECONDS;
  const result = useQuery({
    queryKey: ['meal-analysis', mealId],
    queryFn: () => api<{ meal: Meal }>(`/api/meals/${mealId}`),
    enabled: !!mealId && !timedOut,
    refetchInterval: (query) => (query.state.data?.meal.status === 'analyzing' || !query.state.data ? 1500 : false),
    retry: 2,
  });

  const analyzed = result.data?.meal;
  const outcome = analyzed && analyzed.status !== 'analyzing' ? analyzed : null;
  const failed = upload.isError || outcome?.status === 'failed' || (timedOut && !outcome);
  const done = outcome?.status === 'completed' || outcome?.status === 'not_food';

  // Progress: time-based while waiting, then fills up when the result arrives.
  const [progress, setProgress] = useState(4);
  useEffect(() => {
    if (failed) return;
    const timer = setInterval(() => {
      const seconds = (Date.now() - startedAt.current) / 1000;
      setElapsed(Math.floor(seconds));
      const target = done ? 100 : Math.min(95, 90 * (1 - Math.exp(-seconds / 6)));
      setProgress((p) => (p >= target ? p : Math.min(target, p + (done ? 5 : 0.8))));
    }, 50);
    return () => clearInterval(timer);
  }, [failed, done]);

  // Refresh the home screen once the meal is saved.
  const notified = useRef(false);
  useEffect(() => {
    if (!outcome || notified.current) return;
    notified.current = true;
    if (outcome.status === 'completed') {
      haptics.success();
      Sentry.logger.info('Meal analyzed', {
        mealId: outcome.id,
        calories: outcome.calories ?? 0,
        seconds: Math.round((Date.now() - startedAt.current) / 1000),
      });
    } else if (outcome.status === 'not_food') {
      haptics.warning();
      Sentry.logger.warn('Scanned photo is not food', { reason: outcome.error ?? 'unknown' });
    } else {
      Sentry.logger.error('Meal analysis failed', { mealId: outcome.id, error: outcome.error ?? 'unknown' });
    }
    void invalidateMeals();
  }, [outcome, invalidateMeals]);

  const stageLabel = upload.isPending
    ? 'Uploading your photo…'
    : [...MEAL_ANALYSIS_STAGES].reverse().find((stage) => elapsed >= stage.after)?.label;
  const meal = outcome?.status === 'completed' ? outcome : null;
  const notFood = outcome?.status === 'not_food' ? outcome : null;
  const failureMessage = upload.error?.message ?? (timedOut && !outcome
    ? 'This is taking longer than usual. Your meal will appear on Home when it is ready.'
    : 'Please try again with a clearer photo of your meal.');

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <ScrollView contentContainerClassName="px-5 pb-6" showsVerticalScrollIndicator={false}>
        <View className="items-center py-3">
          <Logo size={34} />
        </View>
        <View className="overflow-hidden rounded-card bg-surface">
          <Image source={{ uri: photo.uri }} style={{ width: '100%', aspectRatio: 4 / 3 }} contentFit="cover" />
        </View>

        <View className="mt-4 rounded-card border border-line bg-canvas p-5">
          {meal ? (
            <>
              <Text className="text-[26px] font-bold leading-8 tracking-tight text-ink">{meal.name}</Text>
              <View className="mt-3 flex-row items-end gap-2">
                <Flame size={30} color={colors.ink} fill={colors.ink} />
                <Text className="text-[44px] font-bold leading-[48px] tracking-tighter text-ink">{meal.calories}</Text>
                <Text className="mb-1.5 text-[16px] text-muted">calories</Text>
              </View>
              <View className="mt-5 flex-row gap-2.5">
                <MacroBox label="Protein" value={meal.proteinG} color={colors.protein} />
                <MacroBox label="Carbs" value={meal.carbsG} color={colors.carbs} />
                <MacroBox label="Fats" value={meal.fatG} color={colors.fat} />
              </View>
              <View className="mt-4 flex-row items-center gap-2">
                <View style={{ backgroundColor: colors.fiber }} className="h-2.5 w-2.5 rounded-full" />
                <Text className="text-[15px] text-ink">Fiber {meal.fiberG ?? 0} g</Text>
              </View>
              {meal.confidence === 'low' ? (
                <Text className="mt-2 text-[13px] leading-[18px] text-muted">
                  Rough estimate — the photo didn&apos;t show everything clearly. You can adjust it on the meal screen.
                </Text>
              ) : null}
            </>
          ) : notFood ? (
            <View className="items-center py-2">
              <ImageOff size={32} color={colors.ink} />
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">
                That doesn&apos;t look like food
              </Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">
                {notFood.error ?? 'Try a photo of your plate.'}
              </Text>
            </View>
          ) : failed ? (
            <View className="items-center py-2">
              <TriangleAlert size={32} color={colors.danger} />
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">
                We couldn&apos;t analyze this photo
              </Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">
                {failureMessage}
              </Text>
            </View>
          ) : (
            <>
              <View className="flex-row items-center gap-2.5">
                <ActivityIndicator color={colors.muted} />
                <Text className="text-[16px] text-muted">{stageLabel}</Text>
              </View>
              <View className="mt-5 gap-3">
                <SkeletonBar width="80%" height={18} />
                <SkeletonBar width="45%" height={14} />
              </View>
              <View className="mt-5 flex-row gap-2.5">
                {[0, 1, 2].map((i) => (
                  <View key={i} className="h-16 flex-1 justify-center gap-2 rounded-2xl border border-line px-3">
                    <SkeletonBar width="70%" height={8} />
                    <SkeletonBar width="50%" height={8} />
                  </View>
                ))}
              </View>
              <View className="mt-6 flex-row items-center gap-3">
                <View className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
                  <View style={{ width: `${progress}%` }} className="h-full rounded-full bg-ink" />
                </View>
                <Text className="w-10 text-right text-[14px] text-muted">{Math.round(progress)}%</Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      {meal || notFood || failed ? (
        <View className="flex-row gap-3 px-5 pt-3" style={{ paddingBottom: bottomSpace }}>
          <Button
            title={meal ? 'Scan another' : 'Retake'}
            variant="secondary"
            className="flex-1"
            onPress={onScanAnother}
          />
          {meal ? <Button title="Done" className="flex-1" onPress={onDone} /> : null}
        </View>
      ) : (
        <View style={{ height: bottomSpace }} />
      )}
    </View>
  );
}
