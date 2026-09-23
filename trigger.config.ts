import { defineConfig } from '@trigger.dev/sdk';
import { config } from 'dotenv';

// The CLI reads this file before it loads .env, so load it here for TRIGGER_PROJECT_REF.
config({ quiet: true });

export default defineConfig({
  // Trigger.dev dashboard → Project settings → Project ref (proj_...). Set it in .env or replace it here.
  project: process.env.TRIGGER_PROJECT_REF ?? 'proj_replace_with_your_project_ref',
  runtime: 'node',
  logLevel: 'log',
  dirs: ['./src/trigger'],
  // AI calls can take a while; tasks override this where needed.
  maxDuration: 300,
  retries: {
    enabledInDev: true,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1000,
      maxTimeoutInMs: 10000,
      factor: 2,
      randomize: true,
    },
  },
});
