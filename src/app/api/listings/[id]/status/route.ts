import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { db } from "@/lib/db";
import { ListingService } from "@/lib/listing-service";
import { AuditService } from "@/lib/audit-service";
import { ListingAction, ListingStatus } from "@/lib/listing-types";

const listingService = new ListingService();
const auditService = new AuditService();

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    if (!resolvedParams?.id) {
      return NextResponse.json({ error: "Listing ID is required" }, { status: 400 });
    }
    const user = await getCurrentUser(request);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const listingId = resolvedParams.id;
    const body = await request.json();
    const { status, reason } = body;

    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
        { status: 400 }
      );
    }

    // Validate status
    if (!Object.values(ListingStatus).includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    // Verify user owns the listing
    const listing = await db.listing.findFirst({
      where: {
        id: listingId,
        unit: {
          property: {
            manager: {
              userId: user.id
            }
          }
        }
      },
      include: {
        status: true,
        unit: {
          include: {
            property: true,
            leases: {
              where: {
                leaseStatus: "ACTIVE"
              }
            }
          }
        }
      }
    });

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found or access denied" },
        { status: 404 }
      );
    }

    // Validate state transition
    const currentStatus =
      listing.status?.name && Object.values(ListingStatus).includes(listing.status.name as ListingStatus)
        ? (listing.status.name as ListingStatus)
        : ListingStatus.PRIVATE;
    const newStatus = status as ListingStatus;

    // Check business rules
    if (newStatus === ListingStatus.ACTIVE) {
      // Cannot activate if unit has active lease
      if (listing.unit?.leases && listing.unit.leases.length > 0) {
        return NextResponse.json(
          { error: "Cannot activate listing for unit with active lease" },
          { status: 400 }
        );
      }
    }

    // Validate state transitions
    const validTransitions: Record<ListingStatus, ListingStatus[]> = {
      [ListingStatus.PRIVATE]: [ListingStatus.ACTIVE, ListingStatus.PENDING, ListingStatus.COMING_SOON],
      [ListingStatus.PENDING]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED, ListingStatus.COMING_SOON],
      [ListingStatus.COMING_SOON]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED],
      [ListingStatus.ACTIVE]: [ListingStatus.SUSPENDED, ListingStatus.PRIVATE, ListingStatus.EXPIRED, ListingStatus.MAINTENANCE],
      [ListingStatus.SUSPENDED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.MAINTENANCE],
      [ListingStatus.EXPIRED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
      [ListingStatus.MAINTENANCE]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED]
    };

    if (!validTransitions[currentStatus]?.includes(newStatus)) {
      return NextResponse.json(
        { error: `Invalid transition from ${currentStatus} to ${newStatus}` },
        { status: 400 }
      );
    }

    // Update the listing status
    const updatedListing = await listingService.updateListingStatus(
      listingId,
      newStatus,
      user.id,
      reason
    );

    // Log audit entry
    await auditService.createAuditEntry({
      unitId: listing.unitId || "",
      listingId: listingId,
      action: ListingAction.UPDATE,
      userId: user.id,
      previousStatus: currentStatus,
      newStatus: newStatus,
      reason: reason || `Status changed from ${currentStatus} to ${newStatus}`,
      metadata: {
        manualStatusChange: true,
        timestamp: new Date().toISOString()
      }
    });

    return NextResponse.json({
      success: true,
      listing: updatedListing,
      message: `Listing status updated to ${newStatus}`
    });
  } catch (error) {
    console.error("Error updating listing status:", error);
    return NextResponse.json(
      { error: "Failed to update listing status" },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    if (!resolvedParams?.id) {
      return NextResponse.json({ error: "Listing ID is required" }, { status: 400 });
    }
    const user = await getCurrentUser(request);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const listingId = resolvedParams.id;

    // Get listing with status history
    const listing = await db.listing.findFirst({
      where: {
        id: listingId,
        unit: {
          property: {
            manager: {
              userId: user.id
            }
          }
        }
      },
      include: {
        status: true,
        unit: {
          include: {
            property: true,
            leases: {
              where: {
                leaseStatus: "ACTIVE"
              }
            }
          }
        }
      }
    });

    if (!listing) {
      return NextResponse.json(
        { error: "Listing not found or access denied" },
        { status: 404 }
      );
    }

    // Get status history from audit log
    const statusHistory = await auditService.getListingAuditHistory(listingId, 20);

    // Get available transitions
    const currentStatus =
      listing.status?.name && Object.values(ListingStatus).includes(listing.status.name as ListingStatus)
        ? (listing.status.name as ListingStatus)
        : ListingStatus.PRIVATE;
    const validTransitions: Record<ListingStatus, ListingStatus[]> = {
      [ListingStatus.PRIVATE]: [ListingStatus.ACTIVE, ListingStatus.PENDING, ListingStatus.COMING_SOON],
      [ListingStatus.PENDING]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED, ListingStatus.COMING_SOON],
      [ListingStatus.COMING_SOON]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED],
      [ListingStatus.ACTIVE]: [ListingStatus.SUSPENDED, ListingStatus.PRIVATE, ListingStatus.EXPIRED, ListingStatus.MAINTENANCE],
      [ListingStatus.SUSPENDED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.MAINTENANCE],
      [ListingStatus.EXPIRED]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.COMING_SOON],
      [ListingStatus.MAINTENANCE]: [ListingStatus.ACTIVE, ListingStatus.PRIVATE, ListingStatus.SUSPENDED]
    };

    const availableTransitions = validTransitions[currentStatus] || [];

    // Filter out transitions that are not allowed due to business rules
    const allowedTransitions = availableTransitions.filter(status => {
      if (status === ListingStatus.ACTIVE) {
        // Cannot activate if unit has active lease
        return !(listing.unit?.leases && listing.unit.leases.length > 0);
      }
      return true;
    });

    return NextResponse.json({
      listing,
      currentStatus,
      availableTransitions: allowedTransitions,
      statusHistory,
      businessRules: {
        hasActiveLease: !!(listing.unit?.leases && listing.unit.leases.length > 0),
        canActivate: !(listing.unit?.leases && listing.unit.leases.length > 0)
      }
    });
  } catch (error) {
    console.error("Error fetching listing status:", error);
    return NextResponse.json(
      { error: "Failed to fetch listing status" },
      { status: 500 }
    );
  }
}
