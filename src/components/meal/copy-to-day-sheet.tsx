import { useState } from 'react';
import { Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDuplicateMeal } from '@/lib/queries';
import { formatDay, toIsoDate } from '@/lib/time';
import type { Meal } from '@/shared/meals';

import { DayChips } from './day-chips';

type CopyToDaySheetProps = { meal: Meal; visible: boolean; onClose: () => void };

/** "Copy to another day…": the meal logged again on today or one of the 13 days before. */
export function CopyToDaySheet({ meal, visible, onClose }: CopyToDaySheetProps) {
  const duplicate = useDuplicateMeal();
  const [day, setDay] = useState<string | null>(null);
  const loggedOn = toIsoDate(new Date(meal.loggedAt));

  const copy = () => {
    if (!day) return;
    duplicate.mutate(
      { id: meal.id, date: day },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
          setDay(null);
          const label = formatDay(day);
          notify('Copied', `${meal.name ?? 'This meal'} was added to ${label === 'Today' || label === 'Yesterday' ? label.toLowerCase() : label}.`);
        },
        onError: (error) => notify("We couldn't copy this meal", error.message),
      },
    );
  };

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Copy to another day
      </Text>
      <Text className="mt-0.5 text-[14px] leading-5 text-muted">Pick the day you ate it. Earlier days get it at noon.</Text>
      <View className="mt-4">
        <DayChips selected={day} onSelect={setDay} exclude={loggedOn} />
      </View>
      <Button title="Copy" className="mt-5" disabled={!day} loading={duplicate.isPending} onPress={copy} />
    </BottomSheet>
  );
}
