import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { ManualInvoiceInput } from '@/app/data/FinanceData';
import { getCurrentUser } from "../../../../lib/Getcurrentuser";
import { InvoiceStatus, PostingStatus } from "@prisma/client";

// Valid invoice types
const VALID_INVOICE_TYPES = ['RENT', 'UTILITY'] as const;
type InvoiceType = typeof VALID_INVOICE_TYPES[number];

// NOTE: We do NOT import financeActions here - GL posting happens in the "Post" endpoint

export async function POST(req: NextRequest) {
  // 1. Authorization Check - Get current user
  const user = await getCurrentUser(req);
  
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Role-based Authorization - Only PROPERTY_MANAGER and SYSTEM_ADMIN can create invoices
  const allowedRoles = ["PROPERTY_MANAGER", "SYSTEM_ADMIN"];
  if (!allowedRoles.includes(user.role)) {
    return NextResponse.json(
      { error: "Forbidden - Only Property Managers and System Admins can create invoices" },
      { status: 403 }
    );
  }

  const body: ManualInvoiceInput = await req.json();

  if (!body.leaseId || !body.type || !body.amount || !body.dueDate) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Validate invoice type is one of the allowed values
  if (!VALID_INVOICE_TYPES.includes(body.type as InvoiceType)) {
    return NextResponse.json(
      { error: 'Invalid invoice type. Must be RENT or UTILITY' },
      { status: 400 }
    );
  }

  // Validate lease exists and belongs to user's organization
  const lease = await prisma.lease.findUnique({ 
    where: { id: body.leaseId },
    include: { property: true }
  });
  if (!lease) return NextResponse.json({ error: 'Lease not found' }, { status: 404 });

  // SECURITY: Verify the lease belongs to the user's organization/managed properties
  if (user.role === 'PROPERTY_MANAGER') {
    // For property managers, verify they manage this property
    if (user.organizationUserId) {
      // Check if property is managed by this organization user
      const property = await prisma.property.findFirst({
        where: {
          id: lease.propertyId,
          managerId: user.organizationUserId
        }
      });
      if (!property) {
        return NextResponse.json(
          { error: 'Forbidden - You do not have access to create invoices for this property' },
          { status: 403 }
        );
      }
    } else if (user.organizationId) {
      // Fall back to organization check
      if (lease.property.organizationId !== user.organizationId) {
        return NextResponse.json(
          { error: 'Forbidden - You do not have access to create invoices for this property' },
          { status: 403 }
        );
      }
    } else {
      // No organization context - deny access
      return NextResponse.json(
        { error: 'Forbidden - No organization context found' },
        { status: 403 }
      );
    }
  }
  // SYSTEM_ADMIN can create invoices for any lease

  const invoice = await prisma.invoice.create({
    data: {
      leaseId: body.leaseId,
      type: body.type as InvoiceType,
      totalAmount: body.amount,
      amountPaid: 0,
      balance: body.amount,
      dueDate: new Date(body.dueDate),
      status: InvoiceStatus.DRAFT,
      postingStatus: PostingStatus.DRAFT,
    },
  });

  // NOTE: We DO NOT call financeActions.postInvoiceToGL(invoice.id) here anymore.
  // That happens in the "Post/Validate" step when manager approves the invoice.

  // Return the invoice in DRAFT status - GL posting happens later via POST /api/invoices/[id]/post
  return NextResponse.json(invoice, { status: 201 });
}


