import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./__vite-browser-external-C4yfM1ew.mjs";
import { n as s, t as c } from "./toUtf8.browser-Dfm-xkvi.mjs";
import { jsx as l } from "react/jsx-runtime";
//#region src/lib/dss.module.css
var u = {};
//#endregion
//#region src/lib/dss.tsx
function d() {
	return /* @__PURE__ */ l("div", {
		className: u.container,
		children: /* @__PURE__ */ l("h1", { children: "Welcome to Dss!" })
	});
}
//#endregion
//#region src/lib/types.ts
var f = {
	TENANT: 1,
	LANDLORD: 2,
	PROPERTY_MANAGER: 2,
	AGENT: 2,
	WITNESS: 3,
	NOTARY: 4,
	CUSTODIAN: 2,
	VENDOR: 0,
	OTHER: 0
}, p = /* @__PURE__ */ a(o());
function m(e) {
	let t = p.default.createHash("sha256");
	return t.update(e), t.digest("hex");
}
function h(e, t) {
	return m(e) === t;
}
function g(e) {
	let t = p.default.createHash("sha512");
	return t.update(e), `pq_placeholder_${t.digest("hex").substring(0, 32)}`;
}
function _(e) {
	return console.warn("Zero-knowledge proof generation not yet implemented. Returning placeholder."), {
		proof: `zk_proof_placeholder_${m(e).slice(0, 16)}`,
		publicSignals: [m(e)]
	};
}
function v(e, t) {
	return console.warn("Zero-knowledge proof verification not yet implemented. Returning true for development."), e.startsWith("zk_proof_placeholder_");
}
function y(e) {
	console.warn("computeZkProofPlaceholder is deprecated. Use generateZkProof instead.");
	let { proof: t } = _(e);
	return t;
}
//#endregion
//#region ../../node_modules/@prisma/client/runtime/index-browser.js
var b = /* @__PURE__ */ n(((e, t) => {
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
		Decimal: () => Ft,
		Public: () => f,
		getRuntime: () => ce,
		makeStrictEnum: () => te,
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
	function te(e) {
		return new Proxy(e, { get(e, t) {
			if (t in e) return e[t];
			if (!ee.has(t)) throw TypeError(`Invalid enum value: ${String(t)}`);
		} });
	}
	var ne = () => {
		var e, t;
		return globalThis.process?.release?.name === "node";
	}, re = () => {
		var e, t;
		return !!globalThis.Bun || !!((t = globalThis.process?.versions) != null && t.bun);
	}, ie = () => !!globalThis.Deno, E = () => typeof globalThis.Netlify == "object", D = () => typeof globalThis.EdgeRuntime == "object", ae = () => {
		var e;
		return globalThis.navigator?.userAgent === "Cloudflare-Workers";
	};
	function oe() {
		var e;
		return [
			[E, "netlify"],
			[D, "edge-light"],
			[ae, "workerd"],
			[ie, "deno"],
			[re, "bun"],
			[ne, "node"]
		].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
	}
	var se = {
		node: "Node.js",
		workerd: "Cloudflare Workers",
		deno: "Deno and Deno Deploy",
		netlify: "Netlify Edge Functions",
		"edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
	};
	function ce() {
		let e = oe();
		return {
			id: e,
			prettyName: se[e] || e,
			isEdge: [
				"workerd",
				"deno",
				"netlify",
				"edge-light"
			].includes(e)
		};
	}
	var le = 9e15, ue = 1e9, O = "0123456789abcdef", k = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", de = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", fe = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -le,
		maxE: le,
		crypto: !1
	}, pe, me, A = !0, he = "[DecimalError] ", j = he + "Invalid argument: ", ge = he + "Precision limit exceeded", _e = he + "crypto unavailable", M = "[object Decimal]", N = Math.floor, P = Math.pow, ve = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ye = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, be = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, xe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Se = 1e7, F = 7, Ce = 9007199254740991, I = k.length - 1, we = de.length - 1, L = { toStringTag: M };
	L.absoluteValue = L.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), V(e);
	}, L.ceil = function() {
		return V(new this.constructor(this), this.e + 1, 2);
	}, L.clampedTo = L.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(j + t);
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
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + F, r.rounding = 1, n = De(r, We(r, n)), r.precision = e, r.rounding = t, V(me == 2 || me == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, L.cubeRoot = L.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (A = !1, a = u.s * P(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = R(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = P(n, 1 / 3), e = N((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = B(l.plus(u).times(s), l.plus(c), o + 2, 1), R(s.d).slice(0, o) === (n = R(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (V(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (V(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return A = !0, V(r, e, d.rounding, t);
	}, L.decimalPlaces = L.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - N(this.e / F)) * F, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
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
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Ue(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = He(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return V(a, o.precision = n, o.rounding = r, !0);
	}, L.hyperbolicSine = L.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = He(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / Ue(5, e)), i = He(a, 2, i, i, !0);
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
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, A = !1, n = n.times(n).minus(1).sqrt().plus(n), A = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, L.inverseHyperbolicSine = L.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, A = !1, n = n.times(n).plus(1).sqrt().plus(n), A = !0, r.precision = e, r.rounding = t, n.ln());
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
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / F + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (A = !1, t = Math.ceil(s / F), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), A = !0, V(o, u.precision = d, u.rounding = f, !0);
	}, L.isFinite = function() {
		return !!this.d;
	}, L.isInteger = L.isInt = function() {
		return !!this.d && N(this.e / F) > this.d.length - 2;
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
		if (A = !1, s = d + p, o = Le(l, s), r = t ? Ae(u, s + 10) : Le(e, s), c = B(o, r, s, 1), Te(c.d, i = d, f)) do
			if (s += 10, o = Le(l, s), r = t ? Ae(u, s + 10) : Le(e, s), c = B(o, r, s, 1), !a) {
				+R(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = V(c, d + 1, 0));
				break;
			}
		while (Te(c.d, i += 10, f));
		return A = !0, V(c, d, f);
	}, L.minus = L.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return A ? V(e, s, c) : e;
		}
		if (n = N(e.e / F), u = N(p.e / F), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / F), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = Se - 1;
				--l[i], l[r] += Se;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = ke(l, n), A ? V(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, L.modulo = L.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? V(new r(n), r.precision, r.rounding) : (A = !1, r.modulo == 9 ? (t = B(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = B(n, e, 0, r.modulo, 1), t = t.times(e), A = !0, n.minus(t));
	}, L.naturalExponential = L.exp = function() {
		return Ie(this);
	}, L.naturalLogarithm = L.ln = function() {
		return Le(this);
	}, L.negated = L.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, V(e);
	}, L.plus = L.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), A ? V(e, s, c) : e;
		if (a = N(d.e / F), r = N(e.e / F), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / F), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / Se | 0, l[i] %= Se;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = ke(l, r), A ? V(e, s, c) : e;
	}, L.precision = L.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(j + e);
		return n.d ? (t = Me(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, L.round = function() {
		var e = this, t = e.constructor;
		return V(new t(e), e.e + 1, t.rounding);
	}, L.sine = L.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + F, r.rounding = 1, n = Ve(r, We(r, n)), r.precision = e, r.rounding = t, V(me > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, L.squareRoot = L.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (A = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = R(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = N((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(B(o, a, n + 2, 1)).times(.5), R(a.d).slice(0, n) === (t = R(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (V(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (V(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return A = !0, V(r, c, u.rounding, e);
	}, L.tangent = L.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = B(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, V(me == 2 || me == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, L.times = L.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = N(u.e / F) + N(e.e / F), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % Se | 0, t = s / Se | 0;
			a[i] = (a[i] + t) % Se | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = ke(a, n), A ? V(e, d.precision, d.rounding) : e;
	}, L.toBinary = function(e, t) {
		return Ge(this, 2, e, t);
	}, L.toDecimalPlaces = L.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (z(e, 0, ue), t === void 0 ? t = r.rounding : z(t, 0, 8), V(n, e + n.e + 1, t));
	}, L.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Oe(r, !0) : (z(e, 0, ue), t === void 0 ? t = i.rounding : z(t, 0, 8), r = V(new i(r), e + 1, t), n = Oe(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, L.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = Oe(i) : (z(e, 0, ue), t === void 0 ? t = a.rounding : z(t, 0, 8), r = V(new a(i), e + i.e + 1, t), n = Oe(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, L.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Me(m) - p.e - 1, o = a % F, t.d[0] = P(10, o < 0 ? F + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(j + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (A = !1, s = new h(R(m)), u = h.precision, h.precision = a = m.length * F * 2; d = B(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = B(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = B(l, r, a, 1).minus(p).abs().cmp(B(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, A = !0, f;
	}, L.toHexadecimal = L.toHex = function(e, t) {
		return Ge(this, 16, e, t);
	}, L.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : z(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (A = !1, n = B(n, e, 0, t, 1).times(e), A = !0, V(n)) : (e.s = n.s, n = e), n;
	}, L.toNumber = function() {
		return +this;
	}, L.toOctal = function(e, t) {
		return Ge(this, 8, e, t);
	}, L.toPower = L.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(P(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return V(s, r, a);
		if (t = N(e.e / F), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= Ce) return i = Ne(c, s, n, r), e.s < 0 ? new c(1).div(i) : V(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = P(+s, l), t = n == 0 || !isFinite(n) ? N(l * (Math.log("0." + R(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (A = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Ie(e.times(Le(s, r + n)), r), i.d && (i = V(i, r + 5, 1), Te(i.d, r, a) && (t = r + 10, i = V(Ie(e.times(Le(s, t + n)), t), t + 5, 1), +R(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = V(i, r + 1, 0)))), i.s = o, A = !0, c.rounding = a, V(i, r, a));
	}, L.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Oe(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (z(e, 1, ue), t === void 0 ? t = i.rounding : z(t, 0, 8), r = V(new i(r), e, t), n = Oe(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, L.toSignificantDigits = L.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (z(e, 1, ue), t === void 0 ? t = r.rounding : z(t, 0, 8)), V(new r(n), e, t);
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
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = F - r.length, n && (a += H(n)), a += r;
			o = e[t], r = o + "", n = F - r.length, n && (a += H(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function z(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(j + e);
	}
	function Te(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += F, i = 0) : (i = Math.ceil((t + 1) / F), t %= F), a = P(10, F - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == P(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == P(10, t - 3) - 1, o;
	}
	function Ee(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += O.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function De(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Ue(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = He(e, 1, t.times(i), new e(1));
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
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, ee, te, ne, re = r.constructor, ie = r.s == i.s ? 1 : -1, E = r.d, D = i.d;
			if (!E || !E[0] || !D || !D[0]) return new re(!r.s || !i.s || (E ? D && E[0] == D[0] : !D) ? NaN : E && E[0] == 0 || !D ? ie * 0 : ie / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = Se, p = F, u = N(r.e / p) - N(i.e / p)), te = D.length, T = E.length, _ = new re(ie), v = _.d = [], d = 0; D[d] == (E[d] || 0); d++);
			if (D[d] > (E[d] || 0) && u--, a == null ? (S = a = re.precision, o = re.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, te == 1) {
					for (f = 0, D = D[0], S++; (d < T || f) && S--; d++) C = f * c + (E[d] || 0), v[d] = C / D | 0, f = C % D | 0;
					m = f || d < T;
				} else {
					for (f = c / (D[0] + 1) | 0, f > 1 && (D = e(D, f, c), E = e(E, f, c), te = D.length, T = E.length), w = te, y = E.slice(0, te), b = y.length; b < te;) y[b++] = 0;
					ne = D.slice(), ne.unshift(0), ee = D[0], D[1] >= c / 2 && ++ee;
					do
						f = 0, l = t(D, y, te, b), l < 0 ? (x = y[0], te != b && (x = x * c + (y[1] || 0)), f = x / ee | 0, f > 1 ? (f >= c && (f = c - 1), h = e(D, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, te < g ? ne : D, g, c))) : (f == 0 && (l = f = 1), h = D.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(D, y, te, b), l < 1 && (f++, n(y, te < b ? ne : D, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = E[w] || 0 : (y = [E[w]], b = 1);
					while ((w++ < T || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, pe = m;
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
			if (a = t - i, a < 0) a += F, o = t, u = d[f = 0], c = u / P(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / F), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= F, o = a - F + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= F, o = a - F + i, c = o < 0 ? 0 : u / P(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % P(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / P(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = P(10, (F - t % F) % F), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = P(10, F - a), d[f] = o > 0 ? (u / P(10, i - o) % P(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == Se && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != Se) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return A && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function Oe(e, t, n) {
		if (!e.isFinite()) return Re(e);
		var r, i = e.e, a = R(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + H(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + H(-i - 1) + a, n && (r = n - o) > 0 && (a += H(r))) : i >= o ? (a += H(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + H(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += H(r))), a;
	}
	function ke(e, t) {
		var n = e[0];
		for (t *= F; n >= 10; n /= 10) t++;
		return t;
	}
	function Ae(e, t, n) {
		if (t > I) throw A = !0, n && (e.precision = n), Error(ge);
		return V(new e(k), t, 1, !0);
	}
	function je(e, t, n) {
		if (t > we) throw Error(ge);
		return V(new e(de), t, n, !0);
	}
	function Me(e) {
		var t = e.length - 1, n = t * F + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function H(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function Ne(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / F + 4);
		for (A = !1;;) {
			if (n % 2 && (a = a.times(t), Ke(a.d, o) && (i = !0)), n = N(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), Ke(t.d, o);
		}
		return A = !0, a;
	}
	function Pe(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function Fe(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Ie(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (A = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(P(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = V(a.times(e), c, 1), n = n.times(++u), s = o.plus(B(a, n, c, 1)), R(s.d).slice(0, c) === R(o.d).slice(0, c)) {
				for (i = d; i--;) o = V(o.times(o), c, 1);
				if (t == null) if (l < 3 && Te(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return V(o, f.precision = m, p, A = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function Le(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (A = !1, u = y) : u = t, _.precision = u += m, n = R(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = R(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Ae(_, u + 2, y).times(a + ""), h = Le(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? V(h, y, v, A = !0) : h;
		for (d = h, c = o = h = B(h.minus(1), h.plus(1), u, 1), f = V(h.times(h), u, 1), i = 3;;) {
			if (o = V(o.times(f), u, 1), l = c.plus(B(o, new _(i), u, 1)), R(l.d).slice(0, u) === R(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Ae(_, u + 2, y).times(a + ""))), c = B(c, new _(p), u, 1), t == null) if (Te(c.d, u - m, v, s)) _.precision = u += m, l = o = h = B(d.minus(1), d.plus(1), u, 1), f = V(h.times(h), u, 1), i = s = 1;
			else return V(c, _.precision = y, v, A = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function Re(e) {
		return String(e.s * e.s / 0);
	}
	function ze(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % F, n < 0 && (r += F), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= F; r < i;) e.d.push(+t.slice(r, r += F));
				t = t.slice(r), r = F - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), A && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function Be(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), xe.test(t)) return ze(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (ye.test(t)) n = 16, t = t.toLowerCase();
		else if (ve.test(t)) n = 2;
		else if (be.test(t)) n = 8;
		else throw Error(j + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Ne(r, new r(n), a, a * 2)), l = Ee(t, n, Se), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = ke(l, u), e.d = l, A = !1, o && (e = B(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? P(2, c) : Pt.pow(2, c))), A = !0, e);
	}
	function Ve(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : He(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Ue(5, n)), t = He(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function He(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / F);
		for (A = !1, c = n.times(n), s = new e(r);;) {
			if (o = B(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = B(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return A = !0, o.d.length = d + 1, o;
	}
	function Ue(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function We(e, t) {
		var n, r = t.s < 0, i = je(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return me = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) me = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return me = Pe(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			me = Pe(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Ge(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (z(n, 1, ue), r === void 0 ? r = p.rounding : z(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = Re(e);
		else {
			for (u = Oe(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = Ee(Oe(f), 10, i), f.e = f.d.length), d = Ee(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = B(e, f, n, r, 0, i), d = e.d, a = e.e, l = pe), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += O.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = Ee(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += O.charAt(d[o]);
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
	function Ke(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function qe(e) {
		return new this(e).abs();
	}
	function Je(e) {
		return new this(e).acos();
	}
	function Ye(e) {
		return new this(e).acosh();
	}
	function Xe(e, t) {
		return new this(e).plus(t);
	}
	function Ze(e) {
		return new this(e).asin();
	}
	function Qe(e) {
		return new this(e).asinh();
	}
	function $e(e) {
		return new this(e).atan();
	}
	function et(e) {
		return new this(e).atanh();
	}
	function tt(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = je(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? je(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = je(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(B(e, t, a, 1)), t = je(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(B(e, t, a, 1)), n;
	}
	function nt(e) {
		return new this(e).cbrt();
	}
	function rt(e) {
		return V(e = new this(e), e.e + 1, 2);
	}
	function it(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function at(e) {
		if (!e || typeof e != "object") throw Error(he + "Object expected");
		var t, n, r, i = e.defaults === !0, a = [
			"precision",
			1,
			ue,
			"rounding",
			0,
			8,
			"toExpNeg",
			-le,
			0,
			"toExpPos",
			0,
			le,
			"maxE",
			0,
			le,
			"minE",
			-le,
			0,
			"modulo",
			0,
			9
		];
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = fe[n]), (r = e[n]) !== void 0) if (N(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(j + n + ": " + r);
		if (n = "crypto", i && (this[n] = fe[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(_e);
		else this[n] = !1;
		else throw Error(j + n + ": " + r);
		return this;
	}
	function ot(e) {
		return new this(e).cos();
	}
	function st(e) {
		return new this(e).cosh();
	}
	function ct(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, pt(e)) {
				a.s = e.s, A ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					A ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return ze(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), xe.test(e) ? ze(a, e) : Be(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, ze(a, e.toString());
			throw Error(j + e);
		}
		if (i.prototype = L, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = at, i.clone = ct, i.isDecimal = pt, i.abs = qe, i.acos = Je, i.acosh = Ye, i.add = Xe, i.asin = Ze, i.asinh = Qe, i.atan = $e, i.atanh = et, i.atan2 = tt, i.cbrt = nt, i.ceil = rt, i.clamp = it, i.cos = ot, i.cosh = st, i.div = lt, i.exp = ut, i.floor = dt, i.hypot = ft, i.ln = mt, i.log = ht, i.log10 = _t, i.log2 = gt, i.max = vt, i.min = yt, i.mod = bt, i.mul = xt, i.pow = St, i.random = Ct, i.round = wt, i.sign = Tt, i.sin = Et, i.sinh = Dt, i.sqrt = Ot, i.sub = kt, i.sum = At, i.tan = jt, i.tanh = Mt, i.trunc = Nt, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
	function lt(e, t) {
		return new this(e).div(t);
	}
	function ut(e) {
		return new this(e).exp();
	}
	function dt(e) {
		return V(e = new this(e), e.e + 1, 3);
	}
	function ft() {
		var e, t, n = new this(0);
		for (A = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return A = !0, new this(Infinity);
			n = t;
		}
		return A = !0, n.sqrt();
	}
	function pt(e) {
		return e instanceof Pt || e && e.toStringTag === M || !1;
	}
	function mt(e) {
		return new this(e).ln();
	}
	function ht(e, t) {
		return new this(e).log(t);
	}
	function gt(e) {
		return new this(e).log(2);
	}
	function _t(e) {
		return new this(e).log(10);
	}
	function vt() {
		return Fe(this, arguments, -1);
	}
	function yt() {
		return Fe(this, arguments, 1);
	}
	function bt(e, t) {
		return new this(e).mod(t);
	}
	function xt(e, t) {
		return new this(e).mul(t);
	}
	function St(e, t) {
		return new this(e).pow(t);
	}
	function Ct(e) {
		var t, n, r, i, a = 0, o = new this(1), s = [];
		if (e === void 0 ? e = this.precision : z(e, 1, ue), r = Math.ceil(e / F), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(_e);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= F, r && e && (i = P(10, F - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= F) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < F && (n -= F - r);
		}
		return o.e = n, o.d = s, o;
	}
	function wt(e) {
		return V(e = new this(e), e.e + 1, this.rounding);
	}
	function Tt(e) {
		return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
	}
	function Et(e) {
		return new this(e).sin();
	}
	function Dt(e) {
		return new this(e).sinh();
	}
	function Ot(e) {
		return new this(e).sqrt();
	}
	function kt(e, t) {
		return new this(e).sub(t);
	}
	function At() {
		var e = 0, t = arguments, n = new this(t[e]);
		for (A = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return A = !0, V(n, this.precision, this.rounding);
	}
	function jt(e) {
		return new this(e).tan();
	}
	function Mt(e) {
		return new this(e).tanh();
	}
	function Nt(e) {
		return V(e = new this(e), e.e + 1, 1);
	}
	L[Symbol.for("nodejs.util.inspect.custom")] = L.toString, L[Symbol.toStringTag] = "Decimal";
	var Pt = L.constructor = ct(fe);
	k = new Pt(k), de = new Pt(de);
	var Ft = Pt;
})), x = /* @__PURE__ */ n(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var { Decimal: t, objectEnumValues: n, makeStrictEnum: r, Public: i, getRuntime: a, skip: o } = b(), s = {};
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
})), S = /* @__PURE__ */ n(((e, t) => {
	t.exports = x();
})), C = S();
BigInt.prototype.toJSON = function() {
	return this.toString();
};
var w = globalThis, T = w.prisma ?? new C.PrismaClient({ log: process.env.NODE_ENV === "development" ? [
	"query",
	"error",
	"warn"
] : ["error"] });
process.env.NODE_ENV !== "production" && (w.prisma = T);
//#endregion
//#region ../../node_modules/base64-js/index.js
var ee = /* @__PURE__ */ n(((e) => {
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
})), te = /* @__PURE__ */ n(((e) => {
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
})), ne = /* @__PURE__ */ n(((e) => {
	var t = ee(), n = te(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (e.length !== void 0) return typeof e.length != "number" || we(e.length) ? o(0) : p(e);
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
			case "utf-8": return be(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return F(e).length;
			default:
				if (i) return r ? -1 : be(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = y;
	function b(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return le(this, t, n);
			case "utf8":
			case "utf-8": return D(this, t, n);
			case "ascii": return se(this, t, n);
			case "latin1":
			case "binary": return ce(this, t, n);
			case "base64": return E(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ue(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? D(this, 0, e) : b.apply(this, arguments);
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
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, we(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (we(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Ce(be(t, e.length - n), e, n, r);
	}
	function ne(e, t, n, r) {
		return Ce(xe(t), e, n, r);
	}
	function re(e, t, n, r) {
		return Ce(F(t), e, n, r);
	}
	function ie(e, t, n, r) {
		return Ce(Se(t, e.length - n), e, n, r);
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
			case "binary": return ne(this, e, t, n);
			case "base64": return re(this, e, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return ie(this, e, t, n);
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
	function E(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function D(e, t, n) {
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
		return oe(r);
	}
	var ae = 4096;
	function oe(e) {
		let t = e.length;
		if (t <= ae) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += ae));
		return n;
	}
	function se(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i] & 127);
		return r;
	}
	function ce(e, t, n) {
		let r = "";
		n = Math.min(e.length, n);
		for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
		return r;
	}
	function le(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += L[e[r]];
		return i;
	}
	function ue(e, t, n) {
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
	function O(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || O(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || O(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || O(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = R(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && P(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = R(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && P(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || O(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || O(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || O(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || O(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || O(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = R(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && P(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = R(function(e) {
		e >>>= 0, N(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && P(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || O(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || O(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function k(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			k(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			k(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function de(e, t, n, r, i) {
		M(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function fe(e, t, n, r, i) {
		M(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = R(function(e, t = 0) {
		return de(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = R(function(e, t = 0) {
		return fe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			k(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			k(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || k(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = R(function(e, t = 0) {
		return de(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = R(function(e, t = 0) {
		return fe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function pe(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function me(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || pe(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return me(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return me(this, e, t, !1, n);
	};
	function A(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || pe(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return A(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return A(this, e, t, !1, n);
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
	var he = {};
	function j(e, t, n) {
		he[e] = class extends n {
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
	j("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), j("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), j("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = ge(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = ge(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function ge(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function _e(e, t, n) {
		N(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && P(t, e.length - (n + 1));
	}
	function M(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new he.ERR_OUT_OF_RANGE("value", i, e);
		}
		_e(r, i, a);
	}
	function N(e, t) {
		if (typeof e != "number") throw new he.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function P(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new he.ERR_BUFFER_OUT_OF_BOUNDS() : new he.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (N(e, n), new he.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var ve = /[^+/0-9A-Za-z-_]/g;
	function ye(e) {
		if (e = e.split("=")[0], e = e.trim().replace(ve, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function be(e, t) {
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
	function xe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function Se(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function F(e) {
		return t.toByteArray(ye(e));
	}
	function Ce(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function I(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function we(e) {
		return e !== e;
	}
	var L = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function R(e) {
		return typeof BigInt > "u" ? z : e;
	}
	function z() {
		throw Error("BigInt not supported");
	}
})), re = /* @__PURE__ */ n(((e, t) => {
	var n = ne(), r = n.Buffer;
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
})), ie = /* @__PURE__ */ n(((e, t) => {
	var n = re().Buffer, r = o(), i = o();
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
})), E = /* @__PURE__ */ n(((e, t) => {
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
})), D = /* @__PURE__ */ n(((e, t) => {
	var n = re().Buffer, r = E(), i = 128, a = 0, o = 32, s = 16, c = 2, l = s | o | a << 6, u = c | a << 6;
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
})), ae = /* @__PURE__ */ n(((e, t) => {
	var n = ne().Buffer, r = ne().SlowBuffer;
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
})), oe = /* @__PURE__ */ n(((e, t) => {
	var n = re().Buffer, r = o(), i = D(), a = o(), s = "\"%s\" is not a valid algorithm.\n  Supported algorithms are:\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".", c = "secret must be a string or buffer", l = "key must be a string or a buffer", u = "key must be a string, a buffer or an object", d = typeof r.createPublicKey == "function";
	d && (l += " or a KeyObject", c += "or a KeyObject");
	function f(e) {
		if (!n.isBuffer(e) && typeof e != "string" && (!d || typeof e != "object" || typeof e.type != "string" || typeof e.asymmetricKeyType != "string" || typeof e.export != "function")) throw _(l);
	}
	function p(e) {
		if (!n.isBuffer(e) && typeof e != "string" && typeof e != "object") throw _(u);
	}
	function m(e) {
		if (!n.isBuffer(e)) {
			if (typeof e == "string") return e;
			if (!d || typeof e != "object" || e.type !== "secret" || typeof e.export != "function") throw _(c);
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
		return x ||= ae(), x(e, t);
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
	function te(e) {
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
	function ne(e) {
		var t = w(e);
		return function() {
			var n = t.apply(null, arguments);
			return n = i.derToJose(n, "ES" + e), n;
		};
	}
	function ie(e) {
		var t = T(e);
		return function(n, r, a) {
			return r = i.joseToDer(r, "ES" + e).toString("base64"), t(n, r, a);
		};
	}
	function E() {
		return function() {
			return "";
		};
	}
	function oe() {
		return function(e, t) {
			return t === "";
		};
	}
	t.exports = function(e) {
		var t = {
			hs: b,
			rs: w,
			ps: ee,
			es: ne,
			none: E
		}, n = {
			hs: C,
			rs: T,
			ps: te,
			es: ie,
			none: oe
		}, r = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
		if (!r) throw _(s, e);
		var i = (r[1] || r[3]).toLowerCase(), a = r[2];
		return {
			sign: t[i](a),
			verify: n[i](a)
		};
	};
})), se = /* @__PURE__ */ n(((e, t) => {
	var n = ne().Buffer;
	t.exports = function(e) {
		return typeof e == "string" ? e : typeof e == "number" || n.isBuffer(e) ? e.toString() : JSON.stringify(e);
	};
})), ce = /* @__PURE__ */ n(((e, t) => {
	var n = re().Buffer, r = ie(), i = oe(), a = o(), s = se(), c = o();
	function l(e, t) {
		return n.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function u(e, t, n) {
		n ||= "utf8";
		var r = l(s(e), "binary"), i = l(s(t), n);
		return c.format("%s.%s", r, i);
	}
	function d(e) {
		var t = e.header, n = e.payload, r = e.secret || e.privateKey, a = e.encoding, o = i(t.alg), s = u(t, n, a), l = o.sign(s, r);
		return c.format("%s.%s", s, l);
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
	c.inherits(f, a), f.prototype.sign = function() {
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
})), le = /* @__PURE__ */ n(((e, t) => {
	var n = re().Buffer, r = ie(), i = oe(), a = o(), s = se(), c = o(), l = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
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
		return l.test(e) && !!f(e);
	}
	function _(e, t, n) {
		if (!t) {
			var r = /* @__PURE__ */ Error("Missing algorithm parameter for jws.verify");
			throw r.code = "MISSING_ALGORITHM", r;
		}
		e = s(e);
		var a = m(e), o = p(e);
		return i(t).verify(o, a, n);
	}
	function v(e, t) {
		if (t ||= {}, e = s(e), !g(e)) return null;
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
	c.inherits(y, a), y.prototype.verify = function() {
		try {
			var e = _(this.signature.buffer, this.algorithm, this.key.buffer), t = v(this.signature.buffer, this.encoding);
			return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, y.decode = v, y.isValid = g, y.verify = _, t.exports = y;
})), ue = /* @__PURE__ */ n(((e) => {
	var t = ce(), n = le();
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
})), O = /* @__PURE__ */ n(((e, t) => {
	var n = ue();
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
})), k = /* @__PURE__ */ n(((e, t) => {
	var n = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
	};
	n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
})), de = /* @__PURE__ */ n(((e, t) => {
	var n = k(), r = function(e, t) {
		n.call(this, e), this.name = "NotBeforeError", this.date = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), fe = /* @__PURE__ */ n(((e, t) => {
	var n = k(), r = function(e, t) {
		n.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), pe = /* @__PURE__ */ n(((e, t) => {
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
})), me = /* @__PURE__ */ n(((e, t) => {
	var n = pe();
	t.exports = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if (typeof e == "string") {
			var i = n(e);
			return i === void 0 ? void 0 : Math.floor(r + i / 1e3);
		} else if (typeof e == "number") return r + e;
		else return;
	};
})), A = /* @__PURE__ */ n(((e, t) => {
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
})), he = /* @__PURE__ */ n(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), j = /* @__PURE__ */ n(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = A(), a = he();
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
})), ge = /* @__PURE__ */ n(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), _e = /* @__PURE__ */ n(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), M = /* @__PURE__ */ n(((e, t) => {
	var n = he(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = A(), { safeRe: a, t: o } = j(), s = ge(), { compareIdentifiers: c } = _e();
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
})), N = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), P = /* @__PURE__ */ n(((e, t) => {
	var n = N();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), ve = /* @__PURE__ */ n(((e, t) => {
	var n = N();
	t.exports = (e, t) => {
		let r = n(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
})), ye = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t, r, i, a) => {
		typeof r == "string" && (a = i, i = r, r = void 0);
		try {
			return new n(e instanceof n ? e.version : e, r).inc(t, i, a).version;
		} catch {
			return null;
		}
	};
})), be = /* @__PURE__ */ n(((e, t) => {
	var n = N();
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
})), xe = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t) => new n(e, t).major;
})), Se = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t) => new n(e, t).minor;
})), F = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t) => new n(e, t).patch;
})), Ce = /* @__PURE__ */ n(((e, t) => {
	var n = N();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
})), I = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), we = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(t, e, r);
})), L = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t) => n(e, t, !0);
})), R = /* @__PURE__ */ n(((e, t) => {
	var n = M();
	t.exports = (e, t, r) => {
		let i = new n(e, r), a = new n(t, r);
		return i.compare(a) || i.compareBuild(a);
	};
})), z = /* @__PURE__ */ n(((e, t) => {
	var n = R();
	t.exports = (e, t) => e.sort((e, r) => n(e, r, t));
})), Te = /* @__PURE__ */ n(((e, t) => {
	var n = R();
	t.exports = (e, t) => e.sort((e, r) => n(r, e, t));
})), Ee = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), De = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), B = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), V = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), Oe = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), ke = /* @__PURE__ */ n(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), Ae = /* @__PURE__ */ n(((e, t) => {
	var n = B(), r = V(), i = Ee(), a = Oe(), o = De(), s = ke();
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
})), je = /* @__PURE__ */ n(((e, t) => {
	var n = M(), r = N(), { safeRe: i, t: a } = j();
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
})), Me = /* @__PURE__ */ n(((e, t) => {
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
})), H = /* @__PURE__ */ n(((e, t) => {
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
			e = e.replace(s, ne(this.options.includePrerelease)), o("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], u), o("comparator trim", e), e = e.replace(c[l.TILDETRIM], d), o("tilde trim", e), e = e.replace(c[l.CARETTRIM], f), o("caret trim", e);
			let g = e.split(" ").map((e) => v(e, this.options)).join(" ").split(/\s+/).map((e) => te(e, this.options));
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
			for (let t = 0; t < this.set.length; t++) if (re(this.set[t], e, this.options)) return !0;
			return !1;
		}
	};
	var r = new (Me())(), i = ge(), a = Ne(), o = he(), s = M(), { safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: d, caretTrimReplace: f } = j(), { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = A(), h = (e) => e.value === "<0.0.0-0", g = (e) => e.value === "", _ = (e, t) => {
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
	}, ee = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[l.STAR], "")), te = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")), ne = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = y(r) ? "" : y(i) ? `>=${r}.0.0${e ? "-0" : ""}` : y(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = y(l) ? "" : y(u) ? `<${+l + 1}.0.0-0` : y(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), re = (e, t, n) => {
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
})), Ne = /* @__PURE__ */ n(((e, t) => {
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
	var r = ge(), { safeRe: i, t: a } = j(), o = Ae(), s = he(), c = M(), l = H();
})), Pe = /* @__PURE__ */ n(((e, t) => {
	var n = H();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), Fe = /* @__PURE__ */ n(((e, t) => {
	var n = H();
	t.exports = (e, t) => new n(e, t).set.map((e) => e.map((e) => e.value).join(" ").trim().split(" "));
})), Ie = /* @__PURE__ */ n(((e, t) => {
	var n = M(), r = H();
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
})), Le = /* @__PURE__ */ n(((e, t) => {
	var n = M(), r = H();
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
})), Re = /* @__PURE__ */ n(((e, t) => {
	var n = M(), r = H(), i = Ee();
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
})), ze = /* @__PURE__ */ n(((e, t) => {
	var n = H();
	t.exports = (e, t) => {
		try {
			return new n(e, t).range || "*";
		} catch {
			return null;
		}
	};
})), Be = /* @__PURE__ */ n(((e, t) => {
	var n = M(), r = Ne(), { ANY: i } = r, a = H(), o = Pe(), s = Ee(), c = De(), l = ke(), u = Oe();
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
})), Ve = /* @__PURE__ */ n(((e, t) => {
	var n = Be();
	t.exports = (e, t, r) => n(e, t, ">", r);
})), He = /* @__PURE__ */ n(((e, t) => {
	var n = Be();
	t.exports = (e, t, r) => n(e, t, "<", r);
})), Ue = /* @__PURE__ */ n(((e, t) => {
	var n = H();
	t.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
})), We = /* @__PURE__ */ n(((e, t) => {
	var n = Pe(), r = I();
	t.exports = (e, t, i) => {
		let a = [], o = null, s = null, c = e.sort((e, t) => r(e, t, i));
		for (let e of c) n(e, t, i) ? (s = e, o ||= e) : (s && a.push([o, s]), s = null, o = null);
		o && a.push([o, null]);
		let l = [];
		for (let [e, t] of a) e === t ? l.push(e) : !t && e === c[0] ? l.push("*") : t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`);
		let u = l.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
		return u.length < d.length ? u : t;
	};
})), Ge = /* @__PURE__ */ n(((e, t) => {
	var n = H(), r = Ne(), { ANY: i } = r, a = Pe(), o = I(), s = (e, t, r = {}) => {
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
})), Ke = /* @__PURE__ */ n(((e, t) => {
	var n = j(), r = A(), i = M(), a = _e();
	t.exports = {
		parse: N(),
		valid: P(),
		clean: ve(),
		inc: ye(),
		diff: be(),
		major: xe(),
		minor: Se(),
		patch: F(),
		prerelease: Ce(),
		compare: I(),
		rcompare: we(),
		compareLoose: L(),
		compareBuild: R(),
		sort: z(),
		rsort: Te(),
		gt: Ee(),
		lt: De(),
		eq: B(),
		neq: V(),
		gte: Oe(),
		lte: ke(),
		cmp: Ae(),
		coerce: je(),
		Comparator: Ne(),
		Range: H(),
		satisfies: Pe(),
		toComparators: Fe(),
		maxSatisfying: Ie(),
		minSatisfying: Le(),
		minVersion: Re(),
		validRange: ze(),
		outside: Be(),
		gtr: Ve(),
		ltr: He(),
		intersects: Ue(),
		simplifyRange: We(),
		subset: Ge(),
		SemVer: i,
		re: n.re,
		src: n.src,
		tokens: n.t,
		SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
		RELEASE_TYPES: r.RELEASE_TYPES,
		compareIdentifiers: a.compareIdentifiers,
		rcompareIdentifiers: a.rcompareIdentifiers
	};
})), qe = /* @__PURE__ */ n(((e, t) => {
	t.exports = Ke().satisfies(process.version, ">=15.7.0");
})), Je = /* @__PURE__ */ n(((e, t) => {
	t.exports = Ke().satisfies(process.version, ">=16.9.0");
})), Ye = /* @__PURE__ */ n(((e, t) => {
	var n = qe(), r = Je(), i = {
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
})), Xe = /* @__PURE__ */ n(((e, t) => {
	t.exports = Ke().satisfies(process.version, "^6.12.0 || >=8.0.0");
})), Ze = /* @__PURE__ */ n(((e, t) => {
	var n = k(), r = de(), i = fe(), a = O(), s = me(), c = Ye(), l = Xe(), u = ue(), { KeyObject: d, createSecretKey: f, createPublicKey: p } = o(), m = [
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
	l && (m.splice(m.length, 0, "PS256", "PS384", "PS512"), g.splice(g.length, 0, "PS256", "PS384", "PS512")), t.exports = function(e, t, o, l) {
		typeof o == "function" && !l && (l = o, o = {}), o ||= {}, o = Object.assign({}, o);
		let v;
		if (v = l || function(e, t) {
			if (e) throw e;
			return t;
		}, o.clockTimestamp && typeof o.clockTimestamp != "number") return v(new n("clockTimestamp must be a number"));
		if (o.nonce !== void 0 && (typeof o.nonce != "string" || o.nonce.trim() === "")) return v(new n("nonce must be a non-empty string"));
		if (o.allowInvalidAsymmetricKeyTypes !== void 0 && typeof o.allowInvalidAsymmetricKeyTypes != "boolean") return v(new n("allowInvalidAsymmetricKeyTypes must be a boolean"));
		let y = o.clockTimestamp || Math.floor(Date.now() / 1e3);
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
			if (!l && !o.algorithms) return v(new n("please specify \"none\" in \"algorithms\" to verify unsigned tokens"));
			if (a != null && !(a instanceof d)) try {
				a = p(a);
			} catch {
				try {
					a = f(typeof a == "string" ? Buffer.from(a) : a);
				} catch {
					return v(new n("secretOrPublicKey is not valid key material"));
				}
			}
			if (o.algorithms || (a.type === "secret" ? o.algorithms = _ : ["rsa", "rsa-pss"].includes(a.asymmetricKeyType) ? o.algorithms = g : a.asymmetricKeyType === "ec" ? o.algorithms = h : o.algorithms = m), o.algorithms.indexOf(x.header.alg) === -1) return v(new n("invalid algorithm"));
			if (S.alg.startsWith("HS") && a.type !== "secret") return v(new n(`secretOrPublicKey must be a symmetric key when using ${S.alg}`));
			if (/^(?:RS|PS|ES)/.test(S.alg) && a.type !== "public") return v(new n(`secretOrPublicKey must be an asymmetric key when using ${S.alg}`));
			if (!o.allowInvalidAsymmetricKeyTypes) try {
				c(S.alg, a);
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
			if (w.nbf !== void 0 && !o.ignoreNotBefore) {
				if (typeof w.nbf != "number") return v(new n("invalid nbf value"));
				if (w.nbf > y + (o.clockTolerance || 0)) return v(new r("jwt not active", /* @__PURE__ */ new Date(w.nbf * 1e3)));
			}
			if (w.exp !== void 0 && !o.ignoreExpiration) {
				if (typeof w.exp != "number") return v(new n("invalid exp value"));
				if (y >= w.exp + (o.clockTolerance || 0)) return v(new i("jwt expired", /* @__PURE__ */ new Date(w.exp * 1e3)));
			}
			if (o.audience) {
				let e = Array.isArray(o.audience) ? o.audience : [o.audience];
				if (!(Array.isArray(w.aud) ? w.aud : [w.aud]).some(function(t) {
					return e.some(function(e) {
						return e instanceof RegExp ? e.test(t) : e === t;
					});
				})) return v(new n("jwt audience invalid. expected: " + e.join(" or ")));
			}
			if (o.issuer && (typeof o.issuer == "string" && w.iss !== o.issuer || Array.isArray(o.issuer) && o.issuer.indexOf(w.iss) === -1)) return v(new n("jwt issuer invalid. expected: " + o.issuer));
			if (o.subject && w.sub !== o.subject) return v(new n("jwt subject invalid. expected: " + o.subject));
			if (o.jwtid && w.jti !== o.jwtid) return v(new n("jwt jwtid invalid. expected: " + o.jwtid));
			if (o.nonce && w.nonce !== o.nonce) return v(new n("jwt nonce invalid. expected: " + o.nonce));
			if (o.maxAge) {
				if (typeof w.iat != "number") return v(new n("iat required when maxAge is specified"));
				let e = s(o.maxAge, w.iat);
				if (e === void 0) return v(new n("\"maxAge\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60"));
				if (y >= e + (o.clockTolerance || 0)) return v(new i("maxAge exceeded", /* @__PURE__ */ new Date(e * 1e3)));
			}
			if (o.complete === !0) {
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
})), Qe = /* @__PURE__ */ n(((e, t) => {
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
	var w = Object.prototype, T = w.hasOwnProperty, ee = w.toString, te = w.propertyIsEnumerable, ne = C(Object.keys, Object), re = Math.max;
	function ie(e, t) {
		var n = ce(e) || se(e) ? x(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || T.call(e, a)) && !(i && (a == "length" || D(a, r))) && n.push(a);
		return n;
	}
	function E(e) {
		if (!ae(e)) return ne(e);
		var t = [];
		for (var n in Object(e)) T.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function D(e, t) {
		return t ??= r, !!t && (typeof e == "number" || h.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function ae(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || w);
	}
	function oe(e, t, n, r) {
		e = le(e) ? e : _e(e), n = n && !r ? he(n) : 0;
		var i = e.length;
		return n < 0 && (n = re(i + n, 0)), pe(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1;
	}
	function se(e) {
		return ue(e) && T.call(e, "callee") && (!te.call(e, "callee") || ee.call(e) == o);
	}
	var ce = Array.isArray;
	function le(e) {
		return e != null && k(e.length) && !O(e);
	}
	function ue(e) {
		return fe(e) && le(e);
	}
	function O(e) {
		var t = de(e) ? ee.call(e) : "";
		return t == s || t == c;
	}
	function k(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function de(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function fe(e) {
		return !!e && typeof e == "object";
	}
	function pe(e) {
		return typeof e == "string" || !ce(e) && fe(e) && ee.call(e) == l;
	}
	function me(e) {
		return typeof e == "symbol" || fe(e) && ee.call(e) == u;
	}
	function A(e) {
		return e ? (e = j(e), e === n || e === -n ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function he(e) {
		var t = A(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function j(e) {
		if (typeof e == "number") return e;
		if (me(e)) return a;
		if (de(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = de(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(d, "");
		var n = p.test(e);
		return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : f.test(e) ? a : +e;
	}
	function ge(e) {
		return le(e) ? ie(e) : E(e);
	}
	function _e(e) {
		return e ? S(e, ge(e)) : [];
	}
	t.exports = oe;
})), $e = /* @__PURE__ */ n(((e, t) => {
	var n = "[object Boolean]", r = Object.prototype.toString;
	function i(e) {
		return e === !0 || e === !1 || a(e) && r.call(e) == n;
	}
	function a(e) {
		return !!e && typeof e == "object";
	}
	t.exports = i;
})), et = /* @__PURE__ */ n(((e, t) => {
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
})), tt = /* @__PURE__ */ n(((e, t) => {
	var n = "[object Number]", r = Object.prototype.toString;
	function i(e) {
		return !!e && typeof e == "object";
	}
	function a(e) {
		return typeof e == "number" || i(e) && r.call(e) == n;
	}
	t.exports = a;
})), nt = /* @__PURE__ */ n(((e, t) => {
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
})), rt = /* @__PURE__ */ n(((e, t) => {
	var n = "[object String]", r = Object.prototype.toString, i = Array.isArray;
	function a(e) {
		return !!e && typeof e == "object";
	}
	function o(e) {
		return typeof e == "string" || !i(e) && a(e) && r.call(e) == n;
	}
	t.exports = o;
})), it = /* @__PURE__ */ n(((e, t) => {
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
})), at = /* @__PURE__ */ n(((e, t) => {
	var n = me(), r = Xe(), i = Ye(), a = ue(), s = Qe(), c = $e(), l = et(), u = tt(), d = nt(), f = rt(), p = it(), { KeyObject: m, createSecretKey: h, createPrivateKey: g } = o(), _ = [
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
				return l(e) || f(e) && e;
			},
			message: "\"expiresIn\" should be a number of seconds or string representing a timespan"
		},
		notBefore: {
			isValid: function(e) {
				return l(e) || f(e) && e;
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
			isValid: s.bind(null, _),
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
			isValid: c,
			message: "\"noTimestamp\" must be a boolean"
		},
		keyid: {
			isValid: f,
			message: "\"keyid\" must be a string"
		},
		mutatePayload: {
			isValid: c,
			message: "\"mutatePayload\" must be a boolean"
		},
		allowInsecureKeySizes: {
			isValid: c,
			message: "\"allowInsecureKeySizes\" must be a boolean"
		},
		allowInvalidAsymmetricKeyTypes: {
			isValid: c,
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
})), ot = /* @__PURE__ */ n(((e, t) => {
	t.exports = {
		decode: O(),
		verify: Ze(),
		sign: at(),
		JsonWebTokenError: k(),
		NotBeforeError: de(),
		TokenExpiredError: fe()
	};
})), st = /* @__PURE__ */ a(ot()), ct = {
	secret: process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET,
	providers: [],
	callbacks: {
		jwt: async ({ token: e, user: t }) => (t && (e.userId = t.id, e.role = t.role, e.organizationId = t.organizationId), e),
		session: async ({ session: e, token: t }) => (t && (e.user.id = t.userId, e.user.role = t.role, e.user.organizationId = t.organizationId), e)
	}
};
//#endregion
//#region ../../node_modules/server-only/index.js
throw Error("This module cannot be imported from a Client Component module. It should only be used from a Server Component.");
//#endregion
//#region src/lib/workflow.ts
async function lt(e) {
	let t = await T.dssDocument.findUnique({
		where: { id: e },
		include: { participants: { orderBy: { stepOrder: "asc" } } }
	});
	if (!t) throw Error(`Document not found: ${e}`);
	if (t.status === C.DssDocumentStatus.COMPLETED || t.status === C.DssDocumentStatus.VOIDED) return {
		isComplete: !0,
		nextStep: null,
		nextRole: null
	};
	let n = t.participants.find((e) => !e.hasSigned);
	return n ? {
		isComplete: !1,
		nextStep: n.stepOrder,
		nextRole: n.role
	} : {
		isComplete: !0,
		nextStep: null,
		nextRole: null
	};
}
async function ut(e, t) {
	let n = await lt(e);
	if (n.isComplete) return !1;
	let r = await T.dssDocument.findUnique({
		where: { id: e },
		include: { participants: !0 }
	});
	if (!r) return !1;
	let i = r.participants.find((e) => e.email === t);
	return i ? n.nextStep === i.stepOrder : !1;
}
function dt(e) {
	return Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return {
			...t,
			[n]: Array.isArray(r) ? [...r] : r
		};
	}, {});
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-expect-continue/dist-es/index.js
function ft(e) {
	return (t) => async (n) => {
		let { request: r } = n;
		if (e.expectContinueHeader !== !1 && yd.isInstance(r) && r.body && e.runtime === "node" && e.requestHandler?.constructor?.name !== "FetchHttpHandler") {
			let t = !0;
			if (typeof e.expectContinueHeader == "number") try {
				t = (Number(r.headers?.["content-length"]) ?? e.bodyLengthChecker?.(r.body) ?? Infinity) >= e.expectContinueHeader;
			} catch {}
			else t = !!e.expectContinueHeader;
			t && (r.headers.Expect = "100-continue");
		}
		return t({
			...n,
			request: r
		});
	};
}
//#endregion
//#region ../../node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
function pt(e, t, n) {
	return e.$source ||= {}, e.$source[t] = n, e;
}
//#endregion
//#region ../../node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
function mt(e, t, n) {
	e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = { features: {} }, e.__aws_sdk_context.features[t] = n;
}
//#endregion
//#region ../../node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function ht(e) {
	let t;
	t = typeof e == "string" ? s(e) : e;
	let n = typeof t == "object" && typeof t.length == "number", r = typeof t == "object" && typeof t.byteOffset == "number" && typeof t.byteLength == "number";
	if (!n && !r) throw Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
	let i = "";
	for (let e = 0; e < t.length; e += 3) {
		let n = 0, r = 0;
		for (let i = e, a = Math.min(e + 3, t.length); i < a; i++) n |= t[i] << (a - i - 1) * 8, r += 8;
		let a = Math.ceil(r / 6);
		n <<= a * 6 - r;
		for (let e = 1; e <= a; e++) {
			let t = (a - e) * 6;
			i += Md[(n & 63 << t) >> t];
		}
		i += "==".slice(0, 4 - a);
	}
	return i;
}
//#endregion
//#region ../../node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
function gt(e, t, n) {
	let r = e.getReader(), i = !1, a = 0, o = ["", new Bd((e) => new Uint8Array(e))], s = -1, c = async (e) => {
		let { value: l, done: u } = await r.read(), d = l;
		if (u) {
			if (s !== -1) {
				let t = vt(o, s);
				yt(t) > 0 && e.enqueue(t);
			}
			e.close();
		} else {
			let r = bt(d, !1);
			if (s !== r && (s >= 0 && e.enqueue(vt(o, s)), s = r), s === -1) {
				e.enqueue(d);
				return;
			}
			let l = yt(d);
			a += l;
			let u = yt(o[s]);
			if (l >= t && u === 0) e.enqueue(d);
			else {
				let r = _t(o, s, d);
				!i && a > t * 2 && (i = !0, n?.warn(`@smithy/util-stream - stream chunk size ${l} is below threshold of ${t}, automatically buffering.`)), r >= t ? e.enqueue(vt(o, s)) : await c(e);
			}
		}
	};
	return new ReadableStream({ pull: c });
}
function _t(e, t, n) {
	switch (t) {
		case 0: return e[0] += n, yt(e[0]);
		case 1:
		case 2: return e[t].push(n), yt(e[t]);
	}
}
function vt(e, t) {
	switch (t) {
		case 0:
			let n = e[0];
			return e[0] = "", n;
		case 1:
		case 2: return e[t].flush();
	}
	throw Error(`@smithy/util-stream - invalid index ${t} given to flush()`);
}
function yt(e) {
	return e?.byteLength ?? e?.length ?? 0;
}
function bt(e, t = !0) {
	return t && typeof Buffer < "u" && e instanceof Buffer ? 2 : e instanceof Uint8Array ? 1 : typeof e == "string" ? 0 : -1;
}
//#endregion
//#region ../../node_modules/@smithy/util-stream/dist-es/headStream.browser.js
async function xt(e, t) {
	let n = 0, r = [], i = e.getReader(), a = !1;
	for (; !a;) {
		let { done: e, value: o } = await i.read();
		if (o && (r.push(o), n += o?.byteLength ?? 0), n >= t) break;
		a = e;
	}
	i.releaseLock();
	let o = new Uint8Array(Math.min(t, n)), s = 0;
	for (let e of r) {
		if (e.byteLength > o.byteLength - s) {
			o.set(e.subarray(0, o.byteLength - s), s);
			break;
		} else o.set(e, s);
		s += e.length;
	}
	return o;
}
//#endregion
//#region ../../node_modules/@smithy/querystring-builder/dist-es/index.js
function St(e) {
	let t = [];
	for (let n of Object.keys(e).sort()) {
		let r = e[n];
		if (n = Ud(n), Array.isArray(r)) for (let e = 0, i = r.length; e < i; e++) t.push(`${n}=${Ud(r[e])}`);
		else {
			let e = n;
			(r || typeof r == "string") && (e += `=${Ud(r)}`), t.push(e);
		}
	}
	return t.join("&");
}
//#endregion
//#region ../../node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
function Ct(e, t) {
	return new Request(e, t);
}
//#endregion
//#region ../../node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
function wt(e = 0) {
	return new Promise((t, n) => {
		e && setTimeout(() => {
			let t = /* @__PURE__ */ Error(`Request did not complete within ${e} ms`);
			t.name = "TimeoutError", n(t);
		}, e);
	});
}
function Tt(e) {
	let t = e && typeof e == "object" && "reason" in e ? e.reason : void 0;
	if (t) {
		if (t instanceof Error) {
			let e = /* @__PURE__ */ Error("Request aborted");
			return e.name = "AbortError", e.cause = t, e;
		}
		let e = Error(String(t));
		return e.name = "AbortError", e;
	}
	let n = /* @__PURE__ */ Error("Request aborted");
	return n.name = "AbortError", n;
}
async function Et(e) {
	let t = Nd(await Ot(e));
	return new Uint8Array(t);
}
async function Dt(e) {
	let t = [], n = e.getReader(), r = !1, i = 0;
	for (; !r;) {
		let { done: e, value: a } = await n.read();
		a && (t.push(a), i += a.length), r = e;
	}
	let a = new Uint8Array(i), o = 0;
	for (let e of t) a.set(e, o), o += e.length;
	return a;
}
function Ot(e) {
	return new Promise((t, n) => {
		let r = new FileReader();
		r.onloadend = () => {
			if (r.readyState !== 2) return n(/* @__PURE__ */ Error("Reader aborted too early"));
			let e = r.result ?? "", i = e.indexOf(","), a = i > -1 ? i + 1 : e.length;
			t(e.substring(a));
		}, r.onabort = () => n(/* @__PURE__ */ Error("Read aborted")), r.onerror = () => n(r.error), r.readAsDataURL(e);
	});
}
function kt(e) {
	if (e.length % 2 != 0) throw Error("Hex encoded strings must have an even number length");
	let t = new Uint8Array(e.length / 2);
	for (let n = 0; n < e.length; n += 2) {
		let r = e.slice(n, n + 2).toLowerCase();
		if (r in Yd) t[n / 2] = Yd[r];
		else throw Error(`Cannot decode unrecognized sequence ${r} as hexadecimal`);
	}
	return t;
}
function At(e) {
	let t = "";
	for (let n = 0; n < e.byteLength; n++) t += Jd[e[n]];
	return t;
}
//#endregion
//#region ../../node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
async function jt(e) {
	return typeof e.stream == "function" && (e = e.stream()), e.tee();
}
//#endregion
//#region ../../node_modules/tslib/tslib.es6.mjs
function Mt(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function Nt(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function Pt(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
	return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(s) {
		if (r) throw TypeError("Generator is already executing.");
		for (; o && (o = 0, s[0] && (n = 0)), n;) try {
			if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
			switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
				case 0:
				case 1:
					a = s;
					break;
				case 4: return n.label++, {
					value: s[1],
					done: !1
				};
				case 5:
					n.label++, i = s[1], s = [0];
					continue;
				case 7:
					s = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (s[0] === 6 || s[0] === 2)) {
						n = 0;
						continue;
					}
					if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
						n.label = s[1];
						break;
					}
					if (s[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = s;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(s);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			s = t.call(e, n);
		} catch (e) {
			s = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (s[0] & 5) throw s[1];
		return {
			value: s[0] ? s[1] : void 0,
			done: !0
		};
	}
}
function Ft(e) {
	var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
	if (n) return n.call(e);
	if (e && typeof e.length == "number") return { next: function() {
		return e && r >= e.length && (e = void 0), {
			value: e && e[r++],
			done: !e
		};
	} };
	throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function It(e) {
	return e instanceof Uint8Array ? e : typeof e == "string" ? sf(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
//#endregion
//#region ../../node_modules/@aws-crypto/util/build/module/isEmptyData.js
function Lt(e) {
	return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
//#endregion
//#region ../../node_modules/@aws-crypto/util/build/module/numToUint8.js
function Rt(e) {
	return new Uint8Array([
		(e & 4278190080) >> 24,
		(e & 16711680) >> 16,
		(e & 65280) >> 8,
		e & 255
	]);
}
//#endregion
//#region ../../node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
function zt(e) {
	if (!Uint32Array.from) {
		for (var t = new Uint32Array(e.length), n = 0; n < e.length;) t[n] = e[n], n += 1;
		return t;
	}
	return Uint32Array.from(e);
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function Bt(e) {
	return e;
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
function Vt(e) {
	return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
		return "%" + e.charCodeAt(0).toString(16).toUpperCase();
	});
}
//#endregion
//#region ../../node_modules/@smithy/querystring-parser/dist-es/index.js
function Ht(e) {
	let t = {};
	if (e = e.replace(/^\?/, ""), e) for (let n of e.split("&")) {
		let [e, r = null] = n.split("=");
		e = decodeURIComponent(e), r &&= decodeURIComponent(r), e in t ? Array.isArray(t[e]) ? t[e].push(r) : t[e] = [t[e], r] : t[e] = r;
	}
	return t;
}
function Ut(e) {
	return { applyToStack: (t) => {
		t.add(mp(e), gp), t.add(up(e), hp), e.protocol.setSerdeContext(e);
	} };
}
function Wt(e) {
	if (typeof e == "object") return e;
	if (e |= 0, _p[e]) return _p[e];
	let t = {}, n = 0;
	for (let r of [
		"httpLabel",
		"idempotent",
		"idempotencyToken",
		"sensitive",
		"httpPayload",
		"httpResponseCode",
		"httpQueryParams"
	]) (e >> n++ & 1) == 1 && (t[r] = 1);
	return _p[e] = t;
}
function Gt(e, t) {
	return e instanceof xp ? Object.assign(e, {
		memberName: t,
		_isMemberSchema: !0
	}) : new xp(e, t);
}
function Kt(e) {
	let t = e.getUTCFullYear(), n = e.getUTCMonth(), r = e.getUTCDay(), i = e.getUTCDate(), a = e.getUTCHours(), o = e.getUTCMinutes(), s = e.getUTCSeconds(), c = i < 10 ? `0${i}` : `${i}`, l = a < 10 ? `0${a}` : `${a}`, u = o < 10 ? `0${o}` : `${o}`, d = s < 10 ? `0${s}` : `${s}`;
	return `${Bp[r]}, ${c} ${Vp[n]} ${t} ${l}:${u}:${d} GMT`;
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
function qt(e) {
	return (e.includes(",") || e.includes("\"")) && (e = `"${e.replace(/"/g, "\\\"")}"`), e;
}
function Jt(e, t, n) {
	let r = Number(e);
	if (r < t || r > n) throw Error(`Value ${r} out of range [${t}, ${n}]`);
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
function Yt(e, t, n) {
	if (n <= 0 || !Number.isInteger(n)) throw Error("Invalid number of delimiters (" + n + ") for splitEvery.");
	let r = e.split(t);
	if (n === 1) return r;
	let i = [], a = "";
	for (let e = 0; e < r.length; e++) a === "" ? a = r[e] : a += t + r[e], (e + 1) % n === 0 && (i.push(a), a = "");
	return a !== "" && i.push(a), i;
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js
function Xt(e, t) {
	if (t.timestampFormat.useTrait && e.isTimestampSchema() && (e.getSchema() === 5 || e.getSchema() === 6 || e.getSchema() === 7)) return e.getSchema();
	let { httpLabel: n, httpPrefixHeaders: r, httpHeader: i, httpQuery: a } = e.getMergedTraits();
	return (t.httpBindings ? typeof r == "string" || i ? 6 : a || n ? 5 : void 0 : void 0) ?? t.timestampFormat.default;
}
function Zt(e, t) {
	if (t == null) return t;
	let n = xp.of(e);
	if (n.getMergedTraits().sensitive) return Am;
	if (n.isListSchema()) {
		if (n.getValueSchema().getMergedTraits().sensitive) return Am;
	} else if (n.isMapSchema()) {
		if (n.getKeySchema().getMergedTraits().sensitive || n.getValueSchema().getMergedTraits().sensitive) return Am;
	} else if (n.isStructSchema() && typeof t == "object") {
		let e = t, r = {};
		for (let [t, i] of n.structIterator()) e[t] != null && (r[t] = Zt(i, e[t]));
		return r;
	}
	return t;
}
function Qt() {
	return (e, t) => async (n) => {
		let { request: r } = n;
		if (yd.isInstance(r) && !(Gm in r.headers) && !(Km in r.headers)) {
			let e = "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";
			typeof t?.logger?.warn == "function" && !(t.logger instanceof Wm) ? t.logger.warn(e) : console.warn(e);
		}
		return e({ ...n });
	};
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-sdk-s3/dist-es/region-redirect-middleware.js
function $t(e) {
	return (t, n) => async (r) => {
		try {
			return await t(r);
		} catch (i) {
			if (e.followRegionRedirects) {
				let a = i?.$metadata?.httpStatusCode, o = n.commandName === "HeadBucketCommand", s = i?.$response?.headers?.["x-amz-bucket-region"];
				if (s && (a === 301 || a === 400 && (i?.name === "IllegalLocationConstraintException" || o))) {
					try {
						let t = s;
						n.logger?.debug(`Redirecting from ${await e.region()} to ${t}`), n.__s3RegionRedirect = t;
					} catch (e) {
						throw Error("Region redirect failed: " + e);
					}
					return t(r);
				}
			}
			throw i;
		}
	};
}
function en(e) {
	for (let t = 0; t < 8; t++) e[t] ^= 255;
	for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
function tn(e) {
	return {
		accessKeyId: e.accessKeyId,
		secretAccessKey: e.secretAccessKey,
		expiration: e.expiration
	};
}
function nn(e, t) {
	let n = setTimeout(() => {
		throw Error("SignatureV4S3Express credential override was created but not called.");
	}, 10), r = e.credentialProvider;
	e.credentialProvider = () => (clearTimeout(n), e.credentialProvider = r, Promise.resolve(t));
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function rn(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.schemeId, n);
	return t;
}
//#endregion
//#region ../../node_modules/@smithy/core/dist-es/setFeature.js
function an(e, t, n) {
	e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = { features: {} }, e.__smithy_context.features[t] = n;
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-sdk-s3/dist-es/bucket-endpoint-middleware.js
function on(e) {
	return (t, n) => async (r) => {
		if (e.bucketEndpoint) {
			let e = n.endpointV2;
			if (e) {
				let t = r.input.Bucket;
				if (typeof t == "string") try {
					let r = new URL(t);
					n.endpointV2 = {
						...e,
						url: r
					};
				} catch (e) {
					let r = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${t} could not be parsed as URL.`;
					throw n.logger?.constructor?.name === "NoOpLogger" ? console.warn(r) : n.logger?.warn?.(r), e;
				}
			}
		}
		return t(r);
	};
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-sdk-s3/dist-es/validate-bucket-name.js
function sn({ bucketEndpoint: e }) {
	return (t) => async (n) => {
		let { input: { Bucket: r } } = n;
		if (!e && typeof r == "string" && !Ag(r) && r.indexOf("/") >= 0) {
			let e = /* @__PURE__ */ Error(`Bucket name shouldn't contain '/', received '${r}'`);
			throw e.name = "InvalidBucketName", e;
		}
		return t({ ...n });
	};
}
function cn(e) {
	return e.replace(zg, (e) => Bg[e]);
}
function ln(e) {
	return e.replace(Vg, (e) => Hg[e]);
}
function un(e) {
	Gg ||= new DOMParser();
	let t = Gg.parseFromString(e, "application/xml");
	if (t.getElementsByTagName("parsererror").length > 0) throw Error("DOMParser XML parsing error.");
	let n = (e) => {
		if (e.nodeType === Node.TEXT_NODE && e.textContent?.trim()) return e.textContent;
		if (e.nodeType === Node.ELEMENT_NODE) {
			let t = e;
			if (t.attributes.length === 0 && t.childNodes.length === 0) return "";
			let r = {}, i = Array.from(t.attributes);
			for (let e of i) r[`${e.name}`] = e.value;
			let a = Array.from(t.childNodes);
			for (let e of a) {
				let o = n(e);
				if (o != null) {
					let t = e.nodeName;
					if (a.length === 1 && i.length === 0 && t === "#text") return o;
					r[t] ? Array.isArray(r[t]) ? r[t].push(o) : r[t] = [r[t], o] : r[t] = o;
				} else if (a.length === 1 && i.length === 0) return t.textContent;
			}
			return r;
		}
		return null;
	};
	return { [t.documentElement.nodeName]: n(t.documentElement) };
}
function dn(e) {
	return e === void 0 ? !0 : typeof e == "string" && e.length <= 50;
}
function fn(e) {
	let t = dg(e.userAgentAppId ?? void 0), { customUserAgent: n } = e;
	return Object.assign(e, {
		customUserAgent: typeof n == "string" ? [[n]] : n,
		userAgentAppId: async () => {
			let n = await t();
			if (!dn(n)) {
				let t = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
				typeof n == "string" ? n.length > 50 && t?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.") : t?.warn("userAgentAppId must be a string or undefined.");
			}
			return n;
		}
	});
}
//#endregion
//#region ../../node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function pn(e) {
	return typeof e != "object" || !e ? e : "ref" in e ? `$${pn(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(pn).join(", ")})` : JSON.stringify(e, null, 2);
}
async function mn(e, t, n) {
	if (n.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" && mt(e, "PROTOCOL_RPC_V2_CBOR", "M"), typeof t.retryStrategy == "function") {
		let n = await t.retryStrategy();
		if (typeof n.mode == "string") switch (n.mode) {
			case J_.ADAPTIVE:
				mt(e, "RETRY_MODE_ADAPTIVE", "F");
				break;
			case J_.STANDARD:
				mt(e, "RETRY_MODE_STANDARD", "E");
				break;
		}
	}
	if (typeof t.accountIdEndpointMode == "function") {
		let n = e.endpointV2;
		switch (String(n?.url?.hostname).match(gv) && mt(e, "ACCOUNT_ID_ENDPOINT", "O"), await t.accountIdEndpointMode?.()) {
			case "disabled":
				mt(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
				break;
			case "preferred":
				mt(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
				break;
			case "required":
				mt(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
				break;
		}
	}
	let r = e.__smithy_context?.selectedHttpAuthScheme?.identity;
	if (r?.$source) {
		let t = r;
		t.accountId && mt(e, "RESOLVED_ACCOUNT_ID", "T");
		for (let [n, r] of Object.entries(t.$source ?? {})) mt(e, n, r);
	}
}
function hn(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (t.length + r.length + 1 <= xv) {
			t.length ? t += "," + r : t += r;
			continue;
		}
		break;
	}
	return t;
}
function gn(e) {
	return (t) => async (n) => {
		let r = n.request;
		if (yd.isInstance(r)) {
			let { body: t, headers: n } = r;
			if (t && Object.keys(n).map((e) => e.toLowerCase()).indexOf(Mv) === -1) try {
				let n = e(t);
				r.headers = {
					...r.headers,
					[Mv]: String(n)
				};
			} catch {}
		}
		return t({
			...n,
			request: r
		});
	};
}
//#endregion
//#region ../../node_modules/@smithy/middleware-retry/dist-es/parseRetryAfterHeader.js
function _n(e, t) {
	if (bd.isInstance(e)) for (let n of Object.keys(e.headers)) {
		let r = n.toLowerCase();
		if (r === "retry-after") {
			let r = e.headers[n], i = NaN;
			if (r.endsWith("GMT")) try {
				i = (Gp(r).getTime() - Date.now()) / 1e3;
			} catch (e) {
				t?.trace?.("Failed to parse retry-after header"), t?.trace?.(e);
			}
			else r.match(/ GMT, ((\d+)|(\d+\.\d+))$/) ? i = Number(r.match(/ GMT, ([\d.]+)$/)?.[1]) : r.match(/^((\d+)|(\d+\.\d+))$/) ? i = Number(r) : Date.parse(r) >= Date.now() && (i = (Date.parse(r) - Date.now()) / 1e3);
			return isNaN(i) ? void 0 : new Date(Date.now() + i * 1e3);
		} else if (r === "x-amz-retry-after") {
			let r = e.headers[n], i = Number(r);
			if (isNaN(i)) {
				t?.trace?.(`Failed to parse x-amz-retry-after=${r}`);
				return;
			}
			return new Date(Date.now() + i);
		}
	}
}
function vn(e, { credentials: t, credentialDefaultProvider: n }) {
	let r;
	return r = t ? t?.memoized ? t : _g(t, hg, gg) : n ? dg(n(Object.assign({}, e, { parentClientConfig: e }))) : async () => {
		throw Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
	}, r.memoized = !0, r;
}
function yn(e, t) {
	if (t.configBound) return t;
	let n = async (n) => t({
		...n,
		callerClientConfig: e
	});
	return n.memoized = t.memoized, n.configBound = !0, n;
}
function bn(e) {
	return {
		schemeId: "aws.auth#sigv4",
		signingProperties: {
			name: "s3",
			region: e.region
		},
		propertiesExtractor: (e, t) => ({ signingProperties: {
			config: e,
			context: t
		} })
	};
}
function xn(e) {
	return {
		schemeId: "aws.auth#sigv4a",
		signingProperties: {
			name: "s3",
			region: e.region
		},
		propertiesExtractor: (e, t) => ({ signingProperties: {
			config: e,
			context: t
		} })
	};
}
//#endregion
//#region ../../node_modules/@aws-crypto/sha1-browser/build/module/isEmptyData.js
function Sn(e) {
	return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
function Cn() {
	return typeof window < "u" ? window : typeof self < "u" ? self : UD;
}
function wn(e) {
	return typeof e == "string" ? zD(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
function Tn(e) {
	if (En(e) && typeof e.crypto.subtle == "object") {
		var t = e.crypto.subtle;
		return Dn(t);
	}
	return !1;
}
function En(e) {
	return typeof e == "object" && typeof e.crypto == "object" ? typeof e.crypto.getRandomValues == "function" : !1;
}
function Dn(e) {
	return e && GD.every(function(t) {
		return typeof e[t] == "function";
	});
}
function On(e) {
	var t = It(e);
	if (t.byteLength > 64) {
		var n = new eO();
		n.update(t), t = n.digest();
	}
	var r = new Uint8Array(64);
	return r.set(t), r;
}
function kn(e) {
	for (let t = 0; t < 8; t++) e[t] ^= 255;
	for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--);
}
function An({ byteLength: e, byteOffset: t, buffer: n }) {
	if (e < xO) throw Error("Provided message too short to accommodate event stream message overhead");
	let r = new DataView(n, t, e), i = r.getUint32(0, !1);
	if (e !== i) throw Error("Reported message length does not match received message length");
	let a = r.getUint32(vO, !1), o = r.getUint32(yO, !1), s = r.getUint32(e - bO, !1), c = new Tf().update(new Uint8Array(n, t, yO));
	if (o !== c.digest()) throw Error(`The prelude checksum specified in the message (${o}) does not match the calculated CRC32 checksum (${c.digest()})`);
	if (c.update(new Uint8Array(n, t + yO, e - (yO + bO))), s !== c.digest()) throw Error(`The message checksum (${c.digest()}) did not match the expected value of ${s}`);
	return {
		headers: new DataView(n, t + yO + bO, a),
		body: new Uint8Array(n, t + yO + bO + a, i - a - (yO + bO + bO))
	};
}
//#endregion
//#region ../../node_modules/@smithy/eventstream-serde-universal/dist-es/getChunkedStream.js
function jn(e) {
	let t = 0, n = 0, r = null, i = null, a = (e) => {
		if (typeof e != "number") throw Error("Attempted to allocate an event message where size was not a number: " + e);
		t = e, n = 4, r = new Uint8Array(e), new DataView(r.buffer).setUint32(0, e, !1);
	}, o = async function* () {
		let o = e[Symbol.asyncIterator]();
		for (;;) {
			let { value: e, done: s } = await o.next();
			if (s) {
				if (!t) return;
				if (t === n) yield r;
				else throw Error("Truncated event message received.");
				return;
			}
			let c = e.length, l = 0;
			for (; l < c;) {
				if (!r) {
					let t = c - l;
					i ||= new Uint8Array(4);
					let r = Math.min(4 - n, t);
					if (i.set(e.slice(l, l + r), n), n += r, l += r, n < 4) break;
					a(new DataView(i.buffer).getUint32(0, !1)), i = null;
				}
				let o = Math.min(t - n, c - l);
				r.set(e.slice(l, l + o), n), n += o, l += o, t && t === n && (yield r, r = null, t = 0, n = 0);
			}
		}
	};
	return { [Symbol.asyncIterator]: o };
}
//#endregion
//#region ../../node_modules/@smithy/eventstream-serde-universal/dist-es/getUnmarshalledStream.js
function Mn(e, t) {
	return async function(n) {
		let { value: r } = n.headers[":message-type"];
		if (r === "error") {
			let e = Error(n.headers[":error-message"].value || "UnknownError");
			throw e.name = n.headers[":error-code"].value, e;
		} else if (r === "exception") {
			let r = n.headers[":exception-type"].value, i = await e({ [r]: n });
			if (i.$unknown) {
				let e = Error(t(n.body));
				throw e.name = r, e;
			}
			throw i[r];
		} else if (r === "event") {
			let t = await e({ [n.headers[":event-type"].value]: n });
			return t.$unknown ? void 0 : t;
		} else throw Error(`Unrecognizable event type: ${n.headers[":event-type"].value}`);
	};
}
//#endregion
//#region ../../node_modules/@smithy/chunked-blob-reader/dist-es/index.js
async function Nn(e, t, n = 1024 * 1024) {
	let r = e.size, i = 0;
	for (; i < r;) {
		let a = e.slice(i, Math.min(r, i + n));
		t(new Uint8Array(await a.arrayBuffer())), i += a.size;
	}
}
function Pn(e, t, n, r, i, a) {
	return t = (t + e & 4294967295) + (r + a & 4294967295) & 4294967295, (t << i | t >>> 32 - i) + n & 4294967295;
}
function Fn(e, t, n, r, i, a, o) {
	return Pn(t & n | ~t & r, e, t, i, a, o);
}
function In(e, t, n, r, i, a, o) {
	return Pn(t & r | n & ~r, e, t, i, a, o);
}
function Ln(e, t, n, r, i, a, o) {
	return Pn(t ^ n ^ r, e, t, i, a, o);
}
function Rn(e, t, n, r, i, a, o) {
	return Pn(n ^ (t | ~r), e, t, i, a, o);
}
function zn(e) {
	return typeof e == "string" ? e.length === 0 : e.byteLength === 0;
}
function Bn(e) {
	return typeof e == "string" ? s(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
}
//#endregion
//#region ../../node_modules/@aws-sdk/middleware-ssec/dist-es/index.js
function Vn(e) {
	return (t) => async (n) => {
		let r = { ...n.input };
		for (let t of [{
			target: "SSECustomerKey",
			hash: "SSECustomerKeyMD5"
		}, {
			target: "CopySourceSSECustomerKey",
			hash: "CopySourceSSECustomerKeyMD5"
		}]) {
			let n = r[t.target];
			if (n) {
				let i;
				typeof n == "string" ? Hn(n, e) ? i = e.base64Decoder(n) : (i = e.utf8Decoder(n), r[t.target] = e.base64Encoder(i)) : (i = ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n), r[t.target] = e.base64Encoder(i));
				let a = new e.md5();
				a.update(i), r[t.hash] = e.base64Encoder(await a.digest());
			}
		}
		return t({
			...n,
			input: r
		});
	};
}
function Hn(e, t) {
	if (!/^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)) return !1;
	try {
		return t.base64Decoder(e).length === 32;
	} catch {
		return !1;
	}
}
//#endregion
//#region ../../node_modules/@aws-sdk/util-format-url/dist-es/index.js
function Un(e) {
	let { port: t, query: n } = e, { protocol: r, path: i, hostname: a } = e;
	r && r.slice(-1) !== ":" && (r += ":"), t && (a += `:${t}`), i && i.charAt(0) !== "/" && (i = `/${i}`);
	let o = n ? St(n) : "";
	o && o[0] !== "?" && (o = `?${o}`);
	let s = "";
	(e.username != null || e.password != null) && (s = `${e.username ?? ""}:${e.password ?? ""}@`);
	let c = "";
	return e.fragment && (c = `#${e.fragment}`), `${r}//${s}${a}${i}${o}${c}`;
}
async function Wn({ title: e, organizationId: t, fileBuffer: n, participants: r, signingMode: i = C.DssSigningMode.SEQUENTIAL }) {
	let a = m(n), { key: o } = await nk.uploadPdf(n, t), s = r.map((e, t) => ({
		...e,
		stepOrder: t + 1
	}));
	return await T.dssDocument.create({
		data: {
			organizationId: t,
			title: e,
			originalPdfSha256Hex: a,
			originalFileUrl: o,
			originalFileKey: o,
			signingMode: i,
			participants: { create: s.map((e) => ({
				organizationId: t,
				email: e.email,
				role: e.role,
				name: e.name,
				stepOrder: e.stepOrder
			})) }
		},
		include: { participants: !0 }
	});
}
async function Gn(e) {
	let t = await T.dssDocument.findUnique({
		where: { id: e },
		include: {
			participants: { orderBy: { stepOrder: "asc" } },
			organization: { select: { name: !0 } }
		}
	});
	if (!t) return null;
	let n = t.originalFileKey || t.originalFileUrl || void 0;
	return {
		document: t,
		originalFileUrl: n ? await nk.getSignedUrl(n) : null
	};
}
async function Kn(e, t, n, r) {
	let i = await lt(e), a = await T.dssDocument.findUnique({
		where: { id: e },
		include: { participants: !0 }
	});
	if (!a) throw Error("Document not found");
	let o = a.participants.find((e) => e.email === t);
	if (!o) throw Error("User is not a participant of this document");
	if (a.signingMode === C.DssSigningMode.SEQUENTIAL && i.nextStep !== o.stepOrder) throw Error("It is not your turn to sign this document.");
	if (o.hasSigned) throw Error("You have already signed this document.");
	let s = o.role === "CUSTODIAN";
	if (s && !r) throw Error("Custodian must specify who they are signing on behalf of (onBehalfOf).");
	if (!s && r) throw Error("Only custodians can sign on behalf of others.");
	let c = m(Buffer.from(n + a.originalPdfSha256Hex));
	return {
		success: !0,
		result: await T.$transaction(async (t) => (await t.dssParticipant.update({
			where: { id: o.id },
			data: {
				hasSigned: !0,
				signedAt: /* @__PURE__ */ new Date()
			}
		}), await t.dssSignature.create({ data: {
			documentId: e,
			participantId: o.id,
			signatureHash: c,
			isProxy: s,
			onBehalfOf: r
		} }), await t.dssParticipant.count({ where: {
			documentId: e,
			hasSigned: !1
		} }) === 0 ? (await t.dssDocument.update({
			where: { id: e },
			data: {
				status: C.DssDocumentStatus.COMPLETED,
				completedAt: /* @__PURE__ */ new Date(),
				finalPdfSha256Hex: a.originalPdfSha256Hex
			}
		}), { status: "COMPLETED" }) : ((a.status === C.DssDocumentStatus.DRAFT || a.status === C.DssDocumentStatus.SENT) && await t.dssDocument.update({
			where: { id: e },
			data: { status: C.DssDocumentStatus.IN_SIGNING }
		}), { status: "IN_PROGRESS" })))
	};
}
async function qn(e) {
	return console.log(`🔗 [Blockchain] Sending transaction for hash: ${e}`), await new Promise((e) => setTimeout(e, 1500)), {
		txHash: "0x" + p.default.randomBytes(32).toString("hex"),
		blockNumber: 12345678,
		status: "SUCCESS"
	};
}
async function Jn(e) {
	let t = await T.dssDocument.findUnique({
		where: { id: e },
		include: { notaryRecord: !0 }
	});
	if (!t) throw Error("Document not found");
	if (t.status !== C.DssDocumentStatus.COMPLETED) throw Error("Document must be COMPLETED before notarization.");
	if (!t.finalPdfSha256Hex) throw Error("Critical: Document is missing the Final PDF Hash.");
	if (t.notaryRecord) throw Error(`Document is already notarized (Status: ${t.notaryRecord.status})`);
	console.log(`📜 [Notary] Starting notarization for Doc ID: ${e}`);
	let n = await T.blockchainNotaryRecord.create({ data: {
		documentId: t.id,
		organizationId: t.organizationId,
		chainId: ik,
		contractAddress: ak,
		notarizedHash: t.finalPdfSha256Hex,
		status: C.BlockchainNotaryStatus.PENDING
	} });
	try {
		let e = await qn(t.finalPdfSha256Hex), r = await T.blockchainNotaryRecord.update({
			where: { id: n.id },
			data: {
				status: C.BlockchainNotaryStatus.CONFIRMED,
				txHash: e.txHash,
				blockNumber: e.blockNumber,
				confirmedAt: /* @__PURE__ */ new Date()
			}
		});
		return console.log(`✅ [Notary] Success! Tx: ${r.txHash}`), r;
	} catch (e) {
		throw console.error("❌ [Notary] Blockchain Transaction Failed:", e), await T.blockchainNotaryRecord.update({
			where: { id: n.id },
			data: { status: C.BlockchainNotaryStatus.FAILED }
		}), Error("Blockchain notarization failed. Please retry.");
	}
}
function Yn(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
function Xn(e) {
	return e && Object.assign(pk, e), pk;
}
//#endregion
//#region ../../node_modules/zod/v4/core/util.js
function Zn(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Qn(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function $n(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function er(e) {
	return e == null;
}
function tr(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function nr(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = t.toString(), i = (r.split(".")[1] || "").length;
	if (i === 0 && /\d?e-\d?/.test(r)) {
		let e = r.match(/\d?e-(\d?)/);
		e?.[1] && (i = Number.parseInt(e[1]));
	}
	let a = n > i ? n : i;
	return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
function rr(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== mk) return r === void 0 && (r = mk, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function ir(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function ar(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function or(e) {
	return JSON.stringify(e);
}
function sr(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function cr(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function lr(e) {
	if (cr(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(cr(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function ur(e) {
	return lr(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function dr(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function fr(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function U(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function pr(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function mr(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return fr(e, ar(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return ir(this, "shape", e), e;
		},
		checks: []
	}));
}
function hr(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return fr(e, ar(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return ir(this, "shape", r), r;
		},
		checks: []
	}));
}
function gr(e, t) {
	if (!lr(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return fr(e, ar(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return ir(this, "shape", n), n;
	} }));
}
function _r(e, t) {
	if (!lr(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return fr(e, ar(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return ir(this, "shape", n), n;
	} }));
}
function vr(e, t) {
	return fr(e, ar(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return ir(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: []
	}));
}
function yr(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return fr(t, ar(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return ir(this, "shape", i), i;
		},
		checks: []
	}));
}
function br(e, t, n) {
	return fr(t, ar(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return ir(this, "shape", i), i;
	} }));
}
function xr(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function Sr(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Cr(e) {
	return typeof e == "string" ? e : e?.message;
}
function wr(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = Cr(e.inst?._zod.def?.error?.(e)) ?? Cr(t?.error?.(e)) ?? Cr(n.customError?.(e)) ?? Cr(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Tr(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Er(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Dr(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Or(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e) => {
		for (let i of e.issues) if (i.code === "invalid_union" && i.errors.length) i.errors.map((e) => r({ issues: e }));
		else if (i.code === "invalid_key") r({ issues: i.issues });
		else if (i.code === "invalid_element") r({ issues: i.issues });
		else if (i.path.length === 0) n._errors.push(t(i));
		else {
			let e = n, r = 0;
			for (; r < i.path.length;) {
				let n = i.path[r];
				r === i.path.length - 1 ? (e[n] = e[n] || { _errors: [] }, e[n]._errors.push(t(i))) : e[n] = e[n] || { _errors: [] }, e = e[n], r++;
			}
		}
	};
	return r(e), n;
}
function kr() {
	return new RegExp(nA, "u");
}
function Ar(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function jr(e) {
	return RegExp(`^${Ar(e)}$`);
}
function Mr(e) {
	let t = Ar({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${uA}T(?:${r})$`);
}
function Nr(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Pr(e) {
	if (!cA.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Nr(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Fr(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
function Ir(e, t, n) {
	e.issues.length && t.issues.push(...Sr(n, e.issues)), t.value[n] = e.value;
}
function Lr(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...Sr(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Rr(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = pr(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function zr(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optout === "optional";
	for (let i in t) {
		if (s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Lr(e, n, i, t, u))) : Lr(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Br(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !xr(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => wr(e, r, Xn())))
	}), t);
}
function Vr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (lr(e) && lr(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = Vr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Vr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Hr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), xr(e)) return e;
	let o = Vr(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
function Ur(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
function Wr(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Gr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Kr(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function qr(e) {
	return e.value = Object.freeze(e.value), e;
}
function Jr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Er(e));
	}
}
function Yr() {
	return new jj();
}
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function Xr(e, t) {
	return new e({
		type: "string",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Zr(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Qr(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function $r(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ei(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ti(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ni(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ri(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ii(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ai(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function oi(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function si(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ci(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function li(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ui(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function di(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fi(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pi(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mi(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hi(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gi(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _i(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vi(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yi(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function bi(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xi(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Si(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ci(e, t) {
	return new e({
		type: "number",
		checks: [],
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wi(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ti(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function Ei(e, t) {
	return new e({
		type: "never",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Di(e, t) {
	return new e({
		type: "date",
		...U(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Oi(e, t) {
	return new yA({
		check: "less_than",
		...U(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ki(e, t) {
	return new yA({
		check: "less_than",
		...U(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ai(e, t) {
	return new bA({
		check: "greater_than",
		...U(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ji(e, t) {
	return new bA({
		check: "greater_than",
		...U(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mi(e, t) {
	return new xA({
		check: "multiple_of",
		...U(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ni(e, t) {
	return new CA({
		check: "max_length",
		...U(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Pi(e, t) {
	return new wA({
		check: "min_length",
		...U(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fi(e, t) {
	return new TA({
		check: "length_equals",
		...U(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ii(e, t) {
	return new DA({
		check: "string_format",
		format: "regex",
		...U(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Li(e) {
	return new OA({
		check: "string_format",
		format: "lowercase",
		...U(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ri(e) {
	return new kA({
		check: "string_format",
		format: "uppercase",
		...U(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zi(e, t) {
	return new AA({
		check: "string_format",
		format: "includes",
		...U(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bi(e, t) {
	return new jA({
		check: "string_format",
		format: "starts_with",
		...U(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vi(e, t) {
	return new MA({
		check: "string_format",
		format: "ends_with",
		...U(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Hi(e) {
	return new NA({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ui(e) {
	return /* @__PURE__ */ Hi((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Wi() {
	return /* @__PURE__ */ Hi((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function Gi() {
	return /* @__PURE__ */ Hi((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Ki() {
	return /* @__PURE__ */ Hi((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function qi() {
	return /* @__PURE__ */ Hi((e) => sr(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Ji(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...U(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Yi(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...U(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Xi(e) {
	let t = /* @__PURE__ */ Zi((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(Er(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(Er(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function Zi(e, t) {
	let n = new _A({
		check: "custom",
		...U(t)
	});
	return n._zod.check = e, n;
}
/* @__NO_SIDE_EFFECTS__ */
function Qi(e) {
	let t = new _A({ check: "describe" });
	return t._zod.onattach = [(t) => {
		let n = Mj.get(t) ?? {};
		Mj.add(t, {
			...n,
			description: e
		});
	}], t._zod.check = () => {}, t;
}
/* @__NO_SIDE_EFFECTS__ */
function $i(e) {
	let t = new _A({ check: "meta" });
	return t._zod.onattach = [(t) => {
		let n = Mj.get(t) ?? {};
		Mj.add(t, {
			...n,
			...e
		});
	}], t._zod.check = () => {}, t;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function ea(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Mj,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function ta(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, ta(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && ia(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function na(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function ra(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (a[e.defId] = e.def);
	}
	e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? i.$defs = a : i.definitions = a);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: Pj(t, "input", e.processors),
					output: Pj(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function ia(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return ia(r.element, n);
	if (r.type === "set") return ia(r.valueType, n);
	if (r.type === "lazy") return ia(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return ia(r.innerType, n);
	if (r.type === "intersection") return ia(r.left, n) || ia(r.right, n);
	if (r.type === "record" || r.type === "map") return ia(r.keyType, n) || ia(r.valueType, n);
	if (r.type === "pipe") return ia(r.in, n) || ia(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (ia(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (ia(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (ia(e, n)) return !0;
		return !!(r.rest && ia(r.rest, n));
	}
	return !1;
}
function aa(e) {
	return /* @__PURE__ */ yi(nM, e);
}
function oa(e) {
	return /* @__PURE__ */ bi(rM, e);
}
function sa(e) {
	return /* @__PURE__ */ xi(iM, e);
}
function ca(e) {
	return /* @__PURE__ */ Si(aM, e);
}
function la(e) {
	return /* @__PURE__ */ Xr(CM, e);
}
function ua(e) {
	return /* @__PURE__ */ Ci(WM, e);
}
function da(e) {
	return /* @__PURE__ */ wi(GM, e);
}
function fa() {
	return /* @__PURE__ */ Ti(KM);
}
function pa(e) {
	return /* @__PURE__ */ Ei(qM, e);
}
function ma(e) {
	return /* @__PURE__ */ Di(JM, e);
}
function ha(e, t) {
	return /* @__PURE__ */ Ji(YM, e, t);
}
function ga(e, t) {
	return new XM({
		type: "object",
		shape: e ?? {},
		...U(t)
	});
}
function _a(e, t) {
	return new ZM({
		type: "union",
		options: e,
		...U(t)
	});
}
function va(e, t) {
	return new QM({
		type: "intersection",
		left: e,
		right: t
	});
}
function ya(e, t) {
	return new $M({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...U(t)
	});
}
function ba(e, t) {
	return new $M({
		type: "enum",
		entries: e,
		...U(t)
	});
}
function xa(e) {
	return new eN({
		type: "transform",
		transform: e
	});
}
function Sa(e) {
	return new tN({
		type: "optional",
		innerType: e
	});
}
function Ca(e) {
	return new nN({
		type: "optional",
		innerType: e
	});
}
function wa(e) {
	return new rN({
		type: "nullable",
		innerType: e
	});
}
function Ta(e, t) {
	return new iN({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ur(t);
		}
	});
}
function Ea(e, t) {
	return new aN({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ur(t);
		}
	});
}
function Da(e, t) {
	return new oN({
		type: "nonoptional",
		innerType: e,
		...U(t)
	});
}
function Oa(e, t) {
	return new sN({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
function ka(e, t) {
	return new cN({
		type: "pipe",
		in: e,
		out: t
	});
}
function Aa(e) {
	return new lN({
		type: "readonly",
		innerType: e
	});
}
function ja(e, t = {}) {
	return /* @__PURE__ */ Yi(uN, e, t);
}
function Ma(e) {
	return /* @__PURE__ */ Xi(e);
}
function Na(e) {
	if (e.status === sk.POSTED) throw new hN(e.id);
}
//#endregion
//#region ../utilities/src/lib/utility-allocation-service.ts
function Pa(e) {
	switch (e) {
		case sk.DRAFT: return sk.DRAFT;
		case sk.PROCESSING: return sk.PROCESSING;
		case sk.APPROVED: return sk.APPROVED;
		case sk.POSTED: return sk.POSTED;
		default: return sk.DRAFT;
	}
}
function Fa(e) {
	return {
		id: e.id,
		status: Pa(e.status),
		totalAmount: Number(e.totalAmount)
	};
}
function Ia(e, t) {
	let n = e.reduce((e, t) => e + (t.customRatio ?? 0), 0);
	return Math.abs(n - 1) > 1e-4 ? null : e.map((e) => {
		let n = e.customRatio ?? 0, r = Math.round(n * 1e4) / 100, i = Math.floor(n * t * 100) / 100;
		return {
			unitId: e.unitId,
			amount: i,
			percentage: r
		};
	});
}
function La(e) {
	return typeof e == "function" ? e : (t) => t.$extends(e);
}
function Ra(e) {
	return e;
}
function eee(...e) {
	return (e) => e;
}
function za(e, t) {
	let n = RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
	return function(e) {
		return !eP.enabled || e == null ? e : r + (~("" + e).indexOf(i) ? e.replace(n, i + r) : e) + i;
	};
}
function Ba(e) {
	let t = {
		color: OP[jP++ % OP.length],
		enabled: NP.enabled(e),
		namespace: e,
		log: NP.log,
		extend: () => {}
	};
	return new Proxy((...e) => {
		let { enabled: n, namespace: r, color: i, log: a } = t;
		if (e.length !== 0 && kP.push([r, ...e]), kP.length > DP && kP.shift(), NP.enabled(r) || n) {
			let t = e.map((e) => typeof e == "string" ? e : Va(e)), n = `+${Date.now() - AP}ms`;
			AP = Date.now(), globalThis.DEBUG_COLORS ? a(JN[i](nP(r)), ...t, JN[i](n)) : a(r, ...t, n);
		}
	}, {
		get: (e, n) => t[n],
		set: (e, n, r) => t[n] = r
	});
}
function Va(e, t = 2) {
	let n = /* @__PURE__ */ new Set();
	return JSON.stringify(e, (e, t) => {
		if (typeof t == "object" && t) {
			if (n.has(t)) return "[Circular *]";
			n.add(t);
		} else if (typeof t == "bigint") return t.toString();
		return t;
	}, t);
}
function Ha(e) {
	return Object.assign(e, {
		optional: () => Ua(e),
		and: (t) => Wa(e, t),
		or: (t) => Ga(e, t),
		select: (t) => t === void 0 ? qa(e) : qa(t, e)
	});
}
function Ua(e) {
	return Ha({ [LP]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return t === void 0 ? (UP(e).forEach((e) => r(e, void 0)), {
				matched: !0,
				selections: n
			}) : {
				matched: HP(e, t, r),
				selections: n
			};
		},
		getSelectionKeys: () => UP(e),
		matcherType: "optional"
	}) });
}
function Wa(...e) {
	return Ha({ [LP]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return {
				matched: e.every((e) => HP(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => WP(e, UP),
		matcherType: "and"
	}) });
}
function Ga(...e) {
	return Ha({ [LP]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return WP(e, UP).forEach((e) => r(e, void 0)), {
				matched: e.some((e) => HP(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => WP(e, UP),
		matcherType: "or"
	}) });
}
function Ka(e) {
	return { [LP]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function qa(...e) {
	let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
	return Ha({ [LP]: () => ({
		match: (e) => {
			let r = { [t ?? zP]: e };
			return {
				matched: n === void 0 || HP(n, e, (e, t) => {
					r[e] = t;
				}),
				selections: r
			};
		},
		getSelectionKeys: () => [t ?? zP].concat(n === void 0 ? [] : UP(n))
	}) });
}
function Ja(e) {
	return typeof e == "number";
}
function Ya(e) {
	return typeof e == "string";
}
function Xa(e) {
	return typeof e == "bigint";
}
function Za(e, t, { target: n = "stdout", ...r } = {}) {
	return BF.default[n] ? $P.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
}
function Qa(e) {
	let t = (0, GF.default)(e);
	if (t === 0) return e;
	let n = RegExp(`^[ \\t]{${t}}`, "gm");
	return e.replace(n, "");
}
function $a(e) {
	return e?.toString().startsWith(`${KF}//`) ?? !1;
}
function eo(e) {
	if (!$a(e)) return !1;
	let { host: t } = new URL(e);
	return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
}
function to(...e) {
	console.log(...e);
}
function no(e, ...t) {
	XF.warn() && console.warn(`${YF.warn} ${e}`, ...t);
}
function ro(e, ...t) {
	console.info(`${YF.info} ${e}`, ...t);
}
function io(e, ...t) {
	console.error(`${YF.error} ${e}`, ...t);
}
function ao(e, ...t) {
	console.log(`${YF.query} ${e}`, ...t);
}
function oo(e, t) {
	throw Error(t);
}
function so({ onlyFirst: e = !1 } = {}) {
	let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
	return new RegExp(t, e ? void 0 : "g");
}
function co(e) {
	if (typeof e != "string") throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);
	return e.replace(ZF, "");
}
function lo(e, t) {
	if (e.length === 0) return;
	let n = e[0];
	for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
	return n;
}
function uo(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
function fo(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function po(e) {
	return e.toString() !== "Invalid Date";
}
function mo(e) {
	var t, n, r, i = e.length - 1, a = "", o = e[0];
	if (i > 0) {
		for (a += o, t = 1; t < i; t++) r = e[t] + "", n = G - r.length, n && (a += To(n)), a += r;
		o = e[t], r = o + "", n = G - r.length, n && (a += To(n));
	} else if (o === 0) return "0";
	for (; o % 10 == 0;) o /= 10;
	return a + o;
}
function ho(e, t, n) {
	if (e !== ~~e || e < t || e > n) throw Error(mI + e);
}
function go(e, t, n, r) {
	var i, a, o, s;
	for (a = e[0]; a >= 10; a /= 10) --t;
	return --t < 0 ? (t += G, i = 0) : (i = Math.ceil((t + 1) / G), t %= G), a = yI(10, G - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == yI(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == yI(10, t - 3) - 1, o;
}
function _o(e, t, n) {
	for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
		for (a = i.length; a--;) i[a] *= t;
		for (i[0] += sI.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
	}
	return i.reverse();
}
function vo(e, t) {
	var n, r, i;
	if (t.isZero()) return t;
	r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Io(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Fo(e, 1, t.times(i), new e(1));
	for (var a = n; a--;) {
		var o = t.times(t);
		t = o.times(o).minus(o).times(8).plus(1);
	}
	return e.precision -= n, t;
}
function yo(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor;
	e: if (t != null) {
		if (d = e.d, !d) return e;
		for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
		if (a = t - i, a < 0) a += G, o = t, u = d[f = 0], c = u / yI(10, i - o - 1) % 10 | 0;
		else if (f = Math.ceil((a + 1) / G), s = d.length, f >= s) if (r) {
			for (; s++ <= f;) d.push(0);
			u = c = 0, i = 1, a %= G, o = a - G + 1;
		} else break e;
		else {
			for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
			a %= G, o = a - G + i, c = o < 0 ? 0 : u / yI(10, i - o - 1) % 10 | 0;
		}
		if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % yI(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / yI(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = yI(10, (G - t % G) % G), e.e = -t || 0) : d[0] = e.e = 0, e;
		if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = yI(10, G - a), d[f] = o > 0 ? (u / yI(10, i - o) % yI(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
			for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
			for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
			a != s && (e.e++, d[0] == wI && (d[0] = 1));
			break;
		} else {
			if (d[f] += s, d[f] != wI) break;
			d[f--] = 0, s = 1;
		}
		for (a = d.length; d[--a] === 0;) d.pop();
	}
	return W && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function bo(e, t, n) {
	if (!e.isFinite()) return jo(e);
	var r, i = e.e, a = mo(e.d), o = a.length;
	return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + To(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + To(-i - 1) + a, n && (r = n - o) > 0 && (a += To(r))) : i >= o ? (a += To(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + To(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += To(r))), a;
}
function xo(e, t) {
	var n = e[0];
	for (t *= G; n >= 10; n /= 10) t++;
	return t;
}
function So(e, t, n) {
	if (t > EI) throw W = !0, n && (e.precision = n), Error(hI);
	return yo(new e(cI), t, 1, !0);
}
function Co(e, t, n) {
	if (t > DI) throw Error(hI);
	return yo(new e(lI), t, n, !0);
}
function wo(e) {
	var t = e.length - 1, n = t * G + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) n--;
		for (t = e[0]; t >= 10; t /= 10) n++;
	}
	return n;
}
function To(e) {
	for (var t = ""; e--;) t += "0";
	return t;
}
function Eo(e, t, n, r) {
	var i, a = new e(1), o = Math.ceil(r / G + 4);
	for (W = !1;;) {
		if (n % 2 && (a = a.times(t), zo(a.d, o) && (i = !0)), n = vI(n / 2), n === 0) {
			n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
			break;
		}
		t = t.times(t), zo(t.d, o);
	}
	return W = !0, a;
}
function Do(e) {
	return e.d[e.d.length - 1] & 1;
}
function Oo(e, t, n) {
	for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
		if (i = new e(t[o]), !i.s) {
			a = i;
			break;
		}
		r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
	}
	return a;
}
function ko(e, t) {
	var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
	if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
	for (t == null ? (W = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
	for (r = Math.log(yI(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
		if (a = yo(a.times(e), c, 1), n = n.times(++u), s = o.plus(kI(a, n, c, 1)), mo(s.d).slice(0, c) === mo(o.d).slice(0, c)) {
			for (i = d; i--;) o = yo(o.times(o), c, 1);
			if (t == null) if (l < 3 && go(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
			else return yo(o, f.precision = m, p, W = !0);
			else return f.precision = m, o;
		}
		o = s;
	}
}
function Ao(e, t) {
	var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
	if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
	if (t == null ? (W = !1, u = y) : u = t, _.precision = u += m, n = mo(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
		for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = mo(h.d), r = n.charAt(0), p++;
		a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
	} else return l = So(_, u + 2, y).times(a + ""), h = Ao(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? yo(h, y, v, W = !0) : h;
	for (d = h, c = o = h = kI(h.minus(1), h.plus(1), u, 1), f = yo(h.times(h), u, 1), i = 3;;) {
		if (o = yo(o.times(f), u, 1), l = c.plus(kI(o, new _(i), u, 1)), mo(l.d).slice(0, u) === mo(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(So(_, u + 2, y).times(a + ""))), c = kI(c, new _(p), u, 1), t == null) if (go(c.d, u - m, v, s)) _.precision = u += m, l = o = h = kI(d.minus(1), d.plus(1), u, 1), f = yo(h.times(h), u, 1), i = s = 1;
		else return yo(c, _.precision = y, v, W = !0);
		else return _.precision = y, c;
		c = l, i += 2;
	}
}
function jo(e) {
	return String(e.s * e.s / 0);
}
function Mo(e, t) {
	var n, r, i;
	for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
	for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
	if (t = t.slice(r, i), t) {
		if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % G, n < 0 && (r += G), r < i) {
			for (r && e.d.push(+t.slice(0, r)), i -= G; r < i;) e.d.push(+t.slice(r, r += G));
			t = t.slice(r), r = G - t.length;
		} else r -= i;
		for (; r--;) t += "0";
		e.d.push(+t), W && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function No(e, t) {
	var n, r, i, a, o, s, c, l, u;
	if (t.indexOf("_") > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, "$1"), CI.test(t)) return Mo(e, t);
	} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	if (xI.test(t)) n = 16, t = t.toLowerCase();
	else if (bI.test(t)) n = 2;
	else if (SI.test(t)) n = 8;
	else throw Error(mI + t);
	for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Eo(r, new r(n), a, a * 2)), l = _o(t, n, wI), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
	return a < 0 ? new r(e.s * 0) : (e.e = xo(l, u), e.d = l, W = !1, o && (e = kI(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? yI(2, c) : AI.pow(2, c))), W = !0, e);
}
function Po(e, t) {
	var n, r = t.d.length;
	if (r < 3) return t.isZero() ? t : Fo(e, 2, t, t);
	n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Io(5, n)), t = Fo(e, 2, t, t);
	for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
	return t;
}
function Fo(e, t, n, r, i) {
	var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / G);
	for (W = !1, c = n.times(n), s = new e(r);;) {
		if (o = kI(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = kI(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
			for (a = d; o.d[a] === s.d[a] && a--;);
			if (a == -1) break;
		}
		a = s, s = r, r = o, o = a, l++;
	}
	return W = !0, o.d.length = d + 1, o;
}
function Io(e, t) {
	for (var n = e; --t;) n *= e;
	return n;
}
function Lo(e, t) {
	var n, r = t.s < 0, i = Co(e, e.precision, 1), a = i.times(.5);
	if (t = t.abs(), t.lte(a)) return fI = r ? 4 : 1, t;
	if (n = t.divToInt(i), n.isZero()) fI = r ? 3 : 2;
	else {
		if (t = t.minus(n.times(i)), t.lte(a)) return fI = Do(n) ? r ? 2 : 3 : r ? 4 : 1, t;
		fI = Do(n) ? r ? 1 : 4 : r ? 3 : 2;
	}
	return t.minus(i).abs();
}
function Ro(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
	if (m ? (ho(n, 1, oI), r === void 0 ? r = p.rounding : ho(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = jo(e);
	else {
		for (u = bo(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = _o(bo(f), 10, i), f.e = f.d.length), d = _o(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
		if (!d[0]) u = m ? "0p+0" : "0";
		else {
			if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = kI(e, f, n, r, 0, i), d = e.d, a = e.e, l = dI), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
			for (c = d.length; !d[c - 1]; --c);
			for (o = 0, u = ""; o < c; o++) u += sI.charAt(d[o]);
			if (m) {
				if (c > 1) if (t == 16 || t == 8) {
					for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
					for (d = _o(u, i, t), c = d.length; !d[c - 1]; --c);
					for (o = 1, u = "1."; o < c; o++) u += sI.charAt(d[o]);
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
function zo(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function Bo(e) {
	return new this(e).abs();
}
function Vo(e) {
	return new this(e).acos();
}
function Ho(e) {
	return new this(e).acosh();
}
function Uo(e, t) {
	return new this(e).plus(t);
}
function Wo(e) {
	return new this(e).asin();
}
function Go(e) {
	return new this(e).asinh();
}
function Ko(e) {
	return new this(e).atan();
}
function qo(e) {
	return new this(e).atanh();
}
function Jo(e, t) {
	e = new this(e), t = new this(t);
	var n, r = this.precision, i = this.rounding, a = r + 4;
	return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Co(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Co(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Co(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(kI(e, t, a, 1)), t = Co(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(kI(e, t, a, 1)), n;
}
function Yo(e) {
	return new this(e).cbrt();
}
function Xo(e) {
	return yo(e = new this(e), e.e + 1, 2);
}
function Zo(e, t, n) {
	return new this(e).clamp(t, n);
}
function Qo(e) {
	if (!e || typeof e != "object") throw Error(pI + "Object expected");
	var t, n, r, i = e.defaults === !0, a = [
		"precision",
		1,
		oI,
		"rounding",
		0,
		8,
		"toExpNeg",
		-aI,
		0,
		"toExpPos",
		0,
		aI,
		"maxE",
		0,
		aI,
		"minE",
		-aI,
		0,
		"modulo",
		0,
		9
	];
	for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = uI[n]), (r = e[n]) !== void 0) if (vI(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
	else throw Error(mI + n + ": " + r);
	if (n = "crypto", i && (this[n] = uI[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
	else throw Error(gI);
	else this[n] = !1;
	else throw Error(mI + n + ": " + r);
	return this;
}
function $o(e) {
	return new this(e).cos();
}
function es(e) {
	return new this(e).cosh();
}
function ts(e) {
	var t, n, r;
	function i(e) {
		var t, n, r, a = this;
		if (!(a instanceof i)) return new i(e);
		if (a.constructor = i, os(e)) {
			a.s = e.s, W ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
			return;
		}
		if (r = typeof e, r === "number") {
			if (e === 0) {
				a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
				return;
			}
			if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
				for (t = 0, n = e; n >= 10; n /= 10) t++;
				W ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
				return;
			}
			if (e * 0 != 0) {
				e || (a.s = NaN), a.e = NaN, a.d = null;
				return;
			}
			return Mo(a, e.toString());
		}
		if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), CI.test(e) ? Mo(a, e) : No(a, e);
		if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Mo(a, e.toString());
		throw Error(mI + e);
	}
	if (i.prototype = OI, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Qo, i.clone = ts, i.isDecimal = os, i.abs = Bo, i.acos = Vo, i.acosh = Ho, i.add = Uo, i.asin = Wo, i.asinh = Go, i.atan = Ko, i.atanh = qo, i.atan2 = Jo, i.cbrt = Yo, i.ceil = Xo, i.clamp = Zo, i.cos = $o, i.cosh = es, i.div = ns, i.exp = rs, i.floor = is, i.hypot = as, i.ln = ss, i.log = cs, i.log10 = us, i.log2 = ls, i.max = ds, i.min = fs, i.mod = ps, i.mul = ms, i.pow = hs, i.random = gs, i.round = _s, i.sign = vs, i.sin = ys, i.sinh = bs, i.sqrt = xs, i.sub = Ss, i.sum = Cs, i.tan = ws, i.tanh = Ts, i.trunc = Es, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
function ns(e, t) {
	return new this(e).div(t);
}
function rs(e) {
	return new this(e).exp();
}
function is(e) {
	return yo(e = new this(e), e.e + 1, 3);
}
function as() {
	var e, t, n = new this(0);
	for (W = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
	else {
		if (t.s) return W = !0, new this(Infinity);
		n = t;
	}
	return W = !0, n.sqrt();
}
function os(e) {
	return e instanceof AI || e && e.toStringTag === _I || !1;
}
function ss(e) {
	return new this(e).ln();
}
function cs(e, t) {
	return new this(e).log(t);
}
function ls(e) {
	return new this(e).log(2);
}
function us(e) {
	return new this(e).log(10);
}
function ds() {
	return Oo(this, arguments, -1);
}
function fs() {
	return Oo(this, arguments, 1);
}
function ps(e, t) {
	return new this(e).mod(t);
}
function ms(e, t) {
	return new this(e).mul(t);
}
function hs(e, t) {
	return new this(e).pow(t);
}
function gs(e) {
	var t, n, r, i, a = 0, o = new this(1), s = [];
	if (e === void 0 ? e = this.precision : ho(e, 1, oI), r = Math.ceil(e / G), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
	else if (crypto.randomBytes) {
		for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
		a = r / 4;
	} else throw Error(gI);
	else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
	for (r = s[--a], e %= G, r && e && (i = yI(10, G - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
	if (a < 0) n = 0, s = [0];
	else {
		for (n = -1; s[0] === 0; n -= G) s.shift();
		for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
		r < G && (n -= G - r);
	}
	return o.e = n, o.d = s, o;
}
function _s(e) {
	return yo(e = new this(e), e.e + 1, this.rounding);
}
function vs(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function ys(e) {
	return new this(e).sin();
}
function bs(e) {
	return new this(e).sinh();
}
function xs(e) {
	return new this(e).sqrt();
}
function Ss(e, t) {
	return new this(e).sub(t);
}
function Cs() {
	var e = 0, t = arguments, n = new this(t[e]);
	for (W = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
	return W = !0, yo(n, this.precision, this.rounding);
}
function ws(e) {
	return new this(e).tan();
}
function Ts(e) {
	return new this(e).tanh();
}
function Es(e) {
	return yo(e = new this(e), e.e + 1, 1);
}
function Ds(e) {
	return AI.isDecimal(e) ? !0 : typeof e == "object" && !!e && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
function Os(e) {
	return {
		name: e.name,
		values: e.values.map((e) => e.name)
	};
}
function ks(e, t, n, r, i) {
	this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
function As(e) {
	return FI[e] || II;
}
function js(e) {
	return Ms(e, zI.languages.javascript);
}
function Ms(e, t) {
	return zI.tokenize(e, t).map((e) => ks.stringify(e)).join("");
}
function Ns(e) {
	return Qa(e);
}
function Ps({ message: e, originalMethod: t, isPanic: n, callArguments: r }) {
	return {
		functionName: `prisma.${t}()`,
		message: e,
		isPanic: n ?? !1,
		callArguments: r
	};
}
function Fs({ callsite: e, message: t, originalMethod: n, isPanic: r, callArguments: i }, a) {
	let o = Ps({
		message: t,
		originalMethod: n,
		isPanic: r,
		callArguments: i
	});
	if (!e || typeof window < "u" || p.env.NODE_ENV === "production") return o;
	let s = e.getLocation();
	if (!s || !s.lineNumber || !s.columnNumber) return o;
	let c = Math.max(1, s.lineNumber - 3), l = BI.read(s.fileName)?.slice(c, s.lineNumber), u = l?.lineAt(s.lineNumber);
	if (l && u) {
		let e = Ls(u), t = Is(u);
		if (!t) return o;
		o.functionName = `${t.code})`, o.location = s, r || (l = l.mapLineAt(s.lineNumber, (e) => e.slice(0, t.openingBraceIndex))), l = a.highlightSource(l);
		let n = String(l.lastLineNumber).length;
		if (o.contextLines = l.mapLines((e, t) => a.gray(String(t).padStart(n)) + " " + e).mapLines((e) => a.dim(e)).prependSymbolAt(s.lineNumber, a.bold(a.red("→"))), i) {
			let t = e + n + 1;
			t += 2, o.callArguments = (0, PI.default)(i, t).slice(t);
		}
	}
	return o;
}
function Is(e) {
	let t = Object.keys(NI).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
	if (n) {
		let t = n.index + n[0].length, r = e.lastIndexOf(" ", n.index) + 1;
		return {
			code: e.slice(r, t),
			openingBraceIndex: t
		};
	}
	return null;
}
function Ls(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		if (e.charAt(n) !== " ") return t;
		t++;
	}
	return t;
}
function Rs({ functionName: e, location: t, message: n, isPanic: r, contextLines: i, callArguments: a }, o) {
	let s = [""], c = t ? " in" : ":";
	if (r ? (s.push(o.red(`Oops, an unknown error occurred! This is ${o.bold("on us")}, you did nothing wrong.`)), s.push(o.red(`It occurred in the ${o.bold(`\`${e}\``)} invocation${c}`))) : s.push(o.red(`Invalid ${o.bold(`\`${e}\``)} invocation${c}`)), t && s.push(o.underline(zs(t))), i) {
		s.push("");
		let e = [i.toString()];
		a && (e.push(a), e.push(o.dim(")"))), s.push(e.join("")), a && s.push("");
	} else s.push(""), a && s.push(a), s.push("");
	return s.push(n), s.join("\n");
}
function zs(e) {
	let t = [e.fileName];
	return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
}
function Bs(e) {
	let t = e.showColors ? VI : HI, n;
	return n = Fs(e, t), Rs(n, t);
}
function Vs(e, t, n) {
	let r = Gs(Us(Hs(e)));
	r ? Js(r, t, n) : t.addErrorMessage(() => "Unknown error");
}
function Hs(e) {
	return e.errors.flatMap((e) => e.kind === "Union" ? Hs(e) : [e]);
}
function Us(e) {
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
				typeNames: Ws(i.argument.typeNames, r.argument.typeNames)
			}
		}) : t.set(e, r);
	}
	return n.push(...t.values()), n;
}
function Ws(e, t) {
	return [...new Set(e.concat(t))];
}
function Gs(e) {
	return lo(e, (e, t) => {
		let n = Ks(e), r = Ks(t);
		return n === r ? qs(e) - qs(t) : n - r;
	});
}
function Ks(e) {
	let t = 0;
	return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function qs(e) {
	switch (e.kind) {
		case "InvalidArgumentValue":
		case "ValueTooLarge": return 20;
		case "InvalidArgumentType": return 10;
		case "RequiredArgumentMissing": return -10;
		default: return 0;
	}
}
function Js(e, t, n) {
	switch (e.kind) {
		case "MutuallyExclusiveFields":
			Ys(e, t);
			break;
		case "IncludeOnScalar":
			Xs(e, t);
			break;
		case "EmptySelection":
			Zs(e, t, n);
			break;
		case "UnknownSelectionField":
			tc(e, t);
			break;
		case "InvalidSelectionValue":
			nc(e, t);
			break;
		case "UnknownArgument":
			rc(e, t);
			break;
		case "UnknownInputField":
			ic(e, t);
			break;
		case "RequiredArgumentMissing":
			oc(e, t);
			break;
		case "InvalidArgumentType":
			cc(e, t);
			break;
		case "InvalidArgumentValue":
			lc(e, t);
			break;
		case "ValueTooLarge":
			uc(e, t);
			break;
		case "SomeFieldsMissing":
			dc(e, t);
			break;
		case "TooManyFieldsGiven":
			fc(e, t);
			break;
		case "Union":
			Vs(e, t, n);
			break;
		default: throw Error("not implemented: " + e.kind);
	}
}
function Ys(e, t) {
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	n && (n.getField(e.firstField)?.markAsError(), n.getField(e.secondField)?.markAsError()), t.addErrorMessage((t) => `Please ${t.bold("either")} use ${t.green(`\`${e.firstField}\``)} or ${t.green(`\`${e.secondField}\``)}, but ${t.red("not both")} at the same time.`);
}
function Xs(e, t) {
	let [n, r] = yc(e.selectionPath), i = e.outputType, a = t.arguments.getDeepSelectionParent(n)?.value;
	if (a && (a.getField(r)?.markAsError(), i)) for (let e of i.fields) e.isRelation && a.addSuggestion(new WI(e.name, "true"));
	t.addErrorMessage((e) => {
		let t = `Invalid scalar field ${e.red(`\`${r}\``)} for ${e.bold("include")} statement`;
		return i ? t += ` on model ${e.bold(i.name)}. ${bc(e)}` : t += ".", t += `
Note that ${e.bold("include")} statements only accept relation fields.`, t;
	});
}
function Zs(e, t, n) {
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let n = r.getField("omit")?.value.asObject();
		if (n) {
			Qs(e, t, n);
			return;
		}
		if (r.hasField("select")) {
			$s(e, t);
			return;
		}
	}
	if (n?.[fo(e.outputType.name)]) {
		ec(e, t);
		return;
	}
	t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function Qs(e, t, n) {
	n.removeAllFields();
	for (let t of e.outputType.fields) n.addSuggestion(new WI(t.name, "false"));
	t.addErrorMessage((t) => `The ${t.red("omit")} statement includes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function $s(e, t) {
	let n = e.outputType, r = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = r?.isEmpty() ?? !1;
	r && (r.removeAllFields(), pc(r, n)), t.addErrorMessage((e) => i ? `The ${e.red("`select`")} statement for type ${e.bold(n.name)} must not be empty. ${bc(e)}` : `The ${e.red("`select`")} statement for type ${e.bold(n.name)} needs ${e.bold("at least one truthy value")}.`);
}
function ec(e, t) {
	let n = new nL();
	for (let t of e.outputType.fields) t.isRelation || n.addField(t.name, "false");
	let r = new WI("omit", n).makeRequired();
	if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
	else {
		let [n, i] = yc(e.selectionPath), a = t.arguments.getDeepSelectionParent(n)?.value.asObject()?.getField(i);
		if (a) {
			let e = a?.value.asObject() ?? new eL();
			e.addSuggestion(r), a.value = e;
		}
	}
	t.addErrorMessage((t) => `The global ${t.red("omit")} configuration excludes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function tc(e, t) {
	let n = _c(e.selectionPath, t);
	if (n.parentKind !== "unknown") {
		n.field.markAsError();
		let t = n.parent;
		switch (n.parentKind) {
			case "select":
				pc(t, e.outputType);
				break;
			case "include":
				mc(t, e.outputType);
				break;
			case "omit":
				hc(t, e.outputType);
				break;
		}
	}
	t.addErrorMessage((t) => {
		let r = [`Unknown field ${t.red(`\`${n.fieldName}\``)}`];
		return n.parentKind !== "unknown" && r.push(`for ${t.bold(n.parentKind)} statement`), r.push(`on model ${t.bold(`\`${e.outputType.name}\``)}.`), r.push(bc(t)), r.join(" ");
	});
}
function nc(e, t) {
	let n = _c(e.selectionPath, t);
	n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((t) => `Invalid value for selection field \`${t.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function rc(e, t) {
	let n = e.argumentPath[0], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && (r.getField(n)?.markAsError(), gc(r, e.arguments)), t.addErrorMessage((t) => ac(t, n, e.arguments.map((e) => e.name)));
}
function ic(e, t) {
	let [n, r] = yc(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (i) {
		i.getDeepField(e.argumentPath)?.markAsError();
		let t = i.getDeepFieldValue(n)?.asObject();
		t && vc(t, e.inputType);
	}
	t.addErrorMessage((t) => ac(t, r, e.inputType.fields.map((e) => e.name)));
}
function ac(e, t, n) {
	let r = [`Unknown argument \`${e.red(t)}\`.`], i = Sc(t, n);
	return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(bc(e)), r.join(" ");
}
function oc(e, t) {
	let n;
	t.addErrorMessage((e) => n?.value instanceof tL && n.value.text === "null" ? `Argument \`${e.green(a)}\` must not be ${e.red("null")}.` : `Argument \`${e.green(a)}\` is missing.`);
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (!r) return;
	let [i, a] = yc(e.argumentPath), o = new nL(), s = r.getDeepFieldValue(i)?.asObject();
	if (s) {
		if (n = s.getField(a), n && s.removeField(a), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
			for (let t of e.inputTypes[0].fields) o.addField(t.name, t.typeNames.join(" | "));
			s.addSuggestion(new WI(a, o).makeRequired());
		} else {
			let t = e.inputTypes.map(sc).join(" | ");
			s.addSuggestion(new WI(a, t).makeRequired());
		}
		if (e.dependentArgumentPath) {
			r.getDeepField(e.dependentArgumentPath)?.markAsError();
			let [, n] = yc(e.dependentArgumentPath);
			t.addErrorMessage((e) => `Argument \`${e.green(a)}\` is required because argument \`${e.green(n)}\` was provided.`);
		}
	}
}
function sc(e) {
	return e.kind === "list" ? `${sc(e.elementType)}[]` : e.name;
}
function cc(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = xc("or", e.argument.typeNames.map((e) => t.green(e)));
		return `Argument \`${t.bold(n)}\`: Invalid value provided. Expected ${r}, provided ${t.red(e.inferredType)}.`;
	});
}
function lc(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = [`Invalid value for argument \`${t.bold(n)}\``];
		if (e.underlyingError && r.push(`: ${e.underlyingError}`), r.push("."), e.argument.typeNames.length > 0) {
			let n = xc("or", e.argument.typeNames.map((e) => t.green(e)));
			r.push(` Expected ${n}.`);
		}
		return r.join("");
	});
}
function uc(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
	if (r) {
		let t = r.getDeepField(e.argumentPath)?.value;
		t?.markAsError(), t instanceof tL && (i = t.text);
	}
	t.addErrorMessage((e) => {
		let t = ["Unable to fit value"];
		return i && t.push(e.red(i)), t.push(`into a 64-bit signed integer for field \`${e.bold(n)}\``), t.join(" ");
	});
}
function dc(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && vc(t, e.inputType);
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? r.push(`${t.green("at least one of")} ${xc("or", e.constraints.requiredFields.map((e) => `\`${t.bold(e)}\``))} arguments.`) : r.push(`${t.green("at least one")} argument.`) : r.push(`${t.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), r.push(bc(t)), r.join(" ");
	});
}
function fc(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && (t.markAsError(), i = Object.keys(t.getFields()));
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? r.push(`${t.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? r.push(`${t.green("at most one")} argument,`) : r.push(`${t.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), r.push(`but you provided ${xc("and", i.map((e) => t.red(e)))}. Please choose`), e.constraints.maxFieldCount === 1 ? r.push("one.") : r.push(`${e.constraints.maxFieldCount}.`), r.join(" ");
	});
}
function pc(e, t) {
	for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new WI(n.name, "true"));
}
function mc(e, t) {
	for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new WI(n.name, "true"));
}
function hc(e, t) {
	for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new WI(n.name, "true"));
}
function gc(e, t) {
	for (let n of t) e.hasField(n.name) || e.addSuggestion(new WI(n.name, n.typeNames.join(" | ")));
}
function _c(e, t) {
	let [n, r] = yc(e), i = t.arguments.getDeepSubSelectionValue(n)?.asObject();
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
function vc(e, t) {
	if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new WI(n.name, n.typeNames.join(" | ")));
}
function yc(e) {
	let t = [...e], n = t.pop();
	if (!n) throw Error("unexpected empty path");
	return [t, n];
}
function bc({ green: e, enabled: t }) {
	return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function xc(e, t) {
	if (t.length === 1) return t[0];
	let n = [...t], r = n.pop();
	return `${n.join(", ")} ${e} ${r}`;
}
function Sc(e, t) {
	let n = Infinity, r;
	for (let i of t) {
		let t = (0, UI.default)(e, i);
		t > rL || t < n && (n = t, r = i);
	}
	return r;
}
function Cc(e) {
	return e instanceof iL;
}
function wc(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
function Tc(e) {
	return new hL(Ec(e));
}
function Ec(e) {
	let t = new eL();
	for (let [n, r] of Object.entries(e)) {
		let e = new mL(n, Dc(r));
		t.addField(e);
	}
	return t;
}
function Dc(e) {
	return typeof e == "string" ? new tL(JSON.stringify(e)) : typeof e == "number" || typeof e == "boolean" ? new tL(String(e)) : typeof e == "bigint" ? new tL(`${e}n`) : e === null ? new tL("null") : e === void 0 ? new tL("undefined") : Ds(e) ? new tL(`new Prisma.Decimal("${e.toFixed()}")`) : e instanceof Uint8Array ? Buffer.isBuffer(e) ? new tL(`Buffer.alloc(${e.byteLength})`) : new tL(`new Uint8Array(${e.byteLength})`) : e instanceof Date ? new tL(`new Date("${po(e) ? e.toISOString() : "Invalid Date"}")`) : e instanceof sL ? new tL(`Prisma.${e._getName()}`) : Cc(e) ? new tL(`prisma.${fo(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Oc(e) : typeof e == "object" ? Ec(e) : new tL(Object.prototype.toString.call(e));
}
function Oc(e) {
	let t = new $I();
	for (let n of e) t.addItem(Dc(n));
	return t;
}
function kc(e, t) {
	let n = t === "pretty" ? YI : JI;
	return {
		message: e.renderAllMessages(n),
		args: new GI(0, { colors: n }).write(e).toString()
	};
}
function Ac({ args: e, errors: t, errorFormat: n, callsite: r, originalMethod: i, clientVersion: a, globalOmit: o }) {
	let s = Tc(e);
	for (let e of t) Js(e, s, o);
	let { message: c, args: l } = kc(s, n);
	throw new iI(Bs({
		message: c,
		callsite: r,
		originalMethod: i,
		showColors: n === "pretty",
		callArguments: l
	}), { clientVersion: a });
}
function jc(e) {
	return new bL([e], []);
}
function Mc(e, t) {
	return {
		batch: e,
		transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0
	};
}
function Nc({ error: e, user_facing_error: t }, n, r) {
	return t.error_code ? new tI(Pc(t, r), {
		code: t.error_code,
		clientVersion: n,
		meta: t.meta,
		batchRequestIdx: t.batch_request_idx
	}) : new rI(e, {
		clientVersion: n,
		batchRequestIdx: t.batch_request_idx
	});
}
function Pc(e, t) {
	let n = e.message;
	return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === SL && (n += "\nPrisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate"), n;
}
function Fc(e) {
	return (t) => {
		let n = { requests: t }, r = t[0].extensions.getAllBatchQueryCallbacks();
		return r.length ? Ic(n, r, 0, e) : e(n);
	};
}
function Ic(e, t, n, r) {
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
			return o.customDataProxyFetch = Lc(i, s), Ic(o, t, n + 1, r);
		}
	});
}
function Lc(e = EL, t = EL) {
	return (n) => e(t(n));
}
function Rc(e, t) {
	throw Error(t);
}
function zc(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
function Bc(e, t) {
	let n = {};
	for (let r of Object.keys(e)) n[r] = t(e[r], r);
	return n;
}
function Vc(e) {
	return e === null ? e : Array.isArray(e) ? e.map(Vc) : typeof e == "object" ? zc(e) ? Hc(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : Bc(e, Vc) : e;
}
function Hc({ $type: e, value: t }) {
	switch (e) {
		case "BigInt": return BigInt(t);
		case "Bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "DateTime": return new Date(t);
		case "Decimal": return new AI(t);
		case "Json": return JSON.parse(t);
		default: Rc(t, "Unknown tagged value");
	}
}
function Uc({ inlineDatasources: e, overrideDatasources: t, env: n, clientVersion: r }) {
	let i, a = Object.keys(e)[0], o = e[a]?.url, s = t[a]?.url;
	if (a === void 0 ? i = void 0 : s ? i = s : o?.value ? i = o.value : o?.fromEnvVar && (i = n[o.fromEnvVar]), o?.fromEnvVar !== void 0 && i === void 0) throw new eI(`error: Environment variable not found: ${o.fromEnvVar}.`, r);
	if (i === void 0) throw new eI("error: Missing URL environment variable, value, or override.", r);
	return i;
}
function Wc(e, t) {
	return {
		...e,
		isRetryable: t
	};
}
function Gc(e) {
	let t = { clientVersion: e.clientVersion }, n = Object.keys(e.inlineDatasources)[0], r = Uc({
		inlineDatasources: e.inlineDatasources,
		overrideDatasources: e.overrideDatasources,
		clientVersion: e.clientVersion,
		env: {
			...e.env,
			...typeof p < "u" ? p.env : {}
		}
	}), i;
	try {
		i = new URL(r);
	} catch {
		throw new PL(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, t);
	}
	let { protocol: a, searchParams: o } = i;
	if (a !== "prisma:" && a !== KF) throw new PL(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
	let s = o.get("api_key");
	if (s === null || s.length < 1) throw new PL(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, t);
	let c = eo(i) ? "http:" : "https:";
	return p.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (c = "http:"), {
		apiKey: s,
		url: new URL(i.href.replace(a, c))
	};
}
function Kc(e) {
	return e[0] * 1e3 + e[1] / 1e6;
}
function qc(e) {
	return new Date(Kc(e));
}
async function Jc(e) {
	let t;
	try {
		t = await e.text();
	} catch {
		return { type: "EmptyError" };
	}
	try {
		let e = JSON.parse(t);
		if (typeof e == "string") switch (e) {
			case "InternalDataProxyError": return {
				type: "DataProxyError",
				body: e
			};
			default: return {
				type: "UnknownTextError",
				body: e
			};
		}
		if (typeof e == "object" && e) {
			if ("is_panic" in e && "message" in e && "error_code" in e) return {
				type: "QueryEngineError",
				body: e
			};
			if ("EngineNotStarted" in e || "InteractiveTransactionMisrouted" in e || "InvalidRequestError" in e) {
				let t = Object.values(e)[0].reason;
				return typeof t == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(t) ? {
					type: "UnknownJsonError",
					body: e
				} : {
					type: "DataProxyError",
					body: e
				};
			}
		}
		return {
			type: "UnknownJsonError",
			body: e
		};
	} catch {
		return t === "" ? { type: "EmptyError" } : {
			type: "UnknownTextError",
			body: t
		};
	}
}
async function Yc(e, t) {
	if (e.ok) return;
	let n = {
		clientVersion: t,
		response: e
	}, r = await Jc(e);
	if (r.type === "QueryEngineError") throw new tI(r.body.message, {
		code: r.body.error_code,
		clientVersion: t
	});
	if (r.type === "DataProxyError") {
		if (r.body === "InternalDataProxyError") throw new tR(n, "Internal Data Proxy error");
		if ("EngineNotStarted" in r.body) {
			if (r.body.EngineNotStarted.reason === "SchemaMissing") return new BL(n);
			if (r.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new GL(n);
			if ("EngineStartupError" in r.body.EngineNotStarted.reason) {
				let { msg: e, logs: t } = r.body.EngineNotStarted.reason.EngineStartupError;
				throw new WL(n, e, t);
			}
			if ("KnownEngineStartupError" in r.body.EngineNotStarted.reason) {
				let { msg: e, error_code: n } = r.body.EngineNotStarted.reason.KnownEngineStartupError;
				throw new eI(e, t, n);
			}
			if ("HealthcheckTimeout" in r.body.EngineNotStarted.reason) {
				let { logs: e } = r.body.EngineNotStarted.reason.HealthcheckTimeout;
				throw new UL(n, e);
			}
		}
		if ("InteractiveTransactionMisrouted" in r.body) throw new YL(n, {
			IDParseError: "Could not parse interactive transaction ID",
			NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
			TransactionStartError: "Could not start interactive transaction"
		}[r.body.InteractiveTransactionMisrouted.reason]);
		if ("InvalidRequestError" in r.body) throw new ZL(n, r.body.InvalidRequestError.reason);
	}
	if (e.status === 401 || e.status === 403) throw new rR(n, Xc(nR, r));
	if (e.status === 404) return new $L(n, Xc(QL, r));
	if (e.status === 429) throw new aR(n, Xc(iR, r));
	if (e.status === 504) throw new qL(n, Xc(KL, r));
	if (e.status >= 500) throw new tR(n, Xc(eR, r));
	if (e.status >= 400) throw new HL(n, Xc(VL, r));
}
function Xc(e, t) {
	return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
function Zc(e) {
	let t = 2 ** e * 50, n = t + (Math.ceil(Math.random() * t) - Math.ceil(t / 2));
	return new Promise((e) => setTimeout(() => e(n), n));
}
function Qc(e) {
	let t = new TextEncoder().encode(e), n = "", r = t.byteLength, i = r % 3, a = r - i, o, s, c, l, u;
	for (let e = 0; e < a; e += 3) u = t[e] << 16 | t[e + 1] << 8 | t[e + 2], o = (u & 16515072) >> 18, s = (u & 258048) >> 12, c = (u & 4032) >> 6, l = u & 63, n += oR[o] + oR[s] + oR[c] + oR[l];
	return i == 1 ? (u = t[a], o = (u & 252) >> 2, s = (u & 3) << 4, n += oR[o] + oR[s] + "==") : i == 2 && (u = t[a] << 8 | t[a + 1], o = (u & 64512) >> 10, s = (u & 1008) >> 4, c = (u & 15) << 2, n += oR[o] + oR[s] + oR[c] + "="), n;
}
function $c(e) {
	if (e.generator?.previewFeatures.some((e) => e.toLowerCase().includes("metrics"))) throw new eI("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
async function el(e, t, n = (e) => e) {
	let { clientVersion: r, ...i } = t, a = n(fetch);
	try {
		return await a(e, i);
	} catch (e) {
		throw new cR(e.message ?? "Unknown error", {
			clientVersion: r,
			cause: e
		});
	}
}
async function tl(e, t) {
	let n = sR["@prisma/engines-version"], r = t.clientVersion ?? "unknown";
	if (p.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return p.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
	if (e.includes("accelerate") && r !== "0.0.0" && r !== "in-memory") return r;
	let [i, a] = r?.split("-") ?? [];
	if (a === void 0 && lR.test(i)) return i;
	if (a !== void 0 || r === "0.0.0" || r === "in-memory") {
		let [e] = n.split("-") ?? [], [t, i, a] = e.split("."), o = await el(rl(`<=${t}.${i}.${a}`), { clientVersion: r });
		if (!o.ok) throw Error(`Failed to fetch stable Prisma version, unpkg.com status ${o.status} ${o.statusText}, response body: ${await o.text() || "<empty body>"}`);
		let s = await o.text();
		uR("length of body fetched from unpkg.com", s.length);
		let c;
		try {
			c = JSON.parse(s);
		} catch (e) {
			throw console.error("JSON.parse error: body fetched from unpkg.com: ", s), e;
		}
		return c.version;
	}
	throw new RL("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: r });
}
async function nl(e, t) {
	let n = await tl(e, t);
	return uR("version", n), n;
}
function rl(e) {
	return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
function il(e) {
	return typeof e.batchRequestIdx == "number";
}
function al(e) {
	if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
	let t = [];
	return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ol(e.query.arguments)), t.push(ol(e.query.selection)), t.join("");
}
function ol(e) {
	return `(${Object.keys(e).sort().map((t) => {
		let n = e[t];
		return typeof n == "object" && n ? `(${t} ${ol(n)})` : t;
	}).join(" ")})`;
}
function sl(e) {
	return wR[e];
}
function cl(e, t) {
	if (t === null) return t;
	switch (e) {
		case "bigint": return BigInt(t);
		case "bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "decimal": return new jI(t);
		case "datetime":
		case "date": return new Date(t);
		case "time": return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
		case "bigint-array": return t.map((e) => cl("bigint", e));
		case "bytes-array": return t.map((e) => cl("bytes", e));
		case "decimal-array": return t.map((e) => cl("decimal", e));
		case "datetime-array": return t.map((e) => cl("datetime", e));
		case "date-array": return t.map((e) => cl("date", e));
		case "time-array": return t.map((e) => cl("time", e));
		default: return t;
	}
}
function ll(e) {
	let t = [], n = ul(e);
	for (let r = 0; r < e.rows.length; r++) {
		let i = e.rows[r], a = { ...n };
		for (let t = 0; t < i.length; t++) a[e.columns[t]] = cl(e.types[t], i[t]);
		t.push(a);
	}
	return t;
}
function ul(e) {
	let t = {};
	for (let n = 0; n < e.columns.length; n++) t[e.columns[n]] = null;
	return t;
}
function dl(e) {
	if (e) {
		if (e.kind === "batch") return {
			kind: "batch",
			options: { isolationLevel: e.isolationLevel }
		};
		if (e.kind === "itx") return {
			kind: "itx",
			options: fl(e)
		};
		oo(e, "Unknown transaction kind");
	}
}
function fl(e) {
	return {
		id: e.id,
		payload: e.payload
	};
}
function pl(e, t) {
	return il(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function ml(e) {
	return e.code === "P2009" || e.code === "P2012";
}
function hl(e) {
	if (e.kind === "Union") return {
		kind: "Union",
		errors: e.errors.map(hl)
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
function gl(e) {
	let t = process.env[e];
	if (!t) throw Error(`Missing required environment variable: ${e}`);
	return t;
}
function _l(e, t) {
	if (e.type in C0.builtinStrategies) return C0.builtinStrategies[e.type](e.delay, e.jitter);
	if (t) return t;
	throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`);
}
function vl(e, t, n) {
	try {
		return e.apply(t, n);
	} catch (e) {
		return o7.value = e, o7;
	}
}
function yl(e) {
	return Buffer.byteLength(e, "utf8");
}
function bl(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function xl(e) {
	let t = {};
	for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
	return t;
}
function Sl(e) {
	let t = [];
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] !== void 0 && (t[t.length] = n, t[t.length] = e[n]);
	return t;
}
function Cl(e, t) {
	return new Promise((n) => {
		let r, i = () => {
			t?.signal.removeEventListener("abort", i), clearTimeout(r), n();
		};
		r = setTimeout(i, e), t?.signal.addEventListener("abort", i);
	});
}
function wl(e, t) {
	let n = e.getMaxListeners();
	e.setMaxListeners(n + t);
}
function Tl(e) {
	return Object.entries(e).reduce((e, [t, n]) => (e[n] = t, e), {});
}
function El(e) {
	return e ? [
		"connect",
		"disconnect",
		"duplicate"
	].every((t) => typeof e[t] == "function") : !1;
}
function Dl(e) {
	return El(e) && e.isCluster;
}
function Ol(e, t) {
	wl(e, -t);
}
function kl(e) {
	if (e) return `${e.queue}:${e.id}`;
}
function Al(e) {
	let { code: t, message: n } = e;
	return n !== i7.CONNECTION_CLOSED_ERROR_MSG && !n.includes("ECONNREFUSED") && t !== "ECONNREFUSED";
}
function jl(e) {
	let t = {};
	for (let n in e) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
async function Ml(e, t, n, r, i, a, o) {
	if (e) {
		let { tracer: s, contextManager: c } = e, l = c.active(), u;
		o && (u = c.fromMetadata(l, o));
		let d = i ? `${r} ${i}` : r, f = s.startSpan(d, { kind: t }, u);
		try {
			f.setAttributes({
				[O0.QueueName]: n,
				[O0.QueueOperation]: r
			});
			let e, i;
			return e = t === A0.CONSUMER && u ? f.setSpanOnContext(u) : f.setSpanOnContext(l), a.length == 2 && (i = c.getMetadata(e)), await c.with(e, () => a(f, i));
		} catch (e) {
			throw f.recordException(e), e;
		} finally {
			f.end();
		}
	} else return a();
}
function Nl(e, t = 0) {
	return (K[e[t + 0]] + K[e[t + 1]] + K[e[t + 2]] + K[e[t + 3]] + "-" + K[e[t + 4]] + K[e[t + 5]] + "-" + K[e[t + 6]] + K[e[t + 7]] + "-" + K[e[t + 8]] + K[e[t + 9]] + "-" + K[e[t + 10]] + K[e[t + 11]] + K[e[t + 12]] + K[e[t + 13]] + K[e[t + 14]] + K[e[t + 15]]).toLowerCase();
}
function Pl() {
	if (!_7) {
		if (typeof crypto > "u" || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
		_7 = crypto.getRandomValues.bind(crypto);
	}
	return _7(v7);
}
//#endregion
//#region ../../node_modules/bullmq/node_modules/uuid/dist/esm-browser/v4.js
function Fl(e, t, n) {
	if (b7.randomUUID && !t && !e) return b7.randomUUID();
	e ||= {};
	let r = e.random ?? e.rng?.() ?? Pl();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Nl(r);
}
function Il(e) {
	try {
		if (!Y.trusted && !F7) {
			let e = X.sharedLength || 0;
			e < X.length && (X.length = e);
		}
		let t;
		if (Y.randomAccessStructure && q[J] < 64 && q[J] >= 32 && L7 ? (t = L7(q, J, S7, Y), q = null, !(e && e.lazy) && t && (t = t.toJSON()), J = S7) : t = Rl(), k7 &&= (J = k7.postBundlePosition, null), F7 && (X.restoreStructures = null), J == S7) X && X.restoreStructures && Ll(), X = null, q = null, A7 &&= null;
		else if (J > S7) throw Error("Unexpected end of MessagePack data");
		else if (!F7) {
			let e;
			try {
				e = JSON.stringify(t, (e, t) => typeof t == "bigint" ? `${t}n` : t).slice(0, 100);
			} catch (t) {
				e = "(JSON view not available " + t + ")";
			}
			throw Error("Data read, but end of buffer not reached " + e);
		}
		return t;
	} catch (e) {
		throw X && X.restoreStructures && Ll(), Ql(), (e instanceof RangeError || e.message.startsWith("Unexpected end of buffer") || J > S7) && (e.incomplete = !0), e;
	}
}
function Ll() {
	for (let e in X.restoreStructures) X[e] = X.restoreStructures[e];
	X.restoreStructures = null;
}
function Rl() {
	let e = q[J++];
	if (e < 160) if (e < 128) {
		if (e < 64) return e;
		{
			let t = X[e & 63] || Y.getStructures && Bl()[e & 63];
			return t ? (t.read ||= zl(t, e & 63), t.read()) : e;
		}
	} else if (e < 144) if (e -= 128, Y.mapsAsObjects) {
		let t = {};
		for (let n = 0; n < e; n++) {
			let e = Yl();
			e === "__proto__" && (e = "__proto_"), t[e] = Rl();
		}
		return t;
	} else {
		let t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e; n++) t.set(Rl(), Rl());
		return t;
	}
	else {
		e -= 144;
		let t = Array(e);
		for (let n = 0; n < e; n++) t[n] = Rl();
		return Y.freezeData ? Object.freeze(t) : t;
	}
	else if (e < 192) {
		let t = e - 160;
		if (O7 >= J) return E7.slice(J - D7, (J += t) - D7);
		if (O7 == 0 && S7 < 140) {
			let e = t < 16 ? Gl(t) : Wl(t);
			if (e != null) return e;
		}
		return U7(t);
	} else {
		let t;
		switch (e) {
			case 192: return null;
			case 193: return k7 ? (t = Rl(), t > 0 ? k7[1].slice(k7.position1, k7.position1 += t) : k7[0].slice(k7.position0, k7.position0 -= t)) : P7;
			case 194: return !1;
			case 195: return !0;
			case 196:
				if (t = q[J++], t === void 0) throw Error("Unexpected end of buffer");
				return ql(t);
			case 197: return t = Z.getUint16(J), J += 2, ql(t);
			case 198: return t = Z.getUint32(J), J += 4, ql(t);
			case 199: return Jl(q[J++]);
			case 200: return t = Z.getUint16(J), J += 2, Jl(t);
			case 201: return t = Z.getUint32(J), J += 4, Jl(t);
			case 202:
				if (t = Z.getFloat32(J), Y.useFloat32 > 2) {
					let e = $7[(q[J] & 127) << 1 | q[J + 1] >> 7];
					return J += 4, (e * t + (t > 0 ? .5 : -.5) >> 0) / e;
				}
				return J += 4, t;
			case 203: return t = Z.getFloat64(J), J += 8, t;
			case 204: return q[J++];
			case 205: return t = Z.getUint16(J), J += 2, t;
			case 206: return t = Z.getUint32(J), J += 4, t;
			case 207: return Y.int64AsType === "number" ? (t = Z.getUint32(J) * 4294967296, t += Z.getUint32(J + 4)) : Y.int64AsType === "string" ? t = Z.getBigUint64(J).toString() : Y.int64AsType === "auto" ? (t = Z.getBigUint64(J), t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = Z.getBigUint64(J), J += 8, t;
			case 208: return Z.getInt8(J++);
			case 209: return t = Z.getInt16(J), J += 2, t;
			case 210: return t = Z.getInt32(J), J += 4, t;
			case 211: return Y.int64AsType === "number" ? (t = Z.getInt32(J) * 4294967296, t += Z.getUint32(J + 4)) : Y.int64AsType === "string" ? t = Z.getBigInt64(J).toString() : Y.int64AsType === "auto" ? (t = Z.getBigInt64(J), t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = Z.getBigInt64(J), J += 8, t;
			case 212:
				if (t = q[J++], t == 114) return J7(q[J++] & 63);
				{
					let e = j7[t];
					if (e) return e.read ? (J++, e.read(Rl())) : e.noBuffer ? (J++, e()) : e(q.subarray(J, ++J));
					throw Error("Unknown extension " + t);
				}
			case 213: return t = q[J], t == 114 ? (J++, J7(q[J++] & 63, q[J++])) : Jl(2);
			case 214: return Jl(4);
			case 215: return Jl(8);
			case 216: return Jl(16);
			case 217: return t = q[J++], O7 >= J ? E7.slice(J - D7, (J += t) - D7) : W7(t);
			case 218: return t = Z.getUint16(J), J += 2, O7 >= J ? E7.slice(J - D7, (J += t) - D7) : G7(t);
			case 219: return t = Z.getUint32(J), J += 4, O7 >= J ? E7.slice(J - D7, (J += t) - D7) : K7(t);
			case 220: return t = Z.getUint16(J), J += 2, Hl(t);
			case 221: return t = Z.getUint32(J), J += 4, Hl(t);
			case 222: return t = Z.getUint16(J), J += 2, Ul(t);
			case 223: return t = Z.getUint32(J), J += 4, Ul(t);
			default:
				if (e >= 224) return e - 256;
				if (e === void 0) {
					let e = /* @__PURE__ */ Error("Unexpected end of MessagePack data");
					throw e.incomplete = !0, e;
				}
				throw Error("Unknown MessagePack token " + e);
		}
	}
}
function zl(e, t) {
	function n() {
		if (n.count++ > I7) {
			let n = e.read = Function("r", "return function(){return " + (Y.freezeData ? "Object.freeze" : "") + "({" + e.map((e) => e === "__proto__" ? "__proto_:r()" : V7.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()").join(",") + "})}")(Rl);
			return e.highByte === 0 && (e.read = H7(t, e.read)), n();
		}
		let r = {};
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			n === "__proto__" && (n = "__proto_"), r[n] = Rl();
		}
		return Y.freezeData ? Object.freeze(r) : r;
	}
	return n.count = 0, e.highByte === 0 ? H7(t, n) : n;
}
function Bl() {
	let e = Zl(() => (q = null, Y.getStructures()));
	return X = Y._mergeStructures(e, X);
}
function Vl(e) {
	let t;
	if (e < 16 && (t = Gl(e))) return t;
	if (e > 64 && x7) return x7.decode(q.subarray(J, J += e));
	let n = J + e, r = [];
	for (t = ""; J < n;) {
		let e = q[J++];
		if (!(e & 128)) r.push(e);
		else if ((e & 224) == 192) {
			let t = q[J++] & 63;
			r.push((e & 31) << 6 | t);
		} else if ((e & 240) == 224) {
			let t = q[J++] & 63, n = q[J++] & 63;
			r.push((e & 31) << 12 | t << 6 | n);
		} else if ((e & 248) == 240) {
			let t = q[J++] & 63, n = q[J++] & 63, i = q[J++] & 63, a = (e & 7) << 18 | t << 12 | n << 6 | i;
			a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a);
		} else r.push(e);
		r.length >= 4096 && (t += Q.apply(String, r), r.length = 0);
	}
	return r.length > 0 && (t += Q.apply(String, r)), t;
}
function Hl(e) {
	let t = Array(e);
	for (let n = 0; n < e; n++) t[n] = Rl();
	return Y.freezeData ? Object.freeze(t) : t;
}
function Ul(e) {
	if (Y.mapsAsObjects) {
		let t = {};
		for (let n = 0; n < e; n++) {
			let e = Yl();
			e === "__proto__" && (e = "__proto_"), t[e] = Rl();
		}
		return t;
	} else {
		let t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e; n++) t.set(Rl(), Rl());
		return t;
	}
}
function Wl(e) {
	let t = J, n = Array(e);
	for (let r = 0; r < e; r++) {
		let e = q[J++];
		if ((e & 128) > 0) {
			J = t;
			return;
		}
		n[r] = e;
	}
	return Q.apply(String, n);
}
function Gl(e) {
	if (e < 4) if (e < 2) {
		if (e === 0) return "";
		{
			let e = q[J++];
			if ((e & 128) > 1) {
				--J;
				return;
			}
			return Q(e);
		}
	} else {
		let t = q[J++], n = q[J++];
		if ((t & 128) > 0 || (n & 128) > 0) {
			J -= 2;
			return;
		}
		if (e < 3) return Q(t, n);
		let r = q[J++];
		if ((r & 128) > 0) {
			J -= 3;
			return;
		}
		return Q(t, n, r);
	}
	else {
		let t = q[J++], n = q[J++], r = q[J++], i = q[J++];
		if ((t & 128) > 0 || (n & 128) > 0 || (r & 128) > 0 || (i & 128) > 0) {
			J -= 4;
			return;
		}
		if (e < 6) {
			if (e === 4) return Q(t, n, r, i);
			{
				let e = q[J++];
				if ((e & 128) > 0) {
					J -= 5;
					return;
				}
				return Q(t, n, r, i, e);
			}
		} else if (e < 8) {
			let a = q[J++], o = q[J++];
			if ((a & 128) > 0 || (o & 128) > 0) {
				J -= 6;
				return;
			}
			if (e < 7) return Q(t, n, r, i, a, o);
			let s = q[J++];
			if ((s & 128) > 0) {
				J -= 7;
				return;
			}
			return Q(t, n, r, i, a, o, s);
		} else {
			let a = q[J++], o = q[J++], s = q[J++], c = q[J++];
			if ((a & 128) > 0 || (o & 128) > 0 || (s & 128) > 0 || (c & 128) > 0) {
				J -= 8;
				return;
			}
			if (e < 10) {
				if (e === 8) return Q(t, n, r, i, a, o, s, c);
				{
					let e = q[J++];
					if ((e & 128) > 0) {
						J -= 9;
						return;
					}
					return Q(t, n, r, i, a, o, s, c, e);
				}
			} else if (e < 12) {
				let l = q[J++], u = q[J++];
				if ((l & 128) > 0 || (u & 128) > 0) {
					J -= 10;
					return;
				}
				if (e < 11) return Q(t, n, r, i, a, o, s, c, l, u);
				let d = q[J++];
				if ((d & 128) > 0) {
					J -= 11;
					return;
				}
				return Q(t, n, r, i, a, o, s, c, l, u, d);
			} else {
				let l = q[J++], u = q[J++], d = q[J++], f = q[J++];
				if ((l & 128) > 0 || (u & 128) > 0 || (d & 128) > 0 || (f & 128) > 0) {
					J -= 12;
					return;
				}
				if (e < 14) {
					if (e === 12) return Q(t, n, r, i, a, o, s, c, l, u, d, f);
					{
						let e = q[J++];
						if ((e & 128) > 0) {
							J -= 13;
							return;
						}
						return Q(t, n, r, i, a, o, s, c, l, u, d, f, e);
					}
				} else {
					let p = q[J++], m = q[J++];
					if ((p & 128) > 0 || (m & 128) > 0) {
						J -= 14;
						return;
					}
					if (e < 15) return Q(t, n, r, i, a, o, s, c, l, u, d, f, p, m);
					let h = q[J++];
					if ((h & 128) > 0) {
						J -= 15;
						return;
					}
					return Q(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
				}
			}
		}
	}
}
function Kl() {
	let e = q[J++], t;
	if (e < 192) t = e - 160;
	else switch (e) {
		case 217:
			t = q[J++];
			break;
		case 218:
			t = Z.getUint16(J), J += 2;
			break;
		case 219:
			t = Z.getUint32(J), J += 4;
			break;
		default: throw Error("Expected string");
	}
	return Vl(t);
}
function ql(e) {
	return Y.copyBuffers ? Uint8Array.prototype.slice.call(q, J, J += e) : q.subarray(J, J += e);
}
function Jl(e) {
	let t = q[J++];
	if (j7[t]) {
		let n;
		return j7[t](q.subarray(J, n = J += e), (e) => {
			J = e;
			try {
				return Rl();
			} finally {
				J = n;
			}
		});
	} else throw Error("Unknown extension type " + t);
}
function Yl() {
	let e = q[J++];
	if (e >= 160 && e < 192) {
		if (e -= 160, O7 >= J) return E7.slice(J - D7, (J += e) - D7);
		if (!(O7 == 0 && S7 < 180)) return U7(e);
	} else return J--, Xl(Rl());
	let t = (e << 5 ^ (e > 1 ? Z.getUint16(J) : e > 0 ? q[J] : 0)) & 4095, n = q7[t], r = J, i = J + e - 3, a, o = 0;
	if (n && n.bytes == e) {
		for (; r < i;) {
			if (a = Z.getUint32(r), a != n[o++]) {
				r = 1879048192;
				break;
			}
			r += 4;
		}
		for (i += 3; r < i;) if (a = q[r++], a != n[o++]) {
			r = 1879048192;
			break;
		}
		if (r === i) return J = r, n.string;
		i -= 3, r = J;
	}
	for (n = [], q7[t] = n, n.bytes = e; r < i;) a = Z.getUint32(r), n.push(a), r += 4;
	for (i += 3; r < i;) a = q[r++], n.push(a);
	let s = e < 16 ? Gl(e) : Wl(e);
	return s == null ? n.string = U7(e) : n.string = s;
}
function Xl(e) {
	if (typeof e == "string") return e;
	if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return e.toString();
	if (e == null) return e + "";
	if (Y.allowArraysInMapKeys && Array.isArray(e) && e.flat().every((e) => [
		"string",
		"number",
		"boolean",
		"bigint"
	].includes(typeof e))) return e.flat().toString();
	throw Error(`Invalid property type for record: ${typeof e}`);
}
function Zl(e) {
	z7 && z7();
	let t = S7, n = J, r = T7, i = D7, a = O7, o = E7, s = w7, c = A7, l = k7, u = new Uint8Array(q.slice(0, S7)), d = X, f = X.slice(0, X.length), p = Y, m = F7, h = e();
	return S7 = t, J = n, T7 = r, D7 = i, O7 = a, E7 = o, w7 = s, A7 = c, k7 = l, q = u, F7 = m, X = d, X.splice(0, X.length, ...f), Y = p, Z = new DataView(q.buffer, q.byteOffset, q.byteLength), h;
}
function Ql() {
	q = null, A7 = null, X = null;
}
function $l(e, t, n, r) {
	let i = e.byteLength;
	if (i + 1 < 256) {
		var { target: a, position: o } = n(4 + i);
		a[o++] = 199, a[o++] = i + 1;
	} else if (i + 1 < 65536) {
		var { target: a, position: o } = n(5 + i);
		a[o++] = 200, a[o++] = i + 1 >> 8, a[o++] = i + 1 & 255;
	} else {
		var { target: a, position: o, targetView: s } = n(7 + i);
		a[o++] = 201, s.setUint32(o, i + 1), o += 4;
	}
	a[o++] = 116, a[o++] = t, e.buffer || (e = new Uint8Array(e)), a.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), o);
}
function eu(e, t) {
	let n = e.byteLength;
	var r, i;
	if (n < 256) {
		var { target: r, position: i } = t(n + 2);
		r[i++] = 196, r[i++] = n;
	} else if (n < 65536) {
		var { target: r, position: i } = t(n + 3);
		r[i++] = 197, r[i++] = n >> 8, r[i++] = n & 255;
	} else {
		var { target: r, position: i, targetView: a } = t(n + 5);
		r[i++] = 198, a.setUint32(i, n), i += 4;
	}
	r.set(e, i);
}
function tu(e, t, n, r) {
	let i = e.length;
	switch (i) {
		case 1:
			t[n++] = 212;
			break;
		case 2:
			t[n++] = 213;
			break;
		case 4:
			t[n++] = 214;
			break;
		case 8:
			t[n++] = 215;
			break;
		case 16:
			t[n++] = 216;
			break;
		default: i < 256 ? (t[n++] = 199, t[n++] = i) : i < 65536 ? (t[n++] = 200, t[n++] = i >> 8, t[n++] = i & 255) : (t[n++] = 201, t[n++] = i >> 24, t[n++] = i >> 16 & 255, t[n++] = i >> 8 & 255, t[n++] = i & 255);
	}
	return t[n++] = r, t.set(e, n), n += i, n;
}
function nu(e, t) {
	let n, r = t.length * 6, i = e.length - r;
	for (; n = t.pop();) {
		let t = n.offset, a = n.id;
		e.copyWithin(t + r, t, i), r -= 6;
		let o = t + r;
		e[o++] = 214, e[o++] = 105, e[o++] = a >> 24, e[o++] = a >> 16 & 255, e[o++] = a >> 8 & 255, e[o++] = a & 255, i = t;
	}
	return e;
}
function ru(e, t, n) {
	if (y9.length > 0) {
		g9.setUint32(y9.position + e, _9 + n - y9.position - e), y9.stringsPosition = _9 - e;
		let r = y9;
		y9 = null, t(r[0]), t(r[1]);
	}
}
function iu(e, t) {
	return e.isCompatible = (e) => {
		let n = !e || (t.lastNamedStructuresLength || 0) === e.length;
		return n || t._mergeStructures(e), n;
	}, e;
}
function au(e) {
	if (e) {
		let t = [
			null,
			e[1],
			e[2],
			e[3]
		];
		return e[0] && (t[0] = xl(e[0])), t;
	}
	return [];
}
function ou(e) {
	if (!e) return [];
	let t = vl(JSON.parse, JSON, [e]);
	return t === o7 || !(t instanceof Array) ? [] : t;
}
function su(e) {
	let t = vl(JSON.parse, JSON, [e]);
	if (t !== o7) return t;
	z9("corrupted returnvalue: " + e, t);
}
function cu(e, t) {
	let n = t.endDate ? new Date(t.endDate).getTime() : "", r = t.tz || "", i = t.pattern || String(t.every) || "";
	return `${e}:${t.jobId ? t.jobId : ""}:${n}:${r}:${i}`;
}
function lu(e, t) {
	q9(e, t);
	function n() {
		this.constructor = e;
	}
	e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function uu(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function du(e, t, n, r) {
	function i(e) {
		return e instanceof n ? e : new n(function(t) {
			t(e);
		});
	}
	return new (n ||= Promise)(function(n, a) {
		function o(e) {
			try {
				c(r.next(e));
			} catch (e) {
				a(e);
			}
		}
		function s(e) {
			try {
				c(r.throw(e));
			} catch (e) {
				a(e);
			}
		}
		function c(e) {
			e.done ? n(e.value) : i(e.value).then(o, s);
		}
		c((r = r.apply(e, t || [])).next());
	});
}
function fu(e, t) {
	var n = {
		label: 0,
		sent: function() {
			if (a[0] & 1) throw a[1];
			return a[1];
		},
		trys: [],
		ops: []
	}, r, i, a, o;
	return o = {
		next: s(0),
		throw: s(1),
		return: s(2)
	}, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
		return this;
	}), o;
	function s(e) {
		return function(t) {
			return c([e, t]);
		};
	}
	function c(o) {
		if (r) throw TypeError("Generator is already executing.");
		for (; n;) try {
			if (r = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
			switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
				case 0:
				case 1:
					a = o;
					break;
				case 4: return n.label++, {
					value: o[1],
					done: !1
				};
				case 5:
					n.label++, i = o[1], o = [0];
					continue;
				case 7:
					o = n.ops.pop(), n.trys.pop();
					continue;
				default:
					if ((a = n.trys, !(a = a.length > 0 && a[a.length - 1])) && (o[0] === 6 || o[0] === 2)) {
						n = 0;
						continue;
					}
					if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
						n.label = o[1];
						break;
					}
					if (o[0] === 6 && n.label < a[1]) {
						n.label = a[1], a = o;
						break;
					}
					if (a && n.label < a[2]) {
						n.label = a[2], n.ops.push(o);
						break;
					}
					a[2] && n.ops.pop(), n.trys.pop();
					continue;
			}
			o = t.call(e, n);
		} catch (e) {
			o = [6, e], i = 0;
		} finally {
			r = a = 0;
		}
		if (o[0] & 5) throw o[1];
		return {
			value: o[0] ? o[1] : void 0,
			done: !0
		};
	}
}
function pu() {
	for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
	for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++) r[i] = a[o];
	return r;
}
function mu(e) {
	if (!(e instanceof Y9) && !(e instanceof X9)) throw new J9([Y9, X9], e);
}
//#endregion
//#region src/lib/pdf-generator.ts
async function hu(e, t) {
	let n = await e.embedFont(Q9.Helvetica), r = await e.embedFont(Q9.HelveticaBold), i = e.addPage(), { width: a, height: o } = i.getSize(), s = 50, c = o - 50;
	i.drawRectangle({
		x: 0,
		y: o - 100,
		width: a,
		height: 100,
		color: $(.1, .2, .4)
	}), i.drawText("CERTIFICATE OF COMPLETION", {
		x: 50,
		y: o - 60,
		size: 24,
		font: r,
		color: $(1, 1, 1)
	}), i.drawText("Document Signing Audit Trail", {
		x: 50,
		y: o - 85,
		size: 12,
		font: n,
		color: $(.8, .8, .8)
	}), c = o - 130, i.drawText("DOCUMENT INFORMATION", {
		x: 50,
		y: c,
		size: 14,
		font: r,
		color: $(.1, .2, .4)
	}), c -= 25;
	let l = [
		`Document ID: ${t.id}`,
		`Title: ${t.title}`,
		`Status: ${t.status}`,
		`Completed At: ${t.completedAt ? new Date(t.completedAt).toISOString() : "N/A"}`,
		`Organization ID: ${t.organizationId}`
	];
	for (let e of l) i.drawText(e, {
		x: 50,
		y: c,
		size: 10,
		font: n,
		color: $(0, 0, 0)
	}), c -= 18;
	c -= 15, i.drawText("SIGNER INFORMATION", {
		x: 50,
		y: c,
		size: 14,
		font: r,
		color: $(.1, .2, .4)
	}), c -= 25;
	for (let e of t.signatures) {
		let t = e.participant, a = [
			`Name: ${t.fullName || "N/A"}`,
			`Email: ${t.email}`,
			`Role: ${t.role}`,
			`Signed At: ${e.signedAt ? new Date(e.signedAt).toISOString() : "N/A"}`,
			`IP Address: ${e.ipAddress || "N/A"}`,
			`User-Agent: ${e.userAgent || "N/A"}`,
			`Signature Hash: ${e.signatureHash}`
		];
		i.drawText(`${t.fullName || t.email} (${t.role})`, {
			x: 50,
			y: c,
			size: 11,
			font: r,
			color: $(.2, .2, .2)
		}), c -= 18;
		for (let e of a) {
			if (c < 100) break;
			i.drawText(e, {
				x: 70,
				y: c,
				size: 9,
				font: n,
				color: $(.4, .4, .4)
			}), c -= 15;
		}
		c -= 10;
	}
	c -= 10, i.drawRectangle({
		x: 50,
		y: c - 10,
		width: a - 100,
		height: 1,
		color: $(.8, .8, .8)
	}), c -= 30, i.drawText("This certificate serves as legal proof that the document above was executed by the identified parties.", {
		x: 50,
		y: c,
		size: 8,
		font: n,
		color: $(.5, .5, .5)
	}), c -= 15, i.drawText(`Certificate Generated: ${(/* @__PURE__ */ new Date()).toISOString()}`, {
		x: 50,
		y: c,
		size: 8,
		font: n,
		color: $(.5, .5, .5)
	}), c -= 15, i.drawText(`Document Hash: ${t.finalPdfSha256Hex || "N/A"}`, {
		x: 50,
		y: c,
		size: 8,
		font: n,
		color: $(.5, .5, .5)
	});
}
async function gu(e, t) {
	let n = await T.dssDocument.findUnique({
		where: { id: e },
		include: {
			fields: { include: { participant: !0 } },
			signatures: { include: { participant: !0 } }
		}
	});
	if (!n) throw Error(`Document ${e} not found`);
	if (!n.originalFileUrl) throw Error(`Document ${e} has no original PDF`);
	let r = await nk.downloadDocument(n.originalFileUrl), i = await $9.load(r), a = i.getPages(), o = await i.embedFont(Q9.Helvetica), s = new Map(n.signatures.map((e) => [e.participantId, e]));
	for (let e of n.fields) {
		let t = e.pageNumber - 1;
		if (t < 0 || t >= a.length) {
			console.warn(`Field ${e.id} references invalid page ${e.pageNumber}`);
			continue;
		}
		let n = a[t], { width: r, height: i } = n.getSize(), c = e.x / 100 * r, l = i - e.y / 100 * i, u = s.get(e.participantId), d = e.participant.fullName || e.participant.email;
		switch (e.type) {
			case "SIGNATURE":
				if (u) {
					let e = u.signedAt ? u.signedAt.toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
					n.drawText(`Signed by: ${d}`, {
						x: c,
						y: l - 10,
						size: 8,
						font: o,
						color: $(0, 0, .5)
					}), n.drawText(`Date: ${e}`, {
						x: c,
						y: l - 20,
						size: 8,
						font: o,
						color: $(0, 0, .5)
					}), n.drawText(`Hash: ${u.signatureHash.substring(0, 16)}...`, {
						x: c,
						y: l - 30,
						size: 6,
						font: o,
						color: $(.5, .5, .5)
					});
				} else n.drawText(`[Signature: ${d}]`, {
					x: c,
					y: l,
					size: 10,
					font: o,
					color: $(.7, 0, 0)
				});
				break;
			case "DATE":
				let t = u?.signedAt ? u.signedAt.toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
				n.drawText(t, {
					x: c,
					y: l,
					size: 10,
					font: o,
					color: $(0, 0, 0)
				});
				break;
			case "INITIALS":
				let r = d.split(" ").map((e) => e[0]).join("").toUpperCase().substring(0, 3);
				n.drawText(r, {
					x: c,
					y: l,
					size: 10,
					font: o,
					color: $(0, 0, 0)
				});
				break;
			case "TEXT":
				n.drawText(e.value || "", {
					x: c,
					y: l,
					size: 10,
					font: o,
					color: $(0, 0, 0)
				});
				break;
		}
	}
	await hu(i, n);
	let c = await i.save(), l = Buffer.from(c), u = m(l), { key: d } = await nk.uploadPdf(l, t), f = d;
	return await T.dssDocument.update({
		where: { id: e },
		data: {
			finalFileUrl: f,
			finalPdfSha256Hex: u
		}
	}), {
		finalFileUrl: f,
		finalPdfSha256Hex: u
	};
}
//#endregion
export { rk as DocumentService, d as Dss, f as ROLE_HIERARCHY, K9 as WorkflowService, ut as canUserSignNow, m as computeDocumentHash, g as computePqHash, y as computeZkProofPlaceholder, Wn as createDocument, gu as generateFinalSignedPdf, _ as generateZkProof, Gn as getDocumentForViewing, lt as getNextSigner, Jn as notarizeDocument, Kn as signDocument, h as verifyDocumentIntegrity, v as verifyZkProof };
var tee, nee, ree, iee, aee, oee, see, cee, _u, vu, yu, bu, xu, Su, Cu, wu, Tu, Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd, ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd, Gd, Kd, qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf, rf, af, of, sf, cf, lf, uf, df, ff, pf, mf, hf, gf, _f, vf, yf, bf, xf, Sf, Cf, wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf, zf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, wp, Tp, Ep, Dp, Op, kp, Ap, jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm, Em, Dm, Om, km, Am, jm, Mm, Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm, Ym, Xm, Zm, Qm, $m, eh, th, nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh, Ch, wh, Th, Eh, Dh, Oh, kh, Ah, jh, Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, Vh, Hh, Uh, Wh, Gh, Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg, ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng, Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg, qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_, F_, I_, L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_, J_, Y_, X_, Z_, Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv, Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw, mw, hw, gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw, Ew, Dw, Ow, kw, Aw, jw, Mw, Nw, Pw, Fw, Iw, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw, Kw, qw, Jw, Yw, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT, ET, DT, OT, kT, AT, jT, MT, NT, PT, FT, IT, LT, RT, zT, BT, VT, HT, UT, WT, GT, KT, qT, JT, YT, XT, ZT, QT, $T, eE, tE, nE, rE, iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE, hE, gE, _E, vE, yE, bE, xE, SE, CE, wE, TE, EE, DE, OE, kE, AE, jE, ME, NE, PE, FE, IE, LE, RE, zE, BE, VE, HE, UE, WE, GE, KE, qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD, iD, aD, oD, sD, cD, lD, uD, dD, fD, pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD, ID, LD, RD, zD, BD, VD, HD, UD, WD, GD, KD, qD, JD, YD, XD, ZD, QD, $D, eO, tO, nO, rO, iO, aO, oO, sO, cO, lO, uO, dO, fO, pO, mO, hO, gO, _O, vO, yO, bO, xO, SO, CO, wO, TO, EO, DO, OO, kO, AO, jO, MO, NO, PO, FO, IO, LO, RO, zO, BO, VO, HO, UO, WO, GO, KO, qO, JO, YO, XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak, ok, sk, ck, lk, uk, dk, fk, pk, mk, hk, gk, _k, vk, yk, bk, xk, Sk, Ck, wk, Tk, Ek, Dk, Ok, kk, Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk, zk, Bk, Vk, Hk, Uk, Wk, Gk, Kk, qk, Jk, Yk, Xk, Zk, Qk, $k, eA, tA, nA, rA, iA, aA, oA, sA, cA, lA, uA, dA, fA, pA, mA, hA, gA, _A, vA, yA, bA, xA, SA, CA, wA, TA, EA, DA, OA, kA, AA, jA, MA, NA, PA, FA, IA, LA, RA, zA, BA, VA, HA, UA, WA, GA, KA, qA, JA, YA, XA, ZA, QA, $A, ej, tj, nj, rj, ij, aj, oj, sj, cj, lj, uj, dj, fj, pj, mj, hj, gj, _j, vj, yj, bj, xj, Sj, Cj, wj, Tj, Ej, Dj, Oj, kj, Aj, jj, Mj, Nj, Pj, Fj, Ij, Lj, Rj, zj, Bj, Vj, Hj, Uj, Wj, Gj, Kj, qj, Jj, Yj, Xj, Zj, Qj, $j, eM, tM, nM, rM, iM, aM, oM, sM, cM, lM, uM, dM, fM, pM, mM, hM, gM, _M, vM, yM, bM, xM, SM, CM, wM, TM, EM, DM, OM, kM, AM, jM, MM, NM, PM, FM, IM, LM, RM, zM, BM, VM, HM, UM, WM, GM, KM, qM, JM, YM, XM, ZM, QM, $M, eN, tN, nN, rN, iN, aN, oN, sN, cN, lN, uN, dN, fN, pN, mN, hN, gN, _N, vN, yN, bN, xN, SN, CN, wN, TN, EN, DN, ON, kN, AN, jN, MN, NN, PN, FN, IN, LN, RN, zN, BN, VN, HN, UN, WN, GN, KN, qN, JN, YN, XN, ZN, QN, $N, eP, tP, nP, rP, iP, aP, oP, sP, cP, lP, uP, dP, fP, pP, mP, hP, gP, _P, vP, yP, bP, xP, SP, CP, wP, TP, EP, DP, OP, kP, AP, jP, MP, NP, PP, FP, IP, LP, RP, zP, BP, VP, HP, UP, WP, GP, KP, qP, JP, YP, XP, ZP, QP, $P, eF, tF, nF, rF, iF, aF, oF, sF, cF, lF, uF, dF, fF, pF, mF, hF, gF, _F, vF, yF, bF, xF, SF, CF, wF, TF, EF, DF, OF, kF, AF, jF, MF, NF, PF, FF, IF, LF, RF, zF, BF, VF, HF, UF, WF, GF, KF, qF, JF, YF, XF, ZF, QF, $F, eI, tI, nI, rI, iI, aI, oI, sI, cI, lI, uI, dI, fI, W, pI, mI, hI, gI, _I, vI, yI, bI, xI, SI, CI, wI, G, TI, EI, DI, OI, kI, AI, jI, MI, NI, PI, FI, II, LI, RI, zI, BI, VI, HI, UI, WI, GI, KI, qI, JI, YI, XI, ZI, QI, $I, eL, tL, nL, rL, iL, aL, oL, sL, cL, lL, uL, dL, fL, pL, mL, hL, gL, _L, vL, yL, bL, xL, SL, CL, wL, TL, EL, DL, OL, kL, AL, jL, ML, NL, PL, FL, IL, LL, RL, zL, BL, VL, HL, UL, WL, GL, KL, qL, JL, YL, XL, ZL, QL, $L, eR, tR, nR, rR, iR, aR, oR, sR, cR, lR, uR, dR, fR, pR, mR, hR, gR, _R, vR, yR, bR, xR, SR, CR, wR, TR, ER, DR, OR, kR, AR, jR, MR, NR, PR, FR, IR, LR, RR, zR, BR, VR, HR, UR, WR, GR, KR, qR, JR, YR, XR, ZR, QR, $R, ez, tz, nz, rz, iz, az, oz, sz, cz, lz, uz, dz, fz, pz, mz, hz, gz, _z, vz, yz, bz, xz, Sz, Cz, wz, Tz, Ez, Dz, Oz, kz, Az, jz, Mz, Nz, Pz, Fz, Iz, Lz, Rz, zz, Bz, Vz, Hz, Uz, Wz, Gz, Kz, qz, Jz, Yz, Xz, Zz, Qz, $z, eB, tB, nB, rB, iB, aB, oB, sB, cB, lB, uB, dB, fB, pB, mB, hB, gB, _B, vB, yB, bB, xB, SB, CB, wB, TB, EB, DB, OB, kB, AB, jB, MB, NB, PB, FB, IB, LB, RB, zB, BB, VB, HB, UB, WB, GB, KB, qB, JB, YB, XB, ZB, QB, $B, eV, tV, nV, rV, iV, aV, oV, sV, cV, lV, uV, dV, fV, pV, mV, hV, gV, _V, vV, yV, bV, xV, SV, CV, wV, TV, EV, DV, OV, kV, AV, jV, MV, NV, PV, FV, IV, LV, RV, zV, BV, VV, HV, UV, WV, GV, KV, qV, JV, YV, XV, ZV, QV, $V, eH, tH, nH, rH, iH, aH, oH, sH, cH, lH, uH, dH, fH, pH, mH, hH, gH, _H, vH, yH, bH, xH, SH, CH, wH, TH, EH, DH, OH, kH, AH, jH, MH, NH, PH, FH, IH, LH, RH, zH, BH, VH, HH, UH, WH, GH, KH, qH, JH, YH, XH, ZH, QH, $H, eU, tU, nU, rU, iU, aU, oU, sU, cU, lU, uU, dU, fU, pU, mU, hU, gU, _U, vU, yU, bU, xU, SU, CU, wU, TU, EU, DU, OU, kU, AU, jU, MU, NU, PU, FU, IU, LU, RU, zU, BU, VU, HU, UU, WU, GU, KU, qU, JU, YU, XU, ZU, QU, $U, eW, tW, nW, rW, iW, aW, oW, sW, cW, lW, uW, dW, fW, pW, mW, hW, gW, _W, vW, yW, bW, xW, SW, CW, wW, TW, EW, DW, OW, kW, AW, jW, MW, NW, PW, FW, IW, LW, RW, zW, BW, VW, HW, UW, WW, GW, KW, qW, JW, YW, XW, ZW, QW, $W, eG, tG, nG, rG, iG, aG, oG, sG, cG, lG, uG, dG, fG, pG, mG, hG, gG, _G, vG, yG, bG, xG, SG, CG, wG, TG, EG, DG, OG, kG, AG, jG, MG, NG, PG, FG, IG, LG, RG, zG, BG, VG, HG, UG, WG, GG, KG, qG, JG, YG, XG, ZG, QG, $G, eK, tK, nK, rK, iK, aK, oK, sK, cK, lK, uK, dK, fK, pK, mK, hK, gK, _K, vK, yK, bK, xK, SK, CK, wK, TK, EK, DK, OK, kK, AK, jK, MK, NK, PK, FK, IK, LK, RK, zK, BK, VK, HK, UK, WK, GK, KK, qK, JK, YK, XK, ZK, QK, $K, eq, tq, nq, rq, iq, aq, oq, sq, cq, lq, uq, dq, fq, pq, mq, hq, gq, _q, vq, yq, bq, xq, Sq, Cq, wq, Tq, Eq, Dq, Oq, kq, Aq, jq, Mq, Nq, Pq, Fq, Iq, Lq, Rq, zq, Bq, Vq, Hq, Uq, Wq, Gq, Kq, qq, Jq, Yq, Xq, Zq, Qq, $q, eJ, tJ, nJ, rJ, iJ, aJ, oJ, sJ, cJ, lJ, uJ, dJ, fJ, pJ, mJ, hJ, gJ, _J, vJ, yJ, bJ, xJ, SJ, CJ, wJ, TJ, EJ, DJ, OJ, kJ, AJ, jJ, MJ, NJ, PJ, FJ, IJ, LJ, RJ, zJ, BJ, VJ, HJ, UJ, lee, WJ, GJ, KJ, qJ, JJ, YJ, XJ, ZJ, QJ, $J, eY, tY, nY, rY, iY, aY, oY, sY, cY, lY, uY, dY, fY, pY, mY, hY, gY, _Y, vY, yY, bY, xY, SY, CY, wY, TY, EY, DY, OY, kY, AY, jY, MY, NY, PY, FY, IY, LY, RY, zY, BY, VY, HY, UY, WY, GY, KY, qY, JY, YY, XY, ZY, QY, $Y, eX, tX, nX, rX, iX, aX, oX, sX, cX, lX, uX, dX, fX, pX, mX, hX, gX, _X, vX, yX, bX, xX, SX, CX, wX, TX, EX, DX, OX, kX, AX, jX, MX, NX, PX, FX, IX, LX, RX, zX, BX, VX, HX, UX, WX, GX, KX, qX, JX, YX, XX, ZX, QX, $X, eZ, tZ, nZ, rZ, iZ, aZ, oZ, sZ, cZ, lZ, uZ, dZ, fZ, pZ, mZ, hZ, gZ, _Z, vZ, yZ, bZ, xZ, SZ, CZ, wZ, TZ, EZ, DZ, OZ, kZ, AZ, jZ, MZ, NZ, PZ, FZ, IZ, LZ, RZ, zZ, BZ, VZ, HZ, UZ, WZ, GZ, KZ, qZ, JZ, YZ, XZ, ZZ, QZ, $Z, eQ, tQ, nQ, rQ, iQ, aQ, oQ, sQ, cQ, lQ, uQ, dQ, fQ, pQ, mQ, hQ, gQ, _Q, vQ, yQ, bQ, xQ, SQ, CQ, wQ, TQ, EQ, DQ, OQ, kQ, AQ, jQ, MQ, NQ, PQ, FQ, IQ, LQ, RQ, zQ, BQ, VQ, HQ, UQ, WQ, GQ, KQ, qQ, JQ, YQ, XQ, ZQ, QQ, $Q, e$, t$, n$, r$, i$, a$, o$, s$, c$, l$, u$, d$, f$, p$, m$, h$, g$, _$, v$, y$, b$, x$, S$, C$, w$, T$, E$, D$, O$, k$, A$, j$, M$, N$, P$, F$, I$, L$, R$, z$, B$, V$, H$, U$, W$, G$, K$, q$, J$, Y$, X$, Z$, Q$, $$, e1, t1, n1, r1, i1, a1, o1, s1, c1, l1, u1, d1, f1, p1, m1, h1, g1, _1, v1, y1, b1, x1, S1, C1, w1, T1, E1, D1, O1, k1, A1, j1, M1, N1, P1, F1, I1, L1, R1, z1, B1, V1, H1, U1, W1, G1, K1, q1, J1, Y1, X1, Z1, Q1, $1, e0, t0, n0, r0, i0, a0, o0, s0, c0, l0, u0, d0, f0, p0, m0, h0, g0, _0, v0, y0, b0, x0, S0, C0, w0, T0, E0, D0, O0, k0, A0, j0, M0, N0, P0, F0, I0, L0, R0, z0, B0, V0, H0, U0, W0, G0, K0, q0, J0, Y0, X0, Z0, Q0, $0, e2, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2, k2, A2, j2, M2, N2, P2, F2, I2, L2, R2, z2, B2, V2, H2, U2, W2, G2, K2, q2, J2, Y2, X2, Z2, Q2, $2, e4, t4, n4, r4, i4, a4, o4, s4, c4, l4, u4, d4, f4, p4, m4, h4, g4, _4, v4, y4, b4, x4, S4, C4, w4, T4, E4, D4, O4, k4, A4, j4, M4, N4, P4, F4, I4, L4, R4, z4, B4, V4, H4, U4, W4, G4, K4, q4, J4, Y4, X4, Z4, Q4, $4, e3, t3, n3, r3, i3, a3, o3, s3, c3, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, E3, D3, O3, k3, A3, j3, M3, N3, P3, F3, I3, L3, R3, z3, B3, V3, H3, U3, W3, G3, K3, q3, J3, Y3, X3, Z3, Q3, $3, e6, t6, n6, r6, i6, a6, o6, s6, c6, l6, u6, d6, f6, p6, m6, h6, g6, _6, v6, y6, b6, x6, S6, C6, w6, T6, E6, D6, O6, k6, A6, j6, M6, N6, P6, F6, I6, L6, R6, z6, B6, V6, H6, U6, W6, G6, K6, q6, J6, Y6, X6, Z6, Q6, $6, e8, t8, n8, r8, i8, a8, o8, s8, c8, l8, u8, d8, f8, p8, m8, h8, g8, _8, v8, y8, b8, x8, S8, C8, w8, T8, E8, D8, O8, k8, A8, j8, M8, N8, P8, F8, I8, L8, R8, z8, B8, V8, H8, U8, W8, G8, K8, q8, J8, Y8, X8, Z8, Q8, $8, e5, t5, n5, r5, i5, a5, o5, s5, c5, l5, u5, d5, f5, p5, m5, h5, g5, _5, v5, y5, b5, x5, S5, C5, w5, T5, E5, D5, O5, k5, A5, j5, M5, N5, P5, F5, I5, L5, R5, z5, B5, V5, H5, U5, W5, G5, K5, q5, J5, Y5, X5, Z5, Q5, $5, e7, t7, n7, r7, i7, a7, o7, s7, c7, l7, u7, d7, f7, p7, m7, h7, g7, K, _7, v7, y7, b7, x7, q, S7, J, C7, w7, T7, Y, X, E7, D7, O7, k7, A7, j7, Z, M7, N7, P7, F7, I7, L7, R7, z7, B7, V7, H7, U7, W7, G7, K7, Q, q7, J7, Y7, X7, Z7, Q7, $7, e9, t9, n9, r9, i9, a9, o9, s9, c9, l9, u9, d9, f9, p9, m9, h9, g9, _9, v9, y9, b9, x9, S9, C9, w9, T9, E9, D9, O9, k9, A9, j9, M9, N9, P9, F9, I9, L9, R9, z9, B9, V9, H9, U9, W9, G9, uee, dee, fee, pee, mee, hee, gee, _ee, vee, yee, bee, xee, See, Cee, wee, Tee, Eee, Dee, Oee, kee, Aee, jee, Mee, Nee, Pee, Fee, Iee, Lee, Ree, zee, Bee, Vee, Hee, Uee, Wee, Gee, Kee, qee, Jee, Yee, Xee, Zee, Qee, $ee, ete, tte, nte, rte, ite, ate, ote, ste, cte, lte, ute, dte, fte, pte, mte, hte, gte, _te, vte, yte, bte, xte, Ste, Cte, wte, Tte, Ete, Dte, Ote, kte, Ate, jte, Mte, Nte, Pte, Fte, Ite, Lte, Rte, zte, Bte, Vte, Hte, Ute, Wte, Gte, Kte, qte, Jte, Yte, Xte, Zte, Qte, $te, ene, tne, nne, rne, ine, ane, one, sne, cne, lne, une, dne, fne, pne, mne, hne, gne, _ne, vne, yne, bne, xne, Sne, Cne, wne, Tne, Ene, Dne, One, kne, Ane, jne, Mne, Nne, Pne, Fne, Ine, Lne, Rne, zne, Bne, Vne, Hne, Une, Wne, Gne, Kne, qne, Jne, Yne, Xne, Zne, Qne, $ne, ere, tre, nre, rre, ire, are, ore, sre, cre, lre, ure, dre, fre, pre, mre, hre, gre, _re, vre, yre, bre, xre, Sre, Cre, wre, Tre, Ere, Dre, Ore, kre, Are, jre, Mre, Nre, Pre, Fre, Ire, Lre, Rre, zre, Bre, Vre, Hre, Ure, Wre, Gre, Kre, qre, Jre, Yre, Xre, Zre, Qre, $re, eie, tie, nie, rie, iie, aie, oie, sie, cie, lie, uie, die, fie, pie, mie, hie, gie, _ie, vie, yie, bie, xie, Sie, Cie, wie, Tie, Eie, Die, Oie, kie, Aie, jie, Mie, K9, q9, Nie, Pie, Fie, Iie, Lie, Rie, zie, Bie, Vie, Hie, Uie, Wie, Gie, Kie, qie, Jie, Yie, Xie, Zie, Qie, $ie, eae, tae, nae, rae, iae, aae, oae, sae, cae, lae, uae, dae, fae, pae, mae, hae, gae, _ae, vae, yae, bae, xae, Sae, Cae, wae, Tae, Eae, Dae, Oae, kae, Aae, jae, Mae, Nae, Pae, Fae, Iae, Lae, Rae, zae, Bae, Vae, Hae, Uae, Wae, Gae, Kae, qae, Jae, Yae, Xae, Zae, Qae, $ae, eoe, toe, noe, roe, ioe, aoe, ooe, soe, coe, loe, uoe, doe, foe, poe, moe, hoe, goe, _oe, voe, yoe, boe, xoe, Soe, Coe, woe, Toe, Eoe, Doe, Ooe, koe, Aoe, joe, Moe, Noe, Poe, Foe, Ioe, Loe, Roe, zoe, Boe, Voe, Hoe, Uoe, Woe, Goe, Koe, qoe, Joe, Yoe, Xoe, Zoe, Qoe, $oe, ese, tse, nse, rse, ise, ase, ose, sse, J9, cse, lse, use, dse, fse, pse, mse, hse, gse, _se, vse, yse, bse, xse, Sse, Cse, wse, Tse, Ese, Dse, Ose, kse, Ase, jse, Mse, Nse, Pse, Fse, Ise, Lse, Rse, zse, Bse, Vse, Hse, Use, Wse, Gse, Kse, qse, Jse, Yse, Xse, Zse, Qse, $se, ece, tce, nce, rce, ice, ace, oce, sce, cce, lce, uce, dce, fce, pce, mce, hce, gce, _ce, vce, yce, bce, xce, Sce, Cce, wce, Tce, Ece, Dce, Oce, kce, Ace, jce, Mce, Nce, Pce, Fce, Ice, Lce, Rce, zce, Bce, Y9, Vce, Hce, Uce, Wce, Gce, Kce, qce, Jce, X9, Yce, Xce, Zce, Qce, $ce, ele, tle, nle, rle, ile, ale, ole, sle, cle, lle, ule, dle, fle, ple, mle, hle, gle, _le, vle, yle, ble, xle, Sle, Cle, wle, Tle, Ele, Dle, Ole, kle, Ale, jle, Mle, Nle, Ple, Z9, Fle, Ile, Lle, Rle, zle, Ble, Vle, Hle, Ule, Wle, Gle, Kle, qle, Jle, Yle, Xle, Zle, Qle, $le, eue, tue, nue, rue, iue, aue, oue, sue, cue, lue, uue, due, fue, pue, mue, hue, gue, _ue, vue, yue, bue, xue, Sue, Cue, wue, Tue, Eue, Due, Oue, kue, Aue, jue, Mue, Nue, Pue, Fue, Iue, Lue, Rue, zue, Bue, Vue, Hue, Uue, Wue, Gue, Kue, que, Jue, Yue, Xue, Zue, Que, $ue, ede, tde, nde, rde, ide, ade, ode, sde, cde, lde, ude, dde, fde, pde, mde, hde, gde, _de, vde, yde, bde, xde, Sde, Cde, wde, Tde, Ede, Dde, Ode, kde, Ade, jde, Mde, Nde, Pde, Fde, Ide, Lde, Rde, zde, Bde, Vde, Hde, Ude, Wde, Gde, Kde, qde, Jde, Yde, Xde, Zde, Qde, $de, efe, tfe, nfe, rfe, $, ife, afe, ofe, sfe, cfe, lfe, ufe, dfe, ffe, pfe, mfe, hfe, gfe, _fe, vfe, yfe, bfe, xfe, Sfe, Cfe, wfe, Tfe, Efe, Dfe, Ofe, kfe, Afe, jfe, Mfe, Nfe, Pfe, Ffe, Ife, Lfe, Rfe, zfe, Bfe, Vfe, Hfe, Ufe, Wfe, Gfe, Kfe, qfe, Jfe, Yfe, Xfe, Zfe, Qfe, $fe, epe, tpe, npe, rpe, ipe, ape, ope, spe, cpe, lpe, upe, dpe, fpe, ppe, mpe, hpe, gpe, _pe, vpe, ype, bpe, xpe, Spe, Cpe, wpe, Tpe, Epe, Dpe, Ope, kpe, Ape, jpe, Mpe, Npe, Ppe, Fpe, Ipe, Lpe, Q9, Rpe, zpe, Bpe, Vpe, Hpe, Upe, Wpe, Gpe, Kpe, $9, qpe, Jpe, Ype;
