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
var import_kenya = require("./strategies/kenya");
var import_usa = require("./strategies/usa");
var import_mpesa = require("./strategies/mpesa");
class PaymentFactory {
  /**
   * Returns the correct payment processor based on the Property/Landlord Region.
   */
  static getStrategy(region) {
    switch (region) {
      case "KEN":
        const useMpesaDirect = process.env.USE_MPESA_DIRECT === "true" || !!process.env.MPESA_CONSUMER_KEY;
        if (useMpesaDirect) {
          return new import_mpesa.MpesaPaymentStrategy();
        }
        return new import_kenya.KenyaPaymentStrategy();
      case "USA":
        return new import_usa.UsaPaymentStrategy();
      default:
        return new import_kenya.KenyaPaymentStrategy();
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PaymentFactory
});
