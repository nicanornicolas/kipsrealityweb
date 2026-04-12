import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // 🛡️ SAFETY CHECK
  const dbUrl = process.env['DATABASE_URL'];
  if (!dbUrl || !dbUrl.includes('rentflow_test')) {
    console.error('🚨 DANGER: Attempting to seed E2E data into a non-test database!');
    console.error('Database URL:', dbUrl);
    process.exit(1);
  }

  console.log('🌱 Seeding E2E Test Data...');

  // 1. Clean up (Order matters for Foreign Keys)
  // Deleting child tables first
  await prisma.invite.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.invoice.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.unit.deleteMany();
  await prisma.property.deleteMany();
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

  // 3. Create Manager User
  const hashedPassword = await bcrypt.hash('password123', 12);
  const manager = await prisma.user.create({
    data: {
      email: 'manager@test.com',
      passwordHash: hashedPassword,
      firstName: 'Test',
      lastName: 'Manager',
      status: 'ACTIVE',
      emailVerified: new Date(), // Verified
      organizationUsers: {
        create: {
          organizationId: org.id,
          role: 'PROPERTY_MANAGER',
        },
      },
    },
  });

  // Get the OrgUser ID (needed for property managerId)
  const orgUser = await prisma.organizationUser.findFirstOrThrow({
    where: { userId: manager.id }
  });

  // 4. Create Tenant User
  const tenantHashedPassword = await bcrypt.hash('password123', 12);
  const tenant = await prisma.user.create({
    data: {
      email: 'tenant@test.com',
      passwordHash: tenantHashedPassword,
      firstName: 'Test',
      lastName: 'Tenant',
      status: 'ACTIVE',
      emailVerified: new Date(),
      organizationUsers: {
        create: {
          organizationId: org.id,
          role: 'TENANT',
        },
      },
    },
  });

  // 4b. Create Vendor User
  await prisma.user.create({
    data: {
      email: 'vendor@test.com',
      passwordHash: await bcrypt.hash('password123', 12),
      firstName: 'Test',
      lastName: 'Vendor',
      status: 'ACTIVE',
      emailVerified: new Date(),
      organizationUsers: {
        create: {
          organizationId: org.id,
          role: 'VENDOR',
        },
      },
    },
  });

  // 4c. Create Admin User
  await prisma.user.create({
    data: {
      email: 'admin@test.com',
      passwordHash: await bcrypt.hash('password123', 12),
      firstName: 'Test',
      lastName: 'Admin',
      status: 'ACTIVE',
      emailVerified: new Date(),
      organizationUsers: {
        create: {
          organizationId: org.id,
          role: 'SYSTEM_ADMIN',
        },
      },
    },
  });

  // 4d. Create Agent User
  await prisma.user.create({
    data: {
      email: 'agent@test.com',
      passwordHash: await bcrypt.hash('password123', 12),
      firstName: 'Test',
      lastName: 'Agent',
      status: 'ACTIVE',
      emailVerified: new Date(),
      organizationUsers: {
        create: {
          organizationId: org.id,
          role: 'AGENT',
        },
      },
    },
  });

  // 5. Create Property
  const property = await prisma.property.create({
    data: {
      name: 'Sunset Apartments',
      organizationId: org.id,
      managerId: orgUser.id,
      city: 'Nairobi',
      address: '123 Test St',
    }
  });

  // 6. Create Unit
  const unit = await prisma.unit.create({
    data: {
      unitNumber: '101',
      propertyId: property.id,
      rentAmount: 15000,
      isOccupied: true, // Needs to be true to have an active lease
    }
  });

  // 7. Create Tenant Application (required for lease foreign key)
  const tenantApplication = await prisma.tenantApplication.create({
    data: {
      fullName: 'Test Tenant',
      email: 'tenant@test.com',
      phone: '+254712345678',
      dob: new Date('1990-01-01'),
      leaseType: 'RESIDENTIAL',
      occupancyType: 'PRIMARY',
      moveInDate: new Date(),
      leaseDuration: '12 months',
      propertyId: property.id,
      unitId: unit.id,
      status: 'APPROVED',
      consent: true,
      userId: tenant.id,
    }
  });

  // 8. Create Lease (The item missing from your dropdown!)
  const lease = await prisma.lease.create({
    data: {
      applicationId: tenantApplication.id, // Use the actual application ID
      propertyId: property.id,
      unitId: unit.id,
      tenantId: tenant.id,
      startDate: new Date(),
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // 1 year from now
      rentAmount: 15000,
      leaseStatus: 'ACTIVE',
      paymentDueDay: 5,
      paymentFrequency: 'MONTHLY'
    }
  });

  console.log(`✅ Seeded: Org, Manager, Tenant, Vendor, Admin, Agent, Property, Unit (101), Tenant Application, Lease (${lease.id})`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
