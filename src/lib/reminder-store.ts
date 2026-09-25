import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { DEFAULT_REMINDERS, type ReminderSettings } from './reminder-plan';

type ReminderState = {
  settings: ReminderSettings;
  update: (changes: Partial<ReminderSettings>) => void;
  reset: () => void;
};

/** Reminder choices for this device (the notifications are scheduled on the device). */
export const useReminderStore = create<ReminderState>()(
  persist(
    (set) => ({
      settings: DEFAULT_REMINDERS,
      update: (changes) => set((s) => ({ settings: { ...s.settings, ...changes } })),
      reset: () => set({ settings: DEFAULT_REMINDERS }),
    }),
    {
      name: 'eatme-reminders',
      storage: createJSONStorage(() => AsyncStorage),
      version: 0,
      // New reminder kinds added later get their defaults.
      merge: (persisted, current) => ({
        ...current,
        settings: { ...DEFAULT_REMINDERS, ...(persisted as Partial<ReminderState> | undefined)?.settings },
      }),
    },
  ),
);
