/**
 * Property Manager Extended E2E Tests
 * Covers: listings, finance (journal/ledger/invoices), documents, meter-readings,
 *         vendors list, units, maintenance, settings, tenants list
 *
 * Seeded user: manager@test.com / password123
 */

import { test, expect, type Page } from '@playwright/test';

async function gotoWithRetry(page: Page, path: string, attempts = 3) {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      await page.goto(path, { waitUntil: 'domcontentloaded', timeout: 45000 });
      return;
    } catch (error) {
      lastError = error;
      if (i === attempts - 1) break;
      await page.waitForTimeout(1000);
    }
  }
  throw lastError;
}

async function loginAsManager(page: Page) {
  await gotoWithRetry(page, '/login');
  await page.fill('input[name="email"]', 'manager@test.com');
  await page.fill('input[name="password"]', 'password123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/.*property-manager/, { timeout: 30000 });
}

// Shared: page renders without an application error
async function expectPageLoads(page: Page) {
  await expect(page.getByRole('main').first()).toBeVisible({ timeout: 15000 });
  await expect(
    page.getByText(/application error|internal server error|something went wrong/i).first()
  ).not.toBeVisible({ timeout: 3000 });
}

test.describe('PM — Listings', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('listings page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/listings');
    await expectPageLoads(page);
  });
});

test.describe('PM — Finance', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('finance journal page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/finance/journal');
    await expectPageLoads(page);
  });

  test('finance ledger page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/finance/ledger');
    await expectPageLoads(page);
  });

  test('finance invoices page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/finance/invoices');
    await expectPageLoads(page);
  });

  test('finance tenants (rent roll) page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/finance/tenants');
    await expectPageLoads(page);
  });
});

test.describe('PM — Content Management', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('meter readings page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/meter-readings');
    await expectPageLoads(page);
  });

  test('payments page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/payments');
    await expectPageLoads(page);
  });

  test('tenants list page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/tenants');
    await expectPageLoads(page);
  });

  test('utilities page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/utilities');
    await expectPageLoads(page);
  });

  test('lease management page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/lease');
    await expectPageLoads(page);
  });

  test('invites page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/invites');
    await expectPageLoads(page);
  });

  test('tenant applications page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/content/tenantapplication');
    await expectPageLoads(page);
  });
});

test.describe('PM — Units & Properties', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('units list page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/units');
    await expectPageLoads(page);
  });

  test('directory page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/directory');
    await expectPageLoads(page);
  });

  test('view-own-property page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/view-own-property');
    await expectPageLoads(page);
  });
});

test.describe('PM — Documents & Vendors', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('documents page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/documents');
    await expectPageLoads(page);
  });

  test('vendors page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/maintenance/vendors');
    await expectPageLoads(page);
  });
});

test.describe('PM — Maintenance', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('maintenance page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/maintenance/requests');
    await expectPageLoads(page);
  });
});

test.describe('PM — Settings & Profile', () => {
  test.beforeEach(async ({ page }) => loginAsManager(page));

  test('settings page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/settings');
    await expectPageLoads(page);
  });

  test('profile page loads', async ({ page }) => {
    await gotoWithRetry(page, '/property-manager/profile');
    await expectPageLoads(page);
  });
});
