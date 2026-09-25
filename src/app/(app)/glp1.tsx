import { router } from 'expo-router';
import { ArrowLeft, Bell, ChevronRight, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { OptionRow } from '@/components/ui/option-row';
import { Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDeleteDose, useDeleteGlp1Data, useDeleteSymptom, useGlp1, useProfile, useSaveGlp1 } from '@/lib/queries';
import {
  DEFAULT_SCHEDULE,
  GLP1_MEDICATION_LABELS,
  GLP1_MEDICATIONS,
  INJECTION_SITE_LABELS,
  SEVERITY_LABELS,
  SYMPTOM_LABELS,
  type Glp1Medication,
  type Glp1Schedule,
  type Glp1Settings,
} from '@/shared/glp1';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const SCHEDULE_OPTIONS = [
  { label: 'Once a week', value: 'weekly' },
  { label: 'Every day', value: 'daily' },
] as const;

const when = (iso: string) =>
  new Date(iso).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

function scheduleText(settings: Glp1Settings) {
  return settings.schedule === 'weekly' && settings.doseWeekday !== null
    ? `Once a week, on ${WEEKDAY_NAMES[settings.doseWeekday]}s`
    : 'Every day';
}

function SettingsForm({ initial, onSaved }: { initial: Glp1Settings | null; onSaved: () => void }) {
  const save = useSaveGlp1();
  const [medication, setMedication] = useState<Glp1Medication | null>(initial?.medication ?? null);
  const [schedule, setSchedule] = useState<Glp1Schedule>(initial?.schedule ?? 'weekly');
  const [weekday, setWeekday] = useState<number | null>(initial?.doseWeekday ?? null);
  const ready = medication !== null && (schedule === 'daily' || weekday !== null);

  const pick = (value: Glp1Medication) => {
    setMedication(value);
    if (!initial) setSchedule(DEFAULT_SCHEDULE[value]);
  };

  return (
    <View className="gap-5">
      <View>
        <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Your medicine</Text>
        <View className="gap-2">
          {GLP1_MEDICATIONS.map((value) => (
            <OptionRow
              key={value}
              title={GLP1_MEDICATION_LABELS[value].title}
              description={GLP1_MEDICATION_LABELS[value].description}
              selected={medication === value}
              onPress={() => pick(value)}
            />
          ))}
        </View>
      </View>
      <View>
        <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">How often you take it</Text>
        <SegmentedControl options={SCHEDULE_OPTIONS} value={schedule} onChange={setSchedule} />
      </View>
      {schedule === 'weekly' ? (
        <View>
          <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Dose day</Text>
          <View className="flex-row flex-wrap gap-2">
            {WEEKDAYS.map((label, index) => (
              <Chip key={label} label={label} selected={weekday === index} onPress={() => setWeekday(index)} />
            ))}
          </View>
        </View>
      ) : null}
      <Button
        title={initial ? 'Save' : 'Turn on GLP-1 mode'}
        disabled={!ready}
        loading={save.isPending}
        onPress={() => {
          if (!medication) return;
          save.mutate(
            { medication, schedule, doseWeekday: schedule === 'weekly' ? weekday : null },
            {
              onSuccess: () => {
                haptics.success();
                onSaved();
              },
              onError: (error) => notify("We couldn't save GLP-1 mode", error.message),
            },
          );
        }}
      />
    </View>
  );
}

function History() {
  const glp1 = useGlp1();
  const deleteDose = useDeleteDose();
  const deleteSymptom = useDeleteSymptom();
  if (glp1.isPending) return <ActivityIndicator color={colors.ink} />;
  const doses = glp1.data?.doses ?? [];
  const symptoms = glp1.data?.symptoms ?? [];

  const remove = async (kind: 'dose' | 'symptom', id: string) => {
    const ok = await confirm({ title: 'Remove this entry?', message: 'It will be deleted from your history.', confirmLabel: 'Remove', destructive: true });
    if (!ok) return;
    const mutation = kind === 'dose' ? deleteDose : deleteSymptom;
    mutation.mutate(id, { onError: (error) => notify("We couldn't remove it", error.message) });
  };

  return (
    <View className="gap-5">
      <View>
        <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">Doses · last 12 weeks</Text>
        {doses.length === 0 ? (
          <Text className="ml-1 text-[14px] text-muted">No doses logged yet. Use “Log dose” on Home.</Text>
        ) : (
          <View className="overflow-hidden rounded-[20px] border border-line">
            {doses.map((dose, index) => (
              <View key={dose.id} className={`min-h-[56px] flex-row items-center gap-3 px-4 py-2 ${index > 0 ? 'border-t border-line' : ''}`}>
                <View className="flex-1">
                  <Text className="text-[15px] text-ink">{when(dose.takenAt)}</Text>
                  <Text className="text-[13px] text-muted">
                    {[dose.doseLabel, dose.site ? INJECTION_SITE_LABELS[dose.site] : null, dose.note].filter(Boolean).join(' · ') || 'Dose taken'}
                  </Text>
                </View>
                <Pressable accessibilityRole="button" accessibilityLabel={`Remove the dose of ${when(dose.takenAt)}`} hitSlop={10} onPress={() => void remove('dose', dose.id)}>
                  <X size={18} color={colors.muted} />
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </View>
      <View>
        <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">How you felt · last 30 days</Text>
        {symptoms.length === 0 ? (
          <Text className="ml-1 text-[14px] text-muted">Nothing logged. Use “How do you feel?” on Home.</Text>
        ) : (
          <View className="overflow-hidden rounded-[20px] border border-line">
            {symptoms.map((entry, index) => (
              <View key={entry.id} className={`min-h-[56px] flex-row items-center gap-3 px-4 py-2 ${index > 0 ? 'border-t border-line' : ''}`}>
                <View className="flex-1">
                  <Text className="text-[15px] text-ink">
                    {when(entry.loggedAt)} · {SEVERITY_LABELS[entry.severity]}
                  </Text>
                  <Text className="text-[13px] text-muted">
                    {entry.symptoms.map((s) => SYMPTOM_LABELS[s]).join(', ')}
                    {entry.note ? ` · ${entry.note}` : ''}
                  </Text>
                </View>
                <Pressable accessibilityRole="button" accessibilityLabel={`Remove the entry of ${when(entry.loggedAt)}`} hitSlop={10} onPress={() => void remove('symptom', entry.id)}>
                  <X size={18} color={colors.muted} />
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

export default function Glp1Screen() {
  const profile = useProfile();
  const save = useSaveGlp1();
  const deleteData = useDeleteGlp1Data();
  const [editing, setEditing] = useState(false);
  if (!profile) return null;
  const settings = profile.glp1;

  const turnOff = async () => {
    const ok = await confirm({
      title: 'Turn off GLP-1 mode?',
      message: 'Your dose and side-effect history is kept. You can turn it on again any time.',
      confirmLabel: 'Turn off',
    });
    if (ok) save.mutate(null, { onError: (error) => notify("We couldn't turn it off", error.message) });
  };

  const deleteAll = async () => {
    const ok = await confirm({
      title: 'Delete your GLP-1 data?',
      message: 'This turns GLP-1 mode off and permanently deletes every dose and side-effect entry.',
      confirmLabel: 'Delete',
      destructive: true,
    });
    if (ok) deleteData.mutate(undefined, { onError: (error) => notify("We couldn't delete it", error.message) });
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            GLP-1 mode
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            For people taking a GLP-1 medicine. Track your doses and how you feel, with protein, fiber and water
            first — they help protect muscle and keep digestion comfortable while your appetite is lower.
          </Text>
        </View>

        <View className="rounded-2xl bg-surface p-4">
          <Text className="text-[14px] leading-5 text-ink">
            EatME doesn&apos;t give medical or dosing advice. Always follow your prescriber&apos;s instructions.
          </Text>
        </View>

        {!settings || editing ? (
          <SettingsForm initial={settings} onSaved={() => setEditing(false)} />
        ) : (
          <>
            <View className="overflow-hidden rounded-[20px] border border-line">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Change your medicine or schedule"
                onPress={() => setEditing(true)}
                className="min-h-[64px] flex-row items-center gap-3 px-4 py-3 active:bg-surface">
                <View className="flex-1">
                  <Text className="text-[16px] font-semibold text-ink">{GLP1_MEDICATION_LABELS[settings.medication].title}</Text>
                  <Text className="text-[14px] text-muted">{scheduleText(settings)}</Text>
                </View>
                <Text className="text-[15px] text-muted">Change</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => router.push('/reminders')}
                className="min-h-[56px] flex-row items-center gap-3 border-t border-line px-4 active:bg-surface">
                <Bell size={20} color={colors.ink} strokeWidth={1.6} />
                <Text className="flex-1 text-[16px] text-ink">Dose reminder</Text>
                <ChevronRight size={18} color={colors.faint} />
              </Pressable>
            </View>

            <History />

            <View className="gap-2">
              <Button title="Turn off GLP-1 mode" variant="secondary" loading={save.isPending} onPress={() => void turnOff()} />
              <Button title="Delete my GLP-1 data" variant="danger" loading={deleteData.isPending} onPress={() => void deleteAll()} />
            </View>
          </>
        )}
      </ScrollView>
    </Screen>
  );
}
