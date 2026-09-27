import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Bell, ChevronRight, Repeat, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { MedicineHistory, medicinePeriod } from '@/components/glp1/medicine-history';
import { choiceBody, choiceReady, emptyChoice, MedicineFields, type MedicineChoice } from '@/components/glp1/medicine-fields';
import { RecentSites } from '@/components/glp1/sites';
import { RefillSheet, SupplyCard, SupplySheet } from '@/components/glp1/supply';
import { SwitchSheet } from '@/components/glp1/switch-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDeleteDose, useDeleteGlp1Data, useDeleteSymptom, useGlp1, useProfile, useSaveGlp1 } from '@/lib/queries';
import {
  MEDICINE_FORM_LABELS,
  medicineTitle,
  SEVERITY_LABELS,
  siteName,
  SYMPTOM_LABELS,
  type Glp1Medicine,
  type Glp1Response,
} from '@/shared/glp1';

const WEEKDAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const when = (iso: string) =>
  new Date(iso).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

function scheduleText(medicine: Pick<Glp1Medicine, 'schedule' | 'doseWeekday'>) {
  return medicine.schedule === 'weekly' && medicine.doseWeekday !== null
    ? `Once a week, on ${WEEKDAY_NAMES[medicine.doseWeekday]}s`
    : 'Every day';
}

/** Turning GLP-1 mode on: the medicine, its name (Other), pens or vials, and when it is taken. */
function TurnOnForm() {
  const save = useSaveGlp1();
  const [choice, setChoice] = useState<MedicineChoice>(emptyChoice);
  return (
    <View className="gap-5">
      <MedicineFields value={choice} onChange={setChoice} />
      <Button
        title="Turn on GLP-1 mode"
        disabled={!choiceReady(choice)}
        loading={save.isPending}
        onPress={() => {
          const { name, form, ...settings } = choiceBody(choice);
          save.mutate(
            { settings, medicine: { name, form } },
            {
              onSuccess: () => haptics.success(),
              onError: (error) => notify("We couldn't turn on GLP-1 mode", error.message),
            },
          );
        }}
      />
    </View>
  );
}

/** The current medicine's schedule, form and name (switching to another medicine is separate). */
function ChangeForm({ current, onDone }: { current: Glp1Medicine; onDone: () => void }) {
  const save = useSaveGlp1();
  const [choice, setChoice] = useState<MedicineChoice>({
    medication: current.medication,
    name: current.name ?? '',
    form: current.form,
    schedule: current.schedule,
    weekday: current.doseWeekday,
  });
  return (
    <View className="gap-5">
      <Text className="text-[17px] font-semibold text-ink">{medicineTitle(current)}</Text>
      <MedicineFields value={choice} onChange={setChoice} lockMedication />
      <View className="flex-row gap-2">
        <Button title="Cancel" variant="secondary" className="flex-1" onPress={onDone} />
        <Button
          title="Save"
          className="flex-1"
          disabled={!choiceReady(choice)}
          loading={save.isPending}
          onPress={() => {
            const { name, form, ...settings } = choiceBody(choice);
            save.mutate(
              { settings, medicine: { name: current.medication === 'other' ? (name ?? '') : undefined, form } },
              {
                onSuccess: () => {
                  haptics.success();
                  onDone();
                },
                onError: (error) => notify("We couldn't save it", error.message),
              },
            );
          }}
        />
      </View>
    </View>
  );
}

function History({ glp1 }: { glp1: Glp1Response }) {
  const deleteDose = useDeleteDose();
  const deleteSymptom = useDeleteSymptom();
  const { doses, symptoms } = glp1;
  // With more than one medicine, each dose says which one it was for.
  const medicines = new Map([...(glp1.current ? [glp1.current] : []), ...glp1.history].map((m) => [m.id, medicineTitle(m)]));
  const showMedicine = glp1.history.length > 0;

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
                    {[
                      showMedicine && dose.medicationId ? medicines.get(dose.medicationId) : null,
                      dose.doseLabel,
                      dose.site ? siteName(dose.site, dose.side) : null,
                      dose.note,
                    ]
                      .filter(Boolean)
                      .join(' · ') || 'Dose taken'}
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
  const glp1 = useGlp1(!!profile);
  const params = useLocalSearchParams<{ supply?: string }>();
  const save = useSaveGlp1();
  const deleteData = useDeleteGlp1Data();
  const [editing, setEditing] = useState(false);
  const [switching, setSwitching] = useState(false);
  // A dose that opened a new pen asks "Started a new one?"; "No" comes here to fix the counts.
  const [supplyOpen, setSupplyOpen] = useState(params.supply === 'fix');
  const [refillOpen, setRefillOpen] = useState(false);
  if (!profile) return null;
  const data = glp1.data;
  const current = data?.current ?? null;
  const on = !!profile.glp1;

  const turnOff = async () => {
    const ok = await confirm({
      title: 'Turn off GLP-1 mode?',
      message: 'Your medicines, doses and side effects are kept. You can turn it on again any time.',
      confirmLabel: 'Turn off',
    });
    if (ok) save.mutate({ settings: null }, { onError: (error) => notify("We couldn't turn it off", error.message) });
  };

  const deleteAll = async () => {
    const ok = await confirm({
      title: 'Delete your GLP-1 data?',
      message: 'This turns GLP-1 mode off and permanently deletes your medicines, doses, supply counts and side effects.',
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
            For people taking a GLP-1 medicine. Track your doses, supply and how you feel, with protein, fiber and water
            first — they help protect muscle and keep digestion comfortable while your appetite is lower.
          </Text>
        </View>

        <View className="rounded-2xl bg-surface p-4">
          <Text className="text-[14px] leading-5 text-ink">
            EatME doesn&apos;t give medical or dosing advice. Always follow your prescriber&apos;s instructions.
          </Text>
        </View>

        {!on ? (
          <>
            <TurnOnForm />
            {data ? <MedicineHistory history={data.history} /> : null}
          </>
        ) : glp1.isPending || !data ? (
          <ActivityIndicator color={colors.ink} />
        ) : !current ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t load your medicine. Pull to refresh or try again later.</Text>
        ) : editing ? (
          <ChangeForm current={current} onDone={() => setEditing(false)} />
        ) : (
          <>
            <View className="overflow-hidden rounded-[20px] border border-line">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Change the schedule"
                onPress={() => setEditing(true)}
                className="min-h-[64px] flex-row items-center gap-3 px-4 py-3 active:bg-surface">
                <View className="flex-1">
                  <Text className="text-[16px] font-semibold text-ink">{medicineTitle(current)}</Text>
                  <Text className="text-[14px] text-muted">
                    {scheduleText(current)}
                    {current.form !== 'tablet' ? ` · ${MEDICINE_FORM_LABELS[current.form].title}` : ''}
                  </Text>
                  <Text className="text-[13px] text-muted">{medicinePeriod(current)}</Text>
                </View>
                <Text className="text-[15px] text-muted">Change</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => setSwitching(true)}
                className="min-h-[56px] flex-row items-center gap-3 border-t border-line px-4 active:bg-surface">
                <Repeat size={20} color={colors.ink} strokeWidth={1.6} />
                <Text className="flex-1 text-[16px] text-ink">Switch medicine</Text>
                <ChevronRight size={18} color={colors.faint} />
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

            <SupplyCard medicine={current} supply={data.supply} onSetUp={() => setSupplyOpen(true)} onRefill={() => setRefillOpen(true)} />

            {current.form !== 'tablet' ? <RecentSites doses={data.doses} /> : null}

            <History glp1={data} />

            <MedicineHistory history={data.history} />

            <View className="gap-2">
              <Button title="Turn off GLP-1 mode" variant="secondary" loading={save.isPending} onPress={() => void turnOff()} />
              <Button title="Delete my GLP-1 data" variant="danger" loading={deleteData.isPending} onPress={() => void deleteAll()} />
            </View>
          </>
        )}
      </ScrollView>

      {switching && current ? <SwitchSheet current={current} doses={data?.doses ?? []} onClose={() => setSwitching(false)} /> : null}
      {supplyOpen && current ? <SupplySheet medicine={current} supply={data?.supply ?? null} onClose={() => setSupplyOpen(false)} /> : null}
      {refillOpen && data?.supply ? <RefillSheet supply={data.supply} onClose={() => setRefillOpen(false)} /> : null}
    </Screen>
  );
}
