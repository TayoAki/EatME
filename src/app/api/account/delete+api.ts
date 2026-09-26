import { and, eq } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '@/db';
import { accounts, users } from '@/db/schema';
import { deleteUserData } from '@/lib/server/account';
import { getAuth } from '@/lib/server/auth';
import { handle, HttpError, readJson } from '@/lib/server/http';
import { clientIp, rateLimit } from '@/lib/server/rate-limit';

const bodySchema = z.object({
  email: z.string().trim().min(3).max(320),
  password: z.string().min(1).max(200),
});

/**
 * Account deletion without the app (Google Play asks for a web way, /delete-account): the email and
 * password of an EatME account delete it right away, like Profile → Delete account. The password is
 * checked like at sign-in, without starting a session.
 */
export const POST = handle(async (request) => {
  rateLimit(`web-delete:${clientIp(request)}`, 10, 60 * 60_000);
  const { email, password } = bodySchema.parse(await readJson(request));
  const context = await getAuth().$context;

  const user = await db.query.users.findFirst({ where: eq(users.email, email.toLowerCase()), columns: { id: true } });
  const account = user
    ? await db.query.accounts.findFirst({
        where: and(eq(accounts.userId, user.id), eq(accounts.providerId, 'credential')),
        columns: { password: true },
      })
    : undefined;
  const matches = account?.password ? await context.password.verify({ password, hash: account.password }) : false;
  if (!user || !matches) {
    // Same wait either way, so the answer doesn't tell which emails have an account.
    if (!account?.password) await context.password.hash(password);
    throw new HttpError(401, "That email and password don't match an EatME account.");
  }

  await deleteUserData(user.id);
  console.info('[account] deleted from the web page');
  return Response.json({ deleted: true });
});
