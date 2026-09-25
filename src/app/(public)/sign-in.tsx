import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { SocialSignIn } from '@/components/auth/social-sign-in';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Logo } from '@/components/ui/logo';
import { Screen } from '@/components/ui/screen';
import { TextField } from '@/components/ui/text-field';
import { colors } from '@/constants/colors';
import { authClient, authErrorMessage } from '@/lib/auth-client';
import { haptics } from '@/lib/haptics';
import { links, openLink } from '@/lib/links';
import { usePendingOnboarding } from '@/lib/onboarding-store';
import { useFeatures } from '@/lib/queries';
import { FIRST_STEP_HREF } from '@/lib/onboarding-steps';

const MIN_PASSWORD_LENGTH = 8;

/** Email + password sign-up (after the plan is ready) and sign-in (returning users). */
export default function SignInScreen() {
  const params = useLocalSearchParams<{ mode?: 'signup' }>();
  const pending = usePendingOnboarding();
  const features = useFeatures();
  const [mode, setMode] = useState<'signin' | 'signup'>(params.mode === 'signup' ? 'signup' : 'signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const signingUp = mode === 'signup';
  const trimmedEmail = email.trim().toLowerCase();
  const canSubmit =
    /^\S+@\S+\.\S+$/.test(trimmedEmail) &&
    (signingUp ? password.length >= MIN_PASSWORD_LENGTH && name.trim().length > 0 : password.length > 0);

  const submit = async () => {
    if (!canSubmit || submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      const { error: authError } = signingUp
        ? await authClient.signUp.email({ name: name.trim(), email: trimmedEmail, password })
        : await authClient.signIn.email({ email: trimmedEmail, password });
      if (authError) {
        haptics.error();
        setError(authErrorMessage(authError));
        setSubmitting(false);
        return;
      }
      // Signed in: the root layout takes over (saves the onboarding plan, then shows home).
      haptics.success();
    } catch {
      haptics.error();
      setError("We couldn't reach EatME. Check your connection and try again.");
      setSubmitting(false);
    }
  };

  const switchMode = () => {
    setError(null);
    if (signingUp) return setMode('signin');
    // New users answer the onboarding questions first; the account is created after the plan.
    if (pending) return setMode('signup');
    router.replace(FIRST_STEP_HREF);
  };

  return (
    <Screen>
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View className="h-14 justify-center px-5">
          <IconButton
            accessibilityLabel="Go back"
            variant="outline"
            icon={<ArrowLeft size={20} color={colors.ink} />}
            onPress={() => (router.canGoBack() ? router.back() : router.replace('/welcome'))}
          />
        </View>

        <ScrollView
          className="flex-1"
          contentContainerClassName="px-6 pb-6"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <View className="items-center pb-8 pt-4">
            <Logo size={72} />
            <Text accessibilityRole="header" className="mt-6 text-center text-[32px] font-bold tracking-tight text-ink">
              {signingUp ? 'Save your progress' : 'Welcome back'}
            </Text>
            <Text className="mt-2 text-center text-[17px] leading-6 text-muted">
              {signingUp
                ? 'Create an account to keep your plan and meals safe.'
                : 'Sign in to pick up where you left off.'}
            </Text>
          </View>

          <View className="gap-4">
            {signingUp ? (
              <TextField
                label="Name"
                value={name}
                onChangeText={setName}
                placeholder="Your first name"
                autoComplete="given-name"
                textContentType="givenName"
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current?.focus()}
                maxLength={60}
              />
            ) : null}
            <TextField
              ref={emailRef}
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="you@example.com"
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete="email"
              keyboardType="email-address"
              textContentType={signingUp ? 'username' : 'emailAddress'}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
              maxLength={254}
            />
            <TextField
              ref={passwordRef}
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder={signingUp ? `At least ${MIN_PASSWORD_LENGTH} characters` : 'Your password'}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              autoComplete={signingUp ? 'new-password' : 'current-password'}
              textContentType={signingUp ? 'newPassword' : 'password'}
              returnKeyType="go"
              onSubmitEditing={() => void submit()}
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
          </View>

          {!signingUp && features.data?.email ? (
            <Pressable
              accessibilityRole="link"
              hitSlop={8}
              onPress={() => router.push({ pathname: '/forgot-password', params: trimmedEmail ? { email: trimmedEmail } : {} })}
              className="mt-3 self-end active:opacity-60">
              <Text className="text-[15px] font-semibold text-ink">Forgot password?</Text>
            </Pressable>
          ) : null}

          {error ? (
            <Text accessibilityRole="alert" className="mt-4 text-center text-[14px] leading-5 text-danger">
              {error}
            </Text>
          ) : null}

          <Button
            title={signingUp ? 'Create account' : 'Sign in'}
            className="mt-6"
            loading={submitting}
            disabled={!canSubmit}
            onPress={() => void submit()}
          />

          <SocialSignIn onError={setError} />

          <Pressable accessibilityRole="button" hitSlop={8} onPress={switchMode} className="mt-5 items-center">
            <Text className="text-[15px] text-muted">
              {signingUp ? 'Already have an account? ' : 'New to EatME? '}
              <Text className="font-semibold text-ink">{signingUp ? 'Sign in' : 'Get started'}</Text>
            </Text>
          </Pressable>

          <Text className="mt-8 px-4 text-center text-[13px] leading-5 text-muted">
            By continuing you agree to our{' '}
            <Text className="text-ink underline" onPress={() => void openLink(links.terms)}>
              Terms of Service
            </Text>{' '}
            and{' '}
            <Text className="text-ink underline" onPress={() => void openLink(links.privacy)}>
              Privacy Policy
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
