import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    // 🛡️ SAFETY CHECK: Fail if not pointing to the test DB
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl || !dbUrl.includes('rentflow360_test')) {
        console.error('🚨 DANGER: Attempting to seed E2E data into a non-test database!');
        console.error(`Current URL: ${dbUrl}`);
        process.exit(1);
    }

    console.log('🌱 Seeding E2E Test Data...');

    // 1. Clean up
    await prisma.organizationUser.deleteMany();
    await prisma.user.deleteMany();
    await prisma.organization.deleteMany();

    // 2. Create Organization
    const org = await prisma.organization.create({
        data: {
            name: 'E2E Test Org',
            slug: 'e2e-test-org',
            isActive: true,
        },
    });

    // 3. Create a Verified Manager
    const hashedPassword = await bcrypt.hash('password123', 12);

    await prisma.user.create({
        data: {
            email: 'manager@test.com',
            passwordHash: hashedPassword,
            firstName: 'Test',
            lastName: 'Manager',
            status: 'ACTIVE',
            emailVerified: new Date(), // ✅ Verified
            organizationUsers: {
                create: {
                    organizationId: org.id,
                    role: 'PROPERTY_MANAGER',
                },
            },
        },
    });

    console.log(`✅ Created user: manager@test.com / password123`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
