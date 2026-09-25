/** GS1 check digit (EAN-8, UPC-A, EAN-13, GTIN-14): weights 3 and 1 from the right, excluding the check digit. */
export function validGtin(code: string) {
  if (!/^\d{8,14}$/.test(code)) return false;
  const digits = code.split('').map(Number);
  const check = digits.pop() as number;
  const sum = digits.reverse().reduce((total, digit, i) => total + digit * (i % 2 === 0 ? 3 : 1), 0);
  return (10 - (sum % 10)) % 10 === check;
}

/** UPC-E (8 digits, number system 0 or 1) → the 12-digit UPC-A it abbreviates, or null. */
export function expandUpcE(code: string): string | null {
  if (!/^[01]\d{7}$/.test(code)) return null;
  const [n, d1, d2, d3, d4, d5, d6, check] = code.split('');
  let body: string;
  if (d6 === '0' || d6 === '1' || d6 === '2') body = `${d1}${d2}${d6}0000${d3}${d4}${d5}`;
  else if (d6 === '3') body = `${d1}${d2}${d3}00000${d4}${d5}`;
  else if (d6 === '4') body = `${d1}${d2}${d3}${d4}00000${d5}`;
  else body = `${d1}${d2}${d3}${d4}${d5}0000${d6}`;
  const upcA = `${n}${body}${check}`;
  return validGtin(upcA) ? upcA : null;
}

/**
 * The codes to look a scanned or typed barcode up by, most likely first, or null when it can't be
 * a product barcode. UPC-A is looked up as EAN-13 (a leading 0), like Open Food Facts stores it;
 * an 8-digit code is EAN-8 or a UPC-E that is expanded.
 */
export function barcodeCandidates(raw: string): string[] | null {
  const code = raw.replace(/\D/g, '');
  const out: string[] = [];
  if (code.length === 8) {
    if (validGtin(code)) out.push(code);
    const upcA = expandUpcE(code);
    if (upcA) out.push(`0${upcA}`);
  } else if (code.length === 12 && validGtin(code)) {
    out.push(`0${code}`);
  } else if (code.length === 13 && validGtin(code)) {
    out.push(code);
  } else if (code.length === 14 && validGtin(code)) {
    out.push(code.startsWith('0') ? code.slice(1) : code);
  }
  return out.length > 0 ? out : null;
}
