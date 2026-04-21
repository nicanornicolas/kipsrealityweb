import { CreateUtilityReadingInput, CreateReadingResult } from './utility-types';
export interface UtilityReadingDTO {
    id: string;
    leaseUtilityId: string;
    readingValue: number;
    readingDate: Date;
    createdAt: Date;
}
export declare function createReading(input: CreateUtilityReadingInput): Promise<CreateReadingResult>;
export declare function getReadingsForLeaseUtility(leaseUtilityId: string): Promise<{
    readings: UtilityReadingDTO[];
}>;
