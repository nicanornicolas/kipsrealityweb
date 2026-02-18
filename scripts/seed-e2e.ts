import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl || !dbUrl.includes('rentflow360_test')) {
        console.error('DANGER: Attempting to seed E2E data into a non-test database!');
        console.error(`Current URL: ${dbUrl}`);
        process.exit(1);
    }

    const passwordHash = await bcrypt.hash('password123', 10);
    const email = 'manager@test.com';

    console.log('🌱 Seeding E2E test data...');

    // 1. Create Organization
    const org = await prisma.organization.upsert({
        where: { slug: 'test-org' },
        update: {},
        create: {
            name: 'Test Organization',
            slug: 'test-org',
        },
    });

    // 1.1 Create Financial Entity & Accounts
    const entity = await prisma.financialEntity.upsert({
        where: { id: 'test-entity' },
        update: {},
        create: {
            id: 'test-entity',
            organizationId: org.id,
            name: 'Test Financial Entity',
        },
    });

    const accounts = [
        { code: '1000', name: 'Cash - Operating Account', type: 'ASSET' as const, isSystem: true },
        { code: '1100', name: 'Accounts Receivable', type: 'ASSET' as const, isSystem: true },
        { code: '4000', name: 'Rental Income', type: 'INCOME' as const, isSystem: true },
    ];

    for (const acc of accounts) {
        await prisma.account.upsert({
            where: {
                entityId_code: {
                    entityId: entity.id,
                    code: acc.code,
                },
            },
            update: {
                name: acc.name,
                type: acc.type,
                isSystem: acc.isSystem,
            },
            create: {
                entityId: entity.id,
                code: acc.code,
                name: acc.name,
                type: acc.type,
                isSystem: acc.isSystem,
            },
        });
    }

    // 2. Create Manager User
    const user = await prisma.user.upsert({
        where: { email },
        update: {
            passwordHash,
            status: 'ACTIVE',
            emailVerified: null,
            verificationToken: 'test-verification-token',
        },
        create: {
            email,
            firstName: 'Test',
            lastName: 'Manager',
            passwordHash,
            status: 'ACTIVE',
            emailVerified: null,
            verificationToken: 'test-verification-token',
        },
    });

    // 3. Link User to Org
    const orgUser = await prisma.organizationUser.upsert({
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

    // 4. Get or Create Property Type
    let propType = await prisma.propertyType.findFirst({
        where: { name: 'Apartment' },
    });
    if (!propType) {
        propType = await prisma.propertyType.create({
            data: {
                id: 'test-type-' + Date.now(),
                name: 'Apartment',
                description: 'Test Apartment Type',
            },
        });
    }

    // 5. Create Property
    const property = await prisma.property.create({
        data: {
            name: 'Test Property ' + Math.floor(Math.random() * 10000),
            address: '123 Test St',
            city: 'Test City',
            managerId: orgUser.id,
            organizationId: org.id,
            propertyTypeId: propType.id,
        },
    });

    // 6. Create Unit
    const unit = await prisma.unit.create({
        data: {
            unitNumber: '101',
            propertyId: property.id,
            rentAmount: 1500,
            isOccupied: false,
        },
    });

    // 7. Create Tenant User
    const tenantEmail = 'tenant@test.com';
    const tenantUser = await prisma.user.upsert({
        where: { email: tenantEmail },
        update: { status: 'ACTIVE', emailVerified: new Date() },
        create: {
            email: tenantEmail,
            firstName: 'John',
            lastName: 'Doe',
            passwordHash,
            status: 'ACTIVE',
            emailVerified: new Date(),
        },
    });

    // 8. Create Tenant Application (Required by Lease)
    const application = await prisma.tenantapplication.create({
        data: {
            fullName: 'John Doe',
            email: tenantEmail,
            phone: '1234567890',
            dob: new Date('1990-01-01'),
            moveInDate: new Date(),
            leaseType: 'STANDARD',
            occupancyType: 'RESIDENTIAL',
            leaseDuration: '12 months',
            propertyId: property.id,
            unitId: unit.id,
            userId: tenantUser.id,
            status: 'APPROVED',
        },
    });

    // 9. Create Lease
    await prisma.lease.create({
        data: {
            id: 'test-lease-' + Date.now(),
            applicationId: application.id,
            propertyId: property.id,
            unitId: unit.id,
            tenantId: tenantUser.id,
            startDate: new Date(),
            endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
            rentAmount: 1500,
            leaseStatus: 'ACTIVE',
        },
    });

    console.log('✅ E2E Seed complete.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
