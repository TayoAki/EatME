import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FoodAmountSheet } from '@/components/meal/food-amount-sheet';
import { FoodSearchList } from '@/components/meal/food-search-sheet';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import type { FoodSummary } from '@/shared/meals';

type FoodSearchViewProps = {
  bottomSpace: number;
  onBack: () => void;
  onLog: (food: FoodSummary, grams: number) => void;
};

/** Log a food from the USDA database: search, pick, choose how much. */
export function FoodSearchView({ bottomSpace, onBack, onLog }: FoodSearchViewProps) {
  const insets = useSafeAreaInsets();
  const [picked, setPicked] = useState<FoodSummary | null>(null);

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the camera" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <View className="flex-1 px-5" style={{ paddingBottom: bottomSpace }}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Search foods
        </Text>
        <FoodSearchList onPick={setPicked} />
      </View>
      {picked ? (
        <FoodAmountSheet
          key={picked.id}
          draft={{
            foodId: picked.id,
            name: picked.description.split(',')[0],
            foodName: picked.description,
            grams: picked.portions[0]?.[1] ?? 100,
            kcalPerGram: picked.per100g.calories / 100,
            portions: picked.portions,
          }}
          saving={false}
          saveLabel="Log it"
          onClose={() => setPicked(null)}
          onSave={(grams) => onLog(picked, grams)}
        />
      ) : null}
    </View>
  );
}
