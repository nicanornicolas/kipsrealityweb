import { test, expect } from '@playwright/test';
import * as fc from 'fast-check';
import { auditService } from '../../src/lib/audit-service';
import { ListingAction, ListingStatus } from '../../src/lib/listing-types';
import { prisma } from '../../src/lib/db';

/**
 * Property-Based Test for Comprehensive Audit Logging
 * 
 * Feature: marketplace-listing-choice
 * Property 9: Comprehensive Audit Logging
 * Validates: Requirements 2.5, 6.5, 10.1
 * 
 * This property test verifies that all listing operations create complete audit entries
 * with proper user tracking, timestamps, and metadata preservation.
 */

// Test data generators
const generateUserId = () => fc.uuid();
const generateUnitId = () => fc.uuid();
const generateListingId = () => fc.option(fc.uuid(), { nil: null });
const generateAction = () => fc.constantFrom(...Object.values(ListingAction));
const generateStatus = () => fc.constantFrom(...Object.values(ListingStatus));
const generateReason = () => fc.option(fc.string({ minLength: 1, maxLength: 100 }), { nil: null });
const generateMetadata = () => fc.option(
    fc.record({
        operationType: fc.string(),
        changes: fc.record({
            field: fc.string(),
            oldValue: fc.anything(),
            newValue: fc.anything()
        }),
        bulkOperationId: fc.option(fc.uuid(), { nil: null })
    }),
    { nil: null }
);

test.describe('Comprehensive Audit Logging Property Tests', () => {
    
    // Clean up test data after each test
    test.afterEach(async () => {
        // Clean up any test audit entries
        await prisma.listingAuditEntry.deleteMany({
            where: {
                reason: {
                    contains: 'TEST_AUDIT'
                }
            }
        });
    });

    test('Property 9: Comprehensive Audit Logging - All audit entries have required fields', async () => {
        await fc.assert(
            fc.property(
                generateUnitId(),
                generateListingId(),
                generateAction(),
                generateStatus(),
                generateStatus(),
                generateUserId(),
                generateReason(),
                generateMetadata(),
                async (unitId, listingId, action, previousStatus, newStatus, userId, reason, metadata) => {
                    // Create audit entry with test marker
                    const testReason = `TEST_AUDIT: ${reason || 'Property test'}`;
                    
                    const auditEntry = await auditService.createAuditEntry({
                        unitId,
                        listingId: listingId || undefined,
                        action,
                        previousStatus: action === ListingAction.CREATE ? undefined : previousStatus,
                        newStatus,
                        userId,
                        reason: testReason,
                        metadata: metadata || undefined
                    });

                    // Property: All required fields must be present and valid
                    expect(auditEntry.id).toBeDefined();
                    expect(typeof auditEntry.id).toBe('string');
                    expect(auditEntry.id.length).toBeGreaterThan(0);
                    
                    expect(auditEntry.unitId).toBe(unitId);
                    expect(auditEntry.listingId).toBe(listingId || undefined);
                    expect(auditEntry.action).toBe(action);
                    expect(auditEntry.newStatus).toBe(newStatus);
                    expect(auditEntry.userId).toBe(userId);
                    expect(auditEntry.reason).toBe(testReason);
                    
                    // Timestamp should be recent (within last minute)
                    const now = new Date();
                    const timeDiff = now.getTime() - auditEntry.timestamp.getTime();
                    expect(timeDiff).toBeLessThan(60000); // Less than 1 minute
                    expect(timeDiff).toBeGreaterThanOrEqual(0); // Not in the future
                    
                    // Metadata should be preserved if provided
                    if (metadata) {
                        expect(auditEntry.metadata).toEqual(metadata);
                    }
                    
                    return true;
                }
            ),
            { 
                numRuns: 50,
                verbose: true 
            }
        );
    });

    test('Property 9: Comprehensive Audit Logging - Audit trail retrieval completeness', async () => {
        await fc.assert(
            fc.property(
                generateUnitId(),
                fc.array(
                    fc.record({
                        action: generateAction(),
                        status: generateStatus(),
                        reason: fc.string({ minLength: 1, maxLength: 50 })
                    }),
                    { minLength: 1, maxLength: 5 }
                ),
                generateUserId(),
                async (unitId, operations, userId) => {
                    // Create multiple audit entries for the same unit
                    const createdEntries = [];
                    
                    for (const [index, op] of operations.entries()) {
                        const testReason = `TEST_AUDIT: ${op.reason} - ${index}`;
                        const entry = await auditService.createAuditEntry({
                            unitId,
                            action: op.action,
                            newStatus: op.status,
                            userId,
                            reason: testReason
                        });
                        createdEntries.push(entry);
                        
                        // Small delay to ensure different timestamps
                        await new Promise(resolve => setTimeout(resolve, 10));
                    }

                    // Retrieve audit trail for the unit
                    const auditTrail = await auditService.getUnitAuditHistory(unitId);
                    
                    // Property: All created entries should be retrievable
                    const testEntries = auditTrail.filter(entry => 
                        entry.reason?.includes('TEST_AUDIT')
                    );
                    
                    expect(testEntries.length).toBe(operations.length);
                    
                    // Property: Entries should be ordered by timestamp (most recent first)
                    for (let i = 0; i < testEntries.length - 1; i++) {
                        expect(testEntries[i].timestamp.getTime())
                            .toBeGreaterThanOrEqual(testEntries[i + 1].timestamp.getTime());
                    }
                    
                    // Property: Each entry should have complete data
                    for (const entry of testEntries) {
                        expect(entry.unitId).toBe(unitId);
                        expect(entry.userId).toBe(userId);
                        expect(entry.action).toBeDefined();
                        expect(entry.newStatus).toBeDefined();
                        expect(entry.timestamp).toBeInstanceOf(Date);
                        expect(entry.reason).toContain('TEST_AUDIT');
                    }
                    
                    return true;
                }
            ),
            { 
                numRuns: 20,
                verbose: true 
            }
        );
    });

    test('Property 9: Comprehensive Audit Logging - Filtering and pagination consistency', async () => {
        await fc.assert(
            fc.property(
                generateUnitId(),
                generateUserId(),
                fc.integer({ min: 2, max: 10 }),
                async (unitId, userId, entryCount) => {
                    // Create multiple audit entries
                    const createdEntries = [];
                    const actions = Object.values(ListingAction);
                    
                    for (let i = 0; i < entryCount; i++) {
                        const action = actions[i % actions.length];
                        const entry = await auditService.createAuditEntry({
                            unitId,
                            action,
                            newStatus: ListingStatus.ACTIVE,
                            userId,
                            reason: `TEST_AUDIT: Entry ${i}`
                        });
                        createdEntries.push(entry);
                        await new Promise(resolve => setTimeout(resolve, 10));
                    }

                    // Test filtering by unit ID
                    const unitFilter = await auditService.getAuditTrail({ unitId });
                    const testEntriesFromUnit = unitFilter.entries.filter(e => 
                        e.reason?.includes('TEST_AUDIT')
                    );
                    
                    // Property: Filtering by unitId should return only entries for that unit
                    expect(testEntriesFromUnit.length).toBe(entryCount);
                    testEntriesFromUnit.forEach(entry => {
                        expect(entry.unitId).toBe(unitId);
                    });

                    // Test filtering by user ID
                    const userFilter = await auditService.getAuditTrail({ userId });
                    const testEntriesFromUser = userFilter.entries.filter(e => 
                        e.reason?.includes('TEST_AUDIT') && e.unitId === unitId
                    );
                    
                    // Property: Filtering by userId should return only entries for that user
                    expect(testEntriesFromUser.length).toBe(entryCount);
                    testEntriesFromUser.forEach(entry => {
                        expect(entry.userId).toBe(userId);
                    });

                    // Test pagination
                    const pageSize = Math.max(1, Math.floor(entryCount / 2));
                    const firstPage = await auditService.getAuditTrail({ 
                        unitId, 
                        limit: pageSize, 
                        offset: 0 
                    });
                    
                    const secondPage = await auditService.getAuditTrail({ 
                        unitId, 
                        limit: pageSize, 
                        offset: pageSize 
                    });

                    // Property: Pagination should not return duplicate entries
                    const firstPageTestEntries = firstPage.entries.filter(e => 
                        e.reason?.includes('TEST_AUDIT')
                    );
                    const secondPageTestEntries = secondPage.entries.filter(e => 
                        e.reason?.includes('TEST_AUDIT')
                    );
                    
                    const firstPageIds = new Set(firstPageTestEntries.map(e => e.id));
                    const secondPageIds = new Set(secondPageTestEntries.map(e => e.id));
                    
                    // No overlap between pages
                    const intersection = new Set([...firstPageIds].filter(id => secondPageIds.has(id)));
                    expect(intersection.size).toBe(0);
                    
                    return true;
                }
            ),
            { 
                numRuns: 15,
                verbose: true 
            }
        );
    });

    test('Property 9: Comprehensive Audit Logging - Metadata preservation and integrity', async () => {
        await fc.assert(
            fc.property(
                generateUnitId(),
                generateUserId(),
                generateMetadata(),
                async (unitId, userId, metadata) => {
                    // Skip if metadata is null (we want to test actual metadata preservation)
                    if (!metadata) return true;
                    
                    const auditEntry = await auditService.createAuditEntry({
                        unitId,
                        action: ListingAction.UPDATE,
                        newStatus: ListingStatus.ACTIVE,
                        userId,
                        reason: 'TEST_AUDIT: Metadata preservation test',
                        metadata
                    });

                    // Property: Metadata should be preserved exactly as provided
                    expect(auditEntry.metadata).toEqual(metadata);
                    
                    // Retrieve the entry and verify metadata persistence
                    const retrievedEntries = await auditService.getUnitAuditHistory(unitId);
                    const testEntry = retrievedEntries.find(e => e.id === auditEntry.id);
                    
                    expect(testEntry).toBeDefined();
                    expect(testEntry!.metadata).toEqual(metadata);
                    
                    // Property: Complex nested objects should be preserved
                    if (metadata.changes) {
                        expect(testEntry!.metadata!.changes).toEqual(metadata.changes);
                    }
                    
                    return true;
                }
            ),
            { 
                numRuns: 30,
                verbose: true 
            }
        );
    });

    test('Property 9: Comprehensive Audit Logging - Concurrent operation handling', async () => {
        await fc.assert(
            fc.property(
                generateUnitId(),
                fc.array(generateUserId(), { minLength: 2, maxLength: 5 }),
                async (unitId, userIds) => {
                    // Create concurrent audit entries from different users
                    const promises = userIds.map((userId, index) => 
                        auditService.createAuditEntry({
                            unitId,
                            action: ListingAction.UPDATE,
                            newStatus: ListingStatus.ACTIVE,
                            userId,
                            reason: `TEST_AUDIT: Concurrent operation ${index} by ${userId}`
                        })
                    );

                    const results = await Promise.all(promises);
                    
                    // Property: All concurrent operations should succeed
                    expect(results.length).toBe(userIds.length);
                    results.forEach(result => {
                        expect(result.id).toBeDefined();
                        expect(typeof result.id).toBe('string');
                    });
                    
                    // Property: All entries should be retrievable
                    const auditTrail = await auditService.getUnitAuditHistory(unitId);
                    const testEntries = auditTrail.filter(e => 
                        e.reason?.includes('TEST_AUDIT: Concurrent operation')
                    );
                    
                    expect(testEntries.length).toBe(userIds.length);
                    
                    // Property: Each user's entry should be present
                    const foundUserIds = new Set(testEntries.map(e => e.userId));
                    userIds.forEach(userId => {
                        expect(foundUserIds.has(userId)).toBe(true);
                    });
                    
                    return true;
                }
            ),
            { 
                numRuns: 10,
                verbose: true 
            }
        );
    });
});