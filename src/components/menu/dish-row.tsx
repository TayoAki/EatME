import { Pressable, Text, View } from 'react-native';

import { FoodPicture } from '@/components/ui/food-picture';
import { cn } from '@/lib/cn';
import { foodPictureFor } from '@/shared/food-pictures';
import { FIT_WORDS } from '@/shared/menu-fit';
import type { MenuRow } from '@/shared/menus';

import { caloriesText, sourceText } from './format';

type DishRowProps = {
  row: MenuRow;
  /** Calm mode: words instead of numbers. */
  calm: boolean;
  first?: boolean;
  onPress: () => void;
};

/**
 * One dish of a menu list: a small food picture (never the chain's photo, 5.2.1), the dish, where its
 * numbers come from, one reason, and its calories (a range for an estimate) and protein.
 */
export function DishRow({ row, calm, first = false, onPress }: DishRowProps) {
  const details = [sourceText(row), row.serving, row.variant === 'half' ? 'Half portion' : null].filter(Boolean).join(' · ');
  const reason = calm ? FIT_WORDS[row.fit] : row.reason;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={calm ? `${row.name}. ${details}. ${reason}` : `${row.name}. ${details}. ${caloriesText(row)}, ${row.proteinG} g protein. ${reason}`}
      onPress={onPress}
      className={cn('flex-row items-center gap-3 py-3 active:opacity-60', !first && 'border-t border-line')}>
      <View className="h-12 w-12 items-center justify-center rounded-2xl bg-surface">
        <FoodPicture picture={foodPictureFor(row.name, 'menu')} size={32} />
      </View>
      <View className="min-w-0 flex-1">
        <Text numberOfLines={2} className="text-[15px] font-semibold leading-5 text-ink">
          {row.name}
        </Text>
        <Text numberOfLines={1} className="mt-0.5 text-[13px] text-muted">
          {details}
        </Text>
        <Text numberOfLines={2} className={cn('mt-0.5 text-[13px] leading-[18px]', row.overBudget ? 'text-muted' : 'text-ink')}>
          {reason}
        </Text>
      </View>
      {calm ? null : (
        <View className="items-end">
          <Text className="text-[15px] font-semibold text-ink">{caloriesText(row)}</Text>
          <Text className="mt-0.5 text-[13px] text-muted">{row.proteinG} g protein</Text>
        </View>
      )}
    </Pressable>
  );
}
