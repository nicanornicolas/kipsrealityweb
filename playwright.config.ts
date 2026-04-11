import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

/**
 * Playwright E2E Test Configuration
 * 
 * This configuration is designed for refocused E2E testing that:
 * - Uses a dedicated test database via docker-compose.test.yml
 * - Uses dev server locally (npm run dev) for hot-reloading
 * - Uses production build in CI (build happens in CI workflow, webServer runs 'npm run start')
 * - Runs Chromium only on PRs, all browsers on main branch merges
 * - Provides proper CI/CD integration
 * - Includes trace and screenshot support for debugging
 */

// Load test env vars
const envResult = dotenv.config({ path: ".env.test" });
if (envResult.error) {
  console.warn("Warning: .env.test not found, using process.env only");
}

// Force a deterministic browser cache path for Playwright in all environments.
// This prevents stale machine-level overrides (e.g. D:\\playwright-browsers)
// from breaking browser launches.
process.env.PLAYWRIGHT_BROWSERS_PATH = "0";

export default defineConfig({
  testDir: "./tests/e2e",
  
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  
  // E2E tests share seeded accounts (manager@test.com, tenant@test.com) and perform DB mutations.
  // Keep workers at 1 to avoid cross-test interference/flakiness in both CI and local.
  workers: 1,
  
  reporter: process.env.CI ? [["html"], ["json", { outputFile: "playwright-results/results.json" }]] : "list",
  
  use: {
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10000, // Explicitly timeout actions after 10s to fail fast
  },

  // Only run Chromium in CI for PRs to save time. Run all on 'main'.
  // Use explicit string comparison because RUN_ALL_BROWSERS is set to 'true'/'false' strings in CI.
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    // Conditionally add Firefox and Webkit only when RUN_ALL_BROWSERS is explicitly 'true'
    ...(process.env.RUN_ALL_BROWSERS === 'true' ? [
      {
        name: "firefox",
        use: { ...devices["Desktop Firefox"] },
      },
      {
        name: "webkit",
        use: { ...devices["Desktop Safari"] },
      }
    ] : []),
  ],

  webServer: {
    // If CI, run the already-built production server (build happens in CI workflow before this)
    // If local, run the dev server for hot-reloading while writing tests
    command: process.env.CI ? "node .next/standalone/server.js" : "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
    timeout: 180000, // 3 minutes for CI - give it time to connect to DB
    // Add health check endpoint
    env: {
      DATABASE_URL: process.env.DATABASE_URL,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL,
      JWT_SECRET: process.env.JWT_SECRET,
      JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
      STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
      MPESA_CONSUMER_KEY: process.env.MPESA_CONSUMER_KEY,
      MPESA_CONSUMER_SECRET: process.env.MPESA_CONSUMER_SECRET,
      MPESA_SHORTCODE: process.env.MPESA_SHORTCODE,
      MPESA_PASSKEY: process.env.MPESA_PASSKEY,
      MPESA_ENV: process.env.MPESA_ENV,
    },
  },
});
