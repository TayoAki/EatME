import * as Sentry from '@sentry/react-native';
import { router } from 'expo-router';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useProfile, useUpdateProfile } from '@/lib/queries';
import { caloriesFromMacros, minimumCalories } from '@/shared/nutrition';
import type { UnitSystem } from '@/shared/onboarding';
import { MACRO_LIMITS, type Profile, type UpdateProfileBody } from '@/shared/user';
import { flOzToMl, formatVolume, mlToFlOz } from '@/shared/units';

type GoalSetting = {
  id: string;
  title: string;
  color: string;
  /** The saved goal and the suggested one (plan or recommendation), in stored units (kcal, g or ml). */
  value: (profile: Profile) => number | null;
  suggested: (profile: Profile) => number | null;
  /** "Recommended" or "Your plan": where the suggested value comes from. */
  suggestedLabel: string;
  /** Stored range, the same as the server's. */
  min: (profile: Profile) => number;
  max: number;
  unitLabel: (unit: UnitSystem) => string;
  format: (value: number, unit: UnitSystem) => string;
  /** Stored value → the number the user types, and back. */
  toInput: (value: number, unit: UnitSystem) => number;
  fromInput: (value: number, unit: UnitSystem) => number;
  /** `null` goes back to the suggested goal. */
  body: (value: number | null) => UpdateProfileBody;
  /** Shown under the input: why this range or where the suggestion comes from. */
  note: (profile: Profile) => string;
};

const grams = (value: number) => `${value} g`;
const same = (value: number) => value;

const PLAN_NOTE = 'Your plan was worked out from your details and goal.';

const NUTRITION: GoalSetting[] = [
  {
    id: 'calories',
    title: 'Calories',
    color: colors.ink,
    value: (p) => p.dailyCalories,
    suggested: (p) => p.planTargets?.calories ?? p.dailyCalories,
    suggestedLabel: 'Your plan',
    min: (p) => minimumCalories(p.gender),
    max: 6000,
    unitLabel: () => 'kcal',
    format: (value) => `${value.toLocaleString('en-US')} kcal`,
    toInput: same,
    fromInput: Math.round,
    body: (value) => ({ dailyCalories: value }),
    note: (p) =>
      `For safety the goal stays at ${minimumCalories(p.gender).toLocaleString('en-US')} kcal or more. ${PLAN_NOTE}`,
  },
  {
    id: 'protein',
    title: 'Protein',
    color: colors.protein,
    value: (p) => p.dailyProteinG,
    suggested: (p) => p.planTargets?.proteinG ?? p.dailyProteinG,
    suggestedLabel: 'Your plan',
    min: () => MACRO_LIMITS.proteinG.min,
    max: MACRO_LIMITS.proteinG.max,
    unitLabel: () => 'g',
    format: grams,
    toInput: same,
    fromInput: Math.round,
    body: (value) => ({ dailyProteinG: value }),
    note: () => `Spread it over your meals: about a quarter at each. ${PLAN_NOTE}`,
  },
  {
    id: 'carbs',
    title: 'Carbs',
    color: colors.carbs,
    value: (p) => p.dailyCarbsG,
    suggested: (p) => p.planTargets?.carbsG ?? p.dailyCarbsG,
    suggestedLabel: 'Your plan',
    min: () => MACRO_LIMITS.carbsG.min,
    max: MACRO_LIMITS.carbsG.max,
    unitLabel: () => 'g',
    format: grams,
    toInput: same,
    fromInput: Math.round,
    body: (value) => ({ dailyCarbsG: value }),
    note: () => PLAN_NOTE,
  },
  {
    id: 'fat',
    title: 'Fats',
    color: colors.fat,
    value: (p) => p.dailyFatG,
    suggested: (p) => p.planTargets?.fatG ?? p.dailyFatG,
    suggestedLabel: 'Your plan',
    min: () => MACRO_LIMITS.fatG.min,
    max: MACRO_LIMITS.fatG.max,
    unitLabel: () => 'g',
    format: grams,
    toInput: same,
    fromInput: Math.round,
    body: (value) => ({ dailyFatG: value }),
    note: () => `Some fat every day keeps vitamins A, D, E and K absorbed. ${PLAN_NOTE}`,
  },
];

const EXTRAS: GoalSetting[] = [
  {
    id: 'fiber',
    title: 'Fiber',
    color: colors.fiber,
    value: (p) => p.dailyFiberG,
    suggested: (p) => p.recommended.fiberG,
    suggestedLabel: 'Recommended',
    min: () => 5,
    max: 100,
    unitLabel: () => 'g',
    format: grams,
    toInput: same,
    fromInput: Math.round,
    body: (value) => ({ dailyFiberG: value }),
    note: () => 'The recommendation comes from the US and Canadian dietary reference intakes for your age and sex.',
  },
  {
    id: 'water',
    title: 'Water',
    color: colors.water,
    value: (p) => p.dailyWaterMl,
    suggested: (p) => p.recommended.waterMl,
    suggestedLabel: 'Recommended',
    min: () => 500,
    max: 6000,
    unitLabel: (unit) => (unit === 'imperial' ? 'fl oz' : 'ml'),
    format: formatVolume,
    toInput: (value, unit) => Math.round(unit === 'imperial' ? mlToFlOz(value) : value),
    fromInput: (value, unit) => Math.round(unit === 'imperial' ? flOzToMl(value) : value),
    body: (value) => ({ dailyWaterMl: value }),
    note: () => 'From drinks; food adds about a fifth more.',
  },
];

function GoalSheet({
  setting,
  profile,
  saving,
  onClose,
  onSave,
}: {
  setting: GoalSetting;
  profile: Profile;
  saving: boolean;
  onClose: () => void;
  onSave: (changes: UpdateProfileBody) => void;
}) {
  const unit = profile.unitSystem;
  const current = setting.value(profile) ?? setting.suggested(profile) ?? 0;
  const [text, setText] = useState(String(setting.toInput(current, unit)));
  const typed = Number(text.replace(',', '.'));
  const value = text && Number.isFinite(typed) ? setting.fromInput(typed, unit) : null;
  const min = setting.min(profile);
  const inRange = value !== null && value >= min && value <= setting.max;
  const suggested = setting.suggested(profile);

  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="text-center text-[22px] font-bold tracking-tight text-ink">{setting.title} goal</Text>
      <View className="mt-5 h-20 flex-row items-center justify-center gap-2 rounded-card bg-surface px-5">
        <TextInput
          accessibilityLabel={`${setting.title} goal in ${setting.unitLabel(unit)}`}
          value={text}
          onChangeText={(next) => setText(next.replace(/[^0-9]/g, '').slice(0, 5))}
          keyboardType="number-pad"
          autoFocus
          selectTextOnFocus
          returnKeyType="done"
          onSubmitEditing={() => {
            if (inRange) onSave(setting.body(value));
          }}
          className="min-w-[72px] text-center text-[40px] font-bold tracking-tight text-ink"
        />
        <Text className="text-[20px] font-semibold text-muted">{setting.unitLabel(unit)}</Text>
      </View>
      <Text className="mt-3 text-center text-[14px] leading-5 text-muted">
        {text && !inRange
          ? `Choose between ${setting.format(min, unit)} and ${setting.format(setting.max, unit)}.`
          : `${suggested !== null ? `${setting.suggestedLabel}: ${setting.format(suggested, unit)}. ` : ''}${setting.note(profile)}`}
      </Text>
      <View className="mt-6 flex-row gap-3">
        <Button
          title={setting.suggestedLabel === 'Your plan' ? 'Use my plan' : 'Use recommended'}
          variant="secondary"
          className="flex-1"
          disabled={saving}
          onPress={() => onSave(setting.body(null))}
        />
        <Button
          title="Save"
          className="flex-1"
          loading={saving}
          disabled={!inRange}
          onPress={() => onSave(setting.body(value))}
        />
      </View>
    </BottomSheet>
  );
}

function GoalGroup({
  title,
  settings,
  profile,
  onEdit,
}: {
  title: string;
  settings: GoalSetting[];
  profile: Profile;
  onEdit: (setting: GoalSetting) => void;
}) {
  const unit = profile.unitSystem;
  return (
    <View>
      <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">{title}</Text>
      <View className="overflow-hidden rounded-[20px] border border-line">
        {settings.map((setting, index) => {
          const value = setting.value(profile);
          const isSuggested = value === null || value === setting.suggested(profile);
          return (
            <Pressable
              key={setting.id}
              accessibilityRole="button"
              accessibilityLabel={`Edit ${setting.title} goal, ${value === null ? 'not set' : setting.format(value, unit)}`}
              onPress={() => onEdit(setting)}
              className={`min-h-[64px] flex-row items-center gap-3 px-4 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
              <View style={{ backgroundColor: setting.color }} className="h-2.5 w-2.5 rounded-full" />
              <View className="flex-1">
                <Text className="text-[16px] text-ink">{setting.title}</Text>
                <Text className="text-[13px] text-muted">{isSuggested ? setting.suggestedLabel : 'Your own goal'}</Text>
              </View>
              <Text className="text-[16px] font-semibold text-ink">
                {value === null ? '—' : setting.format(value, unit)}
              </Text>
              <Pencil size={18} color={colors.ink} strokeWidth={1.6} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

export default function DailyGoalsScreen() {
  const profile = useProfile();
  return profile ? <DailyGoals profile={profile} /> : null;
}

function DailyGoals({ profile }: { profile: Profile }) {
  const update = useUpdateProfile();
  const [editing, setEditing] = useState<GoalSetting | null>(null);

  const save = (changes: UpdateProfileBody) =>
    update.mutate(changes, {
      onSuccess: () => {
        haptics.success();
        setEditing(null);
      },
      onError: (error) => {
        Sentry.logger.error('Goal save failed', { fields: Object.keys(changes).join(','), error: error.message });
        notify("We couldn't save your goal", error.message);
      },
    });

  const { dailyCalories, dailyProteinG, dailyCarbsG, dailyFatG } = profile;
  const macroCalories =
    dailyProteinG !== null && dailyCarbsG !== null && dailyFatG !== null
      ? caloriesFromMacros({ proteinG: dailyProteinG, carbsG: dailyCarbsG, fatG: dailyFatG })
      : null;
  const mismatch =
    dailyCalories && macroCalories !== null && Math.abs(macroCalories - dailyCalories) / dailyCalories > 0.05;

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton
          accessibilityLabel="Go back"
          icon={<ArrowLeft size={20} color={colors.ink} />}
          onPress={() => router.back()}
        />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Daily goals
        </Text>

        <GoalGroup title="Calories and macros" settings={NUTRITION} profile={profile} onEdit={setEditing} />
        {mismatch && macroCalories !== null ? (
          <Text className="-mt-2 px-1 text-[14px] leading-5 text-muted">
            Protein, carbs and fats add up to {macroCalories.toLocaleString('en-US')} kcal, not{' '}
            {dailyCalories.toLocaleString('en-US')}. That&apos;s fine — Home tracks each goal on its own.
          </Text>
        ) : null}

        <GoalGroup title="Fiber and water" settings={EXTRAS} profile={profile} onEdit={setEditing} />

        <Text className="px-1 text-[14px] leading-5 text-muted">
          Goals are a guide, not a quota. Fiber is best raised slowly with plenty to drink; for water, thirst is a
          good signal too.
        </Text>
      </ScrollView>

      {editing ? (
        <GoalSheet
          key={editing.id}
          setting={editing}
          profile={profile}
          saving={update.isPending}
          onClose={() => setEditing(null)}
          onSave={save}
        />
      ) : null}
    </Screen>
  );
}
