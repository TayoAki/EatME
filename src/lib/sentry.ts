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

  // Session replay: always record the session that had an error.
  replaysSessionSampleRate: __DEV__ ? 1.0 : 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    navigationIntegration,
    Sentry.mobileReplayIntegration({
      // Sentry masks everything by default for privacy. Unmask only while developing so the
      // replays show exactly what happened; production builds keep text and images masked.
      maskAllText: !__DEV__,
      maskAllImages: !__DEV__,
      maskAllVectors: !__DEV__,
    }),
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
