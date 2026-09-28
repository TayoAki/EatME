import { useEffect, useMemo, useRef } from 'react';
import { FlatList, Pressable, Text, useWindowDimensions, View } from 'react-native';

import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { addDays, toIsoDate } from '@/lib/time';

/** How many full weeks you can scroll back. */
const WEEKS_BACK = 2;
const H_PADDING = 20;

type Day = { iso: string; weekday: string; day: number; isFuture: boolean };

function buildDays(): Day[] {
  const today = new Date();
  const todayIso = toIsoDate(today);
  // Weeks start on Monday. On Sundays next week comes too, so tomorrow is there to plan.
  const mondayOffset = (today.getDay() + 6) % 7;
  const firstDay = addDays(today, -mondayOffset - WEEKS_BACK * 7);
  const weeks = WEEKS_BACK + (today.getDay() === 0 ? 2 : 1);
  return Array.from({ length: weeks * 7 }, (_, i) => {
    const date = addDays(firstDay, i);
    const iso = toIsoDate(date);
    return {
      iso,
      weekday: date.toLocaleDateString([], { weekday: 'short' }),
      day: date.getDate(),
      isFuture: iso > todayIso,
    };
  });
}

type DateStripProps = {
  selected: string;
  onSelect: (iso: string) => void;
  loggedDates: readonly string[];
  /** A future day that can be picked anyway: tomorrow, to plan it. */
  plannable?: string;
};

/**
 * Horizontal week strip. Scroll back up to two weeks; future days are shown but not selectable,
 * except `plannable` (tomorrow).
 */
export function DateStrip({ selected, onSelect, loggedDates, plannable }: DateStripProps) {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<Day>>(null);
  const days = useMemo(() => buildDays(), []);
  const logged = useMemo(() => new Set(loggedDates), [loggedDates]);
  const todayIso = toIsoDate(new Date());

  const weekWidth = width - H_PADDING * 2;
  const dayWidth = weekWidth / 7;

  // Picking a day in another week (tomorrow on a Sunday) brings that week into view.
  useEffect(() => {
    const index = days.findIndex((d) => d.iso === selected);
    if (index >= 0) listRef.current?.scrollToIndex({ index: Math.floor(index / 7) * 7, animated: true });
  }, [days, selected]);

  return (
    <FlatList
      ref={listRef}
      horizontal
      data={days}
      keyExtractor={(d) => d.iso}
      showsHorizontalScrollIndicator={false}
      snapToInterval={weekWidth}
      decelerationRate="fast"
      style={{ marginHorizontal: H_PADDING }}
      getItemLayout={(_, index) => ({ length: dayWidth, offset: dayWidth * index, index })}
      initialScrollIndex={WEEKS_BACK * 7}
      extraData={`${selected}|${loggedDates.join(',')}`}
      renderItem={({ item }) => {
        const isSelected = item.iso === selected;
        const isToday = item.iso === todayIso;
        const locked = item.isFuture && item.iso !== plannable;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected, disabled: locked }}
            accessibilityLabel={item.iso === plannable ? `${item.iso}, plan tomorrow` : item.iso}
            disabled={locked}
            onPress={() => {
              haptics.selection();
              onSelect(item.iso);
            }}
            style={{ width: dayWidth }}
            className="items-center gap-1.5 py-1">
            <Text
              className={cn(
                'text-[12px]',
                isSelected || isToday ? 'font-semibold text-ink' : 'text-muted',
                locked && 'text-faint',
              )}>
              {item.weekday}
            </Text>
            <View
              className={cn(
                'h-10 w-10 items-center justify-center rounded-full',
                isSelected ? 'bg-ink' : 'border border-line',
                item.isFuture && !isSelected && 'border-dashed',
                item.iso === plannable && !isSelected && 'border-muted',
              )}>
              <Text
                className={cn(
                  'text-[15px] font-medium',
                  isSelected ? 'text-white' : locked ? 'text-faint' : 'text-ink',
                )}>
                {item.day}
              </Text>
            </View>
            <View className={cn('h-1.5 w-1.5 rounded-full', logged.has(item.iso) ? 'bg-ink' : 'bg-transparent')} />
          </Pressable>
        );
      }}
    />
  );
}
