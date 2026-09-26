import OpenAI from 'openai';
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions';
import type { z } from 'zod';

const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';
const DEFAULT_MODEL = 'openai/gpt-5.6-luna';

const usingOpenRouter = () => !!process.env.OPENROUTER_API_KEY;

let client: OpenAI | null = null;

/**
 * OpenAI SDK client (server only). Uses OpenRouter (OpenAI-compatible) when OPENROUTER_API_KEY is
 * set, otherwise OpenAI directly with OPENAI_API_KEY. AI_BASE_URL points it at any other
 * OpenAI-compatible endpoint (a local stand-in for tests, another provider).
 */
export function ai() {
  if (client) return client;
  if (usingOpenRouter()) {
    client = new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: process.env.AI_BASE_URL || OPENROUTER_BASE_URL,
      defaultHeaders: { 'X-Title': 'EatME' },
      // The SDK retries rate limits, 5xx and timeouts; the callers add their own retries on top.
      maxRetries: 2,
      timeout: 45_000,
    });
  } else if (process.env.OPENAI_API_KEY) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, maxRetries: 2, timeout: 45_000 });
  } else {
    throw new Error('Set OPENROUTER_API_KEY (or OPENAI_API_KEY) in the server environment variables.');
  }
  return client;
}

/** Model makers by OpenRouter's model prefix, named on the AI consent screen. */
const MAKERS: Record<string, string> = {
  openai: 'OpenAI',
  anthropic: 'Anthropic',
  google: 'Google',
  'meta-llama': 'Meta',
  mistralai: 'Mistral AI',
  'x-ai': 'xAI',
  deepseek: 'DeepSeek',
  qwen: 'Alibaba Cloud',
  amazon: 'Amazon',
  cohere: 'Cohere',
};

/**
 * The companies that receive people's data for AI work: OpenRouter (when used) and the makers of
 * the configured models. The AI consent screen names them (Apple 5.1.2(i)); consent covers only the
 * names it showed, so switching to another maker's model asks everyone again.
 */
export function aiProviders(): string[] {
  if (!usingOpenRouter()) return ['OpenAI'];
  const makers = [process.env.AI_MODEL || DEFAULT_MODEL, process.env.AI_VISION_MODEL || DEFAULT_MODEL].map((model) => {
    const prefix = model.split('/')[0];
    return MAKERS[prefix] ?? prefix;
  });
  return [...new Set(['OpenRouter', ...makers])];
}

/** Model id from env. OpenAI itself does not use OpenRouter's "openai/" prefix. */
export function modelFor(kind: 'text' | 'vision') {
  const model = (kind === 'vision' ? process.env.AI_VISION_MODEL : process.env.AI_MODEL) || DEFAULT_MODEL;
  return usingOpenRouter() ? model : model.replace(/^openai\//, '');
}

type StructuredRequest<T extends z.ZodType> = {
  model: string;
  name: string;
  /** JSON schema sent to the model (strict mode). */
  jsonSchema: Record<string, unknown>;
  /** Zod schema used to validate the answer. */
  schema: T;
  messages: ChatCompletionMessageParam[];
};

/** Chat completion with a strict JSON schema response, validated with zod. */
export async function structuredCompletion<T extends z.ZodType>({
  model,
  name,
  jsonSchema,
  schema,
  messages,
}: StructuredRequest<T>): Promise<{ data: z.infer<T>; usage: OpenAI.CompletionUsage | undefined }> {
  const body: OpenAI.ChatCompletionCreateParamsNonStreaming & { provider?: { data_collection: 'deny' } } = {
    model,
    messages,
    reasoning_effort: 'low',
    response_format: {
      type: 'json_schema',
      json_schema: { name, strict: true, schema: jsonSchema },
    },
    // OpenRouter routes only to providers that don't collect the data or train on it (as the
    // privacy policy promises), whatever the account settings say.
    ...(usingOpenRouter() ? { provider: { data_collection: 'deny' as const } } : {}),
  };
  const response = await ai().chat.completions.create(body);

  const content = response.choices[0]?.message?.content;
  if (!content) throw new Error(`Empty response from ${model}`);
  const data = schema.parse(JSON.parse(content));
  return { data, usage: response.usage };
}
