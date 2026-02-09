import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getCurrentUser } from "@/lib/Getcurrentuser";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Get authenticated user
    const user = await getCurrentUser(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();

    const {
      organizationId,
      managerId,
      propertyTypeId,
      locationId,
      city,
      address,
      bedrooms,
      bathrooms,
      size,
      amenities,
      isFurnished,
      availabilityStatus,
    } = data;

    // ✅ 1. Fetch category for "Property"
    const propertyCategory = await prisma.categoryMarketplace.findUnique({
      where: { name: "Property" },
    });

    if (!propertyCategory) throw new Error("Property category not found");

    // ✅ 2. Create property with nested listing
    const newProperty = await prisma.property.create({
      data: {
        organization: { connect: { id: organizationId } },
        manager: managerId ? { connect: { id: managerId } } : undefined,
        propertyType: propertyTypeId ? { connect: { id: propertyTypeId } } : undefined,
        location: locationId ? { connect: { id: locationId } } : undefined,
        city,
        address,
        isFurnished,
        availabilityStatus,

        listing: {
          create: {
            organizationId,
            createdBy: user.id,
            title: generateListingTitle(city, bedrooms, bathrooms, propertyTypeId),
            description: generateListingDescription(city, address, bedrooms, bathrooms, amenities),
            price: calculatePrice(bedrooms, bathrooms, size),
          },
        },
      },
    });

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating property listing:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { error: "Failed to create property listing", details: errorMessage },
      { status: 500 }
    );
  }
}

// Helper functions
function generateListingTitle(city: string, bedrooms: number, bathrooms: number, propertyTypeId: string): string {
  const propertyType = propertyTypeId ? `Property` : "Property";
  return `${bedrooms || "Studio"} Bed, ${bathrooms || 1} Bath ${propertyType} in ${city}`;
}

function generateListingDescription(city: string, address: string, bedrooms: number, bathrooms: number, amenities: string): string {
  const desc = `Beautiful ${bedrooms || "studio"} bedroom, ${bathrooms || 1} bathroom property located at ${address}, ${city}.`;
  if (amenities) {
    return `${desc} Features include: ${amenities}.`;
  }
  return `${desc} Contact for more details.`;
}

function calculatePrice(bedrooms: number, bathrooms: number, size: number): number {
  // Base price calculation - can be enhanced later
  const basePrice = 1000;
  const bedroomBonus = (bedrooms || 1) * 200;
  const bathroomBonus = (bathrooms || 1) * 100;
  const sizeBonus = (size || 0) * 0.5;
  
  return basePrice + bedroomBonus + bathroomBonus + sizeBonus;
}
