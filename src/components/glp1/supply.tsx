import { AlertCircle, Package } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { NumberStepper } from '@/components/ui/number-stepper';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useRefillSupply, useSaveSupply } from '@/lib/queries';
import { addDays, fromIsoDate, toIsoDate } from '@/lib/time';
import {
  formsFor,
  MEDICINE_FORM_LABELS,
  SUPPLY_LIMITS,
  type Glp1Medicine,
  type MedicineForm,
  type SupplyStatus,
} from '@/shared/glp1';

const shortDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
const daysBetween = (from: string, to: string) => Math.round((fromIsoDate(to).getTime() - fromIsoDate(from).getTime()) / 86_400_000);

/** "2 unopened · 3 doses left in the one you're using · Use by Oct 14". */
export function supplyLine(supply: SupplyStatus) {
  const words = MEDICINE_FORM_LABELS[supply.form];
  // Single-dose pens and vials: just how many are left.
  if (supply.dosesPerContainer === 1) return `${plural(supply.unopened + supply.openLeft, words.container, words.containers)} left`;
  const parts = [
    `${supply.unopened} unopened`,
    supply.openLeft > 0 ? `${plural(supply.openLeft, words.doses.replace(/s$/, ''), words.doses)} left in the one you're using` : `nothing open`,
  ];
  if (supply.useBy) parts.push(`Use by ${shortDate(supply.useBy)}`);
  return parts.join(' · ');
}

type SupplyCardProps = {
  medicine: Glp1Medicine;
  supply: SupplyStatus | null;
  onSetUp: () => void;
  onRefill: () => void;
};

/** Pens & vials on the GLP-1 screen: counts only, never an amount of medicine. */
export function SupplyCard({ medicine, supply, onSetUp, onRefill }: SupplyCardProps) {
  const words = MEDICINE_FORM_LABELS[supply?.form ?? medicine.form];
  const title = (supply?.form ?? medicine.form) === 'tablet' ? 'Tablets' : 'Pens & vials';
  if (!supply) {
    return (
      <View className="gap-3 rounded-[20px] border border-line p-4">
        <View className="flex-row items-center gap-2">
          <Package size={18} color={colors.ink} strokeWidth={1.8} />
          <Text className="text-[16px] font-semibold text-ink">{title}</Text>
        </View>
        <Text className="text-[14px] leading-5 text-muted">
          Count the {words.containers} you have, see what&apos;s left as you log doses, and get a reminder before the one
          you&apos;re using reaches its use-by date or when it&apos;s time to refill.
        </Text>
        <Button title={`Track ${words.containers}`} size="md" variant="secondary" onPress={onSetUp} />
      </View>
    );
  }
  const expiresSoon = supply.useBy !== null && daysBetween(toIsoDate(new Date()), supply.useBy) <= 1;
  return (
    <View className="gap-3 rounded-[20px] border border-line p-4">
      <View className="flex-row items-center gap-2">
        <Package size={18} color={colors.ink} strokeWidth={1.8} />
        <Text className="flex-1 text-[16px] font-semibold text-ink">{title}</Text>
        <Text className="text-[14px] text-muted">{plural(supply.totalLeft, words.doses.replace(/s$/, ''), words.doses)} in all</Text>
      </View>
      <Text className="text-[15px] leading-[21px] text-ink">{supplyLine(supply)}</Text>
      {supply.overdrawn ? (
        <View className="flex-row gap-2 rounded-2xl bg-surface p-3">
          <AlertCircle size={18} color={colors.ink} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">
            You logged more doses than these counts allow. Fix the counts so they match what you have.
          </Text>
        </View>
      ) : supply.low ? (
        <View className="flex-row gap-2 rounded-2xl bg-surface p-3">
          <AlertCircle size={18} color={colors.ink} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">
            Time to refill: {plural(supply.totalLeft, words.doses.replace(/s$/, ''), words.doses)} left.
          </Text>
        </View>
      ) : expiresSoon && supply.useBy ? (
        <View className="flex-row gap-2 rounded-2xl bg-surface p-3">
          <AlertCircle size={18} color={colors.ink} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">
            The one you&apos;re using reaches its use-by date on {shortDate(supply.useBy)}. Check the label.
          </Text>
        </View>
      ) : null}
      <Text className="text-[13px] text-muted">Based on the doses you logged.</Text>
      <View className="flex-row gap-2">
        <Button title="Refill" size="md" variant="secondary" className="flex-1" onPress={onRefill} />
        <Button title="Fix counts" size="md" variant="outline" className="flex-1" onPress={onSetUp} />
      </View>
    </View>
  );
}

/** Digits only, at most 2. */
const digits = (text: string) => text.replace(/[^0-9]/g, '').slice(0, 2);

type SupplySheetProps = { medicine: Glp1Medicine; supply: SupplyStatus | null; onClose: () => void };

/**
 * Set up or fix the counts. Every number is the person's own, from the label or the pharmacist:
 * no presets (how many doses a pen gives depends on the dose).
 */
export function SupplySheet({ medicine, supply, onClose }: SupplySheetProps) {
  const save = useSaveSupply();
  const forms = formsFor(medicine.medication);
  const [form, setForm] = useState<MedicineForm>(supply?.form ?? (forms.includes(medicine.form) ? medicine.form : forms[0]));
  const [perText, setPerText] = useState(supply ? String(supply.dosesPerContainer) : '');
  const perContainer = Number(perText);
  const perValid = Number.isInteger(perContainer) && perContainer >= SUPPLY_LIMITS.dosesPerContainer.min && perContainer <= SUPPLY_LIMITS.dosesPerContainer.max;
  const [dosesLeft, setDosesLeft] = useState(supply?.openLeft ?? 0);
  const [unopened, setUnopened] = useState(supply?.unopened ?? 0);
  const today = toIsoDate(new Date());
  const [openedDaysAgo, setOpenedDaysAgo] = useState(supply?.openedOn ? Math.max(0, daysBetween(supply.openedOn, today)) : 0);
  const [useWithinText, setUseWithinText] = useState(supply?.useWithinDays ? String(supply.useWithinDays) : '');
  const useWithin = useWithinText === '' ? null : Number(useWithinText);
  const useWithinValid = useWithin === null || (useWithin >= SUPPLY_LIMITS.useWithinDays.min && useWithin <= SUPPLY_LIMITS.useWithinDays.max);
  const [lowAt, setLowAt] = useState(supply?.lowSupplyAt ?? 2);
  const [remindLow, setRemindLow] = useState(supply?.remindLow ?? true);
  const [remindUseBy, setRemindUseBy] = useState(supply?.remindUseBy ?? true);
  const words = MEDICINE_FORM_LABELS[form];
  const maxLeft = perValid ? perContainer : SUPPLY_LIMITS.dosesLeft.max;
  const openedOn = toIsoDate(addDays(new Date(), -openedDaysAgo));
  const ready = perValid && useWithinValid && dosesLeft <= maxLeft && (dosesLeft > 0 || unopened > 0);

  const submit = () =>
    save.mutate(
      {
        form,
        dosesPerContainer: perContainer,
        dosesLeft,
        unopened,
        openedOn: dosesLeft > 0 ? openedOn : null,
        useWithinDays: useWithin,
        lowSupplyAt: lowAt,
        remindLow,
        remindUseBy,
      },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't save your counts", error.message),
      },
    );

  const stop = async () => {
    const ok = await confirm({
      title: 'Stop tracking?',
      message: 'Your counts and supply reminders go away. Your doses stay.',
      confirmLabel: 'Stop tracking',
      destructive: true,
    });
    if (ok) save.mutate(null, { onSuccess: onClose, onError: (error) => notify("We couldn't stop tracking", error.message) });
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        {supply ? 'Fix counts' : `Track ${words.containers}`}
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        Counts only, as your label or pharmacist says. Counting starts again from what you enter; your doses don&apos;t
        change.
      </Text>
      <ScrollView style={{ maxHeight: 440 }} className="mt-4" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View className="gap-3">
          {forms.length > 1 ? (
            <SegmentedControl options={forms.map((f) => ({ label: MEDICINE_FORM_LABELS[f].title, value: f }))} value={form} onChange={setForm} />
          ) : null}
          <View className="rounded-2xl border border-line px-4 py-2.5">
            <Text className="text-[15px] text-ink">How many {words.doses} does one {words.container} give you?</Text>
            <Text className="text-[13px] text-muted">As the label or pharmacist says ({SUPPLY_LIMITS.dosesPerContainer.min}–{SUPPLY_LIMITS.dosesPerContainer.max}).</Text>
            <TextInput
              accessibilityLabel={`${words.doses} in one ${words.container}`}
              value={perText}
              onChangeText={(text) => {
                const next = digits(text);
                setPerText(next);
                const n = Number(next);
                if (n > 0 && dosesLeft > n) setDosesLeft(n);
              }}
              keyboardType="number-pad"
              placeholder="Enter a number"
              placeholderTextColor={colors.faint}
              className="mt-1 py-1 text-[22px] font-bold text-ink"
            />
          </View>
          <NumberStepper label={`${words.doses[0].toUpperCase()}${words.doses.slice(1)} left in the one you're using`} value={dosesLeft} onChange={setDosesLeft} min={0} max={maxLeft} />
          <NumberStepper label={`Unopened ${words.containers}`} value={unopened} onChange={setUnopened} min={0} max={SUPPLY_LIMITS.unopened.max} />
          {dosesLeft > 0 ? (
            <>
              <NumberStepper
                label="Opened"
                hint={openedDaysAgo === 0 ? 'Today' : `${openedDaysAgo === 1 ? 'Yesterday' : `${openedDaysAgo} days ago`} · ${shortDate(openedOn)}`}
                value={openedDaysAgo}
                onChange={setOpenedDaysAgo}
                min={0}
                max={SUPPLY_LIMITS.useWithinDays.max}
                unit={openedDaysAgo === 1 ? 'day ago' : 'days ago'}
              />
              <View className="rounded-2xl border border-line px-4 py-2.5">
                <Text className="text-[15px] text-ink">Use within how many days of opening?</Text>
                <Text className="text-[13px] text-muted">From the label. Leave it empty for no use-by date.</Text>
                <TextInput
                  accessibilityLabel="Use within days of opening"
                  value={useWithinText}
                  onChangeText={(text) => setUseWithinText(digits(text))}
                  keyboardType="number-pad"
                  placeholder="No use-by date"
                  placeholderTextColor={colors.faint}
                  className="mt-1 py-1 text-[22px] font-bold text-ink"
                />
                {!useWithinValid ? <Text className="text-[13px] text-danger">Between 1 and 90 days.</Text> : null}
              </View>
            </>
          ) : null}
          <NumberStepper label="Refill reminder at" hint={`When this many ${words.doses} are left in all`} value={lowAt} onChange={setLowAt} min={SUPPLY_LIMITS.lowSupplyAt.min} max={20} />
          <View className="flex-row items-center gap-3 rounded-2xl border border-line px-4 py-3">
            <Text className="flex-1 text-[15px] text-ink">Remind me to refill</Text>
            <Switch accessibilityLabel="Remind me to refill" value={remindLow} onValueChange={setRemindLow} trackColor={{ true: colors.ink, false: colors.line }} thumbColor={colors.canvas} ios_backgroundColor={colors.line} />
          </View>
          {dosesLeft > 0 && useWithin ? (
            <View className="flex-row items-center gap-3 rounded-2xl border border-line px-4 py-3">
              <Text className="flex-1 text-[15px] text-ink">Remind me the day before the use-by date</Text>
              <Switch accessibilityLabel="Remind me before the use-by date" value={remindUseBy} onValueChange={setRemindUseBy} trackColor={{ true: colors.ink, false: colors.line }} thumbColor={colors.canvas} ios_backgroundColor={colors.line} />
            </View>
          ) : null}
          <Text className="px-1 text-[13px] leading-[18px] text-muted">
            Weight Class never works out amounts, units or doses. Reminders never name your medicine.
          </Text>
          {supply ? <Button title="Stop tracking" variant="danger" size="md" onPress={() => void stop()} /> : null}
        </View>
      </ScrollView>
      <Button title="Save" className="mt-5" disabled={!ready} loading={save.isPending} onPress={submit} />
    </BottomSheet>
  );
}

/** Refill: how many unopened pens, vials or packs came in. */
export function RefillSheet({ supply, onClose }: { supply: SupplyStatus; onClose: () => void }) {
  const refill = useRefillSupply();
  const [containers, setContainers] = useState(1);
  const words = MEDICINE_FORM_LABELS[supply.form];
  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Refill
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Add the unopened {words.containers} you just got.</Text>
      <NumberStepper className="mt-4" label={`New ${words.containers}`} value={containers} onChange={setContainers} min={SUPPLY_LIMITS.refill.min} max={SUPPLY_LIMITS.refill.max} />
      <Button
        title="Add them"
        className="mt-5"
        loading={refill.isPending}
        onPress={() =>
          refill.mutate(containers, {
            onSuccess: () => {
              haptics.success();
              onClose();
            },
            onError: (error) => notify("We couldn't add them", error.message),
          })
        }
      />
    </BottomSheet>
  );
}
