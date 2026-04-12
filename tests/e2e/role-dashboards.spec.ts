/**
 * Role Dashboards E2E Tests
 * Covers: vendor, admin, and agent dashboard access and navigation
 *
 * Seeded users (from seed.e2e.ts):
 *   vendor@test.com  / password123  → VENDOR
 *   admin@test.com   / password123  → SYSTEM_ADMIN
 *   agent@test.com   / password123  → AGENT
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

async function loginAs(page: Page, email: string) {
  const response = await page.request.post('/api/auth/login', {
    data: {
      email,
      password: 'password123',
    },
  });
  expect(response.ok()).toBe(true);

  const dashboardByEmail: Record<string, string> = {
    'vendor@test.com': '/vendor',
    'admin@test.com': '/admin',
    'agent@test.com': '/agent',
    'tenant@test.com': '/tenant',
    'manager@test.com': '/property-manager',
  };

  const targetDashboard = dashboardByEmail[email] ?? '/';
  await gotoWithRetry(page, targetDashboard);
}

// ─────────────────────────────── VENDOR ────────────────────────────────────

test.describe('Vendor Dashboard', () => {
  test('vendor can log in and reach vendor dashboard', async ({ page }) => {
    await loginAs(page, 'vendor@test.com');
    await expect(page).toHaveURL(/.*vendor/, { timeout: 30000 });
    await expect(page.getByRole('main').first()).toBeVisible({ timeout: 10000 });
  });

  test('vendor dashboard renders without errors', async ({ page }) => {
    await loginAs(page, 'vendor@test.com');
    await expect(page).toHaveURL(/.*vendor/, { timeout: 30000 });

    // Page should not show a hard error
    await expect(
      page.getByText(/application error|internal server error|something went wrong/i).first()
    ).not.toBeVisible({ timeout: 5000 });
  });

  test('vendor cannot access property-manager dashboard', async ({ page }) => {
    await loginAs(page, 'vendor@test.com');
    await expect(page).toHaveURL(/.*vendor/, { timeout: 30000 });

    await gotoWithRetry(page, '/property-manager');
    const url = page.url();
    // Should redirect away — to login, unauthorized, or own dashboard
    expect(url).not.toMatch(/\/property-manager\/?$/);
  });
});

// ─────────────────────────────── ADMIN ─────────────────────────────────────

test.describe('Admin Dashboard', () => {
  test('admin can log in and reach admin dashboard', async ({ page }) => {
    await loginAs(page, 'admin@test.com');
    await expect(page).toHaveURL(/.*admin/, { timeout: 30000 });
    await expect(page.getByRole('main').first()).toBeVisible({ timeout: 10000 });
  });

  test('admin dashboard renders without errors', async ({ page }) => {
    await loginAs(page, 'admin@test.com');
    await expect(page).toHaveURL(/.*admin/, { timeout: 30000 });

    await expect(
      page.getByText(/application error|internal server error|something went wrong/i).first()
    ).not.toBeVisible({ timeout: 5000 });
  });

  test('admin can navigate to users management', async ({ page }) => {
    await loginAs(page, 'admin@test.com');
    await expect(page).toHaveURL(/.*admin/, { timeout: 30000 });

    await gotoWithRetry(page, '/admin/users');
    await expect(page.getByRole('main').first()).toBeVisible({ timeout: 10000 });
  });

  test('admin can navigate to content management', async ({ page }) => {
    await loginAs(page, 'admin@test.com');
    await expect(page).toHaveURL(/.*admin/, { timeout: 30000 });

    // Try a known content-crud route
    await gotoWithRetry(page, '/admin/content/Hero-crud');
    await expect(page.getByRole('main').first()).toBeVisible({ timeout: 10000 });
  });

  test('admin cannot be accessed by a tenant', async ({ page }) => {
    await loginAs(page, 'tenant@test.com');
    await expect(page).toHaveURL(/.*tenant/, { timeout: 30000 });

    await gotoWithRetry(page, '/admin');
    const url = page.url();
    expect(url).not.toMatch(/\/admin\/?$/);
  });
});

// ─────────────────────────────── AGENT ─────────────────────────────────────

test.describe('Agent Dashboard', () => {
  test('agent can log in and reach agent dashboard', async ({ page }) => {
    await loginAs(page, 'agent@test.com');
    await expect(page).toHaveURL(/.*agent/, { timeout: 30000 });
    await expect(page.getByRole('main').first()).toBeVisible({ timeout: 10000 });
  });

  test('agent dashboard renders without errors', async ({ page }) => {
    await loginAs(page, 'agent@test.com');
    await expect(page).toHaveURL(/.*agent/, { timeout: 30000 });

    await expect(
      page.getByText(/application error|internal server error|something went wrong/i).first()
    ).not.toBeVisible({ timeout: 5000 });
  });

  test('agent cannot access property-manager dashboard', async ({ page }) => {
    await loginAs(page, 'agent@test.com');
    await expect(page).toHaveURL(/.*agent/, { timeout: 30000 });

    await gotoWithRetry(page, '/property-manager');
    const url = page.url();
    expect(url).not.toMatch(/\/property-manager\/?$/);
  });
});
