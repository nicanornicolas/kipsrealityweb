// src/lib/units.ts
import { prisma } from "./db";
import { Unit } from "@/app/data/UnitData";
import { UnitFormData } from "@/components/Dashboard/propertymanagerdash/units/EditUnitForm";


export const fetchUnits = async (propertyId: string): Promise<Unit[]> => {
  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    include: {
      units: {
        include: {
          appliances: true,
          listing: {
            include: {
              status: true
            }
          }
        },
      },
      apartmentComplexDetail: true,
      houseDetail: true,
    },
  });

  if (!property) return [];

  const now = new Date().toISOString(); // fallback for placeholders
  let allUnits: Unit[] = [];

  if (property.apartmentComplexDetail) {
  // Apartment: generate placeholders based on totalUnits
  const totalUnits = property.apartmentComplexDetail.totalUnits ?? 0;
  const existingUnits = property.units || [];

  allUnits = Array.from({ length: totalUnits }, (_, i) => {
    const expectedUnitNumber = (i + 1 + 100).toString(); // 101, 102, ...
    const existing = existingUnits.find(u => u.unitNumber === expectedUnitNumber);

    const detail = property.apartmentComplexDetail!; // non-null because of the if-check above

    return {
      id: existing?.id ?? `placeholder-${expectedUnitNumber}`,
      propertyId: property.id,
      complexDetailId: detail.id,
      houseDetailId: null,
      unitNumber: existing?.unitNumber ?? expectedUnitNumber,
      unitName: existing?.unitName ?? null,
      bedrooms: existing?.bedrooms ?? null,
      bathrooms: existing?.bathrooms ?? null,
      floorNumber: existing?.floorNumber ?? null,
      rentAmount: existing?.rentAmount ?? null,
      currency: existing?.currency ?? null,
      isOccupied: existing?.isOccupied ?? false,
      createdAt: existing?.createdAt instanceof Date ? existing.createdAt.toISOString() : now,
      appliances: existing?.appliances?.map(a => ({
          id: a.id,
          name: a.name,
          createdAt: a.createdAt instanceof Date ? a.createdAt.toISOString() : now,
        })) ?? []
      ,
      listing: existing?.listing
        ? {
            id: existing.listing.id,
            status: existing.listing.status
              ? { name: existing.listing.status.name }
              : null
          }
        : null
    };
  });
} else if (property.houseDetail) {
  const totalUnits = property.houseDetail.totalUnits ?? 1;
  const existingUnits = property.units || [];

  allUnits = Array.from({ length: totalUnits }, (_, i) => {
    const expectedUnitNumber = (i + 1).toString(); // 1, 2, 3...
    const existing = existingUnits.find(u => u.unitNumber === expectedUnitNumber);

    const detail = property.houseDetail!;

    return {
      id: existing?.id ?? `placeholder-${expectedUnitNumber}`,
      propertyId: property.id,
      complexDetailId: null,
      houseDetailId: detail.id,
      unitNumber: existing?.unitNumber ?? expectedUnitNumber,
      unitName: existing?.unitName ?? null,
      bedrooms: existing?.bedrooms ?? detail.bedrooms ?? null,
      bathrooms: existing?.bathrooms ?? detail.bathrooms ?? null,
      floorNumber: existing?.floorNumber ?? detail.numberOfFloors ?? null,
      rentAmount: existing?.rentAmount ?? null,
      currency: existing?.currency ?? null,
      isOccupied: existing?.isOccupied ?? false,
      createdAt: existing?.createdAt instanceof Date ? existing.createdAt.toISOString() : now,
      appliances:
        existing?.appliances?.map(a => ({
          id: a.id,
          name: a.name,
          createdAt: a.createdAt instanceof Date ? a.createdAt.toISOString() : now,
        })) ?? [],
      listing: existing?.listing
        ? {
            id: existing.listing.id,
            status: existing.listing.status
              ? { name: existing.listing.status.name }
              : null
          }
        : null
    };
  });
}


  return allUnits;
};


/**
 * Update specific unit details for a property/unitNumber pair
 */
export const updateUnitDetails = async (
  propertyId: string,
  unitNumber: string,
  data: Partial<UnitFormData>  
): Promise<{ success: boolean; message: string; isNewUnit?: boolean; unit?: any }> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/units/${propertyId}/${unitNumber}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      console.error(
        `API Error: ${response.status} ${response.statusText} for ${response.url}`
      );
      throw new Error("Failed to update unit");
    }

    const resData = await response.json();
    return { 
      success: true, 
      message: resData.message || "Unit updated",
      isNewUnit: resData.isNewUnit,
      unit: resData.unit
    };
  } catch (error: any) {
    console.error("updateUnitDetails:", error);
    return { success: false, message: error.message || "Update failed" };
  }
};


export const fetchUnitDetails = async (propertyId: string, unitNumber: string, isServerSide: boolean) => {
  try {
    let url: string;
    
    if (isServerSide) {
      // Server-side: need absolute URL
      // Use environment variable or construct from available info
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                     process.env.NEXTAUTH_URL || 
                     process.env.VERCEL_URL ||
                     'http://localhost:3000'; // fallback for development
      
      const fullBaseUrl = baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`;
      url = `${fullBaseUrl}/api/units/${propertyId}/${unitNumber}`;
    } else {
      // Client-side: relative URL is fine
      url = `/api/units/${propertyId}/${unitNumber}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
      console.error(
        `API Error: ${response.status} ${response.statusText} for ${url}`
      );
      throw new Error("Failed to fetch unit details");
    }

    return await response.json();
  } catch (error) {
    console.error("fetchUnitDetails:", error);
    return null;
  }
};
