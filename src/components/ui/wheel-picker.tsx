import { memo, useCallback, useRef, useState } from 'react';
import {
  FlatList,
  Pressable,
  Text,
  View,
  type ListRenderItem,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';

import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

export type WheelItem<T> = { label: string; value: T };

type WheelPickerProps<T> = {
  items: readonly WheelItem<T>[];
  value: T;
  onChange: (value: T) => void;
  itemHeight?: number;
  visibleCount?: number;
  /** Small unit shown after the selected label (e.g. "cm"). */
  suffix?: string;
  /** Draw the gray selection band (turn off when several wheels share one band). */
  showBand?: boolean;
  accessibilityLabel?: string;
  className?: string;
};

/** iOS-style wheel picker built on a snapping FlatList — same look on iOS, Android and web. */
function WheelPickerInner<T>({
  items,
  value,
  onChange,
  itemHeight = 44,
  visibleCount = 7,
  suffix,
  showBand = true,
  accessibilityLabel,
  className,
}: WheelPickerProps<T>) {
  const listRef = useRef<FlatList<WheelItem<T>>>(null);
  const selectedIndex = Math.max(
    0,
    items.findIndex((item) => item.value === value),
  );
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const didInitialScroll = useRef(false);
  const padding = (itemHeight * (visibleCount - 1)) / 2;

  const indexFromOffset = useCallback(
    (y: number) => Math.min(items.length - 1, Math.max(0, Math.round(y / itemHeight))),
    [itemHeight, items.length],
  );

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = indexFromOffset(e.nativeEvent.contentOffset.y);
    if (index !== activeIndex) {
      setActiveIndex(index);
      haptics.selection();
    }
  };

  const commit = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = indexFromOffset(e.nativeEvent.contentOffset.y);
    setActiveIndex(index);
    if (items[index] && items[index].value !== value) onChange(items[index].value);
  };

  const scrollToIndex = (index: number, animated = true) =>
    listRef.current?.scrollToOffset({ offset: index * itemHeight, animated });

  const renderItem: ListRenderItem<WheelItem<T>> = ({ item, index }) => {
    const distance = Math.abs(index - activeIndex);
    return (
      <Pressable
        onPress={() => {
          scrollToIndex(index);
          setActiveIndex(index);
          onChange(item.value);
        }}
        style={{ height: itemHeight }}
        className="flex-row items-center justify-center">
        <Text
          className={cn(
            distance === 0 ? 'text-[22px] font-semibold text-ink' : 'text-[18px] text-muted',
          )}
          style={{ opacity: distance === 0 ? 1 : Math.max(0.35, 1 - distance * 0.18) }}>
          {item.label}
        </Text>
        {suffix ? (
          <Text className={cn('ml-1.5 text-[15px]', distance === 0 ? 'text-ink' : 'text-muted')}>
            {suffix}
          </Text>
        ) : null}
      </Pressable>
    );
  };

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ text: items[activeIndex]?.label }}
      style={{ height: itemHeight * visibleCount }}
      className={cn('relative', className)}>
      {showBand ? (
        <View
          pointerEvents="none"
          style={{ top: padding, height: itemHeight }}
          className="absolute left-0 right-0 rounded-xl bg-surface"
        />
      ) : null}
      <FlatList
        ref={listRef}
        data={items}
        keyExtractor={(item) => String(item.value)}
        renderItem={renderItem}
        extraData={activeIndex}
        getItemLayout={(_, index) => ({ length: itemHeight, offset: itemHeight * index, index })}
        contentContainerStyle={{ paddingVertical: padding }}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        decelerationRate="fast"
        scrollEventThrottle={16}
        onScroll={onScroll}
        onMomentumScrollEnd={commit}
        onScrollEndDrag={(e) => {
          // No momentum (slow drag) → commit right away; otherwise onMomentumScrollEnd will.
          if (Math.abs(e.nativeEvent.velocity?.y ?? 0) < 0.05) commit(e);
        }}
        onLayout={() => {
          if (didInitialScroll.current) return;
          didInitialScroll.current = true;
          scrollToIndex(selectedIndex, false);
        }}
        initialNumToRender={Math.min(items.length, selectedIndex + visibleCount + 5)}
        windowSize={11}
      />
    </View>
  );
}

export const WheelPicker = memo(WheelPickerInner) as typeof WheelPickerInner;
