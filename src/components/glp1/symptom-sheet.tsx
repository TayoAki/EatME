import { TriangleAlert } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useLogSymptoms } from '@/lib/queries';
import { SEVERITY_LABELS, SYMPTOM_LABELS, SYMPTOMS, URGENT_WHEN_SEVERE, type Severity, type Symptom } from '@/shared/glp1';

const SEVERITIES = [1, 2, 3] as const;

/** "How do you feel?": side effects with one severity. Information only, never a diagnosis. */
export function SymptomSheet({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const log = useLogSymptoms();
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [severity, setSeverity] = useState<Severity>(1);
  const [note, setNote] = useState('');
  const urgent = severity === 3 && symptoms.some((s) => URGENT_WHEN_SEVERE.includes(s));

  const toggle = (symptom: Symptom) =>
    setSymptoms((current) => (current.includes(symptom) ? current.filter((s) => s !== symptom) : [...current, symptom]));

  const save = () =>
    log.mutate(
      { symptoms, severity, note: note.trim() || undefined },
      {
        onSuccess: () => {
          haptics.success();
          setSymptoms([]);
          setSeverity(1);
          setNote('');
          onClose();
        },
        onError: (error) => notify("We couldn't save this", error.message),
      },
    );

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">How do you feel?</Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Pick anything you noticed today.</Text>

      <View className="mt-4 flex-row flex-wrap gap-2">
        {SYMPTOMS.map((symptom) => (
          <Chip
            key={symptom}
            role="checkbox"
            label={SYMPTOM_LABELS[symptom]}
            selected={symptoms.includes(symptom)}
            onPress={() => toggle(symptom)}
          />
        ))}
      </View>

      <Text className="mb-2 mt-5 text-[14px] font-semibold text-ink">How strong?</Text>
      <View className="flex-row gap-2">
        {SEVERITIES.map((value) => (
          <Chip
            key={value}
            className="flex-1"
            label={SEVERITY_LABELS[value]}
            selected={severity === value}
            onPress={() => setSeverity(value)}
          />
        ))}
      </View>

      <TextInput
        accessibilityLabel="Note"
        value={note}
        onChangeText={setNote}
        maxLength={300}
        placeholder="Note (optional)"
        placeholderTextColor={colors.faint}
        className="mt-4 h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
      />

      {urgent ? (
        <View className="mt-4 flex-row gap-3 rounded-2xl bg-surface p-3.5">
          <TriangleAlert size={18} color={colors.danger} style={{ marginTop: 1 }} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">
            Severe vomiting, diarrhea or dizziness can dehydrate you. Contact your doctor or pharmacist, and get urgent
            help if you can&apos;t keep fluids down or have severe stomach pain.
          </Text>
        </View>
      ) : (
        <Text className="mt-4 text-[13px] leading-[18px] text-muted">
          Side effects are common when starting or raising a dose. Talk to your prescriber about anything that worries
          you.
        </Text>
      )}

      <Button title="Save" className="mt-4" disabled={symptoms.length === 0} loading={log.isPending} onPress={save} />
    </BottomSheet>
  );
}
