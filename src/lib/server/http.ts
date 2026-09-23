import { ZodError } from 'zod';

/** Error with an HTTP status that `handle()` turns into a JSON response. */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

type Handler<P> = (request: Request, params: P) => Promise<Response> | Response;

/** Wraps an API route handler: consistent JSON errors, no leaked stack traces. */
export function handle<P = Record<string, string>>(handler: Handler<P>): Handler<P> {
  return async (request, params) => {
    try {
      return await handler(request, params);
    } catch (error) {
      if (error instanceof HttpError) {
        return Response.json({ error: error.message }, { status: error.status });
      }
      if (error instanceof ZodError) {
        return Response.json(
          { error: 'Invalid request', issues: error.issues.map((i) => `${i.path.join('.')}: ${i.message}`) },
          { status: 400 },
        );
      }
      console.error(`[api] ${request.method} ${new URL(request.url).pathname} failed`, error);
      return Response.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
  };
}

/** Parses the JSON body; invalid JSON becomes a 400. */
export async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    throw new HttpError(400, 'Request body must be valid JSON');
  }
}
