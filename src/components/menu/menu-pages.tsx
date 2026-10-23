import { Image } from 'expo-image';
import { Plus, X } from 'lucide-react-native';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import type { Photo } from '@/components/scan/camera-capture';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { MAX_MENU_PHOTOS } from '@/shared/menus';

type MenuPagesProps = {
  /** The menu's pages so far (long menus: up to three). */
  photos: Photo[];
  restaurant: string;
  onRestaurantChange: (name: string) => void;
  onAddPage: () => void;
  onRemovePage: (index: number) => void;
  onRetake: () => void;
  onRead: () => void;
  /** Sending the photos (when the phone can't read them). */
  sending: boolean;
  /** iPhone: the phone reads the text, so only the text is sent. */
  readsOnDevice: boolean;
  bottomSpace: number;
};

const THUMB = 58;

/** Menu mode: the pages taken so far, the restaurant's name (optional), then read the menu. */
export function MenuPages({
  photos,
  restaurant,
  onRestaurantChange,
  onAddPage,
  onRemovePage,
  onRetake,
  onRead,
  sending,
  readsOnDevice,
  bottomSpace,
}: MenuPagesProps) {
  const shown = photos[photos.length - 1];
  return (
    <KeyboardAvoidingView className="flex-1 bg-black" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Image source={{ uri: shown.uri }} style={StyleSheet.absoluteFill} contentFit="contain" />
      <View className="flex-1" />
      <View className="rounded-t-[28px] bg-canvas px-5 pt-5" style={{ paddingBottom: bottomSpace }}>
        <View className="mb-4 flex-row items-center gap-2.5">
          {photos.map((photo, index) => (
            <View key={photo.uri} style={{ width: THUMB, height: THUMB }}>
              <Image
                source={{ uri: photo.uri }}
                style={{ width: THUMB, height: THUMB, borderRadius: 14 }}
                contentFit="cover"
                accessibilityLabel={`Page ${index + 1}`}
              />
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Remove page ${index + 1}`}
                hitSlop={8}
                onPress={() => onRemovePage(index)}
                className="absolute -right-1.5 -top-1.5 h-6 w-6 items-center justify-center rounded-full bg-ink">
                <X size={13} color={colors.canvas} strokeWidth={3} />
              </Pressable>
            </View>
          ))}
          {photos.length < MAX_MENU_PHOTOS ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Add a page"
              onPress={onAddPage}
              style={{ width: THUMB, height: THUMB }}
              className="items-center justify-center rounded-[14px] border border-dashed border-line bg-surface active:opacity-70">
              <Plus size={20} color={colors.ink} />
            </Pressable>
          ) : null}
          <Text className="flex-1 text-[13px] leading-[18px] text-muted">
            {photos.length < MAX_MENU_PHOTOS ? 'A long menu? Add up to three pages. Still one scan.' : 'Three pages of one menu.'}
          </Text>
        </View>
        <TextInput
          accessibilityLabel="Restaurant (optional)"
          value={restaurant}
          onChangeText={onRestaurantChange}
          maxLength={80}
          placeholder="Restaurant (optional)"
          placeholderTextColor={colors.faint}
          returnKeyType="done"
          className="h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
        />
        <Text className="ml-1 mt-1.5 text-[13px] leading-[18px] text-muted">
          {readsOnDevice
            ? 'Your phone reads the menu, then you check the dishes. Only the text is sent.'
            : 'The photos are sent to read the menu, then deleted.'}
        </Text>
        <View className="mt-4 flex-row gap-3">
          <Button title="Retake" variant="secondary" className="flex-1" disabled={sending} onPress={onRetake} />
          <Button title="Read the menu" className="flex-[1.6]" loading={sending} onPress={onRead} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
