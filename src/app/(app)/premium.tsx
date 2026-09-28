import { useQuery } from '@tanstack/react-query';
import { router } from 'expo-router';
import { ArrowLeft, Check, Crown } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/lib/auth-client';
import { billingSupported, buyPackage, manageSubscription, packagePrice, premiumOptions, restorePurchases } from '@/lib/billing';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { links, openLink } from '@/lib/links';
import { useBilling, useFeatures, useSyncBilling } from '@/lib/queries';
import { formatLongDate } from '@/lib/time';

const STORE = Platform.OS === 'ios' ? 'App Store' : Platform.OS === 'android' ? 'Google Play' : 'app store';
/** Where an active subscription was bought (RevenueCat's store names). */
const storeName = (store: string | null) =>
  store === 'APP_STORE' || store === 'MAC_APP_STORE' ? 'App Store' : store === 'PLAY_STORE' ? 'Google Play' : STORE;

function Benefit({ text }: { text: string }) {
  return (
    <View className="flex-row gap-3">
      <Check size={18} color={colors.success} strokeWidth={2.6} style={{ marginTop: 2 }} />
      <Text className="flex-1 text-[16px] leading-[22px] text-ink">{text}</Text>
    </View>
  );
}

/**
 * EatME Premium: unlimited AI scans, several photos of one meal, the weekly check-in and Plan
 * tomorrow. Store prices, subscribe, restore, and cancel in the store.
 */
export default function PremiumScreen() {
  const { userId } = useSession();
  const billing = useBilling();
  const multiPhoto = !!useFeatures().data?.multiPhoto;
  const sync = useSyncBilling();
  const options = useQuery({
    queryKey: ['premium-options', userId],
    queryFn: () => premiumOptions(userId),
    enabled: billingSupported && !!userId,
    staleTime: 10 * 60_000,
  });
  const [selected, setSelected] = useState<string | null>(null);
  const [busy, setBusy] = useState<'buy' | 'restore' | null>(null);
  const status = billing.data;
  const list = options.data ?? [];
  const chosen = list.find((option) => option.pkg.identifier === selected) ?? list[0];
  const pkg = chosen?.pkg;
  const trial = chosen?.trial ?? null;

  const buy = async () => {
    if (!userId || !pkg) return;
    setBusy('buy');
    try {
      if (await buyPackage(userId, pkg)) {
        await sync.mutateAsync();
        haptics.success();
      }
    } catch (error) {
      notify("We couldn't complete the purchase", error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setBusy(null);
    }
  };

  const restore = async () => {
    if (!userId) return;
    setBusy('restore');
    try {
      const found = await restorePurchases(userId);
      await sync.mutateAsync();
      if (!found) notify('Nothing to restore', `No Weight Class Premium subscription was found for this ${STORE} account.`);
    } catch (error) {
      notify("We couldn't restore purchases", error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setBusy(null);
    }
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center gap-3">
          <Crown size={28} color={colors.ink} strokeWidth={1.8} />
          <Text accessibilityRole="header" className="flex-1 text-[32px] font-bold tracking-tight text-ink">
            Weight Class Premium
          </Text>
        </View>

        {billing.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : status?.premium ? (
          <View className="rounded-card bg-surface p-5">
            <Text className="text-[20px] font-bold text-ink">You&apos;re Premium</Text>
            <Text className="mt-1 text-[15px] leading-[21px] text-muted">
              {status.expiresAt
                ? `${status.willRenew ? 'Renews' : 'Ends'} on ${formatLongDate(new Date(status.expiresAt))}.`
                : 'Unlimited AI scans are on.'}{' '}
              Cancel any time in your {storeName(status.store)} settings; Premium stays until the end of the period.
            </Text>
            {billingSupported ? (
              <Button
                title="Manage subscription"
                variant="outline"
                className="mt-4"
                onPress={() => userId && void manageSubscription(userId).catch(() => undefined)}
              />
            ) : null}
          </View>
        ) : (
          <>
            <View className="gap-3">
              <Benefit text="Unlimited AI scans of meals, labels and descriptions (fair use: 50 a day)" />
              {multiPhoto ? <Benefit text="Up to 3 photos of one meal for a closer estimate" /> : null}
              <Benefit text="A weekly check-in that suggests a calorie target from your weight trend (you decide)" />
              <Benefit text="Plan tomorrow: a draft of your day from your own meals" />
              <Benefit text="Everything else stays free: barcodes, food search, drinks, goals, water, weight, body, GLP-1 mode and supplements" />
            </View>
            {status ? (
              <View className="rounded-2xl bg-surface p-4">
                <Text className="text-[15px] leading-[21px] text-ink">
                  Free plan: {status.freeScansPerDay} AI scans a day. Left today:{' '}
                  <Text className="font-semibold">{status.scansLeft ?? 0}</Text>.
                </Text>
              </View>
            ) : null}

            {!billingSupported ? (
              <Text className="text-[15px] leading-[21px] text-muted">
                Subscriptions are available in the Weight Class app for iPhone and Android.
              </Text>
            ) : options.isPending ? (
              <ActivityIndicator color={colors.ink} />
            ) : list.length === 0 ? (
              <Text className="text-[15px] leading-[21px] text-muted">
                Premium isn&apos;t available in your store right now. Please try again later.
              </Text>
            ) : (
              <>
                <View className="gap-2">
                  {list.map((option) => {
                    const active = option.pkg.identifier === pkg?.identifier;
                    return (
                      <Pressable
                        key={option.pkg.identifier}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: active }}
                        onPress={() => setSelected(option.pkg.identifier)}
                        className={cn('rounded-2xl border px-4 py-3.5', active ? 'border-ink bg-surface' : 'border-line')}>
                        <Text className="text-[17px] font-semibold text-ink">{packagePrice(option.pkg)}</Text>
                        {option.trial ? (
                          <Text className="mt-0.5 text-[14px] text-muted">
                            {option.trial}, then {packagePrice(option.pkg)}
                          </Text>
                        ) : null}
                      </Pressable>
                    );
                  })}
                </View>
                <Button
                  title={trial ? 'Start free trial' : 'Subscribe'}
                  loading={busy === 'buy'}
                  disabled={busy !== null || !pkg}
                  onPress={() => void buy()}
                />
                <Text className="text-[12px] leading-4 text-muted">
                  Payment is charged to your {STORE} account. The subscription renews automatically unless you cancel at
                  least 24 hours before the end of the period{trial ? ' or the free trial' : ''}. Manage or
                  cancel it any time in your {STORE} settings.
                </Text>
              </>
            )}
          </>
        )}

        {billingSupported && !status?.premium ? (
          <Button title="Restore purchases" variant="ghost" loading={busy === 'restore'} disabled={busy !== null} onPress={() => void restore()} />
        ) : null}
        <View className="flex-row justify-center gap-4">
          <Text className="text-[13px] text-muted underline" onPress={() => void openLink(links.terms)}>
            Terms of Service
          </Text>
          <Text className="text-[13px] text-muted underline" onPress={() => void openLink(links.privacy)}>
            Privacy Policy
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
