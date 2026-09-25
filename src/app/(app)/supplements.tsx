import { router } from 'expo-router';
import { ArrowLeft, Pill, Plus } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';

import { SupplementSheet } from '@/components/supplements/supplement-sheet';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';
import { haptics } from '@/lib/haptics';
import { useDeleteSupplement, useSaveSupplement, useSupplements } from '@/lib/queries';
import { todayIso } from '@/lib/time';
import { NUTRIENT_INFO } from '@/shared/nutrients';
import { describeDose, type Supplement } from '@/shared/supplements';

export default function SupplementsScreen() {
  const list = useSupplements(todayIso());
  const save = useSaveSupplement();
  const remove = useDeleteSupplement();
  const [editing, setEditing] = useState<Supplement | 'new' | null>(null);
  const supplements = list.data?.supplements ?? [];

  const onSave = (body: Parameters<typeof save.mutate>[0]['body']) =>
    save.mutate(
      { id: editing && editing !== 'new' ? editing.id : undefined, body },
      {
        onSuccess: () => {
          haptics.success();
          setEditing(null);
        },
        onError: (error) => notify("We couldn't save the supplement", error.message),
      },
    );

  const onRemove = async (supplement: Supplement) => {
    const ok = await confirm({
      title: `Remove ${supplement.name}?`,
      message: 'Days you already ticked keep their numbers.',
      confirmLabel: 'Remove',
      destructive: true,
    });
    if (!ok) return;
    setEditing(null);
    remove.mutate(supplement.id, { onError: (error) => notify("We couldn't remove it", error.message) });
  };

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Go back" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={() => router.back()} />
      </View>
      <ScrollView contentContainerClassName="gap-5 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View>
          <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
            Supplements
          </Text>
          <Text className="mt-1 text-[15px] leading-[21px] text-muted">
            Tick them on Home when you take them. Their vitamins and minerals count toward your day.
          </Text>
        </View>

        {list.isPending ? (
          <ActivityIndicator color={colors.ink} />
        ) : supplements.length === 0 ? (
          <View className="items-center rounded-card bg-surface px-6 py-8">
            <Pill size={24} color={colors.ink} />
            <Text className="mt-2 text-center text-[15px] font-semibold text-ink">No supplements yet</Text>
          </View>
        ) : (
          <View className="overflow-hidden rounded-[20px] border border-line">
            {supplements.map((supplement, index) => (
              <Pressable
                key={supplement.id}
                accessibilityRole="button"
                accessibilityLabel={`Edit ${supplement.name}`}
                onPress={() => setEditing(supplement)}
                onLongPress={() => void onRemove(supplement)}
                className={`min-h-[60px] justify-center px-4 py-2.5 active:bg-surface ${index > 0 ? 'border-t border-line' : ''}`}>
                <Text className="text-[16px] text-ink">{supplement.name}</Text>
                <Text numberOfLines={2} className="text-[13px] text-muted">
                  {[describeDose(supplement.nutrients, NUTRIENT_INFO) || 'No tracked nutrients', supplement.schedule === 'daily' ? 'every day' : 'when needed'].join(' · ')}
                </Text>
              </Pressable>
            ))}
          </View>
        )}

        <Button title="Add a supplement" variant="secondary" icon={<Plus size={18} color={colors.ink} />} onPress={() => setEditing('new')} />
        {supplements.length > 0 ? (
          <Text className="px-1 text-[13px] leading-[18px] text-muted">Tap a supplement to change its dose or remove it.</Text>
        ) : null}
        <Text className="px-1 text-[12px] leading-4 text-muted">
          EatME shows a note when a supplement alone goes above the adult upper limit. It is not medical advice — ask
          your doctor or pharmacist about doses.
        </Text>
      </ScrollView>

      {editing ? (
        <SupplementSheet
          key={editing === 'new' ? 'new' : editing.id}
          initial={editing === 'new' ? undefined : { name: editing.name, nutrients: editing.nutrients, schedule: editing.schedule }}
          saving={save.isPending}
          onClose={() => setEditing(null)}
          onSave={onSave}
          onRemove={editing === 'new' ? undefined : () => void onRemove(editing)}
        />
      ) : null}
    </Screen>
  );
}
