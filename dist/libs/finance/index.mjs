import { prisma as e } from "@rentflow/iam";
//#region \0rolldown/runtime.js
var t = Object.create, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.getPrototypeOf, o = Object.prototype.hasOwnProperty, s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), c = (e, t, a, s) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = i(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !o.call(e, d) && d !== a && n(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(s = r(t, d)) || s.enumerable
	});
	return e;
}, l = /* @__PURE__ */ ((e, r, i) => (i = e == null ? {} : t(a(e)), c(r || !e || !e.__esModule ? n(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)))((/* @__PURE__ */ s(((e, t) => {
	t.exports = {};
})))(), 1), u = l.fileURLToPath(import.meta.url);
globalThis.__dirname = l.dirname(u);
var d = l.createRequire(import.meta.url), f = Object.create, p = Object.defineProperty, m = Object.getOwnPropertyDescriptor, h = Object.getOwnPropertyNames, g = Object.getPrototypeOf, _ = Object.prototype.hasOwnProperty, v = ((e) => typeof d < "u" ? d : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof d < "u" ? d : e)[t] }) : e)(function(e) {
	if (typeof d < "u") return d.apply(this, arguments);
	throw Error("Dynamic require of \"" + e + "\" is not supported");
}), y = (e, t) => () => (e && (t = e(e = 0)), t), b = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), x = (e, t) => {
	for (var n in t) p(e, n, {
		get: t[n],
		enumerable: !0
	});
}, S = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of h(t)) !_.call(e, i) && i !== n && p(e, i, {
		get: () => t[i],
		enumerable: !(r = m(t, i)) || r.enumerable
	});
	return e;
}, C = (e, t, n) => (n = e == null ? {} : f(g(e)), S(t || !e || !e.__esModule ? p(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ee = b((e, t) => {
	t.exports = (e, t = l.argv) => {
		let n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), i = t.indexOf("--");
		return r !== -1 && (i === -1 || r < i);
	};
}), te = b((e, t) => {
	var n = v("node:os"), r = v("node:tty"), i = ee(), { env: a } = l, o;
	i("no-color") || i("no-colors") || i("color=false") || i("color=never") ? o = 0 : (i("color") || i("colors") || i("color=true") || i("color=always")) && (o = 1), "FORCE_COLOR" in a && (o = a.FORCE_COLOR === "true" ? 1 : a.FORCE_COLOR === "false" ? 0 : a.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(a.FORCE_COLOR, 10), 3));
	function s(e) {
		return e === 0 ? !1 : {
			level: e,
			hasBasic: !0,
			has256: e >= 2,
			has16m: e >= 3
		};
	}
	function c(e, t) {
		if (o === 0) return 0;
		if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
		if (i("color=256")) return 2;
		if (e && !t && o === void 0) return 0;
		let r = o || 0;
		if (a.TERM === "dumb") return r;
		if (l.platform === "win32") {
			let e = n.release().split(".");
			return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1;
		}
		if ("CI" in a) return [
			"TRAVIS",
			"CIRCLECI",
			"APPVEYOR",
			"GITLAB_CI",
			"GITHUB_ACTIONS",
			"BUILDKITE"
		].some((e) => e in a) || a.CI_NAME === "codeship" ? 1 : r;
		if ("TEAMCITY_VERSION" in a) return +!!/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(a.TEAMCITY_VERSION);
		if (a.COLORTERM === "truecolor") return 3;
		if ("TERM_PROGRAM" in a) {
			let e = parseInt((a.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
			switch (a.TERM_PROGRAM) {
				case "iTerm.app": return e >= 3 ? 3 : 2;
				case "Apple_Terminal": return 2;
			}
		}
		return /-256(color)?$/i.test(a.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(a.TERM) || "COLORTERM" in a ? 1 : r;
	}
	function u(e) {
		return s(c(e, e && e.isTTY));
	}
	t.exports = {
		supportsColor: u,
		stdout: s(c(!0, r.isatty(1))),
		stderr: s(c(!0, r.isatty(2)))
	};
}), ne = b((e, t) => {
	var n = te(), r = ee();
	function i(e) {
		if (/^\d{3,4}$/.test(e)) {
			let t = /(\d{1,2})(\d{2})/.exec(e) || [];
			return {
				major: 0,
				minor: parseInt(t[1], 10),
				patch: parseInt(t[2], 10)
			};
		}
		let t = (e || "").split(".").map((e) => parseInt(e, 10));
		return {
			major: t[0],
			minor: t[1],
			patch: t[2]
		};
	}
	function a(e) {
		let { CI: t, FORCE_HYPERLINK: a, NETLIFY: o, TEAMCITY_VERSION: s, TERM_PROGRAM: c, TERM_PROGRAM_VERSION: u, VTE_VERSION: d, TERM: f } = l.env;
		if (a) return !(a.length > 0 && parseInt(a, 10) === 0);
		if (r("no-hyperlink") || r("no-hyperlinks") || r("hyperlink=false") || r("hyperlink=never")) return !1;
		if (r("hyperlink=true") || r("hyperlink=always") || o) return !0;
		if (!n.supportsColor(e) || e && !e.isTTY) return !1;
		if ("WT_SESSION" in l.env) return !0;
		if (l.platform === "win32" || t || s) return !1;
		if (c) {
			let e = i(u || "");
			switch (c) {
				case "iTerm.app": return e.major === 3 ? e.minor >= 1 : e.major > 3;
				case "WezTerm": return e.major >= 20200620;
				case "vscode": return e.major > 1 || e.major === 1 && e.minor >= 72;
				case "ghostty": return !0;
			}
		}
		if (d) {
			if (d === "0.50.0") return !1;
			let e = i(d);
			return e.major > 0 || e.minor >= 50;
		}
		switch (f) {
			case "alacritty": return !0;
		}
		return !1;
	}
	t.exports = {
		supportsHyperlink: a,
		stdout: a(l.stdout),
		stderr: a(l.stderr)
	};
}), w = b((e, t) => {
	t.exports = {
		name: "@prisma/internals",
		version: "6.19.3",
		description: "This package is intended for Prisma's internal use",
		main: "dist/index.js",
		types: "dist/index.d.ts",
		repository: {
			type: "git",
			url: "https://github.com/prisma/prisma.git",
			directory: "packages/internals"
		},
		homepage: "https://www.prisma.io",
		author: "Tim Suchanek <suchanek@prisma.io>",
		bugs: "https://github.com/prisma/prisma/issues",
		license: "Apache-2.0",
		scripts: {
			dev: "DEV=true tsx helpers/build.ts",
			build: "tsx helpers/build.ts",
			test: "dotenv -e ../../.db.env -- jest --silent",
			prepublishOnly: "pnpm run build"
		},
		files: [
			"README.md",
			"dist",
			"!**/libquery_engine*",
			"!dist/get-generators/engines/*",
			"scripts"
		],
		devDependencies: {
			"@babel/helper-validator-identifier": "7.25.9",
			"@opentelemetry/api": "1.9.0",
			"@swc/core": "1.11.5",
			"@swc/jest": "0.2.37",
			"@types/babel__helper-validator-identifier": "7.15.2",
			"@types/jest": "29.5.14",
			"@types/node": "18.19.76",
			"@types/resolve": "1.20.6",
			archiver: "6.0.2",
			"checkpoint-client": "1.1.33",
			"cli-truncate": "4.0.0",
			dotenv: "16.5.0",
			empathic: "2.0.0",
			"escape-string-regexp": "5.0.0",
			execa: "8.0.1",
			"fast-glob": "3.3.3",
			"find-up": "7.0.0",
			"fp-ts": "2.16.9",
			"fs-extra": "11.3.0",
			"global-directory": "4.0.0",
			globby: "11.1.0",
			"identifier-regex": "1.0.0",
			"indent-string": "4.0.0",
			"is-windows": "1.0.2",
			"is-wsl": "3.1.0",
			jest: "29.7.0",
			"jest-junit": "16.0.0",
			kleur: "4.1.5",
			"mock-stdin": "1.0.0",
			"new-github-issue-url": "0.2.1",
			"node-fetch": "3.3.2",
			"npm-packlist": "5.1.3",
			open: "7.4.2",
			"p-map": "4.0.0",
			resolve: "1.22.10",
			"string-width": "7.2.0",
			"strip-indent": "4.0.0",
			"temp-dir": "2.0.0",
			tempy: "1.0.1",
			"terminal-link": "4.0.0",
			tmp: "0.2.3",
			"ts-pattern": "5.6.2",
			"ts-toolbelt": "9.6.0",
			typescript: "5.4.5",
			yarn: "1.22.22"
		},
		dependencies: {
			"@prisma/config": "workspace:*",
			"@prisma/debug": "workspace:*",
			"@prisma/dmmf": "workspace:*",
			"@prisma/driver-adapter-utils": "workspace:*",
			"@prisma/engines": "workspace:*",
			"@prisma/fetch-engine": "workspace:*",
			"@prisma/generator": "workspace:*",
			"@prisma/generator-helper": "workspace:*",
			"@prisma/get-platform": "workspace:*",
			"@prisma/prisma-schema-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
			"@prisma/schema-engine-wasm": "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
			"@prisma/schema-files-loader": "workspace:*",
			arg: "5.0.2",
			prompts: "2.4.2"
		},
		peerDependencies: { typescript: ">=5.1.0" },
		peerDependenciesMeta: { typescript: { optional: !0 } },
		sideEffects: !1
	};
}), re = b((e, t) => {
	t.exports = {
		name: "@prisma/engines-version",
		version: "7.1.1-3.c2990dca591cba766e3b7ef5d9e8a84796e47ab7",
		main: "index.js",
		types: "index.d.ts",
		license: "Apache-2.0",
		author: "Tim Suchanek <suchanek@prisma.io>",
		prisma: { enginesVersion: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7" },
		repository: {
			type: "git",
			url: "https://github.com/prisma/engines-wrapper.git",
			directory: "packages/engines-version"
		},
		devDependencies: {
			"@types/node": "18.19.76",
			typescript: "4.9.5"
		},
		files: ["index.js", "index.d.ts"],
		scripts: { build: "tsc -d" }
	};
}), ie = b((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.enginesVersion = void 0, e.enginesVersion = re().prisma.enginesVersion;
}), ae = b((e, t) => {
	t.exports = (e) => {
		let t = e.match(/^[ \t]*(?=\S)/gm);
		return t ? t.reduce((e, t) => Math.min(e, t.length), Infinity) : 0;
	};
}), T = b((e, t) => {
	t.exports = (e, t = 1, n) => {
		if (n = {
			indent: " ",
			includeEmptyLines: !1,
			...n
		}, typeof e != "string") throw TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
		if (typeof t != "number") throw TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
		if (typeof n.indent != "string") throw TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);
		if (t === 0) return e;
		let r = n.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
		return e.replace(r, n.indent.repeat(t));
	};
}), E = b((e, t) => {
	t.exports = {
		name: "dotenv",
		version: "16.5.0",
		description: "Loads environment variables from .env file",
		main: "lib/main.js",
		types: "lib/main.d.ts",
		exports: {
			".": {
				types: "./lib/main.d.ts",
				require: "./lib/main.js",
				default: "./lib/main.js"
			},
			"./config": "./config.js",
			"./config.js": "./config.js",
			"./lib/env-options": "./lib/env-options.js",
			"./lib/env-options.js": "./lib/env-options.js",
			"./lib/cli-options": "./lib/cli-options.js",
			"./lib/cli-options.js": "./lib/cli-options.js",
			"./package.json": "./package.json"
		},
		scripts: {
			"dts-check": "tsc --project tests/types/tsconfig.json",
			lint: "standard",
			pretest: "npm run lint && npm run dts-check",
			test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000",
			"test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov",
			prerelease: "npm test",
			release: "standard-version"
		},
		repository: {
			type: "git",
			url: "git://github.com/motdotla/dotenv.git"
		},
		homepage: "https://github.com/motdotla/dotenv#readme",
		funding: "https://dotenvx.com",
		keywords: [
			"dotenv",
			"env",
			".env",
			"environment",
			"variables",
			"config",
			"settings"
		],
		readmeFilename: "README.md",
		license: "BSD-2-Clause",
		devDependencies: {
			"@types/node": "^18.11.3",
			decache: "^4.6.2",
			sinon: "^14.0.1",
			standard: "^17.0.0",
			"standard-version": "^9.5.0",
			tap: "^19.2.0",
			typescript: "^4.8.4"
		},
		engines: { node: ">=12" },
		browser: { fs: !1 }
	};
}), oe = b((e, t) => {
	var n = v("node:fs"), r = v("node:path"), i = v("node:os"), a = v("node:crypto"), o = E().version, s = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
	function c(e) {
		let t = {}, n = e.toString();
		n = n.replace(/\r\n?/gm, "\n");
		let r;
		for (; (r = s.exec(n)) != null;) {
			let e = r[1], n = r[2] || "";
			n = n.trim();
			let i = n[0];
			n = n.replace(/^(['"`])([\s\S]*)\1$/gm, "$2"), i === "\"" && (n = n.replace(/\\n/g, "\n"), n = n.replace(/\\r/g, "\r")), t[e] = n;
		}
		return t;
	}
	function u(e) {
		let t = h(e), n = C.configDotenv({ path: t });
		if (!n.parsed) {
			let e = /* @__PURE__ */ Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);
			throw e.code = "MISSING_DATA", e;
		}
		let r = p(e).split(","), i = r.length, a;
		for (let e = 0; e < i; e++) try {
			let t = m(n, r[e].trim());
			a = C.decrypt(t.ciphertext, t.key);
			break;
		} catch (t) {
			if (e + 1 >= i) throw t;
		}
		return C.parse(a);
	}
	function d(e) {
		console.log(`[dotenv@${o}][WARN] ${e}`);
	}
	function f(e) {
		console.log(`[dotenv@${o}][DEBUG] ${e}`);
	}
	function p(e) {
		return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : l.env.DOTENV_KEY && l.env.DOTENV_KEY.length > 0 ? l.env.DOTENV_KEY : "";
	}
	function m(e, t) {
		let n;
		try {
			n = new URL(t);
		} catch (e) {
			if (e.code === "ERR_INVALID_URL") {
				let e = /* @__PURE__ */ Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
				throw e.code = "INVALID_DOTENV_KEY", e;
			}
			throw e;
		}
		let r = n.password;
		if (!r) {
			let e = /* @__PURE__ */ Error("INVALID_DOTENV_KEY: Missing key part");
			throw e.code = "INVALID_DOTENV_KEY", e;
		}
		let i = n.searchParams.get("environment");
		if (!i) {
			let e = /* @__PURE__ */ Error("INVALID_DOTENV_KEY: Missing environment part");
			throw e.code = "INVALID_DOTENV_KEY", e;
		}
		let a = `DOTENV_VAULT_${i.toUpperCase()}`, o = e.parsed[a];
		if (!o) {
			let e = /* @__PURE__ */ Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${a} in your .env.vault file.`);
			throw e.code = "NOT_FOUND_DOTENV_ENVIRONMENT", e;
		}
		return {
			ciphertext: o,
			key: r
		};
	}
	function h(e) {
		let t = null;
		if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let r of e.path) n.existsSync(r) && (t = r.endsWith(".vault") ? r : `${r}.vault`);
		else t = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
		else t = r.resolve(l.cwd(), ".env.vault");
		return n.existsSync(t) ? t : null;
	}
	function g(e) {
		return e[0] === "~" ? r.join(i.homedir(), e.slice(1)) : e;
	}
	function _(e) {
		e && e.debug && f("Loading env from encrypted .env.vault");
		let t = C._parseVault(e), n = l.env;
		return e && e.processEnv != null && (n = e.processEnv), C.populate(n, t, e), { parsed: t };
	}
	function y(e) {
		let t = r.resolve(l.cwd(), ".env"), i = "utf8", a = !!(e && e.debug);
		e && e.encoding ? i = e.encoding : a && f("No encoding is specified. UTF-8 is used by default");
		let o = [t];
		if (e && e.path) if (!Array.isArray(e.path)) o = [g(e.path)];
		else {
			o = [];
			for (let t of e.path) o.push(g(t));
		}
		let s, c = {};
		for (let t of o) try {
			let r = C.parse(n.readFileSync(t, { encoding: i }));
			C.populate(c, r, e);
		} catch (e) {
			a && f(`Failed to load ${t} ${e.message}`), s = e;
		}
		let u = l.env;
		return e && e.processEnv != null && (u = e.processEnv), C.populate(u, c, e), s ? {
			parsed: c,
			error: s
		} : { parsed: c };
	}
	function b(e) {
		if (p(e).length === 0) return C.configDotenv(e);
		let t = h(e);
		return t ? C._configVault(e) : (d(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`), C.configDotenv(e));
	}
	function x(e, t) {
		let n = Buffer.from(t.slice(-64), "hex"), r = Buffer.from(e, "base64"), i = r.subarray(0, 12), o = r.subarray(-16);
		r = r.subarray(12, -16);
		try {
			let e = a.createDecipheriv("aes-256-gcm", n, i);
			return e.setAuthTag(o), `${e.update(r)}${e.final()}`;
		} catch (e) {
			let t = e instanceof RangeError, n = e.message === "Invalid key length", r = e.message === "Unsupported state or unable to authenticate data";
			if (t || n) {
				let e = /* @__PURE__ */ Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
				throw e.code = "INVALID_DOTENV_KEY", e;
			} else if (r) {
				let e = /* @__PURE__ */ Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
				throw e.code = "DECRYPTION_FAILED", e;
			} else throw e;
		}
	}
	function S(e, t, n = {}) {
		let r = !!(n && n.debug), i = !!(n && n.override);
		if (typeof t != "object") {
			let e = /* @__PURE__ */ Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
			throw e.code = "OBJECT_REQUIRED", e;
		}
		for (let n of Object.keys(t)) Object.prototype.hasOwnProperty.call(e, n) ? (i === !0 && (e[n] = t[n]), r && f(i === !0 ? `"${n}" is already defined and WAS overwritten` : `"${n}" is already defined and was NOT overwritten`)) : e[n] = t[n];
	}
	var C = {
		configDotenv: y,
		_configVault: _,
		_parseVault: u,
		config: b,
		decrypt: x,
		parse: c,
		populate: S
	};
	t.exports.configDotenv = C.configDotenv, t.exports._configVault = C._configVault, t.exports._parseVault = C._parseVault, t.exports.config = C.config, t.exports.decrypt = C.decrypt, t.exports.parse = C.parse, t.exports.populate = C.populate, t.exports = C;
}), se = b((e, t) => {
	t.exports = (e = {}) => {
		let t;
		if (e.repoUrl) t = e.repoUrl;
		else if (e.user && e.repo) t = `https://github.com/${e.user}/${e.repo}`;
		else throw Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
		let n = new URL(`${t}/issues/new`);
		for (let t of [
			"body",
			"title",
			"labels",
			"template",
			"milestone",
			"assignee",
			"projects"
		]) {
			let r = e[t];
			if (r !== void 0) {
				if (t === "labels" || t === "projects") {
					if (!Array.isArray(r)) throw TypeError(`The \`${t}\` option should be an array`);
					r = r.join(",");
				}
				n.searchParams.set(t, r);
			}
		}
		return n.toString();
	}, t.exports.default = t.exports;
}), ce = b((e, t) => {
	t.exports = function() {
		function e(e, t, n, r, i) {
			return e < t || n < t ? e > n ? n + 1 : e + 1 : r === i ? t : t + 1;
		}
		return function(t, n) {
			if (t === n) return 0;
			if (t.length > n.length) {
				var r = t;
				t = n, n = r;
			}
			for (var i = t.length, a = n.length; i > 0 && t.charCodeAt(i - 1) === n.charCodeAt(a - 1);) i--, a--;
			for (var o = 0; o < i && t.charCodeAt(o) === n.charCodeAt(o);) o++;
			if (i -= o, a -= o, i === 0 || a < 3) return a;
			var s = 0, c, l, u, d, f, p, m, h, g, _, v, y, b = [];
			for (c = 0; c < i; c++) b.push(c + 1), b.push(t.charCodeAt(o + c));
			for (var x = b.length - 1; s < a - 3;) for (g = n.charCodeAt(o + (l = s)), _ = n.charCodeAt(o + (u = s + 1)), v = n.charCodeAt(o + (d = s + 2)), y = n.charCodeAt(o + (f = s + 3)), p = s += 4, c = 0; c < x; c += 2) m = b[c], h = b[c + 1], l = e(m, l, u, g, h), u = e(l, u, d, _, h), d = e(u, d, f, v, h), p = e(d, f, p, y, h), b[c] = p, f = d, d = u, u = l, l = m;
			for (; s < a;) for (g = n.charCodeAt(o + (l = s)), p = ++s, c = 0; c < x; c += 2) m = b[c], b[c] = p = e(m, l, p, g, b[c + 1]), l = m;
			return p;
		};
	}();
}), le = y(() => {}), ue = y(() => {});
x({}, {
	defineExtension: () => de,
	getExtensionContext: () => fe
});
function de(e) {
	return typeof e == "function" ? e : (t) => t.$extends(e);
}
function fe(e) {
	return e;
}
x({}, { validator: () => pe });
function pe(...e) {
	return (e) => e;
}
var me = {};
x(me, {
	$: () => ye,
	bgBlack: () => Me,
	bgBlue: () => Pe,
	bgCyan: () => Ie,
	bgGreen: () => I,
	bgMagenta: () => Fe,
	bgRed: () => F,
	bgWhite: () => Le,
	bgYellow: () => Ne,
	black: () => Ee,
	blue: () => ke,
	bold: () => xe,
	cyan: () => N,
	dim: () => k,
	gray: () => Ae,
	green: () => De,
	grey: () => je,
	hidden: () => we,
	inverse: () => Ce,
	italic: () => A,
	magenta: () => M,
	red: () => j,
	reset: () => be,
	strikethrough: () => Te,
	underline: () => Se,
	white: () => P,
	yellow: () => Oe
});
var he, ge, _e, D, ve = !0;
typeof l < "u" && ({FORCE_COLOR: he, NODE_DISABLE_COLORS: ge, NO_COLOR: _e, TERM: D} = l.env || {}, ve = l.stdout && l.stdout.isTTY);
var ye = { enabled: !ge && _e == null && D !== "dumb" && (he != null && he !== "0" || ve) };
function O(e, t) {
	let n = RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
	return function(e) {
		return !ye.enabled || e == null ? e : r + (~("" + e).indexOf(i) ? e.replace(n, i + r) : e) + i;
	};
}
var be = O(0, 0), xe = O(1, 22), k = O(2, 22), A = O(3, 23), Se = O(4, 24), Ce = O(7, 27), we = O(8, 28), Te = O(9, 29), Ee = O(30, 39), j = O(31, 39), De = O(32, 39), Oe = O(33, 39), ke = O(34, 39), M = O(35, 39), N = O(36, 39), P = O(37, 39), Ae = O(90, 39), je = O(90, 39), Me = O(40, 49), F = O(41, 49), I = O(42, 49), Ne = O(43, 49), Pe = O(44, 49), Fe = O(45, 49), Ie = O(46, 49), Le = O(47, 49), Re = 100, ze = [
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"red"
], Be = [], Ve = Date.now(), He = 0, Ue = typeof l < "u" ? l.env : {};
globalThis.DEBUG ??= Ue.DEBUG ?? "", globalThis.DEBUG_COLORS ??= Ue.DEBUG_COLORS ? Ue.DEBUG_COLORS === "true" : !0;
var We = {
	enable(e) {
		typeof e == "string" && (globalThis.DEBUG = e);
	},
	disable() {
		let e = globalThis.DEBUG;
		return globalThis.DEBUG = "", e;
	},
	enabled(e) {
		let t = globalThis.DEBUG.split(",").map((e) => e.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), n = t.some((t) => t === "" || t[0] === "-" ? !1 : e.match(RegExp(t.split("*").join(".*") + "$"))), r = t.some((t) => t === "" || t[0] !== "-" ? !1 : e.match(RegExp(t.slice(1).split("*").join(".*") + "$")));
		return n && !r;
	},
	log: (...e) => {
		let [t, n, ...r] = e;
		(console.warn ?? console.log)(`${t} ${n}`, ...r);
	},
	formatters: {}
};
function Ge(e) {
	let t = {
		color: ze[He++ % ze.length],
		enabled: We.enabled(e),
		namespace: e,
		log: We.log,
		extend: () => {}
	};
	return new Proxy((...e) => {
		let { enabled: n, namespace: r, color: i, log: a } = t;
		if (e.length !== 0 && Be.push([r, ...e]), Be.length > Re && Be.shift(), We.enabled(r) || n) {
			let t = e.map((e) => typeof e == "string" ? e : qe(e)), n = `+${Date.now() - Ve}ms`;
			Ve = Date.now(), globalThis.DEBUG_COLORS ? a(me[i](xe(r)), ...t, me[i](n)) : a(r, ...t, n);
		}
	}, {
		get: (e, n) => t[n],
		set: (e, n, r) => t[n] = r
	});
}
var Ke = new Proxy(Ge, {
	get: (e, t) => We[t],
	set: (e, t, n) => We[t] = n
});
function qe(e, t = 2) {
	let n = /* @__PURE__ */ new Set();
	return JSON.stringify(e, (e, t) => {
		if (typeof t == "object" && t) {
			if (n.has(t)) return "[Circular *]";
			n.add(t);
		} else if (typeof t == "bigint") return t.toString();
		return t;
	}, t);
}
var Je = Ke, Ye = /* @__PURE__ */ "darwin,darwin-arm64,debian-openssl-1.0.x,debian-openssl-1.1.x,debian-openssl-3.0.x,rhel-openssl-1.0.x,rhel-openssl-1.1.x,rhel-openssl-3.0.x,linux-arm64-openssl-1.1.x,linux-arm64-openssl-1.0.x,linux-arm64-openssl-3.0.x,linux-arm-openssl-1.1.x,linux-arm-openssl-1.0.x,linux-arm-openssl-3.0.x,linux-musl,linux-musl-openssl-3.0.x,linux-musl-arm64-openssl-1.1.x,linux-musl-arm64-openssl-3.0.x,linux-nixos,linux-static-x64,linux-static-arm64,windows,freebsd11,freebsd12,freebsd13,freebsd14,freebsd15,openbsd,netbsd,arm".split(","), Xe = Symbol.for("@ts-pattern/matcher"), Ze = Symbol.for("@ts-pattern/isVariadic"), Qe = "@ts-pattern/anonymous-select-key", $e = (e) => !!(e && typeof e == "object"), et = (e) => e && !!e[Xe], tt = (e, t, n) => {
	if (et(e)) {
		let { matched: r, selections: i } = e[Xe]().match(t);
		return r && i && Object.keys(i).forEach((e) => n(e, i[e])), r;
	}
	if ($e(e)) {
		if (!$e(t)) return !1;
		if (Array.isArray(e)) {
			if (!Array.isArray(t)) return !1;
			let r = [], i = [], a = [];
			for (let t of e.keys()) {
				let n = e[t];
				et(n) && n[Ze] ? a.push(n) : a.length ? i.push(n) : r.push(n);
			}
			if (a.length) {
				if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
				if (t.length < r.length + i.length) return !1;
				let e = t.slice(0, r.length), o = i.length === 0 ? [] : t.slice(-i.length), s = t.slice(r.length, i.length === 0 ? Infinity : -i.length);
				return r.every((t, r) => tt(t, e[r], n)) && i.every((e, t) => tt(e, o[t], n)) && (a.length === 0 || tt(a[0], s, n));
			}
			return e.length === t.length && e.every((e, r) => tt(e, t[r], n));
		}
		return Reflect.ownKeys(e).every((r) => {
			let i = e[r];
			return (r in t || et(a = i) && a[Xe]().matcherType === "optional") && tt(i, t[r], n);
			var a;
		});
	}
	return Object.is(t, e);
}, nt = (e) => {
	var t;
	return $e(e) ? et(e) ? (t = e[Xe]()).getSelectionKeys?.call(t) ?? [] : rt(Array.isArray(e) ? e : Object.values(e), nt) : [];
}, rt = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function it(e) {
	return Object.assign(e, {
		optional: () => at(e),
		and: (t) => L(e, t),
		or: (t) => ot(e, t),
		select: (t) => t === void 0 ? st(e) : st(t, e)
	});
}
function at(e) {
	return it({ [Xe]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return t === void 0 ? (nt(e).forEach((e) => r(e, void 0)), {
				matched: !0,
				selections: n
			}) : {
				matched: tt(e, t, r),
				selections: n
			};
		},
		getSelectionKeys: () => nt(e),
		matcherType: "optional"
	}) });
}
function L(...e) {
	return it({ [Xe]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return {
				matched: e.every((e) => tt(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => rt(e, nt),
		matcherType: "and"
	}) });
}
function ot(...e) {
	return it({ [Xe]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return rt(e, nt).forEach((e) => r(e, void 0)), {
				matched: e.some((e) => tt(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => rt(e, nt),
		matcherType: "or"
	}) });
}
function R(e) {
	return { [Xe]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function st(...e) {
	let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
	return it({ [Xe]: () => ({
		match: (e) => {
			let r = { [t ?? Qe]: e };
			return {
				matched: n === void 0 || tt(n, e, (e, t) => {
					r[e] = t;
				}),
				selections: r
			};
		},
		getSelectionKeys: () => [t ?? Qe].concat(n === void 0 ? [] : nt(n))
	}) });
}
function ct(e) {
	return typeof e == "number";
}
function lt(e) {
	return typeof e == "string";
}
function ut(e) {
	return typeof e == "bigint";
}
it(R(function(e) {
	return !0;
}));
var dt = (e) => Object.assign(it(e), {
	startsWith: (t) => {
		return dt(L(e, (n = t, R((e) => lt(e) && e.startsWith(n)))));
		var n;
	},
	endsWith: (t) => {
		return dt(L(e, (n = t, R((e) => lt(e) && e.endsWith(n)))));
		var n;
	},
	minLength: (t) => dt(L(e, ((e) => R((t) => lt(t) && t.length >= e))(t))),
	length: (t) => dt(L(e, ((e) => R((t) => lt(t) && t.length === e))(t))),
	maxLength: (t) => dt(L(e, ((e) => R((t) => lt(t) && t.length <= e))(t))),
	includes: (t) => {
		return dt(L(e, (n = t, R((e) => lt(e) && e.includes(n)))));
		var n;
	},
	regex: (t) => {
		return dt(L(e, (n = t, R((e) => lt(e) && !!e.match(n)))));
		var n;
	}
});
dt(R(lt));
var ft = (e) => Object.assign(it(e), {
	between: (t, n) => ft(L(e, ((e, t) => R((n) => ct(n) && e <= n && t >= n))(t, n))),
	lt: (t) => ft(L(e, ((e) => R((t) => ct(t) && t < e))(t))),
	gt: (t) => ft(L(e, ((e) => R((t) => ct(t) && t > e))(t))),
	lte: (t) => ft(L(e, ((e) => R((t) => ct(t) && t <= e))(t))),
	gte: (t) => ft(L(e, ((e) => R((t) => ct(t) && t >= e))(t))),
	int: () => ft(L(e, R((e) => ct(e) && Number.isInteger(e)))),
	finite: () => ft(L(e, R((e) => ct(e) && Number.isFinite(e)))),
	positive: () => ft(L(e, R((e) => ct(e) && e > 0))),
	negative: () => ft(L(e, R((e) => ct(e) && e < 0)))
});
ft(R(ct));
var pt = (e) => Object.assign(it(e), {
	between: (t, n) => pt(L(e, ((e, t) => R((n) => ut(n) && e <= n && t >= n))(t, n))),
	lt: (t) => pt(L(e, ((e) => R((t) => ut(t) && t < e))(t))),
	gt: (t) => pt(L(e, ((e) => R((t) => ut(t) && t > e))(t))),
	lte: (t) => pt(L(e, ((e) => R((t) => ut(t) && t <= e))(t))),
	gte: (t) => pt(L(e, ((e) => R((t) => ut(t) && t >= e))(t))),
	positive: () => pt(L(e, R((e) => ut(e) && e > 0))),
	negative: () => pt(L(e, R((e) => ut(e) && e < 0)))
});
pt(R(ut)), it(R(function(e) {
	return typeof e == "boolean";
})), it(R(function(e) {
	return typeof e == "symbol";
})), it(R(function(e) {
	return e == null;
})), it(R(function(e) {
	return e != null;
})), Oe("prisma:warn"), (0, l.promisify)(l.default.exec), Je("prisma:get-platform");
var mt = {};
x(mt, {
	beep: () => Xt,
	clearScreen: () => Kt,
	clearTerminal: () => qt,
	cursorBackward: () => Ot,
	cursorDown: () => Et,
	cursorForward: () => Dt,
	cursorGetPosition: () => Mt,
	cursorHide: () => Ft,
	cursorLeft: () => kt,
	cursorMove: () => wt,
	cursorNextLine: () => Nt,
	cursorPrevLine: () => Pt,
	cursorRestorePosition: () => jt,
	cursorSavePosition: () => At,
	cursorShow: () => It,
	cursorTo: () => Ct,
	cursorUp: () => Tt,
	enterAlternativeScreen: () => Jt,
	eraseDown: () => Vt,
	eraseEndLine: () => Rt,
	eraseLine: () => Bt,
	eraseLines: () => Lt,
	eraseScreen: () => Ut,
	eraseStartLine: () => zt,
	eraseUp: () => Ht,
	exitAlternativeScreen: () => Yt,
	iTerm: () => $t,
	image: () => Qt,
	link: () => Zt,
	scrollDown: () => Gt,
	scrollUp: () => Wt
});
var ht = globalThis.window?.document !== void 0;
globalThis.process?.versions?.node, globalThis.process?.versions?.bun, globalThis.Deno?.version?.deno, globalThis.process?.versions?.electron, globalThis.navigator?.userAgent?.includes("jsdom"), typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope, typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope, typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
var gt = globalThis.navigator?.userAgentData?.platform;
gt === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform, gt === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform, gt === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform, gt === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform), gt === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform;
var z = "\x1B[", _t = "\x1B]", vt = "\x07", yt = ";", bt = !ht && l.default.env.TERM_PROGRAM === "Apple_Terminal", xt = !ht && l.default.platform === "win32", St = ht ? () => {
	throw Error("`process.cwd()` only works in Node.js, not the browser.");
} : l.default.cwd, Ct = (e, t) => {
	if (typeof e != "number") throw TypeError("The `x` argument is required");
	return typeof t == "number" ? z + (t + 1) + yt + (e + 1) + "H" : z + (e + 1) + "G";
}, wt = (e, t) => {
	if (typeof e != "number") throw TypeError("The `x` argument is required");
	let n = "";
	return e < 0 ? n += z + -e + "D" : e > 0 && (n += z + e + "C"), t < 0 ? n += z + -t + "A" : t > 0 && (n += z + t + "B"), n;
}, Tt = (e = 1) => z + e + "A", Et = (e = 1) => z + e + "B", Dt = (e = 1) => z + e + "C", Ot = (e = 1) => z + e + "D", kt = z + "G", At = bt ? "\x1B7" : z + "s", jt = bt ? "\x1B8" : z + "u", Mt = z + "6n", Nt = z + "E", Pt = z + "F", Ft = z + "?25l", It = z + "?25h", Lt = (e) => {
	let t = "";
	for (let n = 0; n < e; n++) t += Bt + (n < e - 1 ? Tt() : "");
	return e && (t += kt), t;
}, Rt = z + "K", zt = z + "1K", Bt = z + "2K", Vt = z + "J", Ht = z + "1J", Ut = z + "2J", Wt = z + "S", Gt = z + "T", Kt = "\x1Bc", qt = xt ? `${Ut}${z}0f` : `${Ut}${z}3J${z}H`, Jt = z + "?1049h", Yt = z + "?1049l", Xt = vt, Zt = (e, t) => [
	_t,
	"8",
	yt,
	yt,
	t,
	vt,
	e,
	_t,
	"8",
	yt,
	yt,
	vt
].join(""), Qt = (e, t = {}) => {
	let n = `${_t}1337;File=inline=1`;
	return t.width && (n += `;width=${t.width}`), t.height && (n += `;height=${t.height}`), t.preserveAspectRatio === !1 && (n += ";preserveAspectRatio=0"), n + ":" + Buffer.from(e).toString("base64") + vt;
}, $t = {
	setCwd: (e = St()) => `${_t}50;CurrentDir=${e}${vt}`,
	annotation(e, t = {}) {
		let n = `${_t}1337;`, r = t.x !== void 0, i = t.y !== void 0;
		if ((r || i) && !(r && i && t.length !== void 0)) throw Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
		return e = e.replaceAll("|", ""), n += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? n += (r ? [
			e,
			t.length,
			t.x,
			t.y
		] : [t.length, e]).join("|") : n += e, n + vt;
	}
}, en = C(ne(), 1);
function tn(e, t, { target: n = "stdout", ...r } = {}) {
	return en.default[n] ? mt.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
}
tn.isSupported = en.default.stdout, tn.stderr = (e, t, n = {}) => tn(e, t, {
	target: "stderr",
	...n
}), tn.stderr.isSupported = en.default.stderr;
var nn = w().version;
Ke("driver-adapter-utils"), C(ie()), C(ie()), Ke("prisma:engines"), l.default.join(__dirname, "../query-engine-darwin"), l.default.join(__dirname, "../query-engine-darwin-arm64"), l.default.join(__dirname, "../query-engine-debian-openssl-1.0.x"), l.default.join(__dirname, "../query-engine-debian-openssl-1.1.x"), l.default.join(__dirname, "../query-engine-debian-openssl-3.0.x"), l.default.join(__dirname, "../query-engine-linux-static-x64"), l.default.join(__dirname, "../query-engine-linux-static-arm64"), l.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x"), l.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x"), l.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x"), l.default.join(__dirname, "../libquery_engine-darwin.dylib.node"), l.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node"), l.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node"), l.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node"), l.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-linux-musl.so.node"), l.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node"), l.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node"), l.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node"), l.default.join(__dirname, "../query_engine-windows.dll.node"), Je("chmodPlusX"), C(ae(), 1), C(T()), x({}, {
	error: () => ln,
	info: () => cn,
	log: () => on,
	query: () => un,
	should: () => an,
	tags: () => rn,
	warn: () => sn
});
var rn = {
	error: j("prisma:error"),
	warn: Oe("prisma:warn"),
	info: N("prisma:info"),
	query: ke("prisma:query")
}, an = { warn: () => !l.env.PRISMA_DISABLE_WARNINGS };
function on(...e) {
	console.log(...e);
}
function sn(e, ...t) {
	an.warn() && console.warn(`${rn.warn} ${e}`, ...t);
}
function cn(e, ...t) {
	console.info(`${rn.info} ${e}`, ...t);
}
function ln(e, ...t) {
	console.error(`${rn.error} ${e}`, ...t);
}
function un(e, ...t) {
	console.log(`${rn.query} ${e}`, ...t);
}
function dn({ onlyFirst: e = !1 } = {}) {
	let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
	return new RegExp(t, e ? void 0 : "g");
}
dn(), C(oe()), Je("prisma:tryLoadEnv");
function fn(e, t) {
	if (e.length === 0) return;
	let n = e[0];
	for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
	return n;
}
function B(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
B(class e extends Error {
	clientVersion;
	errorCode;
	retryable;
	constructor(t, n, r) {
		super(t), this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = r, Error.captureStackTrace(e);
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientInitializationError";
	}
}, "PrismaClientInitializationError"), B(class extends Error {
	code;
	meta;
	clientVersion;
	batchRequestIdx;
	constructor(e, { code: t, clientVersion: n, meta: r, batchRequestIdx: i }) {
		super(e), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = r, Object.defineProperty(this, "batchRequestIdx", {
			value: i,
			enumerable: !1,
			writable: !0
		});
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientKnownRequestError";
	}
}, "PrismaClientKnownRequestError"), B(class extends Error {
	clientVersion;
	constructor(e, t) {
		super(e), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientRustPanicError";
	}
}, "PrismaClientRustPanicError"), B(class extends Error {
	clientVersion;
	batchRequestIdx;
	constructor(e, { clientVersion: t, batchRequestIdx: n }) {
		super(e), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", {
			value: n,
			writable: !0,
			enumerable: !1
		});
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientUnknownRequestError";
	}
}, "PrismaClientUnknownRequestError"), B(class extends Error {
	name = "PrismaClientValidationError";
	clientVersion;
	constructor(e, { clientVersion: t }) {
		super(e), this.clientVersion = t;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientValidationError";
	}
}, "PrismaClientValidationError");
function pn(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function mn(e) {
	return e.toString() !== "Invalid Date";
}
var hn = 9e15, gn = 1e9, _n = "0123456789abcdef", vn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", yn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", bn = {
	precision: 20,
	rounding: 4,
	modulo: 1,
	toExpNeg: -7,
	toExpPos: 21,
	minE: -hn,
	maxE: hn,
	crypto: !1
}, xn, Sn, V = !0, Cn = "[DecimalError] ", wn = Cn + "Invalid argument: ", Tn = Cn + "Precision limit exceeded", En = Cn + "crypto unavailable", Dn = "[object Decimal]", H = Math.floor, U = Math.pow, On = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, kn = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, An = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, jn = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mn = 1e7, W = 7, Nn = 9007199254740991, Pn = vn.length - 1, Fn = yn.length - 1, G = { toStringTag: Dn };
G.absoluteValue = G.abs = function() {
	var e = new this.constructor(this);
	return e.s < 0 && (e.s = 1), J(e);
}, G.ceil = function() {
	return J(new this.constructor(this), this.e + 1, 2);
}, G.clampedTo = G.clamp = function(e, t) {
	var n, r = this, i = r.constructor;
	if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
	if (e.gt(t)) throw Error(wn + t);
	return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
}, G.comparedTo = G.cmp = function(e) {
	var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
	if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
	if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
	if (c !== l) return c;
	if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
	for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
	return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
}, G.cosine = G.cos = function() {
	var e, t, n = this, r = n.constructor;
	return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + W, r.rounding = 1, n = zn(r, rr(r, n)), r.precision = e, r.rounding = t, J(Sn == 2 || Sn == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
}, G.cubeRoot = G.cbrt = function() {
	var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
	if (!u.isFinite() || u.isZero()) return new d(u);
	for (V = !1, a = u.s * U(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = K(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = U(n, 1 / 3), e = H((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = q(l.plus(u).times(s), l.plus(c), o + 2, 1), K(s.d).slice(0, o) === (n = K(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
		if (!i && (J(s, e + 1, 0), s.times(s).times(s).eq(u))) {
			r = s;
			break;
		}
		o += 4, i = 1;
	} else {
		(!+n || !+n.slice(1) && n.charAt(0) == "5") && (J(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
		break;
	}
	return V = !0, J(r, e, d.rounding, t);
}, G.decimalPlaces = G.dp = function() {
	var e, t = this.d, n = NaN;
	if (t) {
		if (e = t.length - 1, n = (e - H(this.e / W)) * W, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
		n < 0 && (n = 0);
	}
	return n;
}, G.dividedBy = G.div = function(e) {
	return q(this, new this.constructor(e));
}, G.dividedToIntegerBy = G.divToInt = function(e) {
	var t = this, n = t.constructor;
	return J(q(t, new n(e), 0, 1, 1), n.precision, n.rounding);
}, G.equals = G.eq = function(e) {
	return this.cmp(e) === 0;
}, G.floor = function() {
	return J(new this.constructor(this), this.e + 1, 3);
}, G.greaterThan = G.gt = function(e) {
	return this.cmp(e) > 0;
}, G.greaterThanOrEqualTo = G.gte = function(e) {
	var t = this.cmp(e);
	return t == 1 || t === 0;
}, G.hyperbolicCosine = G.cosh = function() {
	var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
	if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
	if (a.isZero()) return s;
	n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / nr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = tr(o, 1, a.times(t), new o(1), !0);
	for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
	return J(a, o.precision = n, o.rounding = r, !0);
}, G.hyperbolicSine = G.sinh = function() {
	var e, t, n, r, i = this, a = i.constructor;
	if (!i.isFinite() || i.isZero()) return new a(i);
	if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = tr(a, 2, i, i, !0);
	else {
		e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / nr(5, e)), i = tr(a, 2, i, i, !0);
		for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
	}
	return a.precision = t, a.rounding = n, J(i, t, n, !0);
}, G.hyperbolicTangent = G.tanh = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, q(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
}, G.inverseCosine = G.acos = function() {
	var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
	return n === -1 ? e.isZero() ? Un(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? Un(t, r, i) : new t(0) : new t(NaN);
}, G.inverseHyperbolicCosine = G.acosh = function() {
	var e, t, n = this, r = n.constructor;
	return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, V = !1, n = n.times(n).minus(1).sqrt().plus(n), V = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
}, G.inverseHyperbolicSine = G.asinh = function() {
	var e, t, n = this, r = n.constructor;
	return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, V = !1, n = n.times(n).plus(1).sqrt().plus(n), V = !0, r.precision = e, r.rounding = t, n.ln());
}, G.inverseHyperbolicTangent = G.atanh = function() {
	var e, t, n, r, i = this, a = i.constructor;
	return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? J(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = q(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
}, G.inverseSine = G.asin = function() {
	var e, t, n, r, i = this, a = i.constructor;
	return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = Un(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
}, G.inverseTangent = G.atan = function() {
	var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
	if (l.isFinite()) {
		if (l.isZero()) return new u(l);
		if (l.abs().eq(1) && d + 4 <= Fn) return o = Un(u, d + 4, f).times(.25), o.s = l.s, o;
	} else {
		if (!l.s) return new u(NaN);
		if (d + 4 <= Fn) return o = Un(u, d + 4, f).times(.5), o.s = l.s, o;
	}
	for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / W + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
	for (V = !1, t = Math.ceil(s / W), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
	return n && (o = o.times(2 << n - 1)), V = !0, J(o, u.precision = d, u.rounding = f, !0);
}, G.isFinite = function() {
	return !!this.d;
}, G.isInteger = G.isInt = function() {
	return !!this.d && H(this.e / W) > this.d.length - 2;
}, G.isNaN = function() {
	return !this.s;
}, G.isNegative = G.isNeg = function() {
	return this.s < 0;
}, G.isPositive = G.isPos = function() {
	return this.s > 0;
}, G.isZero = function() {
	return !!this.d && this.d[0] === 0;
}, G.lessThan = G.lt = function(e) {
	return this.cmp(e) < 0;
}, G.lessThanOrEqualTo = G.lte = function(e) {
	return this.cmp(e) < 1;
}, G.logarithm = G.log = function(e) {
	var t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding, p = 5;
	if (e == null) e = new u(10), t = !0;
	else {
		if (e = new u(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new u(NaN);
		t = e.eq(10);
	}
	if (n = l.d, l.s < 0 || !n || !n[0] || l.eq(1)) return new u(n && !n[0] ? -Infinity : l.s == 1 ? n ? 0 : Infinity : NaN);
	if (t) if (n.length > 1) a = !0;
	else {
		for (i = n[0]; i % 10 == 0;) i /= 10;
		a = i !== 1;
	}
	if (V = !1, s = d + p, o = Xn(l, s), r = t ? Hn(u, s + 10) : Xn(e, s), c = q(o, r, s, 1), Ln(c.d, i = d, f)) do
		if (s += 10, o = Xn(l, s), r = t ? Hn(u, s + 10) : Xn(e, s), c = q(o, r, s, 1), !a) {
			+K(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = J(c, d + 1, 0));
			break;
		}
	while (Ln(c.d, i += 10, f));
	return V = !0, J(c, d, f);
}, G.minus = G.sub = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
	if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
	if (p.s != e.s) return e.s = -e.s, p.plus(e);
	if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
		if (f[0]) e.s = -e.s;
		else if (l[0]) e = new m(p);
		else return new m(c === 3 ? -0 : 0);
		return V ? J(e, s, c) : e;
	}
	if (n = H(e.e / W), u = H(p.e / W), l = l.slice(), a = u - n, a) {
		for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / W), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
		t.reverse();
	} else {
		for (r = l.length, o = f.length, d = r < o, d && (o = r), r = 0; r < o; r++) if (l[r] != f[r]) {
			d = l[r] < f[r];
			break;
		}
		a = 0;
	}
	for (d && (t = l, l = f, f = t, e.s = -e.s), o = l.length, r = f.length - o; r > 0; --r) l[o++] = 0;
	for (r = f.length; r > a;) {
		if (l[--r] < f[r]) {
			for (i = r; i && l[--i] === 0;) l[i] = Mn - 1;
			--l[i], l[r] += Mn;
		}
		l[r] -= f[r];
	}
	for (; l[--o] === 0;) l.pop();
	for (; l[0] === 0; l.shift()) --n;
	return l[0] ? (e.d = l, e.e = Vn(l, n), V ? J(e, s, c) : e) : new m(c === 3 ? -0 : 0);
}, G.modulo = G.mod = function(e) {
	var t, n = this, r = n.constructor;
	return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? J(new r(n), r.precision, r.rounding) : (V = !1, r.modulo == 9 ? (t = q(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(n, e, 0, r.modulo, 1), t = t.times(e), V = !0, n.minus(t));
}, G.naturalExponential = G.exp = function() {
	return Yn(this);
}, G.naturalLogarithm = G.ln = function() {
	return Xn(this);
}, G.negated = G.neg = function() {
	var e = new this.constructor(this);
	return e.s = -e.s, J(e);
}, G.plus = G.add = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
	if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
	if (d.s != e.s) return e.s = -e.s, d.minus(e);
	if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), V ? J(e, s, c) : e;
	if (a = H(d.e / W), r = H(e.e / W), l = l.slice(), i = a - r, i) {
		for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / W), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
		n.reverse();
	}
	for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / Mn | 0, l[i] %= Mn;
	for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
	return e.d = l, e.e = Vn(l, r), V ? J(e, s, c) : e;
}, G.precision = G.sd = function(e) {
	var t, n = this;
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(wn + e);
	return n.d ? (t = Wn(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
}, G.round = function() {
	var e = this, t = e.constructor;
	return J(new t(e), e.e + 1, t.rounding);
}, G.sine = G.sin = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + W, r.rounding = 1, n = er(r, rr(r, n)), r.precision = e, r.rounding = t, J(Sn > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
}, G.squareRoot = G.sqrt = function() {
	var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
	if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
	for (V = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = K(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = H((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(q(o, a, n + 2, 1)).times(.5), K(a.d).slice(0, n) === (t = K(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
		if (!i && (J(a, c + 1, 0), a.times(a).eq(o))) {
			r = a;
			break;
		}
		n += 4, i = 1;
	} else {
		(!+t || !+t.slice(1) && t.charAt(0) == "5") && (J(r, c + 1, 1), e = !r.times(r).eq(o));
		break;
	}
	return V = !0, J(r, c, u.rounding, e);
}, G.tangent = G.tan = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = q(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, J(Sn == 2 || Sn == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
}, G.times = G.mul = function(e) {
	var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
	if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
	for (n = H(u.e / W) + H(e.e / W), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
	for (r = l; --r >= 0;) {
		for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % Mn | 0, t = s / Mn | 0;
		a[i] = (a[i] + t) % Mn | 0;
	}
	for (; !a[--o];) a.pop();
	return t ? ++n : a.shift(), e.d = a, e.e = Vn(a, n), V ? J(e, d.precision, d.rounding) : e;
}, G.toBinary = function(e, t) {
	return ir(this, 2, e, t);
}, G.toDecimalPlaces = G.toDP = function(e, t) {
	var n = this, r = n.constructor;
	return n = new r(n), e === void 0 ? n : (In(e, 0, gn), t === void 0 ? t = r.rounding : In(t, 0, 8), J(n, e + n.e + 1, t));
}, G.toExponential = function(e, t) {
	var n, r = this, i = r.constructor;
	return e === void 0 ? n = Bn(r, !0) : (In(e, 0, gn), t === void 0 ? t = i.rounding : In(t, 0, 8), r = J(new i(r), e + 1, t), n = Bn(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
}, G.toFixed = function(e, t) {
	var n, r, i = this, a = i.constructor;
	return e === void 0 ? n = Bn(i) : (In(e, 0, gn), t === void 0 ? t = a.rounding : In(t, 0, 8), r = J(new a(i), e + i.e + 1, t), n = Bn(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
}, G.toFraction = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
	if (!m) return new h(p);
	if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Wn(m) - p.e - 1, o = a % W, t.d[0] = U(10, o < 0 ? W + o : o), e == null) e = a > 0 ? t : l;
	else {
		if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(wn + s);
		e = s.gt(t) ? a > 0 ? t : l : s;
	}
	for (V = !1, s = new h(K(m)), u = h.precision, h.precision = a = m.length * W * 2; d = q(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
	return i = q(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = q(l, r, a, 1).minus(p).abs().cmp(q(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, V = !0, f;
}, G.toHexadecimal = G.toHex = function(e, t) {
	return ir(this, 16, e, t);
}, G.toNearest = function(e, t) {
	var n = this, r = n.constructor;
	if (n = new r(n), e == null) {
		if (!n.d) return n;
		e = new r(1), t = r.rounding;
	} else {
		if (e = new r(e), t === void 0 ? t = r.rounding : In(t, 0, 8), !n.d) return e.s ? n : e;
		if (!e.d) return e.s &&= n.s, e;
	}
	return e.d[0] ? (V = !1, n = q(n, e, 0, t, 1).times(e), V = !0, J(n)) : (e.s = n.s, n = e), n;
}, G.toNumber = function() {
	return +this;
}, G.toOctal = function(e, t) {
	return ir(this, 8, e, t);
}, G.toPower = G.pow = function(e) {
	var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
	if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(U(+s, l));
	if (s = new c(s), s.eq(1)) return s;
	if (r = c.precision, a = c.rounding, e.eq(1)) return J(s, r, a);
	if (t = H(e.e / W), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= Nn) return i = Kn(c, s, n, r), e.s < 0 ? new c(1).div(i) : J(i, r, a);
	if (o = s.s, o < 0) {
		if (t < e.d.length - 1) return new c(NaN);
		if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
	}
	return n = U(+s, l), t = n == 0 || !isFinite(n) ? H(l * (Math.log("0." + K(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (V = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Yn(e.times(Xn(s, r + n)), r), i.d && (i = J(i, r + 5, 1), Ln(i.d, r, a) && (t = r + 10, i = J(Yn(e.times(Xn(s, t + n)), t), t + 5, 1), +K(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = J(i, r + 1, 0)))), i.s = o, V = !0, c.rounding = a, J(i, r, a));
}, G.toPrecision = function(e, t) {
	var n, r = this, i = r.constructor;
	return e === void 0 ? n = Bn(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (In(e, 1, gn), t === void 0 ? t = i.rounding : In(t, 0, 8), r = J(new i(r), e, t), n = Bn(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
}, G.toSignificantDigits = G.toSD = function(e, t) {
	var n = this, r = n.constructor;
	return e === void 0 ? (e = r.precision, t = r.rounding) : (In(e, 1, gn), t === void 0 ? t = r.rounding : In(t, 0, 8)), J(new r(n), e, t);
}, G.toString = function() {
	var e = this, t = e.constructor, n = Bn(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() && !e.isZero() ? "-" + n : n;
}, G.truncated = G.trunc = function() {
	return J(new this.constructor(this), this.e + 1, 1);
}, G.valueOf = G.toJSON = function() {
	var e = this, t = e.constructor, n = Bn(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() ? "-" + n : n;
};
function K(e) {
	var t, n, r, i = e.length - 1, a = "", o = e[0];
	if (i > 0) {
		for (a += o, t = 1; t < i; t++) r = e[t] + "", n = W - r.length, n && (a += Gn(n)), a += r;
		o = e[t], r = o + "", n = W - r.length, n && (a += Gn(n));
	} else if (o === 0) return "0";
	for (; o % 10 == 0;) o /= 10;
	return a + o;
}
function In(e, t, n) {
	if (e !== ~~e || e < t || e > n) throw Error(wn + e);
}
function Ln(e, t, n, r) {
	var i, a, o, s;
	for (a = e[0]; a >= 10; a /= 10) --t;
	return --t < 0 ? (t += W, i = 0) : (i = Math.ceil((t + 1) / W), t %= W), a = U(10, W - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == U(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == U(10, t - 3) - 1, o;
}
function Rn(e, t, n) {
	for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
		for (a = i.length; a--;) i[a] *= t;
		for (i[0] += _n.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
	}
	return i.reverse();
}
function zn(e, t) {
	var n, r, i;
	if (t.isZero()) return t;
	r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / nr(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = tr(e, 1, t.times(i), new e(1));
	for (var a = n; a--;) {
		var o = t.times(t);
		t = o.times(o).minus(o).times(8).plus(1);
	}
	return e.precision -= n, t;
}
var q = function() {
	function e(e, t, n) {
		var r, i = 0, a = e.length;
		for (e = e.slice(); a--;) r = e[a] * t + i, e[a] = r % n | 0, i = r / n | 0;
		return i && e.unshift(i), e;
	}
	function t(e, t, n, r) {
		var i, a;
		if (n != r) a = n > r ? 1 : -1;
		else for (i = a = 0; i < n; i++) if (e[i] != t[i]) {
			a = e[i] > t[i] ? 1 : -1;
			break;
		}
		return a;
	}
	function n(e, t, n, r) {
		for (var i = 0; n--;) e[n] -= i, i = +(e[n] < t[n]), e[n] = i * r + e[n] - t[n];
		for (; !e[0] && e.length > 1;) e.shift();
	}
	return function(r, i, a, o, s, c) {
		var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, ee, te, ne, w, re, ie = r.constructor, ae = r.s == i.s ? 1 : -1, T = r.d, E = i.d;
		if (!T || !T[0] || !E || !E[0]) return new ie(!r.s || !i.s || (T ? E && T[0] == E[0] : !E) ? NaN : T && T[0] == 0 || !E ? ae * 0 : ae / 0);
		for (c ? (p = 1, u = r.e - i.e) : (c = Mn, p = W, u = H(r.e / p) - H(i.e / p)), w = E.length, te = T.length, _ = new ie(ae), v = _.d = [], d = 0; E[d] == (T[d] || 0); d++);
		if (E[d] > (T[d] || 0) && u--, a == null ? (S = a = ie.precision, o = ie.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
		else {
			if (S = S / p + 2 | 0, d = 0, w == 1) {
				for (f = 0, E = E[0], S++; (d < te || f) && S--; d++) C = f * c + (T[d] || 0), v[d] = C / E | 0, f = C % E | 0;
				m = f || d < te;
			} else {
				for (f = c / (E[0] + 1) | 0, f > 1 && (E = e(E, f, c), T = e(T, f, c), w = E.length, te = T.length), ee = w, y = T.slice(0, w), b = y.length; b < w;) y[b++] = 0;
				re = E.slice(), re.unshift(0), ne = E[0], E[1] >= c / 2 && ++ne;
				do
					f = 0, l = t(E, y, w, b), l < 0 ? (x = y[0], w != b && (x = x * c + (y[1] || 0)), f = x / ne | 0, f > 1 ? (f >= c && (f = c - 1), h = e(E, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, w < g ? re : E, g, c))) : (f == 0 && (l = f = 1), h = E.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(E, y, w, b), l < 1 && (f++, n(y, w < b ? re : E, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = T[ee] || 0 : (y = [T[ee]], b = 1);
				while ((ee++ < te || y[0] !== void 0) && S--);
				m = y[0] !== void 0;
			}
			v[0] || v.shift();
		}
		if (p == 1) _.e = u, xn = m;
		else {
			for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
			_.e = d + u * p - 1, J(_, s ? a + _.e + 1 : a, o, m);
		}
		return _;
	};
}();
function J(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor;
	e: if (t != null) {
		if (d = e.d, !d) return e;
		for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
		if (a = t - i, a < 0) a += W, o = t, u = d[f = 0], c = u / U(10, i - o - 1) % 10 | 0;
		else if (f = Math.ceil((a + 1) / W), s = d.length, f >= s) if (r) {
			for (; s++ <= f;) d.push(0);
			u = c = 0, i = 1, a %= W, o = a - W + 1;
		} else break e;
		else {
			for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
			a %= W, o = a - W + i, c = o < 0 ? 0 : u / U(10, i - o - 1) % 10 | 0;
		}
		if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % U(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / U(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = U(10, (W - t % W) % W), e.e = -t || 0) : d[0] = e.e = 0, e;
		if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = U(10, W - a), d[f] = o > 0 ? (u / U(10, i - o) % U(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
			for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
			for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
			a != s && (e.e++, d[0] == Mn && (d[0] = 1));
			break;
		} else {
			if (d[f] += s, d[f] != Mn) break;
			d[f--] = 0, s = 1;
		}
		for (a = d.length; d[--a] === 0;) d.pop();
	}
	return V && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Bn(e, t, n) {
	if (!e.isFinite()) return Zn(e);
	var r, i = e.e, a = K(e.d), o = a.length;
	return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Gn(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Gn(-i - 1) + a, n && (r = n - o) > 0 && (a += Gn(r))) : i >= o ? (a += Gn(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Gn(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Gn(r))), a;
}
function Vn(e, t) {
	var n = e[0];
	for (t *= W; n >= 10; n /= 10) t++;
	return t;
}
function Hn(e, t, n) {
	if (t > Pn) throw V = !0, n && (e.precision = n), Error(Tn);
	return J(new e(vn), t, 1, !0);
}
function Un(e, t, n) {
	if (t > Fn) throw Error(Tn);
	return J(new e(yn), t, n, !0);
}
function Wn(e) {
	var t = e.length - 1, n = t * W + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) n--;
		for (t = e[0]; t >= 10; t /= 10) n++;
	}
	return n;
}
function Gn(e) {
	for (var t = ""; e--;) t += "0";
	return t;
}
function Kn(e, t, n, r) {
	var i, a = new e(1), o = Math.ceil(r / W + 4);
	for (V = !1;;) {
		if (n % 2 && (a = a.times(t), ar(a.d, o) && (i = !0)), n = H(n / 2), n === 0) {
			n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
			break;
		}
		t = t.times(t), ar(t.d, o);
	}
	return V = !0, a;
}
function qn(e) {
	return e.d[e.d.length - 1] & 1;
}
function Jn(e, t, n) {
	for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
		if (i = new e(t[o]), !i.s) {
			a = i;
			break;
		}
		r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
	}
	return a;
}
function Yn(e, t) {
	var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
	if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
	for (t == null ? (V = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
	for (r = Math.log(U(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
		if (a = J(a.times(e), c, 1), n = n.times(++u), s = o.plus(q(a, n, c, 1)), K(s.d).slice(0, c) === K(o.d).slice(0, c)) {
			for (i = d; i--;) o = J(o.times(o), c, 1);
			if (t == null) if (l < 3 && Ln(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
			else return J(o, f.precision = m, p, V = !0);
			else return f.precision = m, o;
		}
		o = s;
	}
}
function Xn(e, t) {
	var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
	if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
	if (t == null ? (V = !1, u = y) : u = t, _.precision = u += m, n = K(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
		for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = K(h.d), r = n.charAt(0), p++;
		a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
	} else return l = Hn(_, u + 2, y).times(a + ""), h = Xn(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? J(h, y, v, V = !0) : h;
	for (d = h, c = o = h = q(h.minus(1), h.plus(1), u, 1), f = J(h.times(h), u, 1), i = 3;;) {
		if (o = J(o.times(f), u, 1), l = c.plus(q(o, new _(i), u, 1)), K(l.d).slice(0, u) === K(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Hn(_, u + 2, y).times(a + ""))), c = q(c, new _(p), u, 1), t == null) if (Ln(c.d, u - m, v, s)) _.precision = u += m, l = o = h = q(d.minus(1), d.plus(1), u, 1), f = J(h.times(h), u, 1), i = s = 1;
		else return J(c, _.precision = y, v, V = !0);
		else return _.precision = y, c;
		c = l, i += 2;
	}
}
function Zn(e) {
	return String(e.s * e.s / 0);
}
function Qn(e, t) {
	var n, r, i;
	for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
	for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
	if (t = t.slice(r, i), t) {
		if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % W, n < 0 && (r += W), r < i) {
			for (r && e.d.push(+t.slice(0, r)), i -= W; r < i;) e.d.push(+t.slice(r, r += W));
			t = t.slice(r), r = W - t.length;
		} else r -= i;
		for (; r--;) t += "0";
		e.d.push(+t), V && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function $n(e, t) {
	var n, r, i, a, o, s, c, l, u;
	if (t.indexOf("_") > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, "$1"), jn.test(t)) return Qn(e, t);
	} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	if (kn.test(t)) n = 16, t = t.toLowerCase();
	else if (On.test(t)) n = 2;
	else if (An.test(t)) n = 8;
	else throw Error(wn + t);
	for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Kn(r, new r(n), a, a * 2)), l = Rn(t, n, Mn), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
	return a < 0 ? new r(e.s * 0) : (e.e = Vn(l, u), e.d = l, V = !1, o && (e = q(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? U(2, c) : qr.pow(2, c))), V = !0, e);
}
function er(e, t) {
	var n, r = t.d.length;
	if (r < 3) return t.isZero() ? t : tr(e, 2, t, t);
	n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / nr(5, n)), t = tr(e, 2, t, t);
	for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
	return t;
}
function tr(e, t, n, r, i) {
	var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / W);
	for (V = !1, c = n.times(n), s = new e(r);;) {
		if (o = q(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = q(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
			for (a = d; o.d[a] === s.d[a] && a--;);
			if (a == -1) break;
		}
		a = s, s = r, r = o, o = a, l++;
	}
	return V = !0, o.d.length = d + 1, o;
}
function nr(e, t) {
	for (var n = e; --t;) n *= e;
	return n;
}
function rr(e, t) {
	var n, r = t.s < 0, i = Un(e, e.precision, 1), a = i.times(.5);
	if (t = t.abs(), t.lte(a)) return Sn = r ? 4 : 1, t;
	if (n = t.divToInt(i), n.isZero()) Sn = r ? 3 : 2;
	else {
		if (t = t.minus(n.times(i)), t.lte(a)) return Sn = qn(n) ? r ? 2 : 3 : r ? 4 : 1, t;
		Sn = qn(n) ? r ? 1 : 4 : r ? 3 : 2;
	}
	return t.minus(i).abs();
}
function ir(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
	if (m ? (In(n, 1, gn), r === void 0 ? r = p.rounding : In(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = Zn(e);
	else {
		for (u = Bn(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = Rn(Bn(f), 10, i), f.e = f.d.length), d = Rn(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
		if (!d[0]) u = m ? "0p+0" : "0";
		else {
			if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = q(e, f, n, r, 0, i), d = e.d, a = e.e, l = xn), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
			for (c = d.length; !d[c - 1]; --c);
			for (o = 0, u = ""; o < c; o++) u += _n.charAt(d[o]);
			if (m) {
				if (c > 1) if (t == 16 || t == 8) {
					for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
					for (d = Rn(u, i, t), c = d.length; !d[c - 1]; --c);
					for (o = 1, u = "1."; o < c; o++) u += _n.charAt(d[o]);
				} else u = u.charAt(0) + "." + u.slice(1);
				u = u + (a < 0 ? "p" : "p+") + a;
			} else if (a < 0) {
				for (; ++a;) u = "0" + u;
				u = "0." + u;
			} else if (++a > c) for (a -= c; a--;) u += "0";
			else a < c && (u = u.slice(0, a) + "." + u.slice(a));
		}
		u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
	}
	return e.s < 0 ? "-" + u : u;
}
function ar(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function or(e) {
	return new this(e).abs();
}
function sr(e) {
	return new this(e).acos();
}
function cr(e) {
	return new this(e).acosh();
}
function lr(e, t) {
	return new this(e).plus(t);
}
function ur(e) {
	return new this(e).asin();
}
function dr(e) {
	return new this(e).asinh();
}
function fr(e) {
	return new this(e).atan();
}
function pr(e) {
	return new this(e).atanh();
}
function mr(e, t) {
	e = new this(e), t = new this(t);
	var n, r = this.precision, i = this.rounding, a = r + 4;
	return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Un(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Un(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Un(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(q(e, t, a, 1)), t = Un(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(q(e, t, a, 1)), n;
}
function hr(e) {
	return new this(e).cbrt();
}
function gr(e) {
	return J(e = new this(e), e.e + 1, 2);
}
function _r(e, t, n) {
	return new this(e).clamp(t, n);
}
function vr(e) {
	if (!e || typeof e != "object") throw Error(Cn + "Object expected");
	var t, n, r, i = e.defaults === !0, a = [
		"precision",
		1,
		gn,
		"rounding",
		0,
		8,
		"toExpNeg",
		-hn,
		0,
		"toExpPos",
		0,
		hn,
		"maxE",
		0,
		hn,
		"minE",
		-hn,
		0,
		"modulo",
		0,
		9
	];
	for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = bn[n]), (r = e[n]) !== void 0) if (H(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
	else throw Error(wn + n + ": " + r);
	if (n = "crypto", i && (this[n] = bn[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
	else throw Error(En);
	else this[n] = !1;
	else throw Error(wn + n + ": " + r);
	return this;
}
function yr(e) {
	return new this(e).cos();
}
function br(e) {
	return new this(e).cosh();
}
function xr(e) {
	var t, n, r;
	function i(e) {
		var t, n, r, a = this;
		if (!(a instanceof i)) return new i(e);
		if (a.constructor = i, Er(e)) {
			a.s = e.s, V ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
			return;
		}
		if (r = typeof e, r === "number") {
			if (e === 0) {
				a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
				return;
			}
			if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
				for (t = 0, n = e; n >= 10; n /= 10) t++;
				V ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
				return;
			}
			if (e * 0 != 0) {
				e || (a.s = NaN), a.e = NaN, a.d = null;
				return;
			}
			return Qn(a, e.toString());
		}
		if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), jn.test(e) ? Qn(a, e) : $n(a, e);
		if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Qn(a, e.toString());
		throw Error(wn + e);
	}
	if (i.prototype = G, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = vr, i.clone = xr, i.isDecimal = Er, i.abs = or, i.acos = sr, i.acosh = cr, i.add = lr, i.asin = ur, i.asinh = dr, i.atan = fr, i.atanh = pr, i.atan2 = mr, i.cbrt = hr, i.ceil = gr, i.clamp = _r, i.cos = yr, i.cosh = br, i.div = Sr, i.exp = Cr, i.floor = wr, i.hypot = Tr, i.ln = Dr, i.log = Or, i.log10 = Ar, i.log2 = kr, i.max = jr, i.min = Mr, i.mod = Nr, i.mul = Pr, i.pow = Fr, i.random = Ir, i.round = Lr, i.sign = Rr, i.sin = zr, i.sinh = Br, i.sqrt = Vr, i.sub = Hr, i.sum = Ur, i.tan = Wr, i.tanh = Gr, i.trunc = Kr, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
		"precision",
		"rounding",
		"toExpNeg",
		"toExpPos",
		"maxE",
		"minE",
		"modulo",
		"crypto"
	], t = 0; t < r.length;) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
	return i.config(e), i;
}
function Sr(e, t) {
	return new this(e).div(t);
}
function Cr(e) {
	return new this(e).exp();
}
function wr(e) {
	return J(e = new this(e), e.e + 1, 3);
}
function Tr() {
	var e, t, n = new this(0);
	for (V = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
	else {
		if (t.s) return V = !0, new this(Infinity);
		n = t;
	}
	return V = !0, n.sqrt();
}
function Er(e) {
	return e instanceof qr || e && e.toStringTag === Dn || !1;
}
function Dr(e) {
	return new this(e).ln();
}
function Or(e, t) {
	return new this(e).log(t);
}
function kr(e) {
	return new this(e).log(2);
}
function Ar(e) {
	return new this(e).log(10);
}
function jr() {
	return Jn(this, arguments, -1);
}
function Mr() {
	return Jn(this, arguments, 1);
}
function Nr(e, t) {
	return new this(e).mod(t);
}
function Pr(e, t) {
	return new this(e).mul(t);
}
function Fr(e, t) {
	return new this(e).pow(t);
}
function Ir(e) {
	var t, n, r, i, a = 0, o = new this(1), s = [];
	if (e === void 0 ? e = this.precision : In(e, 1, gn), r = Math.ceil(e / W), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
	else if (crypto.randomBytes) {
		for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
		a = r / 4;
	} else throw Error(En);
	else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
	for (r = s[--a], e %= W, r && e && (i = U(10, W - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
	if (a < 0) n = 0, s = [0];
	else {
		for (n = -1; s[0] === 0; n -= W) s.shift();
		for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
		r < W && (n -= W - r);
	}
	return o.e = n, o.d = s, o;
}
function Lr(e) {
	return J(e = new this(e), e.e + 1, this.rounding);
}
function Rr(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function zr(e) {
	return new this(e).sin();
}
function Br(e) {
	return new this(e).sinh();
}
function Vr(e) {
	return new this(e).sqrt();
}
function Hr(e, t) {
	return new this(e).sub(t);
}
function Ur() {
	var e = 0, t = arguments, n = new this(t[e]);
	for (V = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
	return V = !0, J(n, this.precision, this.rounding);
}
function Wr(e) {
	return new this(e).tan();
}
function Gr(e) {
	return new this(e).tanh();
}
function Kr(e) {
	return J(e = new this(e), e.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString, G[Symbol.toStringTag] = "Decimal";
var qr = G.constructor = xr(bn);
vn = new qr(vn), yn = new qr(yn);
var Y = qr;
function Jr(e) {
	return qr.isDecimal(e) ? !0 : typeof e == "object" && !!e && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
x({}, {
	ModelAction: () => Xr,
	datamodelEnumToSchemaEnum: () => Yr
});
function Yr(e) {
	return {
		name: e.name,
		values: e.values.map((e) => e.name)
	};
}
var Xr = ((e) => (e.findUnique = "findUnique", e.findUniqueOrThrow = "findUniqueOrThrow", e.findFirst = "findFirst", e.findFirstOrThrow = "findFirstOrThrow", e.findMany = "findMany", e.create = "create", e.createMany = "createMany", e.createManyAndReturn = "createManyAndReturn", e.update = "update", e.updateMany = "updateMany", e.updateManyAndReturn = "updateManyAndReturn", e.upsert = "upsert", e.delete = "delete", e.deleteMany = "deleteMany", e.groupBy = "groupBy", e.count = "count", e.aggregate = "aggregate", e.findRaw = "findRaw", e.aggregateRaw = "aggregateRaw", e))(Xr || {});
C(T());
var Zr = {
	keyword: N,
	entity: N,
	value: (e) => xe(ke(e)),
	punctuation: ke,
	directive: N,
	function: N,
	variable: (e) => xe(ke(e)),
	string: (e) => xe(De(e)),
	boolean: Oe,
	number: N,
	comment: Ae
}, Qr = (e) => e, $r = {}, ei = 0, X = {
	manual: $r.Prism && $r.Prism.manual,
	disableWorkerMessageHandler: $r.Prism && $r.Prism.disableWorkerMessageHandler,
	util: {
		encode: function(e) {
			if (e instanceof ti) {
				let t = e;
				return new ti(t.type, X.util.encode(t.content), t.alias);
			} else return Array.isArray(e) ? e.map(X.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
		},
		type: function(e) {
			return Object.prototype.toString.call(e).slice(8, -1);
		},
		objId: function(e) {
			return e.__id || Object.defineProperty(e, "__id", { value: ++ei }), e.__id;
		},
		clone: function e(t, n) {
			let r, i, a = X.util.type(t);
			switch (n ||= {}, a) {
				case "Object":
					if (i = X.util.objId(t), n[i]) return n[i];
					r = {}, n[i] = r;
					for (let i in t) t.hasOwnProperty(i) && (r[i] = e(t[i], n));
					return r;
				case "Array": return i = X.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach(function(t, i) {
					r[i] = e(t, n);
				}), r);
				default: return t;
			}
		}
	},
	languages: {
		extend: function(e, t) {
			let n = X.util.clone(X.languages[e]);
			for (let e in t) n[e] = t[e];
			return n;
		},
		insertBefore: function(e, t, n, r) {
			r ||= X.languages;
			let i = r[e], a = {};
			for (let e in i) if (i.hasOwnProperty(e)) {
				if (e == t) for (let e in n) n.hasOwnProperty(e) && (a[e] = n[e]);
				n.hasOwnProperty(e) || (a[e] = i[e]);
			}
			let o = r[e];
			return r[e] = a, X.languages.DFS(X.languages, function(t, n) {
				n === o && t != e && (this[t] = a);
			}), a;
		},
		DFS: function e(t, n, r, i) {
			i ||= {};
			let a = X.util.objId;
			for (let o in t) if (t.hasOwnProperty(o)) {
				n.call(t, o, t[o], r || o);
				let s = t[o], c = X.util.type(s);
				c === "Object" && !i[a(s)] ? (i[a(s)] = !0, e(s, n, null, i)) : c === "Array" && !i[a(s)] && (i[a(s)] = !0, e(s, n, o, i));
			}
		}
	},
	plugins: {},
	highlight: function(e, t, n) {
		let r = {
			code: e,
			grammar: t,
			language: n
		};
		return X.hooks.run("before-tokenize", r), r.tokens = X.tokenize(r.code, r.grammar), X.hooks.run("after-tokenize", r), ti.stringify(X.util.encode(r.tokens), r.language);
	},
	matchGrammar: function(e, t, n, r, i, a, o) {
		for (let h in n) {
			if (!n.hasOwnProperty(h) || !n[h]) continue;
			if (h == o) return;
			let g = n[h];
			g = X.util.type(g) === "Array" ? g : [g];
			for (let o = 0; o < g.length; ++o) {
				let _ = g[o], v = _.inside, y = !!_.lookbehind, b = !!_.greedy, x = 0, S = _.alias;
				if (b && !_.pattern.global) {
					let e = _.pattern.toString().match(/[imuy]*$/)[0];
					_.pattern = RegExp(_.pattern.source, e + "g");
				}
				_ = _.pattern || _;
				for (let o = r, g = i; o < t.length; g += t[o].length, ++o) {
					let r = t[o];
					if (t.length > e.length) return;
					if (r instanceof ti) continue;
					if (b && o != t.length - 1) {
						_.lastIndex = g;
						var s = _.exec(e);
						if (!s) break;
						var c = s.index + (y ? s[1].length : 0), l = s.index + s[0].length, u = o, d = g;
						for (let e = t.length; u < e && (d < l || !t[u].type && !t[u - 1].greedy); ++u) d += t[u].length, c >= d && (++o, g = d);
						if (t[o] instanceof ti) continue;
						f = u - o, r = e.slice(g, d), s.index -= g;
					} else {
						_.lastIndex = 0;
						var s = _.exec(r), f = 1;
					}
					if (!s) {
						if (a) break;
						continue;
					}
					y && (x = s[1] ? s[1].length : 0);
					var c = s.index + x, s = s[0].slice(x), l = c + s.length, p = r.slice(0, c), m = r.slice(l);
					let i = [o, f];
					p && (++o, g += p.length, i.push(p));
					let C = new ti(h, v ? X.tokenize(s, v) : s, S, s, b);
					if (i.push(C), m && i.push(m), Array.prototype.splice.apply(t, i), f != 1 && X.matchGrammar(e, t, n, o, g, !0, h), a) break;
				}
			}
		}
	},
	tokenize: function(e, t) {
		let n = [e], r = t.rest;
		if (r) {
			for (let e in r) t[e] = r[e];
			delete t.rest;
		}
		return X.matchGrammar(e, n, t, 0, 0, !1), n;
	},
	hooks: {
		all: {},
		add: function(e, t) {
			let n = X.hooks.all;
			n[e] = n[e] || [], n[e].push(t);
		},
		run: function(e, t) {
			let n = X.hooks.all[e];
			if (!(!n || !n.length)) for (var r = 0, i; i = n[r++];) i(t);
		}
	},
	Token: ti
};
X.languages.clike = {
	comment: [{
		pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
		lookbehind: !0
	}, {
		pattern: /(^|[^\\:])\/\/.*/,
		lookbehind: !0,
		greedy: !0
	}],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0
	},
	"class-name": {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ }
	},
	keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	punctuation: /[{}[\];(),.:]/
}, X.languages.javascript = X.languages.extend("clike", {
	"class-name": [X.languages.clike["class-name"], {
		pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
		lookbehind: !0
	}],
	keyword: [{
		pattern: /((?:^|})\s*)(?:catch|finally)\b/,
		lookbehind: !0
	}, {
		pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
		lookbehind: !0
	}],
	number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), X.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, X.languages.insertBefore("javascript", "keyword", {
	regex: {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: !0,
		greedy: !0
	},
	"function-variable": {
		pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
		alias: "function"
	},
	parameter: [
		{
			pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
			lookbehind: !0,
			inside: X.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: X.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: !0,
			inside: X.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: !0,
			inside: X.languages.javascript
		}
	],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), X.languages.markup && X.languages.markup.tag.addInlined("script", "javascript"), X.languages.js = X.languages.javascript, X.languages.typescript = X.languages.extend("javascript", {
	keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
}), X.languages.ts = X.languages.typescript;
function ti(e, t, n, r, i) {
	this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
ti.stringify = function(e, t) {
	return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(e) {
		return ti.stringify(e, t);
	}).join("") : ni(e.type)(e.content);
};
function ni(e) {
	return Zr[e] || Qr;
}
var ri = C(ce());
function ii(e, t, n) {
	let r = ci(oi(ai(e)));
	r ? bi(r, t, n) : t.addErrorMessage(() => "Unknown error");
}
function ai(e) {
	return e.errors.flatMap((e) => e.kind === "Union" ? ai(e) : [e]);
}
function oi(e) {
	let t = /* @__PURE__ */ new Map(), n = [];
	for (let r of e) {
		if (r.kind !== "InvalidArgumentType") {
			n.push(r);
			continue;
		}
		let e = `${r.selectionPath.join(".")}:${r.argumentPath.join(".")}`, i = t.get(e);
		i ? t.set(e, {
			...r,
			argument: {
				...r.argument,
				typeNames: si(i.argument.typeNames, r.argument.typeNames)
			}
		}) : t.set(e, r);
	}
	return n.push(...t.values()), n;
}
function si(e, t) {
	return [...new Set(e.concat(t))];
}
function ci(e) {
	return fn(e, (e, t) => {
		let n = li(e), r = li(t);
		return n === r ? ui(e) - ui(t) : n - r;
	});
}
function li(e) {
	let t = 0;
	return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function ui(e) {
	switch (e.kind) {
		case "InvalidArgumentValue":
		case "ValueTooLarge": return 20;
		case "InvalidArgumentType": return 10;
		case "RequiredArgumentMissing": return -10;
		default: return 0;
	}
}
var di = class {
	constructor(e, t) {
		this.name = e, this.value = t;
	}
	isRequired = !1;
	makeRequired() {
		return this.isRequired = !0, this;
	}
	write(e) {
		let { colors: { green: t } } = e.context;
		e.addMarginSymbol(t(this.isRequired ? "+" : "?")), e.write(t(this.name)), this.isRequired || e.write(t("?")), e.write(t(": ")), typeof this.value == "string" ? e.write(t(this.value)) : e.write(this.value);
	}
};
ue(), le();
var fi = class {
	constructor(e) {
		this.value = e;
	}
	write(e) {
		e.write(this.value);
	}
	markAsError() {
		this.value.markAsError();
	}
}, pi = { write(e) {
	e.writeLine(",");
} }, mi = class {
	constructor(e) {
		this.contents = e;
	}
	isUnderlined = !1;
	color = (e) => e;
	underline() {
		return this.isUnderlined = !0, this;
	}
	setColor(e) {
		return this.color = e, this;
	}
	write(e) {
		let t = e.getCurrentLineLength();
		e.write(this.color(this.contents)), this.isUnderlined && e.afterNextNewline(() => {
			e.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
		});
	}
}, hi = class {
	hasError = !1;
	markAsError() {
		return this.hasError = !0, this;
	}
}, gi = class extends hi {
	items = [];
	addItem(e) {
		return this.items.push(new fi(e)), this;
	}
	getField(e) {
		return this.items[e];
	}
	getPrintWidth() {
		return this.items.length === 0 ? 2 : Math.max(...this.items.map((e) => e.value.getPrintWidth())) + 2;
	}
	write(e) {
		if (this.items.length === 0) {
			this.writeEmpty(e);
			return;
		}
		this.writeWithItems(e);
	}
	writeEmpty(e) {
		let t = new mi("[]");
		this.hasError && t.setColor(e.context.colors.red).underline(), e.write(t);
	}
	writeWithItems(e) {
		let { colors: t } = e.context;
		e.writeLine("[").withIndent(() => e.writeJoined(pi, this.items).newLine()).write("]"), this.hasError && e.afterNextNewline(() => {
			e.writeLine(t.red("~".repeat(this.getPrintWidth())));
		});
	}
	asObject() {}
}, _i = class e extends hi {
	fields = {};
	suggestions = [];
	addField(e) {
		this.fields[e.name] = e;
	}
	addSuggestion(e) {
		this.suggestions.push(e);
	}
	getField(e) {
		return this.fields[e];
	}
	getDeepField(t) {
		let [n, ...r] = t, i = this.getField(n);
		if (!i) return;
		let a = i;
		for (let t of r) {
			let n;
			if (a.value instanceof e ? n = a.value.getField(t) : a.value instanceof gi && (n = a.value.getField(Number(t))), !n) return;
			a = n;
		}
		return a;
	}
	getDeepFieldValue(e) {
		return e.length === 0 ? this : this.getDeepField(e)?.value;
	}
	hasField(e) {
		return !!this.getField(e);
	}
	removeAllFields() {
		this.fields = {};
	}
	removeField(e) {
		delete this.fields[e];
	}
	getFields() {
		return this.fields;
	}
	isEmpty() {
		return Object.keys(this.fields).length === 0;
	}
	getFieldValue(e) {
		return this.getField(e)?.value;
	}
	getDeepSubSelectionValue(t) {
		let n = this;
		for (let r of t) {
			if (!(n instanceof e)) return;
			let t = n.getSubSelectionValue(r);
			if (!t) return;
			n = t;
		}
		return n;
	}
	getDeepSelectionParent(t) {
		let n = this.getSelectionParent();
		if (!n) return;
		let r = n;
		for (let n of t) {
			let t = r.value.getFieldValue(n);
			if (!t || !(t instanceof e)) return;
			let i = t.getSelectionParent();
			if (!i) return;
			r = i;
		}
		return r;
	}
	getSelectionParent() {
		let e = this.getField("select")?.value.asObject();
		if (e) return {
			kind: "select",
			value: e
		};
		let t = this.getField("include")?.value.asObject();
		if (t) return {
			kind: "include",
			value: t
		};
	}
	getSubSelectionValue(e) {
		return this.getSelectionParent()?.value.fields[e].value;
	}
	getPrintWidth() {
		let e = Object.values(this.fields);
		return e.length == 0 ? 2 : Math.max(...e.map((e) => e.getPrintWidth())) + 2;
	}
	write(e) {
		let t = Object.values(this.fields);
		if (t.length === 0 && this.suggestions.length === 0) {
			this.writeEmpty(e);
			return;
		}
		this.writeWithContents(e, t);
	}
	asObject() {
		return this;
	}
	writeEmpty(e) {
		let t = new mi("{}");
		this.hasError && t.setColor(e.context.colors.red).underline(), e.write(t);
	}
	writeWithContents(e, t) {
		e.writeLine("{").withIndent(() => {
			e.writeJoined(pi, [...t, ...this.suggestions]).newLine();
		}), e.write("}"), this.hasError && e.afterNextNewline(() => {
			e.writeLine(e.context.colors.red("~".repeat(this.getPrintWidth())));
		});
	}
}, vi = class extends hi {
	constructor(e) {
		super(), this.text = e;
	}
	getPrintWidth() {
		return this.text.length;
	}
	write(e) {
		let t = new mi(this.text);
		this.hasError && t.underline().setColor(e.context.colors.red), e.write(t);
	}
	asObject() {}
}, yi = class {
	fields = [];
	addField(e, t) {
		return this.fields.push({ write(n) {
			let { green: r, dim: i } = n.context.colors;
			n.write(r(i(`${e}: ${t}`))).addMarginSymbol(r(i("+")));
		} }), this;
	}
	write(e) {
		let { colors: { green: t } } = e.context;
		e.writeLine(t("{")).withIndent(() => {
			e.writeJoined(pi, this.fields).newLine();
		}).write(t("}")).addMarginSymbol(t("+"));
	}
};
function bi(e, t, n) {
	switch (e.kind) {
		case "MutuallyExclusiveFields":
			xi(e, t);
			break;
		case "IncludeOnScalar":
			Si(e, t);
			break;
		case "EmptySelection":
			Ci(e, t, n);
			break;
		case "UnknownSelectionField":
			Di(e, t);
			break;
		case "InvalidSelectionValue":
			Oi(e, t);
			break;
		case "UnknownArgument":
			ki(e, t);
			break;
		case "UnknownInputField":
			Ai(e, t);
			break;
		case "RequiredArgumentMissing":
			Mi(e, t);
			break;
		case "InvalidArgumentType":
			Pi(e, t);
			break;
		case "InvalidArgumentValue":
			Fi(e, t);
			break;
		case "ValueTooLarge":
			Ii(e, t);
			break;
		case "SomeFieldsMissing":
			Li(e, t);
			break;
		case "TooManyFieldsGiven":
			Ri(e, t);
			break;
		case "Union":
			ii(e, t, n);
			break;
		default: throw Error("not implemented: " + e.kind);
	}
}
function xi(e, t) {
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	n && (n.getField(e.firstField)?.markAsError(), n.getField(e.secondField)?.markAsError()), t.addErrorMessage((t) => `Please ${t.bold("either")} use ${t.green(`\`${e.firstField}\``)} or ${t.green(`\`${e.secondField}\``)}, but ${t.red("not both")} at the same time.`);
}
function Si(e, t) {
	let [n, r] = Gi(e.selectionPath), i = e.outputType, a = t.arguments.getDeepSelectionParent(n)?.value;
	if (a && (a.getField(r)?.markAsError(), i)) for (let e of i.fields) e.isRelation && a.addSuggestion(new di(e.name, "true"));
	t.addErrorMessage((e) => {
		let t = `Invalid scalar field ${e.red(`\`${r}\``)} for ${e.bold("include")} statement`;
		return i ? t += ` on model ${e.bold(i.name)}. ${Ki(e)}` : t += ".", t += `
Note that ${e.bold("include")} statements only accept relation fields.`, t;
	});
}
function Ci(e, t, n) {
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let n = r.getField("omit")?.value.asObject();
		if (n) {
			wi(e, t, n);
			return;
		}
		if (r.hasField("select")) {
			Ti(e, t);
			return;
		}
	}
	if (n?.[pn(e.outputType.name)]) {
		Ei(e, t);
		return;
	}
	t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function wi(e, t, n) {
	n.removeAllFields();
	for (let t of e.outputType.fields) n.addSuggestion(new di(t.name, "false"));
	t.addErrorMessage((t) => `The ${t.red("omit")} statement includes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Ti(e, t) {
	let n = e.outputType, r = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = r?.isEmpty() ?? !1;
	r && (r.removeAllFields(), zi(r, n)), t.addErrorMessage((e) => i ? `The ${e.red("`select`")} statement for type ${e.bold(n.name)} must not be empty. ${Ki(e)}` : `The ${e.red("`select`")} statement for type ${e.bold(n.name)} needs ${e.bold("at least one truthy value")}.`);
}
function Ei(e, t) {
	let n = new yi();
	for (let t of e.outputType.fields) t.isRelation || n.addField(t.name, "false");
	let r = new di("omit", n).makeRequired();
	if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
	else {
		let [n, i] = Gi(e.selectionPath), a = t.arguments.getDeepSelectionParent(n)?.value.asObject()?.getField(i);
		if (a) {
			let e = a?.value.asObject() ?? new _i();
			e.addSuggestion(r), a.value = e;
		}
	}
	t.addErrorMessage((t) => `The global ${t.red("omit")} configuration excludes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Di(e, t) {
	let n = Ui(e.selectionPath, t);
	if (n.parentKind !== "unknown") {
		n.field.markAsError();
		let t = n.parent;
		switch (n.parentKind) {
			case "select":
				zi(t, e.outputType);
				break;
			case "include":
				Bi(t, e.outputType);
				break;
			case "omit":
				Vi(t, e.outputType);
				break;
		}
	}
	t.addErrorMessage((t) => {
		let r = [`Unknown field ${t.red(`\`${n.fieldName}\``)}`];
		return n.parentKind !== "unknown" && r.push(`for ${t.bold(n.parentKind)} statement`), r.push(`on model ${t.bold(`\`${e.outputType.name}\``)}.`), r.push(Ki(t)), r.join(" ");
	});
}
function Oi(e, t) {
	let n = Ui(e.selectionPath, t);
	n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((t) => `Invalid value for selection field \`${t.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function ki(e, t) {
	let n = e.argumentPath[0], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && (r.getField(n)?.markAsError(), Hi(r, e.arguments)), t.addErrorMessage((t) => ji(t, n, e.arguments.map((e) => e.name)));
}
function Ai(e, t) {
	let [n, r] = Gi(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (i) {
		i.getDeepField(e.argumentPath)?.markAsError();
		let t = i.getDeepFieldValue(n)?.asObject();
		t && Wi(t, e.inputType);
	}
	t.addErrorMessage((t) => ji(t, r, e.inputType.fields.map((e) => e.name)));
}
function ji(e, t, n) {
	let r = [`Unknown argument \`${e.red(t)}\`.`], i = Yi(t, n);
	return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(Ki(e)), r.join(" ");
}
function Mi(e, t) {
	let n;
	t.addErrorMessage((e) => n?.value instanceof vi && n.value.text === "null" ? `Argument \`${e.green(a)}\` must not be ${e.red("null")}.` : `Argument \`${e.green(a)}\` is missing.`);
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (!r) return;
	let [i, a] = Gi(e.argumentPath), o = new yi(), s = r.getDeepFieldValue(i)?.asObject();
	if (s) {
		if (n = s.getField(a), n && s.removeField(a), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
			for (let t of e.inputTypes[0].fields) o.addField(t.name, t.typeNames.join(" | "));
			s.addSuggestion(new di(a, o).makeRequired());
		} else {
			let t = e.inputTypes.map(Ni).join(" | ");
			s.addSuggestion(new di(a, t).makeRequired());
		}
		if (e.dependentArgumentPath) {
			r.getDeepField(e.dependentArgumentPath)?.markAsError();
			let [, n] = Gi(e.dependentArgumentPath);
			t.addErrorMessage((e) => `Argument \`${e.green(a)}\` is required because argument \`${e.green(n)}\` was provided.`);
		}
	}
}
function Ni(e) {
	return e.kind === "list" ? `${Ni(e.elementType)}[]` : e.name;
}
function Pi(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = qi("or", e.argument.typeNames.map((e) => t.green(e)));
		return `Argument \`${t.bold(n)}\`: Invalid value provided. Expected ${r}, provided ${t.red(e.inferredType)}.`;
	});
}
function Fi(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = [`Invalid value for argument \`${t.bold(n)}\``];
		if (e.underlyingError && r.push(`: ${e.underlyingError}`), r.push("."), e.argument.typeNames.length > 0) {
			let n = qi("or", e.argument.typeNames.map((e) => t.green(e)));
			r.push(` Expected ${n}.`);
		}
		return r.join("");
	});
}
function Ii(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
	if (r) {
		let t = r.getDeepField(e.argumentPath)?.value;
		t?.markAsError(), t instanceof vi && (i = t.text);
	}
	t.addErrorMessage((e) => {
		let t = ["Unable to fit value"];
		return i && t.push(e.red(i)), t.push(`into a 64-bit signed integer for field \`${e.bold(n)}\``), t.join(" ");
	});
}
function Li(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && Wi(t, e.inputType);
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? r.push(`${t.green("at least one of")} ${qi("or", e.constraints.requiredFields.map((e) => `\`${t.bold(e)}\``))} arguments.`) : r.push(`${t.green("at least one")} argument.`) : r.push(`${t.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), r.push(Ki(t)), r.join(" ");
	});
}
function Ri(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && (t.markAsError(), i = Object.keys(t.getFields()));
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? r.push(`${t.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? r.push(`${t.green("at most one")} argument,`) : r.push(`${t.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), r.push(`but you provided ${qi("and", i.map((e) => t.red(e)))}. Please choose`), e.constraints.maxFieldCount === 1 ? r.push("one.") : r.push(`${e.constraints.maxFieldCount}.`), r.join(" ");
	});
}
function zi(e, t) {
	for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new di(n.name, "true"));
}
function Bi(e, t) {
	for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new di(n.name, "true"));
}
function Vi(e, t) {
	for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new di(n.name, "true"));
}
function Hi(e, t) {
	for (let n of t) e.hasField(n.name) || e.addSuggestion(new di(n.name, n.typeNames.join(" | ")));
}
function Ui(e, t) {
	let [n, r] = Gi(e), i = t.arguments.getDeepSubSelectionValue(n)?.asObject();
	if (!i) return {
		parentKind: "unknown",
		fieldName: r
	};
	let a = i.getFieldValue("select")?.asObject(), o = i.getFieldValue("include")?.asObject(), s = i.getFieldValue("omit")?.asObject(), c = a?.getField(r);
	return a && c ? {
		parentKind: "select",
		parent: a,
		field: c,
		fieldName: r
	} : (c = o?.getField(r), o && c ? {
		parentKind: "include",
		field: c,
		parent: o,
		fieldName: r
	} : (c = s?.getField(r), s && c ? {
		parentKind: "omit",
		field: c,
		parent: s,
		fieldName: r
	} : {
		parentKind: "unknown",
		fieldName: r
	}));
}
function Wi(e, t) {
	if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new di(n.name, n.typeNames.join(" | ")));
}
function Gi(e) {
	let t = [...e], n = t.pop();
	if (!n) throw Error("unexpected empty path");
	return [t, n];
}
function Ki({ green: e, enabled: t }) {
	return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function qi(e, t) {
	if (t.length === 1) return t[0];
	let n = [...t], r = n.pop();
	return `${n.join(", ")} ${e} ${r}`;
}
var Ji = 3;
function Yi(e, t) {
	let n = Infinity, r;
	for (let i of t) {
		let t = (0, ri.default)(e, i);
		t > Ji || t < n && (n = t, r = i);
	}
	return r;
}
var Xi = class {
	modelName;
	name;
	typeName;
	isList;
	isEnum;
	constructor(e, t, n, r, i) {
		this.modelName = e, this.name = t, this.typeName = n, this.isList = r, this.isEnum = i;
	}
	_toGraphQLInputType() {
		return `${this.isList ? "List" : ""}${this.isEnum ? "Enum" : ""}${this.typeName}FieldRefInput<${this.modelName}>`;
	}
};
function Zi(e) {
	return e instanceof Xi;
}
var Qi = Symbol(), $i = /* @__PURE__ */ new WeakMap(), ea = class {
	constructor(e) {
		e === Qi ? $i.set(this, `Prisma.${this._getName()}`) : $i.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
	}
	_getName() {
		return this.constructor.name;
	}
	toString() {
		return $i.get(this);
	}
}, ta = class extends ea {
	_getNamespace() {
		return "NullTypes";
	}
}, na = class extends ta {};
aa(na, "DbNull");
var ra = class extends ta {};
aa(ra, "JsonNull");
var ia = class extends ta {};
aa(ia, "AnyNull"), new na(Qi), new ra(Qi), new ia(Qi);
function aa(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
var oa = ": ", sa = class {
	constructor(e, t) {
		this.name = e, this.value = t;
	}
	hasError = !1;
	markAsError() {
		this.hasError = !0;
	}
	getPrintWidth() {
		return this.name.length + this.value.getPrintWidth() + oa.length;
	}
	write(e) {
		let t = new mi(this.name);
		this.hasError && t.underline().setColor(e.context.colors.red), e.write(t).write(oa).write(this.value);
	}
};
function ca(e) {
	let t = new _i();
	for (let [n, r] of Object.entries(e)) {
		let e = new sa(n, la(r));
		t.addField(e);
	}
	return t;
}
function la(e) {
	return typeof e == "string" ? new vi(JSON.stringify(e)) : typeof e == "number" || typeof e == "boolean" ? new vi(String(e)) : typeof e == "bigint" ? new vi(`${e}n`) : e === null ? new vi("null") : e === void 0 ? new vi("undefined") : Jr(e) ? new vi(`new Prisma.Decimal("${e.toFixed()}")`) : e instanceof Uint8Array ? Buffer.isBuffer(e) ? new vi(`Buffer.alloc(${e.byteLength})`) : new vi(`new Uint8Array(${e.byteLength})`) : e instanceof Date ? new vi(`new Date("${mn(e) ? e.toISOString() : "Invalid Date"}")`) : e instanceof ea ? new vi(`Prisma.${e._getName()}`) : Zi(e) ? new vi(`prisma.${pn(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? ua(e) : typeof e == "object" ? ca(e) : new vi(Object.prototype.toString.call(e));
}
function ua(e) {
	let t = new gi();
	for (let n of e) t.addItem(la(n));
	return t;
}
var da = Symbol(), fa = new class {
	constructor(e) {
		if (e !== da) throw Error("Skip instance can not be constructed directly");
	}
	ifUndefined(e) {
		return e === void 0 ? fa : e;
	}
}(da);
C(re());
var pa = class e {
	constructor(t, n) {
		if (t.length - 1 !== n.length) throw t.length === 0 ? /* @__PURE__ */ TypeError("Expected at least 1 string") : /* @__PURE__ */ TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
		let r = n.reduce((t, n) => t + (n instanceof e ? n.values.length : 1), 0);
		this.values = Array(r), this.strings = Array(r + 1), this.strings[0] = t[0];
		let i = 0, a = 0;
		for (; i < n.length;) {
			let r = n[i++], o = t[i];
			if (r instanceof e) {
				this.strings[a] += r.strings[0];
				let e = 0;
				for (; e < r.values.length;) this.values[a++] = r.values[e++], this.strings[a] = r.strings[e];
				this.strings[a] += o;
			} else this.values[a++] = r, this.strings[a] = o;
		}
	}
	get sql() {
		let e = this.strings.length, t = 1, n = this.strings[0];
		for (; t < e;) n += `?${this.strings[t++]}`;
		return n;
	}
	get statement() {
		let e = this.strings.length, t = 1, n = this.strings[0];
		for (; t < e;) n += `:${t}${this.strings[t++]}`;
		return n;
	}
	get text() {
		let e = this.strings.length, t = 1, n = this.strings[0];
		for (; t < e;) n += `$${t}${this.strings[t++]}`;
		return n;
	}
	inspect() {
		return {
			sql: this.sql,
			statement: this.statement,
			text: this.text,
			values: this.values
		};
	}
};
function ma(e) {
	return new pa([e], []);
}
ma("");
function ha(e, t, n, r) {
	if (n === t.length) return r(e);
	let i = e.customDataProxyFetch, a = e.requests[0].transaction;
	return t[n]({
		args: {
			queries: e.requests.map((e) => ({
				model: e.modelName,
				operation: e.action,
				args: e.args
			})),
			transaction: a ? { isolationLevel: a.kind === "batch" ? a.isolationLevel : void 0 } : void 0
		},
		__internalParams: e,
		query(a, o = e) {
			let s = o.customDataProxyFetch;
			return o.customDataProxyFetch = _a(i, s), ha(o, t, n + 1, r);
		}
	});
}
var ga = (e) => e;
function _a(e = ga, t = ga) {
	return (n) => e(t(n));
}
Ke("prisma:client"), Ke("prisma:client:engines:resolveEnginePath"), C(se());
function va(e, t) {
	throw Error(t);
}
function ya(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
function ba(e, t) {
	let n = {};
	for (let r of Object.keys(e)) n[r] = t(e[r], r);
	return n;
}
function xa(e) {
	return e === null ? e : Array.isArray(e) ? e.map(xa) : typeof e == "object" ? ya(e) ? Sa(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : ba(e, xa) : e;
}
function Sa({ $type: e, value: t }) {
	switch (e) {
		case "BigInt": return BigInt(t);
		case "Bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "DateTime": return new Date(t);
		case "Decimal": return new qr(t);
		case "Json": return JSON.parse(t);
		default: va(t, "Unknown tagged value");
	}
}
var Ca = class extends Error {
	clientVersion;
	cause;
	constructor(e, t) {
		super(e), this.clientVersion = t.clientVersion, this.cause = t.cause;
	}
	get [Symbol.toStringTag]() {
		return this.name;
	}
}, wa = class extends Ca {
	isRetryable;
	constructor(e, t) {
		super(e, t), this.isRetryable = t.isRetryable ?? !0;
	}
};
function Z(e, t) {
	return {
		...e,
		isRetryable: t
	};
}
B(class extends wa {
	name = "InvalidDatasourceError";
	code = "P6001";
	constructor(e, t) {
		super(e, Z(t, !1));
	}
}, "InvalidDatasourceError"), C(ie()), B(class extends wa {
	name = "ForcedRetryError";
	code = "P5001";
	constructor(e) {
		super("This request must be retried", Z(e, !0));
	}
}, "ForcedRetryError"), B(class extends wa {
	name = "NotImplementedYetError";
	code = "P5004";
	constructor(e, t) {
		super(e, Z(t, !1));
	}
}, "NotImplementedYetError");
var Ta = class extends wa {
	response;
	constructor(e, t) {
		super(e, t), this.response = t.response;
		let n = this.response.headers.get("prisma-request-id");
		if (n) {
			let e = `(The request id was: ${n})`;
			this.message = this.message + " " + e;
		}
	}
};
B(class extends Ta {
	name = "SchemaMissingError";
	code = "P5005";
	constructor(e) {
		super("Schema needs to be uploaded", Z(e, !0));
	}
}, "SchemaMissingError");
var Ea = "This request could not be understood by the server";
B(class extends Ta {
	name = "BadRequestError";
	code = "P5000";
	constructor(e, t, n) {
		super(t || Ea, Z(e, !1)), n && (this.code = n);
	}
}, "BadRequestError"), B(class extends Ta {
	name = "HealthcheckTimeoutError";
	code = "P5013";
	logs;
	constructor(e, t) {
		super("Engine not started: healthcheck timeout", Z(e, !0)), this.logs = t;
	}
}, "HealthcheckTimeoutError"), B(class extends Ta {
	name = "EngineStartupError";
	code = "P5014";
	logs;
	constructor(e, t, n) {
		super(t, Z(e, !0)), this.logs = n;
	}
}, "EngineStartupError"), B(class extends Ta {
	name = "EngineVersionNotSupportedError";
	code = "P5012";
	constructor(e) {
		super("Engine version is not supported", Z(e, !1));
	}
}, "EngineVersionNotSupportedError");
var Da = "Request timed out";
B(class extends Ta {
	name = "GatewayTimeoutError";
	code = "P5009";
	constructor(e, t = Da) {
		super(t, Z(e, !1));
	}
}, "GatewayTimeoutError");
var Oa = "Interactive transaction error";
B(class extends Ta {
	name = "InteractiveTransactionError";
	code = "P5015";
	constructor(e, t = Oa) {
		super(t, Z(e, !1));
	}
}, "InteractiveTransactionError");
var ka = "Request parameters are invalid";
B(class extends Ta {
	name = "InvalidRequestError";
	code = "P5011";
	constructor(e, t = ka) {
		super(t, Z(e, !1));
	}
}, "InvalidRequestError");
var Aa = "Requested resource does not exist";
B(class extends Ta {
	name = "NotFoundError";
	code = "P5003";
	constructor(e, t = Aa) {
		super(t, Z(e, !1));
	}
}, "NotFoundError");
var ja = "Unknown server error";
B(class extends Ta {
	name = "ServerError";
	code = "P5006";
	logs;
	constructor(e, t, n) {
		super(t || ja, Z(e, !0)), this.logs = n;
	}
}, "ServerError");
var Ma = "Unauthorized, check your connection string";
B(class extends Ta {
	name = "UnauthorizedError";
	code = "P5007";
	constructor(e, t = Ma) {
		super(t, Z(e, !1));
	}
}, "UnauthorizedError");
var Na = "Usage exceeded, retry again later";
B(class extends Ta {
	name = "UsageExceededError";
	code = "P5008";
	constructor(e, t = Na) {
		super(t, Z(e, !0));
	}
}, "UsageExceededError"), B(class extends wa {
	name = "RequestError";
	code = "P5010";
	constructor(e, t) {
		super(`Cannot fetch data from service:
${e}`, Z(t, !0));
	}
}, "RequestError"), Ke("prisma:client:dataproxyEngine"), Ke("prisma:client:dataproxyEngine"), Ke("prisma:client:libraryEngine"), [...Ye], Ke("prisma:client"), nn.split(".")[0];
function Pa(e) {
	return `(${Object.keys(e).sort().map((t) => {
		let n = e[t];
		return typeof n == "object" && n ? `(${t} ${Pa(n)})` : t;
	}).join(" ")})`;
}
function Fa(e, t) {
	if (t === null) return t;
	switch (e) {
		case "bigint": return BigInt(t);
		case "bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "decimal": return new Y(t);
		case "datetime":
		case "date": return new Date(t);
		case "time": return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
		case "bigint-array": return t.map((e) => Fa("bigint", e));
		case "bytes-array": return t.map((e) => Fa("bytes", e));
		case "decimal-array": return t.map((e) => Fa("decimal", e));
		case "datetime-array": return t.map((e) => Fa("datetime", e));
		case "date-array": return t.map((e) => Fa("date", e));
		case "time-array": return t.map((e) => Fa("time", e));
		default: return t;
	}
}
Ke("prisma:client:request_handler");
function Ia(e) {
	if (e.kind === "Union") return {
		kind: "Union",
		errors: e.errors.map(Ia)
	};
	if (Array.isArray(e.selectionPath)) {
		let [, ...t] = e.selectionPath;
		return {
			...e,
			selectionPath: t
		};
	}
	return e;
}
C(ce()), B(class extends Error {
	constructor(e) {
		super(e + "\nRead more at https://pris.ly/d/client-constructor"), this.name = "PrismaClientConstructorValidationError";
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientConstructorValidationError";
	}
}, "PrismaClientConstructorValidationError"), Ke("prisma:client"), typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
//#endregion
//#region src/lib/types.ts
var Q = {
	CASH_IN_BANK: "1000",
	ACCOUNTS_RECEIVABLE: "1100",
	UNDEPOSITED_FUNDS: "1200",
	SECURITY_DEPOSITS_LIABILITY: "2100",
	ACCOUNTS_PAYABLE: "2200",
	SALES_TAX_PAYABLE: "2250",
	PREPAID_RENT: "2300",
	OWNER_EQUITY: "3000",
	RENTAL_INCOME: "4000",
	UTILITY_RECOVERY_INCOME: "4100",
	LATE_FEES_INCOME: "4200",
	MAINTENANCE_INCOME: "4300",
	DOCUMENT_SIGNING_INCOME: "4400",
	MAINTENANCE_EXPENSE: "5100",
	UTILITY_EXPENSE: "5200",
	MANAGEMENT_FEES: "5300"
}, La = class {
	prisma;
	constructor(e) {
		this.prisma = e;
	}
	async postJournalEntry(e, t) {
		let { organizationId: n, date: r, reference: i, description: a, lines: o } = e, s = t ?? this.prisma, c = new Y(0), l = new Y(0);
		if (o.forEach((e) => {
			c = c.plus(e.debit), l = l.plus(e.credit);
		}), !c.equals(l)) throw Error(`GL IMBALANCE: Debits ($${c}) do not equal Credits ($${l}). Transaction blocked.`);
		let u = await s.financialEntity.findFirst({
			where: { organizationId: n },
			include: { accounts: !0 }
		});
		if (!u) throw Error(`Financial Entity not found for Org: ${n}`);
		let d = o.map((e) => {
			let t = u.accounts.find((t) => t.code === e.accountCode);
			if (!t) throw Error(`Account Code ${e.accountCode} not configured for this entity.`);
			return {
				accountId: t.id,
				description: a,
				debit: e.debit,
				credit: e.credit,
				propertyId: e.propertyId,
				tenantId: e.tenantId
			};
		});
		return { journalEntryId: (t ? await t.journalEntry.create({ data: {
			entityId: u.id,
			transactionDate: r,
			postedAt: /* @__PURE__ */ new Date(),
			description: a,
			reference: i,
			isLocked: !0,
			lines: { create: d }
		} }) : await this.prisma.$transaction(async (e) => await e.journalEntry.create({ data: {
			entityId: u.id,
			transactionDate: r,
			postedAt: /* @__PURE__ */ new Date(),
			description: a,
			reference: i,
			isLocked: !0,
			lines: { create: d }
		} }))).id };
	}
	async getFinanceSummary(e, t) {
		let n = [
			Q.CASH_IN_BANK,
			Q.ACCOUNTS_RECEIVABLE,
			Q.SALES_TAX_PAYABLE,
			Q.RENTAL_INCOME,
			Q.MAINTENANCE_EXPENSE,
			Q.UTILITY_EXPENSE,
			Q.MANAGEMENT_FEES
		], r = await this.prisma.financialEntity.findFirst({
			where: { organizationId: e },
			include: { accounts: {
				where: { code: { in: n } },
				select: {
					id: !0,
					code: !0
				}
			} }
		});
		if (!r) return {
			cashInBank: new Y(0),
			accountsReceivable: new Y(0),
			salesTaxLiability: new Y(0),
			totalRevenue: new Y(0),
			operatingExpenses: new Y(0),
			overdueAmount: new Y(0)
		};
		let i = /* @__PURE__ */ new Map();
		for (let e of r.accounts) i.set(e.code, e.id);
		let a = r.accounts.map((e) => e.id), o = a.length > 0 ? await this.prisma.journalLine.groupBy({
			by: ["accountId"],
			where: {
				accountId: { in: a },
				...t ? { propertyId: t } : {},
				journalEntry: {
					entityId: r.id,
					isLocked: !0
				}
			},
			_sum: {
				debit: !0,
				credit: !0
			}
		}) : [], s = /* @__PURE__ */ new Map();
		for (let e of o) {
			let t = new Y(e._sum.debit ?? 0), n = new Y(e._sum.credit ?? 0);
			s.set(e.accountId, t.minus(n));
		}
		let c = (e) => {
			let t = i.get(e);
			if (!t) return new Y(0);
			let n = e.startsWith("1") || e.startsWith("5"), r = s.get(t) ?? new Y(0);
			return n ? r : r.negated();
		}, l = await this.prisma.invoice.aggregate({
			where: {
				postingStatus: "POSTED",
				status: { not: "PAID" },
				dueDate: { lt: /* @__PURE__ */ new Date() },
				Lease: {
					property: { organizationId: e },
					...t ? { propertyId: t } : {}
				}
			},
			_sum: { totalAmount: !0 }
		}), u = [
			Q.MAINTENANCE_EXPENSE,
			Q.UTILITY_EXPENSE,
			Q.MANAGEMENT_FEES
		].reduce((e, t) => e.plus(c(t)), new Y(0));
		return {
			cashInBank: c(Q.CASH_IN_BANK),
			accountsReceivable: c(Q.ACCOUNTS_RECEIVABLE),
			salesTaxLiability: c(Q.SALES_TAX_PAYABLE),
			totalRevenue: c(Q.RENTAL_INCOME),
			operatingExpenses: u,
			overdueAmount: new Y(l._sum.totalAmount ?? 0)
		};
	}
	async getInvoices(e, t) {
		let n = Math.max(1, t.page ?? 1), r = Math.min(Math.max(t.limit ?? 10, 1), 100), i = t.status === "VOID" ? "CANCELLED" : t.status, a = t.search?.trim(), o = {
			Lease: {
				property: { organizationId: e },
				...t.propertyId && t.propertyId !== "all" ? { propertyId: t.propertyId } : {}
			},
			...i ? { status: i } : {},
			...a ? { OR: [
				{ id: { contains: a } },
				{ Lease: { property: { name: { contains: a } } } },
				{ Lease: { property: { address: { contains: a } } } },
				{ Lease: { unit: { unitNumber: { contains: a } } } },
				{ Lease: { tenant: { firstName: { contains: a } } } },
				{ Lease: { tenant: { lastName: { contains: a } } } }
			] } : {}
		}, [s, c] = await Promise.all([this.prisma.invoice.findMany({
			where: o,
			include: { Lease: { include: {
				property: !0,
				unit: !0,
				tenant: !0
			} } },
			orderBy: { dueDate: "desc" },
			skip: (n - 1) * r,
			take: r
		}), this.prisma.invoice.count({ where: o })]);
		return {
			data: s.map((e) => {
				let t = [e.Lease?.tenant?.firstName?.trim() ?? "", e.Lease?.tenant?.lastName?.trim() ?? ""].filter(Boolean).join(" ") || "N/A", n = e.Lease?.property?.name?.trim() || e.Lease?.property?.address?.trim() || "N/A", r = e.Lease?.unit?.unitNumber?.trim() || "N/A";
				return {
					id: e.id,
					invoiceNumber: `INV-${e.id.substring(0, 8).toUpperCase()}`,
					tenantName: t,
					propertyName: n,
					unitNumber: r,
					amount: Number(e.totalAmount ?? 0),
					dueDate: e.dueDate,
					status: e.status === "CANCELLED" ? "VOID" : e.status ?? "DRAFT",
					postingStatus: e.postingStatus,
					journalEntryId: e.journalEntryId
				};
			}),
			pagination: {
				total: c,
				page: n,
				limit: r
			}
		};
	}
	async getInvoiceDetail(e, t) {
		let n = await this.prisma.invoice.findFirst({
			where: {
				id: t,
				Lease: { property: { organizationId: e } }
			},
			include: {
				Lease: { include: {
					property: !0,
					unit: !0,
					tenant: !0
				} },
				InvoiceItem: !0,
				journalEntry: { include: { lines: !0 } }
			}
		});
		if (!n) throw Error("Invoice not found");
		let r = [n.Lease?.tenant?.firstName?.trim() ?? "", n.Lease?.tenant?.lastName?.trim() ?? ""].filter(Boolean).join(" ") || "N/A", i = n.Lease?.property?.name?.trim() || n.Lease?.property?.address?.trim() || "N/A", a = n.Lease?.unit?.unitNumber?.trim() || "N/A", o = n.InvoiceItem[0]?.description?.trim() || "";
		return {
			id: n.id,
			invoiceNumber: `INV-${n.id.substring(0, 8).toUpperCase()}`,
			tenantName: r,
			propertyName: i,
			unitNumber: a,
			amount: Number(n.totalAmount ?? 0),
			dueDate: n.dueDate,
			status: n.status === "CANCELLED" ? "VOID" : n.status ?? "DRAFT",
			postingStatus: n.postingStatus,
			journalEntryId: n.journalEntryId,
			description: o,
			createdAt: n.createdAt ?? /* @__PURE__ */ new Date(),
			postedAt: n.journalEntry?.postedAt ?? void 0,
			ledgerEntries: n.journalEntry?.lines.map((e) => ({
				accountId: e.accountId,
				debit: Number(e.debit ?? 0),
				credit: Number(e.credit ?? 0)
			})) ?? []
		};
	}
	async getVendorComplianceList(e) {
		let t = (/* @__PURE__ */ new Date()).getFullYear(), n = new Date(t, 0, 1);
		return (await this.prisma.vendor.findMany({
			where: { organizationId: e },
			include: {
				taxInfo: !0,
				invoices: {
					where: {
						postingStatus: "POSTED",
						createdAt: { gte: n }
					},
					select: { amount: !0 }
				}
			}
		})).map((e) => {
			let t = e.invoices.reduce((e, t) => e.plus(new Y(t.amount)), new Y(0)), n = e.taxInfo?.isTaxExempt ?? !1, r = e.businessType !== "CORPORATION" && t.greaterThanOrEqualTo(600);
			return {
				id: e.id,
				name: e.companyName,
				category: e.serviceType,
				businessType: e.businessType,
				w9Status: n ? "COLLECTED" : "MISSING",
				totalPaidYTD: Number(t),
				requires1099: r
			};
		});
	}
	async generateInvoice(e) {
		throw Error("Not implemented");
	}
	async getTenantBalance(e) {
		throw Error("Not implemented");
	}
	async recordPayment(e, t, n) {
		throw Error("Not implemented");
	}
}, Ra = new La(e), za = class {
	constructor(e, t) {
		this.db = e, this.journalService = t;
	}
	async postInvoiceToGL(e) {
		let t = await this.db.invoice.findUnique({
			where: { id: e },
			include: { Lease: { include: {
				property: !0,
				tenant: !0
			} } }
		});
		if (!t) throw Error(`Invoice ${e} not found`);
		if (t.postingStatus === "POSTED") {
			console.log(`[Finance] Invoice ${e} is already posted. Skipping.`);
			return;
		}
		let n = t.Lease?.property?.organizationId, r = t.propertyId ?? t.Lease?.propertyId ?? t.Lease?.property?.id, i = t.tenantId ?? t.Lease?.tenantId;
		if (!n) throw Error(`Invoice ${e} has no organization assigned`);
		if (!r) throw Error(`Invoice ${e} has no property assigned`);
		if (!i) throw Error(`Invoice ${e} has no tenant assigned`);
		let a = new Y(t.totalAmount), o = new Y(0), s = a.plus(o);
		try {
			let c = [{
				accountCode: Q.ACCOUNTS_RECEIVABLE,
				debit: s,
				credit: new Y(0),
				propertyId: r,
				tenantId: i
			}, {
				accountCode: Q.RENTAL_INCOME,
				debit: new Y(0),
				credit: a,
				propertyId: r,
				tenantId: i
			}];
			o.greaterThan(0) && c.push({
				accountCode: Q.SALES_TAX_PAYABLE,
				debit: new Y(0),
				credit: o,
				propertyId: r,
				tenantId: i
			});
			let { journalEntryId: l } = await this.journalService.postJournalEntry({
				organizationId: n,
				date: t.createdAt || /* @__PURE__ */ new Date(),
				reference: `INV-${e.substring(0, 8)}`,
				description: `Automated posting for Invoice ${e}`,
				lines: c
			});
			await this.db.invoice.update({
				where: { id: e },
				data: {
					postingStatus: "POSTED",
					journalEntryId: l
				}
			});
		} catch (t) {
			throw await this.db.invoice.update({
				where: { id: e },
				data: { postingStatus: "FAILED" }
			}), t;
		}
	}
	async postPaymentToGL(e) {
		let t = await this.db.payment.findUnique({
			where: { id: e },
			include: { invoice: { include: { Lease: { include: {
				property: !0,
				tenant: !0
			} } } } }
		});
		if (!t) throw Error(`Payment ${e} not found`);
		if (!t.invoice) throw Error(`Payment ${e} is orphaned (no linked invoice)`);
		if (t.postingStatus === "POSTED") {
			console.log(`[Finance] Payment ${e} is already posted. Skipping.`);
			return;
		}
		let n = t.invoice, r = n.organizationId ?? n.Lease?.property?.organizationId, i = n.propertyId ?? n.Lease?.propertyId, a = n.tenantId ?? n.Lease?.tenantId;
		if (!r) throw Error(`Payment ${e} has no organization assigned`);
		if (!i) throw Error(`Payment ${e} has no property assigned`);
		if (!a) throw Error(`Payment ${e} has no tenant assigned`);
		let o = new Y(t.amount);
		try {
			let n = [{
				accountCode: Q.CASH_IN_BANK,
				debit: o,
				credit: new Y(0),
				propertyId: i,
				tenantId: a
			}, {
				accountCode: Q.ACCOUNTS_RECEIVABLE,
				debit: new Y(0),
				credit: o,
				propertyId: i,
				tenantId: a
			}], { journalEntryId: s } = await this.journalService.postJournalEntry({
				organizationId: r,
				date: t.paidOn ?? /* @__PURE__ */ new Date(),
				reference: `PAY-${e.substring(0, 8)}`,
				description: `Payment received for Invoice ${t.invoiceId}`,
				lines: n
			});
			await this.db.payment.update({
				where: { id: e },
				data: {
					postingStatus: "POSTED",
					journalEntryId: s
				}
			});
		} catch (t) {
			throw await this.db.payment.update({
				where: { id: e },
				data: { postingStatus: "FAILED" }
			}), t;
		}
	}
	async billOrganizationForService(e) {
		let t = e.leaseId ?? (await this.db.lease.findFirst({
			where: { property: { organizationId: e.organizationId } },
			select: { id: !0 }
		}))?.id;
		if (!t) throw Error(`Cannot create service invoice: no lease found for organization ${e.organizationId}`);
		let n = await this.db.invoice.create({ data: {
			leaseId: t,
			type: "MAINTENANCE",
			totalAmount: e.amount,
			balance: e.amount,
			dueDate: new Date(Date.now() + 720 * 60 * 60 * 1e3),
			status: "PENDING",
			InvoiceItem: { create: [{
				description: `${e.referenceType}:${e.referenceId} - ${e.description}`,
				amount: e.amount
			}] }
		} }), r = new Y(e.amount), i = e.serviceType === "DSS_SIGNING" ? Q.DOCUMENT_SIGNING_INCOME : Q.MAINTENANCE_INCOME;
		try {
			let t = [{
				accountCode: Q.ACCOUNTS_RECEIVABLE,
				debit: r,
				credit: new Y(0)
			}, {
				accountCode: i,
				debit: new Y(0),
				credit: r
			}], { journalEntryId: a } = await this.journalService.postJournalEntry({
				organizationId: e.organizationId,
				date: /* @__PURE__ */ new Date(),
				reference: `SVC-${n.id.substring(0, 8)}`,
				description: `Service fee: ${e.description}`,
				lines: t
			});
			return await this.db.invoice.update({
				where: { id: n.id },
				data: {
					postingStatus: "POSTED",
					journalEntryId: a
				}
			}), {
				invoiceId: n.id,
				journalEntryId: a
			};
		} catch (e) {
			throw await this.db.invoice.update({
				where: { id: n.id },
				data: { postingStatus: "FAILED" }
			}), e;
		}
	}
	async postExpenseToGL(e) {
		let t = await this.db.vendorInvoice.findUnique({
			where: { id: e },
			include: { vendor: !0 }
		});
		if (!t) throw Error("Vendor invoice not found");
		if (t.postingStatus === "POSTED") {
			console.log(`[Finance] Vendor invoice ${e} is already posted. Skipping.`);
			return;
		}
		let { organizationId: n, propertyId: r, amount: i, category: a, vendor: o } = t;
		if (!n) throw Error(`Vendor invoice ${e} has no organization assigned`);
		if (!r) throw Error(`Vendor invoice ${e} has no property assigned`);
		let s = new Y(i), c = a === "UTILITY" ? Q.UTILITY_EXPENSE : a === "TAX" ? "5300" : a === "MANAGEMENT_FEE" ? Q.MANAGEMENT_FEES : Q.MAINTENANCE_EXPENSE;
		try {
			let i = [{
				accountCode: c,
				debit: s,
				credit: new Y(0),
				propertyId: r
			}, {
				accountCode: Q.ACCOUNTS_PAYABLE,
				debit: new Y(0),
				credit: s,
				propertyId: r
			}], { journalEntryId: a } = await this.journalService.postJournalEntry({
				organizationId: n,
				date: t.createdAt || /* @__PURE__ */ new Date(),
				reference: `VEND-${e.substring(0, 8)}`,
				description: `Vendor Bill: ${o.companyName} - ${t.description || "Expense"}`,
				lines: i
			});
			await this.db.vendorInvoice.update({
				where: { id: e },
				data: {
					postingStatus: "POSTED",
					journalEntryId: a
				}
			});
		} catch (t) {
			throw await this.db.vendorInvoice.update({
				where: { id: e },
				data: { postingStatus: "FAILED" }
			}), t;
		}
	}
}, Ba = new za(e, new La(e)), Va = /* @__PURE__ */ s(((e, t) => {
	var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, o = (e) => {
		throw TypeError(e);
	}, s = (e, t) => {
		for (var r in t) n(e, r, {
			get: t[r],
			enumerable: !0
		});
	}, c = (e, t, o, s) => {
		if (t && typeof t == "object" || typeof t == "function") for (let c of i(t)) !a.call(e, c) && c !== o && n(e, c, {
			get: () => t[c],
			enumerable: !(s = r(t, c)) || s.enumerable
		});
		return e;
	}, l = (e) => c(n({}, "__esModule", { value: !0 }), e), u = (e, t, n) => t.has(e) ? o("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), d = {};
	s(d, {
		Decimal: () => Rt,
		Public: () => f,
		getRuntime: () => le,
		makeStrictEnum: () => w,
		objectEnumValues: () => ee
	}), t.exports = l(d);
	var f = {};
	s(f, { validator: () => p });
	function p(...e) {
		return (e) => e;
	}
	var m = Symbol(), h = /* @__PURE__ */ new WeakMap(), g = class {
		constructor(e) {
			e === m ? h.set(this, `Prisma.${this._getName()}`) : h.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
		}
		_getName() {
			return this.constructor.name;
		}
		toString() {
			return h.get(this);
		}
	}, _ = class extends g {
		_getNamespace() {
			return "NullTypes";
		}
	}, v, y = class extends _ {
		constructor() {
			super(...arguments), u(this, v);
		}
	};
	v = /* @__PURE__ */ new WeakMap(), te(y, "DbNull");
	var b, x = class extends _ {
		constructor() {
			super(...arguments), u(this, b);
		}
	};
	b = /* @__PURE__ */ new WeakMap(), te(x, "JsonNull");
	var S, C = class extends _ {
		constructor() {
			super(...arguments), u(this, S);
		}
	};
	S = /* @__PURE__ */ new WeakMap(), te(C, "AnyNull");
	var ee = {
		classes: {
			DbNull: y,
			JsonNull: x,
			AnyNull: C
		},
		instances: {
			DbNull: new y(m),
			JsonNull: new x(m),
			AnyNull: new C(m)
		}
	};
	function te(e, t) {
		Object.defineProperty(e, "name", {
			value: t,
			configurable: !0
		});
	}
	var ne = new Set([
		"toJSON",
		"$$typeof",
		"asymmetricMatch",
		Symbol.iterator,
		Symbol.toStringTag,
		Symbol.isConcatSpreadable,
		Symbol.toPrimitive
	]);
	function w(e) {
		return new Proxy(e, { get(e, t) {
			if (t in e) return e[t];
			if (!ne.has(t)) throw TypeError(`Invalid enum value: ${String(t)}`);
		} });
	}
	var re = () => globalThis.process?.release?.name === "node", ie = () => {
		var e;
		return !!globalThis.Bun || !!((e = globalThis.process?.versions) != null && e.bun);
	}, ae = () => !!globalThis.Deno, T = () => typeof globalThis.Netlify == "object", E = () => typeof globalThis.EdgeRuntime == "object", oe = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function se() {
		return [
			[T, "netlify"],
			[E, "edge-light"],
			[oe, "workerd"],
			[ae, "deno"],
			[ie, "bun"],
			[re, "node"]
		].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
	}
	var ce = {
		node: "Node.js",
		workerd: "Cloudflare Workers",
		deno: "Deno and Deno Deploy",
		netlify: "Netlify Edge Functions",
		"edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
	};
	function le() {
		let e = se();
		return {
			id: e,
			prettyName: ce[e] || e,
			isEdge: [
				"workerd",
				"deno",
				"netlify",
				"edge-light"
			].includes(e)
		};
	}
	var ue = 9e15, de = 1e9, fe = "0123456789abcdef", pe = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", me = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", he = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -ue,
		maxE: ue,
		crypto: !1
	}, ge, _e, D = !0, ve = "[DecimalError] ", ye = ve + "Invalid argument: ", O = ve + "Precision limit exceeded", be = ve + "crypto unavailable", xe = "[object Decimal]", k = Math.floor, A = Math.pow, Se = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ce = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, we = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Te = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Ee = 1e7, j = 7, De = 9007199254740991, Oe = pe.length - 1, ke = me.length - 1, M = { toStringTag: xe };
	M.absoluteValue = M.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), I(e);
	}, M.ceil = function() {
		return I(new this.constructor(this), this.e + 1, 2);
	}, M.clampedTo = M.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(ye + t);
		return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
	}, M.comparedTo = M.cmp = function(e) {
		var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
		if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
		if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
		if (c !== l) return c;
		if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
		for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
		return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
	}, M.cosine = M.cos = function() {
		var e, t, n = this, r = n.constructor;
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + j, r.rounding = 1, n = Me(r, Xe(r, n)), r.precision = e, r.rounding = t, I(_e == 2 || _e == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, M.cubeRoot = M.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (D = !1, a = u.s * A(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = N(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = A(n, 1 / 3), e = k((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = F(l.plus(u).times(s), l.plus(c), o + 2, 1), N(s.d).slice(0, o) === (n = N(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (I(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (I(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return D = !0, I(r, e, d.rounding, t);
	}, M.decimalPlaces = M.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - k(this.e / j)) * j, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
			n < 0 && (n = 0);
		}
		return n;
	}, M.dividedBy = M.div = function(e) {
		return F(this, new this.constructor(e));
	}, M.dividedToIntegerBy = M.divToInt = function(e) {
		var t = this, n = t.constructor;
		return I(F(t, new n(e), 0, 1, 1), n.precision, n.rounding);
	}, M.equals = M.eq = function(e) {
		return this.cmp(e) === 0;
	}, M.floor = function() {
		return I(new this.constructor(this), this.e + 1, 3);
	}, M.greaterThan = M.gt = function(e) {
		return this.cmp(e) > 0;
	}, M.greaterThanOrEqualTo = M.gte = function(e) {
		var t = this.cmp(e);
		return t == 1 || t === 0;
	}, M.hyperbolicCosine = M.cosh = function() {
		var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
		if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
		if (a.isZero()) return s;
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Ye(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Je(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return I(a, o.precision = n, o.rounding = r, !0);
	}, M.hyperbolicSine = M.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = Je(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / Ye(5, e)), i = Je(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, I(i, t, n, !0);
	}, M.hyperbolicTangent = M.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, F(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, M.inverseCosine = M.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? Ie(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? Ie(t, r, i) : new t(0) : new t(NaN);
	}, M.inverseHyperbolicCosine = M.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, D = !1, n = n.times(n).minus(1).sqrt().plus(n), D = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, M.inverseHyperbolicSine = M.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, D = !1, n = n.times(n).plus(1).sqrt().plus(n), D = !0, r.precision = e, r.rounding = t, n.ln());
	}, M.inverseHyperbolicTangent = M.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? I(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = F(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, M.inverseSine = M.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = Ie(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, M.inverseTangent = M.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= ke) return o = Ie(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= ke) return o = Ie(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / j + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (D = !1, t = Math.ceil(s / j), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), D = !0, I(o, u.precision = d, u.rounding = f, !0);
	}, M.isFinite = function() {
		return !!this.d;
	}, M.isInteger = M.isInt = function() {
		return !!this.d && k(this.e / j) > this.d.length - 2;
	}, M.isNaN = function() {
		return !this.s;
	}, M.isNegative = M.isNeg = function() {
		return this.s < 0;
	}, M.isPositive = M.isPos = function() {
		return this.s > 0;
	}, M.isZero = function() {
		return !!this.d && this.d[0] === 0;
	}, M.lessThan = M.lt = function(e) {
		return this.cmp(e) < 0;
	}, M.lessThanOrEqualTo = M.lte = function(e) {
		return this.cmp(e) < 1;
	}, M.logarithm = M.log = function(e) {
		var t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding, p = 5;
		if (e == null) e = new u(10), t = !0;
		else {
			if (e = new u(e), n = e.d, e.s < 0 || !n || !n[0] || e.eq(1)) return new u(NaN);
			t = e.eq(10);
		}
		if (n = l.d, l.s < 0 || !n || !n[0] || l.eq(1)) return new u(n && !n[0] ? -Infinity : l.s == 1 ? n ? 0 : Infinity : NaN);
		if (t) if (n.length > 1) a = !0;
		else {
			for (i = n[0]; i % 10 == 0;) i /= 10;
			a = i !== 1;
		}
		if (D = !1, s = d + p, o = Ue(l, s), r = t ? Fe(u, s + 10) : Ue(e, s), c = F(o, r, s, 1), Ae(c.d, i = d, f)) do
			if (s += 10, o = Ue(l, s), r = t ? Fe(u, s + 10) : Ue(e, s), c = F(o, r, s, 1), !a) {
				+N(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = I(c, d + 1, 0));
				break;
			}
		while (Ae(c.d, i += 10, f));
		return D = !0, I(c, d, f);
	}, M.minus = M.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return D ? I(e, s, c) : e;
		}
		if (n = k(e.e / j), u = k(p.e / j), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / j), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
			t.reverse();
		} else {
			for (r = l.length, o = f.length, d = r < o, d && (o = r), r = 0; r < o; r++) if (l[r] != f[r]) {
				d = l[r] < f[r];
				break;
			}
			a = 0;
		}
		for (d && (t = l, l = f, f = t, e.s = -e.s), o = l.length, r = f.length - o; r > 0; --r) l[o++] = 0;
		for (r = f.length; r > a;) {
			if (l[--r] < f[r]) {
				for (i = r; i && l[--i] === 0;) l[i] = Ee - 1;
				--l[i], l[r] += Ee;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = Pe(l, n), D ? I(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, M.modulo = M.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? I(new r(n), r.precision, r.rounding) : (D = !1, r.modulo == 9 ? (t = F(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = F(n, e, 0, r.modulo, 1), t = t.times(e), D = !0, n.minus(t));
	}, M.naturalExponential = M.exp = function() {
		return He(this);
	}, M.naturalLogarithm = M.ln = function() {
		return Ue(this);
	}, M.negated = M.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, I(e);
	}, M.plus = M.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), D ? I(e, s, c) : e;
		if (a = k(d.e / j), r = k(e.e / j), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / j), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / Ee | 0, l[i] %= Ee;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = Pe(l, r), D ? I(e, s, c) : e;
	}, M.precision = M.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ye + e);
		return n.d ? (t = Le(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, M.round = function() {
		var e = this, t = e.constructor;
		return I(new t(e), e.e + 1, t.rounding);
	}, M.sine = M.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + j, r.rounding = 1, n = qe(r, Xe(r, n)), r.precision = e, r.rounding = t, I(_e > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, M.squareRoot = M.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (D = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = N(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = k((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(F(o, a, n + 2, 1)).times(.5), N(a.d).slice(0, n) === (t = N(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (I(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (I(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return D = !0, I(r, c, u.rounding, e);
	}, M.tangent = M.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = F(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, I(_e == 2 || _e == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, M.times = M.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = k(u.e / j) + k(e.e / j), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % Ee | 0, t = s / Ee | 0;
			a[i] = (a[i] + t) % Ee | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = Pe(a, n), D ? I(e, d.precision, d.rounding) : e;
	}, M.toBinary = function(e, t) {
		return Ze(this, 2, e, t);
	}, M.toDecimalPlaces = M.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (P(e, 0, de), t === void 0 ? t = r.rounding : P(t, 0, 8), I(n, e + n.e + 1, t));
	}, M.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Ne(r, !0) : (P(e, 0, de), t === void 0 ? t = i.rounding : P(t, 0, 8), r = I(new i(r), e + 1, t), n = Ne(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, M.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = Ne(i) : (P(e, 0, de), t === void 0 ? t = a.rounding : P(t, 0, 8), r = I(new a(i), e + i.e + 1, t), n = Ne(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, M.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Le(m) - p.e - 1, o = a % j, t.d[0] = A(10, o < 0 ? j + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(ye + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (D = !1, s = new h(N(m)), u = h.precision, h.precision = a = m.length * j * 2; d = F(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = F(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = F(l, r, a, 1).minus(p).abs().cmp(F(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, D = !0, f;
	}, M.toHexadecimal = M.toHex = function(e, t) {
		return Ze(this, 16, e, t);
	}, M.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : P(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (D = !1, n = F(n, e, 0, t, 1).times(e), D = !0, I(n)) : (e.s = n.s, n = e), n;
	}, M.toNumber = function() {
		return +this;
	}, M.toOctal = function(e, t) {
		return Ze(this, 8, e, t);
	}, M.toPower = M.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(A(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return I(s, r, a);
		if (t = k(e.e / j), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= De) return i = ze(c, s, n, r), e.s < 0 ? new c(1).div(i) : I(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = A(+s, l), t = n == 0 || !isFinite(n) ? k(l * (Math.log("0." + N(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (D = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = He(e.times(Ue(s, r + n)), r), i.d && (i = I(i, r + 5, 1), Ae(i.d, r, a) && (t = r + 10, i = I(He(e.times(Ue(s, t + n)), t), t + 5, 1), +N(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = I(i, r + 1, 0)))), i.s = o, D = !0, c.rounding = a, I(i, r, a));
	}, M.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Ne(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (P(e, 1, de), t === void 0 ? t = i.rounding : P(t, 0, 8), r = I(new i(r), e, t), n = Ne(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, M.toSignificantDigits = M.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (P(e, 1, de), t === void 0 ? t = r.rounding : P(t, 0, 8)), I(new r(n), e, t);
	}, M.toString = function() {
		var e = this, t = e.constructor, n = Ne(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, M.truncated = M.trunc = function() {
		return I(new this.constructor(this), this.e + 1, 1);
	}, M.valueOf = M.toJSON = function() {
		var e = this, t = e.constructor, n = Ne(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function N(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = j - r.length, n && (a += Re(n)), a += r;
			o = e[t], r = o + "", n = j - r.length, n && (a += Re(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function P(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(ye + e);
	}
	function Ae(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += j, i = 0) : (i = Math.ceil((t + 1) / j), t %= j), a = A(10, j - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == A(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == A(10, t - 3) - 1, o;
	}
	function je(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += fe.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function Me(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Ye(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Je(e, 1, t.times(i), new e(1));
		for (var a = n; a--;) {
			var o = t.times(t);
			t = o.times(o).minus(o).times(8).plus(1);
		}
		return e.precision -= n, t;
	}
	var F = function() {
		function e(e, t, n) {
			var r, i = 0, a = e.length;
			for (e = e.slice(); a--;) r = e[a] * t + i, e[a] = r % n | 0, i = r / n | 0;
			return i && e.unshift(i), e;
		}
		function t(e, t, n, r) {
			var i, a;
			if (n != r) a = n > r ? 1 : -1;
			else for (i = a = 0; i < n; i++) if (e[i] != t[i]) {
				a = e[i] > t[i] ? 1 : -1;
				break;
			}
			return a;
		}
		function n(e, t, n, r) {
			for (var i = 0; n--;) e[n] -= i, i = +(e[n] < t[n]), e[n] = i * r + e[n] - t[n];
			for (; !e[0] && e.length > 1;) e.shift();
		}
		return function(r, i, a, o, s, c) {
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, ee, te, ne, w, re, ie = r.constructor, ae = r.s == i.s ? 1 : -1, T = r.d, E = i.d;
			if (!T || !T[0] || !E || !E[0]) return new ie(!r.s || !i.s || (T ? E && T[0] == E[0] : !E) ? NaN : T && T[0] == 0 || !E ? ae * 0 : ae / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = Ee, p = j, u = k(r.e / p) - k(i.e / p)), w = E.length, te = T.length, _ = new ie(ae), v = _.d = [], d = 0; E[d] == (T[d] || 0); d++);
			if (E[d] > (T[d] || 0) && u--, a == null ? (S = a = ie.precision, o = ie.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, w == 1) {
					for (f = 0, E = E[0], S++; (d < te || f) && S--; d++) C = f * c + (T[d] || 0), v[d] = C / E | 0, f = C % E | 0;
					m = f || d < te;
				} else {
					for (f = c / (E[0] + 1) | 0, f > 1 && (E = e(E, f, c), T = e(T, f, c), w = E.length, te = T.length), ee = w, y = T.slice(0, w), b = y.length; b < w;) y[b++] = 0;
					re = E.slice(), re.unshift(0), ne = E[0], E[1] >= c / 2 && ++ne;
					do
						f = 0, l = t(E, y, w, b), l < 0 ? (x = y[0], w != b && (x = x * c + (y[1] || 0)), f = x / ne | 0, f > 1 ? (f >= c && (f = c - 1), h = e(E, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, w < g ? re : E, g, c))) : (f == 0 && (l = f = 1), h = E.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(E, y, w, b), l < 1 && (f++, n(y, w < b ? re : E, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = T[ee] || 0 : (y = [T[ee]], b = 1);
					while ((ee++ < te || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, ge = m;
			else {
				for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
				_.e = d + u * p - 1, I(_, s ? a + _.e + 1 : a, o, m);
			}
			return _;
		};
	}();
	function I(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor;
		e: if (t != null) {
			if (d = e.d, !d) return e;
			for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
			if (a = t - i, a < 0) a += j, o = t, u = d[f = 0], c = u / A(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / j), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= j, o = a - j + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= j, o = a - j + i, c = o < 0 ? 0 : u / A(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % A(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / A(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = A(10, (j - t % j) % j), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = A(10, j - a), d[f] = o > 0 ? (u / A(10, i - o) % A(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == Ee && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != Ee) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return D && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function Ne(e, t, n) {
		if (!e.isFinite()) return We(e);
		var r, i = e.e, a = N(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Re(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Re(-i - 1) + a, n && (r = n - o) > 0 && (a += Re(r))) : i >= o ? (a += Re(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Re(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Re(r))), a;
	}
	function Pe(e, t) {
		var n = e[0];
		for (t *= j; n >= 10; n /= 10) t++;
		return t;
	}
	function Fe(e, t, n) {
		if (t > Oe) throw D = !0, n && (e.precision = n), Error(O);
		return I(new e(pe), t, 1, !0);
	}
	function Ie(e, t, n) {
		if (t > ke) throw Error(O);
		return I(new e(me), t, n, !0);
	}
	function Le(e) {
		var t = e.length - 1, n = t * j + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function Re(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function ze(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / j + 4);
		for (D = !1;;) {
			if (n % 2 && (a = a.times(t), Qe(a.d, o) && (i = !0)), n = k(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), Qe(t.d, o);
		}
		return D = !0, a;
	}
	function Be(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function Ve(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function He(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (D = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(A(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = I(a.times(e), c, 1), n = n.times(++u), s = o.plus(F(a, n, c, 1)), N(s.d).slice(0, c) === N(o.d).slice(0, c)) {
				for (i = d; i--;) o = I(o.times(o), c, 1);
				if (t == null) if (l < 3 && Ae(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return I(o, f.precision = m, p, D = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function Ue(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (D = !1, u = y) : u = t, _.precision = u += m, n = N(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = N(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Fe(_, u + 2, y).times(a + ""), h = Ue(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? I(h, y, v, D = !0) : h;
		for (d = h, c = o = h = F(h.minus(1), h.plus(1), u, 1), f = I(h.times(h), u, 1), i = 3;;) {
			if (o = I(o.times(f), u, 1), l = c.plus(F(o, new _(i), u, 1)), N(l.d).slice(0, u) === N(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Fe(_, u + 2, y).times(a + ""))), c = F(c, new _(p), u, 1), t == null) if (Ae(c.d, u - m, v, s)) _.precision = u += m, l = o = h = F(d.minus(1), d.plus(1), u, 1), f = I(h.times(h), u, 1), i = s = 1;
			else return I(c, _.precision = y, v, D = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function We(e) {
		return String(e.s * e.s / 0);
	}
	function Ge(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % j, n < 0 && (r += j), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= j; r < i;) e.d.push(+t.slice(r, r += j));
				t = t.slice(r), r = j - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), D && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function Ke(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Te.test(t)) return Ge(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (Ce.test(t)) n = 16, t = t.toLowerCase();
		else if (Se.test(t)) n = 2;
		else if (we.test(t)) n = 8;
		else throw Error(ye + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = ze(r, new r(n), a, a * 2)), l = je(t, n, Ee), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = Pe(l, u), e.d = l, D = !1, o && (e = F(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? A(2, c) : Lt.pow(2, c))), D = !0, e);
	}
	function qe(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : Je(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Ye(5, n)), t = Je(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function Je(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / j);
		for (D = !1, c = n.times(n), s = new e(r);;) {
			if (o = F(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = F(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return D = !0, o.d.length = d + 1, o;
	}
	function Ye(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Xe(e, t) {
		var n, r = t.s < 0, i = Ie(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return _e = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) _e = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return _e = Be(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			_e = Be(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Ze(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (P(n, 1, de), r === void 0 ? r = p.rounding : P(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = We(e);
		else {
			for (u = Ne(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = je(Ne(f), 10, i), f.e = f.d.length), d = je(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = F(e, f, n, r, 0, i), d = e.d, a = e.e, l = ge), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += fe.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = je(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += fe.charAt(d[o]);
					} else u = u.charAt(0) + "." + u.slice(1);
					u = u + (a < 0 ? "p" : "p+") + a;
				} else if (a < 0) {
					for (; ++a;) u = "0" + u;
					u = "0." + u;
				} else if (++a > c) for (a -= c; a--;) u += "0";
				else a < c && (u = u.slice(0, a) + "." + u.slice(a));
			}
			u = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + u;
		}
		return e.s < 0 ? "-" + u : u;
	}
	function Qe(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function $e(e) {
		return new this(e).abs();
	}
	function et(e) {
		return new this(e).acos();
	}
	function tt(e) {
		return new this(e).acosh();
	}
	function nt(e, t) {
		return new this(e).plus(t);
	}
	function rt(e) {
		return new this(e).asin();
	}
	function it(e) {
		return new this(e).asinh();
	}
	function at(e) {
		return new this(e).atan();
	}
	function L(e) {
		return new this(e).atanh();
	}
	function ot(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Ie(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Ie(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Ie(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(F(e, t, a, 1)), t = Ie(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(F(e, t, a, 1)), n;
	}
	function R(e) {
		return new this(e).cbrt();
	}
	function st(e) {
		return I(e = new this(e), e.e + 1, 2);
	}
	function ct(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function lt(e) {
		if (!e || typeof e != "object") throw Error(ve + "Object expected");
		var t, n, r, i = e.defaults === !0, a = [
			"precision",
			1,
			de,
			"rounding",
			0,
			8,
			"toExpNeg",
			-ue,
			0,
			"toExpPos",
			0,
			ue,
			"maxE",
			0,
			ue,
			"minE",
			-ue,
			0,
			"modulo",
			0,
			9
		];
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = he[n]), (r = e[n]) !== void 0) if (k(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(ye + n + ": " + r);
		if (n = "crypto", i && (this[n] = he[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(be);
		else this[n] = !1;
		else throw Error(ye + n + ": " + r);
		return this;
	}
	function ut(e) {
		return new this(e).cos();
	}
	function dt(e) {
		return new this(e).cosh();
	}
	function ft(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, z(e)) {
				a.s = e.s, D ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					D ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return Ge(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), Te.test(e) ? Ge(a, e) : Ke(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Ge(a, e.toString());
			throw Error(ye + e);
		}
		if (i.prototype = M, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = lt, i.clone = ft, i.isDecimal = z, i.abs = $e, i.acos = et, i.acosh = tt, i.add = nt, i.asin = rt, i.asinh = it, i.atan = at, i.atanh = L, i.atan2 = ot, i.cbrt = R, i.ceil = st, i.clamp = ct, i.cos = ut, i.cosh = dt, i.div = pt, i.exp = mt, i.floor = ht, i.hypot = gt, i.ln = _t, i.log = vt, i.log10 = bt, i.log2 = yt, i.max = xt, i.min = St, i.mod = Ct, i.mul = wt, i.pow = Tt, i.random = Et, i.round = Dt, i.sign = Ot, i.sin = kt, i.sinh = At, i.sqrt = jt, i.sub = Mt, i.sum = Nt, i.tan = Pt, i.tanh = Ft, i.trunc = It, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
			"precision",
			"rounding",
			"toExpNeg",
			"toExpPos",
			"maxE",
			"minE",
			"modulo",
			"crypto"
		], t = 0; t < r.length;) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
		return i.config(e), i;
	}
	function pt(e, t) {
		return new this(e).div(t);
	}
	function mt(e) {
		return new this(e).exp();
	}
	function ht(e) {
		return I(e = new this(e), e.e + 1, 3);
	}
	function gt() {
		var e, t, n = new this(0);
		for (D = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return D = !0, new this(Infinity);
			n = t;
		}
		return D = !0, n.sqrt();
	}
	function z(e) {
		return e instanceof Lt || e && e.toStringTag === xe || !1;
	}
	function _t(e) {
		return new this(e).ln();
	}
	function vt(e, t) {
		return new this(e).log(t);
	}
	function yt(e) {
		return new this(e).log(2);
	}
	function bt(e) {
		return new this(e).log(10);
	}
	function xt() {
		return Ve(this, arguments, -1);
	}
	function St() {
		return Ve(this, arguments, 1);
	}
	function Ct(e, t) {
		return new this(e).mod(t);
	}
	function wt(e, t) {
		return new this(e).mul(t);
	}
	function Tt(e, t) {
		return new this(e).pow(t);
	}
	function Et(e) {
		var t, n, r, i, a = 0, o = new this(1), s = [];
		if (e === void 0 ? e = this.precision : P(e, 1, de), r = Math.ceil(e / j), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(be);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= j, r && e && (i = A(10, j - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= j) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < j && (n -= j - r);
		}
		return o.e = n, o.d = s, o;
	}
	function Dt(e) {
		return I(e = new this(e), e.e + 1, this.rounding);
	}
	function Ot(e) {
		return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
	}
	function kt(e) {
		return new this(e).sin();
	}
	function At(e) {
		return new this(e).sinh();
	}
	function jt(e) {
		return new this(e).sqrt();
	}
	function Mt(e, t) {
		return new this(e).sub(t);
	}
	function Nt() {
		var e = 0, t = arguments, n = new this(t[e]);
		for (D = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return D = !0, I(n, this.precision, this.rounding);
	}
	function Pt(e) {
		return new this(e).tan();
	}
	function Ft(e) {
		return new this(e).tanh();
	}
	function It(e) {
		return I(e = new this(e), e.e + 1, 1);
	}
	M[Symbol.for("nodejs.util.inspect.custom")] = M.toString, M[Symbol.toStringTag] = "Decimal";
	var Lt = M.constructor = ft(he);
	pe = new Lt(pe), me = new Lt(me);
	var Rt = Lt;
})), Ha = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var { Decimal: t, objectEnumValues: n, makeStrictEnum: r, Public: i, getRuntime: a, skip: o } = Va(), s = {};
	e.Prisma = s, e.$Enums = {}, s.prismaVersion = {
		client: "6.19.3",
		engine: "c2990dca591cba766e3b7ef5d9e8a84796e47ab7"
	}, s.PrismaClientKnownRequestError = () => {
		let e = a().prettyName;
		throw Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.PrismaClientUnknownRequestError = () => {
		let e = a().prettyName;
		throw Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.PrismaClientRustPanicError = () => {
		let e = a().prettyName;
		throw Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.PrismaClientInitializationError = () => {
		let e = a().prettyName;
		throw Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.PrismaClientValidationError = () => {
		let e = a().prettyName;
		throw Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.Decimal = t, s.sql = () => {
		let e = a().prettyName;
		throw Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.empty = () => {
		let e = a().prettyName;
		throw Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.join = () => {
		let e = a().prettyName;
		throw Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.raw = () => {
		let e = a().prettyName;
		throw Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.validator = i.validator, s.getExtensionContext = () => {
		let e = a().prettyName;
		throw Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.defineExtension = () => {
		let e = a().prettyName;
		throw Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${e}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
	}, s.DbNull = n.instances.DbNull, s.JsonNull = n.instances.JsonNull, s.AnyNull = n.instances.AnyNull, s.NullTypes = {
		DbNull: n.classes.DbNull,
		JsonNull: n.classes.JsonNull,
		AnyNull: n.classes.AnyNull
	}, e.Prisma.TransactionIsolationLevel = r({
		ReadUncommitted: "ReadUncommitted",
		ReadCommitted: "ReadCommitted",
		RepeatableRead: "RepeatableRead",
		Serializable: "Serializable"
	}), e.Prisma.OrganizationScalarFieldEnum = {
		id: "id",
		name: "name",
		slug: "slug",
		logoUrl: "logoUrl",
		website: "website",
		phone: "phone",
		address: "address",
		isActive: "isActive",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		planId: "planId",
		paystackSubaccountCode: "paystackSubaccountCode",
		region: "region",
		stripeConnectId: "stripeConnectId",
		irsEinEncrypted: "irsEinEncrypted",
		stateTaxIds: "stateTaxIds"
	}, e.Prisma.ConnectedBankAccountScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		plaidAccessToken: "plaidAccessToken",
		plaidItemId: "plaidItemId",
		institutionName: "institutionName",
		accountName: "accountName",
		accountType: "accountType",
		accountSubtype: "accountSubtype",
		mask: "mask",
		status: "status",
		createdAt: "createdAt"
	}, e.Prisma.BankTransactionScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		plaidTransactionId: "plaidTransactionId",
		accountId: "accountId",
		amount: "amount",
		date: "date",
		merchantName: "merchantName",
		description: "description",
		status: "status",
		matchedJournalId: "matchedJournalId",
		createdAt: "createdAt"
	}, e.Prisma.OrganizationWebhookScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		url: "url",
		secret: "secret",
		events: "events",
		isActive: "isActive",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.SmsNotificationScalarFieldEnum = {
		id: "id",
		userId: "userId",
		phone: "phone",
		message: "message",
		channel: "channel",
		category: "category",
		status: "status",
		scheduledFor: "scheduledFor",
		sentAt: "sentAt",
		deliveredAt: "deliveredAt",
		errorMessage: "errorMessage",
		costCents: "costCents",
		carrier: "carrier",
		reference: "reference",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.NotificationPreferenceScalarFieldEnum = {
		id: "id",
		userId: "userId",
		channel: "channel",
		category: "category",
		enabled: "enabled",
		thresholdHours: "thresholdHours",
		quietStartHour: "quietStartHour",
		quietEndHour: "quietEndHour",
		quietDays: "quietDays",
		maxDailyAlerts: "maxDailyAlerts",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.UserScalarFieldEnum = {
		id: "id",
		email: "email",
		passwordHash: "passwordHash",
		firstName: "firstName",
		lastName: "lastName",
		phone: "phone",
		phoneVerified: "phoneVerified",
		avatarUrl: "avatarUrl",
		status: "status",
		lastLoginAt: "lastLoginAt",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		emailVerified: "emailVerified",
		verificationToken: "verificationToken",
		consentMarketing: "consentMarketing",
		consentNotifications: "consentNotifications",
		consentTransactional: "consentTransactional",
		kycStatus: "kycStatus",
		paystackCustomerCode: "paystackCustomerCode",
		plaidAccessToken: "plaidAccessToken",
		region: "region",
		stripeCustomerId: "stripeCustomerId",
		twoFactorEnabled: "twoFactorEnabled"
	}, e.Prisma.OrganizationUserScalarFieldEnum = {
		id: "id",
		userId: "userId",
		organizationId: "organizationId",
		role: "role",
		createdAt: "createdAt"
	}, e.Prisma.OtpScalarFieldEnum = {
		id: "id",
		code: "code",
		phone: "phone",
		userId: "userId",
		expiresAt: "expiresAt",
		type: "type",
		createdAt: "createdAt"
	}, e.Prisma.VendorTaxInfoScalarFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		taxId: "taxId",
		taxIdEncrypted: "taxIdEncrypted",
		isTaxExempt: "isTaxExempt",
		exemptionCertificateUrl: "exemptionCertificateUrl",
		stateOfIncorporation: "stateOfIncorporation",
		incorporationDate: "incorporationDate",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.VendorScalarFieldEnum = {
		id: "id",
		name: "name",
		businessType: "businessType",
		organizationId: "organizationId",
		userId: "userId",
		companyName: "companyName",
		serviceType: "serviceType",
		phone: "phone",
		email: "email",
		isActive: "isActive",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.VendorInvoiceScalarFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		organizationId: "organizationId",
		propertyId: "propertyId",
		amount: "amount",
		category: "category",
		description: "description",
		dueDate: "dueDate",
		postingStatus: "postingStatus",
		journalEntryId: "journalEntryId",
		createdAt: "createdAt"
	}, e.Prisma.InviteScalarFieldEnum = {
		id: "id",
		email: "email",
		token: "token",
		role: "role",
		organizationId: "organizationId",
		invitedById: "invitedById",
		expiresAt: "expiresAt",
		accepted: "accepted",
		createdAt: "createdAt",
		leaseId: "leaseId"
	}, e.Prisma.PasswordResetTokenScalarFieldEnum = {
		id: "id",
		token: "token",
		expiresAt: "expiresAt",
		createdAt: "createdAt",
		userId: "userId"
	}, e.Prisma.FinancialEntityScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		taxIdEncrypted: "taxIdEncrypted"
	}, e.Prisma.AccountScalarFieldEnum = {
		id: "id",
		entityId: "entityId",
		code: "code",
		name: "name",
		type: "type",
		isSystem: "isSystem"
	}, e.Prisma.JournalEntryScalarFieldEnum = {
		id: "id",
		entityId: "entityId",
		transactionDate: "transactionDate",
		postedAt: "postedAt",
		description: "description",
		reference: "reference",
		isLocked: "isLocked"
	}, e.Prisma.JournalLineScalarFieldEnum = {
		id: "id",
		journalEntryId: "journalEntryId",
		accountId: "accountId",
		description: "description",
		debit: "debit",
		credit: "credit",
		propertyId: "propertyId",
		unitId: "unitId",
		leaseId: "leaseId",
		tenantId: "tenantId",
		vendorId: "vendorId"
	}, e.Prisma.FinancialSnapshotScalarFieldEnum = {
		id: "id",
		entityId: "entityId",
		periodStart: "periodStart",
		periodEnd: "periodEnd",
		accountId: "accountId",
		startBalance: "startBalance",
		netChange: "netChange",
		endBalance: "endBalance",
		calculatedAt: "calculatedAt"
	}, e.Prisma.UtilityBillScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		providerName: "providerName",
		totalAmount: "totalAmount",
		billDate: "billDate",
		dueDate: "dueDate",
		importMethod: "importMethod",
		ocrConfidence: "ocrConfidence",
		status: "status",
		journalEntryId: "journalEntryId",
		blockchainHash: "blockchainHash",
		createdAt: "createdAt",
		fileUrl: "fileUrl",
		splitMethod: "splitMethod",
		updatedAt: "updatedAt",
		consumption: "consumption",
		periodEnd: "periodEnd",
		periodStart: "periodStart",
		rate: "rate",
		utilityId: "utilityId",
		approvedAt: "approvedAt",
		approvedBy: "approvedBy",
		rawOcrData: "rawOcrData"
	}, e.Prisma.UtilityAllocationScalarFieldEnum = {
		id: "id",
		utilityBillId: "utilityBillId",
		unitId: "unitId",
		amount: "amount",
		invoiceId: "invoiceId",
		percentage: "percentage",
		blockchainHash: "blockchainHash",
		createdAt: "createdAt",
		paidAmount: "paidAmount",
		status: "status",
		tenantId: "tenantId",
		leaseId: "leaseId",
		splitMethod: "splitMethod",
		aiConfidenceScore: "aiConfidenceScore",
		anomalyFlag: "anomalyFlag",
		allocationExplanation: "allocationExplanation"
	}, e.Prisma.UtilityPaymentScalarFieldEnum = {
		id: "id",
		allocationId: "allocationId",
		payerId: "payerId",
		amount: "amount",
		method: "method",
		reference: "reference",
		status: "status",
		reconciliationStatus: "reconciliationStatus",
		blockchainHash: "blockchainHash",
		createdAt: "createdAt"
	}, e.Prisma.UtilityDisputeScalarFieldEnum = {
		id: "id",
		allocationId: "allocationId",
		raisedBy: "raisedBy",
		reason: "reason",
		urgencyScore: "urgencyScore",
		status: "status",
		resolutionNotes: "resolutionNotes",
		createdAt: "createdAt",
		resolvedAt: "resolvedAt"
	}, e.Prisma.PropertyScalarFieldEnum = {
		id: "id",
		listingId: "listingId",
		managerId: "managerId",
		organizationId: "organizationId",
		propertyTypeId: "propertyTypeId",
		locationId: "locationId",
		city: "city",
		address: "address",
		amenities: "amenities",
		isFurnished: "isFurnished",
		availabilityStatus: "availabilityStatus",
		createdAt: "createdAt",
		name: "name",
		contactEmail: "contactEmail",
		contactPhone: "contactPhone",
		country: "country",
		zipCode: "zipCode",
		latitude: "latitude",
		longitude: "longitude"
	}, e.Prisma.PropertyImageScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		url: "url",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.ApartmentComplexDetailScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		buildingName: "buildingName",
		totalFloors: "totalFloors",
		totalUnits: "totalUnits",
		bathrooms: "bathrooms",
		bedrooms: "bedrooms",
		size: "size",
		unitNumber: "unitNumber",
		zoning: "zoning"
	}, e.Prisma.HouseDetailScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		numberOfFloors: "numberOfFloors",
		bathrooms: "bathrooms",
		bedrooms: "bedrooms",
		size: "size",
		totalUnits: "totalUnits",
		houseName: "houseName",
		zoning: "zoning"
	}, e.Prisma.CondoDetailScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		buildingName: "buildingName",
		floorNumber: "floorNumber",
		unitNumber: "unitNumber",
		totalFloorsInBuilding: "totalFloorsInBuilding",
		bedrooms: "bedrooms",
		bathrooms: "bathrooms",
		size: "size",
		hoaFees: "hoaFees",
		hasBalcony: "hasBalcony",
		amenities: "amenities",
		zoning: "zoning"
	}, e.Prisma.LandDetailScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		lotSize: "lotSize",
		zoning: "zoning",
		isSubdivided: "isSubdivided",
		hasUtilities: "hasUtilities",
		topography: "topography",
		soilType: "soilType",
		accessRoad: "accessRoad",
		landUse: "landUse"
	}, e.Prisma.TownhouseDetailScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		townhouseName: "townhouseName",
		numberOfFloors: "numberOfFloors",
		bedrooms: "bedrooms",
		bathrooms: "bathrooms",
		size: "size",
		unitNumber: "unitNumber",
		endUnit: "endUnit",
		hasGarage: "hasGarage",
		garageSpaces: "garageSpaces",
		hasBackyard: "hasBackyard",
		backyardSize: "backyardSize",
		hoaFees: "hoaFees",
		zoning: "zoning"
	}, e.Prisma.UnitScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		complexDetailId: "complexDetailId",
		listingId: "listingId",
		unitNumber: "unitNumber",
		floorNumber: "floorNumber",
		bedrooms: "bedrooms",
		bathrooms: "bathrooms",
		isOccupied: "isOccupied",
		rentAmount: "rentAmount",
		createdAt: "createdAt",
		houseDetailId: "houseDetailId",
		unitName: "unitName",
		currency: "currency",
		squareFootage: "squareFootage"
	}, e.Prisma.ApplianceScalarFieldEnum = {
		id: "id",
		createdAt: "createdAt",
		description: "description",
		name: "name"
	}, e.Prisma.TenantApplicationScalarFieldEnum = {
		id: "id",
		fullName: "fullName",
		email: "email",
		phone: "phone",
		dob: "dob",
		ssn: "ssn",
		ssnEncrypted: "ssnEncrypted",
		address: "address",
		employerName: "employerName",
		jobTitle: "jobTitle",
		monthlyIncome: "monthlyIncome",
		employmentDuration: "employmentDuration",
		leaseType: "leaseType",
		occupancyType: "occupancyType",
		moveInDate: "moveInDate",
		leaseDuration: "leaseDuration",
		occupants: "occupants",
		pets: "pets",
		landlordName: "landlordName",
		landlordContact: "landlordContact",
		reasonForMoving: "reasonForMoving",
		referenceName: "referenceName",
		referenceContact: "referenceContact",
		consent: "consent",
		propertyId: "propertyId",
		userId: "userId",
		status: "status",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		unitId: "unitId"
	}, e.Prisma.LeaseScalarFieldEnum = {
		id: "id",
		applicationId: "applicationId",
		tenantId: "tenantId",
		propertyId: "propertyId",
		unitId: "unitId",
		startDate: "startDate",
		endDate: "endDate",
		rentAmount: "rentAmount",
		securityDeposit: "securityDeposit",
		leaseStatus: "leaseStatus",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		earlyTerminationFee: "earlyTerminationFee",
		gracePeriodDays: "gracePeriodDays",
		landlordResponsibilities: "landlordResponsibilities",
		landlordSignedAt: "landlordSignedAt",
		lateFeeDaily: "lateFeeDaily",
		lateFeeFlat: "lateFeeFlat",
		leaseTerm: "leaseTerm",
		paymentDueDay: "paymentDueDay",
		paymentFrequency: "paymentFrequency",
		tenantPaysElectric: "tenantPaysElectric",
		tenantPaysInternet: "tenantPaysInternet",
		tenantPaysTrash: "tenantPaysTrash",
		tenantPaysWater: "tenantPaysWater",
		tenantResponsibilities: "tenantResponsibilities",
		usageType: "usageType",
		hasRenewalOption: "hasRenewalOption",
		renewalNoticeDays: "renewalNoticeDays",
		renewalTermMonths: "renewalTermMonths",
		renewalRentIncrease: "renewalRentIncrease",
		autoRenew: "autoRenew",
		hasRentEscalation: "hasRentEscalation",
		escalationType: "escalationType",
		escalationRate: "escalationRate",
		escalationFrequency: "escalationFrequency",
		nextEscalationDate: "nextEscalationDate",
		documentVersion: "documentVersion",
		lastDocumentUpdate: "lastDocumentUpdate",
		complianceCheckDate: "complianceCheckDate",
		complianceStatus: "complianceStatus",
		complianceNotes: "complianceNotes",
		tenantSignedAt: "tenantSignedAt"
	}, e.Prisma.InvoiceScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		type: "type",
		totalAmount: "totalAmount",
		amountPaid: "amountPaid",
		balance: "balance",
		dueDate: "dueDate",
		status: "status",
		postingStatus: "postingStatus",
		journalEntryId: "journalEntryId",
		utilityBillId: "utilityBillId",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.InvoiceItemScalarFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		description: "description",
		amount: "amount",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.PaymentScalarFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		amount: "amount",
		method: "method",
		reference: "reference",
		paidOn: "paidOn",
		postingStatus: "postingStatus",
		journalEntryId: "journalEntryId",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		isReversed: "isReversed",
		reversedAt: "reversedAt",
		reversalReason: "reversalReason",
		reversedBy: "reversedBy",
		amountSubunits: "amountSubunits",
		currency: "currency",
		gateway: "gateway",
		gatewayReference: "gatewayReference",
		status: "status",
		type: "type",
		metadata: "metadata",
		riskScore: "riskScore"
	}, e.Prisma.PaymentReversalScalarFieldEnum = {
		id: "id",
		paymentId: "paymentId",
		invoiceId: "invoiceId",
		amount: "amount",
		reason: "reason",
		createdAt: "createdAt",
		reversedBy: "reversedBy",
		metadata: "metadata"
	}, e.Prisma.ReceiptScalarFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		paymentId: "paymentId",
		receiptNo: "receiptNo",
		issuedOn: "issuedOn",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.UtilityScalarFieldEnum = {
		id: "id",
		name: "name",
		type: "type",
		unitPrice: "unitPrice",
		fixedAmount: "fixedAmount",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.LeaseUtilityScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		utilityId: "utilityId",
		isTenantResponsible: "isTenantResponsible",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.UtilityReadingScalarFieldEnum = {
		id: "id",
		leaseUtilityId: "leaseUtilityId",
		readingValue: "readingValue",
		readingDate: "readingDate",
		amount: "amount",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.DssDocumentScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		leaseId: "leaseId",
		propertyId: "propertyId",
		unitId: "unitId",
		title: "title",
		description: "description",
		originalFileUrl: "originalFileUrl",
		originalFileKey: "originalFileKey",
		mimeType: "mimeType",
		fileSizeBytes: "fileSizeBytes",
		originalPdfSha256Hex: "originalPdfSha256Hex",
		finalPdfSha256Hex: "finalPdfSha256Hex",
		finalFileUrl: "finalFileUrl",
		status: "status",
		signingMode: "signingMode",
		currentStep: "currentStep",
		sentAt: "sentAt",
		completedAt: "completedAt",
		voidedAt: "voidedAt",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.DssParticipantScalarFieldEnum = {
		id: "id",
		documentId: "documentId",
		organizationId: "organizationId",
		userId: "userId",
		email: "email",
		fullName: "fullName",
		role: "role",
		stepOrder: "stepOrder",
		hasSigned: "hasSigned",
		signedAt: "signedAt",
		viewedAt: "viewedAt",
		accessTokenHash: "accessTokenHash"
	}, e.Prisma.DssSignatureScalarFieldEnum = {
		id: "id",
		documentId: "documentId",
		participantId: "participantId",
		signatureHash: "signatureHash",
		signedAt: "signedAt",
		isProxy: "isProxy",
		onBehalfOf: "onBehalfOf"
	}, e.Prisma.DssFieldScalarFieldEnum = {
		id: "id",
		documentId: "documentId",
		participantId: "participantId",
		type: "type",
		pageNumber: "pageNumber",
		x: "x",
		y: "y",
		width: "width",
		height: "height",
		value: "value"
	}, e.Prisma.BlockchainNotaryRecordScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		documentId: "documentId",
		chainId: "chainId",
		contractAddress: "contractAddress",
		notarizedHash: "notarizedHash",
		txHash: "txHash",
		blockNumber: "blockNumber",
		status: "status",
		createdAt: "createdAt",
		confirmedAt: "confirmedAt"
	}, e.Prisma.DssWorkflowTemplateScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		description: "description",
		propertyId: "propertyId",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.DssWorkflowStepScalarFieldEnum = {
		id: "id",
		templateId: "templateId",
		stepOrder: "stepOrder",
		role: "role",
		label: "label",
		isOptional: "isOptional"
	}, e.Prisma.ListingScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		createdBy: "createdBy",
		statusId: "statusId",
		locationId: "locationId",
		title: "title",
		description: "description",
		price: "price",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		propertyId: "propertyId",
		unitId: "unitId",
		availabilityDate: "availabilityDate",
		expirationDate: "expirationDate",
		categoryId: "categoryId"
	}, e.Prisma.ServiceMarketplaceScalarFieldEnum = {
		id: "id",
		listingId: "listingId",
		vendorId: "vendorId",
		serviceTypeId: "serviceTypeId",
		description: "description",
		rate: "rate",
		availability: "availability",
		createdAt: "createdAt"
	}, e.Prisma.MaintenanceRequestScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		propertyId: "propertyId",
		requestedById: "requestedById",
		title: "title",
		description: "description",
		priority: "priority",
		status: "status",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		category: "category",
		unitId: "unitId",
		assignedVendorId: "assignedVendorId",
		cost: "cost",
		assignedAt: "assignedAt",
		invoiceId: "invoiceId",
		isTenantChargeable: "isTenantChargeable",
		journalEntryId: "journalEntryId"
	}, e.Prisma.OccupancyHistoryScalarFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		year: "year",
		month: "month",
		occupancyRate: "occupancyRate",
		createdAt: "createdAt"
	}, e.Prisma.AdminActionScalarFieldEnum = {
		id: "id",
		adminOrgUserId: "adminOrgUserId",
		targetOrgUserId: "targetOrgUserId",
		listingId: "listingId",
		actionTypeId: "actionTypeId",
		reason: "reason",
		details: "details",
		createdAt: "createdAt"
	}, e.Prisma.CategoryMarketplaceScalarFieldEnum = {
		id: "id",
		name: "name",
		description: "description",
		createdAt: "createdAt"
	}, e.Prisma.LocationScalarFieldEnum = {
		id: "id",
		name: "name",
		city: "city",
		country: "country",
		createdAt: "createdAt"
	}, e.Prisma.ActionTypeScalarFieldEnum = {
		id: "id",
		name: "name",
		description: "description",
		createdAt: "createdAt"
	}, e.Prisma.ListingImageScalarFieldEnum = {
		id: "id",
		listingId: "listingId",
		imageUrl: "imageUrl",
		isPrimary: "isPrimary",
		createdAt: "createdAt"
	}, e.Prisma.ListingStatusScalarFieldEnum = {
		id: "id",
		name: "name",
		description: "description",
		createdAt: "createdAt"
	}, e.Prisma.ServiceTypeScalarFieldEnum = {
		id: "id",
		name: "name",
		description: "description",
		createdAt: "createdAt"
	}, e.Prisma.ServiceCategoryScalarFieldEnum = {
		id: "id",
		name: "name",
		tagline: "tagline",
		color: "color"
	}, e.Prisma.ServiceScalarFieldEnum = {
		id: "id",
		categoryId: "categoryId",
		name: "name",
		description: "description",
		features: "features",
		impact: "impact",
		icon: "icon"
	}, e.Prisma.AboutUsScalarFieldEnum = {
		id: "id",
		section: "section",
		description: "description",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.ApplicantScalarFieldEnum = {
		id: "id",
		firstName: "firstName",
		lastName: "lastName",
		email: "email",
		resume: "resume",
		createdAt: "createdAt"
	}, e.Prisma.ApplicationScalarFieldEnum = {
		id: "id",
		jobId: "jobId",
		applicantId: "applicantId",
		status: "status",
		appliedAt: "appliedAt"
	}, e.Prisma.CTAScalarFieldEnum = {
		id: "id",
		page: "page",
		title: "title",
		subtitle: "subtitle",
		buttonText: "buttonText",
		buttonUrl: "buttonUrl",
		gradient: "gradient",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.ContactMessageScalarFieldEnum = {
		id: "id",
		name: "name",
		email: "email",
		message: "message",
		createdAt: "createdAt",
		countryCode: "countryCode",
		phone: "phone"
	}, e.Prisma.HeroSectionScalarFieldEnum = {
		id: "id",
		page: "page",
		title: "title",
		subtitle: "subtitle",
		description: "description",
		buttonText: "buttonText",
		buttonUrl: "buttonUrl",
		imageUrl: "imageUrl",
		iconUrl: "iconUrl",
		searchBar: "searchBar",
		gradient: "gradient",
		layout: "layout",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.JobScalarFieldEnum = {
		id: "id",
		title: "title",
		description: "description",
		image: "image",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.PolicyScalarFieldEnum = {
		id: "id",
		title: "title",
		companyName: "companyName",
		contactEmail: "contactEmail",
		privacyEmail: "privacyEmail",
		website: "website",
		mailingAddress: "mailingAddress",
		responseTime: "responseTime",
		inactiveAccountThreshold: "inactiveAccountThreshold",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.SectionScalarFieldEnum = {
		id: "id",
		key: "key",
		title: "title",
		intro: "intro",
		content: "content",
		order: "order",
		policyId: "policyId",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.TestimonialScalarFieldEnum = {
		id: "id",
		name: "name",
		role: "role",
		image: "image",
		text: "text",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.PlanScalarFieldEnum = {
		id: "id",
		name: "name",
		badge: "badge",
		monthlyPrice: "monthlyPrice",
		yearlyPrice: "yearlyPrice",
		description: "description",
		gradient: "gradient",
		stripePriceIdMonthly: "stripePriceIdMonthly",
		stripePriceIdYearly: "stripePriceIdYearly",
		trialDays: "trialDays",
		signingFee: "signingFee",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.FeatureScalarFieldEnum = {
		id: "id",
		title: "title",
		description: "description",
		category: "category",
		createdAt: "createdAt",
		icon: "icon",
		isActive: "isActive",
		key: "key",
		path: "path",
		updatedAt: "updatedAt"
	}, e.Prisma.SidebarItemScalarFieldEnum = {
		id: "id",
		label: "label",
		path: "path",
		icon: "icon",
		section: "section",
		order: "order",
		badge: "badge",
		description: "description",
		isActive: "isActive",
		isExternal: "isExternal",
		target: "target",
		featureId: "featureId",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		role: "role"
	}, e.Prisma.NavbarItemScalarFieldEnum = {
		id: "id",
		name: "name",
		href: "href",
		order: "order",
		isVisible: "isVisible",
		isAvailable: "isAvailable",
		createdAt: "createdAt",
		updatedAt: "updatedAt",
		parentId: "parentId"
	}, e.Prisma.LeaseAmendmentScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		amendmentType: "amendmentType",
		effectiveDate: "effectiveDate",
		description: "description",
		changes: "changes",
		previousValues: "previousValues",
		status: "status",
		createdBy: "createdBy",
		createdAt: "createdAt",
		approvedBy: "approvedBy",
		approvedAt: "approvedAt",
		executedBy: "executedBy",
		executedAt: "executedAt",
		documentUrl: "documentUrl"
	}, e.Prisma.LeaseAuditLogScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		action: "action",
		performedBy: "performedBy",
		performedAt: "performedAt",
		changes: "changes",
		ipAddress: "ipAddress",
		userAgent: "userAgent"
	}, e.Prisma.LeaseDocumentScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		documentType: "documentType",
		fileName: "fileName",
		fileUrl: "fileUrl",
		fileSize: "fileSize",
		mimeType: "mimeType",
		version: "version",
		uploadedBy: "uploadedBy",
		uploadedAt: "uploadedAt",
		isSigned: "isSigned",
		signedAt: "signedAt",
		description: "description"
	}, e.Prisma.LeaseNotificationScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		notificationType: "notificationType",
		recipientEmail: "recipientEmail",
		recipientRole: "recipientRole",
		subject: "subject",
		message: "message",
		scheduledFor: "scheduledFor",
		sentAt: "sentAt",
		status: "status",
		metadata: "metadata",
		createdAt: "createdAt"
	}, e.Prisma.LeaseRenewalScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		renewalType: "renewalType",
		oldEndDate: "oldEndDate",
		newEndDate: "newEndDate",
		oldRentAmount: "oldRentAmount",
		newRentAmount: "newRentAmount",
		notificationSentAt: "notificationSentAt",
		tenantResponseAt: "tenantResponseAt",
		tenantResponse: "tenantResponse",
		negotiationNotes: "negotiationNotes",
		executedAt: "executedAt",
		executedBy: "executedBy",
		status: "status",
		createdAt: "createdAt"
	}, e.Prisma.RentEscalationScalarFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		effectiveDate: "effectiveDate",
		previousRent: "previousRent",
		newRent: "newRent",
		escalationType: "escalationType",
		escalationRate: "escalationRate",
		calculationNote: "calculationNote",
		appliedAt: "appliedAt",
		appliedBy: "appliedBy"
	}, e.Prisma.PropertyTypeScalarFieldEnum = {
		id: "id",
		name: "name",
		description: "description",
		createdAt: "createdAt"
	}, e.Prisma.AgentInviteScalarFieldEnum = {
		id: "id",
		inviteTokenHash: "inviteTokenHash",
		expiresAt: "expiresAt",
		usedAt: "usedAt",
		isUsed: "isUsed",
		tenantId: "tenantId",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.ListingAuditEntryScalarFieldEnum = {
		id: "id",
		unitId: "unitId",
		listingId: "listingId",
		action: "action",
		previousStatus: "previousStatus",
		newStatus: "newStatus",
		userId: "userId",
		timestamp: "timestamp",
		reason: "reason",
		metadata: "metadata",
		createdAt: "createdAt"
	}, e.Prisma.TenantPaymentMethodScalarFieldEnum = {
		id: "id",
		userId: "userId",
		type: "type",
		plaidAccessToken: "plaidAccessToken",
		plaidAccountId: "plaidAccountId",
		stripePaymentMethodId: "stripePaymentMethodId",
		isDefault: "isDefault",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.UsageMetricScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		featureKey: "featureKey",
		period: "period",
		periodStart: "periodStart",
		usedCount: "usedCount",
		limit: "limit"
	}, e.Prisma.SubscriptionEventScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		eventType: "eventType",
		fromPlanId: "fromPlanId",
		toPlanId: "toPlanId",
		triggeredBy: "triggeredBy",
		createdAt: "createdAt"
	}, e.Prisma.FeatureLimitScalarFieldEnum = {
		id: "id",
		featureId: "featureId",
		planId: "planId",
		limit: "limit",
		period: "period"
	}, e.Prisma.WebhookEventScalarFieldEnum = {
		id: "id",
		gateway: "gateway",
		eventType: "eventType",
		payload: "payload",
		status: "status",
		processingError: "processingError",
		retryCount: "retryCount",
		nextRetryAt: "nextRetryAt",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.SortOrder = {
		asc: "asc",
		desc: "desc"
	}, e.Prisma.NullableJsonNullValueInput = {
		DbNull: s.DbNull,
		JsonNull: s.JsonNull
	}, e.Prisma.JsonNullValueInput = { JsonNull: s.JsonNull }, e.Prisma.JsonNullValueFilter = {
		DbNull: s.DbNull,
		JsonNull: s.JsonNull,
		AnyNull: s.AnyNull
	}, e.Prisma.QueryMode = {
		default: "default",
		insensitive: "insensitive"
	}, e.Prisma.NullsOrder = {
		first: "first",
		last: "last"
	}, e.Prisma.OrganizationOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		slug: "slug",
		logoUrl: "logoUrl",
		website: "website",
		phone: "phone",
		address: "address",
		paystackSubaccountCode: "paystackSubaccountCode",
		stripeConnectId: "stripeConnectId",
		irsEinEncrypted: "irsEinEncrypted"
	}, e.Prisma.ConnectedBankAccountOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		plaidAccessToken: "plaidAccessToken",
		plaidItemId: "plaidItemId",
		institutionName: "institutionName",
		accountName: "accountName",
		accountType: "accountType",
		accountSubtype: "accountSubtype",
		mask: "mask",
		status: "status"
	}, e.Prisma.BankTransactionOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		plaidTransactionId: "plaidTransactionId",
		accountId: "accountId",
		merchantName: "merchantName",
		description: "description",
		status: "status",
		matchedJournalId: "matchedJournalId"
	}, e.Prisma.OrganizationWebhookOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		url: "url",
		secret: "secret"
	}, e.Prisma.SmsNotificationOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId",
		phone: "phone",
		message: "message",
		errorMessage: "errorMessage",
		carrier: "carrier",
		reference: "reference"
	}, e.Prisma.NotificationPreferenceOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId"
	}, e.Prisma.UserOrderByRelevanceFieldEnum = {
		id: "id",
		email: "email",
		passwordHash: "passwordHash",
		firstName: "firstName",
		lastName: "lastName",
		phone: "phone",
		avatarUrl: "avatarUrl",
		verificationToken: "verificationToken",
		paystackCustomerCode: "paystackCustomerCode",
		plaidAccessToken: "plaidAccessToken",
		stripeCustomerId: "stripeCustomerId"
	}, e.Prisma.OrganizationUserOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId",
		organizationId: "organizationId"
	}, e.Prisma.OtpOrderByRelevanceFieldEnum = {
		id: "id",
		code: "code",
		phone: "phone",
		userId: "userId"
	}, e.Prisma.VendorTaxInfoOrderByRelevanceFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		taxId: "taxId",
		taxIdEncrypted: "taxIdEncrypted",
		exemptionCertificateUrl: "exemptionCertificateUrl",
		stateOfIncorporation: "stateOfIncorporation"
	}, e.Prisma.VendorOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		businessType: "businessType",
		organizationId: "organizationId",
		userId: "userId",
		companyName: "companyName",
		serviceType: "serviceType",
		phone: "phone",
		email: "email"
	}, e.Prisma.VendorInvoiceOrderByRelevanceFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		organizationId: "organizationId",
		propertyId: "propertyId",
		category: "category",
		description: "description",
		postingStatus: "postingStatus",
		journalEntryId: "journalEntryId"
	}, e.Prisma.InviteOrderByRelevanceFieldEnum = {
		id: "id",
		email: "email",
		token: "token",
		organizationId: "organizationId",
		invitedById: "invitedById",
		leaseId: "leaseId"
	}, e.Prisma.PasswordResetTokenOrderByRelevanceFieldEnum = {
		id: "id",
		token: "token",
		userId: "userId"
	}, e.Prisma.FinancialEntityOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		taxIdEncrypted: "taxIdEncrypted"
	}, e.Prisma.AccountOrderByRelevanceFieldEnum = {
		id: "id",
		entityId: "entityId",
		code: "code",
		name: "name"
	}, e.Prisma.JournalEntryOrderByRelevanceFieldEnum = {
		id: "id",
		entityId: "entityId",
		description: "description",
		reference: "reference"
	}, e.Prisma.JournalLineOrderByRelevanceFieldEnum = {
		id: "id",
		journalEntryId: "journalEntryId",
		accountId: "accountId",
		description: "description",
		propertyId: "propertyId",
		unitId: "unitId",
		leaseId: "leaseId",
		tenantId: "tenantId",
		vendorId: "vendorId"
	}, e.Prisma.FinancialSnapshotOrderByRelevanceFieldEnum = {
		id: "id",
		entityId: "entityId",
		accountId: "accountId"
	}, e.Prisma.UtilityBillOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		providerName: "providerName",
		journalEntryId: "journalEntryId",
		blockchainHash: "blockchainHash",
		fileUrl: "fileUrl",
		utilityId: "utilityId",
		approvedBy: "approvedBy"
	}, e.Prisma.UtilityAllocationOrderByRelevanceFieldEnum = {
		id: "id",
		utilityBillId: "utilityBillId",
		unitId: "unitId",
		invoiceId: "invoiceId",
		blockchainHash: "blockchainHash",
		tenantId: "tenantId",
		leaseId: "leaseId",
		allocationExplanation: "allocationExplanation"
	}, e.Prisma.UtilityPaymentOrderByRelevanceFieldEnum = {
		id: "id",
		allocationId: "allocationId",
		payerId: "payerId",
		reference: "reference",
		status: "status",
		blockchainHash: "blockchainHash"
	}, e.Prisma.UtilityDisputeOrderByRelevanceFieldEnum = {
		id: "id",
		allocationId: "allocationId",
		raisedBy: "raisedBy",
		reason: "reason",
		resolutionNotes: "resolutionNotes"
	}, e.Prisma.PropertyOrderByRelevanceFieldEnum = {
		id: "id",
		listingId: "listingId",
		managerId: "managerId",
		organizationId: "organizationId",
		propertyTypeId: "propertyTypeId",
		locationId: "locationId",
		city: "city",
		address: "address",
		amenities: "amenities",
		availabilityStatus: "availabilityStatus",
		name: "name",
		contactEmail: "contactEmail",
		contactPhone: "contactPhone",
		country: "country",
		zipCode: "zipCode"
	}, e.Prisma.PropertyImageOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		url: "url"
	}, e.Prisma.ApartmentComplexDetailOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		buildingName: "buildingName",
		unitNumber: "unitNumber",
		zoning: "zoning"
	}, e.Prisma.HouseDetailOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		houseName: "houseName",
		zoning: "zoning"
	}, e.Prisma.CondoDetailOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		buildingName: "buildingName",
		unitNumber: "unitNumber",
		zoning: "zoning"
	}, e.Prisma.LandDetailOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		zoning: "zoning",
		topography: "topography",
		soilType: "soilType",
		landUse: "landUse"
	}, e.Prisma.TownhouseDetailOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		townhouseName: "townhouseName",
		unitNumber: "unitNumber",
		zoning: "zoning"
	}, e.Prisma.UnitOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId",
		complexDetailId: "complexDetailId",
		listingId: "listingId",
		unitNumber: "unitNumber",
		houseDetailId: "houseDetailId",
		unitName: "unitName",
		currency: "currency"
	}, e.Prisma.ApplianceOrderByRelevanceFieldEnum = {
		id: "id",
		description: "description",
		name: "name"
	}, e.Prisma.TenantApplicationOrderByRelevanceFieldEnum = {
		id: "id",
		fullName: "fullName",
		email: "email",
		phone: "phone",
		ssn: "ssn",
		ssnEncrypted: "ssnEncrypted",
		address: "address",
		employerName: "employerName",
		jobTitle: "jobTitle",
		employmentDuration: "employmentDuration",
		leaseType: "leaseType",
		occupancyType: "occupancyType",
		leaseDuration: "leaseDuration",
		pets: "pets",
		landlordName: "landlordName",
		landlordContact: "landlordContact",
		reasonForMoving: "reasonForMoving",
		referenceName: "referenceName",
		referenceContact: "referenceContact",
		propertyId: "propertyId",
		userId: "userId",
		unitId: "unitId"
	}, e.Prisma.LeaseOrderByRelevanceFieldEnum = {
		id: "id",
		applicationId: "applicationId",
		tenantId: "tenantId",
		propertyId: "propertyId",
		unitId: "unitId",
		landlordResponsibilities: "landlordResponsibilities",
		leaseTerm: "leaseTerm",
		paymentFrequency: "paymentFrequency",
		tenantResponsibilities: "tenantResponsibilities",
		usageType: "usageType",
		escalationFrequency: "escalationFrequency",
		complianceNotes: "complianceNotes"
	}, e.Prisma.InvoiceOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		journalEntryId: "journalEntryId",
		utilityBillId: "utilityBillId"
	}, e.Prisma.InvoiceItemOrderByRelevanceFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		description: "description"
	}, e.Prisma.PaymentOrderByRelevanceFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		reference: "reference",
		journalEntryId: "journalEntryId",
		reversalReason: "reversalReason",
		reversedBy: "reversedBy",
		currency: "currency",
		gatewayReference: "gatewayReference"
	}, e.Prisma.PaymentReversalOrderByRelevanceFieldEnum = {
		id: "id",
		paymentId: "paymentId",
		invoiceId: "invoiceId",
		reason: "reason",
		reversedBy: "reversedBy"
	}, e.Prisma.ReceiptOrderByRelevanceFieldEnum = {
		id: "id",
		invoiceId: "invoiceId",
		paymentId: "paymentId",
		receiptNo: "receiptNo"
	}, e.Prisma.UtilityOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name"
	}, e.Prisma.LeaseUtilityOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		utilityId: "utilityId"
	}, e.Prisma.UtilityReadingOrderByRelevanceFieldEnum = {
		id: "id",
		leaseUtilityId: "leaseUtilityId"
	}, e.Prisma.DssDocumentOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		leaseId: "leaseId",
		propertyId: "propertyId",
		unitId: "unitId",
		title: "title",
		description: "description",
		originalFileUrl: "originalFileUrl",
		originalFileKey: "originalFileKey",
		mimeType: "mimeType",
		originalPdfSha256Hex: "originalPdfSha256Hex",
		finalPdfSha256Hex: "finalPdfSha256Hex",
		finalFileUrl: "finalFileUrl"
	}, e.Prisma.DssParticipantOrderByRelevanceFieldEnum = {
		id: "id",
		documentId: "documentId",
		organizationId: "organizationId",
		userId: "userId",
		email: "email",
		fullName: "fullName",
		accessTokenHash: "accessTokenHash"
	}, e.Prisma.DssSignatureOrderByRelevanceFieldEnum = {
		id: "id",
		documentId: "documentId",
		participantId: "participantId",
		signatureHash: "signatureHash",
		onBehalfOf: "onBehalfOf"
	}, e.Prisma.DssFieldOrderByRelevanceFieldEnum = {
		id: "id",
		documentId: "documentId",
		participantId: "participantId",
		type: "type",
		value: "value"
	}, e.Prisma.BlockchainNotaryRecordOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		documentId: "documentId",
		contractAddress: "contractAddress",
		notarizedHash: "notarizedHash",
		txHash: "txHash"
	}, e.Prisma.DssWorkflowTemplateOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		description: "description",
		propertyId: "propertyId"
	}, e.Prisma.DssWorkflowStepOrderByRelevanceFieldEnum = {
		id: "id",
		templateId: "templateId",
		label: "label"
	}, e.Prisma.ListingOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		createdBy: "createdBy",
		statusId: "statusId",
		locationId: "locationId",
		title: "title",
		description: "description",
		propertyId: "propertyId",
		unitId: "unitId",
		categoryId: "categoryId"
	}, e.Prisma.ServiceMarketplaceOrderByRelevanceFieldEnum = {
		id: "id",
		listingId: "listingId",
		vendorId: "vendorId",
		serviceTypeId: "serviceTypeId",
		description: "description",
		availability: "availability"
	}, e.Prisma.MaintenanceRequestOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		propertyId: "propertyId",
		requestedById: "requestedById",
		title: "title",
		description: "description",
		unitId: "unitId",
		assignedVendorId: "assignedVendorId",
		invoiceId: "invoiceId",
		journalEntryId: "journalEntryId"
	}, e.Prisma.OccupancyHistoryOrderByRelevanceFieldEnum = {
		id: "id",
		propertyId: "propertyId"
	}, e.Prisma.AdminActionOrderByRelevanceFieldEnum = {
		id: "id",
		adminOrgUserId: "adminOrgUserId",
		targetOrgUserId: "targetOrgUserId",
		listingId: "listingId",
		actionTypeId: "actionTypeId",
		reason: "reason"
	}, e.Prisma.CategoryMarketplaceOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		description: "description"
	}, e.Prisma.LocationOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		city: "city",
		country: "country"
	}, e.Prisma.ActionTypeOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		description: "description"
	}, e.Prisma.ListingImageOrderByRelevanceFieldEnum = {
		id: "id",
		listingId: "listingId",
		imageUrl: "imageUrl"
	}, e.Prisma.ListingStatusOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		description: "description"
	}, e.Prisma.ServiceTypeOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		description: "description"
	}, e.Prisma.ServiceCategoryOrderByRelevanceFieldEnum = {
		name: "name",
		tagline: "tagline",
		color: "color"
	}, e.Prisma.ServiceOrderByRelevanceFieldEnum = {
		name: "name",
		description: "description",
		impact: "impact",
		icon: "icon"
	}, e.Prisma.AboutUsOrderByRelevanceFieldEnum = {
		section: "section",
		description: "description"
	}, e.Prisma.ApplicantOrderByRelevanceFieldEnum = {
		firstName: "firstName",
		lastName: "lastName",
		email: "email",
		resume: "resume"
	}, e.Prisma.ApplicationOrderByRelevanceFieldEnum = { status: "status" }, e.Prisma.CTAOrderByRelevanceFieldEnum = {
		page: "page",
		title: "title",
		subtitle: "subtitle",
		buttonText: "buttonText",
		buttonUrl: "buttonUrl",
		gradient: "gradient"
	}, e.Prisma.ContactMessageOrderByRelevanceFieldEnum = {
		name: "name",
		email: "email",
		message: "message",
		countryCode: "countryCode",
		phone: "phone"
	}, e.Prisma.HeroSectionOrderByRelevanceFieldEnum = {
		page: "page",
		title: "title",
		subtitle: "subtitle",
		description: "description",
		buttonText: "buttonText",
		buttonUrl: "buttonUrl",
		imageUrl: "imageUrl",
		iconUrl: "iconUrl",
		gradient: "gradient",
		layout: "layout"
	}, e.Prisma.JobOrderByRelevanceFieldEnum = {
		title: "title",
		description: "description",
		image: "image"
	}, e.Prisma.PolicyOrderByRelevanceFieldEnum = {
		title: "title",
		companyName: "companyName",
		contactEmail: "contactEmail",
		privacyEmail: "privacyEmail",
		website: "website",
		mailingAddress: "mailingAddress",
		responseTime: "responseTime",
		inactiveAccountThreshold: "inactiveAccountThreshold"
	}, e.Prisma.SectionOrderByRelevanceFieldEnum = {
		key: "key",
		title: "title",
		intro: "intro"
	}, e.Prisma.TestimonialOrderByRelevanceFieldEnum = {
		name: "name",
		role: "role",
		image: "image",
		text: "text"
	}, e.Prisma.PlanOrderByRelevanceFieldEnum = {
		name: "name",
		badge: "badge",
		description: "description",
		gradient: "gradient",
		stripePriceIdMonthly: "stripePriceIdMonthly",
		stripePriceIdYearly: "stripePriceIdYearly"
	}, e.Prisma.FeatureOrderByRelevanceFieldEnum = {
		title: "title",
		description: "description",
		category: "category",
		icon: "icon",
		key: "key",
		path: "path"
	}, e.Prisma.SidebarItemOrderByRelevanceFieldEnum = {
		label: "label",
		path: "path",
		icon: "icon",
		section: "section",
		badge: "badge",
		description: "description",
		target: "target"
	}, e.Prisma.NavbarItemOrderByRelevanceFieldEnum = {
		name: "name",
		href: "href"
	}, e.Prisma.LeaseAmendmentOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		description: "description",
		createdBy: "createdBy",
		approvedBy: "approvedBy",
		executedBy: "executedBy",
		documentUrl: "documentUrl"
	}, e.Prisma.LeaseAuditLogOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		action: "action",
		performedBy: "performedBy",
		ipAddress: "ipAddress",
		userAgent: "userAgent"
	}, e.Prisma.LeaseDocumentOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		fileName: "fileName",
		fileUrl: "fileUrl",
		mimeType: "mimeType",
		uploadedBy: "uploadedBy",
		description: "description"
	}, e.Prisma.LeaseNotificationOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		recipientEmail: "recipientEmail",
		recipientRole: "recipientRole",
		subject: "subject",
		message: "message"
	}, e.Prisma.LeaseRenewalOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		negotiationNotes: "negotiationNotes",
		executedBy: "executedBy"
	}, e.Prisma.RentEscalationOrderByRelevanceFieldEnum = {
		id: "id",
		leaseId: "leaseId",
		calculationNote: "calculationNote",
		appliedBy: "appliedBy"
	}, e.Prisma.PropertyTypeOrderByRelevanceFieldEnum = {
		id: "id",
		name: "name",
		description: "description"
	}, e.Prisma.AgentInviteOrderByRelevanceFieldEnum = {
		id: "id",
		inviteTokenHash: "inviteTokenHash",
		tenantId: "tenantId"
	}, e.Prisma.ListingAuditEntryOrderByRelevanceFieldEnum = {
		id: "id",
		unitId: "unitId",
		listingId: "listingId",
		userId: "userId",
		reason: "reason"
	}, e.Prisma.TenantPaymentMethodOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId",
		type: "type",
		plaidAccessToken: "plaidAccessToken",
		plaidAccountId: "plaidAccountId",
		stripePaymentMethodId: "stripePaymentMethodId"
	}, e.Prisma.UsageMetricOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		featureKey: "featureKey",
		period: "period"
	}, e.Prisma.SubscriptionEventOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		eventType: "eventType",
		triggeredBy: "triggeredBy"
	}, e.Prisma.FeatureLimitOrderByRelevanceFieldEnum = { period: "period" }, e.Prisma.WebhookEventOrderByRelevanceFieldEnum = {
		id: "id",
		gateway: "gateway",
		eventType: "eventType",
		processingError: "processingError"
	}, e.Region = e.$Enums.Region = {
		USA: "USA",
		KEN: "KEN"
	}, e.NotificationChannel = e.$Enums.NotificationChannel = {
		SMS: "SMS",
		EMAIL: "EMAIL",
		PUSH: "PUSH",
		IN_APP: "IN_APP"
	}, e.NotificationCategory = e.$Enums.NotificationCategory = {
		RENT_REMINDER: "RENT_REMINDER",
		PAYMENT_RECEIPT: "PAYMENT_RECEIPT",
		MAINTENANCE_UPDATE: "MAINTENANCE_UPDATE",
		LEASE_DOCUMENT: "LEASE_DOCUMENT",
		UTILITY_BILL: "UTILITY_BILL",
		SYSTEM_ALERT: "SYSTEM_ALERT"
	}, e.SmsStatus = e.$Enums.SmsStatus = {
		QUEUED: "QUEUED",
		SENT: "SENT",
		DELIVERED: "DELIVERED",
		FAILED: "FAILED"
	}, e.UserStatus = e.$Enums.UserStatus = {
		ACTIVE: "ACTIVE",
		INACTIVE: "INACTIVE",
		SUSPENDED: "SUSPENDED"
	}, e.KycStatus = e.$Enums.KycStatus = {
		PENDING: "PENDING",
		VERIFIED: "VERIFIED",
		FAILED: "FAILED"
	}, e.OrganizationUserRole = e.$Enums.OrganizationUserRole = {
		SYSTEM_ADMIN: "SYSTEM_ADMIN",
		PROPERTY_MANAGER: "PROPERTY_MANAGER",
		TENANT: "TENANT",
		AGENT: "AGENT",
		VENDOR: "VENDOR",
		ALL: "ALL"
	}, e.OtpType = e.$Enums.OtpType = {
		TWO_FACTOR: "TWO_FACTOR",
		PHONE_VERIFICATION: "PHONE_VERIFICATION"
	}, e.InviteRole = e.$Enums.InviteRole = {
		SYSTEM_ADMIN: "SYSTEM_ADMIN",
		PROPERTY_MANAGER: "PROPERTY_MANAGER",
		TENANT: "TENANT",
		AGENT: "AGENT",
		VENDOR: "VENDOR",
		ALL: "ALL"
	}, e.AccountType = e.$Enums.AccountType = {
		ASSET: "ASSET",
		LIABILITY: "LIABILITY",
		EQUITY: "EQUITY",
		INCOME: "INCOME",
		EXPENSE: "EXPENSE"
	}, e.UtilityImportMethod = e.$Enums.UtilityImportMethod = {
		CSV: "CSV",
		API: "API",
		PDF_OCR: "PDF_OCR",
		MANUAL_ENTRY: "MANUAL_ENTRY",
		IMAGE_SCAN: "IMAGE_SCAN"
	}, e.UtilityBillStatus = e.$Enums.UtilityBillStatus = {
		DRAFT: "DRAFT",
		PROCESSING: "PROCESSING",
		REVIEW_REQUIRED: "REVIEW_REQUIRED",
		APPROVED: "APPROVED",
		POSTED: "POSTED",
		REJECTED: "REJECTED"
	}, e.UtilitySplitMethod = e.$Enums.UtilitySplitMethod = {
		EQUAL: "EQUAL",
		OCCUPANCY_BASED: "OCCUPANCY_BASED",
		SQ_FOOTAGE: "SQ_FOOTAGE",
		SUB_METERED: "SUB_METERED",
		CUSTOM_RATIO: "CUSTOM_RATIO",
		AI_OPTIMIZED: "AI_OPTIMIZED",
		FIXED: "FIXED"
	}, e.UtilityAllocationStatus = e.$Enums.UtilityAllocationStatus = {
		PENDING: "PENDING",
		PARTIALLY_PAID: "PARTIALLY_PAID",
		PAID: "PAID",
		DISPUTED: "DISPUTED",
		VOIDED: "VOIDED"
	}, e.UtilityPaymentMethod = e.$Enums.UtilityPaymentMethod = {
		ACH: "ACH",
		CARD: "CARD",
		WALLET: "WALLET",
		CRYPTO: "CRYPTO",
		BANK_TRANSFER: "BANK_TRANSFER",
		CASH: "CASH"
	}, e.UtilityReconciliationStatus = e.$Enums.UtilityReconciliationStatus = {
		PENDING: "PENDING",
		MATCHED: "MATCHED",
		FAILED: "FAILED",
		MANUAL_REVIEW: "MANUAL_REVIEW"
	}, e.UtilityDisputeStatus = e.$Enums.UtilityDisputeStatus = {
		OPEN: "OPEN",
		UNDER_REVIEW: "UNDER_REVIEW",
		RESOLVED: "RESOLVED",
		REJECTED: "REJECTED"
	}, e.ApplicationStatus = e.$Enums.ApplicationStatus = {
		PENDING: "PENDING",
		APPROVED: "APPROVED",
		REJECTED: "REJECTED",
		UNDER_REVIEW: "UNDER_REVIEW"
	}, e.LeaseStatus = e.$Enums.LeaseStatus = {
		DRAFT: "DRAFT",
		PENDING_APPROVAL: "PENDING_APPROVAL",
		APPROVED: "APPROVED",
		SIGNED: "SIGNED",
		ACTIVE: "ACTIVE",
		EXPIRING_SOON: "EXPIRING_SOON",
		EXPIRED: "EXPIRED",
		TERMINATED: "TERMINATED",
		RENEWED: "RENEWED"
	}, e.LeaseEscalationType = e.$Enums.LeaseEscalationType = {
		FIXED: "FIXED",
		PERCENTAGE: "PERCENTAGE",
		INDEX: "INDEX",
		MARKET: "MARKET"
	}, e.LeaseComplianceStatus = e.$Enums.LeaseComplianceStatus = {
		PENDING: "PENDING",
		COMPLIANT: "COMPLIANT",
		NON_COMPLIANT: "NON_COMPLIANT",
		UNDER_REVIEW: "UNDER_REVIEW"
	}, e.invoice_type = e.$Enums.invoice_type = {
		RENT: "RENT",
		UTILITY: "UTILITY",
		MAINTENANCE: "MAINTENANCE",
		DAMAGE: "DAMAGE"
	}, e.invoice_status = e.$Enums.invoice_status = {
		DRAFT: "DRAFT",
		PENDING: "PENDING",
		PAID: "PAID",
		OVERDUE: "OVERDUE",
		CANCELLED: "CANCELLED"
	}, e.PostingStatus = e.$Enums.PostingStatus = {
		DRAFT: "DRAFT",
		PENDING: "PENDING",
		POSTED: "POSTED",
		FAILED: "FAILED",
		REVERSED: "REVERSED"
	}, e.PaymentMethod = e.$Enums.PaymentMethod = {
		CASH: "CASH",
		BANK: "BANK",
		CREDIT_CARD: "CREDIT_CARD",
		MPESA: "MPESA",
		PAYPAL: "PAYPAL",
		STRIPE: "STRIPE",
		PAYSTACK: "PAYSTACK",
		MANUAL: "MANUAL"
	}, e.PaymentGateway = e.$Enums.PaymentGateway = {
		STRIPE: "STRIPE",
		PLAID: "PLAID",
		PAYSTACK: "PAYSTACK",
		MPESA_DIRECT: "MPESA_DIRECT",
		MANUAL: "MANUAL"
	}, e.TransactionStatus = e.$Enums.TransactionStatus = {
		PENDING: "PENDING",
		AUTHORIZED: "AUTHORIZED",
		SETTLED: "SETTLED",
		FAILED: "FAILED",
		DISPUTED: "DISPUTED",
		REVERSED: "REVERSED"
	}, e.TransactionType = e.$Enums.TransactionType = {
		RENT: "RENT",
		DEPOSIT: "DEPOSIT",
		SAAS_FEE: "SAAS_FEE",
		MAINTENANCE: "MAINTENANCE"
	}, e.UtilityType = e.$Enums.UtilityType = {
		FIXED: "FIXED",
		METERED: "METERED"
	}, e.DssDocumentStatus = e.$Enums.DssDocumentStatus = {
		DRAFT: "DRAFT",
		SENT: "SENT",
		IN_SIGNING: "IN_SIGNING",
		COMPLETED: "COMPLETED",
		DECLINED: "DECLINED",
		VOIDED: "VOIDED",
		EXPIRED: "EXPIRED"
	}, e.DssSigningMode = e.$Enums.DssSigningMode = {
		SEQUENTIAL: "SEQUENTIAL",
		PARALLEL: "PARALLEL"
	}, e.DssParticipantRole = e.$Enums.DssParticipantRole = {
		LANDLORD: "LANDLORD",
		TENANT: "TENANT",
		PROPERTY_MANAGER: "PROPERTY_MANAGER",
		AGENT: "AGENT",
		VENDOR: "VENDOR",
		WITNESS: "WITNESS",
		NOTARY: "NOTARY",
		CUSTODIAN: "CUSTODIAN",
		OTHER: "OTHER"
	}, e.BlockchainNotaryStatus = e.$Enums.BlockchainNotaryStatus = {
		PENDING: "PENDING",
		SUBMITTED: "SUBMITTED",
		CONFIRMED: "CONFIRMED",
		FAILED: "FAILED"
	}, e.Priority = e.$Enums.Priority = {
		LOW: "LOW",
		NORMAL: "NORMAL",
		HIGH: "HIGH",
		URGENT: "URGENT"
	}, e.MaintenanceRequestStatus = e.$Enums.MaintenanceRequestStatus = {
		OPEN: "OPEN",
		IN_PROGRESS: "IN_PROGRESS",
		ON_HOLD: "ON_HOLD",
		COMPLETED: "COMPLETED",
		CANCELLED: "CANCELLED",
		REJECTED: "REJECTED"
	}, e.RequestCategory = e.$Enums.RequestCategory = {
		EMERGENCY: "EMERGENCY",
		URGENT: "URGENT",
		ROUTINE: "ROUTINE",
		STANDARD: "STANDARD"
	}, e.SidebarItemRole = e.$Enums.SidebarItemRole = {
		SYSTEM_ADMIN: "SYSTEM_ADMIN",
		PROPERTY_MANAGER: "PROPERTY_MANAGER",
		TENANT: "TENANT",
		AGENT: "AGENT",
		VENDOR: "VENDOR",
		ALL: "ALL"
	}, e.LeaseAmendmentType = e.$Enums.LeaseAmendmentType = {
		RENT_CHANGE: "RENT_CHANGE",
		TERM_EXTENSION: "TERM_EXTENSION",
		UTILITY_CHANGE: "UTILITY_CHANGE",
		RESPONSIBILITY_CHANGE: "RESPONSIBILITY_CHANGE",
		TENANT_CHANGE: "TENANT_CHANGE",
		OTHER: "OTHER"
	}, e.LeaseAmendmentStatus = e.$Enums.LeaseAmendmentStatus = {
		PENDING: "PENDING",
		APPROVED: "APPROVED",
		REJECTED: "REJECTED",
		EXECUTED: "EXECUTED"
	}, e.LeaseDocumentType = e.$Enums.LeaseDocumentType = {
		LEASE_AGREEMENT: "LEASE_AGREEMENT",
		ADDENDUM: "ADDENDUM",
		AMENDMENT: "AMENDMENT",
		RENEWAL_NOTICE: "RENEWAL_NOTICE",
		TERMINATION_NOTICE: "TERMINATION_NOTICE",
		INSPECTION_REPORT: "INSPECTION_REPORT",
		PROOF_OF_INSURANCE: "PROOF_OF_INSURANCE",
		OTHER: "OTHER"
	}, e.LeaseNotificationType = e.$Enums.LeaseNotificationType = {
		RENEWAL_REMINDER: "RENEWAL_REMINDER",
		EXPIRY_WARNING: "EXPIRY_WARNING",
		RENT_DUE: "RENT_DUE",
		LATE_PAYMENT: "LATE_PAYMENT",
		ESCALATION_NOTICE: "ESCALATION_NOTICE",
		COMPLIANCE_CHECK: "COMPLIANCE_CHECK",
		DOCUMENT_REQUIRED: "DOCUMENT_REQUIRED",
		MAINTENANCE_SCHEDULED: "MAINTENANCE_SCHEDULED",
		LEASE_SIGNED: "LEASE_SIGNED",
		CUSTOM: "CUSTOM",
		AMENDMENT_PROPOSED: "AMENDMENT_PROPOSED",
		AMENDMENT_EXECUTED: "AMENDMENT_EXECUTED"
	}, e.LeaseNotificationStatus = e.$Enums.LeaseNotificationStatus = {
		PENDING: "PENDING",
		SENT: "SENT",
		FAILED: "FAILED",
		CANCELLED: "CANCELLED"
	}, e.LeaseRenewalType = e.$Enums.LeaseRenewalType = {
		AUTO: "AUTO",
		MANUAL: "MANUAL",
		RENEGOTIATED: "RENEGOTIATED"
	}, e.LeaseRenewalTenantResponse = e.$Enums.LeaseRenewalTenantResponse = {
		ACCEPT: "ACCEPT",
		DECLINE: "DECLINE",
		NEGOTIATE: "NEGOTIATE",
		NO_RESPONSE: "NO_RESPONSE"
	}, e.LeaseRenewalStatus = e.$Enums.LeaseRenewalStatus = {
		PENDING: "PENDING",
		NOTICE_SENT: "NOTICE_SENT",
		TENANT_RESPONDED: "TENANT_RESPONDED",
		NEGOTIATING: "NEGOTIATING",
		APPROVED: "APPROVED",
		EXECUTED: "EXECUTED",
		DECLINED: "DECLINED"
	}, e.RentEscalationType = e.$Enums.RentEscalationType = {
		FIXED: "FIXED",
		PERCENTAGE: "PERCENTAGE",
		INDEX: "INDEX",
		MARKET: "MARKET"
	}, e.ListingActionType = e.$Enums.ListingActionType = {
		CREATE: "CREATE",
		REMOVE: "REMOVE",
		SUSPEND: "SUSPEND",
		ACTIVATE: "ACTIVATE",
		UPDATE: "UPDATE",
		EXPIRE: "EXPIRE"
	}, e.ListingStatusCode = e.$Enums.ListingStatusCode = {
		PRIVATE: "PRIVATE",
		ACTIVE: "ACTIVE",
		SUSPENDED: "SUSPENDED",
		PENDING: "PENDING",
		EXPIRED: "EXPIRED"
	}, e.WebhookStatus = e.$Enums.WebhookStatus = {
		PENDING: "PENDING",
		PROCESSING: "PROCESSING",
		PROCESSED: "PROCESSED",
		FAILED: "FAILED"
	}, e.Prisma.ModelName = {
		Organization: "Organization",
		ConnectedBankAccount: "ConnectedBankAccount",
		BankTransaction: "BankTransaction",
		OrganizationWebhook: "OrganizationWebhook",
		SmsNotification: "SmsNotification",
		NotificationPreference: "NotificationPreference",
		User: "User",
		OrganizationUser: "OrganizationUser",
		Otp: "Otp",
		VendorTaxInfo: "VendorTaxInfo",
		Vendor: "Vendor",
		VendorInvoice: "VendorInvoice",
		Invite: "Invite",
		PasswordResetToken: "PasswordResetToken",
		FinancialEntity: "FinancialEntity",
		Account: "Account",
		JournalEntry: "JournalEntry",
		JournalLine: "JournalLine",
		FinancialSnapshot: "FinancialSnapshot",
		UtilityBill: "UtilityBill",
		UtilityAllocation: "UtilityAllocation",
		UtilityPayment: "UtilityPayment",
		UtilityDispute: "UtilityDispute",
		Property: "Property",
		PropertyImage: "PropertyImage",
		ApartmentComplexDetail: "ApartmentComplexDetail",
		HouseDetail: "HouseDetail",
		CondoDetail: "CondoDetail",
		LandDetail: "LandDetail",
		TownhouseDetail: "TownhouseDetail",
		Unit: "Unit",
		Appliance: "Appliance",
		TenantApplication: "TenantApplication",
		Lease: "Lease",
		Invoice: "Invoice",
		InvoiceItem: "InvoiceItem",
		Payment: "Payment",
		PaymentReversal: "PaymentReversal",
		Receipt: "Receipt",
		Utility: "Utility",
		LeaseUtility: "LeaseUtility",
		UtilityReading: "UtilityReading",
		DssDocument: "DssDocument",
		DssParticipant: "DssParticipant",
		DssSignature: "DssSignature",
		DssField: "DssField",
		BlockchainNotaryRecord: "BlockchainNotaryRecord",
		DssWorkflowTemplate: "DssWorkflowTemplate",
		DssWorkflowStep: "DssWorkflowStep",
		Listing: "Listing",
		ServiceMarketplace: "ServiceMarketplace",
		MaintenanceRequest: "MaintenanceRequest",
		OccupancyHistory: "OccupancyHistory",
		AdminAction: "AdminAction",
		CategoryMarketplace: "CategoryMarketplace",
		Location: "Location",
		ActionType: "ActionType",
		ListingImage: "ListingImage",
		ListingStatus: "ListingStatus",
		ServiceType: "ServiceType",
		ServiceCategory: "ServiceCategory",
		Service: "Service",
		AboutUs: "AboutUs",
		Applicant: "Applicant",
		Application: "Application",
		CTA: "CTA",
		ContactMessage: "ContactMessage",
		HeroSection: "HeroSection",
		Job: "Job",
		Policy: "Policy",
		Section: "Section",
		Testimonial: "Testimonial",
		Plan: "Plan",
		Feature: "Feature",
		SidebarItem: "SidebarItem",
		NavbarItem: "NavbarItem",
		LeaseAmendment: "LeaseAmendment",
		LeaseAuditLog: "LeaseAuditLog",
		LeaseDocument: "LeaseDocument",
		LeaseNotification: "LeaseNotification",
		LeaseRenewal: "LeaseRenewal",
		RentEscalation: "RentEscalation",
		PropertyType: "PropertyType",
		AgentInvite: "AgentInvite",
		ListingAuditEntry: "ListingAuditEntry",
		TenantPaymentMethod: "TenantPaymentMethod",
		UsageMetric: "UsageMetric",
		SubscriptionEvent: "SubscriptionEvent",
		FeatureLimit: "FeatureLimit",
		WebhookEvent: "WebhookEvent"
	}, e.PrismaClient = class {
		constructor() {
			return new Proxy(this, { get(e, t) {
				let n, r = a();
				throw n = r.isEdge ? `PrismaClient is not configured to run in ${r.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
` : "PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `" + r.prettyName + "`).", n += "\nIf this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report", Error(n);
			} });
		}
	}, Object.assign(e, s);
})), $ = (/* @__PURE__ */ s(((e, t) => {
	t.exports = Ha();
})))();
async function Ua(t, n) {
	let r = await e.financialEntity.create({ data: {
		organizationId: t,
		name: `${n} Financials`
	} }), i = [
		{
			code: Q.CASH_IN_BANK,
			name: "Cash in Bank",
			type: $.AccountType.ASSET
		},
		{
			code: Q.ACCOUNTS_RECEIVABLE,
			name: "Accounts Receivable",
			type: $.AccountType.ASSET
		},
		{
			code: Q.UNDEPOSITED_FUNDS,
			name: "Undeposited Funds",
			type: $.AccountType.ASSET
		},
		{
			code: Q.SECURITY_DEPOSITS_LIABILITY,
			name: "Security Deposits Held",
			type: $.AccountType.LIABILITY
		},
		{
			code: Q.ACCOUNTS_PAYABLE,
			name: "Accounts Payable",
			type: $.AccountType.LIABILITY
		},
		{
			code: Q.PREPAID_RENT,
			name: "Prepaid Rent",
			type: $.AccountType.LIABILITY
		},
		{
			code: Q.OWNER_EQUITY,
			name: "Owner Equity",
			type: $.AccountType.EQUITY
		},
		{
			code: Q.RENTAL_INCOME,
			name: "Rental Income",
			type: $.AccountType.INCOME
		},
		{
			code: Q.UTILITY_RECOVERY_INCOME,
			name: "Utility Recovery",
			type: $.AccountType.INCOME
		},
		{
			code: Q.LATE_FEES_INCOME,
			name: "Late Fees Income",
			type: $.AccountType.INCOME
		},
		{
			code: Q.MAINTENANCE_INCOME,
			name: "Maintenance Income",
			type: $.AccountType.INCOME
		},
		{
			code: Q.MAINTENANCE_EXPENSE,
			name: "Maintenance Expense",
			type: $.AccountType.EXPENSE
		},
		{
			code: Q.UTILITY_EXPENSE,
			name: "Utility Cost",
			type: $.AccountType.EXPENSE
		},
		{
			code: Q.MANAGEMENT_FEES,
			name: "Management Fees",
			type: $.AccountType.EXPENSE
		}
	];
	for (let t of i) await e.account.create({ data: {
		entityId: r.id,
		code: t.code,
		name: t.name,
		type: t.type,
		isSystem: !0
	} });
	return r;
}
//#endregion
//#region src/lib/maintenance-service.ts
var Wa = { async postMaintenanceBill(t) {
	return await e.$transaction(async (e) => {
		let n = await e.maintenanceRequest.findUnique({
			where: { id: t },
			include: {
				property: { include: { organization: !0 } },
				unit: { include: { leases: {
					where: { leaseStatus: "ACTIVE" },
					take: 1
				} } }
			}
		});
		if (!n) throw Error("Maintenance request not found");
		if (n.status !== $.MaintenanceRequestStatus.COMPLETED) throw Error("Only completed requests can be billed");
		if (!n.cost || Number(n.cost) <= 0) throw Error("Maintenance cost must be greater than zero to post");
		if (n.journalEntryId) throw Error("Request already posted to ledger");
		let r = n.organizationId, i = n.cost, a = await Ra.postJournalEntry({
			organizationId: r,
			date: /* @__PURE__ */ new Date(),
			description: `Maintenance Cost: ${n.title} - ${n.property.name}`,
			reference: n.id,
			lines: [{
				accountCode: Q.MAINTENANCE_EXPENSE,
				debit: i,
				credit: new Y(0),
				propertyId: n.propertyId,
				unitId: n.unitId || void 0
			}, {
				accountCode: Q.ACCOUNTS_PAYABLE,
				debit: new Y(0),
				credit: i,
				propertyId: n.propertyId,
				unitId: n.unitId || void 0
			}]
		}, e), o;
		if (n.isTenantChargeable) {
			let t = n.unit?.leases[0];
			if (!t) throw Error("No active lease found for tenant chargeback");
			let a = await e.invoice.create({ data: {
				leaseId: t.id,
				type: "MAINTENANCE",
				totalAmount: Number(i),
				balance: Number(i),
				amountPaid: 0,
				status: "PENDING",
				dueDate: new Date(Date.now() + 360 * 60 * 60 * 1e3),
				maintenanceRequest: { connect: { id: n.id } },
				InvoiceItem: { create: {
					description: `Maintenance Chargeback: ${n.title}`,
					amount: Number(i)
				} }
			} });
			o = a.id;
			let s = await Ra.postJournalEntry({
				organizationId: r,
				date: /* @__PURE__ */ new Date(),
				description: `Maintenance Chargeback: ${n.title} - Unit ${n.unit?.unitNumber}`,
				reference: a.id,
				lines: [{
					accountCode: Q.ACCOUNTS_RECEIVABLE,
					debit: i,
					credit: new Y(0),
					propertyId: n.propertyId,
					unitId: n.unitId || void 0,
					leaseId: t.id,
					tenantId: t.tenantId || void 0
				}, {
					accountCode: Q.MAINTENANCE_INCOME,
					debit: new Y(0),
					credit: i,
					propertyId: n.propertyId,
					unitId: n.unitId || void 0,
					leaseId: t.id
				}]
			}, e);
			await e.invoice.update({
				where: { id: a.id },
				data: { journalEntryId: s.journalEntryId }
			});
		}
		return {
			request: await e.maintenanceRequest.update({
				where: { id: n.id },
				data: {
					journalEntryId: a.journalEntryId,
					invoiceId: o
				}
			}),
			expenseGLEntry: a,
			invoiceId: o
		};
	}, { timeout: 3e4 });
} }, Ga = {
	async calculateAllocations(t) {
		let n = await e.utilityBill.findUnique({
			where: { id: t },
			include: { property: { include: { units: { include: { leases: {
				where: { leaseStatus: "ACTIVE" },
				include: { tenant: !0 }
			} } } } } }
		});
		if (!n) throw Error("Utility bill not found");
		if (n.status === $.UtilityBillStatus.POSTED) throw Error("Bill already posted");
		let r = n.property.units.flatMap((e) => e.leases.map((t) => ({
			...t,
			unit: e
		}))).filter((e) => e.leaseStatus === "ACTIVE");
		if (r.length === 0) throw Error("No active leases found for this property");
		let i = new Y(n.totalAmount), a = [];
		switch (n.splitMethod) {
			case $.UtilitySplitMethod.EQUAL: {
				let e = new Y(r.length), t = i.div(e).toDecimalPlaces(2), n = new Y(100).div(e).toDecimalPlaces(2);
				a = r.map((e) => ({
					leaseId: e.id,
					tenantId: e.tenantId,
					tenantName: e.tenant && `${e.tenant.firstName ?? ""} ${e.tenant.lastName ?? ""}`.trim() || "N/A",
					unitNumber: e.unit.unitNumber,
					unitId: e.unit.id,
					amount: t,
					percentage: n
				}));
				break;
			}
			case $.UtilitySplitMethod.SQ_FOOTAGE: {
				let e = r.reduce((e, t) => e.plus(new Y(t.unit.squareFootage || 0)), new Y(0));
				if (e.isZero()) throw Error("Total square footage is zero or not available");
				a = r.map((t) => {
					let n = new Y(t.unit.squareFootage || 0), r = n.div(e).times(100).toDecimalPlaces(2), a = i.times(n).div(e).toDecimalPlaces(2);
					return {
						leaseId: t.id,
						tenantId: t.tenantId,
						tenantName: t.tenant && `${t.tenant.firstName ?? ""} ${t.tenant.lastName ?? ""}`.trim() || "N/A",
						unitNumber: t.unit.unitNumber,
						unitId: t.unit.id,
						amount: a,
						percentage: r
					};
				});
				break;
			}
			case $.UtilitySplitMethod.OCCUPANCY_BASED:
			case $.UtilitySplitMethod.AI_OPTIMIZED:
			default: {
				let e = new Y(r.length), t = i.div(e).toDecimalPlaces(2), n = new Y(100).div(e).toDecimalPlaces(2);
				a = r.map((e) => ({
					leaseId: e.id,
					tenantId: e.tenantId,
					tenantName: e.tenant && `${e.tenant.firstName ?? ""} ${e.tenant.lastName ?? ""}`.trim() || "N/A",
					unitNumber: e.unit.unitNumber,
					unitId: e.unit.id,
					amount: t,
					percentage: n
				}));
				break;
			}
		}
		let o = a.reduce((e, t) => e.plus(t.amount), new Y(0)), s = i.minus(o);
		return !s.isZero() && a.length > 0 && (a[a.length - 1].amount = a[a.length - 1].amount.plus(s)), {
			utilityBill: n,
			allocations: a,
			totalAmount: i
		};
	},
	async postAllocations(t, n) {
		return await e.$transaction(async (e) => {
			let r = await e.utilityBill.findUnique({
				where: { id: t },
				include: { property: { include: { organization: !0 } } }
			});
			if (!r) throw Error("Utility bill not found");
			if (r.status === $.UtilityBillStatus.POSTED) throw Error("Bill already posted");
			if (!r.property.organizationId) throw Error("Organization not found for property");
			let i = await Promise.all(n.map(async (t) => {
				let n = await e.invoice.create({ data: {
					leaseId: t.leaseId,
					type: "UTILITY",
					totalAmount: Number(t.amount),
					balance: Number(t.amount),
					amountPaid: 0,
					status: "PENDING",
					dueDate: new Date(Date.now() + 360 * 60 * 60 * 1e3),
					InvoiceItem: { create: {
						description: `Utility: ${r.providerName}`,
						amount: Number(t.amount)
					} }
				} });
				return {
					allocation: await e.utilityAllocation.create({ data: {
						utilityBillId: r.id,
						unitId: t.unitId,
						leaseId: t.leaseId,
						tenantId: t.tenantId,
						amount: t.amount,
						percentage: t.percentage,
						invoiceId: n.id,
						status: "PENDING"
					} }),
					invoice: n
				};
			})), a = await Ra.postJournalEntry({
				organizationId: r.property.organizationId,
				date: /* @__PURE__ */ new Date(),
				description: `Utility Bill: ${r.providerName} - ${r.property.name || "Property"}`,
				reference: r.id,
				lines: [{
					accountCode: Q.UTILITY_EXPENSE,
					debit: r.totalAmount,
					credit: new Y(0),
					propertyId: r.propertyId
				}, {
					accountCode: Q.ACCOUNTS_PAYABLE,
					debit: new Y(0),
					credit: r.totalAmount,
					propertyId: r.propertyId
				}]
			}), o = await Promise.all(i.map(async (t, i) => {
				let a = n[i], o = await Ra.postJournalEntry({
					organizationId: r.property.organizationId,
					date: /* @__PURE__ */ new Date(),
					description: `Utility Recovery: ${r.providerName} - Unit ${a.unitNumber}`,
					reference: t.invoice.id,
					lines: [{
						accountCode: Q.ACCOUNTS_RECEIVABLE,
						debit: a.amount,
						credit: new Y(0),
						propertyId: r.propertyId,
						leaseId: a.leaseId,
						unitId: a.unitId,
						tenantId: a.tenantId
					}, {
						accountCode: Q.UTILITY_RECOVERY_INCOME,
						debit: new Y(0),
						credit: a.amount,
						propertyId: r.propertyId,
						leaseId: a.leaseId,
						unitId: a.unitId
					}]
				}), s = await e.invoice.update({
					where: { id: t.invoice.id },
					data: { journalEntryId: o.journalEntryId }
				});
				return {
					...t,
					invoice: s,
					journalEntry: o
				};
			}));
			return {
				utilityBill: await e.utilityBill.update({
					where: { id: r.id },
					data: {
						status: $.UtilityBillStatus.POSTED,
						journalEntryId: a.journalEntryId
					}
				}),
				results: o,
				masterGLEntry: a
			};
		}, { timeout: 3e4 });
	}
}, Ka = class {
	async getSuggestedMatches(t, n) {
		let r = await e.bankTransaction.findUnique({ where: { id: t } });
		if (!r || n && r.organizationId !== n) throw Error("Transaction not found");
		let i = new Y(r.amount).abs(), a = new Date(r.date);
		a.setDate(a.getDate() - 3);
		let o = new Date(r.date);
		return o.setDate(o.getDate() + 3), await e.journalEntry.findMany({
			where: {
				entity: { organizationId: r.organizationId },
				isLocked: !0,
				bankTransaction: null,
				transactionDate: {
					gte: a,
					lte: o
				},
				lines: { some: { OR: [{
					debit: i,
					credit: new Y(0)
				}, {
					debit: new Y(0),
					credit: i
				}] } }
			},
			include: { lines: { include: { account: !0 } } },
			orderBy: { transactionDate: "desc" }
		});
	}
};
//#endregion
export { Q as CHART_OF_ACCOUNTS, za as FinanceActions, La as JournalService, Ka as ReconciliationService, Ba as financeActions, Ra as journalService, Wa as maintenanceService, Ua as setupFinancials, Ga as utilityService };
