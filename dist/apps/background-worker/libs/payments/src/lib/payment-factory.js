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
var payment_factory_exports = {};
__export(payment_factory_exports, {
  PaymentFactory: () => PaymentFactory
});
module.exports = __toCommonJS(payment_factory_exports);
var import_usa = require("./strategies/usa");
class PaymentFactory {
  /**
   * @deprecated region parameter is no longer used. System is strictly USA-focused.
   */
  static getStrategy(region) {
    return new import_usa.UsaPaymentStrategy();
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PaymentFactory
});
