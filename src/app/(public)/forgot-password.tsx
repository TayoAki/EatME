import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { TextField } from '@/components/ui/text-field';
import { colors } from '@/constants/colors';
import { authClient, authErrorMessage } from '@/lib/auth-client';
import { haptics } from '@/lib/haptics';

const MIN_PASSWORD_LENGTH = 8;
const RESEND_AFTER_SECONDS = 30;

/** Auth errors have a code or status; anything else means the request never reached EatME. */
const message = (e: unknown) =>
  e && typeof e === 'object' && ('status' in e || 'code' in e)
    ? authErrorMessage(e as { code?: string; message?: string; status?: number })
    : "We couldn't reach EatME. Check your connection and try again.";

/** Forgot password: a 6-digit code by email, then a new password (no links to open on the phone). */
export default function ForgotPasswordScreen() {
  const params = useLocalSearchParams<{ email?: string }>();
  const [email, setEmail] = useState(params.email ?? '');
  const [step, setStep] = useState<'email' | 'code'>('email');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [wait, setWait] = useState(0);

  const trimmedEmail = email.trim().toLowerCase();
  const validEmail = /^\S+@\S+\.\S+$/.test(trimmedEmail);

  useEffect(() => {
    if (wait <= 0) return;
    const timer = setTimeout(() => setWait((w) => w - 1), 1000);
    return () => clearTimeout(timer);
  }, [wait]);

  const sendCode = async () => {
    if (!validEmail || busy) return;
    setBusy(true);
    setError(null);
    try {
      const { error: authError } = await authClient.emailOtp.requestPasswordReset({ email: trimmedEmail });
      if (authError) throw authError;
      setStep('code');
      setWait(RESEND_AFTER_SECONDS);
    } catch (e) {
      haptics.error();
      setError(message(e));
    } finally {
      setBusy(false);
    }
  };

  const reset = async () => {
    if (code.length !== 6 || password.length < MIN_PASSWORD_LENGTH || busy) return;
    setBusy(true);
    setError(null);
    try {
      const { error: authError } = await authClient.emailOtp.resetPassword({ email: trimmedEmail, otp: code, password });
      if (authError) throw authError;
      haptics.success();
      // Signed in with the new password: the root layout takes over.
      const signedIn = await authClient.signIn.email({ email: trimmedEmail, password });
      if (signedIn.error) router.replace('/sign-in');
    } catch (e) {
      haptics.error();
      setError(message(e));
      setBusy(false);
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="h-14 justify-center px-5">
          <IconButton
            accessibilityLabel="Go back"
            variant="outline"
            icon={<ArrowLeft size={20} color={colors.ink} />}
            onPress={() => (step === 'code' ? setStep('email') : router.canGoBack() ? router.back() : router.replace('/sign-in'))}
          />
        </View>
        <ScrollView contentContainerClassName="px-6 pb-6" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Text accessibilityRole="header" className="mt-2 text-[32px] font-bold tracking-tight text-ink">
            {step === 'email' ? 'Forgot password?' : 'Check your email'}
          </Text>
          <Text className="mt-2 text-[17px] leading-6 text-muted">
            {step === 'email'
              ? "Enter your account's email and we'll send you a 6-digit code."
              : `If ${trimmedEmail} has an EatME account, a 6-digit code is on its way. It works for 10 minutes.`}
          </Text>

          <View className="mt-8 gap-4">
            {step === 'email' ? (
              <TextField
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="you@example.com"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                keyboardType="email-address"
                textContentType="emailAddress"
                returnKeyType="send"
                onSubmitEditing={() => void sendCode()}
                maxLength={254}
                autoFocus
              />
            ) : (
              <>
                <TextField
                  label="Code"
                  value={code}
                  onChangeText={(text) => setCode(text.replace(/\D/g, '').slice(0, 6))}
                  placeholder="123456"
                  keyboardType="number-pad"
                  autoComplete="one-time-code"
                  textContentType="oneTimeCode"
                  maxLength={6}
                  autoFocus
                />
                <TextField
                  label="New password"
                  value={password}
                  onChangeText={setPassword}
                  placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoComplete="new-password"
                  textContentType="newPassword"
                  returnKeyType="go"
                  onSubmitEditing={() => void reset()}
                  maxLength={128}
                  right={
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
                      hitSlop={8}
                      onPress={() => setShowPassword((v) => !v)}
                      className="h-10 w-10 items-center justify-center">
                      {showPassword ? <EyeOff size={20} color={colors.muted} /> : <Eye size={20} color={colors.muted} />}
                    </Pressable>
                  }
                />
              </>
            )}
          </View>

          {error ? (
            <Text accessibilityRole="alert" className="mt-4 text-center text-[14px] leading-5 text-danger">
              {error}
            </Text>
          ) : null}

          {step === 'email' ? (
            <Button title="Send code" className="mt-6" loading={busy} disabled={!validEmail} onPress={() => void sendCode()} />
          ) : (
            <>
              <Button
                title="Reset password"
                className="mt-6"
                loading={busy}
                disabled={code.length !== 6 || password.length < MIN_PASSWORD_LENGTH}
                onPress={() => void reset()}
              />
              <Pressable
                accessibilityRole="button"
                disabled={wait > 0 || busy}
                hitSlop={8}
                onPress={() => void sendCode()}
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
