import { prisma } from '@rentflow/iam';
import { listingService, propertyDeactivationService, ListingStatus } from '@rentflow/property';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function ensureListingPrerequisites() {
  await prisma.categoryMarketplace.upsert({
    where: { name: 'Property' },
    update: {},
    create: { name: 'Property', description: 'Property listing category' },
  });

  const statuses: ListingStatus[] = [
    ListingStatus.PRIVATE,
    ListingStatus.ACTIVE,
    ListingStatus.SUSPENDED,
    ListingStatus.PENDING,
    ListingStatus.EXPIRED,
    ListingStatus.MAINTENANCE,
    ListingStatus.COMING_SOON,
  ];

  for (const status of statuses) {
    await prisma.listingStatus.upsert({
      where: { name: status },
      update: {},
      create: { name: status, description: `Auto-seeded by verify-property-deactivation-recovery.ts` },
    });
  }
}

async function main() {
  const stamp = Date.now();

  let orgId = '';
  let managerUserId = '';
  let orgUserId = '';
  let propertyId = '';
  let unit1Id = '';
  let unit2Id = '';
  let applicationId = '';

  try {
    console.log('🚀 Verifying property deactivation + recovery lifecycle...');

    await ensureListingPrerequisites();

    const org = await prisma.organization.create({
      data: {
        name: `Deactivation Org ${stamp}`,
        slug: `deactivation-org-${stamp}`,
      },
    });
    orgId = org.id;

    const manager = await prisma.user.create({
      data: {
        email: `deactivation-manager-${stamp}@example.com`,
        passwordHash: 'dummy-hash',
        firstName: 'Property',
        lastName: 'Manager',
        status: 'ACTIVE',
      },
    });
    managerUserId = manager.id;

    const orgUser = await prisma.organizationUser.create({
      data: {
        organizationId: org.id,
        userId: manager.id,
        role: 'PROPERTY_MANAGER',
      },
    });
    orgUserId = orgUser.id;

    const property = await prisma.property.create({
      data: {
        organizationId: org.id,
        managerId: orgUser.id,
        name: `Deactivate Property ${stamp}`,
        city: 'Nairobi',
        address: '77 Deactivate Road',
        availabilityStatus: 'ACTIVE',
      },
    });
    propertyId = property.id;

    const unit1 = await prisma.unit.create({
      data: {
        propertyId: property.id,
        unitNumber: `D1-${stamp}`,
        rentAmount: 900,
      },
    });
    unit1Id = unit1.id;

    const unit2 = await prisma.unit.create({
      data: {
        propertyId: property.id,
        unitNumber: `D2-${stamp}`,
        rentAmount: 1100,
      },
    });
    unit2Id = unit2.id;

    const l1 = await listingService.createListing(
      unit1.id,
      { unitId: unit1.id, title: 'Deactivation Listing 1', description: 'Unit 1', price: 900 },
      manager.id,
      org.id,
    );
    const l2 = await listingService.createListing(
      unit2.id,
      { unitId: unit2.id, title: 'Deactivation Listing 2', description: 'Unit 2', price: 1100 },
      manager.id,
      org.id,
    );

    assert(l1.success && l2.success, 'Precondition failed: could not create listings for property units');

    const tenant = await prisma.user.create({
      data: {
        email: `deactivation-tenant-${stamp}@example.com`,
        passwordHash: 'dummy-hash',
        firstName: 'Pending',
        lastName: 'Applicant',
        status: 'ACTIVE',
      },
    });

    const app = await prisma.tenantApplication.create({
      data: {
        fullName: 'Pending Applicant',
        email: tenant.email,
        phone: '0711111111',
        dob: new Date('1992-01-01'),
        leaseType: 'STANDARD',
        occupancyType: 'RESIDENTIAL',
        moveInDate: new Date(),
        leaseDuration: '12 months',
        propertyId: property.id,
        unitId: unit1.id,
        userId: tenant.id,
        status: 'PENDING',
      },
    });
    applicationId = app.id;

    const deactivated = await propertyDeactivationService.deactivateProperty(
      {
        propertyId: property.id,
        reason: 'UAT deactivation lifecycle verification',
        notifyPropertyManagers: false,
        notifyTenants: false,
      },
      manager.id,
    );

    assert(deactivated.success, `Property deactivation failed: ${deactivated.errors.join('; ')}`);
    assert(deactivated.listingsRemoved >= 2, 'Expected deactivation to remove unit listings');

    const propertyAfterDeactivate = await prisma.property.findUnique({ where: { id: property.id } });
    assert(
      propertyAfterDeactivate?.availabilityStatus === 'DEACTIVATED',
      'Property availabilityStatus should be DEACTIVATED after deactivation',
    );

    const recovered = await propertyDeactivationService.recoverProperty(
      property.id,
      deactivated.recoveryData!,
      manager.id,
      'UAT recovery verification',
    );

    assert(recovered.success, `Property recovery failed: ${recovered.errors.join('; ')}`);

    const propertyAfterRecovery = await prisma.property.findUnique({ where: { id: property.id } });
    assert(
      propertyAfterRecovery?.availabilityStatus !== 'DEACTIVATED',
      'Property should no longer be DEACTIVATED after recovery',
    );

    console.log('🎉 Property deactivation + recovery verification PASSED.');
  } catch (error) {
    console.error('❌ Property deactivation + recovery verification FAILED:', error);
    process.exitCode = 1;
  } finally {
    await prisma.listing.deleteMany({ where: { propertyId } });

    if (applicationId) {
      const appRecord = await prisma.tenantApplication.findUnique({ where: { id: applicationId } });
      await prisma.tenantApplication.deleteMany({ where: { id: applicationId } });
      if (appRecord?.userId) {
        await prisma.user.deleteMany({ where: { id: appRecord.userId } });
      }
    }

    if (unit1Id || unit2Id) {
      await prisma.unit.deleteMany({ where: { id: { in: [unit1Id, unit2Id].filter(Boolean) } } });
    }

    if (propertyId) {
      await prisma.property.deleteMany({ where: { id: propertyId } });
    }

    if (orgUserId) {
      await prisma.organizationUser.deleteMany({ where: { id: orgUserId } });
    }

    if (managerUserId) {
      await prisma.user.deleteMany({ where: { id: managerUserId } });
    }

    if (orgId) {
      await prisma.organization.deleteMany({ where: { id: orgId } });
    }

    await prisma.$disconnect();
  }
}

main();
