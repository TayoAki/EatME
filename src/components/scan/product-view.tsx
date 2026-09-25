import { ArrowLeft, Flame, PackageSearch, TriangleAlert } from 'lucide-react-native';
import { useState, type ReactNode } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { IconButton } from '@/components/ui/icon-button';
import { ShowNumbers } from '@/components/ui/show-numbers';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { useCalmMode } from '@/lib/calm';
import { useProduct } from '@/lib/queries';
import { distinctBrand, type Product } from '@/shared/products';

import { MacroBox } from './analysis-view';

type ProductViewProps = {
  code: string;
  bottomSpace: number;
  /** Back to the camera to scan another barcode. */
  onBack: () => void;
  /** Photograph the nutrition label instead (products without data). */
  onScanLabel: () => void;
  onSearch: () => void;
  onLog: (product: Product, grams: number) => void;
};

const ATTRIBUTION: Record<Product['source'], string> = {
  off: 'Product data from Open Food Facts (openfoodfacts.org), available under the Open Database License.',
  usda: 'Product data from USDA FoodData Central, Branded Foods.',
};

function Message({ icon, title, text, children }: { icon: ReactNode; title: string; text: string; children: ReactNode }) {
  return (
    <View className="flex-1 px-5">
      <View className="flex-1 items-center justify-center">
        {icon}
        <Text className="mt-4 text-center text-[24px] font-bold tracking-tight text-ink">{title}</Text>
        <Text className="mt-2 text-center text-[16px] leading-[22px] text-muted">{text}</Text>
      </View>
      <View className="gap-2">{children}</View>
    </View>
  );
}

/** How much of a found product, with its label's numbers for that amount. */
function ProductAmount({ product, bottomSpace, onLog }: { product: Product; bottomSpace: number; onLog: (grams: number) => void }) {
  const [text, setText] = useState(String(Math.round(product.servingGrams ?? 100)));
  const [revealed, setRevealed] = useState(false);
  const hideNumbers = useCalmMode() && !revealed;
  const grams = Number(text);
  const valid = Number.isFinite(grams) && grams >= 1 && grams <= 3000;
  const n = product.nutrients;
  const at = (value: number | undefined) => Math.round(((value ?? 0) * (valid ? grams : 0)) / 100);
  const amounts: [string, number][] = [];
  if (product.servingGrams) amounts.push([`1 serving · ${Math.round(product.servingGrams)} g`, Math.round(product.servingGrams)]);
  if (product.packageGrams && product.packageGrams <= 3000) {
    amounts.push([`Whole pack · ${Math.round(product.packageGrams)} g`, Math.round(product.packageGrams)]);
  }
  amounts.push(['100 g', 100]);

  return (
    <>
      <ScrollView contentContainerClassName="px-5 pb-6" keyboardShouldPersistTaps="handled">
        <Text accessibilityRole="header" className="text-[28px] font-bold leading-[34px] tracking-tight text-ink">
          {product.name}
        </Text>
        {distinctBrand(product) ? <Text className="mt-1 text-[16px] text-muted">{distinctBrand(product)}</Text> : null}
        {product.servingSize ? <Text className="mt-1 text-[14px] text-muted">Serving: {product.servingSize}</Text> : null}

        <View className="mt-5 h-20 flex-row items-center justify-center gap-2 rounded-card bg-surface px-5">
          <TextInput
            accessibilityLabel="Grams"
            value={text}
            onChangeText={(next) => setText(next.replace(/[^0-9]/g, '').slice(0, 4))}
            keyboardType="number-pad"
            selectTextOnFocus
            className="min-w-[80px] text-center text-[40px] font-bold tracking-tight text-ink"
          />
          <Text className="text-[20px] font-semibold text-muted">g</Text>
        </View>
        {!valid ? <Text className="mt-2 text-center text-[14px] text-muted">Between 1 and 3,000 g</Text> : null}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" contentContainerClassName="gap-2">
          {amounts.map(([label, value]) => (
            <Chip key={label} label={label} selected={grams === value} onPress={() => setText(String(value))} />
          ))}
        </ScrollView>

        <View className="mt-5 rounded-card border border-line p-5">
          {hideNumbers ? (
            <ShowNumbers onPress={() => setRevealed(true)} />
          ) : (
            <>
              <View className="flex-row items-end gap-2">
                <Flame size={30} color={colors.ink} fill={colors.ink} />
                <Text className="text-[44px] font-bold leading-[48px] tracking-tighter text-ink">{at(n.calories)}</Text>
                <Text className="mb-1.5 text-[16px] text-muted">calories</Text>
              </View>
              <View className="mt-5 flex-row gap-2.5">
                <MacroBox label="Protein" value={at(n.protein)} color={colors.protein} />
                <MacroBox label="Carbs" value={at(n.carbs)} color={colors.carbs} />
                <MacroBox label="Fats" value={at(n.fat)} color={colors.fat} />
              </View>
            </>
          )}
          {n.fiber !== undefined ? (
            <View className="mt-4 flex-row items-center gap-2">
              <View style={{ backgroundColor: colors.fiber }} className="h-2.5 w-2.5 rounded-full" />
              <Text className="text-[15px] text-ink">Fiber {at(n.fiber)} g</Text>
            </View>
          ) : null}
        </View>

        <Text className="mt-3 px-1 text-[12px] leading-4 text-muted">
          {hideNumbers
            ? ''
            : `Per 100 g: ${Math.round(n.calories ?? 0)} kcal · protein ${n.protein} g · carbs ${n.carbs} g · fat ${n.fat} g. `}
          {ATTRIBUTION[product.source]}
        </Text>
      </ScrollView>
      <View className="px-5 pt-3" style={{ paddingBottom: bottomSpace }}>
        <Button title="Log it" disabled={!valid} onPress={() => onLog(grams)} />
      </View>
    </>
  );
}

/** A scanned (or typed) barcode: the product's label numbers, or what to do when there are none. */
export function ProductView({ code, bottomSpace, onBack, onScanLabel, onSearch, onLog }: ProductViewProps) {
  const insets = useSafeAreaInsets();
  const lookup = useProduct(code);
  const product = lookup.data?.product;
  const notFound = lookup.error instanceof ApiError && lookup.error.status === 404;
  const actions = (
    <>
      <Button title="Scan the nutrition label" onPress={onScanLabel} />
      <Button title="Search foods" variant="secondary" onPress={onSearch} />
    </>
  );

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-canvas"
      style={{ paddingTop: insets.top }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="h-14 justify-center px-5">
        <IconButton accessibilityLabel="Back to the camera" icon={<ArrowLeft size={20} color={colors.ink} />} onPress={onBack} />
      </View>
      {lookup.isPending ? (
        <View className="flex-1 items-center justify-center gap-3">
          <ActivityIndicator color={colors.ink} />
          <Text className="text-[16px] text-muted">Looking up {code}…</Text>
        </View>
      ) : notFound ? (
        <View className="flex-1" style={{ paddingBottom: bottomSpace }}>
          <Message
            icon={<PackageSearch size={36} color={colors.ink} strokeWidth={1.6} />}
            title="We couldn't find this product"
            text={`Nobody has added barcode ${code} yet. Photograph its nutrition label, or search for a similar food.`}>
            {actions}
          </Message>
        </View>
      ) : lookup.isError ? (
        <View className="flex-1" style={{ paddingBottom: bottomSpace }}>
          <Message
            icon={<TriangleAlert size={36} color={colors.danger} />}
            title="We couldn't look this up"
            text={lookup.error.message}>
            <Button title="Try again" onPress={() => void lookup.refetch()} />
            <Button title="Scan another barcode" variant="secondary" onPress={onBack} />
          </Message>
        </View>
      ) : product && !product.complete ? (
        <View className="flex-1" style={{ paddingBottom: bottomSpace }}>
          <Message
            icon={<PackageSearch size={36} color={colors.ink} strokeWidth={1.6} />}
            title={product.name}
            text="This product has no nutrition facts yet. Photograph its label and EatME reads the numbers.">
            {actions}
          </Message>
        </View>
      ) : product ? (
        <ProductAmount product={product} bottomSpace={bottomSpace} onLog={(grams) => onLog(product, grams)} />
      ) : null}
    </KeyboardAvoidingView>
  );
}
