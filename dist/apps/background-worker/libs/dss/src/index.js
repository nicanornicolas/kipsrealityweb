var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
module.exports = __toCommonJS(src_exports);
__reExport(src_exports, require("./lib/dss"), module.exports);
__reExport(src_exports, require("./lib/types"), module.exports);
__reExport(src_exports, require("./lib/hashing"), module.exports);
__reExport(src_exports, require("./lib/workflow"), module.exports);
__reExport(src_exports, require("./lib/document-service"), module.exports);
__reExport(src_exports, require("./lib/notary-service"), module.exports);
__reExport(src_exports, require("./lib/workflow-service"), module.exports);
__reExport(src_exports, require("./lib/pdf-generator"), module.exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ...require("./lib/dss"),
  ...require("./lib/types"),
  ...require("./lib/hashing"),
  ...require("./lib/workflow"),
  ...require("./lib/document-service"),
  ...require("./lib/notary-service"),
  ...require("./lib/workflow-service"),
  ...require("./lib/pdf-generator")
});
//# sourceMappingURL=index.js.map
