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
var workflow_exports = {};
__export(workflow_exports, {
  canUserSignNow: () => canUserSignNow,
  getNextSigner: () => getNextSigner
});
module.exports = __toCommonJS(workflow_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
async function getNextSigner(documentId) {
  const document = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: {
      participants: {
        orderBy: { stepOrder: "asc" }
      }
    }
  });
  if (!document) {
    throw new Error(`Document not found: ${documentId}`);
  }
  if (document.status === import_client.DssDocumentStatus.COMPLETED || document.status === import_client.DssDocumentStatus.VOIDED) {
    return {
      isComplete: true,
      nextStep: null,
      nextRole: null
    };
  }
  const nextParticipant = document.participants.find((p) => !p.hasSigned);
  if (!nextParticipant) {
    return {
      isComplete: true,
      nextStep: null,
      nextRole: null
    };
  }
  return {
    isComplete: false,
    nextStep: nextParticipant.stepOrder,
    nextRole: nextParticipant.role
  };
}
async function canUserSignNow(documentId, userEmail) {
  const result = await getNextSigner(documentId);
  if (result.isComplete) return false;
  const document = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: { participants: true }
  });
  if (!document) return false;
  const participant = document.participants.find((p) => p.email === userEmail);
  if (!participant) return false;
  return result.nextStep === participant.stepOrder;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  canUserSignNow,
  getNextSigner
});
