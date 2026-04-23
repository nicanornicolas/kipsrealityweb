var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var dss_queue_exports = {};
__export(dss_queue_exports, {
  dssPdfQueue: () => dssPdfQueue
});
module.exports = __toCommonJS(dss_queue_exports);
var import_bullmq = require("bullmq");
var import_queue = require("./queue");
const isBuildPhase = process.env.NEXT_PHASE === "phase-production-build" || process.env.npm_lifecycle_event === "build";
const dssPdfQueue = isBuildPhase ? null : new import_bullmq.Queue("dss-pdf-generation", {
  connection: import_queue.connection,
  defaultJobOptions: import_queue.defaultJobOptions
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dssPdfQueue
});
