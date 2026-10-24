import { router } from 'expo-router';
import { Crown, Info, Search, X } from 'lucide-react-native';
import { useMemo, useState, type ReactElement } from 'react';
import { Pressable, SectionList, Text, TextInput, View } from 'react-native';

import { SourcesLink } from '@/components/sources';
import { colors } from '@/constants/colors';
import type { MenuList, MenuRow } from '@/shared/menus';

import { DishRow } from './dish-row';

type Section = { key: 'fits' | 'others' | 'hidden'; title: string | null; note: string | null; data: MenuRow[] };

type MenuListViewProps = {
  list: MenuList;
  calm: boolean;
  /** Above everything: the back button and the restaurant's name. */
  header: ReactElement;
  /** Under the list: where the numbers come from (the chain's citation, or how estimates work). */
  footer: ReactElement;
  /** Payments on and no Premium: say this list is the free try. */
  showFreeTry: boolean;
  /** A scanned menu: its fits are Likely fits, in menu order (an estimate can't tell which dish fits best). */
  estimates?: boolean;
  onPick: (row: MenuRow) => void;
  bottomSpace: number;
};

const matches = (row: MenuRow, words: string[]) => {
  const text = `${row.name} ${row.section ?? ''} ${row.description ?? ''}`.toLowerCase();
  return words.every((word) => text.includes(word));
};

/** "About 1,350 kcal and 95 g protein left today", then this meal's share of it. */
function LeftToday({ list, estimates }: { list: MenuList; estimates: boolean }) {
  const { left, aim } = list;
  return (
    <View className="rounded-card bg-surface p-4">
      <Text className="text-[17px] font-bold leading-6 tracking-tight text-ink">
        About {left.calories.toLocaleString()} kcal{left.proteinG > 0 ? ` and ${left.proteinG} g protein` : ''} left today
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">
        For this meal, about {aim.calories.toLocaleString()} kcal{aim.proteinG > 0 ? ` and ${aim.proteinG} g protein` : ''}.{' '}
        {estimates
          ? 'Likely fits leave room for your other meals even at the top of their range, and come in menu order.'
          : 'The dishes closest to that come first.'}
      </Text>
    </View>
  );
}

/**
 * What to order: a menu ranked for what's left of the person's day. "Fits well" (up to five, a group
 * when estimates are too close to call), then everything else; dishes over what's left are listed
 * last, never hidden. A scanned menu's are "Likely fits", in menu order. Once the day's budget is spent
 * nothing is ranked (WHAT-TO-ORDER.md §5).
 */
export function MenuListView({ list, calm, header, footer, showFreeTry, estimates = false, onPick, bottomSpace }: MenuListViewProps) {
  const [query, setQuery] = useState('');
  const [showHidden, setShowHidden] = useState(false);
  const spent = list.state === 'nothing_fits';

  const sections = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    const keep = (rows: MenuRow[]) => (words.length ? rows.filter((row) => matches(row, words)) : rows);
    const all: Section[] = [
      {
        key: 'fits',
        title: estimates ? 'Likely fits' : 'Fits well',
        note: estimates
          ? "In menu order: an estimate can't tell which fits best."
          : list.closeCall && !calm
            ? 'These are close: any of them fits about as well.'
            : null,
        data: keep(list.fitsWell),
      },
      { key: 'others', title: spent ? null : 'Everything else', note: null, data: keep(list.others) },
      { key: 'hidden', title: 'Foods you skip', note: null, data: showHidden ? keep(list.hidden) : [] },
    ];
    return all.filter((section) => section.data.length > 0);
  }, [list, query, showHidden, spent, calm, estimates]);

  const top = (
    <View className="gap-3 pb-2">
      {header}
      {showFreeTry && list.freeTry ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => router.push('/premium')}
          className="flex-row items-center gap-3 rounded-card border border-line p-4 active:opacity-70">
          <Crown size={18} color={colors.ink} strokeWidth={1.8} />
          <Text className="flex-1 text-[14px] leading-5 text-ink">
            Your free try of What to order. More menus come with Weight Class Premium.
          </Text>
        </Pressable>
      ) : null}
      {spent ? (
        <View className="rounded-card bg-surface p-4">
          <Text className="text-[16px] leading-[22px] text-ink">Nothing here fits what&apos;s left today; these are the lighter dishes.</Text>
        </View>
      ) : calm ? (
        <View className="rounded-card bg-surface p-4">
          <Text className="text-[16px] leading-[22px] text-ink">
            {estimates ? "Likely fits for what's left of your day, in menu order." : "Ranked for what's left of your day."}
          </Text>
        </View>
      ) : (
        <LeftToday list={list} estimates={estimates} />
      )}
      <View className="h-12 flex-row items-center gap-2 rounded-field bg-surface px-4">
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
        {query ? (
          <Pressable accessibilityRole="button" accessibilityLabel="Clear the search" hitSlop={8} onPress={() => setQuery('')}>
            <X size={18} color={colors.muted} />
          </Pressable>
        ) : null}
      </View>
      {list.hiddenCount > 0 ? (
        <View className="flex-row items-start gap-2 px-1">
          <Text className="flex-1 text-[13px] leading-[18px] text-muted">
            {list.hiddenCount === 1 ? '1 dish hidden' : `${list.hiddenCount} dishes hidden`}: foods you skip. This can&apos;t spot hidden
            ingredients.
          </Text>
          <Pressable accessibilityRole="button" hitSlop={8} onPress={() => setShowHidden((shown) => !shown)}>
            <Text className="text-[13px] font-semibold text-ink underline">{showHidden ? 'Hide' : 'Show'}</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );

  const bottom = (
    <View className="gap-3 pt-4">
      <View className="flex-row items-start gap-2 rounded-2xl bg-surface p-3.5">
        <Info size={16} color={colors.ink} strokeWidth={1.8} style={{ marginTop: 2 }} />
        <Text className="flex-1 text-[13px] leading-[18px] text-ink">
          Tell staff about allergies: Weight Class can&apos;t know what&apos;s in a dish.
        </Text>
      </View>
      {footer}
      <SourcesLink topic="restaurants" label="How What to order works" />
    </View>
  );

  return (
    <SectionList
      sections={sections}
      keyExtractor={(row) => row.key}
      stickySectionHeadersEnabled={false}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      // The bottom space is measured (safe area): one style for both paddings.
      contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: bottomSpace + 16 }}
      ListHeaderComponent={top}
      ListFooterComponent={bottom}
      ListEmptyComponent={
        <Text className="px-1 pt-3 text-[14px] leading-5 text-muted">
          {query ? 'Nothing on the menu matches.' : 'No dishes to show.'}
        </Text>
      }
      renderSectionHeader={({ section }) =>
        section.title ? (
          <View className="pt-4">
            <Text accessibilityRole="header" className="text-[13px] font-semibold uppercase tracking-wider text-muted">
              {section.title}
            </Text>
            {section.note ? <Text className="mt-1 text-[13px] leading-[18px] text-muted">{section.note}</Text> : null}
          </View>
        ) : null
      }
      renderItem={({ item, index }) => <DishRow row={item} calm={calm} first={index === 0} onPress={() => onPick(item)} />}
    />
  );
}
