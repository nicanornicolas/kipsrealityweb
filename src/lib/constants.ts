// src/lib/constants.ts

export const APP_NAME = "RentFlow360";
export const SUPPORT_EMAIL = process.env.SMTP_USER || "Info@rentflow360.com";

/**
 * Determines the correct base URL for links (Verification, Reset Password).
 * Prioritizes explicit environment variables.
 */
export const getBaseUrl = () => {
    // 1. Check the specific APP_URL env var first
    if (process.env.NEXT_PUBLIC_APP_URL) {
        console.log("📌 Using NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
        return process.env.NEXT_PUBLIC_APP_URL;
    }

    // 2. Check the generic BASE_URL (since you have both in your .env)
    if (process.env.NEXT_PUBLIC_BASE_URL) {
        console.log("📌 Using NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL);
        return process.env.NEXT_PUBLIC_BASE_URL;
    }

    // 3. Check Vercel-specific environment variables
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
        const vercelUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
        console.log("📌 Using NEXT_PUBLIC_VERCEL_URL:", vercelUrl);
        return vercelUrl;
    }

    if (process.env.VERCEL_URL) {
        const vercelUrl = `https://${process.env.VERCEL_URL}`;
        console.log("📌 Using VERCEL_URL:", vercelUrl);
        return vercelUrl;
    }

    throw new Error('Base URL environment variables are not set. Configure NEXT_PUBLIC_APP_URL or NEXT_PUBLIC_BASE_URL.');
};
