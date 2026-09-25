import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { ScrollView, Switch, Text, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useFeatures, useProfile, useUpdateProfile } from '@/lib/queries';

/** App preferences kept on the account. Today: the food-quality tag experiment (off by default). */
export default function PreferencesScreen() {
  const profile = useProfile();
  const features = useFeatures();
  const update = useUpdateProfile();
  const on = !!profile?.preferences.foodQualityTag;

  const toggle = (value: boolean) => {
    haptics.selection();
    update.mutate(
      { preferences: { foodQualityTag: value } },
      { onError: (error) => notify("We couldn't save that", error.message) },
    );
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
        {features.data?.foodQuality ? (
          <View className="rounded-[20px] border border-line p-4">
            <View className="flex-row items-center gap-3">
              <Text className="flex-1 text-[16px] font-semibold text-ink">Food quality tag (beta)</Text>
              <Switch
                accessibilityLabel="Food quality tag"
                value={on}
                disabled={update.isPending}
                onValueChange={toggle}
                trackColor={{ true: colors.ink, false: colors.track }}
                thumbColor={colors.canvas}
              />
            </View>
            <Text className="mt-2 text-[14px] leading-5 text-muted">
              Adds a small tag to each new meal — whole foods, processed or highly processed — with a one-line reason and
              an estimate of added sugar. A photo can&apos;t always tell homemade from packaged, so treat it as a rough
              guide, not a grade.
            </Text>
          </View>
        ) : (
          <Text className="text-[15px] leading-[21px] text-muted">Nothing to change here yet.</Text>
        )}
      </ScrollView>
    </Screen>
  );
}
