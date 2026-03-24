import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E Test Configuration
 * 
 * This configuration is designed for refocused E2E testing that:
 * - Uses a dedicated test database via docker-compose.test.yml
 * - Runs against the local development server
 * - Provides proper CI/CD integration
 * - Includes trace and screenshot support for debugging
 */

export default defineConfig({
  testDir: './tests/e2e',
  
  /* Run tests in files in parallel - safe for E2E since each test should be independent */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env['CI'],
  
  /* Retry failed tests - 2 retries on CI, 0 locally */
  retries: process.env['CI'] ? 2 : 0,
  
  /* Workers - 1 for local to avoid database conflicts, CI can use more */
  workers: process.env['CI'] ? 2 : 1,
  
  /* Reporter to use - HTML for local, JUnit for CI */
  reporter: process.env['CI'] 
    ? [['junit', { outputFile: 'playwright-results.xml' }], ['html']] 
    : 'html',
  
  /* Timeout configurations */
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  
  /* Shared settings for all the projects below. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env['E2E_BASE_URL'] || 'http://localhost:3000',
    
    /* Collect trace when retrying the failed test. */
    trace: 'on-first-retry',
    
    /* Collect screenshots on failure for debugging */
    screenshot: 'only-on-failure',
    
    /* Record video for failed tests */
    video: 'retain-on-failure',
    
    /* Use test ID attribute for better test selectors */
    testIdAttribute: 'data-testid',
  },
  
  /* Configure projects for major browsers - All browsers on CI, Chromium only locally for speed */
  projects: process.env.CI
    ? [
        // CI RUNS EVERYTHING (Maximum Coverage)
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
      ]
    : [
        // LOCAL RUNS ONLY CHROME (Maximum Speed for Developers)
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
      ],
  
  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env['CI'],
    stdout: process.env['CI'] ? 'pipe' : 'ignore',
    stderr: 'pipe',
    timeout: 120000, // 2 minutes to start the server
  },
  
});
