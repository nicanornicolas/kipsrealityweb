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
var utility_reading_service_exports = {};
__export(utility_reading_service_exports, {
  createReading: () => createReading,
  getReadingsForLeaseUtility: () => getReadingsForLeaseUtility
});
module.exports = __toCommonJS(utility_reading_service_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
var import_utility_types = require("./utility-types");
var import_utility_validators = require("./utility-validators");
async function createReading(input) {
  const parsed = (0, import_utility_validators.parseCreateReadingInput)(input);
  if (!parsed.success) {
    return {
      success: false,
      error: import_utility_types.ReadingError.INVALID_INPUT,
      message: parsed.errors.issues[0]?.message
    };
  }
  const { leaseUtilityId, readingValue, readingDate } = parsed.data;
  const leaseUtility = await import_iam.prisma.leaseUtility.findUnique({
    where: { id: leaseUtilityId },
    include: {
      lease: { select: { leaseStatus: true } }
    }
  });
  if (!leaseUtility) {
    return { success: false, error: import_utility_types.ReadingError.LEASE_UTILITY_NOT_FOUND };
  }
  if (leaseUtility.lease.leaseStatus !== import_client.LeaseStatus.ACTIVE) {
    return { success: false, error: import_utility_types.ReadingError.LEASE_NOT_ACTIVE };
  }
  if (!leaseUtility.isTenantResponsible) {
    return { success: false, error: import_utility_types.ReadingError.UTILITY_NOT_TENANT_RESPONSIBLE };
  }
  const previousReading = await import_iam.prisma.utilityReading.findFirst({
    where: { leaseUtilityId },
    orderBy: { readingDate: "desc" },
    select: { readingValue: true }
  });
  const readingCheck = (0, import_utility_validators.validateNewReading)(
    readingValue,
    previousReading?.readingValue ?? null
  );
  if (!readingCheck.valid) {
    return { success: false, error: readingCheck.error };
  }
  const newReading = await import_iam.prisma.$transaction(async (tx) => {
    return tx.utilityReading.create({
      data: {
        leaseUtilityId,
        readingValue,
        readingDate: readingDate ?? /* @__PURE__ */ new Date(),
        amount: null
        // readings are data, not money
      }
    });
  });
  return {
    success: true,
    data: { readingId: newReading.id }
  };
}
async function getReadingsForLeaseUtility(leaseUtilityId) {
  const readings = await import_iam.prisma.utilityReading.findMany({
    where: { leaseUtilityId },
    orderBy: { readingDate: "asc" }
  });
  return {
    readings: readings.map((r) => ({
      id: r.id,
      leaseUtilityId: r.leaseUtilityId,
      readingValue: r.readingValue,
      readingDate: r.readingDate ?? /* @__PURE__ */ new Date(),
      createdAt: r.createdAt ?? /* @__PURE__ */ new Date()
    }))
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createReading,
  getReadingsForLeaseUtility
});
