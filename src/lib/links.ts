import * as WebBrowser from 'expo-web-browser';

/** The Railway server also hosts the landing page and the legal pages (legal/ folder). */
const LEGAL_URL = (process.env.EXPO_PUBLIC_LEGAL_URL || 'https://api-production-174d.up.railway.app').replace(/\/$/, '');

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
