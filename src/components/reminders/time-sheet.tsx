import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { WheelPicker } from '@/components/ui/wheel-picker';
import type { TimeOfDay } from '@/lib/reminder-plan';

const ITEM_HEIGHT = 44;
const VISIBLE = 5;
const pad = (n: number) => String(n).padStart(2, '0');

/** Hour labels in the phone's style: "8 AM" or "08". */
function hourLabel(hour: number) {
  return new Date(2000, 0, 1, hour).toLocaleTimeString([], { hour: 'numeric' });
}

type TimeSheetProps = {
  title: string;
  value: TimeOfDay;
  onClose: () => void;
  onSave: (value: TimeOfDay) => void;
};

/** Hour and minute wheels (5-minute steps) sharing one selection band. */
export function TimeSheet({ title, value, onClose, onSave }: TimeSheetProps) {
  const [hour, setHour] = useState(value.hour);
  const [minute, setMinute] = useState(value.minute - (value.minute % 5));
  const hours = useMemo(() => Array.from({ length: 24 }, (_, h) => ({ label: hourLabel(h), value: h })), []);
  const minutes = useMemo(() => Array.from({ length: 12 }, (_, i) => ({ label: pad(i * 5), value: i * 5 })), []);

  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="mb-3 text-center text-[22px] font-bold tracking-tight text-ink">{title}</Text>
      <View className="relative flex-row">
        <View
          pointerEvents="none"
          style={{ top: (ITEM_HEIGHT * (VISIBLE - 1)) / 2, height: ITEM_HEIGHT }}
          className="absolute left-0 right-0 rounded-xl bg-surface"
        />
        <WheelPicker
          accessibilityLabel="Hour"
          className="flex-1"
          showBand={false}
          visibleCount={VISIBLE}
          items={hours}
          value={hour}
          onChange={setHour}
        />
        <WheelPicker
          accessibilityLabel="Minute"
          className="flex-1"
          showBand={false}
          visibleCount={VISIBLE}
          items={minutes}
          value={minute}
          onChange={setMinute}
        />
      </View>
      <View className="mt-5 flex-row gap-3">
        <Button title="Cancel" variant="secondary" className="flex-1" onPress={onClose} />
        <Button title="Save" className="flex-1" onPress={() => onSave({ hour, minute })} />
      </View>
    </BottomSheet>
  );
}
