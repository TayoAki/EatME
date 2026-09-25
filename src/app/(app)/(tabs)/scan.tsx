import { router } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnalysisView, type MealInput } from '@/components/scan/analysis-view';
import { CameraCapture, type Photo } from '@/components/scan/camera-capture';
import { DescribeMeal } from '@/components/scan/describe-meal';
import { PhotoPreview } from '@/components/scan/photo-preview';
import type { PhotoMode } from '@/shared/meals';

/** Height of the floating native tab bar above the home indicator. */
const TAB_BAR_SPACE = 96;

type Step =
  | { name: 'capture' }
  | { name: 'preview'; photo: Photo }
  | { name: 'describe'; text?: string }
  | { name: 'analyzing'; input: MealInput; key: number };

export default function ScanScreen() {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState<Step>({ name: 'capture' });
  const [mode, setMode] = useState<PhotoMode>('meal');
  const bottomSpace = insets.bottom + TAB_BAR_SPACE;
  const analyze = (input: MealInput) => setStep({ name: 'analyzing', input, key: Date.now() });

  if (step.name === 'preview') {
    return (
      <PhotoPreview
        photo={step.photo}
        mode={mode}
        bottomSpace={bottomSpace}
        onRetake={() => setStep({ name: 'capture' })}
        onAnalyze={(note) => analyze({ kind: 'photo', photo: step.photo, mode, note })}
      />
    );
  }

  if (step.name === 'describe') {
    return (
      <DescribeMeal
        initialText={step.text}
        bottomSpace={bottomSpace}
        onBack={() => setStep({ name: 'capture' })}
        onSubmit={(text) => analyze({ kind: 'text', text })}
      />
    );
  }

  if (step.name === 'analyzing') {
    const { input } = step;
    return (
      <AnalysisView
        key={step.key}
        input={input}
        bottomSpace={bottomSpace}
        onScanAnother={() => setStep(input.kind === 'text' ? { name: 'describe' } : { name: 'capture' })}
        onEdit={input.kind === 'text' ? () => setStep({ name: 'describe', text: input.text }) : undefined}
        onDone={() => {
          setStep({ name: 'capture' });
          router.navigate('/');
        }}
      />
    );
  }

  return (
    <CameraCapture
      bottomSpace={bottomSpace}
      mode={mode}
      onModeChange={setMode}
      onDescribe={() => setStep({ name: 'describe' })}
      onPhoto={(photo) => setStep({ name: 'preview', photo })}
    />
  );
}
