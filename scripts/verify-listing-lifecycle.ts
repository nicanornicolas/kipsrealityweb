import { prisma } from '@rentflow/iam';
import { listingService, ListingStatus } from '@rentflow/property';

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
      create: { name: status, description: `Auto-seeded by verify-listing-lifecycle.ts` },
    });
  }
}

async function main() {
  const stamp = Date.now();

  let orgId = '';
  let managerUserId = '';
  let orgUserId = '';
  let propertyId = '';
  let unitId = '';

  try {
    console.log('🚀 Verifying listing lifecycle against current architecture...');

    await ensureListingPrerequisites();

    const org = await prisma.organization.create({
      data: {
        name: `Listing Lifecycle Org ${stamp}`,
        slug: `listing-lifecycle-${stamp}`,
      },
    });
    orgId = org.id;

    const manager = await prisma.user.create({
      data: {
        email: `listing-manager-${stamp}@example.com`,
        passwordHash: 'dummy-hash',
        firstName: 'Listing',
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
        name: `Listing Test Property ${stamp}`,
        city: 'Nairobi',
        address: '10 Listing Way',
      },
    });
    propertyId = property.id;

    const unit = await prisma.unit.create({
      data: {
        propertyId: property.id,
        unitNumber: `L-${stamp}`,
        rentAmount: 1200,
        isOccupied: false,
      },
    });
    unitId = unit.id;

    const created = await listingService.createListing(
      unit.id,
      {
        unitId: unit.id,
        title: `Unit ${unit.unitNumber} Listing`,
        description: 'Lifecycle verification listing',
        price: 1200,
      },
      manager.id,
      org.id,
    );

    assert(created.success, `Listing creation failed: ${created.message || created.error}`);
    const listingId = created.data.listingId;
    console.log(`✅ Listing created: ${listingId}`);

    assert(created.data.status === ListingStatus.ACTIVE, 'Listing should start ACTIVE after creation');

    const setSuspended = await listingService.updateListingStatus(
      listingId,
      ListingStatus.SUSPENDED,
      manager.id,
      'Suspend listing for lifecycle verification',
    );
    assert(setSuspended.success, `Listing suspension failed: ${setSuspended.message || setSuspended.error}`);

    const setActiveAgain = await listingService.updateListingStatus(
      listingId,
      ListingStatus.ACTIVE,
      manager.id,
      'Reactivate listing for lifecycle verification',
    );
    assert(setActiveAgain.success, `Listing re-activation failed: ${setActiveAgain.message || setActiveAgain.error}`);

    const removed = await listingService.removeListing(
      unit.id,
      manager.id,
      'Lifecycle verification cleanup',
    );
    assert(removed.success, `Listing removal failed: ${removed.message || removed.error}`);

    const unitAfter = await prisma.unit.findUnique({ where: { id: unit.id } });
    assert(unitAfter && !unitAfter.listingId, 'Unit listingId should be null after removeListing');

    console.log('🎉 Listing lifecycle verification PASSED.');
  } catch (error) {
    console.error('❌ Listing lifecycle verification FAILED:', error);
    process.exitCode = 1;
  } finally {
    // Clean up test data in reverse dependency order.
    if (unitId) {
      const lingeringListing = await prisma.listing.findFirst({ where: { unitId } });
      if (lingeringListing) {
        await prisma.listing.delete({ where: { id: lingeringListing.id } });
      }
      await prisma.unit.deleteMany({ where: { id: unitId } });
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
