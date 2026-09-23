/** True for IANA time zone names such as "Europe/Berlin" or "Asia/Makassar". */
export function isValidTimeZone(timeZone: string) {
  try {
    new Intl.DateTimeFormat('en-US', { timeZone });
    return true;
  } catch {
    return false;
  }
}
