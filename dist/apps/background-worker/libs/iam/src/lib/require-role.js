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
var require_role_exports = {};
__export(require_role_exports, {
  getCurrentUserRole: () => getCurrentUserRole,
  requireAdminRole: () => requireAdminRole,
  requireRole: () => requireRole,
  requireSystemAdmin: () => requireSystemAdmin
});
module.exports = __toCommonJS(require_role_exports);
var import_server_only = require("server-only");
var import_server = require("next/server");
var import_headers = require("next/headers");
var import_auth = require("./auth");
var Sentry = __toESM(require("@sentry/nextjs"));
async function getTokenPayload() {
  try {
    const cookieStore = await (0, import_headers.cookies)();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return null;
    }
    const payload = (0, import_auth.verifyAccessToken)(token);
    return payload;
  } catch {
    return null;
  }
}
async function requireRole(allowedRoles, request) {
  const payload = await getTokenPayload();
  if (!payload) {
    return import_server.NextResponse.json(
      { error: "Unauthorized - No valid token" },
      { status: 401 }
    );
  }
  Sentry.setUser({ id: payload.userId, email: payload.email });
  Sentry.setTag("auth.role", payload.role);
  Sentry.setTag("org.id", payload.organizationId);
  Sentry.setTag("org.userId", payload.organizationUserId);
  Sentry.setContext("organization", {
    id: payload.organizationId,
    userId: payload.organizationUserId
  });
  Sentry.setContext("auth", {
    role: payload.role,
    userId: payload.userId,
    email: payload.email
  });
  if (request) {
    try {
      const url = new URL(request.url);
      Sentry.setTag("http.method", request.method);
      Sentry.setTag("http.route", url.pathname);
    } catch {
    }
  }
  if (!payload.role || !allowedRoles.includes(payload.role)) {
    return import_server.NextResponse.json(
      { error: `Forbidden - Requires one of: ${allowedRoles.join(", ")}` },
      { status: 403 }
    );
  }
  return null;
}
async function requireSystemAdmin(request) {
  return requireRole(["SYSTEM_ADMIN"], request);
}
async function requireAdminRole(request) {
  return requireRole(["SYSTEM_ADMIN", "PROPERTY_MANAGER"], request);
}
async function getCurrentUserRole() {
  const payload = await getTokenPayload();
  return payload?.role ?? null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getCurrentUserRole,
  requireAdminRole,
  requireRole,
  requireSystemAdmin
});
//# sourceMappingURL=require-role.js.map
