import { HttpError } from './http';

type Window = { count: number; resetAt: number };
const windows = new Map<string, Window>();

/**
 * Small in-memory fixed-window limiter (one server instance is plenty for the MVP).
 * Throws a 429 HttpError when `key` was used more than `limit` times within `windowMs`.
 */
export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  if (windows.size > 10_000) {
    for (const [k, w] of windows) if (w.resetAt <= now) windows.delete(k);
  }

  const current = windows.get(key);
  if (!current || current.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }
  current.count += 1;
  if (current.count > limit) throw new HttpError(429, 'Too many requests. Please try again in a little while.');
}

/** Caller's IP address. Railway's proxy sets X-Real-IP. */
export function clientIp(request: Request) {
  return request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
}
