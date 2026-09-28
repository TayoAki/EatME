import * as Sentry from '@sentry/react-native';

import { colors } from '@/constants/colors';

/** Expo Router navigation → Sentry tracing (screen load + navigation spans). */
export const navigationIntegration = Sentry.reactNavigationIntegration({
  enableTimeToInitialDisplay: true,
});

const dsn = process.env.EXPO_PUBLIC_SENTRY_DSN;

/** Without a DSN nothing reaches Sentry — crash reports and in-app feedback included. */
export const sentryEnabled = !!dsn;

Sentry.init({
  dsn,
  enabled: sentryEnabled,
  environment: __DEV__ ? 'development' : 'production',
  // No IP addresses, user details or request bodies: EatME handles health data.
  sendDefaultPii: false,

  // Structured logs (Sentry.logger.*) — searchable in Sentry → Explore → Logs.
  enableLogs: true,

  // Tracing: sample everything in development, 20% in production.
  tracesSampleRate: __DEV__ ? 1.0 : 0.2,
  enableNativeFramesTracking: true,

  // Session replay only while developing. Store builds record no replays: Apple 2.5.14 wants explicit
  // consent and a visible indicator for any record of user activity.
  replaysSessionSampleRate: __DEV__ ? 1.0 : 0,
  replaysOnErrorSampleRate: __DEV__ ? 1.0 : 0,

  integrations: [
    navigationIntegration,
    ...(__DEV__ ? [Sentry.mobileReplayIntegration({ maskAllText: false, maskAllImages: false, maskAllVectors: false })] : []),
    Sentry.feedbackIntegration({
      formTitle: 'Send feedback',
      messageLabel: 'Your feedback',
      messagePlaceholder: 'Found a bug or missing a feature? Tell us about it.',
      submitButtonLabel: 'Send',
      successMessageText: 'Thanks for helping us improve EatME!',
      showBranding: false,
      showName: false,
      isEmailRequired: false,
      enableScreenshot: true,
      colorScheme: 'light',
      themeLight: {
        background: colors.canvas,
        foreground: colors.ink,
        accentBackground: colors.ink,
        accentForeground: colors.canvas,
        border: colors.line,
      },
    }),
  ],
});

export { Sentry };
