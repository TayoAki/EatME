import { MessageCircleQuestionMark } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useAnswerFollowUp } from '@/lib/queries';
import type { Meal } from '@/shared/meals';

/**
 * Steer the AI: the one tap-to-answer question after a scan ("What was it cooked in?"). Answering
 * recalculates the meal right away, with no second AI call. `hideNumbers`: calm mode.
 */
export function FollowUpCard({ meal, hideNumbers = false }: { meal: Meal; hideNumbers?: boolean }) {
  const answer = useAnswerFollowUp(meal.id);
  const followUp = meal.followUp;
  if (!followUp || followUp.answer !== null) return null;

  const choose = (option: number | 'skip') =>
    answer.mutate(option, {
      onSuccess: () => (option === 'skip' ? haptics.selection() : haptics.success()),
      onError: (error) => notify("We couldn't save your answer", error.message),
    });

  return (
    <View className="rounded-card border border-line p-4">
      <View className="flex-row items-center gap-2">
        <MessageCircleQuestionMark size={18} color={colors.ink} />
        <Text className="text-[12px] font-semibold uppercase tracking-wider text-muted">One question</Text>
      </View>
      <Text accessibilityRole="header" className="mt-1.5 text-[18px] font-bold tracking-tight text-ink">
        {followUp.question}
      </Text>
      {followUp.about ? <Text className="text-[14px] text-muted">{followUp.about}</Text> : null}
      <View className="mt-3 flex-row flex-wrap gap-2">
        {followUp.options.map((option, index) => (
          <Chip
            key={option.label}
            role="button"
            label={hideNumbers ? option.label : `${option.label} · ${option.calories.toLocaleString('en-US')} kcal`}
            selected={answer.isPending && answer.variables === index}
            onPress={() => !answer.isPending && choose(index)}
          />
        ))}
      </View>
      <Pressable
        accessibilityRole="button"
        hitSlop={8}
        disabled={answer.isPending}
        onPress={() => choose('skip')}
        className="mt-3 self-start active:opacity-60">
        <Text className="text-[14px] font-semibold text-muted">Not sure — keep the estimate</Text>
      </Pressable>
    </View>
  );
}
