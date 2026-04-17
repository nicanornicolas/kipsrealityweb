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
var types_exports = {};
__export(types_exports, {
  ROLE_HIERARCHY: () => ROLE_HIERARCHY
});
module.exports = __toCommonJS(types_exports);
const ROLE_HIERARCHY = {
  TENANT: 1,
  // Signs First
  LANDLORD: 2,
  // Signs Second
  PROPERTY_MANAGER: 2,
  // Equivalent to Landlord
  AGENT: 2,
  WITNESS: 3,
  // Signs Last
  NOTARY: 4,
  // Final seal
  CUSTODIAN: 2,
  // Equivalent to Landlord/Property Manager (signs on behalf of someone)
  VENDOR: 0,
  OTHER: 0
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ROLE_HIERARCHY
});
//# sourceMappingURL=types.js.map
