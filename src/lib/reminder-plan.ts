import type { Glp1Settings } from '@/shared/glp1';

/**
 * Reminder settings live on the device (the notifications are scheduled on the device too).
 * This file has no native imports so the plan can be checked anywhere.
 */

export type TimeOfDay = { hour: number; minute: number };
export type MealReminder = TimeOfDay & { enabled: boolean };
export type MealSlot = 'breakfast' | 'lunch' | 'dinner';

export type ReminderSettings = {
  breakfast: MealReminder;
  lunch: MealReminder;
  dinner: MealReminder;
  /** A gentle nudge to drink, every few hours between two times. */
  water: { enabled: boolean; startHour: number; endHour: number; everyHours: number };
  /** GLP-1 mode: on the dose day (or every day for daily medicines) at this time. */
  dose: MealReminder;
};

export const DEFAULT_REMINDERS: ReminderSettings = {
  breakfast: { enabled: false, hour: 8, minute: 30 },
  lunch: { enabled: false, hour: 12, minute: 30 },
  dinner: { enabled: false, hour: 19, minute: 0 },
  water: { enabled: false, startHour: 9, endHour: 19, everyHours: 2 },
  dose: { enabled: false, hour: 9, minute: 0 },
};

export const MEAL_SLOTS: { slot: MealSlot; title: string; body: string }[] = [
  { slot: 'breakfast', title: 'Breakfast', body: 'Snap your breakfast — it only takes a few seconds.' },
  { slot: 'lunch', title: 'Lunch', body: 'Had lunch? Log it with a photo or a few words.' },
  { slot: 'dinner', title: 'Dinner', body: 'Log your dinner to round off the day.' },
];

/** Every EatME reminder id starts with this, so a sync can replace exactly its own. */
export const REMINDER_PREFIX = 'eatme-';

export type PlannedReminder = {
  identifier: string;
  title: string;
  body: string;
  /** Screen to open when the notification is tapped. */
  url: string;
  trigger: { type: 'daily'; hour: number; minute: number } | { type: 'weekly'; weekday: number; hour: number; minute: number };
};

/** The hours water reminders fire at, e.g. 9, 11, 13, 15, 17, 19. */
export function waterHours({ startHour, endHour, everyHours }: ReminderSettings['water']) {
  const hours: number[] = [];
  for (let hour = startHour; hour <= endHour && hours.length < 12; hour += Math.max(1, everyHours)) hours.push(hour);
  return hours;
}

/** Everything that should be scheduled for these settings. */
export function planReminders(settings: ReminderSettings, glp1: Glp1Settings | null): PlannedReminder[] {
  const planned: PlannedReminder[] = [];
  for (const { slot, title, body } of MEAL_SLOTS) {
    const reminder = settings[slot];
    if (!reminder.enabled) continue;
    planned.push({
      identifier: `${REMINDER_PREFIX}${slot}`,
      title,
      body,
      url: '/scan',
      trigger: { type: 'daily', hour: reminder.hour, minute: reminder.minute },
    });
  }

  if (settings.water.enabled) {
    for (const hour of waterHours(settings.water)) {
      planned.push({
        identifier: `${REMINDER_PREFIX}water-${hour}`,
        title: 'Water',
        body: 'Time for a glass of water.',
        url: '/',
        trigger: { type: 'daily', hour, minute: 0 },
      });
    }
  }

  if (glp1 && settings.dose.enabled) {
    const { hour, minute } = settings.dose;
    planned.push(
      glp1.schedule === 'weekly' && glp1.doseWeekday !== null
        ? {
            identifier: `${REMINDER_PREFIX}dose`,
            title: 'Dose day',
            body: "Today is your dose day. Log it in EatME once you've taken it.",
            url: '/',
            // Notifications count weekdays from 1 = Sunday; the app stores 0 = Sunday.
            trigger: { type: 'weekly', weekday: glp1.doseWeekday + 1, hour, minute },
          }
        : {
            identifier: `${REMINDER_PREFIX}dose`,
            title: 'Your GLP-1 medicine',
            body: "Log today's dose in EatME once you've taken it.",
            url: '/',
            trigger: { type: 'daily', hour, minute },
          },
    );
  }
  return planned;
}

export function formatTimeOfDay({ hour, minute }: TimeOfDay) {
  return new Date(2000, 0, 1, hour, minute).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
