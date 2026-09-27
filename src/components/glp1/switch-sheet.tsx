import { useState } from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';

import { choiceBody, choiceReady, emptyChoice, MedicineFields, type MedicineChoice } from '@/components/glp1/medicine-fields';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useSwitchMedicine } from '@/lib/queries';
import { formatShortDay, recentDays, toIsoDate } from '@/lib/time';
import { medicineTitle, type DoseLog, type Glp1Medicine } from '@/shared/glp1';

/** How far back a switch can start from the sheet (older dates: fix them in the history). */
const START_DAYS = 14;

type SwitchSheetProps = { current: Glp1Medicine; doses: DoseLog[]; onClose: () => void };

/**
 * Switch medicine: the new medicine from a day (today by default). The current one moves to the
 * history with its doses; nothing is deleted.
 */
export function SwitchSheet({ current, doses, onClose }: SwitchSheetProps) {
  const switchMedicine = useSwitchMedicine();
  const [choice, setChoice] = useState<MedicineChoice>(emptyChoice);
  const days = recentDays(START_DAYS).filter((day) => day >= current.startedOn);
  const [startsOn, setStartsOn] = useState(days[0]);
  // Switching today after logging today's dose: was that dose the old medicine or the new one?
  const today = days[0];
  const dosedToday = doses.some((d) => d.medicationId === current.id && toIsoDate(new Date(d.takenAt)) === today);
  const [todaysIsNew, setTodaysIsNew] = useState(false);
  const moveDoses = startsOn !== today || todaysIsNew;
  const sameMedicine = choice.medication === current.medication && current.medication !== 'other';
  const ready = choiceReady(choice) && !sameMedicine;

  const save = () =>
    switchMedicine.mutate(
      { ...choiceBody(choice), startsOn, moveDoses },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't switch your medicine", error.message),
      },
    );

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Switch medicine
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        {medicineTitle(current)} moves to your history with its doses. Nothing is deleted.
      </Text>
      <ScrollView style={{ maxHeight: 460 }} className="mt-4" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <MedicineFields value={choice} onChange={setChoice} exclude={current.medication === 'other' ? undefined : current.medication} />
        <View className="mt-5">
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Started the new one</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
            {days.map((day) => (
              <Chip key={day} label={formatShortDay(day)} selected={startsOn === day} onPress={() => setStartsOn(day)} />
            ))}
          </ScrollView>
          {startsOn === today && dosedToday ? (
            <View className="mt-3 flex-row items-center gap-3 rounded-2xl border border-line px-4 py-3">
              <Text className="flex-1 text-[15px] leading-5 text-ink">Today&apos;s dose was the new medicine</Text>
              <Switch
                accessibilityLabel="Today's dose was the new medicine"
                value={todaysIsNew}
                onValueChange={setTodaysIsNew}
                trackColor={{ true: colors.ink, false: colors.line }}
                thumbColor={colors.canvas}
                ios_backgroundColor={colors.line}
              />
            </View>
          ) : startsOn !== today ? (
            <Text className="ml-1 mt-2 text-[13px] leading-[18px] text-muted">
              Doses you logged from this day on count for the new medicine.
            </Text>
          ) : null}
        </View>
      </ScrollView>
      <Button title="Switch" className="mt-5" disabled={!ready} loading={switchMedicine.isPending} onPress={save} />
    </BottomSheet>
  );
}
