export declare enum DssParticipantRole {
    TENANT = 0,
    LANDLORD = 1,
    PROPERTY_MANAGER = 2,
    AGENT = 3,
    WITNESS = 4,
    NOTARY = 5,
    CUSTODIAN = 6,
    VENDOR = 7,
    OTHER = 8
}
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
