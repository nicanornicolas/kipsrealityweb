"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Plus, Settings } from "lucide-react";
import { toast } from "sonner";
import { ListingDecisionModal } from "@/components/Dashboard/listing/ListingDecisionModal";
import { ListingStatus, UnitWithListingStatus } from "@/lib/listing-types";

interface Unit {
  id: string | null; // null if placeholder
  unitNumber: string;
  unitName: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  floorNumber: number | null;
  rentAmount: number | null;
  isOccupied: boolean;
  listing?: {
    id: string;
    status: string | { name?: string } | null;
    title: string;
    price: number;
  };
  leases?: Array<{
    id: string;
    leaseStatus: string;
    startDate: string;
    endDate: string;
  }>;
}

export default function ManageUnitsPage() {
  const { id, type } = useParams(); // id = apartmentComplexDetailId or houseDetailId, type = "apartment" | "house"
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const normalizeStatus = (status?: string, hasListing?: boolean): ListingStatus => {
    if (!status) return hasListing ? ListingStatus.ACTIVE : ListingStatus.PRIVATE;
    return Object.values(ListingStatus).includes(status as ListingStatus)
      ? (status as ListingStatus)
      : ListingStatus.PRIVATE;
  };

  const toListingUnit = (unit: Unit): UnitWithListingStatus => {
    const listingStatusName = unit.listing
      ? typeof unit.listing.status === "string"
        ? unit.listing.status
        : unit.listing.status?.name
      : undefined;

    return {
      id: unit.id || "",
      unitNumber: unit.unitNumber,
      propertyId: String(id || ""),
      rentAmount: unit.rentAmount ?? undefined,
      bedrooms: unit.bedrooms ?? undefined,
      bathrooms: unit.bathrooms ?? undefined,
      listing: unit.listing
        ? {
            id: unit.listing.id,
            status: normalizeStatus(listingStatusName, true),
            createdAt: new Date(),
            updatedAt: new Date(),
            title: unit.listing.title || `Unit ${unit.unitNumber}`,
            description: unit.listing.title || `Unit ${unit.unitNumber}`,
            price: unit.listing.price || 0
          }
        : undefined
    };
  };

  useEffect(() => {
    if (!id || !type) return;

    const queryParam =
      type === "apartment"
        ? `apartmentComplexDetailId=${id}`
        : `houseDetailId=${id}`;

    fetch(`/api/units?${queryParam}&include=listing,lease`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch units");
        return res.json();
      })
      .then((data: Unit[]) => setUnits(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load units");
      })
      .finally(() => setLoading(false));
  }, [id, type]);

  const handleListingDecision = async (unitId: string, decision: "list" | "private") => {
    try {
      if (!unitId) {
        toast.error("Unit ID is missing. Please try again.");
        return;
      }
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unitId,
          action: decision === "list" ? "CREATE" : "REMOVE",
          listingData: {}
        })
      });

      if (!response.ok) throw new Error("Failed to update listing");
      
      toast.success(`Unit ${decision === "list" ? "listed" : "made private"} successfully`);
      
      // Refresh units data
      const queryParam =
        type === "apartment"
          ? `apartmentComplexDetailId=${id}`
          : `houseDetailId=${id}`;

      const refreshResponse = await fetch(`/api/units?${queryParam}&include=listing,lease`);
      if (refreshResponse.ok) {
        const refreshedData = await refreshResponse.json();
        setUnits(refreshedData);
      }
      
      setShowDecisionModal(false);
      setSelectedUnit(null);
    } catch (error) {
      console.error("Error updating listing:", error);
      toast.error("Failed to update listing");
    }
  };

  const getListingStatusBadge = (unit: Unit) => {
    if (!unit.listing) {
      return <Badge variant="secondary">Private</Badge>;
    }
    
    switch (unit.listing.status) {
      case "ACTIVE":
        return <Badge variant="default" className="bg-green-500">Listed</Badge>;
      case "SUSPENDED":
        return <Badge variant="destructive">Suspended</Badge>;
      case "PENDING":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="secondary">Private</Badge>;
    }
  };

  const canCreateListing = (unit: Unit) => {
    // Can create listing if unit exists, has no listing, and no active lease
    return unit.id && !unit.listing && (!unit.leases || unit.leases.length === 0);
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading units...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  if (units.length === 0)
    return <p className="text-center mt-10 text-gray-500">No units found.</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Manage Units</h1>
        <p className="text-gray-600">Configure unit details and marketplace listings</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((unit) => (
          <Card
            key={unit.unitNumber}
            className="shadow hover:shadow-lg transition-shadow rounded-xl border border-gray-200"
          >
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-lg text-gray-800">
                  Unit {unit.unitNumber}
                </h2>
                {getListingStatusBadge(unit)}
              </div>

              {unit.id ? (
                <div className="text-gray-700 space-y-2">
                  <p>
                    <strong>Bedrooms:</strong> {unit.bedrooms ?? "N/A"}
                  </p>
                  <p>
                    <strong>Bathrooms:</strong> {unit.bathrooms ?? "N/A"}
                  </p>
                  <p>
                    <strong>Rent:</strong> ${unit.rentAmount?.toLocaleString() ?? "N/A"}
                  </p>
                  {unit.listing && (
                    <p>
                      <strong>Listed Price:</strong> ${unit.listing.price?.toLocaleString()}
                    </p>
                  )}
                  {unit.leases && unit.leases.length > 0 && (
                    <p className="text-blue-600">
                      <strong>Lease Status:</strong> {unit.leases[0].leaseStatus}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-gray-500">No details yet</p>
              )}

              <div className="space-y-2">
                <Link
                  href={`/property-manager/${type}-details/${id}/units/${
                    unit.id ?? unit.unitNumber
                  }/edit`}
                  className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  {unit.id ? "Edit Unit" : "Add Unit Details"}
                </Link>

                {canCreateListing(unit) && (
                  <Button
                    onClick={() => {
                      setSelectedUnit(unit);
                      setShowDecisionModal(true);
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    List on Marketplace
                  </Button>
                )}

                {unit.listing && (
                  <Link
                    href={`/property-manager/listings?unit=${unit.id}`}
                    className="inline-block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Listing
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Listing Decision Modal */}
      {showDecisionModal && selectedUnit && (
        <ListingDecisionModal
          isOpen={showDecisionModal}
          unit={toListingUnit(selectedUnit)}
          onDecision={(unitId, decision) => handleListingDecision(unitId, decision)}
          onClose={() => {
            setShowDecisionModal(false);
            setSelectedUnit(null);
          }}
        />
      )}
    </div>
  );
}
