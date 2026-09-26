import { ArrowLeft, Barcode, EyeOff, Settings2, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react-native';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { links, openLink } from '@/lib/links';
import { aiRecipients } from '@/shared/features';

type AiConsentViewProps = {
  /** The companies that get the data (from `/api/features`). */
  providers: readonly string[];
  /** Before the onboarding plan, or before a meal is sent for analysis. */
  context: 'plan' | 'scan';
  onAllow: () => void;
  onDecline: () => void;
  onBack?: () => void;
  allowing?: boolean;
  bottomSpace?: number;
};

function Point({ icon: Icon, children }: { icon: LucideIcon; children: string }) {
  return (
    <View className="flex-row items-start gap-3">
      <Icon size={20} color={colors.ink} strokeWidth={1.8} style={{ marginTop: 1 }} />
      <Text className="flex-1 text-[15px] leading-[21px] text-ink">{children}</Text>
    </View>
  );
}

/**
 * AI consent (Apple 5.1.2(i)): names who gets the person's data and asks before anything is sent.
 * Declining keeps the app working: the standard formula plan, barcodes, food search, quick add.
 */
export function AiConsentView({ providers, context, onAllow, onDecline, onBack, allowing = false, bottomSpace = 24 }: AiConsentViewProps) {
  const what =
    context === 'plan'
      ? `To build your plan, EatME sends your answers (sex, age, height, weight, goal, pace, activity and diet) to ${aiRecipients(providers, 'them')}. Later, the meal photos, descriptions and notes you choose to analyze go the same way.`
      : `To estimate a meal, EatME sends the photo, description or note you choose to analyze to ${aiRecipients(providers)}.`;
  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        {onBack ? (
          <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
        ) : null}
      </View>
      <ScrollView contentContainerClassName="px-6 pb-6" showsVerticalScrollIndicator={false}>
        <View className="h-14 w-14 items-center justify-center rounded-full bg-surface">
          <Sparkles size={26} color={colors.ink} strokeWidth={1.8} />
        </View>
        <Text accessibilityRole="header" className="mt-5 text-[32px] font-bold leading-[38px] tracking-tight text-ink">
          {context === 'plan' ? 'EatME uses AI' : 'Allow AI analysis?'}
        </Text>
        <Text className="mt-3 text-[16px] leading-[23px] text-ink">{what}</Text>
        <View className="mt-6 gap-4">
          <Point icon={EyeOff}>Your name, email and account details are never sent with it.</Point>
          <Point icon={ShieldCheck}>They use it only to send back the result and don&apos;t train AI models on it.</Point>
          <Point icon={Barcode}>Barcodes, food search and quick add never use AI.</Point>
          <Point icon={Settings2}>You can change your mind anytime in Profile → Preferences.</Point>
        </View>
        <Pressable accessibilityRole="link" onPress={() => void openLink(links.privacy)} className="mt-6 self-start active:opacity-60">
          <Text className="text-[15px] font-semibold text-ink underline">How we handle your data</Text>
        </Pressable>
      </ScrollView>
      <View className="gap-3 px-6 pt-3" style={{ paddingBottom: bottomSpace }}>
        <Button title="Allow" onPress={onAllow} loading={allowing} />
        <Button title={context === 'plan' ? 'Continue without AI' : 'Not now'} variant="secondary" onPress={onDecline} disabled={allowing} />
      </View>
    </Screen>
  );
}
