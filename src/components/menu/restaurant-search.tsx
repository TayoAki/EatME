import { router } from 'expo-router';
import { ChevronRight, Crown, Search, X } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { FoodPicture } from '@/components/ui/food-picture';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { formatDay, toIsoDate } from '@/lib/time';
import { useBilling, useChains, useFeatures, useMenuScans } from '@/lib/queries';

/**
 * Search → Restaurants (What to order, v2.5): the chains in Weight Class's own table, biggest first,
 * and the menus the person scanned in the last 30 days. A chain opens What fits on its menu.
 */
export function RestaurantSearch() {
  const [query, setQuery] = useState('');
  const chains = useChains(query);
  const scans = useMenuScans();
  const payments = !!useFeatures().data?.payments;
  const billing = useBilling(payments);
  // Free accounts: one list is the free try (it stays open), any other needs Premium.
  const tried = payments && !billing.data?.premium ? billing.data?.whatToOrderTry ?? null : null;
  const recent = query.trim() ? [] : (scans.data?.scans ?? []).slice(0, 5);
  const list = chains.data?.chains ?? [];

  return (
    <>
      <View className="mt-3 h-12 flex-row items-center gap-2 rounded-field bg-surface px-4">
        <Search size={18} color={colors.muted} />
        <TextInput
          accessibilityLabel="Search restaurants"
          value={query}
          onChangeText={setQuery}
          autoCorrect={false}
          placeholder="e.g. Chick-fil-A, Subway"
          placeholderTextColor={colors.faint}
          returnKeyType="search"
          className="min-w-0 flex-1 text-[16px] text-ink"
        />
        {chains.isFetching ? <ActivityIndicator color={colors.muted} /> : null}
        {query && !chains.isFetching ? (
          <Pressable accessibilityRole="button" accessibilityLabel="Clear the search" hitSlop={8} onPress={() => setQuery('')}>
            <X size={18} color={colors.muted} />
          </Pressable>
        ) : null}
      </View>
      <ScrollView className="mt-3 flex-1" keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        <Text className="px-1 text-[14px] leading-5 text-muted">
          See what fits what&apos;s left of your day on a chain&apos;s menu, with the restaurant&apos;s own numbers. For any other
          restaurant, scan its menu in Menu mode.
        </Text>
        {recent.length > 0 ? (
          <>
            <Text className="mt-5 px-1 text-[13px] font-semibold uppercase tracking-wider text-muted">Your menus</Text>
            {recent.map((scan, index) => (
              <Pressable
                key={scan.id}
                accessibilityRole="button"
                onPress={() => router.push({ pathname: '/menu/[id]', params: { id: scan.id } })}
                className={cn('min-h-[56px] flex-row items-center gap-3 py-2.5 active:opacity-60', index > 0 && 'border-t border-line')}>
                <View className="h-10 w-10 items-center justify-center rounded-xl bg-surface">
                  <FoodPicture picture="takeout" size={26} />
                </View>
                <View className="flex-1">
                  <Text numberOfLines={1} className="text-[15px] font-semibold text-ink">
                    {scan.restaurant ?? 'Menu photo'}
                  </Text>
                  <Text className="text-[13px] text-muted">
                    {formatDay(toIsoDate(new Date(scan.createdAt)))}
                    {scan.status === 'reading' ? ' · reading…' : ` · ${scan.dishes === 1 ? '1 dish' : `${scan.dishes} dishes`}`}
                  </Text>
                </View>
                <ChevronRight size={18} color={colors.faint} />
              </Pressable>
            ))}
          </>
        ) : null}
        <Text className="mt-5 px-1 text-[13px] font-semibold uppercase tracking-wider text-muted">Restaurants</Text>
        {chains.isError && !chains.data ? (
          <Text className="px-1 pt-2 text-[14px] leading-5 text-muted">{chains.error.message}</Text>
        ) : list.length === 0 && !chains.isFetching ? (
          <Text className="px-1 pt-2 text-[14px] leading-5 text-muted">
            {query.trim() ? "That restaurant isn't in Weight Class yet. Scan its menu in Menu mode instead." : 'No restaurants yet.'}
          </Text>
        ) : (
          list.map((chain, index) => (
            <Pressable
              key={chain.slug}
              accessibilityRole="button"
              accessibilityLabel={`${chain.name}, ${chain.items} items`}
              onPress={() => router.push({ pathname: '/restaurant/[slug]', params: { slug: chain.slug } })}
              className={cn('min-h-[52px] flex-row items-center gap-3 py-3 active:opacity-60', index > 0 && 'border-t border-line')}>
              <Text numberOfLines={1} className="flex-1 text-[16px] text-ink">
                {chain.name}
              </Text>
              {tried && tried !== `chain:${chain.slug}` ? <Crown size={15} color={colors.muted} strokeWidth={1.8} /> : null}
              <Text className="text-[13px] text-muted">{chain.items} items</Text>
              <ChevronRight size={18} color={colors.faint} />
            </Pressable>
          ))
        )}
        <View className="h-6" />
      </ScrollView>
    </>
  );
}
