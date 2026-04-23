import { NextResponse } from 'next/server';
import { getCurrentUser, prisma } from '@rentflow/iam';
import { JournalService } from '@rentflow/finance';

const journalService = new JournalService(prisma);

/**
 * GET /api/finance/vendors/compliance
 * Returns vendor list with W-9 status and YTD spend for 1099-MISC compliance.
 * 
 * Authorization: PROPERTY_MANAGER, SYSTEM_ADMIN
 * Scope: Current organization only
 * 
 * Response:
 * {
 *   success: true,
 *   data: [
 *     {
 *       id: string,
 *       name: string,
 *       businessType: 'INDIVIDUAL' | 'LLC' | 'CORPORATION',
 *       w9Status: 'MISSING' | 'COLLECTED' | 'EXPIRED',
 *       totalPaidYTD: number,
 *       requires1099: boolean  // IRS risk flag
 *     }
 *   ]
 * }
 */
export async function GET(req: Request) {
  try {
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const allowedRoles = ['PROPERTY_MANAGER', 'SYSTEM_ADMIN'];
    if (!allowedRoles.includes(user.role)) {
      return NextResponse.json(
        { error: 'Forbidden - Requires PROPERTY_MANAGER or SYSTEM_ADMIN' },
        { status: 403 },
      );
    }

    if (!user.organizationId) {
      return NextResponse.json({ error: 'Organization required' }, { status: 403 });
    }

    const vendors = await journalService.getVendorComplianceList(
      user.organizationId,
    );

    return NextResponse.json({
      success: true,
      data: vendors,
    });
  } catch (error: unknown) {
    console.error('[VENDOR_COMPLIANCE_API]', error);
    const message =
      error instanceof Error ? error.message : 'Failed to fetch vendor compliance data';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
