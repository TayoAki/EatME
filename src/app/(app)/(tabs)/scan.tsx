import { router } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnalysisView, type MealInput } from '@/components/scan/analysis-view';
import { CameraCapture, type Photo, type ScanMode } from '@/components/scan/camera-capture';
import { DescribeMeal } from '@/components/scan/describe-meal';
import { FoodSearchView } from '@/components/scan/food-search-view';
import { PhotoPreview } from '@/components/scan/photo-preview';
import { ProductView } from '@/components/scan/product-view';
import { useBilling, useFeatures } from '@/lib/queries';
import { MAX_MEAL_PHOTOS, type PhotoMode } from '@/shared/meals';

/** Height of the floating native tab bar above the home indicator. */
const TAB_BAR_SPACE = 96;

type Step =
  | { name: 'capture' }
  | { name: 'preview'; photos: Photo[]; mode: PhotoMode; note: string }
  | { name: 'describe'; text?: string }
  | { name: 'product'; code: string }
  | { name: 'search' }
  | { name: 'analyzing'; input: MealInput; key: number };

export default function ScanScreen() {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState<Step>({ name: 'capture' });
  const [mode, setMode] = useState<ScanMode>('meal');
  // Steer the AI: the photos (and note) so far while the camera takes another angle of the same meal.
  const [adding, setAdding] = useState<{ photos: Photo[]; note: string } | null>(null);
  const features = useFeatures();
  const payments = !!features.data?.payments;
  const billing = useBilling(payments);
  const multiPhoto = !!features.data?.multiPhoto;
  const addNeedsPremium = payments && !billing.data?.premium;
  const bottomSpace = insets.bottom + TAB_BAR_SPACE;
  const analyze = (input: MealInput) => setStep({ name: 'analyzing', input, key: Date.now() });
  const capture = () => setStep({ name: 'capture' });

  if (step.name === 'preview') {
    const { photos } = step;
    return (
      <PhotoPreview
        photos={photos}
        mode={step.mode}
        note={step.note}
        onNoteChange={(note) => setStep({ ...step, note })}
        bottomSpace={bottomSpace}
        onRetake={capture}
        addNeedsPremium={addNeedsPremium}
        onAddPhoto={
          step.mode === 'meal' && multiPhoto && photos.length < MAX_MEAL_PHOTOS
            ? () => {
                if (addNeedsPremium) {
                  router.push('/premium');
                  return;
                }
                setMode('meal');
                setAdding({ photos, note: step.note });
                capture();
              }
            : undefined
        }
        onRemovePhoto={(index) => {
          const next = photos.filter((_, i) => i !== index);
          if (next.length === 0) capture();
          else setStep({ ...step, photos: next });
        }}
        onAnalyze={() => analyze({ kind: 'photo', photos, mode: step.mode, note: step.note.trim() })}
      />
    );
  }

  if (step.name === 'describe') {
    return (
      <DescribeMeal
        initialText={step.text}
        bottomSpace={bottomSpace}
        onBack={capture}
        onSubmit={(text) => analyze({ kind: 'text', text })}
      />
    );
  }

  if (step.name === 'product') {
    return (
      <ProductView
        code={step.code}
        bottomSpace={bottomSpace}
        onBack={capture}
        onScanLabel={() => {
          setMode('label');
          capture();
        }}
        onSearch={() => setStep({ name: 'search' })}
        onLog={(product, grams) => analyze({ kind: 'barcode', product, grams })}
      />
    );
  }

  if (step.name === 'search') {
    return (
      <FoodSearchView bottomSpace={bottomSpace} onBack={capture} onLog={(food, grams) => analyze({ kind: 'food', food, grams })} />
    );
  }

  if (step.name === 'analyzing') {
    const { input } = step;
    return (
      <AnalysisView
        key={step.key}
        input={input}
        bottomSpace={bottomSpace}
        onScanAnother={() =>
          setStep(input.kind === 'text' ? { name: 'describe' } : input.kind === 'food' ? { name: 'search' } : { name: 'capture' })
        }
        onEdit={input.kind === 'text' ? () => setStep({ name: 'describe', text: input.text }) : undefined}
        onDone={() => {
          capture();
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
      onSearch={() => setStep({ name: 'search' })}
      onBarcode={(code) => setStep({ name: 'product', code })}
      adding={
        adding
          ? {
              count: adding.photos.length,
              onDone: () => {
                setStep({ name: 'preview', photos: adding.photos, mode: 'meal', note: adding.note });
                setAdding(null);
              },
            }
          : undefined
      }
      onPhoto={(photo) => {
        if (adding) {
          setStep({ name: 'preview', photos: [...adding.photos, photo], mode: 'meal', note: adding.note });
          setAdding(null);
        } else {
          setStep({ name: 'preview', photos: [photo], mode: mode === 'label' ? 'label' : 'meal', note: '' });
        }
      }}
    />
  );
}
