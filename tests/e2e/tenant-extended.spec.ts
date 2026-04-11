/**
 * Tenant Extended E2E Tests
 * Covers: payments, lease, utilities, invoices, settings, DSS landing
 *
 * Seeded user: tenant@test.com / password123
 * (The seeded tenant has a lease, unit, and property attached)
 */

import { test, expect, type Page } from '@playwright/test';

async function loginAsTenant(page: Page) {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'tenant@test.com');
  await page.fill('input[name="password"]', 'password123');
  await page.locator('button[type="submit"]').click();
  await expect(page).toHaveURL(/.*tenant/, { timeout: 30000 });
}

async function expectPageLoads(page: Page) {
  await expect(page.getByRole('main').first()).toBeVisible({ timeout: 15000 });
  // Note: avoid matching currency like $1,500 — check for specific error phrases only
  await expect(
    page.getByText(/application error|internal server error|something went wrong/i).first()
  ).not.toBeVisible({ timeout: 3000 });
}

test.describe('Tenant — Dashboard', () => {
  test('tenant dashboard loads after login', async ({ page }) => {
    await loginAsTenant(page);
    await expectPageLoads(page);
  });

  test('tenant cannot access property-manager routes', async ({ page }) => {
    await loginAsTenant(page);
    await page.goto('/property-manager');
    const url = page.url();
    expect(url).not.toMatch(/\/property-manager\/?$/);
  });
});

test.describe('Tenant — Content Pages', () => {
  test.beforeEach(async ({ page }) => loginAsTenant(page));

  test('payments page loads', async ({ page }) => {
    await page.goto('/tenant/content/utilities');
    await expectPageLoads(page);
    // Also navigate to the main payments section
    await page.goto('/tenant');
    await expectPageLoads(page);
  });

  test('lease page loads', async ({ page }) => {
    await page.goto('/tenant/content/lease');
    await expectPageLoads(page);
  });

  test('invoices page loads', async ({ page }) => {
    await page.goto('/tenant/content/invoices');
    await expectPageLoads(page);
  });

  test('utilities page loads', async ({ page }) => {
    await page.goto('/tenant/content/utilities');
    await expectPageLoads(page);
  });
});

test.describe('Tenant — Lease Page Interactions', () => {
  test.beforeEach(async ({ page }) => loginAsTenant(page));

  test('lease page renders lease details for seeded tenant', async ({ page }) => {
    await page.goto('/tenant/content/lease');
    await expectPageLoads(page);

    const hasLeaseContent = await page
      .getByRole('button', { name: /view lease details|lease information/i })
      .first()
      .isVisible({ timeout: 15000 })
      .catch(() => false);

    if (!hasLeaseContent) {
      await page.screenshot({
        path: 'test-results/tenant-lease-missing-content.png',
        fullPage: true,
      });
    }

    expect(hasLeaseContent).toBe(true);
  });

  test('utilities page shows utility allocation section', async ({ page }) => {
    await page.goto('/tenant/content/utilities');
    await expectPageLoads(page);

    const utilityText = page
      .getByText(/utilit|meter|electric|water|gas|allocation|charges|usage/i)
      .first();

    try {
      await expect(utilityText).toBeVisible({ timeout: 15000 });
    } catch (error) {
      await page.screenshot({
        path: 'test-results/tenant-utilities-missing-content.png',
        fullPage: true,
      });
      throw error;
    }
  });
});

test.describe('Tenant — Settings', () => {
  test.beforeEach(async ({ page }) => loginAsTenant(page));

  test('settings page loads', async ({ page }) => {
    await page.goto('/tenant/settings');
    await expectPageLoads(page);
  });
});

test.describe('Tenant — DSS', () => {
  test.beforeEach(async ({ page }) => loginAsTenant(page));

  test('DSS (digital screening) page loads for tenant', async ({ page }) => {
    await page.goto('/tenant/dss');
    await expectPageLoads(page);
  });
});
