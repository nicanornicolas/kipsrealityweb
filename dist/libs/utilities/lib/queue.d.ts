import { Queue, DefaultJobOptions } from 'bullmq';
import { default as IORedis } from 'ioredis';
export declare const connection: IORedis;
export declare const defaultJobOptions: DefaultJobOptions;
export declare const webhookQueue: Queue<any, any, string, any, any, string>;
export declare const invoiceQueue: Queue<any, any, string, any, any, string>;
export declare const emailQueue: Queue<any, any, string, any, any, string>;
