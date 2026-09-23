import * as Sentry from '@sentry/react-native';
import { useMutation } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { Flame, ImageOff, TriangleAlert } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SkeletonBar } from '@/components/home/meal-card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { colors } from '@/constants/colors';
import { ApiError, useApi, type ApiClient } from '@/lib/api';
import { haptics } from '@/lib/haptics';
import { uploadAndAnalyzeMeal } from '@/lib/meal-upload';
import { useInvalidateMeals } from '@/lib/queries';
import { useRunStatus } from '@/lib/use-run-status';
import { MEAL_ANALYSIS_STAGES, type Meal, type MealAnalysisStage } from '@/shared/meals';
import type { AnalyzeMealOutput, analyzeMeal } from '@/trigger/analyze-meal';

import type { Photo } from './camera-capture';

/** Polling fallback: the meal row tells us the outcome too (a deleted row means "not food"). */
async function pollMeal(api: ApiClient, id: string) {
  try {
    const { meal } = await api<{ meal: Meal }>(`/api/meals/${id}`);
    if (meal.status === 'completed') {
      return { status: 'COMPLETED', output: { status: 'completed', meal } as AnalyzeMealOutput, metadata: null };
    }
    return { status: meal.status === 'failed' ? 'FAILED' : 'EXECUTING', output: null, metadata: null };
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      const output: AnalyzeMealOutput = { status: 'not_food', reason: "That doesn't look like food." };
      return { status: 'COMPLETED', output, metadata: null };
    }
    throw error;
  }
}

const STAGE_PROGRESS: Partial<Record<MealAnalysisStage, number>> = {
  preparing: 30,
  identifying: 40,
  calculating: 75,
  saving: 92,
  done: 100,
};

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
 * Optimistic result card: the photo shows immediately, then the card fills in live while the
 * analyze-meal task runs on Trigger.dev.
 */
export function AnalysisView({ photo, onScanAnother, onDone, bottomSpace }: AnalysisViewProps) {
  const insets = useSafeAreaInsets();
  const api = useApi();
  const invalidateMeals = useInvalidateMeals();

  const upload = useMutation({
    mutationFn: () => uploadAndAnalyzeMeal(api, photo),
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

  const created = upload.data;
  const run = useRunStatus<typeof analyzeMeal, AnalyzeMealOutput>(
    created ? { runId: created.runId, publicAccessToken: created.publicAccessToken } : undefined,
    { queryKey: ['meal-run', created?.meal.id], fetch: () => pollMeal(api, created!.meal.id) },
  );

  const outcome = run.output;
  const failed = upload.isError || run.isFailed;
  const stage = (typeof run.metadata?.stage === 'string' ? run.metadata.stage : 'queued') as MealAnalysisStage;

  // Progress: time-based while waiting, jumps forward with each stage the task reports.
  const [progress, setProgress] = useState(4);
  useEffect(() => {
    if (failed) return;
    const timer = setInterval(() => {
      const elapsed = (Date.now() - startedAt.current) / 1000;
      const floor = outcome ? 100 : (STAGE_PROGRESS[stage] ?? 0);
      const waiting = 90 * (1 - Math.exp(-elapsed / 6));
      const target = outcome ? 100 : Math.min(95, Math.max(floor, waiting));
      setProgress((p) => (p >= target ? p : Math.min(target, p + (outcome ? 5 : 0.8))));
    }, 50);
    return () => clearInterval(timer);
  }, [failed, outcome, stage]);

  // Refresh the home screen once the meal is saved.
  const notified = useRef(false);
  useEffect(() => {
    if (!outcome || notified.current) return;
    notified.current = true;
    if (outcome.status === 'completed') {
      haptics.success();
      Sentry.logger.info('Meal analyzed', {
        mealId: outcome.meal.id,
        calories: outcome.meal.calories ?? 0,
        seconds: Math.round((Date.now() - startedAt.current) / 1000),
      });
    } else {
      haptics.warning();
      Sentry.logger.warn('Scanned photo is not food', { reason: outcome.reason });
    }
    void invalidateMeals();
  }, [outcome, invalidateMeals]);

  const failureLogged = useRef(false);
  useEffect(() => {
    if (!run.isFailed || failureLogged.current) return;
    failureLogged.current = true;
    Sentry.logger.error('Meal analysis failed', { runId: created?.runId ?? 'unknown', status: run.status ?? 'unknown' });
  }, [run.isFailed, run.status, created?.runId]);

  const stageLabel = upload.isPending ? 'Uploading your photo…' : MEAL_ANALYSIS_STAGES[stage];
  const meal = outcome?.status === 'completed' ? outcome.meal : null;

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
            </>
          ) : outcome?.status === 'not_food' ? (
            <View className="items-center py-2">
              <ImageOff size={32} color={colors.ink} />
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">
                That doesn&apos;t look like food
              </Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">{outcome.reason}</Text>
            </View>
          ) : failed ? (
            <View className="items-center py-2">
              <TriangleAlert size={32} color={colors.danger} />
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">
                We couldn&apos;t analyze this photo
              </Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">
                {upload.error?.message ?? 'Please try again with a clearer photo of your meal.'}
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

      {meal || outcome?.status === 'not_food' || failed ? (
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
