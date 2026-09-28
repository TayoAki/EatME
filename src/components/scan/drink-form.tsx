import { useState, type ReactNode } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { NumberStepper } from '@/components/ui/number-stepper';
import { colors } from '@/constants/colors';
import { useCalmMode } from '@/lib/calm';
import { useProfile } from '@/lib/queries';
import {
  DRINK_LIMITS,
  DRINK_TYPES,
  DRINKS,
  drinkNumbers,
  MIXER_INFO,
  MIXERS,
  ML_PER_FL_OZ,
  SIZES,
  sizeLabel,
  sizeMl,
  standardDrinksText,
  volumeText,
  type DrinkBody,
  type DrinkSize,
  type DrinkType,
  type Mixer,
} from '@/shared/drinks';
import type { UnitSystem } from '@/shared/onboarding';

/** Digits and one decimal point (a comma counts as one), at most 5 characters. */
const cleanNumber = (text: string) =>
  text
    .replace(',', '.')
    .replace(/[^0-9.]/g, '')
    .replace(/(\..*)\./g, '$1')
    .slice(0, 5);
const parse = (text: string) => (text === '' || text === '.' ? null : Number(text));

/** Whole drinks, with a half below one: ½ → 1 → 2 and back (the stepper moves by 1 within 0.5–12). */
const stepCount = (current: number, next: number) => (next > current && current < 1 ? 1 : next);

/** One drink's volume from a custom amount typed in the person's unit (oz or ml). */
const customMl = (text: string, unit: UnitSystem) => {
  const value = parse(text);
  if (value === null) return null;
  return unit === 'imperial' ? Math.round(value * ML_PER_FL_OZ) : value;
};

/** What was logged, in words, for the result screen: "Can · 12 oz · 5% ABV". */
export function drinkDetail(drink: DrinkBody, unit: UnitSystem, size: DrinkSize | 'custom') {
  const strength = `${drink.abv}% ABV`;
  if (drink.type === 'cocktail') {
    const shots = drink.shots ?? 1;
    const mixer = drink.mixer && drink.mixer !== 'none' ? MIXER_INFO[drink.mixer].title.toLowerCase() : 'no mixer';
    return `${shots} ${shots === 1 ? 'shot' : 'shots'} · ${mixer} · ${strength}`;
  }
  return `${size === 'custom' ? volumeText(drink.volumeMl, unit) : sizeLabel(size, unit)} · ${strength}`;
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <View>
      <Text className="mb-2 text-[14px] font-semibold text-ink">{title}</Text>
      <View className="flex-row flex-wrap gap-2">{children}</View>
    </View>
  );
}

type DrinkFormProps = {
  onLog: (drink: DrinkBody, detail: string) => void;
};

/**
 * Scan → Search foods → Drinks: type, size, strength and how many. The numbers shown are a preview;
 * the server works them out again from what was picked. No tips and no judgment, just the numbers.
 */
export function DrinkForm({ onLog }: DrinkFormProps) {
  const calm = useCalmMode();
  const unit = useProfile()?.unitSystem ?? 'metric';
  const [type, setType] = useState<DrinkType>('beer');
  const [size, setSize] = useState<DrinkSize | 'custom'>(DRINKS.beer.size);
  const [custom, setCustom] = useState('');
  const [abv, setAbv] = useState(String(DRINKS.beer.abv));
  const [count, setCount] = useState(1);
  const [shots, setShots] = useState(1);
  const [mixer, setMixer] = useState<Mixer>('none');
  const cocktail = type === 'cocktail';

  const pickType = (next: DrinkType) => {
    setType(next);
    setSize(DRINKS[next].size);
    setAbv(String(DRINKS[next].abv));
  };

  // A cocktail's spirit is poured in shots; everything else is the size picked or typed.
  const volumeMl = cocktail ? sizeMl('shot', unit) : size === 'custom' ? customMl(custom, unit) : sizeMl(size, unit);
  const strength = parse(abv);
  const volumeOk = volumeMl !== null && volumeMl >= DRINK_LIMITS.volumeMl.min && volumeMl <= DRINK_LIMITS.volumeMl.max;
  const strengthOk = strength !== null && strength >= DRINK_LIMITS.abv.min && strength <= DRINK_LIMITS.abv.max;
  const drink: DrinkBody | null =
    volumeOk && strengthOk ? { type, volumeMl: volumeMl!, abv: strength!, count, ...(cocktail ? { shots, mixer } : {}) } : null;
  const numbers = drink ? drinkNumbers(drink) : null;
  const unitLabel = unit === 'imperial' ? 'oz' : 'ml';
  const volumeLimits =
    unit === 'imperial'
      ? `${Math.ceil((DRINK_LIMITS.volumeMl.min / ML_PER_FL_OZ) * 10) / 10}–${Math.floor(DRINK_LIMITS.volumeMl.max / ML_PER_FL_OZ)} oz`
      : `${DRINK_LIMITS.volumeMl.min}–${DRINK_LIMITS.volumeMl.max} ml`;

  return (
    <View className="flex-1">
      <ScrollView
        className="flex-1"
        contentContainerClassName="gap-4 pb-4 pt-4"
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets
        showsVerticalScrollIndicator={false}>
        <Group title="Type">
          {DRINK_TYPES.map((value) => (
            <Chip key={value} label={DRINKS[value].title} selected={type === value} onPress={() => pickType(value)} />
          ))}
        </Group>

        {cocktail ? (
          <>
            <NumberStepper label="Shots of spirit" hint={`${volumeText(sizeMl('shot', unit), unit)} each`} value={shots} min={1} max={3} onChange={setShots} />
            <Group title="Mixer">
              {MIXERS.map((value) => (
                <Chip key={value} label={MIXER_INFO[value].title} selected={mixer === value} onPress={() => setMixer(value)} />
              ))}
            </Group>
          </>
        ) : (
          <View>
            <Group title="Size">
              {SIZES.map((value) => (
                <Chip key={value} label={sizeLabel(value, unit)} selected={size === value} onPress={() => setSize(value)} />
              ))}
              <Chip label="Custom" selected={size === 'custom'} onPress={() => setSize('custom')} />
            </Group>
            {size === 'custom' ? (
              <View className="mt-3 h-14 flex-row items-center rounded-field border border-line px-4">
                <Text className="flex-1 text-[15px] text-ink">One drink</Text>
                <TextInput
                  accessibilityLabel={`One drink, in ${unit === 'imperial' ? 'ounces' : 'millilitres'}`}
                  value={custom}
                  onChangeText={(text) => setCustom(cleanNumber(text))}
                  keyboardType="decimal-pad"
                  placeholder="0"
                  placeholderTextColor={colors.faint}
                  autoFocus
                  className="w-24 text-right text-[18px] font-semibold text-ink"
                />
                <Text className="ml-1.5 text-[15px] text-muted">{unitLabel}</Text>
              </View>
            ) : null}
            {size === 'custom' && custom !== '' && !volumeOk ? (
              <Text className="mt-1.5 text-[13px] text-danger">Enter between {volumeLimits}.</Text>
            ) : null}
          </View>
        )}

        <NumberStepper
          label="How many"
          value={count}
          min={DRINK_LIMITS.count.min}
          max={DRINK_LIMITS.count.max}
          onChange={(next) => setCount(stepCount(count, next))}
        />

        <View>
          <View className="h-14 flex-row items-center rounded-field border border-line px-4">
            <Text className="flex-1 text-[15px] text-ink">Strength</Text>
            <TextInput
              accessibilityLabel="Strength, percent alcohol by volume"
              value={abv}
              onChangeText={(text) => setAbv(cleanNumber(text))}
              keyboardType="decimal-pad"
              selectTextOnFocus
              className="w-20 text-right text-[18px] font-semibold text-ink"
            />
            <Text className="ml-1.5 text-[15px] text-muted">% ABV</Text>
          </View>
          {!strengthOk ? (
            <Text className="mt-1.5 text-[13px] text-danger">
              Enter a strength between {DRINK_LIMITS.abv.min} and {DRINK_LIMITS.abv.max}%.
            </Text>
          ) : null}
        </View>

      </ScrollView>

      <View className="gap-3 border-t border-line pt-3">
        {numbers ? (
          <Text accessibilityLiveRegion="polite" className="text-center text-[15px] text-ink">
            {calm ? standardDrinksText(numbers.standardDrinks) : `${numbers.calories} kcal · ${standardDrinksText(numbers.standardDrinks)}`}
          </Text>
        ) : null}
        <Button
          title="Log it"
          disabled={!drink}
          onPress={() => {
            if (drink) onLog(drink, drinkDetail(drink, unit, cocktail ? 'shot' : size));
          }}
        />
      </View>
    </View>
  );
}
