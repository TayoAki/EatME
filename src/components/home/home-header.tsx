import { CalendarCheck } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { FlamieView } from '@/components/flamie/flamie-view';
import { Logo } from '@/components/ui/logo';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';
import type { FlamieMood, FlamieStageKey } from '@/shared/flamie';

/**
 * Logo and the streak button: Flamie and the day count (FLAMIE.md §2). Calm mode shows the days logged instead (a
 * count that never resets) with a calendar, and no Flamie.
 */
export function HomeHeader({
  streak,
  daysLogged = 0,
  calm = false,
  flamie,
  onStreakPress,
}: {
  streak: number;
  daysLogged?: number;
  calm?: boolean;
  flamie?: { mood: FlamieMood; stage: FlamieStageKey; line: string; cheerKey?: number; cheerText?: string };
  onStreakPress: () => void;
}) {
  const label = calm
    ? `${daysLogged} ${daysLogged === 1 ? 'day' : 'days'} logged`
    : `${streak} day streak. ${flamie?.cheerText ?? flamie?.line ?? ''}`.trim();
  return (
    <View className="flex-row items-center justify-between px-5 pb-2 pt-1">
      <Logo size={34} withWordmark />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        hitSlop={8}
        onPress={() => {
          haptics.light();
          onStreakPress();
        }}
        className="h-10 flex-row items-center gap-1 rounded-full border border-line bg-canvas pl-1.5 pr-3.5 active:opacity-70">
        {calm ? (
          <View className="w-7 items-center">
            <CalendarCheck size={18} color={colors.ink} strokeWidth={1.8} />
          </View>
        ) : (
          <FlamieView size={32} tiny grow={false} mood={flamie?.cheerKey !== undefined ? 'cheer' : (flamie?.mood ?? 'waiting')} stage={flamie?.stage ?? 'ember'} cheerKey={flamie?.cheerKey} />
        )}
        <Text className="text-[16px] font-semibold text-ink">{calm ? daysLogged : streak}</Text>
      </Pressable>
    </View>
  );
}
