export enum DssParticipantRole {
    TENANT,
    LANDLORD,
    PROPERTY_MANAGER,
    AGENT,
    WITNESS,
    NOTARY,
    CUSTODIAN,
    VENDOR,
    OTHER
}

// Define the hierarchy of signing power if needed
export const ROLE_HIERARCHY: Record<DssParticipantRole, number> = {
    [DssParticipantRole.TENANT]: 1,           // Signs First
    [DssParticipantRole.LANDLORD]: 2,         // Signs Second
    [DssParticipantRole.PROPERTY_MANAGER]: 2, // Equivalent to Landlord
    [DssParticipantRole.AGENT]: 2,
    [DssParticipantRole.WITNESS]: 3,          // Signs Last
    [DssParticipantRole.NOTARY]: 4,           // Final seal
    [DssParticipantRole.CUSTODIAN]: 2,        // Equivalent to Landlord/Property Manager (signs on behalf of someone)
    [DssParticipantRole.VENDOR]: 0,
    [DssParticipantRole.OTHER]: 0
};

export interface SignerAction {
    userId: string;
    role: DssParticipantRole;
    signatureData: string; // Base64 or Text representation of signature
    ipAddress?: string;
    userAgent?: string;
}

export interface WorkflowResult {
    isComplete: boolean;
    nextStep: number | null;
    nextRole: DssParticipantRole | null;
}
