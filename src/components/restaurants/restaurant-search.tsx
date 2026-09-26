import { Search, Store } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useRestaurantSearch } from '@/lib/queries';
import type { RestaurantItem } from '@/shared/restaurants';

import { FatSecretCredit } from './fatsecret-credit';

type RestaurantSearchProps = {
  onOpenChain: (chain: string) => void;
  onPickItem: (item: RestaurantItem) => void;
};

/** Restaurants tab of Search foods: chains that match (open their menu) and menu items. */
export function RestaurantSearch({ onOpenChain, onPickItem }: RestaurantSearchProps) {
  const [query, setQuery] = useState('');
  const search = useRestaurantSearch(query);
  const calm = useCalmMode();
  const typed = query.trim().length >= 2;
  const chains = search.data?.chains ?? [];
  const items = search.data?.items ?? [];

  return (
    <>
      <View className="mt-3 h-12 flex-row items-center gap-2 rounded-field bg-surface px-4">
        <Search size={18} color={colors.muted} />
        <TextInput
          accessibilityLabel="Search restaurants"
          value={query}
          onChangeText={setQuery}
          autoFocus
          autoCorrect={false}
          placeholder="e.g. Chipotle, Big Mac"
          placeholderTextColor={colors.faint}
          returnKeyType="search"
          className="min-w-0 flex-1 text-[16px] text-ink"
        />
        {search.isFetching ? <ActivityIndicator color={colors.muted} /> : null}
      </View>
      <ScrollView className="mt-3 flex-1" keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        {!typed ? (
          <Text className="px-1 text-[14px] leading-5 text-muted">
            Look up a US restaurant chain or a menu item, then log it or plan your meal before you go.
          </Text>
        ) : search.isError && !search.data ? (
          <Text className="px-1 text-[14px] leading-5 text-muted">{search.error.message}</Text>
        ) : chains.length === 0 && items.length === 0 && !search.isFetching ? (
          <Text className="px-1 text-[14px] leading-5 text-muted">No restaurants or menu items found. Try the name of the chain.</Text>
        ) : (
          <>
            {chains.length > 0 ? (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} keyboardShouldPersistTaps="handled" contentContainerClassName="gap-2 pb-2">
                {chains.map((chain) => (
                  <Pressable
                    key={chain}
                    accessibilityRole="button"
                    accessibilityLabel={`Open the ${chain} menu`}
                    onPress={() => onOpenChain(chain)}
                    className="h-10 flex-row items-center gap-1.5 rounded-full border border-line bg-canvas px-4 active:opacity-70">
                    <Store size={15} color={colors.ink} />
                    <Text className="text-[15px] font-medium text-ink">{chain}</Text>
                  </Pressable>
                ))}
              </ScrollView>
            ) : null}
            {items.map((item) => (
              <Pressable
                key={item.id}
                accessibilityRole="button"
                accessibilityLabel={calm ? `${item.name}, ${item.chain}` : `${item.name}, ${item.chain}, ${item.serving.calories} calories`}
                onPress={() => onPickItem(item)}
                className="flex-row items-center gap-3 border-b border-line py-3 active:opacity-60">
                <View className="flex-1">
                  <Text numberOfLines={2} className="text-[15px] leading-5 text-ink">
                    {item.name}
                  </Text>
                  <Text numberOfLines={1} className="mt-0.5 text-[13px] text-muted">
                    {item.chain} · {item.serving.description}
                  </Text>
                </View>
                {calm ? null : <Text className="text-[14px] text-muted">{item.serving.calories} kcal</Text>}
              </Pressable>
            ))}
          </>
        )}
        {typed ? <FatSecretCredit terms className="py-4" /> : null}
      </ScrollView>
    </>
  );
}
