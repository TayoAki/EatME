import { router } from 'expo-router';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { Bell, Camera, ChevronRight, Columns2, Image as ImageIcon, Lock, X } from 'lucide-react-native';
import { useMemo, useState } from 'react';
import { ActivityIndicator, Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ProgressCamera, type TakenPhoto } from '@/components/body/progress-camera';
import { DayChips } from '@/components/meal/day-chips';
import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useBody, useDeleteProgressPhoto, useUploadProgressPhoto, useWeights } from '@/lib/queries';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { useReminderStore } from '@/lib/reminder-store';
import { formatDay, fromIsoDate, todayIso } from '@/lib/time';
import {
  formatLength,
  MEASUREMENT_LABELS,
  MEASUREMENTS,
  PHOTO_POSE_LABELS,
  PHOTO_POSES,
  type BodyMeasurement,
  type PhotoPose,
  type ProgressPhoto,
} from '@/shared/body';
import type { UnitSystem } from '@/shared/onboarding';
import { formatWeight } from '@/shared/units';
import type { WeightEntry } from '@/shared/weight';

const POSE_OPTIONS = PHOTO_POSES.map((pose) => ({ label: PHOTO_POSE_LABELS[pose], value: pose }));
const WEEKDAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
const longDate = (iso: string) => fromIsoDate(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const dayDiff = (a: string, b: string) => Math.abs(fromIsoDate(a).getTime() - fromIsoDate(b).getTime()) / 86_400_000;

/** The entry closest to `date` (within 14 days). */
function nearest<T extends { date: string }>(entries: readonly T[], date: string) {
  let best: T | null = null;
  for (const entry of entries) if (dayDiff(entry.date, date) <= 14 && (!best || dayDiff(entry.date, date) < dayDiff(best.date, date))) best = entry;
  return best;
}

async function pickFromLibrary(): Promise<TakenPhoto | null> {
  const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ['images'], quality: 1, allowsEditing: false });
  if (result.canceled || !result.assets[0]) return null;
  const { uri, width, height } = result.assets[0];
  return { uri, width, height };
}

type AddPhotoSheetProps = { photos: ProgressPhoto[]; onClose: () => void };

/** Pick the pose and the day, then the camera (with last time's photo to line up with) or the library. */
function AddPhotoSheet({ photos, onClose }: AddPhotoSheetProps) {
  const upload = useUploadProgressPhoto();
  const [pose, setPose] = useState<PhotoPose>('front');
  const [date, setDate] = useState(todayIso());
  const [camera, setCamera] = useState(false);
  const replacing = photos.some((p) => p.date === date && p.pose === pose);
  // Line up with the latest photo in this pose from another day.
  const ghost = photos.find((p) => p.pose === pose && p.date !== date) ?? null;

  const save = (photo: TakenPhoto) => {
    setCamera(false);
    upload.mutate(
      { photo, date, pose },
      {
        onSuccess: () => {
          haptics.success();
          onClose();
        },
        onError: (error) => notify("We couldn't save your photo", error.message),
      },
    );
  };

  if (camera) return <ProgressCamera pose={pose} ghostUrl={ghost?.url ?? null} onPhoto={save} onClose={() => setCamera(false)} />;

  return (
    <BottomSheet visible onClose={onClose}>
      <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
        Progress photo
      </Text>
      <Text className="mt-1 text-[14px] leading-5 text-muted">Same spot, light and pose each time makes them easy to compare.</Text>
      <SegmentedControl className="mt-4" options={POSE_OPTIONS} value={pose} onChange={setPose} />
      <View className="mt-3">
        <DayChips selected={date} onSelect={setDate} />
      </View>
      {replacing ? <Text className="mt-3 text-[14px] text-muted">This replaces your {PHOTO_POSE_LABELS[pose].toLowerCase()} photo of that day.</Text> : null}
      {upload.isPending ? (
        <View className="mt-5 h-14 items-center justify-center">
          <ActivityIndicator color={colors.ink} />
        </View>
      ) : (
        <View className="mt-5 gap-2">
          {Platform.OS !== 'web' ? (
            <Button title="Take photo" icon={<Camera size={18} color={colors.canvas} />} onPress={() => setCamera(true)} />
          ) : null}
          <Button
            title="Choose from library"
            variant={Platform.OS === 'web' ? 'primary' : 'secondary'}
            icon={<ImageIcon size={18} color={Platform.OS === 'web' ? colors.canvas : colors.ink} />}
            onPress={() => void pickFromLibrary().then((photo) => photo && save(photo))}
          />
        </View>
      )}
    </BottomSheet>
  );
}

/** One photo, full screen, with delete. */
function PhotoViewer({ photo, onClose }: { photo: ProgressPhoto; onClose: () => void }) {
  const insets = useSafeAreaInsets();
  const remove = useDeleteProgressPhoto();
  const onDelete = async () => {
    const ok = await confirm({ title: 'Delete this photo?', message: 'It will be deleted for good.', confirmLabel: 'Delete', destructive: true });
    if (ok) remove.mutate(photo.id, { onSuccess: onClose, onError: (error) => notify("We couldn't delete it", error.message) });
  };
  return (
    <Modal visible animationType="fade" presentationStyle="fullScreen" onRequestClose={onClose}>
      <View className="flex-1 bg-black" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View className="flex-row items-center justify-between px-5 py-2">
          <IconButton accessibilityLabel="Close" variant="dark" icon={<X size={20} color={colors.canvas} />} onPress={onClose} />
          <Text className="text-[15px] font-semibold text-white">
            {PHOTO_POSE_LABELS[photo.pose]} · {longDate(photo.date)}
          </Text>
          <View className="w-10" />
        </View>
        <Image source={{ uri: photo.url }} style={{ flex: 1 }} contentFit="contain" accessibilityLabel={`${PHOTO_POSE_LABELS[photo.pose]} photo, ${longDate(photo.date)}`} />
        <View className="px-5 py-3">
          <Button title="Delete photo" variant="danger" loading={remove.isPending} onPress={() => void onDelete()} />
        </View>
      </View>
    </Modal>
  );
}

type CompareProps = {
  photos: ProgressPhoto[];
  weights: WeightEntry[];
  measurements: BodyMeasurement[];
  unit: UnitSystem;
  onClose: () => void;
};

/** Two days side by side, with the nearest weigh-in and measurements under each. No labels or scores. */
function CompareView({ photos, weights, measurements, unit, onClose }: CompareProps) {
  const insets = useSafeAreaInsets();
  const dates = [...new Set(photos.map((p) => p.date))];
  const [first, setFirst] = useState(dates[dates.length - 1]);
  const [second, setSecond] = useState(dates[0]);
  const poses = PHOTO_POSES.filter((pose) => photos.some((p) => p.pose === pose && p.date === first) && photos.some((p) => p.pose === pose && p.date === second));
  const [pose, setPose] = useState<PhotoPose>(poses[0] ?? 'front');
  const shownPose = poses.includes(pose) ? pose : (poses[0] ?? pose);

  const column = (date: string) => {
    const photo = photos.find((p) => p.date === date && p.pose === shownPose);
    const weight = nearest(weights, date);
    const measured = nearest(measurements, date);
    return (
      <View className="flex-1">
        <View style={{ aspectRatio: 3 / 4 }} className="overflow-hidden rounded-2xl bg-surface">
          {photo ? <Image source={{ uri: photo.url }} style={{ flex: 1 }} contentFit="cover" accessibilityLabel={`${PHOTO_POSE_LABELS[shownPose]}, ${longDate(date)}`} /> : null}
        </View>
        <Text className="mt-2 text-[15px] font-semibold text-ink">{longDate(date)}</Text>
        {weight ? <Text className="text-[13px] text-muted">{formatWeight(weight.weightKg, unit)}{weight.date !== date ? ` (${longDate(weight.date)})` : ''}</Text> : null}
        {measured
          ? MEASUREMENTS.filter((key) => measured[key] !== null)
              .slice(0, 3)
              .map((key) => (
                <Text key={key} className="text-[13px] text-muted">
                  {MEASUREMENT_LABELS[key]} {formatLength(measured[key]!, unit)}
                </Text>
              ))
          : null}
      </View>
    );
  };

  return (
    <Modal visible animationType="slide" presentationStyle="fullScreen" onRequestClose={onClose}>
      <View className="flex-1 bg-canvas" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View className="h-14 flex-row items-center justify-between px-5">
          <IconButton accessibilityLabel="Close" icon={<X size={20} color={colors.ink} />} onPress={onClose} />
          <Text accessibilityRole="header" className="text-[17px] font-semibold text-ink">
            Compare
          </Text>
          <View className="w-10" />
        </View>
        <ScrollView contentContainerClassName="gap-4 px-5 pb-8">
          <View>
            <Text className="mb-2 ml-1 text-[14px] font-medium text-muted">From</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
              {[...dates].reverse().map((d) => (
                <Chip key={`a-${d}`} label={longDate(d)} selected={first === d} onPress={() => setFirst(d)} />
              ))}
            </ScrollView>
          </View>
          <View>
            <Text className="mb-2 ml-1 text-[14px] font-medium text-muted">To</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
              {dates.map((d) => (
                <Chip key={`b-${d}`} label={longDate(d)} selected={second === d} onPress={() => setSecond(d)} />
              ))}
            </ScrollView>
          </View>
          {poses.length > 1 ? (
            <SegmentedControl options={POSE_OPTIONS.filter((o) => poses.includes(o.value))} value={shownPose} onChange={setPose} />
          ) : null}
          {poses.length === 0 ? (
            <Text className="text-[15px] leading-[21px] text-muted">These two days have no photo in the same pose.</Text>
          ) : (
            <View className="flex-row gap-3">
              {column(first)}
              {column(second)}
            </View>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
}

/** Progress photos by day: private, never used for AI, no before/after labels or praise. */
export function PhotosTab({ unit }: { unit: UnitSystem }) {
  const body = useBody();
  const weights = useWeights();
  const removeAll = useDeleteProgressPhoto();
  const photoReminder = useReminderStore((s) => s.settings.progressPhoto);
  const [adding, setAdding] = useState(false);
  const [viewing, setViewing] = useState<ProgressPhoto | null>(null);
  const [comparing, setComparing] = useState(false);
  const photos = useMemo(() => body.data?.photos ?? [], [body.data]);
  const days = useMemo(() => {
    const byDate = new Map<string, ProgressPhoto[]>();
    for (const photo of photos) byDate.set(photo.date, [...(byDate.get(photo.date) ?? []), photo]);
    return [...byDate.entries()];
  }, [photos]);

  const deleteAll = async () => {
    const ok = await confirm({
      title: 'Delete all photos?',
      message: 'Every progress photo will be deleted for good. Your weigh-ins and measurements stay.',
      confirmLabel: 'Delete all',
      destructive: true,
    });
    if (ok) removeAll.mutate('all', { onError: (error) => notify("We couldn't delete them", error.message) });
  };

  if (body.isPending) return <ActivityIndicator color={colors.ink} />;
  if (body.isError) return <Text className="text-[15px] text-muted">We couldn&apos;t load your photos.</Text>;

  return (
    <View className="gap-5">
      <View className="flex-row gap-3 rounded-2xl bg-surface p-4">
        <Lock size={18} color={colors.ink} style={{ marginTop: 1 }} />
        <Text className="flex-1 text-[14px] leading-5 text-ink">Private — only you can see them. Never used for AI.</Text>
      </View>

      <View className="flex-row gap-2">
        <Button title="Add photo" icon={<Camera size={18} color={colors.canvas} />} className="flex-1" onPress={() => setAdding(true)} />
        {days.length > 1 ? (
          <Button title="Compare" variant="secondary" icon={<Columns2 size={18} color={colors.ink} />} className="flex-1" onPress={() => setComparing(true)} />
        ) : null}
      </View>

      {days.length === 0 ? (
        <View className="items-center rounded-card border border-line px-6 py-8">
          <Text className="text-center text-[16px] font-semibold text-ink">No photos yet</Text>
          <Text className="mt-1 text-center text-[14px] leading-5 text-muted">
            A front, side and back photo every few weeks shows changes you won&apos;t see in the mirror day to day.
          </Text>
        </View>
      ) : (
        days.map(([date, dayPhotos]) => (
          <View key={date}>
            <Text className="mb-2 ml-1 text-[15px] font-medium text-muted">{formatDay(date)}</Text>
            <View className="flex-row gap-2">
              {PHOTO_POSES.map((pose) => {
                const photo = dayPhotos.find((p) => p.pose === pose);
                return (
                  <Pressable
                    key={pose}
                    accessibilityRole={photo ? 'button' : undefined}
                    accessibilityLabel={photo ? `${PHOTO_POSE_LABELS[pose]} photo, ${formatDay(date)}. Open` : undefined}
                    disabled={!photo}
                    onPress={() => photo && setViewing(photo)}
                    style={{ aspectRatio: 3 / 4 }}
                    className="flex-1 overflow-hidden rounded-2xl bg-surface active:opacity-80">
                    {photo ? <Image source={{ uri: photo.url }} style={{ flex: 1 }} contentFit="cover" /> : null}
                    <View className="absolute bottom-1.5 left-1.5 rounded-full bg-black/45 px-2 py-0.5">
                      <Text className="text-[11px] font-medium text-white">{PHOTO_POSE_LABELS[pose]}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ))
      )}

      <Pressable
        accessibilityRole="button"
        onPress={() => router.push('/reminders')}
        className="flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
        <Bell size={18} color={colors.ink} />
        <View className="flex-1">
          <Text className="text-[15px] text-ink">Progress photo reminder</Text>
          <Text className="text-[13px] text-muted">
            {photoReminder.enabled ? `Every 4 weeks, ${WEEKDAYS[photoReminder.weekday]} at ${formatTimeOfDay(photoReminder)}` : 'Off'}
          </Text>
        </View>
        <ChevronRight size={18} color={colors.faint} />
      </Pressable>

      {photos.length > 0 ? <Button title="Delete all photos" variant="danger" loading={removeAll.isPending} onPress={() => void deleteAll()} /> : null}

      {adding ? <AddPhotoSheet photos={photos} onClose={() => setAdding(false)} /> : null}
      {viewing ? <PhotoViewer photo={viewing} onClose={() => setViewing(null)} /> : null}
      {comparing ? (
        <CompareView
          photos={photos}
          weights={weights.data?.entries ?? []}
          measurements={body.data?.measurements ?? []}
          unit={unit}
          onClose={() => setComparing(false)}
        />
      ) : null}
    </View>
  );
}
