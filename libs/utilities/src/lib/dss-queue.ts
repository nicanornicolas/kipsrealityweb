import { Queue, type DefaultJobOptions } from 'bullmq';
import { connection, defaultJobOptions } from './queue';

export const dssPdfQueue = new Queue('dss-pdf-generation', {
  connection,
  defaultJobOptions,
});
