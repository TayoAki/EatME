import * as Sentry from '@sentry/react-native';
import Constants from 'expo-constants';
import { router } from 'expo-router';
import {
  Bell,
  Bug,
  Brain,
  Crown,
  FileText,
  HeartPulse,
  MailCheck,
  Pill,
  MessageSquareText,
  ShieldCheck,
  SlidersHorizontal,
  Syringe,
  Target,
  UserRound,
  Weight,
} from 'lucide-react-native';
import { useState } from 'react';
import { Platform, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SettingsGroup, SettingsRow } from '@/components/profile/settings';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { confirm, notify } from '@/lib/confirm';
import { healthName } from '@/lib/health';
import { useHealthStore } from '@/lib/health-store';
import { links, openLink } from '@/lib/links';
import { useBilling, useDeleteAccount, useFeatures, useProfile } from '@/lib/queries';
import { sentryEnabled } from '@/lib/sentry';
import { formatWeight } from '@/shared/units';
import type { Profile } from '@/shared/user';

const TAB_BAR_SPACE = 110;

export default function ProfileScreen() {
  const profile = useProfile();
  return profile ? <ProfileContent profile={profile} /> : null;
}

function ProfileContent({ profile }: { profile: Profile }) {
  const insets = useSafeAreaInsets();
  const deleteAccount = useDeleteAccount();
  const features = useFeatures();
  const billing = useBilling(!!features.data?.payments);
  const healthSync = useHealthStore((s) => s.enabled);
  const [signingOut, setSigningOut] = useState(false);

  const name = profile.name.trim() || 'EatME member';
  const email = profile.email;

  const handleSignOut = async () => {
    setSigningOut(true);
    try {
      // The root layout clears the cached data once the signed-out screens are shown.
      await authClient.signOut();
    } finally {
      setSigningOut(false);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = await confirm({
      title: 'Delete your account?',
      message: 'This permanently deletes your account, your plan, every logged meal and your photos. This cannot be undone.',
      confirmLabel: 'Delete',
      destructive: true,
    });
    if (!confirmed) return;
    deleteAccount.mutate(undefined, {
      onSuccess: () => void authClient.signOut().catch(() => undefined),
      onError: (error) => notify("We couldn't delete your account", error.message),
    });
  };

  return (
    <ScrollView
      className="flex-1 bg-canvas"
      contentContainerStyle={{ paddingTop: insets.top + 12, paddingBottom: insets.bottom + TAB_BAR_SPACE }}
      contentContainerClassName="gap-6 px-5"
      showsVerticalScrollIndicator={false}>
      <Text accessibilityRole="header" className="text-[36px] font-bold tracking-tight text-ink">
        Profile
      </Text>

      <View className="flex-row items-center gap-4 rounded-card border border-line bg-canvas p-4">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-surface">
          <Text className="text-[24px] font-bold text-ink">{name.charAt(0).toUpperCase()}</Text>
        </View>
        <View className="flex-1">
          <Text numberOfLines={1} className="text-[22px] font-bold tracking-tight text-ink">
            {name}
          </Text>
          {email ? (
            <Text numberOfLines={1} className="text-[15px] text-muted">
              {email}
            </Text>
          ) : null}
        </View>
      </View>

      <SettingsGroup title="Account">
        {features.data?.email && !profile.emailVerified ? (
          <SettingsRow icon={MailCheck} label="Verify your email" onPress={() => router.push('/verify-email')} />
        ) : null}
        <SettingsRow icon={UserRound} label="Personal details" onPress={() => router.push('/personal-details')} />
        <SettingsRow
          icon={Weight}
          label="Weight"
          value={profile.weightKg ? formatWeight(profile.weightKg, profile.unitSystem) : undefined}
          onPress={() => router.push('/weight')}
        />
        <SettingsRow icon={Target} label="Daily goals" onPress={() => router.push('/daily-goals')} />
        {features.data?.payments ? (
          <SettingsRow
            icon={Crown}
            label="EatME Premium"
            value={billing.data ? (billing.data.premium ? 'Active' : 'Free') : undefined}
            onPress={() => router.push('/premium')}
          />
        ) : null}
        <SettingsRow icon={Bell} label="Reminders" onPress={() => router.push('/reminders')} />
        <SettingsRow
          icon={Syringe}
          label="GLP-1 mode"
          value={profile.glp1 ? 'On' : 'Off'}
          onPress={() => router.push('/glp1')}
        />
        <SettingsRow icon={Pill} label="Supplements" onPress={() => router.push('/supplements')} />
        <SettingsRow
          icon={HeartPulse}
          label={Platform.OS === 'web' ? 'Health apps' : healthName}
          value={healthSync ? 'On' : 'Off'}
          onPress={() => router.push('/health')}
        />
        <SettingsRow icon={Brain} label="Your foods" onPress={() => router.push('/personal-foods')} />
        <SettingsRow icon={SlidersHorizontal} label="Preferences" onPress={() => router.push('/preferences')} />
      </SettingsGroup>

      <SettingsGroup title="Support">
        {/* Feedback goes to Sentry, so the row only shows once a DSN is set. */}
        {sentryEnabled ? (
          <SettingsRow icon={MessageSquareText} label="Send feedback" onPress={() => Sentry.showFeedbackWidget()} />
        ) : null}
        <SettingsRow icon={ShieldCheck} label="Privacy Policy" onPress={() => void openLink(links.privacy)} />
        <SettingsRow icon={FileText} label="Terms of Service" onPress={() => void openLink(links.terms)} />
      </SettingsGroup>

      {__DEV__ ? (
        <SettingsGroup title="Developer">
          <SettingsRow icon={Bug} label="Sentry test bench" onPress={() => router.push('/sentry-test')} />
        </SettingsGroup>
      ) : null}

      <View className="gap-2">
        <Button title="Sign out" variant="secondary" loading={signingOut} onPress={() => void handleSignOut()} />
        <Button
          title="Delete account"
          variant="danger"
          loading={deleteAccount.isPending}
          onPress={() => void handleDeleteAccount()}
        />
      </View>

      <Text className="text-center text-[13px] text-muted">EatME v{Constants.expoConfig?.version ?? '1.0.0'}</Text>
    </ScrollView>
  );
}
