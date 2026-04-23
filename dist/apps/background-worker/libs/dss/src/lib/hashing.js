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
var hashing_exports = {};
__export(hashing_exports, {
  computeDocumentHash: () => computeDocumentHash,
  computePqHash: () => computePqHash,
  computeZkProofPlaceholder: () => computeZkProofPlaceholder,
  generateZkProof: () => generateZkProof,
  verifyDocumentIntegrity: () => verifyDocumentIntegrity,
  verifyZkProof: () => verifyZkProof
});
module.exports = __toCommonJS(hashing_exports);
var import_crypto = __toESM(require("crypto"));
function computeDocumentHash(fileBuffer) {
  const hashSum = import_crypto.default.createHash("sha256");
  hashSum.update(fileBuffer);
  return hashSum.digest("hex");
}
function verifyDocumentIntegrity(fileBuffer, expectedHash) {
  const calculatedHash = computeDocumentHash(fileBuffer);
  return calculatedHash === expectedHash;
}
function computePqHash(fileBuffer) {
  const hashSum = import_crypto.default.createHash("sha512");
  hashSum.update(fileBuffer);
  return `pq_placeholder_${hashSum.digest("hex").substring(0, 32)}`;
}
function generateZkProof(fileBuffer) {
  console.warn("Zero-knowledge proof generation not yet implemented. Returning placeholder.");
  return {
    proof: `zk_proof_placeholder_${computeDocumentHash(fileBuffer).slice(0, 16)}`,
    publicSignals: [computeDocumentHash(fileBuffer)]
  };
}
function verifyZkProof(proof, publicSignals) {
  console.warn("Zero-knowledge proof verification not yet implemented. Returning true for development.");
  return proof.startsWith("zk_proof_placeholder_");
}
function computeZkProofPlaceholder(fileBuffer) {
  console.warn("computeZkProofPlaceholder is deprecated. Use generateZkProof instead.");
  const { proof } = generateZkProof(fileBuffer);
  return proof;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  computeDocumentHash,
  computePqHash,
  computeZkProofPlaceholder,
  generateZkProof,
  verifyDocumentIntegrity,
  verifyZkProof
});
