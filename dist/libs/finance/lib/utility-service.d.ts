import { Decimal } from '@prisma/client/runtime/library';
export declare const utilityService: {
    /**
     * Preview utility allocations based on split method.
     */
    calculateAllocations(utilityBillId: string): Promise<{
        utilityBill: {
            property: {
                units: ({
                    leases: ({
                        tenant: {
                            id: string;
                            phone: string | null;
                            createdAt: Date;
                            updatedAt: Date;
                            region: import("@prisma/client").$Enums.Region | null;
                            email: string;
                            status: import("@prisma/client").$Enums.UserStatus;
                            passwordHash: string;
                            firstName: string | null;
                            lastName: string | null;
                            phoneVerified: Date | null;
                            avatarUrl: string | null;
                            lastLoginAt: Date | null;
                            emailVerified: Date | null;
                            verificationToken: string | null;
                            consentMarketing: boolean;
                            consentNotifications: boolean;
                            consentTransactional: boolean;
                            kycStatus: import("@prisma/client").$Enums.KycStatus;
                            paystackCustomerCode: string | null;
                            plaidAccessToken: string | null;
                            stripeCustomerId: string | null;
                            twoFactorEnabled: boolean;
                        } | null;
                    } & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        propertyId: string;
                        unitId: string;
                        tenantId: string | null;
                        applicationId: string;
                        startDate: Date;
                        endDate: Date;
                        rentAmount: number;
                        securityDeposit: number | null;
                        leaseStatus: import("@prisma/client").$Enums.LeaseStatus | null;
                        earlyTerminationFee: number | null;
                        gracePeriodDays: number | null;
                        landlordResponsibilities: string | null;
                        landlordSignedAt: Date | null;
                        lateFeeDaily: number | null;
                        lateFeeFlat: number | null;
                        leaseTerm: string | null;
                        paymentDueDay: number | null;
                        paymentFrequency: string;
                        tenantPaysElectric: boolean;
                        tenantPaysInternet: boolean;
                        tenantPaysTrash: boolean;
                        tenantPaysWater: boolean;
                        tenantResponsibilities: string | null;
                        usageType: string | null;
                        hasRenewalOption: boolean | null;
                        renewalNoticeDays: number | null;
                        renewalTermMonths: number | null;
                        renewalRentIncrease: number | null;
                        autoRenew: boolean | null;
                        hasRentEscalation: boolean | null;
                        escalationType: import("@prisma/client").$Enums.LeaseEscalationType | null;
                        escalationRate: number | null;
                        escalationFrequency: string | null;
                        nextEscalationDate: Date | null;
                        documentVersion: number | null;
                        lastDocumentUpdate: Date | null;
                        complianceCheckDate: Date | null;
                        complianceStatus: import("@prisma/client").$Enums.LeaseComplianceStatus | null;
                        complianceNotes: string | null;
                        tenantSignedAt: Date | null;
                    })[];
                } & {
                    id: string;
                    createdAt: Date;
                    propertyId: string;
                    listingId: string | null;
                    rentAmount: number | null;
                    complexDetailId: string | null;
                    unitNumber: string;
                    floorNumber: number | null;
                    bedrooms: number | null;
                    bathrooms: number | null;
                    isOccupied: boolean;
                    houseDetailId: string | null;
                    unitName: string | null;
                    currency: string | null;
                    squareFootage: number | null;
                })[];
            } & {
                name: string | null;
                id: string;
                address: string;
                createdAt: Date;
                organizationId: string | null;
                locationId: string | null;
                listingId: string | null;
                managerId: string | null;
                propertyTypeId: string | null;
                city: string;
                amenities: string | null;
                isFurnished: boolean;
                availabilityStatus: string | null;
                contactEmail: string | null;
                contactPhone: string | null;
                country: string | null;
                zipCode: string | null;
                latitude: number | null;
                longitude: number | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            status: import("@prisma/client").$Enums.UtilityBillStatus;
            journalEntryId: string | null;
            periodStart: Date | null;
            rate: number | null;
            providerName: string;
            totalAmount: Decimal;
            billDate: Date;
            dueDate: Date;
            importMethod: import("@prisma/client").$Enums.UtilityImportMethod;
            ocrConfidence: Decimal | null;
            blockchainHash: string | null;
            fileUrl: string | null;
            splitMethod: import("@prisma/client").$Enums.UtilitySplitMethod;
            consumption: number | null;
            periodEnd: Date | null;
            utilityId: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            rawOcrData: import('@prisma/client/runtime/library').JsonValue | null;
        };
        allocations: {
            leaseId: string;
            tenantId: string | null;
            tenantName: string;
            unitNumber: string;
            unitId: string;
            amount: Decimal;
            percentage: Decimal;
        }[];
        totalAmount: Decimal;
    }>;
    /**
     * Post allocations to GL and create invoices.
     */
    postAllocations(utilityBillId: string, allocationsInput: any[]): Promise<{
        utilityBill: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            propertyId: string;
            status: import("@prisma/client").$Enums.UtilityBillStatus;
            journalEntryId: string | null;
            periodStart: Date | null;
            rate: number | null;
            providerName: string;
            totalAmount: Decimal;
            billDate: Date;
            dueDate: Date;
            importMethod: import("@prisma/client").$Enums.UtilityImportMethod;
            ocrConfidence: Decimal | null;
            blockchainHash: string | null;
            fileUrl: string | null;
            splitMethod: import("@prisma/client").$Enums.UtilitySplitMethod;
            consumption: number | null;
            periodEnd: Date | null;
            utilityId: string | null;
            approvedAt: Date | null;
            approvedBy: string | null;
            rawOcrData: import('@prisma/client/runtime/library').JsonValue | null;
        };
        results: {
            invoice: {
                id: string;
                createdAt: Date | null;
                updatedAt: Date | null;
                organizationId: string | null;
                leaseId: string | null;
                status: import("@prisma/client").$Enums.InvoiceStatus | null;
                journalEntryId: string | null;
                type: import("@prisma/client").$Enums.InvoiceType;
                totalAmount: number;
                dueDate: Date;
                utilityBillId: string | null;
                amountPaid: number;
                balance: number;
                taxAmount: Decimal | null;
                taxRate: Decimal | null;
                taxExempt: boolean;
                postingStatus: import("@prisma/client").$Enums.PostingStatus;
                referenceType: string | null;
                referenceId: string | null;
            };
            journalEntry: {
                journalEntryId: string;
            };
            allocation: {
                id: string;
                createdAt: Date;
                leaseId: string | null;
                unitId: string;
                status: import("@prisma/client").$Enums.UtilityAllocationStatus;
                invoiceId: string | null;
                tenantId: string | null;
                blockchainHash: string | null;
                splitMethod: import("@prisma/client").$Enums.UtilitySplitMethod;
                utilityBillId: string;
                amount: Decimal;
                percentage: Decimal | null;
                paidAmount: Decimal;
                aiConfidenceScore: number | null;
                anomalyFlag: boolean;
                allocationExplanation: string | null;
            };
        }[];
        masterGLEntry: {
            journalEntryId: string;
        };
    }>;
};
