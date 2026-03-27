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
    // FORCE Next.js to use the test environment variables at runtime
    // In CI: npm run start uses production build; in local: npm run dev uses dev server
    // Wrap with dotenv to inject .env.test variables into the running process
    command: process.env.CI
      ? "npx dotenv -e .env.test -- npm run start"
      : "npx dotenv -e .env.test -- npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: process.env.CI ? "pipe" : "ignore",
    stderr: "pipe",
    timeout: 120000, // 2 minutes to start the server
  },
});
