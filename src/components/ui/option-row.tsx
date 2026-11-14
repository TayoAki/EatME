import type { LucideIcon } from 'lucide-react-native';
import { useEffect, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { rise } from '@/components/ui/motion';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';

type OptionRowProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  selected: boolean;
  onPress: () => void;
  /** Center the label (simple single-line options such as gender or goal). */
  centered?: boolean;
  /** Shown but not selectable (e.g. "Lose weight" at the lowest healthy weight). */
  disabled?: boolean;
  /** Rises into place this many steps after the screen opens (onboarding's staggered rows). */
  enterIndex?: number;
  /** With `enterIndex`: milliseconds before the first row. */
  enterAfter?: number;
};

const PRESSED = 0.97;
const SPRING = { damping: 14, stiffness: 260 };

/** A tappable row that gives a little under the finger and pops when it's picked. */
export function OptionRow({
  title,
  description,
  icon: Icon,
  selected,
  onPress,
  centered,
  disabled = false,
  enterIndex,
  enterAfter = 0,
}: OptionRowProps) {
  const reduceMotion = useReducedMotion();
  const scale = useSharedValue(1);
  const wasSelected = useRef(selected);
  useEffect(() => {
    if (selected && !wasSelected.current && !reduceMotion) {
      scale.set(withSequence(withTiming(1.025, { duration: 110 }), withSpring(1, SPRING)));
    }
    wasSelected.current = selected;
  }, [selected, reduceMotion, scale]);
  const scaleStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.get() }] }));

  return (
    <Animated.View entering={enterIndex === undefined ? undefined : rise(enterIndex, enterAfter)}>
      {/* The entrance moves the outer view; the press and pick scale this one (two animations, two views). */}
      <Animated.View style={scaleStyle}>
        <Pressable
          accessibilityRole="radio"
          accessibilityState={{ selected, disabled }}
          disabled={disabled}
          onPressIn={() => {
            if (!reduceMotion) scale.set(withSpring(PRESSED, SPRING));
          }}
          onPressOut={() => {
            if (!reduceMotion) scale.set(withSpring(1, SPRING));
          }}
          onPress={() => {
            haptics.selection();
            onPress();
          }}
          className={cn(
            'min-h-[64px] flex-row items-center gap-4 rounded-[20px] px-5 py-4',
            selected ? 'bg-ink' : 'bg-surface',
            centered && 'justify-center',
            disabled && 'opacity-40',
          )}>
          {Icon ? <Icon size={24} strokeWidth={1.6} color={selected ? colors.canvas : colors.ink} /> : null}
          <View className={cn(centered ? 'items-center' : 'flex-1')}>
            <Text className={cn('text-[17px] font-semibold', selected ? 'text-white' : 'text-ink')}>{title}</Text>
            {description ? (
              <Text className={cn('mt-0.5 text-[14px]', selected ? 'text-white/70' : 'text-muted')}>{description}</Text>
            ) : null}
          </View>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}
