import { router } from 'expo-router';
import { BookOpen, ExternalLink } from 'lucide-react-native';
import { Fragment, useState } from 'react';
import { Pressable, ScrollView, Text, useWindowDimensions, View } from 'react-native';

import { BottomSheet } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import { colors } from '@/constants/colors';
import { cn } from '@/lib/cn';
import { haptics } from '@/lib/haptics';
import { openLink } from '@/lib/links';
import { SOURCES, type Citation, type SourceTopic } from '@/lib/sources';

/** The citations of one topic: tap one to read it (PubMed, the guideline or the database). */
export function CitationList({ citations }: { citations: readonly Citation[] }) {
  return (
    <View className="overflow-hidden rounded-[20px] border border-line bg-canvas">
      {citations.map((citation, index) => (
        <Fragment key={citation.url}>
          {index > 0 ? <View className="mx-4 h-px bg-line" /> : null}
          <Pressable
            accessibilityRole="link"
            accessibilityHint="Opens the source in the browser"
            onPress={() => void openLink(citation.url)}
            className="min-h-[56px] flex-row items-center gap-3 px-4 py-3 active:bg-surface">
            <View className="flex-1">
              <Text className="text-[15px] leading-5 text-ink">{citation.title}</Text>
              <Text className="mt-0.5 text-[13px] leading-[18px] text-muted">{citation.by}</Text>
            </View>
            <ExternalLink size={16} color={colors.muted} strokeWidth={1.8} />
          </Pressable>
        </Fragment>
      ))}
    </View>
  );
}

/** The look of every sources link: a book and an underlined word, quieter than the numbers. */
function LinkText({ label }: { label: string }) {
  return (
    <>
      <BookOpen size={15} color={colors.muted} strokeWidth={1.8} />
      <Text className="text-[14px] font-medium text-muted underline">{label}</Text>
    </>
  );
}

const LINK_CLASS = 'flex-row items-center gap-1.5 self-start py-1 active:opacity-60';

type SourcesLinkProps = {
  /** The topic whose method and citations open in a sheet, without leaving the screen. */
  topic: SourceTopic;
  label?: string;
  className?: string;
};

/**
 * "Sources" next to a number the app works out (Apple 1.4.1: citations easy to find). Opens a sheet
 * rather than a screen, so it also works on modal screens (a meal). Never put it inside another sheet:
 * if the outer sheet unmounts while this one is open, iOS can leave an invisible layer that blocks
 * touches. Put it on the screen next to the sheet's button instead.
 */
export function SourcesLink({ topic, label = 'Sources', className }: SourcesLinkProps) {
  const [open, setOpen] = useState(false);
  const { height } = useWindowDimensions();
  const section = SOURCES.find((s) => s.topic === topic);
  if (!section) return null;
  return (
    <>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={`${label}: ${section.title}`}
        hitSlop={8}
        onPress={() => {
          haptics.selection();
          setOpen(true);
        }}
        className={cn(LINK_CLASS, className)}>
        <LinkText label={label} />
      </Pressable>
      <BottomSheet visible={open} onClose={() => setOpen(false)}>
        <ScrollView style={{ maxHeight: height * 0.7 }} showsVerticalScrollIndicator={false}>
          <Text accessibilityRole="header" className="text-[22px] font-bold tracking-tight text-ink">
            {section.title}
          </Text>
          <Text className="mb-4 mt-2 text-[15px] leading-[22px] text-ink">{section.method}</Text>
          <CitationList citations={section.citations} />
          <Text className="mt-3 text-[13px] leading-[18px] text-muted">
            Estimates for healthy adults, not medical advice. Check with a doctor before big changes to how you eat.
          </Text>
        </ScrollView>
        <Button title="Done" variant="secondary" className="mt-4" onPress={() => setOpen(false)} />
      </BottomSheet>
    </>
  );
}

/** "How Weight Class works out your numbers": the Sources screen, opened at a topic. */
export function openSources(topic?: SourceTopic) {
  router.push(topic ? { pathname: '/sources', params: { topic } } : '/sources');
}

/** A link to the whole Sources screen, for screens that aren't modals or sheets (Home, goals, onboarding). */
export function SourcesScreenLink({ topic, label = 'Sources', className }: Partial<SourcesLinkProps>) {
  return (
    <Pressable accessibilityRole="link" hitSlop={8} onPress={() => openSources(topic)} className={cn(LINK_CLASS, className)}>
      <LinkText label={label} />
    </Pressable>
  );
}
