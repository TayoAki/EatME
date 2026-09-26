import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FoodAmountSheet } from '@/components/meal/food-amount-sheet';
import { FoodSearchList } from '@/components/meal/food-search-sheet';
import { RestaurantItemSheet } from '@/components/restaurants/restaurant-item-sheet';
import { RestaurantSearch } from '@/components/restaurants/restaurant-search';
import { IconButton } from '@/components/ui/icon-button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useFeatures } from '@/lib/queries';
import type { FoodSummary } from '@/shared/meals';
import type { PlateLine, RestaurantItem } from '@/shared/restaurants';

export type SearchTab = 'foods' | 'restaurants';

type FoodSearchViewProps = {
  bottomSpace: number;
  /** The tab to open on (back from a restaurant's menu: Restaurants). */
  initialTab?: SearchTab;
  onBack: () => void;
  onLog: (food: FoodSummary, grams: number) => void;
  onOpenChain: (chain: string) => void;
  onLogRestaurant: (lines: PlateLine[]) => void;
};

const TABS = [
  { label: 'Foods', value: 'foods' },
  { label: 'Restaurants', value: 'restaurants' },
] as const;

/** Log a food from the USDA database, or (when restaurant menus are on) a restaurant menu item. */
export function FoodSearchView({ bottomSpace, initialTab = 'foods', onBack, onLog, onOpenChain, onLogRestaurant }: FoodSearchViewProps) {
  const insets = useSafeAreaInsets();
  const [picked, setPicked] = useState<FoodSummary | null>(null);
  const [pickedItem, setPickedItem] = useState<RestaurantItem | null>(null);
  const calm = useCalmMode();
  const restaurants = !!useFeatures().data?.restaurants;
  const [tab, setTab] = useState<SearchTab>(initialTab);
  const showRestaurants = restaurants && tab === 'restaurants';

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the camera" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <View className="flex-1 px-5" style={{ paddingBottom: bottomSpace }}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Search foods
        </Text>
        {restaurants ? <SegmentedControl options={TABS} value={tab} onChange={setTab} className="mt-3" /> : null}
        {showRestaurants ? (
          <RestaurantSearch onOpenChain={onOpenChain} onPickItem={setPickedItem} />
        ) : (
          <FoodSearchList onPick={setPicked} />
        )}
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
          hideCalories={calm}
          saveLabel="Log it"
          onClose={() => setPicked(null)}
          onSave={(grams) => onLog(picked, grams)}
        />
      ) : null}
      {pickedItem ? (
        <RestaurantItemSheet
          key={pickedItem.id}
          item={pickedItem}
          actionLabel="Log it"
          onAction={(line) => {
            setPickedItem(null);
            onLogRestaurant([line]);
          }}
          onOpenMenu={() => {
            setPickedItem(null);
            onOpenChain(pickedItem.chain);
          }}
          onClose={() => setPickedItem(null)}
        />
      ) : null}
    </View>
  );
}
