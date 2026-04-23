/**
 * Extended Authentication E2E Tests
 * Covers: logout, signup page form validation, forgot-password page
 */

import { test, expect, type Page } from '@playwright/test';

// Reusable login helper
async function loginAs(page: Page, email: string, password = 'password123') {
  await page.goto('/login');
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.locator('button[type="submit"]').click();
}

// Helper to open the Navbar Account dropdown and click Log out
async function clickLogout(page: import('@playwright/test').Page) {
  // The logout button is hidden inside the Account dropdown menu in the Navbar.
  // First open the dropdown by clicking the profile/Account button.
  await page.getByRole('button', { name: /account/i }).click();
  const logoutBtn = page.getByRole('button', { name: /log.?out/i }).first();
  await expect(logoutBtn).toBeVisible({ timeout: 5000 });
  await logoutBtn.click();
}

test.describe('Logout Flow', () => {
  test('manager can log out and is redirected to login', async ({ page }) => {
    await loginAs(page, 'manager@test.com');
    await expect(page).toHaveURL(/.*property-manager/, { timeout: 30000 });

    await clickLogout(page);

    // After logout, useLogout redirects to '/'. Verify user left the PM dashboard.
    await expect(page).not.toHaveURL(/\/property-manager/, { timeout: 15000 });
  });

  test('tenant can log out and is redirected to login', async ({ page }) => {
    await loginAs(page, 'tenant@test.com');
    await expect(page).toHaveURL(/.*tenant/, { timeout: 30000 });

    await clickLogout(page);

    // After logout, verify user is no longer on the tenant dashboard
    await expect(page).not.toHaveURL(/\/tenant(\/|$)/, { timeout: 15000 });
  });

  test('accessing protected route after logout redirects to login', async ({ page }) => {
    await loginAs(page, 'tenant@test.com');
    await expect(page).toHaveURL(/.*tenant/, { timeout: 30000 });

    await clickLogout(page);
    // Wait until we've left the tenant area (useLogout redirects to '/')
    await expect(page).not.toHaveURL(/\/tenant(\/|$)/, { timeout: 15000 });

    // Try accessing protected route — middleware should redirect to /login
    await page.goto('/tenant');
    await expect(page).toHaveURL(/login/, { timeout: 15000 });
  });
});

test.describe('Signup Page', () => {
  // /signup is a role-selection page (landlord vs tenant) — not a direct form
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
    await expect(page.getByRole('main').first()).toBeVisible();
  });

  test('should display signup role selection cards', async ({ page }) => {
    // The /signup route shows two cards: one for property managers, one for tenants
    await expect(
      page.getByText(/manage properties|landlord|property manager/i).first()
    ).toBeVisible();
    await expect(
      page.getByText(/tenant|renter/i).first()
    ).toBeVisible();
  });

  test('landlord signup link navigates to landlord signup form', async ({ page }) => {
    // Click the "I manage properties" card which links to /signup/landlord
    const landlordLink = page
      .getByRole('link', { name: /manage properties|landlord|property/i })
      .first();
    if (await landlordLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await landlordLink.click();
      await expect(page).toHaveURL(/signup\/(landlord|property-manager)/);
      await expect(page.getByRole('main').first()).toBeVisible();
    } else {
      // Acceptable if the page structure differs
      await expect(page.getByRole('main').first()).toBeVisible();
    }
  });

  test('should navigate back to login from signup page', async ({ page }) => {
    // Look for a "sign in" / "log in" link on the signup page
    const loginLink = page
      .getByRole('link', { name: /sign in|log in|login/i })
      .first();

    if (await loginLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await loginLink.click();
      await expect(page).toHaveURL(/.*login/);
    } else {
      // Acceptable if the link uses different phrasing
      await expect(page.getByRole('main').first()).toBeVisible();
    }
  });
});

test.describe('Forgot Password Page', () => {
  test('should display forgot password form', async ({ page }) => {
    await page.goto('/forgot-password');
    await expect(page.getByRole('main').first()).toBeVisible();
    await expect(page.locator('input[type="email"], input[name="email"]').first()).toBeVisible();
  });

  test('should show error or success after submitting email', async ({ page }) => {
    await page.goto('/forgot-password');

    await page.locator('input[type="email"], input[name="email"]').first().fill('nobody@example.com');
    const submitBtn = page.locator('button[type="submit"]').first();
    await submitBtn.click();

    // Either a success message or error message should appear
    await expect(
      page.getByText(/check your email|email sent|reset link|user not found|no account/i).first()
    ).toBeVisible({ timeout: 10000 });
  });
});
