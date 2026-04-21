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
var notary_service_exports = {};
__export(notary_service_exports, {
  notarizeDocument: () => notarizeDocument
});
module.exports = __toCommonJS(notary_service_exports);
var import_iam = require("@rentflow/iam");
var import_client = require("@prisma/client");
var import_crypto = __toESM(require("crypto"));
const MOCK_CHAIN_ID = 8453;
const MOCK_CONTRACT_ADDRESS = "0x1234567890abcdef1234567890abcdef12345678";
async function writeHashToBlockchain(docHash) {
  console.log(`\u{1F517} [Blockchain] Sending transaction for hash: ${docHash}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    txHash: "0x" + import_crypto.default.randomBytes(32).toString("hex"),
    blockNumber: 12345678,
    status: "SUCCESS"
  };
}
async function notarizeDocument(documentId) {
  const doc = await import_iam.prisma.dssDocument.findUnique({
    where: { id: documentId },
    include: { notaryRecord: true }
  });
  if (!doc) throw new Error("Document not found");
  if (doc.status !== import_client.DssDocumentStatus.COMPLETED) {
    throw new Error("Document must be COMPLETED before notarization.");
  }
  if (!doc.finalPdfSha256Hex) {
    throw new Error("Critical: Document is missing the Final PDF Hash.");
  }
  if (doc.notaryRecord) {
    throw new Error(`Document is already notarized (Status: ${doc.notaryRecord.status})`);
  }
  console.log(`\u{1F4DC} [Notary] Starting notarization for Doc ID: ${documentId}`);
  const record = await import_iam.prisma.blockchainNotaryRecord.create({
    data: {
      documentId: doc.id,
      organizationId: doc.organizationId,
      chainId: MOCK_CHAIN_ID,
      contractAddress: MOCK_CONTRACT_ADDRESS,
      notarizedHash: doc.finalPdfSha256Hex,
      status: import_client.BlockchainNotaryStatus.PENDING
    }
  });
  try {
    const txReceipt = await writeHashToBlockchain(doc.finalPdfSha256Hex);
    const updatedRecord = await import_iam.prisma.blockchainNotaryRecord.update({
      where: { id: record.id },
      data: {
        status: import_client.BlockchainNotaryStatus.CONFIRMED,
        txHash: txReceipt.txHash,
        blockNumber: txReceipt.blockNumber,
        confirmedAt: /* @__PURE__ */ new Date()
      }
    });
    console.log(`\u2705 [Notary] Success! Tx: ${updatedRecord.txHash}`);
    return updatedRecord;
  } catch (error) {
    console.error("\u274C [Notary] Blockchain Transaction Failed:", error);
    await import_iam.prisma.blockchainNotaryRecord.update({
      where: { id: record.id },
      data: {
        status: import_client.BlockchainNotaryStatus.FAILED
        // In real app, store error message if you add a field for it
      }
    });
    throw new Error("Blockchain notarization failed. Please retry.");
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  notarizeDocument
});
//# sourceMappingURL=notary-service.js.map
