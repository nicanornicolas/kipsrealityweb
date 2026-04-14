import { WorkflowResult } from './types';
/**
 * Determines the next step in the signing workflow.
 * Enforces SEQUENTIAL processing based on 'stepOrder'.
 */
export declare function getNextSigner(documentId: string): Promise<WorkflowResult>;
/**
 * Checks if a specific user (by Role or ID) is allowed to sign RIGHT NOW.
 */
export declare function canUserSignNow(documentId: string, userEmail: string): Promise<boolean>;
