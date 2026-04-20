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
var get_current_user_exports = {};
__export(get_current_user_exports, {
  getCurrentUser: () => getCurrentUser
});
module.exports = __toCommonJS(get_current_user_exports);
var import_auth = require("./auth");
var import_headers = require("next/headers");
async function getCurrentUser(req) {
  try {
    let token = null;
    if (req) {
      const authHeader = req.headers.get("authorization");
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }
    if (!token) {
      const cookieStore = (0, import_headers.cookies)();
      const tokenCookie = (await cookieStore).get("token");
      token = tokenCookie?.value || null;
    }
    if (!token) {
      return null;
    }
    const payload = (0, import_auth.verifyAccessToken)(token);
    return {
      id: payload.userId,
      email: payload.email,
      role: payload.role,
      organizationId: payload.organizationId,
      organizationUserId: payload.organizationUserId
    };
  } catch {
    return null;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUser
});
//# sourceMappingURL=get-current-user.js.map
