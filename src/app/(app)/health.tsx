import { router } from 'expo-router';
import { ArrowLeft, HeartPulse } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Platform, ScrollView, Switch, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { connectHealth, healthName, healthSupport, type HealthSupport } from '@/lib/health';
import { useHealthStore } from '@/lib/health-store';

const HEALTH_CONNECT_STORE = 'https://play.google.com/store/apps/details?id=com.google.android.apps.healthdata';

const SUPPORT_TEXT: Record<Exclude<HealthSupport, 'available'>, string> = {
  'expo-go': `${healthName} sync needs the EatME app from the App Store or Google Play — it isn't available in Expo Go.`,
  'needs-app': 'Install or update Health Connect from Google Play, then come back here.',
  unsupported: 'Health sync is available in the EatME app on iPhone and Android.',
};

export default function HealthScreen() {
  const enabled = useHealthStore((s) => s.enabled);
  const lastSyncAt = useHealthStore((s) => s.lastSyncAt);
  const setEnabled = useHealthStore((s) => s.setEnabled);
  const [support, setSupport] = useState<HealthSupport | null>(null);
  const [connecting, setConnecting] = useState(false);
  const title = Platform.OS === 'web' ? 'Health apps' : healthName;

  useEffect(() => {
    void healthSupport()
      .then(setSupport)
      .catch(() => setSupport('unsupported'));
  }, []);

  const toggle = async (on: boolean) => {
    if (!on) {
      setEnabled(false);
      return;
    }
    setConnecting(true);
    try {
      const granted = await connectHealth();
      if (!granted) {
        notify(`${healthName} is off for EatME`, `Allow EatME to write nutrition and water in ${healthName}, then try again.`);
        return;
      }
      haptics.success();
      setEnabled(true);
    } catch (error) {
      notify(`We couldn't connect to ${healthName}`, error instanceof Error ? error.message : String(error));
    } finally {
      setConnecting(false);
    }
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            {title}
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Send the meals and drinks you log to {Platform.OS === 'web' ? 'Apple Health or Health Connect' : healthName}, next
            to your workouts and sleep. EatME only writes: it never reads your health data.
          </Text>
        </View>

        {support === null ? (
          <ActivityIndicator color={colors.ink} />
        ) : support === 'available' ? (
          <View className="overflow-hidden rounded-[20px] border border-line">
            <View className="min-h-[64px] flex-row items-center gap-3 px-4 py-3">
              <HeartPulse size={22} color={colors.protein} strokeWidth={1.8} />
              <View className="flex-1">
                <Text className="text-[16px] text-ink">Sync meals and water</Text>
                <Text className="text-[13px] text-muted">
                  {enabled && lastSyncAt
                    ? `Last synced ${new Date(lastSyncAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`
                    : 'Off'}
                </Text>
              </View>
              {connecting ? (
                <ActivityIndicator color={colors.ink} />
              ) : (
                <Switch
                  accessibilityLabel={`Sync with ${healthName}`}
                  value={enabled}
                  onValueChange={(on) => void toggle(on)}
                  trackColor={{ true: colors.ink, false: colors.line }}
                  thumbColor={colors.canvas}
                  ios_backgroundColor={colors.line}
                />
              )}
            </View>
          </View>
        ) : (
          <View className="gap-3 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">{SUPPORT_TEXT[support]}</Text>
            {support === 'needs-app' ? (
              <Button title="Open Google Play" size="md" variant="outline" onPress={() => void Linking.openURL(HEALTH_CONNECT_STORE)} />
            ) : null}
          </View>
        )}

        <View className="gap-2 px-1">
          <Text className="text-[15px] font-semibold text-ink">What is shared</Text>
          <Text className="text-[14px] leading-5 text-muted">
            • Each meal: calories, protein, carbs, fat and fiber, at the time you logged it{'\n'}• Each drink: the
            amount of water
          </Text>
          <Text className="mt-2 text-[14px] leading-5 text-muted">
            Today and yesterday stay in step while EatME is open, including changes and deletions. Turning sync off
            keeps what was already sent; you can delete it in {Platform.OS === 'web' ? 'the health app' : healthName}.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
