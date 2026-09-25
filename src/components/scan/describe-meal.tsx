import { ArrowLeft, Mic } from 'lucide-react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { MAX_MEAL_DESCRIPTION_LENGTH } from '@/shared/meals';

const EXAMPLES = [
  '2 scrambled eggs, a slice of sourdough with butter, a flat white',
  'Chicken caesar salad, large bowl',
  'Greek yogurt with honey and a handful of walnuts',
];

type DescribeMealProps = {
  initialText?: string;
  onBack: () => void;
  onSubmit: (text: string) => void;
  bottomSpace: number;
};

/** Log a meal in words. Voice works through the keyboard's dictation button. */
export function DescribeMeal({ initialText = '', onBack, onSubmit, bottomSpace }: DescribeMealProps) {
  const insets = useSafeAreaInsets();
  const [text, setText] = useState(initialText);
  const ready = text.trim().length >= 3;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-canvas"
      style={{ paddingTop: insets.top }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the camera" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <ScrollView contentContainerClassName="px-5 pb-6" keyboardShouldPersistTaps="handled">
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Describe your meal
        </Text>
        <Text className="mt-1 text-[15px] leading-[21px] text-muted">
          Say what you ate and roughly how much. Amounts make the estimate better.
        </Text>

        <View className="mt-5 rounded-card bg-surface p-4">
          <TextInput
            accessibilityLabel="What did you eat?"
            value={text}
            onChangeText={setText}
            maxLength={MAX_MEAL_DESCRIPTION_LENGTH}
            multiline
            autoFocus
            placeholder="e.g. a bowl of spaghetti bolognese with parmesan and a glass of red wine"
            placeholderTextColor={colors.faint}
            textAlignVertical="top"
            className="min-h-[120px] text-[17px] leading-6 text-ink"
          />
          <View className="mt-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-1.5">
              <Mic size={14} color={colors.muted} />
              <Text className="text-[13px] text-muted">Tap the mic on your keyboard to dictate</Text>
            </View>
            <Text className="text-[13px] text-muted">
              {text.length}/{MAX_MEAL_DESCRIPTION_LENGTH}
            </Text>
          </View>
        </View>

        {!text ? (
          <View className="mt-5 gap-2">
            <Text className="text-[14px] font-semibold text-ink">For example</Text>
            {EXAMPLES.map((example) => (
              <Pressable
                key={example}
                accessibilityRole="button"
                accessibilityLabel={`Use example: ${example}`}
                onPress={() => setText(example)}
                className="rounded-2xl border border-line px-4 py-3 active:bg-surface">
                <Text className="text-[15px] leading-5 text-ink">{example}</Text>
              </Pressable>
            ))}
          </View>
        ) : null}
      </ScrollView>
      <View className="px-5 pt-3" style={{ paddingBottom: bottomSpace }}>
        <Button title="Estimate calories" disabled={!ready} onPress={() => onSubmit(text.trim())} />
      </View>
    </KeyboardAvoidingView>
  );
}
