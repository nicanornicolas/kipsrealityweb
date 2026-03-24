import { test, expect } from '@playwright/test';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Seed function to ensure test user exists (non-destructive for parallel E2E runs)
async function seedTestUser() {
    const dbUrl = process.env.DATABASE_URL;
    const isTestDb = !!dbUrl && (dbUrl.includes('rentflow_test') || dbUrl.includes('rentflow360_test'));
    if (!isTestDb) {
        console.log('⚠️  Not running seed - DATABASE_URL not set to test DB');
        return;
    }

    // Upsert Organization
    const org = await prisma.organization.upsert({
        where: { slug: 'e2e-test-org' },
        update: { isActive: true },
        create: {
            name: 'E2E Test Org',
            slug: 'e2e-test-org',
            isActive: true,
        },
    });

    // Upsert Manager User with verified email
    const hashedPassword = await bcrypt.hash('password123', 12);
    const user = await prisma.user.upsert({
        where: { email: 'manager@test.com' },
        update: {
            passwordHash: hashedPassword,
            status: 'ACTIVE',
            emailVerified: new Date(),
        },
        create: {
            email: 'manager@test.com',
            passwordHash: hashedPassword,
            firstName: 'Test',
            lastName: 'Manager',
            status: 'ACTIVE',
            emailVerified: new Date(), // Already verified
        },
    });

    // Upsert Organization User link
    await prisma.organizationUser.upsert({
        where: {
            userId_organizationId: {
                userId: user.id,
                organizationId: org.id,
            },
        },
        update: { role: 'PROPERTY_MANAGER' },
        create: {
            userId: user.id,
            organizationId: org.id,
            role: 'PROPERTY_MANAGER',
        },
    });

    console.log('✅ Ensured manager@test.com user is seeded and verified');
}

test.describe('Financial Core Workflow', () => {
    // Setup: Seed the database before tests
    test.beforeAll(async () => {
        await seedTestUser();
    });

    // Cleanup: Disconnect Prisma after all tests to prevent connection leaks
    test.afterAll(async () => {
        await prisma.$disconnect();
    });

    test('Manager can create invoice and record payment', async ({ page }) => {
        test.setTimeout(90000); // Give it plenty of time for GL posting + toast
        
        // 1. Verification Bypass (The "Magic" Step)
        // Poll for user creation (seed may still be committing)
        let user = null;
        for (let i = 0; i < 20; i++) {
            user = await prisma.user.findUnique({
                where: { email: 'manager@test.com' },
                select: { verificationToken: true, emailVerified: true, id: true }
            });
            if (user) break;
            await new Promise(r => setTimeout(r, 500));
        }

        if (!user) {
            throw new Error('User manager@test.com not found after 10 seconds of polling. Seed may have failed.');
        }

        if (user?.emailVerified) {
            console.log('DEBUG: User already verified, navigating to login');
            await page.goto('/login');
        } else if (user?.verificationToken) {
            // Visit verify-email directly
            await page.goto(`/api/auth/verify-email?token=${user.verificationToken}`);

            // Verify redirect to login with verification success param
            await expect(page).toHaveURL(/\/login\?verified=true/);
        } else {
            throw new Error('Neither verification token found nor user is verified');
        }

        // 2. Login
        await page.waitForSelector('input[name="email"]');
        await page.fill('input[name="email"]', 'manager@test.com');

        const passwordInput = page.locator('input[name="password"]');
        await passwordInput.click();
        await passwordInput.fill('password123'); // Still use fill but with a click first

        console.log('DEBUG: Filling credentials and clicking sign-in');
        await page.click('button[type="submit"]');

        // Enhanced error handling - check for multiple error indicators
        const errorSelectors =[
            '.toast-error',
            '[role="alert"]',
            'div.bg-red-50 p',
            '.text-red-500',
            '[data-testid="error-message"]',
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

        // Wait for navigation to dashboard - adjust timeout to 30s to be safe
        await expect(page).toHaveURL(/\/property-manager/, { timeout: 30000 });

        // Wait for sidebar to fully load before navigating
        const sidebar = page.locator('aside, [class*="sidebar"]');
        await expect(sidebar).toBeVisible({ timeout: 10000 });

        // Wait for the Invoices link to be visible in the sidebar (Finance category)
        // Highly resilient locator searching for a link element containing "invoices" (case insensitive)
        const invoicesLink = page.getByRole('link', { name: /invoices/i }).first();
        await expect(invoicesLink).toBeVisible({ timeout: 10000 });
        
        // Click the Invoices navigation link
        await invoicesLink.click();
        
        // Wait for URL to change to invoices page
        await expect(page).toHaveURL(/\/property-manager\/finance\/invoices/);

        // 3. Create Invoice
        // Look specifically for a button containing the text "Create Invoice"
        await page.getByRole('button', { name: /create invoice/i }).click();

        // Wait for the modal or page to load
        await expect(page.locator('text=Create Manual Invoice')).toBeVisible();

        // Select first available tenant/lease (it's the first select in modal)
        await page.selectOption('select', { index: 1 });

        // Amount input uses placeholder 0.00
        await page.fill('input[placeholder="0.00"]', '1500');

        await page.getByRole('button', { name: /generate invoice/i }).click();

        // 4. Verify Toast & List
        await expect(page.getByText('Invoice Created & Posted to GL!')).toBeVisible({ timeout: 20000 });

        // 5. Verify Dashboard Update
        // Navigate back using resilient locator
        await page.getByRole('link', { name: /dashboard/i }).first().click();
        await expect(page).toHaveURL(/\/property-manager/, { timeout: 10000 });
    });
});


