import { router, useLocalSearchParams } from 'expo-router';
import { FileWarning, SearchX } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DishSheet } from '@/components/menu/dish-sheet';
import { MenuListView } from '@/components/menu/menu-list';
import { MenuMessage, MenuPremium, MenuTop } from '@/components/menu/menu-states';
import { Button } from '@/components/ui/button';
import { ApiError } from '@/lib/api';
import { useCalmMode } from '@/lib/calm';
import { haptics } from '@/lib/haptics';
import { useBilling, useFeatures, useMenuScan } from '@/lib/queries';
import { MENU_ANALYSIS_STAGES, type MenuRow } from '@/shared/menus';

/** "Working out what fits…" while the server reads the menu; the stage follows the seconds since it was sent. */
function useStage(createdAt: string | undefined) {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    if (!createdAt) return;
    const start = new Date(createdAt).getTime();
    const tick = () => setSeconds(Math.max(0, (Date.now() - start) / 1000));
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [createdAt]);
  return [...MENU_ANALYSIS_STAGES].reverse().find((stage) => seconds >= stage.after)?.label ?? MENU_ANALYSIS_STAGES[0].label;
}

/**
 * A scanned menu (WHAT-TO-ORDER.md §5): read in the background, then its dishes ranked for what's
 * left of the day, ranked again on every visit so the list follows what's been eaten since. Every
 * number is an estimate with a range. Kept for 30 days.
 */
export default function MenuScanScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const scan = useMenuScan(id ?? '');
  const calm = useCalmMode();
  const payments = !!useFeatures().data?.payments;
  const billing = useBilling(payments);
  const [picked, setPicked] = useState<MenuRow | null>(null);
  const data = scan.data;
  const stage = useStage(data?.status === 'reading' ? data.createdAt : undefined);

  const announced = useRef(false);
  useEffect(() => {
    if (data?.status !== 'ready' || announced.current) return;
    announced.current = true;
    haptics.success();
  }, [data?.status]);

  if (!data) {
    if (scan.error instanceof ApiError && scan.error.status === 402) return <MenuPremium />;
    if (scan.error instanceof ApiError && scan.error.status === 404) {
      return <MenuMessage icon={SearchX} title="Menu not found" message={scan.error.message} />;
    }
    if (scan.isError) {
      return (
        <MenuMessage title="We couldn't open this menu" message={scan.error.message}>
          <Button title="Try again" loading={scan.isFetching} onPress={() => void scan.refetch()} />
        </MenuMessage>
      );
    }
    return <MenuMessage busy title="Opening the menu…" />;
  }

  if (data.status === 'reading') {
    return (
      <MenuMessage
        busy
        title={stage}
        message="Weight Class reads each dish, works out its foods and portions, and ranks them for what's left of your day. It takes about half a minute."
      />
    );
  }

  if (data.status === 'failed' || !data.list) {
    return (
      <MenuMessage
        icon={FileWarning}
        title="We couldn't read this menu"
        message={`${data.error ?? 'Something went wrong reading the menu.'} It doesn't count as a scan.`}>
        <Button title="Scan again" onPress={() => (router.canGoBack() ? router.back() : router.replace('/scan'))} />
      </MenuMessage>
    );
  }

  const list = data.list;
  const dishes = list.fitsWell.length + list.others.length + list.hiddenCount;
  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <MenuListView
        list={list}
        calm={calm}
        showFreeTry={payments && !billing.data?.premium}
        bottomSpace={insets.bottom}
        onPick={setPicked}
        header={<MenuTop title={data.restaurant ?? 'Your menu'} subtitle={`${dishes === 1 ? '1 dish' : `${dishes} dishes`} from a menu photo · estimates`} />}
        footer={
          <Text className="text-[13px] leading-[18px] text-muted">
            Every number here is an estimate. Weight Class works out the dishes closest to your aim from the USDA food database;
            the rest are quick estimates with wider ranges. Menus are kept for 30 days.
          </Text>
        }
      />
      {picked ? (
        <DishSheet
          key={picked.key}
          row={picked}
          target={{ scanId: data.id, n: Number(picked.key) }}
          calm={calm}
          onClose={() => setPicked(null)}
          onLogged={() => {
            setPicked(null);
            router.dismissTo('/');
          }}
        />
      ) : null}
    </View>
  );
}
