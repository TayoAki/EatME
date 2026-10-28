import { router } from 'expo-router';
import { ArrowLeft, Lock } from 'lucide-react-native';
import { useState, type ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { CharacterView } from '@/components/character/character-view';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { SegmentedControl } from '@/components/ui/segmented-control';
import { TextField } from '@/components/ui/text-field';
import { colors } from '@/constants/colors';
import { defaultLook } from '@/lib/character';
import { notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useCharacter, useProfile, useSaveCharacter } from '@/lib/queries';
import {
  BOTTOM_COLORS,
  CHARACTER_NAME_MAX,
  DEFAULT_CHARACTER_NAME,
  GEAR,
  GLOW_WATER_DAYS,
  HAIR_COLORS,
  HAIR_STYLE_LABELS,
  HAIR_STYLES,
  SKIN_TONES,
  strengthTier,
  TOP_COLORS,
  type CharacterResponse,
  type GearKey,
  type Look,
} from '@/shared/character';
import type { Gender } from '@/shared/onboarding';

const BODY_OPTIONS = [
  { label: 'Girl', value: 'girl' },
  { label: 'Guy', value: 'guy' },
] as const;
const BUILD_OPTIONS = [
  { label: 'Slim', value: 'slim' },
  { label: 'Medium', value: 'medium' },
  { label: 'Full', value: 'full' },
] as const;
const FACIAL_HAIR_LABELS = { none: 'None', stubble: 'Stubble', beard: 'Beard' } as const;
const GLASSES_LABELS = { none: 'None', round: 'Round', square: 'Square' } as const;

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View>
      <Text className="mb-2.5 text-[13px] font-semibold uppercase tracking-wider text-muted">{title}</Text>
      {children}
    </View>
  );
}

/** Colour circles; `named` says the keys are words a screen reader can say ("black"), otherwise it counts ("2 of 8"). */
function Swatches({
  colorsByKey,
  value,
  label,
  named = true,
  onChange,
}: {
  colorsByKey: Record<string, string>;
  value: string;
  label: string;
  named?: boolean;
  onChange: (key: string) => void;
}) {
  const entries = Object.entries(colorsByKey);
  return (
    <View className="flex-row flex-wrap gap-3">
      {entries.map(([key, color], i) => {
        const selected = key === value;
        return (
          <Pressable
            key={key}
            accessibilityRole="radio"
            accessibilityState={{ selected }}
            accessibilityLabel={named ? `${label}: ${key}` : `${label} ${i + 1} of ${entries.length}`}
            hitSlop={4}
            onPress={() => {
              haptics.selection();
              onChange(key);
            }}
            className="h-10 w-10 rounded-full"
            style={{ backgroundColor: color, borderWidth: selected ? 3 : 1, borderColor: selected ? colors.ink : colors.line }}
          />
        );
      })}
    </View>
  );
}

function Editor({ character, gender }: { character: CharacterResponse; gender: Gender | null | undefined }) {
  const stored = character.character;
  const [name, setName] = useState(stored?.name ?? DEFAULT_CHARACTER_NAME);
  const [look, setLook] = useState<Look>(stored?.look ?? defaultLook(gender));
  // A new character wears everything it has earned; it can be taken off here.
  const [gear, setGear] = useState<Partial<Record<GearKey, boolean>>>(stored?.gear ?? Object.fromEntries(character.gear.map((key) => [key, true])));
  const save = useSaveCharacter();
  const set = <K extends keyof Look>(key: K, value: Look[K]) => setLook((current) => ({ ...current, [key]: value }));
  const ready = name.trim().length > 0;

  return (
    <>
      <ScrollView contentContainerClassName="gap-6 px-5 pb-6" keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View className="items-center rounded-card bg-surface py-4">
          <CharacterView
            height={220}
            look={look}
            strength={strengthTier(character.stats.proteinDays)}
            gear={gear}
            glow={character.stats.waterDays >= GLOW_WATER_DAYS}
            mood="happy"
            accessibilityLabel="Your character, as it will look"
          />
        </View>

        <TextField label="Name" value={name} onChangeText={setName} maxLength={CHARACTER_NAME_MAX} autoCapitalize="words" returnKeyType="done" />

        <Section title="Body">
          <SegmentedControl options={BODY_OPTIONS} value={look.body} onChange={(body) => set('body', body)} />
          <SegmentedControl options={BUILD_OPTIONS} value={look.build} onChange={(build) => set('build', build)} className="mt-2.5" />
          <Text className="mt-2 text-[13px] leading-[18px] text-muted">Your pick, any time. Your weight never changes it.</Text>
        </Section>

        <Section title="Skin">
          <Swatches colorsByKey={Object.fromEntries(SKIN_TONES.map((c, i) => [String(i), c]))} value={String(look.skin)} label="Skin tone" named={false} onChange={(i) => set('skin', Number(i))} />
        </Section>

        <Section title="Hair">
          <View className="flex-row flex-wrap gap-2">
            {HAIR_STYLES.map((style) => (
              <Chip key={style} label={HAIR_STYLE_LABELS[style]} selected={look.hair === style} onPress={() => set('hair', style)} />
            ))}
          </View>
          {look.hair === 'bald' ? null : (
            <View className="mt-3">
              <Swatches colorsByKey={HAIR_COLORS} value={look.hairColor} label="Hair color" onChange={(key) => set('hairColor', key as Look['hairColor'])} />
            </View>
          )}
        </Section>

        <Section title="Face">
          <View className="flex-row flex-wrap gap-2">
            {(Object.keys(FACIAL_HAIR_LABELS) as Look['facialHair'][]).map((option) => (
              <Chip key={option} label={FACIAL_HAIR_LABELS[option]} selected={look.facialHair === option} onPress={() => set('facialHair', option)} />
            ))}
          </View>
          <View className="mt-2 flex-row flex-wrap gap-2">
            {(Object.keys(GLASSES_LABELS) as Look['glasses'][]).map((option) => (
              <Chip key={option} label={option === 'none' ? 'No glasses' : `${GLASSES_LABELS[option]} glasses`} selected={look.glasses === option} onPress={() => set('glasses', option)} />
            ))}
          </View>
        </Section>

        <Section title="Top">
          <Swatches colorsByKey={TOP_COLORS} value={look.top} label="Top color" onChange={(key) => set('top', key as Look['top'])} />
        </Section>
        <Section title="Bottoms">
          <Swatches colorsByKey={BOTTOM_COLORS} value={look.bottom} label="Bottoms color" onChange={(key) => set('bottom', key as Look['bottom'])} />
        </Section>

        <Section title="Gear">
          <View className="flex-row flex-wrap gap-2">
            {GEAR.map((item) =>
              character.gear.includes(item.key) ? (
                <Chip key={item.key} role="checkbox" label={item.label} selected={!!gear[item.key]} onPress={() => setGear((g) => ({ ...g, [item.key]: !g[item.key] }))} />
              ) : (
                <View key={item.key} className="h-10 flex-row items-center gap-1.5 rounded-full bg-surface px-4">
                  <Lock size={13} color={colors.faint} />
                  <Text className="text-[14px] text-muted">
                    {item.label} · level {item.level}
                  </Text>
                </View>
              ),
            )}
          </View>
        </Section>
      </ScrollView>
      <View className="px-5 pt-2">
        <Button
          title="Save"
          loading={save.isPending}
          disabled={!ready}
          onPress={() =>
            save.mutate(
              { name: name.trim(), look, gear },
              {
                onSuccess: () => {
                  haptics.success();
                  router.back();
                },
                onError: (error) => notify("We couldn't save your character", error.message),
              },
            )
          }
        />
      </View>
    </>
  );
}

/** Customize (CHARACTER.md §2): a live preview over the look, the name and the earned gear. All free. */
export default function CharacterEditScreen() {
  const character = useCharacter();
  const profile = useProfile();
  return (
    <Screen>
      <View className="h-14 flex-row items-center gap-3 px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
        <Text accessibilityRole="header" className="text-[20px] font-bold tracking-tight text-ink">
          {character.data?.character ? 'Customize' : 'Make your character'}
        </Text>
      </View>
      {character.data ? (
        <Editor character={character.data} gender={profile?.gender} />
      ) : character.isError ? (
        <Text className="px-5 text-[15px] text-muted">We couldn&apos;t load your character. Go back and try again.</Text>
      ) : (
        <ActivityIndicator color={colors.ink} />
      )}
    </Screen>
  );
}
