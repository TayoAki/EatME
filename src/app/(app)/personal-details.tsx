import * as Sentry from '@sentry/react-native';
import { router } from 'expo-router';
import { ArrowLeft, Pencil } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { DateWheels } from '@/components/pickers/date-wheels';
import { HeightWheels, WeightWheel } from '@/components/pickers/body-wheels';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { OptionRow } from '@/components/ui/option-row';
import { Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useProfile, useUpdateProfile } from '@/lib/queries';
import { formatLongDate, fromIsoDate } from '@/lib/time';
import { GENDER_LABELS, GENDERS, type Gender } from '@/shared/onboarding';
import type { Profile, UpdateProfileBody } from '@/shared/user';
import { formatHeight, formatWeight } from '@/shared/units';

type Field = 'targetWeightKg' | 'weightKg' | 'heightCm' | 'dateOfBirth' | 'gender';

const TITLES: Record<Field, string> = {
  targetWeightKg: 'Goal weight',
  weightKg: 'Current weight',
  heightCm: 'Height',
  dateOfBirth: 'Date of birth',
  gender: 'Gender',
};

const UNIT_OPTIONS = [
  { label: 'Imperial', value: 'imperial' },
  { label: 'Metric', value: 'metric' },
] as const;

function displayValue(profile: Profile, field: Field) {
  const unit = profile.unitSystem;
  switch (field) {
    case 'targetWeightKg':
      return profile.targetWeightKg ? formatWeight(profile.targetWeightKg, unit, 0) : '—';
    case 'weightKg':
      return profile.weightKg ? formatWeight(profile.weightKg, unit, 0) : '—';
    case 'heightCm':
      return profile.heightCm ? formatHeight(profile.heightCm, unit) : '—';
    case 'dateOfBirth':
      return profile.dateOfBirth ? formatLongDate(fromIsoDate(profile.dateOfBirth)) : '—';
    case 'gender':
      return profile.gender ? GENDER_LABELS[profile.gender] : '—';
  }
}

function EditDetailSheet({
  field,
  profile,
  saving,
  onClose,
  onSave,
}: {
  field: Field;
  profile: Profile;
  saving: boolean;
  onClose: () => void;
  onSave: (changes: UpdateProfileBody) => void;
}) {
  const [weight, setWeight] = useState(
    (field === 'targetWeightKg' ? profile.targetWeightKg : profile.weightKg) ?? 70,
  );
  const [height, setHeight] = useState(profile.heightCm ?? 175);
  const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth ?? '2000-01-01');
  const [gender, setGender] = useState<Gender | undefined>(profile.gender ?? undefined);

  const save = () => {
    if (field === 'targetWeightKg') onSave({ targetWeightKg: weight });
    else if (field === 'weightKg') onSave({ weightKg: weight });
    else if (field === 'heightCm') onSave({ heightCm: height });
    else if (field === 'dateOfBirth') onSave({ dateOfBirth });
    else if (gender) onSave({ gender });
  };

  return (
    <BottomSheet visible onClose={onClose}>
      <Text className="mb-4 text-center text-[22px] font-bold tracking-tight text-ink">{TITLES[field]}</Text>
      {field === 'targetWeightKg' || field === 'weightKg' ? (
        <WeightWheel weightKg={weight} unit={profile.unitSystem} onChange={setWeight} label={TITLES[field]} />
      ) : field === 'heightCm' ? (
        <HeightWheels heightCm={height} unit={profile.unitSystem} onChange={setHeight} />
      ) : field === 'dateOfBirth' ? (
        <DateWheels value={dateOfBirth} onChange={setDateOfBirth} />
      ) : (
        <View className="gap-3">
          {GENDERS.map((value) => (
            <OptionRow
              key={value}
              centered
              title={GENDER_LABELS[value]}
              selected={gender === value}
              onPress={() => setGender(value)}
            />
          ))}
        </View>
      )}
      <View className="mt-6 flex-row gap-3">
        <Button title="Cancel" variant="secondary" className="flex-1" onPress={onClose} />
        <Button title="Save" className="flex-1" loading={saving} onPress={save} />
      </View>
    </BottomSheet>
  );
}

export default function PersonalDetailsScreen() {
  const profile = useProfile();
  return profile ? <PersonalDetails profile={profile} /> : null;
}

function PersonalDetails({ profile }: { profile: Profile }) {
  const update = useUpdateProfile();
  const [editing, setEditing] = useState<Field | null>(null);

  const save = (changes: UpdateProfileBody) =>
    update.mutate(changes, {
      onSuccess: () => {
        haptics.success();
        setEditing(null);
      },
      onError: (error) => {
        Sentry.logger.error('Profile save failed', { fields: Object.keys(changes).join(','), error: error.message });
        notify("We couldn't save your changes", error.message);
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
          Personal details
        </Text>

        <SegmentedControl
          options={UNIT_OPTIONS}
          value={profile.unitSystem}
          onChange={(unitSystem) => save({ unitSystem })}
        />

        <View className="overflow-hidden rounded-[20px] border border-line">
          {(Object.keys(TITLES) as Field[]).map((field, index) => (
            <Pressable
              key={field}
              accessibilityRole="button"
              accessibilityLabel={`Edit ${TITLES[field]}`}
              onPress={() => setEditing(field)}
              className={`min-h-[64px] flex-row items-center gap-3 px-4 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
              <Text className="flex-1 text-[16px] text-ink">{TITLES[field]}</Text>
              <Text className="text-[16px] font-semibold text-ink">{displayValue(profile, field)}</Text>
              <Pencil size={18} color={colors.ink} strokeWidth={1.6} />
            </Pressable>
          ))}
        </View>

        <Text className="px-1 text-[14px] leading-5 text-muted">
          Changing these values does not change your daily targets.
        </Text>
      </ScrollView>

      {editing ? (
        <EditDetailSheet
          key={editing}
          field={editing}
          profile={profile}
          saving={update.isPending}
          onClose={() => setEditing(null)}
          onSave={save}
        />
      ) : null}
    </Screen>
  );
}
