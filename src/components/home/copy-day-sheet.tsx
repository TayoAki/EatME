import { Check } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { DayChips } from '@/components/meal/day-chips';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useCopyDay, useMeals } from '@/lib/queries';
import { formatDay, formatTime } from '@/lib/time';

type CopyDaySheetProps = { visible: boolean; onClose: () => void; /** The day the meals are copied to. */ to: string };

/** "Copy meals from another day": pick one of the last 14 days, then which of its meals. */
export function CopyDaySheet({ visible, onClose, to }: CopyDaySheetProps) {
  const [from, setFrom] = useState<string | null>(null);
  const [skipped, setSkipped] = useState<Set<string>>(new Set());
  const meals = useMeals(from ?? to, !!from && visible);
  const copyDay = useCopyDay();
  const calm = useCalmMode();
  const list = from ? (meals.data?.meals ?? []).filter((meal) => meal.status === 'completed') : [];
  const chosen = list.filter((meal) => !skipped.has(meal.id));
  const target = formatDay(to);

  const close = () => {
    setFrom(null);
    setSkipped(new Set());
    onClose();
  };
  const toggle = (id: string) =>
    setSkipped((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const copy = () => {
    if (!from || chosen.length === 0) return;
    copyDay.mutate(
      { from, to, mealIds: chosen.length === list.length ? undefined : chosen.map((meal) => meal.id) },
      {
        onSuccess: () => {
          haptics.success();
          close();
        },
        onError: (error) => notify("We couldn't copy those meals", error.message),
      },
    );
  };

  return (
    <BottomSheet visible={visible} onClose={close}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Copy meals
      </Text>
      <Text className="mt-0.5 text-[14px] leading-5 text-muted">
        Pick a day, then the meals to add to {target === 'Today' || target === 'Yesterday' ? target.toLowerCase() : target}.
      </Text>
      <View className="mt-4">
        <DayChips
          selected={from}
          exclude={to}
          onSelect={(day) => {
            setFrom(day);
            setSkipped(new Set());
          }}
        />
      </View>

      <View className="mt-4" style={{ minHeight: 64 }}>
        {!from ? null : meals.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : list.length === 0 ? (
          <Text className="rounded-card bg-surface px-5 py-5 text-center text-[15px] text-muted">No meals logged on this day.</Text>
        ) : (
          <ScrollView style={{ maxHeight: 300 }} showsVerticalScrollIndicator={false}>
            <View className="gap-2">
              {list.map((meal) => {
                const selected = !skipped.has(meal.id);
                return (
                  <Pressable
                    key={meal.id}
                    accessibilityRole="checkbox"
                    accessibilityState={{ checked: selected }}
                    accessibilityLabel={calm ? `${meal.name}` : `${meal.name}, ${meal.calories} calories`}
                    onPress={() => {
                      haptics.selection();
                      toggle(meal.id);
                    }}
                    className="flex-row items-center gap-3 rounded-[18px] border border-line px-4 py-3 active:opacity-70">
                    <View
                      className={cn(
                        'h-6 w-6 items-center justify-center rounded-full border',
                        selected ? 'border-ink bg-ink' : 'border-line bg-canvas',
                      )}>
                      {selected ? <Check size={14} color={colors.canvas} strokeWidth={3} /> : null}
                    </View>
                    <View className="flex-1">
                      <Text numberOfLines={1} className="text-[16px] text-ink">
                        {meal.name}
                      </Text>
                      <Text className="text-[13px] text-muted">
                        {formatTime(meal.loggedAt)}
                        {calm ? '' : ` · ${meal.calories} cal`}
                      </Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>

      <Button
        title={chosen.length === 1 ? 'Copy 1 meal' : `Copy ${chosen.length} meals`}
        className="mt-4"
        disabled={chosen.length === 0}
        loading={copyDay.isPending}
        onPress={copy}
      />
    </BottomSheet>
  );
}
