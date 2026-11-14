import * as Sentry from '@sentry/react-native';
import { useQuery } from '@tanstack/react-query';
import { router, useLocalSearchParams } from 'expo-router';
import {
  BellRing,
  CalendarDays,
  Camera,
  ChartLine,
  CreditCard,
  Crown,
  Images,
  LockOpen,
  Utensils,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { useEffect, useState, type ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import type { PurchasesPackage } from 'react-native-purchases';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  ZoomIn,
} from 'react-native-reanimated';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Rise } from '@/components/ui/motion';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { useSession } from '@/lib/auth-client';
import {
  billingSupported,
  buyPackage,
  packagePrice,
  premiumOptions,
  restorePurchases,
  STORE_NAME,
  trialPeriod,
  trialText,
  type PremiumOption,
} from '@/lib/billing';
import { cn } from '@/lib/cn';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { links, openLink } from '@/lib/links';
import { premiumOptionsKey } from '@/lib/premium-offer';
import { useFeatures, useSyncBilling } from '@/lib/queries';
import { startTrialReminder, type TrialStarted } from '@/lib/trial-reminder';
import { trialEnd, trialReminderAt } from '@/shared/billing';

type Step = 'benefits' | 'reminder' | 'started';

/** "December 12". */
const longDay = (date: Date) => date.toLocaleDateString([], { month: 'long', day: 'numeric' });

/** In development only: `/premium-offer?preview=1` shows the offer with sample prices (the web has no store). */
const sample = (identifier: string, packageType: string, priceString: string) =>
  ({
    identifier,
    packageType,
    product: {
      identifier: `com.tayoaki.eatme.premium.${packageType.toLowerCase()}`,
      priceString,
      introPrice: { price: 0, periodNumberOfUnits: 1, periodUnit: 'MONTH' },
    },
  }) as unknown as PurchasesPackage;
const PREVIEW_OPTIONS: PremiumOption[] = __DEV__
  ? [
      { pkg: sample('$rc_annual', 'ANNUAL', '$39.99'), trial: 'Free for 1 month' },
      { pkg: sample('$rc_monthly', 'MONTHLY', '$7.99'), trial: 'Free for 1 month' },
    ]
  : [];

/** The bell on the reminder step: it rings every few seconds (still with Reduce Motion). */
function RingingBell({ size = 30 }: { size?: number }) {
  const reduceMotion = useReducedMotion();
  const angle = useSharedValue(0);
  useEffect(() => {
    if (reduceMotion) return;
    angle.value = withDelay(
      400,
      withRepeat(
        withSequence(
          withTiming(-16, { duration: 90 }),
          withTiming(14, { duration: 160 }),
          withTiming(-10, { duration: 140 }),
          withTiming(6, { duration: 120 }),
          withTiming(0, { duration: 100 }),
          withDelay(2200, withTiming(0, { duration: 0 })),
        ),
        -1,
      ),
    );
    return () => cancelAnimation(angle);
  }, [reduceMotion, angle]);
  const style = useAnimatedStyle(() => ({ transform: [{ rotate: `${angle.value}deg` }] }));
  return (
    <Animated.View entering={ZoomIn.springify().damping(11).stiffness(200)}>
      <View className="h-20 w-20 items-center justify-center rounded-full bg-surface">
        <Animated.View style={style}>
          <BellRing size={size} color={colors.ink} strokeWidth={1.8} />
        </Animated.View>
      </View>
    </Animated.View>
  );
}

function Benefit({ icon: Icon, title, text, index }: { icon: LucideIcon; title: string; text: string; index: number }) {
  return (
    <Rise index={index} after={200}>
      <View className="flex-row gap-4 rounded-2xl bg-surface px-4 py-3.5">
        <Icon size={22} color={colors.ink} strokeWidth={1.7} style={{ marginTop: 1 }} />
        <View className="flex-1">
          <Text className="text-[16px] font-semibold text-ink">{title}</Text>
          <Text className="mt-0.5 text-[14px] leading-5 text-muted">{text}</Text>
        </View>
      </View>
    </Rise>
  );
}

function TimelineRow({
  icon: Icon,
  when,
  children,
  last = false,
  index,
}: {
  icon: LucideIcon;
  when: string;
  children: ReactNode;
  last?: boolean;
  index: number;
}) {
  return (
    <Rise index={index} after={250}>
      <View className="flex-row gap-4">
        <View className="items-center">
          <View className="h-10 w-10 items-center justify-center rounded-full bg-ink">
            <Icon size={18} color={colors.canvas} strokeWidth={2} />
          </View>
          {last ? null : <View className="w-0.5 flex-1 bg-line" style={{ minHeight: 18 }} />}
        </View>
        <View className={cn('flex-1 pt-1', !last && 'pb-5')}>
          <Text className="text-[16px] font-semibold text-ink">{when}</Text>
          <Text className="mt-0.5 text-[15px] leading-[21px] text-muted">{children}</Text>
        </View>
      </View>
    </Rise>
  );
}

/**
 * Shown once, right after a new account's plan is saved (`usePremiumOfferAfterSignUp`), and only when the store says
 * this person can still get a free trial. Two steps: what Premium adds, then the trial's timeline with the reminder
 * Weight Class sends two days before it ends. Honest paywall (PLAN.md, Apple 3.1.2): the billed price is the biggest
 * price on screen, the trial says when and at what price it renews, Restore, Terms and Privacy are there, and "Not now"
 * is always one tap away.
 */
export default function PremiumOfferScreen() {
  const { userId } = useSession();
  const { preview } = useLocalSearchParams<{ preview?: string }>();
  const previewing = __DEV__ && preview === '1';
  const features = useFeatures().data;
  const sync = useSyncBilling();
  const options = useQuery({
    queryKey: premiumOptionsKey(userId),
    queryFn: () => premiumOptions(userId),
    enabled: billingSupported && !!userId && !previewing,
    staleTime: 10 * 60_000,
  });
  const list = (previewing ? PREVIEW_OPTIONS : (options.data ?? [])).filter((option) => option.trial);
  const [step, setStep] = useState<Step>('benefits');
  const [selected, setSelected] = useState<string | null>(null);
  const [busy, setBusy] = useState<'buy' | 'restore' | null>(null);
  const [started, setStarted] = useState<TrialStarted | null>(null);
  const chosen = list.find((option) => option.pkg.identifier === selected) ?? list[0];

  const period = chosen ? trialPeriod(chosen.pkg) : null;
  const endsAt = period ? trialEnd(new Date(), period) : null;
  const remindAt = endsAt ? trialReminderAt(endsAt) : null;
  const price = chosen ? packagePrice(chosen.pkg) : '';
  const trialLength = chosen?.trial?.replace(/^Free for /, '') ?? '';

  const close = (reason: 'not_now' | 'started' | 'restored') => {
    if (reason === 'not_now') Sentry.logger.info('Premium offer: not now', { step });
    if (router.canGoBack()) router.back();
    else router.replace('/');
  };

  const buy = async () => {
    if (!chosen) return;
    if (previewing || !userId) {
      notify('Preview', 'Purchases only work in the Weight Class app for iPhone and Android.');
      return;
    }
    setBusy('buy');
    try {
      if (await buyPackage(userId, chosen.pkg)) {
        await sync.mutateAsync().catch(() => undefined);
        haptics.success();
        Sentry.logger.info('Premium offer: trial started', { package: chosen.pkg.packageType });
        setStarted(await startTrialReminder(userId, chosen.pkg));
        setStep('started');
      }
    } catch (error) {
      notify("We couldn't complete the purchase", error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setBusy(null);
    }
  };

  const restore = async () => {
    if (previewing || !userId) return;
    setBusy('restore');
    try {
      const found = await restorePurchases(userId);
      await sync.mutateAsync().catch(() => undefined);
      if (found) {
        haptics.success();
        close('restored');
      } else {
        notify('Nothing to restore', `No Weight Class Premium subscription was found for this ${STORE_NAME} account.`);
      }
    } catch (error) {
      notify("We couldn't restore purchases", error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setBusy(null);
    }
  };

  const loading = !previewing && options.isPending && billingSupported;

  return (
    <Screen>
      <View className="h-14 flex-row items-center justify-between px-5">
        {step === 'reminder' ? (
          <Pressable accessibilityRole="button" hitSlop={10} onPress={() => setStep('benefits')}>
            <Text className="text-[15px] font-medium text-muted">Back</Text>
          </Pressable>
        ) : (
          <View />
        )}
        {step === 'started' ? (
          <View className="h-10 w-10" />
        ) : (
          <IconButton
            accessibilityLabel="Not now"
            icon={<X size={20} color={colors.ink} />}
            onPress={() => close('not_now')}
          />
        )}
      </View>

      {loading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color={colors.ink} />
        </View>
      ) : !chosen && step !== 'started' ? (
        <View className="flex-1 justify-center gap-4 px-6">
          <Text className="text-center text-[16px] leading-[22px] text-muted">
            Premium isn&apos;t available in your store right now. You can find it later in Profile.
          </Text>
          <Button title="Continue" onPress={() => close('not_now')} />
        </View>
      ) : step === 'benefits' ? (
        <View key="benefits" className="flex-1">
          <ScrollView className="flex-1" contentContainerClassName="gap-3 px-6 pb-6" showsVerticalScrollIndicator={false}>
            <Animated.View entering={ZoomIn.springify().damping(11).stiffness(200)} style={{ alignSelf: 'flex-start' }}>
              <View className="h-14 w-14 items-center justify-center rounded-full bg-ink">
                <Crown size={26} color={colors.canvas} strokeWidth={1.8} />
              </View>
            </Animated.View>
            <Rise index={0} after={100}>
              <Text accessibilityRole="header" className="mt-2 text-[30px] font-bold leading-[36px] tracking-tight text-ink">
                Get more out of your plan
              </Text>
              <Text className="mb-2 mt-2 text-[16px] leading-[22px] text-muted">
                Your plan, barcodes, food search, water, weight and GLP-1 mode stay free. Weight Class Premium adds:
              </Text>
            </Rise>
            <Benefit
              index={1}
              icon={Camera}
              title="Unlimited AI scans"
              text={`Photos, labels and descriptions, as many as you need (fair use: 50 a day). Free: ${features?.freeScansPerDay ?? 3} a day.`}
            />
            <Benefit
              index={2}
              icon={CalendarDays}
              title="Plan tomorrow"
              text="A draft of tomorrow from your own meals, with about what the groceries cost."
            />
            {features?.whatToOrder ? (
              <Benefit
                index={3}
                icon={Utensils}
                title="What to order"
                text="Which dishes at big restaurant chains fit what's left of your day."
              />
            ) : null}
            <Benefit
              index={4}
              icon={ChartLine}
              title="Weekly check-in"
              text="A calorie target suggested from your weight trend. You decide whether to use it."
            />
            {features?.multiPhoto ? (
              <Benefit index={5} icon={Images} title="Up to 3 photos of one meal" text="For a closer estimate of a big plate." />
            ) : null}
          </ScrollView>
          <View className="gap-1 px-6 pt-3">
            <Button title="Continue" onPress={() => setStep('reminder')} />
            <Button title="Not now" variant="ghost" onPress={() => close('not_now')} />
          </View>
        </View>
      ) : step === 'reminder' && chosen ? (
        <ScrollView key="reminder" className="flex-1" contentContainerClassName="px-6 pb-8" showsVerticalScrollIndicator={false}>
          <View className="items-center">
            <RingingBell />
            <Rise index={0} after={100}>
              <Text
                accessibilityRole="header"
                className="mt-4 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
                We&apos;ll remind you before your trial ends
              </Text>
            </Rise>
          </View>

          <View className="mt-7">
            <TimelineRow index={1} icon={LockOpen} when="Today">
              Premium unlocks, free for {trialLength}.
            </TimelineRow>
            {remindAt ? (
              <TimelineRow index={2} icon={BellRing} when={longDay(remindAt)}>
                A reminder that your trial ends in 2 days.
              </TimelineRow>
            ) : null}
            <TimelineRow index={3} icon={CreditCard} when={endsAt ? longDay(endsAt) : 'When the trial ends'} last>
              {price} starts, unless you cancel before then.
            </TimelineRow>
          </View>

          <Rise index={4} after={250} style={{ marginTop: 20, gap: 8 }}>
            {list.map((option) => {
              const active = option.pkg.identifier === chosen.pkg.identifier;
              return (
                <Pressable
                  key={option.pkg.identifier}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: active }}
                  onPress={() => {
                    haptics.selection();
                    setSelected(option.pkg.identifier);
                  }}
                  className={cn('rounded-2xl border-2 px-4 py-3.5', active ? 'border-ink bg-surface' : 'border-line')}>
                  {/* The billed price is the biggest price on screen (Apple 3.1.2). */}
                  <Text className="text-[22px] font-bold tracking-tight text-ink">{packagePrice(option.pkg)}</Text>
                  <Text className="mt-0.5 text-[14px] text-muted">
                    {trialText(option.pkg)}, then {packagePrice(option.pkg)}
                  </Text>
                </Pressable>
              );
            })}
          </Rise>

          <Rise index={5} after={250} style={{ marginTop: 16, gap: 4 }}>
            <Button title="Start free trial" loading={busy === 'buy'} disabled={busy !== null} onPress={() => void buy()} />
            <Button title="Not now" variant="ghost" disabled={busy !== null} onPress={() => close('not_now')} />
            <Text className="mt-1 text-[12px] leading-4 text-muted">
              {chosen.trial}, then {price}. Payment is charged to your {STORE_NAME} account when the free trial ends
              {endsAt ? ` on ${longDay(endsAt)}` : ''}. The subscription renews automatically unless you cancel at least
              24 hours before the end of the free trial or of a period. Manage or cancel it any time in your {STORE_NAME}{' '}
              settings.
            </Text>
            <View className="mt-3 flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Text
                accessibilityRole="button"
                className="text-[13px] text-muted underline"
                onPress={() => (busy === null ? void restore() : undefined)}>
                {busy === 'restore' ? 'Restoring…' : 'Restore purchases'}
              </Text>
              <Text accessibilityRole="link" className="text-[13px] text-muted underline" onPress={() => void openLink(links.terms)}>
                Terms of Service
              </Text>
              <Text
                accessibilityRole="link"
                className="text-[13px] text-muted underline"
                onPress={() => void openLink(links.privacy)}>
                Privacy Policy
              </Text>
            </View>
          </Rise>
        </ScrollView>
      ) : (
        <View key="started" className="flex-1 justify-center px-6">
          <View className="items-center">
            <RingingBell />
            <Rise index={0} after={100}>
              <Text accessibilityRole="header" className="mt-4 text-center text-[28px] font-bold leading-[34px] tracking-tight text-ink">
                You&apos;re Premium
              </Text>
            </Rise>
            <Rise index={1} after={100}>
              <Text className="mt-3 text-center text-[16px] leading-[23px] text-muted">
                {started
                  ? started.remindAt
                    ? `Your free trial ends on ${longDay(started.endsAt)}. We'll remind you on ${longDay(started.remindAt)}.`
                    : `Your free trial ends on ${longDay(started.endsAt)}. Notifications are off, so there's no reminder: cancel any time before then in your ${STORE_NAME} settings if you don't want to keep it.`
                  : 'Unlimited AI scans, Plan tomorrow and the weekly check-in are on.'}
              </Text>
            </Rise>
          </View>
          <Rise index={2} after={100} style={{ marginTop: 28 }}>
            <Button title="Start logging" onPress={() => close('started')} />
          </Rise>
        </View>
      )}
    </Screen>
  );
}
