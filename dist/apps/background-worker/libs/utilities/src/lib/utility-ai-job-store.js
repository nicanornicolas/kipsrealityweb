var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utility_ai_job_store_exports = {};
__export(utility_ai_job_store_exports, {
  utilityAiJobStore: () => utilityAiJobStore
});
module.exports = __toCommonJS(utility_ai_job_store_exports);
var import_fs = require("fs");
var import_path = __toESM(require("path"));
const JOBS_DIR = import_path.default.join(process.cwd(), "local_backups", "utility_ai_jobs");
const getStore = () => {
  const globalAny = globalThis;
  if (!globalAny.__utilityAiJobs) {
    globalAny.__utilityAiJobs = /* @__PURE__ */ new Map();
  }
  return globalAny.__utilityAiJobs;
};
const ensureJobsDir = async () => {
  await import_fs.promises.mkdir(JOBS_DIR, { recursive: true });
};
const jobFilePath = (jobId) => import_path.default.join(JOBS_DIR, `${jobId}.json`);
const persistJob = async (job) => {
  await ensureJobsDir();
  await import_fs.promises.writeFile(jobFilePath(job.id), JSON.stringify(job, null, 2), "utf8");
};
const loadJobFromDisk = async (jobId) => {
  try {
    const file = await import_fs.promises.readFile(jobFilePath(jobId), "utf8");
    return JSON.parse(file);
  } catch (error) {
    return null;
  }
};
const utilityAiJobStore = {
  async create(job) {
    const store = getStore();
    store.set(job.id, job);
    await persistJob(job);
    return job;
  },
  async get(jobId) {
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
  async update(jobId, patch) {
    const existing = await this.get(jobId);
    if (!existing) return null;
    const updated = {
      ...existing,
      ...patch
    };
    const store = getStore();
    store.set(jobId, updated);
    await persistJob(updated);
    return updated;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  utilityAiJobStore
});
//# sourceMappingURL=utility-ai-job-store.js.map
