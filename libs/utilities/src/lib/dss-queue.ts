import { Queue, type DefaultJobOptions } from 'bullmq';
import { connection, defaultJobOptions } from './queue';

const isBuildPhase =
  process.env.NEXT_PHASE === 'phase-production-build' ||
  process.env.npm_lifecycle_event === 'build';

export const dssPdfQueue = isBuildPhase
  ? (null as unknown as Queue)
  : new Queue('dss-pdf-generation', {
      connection,
      defaultJobOptions,
    });
