import { a as e, i as t, n, o as r, r as i, t as a } from "./chunk-Cr9pTUWm.mjs";
import { jsx as o } from "react/jsx-runtime";
import { Suspense as s } from "react";
//#region ../../node_modules/@prisma/client/runtime/index-browser.js
var c = /* @__PURE__ */ a(((e, t) => {
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
		getRuntime: () => ce,
		makeStrictEnum: () => T,
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
	v = /* @__PURE__ */ new WeakMap(), ee(y, "DbNull");
	var b, x = class extends _ {
		constructor() {
			super(...arguments), u(this, b);
		}
	};
	b = /* @__PURE__ */ new WeakMap(), ee(x, "JsonNull");
	var S, C = class extends _ {
		constructor() {
			super(...arguments), u(this, S);
		}
	};
	S = /* @__PURE__ */ new WeakMap(), ee(C, "AnyNull");
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
	function ee(e, t) {
		Object.defineProperty(e, "name", {
			value: t,
			configurable: !0
		});
	}
	var te = new Set([
		"toJSON",
		"$$typeof",
		"asymmetricMatch",
		Symbol.iterator,
		Symbol.toStringTag,
		Symbol.isConcatSpreadable,
		Symbol.toPrimitive
	]);
	function T(e) {
		return new Proxy(e, { get(e, t) {
			if (t in e) return e[t];
			if (!te.has(t)) throw TypeError(`Invalid enum value: ${String(t)}`);
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
	}, pe, me, A = !0, he = "[DecimalError] ", ge = he + "Invalid argument: ", _e = he + "Precision limit exceeded", ve = he + "crypto unavailable", ye = "[object Decimal]", j = Math.floor, M = Math.pow, be = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xe = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Se = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ce = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, we = 1e7, N = 7, Te = 9007199254740991, Ee = k.length - 1, De = de.length - 1, P = { toStringTag: ye };
	P.absoluteValue = P.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), R(e);
	}, P.ceil = function() {
		return R(new this.constructor(this), this.e + 1, 2);
	}, P.clampedTo = P.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(ge + t);
		return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
	}, P.comparedTo = P.cmp = function(e) {
		var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
		if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
		if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
		if (c !== l) return c;
		if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
		for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
		return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
	}, P.cosine = P.cos = function() {
		var e, t, n = this, r = n.constructor;
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + N, r.rounding = 1, n = Ae(r, Je(r, n)), r.precision = e, r.rounding = t, R(me == 2 || me == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, P.cubeRoot = P.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (A = !1, a = u.s * M(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = F(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = M(n, 1 / 3), e = j((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = L(l.plus(u).times(s), l.plus(c), o + 2, 1), F(s.d).slice(0, o) === (n = F(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (R(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (R(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return A = !0, R(r, e, d.rounding, t);
	}, P.decimalPlaces = P.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - j(this.e / N)) * N, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
			n < 0 && (n = 0);
		}
		return n;
	}, P.dividedBy = P.div = function(e) {
		return L(this, new this.constructor(e));
	}, P.dividedToIntegerBy = P.divToInt = function(e) {
		var t = this, n = t.constructor;
		return R(L(t, new n(e), 0, 1, 1), n.precision, n.rounding);
	}, P.equals = P.eq = function(e) {
		return this.cmp(e) === 0;
	}, P.floor = function() {
		return R(new this.constructor(this), this.e + 1, 3);
	}, P.greaterThan = P.gt = function(e) {
		return this.cmp(e) > 0;
	}, P.greaterThanOrEqualTo = P.gte = function(e) {
		var t = this.cmp(e);
		return t == 1 || t === 0;
	}, P.hyperbolicCosine = P.cosh = function() {
		var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
		if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
		if (a.isZero()) return s;
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / qe(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Ke(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return R(a, o.precision = n, o.rounding = r, !0);
	}, P.hyperbolicSine = P.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = Ke(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / qe(5, e)), i = Ke(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, R(i, t, n, !0);
	}, P.hyperbolicTangent = P.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, L(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, P.inverseCosine = P.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? Pe(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? Pe(t, r, i) : new t(0) : new t(NaN);
	}, P.inverseHyperbolicCosine = P.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, A = !1, n = n.times(n).minus(1).sqrt().plus(n), A = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, P.inverseHyperbolicSine = P.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, A = !1, n = n.times(n).plus(1).sqrt().plus(n), A = !0, r.precision = e, r.rounding = t, n.ln());
	}, P.inverseHyperbolicTangent = P.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? R(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = L(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, P.inverseSine = P.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = Pe(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, P.inverseTangent = P.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= De) return o = Pe(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= De) return o = Pe(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / N + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (A = !1, t = Math.ceil(s / N), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), A = !0, R(o, u.precision = d, u.rounding = f, !0);
	}, P.isFinite = function() {
		return !!this.d;
	}, P.isInteger = P.isInt = function() {
		return !!this.d && j(this.e / N) > this.d.length - 2;
	}, P.isNaN = function() {
		return !this.s;
	}, P.isNegative = P.isNeg = function() {
		return this.s < 0;
	}, P.isPositive = P.isPos = function() {
		return this.s > 0;
	}, P.isZero = function() {
		return !!this.d && this.d[0] === 0;
	}, P.lessThan = P.lt = function(e) {
		return this.cmp(e) < 0;
	}, P.lessThanOrEqualTo = P.lte = function(e) {
		return this.cmp(e) < 1;
	}, P.logarithm = P.log = function(e) {
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
		if (A = !1, s = d + p, o = Ve(l, s), r = t ? Ne(u, s + 10) : Ve(e, s), c = L(o, r, s, 1), Oe(c.d, i = d, f)) do
			if (s += 10, o = Ve(l, s), r = t ? Ne(u, s + 10) : Ve(e, s), c = L(o, r, s, 1), !a) {
				+F(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = R(c, d + 1, 0));
				break;
			}
		while (Oe(c.d, i += 10, f));
		return A = !0, R(c, d, f);
	}, P.minus = P.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return A ? R(e, s, c) : e;
		}
		if (n = j(e.e / N), u = j(p.e / N), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / N), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = we - 1;
				--l[i], l[r] += we;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = Me(l, n), A ? R(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, P.modulo = P.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? R(new r(n), r.precision, r.rounding) : (A = !1, r.modulo == 9 ? (t = L(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = L(n, e, 0, r.modulo, 1), t = t.times(e), A = !0, n.minus(t));
	}, P.naturalExponential = P.exp = function() {
		return Be(this);
	}, P.naturalLogarithm = P.ln = function() {
		return Ve(this);
	}, P.negated = P.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, R(e);
	}, P.plus = P.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), A ? R(e, s, c) : e;
		if (a = j(d.e / N), r = j(e.e / N), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / N), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / we | 0, l[i] %= we;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = Me(l, r), A ? R(e, s, c) : e;
	}, P.precision = P.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ge + e);
		return n.d ? (t = Fe(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, P.round = function() {
		var e = this, t = e.constructor;
		return R(new t(e), e.e + 1, t.rounding);
	}, P.sine = P.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + N, r.rounding = 1, n = Ge(r, Je(r, n)), r.precision = e, r.rounding = t, R(me > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, P.squareRoot = P.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (A = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = F(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = j((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(L(o, a, n + 2, 1)).times(.5), F(a.d).slice(0, n) === (t = F(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (R(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (R(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return A = !0, R(r, c, u.rounding, e);
	}, P.tangent = P.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = L(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, R(me == 2 || me == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, P.times = P.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = j(u.e / N) + j(e.e / N), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % we | 0, t = s / we | 0;
			a[i] = (a[i] + t) % we | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = Me(a, n), A ? R(e, d.precision, d.rounding) : e;
	}, P.toBinary = function(e, t) {
		return Ye(this, 2, e, t);
	}, P.toDecimalPlaces = P.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (I(e, 0, ue), t === void 0 ? t = r.rounding : I(t, 0, 8), R(n, e + n.e + 1, t));
	}, P.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = je(r, !0) : (I(e, 0, ue), t === void 0 ? t = i.rounding : I(t, 0, 8), r = R(new i(r), e + 1, t), n = je(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, P.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = je(i) : (I(e, 0, ue), t === void 0 ? t = a.rounding : I(t, 0, 8), r = R(new a(i), e + i.e + 1, t), n = je(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, P.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Fe(m) - p.e - 1, o = a % N, t.d[0] = M(10, o < 0 ? N + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(ge + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (A = !1, s = new h(F(m)), u = h.precision, h.precision = a = m.length * N * 2; d = L(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = L(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = L(l, r, a, 1).minus(p).abs().cmp(L(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, A = !0, f;
	}, P.toHexadecimal = P.toHex = function(e, t) {
		return Ye(this, 16, e, t);
	}, P.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : I(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (A = !1, n = L(n, e, 0, t, 1).times(e), A = !0, R(n)) : (e.s = n.s, n = e), n;
	}, P.toNumber = function() {
		return +this;
	}, P.toOctal = function(e, t) {
		return Ye(this, 8, e, t);
	}, P.toPower = P.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(M(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return R(s, r, a);
		if (t = j(e.e / N), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= Te) return i = Le(c, s, n, r), e.s < 0 ? new c(1).div(i) : R(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = M(+s, l), t = n == 0 || !isFinite(n) ? j(l * (Math.log("0." + F(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (A = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Be(e.times(Ve(s, r + n)), r), i.d && (i = R(i, r + 5, 1), Oe(i.d, r, a) && (t = r + 10, i = R(Be(e.times(Ve(s, t + n)), t), t + 5, 1), +F(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = R(i, r + 1, 0)))), i.s = o, A = !0, c.rounding = a, R(i, r, a));
	}, P.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = je(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (I(e, 1, ue), t === void 0 ? t = i.rounding : I(t, 0, 8), r = R(new i(r), e, t), n = je(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, P.toSignificantDigits = P.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (I(e, 1, ue), t === void 0 ? t = r.rounding : I(t, 0, 8)), R(new r(n), e, t);
	}, P.toString = function() {
		var e = this, t = e.constructor, n = je(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, P.truncated = P.trunc = function() {
		return R(new this.constructor(this), this.e + 1, 1);
	}, P.valueOf = P.toJSON = function() {
		var e = this, t = e.constructor, n = je(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function F(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = N - r.length, n && (a += Ie(n)), a += r;
			o = e[t], r = o + "", n = N - r.length, n && (a += Ie(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function I(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(ge + e);
	}
	function Oe(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += N, i = 0) : (i = Math.ceil((t + 1) / N), t %= N), a = M(10, N - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == M(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == M(10, t - 3) - 1, o;
	}
	function ke(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += O.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function Ae(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / qe(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Ke(e, 1, t.times(i), new e(1));
		for (var a = n; a--;) {
			var o = t.times(t);
			t = o.times(o).minus(o).times(8).plus(1);
		}
		return e.precision -= n, t;
	}
	var L = function() {
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
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, ee, te, T, ne, re = r.constructor, ie = r.s == i.s ? 1 : -1, E = r.d, D = i.d;
			if (!E || !E[0] || !D || !D[0]) return new re(!r.s || !i.s || (E ? D && E[0] == D[0] : !D) ? NaN : E && E[0] == 0 || !D ? ie * 0 : ie / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = we, p = N, u = j(r.e / p) - j(i.e / p)), T = D.length, ee = E.length, _ = new re(ie), v = _.d = [], d = 0; D[d] == (E[d] || 0); d++);
			if (D[d] > (E[d] || 0) && u--, a == null ? (S = a = re.precision, o = re.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, T == 1) {
					for (f = 0, D = D[0], S++; (d < ee || f) && S--; d++) C = f * c + (E[d] || 0), v[d] = C / D | 0, f = C % D | 0;
					m = f || d < ee;
				} else {
					for (f = c / (D[0] + 1) | 0, f > 1 && (D = e(D, f, c), E = e(E, f, c), T = D.length, ee = E.length), w = T, y = E.slice(0, T), b = y.length; b < T;) y[b++] = 0;
					ne = D.slice(), ne.unshift(0), te = D[0], D[1] >= c / 2 && ++te;
					do
						f = 0, l = t(D, y, T, b), l < 0 ? (x = y[0], T != b && (x = x * c + (y[1] || 0)), f = x / te | 0, f > 1 ? (f >= c && (f = c - 1), h = e(D, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, T < g ? ne : D, g, c))) : (f == 0 && (l = f = 1), h = D.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(D, y, T, b), l < 1 && (f++, n(y, T < b ? ne : D, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = E[w] || 0 : (y = [E[w]], b = 1);
					while ((w++ < ee || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, pe = m;
			else {
				for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
				_.e = d + u * p - 1, R(_, s ? a + _.e + 1 : a, o, m);
			}
			return _;
		};
	}();
	function R(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor;
		e: if (t != null) {
			if (d = e.d, !d) return e;
			for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
			if (a = t - i, a < 0) a += N, o = t, u = d[f = 0], c = u / M(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / N), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= N, o = a - N + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= N, o = a - N + i, c = o < 0 ? 0 : u / M(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % M(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / M(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = M(10, (N - t % N) % N), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = M(10, N - a), d[f] = o > 0 ? (u / M(10, i - o) % M(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == we && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != we) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return A && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function je(e, t, n) {
		if (!e.isFinite()) return He(e);
		var r, i = e.e, a = F(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ie(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Ie(-i - 1) + a, n && (r = n - o) > 0 && (a += Ie(r))) : i >= o ? (a += Ie(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Ie(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Ie(r))), a;
	}
	function Me(e, t) {
		var n = e[0];
		for (t *= N; n >= 10; n /= 10) t++;
		return t;
	}
	function Ne(e, t, n) {
		if (t > Ee) throw A = !0, n && (e.precision = n), Error(_e);
		return R(new e(k), t, 1, !0);
	}
	function Pe(e, t, n) {
		if (t > De) throw Error(_e);
		return R(new e(de), t, n, !0);
	}
	function Fe(e) {
		var t = e.length - 1, n = t * N + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function Ie(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function Le(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / N + 4);
		for (A = !1;;) {
			if (n % 2 && (a = a.times(t), Xe(a.d, o) && (i = !0)), n = j(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), Xe(t.d, o);
		}
		return A = !0, a;
	}
	function Re(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function ze(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Be(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (A = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(M(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = R(a.times(e), c, 1), n = n.times(++u), s = o.plus(L(a, n, c, 1)), F(s.d).slice(0, c) === F(o.d).slice(0, c)) {
				for (i = d; i--;) o = R(o.times(o), c, 1);
				if (t == null) if (l < 3 && Oe(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return R(o, f.precision = m, p, A = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function Ve(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (A = !1, u = y) : u = t, _.precision = u += m, n = F(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = F(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Ne(_, u + 2, y).times(a + ""), h = Ve(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? R(h, y, v, A = !0) : h;
		for (d = h, c = o = h = L(h.minus(1), h.plus(1), u, 1), f = R(h.times(h), u, 1), i = 3;;) {
			if (o = R(o.times(f), u, 1), l = c.plus(L(o, new _(i), u, 1)), F(l.d).slice(0, u) === F(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Ne(_, u + 2, y).times(a + ""))), c = L(c, new _(p), u, 1), t == null) if (Oe(c.d, u - m, v, s)) _.precision = u += m, l = o = h = L(d.minus(1), d.plus(1), u, 1), f = R(h.times(h), u, 1), i = s = 1;
			else return R(c, _.precision = y, v, A = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function He(e) {
		return String(e.s * e.s / 0);
	}
	function Ue(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % N, n < 0 && (r += N), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= N; r < i;) e.d.push(+t.slice(r, r += N));
				t = t.slice(r), r = N - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), A && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function We(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Ce.test(t)) return Ue(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (xe.test(t)) n = 16, t = t.toLowerCase();
		else if (be.test(t)) n = 2;
		else if (Se.test(t)) n = 8;
		else throw Error(ge + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Le(r, new r(n), a, a * 2)), l = ke(t, n, we), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = Me(l, u), e.d = l, A = !1, o && (e = L(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? M(2, c) : Lt.pow(2, c))), A = !0, e);
	}
	function Ge(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : Ke(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / qe(5, n)), t = Ke(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function Ke(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / N);
		for (A = !1, c = n.times(n), s = new e(r);;) {
			if (o = L(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = L(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return A = !0, o.d.length = d + 1, o;
	}
	function qe(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Je(e, t) {
		var n, r = t.s < 0, i = Pe(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return me = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) me = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return me = Re(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			me = Re(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Ye(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (I(n, 1, ue), r === void 0 ? r = p.rounding : I(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = He(e);
		else {
			for (u = je(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = ke(je(f), 10, i), f.e = f.d.length), d = ke(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = L(e, f, n, r, 0, i), d = e.d, a = e.e, l = pe), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += O.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = ke(u, i, t), c = d.length; !d[c - 1]; --c);
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
	function Xe(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function Ze(e) {
		return new this(e).abs();
	}
	function Qe(e) {
		return new this(e).acos();
	}
	function $e(e) {
		return new this(e).acosh();
	}
	function et(e, t) {
		return new this(e).plus(t);
	}
	function tt(e) {
		return new this(e).asin();
	}
	function nt(e) {
		return new this(e).asinh();
	}
	function rt(e) {
		return new this(e).atan();
	}
	function it(e) {
		return new this(e).atanh();
	}
	function at(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = Pe(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? Pe(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = Pe(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(L(e, t, a, 1)), t = Pe(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(L(e, t, a, 1)), n;
	}
	function ot(e) {
		return new this(e).cbrt();
	}
	function st(e) {
		return R(e = new this(e), e.e + 1, 2);
	}
	function ct(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function lt(e) {
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
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = fe[n]), (r = e[n]) !== void 0) if (j(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(ge + n + ": " + r);
		if (n = "crypto", i && (this[n] = fe[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(ve);
		else this[n] = !1;
		else throw Error(ge + n + ": " + r);
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
			if (a.constructor = i, _t(e)) {
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
				return Ue(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), Ce.test(e) ? Ue(a, e) : We(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Ue(a, e.toString());
			throw Error(ge + e);
		}
		if (i.prototype = P, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = lt, i.clone = ft, i.isDecimal = _t, i.abs = Ze, i.acos = Qe, i.acosh = $e, i.add = et, i.asin = tt, i.asinh = nt, i.atan = rt, i.atanh = it, i.atan2 = at, i.cbrt = ot, i.ceil = st, i.clamp = ct, i.cos = ut, i.cosh = dt, i.div = pt, i.exp = mt, i.floor = ht, i.hypot = gt, i.ln = vt, i.log = yt, i.log10 = z, i.log2 = bt, i.max = xt, i.min = St, i.mod = Ct, i.mul = wt, i.pow = Tt, i.random = Et, i.round = Dt, i.sign = Ot, i.sin = kt, i.sinh = At, i.sqrt = jt, i.sub = Mt, i.sum = Nt, i.tan = Pt, i.tanh = Ft, i.trunc = It, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
		return R(e = new this(e), e.e + 1, 3);
	}
	function gt() {
		var e, t, n = new this(0);
		for (A = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return A = !0, new this(Infinity);
			n = t;
		}
		return A = !0, n.sqrt();
	}
	function _t(e) {
		return e instanceof Lt || e && e.toStringTag === ye || !1;
	}
	function vt(e) {
		return new this(e).ln();
	}
	function yt(e, t) {
		return new this(e).log(t);
	}
	function bt(e) {
		return new this(e).log(2);
	}
	function z(e) {
		return new this(e).log(10);
	}
	function xt() {
		return ze(this, arguments, -1);
	}
	function St() {
		return ze(this, arguments, 1);
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
		if (e === void 0 ? e = this.precision : I(e, 1, ue), r = Math.ceil(e / N), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(ve);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= N, r && e && (i = M(10, N - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= N) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < N && (n -= N - r);
		}
		return o.e = n, o.d = s, o;
	}
	function Dt(e) {
		return R(e = new this(e), e.e + 1, this.rounding);
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
		for (A = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return A = !0, R(n, this.precision, this.rounding);
	}
	function Pt(e) {
		return new this(e).tan();
	}
	function Ft(e) {
		return new this(e).tanh();
	}
	function It(e) {
		return R(e = new this(e), e.e + 1, 1);
	}
	P[Symbol.for("nodejs.util.inspect.custom")] = P.toString, P[Symbol.toStringTag] = "Decimal";
	var Lt = P.constructor = ft(fe);
	k = new Lt(k), de = new Lt(de);
	var Rt = Lt;
})), l = /* @__PURE__ */ a(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var { Decimal: t, objectEnumValues: n, makeStrictEnum: r, Public: i, getRuntime: a, skip: o } = c(), s = {};
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
		categoryId: "categoryId",
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
		categoryId: "categoryId",
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
})), u = /* @__PURE__ */ a(((e, t) => {
	t.exports = l();
})), d = u();
BigInt.prototype.toJSON = function() {
	return this.toString();
};
var f = globalThis, p = f.prisma ?? new d.PrismaClient({ log: process.env.NODE_ENV === "development" ? [
	"query",
	"error",
	"warn"
] : ["error"] });
process.env.NODE_ENV !== "production" && (f.prisma = p);
//#endregion
//#region ../../node_modules/base64-js/index.js
var m = /* @__PURE__ */ a(((e) => {
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
})), h = /* @__PURE__ */ a(((e) => {
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
})), g = /* @__PURE__ */ a(((e) => {
	var t = m(), n = h(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
	e.Buffer = s, e.SlowBuffer = b, e.INSPECT_MAX_BYTES = 50;
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
		if (ArrayBuffer.isView(e)) return g(e);
		if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (Ee(e, ArrayBuffer) || e && Ee(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ee(e, SharedArrayBuffer) || e && Ee(e.buffer, SharedArrayBuffer))) return _(e, t, n);
		if (typeof e == "number") throw TypeError("The \"value\" argument must not be of type number. Received type number");
		let r = e.valueOf && e.valueOf();
		if (r != null && r !== e) return s.from(r, t, n);
		let i = v(e);
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
		return l(e), o(e < 0 ? 0 : y(e) | 0);
	}
	s.allocUnsafe = function(e) {
		return d(e);
	}, s.allocUnsafeSlow = function(e) {
		return d(e);
	};
	function f(e, t) {
		if ((typeof t != "string" || t === "") && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
		let n = x(e, t) | 0, r = o(n), i = r.write(e, t);
		return i !== n && (r = r.slice(0, i)), r;
	}
	function p(e) {
		let t = e.length < 0 ? 0 : y(e.length) | 0, n = o(t);
		for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
		return n;
	}
	function g(e) {
		if (Ee(e, Uint8Array)) {
			let t = new Uint8Array(e);
			return _(t.buffer, t.byteOffset, t.byteLength);
		}
		return p(e);
	}
	function _(e, t, n) {
		if (t < 0 || e.byteLength < t) throw RangeError("\"offset\" is outside of buffer bounds");
		if (e.byteLength < t + (n || 0)) throw RangeError("\"length\" is outside of buffer bounds");
		let r;
		return r = t === void 0 && n === void 0 ? new Uint8Array(e) : n === void 0 ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, s.prototype), r;
	}
	function v(e) {
		if (s.isBuffer(e)) {
			let t = y(e.length) | 0, n = o(t);
			return n.length === 0 || e.copy(n, 0, 0, t), n;
		}
		if (e.length !== void 0) return typeof e.length != "number" || De(e.length) ? o(0) : p(e);
		if (e.type === "Buffer" && Array.isArray(e.data)) return p(e.data);
	}
	function y(e) {
		if (e >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return e | 0;
	}
	function b(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}
	s.isBuffer = function(e) {
		return e != null && e._isBuffer === !0 && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (Ee(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), Ee(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
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
			if (Ee(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function x(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || Ee(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return Se(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return N(e).length;
			default:
				if (i) return r ? -1 : Se(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = x;
	function S(e, t, n) {
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
	function C(e, t, n) {
		let r = e[t];
		e[t] = e[n], e[n] = r;
	}
	s.prototype.swap16 = function() {
		let e = this.length;
		if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
		for (let t = 0; t < e; t += 2) C(this, t, t + 1);
		return this;
	}, s.prototype.swap32 = function() {
		let e = this.length;
		if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
		for (let t = 0; t < e; t += 4) C(this, t, t + 3), C(this, t + 1, t + 2);
		return this;
	}, s.prototype.swap64 = function() {
		let e = this.length;
		if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
		for (let t = 0; t < e; t += 8) C(this, t, t + 7), C(this, t + 1, t + 6), C(this, t + 2, t + 5), C(this, t + 3, t + 4);
		return this;
	}, s.prototype.toString = function() {
		let e = this.length;
		return e === 0 ? "" : arguments.length === 0 ? D(this, 0, e) : S.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (Ee(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
	function w(e, t, n, r, i) {
		if (e.length === 0) return -1;
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, De(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) if (i) n = 0;
		else return -1;
		if (typeof t == "string" && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : ee(e, t, n, r, i);
		if (typeof t == "number") return t &= 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : ee(e, [t], n, r, i);
		throw TypeError("val must be string, number or Buffer");
	}
	function ee(e, t, n, r, i) {
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
		return w(this, e, t, n, !0);
	}, s.prototype.lastIndexOf = function(e, t, n) {
		return w(this, e, t, n, !1);
	};
	function te(e, t, n, r) {
		n = Number(n) || 0;
		let i = e.length - n;
		r ? (r = Number(r), r > i && (r = i)) : r = i;
		let a = t.length;
		r > a / 2 && (r = a / 2);
		let o;
		for (o = 0; o < r; ++o) {
			let r = parseInt(t.substr(o * 2, 2), 16);
			if (De(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function T(e, t, n, r) {
		return Te(Se(t, e.length - n), e, n, r);
	}
	function ne(e, t, n, r) {
		return Te(Ce(t), e, n, r);
	}
	function re(e, t, n, r) {
		return Te(N(t), e, n, r);
	}
	function ie(e, t, n, r) {
		return Te(we(t, e.length - n), e, n, r);
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
			case "hex": return te(this, e, t, n);
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
		for (let r = t; r < n; ++r) i += P[e[r]];
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
	}, s.prototype.readBigUInt64LE = F(function(e) {
		e >>>= 0, j(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && M(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = F(function(e) {
		e >>>= 0, j(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && M(e, this.length - 8);
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
	}, s.prototype.readBigInt64LE = F(function(e) {
		e >>>= 0, j(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && M(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = F(function(e) {
		e >>>= 0, j(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && M(e, this.length - 8);
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
		ye(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function fe(e, t, n, r, i) {
		ye(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = F(function(e, t = 0) {
		return de(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = F(function(e, t = 0) {
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
	}, s.prototype.writeBigInt64LE = F(function(e, t = 0) {
		return de(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = F(function(e, t = 0) {
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
	function ge(e, t, n) {
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
	ge("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), ge("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), ge("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = _e(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = _e(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function _e(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function ve(e, t, n) {
		j(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && M(t, e.length - (n + 1));
	}
	function ye(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new he.ERR_OUT_OF_RANGE("value", i, e);
		}
		ve(r, i, a);
	}
	function j(e, t) {
		if (typeof e != "number") throw new he.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function M(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new he.ERR_BUFFER_OUT_OF_BOUNDS() : new he.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (j(e, n), new he.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var be = /[^+/0-9A-Za-z-_]/g;
	function xe(e) {
		if (e = e.split("=")[0], e = e.trim().replace(be, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function Se(e, t) {
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
	function Ce(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function we(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function N(e) {
		return t.toByteArray(xe(e));
	}
	function Te(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function Ee(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function De(e) {
		return e !== e;
	}
	var P = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function F(e) {
		return typeof BigInt > "u" ? I : e;
	}
	function I() {
		throw Error("BigInt not supported");
	}
})), _ = /* @__PURE__ */ a(((e, t) => {
	var n = g(), r = n.Buffer;
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
})), v = /* @__PURE__ */ a(((e, t) => {
	t.exports = {};
})), y = /* @__PURE__ */ a(((e, t) => {
	var n = _().Buffer, r = v(), i = v();
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
})), b = /* @__PURE__ */ a(((e, t) => {
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
})), x = /* @__PURE__ */ a(((e, t) => {
	var n = _().Buffer, r = b(), i = 128, a = 0, o = 32, s = 16, c = 2, l = s | o | a << 6, u = c | a << 6;
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
})), S = /* @__PURE__ */ a(((e, t) => {
	var n = g().Buffer, r = g().SlowBuffer;
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
})), C = /* @__PURE__ */ a(((e, t) => {
	var n = _().Buffer, r = v(), i = x(), a = v(), o = "\"%s\" is not a valid algorithm.\n  Supported algorithms are:\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".", s = "secret must be a string or buffer", c = "key must be a string or a buffer", l = "key must be a string, a buffer or an object", u = typeof r.createPublicKey == "function";
	u && (c += " or a KeyObject", s += "or a KeyObject");
	function d(e) {
		if (!n.isBuffer(e) && typeof e != "string" && (!u || typeof e != "object" || typeof e.type != "string" || typeof e.asymmetricKeyType != "string" || typeof e.export != "function")) throw g(c);
	}
	function f(e) {
		if (!n.isBuffer(e) && typeof e != "string" && typeof e != "object") throw g(l);
	}
	function p(e) {
		if (!n.isBuffer(e)) {
			if (typeof e == "string") return e;
			if (!u || typeof e != "object" || e.type !== "secret" || typeof e.export != "function") throw g(s);
		}
	}
	function m(e) {
		return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function h(e) {
		e = e.toString();
		var t = 4 - e.length % 4;
		if (t !== 4) for (var n = 0; n < t; ++n) e += "=";
		return e.replace(/\-/g, "+").replace(/_/g, "/");
	}
	function g(e) {
		var t = [].slice.call(arguments, 1), n = a.format.bind(a, e).apply(null, t);
		return TypeError(n);
	}
	function y(e) {
		return n.isBuffer(e) || typeof e == "string";
	}
	function b(e) {
		return y(e) || (e = JSON.stringify(e)), e;
	}
	function C(e) {
		return function(t, n) {
			p(n), t = b(t);
			var i = r.createHmac("sha" + e, n);
			return m((i.update(t), i.digest("base64")));
		};
	}
	var w, ee = "timingSafeEqual" in r ? function(e, t) {
		return e.byteLength === t.byteLength ? r.timingSafeEqual(e, t) : !1;
	} : function(e, t) {
		return w ||= S(), w(e, t);
	};
	function te(e) {
		return function(t, r, i) {
			var a = C(e)(t, i);
			return ee(n.from(r), n.from(a));
		};
	}
	function T(e) {
		return function(t, n) {
			f(n), t = b(t);
			var i = r.createSign("RSA-SHA" + e);
			return m((i.update(t), i.sign(n, "base64")));
		};
	}
	function ne(e) {
		return function(t, n, i) {
			d(i), t = b(t), n = h(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify(i, n, "base64");
		};
	}
	function re(e) {
		return function(t, n) {
			f(n), t = b(t);
			var i = r.createSign("RSA-SHA" + e);
			return m((i.update(t), i.sign({
				key: n,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, "base64")));
		};
	}
	function ie(e) {
		return function(t, n, i) {
			d(i), t = b(t), n = h(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify({
				key: i,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, n, "base64");
		};
	}
	function E(e) {
		var t = T(e);
		return function() {
			var n = t.apply(null, arguments);
			return n = i.derToJose(n, "ES" + e), n;
		};
	}
	function D(e) {
		var t = ne(e);
		return function(n, r, a) {
			return r = i.joseToDer(r, "ES" + e).toString("base64"), t(n, r, a);
		};
	}
	function ae() {
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
			hs: C,
			rs: T,
			ps: re,
			es: E,
			none: ae
		}, n = {
			hs: te,
			rs: ne,
			ps: ie,
			es: D,
			none: oe
		}, r = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
		if (!r) throw g(o, e);
		var i = (r[1] || r[3]).toLowerCase(), a = r[2];
		return {
			sign: t[i](a),
			verify: n[i](a)
		};
	};
})), w = /* @__PURE__ */ a(((e, t) => {
	var n = g().Buffer;
	t.exports = function(e) {
		return typeof e == "string" ? e : typeof e == "number" || n.isBuffer(e) ? e.toString() : JSON.stringify(e);
	};
})), ee = /* @__PURE__ */ a(((e, t) => {
	var n = _().Buffer, r = y(), i = C(), a = v(), o = w(), s = v();
	function c(e, t) {
		return n.from(e, t).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
	}
	function l(e, t, n) {
		n ||= "utf8";
		var r = c(o(e), "binary"), i = c(o(t), n);
		return s.format("%s.%s", r, i);
	}
	function u(e) {
		var t = e.header, n = e.payload, r = e.secret || e.privateKey, a = e.encoding, o = i(t.alg), c = l(t, n, a), u = o.sign(c, r);
		return s.format("%s.%s", c, u);
	}
	function d(e) {
		var t = e.secret;
		if (t ??= e.privateKey, t ??= e.key, /^hs/i.test(e.header.alg) === !0 && t == null) throw TypeError("secret must be a string or buffer or a KeyObject");
		var n = new r(t);
		this.readable = !0, this.header = e.header, this.encoding = e.encoding, this.secret = this.privateKey = this.key = n, this.payload = new r(e.payload), this.secret.once("close", function() {
			!this.payload.writable && this.readable && this.sign();
		}.bind(this)), this.payload.once("close", function() {
			!this.secret.writable && this.readable && this.sign();
		}.bind(this));
	}
	s.inherits(d, a), d.prototype.sign = function() {
		try {
			var e = u({
				header: this.header,
				payload: this.payload.buffer,
				secret: this.secret.buffer,
				encoding: this.encoding
			});
			return this.emit("done", e), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, d.sign = u, t.exports = d;
})), te = /* @__PURE__ */ a(((e, t) => {
	var n = _().Buffer, r = y(), i = C(), a = v(), o = w(), s = v(), c = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
	function l(e) {
		return Object.prototype.toString.call(e) === "[object Object]";
	}
	function u(e) {
		if (l(e)) return e;
		try {
			return JSON.parse(e);
		} catch {
			return;
		}
	}
	function d(e) {
		var t = e.split(".", 1)[0];
		return u(n.from(t, "base64").toString("binary"));
	}
	function f(e) {
		return e.split(".", 2).join(".");
	}
	function p(e) {
		return e.split(".")[2];
	}
	function m(e, t) {
		t ||= "utf8";
		var r = e.split(".")[1];
		return n.from(r, "base64").toString(t);
	}
	function h(e) {
		return c.test(e) && !!d(e);
	}
	function g(e, t, n) {
		if (!t) {
			var r = /* @__PURE__ */ Error("Missing algorithm parameter for jws.verify");
			throw r.code = "MISSING_ALGORITHM", r;
		}
		e = o(e);
		var a = p(e), s = f(e);
		return i(t).verify(s, a, n);
	}
	function b(e, t) {
		if (t ||= {}, e = o(e), !h(e)) return null;
		var n = d(e);
		if (!n) return null;
		var r = m(e);
		return (n.typ === "JWT" || t.json) && (r = JSON.parse(r, t.encoding)), {
			header: n,
			payload: r,
			signature: p(e)
		};
	}
	function x(e) {
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
	s.inherits(x, a), x.prototype.verify = function() {
		try {
			var e = g(this.signature.buffer, this.algorithm, this.key.buffer), t = b(this.signature.buffer, this.encoding);
			return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, x.decode = b, x.isValid = h, x.verify = g, t.exports = x;
})), T = /* @__PURE__ */ a(((e) => {
	var t = ee(), n = te();
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
})), ne = /* @__PURE__ */ a(((e, t) => {
	var n = T();
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
})), re = /* @__PURE__ */ a(((e, t) => {
	var n = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
	};
	n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
})), ie = /* @__PURE__ */ a(((e, t) => {
	var n = re(), r = function(e, t) {
		n.call(this, e), this.name = "NotBeforeError", this.date = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), E = /* @__PURE__ */ a(((e, t) => {
	var n = re(), r = function(e, t) {
		n.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), D = /* @__PURE__ */ a(((e, t) => {
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
})), ae = /* @__PURE__ */ a(((e, t) => {
	var n = D();
	t.exports = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if (typeof e == "string") {
			var i = n(e);
			return i === void 0 ? void 0 : Math.floor(r + i / 1e3);
		} else if (typeof e == "number") return r + e;
		else return;
	};
})), oe = /* @__PURE__ */ a(((e, t) => {
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
})), se = /* @__PURE__ */ a(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), ce = /* @__PURE__ */ a(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = oe(), a = se();
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
})), le = /* @__PURE__ */ a(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), ue = /* @__PURE__ */ a(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), O = /* @__PURE__ */ a(((e, t) => {
	var n = se(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = oe(), { safeRe: a, t: o } = ce(), s = le(), { compareIdentifiers: c } = ue();
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
})), k = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), de = /* @__PURE__ */ a(((e, t) => {
	var n = k();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), fe = /* @__PURE__ */ a(((e, t) => {
	var n = k();
	t.exports = (e, t) => {
		let r = n(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
})), pe = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t, r, i, a) => {
		typeof r == "string" && (a = i, i = r, r = void 0);
		try {
			return new n(e instanceof n ? e.version : e, r).inc(t, i, a).version;
		} catch {
			return null;
		}
	};
})), me = /* @__PURE__ */ a(((e, t) => {
	var n = k();
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
})), A = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t) => new n(e, t).major;
})), he = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t) => new n(e, t).minor;
})), ge = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t) => new n(e, t).patch;
})), _e = /* @__PURE__ */ a(((e, t) => {
	var n = k();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
})), ve = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), ye = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(t, e, r);
})), j = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t) => n(e, t, !0);
})), M = /* @__PURE__ */ a(((e, t) => {
	var n = O();
	t.exports = (e, t, r) => {
		let i = new n(e, r), a = new n(t, r);
		return i.compare(a) || i.compareBuild(a);
	};
})), be = /* @__PURE__ */ a(((e, t) => {
	var n = M();
	t.exports = (e, t) => e.sort((e, r) => n(e, r, t));
})), xe = /* @__PURE__ */ a(((e, t) => {
	var n = M();
	t.exports = (e, t) => e.sort((e, r) => n(r, e, t));
})), Se = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), Ce = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), we = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), N = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), Te = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), Ee = /* @__PURE__ */ a(((e, t) => {
	var n = ve();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), De = /* @__PURE__ */ a(((e, t) => {
	var n = we(), r = N(), i = Se(), a = Te(), o = Ce(), s = Ee();
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
})), P = /* @__PURE__ */ a(((e, t) => {
	var n = O(), r = k(), { safeRe: i, t: a } = ce();
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
})), F = /* @__PURE__ */ a(((e, t) => {
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
})), I = /* @__PURE__ */ a(((e, t) => {
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
			let g = e.split(" ").map((e) => v(e, this.options)).join(" ").split(/\s+/).map((e) => T(e, this.options));
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
	var r = new (F())(), i = le(), a = Oe(), o = se(), s = O(), { safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: d, caretTrimReplace: f } = ce(), { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = oe(), h = (e) => e.value === "<0.0.0-0", g = (e) => e.value === "", _ = (e, t) => {
		let n = !0, r = e.slice(), i = r.pop();
		for (; n && r.length;) n = r.every((e) => i.intersects(e, t)), i = r.pop();
		return n;
	}, v = (e, t) => (e = e.replace(c[l.BUILD], ""), o("comp", e, t), e = S(e, t), o("caret", e), e = b(e, t), o("tildes", e), e = w(e, t), o("xrange", e), e = te(e, t), o("stars", e), e), y = (e) => !e || e.toLowerCase() === "x" || e === "*", b = (e, t) => e.trim().split(/\s+/).map((e) => x(e, t)).join(" "), x = (e, t) => {
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
	}, w = (e, t) => (o("replaceXRanges", e, t), e.split(/\s+/).map((e) => ee(e, t)).join(" ")), ee = (e, t) => {
		e = e.trim();
		let n = t.loose ? c[l.XRANGELOOSE] : c[l.XRANGE];
		return e.replace(n, (n, r, i, a, s, c) => {
			o("xRange", e, n, r, i, a, s, c);
			let l = y(i), u = l || y(a), d = u || y(s), f = d;
			return r === "=" && f && (r = ""), c = t.includePrerelease ? "-0" : "", l ? n = r === ">" || r === "<" ? "<0.0.0-0" : "*" : r && f ? (u && (a = 0), s = 0, r === ">" ? (r = ">=", u ? (i = +i + 1, a = 0, s = 0) : (a = +a + 1, s = 0)) : r === "<=" && (r = "<", u ? i = +i + 1 : a = +a + 1), r === "<" && (c = "-0"), n = `${r + i}.${a}.${s}${c}`) : u ? n = `>=${i}.0.0${c} <${+i + 1}.0.0-0` : d && (n = `>=${i}.${a}.0${c} <${i}.${+a + 1}.0-0`), o("xRange return", n), n;
		});
	}, te = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[l.STAR], "")), T = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")), ne = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = y(r) ? "" : y(i) ? `>=${r}.0.0${e ? "-0" : ""}` : y(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = y(l) ? "" : y(u) ? `<${+l + 1}.0.0-0` : y(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), re = (e, t, n) => {
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
})), Oe = /* @__PURE__ */ a(((e, t) => {
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
	var r = le(), { safeRe: i, t: a } = ce(), o = De(), s = se(), c = O(), l = I();
})), ke = /* @__PURE__ */ a(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), Ae = /* @__PURE__ */ a(((e, t) => {
	var n = I();
	t.exports = (e, t) => new n(e, t).set.map((e) => e.map((e) => e.value).join(" ").trim().split(" "));
})), L = /* @__PURE__ */ a(((e, t) => {
	var n = O(), r = I();
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
})), R = /* @__PURE__ */ a(((e, t) => {
	var n = O(), r = I();
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
})), je = /* @__PURE__ */ a(((e, t) => {
	var n = O(), r = I(), i = Se();
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
})), Me = /* @__PURE__ */ a(((e, t) => {
	var n = I();
	t.exports = (e, t) => {
		try {
			return new n(e, t).range || "*";
		} catch {
			return null;
		}
	};
})), Ne = /* @__PURE__ */ a(((e, t) => {
	var n = O(), r = Oe(), { ANY: i } = r, a = I(), o = ke(), s = Se(), c = Ce(), l = Ee(), u = Te();
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
})), Pe = /* @__PURE__ */ a(((e, t) => {
	var n = Ne();
	t.exports = (e, t, r) => n(e, t, ">", r);
})), Fe = /* @__PURE__ */ a(((e, t) => {
	var n = Ne();
	t.exports = (e, t, r) => n(e, t, "<", r);
})), Ie = /* @__PURE__ */ a(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
})), Le = /* @__PURE__ */ a(((e, t) => {
	var n = ke(), r = ve();
	t.exports = (e, t, i) => {
		let a = [], o = null, s = null, c = e.sort((e, t) => r(e, t, i));
		for (let e of c) n(e, t, i) ? (s = e, o ||= e) : (s && a.push([o, s]), s = null, o = null);
		o && a.push([o, null]);
		let l = [];
		for (let [e, t] of a) e === t ? l.push(e) : !t && e === c[0] ? l.push("*") : t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`);
		let u = l.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
		return u.length < d.length ? u : t;
	};
})), Re = /* @__PURE__ */ a(((e, t) => {
	var n = I(), r = Oe(), { ANY: i } = r, a = ke(), o = ve(), s = (e, t, r = {}) => {
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
})), ze = /* @__PURE__ */ a(((e, t) => {
	var n = ce(), r = oe(), i = O(), a = ue();
	t.exports = {
		parse: k(),
		valid: de(),
		clean: fe(),
		inc: pe(),
		diff: me(),
		major: A(),
		minor: he(),
		patch: ge(),
		prerelease: _e(),
		compare: ve(),
		rcompare: ye(),
		compareLoose: j(),
		compareBuild: M(),
		sort: be(),
		rsort: xe(),
		gt: Se(),
		lt: Ce(),
		eq: we(),
		neq: N(),
		gte: Te(),
		lte: Ee(),
		cmp: De(),
		coerce: P(),
		Comparator: Oe(),
		Range: I(),
		satisfies: ke(),
		toComparators: Ae(),
		maxSatisfying: L(),
		minSatisfying: R(),
		minVersion: je(),
		validRange: Me(),
		outside: Ne(),
		gtr: Pe(),
		ltr: Fe(),
		intersects: Ie(),
		simplifyRange: Le(),
		subset: Re(),
		SemVer: i,
		re: n.re,
		src: n.src,
		tokens: n.t,
		SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
		RELEASE_TYPES: r.RELEASE_TYPES,
		compareIdentifiers: a.compareIdentifiers,
		rcompareIdentifiers: a.rcompareIdentifiers
	};
})), Be = /* @__PURE__ */ a(((e, t) => {
	t.exports = ze().satisfies(process.version, ">=15.7.0");
})), Ve = /* @__PURE__ */ a(((e, t) => {
	t.exports = ze().satisfies(process.version, ">=16.9.0");
})), He = /* @__PURE__ */ a(((e, t) => {
	var n = Be(), r = Ve(), i = {
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
})), Ue = /* @__PURE__ */ a(((e, t) => {
	t.exports = ze().satisfies(process.version, "^6.12.0 || >=8.0.0");
})), We = /* @__PURE__ */ a(((e, t) => {
	var n = re(), r = ie(), i = E(), a = ne(), o = ae(), s = He(), c = Ue(), l = T(), { KeyObject: u, createSecretKey: d, createPublicKey: f } = v(), p = [
		"RS256",
		"RS384",
		"RS512"
	], m = [
		"ES256",
		"ES384",
		"ES512"
	], h = [
		"RS256",
		"RS384",
		"RS512"
	], g = [
		"HS256",
		"HS384",
		"HS512"
	];
	c && (p.splice(p.length, 0, "PS256", "PS384", "PS512"), h.splice(h.length, 0, "PS256", "PS384", "PS512")), t.exports = function(e, t, c, _) {
		typeof c == "function" && !_ && (_ = c, c = {}), c ||= {}, c = Object.assign({}, c);
		let v;
		if (v = _ || function(e, t) {
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
			if (!_) return v(new n("verify must be called asynchronous if secret or public key is provided as a callback"));
			C = t;
		} else C = function(e, n) {
			return n(null, t);
		};
		return C(S, function(t, a) {
			if (t) return v(new n("error in secret or public key callback: " + t.message));
			let _ = b[2].trim() !== "";
			if (!_ && a) return v(new n("jwt signature is required"));
			if (_ && !a) return v(new n("secret or public key must be provided"));
			if (!_ && !c.algorithms) return v(new n("please specify \"none\" in \"algorithms\" to verify unsigned tokens"));
			if (a != null && !(a instanceof u)) try {
				a = f(a);
			} catch {
				try {
					a = d(typeof a == "string" ? Buffer.from(a) : a);
				} catch {
					return v(new n("secretOrPublicKey is not valid key material"));
				}
			}
			if (c.algorithms || (a.type === "secret" ? c.algorithms = g : ["rsa", "rsa-pss"].includes(a.asymmetricKeyType) ? c.algorithms = h : a.asymmetricKeyType === "ec" ? c.algorithms = m : c.algorithms = p), c.algorithms.indexOf(x.header.alg) === -1) return v(new n("invalid algorithm"));
			if (S.alg.startsWith("HS") && a.type !== "secret") return v(new n(`secretOrPublicKey must be a symmetric key when using ${S.alg}`));
			if (/^(?:RS|PS|ES)/.test(S.alg) && a.type !== "public") return v(new n(`secretOrPublicKey must be an asymmetric key when using ${S.alg}`));
			if (!c.allowInvalidAsymmetricKeyTypes) try {
				s(S.alg, a);
			} catch (e) {
				return v(e);
			}
			let C;
			try {
				C = l.verify(e, x.header.alg, a);
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
})), Ge = /* @__PURE__ */ a(((e, t) => {
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
	var w = Object.prototype, ee = w.hasOwnProperty, te = w.toString, T = w.propertyIsEnumerable, ne = C(Object.keys, Object), re = Math.max;
	function ie(e, t) {
		var n = ce(e) || se(e) ? x(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || ee.call(e, a)) && !(i && (a == "length" || D(a, r))) && n.push(a);
		return n;
	}
	function E(e) {
		if (!ae(e)) return ne(e);
		var t = [];
		for (var n in Object(e)) ee.call(e, n) && n != "constructor" && t.push(n);
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
		e = le(e) ? e : ve(e), n = n && !r ? he(n) : 0;
		var i = e.length;
		return n < 0 && (n = re(i + n, 0)), pe(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1;
	}
	function se(e) {
		return ue(e) && ee.call(e, "callee") && (!T.call(e, "callee") || te.call(e) == o);
	}
	var ce = Array.isArray;
	function le(e) {
		return e != null && k(e.length) && !O(e);
	}
	function ue(e) {
		return fe(e) && le(e);
	}
	function O(e) {
		var t = de(e) ? te.call(e) : "";
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
		return typeof e == "string" || !ce(e) && fe(e) && te.call(e) == l;
	}
	function me(e) {
		return typeof e == "symbol" || fe(e) && te.call(e) == u;
	}
	function A(e) {
		return e ? (e = ge(e), e === n || e === -n ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function he(e) {
		var t = A(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function ge(e) {
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
	function _e(e) {
		return le(e) ? ie(e) : E(e);
	}
	function ve(e) {
		return e ? S(e, _e(e)) : [];
	}
	t.exports = oe;
})), Ke = /* @__PURE__ */ a(((e, t) => {
	var n = "[object Boolean]", r = Object.prototype.toString;
	function i(e) {
		return e === !0 || e === !1 || a(e) && r.call(e) == n;
	}
	function a(e) {
		return !!e && typeof e == "object";
	}
	t.exports = i;
})), qe = /* @__PURE__ */ a(((e, t) => {
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
})), Je = /* @__PURE__ */ a(((e, t) => {
	var n = "[object Number]", r = Object.prototype.toString;
	function i(e) {
		return !!e && typeof e == "object";
	}
	function a(e) {
		return typeof e == "number" || i(e) && r.call(e) == n;
	}
	t.exports = a;
})), Ye = /* @__PURE__ */ a(((e, t) => {
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
})), Xe = /* @__PURE__ */ a(((e, t) => {
	var n = "[object String]", r = Object.prototype.toString, i = Array.isArray;
	function a(e) {
		return !!e && typeof e == "object";
	}
	function o(e) {
		return typeof e == "string" || !i(e) && a(e) && r.call(e) == n;
	}
	t.exports = o;
})), Ze = /* @__PURE__ */ a(((e, t) => {
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
})), Qe = /* @__PURE__ */ a(((e, t) => {
	var n = ae(), r = Ue(), i = He(), a = T(), o = Ge(), s = Ke(), c = qe(), l = Je(), u = Ye(), d = Xe(), f = Ze(), { KeyObject: p, createSecretKey: m, createPrivateKey: h } = v(), g = [
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
	r && g.splice(3, 0, "PS256", "PS384", "PS512");
	var _ = {
		expiresIn: {
			isValid: function(e) {
				return c(e) || d(e) && e;
			},
			message: "\"expiresIn\" should be a number of seconds or string representing a timespan"
		},
		notBefore: {
			isValid: function(e) {
				return c(e) || d(e) && e;
			},
			message: "\"notBefore\" should be a number of seconds or string representing a timespan"
		},
		audience: {
			isValid: function(e) {
				return d(e) || Array.isArray(e);
			},
			message: "\"audience\" must be a string or array"
		},
		algorithm: {
			isValid: o.bind(null, g),
			message: "\"algorithm\" must be a valid string enum value"
		},
		header: {
			isValid: u,
			message: "\"header\" must be an object"
		},
		encoding: {
			isValid: d,
			message: "\"encoding\" must be a string"
		},
		issuer: {
			isValid: d,
			message: "\"issuer\" must be a string"
		},
		subject: {
			isValid: d,
			message: "\"subject\" must be a string"
		},
		jwtid: {
			isValid: d,
			message: "\"jwtid\" must be a string"
		},
		noTimestamp: {
			isValid: s,
			message: "\"noTimestamp\" must be a boolean"
		},
		keyid: {
			isValid: d,
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
			isValid: l,
			message: "\"iat\" should be a number of seconds"
		},
		exp: {
			isValid: l,
			message: "\"exp\" should be a number of seconds"
		},
		nbf: {
			isValid: l,
			message: "\"nbf\" should be a number of seconds"
		}
	};
	function b(e, t, n, r) {
		if (!u(n)) throw Error("Expected \"" + r + "\" to be a plain object.");
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
		return b(_, !1, e, "options");
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
		if (t != null && !(t instanceof p)) try {
			t = h(t);
		} catch {
			try {
				t = m(typeof t == "string" ? Buffer.from(t) : t);
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
		if (typeof o == "function") o &&= f(o), a.createSign({
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
})), $e = /* @__PURE__ */ a(((e, t) => {
	t.exports = {
		decode: ne(),
		verify: We(),
		sign: Qe(),
		JsonWebTokenError: re(),
		NotBeforeError: ie(),
		TokenExpiredError: E()
	};
})), et = /* @__PURE__ */ r($e()), tt = {
	secret: process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET,
	providers: [],
	callbacks: {
		jwt: async ({ token: e, user: t }) => (t && (e.userId = t.id, e.role = t.role, e.organizationId = t.organizationId), e),
		session: async ({ session: e, token: t }) => (t && (e.user.id = t.userId, e.user.role = t.role, e.user.organizationId = t.organizationId), e)
	}
}, nt = /* @__PURE__ */ r(v());
//#endregion
//#region ../../node_modules/server-only/index.js
throw Error("This module cannot be imported from a Client Component module. It should only be used from a Server Component.");
function rt(e, t, n) {
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
function it(e) {
	return e && Object.assign(lv, e), lv;
}
//#endregion
//#region ../../node_modules/zod/v4/core/util.js
function at(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function ot(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function st(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function ct(e) {
	return e == null;
}
function lt(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function ut(e, t) {
	let n = (e.toString().split(".")[1] || "").length, r = t.toString(), i = (r.split(".")[1] || "").length;
	if (i === 0 && /\d?e-\d?/.test(r)) {
		let e = r.match(/\d?e-(\d?)/);
		e?.[1] && (i = Number.parseInt(e[1]));
	}
	let a = n > i ? n : i;
	return Number.parseInt(e.toFixed(a).replace(".", "")) % Number.parseInt(t.toFixed(a).replace(".", "")) / 10 ** a;
}
function dt(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== uv) return r === void 0 && (r = uv, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function ft(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function pt(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function mt(e) {
	return JSON.stringify(e);
}
function ht(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function gt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function _t(e) {
	if (gt(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(gt(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function vt(e) {
	return _t(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function yt(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function bt(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function z(e) {
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
function xt(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function St(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return bt(e, pt(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return ft(this, "shape", e), e;
		},
		checks: []
	}));
}
function Ct(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return bt(e, pt(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return ft(this, "shape", r), r;
		},
		checks: []
	}));
}
function wt(e, t) {
	if (!_t(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return bt(e, pt(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return ft(this, "shape", n), n;
	} }));
}
function Tt(e, t) {
	if (!_t(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return bt(e, pt(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return ft(this, "shape", n), n;
	} }));
}
function Et(e, t) {
	return bt(e, pt(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return ft(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: []
	}));
}
function Dt(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return bt(t, pt(t._zod.def, {
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
			return ft(this, "shape", i), i;
		},
		checks: []
	}));
}
function Ot(e, t, n) {
	return bt(t, pt(t._zod.def, { get shape() {
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
		return ft(this, "shape", i), i;
	} }));
}
function kt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function At(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function jt(e) {
	return typeof e == "string" ? e : e?.message;
}
function Mt(e, t, n) {
	let r = {
		...e,
		path: e.path ?? []
	};
	return e.message || (r.message = jt(e.inst?._zod.def?.error?.(e)) ?? jt(t?.error?.(e)) ?? jt(n.customError?.(e)) ?? jt(n.localeError?.(e)) ?? "Invalid input"), delete r.inst, delete r.continue, t?.reportInput || delete r.input, r;
}
function Nt(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Pt(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function Ft(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function It(e, t = (e) => e.message) {
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
function Lt() {
	return new RegExp(dv, "u");
}
function Rt(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function zt(e) {
	return RegExp(`^${Rt(e)}$`);
}
function Bt(e) {
	let t = Rt({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${pv}T(?:${r})$`);
}
function Vt(e) {
	if (e === "") return !0;
	if (e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Ht(e) {
	if (!fv.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Vt(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Ut(e, t = null) {
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
function Wt(e, t, n) {
	e.issues.length && t.issues.push(...At(n, e.issues)), t.value[n] = e.value;
}
function Gt(e, t, n, r, i) {
	if (e.issues.length) {
		if (i && !(n in r)) return;
		t.issues.push(...At(n, e.issues));
	}
	e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Kt(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = xt(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function qt(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => Gt(e, n, i, t, u))) : Gt(a, n, i, t, u);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Jt(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !kt(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Mt(e, r, it())))
	}), t);
}
function Yt(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (_t(e) && _t(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = Yt(e[n], t[n]);
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
			let i = e[r], a = t[r], o = Yt(i, a);
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
function Xt(e, t, n) {
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
	}), kt(e)) return e;
	let o = Yt(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
function Zt(e, t) {
	return e.issues.length && t === void 0 ? {
		issues: [],
		value: void 0
	} : e;
}
function eee(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Qt(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function $t(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function en(e) {
	return e.value = Object.freeze(e.value), e;
}
function tn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(Pt(e));
	}
}
function nn() {
	return new yy();
}
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function rn(e, t) {
	return new e({
		type: "string",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function an(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function on(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function sn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ln(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function un(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function dn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function fn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function pn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function mn(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function hn(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function gn(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _n(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function vn(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function yn(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function bn(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function xn(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Sn(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Cn(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function wn(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Tn(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function En(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Dn(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function On(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function kn(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function An(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function jn(e, t) {
	return new e({
		type: "number",
		checks: [],
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Mn(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Nn(e) {
	return new e({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function Pn(e, t) {
	return new e({
		type: "never",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Fn(e, t) {
	return new e({
		type: "date",
		...z(t)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function In(e, t) {
	return new hv({
		check: "less_than",
		...z(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Ln(e, t) {
	return new hv({
		check: "less_than",
		...z(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Rn(e, t) {
	return new gv({
		check: "greater_than",
		...z(t),
		value: e,
		inclusive: !1
	});
}
/* @__NO_SIDE_EFFECTS__ */
function zn(e, t) {
	return new gv({
		check: "greater_than",
		...z(t),
		value: e,
		inclusive: !0
	});
}
/* @__NO_SIDE_EFFECTS__ */
function tee(e, t) {
	return new _v({
		check: "multiple_of",
		...z(t),
		value: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function nee(e, t) {
	return new vv({
		check: "max_length",
		...z(t),
		maximum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function ree(e, t) {
	return new yv({
		check: "min_length",
		...z(t),
		minimum: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function iee(e, t) {
	return new bv({
		check: "length_equals",
		...z(t),
		length: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function aee(e, t) {
	return new xv({
		check: "string_format",
		format: "regex",
		...z(t),
		pattern: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function oee(e) {
	return new Sv({
		check: "string_format",
		format: "lowercase",
		...z(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function see(e) {
	return new Cv({
		check: "string_format",
		format: "uppercase",
		...z(e)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function cee(e, t) {
	return new wv({
		check: "string_format",
		format: "includes",
		...z(t),
		includes: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function lee(e, t) {
	return new Tv({
		check: "string_format",
		format: "starts_with",
		...z(t),
		prefix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function uee(e, t) {
	return new Ev({
		check: "string_format",
		format: "ends_with",
		...z(t),
		suffix: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Bn(e) {
	return new Dv({
		check: "overwrite",
		tx: e
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Vn(e) {
	return /* @__PURE__ */ Bn((t) => t.normalize(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Hn() {
	return /* @__PURE__ */ Bn((e) => e.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function Un() {
	return /* @__PURE__ */ Bn((e) => e.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Wn() {
	return /* @__PURE__ */ Bn((e) => e.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function Gn() {
	return /* @__PURE__ */ Bn((e) => ht(e));
}
/* @__NO_SIDE_EFFECTS__ */
function Kn(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...z(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function qn(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...z(n)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function Jn(e) {
	let t = /* @__PURE__ */ Yn((n) => (n.addIssue = (e) => {
		if (typeof e == "string") n.issues.push(Pt(e, n.value, t._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= n.value, r.inst ??= t, r.continue ??= !t._zod.def.abort, n.issues.push(Pt(r));
		}
	}, e(n.value, n)));
	return t;
}
/* @__NO_SIDE_EFFECTS__ */
function Yn(e, t) {
	let n = new mv({
		check: "custom",
		...z(t)
	});
	return n._zod.check = e, n;
}
/* @__NO_SIDE_EFFECTS__ */
function Xn(e) {
	let t = new mv({ check: "describe" });
	return t._zod.onattach = [(t) => {
		let n = by.get(t) ?? {};
		by.add(t, {
			...n,
			description: e
		});
	}], t._zod.check = () => {}, t;
}
/* @__NO_SIDE_EFFECTS__ */
function Zn(e) {
	let t = new mv({ check: "meta" });
	return t._zod.onattach = [(t) => {
		let n = by.get(t) ?? {};
		by.add(t, {
			...n,
			...e
		});
	}], t._zod.check = () => {}, t;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function Qn(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? by,
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
function $n(e, t, n = {
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
		a && (o.ref ||= a, $n(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && nr(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && o.schema._prefault && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function er(e, t) {
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
function tr(e, t) {
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
					input: Sy(t, "input", e.processors),
					output: Sy(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function nr(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return nr(r.element, n);
	if (r.type === "set") return nr(r.valueType, n);
	if (r.type === "lazy") return nr(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return nr(r.innerType, n);
	if (r.type === "intersection") return nr(r.left, n) || nr(r.right, n);
	if (r.type === "record" || r.type === "map") return nr(r.keyType, n) || nr(r.valueType, n);
	if (r.type === "pipe") return nr(r.in, n) || nr(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (nr(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (nr(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (nr(e, n)) return !0;
		return !!(r.rest && nr(r.rest, n));
	}
	return !1;
}
function rr(e) {
	return /* @__PURE__ */ Dn(Wy, e);
}
function ir(e) {
	return /* @__PURE__ */ On(Gy, e);
}
function ar(e) {
	return /* @__PURE__ */ kn(Ky, e);
}
function or(e) {
	return /* @__PURE__ */ An(qy, e);
}
function sr(e) {
	return /* @__PURE__ */ rn(db, e);
}
function cr(e) {
	return /* @__PURE__ */ jn(Mb, e);
}
function lr(e) {
	return /* @__PURE__ */ Mn(Nb, e);
}
function ur() {
	return /* @__PURE__ */ Nn(Pb);
}
function dr(e) {
	return /* @__PURE__ */ Pn(Fb, e);
}
function fr(e) {
	return /* @__PURE__ */ Fn(Ib, e);
}
function pr(e, t) {
	return /* @__PURE__ */ Kn(Lb, e, t);
}
function mr(e, t) {
	return new Rb({
		type: "object",
		shape: e ?? {},
		...z(t)
	});
}
function hr(e, t) {
	return new zb({
		type: "union",
		options: e,
		...z(t)
	});
}
function gr(e, t) {
	return new Bb({
		type: "intersection",
		left: e,
		right: t
	});
}
function _r(e, t) {
	return new Vb({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...z(t)
	});
}
function vr(e, t) {
	return new Vb({
		type: "enum",
		entries: e,
		...z(t)
	});
}
function yr(e) {
	return new Hb({
		type: "transform",
		transform: e
	});
}
function br(e) {
	return new Ub({
		type: "optional",
		innerType: e
	});
}
function xr(e) {
	return new Wb({
		type: "optional",
		innerType: e
	});
}
function Sr(e) {
	return new Gb({
		type: "nullable",
		innerType: e
	});
}
function Cr(e, t) {
	return new Kb({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : vt(t);
		}
	});
}
function wr(e, t) {
	return new qb({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : vt(t);
		}
	});
}
function Tr(e, t) {
	return new Jb({
		type: "nonoptional",
		innerType: e,
		...z(t)
	});
}
function Er(e, t) {
	return new Yb({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
function Dr(e, t) {
	return new Xb({
		type: "pipe",
		in: e,
		out: t
	});
}
function Or(e) {
	return new Zb({
		type: "readonly",
		innerType: e
	});
}
function kr(e, t = {}) {
	return /* @__PURE__ */ qn(Qb, e, t);
}
function Ar(e) {
	return /* @__PURE__ */ Jn(e);
}
function jr(e) {
	if (e.status === cv.POSTED) throw new rx(e.id);
}
//#endregion
//#region ../utilities/src/lib/utility-allocation-service.ts
function Mr(e) {
	switch (e) {
		case cv.DRAFT: return cv.DRAFT;
		case cv.PROCESSING: return cv.PROCESSING;
		case cv.APPROVED: return cv.APPROVED;
		case cv.POSTED: return cv.POSTED;
		default: return cv.DRAFT;
	}
}
function Nr(e) {
	return {
		id: e.id,
		status: Mr(e.status),
		totalAmount: Number(e.totalAmount)
	};
}
function Pr(e, t) {
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
function Fr(e) {
	return typeof e == "function" ? e : (t) => t.$extends(e);
}
function Ir(e) {
	return e;
}
function Lr(...e) {
	return (e) => e;
}
function Rr(e, t) {
	let n = RegExp(`\\x1b\\[${t}m`, "g"), r = `\x1B[${e}m`, i = `\x1B[${t}m`;
	return function(e) {
		return !Hx.enabled || e == null ? e : r + (~("" + e).indexOf(i) ? e.replace(n, i + r) : e) + i;
	};
}
function zr(e) {
	let t = {
		color: gS[yS++ % gS.length],
		enabled: xS.enabled(e),
		namespace: e,
		log: xS.log,
		extend: () => {}
	};
	return new Proxy((...e) => {
		let { enabled: n, namespace: r, color: i, log: a } = t;
		if (e.length !== 0 && _S.push([r, ...e]), _S.length > hS && _S.shift(), xS.enabled(r) || n) {
			let t = e.map((e) => typeof e == "string" ? e : Br(e)), n = `+${Date.now() - vS}ms`;
			vS = Date.now(), globalThis.DEBUG_COLORS ? a(Ix[i](Wx(r)), ...t, Ix[i](n)) : a(r, ...t, n);
		}
	}, {
		get: (e, n) => t[n],
		set: (e, n, r) => t[n] = r
	});
}
function Br(e, t = 2) {
	let n = /* @__PURE__ */ new Set();
	return JSON.stringify(e, (e, t) => {
		if (typeof t == "object" && t) {
			if (n.has(t)) return "[Circular *]";
			n.add(t);
		} else if (typeof t == "bigint") return t.toString();
		return t;
	}, t);
}
function Vr(e) {
	return Object.assign(e, {
		optional: () => Hr(e),
		and: (t) => Ur(e, t),
		or: (t) => Wr(e, t),
		select: (t) => t === void 0 ? Kr(e) : Kr(t, e)
	});
}
function Hr(e) {
	return Vr({ [TS]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return t === void 0 ? (jS(e).forEach((e) => r(e, void 0)), {
				matched: !0,
				selections: n
			}) : {
				matched: AS(e, t, r),
				selections: n
			};
		},
		getSelectionKeys: () => jS(e),
		matcherType: "optional"
	}) });
}
function Ur(...e) {
	return Vr({ [TS]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return {
				matched: e.every((e) => AS(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => MS(e, jS),
		matcherType: "and"
	}) });
}
function Wr(...e) {
	return Vr({ [TS]: () => ({
		match: (t) => {
			let n = {}, r = (e, t) => {
				n[e] = t;
			};
			return MS(e, jS).forEach((e) => r(e, void 0)), {
				matched: e.some((e) => AS(e, t, r)),
				selections: n
			};
		},
		getSelectionKeys: () => MS(e, jS),
		matcherType: "or"
	}) });
}
function Gr(e) {
	return { [TS]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Kr(...e) {
	let t = typeof e[0] == "string" ? e[0] : void 0, n = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
	return Vr({ [TS]: () => ({
		match: (e) => {
			let r = { [t ?? DS]: e };
			return {
				matched: n === void 0 || AS(n, e, (e, t) => {
					r[e] = t;
				}),
				selections: r
			};
		},
		getSelectionKeys: () => [t ?? DS].concat(n === void 0 ? [] : jS(n))
	}) });
}
function qr(e) {
	return typeof e == "number";
}
function Jr(e) {
	return typeof e == "string";
}
function Yr(e) {
	return typeof e == "bigint";
}
function Xr(e, t, { target: n = "stdout", ...r } = {}) {
	return OC.default[n] ? VS.link(e, t) : r.fallback === !1 ? e : typeof r.fallback == "function" ? r.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
}
function Zr(e) {
	let t = (0, NC.default)(e);
	if (t === 0) return e;
	let n = RegExp(`^[ \\t]{${t}}`, "gm");
	return e.replace(n, "");
}
function Qr(e) {
	return e?.toString().startsWith(`${PC}//`) ?? !1;
}
function $r(e) {
	if (!Qr(e)) return !1;
	let { host: t } = new URL(e);
	return t.includes("localhost") || t.includes("127.0.0.1") || t.includes("[::1]");
}
function ei(...e) {
	console.log(...e);
}
function ti(e, ...t) {
	RC.warn() && console.warn(`${LC.warn} ${e}`, ...t);
}
function ni(e, ...t) {
	console.info(`${LC.info} ${e}`, ...t);
}
function ri(e, ...t) {
	console.error(`${LC.error} ${e}`, ...t);
}
function ii(e, ...t) {
	console.log(`${LC.query} ${e}`, ...t);
}
function ai(e, t) {
	throw Error(t);
}
function oi({ onlyFirst: e = !1 } = {}) {
	let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
	return new RegExp(t, e ? void 0 : "g");
}
function si(e) {
	if (typeof e != "string") throw TypeError(`Expected a \`string\`, got \`${typeof e}\``);
	return e.replace(zC, "");
}
function ci(e, t) {
	if (e.length === 0) return;
	let n = e[0];
	for (let r = 1; r < e.length; r++) t(n, e[r]) < 0 && (n = e[r]);
	return n;
}
function li(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
function ui(e) {
	return e.substring(0, 1).toLowerCase() + e.substring(1);
}
function di(e) {
	return e.toString() !== "Invalid Date";
}
function fi(e) {
	var t, n, r, i = e.length - 1, a = "", o = e[0];
	if (i > 0) {
		for (a += o, t = 1; t < i; t++) r = e[t] + "", n = H - r.length, n && (a += Ci(n)), a += r;
		o = e[t], r = o + "", n = H - r.length, n && (a += Ci(n));
	} else if (o === 0) return "0";
	for (; o % 10 == 0;) o /= 10;
	return a + o;
}
function pi(e, t, n) {
	if (e !== ~~e || e < t || e > n) throw Error(nw + e);
}
function mi(e, t, n, r) {
	var i, a, o, s;
	for (a = e[0]; a >= 10; a /= 10) --t;
	return --t < 0 ? (t += H, i = 0) : (i = Math.ceil((t + 1) / H), t %= H), a = sw(10, H - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == sw(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == sw(10, t - 3) - 1, o;
}
function hi(e, t, n) {
	for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
		for (a = i.length; a--;) i[a] *= t;
		for (i[0] += YC.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
	}
	return i.reverse();
}
function gi(e, t) {
	var n, r, i;
	if (t.isZero()) return t;
	r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Pi(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Ni(e, 1, t.times(i), new e(1));
	for (var a = n; a--;) {
		var o = t.times(t);
		t = o.times(o).minus(o).times(8).plus(1);
	}
	return e.precision -= n, t;
}
function _i(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor;
	e: if (t != null) {
		if (d = e.d, !d) return e;
		for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
		if (a = t - i, a < 0) a += H, o = t, u = d[f = 0], c = u / sw(10, i - o - 1) % 10 | 0;
		else if (f = Math.ceil((a + 1) / H), s = d.length, f >= s) if (r) {
			for (; s++ <= f;) d.push(0);
			u = c = 0, i = 1, a %= H, o = a - H + 1;
		} else break e;
		else {
			for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
			a %= H, o = a - H + i, c = o < 0 ? 0 : u / sw(10, i - o - 1) % 10 | 0;
		}
		if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % sw(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / sw(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = sw(10, (H - t % H) % H), e.e = -t || 0) : d[0] = e.e = 0, e;
		if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = sw(10, H - a), d[f] = o > 0 ? (u / sw(10, i - o) % sw(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
			for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
			for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
			a != s && (e.e++, d[0] == fw && (d[0] = 1));
			break;
		} else {
			if (d[f] += s, d[f] != fw) break;
			d[f--] = 0, s = 1;
		}
		for (a = d.length; d[--a] === 0;) d.pop();
	}
	return V && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function vi(e, t, n) {
	if (!e.isFinite()) return ki(e);
	var r, i = e.e, a = fi(e.d), o = a.length;
	return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ci(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Ci(-i - 1) + a, n && (r = n - o) > 0 && (a += Ci(r))) : i >= o ? (a += Ci(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Ci(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Ci(r))), a;
}
function yi(e, t) {
	var n = e[0];
	for (t *= H; n >= 10; n /= 10) t++;
	return t;
}
function bi(e, t, n) {
	if (t > mw) throw V = !0, n && (e.precision = n), Error(rw);
	return _i(new e(XC), t, 1, !0);
}
function xi(e, t, n) {
	if (t > hw) throw Error(rw);
	return _i(new e(ZC), t, n, !0);
}
function Si(e) {
	var t = e.length - 1, n = t * H + 1;
	if (t = e[t], t) {
		for (; t % 10 == 0; t /= 10) n--;
		for (t = e[0]; t >= 10; t /= 10) n++;
	}
	return n;
}
function Ci(e) {
	for (var t = ""; e--;) t += "0";
	return t;
}
function wi(e, t, n, r) {
	var i, a = new e(1), o = Math.ceil(r / H + 4);
	for (V = !1;;) {
		if (n % 2 && (a = a.times(t), Li(a.d, o) && (i = !0)), n = ow(n / 2), n === 0) {
			n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
			break;
		}
		t = t.times(t), Li(t.d, o);
	}
	return V = !0, a;
}
function Ti(e) {
	return e.d[e.d.length - 1] & 1;
}
function Ei(e, t, n) {
	for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
		if (i = new e(t[o]), !i.s) {
			a = i;
			break;
		}
		r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
	}
	return a;
}
function Di(e, t) {
	var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
	if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
	for (t == null ? (V = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
	for (r = Math.log(sw(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
		if (a = _i(a.times(e), c, 1), n = n.times(++u), s = o.plus(_w(a, n, c, 1)), fi(s.d).slice(0, c) === fi(o.d).slice(0, c)) {
			for (i = d; i--;) o = _i(o.times(o), c, 1);
			if (t == null) if (l < 3 && mi(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
			else return _i(o, f.precision = m, p, V = !0);
			else return f.precision = m, o;
		}
		o = s;
	}
}
function Oi(e, t) {
	var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
	if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
	if (t == null ? (V = !1, u = y) : u = t, _.precision = u += m, n = fi(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
		for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = fi(h.d), r = n.charAt(0), p++;
		a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
	} else return l = bi(_, u + 2, y).times(a + ""), h = Oi(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? _i(h, y, v, V = !0) : h;
	for (d = h, c = o = h = _w(h.minus(1), h.plus(1), u, 1), f = _i(h.times(h), u, 1), i = 3;;) {
		if (o = _i(o.times(f), u, 1), l = c.plus(_w(o, new _(i), u, 1)), fi(l.d).slice(0, u) === fi(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(bi(_, u + 2, y).times(a + ""))), c = _w(c, new _(p), u, 1), t == null) if (mi(c.d, u - m, v, s)) _.precision = u += m, l = o = h = _w(d.minus(1), d.plus(1), u, 1), f = _i(h.times(h), u, 1), i = s = 1;
		else return _i(c, _.precision = y, v, V = !0);
		else return _.precision = y, c;
		c = l, i += 2;
	}
}
function ki(e) {
	return String(e.s * e.s / 0);
}
function Ai(e, t) {
	var n, r, i;
	for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
	for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
	if (t = t.slice(r, i), t) {
		if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % H, n < 0 && (r += H), r < i) {
			for (r && e.d.push(+t.slice(0, r)), i -= H; r < i;) e.d.push(+t.slice(r, r += H));
			t = t.slice(r), r = H - t.length;
		} else r -= i;
		for (; r--;) t += "0";
		e.d.push(+t), V && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
	} else e.e = 0, e.d = [0];
	return e;
}
function ji(e, t) {
	var n, r, i, a, o, s, c, l, u;
	if (t.indexOf("_") > -1) {
		if (t = t.replace(/(\d)_(?=\d)/g, "$1"), dw.test(t)) return Ai(e, t);
	} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
	if (lw.test(t)) n = 16, t = t.toLowerCase();
	else if (cw.test(t)) n = 2;
	else if (uw.test(t)) n = 8;
	else throw Error(nw + t);
	for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = wi(r, new r(n), a, a * 2)), l = hi(t, n, fw), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
	return a < 0 ? new r(e.s * 0) : (e.e = yi(l, u), e.d = l, V = !1, o && (e = _w(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? sw(2, c) : vw.pow(2, c))), V = !0, e);
}
function Mi(e, t) {
	var n, r = t.d.length;
	if (r < 3) return t.isZero() ? t : Ni(e, 2, t, t);
	n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Pi(5, n)), t = Ni(e, 2, t, t);
	for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
	return t;
}
function Ni(e, t, n, r, i) {
	var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / H);
	for (V = !1, c = n.times(n), s = new e(r);;) {
		if (o = _w(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = _w(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
			for (a = d; o.d[a] === s.d[a] && a--;);
			if (a == -1) break;
		}
		a = s, s = r, r = o, o = a, l++;
	}
	return V = !0, o.d.length = d + 1, o;
}
function Pi(e, t) {
	for (var n = e; --t;) n *= e;
	return n;
}
function Fi(e, t) {
	var n, r = t.s < 0, i = xi(e, e.precision, 1), a = i.times(.5);
	if (t = t.abs(), t.lte(a)) return ew = r ? 4 : 1, t;
	if (n = t.divToInt(i), n.isZero()) ew = r ? 3 : 2;
	else {
		if (t = t.minus(n.times(i)), t.lte(a)) return ew = Ti(n) ? r ? 2 : 3 : r ? 4 : 1, t;
		ew = Ti(n) ? r ? 1 : 4 : r ? 3 : 2;
	}
	return t.minus(i).abs();
}
function Ii(e, t, n, r) {
	var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
	if (m ? (pi(n, 1, JC), r === void 0 ? r = p.rounding : pi(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = ki(e);
	else {
		for (u = vi(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = hi(vi(f), 10, i), f.e = f.d.length), d = hi(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
		if (!d[0]) u = m ? "0p+0" : "0";
		else {
			if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = _w(e, f, n, r, 0, i), d = e.d, a = e.e, l = $C), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
			for (c = d.length; !d[c - 1]; --c);
			for (o = 0, u = ""; o < c; o++) u += YC.charAt(d[o]);
			if (m) {
				if (c > 1) if (t == 16 || t == 8) {
					for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
					for (d = hi(u, i, t), c = d.length; !d[c - 1]; --c);
					for (o = 1, u = "1."; o < c; o++) u += YC.charAt(d[o]);
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
function Li(e, t) {
	if (e.length > t) return e.length = t, !0;
}
function Ri(e) {
	return new this(e).abs();
}
function zi(e) {
	return new this(e).acos();
}
function Bi(e) {
	return new this(e).acosh();
}
function Vi(e, t) {
	return new this(e).plus(t);
}
function Hi(e) {
	return new this(e).asin();
}
function Ui(e) {
	return new this(e).asinh();
}
function Wi(e) {
	return new this(e).atan();
}
function Gi(e) {
	return new this(e).atanh();
}
function Ki(e, t) {
	e = new this(e), t = new this(t);
	var n, r = this.precision, i = this.rounding, a = r + 4;
	return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = xi(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? xi(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = xi(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(_w(e, t, a, 1)), t = xi(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(_w(e, t, a, 1)), n;
}
function qi(e) {
	return new this(e).cbrt();
}
function Ji(e) {
	return _i(e = new this(e), e.e + 1, 2);
}
function Yi(e, t, n) {
	return new this(e).clamp(t, n);
}
function Xi(e) {
	if (!e || typeof e != "object") throw Error(tw + "Object expected");
	var t, n, r, i = e.defaults === !0, a = [
		"precision",
		1,
		JC,
		"rounding",
		0,
		8,
		"toExpNeg",
		-qC,
		0,
		"toExpPos",
		0,
		qC,
		"maxE",
		0,
		qC,
		"minE",
		-qC,
		0,
		"modulo",
		0,
		9
	];
	for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = QC[n]), (r = e[n]) !== void 0) if (ow(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
	else throw Error(nw + n + ": " + r);
	if (n = "crypto", i && (this[n] = QC[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
	else throw Error(iw);
	else this[n] = !1;
	else throw Error(nw + n + ": " + r);
	return this;
}
function Zi(e) {
	return new this(e).cos();
}
function Qi(e) {
	return new this(e).cosh();
}
function $i(e) {
	var t, n, r;
	function i(e) {
		var t, n, r, a = this;
		if (!(a instanceof i)) return new i(e);
		if (a.constructor = i, ia(e)) {
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
			return Ai(a, e.toString());
		}
		if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), dw.test(e) ? Ai(a, e) : ji(a, e);
		if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Ai(a, e.toString());
		throw Error(nw + e);
	}
	if (i.prototype = gw, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Xi, i.clone = $i, i.isDecimal = ia, i.abs = Ri, i.acos = zi, i.acosh = Bi, i.add = Vi, i.asin = Hi, i.asinh = Ui, i.atan = Wi, i.atanh = Gi, i.atan2 = Ki, i.cbrt = qi, i.ceil = Ji, i.clamp = Yi, i.cos = Zi, i.cosh = Qi, i.div = ea, i.exp = ta, i.floor = na, i.hypot = ra, i.ln = aa, i.log = oa, i.log10 = ca, i.log2 = sa, i.max = la, i.min = ua, i.mod = da, i.mul = fa, i.pow = pa, i.random = ma, i.round = ha, i.sign = ga, i.sin = _a, i.sinh = va, i.sqrt = ya, i.sub = ba, i.sum = xa, i.tan = Sa, i.tanh = Ca, i.trunc = wa, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
function ea(e, t) {
	return new this(e).div(t);
}
function ta(e) {
	return new this(e).exp();
}
function na(e) {
	return _i(e = new this(e), e.e + 1, 3);
}
function ra() {
	var e, t, n = new this(0);
	for (V = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
	else {
		if (t.s) return V = !0, new this(Infinity);
		n = t;
	}
	return V = !0, n.sqrt();
}
function ia(e) {
	return e instanceof vw || e && e.toStringTag === aw || !1;
}
function aa(e) {
	return new this(e).ln();
}
function oa(e, t) {
	return new this(e).log(t);
}
function sa(e) {
	return new this(e).log(2);
}
function ca(e) {
	return new this(e).log(10);
}
function la() {
	return Ei(this, arguments, -1);
}
function ua() {
	return Ei(this, arguments, 1);
}
function da(e, t) {
	return new this(e).mod(t);
}
function fa(e, t) {
	return new this(e).mul(t);
}
function pa(e, t) {
	return new this(e).pow(t);
}
function ma(e) {
	var t, n, r, i, a = 0, o = new this(1), s = [];
	if (e === void 0 ? e = this.precision : pi(e, 1, JC), r = Math.ceil(e / H), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
	else if (crypto.randomBytes) {
		for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
		a = r / 4;
	} else throw Error(iw);
	else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
	for (r = s[--a], e %= H, r && e && (i = sw(10, H - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
	if (a < 0) n = 0, s = [0];
	else {
		for (n = -1; s[0] === 0; n -= H) s.shift();
		for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
		r < H && (n -= H - r);
	}
	return o.e = n, o.d = s, o;
}
function ha(e) {
	return _i(e = new this(e), e.e + 1, this.rounding);
}
function ga(e) {
	return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function _a(e) {
	return new this(e).sin();
}
function va(e) {
	return new this(e).sinh();
}
function ya(e) {
	return new this(e).sqrt();
}
function ba(e, t) {
	return new this(e).sub(t);
}
function xa() {
	var e = 0, t = arguments, n = new this(t[e]);
	for (V = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
	return V = !0, _i(n, this.precision, this.rounding);
}
function Sa(e) {
	return new this(e).tan();
}
function Ca(e) {
	return new this(e).tanh();
}
function wa(e) {
	return _i(e = new this(e), e.e + 1, 1);
}
function Ta(e) {
	return vw.isDecimal(e) ? !0 : typeof e == "object" && !!e && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
}
function Ea(e) {
	return {
		name: e.name,
		values: e.values.map((e) => e.name)
	};
}
function Da(e, t, n, r, i) {
	this.type = e, this.content = t, this.alias = n, this.length = (r || "").length | 0, this.greedy = !!i;
}
function Oa(e) {
	return Cw[e] || ww;
}
function ka(e) {
	return Aa(e, Dw.languages.javascript);
}
function Aa(e, t) {
	return Dw.tokenize(e, t).map((e) => Da.stringify(e)).join("");
}
function ja(e) {
	return Zr(e);
}
function Ma({ message: e, originalMethod: t, isPanic: n, callArguments: r }) {
	return {
		functionName: `prisma.${t}()`,
		message: e,
		isPanic: n ?? !1,
		callArguments: r
	};
}
function Na({ callsite: e, message: t, originalMethod: n, isPanic: r, callArguments: i }, a) {
	let o = Ma({
		message: t,
		originalMethod: n,
		isPanic: r,
		callArguments: i
	});
	if (!e || typeof window < "u" || nt.env.NODE_ENV === "production") return o;
	let s = e.getLocation();
	if (!s || !s.lineNumber || !s.columnNumber) return o;
	let c = Math.max(1, s.lineNumber - 3), l = Ow.read(s.fileName)?.slice(c, s.lineNumber), u = l?.lineAt(s.lineNumber);
	if (l && u) {
		let e = Fa(u), t = Pa(u);
		if (!t) return o;
		o.functionName = `${t.code})`, o.location = s, r || (l = l.mapLineAt(s.lineNumber, (e) => e.slice(0, t.openingBraceIndex))), l = a.highlightSource(l);
		let n = String(l.lastLineNumber).length;
		if (o.contextLines = l.mapLines((e, t) => a.gray(String(t).padStart(n)) + " " + e).mapLines((e) => a.dim(e)).prependSymbolAt(s.lineNumber, a.bold(a.red("→"))), i) {
			let t = e + n + 1;
			t += 2, o.callArguments = (0, Sw.default)(i, t).slice(t);
		}
	}
	return o;
}
function Pa(e) {
	let t = Object.keys(xw).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
	if (n) {
		let t = n.index + n[0].length, r = e.lastIndexOf(" ", n.index) + 1;
		return {
			code: e.slice(r, t),
			openingBraceIndex: t
		};
	}
	return null;
}
function Fa(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		if (e.charAt(n) !== " ") return t;
		t++;
	}
	return t;
}
function Ia({ functionName: e, location: t, message: n, isPanic: r, contextLines: i, callArguments: a }, o) {
	let s = [""], c = t ? " in" : ":";
	if (r ? (s.push(o.red(`Oops, an unknown error occurred! This is ${o.bold("on us")}, you did nothing wrong.`)), s.push(o.red(`It occurred in the ${o.bold(`\`${e}\``)} invocation${c}`))) : s.push(o.red(`Invalid ${o.bold(`\`${e}\``)} invocation${c}`)), t && s.push(o.underline(La(t))), i) {
		s.push("");
		let e = [i.toString()];
		a && (e.push(a), e.push(o.dim(")"))), s.push(e.join("")), a && s.push("");
	} else s.push(""), a && s.push(a), s.push("");
	return s.push(n), s.join("\n");
}
function La(e) {
	let t = [e.fileName];
	return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
}
function Ra(e) {
	let t = e.showColors ? kw : Aw, n;
	return n = Na(e, t), Ia(n, t);
}
function za(e, t, n) {
	let r = Ua(Va(Ba(e)));
	r ? Ka(r, t, n) : t.addErrorMessage(() => "Unknown error");
}
function Ba(e) {
	return e.errors.flatMap((e) => e.kind === "Union" ? Ba(e) : [e]);
}
function Va(e) {
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
				typeNames: Ha(i.argument.typeNames, r.argument.typeNames)
			}
		}) : t.set(e, r);
	}
	return n.push(...t.values()), n;
}
function Ha(e, t) {
	return [...new Set(e.concat(t))];
}
function Ua(e) {
	return ci(e, (e, t) => {
		let n = Wa(e), r = Wa(t);
		return n === r ? Ga(e) - Ga(t) : n - r;
	});
}
function Wa(e) {
	let t = 0;
	return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
}
function Ga(e) {
	switch (e.kind) {
		case "InvalidArgumentValue":
		case "ValueTooLarge": return 20;
		case "InvalidArgumentType": return 10;
		case "RequiredArgumentMissing": return -10;
		default: return 0;
	}
}
function Ka(e, t, n) {
	switch (e.kind) {
		case "MutuallyExclusiveFields":
			qa(e, t);
			break;
		case "IncludeOnScalar":
			Ja(e, t);
			break;
		case "EmptySelection":
			Ya(e, t, n);
			break;
		case "UnknownSelectionField":
			$a(e, t);
			break;
		case "InvalidSelectionValue":
			eo(e, t);
			break;
		case "UnknownArgument":
			to(e, t);
			break;
		case "UnknownInputField":
			no(e, t);
			break;
		case "RequiredArgumentMissing":
			io(e, t);
			break;
		case "InvalidArgumentType":
			oo(e, t);
			break;
		case "InvalidArgumentValue":
			so(e, t);
			break;
		case "ValueTooLarge":
			co(e, t);
			break;
		case "SomeFieldsMissing":
			lo(e, t);
			break;
		case "TooManyFieldsGiven":
			uo(e, t);
			break;
		case "Union":
			za(e, t, n);
			break;
		default: throw Error("not implemented: " + e.kind);
	}
}
function qa(e, t) {
	let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	n && (n.getField(e.firstField)?.markAsError(), n.getField(e.secondField)?.markAsError()), t.addErrorMessage((t) => `Please ${t.bold("either")} use ${t.green(`\`${e.firstField}\``)} or ${t.green(`\`${e.secondField}\``)}, but ${t.red("not both")} at the same time.`);
}
function Ja(e, t) {
	let [n, r] = vo(e.selectionPath), i = e.outputType, a = t.arguments.getDeepSelectionParent(n)?.value;
	if (a && (a.getField(r)?.markAsError(), i)) for (let e of i.fields) e.isRelation && a.addSuggestion(new Mw(e.name, "true"));
	t.addErrorMessage((e) => {
		let t = `Invalid scalar field ${e.red(`\`${r}\``)} for ${e.bold("include")} statement`;
		return i ? t += ` on model ${e.bold(i.name)}. ${yo(e)}` : t += ".", t += `
Note that ${e.bold("include")} statements only accept relation fields.`, t;
	});
}
function Ya(e, t, n) {
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let n = r.getField("omit")?.value.asObject();
		if (n) {
			Xa(e, t, n);
			return;
		}
		if (r.hasField("select")) {
			Za(e, t);
			return;
		}
	}
	if (n?.[ui(e.outputType.name)]) {
		Qa(e, t);
		return;
	}
	t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
}
function Xa(e, t, n) {
	n.removeAllFields();
	for (let t of e.outputType.fields) n.addSuggestion(new Mw(t.name, "false"));
	t.addErrorMessage((t) => `The ${t.red("omit")} statement includes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function Za(e, t) {
	let n = e.outputType, r = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = r?.isEmpty() ?? !1;
	r && (r.removeAllFields(), fo(r, n)), t.addErrorMessage((e) => i ? `The ${e.red("`select`")} statement for type ${e.bold(n.name)} must not be empty. ${yo(e)}` : `The ${e.red("`select`")} statement for type ${e.bold(n.name)} needs ${e.bold("at least one truthy value")}.`);
}
function Qa(e, t) {
	let n = new Ww();
	for (let t of e.outputType.fields) t.isRelation || n.addField(t.name, "false");
	let r = new Mw("omit", n).makeRequired();
	if (e.selectionPath.length === 0) t.arguments.addSuggestion(r);
	else {
		let [n, i] = vo(e.selectionPath), a = t.arguments.getDeepSelectionParent(n)?.value.asObject()?.getField(i);
		if (a) {
			let e = a?.value.asObject() ?? new Hw();
			e.addSuggestion(r), a.value = e;
		}
	}
	t.addErrorMessage((t) => `The global ${t.red("omit")} configuration excludes every field of the model ${t.bold(e.outputType.name)}. At least one field must be included in the result`);
}
function $a(e, t) {
	let n = go(e.selectionPath, t);
	if (n.parentKind !== "unknown") {
		n.field.markAsError();
		let t = n.parent;
		switch (n.parentKind) {
			case "select":
				fo(t, e.outputType);
				break;
			case "include":
				po(t, e.outputType);
				break;
			case "omit":
				mo(t, e.outputType);
				break;
		}
	}
	t.addErrorMessage((t) => {
		let r = [`Unknown field ${t.red(`\`${n.fieldName}\``)}`];
		return n.parentKind !== "unknown" && r.push(`for ${t.bold(n.parentKind)} statement`), r.push(`on model ${t.bold(`\`${e.outputType.name}\``)}.`), r.push(yo(t)), r.join(" ");
	});
}
function eo(e, t) {
	let n = go(e.selectionPath, t);
	n.parentKind !== "unknown" && n.field.value.markAsError(), t.addErrorMessage((t) => `Invalid value for selection field \`${t.red(n.fieldName)}\`: ${e.underlyingError}`);
}
function to(e, t) {
	let n = e.argumentPath[0], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && (r.getField(n)?.markAsError(), ho(r, e.arguments)), t.addErrorMessage((t) => ro(t, n, e.arguments.map((e) => e.name)));
}
function no(e, t) {
	let [n, r] = vo(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (i) {
		i.getDeepField(e.argumentPath)?.markAsError();
		let t = i.getDeepFieldValue(n)?.asObject();
		t && _o(t, e.inputType);
	}
	t.addErrorMessage((t) => ro(t, r, e.inputType.fields.map((e) => e.name)));
}
function ro(e, t, n) {
	let r = [`Unknown argument \`${e.red(t)}\`.`], i = xo(t, n);
	return i && r.push(`Did you mean \`${e.green(i)}\`?`), n.length > 0 && r.push(yo(e)), r.join(" ");
}
function io(e, t) {
	let n;
	t.addErrorMessage((e) => n?.value instanceof Uw && n.value.text === "null" ? `Argument \`${e.green(a)}\` must not be ${e.red("null")}.` : `Argument \`${e.green(a)}\` is missing.`);
	let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (!r) return;
	let [i, a] = vo(e.argumentPath), o = new Ww(), s = r.getDeepFieldValue(i)?.asObject();
	if (s) {
		if (n = s.getField(a), n && s.removeField(a), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
			for (let t of e.inputTypes[0].fields) o.addField(t.name, t.typeNames.join(" | "));
			s.addSuggestion(new Mw(a, o).makeRequired());
		} else {
			let t = e.inputTypes.map(ao).join(" | ");
			s.addSuggestion(new Mw(a, t).makeRequired());
		}
		if (e.dependentArgumentPath) {
			r.getDeepField(e.dependentArgumentPath)?.markAsError();
			let [, n] = vo(e.dependentArgumentPath);
			t.addErrorMessage((e) => `Argument \`${e.green(a)}\` is required because argument \`${e.green(n)}\` was provided.`);
		}
	}
}
function ao(e) {
	return e.kind === "list" ? `${ao(e.elementType)}[]` : e.name;
}
function oo(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = bo("or", e.argument.typeNames.map((e) => t.green(e)));
		return `Argument \`${t.bold(n)}\`: Invalid value provided. Expected ${r}, provided ${t.red(e.inferredType)}.`;
	});
}
function so(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	r && r.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((t) => {
		let r = [`Invalid value for argument \`${t.bold(n)}\``];
		if (e.underlyingError && r.push(`: ${e.underlyingError}`), r.push("."), e.argument.typeNames.length > 0) {
			let n = bo("or", e.argument.typeNames.map((e) => t.green(e)));
			r.push(` Expected ${n}.`);
		}
		return r.join("");
	});
}
function co(e, t) {
	let n = e.argument.name, r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
	if (r) {
		let t = r.getDeepField(e.argumentPath)?.value;
		t?.markAsError(), t instanceof Uw && (i = t.text);
	}
	t.addErrorMessage((e) => {
		let t = ["Unable to fit value"];
		return i && t.push(e.red(i)), t.push(`into a 64-bit signed integer for field \`${e.bold(n)}\``), t.join(" ");
	});
}
function lo(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && _o(t, e.inputType);
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? r.push(`${t.green("at least one of")} ${bo("or", e.constraints.requiredFields.map((e) => `\`${t.bold(e)}\``))} arguments.`) : r.push(`${t.green("at least one")} argument.`) : r.push(`${t.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), r.push(yo(t)), r.join(" ");
	});
}
function uo(e, t) {
	let n = e.argumentPath[e.argumentPath.length - 1], r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
	if (r) {
		let t = r.getDeepFieldValue(e.argumentPath)?.asObject();
		t && (t.markAsError(), i = Object.keys(t.getFields()));
	}
	t.addErrorMessage((t) => {
		let r = [`Argument \`${t.bold(n)}\` of type ${t.bold(e.inputType.name)} needs`];
		return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? r.push(`${t.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? r.push(`${t.green("at most one")} argument,`) : r.push(`${t.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), r.push(`but you provided ${bo("and", i.map((e) => t.red(e)))}. Please choose`), e.constraints.maxFieldCount === 1 ? r.push("one.") : r.push(`${e.constraints.maxFieldCount}.`), r.join(" ");
	});
}
function fo(e, t) {
	for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new Mw(n.name, "true"));
}
function po(e, t) {
	for (let n of t.fields) n.isRelation && !e.hasField(n.name) && e.addSuggestion(new Mw(n.name, "true"));
}
function mo(e, t) {
	for (let n of t.fields) !e.hasField(n.name) && !n.isRelation && e.addSuggestion(new Mw(n.name, "true"));
}
function ho(e, t) {
	for (let n of t) e.hasField(n.name) || e.addSuggestion(new Mw(n.name, n.typeNames.join(" | ")));
}
function go(e, t) {
	let [n, r] = vo(e), i = t.arguments.getDeepSubSelectionValue(n)?.asObject();
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
function _o(e, t) {
	if (t.kind === "object") for (let n of t.fields) e.hasField(n.name) || e.addSuggestion(new Mw(n.name, n.typeNames.join(" | ")));
}
function vo(e) {
	let t = [...e], n = t.pop();
	if (!n) throw Error("unexpected empty path");
	return [t, n];
}
function yo({ green: e, enabled: t }) {
	return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
}
function bo(e, t) {
	if (t.length === 1) return t[0];
	let n = [...t], r = n.pop();
	return `${n.join(", ")} ${e} ${r}`;
}
function xo(e, t) {
	let n = Infinity, r;
	for (let i of t) {
		let t = (0, jw.default)(e, i);
		t > Gw || t < n && (n = t, r = i);
	}
	return r;
}
function So(e) {
	return e instanceof Kw;
}
function Co(e, t) {
	Object.defineProperty(e, "name", {
		value: t,
		configurable: !0
	});
}
function wo(e) {
	return new rT(To(e));
}
function To(e) {
	let t = new Hw();
	for (let [n, r] of Object.entries(e)) {
		let e = new nT(n, Eo(r));
		t.addField(e);
	}
	return t;
}
function Eo(e) {
	return typeof e == "string" ? new Uw(JSON.stringify(e)) : typeof e == "number" || typeof e == "boolean" ? new Uw(String(e)) : typeof e == "bigint" ? new Uw(`${e}n`) : e === null ? new Uw("null") : e === void 0 ? new Uw("undefined") : Ta(e) ? new Uw(`new Prisma.Decimal("${e.toFixed()}")`) : e instanceof Uint8Array ? Buffer.isBuffer(e) ? new Uw(`Buffer.alloc(${e.byteLength})`) : new Uw(`new Uint8Array(${e.byteLength})`) : e instanceof Date ? new Uw(`new Date("${di(e) ? e.toISOString() : "Invalid Date"}")`) : e instanceof Yw ? new Uw(`Prisma.${e._getName()}`) : So(e) ? new Uw(`prisma.${ui(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Do(e) : typeof e == "object" ? To(e) : new Uw(Object.prototype.toString.call(e));
}
function Do(e) {
	let t = new Vw();
	for (let n of e) t.addItem(Eo(n));
	return t;
}
function Oo(e, t) {
	let n = t === "pretty" ? Lw : Iw;
	return {
		message: e.renderAllMessages(n),
		args: new Nw(0, { colors: n }).write(e).toString()
	};
}
function ko({ args: e, errors: t, errorFormat: n, callsite: r, originalMethod: i, clientVersion: a, globalOmit: o }) {
	let s = wo(e);
	for (let e of t) Ka(e, s, o);
	let { message: c, args: l } = Oo(s, n);
	throw new KC(Ra({
		message: c,
		callsite: r,
		originalMethod: i,
		showColors: n === "pretty",
		callArguments: l
	}), { clientVersion: a });
}
function Ao(e) {
	return new cT([e], []);
}
function jo(e, t) {
	return {
		batch: e,
		transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0
	};
}
function Mo({ error: e, user_facing_error: t }, n, r) {
	return t.error_code ? new UC(No(t, r), {
		code: t.error_code,
		clientVersion: n,
		meta: t.meta,
		batchRequestIdx: t.batch_request_idx
	}) : new GC(e, {
		clientVersion: n,
		batchRequestIdx: t.batch_request_idx
	});
}
function No(e, t) {
	let n = e.message;
	return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === uT && (n += "\nPrisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate"), n;
}
function Po(e) {
	return (t) => {
		let n = { requests: t }, r = t[0].extensions.getAllBatchQueryCallbacks();
		return r.length ? Fo(n, r, 0, e) : e(n);
	};
}
function Fo(e, t, n, r) {
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
			return o.customDataProxyFetch = Io(i, s), Fo(o, t, n + 1, r);
		}
	});
}
function Io(e = mT, t = mT) {
	return (n) => e(t(n));
}
function Lo(e, t) {
	throw Error(t);
}
function Ro(e) {
	return typeof e == "object" && !!e && typeof e.$type == "string";
}
function zo(e, t) {
	let n = {};
	for (let r of Object.keys(e)) n[r] = t(e[r], r);
	return n;
}
function Bo(e) {
	return e === null ? e : Array.isArray(e) ? e.map(Bo) : typeof e == "object" ? Ro(e) ? Vo(e) : e.constructor !== null && e.constructor.name !== "Object" ? e : zo(e, Bo) : e;
}
function Vo({ $type: e, value: t }) {
	switch (e) {
		case "BigInt": return BigInt(t);
		case "Bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "DateTime": return new Date(t);
		case "Decimal": return new vw(t);
		case "Json": return JSON.parse(t);
		default: Lo(t, "Unknown tagged value");
	}
}
function Ho({ inlineDatasources: e, overrideDatasources: t, env: n, clientVersion: r }) {
	let i, a = Object.keys(e)[0], o = e[a]?.url, s = t[a]?.url;
	if (a === void 0 ? i = void 0 : s ? i = s : o?.value ? i = o.value : o?.fromEnvVar && (i = n[o.fromEnvVar]), o?.fromEnvVar !== void 0 && i === void 0) throw new HC(`error: Environment variable not found: ${o.fromEnvVar}.`, r);
	if (i === void 0) throw new HC("error: Missing URL environment variable, value, or override.", r);
	return i;
}
function Uo(e, t) {
	return {
		...e,
		isRetryable: t
	};
}
function Wo(e) {
	let t = { clientVersion: e.clientVersion }, n = Object.keys(e.inlineDatasources)[0], r = Ho({
		inlineDatasources: e.inlineDatasources,
		overrideDatasources: e.overrideDatasources,
		clientVersion: e.clientVersion,
		env: {
			...e.env,
			...typeof nt < "u" ? nt.env : {}
		}
	}), i;
	try {
		i = new URL(r);
	} catch {
		throw new ST(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, t);
	}
	let { protocol: a, searchParams: o } = i;
	if (a !== "prisma:" && a !== PC) throw new ST(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
	let s = o.get("api_key");
	if (s === null || s.length < 1) throw new ST(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, t);
	let c = $r(i) ? "http:" : "https:";
	return nt.env.TEST_CLIENT_ENGINE_REMOTE_EXECUTOR && i.searchParams.has("use_http") && (c = "http:"), {
		apiKey: s,
		url: new URL(i.href.replace(a, c))
	};
}
function Go(e) {
	return e[0] * 1e3 + e[1] / 1e6;
}
function Ko(e) {
	return new Date(Go(e));
}
async function qo(e) {
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
async function Jo(e, t) {
	if (e.ok) return;
	let n = {
		clientVersion: t,
		response: e
	}, r = await qo(e);
	if (r.type === "QueryEngineError") throw new UC(r.body.message, {
		code: r.body.error_code,
		clientVersion: t
	});
	if (r.type === "DataProxyError") {
		if (r.body === "InternalDataProxyError") throw new UT(n, "Internal Data Proxy error");
		if ("EngineNotStarted" in r.body) {
			if (r.body.EngineNotStarted.reason === "SchemaMissing") return new OT(n);
			if (r.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new NT(n);
			if ("EngineStartupError" in r.body.EngineNotStarted.reason) {
				let { msg: e, logs: t } = r.body.EngineNotStarted.reason.EngineStartupError;
				throw new MT(n, e, t);
			}
			if ("KnownEngineStartupError" in r.body.EngineNotStarted.reason) {
				let { msg: e, error_code: n } = r.body.EngineNotStarted.reason.KnownEngineStartupError;
				throw new HC(e, t, n);
			}
			if ("HealthcheckTimeout" in r.body.EngineNotStarted.reason) {
				let { logs: e } = r.body.EngineNotStarted.reason.HealthcheckTimeout;
				throw new jT(n, e);
			}
		}
		if ("InteractiveTransactionMisrouted" in r.body) throw new LT(n, {
			IDParseError: "Could not parse interactive transaction ID",
			NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID",
			TransactionStartError: "Could not start interactive transaction"
		}[r.body.InteractiveTransactionMisrouted.reason]);
		if ("InvalidRequestError" in r.body) throw new zT(n, r.body.InvalidRequestError.reason);
	}
	if (e.status === 401 || e.status === 403) throw new GT(n, Yo(WT, r));
	if (e.status === 404) return new VT(n, Yo(BT, r));
	if (e.status === 429) throw new qT(n, Yo(KT, r));
	if (e.status === 504) throw new FT(n, Yo(PT, r));
	if (e.status >= 500) throw new UT(n, Yo(HT, r));
	if (e.status >= 400) throw new AT(n, Yo(kT, r));
}
function Yo(e, t) {
	return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
function Xo(e) {
	let t = 2 ** e * 50, n = t + (Math.ceil(Math.random() * t) - Math.ceil(t / 2));
	return new Promise((e) => setTimeout(() => e(n), n));
}
function Zo(e) {
	let t = new TextEncoder().encode(e), n = "", r = t.byteLength, i = r % 3, a = r - i, o, s, c, l, u;
	for (let e = 0; e < a; e += 3) u = t[e] << 16 | t[e + 1] << 8 | t[e + 2], o = (u & 16515072) >> 18, s = (u & 258048) >> 12, c = (u & 4032) >> 6, l = u & 63, n += JT[o] + JT[s] + JT[c] + JT[l];
	return i == 1 ? (u = t[a], o = (u & 252) >> 2, s = (u & 3) << 4, n += JT[o] + JT[s] + "==") : i == 2 && (u = t[a] << 8 | t[a + 1], o = (u & 64512) >> 10, s = (u & 1008) >> 4, c = (u & 15) << 2, n += JT[o] + JT[s] + JT[c] + "="), n;
}
function Qo(e) {
	if (e.generator?.previewFeatures.some((e) => e.toLowerCase().includes("metrics"))) throw new HC("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
}
async function $o(e, t, n = (e) => e) {
	let { clientVersion: r, ...i } = t, a = n(fetch);
	try {
		return await a(e, i);
	} catch (e) {
		throw new XT(e.message ?? "Unknown error", {
			clientVersion: r,
			cause: e
		});
	}
}
async function es(e, t) {
	let n = YT["@prisma/engines-version"], r = t.clientVersion ?? "unknown";
	if (nt.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return nt.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
	if (e.includes("accelerate") && r !== "0.0.0" && r !== "in-memory") return r;
	let [i, a] = r?.split("-") ?? [];
	if (a === void 0 && ZT.test(i)) return i;
	if (a !== void 0 || r === "0.0.0" || r === "in-memory") {
		let [e] = n.split("-") ?? [], [t, i, a] = e.split("."), o = await $o(ns(`<=${t}.${i}.${a}`), { clientVersion: r });
		if (!o.ok) throw Error(`Failed to fetch stable Prisma version, unpkg.com status ${o.status} ${o.statusText}, response body: ${await o.text() || "<empty body>"}`);
		let s = await o.text();
		QT("length of body fetched from unpkg.com", s.length);
		let c;
		try {
			c = JSON.parse(s);
		} catch (e) {
			throw console.error("JSON.parse error: body fetched from unpkg.com: ", s), e;
		}
		return c.version;
	}
	throw new ET("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: r });
}
async function ts(e, t) {
	let n = await es(e, t);
	return QT("version", n), n;
}
function ns(e) {
	return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
function rs(e) {
	return typeof e.batchRequestIdx == "number";
}
function is(e) {
	if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
	let t = [];
	return e.modelName && t.push(e.modelName), e.query.arguments && t.push(as(e.query.arguments)), t.push(as(e.query.selection)), t.join("");
}
function as(e) {
	return `(${Object.keys(e).sort().map((t) => {
		let n = e[t];
		return typeof n == "object" && n ? `(${t} ${as(n)})` : t;
	}).join(" ")})`;
}
function os(e) {
	return fE[e];
}
function ss(e, t) {
	if (t === null) return t;
	switch (e) {
		case "bigint": return BigInt(t);
		case "bytes": {
			let { buffer: e, byteOffset: n, byteLength: r } = Buffer.from(t, "base64");
			return new Uint8Array(e, n, r);
		}
		case "decimal": return new yw(t);
		case "datetime":
		case "date": return new Date(t);
		case "time": return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
		case "bigint-array": return t.map((e) => ss("bigint", e));
		case "bytes-array": return t.map((e) => ss("bytes", e));
		case "decimal-array": return t.map((e) => ss("decimal", e));
		case "datetime-array": return t.map((e) => ss("datetime", e));
		case "date-array": return t.map((e) => ss("date", e));
		case "time-array": return t.map((e) => ss("time", e));
		default: return t;
	}
}
function cs(e) {
	let t = [], n = ls(e);
	for (let r = 0; r < e.rows.length; r++) {
		let i = e.rows[r], a = { ...n };
		for (let t = 0; t < i.length; t++) a[e.columns[t]] = ss(e.types[t], i[t]);
		t.push(a);
	}
	return t;
}
function ls(e) {
	let t = {};
	for (let n = 0; n < e.columns.length; n++) t[e.columns[n]] = null;
	return t;
}
function us(e) {
	if (e) {
		if (e.kind === "batch") return {
			kind: "batch",
			options: { isolationLevel: e.isolationLevel }
		};
		if (e.kind === "itx") return {
			kind: "itx",
			options: ds(e)
		};
		ai(e, "Unknown transaction kind");
	}
}
function ds(e) {
	return {
		id: e.id,
		payload: e.payload
	};
}
function fs(e, t) {
	return rs(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function ps(e) {
	return e.code === "P2009" || e.code === "P2012";
}
function ms(e) {
	if (e.kind === "Union") return {
		kind: "Union",
		errors: e.errors.map(ms)
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
function hs(e) {
	let t = process.env[e];
	if (!t) throw Error(`Missing required environment variable: ${e}`);
	return t;
}
function gs(e, t) {
	if (e.type in fU.builtinStrategies) return fU.builtinStrategies[e.type](e.delay, e.jitter);
	if (t) return t;
	throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`);
}
function _s(e, t, n) {
	try {
		return e.apply(t, n);
	} catch (e) {
		return JY.value = e, JY;
	}
}
function vs(e) {
	return Buffer.byteLength(e, "utf8");
}
function ys(e) {
	for (let t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
	return !0;
}
function bs(e) {
	let t = {};
	for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
	return t;
}
function xs(e) {
	let t = [];
	for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] !== void 0 && (t[t.length] = n, t[t.length] = e[n]);
	return t;
}
function Ss(e, t) {
	return new Promise((n) => {
		let r, i = () => {
			t?.signal.removeEventListener("abort", i), clearTimeout(r), n();
		};
		r = setTimeout(i, e), t?.signal.addEventListener("abort", i);
	});
}
function Cs(e, t) {
	let n = e.getMaxListeners();
	e.setMaxListeners(n + t);
}
function ws(e) {
	return Object.entries(e).reduce((e, [t, n]) => (e[n] = t, e), {});
}
function Ts(e) {
	return e ? [
		"connect",
		"disconnect",
		"duplicate"
	].every((t) => typeof e[t] == "function") : !1;
}
function Es(e) {
	return Ts(e) && e.isCluster;
}
function dee(e, t) {
	Cs(e, -t);
}
function fee(e) {
	if (e) return `${e.queue}:${e.id}`;
}
function pee(e) {
	let { code: t, message: n } = e;
	return n !== KY.CONNECTION_CLOSED_ERROR_MSG && !n.includes("ECONNREFUSED") && t !== "ECONNREFUSED";
}
function mee(e) {
	let t = {};
	for (let n in e) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}
async function hee(e, t, n, r, i, a, o) {
	if (e) {
		let { tracer: s, contextManager: c } = e, l = c.active(), u;
		o && (u = c.fromMetadata(l, o));
		let d = i ? `${r} ${i}` : r, f = s.startSpan(d, { kind: t }, u);
		try {
			f.setAttributes({
				[_U.QueueName]: n,
				[_U.QueueOperation]: r
			});
			let e, i;
			return e = t === yU.CONSUMER && u ? f.setSpanOnContext(u) : f.setSpanOnContext(l), a.length == 2 && (i = c.getMetadata(e)), await c.with(e, () => a(f, i));
		} catch (e) {
			throw f.recordException(e), e;
		} finally {
			f.end();
		}
	} else return a();
}
function Ds(e, t = 0) {
	return (aX[e[t + 0]] + aX[e[t + 1]] + aX[e[t + 2]] + aX[e[t + 3]] + "-" + aX[e[t + 4]] + aX[e[t + 5]] + "-" + aX[e[t + 6]] + aX[e[t + 7]] + "-" + aX[e[t + 8]] + aX[e[t + 9]] + "-" + aX[e[t + 10]] + aX[e[t + 11]] + aX[e[t + 12]] + aX[e[t + 13]] + aX[e[t + 14]] + aX[e[t + 15]]).toLowerCase();
}
function Os() {
	if (!oX) {
		if (typeof crypto > "u" || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
		oX = crypto.getRandomValues.bind(crypto);
	}
	return oX(sX);
}
//#endregion
//#region ../../node_modules/bullmq/node_modules/uuid/dist/esm-browser/v4.js
function gee(e, t, n) {
	if (lX.randomUUID && !t && !e) return lX.randomUUID();
	e ||= {};
	let r = e.random ?? e.rng?.() ?? Os();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return Ds(r);
}
//#endregion
//#region ../../node_modules/tslib/tslib.es6.mjs
function _ee(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function vee(e) {
	try {
		if (!G.trusted && !wX) {
			let e = K.sharedLength || 0;
			e < K.length && (K.length = e);
		}
		let t;
		if (G.randomAccessStructure && U[W] < 64 && U[W] >= 32 && EX ? (t = EX(U, W, dX, G), U = null, !(e && e.lazy) && t && (t = t.toJSON()), W = dX) : t = As(), vX &&= (W = vX.postBundlePosition, null), wX && (K.restoreStructures = null), W == dX) K && K.restoreStructures && ks(), K = null, U = null, yX &&= null;
		else if (W > dX) throw Error("Unexpected end of MessagePack data");
		else if (!wX) {
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
		throw K && K.restoreStructures && ks(), Us(), (e instanceof RangeError || e.message.startsWith("Unexpected end of buffer") || W > dX) && (e.incomplete = !0), e;
	}
}
function ks() {
	for (let e in K.restoreStructures) K[e] = K.restoreStructures[e];
	K.restoreStructures = null;
}
function As() {
	let e = U[W++];
	if (e < 160) if (e < 128) {
		if (e < 64) return e;
		{
			let t = K[e & 63] || G.getStructures && Ms()[e & 63];
			return t ? (t.read ||= js(t, e & 63), t.read()) : e;
		}
	} else if (e < 144) if (e -= 128, G.mapsAsObjects) {
		let t = {};
		for (let n = 0; n < e; n++) {
			let e = Bs();
			e === "__proto__" && (e = "__proto_"), t[e] = As();
		}
		return t;
	} else {
		let t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e; n++) t.set(As(), As());
		return t;
	}
	else {
		e -= 144;
		let t = Array(e);
		for (let n = 0; n < e; n++) t[n] = As();
		return G.freezeData ? Object.freeze(t) : t;
	}
	else if (e < 192) {
		let t = e - 160;
		if (_X >= W) return hX.slice(W - gX, (W += t) - gX);
		if (_X == 0 && dX < 140) {
			let e = t < 16 ? Ls(t) : Is(t);
			if (e != null) return e;
		}
		return MX(t);
	} else {
		let t;
		switch (e) {
			case 192: return null;
			case 193: return vX ? (t = As(), t > 0 ? vX[1].slice(vX.position1, vX.position1 += t) : vX[0].slice(vX.position0, vX.position0 -= t)) : CX;
			case 194: return !1;
			case 195: return !0;
			case 196:
				if (t = U[W++], t === void 0) throw Error("Unexpected end of buffer");
				return Rs(t);
			case 197: return t = q.getUint16(W), W += 2, Rs(t);
			case 198: return t = q.getUint32(W), W += 4, Rs(t);
			case 199: return zs(U[W++]);
			case 200: return t = q.getUint16(W), W += 2, zs(t);
			case 201: return t = q.getUint32(W), W += 4, zs(t);
			case 202:
				if (t = q.getFloat32(W), G.useFloat32 > 2) {
					let e = HX[(U[W] & 127) << 1 | U[W + 1] >> 7];
					return W += 4, (e * t + (t > 0 ? .5 : -.5) >> 0) / e;
				}
				return W += 4, t;
			case 203: return t = q.getFloat64(W), W += 8, t;
			case 204: return U[W++];
			case 205: return t = q.getUint16(W), W += 2, t;
			case 206: return t = q.getUint32(W), W += 4, t;
			case 207: return G.int64AsType === "number" ? (t = q.getUint32(W) * 4294967296, t += q.getUint32(W + 4)) : G.int64AsType === "string" ? t = q.getBigUint64(W).toString() : G.int64AsType === "auto" ? (t = q.getBigUint64(W), t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = q.getBigUint64(W), W += 8, t;
			case 208: return q.getInt8(W++);
			case 209: return t = q.getInt16(W), W += 2, t;
			case 210: return t = q.getInt32(W), W += 4, t;
			case 211: return G.int64AsType === "number" ? (t = q.getInt32(W) * 4294967296, t += q.getUint32(W + 4)) : G.int64AsType === "string" ? t = q.getBigInt64(W).toString() : G.int64AsType === "auto" ? (t = q.getBigInt64(W), t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = q.getBigInt64(W), W += 8, t;
			case 212:
				if (t = U[W++], t == 114) return LX(U[W++] & 63);
				{
					let e = bX[t];
					if (e) return e.read ? (W++, e.read(As())) : e.noBuffer ? (W++, e()) : e(U.subarray(W, ++W));
					throw Error("Unknown extension " + t);
				}
			case 213: return t = U[W], t == 114 ? (W++, LX(U[W++] & 63, U[W++])) : zs(2);
			case 214: return zs(4);
			case 215: return zs(8);
			case 216: return zs(16);
			case 217: return t = U[W++], _X >= W ? hX.slice(W - gX, (W += t) - gX) : NX(t);
			case 218: return t = q.getUint16(W), W += 2, _X >= W ? hX.slice(W - gX, (W += t) - gX) : PX(t);
			case 219: return t = q.getUint32(W), W += 4, _X >= W ? hX.slice(W - gX, (W += t) - gX) : FX(t);
			case 220: return t = q.getUint16(W), W += 2, Ps(t);
			case 221: return t = q.getUint32(W), W += 4, Ps(t);
			case 222: return t = q.getUint16(W), W += 2, Fs(t);
			case 223: return t = q.getUint32(W), W += 4, Fs(t);
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
function js(e, t) {
	function n() {
		if (n.count++ > TX) {
			let n = e.read = Function("r", "return function(){return " + (G.freezeData ? "Object.freeze" : "") + "({" + e.map((e) => e === "__proto__" ? "__proto_:r()" : AX.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()").join(",") + "})}")(As);
			return e.highByte === 0 && (e.read = jX(t, e.read)), n();
		}
		let r = {};
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			n === "__proto__" && (n = "__proto_"), r[n] = As();
		}
		return G.freezeData ? Object.freeze(r) : r;
	}
	return n.count = 0, e.highByte === 0 ? jX(t, n) : n;
}
function Ms() {
	let e = Hs(() => (U = null, G.getStructures()));
	return K = G._mergeStructures(e, K);
}
function Ns(e) {
	let t;
	if (e < 16 && (t = Ls(e))) return t;
	if (e > 64 && uX) return uX.decode(U.subarray(W, W += e));
	let n = W + e, r = [];
	for (t = ""; W < n;) {
		let e = U[W++];
		if (!(e & 128)) r.push(e);
		else if ((e & 224) == 192) {
			let t = U[W++] & 63;
			r.push((e & 31) << 6 | t);
		} else if ((e & 240) == 224) {
			let t = U[W++] & 63, n = U[W++] & 63;
			r.push((e & 31) << 12 | t << 6 | n);
		} else if ((e & 248) == 240) {
			let t = U[W++] & 63, n = U[W++] & 63, i = U[W++] & 63, a = (e & 7) << 18 | t << 12 | n << 6 | i;
			a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), r.push(a);
		} else r.push(e);
		r.length >= 4096 && (t += J.apply(String, r), r.length = 0);
	}
	return r.length > 0 && (t += J.apply(String, r)), t;
}
function Ps(e) {
	let t = Array(e);
	for (let n = 0; n < e; n++) t[n] = As();
	return G.freezeData ? Object.freeze(t) : t;
}
function Fs(e) {
	if (G.mapsAsObjects) {
		let t = {};
		for (let n = 0; n < e; n++) {
			let e = Bs();
			e === "__proto__" && (e = "__proto_"), t[e] = As();
		}
		return t;
	} else {
		let t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e; n++) t.set(As(), As());
		return t;
	}
}
function Is(e) {
	let t = W, n = Array(e);
	for (let r = 0; r < e; r++) {
		let e = U[W++];
		if ((e & 128) > 0) {
			W = t;
			return;
		}
		n[r] = e;
	}
	return J.apply(String, n);
}
function Ls(e) {
	if (e < 4) if (e < 2) {
		if (e === 0) return "";
		{
			let e = U[W++];
			if ((e & 128) > 1) {
				--W;
				return;
			}
			return J(e);
		}
	} else {
		let t = U[W++], n = U[W++];
		if ((t & 128) > 0 || (n & 128) > 0) {
			W -= 2;
			return;
		}
		if (e < 3) return J(t, n);
		let r = U[W++];
		if ((r & 128) > 0) {
			W -= 3;
			return;
		}
		return J(t, n, r);
	}
	else {
		let t = U[W++], n = U[W++], r = U[W++], i = U[W++];
		if ((t & 128) > 0 || (n & 128) > 0 || (r & 128) > 0 || (i & 128) > 0) {
			W -= 4;
			return;
		}
		if (e < 6) {
			if (e === 4) return J(t, n, r, i);
			{
				let e = U[W++];
				if ((e & 128) > 0) {
					W -= 5;
					return;
				}
				return J(t, n, r, i, e);
			}
		} else if (e < 8) {
			let a = U[W++], o = U[W++];
			if ((a & 128) > 0 || (o & 128) > 0) {
				W -= 6;
				return;
			}
			if (e < 7) return J(t, n, r, i, a, o);
			let s = U[W++];
			if ((s & 128) > 0) {
				W -= 7;
				return;
			}
			return J(t, n, r, i, a, o, s);
		} else {
			let a = U[W++], o = U[W++], s = U[W++], c = U[W++];
			if ((a & 128) > 0 || (o & 128) > 0 || (s & 128) > 0 || (c & 128) > 0) {
				W -= 8;
				return;
			}
			if (e < 10) {
				if (e === 8) return J(t, n, r, i, a, o, s, c);
				{
					let e = U[W++];
					if ((e & 128) > 0) {
						W -= 9;
						return;
					}
					return J(t, n, r, i, a, o, s, c, e);
				}
			} else if (e < 12) {
				let l = U[W++], u = U[W++];
				if ((l & 128) > 0 || (u & 128) > 0) {
					W -= 10;
					return;
				}
				if (e < 11) return J(t, n, r, i, a, o, s, c, l, u);
				let d = U[W++];
				if ((d & 128) > 0) {
					W -= 11;
					return;
				}
				return J(t, n, r, i, a, o, s, c, l, u, d);
			} else {
				let l = U[W++], u = U[W++], d = U[W++], f = U[W++];
				if ((l & 128) > 0 || (u & 128) > 0 || (d & 128) > 0 || (f & 128) > 0) {
					W -= 12;
					return;
				}
				if (e < 14) {
					if (e === 12) return J(t, n, r, i, a, o, s, c, l, u, d, f);
					{
						let e = U[W++];
						if ((e & 128) > 0) {
							W -= 13;
							return;
						}
						return J(t, n, r, i, a, o, s, c, l, u, d, f, e);
					}
				} else {
					let p = U[W++], m = U[W++];
					if ((p & 128) > 0 || (m & 128) > 0) {
						W -= 14;
						return;
					}
					if (e < 15) return J(t, n, r, i, a, o, s, c, l, u, d, f, p, m);
					let h = U[W++];
					if ((h & 128) > 0) {
						W -= 15;
						return;
					}
					return J(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h);
				}
			}
		}
	}
}
function yee() {
	let e = U[W++], t;
	if (e < 192) t = e - 160;
	else switch (e) {
		case 217:
			t = U[W++];
			break;
		case 218:
			t = q.getUint16(W), W += 2;
			break;
		case 219:
			t = q.getUint32(W), W += 4;
			break;
		default: throw Error("Expected string");
	}
	return Ns(t);
}
function Rs(e) {
	return G.copyBuffers ? Uint8Array.prototype.slice.call(U, W, W += e) : U.subarray(W, W += e);
}
function zs(e) {
	let t = U[W++];
	if (bX[t]) {
		let n;
		return bX[t](U.subarray(W, n = W += e), (e) => {
			W = e;
			try {
				return As();
			} finally {
				W = n;
			}
		});
	} else throw Error("Unknown extension type " + t);
}
function Bs() {
	let e = U[W++];
	if (e >= 160 && e < 192) {
		if (e -= 160, _X >= W) return hX.slice(W - gX, (W += e) - gX);
		if (!(_X == 0 && dX < 180)) return MX(e);
	} else return W--, Vs(As());
	let t = (e << 5 ^ (e > 1 ? q.getUint16(W) : e > 0 ? U[W] : 0)) & 4095, n = IX[t], r = W, i = W + e - 3, a, o = 0;
	if (n && n.bytes == e) {
		for (; r < i;) {
			if (a = q.getUint32(r), a != n[o++]) {
				r = 1879048192;
				break;
			}
			r += 4;
		}
		for (i += 3; r < i;) if (a = U[r++], a != n[o++]) {
			r = 1879048192;
			break;
		}
		if (r === i) return W = r, n.string;
		i -= 3, r = W;
	}
	for (n = [], IX[t] = n, n.bytes = e; r < i;) a = q.getUint32(r), n.push(a), r += 4;
	for (i += 3; r < i;) a = U[r++], n.push(a);
	let s = e < 16 ? Ls(e) : Is(e);
	return s == null ? n.string = MX(e) : n.string = s;
}
function Vs(e) {
	if (typeof e == "string") return e;
	if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return e.toString();
	if (e == null) return e + "";
	if (G.allowArraysInMapKeys && Array.isArray(e) && e.flat().every((e) => [
		"string",
		"number",
		"boolean",
		"bigint"
	].includes(typeof e))) return e.flat().toString();
	throw Error(`Invalid property type for record: ${typeof e}`);
}
function Hs(e) {
	OX && OX();
	let t = dX, n = W, r = mX, i = gX, a = _X, o = hX, s = pX, c = yX, l = vX, u = new Uint8Array(U.slice(0, dX)), d = K, f = K.slice(0, K.length), p = G, m = wX, h = e();
	return dX = t, W = n, mX = r, gX = i, _X = a, hX = o, pX = s, yX = c, vX = l, U = u, wX = m, K = d, K.splice(0, K.length, ...f), G = p, q = new DataView(U.buffer, U.byteOffset, U.byteLength), h;
}
function Us() {
	U = null, yX = null, K = null;
}
function Ws(e, t, n, r) {
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
function Gs(e, t) {
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
function Ks(e, t, n, r) {
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
function qs(e, t) {
	let n, r = t.length * 6, i = e.length - r;
	for (; n = t.pop();) {
		let t = n.offset, a = n.id;
		e.copyWithin(t + r, t, i), r -= 6;
		let o = t + r;
		e[o++] = 214, e[o++] = 105, e[o++] = a >> 24, e[o++] = a >> 16 & 255, e[o++] = a >> 8 & 255, e[o++] = a & 255, i = t;
	}
	return e;
}
function Js(e, t, n) {
	if (cZ.length > 0) {
		aZ.setUint32(cZ.position + e, oZ + n - cZ.position - e), cZ.stringsPosition = oZ - e;
		let r = cZ;
		cZ = null, t(r[0]), t(r[1]);
	}
}
function Ys(e, t) {
	return e.isCompatible = (e) => {
		let n = !e || (t.lastNamedStructuresLength || 0) === e.length;
		return n || t._mergeStructures(e), n;
	}, e;
}
function Xs(e) {
	if (e) {
		let t = [
			null,
			e[1],
			e[2],
			e[3]
		];
		return e[0] && (t[0] = bs(e[0])), t;
	}
	return [];
}
function Zs(e) {
	if (!e) return [];
	let t = _s(JSON.parse, JSON, [e]);
	return t === JY || !(t instanceof Array) ? [] : t;
}
function Qs(e) {
	let t = _s(JSON.parse, JSON, [e]);
	if (t !== JY) return t;
	OZ("corrupted returnvalue: " + e, t);
}
function $s(e, t) {
	let n = t.endDate ? new Date(t.endDate).getTime() : "", r = t.tz || "", i = t.pattern || String(t.every) || "";
	return `${e}:${t.jobId ? t.jobId : ""}:${n}:${r}:${i}`;
}
function ec(e) {
	if (typeof e == "string") return g2;
	if (Array.isArray(e)) return _2;
	if (!e) return;
	let { type: t } = e;
	if (j2.has(t)) return t;
}
function tc(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (P2(e)) throw Error("doc is valid.");
	let n = Object.prototype.toString.call(e);
	if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
	let r = F2([...j2].map((e) => `'${e}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
function nc(e, t) {
	if (typeof e == "string") return t(e);
	let n = /* @__PURE__ */ new Map();
	return r(e);
	function r(e) {
		if (n.has(e)) return n.get(e);
		let t = i(e);
		return n.set(e, t), t;
	}
	function i(e) {
		switch (P2(e)) {
			case _2: return t(e.map(r));
			case C2: return t({
				...e,
				parts: e.parts.map(r)
			});
			case w2: return t({
				...e,
				breakContents: r(e.breakContents),
				flatContents: r(e.flatContents)
			});
			case S2: {
				let { expandedStates: n, contents: i } = e;
				return n ? (n = n.map(r), i = n[0]) : i = r(i), t({
					...e,
					contents: i,
					expandedStates: n
				});
			}
			case b2:
			case y2:
			case T2:
			case k2:
			case E2: return t({
				...e,
				contents: r(e.contents)
			});
			case g2:
			case v2:
			case x2:
			case D2:
			case O2:
			case A2: return t(e);
			default: throw new L2(e);
		}
	}
}
function rc(e, t = K2) {
	return nc(e, (e) => typeof e == "string" ? dc(t, e.split("\n")) : e);
}
function ic(e) {
	return z2(e), {
		type: y2,
		contents: e
	};
}
function ac(e, t) {
	return z2(t), {
		type: b2,
		contents: t,
		n: e
	};
}
function B(e, t = {}) {
	return z2(e), B2(t.expandedStates, !0), {
		type: S2,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function oc(e) {
	return ac(-Infinity, e);
}
function sc(e) {
	return ac({ type: "root" }, e);
}
function cc(e) {
	return V2(e), {
		type: C2,
		parts: e
	};
}
function lc(e, t = "", n = {}) {
	return z2(e), t !== "" && z2(t), {
		type: w2,
		breakContents: e,
		flatContents: t,
		groupId: n.groupId
	};
}
function uc(e, t) {
	return z2(e), {
		type: T2,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function dc(e, t) {
	z2(e), B2(t);
	let n = [];
	for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
	return n;
}
function fc(e, t) {
	let n = t === !0 || t === q2 ? q2 : J2, r = n === q2 ? J2 : q2, i = 0, a = 0;
	for (let t of e) t === n ? i++ : t === r && a++;
	return i > a ? r : n;
}
function pc(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function mc(e) {
	return e?.type === "front-matter";
}
function hc(e, t) {
	var n;
	if (e.type === "text" || e.type === "comment" || t4(e) || e.type === "yaml" || e.type === "toml") return null;
	if (e.type === "attribute" && delete t.value, e.type === "docType" && delete t.value, e.type === "angularControlFlowBlock" && (n = e.parameters) != null && n.children) for (let n of t.parameters.children) r4.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
	e.type === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.type === "angularLetDeclarationInitializer" && delete t.value;
}
async function gc(e, t) {
	if (e.language === "yaml") {
		let n = e.value.trim(), r = n ? await t(n, { parser: "yaml" }) : "";
		return sc([
			e.startDelimiter,
			e.explicitLanguage,
			X,
			r,
			r ? X : "",
			e.endDelimiter
		]);
	}
}
function _c(e, t = !0) {
	return [ic([G2, e]), t ? G2 : ""];
}
function vc(e, t) {
	let n = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
	return n && (n.type === "ObjectExpression" || n.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (n.type === "TemplateLiteral" || n.type === "StringLiteral"));
}
async function yc(e, t, n, r) {
	n = {
		__isInHtmlAttribute: !0,
		__embeddedInHtml: !0,
		...n
	};
	let i = !0;
	r && (n.__onHtmlBindingRoot = (e, t) => {
		i = r(e, t);
	});
	let a = await t(e, n, t);
	return i ? B(a) : _c(a);
}
function bc(e, t, n, r) {
	let { node: i } = n, a = r.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
	return /^\s*$/u.test(a) ? "" : yc(a, e, {
		parser: "__ng_directive",
		__isInHtmlAttribute: !1
	}, vc);
}
function xc(e) {
	return Array.isArray(e) && e.length > 0;
}
function Sc(e) {
	if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw TypeError(`URL must be a file URL: received "${e.protocol}"`);
	return e;
}
function Cc(e) {
	return e = Sc(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function wc(e) {
	e = Sc(e);
	let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
	return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function Tc(e) {
	return h4 ? wc(e) : Cc(e);
}
function Ec(e, t) {
	if (!t) return;
	let n = _4(t).toLowerCase();
	return e.find(({ filenames: e }) => e?.some((e) => e.toLowerCase() === n)) ?? e.find(({ extensions: e }) => e?.some((e) => n.endsWith(e)));
}
function Dc(e, t) {
	if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => e?.includes(t)) ?? e.find(({ extensions: e }) => e?.includes(`.${t}`));
}
function Oc(e, t) {
	if (t) {
		if (String(t).startsWith("file:")) try {
			t = g4(t);
		} catch {
			return;
		}
		if (typeof t == "string") return e.find(({ isSupported: e }) => e?.({ filepath: t }));
	}
}
function kc(e, t) {
	let n = c4(!1, e.plugins).flatMap((e) => e.languages ?? []);
	return (Dc(n, t.language) ?? Ec(n, t.physicalFile) ?? Ec(n, t.file) ?? Oc(n, t.physicalFile) ?? Oc(n, t.file) ?? (t.physicalFile, void 0))?.parsers[0];
}
function Ac(e) {
	return e.type === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
function jc(e, t) {
	return !!(e.type === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.type === "ieConditionalComment" && !e.complete || ul(e) && e.children.some((e) => e.type !== "text" && e.type !== "interpolation") || bl(e, t) && !Fc(e, t) && e.type !== "interpolation");
}
function Mc(e) {
	return e.type === "attribute" || !e.parent || !e.prev ? !1 : Nc(e.prev);
}
function Nc(e) {
	return e.type === "comment" && e.value.trim() === "prettier-ignore";
}
function Pc(e) {
	return e.type === "text" || e.type === "comment";
}
function Fc(e, t) {
	return e.type === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || e.fullName === "mj-style" && t.parser === "mjml" || C4(e) && (e.name === "script" || e.name === "style"));
}
function Ic(e, t) {
	return e.children && !Fc(e, t);
}
function Lc(e, t) {
	return Fc(e, t) || e.type === "interpolation" || Rc(e);
}
function Rc(e) {
	return pl(e).startsWith("pre");
}
function zc(e, t) {
	var n, r;
	let i = a();
	if (i && !e.prev && (r = e.parent?.tagDefinition) != null && r.ignoreFirstLf) return e.type === "interpolation";
	return i;
	function a() {
		return t4(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.prev && (e.prev.type === "text" || e.prev.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : ul(e.parent) ? !0 : !(!e.prev && (e.parent.type === "root" || ul(e) && e.parent || Fc(e.parent, t) || vl(e.parent, t) || !al(e.parent.cssDisplay)) || e.prev && !cl(e.prev.cssDisplay));
	}
}
function Bc(e, t) {
	return t4(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.next && (e.next.type === "text" || e.next.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : ul(e.parent) ? !0 : !(!e.next && (e.parent.type === "root" || ul(e) && e.parent || Fc(e.parent, t) || vl(e.parent, t) || !ol(e.parent.cssDisplay)) || e.next && !sl(e.next.cssDisplay));
}
function Vc(e, t) {
	return ll(e.cssDisplay) && !Fc(e, t);
}
function Hc(e) {
	return t4(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function Uc(e) {
	return Wc(e) || e.type === "element" && e.children.length > 0 && ([
		"body",
		"script",
		"style"
	].includes(e.name) || e.children.some((e) => Qc(e))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.type !== "text" && Jc(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || Yc(e.lastChild));
}
function Wc(e) {
	return e.type === "element" && e.children.length > 0 && ([
		"html",
		"head",
		"ul",
		"ol",
		"select"
	].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function Gc(e) {
	return Xc(e) || e.prev && Kc(e.prev) || qc(e);
}
function Kc(e) {
	return Xc(e) || e.type === "element" && e.fullName === "br" || qc(e);
}
function qc(e) {
	return Jc(e) && Yc(e);
}
function Jc(e) {
	return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.type === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function Yc(e) {
	return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.type === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function Xc(e) {
	switch (e.type) {
		case "ieConditionalComment":
		case "comment":
		case "directive": return !0;
		case "element": return ["script", "select"].includes(e.name);
	}
	return !1;
}
function Zc(e) {
	return e.lastChild ? Zc(e.lastChild) : e;
}
function Qc(e) {
	var t;
	return e.children?.some((e) => e.type !== "text");
}
function $c(e) {
	if (e) switch (e) {
		case "module":
		case "text/javascript":
		case "text/babel":
		case "text/jsx":
		case "application/javascript": return "babel";
		case "application/x-typescript": return "typescript";
		case "text/markdown": return "markdown";
		case "text/html": return "html";
		case "text/x-handlebars-template": return "glimmer";
		default: if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
	}
}
function el(e, t) {
	let { name: n, attrMap: r } = e;
	if (n !== "script" || Object.prototype.hasOwnProperty.call(r, "src")) return;
	let { type: i, lang: a } = e.attrMap;
	return !a && !i ? "babel" : v4(t, { language: a }) ?? $c(i);
}
function tl(e, t) {
	if (!bl(e, t)) return;
	let { attrMap: n } = e;
	if (Object.prototype.hasOwnProperty.call(n, "src")) return;
	let { type: r, lang: i } = n;
	return v4(t, { language: i }) ?? $c(r);
}
function nl(e, t) {
	if (e.name === "style") {
		let { lang: n } = e.attrMap;
		return n ? v4(t, { language: n }) : "css";
	}
	if (e.name === "mj-style" && t.parser === "mjml") return "css";
}
function rl(e, t) {
	return el(e, t) ?? nl(e, t) ?? tl(e, t);
}
function il(e) {
	return e === "block" || e === "list-item" || e.startsWith("table");
}
function al(e) {
	return !il(e) && e !== "inline-block";
}
function ol(e) {
	return !il(e) && e !== "inline-block";
}
function sl(e) {
	return !il(e);
}
function cl(e) {
	return !il(e);
}
function ll(e) {
	return !il(e) && e !== "inline-block";
}
function ul(e) {
	return pl(e).startsWith("pre");
}
function dl(e, t) {
	let n = e;
	for (; n;) {
		if (t(n)) return !0;
		n = n.parent;
	}
	return !1;
}
function fl(e, t) {
	var n;
	if (yl(e, t)) return "block";
	if (e.prev?.type === "comment") {
		let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
		if (t) return t[1];
	}
	let r = !1;
	if (e.type === "element" && e.namespace === "svg") if (dl(e, (e) => e.fullName === "svg:foreignObject")) r = !0;
	else return e.name === "svg" ? "inline-block" : "block";
	switch (t.htmlWhitespaceSensitivity) {
		case "strict": return "inline";
		case "ignore": return "block";
		default: if (e.type === "element" && (!e.namespace || r || C4(e)) && Object.prototype.hasOwnProperty.call(b4, e.name)) return b4[e.name];
	}
	return y4;
}
function pl(e) {
	return e.type === "element" && (!e.namespace || C4(e)) && Object.prototype.hasOwnProperty.call(S4, e.name) ? S4[e.name] : x4;
}
function ml(e) {
	let t = Infinity;
	for (let n of e.split("\n")) {
		if (n.length === 0) continue;
		let e = Q2.getLeadingWhitespaceCount(n);
		if (e === 0) return 0;
		n.length !== e && e < t && (t = e);
	}
	return t === Infinity ? 0 : t;
}
function hl(e, t = ml(e)) {
	return t === 0 ? e : e.split("\n").map((e) => e.slice(t)).join("\n");
}
function gl(e) {
	return h2(!1, h2(!1, e, "&apos;", "'"), "&quot;", "\"");
}
function _l(e) {
	return gl(e.value);
}
function vl(e, t) {
	return yl(e, t) && !D4.has(e.fullName);
}
function yl(e, t) {
	return t.parser === "vue" && e.type === "element" && e.parent.type === "root" && e.fullName.toLowerCase() !== "html";
}
function bl(e, t) {
	return yl(e, t) && (vl(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function xl(e) {
	let t = e.fullName;
	return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function Sl(e, t) {
	let n = e.parent;
	if (!yl(n, t)) return !1;
	let r = n.fullName, i = e.fullName;
	return r === "script" && i === "setup" || r === "style" && i === "vars";
}
function Cl(e, t = e.value) {
	return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? rc(t) : rc(hl(T4(t)), X) : dc(Y, Q2.split(t));
}
function wl(e, t) {
	return yl(e, t) && e.name === "script";
}
async function Tl(e, t) {
	let n = [];
	for (let [r, i] of e.split(O4).entries()) if (r % 2 == 0) n.push(rc(i));
	else try {
		n.push(B([
			"{{",
			ic([Y, await yc(i, t, {
				parser: "__ng_interpolation",
				__isInHtmlInterpolation: !0
			})]),
			Y,
			"}}"
		]));
	} catch {
		n.push("{{", rc(i), "}}");
	}
	return n;
}
function El({ parser: e }) {
	return (t, n, r) => yc(_l(r.node), t, { parser: e }, vc);
}
function Dl(e, t) {
	if (t.parser !== "angular") return;
	let { node: n } = e, r = n.fullName;
	if (r.startsWith("(") && r.endsWith(")") || r.startsWith("on-")) return k4;
	if (r.startsWith("[") && r.endsWith("]") || /^bind(?:on)?-/u.test(r) || /^ng-(?:if|show|hide|class|style)$/u.test(r)) return A4;
	if (r.startsWith("*")) return j4;
	let i = _l(n);
	if (/^i18n(?:-.+)?$/u.test(r)) return () => _c(cc(Cl(n, i.trim())), !i.includes("@@"));
	if (O4.test(i)) return (e) => Tl(i, e);
}
function Ol(e, t) {
	let { node: n } = e, r = _l(n);
	if (n.fullName === "class" && !t.parentParser && !r.includes("{{")) return () => r.trim().split(/\s+/u).join(" ");
}
function kl(e) {
	return e === "	" || e === "\n" || e === "\f" || e === "\r" || e === " ";
}
function Al(e) {
	let t = e.length, n, r, i, a, o, s = 0, c;
	function l(t) {
		let n, r = t.exec(e.substring(s));
		if (r) return [n] = r, s += n.length, n;
	}
	let u = [];
	for (;;) {
		if (l(F4), s >= t) {
			if (u.length === 0) throw Error("Must contain one or more image candidate strings.");
			return u;
		}
		c = s, n = l(I4), r = [], n.slice(-1) === "," ? (n = n.replace(L4, ""), f()) : d();
	}
	function d() {
		for (l(P4), i = "", a = "in descriptor";;) {
			if (o = e.charAt(s), a === "in descriptor") if (kl(o)) i && (r.push(i), i = "", a = "after descriptor");
			else if (o === ",") {
				s += 1, i && r.push(i), f();
				return;
			} else if (o === "(") i += o, a = "in parens";
			else if (o === "") {
				i && r.push(i), f();
				return;
			} else i += o;
			else if (a === "in parens") if (o === ")") i += o, a = "in descriptor";
			else if (o === "") {
				r.push(i), f();
				return;
			} else i += o;
			else if (a === "after descriptor" && !kl(o)) if (o === "") {
				f();
				return;
			} else a = "in descriptor", --s;
			s += 1;
		}
	}
	function f() {
		let t = !1, i, a, o, s, l = {}, d, f, p, m, h;
		for (s = 0; s < r.length; s++) d = r[s], f = d[d.length - 1], p = d.substring(0, d.length - 1), m = parseInt(p, 10), h = parseFloat(p), R4.test(p) && f === "w" ? ((i || a) && (t = !0), m === 0 ? t = !0 : i = m) : z4.test(p) && f === "x" ? ((i || a || o) && (t = !0), h < 0 ? t = !0 : a = h) : R4.test(p) && f === "h" ? ((o || a) && (t = !0), m === 0 ? t = !0 : o = m) : t = !0;
		if (!t) l.source = {
			value: n,
			startOffset: c
		}, i && (l.width = { value: i }), a && (l.density = { value: a }), o && (l.height = { value: o }), u.push(l);
		else throw Error(`Invalid srcset descriptor found in "${e}" at "${d}".`);
	}
}
function jl(e) {
	if (e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source")) return () => Ml(_l(e.node));
}
function Ml(e) {
	let t = B4(e), n = H4.filter((e) => t.some((t) => Object.prototype.hasOwnProperty.call(t, e)));
	if (n.length > 1) throw Error("Mixed descriptor in srcset is not supported");
	let [r] = n, i = V4[r], a = t.map((e) => e.source.value), o = Math.max(...a.map((e) => e.length)), s = t.map((e) => e[r] ? String(e[r].value) : ""), c = s.map((e) => {
		let t = e.indexOf(".");
		return t === -1 ? e.length : t;
	}), l = Math.max(...c);
	return _c(dc([",", Y], a.map((e, t) => {
		let n = [e], r = s[t];
		if (r) {
			let a = o - e.length + 1, s = l - c[t], u = " ".repeat(a + s);
			n.push(lc(u, " "), r + i);
		}
		return n;
	})));
}
function Nl(e, t) {
	let { node: n } = e, r = _l(e.node).trim();
	if (n.fullName === "style" && !t.parentParser && !r.includes("{{")) return async (e) => _c(await e(r, {
		parser: "css",
		__isHTMLStyleAttribute: !0
	}));
}
function Pl(e, t) {
	let { root: n } = e;
	return W4.has(n) || W4.set(n, n.children.some((e) => wl(e, t) && ["ts", "typescript"].includes(e.attrMap.lang))), W4.get(n);
}
function Fl(e, t, n) {
	let { node: r } = n;
	return yc(`type T<${_l(r)}> = any`, e, {
		parser: "babel-ts",
		__isEmbeddedTypescriptGenericParameters: !0
	}, vc);
}
function Il(e, t, { parseWithTs: n }) {
	return yc(`function _(${e}) {}`, t, {
		parser: n ? "babel-ts" : "babel",
		__isVueBindings: !0
	});
}
async function Ll(e, t, n, r) {
	let { left: i, operator: a, right: o } = Rl(_l(n.node)), s = G4(n, r);
	return [
		B(await yc(`function _(${i}) {}`, e, {
			parser: s ? "babel-ts" : "babel",
			__isVueForBindingLeft: !0
		})),
		" ",
		a,
		" ",
		await yc(o, e, { parser: s ? "__ts_expression" : "__js_expression" })
	];
}
function Rl(e) {
	let t = /(.*?)\s+(in|of)\s+(.*)/su, n = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, r = /^\(|\)$/gu, i = e.match(t);
	if (!i) return;
	let a = {};
	if (a.for = i[3].trim(), !a.for) return;
	let o = h2(!1, i[1].trim(), r, ""), s = o.match(n);
	s ? (a.alias = o.replace(n, ""), a.iterator1 = s[1].trim(), s[2] && (a.iterator2 = s[2].trim())) : a.alias = o;
	let c = [
		a.alias,
		a.iterator1,
		a.iterator2
	];
	if (!c.some((e, t) => !e && (t === 0 || c.slice(t + 1).some(Boolean)))) return {
		left: c.filter(Boolean).join(","),
		operator: i[2],
		right: a.for
	};
}
function zl(e, t) {
	if (t.parser !== "vue") return;
	let { node: n } = e, r = n.fullName;
	if (r === "v-for") return Ll;
	if (r === "generic" && wl(n.parent, t)) return Fl;
	let i = _l(n), a = G4(e, t);
	if (xl(n) || Sl(n, t)) return (e) => Il(i, e, { parseWithTs: a });
	if (r.startsWith("@") || r.startsWith("v-on:")) return (e) => Bl(i, e, { parseWithTs: a });
	if (r.startsWith(":") || r.startsWith(".") || r.startsWith("v-bind:")) return (e) => Vl(i, e, { parseWithTs: a });
	if (r.startsWith("v-")) return (e) => Hl(i, e, { parseWithTs: a });
}
async function Bl(e, t, { parseWithTs: n }) {
	var r;
	try {
		return await Hl(e, t, { parseWithTs: n });
	} catch (e) {
		if (e.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw e;
	}
	return yc(e, t, { parser: n ? "__vue_ts_event_binding" : "__vue_event_binding" }, vc);
}
function Vl(e, t, { parseWithTs: n }) {
	return yc(e, t, { parser: n ? "__vue_ts_expression" : "__vue_expression" }, vc);
}
function Hl(e, t, { parseWithTs: n }) {
	return yc(e, t, { parser: n ? "__ts_expression" : "__js_expression" }, vc);
}
function Ul(e, t) {
	let { node: n } = e;
	if (n.value) {
		if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(t.originalText.slice(n.valueSpan.start.offset, n.valueSpan.end.offset)) || t.parser === "lwc" && n.value.startsWith("{") && n.value.endsWith("}")) return [
			n.rawName,
			"=",
			n.value
		];
		for (let n of [
			U4,
			Nl,
			N4,
			K4,
			M4
		]) {
			let r = n(e, t);
			if (r) return Wl(r);
		}
	}
}
function Wl(e) {
	return async (t, n, r, i) => {
		let a = await e(t, n, r, i);
		if (a) return a = nc(a, (e) => typeof e == "string" ? h2(!1, e, "\"", "&quot;") : e), [
			r.node.rawName,
			"=\"",
			B(a),
			"\""
		];
	};
}
function Gl(e) {
	return e.sourceSpan.start.offset;
}
function Kl(e) {
	return e.sourceSpan.end.offset;
}
function ql(e, t) {
	return [e.isSelfClosing ? "" : Jl(e, t), Yl(e, t)];
}
function Jl(e, t) {
	return e.lastChild && ru(e.lastChild) ? "" : [Xl(e, t), Ql(e, t)];
}
function Yl(e, t) {
	return (e.next ? tu(e.next) : nu(e.parent)) ? "" : [$l(e, t), Zl(e, t)];
}
function Xl(e, t) {
	return nu(e) ? $l(e.lastChild, t) : "";
}
function Zl(e, t) {
	return ru(e) ? Ql(e.parent, t) : iu(e) ? fu(e.next, t) : "";
}
function Ql(e, t) {
	if (eu(e, t)) return "";
	switch (e.type) {
		case "ieConditionalComment": return "<!";
		case "element": if (e.hasHtmComponentClosingTag) return "<//";
		default: return `</${e.rawName}`;
	}
}
function $l(e, t) {
	if (eu(e, t)) return "";
	switch (e.type) {
		case "ieConditionalComment":
		case "ieConditionalEndComment": return "[endif]-->";
		case "ieConditionalStartComment": return "]><!-->";
		case "interpolation": return "}}";
		case "angularIcuExpression": return "}";
		case "element": if (e.isSelfClosing) return "/>";
		default: return ">";
	}
}
function eu(e, t) {
	return !e.isSelfClosing && !e.endSourceSpan && (Mc(e) || jc(e.parent, t));
}
function tu(e) {
	return e.prev && e.prev.type !== "docType" && e.type !== "angularControlFlowBlock" && !Pc(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function nu(e) {
	var t;
	return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !Pc(Zc(e.lastChild)) && !ul(e);
}
function ru(e) {
	return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Pc(Zc(e));
}
function iu(e) {
	return e.next && !Pc(e.next) && Pc(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function au(e) {
	let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
	return t ? t[1] ? t[1].split(/\s+/u) : !0 : !1;
}
function ou(e) {
	return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function su(e, t, n) {
	var r;
	let { node: i } = e;
	if (!l4(i.attrs)) return i.isSelfClosing ? " " : "";
	let a = i.prev?.type === "comment" && au(i.prev.value), o = typeof a == "boolean" ? () => a : Array.isArray(a) ? (e) => a.includes(e.rawName) : () => !1, s = e.map(({ node: e }) => o(e) ? rc(t.originalText.slice(Gl(e), Kl(e))) : n(), "attrs"), c = i.type === "element" && i.fullName === "script" && i.attrs.length === 1 && i.attrs[0].fullName === "src" && i.children.length === 0, l = t.singleAttributePerLine && i.attrs.length > 1 && !yl(i, t) ? X : Y, u = [ic([c ? " " : Y, dc(l, s)])];
	return i.firstChild && ou(i.firstChild) || i.isSelfClosing && nu(i.parent) || c ? u.push(i.isSelfClosing ? " " : "") : u.push(t.bracketSameLine ? i.isSelfClosing ? " " : "" : i.isSelfClosing ? Y : G2), u;
}
function cu(e) {
	return e.firstChild && ou(e.firstChild) ? "" : pu(e);
}
function lu(e, t, n) {
	let { node: r } = e;
	return [
		uu(r, t),
		su(e, t, n),
		r.isSelfClosing ? "" : cu(r)
	];
}
function uu(e, t) {
	return e.prev && iu(e.prev) ? "" : [du(e, t), fu(e, t)];
}
function du(e, t) {
	return ou(e) ? pu(e.parent) : tu(e) ? $l(e.prev, t) : "";
}
function fu(e, t) {
	switch (e.type) {
		case "ieConditionalComment":
		case "ieConditionalStartComment": return `<!--[if ${e.condition}`;
		case "ieConditionalEndComment": return "<!--<!";
		case "interpolation": return "{{";
		case "docType": {
			if (e.value === "html") {
				let { filepath: e } = t;
				if (e && /\.html?$/u.test(e)) return Y4;
			}
			let n = Gl(e);
			return t.originalText.slice(n, n + Y4.length);
		}
		case "angularIcuExpression": return "{";
		case "element": if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
		default: return `<${e.rawName}`;
	}
}
function pu(e) {
	switch (e.type) {
		case "ieConditionalComment": return "]>";
		case "element": if (e.condition) return "><!--<![endif]-->";
		default: return ">";
	}
}
function mu(e, t) {
	if (!e.endSourceSpan) return "";
	let n = e.startSourceSpan.end.offset;
	e.firstChild && ou(e.firstChild) && (n -= pu(e).length);
	let r = e.endSourceSpan.start.offset;
	return e.lastChild && ru(e.lastChild) ? r += Ql(e, t).length : nu(e) && (r -= $l(e.lastChild, t).length), t.originalText.slice(n, r);
}
function hu(e, t) {
	let { node: n } = e;
	switch (n.type) {
		case "element":
			if (Fc(n, t) || n.type === "interpolation") return;
			if (!n.isSelfClosing && bl(n, t)) {
				let r = rl(n, t);
				return r ? async (i, a) => {
					let o = X4(n, t), s = /^\s*$/u.test(o), c = "";
					return s ||= (c = await i(T4(o), {
						parser: r,
						__embeddedInHtml: !0
					}), c === ""), [
						du(n, t),
						B(lu(e, t, a)),
						s ? "" : X,
						c,
						s ? "" : X,
						ql(n, t),
						Zl(n, t)
					];
				} : void 0;
			}
			break;
		case "text":
			if (Fc(n.parent, t)) {
				let e = rl(n.parent, t);
				if (e) return async (r) => {
					let i = e === "markdown" ? hl(n.value.replace(/^[^\S\n]*\n/u, "")) : n.value, a = {
						parser: e,
						__embeddedInHtml: !0
					};
					if (t.parser === "html" && e === "babel") {
						let e = "script", { attrMap: t } = n.parent;
						t && (t.type === "module" || (t.type === "text/babel" || t.type === "text/jsx") && t["data-type"] === "module") && (e = "module"), a.__babelSourceType = e;
					}
					return [
						H2,
						du(n, t),
						await r(i, a),
						Zl(n, t)
					];
				};
			} else if (n.parent.type === "interpolation") return async (r) => {
				let i = {
					__isInHtmlInterpolation: !0,
					__embeddedInHtml: !0
				};
				return t.parser === "angular" ? i.parser = "__ng_interpolation" : t.parser === "vue" ? i.parser = G4(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [ic([Y, await r(n.value, i)]), n.parent.next && tu(n.parent.next) ? " " : Y];
			};
			break;
		case "attribute": return q4(e, t);
		case "front-matter": return (e) => a4(n, e);
		case "angularControlFlowBlockParameters": return Z4.has(e.parent.name) ? o4 : void 0;
		case "angularLetDeclarationInitializer": return (e) => yc(n.value, e, {
			parser: "__ng_binding",
			__isInHtmlAttribute: !1
		});
	}
}
function gu(e) {
	if ($4 !== null && typeof $4.property) {
		let e = $4;
		return $4 = gu.prototype = null, e;
	}
	return $4 = gu.prototype = e ?? Object.create(null), new gu();
}
function _u(e) {
	return gu(e);
}
function vu(e, t = "type") {
	_u(e);
	function n(n) {
		let r = n[t], i = e[r];
		if (!Array.isArray(i)) throw Object.assign(/* @__PURE__ */ Error(`Missing visitor keys for '${r}'.`), { node: n });
		return i;
	}
	return n;
}
function yu(e) {
	return i3.test(e);
}
function bu(e) {
	return r3.test(e);
}
function xu(e) {
	return `<!-- @${n3} -->

${e}`;
}
function Su(e) {
	let t = Kl(e);
	return e.type === "element" && !e.endSourceSpan && l4(e.children) ? Math.max(t, Su(N2(!1, e.children, -1))) : t;
}
function Cu(e, t, n) {
	let r = e.node;
	if (Mc(r)) {
		let e = Su(r);
		return [
			du(r, t),
			rc(Q2.trimEnd(t.originalText.slice(Gl(r) + (r.prev && iu(r.prev) ? fu(r).length : 0), e - (r.next && tu(r.next) ? $l(r, t).length : 0)))),
			Zl(r, t)
		];
	}
	return n();
}
function wu(e, t) {
	return Pc(e) && Pc(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Gc(t) ? X : Y : "" : Gc(t) ? X : G2 : iu(e) && (Mc(t) || t.firstChild || t.isSelfClosing || t.type === "element" && t.attrs.length > 0) || e.type === "element" && e.isSelfClosing && tu(t) ? "" : !t.isLeadingSpaceSensitive || Gc(t) || tu(t) && e.lastChild && ru(e.lastChild) && e.lastChild.lastChild && ru(e.lastChild.lastChild) ? X : t.hasLeadingSpaces ? Y : G2;
}
function Tu(e, t, n) {
	let { node: r } = e;
	if (Wc(r)) return [H2, ...e.map((e) => {
		let r = e.node, i = r.prev ? wu(r.prev, r) : "";
		return [i ? [i, Hc(r.prev) ? X : ""] : "", Cu(e, t, n)];
	}, "children")];
	let i = r.children.map(() => Symbol(""));
	return e.map((e, r) => {
		let a = e.node;
		if (Pc(a)) {
			if (a.prev && Pc(a.prev)) {
				let r = wu(a.prev, a);
				if (r) return Hc(a.prev) ? [
					X,
					X,
					Cu(e, t, n)
				] : [r, Cu(e, t, n)];
			}
			return Cu(e, t, n);
		}
		let o = [], s = [], c = [], l = [], u = a.prev ? wu(a.prev, a) : "", d = a.next ? wu(a, a.next) : "";
		return u && (Hc(a.prev) ? o.push(X, X) : u === X ? o.push(X) : Pc(a.prev) ? s.push(u) : s.push(lc("", G2, { groupId: i[r - 1] }))), d && (Hc(a) ? Pc(a.next) && l.push(X, X) : d === X ? Pc(a.next) && l.push(X) : c.push(d)), [
			...o,
			B([...s, B([Cu(e, t, n), ...c], { id: i[r] })]),
			...l
		];
	}, "children");
}
function Eu(e, t, n) {
	let { node: r } = e, i = [];
	Ou(e) && i.push("} "), i.push("@", r.name), r.parameters && i.push(" (", B(n("parameters")), ")"), i.push(" {");
	let a = Du(r);
	return r.children.length > 0 ? (r.firstChild.hasLeadingSpaces = !0, r.lastChild.hasTrailingSpaces = !0, i.push(ic([X, Tu(e, t, n)])), a && i.push(X, "}")) : a && i.push("}"), B(i, { shouldBreak: !0 });
}
function Du(e) {
	var t, n;
	return !(e.next?.type === "angularControlFlowBlock" && (n = a3.get(e.name)) != null && n.has(e.next.name));
}
function Ou(e) {
	let { previous: t } = e;
	return t?.type === "angularControlFlowBlock" && !Mc(t) && !Du(t);
}
function ku(e, t, n) {
	return [ic([G2, dc([";", Y], e.map(n, "children"))]), G2];
}
function Au(e, t, n) {
	let { node: r } = e;
	return [
		uu(r, t),
		B([
			r.switchValue.trim(),
			", ",
			r.clause,
			r.cases.length > 0 ? [",", ic([Y, dc(Y, e.map(n, "cases"))])] : "",
			G2
		]),
		Yl(r, t)
	];
}
function ju(e, t, n) {
	let { node: r } = e;
	return [
		r.value,
		" {",
		B([ic([G2, e.map(({ node: e, isLast: t }) => {
			let r = [n()];
			return e.type === "text" && (e.hasLeadingSpaces && r.unshift(Y), e.hasTrailingSpaces && !t && r.push(Y)), r;
		}, "expression")]), G2]),
		"}"
	];
}
function Mu(e, t, n) {
	let { node: r } = e;
	if (jc(r, t)) return [
		du(r, t),
		B(lu(e, t, n)),
		rc(X4(r, t)),
		...ql(r, t),
		Zl(r, t)
	];
	let i = r.children.length === 1 && (r.firstChild.type === "interpolation" || r.firstChild.type === "angularIcuExpression") && r.firstChild.isLeadingSpaceSensitive && !r.firstChild.hasLeadingSpaces && r.lastChild.isTrailingSpaceSensitive && !r.lastChild.hasTrailingSpaces, a = Symbol("element-attr-group-id"), o = (i) => B([
		B(lu(e, t, n), { id: a }),
		i,
		ql(r, t)
	]);
	return r.children.length === 0 ? o(r.hasDanglingSpaces && r.isDanglingSpaceSensitive ? Y : "") : o([
		Uc(r) ? H2 : "",
		((e) => i ? uc(e, { groupId: a }) : (Fc(r, t) || vl(r, t)) && r.parent.type === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? e : ic(e))([i ? lc(G2, "", { groupId: a }) : r.firstChild.hasLeadingSpaces && r.firstChild.isLeadingSpaceSensitive ? Y : r.firstChild.type === "text" && r.isWhitespaceSensitive && r.isIndentationSensitive ? oc(G2) : G2, Tu(e, t, n)]),
		(r.next ? tu(r.next) : nu(r.parent)) ? r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? " " : "" : i ? lc(G2, "", { groupId: a }) : r.lastChild.hasTrailingSpaces && r.lastChild.isTrailingSpaceSensitive ? Y : (r.lastChild.type === "comment" || r.lastChild.type === "text" && r.isWhitespaceSensitive && r.isIndentationSensitive) && RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, "u").test(r.lastChild.value) ? "" : G2
	]);
}
function Nu(e) {
	return e >= 9 && e <= 32 || e == 160;
}
function Pu(e) {
	return 48 <= e && e <= 57;
}
function Fu(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Iu(e) {
	return e >= 97 && e <= 102 || e >= 65 && e <= 70 || Pu(e);
}
function Lu(e) {
	return e === 10 || e === 13;
}
function Ru(e) {
	return 48 <= e && e <= 55;
}
function zu(e) {
	return e === 39 || e === 34 || e === 96;
}
function Bu(e) {
	return e.replace(o3, (...e) => e[1].toUpperCase());
}
function Vu(e, t) {
	for (let n of d3) n(e, t);
	return e;
}
function Hu(e) {
	e.walk((e) => {
		if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === "\n") {
			let t = e.children[0];
			t.value.length === 1 ? e.removeChild(t) : t.value = t.value.slice(1);
		}
	});
}
function Uu(e) {
	let t = (e) => {
		var t, n;
		return e.type === "element" && e.prev?.type === "ieConditionalStartComment" && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && e.firstChild?.type === "ieConditionalEndComment" && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
	};
	e.walk((e) => {
		if (e.children) for (let n = 0; n < e.children.length; n++) {
			let r = e.children[n];
			if (!t(r)) continue;
			let i = r.prev, a = r.firstChild;
			e.removeChild(i), n--;
			let o = new Z(i.sourceSpan.start, a.sourceSpan.end), s = new Z(o.start, r.sourceSpan.end);
			r.condition = i.condition, r.sourceSpan = s, r.startSourceSpan = o, r.removeChild(a);
		}
	});
}
function Wu(e, t, n) {
	e.walk((e) => {
		if (e.children) for (let r = 0; r < e.children.length; r++) {
			let i = e.children[r];
			if (i.type !== "text" && !t(i)) continue;
			i.type !== "text" && (i.type = "text", i.value = n(i));
			let a = i.prev;
			!a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new Z(a.sourceSpan.start, i.sourceSpan.end), e.removeChild(i), r--);
		}
	});
}
function Gu(e) {
	return Wu(e, (e) => e.type === "cdata", (e) => `<![CDATA[${e.value}]]>`);
}
function Ku(e) {
	let t = (e) => {
		var t, n;
		return e.type === "element" && e.attrs.length === 0 && e.children.length === 1 && e.firstChild.type === "text" && !Q2.hasWhitespaceCharacter(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && e.prev?.type === "text" && e.next?.type === "text";
	};
	e.walk((e) => {
		if (e.children) for (let n = 0; n < e.children.length; n++) {
			let r = e.children[n];
			if (!t(r)) continue;
			let i = r.prev, a = r.next;
			i.value += `<${r.rawName}>` + r.firstChild.value + `</${r.rawName}>` + a.value, i.sourceSpan = new Z(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, e.removeChild(r), n--, e.removeChild(a);
		}
	});
}
function qu(e, t) {
	if (t.parser === "html") return;
	let n = /\{\{(.+?)\}\}/su;
	e.walk((e) => {
		if (Ic(e, t)) for (let t of e.children) {
			if (t.type !== "text") continue;
			let r = t.sourceSpan.start, i = null, a = t.value.split(n);
			for (let n = 0; n < a.length; n++, r = i) {
				let o = a[n];
				if (n % 2 == 0) {
					i = r.moveBy(o.length), o.length > 0 && e.insertChildBefore(t, {
						type: "text",
						value: o,
						sourceSpan: new Z(r, i)
					});
					continue;
				}
				i = r.moveBy(o.length + 4), e.insertChildBefore(t, {
					type: "interpolation",
					sourceSpan: new Z(r, i),
					children: o.length === 0 ? [] : [{
						type: "text",
						value: o,
						sourceSpan: new Z(r.moveBy(2), i.moveBy(-2))
					}]
				});
			}
			e.removeChild(t);
		}
	});
}
function Ju(e, t) {
	e.walk((e) => {
		let n = e.$children;
		if (!n) return;
		if (n.length === 0 || n.length === 1 && n[0].type === "text" && Q2.trim(n[0].value).length === 0) {
			e.hasDanglingSpaces = n.length > 0, e.$children = [];
			return;
		}
		let r = Lc(e, t), i = Rc(e);
		if (!r) for (let t = 0; t < n.length; t++) {
			let r = n[t];
			if (r.type !== "text") continue;
			let { leadingWhitespace: i, text: a, trailingWhitespace: o } = E4(r.value), s = r.prev, c = r.next;
			a ? (r.value = a, r.sourceSpan = new Z(r.sourceSpan.start.moveBy(i.length), r.sourceSpan.end.moveBy(-o.length)), i && (s && (s.hasTrailingSpaces = !0), r.hasLeadingSpaces = !0), o && (r.hasTrailingSpaces = !0, c && (c.hasLeadingSpaces = !0))) : (e.removeChild(r), t--, (i || o) && (s && (s.hasTrailingSpaces = !0), c && (c.hasLeadingSpaces = !0)));
		}
		e.isWhitespaceSensitive = r, e.isIndentationSensitive = i;
	});
}
function Yu(e) {
	e.walk((e) => {
		e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
	});
}
function Xu(e, t) {
	e.walk((e) => {
		e.type === "element" && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
	});
}
function Zu(e, t) {
	e.walk((e) => {
		e.cssDisplay = fl(e, t);
	});
}
function Qu(e, t) {
	e.walk((e) => {
		let { children: n } = e;
		if (n) {
			if (n.length === 0) {
				e.isDanglingSpaceSensitive = Vc(e, t);
				return;
			}
			for (let e of n) e.isLeadingSpaceSensitive = zc(e, t), e.isTrailingSpaceSensitive = Bc(e, t);
			for (let e = 0; e < n.length; e++) {
				let t = n[e];
				t.isLeadingSpaceSensitive = (e === 0 || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive, t.isTrailingSpaceSensitive = (e === n.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive;
			}
		}
	});
}
function $u(e, t, n) {
	let { node: r } = e;
	switch (r.type) {
		case "front-matter": return rc(r.raw);
		case "root": return t.__onHtmlRoot && t.__onHtmlRoot(r), [B(Tu(e, t, n)), X];
		case "element":
		case "ieConditionalComment": return Mu(e, t, n);
		case "angularControlFlowBlock": return Eu(e, t, n);
		case "angularControlFlowBlockParameters": return ku(e, t, n);
		case "angularControlFlowBlockParameter": return Q2.trim(r.expression);
		case "angularLetDeclaration": return B([
			"@let ",
			B([
				r.id,
				" =",
				B(ic([Y, n("init")]))
			]),
			";"
		]);
		case "angularLetDeclarationInitializer": return r.value;
		case "angularIcuExpression": return Au(e, t, n);
		case "angularIcuCase": return ju(e, t, n);
		case "ieConditionalStartComment":
		case "ieConditionalEndComment": return [uu(r), Yl(r)];
		case "interpolation": return [
			uu(r, t),
			...e.map(n, "children"),
			Yl(r, t)
		];
		case "text": {
			if (r.parent.type === "interpolation") {
				let e = /\n[^\S\n]*$/u, t = e.test(r.value);
				return [rc(t ? r.value.replace(e, "") : r.value), t ? X : ""];
			}
			let e = du(r, t), n = Cl(r), i = Zl(r, t);
			return n[0] = [e, n[0]], n.push([n.pop(), i]), cc(n);
		}
		case "docType": return [B([
			uu(r, t),
			" ",
			h2(!1, r.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")
		]), Yl(r, t)];
		case "comment": return [
			du(r, t),
			rc(t.originalText.slice(Gl(r), Kl(r))),
			Zl(r, t)
		];
		case "attribute": {
			if (r.value === null) return r.rawName;
			let e = gl(r.value), t = Y2(e, "\"");
			return [
				r.rawName,
				"=",
				t,
				rc(t === "\"" ? h2(!1, e, "\"", "&quot;") : h2(!1, e, "'", "&apos;")),
				t
			];
		}
		default: throw new e4(r, "HTML");
	}
}
function ed(e, t = !0) {
	if (e[0] != ":") return [null, e];
	let n = e.indexOf(":", 1);
	if (n === -1) {
		if (t) throw Error(`Unsupported format "${e}" expecting ":namespace:name"`);
		return [null, e];
	}
	return [e.slice(1, n), e.slice(n + 1)];
}
function td(e) {
	return ed(e)[1] === "ng-container";
}
function nd(e) {
	return ed(e)[1] === "ng-content";
}
function rd(e) {
	return e === null ? null : ed(e)[0];
}
function id(e, t) {
	return e ? `:${e}:${t}` : t;
}
function ad() {
	return D3 || (D3 = {}, od(w3.HTML, [
		"iframe|srcdoc",
		"*|innerHTML",
		"*|outerHTML"
	]), od(w3.STYLE, ["*|style"]), od(w3.URL, [
		"*|formAction",
		"area|href",
		"area|ping",
		"audio|src",
		"a|href",
		"a|ping",
		"blockquote|cite",
		"body|background",
		"del|cite",
		"form|action",
		"img|src",
		"input|src",
		"ins|cite",
		"q|cite",
		"source|src",
		"track|src",
		"video|poster",
		"video|src"
	]), od(w3.RESOURCE_URL, [
		"applet|code",
		"applet|codebase",
		"base|href",
		"embed|src",
		"frame|src",
		"head|profile",
		"html|manifest",
		"iframe|src",
		"link|href",
		"media|src",
		"object|codebase",
		"object|data",
		"script|src"
	])), D3;
}
function od(e, t) {
	for (let n of t) D3[n.toLowerCase()] = e;
}
function sd(e) {
	switch (e) {
		case "width":
		case "height":
		case "minWidth":
		case "minHeight":
		case "maxWidth":
		case "maxHeight":
		case "left":
		case "top":
		case "bottom":
		case "right":
		case "fontSize":
		case "outlineWidth":
		case "outlineOffset":
		case "paddingTop":
		case "paddingLeft":
		case "paddingBottom":
		case "paddingRight":
		case "marginTop":
		case "marginLeft":
		case "marginBottom":
		case "marginRight":
		case "borderRadius":
		case "borderWidth":
		case "borderTopWidth":
		case "borderLeftWidth":
		case "borderRightWidth":
		case "borderBottomWidth":
		case "textIndent": return !0;
		default: return !1;
	}
}
function cd(e) {
	return R3 || (L3 = new Q({ canSelfClose: !0 }), R3 = Object.assign(Object.create(null), {
		base: new Q({ isVoid: !0 }),
		meta: new Q({ isVoid: !0 }),
		area: new Q({ isVoid: !0 }),
		embed: new Q({ isVoid: !0 }),
		link: new Q({ isVoid: !0 }),
		img: new Q({ isVoid: !0 }),
		input: new Q({ isVoid: !0 }),
		param: new Q({ isVoid: !0 }),
		hr: new Q({ isVoid: !0 }),
		br: new Q({ isVoid: !0 }),
		source: new Q({ isVoid: !0 }),
		track: new Q({ isVoid: !0 }),
		wbr: new Q({ isVoid: !0 }),
		p: new Q({
			closedByChildren: /* @__PURE__ */ "address.article.aside.blockquote.div.dl.fieldset.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.main.nav.ol.p.pre.section.table.ul".split("."),
			closedByParent: !0
		}),
		thead: new Q({ closedByChildren: ["tbody", "tfoot"] }),
		tbody: new Q({
			closedByChildren: ["tbody", "tfoot"],
			closedByParent: !0
		}),
		tfoot: new Q({
			closedByChildren: ["tbody"],
			closedByParent: !0
		}),
		tr: new Q({
			closedByChildren: ["tr"],
			closedByParent: !0
		}),
		td: new Q({
			closedByChildren: ["td", "th"],
			closedByParent: !0
		}),
		th: new Q({
			closedByChildren: ["td", "th"],
			closedByParent: !0
		}),
		col: new Q({ isVoid: !0 }),
		svg: new Q({ implicitNamespacePrefix: "svg" }),
		foreignObject: new Q({
			implicitNamespacePrefix: "svg",
			preventNamespaceInheritance: !0
		}),
		math: new Q({ implicitNamespacePrefix: "math" }),
		li: new Q({
			closedByChildren: ["li"],
			closedByParent: !0
		}),
		dt: new Q({ closedByChildren: ["dt", "dd"] }),
		dd: new Q({
			closedByChildren: ["dt", "dd"],
			closedByParent: !0
		}),
		rb: new Q({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rt: new Q({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rtc: new Q({
			closedByChildren: [
				"rb",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		rp: new Q({
			closedByChildren: [
				"rb",
				"rt",
				"rtc",
				"rp"
			],
			closedByParent: !0
		}),
		optgroup: new Q({
			closedByChildren: ["optgroup"],
			closedByParent: !0
		}),
		option: new Q({
			closedByChildren: ["option", "optgroup"],
			closedByParent: !0
		}),
		pre: new Q({ ignoreFirstLf: !0 }),
		listing: new Q({ ignoreFirstLf: !0 }),
		style: new Q({ contentType: E3.RAW_TEXT }),
		script: new Q({ contentType: E3.RAW_TEXT }),
		title: new Q({ contentType: {
			default: E3.ESCAPABLE_RAW_TEXT,
			svg: E3.PARSABLE_DATA
		} }),
		textarea: new Q({
			contentType: E3.ESCAPABLE_RAW_TEXT,
			ignoreFirstLf: !0
		})
	}), new I3().allKnownElementNames().forEach((e) => {
		!R3[e] && rd(e) === null && (R3[e] = new Q({ canSelfClose: !1 }));
	})), R3[e] ?? L3;
}
function ld(e, t, n = null) {
	let r = [], i = e.visit ? (t) => e.visit(t, n) || t.visit(e, n) : (t) => t.visit(e, n);
	return t.forEach((e) => {
		let t = i(e);
		t && r.push(t);
	}), r;
}
function ud(e, t) {
	if (t != null && !(Array.isArray(t) && t.length == 2)) throw Error(`Expected '${e}' to be an array, [start, end].`);
	if (t != null) {
		let e = t[0], n = t[1];
		$3.forEach((t) => {
			if (t.test(e) || t.test(n)) throw Error(`['${e}', '${n}'] contains unusable interpolation symbol.`);
		});
	}
}
function dd(e, t, n, r = {}) {
	let i = new o6(new c3(e, t), n, r);
	return i.tokenize(), new n6(Td(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
function fd(e) {
	return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function pd(e) {
	return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function md(e, t) {
	return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
function hd(e) {
	return !Nu(e) || e === 0;
}
function gd(e) {
	return Nu(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function _d(e) {
	return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function vd(e) {
	return e === 59 || e === 0 || !Iu(e);
}
function yd(e) {
	return e === 59 || e === 0 || !Fu(e);
}
function bd(e) {
	return e !== 125;
}
function xd(e, t) {
	return Sd(e) === Sd(t);
}
function Sd(e) {
	return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function Cd(e) {
	return Fu(e) || Pu(e) || e === 95;
}
function wd(e) {
	return e !== 59 && hd(e);
}
function Td(e) {
	let t = [], n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		n && n.type === 5 && i.type === 5 || n && n.type === 16 && i.type === 16 ? (n.parts[0] += i.parts[0], n.sourceSpan.end = i.sourceSpan.end) : (n = i, t.push(n));
	}
	return t;
}
function Ed(e, t) {
	return e.length > 0 && e[e.length - 1] === t;
}
function Dd(e, t) {
	return Q3[t] === void 0 ? /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e : Q3[t] || e;
}
function Od(e, t = {}) {
	let { canSelfClose: n = !1, allowHtmComponentClosingTags: r = !1, isTagNameCaseSensitive: i = !1, getTagContentType: a, tokenizeAngularBlocks: o = !1, tokenizeAngularLetDeclaration: s = !1 } = t;
	return g6().parse(e, "angular-html-parser", {
		tokenizeExpansionForms: o,
		interpolationConfig: void 0,
		canSelfClose: n,
		allowHtmComponentClosingTags: r,
		tokenizeBlocks: o,
		tokenizeLet: s
	}, i, a);
}
function kd(e, t) {
	let n = /* @__PURE__ */ SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
	return Object.assign(n, t);
}
function Ad(e) {
	let t = e.slice(0, v6);
	if (t !== "---" && t !== "+++") return;
	let n = e.indexOf("\n", v6);
	if (n === -1) return;
	let r = e.slice(v6, n).trim(), i = e.indexOf(`
${t}`, n), a = r;
	if (a ||= t === "+++" ? "toml" : "yaml", i === -1 && t === "---" && a === "yaml" && (i = e.indexOf("\n...", n)), i === -1) return;
	let o = i + 1 + v6, s = e.charAt(o + 1);
	if (!/\s?/u.test(s)) return;
	let c = e.slice(0, o);
	return {
		type: "front-matter",
		language: a,
		explicitLanguage: r,
		value: e.slice(n + 1, i),
		startDelimiter: t,
		endDelimiter: c.slice(-v6),
		raw: c
	};
}
function bee(e) {
	let t = Ad(e);
	if (!t) return { content: e };
	let { raw: n } = t;
	return {
		frontMatter: t,
		content: h2(!1, n, /[^\n]/gu, " ") + e.slice(n.length)
	};
}
function xee(e, t) {
	let n = e.map(t);
	return n.some((t, n) => t !== e[n]) ? n : e;
}
function jd(e, t) {
	if (e.value) for (let { regex: n, parse: r } of D6) {
		let i = e.value.match(n);
		if (i) return r(e, t, i);
	}
	return null;
}
function See(e, t, n) {
	let [, r, i, a] = n, o = 4 + r.length, s = e.sourceSpan.start.moveBy(o), c = s.moveBy(a.length), [l, u] = (() => {
		try {
			return [!0, t(a, s).children];
		} catch {
			return [!1, [{
				type: "text",
				value: a,
				sourceSpan: new Z(s, c)
			}]];
		}
	})();
	return {
		type: "ieConditionalComment",
		complete: l,
		children: u,
		condition: h2(!1, i.trim(), /\s+/gu, " "),
		sourceSpan: e.sourceSpan,
		startSourceSpan: new Z(e.sourceSpan.start, s),
		endSourceSpan: new Z(c, e.sourceSpan.end)
	};
}
function Cee(e, t, n) {
	let [, r] = n;
	return {
		type: "ieConditionalStartComment",
		condition: h2(!1, r.trim(), /\s+/gu, " "),
		sourceSpan: e.sourceSpan
	};
}
function wee(e) {
	return {
		type: "ieConditionalEndComment",
		sourceSpan: e.sourceSpan
	};
}
function Md(e) {
	if (e.type === "block") {
		if (e.name = h2(!1, e.name.toLowerCase(), /\s+/gu, " ").trim(), e.type = "angularControlFlowBlock", !l4(e.parameters)) {
			delete e.parameters;
			return;
		}
		for (let t of e.parameters) t.type = "angularControlFlowBlockParameter";
		e.parameters = {
			type: "angularControlFlowBlockParameters",
			children: e.parameters,
			sourceSpan: new Z(e.parameters[0].sourceSpan.start, N2(!1, e.parameters, -1).sourceSpan.end)
		};
	}
}
function Nd(e) {
	e.type === "letDeclaration" && (e.type = "angularLetDeclaration", e.id = e.name, e.init = {
		type: "angularLetDeclarationInitializer",
		sourceSpan: new Z(e.valueSpan.start, e.valueSpan.end),
		value: e.value
	}, delete e.name, delete e.value);
}
function Pd(e) {
	(e.type === "plural" || e.type === "select") && (e.clause = e.type, e.type = "angularIcuExpression"), e.type === "expansionCase" && (e.type = "angularIcuCase");
}
function Fd(e, t, n) {
	let { name: r, canSelfClose: i = !0, normalizeTagName: a = !1, normalizeAttributeName: o = !1, allowHtmComponentClosingTags: s = !1, isTagNameCaseSensitive: c = !1, shouldParseAsRawText: l } = t, { rootNodes: u, errors: d } = Od(e, {
		canSelfClose: i,
		allowHtmComponentClosingTags: s,
		isTagNameCaseSensitive: c,
		getTagContentType: l ? (...e) => l(...e) ? E3.RAW_TEXT : void 0 : void 0,
		tokenizeAngularBlocks: r === "angular" ? !0 : void 0,
		tokenizeAngularLetDeclaration: r === "angular" ? !0 : void 0
	});
	if (r === "vue") {
		if (u.some((e) => e.type === "docType" && e.value === "html" || e.type === "element" && e.name.toLowerCase() === "html")) return Fd(e, A6, n);
		let t, r = () => t ??= Od(e, {
			canSelfClose: i,
			allowHtmComponentClosingTags: s,
			isTagNameCaseSensitive: c
		}), a = (e) => r().rootNodes.find(({ startSourceSpan: t }) => t && t.start.offset === e.startSourceSpan.start.offset) ?? e;
		for (let [e, t] of u.entries()) {
			let { endSourceSpan: i, startSourceSpan: o } = t;
			if (i === null) d = r().errors, u[e] = a(t);
			else if (Id(t, n)) {
				let n = r().errors.find((e) => e.span.start.offset > o.start.offset && e.span.start.offset < i.end.offset);
				n && Ld(n), u[e] = a(t);
			}
		}
	}
	d.length > 0 && Ld(d[0]);
	let f = (e) => {
		let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null, n = e.nameSpan.toString(), r = t !== null && n.startsWith(`${t}:`);
		e.name = r ? n.slice(t.length + 1) : n, e.namespace = t, e.hasExplicitNamespace = r;
	}, p = (e) => {
		switch (e.type) {
			case "element":
				f(e);
				for (let t of e.attrs) f(t), t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
				break;
			case "comment":
				e.value = e.sourceSpan.toString().slice(4, -3);
				break;
			case "text":
				e.value = e.sourceSpan.toString();
				break;
		}
	}, m = (e, t) => {
		let n = e.toLowerCase();
		return t(n) ? n : e;
	}, h = (e) => {
		if (e.type === "element" && (a && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || C4(e)) && (e.name = m(e.name, (e) => k6.has(e))), o)) for (let t of e.attrs) t.namespace || (t.name = m(t.name, (t) => O6.has(e.name) && (O6.get("*").has(t) || O6.get(e.name).has(t))));
	}, g = (e) => {
		e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new Z(e.sourceSpan.start, e.endSourceSpan.end));
	}, _ = (e) => {
		if (e.type === "element") {
			let t = cd(c ? e.name : e.name.toLowerCase());
			!e.namespace || e.namespace === t.implicitNamespacePrefix || C4(e) ? e.tagDefinition = t : e.tagDefinition = cd("");
		}
	};
	return ld(new class extends Z3 {
		visitExpansionCase(e, t) {
			r === "angular" && this.visitChildren(t, (t) => {
				t(e.expression);
			});
		}
		visit(e) {
			p(e), _(e), h(e), g(e);
		}
	}(), u), u;
}
function Id(e, t) {
	var n;
	if (e.type !== "element" || e.name !== "template") return !1;
	let r = e.attrs.find((e) => e.name === "lang")?.value;
	return !r || v4(t, { language: r }) === "html";
}
function Ld(e) {
	let { msg: t, span: { start: n, end: r } } = e;
	throw _6(t, {
		loc: {
			start: {
				line: n.line + 1,
				column: n.col + 1
			},
			end: {
				line: r.line + 1,
				column: r.col + 1
			}
		},
		cause: e
	});
}
function Rd(e, t, n = {}, r = !0) {
	let { frontMatter: i, content: a } = r ? y6(e) : {
		frontMatter: null,
		content: e
	}, o = new c3(e, n.filepath), s = new s3(o, 0, 0, 0), c = {
		type: "root",
		sourceSpan: new Z(s, s.moveBy(e.length)),
		children: Fd(a, t, n)
	};
	if (i) {
		let e = new s3(o, 0, 0, 0);
		i.sourceSpan = new Z(e, e.moveBy(i.raw.length)), c.children.unshift(i);
	}
	let l = new E6(c), u = (r, i) => {
		let { offset: a } = i, o = Rd(h2(!1, e.slice(0, a), /[^\n\r]/gu, " ") + r, t, n, !1);
		o.sourceSpan = new Z(i, N2(!1, o.children, -1).sourceSpan.end);
		let s = o.children[0];
		return s.length === a ? o.children.shift() : (s.sourceSpan = new Z(s.sourceSpan.start.moveBy(a), s.sourceSpan.end), s.value = s.value.slice(a)), o;
	};
	return l.walk((e) => {
		if (e.type === "comment") {
			let t = jd(e, u);
			t && e.parent.replaceChild(e, t);
		}
		Md(e), Nd(e), Pd(e);
	}), l;
}
function Tee(e) {
	return {
		parse: (t, n) => Rd(t, e, n),
		hasPragma: yu,
		hasIgnorePragma: bu,
		astFormat: "html",
		locStart: Gl,
		locEnd: Kl
	};
}
function zd(e, t, n) {
	return a8.diff(e, t, n);
}
function Bd(e) {
	let t = e.indexOf("\r");
	return t === -1 ? "lf" : e.charAt(t + 1) === "\n" ? "crlf" : "cr";
}
function Vd(e) {
	switch (e) {
		case "cr": return "\r";
		case "crlf": return "\r\n";
		default: return "\n";
	}
}
function Hd(e, t) {
	let n;
	switch (t) {
		case "\n":
			n = /\n/gu;
			break;
		case "\r":
			n = /\r/gu;
			break;
		case "\r\n":
			n = /\r\n/gu;
			break;
		default: throw Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
	}
	let r = e.match(n);
	return r ? r.length : 0;
}
function Ud(e) {
	return n8(!1, e, /\r\n?/gu, "\n");
}
function Wd(e) {
	let t = e.length;
	for (; t > 0 && (e[t - 1] === "\r" || e[t - 1] === "\n");) t--;
	return t < e.length ? e.slice(0, t) : e;
}
function Eee(e) {
	if (typeof e == "string") return o8;
	if (Array.isArray(e)) return s8;
	if (!e) return;
	let { type: t } = e;
	if (x8.has(t)) return t;
}
function Dee(e) {
	let t = e === null ? "null" : typeof e;
	if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
	if (w8(e)) throw Error("doc is valid.");
	let n = Object.prototype.toString.call(e);
	if (n !== "[object Object]") return `Unexpected doc '${n}'.`;
	let r = T8([...x8].map((e) => `'${e}'`));
	return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
function Oee(e, t, n, r) {
	let i = [e];
	for (; i.length > 0;) {
		let e = i.pop();
		if (e === O8) {
			n(i.pop());
			continue;
		}
		n && i.push(e, O8);
		let a = w8(e);
		if (!a) throw new D8(e);
		if (t?.(e) !== !1) switch (a) {
			case s8:
			case p8: {
				let t = a === s8 ? e : e.parts;
				for (let e = t.length - 1; e >= 0; --e) i.push(t[e]);
				break;
			}
			case m8:
				i.push(e.flatContents, e.breakContents);
				break;
			case f8:
				if (r && e.expandedStates) for (let t = e.expandedStates.length, n = t - 1; n >= 0; --n) i.push(e.expandedStates[n]);
				else i.push(e.contents);
				break;
			case u8:
			case l8:
			case h8:
			case y8:
			case g8:
				i.push(e.contents);
				break;
			case o8:
			case c8:
			case d8:
			case _8:
			case v8:
			case b8: break;
			default: throw new D8(e);
		}
	}
}
function Gd(e, t) {
	if (typeof e == "string") return t(e);
	let n = /* @__PURE__ */ new Map();
	return r(e);
	function r(e) {
		if (n.has(e)) return n.get(e);
		let t = i(e);
		return n.set(e, t), t;
	}
	function i(e) {
		switch (w8(e)) {
			case s8: return t(e.map(r));
			case p8: return t({
				...e,
				parts: e.parts.map(r)
			});
			case m8: return t({
				...e,
				breakContents: r(e.breakContents),
				flatContents: r(e.flatContents)
			});
			case f8: {
				let { expandedStates: n, contents: i } = e;
				return n ? (n = n.map(r), i = n[0]) : i = r(i), t({
					...e,
					contents: i,
					expandedStates: n
				});
			}
			case u8:
			case l8:
			case h8:
			case y8:
			case g8: return t({
				...e,
				contents: r(e.contents)
			});
			case o8:
			case c8:
			case d8:
			case _8:
			case v8:
			case b8: return t(e);
			default: throw new D8(e);
		}
	}
}
function Kd(e, t, n) {
	let r = n, i = !1;
	function a(e) {
		if (i) return !1;
		let n = t(e);
		n !== void 0 && (i = !0, r = n);
	}
	return k8(e, a), r;
}
function qd(e) {
	if (e.type === f8 && e.break || e.type === v8 && e.hard || e.type === b8) return !0;
}
function kee(e) {
	return Kd(e, qd, !1);
}
function Jd(e) {
	if (e.length > 0) {
		let t = C8(!1, e, -1);
		!t.expandedStates && !t.break && (t.break = "propagated");
	}
	return null;
}
function Yd(e) {
	let t = /* @__PURE__ */ new Set(), n = [];
	function r(e) {
		if (e.type === b8 && Jd(n), e.type === f8) {
			if (n.push(e), t.has(e)) return !1;
			t.add(e);
		}
	}
	function i(e) {
		e.type === f8 && n.pop().break && Jd(n);
	}
	k8(e, r, i, !0);
}
function Xd(e) {
	return e.type === v8 && !e.hard ? e.soft ? "" : " " : e.type === m8 ? e.flatContents : e;
}
function Zd(e) {
	return Gd(e, Xd);
}
function Qd(e) {
	for (e = [...e]; e.length >= 2 && C8(!1, e, -2).type === v8 && C8(!1, e, -1).type === b8;) e.length -= 2;
	if (e.length > 0) {
		let t = $d(C8(!1, e, -1));
		e[e.length - 1] = t;
	}
	return e;
}
function $d(e) {
	switch (w8(e)) {
		case l8:
		case h8:
		case f8:
		case g8:
		case y8: {
			let t = $d(e.contents);
			return {
				...e,
				contents: t
			};
		}
		case m8: return {
			...e,
			breakContents: $d(e.breakContents),
			flatContents: $d(e.flatContents)
		};
		case p8: return {
			...e,
			parts: Qd(e.parts)
		};
		case s8: return Qd(e);
		case o8: return Wd(e);
		case u8:
		case c8:
		case d8:
		case _8:
		case v8:
		case b8: break;
		default: throw new D8(e);
	}
	return e;
}
function ef(e) {
	return $d(nf(e));
}
function tf(e) {
	switch (w8(e)) {
		case p8:
			if (e.parts.every((e) => e === "")) return "";
			break;
		case f8:
			if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
			if (e.contents.type === f8 && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
			break;
		case u8:
		case l8:
		case h8:
		case g8:
			if (!e.contents) return "";
			break;
		case m8:
			if (!e.flatContents && !e.breakContents) return "";
			break;
		case s8: {
			let t = [];
			for (let n of e) {
				if (!n) continue;
				let [e, ...r] = Array.isArray(n) ? n : [n];
				typeof e == "string" && typeof C8(!1, t, -1) == "string" ? t[t.length - 1] += e : t.push(e), t.push(...r);
			}
			return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
		}
		case o8:
		case c8:
		case d8:
		case _8:
		case v8:
		case y8:
		case b8: break;
		default: throw new D8(e);
	}
	return e;
}
function nf(e) {
	return Gd(e, (e) => tf(e));
}
function rf(e, t = H8) {
	return Gd(e, (e) => typeof e == "string" ? yf(t, e.split("\n")) : e);
}
function af(e) {
	if (e.type === v8) return !0;
}
function of(e) {
	return Kd(e, af, !1);
}
function sf(e, t) {
	return e.type === y8 ? {
		...e,
		contents: t(e.contents)
	} : t(e);
}
function cf(e) {
	return j8(e), {
		type: l8,
		contents: e
	};
}
function lf(e, t) {
	return j8(t), {
		type: u8,
		contents: t,
		n: e
	};
}
function uf(e, t = {}) {
	return j8(e), M8(t.expandedStates, !0), {
		type: f8,
		id: t.id,
		contents: e,
		break: !!t.shouldBreak,
		expandedStates: t.expandedStates
	};
}
function df(e) {
	return lf(-Infinity, e);
}
function ff(e) {
	return lf({ type: "root" }, e);
}
function pf(e) {
	return lf(-1, e);
}
function mf(e, t) {
	return uf(e[0], {
		...t,
		expandedStates: e
	});
}
function hf(e) {
	return N8(e), {
		type: p8,
		parts: e
	};
}
function gf(e, t = "", n = {}) {
	return j8(e), t !== "" && j8(t), {
		type: m8,
		breakContents: e,
		flatContents: t,
		groupId: n.groupId
	};
}
function _f(e, t) {
	return j8(e), {
		type: h8,
		contents: e,
		groupId: t.groupId,
		negate: t.negate
	};
}
function vf(e) {
	return j8(e), {
		type: g8,
		contents: e
	};
}
function yf(e, t) {
	j8(e), M8(t);
	let n = [];
	for (let r = 0; r < t.length; r++) r !== 0 && n.push(e), n.push(t[r]);
	return n;
}
function bf(e, t, n) {
	j8(e);
	let r = e;
	if (t > 0) {
		for (let e = 0; e < Math.floor(t / n); ++e) r = cf(r);
		r = lf(t % n, r), r = lf(-Infinity, r);
	}
	return r;
}
function xf(e, t) {
	return j8(t), e ? {
		type: y8,
		label: e,
		contents: t
	} : t;
}
function Sf(e) {
	var t;
	if (!e) return "";
	if (Array.isArray(e)) {
		let t = [];
		for (let n of e) if (Array.isArray(n)) t.push(...Sf(n));
		else {
			let e = Sf(n);
			e !== "" && t.push(e);
		}
		return t;
	}
	return e.type === m8 ? {
		...e,
		breakContents: Sf(e.breakContents),
		flatContents: Sf(e.flatContents)
	} : e.type === f8 ? {
		...e,
		contents: Sf(e.contents),
		expandedStates: e.expandedStates?.map(Sf)
	} : e.type === p8 ? {
		type: "fill",
		parts: e.parts.map(Sf)
	} : e.contents ? {
		...e,
		contents: Sf(e.contents)
	} : e;
}
function Cf(e) {
	let t = Object.create(null), n = /* @__PURE__ */ new Set();
	return r(Sf(e));
	function r(e, t, n) {
		var a, o;
		if (typeof e == "string") return JSON.stringify(e);
		if (Array.isArray(e)) {
			let t = e.map(r).filter(Boolean);
			return t.length === 1 ? t[0] : `[${t.join(", ")}]`;
		}
		if (e.type === v8) {
			let r = n?.[t + 1]?.type === b8;
			return e.literal ? r ? "literalline" : "literallineWithoutBreakParent" : e.hard ? r ? "hardline" : "hardlineWithoutBreakParent" : e.soft ? "softline" : "line";
		}
		if (e.type === b8) return n?.[t - 1]?.type === v8 && n[t - 1].hard ? void 0 : "breakParent";
		if (e.type === d8) return "trim";
		if (e.type === l8) return "indent(" + r(e.contents) + ")";
		if (e.type === u8) return e.n === -Infinity ? "dedentToRoot(" + r(e.contents) + ")" : e.n < 0 ? "dedent(" + r(e.contents) + ")" : e.n.type === "root" ? "markAsRoot(" + r(e.contents) + ")" : "align(" + JSON.stringify(e.n) + ", " + r(e.contents) + ")";
		if (e.type === m8) return "ifBreak(" + r(e.breakContents) + (e.flatContents ? ", " + r(e.flatContents) : "") + (e.groupId ? (e.flatContents ? "" : ", \"\"") + `, { groupId: ${i(e.groupId)} }` : "") + ")";
		if (e.type === h8) {
			let t = [];
			e.negate && t.push("negate: true"), e.groupId && t.push(`groupId: ${i(e.groupId)}`);
			let n = t.length > 0 ? `, { ${t.join(", ")} }` : "";
			return `indentIfBreak(${r(e.contents)}${n})`;
		}
		if (e.type === f8) {
			let t = [];
			e.break && e.break !== "propagated" && t.push("shouldBreak: true"), e.id && t.push(`id: ${i(e.id)}`);
			let n = t.length > 0 ? `, { ${t.join(", ")} }` : "";
			return e.expandedStates ? `conditionalGroup([${e.expandedStates.map((e) => r(e)).join(",")}]${n})` : `group(${r(e.contents)}${n})`;
		}
		if (e.type === p8) return `fill([${e.parts.map((e) => r(e)).join(", ")}])`;
		if (e.type === g8) return "lineSuffix(" + r(e.contents) + ")";
		if (e.type === _8) return "lineSuffixBoundary";
		if (e.type === y8) return `label(${JSON.stringify(e.label)}, ${r(e.contents)})`;
		if (e.type === c8) return "cursor";
		throw Error("Unknown doc type " + e.type);
	}
	function i(e) {
		if (typeof e != "symbol") return JSON.stringify(String(e));
		if (e in t) return t[e];
		let r = e.description || "symbol";
		for (let i = 0;; i++) {
			let a = r + (i > 0 ? ` #${i}` : "");
			if (!n.has(a)) return n.add(a), t[e] = `Symbol.for(${JSON.stringify(a)})`;
		}
	}
}
function wf(e) {
	return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Tf(e) {
	return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
function Ef(e) {
	if (!e) return 0;
	if (!K8.test(e)) return e.length;
	e = e.replace(W8(), "  ");
	let t = 0;
	for (let n of e) {
		let e = n.codePointAt(0);
		e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (t += G8(e) ? 1 : 2);
	}
	return t;
}
function Df() {
	return {
		value: "",
		length: 0,
		queue: []
	};
}
function Of(e, t) {
	return Af(e, { type: "indent" }, t);
}
function kf(e, t, n) {
	return t === -Infinity ? e.root || Df() : t < 0 ? Af(e, { type: "dedent" }, n) : t ? t.type === "root" ? {
		...e,
		root: e
	} : Af(e, {
		type: typeof t == "string" ? "stringAlign" : "numberAlign",
		n: t
	}, n) : e;
}
function Af(e, t, n) {
	let r = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], i = "", a = 0, o = 0, s = 0;
	for (let e of r) switch (e.type) {
		case "indent":
			u(), n.useTabs ? c(1) : l(n.tabWidth);
			break;
		case "stringAlign":
			u(), i += e.n, a += e.n.length;
			break;
		case "numberAlign":
			o += 1, s += e.n;
			break;
		default: throw Error(`Unexpected type '${e.type}'`);
	}
	return f(), {
		...e,
		value: i,
		length: a,
		queue: r
	};
	function c(e) {
		i += "	".repeat(e), a += n.tabWidth * e;
	}
	function l(e) {
		i += " ".repeat(e), a += e;
	}
	function u() {
		n.useTabs ? d() : f();
	}
	function d() {
		o > 0 && c(o), p();
	}
	function f() {
		s > 0 && l(s), p();
	}
	function p() {
		o = 0, s = 0;
	}
}
function jf(e) {
	let t = 0, n = 0, r = e.length;
	e: for (; r--;) {
		let i = e[r];
		if (i === X8) {
			n++;
			continue;
		}
		for (let n = i.length - 1; n >= 0; n--) {
			let a = i[n];
			if (a === " " || a === "	") t++;
			else {
				e[r] = i.slice(0, n + 1);
				break e;
			}
		}
	}
	if (t > 0 || n > 0) for (e.length = r + 1; n-- > 0;) e.push(X8);
	return t;
}
function Mf(e, t, n, r, i, a) {
	if (n === Infinity) return !0;
	let o = t.length, s = [e], c = [];
	for (; n >= 0;) {
		if (s.length === 0) {
			if (o === 0) return !0;
			s.push(t[--o]);
			continue;
		}
		let { mode: e, doc: l } = s.pop(), u = w8(l);
		switch (u) {
			case o8:
				c.push(l), n -= q8(l);
				break;
			case s8:
			case p8: {
				let t = u === s8 ? l : l.parts, n = l[Z8] ?? 0;
				for (let r = t.length - 1; r >= n; r--) s.push({
					mode: e,
					doc: t[r]
				});
				break;
			}
			case l8:
			case u8:
			case h8:
			case y8:
				s.push({
					mode: e,
					doc: l.contents
				});
				break;
			case d8:
				n += jf(c);
				break;
			case f8: {
				if (a && l.break) return !1;
				let t = l.break ? J8 : e, n = l.expandedStates && t === J8 ? C8(!1, l.expandedStates, -1) : l.contents;
				s.push({
					mode: t,
					doc: n
				});
				break;
			}
			case m8: {
				let t = (l.groupId ? i[l.groupId] || Y8 : e) === J8 ? l.breakContents : l.flatContents;
				t && s.push({
					mode: e,
					doc: t
				});
				break;
			}
			case v8:
				if (e === J8 || l.hard) return !0;
				l.soft || (c.push(" "), n--);
				break;
			case g8:
				r = !0;
				break;
			case _8:
				if (r) return !1;
				break;
		}
	}
	return !1;
}
function Nf(e, t) {
	let n = {}, r = t.printWidth, i = Vd(t.endOfLine), a = 0, o = [{
		ind: Df(),
		mode: J8,
		doc: e
	}], s = [], c = !1, l = [], u = 0;
	for (Yd(e); o.length > 0;) {
		let { ind: e, mode: d, doc: f } = o.pop();
		switch (w8(f)) {
			case o8: {
				let e = i === "\n" ? f : n8(!1, f, "\n", i);
				s.push(e), o.length > 0 && (a += q8(e));
				break;
			}
			case s8:
				for (let t = f.length - 1; t >= 0; t--) o.push({
					ind: e,
					mode: d,
					doc: f[t]
				});
				break;
			case c8:
				if (u >= 2) throw Error("There are too many 'cursor' in doc.");
				s.push(X8), u++;
				break;
			case l8:
				o.push({
					ind: Of(e, t),
					mode: d,
					doc: f.contents
				});
				break;
			case u8:
				o.push({
					ind: kf(e, f.n, t),
					mode: d,
					doc: f.contents
				});
				break;
			case d8:
				a -= jf(s);
				break;
			case f8:
				switch (d) {
					case Y8: if (!c) {
						o.push({
							ind: e,
							mode: f.break ? J8 : Y8,
							doc: f.contents
						});
						break;
					}
					case J8: {
						c = !1;
						let t = {
							ind: e,
							mode: Y8,
							doc: f.contents
						}, i = r - a, s = l.length > 0;
						if (!f.break && Mf(t, o, i, s, n)) o.push(t);
						else if (f.expandedStates) {
							let t = C8(!1, f.expandedStates, -1);
							if (f.break) {
								o.push({
									ind: e,
									mode: J8,
									doc: t
								});
								break;
							} else for (let r = 1; r < f.expandedStates.length + 1; r++) if (r >= f.expandedStates.length) {
								o.push({
									ind: e,
									mode: J8,
									doc: t
								});
								break;
							} else {
								let t = {
									ind: e,
									mode: Y8,
									doc: f.expandedStates[r]
								};
								if (Mf(t, o, i, s, n)) {
									o.push(t);
									break;
								}
							}
						} else o.push({
							ind: e,
							mode: J8,
							doc: f.contents
						});
						break;
					}
				}
				f.id && (n[f.id] = C8(!1, o, -1).mode);
				break;
			case p8: {
				let t = r - a, i = f[Z8] ?? 0, { parts: s } = f, c = s.length - i;
				if (c === 0) break;
				let u = s[i + 0], p = s[i + 1], m = {
					ind: e,
					mode: Y8,
					doc: u
				}, h = {
					ind: e,
					mode: J8,
					doc: u
				}, g = Mf(m, [], t, l.length > 0, n, !0);
				if (c === 1) {
					g ? o.push(m) : o.push(h);
					break;
				}
				let _ = {
					ind: e,
					mode: Y8,
					doc: p
				}, v = {
					ind: e,
					mode: J8,
					doc: p
				};
				if (c === 2) {
					g ? o.push(_, m) : o.push(v, h);
					break;
				}
				let y = s[i + 2], b = {
					ind: e,
					mode: d,
					doc: {
						...f,
						[Z8]: i + 2
					}
				};
				Mf({
					ind: e,
					mode: Y8,
					doc: [
						u,
						p,
						y
					]
				}, [], t, l.length > 0, n, !0) ? o.push(b, _, m) : g ? o.push(b, v, m) : o.push(b, v, h);
				break;
			}
			case m8:
			case h8: {
				let t = f.groupId ? n[f.groupId] : d;
				if (t === J8) {
					let t = f.type === m8 ? f.breakContents : f.negate ? f.contents : cf(f.contents);
					t && o.push({
						ind: e,
						mode: d,
						doc: t
					});
				}
				if (t === Y8) {
					let t = f.type === m8 ? f.flatContents : f.negate ? cf(f.contents) : f.contents;
					t && o.push({
						ind: e,
						mode: d,
						doc: t
					});
				}
				break;
			}
			case g8:
				l.push({
					ind: e,
					mode: d,
					doc: f.contents
				});
				break;
			case _8:
				l.length > 0 && o.push({
					ind: e,
					mode: d,
					doc: L8
				});
				break;
			case v8:
				switch (d) {
					case Y8: if (f.hard) c = !0;
					else {
						f.soft || (s.push(" "), a += 1);
						break;
					}
					case J8:
						if (l.length > 0) {
							o.push({
								ind: e,
								mode: d,
								doc: f
							}, ...l.reverse()), l.length = 0;
							break;
						}
						f.literal ? e.root ? (s.push(i, e.root.value), a = e.root.length) : (s.push(i), a = 0) : (a -= jf(s), s.push(i + e.value), a = e.length);
						break;
				}
				break;
			case y8:
				o.push({
					ind: e,
					mode: d,
					doc: f.contents
				});
				break;
			case b8: break;
			default: throw new D8(f);
		}
		o.length === 0 && l.length > 0 && (o.push(...l.reverse()), l.length = 0);
	}
	let d = s.indexOf(X8);
	if (d !== -1) {
		let e = s.indexOf(X8, d + 1);
		if (e === -1) return { formatted: s.filter((e) => e !== X8).join("") };
		let t = s.slice(0, d).join(""), n = s.slice(d + 1, e).join(""), r = s.slice(e + 1).join("");
		return {
			formatted: t + n + r,
			cursorNodeStart: t.length,
			cursorNodeText: n
		};
	}
	return { formatted: s.join("") };
}
function Pf(e, t, n = 0) {
	let r = 0;
	for (let i = n; i < e.length; ++i) e[i] === "	" ? r = r + t - r % t : r++;
	return r;
}
function Ff(e) {
	return typeof e == "object" && !!e;
}
function* If(e, t) {
	let { getVisitorKeys: n, filter: r = () => !0 } = t, i = (e) => t5(e) && r(e);
	for (let t of n(e)) {
		let n = e[t];
		if (Array.isArray(n)) for (let e of n) i(e) && (yield e);
		else i(n) && (yield n);
	}
}
function* Lf(e, t) {
	let n = [e];
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		for (let e of If(r, t)) yield e, n.push(e);
	}
}
function Rf(e, t) {
	return If(e, t).next().done;
}
function zf(e) {
	return (t, n, r) => {
		let i = !!(r != null && r.backwards);
		if (n === !1) return !1;
		let { length: a } = t, o = n;
		for (; o >= 0 && o < a;) {
			let n = t.charAt(o);
			if (e instanceof RegExp) {
				if (!e.test(n)) return o;
			} else if (!e.includes(n)) return o;
			i ? o-- : o++;
		}
		return o === -1 || o === a ? o : !1;
	};
}
function Bf(e, t, n) {
	let r = !!(n != null && n.backwards);
	if (t === !1) return !1;
	let i = e.charAt(t);
	if (r) {
		if (e.charAt(t - 1) === "\r" && i === "\n") return t - 2;
		if (i === "\n" || i === "\r" || i === "\u2028" || i === "\u2029") return t - 1;
	} else {
		if (i === "\r" && e.charAt(t + 1) === "\n") return t + 2;
		if (i === "\n" || i === "\r" || i === "\u2028" || i === "\u2029") return t + 1;
	}
	return t;
}
function Vf(e, t, n = {}) {
	let r = n5(e, n.backwards ? t - 1 : t, n);
	return r !== a5(e, r, n);
}
function Hf(e) {
	return Array.isArray(e) && e.length > 0;
}
function Uf(e) {
	return e ? (t) => e(t, c5) : l5;
}
function Wf(e) {
	let t = e.type || e.kind || "(unknown type)", n = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
	return n.length > 20 && (n = n.slice(0, 19) + "…"), t + (n ? " " + n : "");
}
function Gf(e, t) {
	(e.comments ??= []).push(t), t.printed = !1, t.nodeDescription = Wf(e);
}
function Kf(e, t) {
	t.leading = !0, t.trailing = !1, Gf(e, t);
}
function qf(e, t, n) {
	t.leading = !1, t.trailing = !1, n && (t.marker = n), Gf(e, t);
}
function Jf(e, t) {
	t.leading = !1, t.trailing = !0, Gf(e, t);
}
function Yf(e, t) {
	if (d5.has(e)) return d5.get(e);
	let { printer: { getCommentChildNodes: n, canAttachComment: r, getVisitorKeys: i }, locStart: a, locEnd: o } = t;
	if (!r) return [];
	let s = (n?.(e, t) ?? [...If(e, { getVisitorKeys: u5(i) })]).flatMap((e) => r(e) ? [e] : Yf(e, t));
	return s.sort((e, t) => a(e) - a(t) || o(e) - o(t)), d5.set(e, s), s;
}
function Xf(e, t, n, r) {
	let { locStart: i, locEnd: a } = n, o = i(t), s = a(t), c = Yf(e, n), l, u, d = 0, f = c.length;
	for (; d < f;) {
		let e = d + f >> 1, r = c[e], p = i(r), m = a(r);
		if (p <= o && s <= m) return Xf(r, t, n, r);
		if (m <= o) {
			l = r, d = e + 1;
			continue;
		}
		if (s <= p) {
			u = r, f = e;
			continue;
		}
		throw Error("Comment location overlaps with node location");
	}
	if (r?.type === "TemplateLiteral") {
		let { quasis: e } = r, i = tp(e, t, n);
		l && tp(e, l, n) !== i && (l = null), u && tp(e, u, n) !== i && (u = null);
	}
	return {
		enclosingNode: r,
		precedingNode: l,
		followingNode: u
	};
}
function Zf(e, t) {
	let { comments: n } = e;
	if (delete e.comments, !s5(n) || !t.printer.canAttachComment) return;
	let r = [], { printer: { experimentalFeatures: { avoidAstMutation: i = !1 } = {}, handleComments: a = {} }, originalText: o } = t, { ownLine: s = f5, endOfLine: c = f5, remaining: l = f5 } = a, u = n.map((r, i) => ({
		...Xf(e, r, t),
		comment: r,
		text: o,
		options: t,
		ast: e,
		isLastComment: n.length - 1 === i
	}));
	for (let [e, t] of u.entries()) {
		let { comment: n, precedingNode: a, enclosingNode: o, followingNode: d, text: f, options: p, ast: m, isLastComment: h } = t, g;
		if (i ? g = [t] : (n.enclosingNode = o, n.precedingNode = a, n.followingNode = d, g = [
			n,
			f,
			p,
			m,
			h
		]), Qf(f, p, u, e)) n.placement = "ownLine", s(...g) || (d ? Kf(d, n) : a ? Jf(a, n) : qf(o || m, n));
		else if ($f(f, p, u, e)) n.placement = "endOfLine", c(...g) || (a ? Jf(a, n) : d ? Kf(d, n) : qf(o || m, n));
		else if (n.placement = "remaining", !l(...g)) if (a && d) {
			let e = r.length;
			e > 0 && r[e - 1].followingNode !== d && ep(r, p), r.push(t);
		} else a ? Jf(a, n) : d ? Kf(d, n) : qf(o || m, n);
	}
	if (ep(r, t), !i) for (let e of n) delete e.precedingNode, delete e.enclosingNode, delete e.followingNode;
}
function Qf(e, t, n, r) {
	let { comment: i, precedingNode: a } = n[r], { locStart: o, locEnd: s } = t, c = o(i);
	if (a) for (let t = r - 1; t >= 0; t--) {
		let { comment: r, precedingNode: i } = n[t];
		if (i !== a || !p5(e.slice(s(r), c))) break;
		c = o(r);
	}
	return o5(e, c, { backwards: !0 });
}
function $f(e, t, n, r) {
	let { comment: i, followingNode: a } = n[r], { locStart: o, locEnd: s } = t, c = s(i);
	if (a) for (let t = r + 1; t < n.length; t++) {
		let { comment: r, followingNode: i } = n[t];
		if (i !== a || !p5(e.slice(c, o(r)))) break;
		c = s(r);
	}
	return o5(e, c);
}
function ep(e, t) {
	var n, r;
	let i = e.length;
	if (i === 0) return;
	let { precedingNode: a, followingNode: o } = e[0], s = t.locStart(o), c;
	for (c = i; c > 0; --c) {
		let { comment: r, precedingNode: i, followingNode: l } = e[c - 1];
		e5.strictEqual(i, a), e5.strictEqual(l, o);
		let u = t.originalText.slice(t.locEnd(r), s);
		if ((n = t.printer).isGap?.call(n, u, t) ?? /^[\s(]*$/u.test(u)) s = t.locStart(r);
		else break;
	}
	for (let [t, { comment: n }] of e.entries()) t < c ? Jf(a, n) : Kf(o, n);
	for (let e of [a, o]) e.comments && e.comments.length > 1 && e.comments.sort((e, n) => t.locStart(e) - t.locStart(n));
	e.length = 0;
}
function tp(e, t, n) {
	let r = n.locStart(t) - 1;
	for (let t = 1; t < e.length; ++t) if (r < n.locStart(e[t])) return t - 1;
	return 0;
}
function np(e, t) {
	let n = t - 1;
	n = n5(e, n, { backwards: !0 }), n = a5(e, n, { backwards: !0 }), n = n5(e, n, { backwards: !0 });
	let r = a5(e, n, { backwards: !0 });
	return n !== r;
}
function rp(e, t) {
	let n = e.node;
	return n.printed = !0, t.printer.printComment(e, t);
}
function ip(e, t) {
	var n;
	let r = e.node, i = [rp(e, t)], { printer: a, originalText: o, locStart: s, locEnd: c } = t;
	if (a.isBlockComment?.call(a, r)) {
		let e = o5(o, c(r)) ? o5(o, s(r), { backwards: !0 }) ? V8 : z8 : " ";
		i.push(e);
	} else i.push(V8);
	let l = a5(o, n5(o, c(r)));
	return l !== !1 && o5(o, l) && i.push(V8), i;
}
function ap(e, t, n) {
	var r;
	let i = e.node, a = rp(e, t), { printer: o, originalText: s, locStart: c } = t, l = o.isBlockComment?.call(o, i);
	return n != null && n.hasLineSuffix && !(n != null && n.isBlock) || o5(s, c(i), { backwards: !0 }) ? {
		doc: vf([
			V8,
			m5(s, c(i)) ? V8 : "",
			a
		]),
		isBlock: l,
		hasLineSuffix: !0
	} : !l || n != null && n.hasLineSuffix ? {
		doc: [vf([" ", a]), F8],
		isBlock: l,
		hasLineSuffix: !0
	} : {
		doc: [" ", a],
		isBlock: l,
		hasLineSuffix: !1
	};
}
function op(e, t) {
	let n = e.node;
	if (!n) return {};
	let r = t[Symbol.for("printedComments")];
	if ((n.comments || []).filter((e) => !r.has(e)).length === 0) return {
		leading: "",
		trailing: ""
	};
	let i = [], a = [], o;
	return e.each(() => {
		let n = e.node;
		if (r != null && r.has(n)) return;
		let { leading: s, trailing: c } = n;
		s ? i.push(ip(e, t)) : c && (o = ap(e, t, o), a.push(o.doc));
	}, "comments"), {
		leading: i,
		trailing: a
	};
}
function sp(e, t, n) {
	let { leading: r, trailing: i } = op(e, n);
	return !r && !i ? t : sf(t, (e) => [
		r,
		e,
		i
	]);
}
function cp(e) {
	let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: n } = e;
	for (let e of t) {
		if (!e.printed && !n.has(e)) throw Error("Comment \"" + e.value.trim() + "\" was not printed. Please report this error!");
		delete e.printed;
	}
}
function lp(e) {
	return () => {};
}
function up({ plugins: e = [], showDeprecated: t = !1 } = {}) {
	let n = e.flatMap((e) => e.languages ?? []), r = [];
	for (let i of fp(Object.assign({}, ...e.map(({ options: e }) => e), v5))) !t && i.deprecated || (Array.isArray(i.choices) && (t || (i.choices = i.choices.filter((e) => !e.deprecated)), i.name === "parser" && (i.choices = [...i.choices, ...dp(i.choices, n, e)])), i.pluginDefaults = Object.fromEntries(e.filter((e) => {
		var t;
		return e.defaultOptions?.[i.name] !== void 0;
	}).map((e) => [e.name, e.defaultOptions[i.name]])), r.push(i));
	return {
		languages: n,
		options: r
	};
}
function* dp(e, t, n) {
	let r = new Set(e.map((e) => e.value));
	for (let e of t) if (e.parsers) {
		for (let t of e.parsers) if (!r.has(t)) {
			r.add(t);
			let i = n.find((e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t)), a = e.name;
			i != null && i.name && (a += ` (plugin: ${i.name})`), yield {
				value: t,
				description: a
			};
		}
	}
}
function fp(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) {
		let e = {
			name: n,
			...r
		};
		Array.isArray(e.default) && (e.default = C8(!1, e.default, -1).value), t.push(e);
	}
	return t;
}
function pp(e) {
	if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw TypeError(`URL must be a file URL: received "${e.protocol}"`);
	return e;
}
function mp(e) {
	return e = pp(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function hp(e) {
	e = pp(e);
	let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
	return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function gp(e) {
	return b5 ? hp(e) : mp(e);
}
function _p(e, t) {
	if (!t) return;
	let n = S5(t).toLowerCase();
	return e.find(({ filenames: e }) => e?.some((e) => e.toLowerCase() === n)) ?? e.find(({ extensions: e }) => e?.some((e) => n.endsWith(e)));
}
function vp(e, t) {
	if (t) return e.find(({ name: e }) => e.toLowerCase() === t) ?? e.find(({ aliases: e }) => e?.includes(t)) ?? e.find(({ extensions: e }) => e?.includes(`.${t}`));
}
function yp(e, t) {
	if (t) {
		if (String(t).startsWith("file:")) try {
			t = x5(t);
		} catch {
			return;
		}
		if (typeof t == "string") return e.find(({ isSupported: e }) => e?.({ filepath: t }));
	}
}
function bp(e, t) {
	let n = y5(!1, e.plugins).flatMap((e) => e.languages ?? []);
	return (vp(n, t.language) ?? _p(n, t.physicalFile) ?? _p(n, t.file) ?? yp(n, t.physicalFile) ?? yp(n, t.file) ?? (t.physicalFile, void 0))?.parsers[0];
}
function xp(e, t, n, r) {
	return [
		`Invalid ${T5.red(r.key(e))} value.`,
		`Expected ${T5.blue(n)},`,
		`but received ${t === E5 ? T5.gray("nothing") : T5.red(r.value(t))}.`
	].join(" ");
}
function Sp({ text: e, list: t }, n) {
	let r = [];
	return e && r.push(`- ${T5.blue(e)}`), t && r.push([`- ${T5.blue(t.title)}:`].concat(t.values.map((e) => Sp(e, n - D5.length).replace(/^|\n/g, `$&${D5}`))).join("\n")), Cp(r, n);
}
function Cp(e, t) {
	if (e.length === 1) return e[0];
	let [n, r] = e, [i, a] = e.map((e) => e.split("\n", 1)[0].length);
	return i > t && i > a ? r : n;
}
function wp(e, t) {
	if (e === t) return 0;
	let n = e;
	e.length > t.length && (e = t, t = n);
	let r = e.length, i = t.length;
	for (; r > 0 && e.charCodeAt(~-r) === t.charCodeAt(~-i);) r--, i--;
	let a = 0;
	for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
	if (r -= a, i -= a, r === 0) return i;
	let o, s, c, l, u = 0, d = 0;
	for (; u < r;) k5[u] = e.charCodeAt(a + u), O5[u] = ++u;
	for (; d < i;) for (o = t.charCodeAt(a + d), c = d++, s = d, u = 0; u < r; u++) l = o === k5[u] ? c : c + 1, c = O5[u], s = O5[u] = c > s ? l > s ? s + 1 : l : l > c ? c + 1 : l;
	return s;
}
function Tp(e, t) {
	let n = new e(t), r = Object.create(n);
	for (let e of j5) e in t && (r[e] = Ep(t[e], n, M5.prototype[e].length));
	return r;
}
function Ep(e, t, n) {
	return typeof e == "function" ? (...r) => e(...r.slice(0, n - 1), t, ...r.slice(n - 1)) : () => e;
}
function Dp({ from: e, to: t }) {
	return {
		from: [e],
		to: t
	};
}
function Op(e, t) {
	let n = Object.create(null);
	for (let r of e) {
		let e = r[t];
		if (n[e]) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
		n[e] = r;
	}
	return n;
}
function kp(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = r[t];
		if (n.has(e)) throw Error(`Duplicate ${t} ${JSON.stringify(e)}`);
		n.set(e, r);
	}
	return n;
}
function Ap() {
	let e = Object.create(null);
	return (t) => {
		let n = JSON.stringify(t);
		return e[n] ? !0 : (e[n] = !0, !1);
	};
}
function jp(e, t) {
	let n = [], r = [];
	for (let i of e) t(i) ? n.push(i) : r.push(i);
	return [n, r];
}
function Mp(e) {
	return e === Math.floor(e);
}
function Np(e, t) {
	if (e === t) return 0;
	let n = typeof e, r = typeof t, i = [
		"undefined",
		"object",
		"boolean",
		"number",
		"string"
	];
	return n === r ? n === "string" ? e.localeCompare(t) : Number(e) - Number(t) : i.indexOf(n) - i.indexOf(r);
}
function Pp(e) {
	return (...t) => {
		let n = e(...t);
		return typeof n == "string" ? Error(n) : n;
	};
}
function Fp(e) {
	return e === void 0 ? {} : e;
}
function Ip(e) {
	if (typeof e == "string") return { text: e };
	let { text: t, list: n } = e;
	return Hp((t || n) !== void 0, "Unexpected `expected` result, there should be at least one field."), n ? {
		text: t,
		list: {
			title: n.title,
			values: n.values.map(Ip)
		}
	} : { text: t };
}
function Lp(e, t) {
	return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Rp(e, t, n = !1) {
	return e === !1 ? !1 : e === !0 ? n ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function zp(e, t) {
	return typeof e == "string" || "key" in e ? {
		from: t,
		to: e
	} : "from" in e ? {
		from: e.from,
		to: e.to
	} : {
		from: t,
		to: e.to
	};
}
function Bp(e, t) {
	return e === void 0 ? [] : Array.isArray(e) ? e.map((e) => zp(e, t)) : [zp(e, t)];
}
function Vp(e, t) {
	let n = Bp(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
	return n.length === 0 ? {
		remain: t,
		redirect: n
	} : typeof e == "object" && "remain" in e ? {
		remain: e.remain,
		redirect: n
	} : { redirect: n };
}
function Hp(e, t) {
	if (!e) throw Error(t);
}
function Up(e, t, { logger: n = !1, isCLI: r = !1, passThrough: i = !1, FlagSchema: a, descriptor: o } = {}) {
	if (r) {
		if (!a) throw Error("'FlagSchema' option is required.");
		if (!o) throw Error("'descriptor' option is required.");
	} else o = w5;
	let s = i ? Array.isArray(i) ? (e, t) => i.includes(e) ? { [e]: t } : void 0 : (e, t) => ({ [e]: t }) : (e, t, n) => {
		let { _: r, ...i } = n.schemas;
		return A5(e, t, {
			...n,
			schemas: i
		});
	}, c = new B5(Wp(t, {
		isCLI: r,
		FlagSchema: a
	}), {
		logger: n,
		unknown: s,
		descriptor: o
	}), l = n !== !1;
	l && V5 && (c._hasDeprecationWarned = V5);
	let u = c.normalize(e);
	return l && (V5 = c._hasDeprecationWarned), u;
}
function Wp(e, { isCLI: t, FlagSchema: n }) {
	let r = [];
	t && r.push(P5.create({ name: "_" }));
	for (let i of e) r.push(Gp(i, {
		isCLI: t,
		optionInfos: e,
		FlagSchema: n
	})), i.alias && t && r.push(N5.create({
		name: i.alias,
		sourceName: i.name
	}));
	return r;
}
function Gp(e, { isCLI: t, optionInfos: n, FlagSchema: r }) {
	let { name: i } = e, a = { name: i }, o, s = {};
	switch (e.type) {
		case "int":
			o = R5, t && (a.preprocess = Number);
			break;
		case "string":
			o = z5;
			break;
		case "choice":
			o = L5, a.choices = e.choices.map((t) => t != null && t.redirect ? {
				...t,
				redirect: { to: {
					key: e.name,
					value: t.redirect
				} }
			} : t);
			break;
		case "boolean":
			o = I5;
			break;
		case "flag":
			o = r, a.flags = n.flatMap((e) => [
				e.alias,
				e.description && e.name,
				e.oppositeDescription && `no-${e.name}`
			].filter(Boolean));
			break;
		case "path":
			o = z5;
			break;
		default: throw Error(`Unexpected type ${e.type}`);
	}
	if (e.exception ? a.validate = (t, n, r) => e.exception(t) || n.validate(t, r) : a.validate = (e, t, n) => e === void 0 || t.validate(e, n), e.redirect && (s.redirect = (t) => t ? { to: typeof e.redirect == "string" ? e.redirect : {
		key: e.redirect.option,
		value: e.redirect.value
	} } : void 0), e.deprecated && (s.deprecated = !0), t && !e.array) {
		let e = a.preprocess || ((e) => e);
		a.preprocess = (t, n, r) => n.preprocess(e(Array.isArray(t) ? C8(!1, t, -1) : t), r);
	}
	return e.array ? F5.create({
		...t ? { preprocess: (e) => Array.isArray(e) ? e : [e] } : {},
		...s,
		valueSchema: o.create(a)
	}) : o.create({
		...a,
		...s
	});
}
function Kp(e, t) {
	if (!t) throw Error("parserName is required.");
	let n = U5(!1, e, (e) => e.parsers && Object.prototype.hasOwnProperty.call(e.parsers, t));
	if (n) return n;
	let r = `Couldn't resolve parser "${t}".`;
	throw r += " Plugins must be explicitly added to the standalone bundle.", new g5(r);
}
function qp(e, t) {
	if (!t) throw Error("astFormat is required.");
	let n = U5(!1, e, (e) => e.printers && Object.prototype.hasOwnProperty.call(e.printers, t));
	if (n) return n;
	let r = `Couldn't find plugin for AST format "${t}".`;
	throw r += " Plugins must be explicitly added to the standalone bundle.", new g5(r);
}
function Jp({ plugins: e, parser: t }) {
	return Yp(Kp(e, t), t);
}
function Yp(e, t) {
	let n = e.parsers[t];
	return typeof n == "function" ? n() : n;
}
function Xp(e, t) {
	let n = e.printers[t];
	return typeof n == "function" ? n() : n;
}
async function Zp(e, t = {}) {
	var n;
	let r = { ...e };
	if (!r.parser) if (r.filepath) {
		if (r.parser = C5(r, { physicalFile: r.filepath }), !r.parser) throw new _5(`No parser could be inferred for file "${r.filepath}".`);
	} else throw new _5("No parser and no file path given, couldn't infer a parser.");
	let i = up({
		plugins: e.plugins,
		showDeprecated: !0
	}).options, a = {
		...W5,
		...Object.fromEntries(i.filter((e) => e.default !== void 0).map((e) => [e.name, e.default]))
	}, o = Kp(r.plugins, r.parser), s = await Yp(o, r.parser);
	r.astFormat = s.astFormat, r.locEnd = s.locEnd, r.locStart = s.locStart;
	let c = (n = o.printers) != null && n[s.astFormat] ? o : qp(r.plugins, s.astFormat);
	r.printer = await Xp(c, s.astFormat);
	let l = c.defaultOptions ? Object.fromEntries(Object.entries(c.defaultOptions).filter(([, e]) => e !== void 0)) : {}, u = {
		...a,
		...l
	};
	for (let [e, t] of Object.entries(u)) (r[e] === null || r[e] === void 0) && (r[e] = t);
	return r.parser === "json" && (r.trailingComma = "none"), H5(r, i, {
		passThrough: Object.keys(W5),
		...t
	});
}
async function Qp(e, t) {
	let n = await Jp(t), r = n.preprocess ? n.preprocess(e, t) : e;
	t.originalText = r;
	let i;
	try {
		i = await n.parse(r, t, t);
	} catch (t) {
		$p(t, e);
	}
	return {
		text: r,
		ast: i
	};
}
function $p(e, t) {
	let { loc: n } = e;
	if (n) {
		let r = (0, K5.codeFrameColumns)(t, n, { highlightCode: !0 });
		throw e.message += "\n" + r, e.codeFrame = r, e;
	}
	throw e;
}
async function em(e, t, n, r, i) {
	let { embeddedLanguageFormatting: a, printer: { embed: o, hasPrettierIgnore: s = () => !1, getVisitorKeys: c } } = n;
	if (!o || a !== "auto") return;
	if (o.length > 2) throw Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
	let l = u5(o.getVisitorKeys ?? c), u = [];
	p();
	let d = e.stack;
	for (let { print: r, node: a, pathStack: o } of u) try {
		e.stack = o;
		let s = await r(f, t, e, n);
		s && i.set(a, s);
	} catch (e) {
		if (globalThis.PRETTIER_DEBUG) throw e;
	}
	e.stack = d;
	function f(e, t) {
		return tm(e, t, n, r);
	}
	function p() {
		let { node: t } = e;
		if (typeof t != "object" || !t || s(e)) return;
		for (let n of l(t)) Array.isArray(t[n]) ? e.each(p, n) : e.call(p, n);
		let r = o(e, n);
		if (r) {
			if (typeof r == "function") {
				u.push({
					print: r,
					node: t,
					pathStack: [...e.stack]
				});
				return;
			}
			i.set(t, r);
		}
	}
}
async function tm(e, t, n, r) {
	let i = await G5({
		...n,
		...t,
		parentParser: n.parser,
		originalText: e,
		cursorOffset: void 0,
		rangeStart: void 0,
		rangeEnd: void 0
	}, { passThrough: !0 }), { ast: a } = await q5(e, i);
	return ef(await r(a, i));
}
function nm(e, t) {
	let { originalText: n, [Symbol.for("comments")]: r, locStart: i, locEnd: a, [Symbol.for("printedComments")]: o } = t, { node: s } = e, c = i(s), l = a(s);
	for (let e of r) i(e) >= c && a(e) <= l && o.add(e);
	return n.slice(c, l);
}
async function rm(e, t) {
	({ast: e} = await am(e, t));
	let n = /* @__PURE__ */ new Map(), r = new $8(e), i = h5(t), a = /* @__PURE__ */ new Map();
	await em(r, s, t, rm, a);
	let o = await im(r, t, s, void 0, a);
	if (cp(t), t.cursorOffset >= 0) {
		if (t.nodeAfterCursor && !t.nodeBeforeCursor) return [U8, o];
		if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [o, U8];
	}
	return o;
	function s(e, t) {
		return e === void 0 || e === r ? c(t) : Array.isArray(e) ? r.call(() => c(t), ...e) : r.call(() => c(t), e);
	}
	function c(e) {
		i(r);
		let o = r.node;
		if (o == null) return "";
		let c = o && typeof o == "object" && e === void 0;
		if (c && n.has(o)) return n.get(o);
		let l = im(r, t, s, e, a);
		return c && n.set(o, l), l;
	}
}
function im(e, t, n, r, i) {
	var a;
	let { node: o } = e, { printer: s } = t, c;
	switch (c = (a = s.hasPrettierIgnore) != null && a.call(s, e) ? J5(e, t) : i.has(o) ? i.get(o) : s.print(e, t, n, r), o) {
		case t.cursorNode:
			c = sf(c, (e) => [
				U8,
				e,
				U8
			]);
			break;
		case t.nodeBeforeCursor:
			c = sf(c, (e) => [e, U8]);
			break;
		case t.nodeAfterCursor:
			c = sf(c, (e) => [U8, e]);
			break;
	}
	return s.printComment && (!s.willPrintOwnComments || !s.willPrintOwnComments(e, t)) && (c = sp(e, c, t)), c;
}
async function am(e, t) {
	let n = e.comments ?? [];
	t[Symbol.for("comments")] = n, t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Zf(e, t);
	let { printer: { preprocess: r } } = t;
	return e = r ? await r(e, t) : e, {
		ast: e,
		comments: n
	};
}
function om(e, t) {
	let { cursorOffset: n, locStart: r, locEnd: i } = t, a = u5(t.printer.getVisitorKeys), o = (e) => r(e) <= n && i(e) >= n, s = e, c = [e];
	for (let t of Lf(e, {
		getVisitorKeys: a,
		filter: o
	})) c.push(t), s = t;
	if (Rf(s, { getVisitorKeys: a })) return { cursorNode: s };
	let l, u, d = -1, f = Infinity;
	for (; c.length > 0 && (l === void 0 || u === void 0);) {
		s = c.pop();
		let e = l !== void 0, t = u !== void 0;
		for (let o of If(s, { getVisitorKeys: a })) {
			if (!e) {
				let e = i(o);
				e <= n && e > d && (l = o, d = e);
			}
			if (!t) {
				let e = r(o);
				e >= n && e < f && (u = o, f = e);
			}
		}
	}
	return {
		nodeBeforeCursor: l,
		nodeAfterCursor: u
	};
}
function sm(e, t) {
	let { printer: { massageAstNode: n, getVisitorKeys: r } } = t;
	if (!n) return e;
	let i = u5(r), a = n.ignoredProperties ?? /* @__PURE__ */ new Set();
	return o(e);
	function o(e, t) {
		if (!(typeof e == "object" && e)) return e;
		if (Array.isArray(e)) return e.map((e) => o(e, t)).filter(Boolean);
		let r = {}, s = new Set(i(e));
		for (let t in e) !Object.prototype.hasOwnProperty.call(e, t) || a.has(t) || (s.has(t) ? r[t] = o(e[t], e) : r[t] = e[t]);
		let c = n(e, r, t);
		if (c !== null) return c ?? r;
	}
}
function cm(e, t) {
	let n = [e.node, ...e.parentNodes], r = new Set([t.node, ...t.parentNodes]);
	return n.find((e) => $5.has(e.type) && r.has(e));
}
function lm(e) {
	let t = Z5(!1, e, (e) => e.type !== "Program" && e.type !== "File");
	return t === -1 ? e : e.slice(0, t + 1);
}
function um(e, t, { locStart: n, locEnd: r }) {
	let i = e.node, a = t.node;
	if (i === a) return {
		startNode: i,
		endNode: a
	};
	let o = n(e.node);
	for (let e of lm(t.parentNodes)) if (n(e) >= o) a = e;
	else break;
	let s = r(t.node);
	for (let t of lm(e.parentNodes)) {
		if (r(t) <= s) i = t;
		else break;
		if (i === a) break;
	}
	return {
		startNode: i,
		endNode: a
	};
}
function dm(e, t, n, r, i = [], a) {
	let { locStart: o, locEnd: s } = n, c = o(e), l = s(e);
	if (!(t > l || t < c || a === "rangeEnd" && t === c || a === "rangeStart" && t === l)) {
		for (let o of Yf(e, n)) {
			let s = dm(o, t, n, r, [e, ...i], a);
			if (s) return s;
		}
		if (!r || r(e, i[0])) return {
			node: e,
			parentNodes: i
		};
	}
}
function fm(e, t) {
	return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
function pm(e, t, n) {
	if (!t) return !1;
	switch (e.parser) {
		case "flow":
		case "hermes":
		case "babel":
		case "babel-flow":
		case "babel-ts":
		case "typescript":
		case "acorn":
		case "espree":
		case "meriyah":
		case "oxc":
		case "oxc-ts":
		case "__babel_estree": return fm(t.type, n?.type);
		case "json":
		case "json5":
		case "jsonc":
		case "json-stringify": return $5.has(t.type);
		case "graphql": return e7.has(t.kind);
		case "vue": return t.tag !== "root";
	}
	return !1;
}
function mm(e, t, n) {
	let { rangeStart: r, rangeEnd: i, locStart: a, locEnd: o } = t;
	e5.ok(i > r);
	let s = e.slice(r, i).search(/\S/u), c = s === -1;
	if (!c) for (r += s; i > r && !/\S/u.test(e[i - 1]); --i);
	let l = dm(n, r, t, (e, n) => pm(t, e, n), [], "rangeStart"), u = c ? l : dm(n, i, t, (e) => pm(t, e), [], "rangeEnd");
	if (!l || !u) return {
		rangeStart: 0,
		rangeEnd: 0
	};
	let d, f;
	if (Q5(t)) {
		let e = cm(l, u);
		d = e, f = e;
	} else ({startNode: d, endNode: f} = um(l, u, t));
	return {
		rangeStart: Math.min(a(d), a(f)),
		rangeEnd: Math.max(o(d), o(f))
	};
}
async function hm(e, t, n = 0) {
	if (!e || e.trim().length === 0) return {
		formatted: "",
		cursorOffset: -1,
		comments: []
	};
	let { ast: r, text: i } = await q5(e, t);
	t.cursorOffset >= 0 && (t = {
		...t,
		...Y5(r, t)
	});
	let a = await rm(r, t, n);
	n > 0 && (a = bf([V8, a], n, t.tabWidth));
	let o = Nf(a, t);
	if (n > 0) {
		let e = o.formatted.trim();
		o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(e), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > e.length && (o.cursorNodeText = o.cursorNodeText.trimEnd())), o.formatted = e + Vd(t.endOfLine);
	}
	let s = t[Symbol.for("comments")];
	if (t.cursorOffset >= 0) {
		let e, n, r, a;
		if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && o.cursorNodeText) if (r = o.cursorNodeStart, a = o.cursorNodeText, t.cursorNode) e = t.locStart(t.cursorNode), n = i.slice(e, t.locEnd(t.cursorNode));
		else {
			if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
			e = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
			let r = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : i.length;
			n = i.slice(e, r);
		}
		else e = 0, n = i, r = 0, a = o.formatted;
		let c = t.cursorOffset - e;
		if (n === a) return {
			formatted: o.formatted,
			cursorOffset: r + c,
			comments: s
		};
		let l = n.split("");
		l.splice(c, 0, n7);
		let u = zd(l, a.split("")), d = r;
		for (let e of u) if (e.removed) {
			if (e.value.includes(n7)) break;
		} else d += e.count;
		return {
			formatted: o.formatted,
			cursorOffset: d,
			comments: s
		};
	}
	return {
		formatted: o.formatted,
		cursorOffset: -1,
		comments: s
	};
}
async function gm(e, t) {
	let { ast: n, text: r } = await q5(e, t), { rangeStart: i, rangeEnd: a } = mm(r, t, n), o = r.slice(i, a), s = Math.min(i, r.lastIndexOf("\n", i) + 1), c = r.slice(s, i).match(/^\s*/u)[0], l = Q8(c, t.tabWidth), u = await hm(o, {
		...t,
		rangeStart: 0,
		rangeEnd: Infinity,
		cursorOffset: t.cursorOffset > i && t.cursorOffset <= a ? t.cursorOffset - i : -1,
		endOfLine: "lf"
	}, l), d = u.formatted.trimEnd(), { cursorOffset: f } = t;
	f > a ? f += d.length - o.length : u.cursorOffset >= 0 && (f = u.cursorOffset + i);
	let p = r.slice(0, i) + d + r.slice(a);
	if (t.endOfLine !== "lf") {
		let e = Vd(t.endOfLine);
		f >= 0 && e === "\r\n" && (f += Hd(p.slice(0, f), "\n")), p = n8(!1, p, "\n", e);
	}
	return {
		formatted: p,
		cursorOffset: f,
		comments: u.comments
	};
}
function _m(e, t, n) {
	return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? n : t;
}
function vm(e, t) {
	let { cursorOffset: n, rangeStart: r, rangeEnd: i } = t;
	return n = _m(e, n, -1), r = _m(e, r, 0), i = _m(e, i, e.length), {
		...t,
		cursorOffset: n,
		rangeStart: r,
		rangeEnd: i
	};
}
function ym(e, t) {
	let { cursorOffset: n, rangeStart: r, rangeEnd: i, endOfLine: a } = vm(e, t), o = e.charAt(0) === t7;
	if (o && (e = e.slice(1), n--, r--, i--), a === "auto" && (a = Bd(e)), e.includes("\r")) {
		let t = (t) => Hd(e.slice(0, Math.max(t, 0)), "\r\n");
		n -= t(n), r -= t(r), i -= t(i), e = Ud(e);
	}
	return {
		hasBOM: o,
		text: e,
		options: vm(e, {
			...t,
			cursorOffset: n,
			rangeStart: r,
			rangeEnd: i,
			endOfLine: a
		})
	};
}
async function bm(e, t) {
	let n = await Jp(t);
	return !n.hasPragma || n.hasPragma(e);
}
async function xm(e, t) {
	var n;
	let r = await Jp(t);
	return r.hasIgnorePragma?.call(r, e);
}
async function Sm(e, t) {
	let { hasBOM: n, text: r, options: i } = ym(e, await G5(t));
	if (i.rangeStart >= i.rangeEnd && r !== "" || i.requirePragma && !await bm(r, i) || i.checkIgnorePragma && await xm(r, i)) return {
		formatted: e,
		cursorOffset: t.cursorOffset,
		comments: []
	};
	let a;
	return i.rangeStart > 0 || i.rangeEnd < r.length ? a = await gm(r, i) : (!i.requirePragma && i.insertPragma && i.printer.insertPragma && !await bm(r, i) && (r = i.printer.insertPragma(r)), a = await hm(r, i)), n && (a.formatted = t7 + a.formatted, a.cursorOffset >= 0 && a.cursorOffset++), a;
}
async function Cm(e, t, n) {
	let { text: r, options: i } = ym(e, await G5(t)), a = await q5(r, i);
	return n && (n.preprocessForPrint && (a.ast = await am(a.ast, i)), n.massage && (a.ast = X5(a.ast, i))), a;
}
async function wm(e, t) {
	return t = await G5(t), Nf(await rm(e, t), t);
}
async function Tm(e, t) {
	let { formatted: n } = await Sm(Cf(e), {
		...t,
		parser: "__js_expression"
	});
	return n;
}
async function Em(e, t) {
	t = await G5(t);
	let { ast: n } = await q5(e, t);
	return t.cursorOffset >= 0 && (t = {
		...t,
		...Y5(n, t)
	}), rm(n, t);
}
async function Dm(e, t) {
	return Nf(e, await G5(t));
}
function Om(e, t) {
	if (t === !1) return !1;
	if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
		for (let n = t + 2; n < e.length; ++n) if (e.charAt(n) === "*" && e.charAt(n + 1) === "/") return n + 2;
	}
	return t;
}
function km(e, t) {
	return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? i5(e, t) : t;
}
function Am(e, t) {
	let n = null, r = t;
	for (; r !== n;) n = r, r = n5(e, r), r = r7(e, r), r = i7(e, r), r = a5(e, r);
	return r;
}
function jm(e, t) {
	let n = null, r = t;
	for (; r !== n;) n = r, r = r5(e, r), r = r7(e, r), r = n5(e, r);
	return r = i7(e, r), r = a5(e, r), r !== !1 && o5(e, r);
}
function Mm(e, t) {
	let n = e.lastIndexOf("\n");
	return n === -1 ? 0 : Q8(e.slice(n + 1).match(/^[\t ]*/u)[0], t);
}
function Nm(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Pm(e, t) {
	let n = e.match(RegExp(`(${Nm(t)})+`, "gu"));
	return n === null ? 0 : n.reduce((e, n) => Math.max(e, n.length / t.length), 0);
}
function Fm(e, t) {
	let n = a7(e, t);
	return n === !1 ? "" : e.charAt(n);
}
function Im(e, t) {
	let n = t === !0 || t === s7 ? s7 : c7, r = n === s7 ? c7 : s7, i = 0, a = 0;
	for (let t of e) t === n ? i++ : t === r && a++;
	return i > a ? r : n;
}
function Lm(e, t, n) {
	for (let r = t; r < n; ++r) if (e.charAt(r) === "\n") return !0;
	return !1;
}
function Rm(e, t, n = {}) {
	return n5(e, n.backwards ? t - 1 : t, n) !== t;
}
function zm(e, t, n) {
	let r = t === "\"" ? "'" : "\"";
	return t + n8(!1, e, /\\(.)|(["'])/gsu, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(i) ? i : "\\" + i)) + t;
}
function Bm(e, t, n) {
	return a7(e, n(t));
}
function Vm(e, t) {
	return arguments.length === 2 || typeof t == "number" ? a7(e, t) : Bm(...arguments);
}
function Hm(e, t, n) {
	return m5(e, n(t));
}
function Um(e, t) {
	return arguments.length === 2 || typeof t == "number" ? m5(e, t) : Hm(...arguments);
}
function Wm(e, t, n) {
	return o7(e, n(t));
}
function Gm(e, t) {
	return arguments.length === 2 || typeof t == "number" ? o7(e, t) : Wm(...arguments);
}
function Km(e, t = 1) {
	return async (...n) => {
		let r = n[t] ?? {}, i = r.plugins ?? [];
		return n[t] = {
			...r,
			plugins: Array.isArray(i) ? i : Object.values(i)
		}, e(...n);
	};
}
async function qm(e, t) {
	let { formatted: n } = await l7(e, {
		...t,
		cursorOffset: -1
	});
	return n;
}
async function Jm(e, t) {
	return await qm(e, t) === e;
}
function Ym(e) {
	return e.type === d7.Tag || e.type === d7.Script || e.type === d7.Style;
}
function Xm(e) {
	return Ym(e);
}
function Zm(e) {
	return e.type === d7.CDATA;
}
function Qm(e) {
	return e.type === d7.Text;
}
function $m(e) {
	return e.type === d7.Comment;
}
function eh(e) {
	return e.type === d7.Directive;
}
function th(e) {
	return e.type === d7.Root;
}
function nh(e, t = !1) {
	let n;
	if (Qm(e)) n = new x7(e.data);
	else if ($m(e)) n = new S7(e.data);
	else if (Xm(e)) {
		let r = t ? rh(e.children) : [], i = new E7(e.name, { ...e.attribs }, r);
		r.forEach((e) => e.parent = i), e.namespace != null && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }), n = i;
	} else if (Zm(e)) {
		let r = t ? rh(e.children) : [], i = new w7(r);
		r.forEach((e) => e.parent = i), n = i;
	} else if (th(e)) {
		let r = t ? rh(e.children) : [], i = new T7(r);
		r.forEach((e) => e.parent = i), e["x-mode"] && (i["x-mode"] = e["x-mode"]), n = i;
	} else if (eh(e)) {
		let t = new C7(e.name, e.data);
		e["x-name"] != null && (t["x-name"] = e["x-name"], t["x-publicId"] = e["x-publicId"], t["x-systemId"] = e["x-systemId"]), n = t;
	} else throw Error(`Not implemented yet: ${e.type}`);
	return n.startIndex = e.startIndex, n.endIndex = e.endIndex, e.sourceCodeLocation != null && (n.sourceCodeLocation = e.sourceCodeLocation), n;
}
function rh(e) {
	let t = e.map((e) => nh(e, !0));
	for (let e = 1; e < t.length; e++) t[e].prev = t[e - 1], t[e - 1].next = t[e];
	return t;
}
function ih(e) {
	let t = [...e.matchAll(O7)].map(((e) => e.index || 0));
	t.unshift(-1);
	let n = ah(t, 0, t.length);
	return (e) => oh(n, e);
}
function ah(e, t, n) {
	if (n - t == 1) return {
		offset: e[t],
		index: t + 1
	};
	let r = Math.ceil((t + n) / 2), i = ah(e, t, r), a = ah(e, r, n);
	return {
		offset: i.offset,
		low: i,
		high: a
	};
}
function oh(e, t) {
	return function(e) {
		return Object.prototype.hasOwnProperty.call(e, "index");
	}(e) ? {
		line: e.index,
		column: t - e.offset
	} : oh(e.high.offset < t ? e.high : e.low, t);
}
function sh(e, t = "", n = {}) {
	let r = typeof t == "string" ? n : t, i = typeof t == "string" ? t : "", a = e.map(ch), o = !!r.lineNumbers;
	return function(e, t = 0) {
		let n = o ? ih(e) : () => ({
			line: 0,
			column: 0
		}), r = t, s = [];
		e: for (; r < e.length;) {
			let t = !1;
			for (let o of a) {
				o.regex.lastIndex = r;
				let a = o.regex.exec(e);
				if (a && a[0].length > 0) {
					if (!o.discard) {
						let e = n(r), t = typeof o.replace == "string" ? a[0].replace(new RegExp(o.regex.source, o.regex.flags), o.replace) : a[0];
						s.push({
							state: i,
							name: o.name,
							text: t,
							offset: r,
							len: a[0].length,
							line: e.line,
							column: e.column
						});
					}
					if (r = o.regex.lastIndex, t = !0, o.push) {
						let t = o.push(e, r);
						s.push(...t.tokens), r = t.offset;
					}
					if (o.pop) break e;
					break;
				}
			}
			if (!t) break;
		}
		return {
			tokens: s,
			offset: r,
			complete: e.length <= r
		};
	};
}
function ch(e, t) {
	return {
		...e,
		regex: lh(e, t)
	};
}
function lh(e, t) {
	if (e.name.length === 0) throw Error(`Rule #${t} has empty name, which is not allowed.`);
	if (function(e) {
		return Object.prototype.hasOwnProperty.call(e, "regex");
	}(e)) return function(e) {
		if (e.global) throw Error(`Regular expression /${e.source}/${e.flags} contains the global flag, which is not allowed.`);
		return e.sticky ? e : new RegExp(e.source, e.flags + "y");
	}(e.regex);
	if (function(e) {
		return Object.prototype.hasOwnProperty.call(e, "str");
	}(e)) {
		if (e.str.length === 0) throw Error(`Rule #${t} ("${e.name}") has empty "str" property, which is not allowed.`);
		return new RegExp(uh(e.str), "y");
	}
	return new RegExp(uh(e.name), "y");
}
function uh(e) {
	return e.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
//#endregion
//#region ../../node_modules/peberminta/lib/core.mjs
function dh(e, t) {
	return (n, r) => {
		let i = r, a;
		return r < n.tokens.length ? (a = e(n.tokens[r], n, r), a !== void 0 && i++) : t?.(n, r), a === void 0 ? { matched: !1 } : {
			matched: !0,
			position: i,
			value: a
		};
	};
}
function fh(e, t) {
	return e.matched ? {
		matched: !0,
		position: e.position,
		value: t(e.value, e.position)
	} : e;
}
function ph(e, t) {
	return e.matched ? t(e) : e;
}
function mh(e, t) {
	return (n, r) => fh(e(n, r), (e, i) => t(e, n, r, i));
}
function hh(e, t) {
	return (n, r) => {
		let i = e(n, r);
		return i.matched ? i : {
			matched: !0,
			position: r,
			value: t
		};
	};
}
function gh(...e) {
	return (t, n) => {
		for (let r of e) {
			let e = r(t, n);
			if (e.matched) return e;
		}
		return { matched: !1 };
	};
}
function _h(e, t) {
	return (n, r) => {
		let i = e(n, r);
		return i.matched ? i : t(n, r);
	};
}
function vh(e, t) {
	return (n, r) => {
		let i = [], a = !0;
		do {
			let o = e(n, r);
			o.matched && t(o.value, i.length + 1, n, r, o.position) ? (i.push(o.value), r = o.position) : a = !1;
		} while (a);
		return {
			matched: !0,
			position: r,
			value: i
		};
	};
}
function yh(e) {
	return vh(e, () => !0);
}
function bh(e) {
	return xh(e, yh(e), (e, t) => [e, ...t]);
}
function xh(e, t, n) {
	return (r, i) => ph(e(r, i), (e) => fh(t(r, e.position), (t, a) => n(e.value, t, r, i, a)));
}
function Sh(e, t) {
	return xh(e, t, (e) => e);
}
function Ch(e, t) {
	return xh(e, t, (e, t) => t);
}
function wh(e, t, n, r) {
	return (i, a) => ph(e(i, a), (e) => ph(t(i, e.position), (t) => fh(n(i, t.position), (n, o) => r(e.value, t.value, n, i, a, o))));
}
function Th(e, t, n) {
	return wh(e, t, n, (e, t) => t);
}
function Eh(...e) {
	return (t, n) => {
		let r = [], i = n;
		for (let n of e) {
			let e = n(t, i);
			if (e.matched) r.push(e.value), i = e.position;
			else return { matched: !1 };
		}
		return {
			matched: !0,
			position: i,
			value: r
		};
	};
}
function Dh(...e) {
	return Oh(Eh(...e));
}
function Oh(e) {
	return mh(e, (e) => e.flatMap((e) => e));
}
function kh(e, t) {
	return (n, r) => {
		let i = !0, a = e, o = r;
		do {
			let e = t(a, n, o)(n, o);
			e.matched ? (a = e.value, o = e.position) : i = !1;
		} while (i);
		return {
			matched: !0,
			position: o,
			value: a
		};
	};
}
function Ah(e, t, n) {
	return kh(e, (e) => mh(t, (t, r, i, a) => n(e, t, r, i, a)));
}
function jh(e, t, n) {
	return Mh(e, (e) => Ah(e, xh(t, n, (e, t) => [e, t]), (e, [t, n]) => t(e, n)));
}
function Mh(e, t) {
	return (n, r) => ph(e(n, r), (e) => t(e.value, n, r, e.position)(n, e.position));
}
function Nh([e, t, n], [r, i, a]) {
	return [
		e + r,
		t + i,
		n + a
	];
}
function Ph(e) {
	return e.reduce(Nh, [
		0,
		0,
		0
	]);
}
function Fh(e) {
	return j7({
		tokens: A7(e).tokens,
		options: void 0
	}, 0).value;
}
function Ih(e) {
	return dh((t) => t.name === e ? !0 : void 0);
}
function Lh(e) {
	return Th(M7, e, M7);
}
function Rh(e, t) {
	if (!(typeof t == "string" || t instanceof String)) throw Error("Expected a selector string. Actual input is not a string!");
	let n = k7(t);
	if (!n.complete) throw Error(`The input "${t}" was only partially tokenized, stopped at offset ${n.offset}!\n` + zh(t, n.offset));
	let r = Lh(e)({
		tokens: n.tokens,
		options: void 0
	}, 0);
	if (!r.matched) throw Error(`No match for "${t}" input!`);
	if (r.position < n.tokens.length) {
		let e = n.tokens[r.position];
		throw Error(`The input "${t}" was only partially parsed, stopped at offset ${e.offset}!\n` + zh(t, e.offset, e.len));
	}
	return r.value;
}
function zh(e, t, n = 1) {
	return `${e.replace(/(\t)|(\r)|(\n)/g, (e, t, n) => t ? "␉" : n ? "␍" : "␊")}\n${"".padEnd(t)}${"^".repeat(n)}`;
}
function Bh(e) {
	return Rh(N7, e);
}
function Vh(e) {
	if (!e.type) throw Error("This is not an AST node.");
	switch (e.type) {
		case "universal": return Hh(e.namespace) + "*";
		case "tag": return Hh(e.namespace) + Wh(e.name);
		case "class": return "." + Wh(e.name);
		case "id": return "#" + Wh(e.name);
		case "attrPresence": return `[${Hh(e.namespace)}${Wh(e.name)}]`;
		case "attrValue": return `[${Hh(e.namespace)}${Wh(e.name)}${e.matcher}"${Gh(e.value)}"${e.modifier ? e.modifier : ""}]`;
		case "combinator": return Vh(e.left) + e.combinator;
		case "compound": return e.list.reduce((e, t) => t.type === "combinator" ? Vh(t) + e : e + Vh(t), "");
		case "list": return e.list.map(Vh).join(",");
	}
}
function Hh(e) {
	return e || e === "" ? Wh(e) + "|" : "";
}
function Uh(e) {
	return `\\${e.codePointAt(0).toString(16)} `;
}
function Wh(e) {
	return e.replace(/(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g, (e, t, n, r, i, a, o, s) => t ? Uh(t) : n ? "-" + Uh(n.slice(1)) : r ? "\\-" : i || (a ? "�" : o ? Uh(o) : "\\" + s));
}
function Gh(e) {
	return e.replace(/(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g, (e, t, n, r, i) => t ? "\\\"" : n ? "\\\\" : r ? "�" : Uh(i));
}
function Kh(e) {
	if (!e.type) throw Error("This is not an AST node.");
	switch (e.type) {
		case "compound":
			e.list.forEach(Kh), e.list.sort((e, t) => Yh(qh(e), qh(t)));
			break;
		case "combinator":
			Kh(e.left);
			break;
		case "list":
			e.list.forEach(Kh), e.list.sort((e, t) => Vh(e) < Vh(t) ? -1 : 1);
			break;
	}
	return e;
}
function qh(e) {
	switch (e.type) {
		case "universal": return [1];
		case "tag": return [1];
		case "id": return [2];
		case "class": return [3, e.name];
		case "attrPresence": return [4, Vh(e)];
		case "attrValue": return [5, Vh(e)];
		case "combinator": return [15, Vh(e)];
	}
}
function Jh(e, t) {
	return Yh(e, t);
}
function Yh(e, t) {
	if (!Array.isArray(e) || !Array.isArray(t)) throw Error("Arguments must be arrays.");
	let n = e.length < t.length ? e.length : t.length;
	for (let r = 0; r < n; r++) if (e[r] !== t[r]) return e[r] < t[r] ? -1 : 1;
	return e.length - t.length;
}
function Xh(e) {
	let t = e.length, n = Array(t);
	for (let r = 0; r < t; r++) {
		let [t, i] = e[r], a = Zh(Bh(t));
		n[r] = {
			ast: a,
			terminal: {
				type: "terminal",
				valueContainer: {
					index: r,
					value: i,
					specificity: a.specificity
				}
			}
		};
	}
	return n;
}
function Zh(e) {
	return Qh(e), Kh(e), e;
}
function Qh(e) {
	let t = [];
	e.list.forEach((e) => {
		switch (e.type) {
			case "class":
				t.push({
					matcher: "~=",
					modifier: null,
					name: "class",
					namespace: null,
					specificity: e.specificity,
					type: "attrValue",
					value: e.name
				});
				break;
			case "id":
				t.push({
					matcher: "=",
					modifier: null,
					name: "id",
					namespace: null,
					specificity: e.specificity,
					type: "attrValue",
					value: e.name
				});
				break;
			case "combinator":
				Qh(e.left), t.push(e);
				break;
			case "universal": break;
			default:
				t.push(e);
				break;
		}
	}), e.list = t;
}
function $h(e) {
	let t = [];
	for (; e.length;) {
		let n = dg(e, (e) => !0, ng), { matches: r, nonmatches: i, empty: a } = tg(e, n);
		e = i, r.length && t.push(rg(n, r)), a.length && t.push(...eg(a));
	}
	return t;
}
function eg(e) {
	let t = [];
	for (let n of e) {
		let e = n.terminal;
		if (e.type === "terminal") t.push(e);
		else {
			let { matches: n, rest: r } = fg(e.cont, (e) => e.type === "terminal");
			n.forEach((e) => t.push(e)), r.length && (e.cont = r, t.push(e));
		}
	}
	return t;
}
function tg(e, t) {
	let n = [], r = [], i = [];
	for (let a of e) {
		let e = a.ast.list;
		e.length ? (e.some((e) => ng(e) === t) ? n : r).push(a) : i.push(a);
	}
	return {
		matches: n,
		nonmatches: r,
		empty: i
	};
}
function ng(e) {
	switch (e.type) {
		case "attrPresence": return `attrPresence ${e.name}`;
		case "attrValue": return `attrValue ${e.name}`;
		case "combinator": return `combinator ${e.combinator}`;
		default: return e.type;
	}
}
function rg(e, t) {
	if (e === "tag") return ig(t);
	if (e.startsWith("attrValue ")) return og(e.substring(10), t);
	if (e.startsWith("attrPresence ")) return ag(e.substring(13), t);
	if (e === "combinator >") return cg(">", t);
	if (e === "combinator +") return cg("+", t);
	throw Error(`Unsupported selector kind: ${e}`);
}
function ig(e) {
	let t = lg(e, (e) => e.type === "tag", (e) => e.name);
	return {
		type: "tagName",
		variants: Object.entries(t).map(([e, t]) => ({
			type: "variant",
			value: e,
			cont: $h(t.items)
		}))
	};
}
function ag(e, t) {
	for (let n of t) ug(n, (t) => t.type === "attrPresence" && t.name === e);
	return {
		type: "attrPresence",
		name: e,
		cont: $h(t)
	};
}
function og(e, t) {
	let n = lg(t, (t) => t.type === "attrValue" && t.name === e, (e) => `${e.matcher} ${e.modifier || ""} ${e.value}`), r = [];
	for (let e of Object.values(n)) {
		let t = e.oneSimpleSelector, n = sg(t), i = $h(e.items);
		r.push({
			type: "matcher",
			matcher: t.matcher,
			modifier: t.modifier,
			value: t.value,
			predicate: n,
			cont: i
		});
	}
	return {
		type: "attrValue",
		name: e,
		matchers: r
	};
}
function sg(e) {
	if (e.modifier === "i") {
		let t = e.value.toLowerCase();
		switch (e.matcher) {
			case "=": return (e) => t === e.toLowerCase();
			case "~=": return (e) => e.toLowerCase().split(/[ \t]+/).includes(t);
			case "^=": return (e) => e.toLowerCase().startsWith(t);
			case "$=": return (e) => e.toLowerCase().endsWith(t);
			case "*=": return (e) => e.toLowerCase().includes(t);
			case "|=": return (e) => {
				let n = e.toLowerCase();
				return t === n || n.startsWith(t) && n[t.length] === "-";
			};
		}
	} else {
		let t = e.value;
		switch (e.matcher) {
			case "=": return (e) => t === e;
			case "~=": return (e) => e.split(/[ \t]+/).includes(t);
			case "^=": return (e) => e.startsWith(t);
			case "$=": return (e) => e.endsWith(t);
			case "*=": return (e) => e.includes(t);
			case "|=": return (e) => t === e || e.startsWith(t) && e[t.length] === "-";
		}
	}
}
function cg(e, t) {
	let n = lg(t, (t) => t.type === "combinator" && t.combinator === e, (e) => Vh(e.left)), r = [];
	for (let e of Object.values(n)) {
		let t = $h(e.items), n = e.oneSimpleSelector.left;
		r.push({
			ast: n,
			terminal: {
				type: "popElement",
				cont: t
			}
		});
	}
	return {
		type: "pushElement",
		combinator: e,
		cont: $h(r)
	};
}
function lg(e, t, n) {
	let r = {};
	for (; e.length;) {
		let i = dg(e, t, n), a = (e) => t(e) && n(e) === i, { matches: o, rest: s } = pg(e, (e) => e.ast.list.some(a)), c = null;
		for (let e of o) {
			let t = ug(e, a);
			c ||= t;
		}
		if (c == null) throw Error("No simple selector is found.");
		r[i] = {
			oneSimpleSelector: c,
			items: o
		}, e = s;
	}
	return r;
}
function ug(e, t) {
	let n = e.ast.list, r = Array(n.length), i = -1;
	for (let e = n.length; e-- > 0;) t(n[e]) && (r[e] = !0, i = e);
	if (i == -1) throw Error("Couldn't find the required simple selector.");
	let a = n[i];
	return e.ast.list = n.filter((e, t) => !r[t]), a;
}
function dg(e, t, n) {
	let r = {};
	for (let i of e) {
		let e = {};
		for (let r of i.ast.list.filter(t)) e[n(r)] = !0;
		for (let t of Object.keys(e)) r[t] ? r[t]++ : r[t] = 1;
	}
	let i = "", a = 0;
	for (let e of Object.entries(r)) e[1] > a && (i = e[0], a = e[1]);
	return i;
}
function fg(e, t) {
	let n = [], r = [];
	for (let i of e) t(i) ? n.push(i) : r.push(i);
	return {
		matches: n,
		rest: r
	};
}
function pg(e, t) {
	let n = [], r = [];
	for (let i of e) t(i) ? n.push(i) : r.push(i);
	return {
		matches: n,
		rest: r
	};
}
function mg(e, t) {
	let n = Jh(t.specificity, e.specificity);
	return n > 0 || n === 0 && t.index < e.index;
}
function hg(e, t) {
	let n = Jh(t.specificity, e.specificity);
	return n > 0 || n === 0 && t.index > e.index;
}
//#endregion
//#region ../../node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs
function gg(e) {
	return new F7(_g(e));
}
function _g(e) {
	let t = e.map(vg);
	return (e, ...n) => t.flatMap((t) => t(e, ...n));
}
function vg(e) {
	switch (e.type) {
		case "terminal": {
			let t = [e.valueContainer];
			return (e, ...n) => t;
		}
		case "tagName": return yg(e);
		case "attrValue": return xg(e);
		case "attrPresence": return bg(e);
		case "pushElement": return Sg(e);
		case "popElement": return Cg(e);
	}
}
function yg(e) {
	let t = {};
	for (let n of e.variants) t[n.value] = _g(n.cont);
	return (e, ...n) => {
		let r = t[e.name];
		return r ? r(e, ...n) : [];
	};
}
function bg(e) {
	let t = e.name, n = _g(e.cont);
	return (e, ...r) => Object.prototype.hasOwnProperty.call(e.attribs, t) ? n(e, ...r) : [];
}
function xg(e) {
	let t = [];
	for (let n of e.matchers) {
		let e = n.predicate, r = _g(n.cont);
		t.push((t, n, ...i) => e(t) ? r(n, ...i) : []);
	}
	let n = e.name;
	return (e, ...r) => {
		let i = e.attribs[n];
		return i || i === "" ? t.flatMap((t) => t(i, e, ...r)) : [];
	};
}
function Sg(e) {
	let t = _g(e.cont), n = e.combinator === "+" ? I7 : L7;
	return (e, ...r) => {
		let i = n(e);
		return i === null ? [] : t(i, e, ...r);
	};
}
function Cg(e) {
	let t = _g(e.cont);
	return (e, n, ...r) => t(n, ...r);
}
function wg(e) {
	var t;
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : R7.get(e) ?? e;
}
function Tg(e) {
	return e >= B7.ZERO && e <= B7.NINE;
}
function Eg(e) {
	return e >= B7.UPPER_A && e <= B7.UPPER_F || e >= B7.LOWER_A && e <= B7.LOWER_F;
}
function Dg(e) {
	return e >= B7.UPPER_A && e <= B7.UPPER_Z || e >= B7.LOWER_A && e <= B7.LOWER_Z || Tg(e);
}
function Og(e) {
	return e === B7.EQUALS || Dg(e);
}
function kg(e) {
	let t = "", n = new H7(e, (e) => t += z7(e));
	return function(e, r) {
		let i = 0, a = 0;
		for (; (a = e.indexOf("&", a)) >= 0;) {
			t += e.slice(i, a), n.startEntity(r);
			let o = n.write(e, a + 1);
			if (o < 0) {
				i = a + n.end();
				break;
			}
			i = a + o, a = o === 0 ? i + 1 : i;
		}
		let o = t + e.slice(i);
		return t = "", o;
	};
}
function Ag(e, t, n, r) {
	let i = (t & V7.BRANCH_LENGTH) >> 7, a = t & V7.JUMP_TABLE;
	if (i === 0) return a !== 0 && r === a ? n : -1;
	if (a) {
		let t = r - a;
		return t < 0 || t >= i ? -1 : e[n + t] - 1;
	}
	let o = n, s = o + i - 1;
	for (; o <= s;) {
		let t = o + s >>> 1, n = e[t];
		if (n < r) o = t + 1;
		else if (n > r) s = t - 1;
		else return e[t + i];
	}
	return -1;
}
function jg(e) {
	return e === $.Space || e === $.NewLine || e === $.Tab || e === $.FormFeed || e === $.CarriageReturn;
}
function Mg(e) {
	return e === $.Slash || e === $.Gt || jg(e);
}
function Ng(e) {
	return e >= $.Zero && e <= $.Nine;
}
function Pg(e) {
	return e >= $.LowerA && e <= $.LowerZ || e >= $.UpperA && e <= $.UpperZ;
}
function Fg(e) {
	return e >= $.UpperA && e <= $.UpperF || e >= $.LowerA && e <= $.LowerF;
}
function Ig(e) {
	let t = "", n = 0, r;
	for (; (r = W7.exec(e)) !== null;) {
		let i = r.index, a = e.charCodeAt(i), o = G7.get(a);
		o === void 0 ? (t += `${e.substring(n, i)}&#x${K7(e, i).toString(16)};`, n = W7.lastIndex += Number((a & 64512) == 55296)) : (t += e.substring(n, i) + o, n = i + 1);
	}
	return t + e.substr(n);
}
function Lg(e, t) {
	return function(n) {
		let r, i = 0, a = "";
		for (; r = e.exec(n);) i !== r.index && (a += n.substring(i, r.index)), a += t.get(r[0].charCodeAt(0)), i = r.index + 1;
		return a + n.substring(i);
	};
}
function Rg(e) {
	return e.replace(/"/g, "&quot;");
}
function zg(e, t) {
	var n;
	if (!e) return;
	let r = (t.encodeEntities ?? t.decodeEntities) === !1 ? Rg : t.xmlMode || t.encodeEntities !== "utf8" ? Ig : q7;
	return Object.keys(e).map((n) => {
		var i, a;
		let o = e[n] ?? "";
		return t.xmlMode === "foreign" && (n = X7.get(n) ?? n), !t.emptyAttrs && !t.xmlMode && o === "" ? n : `${n}="${r(o)}"`;
	}).join(" ");
}
function Bg(e, t = {}) {
	let n = "length" in e ? e : [e], r = "";
	for (let e = 0; e < n.length; e++) r += Vg(n[e], t);
	return r;
}
function Vg(e, t) {
	switch (e.type) {
		case f7: return Bg(e.children, t);
		case b7:
		case m7: return Ug(e);
		case h7: return Kg(e);
		case y7: return Gg(e);
		case g7:
		case _7:
		case v7: return Hg(e, t);
		case p7: return Wg(e, t);
	}
}
function Hg(e, t) {
	var n;
	t.xmlMode === "foreign" && (e.name = Y7.get(e.name) ?? e.name, e.parent && $7.has(e.parent.name) && (t = {
		...t,
		xmlMode: !1
	})), !t.xmlMode && e9.has(e.name) && (t = {
		...t,
		xmlMode: "foreign"
	});
	let r = `<${e.name}`, i = zg(e.attribs, t);
	return i && (r += ` ${i}`), e.children.length === 0 && (t.xmlMode ? t.selfClosingTags !== !1 : t.selfClosingTags && Q7.has(e.name)) ? (t.xmlMode || (r += " "), r += "/>") : (r += ">", e.children.length > 0 && (r += Bg(e.children, t)), (t.xmlMode || !Q7.has(e.name)) && (r += `</${e.name}>`)), r;
}
function Ug(e) {
	return `<${e.data}>`;
}
function Wg(e, t) {
	var n;
	let r = e.data || "";
	return (t.encodeEntities ?? t.decodeEntities) !== !1 && !(!t.xmlMode && e.parent && Z7.has(e.parent.name)) && (r = t.xmlMode || t.encodeEntities !== "utf8" ? Ig(r) : J7(r)), r;
}
function Gg(e) {
	return `<![CDATA[${e.children[0].data}]]>`;
}
function Kg(e) {
	return `<!--${e.data}-->`;
}
//#endregion
//#region ../../node_modules/htmlparser2/lib/esm/index.js
function qg(e, t) {
	let n = new D7(void 0, t);
	return new U7(n, t).end(e), n.root;
}
function Jg(e, t, n = () => void 0) {
	if (e === void 0) {
		let e = function(...n) {
			return t(e, ...n);
		};
		return e;
	}
	return e >= 0 ? function(...r) {
		return t(Jg(e - 1, t, n), ...r);
	} : n;
}
function Yg(e, t) {
	let n = 0, r = e.length;
	for (; n < r && e[n] === t;) ++n;
	for (; r > n && e[r - 1] === t;) --r;
	return n > 0 || r < e.length ? e.substring(n, r) : e;
}
function Xg(e, t) {
	let n = e.length;
	for (; n > 0 && e[n - 1] === t;) --n;
	return n < e.length ? e.substring(0, n) : e;
}
function Zg(e) {
	return e.replace(/[\s\S]/g, (e) => "\\u" + e.charCodeAt().toString(16).padStart(4, "0"));
}
function Qg(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r = e.length; r-- > 0;) {
		let i = e[r], a = t(i);
		n.set(a, n.has(a) ? (0, t9.default)(i, n.get(a), { arrayMerge: n9 }) : i);
	}
	return [...n.values()].reverse();
}
function $g(e, t) {
	for (let n of t) {
		if (!e) return;
		e = e[n];
	}
	return e;
}
function e_(e, t = "a", n = 26) {
	let r = [];
	do
		--e, r.push(e % n), e = e / n >> 0;
	while (e > 0);
	let i = t.charCodeAt(0);
	return r.reverse().map((e) => String.fromCharCode(i + e)).join("");
}
function t_(e) {
	return [...e + ""].map((e) => +e).reverse().map((e, t) => e % 5 < 4 ? (e < 5 ? "" : i9[t]) + r9[t].repeat(e % 5) : r9[t] + (e < 5 ? i9[t] : r9[t + 1])).reverse().join("");
}
function n_(e) {
	return [...e].map((e) => "\\u" + e.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
function r_(e) {
	if (!(e instanceof a9 || e instanceof o9 || e instanceof s9)) throw Error("Only blocks, list items and table cells can be requested for text contents.");
	return e.inlineTextBuilder.isEmpty() ? e.rawText : e.rawText + e.inlineTextBuilder.toString();
}
function i_(e, t, n, r) {
	if (!(e instanceof a9 || e instanceof o9 || e instanceof s9)) throw Error("Only blocks, list items and table cells can contain text.");
	let i = r_(e), a = Math.max(e.stashedLineBreaks, n);
	e.inlineTextBuilder.clear(), i ? e.rawText = i + "\n".repeat(a) + t : (e.rawText = t, e.leadingLineBreaks = a), e.stashedLineBreaks = r;
}
function a_(e, t) {
	return t ? a_(t.transform(e), t.next) : e;
}
function o_(e = {}) {
	let t = e.selectors.filter((e) => !e.format);
	if (t.length) throw Error("Following selectors have no specified format: " + t.map((e) => `\`${e.selector}\``).join(", "));
	let n = new P7(e.selectors.map((e) => [e.selector, e])).build(gg);
	typeof e.encodeCharacters != "function" && (e.encodeCharacters = u_(e.encodeCharacters));
	let r = new P7(e.baseElements.selectors.map((e, t) => [e, t + 1])).build(gg);
	function i(t) {
		return c_(t, e, r);
	}
	let a = Jg(e.limits.maxDepth, l_, function(t, n) {
		n.addInline(e.limits.ellipsis || "");
	});
	return function(t, r = void 0) {
		return s_(t, r, e, n, i, a);
	};
}
function s_(e, t, n, r, i, a) {
	let o = n.limits.maxInputLength;
	o && e && e.length > o && (console.warn(`Input length ${e.length} is above allowed limit of ${o}. Truncating without ellipsis.`), e = e.substring(0, o));
	let s = i(qg(e, { decodeEntities: n.decodeEntities }).children), c = new c9(n, r, t);
	return a(s, c), c.toString();
}
function c_(e, t, n) {
	let r = [];
	function i(e, i) {
		i = i.slice(0, t.limits.maxChildNodes);
		for (let a of i) {
			if (a.type !== "tag") continue;
			let i = n.pick1(a);
			if (i > 0 ? r.push({
				selectorIndex: i,
				element: a
			}) : a.children && e(a.children), r.length >= t.limits.maxBaseElements) return;
		}
	}
	return Jg(t.limits.maxDepth, i)(e), t.baseElements.orderBy !== "occurrence" && r.sort((e, t) => e.selectorIndex - t.selectorIndex), t.baseElements.returnDomByDefault && r.length === 0 ? e : r.map((e) => e.element);
}
function l_(e, t, n) {
	if (!t) return;
	let r = n.options;
	t.length > r.limits.maxChildNodes && (t = t.slice(0, r.limits.maxChildNodes), t.push({
		data: r.limits.ellipsis,
		type: "text"
	}));
	for (let i of t) switch (i.type) {
		case "text":
			n.addInline(i.data);
			break;
		case "tag": {
			let t = n.picker.pick1(i), a = r.formatters[t.format];
			a(i, e, n, t.options || {});
			break;
		}
	}
}
function u_(e) {
	if (!e || Object.keys(e).length === 0) return;
	let t = Object.entries(e).filter(([, e]) => e !== !1), n = new RegExp(t.map(([e]) => `(${Zg([...e][0])})`).join("|"), "g"), r = t.map(([, e]) => e), i = (e, ...t) => r[t.findIndex((e) => e)];
	return (e) => e.replace(n, i);
}
function d_(e, t, n, r) {}
function f_(e, t, n, r) {
	n.addLiteral(r.string || "");
}
function p_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), n.addLiteral(r.string || ""), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function m_(e, t, n, r) {
	t(e.children, n);
}
function h_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), t(e.children, n), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function g_(e) {
	let t = e.attribs && e.attribs.length ? " " + Object.entries(e.attribs).map(([e, t]) => t === "" ? e : `${e}=${t.replace(/"/g, "&quot;")}`).join(" ") : "";
	return `<${e.name}${t}>`;
}
function __(e) {
	return `</${e.name}>`;
}
function v_(e, t, n, r) {
	n.startNoWrap(), n.addLiteral(g_(e)), n.stopNoWrap(), t(e.children, n), n.startNoWrap(), n.addLiteral(__(e)), n.stopNoWrap();
}
function y_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), n.startNoWrap(), n.addLiteral(g_(e)), n.stopNoWrap(), t(e.children, n), n.startNoWrap(), n.addLiteral(__(e)), n.stopNoWrap(), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function b_(e, t, n, r) {
	n.startNoWrap(), n.addLiteral(Bg(e, { decodeEntities: n.options.decodeEntities })), n.stopNoWrap();
}
function x_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), n.startNoWrap(), n.addLiteral(Bg(e, { decodeEntities: n.options.decodeEntities })), n.stopNoWrap(), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function S_(e, t, n, r) {
	n.addLiteral(r.prefix || ""), t(e.children, n), n.addLiteral(r.suffix || "");
}
function C_(e, t) {
	return e[t] || (e[t] = []), e[t];
}
function w_(e, t = 0) {
	for (; e[t];) t++;
	return t;
}
function T_(e, t) {
	for (let n = 0; n < t; n++) {
		let t = C_(e, n);
		for (let r = 0; r < n; r++) {
			let i = C_(e, r);
			if (t[r] || i[n]) {
				let e = t[r];
				t[r] = i[n], i[n] = e;
			}
		}
	}
}
function E_(e, t, n, r) {
	for (let i = 0; i < e.rowspan; i++) {
		let a = C_(t, n + i);
		for (let t = 0; t < e.colspan; t++) a[r + t] = e;
	}
}
function D_(e, t) {
	return e[t] === void 0 && (e[t] = t === 0 ? 0 : 1 + D_(e, t - 1)), e[t];
}
function O_(e, t, n, r) {
	e[t + n] = Math.max(D_(e, t + n), D_(e, t) + r);
}
function k_(e, t, n) {
	let r = [], i = 0, a = e.length, o = [0];
	for (let n = 0; n < a; n++) {
		let a = C_(r, n), s = e[n], c = 0;
		for (let e = 0; e < s.length; e++) {
			let i = s[e];
			c = w_(a, c), E_(i, r, n, c), c += i.colspan, i.lines = i.text.split("\n");
			let l = i.lines.length;
			O_(o, n, i.rowspan, l + t);
		}
		i = a.length > i ? a.length : i;
	}
	T_(r, a > i ? a : i);
	let s = [], c = [0];
	for (let e = 0; e < i; e++) {
		let t = 0, i, l = Math.min(a, r[e].length);
		for (; t < l;) if (i = r[e][t], i) {
			if (!i.rendered) {
				let r = 0;
				for (let n = 0; n < i.lines.length; n++) {
					let a = i.lines[n], l = o[t] + n;
					s[l] = (s[l] || "").padEnd(c[e]) + a, r = a.length > r ? a.length : r;
				}
				O_(c, e, i.colspan, r + n), i.rendered = !0;
			}
			t += i.rowspan;
		} else {
			let e = o[t];
			s[e] = s[e] || "", t++;
		}
	}
	return s.join("\n");
}
function A_(e, t, n, r) {
	n.addLineBreak();
}
function j_(e, t, n, r) {
	n.addWordBreakOpportunity();
}
function M_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), n.addInline("-".repeat(r.length || n.options.wordwrap || 40)), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function N_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), t(e.children, n), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function P_(e, t, n, r) {
	n.openBlock({
		isPre: !0,
		leadingLineBreaks: r.leadingLineBreaks || 2
	}), t(e.children, n), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function F_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks || 2 }), r.uppercase === !1 ? t(e.children, n) : (n.pushWordTransform((e) => e.toUpperCase()), t(e.children, n), n.popWordTransform()), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks || 2 });
}
function I_(e, t, n, r) {
	n.openBlock({
		leadingLineBreaks: r.leadingLineBreaks || 2,
		reservedLineLength: 2
	}), t(e.children, n), n.closeBlock({
		trailingLineBreaks: r.trailingLineBreaks || 2,
		blockTransform: (e) => (r.trimEmptyLines === !1 ? e : Yg(e, "\n")).split("\n").map((e) => "> " + e).join("\n")
	});
}
function L_(e, t) {
	if (!t) return e;
	let n = typeof t[0] == "string" ? t[0] : "[", r = typeof t[1] == "string" ? t[1] : "]";
	return n + e + r;
}
function R_(e, t, n, r, i) {
	let a = typeof t == "function" ? t(e, r, i) : e;
	return a[0] === "/" && n ? Xg(n, "/") + a : a;
}
function z_(e, t, n, r) {
	let i = e.attribs || {}, a = i.alt ? i.alt : "", o = i.src ? R_(i.src, r.pathRewrite, r.baseUrl, n.metadata, e) : "", s = o ? a ? a + " " + L_(o, r.linkBrackets) : L_(o, r.linkBrackets) : a;
	n.addInline(s, { noWordTransform: !0 });
}
function B_(e, t, n, r) {
	function i() {
		if (r.ignoreHref || !e.attribs || !e.attribs.href) return "";
		let t = e.attribs.href.replace(/^mailto:/, "");
		return r.noAnchorUrl && t[0] === "#" ? "" : (t = R_(t, r.pathRewrite, r.baseUrl, n.metadata, e), t);
	}
	let a = i();
	if (!a) t(e.children, n);
	else {
		let i = "";
		n.pushWordTransform((e) => (e && (i += e), e)), t(e.children, n), n.popWordTransform(), r.hideLinkHrefIfSameAsText && a === i || n.addInline(i ? " " + L_(a, r.linkBrackets) : a, { noWordTransform: !0 });
	}
}
function V_(e, t, n, r, i) {
	let a = $g(e, ["parent", "name"]) === "li", o = 0, s = (e.children || []).filter((e) => e.type !== "text" || !/^\s*$/.test(e.data)).map(function(e) {
		if (e.name !== "li") return {
			node: e,
			prefix: ""
		};
		let t = a ? i().trimStart() : i();
		return t.length > o && (o = t.length), {
			node: e,
			prefix: t
		};
	});
	if (s.length) {
		n.openList({
			interRowLineBreaks: 1,
			leadingLineBreaks: a ? 1 : r.leadingLineBreaks || 2,
			maxPrefixLength: o,
			prefixAlign: "left"
		});
		for (let { node: e, prefix: r } of s) n.openListItem({ prefix: r }), t([e], n), n.closeListItem();
		n.closeList({ trailingLineBreaks: a ? 1 : r.trailingLineBreaks || 2 });
	}
}
function H_(e, t, n, r) {
	let i = r.itemPrefix || " * ";
	return V_(e, t, n, r, () => i);
}
function U_(e, t, n, r) {
	let i = Number(e.attribs.start || "1"), a = W_(e.attribs.type);
	return V_(e, t, n, r, () => " " + a(i++) + ". ");
}
function W_(e = "1") {
	switch (e) {
		case "a": return (e) => e_(e, "a");
		case "A": return (e) => e_(e, "A");
		case "i": return (e) => t_(e).toLowerCase();
		case "I": return (e) => t_(e);
		default: return (e) => e.toString();
	}
}
function G_(e) {
	let t = [], n = [];
	for (let r of e) r.startsWith(".") ? t.push(r.substring(1)) : r.startsWith("#") && n.push(r.substring(1));
	return {
		classes: t,
		ids: n
	};
}
function K_(e, t) {
	if (t === !0) return !0;
	if (!e) return !1;
	let { classes: n, ids: r } = G_(t), i = (e.class || "").split(" "), a = (e.id || "").split(" ");
	return i.some((e) => n.includes(e)) || a.some((e) => r.includes(e));
}
function q_(e, t, n, r) {
	return K_(e.attribs, n.options.tables) ? Y_(e, t, n, r) : J_(e, t, n, r);
}
function J_(e, t, n, r) {
	n.openBlock({ leadingLineBreaks: r.leadingLineBreaks }), t(e.children, n), n.closeBlock({ trailingLineBreaks: r.trailingLineBreaks });
}
function Y_(e, t, n, r) {
	n.openTable(), e.children.forEach(a), n.closeTable({
		tableToString: (e) => k_(e, r.rowSpacing ?? 0, r.colSpacing ?? 3),
		leadingLineBreaks: r.leadingLineBreaks,
		trailingLineBreaks: r.trailingLineBreaks
	});
	function i(e) {
		let i = +$g(e, ["attribs", "colspan"]) || 1, a = +$g(e, ["attribs", "rowspan"]) || 1;
		n.openTableCell({ maxColumnWidth: r.maxColumnWidth }), t(e.children, n), n.closeTableCell({
			colspan: i,
			rowspan: a
		});
	}
	function a(e) {
		if (e.type !== "tag") return;
		let t = r.uppercaseHeaderCells === !1 ? i : (e) => {
			n.pushWordTransform((e) => e.toUpperCase()), i(e), n.popWordTransform();
		};
		switch (e.name) {
			case "thead":
			case "tbody":
			case "tfoot":
			case "center":
				e.children.forEach(a);
				return;
			case "tr":
				n.openTableRow();
				for (let n of e.children) if (n.type === "tag") switch (n.name) {
					case "th":
						t(n);
						break;
					case "td":
						i(n);
						break;
				}
				n.closeTableRow();
				break;
		}
	}
}
function X_(e = {}) {
	return e = (0, t9.default)(d9, e, {
		arrayMerge: f9,
		customMerge: (e) => e === "selectors" ? p9 : void 0
	}), e.formatters = Object.assign({}, l9, u9, e.formatters), e.selectors = Qg(e.selectors, ((e) => e.selector)), Q_(e), o_(e);
}
function Z_(e, t = {}, n = void 0) {
	return X_(t)(e, n);
}
function Q_(e) {
	if (e.tags) {
		let t = Object.entries(e.tags).map(([e, t]) => ({
			...t,
			selector: e || "*"
		}));
		e.selectors.push(...t), e.selectors = Qg(e.selectors, ((e) => e.selector));
	}
	function t(e, t, n) {
		let r = t.pop();
		for (let n of t) {
			let t = e[n];
			t || (t = {}, e[n] = t), e = t;
		}
		e[r] = n;
	}
	if (e.baseElement) {
		let n = e.baseElement;
		t(e, ["baseElements", "selectors"], Array.isArray(n) ? n : [n]);
	}
	e.returnDomByDefault !== void 0 && t(e, ["baseElements", "returnDomByDefault"], e.returnDomByDefault);
	for (let n of e.selectors) n.format === "anchor" && $g(n, ["options", "noLinkBrackets"]) && t(n, ["options", "linkBrackets"], !1);
}
//#endregion
//#region ../../node_modules/@react-email/render/dist/browser/index.mjs
function $_(e, t) {
	if (Array.isArray(e)) return e.map((e) => $_(e, t));
	if (typeof e == "object") {
		if (e.type === "group") return {
			...e,
			contents: $_(e.contents, t),
			expandedStates: $_(e.expandedStates, t)
		};
		if ("contents" in e) return {
			...e,
			contents: $_(e.contents, t)
		};
		if ("parts" in e) return {
			...e,
			parts: $_(e.parts, t)
		};
		if (e.type === "if-break") return {
			...e,
			breakContents: $_(e.breakContents, t),
			flatContents: $_(e.flatContents, t)
		};
	}
	return t(e);
}
function Aee(e, t) {
	return Z_(e, {
		selectors: m9,
		wordwrap: !1,
		...t
	});
}
function jee(e, t) {
	return g9[e].includes(t);
}
function Mee(e, t, n, r, i) {
	return {
		unitId: e,
		listingId: i?.listingId,
		action: t,
		previousStatus: i?.previousStatus,
		newStatus: n,
		userId: r,
		reason: i?.reason,
		timestamp: /* @__PURE__ */ new Date()
	};
}
function Nee(e, t, n = "validation") {
	let r = t.filter((t) => e[t] === void 0 || e[t] === null || e[t] === "");
	if (r.length > 0) throw new y9(_9.VALIDATION_ERROR, `Missing required fields in ${n}: ${r.join(", ")}`, {
		severity: v9.LOW,
		userMessage: `Please provide the following required fields: ${r.join(", ")}`,
		technicalDetails: {
			missingFields: r,
			providedData: e
		},
		retryable: !1
	});
}
function Pee(e, t) {
	return new y9(_9.NOT_FOUND_ERROR, `${e} not found: ${t}`, {
		severity: v9.LOW,
		userMessage: `The requested ${e.toLowerCase()} could not be found.`,
		technicalDetails: {
			resourceType: e,
			resourceId: t
		},
		retryable: !1
	});
}
function Fee(e, t, n) {
	return new y9(_9.CONFLICT_ERROR, `Cannot ${e}: current state is ${t}, required state is ${n}`, {
		severity: v9.MEDIUM,
		userMessage: "This action cannot be performed in the current state. Please refresh and try again.",
		technicalDetails: {
			operation: e,
			currentState: t,
			requiredState: n
		},
		retryable: !1
	});
}
async function ev() {
	console.log("🤖 Starting lease automation...");
	try {
		await tv(), await nv(), await rv(), await iv(), await av(), await ov(), console.log("✅ Lease automation completed");
	} catch (e) {
		console.error("❌ Lease automation error:", e);
	}
}
async function tv() {
	let e = /* @__PURE__ */ new Date(), t = new Date(e);
	t.setDate(e.getDate() + w9.expiryWarningDays);
	let n = await p.lease.findMany({
		where: {
			endDate: {
				gte: e,
				lte: t
			},
			leaseStatus: "ACTIVE"
		},
		include: {
			tenant: !0,
			application: !0,
			property: { include: { manager: !0 } }
		}
	});
	for (let e of n) await p.leaseNotification.findFirst({ where: {
		leaseId: e.id,
		notificationType: "EXPIRY_WARNING",
		sentAt: { not: null }
	} }) || (await p.leaseNotification.create({ data: {
		id: (0, nt.randomUUID)(),
		leaseId: e.id,
		notificationType: "EXPIRY_WARNING",
		recipientEmail: e.tenant?.email || e.application?.email || "",
		recipientRole: "BOTH",
		subject: "Lease Expiring Soon",
		message: `Your lease at ${e.property.name || "property"} expires on ${e.endDate.toLocaleDateString()}. Please contact us regarding renewal.`,
		scheduledFor: /* @__PURE__ */ new Date(),
		status: "PENDING"
	} }), await p.lease.update({
		where: { id: e.id },
		data: { leaseStatus: "EXPIRING_SOON" }
	}));
	console.log(`📅 Checked ${n.length} expiring leases`);
}
async function nv() {
	let e = /* @__PURE__ */ new Date(), t = new Date(e);
	t.setDate(e.getDate() + w9.renewalNoticeDays);
	let n = await p.lease.findMany({
		where: {
			endDate: {
				gte: e,
				lte: t
			},
			hasRenewalOption: !0,
			leaseStatus: { in: ["ACTIVE", "EXPIRING_SOON"] }
		},
		include: {
			tenant: !0,
			application: !0,
			property: { include: { manager: !0 } }
		}
	});
	for (let e of n) {
		let t = await p.leaseRenewal.findFirst({ where: {
			leaseId: e.id,
			status: { in: ["PENDING", "NOTICE_SENT"] }
		} }), n = e.tenant?.email || e.application?.email || "";
		if (!t && e.autoRenew) {
			let t = new Date(e.endDate);
			t.setMonth(t.getMonth() + (e.renewalTermMonths || 12));
			let r = e.rentAmount;
			e.renewalRentIncrease && (r = e.rentAmount * (1 + e.renewalRentIncrease / 100)), await p.leaseRenewal.create({ data: {
				id: (0, nt.randomUUID)(),
				leaseId: e.id,
				renewalType: "AUTO",
				oldEndDate: e.endDate,
				newEndDate: t,
				oldRentAmount: e.rentAmount,
				newRentAmount: r,
				status: "NOTICE_SENT"
			} }), await p.leaseNotification.create({ data: {
				id: (0, nt.randomUUID)(),
				leaseId: e.id,
				notificationType: "RENEWAL_REMINDER",
				recipientEmail: n,
				recipientRole: "TENANT",
				subject: "Automatic Lease Renewal Notice",
				message: `Your lease will automatically renew on ${e.endDate.toLocaleDateString()}. New end date: ${t.toLocaleDateString()}, New rent: ${r}`,
				scheduledFor: /* @__PURE__ */ new Date(),
				status: "PENDING"
			} });
		} else t || await p.leaseNotification.create({ data: {
			id: (0, nt.randomUUID)(),
			leaseId: e.id,
			notificationType: "RENEWAL_REMINDER",
			recipientEmail: n,
			recipientRole: "BOTH",
			subject: "Lease Renewal Option Available",
			message: `Your lease renewal option is now available. Current lease ends ${e.endDate.toLocaleDateString()}.`,
			scheduledFor: /* @__PURE__ */ new Date(),
			status: "PENDING"
		} });
	}
	console.log(`🔄 Processed ${n.length} renewable leases`);
}
async function rv() {
	let e = /* @__PURE__ */ new Date(), t = new Date(e);
	t.setDate(e.getDate() + w9.escalationNoticeDays);
	let n = await p.lease.findMany({
		where: {
			hasRentEscalation: !0,
			nextEscalationDate: {
				gte: e,
				lte: t
			},
			leaseStatus: "ACTIVE"
		},
		include: {
			tenant: !0,
			application: !0
		}
	});
	for (let e of n) {
		let t = e.rentAmount;
		e.escalationType === "PERCENTAGE" && e.escalationRate ? t = e.rentAmount * (1 + e.escalationRate / 100) : e.escalationType === "FIXED" && e.escalationRate && (t = e.rentAmount + e.escalationRate), await p.rentEscalation.create({ data: {
			id: (0, nt.randomUUID)(),
			leaseId: e.id,
			effectiveDate: e.nextEscalationDate,
			previousRent: e.rentAmount,
			newRent: t,
			escalationType: e.escalationType,
			escalationRate: e.escalationRate,
			appliedBy: "SYSTEM",
			calculationNote: "Automatic escalation"
		} });
		let n = e.tenant?.email || e.application?.email || "";
		await p.leaseNotification.create({ data: {
			id: (0, nt.randomUUID)(),
			leaseId: e.id,
			notificationType: "ESCALATION_NOTICE",
			recipientEmail: n,
			recipientRole: "TENANT",
			subject: "Rent Escalation Notice",
			message: `Your rent will increase from ${e.rentAmount} to ${t} effective ${e.nextEscalationDate?.toLocaleDateString()}`,
			scheduledFor: /* @__PURE__ */ new Date(),
			status: "PENDING"
		} });
	}
	console.log(`📈 Processed ${n.length} rent escalations`);
}
async function iv() {
	let e = await p.leaseNotification.findMany({
		where: {
			status: "PENDING",
			scheduledFor: { lte: /* @__PURE__ */ new Date() }
		},
		include: { Lease: { include: { property: !0 } } }
	});
	for (let t of e) try {
		await h9({
			to: t.recipientEmail || "unknown@example.com",
			subject: t.subject || "No Subject",
			text: t.message || "No message available"
		}), await p.leaseNotification.update({
			where: { id: t.id },
			data: {
				status: "SENT",
				sentAt: /* @__PURE__ */ new Date()
			}
		});
	} catch (e) {
		console.error(`Failed to send notification ${t.id}:`, e), await p.leaseNotification.update({
			where: { id: t.id },
			data: { status: "FAILED" }
		});
	}
	console.log(`📧 Sent ${e.length} notifications`);
}
async function av() {
	let e = /* @__PURE__ */ new Date(), t = new Date(e);
	t.setDate(e.getDate() - 30);
	let n = await p.lease.findMany({
		where: {
			OR: [{ complianceCheckDate: null }, { complianceCheckDate: { lt: t } }],
			leaseStatus: "ACTIVE"
		},
		include: { property: { include: { manager: { include: { user: !0 } } } } }
	});
	for (let e of n) {
		let t = e.property.manager?.user?.email || "";
		await p.leaseNotification.create({ data: {
			id: (0, nt.randomUUID)(),
			leaseId: e.id,
			notificationType: "COMPLIANCE_CHECK",
			recipientEmail: t,
			recipientRole: "LANDLORD",
			subject: "Lease Compliance Check Required",
			message: `Lease ${e.id} requires compliance review`,
			scheduledFor: /* @__PURE__ */ new Date(),
			status: "PENDING"
		} });
	}
	console.log(`✅ Marked ${n.length} leases for compliance check`);
}
async function ov() {
	let e = /* @__PURE__ */ new Date(), t = await p.lease.findMany({
		where: {
			endDate: { lt: e },
			leaseStatus: { in: ["ACTIVE", "EXPIRING_SOON"] }
		},
		select: {
			id: !0,
			leaseStatus: !0
		}
	});
	for (let e of t) {
		let t = e.leaseStatus;
		await p.lease.update({
			where: { id: e.id },
			data: { leaseStatus: "EXPIRED" }
		});
		try {
			await C9.handleLeaseStatusChange(e.id, "EXPIRED", t, "system");
		} catch (t) {
			console.error(`Error handling listing integration for expired lease ${e.id}:`, t);
		}
	}
	let n = await p.lease.findMany({
		where: {
			startDate: { lte: e },
			leaseStatus: "SIGNED",
			landlordSignedAt: { not: null },
			tenantSignedAt: { not: null }
		},
		select: {
			id: !0,
			leaseStatus: !0
		}
	});
	for (let e of n) {
		let t = e.leaseStatus;
		await p.lease.update({
			where: { id: e.id },
			data: { leaseStatus: "ACTIVE" }
		});
		try {
			await C9.handleLeaseStatusChange(e.id, "ACTIVE", t, "system");
		} catch (t) {
			console.error(`Error handling listing integration for activated lease ${e.id}:`, t);
		}
	}
	console.log(`📊 Updated lease statuses: ${t.length} expired, ${n.length} activated`);
}
//#endregion
//#region src/lib/amendment-utils.ts
function sv(e, t, n) {
	let r = {};
	switch (t) {
		case "RENT_CHANGE":
			r.rentAmount = e.rentAmount, r.paymentDueDay = e.paymentDueDay;
			break;
		case "TERM_EXTENSION":
			r.endDate = e.endDate, r.leaseTerm = e.leaseTerm;
			break;
		case "UTILITY_CHANGE":
			r.tenantPaysElectric = e.tenantPaysElectric, r.tenantPaysWater = e.tenantPaysWater, r.tenantPaysTrash = e.tenantPaysTrash, r.tenantPaysInternet = e.tenantPaysInternet;
			break;
		case "RESPONSIBILITY_CHANGE":
			r.tenantResponsibilities = e.tenantResponsibilities, r.landlordResponsibilities = e.landlordResponsibilities;
			break;
		case "TENANT_CHANGE":
			r.tenantId = e.tenantId;
			break;
		case "DEPOSIT_CHANGE":
			r.securityDeposit = e.securityDeposit;
			break;
		case "FEE_STRUCTURE_CHANGE":
			r.lateFeeFlat = e.lateFeeFlat, r.lateFeeDaily = e.lateFeeDaily, r.gracePeriodDays = e.gracePeriodDays;
			break;
		default: Object.keys(n).forEach((t) => {
			t in e && (r[t] = e[t]);
		});
	}
	return r;
}
function Iee(e, t) {
	let n = new Date(e);
	if (t === "ANNUAL") n.setFullYear(n.getFullYear() + 1);
	else if (t === "BIANNUAL") n.setMonth(n.getMonth() + 6);
	else return null;
	return n;
}
//#endregion
export { T9 as LeaseAmendmentError, E9 as LeaseAmendmentService, P9 as LeaseDetailsError, F9 as LeaseDetailsService, G9 as LeaseDocumentError, K9 as LeaseDocumentService, S9 as LeaseListingIntegration, L9 as LeaseManagementError, R9 as LeaseManagementService, b9 as LeaseNotificationService, U9 as LeasePendingService, k9 as LeaseRenewalEscalationService, Z9 as LeaseSigningError, Q9 as LeaseSigningService, B9 as LeaseStatusChangesError, V9 as LeaseStatusChangesService, J9 as LeaseStatusError, Y9 as LeaseStatusService, j9 as LeaseWorkflowActionError, O9 as LeaseWorkflowError, M9 as LeaseWorkflowService, sv as capturePreviousValues, D9 as leaseAmendmentService, I9 as leaseDetailsService, q9 as leaseDocumentService, C9 as leaseListingIntegration, z9 as leaseManagementService, x9 as leaseNotificationService, W9 as leasePendingService, A9 as leaseRenewalEscalationService, $9 as leaseSigningService, H9 as leaseStatusChangesService, X9 as leaseStatusService, N9 as leaseWorkflowService, ev as runLeaseAutomation };
var Lee, Ree, zee, Bee, Vee, Hee, Uee, Wee, Gee, Kee, qee, Jee, Yee, Xee, Zee, Qee, $ee, ete, tte, nte, rte, ite, ate, ote, ste, cte, lte, ute, dte, fte, pte, mte, hte, gte, _te, vte, yte, bte, xte, Ste, Cte, wte, Tte, Ete, Dte, Ote, kte, Ate, jte, Mte, Nte, Pte, Fte, Ite, Lte, Rte, zte, Bte, Vte, Hte, cv, Ute, Wte, Gte, Kte, qte, lv, uv, Jte, Yte, Xte, Zte, Qte, $te, ene, tne, nne, rne, ine, ane, one, sne, cne, lne, une, dne, fne, pne, mne, hne, gne, _ne, vne, yne, bne, xne, Sne, Cne, wne, Tne, Ene, Dne, One, kne, Ane, jne, Mne, Nne, Pne, dv, Fne, Ine, Lne, Rne, zne, fv, Bne, pv, Vne, Hne, Une, Wne, Gne, Kne, mv, qne, hv, gv, _v, Jne, vv, yv, bv, Yne, xv, Sv, Cv, wv, Tv, Ev, Dv, Xne, Zne, Qne, $ne, ere, tre, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv, Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry, iy, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy, _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny, Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb, Cb, wb, Tb, Eb, Db, Ob, kb, Ab, jb, Mb, Nb, Pb, Fb, Ib, Lb, Rb, zb, Bb, Vb, Hb, Ub, Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb, Qb, $b, ex, tx, nx, rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx, Ex, Dx, Ox, kx, Ax, jx, Mx, Nx, Px, Fx, Ix, Lx, Rx, zx, Bx, Vx, Hx, Ux, Wx, Gx, Kx, qx, Jx, Yx, Xx, Zx, Qx, $x, eS, tS, nS, rS, iS, aS, oS, sS, cS, lS, uS, dS, fS, pS, mS, hS, gS, _S, vS, yS, bS, xS, SS, CS, wS, TS, ES, DS, OS, kS, AS, jS, MS, NS, PS, FS, IS, LS, RS, zS, BS, VS, HS, US, WS, GS, KS, qS, JS, YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC, xC, SC, CC, wC, TC, EC, DC, OC, kC, AC, jC, MC, NC, PC, FC, IC, LC, RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC, YC, XC, ZC, QC, $C, ew, V, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, H, pw, mw, hw, gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw, Ew, Dw, Ow, kw, Aw, jw, Mw, Nw, Pw, Fw, Iw, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw, Kw, qw, Jw, Yw, Xw, Zw, Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT, ET, DT, OT, kT, AT, jT, MT, NT, PT, FT, IT, LT, RT, zT, BT, VT, HT, UT, WT, GT, KT, qT, JT, YT, XT, ZT, QT, $T, eE, tE, nE, rE, iE, aE, oE, sE, cE, lE, uE, dE, fE, pE, mE, hE, gE, _E, vE, yE, bE, xE, SE, CE, wE, TE, EE, DE, OE, kE, AE, jE, ME, NE, PE, FE, IE, LE, RE, zE, BE, VE, HE, UE, WE, GE, KE, qE, JE, YE, XE, ZE, QE, $E, eD, tD, nD, rD, iD, aD, oD, sD, cD, lD, uD, dD, fD, pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD, ID, LD, RD, zD, BD, VD, HD, UD, WD, GD, KD, qD, JD, YD, XD, ZD, QD, $D, eO, tO, nO, rO, iO, aO, oO, sO, cO, lO, uO, dO, fO, pO, mO, hO, gO, _O, vO, yO, bO, xO, SO, CO, wO, TO, EO, DO, OO, kO, AO, jO, MO, NO, PO, FO, IO, LO, RO, zO, BO, VO, HO, UO, WO, GO, KO, qO, JO, YO, XO, ZO, QO, $O, ek, tk, nk, rk, ik, ak, ok, sk, ck, lk, uk, dk, fk, pk, mk, hk, gk, _k, vk, yk, bk, xk, Sk, Ck, wk, Tk, Ek, Dk, Ok, kk, Ak, jk, Mk, Nk, Pk, Fk, Ik, Lk, Rk, zk, Bk, Vk, Hk, Uk, Wk, Gk, Kk, qk, Jk, Yk, Xk, Zk, Qk, $k, eA, tA, nA, rA, iA, aA, oA, sA, cA, lA, uA, dA, fA, pA, mA, hA, gA, _A, vA, yA, bA, xA, SA, CA, wA, TA, EA, DA, OA, kA, AA, jA, MA, NA, PA, FA, IA, LA, RA, zA, BA, VA, HA, UA, WA, GA, KA, qA, JA, YA, XA, ZA, QA, $A, ej, tj, nj, rj, ij, aj, oj, sj, cj, lj, uj, dj, fj, pj, mj, hj, gj, _j, vj, yj, bj, xj, Sj, Cj, wj, Tj, Ej, Dj, Oj, kj, Aj, jj, Mj, Nj, Pj, Fj, Ij, Lj, Rj, zj, Bj, Vj, Hj, Uj, Wj, Gj, Kj, qj, Jj, Yj, Xj, Zj, Qj, $j, eM, tM, nM, rM, iM, aM, oM, sM, cM, lM, uM, dM, fM, pM, mM, hM, gM, _M, vM, yM, bM, xM, SM, CM, wM, TM, EM, DM, OM, kM, AM, jM, MM, NM, PM, FM, IM, LM, RM, zM, BM, VM, HM, UM, WM, GM, KM, qM, JM, YM, XM, ZM, QM, $M, eN, tN, nN, rN, iN, aN, oN, sN, cN, lN, uN, dN, fN, pN, mN, hN, gN, _N, vN, yN, bN, xN, SN, CN, wN, TN, EN, DN, ON, kN, AN, jN, MN, NN, PN, FN, IN, LN, RN, zN, BN, VN, HN, UN, WN, GN, KN, qN, JN, YN, XN, ZN, QN, $N, eP, tP, nP, rP, iP, aP, oP, sP, cP, lP, uP, dP, fP, pP, mP, hP, gP, _P, vP, yP, bP, xP, SP, CP, wP, TP, EP, DP, OP, kP, AP, jP, MP, NP, PP, FP, IP, LP, RP, zP, BP, VP, HP, UP, WP, GP, KP, qP, JP, YP, XP, ZP, QP, $P, eF, tF, nF, rF, iF, aF, oF, sF, cF, lF, uF, dF, fF, pF, mF, hF, gF, _F, vF, yF, bF, xF, SF, CF, wF, TF, EF, DF, OF, kF, AF, jF, MF, NF, PF, FF, IF, LF, RF, zF, BF, VF, HF, UF, WF, GF, KF, qF, JF, YF, XF, ZF, QF, $F, eI, tI, nI, rI, iI, aI, oI, sI, cI, lI, uI, dI, fI, pI, mI, hI, gI, _I, vI, yI, bI, xI, SI, CI, wI, TI, EI, DI, OI, kI, AI, jI, MI, NI, PI, FI, II, LI, RI, zI, BI, VI, HI, UI, WI, GI, KI, qI, JI, YI, XI, ZI, QI, $I, eL, tL, nL, rL, iL, aL, oL, sL, cL, lL, uL, dL, fL, pL, mL, hL, gL, _L, vL, yL, bL, xL, SL, CL, wL, TL, EL, DL, OL, kL, AL, jL, ML, NL, PL, FL, IL, LL, RL, zL, BL, VL, HL, UL, WL, GL, KL, qL, JL, YL, XL, ZL, QL, $L, eR, tR, nR, rR, iR, aR, oR, sR, cR, lR, uR, dR, fR, pR, mR, hR, gR, _R, vR, yR, bR, xR, SR, CR, wR, TR, ER, DR, OR, kR, AR, jR, MR, NR, PR, FR, IR, LR, RR, zR, BR, VR, HR, UR, WR, GR, KR, qR, JR, YR, XR, ZR, QR, $R, ez, tz, nz, rz, iz, az, oz, sz, cz, lz, uz, dz, fz, pz, mz, hz, gz, _z, vz, yz, bz, xz, Sz, Cz, wz, Tz, Ez, Dz, Oz, kz, Az, jz, Mz, Nz, Pz, Fz, Iz, Lz, Rz, zz, Bz, Vz, Hz, Uz, Wz, Gz, Kz, qz, Jz, Yz, Xz, Zz, Qz, $z, eB, tB, nB, rB, iB, aB, oB, sB, cB, lB, uB, dB, fB, pB, mB, hB, gB, _B, vB, yB, bB, xB, SB, CB, wB, TB, EB, DB, OB, kB, AB, jB, MB, NB, PB, FB, IB, LB, RB, zB, BB, VB, HB, UB, WB, GB, KB, qB, JB, YB, XB, ZB, QB, $B, eV, tV, nV, rV, iV, aV, oV, sV, cV, lV, uV, dV, fV, pV, mV, hV, gV, _V, vV, yV, bV, xV, SV, CV, wV, TV, EV, DV, OV, kV, AV, jV, MV, NV, PV, FV, IV, LV, RV, zV, BV, VV, HV, UV, WV, GV, KV, qV, JV, YV, XV, ZV, QV, $V, eH, tH, nH, rH, iH, aH, oH, sH, cH, lH, uH, dH, fH, pH, mH, hH, gH, _H, vH, yH, bH, xH, SH, CH, wH, TH, EH, DH, OH, kH, AH, jH, MH, NH, PH, FH, IH, LH, RH, zH, BH, VH, HH, UH, WH, GH, KH, qH, JH, YH, XH, ZH, QH, $H, eU, tU, nU, rU, iU, aU, oU, sU, cU, lU, uU, dU, fU, pU, mU, hU, gU, _U, vU, yU, bU, xU, SU, CU, wU, TU, EU, DU, OU, kU, AU, jU, MU, NU, PU, FU, IU, LU, RU, zU, BU, VU, HU, UU, WU, GU, KU, qU, JU, YU, XU, ZU, QU, $U, eW, tW, nW, rW, iW, aW, oW, sW, cW, lW, uW, dW, fW, pW, mW, hW, gW, _W, vW, yW, bW, xW, SW, CW, wW, TW, EW, DW, OW, kW, AW, jW, MW, NW, PW, FW, IW, LW, RW, zW, BW, VW, HW, UW, WW, GW, KW, qW, JW, YW, XW, ZW, QW, $W, eG, tG, nG, rG, iG, aG, oG, sG, cG, lG, uG, dG, fG, pG, mG, hG, gG, _G, vG, yG, bG, xG, SG, CG, wG, TG, EG, DG, OG, kG, AG, jG, MG, NG, PG, FG, IG, LG, RG, zG, BG, VG, HG, UG, WG, GG, KG, qG, JG, YG, XG, ZG, QG, $G, eK, tK, nre, nK, rK, iK, aK, oK, sK, cK, lK, uK, dK, fK, pK, mK, hK, gK, _K, vK, yK, bK, xK, SK, CK, wK, TK, EK, DK, OK, kK, AK, jK, MK, NK, PK, FK, IK, LK, RK, zK, BK, VK, HK, UK, WK, GK, KK, qK, JK, YK, XK, ZK, QK, $K, eq, tq, nq, rq, iq, aq, oq, sq, cq, lq, uq, dq, fq, pq, mq, hq, gq, _q, vq, yq, bq, xq, Sq, Cq, wq, Tq, Eq, Dq, Oq, kq, Aq, jq, Mq, Nq, Pq, Fq, Iq, Lq, Rq, zq, Bq, Vq, Hq, Uq, Wq, Gq, Kq, qq, Jq, Yq, Xq, Zq, Qq, $q, eJ, tJ, nJ, rJ, iJ, aJ, oJ, sJ, cJ, lJ, uJ, dJ, fJ, pJ, mJ, hJ, gJ, _J, vJ, yJ, bJ, xJ, SJ, CJ, wJ, TJ, EJ, DJ, OJ, kJ, AJ, jJ, MJ, NJ, PJ, FJ, IJ, LJ, RJ, zJ, BJ, VJ, HJ, UJ, WJ, GJ, KJ, qJ, JJ, YJ, XJ, ZJ, QJ, $J, eY, tY, nY, rY, iY, aY, oY, sY, cY, lY, uY, dY, fY, pY, mY, hY, gY, _Y, vY, yY, bY, xY, SY, CY, wY, TY, EY, DY, OY, kY, AY, jY, MY, NY, PY, FY, IY, LY, RY, zY, BY, VY, HY, UY, WY, GY, KY, qY, JY, YY, XY, ZY, QY, $Y, eX, tX, nX, rX, iX, aX, oX, sX, cX, lX, uX, U, dX, W, fX, pX, mX, G, K, hX, gX, _X, vX, yX, bX, q, xX, SX, CX, wX, TX, EX, DX, OX, kX, AX, jX, MX, NX, PX, FX, J, IX, LX, RX, zX, BX, VX, HX, UX, WX, GX, KX, qX, JX, YX, XX, ZX, QX, $X, eZ, tZ, nZ, rZ, iZ, aZ, oZ, sZ, cZ, lZ, uZ, dZ, fZ, pZ, mZ, hZ, gZ, _Z, vZ, yZ, bZ, xZ, SZ, CZ, wZ, TZ, EZ, DZ, OZ, kZ, AZ, jZ, MZ, NZ, PZ, FZ, IZ, LZ, RZ, zZ, BZ, VZ, HZ, UZ, WZ, GZ, KZ, qZ, JZ, YZ, XZ, ZZ, QZ, $Z, eQ, tQ, nQ, rQ, iQ, aQ, oQ, sQ, cQ, lQ, uQ, dQ, fQ, pQ, mQ, hQ, gQ, _Q, vQ, yQ, bQ, xQ, SQ, CQ, wQ, TQ, EQ, DQ, OQ, kQ, AQ, jQ, MQ, NQ, PQ, FQ, IQ, LQ, RQ, zQ, BQ, VQ, HQ, UQ, WQ, GQ, KQ, qQ, JQ, YQ, XQ, ZQ, QQ, $Q, e$, t$, n$, r$, i$, a$, o$, s$, c$, l$, u$, d$, f$, p$, m$, h$, g$, _$, v$, y$, b$, x$, S$, C$, w$, T$, E$, D$, O$, k$, A$, j$, M$, N$, P$, F$, I$, L$, R$, z$, B$, V$, H$, U$, W$, G$, K$, q$, J$, Y$, X$, Z$, Q$, $$, e1, t1, n1, r1, i1, a1, o1, s1, c1, l1, u1, d1, f1, p1, m1, h1, g1, _1, v1, y1, b1, x1, S1, C1, w1, T1, E1, D1, O1, k1, A1, j1, M1, N1, P1, F1, I1, L1, R1, z1, B1, V1, H1, U1, W1, G1, K1, q1, J1, Y1, X1, Z1, Q1, $1, e0, t0, n0, r0, i0, a0, o0, s0, c0, l0, u0, d0, f0, p0, m0, h0, g0, _0, v0, y0, b0, x0, S0, C0, w0, T0, E0, D0, O0, k0, A0, j0, M0, N0, P0, F0, I0, L0, R0, z0, B0, V0, H0, U0, W0, G0, K0, q0, J0, Y0, X0, Z0, Q0, $0, e2, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2, f2, p2, m2, h2, g2, _2, v2, y2, b2, x2, S2, C2, w2, T2, E2, D2, O2, k2, A2, j2, M2, N2, P2, F2, I2, L2, R2, z2, B2, V2, H2, U2, W2, Y, G2, X, K2, q2, J2, Y2, X2, Z2, Q2, $2, e4, t4, n4, r4, i4, a4, o4, s4, c4, l4, u4, d4, f4, p4, m4, h4, g4, _4, v4, y4, b4, x4, S4, C4, w4, T4, E4, D4, O4, k4, A4, j4, M4, N4, P4, F4, I4, L4, R4, z4, B4, V4, H4, U4, W4, G4, K4, q4, J4, Y4, X4, Z4, Q4, $4, e3, t3, n3, r3, i3, a3, o3, s3, c3, Z, l3, u3, d3, f3, p3, m3, h3, g3, _3, v3, y3, b3, x3, S3, C3, w3, T3, E3, D3, O3, k3, A3, j3, M3, N3, P3, F3, I3, Q, L3, R3, z3, B3, V3, H3, U3, W3, G3, K3, q3, J3, Y3, X3, Z3, Q3, $3, e6, t6, n6, r6, i6, a6, o6, s6, c6, l6, u6, d6, f6, p6, m6, h6, g6, _6, v6, y6, b6, x6, S6, C6, w6, T6, E6, D6, O6, k6, A6, j6, M6, N6, P6, F6, I6, L6, R6, z6, B6, V6, H6, U6, W6, G6, K6, q6, J6, Y6, X6, Z6, Q6, $6, e8, t8, n8, r8, i8, a8, o8, s8, c8, l8, u8, d8, f8, p8, m8, h8, g8, _8, v8, y8, b8, x8, S8, C8, w8, T8, E8, D8, O8, k8, A8, j8, M8, N8, P8, F8, I8, L8, R8, z8, B8, V8, H8, U8, W8, G8, K8, q8, J8, Y8, X8, Z8, Q8, rre, ire, are, ore, $8, sre, e5, t5, cre, n5, r5, i5, a5, o5, s5, c5, l5, u5, d5, f5, p5, m5, h5, g5, _5, v5, lre, y5, ure, dre, fre, pre, mre, b5, x5, S5, C5, w5, hre, T5, gre, E5, _re, D5, vre, O5, k5, A5, j5, M5, N5, P5, F5, I5, L5, yre, R5, z5, bre, xre, Sre, Cre, B5, V5, H5, wre, U5, W5, G5, K5, q5, J5, Y5, X5, Tre, Z5, Q5, $5, e7, t7, n7, Ere, Dre, Ore, kre, Are, jre, r7, i7, a7, o7, Mre, Nre, Pre, s7, c7, Fre, Ire, Lre, Rre, l7, zre, u7, d7, f7, p7, m7, h7, g7, _7, v7, y7, b7, Bre, Vre, x7, S7, C7, Hre, w7, T7, E7, Ure, D7, O7, Wre, Gre, Kre, qre, Jre, Yre, Xre, Zre, Qre, $re, eie, k7, A7, tie, nie, rie, j7, iie, M7, aie, oie, sie, cie, lie, uie, die, fie, pie, mie, hie, gie, _ie, vie, yie, bie, xie, Sie, Cie, wie, N7, Tie, P7, F7, I7, L7, Eie, Die, Oie, R7, z7, B7, kie, V7, Aie, jie, H7, Mie, Nie, $, Pie, Fie, Iie, Lie, Rie, zie, Bie, Vie, Hie, Uie, Wie, Gie, Kie, qie, U7, W7, G7, K7, Jie, q7, J7, Y7, X7, Z7, Q7, $7, e9, Yie, t9, n9, r9, i9, Xie, Zie, a9, Qie, o9, $ie, eae, s9, tae, nae, c9, l9, u9, d9, rae, f9, p9, iae, aae, oae, m9, sae, cae, lae, uae, h9, dae, fae, pae, mae, hae, gae, _ae, vae, yae, g9, bae, xae, Sae, Cae, wae, Tae, Eae, Dae, Oae, kae, Aae, jae, Mae, _9, v9, y9, Nae, Pae, Fae, Iae, Lae, Rae, zae, Bae, Vae, Hae, Uae, Wae, Gae, Kae, qae, b9, x9, S9, C9, w9, T9, E9, D9, O9, k9, A9, j9, M9, N9, P9, F9, I9, L9, R9, z9, B9, V9, H9, U9, W9, G9, K9, q9, J9, Y9, X9, Z9, Q9, $9;
