import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { db } from "@/lib/db";
import { listingService } from "@/lib/listing-service";
import { auditService } from "@/lib/audit-service";
import { ListingAction, ListingStatus, CreateListingData } from "@/lib/listing-types";

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
    const { updates, reason } = body;

    if (!updates || typeof updates !== 'object') {
      return NextResponse.json(
        { error: "Updates object is required" },
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
            property: true
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

    // Validate that updates don't include status (use status endpoint for that)
    if (updates.status) {
      return NextResponse.json(
        { error: "Use the status endpoint to update listing status" },
        { status: 400 }
      );
    }

    // Validate required fields for update
    const updateData: Partial<CreateListingData> = {
      title: updates.title,
      description: updates.description,
      price: updates.price,
      availabilityDate: updates.availabilityDate ? new Date(updates.availabilityDate) : undefined,
      expirationDate: updates.expirationDate ? new Date(updates.expirationDate) : undefined,
    };

    // Use the listing service to update listing information
    const result = await listingService.updateListingInformation(
      listingId,
      updateData,
      user.id
    );

    if (!result.success) {
      return NextResponse.json(
        { 
          error: result.message || result.error || "Failed to update listing",
          details: result.message 
        },
        { status: 400 }
      );
    }

    // Create detailed audit entry
    await auditService.createAuditEntry({
      unitId: listing.unitId || "",
      listingId,
      action: ListingAction.UPDATE,
      userId: user.id,
      previousStatus: listing.status?.name as ListingStatus || ListingStatus.ACTIVE,
      newStatus: listing.status?.name as ListingStatus || ListingStatus.ACTIVE,
      reason: reason || "Listing information updated",
      metadata: {
        updates: Object.keys(updates),
        previousValues: {
          title: listing.title,
          description: listing.description,
          price: listing.price,
          availabilityDate: listing.availabilityDate,
          expirationDate: listing.expirationDate,
        },
        newValues: updates
      }
    });

    return NextResponse.json({
      success: true,
      data: result.data,
      message: "Listing updated successfully"
    });
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json(
      { error: "Failed to update listing" },
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

    // Get listing with full details for editing
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
        },
        images: true,
        auditEntries: {
          orderBy: { timestamp: "desc" },
          take: 5,
          include: {
            user: {
              select: { firstName: true, lastName: true, email: true }
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

    // Get performance data if available
    const performance = await db.$queryRaw`
      SELECT 
        COUNT(DISTINCT ta.id) as applicationCount,
        COUNT(DISTINCT CASE WHEN ta.status = 'APPROVED' THEN ta.id END) as approvedApplications,
        AVG(DATEDIFF(ta.createdAt, l.createdAt)) as averageTimeToApplication
      FROM listings l
      LEFT JOIN units u ON l.unitId = u.id
      LEFT JOIN tenantapplications ta ON u.id = ta.unitId
      WHERE l.id = ${listingId}
      GROUP BY l.id
    `;

    // Format the response
    const response = {
      listing: {
        ...listing,
        unit: {
          ...listing.unit,
          property: listing.unit?.property ? {
            id: listing.unit.property.id,
            name: listing.unit.property.name,
            address: listing.unit.property.address,
            city: listing.unit.property.city,
            amenities: listing.unit.property.amenities,
          } : null
        }
      },
      performance: Array.isArray(performance) && performance.length > 0 ? performance[0] : null,
      editPermissions: {
        canEditTitle: true,
        canEditDescription: true,
        canEditPrice: !(listing.unit?.leases && listing.unit.leases.length > 0),
        canEditAvailabilityDate: !(listing.unit?.leases && listing.unit.leases.length > 0),
        canEditExpirationDate: true,
      },
      businessRules: {
        hasActiveLease: !!(listing.unit?.leases && listing.unit.leases.length > 0),
        canDeactivate: true,
        canExtendExpiration: true
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching listing for edit:", error);
    return NextResponse.json(
      { error: "Failed to fetch listing details" },
      { status: 500 }
    );
  }
}