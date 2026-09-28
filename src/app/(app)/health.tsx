import { router } from 'expo-router';
import { Activity, ArrowLeft, ChevronRight, HeartPulse } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { connectHealth, healthName, healthSupport, type HealthSupport } from '@/lib/health';
import { requestActivityRead } from '@/lib/health-read';
import { useHealthStore } from '@/lib/health-store';

const HEALTH_CONNECT_STORE =
  'https://play.google.com/store/apps/details?id=com.google.android.apps.healthdata';

const SUPPORT_TEXT: Record<Exclude<HealthSupport, 'available'>, string> = {
  'expo-go': `${healthName} sync needs the EatME app from the App Store or Google Play — it isn't available in Expo Go.`,
  'needs-app': 'Install or update Health Connect from Google Play, then come back here.',
  unsupported: 'Health sync is available in the EatME app on iPhone and Android.',
};

export default function HealthScreen() {
  const enabled = useHealthStore((s) => s.enabled);
  const lastSyncAt = useHealthStore((s) => s.lastSyncAt);
  const setEnabled = useHealthStore((s) => s.setEnabled);
  const readEnabled = useHealthStore((s) => s.readEnabled);
  const setReadEnabled = useHealthStore((s) => s.setReadEnabled);
  const [support, setSupport] = useState<HealthSupport | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [asking, setAsking] = useState(false);
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
        notify(
          `${healthName} is off for EatME`,
          `Allow EatME to write nutrition and water in ${healthName}, then try again.`,
        );
        return;
      }
      haptics.success();
      setEnabled(true);
    } catch (error) {
      notify(
        `We couldn't connect to ${healthName}`,
        error instanceof Error ? error.message : String(error),
      );
    } finally {
      setConnecting(false);
    }
  };

  const toggleRead = async (on: boolean) => {
    if (!on) {
      setReadEnabled(false);
      return;
    }
    setAsking(true);
    try {
      if (!(await requestActivityRead())) {
        notify(
          `${healthName} is off for EatME`,
          `Allow EatME to read steps, workouts and sleep in ${healthName}, then try again.`,
        );
        return;
      }
      haptics.success();
      setReadEnabled(true);
    } catch (error) {
      notify(
        `We couldn't connect to ${healthName}`,
        error instanceof Error ? error.message : String(error),
      );
    } finally {
      setAsking(false);
    }
  };

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
        <View>
          <Text
            accessibilityRole="header"
            className="text-[32px] font-bold tracking-tight text-ink"
          >
            {title}
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Send the meals and drinks you log to{' '}
            {Platform.OS === 'web' ? 'Apple Health or Health Connect' : healthName}, and if you
            like, see your steps, workouts and sleep next to your meals. Each is its own switch.
          </Text>
        </View>

        {support === null ? (
          <ActivityIndicator color={colors.ink} />
        ) : support === 'available' ? (
          <>
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
            <View className="overflow-hidden rounded-[20px] border border-line">
              <View className="min-h-[64px] flex-row items-center gap-3 px-4 py-3">
                <Activity size={22} color={colors.water} strokeWidth={1.8} />
                <View className="flex-1">
                  <Text className="text-[16px] text-ink">Read activity and sleep</Text>
                  <Text className="text-[13px] text-muted">
                    {readEnabled ? 'Steps, workouts and sleep' : 'Off'}
                  </Text>
                </View>
                {asking ? (
                  <ActivityIndicator color={colors.ink} />
                ) : (
                  <Switch
                    accessibilityLabel={`Read activity and sleep from ${healthName}`}
                    value={readEnabled}
                    onValueChange={(on) => void toggleRead(on)}
                    trackColor={{ true: colors.ink, false: colors.line }}
                    thumbColor={colors.canvas}
                    ios_backgroundColor={colors.line}
                  />
                )}
              </View>
              {readEnabled ? (
                <Pressable
                  accessibilityRole="link"
                  onPress={() => router.push('/activity')}
                  className="min-h-[52px] flex-row items-center border-t border-line px-4 active:bg-surface"
                >
                  <Text className="flex-1 text-[15px] text-ink">See the last 7 days</Text>
                  <ChevronRight size={18} color={colors.faint} />
                </Pressable>
              ) : null}
            </View>
          </>
        ) : (
          <View className="gap-3 rounded-2xl bg-surface p-4">
            <Text className="text-[14px] leading-5 text-ink">{SUPPORT_TEXT[support]}</Text>
            {support === 'needs-app' ? (
              <Button
                title="Open Google Play"
                size="md"
                variant="outline"
                onPress={() => void Linking.openURL(HEALTH_CONNECT_STORE)}
              />
            ) : null}
          </View>
        )}

        <View className="gap-2 px-1">
          <Text className="text-[15px] font-semibold text-ink">What is shared</Text>
          <Text className="text-[14px] leading-5 text-muted">
            • Each meal: calories, protein, carbs, fat and fiber, at the time you logged it{'\n'}•
            Each drink: the amount of water
          </Text>
          <Text className="mt-2 text-[14px] leading-5 text-muted">
            Today and yesterday stay in step while EatME is open, including changes and deletions.
            Turning sync off keeps what was already sent; you can delete it in{' '}
            {Platform.OS === 'web' ? 'the health app' : healthName}.
          </Text>
          <Text className="mt-4 text-[15px] font-semibold text-ink">What is read</Text>
          <Text className="text-[14px] leading-5 text-muted">
            • Steps and active calories per day{'\n'}• Workouts: type, time and calories{'\n'}•
            Sleep: time asleep each night
          </Text>
          <Text className="mt-2 text-[14px] leading-5 text-muted">
            It stays on your phone: EatME shows it next to your meals and never sends it to its
            server or the AI. Nothing is added to your calorie goal — your activity level in the
            plan already counts your workouts.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
