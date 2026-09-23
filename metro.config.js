const { getSentryExpoConfig } = require('@sentry/react-native/metro');
const { withNativeWind } = require('nativewind/metro');

// Expo's default Metro config + Sentry debug IDs so production stack traces map to the source.
const config = getSentryExpoConfig(__dirname);

/**
 * `@trigger.dev/react-hooks` pulls in all of `@trigger.dev/core`, including two server-only
 * dependencies the app never calls:
 * - `jose` (lazy `import("jose")` to sign JWTs) — its Node build can't be bundled for iOS/Android.
 * - `@s2-dev/streamstore` (writing realtime streams v2) — uses dynamic Node imports Hermes can't compile.
 * `useRealtimeRun` only needs the run subscription, so both are replaced with empty modules on native.
 */
const SERVER_ONLY_MODULES = new Set(['jose', '@s2-dev/streamstore']);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (SERVER_ONLY_MODULES.has(moduleName) && (platform === 'ios' || platform === 'android')) {
    return { type: 'empty' };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './src/global.css' });
