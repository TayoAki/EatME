import { router } from 'expo-router';
import { Check, Pill } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { notify } from '@/lib/confirm';
import { useSupplements, useToggleSupplement } from '@/lib/queries';

/** Today's supplements on Home: tap one to tick it as taken. */
export function SupplementsCard({ date }: { date: string }) {
  const list = useSupplements(date);
  const toggle = useToggleSupplement(date);
  const supplements = list.data?.supplements ?? [];
  if (supplements.length === 0) return null;
  const taken = supplements.filter((s) => s.taken).length;

  return (
    <View className="mx-5 mt-3 rounded-[20px] border border-line p-4">
      <Pressable accessibilityRole="link" onPress={() => router.push('/supplements')} className="flex-row items-center gap-2 active:opacity-60">
        <Pill size={18} color={colors.ink} strokeWidth={1.8} />
        <Text className="flex-1 text-[15px] font-semibold text-ink">Supplements</Text>
        <Text className="text-[13px] text-muted">
          {taken} of {supplements.length} taken
        </Text>
      </Pressable>
      <View className="mt-3 flex-row flex-wrap gap-2">
        {supplements.map((supplement) => (
          <Pressable
            key={supplement.id}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: supplement.taken }}
            accessibilityLabel={supplement.name}
            onPress={() => {
              haptics.selection();
              toggle.mutate(
                { id: supplement.id, taken: !supplement.taken },
                { onError: (error) => notify("We couldn't update it", error.message) },
              );
            }}
            className={cn(
              'h-10 flex-row items-center gap-1.5 rounded-full border px-4 active:opacity-70',
              supplement.taken ? 'border-ink bg-ink' : 'border-line bg-canvas',
            )}>
            {supplement.taken ? <Check size={14} color={colors.canvas} strokeWidth={2.6} /> : null}
            <Text className={cn('text-[14px] font-medium', supplement.taken ? 'text-white' : 'text-ink')}>{supplement.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
