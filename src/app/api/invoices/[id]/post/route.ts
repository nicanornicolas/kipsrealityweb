// src/app/api/invoices/[id]/post/route.ts
// This endpoint handles the "Post/Validate" action - transitioning a DRAFT invoice to PENDING and posting to GL

import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { financeActions } from "@/lib/finance/actions";
import { getCurrentUser } from "@/lib/Getcurrentuser";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // 1. Authorization Check - Get current user
  const user = await getCurrentUser(req);
  
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // 2. Role-based Authorization - Only PROPERTY_MANAGER and SYSTEM_ADMIN can post invoices
  const allowedRoles = ["PROPERTY_MANAGER", "SYSTEM_ADMIN"];
  if (!allowedRoles.includes(user.role)) {
    return NextResponse.json(
      { error: "Forbidden - Only Property Managers and System Admins can post invoices" },
      { status: 403 }
    );
  }

  try {
    const { id } = await params;

    // 3. Fetch Invoice
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: { Lease: { include: { property: true } } }
    });

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    // 4. Organization Validation - Ensure user has access to this invoice's property
    // For SYSTEM_ADMIN, we allow access to all organizations
    // For PROPERTY_MANAGER, we require organizationId to match
    if (user.role === "PROPERTY_MANAGER" && user.organizationId) {
      const invoiceOrganizationId = invoice.Lease?.property?.organizationId;
      
      if (invoiceOrganizationId && invoiceOrganizationId !== user.organizationId) {
        return NextResponse.json(
          { error: "Forbidden - You do not have access to this invoice" },
          { status: 403 }
        );
      }
    }

    // 5. Validate that invoice is in DRAFT status
    if (invoice.status !== "DRAFT") {
      return NextResponse.json({ 
        error: "Only Draft invoices can be posted",
        currentStatus: invoice.status
      }, { status: 400 });
    }

    // 6. Also validate postingStatus is DRAFT
    if (invoice.postingStatus !== "DRAFT") {
      return NextResponse.json({ 
        error: "Invoice has already been posted",
        postingStatus: invoice.postingStatus
      }, { status: 400 });
    }

    // 7. Update Status to PENDING (Official/Sent)
    await prisma.invoice.update({
      where: { id },
      data: { 
        status: "PENDING",
        postingStatus: "PENDING" // Ready for GL
      }
    });

    // 8. Trigger GL Logic
    try {
      await financeActions.postInvoiceToGL(id);
    } catch (glError) {
      console.error("GL Posting Failed:", glError);
      
      // Try to revert status back to DRAFT since GL posting failed
      try {
        await prisma.invoice.update({
          where: { id },
          data: { 
            status: "DRAFT",
            postingStatus: "DRAFT"
          }
        });
      } catch (revertError) {
        // Log critical error but still return failure to client
        console.error("CRITICAL: Failed to revert invoice status after GL failure:", revertError);
        return NextResponse.json({ 
          success: false, 
          error: "GL posting failed - CRITICAL: Failed to revert invoice status. Manual intervention required.",
          glError: glError instanceof Error ? glError.message : "Unknown error",
          revertError: revertError instanceof Error ? revertError.message : "Unknown error"
        }, { status: 500 });
      }
      
      return NextResponse.json({ 
        success: false, 
        error: "GL posting failed - invoice reverted to draft",
        glError: glError instanceof Error ? glError.message : "Unknown error"
      }, { status: 500 });
    }

    // 9. Fetch the updated invoice to return
    const updatedInvoice = await prisma.invoice.findUnique({
      where: { id }
    });

    return NextResponse.json({ 
      success: true, 
      message: "Invoice Posted to Ledger",
      invoice: updatedInvoice
    });

  } catch (error) {
    console.error("Error posting invoice:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
