import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { WheelPicker } from '@/components/ui/wheel-picker';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useSetRepeat } from '@/lib/queries';
import { WEEK_ORDER, type MealRepeat } from '@/shared/saved-meals';

const ITEM_HEIGHT = 44;
const VISIBLE = 3;
const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const pad = (n: number) => String(n).padStart(2, '0');
const hourLabel = (hour: number) => new Date(2000, 0, 1, hour).toLocaleTimeString([], { hour: 'numeric' });

type RepeatSheetProps = {
  savedMealId: string;
  repeat: MealRepeat | null;
  visible: boolean;
  onClose: () => void;
};

/**
 * Which days a saved meal is planned for, and its usual time. Planned meals show on Home as a
 * suggestion ("Log it" / "Not today"); nothing is ever logged on its own.
 */
export function RepeatSheet({ savedMealId, repeat, visible, onClose }: RepeatSheetProps) {
  const setRepeat = useSetRepeat(savedMealId);
  const [days, setDays] = useState<number[]>(repeat?.weekdays ?? [1, 2, 3, 4, 5]);
  const [hour, setHour] = useState(Number(repeat?.time.slice(0, 2) ?? 8));
  const [minute, setMinute] = useState(Number(repeat?.time.slice(3, 5) ?? 0) - (Number(repeat?.time.slice(3, 5) ?? 0) % 5));
  const hours = useMemo(() => Array.from({ length: 24 }, (_, h) => ({ label: hourLabel(h), value: h })), []);
  const minutes = useMemo(() => Array.from({ length: 12 }, (_, i) => ({ label: pad(i * 5), value: i * 5 })), []);

  const toggle = (day: number) => setDays((current) => (current.includes(day) ? current.filter((d) => d !== day) : [...current, day]));
  const save = (next: MealRepeat | null) =>
    setRepeat.mutate(next, {
      onSuccess: () => {
        haptics.success();
        onClose();
      },
      onError: (error) => notify("We couldn't save that", error.message),
    });

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Repeat
      </Text>
      <Text className="mt-0.5 text-[14px] leading-5 text-muted">
        On these days it shows on Home as planned. Nothing is logged until you tap “Log it”.
      </Text>

      <View className="mt-4 flex-row flex-wrap gap-2">
        {WEEK_ORDER.map((day) => (
          <Chip key={day} role="checkbox" label={DAY_LABELS[day]} selected={days.includes(day)} onPress={() => toggle(day)} className="px-3.5" />
        ))}
      </View>

      <Text className="mt-5 text-[15px] font-semibold text-ink">Usual time</Text>
      <View className="relative mt-2 flex-row">
        <View
          pointerEvents="none"
          style={{ top: (ITEM_HEIGHT * (VISIBLE - 1)) / 2, height: ITEM_HEIGHT }}
          className="absolute left-0 right-0 rounded-xl bg-surface"
        />
        <WheelPicker accessibilityLabel="Hour" className="flex-1" showBand={false} visibleCount={VISIBLE} items={hours} value={hour} onChange={setHour} />
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

      <Button
        title="Save"
        className="mt-5"
        disabled={days.length === 0}
        loading={setRepeat.isPending}
        onPress={() => save({ weekdays: days, time: `${pad(hour)}:${pad(minute)}` })}
      />
      {repeat ? <Button title="Stop repeating" variant="danger" className="mt-2" onPress={() => save(null)} /> : null}
    </BottomSheet>
  );
}
