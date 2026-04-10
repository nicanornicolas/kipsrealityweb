/* eslint-disable @nx/enforce-module-boundaries */
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl as getPresignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "crypto";

interface StorageConfig {
  bucket: string;
  region: string;
  endpoint?: string;
  forcePathStyle: boolean;
  accessKeyId?: string;
  secretAccessKey?: string;
}

export class StorageService {
  private static client: S3Client | null = null;

  private static getConfig(): StorageConfig {
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
      secretAccessKey: process.env.S3_SECRET_KEY || process.env.AWS_SECRET_ACCESS_KEY,
    };
  }

  private static getClient(): S3Client {
    if (this.client) {
      return this.client;
    }

    const config = this.getConfig();
    this.client = new S3Client({
      region: config.region,
      endpoint: config.endpoint,
      forcePathStyle: config.forcePathStyle,
      credentials:
        config.accessKeyId && config.secretAccessKey
          ? {
              accessKeyId: config.accessKeyId,
              secretAccessKey: config.secretAccessKey,
            }
          : undefined,
    });

    return this.client;
  }

  static async uploadPdf(fileBuffer: Buffer, organizationId: string): Promise<{ key: string }> {
    const config = this.getConfig();
    const safeOrganizationId = organizationId.replace(/[^a-zA-Z0-9_-]/g, "_");
    const key = `${safeOrganizationId}/${Date.now()}-${randomUUID()}.pdf`;

    await this.getClient().send(
      new PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: fileBuffer,
        ContentType: "application/pdf",
      })
    );

    return { key };
  }

  static async getSignedUrl(key: string, expiresInSeconds = 900): Promise<string> {
    const config = this.getConfig();

    return getPresignedUrl(
      this.getClient(),
      new GetObjectCommand({
        Bucket: config.bucket,
        Key: key,
      }),
      { expiresIn: expiresInSeconds }
    );
  }
}
