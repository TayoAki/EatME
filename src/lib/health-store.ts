import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { SyncedDay } from './health-plan';

/** Days older than this are no longer kept in step with the health app. */
const KEEP_DAYS = 7;

type HealthState = {
  enabled: boolean;
  /** v2.3: read steps, workouts and sleep (shown in the app, never sent anywhere). */
  readEnabled: boolean;
  lastSyncAt: string | null;
  /** Per local day: every item written to the health app and its version. */
  synced: Record<string, SyncedDay>;
  setEnabled: (enabled: boolean) => void;
  setReadEnabled: (readEnabled: boolean) => void;
  saveDay: (date: string, day: SyncedDay) => void;
  reset: () => void;
};

/** Apple Health / Health Connect sync on this device. */
export const useHealthStore = create<HealthState>()(
  persist(
    (set) => ({
      enabled: false,
      readEnabled: false,
      lastSyncAt: null,
      synced: {},
      setEnabled: (enabled) => set({ enabled }),
      setReadEnabled: (readEnabled) => set({ readEnabled }),
      saveDay: (date, day) =>
        set((s) => {
          const oldest = new Date(Date.now() - KEEP_DAYS * 86_400_000).toISOString().slice(0, 10);
          const synced = Object.fromEntries(Object.entries({ ...s.synced, [date]: day }).filter(([d]) => d >= oldest));
          return { synced, lastSyncAt: new Date().toISOString() };
        }),
      reset: () => set({ enabled: false, readEnabled: false, lastSyncAt: null, synced: {} }),
    }),
    { name: 'eatme-health', storage: createJSONStorage(() => AsyncStorage), version: 0 },
  ),
);
