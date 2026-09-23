import { getAuth } from '@/lib/server/auth';

/** Better Auth endpoints: sign up, sign in, sign out and session (all under /api/auth/*). */
const handler = (request: Request) => getAuth().handler(request);

export { handler as GET, handler as POST };
