import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Stethoscope } from 'lucide-react-native';
import { useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { CitationList } from '@/components/sources';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { isSourceTopic, SOURCES } from '@/lib/sources';

/**
 * Sources and citations (Apple 1.4.1): how every number is worked out, with links to the research,
 * guidelines and databases. Open to everyone (onboarding links here before sign-up); `?topic=`
 * scrolls to one section.
 */
export default function SourcesScreen() {
  const { topic } = useLocalSearchParams<{ topic?: string }>();
  const scrollRef = useRef<ScrollView>(null);
  const scrolled = useRef(false);
  const target = isSourceTopic(topic) ? topic : null;

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton
          accessibilityLabel="Go back"
          icon={<ArrowLeft size={20} color={colors.ink} />}
          onPress={() => router.back()}
        />
      </View>
      <ScrollView ref={scrollRef} contentContainerClassName="gap-8 px-5 pb-10" showsVerticalScrollIndicator={false}>
        <View className="gap-4">
          <View>
            <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
              Sources
            </Text>
            <Text className="mt-1 text-[15px] leading-[21px] text-muted">
              How Weight Class works out its numbers, with the research, guidelines and databases behind each one.
              Tap a source to read it.
            </Text>
          </View>
          <View className="flex-row gap-3 rounded-2xl border border-line p-3.5">
            <Stethoscope size={18} color={colors.ink} strokeWidth={1.8} style={{ marginTop: 1 }} />
            <Text className="flex-1 text-[14px] leading-5 text-ink">
              These are general estimates for healthy adults, not medical advice. Check with a doctor before big changes
              to how you eat, especially if you&apos;re pregnant or breastfeeding, have a health condition such as
              diabetes, take medicine such as a GLP-1, or have had an eating disorder.
            </Text>
          </View>
        </View>

        {SOURCES.map((section) => (
          <View
            key={section.topic}
            className="gap-3"
            onLayout={(event) => {
              if (section.topic !== target || scrolled.current) return;
              scrolled.current = true;
              scrollRef.current?.scrollTo({ y: Math.max(0, event.nativeEvent.layout.y - 12), animated: false });
            }}>
            <View>
              <Text accessibilityRole="header" className="text-[20px] font-bold tracking-tight text-ink">
                {section.title}
              </Text>
              <Text className="mt-1.5 text-[15px] leading-[22px] text-ink">{section.method}</Text>
            </View>
            <CitationList citations={section.citations} />
          </View>
        ))}

        <Text className="text-[13px] leading-[18px] text-muted">Sources checked October 2026.</Text>
      </ScrollView>
    </Screen>
  );
}
