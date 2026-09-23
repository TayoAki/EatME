import Constants from 'expo-constants';
import { Platform } from 'react-native';

/**
 * Base URL of the EatME server (API routes + sign-in).
 * - EXPO_PUBLIC_API_URL when set (release builds: your Railway URL).
 * - Otherwise, while developing, the Expo dev server that serves the API routes.
 */
function resolveApiUrl() {
  const configured = process.env.EXPO_PUBLIC_API_URL?.trim().replace(/\/$/, '');
  if (configured) return configured;

  if (Platform.OS === 'web') {
    return typeof window !== 'undefined' ? window.location.origin : '';
  }
  // e.g. "192.168.1.20:8081" on a phone in the same Wi-Fi, "xyz.exp.direct" with --tunnel.
  const host = Constants.expoConfig?.hostUri;
  if (__DEV__ && host) return `${/\.exp\.direct|ngrok/.test(host) ? 'https' : 'http'}://${host}`;
  return '';
}

export const API_URL = resolveApiUrl();
