import { router } from 'expo-router';
import { ArrowLeft, Bell, Check, ChevronRight, Droplet, Dumbbell, Flame, Leaf, Lock } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { CharacterView } from '@/components/character/character-view';
import { XpBar } from '@/components/home/character-card';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { characterMood, characterName, figureOptions, todayLine } from '@/lib/character';
import { formatTimeOfDay } from '@/lib/reminder-plan';
import { useReminderStore } from '@/lib/reminder-store';
import { useCharacter, useProfile } from '@/lib/queries';
import { GEAR, STREAK_FLAME_DAYS, strengthTier, type CharacterResponse } from '@/shared/character';

function Stat({ icon, label, about, value, color }: { icon: ReactNode; label: string; about: string; value: number; color: string }) {
  return (
    <View className="flex-1 rounded-[20px] border border-line p-4">
      <View className="flex-row items-center gap-2">
        {icon}
        <Text className="text-[15px] font-semibold text-ink">{label}</Text>
      </View>
      <Text style={{ color }} className="mt-2 text-[26px] font-bold tracking-tight">
        {value}
      </Text>
      <Text className="text-[13px] text-muted">{about}</Text>
    </View>
  );
}

/** The check-in nudges live with the other reminders; this row says whether they're on. */
function CheckInsRow({ name }: { name: string }) {
  const checkIn = useReminderStore((s) => s.settings.character);
  return (
    <Pressable
      accessibilityRole="link"
      onPress={() => router.push('/reminders')}
      className="flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
      <Bell size={18} color={colors.ink} />
      <View className="flex-1">
        <Text className="text-[15px] font-semibold text-ink">Check-ins</Text>
        <Text className="mt-0.5 text-[13px] leading-[18px] text-muted">
          {checkIn.enabled
            ? `On: evenings at ${formatTimeOfDay(checkIn)}, only when nothing's logged yet`
            : `Off: let ${name} nudge you on evenings with nothing logged`}
        </Text>
      </View>
      <ChevronRight size={18} color={colors.faint} />
    </Pressable>
  );
}

function Content({ character, gender }: { character: CharacterResponse; gender: Parameters<typeof figureOptions>[1] }) {
  const mood = characterMood(character);
  const name = characterName(character);
  const { stats } = character;
  const toNext = character.nextLevelStart === null ? null : character.nextLevelStart - character.xp;
  const strength = strengthTier(stats.proteinDays);

  return (
    <>
      <View className="items-center">
        <CharacterView height={250} {...figureOptions(character, gender, mood)} accessibilityLabel={`${name}, level ${character.level}`} />
        <Text accessibilityRole="header" className="mt-3 text-[30px] font-bold tracking-tight text-ink">
          {name}
        </Text>
        <View className="mt-1 flex-row items-center gap-1.5">
          <Text className="text-[16px] font-semibold text-muted">Level {character.level}</Text>
          {stats.streak >= STREAK_FLAME_DAYS ? <Flame size={16} color={colors.flame} fill={colors.flame} /> : null}
        </View>
      </View>

      <View>
        <XpBar xp={character.xp} start={character.levelStart} next={character.nextLevelStart} />
        <Text className="mt-2 text-[14px] text-muted">
          {toNext === null ? `${character.xp.toLocaleString()} XP, the top level` : `${character.xp.toLocaleString()} XP · ${toNext.toLocaleString()} to level ${character.level + 1}`}
        </Text>
        <Text className="mt-1 text-[15px] text-ink">{todayLine(character, mood)}</Text>
      </View>

      <View className="gap-3">
        <View className="flex-row gap-3">
          <Stat icon={<Dumbbell size={16} color={colors.protein} />} label="Strength" about="protein days" value={stats.proteinDays} color={colors.protein} />
          <Stat icon={<Droplet size={16} color={colors.water} />} label="Energy" about="water days" value={stats.waterDays} color={colors.water} />
        </View>
        <View className="flex-row gap-3">
          <Stat icon={<Leaf size={16} color={colors.fiber} />} label="Vitality" about="fiber days" value={stats.fiberDays} color={colors.fiber} />
          <Stat icon={<Flame size={16} color={colors.flame} />} label="Streak" about="days in a row" value={stats.streak} color={colors.flame} />
        </View>
        <Text className="text-[13px] leading-[18px] text-muted">
          {strength === 2
            ? `${name} is as strong as it gets: 30 protein days and counting.`
            : `${name} gets stronger at ${strength === 0 ? 10 : 30} protein days (${stats.proteinDays} so far).`}{' '}
          Each day: showing up 10 XP, protein goal 10, water goal 5, fiber goal 5.
        </Text>
      </View>

      <View>
        <Text className="text-[13px] font-semibold uppercase tracking-wider text-muted">Gear</Text>
        <View className="mt-2 rounded-[20px] border border-line">
          {GEAR.map((item, i) => {
            const earned = character.gear.includes(item.key);
            return (
              <View key={item.key} className={`flex-row items-center justify-between px-4 py-3 ${i ? 'border-t border-line' : ''}`}>
                <Text className={`text-[15px] ${earned ? 'font-semibold text-ink' : 'text-muted'}`}>{item.label}</Text>
                <View className="flex-row items-center gap-1.5">
                  {earned ? <Check size={16} color={colors.success} /> : <Lock size={14} color={colors.faint} />}
                  <Text className={`text-[14px] ${earned ? 'text-success' : 'text-muted'}`}>{earned ? 'Earned' : `Level ${item.level}`}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <CheckInsRow name={name} />

      <Text className="text-[13px] leading-[18px] text-muted">
        Your character grows with your habits. It never changes with your weight, and gear is earned, never bought.
      </Text>
    </>
  );
}

/** Your character (CHARACTER.md §2): big and alive, its level, stats and gear, and Customize. */
export default function CharacterScreen() {
  const character = useCharacter();
  const profile = useProfile();

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-6 px-5 pb-6" showsVerticalScrollIndicator={false}>
        {character.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : character.isError ? (
          <Text className="text-[15px] text-muted">We couldn&apos;t load your character. Go back and try again.</Text>
        ) : (
          <Content character={character.data} gender={profile?.gender} />
        )}
      </ScrollView>
      {character.data ? (
        <View className="px-5 pt-2">
          <Button title={character.data.character ? 'Customize' : 'Make your character'} onPress={() => router.push('/character/edit')} />
        </View>
      ) : null}
    </Screen>
  );
}
