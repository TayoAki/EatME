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
import type { UnitSystem } from '@/shared/onboarding';
import type { Profile, UpdateProfileBody } from '@/shared/user';
import { flOzToMl, formatVolume, mlToFlOz } from '@/shared/units';

type GoalSetting = {
  id: string;
  title: string;
  color: string;
  /** The saved goal and the recommended one, in stored units (g or ml). */
  value: (profile: Profile) => number;
  recommended: (profile: Profile) => number;
  /** Stored range, the same as the server's. */
  min: number;
  max: number;
  unitLabel: (unit: UnitSystem) => string;
  format: (value: number, unit: UnitSystem) => string;
  /** Stored value → the number the user types, and back. */
  toInput: (value: number, unit: UnitSystem) => number;
  fromInput: (value: number, unit: UnitSystem) => number;
  /** `null` goes back to the recommended goal. */
  body: (value: number | null) => UpdateProfileBody;
  source: string;
};

const GOALS: GoalSetting[] = [
  {
    id: 'fiber',
    title: 'Fiber',
    color: colors.fiber,
    value: (p) => p.dailyFiberG,
    recommended: (p) => p.recommended.fiberG,
    min: 5,
    max: 100,
    unitLabel: () => 'g',
    format: (value) => `${value} g`,
    toInput: (value) => value,
    fromInput: (value) => Math.round(value),
    body: (value) => ({ dailyFiberG: value }),
    source: 'US and Canadian dietary reference intakes for your age and sex',
  },
  {
    id: 'water',
    title: 'Water',
    color: colors.water,
    value: (p) => p.dailyWaterMl,
    recommended: (p) => p.recommended.waterMl,
    min: 500,
    max: 6000,
    unitLabel: (unit) => (unit === 'imperial' ? 'fl oz' : 'ml'),
    format: formatVolume,
    toInput: (value, unit) => Math.round(unit === 'imperial' ? mlToFlOz(value) : value),
    fromInput: (value, unit) => Math.round(unit === 'imperial' ? flOzToMl(value) : value),
    body: (value) => ({ dailyWaterMl: value }),
    source: 'from drinks; food adds about a fifth more',
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
  const [text, setText] = useState(String(setting.toInput(setting.value(profile), unit)));
  const typed = Number(text.replace(',', '.'));
  const value = text && Number.isFinite(typed) ? setting.fromInput(typed, unit) : null;
  const inRange = value !== null && value >= setting.min && value <= setting.max;
  const recommended = setting.recommended(profile);

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
          ? `Choose between ${setting.format(setting.min, unit)} and ${setting.format(setting.max, unit)}.`
          : `Recommended for you: ${setting.format(recommended, unit)} (${setting.source}).`}
      </Text>
      <View className="mt-6 flex-row gap-3">
        <Button
          title="Use recommended"
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

export default function DailyGoalsScreen() {
  const profile = useProfile();
  return profile ? <DailyGoals profile={profile} /> : null;
}

function DailyGoals({ profile }: { profile: Profile }) {
  const update = useUpdateProfile();
  const [editing, setEditing] = useState<GoalSetting | null>(null);
  const unit = profile.unitSystem;

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

        <View className="overflow-hidden rounded-[20px] border border-line">
          {GOALS.map((setting, index) => {
            const value = setting.value(profile);
            const isRecommended = value === setting.recommended(profile);
            return (
              <Pressable
                key={setting.id}
                accessibilityRole="button"
                accessibilityLabel={`Edit ${setting.title} goal, ${setting.format(value, unit)}`}
                onPress={() => setEditing(setting)}
                className={`min-h-[64px] flex-row items-center gap-3 px-4 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
                <View style={{ backgroundColor: setting.color }} className="h-2.5 w-2.5 rounded-full" />
                <View className="flex-1">
                  <Text className="text-[16px] text-ink">{setting.title}</Text>
                  <Text className="text-[13px] text-muted">{isRecommended ? 'Recommended' : 'Your own goal'}</Text>
                </View>
                <Text className="text-[16px] font-semibold text-ink">{setting.format(value, unit)}</Text>
                <Pencil size={18} color={colors.ink} strokeWidth={1.6} />
              </Pressable>
            );
          })}
        </View>

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
