import { ZodError } from 'zod';

type DbCause = { code?: string; constraint?: string; table?: string };

/**
 * An error as a log line without the data inside it (Railway keeps logs for days): database errors
 * keep the SQL text and the Postgres code, never the values drizzle attaches as `params` or that
 * Postgres quotes in its messages; validation errors keep their paths; JSON errors drop the text
 * they quote; other errors keep their name, message and first stack lines.
 */
export function describeError(error: unknown): string {
  if (error instanceof ZodError) {
    return `ZodError: ${error.issues.map((issue) => `${issue.path.join('.') || '(root)'} ${issue.code}`).join(', ')}`;
  }
  if (!(error instanceof Error)) return `non-error thrown (${typeof error})`;
  if (error instanceof SyntaxError) return 'SyntaxError: invalid JSON';
  const e = error as Error & { query?: unknown; code?: unknown; cause?: unknown };
  if (typeof e.query === 'string') {
    // drizzle's DrizzleQueryError: the SQL has only placeholders ($1, $2…).
    const cause = (e.cause ?? {}) as DbCause;
    return `DB error ${cause.code ?? '?'}${cause.constraint ? ` (${cause.constraint})` : ''} on: ${e.query.slice(0, 300)}`;
  }
  if (typeof e.code === 'string' && /^[0-9A-Z]{5}$/.test(e.code)) {
    // pg's DatabaseError on its own: where it happened, not the message.
    const pg = e as Error & DbCause;
    return `DB error ${e.code}${pg.constraint ? ` (${pg.constraint})` : ''}${pg.table ? ` on ${pg.table}` : ''}`;
  }
  const stack = e.stack?.split('\n').slice(1, 4).map((line) => line.trim()).join(' | ');
  return `${e.name}: ${e.message.slice(0, 200)}${stack ? ` — ${stack}` : ''}`;
}
