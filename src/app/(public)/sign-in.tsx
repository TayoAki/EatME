import { isClerkAPIResponseError, useSSO } from '@clerk/expo';
import * as AuthSession from 'expo-auth-session';
import { router, useLocalSearchParams } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';

import { AppleIcon, GoogleIcon } from '@/components/brand-icons';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Logo } from '@/components/ui/logo';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { haptics } from '@/lib/haptics';
import { links, openLink } from '@/lib/links';

// Completes the OAuth session when the browser redirects back (web).
WebBrowser.maybeCompleteAuthSession();

type Provider = 'apple' | 'google';

/** Android: pre-load the browser so the OAuth sheet opens instantly. */
function useWarmUpBrowser() {
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
}

function errorMessage(error: unknown) {
  if (isClerkAPIResponseError(error)) {
    const first = error.errors[0];
    return first?.longMessage ?? first?.message ?? 'Sign in failed. Please try again.';
  }
  return 'Something went wrong. Please try again.';
}

export default function SignInScreen() {
  useWarmUpBrowser();
  const { mode } = useLocalSearchParams<{ mode?: 'signup' }>();
  const { startSSOFlow } = useSSO();
  const [pending, setPending] = useState<Provider | null>(null);
  const [error, setError] = useState<string | null>(null);
  const signingUp = mode === 'signup';

  const continueWith = async (provider: Provider) => {
    setError(null);
    setPending(provider);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: provider === 'apple' ? 'oauth_apple' : 'oauth_google',
        redirectUrl: AuthSession.makeRedirectUri(),
      });
      if (createdSessionId && setActive) {
        haptics.success();
        // The root layout takes over from here: it saves the onboarding plan, then shows home.
        await setActive({ session: createdSessionId });
        return;
      }
      // The user closed the browser — nothing to do.
      setPending(null);
    } catch (err) {
      haptics.error();
      setError(errorMessage(err));
      setPending(null);
    }
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton
          accessibilityLabel="Go back"
          variant="outline"
          icon={<ArrowLeft size={20} color={colors.ink} />}
          onPress={() => (router.canGoBack() ? router.back() : router.replace('/welcome'))}
        />
      </View>

      <View className="flex-1 items-center justify-center px-8">
        <Logo size={104} />
        <Text accessibilityRole="header" className="mt-8 text-center text-[32px] font-bold tracking-tight text-ink">
          {signingUp ? 'Save your progress' : 'Welcome back'}
        </Text>
        <Text className="mt-3 text-center text-[17px] leading-6 text-muted">
          {signingUp
            ? 'Create an account to keep your plan and meals safe.'
            : 'Sign in to pick up where you left off.'}
        </Text>
      </View>

      <View className="gap-3 px-6">
        {error ? (
          <Text accessibilityRole="alert" className="mb-1 text-center text-[14px] text-danger">
            {error}
          </Text>
        ) : null}
        <Button
          title="Continue with Apple"
          icon={<AppleIcon size={20} />}
          loading={pending === 'apple'}
          disabled={pending !== null}
          onPress={() => void continueWith('apple')}
        />
        <Button
          title="Continue with Google"
          variant="outline"
          icon={<GoogleIcon size={20} />}
          loading={pending === 'google'}
          disabled={pending !== null}
          onPress={() => void continueWith('google')}
        />
        <Text className="mt-4 px-4 text-center text-[13px] leading-5 text-muted">
          By continuing you agree to our{' '}
          <Text className="text-ink underline" onPress={() => void openLink(links.terms)}>
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text className="text-ink underline" onPress={() => void openLink(links.privacy)}>
            Privacy Policy
          </Text>
        </Text>
      </View>
    </Screen>
  );
}
