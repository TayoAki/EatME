import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

import { billingSupported, packagePrice, premiumPackages } from '@/lib/billing';
import { useFeatures } from '@/lib/queries';

/**
 * What's free and what Premium costs, before the account is made (payments on only). The price
 * comes from the store; without one (web, Expo Go) the note says where it will be shown.
 */
export function PricingNote() {
  const features = useFeatures();
  const payments = !!features.data?.payments;
  const packages = useQuery({
    queryKey: ['premium-packages', null],
    queryFn: () => premiumPackages(null),
    enabled: payments && billingSupported,
    staleTime: 10 * 60_000,
  });
  if (!payments) return null;
  const monthly = packages.data?.find((p) => p.packageType === 'MONTHLY') ?? packages.data?.[0];

  return (
    <View className="mt-7 rounded-card border border-line p-4">
      <Text className="text-[18px] font-semibold text-ink">Free to use</Text>
      <Text className="mt-1 text-[15px] leading-[21px] text-muted">
        {features.data?.freeScansPerDay ?? 3} AI scans a day, plus barcodes, food search and all your goals — free, for
        good. Premium adds unlimited AI scans
        {monthly ? ` for ${packagePrice(monthly)}` : ' (the store shows the price before you pay)'}. It&apos;s optional,
        and you can cancel any time.
      </Text>
    </View>
  );
}
