import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

test.describe('Tenant Invitation Flow', () => {

    test('PM can invite a tenant to a unit', async ({ page }) => {
        test.setTimeout(120000);

        // Mirror browser console to terminal
        page.on('console', msg => {
            if (msg.text().startsWith('DEBUG:')) {
                console.log(`[BROWSER-DEBUG] ${msg.text()}`);
            }
        });

        // 1. Verification Bypass (The "Magic" Step)
        // Poll for user creation (seed may still be committing)
        let user = null;
        for (let i = 0; i < 20; i++) {
            user = await prisma.user.findUnique({
                where: { email: 'manager@test.com' },
                select: { verificationToken: true, emailVerified: true }
            });
            if (user) break;
            await new Promise(r => setTimeout(r, 500));
        }

        if (!user) {
            throw new Error('User manager@test.com not found after 10 seconds of polling. Seed may have failed.');
        }

        if (user?.emailVerified) {
            await page.goto('/login');
        } else if (user?.verificationToken) {
            await page.goto(`/api/auth/verify-email?token=${user.verificationToken}`);
            await expect(page).toHaveURL(/\/login\?verified=true/, { timeout: 20000 });
        }

        // DEBUG: Check if we hit a server error
        const content = await page.content();
        if (content.includes('Internal Server Error') || content.includes('Application error')) {
            console.error('🚨 SERVER ERROR DETECTED ON LOGIN PAGE:');
            console.error(content); // This will print the stack trace in CI logs
        }

        // 2. Login
        await page.waitForSelector('input[name="email"]');
        await page.fill('input[name="email"]', 'manager@test.com');
        await page.fill('input[name="password"]', 'password123');

        // WAIT FOR THE NETWORK RESPONSE - prevents flakiness
        const [loginResponse] = await Promise.all([
            page.waitForResponse(resp =>
                resp.url().includes('/api/auth') && resp.request().method() === 'POST'
            ),
            page.click('button[type="submit"]'),
        ]);

        // Assert the backend actually accepted the credentials
        if (!loginResponse.ok()) {
            throw new Error(`Login request failed: ${loginResponse.status()} ${loginResponse.statusText()}`);
        }

        // Enhanced error handling - check for multiple error indicators
        const errorSelectors = [
            '.toast-error',
            '[role="alert"]',
            'div.bg-red-50 p',
            '.text-red-500',
            '[data-testid="error-message"]',
            '[data-testid="toast-error"]',
            '.text-red-600',
        ];

        let loginError = null;
        for (const selector of errorSelectors) {
            const errorEl = page.locator(selector);
            if (await errorEl.isVisible({ timeout: 3000 }).catch(() => false)) {
                const errorMsg = await errorEl.textContent().catch(() => '');
                if (errorMsg && errorMsg.trim()) {
                    loginError = errorMsg.trim();
                    console.error('DEBUG: Login Error found in UI:', loginError);
                    break;
                }
            }
        }

        if (loginError) {
            throw new Error(`Login failed with error: ${loginError}`);
        }

        // Now it is safe to wait for the redirect
        await expect(page).toHaveURL(/\/property-manager/, { timeout: 30000 });

        // 3. Navigate to "My tenants"
        await page.getByRole('button', { name: 'My tenants' }).click();
        await expect(page).toHaveURL(/\/property-manager\/content\/tenants/, { timeout: 20000 });

        // 4. Open Invite Modal
        await page.click('text=New Invite');
        await expect(page.locator('text=Invite New Tenant')).toBeVisible();

        // 5. Fill Invite Form
        const leaseSelect = page.locator('#lease-select');
        await expect(leaseSelect.locator('option')).not.toHaveCount(1, { timeout: 20000 });
        await leaseSelect.selectOption({ index: 1 });

        const testEmail = `tenant_${Date.now()}@example.com`;
        await page.fill('#invite-email', testEmail);
        await page.fill('input[placeholder="John"]', 'Test');
        await page.fill('input[placeholder="Doe"]', 'Tenant');
        await page.fill('input[placeholder="+254 7XX XXX XXX"]', '1234567890');

        // 6. Send
        const sendButton = page.locator('button:has-text("Send Invite")');
        await expect(sendButton).toBeEnabled();
        await sendButton.click();

        // 7. Verify Success Feedback
        await expect(page.locator('text=Invite sent successfully!')).toBeVisible({ timeout: 25000 });

        // 8. Verify UI Update (Switch to Invites tab)
        // Click the "Invites" tab button specifically
        await page.getByRole('button', { name: 'Invites' }).click();

        // Wait for table to update
        await expect(page.locator('tr').filter({ hasText: testEmail })).toBeVisible({ timeout: 15000 });
    });
});
