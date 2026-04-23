const Module = require("module");
const path = require("path");
const fs = require("fs");
const originalResolveFilename = Module._resolveFilename;
const distPath = __dirname;
const manifest = [{ "module": "@rentflow/utilities/client", "exactMatch": "libs/utilities/src/client.js", "pattern": "libs/utilities/src/client.ts" }, { "module": "@rentflow/property/client", "exactMatch": "libs/property/src/client.js", "pattern": "libs/property/src/client.ts" }, { "module": "@rentflow/payments/client", "exactMatch": "libs/payments/src/client.js", "pattern": "libs/payments/src/client.ts" }, { "module": "@rentflow/finance/client", "exactMatch": "libs/finance/src/client.js", "pattern": "libs/finance/src/client.ts" }, { "module": "@rentflow/iam", "exactMatch": "libs/iam/src/index.js", "pattern": "libs/iam/src/index.ts" }, { "module": "@rentflow/property", "exactMatch": "libs/property/src/index.js", "pattern": "libs/property/src/index.ts" }, { "module": "@rentflow/finance", "exactMatch": "libs/finance/src/index.js", "pattern": "libs/finance/src/index.ts" }, { "module": "@rentflow/payments", "exactMatch": "libs/payments/src/index.js", "pattern": "libs/payments/src/index.ts" }, { "module": "@rentflow/lease", "exactMatch": "libs/lease/src/index.js", "pattern": "libs/lease/src/index.ts" }, { "module": "@rentflow/utilities", "exactMatch": "libs/utilities/src/index.js", "pattern": "libs/utilities/src/index.ts" }, { "module": "@rentflow/dss", "exactMatch": "libs/dss/src/index.js", "pattern": "libs/dss/src/index.ts" }, { "module": "@/*", "pattern": "./src/*" }];
Module._resolveFilename = function(request, parent) {
  let found;
  for (const entry of manifest) {
    if (request === entry.module && entry.exactMatch) {
      const entry2 = manifest.find((x) => request === x.module || request.startsWith(x.module + "/"));
      const candidate = path.join(distPath, entry2.exactMatch);
      if (isFile(candidate)) {
        found = candidate;
        break;
      }
    } else {
      const re = new RegExp(entry.module.replace(/\*$/, "(?<rest>.*)"));
      const match = request.match(re);
      if (match?.groups) {
        const candidate = path.join(distPath, entry.pattern.replace("*", ""), match.groups.rest);
        if (isFile(candidate)) {
          found = candidate;
        }
      }
    }
  }
  if (found) {
    const modifiedArguments = [found, ...[].slice.call(arguments, 1)];
    return originalResolveFilename.apply(this, modifiedArguments);
  } else {
    return originalResolveFilename.apply(this, arguments);
  }
};
function isFile(s) {
  try {
    require.resolve(s);
    return true;
  } catch (_e) {
    return false;
  }
}
module.exports = require("./apps/background-worker/src/main.js");
