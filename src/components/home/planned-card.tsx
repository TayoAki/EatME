import { CalendarDays, Repeat } from 'lucide-react-native';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useAnswerPlanned, useDayPlan, useLogDraftItem, usePlannedMeals, useUpdateDraftItem } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';

type PlannedCardProps = { date: string; calm: boolean };

const timeLabel = (time: string) => formatTimeOfDay({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3, 5)) });

/** A row of the card: a repeat, or a meal from the day's draft (Plan tomorrow). */
type Row = { id: string; time: string; name: string; calories: number | null; draft: boolean; logBusy: boolean; skipBusy: boolean; onLog: () => void; onSkip: () => void };

/**
 * Meals planned for today, as suggestions: repeats and the meals of the day's draft. Nothing is
 * logged until "Log it", "Not today" hides it for the day, and earlier days never show what was
 * missed.
 */
export function PlannedCard({ date, calm }: PlannedCardProps) {
  const planned = usePlannedMeals(date);
  const answer = useAnswerPlanned(date);
  const draft = useDayPlan(date);
  const logDraft = useLogDraftItem(date);
  const updateDraft = useUpdateDraftItem(date);

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
  const busyAnything = answer.isPending || logDraft.isPending || updateDraft.isPending;

  const rows: Row[] = [
    ...(planned.data?.planned ?? [])
      .filter((item) => item.response === null)
      .map((item) => ({
        id: item.repeatId,
        time: item.time,
        name: item.meal.name ?? 'Meal',
        calories: item.meal.calories,
        draft: false,
        logBusy: busy(item.repeatId, 'log'),
        skipBusy: busy(item.repeatId, 'skip'),
        onLog: () => respond(item.repeatId, item.meal.name, 'log'),
        onSkip: () => respond(item.repeatId, item.meal.name, 'skip'),
      })),
    // Repeats in the draft are the rows above.
    ...(draft.data?.plan?.items ?? [])
      .filter((item) => item.status === 'planned' && !item.repeatId)
      .map((item) => ({
        id: `draft-${item.n}`,
        time: item.time,
        name: item.name,
        calories: item.nutrients.calories,
        draft: true,
        logBusy: logDraft.isPending && logDraft.variables === item.n,
        skipBusy: updateDraft.isPending && updateDraft.variables?.n === item.n,
        onLog: () =>
          logDraft.mutate(item.n, {
            onSuccess: () => haptics.success(),
            onError: (error) => notify(`We couldn't log ${item.name}`, error.message),
          }),
        onSkip: () =>
          updateDraft.mutate(
            { n: item.n, change: { status: 'removed' } },
            { onSuccess: () => haptics.selection(), onError: (error) => notify("We couldn't save that", error.message) },
          ),
      })),
  ].sort((a, b) => a.time.localeCompare(b.time));
  if (rows.length === 0) return null;

  return (
    <View className="mb-3 rounded-card border border-line px-4 pb-2 pt-4">
      <View className="flex-row items-center gap-2">
        <Repeat size={16} color={colors.ink} />
        <Text accessibilityRole="header" className="text-[16px] font-bold text-ink">
          Planned for today
        </Text>
      </View>
      {rows.map((row, index) => (
        <View key={row.id} className={cn('py-3', index > 0 && 'border-t border-line')}>
          <View className="flex-row items-baseline gap-3">
            <Text numberOfLines={1} className="flex-1 text-[16px] font-semibold text-ink">
              {row.name}
            </Text>
            <Text className="text-[13px] text-muted">{timeLabel(row.time)}</Text>
          </View>
          {row.draft || !calm ? (
            <View className="flex-row items-center gap-1.5">
              {row.draft ? <CalendarDays size={12} color={colors.muted} /> : null}
              <Text className="text-[13px] text-muted">
                {[row.draft ? 'From your draft' : null, calm ? null : `${row.calories ?? 0} calories`].filter(Boolean).join(' · ')}
              </Text>
            </View>
          ) : null}
          <View className="mt-2.5 flex-row gap-2">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Log ${row.name}`}
              disabled={busyAnything}
              onPress={row.onLog}
              className="h-9 min-w-[84px] items-center justify-center rounded-full bg-ink px-4 active:opacity-80">
              {row.logBusy ? <ActivityIndicator color={colors.canvas} /> : <Text className="text-[14px] font-semibold text-white">Log it</Text>}
            </Pressable>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Not today: ${row.name}`}
              disabled={busyAnything}
              onPress={row.onSkip}
              className="h-9 items-center justify-center rounded-full bg-surface px-4 active:opacity-70">
              {row.skipBusy ? <ActivityIndicator color={colors.muted} /> : <Text className="text-[14px] font-semibold text-ink">Not today</Text>}
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}
