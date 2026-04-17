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
var auth_exports = {};
__export(auth_exports, {
  auth: () => auth,
  authOptions: () => authOptions,
  generateAccessToken: () => generateAccessToken,
  generateRefreshToken: () => generateRefreshToken,
  getJwtRefreshSecret: () => getJwtRefreshSecret,
  getJwtSecret: () => getJwtSecret,
  verifyAccessToken: () => verifyAccessToken,
  verifyRefreshToken: () => verifyRefreshToken
});
module.exports = __toCommonJS(auth_exports);
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return secret;
}
function getJwtRefreshSecret() {
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "test") {
      console.warn("JWT_REFRESH_SECRET missing - using fallback (test only)");
      return "test-fallback-secret";
    }
    throw new Error("JWT_REFRESH_SECRET is not defined in environment variables");
  }
  return secret;
}
function generateAccessToken(payload) {
  return import_jsonwebtoken.default.sign(payload, getJwtSecret(), {
    expiresIn: "1h",
    issuer: "rentflow360",
    audience: "rentflow360-web"
  });
}
function generateRefreshToken(payload) {
  return import_jsonwebtoken.default.sign(payload, getJwtRefreshSecret(), {
    expiresIn: "7d",
    issuer: "rentflow360",
    audience: "rentflow360-web"
  });
}
function verifyAccessToken(token) {
  return import_jsonwebtoken.default.verify(token, getJwtSecret(), {
    issuer: "rentflow360",
    audience: "rentflow360-web"
  });
}
function verifyRefreshToken(token) {
  return import_jsonwebtoken.default.verify(token, getJwtRefreshSecret(), {
    issuer: "rentflow360",
    audience: "rentflow360-web"
  });
}
const authOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET,
  providers: [],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.userId = user.id;
        token.role = user.role;
        token.organizationId = user.organizationId;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.userId;
        session.user.role = token.role;
        session.user.organizationId = token.organizationId;
      }
      return session;
    }
  }
};
const auth = async () => {
  return null;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  auth,
  authOptions,
  generateAccessToken,
  generateRefreshToken,
  getJwtRefreshSecret,
  getJwtSecret,
  verifyAccessToken,
  verifyRefreshToken
});
//# sourceMappingURL=auth.js.map
