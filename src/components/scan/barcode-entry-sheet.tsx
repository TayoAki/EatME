import { useState } from 'react';
import { Text, TextInput } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { barcodeCandidates } from '@/shared/barcodes';

type BarcodeEntrySheetProps = { visible: boolean; onClose: () => void; onSubmit: (code: string) => void };

/** Type the numbers under the bars when the camera can't read them. */
export function BarcodeEntrySheet({ visible, onClose, onSubmit }: BarcodeEntrySheetProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    if (!barcodeCandidates(code)) {
      setError(
        [8, 12, 13, 14].includes(code.length)
          ? "That number doesn't add up — check the digits, especially the last one."
          : 'Barcodes have 8, 12 or 13 digits — check that you typed them all.',
      );
      return;
    }
    onSubmit(code);
  };

  return (
    <BottomSheet visible={visible} onClose={onClose}>
      <Text className="text-[22px] font-bold tracking-tight text-ink">Type the barcode</Text>
      <Text className="mt-1 text-[15px] leading-[21px] text-muted">The numbers printed under the bars, 8 to 13 digits.</Text>
      <TextInput
        accessibilityLabel="Barcode number"
        value={code}
        onChangeText={(text) => {
          setCode(text.replace(/\D/g, '').slice(0, 14));
          setError(null);
        }}
        keyboardType="number-pad"
        autoFocus
        maxLength={14}
        placeholder="e.g. 3017620422003"
        placeholderTextColor={colors.faint}
        returnKeyType="search"
        onSubmitEditing={submit}
        className="mt-4 h-14 rounded-field bg-surface px-4 text-[22px] font-semibold tracking-wider text-ink"
      />
      {error ? <Text className="mt-2 text-[14px] text-danger">{error}</Text> : null}
      <Button title="Look it up" className="mt-4" disabled={code.length < 8} onPress={submit} />
    </BottomSheet>
  );
}
