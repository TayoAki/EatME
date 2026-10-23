import { ExternalLink, Store } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { openLink } from '@/lib/links';
import type { MealItem } from '@/shared/meals';
import type { ChainCitation } from '@/shared/menus';

import { checkedText } from './format';
import { ReportChainItemSheet } from './report-chain-item-sheet';

/**
 * A meal ordered with What to order keeps where its numbers came from, as they were when it was
 * logged (Apple 1.4.1): the chain's guide and the day it was checked, or the estimate's range.
 */
export function MenuMealSource({ items, hideNumbers }: { items: readonly MealItem[]; hideNumbers: boolean }) {
  const [reporting, setReporting] = useState<{ id: string; name: string; chain: string } | null>(null);
  const refs = items.flatMap((item) => (item.menu ? [item.menu] : []));
  if (refs.length === 0) return null;

  const citations = new Map<string, ChainCitation>();
  for (const ref of refs) if (ref.citation) citations.set(`${ref.citation.chain}|${ref.citation.sourceUrl}`, ref.citation);
  const chains = [...new Set([...citations.values()].map((c) => c.chain))];
  const reportable = refs.flatMap((ref) => (ref.from === 'chain' && ref.chainItemId && ref.citation ? [{ id: ref.chainItemId, name: ref.dish, chain: ref.citation.chain }] : []));
  const estimate = refs.find((ref) => ref.from === 'scan');

  return (
    <View className="gap-2 rounded-card bg-surface p-4">
      <View className="flex-row gap-3">
        <Store size={18} color={colors.muted} style={{ marginTop: 2 }} />
        <Text className="flex-1 text-[15px] leading-[21px] text-ink">
          {estimate
            ? `Ordered from a menu photo${estimate.restaurant ? ` at ${estimate.restaurant}` : ''}: an estimate${
                estimate.range && !hideNumbers ? `, about ${estimate.range.low.toLocaleString()}–${estimate.range.high.toLocaleString()} kcal when you logged it` : ''
              }. Change the foods below if you know better.`
            : `Ordered from the ${chains.join(' and ')} menu, with the restaurant's own numbers.`}
        </Text>
      </View>
      {[...citations.values()].map((citation) => (
        <View key={citation.sourceUrl} className="ml-[30px]">
          <Text className="text-[13px] leading-[18px] text-muted">
            Source: {citation.chain} nutrition information · checked {checkedText(citation.checkedOn)}
          </Text>
          <Pressable
            accessibilityRole="link"
            accessibilityHint="Opens the chain's own nutrition guide"
            onPress={() => void openLink(citation.sourceUrl)}
            className="flex-row items-center gap-1.5 self-start py-1 active:opacity-60">
            <Text className="text-[14px] font-semibold text-ink underline">View {citation.chain}&apos;s guide</Text>
            <ExternalLink size={14} color={colors.ink} />
          </Pressable>
        </View>
      ))}
      {chains.length > 0 ? (
        <Text className="ml-[30px] text-[13px] leading-[18px] text-muted">
          Weight Class isn&apos;t affiliated with {chains.join(' or ')}. Menus change; check with the restaurant.
        </Text>
      ) : null}
      {reportable.map((item) => (
        <Pressable
          key={item.id}
          accessibilityRole="button"
          onPress={() => setReporting(item)}
          className="ml-[30px] self-start py-1 active:opacity-60">
          <Text className="text-[14px] font-semibold text-ink underline">
            {reportable.length > 1 ? `Report a wrong item: ${item.name}` : 'Report a wrong item'}
          </Text>
        </Pressable>
      ))}
      {reporting ? (
        <ReportChainItemSheet itemId={reporting.id} name={reporting.name} chain={reporting.chain} onClose={() => setReporting(null)} />
      ) : null}
    </View>
  );
}
