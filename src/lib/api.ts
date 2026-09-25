import { Platform } from 'react-native';

import { API_URL } from './api-url';
import { authClient } from './auth-client';

export class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  /** JSON body. */
  body?: unknown;
  /** Binary body sent as-is (photo uploads), e.g. `{ data: jpegBytes, type: 'image/jpeg' }`. */
  binary?: { data: Uint8Array | ArrayBuffer; type: string };
  /** Extra request headers, e.g. the note sent with a meal photo. */
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

/**
 * Calls the EatME API with the session cookie. On iOS/Android the cookie comes from SecureStore and
 * is added by hand (as Better Auth's Expo guide recommends); on web the browser sends it.
 */
export async function apiFetch<T>(
  path: string,
  { method = 'GET', body, binary, headers: extraHeaders, signal }: RequestOptions = {},
) {
  const headers: Record<string, string> = { Accept: 'application/json', ...extraHeaders };
  let payload: BodyInit | undefined;
  if (binary) {
    headers['Content-Type'] = binary.type;
    payload = binary.data as BodyInit;
  } else if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }

  let credentials: RequestCredentials = 'include';
  if (Platform.OS !== 'web') {
    const cookie = await authClient.getCookie();
    if (cookie) headers.Cookie = cookie;
    credentials = 'omit';
  }

  const res = await fetch(`${API_URL}${path}`, { method, headers, body: payload, signal, credentials });

  const text = await res.text();
  const data = text ? safeJson(text) : null;
  if (!res.ok) {
    // The session expired or was revoked: re-check it, which signs the app out if it is gone.
    if (res.status === 401) authClient.$store.notify('$sessionSignal');
    const message =
      (data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
        ? data.error
        : null) ?? `Request failed (${res.status})`;
    throw new ApiError(message, res.status);
  }
  return data as T;
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

/** API client for screens and hooks (kept as a hook so call sites don't change if auth changes). */
export function useApi() {
  return apiFetch;
}

export type ApiClient = typeof apiFetch;
