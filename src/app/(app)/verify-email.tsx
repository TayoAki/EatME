import { useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import { ArrowLeft, MailCheck } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { TextField } from '@/components/ui/text-field';
import { colors } from '@/constants/colors';
import { authClient, authErrorMessage, useSession } from '@/lib/auth-client';
import { haptics } from '@/lib/haptics';
import { queryKeys, useProfile } from '@/lib/queries';

const RESEND_AFTER_SECONDS = 30;

const message = (e: unknown) =>
  e && typeof e === 'object' && ('status' in e || 'code' in e)
    ? authErrorMessage(e as { code?: string; message?: string; status?: number })
    : "We couldn't reach EatME. Check your connection and try again.";

/** Confirm the account's email with a 6-digit code (sent at sign-up, or a new one from here). */
export default function VerifyEmailScreen() {
  const profile = useProfile();
  const { userId } = useSession();
  const queryClient = useQueryClient();
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [wait, setWait] = useState(0);
  const email = profile?.email ?? '';
  const verified = !!profile?.emailVerified;

  useEffect(() => {
    if (wait <= 0) return;
    const timer = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(timer);
  }, [wait]);

  const send = async () => {
    setBusy(true);
    setError(null);
    try {
      const { error: authError } = await authClient.emailOtp.sendVerificationOtp({ email, type: 'email-verification' });
      if (authError) throw authError;
      setSent(true);
      setWait(RESEND_AFTER_SECONDS);
    } catch (e) {
      haptics.error();
      setError(message(e));
    } finally {
      setBusy(false);
    }
  };

  const verify = async () => {
    if (code.length !== 6 || busy) return;
    setBusy(true);
    setError(null);
    try {
      const { error: authError } = await authClient.emailOtp.verifyEmail({ email, otp: code });
      if (authError) throw authError;
      haptics.success();
      await queryClient.invalidateQueries({ queryKey: queryKeys.me(userId) });
    } catch (e) {
      haptics.error();
      setError(message(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="h-14 justify-center px-5">
          <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
        </View>
        <ScrollView contentContainerClassName="px-5 pb-10" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            Verify your email
          </Text>
          {verified ? (
            <View className="mt-8 items-center rounded-card bg-surface px-6 py-8">
              <MailCheck size={32} color={colors.success} />
              <Text className="mt-3 text-center text-[18px] font-semibold text-ink">Email verified</Text>
              <Text className="mt-1 text-center text-[15px] leading-[21px] text-muted">
                {email} is confirmed. You can reset your password with it if you ever forget it.
              </Text>
              <Button title="Done" className="mt-6 self-stretch" onPress={() => router.back()} />
            </View>
          ) : (
            <>
              <Text className="mt-2 text-[17px] leading-6 text-muted">
                {sent
                  ? `We sent a new 6-digit code to ${email}. It works for 10 minutes.`
                  : `Enter the 6-digit code we emailed to ${email} when you signed up, or ask for a new one.`}
              </Text>
              <View className="mt-8">
                <TextField
                  label="Code"
                  value={code}
                  onChangeText={(text) => setCode(text.replace(/\D/g, '').slice(0, 6))}
                  placeholder="123456"
                  keyboardType="number-pad"
                  autoComplete="one-time-code"
                  textContentType="oneTimeCode"
                  returnKeyType="done"
                  onSubmitEditing={() => void verify()}
                  maxLength={6}
                />
              </View>
              {error ? (
                <Text accessibilityRole="alert" className="mt-4 text-center text-[14px] leading-5 text-danger">
                  {error}
                </Text>
              ) : null}
              <Button title="Verify" className="mt-6" loading={busy} disabled={code.length !== 6} onPress={() => void verify()} />
              <Pressable
                accessibilityRole="button"
                disabled={wait > 0 || busy}
                hitSlop={8}
                onPress={() => void send()}
                className="mt-5 items-center">
                <Text className="text-[15px] text-muted">
                  {wait > 0 ? `Send a new code in ${wait} s` : <Text className="font-semibold text-ink">Send a new code</Text>}
                </Text>
              </Pressable>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
