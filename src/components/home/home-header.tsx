import { CalendarCheck, Flame } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { Logo } from '@/components/ui/logo';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';

/**
 * Logo and the streak button. Calm mode shows the days logged instead (a count that never resets)
 * with a calendar instead of the flame.
 */
export function HomeHeader({
  streak,
  daysLogged = 0,
  calm = false,
  onStreakPress,
}: {
  streak: number;
  daysLogged?: number;
  calm?: boolean;
  onStreakPress: () => void;
}) {
  return (
    <View className="flex-row items-center justify-between px-5 pb-2 pt-1">
      <Logo size={34} withWordmark />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={calm ? `${daysLogged} ${daysLogged === 1 ? 'day' : 'days'} logged` : `${streak} day streak`}
        hitSlop={8}
        onPress={() => {
          haptics.light();
          onStreakPress();
        }}
        className="h-10 flex-row items-center gap-1.5 rounded-full border border-line bg-canvas px-3.5 active:opacity-70">
        {calm ? (
          <CalendarCheck size={18} color={colors.ink} strokeWidth={1.8} />
        ) : (
          <Flame size={18} color={colors.flame} fill={colors.flame} />
        )}
        <Text className="text-[16px] font-semibold text-ink">{calm ? daysLogged : streak}</Text>
      </Pressable>
    </View>
  );
}
