import { Repeat } from 'lucide-react-native';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { usePlannedMeals, useAnswerPlanned } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';

type PlannedCardProps = { date: string; calm: boolean };

const timeLabel = (time: string) => formatTimeOfDay({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3, 5)) });

/**
 * Repeat meals planned for today, as a suggestion: nothing is logged until "Log it", "Not today"
 * hides it for the day, and earlier days never show what was missed.
 */
export function PlannedCard({ date, calm }: PlannedCardProps) {
  const planned = usePlannedMeals(date);
  const answer = useAnswerPlanned(date);
  const open = (planned.data?.planned ?? []).filter((item) => item.response === null);
  if (open.length === 0) return null;

  const respond = (repeatId: string, name: string | null, kind: 'log' | 'skip') =>
    answer.mutate(
      { repeatId, answer: kind },
      {
        onSuccess: () => (kind === 'log' ? haptics.success() : haptics.selection()),
        onError: (error) => notify(kind === 'log' ? `We couldn't log ${name ?? 'this meal'}` : "We couldn't save that", error.message),
      },
    );
  const busy = (repeatId: string, kind: 'log' | 'skip') =>
    answer.isPending && answer.variables?.repeatId === repeatId && answer.variables.answer === kind;

  return (
    <View className="mb-3 rounded-card border border-line px-4 pb-2 pt-4">
      <View className="flex-row items-center gap-2">
        <Repeat size={16} color={colors.ink} />
        <Text accessibilityRole="header" className="text-[16px] font-bold text-ink">
          Planned for today
        </Text>
      </View>
      {open.map((item, index) => (
        <View key={item.repeatId} className={cn('py-3', index > 0 && 'border-t border-line')}>
          <View className="flex-row items-baseline gap-3">
            <Text numberOfLines={1} className="flex-1 text-[16px] font-semibold text-ink">
              {item.meal.name}
            </Text>
            <Text className="text-[13px] text-muted">{timeLabel(item.time)}</Text>
          </View>
          {calm ? null : <Text className="text-[13px] text-muted">{item.meal.calories} calories</Text>}
          <View className="mt-2.5 flex-row gap-2">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Log ${item.meal.name}`}
              disabled={answer.isPending}
              onPress={() => respond(item.repeatId, item.meal.name, 'log')}
              className="h-9 min-w-[84px] items-center justify-center rounded-full bg-ink px-4 active:opacity-80">
              {busy(item.repeatId, 'log') ? (
                <ActivityIndicator color={colors.canvas} />
              ) : (
                <Text className="text-[14px] font-semibold text-white">Log it</Text>
              )}
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Not today: ${item.meal.name}`}
              disabled={answer.isPending}
              onPress={() => respond(item.repeatId, item.meal.name, 'skip')}
              className="h-9 items-center justify-center rounded-full bg-surface px-4 active:opacity-70">
              <Text className="text-[14px] font-semibold text-ink">Not today</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}
