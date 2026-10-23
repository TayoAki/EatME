import { router } from 'expo-router';
import { ArrowLeft, Plus, X } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, Switch, Text, TextInput, View } from 'react-native';

import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useFeatures, useProfile, useUpdateProfile } from '@/lib/queries';
import { cn } from '@/lib/cn';
import { aiRecipients, DEFAULT_AI_PROVIDERS } from '@/shared/features';
import { MAX_FOODS_TO_SKIP } from '@/shared/menus';
import { MENU_CONSENT_VERSION } from '@/shared/onboarding';
import type { Preferences } from '@/shared/user';

function PreferenceCard({
  title,
  label,
  value,
  disabled,
  onChange,
  children,
}: {
  title: string;
  /** Switch name for screen readers. */
  label: string;
  value: boolean;
  disabled: boolean;
  onChange: (value: boolean) => void;
  children: string;
}) {
  return (
    <View className="rounded-[20px] border border-line p-4">
      <View className="flex-row items-center gap-3">
        <Text className="flex-1 text-[16px] font-semibold text-ink">{title}</Text>
        <Switch
          accessibilityLabel={label}
          value={value}
          disabled={disabled}
          onValueChange={onChange}
          trackColor={{ true: colors.ink, false: colors.track }}
          thumbColor={colors.canvas}
        />
      </View>
      <Text className="mt-2 text-[14px] leading-5 text-muted">{children}</Text>
    </View>
  );
}

/**
 * What to order (v2.5): foods the person skips. Dishes that mention one leave "Fits well"; it isn't an
 * allergy filter (it can't see hidden ingredients), and the list never goes to the AI.
 */
function FoodsToSkipCard({ foods, disabled, onChange }: { foods: string[]; disabled: boolean; onChange: (foods: string[]) => void }) {
  const [typed, setTyped] = useState('');
  const food = typed.trim().toLowerCase();
  const full = foods.length >= MAX_FOODS_TO_SKIP;
  const canAdd = food.length >= 2 && !foods.includes(food) && !full && !disabled;
  const add = () => {
    if (!canAdd) return;
    onChange([...foods, food.slice(0, 30)]);
    setTyped('');
  };
  return (
    <View className="rounded-[20px] border border-line p-4">
      <Text className="text-[16px] font-semibold text-ink">Foods to skip</Text>
      <Text className="mt-2 text-[14px] leading-5 text-muted">
        What to order leaves out dishes whose name or description mentions one, and says how many it hid. It can&apos;t spot
        hidden ingredients, so it isn&apos;t for allergies: tell the staff about those.
      </Text>
      {foods.length > 0 ? (
        <View className="mt-3 flex-row flex-wrap gap-2">
          {foods.map((item) => (
            <Pressable
              key={item}
              accessibilityRole="button"
              accessibilityLabel={`Stop skipping ${item}`}
              disabled={disabled}
              onPress={() => onChange(foods.filter((f) => f !== item))}
              className="h-9 flex-row items-center gap-1.5 rounded-full bg-surface pl-3.5 pr-2.5 active:opacity-70">
              <Text className="text-[15px] text-ink">{item}</Text>
              <X size={14} color={colors.muted} />
            </Pressable>
          ))}
        </View>
      ) : null}
      <View className="mt-3 h-11 flex-row items-center gap-2 rounded-field bg-surface px-3.5">
        <TextInput
          accessibilityLabel="Add a food to skip"
          value={typed}
          onChangeText={setTyped}
          onSubmitEditing={add}
          maxLength={30}
          editable={!full}
          autoCapitalize="none"
          placeholder={full ? `Up to ${MAX_FOODS_TO_SKIP} foods` : 'Add a food, e.g. mushrooms'}
          placeholderTextColor={colors.faint}
          returnKeyType="done"
          className="min-w-0 flex-1 text-[16px] text-ink"
        />
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add the food"
          disabled={!canAdd}
          onPress={add}
          hitSlop={6}
          className={cn('h-7 w-7 items-center justify-center rounded-full bg-ink active:opacity-70', !canAdd && 'opacity-30')}>
          <Plus size={15} color={colors.canvas} />
        </Pressable>
      </View>
    </View>
  );
}

/**
 * App preferences kept on the account: AI analysis (the consent, Apple 5.1.2(i)), calm mode, foods to
 * skip (What to order), and the food-quality tag experiment when offered.
 */
export default function PreferencesScreen() {
  const profile = useProfile();
  const features = useFeatures();
  const update = useUpdateProfile();
  const preferences = profile?.preferences ?? {};

  const set = (change: Preferences) => {
    haptics.selection();
    update.mutate({ preferences: change }, { onError: (error) => notify("We couldn't save that", error.message) });
  };
  const menus = !!features.data?.whatToOrder;
  const setAiConsent = (allowed: boolean) => {
    haptics.selection();
    update.mutate(
      allowed ? { aiConsent: true, aiConsentVersion: menus ? MENU_CONSENT_VERSION : 1 } : { aiConsent: false },
      { onError: (error) => notify("We couldn't save that", error.message) },
    );
  };
  const recipients = aiRecipients(features.data?.aiProviders ?? DEFAULT_AI_PROVIDERS, 'them');
  const sent = menus
    ? "the meal photos, descriptions and notes you choose to analyze, and the menus you scan (their text or photos and the restaurant's name),"
    : 'the meal photos, descriptions and notes you choose to analyze';

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Preferences
        </Text>
        <PreferenceCard
          title="AI meal analysis"
          label="AI meal analysis"
          value={!!profile?.aiConsent}
          disabled={update.isPending}
          onChange={setAiConsent}>
          {`Sends ${sent} to ${recipients}, without your name or email. They don't train AI models on it. When it's off, barcodes, food search and quick add still work, and a scan asks first.`}
        </PreferenceCard>
        <PreferenceCard
          title="Calm mode"
          label="Calm mode"
          value={!!preferences.calmMode}
          disabled={update.isPending}
          onChange={(value) => set({ calmMode: value })}>
          Hides calorie and macro numbers on Home, meals and scans. Rings and words stay, nothing turns red when you go
          over, and there is no streak to keep: Weight Class counts the days you logged instead. Fiber and water keep their
          numbers, Daily goals still shows your targets, and “Show numbers” on a meal reveals them.
        </PreferenceCard>
        {menus ? (
          <FoodsToSkipCard
            foods={preferences.foodsToSkip ?? []}
            disabled={update.isPending}
            onChange={(foodsToSkip) => set({ foodsToSkip })}
          />
        ) : null}
        {features.data?.foodQuality ? (
          <PreferenceCard
            title="Food quality tag (beta)"
            label="Food quality tag"
            value={!!preferences.foodQualityTag}
            disabled={update.isPending}
            onChange={(value) => set({ foodQualityTag: value })}>
            Adds a small tag to each new meal — whole foods, processed or highly processed — with a one-line reason and an
            estimate of added sugar. A photo can&apos;t always tell homemade from packaged, so treat it as a rough guide, not a
            grade.
          </PreferenceCard>
        ) : null}
      </ScrollView>
    </Screen>
  );
}
