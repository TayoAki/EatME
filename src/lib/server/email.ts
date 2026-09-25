/**
 * Transactional email through Resend (https://resend.com): sign-in codes for resetting a password
 * and verifying an email address. Off unless RESEND_API_KEY and EMAIL_FROM are set; the app hides
 * both features then (see `/api/features`).
 */

const TIMEOUT_MS = 10_000;

export function emailConfigured() {
  return !!process.env.RESEND_API_KEY && !!process.env.EMAIL_FROM;
}

type Email = { to: string; subject: string; text: string; html: string };

export async function sendEmail({ to, subject, text, html }: Email) {
  if (!emailConfigured()) throw new Error('Email is not configured (RESEND_API_KEY, EMAIL_FROM)');
  const res = await fetch(`${process.env.RESEND_BASE_URL ?? 'https://api.resend.com'}/emails`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.EMAIL_FROM, to: [to], subject, text, html }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Resend answered ${res.status}: ${(await res.text()).slice(0, 200)}`);
}

export type CodeEmailKind = 'email-verification' | 'forget-password';

const COPY: Record<CodeEmailKind, { subject: string; lead: string }> = {
  'email-verification': {
    subject: 'Your EatME verification code',
    lead: 'Enter this code in EatME to verify your email address:',
  },
  'forget-password': {
    subject: 'Reset your EatME password',
    lead: 'Enter this code in EatME to choose a new password:',
  },
};

/** A one-time code email: plain text plus a simple HTML version in EatME's look. */
export function codeEmail(kind: CodeEmailKind, code: string, minutes: number): Omit<Email, 'to'> {
  const { subject, lead } = COPY[kind];
  const ignore = "If you didn't ask for this, you can ignore this email — nothing changes without the code.";
  const text = `${lead}\n\n${code}\n\nThe code works for ${minutes} minutes. ${ignore}\n\n— EatME`;
  const html = `<!doctype html>
<html><body style="margin:0;padding:32px 16px;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111111">
  <div style="max-width:440px;margin:0 auto">
    <p style="font-size:22px;font-weight:700;margin:0 0 24px">EatME</p>
    <p style="font-size:16px;line-height:24px;margin:0 0 16px">${lead}</p>
    <p style="font-size:36px;font-weight:700;letter-spacing:8px;margin:0 0 16px;padding:16px;background:#F6F6F7;border-radius:16px;text-align:center">${code}</p>
    <p style="font-size:14px;line-height:20px;color:#8E8E93;margin:0">The code works for ${minutes} minutes. ${ignore}</p>
  </div>
</body></html>`;
  return { subject, text, html };
}
