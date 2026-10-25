import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FoodAmountSheet } from '@/components/meal/food-amount-sheet';
import { FoodSearchList } from '@/components/meal/food-search-sheet';
import { DishSheet } from '@/components/menu/dish-sheet';
import { ReportChainItemSheet } from '@/components/menu/report-chain-item-sheet';
import { RestaurantSearch } from '@/components/menu/restaurant-search';
import { DrinkForm } from '@/components/scan/drink-form';
import { IconButton } from '@/components/ui/icon-button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useFeatures } from '@/lib/queries';
import type { DrinkBody } from '@/shared/drinks';
import type { FoodSummary } from '@/shared/meals';
import type { MenuRow } from '@/shared/menus';

export type SearchTab = 'foods' | 'drinks' | 'restaurants';

type FoodSearchViewProps = {
  bottomSpace: number;
  /** The tab to open on (after a drink: Drinks). */
  initialTab?: SearchTab;
  onBack: () => void;
  onLog: (food: FoodSummary, grams: number) => void;
  onLogDrink: (drink: DrinkBody, detail: string) => void;
  /** A chain's dish was logged from its sheet (v2.5). */
  onLoggedDish: () => void;
};

const TABS = [
  { label: 'Foods', value: 'foods' },
  { label: 'Drinks', value: 'drinks' },
] as const;
/** With What to order on (v2.5): chains ranked for what's left of the day. */
const TABS_WITH_RESTAURANTS = [...TABS, { label: 'Restaurants', value: 'restaurants' }] as const;

/** Log a food from the USDA database, a chain's dish or an alcoholic drink, or find what fits at a restaurant. */
export function FoodSearchView({ bottomSpace, initialTab = 'foods', onBack, onLog, onLogDrink, onLoggedDish }: FoodSearchViewProps) {
  const insets = useSafeAreaInsets();
  const [picked, setPicked] = useState<FoodSummary | null>(null);
  const [dish, setDish] = useState<MenuRow | null>(null);
  const [reporting, setReporting] = useState<MenuRow | null>(null);
  const calm = useCalmMode();
  const [tab, setTab] = useState<SearchTab>(initialTab);
  const restaurants = !!useFeatures().data?.whatToOrder;

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the camera" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <View className="flex-1 px-5" style={{ paddingBottom: bottomSpace }}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Search foods
        </Text>
        <SegmentedControl options={restaurants ? TABS_WITH_RESTAURANTS : TABS} value={tab} onChange={setTab} className="mt-3" />
        {tab === 'drinks' ? (
          <DrinkForm onLog={onLogDrink} />
        ) : tab === 'restaurants' && restaurants ? (
          <RestaurantSearch />
        ) : (
          <FoodSearchList onPick={setPicked} onPickDish={restaurants ? setDish : undefined} />
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
      {dish ? (
        <DishSheet
          key={dish.key}
          row={dish}
          target={{ chainItemId: dish.key }}
          calm={calm}
          onClose={() => setDish(null)}
          onReport={() => {
            // One sheet at a time: the report opens once the dish sheet has gone (iOS can't show both).
            const row = dish;
            setDish(null);
            setTimeout(() => setReporting(row), 400);
          }}
          onLogged={() => {
            setDish(null);
            onLoggedDish();
          }}
        />
      ) : null}
      {reporting?.citation ? (
        <ReportChainItemSheet itemId={reporting.key} name={reporting.name} chain={reporting.citation.chain} onClose={() => setReporting(null)} />
      ) : null}
    </View>
  );
}
