import { useAuth } from '@clerk/expo';
import { useCallback } from 'react';

/**
 * In development the Expo dev server serves the API routes, so relative URLs just work.
 * Production builds call the deployed server (EAS Hosting) set in EXPO_PUBLIC_API_URL.
 */
const API_URL = (process.env.EXPO_PUBLIC_API_URL ?? '').replace(/\/$/, '');

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
  body?: unknown;
  token?: string | null;
  signal?: AbortSignal;
};

export async function apiFetch<T>(path: string, { method = 'GET', body, token, signal }: RequestOptions = {}) {
  const headers: Record<string, string> = { Accept: 'application/json' };
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal,
  });

  const text = await res.text();
  const data = text ? safeJson(text) : null;
  if (!res.ok) {
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

/** Authenticated API client — attaches the Clerk session token to every request. */
export function useApi() {
  const { getToken } = useAuth();
  return useCallback(
    async <T>(path: string, options: Omit<RequestOptions, 'token'> = {}) =>
      apiFetch<T>(path, { ...options, token: await getToken() }),
    [getToken],
  );
}

export type ApiClient = ReturnType<typeof useApi>;
