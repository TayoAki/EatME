import * as Sentry from '@sentry/react-native';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AiConsentView } from '@/components/ai-consent-view';
import { DishConfirm } from '@/components/menu/dish-confirm';
import { MenuPages } from '@/components/menu/menu-pages';
import { AnalysisView, type MealInput } from '@/components/scan/analysis-view';
import { CameraCapture, type Photo, type ScanMode } from '@/components/scan/camera-capture';
import { DescribeMeal } from '@/components/scan/describe-meal';
import { FoodSearchView, type SearchTab } from '@/components/scan/food-search-view';
import { PhotoPreview } from '@/components/scan/photo-preview';
import { ProductView } from '@/components/scan/product-view';
import { colors } from '@/constants/colors';
import { ApiError } from '@/lib/api';
import { notify } from '@/lib/confirm';
import { allowDrinksInHealth } from '@/lib/health';
import { readMenuOnDevice, readsMenusOnDevice } from '@/lib/menu-text';
import { useBilling, useCreateMenuScan, useFeatures, useProfile, useUpdateProfile } from '@/lib/queries';
import { DEFAULT_AI_PROVIDERS } from '@/shared/features';
import { MAX_MEAL_PHOTOS, type PhotoMode } from '@/shared/meals';
import type { DishLine } from '@/shared/menus';
import { MENU_CONSENT_VERSION } from '@/shared/onboarding';

/** Height of the floating native tab bar above the home indicator. */
const TAB_BAR_SPACE = 96;

type Step =
  | { name: 'capture' }
  | { name: 'preview'; photos: Photo[]; mode: PhotoMode; note: string }
  | { name: 'describe'; text?: string }
  | { name: 'product'; code: string }
  | { name: 'search'; tab?: SearchTab }
  | { name: 'analyzing'; input: MealInput; key: number }
  // What to order (v2.5): a menu's pages, read on the phone, then the dish lines to confirm.
  | { name: 'menu-pages'; photos: Photo[] }
  | { name: 'menu-reading'; photos: Photo[] }
  | { name: 'menu-confirm'; photos: Photo[]; lines: DishLine[]; key: number };

/** What goes to the server for a menu: the confirmed dish lines, or the photos when the phone can't read them. */
type MenuInput = { lines: DishLine[] } | { photos: Photo[] };

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
  const profile = useProfile();
  const updateProfile = useUpdateProfile();
  // What to order: Menu mode, the menu's pages while the camera takes the next one, and its name.
  const menus = !!features.data?.whatToOrder;
  const consentVersion = menus ? MENU_CONSENT_VERSION : 1;
  const [addingPages, setAddingPages] = useState<Photo[] | null>(null);
  const [menuName, setMenuName] = useState('');
  const createMenuScan = useCreateMenuScan();
  const reading = useRef(0);
  // The free try was another menu: a new menu needs Premium (WHAT-TO-ORDER.md §9).
  const menuNeedsPremium = payments && !!billing.data && !billing.data.premium && billing.data.whatToOrderTry !== null;
  // A photo, label or description waiting for AI consent (Apple 5.1.2(i)); barcodes, food search
  // and quick add never need it.
  const [consentFor, setConsentFor] = useState<MealInput | null>(null);
  // A menu waiting for consent to the wording that names menus (`MENU_CONSENT_VERSION`).
  const [menuConsentFor, setMenuConsentFor] = useState<MenuInput | null>(null);
  const startAnalysis = (input: MealInput) => setStep({ name: 'analyzing', input, key: Date.now() });
  const analyze = (input: MealInput) => {
    const usesAi = input.kind === 'photo' || input.kind === 'text';
    if (usesAi && !profile?.aiConsent) setConsentFor(input);
    else startAnalysis(input);
  };
  const capture = () => setStep({ name: 'capture' });

  const changeMode = (next: ScanMode) => {
    if (next === 'menu' && menuNeedsPremium) {
      router.push('/premium');
      return;
    }
    setMode(next);
  };

  /** Sends the menu; the list opens on its own screen while the server reads it. */
  const sendMenu = (input: MenuInput) =>
    createMenuScan.mutate(
      { ...input, restaurant: menuName.trim() || undefined },
      {
        onSuccess: (scan) => {
          // No menu text or numbers in diagnostics.
          Sentry.logger.info('Menu sent', { kind: 'lines' in input ? 'lines' : 'photos', count: 'lines' in input ? input.lines.length : input.photos.length });
          router.push({ pathname: '/menu/[id]', params: { id: scan.id } });
          setMenuName('');
          capture();
        },
        onError: (error) => {
          if (error instanceof ApiError && error.status === 402) router.push('/premium');
          else if (error instanceof ApiError && error.code === 'ai_consent_required') setMenuConsentFor(input);
          else {
            Sentry.logger.error('Sending a menu failed', { error: error.message });
            notify("We couldn't send the menu", error.message);
          }
        },
      },
    );
  const requestMenu = (input: MenuInput) => {
    if (!profile?.menuConsent) setMenuConsentFor(input);
    else sendMenu(input);
  };
  /** On an iPhone the phone reads the text (only the text is sent); elsewhere the photos go. */
  const readMenu = async (photos: Photo[]) => {
    if (!readsMenusOnDevice) {
      requestMenu({ photos });
      return;
    }
    const attempt = ++reading.current;
    setStep({ name: 'menu-reading', photos });
    const lines = await readMenuOnDevice(photos);
    if (attempt !== reading.current) return;
    // Nothing read: the confirm step says so, to retake or type the dishes. The photo stays on the phone.
    setStep({ name: 'menu-confirm', photos, lines: lines ?? [], key: Date.now() });
  };

  if (menuConsentFor) {
    return (
      <AiConsentView
        context="menu"
        menus
        providers={features.data?.aiProviders ?? DEFAULT_AI_PROVIDERS}
        allowing={updateProfile.isPending}
        bottomSpace={bottomSpace}
        onAllow={() =>
          updateProfile.mutate(
            { aiConsent: true, aiConsentVersion: MENU_CONSENT_VERSION },
            {
              onSuccess: () => {
                setMenuConsentFor(null);
                sendMenu(menuConsentFor);
              },
              onError: (error) => notify("We couldn't save that", error.message),
            },
          )
        }
        // Back to the dishes or the pages, as they were: nothing is sent.
        onDecline={() => setMenuConsentFor(null)}
      />
    );
  }

  if (consentFor) {
    return (
      <AiConsentView
        context="scan"
        menus={menus}
        providers={features.data?.aiProviders ?? DEFAULT_AI_PROVIDERS}
        allowing={updateProfile.isPending}
        bottomSpace={bottomSpace}
        onAllow={() =>
          updateProfile.mutate(
            { aiConsent: true, aiConsentVersion: consentVersion },
            {
              onSuccess: () => {
                setConsentFor(null);
                startAnalysis(consentFor);
              },
              onError: (error) => notify("We couldn't save that", error.message),
            },
          )
        }
        onDecline={() => {
          // Back to the description or the photos, as they were: nothing is sent.
          setConsentFor(null);
          if (consentFor.kind === 'text') setStep({ name: 'describe', text: consentFor.text });
          else if (consentFor.kind === 'photo') {
            setStep({ name: 'preview', photos: consentFor.photos, mode: consentFor.mode, note: consentFor.note ?? '' });
          }
        }}
      />
    );
  }

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

  if (step.name === 'menu-pages') {
    const { photos } = step;
    return (
      <MenuPages
        photos={photos}
        restaurant={menuName}
        onRestaurantChange={setMenuName}
        readsOnDevice={readsMenusOnDevice}
        sending={createMenuScan.isPending}
        bottomSpace={bottomSpace}
        onRetake={capture}
        onAddPage={() => {
          setMode('menu');
          setAddingPages(photos);
          capture();
        }}
        onRemovePage={(index) => {
          const next = photos.filter((_, i) => i !== index);
          if (next.length === 0) capture();
          else setStep({ name: 'menu-pages', photos: next });
        }}
        onRead={() => void readMenu(photos)}
      />
    );
  }

  if (step.name === 'menu-reading') {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-canvas px-8">
        <ActivityIndicator color={colors.ink} />
        <Text className="text-center text-[16px] text-muted">Reading the menu…</Text>
      </View>
    );
  }

  if (step.name === 'menu-confirm') {
    const { photos } = step;
    return (
      <DishConfirm
        key={step.key}
        initialLines={step.lines}
        restaurant={menuName}
        onRestaurantChange={setMenuName}
        sending={createMenuScan.isPending}
        bottomSpace={bottomSpace}
        onBack={() => setStep({ name: 'menu-pages', photos })}
        onRetake={capture}
        onSubmit={(lines) => requestMenu({ lines })}
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
      <FoodSearchView
        bottomSpace={bottomSpace}
        initialTab={step.tab}
        onBack={capture}
        onLog={(food, grams) => analyze({ kind: 'food', food, grams })}
        onLogDrink={(drink, detail) => {
          void allowDrinksInHealth();
          analyze({ kind: 'drink', drink, detail });
        }}
        onLoggedDish={() => {
          capture();
          router.navigate('/');
        }}
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
        onNeedsConsent={() => setConsentFor(input)}
        onScanAnother={() =>
          setStep(
            input.kind === 'text'
              ? { name: 'describe' }
              : input.kind === 'food'
                ? { name: 'search' }
                : input.kind === 'drink'
                ? { name: 'search', tab: 'drinks' }
                : { name: 'capture' },
          )
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
      menus={menus}
      onModeChange={changeMode}
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
          : addingPages
            ? {
                count: addingPages.length,
                onDone: () => {
                  setStep({ name: 'menu-pages', photos: addingPages });
                  setAddingPages(null);
                },
              }
            : undefined
      }
      onPhoto={(photo) => {
        if (addingPages) {
          setStep({ name: 'menu-pages', photos: [...addingPages, photo] });
          setAddingPages(null);
        } else if (mode === 'menu') {
          if (menuNeedsPremium) router.push('/premium');
          else setStep({ name: 'menu-pages', photos: [photo] });
        } else if (adding) {
          setStep({ name: 'preview', photos: [...adding.photos, photo], mode: 'meal', note: adding.note });
          setAdding(null);
        } else {
          setStep({ name: 'preview', photos: [photo], mode: mode === 'label' ? 'label' : 'meal', note: '' });
        }
      }}
    />
  );
}
