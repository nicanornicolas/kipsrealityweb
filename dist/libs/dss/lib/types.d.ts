import { DssParticipantRole } from '@prisma/client';
export declare const ROLE_HIERARCHY: Record<DssParticipantRole, number>;
export interface SignerAction {
    userId: string;
    role: DssParticipantRole;
    signatureData: string;
    ipAddress?: string;
    userAgent?: string;
}
export interface WorkflowResult {
    isComplete: boolean;
    nextStep: number | null;
    nextRole: DssParticipantRole | null;
}
