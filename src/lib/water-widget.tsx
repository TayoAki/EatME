import * as Sentry from '@sentry/react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { useEffect, useRef } from 'react';
import { AppState, Platform } from 'react-native';

import type { WaterWidgetProps } from '@/widgets/water-widget';
import { waterAmounts } from '@/shared/units';

import { useAddWater, useProfile, useWater } from './queries';
import { todayIso } from './time';

type WidgetModule = typeof import('@/widgets/water-widget');
type WaterWidget = WidgetModule['default'];

/** The widget is iOS only and needs a development or store build (not Expo Go). */
export const waterWidgetSupported =
  Platform.OS === 'ios' && Constants.executionEnvironment !== ExecutionEnvironment.StoreClient;

let widget: WaterWidget | null | undefined;
function loadWidget() {
  if (widget !== undefined) return widget;
  widget = null;
  if (!waterWidgetSupported) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    widget = (require('@/widgets/water-widget') as WidgetModule).default;
  } catch (error) {
    Sentry.logger.warn('Water widget unavailable', { error: String(error) });
  }
  return widget;
}

/** Glasses added with the widget's button since the app last saved them. */
async function pendingFromWidget(w: WaterWidget) {
  const entries = await w.getTimeline();
  const props = entries.at(-1)?.props as Partial<WaterWidgetProps> | undefined;
  return Math.max(0, Math.round(props?.pendingMl ?? 0));
}

/**
 * Keeps the iOS water widget in step with today's water: saves glasses added on the widget when the
 * app opens, then shows the new total. Rendered once by the signed-in layout (iOS builds only).
 */
export function WaterWidgetSync() {
  const profile = useProfile();
  const today = todayIso();
  const water = useWater(today);
  const add = useAddWater(today);
  const busy = useRef(false);

  const totalMl = water.data?.totalMl;
  const goalMl = profile?.dailyWaterMl;
  const imperial = profile?.unitSystem === 'imperial';

  useEffect(() => {
    const w = loadWidget();
    if (!w || totalMl === undefined || goalMl === undefined) return;

    const refresh = async () => {
      if (busy.current) return;
      busy.current = true;
      try {
        const pending = await pendingFromWidget(w);
        if (pending > 0) await add.mutateAsync(pending);
        w.updateSnapshot({
          totalMl: totalMl + pending,
          pendingMl: 0,
          goalMl,
          glassMl: waterAmounts(imperial ? 'imperial' : 'metric')[0].ml,
          imperial,
        });
      } catch (error) {
        Sentry.logger.error('Water widget sync failed', { error: String(error) });
      } finally {
        busy.current = false;
      }
    };

    void refresh();
    const subscription = AppState.addEventListener('change', (state) => state === 'active' && void refresh());
    return () => subscription.remove();
    // `add` is stable enough: a new mutation object does not need a new sync.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalMl, goalMl, imperial]);

  return null;
}
