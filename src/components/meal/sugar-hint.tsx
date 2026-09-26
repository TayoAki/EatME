import { Candy } from 'lucide-react-native';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';

type SugarHintProps = {
  sugar: { sugarsG: number; juice: boolean };
  /** Calm mode: the same note without the grams. */
  hideNumbers?: boolean;
};

/**
 * Shown instead of the protein hint for sugary drinks and food (see `sugarNote`): what quick sugar
 * does, in plain words. General nutrition information, never advice or a grade.
 */
export function SugarHint({ sugar, hideNumbers = false }: SugarHintProps) {
  const amount = hideNumbers ? 'Mostly sugar' : `About ${sugar.sugarsG} g of sugar`;
  const text = sugar.juice
    ? `${amount} with little fiber, so it's absorbed quickly and can raise blood sugar faster than whole fruit. Having it with a meal slows that down.`
    : `${amount} with little fiber or protein, so it's absorbed quickly and can raise blood sugar fast. Having it with a meal slows that down.`;
  return (
    <View className="flex-row items-start gap-2.5 rounded-2xl bg-surface p-3.5">
      <Candy size={18} color={colors.carbs} strokeWidth={1.8} style={{ marginTop: 1 }} />
      <Text className="flex-1 text-[14px] leading-5 text-ink">{text}</Text>
    </View>
  );
}
