import { z } from 'zod';

/**
 * GLP-1 mode: EatME records what the user takes and how they feel, and puts protein, fiber and
 * water first. It never suggests doses or changes to a prescription.
 */

export const GLP1_MEDICATIONS = [
  'semaglutide_injection',
  'tirzepatide',
  'semaglutide_tablet',
  'liraglutide',
  'other',
] as const;
export type Glp1Medication = (typeof GLP1_MEDICATIONS)[number];

export const GLP1_MEDICATION_LABELS: Record<Glp1Medication, { title: string; description: string }> = {
  semaglutide_injection: { title: 'Semaglutide injection', description: 'Ozempic, Wegovy' },
  tirzepatide: { title: 'Tirzepatide', description: 'Mounjaro, Zepbound' },
  semaglutide_tablet: { title: 'Semaglutide tablet', description: 'Rybelsus, Wegovy pill' },
  liraglutide: { title: 'Liraglutide', description: 'Saxenda, Victoza' },
  other: { title: 'Another GLP-1 medicine', description: 'Enter the details as your prescriber gave them' },
};

export const GLP1_SCHEDULES = ['weekly', 'daily'] as const;
export type Glp1Schedule = (typeof GLP1_SCHEDULES)[number];

/** The usual rhythm of each medicine, used as the default. The user can change it. */
export const DEFAULT_SCHEDULE: Record<Glp1Medication, Glp1Schedule> = {
  semaglutide_injection: 'weekly',
  tirzepatide: 'weekly',
  semaglutide_tablet: 'daily',
  liraglutide: 'daily',
  other: 'weekly',
};

/** How the medicine comes. Injections come as pens or vials, tablets in packs. */
export const MEDICINE_FORMS = ['pen', 'vial', 'tablet'] as const;
export type MedicineForm = (typeof MEDICINE_FORMS)[number];
export const MEDICINE_FORM_LABELS: Record<MedicineForm, { title: string; container: string; containers: string; doses: string }> = {
  pen: { title: 'Pens', container: 'pen', containers: 'pens', doses: 'doses' },
  vial: { title: 'Vials', container: 'vial', containers: 'vials', doses: 'doses' },
  tablet: { title: 'Tablets', container: 'pack', containers: 'packs', doses: 'tablets' },
};

/** Forms a medicine can have: tablets for the tablet, pens or vials for injections, any for Other. */
export function formsFor(medication: Glp1Medication): readonly MedicineForm[] {
  if (medication === 'semaglutide_tablet') return ['tablet'];
  if (medication === 'other') return MEDICINE_FORMS;
  return ['pen', 'vial'];
}
export const defaultForm = (medication: Glp1Medication): MedicineForm => formsFor(medication)[0];

/** Longest name for "Other", as written on the prescription label. */
export const MAX_MEDICINE_NAME = 40;

export const INJECTION_SITES = ['abdomen', 'thigh', 'upper_arm'] as const;
export type InjectionSite = (typeof INJECTION_SITES)[number];
export const INJECTION_SITE_LABELS: Record<InjectionSite, string> = {
  abdomen: 'Stomach',
  thigh: 'Thigh',
  upper_arm: 'Upper arm',
};

export const SYMPTOMS = [
  'nausea',
  'vomiting',
  'constipation',
  'diarrhea',
  'reflux',
  'bloating',
  'low_appetite',
  'fatigue',
  'headache',
  'dizziness',
] as const;
export type Symptom = (typeof SYMPTOMS)[number];
export const SYMPTOM_LABELS: Record<Symptom, string> = {
  nausea: 'Nausea',
  vomiting: 'Vomiting',
  constipation: 'Constipation',
  diarrhea: 'Diarrhea',
  reflux: 'Heartburn',
  bloating: 'Bloating',
  low_appetite: 'Low appetite',
  fatigue: 'Tiredness',
  headache: 'Headache',
  dizziness: 'Dizziness',
};

/** Injection sites are on the left or the right (v2.2); older doses have no side. */
export const BODY_SIDES = ['left', 'right'] as const;
export type BodySide = (typeof BODY_SIDES)[number];
export const BODY_SIDE_LABELS: Record<BodySide, string> = { left: 'Left', right: 'Right' };

/** "Left thigh", "Stomach" (no side). */
export function siteName(site: InjectionSite, side: BodySide | null) {
  const place = INJECTION_SITE_LABELS[site];
  return side ? `${BODY_SIDE_LABELS[side]} ${place.toLowerCase()}` : place;
}

/** 1 mild, 2 moderate, 3 severe. */
export const SEVERITY_LABELS = { 1: 'Mild', 2: 'Moderate', 3: 'Severe' } as const;
export type Severity = keyof typeof SEVERITY_LABELS;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

const settingsFields = {
  medication: z.enum(GLP1_MEDICATIONS),
  schedule: z.enum(GLP1_SCHEDULES),
  /** 0 = Sunday … 6 = Saturday. Weekly medicines only. */
  doseWeekday: z.number().int().min(0).max(6).nullable(),
};
const needsWeekday = <T extends { schedule: Glp1Schedule; doseWeekday: number | null }>(s: T) =>
  s.schedule === 'daily' || s.doseWeekday !== null;
const weekdayIssue = { message: 'Pick the day you take it', path: ['doseWeekday'] };

/** `PUT /api/glp1`: the medicine and when it is taken. `null` turns GLP-1 mode off. */
export const glp1SettingsSchema = z.object(settingsFields).refine(needsWeekday, weekdayIssue);
export type Glp1Settings = z.infer<typeof glp1SettingsSchema>;

/** The medicine's name (Other only) and form, sent with `PUT /api/glp1` when GLP-1 mode is turned on. */
export const medicineDetailsSchema = z.object({
  name: z.string().trim().max(MAX_MEDICINE_NAME).optional(),
  form: z.enum(MEDICINE_FORMS).optional(),
});
export type MedicineDetails = z.infer<typeof medicineDetailsSchema>;

/** `POST /api/glp1/switch`: the new medicine, from `startsOn` (today when left out). */
export const switchMedicineSchema = z
  .object({
    ...settingsFields,
    name: z.string().trim().max(MAX_MEDICINE_NAME).optional(),
    form: z.enum(MEDICINE_FORMS).optional(),
    startsOn: isoDate.optional(),
    /** Doses already logged from `startsOn` on count for the new medicine (default true). */
    moveDoses: z.boolean().optional(),
  })
  .refine(needsWeekday, weekdayIssue);
export type SwitchMedicineBody = z.infer<typeof switchMedicineSchema>;

/** `PATCH /api/glp1/medications/:id`: fix a name, the form or the dates. */
export const updateMedicineSchema = z
  .object({
    name: z.string().trim().max(MAX_MEDICINE_NAME).nullable(),
    form: z.enum(MEDICINE_FORMS),
    startedOn: isoDate,
    endedOn: isoDate,
  })
  .partial();
export type UpdateMedicineBody = z.infer<typeof updateMedicineSchema>;

/** `POST /api/glp1/doses`. `date` logs it on an earlier day (at noon); the label is the user's own. */
export const addDoseSchema = z
  .object({
    date: isoDate.optional(),
    doseLabel: z.string().trim().max(40).optional(),
    site: z.enum(INJECTION_SITES).optional(),
    side: z.enum(BODY_SIDES).optional(),
    note: z.string().trim().max(300).optional(),
  })
  .refine((d) => !d.side || d.site, { message: 'Pick where first', path: ['side'] });

/** Supply counts: every number is one the person enters (from the label or the pharmacist). */
export const SUPPLY_LIMITS = {
  dosesPerContainer: { min: 1, max: 60 },
  dosesLeft: { min: 0, max: 60 },
  unopened: { min: 0, max: 20 },
  useWithinDays: { min: 1, max: 90 },
  lowSupplyAt: { min: 0, max: 60 },
  refill: { min: 1, max: 20 },
} as const;
const count = (limit: { min: number; max: number }) => z.number().int().min(limit.min).max(limit.max);

/** `PUT /api/glp1/supply`: set up or fix the counts (counting starts again from now). */
export const supplySchema = z
  .object({
    form: z.enum(MEDICINE_FORMS),
    dosesPerContainer: count(SUPPLY_LIMITS.dosesPerContainer),
    dosesLeft: count(SUPPLY_LIMITS.dosesLeft),
    unopened: count(SUPPLY_LIMITS.unopened),
    openedOn: isoDate.nullable().optional(),
    useWithinDays: count(SUPPLY_LIMITS.useWithinDays).nullable().optional(),
    lowSupplyAt: count(SUPPLY_LIMITS.lowSupplyAt),
    remindUseBy: z.boolean(),
    remindLow: z.boolean(),
  })
  .refine((s) => s.dosesLeft <= s.dosesPerContainer, {
    message: "The one you're using can't have more doses than a full one",
    path: ['dosesLeft'],
  });
export type SupplyBody = z.infer<typeof supplySchema>;

/** `POST /api/glp1/supply/refill`: unopened pens, vials or packs added. */
export const refillSchema = z.object({ containers: count(SUPPLY_LIMITS.refill) });

/** `POST /api/glp1/symptoms`. */
export const addSymptomsSchema = z.object({
  date: isoDate.optional(),
  symptoms: z.array(z.enum(SYMPTOMS)).min(1).max(SYMPTOMS.length),
  severity: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  note: z.string().trim().max(300).optional(),
});

export type AddDoseBody = z.infer<typeof addDoseSchema>;
export type AddSymptomsBody = z.infer<typeof addSymptomsSchema>;

export type DoseLog = {
  id: string;
  takenAt: string;
  doseLabel: string | null;
  site: InjectionSite | null;
  /** v2.2; null for older doses and for doses without a site. */
  side: BodySide | null;
  /** The medicine it was logged for (v2.2); null for doses from before medicine history. */
  medicationId: string | null;
  note: string | null;
};
export type SymptomLog = { id: string; loggedAt: string; symptoms: Symptom[]; severity: Severity; note: string | null };

/** A medicine in GLP-1 mode: the current one (`endedOn` null) or an earlier one. */
export type Glp1Medicine = {
  id: string;
  medication: Glp1Medication;
  /** Other: the name as written on the prescription label. */
  name: string | null;
  form: MedicineForm;
  schedule: Glp1Schedule;
  doseWeekday: number | null;
  startedOn: string;
  endedOn: string | null;
};

/** The medicine's name as the person knows it: the label name for Other, the generic name otherwise. */
export function medicineTitle(medicine: Pick<Glp1Medicine, 'medication' | 'name'>) {
  return medicine.medication === 'other' && medicine.name ? medicine.name : GLP1_MEDICATION_LABELS[medicine.medication].title;
}

/** Pens & vials: what is left, replayed from the counts the person entered and the doses logged since. */
export type SupplyStatus = {
  form: MedicineForm;
  dosesPerContainer: number;
  /** Doses left in the one in use (0 = nothing open). */
  openLeft: number;
  unopened: number;
  totalLeft: number;
  openedOn: string | null;
  useWithinDays: number | null;
  /** Last day for the open one (opened + use within days); null without a use-by or nothing open. */
  useBy: string | null;
  lowSupplyAt: number;
  low: boolean;
  /** The day the supply went low (the refill reminder fires the next morning, once). */
  lowSince: string | null;
  /** More doses were logged than the counts allow: the counts need fixing. */
  overdrawn: boolean;
  remindUseBy: boolean;
  remindLow: boolean;
};

export type LastSite = { site: InjectionSite; side: BodySide | null; takenAt: string };

export type Glp1Response = {
  /** v2.2: the current medicine (null when GLP-1 mode is off). */
  current: Glp1Medicine | null;
  /** v2.2: earlier medicines, the latest first. */
  history: Glp1Medicine[];
  /** v2.2: Pens & vials, when the person set it up for the current medicine. */
  supply: SupplyStatus | null;
  /** v2.2: the last dose with a site (any medicine). */
  lastSite: LastSite | null;
  settings: Glp1Settings | null;
  /** The last 12 weeks, newest first. */
  doses: DoseLog[];
  /** The last 30 days, newest first. */
  symptoms: SymptomLog[];
  /** YYYY-MM-DD in the user's time zone. */
  today: string;
  /** The next scheduled dose (today when it is due and not logged yet), or null when off. */
  nextDose: string | null;
  takenToday: boolean;
};

const weekdayOf = (isoDay: string) => new Date(`${isoDay}T12:00:00Z`).getUTCDay();
function shift(isoDay: string, days: number) {
  const d = new Date(`${isoDay}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

/**
 * The next scheduled dose day: today if it is a dose day and nothing is logged yet, otherwise the
 * next matching day. Only the schedule the user entered — never a recommendation.
 */
export function nextDoseDate(settings: Glp1Settings, today: string, takenToday: boolean) {
  if (settings.schedule === 'daily') return takenToday ? shift(today, 1) : today;
  let diff = ((settings.doseWeekday ?? 0) - weekdayOf(today) + 7) % 7;
  if (diff === 0 && takenToday) diff = 7;
  return shift(today, diff);
}

/** The counts at the last set-up, fix or refill of the supply. */
export type SupplyCount = {
  dosesPerContainer: number;
  dosesLeft: number;
  unopened: number;
  openedOn: string | null;
  /** Local date the counts were entered. */
  countDate: string;
  useWithinDays: number | null;
  lowSupplyAt: number;
};

/**
 * Replays the doses logged since the counts were entered (their local dates, oldest first): each
 * dose takes one from the open pen, vial or pack; when that is empty the next unopened one is
 * opened on that dose's day. Counts only — never an amount of medicine.
 */
export function replaySupply(counts: SupplyCount, doseDates: readonly string[]) {
  let openLeft = counts.dosesLeft;
  let unopened = counts.unopened;
  let openedOn = counts.openedOn;
  let overdrawn = false;
  const total = () => openLeft + unopened * counts.dosesPerContainer;
  let lowSince = total() <= counts.lowSupplyAt ? counts.countDate : null;
  for (const date of doseDates) {
    if (openLeft > 0) {
      openLeft -= 1;
    } else if (unopened > 0) {
      unopened -= 1;
      openLeft = counts.dosesPerContainer - 1;
      openedOn = date;
    } else {
      overdrawn = true;
    }
    if (lowSince === null && total() <= counts.lowSupplyAt) lowSince = date;
  }
  const totalLeft = total();
  const useBy = openLeft > 0 && openedOn && counts.useWithinDays ? shift(openedOn, counts.useWithinDays) : null;
  return { openLeft, unopened, openedOn, totalLeft, useBy, low: totalLeft <= counts.lowSupplyAt, lowSince, overdrawn };
}

/** Symptoms that deserve a call to a doctor when severe. Shown as information, not a diagnosis. */
export const URGENT_WHEN_SEVERE: readonly Symptom[] = ['vomiting', 'diarrhea', 'dizziness'];
