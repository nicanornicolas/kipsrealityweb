import { test, expect } from '@playwright/test';
import * as fc from 'fast-check';
import { ListingStatus, isValidStatusTransition, VALID_STATUS_TRANSITIONS } from '../../src/lib/listing-types';

/**
 * Property-Based Test for Listing Status Transitions
 * 
 * Feature: marketplace-listing-choice
 * Property 8: Valid State Transitions
 * Validates: Requirements 6.1, 6.2, 6.3, 6.4
 * 
 * This property test verifies that all status transitions follow the defined state machine rules.
 * For any valid transition defined in VALID_STATUS_TRANSITIONS, the isValidStatusTransition 
 * function should return true, and for any invalid transition, it should return false.
 */

test.describe('Listing Status Transitions Property Tests', () => {
    
    test('Property 8: Valid State Transitions - All defined transitions should be valid', async () => {
        await fc.assert(
            fc.property(
                // Generate all possible valid transitions from the state machine
                fc.constantFrom(...Object.entries(VALID_STATUS_TRANSITIONS).flatMap(([from, toStates]) =>
                    toStates.map(to => ({ from: from as ListingStatus, to }))
                )),
                (transition) => {
                    // Property: All transitions defined in VALID_STATUS_TRANSITIONS should be valid
                    const result = isValidStatusTransition(transition.from, transition.to);
                    expect(result).toBe(true);
                    return result === true;
                }
            ),
            { 
                numRuns: 100,
                verbose: true 
            }
        );
    });

    test('Property 8: Valid State Transitions - Invalid transitions should be rejected', async () => {
        await fc.assert(
            fc.property(
                // Generate pairs of statuses
                fc.constantFrom(...Object.values(ListingStatus)),
                fc.constantFrom(...Object.values(ListingStatus)),
                (fromStatus, toStatus) => {
                    const isDefinedAsValid = VALID_STATUS_TRANSITIONS[fromStatus]?.includes(toStatus) ?? false;
                    const functionResult = isValidStatusTransition(fromStatus, toStatus);
                    
                    // Property: The function result should match what's defined in the state machine
                    expect(functionResult).toBe(isDefinedAsValid);
                    return functionResult === isDefinedAsValid;
                }
            ),
            { 
                numRuns: 100,
                verbose: true 
            }
        );
    });

    test('Property 8: Valid State Transitions - State machine completeness', async () => {
        // Verify that every status has at least one valid transition defined
        const allStatuses = Object.values(ListingStatus);
        
        for (const status of allStatuses) {
            expect(VALID_STATUS_TRANSITIONS[status]).toBeDefined();
            expect(Array.isArray(VALID_STATUS_TRANSITIONS[status])).toBe(true);
            expect(VALID_STATUS_TRANSITIONS[status].length).toBeGreaterThan(0);
        }
    });

    test('Property 8: Valid State Transitions - Reflexivity check', async () => {
        await fc.assert(
            fc.property(
                fc.constantFrom(...Object.values(ListingStatus)),
                (status) => {
                    // Property: A status can only transition to itself if explicitly defined
                    const canTransitionToSelf = VALID_STATUS_TRANSITIONS[status].includes(status);
                    const functionResult = isValidStatusTransition(status, status);
                    
                    expect(functionResult).toBe(canTransitionToSelf);
                    return functionResult === canTransitionToSelf;
                }
            ),
            { 
                numRuns: 50,
                verbose: true 
            }
        );
    });

    test('Property 8: Valid State Transitions - Specific business rules', async () => {
        // Test specific business rules from the requirements
        
        // PRIVATE can transition to ACTIVE and PENDING
        expect(isValidStatusTransition(ListingStatus.PRIVATE, ListingStatus.ACTIVE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.PRIVATE, ListingStatus.PENDING)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.PRIVATE, ListingStatus.SUSPENDED)).toBe(false);
        expect(isValidStatusTransition(ListingStatus.PRIVATE, ListingStatus.EXPIRED)).toBe(false);
        
        // ACTIVE can transition to PRIVATE, SUSPENDED, and EXPIRED
        expect(isValidStatusTransition(ListingStatus.ACTIVE, ListingStatus.PRIVATE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.ACTIVE, ListingStatus.SUSPENDED)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.ACTIVE, ListingStatus.EXPIRED)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.ACTIVE, ListingStatus.PENDING)).toBe(false);
        
        // SUSPENDED can transition to ACTIVE and PRIVATE
        expect(isValidStatusTransition(ListingStatus.SUSPENDED, ListingStatus.ACTIVE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.SUSPENDED, ListingStatus.PRIVATE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.SUSPENDED, ListingStatus.PENDING)).toBe(false);
        expect(isValidStatusTransition(ListingStatus.SUSPENDED, ListingStatus.EXPIRED)).toBe(false);
        
        // EXPIRED can transition to ACTIVE and PRIVATE
        expect(isValidStatusTransition(ListingStatus.EXPIRED, ListingStatus.ACTIVE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.EXPIRED, ListingStatus.PRIVATE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.EXPIRED, ListingStatus.PENDING)).toBe(false);
        expect(isValidStatusTransition(ListingStatus.EXPIRED, ListingStatus.SUSPENDED)).toBe(false);
        
        // PENDING can transition to ACTIVE and PRIVATE
        expect(isValidStatusTransition(ListingStatus.PENDING, ListingStatus.ACTIVE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.PENDING, ListingStatus.PRIVATE)).toBe(true);
        expect(isValidStatusTransition(ListingStatus.PENDING, ListingStatus.SUSPENDED)).toBe(false);
        expect(isValidStatusTransition(ListingStatus.PENDING, ListingStatus.EXPIRED)).toBe(false);
    });
});