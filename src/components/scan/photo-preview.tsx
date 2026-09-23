import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';

import type { Photo } from './camera-capture';

type PhotoPreviewProps = {
  photo: Photo;
  onRetake: () => void;
  onAnalyze: () => void;
  bottomSpace: number;
};

export function PhotoPreview({ photo, onRetake, onAnalyze, bottomSpace }: PhotoPreviewProps) {
  return (
    <View className="flex-1 bg-black">
      <Image source={{ uri: photo.uri }} style={StyleSheet.absoluteFill} contentFit="cover" />
      <View className="flex-1" />
      <View className="rounded-t-[28px] bg-canvas px-5 pt-5" style={{ paddingBottom: bottomSpace }}>
        <View className="flex-row gap-3">
          <Button title="Retake" variant="secondary" className="flex-1" onPress={onRetake} />
          <Button title="Analyze the food" className="flex-[1.6]" onPress={onAnalyze} />
        </View>
      </View>
    </View>
  );
}
