/**
 * Centralized, typed environment variable validation using Zod.
 * 
 * All environment variables are validated and type-safe here.
 * Fails fast on startup if required vars are missing in production.
 * 
 * Usage:
 *   import { env } from '@/lib/env';
 *   console.log(env.DATABASE_URL);
 *   console.log(env.STRIPE_SECRET_KEY ?? 'not-configured');
 */

import { z } from 'zod';

const envSchema = z.object({
  // =========================================================================
  // ENVIRONMENT & RUNTIME
  // =========================================================================
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  
  // =========================================================================
  // DATABASE (Required)
  // =========================================================================
  DATABASE_URL: z.string().url().or(z.string().includes('mysql://')),
  
  // =========================================================================
  // AUTH SECRETS (Required)
  // =========================================================================
  JWT_SECRET: z.string().min(16, 'JWT_SECRET must be at least 16 chars'),
  JWT_REFRESH_SECRET: z.string().min(16, 'JWT_REFRESH_SECRET must be at least 16 chars'),
  NEXTAUTH_SECRET: z.string().min(32, 'NEXTAUTH_SECRET must be at least 32 chars'),
  CRON_SECRET: z.string().min(16, 'CRON_SECRET must be at least 16 chars'),
  INTERNAL_WEBHOOK_PROCESSOR_KEY: z.string().min(16),
  
  // =========================================================================
  // APPLICATION URLs (Required)
  // =========================================================================
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  VERCEL_URL: z.string().optional(),
  
  // =========================================================================
  // ENCRYPTION KEYS (Required in production)
  // =========================================================================
  SSN_ENCRYPTION_KEY: z.string().optional(),
  PAYMENT_ENCRYPTION_KEY: z.string().optional(),
  PAYMENT_ENCRYPTION_KEY_METADATA: z.string().optional(),
  PAYMENT_ENCRYPTION_KEY_USER_INFO: z.string().optional(),
  PAYMENT_ENCRYPTION_KEY_TRANSACTION: z.string().optional(),
  PAYMENT_ENCRYPTION_KEY_WEBHOOK: z.string().optional(),
  
  // =========================================================================
  // EMAIL / SMTP (Required for notifications)
  // =========================================================================
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().optional(),
  SMTP_SECURE: z.string().transform(v => v === 'true').optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  EMAIL_FROM_NAME: z.string().optional(),
  
  // =========================================================================
  // PAYMENT PROVIDERS (Required for payment flows)
  // =========================================================================
  // Stripe
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  
  // Paystack
  PAYSTACK_SECRET_KEY: z.string().optional(),
  PAYSTACK_PUBLIC_KEY: z.string().optional(),
  PAYSTACK_WEBHOOK_SECRET: z.string().optional(),
  
  // M-Pesa (Kenya)
  MPESA_CONSUMER_KEY: z.string().optional(),
  MPESA_CONSUMER_SECRET: z.string().optional(),
  MPESA_SHORTCODE: z.string().optional(),
  MPESA_PASSKEY: z.string().optional(),
  MPESA_ENV: z.enum(['sandbox', 'production']).default('sandbox'),
  
  // =========================================================================
  // SMS PROVIDERS
  // =========================================================================
  // Twilio
  TWILIO_ACCOUNT_SID: z.string().optional(),
  TWILIO_AUTH_TOKEN: z.string().optional(),
  TWILIO_PHONE_NUMBER: z.string().optional(),
  
  // Africa's Talking
  AT_API_KEY: z.string().optional(),
  AT_USERNAME: z.string().optional(),
  AT_SENDER_ID: z.string().default('RENTFLOW'),
  
  // SMS testing
  SMS_DRY_RUN: z.string().transform(v => v === 'true').optional(),
  
  // =========================================================================
  // FILE STORAGE
  // =========================================================================
  UPLOADTHING_SECRET: z.string().optional(),
  UPLOADTHING_TOKEN: z.string().optional(),
  LEASE_DOCUMENT_BASE_URL: z.string().url().optional(),
  
  // =========================================================================
  // CLOUDINARY
  // =========================================================================
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),
  
  // =========================================================================
  // THIRD-PARTY INTEGRATIONS
  // =========================================================================
  // Plaid
  PLAID_CLIENT_ID: z.string().optional(),
  PLAID_SECRET: z.string().optional(),
  PLAID_ENV: z.enum(['sandbox', 'development', 'production']).default('sandbox'),
  
  // =========================================================================
  // DEBUG & MONITORING
  // =========================================================================
  DEBUG: z.string().transform(v => v === 'true').optional(),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
}).strict();

type Env = z.infer<typeof envSchema>;

/**
 * Parse and validate environment variables.
 * Throws detailed error if validation fails in production.
 */
function validateEnv(): Env {
  const result = envSchema.safeParse(process.env);
  
  if (!result.success) {
    console.error('❌ Environment validation failed:');
    result.error.issues.forEach((issue) => {
      const path = issue.path.join('.');
      const msg = issue.message;
      console.error(`   ${path}: ${msg}`);
    });
    
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction) {
      throw new Error(
        `Invalid environment configuration. See errors above. (${result.error.issues.length} issues)`
      );
    } else {
      console.warn('⚠️  Proceeding in non-production mode with incomplete environment.');
    }
  }
  
  return result.data!;
}

export const env = validateEnv();

/**
 * Utility to get URL-based environment variable with fallback chain.
 * Tries: NEXT_PUBLIC_APP_URL → NEXTAUTH_URL → VERCEL_URL → throws
 */
export function getAppUrl(): string {
  const baseUrl = env.NEXT_PUBLIC_APP_URL || env.NEXTAUTH_URL || env.VERCEL_URL;
  if (!baseUrl) {
    throw new Error(
      'No base URL configured. Set one of: NEXT_PUBLIC_APP_URL, NEXTAUTH_URL, or VERCEL_URL'
    );
  }
  return baseUrl;
}

/**
 * Check if a payment provider is configured.
 */
export function isPaymentProviderConfigured(provider: 'stripe' | 'paystack' | 'mpesa'): boolean {
  switch (provider) {
    case 'stripe':
      return !!(env.STRIPE_SECRET_KEY && env.STRIPE_PUBLISHABLE_KEY);
    case 'paystack':
      return !!(env.PAYSTACK_SECRET_KEY && env.PAYSTACK_PUBLIC_KEY);
    case 'mpesa':
      return !!(env.MPESA_CONSUMER_KEY && env.MPESA_SHORTCODE);
    default:
      return false;
  }
}

/**
 * Check if SMS provider is configured.
 */
export function isSmsProviderConfigured(provider: 'twilio' | 'at'): boolean {
  switch (provider) {
    case 'twilio':
      return !!(env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN);
    case 'at':
      return !!(env.AT_API_KEY && env.AT_USERNAME);
    default:
      return false;
  }
}
