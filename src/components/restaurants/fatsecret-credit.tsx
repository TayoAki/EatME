import { Text, View } from 'react-native';

import { cn } from '@/lib/cn';
import { openLink } from '@/lib/links';
import { FATSECRET_CREDIT, FATSECRET_TERMS_URL, FATSECRET_URL } from '@/shared/restaurants';

/**
 * FatSecret's attribution, required wherever their data is shown (their wording, linking to their
 * site). `terms` adds the link to their terms, which people agree to by using restaurant menus.
 */
export function FatSecretCredit({
  terms = false,
  align = 'center',
  className,
}: {
  terms?: boolean;
  align?: 'center' | 'start';
  className?: string;
}) {
  return (
    <View className={cn('flex-row flex-wrap items-center gap-x-1.5', align === 'center' ? 'justify-center' : 'justify-start', className)}>
      <Text accessibilityRole="link" onPress={() => void openLink(FATSECRET_URL)} className="text-[12px] text-muted underline">
        {FATSECRET_CREDIT}
      </Text>
      {terms ? (
        <>
          <Text className="text-[12px] text-muted">·</Text>
          <Text accessibilityRole="link" onPress={() => void openLink(FATSECRET_TERMS_URL)} className="text-[12px] text-muted underline">
            fatsecret terms
          </Text>
        </>
      ) : null}
    </View>
  );
}
