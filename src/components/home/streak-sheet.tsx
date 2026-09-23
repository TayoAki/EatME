import { Check, Flame } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { addDays, toIsoDate } from '@/lib/time';

type StreakSheetProps = {
  visible: boolean;
  onClose: () => void;
  streak: number;
  loggedDates: readonly string[];
};

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function message(streak: number) {
  if (streak === 0) return 'Log a meal today to start a new streak. Small steps add up!';
  if (streak === 1) return 'Great start! Log a meal tomorrow to keep your streak going.';
  if (streak < 7) return "Log a meal every day to keep your streak alive. You're building a great habit!";
  return "You're on fire! Consistency like this is what makes the difference.";
}

/** Motivational streak sheet opened from the flame button on the home screen. */
export function StreakSheet({ visible, onClose, streak, loggedDates }: StreakSheetProps) {
  const logged = new Set(loggedDates);
  const today = new Date();
  const monday = addDays(today, -((today.getDay() + 6) % 7));
  const week = WEEKDAYS.map((label, i) => {
    const iso = toIsoDate(addDays(monday, i));
    return { label, iso, done: logged.has(iso) };
  });

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <View className="items-center">
        <Flame size={72} color={colors.flame} fill={colors.flame} strokeWidth={1.2} />
        <Text className="mt-2 text-[64px] font-bold leading-[70px] tracking-tighter text-ink">{streak}</Text>
        <Text className="text-[26px] font-bold tracking-tight text-ink">Day streak</Text>
      </View>

      <View className="mt-6 flex-row justify-between px-1">
        {week.map((day) => (
          <View key={day.iso} className="items-center gap-2">
            <Text className="text-[13px] font-medium text-ink">{day.label}</Text>
            <View
              className={cn('h-9 w-9 items-center justify-center rounded-full', day.done ? 'bg-flame' : 'bg-surface')}>
              {day.done ? <Check size={18} color={colors.canvas} strokeWidth={3} /> : null}
            </View>
          </View>
        ))}
      </View>

      <Text className="mt-6 text-center text-[16px] leading-[22px] text-muted">{message(streak)}</Text>
      <Button title="Keep going" className="mt-6" onPress={onClose} />
    </BottomSheet>
  );
}
