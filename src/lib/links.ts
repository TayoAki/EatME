import * as WebBrowser from 'expo-web-browser';

/** Deployed legal site (legal/ folder on Cloudflare). */
const LEGAL_URL = (process.env.EXPO_PUBLIC_LEGAL_URL ?? 'https://eatme-legal.example.workers.dev').replace(/\/$/, '');

export const links = {
  website: LEGAL_URL,
  privacy: `${LEGAL_URL}/privacy`,
  terms: `${LEGAL_URL}/terms`,
};

export function openLink(url: string) {
  return WebBrowser.openBrowserAsync(url, {
    presentationStyle: WebBrowser.WebBrowserPresentationStyle.PAGE_SHEET,
  });
}
