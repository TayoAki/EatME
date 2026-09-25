import * as Sentry from '@sentry/react-native';
import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Linking, Platform } from 'react-native';
import type { CustomerInfo, PurchasesPackage } from 'react-native-purchases';

import { PREMIUM_ENTITLEMENT } from '@/shared/billing';

type Purchases = (typeof import('react-native-purchases'))['default'];

/**
 * App Store / Google Play subscriptions through RevenueCat (V2, behind the server's payments flag).
 * Needs a development or store build and the public SDK key for the platform; the web and Expo Go
 * never load the native module.
 */
const apiKey =
  Platform.OS === 'ios'
    ? process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY
    : Platform.OS === 'android'
      ? process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY
      : undefined;
export const billingSupported =
  !!apiKey && Platform.OS !== 'web' && Constants.executionEnvironment !== ExecutionEnvironment.StoreClient;

let purchases: Purchases | null | undefined;
let configured = false;

function load(): Purchases | null {
  if (purchases !== undefined) return purchases;
  purchases = null;
  if (!billingSupported) return purchases;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    purchases = (require('react-native-purchases') as typeof import('react-native-purchases')).default;
  } catch (error) {
    Sentry.logger.warn('RevenueCat module missing', { error: String(error) });
  }
  return purchases;
}

/** Starts RevenueCat for this account (the app user id is the EatME user id), or anonymously. */
async function ready(userId: string | null) {
  const sdk = load();
  if (!sdk || !apiKey) return null;
  if (!configured) {
    sdk.configure({ apiKey, appUserID: userId });
    configured = true;
  } else if (userId && (await sdk.getAppUserID()) !== userId) {
    await sdk.logIn(userId);
  }
  return sdk;
}

export async function identifyBillingUser(userId: string) {
  await ready(userId);
}

/** After signing out: back to an anonymous RevenueCat user. */
export async function forgetBillingUser() {
  const sdk = load();
  if (!sdk || !configured) return;
  try {
    if (!(await sdk.isAnonymous())) await sdk.logOut();
  } catch {}
}

/** The subscription options of the current offering, with the store's localized prices. */
export async function premiumPackages(userId: string | null): Promise<PurchasesPackage[]> {
  const sdk = await ready(userId);
  if (!sdk) return [];
  const offerings = await sdk.getOfferings();
  return offerings.current?.availablePackages ?? [];
}

const hasPremium = (info: CustomerInfo) => !!info.entitlements.active[PREMIUM_ENTITLEMENT];

/** Buys a package. Resolves false when the person cancels in the store sheet. */
export async function buyPackage(userId: string, pkg: PurchasesPackage) {
  const sdk = await ready(userId);
  if (!sdk) throw new Error('Purchases are not available in this version of the app.');
  try {
    const { customerInfo } = await sdk.purchasePackage(pkg);
    return hasPremium(customerInfo);
  } catch (error) {
    if ((error as { userCancelled?: boolean }).userCancelled) return false;
    throw error;
  }
}

export async function restorePurchases(userId: string) {
  const sdk = await ready(userId);
  if (!sdk) throw new Error('Purchases are not available in this version of the app.');
  return hasPremium(await sdk.restorePurchases());
}

/** The store's own subscription settings: cancel or change there in a few taps. */
export async function manageSubscription(userId: string) {
  const sdk = await ready(userId);
  if (Platform.OS === 'ios' && sdk) return sdk.showManageSubscriptions();
  const url = (sdk ? (await sdk.getCustomerInfo()).managementURL : null) ?? 'https://play.google.com/store/account/subscriptions';
  return Linking.openURL(url);
}

/** "£4.99 / month" from a package. */
export function packagePrice(pkg: PurchasesPackage) {
  const period: Record<string, string> = { MONTHLY: 'month', ANNUAL: 'year', WEEKLY: 'week', SIX_MONTH: '6 months', THREE_MONTH: '3 months' };
  const per = period[pkg.packageType];
  return per ? `${pkg.product.priceString} / ${per}` : pkg.product.priceString;
}

/** "Free for 1 week" when the package starts with a free trial. */
export function trialText(pkg: PurchasesPackage) {
  const intro = pkg.product.introPrice;
  if (!intro || intro.price > 0) return null;
  const unit = intro.periodUnit.toLowerCase();
  return `Free for ${intro.periodNumberOfUnits} ${unit}${intro.periodNumberOfUnits > 1 ? 's' : ''}`;
}
