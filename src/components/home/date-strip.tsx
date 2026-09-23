import { useMemo, useRef } from 'react';
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
  // Weeks start on Monday.
  const mondayOffset = (today.getDay() + 6) % 7;
  const firstDay = addDays(today, -mondayOffset - WEEKS_BACK * 7);
  return Array.from({ length: (WEEKS_BACK + 1) * 7 }, (_, i) => {
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
};

/** Horizontal week strip. Scroll back up to two weeks; future days are shown but not selectable. */
export function DateStrip({ selected, onSelect, loggedDates }: DateStripProps) {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<Day>>(null);
  const days = useMemo(() => buildDays(), []);
  const logged = useMemo(() => new Set(loggedDates), [loggedDates]);
  const todayIso = toIsoDate(new Date());

  const weekWidth = width - H_PADDING * 2;
  const dayWidth = weekWidth / 7;

  return (
    <FlatList
      ref={listRef}
      horizontal
      data={days}
      keyExtractor={(d) => d.iso}
      showsHorizontalScrollIndicator={false}
      snapToInterval={weekWidth}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: H_PADDING }}
      getItemLayout={(_, index) => ({ length: dayWidth, offset: dayWidth * index, index })}
      initialScrollIndex={WEEKS_BACK * 7}
      extraData={`${selected}|${loggedDates.join(',')}`}
      renderItem={({ item }) => {
        const isSelected = item.iso === selected;
        const isToday = item.iso === todayIso;
        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected, disabled: item.isFuture }}
            accessibilityLabel={item.iso}
            disabled={item.isFuture}
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
                item.isFuture && 'text-faint',
              )}>
              {item.weekday}
            </Text>
            <View
              className={cn(
                'h-10 w-10 items-center justify-center rounded-full',
                isSelected ? 'bg-ink' : 'border border-line',
                item.isFuture && 'border-dashed',
              )}>
              <Text
                className={cn(
                  'text-[15px] font-medium',
                  isSelected ? 'text-white' : item.isFuture ? 'text-faint' : 'text-ink',
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
