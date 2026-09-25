import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { ScrollView, Switch, Text, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useFeatures, useProfile, useUpdateProfile } from '@/lib/queries';
import type { Preferences } from '@/shared/user';

function PreferenceCard({
  title,
  label,
  value,
  disabled,
  onChange,
  children,
}: {
  title: string;
  /** Switch name for screen readers. */
  label: string;
  value: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  children: string;
}) {
  return (
    <View className="rounded-[20px] border border-line p-4">
      <View className="flex-row items-center gap-3">
        <Text className="flex-1 text-[16px] font-semibold text-ink">{title}</Text>
        <Switch
          accessibilityLabel={label}
          value={value}
          disabled={disabled}
          onValueChange={onChange}
          trackColor={{ true: colors.ink, false: colors.track }}
          thumbColor={colors.canvas}
        />
      </View>
      <Text className="mt-2 text-[14px] leading-5 text-muted">{children}</Text>
    </View>
  );
}

/** App preferences kept on the account: calm mode, and the food-quality tag experiment when offered. */
export default function PreferencesScreen() {
  const profile = useProfile();
  const features = useFeatures();
  const update = useUpdateProfile();
  const preferences = profile?.preferences ?? {};

  const set = (change: Preferences) => {
    haptics.selection();
    update.mutate({ preferences: change }, { onError: (error) => notify("We couldn't save that", error.message) });
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Preferences
        </Text>
        <PreferenceCard
          title="Calm mode"
          label="Calm mode"
          value={!!preferences.calmMode}
          disabled={update.isPending}
          onChange={(value) => set({ calmMode: value })}>
          Hides calorie and macro numbers on Home, meals and scans. Rings and words stay, nothing turns red when you go
          over, and there is no streak to keep: EatME counts the days you logged instead. Fiber and water keep their
          numbers, Daily goals still shows your targets, and “Show numbers” on a meal reveals them.
        </PreferenceCard>
        {features.data?.foodQuality ? (
          <PreferenceCard
            title="Food quality tag (beta)"
            label="Food quality tag"
            value={!!preferences.foodQualityTag}
            disabled={update.isPending}
            onChange={(value) => set({ foodQualityTag: value })}>
            Adds a small tag to each new meal — whole foods, processed or highly processed — with a one-line reason and an
            estimate of added sugar. A photo can&apos;t always tell homemade from packaged, so treat it as a rough guide, not a
            grade.
          </PreferenceCard>
        ) : null}
      </ScrollView>
    </Screen>
  );
}
