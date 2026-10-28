import { router } from 'expo-router';
import { ChevronRight, Flame } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { CharacterView } from '@/components/character/character-view';
import { colors } from '@/constants/colors';
import { useSession } from '@/lib/auth-client';
import {
  celebrationText,
  characterMood,
  characterName,
  figureOptions,
  nextCelebration,
  todayLine,
  useCelebrationStore,
} from '@/lib/character';
import { haptics } from '@/lib/haptics';
import { useCharacter } from '@/lib/queries';
import { STREAK_FLAME_DAYS } from '@/shared/character';
import type { Gender } from '@/shared/onboarding';

const CHEER_MS = 2800;

/** The XP bar to the next level. */
export function XpBar({ xp, start, next, className }: { xp: number; start: number; next: number | null; className?: string }) {
  const share = next === null ? 1 : Math.min(1, Math.max(0, (xp - start) / (next - start)));
  return (
    <View className={`h-2 overflow-hidden rounded-full bg-surface ${className ?? ''}`}>
      <View className="h-full rounded-full bg-flame" style={{ width: `${Math.round(share * 100)}%` }} />
    </View>
  );
}

/**
 * Home, today (CHARACTER.md §2): the character, alive, with its name, level, XP bar and what today earned. A level
 * up, a streak milestone or a goal reached cheers once on this phone. Before it's made: "Meet your character".
 */
export function CharacterCard({ gender }: { gender: Gender | null }) {
  const { userId } = useSession();
  const character = useCharacter();
  const seen = useCelebrationStore((s) => (userId ? s.seen[userId] : undefined));
  const init = useCelebrationStore((s) => s.init);
  const mark = useCelebrationStore((s) => s.mark);
  const data = character.data;

  // What this phone saw first counts as already celebrated, so nobody gets a pile of old level ups.
  useEffect(() => {
    if (data && userId) init(userId, data.level, data.stats.streak);
  }, [data, userId, init]);

  // One celebration at a time: it shows for a few seconds, then the next one (if any) plays.
  const next = data ? nextCelebration(data, seen) : null;
  const [cheering, setCheering] = useState<{ text: string; count: number; mark: () => void } | null>(null);
  const [cheers, setCheers] = useState(0);
  if (next && data && userId && cheering === null) {
    const count = cheers + 1;
    setCheers(count);
    setCheering({ text: celebrationText(next, characterName(data)), count, mark: () => mark(userId, next, data.today.date) });
  }
  useEffect(() => {
    if (!cheering) return;
    haptics.success();
    // Seen as soon as it starts, so leaving Home mid-cheer doesn't play it again.
    cheering.mark();
    const timer = setTimeout(() => setCheering(null), CHEER_MS);
    return () => clearTimeout(timer);
  }, [cheering]);

  if (!data) return null;
  const made = !!data.character;
  const mood = characterMood(data);
  const name = characterName(data);
  const options = figureOptions(data, gender, cheering ? 'cheer' : mood);
  const line = cheering ? cheering.text : made ? todayLine(data, mood) : 'Make it look like you. It grows with your habits, never your weight.';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={made ? `${name}, level ${data.level}. ${line}` : 'Meet your character. Make yours'}
      onPress={() => router.push(made ? '/character' : '/character/edit')}
      className="mx-5 mb-4 flex-row items-center gap-3 rounded-[20px] border border-line px-4 py-3 active:bg-surface">
      <CharacterView height={104} cheerKey={cheering?.count} {...options} />
      <View className="flex-1">
        {made ? (
          <>
            <View className="flex-row items-center gap-2">
              <Text className="text-[17px] font-bold tracking-tight text-ink" numberOfLines={1}>
                {name}
              </Text>
              <Text className="text-[13px] font-semibold text-muted">Level {data.level}</Text>
              {data.stats.streak >= STREAK_FLAME_DAYS ? <Flame size={15} color={colors.flame} fill={colors.flame} /> : null}
            </View>
            <XpBar xp={data.xp} start={data.levelStart} next={data.nextLevelStart} className="mt-2" />
          </>
        ) : (
          <Text className="text-[17px] font-bold tracking-tight text-ink">Meet your character</Text>
        )}
        <Text className={`mt-2 text-[14px] leading-5 ${cheering ? 'font-semibold text-ink' : 'text-muted'}`} numberOfLines={2}>
          {line}
        </Text>
        {made ? null : <Text className="mt-1.5 text-[15px] font-semibold text-ink">Make yours ›</Text>}
      </View>
      {made ? <ChevronRight size={18} color={colors.faint} /> : null}
    </Pressable>
  );
}
