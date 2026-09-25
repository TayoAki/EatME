import { Button, Gauge, Text, VStack } from '@expo/ui/swift-ui';
import {
  buttonStyle,
  containerBackground,
  font,
  foregroundStyle,
  gaugeStyle,
  monospacedDigit,
  tint,
} from '@expo/ui/swift-ui/modifiers';
import { createWidget, type WidgetEnvironment } from 'expo-widgets';

/** Everything the widget shows comes in through its props (it runs outside the app). */
export type WaterWidgetProps = {
  /** Saved in EatME. */
  totalMl: number;
  /** Added with the widget's button and not saved yet: the app saves it when it opens. */
  pendingMl: number;
  goalMl: number;
  /** One tap adds this much: 250 ml, or 8 fl oz in imperial. */
  glassMl: number;
  imperial: boolean;
};

/**
 * iOS home screen / Lock Screen widget: today's water and a one-tap glass (iOS 17+). The
 * `'widget'` directive compiles this into its own bundle: no imports or outside values inside.
 */
const WaterWidget = (props: WaterWidgetProps, environment: WidgetEnvironment) => {
  'widget';
  const total = props.totalMl + props.pendingMl;
  const ratio = props.goalMl > 0 ? Math.min(1, total / props.goalMl) : 0;
  const volume = (ml: number) =>
    props.imperial
      ? `${Math.round(ml / 29.5735)} fl oz`
      : ml >= 1000
        ? `${Math.round(ml / 50) / 20} L`
        : `${Math.round(ml)} ml`;

  if (environment.widgetFamily === 'accessoryCircular') {
    return (
      <Gauge value={ratio} modifiers={[gaugeStyle('circularCapacity')]}>
        <Text modifiers={[font({ size: 12, weight: 'semibold' })]}>{`${Math.round(ratio * 100)}%`}</Text>
      </Gauge>
    );
  }

  return (
    <VStack alignment="leading" spacing={4} modifiers={[containerBackground('#FFFFFF', 'widget')]}>
      <Text modifiers={[font({ size: 13, weight: 'semibold' }), foregroundStyle('#14B8A6')]}>Water</Text>
      <Text modifiers={[font({ size: 28, weight: 'bold' }), monospacedDigit(), foregroundStyle('#111111')]}>
        {volume(total)}
      </Text>
      <Text modifiers={[font({ size: 12 }), foregroundStyle('#8E8E93')]}>{`of ${volume(props.goalMl)}`}</Text>
      <Gauge value={ratio} modifiers={[gaugeStyle('linearCapacity'), tint('#14B8A6')]} />
      <Button
        label={`+ ${volume(props.glassMl)}`}
        target="add-glass"
        onPress={() => ({ ...props, pendingMl: props.pendingMl + props.glassMl })}
        modifiers={[buttonStyle('borderedProminent'), tint('#111111'), font({ size: 13, weight: 'semibold' })]}
      />
    </VStack>
  );
};

export default createWidget('WaterWidget', WaterWidget);
