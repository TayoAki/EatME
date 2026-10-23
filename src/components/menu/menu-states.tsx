import { router } from 'expo-router';
import { ArrowLeft, Crown, type LucideIcon } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';

const back = () => (router.canGoBack() ? router.back() : router.replace('/'));

/** The top of a menu screen: back, the restaurant's name and a line under it. */
export function MenuTop({ title, subtitle }: { title: string; subtitle?: string | null }) {
  return (
    <View>
      <View className="h-14 justify-center">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={back} />
      </View>
      <Text accessibilityRole="header" numberOfLines={2} className="text-[30px] font-bold leading-9 tracking-tight text-ink">
        {title}
      </Text>
      {subtitle ? <Text className="mt-1 text-[15px] leading-[21px] text-muted">{subtitle}</Text> : null}
    </View>
  );
}

type MenuMessageProps = {
  title: string;
  message?: string | null;
  icon?: LucideIcon;
  /** A spinner instead of the icon (loading, reading). */
  busy?: boolean;
  children?: ReactNode;
};

/** A whole-screen state of a menu: loading, being read, couldn't be read, Premium, not found. */
export function MenuMessage({ title, message, icon: Icon, busy = false, children }: MenuMessageProps) {
  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={back} />
      </View>
      <View className="flex-1 items-center justify-center px-8">
        {busy ? (
          <ActivityIndicator color={colors.ink} />
        ) : Icon ? (
          <View className="h-20 w-20 items-center justify-center rounded-full bg-surface">
            <Icon size={34} color={colors.ink} strokeWidth={1.6} />
          </View>
        ) : null}
        <Text accessibilityRole="header" className="mt-6 text-center text-[24px] font-bold tracking-tight text-ink">
          {title}
        </Text>
        {message ? <Text className="mt-2 text-center text-[16px] leading-[22px] text-muted">{message}</Text> : null}
      </View>
      {children ? <View className="gap-2 px-6 pb-2">{children}</View> : null}
    </Screen>
  );
}

/** The free try was another menu: What to order needs Premium (WHAT-TO-ORDER.md §9). */
export function MenuPremium() {
  return (
    <MenuMessage
      icon={Crown}
      title="What to order is part of Weight Class Premium"
      message="Your free try was another menu. Premium ranks any menu for what's left of your day.">
      <Button title="See Premium" onPress={() => router.push('/premium')} />
    </MenuMessage>
  );
}
