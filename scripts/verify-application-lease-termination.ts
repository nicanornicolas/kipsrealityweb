import { prisma } from '@rentflow/iam';
import { leaseManagementService, leaseStatusService } from '@rentflow/lease';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function main() {
  const stamp = Date.now();

  let orgId = '';
  let managerUserId = '';
  let orgUserId = '';
  let tenantUserId = '';
  let propertyId = '';
  let unitId = '';
  let applicationId = '';
  let leaseId = '';

  try {
    console.log('🚀 Verifying application -> lease -> termination flow...');

    const org = await prisma.organization.create({
      data: {
        name: `Lease Lifecycle Org ${stamp}`,
        slug: `lease-lifecycle-${stamp}`,
      },
    });
    orgId = org.id;

    const manager = await prisma.user.create({
      data: {
        email: `lease-manager-${stamp}@example.com`,
        passwordHash: 'dummy-hash',
        firstName: 'Lease',
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
        name: `Lease Flow Property ${stamp}`,
        city: 'Nairobi',
        address: '22 Lease Avenue',
      },
    });
    propertyId = property.id;

    const unit = await prisma.unit.create({
      data: {
        propertyId: property.id,
        unitNumber: `T-${stamp}`,
        rentAmount: 1500,
        isOccupied: false,
      },
    });
    unitId = unit.id;

    const tenant = await prisma.user.create({
      data: {
        email: `lease-tenant-${stamp}@example.com`,
        passwordHash: 'dummy-hash',
        firstName: 'Lease',
        lastName: 'Tenant',
        status: 'ACTIVE',
      },
    });
    tenantUserId = tenant.id;

    const application = await prisma.tenantApplication.create({
      data: {
        fullName: 'Lease Tenant',
        email: tenant.email,
        phone: '0700000000',
        dob: new Date('1990-01-01'),
        leaseType: 'STANDARD',
        occupancyType: 'RESIDENTIAL',
        moveInDate: new Date(),
        leaseDuration: '12 months',
        consent: true,
        propertyId: property.id,
        unitId: unit.id,
        userId: tenant.id,
        status: 'APPROVED',
      },
    });
    applicationId = application.id;

    const lease = await leaseManagementService.createLease({
      applicationId: application.id,
      tenantId: tenant.id,
      propertyId: property.id,
      unitId: unit.id,
      startDate: new Date().toISOString(),
      endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
      rentAmount: 1500,
      paymentDueDay: 1,
      paymentFrequency: 'MONTHLY',
      leaseTerm: '12 months',
    });
    leaseId = lease.id;
    console.log(`✅ Lease created from approved application: ${lease.id}`);

    const activated = await leaseStatusService.updateStatus({
      leaseId: lease.id,
      status: 'ACTIVE',
      reason: 'UAT lifecycle activation',
      userId: manager.id,
    });
    assert(activated.leaseStatus === 'ACTIVE', 'Lease should become ACTIVE');

    const terminated = await leaseStatusService.updateStatus({
      leaseId: lease.id,
      status: 'TERMINATED',
      reason: 'UAT lifecycle termination',
      userId: manager.id,
    });
    assert(terminated.leaseStatus === 'TERMINATED', 'Lease should become TERMINATED');

    const details = await leaseStatusService.getStatusDetails({
      leaseId: lease.id,
      userId: manager.id,
    });
    assert(details.currentStatus === 'TERMINATED', 'Status details should report TERMINATED');
    assert(details.statusHistory.length > 0, 'Status history should be captured');

    console.log('🎉 Application -> lease -> termination verification PASSED.');
  } catch (error) {
    console.error('❌ Application -> lease -> termination verification FAILED:', error);
    process.exitCode = 1;
  } finally {
    if (leaseId) {
      await prisma.lease.deleteMany({ where: { id: leaseId } });
    }

    if (applicationId) {
      await prisma.tenantApplication.deleteMany({ where: { id: applicationId } });
    }

    if (unitId) {
      await prisma.unit.deleteMany({ where: { id: unitId } });
    }

    if (propertyId) {
      await prisma.property.deleteMany({ where: { id: propertyId } });
    }

    if (orgUserId) {
      await prisma.organizationUser.deleteMany({ where: { id: orgUserId } });
    }

    if (tenantUserId) {
      await prisma.user.deleteMany({ where: { id: tenantUserId } });
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
