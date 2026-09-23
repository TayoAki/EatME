import { Flame } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { Logo } from '@/components/ui/logo';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';

export function HomeHeader({ streak, onStreakPress }: { streak: number; onStreakPress: () => void }) {
  return (
    <View className="flex-row items-center justify-between px-5 pb-2 pt-1">
      <Logo size={34} withWordmark />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${streak} day streak`}
        hitSlop={8}
        onPress={() => {
          haptics.light();
          onStreakPress();
        }}
        className="h-10 flex-row items-center gap-1.5 rounded-full border border-line bg-canvas px-3.5 active:opacity-70">
        <Flame size={18} color={colors.flame} fill={colors.flame} />
        <Text className="text-[16px] font-semibold text-ink">{streak}</Text>
      </Pressable>
    </View>
  );
}
