import { Flame, Minus, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { MacroBox } from '@/components/scan/analysis-view';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useRestaurantItem } from '@/lib/queries';
import { countLabel, RESTAURANT_COUNTS, type PlateLine, type RestaurantItem, type RestaurantServing } from '@/shared/restaurants';

import { FatSecretCredit } from './fatsecret-credit';

type RestaurantItemSheetProps = {
  item: RestaurantItem;
  /** "Add to plate" in a menu, "Log it" from search. */
  actionLabel: string;
  onAction: (line: PlateLine) => void;
  onClose: () => void;
  /** From search: open the chain's whole menu. */
  onOpenMenu?: () => void;
  busy?: boolean;
  /** Editing a line already on the plate. */
  initial?: { servingId: string; count: number };
};

const servingLabel = (serving: RestaurantServing) =>
  serving.grams && !/^\d+(\.\d+)?\s*(g|ml)$/i.test(serving.description) ? `${serving.description} · ${Math.round(serving.grams)} g` : serving.description;

/** A menu item: pick the serving and how many (½ to 4), see its numbers, add it. */
export function RestaurantItemSheet({ item, actionLabel, onAction, onClose, onOpenMenu, busy = false, initial }: RestaurantItemSheetProps) {
  const detail = useRestaurantItem(item.id);
  const calm = useCalmMode();
  const servings = detail.data?.item.servings ?? [item.serving];
  const [servingId, setServingId] = useState(initial?.servingId ?? item.serving.id);
  const [count, setCount] = useState(initial?.count ?? 1);
  const serving = servings.find((s) => s.id === servingId) ?? servings[0];
  const step = RESTAURANT_COUNTS.indexOf(count as (typeof RESTAURANT_COUNTS)[number]);
  const times = (value: number) => Math.round(value * count);
  const extras = [
    serving.fiberG !== null ? `Fiber ${times(serving.fiberG)} g` : null,
    serving.sugarG !== null ? `Sugar ${times(serving.sugarG)} g` : null,
    serving.sodiumMg !== null ? `Sodium ${times(serving.sodiumMg).toLocaleString()} mg` : null,
  ].filter(Boolean);

  return (
    <BottomSheet visible onClose={onClose}>
      <Text numberOfLines={2} className="text-[22px] font-bold tracking-tight text-ink">
        {item.name}
      </Text>
      <Text className="mt-0.5 text-[14px] text-muted">{item.chain}</Text>

      <View className="mt-4 flex-row items-center gap-2">
        <Text className="text-[12px] font-semibold uppercase tracking-wider text-muted">Serving</Text>
        {detail.isFetching && !detail.data ? <ActivityIndicator size="small" color={colors.muted} /> : null}
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2" contentContainerClassName="gap-2">
        {servings.map((s) => (
          <Chip key={s.id} label={servingLabel(s)} selected={s.id === serving.id} onPress={() => setServingId(s.id)} />
        ))}
      </ScrollView>

      <View className="mt-4 flex-row items-center justify-between">
        <Text className="text-[16px] font-semibold text-ink">How many</Text>
        <View className="flex-row items-center gap-3">
          <IconButton
            accessibilityLabel="Fewer"
            icon={<Minus size={18} color={step > 0 ? colors.ink : colors.faint} />}
            disabled={step <= 0}
            onPress={() => setCount(RESTAURANT_COUNTS[step - 1])}
          />
          <Text accessibilityLabel={`${count} servings`} className="min-w-[36px] text-center text-[20px] font-bold text-ink">
            {countLabel(count)}
          </Text>
          <IconButton
            accessibilityLabel="More"
            icon={<Plus size={18} color={step < RESTAURANT_COUNTS.length - 1 ? colors.ink : colors.faint} />}
            disabled={step >= RESTAURANT_COUNTS.length - 1}
            onPress={() => setCount(RESTAURANT_COUNTS[step + 1])}
          />
        </View>
      </View>

      {calm ? null : (
        <>
          <View className="mt-4 flex-row items-end gap-2">
            <Flame size={26} color={colors.ink} fill={colors.ink} />
            <Text className="text-[36px] font-bold leading-[40px] tracking-tighter text-ink">{times(serving.calories)}</Text>
            <Text className="mb-1 text-[15px] text-muted">calories</Text>
          </View>
          <View className="mt-3 flex-row gap-2.5">
            <MacroBox label="Protein" value={times(serving.proteinG)} color={colors.protein} />
            <MacroBox label="Carbs" value={times(serving.carbsG)} color={colors.carbs} />
            <MacroBox label="Fats" value={times(serving.fatG)} color={colors.fat} />
          </View>
          {extras.length > 0 ? <Text className="mt-2.5 text-[13px] text-muted">{extras.join(' · ')}</Text> : null}
        </>
      )}

      <Button
        title={actionLabel}
        className="mt-5"
        loading={busy}
        onPress={() => onAction({ itemId: item.id, name: item.name, chain: item.chain, serving, count })}
      />
      {onOpenMenu ? <Button title={`See the ${item.chain} menu`} variant="ghost" size="md" className="mt-1" onPress={onOpenMenu} /> : null}
      <FatSecretCredit className="mt-3" />
    </BottomSheet>
  );
}
