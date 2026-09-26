import { ArrowLeft, Check, Plus, Search, X } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useMeals, useProfile, useRestaurantMenu, useSaveRestaurantPlate } from '@/lib/queries';
import { todayIso } from '@/lib/time';
import { countLabel, MAX_PLATE_ITEMS, type PlateLine, type RestaurantItem } from '@/shared/restaurants';

import { FatSecretCredit } from './fatsecret-credit';
import { RestaurantItemSheet } from './restaurant-item-sheet';

type RestaurantMenuViewProps = {
  chain: string;
  bottomSpace: number;
  onBack: () => void;
  onLog: (lines: PlateLine[]) => void;
};

const lineCalories = (line: PlateLine) => line.serving.calories * line.count;

/**
 * A chain's menu: search within it and build a plate. The plate bar shows the total against
 * what's left today (the person's own goal; EatME never ranks or recommends items). "Log it" logs
 * the plate, "Save for later" keeps it in Saved meals.
 */
export function RestaurantMenuView({ chain, bottomSpace, onBack, onLog }: RestaurantMenuViewProps) {
  const insets = useSafeAreaInsets();
  const calm = useCalmMode();
  const profile = useProfile();
  const today = useMeals(todayIso());
  const [query, setQuery] = useState('');
  const menu = useRestaurantMenu(chain, query);
  const items = useMemo(() => {
    const seen = new Set<string>();
    return (menu.data?.pages ?? []).flatMap((page) => page.items).filter((item) => !seen.has(item.id) && !!seen.add(item.id));
  }, [menu.data]);
  const name = menu.data?.pages[0]?.chain ?? chain;
  const [plate, setPlate] = useState<PlateLine[]>([]);
  const [picked, setPicked] = useState<{ item: RestaurantItem; index?: number } | null>(null);
  const [reviewing, setReviewing] = useState(false);
  const save = useSaveRestaurantPlate();

  const total = Math.round(plate.reduce((sum, line) => sum + lineCalories(line), 0));
  const eaten = (today.data?.meals ?? []).filter((meal) => meal.status === 'completed').reduce((sum, meal) => sum + (meal.calories ?? 0), 0);
  const left = profile?.dailyCalories ? profile.dailyCalories - eaten - total : null;
  const countOf = (id: string) => plate.filter((line) => line.itemId === id).reduce((sum, line) => sum + line.count, 0);
  const full = plate.length >= MAX_PLATE_ITEMS;

  const add = (line: PlateLine, index?: number) => {
    haptics.selection();
    setPlate((lines) => (index === undefined ? [...lines, line] : lines.map((l, i) => (i === index ? line : l))));
    setPicked(null);
  };

  const saveForLater = () =>
    save.mutate(plate, {
      onSuccess: () => {
        haptics.success();
        setPlate([]);
        setReviewing(false);
        notify('Saved for later', 'Find it in Saved meals on the Scan tab and log it when your food arrives.');
      },
      onError: (error) => notify("We couldn't save it", error.message),
    });

  return (
    <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top }}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to search" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <View className="px-5">
        <Text accessibilityRole="header" numberOfLines={1} className="text-[32px] font-bold tracking-tight text-ink">
          {name}
        </Text>
        <FatSecretCredit align="start" className="mt-0.5" />
        <View className="mt-3 h-12 flex-row items-center gap-2 rounded-field bg-surface px-4">
          <Search size={18} color={colors.muted} />
          <TextInput
            accessibilityLabel="Search the menu"
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
            placeholder="Search the menu"
            placeholderTextColor={colors.faint}
            returnKeyType="search"
            className="min-w-0 flex-1 text-[16px] text-ink"
          />
          {menu.isFetching ? <ActivityIndicator color={colors.muted} /> : null}
        </View>
      </View>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        className="mt-2 flex-1"
        contentContainerClassName="px-5"
        contentContainerStyle={{ paddingBottom: bottomSpace + (plate.length ? 150 : 16) }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (menu.hasNextPage && !menu.isFetchingNextPage) void menu.fetchNextPage();
        }}
        ListEmptyComponent={
          menu.isPending ? (
            <ActivityIndicator className="mt-8" color={colors.muted} />
          ) : (
            <Text className="mt-3 px-1 text-[14px] leading-5 text-muted">
              {menu.isError ? menu.error.message : query.trim() ? 'Nothing on the menu matches.' : 'This menu is empty for now.'}
            </Text>
          )
        }
        ListFooterComponent={menu.isFetchingNextPage ? <ActivityIndicator className="my-4" color={colors.muted} /> : null}
        renderItem={({ item }) => {
          const onPlate = countOf(item.id);
          // The item and its + are siblings: a button inside a button is invalid on the web.
          return (
            <View className="flex-row items-center gap-3 border-b border-line">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={calm ? `${item.name}, ${item.serving.description}` : `${item.name}, ${item.serving.description}, ${item.serving.calories} calories`}
                onPress={() => setPicked({ item })}
                className="flex-1 py-3 active:opacity-60">
                <Text numberOfLines={2} className="text-[15px] leading-5 text-ink">
                  {item.name}
                </Text>
                <Text numberOfLines={1} className="mt-0.5 text-[13px] text-muted">
                  {calm ? item.serving.description : `${item.serving.description} · ${item.serving.calories} kcal`}
                </Text>
              </Pressable>
              {onPlate > 0 ? (
                <View className="h-8 flex-row items-center gap-1 rounded-full bg-ink px-3">
                  <Check size={14} color={colors.canvas} />
                  <Text className="text-[13px] font-semibold text-white">{countLabel(onPlate)}</Text>
                </View>
              ) : (
                <IconButton
                  accessibilityLabel={`Add ${item.name} to the plate`}
                  size={34}
                  icon={<Plus size={17} color={full ? colors.faint : colors.ink} />}
                  disabled={full}
                  onPress={() => add({ itemId: item.id, name: item.name, chain: item.chain, serving: item.serving, count: 1 })}
                />
              )}
            </View>
          );
        }}
      />

      {plate.length > 0 ? (
        <View className="absolute inset-x-4 rounded-card bg-ink p-4" style={{ bottom: bottomSpace + 8 }}>
          <Pressable accessibilityRole="button" accessibilityLabel="Review the plate" onPress={() => setReviewing(true)}>
            <Text className="text-[17px] font-bold text-white">
              {plate.length} {plate.length === 1 ? 'item' : 'items'}
              {calm ? '' : ` · ${total.toLocaleString()} kcal`}
            </Text>
            {!calm && left !== null ? (
              <Text className="mt-0.5 text-[13px] text-white/70">
                {left >= 0 ? `${left.toLocaleString()} kcal left today after this` : `${(-left).toLocaleString()} kcal over today's goal after this`}
              </Text>
            ) : null}
          </Pressable>
          <View className="mt-3 flex-row gap-2">
            <Pressable
              accessibilityRole="button"
              onPress={() => onLog(plate)}
              className="h-11 flex-1 items-center justify-center rounded-full bg-canvas active:opacity-80">
              <Text className="text-[15px] font-semibold text-ink">Log it</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              disabled={save.isPending}
              onPress={saveForLater}
              className="h-11 flex-1 items-center justify-center rounded-full border border-white/40 active:opacity-80">
              {save.isPending ? <ActivityIndicator color={colors.canvas} /> : <Text className="text-[15px] font-semibold text-white">Save for later</Text>}
            </Pressable>
          </View>
        </View>
      ) : null}

      {picked ? (
        <RestaurantItemSheet
          key={`${picked.item.id}:${picked.index ?? 'new'}`}
          item={picked.item}
          initial={picked.index !== undefined ? { servingId: plate[picked.index].serving.id, count: plate[picked.index].count } : undefined}
          actionLabel={picked.index !== undefined ? 'Update the plate' : full ? 'The plate is full' : 'Add to plate'}
          onAction={(line) => (picked.index === undefined && full ? setPicked(null) : add(line, picked.index))}
          onClose={() => setPicked(null)}
        />
      ) : null}

      <BottomSheet visible={reviewing && plate.length > 0} onClose={() => setReviewing(false)}>
        <Text className="text-[22px] font-bold tracking-tight text-ink">Your plate</Text>
        <View className="mt-3 overflow-hidden rounded-card border border-line">
          {plate.map((line, index) => (
            <View key={`${line.itemId}:${index}`} className={`min-h-[56px] flex-row items-center gap-3 px-4 py-2.5 ${index > 0 ? 'border-t border-line' : ''}`}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Change ${line.name}`}
                className="flex-1 active:opacity-60"
                onPress={() => {
                  setReviewing(false);
                  setPicked({ item: { id: line.itemId, name: line.name, chain: line.chain, serving: line.serving }, index });
                }}>
                <Text numberOfLines={1} className="text-[15px] text-ink">
                  {line.name}
                </Text>
                <Text numberOfLines={1} className="text-[12px] text-muted">
                  {line.count === 1 ? line.serving.description : `${countLabel(line.count)} × ${line.serving.description}`}
                  {calm ? '' : ` · ${Math.round(lineCalories(line))} kcal`}
                </Text>
              </Pressable>
              <IconButton
                accessibilityLabel={`Remove ${line.name}`}
                size={32}
                icon={<X size={16} color={colors.ink} />}
                onPress={() => setPlate((lines) => lines.filter((_, i) => i !== index))}
              />
            </View>
          ))}
        </View>
        <Button title="Log it" className="mt-5" onPress={() => onLog(plate)} />
        <Button title="Save for later" variant="secondary" className="mt-2" loading={save.isPending} onPress={saveForLater} />
        <FatSecretCredit className="mt-3" />
      </BottomSheet>
    </View>
  );
}
