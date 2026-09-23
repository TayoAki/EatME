import { router } from 'expo-router';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AnalysisView } from '@/components/scan/analysis-view';
import { CameraCapture, type Photo } from '@/components/scan/camera-capture';
import { PhotoPreview } from '@/components/scan/photo-preview';

/** Height of the floating native tab bar above the home indicator. */
const TAB_BAR_SPACE = 96;

type Step = { name: 'capture' } | { name: 'preview'; photo: Photo } | { name: 'analyzing'; photo: Photo; key: number };

export default function ScanScreen() {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState<Step>({ name: 'capture' });
  const bottomSpace = insets.bottom + TAB_BAR_SPACE;

  if (step.name === 'preview') {
    return (
      <PhotoPreview
        photo={step.photo}
        bottomSpace={bottomSpace}
        onRetake={() => setStep({ name: 'capture' })}
        onAnalyze={() => setStep({ name: 'analyzing', photo: step.photo, key: Date.now() })}
      />
    );
  }

  if (step.name === 'analyzing') {
    return (
      <AnalysisView
        key={step.key}
        photo={step.photo}
        bottomSpace={bottomSpace}
        onScanAnother={() => setStep({ name: 'capture' })}
        onDone={() => {
          setStep({ name: 'capture' });
          router.navigate('/');
        }}
      />
    );
  }

  return <CameraCapture bottomSpace={bottomSpace} onPhoto={(photo) => setStep({ name: 'preview', photo })} />;
}
