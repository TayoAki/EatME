import { useMemo, useRef, useState } from 'react';
import { FlatList, Text, View, type NativeScrollEvent, type NativeSyntheticEvent } from 'react-native';

import { haptics } from '@/lib/haptics';

type RulerPickerProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  /** Values that are multiples of this get a tall, labelled tick (e.g. every 5 kg). */
  majorStep: number;
  tickSpacing?: number;
  formatLabel?: (value: number) => string;
};

const TICK_WIDTH = 2;
const LABEL_WIDTH = 60;
const HEIGHT = 96;

const isMultipleOf = (value: number, of: number) => Math.abs(value / of - Math.round(value / of)) < 1e-6;

/** Horizontal ruler: scroll the ticks under a fixed center line to pick a value. */
export function RulerPicker({
  min,
  max,
  step,
  value,
  onChange,
  majorStep,
  tickSpacing = 12,
  formatLabel = (v) => String(Math.round(v)),
}: RulerPickerProps) {
  const listRef = useRef<FlatList<number>>(null);
  const [width, setWidth] = useState(0);
  const didInitialScroll = useRef(false);
  const lastIndex = useRef(-1);

  const count = Math.round((max - min) / step) + 1;
  const ticks = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);

  const valueAt = (index: number) => Math.round((min + index * step) * 100) / 100;
  const indexOf = (v: number) => Math.min(count - 1, Math.max(0, Math.round((v - min) / step)));

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = indexOf(min + (e.nativeEvent.contentOffset.x / tickSpacing) * step);
    if (index === lastIndex.current) return;
    if (lastIndex.current !== -1) haptics.selection();
    lastIndex.current = index;
    const next = valueAt(index);
    if (next !== value) onChange(next);
  };

  // Padding so the first and last tick can reach the center line.
  const sidePadding = Math.max(0, width / 2 - tickSpacing / 2);

  return (
    <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)} style={{ height: HEIGHT }} className="w-full">
      {width > 0 ? (
        <FlatList
          ref={listRef}
          horizontal
          data={ticks}
          keyExtractor={(i) => String(i)}
          showsHorizontalScrollIndicator={false}
          snapToInterval={tickSpacing}
          decelerationRate="fast"
          scrollEventThrottle={16}
          onScroll={onScroll}
          onLayout={() => {
            if (didInitialScroll.current) return;
            didInitialScroll.current = true;
            listRef.current?.scrollToOffset({ offset: indexOf(value) * tickSpacing, animated: false });
          }}
          getItemLayout={(_, index) => ({ length: tickSpacing, offset: tickSpacing * index, index })}
          contentContainerStyle={{ paddingHorizontal: sidePadding }}
          initialNumToRender={Math.min(count, indexOf(value) + 40)}
          windowSize={9}
          renderItem={({ item: index }) => {
            const tickValue = valueAt(index);
            const major = isMultipleOf(tickValue, majorStep);
            const half = !major && isMultipleOf(tickValue, majorStep / 2);
            return (
              <View style={{ width: tickSpacing, height: HEIGHT }} className="items-center">
                <View
                  style={{ width: TICK_WIDTH, height: major ? 44 : half ? 32 : 22 }}
                  className="rounded-full bg-faint"
                />
                {major ? (
                  // Wider than the tick cell, centered under the tick.
                  <View
                    pointerEvents="none"
                    style={{ position: 'absolute', top: 54, left: tickSpacing / 2 - LABEL_WIDTH / 2, width: LABEL_WIDTH }}>
                    <Text className="text-center text-[13px] text-muted">{formatLabel(tickValue)}</Text>
                  </View>
                ) : null}
              </View>
            );
          }}
        />
      ) : null}
      <View
        pointerEvents="none"
        style={{ position: 'absolute', left: width / 2 - 1.5, top: -6, width: 3, height: 56 }}
        className="rounded-full bg-ink"
      />
    </View>
  );
}
