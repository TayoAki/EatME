import * as Sentry from '@sentry/react-native';
import { Redirect, router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Screen } from '@/components/ui/screen';
import { colors } from '@/constants/colors';
import { confirm, notify } from '@/lib/confirm';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function RenderBomb(): never {
  throw new Error('Sentry test: error thrown while rendering');
}

type Test = { label: string; description: string; run: () => void | Promise<void> };

/**
 * Development-only screen that simulates the errors users hit in the real world, so you can check
 * that Sentry receives them (issues, replays, logs and traces).
 */
export default function SentryTestScreen() {
  const [renderBomb, setRenderBomb] = useState(false);

  if (!__DEV__) return <Redirect href="/" />;

  const tests: Test[] = [
    {
      label: 'Throw a JavaScript error',
      description: 'Unhandled error in an event handler.',
      run: () => {
        throw new Error('Sentry test: unhandled JavaScript error');
      },
    },
    {
      label: 'Unhandled promise rejection',
      description: 'An async call that fails without a catch.',
      run: () => {
        void Promise.reject(new Error('Sentry test: unhandled promise rejection'));
      },
    },
    {
      label: 'Capture a handled exception',
      description: 'Sentry.captureException with extra context.',
      run: () => {
        Sentry.captureException(new Error('Sentry test: handled exception'), {
          tags: { feature: 'sentry-test' },
          extra: { screen: 'sentry-test' },
        });
        notify('Sent', 'A handled exception was sent to Sentry.');
      },
    },
    {
      label: 'Crash a screen while rendering',
      description: 'Caught by Sentry.ErrorBoundary below.',
      run: () => setRenderBomb(true),
    },
    {
      label: 'Send structured logs',
      description: 'info, warn and error logs with searchable attributes.',
      run: () => {
        Sentry.logger.info('Sentry test: info log', { feature: 'sentry-test' });
        Sentry.logger.warn('Sentry test: warning log', { feature: 'sentry-test' });
        Sentry.logger.error('Sentry test: error log', { feature: 'sentry-test' });
        notify('Sent', 'Three logs were sent. See Sentry → Explore → Logs.');
      },
    },
    {
      label: 'Record a slow trace',
      description: 'A 1.5 s span with a nested child span.',
      run: async () => {
        await Sentry.startSpan({ name: 'Sentry test: slow operation', op: 'test' }, async () => {
          await Sentry.startSpan({ name: 'Sentry test: nested step', op: 'test.step' }, () => sleep(700));
          await sleep(800);
        });
        notify('Sent', 'A trace was recorded. See Sentry → Explore → Traces.');
      },
    },
    {
      label: 'Open the feedback form',
      description: 'The same widget as Profile → Send feedback.',
      run: () => Sentry.showFeedbackWidget(),
    },
    {
      label: 'Native crash',
      description: 'Crashes the app on purpose (needs a development build).',
      run: async () => {
        const ok = await confirm({
          title: 'Crash the app?',
          message: 'The app will close. Reopen it and the crash will be sent to Sentry.',
          confirmLabel: 'Crash',
          destructive: true,
        });
        if (ok) Sentry.nativeCrash();
      },
    },
  ];

  return (
    <Screen>
      <View className="h-14 justify-center px-5">
        <IconButton
          accessibilityLabel="Go back"
          icon={<ArrowLeft size={20} color={colors.ink} />}
          onPress={() => router.back()}
        />
      </View>
      <ScrollView contentContainerClassName="gap-3 px-5 pb-10">
        <Text accessibilityRole="header" className="text-[32px] font-bold tracking-tight text-ink">
          Sentry test bench
        </Text>
        <Text className="mb-2 text-[15px] leading-[21px] text-muted">
          Development builds only. Each button simulates a real-world problem — check Sentry → Issues to see it
          arrive with its session replay.
        </Text>

        {tests.map((test) => (
          <View key={test.label} className="rounded-[20px] border border-line p-4">
            <Text className="text-[16px] font-semibold text-ink">{test.label}</Text>
            <Text className="mb-3 mt-1 text-[14px] text-muted">{test.description}</Text>
            <Button title="Run" size="md" variant="secondary" onPress={() => void test.run()} />
          </View>
        ))}

        <Sentry.ErrorBoundary
          fallback={({ resetError }) => (
            <View className="rounded-[20px] bg-surface p-4">
              <Text className="text-[15px] text-ink">The render error was caught and sent to Sentry.</Text>
              <Button
                title="Reset"
                size="md"
                className="mt-3"
                onPress={() => {
                  setRenderBomb(false);
                  resetError();
                }}
              />
            </View>
          )}>
          {renderBomb ? <RenderBomb /> : null}
        </Sentry.ErrorBoundary>
      </ScrollView>
    </Screen>
  );
}
