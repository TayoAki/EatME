import * as Crypto from 'expo-crypto';
import { router } from 'expo-router';
import { Check, ExternalLink, Flame } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';

import { MacroBox } from '@/components/scan/analysis-view';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { FoodPicture } from '@/components/ui/food-picture';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { ShowNumbers } from '@/components/ui/show-numbers';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { openLink } from '@/lib/links';
import { useOrderDish, type OrderTarget } from '@/lib/queries';
import { foodPictureFor } from '@/shared/food-pictures';
import { FIT_WORDS, type OrderVariant } from '@/shared/menu-fit';
import type { MenuRow } from '@/shared/menus';

import { checkedText, sourceText } from './format';

const VARIANTS = [
  { label: 'Whole', value: 'whole' },
  { label: 'Half', value: 'half' },
] as const;

const round10 = (value: number) => Math.round(value / 10) * 10;

/** One answer to the question, or one tweak: a row that shows what it does to the dish. */
function Choice({ title, detail, selected, onPress }: { title: string; detail: string | null; selected: boolean; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: selected }}
      onPress={() => {
        haptics.selection();
        onPress();
      }}
      className={cn('min-h-[48px] flex-row items-center gap-3 rounded-2xl border px-4 py-2.5 active:opacity-70', selected ? 'border-ink' : 'border-line')}>
      <View className={cn('h-5 w-5 items-center justify-center rounded-full border', selected ? 'border-ink bg-ink' : 'border-faint')}>
        {selected ? <Check size={13} color={colors.canvas} strokeWidth={3} /> : null}
      </View>
      <Text className="flex-1 text-[15px] text-ink">{title}</Text>
      {detail ? <Text className="text-[14px] text-muted">{detail}</Text> : null}
    </Pressable>
  );
}

type DishSheetProps = {
  row: MenuRow;
  target: OrderTarget;
  /** A chain's sides and drinks: one can join the order. */
  sides?: readonly MenuRow[];
  calm: boolean;
  onClose: () => void;
  /** "Report a wrong item" (a chain item): the screen closes this sheet and opens the report. */
  onReport?: () => void;
  /** After Log it. */
  onLogged: () => void;
};

/**
 * A dish before ordering: its numbers and where they come from (the chain's guide with the day it
 * was checked, or the foods behind an estimate), whole or half, the one question, up to two tweaks a
 * server can make, a side from the same chain, then Log it or Save for later. Tapping twice logs once.
 */
export function DishSheet({ row, target, sides = [], calm, onClose, onReport, onLogged }: DishSheetProps) {
  const { height } = useWindowDimensions();
  const order = useOrderDish();
  const requestId = useRef(Crypto.randomUUID());
  const [action, setAction] = useState<'log' | 'save'>('log');
  const [variant, setVariant] = useState<OrderVariant>(row.variant);
  const [tweak, setTweak] = useState<number | null>(null);
  const [option, setOption] = useState<number | null>(null);
  const [sideKey, setSideKey] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const hideNumbers = calm && !revealed;

  // The row shows the ranked portion; tweaks and answers are worked out for the whole dish.
  const rowShare = row.variant === 'half' ? 0.5 : 1;
  const whole = { calories: row.calories / rowShare, proteinG: row.proteinG / rowShare, carbsG: row.carbsG / rowShare, fatG: row.fatG / rowShare };
  let calories = option !== null && row.question ? row.question.options[option].calories : whole.calories;
  let protein = whole.proteinG;
  const chosenTweak = tweak !== null ? row.tweaks[tweak] : undefined;
  if (chosenTweak) {
    calories -= whole.calories - chosenTweak.calories;
    protein = chosenTweak.proteinG;
  }
  const factor = whole.calories > 0 ? calories / whole.calories : 1;
  const share = variant === 'half' ? 0.5 : 1;
  const side = sides.find((s) => s.key === sideKey);
  const sideShare = side?.variant === 'half' ? 0.5 : 1;
  const plus = (value: keyof typeof whole) => (side ? side[value] / sideShare : 0);
  const total = {
    calories: Math.round(calories * share + plus('calories')),
    proteinG: Math.round(protein * share + plus('proteinG')),
    carbsG: Math.round(whole.carbsG * factor * share + plus('carbsG')),
    fatG: Math.round(whole.fatG * factor * share + plus('fatG')),
  };
  const range =
    row.range && row.calories > 0
      ? { low: round10((row.range.low / row.calories) * calories * share), high: round10((row.range.high / row.calories) * calories * share) }
      : null;
  const citation = row.citation;

  const run = (next: 'log' | 'save') => {
    setAction(next);
    order.mutate(
      {
        target,
        action: next,
        body: {
          requestId: requestId.current,
          variant,
          ...(tweak !== null ? { tweak } : {}),
          ...(option !== null ? { option } : {}),
          ...(side ? { sideId: side.key } : {}),
        },
      },
      {
        onSuccess: () => {
          haptics.success();
          // A new order next time (Save for later, then Log it, are two meals).
          requestId.current = Crypto.randomUUID();
          if (next === 'log') onLogged();
          else {
            onClose();
            notify('Saved for later', 'Find it in Saved meals on the Scan tab and log it when your food arrives.');
          }
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 402) {
            onClose();
            router.push('/premium');
          } else notify(next === 'log' ? "We couldn't log it" : "We couldn't save it", error.message);
        },
      },
    );
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <ScrollView style={{ maxHeight: height * 0.62 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View className="flex-row items-start gap-3">
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-surface">
            <FoodPicture picture={foodPictureFor(row.name, 'menu')} size={38} />
          </View>
          <View className="min-w-0 flex-1">
            <Text accessibilityRole="header" className="text-[22px] font-bold leading-7 tracking-tight text-ink">
              {row.name}
            </Text>
            <Text className="mt-0.5 text-[14px] text-muted">{[sourceText(row), row.section, row.serving].filter(Boolean).join(' · ')}</Text>
          </View>
        </View>
        {row.description ? <Text className="mt-3 text-[14px] leading-5 text-muted">{row.description}</Text> : null}
        <Text className="mt-3 text-[15px] font-semibold leading-[21px] text-ink">{hideNumbers ? FIT_WORDS[row.fit] : row.reason}</Text>

        <SegmentedControl options={VARIANTS} value={variant} onChange={setVariant} className="mt-4" />
        {variant === 'half' ? <Text className="mt-1.5 text-[13px] text-muted">Half the dish: share it or take the rest home.</Text> : null}

        {hideNumbers ? (
          <View className="mt-4">
            <ShowNumbers onPress={() => setRevealed(true)} />
          </View>
        ) : (
          <>
            <View className="mt-4 flex-row items-end gap-2">
              <Flame size={26} color={colors.ink} fill={colors.ink} />
              <Text className="text-[36px] font-bold leading-[40px] tracking-tighter text-ink">
                {range ? `~${total.calories.toLocaleString()}` : total.calories.toLocaleString()}
              </Text>
              <Text className="mb-1 text-[15px] text-muted">calories</Text>
            </View>
            {range ? (
              <Text className="mt-1 text-[14px] text-muted">
                An estimate: about {range.low.toLocaleString()}–{range.high.toLocaleString()} kcal
              </Text>
            ) : null}
            <View className="mt-3 flex-row gap-2.5">
              <MacroBox label="Protein" value={total.proteinG} color={colors.protein} />
              <MacroBox label="Carbs" value={total.carbsG} color={colors.carbs} />
              <MacroBox label="Fats" value={total.fatG} color={colors.fat} />
            </View>
          </>
        )}

        {row.question ? (
          <View className="mt-5 gap-2">
            <Text className="text-[16px] font-semibold text-ink">
              {row.question.question}
              {row.question.about ? <Text className="font-normal text-muted"> {row.question.about}</Text> : null}
            </Text>
            {row.question.options.map((answer, i) => (
              <Choice
                key={answer.label}
                title={answer.label}
                detail={hideNumbers ? null : `${Math.round(answer.calories * share).toLocaleString()} kcal`}
                selected={option === i}
                onPress={() => setOption(option === i ? null : i)}
              />
            ))}
          </View>
        ) : null}

        {row.tweaks.length > 0 ? (
          <View className="mt-5 gap-2">
            <Text className="text-[16px] font-semibold text-ink">Ask for</Text>
            {row.tweaks.map((change, i) => (
              <Choice
                key={change.label}
                title={change.label}
                detail={hideNumbers ? null : `about −${Math.round((whole.calories - change.calories) * share).toLocaleString()} kcal`}
                selected={tweak === i}
                onPress={() => setTweak(tweak === i ? null : i)}
              />
            ))}
          </View>
        ) : null}

        {sides.length > 0 ? (
          <View className="mt-5">
            <Text className="text-[16px] font-semibold text-ink">Add a side or drink</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2" contentContainerClassName="gap-2">
              {[null, ...sides].map((s) => {
                const selected = (s?.key ?? null) === sideKey;
                const label = s ? (hideNumbers ? s.name : `${s.name} · ${Math.round(s.calories / (s.variant === 'half' ? 0.5 : 1))} kcal`) : 'None';
                return (
                  <Pressable
                    key={s?.key ?? 'none'}
                    accessibilityRole="radio"
                    accessibilityState={{ selected }}
                    onPress={() => {
                      haptics.selection();
                      setSideKey(s?.key ?? null);
                    }}
                    className={cn('h-10 justify-center rounded-full border px-4 active:opacity-70', selected ? 'border-ink bg-ink' : 'border-line')}>
                    <Text numberOfLines={1} className={cn('text-[15px] font-medium', selected ? 'text-white' : 'text-ink')}>
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        ) : null}

        {citation ? (
          <View className="mt-5 gap-2 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">
              Source: {citation.chain} nutrition information · checked {checkedText(citation.checkedOn)}
            </Text>
            <Pressable
              accessibilityRole="link"
              accessibilityHint="Opens the chain's own nutrition guide"
              onPress={() => void openLink(citation.sourceUrl)}
              className="flex-row items-center gap-1.5 self-start py-1 active:opacity-60">
              <Text className="text-[14px] font-semibold text-ink underline">View {citation.chain}&apos;s guide</Text>
              <ExternalLink size={14} color={colors.ink} />
            </Pressable>
            <Text className="text-[13px] leading-[18px] text-muted">
              Weight Class isn&apos;t affiliated with {citation.chain}. Menus change; check with the restaurant.
            </Text>
            {onReport ? (
              <Pressable accessibilityRole="button" onPress={onReport} className="self-start py-1 active:opacity-60">
                <Text className="text-[14px] font-semibold text-ink underline">Report a wrong item</Text>
              </Pressable>
            ) : null}
          </View>
        ) : (
          <View className="mt-5 gap-1.5 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">
              {row.source === 'quick'
                ? "A quick estimate from the dish's name and description, so its range is wider."
                : 'An estimate: the foods and restaurant-size portions below, with numbers from the USDA food database.'}{' '}
              You can change the foods after logging it.
            </Text>
            {row.foods.length > 0 ? (
              <Text className="text-[13px] leading-[18px] text-muted">
                {row.foods.map((food) => (hideNumbers ? food.name : `${food.name} ${Math.round((food.grams / rowShare) * share)} g`)).join(' · ')}
              </Text>
            ) : null}
          </View>
        )}
      </ScrollView>
      <View className="mt-4 gap-2">
        <Button title="Log it" loading={order.isPending && action === 'log'} disabled={order.isPending} onPress={() => run('log')} />
        <Button
          title="Save for later"
          variant="secondary"
          loading={order.isPending && action === 'save'}
          disabled={order.isPending}
          onPress={() => run('save')}
        />
      </View>
    </BottomSheet>
  );
}
