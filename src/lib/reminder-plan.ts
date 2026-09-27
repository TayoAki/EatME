import { MEDICINE_FORM_LABELS, type Glp1Settings, type SupplyStatus } from '@/shared/glp1';

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
  /** Step on the scale: weekly on `weekday` (0 = Sunday, as the app stores it) or daily when null. */
  weighIn: MealReminder & { weekday: number | null };
  /** Progress photo every 4 weeks on `weekday`, counted from `startDate` (the first one). */
  progressPhoto: MealReminder & { weekday: number; startDate: string | null };
  /** Plan tomorrow (Premium): in the evening, a nudge to draft tomorrow. */
  planTomorrow: MealReminder;
};

export const DEFAULT_REMINDERS: ReminderSettings = {
  breakfast: { enabled: false, hour: 8, minute: 30 },
  lunch: { enabled: false, hour: 12, minute: 30 },
  dinner: { enabled: false, hour: 19, minute: 0 },
  water: { enabled: false, startHour: 9, endHour: 19, everyHours: 2 },
  dose: { enabled: false, hour: 9, minute: 0 },
  weighIn: { enabled: false, hour: 7, minute: 30, weekday: 1 },
  progressPhoto: { enabled: false, hour: 9, minute: 0, weekday: 0, startDate: null },
  planTomorrow: { enabled: false, hour: 20, minute: 0 },
};

/** Days between progress photos. */
export const PROGRESS_PHOTO_DAYS = 28;

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
  trigger:
    | { type: 'daily'; hour: number; minute: number }
    | { type: 'weekly'; weekday: number; hour: number; minute: number }
    /** Once, at this local date and time (ISO). */
    | { type: 'date'; date: string };
};

/** What else the plan needs besides the settings: Pens & vials, and the time "now". */
export type ReminderContext = { supply?: SupplyStatus | null; now?: Date };

const localAt = (isoDate: string, hour: number, minute: number, dayShift = 0) => {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d + dayShift, hour, minute);
};

/** The first progress-photo day: `weekday` from today on (today if it is that day and the time is still ahead). */
export function firstPhotoDay(weekday: number, hour: number, minute: number, now = new Date()) {
  const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
  let diff = (weekday - date.getDay() + 7) % 7;
  if (diff === 0 && date <= now) diff = 7;
  date.setDate(date.getDate() + diff);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** The hours water reminders fire at, e.g. 9, 11, 13, 15, 17, 19. */
export function waterHours({ startHour, endHour, everyHours }: ReminderSettings['water']) {
  const hours: number[] = [];
  for (let hour = startHour; hour <= endHour && hours.length < 12; hour += Math.max(1, everyHours)) hours.push(hour);
  return hours;
}

/** Everything that should be scheduled for these settings. */
export function planReminders(settings: ReminderSettings, glp1: Glp1Settings | null, context: ReminderContext = {}): PlannedReminder[] {
  const planned: PlannedReminder[] = [];
  const now = context.now ?? new Date();
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

  // Pens & vials: once, the day before the use-by date (at the dose-reminder time), and the morning
  // after the supply went low. Like the dose reminder, they never name the medicine.
  const supply = glp1 ? context.supply : null;
  if (supply?.remindUseBy && supply.useBy && supply.openLeft > 0) {
    const at = localAt(supply.useBy, settings.dose.hour, settings.dose.minute, -1);
    if (at > now) {
      planned.push({
        identifier: `${REMINDER_PREFIX}supply-use-by`,
        title: 'Supply reminder',
        body: "Check the date on the one you're using.",
        url: '/glp1',
        trigger: { type: 'date', date: at.toISOString() },
      });
    }
  }
  if (supply?.remindLow && supply.low && supply.lowSince && !supply.overdrawn) {
    const at = localAt(supply.lowSince, 9, 0, 1);
    const doses = MEDICINE_FORM_LABELS[supply.form].doses;
    if (at > now) {
      planned.push({
        identifier: `${REMINDER_PREFIX}supply-low`,
        title: 'Supply reminder',
        body: `Time to refill: ${supply.totalLeft} ${supply.totalLeft === 1 ? doses.replace(/s$/, '') : doses} left.`,
        url: '/glp1',
        trigger: { type: 'date', date: at.toISOString() },
      });
    }
  }

  // Progress photos: every 4 weeks from the first day, the next three scheduled once each.
  const photo = settings.progressPhoto;
  if (photo.enabled && photo.startDate) {
    let n = 0;
    for (let k = 0; n < 3 && k < 400; k++) {
      const at = localAt(photo.startDate, photo.hour, photo.minute, k * PROGRESS_PHOTO_DAYS);
      if (at <= now) continue;
      planned.push({
        identifier: `${REMINDER_PREFIX}progress-photo-${n}`,
        title: 'Progress photo',
        body: 'Time for your progress photo. Same spot and light as last time makes them easy to compare.',
        url: '/weight?tab=photos',
        trigger: { type: 'date', date: at.toISOString() },
      });
      n += 1;
    }
  }

  if (settings.planTomorrow.enabled) {
    planned.push({
      identifier: `${REMINDER_PREFIX}plan-tomorrow`,
      title: 'Plan tomorrow',
      body: 'Draft tomorrow from your own meals. Nothing is logged until you tap.',
      url: '/',
      trigger: { type: 'daily', hour: settings.planTomorrow.hour, minute: settings.planTomorrow.minute },
    });
  }

  if (settings.weighIn.enabled) {
    const { hour, minute, weekday } = settings.weighIn;
    planned.push({
      identifier: `${REMINDER_PREFIX}weigh-in`,
      title: 'Weigh-in',
      body: 'Step on the scale before breakfast and log it. The trend matters more than any one number.',
      url: '/weight',
      trigger: weekday === null ? { type: 'daily', hour, minute } : { type: 'weekly', weekday: weekday + 1, hour, minute },
    });
  }
  return planned;
}

export function formatTimeOfDay({ hour, minute }: TimeOfDay) {
  return new Date(2000, 0, 1, hour, minute).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
