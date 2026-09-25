import { router } from 'expo-router';
import { ArrowLeft, BellOff } from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
import { AppState, Linking, Pressable, ScrollView, Switch, Text, View } from 'react-native';

import { TimeSheet } from '@/components/reminders/time-sheet';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { WheelPicker } from '@/components/ui/wheel-picker';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useProfile } from '@/lib/queries';
import { formatTimeOfDay, MEAL_SLOTS, type MealSlot, type ReminderSettings, type TimeOfDay } from '@/lib/reminder-plan';
import { useReminderStore } from '@/lib/reminder-store';
import {
  getNotificationPermission,
  remindersSupported,
  requestNotificationPermission,
  type NotificationPermission,
} from '@/lib/reminders';

const WEEKDAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
const EVERY_OPTIONS = [
  { label: 'Every hour', value: '1' },
  { label: 'Every 2 hours', value: '2' },
  { label: 'Every 3 hours', value: '3' },
] as const;

const hourLabel = (hour: number) => formatTimeOfDay({ hour, minute: 0 });
const SHORT_WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const pad = (n: number) => String(n).padStart(2, '0');
const OFTEN_OPTIONS = [
  { label: 'Once a week', value: 'weekly' },
  { label: 'Every day', value: 'daily' },
] as const;

/** "Mondays at 7:30 AM" or "Every day at 7:30 AM". */
const weighInLabel = (weighIn: ReminderSettings['weighIn']) =>
  `${weighIn.weekday === null ? 'Every day' : WEEKDAYS[weighIn.weekday]} at ${formatTimeOfDay(weighIn)}`;

function usePermission() {
  const [permission, setPermission] = useState<NotificationPermission>(remindersSupported ? 'undetermined' : 'unsupported');
  useEffect(() => {
    const check = () => void getNotificationPermission().then(setPermission);
    check();
    // Coming back from the phone's settings.
    const subscription = AppState.addEventListener('change', (state) => state === 'active' && check());
    return () => subscription.remove();
  }, []);
  return [permission, setPermission] as const;
}

function ReminderRow({
  title,
  subtitle,
  enabled,
  disabled,
  onToggle,
  onPressDetail,
  first,
}: {
  title: string;
  subtitle: string;
  enabled: boolean;
  disabled: boolean;
  onToggle: (on: boolean) => void;
  onPressDetail: () => void;
  first?: boolean;
}) {
  return (
    <View className={`min-h-[64px] flex-row items-center gap-3 px-4 ${first ? '' : 'border-t border-line'}`}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${title}, ${subtitle}. Change the time`}
        disabled={disabled}
        onPress={onPressDetail}
        className="flex-1 py-3 active:opacity-60">
        <Text className="text-[16px] text-ink">{title}</Text>
        <Text className="text-[14px] text-muted">{subtitle}</Text>
      </Pressable>
      <Switch
        accessibilityLabel={`${title} reminder`}
        value={enabled}
        disabled={disabled}
        onValueChange={onToggle}
        trackColor={{ true: colors.ink, false: colors.line }}
        thumbColor={colors.canvas}
        ios_backgroundColor={colors.line}
      />
    </View>
  );
}

function WaterSheet({
  value,
  onClose,
  onSave,
}: {
  value: ReminderSettings['water'];
  onClose: () => void;
  onSave: (value: ReminderSettings['water']) => void;
}) {
  const [every, setEvery] = useState(String(value.everyHours) as '1' | '2' | '3');
  const [start, setStart] = useState(value.startHour);
  const [end, setEnd] = useState(value.endHour);
  const hours = useMemo(() => Array.from({ length: 24 }, (_, h) => ({ label: hourLabel(h), value: h })), []);
  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="mb-4 text-center text-[22px] font-bold tracking-tight text-ink">Water reminders</Text>
      <SegmentedControl options={EVERY_OPTIONS} value={every} onChange={setEvery} />
      <View className="mt-4 flex-row">
        <Text className="flex-1 text-center text-[14px] font-semibold text-muted">From</Text>
        <Text className="flex-1 text-center text-[14px] font-semibold text-muted">Until</Text>
      </View>
      <View className="relative flex-row">
        <View pointerEvents="none" style={{ top: 88, height: 44 }} className="absolute left-0 right-0 rounded-xl bg-surface" />
        <WheelPicker accessibilityLabel="From" className="flex-1" showBand={false} visibleCount={5} items={hours} value={start} onChange={setStart} />
        <WheelPicker accessibilityLabel="Until" className="flex-1" showBand={false} visibleCount={5} items={hours} value={end} onChange={setEnd} />
      </View>
      {end <= start ? <Text className="mt-2 text-center text-[14px] text-muted">Pick an end time after the start.</Text> : null}
      <View className="mt-5 flex-row gap-3">
        <Button title="Cancel" variant="secondary" className="flex-1" onPress={onClose} />
        <Button
          title="Save"
          className="flex-1"
          disabled={end <= start}
          onPress={() => onSave({ ...value, everyHours: Number(every), startHour: start, endHour: end })}
        />
      </View>
    </BottomSheet>
  );
}

/** When to weigh in: once a week (a weekday) or every day, and the time. */
function WeighInSheet({
  value,
  onClose,
  onSave,
}: {
  value: ReminderSettings['weighIn'];
  onClose: () => void;
  onSave: (value: ReminderSettings['weighIn']) => void;
}) {
  const [often, setOften] = useState<'weekly' | 'daily'>(value.weekday === null ? 'daily' : 'weekly');
  const [weekday, setWeekday] = useState(value.weekday ?? 1);
  const [hour, setHour] = useState(value.hour);
  const [minute, setMinute] = useState(value.minute - (value.minute % 5));
  const hours = useMemo(() => Array.from({ length: 24 }, (_, h) => ({ label: hourLabel(h), value: h })), []);
  const minutes = useMemo(() => Array.from({ length: 12 }, (_, i) => ({ label: pad(i * 5), value: i * 5 })), []);
  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="mb-4 text-center text-[22px] font-bold tracking-tight text-ink">Weigh-in reminder</Text>
      <SegmentedControl options={OFTEN_OPTIONS} value={often} onChange={setOften} />
      {often === 'weekly' ? (
        <View className="mt-4 flex-row flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5, 6, 0].map((day) => (
            <Chip key={day} label={SHORT_WEEKDAYS[day]} selected={weekday === day} onPress={() => setWeekday(day)} className="px-3" />
          ))}
        </View>
      ) : null}
      <View className="relative mt-3 flex-row">
        <View pointerEvents="none" style={{ top: 44, height: 44 }} className="absolute left-0 right-0 rounded-xl bg-surface" />
        <WheelPicker accessibilityLabel="Hour" className="flex-1" showBand={false} visibleCount={3} items={hours} value={hour} onChange={setHour} />
        <WheelPicker accessibilityLabel="Minute" className="flex-1" showBand={false} visibleCount={3} items={minutes} value={minute} onChange={setMinute} />
      </View>
      <View className="mt-5 flex-row gap-3">
        <Button title="Cancel" variant="secondary" className="flex-1" onPress={onClose} />
        <Button
          title="Save"
          className="flex-1"
          onPress={() => onSave({ ...value, hour, minute, weekday: often === 'daily' ? null : weekday })}
        />
      </View>
    </BottomSheet>
  );
}

type Editing = { kind: 'time'; key: MealSlot | 'dose'; title: string } | { kind: 'water' } | { kind: 'weighIn' } | null;

export default function RemindersScreen() {
  const profile = useProfile();
  const settings = useReminderStore((s) => s.settings);
  const update = useReminderStore((s) => s.update);
  const [permission, setPermission] = usePermission();
  const [editing, setEditing] = useState<Editing>(null);
  const glp1 = profile?.glp1 ?? null;
  const blocked = permission === 'denied';
  const disabled = !remindersSupported;

  /** Turning a reminder on asks for permission the first time. */
  const toggle = async (changes: Partial<ReminderSettings>, on: boolean) => {
    if (on && permission !== 'granted') {
      const next = await requestNotificationPermission();
      setPermission(next);
      if (next !== 'granted') {
        notify('Notifications are off', 'Turn on notifications for EatME in your phone settings to get reminders.');
        return;
      }
    }
    haptics.selection();
    update(changes);
  };

  const water = settings.water;
  const doseSubtitle = glp1
    ? `${glp1.schedule === 'weekly' && glp1.doseWeekday !== null ? WEEKDAYS[glp1.doseWeekday] : 'Every day'} at ${formatTimeOfDay(settings.dose)}`
    : '';

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            Reminders
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Gentle nudges at the times you choose. They are set up on this phone.
          </Text>
        </View>

        {disabled ? (
          <View className="flex-row gap-3 rounded-2xl bg-surface p-4">
            <BellOff size={20} color={colors.ink} />
            <Text className="flex-1 text-[14px] leading-5 text-ink">Reminders work in the EatME app on iPhone and Android.</Text>
          </View>
        ) : blocked ? (
          <View className="gap-3 rounded-2xl bg-surface p-4">
            <View className="flex-row gap-3">
              <BellOff size={20} color={colors.ink} />
              <Text className="flex-1 text-[14px] leading-5 text-ink">
                Notifications are turned off for EatME. Turn them on in your phone settings to get reminders.
              </Text>
            </View>
            <Button title="Open Settings" size="md" variant="outline" onPress={() => void Linking.openSettings()} />
          </View>
        ) : null}

        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Meals</Text>
          <View className="overflow-hidden rounded-[20px] border border-line">
            {MEAL_SLOTS.map(({ slot, title }, index) => (
              <ReminderRow
                key={slot}
                first={index === 0}
                title={title}
                subtitle={formatTimeOfDay(settings[slot])}
                enabled={settings[slot].enabled}
                disabled={disabled}
                onToggle={(on) => void toggle({ [slot]: { ...settings[slot], enabled: on } }, on)}
                onPressDetail={() => setEditing({ kind: 'time', key: slot, title })}
              />
            ))}
          </View>
        </View>

        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Water</Text>
          <View className="overflow-hidden rounded-[20px] border border-line">
            <ReminderRow
              first
              title="Drink reminders"
              subtitle={`Every ${water.everyHours === 1 ? 'hour' : `${water.everyHours} hours`}, ${hourLabel(water.startHour)} – ${hourLabel(water.endHour)}`}
              enabled={water.enabled}
              disabled={disabled}
              onToggle={(on) => void toggle({ water: { ...water, enabled: on } }, on)}
              onPressDetail={() => setEditing({ kind: 'water' })}
            />
          </View>
        </View>

        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Weight</Text>
          <View className="overflow-hidden rounded-[20px] border border-line">
            <ReminderRow
              first
              title="Weigh-in"
              subtitle={weighInLabel(settings.weighIn)}
              enabled={settings.weighIn.enabled}
              disabled={disabled}
              onToggle={(on) => void toggle({ weighIn: { ...settings.weighIn, enabled: on } }, on)}
              onPressDetail={() => setEditing({ kind: 'weighIn' })}
            />
          </View>
          <Text className="ml-1 mt-2 text-[13px] leading-[18px] text-muted">
            Same time, same conditions — before breakfast is easiest. Opens Weight so logging takes a second.
          </Text>
        </View>

        {glp1 ? (
          <View>
            <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">GLP-1</Text>
            <View className="overflow-hidden rounded-[20px] border border-line">
              <ReminderRow
                first
                title="Dose reminder"
                subtitle={doseSubtitle}
                enabled={settings.dose.enabled}
                disabled={disabled}
                onToggle={(on) => void toggle({ dose: { ...settings.dose, enabled: on } }, on)}
                onPressDetail={() => setEditing({ kind: 'time', key: 'dose', title: 'Dose reminder' })}
              />
            </View>
            <Text className="ml-1 mt-2 text-[13px] leading-[18px] text-muted">
              Reminds you on the day you set in GLP-1 mode. It never changes your schedule.
            </Text>
          </View>
        ) : null}
      </ScrollView>

      {editing?.kind === 'time' ? (
        <TimeSheet
          title={editing.title}
          value={settings[editing.key]}
          onClose={() => setEditing(null)}
          onSave={(time: TimeOfDay) => {
            update({ [editing.key]: { ...settings[editing.key], ...time } });
            setEditing(null);
          }}
        />
      ) : editing?.kind === 'weighIn' ? (
        <WeighInSheet
          value={settings.weighIn}
          onClose={() => setEditing(null)}
          onSave={(next) => {
            update({ weighIn: next });
            setEditing(null);
          }}
        />
      ) : editing?.kind === 'water' ? (
        <WaterSheet
          value={water}
          onClose={() => setEditing(null)}
          onSave={(next) => {
            update({ water: next });
            setEditing(null);
          }}
        />
      ) : null}
    </Screen>
  );
}
