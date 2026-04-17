var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var encryption_utils_exports = {};
__export(encryption_utils_exports, {
  EncryptionPurpose: () => EncryptionPurpose,
  PaymentEncryptionError: () => PaymentEncryptionError,
  PaymentEncryptionUtils: () => PaymentEncryptionUtils,
  paymentEncryption: () => paymentEncryption,
  paymentEncryptionUtils: () => paymentEncryptionUtils
});
module.exports = __toCommonJS(encryption_utils_exports);
var import_crypto = __toESM(require("crypto"));
var EncryptionPurpose = /* @__PURE__ */ ((EncryptionPurpose2) => {
  EncryptionPurpose2["PAYMENT_METADATA"] = "PAYMENT_METADATA";
  EncryptionPurpose2["USER_INFO"] = "USER_INFO";
  EncryptionPurpose2["TRANSACTION_DETAILS"] = "TRANSACTION_DETAILS";
  EncryptionPurpose2["WEBHOOK_PAYLOAD"] = "WEBHOOK_PAYLOAD";
  return EncryptionPurpose2;
})(EncryptionPurpose || {});
const DEFAULT_CONFIG = {
  algorithm: "aes-256-gcm",
  keyLength: 32,
  // 256 bits
  ivLength: 16,
  authTagLength: 16,
  encoding: "base64"
};
class PaymentEncryptionError extends Error {
  constructor(message, purpose, operation, cause) {
    super(message);
    this.purpose = purpose;
    this.operation = operation;
    this.cause = cause;
    this.name = "PaymentEncryptionError";
  }
  purpose;
  operation;
  cause;
}
class PaymentEncryptionUtils {
  static instance;
  config;
  keyCache = /* @__PURE__ */ new Map();
  constructor(config = DEFAULT_CONFIG) {
    this.config = config;
  }
  static getInstance(config) {
    if (!PaymentEncryptionUtils.instance) {
      PaymentEncryptionUtils.instance = new PaymentEncryptionUtils(config);
    }
    return PaymentEncryptionUtils.instance;
  }
  /**
   * Get encryption key for a specific purpose
   */
  getKey(purpose) {
    const envKeyName = this.getEnvKeyName(purpose);
    const key = process.env[envKeyName];
    if (!key) {
      throw new PaymentEncryptionError(
        `Encryption key not configured for purpose: ${purpose}. Set ${envKeyName} environment variable.`,
        purpose,
        "key_validation"
      );
    }
    const cacheKey = `${purpose}:${key}`;
    if (this.keyCache.has(cacheKey)) {
      return this.keyCache.get(cacheKey);
    }
    try {
      const keyBuffer = Buffer.from(key, this.config.encoding);
      if (keyBuffer.length !== this.config.keyLength) {
        throw new PaymentEncryptionError(
          `Invalid key length for ${purpose}. Expected ${this.config.keyLength} bytes, got ${keyBuffer.length}.`,
          purpose,
          "key_validation"
        );
      }
      this.keyCache.set(cacheKey, keyBuffer);
      return keyBuffer;
    } catch (error) {
      if (error instanceof PaymentEncryptionError) {
        throw error;
      }
      throw new PaymentEncryptionError(
        `Invalid key format for ${purpose}. Key must be ${this.config.encoding} encoded.`,
        purpose,
        "key_validation",
        error
      );
    }
  }
  /**
   * Get environment variable name for a specific encryption purpose
   */
  getEnvKeyName(purpose) {
    const prefix = "PAYMENT_ENCRYPTION_KEY";
    switch (purpose) {
      case "PAYMENT_METADATA" /* PAYMENT_METADATA */:
        return `${prefix}_METADATA`;
      case "USER_INFO" /* USER_INFO */:
        return `${prefix}_USER_INFO`;
      case "TRANSACTION_DETAILS" /* TRANSACTION_DETAILS */:
        return `${prefix}_TRANSACTION`;
      case "WEBHOOK_PAYLOAD" /* WEBHOOK_PAYLOAD */:
        return `${prefix}_WEBHOOK`;
      default:
        return `${prefix}_DEFAULT`;
    }
  }
  /**
   * Encrypt data for a specific purpose
   */
  encrypt(data, purpose) {
    try {
      const plaintext = typeof data === "string" ? data : JSON.stringify(data);
      if (!plaintext || plaintext.trim().length === 0) {
        throw new Error("Data to encrypt cannot be empty");
      }
      const key = this.getKey(purpose);
      const iv = import_crypto.default.randomBytes(this.config.ivLength);
      const cipher = import_crypto.default.createCipheriv(this.config.algorithm, key, iv);
      let ciphertext = cipher.update(plaintext, "utf8", "hex");
      ciphertext += cipher.final("hex");
      const authTag = cipher.getAuthTag();
      const purposePrefix = purpose.substring(0, 3).toUpperCase();
      return `${purposePrefix}:${iv.toString("hex")}:${ciphertext}:${authTag.toString("hex")}`;
    } catch (error) {
      if (error instanceof PaymentEncryptionError) {
        throw error;
      }
      throw new PaymentEncryptionError(
        `Failed to encrypt ${purpose} data: ${error instanceof Error ? error.message : "Unknown error"}`,
        purpose,
        "encrypt",
        error
      );
    }
  }
  /**
   * Decrypt data that was encrypted for a specific purpose
   */
  decrypt(encryptedString, expectedPurpose) {
    try {
      if (!encryptedString || typeof encryptedString !== "string") {
        throw new Error("Encrypted string must be a non-empty string");
      }
      const parts = encryptedString.split(":");
      if (parts.length !== 4) {
        throw new Error("Invalid encrypted string format. Expected purpose:iv:ciphertext:authTag");
      }
      const [purposePrefix, ivHex, ciphertext, authTagHex] = parts;
      let purpose;
      if (expectedPurpose) {
        purpose = expectedPurpose;
      } else {
        purpose = this.getPurposeFromPrefix(purposePrefix);
      }
      const key = this.getKey(purpose);
      const iv = Buffer.from(ivHex, "hex");
      const authTag = Buffer.from(authTagHex, "hex");
      if (iv.length !== this.config.ivLength) {
        throw new Error(`Invalid IV length: expected ${this.config.ivLength} bytes, got ${iv.length}`);
      }
      if (authTag.length !== this.config.authTagLength) {
        throw new Error(`Invalid auth tag length: expected ${this.config.authTagLength} bytes, got ${authTag.length}`);
      }
      const decipher = import_crypto.default.createDecipheriv(this.config.algorithm, key, iv);
      decipher.setAuthTag(authTag);
      let plaintext = decipher.update(ciphertext, "hex", "utf8");
      plaintext += decipher.final("utf8");
      return plaintext;
    } catch (error) {
      if (error instanceof PaymentEncryptionError) {
        throw error;
      }
      throw new PaymentEncryptionError(
        `Failed to decrypt data: ${error instanceof Error ? error.message : "Unknown error"}`,
        expectedPurpose || "PAYMENT_METADATA" /* PAYMENT_METADATA */,
        "decrypt",
        error
      );
    }
  }
  /**
   * Decrypt and parse JSON data
   */
  decryptJson(encryptedString, expectedPurpose) {
    const plaintext = this.decrypt(encryptedString, expectedPurpose);
    try {
      return JSON.parse(plaintext);
    } catch (error) {
      throw new PaymentEncryptionError(
        `Failed to parse decrypted JSON: ${error instanceof Error ? error.message : "Unknown error"}`,
        expectedPurpose || "PAYMENT_METADATA" /* PAYMENT_METADATA */,
        "decrypt",
        error
      );
    }
  }
  /**
   * Get purpose from prefix
   */
  getPurposeFromPrefix(prefix) {
    const prefixMap = {
      "PAY": "PAYMENT_METADATA" /* PAYMENT_METADATA */,
      "USE": "USER_INFO" /* USER_INFO */,
      "TRA": "TRANSACTION_DETAILS" /* TRANSACTION_DETAILS */,
      "WEB": "WEBHOOK_PAYLOAD" /* WEBHOOK_PAYLOAD */
    };
    const purpose = prefixMap[prefix.toUpperCase()];
    if (!purpose) {
      throw new Error(`Unknown encryption purpose prefix: ${prefix}`);
    }
    return purpose;
  }
  /**
   * Validate if a string appears to be encrypted
   */
  isEncrypted(encryptedString) {
    if (!encryptedString || typeof encryptedString !== "string") {
      return false;
    }
    try {
      const parts = encryptedString.split(":");
      if (parts.length !== 4) {
        return false;
      }
      const [purposePrefix, ivHex, ciphertext, authTagHex] = parts;
      if (!/^[A-Z]{3}$/.test(purposePrefix)) {
        return false;
      }
      if (!/^[0-9a-fA-F]+$/.test(ivHex) || !/^[0-9a-fA-F]+$/.test(ciphertext) || !/^[0-9a-fA-F]+$/.test(authTagHex)) {
        return false;
      }
      const iv = Buffer.from(ivHex, "hex");
      if (iv.length !== this.config.ivLength) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Encrypt sensitive fields in an object
   */
  encryptObjectFields(obj, fieldsToEncrypt, purpose = "PAYMENT_METADATA" /* PAYMENT_METADATA */) {
    const result = { ...obj };
    for (const fieldName of fieldsToEncrypt) {
      if (fieldName in result && result[fieldName] != null) {
        const value = result[fieldName];
        if (typeof value === "string" || typeof value === "object" && value !== null) {
          if (typeof value === "string" && this.isEncrypted(value)) {
            continue;
          }
          try {
            result[fieldName] = this.encrypt(value, purpose);
          } catch (error) {
            console.warn(`Failed to encrypt field ${fieldName}:`, error);
          }
        }
      }
    }
    return result;
  }
  /**
   * Decrypt encrypted fields in an object
   */
  decryptObjectFields(obj, fieldsToDecrypt, purpose) {
    const result = { ...obj };
    for (const fieldName of fieldsToDecrypt) {
      if (fieldName in result && result[fieldName] != null) {
        const value = result[fieldName];
        if (typeof value === "string" && this.isEncrypted(value)) {
          try {
            result[fieldName] = this.decrypt(value, purpose);
            const decryptedValue = result[fieldName];
            if (typeof decryptedValue === "string" && (decryptedValue.startsWith("{") || decryptedValue.startsWith("["))) {
              try {
                result[fieldName] = JSON.parse(decryptedValue);
              } catch {
              }
            }
          } catch (error) {
            console.warn(`Failed to decrypt field ${fieldName}:`, error);
          }
        }
      }
    }
    return result;
  }
  /**
   * Generate a new encryption key
   */
  static generateKey() {
    const key = import_crypto.default.randomBytes(DEFAULT_CONFIG.keyLength);
    return key.toString(DEFAULT_CONFIG.encoding);
  }
  /**
   * Generate multiple keys for different purposes
   */
  static generateKeys() {
    return {
      ["PAYMENT_METADATA" /* PAYMENT_METADATA */]: this.generateKey(),
      ["USER_INFO" /* USER_INFO */]: this.generateKey(),
      ["TRANSACTION_DETAILS" /* TRANSACTION_DETAILS */]: this.generateKey(),
      ["WEBHOOK_PAYLOAD" /* WEBHOOK_PAYLOAD */]: this.generateKey()
    };
  }
  /**
   * Clear key cache (useful for testing or key rotation)
   */
  clearCache() {
    this.keyCache.clear();
  }
}
const paymentEncryptionUtils = PaymentEncryptionUtils.getInstance();
const paymentEncryption = {
  /**
   * Encrypt payment metadata (non-PCI data like phone, email references)
   */
  encryptMetadata(metadata) {
    return paymentEncryptionUtils.encrypt(metadata, "PAYMENT_METADATA" /* PAYMENT_METADATA */);
  },
  /**
   * Decrypt payment metadata
   */
  decryptMetadata(encryptedMetadata) {
    return paymentEncryptionUtils.decryptJson(encryptedMetadata, "PAYMENT_METADATA" /* PAYMENT_METADATA */);
  },
  /**
   * Encrypt user information (non-PCI)
   */
  encryptUserInfo(userInfo) {
    return paymentEncryptionUtils.encrypt(userInfo, "USER_INFO" /* USER_INFO */);
  },
  /**
   * Decrypt user information
   */
  decryptUserInfo(encryptedUserInfo) {
    return paymentEncryptionUtils.decryptJson(encryptedUserInfo, "USER_INFO" /* USER_INFO */);
  },
  /**
   * Encrypt transaction details
   */
  encryptTransactionDetails(details) {
    return paymentEncryptionUtils.encrypt(details, "TRANSACTION_DETAILS" /* TRANSACTION_DETAILS */);
  },
  /**
   * Decrypt transaction details
   */
  decryptTransactionDetails(encryptedDetails) {
    return paymentEncryptionUtils.decryptJson(encryptedDetails, "TRANSACTION_DETAILS" /* TRANSACTION_DETAILS */);
  },
  /**
   * Generate all required encryption keys for environment setup
   */
  generateEnvironmentKeys() {
    const keys = PaymentEncryptionUtils.generateKeys();
    const envLines = Object.entries(keys).map(([purpose, key]) => {
      const envVarName = paymentEncryptionUtils["getEnvKeyName"](purpose);
      return `${envVarName}=${key}`;
    });
    return envLines.join("\n");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EncryptionPurpose,
  PaymentEncryptionError,
  PaymentEncryptionUtils,
  paymentEncryption,
  paymentEncryptionUtils
});
//# sourceMappingURL=encryption-utils.js.map
