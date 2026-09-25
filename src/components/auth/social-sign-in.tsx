import * as AppleAuthentication from 'expo-apple-authentication';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import * as Crypto from 'expo-crypto';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Button } from '@/components/ui/button';
import { apiFetch } from '@/lib/api';
import { authClient, authErrorMessage } from '@/lib/auth-client';
import { haptics } from '@/lib/haptics';
import { useFeatures } from '@/lib/queries';

/** Apple's ID token names the app's bundle, which Expo Go doesn't have: social sign-in needs a build. */
const supported = Platform.OS !== 'web' && Constants.executionEnvironment !== ExecutionEnvironment.StoreClient;

function GoogleLogo() {
  return (
    <Svg width={18} height={18} viewBox="0 0 48 48">
      <Path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <Path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <Path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <Path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </Svg>
  );
}

type SocialSignInProps = {
  /** Shown under the form; null clears it. */
  onError: (message: string | null) => void;
};

/**
 * "Continue with Apple / Google" under the email form, when the server has them set up. On iPhone
 * Google only appears together with Apple (App Store rule 4.8). The root layout takes over once
 * signed in (and saves a pending onboarding plan for new accounts).
 */
export function SocialSignIn({ onError }: SocialSignInProps) {
  const features = useFeatures();
  const [appleAvailable, setAppleAvailable] = useState(false);
  const [busy, setBusy] = useState<'apple' | 'google' | null>(null);

  useEffect(() => {
    if (!supported || Platform.OS !== 'ios') return;
    AppleAuthentication.isAvailableAsync()
      .then(setAppleAvailable)
      .catch(() => setAppleAvailable(false));
  }, []);

  const showApple = supported && Platform.OS === 'ios' && appleAvailable && !!features.data?.apple;
  const showGoogle = supported && !!features.data?.google && (Platform.OS !== 'ios' || showApple);
  if (!showApple && !showGoogle) return null;

  const signInWithApple = async () => {
    onError(null);
    setBusy('apple');
    try {
      // Apple gets the hash of a one-time value; the server checks the value against the token.
      const nonce = Crypto.randomUUID();
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
        nonce: await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, nonce),
      });
      if (!credential.identityToken) throw new Error('Apple did not return a sign-in token.');
      const name = credential.fullName;
      const { error } = await authClient.signIn.social({
        provider: 'apple',
        idToken: {
          token: credential.identityToken,
          nonce,
          // Apple shares the name only the first time.
          ...(name?.givenName || name?.familyName
            ? { user: { name: { firstName: name.givenName ?? '', lastName: name.familyName ?? '' }, email: credential.email ?? undefined } }
            : {}),
        },
      });
      if (error) throw error;
      haptics.success();
      // Lets deleting the account revoke Apple's tokens later (App Store rule).
      if (credential.authorizationCode) {
        void apiFetch('/api/apple/authorization', { method: 'POST', body: { code: credential.authorizationCode } }).catch(() => undefined);
      }
    } catch (e) {
      const code = (e as { code?: string }).code;
      if (code !== 'ERR_REQUEST_CANCELED') {
        haptics.error();
        onError(authErrorMessage(e as { code?: string; message?: string; status?: number }));
      }
    } finally {
      setBusy(null);
    }
  };

  const signInWithGoogle = async () => {
    onError(null);
    setBusy('google');
    try {
      // Opens Google in the browser; the session comes back through the eatme:// redirect.
      const { error } = await authClient.signIn.social({ provider: 'google', callbackURL: '/' });
      if (error) throw error;
      const session = await authClient.getSession();
      if (!session.data) {
        onError(
          "Google sign-in didn't finish. If this email already has an EatME account, sign in with your password first.",
        );
      }
    } catch (e) {
      haptics.error();
      onError(authErrorMessage(e as { code?: string; message?: string; status?: number }));
    } finally {
      setBusy(null);
    }
  };

  return (
    <View className="mt-6 gap-3">
      <View className="flex-row items-center gap-3">
        <View className="h-px flex-1 bg-line" />
        <Text className="text-[14px] text-muted">or</Text>
        <View className="h-px flex-1 bg-line" />
      </View>
      {showApple ? (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={28}
          style={styles.appleButton}
          onPress={() => void (busy ? undefined : signInWithApple())}
        />
      ) : null}
      {showGoogle ? (
        <Button
          title="Continue with Google"
          variant="outline"
          icon={<GoogleLogo />}
          loading={busy === 'google'}
          disabled={busy !== null}
          onPress={() => void signInWithGoogle()}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({ appleButton: { height: 56 } });
