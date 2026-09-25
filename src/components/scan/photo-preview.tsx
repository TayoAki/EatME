import { Image } from 'expo-image';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { MAX_MEAL_NOTE_LENGTH, type PhotoMode } from '@/shared/meals';

import type { Photo } from './camera-capture';

type PhotoPreviewProps = {
  photo: Photo;
  mode: PhotoMode;
  onRetake: () => void;
  /** `note`: what the photo can't show (meals only). */
  onAnalyze: (note: string) => void;
  bottomSpace: number;
};

export function PhotoPreview({ photo, mode, onRetake, onAnalyze, bottomSpace }: PhotoPreviewProps) {
  const [note, setNote] = useState('');
  return (
    <KeyboardAvoidingView className="flex-1 bg-black" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Image source={{ uri: photo.uri }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <View className="flex-1" />
      <View className="rounded-t-[28px] bg-canvas px-5 pt-5" style={{ paddingBottom: bottomSpace }}>
        {mode === 'meal' ? (
          <View className="mb-4">
            <TextInput
              accessibilityLabel="Add a note"
              value={note}
              onChangeText={setNote}
              maxLength={MAX_MEAL_NOTE_LENGTH}
              placeholder="Add a note: cooked in butter, ate half…"
              placeholderTextColor={colors.faint}
              returnKeyType="done"
              className="h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
            />
            <Text className="ml-1 mt-1.5 text-[13px] text-muted">Optional. Helps with oil, sauces and how much you ate.</Text>
          </View>
        ) : (
          <Text className="mb-4 text-center text-[14px] leading-5 text-muted">
            Make sure the numbers are sharp. You can set how many servings you had next.
          </Text>
        )}
        <View className="flex-row gap-3">
          <Button title="Retake" variant="secondary" className="flex-1" onPress={onRetake} />
          <Button
            title={mode === 'label' ? 'Read the label' : 'Analyze the food'}
            className="flex-[1.6]"
            onPress={() => onAnalyze(note.trim())}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
