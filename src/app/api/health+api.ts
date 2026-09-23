/** Railway health check: the server is up and serving API routes. */
export function GET() {
  return Response.json({ ok: true });
}
