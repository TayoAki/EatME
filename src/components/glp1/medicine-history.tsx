import { ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { DateWheels } from '@/components/pickers/date-wheels';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useUpdateMedicine } from '@/lib/queries';
import { fromIsoDate, todayIso } from '@/lib/time';
import { formsFor, MAX_MEDICINE_NAME, MEDICINE_FORM_LABELS, medicineTitle, type Glp1Medicine } from '@/shared/glp1';

const longDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

/** "Mar 12 – Jun 3, 2026" or "since Mar 12". */
export function medicinePeriod(medicine: Pick<Glp1Medicine, 'startedOn' | 'endedOn'>) {
  if (!medicine.endedOn) return `since ${longDate(medicine.startedOn)}`;
  const sameYear = medicine.startedOn.slice(0, 4) === medicine.endedOn.slice(0, 4);
  return `${sameYear ? shortDate(medicine.startedOn) : longDate(medicine.startedOn)} – ${longDate(medicine.endedOn)}`;
}

/** Earlier medicines with their dates; tap one to fix its name, form or dates. */
export function MedicineHistory({ history }: { history: Glp1Medicine[] }) {
  const [editing, setEditing] = useState<Glp1Medicine | null>(null);
  if (history.length === 0) return null;
  return (
    <View>
      <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Medicine history</Text>
      <View className="overflow-hidden rounded-[20px] border border-line">
        {history.map((medicine, index) => (
          <Pressable
            key={medicine.id}
            accessibilityRole="button"
            accessibilityLabel={`${medicineTitle(medicine)}, ${medicinePeriod(medicine)}. Edit`}
            onPress={() => setEditing(medicine)}
            className={`min-h-[56px] flex-row items-center gap-3 px-4 py-2 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
            <View className="flex-1">
              <Text className="text-[15px] text-ink">{medicineTitle(medicine)}</Text>
              <Text className="text-[13px] text-muted">
                {medicinePeriod(medicine)} · {MEDICINE_FORM_LABELS[medicine.form].title}
              </Text>
            </View>
            <ChevronRight size={18} color={colors.faint} />
          </Pressable>
        ))}
      </View>
      {editing ? <EditMedicineSheet medicine={editing} onClose={() => setEditing(null)} /> : null}
    </View>
  );
}

/** Fix a medicine's name (Other), form or dates (earlier medicines also their end date). */
export function EditMedicineSheet({ medicine, onClose }: { medicine: Glp1Medicine; onClose: () => void }) {
  const update = useUpdateMedicine();
  const forms = formsFor(medicine.medication);
  const [name, setName] = useState(medicine.name ?? '');
  const [form, setForm] = useState(medicine.form);
  const [startedOn, setStartedOn] = useState(medicine.startedOn);
  const [endedOn, setEndedOn] = useState(medicine.endedOn);
  const [editingDate, setEditingDate] = useState<'start' | 'end' | null>(null);
  const today = todayIso();
  const invalid =
    startedOn > today || (endedOn !== null && (endedOn > today || endedOn < startedOn))
      ? endedOn !== null && endedOn < startedOn
        ? 'A medicine has to end after it starts.'
        : "Dates can't be in the future."
      : null;

  const save = () =>
    update.mutate(
      {
        id: medicine.id,
        body: {
          ...(medicine.medication === 'other' ? { name: name.trim() || null } : {}),
          form,
          startedOn,
          ...(medicine.endedOn !== null && endedOn !== null ? { endedOn } : {}),
        },
      },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't save it", error.message),
      },
    );

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        {medicineTitle(medicine)}
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Fix the details. Doses stay with this medicine.</Text>
      <ScrollView style={{ maxHeight: 440 }} className="mt-4" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View className="gap-4">
          {medicine.medication === 'other' ? (
            <TextInput
              accessibilityLabel="Medicine name"
              value={name}
              onChangeText={(next) => setName(next.slice(0, MAX_MEDICINE_NAME))}
              maxLength={MAX_MEDICINE_NAME}
              placeholder="As it's written on your prescription label"
              placeholderTextColor={colors.faint}
              className="h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
            />
          ) : null}
          {forms.length > 1 ? (
            <SegmentedControl options={forms.map((f) => ({ label: MEDICINE_FORM_LABELS[f].title, value: f }))} value={form} onChange={setForm} />
          ) : null}
          <View className="overflow-hidden rounded-[20px] border border-line">
            <Pressable
              accessibilityRole="button"
              onPress={() => setEditingDate(editingDate === 'start' ? null : 'start')}
              className="min-h-[52px] flex-row items-center px-4 active:bg-surface">
              <Text className="flex-1 text-[15px] text-ink">Started</Text>
              <Text className="text-[15px] font-semibold text-ink">{longDate(startedOn)}</Text>
            </Pressable>
            {editingDate === 'start' ? <DateWheels value={startedOn} onChange={setStartedOn} minAge={0} maxAge={5} /> : null}
            {endedOn !== null ? (
              <>
                <Pressable
                  accessibilityRole="button"
                  onPress={() => setEditingDate(editingDate === 'end' ? null : 'end')}
                  className="min-h-[52px] flex-row items-center border-t border-line px-4 active:bg-surface">
                  <Text className="flex-1 text-[15px] text-ink">Ended</Text>
                  <Text className="text-[15px] font-semibold text-ink">{longDate(endedOn)}</Text>
                </Pressable>
                {editingDate === 'end' ? <DateWheels value={endedOn} onChange={setEndedOn} minAge={0} maxAge={5} /> : null}
              </>
            ) : null}
          </View>
          {invalid ? <Text className="px-1 text-[14px] text-danger">{invalid}</Text> : null}
        </View>
      </ScrollView>
      <Button title="Save" className="mt-5" disabled={!!invalid} loading={update.isPending} onPress={save} />
    </BottomSheet>
  );
}
