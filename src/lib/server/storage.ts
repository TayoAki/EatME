import { AwsClient } from 'aws4fetch';

/**
 * Minimal client for the Railway storage bucket (S3-compatible, private). Uses fetch + SigV4
 * signing, so it runs anywhere the API routes run. Photos are shown in the app with short-lived
 * signed links. Docs: https://docs.railway.com/storage-buckets
 */

type Bucket = { client: AwsClient; baseUrl: string };
let bucket: Bucket | undefined;

function getBucket(): Bucket {
  if (bucket) return bucket;
  const S3_ENDPOINT = process.env.S3_ENDPOINT;
  const S3_BUCKET = process.env.S3_BUCKET;
  const S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID;
  const S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY;
  if (!S3_ENDPOINT || !S3_BUCKET || !S3_ACCESS_KEY_ID || !S3_SECRET_ACCESS_KEY) {
    throw new Error('The storage bucket is not configured. Set S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY.');
  }
  const endpoint = new URL(S3_ENDPOINT);
  bucket = {
    client: new AwsClient({
      accessKeyId: S3_ACCESS_KEY_ID,
      secretAccessKey: S3_SECRET_ACCESS_KEY,
      service: 's3',
      region: process.env.S3_REGION || 'auto',
      retries: 2,
    }),
    // Railway buckets use virtual-hosted-style URLs (older buckets: set S3_PATH_STYLE=true).
    baseUrl:
      process.env.S3_PATH_STYLE === 'true'
        ? `${endpoint.origin}/${S3_BUCKET}`
        : `${endpoint.protocol}//${S3_BUCKET}.${endpoint.host}`,
  };
  return bucket;
}

const objectUrl = (key: string) => `${getBucket().baseUrl}/${key.split('/').map(encodeURIComponent).join('/')}`;

async function check(res: Response, action: string, allow: number[] = []) {
  if (res.ok || allow.includes(res.status)) return res;
  throw new Error(`Storage ${action} failed (${res.status}): ${(await res.text()).slice(0, 300)}`);
}

export const mealPhotoKey = (userId: string, mealId: string) => `meals/${userId}/${mealId}.jpg`;
/** The 2nd and 3rd photo of a meal (steer the AI). */
export const extraPhotoKey = (userId: string, mealId: string, n: number) => `meals/${userId}/${mealId}-${n}.jpg`;
export const userPhotosPrefix = (userId: string) => `meals/${userId}/`;

export async function putObject(key: string, body: ArrayBuffer, contentType: string) {
  const res = await getBucket().client.fetch(objectUrl(key), {
    method: 'PUT',
    body,
    headers: { 'Content-Type': contentType },
  });
  await check(res, 'upload');
}

export async function getObject(key: string): Promise<ArrayBuffer> {
  const res = await check(await getBucket().client.fetch(objectUrl(key)), 'download');
  return res.arrayBuffer();
}

/** Deleting a missing object is not an error. */
export async function deleteObject(key: string) {
  const res = await getBucket().client.fetch(objectUrl(key), { method: 'DELETE' });
  await check(res, 'delete', [404]);
}

/** Every object key that starts with `prefix` (follows pagination). */
export async function listKeys(prefix: string): Promise<string[]> {
  const keys: string[] = [];
  let continuationToken: string | undefined;
  do {
    const url = new URL(`${getBucket().baseUrl}/`);
    url.searchParams.set('list-type', '2');
    url.searchParams.set('prefix', prefix);
    if (continuationToken) url.searchParams.set('continuation-token', continuationToken);
    const xml = await (await check(await getBucket().client.fetch(url.toString()), 'list')).text();
    for (const match of xml.matchAll(/<Key>([^<]+)<\/Key>/g)) keys.push(decodeXml(match[1]));
    continuationToken = /<IsTruncated>true<\/IsTruncated>/.test(xml)
      ? decodeXml(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/.exec(xml)?.[1] ?? '') || undefined
      : undefined;
  } while (continuationToken);
  return keys;
}

/** Link that lets anyone holding it download the object until it expires (default 6 hours). */
export async function signedGetUrl(key: string, expiresInSeconds = 6 * 60 * 60) {
  const url = new URL(objectUrl(key));
  url.searchParams.set('X-Amz-Expires', String(expiresInSeconds));
  const signed = await getBucket().client.sign(url.toString(), { method: 'GET', aws: { signQuery: true } });
  return signed.url;
}

function decodeXml(value: string) {
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');
}
