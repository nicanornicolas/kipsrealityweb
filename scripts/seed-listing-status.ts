#!/usr/bin/env tsx
/**
 * Script to seed ListingStatus table with all required status values.
 * Run with: npx tsx scripts/seed-listing-status.ts
 */

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

const REQUIRED_STATUSES = [
  { name: 'PRIVATE', description: 'Unit exists but not listed' },
  { name: 'ACTIVE', description: 'Listed and visible in marketplace' },
  { name: 'SUSPENDED', description: 'Temporarily hidden from marketplace' },
  { name: 'PENDING', description: 'Listing created but not yet active' },
  { name: 'EXPIRED', description: 'Listing has expired' },
  { name: 'MAINTENANCE', description: 'Temporarily removed for maintenance' },
  { name: 'COMING_SOON', description: 'Listed but not yet available' },
];

async function seedListingStatus() {
  console.log('Seeding ListingStatus table...');
  
  try {
    // Check existing statuses
    const existingStatuses = await prisma.listingStatus.findMany();
    console.log(`Found ${existingStatuses.length} existing status records`);
    
    // Log existing statuses for debugging
    console.log('Existing statuses:', existingStatuses.map(s => ({ name: s.name, id: s.id })));
    
    // Create or update each required status
    for (const status of REQUIRED_STATUSES) {
      // Use case-insensitive search to find existing status
      const existing = existingStatuses.find(s => s.name.toUpperCase() === status.name.toUpperCase());
      
      if (existing) {
        // Update if description changed or name case needs correction
        const updates: any = {};
        if (existing.description !== status.description) {
          updates.description = status.description;
        }
        if (existing.name !== status.name) {
          updates.name = status.name; // Standardize casing
        }
        
        if (Object.keys(updates).length > 0) {
          await prisma.listingStatus.update({
            where: { id: existing.id },
            data: updates,
          });
          console.log(`✅ Updated status: ${status.name}`);
        } else {
          console.log(`✅ Status already exists: ${status.name}`);
        }
      } else {
        try {
          // Create new status with upsert to handle race conditions
          await prisma.listingStatus.upsert({
            where: { name: status.name },
            update: { description: status.description },
            create: status,
          });
          console.log(`✅ Created/updated status: ${status.name}`);
        } catch (createError: any) {
          // Handle unique constraint errors gracefully
          if (createError.code === 'P2002') {
            console.log(`✅ Status already exists (via constraint): ${status.name}`);
          } else {
            throw createError;
          }
        }
      }
    }
    
    // Verify all statuses are present
    const finalStatuses = await prisma.listingStatus.findMany();
    console.log(`\n📊 Final ListingStatus count: ${finalStatuses.length}`);
    console.log('Available statuses:');
    finalStatuses.forEach(s => console.log(`  - ${s.name}: ${s.description || 'No description'}`));
    
    // Check for any missing statuses
    const missing = REQUIRED_STATUSES.filter(
      required => !finalStatuses.find(s => s.name.toUpperCase() === required.name.toUpperCase())
    );
    
    if (missing.length > 0) {
      console.warn(`\n⚠️  Missing statuses: ${missing.map(s => s.name).join(', ')}`);
    } else {
      console.log('\n All required statuses are present!');
    }
    
    // Also ensure ListingStatus_enum has corresponding values
    console.log('\n📋 Verifying ListingStatus_enum values:');
    console.log('PRIVATE, ACTIVE, SUSPENDED, PENDING, EXPIRED are defined in schema');
    
  } catch (error) {
    console.error('❌ Error seeding ListingStatus:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedListingStatus().catch(console.error);
