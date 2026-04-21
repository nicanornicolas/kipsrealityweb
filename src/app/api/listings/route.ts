import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from '@rentflow/iam';
import { db } from "@rentflow/iam";
import { ListingService } from "@rentflow/property";
import { AuditService } from "@rentflow/property";
import { ListingAction, ListingStatus } from "@rentflow/property";

const listingService = new ListingService();
const auditService = new AuditService();

export async function GET(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const unitId = searchParams.get("unitId");
    const propertyId = searchParams.get("propertyId");
    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const categoryId = searchParams.get("categoryId");
    const city = searchParams.get("city");
    const propertyTypeId = searchParams.get("propertyTypeId");
    const isFurnishedParam = searchParams.get("isFurnished");
    const minPriceParam = searchParams.get("minPrice");
    const maxPriceParam = searchParams.get("maxPrice");
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const include = searchParams.get("include")?.split(",") || [];

    const page = pageParam ? Math.max(parseInt(pageParam, 10) || 1, 1) : undefined;
    const limit = limitParam
      ? Math.min(Math.max(parseInt(limitParam, 10) || 20, 1), 100)
      : undefined;
    const usePagination = page !== undefined || limit !== undefined;
    const effectivePage = page ?? 1;
    const effectiveLimit = limit ?? 20;

    const minPrice = minPriceParam ? Number(minPriceParam) : undefined;
    const maxPrice = maxPriceParam ? Number(maxPriceParam) : undefined;
    const isFurnished =
      isFurnishedParam === "true"
        ? true
        : isFurnishedParam === "false"
          ? false
          : undefined;

    // Build query conditions
    const where: any = {};
    const andConditions: any[] = [];
    
    if (unitId) {
      where.unitId = unitId;
    }
    
    if (propertyId) {
      where.unit = {
        propertyId: propertyId
      };
    }
    
    if (status && status !== "all") {
      where.status = {
        name: status
      };
    }

    if (categoryId) {
      where.categoryId = categoryId;
    } else if (category && category !== "all") {
      where.category = {
        name: category
      };
    }

    if (Number.isFinite(minPrice)) {
      andConditions.push({
        price: {
          gte: minPrice
        }
      });
    }

    if (Number.isFinite(maxPrice)) {
      andConditions.push({
        price: {
          lte: maxPrice
        }
      });
    }

    if (city && city.trim().length > 0) {
      andConditions.push({
        unit: {
          property: {
            city: {
              contains: city.trim(),
              mode: "insensitive"
            }
          }
        }
      });
    }

    if (propertyTypeId) {
      andConditions.push({
        unit: {
          property: {
            propertyTypeId
          }
        }
      });
    }

    if (isFurnished !== undefined) {
      andConditions.push({
        unit: {
          property: {
            isFurnished
          }
        }
      });
    }

    if (andConditions.length > 0) {
      where.AND = andConditions;
    }

    // Build include options
    const includeOptions: any = {
      unit: {
        include: {
          property: {
            include: {
              propertyType: true
            }
          }
        }
      },
      status: true,
      category: true
    };

    if (include.includes("history")) {
      includeOptions.auditEntries = {
        orderBy: { timestamp: "desc" },
        take: 10
      };
    }

    if (include.includes("performance")) {
      includeOptions.unit = {
        include: {
          property: true,
          tenantApplications: {
            include: {
              user: true
            }
          }
        }
      };
    }

    const [listings, total] = await Promise.all([
      db.listing.findMany({
        where,
        include: includeOptions,
        orderBy: { updatedAt: "desc" },
        ...(usePagination
          ? {
              skip: (effectivePage - 1) * effectiveLimit,
              take: effectiveLimit
            }
          : {})
      }),
      usePagination
        ? db.listing.count({ where })
        : Promise.resolve(0)
    ]);

    if (usePagination) {
      const totalPages = Math.max(Math.ceil(total / effectiveLimit), 1);
      return NextResponse.json({
        data: listings,
        pagination: {
          page: effectivePage,
          limit: effectiveLimit,
          total,
          totalPages,
          hasNext: effectivePage < totalPages,
          hasPrev: effectivePage > 1
        }
      });
    }

    return NextResponse.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    return NextResponse.json(
      { error: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    if (!user.organizationId) {
      return NextResponse.json({ error: "Organization not found" }, { status: 400 });
    }

    const body = await request.json();
    const { unitId, action, listingData } = body;

    if (!unitId || !action) {
      return NextResponse.json(
        { error: "Unit ID and action are required" },
        { status: 400 }
      );
    }

    // Verify user owns the unit
    const unit = await db.unit.findFirst({
      where: {
        id: unitId,
        property: {
          manager: {
            userId: user.id
          }
        }
      },
      include: {
        property: true,
        listing: {
          include: {
            status: true
          }
        },
        leases: {
          where: {
            leaseStatus: "ACTIVE"
          }
        }
      }
    });

    if (!unit) {
      return NextResponse.json(
        { error: "Unit not found or access denied" },
        { status: 404 }
      );
    }

    let result;

    switch (action) {
      case "CREATE":
        // Check if unit already has a listing
        if (unit.listing) {
          return NextResponse.json(
            { error: "Unit already has a listing" },
            { status: 400 }
          );
        }

        // Check if unit has active lease
        if (unit.leases && unit.leases.length > 0) {
          return NextResponse.json(
            { error: "Cannot list unit with active lease" },
            { status: 400 }
          );
        }

        const createResult = await listingService.createListing(
          unitId,
          {
            title: listingData?.title || `${unit.property.name} - Unit ${unit.unitNumber}`,
            description: listingData?.description || `Beautiful ${unit.bedrooms} bedroom, ${unit.bathrooms} bathroom unit`,
            price: listingData?.price || unit.rentAmount || 0,
            ...listingData
          },
          user.id,
          user.organizationId
        );

        if (!createResult.success) {
          return NextResponse.json(
            { error: createResult.message || createResult.error },
            { status: 400 }
          );
        }

        // Log audit entry
        await auditService.createAuditEntry({
          unitId,
          listingId: createResult.data.listingId,
          action: ListingAction.CREATE,
          userId: user.id,
          newStatus: ListingStatus.ACTIVE,
          metadata: { listingData }
        });

        result = createResult;
        break;

      case "REMOVE":
        if (!unit.listing) {
          return NextResponse.json(
            { error: "Unit does not have a listing" },
            { status: 400 }
          );
        }

        const removeResult = await listingService.removeListing(unitId, user.id, "Listing removed");
        if (!removeResult.success) {
          return NextResponse.json(
            { error: removeResult.message || removeResult.error },
            { status: 400 }
          );
        }

        // Log audit entry
        await auditService.createAuditEntry({
          unitId,
          listingId: unit.listing.id,
          action: ListingAction.REMOVE,
          userId: user.id,
          previousStatus: (unit.listing.status?.name as ListingStatus) || ListingStatus.PRIVATE,
          newStatus: ListingStatus.PRIVATE
        });

        result = { success: true, message: "Listing removed successfully" };
        break;

      default:
        return NextResponse.json(
          { error: "Invalid action" },
          { status: 400 }
        );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error processing listing request:", error);
    return NextResponse.json(
      { error: "Failed to process listing request" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const user = await getCurrentUser(request);
    if (!user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { listingId, updates } = body;

    if (!listingId) {
      return NextResponse.json(
        { error: "Listing ID is required" },
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

    const previousStatus = listing.status?.name || null;
    const updatedListing = await db.listing.update({
      where: { id: listingId },
      data: {
        ...updates,
        updatedAt: new Date()
      },
      include: {
        unit: {
          include: {
            property: true
          }
        }
      }
    });

    // Log audit entry if status changed
    if (updates.status && updates.status !== previousStatus) {
      await auditService.createAuditEntry({
        unitId: listing.unitId || "",
        listingId: listingId,
        action: ListingAction.UPDATE,
        userId: user.id,
        previousStatus: (previousStatus as ListingStatus) || ListingStatus.PRIVATE,
        newStatus: updates.status as ListingStatus,
        reason: updates.reason,
        metadata: { updates }
      });
    }

    return NextResponse.json(updatedListing);
  } catch (error) {
    console.error("Error updating listing:", error);
    return NextResponse.json(
      { error: "Failed to update listing" },
      { status: 500 }
    );
  }
}



