import { Eye } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

/** Calm mode hides calorie and macro numbers; this reveals them on one screen. */
export function ShowNumbers({ onPress, note = 'Numbers are hidden in calm mode.' }: { onPress: () => void; note?: string }) {
  return (
    <View className="flex-row flex-wrap items-center gap-x-3 gap-y-2">
      <Text className="text-[14px] text-muted">{note}</Text>
      <Pressable
        accessibilityRole="button"
        hitSlop={6}
        onPress={onPress}
        className="flex-row items-center gap-1.5 rounded-full bg-surface px-3.5 py-2 active:opacity-70">
        <Eye size={16} color={colors.ink} />
        <Text className="text-[14px] font-semibold text-ink">Show numbers</Text>
      </Pressable>
    </View>
  );
}
