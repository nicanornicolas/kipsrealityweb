// src/app/api/invoices/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@rentflow/iam";
import { getCurrentUser } from '@rentflow/iam';
import { toNumber } from "../../../lib/decimal-utils"; 
export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const rawStatus = url.searchParams.get("status");
    const type = url.searchParams.get("type");

    // FIX: Use proper relation filter - managerId on Property references OrganizationUser.id
    // We need to get the organizationUserId from the user's organizationUsers relationship
    // Fall back to the organization-level filter if organizationUserId is not available
    let managerFilter: any = {};
    
    // Get organizationUserId from user's organization relationship
    if (user.organizationUserId) {
      managerFilter = { managerId: user.organizationUserId };
    } else if (user.organizationId) {
      // If no direct manager relationship, filter by organization
      managerFilter = { organizationId: user.organizationId };
    }
    
    const where: any = {
      Lease: {
        property: managerFilter,
      },
    };

    if (rawStatus) {
      const statuses = rawStatus.split(",").map((s) => s.trim());
      where.status = { in: statuses };
    }

    if (type) {
      where.type = type;
    }

    const invoices = await prisma.invoice.findMany({
      where,
      include: {
        payments: true, 
        Lease: {
          include: {
            tenant: {
              select: { id: true, firstName: true, lastName: true, email: true },
            },
            property: {
              select: {
                id: true,
                name: true,
                address: true,
                city: true,
                apartmentComplexDetail: {
                  select: { buildingName: true }
                },
                houseDetail: {
                  select: { houseName: true }
                }
              },
            },
            unit: {
              select: { id: true, unitNumber: true, unitName: true }, 
            }
          },
        },
      },
      // 2. FIX: Removed createdAt and replaced with dueDate to prevent Prisma crash
      orderBy: { dueDate: "asc" }, 
    });

    // Add financial calculations and building name
    const invoicesWithFinancials = invoices.map((invoice) => {
      // 3. FIX: Safely convert Decimals using your imported utility
      const invoiceTotalAmount = toNumber(invoice.totalAmount);
      const totalPaid = invoice.payments?.reduce((sum, payment) => sum + toNumber(payment.amount), 0) || 0;
      const balance = invoiceTotalAmount - totalPaid;

      const buildingName =
        invoice.Lease?.property?.apartmentComplexDetail?.buildingName ||
        invoice.Lease?.property?.houseDetail?.houseName ||
        invoice.Lease?.property?.name ||
        "N/A";

      return {
        ...invoice,
        totalAmount: invoiceTotalAmount,
        // Ensure payments array also has its Decimals converted to regular numbers
        payments: invoice.payments?.map(p => ({
          ...p,
          amount: toNumber(p.amount)
        })),
        buildingName,
        financialSummary: {
          totalPaid,
          balance,
          isPaid: balance <= 0,
          isOverdue: balance > 0 && new Date() > invoice.dueDate
        }
      };
    });

    const grouped = Object.values(
      invoicesWithFinancials.reduce((acc: any, inv) => {
        // 4. FIX: Safely wrap dueDate in new Date() in case Prisma returns a string instead of a Date object
        const dateKey = inv.dueDate ? new Date(inv.dueDate).toISOString().split("T")[0] : "no-date";
        const leaseKey = inv.Lease?.id || "unknown";
        const groupKey = `${leaseKey}-${dateKey}`;

        if (!acc[groupKey]) {
          acc[groupKey] = {
            leaseId: leaseKey,
            dueDate: inv.dueDate,
            totalAmount: 0,
            invoices: [],
          };
        }

        acc[groupKey].totalAmount += inv.totalAmount; // Keep running total - FIXED variable name
        acc[groupKey].invoices.push(inv);

        return acc;
      }, {})
    );

    // Return flat array by default for backward compatibility
    // Use ?format=grouped to get the grouped format
    const format = url.searchParams.get("format");
    if (format === "grouped") {
      return NextResponse.json({
        grouped,
        invoices: invoicesWithFinancials
      });
    }
    // Default: return flat array (backward compatible with old behavior)
    return NextResponse.json(invoicesWithFinancials);
  } catch (err) {
    // Log the full error server-side for debugging
    console.error("GET /api/invoices error:", err); 
    
    // Send a generic error message to the client
    return NextResponse.json(
      { error: "An error occurred while fetching invoices" }, 
      { status: 500 }
    );
  }
}

