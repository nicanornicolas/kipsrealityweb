import { promises as fs } from "fs";
import path from "path";
import { AllocationMethod, UtilityAllocationPayload } from "./";

export type UtilityAiJobStatus = "PROCESSING_AI" | "PENDING_REVIEW" | "FAILED";

export interface UtilityAiJob {
  id: string;
  billId: string;
  propertyId: string;
  providerName: "KPLC" | "NAIROBI_WATER" | "OTHER";
  method: AllocationMethod;
  totalAmount: number;
  dueDate: string;
  createdAt: string;
  status: UtilityAiJobStatus;
  filePath: string;
  confidenceScore?: number;
  flags?: Array<{ type: "WARNING" | "INFO"; message: string }>;
  payload?: UtilityAllocationPayload;
  error?: string;
}

const JOBS_DIR = path.join(process.cwd(), "local_backups", "utility_ai_jobs");

const getStore = (): Map<string, UtilityAiJob> => {
  const globalAny = globalThis as typeof globalThis & {
    __utilityAiJobs?: Map<string, UtilityAiJob>;
  };

  if (!globalAny.__utilityAiJobs) {
    globalAny.__utilityAiJobs = new Map<string, UtilityAiJob>();
  }

  return globalAny.__utilityAiJobs;
};

const ensureJobsDir = async () => {
  await fs.mkdir(JOBS_DIR, { recursive: true });
};

const jobFilePath = (jobId: string) => path.join(JOBS_DIR, `${jobId}.json`);

const persistJob = async (job: UtilityAiJob) => {
  await ensureJobsDir();
  await fs.writeFile(jobFilePath(job.id), JSON.stringify(job, null, 2), "utf8");
};

const loadJobFromDisk = async (jobId: string): Promise<UtilityAiJob | null> => {
  try {
    const file = await fs.readFile(jobFilePath(jobId), "utf8");
    return JSON.parse(file) as UtilityAiJob;
  } catch (error) {
    return null;
  }
};

export const utilityAiJobStore = {
  async create(job: UtilityAiJob) {
    const store = getStore();
    store.set(job.id, job);
    await persistJob(job);
    return job;
  },

  async get(jobId: string) {
    const store = getStore();
    if (store.has(jobId)) {
      return store.get(jobId) ?? null;
    }

    const fromDisk = await loadJobFromDisk(jobId);
    if (fromDisk) {
      store.set(jobId, fromDisk);
      return fromDisk;
    }

    return null;
  },

  async update(jobId: string, patch: Partial<UtilityAiJob>) {
    const existing = await this.get(jobId);
    if (!existing) return null;

    const updated: UtilityAiJob = {
      ...existing,
      ...patch,
    };

    const store = getStore();
    store.set(jobId, updated);
    await persistJob(updated);
    return updated;
  },
};
