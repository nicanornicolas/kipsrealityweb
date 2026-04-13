import "react/jsx-runtime";
//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, a) => (a = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), l = /* @__PURE__ */ o(((e, t) => {
	t.exports = {};
})), u = /* @__PURE__ */ c(l(), 1), d = u.fileURLToPath(import.meta.url);
globalThis.__dirname = u.dirname(d);
var f = u.createRequire(import.meta.url), p = Object.create, m = Object.defineProperty, h = Object.getOwnPropertyDescriptor, g = Object.getOwnPropertyNames, _ = Object.getPrototypeOf, v = Object.prototype.hasOwnProperty, y = ((e) => typeof f < "u" ? f : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof f < "u" ? f : e)[t] }) : e)(function(e) {
	if (typeof f < "u") return f.apply(this, arguments);
	throw Error("Dynamic require of \"" + e + "\" is not supported");
}), b = (e, t) => () => (e && (t = e(e = 0)), t), x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), S = (e, t) => {
	for (var n in t) m(e, n, {
		get: t[n],
		enumerable: !0
	});
}, C = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (let i of g(t)) !v.call(e, i) && i !== n && m(e, i, {
		get: () => t[i],
		enumerable: !(r = h(t, i)) || r.enumerable
	});
	return e;
}, w = (e, t, n) => (n = e == null ? {} : p(_(e)), C(t || !e || !e.__esModule ? m(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), T = x((e, t) => {
	t.exports = (e, t = u.argv) => {
		let n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", r = t.indexOf(n + e), i = t.indexOf("--");
		return r !== -1 && (i === -1 || r < i);
	};
}), ee = x((e, t) => {
	var n = y("node:os"), r = y("node:tty"), i = T(), { env: a } = u, o;
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
		if (u.platform === "win32") {
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
	function l(e) {
		return s(c(e, e && e.isTTY));
	}
	t.exports = {
		supportsColor: l,
		stdout: s(c(!0, r.isatty(1))),
		stderr: s(c(!0, r.isatty(2)))
	};
}), E = x((e, t) => {
	var n = ee(), r = T();
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
		let { CI: t, FORCE_HYPERLINK: a, NETLIFY: o, TEAMCITY_VERSION: s, TERM_PROGRAM: c, TERM_PROGRAM_VERSION: l, VTE_VERSION: d, TERM: f } = u.env;
		if (a) return !(a.length > 0 && parseInt(a, 10) === 0);
		if (r("no-hyperlink") || r("no-hyperlinks") || r("hyperlink=false") || r("hyperlink=never")) return !1;
		if (r("hyperlink=true") || r("hyperlink=always") || o) return !0;
		if (!n.supportsColor(e) || e && !e.isTTY) return !1;
		if ("WT_SESSION" in u.env) return !0;
		if (u.platform === "win32" || t || s) return !1;
		if (c) {
			let e = i(l || "");
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
		stdout: a(u.stdout),
		stderr: a(u.stderr)
	};
}), te = x((e, t) => {
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
}), ne = x((e, t) => {
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
}), re = x((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.enginesVersion = void 0, e.enginesVersion = ne().prisma.enginesVersion;
}), D = x((e, t) => {
	t.exports = (e) => {
		let t = e.match(/^[ \t]*(?=\S)/gm);
		return t ? t.reduce((e, t) => Math.min(e, t.length), Infinity) : 0;
	};
}), O = x((e, t) => {
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
}), ie = x((e, t) => {
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
}), ae = x((e, t) => {
	var n = y("node:fs"), r = y("node:path"), i = y("node:os"), a = y("node:crypto"), o = ie().version, s = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
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
	function l(e) {
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
		return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : u.env.DOTENV_KEY && u.env.DOTENV_KEY.length > 0 ? u.env.DOTENV_KEY : "";
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
		else t = r.resolve(u.cwd(), ".env.vault");
		return n.existsSync(t) ? t : null;
	}
	function g(e) {
		return e[0] === "~" ? r.join(i.homedir(), e.slice(1)) : e;
	}
	function _(e) {
		e && e.debug && f("Loading env from encrypted .env.vault");
		let t = C._parseVault(e), n = u.env;
		return e && e.processEnv != null && (n = e.processEnv), C.populate(n, t, e), { parsed: t };
	}
	function v(e) {
		let t = r.resolve(u.cwd(), ".env"), i = "utf8", a = !!(e && e.debug);
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
		let l = u.env;
		return e && e.processEnv != null && (l = e.processEnv), C.populate(l, c, e), s ? {
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
		configDotenv: v,
		_configVault: _,
		_parseVault: l,
		config: b,
		decrypt: x,
		parse: c,
		populate: S
	};
	t.exports.configDotenv = C.configDotenv, t.exports._configVault = C._configVault, t.exports._parseVault = C._parseVault, t.exports.config = C.config, t.exports.decrypt = C.decrypt, t.exports.parse = C.parse, t.exports.populate = C.populate, t.exports = C;
}), oe = x((e, t) => {
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
}), se = x((e, t) => {
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
}), k = b(() => {}), A = b(() => {});
S({}, {
	defineExtension: () => ce,
	getExtensionContext: () => le
});
function ce(e) {
	return typeof e == "function" ? e : (t) => t.$extends(e);
}
function le(e) {
	return e;
}
S({}, { validator: () => ue });
function ue(...e) {
	return (e) => e;
}
var de = {};
S(de, {
	$: () => he,
	bgBlack: () => B,
	bgBlue: () => Ae,
	bgCyan: () => Me,
	bgGreen: () => Oe,
	bgMagenta: () => je,
	bgRed: () => V,
	bgWhite: () => Ne,
	bgYellow: () => ke,
	black: () => I,
	blue: () => L,
	bold: () => P,
	cyan: () => z,
	dim: () => F,
	gray: () => Ee,
	green: () => Ce,
	grey: () => De,
	hidden: () => be,
	inverse: () => ye,
	italic: () => _e,
	magenta: () => R,
	red: () => Se,
	reset: () => ge,
	strikethrough: () => xe,
	underline: () => ve,
	white: () => Te,
	yellow: () => we
});
var fe, j, M, pe, me = !0;
typeof u < "u" && ({FORCE_COLOR: fe, NODE_DISABLE_COLORS: j, NO_COLOR: M, TERM: pe} = u.env || {}, me = u.stdout && u.stdout.isTTY);
var he = { enabled: !j && M == null && pe !== "dumb" && (fe != null && fe !== "0" || me) };
function N(e, t) {
	let n = RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
	return function(e) {
		return !he.enabled || e == null ? e : r + (~("" + e).indexOf(i) ? e.replace(n, i + r) : e) + i;
	};
}
var ge = N(0, 0), P = N(1, 22), F = N(2, 22), _e = N(3, 23), ve = N(4, 24), ye = N(7, 27), be = N(8, 28), xe = N(9, 29), I = N(30, 39), Se = N(31, 39), Ce = N(32, 39), we = N(33, 39), L = N(34, 39), R = N(35, 39), z = N(36, 39), Te = N(37, 39), Ee = N(90, 39), De = N(90, 39), B = N(40, 49), V = N(41, 49), Oe = N(42, 49), ke = N(43, 49), Ae = N(44, 49), je = N(45, 49), Me = N(46, 49), Ne = N(47, 49), Pe = 100, Fe = [
	"green",
	"yellow",
	"blue",
	"magenta",
	"cyan",
	"red"
], Ie = [], Le = Date.now(), Re = 0, ze = typeof u < "u" ? u.env : {};
globalThis.DEBUG ??= ze.DEBUG ?? "", globalThis.DEBUG_COLORS ??= ze.DEBUG_COLORS ? ze.DEBUG_COLORS === "true" : !0;
var Be = {
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
function Ve(e) {
	let t = {
		color: Fe[Re++ % Fe.length],
		enabled: Be.enabled(e),
		namespace: e,
		log: Be.log,
		extend: () => {}
	};
	return new Proxy((...e) => {
		let { enabled: n, namespace: r, color: i, log: a } = t;
		if (e.length !== 0 && Ie.push([r, ...e]), Ie.length > Pe && Ie.shift(), Be.enabled(r) || n) {
			let t = e.map((e) => typeof e == "string" ? e : Ue(e)), n = `+${Date.now() - Le}ms`;
			Le = Date.now(), globalThis.DEBUG_COLORS ? a(de[i](P(r)), ...t, de[i](n)) : a(r, ...t, n);
		}
	}, {
		get: (e, n) => t[n],
		set: (e, n, r) => t[n] = r
	});
}
var He = new Proxy(Ve, {
	get: (e, t) => Be[t],
	set: (e, t, n) => Be[t] = n
});
function Ue(e, t = 2) {
	let n = /* @__PURE__ */ new Set();
	return JSON.stringify(e, (e, t) => {
		if (typeof t == "object" && t) {
			if (n.has(t)) return "[Circular *]";
			n.add(t);
		} else if (typeof t == "bigint") return t.toString();
		return t;
	}, t);
}
var We = He, Ge = /* @__PURE__ */ "darwin,darwin-arm64,debian-openssl-1.0.x,debian-openssl-1.1.x,debian-openssl-3.0.x,rhel-openssl-1.0.x,rhel-openssl-1.1.x,rhel-openssl-3.0.x,linux-arm64-openssl-1.1.x,linux-arm64-openssl-1.0.x,linux-arm64-openssl-3.0.x,linux-arm-openssl-1.1.x,linux-arm-openssl-1.0.x,linux-arm-openssl-3.0.x,linux-musl,linux-musl-openssl-3.0.x,linux-musl-arm64-openssl-1.1.x,linux-musl-arm64-openssl-3.0.x,linux-nixos,linux-static-x64,linux-static-arm64,windows,freebsd11,freebsd12,freebsd13,freebsd14,freebsd15,openbsd,netbsd,arm".split(","), Ke = Symbol.for("@ts-pattern/matcher"), qe = Symbol.for("@ts-pattern/isVariadic"), Je = "@ts-pattern/anonymous-select-key", Ye = (e) => !!(e && typeof e == "object"), Xe = (e) => e && !!e[Ke], Ze = (e, t, n) => {
	if (Xe(e)) {
		let { matched: r, selections: i } = e[Ke]().match(t);
		return r && i && Object.keys(i).forEach((e) => n(e, i[e])), r;
	}
	if (Ye(e)) {
		if (!Ye(t)) return !1;
		if (Array.isArray(e)) {
			if (!Array.isArray(t)) return !1;
			let r = [], i = [], a = [];
			for (let t of e.keys()) {
				let n = e[t];
				Xe(n) && n[qe] ? a.push(n) : a.length ? i.push(n) : r.push(n);
			}
			if (a.length) {
				if (a.length > 1) throw Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
				if (t.length < r.length + i.length) return !1;
				let e = t.slice(0, r.length), o = i.length === 0 ? [] : t.slice(-i.length), s = t.slice(r.length, i.length === 0 ? Infinity : -i.length);
				return r.every((t, r) => Ze(t, e[r], n)) && i.every((e, t) => Ze(e, o[t], n)) && (a.length === 0 || Ze(a[0], s, n));
			}
			return e.length === t.length && e.every((e, r) => Ze(e, t[r], n));
		}
		return Reflect.ownKeys(e).every((r) => {
			let i = e[r];
			return (r in t || Xe(a = i) && a[Ke]().matcherType === "optional") && Ze(i, t[r], n);
			var a;
		});
	}
	return Object.is(t, e);
}, Qe = (e) => {
	var t;
	return Ye(e) ? Xe(e) ? (t = e[Ke]()).getSelectionKeys?.call(t) ?? [] : $e(Array.isArray(e) ? e : Object.values(e), Qe) : [];
}, $e = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function et(e) {
	return Object.assign(e, {
		optional: () => tt(e),
		and: (t) => H(e, t),
		or: (t) => nt(e, t),
		select: (t) => t === void 0 ? rt(e) : rt(t, e)
	});
}
function tt(e) {
	return et({ [Ke]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return t === void 0 ? (Qe(e).forEach((e) => r(e, void 0)), {
				matched: !0,
				selections: n
			}) : {
				matched: Ze(e, t, r),
				selections: n
			};
		},
		getSelectionKeys: () => Qe(e),
		matcherType: "optional"
	}) });
}
function H(...e) {
	return et({ [Ke]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return {
				matched: e.every((e) => Ze(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => $e(e, Qe),
		matcherType: "and"
	}) });
}
function nt(...e) {
	return et({ [Ke]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return $e(e, Qe).forEach((e) => r(e, void 0)), {
				matched: e.some((e) => Ze(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => $e(e, Qe),
		matcherType: "or"
	}) });
}
function U(e) {
	return { [Ke]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function rt(...e) {
	let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
	return et({ [Ke]: () => ({
		match: (e) => {
			let r = { [t ?? Je]: e };
			return {
				matched: n === void 0 || Ze(n, e, (e, t) => {
					r[e] = t;
				}),
				selections: r
			};
		},
		getSelectionKeys: () => [t ?? Je].concat(n === void 0 ? [] : Qe(n))
	}) });
}
function it(e) {
	return typeof e == "number";
}
function at(e) {
	return typeof e == "string";
}
function ot(e) {
	return typeof e == "bigint";
}
et(U(function(e) {
	return !0;
}));
var st = (e) => Object.assign(et(e), {
	startsWith: (t) => {
		return st(H(e, (n = t, U((e) => at(e) && e.startsWith(n)))));
		var n;
	},
	endsWith: (t) => {
		return st(H(e, (n = t, U((e) => at(e) && e.endsWith(n)))));
		var n;
	},
	minLength: (t) => st(H(e, ((e) => U((t) => at(t) && t.length >= e))(t))),
	length: (t) => st(H(e, ((e) => U((t) => at(t) && t.length === e))(t))),
	maxLength: (t) => st(H(e, ((e) => U((t) => at(t) && t.length <= e))(t))),
	includes: (t) => {
		return st(H(e, (n = t, U((e) => at(e) && e.includes(n)))));
		var n;
	},
	regex: (t) => {
		return st(H(e, (n = t, U((e) => at(e) && !!e.match(n)))));
		var n;
	}
});
st(U(at));
var ct = (e) => Object.assign(et(e), {
	between: (t, n) => ct(H(e, ((e, t) => U((n) => it(n) && e <= n && t >= n))(t, n))),
	lt: (t) => ct(H(e, ((e) => U((t) => it(t) && t < e))(t))),
	gt: (t) => ct(H(e, ((e) => U((t) => it(t) && t > e))(t))),
	lte: (t) => ct(H(e, ((e) => U((t) => it(t) && t <= e))(t))),
	gte: (t) => ct(H(e, ((e) => U((t) => it(t) && t >= e))(t))),
	int: () => ct(H(e, U((e) => it(e) && Number.isInteger(e)))),
	finite: () => ct(H(e, U((e) => it(e) && Number.isFinite(e)))),
	positive: () => ct(H(e, U((e) => it(e) && e > 0))),
	negative: () => ct(H(e, U((e) => it(e) && e < 0)))
});
ct(U(it));
var lt = (e) => Object.assign(et(e), {
	between: (t, n) => lt(H(e, ((e, t) => U((n) => ot(n) && e <= n && t >= n))(t, n))),
	lt: (t) => lt(H(e, ((e) => U((t) => ot(t) && t < e))(t))),
	gt: (t) => lt(H(e, ((e) => U((t) => ot(t) && t > e))(t))),
	lte: (t) => lt(H(e, ((e) => U((t) => ot(t) && t <= e))(t))),
	gte: (t) => lt(H(e, ((e) => U((t) => ot(t) && t >= e))(t))),
	positive: () => lt(H(e, U((e) => ot(e) && e > 0))),
	negative: () => lt(H(e, U((e) => ot(e) && e < 0)))
});
lt(U(ot)), et(U(function(e) {
	return typeof e == "boolean";
})), et(U(function(e) {
	return typeof e == "symbol";
})), et(U(function(e) {
	return e == null;
})), et(U(function(e) {
	return e != null;
})), we("prisma:warn"), (0, u.promisify)(u.default.exec), We("prisma:get-platform");
var ut = {};
S(ut, {
	beep: () => Kt,
	clearScreen: () => Ht,
	clearTerminal: () => Ut,
	cursorBackward: () => wt,
	cursorDown: () => St,
	cursorForward: () => Ct,
	cursorGetPosition: () => Ot,
	cursorHide: () => jt,
	cursorLeft: () => Tt,
	cursorMove: () => bt,
	cursorNextLine: () => kt,
	cursorPrevLine: () => At,
	cursorRestorePosition: () => Dt,
	cursorSavePosition: () => Et,
	cursorShow: () => Mt,
	cursorTo: () => yt,
	cursorUp: () => xt,
	enterAlternativeScreen: () => Wt,
	eraseDown: () => Lt,
	eraseEndLine: () => Pt,
	eraseLine: () => It,
	eraseLines: () => Nt,
	eraseScreen: () => zt,
	eraseStartLine: () => Ft,
	eraseUp: () => Rt,
	exitAlternativeScreen: () => Gt,
	iTerm: () => Yt,
	image: () => Jt,
	link: () => qt,
	scrollDown: () => Vt,
	scrollUp: () => Bt
});
var dt = globalThis.window?.document !== void 0;
globalThis.process?.versions?.node, globalThis.process?.versions?.bun, globalThis.Deno?.version?.deno, globalThis.process?.versions?.electron, globalThis.navigator?.userAgent?.includes("jsdom"), typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope, typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope, typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope, typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
var ft = globalThis.navigator?.userAgentData?.platform;
ft === "macOS" || globalThis.navigator?.platform === "MacIntel" || globalThis.navigator?.userAgent?.includes(" Mac ") === !0 || globalThis.process?.platform, ft === "Windows" || globalThis.navigator?.platform === "Win32" || globalThis.process?.platform, ft === "Linux" || globalThis.navigator?.platform?.startsWith("Linux") === !0 || globalThis.navigator?.userAgent?.includes(" Linux ") === !0 || globalThis.process?.platform, ft === "iOS" || globalThis.navigator?.platform === "MacIntel" && globalThis.navigator?.maxTouchPoints > 1 || /iPad|iPhone|iPod/.test(globalThis.navigator?.platform), ft === "Android" || globalThis.navigator?.platform === "Android" || globalThis.navigator?.userAgent?.includes(" Android ") === !0 || globalThis.process?.platform;
var W = "\x1B[", pt = "\x1B]", mt = "\x07", ht = ";", gt = !dt && u.default.env.TERM_PROGRAM === "Apple_Terminal", _t = !dt && u.default.platform === "win32", vt = dt ? () => {
	throw Error("`process.cwd()` only works in Node.js, not the browser.");
} : u.default.cwd, yt = (e, t) => {
	if (typeof e != "number") throw TypeError("The `x` argument is required");
	return typeof t == "number" ? W + (t + 1) + ht + (e + 1) + "H" : W + (e + 1) + "G";
}, bt = (e, t) => {
	if (typeof e != "number") throw TypeError("The `x` argument is required");
	let n = "";
	return e < 0 ? n += W + -e + "D" : e > 0 && (n += W + e + "C"), t < 0 ? n += W + -t + "A" : t > 0 && (n += W + t + "B"), n;
}, xt = (e = 1) => W + e + "A", St = (e = 1) => W + e + "B", Ct = (e = 1) => W + e + "C", wt = (e = 1) => W + e + "D", Tt = W + "G", Et = gt ? "\x1B7" : W + "s", Dt = gt ? "\x1B8" : W + "u", Ot = W + "6n", kt = W + "E", At = W + "F", jt = W + "?25l", Mt = W + "?25h", Nt = (e) => {
	let t = "";
	for (let n = 0; n < e; n++) t += It + (n < e - 1 ? xt() : "");
	return e && (t += Tt), t;
}, Pt = W + "K", Ft = W + "1K", It = W + "2K", Lt = W + "J", Rt = W + "1J", zt = W + "2J", Bt = W + "S", Vt = W + "T", Ht = "\x1Bc", Ut = _t ? `${zt}${W}0f` : `${zt}${W}3J${W}H`, Wt = W + "?1049h", Gt = W + "?1049l", Kt = mt, qt = (e, t) => [
	pt,
	"8",
	ht,
	ht,
	t,
	mt,
	e,
	pt,
	"8",
	ht,
	ht,
	mt
].join(""), Jt = (e, t = {}) => {
	let n = `${pt}1337;File=inline=1`;
	return t.width && (n += `;width=${t.width}`), t.height && (n += `;height=${t.height}`), t.preserveAspectRatio === !1 && (n += ";preserveAspectRatio=0"), n + ":" + Buffer.from(e).toString("base64") + mt;
}, Yt = {
	setCwd: (e = vt()) => `${pt}50;CurrentDir=${e}${mt}`,
	annotation(e, t = {}) {
		let n = `${pt}1337;`, r = t.x !== void 0, i = t.y !== void 0;
		if ((r || i) && !(r && i && t.length !== void 0)) throw Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
		return e = e.replaceAll("|", ""), n += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? n += (r ? [
			e,
			t.length,
			t.x,
			t.y
		] : [t.length, e]).join("|") : n += e, n + mt;
	}
}, Xt = w(E(), 1);
function Zt(e, t, { target: n = "stdout", ...r } = {}) {
	return Xt.default[n] ? ut.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
}
Zt.isSupported = Xt.default.stdout, Zt.stderr = (e, t, n = {}) => Zt(e, t, {
	target: "stderr",
	...n
}), Zt.stderr.isSupported = Xt.default.stderr;
var Qt = te().version;
He("driver-adapter-utils"), w(re()), w(re()), He("prisma:engines"), u.default.join(__dirname, "../query-engine-darwin"), u.default.join(__dirname, "../query-engine-darwin-arm64"), u.default.join(__dirname, "../query-engine-debian-openssl-1.0.x"), u.default.join(__dirname, "../query-engine-debian-openssl-1.1.x"), u.default.join(__dirname, "../query-engine-debian-openssl-3.0.x"), u.default.join(__dirname, "../query-engine-linux-static-x64"), u.default.join(__dirname, "../query-engine-linux-static-arm64"), u.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x"), u.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x"), u.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x"), u.default.join(__dirname, "../libquery_engine-darwin.dylib.node"), u.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node"), u.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node"), u.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node"), u.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-linux-musl.so.node"), u.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node"), u.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node"), u.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node"), u.default.join(__dirname, "../query_engine-windows.dll.node"), We("chmodPlusX"), w(D(), 1), w(O()), S({}, {
	error: () => an,
	info: () => rn,
	log: () => tn,
	query: () => on,
	should: () => en,
	tags: () => $t,
	warn: () => nn
});
var $t = {
	error: Se("prisma:error"),
	warn: we("prisma:warn"),
	info: z("prisma:info"),
	query: L("prisma:query")
}, en = { warn: () => !u.env.PRISMA_DISABLE_WARNINGS };
function tn(...e) {
	console.log(...e);
}
function nn(e, ...t) {
	en.warn() && console.warn(`${$t.warn} ${e}`, ...t);
}
function rn(e, ...t) {
	console.info(`${$t.info} ${e}`, ...t);
}
function an(e, ...t) {
	console.error(`${$t.error} ${e}`, ...t);
}
function on(e, ...t) {
	console.log(`${$t.query} ${e}`, ...t);
}
function sn({ onlyFirst: e = !1 } = {}) {
	let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
	return new RegExp(t, e ? void 0 : "g");
}
sn(), w(ae()), We("prisma:tryLoadEnv");
function cn(e, t) {
	if (e.length === 0) return;
	let n = e[0];
	for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
	return n;
}
function G(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
G(class e extends Error {
	clientVersion;
	errorCode;
	retryable;
	constructor(t, n, r) {
		super(t), this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = r, Error.captureStackTrace(e);
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientInitializationError";
	}
}, "PrismaClientInitializationError"), G(class extends Error {
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
}, "PrismaClientKnownRequestError"), G(class extends Error {
	clientVersion;
	constructor(e, t) {
		super(e), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientRustPanicError";
	}
}, "PrismaClientRustPanicError"), G(class extends Error {
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
}, "PrismaClientUnknownRequestError"), G(class extends Error {
	name = "PrismaClientValidationError";
	clientVersion;
	constructor(e, { clientVersion: t }) {
		super(e), this.clientVersion = t;
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientValidationError";
	}
}, "PrismaClientValidationError");
function ln(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function un(e) {
	return e.toString() !== "Invalid Date";
}
var dn = 9e15, fn = 1e9, pn = "0123456789abcdef", mn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", hn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", gn = {
	precision: 20,
	rounding: 4,
	modulo: 1,
	toExpNeg: -7,
	toExpPos: 21,
	minE: -dn,
	maxE: dn,
	crypto: !1
}, _n, vn, K = !0, yn = "[DecimalError] ", bn = yn + "Invalid argument: ", xn = yn + "Precision limit exceeded", Sn = yn + "crypto unavailable", Cn = "[object Decimal]", wn = Math.floor, q = Math.pow, Tn = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, En = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Dn = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, On = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kn = 1e7, J = 7, An = 9007199254740991, jn = mn.length - 1, Mn = hn.length - 1, Y = { toStringTag: Cn };
Y.absoluteValue = Y.abs = function() {
	var e = new this.constructor(this);
	return e.s < 0 && (e.s = 1), Q(e);
}, Y.ceil = function() {
	return Q(new this.constructor(this), this.e + 1, 2);
}, Y.clampedTo = Y.clamp = function(e, t) {
	var n, r = this, i = r.constructor;
	if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
	if (e.gt(t)) throw Error(bn + t);
	return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
}, Y.comparedTo = Y.cmp = function(e) {
	var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
	if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
	if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
	if (c !== l) return c;
	if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
	for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
	return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
}, Y.cosine = Y.cos = function() {
	var e, t, n = this, r = n.constructor;
	return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = In(r, er(r, n)), r.precision = e, r.rounding = t, Q(vn == 2 || vn == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
}, Y.cubeRoot = Y.cbrt = function() {
	var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
	if (!u.isFinite() || u.isZero()) return new d(u);
	for (K = !1, a = u.s * q(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = X(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = q(n, 1 / 3), e = wn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = Z(l.plus(u).times(s), l.plus(c), o + 2, 1), X(s.d).slice(0, o) === (n = X(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
		if (!i && (Q(s, e + 1, 0), s.times(s).times(s).eq(u))) {
			r = s;
			break;
		}
		o += 4, i = 1;
	} else {
		(!+n || !+n.slice(1) && n.charAt(0) == "5") && (Q(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
		break;
	}
	return K = !0, Q(r, e, d.rounding, t);
}, Y.decimalPlaces = Y.dp = function() {
	var e, t = this.d, n = NaN;
	if (t) {
		if (e = t.length - 1, n = (e - wn(this.e / J)) * J, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
		n < 0 && (n = 0);
	}
	return n;
}, Y.dividedBy = Y.div = function(e) {
	return Z(this, new this.constructor(e));
}, Y.dividedToIntegerBy = Y.divToInt = function(e) {
	var t = this, n = t.constructor;
	return Q(Z(t, new n(e), 0, 1, 1), n.precision, n.rounding);
}, Y.equals = Y.eq = function(e) {
	return this.cmp(e) === 0;
}, Y.floor = function() {
	return Q(new this.constructor(this), this.e + 1, 3);
}, Y.greaterThan = Y.gt = function(e) {
	return this.cmp(e) > 0;
}, Y.greaterThanOrEqualTo = Y.gte = function(e) {
	var t = this.cmp(e);
	return t == 1 || t === 0;
}, Y.hyperbolicCosine = Y.cosh = function() {
	var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
	if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
	if (a.isZero()) return s;
	n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / $n(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Qn(o, 1, a.times(t), new o(1), !0);
	for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
	return Q(a, o.precision = n, o.rounding = r, !0);
}, Y.hyperbolicSine = Y.sinh = function() {
	var e, t, n, r, i = this, a = i.constructor;
	if (!i.isFinite() || i.isZero()) return new a(i);
	if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = Qn(a, 2, i, i, !0);
	else {
		e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / $n(5, e)), i = Qn(a, 2, i, i, !0);
		for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
	}
	return a.precision = t, a.rounding = n, Q(i, t, n, !0);
}, Y.hyperbolicTangent = Y.tanh = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, Z(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
}, Y.inverseCosine = Y.acos = function() {
	var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
	return n === -1 ? e.isZero() ? Bn(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? Bn(t, r, i) : new t(0) : new t(NaN);
}, Y.inverseHyperbolicCosine = Y.acosh = function() {
	var e, t, n = this, r = n.constructor;
	return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, K = !1, n = n.times(n).minus(1).sqrt().plus(n), K = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
}, Y.inverseHyperbolicSine = Y.asinh = function() {
	var e, t, n = this, r = n.constructor;
	return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, K = !1, n = n.times(n).plus(1).sqrt().plus(n), K = !0, r.precision = e, r.rounding = t, n.ln());
}, Y.inverseHyperbolicTangent = Y.atanh = function() {
	var e, t, n, r, i = this, a = i.constructor;
	return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? Q(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = Z(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
}, Y.inverseSine = Y.asin = function() {
	var e, t, n, r, i = this, a = i.constructor;
	return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = Bn(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
}, Y.inverseTangent = Y.atan = function() {
	var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
	if (l.isFinite()) {
		if (l.isZero()) return new u(l);
		if (l.abs().eq(1) && d + 4 <= Mn) return o = Bn(u, d + 4, f).times(.25), o.s = l.s, o;
	} else {
		if (!l.s) return new u(NaN);
		if (d + 4 <= Mn) return o = Bn(u, d + 4, f).times(.5), o.s = l.s, o;
	}
	for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / J + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
	for (K = !1, t = Math.ceil(s / J), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
	return n && (o = o.times(2 << n - 1)), K = !0, Q(o, u.precision = d, u.rounding = f, !0);
}, Y.isFinite = function() {
	return !!this.d;
}, Y.isInteger = Y.isInt = function() {
	return !!this.d && wn(this.e / J) > this.d.length - 2;
}, Y.isNaN = function() {
	return !this.s;
}, Y.isNegative = Y.isNeg = function() {
	return this.s < 0;
}, Y.isPositive = Y.isPos = function() {
	return this.s > 0;
}, Y.isZero = function() {
	return !!this.d && this.d[0] === 0;
}, Y.lessThan = Y.lt = function(e) {
	return this.cmp(e) < 0;
}, Y.lessThanOrEqualTo = Y.lte = function(e) {
	return this.cmp(e) < 1;
}, Y.logarithm = Y.log = function(e) {
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
	if (K = !1, s = d + p, o = qn(l, s), r = t ? zn(u, s + 10) : qn(e, s), c = Z(o, r, s, 1), Pn(c.d, i = d, f)) do
		if (s += 10, o = qn(l, s), r = t ? zn(u, s + 10) : qn(e, s), c = Z(o, r, s, 1), !a) {
			+X(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = Q(c, d + 1, 0));
			break;
		}
	while (Pn(c.d, i += 10, f));
	return K = !0, Q(c, d, f);
}, Y.minus = Y.sub = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
	if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
	if (p.s != e.s) return e.s = -e.s, p.plus(e);
	if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
		if (f[0]) e.s = -e.s;
		else if (l[0]) e = new m(p);
		else return new m(c === 3 ? -0 : 0);
		return K ? Q(e, s, c) : e;
	}
	if (n = wn(e.e / J), u = wn(p.e / J), l = l.slice(), a = u - n, a) {
		for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / J), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
			for (i = r; i && l[--i] === 0;) l[i] = kn - 1;
			--l[i], l[r] += kn;
		}
		l[r] -= f[r];
	}
	for (; l[--o] === 0;) l.pop();
	for (; l[0] === 0; l.shift()) --n;
	return l[0] ? (e.d = l, e.e = Rn(l, n), K ? Q(e, s, c) : e) : new m(c === 3 ? -0 : 0);
}, Y.modulo = Y.mod = function(e) {
	var t, n = this, r = n.constructor;
	return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? Q(new r(n), r.precision, r.rounding) : (K = !1, r.modulo == 9 ? (t = Z(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = Z(n, e, 0, r.modulo, 1), t = t.times(e), K = !0, n.minus(t));
}, Y.naturalExponential = Y.exp = function() {
	return Kn(this);
}, Y.naturalLogarithm = Y.ln = function() {
	return qn(this);
}, Y.negated = Y.neg = function() {
	var e = new this.constructor(this);
	return e.s = -e.s, Q(e);
}, Y.plus = Y.add = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
	if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
	if (d.s != e.s) return e.s = -e.s, d.minus(e);
	if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), K ? Q(e, s, c) : e;
	if (a = wn(d.e / J), r = wn(e.e / J), l = l.slice(), i = a - r, i) {
		for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / J), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
		n.reverse();
	}
	for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / kn | 0, l[i] %= kn;
	for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
	return e.d = l, e.e = Rn(l, r), K ? Q(e, s, c) : e;
}, Y.precision = Y.sd = function(e) {
	var t, n = this;
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(bn + e);
	return n.d ? (t = Vn(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
}, Y.round = function() {
	var e = this, t = e.constructor;
	return Q(new t(e), e.e + 1, t.rounding);
}, Y.sine = Y.sin = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + J, r.rounding = 1, n = Zn(r, er(r, n)), r.precision = e, r.rounding = t, Q(vn > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
}, Y.squareRoot = Y.sqrt = function() {
	var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
	if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
	for (K = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = X(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = wn((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(Z(o, a, n + 2, 1)).times(.5), X(a.d).slice(0, n) === (t = X(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
		if (!i && (Q(a, c + 1, 0), a.times(a).eq(o))) {
			r = a;
			break;
		}
		n += 4, i = 1;
	} else {
		(!+t || !+t.slice(1) && t.charAt(0) == "5") && (Q(r, c + 1, 1), e = !r.times(r).eq(o));
		break;
	}
	return K = !0, Q(r, c, u.rounding, e);
}, Y.tangent = Y.tan = function() {
	var e, t, n = this, r = n.constructor;
	return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = Z(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, Q(vn == 2 || vn == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
}, Y.times = Y.mul = function(e) {
	var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
	if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
	for (n = wn(u.e / J) + wn(e.e / J), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
	for (r = l; --r >= 0;) {
		for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % kn | 0, t = s / kn | 0;
		a[i] = (a[i] + t) % kn | 0;
	}
	for (; !a[--o];) a.pop();
	return t ? ++n : a.shift(), e.d = a, e.e = Rn(a, n), K ? Q(e, d.precision, d.rounding) : e;
}, Y.toBinary = function(e, t) {
	return tr(this, 2, e, t);
}, Y.toDecimalPlaces = Y.toDP = function(e, t) {
	var n = this, r = n.constructor;
	return n = new r(n), e === void 0 ? n : (Nn(e, 0, fn), t === void 0 ? t = r.rounding : Nn(t, 0, 8), Q(n, e + n.e + 1, t));
}, Y.toExponential = function(e, t) {
	var n, r = this, i = r.constructor;
	return e === void 0 ? n = Ln(r, !0) : (Nn(e, 0, fn), t === void 0 ? t = i.rounding : Nn(t, 0, 8), r = Q(new i(r), e + 1, t), n = Ln(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
}, Y.toFixed = function(e, t) {
	var n, r, i = this, a = i.constructor;
	return e === void 0 ? n = Ln(i) : (Nn(e, 0, fn), t === void 0 ? t = a.rounding : Nn(t, 0, 8), r = Q(new a(i), e + i.e + 1, t), n = Ln(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
}, Y.toFraction = function(e) {
	var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
	if (!m) return new h(p);
	if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Vn(m) - p.e - 1, o = a % J, t.d[0] = q(10, o < 0 ? J + o : o), e == null) e = a > 0 ? t : l;
	else {
		if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(bn + s);
		e = s.gt(t) ? a > 0 ? t : l : s;
	}
	for (K = !1, s = new h(X(m)), u = h.precision, h.precision = a = m.length * J * 2; d = Z(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
	return i = Z(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = Z(l, r, a, 1).minus(p).abs().cmp(Z(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, K = !0, f;
}, Y.toHexadecimal = Y.toHex = function(e, t) {
	return tr(this, 16, e, t);
}, Y.toNearest = function(e, t) {
	var n = this, r = n.constructor;
	if (n = new r(n), e == null) {
		if (!n.d) return n;
		e = new r(1), t = r.rounding;
	} else {
		if (e = new r(e), t === void 0 ? t = r.rounding : Nn(t, 0, 8), !n.d) return e.s ? n : e;
		if (!e.d) return e.s &&= n.s, e;
	}
	return e.d[0] ? (K = !1, n = Z(n, e, 0, t, 1).times(e), K = !0, Q(n)) : (e.s = n.s, n = e), n;
}, Y.toNumber = function() {
	return +this;
}, Y.toOctal = function(e, t) {
	return tr(this, 8, e, t);
}, Y.toPower = Y.pow = function(e) {
	var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
	if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(q(+s, l));
	if (s = new c(s), s.eq(1)) return s;
	if (r = c.precision, a = c.rounding, e.eq(1)) return Q(s, r, a);
	if (t = wn(e.e / J), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= An) return i = Un(c, s, n, r), e.s < 0 ? new c(1).div(i) : Q(i, r, a);
	if (o = s.s, o < 0) {
		if (t < e.d.length - 1) return new c(NaN);
		if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
	}
	return n = q(+s, l), t = n == 0 || !isFinite(n) ? wn(l * (Math.log("0." + X(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (K = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Kn(e.times(qn(s, r + n)), r), i.d && (i = Q(i, r + 5, 1), Pn(i.d, r, a) && (t = r + 10, i = Q(Kn(e.times(qn(s, t + n)), t), t + 5, 1), +X(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = Q(i, r + 1, 0)))), i.s = o, K = !0, c.rounding = a, Q(i, r, a));
}, Y.toPrecision = function(e, t) {
	var n, r = this, i = r.constructor;
	return e === void 0 ? n = Ln(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (Nn(e, 1, fn), t === void 0 ? t = i.rounding : Nn(t, 0, 8), r = Q(new i(r), e, t), n = Ln(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
}, Y.toSignificantDigits = Y.toSD = function(e, t) {
	var n = this, r = n.constructor;
	return e === void 0 ? (e = r.precision, t = r.rounding) : (Nn(e, 1, fn), t === void 0 ? t = r.rounding : Nn(t, 0, 8)), Q(new r(n), e, t);
}, Y.toString = function() {
	var e = this, t = e.constructor, n = Ln(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() && !e.isZero() ? "-" + n : n;
}, Y.truncated = Y.trunc = function() {
	return Q(new this.constructor(this), this.e + 1, 1);
}, Y.valueOf = Y.toJSON = function() {
	var e = this, t = e.constructor, n = Ln(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
	return e.isNeg() ? "-" + n : n;
};
function X(e) {
	var t, n, r, i = e.length - 1, a = "", o = e[0];
	if (i > 0) {
		for (a += o, t = 1; t < i; t++) r = e[t] + "", n = J - r.length, n && (a += Hn(n)), a += r;
		o = e[t], r = o + "", n = J - r.length, n && (a += Hn(n));
	} else if (o === 0) return "0";
	for (; o % 10 == 0;) o /= 10;
	return a + o;
}
function Nn(e, t, n) {
	if (e !== ~~e || e < t || e > n) throw Error(bn + e);
}
function Pn(e, t, n, r) {
	var i, a, o, s;
	for (a = e[0]; a >= 10; a /= 10) --t;
	return --t < 0 ? (t += J, i = 0) : (i = Math.ceil((t + 1) / J), t %= J), a = q(10, J - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == q(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == q(10, t - 3) - 1, o;
}
function Fn(e, t, n) {
	for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
		for (a = i.length; a--;) i[a] *= t;
		for (i[0] += pn.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
	}
	return i.reverse();
}
function In(e, t) {
	var n, r, i;
	if (t.isZero()) return t;
	r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / $n(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Qn(e, 1, t.times(i), new e(1));
	for (var a = n; a--;) {
		var o = t.times(t);
		t = o.times(o).minus(o).times(8).plus(1);
	}
	return e.precision -= n, t;
}
var Z = function() {
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
		var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, ee, E, te, ne = r.constructor, re = r.s == i.s ? 1 : -1, D = r.d, O = i.d;
		if (!D || !D[0] || !O || !O[0]) return new ne(!r.s || !i.s || (D ? O && D[0] == O[0] : !O) ? NaN : D && D[0] == 0 || !O ? re * 0 : re / 0);
		for (c ? (p = 1, u = r.e - i.e) : (c = kn, p = J, u = wn(r.e / p) - wn(i.e / p)), E = O.length, T = D.length, _ = new ne(re), v = _.d = [], d = 0; O[d] == (D[d] || 0); d++);
		if (O[d] > (D[d] || 0) && u--, a == null ? (S = a = ne.precision, o = ne.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
		else {
			if (S = S / p + 2 | 0, d = 0, E == 1) {
				for (f = 0, O = O[0], S++; (d < T || f) && S--; d++) C = f * c + (D[d] || 0), v[d] = C / O | 0, f = C % O | 0;
				m = f || d < T;
			} else {
				for (f = c / (O[0] + 1) | 0, f > 1 && (O = e(O, f, c), D = e(D, f, c), E = O.length, T = D.length), w = E, y = D.slice(0, E), b = y.length; b < E;) y[b++] = 0;
				te = O.slice(), te.unshift(0), ee = O[0], O[1] >= c / 2 && ++ee;
				do
					f = 0, l = t(O, y, E, b), l < 0 ? (x = y[0], E != b && (x = x * c + (y[1] || 0)), f = x / ee | 0, f > 1 ? (f >= c && (f = c - 1), h = e(O, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, E < g ? te : O, g, c))) : (f == 0 && (l = f = 1), h = O.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(O, y, E, b), l < 1 && (f++, n(y, E < b ? te : O, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = D[w] || 0 : (y = [D[w]], b = 1);
				while ((w++ < T || y[0] !== void 0) && S--);
				m = y[0] !== void 0;
			}
			v[0] || v.shift();
		}
		if (p == 1) _.e = u, _n = m;
		else {
			for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
			_.e = d + u * p - 1, Q(_, s ? a + _.e + 1 : a, o, m);
		}
		return _;
	};
}();
function Q(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor;
	e: if (t != null) {
		if (d = e.d, !d) return e;
		for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
		if (a = t - i, a < 0) a += J, o = t, u = d[f = 0], c = u / q(10, i - o - 1) % 10 | 0;
		else if (f = Math.ceil((a + 1) / J), s = d.length, f >= s) if (r) {
			for (; s++ <= f;) d.push(0);
			u = c = 0, i = 1, a %= J, o = a - J + 1;
		} else break e;
		else {
			for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
			a %= J, o = a - J + i, c = o < 0 ? 0 : u / q(10, i - o - 1) % 10 | 0;
		}
		if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % q(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / q(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = q(10, (J - t % J) % J), e.e = -t || 0) : d[0] = e.e = 0, e;
		if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = q(10, J - a), d[f] = o > 0 ? (u / q(10, i - o) % q(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
			for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
			for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
			a != s && (e.e++, d[0] == kn && (d[0] = 1));
			break;
		} else {
			if (d[f] += s, d[f] != kn) break;
			d[f--] = 0, s = 1;
		}
		for (a = d.length; d[--a] === 0;) d.pop();
	}
	return K && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Ln(e, t, n) {
	if (!e.isFinite()) return Jn(e);
	var r, i = e.e, a = X(e.d), o = a.length;
	return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Hn(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Hn(-i - 1) + a, n && (r = n - o) > 0 && (a += Hn(r))) : i >= o ? (a += Hn(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Hn(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Hn(r))), a;
}
function Rn(e, t) {
	var n = e[0];
	for (t *= J; n >= 10; n /= 10) t++;
	return t;
}
function zn(e, t, n) {
	if (t > jn) throw K = !0, n && (e.precision = n), Error(xn);
	return Q(new e(mn), t, 1, !0);
}
function Bn(e, t, n) {
	if (t > Mn) throw Error(xn);
	return Q(new e(hn), t, n, !0);
}
function Vn(e) {
	var t = e.length - 1, n = t * J + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) n--;
		for (t = e[0]; t >= 10; t /= 10) n++;
	}
	return n;
}
function Hn(e) {
	for (var t = ""; e--;) t += "0";
	return t;
}
function Un(e, t, n, r) {
	var i, a = new e(1), o = Math.ceil(r / J + 4);
	for (K = !1;;) {
		if (n % 2 && (a = a.times(t), nr(a.d, o) && (i = !0)), n = wn(n / 2), n === 0) {
			n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
			break;
		}
		t = t.times(t), nr(t.d, o);
	}
	return K = !0, a;
}
function Wn(e) {
	return e.d[e.d.length - 1] & 1;
}
function Gn(e, t, n) {
	for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
		if (i = new e(t[o]), !i.s) {
			a = i;
			break;
		}
		r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
	}
	return a;
}
function Kn(e, t) {
	var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
	if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
	for (t == null ? (K = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
	for (r = Math.log(q(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
		if (a = Q(a.times(e), c, 1), n = n.times(++u), s = o.plus(Z(a, n, c, 1)), X(s.d).slice(0, c) === X(o.d).slice(0, c)) {
			for (i = d; i--;) o = Q(o.times(o), c, 1);
			if (t == null) if (l < 3 && Pn(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
			else return Q(o, f.precision = m, p, K = !0);
			else return f.precision = m, o;
		}
		o = s;
	}
}
function qn(e, t) {
	var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
	if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
	if (t == null ? (K = !1, u = y) : u = t, _.precision = u += m, n = X(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
		for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = X(h.d), r = n.charAt(0), p++;
		a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
	} else return l = zn(_, u + 2, y).times(a + ""), h = qn(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? Q(h, y, v, K = !0) : h;
	for (d = h, c = o = h = Z(h.minus(1), h.plus(1), u, 1), f = Q(h.times(h), u, 1), i = 3;;) {
		if (o = Q(o.times(f), u, 1), l = c.plus(Z(o, new _(i), u, 1)), X(l.d).slice(0, u) === X(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(zn(_, u + 2, y).times(a + ""))), c = Z(c, new _(p), u, 1), t == null) if (Pn(c.d, u - m, v, s)) _.precision = u += m, l = o = h = Z(d.minus(1), d.plus(1), u, 1), f = Q(h.times(h), u, 1), i = s = 1;
		else return Q(c, _.precision = y, v, K = !0);
		else return _.precision = y, c;
		c = l, i += 2;
	}
}
function Jn(e) {
	return String(e.s * e.s / 0);
}
function Yn(e, t) {
	var n, r, i;
	for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
	for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
	if (t = t.slice(r, i), t) {
		if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % J, n < 0 && (r += J), r < i) {
			for (r && e.d.push(+t.slice(0, r)), i -= J; r < i;) e.d.push(+t.slice(r, r += J));
			t = t.slice(r), r = J - t.length;
		} else r -= i;
		for (; r--;) t += "0";
		e.d.push(+t), K && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function Xn(e, t) {
	var n, r, i, a, o, s, c, l, u;
	if (t.indexOf("_") > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, "$1"), On.test(t)) return Yn(e, t);
	} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	if (En.test(t)) n = 16, t = t.toLowerCase();
	else if (Tn.test(t)) n = 2;
	else if (Dn.test(t)) n = 8;
	else throw Error(bn + t);
	for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Un(r, new r(n), a, a * 2)), l = Fn(t, n, kn), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
	return a < 0 ? new r(e.s * 0) : (e.e = Rn(l, u), e.d = l, K = !1, o && (e = Z(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? q(2, c) : Wr.pow(2, c))), K = !0, e);
}
function Zn(e, t) {
	var n, r = t.d.length;
	if (r < 3) return t.isZero() ? t : Qn(e, 2, t, t);
	n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / $n(5, n)), t = Qn(e, 2, t, t);
	for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
	return t;
}
function Qn(e, t, n, r, i) {
	var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / J);
	for (K = !1, c = n.times(n), s = new e(r);;) {
		if (o = Z(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = Z(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
			for (a = d; o.d[a] === s.d[a] && a--;);
			if (a == -1) break;
		}
		a = s, s = r, r = o, o = a, l++;
	}
	return K = !0, o.d.length = d + 1, o;
}
function $n(e, t) {
	for (var n = e; --t;) n *= e;
	return n;
}
function er(e, t) {
	var n, r = t.s < 0, i = Bn(e, e.precision, 1), a = i.times(.5);
	if (t = t.abs(), t.lte(a)) return vn = r ? 4 : 1, t;
	if (n = t.divToInt(i), n.isZero()) vn = r ? 3 : 2;
	else {
		if (t = t.minus(n.times(i)), t.lte(a)) return vn = Wn(n) ? r ? 2 : 3 : r ? 4 : 1, t;
		vn = Wn(n) ? r ? 1 : 4 : r ? 3 : 2;
	}
	return t.minus(i).abs();
}
function tr(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
	if (m ? (Nn(n, 1, fn), r === void 0 ? r = p.rounding : Nn(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = Jn(e);
	else {
		for (u = Ln(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = Fn(Ln(f), 10, i), f.e = f.d.length), d = Fn(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
		if (!d[0]) u = m ? "0p+0" : "0";
		else {
			if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = Z(e, f, n, r, 0, i), d = e.d, a = e.e, l = _n), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
			for (c = d.length; !d[c - 1]; --c);
			for (o = 0, u = ""; o < c; o++) u += pn.charAt(d[o]);
			if (m) {
				if (c > 1) if (t == 16 || t == 8) {
					for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
					for (d = Fn(u, i, t), c = d.length; !d[c - 1]; --c);
					for (o = 1, u = "1."; o < c; o++) u += pn.charAt(d[o]);
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
function nr(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function rr(e) {
	return new this(e).abs();
}
function ir(e) {
	return new this(e).acos();
}
function ar(e) {
	return new this(e).acosh();
}
function or(e, t) {
	return new this(e).plus(t);
}
function sr(e) {
	return new this(e).asin();
}
function cr(e) {
	return new this(e).asinh();
}
function lr(e) {
	return new this(e).atan();
}
function ur(e) {
	return new this(e).atanh();
}
function dr(e, t) {
	e = new this(e), t = new this(t);
	var n, r = this.precision, i = this.rounding, a = r + 4;
	return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Bn(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Bn(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Bn(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(Z(e, t, a, 1)), t = Bn(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(Z(e, t, a, 1)), n;
}
function fr(e) {
	return new this(e).cbrt();
}
function pr(e) {
	return Q(e = new this(e), e.e + 1, 2);
}
function mr(e, t, n) {
	return new this(e).clamp(t, n);
}
function hr(e) {
	if (!e || typeof e != "object") throw Error(yn + "Object expected");
	var t, n, r, i = e.defaults === !0, a = [
		"precision",
		1,
		fn,
		"rounding",
		0,
		8,
		"toExpNeg",
		-dn,
		0,
		"toExpPos",
		0,
		dn,
		"maxE",
		0,
		dn,
		"minE",
		-dn,
		0,
		"modulo",
		0,
		9
	];
	for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = gn[n]), (r = e[n]) !== void 0) if (wn(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
	else throw Error(bn + n + ": " + r);
	if (n = "crypto", i && (this[n] = gn[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
	else throw Error(Sn);
	else this[n] = !1;
	else throw Error(bn + n + ": " + r);
	return this;
}
function gr(e) {
	return new this(e).cos();
}
function _r(e) {
	return new this(e).cosh();
}
function vr(e) {
	var t, n, r;
	function i(e) {
		var t, n, r, a = this;
		if (!(a instanceof i)) return new i(e);
		if (a.constructor = i, Cr(e)) {
			a.s = e.s, K ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
			return;
		}
		if (r = typeof e, r === "number") {
			if (e === 0) {
				a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
				return;
			}
			if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
				for (t = 0, n = e; n >= 10; n /= 10) t++;
				K ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
				return;
			}
			if (e * 0 != 0) {
				e || (a.s = NaN), a.e = NaN, a.d = null;
				return;
			}
			return Yn(a, e.toString());
		}
		if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), On.test(e) ? Yn(a, e) : Xn(a, e);
		if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Yn(a, e.toString());
		throw Error(bn + e);
	}
	if (i.prototype = Y, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = hr, i.clone = vr, i.isDecimal = Cr, i.abs = rr, i.acos = ir, i.acosh = ar, i.add = or, i.asin = sr, i.asinh = cr, i.atan = lr, i.atanh = ur, i.atan2 = dr, i.cbrt = fr, i.ceil = pr, i.clamp = mr, i.cos = gr, i.cosh = _r, i.div = yr, i.exp = br, i.floor = xr, i.hypot = Sr, i.ln = wr, i.log = Tr, i.log10 = Dr, i.log2 = Er, i.max = Or, i.min = kr, i.mod = Ar, i.mul = jr, i.pow = Mr, i.random = Nr, i.round = Pr, i.sign = Fr, i.sin = Ir, i.sinh = Lr, i.sqrt = Rr, i.sub = zr, i.sum = Br, i.tan = Vr, i.tanh = Hr, i.trunc = Ur, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
function yr(e, t) {
	return new this(e).div(t);
}
function br(e) {
	return new this(e).exp();
}
function xr(e) {
	return Q(e = new this(e), e.e + 1, 3);
}
function Sr() {
	var e, t, n = new this(0);
	for (K = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
	else {
		if (t.s) return K = !0, new this(Infinity);
		n = t;
	}
	return K = !0, n.sqrt();
}
function Cr(e) {
	return e instanceof Wr || e && e.toStringTag === Cn || !1;
}
function wr(e) {
	return new this(e).ln();
}
function Tr(e, t) {
	return new this(e).log(t);
}
function Er(e) {
	return new this(e).log(2);
}
function Dr(e) {
	return new this(e).log(10);
}
function Or() {
	return Gn(this, arguments, -1);
}
function kr() {
	return Gn(this, arguments, 1);
}
function Ar(e, t) {
	return new this(e).mod(t);
}
function jr(e, t) {
	return new this(e).mul(t);
}
function Mr(e, t) {
	return new this(e).pow(t);
}
function Nr(e) {
	var t, n, r, i, a = 0, o = new this(1), s = [];
	if (e === void 0 ? e = this.precision : Nn(e, 1, fn), r = Math.ceil(e / J), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
	else if (crypto.randomBytes) {
		for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
		a = r / 4;
	} else throw Error(Sn);
	else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
	for (r = s[--a], e %= J, r && e && (i = q(10, J - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
	if (a < 0) n = 0, s = [0];
	else {
		for (n = -1; s[0] === 0; n -= J) s.shift();
		for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
		r < J && (n -= J - r);
	}
	return o.e = n, o.d = s, o;
}
function Pr(e) {
	return Q(e = new this(e), e.e + 1, this.rounding);
}
function Fr(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Ir(e) {
	return new this(e).sin();
}
function Lr(e) {
	return new this(e).sinh();
}
function Rr(e) {
	return new this(e).sqrt();
}
function zr(e, t) {
	return new this(e).sub(t);
}
function Br() {
	var e = 0, t = arguments, n = new this(t[e]);
	for (K = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
	return K = !0, Q(n, this.precision, this.rounding);
}
function Vr(e) {
	return new this(e).tan();
}
function Hr(e) {
	return new this(e).tanh();
}
function Ur(e) {
	return Q(e = new this(e), e.e + 1, 1);
}
Y[Symbol.for("nodejs.util.inspect.custom")] = Y.toString, Y[Symbol.toStringTag] = "Decimal";
var Wr = Y.constructor = vr(gn);
mn = new Wr(mn), hn = new Wr(hn);
var Gr = Wr;
function Kr(e) {
	return Wr.isDecimal(e) ? !0 : typeof e == "object" && !!e && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
S({}, {
	ModelAction: () => Jr,
	datamodelEnumToSchemaEnum: () => qr
});
function qr(e) {
	return {
		name: e.name,
		values: e.values.map((e) => e.name)
	};
}
var Jr = ((e) => (e.findUnique = "findUnique", e.findUniqueOrThrow = "findUniqueOrThrow", e.findFirst = "findFirst", e.findFirstOrThrow = "findFirstOrThrow", e.findMany = "findMany", e.create = "create", e.createMany = "createMany", e.createManyAndReturn = "createManyAndReturn", e.update = "update", e.updateMany = "updateMany", e.updateManyAndReturn = "updateManyAndReturn", e.upsert = "upsert", e.delete = "delete", e.deleteMany = "deleteMany", e.groupBy = "groupBy", e.count = "count", e.aggregate = "aggregate", e.findRaw = "findRaw", e.aggregateRaw = "aggregateRaw", e))(Jr || {});
w(O());
var Yr = {
	keyword: z,
	entity: z,
	value: (e) => P(L(e)),
	punctuation: L,
	directive: z,
	function: z,
	variable: (e) => P(L(e)),
	string: (e) => P(Ce(e)),
	boolean: we,
	number: z,
	comment: Ee
}, Xr = (e) => e, Zr = {}, Qr = 0, $ = {
	manual: Zr.Prism && Zr.Prism.manual,
	disableWorkerMessageHandler: Zr.Prism && Zr.Prism.disableWorkerMessageHandler,
	util: {
		encode: function(e) {
			if (e instanceof $r) {
				let t = e;
				return new $r(t.type, $.util.encode(t.content), t.alias);
			} else return Array.isArray(e) ? e.map($.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
		},
		type: function(e) {
			return Object.prototype.toString.call(e).slice(8, -1);
		},
		objId: function(e) {
			return e.__id || Object.defineProperty(e, "__id", { value: ++Qr }), e.__id;
		},
		clone: function e(t, n) {
			let r, i, a = $.util.type(t);
			switch (n ||= {}, a) {
				case "Object":
					if (i = $.util.objId(t), n[i]) return n[i];
					r = {}, n[i] = r;
					for (let i in t) t.hasOwnProperty(i) && (r[i] = e(t[i], n));
					return r;
				case "Array": return i = $.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach(function(t, i) {
					r[i] = e(t, n);
				}), r);
				default: return t;
			}
		}
	},
	languages: {
		extend: function(e, t) {
			let n = $.util.clone($.languages[e]);
			for (let e in t) n[e] = t[e];
			return n;
		},
		insertBefore: function(e, t, n, r) {
			r ||= $.languages;
			let i = r[e], a = {};
			for (let e in i) if (i.hasOwnProperty(e)) {
				if (e == t) for (let e in n) n.hasOwnProperty(e) && (a[e] = n[e]);
				n.hasOwnProperty(e) || (a[e] = i[e]);
			}
			let o = r[e];
			return r[e] = a, $.languages.DFS($.languages, function(t, n) {
				n === o && t != e && (this[t] = a);
			}), a;
		},
		DFS: function e(t, n, r, i) {
			i ||= {};
			let a = $.util.objId;
			for (let o in t) if (t.hasOwnProperty(o)) {
				n.call(t, o, t[o], r || o);
				let s = t[o], c = $.util.type(s);
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
		return $.hooks.run("before-tokenize", r), r.tokens = $.tokenize(r.code, r.grammar), $.hooks.run("after-tokenize", r), $r.stringify($.util.encode(r.tokens), r.language);
	},
	matchGrammar: function(e, t, n, r, i, a, o) {
		for (let h in n) {
			if (!n.hasOwnProperty(h) || !n[h]) continue;
			if (h == o) return;
			let g = n[h];
			g = $.util.type(g) === "Array" ? g : [g];
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
					if (r instanceof $r) continue;
					if (b && o != t.length - 1) {
						_.lastIndex = g;
						var s = _.exec(e);
						if (!s) break;
						var c = s.index + (y ? s[1].length : 0), l = s.index + s[0].length, u = o, d = g;
						for (let e = t.length; u < e && (d < l || !t[u].type && !t[u - 1].greedy); ++u) d += t[u].length, c >= d && (++o, g = d);
						if (t[o] instanceof $r) continue;
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
					let C = new $r(h, v ? $.tokenize(s, v) : s, S, s, b);
					if (i.push(C), m && i.push(m), Array.prototype.splice.apply(t, i), f != 1 && $.matchGrammar(e, t, n, o, g, !0, h), a) break;
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
		return $.matchGrammar(e, n, t, 0, 0, !1), n;
	},
	hooks: {
		all: {},
		add: function(e, t) {
			let n = $.hooks.all;
			n[e] = n[e] || [], n[e].push(t);
		},
		run: function(e, t) {
			let n = $.hooks.all[e];
			if (!(!n || !n.length)) for (var r = 0, i; i = n[r++];) i(t);
		}
	},
	Token: $r
};
$.languages.clike = {
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
}, $.languages.javascript = $.languages.extend("clike", {
	"class-name": [$.languages.clike["class-name"], {
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
}), $.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, $.languages.insertBefore("javascript", "keyword", {
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
			inside: $.languages.javascript
		},
		{
			pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
			inside: $.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
			lookbehind: !0,
			inside: $.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
			lookbehind: !0,
			inside: $.languages.javascript
		}
	],
	constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), $.languages.markup && $.languages.markup.tag.addInlined("script", "javascript"), $.languages.js = $.languages.javascript, $.languages.typescript = $.languages.extend("javascript", {
	keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
	builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
}), $.languages.ts = $.languages.typescript;
function $r(e, t, n, r, i) {
	this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
$r.stringify = function(e, t) {
	return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(e) {
		return $r.stringify(e, t);
	}).join("") : ei(e.type)(e.content);
};
function ei(e) {
	return Yr[e] || Xr;
}
var ti = w(se());
function ni(e, t, n) {
	let r = oi(ii(ri(e)));
	r ? vi(r, t, n) : t.addErrorMessage(() => "Unknown error");
}
function ri(e) {
	return e.errors.flatMap((e) => e.kind === "Union" ? ri(e) : [e]);
}
function ii(e) {
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
				typeNames: ai(i.argument.typeNames, r.argument.typeNames)
			}
		}) : t.set(e, r);
	}
	return n.push(...t.values()), n;
}
function ai(e, t) {
	return [...new Set(e.concat(t))];
}
function oi(e) {
	return cn(e, (e, t) => {
		let n = si(e), r = si(t);
		return n === r ? ci(e) - ci(t) : n - r;
	});
}
function si(e) {
	let t = 0;
	return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function ci(e) {
	switch (e.kind) {
		case "InvalidArgumentValue":
		case "ValueTooLarge": return 20;
		case "InvalidArgumentType": return 10;
		case "RequiredArgumentMissing": return -10;
		default: return 0;
	}
}
var li = class {
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
A(), k();
var ui = class {
	constructor(e) {
		this.value = e;
	}
	write(e) {
		e.write(this.value);
	}
	markAsError() {
		this.value.markAsError();
	}
}, di = { write(e) {
	e.writeLine(",");
} }, fi = class {
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
}, pi = class {
	hasError = !1;
	markAsError() {
		return this.hasError = !0, this;
	}
}, mi = class extends pi {
	items = [];
	addItem(e) {
		return this.items.push(new ui(e)), this;
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
		let t = new fi("[]");
		this.hasError && t.setColor(e.context.colors.red).underline(), e.write(t);
	}
	writeWithItems(e) {
		let { colors: t } = e.context;
		e.writeLine("[").withIndent(() => e.writeJoined(di, this.items).newLine()).write("]"), this.hasError && e.afterNextNewline(() => {
			e.writeLine(t.red("~".repeat(this.getPrintWidth())));
		});
	}
	asObject() {}
}, hi = class e extends pi {
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
			if (a.value instanceof e ? n = a.value.getField(t) : a.value instanceof mi && (n = a.value.getField(Number(t))), !n) return;
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
		let t = new fi("{}");
		this.hasError && t.setColor(e.context.colors.red).underline(), e.write(t);
	}
	writeWithContents(e, t) {
		e.writeLine("{").withIndent(() => {
			e.writeJoined(di, [...t, ...this.suggestions]).newLine();
		}), e.write("}"), this.hasError && e.afterNextNewline(() => {
			e.writeLine(e.context.colors.red("~".repeat(this.getPrintWidth())));
		});
	}
}, gi = class extends pi {
	constructor(e) {
		super(), this.text = e;
	}
	getPrintWidth() {
		return this.text.length;
	}
	write(e) {
		let t = new fi(this.text);
		this.hasError && t.underline().setColor(e.context.colors.red), e.write(t);
	}
	asObject() {}
}, _i = class {
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
			e.writeJoined(di, this.fields).newLine();
		}).write(t("}")).addMarginSymbol(t("+"));
	}
};
function vi(e, t, n) {
	switch (e.kind) {
		case "MutuallyExclusiveFields":
			yi(e, t);
			break;
		case "IncludeOnScalar":
			bi(e, t);
			break;
		case "EmptySelection":
			xi(e, t, n);
			break;
		case "UnknownSelectionField":
			Ti(e, t);
			break;
		case "InvalidSelectionValue":
			Ei(e, t);
			break;
		case "UnknownArgument":
			Di(e, t);
			break;
		case "UnknownInputField":
			Oi(e, t);
			break;
		case "RequiredArgumentMissing":
			Ai(e, t);
			break;
		case "InvalidArgumentType":
			Mi(e, t);
			break;
		case "InvalidArgumentValue":
			Ni(e, t);
			break;
		case "ValueTooLarge":
			Pi(e, t);
			break;
		case "SomeFieldsMissing":
			Fi(e, t);
			break;
		case "TooManyFieldsGiven":
			Ii(e, t);
			break;
		case "Union":
			ni(e, t, n);
			break;
		default: throw Error("not implemented: " + e.kind);
	}
}
function yi(e, t) {
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	n && (n.getField(e.firstField)?.markAsError(), n.getField(e.secondField)?.markAsError()), t.addErrorMessage((t) => `Please ${t.bold("either")} use ${t.green(`\`${e.firstField}\``)} or ${t.green(`\`${e.secondField}\``)}, but ${t.red("not both")} at the same time.`);
}
function bi(e, t) {
	let [n, r] = Ui(e.selectionPath), i = e.outputType, a = t.arguments.getDeepSelectionParent(n)?.value;
	if (a && (a.getField(r)?.markAsError(), i)) for (let e of i.fields) e.isRelation && a.addSuggestion(new li(e.name, "true"));
	t.addErrorMessage((e) => {
		let t = `Invalid scalar field ${e.red(`\`${r}\``)} for ${e.bold("include")} statement`;
		return i ? t += ` on model ${e.bold(i.name)}. ${Wi(e)}` : t += ".", t += `
Note that ${e.bold("include")} statements only accept relation fields.`, t;
	});
}
function xi(e, t, n) {
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let n = r.getField("omit")?.value.asObject();
		if (n) {
			Si(e, t, n);
			return;
		}
		if (r.hasField("select")) {
			Ci(e, t);
			return;
		}
	}
	if (n?.[ln(e.outputType.name)]) {
		wi(e, t);
		return;
	}
	t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function Si(e, t, n) {
	n.removeAllFields();
	for (let t of e.outputType.fields) n.addSuggestion(new li(t.name, "false"));
	t.addErrorMessage((t) => `The ${t.red("omit")} statement includes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Ci(e, t) {
	let n = e.outputType, r = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = r?.isEmpty() ?? !1;
	r && (r.removeAllFields(), Li(r, n)), t.addErrorMessage((e) => i ? `The ${e.red("`select`")} statement for type ${e.bold(n.name)} must not be empty. ${Wi(e)}` : `The ${e.red("`select`")} statement for type ${e.bold(n.name)} needs ${e.bold("at least one truthy value")}.`);
}
function wi(e, t) {
	let n = new _i();
	for (let t of e.outputType.fields) t.isRelation || n.addField(t.name, "false");
	let r = new li("omit", n).makeRequired();
	if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
	else {
		let [n, i] = Ui(e.selectionPath), a = t.arguments.getDeepSelectionParent(n)?.value.asObject()?.getField(i);
		if (a) {
			let e = a?.value.asObject() ?? new hi();
			e.addSuggestion(r), a.value = e;
		}
	}
	t.addErrorMessage((t) => `The global ${t.red("omit")} configuration excludes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Ti(e, t) {
	let n = Vi(e.selectionPath, t);
	if (n.parentKind !== "unknown") {
		n.field.markAsError();
		let t = n.parent;
		switch (n.parentKind) {
			case "select":
				Li(t, e.outputType);
				break;
			case "include":
				Ri(t, e.outputType);
				break;
			case "omit":
				zi(t, e.outputType);
				break;
		}
	}
	t.addErrorMessage((t) => {
		let r = [`Unknown field ${t.red(`\`${n.fieldName}\``)}`];
		return n.parentKind !== "unknown" && r.push(`for ${t.bold(n.parentKind)} statement`), r.push(`on model ${t.bold(`\`${e.outputType.name}\``)}.`), r.push(Wi(t)), r.join(" ");
	});
}
function Ei(e, t) {
	let n = Vi(e.selectionPath, t);
	n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((t) => `Invalid value for selection field \`${t.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function Di(e, t) {
	let n = e.argumentPath[0], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && (r.getField(n)?.markAsError(), Bi(r, e.arguments)), t.addErrorMessage((t) => ki(t, n, e.arguments.map((e) => e.name)));
}
function Oi(e, t) {
	let [n, r] = Ui(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (i) {
		i.getDeepField(e.argumentPath)?.markAsError();
		let t = i.getDeepFieldValue(n)?.asObject();
		t && Hi(t, e.inputType);
	}
	t.addErrorMessage((t) => ki(t, r, e.inputType.fields.map((e) => e.name)));
}
function ki(e, t, n) {
	let r = [`Unknown argument \`${e.red(t)}\`.`], i = qi(t, n);
	return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(Wi(e)), r.join(" ");
}
function Ai(e, t) {
	let n;
	t.addErrorMessage((e) => n?.value instanceof gi && n.value.text === "null" ? `Argument \`${e.green(a)}\` must not be ${e.red("null")}.` : `Argument \`${e.green(a)}\` is missing.`);
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (!r) return;
	let [i, a] = Ui(e.argumentPath), o = new _i(), s = r.getDeepFieldValue(i)?.asObject();
	if (s) {
		if (n = s.getField(a), n && s.removeField(a), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
			for (let t of e.inputTypes[0].fields) o.addField(t.name, t.typeNames.join(" | "));
			s.addSuggestion(new li(a, o).makeRequired());
		} else {
			let t = e.inputTypes.map(ji).join(" | ");
			s.addSuggestion(new li(a, t).makeRequired());
		}
		if (e.dependentArgumentPath) {
			r.getDeepField(e.dependentArgumentPath)?.markAsError();
			let [, n] = Ui(e.dependentArgumentPath);
			t.addErrorMessage((e) => `Argument \`${e.green(a)}\` is required because argument \`${e.green(n)}\` was provided.`);
		}
	}
}
function ji(e) {
	return e.kind === "list" ? `${ji(e.elementType)}[]` : e.name;
}
function Mi(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = Gi("or", e.argument.typeNames.map((e) => t.green(e)));
		return `Argument \`${t.bold(n)}\`: Invalid value provided. Expected ${r}, provided ${t.red(e.inferredType)}.`;
	});
}
function Ni(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = [`Invalid value for argument \`${t.bold(n)}\``];
		if (e.underlyingError && r.push(`: ${e.underlyingError}`), r.push("."), e.argument.typeNames.length > 0) {
			let n = Gi("or", e.argument.typeNames.map((e) => t.green(e)));
			r.push(` Expected ${n}.`);
		}
		return r.join("");
	});
}
function Pi(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
	if (r) {
		let t = r.getDeepField(e.argumentPath)?.value;
		t?.markAsError(), t instanceof gi && (i = t.text);
	}
	t.addErrorMessage((e) => {
		let t = ["Unable to fit value"];
		return i && t.push(e.red(i)), t.push(`into a 64-bit signed integer for field \`${e.bold(n)}\``), t.join(" ");
	});
}
function Fi(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && Hi(t, e.inputType);
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? r.push(`${t.green("at least one of")} ${Gi("or", e.constraints.requiredFields.map((e) => `\`${t.bold(e)}\``))} arguments.`) : r.push(`${t.green("at least one")} argument.`) : r.push(`${t.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), r.push(Wi(t)), r.join(" ");
	});
}
function Ii(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && (t.markAsError(), i = Object.keys(t.getFields()));
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? r.push(`${t.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? r.push(`${t.green("at most one")} argument,`) : r.push(`${t.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), r.push(`but you provided ${Gi("and", i.map((e) => t.red(e)))}. Please choose`), e.constraints.maxFieldCount === 1 ? r.push("one.") : r.push(`${e.constraints.maxFieldCount}.`), r.join(" ");
	});
}
function Li(e, t) {
	for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new li(n.name, "true"));
}
function Ri(e, t) {
	for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new li(n.name, "true"));
}
function zi(e, t) {
	for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new li(n.name, "true"));
}
function Bi(e, t) {
	for (let n of t) e.hasField(n.name) || e.addSuggestion(new li(n.name, n.typeNames.join(" | ")));
}
function Vi(e, t) {
	let [n, r] = Ui(e), i = t.arguments.getDeepSubSelectionValue(n)?.asObject();
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
function Hi(e, t) {
	if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new li(n.name, n.typeNames.join(" | ")));
}
function Ui(e) {
	let t = [...e], n = t.pop();
	if (!n) throw Error("unexpected empty path");
	return [t, n];
}
function Wi({ green: e, enabled: t }) {
	return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function Gi(e, t) {
	if (t.length === 1) return t[0];
	let n = [...t], r = n.pop();
	return `${n.join(", ")} ${e} ${r}`;
}
var Ki = 3;
function qi(e, t) {
	let n = Infinity, r;
	for (let i of t) {
		let t = (0, ti.default)(e, i);
		t > Ki || t < n && (n = t, r = i);
	}
	return r;
}
var Ji = class {
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
function Yi(e) {
	return e instanceof Ji;
}
var Xi = Symbol(), Zi = /* @__PURE__ */ new WeakMap(), Qi = class {
	constructor(e) {
		e === Xi ? Zi.set(this, `Prisma.${this._getName()}`) : Zi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
	}
	_getName() {
		return this.constructor.name;
	}
	toString() {
		return Zi.get(this);
	}
}, $i = class extends Qi {
	_getNamespace() {
		return "NullTypes";
	}
}, ea = class extends $i {};
ra(ea, "DbNull");
var ta = class extends $i {};
ra(ta, "JsonNull");
var na = class extends $i {};
ra(na, "AnyNull"), new ea(Xi), new ta(Xi), new na(Xi);
function ra(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
var ia = ": ", aa = class {
	constructor(e, t) {
		this.name = e, this.value = t;
	}
	hasError = !1;
	markAsError() {
		this.hasError = !0;
	}
	getPrintWidth() {
		return this.name.length + this.value.getPrintWidth() + ia.length;
	}
	write(e) {
		let t = new fi(this.name);
		this.hasError && t.underline().setColor(e.context.colors.red), e.write(t).write(ia).write(this.value);
	}
};
function oa(e) {
	let t = new hi();
	for (let [n, r] of Object.entries(e)) {
		let e = new aa(n, sa(r));
		t.addField(e);
	}
	return t;
}
function sa(e) {
	return typeof e == "string" ? new gi(JSON.stringify(e)) : typeof e == "number" || typeof e == "boolean" ? new gi(String(e)) : typeof e == "bigint" ? new gi(`${e}n`) : e === null ? new gi("null") : e === void 0 ? new gi("undefined") : Kr(e) ? new gi(`new Prisma.Decimal("${e.toFixed()}")`) : e instanceof Uint8Array ? Buffer.isBuffer(e) ? new gi(`Buffer.alloc(${e.byteLength})`) : new gi(`new Uint8Array(${e.byteLength})`) : e instanceof Date ? new gi(`new Date("${un(e) ? e.toISOString() : "Invalid Date"}")`) : e instanceof Qi ? new gi(`Prisma.${e._getName()}`) : Yi(e) ? new gi(`prisma.${ln(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? ca(e) : typeof e == "object" ? oa(e) : new gi(Object.prototype.toString.call(e));
}
function ca(e) {
	let t = new mi();
	for (let n of e) t.addItem(sa(n));
	return t;
}
var la = Symbol(), ua = new class {
	constructor(e) {
		if (e !== la) throw Error("Skip instance can not be constructed directly");
	}
	ifUndefined(e) {
		return e === void 0 ? ua : e;
	}
}(la);
w(ne());
var da = class e {
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
function fa(e) {
	return new da([e], []);
}
fa("");
function pa(e, t, n, r) {
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
			return o.customDataProxyFetch = ha(i, s), pa(o, t, n + 1, r);
		}
	});
}
var ma = (e) => e;
function ha(e = ma, t = ma) {
	return (n) => e(t(n));
}
He("prisma:client"), He("prisma:client:engines:resolveEnginePath"), w(oe());
function ga(e, t) {
	throw Error(t);
}
function _a(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
function va(e, t) {
	let n = {};
	for (let r of Object.keys(e)) n[r] = t(e[r], r);
	return n;
}
function ya(e) {
	return e === null ? e : Array.isArray(e) ? e.map(ya) : typeof e == "object" ? _a(e) ? ba(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : va(e, ya) : e;
}
function ba({ $type: e, value: t }) {
	switch (e) {
		case "BigInt": return BigInt(t);
		case "Bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "DateTime": return new Date(t);
		case "Decimal": return new Wr(t);
		case "Json": return JSON.parse(t);
		default: ga(t, "Unknown tagged value");
	}
}
var xa = class extends Error {
	clientVersion;
	cause;
	constructor(e, t) {
		super(e), this.clientVersion = t.clientVersion, this.cause = t.cause;
	}
	get [Symbol.toStringTag]() {
		return this.name;
	}
}, Sa = class extends xa {
	isRetryable;
	constructor(e, t) {
		super(e, t), this.isRetryable = t.isRetryable ?? !0;
	}
};
function Ca(e, t) {
	return {
		...e,
		isRetryable: t
	};
}
G(class extends Sa {
	name = "InvalidDatasourceError";
	code = "P6001";
	constructor(e, t) {
		super(e, Ca(t, !1));
	}
}, "InvalidDatasourceError"), w(re()), G(class extends Sa {
	name = "ForcedRetryError";
	code = "P5001";
	constructor(e) {
		super("This request must be retried", Ca(e, !0));
	}
}, "ForcedRetryError"), G(class extends Sa {
	name = "NotImplementedYetError";
	code = "P5004";
	constructor(e, t) {
		super(e, Ca(t, !1));
	}
}, "NotImplementedYetError");
var wa = class extends Sa {
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
G(class extends wa {
	name = "SchemaMissingError";
	code = "P5005";
	constructor(e) {
		super("Schema needs to be uploaded", Ca(e, !0));
	}
}, "SchemaMissingError");
var Ta = "This request could not be understood by the server";
G(class extends wa {
	name = "BadRequestError";
	code = "P5000";
	constructor(e, t, n) {
		super(t || Ta, Ca(e, !1)), n && (this.code = n);
	}
}, "BadRequestError"), G(class extends wa {
	name = "HealthcheckTimeoutError";
	code = "P5013";
	logs;
	constructor(e, t) {
		super("Engine not started: healthcheck timeout", Ca(e, !0)), this.logs = t;
	}
}, "HealthcheckTimeoutError"), G(class extends wa {
	name = "EngineStartupError";
	code = "P5014";
	logs;
	constructor(e, t, n) {
		super(t, Ca(e, !0)), this.logs = n;
	}
}, "EngineStartupError"), G(class extends wa {
	name = "EngineVersionNotSupportedError";
	code = "P5012";
	constructor(e) {
		super("Engine version is not supported", Ca(e, !1));
	}
}, "EngineVersionNotSupportedError");
var Ea = "Request timed out";
G(class extends wa {
	name = "GatewayTimeoutError";
	code = "P5009";
	constructor(e, t = Ea) {
		super(t, Ca(e, !1));
	}
}, "GatewayTimeoutError");
var Da = "Interactive transaction error";
G(class extends wa {
	name = "InteractiveTransactionError";
	code = "P5015";
	constructor(e, t = Da) {
		super(t, Ca(e, !1));
	}
}, "InteractiveTransactionError");
var Oa = "Request parameters are invalid";
G(class extends wa {
	name = "InvalidRequestError";
	code = "P5011";
	constructor(e, t = Oa) {
		super(t, Ca(e, !1));
	}
}, "InvalidRequestError");
var ka = "Requested resource does not exist";
G(class extends wa {
	name = "NotFoundError";
	code = "P5003";
	constructor(e, t = ka) {
		super(t, Ca(e, !1));
	}
}, "NotFoundError");
var Aa = "Unknown server error";
G(class extends wa {
	name = "ServerError";
	code = "P5006";
	logs;
	constructor(e, t, n) {
		super(t || Aa, Ca(e, !0)), this.logs = n;
	}
}, "ServerError");
var ja = "Unauthorized, check your connection string";
G(class extends wa {
	name = "UnauthorizedError";
	code = "P5007";
	constructor(e, t = ja) {
		super(t, Ca(e, !1));
	}
}, "UnauthorizedError");
var Ma = "Usage exceeded, retry again later";
G(class extends wa {
	name = "UsageExceededError";
	code = "P5008";
	constructor(e, t = Ma) {
		super(t, Ca(e, !0));
	}
}, "UsageExceededError"), G(class extends Sa {
	name = "RequestError";
	code = "P5010";
	constructor(e, t) {
		super(`Cannot fetch data from service:
${e}`, Ca(t, !0));
	}
}, "RequestError"), He("prisma:client:dataproxyEngine"), He("prisma:client:dataproxyEngine"), He("prisma:client:libraryEngine"), [...Ge], He("prisma:client"), Qt.split(".")[0];
function Na(e) {
	return `(${Object.keys(e).sort().map((t) => {
		let n = e[t];
		return typeof n == "object" && n ? `(${t} ${Na(n)})` : t;
	}).join(" ")})`;
}
function Pa(e, t) {
	if (t === null) return t;
	switch (e) {
		case "bigint": return BigInt(t);
		case "bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "decimal": return new Gr(t);
		case "datetime":
		case "date": return new Date(t);
		case "time": return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
		case "bigint-array": return t.map((e) => Pa("bigint", e));
		case "bytes-array": return t.map((e) => Pa("bytes", e));
		case "decimal-array": return t.map((e) => Pa("decimal", e));
		case "datetime-array": return t.map((e) => Pa("datetime", e));
		case "date-array": return t.map((e) => Pa("date", e));
		case "time-array": return t.map((e) => Pa("time", e));
		default: return t;
	}
}
He("prisma:client:request_handler");
function Fa(e) {
	if (e.kind === "Union") return {
		kind: "Union",
		errors: e.errors.map(Fa)
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
w(se()), G(class extends Error {
	constructor(e) {
		super(e + "\nRead more at https://pris.ly/d/client-constructor"), this.name = "PrismaClientConstructorValidationError";
	}
	get [Symbol.toStringTag]() {
		return "PrismaClientConstructorValidationError";
	}
}, "PrismaClientConstructorValidationError"), He("prisma:client"), typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
//#endregion
//#region ../../node_modules/@prisma/client/runtime/index-browser.js
var Ia = /* @__PURE__ */ o(((e, t) => {
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
		Decimal: () => Nt,
		Public: () => f,
		getRuntime: () => se,
		makeStrictEnum: () => E,
		objectEnumValues: () => w
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
	v = /* @__PURE__ */ new WeakMap(), T(y, "DbNull");
	var b, x = class extends _ {
		constructor() {
			super(...arguments), u(this, b);
		}
	};
	b = /* @__PURE__ */ new WeakMap(), T(x, "JsonNull");
	var S, C = class extends _ {
		constructor() {
			super(...arguments), u(this, S);
		}
	};
	S = /* @__PURE__ */ new WeakMap(), T(C, "AnyNull");
	var w = {
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
	function T(e, t) {
		Object.defineProperty(e, "name", {
			value: t,
			configurable: !0
		});
	}
	var ee = new Set([
		"toJSON",
		"$$typeof",
		"asymmetricMatch",
		Symbol.iterator,
		Symbol.toStringTag,
		Symbol.isConcatSpreadable,
		Symbol.toPrimitive
	]);
	function E(e) {
		return new Proxy(e, { get(e, t) {
			if (t in e) return e[t];
			if (!ee.has(t)) throw TypeError(`Invalid enum value: ${String(t)}`);
		} });
	}
	var te = () => globalThis.process?.release?.name === "node", ne = () => {
		var e;
		return !!globalThis.Bun || !!((e = globalThis.process?.versions) != null && e.bun);
	}, re = () => !!globalThis.Deno, D = () => typeof globalThis.Netlify == "object", O = () => typeof globalThis.EdgeRuntime == "object", ie = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function ae() {
		return [
			[D, "netlify"],
			[O, "edge-light"],
			[ie, "workerd"],
			[re, "deno"],
			[ne, "bun"],
			[te, "node"]
		].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
	}
	var oe = {
		node: "Node.js",
		workerd: "Cloudflare Workers",
		deno: "Deno and Deno Deploy",
		netlify: "Netlify Edge Functions",
		"edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
	};
	function se() {
		let e = ae();
		return {
			id: e,
			prettyName: oe[e] || e,
			isEdge: [
				"workerd",
				"deno",
				"netlify",
				"edge-light"
			].includes(e)
		};
	}
	var k = 9e15, A = 1e9, ce = "0123456789abcdef", le = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ue = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", de = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -k,
		maxE: k,
		crypto: !1
	}, fe, j, M = !0, pe = "[DecimalError] ", me = pe + "Invalid argument: ", he = pe + "Precision limit exceeded", N = pe + "crypto unavailable", ge = "[object Decimal]", P = Math.floor, F = Math.pow, _e = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ve = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ye = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, be = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, xe = 1e7, I = 7, Se = 9007199254740991, Ce = le.length - 1, we = ue.length - 1, L = { toStringTag: ge };
	L.absoluteValue = L.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), V(e);
	}, L.ceil = function() {
		return V(new this.constructor(this), this.e + 1, 2);
	}, L.clampedTo = L.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(me + t);
		return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
	}, L.comparedTo = L.cmp = function(e) {
		var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
		if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
		if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
		if (c !== l) return c;
		if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
		for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
		return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
	}, L.cosine = L.cos = function() {
		var e, t, n = this, r = n.constructor;
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = De(r, Ge(r, n)), r.precision = e, r.rounding = t, V(j == 2 || j == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, L.cubeRoot = L.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (M = !1, a = u.s * F(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = R(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = F(n, 1 / 3), e = P((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = B(l.plus(u).times(s), l.plus(c), o + 2, 1), R(s.d).slice(0, o) === (n = R(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (V(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (V(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return M = !0, V(r, e, d.rounding, t);
	}, L.decimalPlaces = L.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - P(this.e / I)) * I, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
			n < 0 && (n = 0);
		}
		return n;
	}, L.dividedBy = L.div = function(e) {
		return B(this, new this.constructor(e));
	}, L.dividedToIntegerBy = L.divToInt = function(e) {
		var t = this, n = t.constructor;
		return V(B(t, new n(e), 0, 1, 1), n.precision, n.rounding);
	}, L.equals = L.eq = function(e) {
		return this.cmp(e) === 0;
	}, L.floor = function() {
		return V(new this.constructor(this), this.e + 1, 3);
	}, L.greaterThan = L.gt = function(e) {
		return this.cmp(e) > 0;
	}, L.greaterThanOrEqualTo = L.gte = function(e) {
		var t = this.cmp(e);
		return t == 1 || t === 0;
	}, L.hyperbolicCosine = L.cosh = function() {
		var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
		if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
		if (a.isZero()) return s;
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / We(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Ue(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return V(a, o.precision = n, o.rounding = r, !0);
	}, L.hyperbolicSine = L.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = Ue(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / We(5, e)), i = Ue(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, V(i, t, n, !0);
	}, L.hyperbolicTangent = L.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, B(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, L.inverseCosine = L.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? je(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? je(t, r, i) : new t(0) : new t(NaN);
	}, L.inverseHyperbolicCosine = L.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, M = !1, n = n.times(n).minus(1).sqrt().plus(n), M = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, L.inverseHyperbolicSine = L.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, M = !1, n = n.times(n).plus(1).sqrt().plus(n), M = !0, r.precision = e, r.rounding = t, n.ln());
	}, L.inverseHyperbolicTangent = L.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? V(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = B(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, L.inverseSine = L.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = je(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, L.inverseTangent = L.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= we) return o = je(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= we) return o = je(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / I + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (M = !1, t = Math.ceil(s / I), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), M = !0, V(o, u.precision = d, u.rounding = f, !0);
	}, L.isFinite = function() {
		return !!this.d;
	}, L.isInteger = L.isInt = function() {
		return !!this.d && P(this.e / I) > this.d.length - 2;
	}, L.isNaN = function() {
		return !this.s;
	}, L.isNegative = L.isNeg = function() {
		return this.s < 0;
	}, L.isPositive = L.isPos = function() {
		return this.s > 0;
	}, L.isZero = function() {
		return !!this.d && this.d[0] === 0;
	}, L.lessThan = L.lt = function(e) {
		return this.cmp(e) < 0;
	}, L.lessThanOrEqualTo = L.lte = function(e) {
		return this.cmp(e) < 1;
	}, L.logarithm = L.log = function(e) {
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
		if (M = !1, s = d + p, o = Re(l, s), r = t ? Ae(u, s + 10) : Re(e, s), c = B(o, r, s, 1), Te(c.d, i = d, f)) do
			if (s += 10, o = Re(l, s), r = t ? Ae(u, s + 10) : Re(e, s), c = B(o, r, s, 1), !a) {
				+R(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = V(c, d + 1, 0));
				break;
			}
		while (Te(c.d, i += 10, f));
		return M = !0, V(c, d, f);
	}, L.minus = L.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return M ? V(e, s, c) : e;
		}
		if (n = P(e.e / I), u = P(p.e / I), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / I), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = xe - 1;
				--l[i], l[r] += xe;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = ke(l, n), M ? V(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, L.modulo = L.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? V(new r(n), r.precision, r.rounding) : (M = !1, r.modulo == 9 ? (t = B(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = B(n, e, 0, r.modulo, 1), t = t.times(e), M = !0, n.minus(t));
	}, L.naturalExponential = L.exp = function() {
		return Le(this);
	}, L.naturalLogarithm = L.ln = function() {
		return Re(this);
	}, L.negated = L.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, V(e);
	}, L.plus = L.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), M ? V(e, s, c) : e;
		if (a = P(d.e / I), r = P(e.e / I), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / I), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / xe | 0, l[i] %= xe;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = ke(l, r), M ? V(e, s, c) : e;
	}, L.precision = L.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(me + e);
		return n.d ? (t = Me(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, L.round = function() {
		var e = this, t = e.constructor;
		return V(new t(e), e.e + 1, t.rounding);
	}, L.sine = L.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + I, r.rounding = 1, n = He(r, Ge(r, n)), r.precision = e, r.rounding = t, V(j > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, L.squareRoot = L.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (M = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = R(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = P((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(B(o, a, n + 2, 1)).times(.5), R(a.d).slice(0, n) === (t = R(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (V(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (V(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return M = !0, V(r, c, u.rounding, e);
	}, L.tangent = L.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = B(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, V(j == 2 || j == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, L.times = L.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = P(u.e / I) + P(e.e / I), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % xe | 0, t = s / xe | 0;
			a[i] = (a[i] + t) % xe | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = ke(a, n), M ? V(e, d.precision, d.rounding) : e;
	}, L.toBinary = function(e, t) {
		return Ke(this, 2, e, t);
	}, L.toDecimalPlaces = L.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (z(e, 0, A), t === void 0 ? t = r.rounding : z(t, 0, 8), V(n, e + n.e + 1, t));
	}, L.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Oe(r, !0) : (z(e, 0, A), t === void 0 ? t = i.rounding : z(t, 0, 8), r = V(new i(r), e + 1, t), n = Oe(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, L.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = Oe(i) : (z(e, 0, A), t === void 0 ? t = a.rounding : z(t, 0, 8), r = V(new a(i), e + i.e + 1, t), n = Oe(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, L.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Me(m) - p.e - 1, o = a % I, t.d[0] = F(10, o < 0 ? I + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(me + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (M = !1, s = new h(R(m)), u = h.precision, h.precision = a = m.length * I * 2; d = B(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = B(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = B(l, r, a, 1).minus(p).abs().cmp(B(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, M = !0, f;
	}, L.toHexadecimal = L.toHex = function(e, t) {
		return Ke(this, 16, e, t);
	}, L.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : z(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (M = !1, n = B(n, e, 0, t, 1).times(e), M = !0, V(n)) : (e.s = n.s, n = e), n;
	}, L.toNumber = function() {
		return +this;
	}, L.toOctal = function(e, t) {
		return Ke(this, 8, e, t);
	}, L.toPower = L.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(F(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return V(s, r, a);
		if (t = P(e.e / I), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= Se) return i = Pe(c, s, n, r), e.s < 0 ? new c(1).div(i) : V(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = F(+s, l), t = n == 0 || !isFinite(n) ? P(l * (Math.log("0." + R(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (M = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Le(e.times(Re(s, r + n)), r), i.d && (i = V(i, r + 5, 1), Te(i.d, r, a) && (t = r + 10, i = V(Le(e.times(Re(s, t + n)), t), t + 5, 1), +R(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = V(i, r + 1, 0)))), i.s = o, M = !0, c.rounding = a, V(i, r, a));
	}, L.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Oe(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (z(e, 1, A), t === void 0 ? t = i.rounding : z(t, 0, 8), r = V(new i(r), e, t), n = Oe(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, L.toSignificantDigits = L.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (z(e, 1, A), t === void 0 ? t = r.rounding : z(t, 0, 8)), V(new r(n), e, t);
	}, L.toString = function() {
		var e = this, t = e.constructor, n = Oe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, L.truncated = L.trunc = function() {
		return V(new this.constructor(this), this.e + 1, 1);
	}, L.valueOf = L.toJSON = function() {
		var e = this, t = e.constructor, n = Oe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function R(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = I - r.length, n && (a += Ne(n)), a += r;
			o = e[t], r = o + "", n = I - r.length, n && (a += Ne(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function z(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(me + e);
	}
	function Te(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += I, i = 0) : (i = Math.ceil((t + 1) / I), t %= I), a = F(10, I - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == F(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == F(10, t - 3) - 1, o;
	}
	function Ee(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += ce.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function De(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / We(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Ue(e, 1, t.times(i), new e(1));
		for (var a = n; a--;) {
			var o = t.times(t);
			t = o.times(o).minus(o).times(8).plus(1);
		}
		return e.precision -= n, t;
	}
	var B = function() {
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
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, ee, E, te, ne = r.constructor, re = r.s == i.s ? 1 : -1, D = r.d, O = i.d;
			if (!D || !D[0] || !O || !O[0]) return new ne(!r.s || !i.s || (D ? O && D[0] == O[0] : !O) ? NaN : D && D[0] == 0 || !O ? re * 0 : re / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = xe, p = I, u = P(r.e / p) - P(i.e / p)), E = O.length, T = D.length, _ = new ne(re), v = _.d = [], d = 0; O[d] == (D[d] || 0); d++);
			if (O[d] > (D[d] || 0) && u--, a == null ? (S = a = ne.precision, o = ne.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, E == 1) {
					for (f = 0, O = O[0], S++; (d < T || f) && S--; d++) C = f * c + (D[d] || 0), v[d] = C / O | 0, f = C % O | 0;
					m = f || d < T;
				} else {
					for (f = c / (O[0] + 1) | 0, f > 1 && (O = e(O, f, c), D = e(D, f, c), E = O.length, T = D.length), w = E, y = D.slice(0, E), b = y.length; b < E;) y[b++] = 0;
					te = O.slice(), te.unshift(0), ee = O[0], O[1] >= c / 2 && ++ee;
					do
						f = 0, l = t(O, y, E, b), l < 0 ? (x = y[0], E != b && (x = x * c + (y[1] || 0)), f = x / ee | 0, f > 1 ? (f >= c && (f = c - 1), h = e(O, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, E < g ? te : O, g, c))) : (f == 0 && (l = f = 1), h = O.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(O, y, E, b), l < 1 && (f++, n(y, E < b ? te : O, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = D[w] || 0 : (y = [D[w]], b = 1);
					while ((w++ < T || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, fe = m;
			else {
				for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
				_.e = d + u * p - 1, V(_, s ? a + _.e + 1 : a, o, m);
			}
			return _;
		};
	}();
	function V(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor;
		e: if (t != null) {
			if (d = e.d, !d) return e;
			for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
			if (a = t - i, a < 0) a += I, o = t, u = d[f = 0], c = u / F(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / I), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= I, o = a - I + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= I, o = a - I + i, c = o < 0 ? 0 : u / F(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % F(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / F(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = F(10, (I - t % I) % I), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = F(10, I - a), d[f] = o > 0 ? (u / F(10, i - o) % F(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == xe && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != xe) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return M && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function Oe(e, t, n) {
		if (!e.isFinite()) return ze(e);
		var r, i = e.e, a = R(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ne(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Ne(-i - 1) + a, n && (r = n - o) > 0 && (a += Ne(r))) : i >= o ? (a += Ne(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Ne(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Ne(r))), a;
	}
	function ke(e, t) {
		var n = e[0];
		for (t *= I; n >= 10; n /= 10) t++;
		return t;
	}
	function Ae(e, t, n) {
		if (t > Ce) throw M = !0, n && (e.precision = n), Error(he);
		return V(new e(le), t, 1, !0);
	}
	function je(e, t, n) {
		if (t > we) throw Error(he);
		return V(new e(ue), t, n, !0);
	}
	function Me(e) {
		var t = e.length - 1, n = t * I + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function Ne(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function Pe(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / I + 4);
		for (M = !1;;) {
			if (n % 2 && (a = a.times(t), qe(a.d, o) && (i = !0)), n = P(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), qe(t.d, o);
		}
		return M = !0, a;
	}
	function Fe(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function Ie(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Le(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (M = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(F(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = V(a.times(e), c, 1), n = n.times(++u), s = o.plus(B(a, n, c, 1)), R(s.d).slice(0, c) === R(o.d).slice(0, c)) {
				for (i = d; i--;) o = V(o.times(o), c, 1);
				if (t == null) if (l < 3 && Te(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return V(o, f.precision = m, p, M = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function Re(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (M = !1, u = y) : u = t, _.precision = u += m, n = R(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = R(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Ae(_, u + 2, y).times(a + ""), h = Re(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? V(h, y, v, M = !0) : h;
		for (d = h, c = o = h = B(h.minus(1), h.plus(1), u, 1), f = V(h.times(h), u, 1), i = 3;;) {
			if (o = V(o.times(f), u, 1), l = c.plus(B(o, new _(i), u, 1)), R(l.d).slice(0, u) === R(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Ae(_, u + 2, y).times(a + ""))), c = B(c, new _(p), u, 1), t == null) if (Te(c.d, u - m, v, s)) _.precision = u += m, l = o = h = B(d.minus(1), d.plus(1), u, 1), f = V(h.times(h), u, 1), i = s = 1;
			else return V(c, _.precision = y, v, M = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function ze(e) {
		return String(e.s * e.s / 0);
	}
	function Be(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % I, n < 0 && (r += I), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= I; r < i;) e.d.push(+t.slice(r, r += I));
				t = t.slice(r), r = I - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), M && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function Ve(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), be.test(t)) return Be(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (ve.test(t)) n = 16, t = t.toLowerCase();
		else if (_e.test(t)) n = 2;
		else if (ye.test(t)) n = 8;
		else throw Error(me + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Pe(r, new r(n), a, a * 2)), l = Ee(t, n, xe), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = ke(l, u), e.d = l, M = !1, o && (e = B(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? F(2, c) : Mt.pow(2, c))), M = !0, e);
	}
	function He(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : Ue(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / We(5, n)), t = Ue(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function Ue(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / I);
		for (M = !1, c = n.times(n), s = new e(r);;) {
			if (o = B(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = B(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return M = !0, o.d.length = d + 1, o;
	}
	function We(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Ge(e, t) {
		var n, r = t.s < 0, i = je(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return j = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) j = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return j = Fe(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			j = Fe(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Ke(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (z(n, 1, A), r === void 0 ? r = p.rounding : z(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = ze(e);
		else {
			for (u = Oe(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = Ee(Oe(f), 10, i), f.e = f.d.length), d = Ee(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = B(e, f, n, r, 0, i), d = e.d, a = e.e, l = fe), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += ce.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = Ee(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += ce.charAt(d[o]);
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
	function qe(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function Je(e) {
		return new this(e).abs();
	}
	function Ye(e) {
		return new this(e).acos();
	}
	function Xe(e) {
		return new this(e).acosh();
	}
	function Ze(e, t) {
		return new this(e).plus(t);
	}
	function Qe(e) {
		return new this(e).asin();
	}
	function $e(e) {
		return new this(e).asinh();
	}
	function et(e) {
		return new this(e).atan();
	}
	function tt(e) {
		return new this(e).atanh();
	}
	function H(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = je(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? je(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = je(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(B(e, t, a, 1)), t = je(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(B(e, t, a, 1)), n;
	}
	function nt(e) {
		return new this(e).cbrt();
	}
	function U(e) {
		return V(e = new this(e), e.e + 1, 2);
	}
	function rt(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function it(e) {
		if (!e || typeof e != "object") throw Error(pe + "Object expected");
		var t, n, r, i = e.defaults === !0, a = [
			"precision",
			1,
			A,
			"rounding",
			0,
			8,
			"toExpNeg",
			-k,
			0,
			"toExpPos",
			0,
			k,
			"maxE",
			0,
			k,
			"minE",
			-k,
			0,
			"modulo",
			0,
			9
		];
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = de[n]), (r = e[n]) !== void 0) if (P(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(me + n + ": " + r);
		if (n = "crypto", i && (this[n] = de[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(N);
		else this[n] = !1;
		else throw Error(me + n + ": " + r);
		return this;
	}
	function at(e) {
		return new this(e).cos();
	}
	function ot(e) {
		return new this(e).cosh();
	}
	function st(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, ft(e)) {
				a.s = e.s, M ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					M ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return Be(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), be.test(e) ? Be(a, e) : Ve(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Be(a, e.toString());
			throw Error(me + e);
		}
		if (i.prototype = L, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = it, i.clone = st, i.isDecimal = ft, i.abs = Je, i.acos = Ye, i.acosh = Xe, i.add = Ze, i.asin = Qe, i.asinh = $e, i.atan = et, i.atanh = tt, i.atan2 = H, i.cbrt = nt, i.ceil = U, i.clamp = rt, i.cos = at, i.cosh = ot, i.div = ct, i.exp = lt, i.floor = ut, i.hypot = dt, i.ln = W, i.log = pt, i.log10 = ht, i.log2 = mt, i.max = gt, i.min = _t, i.mod = vt, i.mul = yt, i.pow = bt, i.random = xt, i.round = St, i.sign = Ct, i.sin = wt, i.sinh = Tt, i.sqrt = Et, i.sub = Dt, i.sum = Ot, i.tan = kt, i.tanh = At, i.trunc = jt, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
	function ct(e, t) {
		return new this(e).div(t);
	}
	function lt(e) {
		return new this(e).exp();
	}
	function ut(e) {
		return V(e = new this(e), e.e + 1, 3);
	}
	function dt() {
		var e, t, n = new this(0);
		for (M = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return M = !0, new this(Infinity);
			n = t;
		}
		return M = !0, n.sqrt();
	}
	function ft(e) {
		return e instanceof Mt || e && e.toStringTag === ge || !1;
	}
	function W(e) {
		return new this(e).ln();
	}
	function pt(e, t) {
		return new this(e).log(t);
	}
	function mt(e) {
		return new this(e).log(2);
	}
	function ht(e) {
		return new this(e).log(10);
	}
	function gt() {
		return Ie(this, arguments, -1);
	}
	function _t() {
		return Ie(this, arguments, 1);
	}
	function vt(e, t) {
		return new this(e).mod(t);
	}
	function yt(e, t) {
		return new this(e).mul(t);
	}
	function bt(e, t) {
		return new this(e).pow(t);
	}
	function xt(e) {
		var t, n, r, i, a = 0, o = new this(1), s = [];
		if (e === void 0 ? e = this.precision : z(e, 1, A), r = Math.ceil(e / I), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(N);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= I, r && e && (i = F(10, I - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= I) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < I && (n -= I - r);
		}
		return o.e = n, o.d = s, o;
	}
	function St(e) {
		return V(e = new this(e), e.e + 1, this.rounding);
	}
	function Ct(e) {
		return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
	}
	function wt(e) {
		return new this(e).sin();
	}
	function Tt(e) {
		return new this(e).sinh();
	}
	function Et(e) {
		return new this(e).sqrt();
	}
	function Dt(e, t) {
		return new this(e).sub(t);
	}
	function Ot() {
		var e = 0, t = arguments, n = new this(t[e]);
		for (M = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return M = !0, V(n, this.precision, this.rounding);
	}
	function kt(e) {
		return new this(e).tan();
	}
	function At(e) {
		return new this(e).tanh();
	}
	function jt(e) {
		return V(e = new this(e), e.e + 1, 1);
	}
	L[Symbol.for("nodejs.util.inspect.custom")] = L.toString, L[Symbol.toStringTag] = "Decimal";
	var Mt = L.constructor = st(de);
	le = new Mt(le), ue = new Mt(ue);
	var Nt = Mt;
})), La = /* @__PURE__ */ o(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var { Decimal: t, objectEnumValues: n, makeStrictEnum: r, Public: i, getRuntime: a, skip: o } = Ia(), s = {};
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
	}, e.Prisma.SmsNotificationScalarFieldEnum = {
		id: "id",
		userId: "userId",
		phoneNumber: "phoneNumber",
		message: "message",
		category: "category",
		status: "status",
		provider: "provider",
		providerMsgId: "providerMsgId",
		failureReason: "failureReason",
		sentAt: "sentAt",
		deliveredAt: "deliveredAt",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.NotificationPreferenceScalarFieldEnum = {
		id: "id",
		userId: "userId",
		rentReminders: "rentReminders",
		paymentReceipts: "paymentReceipts",
		maintenance: "maintenance",
		utilityAlerts: "utilityAlerts",
		marketing: "marketing",
		preferredChannel: "preferredChannel",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
	}, e.Prisma.VendorScalarFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		userId: "userId",
		companyName: "companyName",
		serviceType: "serviceType",
		phone: "phone",
		email: "email",
		isActive: "isActive",
		createdAt: "createdAt",
		updatedAt: "updatedAt"
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
		organizationId: "organizationId",
		type: "type",
		totalAmount: "totalAmount",
		amountPaid: "amountPaid",
		balance: "balance",
		taxAmount: "taxAmount",
		taxRate: "taxRate",
		taxExempt: "taxExempt",
		dueDate: "dueDate",
		status: "status",
		postingStatus: "postingStatus",
		journalEntryId: "journalEntryId",
		utilityBillId: "utilityBillId",
		referenceType: "referenceType",
		referenceId: "referenceId",
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
		onBehalfOf: "onBehalfOf",
		ipAddress: "ipAddress",
		userAgent: "userAgent"
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
		expirationDate: "expirationDate"
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
		invitedAgentId: "invitedAgentId",
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
	}, e.Prisma.VendorTaxInfoScalarFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		w9Collected: "w9Collected",
		w9CollectedAt: "w9CollectedAt",
		taxIdType: "taxIdType",
		taxIdEncrypted: "taxIdEncrypted",
		backupWithholding: "backupWithholding"
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
	}, e.Prisma.OrganizationWebhookOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		name: "name",
		url: "url",
		secret: "secret"
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
	}, e.Prisma.SmsNotificationOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId",
		phoneNumber: "phoneNumber",
		message: "message",
		provider: "provider",
		providerMsgId: "providerMsgId",
		failureReason: "failureReason"
	}, e.Prisma.NotificationPreferenceOrderByRelevanceFieldEnum = {
		id: "id",
		userId: "userId"
	}, e.Prisma.VendorOrderByRelevanceFieldEnum = {
		id: "id",
		organizationId: "organizationId",
		userId: "userId",
		companyName: "companyName",
		serviceType: "serviceType",
		phone: "phone",
		email: "email"
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
		organizationId: "organizationId",
		journalEntryId: "journalEntryId",
		utilityBillId: "utilityBillId",
		referenceType: "referenceType",
		referenceId: "referenceId"
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
		onBehalfOf: "onBehalfOf",
		ipAddress: "ipAddress",
		userAgent: "userAgent"
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
		unitId: "unitId"
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
		tenantId: "tenantId",
		invitedAgentId: "invitedAgentId"
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
	}, e.Prisma.VendorTaxInfoOrderByRelevanceFieldEnum = {
		id: "id",
		vendorId: "vendorId",
		taxIdType: "taxIdType",
		taxIdEncrypted: "taxIdEncrypted"
	}, e.Region = e.$Enums.Region = {
		USA: "USA",
		KEN: "KEN"
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
	}, e.NotificationChannel = e.$Enums.NotificationChannel = {
		SMS: "SMS",
		EMAIL: "EMAIL",
		PUSH: "PUSH",
		IN_APP: "IN_APP"
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
	}, e.InvoiceType = e.$Enums.InvoiceType = {
		RENT: "RENT",
		UTILITY: "UTILITY",
		MAINTENANCE: "MAINTENANCE",
		DAMAGE: "DAMAGE",
		FEE: "FEE"
	}, e.InvoiceStatus = e.$Enums.InvoiceStatus = {
		DRAFT: "DRAFT",
		ISSUED: "ISSUED",
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
		OrganizationWebhook: "OrganizationWebhook",
		User: "User",
		OrganizationUser: "OrganizationUser",
		Otp: "Otp",
		SmsNotification: "SmsNotification",
		NotificationPreference: "NotificationPreference",
		Vendor: "Vendor",
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
		WebhookEvent: "WebhookEvent",
		VendorTaxInfo: "VendorTaxInfo"
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
})), Ra = (/* @__PURE__ */ o(((e, t) => {
	t.exports = La();
})))();
BigInt.prototype.toJSON = function() {
	return this.toString();
};
var za = globalThis, Ba = za.prisma ?? new Ra.PrismaClient({ log: process.env.NODE_ENV === "development" ? [
	"query",
	"error",
	"warn"
] : ["error"] });
process.env.NODE_ENV !== "production" && (za.prisma = Ba);
//#endregion
//#region ../../node_modules/base64-js/index.js
var Va = /* @__PURE__ */ o(((e) => {
	e.byteLength = c, e.toByteArray = u, e.fromByteArray = p;
	for (var t = [], n = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, o = i.length; a < o; ++a) t[a] = i[a], n[i.charCodeAt(a)] = a;
	n[45] = 62, n[95] = 63;
	function s(e) {
		var t = e.length;
		if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
		var n = e.indexOf("=");
		n === -1 && (n = t);
		var r = n === t ? 0 : 4 - n % 4;
		return [n, r];
	}
	function c(e) {
		var t = s(e), n = t[0], r = t[1];
		return (n + r) * 3 / 4 - r;
	}
	function l(e, t, n) {
		return (t + n) * 3 / 4 - n;
	}
	function u(e) {
		var t, i = s(e), a = i[0], o = i[1], c = new r(l(e, a, o)), u = 0, d = o > 0 ? a - 4 : a, f;
		for (f = 0; f < d; f += 4) t = n[e.charCodeAt(f)] << 18 | n[e.charCodeAt(f + 1)] << 12 | n[e.charCodeAt(f + 2)] << 6 | n[e.charCodeAt(f + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = t & 255;
		return o === 2 && (t = n[e.charCodeAt(f)] << 2 | n[e.charCodeAt(f + 1)] >> 4, c[u++] = t & 255), o === 1 && (t = n[e.charCodeAt(f)] << 10 | n[e.charCodeAt(f + 1)] << 4 | n[e.charCodeAt(f + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = t & 255), c;
	}
	function d(e) {
		return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
	}
	function f(e, t, n) {
		for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(d(r));
		return i.join("");
	}
	function p(e) {
		for (var n, r = e.length, i = r % 3, a = [], o = 16383, s = 0, c = r - i; s < c; s += o) a.push(f(e, s, s + o > c ? c : s + o));
		return i === 1 ? (n = e[r - 1], a.push(t[n >> 2] + t[n << 4 & 63] + "==")) : i === 2 && (n = (e[r - 2] << 8) + e[r - 1], a.push(t[n >> 10] + t[n >> 4 & 63] + t[n << 2 & 63] + "=")), a.join("");
	}
})), Ha = /* @__PURE__ */ o(((e) => {
	e.read = function(e, t, n, r, i) {
		var a, o, s = i * 8 - r - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = n ? i - 1 : 0, f = n ? -1 : 1, p = e[t + d];
		for (d += f, a = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; a = a * 256 + e[t + d], d += f, u -= 8);
		for (o = a & (1 << -u) - 1, a >>= -u, u += r; u > 0; o = o * 256 + e[t + d], d += f, u -= 8);
		if (a === 0) a = 1 - l;
		else if (a === c) return o ? NaN : (p ? -1 : 1) * Infinity;
		else o += 2 ** r, a -= l;
		return (p ? -1 : 1) * o * 2 ** (a - r);
	}, e.write = function(e, t, n, r, i, a) {
		var o, s, c, l = a * 8 - i - 1, u = (1 << l) - 1, d = u >> 1, f = i === 23 ? 2 ** -24 - 2 ** -77 : 0, p = r ? 0 : a - 1, m = r ? 1 : -1, h = +(t < 0 || t === 0 && 1 / t < 0);
		for (t = Math.abs(t), isNaN(t) || t === Infinity ? (s = +!!isNaN(t), o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (c = 2 ** -o) < 1 && (o--, c *= 2), o + d >= 1 ? t += f / c : t += f * 2 ** (1 - d), t * c >= 2 && (o++, c /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * c - 1) * 2 ** i, o += d) : (s = t * 2 ** (d - 1) * 2 ** i, o = 0)); i >= 8; e[n + p] = s & 255, p += m, s /= 256, i -= 8);
		for (o = o << i | s, l += i; l > 0; e[n + p] = o & 255, p += m, o /= 256, l -= 8);
		e[n + p - m] |= h * 128;
	};
})), Ua = /* @__PURE__ */ o(((e) => {
	var t = Va(), n = Ha(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = s, e.SlowBuffer = v, e.INSPECT_MAX_BYTES = 50;
	var i = 2147483647;
	e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
	function a() {
		try {
			let e = new Uint8Array(1), t = { foo: function() {
				return 42;
			} };
			return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
		} catch {
			return !1;
		}
	}
	Object.defineProperty(s.prototype, "parent", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.buffer;
		}
	}), Object.defineProperty(s.prototype, "offset", {
		enumerable: !0,
		get: function() {
			if (s.isBuffer(this)) return this.byteOffset;
		}
	});
	function o(e) {
		if (e > i) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
		let t = new Uint8Array(e);
		return Object.setPrototypeOf(t, s.prototype), t;
	}
	function s(e, t, n) {
		if (typeof e == "number") {
			if (typeof t == "string") throw TypeError("The \"string\" argument must be of type string. Received type number");
			return d(e);
		}
		return c(e, t, n);
	}
	s.poolSize = 8192;
	function c(e, t, n) {
		if (typeof e == "string") return f(e, t);
		if (ArrayBuffer.isView(e)) return m(e);
		if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (I(e, ArrayBuffer) || e && I(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (I(e, SharedArrayBuffer) || e && I(e.buffer, SharedArrayBuffer))) return h(e, t, n);
		if (typeof e == "number") throw TypeError("The \"value\" argument must not be of type number. Received type number");
		let r = e.valueOf && e.valueOf();
		if (r != null && r !== e) return s.from(r, t, n);
		let i = g(e);
		if (i) return i;
		if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return s.from(e[Symbol.toPrimitive]("string"), t, n);
		throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
	}
	s.from = function(e, t, n) {
		return c(e, t, n);
	}, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
	function l(e) {
		if (typeof e != "number") throw TypeError("\"size\" argument must be of type number");
		if (e < 0) throw RangeError("The value \"" + e + "\" is invalid for option \"size\"");
	}
	function u(e, t, n) {
		return l(e), e <= 0 || t === void 0 ? o(e) : typeof n == "string" ? o(e).fill(t, n) : o(e).fill(t);
	}
	s.alloc = function(e, t, n) {
		return u(e, t, n);
	};
	function d(e) {
		return l(e), o(e < 0 ? 0 : _(e) | 0);
	}
	s.allocUnsafe = function(e) {
		return d(e);
	}, s.allocUnsafeSlow = function(e) {
		return d(e);
	};
	function f(e, t) {
		if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
		let n = y(e, t) | 0, r = o(n), i = r.write(e, t);
		return i !== n && (r = r.slice(0, i)), r;
	}
	function p(e) {
		let t = e.length < 0 ? 0 : _(e.length) | 0, n = o(t);
		for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
		return n;
	}
	function m(e) {
		if (I(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return h(t.buffer, t.byteOffset, t.byteLength);
		}
		return p(e);
	}
	function h(e, t, n) {
		if (t < 0 || e.byteLength < t) throw RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r;
	}
	function g(e) {
		if (s.isBuffer(e)) {
			let t = _(e.length) | 0, n = o(t);
			return n.length === 0 || e.copy(n, 0, 0, t), n;
		}
		if (e.length !== void 0) return typeof e.length != "number" || Se(e.length) ? o(0) : p(e);
		if (e.type === "Buffer" && Array.isArray(e.data)) return p(e.data);
	}
	function _(e) {
		if (e >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return e | 0;
	}
	function v(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}
	s.isBuffer = function(e) {
		return e != null && e._isBuffer === !0 && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (I(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), I(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
		if (e === t) return 0;
		let n = e.length, r = t.length;
		for (let i = 0, a = Math.min(n, r); i < a; ++i) if (e[i] !== t[i]) {
			n = e[i], r = t[i];
			break;
		}
		return n < r ? -1 : +(r < n);
	}, s.isEncoding = function(e) {
		switch (String(e).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return !0;
			default: return !1;
		}
	}, s.concat = function(e, t) {
		if (!Array.isArray(e)) throw TypeError("\"list\" argument must be an Array of Buffers");
		if (e.length === 0) return s.alloc(0);
		let n;
		if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
		let r = s.allocUnsafe(t), i = 0;
		for (n = 0; n < e.length; ++n) {
			let t = e[n];
			if (I(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function y(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || I(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return _e(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return be(e).length;
			default:
				if (i) return r ? -1 : _e(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return oe(this, t, n);
			case "utf8":
			case "utf-8": return re(this, t, n);
			case "ascii": return ie(this, t, n);
			case "latin1":
			case "binary": return ae(this, t, n);
			case "base64": return ne(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return se(this, t, n);
			default:
				if (r) throw TypeError("Unknown encoding: " + e);
				e = (e + "").toLowerCase(), r = !0;
		}
	}
	s.prototype._isBuffer = !0;
	function x(e, t, n) {
		let r = e[t];
		e[t] = e[n], e[n] = r;
	}
	s.prototype.swap16 = function() {
		let e = this.length;
		if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) x(this, t, t + 1);
		return this;
	}, s.prototype.swap32 = function() {
		let e = this.length;
		if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) x(this, t, t + 3), x(this, t + 1, t + 2);
		return this;
	}, s.prototype.swap64 = function() {
		let e = this.length;
		if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) x(this, t, t + 7), x(this, t + 1, t + 6), x(this, t + 2, t + 5), x(this, t + 3, t + 4);
		return this;
	}, s.prototype.toString = function() {
		let e = this.length;
		return e === 0 ? "" : arguments.length === 0 ? re(this, 0, e) : b.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (I(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
		if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), r === void 0 && (r = 0), i === void 0 && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw RangeError("out of range index");
		if (r >= i && t >= n) return 0;
		if (r >= i) return -1;
		if (t >= n) return 1;
		if (t >>>= 0, n >>>= 0, r >>>= 0, i >>>= 0, this === e) return 0;
		let a = i - r, o = n - t, c = Math.min(a, o), l = this.slice(r, i), u = e.slice(t, n);
		for (let e = 0; e < c; ++e) if (l[e] !== u[e]) {
			a = l[e], o = u[e];
			break;
		}
		return a < o ? -1 : +(o < a);
	};
	function S(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Se(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) if (i) n = 0;
		else return -1;
		if (typeof t == "string" && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : C(e, t, n, r, i);
		if (typeof t == "number") return t &= 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : C(e, [t], n, r, i);
		throw TypeError("val must be string, number or Buffer");
	}
	function C(e, t, n, r, i) {
		let a = 1, o = e.length, s = t.length;
		if (r !== void 0 && (r = String(r).toLowerCase(), r === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
			if (e.length < 2 || t.length < 2) return -1;
			a = 2, o /= 2, s /= 2, n /= 2;
		}
		function c(e, t) {
			return a === 1 ? e[t] : e.readUInt16BE(t * a);
		}
		let l;
		if (i) {
			let r = -1;
			for (l = n; l < o; l++) if (c(e, l) === c(t, r === -1 ? 0 : l - r)) {
				if (r === -1 && (r = l), l - r + 1 === s) return r * a;
			} else r !== -1 && (l -= l - r), r = -1;
		} else for (n + s > o && (n = o - s), l = n; l >= 0; l--) {
			let n = !0;
			for (let r = 0; r < s; r++) if (c(e, l + r) !== c(t, r)) {
				n = !1;
				break;
			}
			if (n) return l;
		}
		return -1;
	}
	s.prototype.includes = function(e, t, n) {
		return this.indexOf(e, t, n) !== -1;
	}, s.prototype.indexOf = function(e, t, n) {
		return S(this, e, t, n, !0);
	}, s.prototype.lastIndexOf = function(e, t, n) {
		return S(this, e, t, n, !1);
	};
	function w(e, t, n, r) {
		n = Number(n) || 0;
		let i = e.length - n;
		r ? (r = Number(r), r > i && (r = i)) : r = i;
		let a = t.length;
		r > a / 2 && (r = a / 2);
		let o;
		for (o = 0; o < r; ++o) {
			let r = parseInt(t.substr(o * 2, 2), 16);
			if (Se(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return xe(_e(t, e.length - n), e, n, r);
	}
	function ee(e, t, n, r) {
		return xe(ve(t), e, n, r);
	}
	function E(e, t, n, r) {
		return xe(be(t), e, n, r);
	}
	function te(e, t, n, r) {
		return xe(ye(t, e.length - n), e, n, r);
	}
	s.prototype.write = function(e, t, n, r) {
		if (t === void 0) r = "utf8", n = this.length, t = 0;
		else if (n === void 0 && typeof t == "string") r = t, n = this.length, t = 0;
		else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, r === void 0 && (r = "utf8")) : (r = n, n = void 0);
		else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
		let i = this.length - t;
		if ((n === void 0 || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
		r ||= "utf8";
		let a = !1;
		for (;;) switch (r) {
			case "hex": return w(this, e, t, n);
			case "utf8":
			case "utf-8": return T(this, e, t, n);
			case "ascii":
			case "latin1":
			case "binary": return ee(this, e, t, n);
			case "base64": return E(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return te(this, e, t, n);
			default:
				if (a) throw TypeError("Unknown encoding: " + r);
				r = ("" + r).toLowerCase(), a = !0;
		}
	}, s.prototype.toJSON = function() {
		return {
			type: "Buffer",
			data: Array.prototype.slice.call(this._arr || this, 0)
		};
	};
	function ne(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function re(e, t, n) {
		n = Math.min(e.length, n);
		let r = [], i = t;
		for (; i < n;) {
			let t = e[i], a = null, o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
			if (i + o <= n) {
				let n, r, s, c;
				switch (o) {
					case 1:
						t < 128 && (a = t);
						break;
					case 2:
						n = e[i + 1], (n & 192) == 128 && (c = (t & 31) << 6 | n & 63, c > 127 && (a = c));
						break;
					case 3:
						n = e[i + 1], r = e[i + 2], (n & 192) == 128 && (r & 192) == 128 && (c = (t & 15) << 12 | (n & 63) << 6 | r & 63, c > 2047 && (c < 55296 || c > 57343) && (a = c));
						break;
					case 4: n = e[i + 1], r = e[i + 2], s = e[i + 3], (n & 192) == 128 && (r & 192) == 128 && (s & 192) == 128 && (c = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | s & 63, c > 65535 && c < 1114112 && (a = c));
				}
			}
			a === null ? (a = 65533, o = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a), i += o;
		}
		return O(r);
	}
	var D = 4096;
	function O(e) {
		let t = e.length;
		if (t <= D) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += D));
		return n;
	}
	function ie(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ae(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function oe(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += Ce[e[r]];
		return i;
	}
	function se(e, t, n) {
		let r = e.slice(t, n), i = "";
		for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + r[e + 1] * 256);
		return i;
	}
	s.prototype.slice = function(e, t) {
		let n = this.length;
		e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
		let r = this.subarray(e, t);
		return Object.setPrototypeOf(r, s.prototype), r;
	};
	function k(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || k(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || k(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || k(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = we(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && ge(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = we(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && ge(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || k(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || k(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || k(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || k(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = we(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && ge(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = we(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && ge(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || k(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || k(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function A(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			A(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			A(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function ce(e, t, n, r, i) {
		he(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function le(e, t, n, r, i) {
		he(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = we(function(e, t = 0) {
		return ce(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = we(function(e, t = 0) {
		return le(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			A(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			A(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = we(function(e, t = 0) {
		return ce(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = we(function(e, t = 0) {
		return le(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function ue(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function de(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ue(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return de(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return de(this, e, t, !1, n);
	};
	function fe(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ue(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return fe(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return fe(this, e, t, !1, n);
	}, s.prototype.copy = function(e, t, n, r) {
		if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
		if (n ||= 0, !r && r !== 0 && (r = this.length), t >= e.length && (t = e.length), t ||= 0, r > 0 && r < n && (r = n), r === n || e.length === 0 || this.length === 0) return 0;
		if (t < 0) throw RangeError("targetStart out of bounds");
		if (n < 0 || n >= this.length) throw RangeError("Index out of range");
		if (r < 0) throw RangeError("sourceEnd out of bounds");
		r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
		let i = r - n;
		return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i;
	}, s.prototype.fill = function(e, t, n, r) {
		if (typeof e == "string") {
			if (typeof t == "string" ? (r = t, t = 0, n = this.length) : typeof n == "string" && (r = n, n = this.length), r !== void 0 && typeof r != "string") throw TypeError("encoding must be a string");
			if (typeof r == "string" && !s.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
			if (e.length === 1) {
				let t = e.charCodeAt(0);
				(r === "utf8" && t < 128 || r === "latin1") && (e = t);
			}
		} else typeof e == "number" ? e &= 255 : typeof e == "boolean" && (e = Number(e));
		if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
		if (n <= t) return this;
		t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e ||= 0;
		let i;
		if (typeof e == "number") for (i = t; i < n; ++i) this[i] = e;
		else {
			let a = s.isBuffer(e) ? e : s.from(e, r), o = a.length;
			if (o === 0) throw TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
			for (i = 0; i < n - t; ++i) this[i + t] = a[i % o];
		}
		return this;
	};
	var j = {};
	function M(e, t, n) {
		j[e] = class extends n {
			constructor() {
				super(), Object.defineProperty(this, "message", {
					value: t.apply(this, arguments),
					writable: !0,
					configurable: !0
				}), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
			}
			get code() {
				return e;
			}
			set code(e) {
				Object.defineProperty(this, "code", {
					configurable: !0,
					enumerable: !0,
					value: e,
					writable: !0
				});
			}
			toString() {
				return `${this.name} [${e}]: ${this.message}`;
			}
		};
	}
	M("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), M("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), M("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = pe(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = pe(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function pe(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function me(e, t, n) {
		N(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && ge(t, e.length - (n + 1));
	}
	function he(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new j.ERR_OUT_OF_RANGE("value", i, e);
		}
		me(r, i, a);
	}
	function N(e, t) {
		if (typeof e != "number") throw new j.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function ge(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new j.ERR_BUFFER_OUT_OF_BOUNDS() : new j.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (N(e, n), new j.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var P = /[^+/0-9A-Za-z-_]/g;
	function F(e) {
		if (e = e.split("=")[0], e = e.trim().replace(P, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function _e(e, t) {
		t ||= Infinity;
		let n, r = e.length, i = null, a = [];
		for (let o = 0; o < r; ++o) {
			if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
				if (!i) {
					if (n > 56319) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					} else if (o + 1 === r) {
						(t -= 3) > -1 && a.push(239, 191, 189);
						continue;
					}
					i = n;
					continue;
				}
				if (n < 56320) {
					(t -= 3) > -1 && a.push(239, 191, 189), i = n;
					continue;
				}
				n = (i - 55296 << 10 | n - 56320) + 65536;
			} else i && (t -= 3) > -1 && a.push(239, 191, 189);
			if (i = null, n < 128) {
				if (--t < 0) break;
				a.push(n);
			} else if (n < 2048) {
				if ((t -= 2) < 0) break;
				a.push(n >> 6 | 192, n & 63 | 128);
			} else if (n < 65536) {
				if ((t -= 3) < 0) break;
				a.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
			} else if (n < 1114112) {
				if ((t -= 4) < 0) break;
				a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
			} else throw Error("Invalid code point");
		}
		return a;
	}
	function ve(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function ye(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function be(e) {
		return t.toByteArray(F(e));
	}
	function xe(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function I(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function Se(e) {
		return e !== e;
	}
	var Ce = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function we(e) {
		return typeof BigInt > "u" ? L : e;
	}
	function L() {
		throw Error("BigInt not supported");
	}
})), Wa = /* @__PURE__ */ o(((e, t) => {
	var n = Ua(), r = n.Buffer;
	function i(e, t) {
		for (var n in e) t[n] = e[n];
	}
	r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow ? t.exports = n : (i(n, e), e.Buffer = a);
	function a(e, t, n) {
		return r(e, t, n);
	}
	i(r, a), a.from = function(e, t, n) {
		if (typeof e == "number") throw TypeError("Argument must not be a number");
		return r(e, t, n);
	}, a.alloc = function(e, t, n) {
		if (typeof e != "number") throw TypeError("Argument must be a number");
		var i = r(e);
		return t === void 0 ? i.fill(0) : typeof n == "string" ? i.fill(t, n) : i.fill(t), i;
	}, a.allocUnsafe = function(e) {
		if (typeof e != "number") throw TypeError("Argument must be a number");
		return r(e);
	}, a.allocUnsafeSlow = function(e) {
		if (typeof e != "number") throw TypeError("Argument must be a number");
		return n.SlowBuffer(e);
	};
})), Ga = /* @__PURE__ */ o(((e, t) => {
	var n = Wa().Buffer, r = l(), i = l();
	function a(e) {
		if (this.buffer = null, this.writable = !0, this.readable = !0, !e) return this.buffer = n.alloc(0), this;
		if (typeof e.pipe == "function") return this.buffer = n.alloc(0), e.pipe(this), this;
		if (e.length || typeof e == "object") return this.buffer = e, this.writable = !1, process.nextTick(function() {
			this.emit("end", e), this.readable = !1, this.emit("close");
		}.bind(this)), this;
		throw TypeError("Unexpected data type (" + typeof e + ")");
	}
	i.inherits(a, r), a.prototype.write = function(e) {
		this.buffer = n.concat([this.buffer, n.from(e)]), this.emit("data", e);
	}, a.prototype.end = function(e) {
		e && this.write(e), this.emit("end", e), this.emit("close"), this.writable = !1, this.readable = !1;
	}, t.exports = a;
})), Ka = /* @__PURE__ */ o(((e, t) => {
	function n(e) {
		return (e / 8 | 0) + (e % 8 == 0 ? 0 : 1);
	}
	var r = {
		ES256: n(256),
		ES384: n(384),
		ES512: n(521)
	};
	function i(e) {
		var t = r[e];
		if (t) return t;
		throw Error("Unknown algorithm \"" + e + "\"");
	}
	t.exports = i;
})), qa = /* @__PURE__ */ o(((e, t) => {
	var n = Wa().Buffer, r = Ka(), i = 128, a = 0, o = 32, s = 16, c = 2, l = s | o | a << 6, u = c | a << 6;
	function d(e) {
		return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function f(e) {
		if (n.isBuffer(e)) return e;
		if (typeof e == "string") return n.from(e, "base64");
		throw TypeError("ECDSA signature must be a Base64 string or a Buffer");
	}
	function p(e, t) {
		e = f(e);
		var a = r(t), o = a + 1, s = e.length, c = 0;
		if (e[c++] !== l) throw Error("Could not find expected \"seq\"");
		var p = e[c++];
		if (p === (i | 1) && (p = e[c++]), s - c < p) throw Error("\"seq\" specified length of \"" + p + "\", only \"" + (s - c) + "\" remaining");
		if (e[c++] !== u) throw Error("Could not find expected \"int\" for \"r\"");
		var m = e[c++];
		if (s - c - 2 < m) throw Error("\"r\" specified length of \"" + m + "\", only \"" + (s - c - 2) + "\" available");
		if (o < m) throw Error("\"r\" specified length of \"" + m + "\", max of \"" + o + "\" is acceptable");
		var h = c;
		if (c += m, e[c++] !== u) throw Error("Could not find expected \"int\" for \"s\"");
		var g = e[c++];
		if (s - c !== g) throw Error("\"s\" specified length of \"" + g + "\", expected \"" + (s - c) + "\"");
		if (o < g) throw Error("\"s\" specified length of \"" + g + "\", max of \"" + o + "\" is acceptable");
		var _ = c;
		if (c += g, c !== s) throw Error("Expected to consume entire buffer, but \"" + (s - c) + "\" bytes remain");
		var v = a - m, y = a - g, b = n.allocUnsafe(v + m + y + g);
		for (c = 0; c < v; ++c) b[c] = 0;
		e.copy(b, c, h + Math.max(-v, 0), h + m), c = a;
		for (var x = c; c < x + y; ++c) b[c] = 0;
		return e.copy(b, c, _ + Math.max(-y, 0), _ + g), b = b.toString("base64"), b = d(b), b;
	}
	function m(e, t, n) {
		for (var r = 0; t + r < n && e[t + r] === 0;) ++r;
		return e[t + r] >= i && --r, r;
	}
	function h(e, t) {
		e = f(e);
		var a = r(t), o = e.length;
		if (o !== a * 2) throw TypeError("\"" + t + "\" signatures must be \"" + a * 2 + "\" bytes, saw \"" + o + "\"");
		var s = m(e, 0, a), c = m(e, a, e.length), d = a - s, p = a - c, h = 2 + d + 1 + 1 + p, g = h < i, _ = n.allocUnsafe((g ? 2 : 3) + h), v = 0;
		return _[v++] = l, g ? _[v++] = h : (_[v++] = i | 1, _[v++] = h & 255), _[v++] = u, _[v++] = d, s < 0 ? (_[v++] = 0, v += e.copy(_, v, 0, a)) : v += e.copy(_, v, s, a), _[v++] = u, _[v++] = p, c < 0 ? (_[v++] = 0, e.copy(_, v, a)) : e.copy(_, v, a + c), _;
	}
	t.exports = {
		derToJose: p,
		joseToDer: h
	};
})), Ja = /* @__PURE__ */ o(((e, t) => {
	var n = Ua().Buffer, r = Ua().SlowBuffer;
	t.exports = i;
	function i(e, t) {
		if (!n.isBuffer(e) || !n.isBuffer(t) || e.length !== t.length) return !1;
		for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
		return r === 0;
	}
	i.install = function() {
		n.prototype.equal = r.prototype.equal = function(e) {
			return i(this, e);
		};
	};
	var a = n.prototype.equal, o = r.prototype.equal;
	i.restore = function() {
		n.prototype.equal = a, r.prototype.equal = o;
	};
})), Ya = /* @__PURE__ */ o(((e, t) => {
	var n = Wa().Buffer, r = l(), i = qa(), a = l(), o = "\"%s\" is not a valid algorithm.\n  Supported algorithms are:\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".", s = "secret must be a string or buffer", c = "key must be a string or a buffer", u = "key must be a string, a buffer or an object", d = typeof r.createPublicKey == "function";
	d && (c += " or a KeyObject", s += "or a KeyObject");
	function f(e) {
		if (!n.isBuffer(e) && typeof e != "string" && (!d || typeof e != "object" || typeof e.type != "string" || typeof e.asymmetricKeyType != "string" || typeof e.export != "function")) throw _(c);
	}
	function p(e) {
		if (!n.isBuffer(e) && typeof e != "string" && typeof e != "object") throw _(u);
	}
	function m(e) {
		if (!n.isBuffer(e)) {
			if (typeof e == "string") return e;
			if (!d || typeof e != "object" || e.type !== "secret" || typeof e.export != "function") throw _(s);
		}
	}
	function h(e) {
		return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function g(e) {
		e = e.toString();
		var t = 4 - e.length % 4;
		if (t !== 4) for (var n = 0; n < t; ++n) e += "=";
		return e.replace(/\-/g, "+").replace(/_/g, "/");
	}
	function _(e) {
		var t = [].slice.call(arguments, 1), n = a.format.bind(a, e).apply(null, t);
		return TypeError(n);
	}
	function v(e) {
		return n.isBuffer(e) || typeof e == "string";
	}
	function y(e) {
		return v(e) || (e = JSON.stringify(e)), e;
	}
	function b(e) {
		return function(t, n) {
			m(n), t = y(t);
			var i = r.createHmac("sha" + e, n);
			return h((i.update(t), i.digest("base64")));
		};
	}
	var x, S = "timingSafeEqual" in r ? function(e, t) {
		return e.byteLength === t.byteLength ? r.timingSafeEqual(e, t) : !1;
	} : function(e, t) {
		return x ||= Ja(), x(e, t);
	};
	function C(e) {
		return function(t, r, i) {
			var a = b(e)(t, i);
			return S(n.from(r), n.from(a));
		};
	}
	function w(e) {
		return function(t, n) {
			p(n), t = y(t);
			var i = r.createSign("RSA-SHA" + e);
			return h((i.update(t), i.sign(n, "base64")));
		};
	}
	function T(e) {
		return function(t, n, i) {
			f(i), t = y(t), n = g(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify(i, n, "base64");
		};
	}
	function ee(e) {
		return function(t, n) {
			p(n), t = y(t);
			var i = r.createSign("RSA-SHA" + e);
			return h((i.update(t), i.sign({
				key: n,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, "base64")));
		};
	}
	function E(e) {
		return function(t, n, i) {
			f(i), t = y(t), n = g(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify({
				key: i,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, n, "base64");
		};
	}
	function te(e) {
		var t = w(e);
		return function() {
			var n = t.apply(null, arguments);
			return n = i.derToJose(n, "ES" + e), n;
		};
	}
	function ne(e) {
		var t = T(e);
		return function(n, r, a) {
			return r = i.joseToDer(r, "ES" + e).toString("base64"), t(n, r, a);
		};
	}
	function re() {
		return function() {
			return "";
		};
	}
	function D() {
		return function(e, t) {
			return t === "";
		};
	}
	t.exports = function(e) {
		var t = {
			hs: b,
			rs: w,
			ps: ee,
			es: te,
			none: re
		}, n = {
			hs: C,
			rs: T,
			ps: E,
			es: ne,
			none: D
		}, r = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
		if (!r) throw _(o, e);
		var i = (r[1] || r[3]).toLowerCase(), a = r[2];
		return {
			sign: t[i](a),
			verify: n[i](a)
		};
	};
})), Xa = /* @__PURE__ */ o(((e, t) => {
	var n = Ua().Buffer;
	t.exports = function(e) {
		return typeof e == "string" ? e : typeof e == "number" || n.isBuffer(e) ? e.toString() : JSON.stringify(e);
	};
})), Za = /* @__PURE__ */ o(((e, t) => {
	var n = Wa().Buffer, r = Ga(), i = Ya(), a = l(), o = Xa(), s = l();
	function c(e, t) {
		return n.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function u(e, t, n) {
		n ||= "utf8";
		var r = c(o(e), "binary"), i = c(o(t), n);
		return s.format("%s.%s", r, i);
	}
	function d(e) {
		var t = e.header, n = e.payload, r = e.secret || e.privateKey, a = e.encoding, o = i(t.alg), c = u(t, n, a), l = o.sign(c, r);
		return s.format("%s.%s", c, l);
	}
	function f(e) {
		var t = e.secret;
		if (t ??= e.privateKey, t ??= e.key, /^hs/i.test(e.header.alg) === !0 && t == null) throw TypeError("secret must be a string or buffer or a KeyObject");
		var n = new r(t);
		this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = n, this.payload = new r(e.payload), this.secret.once("close", function() {
			!this.payload.writable && this.readable && this.sign();
		}.bind(this)), this.payload.once("close", function() {
			!this.secret.writable && this.readable && this.sign();
		}.bind(this));
	}
	s.inherits(f, a), f.prototype.sign = function() {
		try {
			var e = d({
				header: this.header,
				payload: this.payload.buffer,
				secret: this.secret.buffer,
				encoding: this.encoding
			});
			return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, f.sign = d, t.exports = f;
})), Qa = /* @__PURE__ */ o(((e, t) => {
	var n = Wa().Buffer, r = Ga(), i = Ya(), a = l(), o = Xa(), s = l(), c = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
	function u(e) {
		return Object.prototype.toString.call(e) === "[object Object]";
	}
	function d(e) {
		if (u(e)) return e;
		try {
			return JSON.parse(e);
		} catch {
			return;
		}
	}
	function f(e) {
		var t = e.split(".", 1)[0];
		return d(n.from(t, "base64").toString("binary"));
	}
	function p(e) {
		return e.split(".", 2).join(".");
	}
	function m(e) {
		return e.split(".")[2];
	}
	function h(e, t) {
		t ||= "utf8";
		var r = e.split(".")[1];
		return n.from(r, "base64").toString(t);
	}
	function g(e) {
		return c.test(e) && !!f(e);
	}
	function _(e, t, n) {
		if (!t) {
			var r = /* @__PURE__ */ Error("Missing algorithm parameter for jws.verify");
			throw r.code = "MISSING_ALGORITHM", r;
		}
		e = o(e);
		var a = m(e), s = p(e);
		return i(t).verify(s, a, n);
	}
	function v(e, t) {
		if (t ||= {}, e = o(e), !g(e)) return null;
		var n = f(e);
		if (!n) return null;
		var r = h(e);
		return (n.typ === "JWT" || t.json) && (r = JSON.parse(r, t.encoding)), {
			header: n,
			payload: r,
			signature: m(e)
		};
	}
	function y(e) {
		e ||= {};
		var t = e.secret;
		if (t ??= e.publicKey, t ??= e.key, /^hs/i.test(e.algorithm) === !0 && t == null) throw TypeError("secret must be a string or buffer or a KeyObject");
		var n = new r(t);
		this.readable = !0, this.algorithm = e.algorithm, this.encoding = e.encoding, this.secret = this.publicKey = this.key = n, this.signature = new r(e.signature), this.secret.once("close", function() {
			!this.signature.writable && this.readable && this.verify();
		}.bind(this)), this.signature.once("close", function() {
			!this.secret.writable && this.readable && this.verify();
		}.bind(this));
	}
	s.inherits(y, a), y.prototype.verify = function() {
		try {
			var e = _(this.signature.buffer, this.algorithm, this.key.buffer), t = v(this.signature.buffer, this.encoding);
			return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, y.decode = v, y.isValid = g, y.verify = _, t.exports = y;
})), $a = /* @__PURE__ */ o(((e) => {
	var t = Za(), n = Qa();
	e.ALGORITHMS = [
		"HS256",
		"HS384",
		"HS512",
		"RS256",
		"RS384",
		"RS512",
		"PS256",
		"PS384",
		"PS512",
		"ES256",
		"ES384",
		"ES512"
	], e.sign = t.sign, e.verify = n.verify, e.decode = n.decode, e.isValid = n.isValid, e.createSign = function(e) {
		return new t(e);
	}, e.createVerify = function(e) {
		return new n(e);
	};
})), eo = /* @__PURE__ */ o(((e, t) => {
	var n = $a();
	t.exports = function(e, t) {
		t ||= {};
		var r = n.decode(e, t);
		if (!r) return null;
		var i = r.payload;
		if (typeof i == "string") try {
			var a = JSON.parse(i);
			typeof a == "object" && a && (i = a);
		} catch {}
		return t.complete === !0 ? {
			header: r.header,
			payload: i,
			signature: r.signature
		} : i;
	};
})), to = /* @__PURE__ */ o(((e, t) => {
	var n = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
	};
	n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
})), no = /* @__PURE__ */ o(((e, t) => {
	var n = to(), r = function(e, t) {
		n.call(this, e), this.name = "NotBeforeError", this.date = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), ro = /* @__PURE__ */ o(((e, t) => {
	var n = to(), r = function(e, t) {
		n.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), io = /* @__PURE__ */ o(((e, t) => {
	var n = 1e3, r = n * 60, i = r * 60, a = i * 24, o = a * 7, s = a * 365.25;
	t.exports = function(e, t) {
		t ||= {};
		var n = typeof e;
		if (n === "string" && e.length > 0) return c(e);
		if (n === "number" && isFinite(e)) return t.long ? u(e) : l(e);
		throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
	};
	function c(e) {
		if (e = String(e), !(e.length > 100)) {
			var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
			if (t) {
				var c = parseFloat(t[1]);
				switch ((t[2] || "ms").toLowerCase()) {
					case "years":
					case "year":
					case "yrs":
					case "yr":
					case "y": return c * s;
					case "weeks":
					case "week":
					case "w": return c * o;
					case "days":
					case "day":
					case "d": return c * a;
					case "hours":
					case "hour":
					case "hrs":
					case "hr":
					case "h": return c * i;
					case "minutes":
					case "minute":
					case "mins":
					case "min":
					case "m": return c * r;
					case "seconds":
					case "second":
					case "secs":
					case "sec":
					case "s": return c * n;
					case "milliseconds":
					case "millisecond":
					case "msecs":
					case "msec":
					case "ms": return c;
					default: return;
				}
			}
		}
	}
	function l(e) {
		var t = Math.abs(e);
		return t >= a ? Math.round(e / a) + "d" : t >= i ? Math.round(e / i) + "h" : t >= r ? Math.round(e / r) + "m" : t >= n ? Math.round(e / n) + "s" : e + "ms";
	}
	function u(e) {
		var t = Math.abs(e);
		return t >= a ? d(e, t, a, "day") : t >= i ? d(e, t, i, "hour") : t >= r ? d(e, t, r, "minute") : t >= n ? d(e, t, n, "second") : e + " ms";
	}
	function d(e, t, n, r) {
		var i = t >= n * 1.5;
		return Math.round(e / n) + " " + r + (i ? "s" : "");
	}
})), ao = /* @__PURE__ */ o(((e, t) => {
	var n = io();
	t.exports = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if (typeof e == "string") {
			var i = n(e);
			return i === void 0 ? void 0 : Math.floor(r + i / 1e3);
		} else if (typeof e == "number") return r + e;
		else return;
	};
})), oo = /* @__PURE__ */ o(((e, t) => {
	var n = "2.0.0", r = 256;
	t.exports = {
		MAX_LENGTH: r,
		MAX_SAFE_COMPONENT_LENGTH: 16,
		MAX_SAFE_BUILD_LENGTH: r - 6,
		MAX_SAFE_INTEGER: 2 ** 53 - 1 || 9007199254740991,
		RELEASE_TYPES: [
			"major",
			"premajor",
			"minor",
			"preminor",
			"patch",
			"prepatch",
			"prerelease"
		],
		SEMVER_SPEC_VERSION: n,
		FLAG_INCLUDE_PRERELEASE: 1,
		FLAG_LOOSE: 2
	};
})), so = /* @__PURE__ */ o(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), co = /* @__PURE__ */ o(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = oo(), a = so();
	e = t.exports = {};
	var o = e.re = [], s = e.safeRe = [], c = e.src = [], l = e.safeSrc = [], u = e.t = {}, d = 0, f = "[a-zA-Z0-9-]", p = [
		["\\s", 1],
		["\\d", i],
		[f, r]
	], m = (e) => {
		for (let [t, n] of p) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
		return e;
	}, h = (e, t, n) => {
		let r = m(t), i = d++;
		a(e, i, t), u[e] = i, c[i] = t, l[i] = r, o[i] = new RegExp(t, n ? "g" : void 0), s[i] = new RegExp(r, n ? "g" : void 0);
	};
	h("NUMERICIDENTIFIER", "0|[1-9]\\d*"), h("NUMERICIDENTIFIERLOOSE", "\\d+"), h("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), h("MAINVERSION", `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), h("MAINVERSIONLOOSE", `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASEIDENTIFIER", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`), h("PRERELEASEIDENTIFIERLOOSE", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASE", `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), h("PRERELEASELOOSE", `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), h("BUILDIDENTIFIER", `${f}+`), h("BUILD", `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), h("FULLPLAIN", `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), h("FULL", `^${c[u.FULLPLAIN]}$`), h("LOOSEPLAIN", `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), h("LOOSE", `^${c[u.LOOSEPLAIN]}$`), h("GTLT", "((?:<|>)?=?)"), h("XRANGEIDENTIFIERLOOSE", `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h("XRANGEIDENTIFIER", `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), h("XRANGEPLAIN", `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), h("XRANGEPLAINLOOSE", `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), h("XRANGE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), h("XRANGELOOSE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), h("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), h("COERCE", `${c[u.COERCEPLAIN]}(?:$|[^\\d])`), h("COERCEFULL", c[u.COERCEPLAIN] + `(?:${c[u.PRERELEASE]})?(?:${c[u.BUILD]})?(?:$|[^\\d])`), h("COERCERTL", c[u.COERCE], !0), h("COERCERTLFULL", c[u.COERCEFULL], !0), h("LONETILDE", "(?:~>?)"), h("TILDETRIM", `(\\s*)${c[u.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", h("TILDE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), h("TILDELOOSE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), h("LONECARET", "(?:\\^)"), h("CARETTRIM", `(\\s*)${c[u.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", h("CARET", `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), h("CARETLOOSE", `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), h("COMPARATORLOOSE", `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), h("COMPARATOR", `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), h("COMPARATORTRIM", `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", h("HYPHENRANGE", `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), h("HYPHENRANGELOOSE", `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), h("STAR", "(<|>)?=?\\s*\\*"), h("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), h("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})), lo = /* @__PURE__ */ o(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), uo = /* @__PURE__ */ o(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), fo = /* @__PURE__ */ o(((e, t) => {
	var n = so(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = oo(), { safeRe: a, t: o } = co(), s = lo(), { compareIdentifiers: c } = uo();
	t.exports = class e {
		constructor(t, c) {
			if (c = s(c), t instanceof e) {
				if (t.loose === !!c.loose && t.includePrerelease === !!c.includePrerelease) return t;
				t = t.version;
			} else if (typeof t != "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
			if (t.length > r) throw TypeError(`version is longer than ${r} characters`);
			n("SemVer", t, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
			let l = t.trim().match(c.loose ? a[o.LOOSE] : a[o.FULL]);
			if (!l) throw TypeError(`Invalid Version: ${t}`);
			if (this.raw = t, this.major = +l[1], this.minor = +l[2], this.patch = +l[3], this.major > i || this.major < 0) throw TypeError("Invalid major version");
			if (this.minor > i || this.minor < 0) throw TypeError("Invalid minor version");
			if (this.patch > i || this.patch < 0) throw TypeError("Invalid patch version");
			l[4] ? this.prerelease = l[4].split(".").map((e) => {
				if (/^[0-9]+$/.test(e)) {
					let t = +e;
					if (t >= 0 && t < i) return t;
				}
				return e;
			}) : this.prerelease = [], this.build = l[5] ? l[5].split(".") : [], this.format();
		}
		format() {
			return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
		}
		toString() {
			return this.version;
		}
		compare(t) {
			if (n("SemVer.compare", this.version, this.options, t), !(t instanceof e)) {
				if (typeof t == "string" && t === this.version) return 0;
				t = new e(t, this.options);
			}
			return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
		}
		compareMain(t) {
			return t instanceof e || (t = new e(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : +(this.patch > t.patch);
		}
		comparePre(t) {
			if (t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
			if (!this.prerelease.length && t.prerelease.length) return 1;
			if (!this.prerelease.length && !t.prerelease.length) return 0;
			let r = 0;
			do {
				let e = this.prerelease[r], i = t.prerelease[r];
				if (n("prerelease compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e === i) continue;
				return c(e, i);
			} while (++r);
		}
		compareBuild(t) {
			t instanceof e || (t = new e(t, this.options));
			let r = 0;
			do {
				let e = this.build[r], i = t.build[r];
				if (n("build compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e === i) continue;
				return c(e, i);
			} while (++r);
		}
		inc(e, t, n) {
			if (e.startsWith("pre")) {
				if (!t && n === !1) throw Error("invalid increment argument: identifier is empty");
				if (t) {
					let e = `-${t}`.match(this.options.loose ? a[o.PRERELEASELOOSE] : a[o.PRERELEASE]);
					if (!e || e[1] !== t) throw Error(`invalid identifier: ${t}`);
				}
			}
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "prerelease":
					this.prerelease.length === 0 && this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "release":
					if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
					this.prerelease.length = 0;
					break;
				case "major":
					(this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					(this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
					break;
				case "patch":
					this.prerelease.length === 0 && this.patch++, this.prerelease = [];
					break;
				case "pre": {
					let e = +!!Number(n);
					if (this.prerelease.length === 0) this.prerelease = [e];
					else {
						let r = this.prerelease.length;
						for (; --r >= 0;) typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
						if (r === -1) {
							if (t === this.prerelease.join(".") && n === !1) throw Error("invalid increment argument: identifier already exists");
							this.prerelease.push(e);
						}
					}
					if (t) {
						let r = [t, e];
						n === !1 && (r = [t]), c(this.prerelease[0], t) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = r) : this.prerelease = r;
					}
					break;
				}
				default: throw Error(`invalid increment argument: ${e}`);
			}
			return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
		}
	};
})), po = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), mo = /* @__PURE__ */ o(((e, t) => {
	var n = po();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), ho = /* @__PURE__ */ o(((e, t) => {
	var n = po();
	t.exports = (e, t) => {
		let r = n(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
})), go = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t, r, i, a) => {
		typeof r == "string" && (a = i, i = r, r = void 0);
		try {
			return new n(e instanceof n ? e.version : e, r).inc(t, i, a).version;
		} catch {
			return null;
		}
	};
})), _o = /* @__PURE__ */ o(((e, t) => {
	var n = po();
	t.exports = (e, t) => {
		let r = n(e, null, !0), i = n(t, null, !0), a = r.compare(i);
		if (a === 0) return null;
		let o = a > 0, s = o ? r : i, c = o ? i : r, l = !!s.prerelease.length;
		if (c.prerelease.length && !l) {
			if (!c.patch && !c.minor) return "major";
			if (c.compareMain(s) === 0) return c.minor && !c.patch ? "minor" : "patch";
		}
		let u = l ? "pre" : "";
		return r.major === i.major ? r.minor === i.minor ? r.patch === i.patch ? "prerelease" : u + "patch" : u + "minor" : u + "major";
	};
})), vo = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t) => new n(e, t).major;
})), yo = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t) => new n(e, t).minor;
})), bo = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t) => new n(e, t).patch;
})), xo = /* @__PURE__ */ o(((e, t) => {
	var n = po();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
})), So = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), Co = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(t, e, r);
})), wo = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t) => n(e, t, !0);
})), To = /* @__PURE__ */ o(((e, t) => {
	var n = fo();
	t.exports = (e, t, r) => {
		let i = new n(e, r), a = new n(t, r);
		return i.compare(a) || i.compareBuild(a);
	};
})), Eo = /* @__PURE__ */ o(((e, t) => {
	var n = To();
	t.exports = (e, t) => e.sort((e, r) => n(e, r, t));
})), Do = /* @__PURE__ */ o(((e, t) => {
	var n = To();
	t.exports = (e, t) => e.sort((e, r) => n(r, e, t));
})), Oo = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), ko = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), Ao = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), jo = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), Mo = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), No = /* @__PURE__ */ o(((e, t) => {
	var n = So();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), Po = /* @__PURE__ */ o(((e, t) => {
	var n = Ao(), r = jo(), i = Oo(), a = Mo(), o = ko(), s = No();
	t.exports = (e, t, c, l) => {
		switch (t) {
			case "===": return typeof e == "object" && (e = e.version), typeof c == "object" && (c = c.version), e === c;
			case "!==": return typeof e == "object" && (e = e.version), typeof c == "object" && (c = c.version), e !== c;
			case "":
			case "=":
			case "==": return n(e, c, l);
			case "!=": return r(e, c, l);
			case ">": return i(e, c, l);
			case ">=": return a(e, c, l);
			case "<": return o(e, c, l);
			case "<=": return s(e, c, l);
			default: throw TypeError(`Invalid operator: ${t}`);
		}
	};
})), Fo = /* @__PURE__ */ o(((e, t) => {
	var n = fo(), r = po(), { safeRe: i, t: a } = co();
	t.exports = (e, t) => {
		if (e instanceof n) return e;
		if (typeof e == "number" && (e = String(e)), typeof e != "string") return null;
		t ||= {};
		let o = null;
		if (!t.rtl) o = e.match(t.includePrerelease ? i[a.COERCEFULL] : i[a.COERCE]);
		else {
			let n = t.includePrerelease ? i[a.COERCERTLFULL] : i[a.COERCERTL], r;
			for (; (r = n.exec(e)) && (!o || o.index + o[0].length !== e.length);) (!o || r.index + r[0].length !== o.index + o[0].length) && (o = r), n.lastIndex = r.index + r[1].length + r[2].length;
			n.lastIndex = -1;
		}
		if (o === null) return null;
		let s = o[2];
		return r(`${s}.${o[3] || "0"}.${o[4] || "0"}${t.includePrerelease && o[5] ? `-${o[5]}` : ""}${t.includePrerelease && o[6] ? `+${o[6]}` : ""}`, t);
	};
})), Io = /* @__PURE__ */ o(((e, t) => {
	t.exports = class {
		constructor() {
			this.max = 1e3, this.map = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.map.get(e);
			if (t !== void 0) return this.map.delete(e), this.map.set(e, t), t;
		}
		delete(e) {
			return this.map.delete(e);
		}
		set(e, t) {
			if (!this.delete(e) && t !== void 0) {
				if (this.map.size >= this.max) {
					let e = this.map.keys().next().value;
					this.delete(e);
				}
				this.map.set(e, t);
			}
			return this;
		}
	};
})), Lo = /* @__PURE__ */ o(((e, t) => {
	var n = /\s+/g;
	t.exports = class e {
		constructor(t, r) {
			if (r = i(r), t instanceof e) return t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease ? t : new e(t.raw, r);
			if (t instanceof a) return this.raw = t.value, this.set = [[t]], this.formatted = void 0, this;
			if (this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease, this.raw = t.trim().replace(n, " "), this.set = this.raw.split("||").map((e) => this.parseRange(e.trim())).filter((e) => e.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
			if (this.set.length > 1) {
				let e = this.set[0];
				if (this.set = this.set.filter((e) => !h(e[0])), this.set.length === 0) this.set = [e];
				else if (this.set.length > 1) {
					for (let e of this.set) if (e.length === 1 && g(e[0])) {
						this.set = [e];
						break;
					}
				}
			}
			this.formatted = void 0;
		}
		get range() {
			if (this.formatted === void 0) {
				this.formatted = "";
				for (let e = 0; e < this.set.length; e++) {
					e > 0 && (this.formatted += "||");
					let t = this.set[e];
					for (let e = 0; e < t.length; e++) e > 0 && (this.formatted += " "), this.formatted += t[e].toString().trim();
				}
			}
			return this.formatted;
		}
		format() {
			return this.range;
		}
		toString() {
			return this.range;
		}
		parseRange(e) {
			let t = ((this.options.includePrerelease && p) | (this.options.loose && m)) + ":" + e, n = r.get(t);
			if (n) return n;
			let i = this.options.loose, s = i ? c[l.HYPHENRANGELOOSE] : c[l.HYPHENRANGE];
			e = e.replace(s, te(this.options.includePrerelease)), o("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], u), o("comparator trim", e), e = e.replace(c[l.TILDETRIM], d), o("tilde trim", e), e = e.replace(c[l.CARETTRIM], f), o("caret trim", e);
			let g = e.split(" ").map((e) => v(e, this.options)).join(" ").split(/\s+/).map((e) => E(e, this.options));
			i && (g = g.filter((e) => (o("loose invalid filter", e, this.options), !!e.match(c[l.COMPARATORLOOSE])))), o("range list", g);
			let _ = /* @__PURE__ */ new Map(), y = g.map((e) => new a(e, this.options));
			for (let e of y) {
				if (h(e)) return [e];
				_.set(e.value, e);
			}
			_.size > 1 && _.has("") && _.delete("");
			let b = [..._.values()];
			return r.set(t, b), b;
		}
		intersects(t, n) {
			if (!(t instanceof e)) throw TypeError("a Range is required");
			return this.set.some((e) => _(e, n) && t.set.some((t) => _(t, n) && e.every((e) => t.every((t) => e.intersects(t, n)))));
		}
		test(e) {
			if (!e) return !1;
			if (typeof e == "string") try {
				e = new s(e, this.options);
			} catch {
				return !1;
			}
			for (let t = 0; t < this.set.length; t++) if (ne(this.set[t], e, this.options)) return !0;
			return !1;
		}
	};
	var r = new (Io())(), i = lo(), a = Ro(), o = so(), s = fo(), { safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: d, caretTrimReplace: f } = co(), { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = oo(), h = (e) => e.value === "<0.0.0-0", g = (e) => e.value === "", _ = (e, t) => {
		let n = !0, r = e.slice(), i = r.pop();
		for (; n && r.length;) n = r.every((e) => i.intersects(e, t)), i = r.pop();
		return n;
	}, v = (e, t) => (e = e.replace(c[l.BUILD], ""), o("comp", e, t), e = S(e, t), o("caret", e), e = b(e, t), o("tildes", e), e = w(e, t), o("xrange", e), e = ee(e, t), o("stars", e), e), y = (e) => !e || e.toLowerCase() === "x" || e === "*", b = (e, t) => e.trim().split(/\s+/).map((e) => x(e, t)).join(" "), x = (e, t) => {
		let n = t.loose ? c[l.TILDELOOSE] : c[l.TILDE];
		return e.replace(n, (t, n, r, i, a) => {
			o("tilde", e, t, n, r, i, a);
			let s;
			return y(n) ? s = "" : y(r) ? s = `>=${n}.0.0 <${+n + 1}.0.0-0` : y(i) ? s = `>=${n}.${r}.0 <${n}.${+r + 1}.0-0` : a ? (o("replaceTilde pr", a), s = `>=${n}.${r}.${i}-${a} <${n}.${+r + 1}.0-0`) : s = `>=${n}.${r}.${i} <${n}.${+r + 1}.0-0`, o("tilde return", s), s;
		});
	}, S = (e, t) => e.trim().split(/\s+/).map((e) => C(e, t)).join(" "), C = (e, t) => {
		o("caret", e, t);
		let n = t.loose ? c[l.CARETLOOSE] : c[l.CARET], r = t.includePrerelease ? "-0" : "";
		return e.replace(n, (t, n, i, a, s) => {
			o("caret", e, t, n, i, a, s);
			let c;
			return y(n) ? c = "" : y(i) ? c = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : y(a) ? c = n === "0" ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0` : s ? (o("replaceCaret pr", s), c = n === "0" ? i === "0" ? `>=${n}.${i}.${a}-${s} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a}-${s} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${a}-${s} <${+n + 1}.0.0-0`) : (o("no pr"), c = n === "0" ? i === "0" ? `>=${n}.${i}.${a}${r} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a}${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${a} <${+n + 1}.0.0-0`), o("caret return", c), c;
		});
	}, w = (e, t) => (o("replaceXRanges", e, t), e.split(/\s+/).map((e) => T(e, t)).join(" ")), T = (e, t) => {
		e = e.trim();
		let n = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
		return e.replace(n, (n, r, i, a, s, c) => {
			o("xRange", e, n, r, i, a, s, c);
			let l = y(i), u = l || y(a), d = u || y(s), f = d;
			return r === "=" && f && (r = ""), c = t.includePrerelease ? "-0" : "", l ? n = r === ">" || r === "<" ? "<0.0.0-0" : "*" : r && f ? (u && (a = 0), s = 0, r === ">" ? (r = ">=", u ? (i = +i + 1, a = 0, s = 0) : (a = +a + 1, s = 0)) : r === "<=" && (r = "<", u ? i = +i + 1 : a = +a + 1), r === "<" && (c = "-0"), n = `${r + i}.${a}.${s}${c}`) : u ? n = `>=${i}.0.0${c} <${+i + 1}.0.0-0` : d && (n = `>=${i}.${a}.0${c} <${i}.${+a + 1}.0-0`), o("xRange return", n), n;
		});
	}, ee = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[l.STAR], "")), E = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")), te = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = y(r) ? "" : y(i) ? `>=${r}.0.0${e ? "-0" : ""}` : y(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = y(l) ? "" : y(u) ? `<${+l + 1}.0.0-0` : y(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), ne = (e, t, n) => {
		for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
		if (t.prerelease.length && !n.includePrerelease) {
			for (let n = 0; n < e.length; n++) if (o(e[n].semver), e[n].semver !== a.ANY && e[n].semver.prerelease.length > 0) {
				let r = e[n].semver;
				if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0;
			}
			return !1;
		}
		return !0;
	};
})), Ro = /* @__PURE__ */ o(((e, t) => {
	var n = Symbol("SemVer ANY");
	t.exports = class e {
		static get ANY() {
			return n;
		}
		constructor(t, i) {
			if (i = r(i), t instanceof e) {
				if (t.loose === !!i.loose) return t;
				t = t.value;
			}
			t = t.trim().split(/\s+/).join(" "), s("comparator", t, i), this.options = i, this.loose = !!i.loose, this.parse(t), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, s("comp", this);
		}
		parse(e) {
			let t = this.options.loose ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR], r = e.match(t);
			if (!r) throw TypeError(`Invalid comparator: ${e}`);
			this.operator = r[1] === void 0 ? "" : r[1], this.operator === "=" && (this.operator = ""), r[2] ? this.semver = new c(r[2], this.options.loose) : this.semver = n;
		}
		toString() {
			return this.value;
		}
		test(e) {
			if (s("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
			if (typeof e == "string") try {
				e = new c(e, this.options);
			} catch {
				return !1;
			}
			return o(e, this.operator, this.semver, this.options);
		}
		intersects(t, n) {
			if (!(t instanceof e)) throw TypeError("a Comparator is required");
			return this.operator === "" ? this.value === "" ? !0 : new l(t.value, n).test(this.value) : t.operator === "" ? t.value === "" ? !0 : new l(this.value, n).test(t.semver) : (n = r(n), n.includePrerelease && (this.value === "<0.0.0-0" || t.value === "<0.0.0-0") || !n.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && t.operator.startsWith(">") || this.operator.startsWith("<") && t.operator.startsWith("<") || this.semver.version === t.semver.version && this.operator.includes("=") && t.operator.includes("=") || o(this.semver, "<", t.semver, n) && this.operator.startsWith(">") && t.operator.startsWith("<") || o(this.semver, ">", t.semver, n) && this.operator.startsWith("<") && t.operator.startsWith(">")));
		}
	};
	var r = lo(), { safeRe: i, t: a } = co(), o = Po(), s = so(), c = fo(), l = Lo();
})), zo = /* @__PURE__ */ o(((e, t) => {
	var n = Lo();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), Bo = /* @__PURE__ */ o(((e, t) => {
	var n = Lo();
	t.exports = (e, t) => new n(e, t).set.map((e) => e.map((e) => e.value).join(" ").trim().split(" "));
})), Vo = /* @__PURE__ */ o(((e, t) => {
	var n = fo(), r = Lo();
	t.exports = (e, t, i) => {
		let a = null, o = null, s = null;
		try {
			s = new r(t, i);
		} catch {
			return null;
		}
		return e.forEach((e) => {
			s.test(e) && (!a || o.compare(e) === -1) && (a = e, o = new n(a, i));
		}), a;
	};
})), Ho = /* @__PURE__ */ o(((e, t) => {
	var n = fo(), r = Lo();
	t.exports = (e, t, i) => {
		let a = null, o = null, s = null;
		try {
			s = new r(t, i);
		} catch {
			return null;
		}
		return e.forEach((e) => {
			s.test(e) && (!a || o.compare(e) === 1) && (a = e, o = new n(a, i));
		}), a;
	};
})), Uo = /* @__PURE__ */ o(((e, t) => {
	var n = fo(), r = Lo(), i = Oo();
	t.exports = (e, t) => {
		e = new r(e, t);
		let a = new n("0.0.0");
		if (e.test(a) || (a = new n("0.0.0-0"), e.test(a))) return a;
		a = null;
		for (let t = 0; t < e.set.length; ++t) {
			let r = e.set[t], o = null;
			r.forEach((e) => {
				let t = new n(e.semver.version);
				switch (e.operator) {
					case ">": t.prerelease.length === 0 ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
					case "":
					case ">=":
						(!o || i(t, o)) && (o = t);
						break;
					case "<":
					case "<=": break;
					/* istanbul ignore next */
					default: throw Error(`Unexpected operation: ${e.operator}`);
				}
			}), o && (!a || i(a, o)) && (a = o);
		}
		return a && e.test(a) ? a : null;
	};
})), Wo = /* @__PURE__ */ o(((e, t) => {
	var n = Lo();
	t.exports = (e, t) => {
		try {
			return new n(e, t).range || "*";
		} catch {
			return null;
		}
	};
})), Go = /* @__PURE__ */ o(((e, t) => {
	var n = fo(), r = Ro(), { ANY: i } = r, a = Lo(), o = zo(), s = Oo(), c = ko(), l = No(), u = Mo();
	t.exports = (e, t, d, f) => {
		e = new n(e, f), t = new a(t, f);
		let p, m, h, g, _;
		switch (d) {
			case ">":
				p = s, m = l, h = c, g = ">", _ = ">=";
				break;
			case "<":
				p = c, m = u, h = s, g = "<", _ = "<=";
				break;
			default: throw TypeError("Must provide a hilo val of \"<\" or \">\"");
		}
		if (o(e, t, f)) return !1;
		for (let n = 0; n < t.set.length; ++n) {
			let a = t.set[n], o = null, s = null;
			if (a.forEach((e) => {
				e.semver === i && (e = new r(">=0.0.0")), o ||= e, s ||= e, p(e.semver, o.semver, f) ? o = e : h(e.semver, s.semver, f) && (s = e);
			}), o.operator === g || o.operator === _ || (!s.operator || s.operator === g) && m(e, s.semver) || s.operator === _ && h(e, s.semver)) return !1;
		}
		return !0;
	};
})), Ko = /* @__PURE__ */ o(((e, t) => {
	var n = Go();
	t.exports = (e, t, r) => n(e, t, ">", r);
})), qo = /* @__PURE__ */ o(((e, t) => {
	var n = Go();
	t.exports = (e, t, r) => n(e, t, "<", r);
})), Jo = /* @__PURE__ */ o(((e, t) => {
	var n = Lo();
	t.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
})), Yo = /* @__PURE__ */ o(((e, t) => {
	var n = zo(), r = So();
	t.exports = (e, t, i) => {
		let a = [], o = null, s = null, c = e.sort((e, t) => r(e, t, i));
		for (let e of c) n(e, t, i) ? (s = e, o ||= e) : (s && a.push([o, s]), s = null, o = null);
		o && a.push([o, null]);
		let l = [];
		for (let [e, t] of a) e === t ? l.push(e) : !t && e === c[0] ? l.push("*") : t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`);
		let u = l.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
		return u.length < d.length ? u : t;
	};
})), Xo = /* @__PURE__ */ o(((e, t) => {
	var n = Lo(), r = Ro(), { ANY: i } = r, a = zo(), o = So(), s = (e, t, r = {}) => {
		if (e === t) return !0;
		e = new n(e, r), t = new n(t, r);
		let i = !1;
		OUTER: for (let n of e.set) {
			for (let e of t.set) {
				let t = u(n, e, r);
				if (i ||= t !== null, t) continue OUTER;
			}
			if (i) return !1;
		}
		return !0;
	}, c = [new r(">=0.0.0-0")], l = [new r(">=0.0.0")], u = (e, t, n) => {
		if (e === t) return !0;
		if (e.length === 1 && e[0].semver === i) {
			if (t.length === 1 && t[0].semver === i) return !0;
			e = n.includePrerelease ? c : l;
		}
		if (t.length === 1 && t[0].semver === i) {
			if (n.includePrerelease) return !0;
			t = l;
		}
		let r = /* @__PURE__ */ new Set(), s, u;
		for (let t of e) t.operator === ">" || t.operator === ">=" ? s = d(s, t, n) : t.operator === "<" || t.operator === "<=" ? u = f(u, t, n) : r.add(t.semver);
		if (r.size > 1) return null;
		let p;
		if (s && u && (p = o(s.semver, u.semver, n), p > 0 || p === 0 && (s.operator !== ">=" || u.operator !== "<="))) return null;
		for (let e of r) {
			if (s && !a(e, String(s), n) || u && !a(e, String(u), n)) return null;
			for (let r of t) if (!a(e, String(r), n)) return !1;
			return !0;
		}
		let m, h, g, _, v = u && !n.includePrerelease && u.semver.prerelease.length ? u.semver : !1, y = s && !n.includePrerelease && s.semver.prerelease.length ? s.semver : !1;
		v && v.prerelease.length === 1 && u.operator === "<" && v.prerelease[0] === 0 && (v = !1);
		for (let e of t) {
			if (_ = _ || e.operator === ">" || e.operator === ">=", g = g || e.operator === "<" || e.operator === "<=", s) {
				if (y && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === y.major && e.semver.minor === y.minor && e.semver.patch === y.patch && (y = !1), e.operator === ">" || e.operator === ">=") {
					if (m = d(s, e, n), m === e && m !== s) return !1;
				} else if (s.operator === ">=" && !a(s.semver, String(e), n)) return !1;
			}
			if (u) {
				if (v && e.semver.prerelease && e.semver.prerelease.length && e.semver.major === v.major && e.semver.minor === v.minor && e.semver.patch === v.patch && (v = !1), e.operator === "<" || e.operator === "<=") {
					if (h = f(u, e, n), h === e && h !== u) return !1;
				} else if (u.operator === "<=" && !a(u.semver, String(e), n)) return !1;
			}
			if (!e.operator && (u || s) && p !== 0) return !1;
		}
		return !(s && g && !u && p !== 0 || u && _ && !s && p !== 0 || y || v);
	}, d = (e, t, n) => {
		if (!e) return t;
		let r = o(e.semver, t.semver, n);
		return r > 0 ? e : r < 0 || t.operator === ">" && e.operator === ">=" ? t : e;
	}, f = (e, t, n) => {
		if (!e) return t;
		let r = o(e.semver, t.semver, n);
		return r < 0 ? e : r > 0 || t.operator === "<" && e.operator === "<=" ? t : e;
	};
	t.exports = s;
})), Zo = /* @__PURE__ */ o(((e, t) => {
	var n = co(), r = oo(), i = fo(), a = uo();
	t.exports = {
		parse: po(),
		valid: mo(),
		clean: ho(),
		inc: go(),
		diff: _o(),
		major: vo(),
		minor: yo(),
		patch: bo(),
		prerelease: xo(),
		compare: So(),
		rcompare: Co(),
		compareLoose: wo(),
		compareBuild: To(),
		sort: Eo(),
		rsort: Do(),
		gt: Oo(),
		lt: ko(),
		eq: Ao(),
		neq: jo(),
		gte: Mo(),
		lte: No(),
		cmp: Po(),
		coerce: Fo(),
		Comparator: Ro(),
		Range: Lo(),
		satisfies: zo(),
		toComparators: Bo(),
		maxSatisfying: Vo(),
		minSatisfying: Ho(),
		minVersion: Uo(),
		validRange: Wo(),
		outside: Go(),
		gtr: Ko(),
		ltr: qo(),
		intersects: Jo(),
		simplifyRange: Yo(),
		subset: Xo(),
		SemVer: i,
		re: n.re,
		src: n.src,
		tokens: n.t,
		SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
		RELEASE_TYPES: r.RELEASE_TYPES,
		compareIdentifiers: a.compareIdentifiers,
		rcompareIdentifiers: a.rcompareIdentifiers
	};
})), Qo = /* @__PURE__ */ o(((e, t) => {
	t.exports = Zo().satisfies(process.version, ">=15.7.0");
})), $o = /* @__PURE__ */ o(((e, t) => {
	t.exports = Zo().satisfies(process.version, ">=16.9.0");
})), es = /* @__PURE__ */ o(((e, t) => {
	var n = Qo(), r = $o(), i = {
		ec: [
			"ES256",
			"ES384",
			"ES512"
		],
		rsa: [
			"RS256",
			"PS256",
			"RS384",
			"PS384",
			"RS512",
			"PS512"
		],
		"rsa-pss": [
			"PS256",
			"PS384",
			"PS512"
		]
	}, a = {
		ES256: "prime256v1",
		ES384: "secp384r1",
		ES512: "secp521r1"
	};
	t.exports = function(e, t) {
		if (!e || !t) return;
		let o = t.asymmetricKeyType;
		if (!o) return;
		let s = i[o];
		if (!s) throw Error(`Unknown key type "${o}".`);
		if (!s.includes(e)) throw Error(`"alg" parameter for "${o}" key type must be one of: ${s.join(", ")}.`);
		/* istanbul ignore next */
		if (n) switch (o) {
			case "ec":
				let n = t.asymmetricKeyDetails.namedCurve, i = a[e];
				if (n !== i) throw Error(`"alg" parameter "${e}" requires curve "${i}".`);
				break;
			case "rsa-pss":
				if (r) {
					let n = parseInt(e.slice(-3), 10), { hashAlgorithm: r, mgf1HashAlgorithm: i, saltLength: a } = t.asymmetricKeyDetails;
					if (r !== `sha${n}` || i !== r) throw Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${e}.`);
					if (a !== void 0 && a > n >> 3) throw Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${e}.`);
				}
				break;
		}
	};
})), ts = /* @__PURE__ */ o(((e, t) => {
	t.exports = Zo().satisfies(process.version, "^6.12.0 || >=8.0.0");
})), ns = /* @__PURE__ */ o(((e, t) => {
	var n = to(), r = no(), i = ro(), a = eo(), o = ao(), s = es(), c = ts(), u = $a(), { KeyObject: d, createSecretKey: f, createPublicKey: p } = l(), m = [
		"RS256",
		"RS384",
		"RS512"
	], h = [
		"ES256",
		"ES384",
		"ES512"
	], g = [
		"RS256",
		"RS384",
		"RS512"
	], _ = [
		"HS256",
		"HS384",
		"HS512"
	];
	c && (m.splice(m.length, 0, "PS256", "PS384", "PS512"), g.splice(g.length, 0, "PS256", "PS384", "PS512")), t.exports = function(e, t, c, l) {
		typeof c == "function" && !l && (l = c, c = {}), c ||= {}, c = Object.assign({}, c);
		let v;
		if (v = l || function(e, t) {
			if (e) throw e;
			return t;
		}, c.clockTimestamp && typeof c.clockTimestamp != "number") return v(new n("clockTimestamp must be a number"));
		if (c.nonce !== void 0 && (typeof c.nonce != "string" || c.nonce.trim() === "")) return v(new n("nonce must be a non-empty string"));
		if (c.allowInvalidAsymmetricKeyTypes !== void 0 && typeof c.allowInvalidAsymmetricKeyTypes != "boolean") return v(new n("allowInvalidAsymmetricKeyTypes must be a boolean"));
		let y = c.clockTimestamp || Math.floor(Date.now() / 1e3);
		if (!e) return v(new n("jwt must be provided"));
		if (typeof e != "string") return v(new n("jwt must be a string"));
		let b = e.split(".");
		if (b.length !== 3) return v(new n("jwt malformed"));
		let x;
		try {
			x = a(e, { complete: !0 });
		} catch (e) {
			return v(e);
		}
		if (!x) return v(new n("invalid token"));
		let S = x.header, C;
		if (typeof t == "function") {
			if (!l) return v(new n("verify must be called asynchronous if secret or public key is provided as a callback"));
			C = t;
		} else C = function(e, n) {
			return n(null, t);
		};
		return C(S, function(t, a) {
			if (t) return v(new n("error in secret or public key callback: " + t.message));
			let l = b[2].trim() !== "";
			if (!l && a) return v(new n("jwt signature is required"));
			if (l && !a) return v(new n("secret or public key must be provided"));
			if (!l && !c.algorithms) return v(new n("please specify \"none\" in \"algorithms\" to verify unsigned tokens"));
			if (a != null && !(a instanceof d)) try {
				a = p(a);
			} catch {
				try {
					a = f(typeof a == "string" ? Buffer.from(a) : a);
				} catch {
					return v(new n("secretOrPublicKey is not valid key material"));
				}
			}
			if (c.algorithms || (a.type === "secret" ? c.algorithms = _ : ["rsa", "rsa-pss"].includes(a.asymmetricKeyType) ? c.algorithms = g : a.asymmetricKeyType === "ec" ? c.algorithms = h : c.algorithms = m), c.algorithms.indexOf(x.header.alg) === -1) return v(new n("invalid algorithm"));
			if (S.alg.startsWith("HS") && a.type !== "secret") return v(new n(`secretOrPublicKey must be a symmetric key when using ${S.alg}`));
			if (/^(?:RS|PS|ES)/.test(S.alg) && a.type !== "public") return v(new n(`secretOrPublicKey must be an asymmetric key when using ${S.alg}`));
			if (!c.allowInvalidAsymmetricKeyTypes) try {
				s(S.alg, a);
			} catch (e) {
				return v(e);
			}
			let C;
			try {
				C = u.verify(e, x.header.alg, a);
			} catch (e) {
				return v(e);
			}
			if (!C) return v(new n("invalid signature"));
			let w = x.payload;
			if (w.nbf !== void 0 && !c.ignoreNotBefore) {
				if (typeof w.nbf != "number") return v(new n("invalid nbf value"));
				if (w.nbf > y + (c.clockTolerance || 0)) return v(new r("jwt not active", /* @__PURE__ */ new Date(w.nbf * 1e3)));
			}
			if (w.exp !== void 0 && !c.ignoreExpiration) {
				if (typeof w.exp != "number") return v(new n("invalid exp value"));
				if (y >= w.exp + (c.clockTolerance || 0)) return v(new i("jwt expired", /* @__PURE__ */ new Date(w.exp * 1e3)));
			}
			if (c.audience) {
				let e = Array.isArray(c.audience) ? c.audience : [c.audience];
				if (!(Array.isArray(w.aud) ? w.aud : [w.aud]).some(function(t) {
					return e.some(function(e) {
						return e instanceof RegExp ? e.test(t) : e === t;
					});
				})) return v(new n("jwt audience invalid. expected: " + e.join(" or ")));
			}
			if (c.issuer && (typeof c.issuer == "string" && w.iss !== c.issuer || Array.isArray(c.issuer) && c.issuer.indexOf(w.iss) === -1)) return v(new n("jwt issuer invalid. expected: " + c.issuer));
			if (c.subject && w.sub !== c.subject) return v(new n("jwt subject invalid. expected: " + c.subject));
			if (c.jwtid && w.jti !== c.jwtid) return v(new n("jwt jwtid invalid. expected: " + c.jwtid));
			if (c.nonce && w.nonce !== c.nonce) return v(new n("jwt nonce invalid. expected: " + c.nonce));
			if (c.maxAge) {
				if (typeof w.iat != "number") return v(new n("iat required when maxAge is specified"));
				let e = o(c.maxAge, w.iat);
				if (e === void 0) return v(new n("\"maxAge\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60"));
				if (y >= e + (c.clockTolerance || 0)) return v(new i("maxAge exceeded", /* @__PURE__ */ new Date(e * 1e3)));
			}
			if (c.complete === !0) {
				let e = x.signature;
				return v(null, {
					header: S,
					payload: w,
					signature: e
				});
			}
			return v(null, w);
		});
	};
})), rs = /* @__PURE__ */ o(((e, t) => {
	var n = Infinity, r = 9007199254740991, i = 17976931348623157e292, a = NaN, o = "[object Arguments]", s = "[object Function]", c = "[object GeneratorFunction]", l = "[object String]", u = "[object Symbol]", d = /^\s+|\s+$/g, f = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, h = /^(?:0|[1-9]\d*)$/, g = parseInt;
	function _(e, t) {
		for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
		return i;
	}
	function v(e, t, n, r) {
		for (var i = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i;) if (t(e[a], a, e)) return a;
		return -1;
	}
	function y(e, t, n) {
		if (t !== t) return v(e, b, n);
		for (var r = n - 1, i = e.length; ++r < i;) if (e[r] === t) return r;
		return -1;
	}
	function b(e) {
		return e !== e;
	}
	function x(e, t) {
		for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
		return r;
	}
	function S(e, t) {
		return _(t, function(t) {
			return e[t];
		});
	}
	function C(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	var w = Object.prototype, T = w.hasOwnProperty, ee = w.toString, E = w.propertyIsEnumerable, te = C(Object.keys, Object), ne = Math.max;
	function re(e, t) {
		var n = se(e) || oe(e) ? x(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || T.call(e, a)) && !(i && (a == "length" || O(a, r))) && n.push(a);
		return n;
	}
	function D(e) {
		if (!ie(e)) return te(e);
		var t = [];
		for (var n in Object(e)) T.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function O(e, t) {
		return t ??= r, !!t && (typeof e == "number" || h.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function ie(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || w);
	}
	function ae(e, t, n, r) {
		e = k(e) ? e : N(e), n = n && !r ? pe(n) : 0;
		var i = e.length;
		return n < 0 && (n = ne(i + n, 0)), fe(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1;
	}
	function oe(e) {
		return A(e) && T.call(e, "callee") && (!E.call(e, "callee") || ee.call(e) == o);
	}
	var se = Array.isArray;
	function k(e) {
		return e != null && le(e.length) && !ce(e);
	}
	function A(e) {
		return de(e) && k(e);
	}
	function ce(e) {
		var t = ue(e) ? ee.call(e) : "";
		return t == s || t == c;
	}
	function le(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function ue(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function de(e) {
		return !!e && typeof e == "object";
	}
	function fe(e) {
		return typeof e == "string" || !se(e) && de(e) && ee.call(e) == l;
	}
	function j(e) {
		return typeof e == "symbol" || de(e) && ee.call(e) == u;
	}
	function M(e) {
		return e ? (e = me(e), e === n || e === -n ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function pe(e) {
		var t = M(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function me(e) {
		if (typeof e == "number") return e;
		if (j(e)) return a;
		if (ue(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = ue(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(d, "");
		var n = p.test(e);
		return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : f.test(e) ? a : +e;
	}
	function he(e) {
		return k(e) ? re(e) : D(e);
	}
	function N(e) {
		return e ? S(e, he(e)) : [];
	}
	t.exports = ae;
})), is = /* @__PURE__ */ o(((e, t) => {
	var n = "[object Boolean]", r = Object.prototype.toString;
	function i(e) {
		return e === !0 || e === !1 || a(e) && r.call(e) == n;
	}
	function a(e) {
		return !!e && typeof e == "object";
	}
	t.exports = i;
})), as = /* @__PURE__ */ o(((e, t) => {
	var n = Infinity, r = 17976931348623157e292, i = NaN, a = "[object Symbol]", o = /^\s+|\s+$/g, s = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, l = /^0o[0-7]+$/i, u = parseInt, d = Object.prototype.toString;
	function f(e) {
		return typeof e == "number" && e == _(e);
	}
	function p(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function m(e) {
		return !!e && typeof e == "object";
	}
	function h(e) {
		return typeof e == "symbol" || m(e) && d.call(e) == a;
	}
	function g(e) {
		return e ? (e = v(e), e === n || e === -n ? (e < 0 ? -1 : 1) * r : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function _(e) {
		var t = g(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function v(e) {
		if (typeof e == "number") return e;
		if (h(e)) return i;
		if (p(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = p(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(o, "");
		var n = c.test(e);
		return n || l.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? i : +e;
	}
	t.exports = f;
})), os = /* @__PURE__ */ o(((e, t) => {
	var n = "[object Number]", r = Object.prototype.toString;
	function i(e) {
		return !!e && typeof e == "object";
	}
	function a(e) {
		return typeof e == "number" || i(e) && r.call(e) == n;
	}
	t.exports = a;
})), ss = /* @__PURE__ */ o(((e, t) => {
	var n = "[object Object]";
	function r(e) {
		var t = !1;
		if (e != null && typeof e.toString != "function") try {
			t = !!(e + "");
		} catch {}
		return t;
	}
	function i(e, t) {
		return function(n) {
			return e(t(n));
		};
	}
	var a = Function.prototype, o = Object.prototype, s = a.toString, c = o.hasOwnProperty, l = s.call(Object), u = o.toString, d = i(Object.getPrototypeOf, Object);
	function f(e) {
		return !!e && typeof e == "object";
	}
	function p(e) {
		if (!f(e) || u.call(e) != n || r(e)) return !1;
		var t = d(e);
		if (t === null) return !0;
		var i = c.call(t, "constructor") && t.constructor;
		return typeof i == "function" && i instanceof i && s.call(i) == l;
	}
	t.exports = p;
})), cs = /* @__PURE__ */ o(((e, t) => {
	var n = "[object String]", r = Object.prototype.toString, i = Array.isArray;
	function a(e) {
		return !!e && typeof e == "object";
	}
	function o(e) {
		return typeof e == "string" || !i(e) && a(e) && r.call(e) == n;
	}
	t.exports = o;
})), ls = /* @__PURE__ */ o(((e, t) => {
	var n = "Expected a function", r = Infinity, i = 17976931348623157e292, a = NaN, o = "[object Symbol]", s = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, u = /^0o[0-7]+$/i, d = parseInt, f = Object.prototype.toString;
	function p(e, t) {
		var r;
		if (typeof t != "function") throw TypeError(n);
		return e = y(e), function() {
			return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = void 0), r;
		};
	}
	function m(e) {
		return p(2, e);
	}
	function h(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function g(e) {
		return !!e && typeof e == "object";
	}
	function _(e) {
		return typeof e == "symbol" || g(e) && f.call(e) == o;
	}
	function v(e) {
		return e ? (e = b(e), e === r || e === -r ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function y(e) {
		var t = v(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function b(e) {
		if (typeof e == "number") return e;
		if (_(e)) return a;
		if (h(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = h(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(s, "");
		var n = l.test(e);
		return n || u.test(e) ? d(e.slice(2), n ? 2 : 8) : c.test(e) ? a : +e;
	}
	t.exports = m;
})), us = /* @__PURE__ */ o(((e, t) => {
	var n = ao(), r = ts(), i = es(), a = $a(), o = rs(), s = is(), c = as(), u = os(), d = ss(), f = cs(), p = ls(), { KeyObject: m, createSecretKey: h, createPrivateKey: g } = l(), _ = [
		"RS256",
		"RS384",
		"RS512",
		"ES256",
		"ES384",
		"ES512",
		"HS256",
		"HS384",
		"HS512",
		"none"
	];
	r && _.splice(3, 0, "PS256", "PS384", "PS512");
	var v = {
		expiresIn: {
			isValid: function(e) {
				return c(e) || f(e) && e;
			},
			message: "\"expiresIn\" should be a number of seconds or string representing a timespan"
		},
		notBefore: {
			isValid: function(e) {
				return c(e) || f(e) && e;
			},
			message: "\"notBefore\" should be a number of seconds or string representing a timespan"
		},
		audience: {
			isValid: function(e) {
				return f(e) || Array.isArray(e);
			},
			message: "\"audience\" must be a string or array"
		},
		algorithm: {
			isValid: o.bind(null, _),
			message: "\"algorithm\" must be a valid string enum value"
		},
		header: {
			isValid: d,
			message: "\"header\" must be an object"
		},
		encoding: {
			isValid: f,
			message: "\"encoding\" must be a string"
		},
		issuer: {
			isValid: f,
			message: "\"issuer\" must be a string"
		},
		subject: {
			isValid: f,
			message: "\"subject\" must be a string"
		},
		jwtid: {
			isValid: f,
			message: "\"jwtid\" must be a string"
		},
		noTimestamp: {
			isValid: s,
			message: "\"noTimestamp\" must be a boolean"
		},
		keyid: {
			isValid: f,
			message: "\"keyid\" must be a string"
		},
		mutatePayload: {
			isValid: s,
			message: "\"mutatePayload\" must be a boolean"
		},
		allowInsecureKeySizes: {
			isValid: s,
			message: "\"allowInsecureKeySizes\" must be a boolean"
		},
		allowInvalidAsymmetricKeyTypes: {
			isValid: s,
			message: "\"allowInvalidAsymmetricKeyTypes\" must be a boolean"
		}
	}, y = {
		iat: {
			isValid: u,
			message: "\"iat\" should be a number of seconds"
		},
		exp: {
			isValid: u,
			message: "\"exp\" should be a number of seconds"
		},
		nbf: {
			isValid: u,
			message: "\"nbf\" should be a number of seconds"
		}
	};
	function b(e, t, n, r) {
		if (!d(n)) throw Error("Expected \"" + r + "\" to be a plain object.");
		Object.keys(n).forEach(function(i) {
			let a = e[i];
			if (!a) {
				if (!t) throw Error("\"" + i + "\" is not allowed in \"" + r + "\"");
				return;
			}
			if (!a.isValid(n[i])) throw Error(a.message);
		});
	}
	function x(e) {
		return b(v, !1, e, "options");
	}
	function S(e) {
		return b(y, !0, e, "payload");
	}
	var C = {
		audience: "aud",
		issuer: "iss",
		subject: "sub",
		jwtid: "jti"
	}, w = [
		"expiresIn",
		"notBefore",
		"noTimestamp",
		"audience",
		"issuer",
		"subject",
		"jwtid"
	];
	t.exports = function(e, t, r, o) {
		typeof r == "function" ? (o = r, r = {}) : r ||= {};
		let s = typeof e == "object" && !Buffer.isBuffer(e), c = Object.assign({
			alg: r.algorithm || "HS256",
			typ: s ? "JWT" : void 0,
			kid: r.keyid
		}, r.header);
		function l(e) {
			if (o) return o(e);
			throw e;
		}
		if (!t && r.algorithm !== "none") return l(/* @__PURE__ */ Error("secretOrPrivateKey must have a value"));
		if (t != null && !(t instanceof m)) try {
			t = g(t);
		} catch {
			try {
				t = h(typeof t == "string" ? Buffer.from(t) : t);
			} catch {
				return l(/* @__PURE__ */ Error("secretOrPrivateKey is not valid key material"));
			}
		}
		if (c.alg.startsWith("HS") && t.type !== "secret") return l(/* @__PURE__ */ Error(`secretOrPrivateKey must be a symmetric key when using ${c.alg}`));
		if (/^(?:RS|PS|ES)/.test(c.alg)) {
			if (t.type !== "private") return l(/* @__PURE__ */ Error(`secretOrPrivateKey must be an asymmetric key when using ${c.alg}`));
			if (!r.allowInsecureKeySizes && !c.alg.startsWith("ES") && t.asymmetricKeyDetails !== void 0 && t.asymmetricKeyDetails.modulusLength < 2048) return l(/* @__PURE__ */ Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${c.alg}`));
		}
		if (e === void 0) return l(/* @__PURE__ */ Error("payload is required"));
		if (s) {
			try {
				S(e);
			} catch (e) {
				return l(e);
			}
			r.mutatePayload || (e = Object.assign({}, e));
		} else {
			let t = w.filter(function(e) {
				return r[e] !== void 0;
			});
			if (t.length > 0) return l(/* @__PURE__ */ Error("invalid " + t.join(",") + " option for " + typeof e + " payload"));
		}
		if (e.exp !== void 0 && r.expiresIn !== void 0) return l(/* @__PURE__ */ Error("Bad \"options.expiresIn\" option the payload already has an \"exp\" property."));
		if (e.nbf !== void 0 && r.notBefore !== void 0) return l(/* @__PURE__ */ Error("Bad \"options.notBefore\" option the payload already has an \"nbf\" property."));
		try {
			x(r);
		} catch (e) {
			return l(e);
		}
		if (!r.allowInvalidAsymmetricKeyTypes) try {
			i(c.alg, t);
		} catch (e) {
			return l(e);
		}
		let u = e.iat || Math.floor(Date.now() / 1e3);
		if (r.noTimestamp ? delete e.iat : s && (e.iat = u), r.notBefore !== void 0) {
			try {
				e.nbf = n(r.notBefore, u);
			} catch (e) {
				return l(e);
			}
			if (e.nbf === void 0) return l(/* @__PURE__ */ Error("\"notBefore\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60"));
		}
		if (r.expiresIn !== void 0 && typeof e == "object") {
			try {
				e.exp = n(r.expiresIn, u);
			} catch (e) {
				return l(e);
			}
			if (e.exp === void 0) return l(/* @__PURE__ */ Error("\"expiresIn\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60"));
		}
		Object.keys(C).forEach(function(t) {
			let n = C[t];
			if (r[t] !== void 0) {
				if (e[n] !== void 0) return l(/* @__PURE__ */ Error("Bad \"options." + t + "\" option. The payload already has an \"" + n + "\" property."));
				e[n] = r[t];
			}
		});
		let d = r.encoding || "utf8";
		if (typeof o == "function") o &&= p(o), a.createSign({
			header: c,
			privateKey: t,
			payload: e,
			encoding: d
		}).once("error", o).once("done", function(e) {
			if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(c.alg) && e.length < 256) return o(/* @__PURE__ */ Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${c.alg}`));
			o(null, e);
		});
		else {
			let n = a.sign({
				header: c,
				payload: e,
				secret: t,
				encoding: d
			});
			if (!r.allowInsecureKeySizes && /^(?:RS|PS)/.test(c.alg) && n.length < 256) throw Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${c.alg}`);
			return n;
		}
	};
}));
//#endregion
//#region ../../node_modules/server-only/index.js
throw (/* @__PURE__ */ o(((e, t) => {
	t.exports = {
		decode: eo(),
		verify: ns(),
		sign: us(),
		JsonWebTokenError: to(),
		NotBeforeError: no(),
		TokenExpiredError: ro()
	};
})))(), process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET, Error("This module cannot be imported from a Client Component module. It should only be used from a Server Component.");
//#endregion
//#region src/lib/setup.ts
async function ds(e, t) {
	let n = await Ba.financialEntity.create({ data: {
		organizationId: e,
		name: `${t} Financials`
	} }), r = [
		{
			code: ms.CASH_IN_BANK,
			name: "Cash in Bank",
			type: Ra.AccountType.ASSET
		},
		{
			code: ms.ACCOUNTS_RECEIVABLE,
			name: "Accounts Receivable",
			type: Ra.AccountType.ASSET
		},
		{
			code: ms.UNDEPOSITED_FUNDS,
			name: "Undeposited Funds",
			type: Ra.AccountType.ASSET
		},
		{
			code: ms.SECURITY_DEPOSITS_LIABILITY,
			name: "Security Deposits Held",
			type: Ra.AccountType.LIABILITY
		},
		{
			code: ms.ACCOUNTS_PAYABLE,
			name: "Accounts Payable",
			type: Ra.AccountType.LIABILITY
		},
		{
			code: ms.PREPAID_RENT,
			name: "Prepaid Rent",
			type: Ra.AccountType.LIABILITY
		},
		{
			code: ms.OWNER_EQUITY,
			name: "Owner Equity",
			type: Ra.AccountType.EQUITY
		},
		{
			code: ms.RENTAL_INCOME,
			name: "Rental Income",
			type: Ra.AccountType.INCOME
		},
		{
			code: ms.UTILITY_RECOVERY_INCOME,
			name: "Utility Recovery",
			type: Ra.AccountType.INCOME
		},
		{
			code: ms.LATE_FEES_INCOME,
			name: "Late Fees Income",
			type: Ra.AccountType.INCOME
		},
		{
			code: ms.MAINTENANCE_INCOME,
			name: "Maintenance Income",
			type: Ra.AccountType.INCOME
		},
		{
			code: ms.MAINTENANCE_EXPENSE,
			name: "Maintenance Expense",
			type: Ra.AccountType.EXPENSE
		},
		{
			code: ms.UTILITY_EXPENSE,
			name: "Utility Cost",
			type: Ra.AccountType.EXPENSE
		},
		{
			code: ms.MANAGEMENT_FEES,
			name: "Management Fees",
			type: Ra.AccountType.EXPENSE
		}
	];
	for (let e of r) await Ba.account.create({ data: {
		entityId: n.id,
		code: e.code,
		name: e.name,
		type: e.type,
		isSystem: !0
	} });
	return n;
}
//#endregion
export { ms as CHART_OF_ACCOUNTS, hs as FinanceActions, fs as JournalService, gs as financeActions, ps as journalService, _s as maintenanceService, ds as setupFinancials, vs as utilityService };
var fs, ps, ms, hs, gs, _s, vs;
