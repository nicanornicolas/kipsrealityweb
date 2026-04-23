import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const AUTH_TAG_LENGTH = 16;
const MIN_ENCRYPTED_PAYLOAD_LENGTH = IV_LENGTH + AUTH_TAG_LENGTH + 1;

function validateEncryptionKey(): Buffer {
  const configuredKey = process.env.ENCRYPTION_KEY;

  if (!configuredKey) {
    throw new Error('ENCRYPTION_KEY is not configured');
  }

  const base64Key = Buffer.from(configuredKey, 'base64');
  if (base64Key.length === 32) {
    return base64Key;
  }

  const utf8Key = Buffer.from(configuredKey, 'utf8');
  if (utf8Key.length === 32) {
    return utf8Key;
  }

  throw new Error('ENCRYPTION_KEY must be 32 bytes (utf8) or base64-encoded 32 bytes');
}

// Fail fast on boot to prevent partial writes with an unusable key.
const ENCRYPTION_KEY = validateEncryptionKey();

function getEncryptionKey(): Buffer {
  return ENCRYPTION_KEY;
}

export function isProbablyEncryptedPlaidToken(value: string): boolean {
  try {
    const decoded = Buffer.from(value, 'base64');
    const reencoded = decoded.toString('base64').replace(/=+$/g, '');
    const normalizedInput = value.replace(/=+$/g, '');

    if (reencoded !== normalizedInput) {
      return false;
    }

    return decoded.length >= MIN_ENCRYPTED_PAYLOAD_LENGTH;
  } catch {
    return false;
  }
}

export function encryptPlaidAccessToken(accessToken: string): string {
  const key = getEncryptionKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  const encrypted = Buffer.concat([cipher.update(accessToken, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();

  return Buffer.concat([iv, tag, encrypted]).toString('base64');
}

export function decryptPlaidAccessToken(payload: string): string {
  const key = getEncryptionKey();
  const data = Buffer.from(payload, 'base64');

  const iv = data.subarray(0, IV_LENGTH);
  const tag = data.subarray(IV_LENGTH, IV_LENGTH + AUTH_TAG_LENGTH);
  const encryptedText = data.subarray(IV_LENGTH + AUTH_TAG_LENGTH);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);

  return Buffer.concat([decipher.update(encryptedText), decipher.final()]).toString('utf8');
}

export function resolvePlaidAccessToken(payload: string): string {
  try {
    return decryptPlaidAccessToken(payload);
  } catch {
    if (isProbablyEncryptedPlaidToken(payload)) {
      throw new Error('Invalid encrypted plaid token payload');
    }

    // Temporary backward compatibility for legacy plaintext rows during migration.
    return payload;
  }
}
