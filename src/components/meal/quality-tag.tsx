import { Text, View } from 'react-native';

import { PROCESSING_LABELS, type Meal } from '@/shared/meals';

/**
 * Food-quality tag (V2 experiment, opt-in): how processed the meal is, the AI's one-line reason and
 * the added-sugar estimate. Deliberately neutral — the same grey for every level, no scores.
 */
export function QualityTag({ meal }: { meal: Pick<Meal, 'processing' | 'processingReason' | 'addedSugarG'> }) {
  if (!meal.processing) return null;
  return (
    <View className="gap-1.5 rounded-2xl bg-surface p-3.5">
      <View className="flex-row flex-wrap items-center gap-2">
        <View className="rounded-full border border-line bg-canvas px-3 py-1">
          <Text className="text-[13px] font-semibold text-ink">{PROCESSING_LABELS[meal.processing]}</Text>
        </View>
        {meal.addedSugarG !== null ? (
          <Text className="text-[13px] text-muted">Added sugar about {meal.addedSugarG} g</Text>
        ) : null}
      </View>
      {meal.processingReason ? <Text className="text-[14px] leading-5 text-ink">{meal.processingReason}</Text> : null}
      <Text className="text-[12px] leading-4 text-muted">A rough guide from the photo or description (beta).</Text>
    </View>
  );
}
