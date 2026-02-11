import { prisma } from "@/lib/db";
import { MarketplaceClientPage } from "@/components/website/marketplace/ListingClientPage";
import Navbar from "@/components/website/Navbar";

export const dynamic = "force-dynamic";

// Define the interface here to match what we're creating
interface MarketplaceItem {
  id: string;
  title: string;
  description?: string;
  price: number;
  image: string;
  category: string;
  location: string;
  unitId: string;
  propertyId: string;
  unit: {
    id: string;
    unitNumber?: string;
    property: {
      id: string;
      name?: string;
    };
  };
  property: {
    id: string;
    name?: string;
  };
}

export default async function MarketplacePage() {
  let listings: MarketplaceItem[] = [];

  try {
    // Fetch ALL listings (both property and unit listings)
    const listingsData = await prisma.listing.findMany({
      where: {
        AND: [
          {
            OR: [
              { unit: { isNot: null } },
              { property: { isNot: null } }
            ]
          },
          {
            OR: [
              { status: { name: { in: ["ACTIVE", "COMING_SOON"] } } },
              { statusId: null }
            ]
          }
        ]
      },
      include: {
        images: true,
        status: true,
        unit: {
          include: {
            property: {
              include: {
                location: true,
                propertyType: true,
              },
            },
          },
        },
        property: {
          include: {
            location: true,
            propertyType: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    console.log(`Found ${listingsData.length} total listings (property + unit)`);

    // Map listings to MarketplaceItems
    const mappedListings = listingsData
      .map((listing) => {
        // Determine if this is a unit listing or property listing
        const isUnitListing = !!listing.unitId;
        const targetEntity = isUnitListing ? listing.unit : listing.property;
        
        if (!targetEntity) {
          return null;
        }

        const property = isUnitListing ? listing.unit?.property : listing.property;
        
        if (!property) {
          return null;
        }

        const unitNumber = isUnitListing ? listing.unit?.unitNumber : undefined;
        const unitId = isUnitListing ? listing.unitId : undefined;
        
        return {
          id: listing.id,
          title: listing.title || "Untitled Listing",
          description: listing.description || property.amenities || "No description available",
          price: listing.price || 0,
          location: property.city || property.location?.name || "Unknown Location",
          image: listing.images?.[0]?.imageUrl || `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop`,
          unitId: unitId || undefined,
          propertyId: property.id,
          unit: unitId ? {
            id: unitId,
            unitNumber: unitNumber || undefined,
            property: {
              id: property.id,
              name: property.name || undefined,
            },
          } : undefined,
          property: {
            id: property.id,
            name: property.name || undefined,
          },
        };
      })
      .filter((item) => item !== null);
    
    listings = mappedListings as MarketplaceItem[];
    
    console.log(`Successfully mapped ${listings.length} marketplace items`);

  } catch (error) {
    console.error("Error fetching marketplace listings:", error);
  }

  return (
    <>
      <Navbar />
      <section className="w-full bg-[#18181a] text-white py-32 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Marketplace <span className="text-gradient-primary">Listings</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Explore Property Listings, Assets, and Services on Rentflow 360 Marketplace.
          </p>

          {listings.length === 0 ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                No listings found
              </h2>
              <p className="text-white/80">
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <MarketplaceClientPage listings={listings} />
    </>
  );
}
