import { ArrowLeft, Plus, X } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { MAX_MENU_LINES, type DishLine } from '@/shared/menus';

type DishConfirmProps = {
  /** What the phone read (empty when it couldn't read the menu: the person types the dishes). */
  initialLines: DishLine[];
  restaurant: string;
  onRestaurantChange: (name: string) => void;
  onBack: () => void;
  /** Retake the photos (when the phone couldn't read them). */
  onRetake: () => void;
  onSubmit: (lines: DishLine[]) => void;
  sending: boolean;
  bottomSpace: number;
};

type Row = { id: number; line: DishLine };

/**
 * The confirm step (WHAT-TO-ORDER.md §5): the dishes the phone read, to fix before anything is sent.
 * Wrong lines removed, names corrected, a dish typed in. Only this list goes to the AI.
 */
export function DishConfirm({ initialLines, restaurant, onRestaurantChange, onBack, onRetake, onSubmit, sending, bottomSpace }: DishConfirmProps) {
  const insets = useSafeAreaInsets();
  const nextId = useRef(initialLines.length);
  const [rows, setRows] = useState<Row[]>(() => initialLines.map((line, id) => ({ id, line })));
  const [typed, setTyped] = useState('');
  const unread = initialLines.length === 0;
  const dishes = rows.filter((row) => row.line.name.trim().length >= 2);
  const full = rows.length >= MAX_MENU_LINES;

  const add = () => {
    const name = typed.trim();
    if (name.length < 2 || full) return;
    setRows((list) => [...list, { id: nextId.current++, line: { name: name.slice(0, 120) } }]);
    setTyped('');
  };
  const rename = (id: number, name: string) => setRows((list) => list.map((row) => (row.id === id ? { ...row, line: { ...row.line, name } } : row)));
  const remove = (id: number) => setRows((list) => list.filter((row) => row.id !== id));

  return (
    <KeyboardAvoidingView className="flex-1 bg-canvas" style={{ paddingTop: insets.top }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the pages" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      <ScrollView contentContainerClassName="px-5 pb-6" keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          {unread ? "We couldn't read this menu" : 'Check the dishes'}
        </Text>
        <Text className="mt-1 text-[15px] leading-[21px] text-muted">
          {unread
            ? 'Try again in better light, or type the dishes you are choosing between.'
            : "Remove anything that isn't a dish, fix a name if it's wrong, and add what's missing. Only this list is sent."}
        </Text>
        {unread ? <Button title="Retake the photo" variant="secondary" size="md" className="mt-4" onPress={onRetake} /> : null}

        <TextInput
          accessibilityLabel="Restaurant (optional)"
          value={restaurant}
          onChangeText={onRestaurantChange}
          maxLength={80}
          placeholder="Restaurant (optional)"
          placeholderTextColor={colors.faint}
          returnKeyType="done"
          className="mt-5 h-12 rounded-field bg-surface px-4 text-[16px] text-ink"
        />

        {rows.length > 0 ? (
          <View className="mt-5">
            {rows.map((row, index) => {
              const heading = row.line.section && row.line.section !== rows[index - 1]?.line.section ? row.line.section : null;
              return (
                <View key={row.id}>
                  {heading ? (
                    <Text className="mt-3 px-1 text-[12px] font-semibold uppercase tracking-wider text-muted">{heading}</Text>
                  ) : null}
                  <View className={cn('flex-row items-center gap-2 py-1.5', !heading && index > 0 && 'border-t border-line')}>
                    <View className="min-w-0 flex-1">
                      <TextInput
                        accessibilityLabel={`Dish ${index + 1}`}
                        value={row.line.name}
                        onChangeText={(name) => rename(row.id, name)}
                        maxLength={120}
                        className="py-1.5 text-[16px] text-ink"
                      />
                      {row.line.description ? (
                        <Text numberOfLines={1} className="text-[13px] text-muted">
                          {row.line.description}
                        </Text>
                      ) : null}
                    </View>
                    {row.line.price ? <Text className="text-[14px] text-muted">{row.line.price}</Text> : null}
                    <Pressable
                      accessibilityRole="button"
                      accessibilityLabel={`Remove ${row.line.name || 'this line'}`}
                      hitSlop={6}
                      onPress={() => remove(row.id)}
                      className="h-8 w-8 items-center justify-center rounded-full bg-surface active:opacity-70">
                      <X size={15} color={colors.ink} />
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        ) : null}

        <View className="mt-4 h-12 flex-row items-center gap-2 rounded-field border border-line px-4">
          <TextInput
            accessibilityLabel="Type a dish"
            value={typed}
            onChangeText={setTyped}
            onSubmitEditing={add}
            maxLength={120}
            autoFocus={unread}
            editable={!full}
            placeholder={full ? `Up to ${MAX_MENU_LINES} dishes` : 'Type a dish'}
            placeholderTextColor={colors.faint}
            returnKeyType="done"
            submitBehavior="submit"
            className="min-w-0 flex-1 text-[16px] text-ink"
          />
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Add the dish"
            disabled={typed.trim().length < 2 || full}
            onPress={add}
            hitSlop={6}
            className={cn('h-8 w-8 items-center justify-center rounded-full bg-ink active:opacity-70', (typed.trim().length < 2 || full) && 'opacity-30')}>
            <Plus size={16} color={colors.canvas} />
          </Pressable>
        </View>
      </ScrollView>
      <View className="px-5 pt-3" style={{ paddingBottom: bottomSpace }}>
        <Button
          title={dishes.length === 1 ? 'Find what fits (1 dish)' : `Find what fits (${dishes.length} dishes)`}
          disabled={dishes.length === 0}
          loading={sending}
          onPress={() => onSubmit(dishes.map((row) => ({ ...row.line, name: row.line.name.trim() })))}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
