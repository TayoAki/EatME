/** Firecrawl's API for the chain menu scripts (search, scrape, map), with waits when it rate limits. */

export type FirecrawlEndpoint = 'search' | 'scrape' | 'map';

export async function firecrawl<T>(endpoint: FirecrawlEndpoint, body: object): Promise<T> {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) throw new Error('Set FIRECRAWL_API_KEY to find and read guides (or set guide_url in ranking.csv).');
  for (let attempt = 1; ; attempt++) {
    const response = await fetch(`https://api.firecrawl.dev/v2/${endpoint}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (response.ok) return (await response.json()) as T;
    // Rate limited: wait as long as Firecrawl asks (up to 2 minutes), three times at most.
    if (response.status === 429 && attempt < 3) {
      const wait = Math.min(Number(response.headers.get('retry-after')) || 30 * attempt, 120);
      await new Promise((resolve) => setTimeout(resolve, wait * 1000));
      continue;
    }
    throw new Error(`Firecrawl ${endpoint}: ${response.status} ${(await response.text()).slice(0, 300)}`);
  }
}
