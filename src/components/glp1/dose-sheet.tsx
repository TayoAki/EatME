import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { SitePicker } from '@/components/glp1/sites';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useLogDose } from '@/lib/queries';
import {
  defaultForm,
  MEDICINE_FORM_LABELS,
  medicineTitle,
  type BodySide,
  type Glp1Medication,
  type Glp1Response,
  type InjectionSite,
  type SupplyStatus,
} from '@/shared/glp1';

type DoseSheetProps = {
  visible: boolean;
  onClose: () => void;
  /** From the profile, until the GLP-1 data has loaded. */
  medication: Glp1Medication;
  glp1: Glp1Response | undefined;
};

/**
 * The dose used up the open pen and an unopened one was counted as opened: ask whether that is
 * right ("No" opens Fix counts on the GLP-1 screen). Waits for the sheet to close first.
 */
function askAboutNewOne(before: SupplyStatus) {
  const words = MEDICINE_FORM_LABELS[before.form];
  setTimeout(() => {
    void confirm({
      title: `Started a new ${words.container}?`,
      message: `The one you were using was empty, so this dose counts from a new ${words.container}, opened today.`,
      confirmLabel: 'Yes',
      cancelLabel: 'No, fix counts',
    }).then((yes) => {
      if (!yes) router.push({ pathname: '/glp1', params: { supply: 'fix' } });
    });
  }, 450);
}

/** Records a dose exactly as the user describes it. EatME never suggests one, nor a site. */
export function DoseSheet({ visible, onClose, medication, glp1 }: DoseSheetProps) {
  const log = useLogDose();
  const current = glp1?.current ?? null;
  const [label, setLabel] = useState(glp1?.doses[0]?.doseLabel ?? '');
  const [site, setSite] = useState<InjectionSite | null>(null);
  const [side, setSide] = useState<BodySide | null>(null);
  const [note, setNote] = useState('');
  const form = current?.form ?? defaultForm(medication);
  const supply = glp1?.supply ?? null;

  const save = () =>
    log.mutate(
      { doseLabel: label.trim() || undefined, site: site ?? undefined, side: side ?? undefined, note: note.trim() || undefined },
      {
        onSuccess: () => {
          haptics.success();
          setSite(null);
          setSide(null);
          setNote('');
          onClose();
          if (supply && supply.openLeft === 0 && supply.unopened > 0) askAboutNewOne(supply);
        },
        onError: (error) => notify("We couldn't log your dose", error.message),
      },
    );

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">Log your dose</Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        {current ? <Text className="font-semibold text-ink">{medicineTitle(current)}</Text> : null}
        {current ? ' · ' : ''}Taken just now. Weight Class only records what you enter.
      </Text>

      <ScrollView style={{ maxHeight: 420 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
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

        {form !== 'tablet' ? (
          <View className="mt-4">
            <SitePicker
              site={site}
              side={side}
              last={glp1?.lastSite ?? null}
              onChange={(nextSite, nextSide) => {
                setSite(nextSite);
                setSide(nextSide);
              }}
            />
          </View>
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
      </ScrollView>

      <Button title="Log dose" className="mt-5" loading={log.isPending} onPress={save} />
    </BottomSheet>
  );
}
