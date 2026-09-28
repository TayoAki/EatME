import { router } from 'expo-router';
import { CalendarDays, Crown, Repeat, Shuffle } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useClearDayPlan, useDayPlan, useDraftDay, useUpdateDraftItem } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { draftSummary, SLOT_LABELS, type DayPlanItem } from '@/shared/day-draft';

export const timeLabel = (time: string) => formatTimeOfDay({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3, 5)) });
const numbers = (n: { calories: number; proteinG: number }) => `${n.calories.toLocaleString('en-US')} kcal · ${n.proteinG} g protein`;

const NOT_ENOUGH = 'Log a few more meals and Weight Class can draft your day.';

/** Draft (or Shuffle) the day; a 402 opens Premium. */
function useDraft(date: string, onDone?: () => void) {
  const draft = useDraftDay(date);
  const run = (shuffle: boolean) =>
    draft.mutate(shuffle, {
      onSuccess: () => {
        haptics.success();
        onDone?.();
      },
      onError: (error) => {
        if (error instanceof ApiError && error.status === 402) router.push('/premium');
        else notify(shuffle ? "We couldn't shuffle the draft" : "We couldn't draft tomorrow", error.message);
      },
    });
  return { run, pending: draft.isPending, shuffling: draft.isPending && draft.variables === true };
}

/**
 * Home in the evening: "Plan tomorrow". Drafts tomorrow from the person's own meals (Premium), or
 * shows the draft's totals once there is one. `onOpen` shows tomorrow on Home.
 */
export function PlanTomorrowCard({ tomorrow, calm, onOpen }: { tomorrow: string; calm: boolean; onOpen: () => void }) {
  const state = useDayPlan(tomorrow);
  const { run, pending } = useDraft(tomorrow, onOpen);
  if (!state.data) return null;
  const { plan, eligible, premium } = state.data;
  const planned = plan?.items.filter((i) => i.status !== 'removed') ?? [];

  return (
    <View className="mx-5 mt-3 rounded-card border border-line p-4">
      <View className="flex-row items-center gap-2">
        <CalendarDays size={18} color={colors.ink} strokeWidth={1.8} />
        <Text accessibilityRole="header" className="flex-1 text-[16px] font-bold tracking-tight text-ink">
          {plan ? 'Tomorrow is drafted' : 'Plan tomorrow'}
        </Text>
        {!plan && eligible && !premium ? <Crown size={16} color={colors.ink} strokeWidth={1.8} /> : null}
      </View>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        {plan
          ? calm
            ? planned.map((i) => i.name).join(', ')
            : draftSummary(plan.totals)
          : eligible
            ? 'A draft of tomorrow from your own meals. Nothing is logged until you tap.'
            : NOT_ENOUGH}
      </Text>
      {plan ? (
        <Button title="See the draft" size="md" variant="secondary" className="mt-3 self-start px-5" onPress={onOpen} />
      ) : eligible ? (
        <Button
          title={premium ? 'Draft tomorrow' : 'Draft tomorrow with Premium'}
          size="md"
          className="mt-3 self-start px-5"
          loading={pending}
          onPress={() => (premium ? run(false) : router.push('/premium'))}
        />
      ) : null}
    </View>
  );
}

/** Swap: up to three other choices for the slot. */
function SwapSheet({ item, calm, onPick, onClose }: { item: DayPlanItem; calm: boolean; onPick: (key: string) => void; onClose: () => void }) {
  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Swap {SLOT_LABELS[item.slot].toLowerCase()}
      </Text>
      <Text className="mt-1 text-[14px] text-muted">Instead of {item.name}</Text>
      <View className="mt-4 overflow-hidden rounded-card border border-line">
        {item.alternatives.map((choice, index) => (
          <Pressable
            key={choice.key}
            accessibilityRole="button"
            accessibilityLabel={calm ? choice.name : `${choice.name}, ${numbers(choice.nutrients)}`}
            onPress={() => onPick(choice.key)}
            className={cn('min-h-[56px] justify-center px-4 py-3 active:bg-surface', index > 0 && 'border-t border-line')}>
            <Text className="text-[16px] font-semibold text-ink">{choice.name}</Text>
            {calm ? null : <Text className="text-[13px] text-muted">{numbers(choice.nutrients)}</Text>}
          </Pressable>
        ))}
      </View>
      <Button title="Cancel" variant="secondary" className="mt-4" onPress={onClose} />
    </BottomSheet>
  );
}

function DraftRow({ item, first, calm, busy, onSwap, onRemove, onPutBack }: {
  item: DayPlanItem;
  first: boolean;
  calm: boolean;
  busy: boolean;
  onSwap: () => void;
  onRemove: () => void;
  onPutBack: () => void;
}) {
  const removed = item.status === 'removed';
  return (
    <View className={cn('px-4 py-3', !first && 'border-t border-line')}>
      <Text className="text-[12px] font-semibold uppercase tracking-wide text-muted">
        {SLOT_LABELS[item.slot]} · {timeLabel(item.time)}
      </Text>
      <Text numberOfLines={2} className={cn('mt-0.5 text-[16px] font-semibold', removed ? 'text-faint line-through' : 'text-ink')}>
        {item.name}
      </Text>
      {calm || removed ? null : <Text className="text-[13px] text-muted">{numbers(item.nutrients)}</Text>}
      {item.repeatId ? (
        <View className="mt-1.5 flex-row items-center gap-1.5">
          <Repeat size={13} color={colors.muted} />
          <Text className="text-[13px] text-muted">Repeats on this day</Text>
        </View>
      ) : item.status === 'logged' ? (
        <Text className="mt-1 text-[13px] text-muted">Logged</Text>
      ) : (
        <View className="mt-2.5 flex-row items-center gap-2">
          {removed ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Put back: ${item.name}`}
              disabled={busy}
              onPress={onPutBack}
              className="h-9 items-center justify-center rounded-full bg-surface px-4 active:opacity-70">
              <Text className="text-[14px] font-semibold text-ink">Put back</Text>
            </Pressable>
          ) : (
            <>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Swap ${item.name}`}
                disabled={busy || item.alternatives.length === 0}
                onPress={onSwap}
                className={cn('h-9 items-center justify-center rounded-full bg-surface px-4 active:opacity-70', item.alternatives.length === 0 && 'opacity-40')}>
                <Text className="text-[14px] font-semibold text-ink">Swap</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Remove ${item.name}`}
                disabled={busy}
                onPress={onRemove}
                className="h-9 items-center justify-center rounded-full px-3 active:opacity-70">
                <Text className="text-[14px] font-semibold text-muted">Remove</Text>
              </Pressable>
            </>
          )}
          {busy ? <ActivityIndicator color={colors.muted} /> : null}
        </View>
      )}
    </View>
  );
}

/**
 * Tomorrow on Home: the draft as planned meals, each with Swap and Remove; Shuffle and Clear draft.
 * A draft, never a diet plan: nothing is logged until the person taps Log on the day.
 */
export function DraftDay({ date, calm }: { date: string; calm: boolean }) {
  const state = useDayPlan(date);
  const { run, pending, shuffling } = useDraft(date);
  const update = useUpdateDraftItem(date);
  const clear = useClearDayPlan(date);
  const [swapping, setSwapping] = useState<DayPlanItem | null>(null);

  if (!state.data) {
    return (
      <View className="items-center py-10">
        <ActivityIndicator color={colors.ink} />
      </View>
    );
  }
  const { plan, eligible, premium } = state.data;

  const change = (n: number, body: { key: string } | { status: 'removed' }) =>
    update.mutate(
      { n, change: body },
      {
        onSuccess: () => haptics.selection(),
        onError: (error) => notify("We couldn't change the draft", error.message),
      },
    );
  const clearDraft = async () => {
    const ok = await confirm({ title: 'Clear the draft?', message: 'Tomorrow goes back to empty. Nothing you logged is touched.', confirmLabel: 'Clear', destructive: true });
    if (ok) clear.mutate(undefined, { onError: (error) => notify("We couldn't clear the draft", error.message) });
  };

  return (
    <View className="px-5">
      <Text accessibilityRole="header" className="text-[20px] font-bold tracking-tight text-ink">
        Tomorrow
      </Text>
      {!plan ? (
        <View className="mt-3 rounded-card border border-line p-4">
          <Text className="text-[15px] leading-[21px] text-ink">
            {eligible ? 'A draft of tomorrow from your own meals: saved meals and the ones you eat often. Nothing is logged until you tap.' : NOT_ENOUGH}
          </Text>
          {eligible ? (
            <Button
              title={premium ? 'Draft tomorrow' : 'Draft tomorrow with Premium'}
              size="md"
              className="mt-3 self-start px-5"
              icon={premium ? undefined : <Crown size={16} color={colors.canvas} strokeWidth={1.8} />}
              loading={pending}
              onPress={() => (premium ? run(false) : router.push('/premium'))}
            />
          ) : null}
        </View>
      ) : (
        <>
          <Text className="mt-1 text-[14px] leading-5 text-muted">
            A draft of tomorrow from your own meals. Nothing is logged until you tap Log on the day.
          </Text>
          {calm ? null : <Text className="mt-3 text-[17px] font-semibold text-ink">{draftSummary(plan.totals)}</Text>}
          {plan.belowFloor ? (
            <View className="mt-3 rounded-2xl bg-surface p-3.5">
              <Text className="text-[14px] leading-5 text-ink">Add a snack to reach your minimum.</Text>
            </View>
          ) : null}
          <View className="mt-3 overflow-hidden rounded-card border border-line">
            {plan.items.map((item, index) => (
              <DraftRow
                key={`${item.n}-${item.key}`}
                item={item}
                first={index === 0}
                calm={calm}
                busy={update.isPending && update.variables?.n === item.n}
                onSwap={() => setSwapping(item)}
                onRemove={() => change(item.n, { status: 'removed' })}
                onPutBack={() => change(item.n, { key: item.key })}
              />
            ))}
          </View>
          <View className="mt-3 flex-row gap-2">
            <Button
              title="Shuffle"
              variant="secondary"
              size="md"
              className="flex-1 px-3"
              icon={<Shuffle size={16} color={colors.ink} />}
              loading={shuffling}
              onPress={() => run(true)}
            />
            <Button title="Clear draft" variant="outline" size="md" className="flex-1 px-3" loading={clear.isPending} onPress={() => void clearDraft()} />
          </View>
        </>
      )}
      {swapping ? (
        <SwapSheet
          item={swapping}
          calm={calm}
          onClose={() => setSwapping(null)}
          onPick={(key) => {
            setSwapping(null);
            change(swapping.n, { key });
          }}
        />
      ) : null}
    </View>
  );
}
