import { Queue, type DefaultJobOptions } from 'bullmq';
import { connection, defaultJobOptions } from './queue';

const isBuildPhase =
  process.env.NEXT_PHASE === 'phase-production-build' ||
  process.env.npm_lifecycle_event === 'build';
const isTestPhase =
  process.env.NODE_ENV === 'test' ||
  process.env.VITEST === 'true' ||
  Boolean(process.env.VITEST_WORKER_ID);
const shouldDisableQueue = isBuildPhase || isTestPhase;

export const dssPdfQueue = shouldDisableQueue
  ? (null as unknown as Queue)
  : new Queue('dss-pdf-generation', {
      connection,
      defaultJobOptions,
    });
