import { router } from 'expo-router';
import { CalendarDays, Crown, Minus, Plus, Repeat, Shuffle } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { SourcesLink } from '@/components/sources';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useClearDayPlan, useDayPlan, useDraftDay, useProfile, useUpdateDraftItem, useUpdateProfile } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { draftSummary, SLOT_LABELS, type DayPlanItem, type DayPlanResponse } from '@/shared/day-draft';
import { BUDGET_MAX, BUDGET_MIN, BUDGET_PRESETS, costLine, formatCost, overBudget } from '@/shared/meal-cost';

export const timeLabel = (time: string) => formatTimeOfDay({ hour: Number(time.slice(0, 2)), minute: Number(time.slice(3, 5)) });
/** "520 kcal · 32 g protein · about $2.40": a meal's cost only when it has one (v2.7). */
const numbers = (n: { calories: number; proteinG: number }, costCents?: number | null) =>
  `${n.calories.toLocaleString('en-US')} kcal · ${n.proteinG} g protein${typeof costCents === 'number' ? ` · about ${formatCost(costCents)}` : ''}`;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/** "2026-09" → "September 2026". */
const monthName = (month: string) => `${MONTHS[Number(month.slice(5, 7)) - 1]} ${month.slice(0, 4)}`;

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
            : [draftSummary(plan.totals), plan.cost ? costLine(plan.cost) : null].filter(Boolean).join(' · ')
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
            accessibilityLabel={calm ? choice.name : `${choice.name}, ${numbers(choice.nutrients, choice.costCents)}`}
            onPress={() => onPick(choice.key)}
            className={cn('min-h-[56px] justify-center px-4 py-3 active:bg-surface', index > 0 && 'border-t border-line')}>
            <Text className="text-[16px] font-semibold text-ink">{choice.name}</Text>
            {calm ? null : <Text className="text-[13px] text-muted">{numbers(choice.nutrients, choice.costCents)}</Text>}
          </Pressable>
        ))}
      </View>
      <Button title="Cancel" variant="secondary" className="mt-4" onPress={onClose} />
    </BottomSheet>
  );
}

/**
 * The daily budget (v2.7): Off or whole dollars. Plan tomorrow keeps the day's groceries near it with the person's own
 * meals, and never plans under their minimum to save money.
 */
function BudgetSheet({ budget, hasDraft, onClose, onSaved }: { budget: number | null; hasDraft: boolean; onClose: () => void; onSaved: () => void }) {
  const update = useUpdateProfile();
  const [value, setValue] = useState<number | null>(budget);
  const step = (by: number) => setValue((v) => Math.min(BUDGET_MAX, Math.max(BUDGET_MIN, (v ?? 12) + by)));
  const save = () =>
    update.mutate(
      { preferences: { planBudget: value } },
      { onSuccess: onSaved, onError: (error) => notify("We couldn't save your budget", error.message) },
    );
  const chip = (label: string, selected: boolean, onPress: () => void) => (
    <Pressable
      key={label}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      onPress={() => {
        haptics.selection();
        onPress();
      }}
      className={cn('h-10 items-center justify-center rounded-full px-4 active:opacity-70', selected ? 'bg-ink' : 'bg-surface')}>
      <Text className={cn('text-[15px] font-semibold', selected ? 'text-canvas' : 'text-ink')}>{label}</Text>
    </Pressable>
  );
  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Daily budget
      </Text>
      <Text className="mt-1 text-[15px] leading-[21px] text-muted">
        Plan tomorrow keeps the day&apos;s groceries near this with your own meals. It never plans less than your minimum to save money.
      </Text>
      <View accessibilityRole="radiogroup" className="mt-4 flex-row flex-wrap gap-2">
        {chip('Off', value === null, () => setValue(null))}
        {BUDGET_PRESETS.map((preset) => chip(`$${preset}`, value === preset, () => setValue(preset)))}
      </View>
      <View className={cn('mt-4 flex-row items-center justify-between rounded-2xl bg-surface px-2 py-2', value === null && 'opacity-40')}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="A dollar less"
          disabled={value === null || value <= BUDGET_MIN}
          onPress={() => step(-1)}
          className="h-11 w-11 items-center justify-center rounded-full active:bg-canvas">
          <Minus size={20} color={colors.ink} />
        </Pressable>
        <Text className="text-[17px] font-semibold text-ink">{value === null ? 'No budget' : `$${value} a day`}</Text>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="A dollar more"
          disabled={value === null || value >= BUDGET_MAX}
          onPress={() => step(1)}
          className="h-11 w-11 items-center justify-center rounded-full active:bg-canvas">
          <Plus size={20} color={colors.ink} />
        </Pressable>
      </View>
      <Text className="mt-3 text-[13px] leading-[18px] text-muted">Costs are US average prices, not your store&apos;s, so treat them as a guide.</Text>
      <Button title={hasDraft ? 'Save and redraft' : 'Save'} className="mt-5" loading={update.isPending} disabled={value === budget} onPress={save} />
      <Button title="Cancel" variant="secondary" className="mt-3" onPress={onClose} />
    </BottomSheet>
  );
}

/** "Budget: $12" or "Set a budget": opens the budget sheet. */
function BudgetPill({ budget, onPress }: { budget: number | null; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={budget === null ? 'Set a daily budget' : `Daily budget: $${budget}. Change it`}
      onPress={onPress}
      className="h-8 items-center justify-center rounded-full bg-surface px-3 active:opacity-70">
      <Text className="text-[13px] font-semibold text-ink">{budget === null ? 'Set a budget' : `Budget: $${budget}`}</Text>
    </Pressable>
  );
}

/** "Groceries: about $9.80", the budget, the month of the prices, and a kind word when the meals cost more (v2.7). */
function Groceries({ plan, onBudget }: { plan: NonNullable<DayPlanResponse['plan']>; onBudget: () => void }) {
  if (!plan.cost) return null;
  const line = costLine(plan.cost);
  const over = plan.overBudget && plan.budget !== null ? overBudget(plan.cost, plan.budget * 100) : 0;
  return (
    <View className="mt-2">
      <View className="flex-row items-center justify-between gap-3">
        <Text className="flex-1 text-[15px] text-ink">{line ? `Groceries: ${line}` : 'Groceries: no cost yet for these meals'}</Text>
        <BudgetPill budget={plan.budget} onPress={onBudget} />
      </View>
      {plan.priceMonth ? (
        <Text className="mt-0.5 text-[13px] text-muted">US average prices for {monthName(plan.priceMonth)}, not your store&apos;s</Text>
      ) : null}
      {over > 0 ? (
        <View className="mt-3 rounded-2xl bg-surface p-3.5">
          <Text className="text-[14px] leading-5 text-ink">
            About {formatCost(over)} over your ${plan.budget} budget. These are the closest of your own meals
            {plan.belowFloor ? '.' : ' that still reach your minimum.'}
          </Text>
        </View>
      ) : null}
    </View>
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
      {calm || removed ? null : <Text className="text-[13px] text-muted">{numbers(item.nutrients, item.costCents)}</Text>}
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
  const profile = useProfile();
  const { run, pending, shuffling } = useDraft(date);
  const update = useUpdateDraftItem(date);
  const clear = useClearDayPlan(date);
  const [swapping, setSwapping] = useState<DayPlanItem | null>(null);
  const [budgetOpen, setBudgetOpen] = useState(false);

  if (!state.data) {
    return (
      <View className="items-center py-10">
        <ActivityIndicator color={colors.ink} />
      </View>
    );
  }
  const { plan, eligible, premium } = state.data;
  const budget = profile?.preferences.planBudget ?? null;

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
            <View className="mt-3 flex-row items-center justify-between gap-3">
              <Button
                title={premium ? 'Draft tomorrow' : 'Draft tomorrow with Premium'}
                size="md"
                className="px-5"
                icon={premium ? undefined : <Crown size={16} color={colors.canvas} strokeWidth={1.8} />}
                loading={pending}
                onPress={() => (premium ? run(false) : router.push('/premium'))}
              />
              {premium && !calm ? <BudgetPill budget={budget} onPress={() => setBudgetOpen(true)} /> : null}
            </View>
          ) : null}
        </View>
      ) : (
        <>
          <Text className="mt-1 text-[14px] leading-5 text-muted">
            A draft of tomorrow from your own meals. Nothing is logged until you tap Log on the day.
          </Text>
          <SourcesLink topic="plan-tomorrow" className="mt-1" />
          {calm ? null : <Text className="mt-2 text-[17px] font-semibold text-ink">{draftSummary(plan.totals)}</Text>}
          {calm ? null : <Groceries plan={plan} onBudget={() => setBudgetOpen(true)} />}
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
      {budgetOpen ? (
        <BudgetSheet
          budget={budget}
          hasDraft={!!plan}
          onClose={() => setBudgetOpen(false)}
          onSaved={() => {
            setBudgetOpen(false);
            // A new budget changes the best day: draft it again.
            if (plan) run(false);
          }}
        />
      ) : null}
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
