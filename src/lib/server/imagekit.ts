/**
 * Minimal ImageKit REST client (server only). Uses fetch + Web Crypto so it runs in Expo API routes,
 * EAS Hosting and Trigger.dev tasks without extra dependencies.
 * Docs: https://imagekit.io/docs/api-reference
 */

const API_BASE = 'https://api.imagekit.io/v1';
/** Upload tokens are valid for 30 minutes (ImageKit allows at most 1 hour). */
const UPLOAD_TOKEN_TTL_SECONDS = 30 * 60;

export const mealsFolder = (userId: string) => `/meals/${userId}`;

function required(value: string | undefined, name: string) {
  if (!value) throw new Error(`${name} is not set. Add your ImageKit keys to .env.`);
  return value;
}

const privateKey = () => required(process.env.IMAGEKIT_PRIVATE_KEY, 'IMAGEKIT_PRIVATE_KEY');
const publicKey = () => required(process.env.IMAGEKIT_PUBLIC_KEY, 'IMAGEKIT_PUBLIC_KEY');

const authorization = () => `Basic ${btoa(`${privateKey()}:`)}`;

async function hmacSha1Hex(secret: string, message: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-1' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return Array.from(new Uint8Array(signature), (b) => b.toString(16).padStart(2, '0')).join('');
}

export type UploadAuth = {
  token: string;
  expire: number;
  signature: string;
  publicKey: string;
  folder: string;
  uploadUrl: string;
};

/** Signed parameters that let the app upload one photo straight to ImageKit. */
export async function createUploadAuth(userId: string): Promise<UploadAuth> {
  const token = crypto.randomUUID();
  const expire = Math.floor(Date.now() / 1000) + UPLOAD_TOKEN_TTL_SECONDS;
  const signature = await hmacSha1Hex(privateKey(), `${token}${expire}`);
  return {
    token,
    expire,
    signature,
    publicKey: publicKey(),
    folder: mealsFolder(userId),
    uploadUrl: 'https://upload.imagekit.io/api/v1/files/upload',
  };
}

export type ImageKitFile = {
  fileId: string;
  name: string;
  filePath: string;
  url: string;
  size: number;
  fileType: string;
};

export async function getFileDetails(fileId: string): Promise<ImageKitFile | null> {
  const res = await fetch(`${API_BASE}/files/${encodeURIComponent(fileId)}/details`, {
    headers: { Authorization: authorization() },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`ImageKit file details failed (${res.status}): ${await res.text()}`);
  return (await res.json()) as ImageKitFile;
}

export async function deleteFile(fileId: string) {
  const res = await fetch(`${API_BASE}/files/${encodeURIComponent(fileId)}`, {
    method: 'DELETE',
    headers: { Authorization: authorization() },
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`ImageKit delete failed (${res.status}): ${await res.text()}`);
  }
}

/** Deletes a folder with every file inside it. A missing folder is not an error. */
export async function deleteFolder(folderPath: string) {
  const res = await fetch(`${API_BASE}/folder`, {
    method: 'DELETE',
    headers: { Authorization: authorization(), 'Content-Type': 'application/json' },
    body: JSON.stringify({ folderPath }),
  });
  if (!res.ok && res.status !== 404) {
    throw new Error(`ImageKit folder delete failed (${res.status}): ${await res.text()}`);
  }
}

/** Appends an ImageKit transformation (e.g. "w-768,h-768,c-at_max") to an image URL. */
export function transformUrl(url: string, transformation: string) {
  return `${url}${url.includes('?') ? '&' : '?'}tr=${transformation}`;
}

/** Downscaled copy for the vision model — smaller upload, fewer tokens, same accuracy. */
export const visionImageUrl = (url: string) => transformUrl(url, 'w-768,h-768,c-at_max,q-80,f-jpg');
