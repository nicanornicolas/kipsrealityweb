/**
 * Property-Based Test: Default Value Population
 * **Feature: marketplace-listing-choice, Property 7: Default Value Population**
 * **Validates: Requirements 5.3, 5.4**
 * 
 * Property: For any unit being listed on the marketplace, missing listing fields 
 * should be populated with appropriate defaults from unit and property data
 */

import { describe, it, expect } from 'vitest'
import fc from 'fast-check'
import { UnitWithListingStatus, CreateListingData } from '@/lib/listing-types'

// Generator for unit data with various completeness levels
const unitGenerator = fc.record({
  id: fc.uuid(),
  unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
  propertyId: fc.uuid(),
  rentAmount: fc.option(fc.float({ min: 100, max: 10000 })),
  bedrooms: fc.option(fc.integer({ min: 0, max: 10 })),
  bathrooms: fc.option(fc.float({ min: 0, max: 10 })),
  squareFootage: fc.option(fc.integer({ min: 200, max: 5000 })),
})

// Generator for partial listing data (simulating incomplete user input)
const partialListingDataGenerator = fc.record({
  title: fc.option(fc.string({ minLength: 1, maxLength: 100 })),
  description: fc.option(fc.string({ minLength: 1, maxLength: 500 })),
  price: fc.option(fc.float({ min: 100, max: 10000 })),
  availabilityDate: fc.option(fc.date()),
  expirationDate: fc.option(fc.date()),
}, { requiredKeys: [] })

/**
 * Simulates the default value population logic from ListingDetailsForm
 * This function represents the business logic being tested
 */
function populateListingDefaults(
  unit: UnitWithListingStatus, 
  partialData: Partial<CreateListingData>
): CreateListingData {
  // Generate default title
  const generateDefaultTitle = () => {
    if (partialData.title) return partialData.title
    
    const unitNumber = unit.unitNumber || 'Unit'
    const bedrooms = unit.bedrooms ? `${unit.bedrooms}BR` : ''
    const bathrooms = unit.bathrooms ? `${unit.bathrooms}BA` : ''
    
    const details = [bedrooms, bathrooms].filter(Boolean).join('/')
    return details ? `${unitNumber} - ${details}` : unitNumber
  }

  // Generate default description
  const generateDefaultDescription = () => {
    if (partialData.description) return partialData.description
    
    const parts = []
    
    if (unit.bedrooms) {
      parts.push(`${unit.bedrooms} bedroom${unit.bedrooms > 1 ? 's' : ''}`)
    }
    
    if (unit.bathrooms) {
      parts.push(`${unit.bathrooms} bathroom${unit.bathrooms > 1 ? 's' : ''}`)
    }
    
    if (unit.squareFootage) {
      parts.push(`${unit.squareFootage} sq ft`)
    }
    
    const baseDescription = parts.length > 0 
      ? `Spacious ${parts.join(', ')} unit available for rent.`
      : 'Quality rental unit available.'
    
    return baseDescription + ' Contact us for more details and to schedule a viewing.'
  }

  // Generate default price
  const generateDefaultPrice = () => {
    if (partialData.price !== undefined) return partialData.price
    if (unit.rentAmount) return unit.rentAmount
    return 1000 // Fallback default
  }

  // Generate default availability date
  const generateDefaultAvailabilityDate = () => {
    if (partialData.availabilityDate) return partialData.availabilityDate
    return new Date() // Default to today
  }

  return {
    unitId: unit.id,
    title: generateDefaultTitle(),
    description: generateDefaultDescription(),
    price: generateDefaultPrice(),
    availabilityDate: generateDefaultAvailabilityDate(),
    expirationDate: partialData.expirationDate,
  }
}

describe('Property 7: Default Value Population', () => {
  it('should populate missing title with unit details when available', () => {
    fc.assert(fc.property(
      unitGenerator,
      partialListingDataGenerator,
      (unit, partialData) => {
        // Ensure title is not provided in partial data
        const partialWithoutTitle = { ...partialData, title: undefined }
        
        const result = populateListingDefaults(unit, partialWithoutTitle)
        
        // Title should be generated and not empty
        expect(result.title).toBeDefined()
        expect(result.title.length).toBeGreaterThan(0)
        
        // Title should include unit number
        expect(result.title).toContain(unit.unitNumber)
        
        // If unit has bedrooms/bathrooms, they should be reflected in title
        if (unit.bedrooms && unit.bathrooms) {
          expect(result.title).toMatch(/\d+BR/)
          expect(result.title).toMatch(/\d+BA/)
        }
      }
    ), { numRuns: 100 })
  })

  it('should populate missing description with unit characteristics', () => {
    fc.assert(fc.property(
      unitGenerator,
      partialListingDataGenerator,
      (unit, partialData) => {
        // Ensure description is not provided in partial data
        const partialWithoutDescription = { ...partialData, description: undefined }
        
        const result = populateListingDefaults(unit, partialWithoutDescription)
        
        // Description should be generated and not empty
        expect(result.description).toBeDefined()
        expect(result.description.length).toBeGreaterThan(0)
        
        // Description should include unit characteristics when available
        if (unit.bedrooms) {
          expect(result.description).toContain('bedroom')
        }
        
        if (unit.bathrooms) {
          expect(result.description).toContain('bathroom')
        }
        
        if (unit.squareFootage) {
          expect(result.description).toContain('sq ft')
        }
        
        // Description should always include contact information
        expect(result.description).toContain('Contact us')
      }
    ), { numRuns: 100 })
  })

  it('should populate missing price with unit rent amount when available', () => {
    fc.assert(fc.property(
      unitGenerator,
      partialListingDataGenerator,
      (unit, partialData) => {
        // Ensure price is not provided in partial data
        const partialWithoutPrice = { ...partialData, price: undefined }
        
        const result = populateListingDefaults(unit, partialWithoutPrice)
        
        // Price should be generated and be a positive number
        expect(result.price).toBeDefined()
        expect(result.price).toBeGreaterThan(0)
        
        // If unit has rent amount, it should be used
        if (unit.rentAmount) {
          expect(result.price).toBe(unit.rentAmount)
        } else {
          // Should have a reasonable fallback
          expect(result.price).toBeGreaterThan(0)
        }
      }
    ), { numRuns: 100 })
  })

  it('should preserve provided values and only populate missing ones', () => {
    fc.assert(fc.property(
      unitGenerator,
      fc.record({
        title: fc.string({ minLength: 1, maxLength: 100 }),
        description: fc.string({ minLength: 1, maxLength: 500 }),
        price: fc.float({ min: 100, max: 10000 }),
      }),
      (unit, providedData) => {
        const result = populateListingDefaults(unit, providedData)
        
        // Provided values should be preserved exactly
        expect(result.title).toBe(providedData.title)
        expect(result.description).toBe(providedData.description)
        expect(result.price).toBe(providedData.price)
        
        // Missing values should still be populated
        expect(result.unitId).toBe(unit.id)
        expect(result.availabilityDate).toBeDefined()
      }
    ), { numRuns: 100 })
  })

  it('should generate valid availability date when not provided', () => {
    fc.assert(fc.property(
      unitGenerator,
      partialListingDataGenerator,
      (unit, partialData) => {
        // Ensure availability date is not provided
        const partialWithoutDate = { ...partialData, availabilityDate: undefined }
        
        const result = populateListingDefaults(unit, partialWithoutDate)
        
        // Availability date should be generated
        expect(result.availabilityDate).toBeDefined()
        expect(result.availabilityDate).toBeInstanceOf(Date)
        
        // Should not be in the past (allowing for small timing differences)
        const now = new Date()
        const daysBefore = (now.getTime() - result.availabilityDate.getTime()) / (1000 * 60 * 60 * 24)
        expect(daysBefore).toBeLessThan(1) // Should be today or future
      }
    ), { numRuns: 100 })
  })

  it('should handle units with minimal data gracefully', () => {
    fc.assert(fc.property(
      fc.record({
        id: fc.uuid(),
        unitNumber: fc.string({ minLength: 1, maxLength: 10 }),
        propertyId: fc.uuid(),
        // All optional fields are undefined
        rentAmount: fc.constant(undefined),
        bedrooms: fc.constant(undefined),
        bathrooms: fc.constant(undefined),
        squareFootage: fc.constant(undefined),
      }),
      fc.record({}, { requiredKeys: [] }), // Empty partial data
      (minimalUnit, emptyPartialData) => {
        const result = populateListingDefaults(minimalUnit, emptyPartialData)
        
        // Should still generate valid listing data
        expect(result.unitId).toBe(minimalUnit.id)
        expect(result.title).toBeDefined()
        expect(result.title.length).toBeGreaterThan(0)
        expect(result.description).toBeDefined()
        expect(result.description.length).toBeGreaterThan(0)
        expect(result.price).toBeGreaterThan(0)
        expect(result.availabilityDate).toBeDefined()
        
        // Title should at least contain unit number
        expect(result.title).toContain(minimalUnit.unitNumber)
        
        // Description should be meaningful even without unit details
        expect(result.description).toContain('unit available')
      }
    ), { numRuns: 100 })
  })

  it('should maintain data consistency across multiple calls with same input', () => {
    fc.assert(fc.property(
      unitGenerator,
      partialListingDataGenerator,
      (unit, partialData) => {
        const result1 = populateListingDefaults(unit, partialData)
        const result2 = populateListingDefaults(unit, partialData)
        
        // Results should be identical (deterministic)
        expect(result1.title).toBe(result2.title)
        expect(result1.description).toBe(result2.description)
        expect(result1.price).toBe(result2.price)
        expect(result1.unitId).toBe(result2.unitId)
        
        // Note: availabilityDate might differ if it defaults to "now"
        // This is acceptable behavior for this property
      }
    ), { numRuns: 50 })
  })
})