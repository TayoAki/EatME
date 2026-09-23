import { ActivityIndicator, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';

export function LoadingScreen({ label }: { label?: string }) {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center gap-6 px-8">
        <Logo size={88} />
        <ActivityIndicator color={colors.ink} />
        {label ? <Text className="text-center text-[16px] text-muted">{label}</Text> : null}
      </View>
    </Screen>
  );
}

/** Shown in development when a required environment variable is missing. */
export function MissingConfigScreen({ variable, hint }: { variable: string; hint: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-canvas px-8">
      <Logo size={72} />
      <Text className="mt-6 text-center text-[22px] font-bold tracking-tight text-ink">Setup required</Text>
      <Text className="mt-3 text-center font-mono text-[14px] text-ink">{variable}</Text>
      <Text className="mt-3 text-center text-[15px] leading-[21px] text-muted">{hint}</Text>
    </View>
  );
}

type ErrorScreenProps = {
  title: string;
  message?: string;
  onRetry: () => void;
  retrying?: boolean;
  secondaryAction?: { label: string; onPress: () => void };
};

export function ErrorScreen({ title, message, onRetry, retrying, secondaryAction }: ErrorScreenProps) {
  return (
    <Screen>
      <View className="flex-1 items-center justify-center px-8">
        <Logo size={72} />
        <Text className="mt-6 text-center text-[24px] font-bold tracking-tight text-ink">{title}</Text>
        {message ? (
          <Text className="mt-2 text-center text-[16px] leading-[22px] text-muted">{message}</Text>
        ) : null}
      </View>
      <View className="gap-2 px-6">
        <Button title="Try again" loading={retrying} onPress={onRetry} />
        {secondaryAction ? (
          <Button title={secondaryAction.label} variant="ghost" onPress={secondaryAction.onPress} />
        ) : null}
      </View>
    </Screen>
  );
}
