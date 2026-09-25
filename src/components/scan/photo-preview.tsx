import { Image } from 'expo-image';
import { Crown, Plus, X } from 'lucide-react-native';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { MAX_MEAL_NOTE_LENGTH, MAX_MEAL_PHOTOS, type PhotoMode } from '@/shared/meals';

import type { Photo } from './camera-capture';

type PhotoPreviewProps = {
  /** The photos of this meal so far (steer the AI: up to 3 angles of one meal). */
  photos: Photo[];
  mode: PhotoMode;
  onRetake: () => void;
  /** Take another angle of the same meal (meals only, when the server offers it). */
  onAddPhoto?: () => void;
  /** Adding angles is part of Premium (payments on, free account). */
  addNeedsPremium?: boolean;
  onRemovePhoto: (index: number) => void;
  /** `note`: what the photo can't show (meals only). */
  onAnalyze: (note: string) => void;
  bottomSpace: number;
};

const THUMB = 58;

export function PhotoPreview({
  photos,
  mode,
  onRetake,
  onAddPhoto,
  addNeedsPremium = false,
  onRemovePhoto,
  onAnalyze,
  bottomSpace,
}: PhotoPreviewProps) {
  const [note, setNote] = useState('');
  const shown = photos[photos.length - 1];
  const several = photos.length > 1 || !!onAddPhoto;
  return (
    <KeyboardAvoidingView className="flex-1 bg-black" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Image source={{ uri: shown.uri }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <View className="flex-1" />
      <View className="rounded-t-[28px] bg-canvas px-5 pt-5" style={{ paddingBottom: bottomSpace }}>
        {mode === 'meal' && several ? (
          <View className="mb-4">
            <View className="flex-row items-center gap-2.5">
              {photos.map((photo, index) => (
                <View key={photo.uri} style={{ width: THUMB, height: THUMB }}>
                  <Image
                    source={{ uri: photo.uri }}
                    style={{ width: THUMB, height: THUMB, borderRadius: 14 }}
                    contentFit="cover"
                    accessibilityLabel={`Photo ${index + 1}`}
                  />
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Remove photo ${index + 1}`}
                    hitSlop={8}
                    onPress={() => onRemovePhoto(index)}
                    className="absolute -right-1.5 -top-1.5 h-6 w-6 items-center justify-center rounded-full bg-ink">
                    <X size={13} color={colors.canvas} strokeWidth={3} />
                  </Pressable>
                </View>
              ))}
              {onAddPhoto && photos.length < MAX_MEAL_PHOTOS ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel={addNeedsPremium ? 'Add another angle (Premium)' : 'Add another angle'}
                  onPress={onAddPhoto}
                  style={{ width: THUMB, height: THUMB }}
                  className="items-center justify-center rounded-[14px] border border-dashed border-line bg-surface active:opacity-70">
                  {addNeedsPremium ? <Crown size={18} color={colors.ink} /> : <Plus size={20} color={colors.ink} />}
                </Pressable>
              ) : null}
              <Text className="flex-1 text-[13px] leading-[18px] text-muted">
                {photos.length < MAX_MEAL_PHOTOS
                  ? 'Another angle helps with hidden food and portions. Still one scan.'
                  : 'Three angles of one meal.'}
              </Text>
            </View>
          </View>
        ) : null}
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
