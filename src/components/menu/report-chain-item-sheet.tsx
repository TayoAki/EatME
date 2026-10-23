import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useReportChainItem } from '@/lib/queries';
import { CHAIN_ITEM_REPORT_LABELS, CHAIN_ITEM_REPORT_REASONS, type ChainItemReportReason } from '@/shared/menus';

type ReportChainItemSheetProps = {
  itemId: string;
  name: string;
  chain: string;
  onClose: () => void;
};

/** "Report a wrong item": a person checks it against the chain's own guide (one report per item). */
export function ReportChainItemSheet({ itemId, name, chain, onClose }: ReportChainItemSheetProps) {
  const report = useReportChainItem(itemId);
  const [reason, setReason] = useState<ChainItemReportReason | null>(null);
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  const send = () => {
    if (!reason) return;
    report.mutate(
      { reason, note: note.trim() || undefined },
      {
        onSuccess: () => {
          haptics.success();
          setSent(true);
        },
        onError: (error) => notify("We couldn't send your report", error.message),
      },
    );
  };

  return (
    <BottomSheet visible onClose={onClose}>
      {sent ? (
        <>
          <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
            Thanks for telling us
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Weight Class checks {name} against {chain}&apos;s nutrition information again. Meals you already logged stay as they
            are.
          </Text>
          <Button title="Done" className="mt-5" onPress={onClose} />
        </>
      ) : (
        <>
          <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
            Report a wrong item
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">{name}</Text>
          <View accessibilityRole="radiogroup" className="mt-4 flex-row flex-wrap gap-2">
            {CHAIN_ITEM_REPORT_REASONS.map((value) => (
              <Chip key={value} label={CHAIN_ITEM_REPORT_LABELS[value]} selected={reason === value} onPress={() => setReason(value)} />
            ))}
          </View>
          <TextInput
            accessibilityLabel="What's wrong (optional)"
            value={note}
            onChangeText={setNote}
            maxLength={300}
            multiline
            placeholder="What's wrong? (optional)"
            placeholderTextColor={colors.faint}
            className="mt-4 min-h-[84px] rounded-field bg-surface px-4 py-3 text-[16px] leading-[22px] text-ink"
            style={{ textAlignVertical: 'top' }}
          />
          <Button title="Send report" className="mt-5" disabled={!reason} loading={report.isPending} onPress={send} />
        </>
      )}
    </BottomSheet>
  );
}
