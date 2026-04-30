import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@rentflow/iam';
import { getCurrentUser } from '@rentflow/iam';
import {
  LeaseWorkflowActionError,
  leaseWorkflowService,
} from '@rentflow/lease';
import { randomUUID } from 'crypto';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role !== 'TENANT') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const { id: leaseId } = await params;
    const body = await req.json();
    const action = body?.action as 'RENEW' | 'TERMINATE' | undefined;
    const reason = typeof body?.reason === 'string' ? body.reason.trim() : undefined;

    if (!action || !['RENEW', 'TERMINATE'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const lease = await prisma.lease.findUnique({
      where: { id: leaseId },
      include: { property: true },
    });

    if (!lease) {
      return NextResponse.json({ error: 'Lease not found' }, { status: 404 });
    }

    if (lease.tenantId !== user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (action === 'TERMINATE') {
      try {
        const updatedLease = await leaseWorkflowService.executeAction({
          leaseId,
          action: 'TERMINATE',
          organizationUserId: lease.property.managerId || undefined,
          userId: user.id,
        });

        await prisma.leaseAuditLog.create({
          data: {
            id: randomUUID(),
            leaseId,
            action: 'TENANT_TERMINATE_REQUEST',
            performedBy: user.id,
            changes: {
              reason: reason || null,
            },
            ipAddress: req.headers.get('x-forwarded-for') || undefined,
            userAgent: req.headers.get('user-agent') || undefined,
          },
        });

        return NextResponse.json({
          success: true,
          action,
          lease: updatedLease,
        });
      } catch (error) {
        if (error instanceof LeaseWorkflowActionError) {
          return NextResponse.json({ error: error.message }, { status: error.status });
        }
        throw error;
      }
    }

    await prisma.leaseAuditLog.create({
      data: {
        id: randomUUID(),
        leaseId,
        action: 'TENANT_RENEWAL_REQUEST',
        performedBy: user.id,
        changes: {
          reason: reason || null,
          requestedAt: new Date().toISOString(),
        },
        ipAddress: req.headers.get('x-forwarded-for') || undefined,
        userAgent: req.headers.get('user-agent') || undefined,
      },
    });

    return NextResponse.json({
      success: true,
      action,
      message: 'Renewal request submitted',
    });
  } catch (error: unknown) {
    console.error('Tenant lease action error:', error);
    const message = error instanceof Error ? error.message : 'Failed to submit lease action';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
