/**
 * SSN Encryption Utility Module
 * 
 * Provides AES-256-GCM encryption/decryption for sensitive PII data (SSN).
 * This is critical for GDPR compliance and data security.
 */

import crypto from 'crypto';

/**
 * Configuration constants for SSN encryption
 */
const ENCRYPTION_ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16; // 16 bytes for GCM
const AUTH_TAG_LENGTH = 16; // 16 bytes for GCM authentication tag
const KEY_ENCODING: BufferEncoding = 'base64';
const STRING_ENCODING: BufferEncoding = 'utf8';

/**
 * SSN Encryption Error Class
 */
export class EncryptionError extends Error {
  constructor(
    message: string,
    public readonly operation: 'encrypt' | 'decrypt' | 'key_validation',
    public readonly cause?: Error
  ) {
    super(message);
    this.name = 'EncryptionError';
  }
}

/**
 * Validates that the encryption key is present and properly formatted
 */
function validateEncryptionKey(): Buffer {
  const key = process.env.SSN_ENCRYPTION_KEY;
  
  if (!key) {
    throw new EncryptionError(
      'SSN_ENCRYPTION_KEY environment variable is not set',
      'key_validation'
    );
  }

  try {
    // Key should be a base64 encoded 32-byte (256-bit) key
    const keyBuffer = Buffer.from(key, KEY_ENCODING);
    
    if (keyBuffer.length !== 32) {
      throw new EncryptionError(
        `SSN_ENCRYPTION_KEY must be 32 bytes (256 bits) after base64 decoding. Got ${keyBuffer.length} bytes.`,
        'key_validation'
      );
    }
    
    return keyBuffer;
  } catch (error) {
    if (error instanceof EncryptionError) {
      throw error;
    }
    throw new EncryptionError(
      'SSN_ENCRYPTION_KEY is not valid base64',
      'key_validation',
      error as Error
    );
  }
}

/**
 * Encrypts plaintext SSN data using AES-256-GCM
 * 
 * @param plaintext - The plaintext SSN to encrypt
 * @returns Encrypted string in format: `${iv}:${ciphertext}:${authTag}`
 * @throws {EncryptionError} If encryption fails
 */
export function encryptSSN(plaintext: string): string {
  try {
    if (!plaintext || typeof plaintext !== 'string') {
      throw new Error('Plaintext must be a non-empty string');
    }

    const key = validateEncryptionKey();
    const iv = crypto.randomBytes(IV_LENGTH);
    
    const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, key, iv);
    
    // Encrypt the plaintext
    let ciphertext = cipher.update(plaintext, STRING_ENCODING, 'hex');
    ciphertext += cipher.final('hex');
    
    // Get the authentication tag
    const authTag = cipher.getAuthTag();
    
    // Format: iv:ciphertext:authTag (all hex encoded)
    return `${iv.toString('hex')}:${ciphertext}:${authTag.toString('hex')}`;
  } catch (error) {
    if (error instanceof EncryptionError) {
      throw error;
    }
    throw new EncryptionError(
      `Failed to encrypt SSN: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'encrypt',
      error as Error
    );
  }
}

/**
 * Decrypts encrypted SSN data using AES-256-GCM
 * 
 * @param encryptedString - The encrypted string in format: `${iv}:${ciphertext}:${authTag}`
 * @returns Decrypted plaintext SSN
 * @throws {EncryptionError} If decryption fails
 */
export function decryptSSN(encryptedString: string): string {
  try {
    if (!encryptedString || typeof encryptedString !== 'string') {
      throw new Error('Encrypted string must be a non-empty string');
    }

    // Parse the encrypted string format
    const parts = encryptedString.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted string format. Expected iv:ciphertext:authTag');
    }

    const [ivHex, ciphertext, authTagHex] = parts;
    
    const key = validateEncryptionKey();
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    
    if (iv.length !== IV_LENGTH) {
      throw new Error(`Invalid IV length: expected ${IV_LENGTH} bytes, got ${iv.length}`);
    }
    
    if (authTag.length !== AUTH_TAG_LENGTH) {
      throw new Error(`Invalid auth tag length: expected ${AUTH_TAG_LENGTH} bytes, got ${authTag.length}`);
    }

    const decipher = crypto.createDecipheriv(ENCRYPTION_ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    
    // Decrypt the ciphertext
    let plaintext = decipher.update(ciphertext, 'hex', STRING_ENCODING);
    plaintext += decipher.final(STRING_ENCODING);
    
    return plaintext;
  } catch (error) {
    if (error instanceof EncryptionError) {
      throw error;
    }
    throw new EncryptionError(
      `Failed to decrypt SSN: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'decrypt',
      error as Error
    );
  }
}

/**
 * Validates if a string is a properly encrypted SSN
 * 
 * @param encryptedString - The string to validate
 * @returns True if the string appears to be a valid encrypted SSN
 */
export function isEncryptedSSN(encryptedString: string): boolean {
  if (!encryptedString || typeof encryptedString !== 'string') {
    return false;
  }

  try {
    // Check the format: iv:ciphertext:authTag
    const parts = encryptedString.split(':');
    if (parts.length !== 3) {
      return false;
    }

    const [ivHex, ciphertext, authTagHex] = parts;
    
    // Check that all parts are valid hex
    if (!/^[0-9a-fA-F]+$/.test(ivHex) || 
        !/^[0-9a-fA-F]+$/.test(ciphertext) || 
        !/^[0-9a-fA-F]+$/.test(authTagHex)) {
      return false;
    }
    
    // Check IV length (optional, but good for format validation)
    const iv = Buffer.from(ivHex, 'hex');
    if (iv.length !== IV_LENGTH) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Rotates encryption keys by re-encrypting data with a new key
 * 
 * @param oldKey - The old encryption key (base64)
 * @param newKey - The new encryption key (base64)
 * @param encryptedData - The data encrypted with the old key
 * @returns Data re-encrypted with the new key
 * @throws {EncryptionError} If key rotation fails
 */
export function rotateEncryptionKey(
  oldKey: string,
  newKey: string,
  encryptedData: string
): string {
  try {
    // Temporarily set the old key to decrypt
    const originalKey = process.env.SSN_ENCRYPTION_KEY;
    process.env.SSN_ENCRYPTION_KEY = oldKey;
    
    try {
      // Decrypt with old key
      const decrypted = decryptSSN(encryptedData);
      
      // Set new key and re-encrypt
      process.env.SSN_ENCRYPTION_KEY = newKey;
      const reencrypted = encryptSSN(decrypted);
      
      // Restore original key
      process.env.SSN_ENCRYPTION_KEY = originalKey;
      
      return reencrypted;
    } catch (error) {
      // Always restore original key on error
      process.env.SSN_ENCRYPTION_KEY = originalKey;
      throw error;
    }
  } catch (error) {
    if (error instanceof EncryptionError) {
      throw error;
    }
    throw new EncryptionError(
      `Failed to rotate encryption key: ${error instanceof Error ? error.message : 'Unknown error'}`,
      'decrypt',
      error as Error
    );
  }
}

/**
 * Middleware function to automatically encrypt SSN fields in objects
 * 
 * @param data - Object containing SSN fields
 * @param ssnFieldNames - Array of field names that should be encrypted (default: ['ssn'])
 * @returns Object with SSN fields encrypted
 */
export function encryptSSNFields<T extends Record<string, unknown>>(
  data: T,
  ssnFieldNames: string[] = ['ssn']
): T {
  const result: Record<string, unknown> = { ...data };
  
  for (const fieldName of ssnFieldNames) {
    if (fieldName in result && result[fieldName]) {
      const value = result[fieldName];
      
      // Only encrypt if it's a string and not already encrypted
      if (typeof value === 'string' && value.trim() && !isEncryptedSSN(value)) {
        result[fieldName] = encryptSSN(value);
      }
    }
  }
  
  return result as T;
}

/**
 * Middleware function to automatically decrypt SSN fields in objects
 * 
 * @param data - Object containing encrypted SSN fields
 * @param ssnFieldNames - Array of field names that should be decrypted (default: ['ssnEncrypted'])
 * @returns Object with SSN fields decrypted
 */
export function decryptSSNFields<T extends Record<string, unknown>>(
  data: T,
  ssnFieldNames: string[] = ['ssnEncrypted']
): T {
  const result: Record<string, unknown> = { ...data };
  
  for (const fieldName of ssnFieldNames) {
    if (fieldName in result && result[fieldName]) {
      const value = result[fieldName];
      
      // Only decrypt if it's a string and appears to be encrypted
      if (typeof value === 'string' && value.trim() && isEncryptedSSN(value)) {
        try {
          result[fieldName] = decryptSSN(value);
        } catch (error) {
          // If decryption fails, leave it encrypted and log warning
          console.warn(`Failed to decrypt field ${fieldName}:`, error);
        }
      }
    }
  }
  
  return result as T;
}

/**
 * Validates SSN format (basic US SSN format validation)
 * Note: This is for format validation only, not encryption
 * 
 * @param ssn - The SSN to validate
 * @returns True if the SSN format appears valid
 */
export function isValidSSNFormat(ssn: string): boolean {
  // Basic US SSN format validation (XXX-XX-XXXX)
  const ssnRegex = /^(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
  return ssnRegex.test(ssn);
}

export default {
  encryptSSN,
  decryptSSN,
  isEncryptedSSN,
  rotateEncryptionKey,
  encryptSSNFields,
  decryptSSNFields,
  isValidSSNFormat,
  EncryptionError,
};