import { PostBillResult } from './utility-types';
export declare function postUtilityBill(billId: string, organizationId: string): Promise<PostBillResult>;
export declare function isBillPosted(billId: string): Promise<boolean>;
