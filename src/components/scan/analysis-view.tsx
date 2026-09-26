import * as Sentry from '@sentry/react-native';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { CircleHelp, Crown, Flame, ImageOff, PenLine, ScanBarcode, Search, TriangleAlert } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SkeletonBar } from '@/components/home/meal-card';
import { ProteinHint } from '@/components/meal/protein-hint';
import { SugarHint } from '@/components/meal/sugar-hint';
import { FollowUpCard } from '@/components/meal/follow-up-card';
import { QualityTag } from '@/components/meal/quality-tag';
import { ServingsStepper } from '@/components/meal/servings-stepper';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { ShowNumbers } from '@/components/ui/show-numbers';
import { colors } from '@/constants/colors';
import { ApiError, useApi } from '@/lib/api';
import { useSession } from '@/lib/auth-client';
import { haptics } from '@/lib/haptics';
import { describeMeal, logFood, logProduct, uploadMeal } from '@/lib/meal-upload';
import { queryKeys, useInvalidateMeals, useProfile } from '@/lib/queries';
import { MEAL_ANALYSIS_STAGES, type FoodSummary, type Meal, type PhotoMode } from '@/shared/meals';
import { sugarNote } from '@/shared/nutrition';
import { distinctBrand, type Product } from '@/shared/products';

import type { Photo } from './camera-capture';

/** Stop waiting after this long; the analysis keeps running and the meal shows up on Home later. */
const GIVE_UP_AFTER_SECONDS = 90;

/**
 * What the user sent: a photo of a meal or label (with an optional note), a description, or —
 * logged right away without AI — a packaged product by its barcode or a database food.
 */
export type MealInput =
  | { kind: 'photo'; photos: Photo[]; mode: PhotoMode; note?: string }
  | { kind: 'text'; text: string }
  | { kind: 'barcode'; product: Product; grams: number }
  | { kind: 'food'; food: FoodSummary; grams: number };

const COPY = {
  photo: {
    first: 'Identifying your meal…',
    notFood: "That doesn't look like food",
    failed: "We couldn't analyze this photo",
    retry: 'Please try again with a clearer photo of your meal.',
  },
  label: {
    first: 'Reading the label…',
    notFood: "We couldn't read the label",
    failed: "We couldn't read this label",
    retry: 'Please try again with a sharp, straight photo of the nutrition facts.',
  },
  text: {
    first: 'Understanding your meal…',
    notFood: "That doesn't sound like food",
    failed: "We couldn't estimate this meal",
    retry: 'Please try again, or add a little more detail.',
  },
  barcode: {
    first: 'Saving…',
    notFood: '',
    failed: "We couldn't log this product",
    retry: 'Please try again.',
  },
  food: {
    first: 'Saving…',
    notFood: '',
    failed: "We couldn't log this food",
    retry: 'Please try again.',
  },
} as const;

/** Name and amount of a product or database food, where a photo would be. */
function LoggedFood({ icon, name, detail }: { icon: 'barcode' | 'food'; name: string; detail: string }) {
  return (
    <View className="flex-row gap-3 rounded-card bg-surface p-4">
      {icon === 'barcode' ? (
        <ScanBarcode size={18} color={colors.muted} style={{ marginTop: 2 }} />
      ) : (
        <Search size={18} color={colors.muted} style={{ marginTop: 2 }} />
      )}
      <View className="flex-1">
        <Text className="text-[17px] leading-6 text-ink">{name}</Text>
        <Text className="text-[14px] text-muted">{detail}</Text>
      </View>
    </View>
  );
}

export function MacroBox({ label, value, color }: { label: string; value: number | null; color: string }) {
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
  input: MealInput;
  onScanAnother: () => void;
  /** Back to the description to change it (text meals). */
  onEdit?: () => void;
  onDone: () => void;
  /** The server refused for lack of AI consent: show the consent screen for this meal. */
  onNeedsConsent?: () => void;
  bottomSpace: number;
};

/**
 * Optimistic result card: the photo (or description) shows immediately, then the card fills in when
 * the server has analyzed the meal (the app checks every 1.5 seconds).
 */
export function AnalysisView({ input, onScanAnother, onEdit, onDone, onNeedsConsent, bottomSpace }: AnalysisViewProps) {
  const insets = useSafeAreaInsets();
  const api = useApi();
  const { userId } = useSession();
  const profile = useProfile();
  const invalidateMeals = useInvalidateMeals();
  // Calm mode hides calorie and macro numbers until the person asks for them.
  const [revealed, setRevealed] = useState(false);
  const hideNumbers = !!profile?.preferences.calmMode && !revealed;
  const kind = input.kind === 'photo' ? (input.mode === 'label' ? 'label' : 'photo') : input.kind;
  const copy = COPY[kind];

  const upload = useMutation({
    mutationFn: () => {
      switch (input.kind) {
        case 'text':
          return describeMeal(api, input.text);
        case 'barcode':
          return logProduct(api, input.product.code, input.grams);
        case 'food':
          return logFood(api, input.food.id, input.grams);
        default:
          return uploadMeal(api, input.photos, { mode: input.mode, note: input.note });
      }
    },
    // Home shows the new meal as "Analyzing…" right away and keeps checking on it.
    onSuccess: () => void invalidateMeals(),
    onError: (error) => Sentry.logger.error('Meal upload failed', { kind, error: error.message }),
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
  // Same cache entry as the meal screen, so servings changes show up here too.
  const result = useQuery({
    queryKey: queryKeys.meal(userId, mealId ?? ''),
    queryFn: () => api<{ meal: Meal }>(`/api/meals/${mealId}`),
    enabled: !!mealId && !timedOut,
    refetchInterval: (query) => (query.state.data?.meal.status === 'analyzing' || !query.state.data ? 1500 : false),
    retry: 2,
  });

  const analyzed = result.data?.meal;
  const outcome = analyzed && analyzed.status !== 'analyzing' ? analyzed : null;
  const failed = upload.isError || outcome?.status === 'failed' || (timedOut && !outcome);
  // Payments on and today's free AI scans used: offer Premium instead of an error.
  const paywall = upload.error instanceof ApiError && upload.error.status === 402;
  // AI consent withdrawn (or new AI companies to name): ask again instead of an error.
  const needsConsent = upload.error instanceof ApiError && upload.error.code === 'ai_consent_required';
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
      // No meal numbers in diagnostics: they are health data.
      Sentry.logger.info('Meal analyzed', {
        kind,
        mealId: outcome.id,
        seconds: Math.round((Date.now() - startedAt.current) / 1000),
      });
    } else if (outcome.status === 'not_food') {
      haptics.warning();
      Sentry.logger.warn('Not food', { kind, reason: outcome.error ?? 'unknown' });
    } else {
      Sentry.logger.error('Meal analysis failed', { kind, mealId: outcome.id, error: outcome.error ?? 'unknown' });
    }
    void invalidateMeals();
  }, [outcome, invalidateMeals, kind]);

  const stageLabel = upload.isPending
    ? input.kind === 'text'
      ? 'Sending your description…'
      : input.kind === 'photo'
        ? input.photos.length > 1
          ? `Uploading your ${input.photos.length} photos…`
          : 'Uploading your photo…'
        : copy.first
    : elapsed < MEAL_ANALYSIS_STAGES[1].after
      ? copy.first
      : [...MEAL_ANALYSIS_STAGES].reverse().find((stage) => elapsed >= stage.after)?.label;
  // The result is read from the cache, which the servings stepper updates.
  const meal = analyzed?.status === 'completed' ? analyzed : null;
  // Sugary drinks and food get a note on quick sugar instead of the protein hint.
  const sugar = meal ? sugarNote(meal) : null;
  const notFood = outcome?.status === 'not_food' ? outcome : null;
  const failureMessage =
    upload.error?.message ??
    (timedOut && !outcome ? 'This is taking longer than usual. Your meal will appear on Home when it is ready.' : copy.retry);

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <ScrollView contentContainerClassName="px-5 pb-6" showsVerticalScrollIndicator={false}>
        <View className="items-center py-3">
          <Logo size={34} />
        </View>
        {input.kind === 'photo' ? (
          <View className="overflow-hidden rounded-card bg-surface">
            <Image source={{ uri: input.photos[0].uri }} style={{ width: '100%', aspectRatio: 4 / 3 }} contentFit="cover" />
            {input.photos.length > 1 ? (
              <View className="absolute bottom-3 right-3 flex-row gap-1.5">
                {input.photos.slice(1).map((photo) => (
                  <Image
                    key={photo.uri}
                    source={{ uri: photo.uri }}
                    style={{ width: 52, height: 52, borderRadius: 12, borderWidth: 2, borderColor: colors.canvas }}
                    contentFit="cover"
                  />
                ))}
              </View>
            ) : null}
          </View>
        ) : input.kind === 'barcode' ? (
          <LoggedFood
            icon="barcode"
            name={input.product.name}
            detail={[distinctBrand(input.product), `${input.grams} g`].filter(Boolean).join(' · ')}
          />
        ) : input.kind === 'food' ? (
          <LoggedFood icon="food" name={input.food.description} detail={`${input.grams} g · USDA food database`} />
        ) : (
          <View className="flex-row gap-3 rounded-card bg-surface p-4">
            <PenLine size={18} color={colors.muted} style={{ marginTop: 2 }} />
            <Text className="flex-1 text-[17px] leading-6 text-ink">{input.text}</Text>
          </View>
        )}

        <View className="mt-4 rounded-card border border-line bg-canvas p-5">
          {meal ? (
            <>
              <Text className="text-[26px] font-bold leading-8 tracking-tight text-ink">{meal.name}</Text>
              {hideNumbers ? (
                <View className="mt-3">
                  <ShowNumbers note="Saved to your day." onPress={() => setRevealed(true)} />
                </View>
              ) : (
                <>
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
              )}
              <View className="mt-4 flex-row items-center gap-2">
                <View style={{ backgroundColor: colors.fiber }} className="h-2.5 w-2.5 rounded-full" />
                <Text className="text-[15px] text-ink">Fiber {meal.fiberG ?? 0} g</Text>
              </View>
              {meal.servingSize ? (
                <View className="mt-4">
                  <ServingsStepper meal={meal} />
                </View>
              ) : null}
              {sugar ? (
                <View className="mt-4">
                  <SugarHint sugar={sugar} hideNumbers={hideNumbers} />
                </View>
              ) : profile?.dailyProteinG && !hideNumbers ? (
                <View className="mt-4">
                  <ProteinHint proteinG={meal.proteinG ?? 0} dailyProteinG={profile.dailyProteinG} />
                </View>
              ) : null}
              {profile?.preferences.foodQualityTag && meal.processing ? (
                <View className="mt-4">
                  <QualityTag meal={meal} hideSugar={hideNumbers} />
                </View>
              ) : null}
              {meal.confidence === 'low' ? (
                <Text className="mt-3 text-[13px] leading-[18px] text-muted">
                  {kind === 'text'
                    ? 'Rough estimate — amounts would make it more accurate. You can adjust it on the meal screen.'
                    : "Rough estimate — the photo didn't show everything clearly. You can adjust it on the meal screen."}
                </Text>
              ) : null}
            </>
          ) : notFood ? (
            <View className="items-center py-2">
              {kind === 'text' ? <CircleHelp size={32} color={colors.ink} /> : <ImageOff size={32} color={colors.ink} />}
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">{copy.notFood}</Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">
                {notFood.error ?? 'Try a photo of your plate.'}
              </Text>
            </View>
          ) : failed ? (
            <View className="items-center py-2">
              {paywall ? <Crown size={32} color={colors.ink} strokeWidth={1.8} /> : <TriangleAlert size={32} color={colors.danger} />}
              <Text className="mt-3 text-center text-[22px] font-bold tracking-tight text-ink">
                {paywall ? "That's today's free scans" : copy.failed}
              </Text>
              <Text className="mt-2 text-center text-[15px] leading-[21px] text-muted">{failureMessage}</Text>
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
        {meal?.followUp && meal.followUp.answer === null ? (
          <View className="mt-4">
            <FollowUpCard meal={meal} hideNumbers={hideNumbers} />
          </View>
        ) : null}
      </ScrollView>

      {meal || notFood || failed ? (
        <View className="flex-row gap-3 px-5 pt-3" style={{ paddingBottom: bottomSpace }}>
          {meal ? (
            <Button title="Log another" variant="secondary" className="flex-1" onPress={onScanAnother} />
          ) : input.kind === 'text' && onEdit ? (
            <Button title="Edit description" variant="secondary" className="flex-1" onPress={onEdit} />
          ) : (
            <Button title={input.kind === 'photo' ? 'Retake' : 'Back'} variant="secondary" className="flex-1" onPress={onScanAnother} />
          )}
          {meal ? <Button title="Done" className="flex-1" onPress={onDone} /> : null}
          {paywall ? <Button title="See Premium" className="flex-1" onPress={() => router.push('/premium')} /> : null}
          {needsConsent && onNeedsConsent ? <Button title="Review AI use" className="flex-1" onPress={onNeedsConsent} /> : null}
        </View>
      ) : (
        <View style={{ height: bottomSpace }} />
      )}
    </View>
  );
}
