import { useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import { haptics } from '@/lib/haptics';

type RulerPickerProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  /** Every n-th tick is tall and labelled. */
  majorEvery?: number;
  tickSpacing?: number;
  formatLabel?: (value: number) => string;
};

const TICK_WIDTH = 2;

/** Horizontal ruler: scroll the ticks under a fixed center line to pick a value. */
export function RulerPicker({
  min,
  max,
  step,
  value,
  onChange,
  majorEvery = 10,
  tickSpacing = 12,
  formatLabel = (v) => String(Math.round(v)),
}: RulerPickerProps) {
  const listRef = useRef<FlatList<number>>(null);
  const [width, setWidth] = useState(0);
  const didInitialScroll = useRef(false);
  const lastIndex = useRef(-1);

  const ticks = useMemo(() => {
    const count = Math.round((max - min) / step) + 1;
    return Array.from({ length: count }, (_, i) => i);
  }, [max, min, step]);

  const valueAt = (index: number) => Math.round((min + index * step) * 100) / 100;
  const indexOf = (v: number) => Math.min(ticks.length - 1, Math.max(0, Math.round((v - min) / step)));

  const onLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setWidth(w);
    if (!didInitialScroll.current && w > 0) {
      didInitialScroll.current = true;
      requestAnimationFrame(() =>
        listRef.current?.scrollToOffset({ offset: indexOf(value) * tickSpacing, animated: false }),
      );
    }
  };

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.min(
      ticks.length - 1,
      Math.max(0, Math.round(e.nativeEvent.contentOffset.x / tickSpacing)),
    );
    if (index !== lastIndex.current) {
      if (lastIndex.current !== -1) haptics.selection();
      lastIndex.current = index;
      const next = valueAt(index);
      if (next !== value) onChange(next);
    }
  };

  const sidePadding = Math.max(0, width / 2 - tickSpacing / 2);

  return (
    <View onLayout={onLayout} className="h-24 w-full justify-start">
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
          getItemLayout={(_, index) => ({ length: tickSpacing, offset: tickSpacing * index, index })}
          contentContainerStyle={{ paddingHorizontal: sidePadding }}
          initialNumToRender={Math.min(ticks.length, indexOf(value) + 40)}
          windowSize={9}
          renderItem={({ item: index }) => {
            const major = index % majorEvery === 0;
            const half = !major && index % (majorEvery / 2) === 0;
            return (
              <View style={{ width: tickSpacing }} className="items-center">
                <View
                  style={{ width: TICK_WIDTH, height: major ? 44 : half ? 32 : 22 }}
                  className="rounded-full bg-faint"
                />
                {major ? (
                  <Text numberOfLines={1} className="mt-2 w-12 text-center text-[13px] text-muted">
                    {formatLabel(valueAt(index))}
                  </Text>
                ) : null}
              </View>
            );
          }}
        />
      ) : null}
      <View
        pointerEvents="none"
        style={{ left: width / 2 - 1.5, width: 3, height: 56 }}
        className="absolute top-[-6px] rounded-full bg-ink"
      />
    </View>
  );
}
