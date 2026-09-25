import { Drumstick } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { proteinPerMeal } from '@/shared/nutrition';

/**
 * Protein at every meal: how this meal compares with the daily protein goal spread over about four
 * meals. Neutral wording — a nudge, never a grade.
 */
export function ProteinHint({ proteinG, dailyProteinG }: { proteinG: number; dailyProteinG: number }) {
  const target = proteinPerMeal(dailyProteinG);
  const enough = proteinG >= target;
  return (
    <View className="flex-row items-start gap-2.5 rounded-2xl bg-surface p-3.5">
      <Drumstick size={18} color={colors.protein} strokeWidth={1.8} style={{ marginTop: 1 }} />
      <Text className="flex-1 text-[14px] leading-5 text-ink">
        {enough
          ? `${proteinG} g protein — a solid share of your ${dailyProteinG} g for the day.`
          : `${proteinG} g protein. About ${target} g a meal keeps you on pace for ${dailyProteinG} g a day.`}
      </Text>
    </View>
  );
}
