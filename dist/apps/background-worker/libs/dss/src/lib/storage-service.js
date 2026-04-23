var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var storage_service_exports = {};
__export(storage_service_exports, {
  StorageService: () => StorageService
});
module.exports = __toCommonJS(storage_service_exports);
var import_client_s3 = require("@aws-sdk/client-s3");
var import_s3_request_presigner = require("@aws-sdk/s3-request-presigner");
var import_crypto = require("crypto");
class StorageService {
  static client = null;
  static getConfig() {
    const bucket = process.env.S3_BUCKET || process.env.AWS_S3_BUCKET;
    if (!bucket) {
      throw new Error("Storage bucket is not configured. Set S3_BUCKET.");
    }
    return {
      bucket,
      region: process.env.S3_REGION || process.env.AWS_REGION || "us-east-1",
      endpoint: process.env.S3_ENDPOINT || process.env.AWS_S3_ENDPOINT,
      forcePathStyle: (process.env.S3_FORCE_PATH_STYLE || "true").toLowerCase() === "true",
      accessKeyId: process.env.S3_ACCESS_KEY || process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_KEY || process.env.AWS_SECRET_ACCESS_KEY
    };
  }
  static getClient() {
    if (this.client) {
      return this.client;
    }
    const config = this.getConfig();
    this.client = new import_client_s3.S3Client({
      region: config.region,
      endpoint: config.endpoint,
      forcePathStyle: config.forcePathStyle,
      credentials: config.accessKeyId && config.secretAccessKey ? {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey
      } : void 0
    });
    return this.client;
  }
  static async uploadPdf(fileBuffer, organizationId) {
    const config = this.getConfig();
    const safeOrganizationId = organizationId.replace(/[^a-zA-Z0-9_-]/g, "_");
    const key = `${safeOrganizationId}/${Date.now()}-${(0, import_crypto.randomUUID)()}.pdf`;
    await this.getClient().send(
      new import_client_s3.PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: fileBuffer,
        ContentType: "application/pdf"
      })
    );
    return { key };
  }
  static async getSignedUrl(key, expiresInSeconds = 900) {
    const config = this.getConfig();
    return (0, import_s3_request_presigner.getSignedUrl)(
      this.getClient(),
      new import_client_s3.GetObjectCommand({
        Bucket: config.bucket,
        Key: key
      }),
      { expiresIn: expiresInSeconds }
    );
  }
  static async downloadDocument(key) {
    const config = this.getConfig();
    const command = new import_client_s3.GetObjectCommand({ Bucket: config.bucket, Key: key });
    const response = await this.getClient().send(command);
    if (!response.Body) throw new Error("Empty file body returned from S3");
    const chunks = [];
    for await (const chunk of response.Body) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StorageService
});
