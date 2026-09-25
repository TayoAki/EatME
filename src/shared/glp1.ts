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

/** 1 mild, 2 moderate, 3 severe. */
export const SEVERITY_LABELS = { 1: 'Mild', 2: 'Moderate', 3: 'Severe' } as const;
export type Severity = keyof typeof SEVERITY_LABELS;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/** `PUT /api/glp1`: the medicine and when it is taken. `null` turns GLP-1 mode off. */
export const glp1SettingsSchema = z
  .object({
    medication: z.enum(GLP1_MEDICATIONS),
    schedule: z.enum(GLP1_SCHEDULES),
    /** 0 = Sunday … 6 = Saturday. Weekly medicines only. */
    doseWeekday: z.number().int().min(0).max(6).nullable(),
  })
  .refine((s) => s.schedule === 'daily' || s.doseWeekday !== null, {
    message: 'Pick the day you take it',
    path: ['doseWeekday'],
  });
export type Glp1Settings = z.infer<typeof glp1SettingsSchema>;

/** `POST /api/glp1/doses`. `date` logs it on an earlier day (at noon); the label is the user's own. */
export const addDoseSchema = z.object({
  date: isoDate.optional(),
  doseLabel: z.string().trim().max(40).optional(),
  site: z.enum(INJECTION_SITES).optional(),
  note: z.string().trim().max(300).optional(),
});

/** `POST /api/glp1/symptoms`. */
export const addSymptomsSchema = z.object({
  date: isoDate.optional(),
  symptoms: z.array(z.enum(SYMPTOMS)).min(1).max(SYMPTOMS.length),
  severity: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  note: z.string().trim().max(300).optional(),
});

export type AddDoseBody = z.infer<typeof addDoseSchema>;
export type AddSymptomsBody = z.infer<typeof addSymptomsSchema>;

export type DoseLog = { id: string; takenAt: string; doseLabel: string | null; site: InjectionSite | null; note: string | null };
export type SymptomLog = { id: string; loggedAt: string; symptoms: Symptom[]; severity: Severity; note: string | null };

export type Glp1Response = {
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

/** Symptoms that deserve a call to a doctor when severe. Shown as information, not a diagnosis. */
export const URGENT_WHEN_SEVERE: readonly Symptom[] = ['vomiting', 'diarrhea', 'dizziness'];
