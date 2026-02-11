import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/Getcurrentuser";
import { db } from "@/lib/db";
import { ListingService } from "@/lib/listing-service";
import { AuditService } from "@/lib/audit-service";
import { ListingAction, ListingStatus } from "@/lib/listing-types";

const listingService = new ListingService();
const auditService = new AuditService();

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
    const { action, unitIds, listingData } = body;

    if (!action || !unitIds || !Array.isArray(unitIds)) {
      return NextResponse.json(
        { error: "Action and unit IDs array are required" },
        { status: 400 }
      );
    }

    // Verify user owns all units
    const units = await db.unit.findMany({
      where: {
        id: { in: unitIds },
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

    if (units.length !== unitIds.length) {
      return NextResponse.json(
        { error: "Some units not found or access denied" },
        { status: 404 }
      );
    }

    const results = {
      successful: [] as string[],
      failed: [] as Array<{ unitId: string; error: string }>,
      summary: {
        total: unitIds.length,
        succeeded: 0,
        failed: 0
      }
    };

    const resolveListingStatus = (unit: (typeof units)[number]): ListingStatus => {
      const statusName = unit.listing?.status?.name;
      return statusName && Object.values(ListingStatus).includes(statusName as ListingStatus)
        ? (statusName as ListingStatus)
        : ListingStatus.PRIVATE;
    };

    // Process each unit individually
    for (const unit of units) {
      try {
        const currentStatus = resolveListingStatus(unit);
        switch (action) {
          case "LIST":
            // Check if unit already has a listing
            if (unit.listing) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit already has a listing"
              });
              continue;
            }

            // Check if unit has active lease
            if (unit.leases && unit.leases.length > 0) {
              results.failed.push({
                unitId: unit.id,
                error: "Cannot list unit with active lease"
              });
              continue;
            }

            const createResult = await listingService.createListing(
              unit.id,
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
              results.failed.push({
                unitId: unit.id,
                error: createResult.message || createResult.error
              });
              continue;
            }

            // Log audit entry
            await auditService.createAuditEntry({
              unitId: unit.id,
              listingId: createResult.data.listingId,
              action: ListingAction.CREATE,
              userId: user.id,
              newStatus: ListingStatus.ACTIVE,
              metadata: { bulkAction: true, listingData }
            });

            results.successful.push(unit.id);
            break;

          case "UNLIST":
            if (!unit.listing) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit does not have a listing"
              });
              continue;
            }

            const removeResult = await listingService.removeListing(
              unit.id,
              user.id,
              "Bulk remove listing"
            );

            if (!removeResult.success) {
              results.failed.push({
                unitId: unit.id,
                error: removeResult.message || removeResult.error
              });
              continue;
            }

            // Log audit entry
            await auditService.createAuditEntry({
              unitId: unit.id,
              listingId: unit.listing.id,
              action: ListingAction.REMOVE,
              userId: user.id,
              previousStatus: currentStatus,
              newStatus: ListingStatus.PRIVATE,
              metadata: { bulkAction: true }
            });

            results.successful.push(unit.id);
            break;

          case "SUSPEND":
            if (!unit.listing) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit does not have a listing"
              });
              continue;
            }

            if (currentStatus === ListingStatus.SUSPENDED) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit is already suspended"
              });
              continue;
            }

            const suspendResult = await listingService.updateListingStatus(
              unit.listing.id,
              ListingStatus.SUSPENDED,
              user.id,
              "Bulk suspension"
            );

            if (!suspendResult.success) {
              results.failed.push({
                unitId: unit.id,
                error: suspendResult.message || suspendResult.error
              });
              continue;
            }

            // Log audit entry
            await auditService.createAuditEntry({
              unitId: unit.id,
              listingId: unit.listing.id,
              action: ListingAction.SUSPEND,
              userId: user.id,
              previousStatus: currentStatus,
              newStatus: ListingStatus.SUSPENDED,
              reason: "Bulk suspension",
              metadata: { bulkAction: true }
            });

            results.successful.push(unit.id);
            break;

          case "ACTIVATE":
            if (!unit.listing) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit does not have a listing"
              });
              continue;
            }

            if (currentStatus === ListingStatus.ACTIVE) {
              results.failed.push({
                unitId: unit.id,
                error: "Unit is already active"
              });
              continue;
            }

            // Check if unit has active lease
            if (unit.leases && unit.leases.length > 0) {
              results.failed.push({
                unitId: unit.id,
                error: "Cannot activate listing for unit with active lease"
              });
              continue;
            }

            const activateResult = await listingService.updateListingStatus(
              unit.listing.id,
              ListingStatus.ACTIVE,
              user.id,
              "Bulk activation"
            );

            if (!activateResult.success) {
              results.failed.push({
                unitId: unit.id,
                error: activateResult.message || activateResult.error
              });
              continue;
            }

            // Log audit entry
            await auditService.createAuditEntry({
              unitId: unit.id,
              listingId: unit.listing.id,
              action: ListingAction.ACTIVATE,
              userId: user.id,
              previousStatus: currentStatus,
              newStatus: ListingStatus.ACTIVE,
              reason: "Bulk activation",
              metadata: { bulkAction: true }
            });

            results.successful.push(unit.id);
            break;

          default:
            results.failed.push({
              unitId: unit.id,
              error: "Invalid action"
            });
        }
      } catch (error) {
        console.error(`Error processing unit ${unit.id}:`, error);
        results.failed.push({
          unitId: unit.id,
          error: error instanceof Error ? error.message : "Unknown error"
        });
      }
    }

    // Update summary
    results.summary.succeeded = results.successful.length;
    results.summary.failed = results.failed.length;

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error processing bulk listing operation:", error);
    return NextResponse.json(
      { error: "Failed to process bulk operation" },
      { status: 500 }
    );
  }
}
