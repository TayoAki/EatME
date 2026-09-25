import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useLogDose } from '@/lib/queries';
import { INJECTION_SITE_LABELS, INJECTION_SITES, type Glp1Medication, type InjectionSite } from '@/shared/glp1';

/** Tablets have no injection site. */
const isInjection = (medication: Glp1Medication) => medication !== 'semaglutide_tablet';

type DoseSheetProps = { visible: boolean; onClose: () => void; medication: Glp1Medication; lastLabel?: string | null };

/** Records a dose exactly as the user describes it. EatME never suggests one. */
export function DoseSheet({ visible, onClose, medication, lastLabel }: DoseSheetProps) {
  const log = useLogDose();
  const [label, setLabel] = useState(lastLabel ?? '');
  const [site, setSite] = useState<InjectionSite | null>(null);
  const [note, setNote] = useState('');

  const save = () =>
    log.mutate(
      { doseLabel: label.trim() || undefined, site: site ?? undefined, note: note.trim() || undefined },
      {
        onSuccess: () => {
          haptics.success();
          setSite(null);
          setNote('');
          onClose();
        },
        onError: (error) => notify("We couldn't log your dose", error.message),
      },
    );

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">Log your dose</Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Taken just now. EatME only records what you enter.</Text>

      <Text className="mb-2 mt-5 text-[14px] font-semibold text-ink">Dose (optional)</Text>
      <TextInput
        accessibilityLabel="Dose"
        value={label}
        onChangeText={setLabel}
        maxLength={40}
        placeholder="As prescribed, e.g. 2.5 mg"
        placeholderTextColor={colors.faint}
        className="h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
      />

      {isInjection(medication) ? (
        <>
          <Text className="mb-2 mt-4 text-[14px] font-semibold text-ink">Where (optional)</Text>
          <View className="flex-row flex-wrap gap-2">
            {INJECTION_SITES.map((value) => (
              <Chip
                key={value}
                label={INJECTION_SITE_LABELS[value]}
                selected={site === value}
                onPress={() => setSite(site === value ? null : value)}
              />
            ))}
          </View>
        </>
      ) : null}

      <TextInput
        accessibilityLabel="Note"
        value={note}
        onChangeText={setNote}
        maxLength={300}
        placeholder="Note (optional)"
        placeholderTextColor={colors.faint}
        className="mt-4 h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
      />

      <Button title="Log dose" className="mt-5" loading={log.isPending} onPress={save} />
    </BottomSheet>
  );
}
