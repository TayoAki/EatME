import { Text, TextInput, View } from 'react-native';

import { Chip } from '@/components/ui/chip';
import { OptionRow } from '@/components/ui/option-row';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import {
  DEFAULT_SCHEDULE,
  formsFor,
  GLP1_MEDICATION_LABELS,
  GLP1_MEDICATIONS,
  MAX_MEDICINE_NAME,
  MEDICINE_FORM_LABELS,
  type Glp1Medication,
  type Glp1Schedule,
  type MedicineForm,
} from '@/shared/glp1';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const SCHEDULE_OPTIONS = [
  { label: 'Once a week', value: 'weekly' },
  { label: 'Every day', value: 'daily' },
] as const;

/** What the person picks for a medicine (turning GLP-1 mode on, changing or switching it). */
export type MedicineChoice = {
  medication: Glp1Medication | null;
  name: string;
  form: MedicineForm | null;
  schedule: Glp1Schedule;
  weekday: number | null;
};

export const emptyChoice: MedicineChoice = { medication: null, name: '', form: null, schedule: 'weekly', weekday: null };

export const choiceReady = (choice: MedicineChoice) =>
  choice.medication !== null && (choice.schedule === 'daily' || choice.weekday !== null);

/** The body for the API: the name only for Other, the form the medicine can have. */
export function choiceBody(choice: MedicineChoice) {
  const medication = choice.medication!;
  const forms = formsFor(medication);
  return {
    medication,
    schedule: choice.schedule,
    doseWeekday: choice.schedule === 'weekly' ? choice.weekday : null,
    name: medication === 'other' ? choice.name.trim() || undefined : undefined,
    form: choice.form && forms.includes(choice.form) ? choice.form : forms[0],
  };
}

type MedicineFieldsProps = {
  value: MedicineChoice;
  onChange: (value: MedicineChoice) => void;
  /** Changing the schedule of the current medicine: the medicine itself stays. */
  lockMedication?: boolean;
  /** Medicines that can't be picked (switching to the one already taken). */
  exclude?: Glp1Medication;
};

/** Medicine, its name (Other), pens or vials, how often and the dose day. */
export function MedicineFields({ value, onChange, lockMedication, exclude }: MedicineFieldsProps) {
  const set = (changes: Partial<MedicineChoice>) => onChange({ ...value, ...changes });
  const forms = value.medication ? formsFor(value.medication) : [];

  const pick = (medication: Glp1Medication) =>
    set({
      medication,
      schedule: value.medication === null ? DEFAULT_SCHEDULE[medication] : value.schedule,
      form: formsFor(medication).includes(value.form ?? 'pen') ? value.form : formsFor(medication)[0],
    });

  return (
    <View className="gap-5">
      {lockMedication ? null : (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Your medicine</Text>
          <View className="gap-2">
            {GLP1_MEDICATIONS.filter((m) => m !== exclude).map((m) => (
              <OptionRow
                key={m}
                title={GLP1_MEDICATION_LABELS[m].title}
                description={GLP1_MEDICATION_LABELS[m].description}
                selected={value.medication === m}
                onPress={() => pick(m)}
              />
            ))}
          </View>
        </View>
      )}
      {value.medication === 'other' ? (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Name (optional)</Text>
          <TextInput
            accessibilityLabel="Medicine name"
            value={value.name}
            onChangeText={(name) => set({ name: name.slice(0, MAX_MEDICINE_NAME) })}
            maxLength={MAX_MEDICINE_NAME}
            placeholder="As it's written on your prescription label"
            placeholderTextColor={colors.faint}
            className="h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
          />
          <Text className="ml-1 mt-1.5 text-[13px] leading-[18px] text-muted">
            Only you see it. It never appears in reminders.
          </Text>
        </View>
      ) : null}
      {forms.length > 1 ? (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">It comes as</Text>
          <SegmentedControl
            options={forms.map((form) => ({ label: MEDICINE_FORM_LABELS[form].title, value: form }))}
            value={value.form && forms.includes(value.form) ? value.form : forms[0]}
            onChange={(form) => set({ form })}
          />
        </View>
      ) : null}
      <View>
        <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">How often you take it</Text>
        <SegmentedControl options={SCHEDULE_OPTIONS} value={value.schedule} onChange={(schedule) => set({ schedule })} />
      </View>
      {value.schedule === 'weekly' ? (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Dose day</Text>
          <View className="flex-row flex-wrap gap-2">
            {WEEKDAYS.map((label, index) => (
              <Chip key={label} label={label} selected={value.weekday === index} onPress={() => set({ weekday: index })} />
            ))}
          </View>
        </View>
      ) : null}
    </View>
  );
}
