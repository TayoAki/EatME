import { router, useLocalSearchParams } from 'expo-router';
import { ExternalLink, SearchX } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DishSheet } from '@/components/menu/dish-sheet';
import { checkedText } from '@/components/menu/format';
import { MenuListView } from '@/components/menu/menu-list';
import { MenuMessage, MenuPremium, MenuTop } from '@/components/menu/menu-states';
import { ReportChainItemSheet } from '@/components/menu/report-chain-item-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { useCalmMode } from '@/lib/calm';
import { openLink } from '@/lib/links';
import { useBilling, useChainMenu, useFeatures } from '@/lib/queries';
import type { MenuRow } from '@/shared/menus';

/**
 * What fits at a chain (WHAT-TO-ORDER.md §5): its menu from our own table, every number from the
 * chain's nutrition information with the day it was checked, ranked for what's left of the day.
 * No AI. Premium, with one free try.
 */
export default function RestaurantMenuScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const insets = useSafeAreaInsets();
  const menu = useChainMenu(slug ?? '');
  const calm = useCalmMode();
  const payments = !!useFeatures().data?.payments;
  const billing = useBilling(payments);
  const [picked, setPicked] = useState<MenuRow | null>(null);
  const [reporting, setReporting] = useState<MenuRow | null>(null);
  const data = menu.data;
  // A side or drink can join a main dish (one item more at most).
  const sides = useMemo(
    () => (data ? [...data.fitsWell, ...data.others, ...data.hidden].filter((row) => row.kind === 'side' || row.kind === 'drink') : []),
    [data],
  );

  if (!data) {
    if (menu.error instanceof ApiError && menu.error.status === 402) return <MenuPremium />;
    if (menu.error instanceof ApiError && menu.error.status === 404) {
      return <MenuMessage icon={SearchX} title="Not in Weight Class yet" message={menu.error.message} />;
    }
    if (menu.isError) {
      return (
        <MenuMessage title="We couldn't open this menu" message={menu.error.message}>
          <Button title="Try again" loading={menu.isFetching} onPress={() => void menu.refetch()} />
        </MenuMessage>
      );
    }
    return <MenuMessage busy title="Opening the menu…" />;
  }

  const { chain } = data;
  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <MenuListView
        list={data}
        calm={calm}
        showFreeTry={payments && !billing.data?.premium}
        bottomSpace={insets.bottom}
        onPick={setPicked}
        header={<MenuTop title={chain.name} subtitle="What fits on the menu, from the restaurant's own numbers" />}
        footer={
          <View className="gap-1">
            <Text className="text-[13px] leading-[18px] text-muted">
              Numbers from {chain.name}&apos;s nutrition information, checked {checkedText(chain.checkedOn)}. Weight Class
              isn&apos;t affiliated with {chain.name}. Menus change; check with the restaurant.
            </Text>
            {chain.guideUrl ? (
              <Pressable
                accessibilityRole="link"
                accessibilityHint="Opens the chain's own nutrition guide"
                onPress={() => void openLink(chain.guideUrl!)}
                className="flex-row items-center gap-1.5 self-start py-1 active:opacity-60">
                <Text className="text-[14px] font-semibold text-ink underline">View {chain.name}&apos;s guide</Text>
                <ExternalLink size={14} color={colors.ink} />
              </Pressable>
            ) : null}
          </View>
        }
      />
      {picked ? (
        <DishSheet
          key={picked.key}
          row={picked}
          target={{ chainItemId: picked.key }}
          sides={picked.kind === 'side' || picked.kind === 'drink' ? [] : sides.filter((s) => s.key !== picked.key)}
          calm={calm}
          onClose={() => setPicked(null)}
          onReport={() => {
            // One sheet at a time: the report opens once the dish sheet has gone (iOS can't show both).
            const row = picked;
            setPicked(null);
            setTimeout(() => setReporting(row), 400);
          }}
          onLogged={() => {
            setPicked(null);
            router.dismissTo('/');
          }}
        />
      ) : null}
      {reporting ? (
        <ReportChainItemSheet itemId={reporting.key} name={reporting.name} chain={chain.name} onClose={() => setReporting(null)} />
      ) : null}
    </View>
  );
}
