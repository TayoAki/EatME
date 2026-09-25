import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useReportProduct } from '@/lib/queries';
import { PRODUCT_REPORT_LABELS, PRODUCT_REPORT_REASONS, type ProductReportReason } from '@/shared/products';

type ReportProductSheetProps = {
  code: string;
  visible: boolean;
  onClose: () => void;
  /** After reporting: read the numbers from the package, or pick a similar food. */
  onScanLabel: () => void;
  onSearch: () => void;
};

/** "Report a problem" with a barcode product, then a better way to log it right now. */
export function ReportProductSheet({ code, visible, onClose, onScanLabel, onSearch }: ReportProductSheetProps) {
  const report = useReportProduct(code);
  const [reason, setReason] = useState<ProductReportReason | null>(null);
  const [note, setNote] = useState('');
  const [sent, setSent] = useState(false);

  const close = () => {
    setReason(null);
    setNote('');
    setSent(false);
    onClose();
  };
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
    <BottomSheet visible={visible} onClose={close}>
      {sent ? (
        <>
          <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
            Thanks for telling us
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            EatME checks the product again. Meals you already logged stay as they are. To log it correctly now, read the
            numbers from the package or pick a similar food.
          </Text>
          <View className="mt-5 gap-2">
            <Button
              title="Scan the nutrition label"
              onPress={() => {
                close();
                onScanLabel();
              }}
            />
            <Button
              title="Search foods"
              variant="secondary"
              onPress={() => {
                close();
                onSearch();
              }}
            />
            <Button title="Done" variant="ghost" onPress={close} />
          </View>
        </>
      ) : (
        <>
          <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
            Report a problem
          </Text>
          <Text className="mt-0.5 text-[14px] leading-5 text-muted">What&apos;s wrong with this product?</Text>
          <View className="mt-4 flex-row flex-wrap gap-2">
            {PRODUCT_REPORT_REASONS.map((value) => (
              <Chip key={value} label={PRODUCT_REPORT_LABELS[value]} selected={reason === value} onPress={() => setReason(value)} />
            ))}
          </View>
          <TextInput
            accessibilityLabel="Note"
            value={note}
            onChangeText={(text) => setNote(text.slice(0, 300))}
            placeholder="Anything else? (optional)"
            placeholderTextColor={colors.faint}
            multiline
            className="mt-4 min-h-[88px] rounded-field border border-line px-4 py-3 text-[16px] leading-[22px] text-ink"
            style={{ textAlignVertical: 'top' }}
          />
          <Button title="Send report" className="mt-5" disabled={!reason} loading={report.isPending} onPress={send} />
        </>
      )}
    </BottomSheet>
  );
}
