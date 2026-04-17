import { jsx as e } from "react/jsx-runtime";
import { prisma as t } from "@rentflow/iam";
//#region \0rolldown/runtime.js
var n = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, a = Object.getOwnPropertyNames, o = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty, c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), l = (e, t) => {
	let n = {};
	for (var i in e) r(n, i, {
		get: e[i],
		enumerable: !0
	});
	return t || r(n, Symbol.toStringTag, { value: "Module" }), n;
}, u = (e, t, n, o) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = a(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !s.call(e, d) && d !== n && r(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(o = i(t, d)) || o.enumerable
	});
	return e;
}, d = (e, t, i) => (i = e == null ? {} : n(o(e)), u(t || !e || !e.__esModule ? r(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)), f = /* @__PURE__ */ c(((e, t) => {
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
		getRuntime: () => ce,
		makeStrictEnum: () => T,
		objectEnumValues: () => C
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
	v = /* @__PURE__ */ new WeakMap(), w(y, "DbNull");
	var b, ee = class extends _ {
		constructor() {
			super(...arguments), u(this, b);
		}
	};
	b = /* @__PURE__ */ new WeakMap(), w(ee, "JsonNull");
	var x, S = class extends _ {
		constructor() {
			super(...arguments), u(this, x);
		}
	};
	x = /* @__PURE__ */ new WeakMap(), w(S, "AnyNull");
	var C = {
		classes: {
			DbNull: y,
			JsonNull: ee,
			AnyNull: S
		},
		instances: {
			DbNull: new y(m),
			JsonNull: new ee(m),
			AnyNull: new S(m)
		}
	};
	function w(e, t) {
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
	var ne = () => globalThis.process?.release?.name === "node", re = () => {
		var e;
		return !!globalThis.Bun || !!((e = globalThis.process?.versions) != null && e.bun);
	}, ie = () => !!globalThis.Deno, E = () => typeof globalThis.Netlify == "object", D = () => typeof globalThis.EdgeRuntime == "object", ae = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function oe() {
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
	var le = 9e15, ue = 1e9, de = "0123456789abcdef", fe = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", pe = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", me = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -le,
		maxE: le,
		crypto: !1
	}, he, ge, O = !0, _e = "[DecimalError] ", ve = _e + "Invalid argument: ", ye = _e + "Precision limit exceeded", be = _e + "crypto unavailable", xe = "[object Decimal]", k = Math.floor, A = Math.pow, Se = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ce = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, we = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Te = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, j = 1e7, M = 7, Ee = 9007199254740991, De = fe.length - 1, Oe = pe.length - 1, N = { toStringTag: xe };
	N.absoluteValue = N.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), L(e);
	}, N.ceil = function() {
		return L(new this.constructor(this), this.e + 1, 2);
	}, N.clampedTo = N.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(ve + t);
		return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
	}, N.comparedTo = N.cmp = function(e) {
		var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
		if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
		if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
		if (c !== l) return c;
		if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
		for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
		return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
	}, N.cosine = N.cos = function() {
		var e, t, n = this, r = n.constructor;
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + M, r.rounding = 1, n = je(r, Ge(r, n)), r.precision = e, r.rounding = t, L(ge == 2 || ge == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, N.cubeRoot = N.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (O = !1, a = u.s * A(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = P(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = A(n, 1 / 3), e = k((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = I(l.plus(u).times(s), l.plus(c), o + 2, 1), P(s.d).slice(0, o) === (n = P(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (L(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (L(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return O = !0, L(r, e, d.rounding, t);
	}, N.decimalPlaces = N.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - k(this.e / M)) * M, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
			n < 0 && (n = 0);
		}
		return n;
	}, N.dividedBy = N.div = function(e) {
		return I(this, new this.constructor(e));
	}, N.dividedToIntegerBy = N.divToInt = function(e) {
		var t = this, n = t.constructor;
		return L(I(t, new n(e), 0, 1, 1), n.precision, n.rounding);
	}, N.equals = N.eq = function(e) {
		return this.cmp(e) === 0;
	}, N.floor = function() {
		return L(new this.constructor(this), this.e + 1, 3);
	}, N.greaterThan = N.gt = function(e) {
		return this.cmp(e) > 0;
	}, N.greaterThanOrEqualTo = N.gte = function(e) {
		var t = this.cmp(e);
		return t == 1 || t === 0;
	}, N.hyperbolicCosine = N.cosh = function() {
		var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
		if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
		if (a.isZero()) return s;
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / We(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = V(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return L(a, o.precision = n, o.rounding = r, !0);
	}, N.hyperbolicSine = N.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = V(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / We(5, e)), i = V(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, L(i, t, n, !0);
	}, N.hyperbolicTangent = N.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, I(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, N.inverseCosine = N.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? B(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? B(t, r, i) : new t(0) : new t(NaN);
	}, N.inverseHyperbolicCosine = N.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, O = !1, n = n.times(n).minus(1).sqrt().plus(n), O = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, N.inverseHyperbolicSine = N.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, O = !1, n = n.times(n).plus(1).sqrt().plus(n), O = !0, r.precision = e, r.rounding = t, n.ln());
	}, N.inverseHyperbolicTangent = N.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? L(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = I(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, N.inverseSine = N.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = B(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, N.inverseTangent = N.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= Oe) return o = B(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= Oe) return o = B(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / M + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (O = !1, t = Math.ceil(s / M), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), O = !0, L(o, u.precision = d, u.rounding = f, !0);
	}, N.isFinite = function() {
		return !!this.d;
	}, N.isInteger = N.isInt = function() {
		return !!this.d && k(this.e / M) > this.d.length - 2;
	}, N.isNaN = function() {
		return !this.s;
	}, N.isNegative = N.isNeg = function() {
		return this.s < 0;
	}, N.isPositive = N.isPos = function() {
		return this.s > 0;
	}, N.isZero = function() {
		return !!this.d && this.d[0] === 0;
	}, N.lessThan = N.lt = function(e) {
		return this.cmp(e) < 0;
	}, N.lessThanOrEqualTo = N.lte = function(e) {
		return this.cmp(e) < 1;
	}, N.logarithm = N.log = function(e) {
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
		if (O = !1, s = d + p, o = ze(l, s), r = t ? Me(u, s + 10) : ze(e, s), c = I(o, r, s, 1), ke(c.d, i = d, f)) do
			if (s += 10, o = ze(l, s), r = t ? Me(u, s + 10) : ze(e, s), c = I(o, r, s, 1), !a) {
				+P(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = L(c, d + 1, 0));
				break;
			}
		while (ke(c.d, i += 10, f));
		return O = !0, L(c, d, f);
	}, N.minus = N.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return O ? L(e, s, c) : e;
		}
		if (n = k(e.e / M), u = k(p.e / M), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / M), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = j - 1;
				--l[i], l[r] += j;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = z(l, n), O ? L(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, N.modulo = N.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? L(new r(n), r.precision, r.rounding) : (O = !1, r.modulo == 9 ? (t = I(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = I(n, e, 0, r.modulo, 1), t = t.times(e), O = !0, n.minus(t));
	}, N.naturalExponential = N.exp = function() {
		return Re(this);
	}, N.naturalLogarithm = N.ln = function() {
		return ze(this);
	}, N.negated = N.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, L(e);
	}, N.plus = N.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), O ? L(e, s, c) : e;
		if (a = k(d.e / M), r = k(e.e / M), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / M), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / j | 0, l[i] %= j;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = z(l, r), O ? L(e, s, c) : e;
	}, N.precision = N.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(ve + e);
		return n.d ? (t = Ne(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, N.round = function() {
		var e = this, t = e.constructor;
		return L(new t(e), e.e + 1, t.rounding);
	}, N.sine = N.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + M, r.rounding = 1, n = Ue(r, Ge(r, n)), r.precision = e, r.rounding = t, L(ge > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, N.squareRoot = N.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (O = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = P(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = k((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(I(o, a, n + 2, 1)).times(.5), P(a.d).slice(0, n) === (t = P(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (L(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (L(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return O = !0, L(r, c, u.rounding, e);
	}, N.tangent = N.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = I(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, L(ge == 2 || ge == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, N.times = N.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = k(u.e / M) + k(e.e / M), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % j | 0, t = s / j | 0;
			a[i] = (a[i] + t) % j | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = z(a, n), O ? L(e, d.precision, d.rounding) : e;
	}, N.toBinary = function(e, t) {
		return Ke(this, 2, e, t);
	}, N.toDecimalPlaces = N.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (F(e, 0, ue), t === void 0 ? t = r.rounding : F(t, 0, 8), L(n, e + n.e + 1, t));
	}, N.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = R(r, !0) : (F(e, 0, ue), t === void 0 ? t = i.rounding : F(t, 0, 8), r = L(new i(r), e + 1, t), n = R(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, N.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = R(i) : (F(e, 0, ue), t === void 0 ? t = a.rounding : F(t, 0, 8), r = L(new a(i), e + i.e + 1, t), n = R(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, N.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Ne(m) - p.e - 1, o = a % M, t.d[0] = A(10, o < 0 ? M + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(ve + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (O = !1, s = new h(P(m)), u = h.precision, h.precision = a = m.length * M * 2; d = I(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = I(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = I(l, r, a, 1).minus(p).abs().cmp(I(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, O = !0, f;
	}, N.toHexadecimal = N.toHex = function(e, t) {
		return Ke(this, 16, e, t);
	}, N.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : F(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (O = !1, n = I(n, e, 0, t, 1).times(e), O = !0, L(n)) : (e.s = n.s, n = e), n;
	}, N.toNumber = function() {
		return +this;
	}, N.toOctal = function(e, t) {
		return Ke(this, 8, e, t);
	}, N.toPower = N.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(A(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return L(s, r, a);
		if (t = k(e.e / M), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= Ee) return i = Fe(c, s, n, r), e.s < 0 ? new c(1).div(i) : L(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = A(+s, l), t = n == 0 || !isFinite(n) ? k(l * (Math.log("0." + P(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (O = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Re(e.times(ze(s, r + n)), r), i.d && (i = L(i, r + 5, 1), ke(i.d, r, a) && (t = r + 10, i = L(Re(e.times(ze(s, t + n)), t), t + 5, 1), +P(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = L(i, r + 1, 0)))), i.s = o, O = !0, c.rounding = a, L(i, r, a));
	}, N.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = R(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (F(e, 1, ue), t === void 0 ? t = i.rounding : F(t, 0, 8), r = L(new i(r), e, t), n = R(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, N.toSignificantDigits = N.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (F(e, 1, ue), t === void 0 ? t = r.rounding : F(t, 0, 8)), L(new r(n), e, t);
	}, N.toString = function() {
		var e = this, t = e.constructor, n = R(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, N.truncated = N.trunc = function() {
		return L(new this.constructor(this), this.e + 1, 1);
	}, N.valueOf = N.toJSON = function() {
		var e = this, t = e.constructor, n = R(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function P(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = M - r.length, n && (a += Pe(n)), a += r;
			o = e[t], r = o + "", n = M - r.length, n && (a += Pe(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function F(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(ve + e);
	}
	function ke(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += M, i = 0) : (i = Math.ceil((t + 1) / M), t %= M), a = A(10, M - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == A(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == A(10, t - 3) - 1, o;
	}
	function Ae(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += de.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function je(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / We(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = V(e, 1, t.times(i), new e(1));
		for (var a = n; a--;) {
			var o = t.times(t);
			t = o.times(o).minus(o).times(8).plus(1);
		}
		return e.precision -= n, t;
	}
	var I = function() {
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
			var l, u, d, f, p, m, h, g, _, v, y, b, ee, x, S, C, w, te, T, ne, re = r.constructor, ie = r.s == i.s ? 1 : -1, E = r.d, D = i.d;
			if (!E || !E[0] || !D || !D[0]) return new re(!r.s || !i.s || (E ? D && E[0] == D[0] : !D) ? NaN : E && E[0] == 0 || !D ? ie * 0 : ie / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = j, p = M, u = k(r.e / p) - k(i.e / p)), T = D.length, w = E.length, _ = new re(ie), v = _.d = [], d = 0; D[d] == (E[d] || 0); d++);
			if (D[d] > (E[d] || 0) && u--, a == null ? (x = a = re.precision, o = re.rounding) : x = s ? a + (r.e - i.e) + 1 : a, x < 0) v.push(1), m = !0;
			else {
				if (x = x / p + 2 | 0, d = 0, T == 1) {
					for (f = 0, D = D[0], x++; (d < w || f) && x--; d++) S = f * c + (E[d] || 0), v[d] = S / D | 0, f = S % D | 0;
					m = f || d < w;
				} else {
					for (f = c / (D[0] + 1) | 0, f > 1 && (D = e(D, f, c), E = e(E, f, c), T = D.length, w = E.length), C = T, y = E.slice(0, T), b = y.length; b < T;) y[b++] = 0;
					ne = D.slice(), ne.unshift(0), te = D[0], D[1] >= c / 2 && ++te;
					do
						f = 0, l = t(D, y, T, b), l < 0 ? (ee = y[0], T != b && (ee = ee * c + (y[1] || 0)), f = ee / te | 0, f > 1 ? (f >= c && (f = c - 1), h = e(D, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, T < g ? ne : D, g, c))) : (f == 0 && (l = f = 1), h = D.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(D, y, T, b), l < 1 && (f++, n(y, T < b ? ne : D, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = E[C] || 0 : (y = [E[C]], b = 1);
					while ((C++ < w || y[0] !== void 0) && x--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, he = m;
			else {
				for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
				_.e = d + u * p - 1, L(_, s ? a + _.e + 1 : a, o, m);
			}
			return _;
		};
	}();
	function L(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor;
		e: if (t != null) {
			if (d = e.d, !d) return e;
			for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
			if (a = t - i, a < 0) a += M, o = t, u = d[f = 0], c = u / A(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / M), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= M, o = a - M + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= M, o = a - M + i, c = o < 0 ? 0 : u / A(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % A(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / A(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = A(10, (M - t % M) % M), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = A(10, M - a), d[f] = o > 0 ? (u / A(10, i - o) % A(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == j && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != j) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return O && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function R(e, t, n) {
		if (!e.isFinite()) return Be(e);
		var r, i = e.e, a = P(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Pe(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Pe(-i - 1) + a, n && (r = n - o) > 0 && (a += Pe(r))) : i >= o ? (a += Pe(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Pe(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Pe(r))), a;
	}
	function z(e, t) {
		var n = e[0];
		for (t *= M; n >= 10; n /= 10) t++;
		return t;
	}
	function Me(e, t, n) {
		if (t > De) throw O = !0, n && (e.precision = n), Error(ye);
		return L(new e(fe), t, 1, !0);
	}
	function B(e, t, n) {
		if (t > Oe) throw Error(ye);
		return L(new e(pe), t, n, !0);
	}
	function Ne(e) {
		var t = e.length - 1, n = t * M + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function Pe(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function Fe(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / M + 4);
		for (O = !1;;) {
			if (n % 2 && (a = a.times(t), qe(a.d, o) && (i = !0)), n = k(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), qe(t.d, o);
		}
		return O = !0, a;
	}
	function Ie(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function Le(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Re(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (O = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(A(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = L(a.times(e), c, 1), n = n.times(++u), s = o.plus(I(a, n, c, 1)), P(s.d).slice(0, c) === P(o.d).slice(0, c)) {
				for (i = d; i--;) o = L(o.times(o), c, 1);
				if (t == null) if (l < 3 && ke(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return L(o, f.precision = m, p, O = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function ze(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (O = !1, u = y) : u = t, _.precision = u += m, n = P(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = P(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Me(_, u + 2, y).times(a + ""), h = ze(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? L(h, y, v, O = !0) : h;
		for (d = h, c = o = h = I(h.minus(1), h.plus(1), u, 1), f = L(h.times(h), u, 1), i = 3;;) {
			if (o = L(o.times(f), u, 1), l = c.plus(I(o, new _(i), u, 1)), P(l.d).slice(0, u) === P(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Me(_, u + 2, y).times(a + ""))), c = I(c, new _(p), u, 1), t == null) if (ke(c.d, u - m, v, s)) _.precision = u += m, l = o = h = I(d.minus(1), d.plus(1), u, 1), f = L(h.times(h), u, 1), i = s = 1;
			else return L(c, _.precision = y, v, O = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function Be(e) {
		return String(e.s * e.s / 0);
	}
	function Ve(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % M, n < 0 && (r += M), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= M; r < i;) e.d.push(+t.slice(r, r += M));
				t = t.slice(r), r = M - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), O && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function He(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Te.test(t)) return Ve(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (Ce.test(t)) n = 16, t = t.toLowerCase();
		else if (Se.test(t)) n = 2;
		else if (we.test(t)) n = 8;
		else throw Error(ve + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Fe(r, new r(n), a, a * 2)), l = Ae(t, n, j), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = z(l, u), e.d = l, O = !1, o && (e = I(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? A(2, c) : Mt.pow(2, c))), O = !0, e);
	}
	function Ue(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : V(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / We(5, n)), t = V(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function V(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / M);
		for (O = !1, c = n.times(n), s = new e(r);;) {
			if (o = I(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = I(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return O = !0, o.d.length = d + 1, o;
	}
	function We(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Ge(e, t) {
		var n, r = t.s < 0, i = B(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return ge = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) ge = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return ge = Ie(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			ge = Ie(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Ke(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (F(n, 1, ue), r === void 0 ? r = p.rounding : F(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = Be(e);
		else {
			for (u = R(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = Ae(R(f), 10, i), f.e = f.d.length), d = Ae(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = I(e, f, n, r, 0, i), d = e.d, a = e.e, l = he), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += de.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = Ae(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += de.charAt(d[o]);
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
	function H(e, t) {
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
	function U(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = B(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? B(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = B(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(I(e, t, a, 1)), t = B(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(I(e, t, a, 1)), n;
	}
	function tt(e) {
		return new this(e).cbrt();
	}
	function nt(e) {
		return L(e = new this(e), e.e + 1, 2);
	}
	function rt(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function it(e) {
		if (!e || typeof e != "object") throw Error(_e + "Object expected");
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
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = me[n]), (r = e[n]) !== void 0) if (k(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(ve + n + ": " + r);
		if (n = "crypto", i && (this[n] = me[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(be);
		else this[n] = !1;
		else throw Error(ve + n + ": " + r);
		return this;
	}
	function at(e) {
		return new this(e).cos();
	}
	function W(e) {
		return new this(e).cosh();
	}
	function ot(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, dt(e)) {
				a.s = e.s, O ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					O ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return Ve(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), Te.test(e) ? Ve(a, e) : He(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Ve(a, e.toString());
			throw Error(ve + e);
		}
		if (i.prototype = N, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = it, i.clone = ot, i.isDecimal = dt, i.abs = Je, i.acos = Ye, i.acosh = Xe, i.add = H, i.asin = Ze, i.asinh = Qe, i.atan = $e, i.atanh = et, i.atan2 = U, i.cbrt = tt, i.ceil = nt, i.clamp = rt, i.cos = at, i.cosh = W, i.div = st, i.exp = ct, i.floor = lt, i.hypot = ut, i.ln = ft, i.log = pt, i.log10 = ht, i.log2 = mt, i.max = gt, i.min = _t, i.mod = vt, i.mul = yt, i.pow = bt, i.random = xt, i.round = St, i.sign = Ct, i.sin = wt, i.sinh = Tt, i.sqrt = Et, i.sub = Dt, i.sum = Ot, i.tan = kt, i.tanh = At, i.trunc = jt, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
	function st(e, t) {
		return new this(e).div(t);
	}
	function ct(e) {
		return new this(e).exp();
	}
	function lt(e) {
		return L(e = new this(e), e.e + 1, 3);
	}
	function ut() {
		var e, t, n = new this(0);
		for (O = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return O = !0, new this(Infinity);
			n = t;
		}
		return O = !0, n.sqrt();
	}
	function dt(e) {
		return e instanceof Mt || e && e.toStringTag === xe || !1;
	}
	function ft(e) {
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
		return Le(this, arguments, -1);
	}
	function _t() {
		return Le(this, arguments, 1);
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
		if (e === void 0 ? e = this.precision : F(e, 1, ue), r = Math.ceil(e / M), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(be);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= M, r && e && (i = A(10, M - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= M) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < M && (n -= M - r);
		}
		return o.e = n, o.d = s, o;
	}
	function St(e) {
		return L(e = new this(e), e.e + 1, this.rounding);
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
		for (O = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return O = !0, L(n, this.precision, this.rounding);
	}
	function kt(e) {
		return new this(e).tan();
	}
	function At(e) {
		return new this(e).tanh();
	}
	function jt(e) {
		return L(e = new this(e), e.e + 1, 1);
	}
	N[Symbol.for("nodejs.util.inspect.custom")] = N.toString, N[Symbol.toStringTag] = "Decimal";
	var Mt = N.constructor = ot(me);
	fe = new Mt(fe), pe = new Mt(pe);
	var Nt = Mt;
})), p = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var { Decimal: t, objectEnumValues: n, makeStrictEnum: r, Public: i, getRuntime: a, skip: o } = f(), s = {};
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
})), m = (/* @__PURE__ */ c(((e, t) => {
	t.exports = p();
})))(), h = new m.PrismaClient(), g = class {
	async checkAccess(e, t, n = 1) {
		let r = /* @__PURE__ */ new Date(), i = new Date(r.getFullYear(), r.getMonth(), 1), a = await h.organization.findUnique({
			where: { id: e },
			include: { plan: { include: { featureLimits: {
				where: { feature: { key: t } },
				include: { feature: !0 }
			} } } }
		});
		if (!a || !a.plan) return {
			allowed: !1,
			remaining: 0,
			reason: "No active subscription plan."
		};
		let o = a.plan.featureLimits[0];
		if (!o) return {
			allowed: !1,
			remaining: 0,
			reason: `Feature ${t} not included in ${a.plan.name} plan.`
		};
		if (o.limit === 0) return {
			allowed: !0,
			remaining: Infinity
		};
		let s = (await h.usageMetric.findUnique({ where: { organizationId_featureKey_periodStart: {
			organizationId: e,
			featureKey: t,
			periodStart: i
		} } }))?.usedCount || 0, c = o.limit - s;
		return s + n > o.limit ? {
			allowed: !1,
			remaining: c,
			limit: o.limit,
			used: s,
			reason: `Limit reached. Your ${a.plan.name} plan allows ${o.limit} ${t} per month. You have used ${s}.`
		} : {
			allowed: !0,
			remaining: c,
			limit: o.limit,
			used: s
		};
	}
	async recordUsage(e, t, n = 1) {
		let r = /* @__PURE__ */ new Date(), i = new Date(r.getFullYear(), r.getMonth(), 1);
		return await h.usageMetric.upsert({
			where: { organizationId_featureKey_periodStart: {
				organizationId: e,
				featureKey: t,
				periodStart: i
			} },
			update: { usedCount: { increment: n } },
			create: {
				organizationId: e,
				featureKey: t,
				periodStart: i,
				period: "monthly",
				usedCount: n,
				limit: 0
			}
		});
	}
	async getUsageStats(e) {
		let t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), 1);
		return await h.usageMetric.findMany({
			where: {
				organizationId: e,
				periodStart: n
			},
			include: { organization: { include: { plan: { include: { featureLimits: !0 } } } } }
		});
	}
}, _ = [
	"apiKey",
	"idempotencyKey",
	"stripeAccount",
	"apiVersion",
	"maxNetworkRetries",
	"timeout",
	"host",
	"authenticator",
	"stripeContext",
	"headers",
	"additionalHeaders",
	"streaming"
];
function v(e) {
	return e && typeof e == "object" && _.some((t) => Object.prototype.hasOwnProperty.call(e, t));
}
function y(e, t) {
	return x(e);
}
function b(e) {
	return encodeURIComponent(e).replace(/!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function ee(e) {
	return e instanceof Date ? Math.floor(e.getTime() / 1e3).toString() : e === null ? "" : String(e);
}
function x(e) {
	let t = [];
	function n(e, r) {
		if (r !== void 0) {
			if (typeof r != "object" || !r || r instanceof Date) {
				t.push(b(e) + "=" + b(ee(r)));
				return;
			}
			if (Array.isArray(r)) {
				for (let t = 0; t < r.length; t++) r[t] !== void 0 && n(e + "[" + t + "]", r[t]);
				return;
			}
			for (let t of Object.keys(r)) n(e + "[" + t + "]", r[t]);
		}
	}
	if (typeof e == "object" && e) for (let t of Object.keys(e)) n(t, e[t]);
	return t.join("&");
}
var S = (() => {
	let e = {
		"\n": "\\n",
		"\"": "\\\"",
		"\u2028": "\\u2028",
		"\u2029": "\\u2029"
	};
	return (t) => {
		let n = t.replace(/["\n\r\u2028\u2029]/g, (t) => e[t]);
		return (e) => n.replace(/\{([\s\S]+?)\}/g, (t, n) => {
			let r = e[n];
			return C(r) ? encodeURIComponent(r) : "";
		});
	};
})();
function C(e) {
	return [
		"number",
		"string",
		"boolean"
	].includes(typeof e);
}
function w(e) {
	let t = e.match(/\{\w+\}/g);
	return t ? t.map((e) => e.replace(/[{}]/g, "")) : [];
}
function te(e) {
	if (!Array.isArray(e) || !e[0] || typeof e[0] != "object") return {};
	if (!v(e[0])) return e.shift();
	let t = Object.keys(e[0]), n = t.filter((e) => _.includes(e));
	return n.length > 0 && n.length !== t.length && oe(`Options found in arguments (${n.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`), {};
}
function T(e) {
	let t = {
		host: null,
		headers: {},
		settings: {},
		streaming: !1
	};
	if (e.length > 0) {
		let n = e[e.length - 1];
		if (typeof n == "string") t.authenticator = pe(e.pop());
		else if (v(n)) {
			let n = Object.assign({}, e.pop()), r = Object.keys(n).filter((e) => !_.includes(e));
			if (r.length && oe(`Invalid options found (${r.join(", ")}); ignoring.`), n.apiKey && (t.authenticator = pe(n.apiKey)), n.idempotencyKey && (t.headers["Idempotency-Key"] = n.idempotencyKey), n.stripeAccount && (t.headers["Stripe-Account"] = n.stripeAccount), n.stripeContext) {
				if (t.headers["Stripe-Account"]) throw Error("Can't specify both stripeAccount and stripeContext.");
				t.headers["Stripe-Context"] = n.stripeContext;
			}
			if (n.apiVersion && (t.headers["Stripe-Version"] = n.apiVersion), Number.isInteger(n.maxNetworkRetries) && (t.settings.maxNetworkRetries = n.maxNetworkRetries), Number.isInteger(n.timeout) && (t.settings.timeout = n.timeout), n.host && (t.host = n.host), n.authenticator) {
				if (n.apiKey) throw Error("Can't specify both apiKey and authenticator.");
				if (typeof n.authenticator != "function") throw Error("The authenticator must be a function receiving a request as the first parameter.");
				t.authenticator = n.authenticator;
			}
			n.headers && Object.assign(t.headers, n.headers), n.additionalHeaders && Object.assign(t.headers, n.additionalHeaders), n.streaming && (t.streaming = !0);
		}
	}
	return t;
}
function ne(e) {
	let t = this, n = Object.prototype.hasOwnProperty.call(e, "constructor") ? e.constructor : function(...e) {
		t.apply(this, e);
	};
	return Object.assign(n, t), n.prototype = Object.create(t.prototype), Object.assign(n.prototype, e), n;
}
function re(e) {
	if (typeof e != "object") throw Error("Argument must be an object");
	return Object.keys(e).reduce((t, n) => (e[n] != null && (t[n] = e[n]), t), {});
}
function ie(e) {
	return e && typeof e == "object" ? Object.keys(e).reduce((t, n) => (t[E(n)] = e[n], t), {}) : e;
}
function E(e) {
	return e.split("-").map((e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join("-");
}
function D(e, t) {
	return t ? e.then((e) => {
		setTimeout(() => {
			t(null, e);
		}, 0);
	}, (e) => {
		setTimeout(() => {
			t(e, null);
		}, 0);
	}) : e;
}
function ae(e) {
	return e === "OAuth" ? "oauth" : e[0].toLowerCase() + e.substring(1);
}
function oe(e) {
	return typeof process.emitWarning == "function" ? process.emitWarning(e, "Stripe") : console.warn(`Stripe: ${e}`);
}
function se(e) {
	let t = typeof e;
	return (t === "function" || t === "object") && !!e;
}
function ce(e) {
	let t = {}, n = (e, r) => {
		Object.entries(e).forEach(([e, i]) => {
			let a = r ? `${r}[${e}]` : e;
			if (se(i)) {
				if (!(i instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(i, "data")) return n(i, a);
				t[a] = i;
			} else t[a] = String(i);
		});
	};
	return n(e, null), t;
}
function le(e, t, n) {
	if (!Number.isInteger(t)) {
		if (n !== void 0) return n;
		throw Error(`${e} must be an integer`);
	}
	return t;
}
function ue() {
	return typeof process > "u" ? {} : {
		lang_version: process.version,
		platform: process.platform
	};
}
var de = [
	["ANTIGRAVITY_CLI_ALIAS", "antigravity"],
	["CLAUDECODE", "claude_code"],
	["CLINE_ACTIVE", "cline"],
	["CODEX_SANDBOX", "codex_cli"],
	["CODEX_THREAD_ID", "codex_cli"],
	["CODEX_SANDBOX_NETWORK_DISABLED", "codex_cli"],
	["CODEX_CI", "codex_cli"],
	["CURSOR_AGENT", "cursor"],
	["GEMINI_CLI", "gemini_cli"],
	["OPENCODE", "open_code"]
];
function fe(e) {
	for (let [t, n] of de) if (e[t]) return n;
	return "";
}
function pe(e) {
	let t = (t) => (t.headers.Authorization = "Bearer " + e, Promise.resolve());
	return t._apiKey = e, t;
}
function me(e, t) {
	return this[e] instanceof Date ? Math.floor(this[e].getTime() / 1e3).toString() : t;
}
function he(e) {
	return JSON.stringify(e, me);
}
function ge(e) {
	return e && e.startsWith("/v2") ? "v2" : "v1";
}
function O(e) {
	return Array.isArray(e) ? e.join(", ") : String(e);
}
function _e(e) {
	let t = Array.isArray(e) ? e[0] : e;
	return Number(t);
}
function ve(e) {
	return Object.entries(e).map(([e, t]) => [e, O(t)]);
}
//#endregion
//#region ../../node_modules/stripe/esm/net/HttpClient.js
var ye = class e {
	getClientName() {
		throw Error("getClientName not implemented.");
	}
	makeRequest(e, t, n, r, i, a, o, s) {
		throw Error("makeRequest not implemented.");
	}
	static makeTimeoutError() {
		let t = TypeError(e.TIMEOUT_ERROR_CODE);
		return t.code = e.TIMEOUT_ERROR_CODE, t;
	}
};
ye.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"], ye.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
var be = class {
	constructor(e, t) {
		this._statusCode = e, this._headers = t;
	}
	getStatusCode() {
		return this._statusCode;
	}
	getHeaders() {
		return this._headers;
	}
	getRawResponse() {
		throw Error("getRawResponse not implemented.");
	}
	toStream(e) {
		throw Error("toStream not implemented.");
	}
	toJSON() {
		throw Error("toJSON not implemented.");
	}
}, xe = class e extends ye {
	constructor(t) {
		if (super(), !t) {
			if (!globalThis.fetch) throw Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
			t = globalThis.fetch;
		}
		globalThis.AbortController ? this._fetchFn = e.makeFetchWithAbortTimeout(t) : this._fetchFn = e.makeFetchWithRaceTimeout(t);
	}
	static makeFetchWithRaceTimeout(e) {
		return (t, n, r) => {
			let i, a = new Promise((e, t) => {
				i = setTimeout(() => {
					i = null, t(ye.makeTimeoutError());
				}, r);
			}), o = e(t, n);
			return Promise.race([o, a]).finally(() => {
				i && clearTimeout(i);
			});
		};
	}
	static makeFetchWithAbortTimeout(e) {
		return async (t, n, r) => {
			let i = new AbortController(), a = setTimeout(() => {
				a = null, i.abort(ye.makeTimeoutError());
			}, r);
			try {
				return await e(t, Object.assign(Object.assign({}, n), { signal: i.signal }));
			} catch (e) {
				throw e.name === "AbortError" ? ye.makeTimeoutError() : e;
			} finally {
				a && clearTimeout(a);
			}
		};
	}
	getClientName() {
		return "fetch";
	}
	async makeRequest(e, t, n, r, i, a, o, s) {
		let c = new URL(n, `${o === "http" ? "http" : "https"}://${e}`);
		c.port = t;
		let l = a || (r == "POST" || r == "PUT" || r == "PATCH" ? "" : void 0);
		return new k(await this._fetchFn(c.toString(), {
			method: r,
			headers: ve(i),
			body: l
		}, s));
	}
}, k = class e extends be {
	constructor(t) {
		super(t.status, e._transformHeadersToObject(t.headers)), this._res = t;
	}
	getRawResponse() {
		return this._res;
	}
	toStream(e) {
		return e(), this._res.body;
	}
	toJSON() {
		return this._res.json();
	}
	static _transformHeadersToObject(e) {
		let t = {};
		for (let n of e) {
			if (!Array.isArray(n) || n.length != 2) throw Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
			t[n[0]] = n[1];
		}
		return t;
	}
}, A = class {
	computeHMACSignature(e, t) {
		throw Error("computeHMACSignature not implemented.");
	}
	computeHMACSignatureAsync(e, t) {
		throw Error("computeHMACSignatureAsync not implemented.");
	}
	computeSHA256Async(e) {
		throw Error("computeSHA256 not implemented.");
	}
}, Se = class extends Error {}, Ce = class extends A {
	constructor(e) {
		super(), this.subtleCrypto = e || crypto.subtle;
	}
	computeHMACSignature(e, t) {
		throw new Se("SubtleCryptoProvider cannot be used in a synchronous context.");
	}
	async computeHMACSignatureAsync(e, t) {
		let n = new TextEncoder(), r = await this.subtleCrypto.importKey("raw", n.encode(t), {
			name: "HMAC",
			hash: { name: "SHA-256" }
		}, !1, ["sign"]), i = await this.subtleCrypto.sign("hmac", r, n.encode(e)), a = new Uint8Array(i), o = Array(a.length);
		for (let e = 0; e < a.length; e++) o[e] = we[a[e]];
		return o.join("");
	}
	async computeSHA256Async(e) {
		return new Uint8Array(await this.subtleCrypto.digest("SHA-256", e));
	}
}, we = Array(256);
for (let e = 0; e < we.length; e++) we[e] = e.toString(16).padStart(2, "0");
//#endregion
//#region ../../node_modules/stripe/esm/platform/PlatformFunctions.js
var Te = class {
	constructor() {
		this._fetchFn = null, this._agent = null;
	}
	getUname() {
		throw Error("getUname not implemented.");
	}
	uuid4() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
			let t = Math.random() * 16 | 0;
			return (e === "x" ? t : t & 3 | 8).toString(16);
		});
	}
	secureCompare(e, t) {
		if (e.length !== t.length) return !1;
		let n = e.length, r = 0;
		for (let i = 0; i < n; ++i) r |= e.charCodeAt(i) ^ t.charCodeAt(i);
		return r === 0;
	}
	createEmitter() {
		throw Error("createEmitter not implemented.");
	}
	tryBufferData(e) {
		throw Error("tryBufferData not implemented.");
	}
	createNodeHttpClient(e) {
		throw Error("createNodeHttpClient not implemented.");
	}
	createFetchHttpClient(e) {
		return new xe(e);
	}
	createDefaultHttpClient() {
		throw Error("createDefaultHttpClient not implemented.");
	}
	createNodeCryptoProvider() {
		throw Error("createNodeCryptoProvider not implemented.");
	}
	createSubtleCryptoProvider(e) {
		return new Ce(e);
	}
	createDefaultCryptoProvider() {
		throw Error("createDefaultCryptoProvider not implemented.");
	}
}, j = class extends Event {
	constructor(e, t) {
		super(e), this.data = t;
	}
}, M = class {
	constructor() {
		this.eventTarget = new EventTarget(), this.listenerMapping = /* @__PURE__ */ new Map();
	}
	on(e, t) {
		let n = (e) => {
			t(e.data);
		};
		return this.listenerMapping.set(t, n), this.eventTarget.addEventListener(e, n);
	}
	removeListener(e, t) {
		let n = this.listenerMapping.get(t);
		return this.listenerMapping.delete(t), this.eventTarget.removeEventListener(e, n);
	}
	once(e, t) {
		let n = (e) => {
			t(e.data);
		};
		return this.listenerMapping.set(t, n), this.eventTarget.addEventListener(e, n, { once: !0 });
	}
	emit(e, t) {
		return this.eventTarget.dispatchEvent(new j(e, t));
	}
}, Ee = class extends Te {
	getUname() {
		return Promise.resolve(null);
	}
	createEmitter() {
		return new M();
	}
	tryBufferData(e) {
		if (e.file.data instanceof ReadableStream) throw Error("Uploading a file as a stream is not supported in non-Node environments. Please open or upvote an issue at github.com/stripe/stripe-node if you use this, detailing your use-case.");
		return Promise.resolve(e);
	}
	createNodeHttpClient() {
		throw Error("Stripe: `createNodeHttpClient()` is not available in non-Node environments. Please use `createFetchHttpClient()` instead.");
	}
	createDefaultHttpClient() {
		return super.createFetchHttpClient();
	}
	createNodeCryptoProvider() {
		throw Error("Stripe: `createNodeCryptoProvider()` is not available in non-Node environments. Please use `createSubtleCryptoProvider()` instead.");
	}
	createDefaultCryptoProvider() {
		return this.createSubtleCryptoProvider();
	}
}, De = /* @__PURE__ */ l({
	StripeAPIError: () => Ae,
	StripeAuthenticationError: () => je,
	StripeCardError: () => F,
	StripeConnectionError: () => R,
	StripeError: () => P,
	StripeIdempotencyError: () => Me,
	StripeInvalidGrantError: () => B,
	StripeInvalidRequestError: () => ke,
	StripePermissionError: () => I,
	StripeRateLimitError: () => L,
	StripeSignatureVerificationError: () => z,
	StripeUnknownError: () => Ne,
	TemporarySessionExpiredError: () => Pe,
	generateV1Error: () => Oe,
	generateV2Error: () => N
}), Oe = (e) => {
	switch (e.type) {
		case "card_error": return new F(e);
		case "invalid_request_error": return new ke(e);
		case "api_error": return new Ae(e);
		case "authentication_error": return new je(e);
		case "rate_limit_error": return new L(e);
		case "idempotency_error": return new Me(e);
		case "invalid_grant": return new B(e);
		default: return new Ne(e);
	}
}, N = (e) => {
	switch (e.type) {
		case "temporary_session_expired": return new Pe(e);
	}
	switch (e.code) {
		case "invalid_fields": return new ke(e);
	}
	return Oe(e);
}, P = class extends Error {
	constructor(e = {}, t = null) {
		super(e.message), this.type = t || this.constructor.name, this.raw = e, this.rawType = e.type, this.code = e.code, this.doc_url = e.doc_url, this.param = e.param, this.detail = e.detail, this.headers = e.headers, this.requestId = e.requestId, this.statusCode = e.statusCode, this.message = e.message ?? "", this.userMessage = e.user_message, this.charge = e.charge, this.decline_code = e.decline_code, this.payment_intent = e.payment_intent, this.payment_method = e.payment_method, this.payment_method_type = e.payment_method_type, this.setup_intent = e.setup_intent, this.source = e.source;
	}
};
P.generate = Oe;
var F = class extends P {
	constructor(e = {}) {
		super(e, "StripeCardError");
	}
}, ke = class extends P {
	constructor(e = {}) {
		super(e, "StripeInvalidRequestError");
	}
}, Ae = class extends P {
	constructor(e = {}) {
		super(e, "StripeAPIError");
	}
}, je = class extends P {
	constructor(e = {}) {
		super(e, "StripeAuthenticationError");
	}
}, I = class extends P {
	constructor(e = {}) {
		super(e, "StripePermissionError");
	}
}, L = class extends P {
	constructor(e = {}) {
		super(e, "StripeRateLimitError");
	}
}, R = class extends P {
	constructor(e = {}) {
		super(e, "StripeConnectionError");
	}
}, z = class extends P {
	constructor(e, t, n = {}) {
		super(n, "StripeSignatureVerificationError"), this.header = e, this.payload = t;
	}
}, Me = class extends P {
	constructor(e = {}) {
		super(e, "StripeIdempotencyError");
	}
}, B = class extends P {
	constructor(e = {}) {
		super(e, "StripeInvalidGrantError");
	}
}, Ne = class extends P {
	constructor(e = {}) {
		super(e, "StripeUnknownError");
	}
}, Pe = class extends P {
	constructor(e = {}) {
		super(e, "TemporarySessionExpiredError");
	}
}, Fe = 60, Ie = class e {
	constructor(e, t) {
		this._stripe = e, this._maxBufferedRequestMetric = t;
	}
	_normalizeStripeContext(e, t) {
		return e ? e.toString() || null : t?.toString() || null;
	}
	_addHeadersDirectlyToObject(e, t) {
		e.requestId = t["request-id"], e.stripeAccount = e.stripeAccount || t["stripe-account"], e.apiVersion = e.apiVersion || t["stripe-version"], e.idempotencyKey = e.idempotencyKey || t["idempotency-key"];
	}
	_makeResponseEvent(e, t, n) {
		let r = Date.now(), i = r - e.request_start_time;
		return re({
			api_version: n["stripe-version"],
			account: n["stripe-account"],
			idempotency_key: n["idempotency-key"],
			method: e.method,
			path: e.path,
			status: t,
			request_id: this._getRequestId(n),
			elapsed: i,
			request_start_time: e.request_start_time,
			request_end_time: r
		});
	}
	_getRequestId(e) {
		return e["request-id"];
	}
	_streamingResponseHandler(e, t, n) {
		return (r) => {
			let i = r.getHeaders(), a = r.toStream(() => {
				let n = this._makeResponseEvent(e, r.getStatusCode(), i);
				this._stripe._emitter.emit("response", n), this._recordRequestMetrics(this._getRequestId(i), n.elapsed, t);
			});
			return this._addHeadersDirectlyToObject(a, i), n(null, a);
		};
	}
	_jsonResponseHandler(e, t, n, r) {
		return (i) => {
			let a = i.getHeaders(), o = this._getRequestId(a), s = i.getStatusCode(), c = this._makeResponseEvent(e, s, a);
			this._stripe._emitter.emit("response", c), i.toJSON().then((e) => {
				if (e.error) {
					let n;
					throw typeof e.error == "string" && (e.error = {
						type: e.error,
						message: e.error_description
					}), e.error.headers = a, e.error.statusCode = s, e.error.requestId = o, n = s === 401 ? new je(e.error) : s === 403 ? new I(e.error) : s === 429 ? new L(e.error) : t === "v2" ? N(e.error) : Oe(e.error), n;
				}
				return e;
			}, (e) => {
				throw new Ae({
					message: "Invalid JSON received from the Stripe API",
					exception: e,
					requestId: a["request-id"]
				});
			}).then((e) => {
				this._recordRequestMetrics(o, c.elapsed, n);
				let t = i.getRawResponse();
				this._addHeadersDirectlyToObject(t, a), Object.defineProperty(e, "lastResponse", {
					enumerable: !1,
					writable: !1,
					value: t
				}), r(null, e);
			}, (e) => r(e, null));
		};
	}
	static _generateConnectionErrorMessage(e) {
		return `An error occurred with our connection to Stripe.${e > 0 ? ` Request was retried ${e} times.` : ""}`;
	}
	static _shouldRetry(e, t, n, r) {
		return r && t === 0 && ye.CONNECTION_CLOSED_ERROR_CODES.includes(r.code) ? !0 : t >= n ? !1 : e ? e.getHeaders()["stripe-should-retry"] === "false" ? !1 : e.getHeaders()["stripe-should-retry"] === "true" || e.getStatusCode() === 409 || e.getStatusCode() >= 500 : !0;
	}
	_getSleepTimeInMS(e, t = null) {
		let n = this._stripe.getInitialNetworkRetryDelay(), r = this._stripe.getMaxNetworkRetryDelay(), i = Math.min(n * 2 ** (e - 1), r);
		return i *= .5 * (1 + Math.random()), i = Math.max(n, i), Number.isInteger(t) && t <= Fe && (i = Math.max(i, t)), i * 1e3;
	}
	_getMaxNetworkRetries(e = {}) {
		return e.maxNetworkRetries !== void 0 && Number.isInteger(e.maxNetworkRetries) ? e.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
	}
	_defaultIdempotencyKey(e, t, n) {
		let r = this._getMaxNetworkRetries(t), i = () => `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
		if (n === "v2") {
			if (e === "POST" || e === "DELETE") return i();
		} else if (n === "v1" && e === "POST" && r > 0) return i();
		return null;
	}
	_makeHeaders({ contentType: e, contentLength: t, apiVersion: n, clientUserAgent: r, method: i, userSuppliedHeaders: a, userSuppliedSettings: o, stripeAccount: s, stripeContext: c, apiMode: l }) {
		let u = {
			Accept: "application/json",
			"Content-Type": e,
			"User-Agent": this._getUserAgentString(l),
			"X-Stripe-Client-User-Agent": r,
			"X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
			"Stripe-Version": n,
			"Stripe-Account": s,
			"Stripe-Context": c,
			"Idempotency-Key": this._defaultIdempotencyKey(i, o, l)
		}, d = i == "POST" || i == "PUT" || i == "PATCH";
		return (d || t) && (d || oe(`${i} method had non-zero contentLength but no payload is expected for this verb`), u["Content-Length"] = t), Object.assign(re(u), ie(a));
	}
	_getUserAgentString(e) {
		let t = this._stripe.getConstant("PACKAGE_VERSION"), n = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "", r = this._stripe.getConstant("AI_AGENT"), i = `Stripe/${e} NodeBindings/${t}`;
		return n && (i += ` ${n}`), r && (i += ` AIAgent/${r}`), i;
	}
	_getTelemetryHeader() {
		if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
			let e = this._stripe._prevRequestMetrics.shift();
			return JSON.stringify({ last_request_metrics: e });
		}
	}
	_recordRequestMetrics(e, t, n) {
		if (this._stripe.getTelemetryEnabled() && e) if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) oe("Request metrics buffer is full, dropping telemetry message.");
		else {
			let r = {
				request_id: e,
				request_duration_ms: t
			};
			n && n.length > 0 && (r.usage = n), this._stripe._prevRequestMetrics.push(r);
		}
	}
	_rawRequest(e, t, n, r, i) {
		return new Promise((a, o) => {
			let s;
			try {
				let a = e.toUpperCase();
				if (a !== "POST" && n && Object.keys(n).length !== 0) throw Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
				let o = [].slice.call([n, r]), c = te(o), l = a === "POST" ? Object.assign({}, c) : null, u = T(o), d = u.headers;
				s = {
					requestMethod: a,
					requestPath: t,
					bodyData: l,
					queryData: {},
					authenticator: u.authenticator,
					headers: d,
					host: u.host,
					streaming: !!u.streaming,
					settings: {},
					usage: i || ["raw_request"]
				};
			} catch (e) {
				o(e);
				return;
			}
			function c(e, t) {
				e ? o(e) : a(t);
			}
			let { headers: l, settings: u } = s, d = s.authenticator;
			this._request(s.requestMethod, s.host, t, s.bodyData, d, {
				headers: l,
				settings: u,
				streaming: s.streaming
			}, s.usage, c);
		});
	}
	_getContentLength(e) {
		return typeof e == "string" ? new TextEncoder().encode(e).length : e.length;
	}
	_request(t, n, r, i, a, o, s = [], c, l = null) {
		let u;
		a = a ?? this._stripe._authenticator ?? null;
		let d = ge(r), f = (e, t, n, r, i) => setTimeout(e, this._getSleepTimeInMS(r, i), t, n, r + 1), p = (i, l, m) => {
			let h = o.settings && o.settings.timeout && Number.isInteger(o.settings.timeout) && o.settings.timeout >= 0 ? o.settings.timeout : this._stripe.getApiField("timeout"), g = {
				host: n || this._stripe.getApiField("host"),
				port: this._stripe.getApiField("port"),
				path: r,
				method: t,
				headers: Object.assign({}, l),
				body: u,
				protocol: this._stripe.getApiField("protocol")
			};
			a(g).then(() => {
				let n = this._stripe.getApiField("httpClient").makeRequest(g.host, g.port, g.path, g.method, g.headers, g.body, g.protocol, h), a = Date.now(), u = re({
					api_version: i,
					account: O(l["Stripe-Account"]),
					idempotency_key: O(l["Idempotency-Key"]),
					method: t,
					path: r,
					request_start_time: a
				}), _ = m || 0, v = this._getMaxNetworkRetries(o.settings || {});
				this._stripe._emitter.emit("request", u), n.then((t) => e._shouldRetry(t, _, v) ? f(p, i, l, _, _e(t.getHeaders()["retry-after"])) : o.streaming && t.getStatusCode() < 400 ? this._streamingResponseHandler(u, s, c)(t) : this._jsonResponseHandler(u, d, s, c)(t)).catch((t) => e._shouldRetry(null, _, v, t) ? f(p, i, l, _, null) : c(new R({
					message: t.code && t.code === ye.TIMEOUT_ERROR_CODE ? `Request aborted due to timeout being reached (${h}ms)` : e._generateConnectionErrorMessage(_),
					detail: t
				})));
			}).catch((e) => {
				throw new P({
					message: "Unable to authenticate the request",
					exception: e
				});
			});
		}, m = (e, n) => {
			if (e) return c(e);
			u = n, this._stripe.getClientUserAgent((e) => {
				let r = this._stripe.getApiField("version");
				p(r, this._makeHeaders({
					contentType: d == "v2" ? "application/json" : "application/x-www-form-urlencoded",
					contentLength: this._getContentLength(n),
					apiVersion: r,
					clientUserAgent: e,
					method: t,
					userSuppliedHeaders: o.headers ?? null,
					userSuppliedSettings: o.settings ?? {},
					stripeAccount: o.stripeAccount ?? this._stripe.getApiField("stripeAccount"),
					stripeContext: this._normalizeStripeContext(o.stripeContext, this._stripe.getApiField("stripeContext")),
					apiMode: d
				}), 0);
			});
		};
		if (l) l(t, i, o.headers, m);
		else {
			let e;
			e = d == "v2" ? i ? he(i) : "" : y(i || {}), m(null, e);
		}
	}
}, Le = class {
	constructor(e, t, n, r) {
		this.index = 0, this.pagePromise = e, this.promiseCache = { currentPromise: null }, this.requestArgs = t, this.spec = n, this.stripeResource = r;
	}
	async iterate(e) {
		if (!(e && e.data && typeof e.data.length == "number")) throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
		let t = Ye(this.requestArgs);
		if (this.index < e.data.length) {
			let n = t ? e.data.length - 1 - this.index : this.index, r = e.data[n];
			return this.index += 1, {
				value: r,
				done: !1
			};
		} else if (e.has_more) {
			this.index = 0, this.pagePromise = this.getNextPage(e);
			let t = await this.pagePromise;
			return this.iterate(t);
		}
		return {
			done: !0,
			value: void 0
		};
	}
	getNextPage(e) {
		throw Error("Unimplemented");
	}
	async _next() {
		return this.iterate(await this.pagePromise);
	}
	next() {
		if (this.promiseCache.currentPromise) return this.promiseCache.currentPromise;
		let e = (async () => {
			let e = await this._next();
			return this.promiseCache.currentPromise = null, e;
		})();
		return this.promiseCache.currentPromise = e, e;
	}
}, Re = class extends Le {
	getNextPage(e) {
		let t = Ye(this.requestArgs), n = Ge(e, t);
		return this.stripeResource._makeRequest(this.requestArgs, this.spec, { [t ? "ending_before" : "starting_after"]: n });
	}
}, ze = class extends Le {
	getNextPage(e) {
		if (!e.next_page) throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
		return this.stripeResource._makeRequest(this.requestArgs, this.spec, { page: e.next_page });
	}
}, Be = class {
	constructor(e, t, n, r) {
		this.firstPagePromise = e, this.currentPageIterator = null, this.nextPageUrl = null, this.requestArgs = t, this.spec = n, this.stripeResource = r;
	}
	async initFirstPage() {
		if (this.firstPagePromise) {
			let e = await this.firstPagePromise;
			this.firstPagePromise = null, this.currentPageIterator = e.data[Symbol.iterator](), this.nextPageUrl = e.next_page_url || null;
		}
	}
	async turnPage() {
		if (!this.nextPageUrl) return null;
		this.spec.fullPath = this.nextPageUrl;
		let e = await this.stripeResource._makeRequest([], this.spec, {});
		return this.nextPageUrl = e.next_page_url || null, this.currentPageIterator = e.data[Symbol.iterator](), this.currentPageIterator;
	}
	async next() {
		if (await this.initFirstPage(), this.currentPageIterator) {
			let e = this.currentPageIterator.next();
			if (!e.done) return {
				done: !1,
				value: e.value
			};
		}
		let e = await this.turnPage();
		if (!e) return {
			done: !0,
			value: void 0
		};
		let t = e.next();
		return t.done ? {
			done: !0,
			value: void 0
		} : {
			done: !1,
			value: t.value
		};
	}
}, Ve = (e, t, n, r) => {
	let i = ge(n.fullPath || n.path);
	return i !== "v2" && n.methodType === "search" ? He(new ze(r, t, n, e)) : i !== "v2" && n.methodType === "list" ? He(new Re(r, t, n, e)) : i === "v2" && n.methodType === "list" ? He(new Be(r, t, n, e)) : null;
}, He = (e) => {
	let t = Ke((...t) => e.next(...t)), n = {
		autoPagingEach: t,
		autoPagingToArray: qe(t),
		next: () => e.next(),
		return: () => ({}),
		[Ue()]: () => n
	};
	return n;
};
function Ue() {
	return typeof Symbol < "u" && Symbol.asyncIterator ? Symbol.asyncIterator : "@@asyncIterator";
}
function V(e) {
	if (e.length < 2) return null;
	let t = e[1];
	if (typeof t != "function") throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`);
	return t;
}
function We(e) {
	if (e.length === 0) return;
	let t = e[0];
	if (typeof t != "function") throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof t}`);
	if (t.length === 2) return t;
	if (t.length > 2) throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${t}`);
	return function(e, n) {
		n(t(e));
	};
}
function Ge(e, t) {
	let n = t ? 0 : e.data.length - 1, r = e.data[n], i = r && r.id;
	if (!i) throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
	return i;
}
function Ke(e) {
	return function() {
		let t = [].slice.call(arguments), n = We(t), r = V(t);
		if (t.length > 2) throw Error(`autoPagingEach takes up to two arguments; received ${t}`);
		return D(Je(e, n), r);
	};
}
function qe(e) {
	return function(t, n) {
		let r = t && t.limit;
		if (!r) throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
		if (r > 1e4) throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
		return D(new Promise((t, n) => {
			let i = [];
			e((e) => {
				if (i.push(e), i.length >= r) return !1;
			}).then(() => {
				t(i);
			}).catch(n);
		}), n);
	};
}
function Je(e, t) {
	return new Promise((n, r) => {
		function i(r) {
			if (r.done) {
				n();
				return;
			}
			let a = r.value;
			return new Promise((e) => {
				t(a, e);
			}).then((t) => t === !1 ? i({
				done: !0,
				value: void 0
			}) : e().then(i));
		}
		e().then(i).catch(r);
	});
}
function Ye(e) {
	return !!te([].slice.call(e)).ending_before;
}
//#endregion
//#region ../../node_modules/stripe/esm/StripeMethod.js
function Xe(e) {
	if (e.path !== void 0 && e.fullPath !== void 0) throw Error(`Method spec specified both a 'path' (${e.path}) and a 'fullPath' (${e.fullPath}).`);
	return function(...t) {
		let n = typeof t[t.length - 1] == "function" && t.pop();
		e.urlParams = w(e.fullPath || this.createResourcePathWithSymbols(e.path || ""));
		let r = D(this._makeRequest(t, e, {}), n);
		return Object.assign(r, Ve(this, t, e, r)), r;
	};
}
H.extend = ne, H.method = Xe, H.MAX_BUFFERED_REQUEST_METRICS = 100;
function H(e, t) {
	if (this._stripe = e, t) throw Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
	this.basePath = S(this.basePath || e.getApiField("basePath")), this.resourcePath = this.path, this.path = S(this.path), this.initialize(...arguments);
}
H.prototype = {
	_stripe: null,
	path: "",
	resourcePath: "",
	basePath: null,
	initialize() {},
	requestDataProcessor: null,
	validateRequest: null,
	createFullPath(e, t) {
		let n = [this.basePath(t), this.path(t)];
		if (typeof e == "function") {
			let r = e(t);
			r && n.push(r);
		} else n.push(e);
		return this._joinUrlParts(n);
	},
	createResourcePathWithSymbols(e) {
		return e ? `/${this._joinUrlParts([this.resourcePath, e])}` : `/${this.resourcePath}`;
	},
	_joinUrlParts(e) {
		return e.join("/").replace(/\/{2,}/g, "/");
	},
	_getRequestOpts(e, t, n) {
		let r = (t.method || "GET").toUpperCase(), i = t.usage || [], a = t.urlParams || [], o = t.encode || ((e) => e), s = !!t.fullPath, c = S(s ? t.fullPath : t.path || ""), l = s ? t.fullPath : this.createResourcePathWithSymbols(t.path), u = [].slice.call(e), d = a.reduce((e, t) => {
			let n = u.shift();
			if (typeof n != "string") throw Error(`Stripe: Argument "${t}" must be a string, but got: ${n} (on API request to \`${r} ${l}\`)`);
			return e[t] = n, e;
		}, {}), f = te(u), p = o(Object.assign({}, f, n)), m = T(u), h = m.host || t.host, g = !!t.streaming || !!m.streaming;
		if (u.filter((e) => e != null).length) throw Error(`Stripe: Unknown arguments (${u}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${r} \`${l}\`)`);
		let _ = s ? c(d) : this.createFullPath(c, d), v = Object.assign(m.headers, t.headers);
		t.validator && t.validator(p, { headers: v });
		let y = t.method === "GET" || t.method === "DELETE";
		return {
			requestMethod: r,
			requestPath: _,
			bodyData: y ? null : p,
			queryData: y ? p : {},
			authenticator: m.authenticator ?? null,
			headers: v,
			host: h ?? null,
			streaming: g,
			settings: m.settings,
			usage: i
		};
	},
	_makeRequest(e, t, n) {
		return new Promise((r, i) => {
			let a;
			try {
				a = this._getRequestOpts(e, t, n);
			} catch (e) {
				i(e);
				return;
			}
			function o(e, n) {
				e ? i(e) : r(t.transformResponseData ? t.transformResponseData(n) : n);
			}
			let s = Object.keys(a.queryData).length === 0, c = [
				a.requestPath,
				s ? "" : "?",
				y(a.queryData)
			].join(""), { headers: l, settings: u } = a;
			this._stripe._requestSender._request(a.requestMethod, a.host, c, a.bodyData, a.authenticator, {
				headers: l,
				settings: u,
				streaming: a.streaming
			}, a.usage, o, this.requestDataProcessor?.bind(this));
		});
	}
};
//#endregion
//#region ../../node_modules/stripe/esm/StripeContext.js
var Ze = class e {
	constructor(e = []) {
		this._segments = [...e];
	}
	get segments() {
		return [...this._segments];
	}
	push(t) {
		if (!t) throw Error("Segment cannot be null or undefined");
		return new e([...this._segments, t]);
	}
	pop() {
		if (this._segments.length === 0) throw Error("Cannot pop from an empty context");
		return new e(this._segments.slice(0, -1));
	}
	toString() {
		return this._segments.join("/");
	}
	static parse(t) {
		return t ? new e(t.split("/")) : new e([]);
	}
};
//#endregion
//#region ../../node_modules/stripe/esm/Webhooks.js
function Qe(e) {
	let t = {
		DEFAULT_TOLERANCE: 300,
		signature: null,
		constructEvent(e, n, r, i, a, o) {
			try {
				if (!this.signature) throw Error("ERR: missing signature helper, unable to verify");
				this.signature.verifyHeader(e, n, r, i || t.DEFAULT_TOLERANCE, a, o);
			} catch (e) {
				throw e instanceof Se && (e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`"), e;
			}
			return e instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(e)) : JSON.parse(e);
		},
		async constructEventAsync(e, n, r, i, a, o) {
			if (!this.signature) throw Error("ERR: missing signature helper, unable to verify");
			return await this.signature.verifyHeaderAsync(e, n, r, i || t.DEFAULT_TOLERANCE, a, o), e instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(e)) : JSON.parse(e);
		},
		generateTestHeaderString: function(e) {
			let t = l(e), n = t.signature || t.cryptoProvider.computeHMACSignature(t.payloadString, t.secret);
			return t.generateHeaderString(n);
		},
		generateTestHeaderStringAsync: async function(e) {
			let t = l(e), n = t.signature || await t.cryptoProvider.computeHMACSignatureAsync(t.payloadString, t.secret);
			return t.generateHeaderString(n);
		}
	}, n = {
		EXPECTED_SCHEME: "v1",
		verifyHeader(e, t, n, o, s, l) {
			let { decodedHeader: u, decodedPayload: d, details: f, suspectPayloadType: p } = i(e, t, this.EXPECTED_SCHEME), m = /\s/.test(n);
			return s ||= c(), a(d, u, f, s.computeHMACSignature(r(d, f), n), o, p, m, l), !0;
		},
		async verifyHeaderAsync(e, t, n, o, s, l) {
			let { decodedHeader: u, decodedPayload: d, details: f, suspectPayloadType: p } = i(e, t, this.EXPECTED_SCHEME), m = /\s/.test(n);
			return s ||= c(), a(d, u, f, await s.computeHMACSignatureAsync(r(d, f), n), o, p, m, l);
		}
	};
	function r(e, t) {
		return `${t.timestamp}.${e}`;
	}
	function i(e, t, n) {
		if (!e) throw new z(t, e, { message: "No webhook payload was provided." });
		let r = typeof e != "string" && !(e instanceof Uint8Array), i = new TextDecoder("utf8"), a = e instanceof Uint8Array ? i.decode(e) : e;
		if (Array.isArray(t)) throw Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
		if (t == null || t == "") throw new z(t, e, { message: "No stripe-signature header value was provided." });
		let s = t instanceof Uint8Array ? i.decode(t) : t, c = o(s, n);
		if (!c || c.timestamp === -1) throw new z(s, a, { message: "Unable to extract timestamp and signatures from header" });
		if (!c.signatures.length) throw new z(s, a, { message: "No signatures found with expected scheme" });
		return {
			decodedPayload: a,
			decodedHeader: s,
			details: c,
			suspectPayloadType: r
		};
	}
	function a(t, n, r, i, a, o, s, c) {
		let l = !!r.signatures.filter(e.secureCompare.bind(e, i)).length, u = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature", d = s ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
		if (!l) throw o ? new z(n, t, { message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + u + "\n" + d }) : new z(n, t, { message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + u + "\n" + d });
		let f = Math.floor((typeof c == "number" ? c : Date.now()) / 1e3) - r.timestamp;
		if (a > 0 && f > a) throw new z(n, t, { message: "Timestamp outside the tolerance zone" });
		return !0;
	}
	function o(e, t) {
		return typeof e == "string" ? e.split(",").reduce((e, n) => {
			let r = n.split("=");
			return r[0] === "t" && (e.timestamp = parseInt(r[1], 10)), r[0] === t && e.signatures.push(r[1]), e;
		}, {
			timestamp: -1,
			signatures: []
		}) : null;
	}
	let s = null;
	function c() {
		return s ||= e.createDefaultCryptoProvider(), s;
	}
	function l(e) {
		if (!e) throw new P({ message: "Options are required" });
		let t = Math.floor(e.timestamp) || Math.floor(Date.now() / 1e3), r = e.scheme || n.EXPECTED_SCHEME, i = e.cryptoProvider || c(), a = `${t}.${e.payload}`;
		return Object.assign(Object.assign({}, e), {
			timestamp: t,
			scheme: r,
			cryptoProvider: i,
			payloadString: a,
			generateHeaderString: (e) => `t=${t},${r}=${e}`
		});
	}
	return t.signature = n, t;
}
//#endregion
//#region ../../node_modules/stripe/esm/apiVersion.js
var $e = "2026-02-25.clover";
//#endregion
//#region ../../node_modules/stripe/esm/ResourceNamespace.js
function et(e, t) {
	for (let n in t) {
		if (!Object.prototype.hasOwnProperty.call(t, n)) continue;
		let r = n[0].toLowerCase() + n.substring(1);
		this[r] = new t[n](e);
	}
}
function U(e, t) {
	return function(e) {
		return new et(e, t);
	};
}
//#endregion
//#region ../../node_modules/stripe/esm/resources/V2/Core/AccountLinks.js
var tt = H.method, nt = H.extend({ create: tt({
	method: "POST",
	fullPath: "/v2/core/account_links"
}) }), rt = H.method, it = H.extend({
	create: rt({
		method: "POST",
		fullPath: "/v2/core/account_tokens"
	}),
	retrieve: rt({
		method: "GET",
		fullPath: "/v2/core/account_tokens/{id}"
	})
}), at = H.method, W = H.extend({
	retrieve: at({
		method: "GET",
		fullPath: "/v1/financial_connections/accounts/{account}"
	}),
	list: at({
		method: "GET",
		fullPath: "/v1/financial_connections/accounts",
		methodType: "list"
	}),
	disconnect: at({
		method: "POST",
		fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
	}),
	listOwners: at({
		method: "GET",
		fullPath: "/v1/financial_connections/accounts/{account}/owners",
		methodType: "list"
	}),
	refresh: at({
		method: "POST",
		fullPath: "/v1/financial_connections/accounts/{account}/refresh"
	}),
	subscribe: at({
		method: "POST",
		fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
	}),
	unsubscribe: at({
		method: "POST",
		fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
	})
}), ot = H.method, st = H.extend({
	create: ot({
		method: "POST",
		fullPath: "/v2/core/accounts/{account_id}/persons"
	}),
	retrieve: ot({
		method: "GET",
		fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
	}),
	update: ot({
		method: "POST",
		fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
	}),
	list: ot({
		method: "GET",
		fullPath: "/v2/core/accounts/{account_id}/persons",
		methodType: "list"
	}),
	del: ot({
		method: "DELETE",
		fullPath: "/v2/core/accounts/{account_id}/persons/{id}"
	})
}), ct = H.method, lt = H.extend({
	create: ct({
		method: "POST",
		fullPath: "/v2/core/accounts/{account_id}/person_tokens"
	}),
	retrieve: ct({
		method: "GET",
		fullPath: "/v2/core/accounts/{account_id}/person_tokens/{id}"
	})
}), ut = H.method, dt = H.extend({
	constructor: function(...e) {
		H.apply(this, e), this.persons = new st(...e), this.personTokens = new lt(...e);
	},
	create: ut({
		method: "POST",
		fullPath: "/v2/core/accounts"
	}),
	retrieve: ut({
		method: "GET",
		fullPath: "/v2/core/accounts/{id}"
	}),
	update: ut({
		method: "POST",
		fullPath: "/v2/core/accounts/{id}"
	}),
	list: ut({
		method: "GET",
		fullPath: "/v2/core/accounts",
		methodType: "list"
	}),
	close: ut({
		method: "POST",
		fullPath: "/v2/core/accounts/{id}/close"
	})
}), ft = H.method, pt = H.extend({
	retrieve: ft({
		method: "GET",
		fullPath: "/v1/entitlements/active_entitlements/{id}"
	}),
	list: ft({
		method: "GET",
		fullPath: "/v1/entitlements/active_entitlements",
		methodType: "list"
	})
}), mt = H.method, ht = H.extend({
	create: mt({
		method: "POST",
		fullPath: "/v1/billing/alerts"
	}),
	retrieve: mt({
		method: "GET",
		fullPath: "/v1/billing/alerts/{id}"
	}),
	list: mt({
		method: "GET",
		fullPath: "/v1/billing/alerts",
		methodType: "list"
	}),
	activate: mt({
		method: "POST",
		fullPath: "/v1/billing/alerts/{id}/activate"
	}),
	archive: mt({
		method: "POST",
		fullPath: "/v1/billing/alerts/{id}/archive"
	}),
	deactivate: mt({
		method: "POST",
		fullPath: "/v1/billing/alerts/{id}/deactivate"
	})
}), gt = H.method, _t = H.extend({ find: gt({
	method: "GET",
	fullPath: "/v1/tax/associations/find"
}) }), vt = H.method, yt = H.extend({
	retrieve: vt({
		method: "GET",
		fullPath: "/v1/issuing/authorizations/{authorization}"
	}),
	update: vt({
		method: "POST",
		fullPath: "/v1/issuing/authorizations/{authorization}"
	}),
	list: vt({
		method: "GET",
		fullPath: "/v1/issuing/authorizations",
		methodType: "list"
	}),
	approve: vt({
		method: "POST",
		fullPath: "/v1/issuing/authorizations/{authorization}/approve"
	}),
	decline: vt({
		method: "POST",
		fullPath: "/v1/issuing/authorizations/{authorization}/decline"
	})
}), bt = H.method, xt = H.extend({
	create: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations"
	}),
	capture: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
	}),
	expire: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
	}),
	finalizeAmount: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
	}),
	increment: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
	}),
	respond: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"
	}),
	reverse: bt({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
	})
}), St = H.method, Ct = H.extend({
	create: St({
		method: "POST",
		fullPath: "/v1/tax/calculations"
	}),
	retrieve: St({
		method: "GET",
		fullPath: "/v1/tax/calculations/{calculation}"
	}),
	listLineItems: St({
		method: "GET",
		fullPath: "/v1/tax/calculations/{calculation}/line_items",
		methodType: "list"
	})
}), wt = H.method, Tt = H.extend({
	create: wt({
		method: "POST",
		fullPath: "/v1/issuing/cardholders"
	}),
	retrieve: wt({
		method: "GET",
		fullPath: "/v1/issuing/cardholders/{cardholder}"
	}),
	update: wt({
		method: "POST",
		fullPath: "/v1/issuing/cardholders/{cardholder}"
	}),
	list: wt({
		method: "GET",
		fullPath: "/v1/issuing/cardholders",
		methodType: "list"
	})
}), Et = H.method, Dt = H.extend({
	create: Et({
		method: "POST",
		fullPath: "/v1/issuing/cards"
	}),
	retrieve: Et({
		method: "GET",
		fullPath: "/v1/issuing/cards/{card}"
	}),
	update: Et({
		method: "POST",
		fullPath: "/v1/issuing/cards/{card}"
	}),
	list: Et({
		method: "GET",
		fullPath: "/v1/issuing/cards",
		methodType: "list"
	})
}), Ot = H.method, kt = H.extend({
	deliverCard: Ot({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
	}),
	failCard: Ot({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
	}),
	returnCard: Ot({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
	}),
	shipCard: Ot({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
	}),
	submitCard: Ot({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
	})
}), At = H.method, jt = H.extend({
	create: At({
		method: "POST",
		fullPath: "/v1/billing_portal/configurations"
	}),
	retrieve: At({
		method: "GET",
		fullPath: "/v1/billing_portal/configurations/{configuration}"
	}),
	update: At({
		method: "POST",
		fullPath: "/v1/billing_portal/configurations/{configuration}"
	}),
	list: At({
		method: "GET",
		fullPath: "/v1/billing_portal/configurations",
		methodType: "list"
	})
}), Mt = H.method, Nt = H.extend({
	create: Mt({
		method: "POST",
		fullPath: "/v1/terminal/configurations"
	}),
	retrieve: Mt({
		method: "GET",
		fullPath: "/v1/terminal/configurations/{configuration}"
	}),
	update: Mt({
		method: "POST",
		fullPath: "/v1/terminal/configurations/{configuration}"
	}),
	list: Mt({
		method: "GET",
		fullPath: "/v1/terminal/configurations",
		methodType: "list"
	}),
	del: Mt({
		method: "DELETE",
		fullPath: "/v1/terminal/configurations/{configuration}"
	})
}), Pt = H.method, Ft = H.extend({ create: Pt({
	method: "POST",
	fullPath: "/v1/test_helpers/confirmation_tokens"
}) }), It = H.method, Lt = H.extend({ create: It({
	method: "POST",
	fullPath: "/v1/terminal/connection_tokens"
}) }), Rt = H.method, zt = H.extend({ retrieve: Rt({
	method: "GET",
	fullPath: "/v1/billing/credit_balance_summary"
}) }), Bt = H.method, Vt = H.extend({
	retrieve: Bt({
		method: "GET",
		fullPath: "/v1/billing/credit_balance_transactions/{id}"
	}),
	list: Bt({
		method: "GET",
		fullPath: "/v1/billing/credit_balance_transactions",
		methodType: "list"
	})
}), Ht = H.method, Ut = H.extend({
	create: Ht({
		method: "POST",
		fullPath: "/v1/billing/credit_grants"
	}),
	retrieve: Ht({
		method: "GET",
		fullPath: "/v1/billing/credit_grants/{id}"
	}),
	update: Ht({
		method: "POST",
		fullPath: "/v1/billing/credit_grants/{id}"
	}),
	list: Ht({
		method: "GET",
		fullPath: "/v1/billing/credit_grants",
		methodType: "list"
	}),
	expire: Ht({
		method: "POST",
		fullPath: "/v1/billing/credit_grants/{id}/expire"
	}),
	voidGrant: Ht({
		method: "POST",
		fullPath: "/v1/billing/credit_grants/{id}/void"
	})
}), Wt = H.method, Gt = H.extend({
	create: Wt({
		method: "POST",
		fullPath: "/v1/treasury/credit_reversals"
	}),
	retrieve: Wt({
		method: "GET",
		fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
	}),
	list: Wt({
		method: "GET",
		fullPath: "/v1/treasury/credit_reversals",
		methodType: "list"
	})
}), Kt = H.method, qt = H.extend({ fundCashBalance: Kt({
	method: "POST",
	fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
}) }), Jt = H.method, Yt = H.extend({
	create: Jt({
		method: "POST",
		fullPath: "/v1/treasury/debit_reversals"
	}),
	retrieve: Jt({
		method: "GET",
		fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
	}),
	list: Jt({
		method: "GET",
		fullPath: "/v1/treasury/debit_reversals",
		methodType: "list"
	})
}), Xt = H.method, G = H.extend({
	create: Xt({
		method: "POST",
		fullPath: "/v1/issuing/disputes"
	}),
	retrieve: Xt({
		method: "GET",
		fullPath: "/v1/issuing/disputes/{dispute}"
	}),
	update: Xt({
		method: "POST",
		fullPath: "/v1/issuing/disputes/{dispute}"
	}),
	list: Xt({
		method: "GET",
		fullPath: "/v1/issuing/disputes",
		methodType: "list"
	}),
	submit: Xt({
		method: "POST",
		fullPath: "/v1/issuing/disputes/{dispute}/submit"
	})
}), Zt = H.method, Qt = H.extend({
	retrieve: Zt({
		method: "GET",
		fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
	}),
	list: Zt({
		method: "GET",
		fullPath: "/v1/radar/early_fraud_warnings",
		methodType: "list"
	})
}), $t = H.method, en = H.extend({
	create: $t({
		method: "POST",
		fullPath: "/v2/core/event_destinations"
	}),
	retrieve: $t({
		method: "GET",
		fullPath: "/v2/core/event_destinations/{id}"
	}),
	update: $t({
		method: "POST",
		fullPath: "/v2/core/event_destinations/{id}"
	}),
	list: $t({
		method: "GET",
		fullPath: "/v2/core/event_destinations",
		methodType: "list"
	}),
	del: $t({
		method: "DELETE",
		fullPath: "/v2/core/event_destinations/{id}"
	}),
	disable: $t({
		method: "POST",
		fullPath: "/v2/core/event_destinations/{id}/disable"
	}),
	enable: $t({
		method: "POST",
		fullPath: "/v2/core/event_destinations/{id}/enable"
	}),
	ping: $t({
		method: "POST",
		fullPath: "/v2/core/event_destinations/{id}/ping"
	})
}), tn = H.method, nn = H.extend({
	retrieve(...e) {
		return tn({
			method: "GET",
			fullPath: "/v2/core/events/{id}",
			transformResponseData: (e) => this.addFetchRelatedObjectIfNeeded(e)
		}).apply(this, e);
	},
	list(...e) {
		return tn({
			method: "GET",
			fullPath: "/v2/core/events",
			methodType: "list",
			transformResponseData: (e) => Object.assign(Object.assign({}, e), { data: e.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) })
		}).apply(this, e);
	},
	addFetchRelatedObjectIfNeeded(e) {
		return !e.related_object || !e.related_object.url ? e : Object.assign(Object.assign({}, e), { fetchRelatedObject: () => tn({
			method: "GET",
			fullPath: e.related_object.url
		}).apply(this, [{
			stripeContext: e.context,
			headers: { "Stripe-Request-Trigger": `event=${e.id}` }
		}]) });
	}
}), rn = H.method, an = H.extend({
	create: rn({
		method: "POST",
		fullPath: "/v1/entitlements/features"
	}),
	retrieve: rn({
		method: "GET",
		fullPath: "/v1/entitlements/features/{id}"
	}),
	update: rn({
		method: "POST",
		fullPath: "/v1/entitlements/features/{id}"
	}),
	list: rn({
		method: "GET",
		fullPath: "/v1/entitlements/features",
		methodType: "list"
	})
}), K = H.method, on = H.extend({
	create: K({
		method: "POST",
		fullPath: "/v1/treasury/financial_accounts"
	}),
	retrieve: K({
		method: "GET",
		fullPath: "/v1/treasury/financial_accounts/{financial_account}"
	}),
	update: K({
		method: "POST",
		fullPath: "/v1/treasury/financial_accounts/{financial_account}"
	}),
	list: K({
		method: "GET",
		fullPath: "/v1/treasury/financial_accounts",
		methodType: "list"
	}),
	close: K({
		method: "POST",
		fullPath: "/v1/treasury/financial_accounts/{financial_account}/close"
	}),
	retrieveFeatures: K({
		method: "GET",
		fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
	}),
	updateFeatures: K({
		method: "POST",
		fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
	})
}), sn = H.method, cn = H.extend({
	fail: sn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
	}),
	returnInboundTransfer: sn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
	}),
	succeed: sn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
	})
}), ln = H.method, un = H.extend({
	create: ln({
		method: "POST",
		fullPath: "/v1/treasury/inbound_transfers"
	}),
	retrieve: ln({
		method: "GET",
		fullPath: "/v1/treasury/inbound_transfers/{id}"
	}),
	list: ln({
		method: "GET",
		fullPath: "/v1/treasury/inbound_transfers",
		methodType: "list"
	}),
	cancel: ln({
		method: "POST",
		fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
	})
}), dn = H.method, fn = H.extend({
	create: dn({
		method: "POST",
		fullPath: "/v1/terminal/locations"
	}),
	retrieve: dn({
		method: "GET",
		fullPath: "/v1/terminal/locations/{location}"
	}),
	update: dn({
		method: "POST",
		fullPath: "/v1/terminal/locations/{location}"
	}),
	list: dn({
		method: "GET",
		fullPath: "/v1/terminal/locations",
		methodType: "list"
	}),
	del: dn({
		method: "DELETE",
		fullPath: "/v1/terminal/locations/{location}"
	})
}), pn = H.method, mn = H.extend({ create: pn({
	method: "POST",
	fullPath: "/v1/billing/meter_event_adjustments"
}) }), hn = H.method, gn = H.extend({ create: hn({
	method: "POST",
	fullPath: "/v2/billing/meter_event_adjustments"
}) }), _n = H.method, vn = H.extend({ create: _n({
	method: "POST",
	fullPath: "/v2/billing/meter_event_session"
}) }), yn = H.method, bn = H.extend({ create: yn({
	method: "POST",
	fullPath: "/v2/billing/meter_event_stream",
	host: "meter-events.stripe.com"
}) }), xn = H.method, Sn = H.extend({ create: xn({
	method: "POST",
	fullPath: "/v1/billing/meter_events"
}) }), Cn = H.method, wn = H.extend({ create: Cn({
	method: "POST",
	fullPath: "/v2/billing/meter_events"
}) }), Tn = H.method, En = H.extend({
	create: Tn({
		method: "POST",
		fullPath: "/v1/billing/meters"
	}),
	retrieve: Tn({
		method: "GET",
		fullPath: "/v1/billing/meters/{id}"
	}),
	update: Tn({
		method: "POST",
		fullPath: "/v1/billing/meters/{id}"
	}),
	list: Tn({
		method: "GET",
		fullPath: "/v1/billing/meters",
		methodType: "list"
	}),
	deactivate: Tn({
		method: "POST",
		fullPath: "/v1/billing/meters/{id}/deactivate"
	}),
	listEventSummaries: Tn({
		method: "GET",
		fullPath: "/v1/billing/meters/{id}/event_summaries",
		methodType: "list"
	}),
	reactivate: Tn({
		method: "POST",
		fullPath: "/v1/billing/meters/{id}/reactivate"
	})
}), Dn = H.method, On = H.extend({ create: Dn({
	method: "POST",
	fullPath: "/v1/terminal/onboarding_links"
}) }), kn = H.method, An = H.extend({
	create: kn({
		method: "POST",
		fullPath: "/v1/climate/orders"
	}),
	retrieve: kn({
		method: "GET",
		fullPath: "/v1/climate/orders/{order}"
	}),
	update: kn({
		method: "POST",
		fullPath: "/v1/climate/orders/{order}"
	}),
	list: kn({
		method: "GET",
		fullPath: "/v1/climate/orders",
		methodType: "list"
	}),
	cancel: kn({
		method: "POST",
		fullPath: "/v1/climate/orders/{order}/cancel"
	})
}), jn = H.method, Mn = H.extend({
	update: jn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
	}),
	fail: jn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
	}),
	post: jn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
	}),
	returnOutboundPayment: jn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
	})
}), Nn = H.method, Pn = H.extend({
	create: Nn({
		method: "POST",
		fullPath: "/v1/treasury/outbound_payments"
	}),
	retrieve: Nn({
		method: "GET",
		fullPath: "/v1/treasury/outbound_payments/{id}"
	}),
	list: Nn({
		method: "GET",
		fullPath: "/v1/treasury/outbound_payments",
		methodType: "list"
	}),
	cancel: Nn({
		method: "POST",
		fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
	})
}), Fn = H.method, In = H.extend({
	update: Fn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
	}),
	fail: Fn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
	}),
	post: Fn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
	}),
	returnOutboundTransfer: Fn({
		method: "POST",
		fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
	})
}), Ln = H.method, Rn = H.extend({
	create: Ln({
		method: "POST",
		fullPath: "/v1/treasury/outbound_transfers"
	}),
	retrieve: Ln({
		method: "GET",
		fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
	}),
	list: Ln({
		method: "GET",
		fullPath: "/v1/treasury/outbound_transfers",
		methodType: "list"
	}),
	cancel: Ln({
		method: "POST",
		fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
	})
}), zn = H.method, Bn = H.extend({ create: zn({
	method: "POST",
	fullPath: "/v1/radar/payment_evaluations"
}) }), Vn = H.method, Hn = H.extend({
	create: Vn({
		method: "POST",
		fullPath: "/v1/issuing/personalization_designs"
	}),
	retrieve: Vn({
		method: "GET",
		fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
	}),
	update: Vn({
		method: "POST",
		fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
	}),
	list: Vn({
		method: "GET",
		fullPath: "/v1/issuing/personalization_designs",
		methodType: "list"
	})
}), Un = H.method, Wn = H.extend({
	activate: Un({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
	}),
	deactivate: Un({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
	}),
	reject: Un({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
	})
}), Gn = H.method, Kn = H.extend({
	retrieve: Gn({
		method: "GET",
		fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
	}),
	list: Gn({
		method: "GET",
		fullPath: "/v1/issuing/physical_bundles",
		methodType: "list"
	})
}), qn = H.method, Jn = H.extend({
	retrieve: qn({
		method: "GET",
		fullPath: "/v1/climate/products/{product}"
	}),
	list: qn({
		method: "GET",
		fullPath: "/v1/climate/products",
		methodType: "list"
	})
}), q = H.method, Yn = H.extend({
	create: q({
		method: "POST",
		fullPath: "/v1/terminal/readers"
	}),
	retrieve: q({
		method: "GET",
		fullPath: "/v1/terminal/readers/{reader}"
	}),
	update: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}"
	}),
	list: q({
		method: "GET",
		fullPath: "/v1/terminal/readers",
		methodType: "list"
	}),
	del: q({
		method: "DELETE",
		fullPath: "/v1/terminal/readers/{reader}"
	}),
	cancelAction: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/cancel_action"
	}),
	collectInputs: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/collect_inputs"
	}),
	collectPaymentMethod: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/collect_payment_method"
	}),
	confirmPaymentIntent: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/confirm_payment_intent"
	}),
	processPaymentIntent: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
	}),
	processSetupIntent: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
	}),
	refundPayment: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/refund_payment"
	}),
	setReaderDisplay: q({
		method: "POST",
		fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
	})
}), Xn = H.method, Zn = H.extend({
	presentPaymentMethod: Xn({
		method: "POST",
		fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
	}),
	succeedInputCollection: Xn({
		method: "POST",
		fullPath: "/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection"
	}),
	timeoutInputCollection: Xn({
		method: "POST",
		fullPath: "/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection"
	})
}), Qn = H.method, $n = H.extend({ create: Qn({
	method: "POST",
	fullPath: "/v1/test_helpers/treasury/received_credits"
}) }), er = H.method, tr = H.extend({
	retrieve: er({
		method: "GET",
		fullPath: "/v1/treasury/received_credits/{id}"
	}),
	list: er({
		method: "GET",
		fullPath: "/v1/treasury/received_credits",
		methodType: "list"
	})
}), nr = H.method, rr = H.extend({ create: nr({
	method: "POST",
	fullPath: "/v1/test_helpers/treasury/received_debits"
}) }), ir = H.method, ar = H.extend({
	retrieve: ir({
		method: "GET",
		fullPath: "/v1/treasury/received_debits/{id}"
	}),
	list: ir({
		method: "GET",
		fullPath: "/v1/treasury/received_debits",
		methodType: "list"
	})
}), or = H.method, sr = H.extend({ expire: or({
	method: "POST",
	fullPath: "/v1/test_helpers/refunds/{refund}/expire"
}) }), cr = H.method, lr = H.extend({
	create: cr({
		method: "POST",
		fullPath: "/v1/tax/registrations"
	}),
	retrieve: cr({
		method: "GET",
		fullPath: "/v1/tax/registrations/{id}"
	}),
	update: cr({
		method: "POST",
		fullPath: "/v1/tax/registrations/{id}"
	}),
	list: cr({
		method: "GET",
		fullPath: "/v1/tax/registrations",
		methodType: "list"
	})
}), ur = H.method, dr = H.extend({
	create: ur({
		method: "POST",
		fullPath: "/v1/reporting/report_runs"
	}),
	retrieve: ur({
		method: "GET",
		fullPath: "/v1/reporting/report_runs/{report_run}"
	}),
	list: ur({
		method: "GET",
		fullPath: "/v1/reporting/report_runs",
		methodType: "list"
	})
}), fr = H.method, pr = H.extend({
	retrieve: fr({
		method: "GET",
		fullPath: "/v1/reporting/report_types/{report_type}"
	}),
	list: fr({
		method: "GET",
		fullPath: "/v1/reporting/report_types",
		methodType: "list"
	})
}), mr = H.method, hr = H.extend({
	create: mr({
		method: "POST",
		fullPath: "/v1/forwarding/requests"
	}),
	retrieve: mr({
		method: "GET",
		fullPath: "/v1/forwarding/requests/{id}"
	}),
	list: mr({
		method: "GET",
		fullPath: "/v1/forwarding/requests",
		methodType: "list"
	})
}), gr = H.method, _r = H.extend({
	retrieve: gr({
		method: "GET",
		fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
	}),
	list: gr({
		method: "GET",
		fullPath: "/v1/sigma/scheduled_query_runs",
		methodType: "list"
	})
}), vr = H.method, yr = H.extend({
	create: vr({
		method: "POST",
		fullPath: "/v1/apps/secrets"
	}),
	list: vr({
		method: "GET",
		fullPath: "/v1/apps/secrets",
		methodType: "list"
	}),
	deleteWhere: vr({
		method: "POST",
		fullPath: "/v1/apps/secrets/delete"
	}),
	find: vr({
		method: "GET",
		fullPath: "/v1/apps/secrets/find"
	})
}), br = H.method, xr = H.extend({ create: br({
	method: "POST",
	fullPath: "/v1/billing_portal/sessions"
}) }), Sr = H.method, Cr = H.extend({
	create: Sr({
		method: "POST",
		fullPath: "/v1/checkout/sessions"
	}),
	retrieve: Sr({
		method: "GET",
		fullPath: "/v1/checkout/sessions/{session}"
	}),
	update: Sr({
		method: "POST",
		fullPath: "/v1/checkout/sessions/{session}"
	}),
	list: Sr({
		method: "GET",
		fullPath: "/v1/checkout/sessions",
		methodType: "list"
	}),
	expire: Sr({
		method: "POST",
		fullPath: "/v1/checkout/sessions/{session}/expire"
	}),
	listLineItems: Sr({
		method: "GET",
		fullPath: "/v1/checkout/sessions/{session}/line_items",
		methodType: "list"
	})
}), wr = H.method, Tr = H.extend({
	create: wr({
		method: "POST",
		fullPath: "/v1/financial_connections/sessions"
	}),
	retrieve: wr({
		method: "GET",
		fullPath: "/v1/financial_connections/sessions/{session}"
	})
}), Er = H.method, Dr = H.extend({
	retrieve: Er({
		method: "GET",
		fullPath: "/v1/tax/settings"
	}),
	update: Er({
		method: "POST",
		fullPath: "/v1/tax/settings"
	})
}), Or = H.method, kr = H.extend({
	retrieve: Or({
		method: "GET",
		fullPath: "/v1/climate/suppliers/{supplier}"
	}),
	list: Or({
		method: "GET",
		fullPath: "/v1/climate/suppliers",
		methodType: "list"
	})
}), Ar = H.method, jr = H.extend({
	create: Ar({
		method: "POST",
		fullPath: "/v1/test_helpers/test_clocks"
	}),
	retrieve: Ar({
		method: "GET",
		fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
	}),
	list: Ar({
		method: "GET",
		fullPath: "/v1/test_helpers/test_clocks",
		methodType: "list"
	}),
	del: Ar({
		method: "DELETE",
		fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
	}),
	advance: Ar({
		method: "POST",
		fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
	})
}), Mr = H.method, Nr = H.extend({
	retrieve: Mr({
		method: "GET",
		fullPath: "/v1/issuing/tokens/{token}"
	}),
	update: Mr({
		method: "POST",
		fullPath: "/v1/issuing/tokens/{token}"
	}),
	list: Mr({
		method: "GET",
		fullPath: "/v1/issuing/tokens",
		methodType: "list"
	})
}), Pr = H.method, Fr = H.extend({
	retrieve: Pr({
		method: "GET",
		fullPath: "/v1/treasury/transaction_entries/{id}"
	}),
	list: Pr({
		method: "GET",
		fullPath: "/v1/treasury/transaction_entries",
		methodType: "list"
	})
}), Ir = H.method, Lr = H.extend({
	retrieve: Ir({
		method: "GET",
		fullPath: "/v1/financial_connections/transactions/{transaction}"
	}),
	list: Ir({
		method: "GET",
		fullPath: "/v1/financial_connections/transactions",
		methodType: "list"
	})
}), Rr = H.method, zr = H.extend({
	retrieve: Rr({
		method: "GET",
		fullPath: "/v1/issuing/transactions/{transaction}"
	}),
	update: Rr({
		method: "POST",
		fullPath: "/v1/issuing/transactions/{transaction}"
	}),
	list: Rr({
		method: "GET",
		fullPath: "/v1/issuing/transactions",
		methodType: "list"
	})
}), Br = H.method, Vr = H.extend({
	retrieve: Br({
		method: "GET",
		fullPath: "/v1/tax/transactions/{transaction}"
	}),
	createFromCalculation: Br({
		method: "POST",
		fullPath: "/v1/tax/transactions/create_from_calculation"
	}),
	createReversal: Br({
		method: "POST",
		fullPath: "/v1/tax/transactions/create_reversal"
	}),
	listLineItems: Br({
		method: "GET",
		fullPath: "/v1/tax/transactions/{transaction}/line_items",
		methodType: "list"
	})
}), Hr = H.method, Ur = H.extend({
	createForceCapture: Hr({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
	}),
	createUnlinkedRefund: Hr({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
	}),
	refund: Hr({
		method: "POST",
		fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
	})
}), Wr = H.method, Gr = H.extend({
	retrieve: Wr({
		method: "GET",
		fullPath: "/v1/treasury/transactions/{id}"
	}),
	list: Wr({
		method: "GET",
		fullPath: "/v1/treasury/transactions",
		methodType: "list"
	})
}), Kr = H.method, qr = H.extend({
	create: Kr({
		method: "POST",
		fullPath: "/v1/radar/value_list_items"
	}),
	retrieve: Kr({
		method: "GET",
		fullPath: "/v1/radar/value_list_items/{item}"
	}),
	list: Kr({
		method: "GET",
		fullPath: "/v1/radar/value_list_items",
		methodType: "list"
	}),
	del: Kr({
		method: "DELETE",
		fullPath: "/v1/radar/value_list_items/{item}"
	})
}), Jr = H.method, Yr = H.extend({
	create: Jr({
		method: "POST",
		fullPath: "/v1/radar/value_lists"
	}),
	retrieve: Jr({
		method: "GET",
		fullPath: "/v1/radar/value_lists/{value_list}"
	}),
	update: Jr({
		method: "POST",
		fullPath: "/v1/radar/value_lists/{value_list}"
	}),
	list: Jr({
		method: "GET",
		fullPath: "/v1/radar/value_lists",
		methodType: "list"
	}),
	del: Jr({
		method: "DELETE",
		fullPath: "/v1/radar/value_lists/{value_list}"
	})
}), Xr = H.method, Zr = H.extend({
	retrieve: Xr({
		method: "GET",
		fullPath: "/v1/identity/verification_reports/{report}"
	}),
	list: Xr({
		method: "GET",
		fullPath: "/v1/identity/verification_reports",
		methodType: "list"
	})
}), Qr = H.method, $r = H.extend({
	create: Qr({
		method: "POST",
		fullPath: "/v1/identity/verification_sessions"
	}),
	retrieve: Qr({
		method: "GET",
		fullPath: "/v1/identity/verification_sessions/{session}"
	}),
	update: Qr({
		method: "POST",
		fullPath: "/v1/identity/verification_sessions/{session}"
	}),
	list: Qr({
		method: "GET",
		fullPath: "/v1/identity/verification_sessions",
		methodType: "list"
	}),
	cancel: Qr({
		method: "POST",
		fullPath: "/v1/identity/verification_sessions/{session}/cancel"
	}),
	redact: Qr({
		method: "POST",
		fullPath: "/v1/identity/verification_sessions/{session}/redact"
	})
}), J = H.method, ei = H.extend({
	create: J({
		method: "POST",
		fullPath: "/v1/accounts"
	}),
	retrieve(e, ...t) {
		return typeof e == "string" ? J({
			method: "GET",
			fullPath: "/v1/accounts/{id}"
		}).apply(this, [e, ...t]) : (e ?? [].shift.apply([e, ...t]), J({
			method: "GET",
			fullPath: "/v1/account"
		}).apply(this, [e, ...t]));
	},
	update: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}"
	}),
	list: J({
		method: "GET",
		fullPath: "/v1/accounts",
		methodType: "list"
	}),
	del: J({
		method: "DELETE",
		fullPath: "/v1/accounts/{account}"
	}),
	createExternalAccount: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/external_accounts"
	}),
	createLoginLink: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/login_links"
	}),
	createPerson: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/persons"
	}),
	deleteExternalAccount: J({
		method: "DELETE",
		fullPath: "/v1/accounts/{account}/external_accounts/{id}"
	}),
	deletePerson: J({
		method: "DELETE",
		fullPath: "/v1/accounts/{account}/persons/{person}"
	}),
	listCapabilities: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/capabilities",
		methodType: "list"
	}),
	listExternalAccounts: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/external_accounts",
		methodType: "list"
	}),
	listPersons: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/persons",
		methodType: "list"
	}),
	reject: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/reject"
	}),
	retrieveCurrent: J({
		method: "GET",
		fullPath: "/v1/account"
	}),
	retrieveCapability: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/capabilities/{capability}"
	}),
	retrieveExternalAccount: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/external_accounts/{id}"
	}),
	retrievePerson: J({
		method: "GET",
		fullPath: "/v1/accounts/{account}/persons/{person}"
	}),
	updateCapability: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/capabilities/{capability}"
	}),
	updateExternalAccount: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/external_accounts/{id}"
	}),
	updatePerson: J({
		method: "POST",
		fullPath: "/v1/accounts/{account}/persons/{person}"
	})
}), ti = H.method, ni = H.extend({ create: ti({
	method: "POST",
	fullPath: "/v1/account_links"
}) }), ri = H.method, ii = H.extend({ create: ri({
	method: "POST",
	fullPath: "/v1/account_sessions"
}) }), ai = H.method, oi = H.extend({
	create: ai({
		method: "POST",
		fullPath: "/v1/apple_pay/domains"
	}),
	retrieve: ai({
		method: "GET",
		fullPath: "/v1/apple_pay/domains/{domain}"
	}),
	list: ai({
		method: "GET",
		fullPath: "/v1/apple_pay/domains",
		methodType: "list"
	}),
	del: ai({
		method: "DELETE",
		fullPath: "/v1/apple_pay/domains/{domain}"
	})
}), si = H.method, ci = H.extend({
	retrieve: si({
		method: "GET",
		fullPath: "/v1/application_fees/{id}"
	}),
	list: si({
		method: "GET",
		fullPath: "/v1/application_fees",
		methodType: "list"
	}),
	createRefund: si({
		method: "POST",
		fullPath: "/v1/application_fees/{id}/refunds"
	}),
	listRefunds: si({
		method: "GET",
		fullPath: "/v1/application_fees/{id}/refunds",
		methodType: "list"
	}),
	retrieveRefund: si({
		method: "GET",
		fullPath: "/v1/application_fees/{fee}/refunds/{id}"
	}),
	updateRefund: si({
		method: "POST",
		fullPath: "/v1/application_fees/{fee}/refunds/{id}"
	})
}), li = H.method, ui = H.extend({ retrieve: li({
	method: "GET",
	fullPath: "/v1/balance"
}) }), di = H.method, fi = H.extend({
	retrieve: di({
		method: "GET",
		fullPath: "/v1/balance_settings"
	}),
	update: di({
		method: "POST",
		fullPath: "/v1/balance_settings"
	})
}), pi = H.method, mi = H.extend({
	retrieve: pi({
		method: "GET",
		fullPath: "/v1/balance_transactions/{id}"
	}),
	list: pi({
		method: "GET",
		fullPath: "/v1/balance_transactions",
		methodType: "list"
	})
}), hi = H.method, gi = H.extend({
	create: hi({
		method: "POST",
		fullPath: "/v1/charges"
	}),
	retrieve: hi({
		method: "GET",
		fullPath: "/v1/charges/{charge}"
	}),
	update: hi({
		method: "POST",
		fullPath: "/v1/charges/{charge}"
	}),
	list: hi({
		method: "GET",
		fullPath: "/v1/charges",
		methodType: "list"
	}),
	capture: hi({
		method: "POST",
		fullPath: "/v1/charges/{charge}/capture"
	}),
	search: hi({
		method: "GET",
		fullPath: "/v1/charges/search",
		methodType: "search"
	})
}), _i = H.method, vi = H.extend({ retrieve: _i({
	method: "GET",
	fullPath: "/v1/confirmation_tokens/{confirmation_token}"
}) }), yi = H.method, bi = H.extend({
	retrieve: yi({
		method: "GET",
		fullPath: "/v1/country_specs/{country}"
	}),
	list: yi({
		method: "GET",
		fullPath: "/v1/country_specs",
		methodType: "list"
	})
}), xi = H.method, Si = H.extend({
	create: xi({
		method: "POST",
		fullPath: "/v1/coupons"
	}),
	retrieve: xi({
		method: "GET",
		fullPath: "/v1/coupons/{coupon}"
	}),
	update: xi({
		method: "POST",
		fullPath: "/v1/coupons/{coupon}"
	}),
	list: xi({
		method: "GET",
		fullPath: "/v1/coupons",
		methodType: "list"
	}),
	del: xi({
		method: "DELETE",
		fullPath: "/v1/coupons/{coupon}"
	})
}), Ci = H.method, wi = H.extend({
	create: Ci({
		method: "POST",
		fullPath: "/v1/credit_notes"
	}),
	retrieve: Ci({
		method: "GET",
		fullPath: "/v1/credit_notes/{id}"
	}),
	update: Ci({
		method: "POST",
		fullPath: "/v1/credit_notes/{id}"
	}),
	list: Ci({
		method: "GET",
		fullPath: "/v1/credit_notes",
		methodType: "list"
	}),
	listLineItems: Ci({
		method: "GET",
		fullPath: "/v1/credit_notes/{credit_note}/lines",
		methodType: "list"
	}),
	listPreviewLineItems: Ci({
		method: "GET",
		fullPath: "/v1/credit_notes/preview/lines",
		methodType: "list"
	}),
	preview: Ci({
		method: "GET",
		fullPath: "/v1/credit_notes/preview"
	}),
	voidCreditNote: Ci({
		method: "POST",
		fullPath: "/v1/credit_notes/{id}/void"
	})
}), Ti = H.method, Ei = H.extend({ create: Ti({
	method: "POST",
	fullPath: "/v1/customer_sessions"
}) }), Y = H.method, Di = H.extend({
	create: Y({
		method: "POST",
		fullPath: "/v1/customers"
	}),
	retrieve: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}"
	}),
	update: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}"
	}),
	list: Y({
		method: "GET",
		fullPath: "/v1/customers",
		methodType: "list"
	}),
	del: Y({
		method: "DELETE",
		fullPath: "/v1/customers/{customer}"
	}),
	createBalanceTransaction: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/balance_transactions"
	}),
	createFundingInstructions: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/funding_instructions"
	}),
	createSource: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/sources"
	}),
	createTaxId: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/tax_ids"
	}),
	deleteDiscount: Y({
		method: "DELETE",
		fullPath: "/v1/customers/{customer}/discount"
	}),
	deleteSource: Y({
		method: "DELETE",
		fullPath: "/v1/customers/{customer}/sources/{id}"
	}),
	deleteTaxId: Y({
		method: "DELETE",
		fullPath: "/v1/customers/{customer}/tax_ids/{id}"
	}),
	listBalanceTransactions: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/balance_transactions",
		methodType: "list"
	}),
	listCashBalanceTransactions: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/cash_balance_transactions",
		methodType: "list"
	}),
	listPaymentMethods: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/payment_methods",
		methodType: "list"
	}),
	listSources: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/sources",
		methodType: "list"
	}),
	listTaxIds: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/tax_ids",
		methodType: "list"
	}),
	retrieveBalanceTransaction: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
	}),
	retrieveCashBalance: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/cash_balance"
	}),
	retrieveCashBalanceTransaction: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
	}),
	retrievePaymentMethod: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
	}),
	retrieveSource: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/sources/{id}"
	}),
	retrieveTaxId: Y({
		method: "GET",
		fullPath: "/v1/customers/{customer}/tax_ids/{id}"
	}),
	search: Y({
		method: "GET",
		fullPath: "/v1/customers/search",
		methodType: "search"
	}),
	updateBalanceTransaction: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
	}),
	updateCashBalance: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/cash_balance"
	}),
	updateSource: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/sources/{id}"
	}),
	verifySource: Y({
		method: "POST",
		fullPath: "/v1/customers/{customer}/sources/{id}/verify"
	})
}), Oi = H.method, ki = H.extend({
	retrieve: Oi({
		method: "GET",
		fullPath: "/v1/disputes/{dispute}"
	}),
	update: Oi({
		method: "POST",
		fullPath: "/v1/disputes/{dispute}"
	}),
	list: Oi({
		method: "GET",
		fullPath: "/v1/disputes",
		methodType: "list"
	}),
	close: Oi({
		method: "POST",
		fullPath: "/v1/disputes/{dispute}/close"
	})
}), Ai = H.method, ji = H.extend({
	create: Ai({
		method: "POST",
		fullPath: "/v1/ephemeral_keys",
		validator: (e, t) => {
			if (!t.headers || !t.headers["Stripe-Version"]) throw Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
		}
	}),
	del: Ai({
		method: "DELETE",
		fullPath: "/v1/ephemeral_keys/{key}"
	})
}), Mi = H.method, Ni = H.extend({
	retrieve: Mi({
		method: "GET",
		fullPath: "/v1/events/{id}"
	}),
	list: Mi({
		method: "GET",
		fullPath: "/v1/events",
		methodType: "list"
	})
}), Pi = H.method, Fi = H.extend({
	retrieve: Pi({
		method: "GET",
		fullPath: "/v1/exchange_rates/{rate_id}"
	}),
	list: Pi({
		method: "GET",
		fullPath: "/v1/exchange_rates",
		methodType: "list"
	})
}), Ii = H.method, Li = H.extend({
	create: Ii({
		method: "POST",
		fullPath: "/v1/file_links"
	}),
	retrieve: Ii({
		method: "GET",
		fullPath: "/v1/file_links/{link}"
	}),
	update: Ii({
		method: "POST",
		fullPath: "/v1/file_links/{link}"
	}),
	list: Ii({
		method: "GET",
		fullPath: "/v1/file_links",
		methodType: "list"
	})
}), Ri = (e, t, n) => {
	let r = (Math.round(Math.random() * 0x2386f26fc10000) + Math.round(Math.random() * 0x2386f26fc10000)).toString();
	n["Content-Type"] = `multipart/form-data; boundary=${r}`;
	let i = new TextEncoder(), a = new Uint8Array(), o = i.encode("\r\n");
	function s(e) {
		let t = a, n = e instanceof Uint8Array ? e : new Uint8Array(i.encode(e));
		a = new Uint8Array(t.length + n.length + 2), a.set(t), a.set(n, t.length), a.set(o, a.length - 2);
	}
	function c(e) {
		return `"${e.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
	}
	let l = ce(t);
	for (let e in l) {
		if (!Object.prototype.hasOwnProperty.call(l, e)) continue;
		let t = l[e];
		if (s(`--${r}`), Object.prototype.hasOwnProperty.call(t, "data")) {
			let n = t;
			s(`Content-Disposition: form-data; name=${c(e)}; filename=${c(n.name || "blob")}`), s(`Content-Type: ${n.type || "application/octet-stream"}`), s(""), s(n.data);
		} else s(`Content-Disposition: form-data; name=${c(e)}`), s(""), s(t);
	}
	return s(`--${r}--`), a;
};
function zi(e, t, n, r) {
	if (t ||= {}, e !== "POST") return r(null, y(t));
	this._stripe._platformFunctions.tryBufferData(t).then((t) => r(null, Ri(e, t, n))).catch((e) => r(e, null));
}
//#endregion
//#region ../../node_modules/stripe/esm/resources/Files.js
var Bi = H.method, Vi = H.extend({
	create: Bi({
		method: "POST",
		fullPath: "/v1/files",
		headers: { "Content-Type": "multipart/form-data" },
		host: "files.stripe.com"
	}),
	retrieve: Bi({
		method: "GET",
		fullPath: "/v1/files/{file}"
	}),
	list: Bi({
		method: "GET",
		fullPath: "/v1/files",
		methodType: "list"
	}),
	requestDataProcessor: zi
}), Hi = H.method, Ui = H.extend({
	create: Hi({
		method: "POST",
		fullPath: "/v1/invoiceitems"
	}),
	retrieve: Hi({
		method: "GET",
		fullPath: "/v1/invoiceitems/{invoiceitem}"
	}),
	update: Hi({
		method: "POST",
		fullPath: "/v1/invoiceitems/{invoiceitem}"
	}),
	list: Hi({
		method: "GET",
		fullPath: "/v1/invoiceitems",
		methodType: "list"
	}),
	del: Hi({
		method: "DELETE",
		fullPath: "/v1/invoiceitems/{invoiceitem}"
	})
}), Wi = H.method, Gi = H.extend({
	retrieve: Wi({
		method: "GET",
		fullPath: "/v1/invoice_payments/{invoice_payment}"
	}),
	list: Wi({
		method: "GET",
		fullPath: "/v1/invoice_payments",
		methodType: "list"
	})
}), Ki = H.method, qi = H.extend({
	retrieve: Ki({
		method: "GET",
		fullPath: "/v1/invoice_rendering_templates/{template}"
	}),
	list: Ki({
		method: "GET",
		fullPath: "/v1/invoice_rendering_templates",
		methodType: "list"
	}),
	archive: Ki({
		method: "POST",
		fullPath: "/v1/invoice_rendering_templates/{template}/archive"
	}),
	unarchive: Ki({
		method: "POST",
		fullPath: "/v1/invoice_rendering_templates/{template}/unarchive"
	})
}), X = H.method, Ji = H.extend({
	create: X({
		method: "POST",
		fullPath: "/v1/invoices"
	}),
	retrieve: X({
		method: "GET",
		fullPath: "/v1/invoices/{invoice}"
	}),
	update: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}"
	}),
	list: X({
		method: "GET",
		fullPath: "/v1/invoices",
		methodType: "list"
	}),
	del: X({
		method: "DELETE",
		fullPath: "/v1/invoices/{invoice}"
	}),
	addLines: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/add_lines"
	}),
	attachPayment: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/attach_payment"
	}),
	createPreview: X({
		method: "POST",
		fullPath: "/v1/invoices/create_preview"
	}),
	finalizeInvoice: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/finalize"
	}),
	listLineItems: X({
		method: "GET",
		fullPath: "/v1/invoices/{invoice}/lines",
		methodType: "list"
	}),
	markUncollectible: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
	}),
	pay: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/pay"
	}),
	removeLines: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/remove_lines"
	}),
	search: X({
		method: "GET",
		fullPath: "/v1/invoices/search",
		methodType: "search"
	}),
	sendInvoice: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/send"
	}),
	updateLines: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/update_lines"
	}),
	updateLineItem: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
	}),
	voidInvoice: X({
		method: "POST",
		fullPath: "/v1/invoices/{invoice}/void"
	})
}), Yi = H.method, Xi = H.extend({ retrieve: Yi({
	method: "GET",
	fullPath: "/v1/mandates/{mandate}"
}) }), Zi = H.method, Qi = "connect.stripe.com", $i = H.extend({
	basePath: "/",
	authorizeUrl(e, t) {
		e ||= {}, t ||= {};
		let n = "oauth/authorize";
		return t.express && (n = `express/${n}`), e.response_type ||= "code", e.client_id ||= this._stripe.getClientId(), e.scope ||= "read_write", `https://${Qi}/${n}?${y(e)}`;
	},
	token: Zi({
		method: "POST",
		path: "oauth/token",
		host: Qi
	}),
	deauthorize(e, ...t) {
		return e.client_id ||= this._stripe.getClientId(), Zi({
			method: "POST",
			path: "oauth/deauthorize",
			host: Qi
		}).apply(this, [e, ...t]);
	}
}), ea = H.method, ta = H.extend({
	retrieve: ea({
		method: "GET",
		fullPath: "/v1/payment_attempt_records/{id}"
	}),
	list: ea({
		method: "GET",
		fullPath: "/v1/payment_attempt_records",
		methodType: "list"
	})
}), na = H.method, ra = H.extend({
	create: na({
		method: "POST",
		fullPath: "/v1/payment_intents"
	}),
	retrieve: na({
		method: "GET",
		fullPath: "/v1/payment_intents/{intent}"
	}),
	update: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}"
	}),
	list: na({
		method: "GET",
		fullPath: "/v1/payment_intents",
		methodType: "list"
	}),
	applyCustomerBalance: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
	}),
	cancel: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/cancel"
	}),
	capture: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/capture"
	}),
	confirm: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/confirm"
	}),
	incrementAuthorization: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/increment_authorization"
	}),
	listAmountDetailsLineItems: na({
		method: "GET",
		fullPath: "/v1/payment_intents/{intent}/amount_details_line_items",
		methodType: "list"
	}),
	search: na({
		method: "GET",
		fullPath: "/v1/payment_intents/search",
		methodType: "search"
	}),
	verifyMicrodeposits: na({
		method: "POST",
		fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
	})
}), ia = H.method, aa = H.extend({
	create: ia({
		method: "POST",
		fullPath: "/v1/payment_links"
	}),
	retrieve: ia({
		method: "GET",
		fullPath: "/v1/payment_links/{payment_link}"
	}),
	update: ia({
		method: "POST",
		fullPath: "/v1/payment_links/{payment_link}"
	}),
	list: ia({
		method: "GET",
		fullPath: "/v1/payment_links",
		methodType: "list"
	}),
	listLineItems: ia({
		method: "GET",
		fullPath: "/v1/payment_links/{payment_link}/line_items",
		methodType: "list"
	})
}), oa = H.method, sa = H.extend({
	create: oa({
		method: "POST",
		fullPath: "/v1/payment_method_configurations"
	}),
	retrieve: oa({
		method: "GET",
		fullPath: "/v1/payment_method_configurations/{configuration}"
	}),
	update: oa({
		method: "POST",
		fullPath: "/v1/payment_method_configurations/{configuration}"
	}),
	list: oa({
		method: "GET",
		fullPath: "/v1/payment_method_configurations",
		methodType: "list"
	})
}), ca = H.method, la = H.extend({
	create: ca({
		method: "POST",
		fullPath: "/v1/payment_method_domains"
	}),
	retrieve: ca({
		method: "GET",
		fullPath: "/v1/payment_method_domains/{payment_method_domain}"
	}),
	update: ca({
		method: "POST",
		fullPath: "/v1/payment_method_domains/{payment_method_domain}"
	}),
	list: ca({
		method: "GET",
		fullPath: "/v1/payment_method_domains",
		methodType: "list"
	}),
	validate: ca({
		method: "POST",
		fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
	})
}), ua = H.method, da = H.extend({
	create: ua({
		method: "POST",
		fullPath: "/v1/payment_methods"
	}),
	retrieve: ua({
		method: "GET",
		fullPath: "/v1/payment_methods/{payment_method}"
	}),
	update: ua({
		method: "POST",
		fullPath: "/v1/payment_methods/{payment_method}"
	}),
	list: ua({
		method: "GET",
		fullPath: "/v1/payment_methods",
		methodType: "list"
	}),
	attach: ua({
		method: "POST",
		fullPath: "/v1/payment_methods/{payment_method}/attach"
	}),
	detach: ua({
		method: "POST",
		fullPath: "/v1/payment_methods/{payment_method}/detach"
	})
}), fa = H.method, pa = H.extend({
	retrieve: fa({
		method: "GET",
		fullPath: "/v1/payment_records/{id}"
	}),
	reportPayment: fa({
		method: "POST",
		fullPath: "/v1/payment_records/report_payment"
	}),
	reportPaymentAttempt: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_payment_attempt"
	}),
	reportPaymentAttemptCanceled: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_payment_attempt_canceled"
	}),
	reportPaymentAttemptFailed: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_payment_attempt_failed"
	}),
	reportPaymentAttemptGuaranteed: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_payment_attempt_guaranteed"
	}),
	reportPaymentAttemptInformational: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_payment_attempt_informational"
	}),
	reportRefund: fa({
		method: "POST",
		fullPath: "/v1/payment_records/{id}/report_refund"
	})
}), ma = H.method, ha = H.extend({
	create: ma({
		method: "POST",
		fullPath: "/v1/payouts"
	}),
	retrieve: ma({
		method: "GET",
		fullPath: "/v1/payouts/{payout}"
	}),
	update: ma({
		method: "POST",
		fullPath: "/v1/payouts/{payout}"
	}),
	list: ma({
		method: "GET",
		fullPath: "/v1/payouts",
		methodType: "list"
	}),
	cancel: ma({
		method: "POST",
		fullPath: "/v1/payouts/{payout}/cancel"
	}),
	reverse: ma({
		method: "POST",
		fullPath: "/v1/payouts/{payout}/reverse"
	})
}), ga = H.method, _a = H.extend({
	create: ga({
		method: "POST",
		fullPath: "/v1/plans"
	}),
	retrieve: ga({
		method: "GET",
		fullPath: "/v1/plans/{plan}"
	}),
	update: ga({
		method: "POST",
		fullPath: "/v1/plans/{plan}"
	}),
	list: ga({
		method: "GET",
		fullPath: "/v1/plans",
		methodType: "list"
	}),
	del: ga({
		method: "DELETE",
		fullPath: "/v1/plans/{plan}"
	})
}), va = H.method, ya = H.extend({
	create: va({
		method: "POST",
		fullPath: "/v1/prices"
	}),
	retrieve: va({
		method: "GET",
		fullPath: "/v1/prices/{price}"
	}),
	update: va({
		method: "POST",
		fullPath: "/v1/prices/{price}"
	}),
	list: va({
		method: "GET",
		fullPath: "/v1/prices",
		methodType: "list"
	}),
	search: va({
		method: "GET",
		fullPath: "/v1/prices/search",
		methodType: "search"
	})
}), ba = H.method, xa = H.extend({
	create: ba({
		method: "POST",
		fullPath: "/v1/products"
	}),
	retrieve: ba({
		method: "GET",
		fullPath: "/v1/products/{id}"
	}),
	update: ba({
		method: "POST",
		fullPath: "/v1/products/{id}"
	}),
	list: ba({
		method: "GET",
		fullPath: "/v1/products",
		methodType: "list"
	}),
	del: ba({
		method: "DELETE",
		fullPath: "/v1/products/{id}"
	}),
	createFeature: ba({
		method: "POST",
		fullPath: "/v1/products/{product}/features"
	}),
	deleteFeature: ba({
		method: "DELETE",
		fullPath: "/v1/products/{product}/features/{id}"
	}),
	listFeatures: ba({
		method: "GET",
		fullPath: "/v1/products/{product}/features",
		methodType: "list"
	}),
	retrieveFeature: ba({
		method: "GET",
		fullPath: "/v1/products/{product}/features/{id}"
	}),
	search: ba({
		method: "GET",
		fullPath: "/v1/products/search",
		methodType: "search"
	})
}), Sa = H.method, Ca = H.extend({
	create: Sa({
		method: "POST",
		fullPath: "/v1/promotion_codes"
	}),
	retrieve: Sa({
		method: "GET",
		fullPath: "/v1/promotion_codes/{promotion_code}"
	}),
	update: Sa({
		method: "POST",
		fullPath: "/v1/promotion_codes/{promotion_code}"
	}),
	list: Sa({
		method: "GET",
		fullPath: "/v1/promotion_codes",
		methodType: "list"
	})
}), wa = H.method, Ta = H.extend({
	create: wa({
		method: "POST",
		fullPath: "/v1/quotes"
	}),
	retrieve: wa({
		method: "GET",
		fullPath: "/v1/quotes/{quote}"
	}),
	update: wa({
		method: "POST",
		fullPath: "/v1/quotes/{quote}"
	}),
	list: wa({
		method: "GET",
		fullPath: "/v1/quotes",
		methodType: "list"
	}),
	accept: wa({
		method: "POST",
		fullPath: "/v1/quotes/{quote}/accept"
	}),
	cancel: wa({
		method: "POST",
		fullPath: "/v1/quotes/{quote}/cancel"
	}),
	finalizeQuote: wa({
		method: "POST",
		fullPath: "/v1/quotes/{quote}/finalize"
	}),
	listComputedUpfrontLineItems: wa({
		method: "GET",
		fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
		methodType: "list"
	}),
	listLineItems: wa({
		method: "GET",
		fullPath: "/v1/quotes/{quote}/line_items",
		methodType: "list"
	}),
	pdf: wa({
		method: "GET",
		fullPath: "/v1/quotes/{quote}/pdf",
		host: "files.stripe.com",
		streaming: !0
	})
}), Ea = H.method, Da = H.extend({
	create: Ea({
		method: "POST",
		fullPath: "/v1/refunds"
	}),
	retrieve: Ea({
		method: "GET",
		fullPath: "/v1/refunds/{refund}"
	}),
	update: Ea({
		method: "POST",
		fullPath: "/v1/refunds/{refund}"
	}),
	list: Ea({
		method: "GET",
		fullPath: "/v1/refunds",
		methodType: "list"
	}),
	cancel: Ea({
		method: "POST",
		fullPath: "/v1/refunds/{refund}/cancel"
	})
}), Oa = H.method, ka = H.extend({
	retrieve: Oa({
		method: "GET",
		fullPath: "/v1/reviews/{review}"
	}),
	list: Oa({
		method: "GET",
		fullPath: "/v1/reviews",
		methodType: "list"
	}),
	approve: Oa({
		method: "POST",
		fullPath: "/v1/reviews/{review}/approve"
	})
}), Aa = H.method, ja = H.extend({ list: Aa({
	method: "GET",
	fullPath: "/v1/setup_attempts",
	methodType: "list"
}) }), Ma = H.method, Na = H.extend({
	create: Ma({
		method: "POST",
		fullPath: "/v1/setup_intents"
	}),
	retrieve: Ma({
		method: "GET",
		fullPath: "/v1/setup_intents/{intent}"
	}),
	update: Ma({
		method: "POST",
		fullPath: "/v1/setup_intents/{intent}"
	}),
	list: Ma({
		method: "GET",
		fullPath: "/v1/setup_intents",
		methodType: "list"
	}),
	cancel: Ma({
		method: "POST",
		fullPath: "/v1/setup_intents/{intent}/cancel"
	}),
	confirm: Ma({
		method: "POST",
		fullPath: "/v1/setup_intents/{intent}/confirm"
	}),
	verifyMicrodeposits: Ma({
		method: "POST",
		fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
	})
}), Pa = H.method, Fa = H.extend({
	create: Pa({
		method: "POST",
		fullPath: "/v1/shipping_rates"
	}),
	retrieve: Pa({
		method: "GET",
		fullPath: "/v1/shipping_rates/{shipping_rate_token}"
	}),
	update: Pa({
		method: "POST",
		fullPath: "/v1/shipping_rates/{shipping_rate_token}"
	}),
	list: Pa({
		method: "GET",
		fullPath: "/v1/shipping_rates",
		methodType: "list"
	})
}), Ia = H.method, La = H.extend({
	create: Ia({
		method: "POST",
		fullPath: "/v1/sources"
	}),
	retrieve: Ia({
		method: "GET",
		fullPath: "/v1/sources/{source}"
	}),
	update: Ia({
		method: "POST",
		fullPath: "/v1/sources/{source}"
	}),
	listSourceTransactions: Ia({
		method: "GET",
		fullPath: "/v1/sources/{source}/source_transactions",
		methodType: "list"
	}),
	verify: Ia({
		method: "POST",
		fullPath: "/v1/sources/{source}/verify"
	})
}), Ra = H.method, za = H.extend({
	create: Ra({
		method: "POST",
		fullPath: "/v1/subscription_items"
	}),
	retrieve: Ra({
		method: "GET",
		fullPath: "/v1/subscription_items/{item}"
	}),
	update: Ra({
		method: "POST",
		fullPath: "/v1/subscription_items/{item}"
	}),
	list: Ra({
		method: "GET",
		fullPath: "/v1/subscription_items",
		methodType: "list"
	}),
	del: Ra({
		method: "DELETE",
		fullPath: "/v1/subscription_items/{item}"
	})
}), Ba = H.method, Va = H.extend({
	create: Ba({
		method: "POST",
		fullPath: "/v1/subscription_schedules"
	}),
	retrieve: Ba({
		method: "GET",
		fullPath: "/v1/subscription_schedules/{schedule}"
	}),
	update: Ba({
		method: "POST",
		fullPath: "/v1/subscription_schedules/{schedule}"
	}),
	list: Ba({
		method: "GET",
		fullPath: "/v1/subscription_schedules",
		methodType: "list"
	}),
	cancel: Ba({
		method: "POST",
		fullPath: "/v1/subscription_schedules/{schedule}/cancel"
	}),
	release: Ba({
		method: "POST",
		fullPath: "/v1/subscription_schedules/{schedule}/release"
	})
}), Ha = H.method, Ua = H.extend({
	create: Ha({
		method: "POST",
		fullPath: "/v1/subscriptions"
	}),
	retrieve: Ha({
		method: "GET",
		fullPath: "/v1/subscriptions/{subscription_exposed_id}"
	}),
	update: Ha({
		method: "POST",
		fullPath: "/v1/subscriptions/{subscription_exposed_id}"
	}),
	list: Ha({
		method: "GET",
		fullPath: "/v1/subscriptions",
		methodType: "list"
	}),
	cancel: Ha({
		method: "DELETE",
		fullPath: "/v1/subscriptions/{subscription_exposed_id}"
	}),
	deleteDiscount: Ha({
		method: "DELETE",
		fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
	}),
	migrate: Ha({
		method: "POST",
		fullPath: "/v1/subscriptions/{subscription}/migrate"
	}),
	resume: Ha({
		method: "POST",
		fullPath: "/v1/subscriptions/{subscription}/resume"
	}),
	search: Ha({
		method: "GET",
		fullPath: "/v1/subscriptions/search",
		methodType: "search"
	})
}), Wa = H.method, Ga = H.extend({
	retrieve: Wa({
		method: "GET",
		fullPath: "/v1/tax_codes/{id}"
	}),
	list: Wa({
		method: "GET",
		fullPath: "/v1/tax_codes",
		methodType: "list"
	})
}), Ka = H.method, qa = H.extend({
	create: Ka({
		method: "POST",
		fullPath: "/v1/tax_ids"
	}),
	retrieve: Ka({
		method: "GET",
		fullPath: "/v1/tax_ids/{id}"
	}),
	list: Ka({
		method: "GET",
		fullPath: "/v1/tax_ids",
		methodType: "list"
	}),
	del: Ka({
		method: "DELETE",
		fullPath: "/v1/tax_ids/{id}"
	})
}), Ja = H.method, Ya = H.extend({
	create: Ja({
		method: "POST",
		fullPath: "/v1/tax_rates"
	}),
	retrieve: Ja({
		method: "GET",
		fullPath: "/v1/tax_rates/{tax_rate}"
	}),
	update: Ja({
		method: "POST",
		fullPath: "/v1/tax_rates/{tax_rate}"
	}),
	list: Ja({
		method: "GET",
		fullPath: "/v1/tax_rates",
		methodType: "list"
	})
}), Xa = H.method, Za = H.extend({
	create: Xa({
		method: "POST",
		fullPath: "/v1/tokens"
	}),
	retrieve: Xa({
		method: "GET",
		fullPath: "/v1/tokens/{token}"
	})
}), Qa = H.method, $a = H.extend({
	create: Qa({
		method: "POST",
		fullPath: "/v1/topups"
	}),
	retrieve: Qa({
		method: "GET",
		fullPath: "/v1/topups/{topup}"
	}),
	update: Qa({
		method: "POST",
		fullPath: "/v1/topups/{topup}"
	}),
	list: Qa({
		method: "GET",
		fullPath: "/v1/topups",
		methodType: "list"
	}),
	cancel: Qa({
		method: "POST",
		fullPath: "/v1/topups/{topup}/cancel"
	})
}), eo = H.method, to = H.extend({
	create: eo({
		method: "POST",
		fullPath: "/v1/transfers"
	}),
	retrieve: eo({
		method: "GET",
		fullPath: "/v1/transfers/{transfer}"
	}),
	update: eo({
		method: "POST",
		fullPath: "/v1/transfers/{transfer}"
	}),
	list: eo({
		method: "GET",
		fullPath: "/v1/transfers",
		methodType: "list"
	}),
	createReversal: eo({
		method: "POST",
		fullPath: "/v1/transfers/{id}/reversals"
	}),
	listReversals: eo({
		method: "GET",
		fullPath: "/v1/transfers/{id}/reversals",
		methodType: "list"
	}),
	retrieveReversal: eo({
		method: "GET",
		fullPath: "/v1/transfers/{transfer}/reversals/{id}"
	}),
	updateReversal: eo({
		method: "POST",
		fullPath: "/v1/transfers/{transfer}/reversals/{id}"
	})
}), no = H.method, ro = H.extend({
	create: no({
		method: "POST",
		fullPath: "/v1/webhook_endpoints"
	}),
	retrieve: no({
		method: "GET",
		fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
	}),
	update: no({
		method: "POST",
		fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
	}),
	list: no({
		method: "GET",
		fullPath: "/v1/webhook_endpoints",
		methodType: "list"
	}),
	del: no({
		method: "DELETE",
		fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
	})
}), io = /* @__PURE__ */ l({
	Account: () => ei,
	AccountLinks: () => ni,
	AccountSessions: () => ii,
	Accounts: () => ei,
	ApplePayDomains: () => oi,
	ApplicationFees: () => ci,
	Apps: () => ao,
	Balance: () => ui,
	BalanceSettings: () => fi,
	BalanceTransactions: () => mi,
	Billing: () => oo,
	BillingPortal: () => so,
	Charges: () => gi,
	Checkout: () => co,
	Climate: () => lo,
	ConfirmationTokens: () => vi,
	CountrySpecs: () => bi,
	Coupons: () => Si,
	CreditNotes: () => wi,
	CustomerSessions: () => Ei,
	Customers: () => Di,
	Disputes: () => ki,
	Entitlements: () => uo,
	EphemeralKeys: () => ji,
	Events: () => Ni,
	ExchangeRates: () => Fi,
	FileLinks: () => Li,
	Files: () => Vi,
	FinancialConnections: () => fo,
	Forwarding: () => po,
	Identity: () => mo,
	InvoiceItems: () => Ui,
	InvoicePayments: () => Gi,
	InvoiceRenderingTemplates: () => qi,
	Invoices: () => Ji,
	Issuing: () => ho,
	Mandates: () => Xi,
	OAuth: () => $i,
	PaymentAttemptRecords: () => ta,
	PaymentIntents: () => ra,
	PaymentLinks: () => aa,
	PaymentMethodConfigurations: () => sa,
	PaymentMethodDomains: () => la,
	PaymentMethods: () => da,
	PaymentRecords: () => pa,
	Payouts: () => ha,
	Plans: () => _a,
	Prices: () => ya,
	Products: () => xa,
	PromotionCodes: () => Ca,
	Quotes: () => Ta,
	Radar: () => go,
	Refunds: () => Da,
	Reporting: () => _o,
	Reviews: () => ka,
	SetupAttempts: () => ja,
	SetupIntents: () => Na,
	ShippingRates: () => Fa,
	Sigma: () => vo,
	Sources: () => La,
	SubscriptionItems: () => za,
	SubscriptionSchedules: () => Va,
	Subscriptions: () => Ua,
	Tax: () => yo,
	TaxCodes: () => Ga,
	TaxIds: () => qa,
	TaxRates: () => Ya,
	Terminal: () => bo,
	TestHelpers: () => xo,
	Tokens: () => Za,
	Topups: () => $a,
	Transfers: () => to,
	Treasury: () => So,
	V2: () => Co,
	WebhookEndpoints: () => ro
}), ao = U("apps", { Secrets: yr }), oo = U("billing", {
	Alerts: ht,
	CreditBalanceSummary: zt,
	CreditBalanceTransactions: Vt,
	CreditGrants: Ut,
	MeterEventAdjustments: mn,
	MeterEvents: Sn,
	Meters: En
}), so = U("billingPortal", {
	Configurations: jt,
	Sessions: xr
}), co = U("checkout", { Sessions: Cr }), lo = U("climate", {
	Orders: An,
	Products: Jn,
	Suppliers: kr
}), uo = U("entitlements", {
	ActiveEntitlements: pt,
	Features: an
}), fo = U("financialConnections", {
	Accounts: W,
	Sessions: Tr,
	Transactions: Lr
}), po = U("forwarding", { Requests: hr }), mo = U("identity", {
	VerificationReports: Zr,
	VerificationSessions: $r
}), ho = U("issuing", {
	Authorizations: yt,
	Cardholders: Tt,
	Cards: Dt,
	Disputes: G,
	PersonalizationDesigns: Hn,
	PhysicalBundles: Kn,
	Tokens: Nr,
	Transactions: zr
}), go = U("radar", {
	EarlyFraudWarnings: Qt,
	PaymentEvaluations: Bn,
	ValueListItems: qr,
	ValueLists: Yr
}), _o = U("reporting", {
	ReportRuns: dr,
	ReportTypes: pr
}), vo = U("sigma", { ScheduledQueryRuns: _r }), yo = U("tax", {
	Associations: _t,
	Calculations: Ct,
	Registrations: lr,
	Settings: Dr,
	Transactions: Vr
}), bo = U("terminal", {
	Configurations: Nt,
	ConnectionTokens: Lt,
	Locations: fn,
	OnboardingLinks: On,
	Readers: Yn
}), xo = U("testHelpers", {
	ConfirmationTokens: Ft,
	Customers: qt,
	Refunds: sr,
	TestClocks: jr,
	Issuing: U("issuing", {
		Authorizations: xt,
		Cards: kt,
		PersonalizationDesigns: Wn,
		Transactions: Ur
	}),
	Terminal: U("terminal", { Readers: Zn }),
	Treasury: U("treasury", {
		InboundTransfers: cn,
		OutboundPayments: Mn,
		OutboundTransfers: In,
		ReceivedCredits: $n,
		ReceivedDebits: rr
	})
}), So = U("treasury", {
	CreditReversals: Gt,
	DebitReversals: Yt,
	FinancialAccounts: on,
	InboundTransfers: un,
	OutboundPayments: Pn,
	OutboundTransfers: Rn,
	ReceivedCredits: tr,
	ReceivedDebits: ar,
	TransactionEntries: Fr,
	Transactions: Gr
}), Co = U("v2", {
	Billing: U("billing", {
		MeterEventAdjustments: gn,
		MeterEventSession: vn,
		MeterEventStream: bn,
		MeterEvents: wn
	}),
	Core: U("core", {
		AccountLinks: nt,
		AccountTokens: it,
		Accounts: dt,
		EventDestinations: en,
		Events: nn
	})
}), wo = "api.stripe.com", To = "443", Eo = "/v1/", Do = $e, Oo = 8e4, ko = 5, Ao = .5, jo = [
	"name",
	"version",
	"url",
	"partner_id"
], Mo = [
	"authenticator",
	"apiVersion",
	"typescript",
	"maxNetworkRetries",
	"httpAgent",
	"httpClient",
	"timeout",
	"host",
	"port",
	"protocol",
	"telemetry",
	"appInfo",
	"stripeAccount",
	"stripeContext"
], No = (e) => new Ie(e, H.MAX_BUFFERED_REQUEST_METRICS);
function Po(e, t = No) {
	r.PACKAGE_VERSION = "20.4.1", r.API_VERSION = $e;
	let n = typeof process < "u" && process.env ? fe(process.env) : "";
	r.AI_AGENT = n, r.USER_AGENT = Object.assign(Object.assign({
		bindings_version: r.PACKAGE_VERSION,
		lang: "node",
		publisher: "stripe",
		uname: null,
		typescript: !1
	}, ue()), n ? { ai_agent: n } : {}), r.StripeResource = H, r.StripeContext = Ze, r.resources = io, r.HttpClient = ye, r.HttpClientResponse = be, r.CryptoProvider = A, r.webhooks = Qe(e);
	function r(n, i = {}) {
		if (!(this instanceof r)) return new r(n, i);
		let a = this._getPropsFromConfig(i);
		this._platformFunctions = e, Object.defineProperty(this, "_emitter", {
			value: this._platformFunctions.createEmitter(),
			enumerable: !1,
			configurable: !1,
			writable: !1
		}), this.VERSION = r.PACKAGE_VERSION, this.on = this._emitter.on.bind(this._emitter), this.once = this._emitter.once.bind(this._emitter), this.off = this._emitter.removeListener.bind(this._emitter);
		let o = a.httpAgent || null;
		this._api = {
			host: a.host || wo,
			port: a.port || To,
			protocol: a.protocol || "https",
			basePath: Eo,
			version: a.apiVersion || Do,
			timeout: le("timeout", a.timeout, Oo),
			maxNetworkRetries: le("maxNetworkRetries", a.maxNetworkRetries, 2),
			agent: o,
			httpClient: a.httpClient || (o ? this._platformFunctions.createNodeHttpClient(o) : this._platformFunctions.createDefaultHttpClient()),
			dev: !1,
			stripeAccount: a.stripeAccount || null,
			stripeContext: a.stripeContext || null
		};
		let s = a.typescript || !1;
		s !== r.USER_AGENT.typescript && (r.USER_AGENT.typescript = s), a.appInfo && this._setAppInfo(a.appInfo), this._prepResources(), this._setAuthenticator(n, a.authenticator), this.errors = De, this.webhooks = r.webhooks, this._prevRequestMetrics = [], this._enableTelemetry = a.telemetry !== !1, this._requestSender = t(this), this.StripeResource = r.StripeResource;
	}
	return r.errors = De, r.createNodeHttpClient = e.createNodeHttpClient, r.createFetchHttpClient = e.createFetchHttpClient, r.createNodeCryptoProvider = e.createNodeCryptoProvider, r.createSubtleCryptoProvider = e.createSubtleCryptoProvider, r.prototype = {
		_appInfo: void 0,
		on: null,
		off: null,
		once: null,
		VERSION: null,
		StripeResource: null,
		webhooks: null,
		errors: null,
		_api: null,
		_prevRequestMetrics: null,
		_emitter: null,
		_enableTelemetry: null,
		_requestSender: null,
		_platformFunctions: null,
		rawRequest(e, t, n, r) {
			return this._requestSender._rawRequest(e, t, n, r);
		},
		_setAuthenticator(e, t) {
			if (e && t) throw Error("Can't specify both apiKey and authenticator");
			if (!e && !t) throw Error("Neither apiKey nor config.authenticator provided");
			this._authenticator = e ? pe(e) : t;
		},
		_setAppInfo(e) {
			if (e && typeof e != "object") throw Error("AppInfo must be an object.");
			if (e && !e.name) throw Error("AppInfo.name is required");
			e ||= {}, this._appInfo = jo.reduce((t, n) => (typeof e[n] == "string" && (t ||= {}, t[n] = e[n]), t), {});
		},
		_setApiField(e, t) {
			this._api[e] = t;
		},
		getApiField(e) {
			return this._api[e];
		},
		setClientId(e) {
			this._clientId = e;
		},
		getClientId() {
			return this._clientId;
		},
		getConstant: (e) => {
			switch (e) {
				case "DEFAULT_HOST": return wo;
				case "DEFAULT_PORT": return To;
				case "DEFAULT_BASE_PATH": return Eo;
				case "DEFAULT_API_VERSION": return Do;
				case "DEFAULT_TIMEOUT": return Oo;
				case "MAX_NETWORK_RETRY_DELAY_SEC": return ko;
				case "INITIAL_NETWORK_RETRY_DELAY_SEC": return Ao;
			}
			return r[e];
		},
		getMaxNetworkRetries() {
			return this.getApiField("maxNetworkRetries");
		},
		_setApiNumberField(e, t, n) {
			let r = le(e, t, n);
			this._setApiField(e, r);
		},
		getMaxNetworkRetryDelay() {
			return ko;
		},
		getInitialNetworkRetryDelay() {
			return Ao;
		},
		getClientUserAgent(e) {
			return this.getClientUserAgentSeeded(r.USER_AGENT, e);
		},
		getClientUserAgentSeeded(e, t) {
			this._platformFunctions.getUname().then((n) => {
				let r = {};
				for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = encodeURIComponent(e[t] ?? "null"));
				r.uname = encodeURIComponent(n || "UNKNOWN");
				let i = this.getApiField("httpClient");
				i && (r.httplib = encodeURIComponent(i.getClientName())), this._appInfo && (r.application = this._appInfo), t(JSON.stringify(r));
			});
		},
		getAppInfoAsString() {
			if (!this._appInfo) return "";
			let e = this._appInfo.name;
			return this._appInfo.version && (e += `/${this._appInfo.version}`), this._appInfo.url && (e += ` (${this._appInfo.url})`), e;
		},
		getTelemetryEnabled() {
			return this._enableTelemetry;
		},
		_prepResources() {
			for (let e in io) Object.prototype.hasOwnProperty.call(io, e) && (this[ae(e)] = new io[e](this));
		},
		_getPropsFromConfig(e) {
			if (!e) return {};
			let t = typeof e == "string";
			if (!(e === Object(e) && !Array.isArray(e)) && !t) throw Error("Config must either be an object or a string");
			if (t) return { apiVersion: e };
			if (Object.keys(e).filter((e) => !Mo.includes(e)).length > 0) throw Error(`Config object may only contain the following: ${Mo.join(", ")}`);
			return e;
		},
		parseEventNotification(e, t, n, r, i, a) {
			let o = this.webhooks.constructEvent(e, t, n, r, i, a);
			return o.context &&= Ze.parse(o.context), o.fetchEvent = () => this._requestSender._rawRequest("GET", `/v2/core/events/${o.id}`, void 0, {
				stripeContext: o.context,
				headers: { "Stripe-Request-Trigger": `event=${o.id}` }
			}, ["fetch_event"]), o.fetchRelatedObject = () => o.related_object ? this._requestSender._rawRequest("GET", o.related_object.url, void 0, {
				stripeContext: o.context,
				headers: { "Stripe-Request-Trigger": `event=${o.id}` }
			}, ["fetch_related_object"]) : Promise.resolve(null), o;
		}
	}, r;
}
//#endregion
//#region ../../node_modules/stripe/esm/stripe.esm.worker.js
var Fo = Po(new Ee()), Z = new m.PrismaClient(), Io = class {
	stripe;
	constructor() {
		let e = process.env.STRIPE_SECRET_KEY;
		if (!e) throw Error("Stripe not configured: STRIPE_SECRET_KEY is missing");
		this.stripe = new Fo(e, { apiVersion: "2026-02-25.clover" });
	}
	async createCheckoutSession(e, t, n) {
		let r = n?.trim().toUpperCase();
		if (!["BUSINESS", "ENTERPRISE"].includes(r)) throw Error("Invalid plan. Must be BUSINESS or ENTERPRISE.");
		let i = r, a = await Z.organization.findFirst({
			where: { users: { some: { userId: e } } },
			include: { plan: !0 }
		});
		if (!a) throw Error("Organization not found");
		let o = await Z.plan.findFirst({ where: { name: i } });
		if (!o) throw Error(`Plan ${i} not found`);
		let s = o.stripePriceIdMonthly || this.getStripePriceIdFromEnv(i);
		if (!s) throw Error(`Plan ${i} is not configured for Stripe billing. Set plan.stripePriceIdMonthly in DB or env (${this.getExpectedPriceEnvKeys(i).join(", ")}).`);
		let c = a.stripeConnectId || await this.getUserStripeCustomerId(e);
		c || (c = (await this.stripe.customers.create({
			email: t,
			name: `${a.name}`,
			metadata: {
				organizationId: a.id,
				userId: e
			}
		})).id, await Z.user.update({
			where: { id: e },
			data: { stripeCustomerId: c }
		}));
		let l = await this.stripe.checkout.sessions.create({
			customer: c,
			mode: "subscription",
			payment_method_types: ["card"],
			line_items: [{
				price: s,
				quantity: 1
			}],
			success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?canceled=true`,
			metadata: {
				organizationId: a.id,
				planId: o.id.toString(),
				planName: i,
				userId: e
			},
			allow_promotion_codes: !0,
			billing_address_collection: "required"
		});
		if (!l.url) throw Error("Failed to create checkout session URL");
		return l.url;
	}
	async processWebhook(e, t) {
		let n = process.env.STRIPE_WEBHOOK_SECRET;
		if (!n) throw Error("Stripe webhook secret not configured");
		let r = this.stripe.webhooks.constructEvent(e, t, n), i = await Z.webhookEvent.create({ data: {
			gateway: "STRIPE",
			eventType: r.type,
			payload: JSON.parse(JSON.stringify(r)),
			status: "PROCESSING"
		} });
		try {
			switch (r.type) {
				case "checkout.session.completed":
					await this.handleCheckoutSessionCompleted(r.data.object);
					break;
				case "invoice.payment_succeeded":
					await this.handleInvoicePaymentSucceeded(r.data.object);
					break;
				case "customer.subscription.deleted":
					await this.handleSubscriptionDeleted(r.data.object);
					break;
				default: console.log(`Unhandled Stripe event: ${r.type}`);
			}
			await Z.webhookEvent.update({
				where: { id: i.id },
				data: { status: "PROCESSED" }
			});
		} catch (e) {
			throw console.error(`[Webhook Processing Error] ${r.type}`, e), await Z.webhookEvent.update({
				where: { id: i.id },
				data: {
					status: "FAILED",
					processingError: e instanceof Error ? e.message : "Unknown error"
				}
			}), e;
		}
	}
	getStripePriceIdFromEnv(e) {
		let t = this.getExpectedPriceEnvKeys(e);
		for (let e of t) {
			let t = process.env[e];
			if (t?.trim()) return t.trim();
		}
	}
	getExpectedPriceEnvKeys(e) {
		return [`STRIPE_PRICE_ID_${e}_MONTHLY`, `STRIPE_PRICE_ID_${e}`];
	}
	async processEvent(e) {
		switch (e.type) {
			case "checkout.session.completed":
				await this.handleCheckoutSessionCompleted(e.data.object);
				break;
			case "invoice.payment_succeeded":
				await this.handleInvoicePaymentSucceeded(e.data.object);
				break;
			case "customer.subscription.deleted":
				await this.handleSubscriptionDeleted(e.data.object);
				break;
			default: console.log(`Unhandled Stripe event: ${e.type}`);
		}
	}
	async getUserStripeCustomerId(e) {
		return (await Z.user.findUnique({
			where: { id: e },
			select: { stripeCustomerId: !0 }
		}))?.stripeCustomerId || null;
	}
	async handleCheckoutSessionCompleted(e) {
		let { organizationId: t, planId: n, planName: r } = e.metadata || {};
		if (!t || !n) {
			console.error("[Stripe Webhook] Missing metadata in checkout session", e.id);
			return;
		}
		let i = parseInt(n, 10), a = await Z.organization.findUnique({
			where: { id: t },
			include: { plan: !0 }
		});
		if (!a) {
			console.error("[Stripe Webhook] Organization not found", t);
			return;
		}
		if (a.planId === i) {
			console.log(`[Stripe Webhook] Organization ${a.id} already on plan ${r}`);
			return;
		}
		let o = a.planId;
		await Z.organization.update({
			where: { id: t },
			data: { planId: i }
		}), await Z.subscriptionEvent.create({ data: {
			organizationId: t,
			eventType: "UPGRADE",
			fromPlanId: o || void 0,
			toPlanId: i,
			triggeredBy: e.metadata?.userId || "SYSTEM"
		} }), console.log(`[Stripe Webhook] Organization ${a.id} upgraded from ${o} to ${i}`);
	}
	async handleInvoicePaymentSucceeded(e) {
		let t = e, n = typeof t.subscription == "string" ? t.subscription : t.subscription?.id;
		if (!n) return;
		let { organizationId: r } = (await this.stripe.subscriptions.retrieve(n)).metadata || {};
		if (!r) {
			console.error("[Stripe Webhook] Missing organizationId in subscription metadata", n);
			return;
		}
		await Z.subscriptionEvent.create({ data: {
			organizationId: r,
			eventType: "RENEWAL",
			toPlanId: null,
			fromPlanId: null,
			triggeredBy: "SYSTEM"
		} }), console.log(`[Stripe Webhook] Renewal payment successful for organization ${r}`);
	}
	async handleSubscriptionDeleted(e) {
		let { organizationId: t } = e.metadata || {};
		if (!t) {
			console.error("[Stripe Webhook] Missing organizationId in subscription", e.id);
			return;
		}
		let n = await Z.plan.findFirst({ where: { name: "FREE" } });
		if (!n) {
			console.error("[Stripe Webhook] FREE plan not found");
			return;
		}
		await Z.organization.update({
			where: { id: t },
			data: { planId: n.id }
		}), await Z.subscriptionEvent.create({ data: {
			organizationId: t,
			eventType: "CANCELED",
			fromPlanId: null,
			toPlanId: n.id,
			triggeredBy: "SYSTEM"
		} }), console.log(`[Stripe Webhook] Organization ${t} downgraded to FREE`);
	}
}, Lo = {};
//#endregion
//#region src/lib/payments.tsx
function Ro() {
	return /* @__PURE__ */ e("div", {
		className: Lo.container,
		children: /* @__PURE__ */ e("h1", { children: "Welcome to Payments!" })
	});
}
//#endregion
//#region ../../node_modules/axios/dist/browser/axios.cjs
var zo = /* @__PURE__ */ c(((e, t) => {
	function n(e, t) {
		return function() {
			return e.apply(t, arguments);
		};
	}
	var { toString: r } = Object.prototype, { getPrototypeOf: i } = Object, { iterator: a, toStringTag: o } = Symbol, s = ((e) => (t) => {
		let n = r.call(t);
		return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
	})(Object.create(null)), c = (e) => (e = e.toLowerCase(), (t) => s(t) === e), l = (e) => (t) => typeof t === e, { isArray: u } = Array, d = l("undefined");
	function f(e) {
		return e !== null && !d(e) && e.constructor !== null && !d(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e);
	}
	var p = c("ArrayBuffer");
	function m(e) {
		let t;
		return t = typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer), t;
	}
	var h = l("string"), g = l("function"), _ = l("number"), v = (e) => typeof e == "object" && !!e, y = (e) => e === !0 || e === !1, b = (e) => {
		if (s(e) !== "object") return !1;
		let t = i(e);
		return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(o in e) && !(a in e);
	}, ee = (e) => {
		if (!v(e) || f(e)) return !1;
		try {
			return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
		} catch {
			return !1;
		}
	}, x = c("Date"), S = c("File"), C = c("Blob"), w = c("FileList"), te = (e) => v(e) && g(e.pipe), T = (e) => {
		let t;
		return e && (typeof FormData == "function" && e instanceof FormData || g(e.append) && ((t = s(e)) === "formdata" || t === "object" && g(e.toString) && e.toString() === "[object FormData]"));
	}, ne = c("URLSearchParams"), [re, ie, E, D] = [
		"ReadableStream",
		"Request",
		"Response",
		"Headers"
	].map(c), ae = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	function oe(e, t, { allOwnKeys: n = !1 } = {}) {
		if (e == null) return;
		let r, i;
		if (typeof e != "object" && (e = [e]), u(e)) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
		else {
			if (f(e)) return;
			let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
			for (r = 0; r < a; r++) o = i[r], t.call(null, e[o], o, e);
		}
	}
	function se(e, t) {
		if (f(e)) return null;
		t = t.toLowerCase();
		let n = Object.keys(e), r = n.length, i;
		for (; r-- > 0;) if (i = n[r], t === i.toLowerCase()) return i;
		return null;
	}
	var ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, le = (e) => !d(e) && e !== ce;
	function ue() {
		let { caseless: e, skipUndefined: t } = le(this) && this || {}, n = {}, r = (r, i) => {
			if (i === "__proto__" || i === "constructor" || i === "prototype") return;
			let a = e && se(n, i) || i;
			b(n[a]) && b(r) ? n[a] = ue(n[a], r) : b(r) ? n[a] = ue({}, r) : u(r) ? n[a] = r.slice() : (!t || !d(r)) && (n[a] = r);
		};
		for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && oe(arguments[e], r);
		return n;
	}
	var de = (e, t, r, { allOwnKeys: i } = {}) => (oe(t, (t, i) => {
		r && g(t) ? Object.defineProperty(e, i, {
			value: n(t, r),
			writable: !0,
			enumerable: !0,
			configurable: !0
		}) : Object.defineProperty(e, i, {
			value: t,
			writable: !0,
			enumerable: !0,
			configurable: !0
		});
	}, { allOwnKeys: i }), e), fe = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), pe = (e, t, n, r) => {
		e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
			value: e,
			writable: !0,
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(e, "super", { value: t.prototype }), n && Object.assign(e.prototype, n);
	}, me = (e, t, n, r) => {
		let a, o, s, c = {};
		if (t ||= {}, e == null) return t;
		do {
			for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0;) s = a[o], (!r || r(s, e, t)) && !c[s] && (t[s] = e[s], c[s] = !0);
			e = n !== !1 && i(e);
		} while (e && (!n || n(e, t)) && e !== Object.prototype);
		return t;
	}, he = (e, t, n) => {
		e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
		let r = e.indexOf(t, n);
		return r !== -1 && r === n;
	}, ge = (e) => {
		if (!e) return null;
		if (u(e)) return e;
		let t = e.length;
		if (!_(t)) return null;
		let n = Array(t);
		for (; t-- > 0;) n[t] = e[t];
		return n;
	}, O = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && i(Uint8Array)), _e = (e, t) => {
		let n = (e && e[a]).call(e), r;
		for (; (r = n.next()) && !r.done;) {
			let n = r.value;
			t.call(e, n[0], n[1]);
		}
	}, ve = (e, t) => {
		let n, r = [];
		for (; (n = e.exec(t)) !== null;) r.push(n);
		return r;
	}, ye = c("HTMLFormElement"), be = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
		return t.toUpperCase() + n;
	}), xe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), k = c("RegExp"), A = (e, t) => {
		let n = Object.getOwnPropertyDescriptors(e), r = {};
		oe(n, (n, i) => {
			let a;
			(a = t(n, i, e)) !== !1 && (r[i] = a || n);
		}), Object.defineProperties(e, r);
	}, Se = (e) => {
		A(e, (t, n) => {
			if (g(e) && [
				"arguments",
				"caller",
				"callee"
			].indexOf(n) !== -1) return !1;
			let r = e[n];
			if (g(r)) {
				if (t.enumerable = !1, "writable" in t) {
					t.writable = !1;
					return;
				}
				t.set ||= () => {
					throw Error("Can not rewrite read-only method '" + n + "'");
				};
			}
		});
	}, Ce = (e, t) => {
		let n = {}, r = (e) => {
			e.forEach((e) => {
				n[e] = !0;
			});
		};
		return u(e) ? r(e) : r(String(e).split(t)), n;
	}, we = () => {}, Te = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
	function j(e) {
		return !!(e && g(e.append) && e[o] === "FormData" && e[a]);
	}
	var M = (e) => {
		let t = Array(10), n = (e, r) => {
			if (v(e)) {
				if (t.indexOf(e) >= 0) return;
				if (f(e)) return e;
				if (!("toJSON" in e)) {
					t[r] = e;
					let i = u(e) ? [] : {};
					return oe(e, (e, t) => {
						let a = n(e, r + 1);
						!d(a) && (i[t] = a);
					}), t[r] = void 0, i;
				}
			}
			return e;
		};
		return n(e, 0);
	}, Ee = c("AsyncFunction"), De = (e) => e && (v(e) || g(e)) && g(e.then) && g(e.catch), Oe = ((e, t) => e ? setImmediate : t ? ((e, t) => (ce.addEventListener("message", ({ source: n, data: r }) => {
		n === ce && r === e && t.length && t.shift()();
	}, !1), (n) => {
		t.push(n), ce.postMessage(e, "*");
	}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(typeof setImmediate == "function", g(ce.postMessage)), N = {
		isArray: u,
		isArrayBuffer: p,
		isBuffer: f,
		isFormData: T,
		isArrayBufferView: m,
		isString: h,
		isNumber: _,
		isBoolean: y,
		isObject: v,
		isPlainObject: b,
		isEmptyObject: ee,
		isReadableStream: re,
		isRequest: ie,
		isResponse: E,
		isHeaders: D,
		isUndefined: d,
		isDate: x,
		isFile: S,
		isBlob: C,
		isRegExp: k,
		isFunction: g,
		isStream: te,
		isURLSearchParams: ne,
		isTypedArray: O,
		isFileList: w,
		forEach: oe,
		merge: ue,
		extend: de,
		trim: ae,
		stripBOM: fe,
		inherits: pe,
		toFlatObject: me,
		kindOf: s,
		kindOfTest: c,
		endsWith: he,
		toArray: ge,
		forEachEntry: _e,
		matchAll: ve,
		isHTMLForm: ye,
		hasOwnProperty: xe,
		hasOwnProp: xe,
		reduceDescriptors: A,
		freezeMethods: Se,
		toObjectSet: Ce,
		toCamelCase: be,
		noop: we,
		toFiniteNumber: Te,
		findKey: se,
		global: ce,
		isContextDefined: le,
		isSpecCompliantForm: j,
		toJSONObject: M,
		isAsyncFn: Ee,
		isThenable: De,
		setImmediate: Oe,
		asap: typeof queueMicrotask < "u" ? queueMicrotask.bind(ce) : typeof process < "u" && process.nextTick || Oe,
		isIterable: (e) => e != null && g(e[a])
	}, P = class e extends Error {
		static from(t, n, r, i, a, o) {
			let s = new e(t.message, n || t.code, r, i, a);
			return s.cause = t, s.name = t.name, o && Object.assign(s, o), s;
		}
		constructor(e, t, n, r, i) {
			super(e), this.name = "AxiosError", this.isAxiosError = !0, t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status);
		}
		toJSON() {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: N.toJSONObject(this.config),
				code: this.code,
				status: this.status
			};
		}
	};
	P.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE", P.ERR_BAD_OPTION = "ERR_BAD_OPTION", P.ECONNABORTED = "ECONNABORTED", P.ETIMEDOUT = "ETIMEDOUT", P.ERR_NETWORK = "ERR_NETWORK", P.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS", P.ERR_DEPRECATED = "ERR_DEPRECATED", P.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE", P.ERR_BAD_REQUEST = "ERR_BAD_REQUEST", P.ERR_CANCELED = "ERR_CANCELED", P.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT", P.ERR_INVALID_URL = "ERR_INVALID_URL";
	var F = P, ke = null;
	function Ae(e) {
		return N.isPlainObject(e) || N.isArray(e);
	}
	function je(e) {
		return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
	}
	function I(e, t, n) {
		return e ? e.concat(t).map(function(e, t) {
			return e = je(e), !n && t ? "[" + e + "]" : e;
		}).join(n ? "." : "") : t;
	}
	function L(e) {
		return N.isArray(e) && !e.some(Ae);
	}
	var R = N.toFlatObject(N, {}, null, function(e) {
		return /^is[A-Z]/.test(e);
	});
	function z(e, t, n) {
		if (!N.isObject(e)) throw TypeError("target must be an object");
		t ||= new FormData(), n = N.toFlatObject(n, {
			metaTokens: !0,
			dots: !1,
			indexes: !1
		}, !1, function(e, t) {
			return !N.isUndefined(t[e]);
		});
		let r = n.metaTokens, i = n.visitor || l, a = n.dots, o = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
		if (!N.isFunction(i)) throw TypeError("visitor must be a function");
		function c(e) {
			if (e === null) return "";
			if (N.isDate(e)) return e.toISOString();
			if (N.isBoolean(e)) return e.toString();
			if (!s && N.isBlob(e)) throw new F("Blob is not supported. Use a Buffer instead.");
			return N.isArrayBuffer(e) || N.isTypedArray(e) ? s && typeof Blob == "function" ? new Blob([e]) : Buffer.from(e) : e;
		}
		function l(e, n, i) {
			let s = e;
			if (e && !i && typeof e == "object") {
				if (N.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
				else if (N.isArray(e) && L(e) || (N.isFileList(e) || N.endsWith(n, "[]")) && (s = N.toArray(e))) return n = je(n), s.forEach(function(e, r) {
					!(N.isUndefined(e) || e === null) && t.append(o === !0 ? I([n], r, a) : o === null ? n : n + "[]", c(e));
				}), !1;
			}
			return Ae(e) ? !0 : (t.append(I(i, n, a), c(e)), !1);
		}
		let u = [], d = Object.assign(R, {
			defaultVisitor: l,
			convertValue: c,
			isVisitable: Ae
		});
		function f(e, n) {
			if (!N.isUndefined(e)) {
				if (u.indexOf(e) !== -1) throw Error("Circular reference detected in " + n.join("."));
				u.push(e), N.forEach(e, function(e, r) {
					(!(N.isUndefined(e) || e === null) && i.call(t, e, N.isString(r) ? r.trim() : r, n, d)) === !0 && f(e, n ? n.concat(r) : [r]);
				}), u.pop();
			}
		}
		if (!N.isObject(e)) throw TypeError("data must be an object");
		return f(e), t;
	}
	function Me(e) {
		let t = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\0"
		};
		return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
			return t[e];
		});
	}
	function B(e, t) {
		this._pairs = [], e && z(e, this, t);
	}
	var Ne = B.prototype;
	Ne.append = function(e, t) {
		this._pairs.push([e, t]);
	}, Ne.toString = function(e) {
		let t = e ? function(t) {
			return e.call(this, t, Me);
		} : Me;
		return this._pairs.map(function(e) {
			return t(e[0]) + "=" + t(e[1]);
		}, "").join("&");
	};
	function Pe(e) {
		return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
	}
	function Fe(e, t, n) {
		if (!t) return e;
		let r = n && n.encode || Pe, i = N.isFunction(n) ? { serialize: n } : n, a = i && i.serialize, o;
		if (o = a ? a(t, i) : N.isURLSearchParams(t) ? t.toString() : new B(t, i).toString(r), o) {
			let t = e.indexOf("#");
			t !== -1 && (e = e.slice(0, t)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
		}
		return e;
	}
	var Ie = class {
		constructor() {
			this.handlers = [];
		}
		use(e, t, n) {
			return this.handlers.push({
				fulfilled: e,
				rejected: t,
				synchronous: n ? n.synchronous : !1,
				runWhen: n ? n.runWhen : null
			}), this.handlers.length - 1;
		}
		eject(e) {
			this.handlers[e] && (this.handlers[e] = null);
		}
		clear() {
			this.handlers &&= [];
		}
		forEach(e) {
			N.forEach(this.handlers, function(t) {
				t !== null && e(t);
			});
		}
	}, Le = {
		silentJSONParsing: !0,
		forcedJSONParsing: !0,
		clarifyTimeoutError: !1,
		legacyInterceptorReqResOrdering: !0
	}, Re = {
		isBrowser: !0,
		classes: {
			URLSearchParams: typeof URLSearchParams < "u" ? URLSearchParams : B,
			FormData: typeof FormData < "u" ? FormData : null,
			Blob: typeof Blob < "u" ? Blob : null
		},
		protocols: [
			"http",
			"https",
			"file",
			"blob",
			"url",
			"data"
		]
	}, ze = typeof window < "u" && typeof document < "u", Be = typeof navigator == "object" && navigator || void 0, Ve = ze && (!Be || [
		"ReactNative",
		"NativeScript",
		"NS"
	].indexOf(Be.product) < 0), He = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ue = ze && window.location.href || "http://localhost", V = {
		.../* @__PURE__ */ Object.freeze({
			__proto__: null,
			hasBrowserEnv: ze,
			hasStandardBrowserWebWorkerEnv: He,
			hasStandardBrowserEnv: Ve,
			navigator: Be,
			origin: Ue
		}),
		...Re
	};
	function We(e, t) {
		return z(e, new V.classes.URLSearchParams(), {
			visitor: function(e, t, n, r) {
				return V.isNode && N.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
			},
			...t
		});
	}
	function Ge(e) {
		return N.matchAll(/\w+|\[(\w*)]/g, e).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
	}
	function Ke(e) {
		let t = {}, n = Object.keys(e), r, i = n.length, a;
		for (r = 0; r < i; r++) a = n[r], t[a] = e[a];
		return t;
	}
	function qe(e) {
		function t(e, n, r, i) {
			let a = e[i++];
			if (a === "__proto__") return !0;
			let o = Number.isFinite(+a), s = i >= e.length;
			return a = !a && N.isArray(r) ? r.length : a, s ? (N.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n, !o) : ((!r[a] || !N.isObject(r[a])) && (r[a] = []), t(e, n, r[a], i) && N.isArray(r[a]) && (r[a] = Ke(r[a])), !o);
		}
		if (N.isFormData(e) && N.isFunction(e.entries)) {
			let n = {};
			return N.forEachEntry(e, (e, r) => {
				t(Ge(e), r, n, 0);
			}), n;
		}
		return null;
	}
	function Je(e, t, n) {
		if (N.isString(e)) try {
			return (t || JSON.parse)(e), N.trim(e);
		} catch (e) {
			if (e.name !== "SyntaxError") throw e;
		}
		return (n || JSON.stringify)(e);
	}
	var Ye = {
		transitional: Le,
		adapter: [
			"xhr",
			"http",
			"fetch"
		],
		transformRequest: [function(e, t) {
			let n = t.getContentType() || "", r = n.indexOf("application/json") > -1, i = N.isObject(e);
			if (i && N.isHTMLForm(e) && (e = new FormData(e)), N.isFormData(e)) return r ? JSON.stringify(qe(e)) : e;
			if (N.isArrayBuffer(e) || N.isBuffer(e) || N.isStream(e) || N.isFile(e) || N.isBlob(e) || N.isReadableStream(e)) return e;
			if (N.isArrayBufferView(e)) return e.buffer;
			if (N.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
			let a;
			if (i) {
				if (n.indexOf("application/x-www-form-urlencoded") > -1) return We(e, this.formSerializer).toString();
				if ((a = N.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
					let t = this.env && this.env.FormData;
					return z(a ? { "files[]": e } : e, t && new t(), this.formSerializer);
				}
			}
			return i || r ? (t.setContentType("application/json", !1), Je(e)) : e;
		}],
		transformResponse: [function(e) {
			let t = this.transitional || Ye.transitional, n = t && t.forcedJSONParsing, r = this.responseType === "json";
			if (N.isResponse(e) || N.isReadableStream(e)) return e;
			if (e && N.isString(e) && (n && !this.responseType || r)) {
				let n = !(t && t.silentJSONParsing) && r;
				try {
					return JSON.parse(e, this.parseReviver);
				} catch (e) {
					if (n) throw e.name === "SyntaxError" ? F.from(e, F.ERR_BAD_RESPONSE, this, null, this.response) : e;
				}
			}
			return e;
		}],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {
			FormData: V.classes.FormData,
			Blob: V.classes.Blob
		},
		validateStatus: function(e) {
			return e >= 200 && e < 300;
		},
		headers: { common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0
		} }
	};
	N.forEach([
		"delete",
		"get",
		"head",
		"post",
		"put",
		"patch"
	], (e) => {
		Ye.headers[e] = {};
	});
	var Xe = Ye, H = N.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent"
	]), Ze = (e) => {
		let t = {}, n, r, i;
		return e && e.split("\n").forEach(function(e) {
			i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !(!n || t[n] && H[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
		}), t;
	}, Qe = Symbol("internals");
	function $e(e) {
		return e && String(e).trim().toLowerCase();
	}
	function et(e) {
		return e === !1 || e == null ? e : N.isArray(e) ? e.map(et) : String(e);
	}
	function U(e) {
		let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
		for (; r = n.exec(e);) t[r[1]] = r[2];
		return t;
	}
	var tt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
	function nt(e, t, n, r, i) {
		if (N.isFunction(r)) return r.call(this, t, n);
		if (i && (t = n), N.isString(t)) {
			if (N.isString(r)) return t.indexOf(r) !== -1;
			if (N.isRegExp(r)) return r.test(t);
		}
	}
	function rt(e) {
		return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
	}
	function it(e, t) {
		let n = N.toCamelCase(" " + t);
		[
			"get",
			"set",
			"has"
		].forEach((r) => {
			Object.defineProperty(e, r + n, {
				value: function(e, n, i) {
					return this[r].call(this, t, e, n, i);
				},
				configurable: !0
			});
		});
	}
	var at = class {
		constructor(e) {
			e && this.set(e);
		}
		set(e, t, n) {
			let r = this;
			function i(e, t, n) {
				let i = $e(t);
				if (!i) throw Error("header name must be a non-empty string");
				let a = N.findKey(r, i);
				(!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = et(e));
			}
			let a = (e, t) => N.forEach(e, (e, n) => i(e, n, t));
			if (N.isPlainObject(e) || e instanceof this.constructor) a(e, t);
			else if (N.isString(e) && (e = e.trim()) && !tt(e)) a(Ze(e), t);
			else if (N.isObject(e) && N.isIterable(e)) {
				let n = {}, r, i;
				for (let t of e) {
					if (!N.isArray(t)) throw TypeError("Object iterator must return a key-value pair");
					n[i = t[0]] = (r = n[i]) ? N.isArray(r) ? [...r, t[1]] : [r, t[1]] : t[1];
				}
				a(n, t);
			} else e != null && i(t, e, n);
			return this;
		}
		get(e, t) {
			if (e = $e(e), e) {
				let n = N.findKey(this, e);
				if (n) {
					let e = this[n];
					if (!t) return e;
					if (t === !0) return U(e);
					if (N.isFunction(t)) return t.call(this, e, n);
					if (N.isRegExp(t)) return t.exec(e);
					throw TypeError("parser must be boolean|regexp|function");
				}
			}
		}
		has(e, t) {
			if (e = $e(e), e) {
				let n = N.findKey(this, e);
				return !!(n && this[n] !== void 0 && (!t || nt(this, this[n], n, t)));
			}
			return !1;
		}
		delete(e, t) {
			let n = this, r = !1;
			function i(e) {
				if (e = $e(e), e) {
					let i = N.findKey(n, e);
					i && (!t || nt(n, n[i], i, t)) && (delete n[i], r = !0);
				}
			}
			return N.isArray(e) ? e.forEach(i) : i(e), r;
		}
		clear(e) {
			let t = Object.keys(this), n = t.length, r = !1;
			for (; n--;) {
				let i = t[n];
				(!e || nt(this, this[i], i, e, !0)) && (delete this[i], r = !0);
			}
			return r;
		}
		normalize(e) {
			let t = this, n = {};
			return N.forEach(this, (r, i) => {
				let a = N.findKey(n, i);
				if (a) {
					t[a] = et(r), delete t[i];
					return;
				}
				let o = e ? rt(i) : String(i).trim();
				o !== i && delete t[i], t[o] = et(r), n[o] = !0;
			}), this;
		}
		concat(...e) {
			return this.constructor.concat(this, ...e);
		}
		toJSON(e) {
			let t = Object.create(null);
			return N.forEach(this, (n, r) => {
				n != null && n !== !1 && (t[r] = e && N.isArray(n) ? n.join(", ") : n);
			}), t;
		}
		[Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]();
		}
		toString() {
			return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n");
		}
		getSetCookie() {
			return this.get("set-cookie") || [];
		}
		get [Symbol.toStringTag]() {
			return "AxiosHeaders";
		}
		static from(e) {
			return e instanceof this ? e : new this(e);
		}
		static concat(e, ...t) {
			let n = new this(e);
			return t.forEach((e) => n.set(e)), n;
		}
		static accessor(e) {
			let t = (this[Qe] = this[Qe] = { accessors: {} }).accessors, n = this.prototype;
			function r(e) {
				let r = $e(e);
				t[r] || (it(n, e), t[r] = !0);
			}
			return N.isArray(e) ? e.forEach(r) : r(e), this;
		}
	};
	at.accessor([
		"Content-Type",
		"Content-Length",
		"Accept",
		"Accept-Encoding",
		"User-Agent",
		"Authorization"
	]), N.reduceDescriptors(at.prototype, ({ value: e }, t) => {
		let n = t[0].toUpperCase() + t.slice(1);
		return {
			get: () => e,
			set(e) {
				this[n] = e;
			}
		};
	}), N.freezeMethods(at);
	var W = at;
	function ot(e, t) {
		let n = this || Xe, r = t || n, i = W.from(r.headers), a = r.data;
		return N.forEach(e, function(e) {
			a = e.call(n, a, i.normalize(), t ? t.status : void 0);
		}), i.normalize(), a;
	}
	function st(e) {
		return !!(e && e.__CANCEL__);
	}
	var ct = class extends F {
		constructor(e, t, n) {
			super(e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError", this.__CANCEL__ = !0;
		}
	};
	function lt(e, t, n) {
		let r = n.config.validateStatus;
		!n.status || !r || r(n.status) ? e(n) : t(new F("Request failed with status code " + n.status, [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
	}
	function ut(e) {
		let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
		return t && t[1] || "";
	}
	function dt(e, t) {
		e ||= 10;
		let n = Array(e), r = Array(e), i = 0, a = 0, o;
		return t = t === void 0 ? 1e3 : t, function(s) {
			let c = Date.now(), l = r[a];
			o ||= c, n[i] = s, r[i] = c;
			let u = a, d = 0;
			for (; u !== i;) d += n[u++], u %= e;
			if (i = (i + 1) % e, i === a && (a = (a + 1) % e), c - o < t) return;
			let f = l && c - l;
			return f ? Math.round(d * 1e3 / f) : void 0;
		};
	}
	function ft(e, t) {
		let n = 0, r = 1e3 / t, i, a, o = (t, r = Date.now()) => {
			n = r, i = null, a &&= (clearTimeout(a), null), e(...t);
		};
		return [(...e) => {
			let t = Date.now(), s = t - n;
			s >= r ? o(e, t) : (i = e, a ||= setTimeout(() => {
				a = null, o(i);
			}, r - s));
		}, () => i && o(i)];
	}
	var pt = (e, t, n = 3) => {
		let r = 0, i = dt(50, 250);
		return ft((n) => {
			let a = n.loaded, o = n.lengthComputable ? n.total : void 0, s = a - r, c = i(s), l = a <= o;
			r = a, e({
				loaded: a,
				total: o,
				progress: o ? a / o : void 0,
				bytes: s,
				rate: c || void 0,
				estimated: c && o && l ? (o - a) / c : void 0,
				event: n,
				lengthComputable: o != null,
				[t ? "download" : "upload"]: !0
			});
		}, n);
	}, mt = (e, t) => {
		let n = e != null;
		return [(r) => t[0]({
			lengthComputable: n,
			total: e,
			loaded: r
		}), t[1]];
	}, ht = (e) => (...t) => N.asap(() => e(...t)), gt = V.hasStandardBrowserEnv ? ((e, t) => (n) => (n = new URL(n, V.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(V.origin), V.navigator && /(msie|trident)/i.test(V.navigator.userAgent)) : () => !0, _t = V.hasStandardBrowserEnv ? {
		write(e, t, n, r, i, a, o) {
			if (typeof document > "u") return;
			let s = [`${e}=${encodeURIComponent(t)}`];
			N.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`), N.isString(r) && s.push(`path=${r}`), N.isString(i) && s.push(`domain=${i}`), a === !0 && s.push("secure"), N.isString(o) && s.push(`SameSite=${o}`), document.cookie = s.join("; ");
		},
		read(e) {
			if (typeof document > "u") return null;
			let t = document.cookie.match(RegExp("(?:^|; )" + e + "=([^;]*)"));
			return t ? decodeURIComponent(t[1]) : null;
		},
		remove(e) {
			this.write(e, "", Date.now() - 864e5, "/");
		}
	} : {
		write() {},
		read() {
			return null;
		},
		remove() {}
	};
	function vt(e) {
		return typeof e == "string" ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
	}
	function yt(e, t) {
		return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
	}
	function bt(e, t, n) {
		let r = !vt(t);
		return e && (r || n == 0) ? yt(e, t) : t;
	}
	var xt = (e) => e instanceof W ? { ...e } : e;
	function St(e, t) {
		t ||= {};
		let n = {};
		function r(e, t, n, r) {
			return N.isPlainObject(e) && N.isPlainObject(t) ? N.merge.call({ caseless: r }, e, t) : N.isPlainObject(t) ? N.merge({}, t) : N.isArray(t) ? t.slice() : t;
		}
		function i(e, t, n, i) {
			if (!N.isUndefined(t)) return r(e, t, n, i);
			if (!N.isUndefined(e)) return r(void 0, e, n, i);
		}
		function a(e, t) {
			if (!N.isUndefined(t)) return r(void 0, t);
		}
		function o(e, t) {
			if (!N.isUndefined(t)) return r(void 0, t);
			if (!N.isUndefined(e)) return r(void 0, e);
		}
		function s(n, i, a) {
			if (a in t) return r(n, i);
			if (a in e) return r(void 0, n);
		}
		let c = {
			url: a,
			method: a,
			data: a,
			baseURL: o,
			transformRequest: o,
			transformResponse: o,
			paramsSerializer: o,
			timeout: o,
			timeoutMessage: o,
			withCredentials: o,
			withXSRFToken: o,
			adapter: o,
			responseType: o,
			xsrfCookieName: o,
			xsrfHeaderName: o,
			onUploadProgress: o,
			onDownloadProgress: o,
			decompress: o,
			maxContentLength: o,
			maxBodyLength: o,
			beforeRedirect: o,
			transport: o,
			httpAgent: o,
			httpsAgent: o,
			cancelToken: o,
			socketPath: o,
			responseEncoding: o,
			validateStatus: s,
			headers: (e, t, n) => i(xt(e), xt(t), n, !0)
		};
		return N.forEach(Object.keys({
			...e,
			...t
		}), function(r) {
			if (r === "__proto__" || r === "constructor" || r === "prototype") return;
			let a = N.hasOwnProp(c, r) ? c[r] : i, o = a(e[r], t[r], r);
			N.isUndefined(o) && a !== s || (n[r] = o);
		}), n;
	}
	var Ct = (e) => {
		let t = St({}, e), { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = t;
		if (t.headers = o = W.from(o), t.url = Fe(bt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))), N.isFormData(n)) {
			if (V.hasStandardBrowserEnv || V.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
			else if (N.isFunction(n.getHeaders)) {
				let e = n.getHeaders(), t = ["content-type", "content-length"];
				Object.entries(e).forEach(([e, n]) => {
					t.includes(e.toLowerCase()) && o.set(e, n);
				});
			}
		}
		if (V.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(t)), r || r !== !1 && gt(t.url))) {
			let e = i && a && _t.read(a);
			e && o.set(i, e);
		}
		return t;
	}, wt = typeof XMLHttpRequest < "u" && function(e) {
		return new Promise(function(t, n) {
			let r = Ct(e), i = r.data, a = W.from(r.headers).normalize(), { responseType: o, onUploadProgress: s, onDownloadProgress: c } = r, l, u, d, f, p;
			function m() {
				f && f(), p && p(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
			}
			let h = new XMLHttpRequest();
			h.open(r.method.toUpperCase(), r.url, !0), h.timeout = r.timeout;
			function g() {
				if (!h) return;
				let r = W.from("getAllResponseHeaders" in h && h.getAllResponseHeaders());
				lt(function(e) {
					t(e), m();
				}, function(e) {
					n(e), m();
				}, {
					data: !o || o === "text" || o === "json" ? h.responseText : h.response,
					status: h.status,
					statusText: h.statusText,
					headers: r,
					config: e,
					request: h
				}), h = null;
			}
			"onloadend" in h ? h.onloadend = g : h.onreadystatechange = function() {
				!h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf("file:") === 0) || setTimeout(g);
			}, h.onabort = function() {
				h &&= (n(new F("Request aborted", F.ECONNABORTED, e, h)), null);
			}, h.onerror = function(t) {
				let r = new F(t && t.message ? t.message : "Network Error", F.ERR_NETWORK, e, h);
				r.event = t || null, n(r), h = null;
			}, h.ontimeout = function() {
				let t = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded", i = r.transitional || Le;
				r.timeoutErrorMessage && (t = r.timeoutErrorMessage), n(new F(t, i.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED, e, h)), h = null;
			}, i === void 0 && a.setContentType(null), "setRequestHeader" in h && N.forEach(a.toJSON(), function(e, t) {
				h.setRequestHeader(t, e);
			}), N.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials), o && o !== "json" && (h.responseType = r.responseType), c && ([d, p] = pt(c, !0), h.addEventListener("progress", d)), s && h.upload && ([u, f] = pt(s), h.upload.addEventListener("progress", u), h.upload.addEventListener("loadend", f)), (r.cancelToken || r.signal) && (l = (t) => {
				h &&= (n(!t || t.type ? new ct(null, e, h) : t), h.abort(), null);
			}, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
			let _ = ut(r.url);
			if (_ && V.protocols.indexOf(_) === -1) {
				n(new F("Unsupported protocol " + _ + ":", F.ERR_BAD_REQUEST, e));
				return;
			}
			h.send(i || null);
		});
	}, Tt = (e, t) => {
		let { length: n } = e = e ? e.filter(Boolean) : [];
		if (t || n) {
			let n = new AbortController(), r, i = function(e) {
				if (!r) {
					r = !0, o();
					let t = e instanceof Error ? e : this.reason;
					n.abort(t instanceof F ? t : new ct(t instanceof Error ? t.message : t));
				}
			}, a = t && setTimeout(() => {
				a = null, i(new F(`timeout of ${t}ms exceeded`, F.ETIMEDOUT));
			}, t), o = () => {
				e &&= (a && clearTimeout(a), a = null, e.forEach((e) => {
					e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener("abort", i);
				}), null);
			};
			e.forEach((e) => e.addEventListener("abort", i));
			let { signal: s } = n;
			return s.unsubscribe = () => N.asap(o), s;
		}
	}, Et = function* (e, t) {
		let n = e.byteLength;
		if (!t || n < t) {
			yield e;
			return;
		}
		let r = 0, i;
		for (; r < n;) i = r + t, yield e.slice(r, i), r = i;
	}, Dt = async function* (e, t) {
		for await (let n of Ot(e)) yield* Et(n, t);
	}, Ot = async function* (e) {
		if (e[Symbol.asyncIterator]) {
			yield* e;
			return;
		}
		let t = e.getReader();
		try {
			for (;;) {
				let { done: e, value: n } = await t.read();
				if (e) break;
				yield n;
			}
		} finally {
			await t.cancel();
		}
	}, kt = (e, t, n, r) => {
		let i = Dt(e, t), a = 0, o, s = (e) => {
			o || (o = !0, r && r(e));
		};
		return new ReadableStream({
			async pull(e) {
				try {
					let { done: t, value: r } = await i.next();
					if (t) {
						s(), e.close();
						return;
					}
					let o = r.byteLength;
					n && n(a += o), e.enqueue(new Uint8Array(r));
				} catch (e) {
					throw s(e), e;
				}
			},
			cancel(e) {
				return s(e), i.return();
			}
		}, { highWaterMark: 2 });
	}, At = 64 * 1024, { isFunction: jt } = N, Mt = (({ Request: e, Response: t }) => ({
		Request: e,
		Response: t
	}))(N.global), { ReadableStream: Nt, TextEncoder: Pt } = N.global, Ft = (e, ...t) => {
		try {
			return !!e(...t);
		} catch {
			return !1;
		}
	}, It = (e) => {
		e = N.merge.call({ skipUndefined: !0 }, Mt, e);
		let { fetch: t, Request: n, Response: r } = e, i = t ? jt(t) : typeof fetch == "function", a = jt(n), o = jt(r);
		if (!i) return !1;
		let s = i && jt(Nt), c = i && (typeof Pt == "function" ? ((e) => (t) => e.encode(t))(new Pt()) : async (e) => new Uint8Array(await new n(e).arrayBuffer())), l = a && s && Ft(() => {
			let e = !1, t = new n(V.origin, {
				body: new Nt(),
				method: "POST",
				get duplex() {
					return e = !0, "half";
				}
			}).headers.has("Content-Type");
			return e && !t;
		}), u = o && s && Ft(() => N.isReadableStream(new r("").body)), d = { stream: u && ((e) => e.body) };
		i && [
			"text",
			"arrayBuffer",
			"blob",
			"formData",
			"stream"
		].forEach((e) => {
			!d[e] && (d[e] = (t, n) => {
				let r = t && t[e];
				if (r) return r.call(t);
				throw new F(`Response type '${e}' is not supported`, F.ERR_NOT_SUPPORT, n);
			});
		});
		let f = async (e) => {
			if (e == null) return 0;
			if (N.isBlob(e)) return e.size;
			if (N.isSpecCompliantForm(e)) return (await new n(V.origin, {
				method: "POST",
				body: e
			}).arrayBuffer()).byteLength;
			if (N.isArrayBufferView(e) || N.isArrayBuffer(e)) return e.byteLength;
			if (N.isURLSearchParams(e) && (e += ""), N.isString(e)) return (await c(e)).byteLength;
		}, p = async (e, t) => N.toFiniteNumber(e.getContentLength()) ?? f(t);
		return async (e) => {
			let { url: i, method: o, data: s, signal: c, cancelToken: f, timeout: m, onDownloadProgress: h, onUploadProgress: g, responseType: _, headers: v, withCredentials: y = "same-origin", fetchOptions: b } = Ct(e), ee = t || fetch;
			_ = _ ? (_ + "").toLowerCase() : "text";
			let x = Tt([c, f && f.toAbortSignal()], m), S = null, C = x && x.unsubscribe && (() => {
				x.unsubscribe();
			}), w;
			try {
				if (g && l && o !== "get" && o !== "head" && (w = await p(v, s)) !== 0) {
					let e = new n(i, {
						method: "POST",
						body: s,
						duplex: "half"
					}), t;
					if (N.isFormData(s) && (t = e.headers.get("content-type")) && v.setContentType(t), e.body) {
						let [t, n] = mt(w, pt(ht(g)));
						s = kt(e.body, At, t, n);
					}
				}
				N.isString(y) || (y = y ? "include" : "omit");
				let t = a && "credentials" in n.prototype, c = {
					...b,
					signal: x,
					method: o.toUpperCase(),
					headers: v.normalize().toJSON(),
					body: s,
					duplex: "half",
					credentials: t ? y : void 0
				};
				S = a && new n(i, c);
				let f = await (a ? ee(S, b) : ee(i, c)), m = u && (_ === "stream" || _ === "response");
				if (u && (h || m && C)) {
					let e = {};
					[
						"status",
						"statusText",
						"headers"
					].forEach((t) => {
						e[t] = f[t];
					});
					let t = N.toFiniteNumber(f.headers.get("content-length")), [n, i] = h && mt(t, pt(ht(h), !0)) || [];
					f = new r(kt(f.body, At, n, () => {
						i && i(), C && C();
					}), e);
				}
				_ ||= "text";
				let te = await d[N.findKey(d, _) || "text"](f, e);
				return !m && C && C(), await new Promise((t, n) => {
					lt(t, n, {
						data: te,
						headers: W.from(f.headers),
						status: f.status,
						statusText: f.statusText,
						config: e,
						request: S
					});
				});
			} catch (t) {
				throw C && C(), t && t.name === "TypeError" && /Load failed|fetch/i.test(t.message) ? Object.assign(new F("Network Error", F.ERR_NETWORK, e, S, t && t.response), { cause: t.cause || t }) : F.from(t, t && t.code, e, S, t && t.response);
			}
		};
	}, Lt = /* @__PURE__ */ new Map(), Rt = (e) => {
		let t = e && e.env || {}, { fetch: n, Request: r, Response: i } = t, a = [
			r,
			i,
			n
		], o = a.length, s, c, l = Lt;
		for (; o--;) s = a[o], c = l.get(s), c === void 0 && l.set(s, c = o ? /* @__PURE__ */ new Map() : It(t)), l = c;
		return c;
	};
	Rt();
	var zt = {
		http: ke,
		xhr: wt,
		fetch: { get: Rt }
	};
	N.forEach(zt, (e, t) => {
		if (e) {
			try {
				Object.defineProperty(e, "name", { value: t });
			} catch {}
			Object.defineProperty(e, "adapterName", { value: t });
		}
	});
	var Bt = (e) => `- ${e}`, Vt = (e) => N.isFunction(e) || e === null || e === !1;
	function Ht(e, t) {
		e = N.isArray(e) ? e : [e];
		let { length: n } = e, r, i, a = {};
		for (let o = 0; o < n; o++) {
			r = e[o];
			let n;
			if (i = r, !Vt(r) && (i = zt[(n = String(r)).toLowerCase()], i === void 0)) throw new F(`Unknown adapter '${n}'`);
			if (i && (N.isFunction(i) || (i = i.get(t)))) break;
			a[n || "#" + o] = i;
		}
		if (!i) {
			let e = Object.entries(a).map(([e, t]) => `adapter ${e} ` + (t === !1 ? "is not supported by the environment" : "is not available in the build"));
			throw new F("There is no suitable adapter to dispatch the request " + (n ? e.length > 1 ? "since :\n" + e.map(Bt).join("\n") : " " + Bt(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
		}
		return i;
	}
	var Ut = {
		getAdapter: Ht,
		adapters: zt
	};
	function Wt(e) {
		if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ct(null, e);
	}
	function Gt(e) {
		return Wt(e), e.headers = W.from(e.headers), e.data = ot.call(e, e.transformRequest), [
			"post",
			"put",
			"patch"
		].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ut.getAdapter(e.adapter || Xe.adapter, e)(e).then(function(t) {
			return Wt(e), t.data = ot.call(e, e.transformResponse, t), t.headers = W.from(t.headers), t;
		}, function(t) {
			return st(t) || (Wt(e), t && t.response && (t.response.data = ot.call(e, e.transformResponse, t.response), t.response.headers = W.from(t.response.headers))), Promise.reject(t);
		});
	}
	var Kt = "1.13.5", qt = {};
	[
		"object",
		"boolean",
		"number",
		"function",
		"string",
		"symbol"
	].forEach((e, t) => {
		qt[e] = function(n) {
			return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
		};
	});
	var Jt = {};
	qt.transitional = function(e, t, n) {
		function r(e, t) {
			return "[Axios v" + Kt + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
		}
		return (n, i, a) => {
			if (e === !1) throw new F(r(i, " has been removed" + (t ? " in " + t : "")), F.ERR_DEPRECATED);
			return t && !Jt[i] && (Jt[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(n, i, a) : !0;
		};
	}, qt.spelling = function(e) {
		return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
	};
	function Yt(e, t, n) {
		if (typeof e != "object") throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
		let r = Object.keys(e), i = r.length;
		for (; i-- > 0;) {
			let a = r[i], o = t[a];
			if (o) {
				let t = e[a], n = t === void 0 || o(t, a, e);
				if (n !== !0) throw new F("option " + a + " must be " + n, F.ERR_BAD_OPTION_VALUE);
				continue;
			}
			if (n !== !0) throw new F("Unknown option " + a, F.ERR_BAD_OPTION);
		}
	}
	var Xt = {
		assertOptions: Yt,
		validators: qt
	}, G = Xt.validators, Zt = class {
		constructor(e) {
			this.defaults = e || {}, this.interceptors = {
				request: new Ie(),
				response: new Ie()
			};
		}
		async request(e, t) {
			try {
				return await this._request(e, t);
			} catch (e) {
				if (e instanceof Error) {
					let t = {};
					Error.captureStackTrace ? Error.captureStackTrace(t) : t = /* @__PURE__ */ Error();
					let n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
					try {
						e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n;
					} catch {}
				}
				throw e;
			}
		}
		_request(e, t) {
			typeof e == "string" ? (t ||= {}, t.url = e) : t = e || {}, t = St(this.defaults, t);
			let { transitional: n, paramsSerializer: r, headers: i } = t;
			n !== void 0 && Xt.assertOptions(n, {
				silentJSONParsing: G.transitional(G.boolean),
				forcedJSONParsing: G.transitional(G.boolean),
				clarifyTimeoutError: G.transitional(G.boolean),
				legacyInterceptorReqResOrdering: G.transitional(G.boolean)
			}, !1), r != null && (N.isFunction(r) ? t.paramsSerializer = { serialize: r } : Xt.assertOptions(r, {
				encode: G.function,
				serialize: G.function
			}, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls), Xt.assertOptions(t, {
				baseUrl: G.spelling("baseURL"),
				withXsrfToken: G.spelling("withXSRFToken")
			}, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
			let a = i && N.merge(i.common, i[t.method]);
			i && N.forEach([
				"delete",
				"get",
				"head",
				"post",
				"put",
				"patch",
				"common"
			], (e) => {
				delete i[e];
			}), t.headers = W.concat(a, i);
			let o = [], s = !0;
			this.interceptors.request.forEach(function(e) {
				if (typeof e.runWhen == "function" && e.runWhen(t) === !1) return;
				s &&= e.synchronous;
				let n = t.transitional || Le;
				n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected);
			});
			let c = [];
			this.interceptors.response.forEach(function(e) {
				c.push(e.fulfilled, e.rejected);
			});
			let l, u = 0, d;
			if (!s) {
				let e = [Gt.bind(this), void 0];
				for (e.unshift(...o), e.push(...c), d = e.length, l = Promise.resolve(t); u < d;) l = l.then(e[u++], e[u++]);
				return l;
			}
			d = o.length;
			let f = t;
			for (; u < d;) {
				let e = o[u++], t = o[u++];
				try {
					f = e(f);
				} catch (e) {
					t.call(this, e);
					break;
				}
			}
			try {
				l = Gt.call(this, f);
			} catch (e) {
				return Promise.reject(e);
			}
			for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
			return l;
		}
		getUri(e) {
			return e = St(this.defaults, e), Fe(bt(e.baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer);
		}
	};
	N.forEach([
		"delete",
		"get",
		"head",
		"options"
	], function(e) {
		Zt.prototype[e] = function(t, n) {
			return this.request(St(n || {}, {
				method: e,
				url: t,
				data: (n || {}).data
			}));
		};
	}), N.forEach([
		"post",
		"put",
		"patch"
	], function(e) {
		function t(t) {
			return function(n, r, i) {
				return this.request(St(i || {}, {
					method: e,
					headers: t ? { "Content-Type": "multipart/form-data" } : {},
					url: n,
					data: r
				}));
			};
		}
		Zt.prototype[e] = t(), Zt.prototype[e + "Form"] = t(!0);
	});
	var Qt = Zt, $t = class e {
		constructor(e) {
			if (typeof e != "function") throw TypeError("executor must be a function.");
			let t;
			this.promise = new Promise(function(e) {
				t = e;
			});
			let n = this;
			this.promise.then((e) => {
				if (!n._listeners) return;
				let t = n._listeners.length;
				for (; t-- > 0;) n._listeners[t](e);
				n._listeners = null;
			}), this.promise.then = (e) => {
				let t, r = new Promise((e) => {
					n.subscribe(e), t = e;
				}).then(e);
				return r.cancel = function() {
					n.unsubscribe(t);
				}, r;
			}, e(function(e, r, i) {
				n.reason || (n.reason = new ct(e, r, i), t(n.reason));
			});
		}
		throwIfRequested() {
			if (this.reason) throw this.reason;
		}
		subscribe(e) {
			if (this.reason) {
				e(this.reason);
				return;
			}
			this._listeners ? this._listeners.push(e) : this._listeners = [e];
		}
		unsubscribe(e) {
			if (!this._listeners) return;
			let t = this._listeners.indexOf(e);
			t !== -1 && this._listeners.splice(t, 1);
		}
		toAbortSignal() {
			let e = new AbortController(), t = (t) => {
				e.abort(t);
			};
			return this.subscribe(t), e.signal.unsubscribe = () => this.unsubscribe(t), e.signal;
		}
		static source() {
			let t;
			return {
				token: new e(function(e) {
					t = e;
				}),
				cancel: t
			};
		}
	};
	function en(e) {
		return function(t) {
			return e.apply(null, t);
		};
	}
	function tn(e) {
		return N.isObject(e) && e.isAxiosError === !0;
	}
	var nn = {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		EarlyHints: 103,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
		AlreadyReported: 208,
		ImUsed: 226,
		MultipleChoices: 300,
		MovedPermanently: 301,
		Found: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		Unused: 306,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,
		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		PayloadTooLarge: 413,
		UriTooLong: 414,
		UnsupportedMediaType: 415,
		RangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		MisdirectedRequest: 421,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		TooEarly: 425,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,
		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		VariantAlsoNegotiates: 506,
		InsufficientStorage: 507,
		LoopDetected: 508,
		NotExtended: 510,
		NetworkAuthenticationRequired: 511,
		WebServerIsDown: 521,
		ConnectionTimedOut: 522,
		OriginIsUnreachable: 523,
		TimeoutOccurred: 524,
		SslHandshakeFailed: 525,
		InvalidSslCertificate: 526
	};
	Object.entries(nn).forEach(([e, t]) => {
		nn[t] = e;
	});
	var rn = nn;
	function an(e) {
		let t = new Qt(e), r = n(Qt.prototype.request, t);
		return N.extend(r, Qt.prototype, t, { allOwnKeys: !0 }), N.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(t) {
			return an(St(e, t));
		}, r;
	}
	var K = an(Xe);
	K.Axios = Qt, K.CanceledError = ct, K.CancelToken = $t, K.isCancel = st, K.VERSION = Kt, K.toFormData = z, K.AxiosError = F, K.Cancel = K.CanceledError, K.all = function(e) {
		return Promise.all(e);
	}, K.spread = en, K.isAxiosError = tn, K.mergeConfig = St, K.AxiosHeaders = W, K.formToJSON = (e) => qe(N.isHTMLForm(e) ? new FormData(e) : e), K.getAdapter = Ut.getAdapter, K.HttpStatusCode = rn, K.default = K, t.exports = K;
})), Bo = /* @__PURE__ */ c(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.RequiredError = e.BaseAPI = e.COLLECTION_FORMATS = e.BASE_PATH = void 0;
	var n = t(zo());
	e.BASE_PATH = "https://production.plaid.com".replace(/\/+$/, ""), e.COLLECTION_FORMATS = {
		csv: ",",
		ssv: " ",
		tsv: "	",
		pipes: "|"
	}, e.BaseAPI = class {
		constructor(t, r = e.BASE_PATH, i = n.default) {
			this.basePath = r, this.axios = i, t && (this.configuration = t, this.basePath = t.basePath || this.basePath);
		}
	}, e.RequiredError = class extends Error {
		constructor(e, t) {
			super(t), this.field = e, this.name = "RequiredError";
		}
	};
})), Vo = /* @__PURE__ */ c(((e) => {
	var t = e && e.__awaiter || function(e, t, n, r) {
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
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createRequestFunction = e.toPathString = e.serializeDataIfNeeded = e.setSearchParams = e.setOAuthToObject = e.setBearerAuthToObject = e.setBasicAuthToObject = e.setApiKeyToObject = e.assertParamExists = e.DUMMY_BASE_URL = void 0;
	var n = Bo();
	e.DUMMY_BASE_URL = "https://example.com", e.assertParamExists = function(e, t, r) {
		if (r == null) throw new n.RequiredError(t, `Required parameter ${t} was null or undefined when calling ${e}.`);
	}, e.setApiKeyToObject = function(e, n, r) {
		return t(this, void 0, void 0, function* () {
			r && r.apiKey && (e[n] = typeof r.apiKey == "function" ? yield r.apiKey(n) : yield r.apiKey);
		});
	}, e.setBasicAuthToObject = function(e, t) {
		t && (t.username || t.password) && (e.auth = {
			username: t.username,
			password: t.password
		});
	}, e.setBearerAuthToObject = function(e, n) {
		return t(this, void 0, void 0, function* () {
			n && n.accessToken && (e.Authorization = "Bearer " + (typeof n.accessToken == "function" ? yield n.accessToken() : yield n.accessToken));
		});
	}, e.setOAuthToObject = function(e, n, r, i) {
		return t(this, void 0, void 0, function* () {
			i && i.accessToken && (e.Authorization = "Bearer " + (typeof i.accessToken == "function" ? yield i.accessToken(n, r) : yield i.accessToken));
		});
	}, e.setSearchParams = function(e, ...t) {
		let n = new URLSearchParams(e.search);
		for (let e of t) for (let t in e) if (Array.isArray(e[t])) {
			n.delete(t);
			for (let r of e[t]) n.append(t, r);
		} else n.set(t, e[t]);
		e.search = n.toString();
	}, e.serializeDataIfNeeded = function(e, t, n) {
		let r = typeof e != "string";
		return (r && n && n.isJsonMime ? n.isJsonMime(t.headers["Content-Type"]) : r) ? JSON.stringify(e === void 0 ? {} : e) : e || "";
	}, e.toPathString = function(e) {
		return e.pathname + e.search + e.hash;
	}, e.createRequestFunction = function(e, t, n, r) {
		return (i = t, a = n) => {
			let o = Object.assign(Object.assign({}, e.options), { url: (r?.basePath || a) + e.url });
			return i.request(o);
		};
	};
})), Ho = /* @__PURE__ */ c(((e) => {
	var t = e && e.__awaiter || function(e, t, n, r) {
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
	}, n = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.BusinessEntityType = e.BusinessCheckBooleanStatus = e.BusinessAccountVerificationStatusEnum = e.BeaconUserStatus = e.BeaconReportType = e.BeaconReportCreateType = e.BeaconMatchSummaryCode = e.BeaconAuditTrailSource = e.BeaconAccountRiskEvaluateEvaluationReason = e.BaseReportWarningCode = e.BaseReportTransactionType = e.BankTransferType = e.BankTransferStatus = e.BankTransferNetwork = e.BankTransferEventType = e.BankTransferEventListDirection = e.BankTransferEventListBankTransferType = e.BankTransferDirection = e.BankIncomeRefreshCompleteResult = e.BankIncomeCompleteResult = e.AuthUpdateTypes = e.AssetType = e.AssetTransactionType = e.AssetTransactionCategoryType = e.AssetReportType = e.AssetReportTransactionType = e.AssetReportAddOns = e.AssetInvestmentTransactionType = e.AssetHoldingAssetHoldingRestrictedIndicatorEnum = e.AssetHoldingAssetHoldingTypeEnum = e.AssetDetailAssetEmployerSponsoredIndicatorEnum = e.AssetDetailAssetRetirementIndicatorEnum = e.AddressPurposeLabel = e.ActivityType = e.ActionState = e.AccountVerificationInsightsAccountNumberFormat = e.AccountType = e.AccountSubtype = e.AccountSelectionCardinality = e.AccountIdentityMatchScoreVerificationStatusEnum = e.AccountIdentityDocumentUploadVerificationStatusEnum = e.AccountIdentityVerificationStatusEnum = e.AccountHolderCategory = e.AccountBaseNullableVerificationStatusEnum = e.AccountBaseVerificationStatusEnum = e.AccountAssetsVerificationStatusEnum = e.APRAprTypeEnum = e.ACHClass = e.AAMVAMatchResult = e.AAMVADetailedMatchResult = void 0, e.DocumentStatus = e.DocumentNameMatchCode = e.DocumentDateOfBirthMatchCode = e.DocumentAuthenticityMatchCode = e.DocType = e.DepositoryAccountSubtype = e.DataSources = e.DashboardUserStatus = e.CreditSessionBankIncomeStatus = e.CreditSessionBankEmploymentStatus = e.CreditPayStubPayBasisType = e.CreditBankIncomeWarningType = e.CreditBankIncomeWarningCode = e.CreditBankIncomePayFrequency = e.CreditBankIncomeErrorType = e.CreditBankIncomeCategory = e.CreditBankIncomeAccountType = e.CreditBankEmploymentWarningType = e.CreditAccountSubtype = e.CreditACHClass = e.CraPartnerInsightsUltraFicoScoreVersion = e.CraPartnerInsightsBureau = e.CraPartnerInsightsBaseFicoScoreVersion = e.CraPDFAddOns = e.CraLoanType = e.CraLoanStatus = e.CraLoanPaymentSchedule = e.CraLoanApplicationDecision = e.CraCheckReportVerificationPdfReportType = e.CraCheckReportVerificationGetReportType = e.CraBankIncomeWarningCode = e.CraBankIncomeStatus = e.CraBankIncomeCompleteResult = e.CraBankIncomeBonusType = e.CountryCode = e.CounterpartyType = e.ConsumerReportPermissiblePurpose = e.ConsumerDisputeCategory = e.ConsentEventType = e.ConsentEventInitiator = e.ConsentEventCode = e.CheckReportWarningCode = e.CashflowAttributesVersion = e.CashFlowUpdatesEventWebhookCodes = e.CashFlowInsight = e.BusinessWebsiteBuildStatus = e.BusinessVerificationStatusWebPresenceCheck = e.BusinessVerificationStatusRiskCheck = e.BusinessVerificationStatusOverall = e.BusinessVerificationStatusKYBCheck = void 0, e.ItemCreateAuthentication = e.ItemConsentedDataScope = e.ItemAuthMethod = e.ItemUpdateTypeEnum = e.IssuingCountry = e.IssuesStatus = e.InvestmentTransactionType = e.InvestmentTransactionSubtype = e.InvestmentAccountSubtype = e.IndividualWatchlistCode = e.IncomeVerificationSourceType = e.IncomeVerificationPrecheckConfidence = e.IncomeVerificationPayrollFlowType = e.IncomeVerificationDocParsingConfig = e.IncomeBreakdownType = e.IncidentUpdateStatusEnum = e.ImageQualityOutcome = e.ImageQuality = e.IdentityVerificationStepStatus = e.IdentityVerificationStatus = e.IdentityVerificationAutofillStatus = e.IdentityUpdateTypes = e.ISOCurrencyCode = e.IDNumberType = e.HumanReviewStatus = e.HostedLinkDeliveryMethod = e.HiddenMatchSummaryCode = e.GSEReportType = e.FraudCheckOutcomeWithNoData = e.FraudCheckOutcome = e.Form1099Type = e.FDXUpdateReason = e.FDXPartyType = e.FDXPartyRegistry = e.FDXNotificationType = e.FDXNotificationSeverity = e.FDXNotificationPriority = e.FDXNotificationPayloadIdType = e.FDXNotificationCategory = e.FDXHateoasLinkAction = e.FDXEventStatus = e.FDXContentTypes = e.ExpirationDate = e.EntityWatchlistCode = e.EntityDocumentType = e.EnrichTransactionDirection = e.EmploymentVerificationStatus = e.EmploymentSourceType = e.EmailTypeEnum = e.EarningsBreakdownCanonicalDescription = void 0, e.PaymentInitiationPaymentCreateStatus = e.PaymentInitiationConsentType = e.PaymentInitiationConsentStatus = e.PaymentInitiationConsentScope = e.PaymentInitiationConsentProcessingMode = e.PaymentConsentPeriodicInterval = e.PaymentConsentPeriodicAlignment = e.PaymentChannel = e.PaymentAmountCurrency = e.PayPeriodDetailsPayFrequency = e.PayFrequencyValue = e.PartyRoleType = e.PartnerEndCustomerStatus = e.PartnerEndCustomerRequirementDue = e.PartnerEndCustomerQuestionnaireStatus = e.PartnerEndCustomerOAuthStatusUpdatedValues = e.PartnerEndCustomerOAuthInstitutionApplicationStatus = e.PartnerEndCustomerFlowdownStatus = e.PartnerEndCustomerCRAUseCase = e.POBoxStatus = e.OwnershipType = e.OverrideAccountType = e.OtherAccountSubtype = e.OriginatorExpectedTransferFrequency = e.OmittableTransferType = e.OAuthSubjectTokenType = e.OAuthGrantType = e.OAuthErrorCode = e.NetworkStatusGetResponseNetworkStatus = e.NetworkInsightsVersion = e.MonitoringItemStatusCode = e.MonitoringInsightsStatus = e.MonitoringConsumerReportPermissiblePurpose = e.MatchSummaryCode = e.LoanIdentifierType = e.LoanAccountSubtype = e.LinkTokenCreateRequestAuthFlowTypeEnum = e.LinkTokenCreateRequestAuthRerouteToCredentialsEnum = e.LinkTokenCreateRequestAppearanceMode = e.LinkSessionSuccessMetadataTransferStatus = e.LinkEventName = e.LinkDeliveryWebhookDeliveryStatus = e.LinkDeliveryWebhookCommunicationMethod = e.LinkDeliveryWebhookCallbackType = e.LinkDeliveryVerificationStatus = e.LinkDeliverySessionStatus = e.LinkDeliveryDeliveryMethod = e.LedgerEventSourceType = e.ItemWithConsentFieldsUpdateTypeEnum = e.ItemRemoveReasonCode = void 0, e.SandboxBankIncomeWebhookFireRequestWebhookCode = e.SMSVerificationStatus = e.RuleResult = e.RiskSignalFileType = e.RiskSignalDocumentType = e.RiskSignalDocumentStatus = e.RiskLevelWithNoData = e.RiskLevel = e.RiskCheckLinkedService = e.RiskCheckEmailTopLevelDomainIsSuspicious = e.RiskCheckEmailIsDeliverableStatus = e.RiskCheckEmailDomainIsFreeProvider = e.RiskCheckEmailDomainIsDisposable = e.RiskCheckEmailDomainIsCustom = e.RiskCheckBehaviorUserInteractionsLabel = e.RiskCheckBehaviorFraudRingDetectedLabel = e.RiskCheckBehaviorBotDetectedLabel = e.ReportType = e.RecurringTransactionFrequency = e.RecurringFrequency = e.RecommendationString = e.ReasonCode = e.ProxyType = e.ProtectReportType = e.ProtectReportSource = e.ProtectReportConfidence = e.ProgramNameSensitivity = e.Products = e.ProductStatusBreakdownRefreshIntervalEnum = e.ProductStatusStatusEnum = e.ProcessorTokenCreateRequestProcessorEnum = e.PrismProduct = e.PrismInsightsVersion = e.PrismFirstDetectVersion = e.PrismExtendVersion = e.PrismDetectVersion = e.PrismCashScoreVersion = e.PlaidLendScoreVersion = e.PlaidErrorType = e.PlaidCheckScoreVersion = e.PhysicalDocumentCategory = e.PhoneType = e.PhoneNumberTypeEnum = e.PersonalFinanceCategoryVersion = e.PendingDisconnectWebhookReason = e.PaystubPayFrequency = e.PaymentScheme = e.PaymentScheduleInterval = e.PaymentProfileStatus = e.PaymentInitiationPaymentStatus = void 0, e.TransferLedgerSweepSimulateEventType = e.TransferIntentStatus = e.TransferIntentCreateNetwork = e.TransferIntentCreateMode = e.TransferIntentAuthorizationDecision = e.TransferEventType = e.TransferEventListTransferType = e.TransferDocumentPurpose = e.TransferDiligenceStatus = e.TransferCreditFundsSource = e.TransferBalanceType = e.TransferAuthorizationRiskLevel = e.TransferAuthorizationGuaranteeDecisionRationaleCode = e.TransferAuthorizationGuaranteeDecision = e.TransferAuthorizationDecisionRationaleCode = e.TransferAuthorizationDecision = e.TransferACHNetwork = e.TransactionsUpdateStatus = e.TransactionsRuleType = e.TransactionsRuleField = e.TransactionStreamStatus = e.TransactionCode = e.TransactionBaseTransactionTypeEnum = e.TransactionAllOfPaymentChannelEnum = e.TransactionPaymentChannelEnum = e.TransactionTransactionTypeEnum = e.TotalCanonicalDescription = e.TaxpayerIdentifierType = e.SweepTrigger = e.SweepStatus = e.StudentRepaymentPlanTypeEnum = e.StudentLoanStatusTypeEnum = e.Strategy = e.StatementsRefreshCompleteResult = e.Source = e.SignalScheduleDefaultPaymentMethod = e.SignalPaymentMethod = e.SignalDecisionOutcome = e.ServiceProductFulfillmentIdentifier = e.SelfieStatus = e.SelfieCheckStatus = e.SelfieAnalysisLivenessCheck = e.SelfieAnalysisFacialAnalysisOutcome = e.SelfieAnalysisDocumentComparison = e.ScopesContext = e.SandboxTransferRfpSimulateAction = e.SandboxItemSetVerificationStatusRequestVerificationStatusEnum = e.SandboxItemFireWebhookRequestWebhookCodeEnum = e.SandboxIncomeWebhookFireRequestWebhookCode = e.SandboxIncomeFireWebhookRequestVerificationStatusEnum = void 0, e.PlaidApi = e.PlaidApiFactory = e.PlaidApiFp = e.PlaidApiAxiosParamCreator = e.YieldRateType = e.WebhookType = e.WebhookEnvironmentValues = e.WeakAliasDetermination = e.WatchlistScreeningStatus = e.WatchlistScreeningIndividualUpdateRequestResettableField = e.WatchlistScreeningHitStatus = e.WatchlistScreeningEntityUpdateRequestResettableField = e.WatchlistScreeningDocumentType = e.WarningWarningCodeEnum = e.WalletTransactionStatus = e.WalletTransactionRelationTypeEnum = e.WalletTransactionPayeeVerificationStatus = e.WalletTransactionGetResponseTypeEnum = e.WalletTransactionFailureReason = e.WalletTransactionTypeEnum = e.WalletStatus = e.WalletPaymentScheme = e.WalletISOCurrencyCode = e.VerifySMSDetailsStatus = e.VerificationStatus = e.VerificationRefreshStatus = e.UserStatedIncomeSourcePayType = e.UserStatedIncomeSourceFrequency = e.UserStatedIncomeSourceCategory = e.UserBasedProducts = e.TransferType = e.TransferSweepStatus = e.TransferStatus = e.TransferScheduleIntervalUnit = e.TransferRefundStatus = e.TransferRecurringStatus = e.TransferRecurringNetwork = e.TransferNetwork = void 0;
	var r = n(zo()), i = Vo(), a = Bo();
	(function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.AAMVADetailedMatchResult ||= {}), (function(e) {
		e.Match = "match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.AAMVAMatchResult ||= {}), (function(e) {
		e.Ccd = "ccd", e.Ppd = "ppd", e.Tel = "tel", e.Web = "web";
	})(e.ACHClass ||= {}), (function(e) {
		e.BalanceTransferApr = "balance_transfer_apr", e.CashApr = "cash_apr", e.PurchaseApr = "purchase_apr", e.Special = "special";
	})(e.APRAprTypeEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched";
	})(e.AccountAssetsVerificationStatusEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.AccountBaseVerificationStatusEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.AccountBaseNullableVerificationStatusEnum ||= {}), (function(e) {
		e.Business = "business", e.Personal = "personal", e.Unrecognized = "unrecognized";
	})(e.AccountHolderCategory ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.AccountIdentityVerificationStatusEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.AccountIdentityDocumentUploadVerificationStatusEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.AccountIdentityMatchScoreVerificationStatusEnum ||= {}), (function(e) {
		e.SingleSelect = "SINGLE_SELECT", e.MultiSelect = "MULTI_SELECT", e.All = "ALL";
	})(e.AccountSelectionCardinality ||= {}), (function(e) {
		e._401a = "401a", e._401k = "401k", e._403B = "403B", e._457b = "457b", e._529 = "529", e.Auto = "auto", e.Brokerage = "brokerage", e.Business = "business", e.CashIsa = "cash isa", e.CashManagement = "cash management", e.Cd = "cd", e.Checking = "checking", e.Commercial = "commercial", e.Construction = "construction", e.Consumer = "consumer", e.CreditCard = "credit card", e.CryptoExchange = "crypto exchange", e.Ebt = "ebt", e.EducationSavingsAccount = "education savings account", e.FixedAnnuity = "fixed annuity", e.Gic = "gic", e.HealthReimbursementArrangement = "health reimbursement arrangement", e.HomeEquity = "home equity", e.Hsa = "hsa", e.Isa = "isa", e.Ira = "ira", e.Keogh = "keogh", e.Lif = "lif", e.LifeInsurance = "life insurance", e.LineOfCredit = "line of credit", e.Lira = "lira", e.Loan = "loan", e.Lrif = "lrif", e.Lrsp = "lrsp", e.MoneyMarket = "money market", e.Mortgage = "mortgage", e.MutualFund = "mutual fund", e.NonCustodialWallet = "non-custodial wallet", e.NonTaxableBrokerageAccount = "non-taxable brokerage account", e.Other = "other", e.OtherInsurance = "other insurance", e.OtherAnnuity = "other annuity", e.Overdraft = "overdraft", e.Paypal = "paypal", e.Payroll = "payroll", e.Pension = "pension", e.Prepaid = "prepaid", e.Prif = "prif", e.ProfitSharingPlan = "profit sharing plan", e.Rdsp = "rdsp", e.Resp = "resp", e.Retirement = "retirement", e.Rlif = "rlif", e.Roth = "roth", e.Roth401k = "roth 401k", e.Rrif = "rrif", e.Rrsp = "rrsp", e.Sarsep = "sarsep", e.Savings = "savings", e.SepIra = "sep ira", e.SimpleIra = "simple ira", e.Sipp = "sipp", e.StockPlan = "stock plan", e.Student = "student", e.ThriftSavingsPlan = "thrift savings plan", e.Tfsa = "tfsa", e.Trust = "trust", e.Ugma = "ugma", e.Utma = "utma", e.VariableAnnuity = "variable annuity";
	})(e.AccountSubtype ||= {}), (function(e) {
		e.Investment = "investment", e.Credit = "credit", e.Depository = "depository", e.Loan = "loan", e.Brokerage = "brokerage", e.Other = "other";
	})(e.AccountType ||= {}), (function(e) {
		e.Valid = "valid", e.Invalid = "invalid", e.Unknown = "unknown";
	})(e.AccountVerificationInsightsAccountNumberFormat ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Attempt = "ATTEMPT", e.Success = "SUCCESS", e.Failure = "FAILURE", e.Skipped = "SKIPPED";
	})(e.ActionState ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.ItemCreate = "ITEM_CREATE", e.ItemImport = "ITEM_IMPORT", e.ItemUpdate = "ITEM_UPDATE", e.ItemUnlink = "ITEM_UNLINK", e.PortalUnlink = "PORTAL_UNLINK", e.PortalItemsDelete = "PORTAL_ITEMS_DELETE", e.ItemRemove = "ITEM_REMOVE", e.InvariantCheckerDeletion = "INVARIANT_CHECKER_DELETION", e.ScopesUpdate = "SCOPES_UPDATE";
	})(e.ActivityType ||= {}), (function(e) {
		e.Residential = "residential", e.Commercial = "commercial", e.NoData = "no_data";
	})(e.AddressPurposeLabel ||= {}), (function(e) {
		e.True = "true", e.False = "false";
	})(e.AssetDetailAssetRetirementIndicatorEnum ||= {}), (function(e) {
		e.True = "true", e.False = "false";
	})(e.AssetDetailAssetEmployerSponsoredIndicatorEnum ||= {}), (function(e) {
		e.Bond = "Bond", e.Stock = "Stock", e.Crypto = "Crypto", e.Other = "Other";
	})(e.AssetHoldingAssetHoldingTypeEnum ||= {}), (function(e) {
		e.True = "true", e.False = "false";
	})(e.AssetHoldingAssetHoldingRestrictedIndicatorEnum ||= {}), (function(e) {
		e.Buy = "Buy", e.Sell = "Sell", e.Dividends = "Dividends", e.Interest = "Interest", e.Transfers = "Transfers", e.Reinvestments = "Reinvestments", e.FundsReceived = "FundsReceived", e.Other = "Other";
	})(e.AssetInvestmentTransactionType ||= {}), (function(e) {
		e.Investments = "investments", e.FastAssets = "fast_assets";
	})(e.AssetReportAddOns ||= {}), (function(e) {
		e.Digital = "digital", e.Place = "place", e.Special = "special", e.Unresolved = "unresolved";
	})(e.AssetReportTransactionType ||= {}), (function(e) {
		e.Full = "FULL", e.Fast = "FAST";
	})(e.AssetReportType ||= {}), (function(e) {
		e.AtmFee = "ATMFee", e.Advertising = "Advertising", e.AirTravel = "AirTravel", e.AlcoholBars = "AlcoholBars", e.Allowance = "Allowance", e.Amusement = "Amusement", e.Arts = "Arts", e.AutoTransport = "AutoTransport", e.AutoInsurance = "AutoInsurance", e.AutoPayment = "AutoPayment", e.BabySupplies = "BabySupplies", e.BabysitterDaycare = "BabysitterDaycare", e.BankFee = "BankFee", e.BillsUtilities = "BillsUtilities", e.Bonus = "Bonus", e.BooksSupplies = "BooksSupplies", e.BusinessServices = "Business Services", e.Buy = "Buy", e.CashAtm = "CashATM", e.Charity = "Charity", e.Check = "Check", e.ChildSupport = "ChildSupport", e.Clothing = "Clothing", e.CoffeeShops = "CoffeeShops", e.CreditCardPayment = "CreditCardPayment", e.Dentist = "Dentist", e.Doctor = "Doctor", e.Education = "Education", e.ElectronicsSoftware = "ElectronicsSoftware", e.Entertainment = "Entertainment", e.Eyecare = "Eyecare", e.FastFood = "FastFood", e.FederalTax = "FederalTax", e.FeesCharges = "FeesCharges", e.FinanceCharge = "FinanceCharge", e.Financial = "Financial", e.FinancialAdvisor = "FinancialAdvisor", e.FoodDining = "FoodDining", e.Furnishings = "Furnishings", e.GasFuel = "GasFuel", e.GiftsDonations = "GiftsDonations", e.Groceries = "Groceries", e.Gym = "Gym", e.Hair = "Hair", e.HealthFitness = "HealthFitness", e.HealthInsurance = "HealthInsurance", e.Hobbies = "Hobbies", e.Home = "Home", e.HomeImprovement = "HomeImprovement", e.HomeInsurance = "HomeInsurance", e.HomePhone = "HomePhone", e.HomeServices = "HomeServices", e.HomeSupplies = "HomeSupplies", e.Hotel = "Hotel", e.Income = "Income", e.InterestIncome = "InterestIncome", e.Internet = "Internet", e.Investments = "Investments", e.Kids = "Kids", e.KidsActivities = "KidsActivities", e.LateFee = "LateFee", e.Laundry = "Laundry", e.LawnGarden = "LawnGarden", e.Legal = "Legal", e.LifeInsurance = "LifeInsurance", e.LoanInsurance = "LoanInsurance", e.LoanPayment = "LoanPayment", e.Loans = "Loans", e.MobilePhone = "MobilePhone", e.MortgageRent = "MortgageRent", e.MoviesDvds = "MoviesDVDs", e.Music = "Music", e.NewspapersMagazines = "NewspapersMagazines", e.OfficeSupplies = "OfficeSupplies", e.Parking = "Parking", e.Paycheck = "Paycheck", e.PersonalCare = "PersonalCare", e.PetFoodSupplies = "PetFoodSupplies", e.PetGrooming = "PetGrooming", e.Pets = "Pets", e.Pharmacy = "Pharmacy", e.Printing = "Printing", e.PropertyTax = "Property Tax", e.PublicTransportation = "Public Transportation", e.Reimbursement = "Reimbursement", e.RentalCarTaxi = "RentalCarTaxi", e.Restaurants = "Restaurants", e.SalesTax = "SalesTax", e.ServiceParts = "ServiceParts", e.ServiceFee = "ServiceFee", e.Shipping = "Shipping", e.Shopping = "Shopping", e.SpaMassage = "SpaMassage", e.SportingGoods = "SportingGoods", e.Sports = "Sports", e.StateTax = "StateTax", e.StudentLoan = "Student Loan", e.Taxes = "Taxes", e.Television = "Television", e.Toys = "Toys", e.Transfer = "Transfer", e.Travel = "Travel", e.Tuition = "Tuition", e.Uncategorized = "Uncategorized", e.Utilities = "Utilities", e.Vacation = "Vacation", e.Veterinary = "Veterinary";
	})(e.AssetTransactionCategoryType ||= {}), (function(e) {
		e.Credit = "Credit", e.Debit = "Debit";
	})(e.AssetTransactionType ||= {}), (function(e) {
		e.CheckingAccount = "CheckingAccount", e.SavingsAccount = "SavingsAccount", e.Investment = "Investment", e.MoneyMarketFund = "MoneyMarketFund", e.Other = "Other";
	})(e.AssetType ||= {}), (function(e) {
		e.AccountNumber = "ACCOUNT_NUMBER", e.RoutingNumber = "ROUTING_NUMBER";
	})(e.AuthUpdateTypes ||= {}), (function(e) {
		e.Success = "SUCCESS", e.Failure = "FAILURE";
	})(e.BankIncomeCompleteResult ||= {}), (function(e) {
		e.Success = "SUCCESS", e.Failure = "FAILURE";
	})(e.BankIncomeRefreshCompleteResult ||= {}), (function(e) {
		e.Outbound = "outbound", e.Inbound = "inbound", e.Null = "null";
	})(e.BankTransferDirection ||= {}), (function(e) {
		e.Debit = "debit", e.Credit = "credit", e.Null = "null";
	})(e.BankTransferEventListBankTransferType ||= {}), (function(e) {
		e.Inbound = "inbound", e.Outbound = "outbound", e.Null = "null";
	})(e.BankTransferEventListDirection ||= {}), (function(e) {
		e.Pending = "pending", e.Cancelled = "cancelled", e.Failed = "failed", e.Posted = "posted", e.Reversed = "reversed";
	})(e.BankTransferEventType ||= {}), (function(e) {
		e.Ach = "ach", e.SameDayAch = "same-day-ach", e.Wire = "wire";
	})(e.BankTransferNetwork ||= {}), (function(e) {
		e.Pending = "pending", e.Posted = "posted", e.Cancelled = "cancelled", e.Failed = "failed", e.Reversed = "reversed";
	})(e.BankTransferStatus ||= {}), (function(e) {
		e.Debit = "debit", e.Credit = "credit";
	})(e.BankTransferType ||= {}), (function(e) {
		e.Digital = "digital", e.Place = "place", e.Special = "special", e.Unresolved = "unresolved";
	})(e.BaseReportTransactionType ||= {}), (function(e) {
		e.IdentityUnavailable = "IDENTITY_UNAVAILABLE", e.TransactionsUnavailable = "TRANSACTIONS_UNAVAILABLE", e.UserFraudAlert = "USER_FRAUD_ALERT";
	})(e.BaseReportWarningCode ||= {}), (function(e) {
		e.Onboarding = "ONBOARDING", e.NewAccount = "NEW_ACCOUNT", e.InformationChange = "INFORMATION_CHANGE", e.DormantUser = "DORMANT_USER", e.Other = "OTHER";
	})(e.BeaconAccountRiskEvaluateEvaluationReason ||= {}), (function(e) {
		e.Dashboard = "dashboard", e.Api = "api", e.System = "system", e.BulkImport = "bulk_import";
	})(e.BeaconAuditTrailSource ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.BeaconMatchSummaryCode ||= {}), (function(e) {
		e.FirstParty = "first_party", e.Stolen = "stolen", e.Synthetic = "synthetic", e.AccountTakeover = "account_takeover", e.DataBreach = "data_breach", e.Unknown = "unknown";
	})(e.BeaconReportCreateType ||= {}), (function(e) {
		e.FirstParty = "first_party", e.Stolen = "stolen", e.Synthetic = "synthetic", e.AccountTakeover = "account_takeover", e.DataBreach = "data_breach", e.Unknown = "unknown";
	})(e.BeaconReportType ||= {}), (function(e) {
		e.Rejected = "rejected", e.PendingReview = "pending_review", e.Cleared = "cleared";
	})(e.BeaconUserStatus ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.Unsent = "unsent", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPass = "database_insights_pass", e.DatabaseInsightsPassWithCaution = "database_insights_pass_with_caution", e.DatabaseInsightsFail = "database_insights_fail";
	})(e.BusinessAccountVerificationStatusEnum ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.BusinessCheckBooleanStatus ||= {}), (function(e) {
		e.SoleProprietorship = "sole_proprietorship", e.GeneralPartnership = "general_partnership", e.Llc = "llc", e.Llp = "llp", e.Lllp = "lllp", e.Lp = "lp", e.CCorporation = "c_corporation", e.SCorporation = "s_corporation", e.BCorporation = "b_corporation", e.Nonprofit = "nonprofit", e.Cooperative = "cooperative", e.Trust = "trust", e.ProfessionalAssociation = "professional_association", e.ProfessionalCorporation = "professional_corporation", e.TradeName = "trade_name", e.Bank = "bank", e.CreditUnion = "credit_union", e.Insurance = "insurance", e.Other = "other", e.Unknown = "unknown";
	})(e.BusinessEntityType ||= {}), (function(e) {
		e.Active = "active", e.Success = "success", e.Failed = "failed";
	})(e.BusinessVerificationStatusKYBCheck ||= {}), (function(e) {
		e.Active = "active", e.Success = "success", e.Failed = "failed";
	})(e.BusinessVerificationStatusOverall ||= {}), (function(e) {
		e.Active = "active", e.Success = "success", e.Failed = "failed";
	})(e.BusinessVerificationStatusRiskCheck ||= {}), (function(e) {
		e.Active = "active", e.Success = "success", e.Failed = "failed", e.NotApplicable = "not_applicable";
	})(e.BusinessVerificationStatusWebPresenceCheck ||= {}), (function(e) {
		e.ComingSoon = "coming_soon", e.Active = "active", e.Inactive = "inactive";
	})(e.BusinessWebsiteBuildStatus ||= {}), (function(e) {
		e.LargeDepositDetected = "LARGE_DEPOSIT_DETECTED", e.LowBalanceDetected = "LOW_BALANCE_DETECTED", e.NewLoanPaymentDetected = "NEW_LOAN_PAYMENT_DETECTED", e.NsfOverdraftDetected = "NSF_OVERDRAFT_DETECTED";
	})(e.CashFlowInsight ||= {}), (function(e) {
		e.LargeDepositDetected = "LARGE_DEPOSIT_DETECTED", e.LowBalanceDetected = "LOW_BALANCE_DETECTED", e.NewLoanPaymentDetected = "NEW_LOAN_PAYMENT_DETECTED", e.NsfOverdraftDetected = "NSF_OVERDRAFT_DETECTED";
	})(e.CashFlowUpdatesEventWebhookCodes ||= {}), (function(e) {
		e.V10 = "v1.0", e.V20 = "v2.0", e.Cfi1 = "CFI1";
	})(e.CashflowAttributesVersion ||= {}), (function(e) {
		e.IdentityUnavailable = "IDENTITY_UNAVAILABLE", e.TransactionsUnavailable = "TRANSACTIONS_UNAVAILABLE", e.UserFraudAlert = "USER_FRAUD_ALERT";
	})(e.CheckReportWarningCode ||= {}), (function(e) {
		e.UserAgreement = "USER_AGREEMENT", e.UseCases = "USE_CASES", e.DataScopes = "DATA_SCOPES", e.AccountScopes = "ACCOUNT_SCOPES", e.Revocation = "REVOCATION";
	})(e.ConsentEventCode ||= {}), (function(e) {
		e.Plaid = "PLAID", e.DataProvider = "DATA_PROVIDER", e.Customer = "CUSTOMER", e.EndUser = "END_USER";
	})(e.ConsentEventInitiator ||= {}), (function(e) {
		e.Granted = "CONSENT_GRANTED", e.Revoked = "CONSENT_REVOKED", e.Updated = "CONSENT_UPDATED";
	})(e.ConsentEventType ||= {}), (function(e) {
		e.Transaction = "TRANSACTION", e.Balance = "BALANCE", e.Identity = "IDENTITY", e.Other = "OTHER";
	})(e.ConsumerDisputeCategory ||= {}), (function(e) {
		e.AccountReviewCredit = "ACCOUNT_REVIEW_CREDIT", e.AccountReviewNonCredit = "ACCOUNT_REVIEW_NON_CREDIT", e.ExtensionOfCredit = "EXTENSION_OF_CREDIT", e.LegitimateBusinessNeedTenantScreening = "LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING", e.LegitimateBusinessNeedOther = "LEGITIMATE_BUSINESS_NEED_OTHER", e.WrittenInstructionPrequalification = "WRITTEN_INSTRUCTION_PREQUALIFICATION", e.WrittenInstructionOther = "WRITTEN_INSTRUCTION_OTHER", e.EligibilityForGovtBenefits = "ELIGIBILITY_FOR_GOVT_BENEFITS";
	})(e.ConsumerReportPermissiblePurpose ||= {}), (function(e) {
		e.Merchant = "merchant", e.FinancialInstitution = "financial_institution", e.PaymentApp = "payment_app", e.Marketplace = "marketplace", e.PaymentTerminal = "payment_terminal", e.IncomeSource = "income_source";
	})(e.CounterpartyType ||= {}), (function(e) {
		e.Us = "US", e.Gb = "GB", e.Es = "ES", e.Nl = "NL", e.Fr = "FR", e.Ie = "IE", e.Ca = "CA", e.De = "DE", e.It = "IT", e.Pl = "PL", e.Dk = "DK", e.No = "NO", e.Se = "SE", e.Ee = "EE", e.Lt = "LT", e.Lv = "LV", e.Pt = "PT", e.Be = "BE", e.At = "AT", e.Fi = "FI";
	})(e.CountryCode ||= {}), (function(e) {
		e.BonusIncluded = "BONUS_INCLUDED", e.BonusOnly = "BONUS_ONLY", e.Null = "null";
	})(e.CraBankIncomeBonusType ||= {}), (function(e) {
		e.Success = "SUCCESS", e.Failure = "FAILURE";
	})(e.CraBankIncomeCompleteResult ||= {}), (function(e) {
		e.Active = "ACTIVE", e.Inactive = "INACTIVE", e.Unknown = "UNKNOWN";
	})(e.CraBankIncomeStatus ||= {}), (function(e) {
		e.IdentityUnavailable = "IDENTITY_UNAVAILABLE", e.TransactionsUnavailable = "TRANSACTIONS_UNAVAILABLE", e.ReportDeleted = "REPORT_DELETED", e.DataUnavailable = "DATA_UNAVAILABLE";
	})(e.CraBankIncomeWarningCode ||= {}), (function(e) {
		e.Voa = "VOA", e.EmploymentRefresh = "EMPLOYMENT_REFRESH";
	})(e.CraCheckReportVerificationGetReportType ||= {}), (function(e) {
		e.Voa = "voa", e.EmploymentRefresh = "employment_refresh";
	})(e.CraCheckReportVerificationPdfReportType ||= {}), (function(e) {
		e.Approved = "APPROVED", e.Declined = "DECLINED", e.Other = "OTHER";
	})(e.CraLoanApplicationDecision ||= {}), (function(e) {
		e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Biweekly = "BIWEEKLY", e.Monthly = "MONTHLY", e.Quarterly = "QUARTERLY", e.Annually = "ANNUALLY", e.Other = "OTHER";
	})(e.CraLoanPaymentSchedule ||= {}), (function(e) {
		e.Approved = "APPROVED", e.Declined = "DECLINED", e.Booked = "BOOKED", e.Current = "CURRENT", e.Delinquent = "DELINQUENT", e.Default = "DEFAULT", e.ChargedOff = "CHARGED_OFF", e.Transferred = "TRANSFERRED", e.PaidOff = "PAID_OFF", e.Other = "OTHER";
	})(e.CraLoanStatus ||= {}), (function(e) {
		e.Personal = "PERSONAL", e.CreditCard = "CREDIT_CARD", e.Business = "BUSINESS", e.Mortgage = "MORTGAGE", e.Auto = "AUTO", e.Payday = "PAYDAY", e.Student = "STUDENT", e.HomeEquity = "HOME_EQUITY", e.Other = "OTHER";
	})(e.CraLoanType ||= {}), (function(e) {
		e.IncomeInsights = "cra_income_insights", e.PartnerInsights = "cra_partner_insights";
	})(e.CraPDFAddOns ||= {}), (function(e) {
		e._8 = "8", e._9 = "9", e._10T = "10T";
	})(e.CraPartnerInsightsBaseFicoScoreVersion ||= {}), (function(e) {
		e.Equifax = "EQUIFAX", e.Experian = "EXPERIAN", e.Transunion = "TRANSUNION";
	})(e.CraPartnerInsightsBureau ||= {}), (function(e) {
		e._10 = "1.0";
	})(e.CraPartnerInsightsUltraFicoScoreVersion ||= {}), (function(e) {
		e.Ccd = "ccd", e.Ppd = "ppd", e.Web = "web";
	})(e.CreditACHClass ||= {}), (function(e) {
		e.CreditCard = "credit card", e.Paypal = "paypal", e.All = "all";
	})(e.CreditAccountSubtype ||= {}), (function(e) {
		e.BankEmploymentWarning = "BANK_EMPLOYMENT_WARNING";
	})(e.CreditBankEmploymentWarningType ||= {}), (function(e) {
		e.Depository = "depository";
	})(e.CreditBankIncomeAccountType ||= {}), (function(e) {
		e.Salary = "SALARY", e.Unemployment = "UNEMPLOYMENT", e.Cash = "CASH", e.GigEconomy = "GIG_ECONOMY", e.Rental = "RENTAL", e.ChildSupport = "CHILD_SUPPORT", e.Military = "MILITARY", e.Retirement = "RETIREMENT", e.LongTermDisability = "LONG_TERM_DISABILITY", e.BankInterest = "BANK_INTEREST", e.CashDeposit = "CASH_DEPOSIT", e.TransferFromApplication = "TRANSFER_FROM_APPLICATION", e.TaxRefund = "TAX_REFUND", e.BenefitOther = "BENEFIT_OTHER", e.Other = "OTHER";
	})(e.CreditBankIncomeCategory ||= {}), (function(e) {
		e.InternalServerError = "INTERNAL_SERVER_ERROR", e.InsufficientCredentials = "INSUFFICIENT_CREDENTIALS", e.ItemLocked = "ITEM_LOCKED", e.UserSetupRequired = "USER_SETUP_REQUIRED", e.CountryNotSupported = "COUNTRY_NOT_SUPPORTED", e.InstitutionDown = "INSTITUTION_DOWN", e.InstitutionNoLongerSupported = "INSTITUTION_NO_LONGER_SUPPORTED", e.InstitutionNotResponding = "INSTITUTION_NOT_RESPONDING", e.InvalidCredentials = "INVALID_CREDENTIALS", e.InvalidMfa = "INVALID_MFA", e.InvalidSendMethod = "INVALID_SEND_METHOD", e.ItemLoginRequired = "ITEM_LOGIN_REQUIRED", e.MfaNotSupported = "MFA_NOT_SUPPORTED", e.NoAccounts = "NO_ACCOUNTS", e.ItemNotSupported = "ITEM_NOT_SUPPORTED", e.AccessNotGranted = "ACCESS_NOT_GRANTED";
	})(e.CreditBankIncomeErrorType ||= {}), (function(e) {
		e.Weekly = "WEEKLY", e.Biweekly = "BIWEEKLY", e.SemiMonthly = "SEMI_MONTHLY", e.Monthly = "MONTHLY", e.Daily = "DAILY", e.Unknown = "UNKNOWN";
	})(e.CreditBankIncomePayFrequency ||= {}), (function(e) {
		e.IdentityUnavailable = "IDENTITY_UNAVAILABLE", e.TransactionsUnavailable = "TRANSACTIONS_UNAVAILABLE", e.ItemUnapproved = "ITEM_UNAPPROVED", e.ReportDeleted = "REPORT_DELETED", e.DataUnavailable = "DATA_UNAVAILABLE";
	})(e.CreditBankIncomeWarningCode ||= {}), (function(e) {
		e.BankIncomeWarning = "BANK_INCOME_WARNING";
	})(e.CreditBankIncomeWarningType ||= {}), (function(e) {
		e.Salary = "SALARY", e.Hourly = "HOURLY", e.Commission = "COMMISSION";
	})(e.CreditPayStubPayBasisType ||= {}), (function(e) {
		e.Approved = "APPROVED", e.NoEmployersFound = "NO_EMPLOYERS_FOUND", e.EmployerNotListed = "EMPLOYER_NOT_LISTED";
	})(e.CreditSessionBankEmploymentStatus ||= {}), (function(e) {
		e.Approved = "APPROVED", e.NoDepositsFound = "NO_DEPOSITS_FOUND", e.UserReportedNoIncome = "USER_REPORTED_NO_INCOME";
	})(e.CreditSessionBankIncomeStatus ||= {}), (function(e) {
		e.Invited = "invited", e.Active = "active", e.Deactivated = "deactivated";
	})(e.DashboardUserStatus ||= {}), (function(e) {
		e.Institution = "INSTITUTION", e.InstitutionMask = "INSTITUTION_MASK", e.User = "USER";
	})(e.DataSources ||= {}), (function(e) {
		e.Checking = "checking", e.Savings = "savings", e.Hsa = "hsa", e.Cd = "cd", e.MoneyMarket = "money market", e.Paypal = "paypal", e.Prepaid = "prepaid", e.CashManagement = "cash management", e.Ebt = "ebt", e.All = "all";
	})(e.DepositoryAccountSubtype ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.DocumentTypePaystub = "DOCUMENT_TYPE_PAYSTUB", e.DocumentTypeBankStatement = "DOCUMENT_TYPE_BANK_STATEMENT", e.DocumentTypeUsTaxW2 = "DOCUMENT_TYPE_US_TAX_W2", e.DocumentTypeUsMilitaryEras = "DOCUMENT_TYPE_US_MILITARY_ERAS", e.DocumentTypeUsMilitaryLes = "DOCUMENT_TYPE_US_MILITARY_LES", e.DocumentTypeUsMilitaryCles = "DOCUMENT_TYPE_US_MILITARY_CLES", e.DocumentTypeGig = "DOCUMENT_TYPE_GIG", e.DocumentTypeNone = "DOCUMENT_TYPE_NONE", e.DocumentTypeUsTax1099Misc = "DOCUMENT_TYPE_US_TAX_1099_MISC", e.DocumentTypeUsTax1099K = "DOCUMENT_TYPE_US_TAX_1099_K", e.DocumentTypePlaidGeneratedPaystubPdf = "DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF";
	})(e.DocType ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.DocumentAuthenticityMatchCode ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.DocumentDateOfBirthMatchCode ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data";
	})(e.DocumentNameMatchCode ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed", e.ManuallyApproved = "manually_approved";
	})(e.DocumentStatus ||= {}), (function(e) {
		e.Bonus = "BONUS", e.Commission = "COMMISSION", e.Overtime = "OVERTIME", e.PaidTimeOff = "PAID TIME OFF", e.RegularPay = "REGULAR PAY", e.Vacation = "VACATION", e.BasicAllowanceHousing = "BASIC ALLOWANCE HOUSING", e.BasicAllowanceSubsistence = "BASIC ALLOWANCE SUBSISTENCE", e.Other = "OTHER", e.Null = "null";
	})(e.EarningsBreakdownCanonicalDescription ||= {}), (function(e) {
		e.Primary = "primary", e.Secondary = "secondary", e.Other = "other";
	})(e.EmailTypeEnum ||= {}), (function(e) {
		e.Bank = "bank", e.Payroll = "payroll";
	})(e.EmploymentSourceType ||= {}), (function(e) {
		e.EmploymentStatusActive = "EMPLOYMENT_STATUS_ACTIVE", e.EmploymentStatusInactive = "EMPLOYMENT_STATUS_INACTIVE", e.Null = "null";
	})(e.EmploymentVerificationStatus ||= {}), (function(e) {
		e.Inflow = "INFLOW", e.Outflow = "OUTFLOW";
	})(e.EnrichTransactionDirection ||= {}), (function(e) {
		e.Bik = "bik", e.BusinessNumber = "business_number", e.Imo = "imo", e.Other = "other", e.Swift = "swift", e.TaxId = "tax_id";
	})(e.EntityDocumentType ||= {}), (function(e) {
		e.CaCon = "CA_CON", e.EuCon = "EU_CON", e.IzSoe = "IZ_SOE", e.IzUnc = "IZ_UNC", e.IzWbk = "IZ_WBK", e.UsCap = "US_CAP", e.UsFse = "US_FSE", e.UsMbs = "US_MBS", e.UsSdn = "US_SDN", e.UsSsi = "US_SSI", e.UsCmc = "US_CMC", e.UsUvl = "US_UVL", e.UsSam = "US_SAM", e.UsTel = "US_TEL", e.AuCon = "AU_CON", e.UkHmc = "UK_HMC";
	})(e.EntityWatchlistCode ||= {}), (function(e) {
		e.NotExpired = "not_expired", e.Expired = "expired", e.NoData = "no_data";
	})(e.ExpirationDate ||= {}), (function(e) {
		e.ApplicationPdf = "application/pdf", e.ImageGif = "image/gif", e.ImageJpeg = "image/jpeg", e.ImageTiff = "image/tiff", e.ImagePng = "image/png", e.ApplicationJson = "application/json";
	})(e.FDXContentTypes ||= {}), (function(e) {
		e.Active = "ACTIVE", e.Expired = "EXPIRED", e.Revoked = "REVOKED", e.Suspended = "SUSPENDED";
	})(e.FDXEventStatus ||= {}), (function(e) {
		e.Get = "GET", e.Post = "POST", e.Patch = "PATCH", e.Delete = "DELETE", e.Put = "PUT";
	})(e.FDXHateoasLinkAction ||= {}), (function(e) {
		e.Security = "SECURITY", e.Maintenance = "MAINTENANCE", e.Fraud = "FRAUD", e.Consent = "CONSENT", e.NewData = "NEW_DATA", e.TokenizedAccountNumber = "TOKENIZED_ACCOUNT_NUMBER";
	})(e.FDXNotificationCategory ||= {}), (function(e) {
		e.Account = "ACCOUNT", e.Customer = "CUSTOMER", e.Party = "PARTY", e.Maintenance = "MAINTENANCE", e.Consent = "CONSENT";
	})(e.FDXNotificationPayloadIdType ||= {}), (function(e) {
		e.High = "HIGH", e.Medium = "MEDIUM", e.Low = "LOW";
	})(e.FDXNotificationPriority ||= {}), (function(e) {
		e.Emergency = "EMERGENCY", e.Alert = "ALERT", e.Warning = "WARNING", e.Notice = "NOTICE", e.Info = "INFO";
	})(e.FDXNotificationSeverity ||= {}), (function(e) {
		e.ConsentRevoked = "CONSENT_REVOKED", e.ConsentUpdated = "CONSENT_UPDATED", e.Custom = "CUSTOM", e.Service = "SERVICE", e.Balance = "BALANCE", e.PlannedOutage = "PLANNED_OUTAGE", e.TanRevoked = "TAN_REVOKED";
	})(e.FDXNotificationType ||= {}), (function(e) {
		e.Fdx = "FDX", e.Gleif = "GLEIF", e.Icann = "ICANN", e.Private = "PRIVATE";
	})(e.FDXPartyRegistry ||= {}), (function(e) {
		e.DataAccessPlatform = "DATA_ACCESS_PLATFORM", e.DataProvider = "DATA_PROVIDER", e.DataRecipient = "DATA_RECIPIENT", e.Individual = "INDIVIDUAL", e.Merchant = "MERCHANT", e.Vendor = "VENDOR";
	})(e.FDXPartyType ||= {}), (function(e) {
		e.BusinessRule = "BUSINESS_RULE", e.SecurityEvent = "SECURITY_EVENT", e.UserAction = "USER_ACTION", e.Other = "OTHER";
	})(e.FDXUpdateReason ||= {}), (function(e) {
		e.Unknown = "FORM_1099_TYPE_UNKNOWN", e.Misc = "FORM_1099_TYPE_MISC", e.K = "FORM_1099_TYPE_K";
	})(e.Form1099Type ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.FraudCheckOutcome ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed", e.NoData = "no_data";
	})(e.FraudCheckOutcomeWithNoData ||= {}), (function(e) {
		e.Voa = "VOA", e.EmploymentRefresh = "EMPLOYMENT_REFRESH";
	})(e.GSEReportType ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data", e.NoInput = "no_input";
	})(e.HiddenMatchSummaryCode ||= {}), (function(e) {
		e.Sms = "sms", e.Email = "email";
	})(e.HostedLinkDeliveryMethod ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed", e.NoData = "no_data";
	})(e.HumanReviewStatus ||= {}), (function(e) {
		e.ArDni = "ar_dni", e.AuDriversLicense = "au_drivers_license", e.AuPassport = "au_passport", e.BrCpf = "br_cpf", e.CaSin = "ca_sin", e.ClRun = "cl_run", e.CnResidentCard = "cn_resident_card", e.CoNit = "co_nit", e.DkCpr = "dk_cpr", e.EgNationalId = "eg_national_id", e.EsDni = "es_dni", e.EsNie = "es_nie", e.HkHkid = "hk_hkid", e.InPan = "in_pan", e.ItCf = "it_cf", e.JoCivilId = "jo_civil_id", e.JpMyNumber = "jp_my_number", e.KeHudumaNamba = "ke_huduma_namba", e.KwCivilId = "kw_civil_id", e.MxCurp = "mx_curp", e.MxRfc = "mx_rfc", e.MyNric = "my_nric", e.NgNin = "ng_nin", e.NzDriversLicense = "nz_drivers_license", e.OmCivilId = "om_civil_id", e.PhPsn = "ph_psn", e.PlPesel = "pl_pesel", e.RoCnp = "ro_cnp", e.SaNationalId = "sa_national_id", e.SePin = "se_pin", e.SgNric = "sg_nric", e.TrTcKimlik = "tr_tc_kimlik", e.UsSsn = "us_ssn", e.UsSsnLast4 = "us_ssn_last_4", e.ZaSmartId = "za_smart_id";
	})(e.IDNumberType ||= {}), (function(e) {
		e.Usd = "USD";
	})(e.ISOCurrencyCode ||= {}), (function(e) {
		e.Phones = "PHONES", e.Addresses = "ADDRESSES", e.Emails = "EMAILS", e.Names = "NAMES";
	})(e.IdentityUpdateTypes ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.IdentityVerificationAutofillStatus ||= {}), (function(e) {
		e.Active = "active", e.Success = "success", e.Failed = "failed", e.Expired = "expired", e.Canceled = "canceled", e.PendingReview = "pending_review";
	})(e.IdentityVerificationStatus ||= {}), (function(e) {
		e.Success = "success", e.Active = "active", e.Failed = "failed", e.WaitingForPrerequisite = "waiting_for_prerequisite", e.NotApplicable = "not_applicable", e.Skipped = "skipped", e.Expired = "expired", e.Canceled = "canceled", e.PendingReview = "pending_review", e.ManuallyApproved = "manually_approved", e.ManuallyRejected = "manually_rejected";
	})(e.IdentityVerificationStepStatus ||= {}), (function(e) {
		e.High = "high", e.Medium = "medium", e.Low = "low";
	})(e.ImageQuality ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.ImageQualityOutcome ||= {}), (function(e) {
		e.Investigating = "INVESTIGATING", e.Identified = "IDENTIFIED", e.Scheduled = "SCHEDULED", e.Resolved = "RESOLVED", e.Unknown = "UNKNOWN";
	})(e.IncidentUpdateStatusEnum ||= {}), (function(e) {
		e.Bonus = "bonus", e.Overtime = "overtime", e.Regular = "regular", e.Null = "null";
	})(e.IncomeBreakdownType ||= {}), (function(e) {
		e.Ocr = "ocr", e.RiskSignals = "risk_signals";
	})(e.IncomeVerificationDocParsingConfig ||= {}), (function(e) {
		e.DigitalIncome = "payroll_digital_income", e.DocumentIncome = "payroll_document_income";
	})(e.IncomeVerificationPayrollFlowType ||= {}), (function(e) {
		e.High = "HIGH", e.Low = "LOW", e.Unknown = "UNKNOWN";
	})(e.IncomeVerificationPrecheckConfidence ||= {}), (function(e) {
		e.Bank = "bank", e.Payroll = "payroll";
	})(e.IncomeVerificationSourceType ||= {}), (function(e) {
		e.AuCon = "AU_CON", e.CaCon = "CA_CON", e.EuCon = "EU_CON", e.IzCia = "IZ_CIA", e.IzIpl = "IZ_IPL", e.IzPep = "IZ_PEP", e.IzUnc = "IZ_UNC", e.IzWbk = "IZ_WBK", e.UkHmc = "UK_HMC", e.UsDpl = "US_DPL", e.UsDtc = "US_DTC", e.UsFbi = "US_FBI", e.UsFse = "US_FSE", e.UsIsn = "US_ISN", e.UsMbs = "US_MBS", e.UsPlc = "US_PLC", e.UsSam = "US_SAM", e.UsSdn = "US_SDN", e.UsSsi = "US_SSI", e.SgSof = "SG_SOF", e.TrTwl = "TR_TWL", e.TrDfd = "TR_DFD", e.TrFor = "TR_FOR", e.TrWmd = "TR_WMD", e.TrCmb = "TR_CMB";
	})(e.IndividualWatchlistCode ||= {}), (function(e) {
		e._529 = "529", e._401a = "401a", e._401k = "401k", e._403B = "403B", e._457b = "457b", e.Brokerage = "brokerage", e.CashIsa = "cash isa", e.CryptoExchange = "crypto exchange", e.EducationSavingsAccount = "education savings account", e.FixedAnnuity = "fixed annuity", e.Gic = "gic", e.HealthReimbursementArrangement = "health reimbursement arrangement", e.Hsa = "hsa", e.Ira = "ira", e.Isa = "isa", e.Keogh = "keogh", e.Lif = "lif", e.LifeInsurance = "life insurance", e.Lira = "lira", e.Lrif = "lrif", e.Lrsp = "lrsp", e.MutualFund = "mutual fund", e.NonCustodialWallet = "non-custodial wallet", e.NonTaxableBrokerageAccount = "non-taxable brokerage account", e.Other = "other", e.OtherAnnuity = "other annuity", e.OtherInsurance = "other insurance", e.Pension = "pension", e.Prif = "prif", e.ProfitSharingPlan = "profit sharing plan", e.Qshr = "qshr", e.Rdsp = "rdsp", e.Resp = "resp", e.Retirement = "retirement", e.Rlif = "rlif", e.Roth = "roth", e.Roth401k = "roth 401k", e.Rrif = "rrif", e.Rrsp = "rrsp", e.Sarsep = "sarsep", e.SepIra = "sep ira", e.SimpleIra = "simple ira", e.Sipp = "sipp", e.StockPlan = "stock plan", e.Tfsa = "tfsa", e.Trust = "trust", e.Ugma = "ugma", e.Utma = "utma", e.VariableAnnuity = "variable annuity", e.All = "all";
	})(e.InvestmentAccountSubtype ||= {}), (function(e) {
		e.AccountFee = "account fee", e.Adjustment = "adjustment", e.Assignment = "assignment", e.Buy = "buy", e.BuyToCover = "buy to cover", e.Contribution = "contribution", e.Deposit = "deposit", e.Distribution = "distribution", e.Dividend = "dividend", e.DividendReinvestment = "dividend reinvestment", e.Exercise = "exercise", e.Expire = "expire", e.FundFee = "fund fee", e.Interest = "interest", e.InterestReceivable = "interest receivable", e.InterestReinvestment = "interest reinvestment", e.LegalFee = "legal fee", e.LoanPayment = "loan payment", e.LongTermCapitalGain = "long-term capital gain", e.LongTermCapitalGainReinvestment = "long-term capital gain reinvestment", e.ManagementFee = "management fee", e.MarginExpense = "margin expense", e.Merger = "merger", e.MiscellaneousFee = "miscellaneous fee", e.NonQualifiedDividend = "non-qualified dividend", e.NonResidentTax = "non-resident tax", e.PendingCredit = "pending credit", e.PendingDebit = "pending debit", e.QualifiedDividend = "qualified dividend", e.Rebalance = "rebalance", e.ReturnOfPrincipal = "return of principal", e.Request = "request", e.Sell = "sell", e.SellShort = "sell short", e.Send = "send", e.ShortTermCapitalGain = "short-term capital gain", e.ShortTermCapitalGainReinvestment = "short-term capital gain reinvestment", e.SpinOff = "spin off", e.Split = "split", e.StockDistribution = "stock distribution", e.Tax = "tax", e.TaxWithheld = "tax withheld", e.Trade = "trade", e.Transfer = "transfer", e.TransferFee = "transfer fee", e.TrustFee = "trust fee", e.UnqualifiedGain = "unqualified gain", e.Withdrawal = "withdrawal";
	})(e.InvestmentTransactionSubtype ||= {}), (function(e) {
		e.Buy = "buy", e.Sell = "sell", e.Cancel = "cancel", e.Cash = "cash", e.Fee = "fee", e.Transfer = "transfer";
	})(e.InvestmentTransactionType ||= {}), (function(e) {
		e.Reported = "REPORTED", e.AwaitingResolution = "AWAITING_RESOLUTION", e.FixInProgress = "FIX_IN_PROGRESS", e.FixPendingValidation = "FIX_PENDING_VALIDATION", e.CannotFix = "CANNOT_FIX", e.Resolved = "RESOLVED";
	})(e.IssuesStatus ||= {}), (function(e) {
		e.Match = "match", e.NoMatch = "no_match";
	})(e.IssuingCountry ||= {}), (function(e) {
		e.Background = "background", e.UserPresentRequired = "user_present_required";
	})(e.ItemUpdateTypeEnum ||= {}), (function(e) {
		e.InstantAuth = "INSTANT_AUTH", e.InstantMatch = "INSTANT_MATCH", e.AutomatedMicrodeposits = "AUTOMATED_MICRODEPOSITS", e.SameDayMicrodeposits = "SAME_DAY_MICRODEPOSITS", e.InstantMicrodeposits = "INSTANT_MICRODEPOSITS", e.DatabaseMatch = "DATABASE_MATCH", e.DatabaseInsights = "DATABASE_INSIGHTS", e.TransferMigrated = "TRANSFER_MIGRATED", e.InvestmentsFallback = "INVESTMENTS_FALLBACK", e.Null = "null";
	})(e.ItemAuthMethod ||= {}), (function(e) {
		e.AccountBalanceInfo = "account_balance_info", e.ContactInfo = "contact_info", e.AccountRoutingNumber = "account_routing_number", e.Transactions = "transactions", e.CreditLoanInfo = "credit_loan_info", e.Investments = "investments", e.PayrollInfo = "payroll_info", e.IncomeVerificationPaystubsInfo = "income_verification_paystubs_info", e.IncomeVerificationW2sInfo = "income_verification_w2s_info", e.IncomeVerificationBankStatements = "income_verification_bank_statements", e.IncomeVerificationEmploymentInfo = "income_verification_employment_info", e.BankStatements = "bank_statements", e.RiskInfo = "risk_info", e.NetworkInsightsLite = "network_insights_lite", e.FraudInfo = "fraud_info";
	})(e.ItemConsentedDataScope ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.DataPartner = "DATA_PARTNER", e.Plaid = "PLAID";
	})(e.ItemCreateAuthentication ||= {}), (function(e) {
		e.FraudFirstParty = "FRAUD_FIRST_PARTY", e.FraudFalseIdentity = "FRAUD_FALSE_IDENTITY", e.FraudAbuse = "FRAUD_ABUSE", e.FraudOther = "FRAUD_OTHER", e.ConnectionIsNonFunctional = "CONNECTION_IS_NON_FUNCTIONAL", e.Other = "OTHER";
	})(e.ItemRemoveReasonCode ||= {}), (function(e) {
		e.Background = "background", e.UserPresentRequired = "user_present_required";
	})(e.ItemWithConsentFieldsUpdateTypeEnum ||= {}), (function(e) {
		e.Transfer = "TRANSFER", e.Sweep = "SWEEP", e.Refund = "REFUND";
	})(e.LedgerEventSourceType ||= {}), (function(e) {
		e.Sms = "SMS", e.Email = "EMAIL";
	})(e.LinkDeliveryDeliveryMethod ||= {}), (function(e) {
		e.Created = "CREATED", e.Opened = "OPENED", e.Exited = "EXITED", e.Completed = "COMPLETED", e.Expired = "EXPIRED";
	})(e.LinkDeliverySessionStatus ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.PendingAutomaticVerification = "pending_automatic_verification", e.PendingManualVerification = "pending_manual_verification", e.ManuallyVerified = "manually_verified", e.VerificationExpired = "verification_expired", e.VerificationFailed = "verification_failed", e.Unsent = "unsent", e.DatabaseMatched = "database_matched", e.DatabaseInsightsPending = "database_insights_pending";
	})(e.LinkDeliveryVerificationStatus ||= {}), (function(e) {
		e.Success = "ON_SUCCESS", e.Event = "ON_EVENT", e.Exit = "ON_EXIT";
	})(e.LinkDeliveryWebhookCallbackType ||= {}), (function(e) {
		e.Sms = "SMS", e.Email = "EMAIL";
	})(e.LinkDeliveryWebhookCommunicationMethod ||= {}), (function(e) {
		e.Success = "SUCCESS", e.Failure = "FAILURE";
	})(e.LinkDeliveryWebhookDeliveryStatus ||= {}), (function(e) {
		e.BankIncomeInsightsCompleted = "BANK_INCOME_INSIGHTS_COMPLETED", e.CloseOauth = "CLOSE_OAUTH", e.Error = "ERROR", e.Exit = "EXIT", e.FailOauth = "FAIL_OAUTH", e.Handoff = "HANDOFF", e.IssueFollowed = "ISSUE_FOLLOWED", e.Open = "OPEN", e.OpenMyPlaid = "OPEN_MY_PLAID", e.OpenOauth = "OPEN_OAUTH", e.SearchInstitution = "SEARCH_INSTITUTION", e.SelectAuthType = "SELECT_AUTH_TYPE", e.SelectBrand = "SELECT_BRAND", e.SelectDegradedInstitution = "SELECT_DEGRADED_INSTITUTION", e.SelectDownInstitution = "SELECT_DOWN_INSTITUTION", e.SelectFilteredInstitution = "SELECT_FILTERED_INSTITUTION", e.SelectInstitution = "SELECT_INSTITUTION", e.SubmitAccountNumber = "SUBMIT_ACCOUNT_NUMBER", e.SubmitCredentials = "SUBMIT_CREDENTIALS", e.SubmitDocuments = "SUBMIT_DOCUMENTS", e.SubmitDocumentsError = "SUBMIT_DOCUMENTS_ERROR", e.SubmitDocumentsSuccess = "SUBMIT_DOCUMENTS_SUCCESS", e.SubmitMfa = "SUBMIT_MFA", e.SubmitRoutingNumber = "SUBMIT_ROUTING_NUMBER", e.TransitionView = "TRANSITION_VIEW", e.ViewDataTypes = "VIEW_DATA_TYPES";
	})(e.LinkEventName ||= {}), (function(e) {
		e.Complete = "COMPLETE", e.Incomplete = "INCOMPLETE", e.Null = "null";
	})(e.LinkSessionSuccessMetadataTransferStatus ||= {}), (function(e) {
		e.Light = "LIGHT", e.Dark = "DARK", e.System = "SYSTEM", e.Null = "null";
	})(e.LinkTokenCreateRequestAppearanceMode ||= {}), (function(e) {
		e.Off = "OFF", e.Optional = "OPTIONAL", e.Forced = "FORCED";
	})(e.LinkTokenCreateRequestAuthRerouteToCredentialsEnum ||= {}), (function(e) {
		e.FlexibleAuth = "FLEXIBLE_AUTH";
	})(e.LinkTokenCreateRequestAuthFlowTypeEnum ||= {}), (function(e) {
		e.Auto = "auto", e.Business = "business", e.Commercial = "commercial", e.Construction = "construction", e.Consumer = "consumer", e.HomeEquity = "home equity", e.Loan = "loan", e.Mortgage = "mortgage", e.Overdraft = "overdraft", e.LineOfCredit = "line of credit", e.Student = "student", e.Other = "other", e.All = "all";
	})(e.LoanAccountSubtype ||= {}), (function(e) {
		e.LenderLoan = "LenderLoan", e.UniversalLoan = "UniversalLoan";
	})(e.LoanIdentifierType ||= {}), (function(e) {
		e.Match = "match", e.PartialMatch = "partial_match", e.NoMatch = "no_match", e.NoData = "no_data", e.NoInput = "no_input";
	})(e.MatchSummaryCode ||= {}), (function(e) {
		e.AccountReviewCredit = "ACCOUNT_REVIEW_CREDIT", e.WrittenInstructionOther = "WRITTEN_INSTRUCTION_OTHER";
	})(e.MonitoringConsumerReportPermissiblePurpose ||= {}), (function(e) {
		e.Available = "AVAILABLE", e.Failed = "FAILED";
	})(e.MonitoringInsightsStatus ||= {}), (function(e) {
		e.Available = "AVAILABLE", e.Failed = "FAILED", e.Pending = "PENDING";
	})(e.MonitoringItemStatusCode ||= {}), (function(e) {
		e.Ni1 = "NI1";
	})(e.NetworkInsightsVersion ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.ReturningUser = "RETURNING_USER";
	})(e.NetworkStatusGetResponseNetworkStatus ||= {}), (function(e) {
		e.InvalidRequest = "invalid_request", e.InvalidClient = "invalid_client", e.InvalidGrant = "invalid_grant", e.UnauthorizedClient = "unauthorized_client", e.InvalidScope = "invalid_scope", e.UnsupportedGrantType = "unsupported_grant_type";
	})(e.OAuthErrorCode ||= {}), (function(e) {
		e.RefreshToken = "refresh_token", e.UrnietfparamsoauthgrantTypetokenExchange = "urn:ietf:params:oauth:grant-type:token-exchange", e.ClientCredentials = "client_credentials";
	})(e.OAuthGrantType ||= {}), (function(e) {
		e.Tokensuser = "urn:plaid:params:tokens:user", e.OauthuserToken = "urn:plaid:params:oauth:user-token", e.CreditmultiUser = "urn:plaid:params:credit:multi-user";
	})(e.OAuthSubjectTokenType ||= {}), (function(e) {
		e.Debit = "debit", e.Credit = "credit";
	})(e.OmittableTransferType ||= {}), (function(e) {
		e.OncePerMonth = "once_per_month", e.TwicePerMonth = "twice_per_month", e.OncePerWeek = "once_per_week", e.Daily = "daily";
	})(e.OriginatorExpectedTransferFrequency ||= {}), (function(e) {
		e.Other = "other", e.All = "all";
	})(e.OtherAccountSubtype ||= {}), (function(e) {
		e.Investment = "investment", e.Credit = "credit", e.Depository = "depository", e.Loan = "loan", e.Payroll = "payroll", e.Other = "other";
	})(e.OverrideAccountType ||= {}), (function(e) {
		e.Null = "null", e.Individual = "individual", e.Joint = "joint", e.Association = "association", e.Trust = "trust";
	})(e.OwnershipType ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.POBoxStatus ||= {}), (function(e) {
		e.CreditUnderwriting = "CREDIT_UNDERWRITING", e.TenantScreening = "TENANT_SCREENING", e.InvestorOrServicerOfCredit = "INVESTOR_OR_SERVICER_OF_CREDIT", e.Utilities = "UTILITIES", e.BankAccountOpening = "BANK_ACCOUNT_OPENING", e.IdentityVerificationFraudPrevention = "IDENTITY_VERIFICATION_FRAUD_PREVENTION", e.CollectionsDebtRecovery = "COLLECTIONS_DEBT_RECOVERY";
	})(e.PartnerEndCustomerCRAUseCase ||= {}), (function(e) {
		e.NotStarted = "NOT_STARTED", e.InReview = "IN_REVIEW", e.Negotiation = "NEGOTIATION", e.Complete = "COMPLETE";
	})(e.PartnerEndCustomerFlowdownStatus ||= {}), (function(e) {
		e.NotStarted = "NOT_STARTED", e.Processing = "PROCESSING", e.Approved = "APPROVED", e.Enabled = "ENABLED", e.AttentionRequired = "ATTENTION_REQUIRED";
	})(e.PartnerEndCustomerOAuthInstitutionApplicationStatus ||= {}), (function(e) {
		e.NotStarted = "not-started", e.Processing = "processing", e.Approved = "approved", e.Enabled = "enabled", e.AttentionRequired = "attention-required";
	})(e.PartnerEndCustomerOAuthStatusUpdatedValues ||= {}), (function(e) {
		e.NotStarted = "NOT_STARTED", e.Received = "RECEIVED", e.Complete = "COMPLETE";
	})(e.PartnerEndCustomerQuestionnaireStatus ||= {}), (function(e) {
		e.LegalEntityName = "legal_entity_name", e.Website = "website", e.ApplicationName = "application_name", e.IsDiligenceAttested = "is_diligence_attested", e.TechnicalContact = "technical_contact", e.BillingContact = "billing_contact", e.Address = "address", e.BankAddendumAcceptance = "bank_addendum_acceptance", e.QuestionnairesCra = "questionnaires.cra";
	})(e.PartnerEndCustomerRequirementDue ||= {}), (function(e) {
		e.UnderReview = "UNDER_REVIEW", e.PendingEnablement = "PENDING_ENABLEMENT", e.Active = "ACTIVE", e.Denied = "DENIED", e.MoreInformationNeeded = "MORE_INFORMATION_NEEDED";
	})(e.PartnerEndCustomerStatus ||= {}), (function(e) {
		e.Borrower = "Borrower";
	})(e.PartyRoleType ||= {}), (function(e) {
		e.Monthly = "monthly", e.Semimonthly = "semimonthly", e.Weekly = "weekly", e.Biweekly = "biweekly", e.Unknown = "unknown", e.Null = "null";
	})(e.PayFrequencyValue ||= {}), (function(e) {
		e.PayFrequencyUnknown = "PAY_FREQUENCY_UNKNOWN", e.PayFrequencyWeekly = "PAY_FREQUENCY_WEEKLY", e.PayFrequencyBiweekly = "PAY_FREQUENCY_BIWEEKLY", e.PayFrequencySemimonthly = "PAY_FREQUENCY_SEMIMONTHLY", e.PayFrequencyMonthly = "PAY_FREQUENCY_MONTHLY", e.Null = "null";
	})(e.PayPeriodDetailsPayFrequency ||= {}), (function(e) {
		e.Gbp = "GBP", e.Eur = "EUR", e.Pln = "PLN", e.Sek = "SEK", e.Dkk = "DKK", e.Nok = "NOK";
	})(e.PaymentAmountCurrency ||= {}), (function(e) {
		e.Online = "online", e.InStore = "in store", e.Other = "other";
	})(e.PaymentChannel ||= {}), (function(e) {
		e.Calendar = "CALENDAR", e.Consent = "CONSENT";
	})(e.PaymentConsentPeriodicAlignment ||= {}), (function(e) {
		e.Day = "DAY", e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR";
	})(e.PaymentConsentPeriodicInterval ||= {}), (function(e) {
		e.Async = "ASYNC", e.Immediate = "IMMEDIATE";
	})(e.PaymentInitiationConsentProcessingMode ||= {}), (function(e) {
		e.MeToMe = "ME_TO_ME", e.External = "EXTERNAL";
	})(e.PaymentInitiationConsentScope ||= {}), (function(e) {
		e.Unauthorised = "UNAUTHORISED", e.Authorised = "AUTHORISED", e.Revoked = "REVOKED", e.Rejected = "REJECTED", e.Expired = "EXPIRED";
	})(e.PaymentInitiationConsentStatus ||= {}), (function(e) {
		e.Sweeping = "SWEEPING", e.Commercial = "COMMERCIAL";
	})(e.PaymentInitiationConsentType ||= {}), (function(e) {
		e.PaymentStatusInputNeeded = "PAYMENT_STATUS_INPUT_NEEDED";
	})(e.PaymentInitiationPaymentCreateStatus ||= {}), (function(e) {
		e.InputNeeded = "PAYMENT_STATUS_INPUT_NEEDED", e.Processing = "PAYMENT_STATUS_PROCESSING", e.Initiated = "PAYMENT_STATUS_INITIATED", e.Completed = "PAYMENT_STATUS_COMPLETED", e.InsufficientFunds = "PAYMENT_STATUS_INSUFFICIENT_FUNDS", e.Failed = "PAYMENT_STATUS_FAILED", e.Blocked = "PAYMENT_STATUS_BLOCKED", e.Unknown = "PAYMENT_STATUS_UNKNOWN", e.Executed = "PAYMENT_STATUS_EXECUTED", e.Settled = "PAYMENT_STATUS_SETTLED", e.Authorising = "PAYMENT_STATUS_AUTHORISING", e.Cancelled = "PAYMENT_STATUS_CANCELLED", e.Established = "PAYMENT_STATUS_ESTABLISHED", e.Rejected = "PAYMENT_STATUS_REJECTED";
	})(e.PaymentInitiationPaymentStatus ||= {}), (function(e) {
		e.Pending = "PENDING", e.Ready = "READY", e.Removed = "REMOVED";
	})(e.PaymentProfileStatus ||= {}), (function(e) {
		e.Weekly = "WEEKLY", e.Monthly = "MONTHLY";
	})(e.PaymentScheduleInterval ||= {}), (function(e) {
		e.Null = "null", e.LocalDefault = "LOCAL_DEFAULT", e.LocalInstant = "LOCAL_INSTANT", e.SepaCreditTransfer = "SEPA_CREDIT_TRANSFER", e.SepaCreditTransferInstant = "SEPA_CREDIT_TRANSFER_INSTANT";
	})(e.PaymentScheme ||= {}), (function(e) {
		e.Monthly = "MONTHLY", e.BiWeekly = "BI-WEEKLY", e.Weekly = "WEEKLY", e.SemiMonthly = "SEMI-MONTHLY", e.Null = "null";
	})(e.PaystubPayFrequency ||= {}), (function(e) {
		e.Migration = "INSTITUTION_MIGRATION", e.TokenExpiration = "INSTITUTION_TOKEN_EXPIRATION";
	})(e.PendingDisconnectWebhookReason ||= {}), (function(e) {
		e.V1 = "v1", e.V2 = "v2";
	})(e.PersonalFinanceCategoryVersion ||= {}), (function(e) {
		e.Home = "home", e.Work = "work", e.Office = "office", e.Mobile = "mobile", e.Mobile1 = "mobile1", e.Other = "other";
	})(e.PhoneNumberTypeEnum ||= {}), (function(e) {
		e.Phone = "phone", e.Fax = "fax";
	})(e.PhoneType ||= {}), (function(e) {
		e.DriversLicense = "drivers_license", e.IdCard = "id_card", e.Passport = "passport", e.ResidencePermitCard = "residence_permit_card", e.ResidentCard = "resident_card", e.Visa = "visa";
	})(e.PhysicalDocumentCategory ||= {}), (function(e) {
		e.V10 = "v1.0", e.V20 = "v2.0";
	})(e.PlaidCheckScoreVersion ||= {}), (function(e) {
		e.InvalidRequest = "INVALID_REQUEST", e.InvalidResult = "INVALID_RESULT", e.InvalidInput = "INVALID_INPUT", e.InstitutionError = "INSTITUTION_ERROR", e.RateLimitExceeded = "RATE_LIMIT_EXCEEDED", e.ApiError = "API_ERROR", e.ItemError = "ITEM_ERROR", e.AssetReportError = "ASSET_REPORT_ERROR", e.RecaptchaError = "RECAPTCHA_ERROR", e.OauthError = "OAUTH_ERROR", e.PaymentError = "PAYMENT_ERROR", e.BankTransferError = "BANK_TRANSFER_ERROR", e.IncomeVerificationError = "INCOME_VERIFICATION_ERROR", e.MicrodepositsError = "MICRODEPOSITS_ERROR", e.SandboxError = "SANDBOX_ERROR", e.PartnerError = "PARTNER_ERROR", e.SignalError = "SIGNAL_ERROR", e.TransactionsError = "TRANSACTIONS_ERROR", e.TransactionError = "TRANSACTION_ERROR", e.TransferError = "TRANSFER_ERROR", e.CheckReportError = "CHECK_REPORT_ERROR", e.ConsumerReportError = "CONSUMER_REPORT_ERROR", e.UserError = "USER_ERROR";
	})(e.PlaidErrorType ||= {}), (function(e) {
		e.V10 = "v1.0", e.V20 = "v2.0", e.Ls1 = "LS1";
	})(e.PlaidLendScoreVersion ||= {}), (function(e) {
		e._4 = "4", e._3Lite = "3_lite", e._3 = "3", e.Null = "null";
	})(e.PrismCashScoreVersion ||= {}), (function(e) {
		e._4 = "4", e.Null = "null";
	})(e.PrismDetectVersion ||= {}), (function(e) {
		e._4 = "4", e.Null = "null";
	})(e.PrismExtendVersion ||= {}), (function(e) {
		e._3 = "3", e.Null = "null";
	})(e.PrismFirstDetectVersion ||= {}), (function(e) {
		e._4 = "4", e._3 = "3", e.Null = "null";
	})(e.PrismInsightsVersion ||= {}), (function(e) {
		e.Insights = "insights", e.Scores = "scores";
	})(e.PrismProduct ||= {}), (function(e) {
		e.Dwolla = "dwolla", e.Galileo = "galileo", e.ModernTreasury = "modern_treasury", e.Ocrolus = "ocrolus", e.Vesta = "vesta", e.Drivewealth = "drivewealth", e.Vopay = "vopay", e.Achq = "achq", e.Check = "check", e.Checkbook = "checkbook", e.Circle = "circle", e.SilaMoney = "sila_money", e.Rize = "rize", e.SvbApi = "svb_api", e.Unit = "unit", e.Wyre = "wyre", e.Lithic = "lithic", e.Alpaca = "alpaca", e.Astra = "astra", e.Moov = "moov", e.TreasuryPrime = "treasury_prime", e.Marqeta = "marqeta", e.Checkout = "checkout", e.Solid = "solid", e.Highnote = "highnote", e.Gemini = "gemini", e.ApexClearing = "apex_clearing", e.Gusto = "gusto", e.Adyen = "adyen", e.Atomic = "atomic", e.I2c = "i2c", e.Wepay = "wepay", e.Riskified = "riskified", e.Utb = "utb", e.AdpRoll = "adp_roll", e.FortressTrust = "fortress_trust", e.Bond = "bond", e.Bakkt = "bakkt", e.Teal = "teal", e.ZeroHash = "zero_hash", e.TabaPay = "taba_pay", e.Knot = "knot", e.Sardine = "sardine", e.Alloy = "alloy", e.Finix = "finix", e.Nuvei = "nuvei", e.Layer = "layer", e.Boom = "boom", e.Paynote = "paynote", e.Stake = "stake", e.Wedbush = "wedbush", e.Esusu = "esusu", e.Ansa = "ansa", e.Scribeup = "scribeup", e.Straddle = "straddle", e.Loanpro = "loanpro", e.BloomCredit = "bloom_credit", e.Sfox = "sfox", e.Brale = "brale", e.Parafin = "parafin", e.Cardless = "cardless", e.OpenLedger = "open_ledger", e.Valon = "valon", e.Gainbridge = "gainbridge", e.Cardlytics = "cardlytics", e.Pinwheel = "pinwheel", e.ThreadBank = "thread_bank", e.Array = "array", e.Fiant = "fiant", e.Oatfi = "oatfi", e.Curinos = "curinos";
	})(e.ProcessorTokenCreateRequestProcessorEnum ||= {}), (function(e) {
		e.Healthy = "HEALTHY", e.Degraded = "DEGRADED", e.Down = "DOWN";
	})(e.ProductStatusStatusEnum ||= {}), (function(e) {
		e.Normal = "NORMAL", e.Delayed = "DELAYED", e.Stopped = "STOPPED";
	})(e.ProductStatusBreakdownRefreshIntervalEnum ||= {}), (function(e) {
		e.Assets = "assets", e.Auth = "auth", e.Balance = "balance", e.BalancePlus = "balance_plus", e.Beacon = "beacon", e.Identity = "identity", e.IdentityMatch = "identity_match", e.Investments = "investments", e.InvestmentsAuth = "investments_auth", e.Liabilities = "liabilities", e.PaymentInitiation = "payment_initiation", e.IdentityVerification = "identity_verification", e.Transactions = "transactions", e.CreditDetails = "credit_details", e.Income = "income", e.IncomeVerification = "income_verification", e.StandingOrders = "standing_orders", e.Transfer = "transfer", e.Employment = "employment", e.RecurringTransactions = "recurring_transactions", e.TransactionsRefresh = "transactions_refresh", e.Signal = "signal", e.Statements = "statements", e.ProcessorPayments = "processor_payments", e.ProcessorIdentity = "processor_identity", e.Profile = "profile", e.CraBaseReport = "cra_base_report", e.CraIncomeInsights = "cra_income_insights", e.CraPartnerInsights = "cra_partner_insights", e.CraNetworkInsights = "cra_network_insights", e.CraCashflowInsights = "cra_cashflow_insights", e.CraMonitoring = "cra_monitoring", e.CraLendScore = "cra_lend_score", e.CraPlaidCreditScore = "cra_plaid_credit_score", e.Layer = "layer", e.PayByBank = "pay_by_bank", e.ProtectLinkedBank = "protect_linked_bank";
	})(e.Products ||= {}), (function(e) {
		e.Coarse = "coarse", e.Balanced = "balanced", e.Strict = "strict", e.Exact = "exact";
	})(e.ProgramNameSensitivity ||= {}), (function(e) {
		e.Confirmed = "CONFIRMED", e.Suspected = "SUSPECTED";
	})(e.ProtectReportConfidence ||= {}), (function(e) {
		e.InternalReview = "INTERNAL_REVIEW", e.UserSelfReported = "USER_SELF_REPORTED", e.BankFeedback = "BANK_FEEDBACK", e.NetworkFeedback = "NETWORK_FEEDBACK", e.AutomatedSystem = "AUTOMATED_SYSTEM", e.ThirdPartyAlert = "THIRD_PARTY_ALERT", e.Other = "OTHER";
	})(e.ProtectReportSource ||= {}), (function(e) {
		e.UserAccountTakeover = "USER_ACCOUNT_TAKEOVER", e.FalseIdentity = "FALSE_IDENTITY", e.StolenIdentity = "STOLEN_IDENTITY", e.SyntheticIdentity = "SYNTHETIC_IDENTITY", e.MultipleUserAccounts = "MULTIPLE_USER_ACCOUNTS", e.ScamVictim = "SCAM_VICTIM", e.BankAccountTakeover = "BANK_ACCOUNT_TAKEOVER", e.BankConnectionRevoked = "BANK_CONNECTION_REVOKED", e.CardTesting = "CARD_TESTING", e.UnauthorizedTransaction = "UNAUTHORIZED_TRANSACTION", e.CardChargeback = "CARD_CHARGEBACK", e.AchReturn = "ACH_RETURN", e.Dispute = "DISPUTE", e.FirstPartyFraud = "FIRST_PARTY_FRAUD", e.MissedPayment = "MISSED_PAYMENT", e.LoanStacking = "LOAN_STACKING", e.MoneyLaundering = "MONEY_LAUNDERING", e.NoFraud = "NO_FRAUD", e.Other = "OTHER";
	})(e.ProtectReportType ||= {}), (function(e) {
		e.NoneDetected = "none_detected", e.Tor = "tor", e.Vpn = "vpn", e.WebProxy = "web_proxy", e.PublicProxy = "public_proxy";
	})(e.ProxyType ||= {}), (function(e) {
		e.Ac03 = "AC03", e.Am09 = "AM09", e.Cust = "CUST", e.Dupl = "DUPL", e.Frad = "FRAD", e.Tech = "TECH", e.Upay = "UPAY", e.Ac14 = "AC14", e.Am06 = "AM06", e.Be05 = "BE05", e.Focr = "FOCR", e.Ms02 = "MS02", e.Ms03 = "MS03", e.Rr04 = "RR04", e.Ruta = "RUTA";
	})(e.ReasonCode ||= {}), (function(e) {
		e.Recommended = "RECOMMENDED", e.NotRecommended = "NOT_RECOMMENDED", e.Unknown = "UNKNOWN";
	})(e.RecommendationString ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Weekly = "WEEKLY", e.Biweekly = "BIWEEKLY", e.SemiMonthly = "SEMI_MONTHLY", e.Monthly = "MONTHLY", e.Annually = "ANNUALLY", e.Daily = "DAILY", e.Dynamic = "DYNAMIC", e.Null = "null";
	})(e.RecurringFrequency ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Weekly = "WEEKLY", e.Biweekly = "BIWEEKLY", e.SemiMonthly = "SEMI_MONTHLY", e.Monthly = "MONTHLY", e.Annually = "ANNUALLY";
	})(e.RecurringTransactionFrequency ||= {}), (function(e) {
		e.Asset = "asset";
	})(e.ReportType ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckBehaviorBotDetectedLabel ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckBehaviorFraudRingDetectedLabel ||= {}), (function(e) {
		e.Genuine = "genuine", e.Neutral = "neutral", e.Risky = "risky", e.NoData = "no_data";
	})(e.RiskCheckBehaviorUserInteractionsLabel ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckEmailDomainIsCustom ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckEmailDomainIsDisposable ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckEmailDomainIsFreeProvider ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckEmailIsDeliverableStatus ||= {}), (function(e) {
		e.Yes = "yes", e.No = "no", e.NoData = "no_data";
	})(e.RiskCheckEmailTopLevelDomainIsSuspicious ||= {}), (function(e) {
		e.Aboutme = "aboutme", e.Adobe = "adobe", e.AdultSites = "adult_sites", e.Airbnb = "airbnb", e.Altbalaji = "altbalaji", e.Amazon = "amazon", e.Apple = "apple", e.Archiveorg = "archiveorg", e.Atlassian = "atlassian", e.Bitmoji = "bitmoji", e.Bodybuilding = "bodybuilding", e.Booking = "booking", e.Bukalapak = "bukalapak", e.Codecademy = "codecademy", e.Deliveroo = "deliveroo", e.Diigo = "diigo", e.Discord = "discord", e.Disneyplus = "disneyplus", e.Duolingo = "duolingo", e.Ebay = "ebay", e.Envato = "envato", e.Eventbrite = "eventbrite", e.Evernote = "evernote", e.Facebook = "facebook", e.Firefox = "firefox", e.Flickr = "flickr", e.Flipkart = "flipkart", e.Foursquare = "foursquare", e.Freelancer = "freelancer", e.Gaana = "gaana", e.Giphy = "giphy", e.Github = "github", e.Google = "google", e.Gravatar = "gravatar", e.Hubspot = "hubspot", e.Imgur = "imgur", e.Instagram = "instagram", e.Jdid = "jdid", e.Kakao = "kakao", e.Kommo = "kommo", e.Komoot = "komoot", e.Lastfm = "lastfm", e.Lazada = "lazada", e.Line = "line", e.Linkedin = "linkedin", e.Mailru = "mailru", e.Microsoft = "microsoft", e.Myspace = "myspace", e.Netflix = "netflix", e.Nike = "nike", e.Ok = "ok", e.Patreon = "patreon", e.Pinterest = "pinterest", e.Plurk = "plurk", e.Quora = "quora", e.Qzone = "qzone", e.Rambler = "rambler", e.Rappi = "rappi", e.Replit = "replit", e.Samsung = "samsung", e.Seoclerks = "seoclerks", e.Shopclues = "shopclues", e.Skype = "skype", e.Snapchat = "snapchat", e.Snapdeal = "snapdeal", e.Soundcloud = "soundcloud", e.Spotify = "spotify", e.Starz = "starz", e.Strava = "strava", e.Taringa = "taringa", e.Telegram = "telegram", e.Tiki = "tiki", e.Tokopedia = "tokopedia", e.Treehouse = "treehouse", e.Tumblr = "tumblr", e.Twitter = "twitter", e.Venmo = "venmo", e.Viber = "viber", e.Vimeo = "vimeo", e.Vivino = "vivino", e.Vkontakte = "vkontakte", e.Wattpad = "wattpad", e.Weibo = "weibo", e.Whatsapp = "whatsapp", e.Wordpress = "wordpress", e.Xing = "xing", e.Yahoo = "yahoo", e.Yandex = "yandex", e.Zalo = "zalo", e.Zoho = "zoho";
	})(e.RiskCheckLinkedService ||= {}), (function(e) {
		e.Low = "low", e.Medium = "medium", e.High = "high";
	})(e.RiskLevel ||= {}), (function(e) {
		e.Low = "low", e.Medium = "medium", e.High = "high", e.NoData = "no_data";
	})(e.RiskLevelWithNoData ||= {}), (function(e) {
		e.Processing = "PROCESSING", e.ProcessingComplete = "PROCESSING_COMPLETE", e.ProcessingError = "PROCESSING_ERROR", e.PasswordProtected = "PASSWORD_PROTECTED", e.VirusDetected = "VIRUS_DETECTED";
	})(e.RiskSignalDocumentStatus ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.BankStatement = "BANK_STATEMENT", e.BenefitsStatement = "BENEFITS_STATEMENT", e.BusinessFiling = "BUSINESS_FILING", e.Check = "CHECK", e.DrivingLicense = "DRIVING_LICENSE", e.FinancialStatement = "FINANCIAL_STATEMENT", e.Invoice = "INVOICE", e.Payslip = "PAYSLIP", e.SocialSecurityCard = "SOCIAL_SECURITY_CARD", e.TaxForm = "TAX_FORM", e.UtilityBill = "UTILITY_BILL";
	})(e.RiskSignalDocumentType ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.ImagePdf = "IMAGE_PDF", e.ScanOcr = "SCAN_OCR", e.TruePdf = "TRUE_PDF", e.Image = "IMAGE", e.MixedPagePdf = "MIXED_PAGE_PDF", e.EmptyPdf = "EMPTY_PDF", e.FlattenedPdf = "FLATTENED_PDF";
	})(e.RiskSignalFileType ||= {}), (function(e) {
		e.Accept = "ACCEPT", e.Reroute = "REROUTE", e.Review = "REVIEW";
	})(e.RuleResult ||= {}), (function(e) {
		e.Pending = "pending", e.Success = "success", e.Failed = "failed", e.Canceled = "canceled";
	})(e.SMSVerificationStatus ||= {}), (function(e) {
		e.Update = "BANK_INCOME_REFRESH_UPDATE", e.Complete = "BANK_INCOME_REFRESH_COMPLETE";
	})(e.SandboxBankIncomeWebhookFireRequestWebhookCode ||= {}), (function(e) {
		e.ProcessingComplete = "VERIFICATION_STATUS_PROCESSING_COMPLETE", e.ProcessingFailed = "VERIFICATION_STATUS_PROCESSING_FAILED", e.PendingApproval = "VERIFICATION_STATUS_PENDING_APPROVAL";
	})(e.SandboxIncomeFireWebhookRequestVerificationStatusEnum ||= {}), (function(e) {
		e.Verification = "INCOME_VERIFICATION", e.VerificationRiskSignals = "INCOME_VERIFICATION_RISK_SIGNALS";
	})(e.SandboxIncomeWebhookFireRequestWebhookCode ||= {}), (function(e) {
		e.DefaultUpdate = "DEFAULT_UPDATE", e.NewAccountsAvailable = "NEW_ACCOUNTS_AVAILABLE", e.SmsMicrodepositsVerification = "SMS_MICRODEPOSITS_VERIFICATION", e.AuthorizationGranted = "AUTHORIZATION_GRANTED", e.UserPermissionRevoked = "USER_PERMISSION_REVOKED", e.UserAccountRevoked = "USER_ACCOUNT_REVOKED", e.PendingDisconnect = "PENDING_DISCONNECT", e.RecurringTransactionsUpdate = "RECURRING_TRANSACTIONS_UPDATE", e.LoginRepaired = "LOGIN_REPAIRED", e.SyncUpdatesAvailable = "SYNC_UPDATES_AVAILABLE", e.ProductReady = "PRODUCT_READY", e.Error = "ERROR";
	})(e.SandboxItemFireWebhookRequestWebhookCodeEnum ||= {}), (function(e) {
		e.AutomaticallyVerified = "automatically_verified", e.VerificationExpired = "verification_expired";
	})(e.SandboxItemSetVerificationStatusRequestVerificationStatusEnum ||= {}), (function(e) {
		e.Approve = "approve", e.Reject = "reject";
	})(e.SandboxTransferRfpSimulateAction ||= {}), (function(e) {
		e.Enrollment = "ENROLLMENT", e.Portal = "PORTAL";
	})(e.ScopesContext ||= {}), (function(e) {
		e.Match = "match", e.NoMatch = "no_match", e.NoInput = "no_input";
	})(e.SelfieAnalysisDocumentComparison ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.SelfieAnalysisFacialAnalysisOutcome ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.SelfieAnalysisLivenessCheck ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.SelfieCheckStatus ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.SelfieStatus ||= {}), (function(e) {
		e.Voa = "VOA", e.Voe = "VOE";
	})(e.ServiceProductFulfillmentIdentifier ||= {}), (function(e) {
		e.Approve = "APPROVE", e.Review = "REVIEW", e.Reject = "REJECT", e.TakeOtherRiskMeasures = "TAKE_OTHER_RISK_MEASURES", e.NotEvaluated = "NOT_EVALUATED";
	})(e.SignalDecisionOutcome ||= {}), (function(e) {
		e.SameDayAch = "SAME_DAY_ACH", e.NextDayAch = "NEXT_DAY_ACH", e.StandardAch = "STANDARD_ACH", e.MultiplePaymentMethods = "MULTIPLE_PAYMENT_METHODS", e.Null = "null";
	})(e.SignalPaymentMethod ||= {}), (function(e) {
		e.SameDayAch = "SAME_DAY_ACH", e.StandardAch = "STANDARD_ACH", e.MultiplePaymentMethods = "MULTIPLE_PAYMENT_METHODS";
	})(e.SignalScheduleDefaultPaymentMethod ||= {}), (function(e) {
		e.Dashboard = "dashboard", e.Link = "link", e.Api = "api", e.System = "system";
	})(e.Source ||= {}), (function(e) {
		e.Success = "SUCCESS", e.Failure = "FAILURE";
	})(e.StatementsRefreshCompleteResult ||= {}), (function(e) {
		e.Reset = "reset", e.Incomplete = "incomplete", e.Infer = "infer", e.Custom = "custom";
	})(e.Strategy ||= {}), (function(e) {
		e.Cancelled = "cancelled", e.ChargedOff = "charged off", e.Claim = "claim", e.Consolidated = "consolidated", e.Deferment = "deferment", e.Delinquent = "delinquent", e.Discharged = "discharged", e.Extension = "extension", e.Forbearance = "forbearance", e.InGrace = "in grace", e.InMilitary = "in military", e.InSchool = "in school", e.NotFullyDisbursed = "not fully disbursed", e.Other = "other", e.PaidInFull = "paid in full", e.Refunded = "refunded", e.Repayment = "repayment", e.Transferred = "transferred", e.PendingIdr = "pending idr";
	})(e.StudentLoanStatusTypeEnum ||= {}), (function(e) {
		e.ExtendedGraduated = "extended graduated", e.ExtendedStandard = "extended standard", e.Graduated = "graduated", e.IncomeContingentRepayment = "income-contingent repayment", e.IncomeBasedRepayment = "income-based repayment", e.IncomeSensitiveRepayment = "income-sensitive repayment", e.InterestOnly = "interest-only", e.Other = "other", e.PayAsYouEarn = "pay as you earn", e.RevisedPayAsYouEarn = "revised pay as you earn", e.Standard = "standard", e.SavingOnAValuableEducation = "saving on a valuable education", e.Null = "null";
	})(e.StudentRepaymentPlanTypeEnum ||= {}), (function(e) {
		e.Pending = "pending", e.Posted = "posted", e.Settled = "settled", e.FundsAvailable = "funds_available", e.Returned = "returned", e.Failed = "failed", e.Null = "null";
	})(e.SweepStatus ||= {}), (function(e) {
		e.Manual = "manual", e.Incoming = "incoming", e.BalanceThreshold = "balance_threshold", e.AutomaticAggregate = "automatic_aggregate";
	})(e.SweepTrigger ||= {}), (function(e) {
		e.IndividualTaxpayerIdentificationNumber = "IndividualTaxpayerIdentificationNumber", e.SocialSecurityNumber = "SocialSecurityNumber";
	})(e.TaxpayerIdentifierType ||= {}), (function(e) {
		e.Bonus = "BONUS", e.Commission = "COMMISSION", e.Overtime = "OVERTIME", e.PaidTimeOff = "PAID TIME OFF", e.RegularPay = "REGULAR PAY", e.Vacation = "VACATION", e.EmployeeMedicare = "EMPLOYEE MEDICARE", e.Fica = "FICA", e.SocialSecurityEmployeeTax = "SOCIAL SECURITY EMPLOYEE TAX", e.Medical = "MEDICAL", e.Vision = "VISION", e.Dental = "DENTAL", e.NetPay = "NET PAY", e.Taxes = "TAXES", e.NotFound = "NOT_FOUND", e.Other = "OTHER", e.Null = "null";
	})(e.TotalCanonicalDescription ||= {}), (function(e) {
		e.Digital = "digital", e.Place = "place", e.Special = "special", e.Unresolved = "unresolved";
	})(e.TransactionTransactionTypeEnum ||= {}), (function(e) {
		e.Online = "online", e.InStore = "in store", e.Other = "other";
	})(e.TransactionPaymentChannelEnum ||= {}), (function(e) {
		e.Online = "online", e.InStore = "in store", e.Other = "other";
	})(e.TransactionAllOfPaymentChannelEnum ||= {}), (function(e) {
		e.Digital = "digital", e.Place = "place", e.Special = "special", e.Unresolved = "unresolved";
	})(e.TransactionBaseTransactionTypeEnum ||= {}), (function(e) {
		e.Adjustment = "adjustment", e.Atm = "atm", e.BankCharge = "bank charge", e.BillPayment = "bill payment", e.Cash = "cash", e.Cashback = "cashback", e.Cheque = "cheque", e.DirectDebit = "direct debit", e.Interest = "interest", e.Purchase = "purchase", e.StandingOrder = "standing order", e.Transfer = "transfer", e.Null = "null";
	})(e.TransactionCode ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Mature = "MATURE", e.EarlyDetection = "EARLY_DETECTION", e.Tombstoned = "TOMBSTONED";
	})(e.TransactionStreamStatus ||= {}), (function(e) {
		e.TransactionId = "TRANSACTION_ID", e.MerchantName = "MERCHANT_NAME";
	})(e.TransactionsRuleField ||= {}), (function(e) {
		e.ExactMatch = "EXACT_MATCH", e.SubstringMatch = "SUBSTRING_MATCH";
	})(e.TransactionsRuleType ||= {}), (function(e) {
		e.TransactionsUpdateStatusUnknown = "TRANSACTIONS_UPDATE_STATUS_UNKNOWN", e.NotReady = "NOT_READY", e.InitialUpdateComplete = "INITIAL_UPDATE_COMPLETE", e.HistoricalUpdateComplete = "HISTORICAL_UPDATE_COMPLETE";
	})(e.TransactionsUpdateStatus ||= {}), (function(e) {
		e.Ach = "ach", e.SameDayAch = "same-day-ach";
	})(e.TransferACHNetwork ||= {}), (function(e) {
		e.Approved = "approved", e.Declined = "declined", e.UserActionRequired = "user_action_required";
	})(e.TransferAuthorizationDecision ||= {}), (function(e) {
		e.Nsf = "NSF", e.Risk = "RISK", e.TransferLimitReached = "TRANSFER_LIMIT_REACHED", e.ManuallyVerifiedItem = "MANUALLY_VERIFIED_ITEM", e.ItemLoginRequired = "ITEM_LOGIN_REQUIRED", e.PaymentProfileLoginRequired = "PAYMENT_PROFILE_LOGIN_REQUIRED", e.Error = "ERROR", e.MigratedAccountItem = "MIGRATED_ACCOUNT_ITEM", e.Null = "null";
	})(e.TransferAuthorizationDecisionRationaleCode ||= {}), (function(e) {
		e.Guaranteed = "GUARANTEED", e.NotGuaranteed = "NOT_GUARANTEED", e.Null = "null";
	})(e.TransferAuthorizationGuaranteeDecision ||= {}), (function(e) {
		e.ReturnBank = "RETURN_BANK", e.ReturnCustomer = "RETURN_CUSTOMER", e.GuaranteeLimitReached = "GUARANTEE_LIMIT_REACHED", e.RiskEstimateUnavailable = "RISK_ESTIMATE_UNAVAILABLE", e.RequiredParamMissing = "REQUIRED_PARAM_MISSING";
	})(e.TransferAuthorizationGuaranteeDecisionRationaleCode ||= {}), (function(e) {
		e.HighRisk = "HIGH_RISK", e.MediumHighRisk = "MEDIUM_HIGH_RISK", e.MediumRisk = "MEDIUM_RISK", e.MediumLowRisk = "MEDIUM_LOW_RISK", e.LowRisk = "LOW_RISK";
	})(e.TransferAuthorizationRiskLevel ||= {}), (function(e) {
		e.RtpCredits = "prefunded_rtp_credits", e.AchCredits = "prefunded_ach_credits";
	})(e.TransferBalanceType ||= {}), (function(e) {
		e.Sweep = "sweep", e.PrefundedRtpCredits = "prefunded_rtp_credits", e.PrefundedAchCredits = "prefunded_ach_credits", e.Null = "null";
	})(e.TransferCreditFundsSource ||= {}), (function(e) {
		e.NotSubmitted = "not_submitted", e.Submitted = "submitted", e.UnderReview = "under_review", e.Approved = "approved", e.Denied = "denied", e.MoreInformationRequired = "more_information_required";
	})(e.TransferDiligenceStatus ||= {}), (function(e) {
		e.DueDiligence = "DUE_DILIGENCE";
	})(e.TransferDocumentPurpose ||= {}), (function(e) {
		e.Debit = "debit", e.Credit = "credit", e.Null = "null";
	})(e.TransferEventListTransferType ||= {}), (function(e) {
		e.Pending = "pending", e.Cancelled = "cancelled", e.Failed = "failed", e.Posted = "posted", e.Settled = "settled", e.FundsAvailable = "funds_available", e.Returned = "returned", e.Swept = "swept", e.SweptSettled = "swept_settled", e.ReturnSwept = "return_swept", e.SweepPending = "sweep.pending", e.SweepPosted = "sweep.posted", e.SweepSettled = "sweep.settled", e.SweepReturned = "sweep.returned", e.SweepFailed = "sweep.failed", e.SweepFundsAvailable = "sweep.funds_available", e.RefundPending = "refund.pending", e.RefundCancelled = "refund.cancelled", e.RefundFailed = "refund.failed", e.RefundPosted = "refund.posted", e.RefundSettled = "refund.settled", e.RefundReturned = "refund.returned", e.RefundSwept = "refund.swept", e.RefundReturnSwept = "refund.return_swept";
	})(e.TransferEventType ||= {}), (function(e) {
		e.Approved = "APPROVED", e.Declined = "DECLINED";
	})(e.TransferIntentAuthorizationDecision ||= {}), (function(e) {
		e.Payment = "PAYMENT", e.Disbursement = "DISBURSEMENT";
	})(e.TransferIntentCreateMode ||= {}), (function(e) {
		e.Ach = "ach", e.SameDayAch = "same-day-ach", e.Rtp = "rtp";
	})(e.TransferIntentCreateNetwork ||= {}), (function(e) {
		e.Pending = "PENDING", e.Succeeded = "SUCCEEDED", e.Failed = "FAILED";
	})(e.TransferIntentStatus ||= {}), (function(e) {
		e.Posted = "sweep.posted", e.Settled = "sweep.settled", e.Returned = "sweep.returned", e.Failed = "sweep.failed";
	})(e.TransferLedgerSweepSimulateEventType ||= {}), (function(e) {
		e.Ach = "ach", e.SameDayAch = "same-day-ach", e.Rtp = "rtp", e.Wire = "wire";
	})(e.TransferNetwork ||= {}), (function(e) {
		e.Ach = "ach", e.SameDayAch = "same-day-ach", e.Rtp = "rtp";
	})(e.TransferRecurringNetwork ||= {}), (function(e) {
		e.Active = "active", e.Cancelled = "cancelled", e.Expired = "expired";
	})(e.TransferRecurringStatus ||= {}), (function(e) {
		e.Pending = "pending", e.Posted = "posted", e.Cancelled = "cancelled", e.Failed = "failed", e.Settled = "settled", e.Returned = "returned";
	})(e.TransferRefundStatus ||= {}), (function(e) {
		e.Week = "week", e.Month = "month";
	})(e.TransferScheduleIntervalUnit ||= {}), (function(e) {
		e.Pending = "pending", e.Posted = "posted", e.Settled = "settled", e.FundsAvailable = "funds_available", e.Cancelled = "cancelled", e.Failed = "failed", e.Returned = "returned";
	})(e.TransferStatus ||= {}), (function(e) {
		e.Null = "null", e.Unswept = "unswept", e.Swept = "swept", e.SweptSettled = "swept_settled", e.ReturnSwept = "return_swept";
	})(e.TransferSweepStatus ||= {}), (function(e) {
		e.Debit = "debit", e.Credit = "credit";
	})(e.TransferType ||= {}), (function(e) {
		e.CraBaseReport = "cra_base_report", e.CraIncomeInsights = "cra_income_insights", e.CraPartnerInsights = "cra_partner_insights", e.CraNetworkInsights = "cra_network_insights", e.CraCashflowInsights = "cra_cashflow_insights", e.CraMonitoring = "cra_monitoring", e.CraLendScore = "cra_lend_score", e.CraPlaidCreditScore = "cra_plaid_credit_score", e.Investments = "investments", e.Liabilities = "liabilities", e.ProtectLinkedBank = "protect_linked_bank", e.Transactions = "transactions";
	})(e.UserBasedProducts ||= {}), (function(e) {
		e.Other = "OTHER", e.Salary = "SALARY", e.Unemployment = "UNEMPLOYMENT", e.Cash = "CASH", e.GigEconomy = "GIG_ECONOMY", e.Rental = "RENTAL", e.ChildSupport = "CHILD_SUPPORT", e.Military = "MILITARY", e.Retirement = "RETIREMENT", e.LongTermDisability = "LONG_TERM_DISABILITY", e.BankInterest = "BANK_INTEREST";
	})(e.UserStatedIncomeSourceCategory ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Weekly = "WEEKLY", e.Biweekly = "BIWEEKLY", e.SemiMonthly = "SEMI_MONTHLY", e.Monthly = "MONTHLY";
	})(e.UserStatedIncomeSourceFrequency ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Gross = "GROSS", e.Net = "NET";
	})(e.UserStatedIncomeSourcePayType ||= {}), (function(e) {
		e.StatusUserPresenceRequired = "VERIFICATION_REFRESH_STATUS_USER_PRESENCE_REQUIRED", e.Successful = "VERIFICATION_REFRESH_SUCCESSFUL", e.NotFound = "VERIFICATION_REFRESH_NOT_FOUND";
	})(e.VerificationRefreshStatus ||= {}), (function(e) {
		e.Verified = "VERIFIED", e.Unverified = "UNVERIFIED", e.NeedsInfo = "NEEDS_INFO", e.UnableToVerify = "UNABLE_TO_VERIFY", e.Unknown = "UNKNOWN";
	})(e.VerificationStatus ||= {}), (function(e) {
		e.Success = "success", e.Failed = "failed";
	})(e.VerifySMSDetailsStatus ||= {}), (function(e) {
		e.Gbp = "GBP", e.Eur = "EUR";
	})(e.WalletISOCurrencyCode ||= {}), (function(e) {
		e.Null = "null", e.FasterPayments = "FASTER_PAYMENTS", e.SepaCreditTransfer = "SEPA_CREDIT_TRANSFER", e.SepaCreditTransferInstant = "SEPA_CREDIT_TRANSFER_INSTANT";
	})(e.WalletPaymentScheme ||= {}), (function(e) {
		e.Unknown = "UNKNOWN", e.Active = "ACTIVE", e.Closed = "CLOSED";
	})(e.WalletStatus ||= {}), (function(e) {
		e.BankTransfer = "BANK_TRANSFER", e.Payout = "PAYOUT", e.PisPayIn = "PIS_PAY_IN", e.Refund = "REFUND", e.FundsSweep = "FUNDS_SWEEP", e.Return = "RETURN", e.Recall = "RECALL";
	})(e.WalletTransactionTypeEnum ||= {}), (function(e) {
		e.ExternalSystem = "EXTERNAL_SYSTEM", e.Expired = "EXPIRED", e.Cancelled = "CANCELLED", e.Invalid = "INVALID", e.Unknown = "UNKNOWN";
	})(e.WalletTransactionFailureReason ||= {}), (function(e) {
		e.BankTransfer = "BANK_TRANSFER", e.Payout = "PAYOUT", e.PisPayIn = "PIS_PAY_IN", e.Refund = "REFUND", e.FundsSweep = "FUNDS_SWEEP", e.Return = "RETURN", e.Recall = "RECALL";
	})(e.WalletTransactionGetResponseTypeEnum ||= {}), (function(e) {
		e.FullMatch = "FULL_MATCH", e.PartialMatch = "PARTIAL_MATCH", e.NoMatch = "NO_MATCH", e.Error = "ERROR", e.CheckNotPossible = "CHECK_NOT_POSSIBLE";
	})(e.WalletTransactionPayeeVerificationStatus ||= {}), (function(e) {
		e.Payout = "PAYOUT", e.Return = "RETURN", e.Refund = "REFUND", e.FundsSweep = "FUNDS_SWEEP";
	})(e.WalletTransactionRelationTypeEnum ||= {}), (function(e) {
		e.Authorising = "AUTHORISING", e.Initiated = "INITIATED", e.Executed = "EXECUTED", e.Settled = "SETTLED", e.Blocked = "BLOCKED", e.Failed = "FAILED";
	})(e.WalletTransactionStatus ||= {}), (function(e) {
		e.OwnersUnavailable = "OWNERS_UNAVAILABLE", e.InvestmentsUnavailable = "INVESTMENTS_UNAVAILABLE", e.TransactionsUnavailable = "TRANSACTIONS_UNAVAILABLE";
	})(e.WarningWarningCodeEnum ||= {}), (function(e) {
		e.BirthCertificate = "birth_certificate", e.DriversLicense = "drivers_license", e.ImmigrationNumber = "immigration_number", e.MilitaryId = "military_id", e.Other = "other", e.Passport = "passport", e.PersonalIdentification = "personal_identification", e.RationCard = "ration_card", e.Ssn = "ssn", e.StudentId = "student_id", e.TaxId = "tax_id", e.TravelDocument = "travel_document", e.VoterId = "voter_id";
	})(e.WatchlistScreeningDocumentType ||= {}), (function(e) {
		e.Assignee = "assignee";
	})(e.WatchlistScreeningEntityUpdateRequestResettableField ||= {}), (function(e) {
		e.Confirmed = "confirmed", e.PendingReview = "pending_review", e.Dismissed = "dismissed";
	})(e.WatchlistScreeningHitStatus ||= {}), (function(e) {
		e.Assignee = "assignee";
	})(e.WatchlistScreeningIndividualUpdateRequestResettableField ||= {}), (function(e) {
		e.Rejected = "rejected", e.PendingReview = "pending_review", e.Cleared = "cleared";
	})(e.WatchlistScreeningStatus ||= {}), (function(e) {
		e.None = "none", e.Source = "source", e.Plaid = "plaid";
	})(e.WeakAliasDetermination ||= {}), (function(e) {
		e.Sandbox = "sandbox", e.Production = "production";
	})(e.WebhookEnvironmentValues ||= {}), (function(e) {
		e.Auth = "AUTH", e.Holdings = "HOLDINGS", e.InvestmentsTransactions = "INVESTMENTS_TRANSACTIONS", e.Item = "ITEM", e.Liabilities = "LIABILITIES", e.Transactions = "TRANSACTIONS", e.Assets = "ASSETS";
	})(e.WebhookType ||= {}), (function(e) {
		e.Coupon = "coupon", e.CouponEquivalent = "coupon_equivalent", e.Discount = "discount", e.Yield = "yield", e.Null = "null";
	})(e.YieldRateType ||= {}), e.PlaidApiAxiosParamCreator = function(e) {
		return {
			accountsBalanceGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("accountsBalanceGet", "accountsBalanceGetRequest", n);
				let t = new URL("/accounts/balance/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			accountsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("accountsGet", "accountsGetRequest", n);
				let t = new URL("/accounts/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			applicationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("applicationGet", "applicationGetRequest", n);
				let t = new URL("/application/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportAuditCopyCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportAuditCopyCreate", "assetReportAuditCopyCreateRequest", n);
				let t = new URL("/asset_report/audit_copy/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportAuditCopyGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportAuditCopyGet", "assetReportAuditCopyGetRequest", n);
				let t = new URL("/asset_report/audit_copy/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportAuditCopyPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportAuditCopyPdfGet", "assetReportAuditCopyPdfGetRequest", n);
				let t = new URL("/asset_report/audit_copy/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportAuditCopyRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportAuditCopyRemove", "assetReportAuditCopyRemoveRequest", n);
				let t = new URL("/asset_report/audit_copy/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportCreate", "assetReportCreateRequest", n);
				let t = new URL("/asset_report/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportFilter: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportFilter", "assetReportFilterRequest", n);
				let t = new URL("/asset_report/filter", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportGet", "assetReportGetRequest", n);
				let t = new URL("/asset_report/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportPdfGet", "assetReportPDFGetRequest", n);
				let t = new URL("/asset_report/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportRefresh", "assetReportRefreshRequest", n);
				let t = new URL("/asset_report/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			assetReportRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("assetReportRemove", "assetReportRemoveRequest", n);
				let t = new URL("/asset_report/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			authGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("authGet", "authGetRequest", n);
				let t = new URL("/auth/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			authVerify: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("authVerify", "authVerifyRequest", n);
				let t = new URL("/auth/verify", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferBalanceGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferBalanceGet", "bankTransferBalanceGetRequest", n);
				let t = new URL("/bank_transfer/balance/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferCancel: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferCancel", "bankTransferCancelRequest", n);
				let t = new URL("/bank_transfer/cancel", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferCreate", "bankTransferCreateRequest", n);
				let t = new URL("/bank_transfer/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferEventList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferEventList", "bankTransferEventListRequest", n);
				let t = new URL("/bank_transfer/event/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferEventSync: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferEventSync", "bankTransferEventSyncRequest", n);
				let t = new URL("/bank_transfer/event/sync", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferGet", "bankTransferGetRequest", n);
				let t = new URL("/bank_transfer/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferList", "bankTransferListRequest", n);
				let t = new URL("/bank_transfer/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferMigrateAccount: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferMigrateAccount", "bankTransferMigrateAccountRequest", n);
				let t = new URL("/bank_transfer/migrate_account", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferSweepGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferSweepGet", "bankTransferSweepGetRequest", n);
				let t = new URL("/bank_transfer/sweep/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			bankTransferSweepList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("bankTransferSweepList", "bankTransferSweepListRequest", n);
				let t = new URL("/bank_transfer/sweep/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconAccountRiskEvaluate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconAccountRiskEvaluate", "beaconAccountRiskEvaluateRequest", n);
				let t = new URL("/beacon/account_risk/v1/evaluate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconDuplicateGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconDuplicateGet", "beaconDuplicateGetRequest", n);
				let t = new URL("/beacon/duplicate/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconReportCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconReportCreate", "beaconReportCreateRequest", n);
				let t = new URL("/beacon/report/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconReportGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconReportGet", "beaconReportGetRequest", n);
				let t = new URL("/beacon/report/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconReportList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconReportList", "beaconReportListRequest", n);
				let t = new URL("/beacon/report/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconReportSyndicationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconReportSyndicationGet", "beaconReportSyndicationGetRequest", n);
				let t = new URL("/beacon/report_syndication/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconReportSyndicationList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconReportSyndicationList", "beaconReportSyndicationListRequest", n);
				let t = new URL("/beacon/report_syndication/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserAccountInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserAccountInsightsGet", "beaconUserAccountInsightsGetRequest", n);
				let t = new URL("/beacon/user/account_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserCreate", "beaconUserCreateRequest", n);
				let t = new URL("/beacon/user/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserGet", "beaconUserGetRequest", n);
				let t = new URL("/beacon/user/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserHistoryList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserHistoryList", "beaconUserHistoryListRequest", n);
				let t = new URL("/beacon/user/history/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserReview: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserReview", "beaconUserReviewRequest", n);
				let t = new URL("/beacon/user/review", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			beaconUserUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("beaconUserUpdate", "beaconUserUpdateRequest", n);
				let t = new URL("/beacon/user/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			betaEwaReportV1Get: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("betaEwaReportV1Get", "betaEwaReportV1GetRequest", n);
				let t = new URL("/beta/ewa_report/v1/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			betaPartnerCustomerV1Create: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("betaPartnerCustomerV1Create", "betaPartnerCustomerV1CreateRequest", n);
				let t = new URL("/beta/partner/customer/v1/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			betaPartnerCustomerV1Enable: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("betaPartnerCustomerV1Enable", "requestBody", n);
				let t = new URL("/beta/partner/customer/v1/enable", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			betaPartnerCustomerV1Get: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("betaPartnerCustomerV1Get", "betaPartnerCustomerV1GetRequest", n);
				let t = new URL("/beta/partner/customer/v1/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			betaPartnerCustomerV1Update: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("betaPartnerCustomerV1Update", "requestBody", n);
				let t = new URL("/beta/partner/customer/v1/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			businessVerificationCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("businessVerificationCreate", "businessVerificationCreateRequest", n);
				let t = new URL("/business_verification/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			businessVerificationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("businessVerificationGet", "businessVerificationGetRequest", n);
				let t = new URL("/business_verification/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			cashflowReportGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("cashflowReportGet", "cashflowReportGetRequest", n);
				let t = new URL("/cashflow_report/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			cashflowReportInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("cashflowReportInsightsGet", "cashflowReportInsightsGetRequest", n);
				let t = new URL("/cashflow_report/insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			cashflowReportRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("cashflowReportRefresh", "cashflowReportRefreshRequest", n);
				let t = new URL("/cashflow_report/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			cashflowReportTransactionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("cashflowReportTransactionsGet", "cashflowReportTransactionsGetRequest", n);
				let t = new URL("/cashflow_report/transactions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			categoriesGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("categoriesGet", "body", n);
				let t = new URL("/categories/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			consentEventsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("consentEventsGet", "consentEventsGetRequest", n);
				let t = new URL("/consent/events/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			consumerReportPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("consumerReportPdfGet", "consumerReportPDFGetRequest", n);
				let t = new URL("/consumer_report/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportBaseReportGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportBaseReportGet", "craCheckReportBaseReportGetRequest", n);
				let t = new URL("/cra/check_report/base_report/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportCashflowInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportCashflowInsightsGet", "craCheckReportCashflowInsightsGetRequest", n);
				let t = new URL("/cra/check_report/cashflow_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportCreate", "craCheckReportCreateRequest", n);
				let t = new URL("/cra/check_report/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportIncomeInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportIncomeInsightsGet", "craCheckReportIncomeInsightsGetRequest", n);
				let t = new URL("/cra/check_report/income_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportLendScoreGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportLendScoreGet", "craCheckReportLendScoreGetRequest", n);
				let t = new URL("/cra/check_report/lend_score/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportNetworkInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportNetworkInsightsGet", "craCheckReportNetworkInsightsGetRequest", n);
				let t = new URL("/cra/check_report/network_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportPartnerInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportPartnerInsightsGet", "craCheckReportPartnerInsightsGetRequest", n);
				let t = new URL("/cra/check_report/partner_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportPdfGet", "craCheckReportPDFGetRequest", n);
				let t = new URL("/cra/check_report/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportVerificationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportVerificationGet", "craCheckReportVerificationGetRequest", n);
				let t = new URL("/cra/check_report/verification/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craCheckReportVerificationPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craCheckReportVerificationPdfGet", "craCheckReportVerificationPdfGetRequest", n);
				let t = new URL("/cra/check_report/verification/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craLoansApplicationsRegister: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craLoansApplicationsRegister", "craLoansApplicationsRegisterRequest", n);
				let t = new URL("/cra/loans/applications/register", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craLoansRegister: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craLoansRegister", "cRALoansRegisterRequest", n);
				let t = new URL("/cra/loans/register", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craLoansUnregister: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craLoansUnregister", "craLoansUnregisterRequest", n);
				let t = new URL("/cra/loans/unregister", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craLoansUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craLoansUpdate", "craLoansUpdateRequest", n);
				let t = new URL("/cra/loans/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craMonitoringInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craMonitoringInsightsGet", "craMonitoringInsightsGetRequest", n);
				let t = new URL("/cra/monitoring_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craMonitoringInsightsSubscribe: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craMonitoringInsightsSubscribe", "craMonitoringInsightsSubscribeRequest", n);
				let t = new URL("/cra/monitoring_insights/subscribe", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craMonitoringInsightsUnsubscribe: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craMonitoringInsightsUnsubscribe", "craMonitoringInsightsUnsubscribeRequest", n);
				let t = new URL("/cra/monitoring_insights/unsubscribe", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			craPartnerInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("craPartnerInsightsGet", "craPartnerInsightsGetRequest", n);
				let t = new URL("/cra/partner_insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			createPaymentToken: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("createPaymentToken", "paymentInitiationPaymentTokenCreateRequest", n);
				let t = new URL("/payment_initiation/payment/token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditAssetReportFreddieMacGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditAssetReportFreddieMacGet", "requestBody", n);
				let t = new URL("/credit/asset_report/freddie_mac/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditAuditCopyTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditAuditCopyTokenCreate", "creditAuditCopyTokenCreateRequest", n);
				let t = new URL("/credit/audit_copy_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditAuditCopyTokenUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditAuditCopyTokenUpdate", "creditAuditCopyTokenUpdateRequest", n);
				let t = new URL("/credit/audit_copy_token/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankEmploymentGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankEmploymentGet", "creditBankEmploymentGetRequest", n);
				let t = new URL("/beta/credit/v1/bank_employment/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankIncomeGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankIncomeGet", "creditBankIncomeGetRequest", n);
				let t = new URL("/credit/bank_income/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankIncomePdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankIncomePdfGet", "creditBankIncomePDFGetRequest", n);
				let t = new URL("/credit/bank_income/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankIncomeRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankIncomeRefresh", "creditBankIncomeRefreshRequest", n);
				let t = new URL("/credit/bank_income/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankIncomeWebhookUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankIncomeWebhookUpdate", "creditBankIncomeWebhookUpdateRequest", n);
				let t = new URL("/credit/bank_income/webhook/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditBankStatementsUploadsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditBankStatementsUploadsGet", "creditBankStatementsUploadsGetRequest", n);
				let t = new URL("/credit/bank_statements/uploads/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditEmploymentGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditEmploymentGet", "creditEmploymentGetRequest", n);
				let t = new URL("/credit/employment/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditFreddieMacReportsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditFreddieMacReportsGet", "creditFreddieMacReportsGetRequest", n);
				let t = new URL("/credit/freddie_mac/reports/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditPayrollIncomeGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditPayrollIncomeGet", "creditPayrollIncomeGetRequest", n);
				let t = new URL("/credit/payroll_income/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditPayrollIncomeParsingConfigUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditPayrollIncomeParsingConfigUpdate", "requestBody", n);
				let t = new URL("/credit/payroll_income/parsing_config/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditPayrollIncomePrecheck: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditPayrollIncomePrecheck", "creditPayrollIncomePrecheckRequest", n);
				let t = new URL("/credit/payroll_income/precheck", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditPayrollIncomeRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditPayrollIncomeRefresh", "creditPayrollIncomeRefreshRequest", n);
				let t = new URL("/credit/payroll_income/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditPayrollIncomeRiskSignalsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditPayrollIncomeRiskSignalsGet", "creditPayrollIncomeRiskSignalsGetRequest", n);
				let t = new URL("/credit/payroll_income/risk_signals/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditRelayCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditRelayCreate", "creditRelayCreateRequest", n);
				let t = new URL("/credit/relay/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditRelayGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditRelayGet", "creditRelayGetRequest", n);
				let t = new URL("/credit/relay/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditRelayPdfGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditRelayPdfGet", "creditRelayPDFGetRequest", n);
				let t = new URL("/credit/relay/pdf/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditRelayRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditRelayRefresh", "creditRelayRefreshRequest", n);
				let t = new URL("/credit/relay/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditRelayRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditRelayRemove", "creditRelayRemoveRequest", n);
				let t = new URL("/credit/relay/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditReportAuditCopyRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditReportAuditCopyRemove", "creditAuditCopyTokenRemoveRequest", n);
				let t = new URL("/credit/audit_copy_token/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			creditSessionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("creditSessionsGet", "creditSessionsGetRequest", n);
				let t = new URL("/credit/sessions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			dashboardUserGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("dashboardUserGet", "dashboardUserGetRequest", n);
				let t = new URL("/dashboard_user/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			dashboardUserList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("dashboardUserList", "dashboardUserListRequest", n);
				let t = new URL("/dashboard_user/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			employersSearch: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("employersSearch", "employersSearchRequest", n);
				let t = new URL("/employers/search", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			employmentVerificationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("employmentVerificationGet", "employmentVerificationGetRequest", n);
				let t = new URL("/employment/verification/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			fdxNotifications: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("fdxNotifications", "fDXNotification", n);
				let t = new URL("/fdx/notifications", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			getRecipient: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("getRecipient", "recipientId", n);
				let t = "/fdx/recipient/{recipientId}".replace("{recipientId}", encodeURIComponent(String(n))), o = new URL(t, i.DUMMY_BASE_URL), s;
				e && (s = e.baseOptions);
				let c = Object.assign(Object.assign({ method: "GET" }, s), a), l = {};
				yield i.setApiKeyToObject(l, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(l, "Plaid-Version", e), yield i.setApiKeyToObject(l, "PLAID-SECRET", e), r != null && (l["OAUTH-STATE-ID"] = String(r)), i.setSearchParams(o, {}, a.query);
				let u = s && s.headers ? s.headers : {};
				return c.headers = Object.assign(Object.assign(Object.assign({}, l), u), a.headers), {
					url: i.toPathString(o),
					options: c
				};
			}),
			getRecipients: (n = {}) => t(this, void 0, void 0, function* () {
				let t = new URL("/fdx/recipients", i.DUMMY_BASE_URL), r;
				e && (r = e.baseOptions);
				let a = Object.assign(Object.assign({ method: "GET" }, r), n), o = {};
				yield i.setApiKeyToObject(o, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(o, "Plaid-Version", e), yield i.setApiKeyToObject(o, "PLAID-SECRET", e), i.setSearchParams(t, {}, n.query);
				let s = r && r.headers ? r.headers : {};
				return a.headers = Object.assign(Object.assign(Object.assign({}, o), s), n.headers), {
					url: i.toPathString(t),
					options: a
				};
			}),
			identityDocumentsUploadsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityDocumentsUploadsGet", "identityDocumentsUploadsGetRequest", n);
				let t = new URL("/identity/documents/uploads/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityGet", "identityGetRequest", n);
				let t = new URL("/identity/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityMatch: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityMatch", "identityMatchRequest", n);
				let t = new URL("/identity/match", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityRefresh", "identityRefreshRequest", n);
				let t = new URL("/identity/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityVerificationAutofillCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityVerificationAutofillCreate", "identityVerificationAutofillCreateRequest", n);
				let t = new URL("/identity_verification/autofill/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityVerificationCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityVerificationCreate", "identityVerificationCreateRequest", n);
				let t = new URL("/identity_verification/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityVerificationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityVerificationGet", "identityVerificationGetRequest", n);
				let t = new URL("/identity_verification/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityVerificationList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityVerificationList", "identityVerificationListRequest", n);
				let t = new URL("/identity_verification/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			identityVerificationRetry: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("identityVerificationRetry", "identityVerificationRetryRequest", n);
				let t = new URL("/identity_verification/retry", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			incomeVerificationCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("incomeVerificationCreate", "incomeVerificationCreateRequest", n);
				let t = new URL("/income/verification/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			incomeVerificationDocumentsDownload: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("incomeVerificationDocumentsDownload", "incomeVerificationDocumentsDownloadRequest", n);
				let t = new URL("/income/verification/documents/download", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			incomeVerificationPaystubsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("incomeVerificationPaystubsGet", "incomeVerificationPaystubsGetRequest", n);
				let t = new URL("/income/verification/paystubs/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			incomeVerificationPrecheck: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("incomeVerificationPrecheck", "incomeVerificationPrecheckRequest", n);
				let t = new URL("/income/verification/precheck", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			incomeVerificationTaxformsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("incomeVerificationTaxformsGet", "incomeVerificationTaxformsGetRequest", n);
				let t = new URL("/income/verification/taxforms/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			institutionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("institutionsGet", "institutionsGetRequest", n);
				let t = new URL("/institutions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			institutionsGetById: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("institutionsGetById", "institutionsGetByIdRequest", n);
				let t = new URL("/institutions/get_by_id", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			institutionsSearch: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("institutionsSearch", "institutionsSearchRequest", n);
				let t = new URL("/institutions/search", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			investmentsAuthGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("investmentsAuthGet", "investmentsAuthGetRequest", n);
				let t = new URL("/investments/auth/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			investmentsHoldingsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("investmentsHoldingsGet", "investmentsHoldingsGetRequest", n);
				let t = new URL("/investments/holdings/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			investmentsRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("investmentsRefresh", "investmentsRefreshRequest", n);
				let t = new URL("/investments/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			investmentsTransactionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("investmentsTransactionsGet", "investmentsTransactionsGetRequest", n);
				let t = new URL("/investments/transactions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			issuesGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("issuesGet", "issuesGetRequest", n);
				let t = new URL("/issues/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			issuesSearch: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("issuesSearch", "issuesSearchRequest", n);
				let t = new URL("/issues/search", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			issuesSubscribe: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("issuesSubscribe", "issuesSubscribeRequest", n);
				let t = new URL("/issues/subscribe", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemAccessTokenInvalidate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemAccessTokenInvalidate", "itemAccessTokenInvalidateRequest", n);
				let t = new URL("/item/access_token/invalidate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemActivityList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemActivityList", "itemActivityListRequest", n);
				let t = new URL("/item/activity/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemApplicationList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemApplicationList", "itemApplicationListRequest", n);
				let t = new URL("/item/application/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemApplicationScopesUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemApplicationScopesUpdate", "itemApplicationScopesUpdateRequest", n);
				let t = new URL("/item/application/scopes/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemApplicationUnlink: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemApplicationUnlink", "itemApplicationUnlinkRequest", n);
				let t = new URL("/item/application/unlink", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemCreatePublicToken: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemCreatePublicToken", "itemPublicTokenCreateRequest", n);
				let t = new URL("/item/public_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemGet", "itemGetRequest", n);
				let t = new URL("/item/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemImport: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemImport", "itemImportRequest", n);
				let t = new URL("/item/import", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemPublicTokenExchange: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemPublicTokenExchange", "itemPublicTokenExchangeRequest", n);
				let t = new URL("/item/public_token/exchange", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemRemove", "itemRemoveRequest", n);
				let t = new URL("/item/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			itemWebhookUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("itemWebhookUpdate", "itemWebhookUpdateRequest", n);
				let t = new URL("/item/webhook/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			liabilitiesGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("liabilitiesGet", "liabilitiesGetRequest", n);
				let t = new URL("/liabilities/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			linkDeliveryCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("linkDeliveryCreate", "linkDeliveryCreateRequest", n);
				let t = new URL("/link_delivery/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			linkDeliveryGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("linkDeliveryGet", "linkDeliveryGetRequest", n);
				let t = new URL("/link_delivery/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			linkOauthCorrelationIdExchange: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("linkOauthCorrelationIdExchange", "linkOAuthCorrelationIdExchangeRequest", n);
				let t = new URL("/link/oauth/correlation_id/exchange", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			linkTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("linkTokenCreate", "linkTokenCreateRequest", n);
				let t = new URL("/link/token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			linkTokenGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("linkTokenGet", "linkTokenGetRequest", n);
				let t = new URL("/link/token/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			networkInsightsReportGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("networkInsightsReportGet", "networkInsightsReportGetRequest", n);
				let t = new URL("/network_insights/report/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			networkStatusGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("networkStatusGet", "networkStatusGetRequest", n);
				let t = new URL("/network/status/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			oauthIntrospect: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("oauthIntrospect", "oAuthIntrospectRequest", n);
				let t = new URL("/oauth/introspect", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			oauthRevoke: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("oauthRevoke", "oAuthRevokeRequest", n);
				let t = new URL("/oauth/revoke", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			oauthToken: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("oauthToken", "oAuthTokenRequest", n);
				let t = new URL("/oauth/token", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			partnerCustomerCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("partnerCustomerCreate", "partnerCustomerCreateRequest", n);
				let t = new URL("/partner/customer/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			partnerCustomerEnable: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("partnerCustomerEnable", "partnerCustomerEnableRequest", n);
				let t = new URL("/partner/customer/enable", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			partnerCustomerGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("partnerCustomerGet", "partnerCustomerGetRequest", n);
				let t = new URL("/partner/customer/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			partnerCustomerOauthInstitutionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("partnerCustomerOauthInstitutionsGet", "partnerCustomerOAuthInstitutionsGetRequest", n);
				let t = new URL("/partner/customer/oauth_institutions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			partnerCustomerRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("partnerCustomerRemove", "partnerCustomerRemoveRequest", n);
				let t = new URL("/partner/customer/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationConsentCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationConsentCreate", "paymentInitiationConsentCreateRequest", n);
				let t = new URL("/payment_initiation/consent/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationConsentGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationConsentGet", "paymentInitiationConsentGetRequest", n);
				let t = new URL("/payment_initiation/consent/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationConsentPaymentExecute: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationConsentPaymentExecute", "paymentInitiationConsentPaymentExecuteRequest", n);
				let t = new URL("/payment_initiation/consent/payment/execute", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationConsentRevoke: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationConsentRevoke", "paymentInitiationConsentRevokeRequest", n);
				let t = new URL("/payment_initiation/consent/revoke", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationPaymentCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationPaymentCreate", "paymentInitiationPaymentCreateRequest", n);
				let t = new URL("/payment_initiation/payment/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationPaymentGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationPaymentGet", "paymentInitiationPaymentGetRequest", n);
				let t = new URL("/payment_initiation/payment/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationPaymentList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationPaymentList", "paymentInitiationPaymentListRequest", n);
				let t = new URL("/payment_initiation/payment/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationPaymentReverse: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationPaymentReverse", "paymentInitiationPaymentReverseRequest", n);
				let t = new URL("/payment_initiation/payment/reverse", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationRecipientCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationRecipientCreate", "paymentInitiationRecipientCreateRequest", n);
				let t = new URL("/payment_initiation/recipient/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationRecipientGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationRecipientGet", "paymentInitiationRecipientGetRequest", n);
				let t = new URL("/payment_initiation/recipient/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentInitiationRecipientList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentInitiationRecipientList", "paymentInitiationRecipientListRequest", n);
				let t = new URL("/payment_initiation/recipient/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentProfileCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentProfileCreate", "paymentProfileCreateRequest", n);
				let t = new URL("/payment_profile/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentProfileGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentProfileGet", "paymentProfileGetRequest", n);
				let t = new URL("/payment_profile/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			paymentProfileRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("paymentProfileRemove", "paymentProfileRemoveRequest", n);
				let t = new URL("/payment_profile/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorAccountGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorAccountGet", "processorAccountGetRequest", n);
				let t = new URL("/processor/account/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorApexProcessorTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorApexProcessorTokenCreate", "processorApexProcessorTokenCreateRequest", n);
				let t = new URL("/processor/apex/processor_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorAuthGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorAuthGet", "processorAuthGetRequest", n);
				let t = new URL("/processor/auth/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorBalanceGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorBalanceGet", "processorBalanceGetRequest", n);
				let t = new URL("/processor/balance/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorBankTransferCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorBankTransferCreate", "processorBankTransferCreateRequest", n);
				let t = new URL("/processor/bank_transfer/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorIdentityGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorIdentityGet", "processorIdentityGetRequest", n);
				let t = new URL("/processor/identity/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorIdentityMatch: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorIdentityMatch", "processorIdentityMatchRequest", n);
				let t = new URL("/processor/identity/match", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorInvestmentsHoldingsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorInvestmentsHoldingsGet", "processorInvestmentsHoldingsGetRequest", n);
				let t = new URL("/processor/investments/holdings/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorInvestmentsTransactionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorInvestmentsTransactionsGet", "processorInvestmentsTransactionsGetRequest", n);
				let t = new URL("/processor/investments/transactions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorLiabilitiesGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorLiabilitiesGet", "processorLiabilitiesGetRequest", n);
				let t = new URL("/processor/liabilities/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorSignalDecisionReport: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorSignalDecisionReport", "processorSignalDecisionReportRequest", n);
				let t = new URL("/processor/signal/decision/report", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorSignalEvaluate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorSignalEvaluate", "processorSignalEvaluateRequest", n);
				let t = new URL("/processor/signal/evaluate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorSignalPrepare: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorSignalPrepare", "processorSignalPrepareRequest", n);
				let t = new URL("/processor/signal/prepare", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorSignalReturnReport: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorSignalReturnReport", "processorSignalReturnReportRequest", n);
				let t = new URL("/processor/signal/return/report", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorStripeBankAccountTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorStripeBankAccountTokenCreate", "processorStripeBankAccountTokenCreateRequest", n);
				let t = new URL("/processor/stripe/bank_account_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTokenCreate", "processorTokenCreateRequest", n);
				let t = new URL("/processor/token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTokenPermissionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTokenPermissionsGet", "processorTokenPermissionsGetRequest", n);
				let t = new URL("/processor/token/permissions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTokenPermissionsSet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTokenPermissionsSet", "processorTokenPermissionsSetRequest", n);
				let t = new URL("/processor/token/permissions/set", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTokenWebhookUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTokenWebhookUpdate", "processorTokenWebhookUpdateRequest", n);
				let t = new URL("/processor/token/webhook/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTransactionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTransactionsGet", "processorTransactionsGetRequest", n);
				let t = new URL("/processor/transactions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTransactionsRecurringGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTransactionsRecurringGet", "processorTransactionsRecurringGetRequest", n);
				let t = new URL("/processor/transactions/recurring/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTransactionsRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTransactionsRefresh", "processorTransactionsRefreshRequest", n);
				let t = new URL("/processor/transactions/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			processorTransactionsSync: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("processorTransactionsSync", "processorTransactionsSyncRequest", n);
				let t = new URL("/processor/transactions/sync", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			profileNetworkStatusGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("profileNetworkStatusGet", "profileNetworkStatusGetRequest", n);
				let t = new URL("/profile/network_status/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			protectCompute: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("protectCompute", "protectComputeRequest", n);
				let t = new URL("/protect/compute", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			protectEventGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("protectEventGet", "protectEventGetRequest", n);
				let t = new URL("/protect/event/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			protectEventSend: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("protectEventSend", "protectEventSendRequest", n);
				let t = new URL("/protect/event/send", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			protectReportCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("protectReportCreate", "protectReportCreateRequest", n);
				let t = new URL("/protect/report/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			protectUserInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("protectUserInsightsGet", "protectUserInsightsGetRequest", n);
				let t = new URL("/protect/user/insights/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxBankIncomeFireWebhook: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxBankIncomeFireWebhook", "sandboxBankIncomeFireWebhookRequest", n);
				let t = new URL("/sandbox/bank_income/fire_webhook", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxBankTransferFireWebhook: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxBankTransferFireWebhook", "sandboxBankTransferFireWebhookRequest", n);
				let t = new URL("/sandbox/bank_transfer/fire_webhook", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxBankTransferSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxBankTransferSimulate", "sandboxBankTransferSimulateRequest", n);
				let t = new URL("/sandbox/bank_transfer/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxCraCashflowUpdatesUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxCraCashflowUpdatesUpdate", "sandboxCraCashflowUpdatesUpdateRequest", n);
				let t = new URL("/sandbox/cra/cashflow_updates/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxIncomeFireWebhook: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxIncomeFireWebhook", "sandboxIncomeFireWebhookRequest", n);
				let t = new URL("/sandbox/income/fire_webhook", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxItemFireWebhook: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxItemFireWebhook", "sandboxItemFireWebhookRequest", n);
				let t = new URL("/sandbox/item/fire_webhook", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxItemResetLogin: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxItemResetLogin", "sandboxItemResetLoginRequest", n);
				let t = new URL("/sandbox/item/reset_login", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxItemSetVerificationStatus: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxItemSetVerificationStatus", "sandboxItemSetVerificationStatusRequest", n);
				let t = new URL("/sandbox/item/set_verification_status", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxOauthSelectAccounts: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxOauthSelectAccounts", "sandboxOauthSelectAccountsRequest", n);
				let t = new URL("/sandbox/oauth/select_accounts", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxPaymentProfileResetLogin: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxPaymentProfileResetLogin", "sandboxPaymentProfileResetLoginRequest", n);
				let t = new URL("/sandbox/payment_profile/reset_login", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxPaymentSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxPaymentSimulate", "sandboxPaymentSimulateRequest", n);
				let t = new URL("/sandbox/payment/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxProcessorTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxProcessorTokenCreate", "sandboxProcessorTokenCreateRequest", n);
				let t = new URL("/sandbox/processor_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxPublicTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxPublicTokenCreate", "sandboxPublicTokenCreateRequest", n);
				let t = new URL("/sandbox/public_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransactionsCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransactionsCreate", "sandboxTransactionsCreateRequest", n);
				let t = new URL("/sandbox/transactions/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferFireWebhook: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferFireWebhook", "sandboxTransferFireWebhookRequest", n);
				let t = new URL("/sandbox/transfer/fire_webhook", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferLedgerDepositSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferLedgerDepositSimulate", "sandboxTransferLedgerDepositSimulateRequest", n);
				let t = new URL("/sandbox/transfer/ledger/deposit/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferLedgerSimulateAvailable: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferLedgerSimulateAvailable", "sandboxTransferLedgerSimulateAvailableRequest", n);
				let t = new URL("/sandbox/transfer/ledger/simulate_available", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferLedgerWithdrawSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferLedgerWithdrawSimulate", "sandboxTransferLedgerWithdrawSimulateRequest", n);
				let t = new URL("/sandbox/transfer/ledger/withdraw/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferRefundSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferRefundSimulate", "sandboxTransferRefundSimulateRequest", n);
				let t = new URL("/sandbox/transfer/refund/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferRepaymentSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferRepaymentSimulate", "sandboxTransferRepaymentSimulateRequest", n);
				let t = new URL("/sandbox/transfer/repayment/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferSimulate", "sandboxTransferSimulateRequest", n);
				let t = new URL("/sandbox/transfer/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferSweepSimulate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferSweepSimulate", "sandboxTransferSweepSimulateRequest", n);
				let t = new URL("/sandbox/transfer/sweep/simulate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferTestClockAdvance: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferTestClockAdvance", "sandboxTransferTestClockAdvanceRequest", n);
				let t = new URL("/sandbox/transfer/test_clock/advance", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferTestClockCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferTestClockCreate", "sandboxTransferTestClockCreateRequest", n);
				let t = new URL("/sandbox/transfer/test_clock/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferTestClockGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferTestClockGet", "sandboxTransferTestClockGetRequest", n);
				let t = new URL("/sandbox/transfer/test_clock/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxTransferTestClockList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxTransferTestClockList", "sandboxTransferTestClockListRequest", n);
				let t = new URL("/sandbox/transfer/test_clock/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sandboxUserResetLogin: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sandboxUserResetLogin", "sandboxUserResetLoginRequest", n);
				let t = new URL("/sandbox/user/reset_login", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			sessionTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("sessionTokenCreate", "sessionTokenCreateRequest", n);
				let t = new URL("/session/token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			signalDecisionReport: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("signalDecisionReport", "signalDecisionReportRequest", n);
				let t = new URL("/signal/decision/report", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			signalEvaluate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("signalEvaluate", "signalEvaluateRequest", n);
				let t = new URL("/signal/evaluate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			signalPrepare: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("signalPrepare", "signalPrepareRequest", n);
				let t = new URL("/signal/prepare", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			signalReturnReport: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("signalReturnReport", "signalReturnReportRequest", n);
				let t = new URL("/signal/return/report", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			signalSchedule: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("signalSchedule", "signalScheduleRequest", n);
				let t = new URL("/signal/schedule", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			statementsDownload: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("statementsDownload", "statementsDownloadRequest", n);
				let t = new URL("/statements/download", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			statementsList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("statementsList", "statementsListRequest", n);
				let t = new URL("/statements/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			statementsRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("statementsRefresh", "statementsRefreshRequest", n);
				let t = new URL("/statements/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsEnhance: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsEnhance", "transactionsEnhanceGetRequest", n);
				let t = new URL("/beta/transactions/v1/enhance", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsEnrich: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsEnrich", "transactionsEnrichRequest", n);
				let t = new URL("/transactions/enrich", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsGet", "transactionsGetRequest", n);
				let t = new URL("/transactions/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsRecurringGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsRecurringGet", "transactionsRecurringGetRequest", n);
				let t = new URL("/transactions/recurring/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsRefresh", "transactionsRefreshRequest", n);
				let t = new URL("/transactions/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsRulesCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsRulesCreate", "transactionsRulesCreateRequest", n);
				let t = new URL("/beta/transactions/rules/v1/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsRulesList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsRulesList", "transactionsRulesListRequest", n);
				let t = new URL("/beta/transactions/rules/v1/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsRulesRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsRulesRemove", "transactionsRulesRemoveRequest", n);
				let t = new URL("/beta/transactions/rules/v1/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsSync: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsSync", "transactionsSyncRequest", n);
				let t = new URL("/transactions/sync", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transactionsUserInsightsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transactionsUserInsightsGet", "transactionsUserInsightsGetRequest", n);
				let t = new URL("/beta/transactions/user_insights/v1/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferAuthorizationCancel: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferAuthorizationCancel", "transferAuthorizationCancelRequest", n);
				let t = new URL("/transfer/authorization/cancel", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferAuthorizationCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferAuthorizationCreate", "transferAuthorizationCreateRequest", n);
				let t = new URL("/transfer/authorization/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferBalanceGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferBalanceGet", "transferBalanceGetRequest", n);
				let t = new URL("/transfer/balance/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferCancel: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferCancel", "transferCancelRequest", n);
				let t = new URL("/transfer/cancel", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferCapabilitiesGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferCapabilitiesGet", "transferCapabilitiesGetRequest", n);
				let t = new URL("/transfer/capabilities/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferConfigurationGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferConfigurationGet", "transferConfigurationGetRequest", n);
				let t = new URL("/transfer/configuration/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferCreate", "transferCreateRequest", n);
				let t = new URL("/transfer/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferDiligenceDocumentUpload: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferDiligenceDocumentUpload", "transferDiligenceDocumentUploadRequest", n);
				let t = new URL("/transfer/diligence/document/upload", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferDiligenceSubmit: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferDiligenceSubmit", "transferDiligenceSubmitRequest", n);
				let t = new URL("/transfer/diligence/submit", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferEventList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferEventList", "transferEventListRequest", n);
				let t = new URL("/transfer/event/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferEventSync: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferEventSync", "transferEventSyncRequest", n);
				let t = new URL("/transfer/event/sync", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferGet", "transferGetRequest", n);
				let t = new URL("/transfer/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferIntentCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferIntentCreate", "transferIntentCreateRequest", n);
				let t = new URL("/transfer/intent/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferIntentGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferIntentGet", "transferIntentGetRequest", n);
				let t = new URL("/transfer/intent/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferLedgerDeposit: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferLedgerDeposit", "transferLedgerDepositRequest", n);
				let t = new URL("/transfer/ledger/deposit", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferLedgerDistribute: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferLedgerDistribute", "transferLedgerDistributeRequest", n);
				let t = new URL("/transfer/ledger/distribute", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferLedgerEventList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferLedgerEventList", "transferLedgerEventListRequest", n);
				let t = new URL("/transfer/ledger/event/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferLedgerGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferLedgerGet", "transferLedgerGetRequest", n);
				let t = new URL("/transfer/ledger/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferLedgerWithdraw: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferLedgerWithdraw", "transferLedgerWithdrawRequest", n);
				let t = new URL("/transfer/ledger/withdraw", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferList", "transferListRequest", n);
				let t = new URL("/transfer/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferMetricsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferMetricsGet", "transferMetricsGetRequest", n);
				let t = new URL("/transfer/metrics/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferMigrateAccount: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferMigrateAccount", "transferMigrateAccountRequest", n);
				let t = new URL("/transfer/migrate_account", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferOriginatorCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferOriginatorCreate", "transferOriginatorCreateRequest", n);
				let t = new URL("/transfer/originator/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferOriginatorFundingAccountCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferOriginatorFundingAccountCreate", "transferOriginatorFundingAccountCreateRequest", n);
				let t = new URL("/transfer/originator/funding_account/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferOriginatorFundingAccountUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferOriginatorFundingAccountUpdate", "transferOriginatorFundingAccountUpdateRequest", n);
				let t = new URL("/transfer/originator/funding_account/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferOriginatorGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferOriginatorGet", "transferOriginatorGetRequest", n);
				let t = new URL("/transfer/originator/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferOriginatorList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferOriginatorList", "transferOriginatorListRequest", n);
				let t = new URL("/transfer/originator/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferPlatformOriginatorCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferPlatformOriginatorCreate", "transferPlatformOriginatorCreateRequest", n);
				let t = new URL("/transfer/platform/originator/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferPlatformPersonCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferPlatformPersonCreate", "transferPlatformPersonCreateRequest", n);
				let t = new URL("/transfer/platform/person/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferPlatformRequirementSubmit: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferPlatformRequirementSubmit", "transferPlatformRequirementSubmitRequest", n);
				let t = new URL("/transfer/platform/requirement/submit", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferQuestionnaireCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferQuestionnaireCreate", "transferQuestionnaireCreateRequest", n);
				let t = new URL("/transfer/questionnaire/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRecurringCancel: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRecurringCancel", "transferRecurringCancelRequest", n);
				let t = new URL("/transfer/recurring/cancel", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRecurringCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRecurringCreate", "transferRecurringCreateRequest", n);
				let t = new URL("/transfer/recurring/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRecurringGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRecurringGet", "transferRecurringGetRequest", n);
				let t = new URL("/transfer/recurring/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRecurringList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRecurringList", "transferRecurringListRequest", n);
				let t = new URL("/transfer/recurring/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRefundCancel: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRefundCancel", "transferRefundCancelRequest", n);
				let t = new URL("/transfer/refund/cancel", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRefundCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRefundCreate", "transferRefundCreateRequest", n);
				let t = new URL("/transfer/refund/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRefundGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRefundGet", "transferRefundGetRequest", n);
				let t = new URL("/transfer/refund/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRepaymentList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRepaymentList", "transferRepaymentListRequest", n);
				let t = new URL("/transfer/repayment/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferRepaymentReturnList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferRepaymentReturnList", "transferRepaymentReturnListRequest", n);
				let t = new URL("/transfer/repayment/return/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferSweepGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferSweepGet", "transferSweepGetRequest", n);
				let t = new URL("/transfer/sweep/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			transferSweepList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("transferSweepList", "transferSweepListRequest", n);
				let t = new URL("/transfer/sweep/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userAccountSessionEventSend: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userAccountSessionEventSend", "userAccountSessionEventSendRequest", n);
				let t = new URL("/user_account/session/event/send", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userAccountSessionGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userAccountSessionGet", "userAccountSessionGetRequest", n);
				let t = new URL("/user_account/session/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userCreate: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userCreate", "userCreateRequest", n);
				let t = new URL("/user/create", i.DUMMY_BASE_URL), o;
				e && (o = e.baseOptions);
				let s = Object.assign(Object.assign({ method: "POST" }, o), a), c = {};
				yield i.setApiKeyToObject(c, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(c, "Plaid-Version", e), yield i.setApiKeyToObject(c, "PLAID-SECRET", e), r != null && (c["Plaid-New-User-API-Enabled"] = String(JSON.stringify(r))), c["Content-Type"] = "application/json", i.setSearchParams(t, {}, a.query);
				let l = o && o.headers ? o.headers : {};
				return s.headers = Object.assign(Object.assign(Object.assign({}, c), l), a.headers), s.data = i.serializeDataIfNeeded(n, s, e), {
					url: i.toPathString(t),
					options: s
				};
			}),
			userFinancialDataRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userFinancialDataRefresh", "userFinancialDataRefreshRequest", n);
				let t = new URL("/user/financial_data/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userGet: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userGet", "userGetRequest", n);
				let t = new URL("/user/get", i.DUMMY_BASE_URL), o;
				e && (o = e.baseOptions);
				let s = Object.assign(Object.assign({ method: "POST" }, o), a), c = {};
				yield i.setApiKeyToObject(c, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(c, "Plaid-Version", e), yield i.setApiKeyToObject(c, "PLAID-SECRET", e), r != null && (c["Plaid-New-User-API-Enabled"] = String(JSON.stringify(r))), c["Content-Type"] = "application/json", i.setSearchParams(t, {}, a.query);
				let l = o && o.headers ? o.headers : {};
				return s.headers = Object.assign(Object.assign(Object.assign({}, c), l), a.headers), s.data = i.serializeDataIfNeeded(n, s, e), {
					url: i.toPathString(t),
					options: s
				};
			}),
			userIdentityRemove: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userIdentityRemove", "userIdentityRemoveRequest", n);
				let t = new URL("/user/identity/remove", i.DUMMY_BASE_URL), o;
				e && (o = e.baseOptions);
				let s = Object.assign(Object.assign({ method: "POST" }, o), a), c = {};
				yield i.setApiKeyToObject(c, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(c, "Plaid-Version", e), yield i.setApiKeyToObject(c, "PLAID-SECRET", e), r != null && (c["Plaid-New-User-API-Enabled"] = String(JSON.stringify(r))), c["Content-Type"] = "application/json", i.setSearchParams(t, {}, a.query);
				let l = o && o.headers ? o.headers : {};
				return s.headers = Object.assign(Object.assign(Object.assign({}, c), l), a.headers), s.data = i.serializeDataIfNeeded(n, s, e), {
					url: i.toPathString(t),
					options: s
				};
			}),
			userItemsAssociate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userItemsAssociate", "userItemsAssociateRequest", n);
				let t = new URL("/user/items/associate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userItemsGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userItemsGet", "userItemsGetRequest", n);
				let t = new URL("/user/items/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userItemsRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userItemsRemove", "userItemsRemoveRequest", n);
				let t = new URL("/user/items/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userProductsTerminate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userProductsTerminate", "userProductsTerminateRequest", n);
				let t = new URL("/user/products/terminate", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userRemove: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userRemove", "userRemoveRequest", n);
				let t = new URL("/user/remove", i.DUMMY_BASE_URL), o;
				e && (o = e.baseOptions);
				let s = Object.assign(Object.assign({ method: "POST" }, o), a), c = {};
				yield i.setApiKeyToObject(c, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(c, "Plaid-Version", e), yield i.setApiKeyToObject(c, "PLAID-SECRET", e), r != null && (c["Plaid-New-User-API-Enabled"] = String(JSON.stringify(r))), c["Content-Type"] = "application/json", i.setSearchParams(t, {}, a.query);
				let l = o && o.headers ? o.headers : {};
				return s.headers = Object.assign(Object.assign(Object.assign({}, c), l), a.headers), s.data = i.serializeDataIfNeeded(n, s, e), {
					url: i.toPathString(t),
					options: s
				};
			}),
			userThirdPartyTokenCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userThirdPartyTokenCreate", "userThirdPartyTokenCreateRequest", n);
				let t = new URL("/user/third_party_token/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userThirdPartyTokenRemove: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userThirdPartyTokenRemove", "userThirdPartyTokenRemoveRequest", n);
				let t = new URL("/user/third_party_token/remove", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userTransactionsRefresh: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userTransactionsRefresh", "userTransactionsRefreshRequest", n);
				let t = new URL("/user/transactions/refresh", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			userUpdate: (n, r, a = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("userUpdate", "userUpdateRequest", n);
				let t = new URL("/user/update", i.DUMMY_BASE_URL), o;
				e && (o = e.baseOptions);
				let s = Object.assign(Object.assign({ method: "POST" }, o), a), c = {};
				yield i.setApiKeyToObject(c, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(c, "Plaid-Version", e), yield i.setApiKeyToObject(c, "PLAID-SECRET", e), r != null && (c["Plaid-New-User-API-Enabled"] = String(JSON.stringify(r))), c["Content-Type"] = "application/json", i.setSearchParams(t, {}, a.query);
				let l = o && o.headers ? o.headers : {};
				return s.headers = Object.assign(Object.assign(Object.assign({}, c), l), a.headers), s.data = i.serializeDataIfNeeded(n, s, e), {
					url: i.toPathString(t),
					options: s
				};
			}),
			walletCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletCreate", "walletCreateRequest", n);
				let t = new URL("/wallet/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			walletGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletGet", "walletGetRequest", n);
				let t = new URL("/wallet/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			walletList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletList", "walletListRequest", n);
				let t = new URL("/wallet/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			walletTransactionExecute: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletTransactionExecute", "walletTransactionExecuteRequest", n);
				let t = new URL("/wallet/transaction/execute", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			walletTransactionGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletTransactionGet", "walletTransactionGetRequest", n);
				let t = new URL("/wallet/transaction/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			walletTransactionList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("walletTransactionList", "walletTransactionListRequest", n);
				let t = new URL("/wallet/transaction/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityCreate", "watchlistScreeningEntityCreateRequest", n);
				let t = new URL("/watchlist_screening/entity/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityGet", "watchlistScreeningEntityGetRequest", n);
				let t = new URL("/watchlist_screening/entity/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityHistoryList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityHistoryList", "watchlistScreeningEntityHistoryListRequest", n);
				let t = new URL("/watchlist_screening/entity/history/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityHitList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityHitList", "watchlistScreeningEntityHitListRequest", n);
				let t = new URL("/watchlist_screening/entity/hit/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityList", "watchlistScreeningEntityListRequest", n);
				let t = new URL("/watchlist_screening/entity/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityProgramGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityProgramGet", "watchlistScreeningEntityProgramGetRequest", n);
				let t = new URL("/watchlist_screening/entity/program/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityProgramList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityProgramList", "watchlistScreeningEntityProgramListRequest", n);
				let t = new URL("/watchlist_screening/entity/program/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityReviewCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityReviewCreate", "watchlistScreeningEntityReviewCreateRequest", n);
				let t = new URL("/watchlist_screening/entity/review/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityReviewList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityReviewList", "watchlistScreeningEntityReviewListRequest", n);
				let t = new URL("/watchlist_screening/entity/review/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningEntityUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningEntityUpdate", "watchlistScreeningEntityUpdateRequest", n);
				let t = new URL("/watchlist_screening/entity/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualCreate", "watchlistScreeningIndividualCreateRequest", n);
				let t = new URL("/watchlist_screening/individual/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualGet", "watchlistScreeningIndividualGetRequest", n);
				let t = new URL("/watchlist_screening/individual/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualHistoryList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualHistoryList", "watchlistScreeningIndividualHistoryListRequest", n);
				let t = new URL("/watchlist_screening/individual/history/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualHitList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualHitList", "watchlistScreeningIndividualHitListRequest", n);
				let t = new URL("/watchlist_screening/individual/hit/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualList", "watchlistScreeningIndividualListRequest", n);
				let t = new URL("/watchlist_screening/individual/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualProgramGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualProgramGet", "watchlistScreeningIndividualProgramGetRequest", n);
				let t = new URL("/watchlist_screening/individual/program/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualProgramList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualProgramList", "watchlistScreeningIndividualProgramListRequest", n);
				let t = new URL("/watchlist_screening/individual/program/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualReviewCreate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualReviewCreate", "watchlistScreeningIndividualReviewCreateRequest", n);
				let t = new URL("/watchlist_screening/individual/review/create", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualReviewList: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualReviewList", "watchlistScreeningIndividualReviewListRequest", n);
				let t = new URL("/watchlist_screening/individual/review/list", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			watchlistScreeningIndividualUpdate: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("watchlistScreeningIndividualUpdate", "watchlistScreeningIndividualUpdateRequest", n);
				let t = new URL("/watchlist_screening/individual/update", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			}),
			webhookVerificationKeyGet: (n, r = {}) => t(this, void 0, void 0, function* () {
				i.assertParamExists("webhookVerificationKeyGet", "webhookVerificationKeyGetRequest", n);
				let t = new URL("/webhook_verification_key/get", i.DUMMY_BASE_URL), a;
				e && (a = e.baseOptions);
				let o = Object.assign(Object.assign({ method: "POST" }, a), r), s = {};
				yield i.setApiKeyToObject(s, "PLAID-CLIENT-ID", e), yield i.setApiKeyToObject(s, "Plaid-Version", e), yield i.setApiKeyToObject(s, "PLAID-SECRET", e), s["Content-Type"] = "application/json", i.setSearchParams(t, {}, r.query);
				let c = a && a.headers ? a.headers : {};
				return o.headers = Object.assign(Object.assign(Object.assign({}, s), c), r.headers), o.data = i.serializeDataIfNeeded(n, o, e), {
					url: i.toPathString(t),
					options: o
				};
			})
		};
	}, e.PlaidApiFp = function(n) {
		let o = e.PlaidApiAxiosParamCreator(n);
		return {
			accountsBalanceGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.accountsBalanceGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			accountsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.accountsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			applicationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.applicationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportAuditCopyCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportAuditCopyCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportAuditCopyGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportAuditCopyGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportAuditCopyPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportAuditCopyPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportAuditCopyRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportAuditCopyRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportFilter(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportFilter(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			assetReportRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.assetReportRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			authGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.authGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			authVerify(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.authVerify(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferBalanceGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferBalanceGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferCancel(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferCancel(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferEventList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferEventList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferEventSync(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferEventSync(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferMigrateAccount(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferMigrateAccount(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferSweepGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferSweepGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			bankTransferSweepList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.bankTransferSweepList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconAccountRiskEvaluate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconAccountRiskEvaluate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconDuplicateGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconDuplicateGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconReportCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconReportCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconReportGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconReportGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconReportList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconReportList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconReportSyndicationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconReportSyndicationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconReportSyndicationList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconReportSyndicationList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserAccountInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserAccountInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserHistoryList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserHistoryList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserReview(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserReview(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			beaconUserUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.beaconUserUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			betaEwaReportV1Get(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.betaEwaReportV1Get(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			betaPartnerCustomerV1Create(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.betaPartnerCustomerV1Create(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			betaPartnerCustomerV1Enable(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.betaPartnerCustomerV1Enable(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			betaPartnerCustomerV1Get(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.betaPartnerCustomerV1Get(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			betaPartnerCustomerV1Update(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.betaPartnerCustomerV1Update(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			businessVerificationCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.businessVerificationCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			businessVerificationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.businessVerificationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			cashflowReportGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.cashflowReportGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			cashflowReportInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.cashflowReportInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			cashflowReportRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.cashflowReportRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			cashflowReportTransactionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.cashflowReportTransactionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			categoriesGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.categoriesGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			consentEventsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.consentEventsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			consumerReportPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.consumerReportPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportBaseReportGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportBaseReportGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportCashflowInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportCashflowInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportIncomeInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportIncomeInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportLendScoreGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportLendScoreGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportNetworkInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportNetworkInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportPartnerInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportPartnerInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportVerificationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportVerificationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craCheckReportVerificationPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craCheckReportVerificationPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craLoansApplicationsRegister(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craLoansApplicationsRegister(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craLoansRegister(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craLoansRegister(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craLoansUnregister(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craLoansUnregister(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craLoansUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craLoansUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craMonitoringInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craMonitoringInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craMonitoringInsightsSubscribe(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craMonitoringInsightsSubscribe(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craMonitoringInsightsUnsubscribe(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craMonitoringInsightsUnsubscribe(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			craPartnerInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.craPartnerInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			createPaymentToken(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.createPaymentToken(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditAssetReportFreddieMacGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditAssetReportFreddieMacGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditAuditCopyTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditAuditCopyTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditAuditCopyTokenUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditAuditCopyTokenUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankEmploymentGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankEmploymentGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankIncomeGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankIncomeGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankIncomePdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankIncomePdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankIncomeRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankIncomeRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankIncomeWebhookUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankIncomeWebhookUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditBankStatementsUploadsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditBankStatementsUploadsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditEmploymentGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditEmploymentGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditFreddieMacReportsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditFreddieMacReportsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditPayrollIncomeGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditPayrollIncomeGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditPayrollIncomeParsingConfigUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditPayrollIncomeParsingConfigUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditPayrollIncomePrecheck(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditPayrollIncomePrecheck(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditPayrollIncomeRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditPayrollIncomeRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditPayrollIncomeRiskSignalsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditPayrollIncomeRiskSignalsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditRelayCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditRelayCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditRelayGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditRelayGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditRelayPdfGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditRelayPdfGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditRelayRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditRelayRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditRelayRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditRelayRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditReportAuditCopyRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditReportAuditCopyRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			creditSessionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.creditSessionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			dashboardUserGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.dashboardUserGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			dashboardUserList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.dashboardUserList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			employersSearch(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.employersSearch(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			employmentVerificationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.employmentVerificationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			fdxNotifications(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.fdxNotifications(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			getRecipient(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.getRecipient(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			getRecipients(e) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.getRecipients(e);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityDocumentsUploadsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityDocumentsUploadsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityMatch(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityMatch(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityVerificationAutofillCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityVerificationAutofillCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityVerificationCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityVerificationCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityVerificationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityVerificationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityVerificationList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityVerificationList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			identityVerificationRetry(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.identityVerificationRetry(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			incomeVerificationCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.incomeVerificationCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			incomeVerificationDocumentsDownload(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.incomeVerificationDocumentsDownload(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			incomeVerificationPaystubsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.incomeVerificationPaystubsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			incomeVerificationPrecheck(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.incomeVerificationPrecheck(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			incomeVerificationTaxformsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.incomeVerificationTaxformsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			institutionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.institutionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			institutionsGetById(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.institutionsGetById(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			institutionsSearch(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.institutionsSearch(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			investmentsAuthGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.investmentsAuthGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			investmentsHoldingsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.investmentsHoldingsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			investmentsRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.investmentsRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			investmentsTransactionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.investmentsTransactionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			issuesGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.issuesGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			issuesSearch(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.issuesSearch(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			issuesSubscribe(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.issuesSubscribe(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemAccessTokenInvalidate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemAccessTokenInvalidate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemActivityList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemActivityList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemApplicationList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemApplicationList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemApplicationScopesUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemApplicationScopesUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemApplicationUnlink(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemApplicationUnlink(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemCreatePublicToken(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemCreatePublicToken(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemImport(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemImport(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemPublicTokenExchange(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemPublicTokenExchange(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			itemWebhookUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.itemWebhookUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			liabilitiesGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.liabilitiesGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			linkDeliveryCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.linkDeliveryCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			linkDeliveryGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.linkDeliveryGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			linkOauthCorrelationIdExchange(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.linkOauthCorrelationIdExchange(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			linkTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.linkTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			linkTokenGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.linkTokenGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			networkInsightsReportGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.networkInsightsReportGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			networkStatusGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.networkStatusGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			oauthIntrospect(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.oauthIntrospect(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			oauthRevoke(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.oauthRevoke(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			oauthToken(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.oauthToken(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			partnerCustomerCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.partnerCustomerCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			partnerCustomerEnable(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.partnerCustomerEnable(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			partnerCustomerGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.partnerCustomerGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			partnerCustomerOauthInstitutionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.partnerCustomerOauthInstitutionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			partnerCustomerRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.partnerCustomerRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationConsentCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationConsentCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationConsentGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationConsentGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationConsentPaymentExecute(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationConsentPaymentExecute(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationConsentRevoke(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationConsentRevoke(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationPaymentCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationPaymentCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationPaymentGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationPaymentGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationPaymentList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationPaymentList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationPaymentReverse(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationPaymentReverse(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationRecipientCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationRecipientCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationRecipientGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationRecipientGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentInitiationRecipientList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentInitiationRecipientList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentProfileCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentProfileCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentProfileGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentProfileGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			paymentProfileRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.paymentProfileRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorAccountGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorAccountGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorApexProcessorTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorApexProcessorTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorAuthGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorAuthGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorBalanceGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorBalanceGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorBankTransferCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorBankTransferCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorIdentityGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorIdentityGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorIdentityMatch(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorIdentityMatch(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorInvestmentsHoldingsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorInvestmentsHoldingsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorInvestmentsTransactionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorInvestmentsTransactionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorLiabilitiesGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorLiabilitiesGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorSignalDecisionReport(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorSignalDecisionReport(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorSignalEvaluate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorSignalEvaluate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorSignalPrepare(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorSignalPrepare(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorSignalReturnReport(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorSignalReturnReport(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorStripeBankAccountTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorStripeBankAccountTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTokenPermissionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTokenPermissionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTokenPermissionsSet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTokenPermissionsSet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTokenWebhookUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTokenWebhookUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTransactionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTransactionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTransactionsRecurringGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTransactionsRecurringGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTransactionsRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTransactionsRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			processorTransactionsSync(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.processorTransactionsSync(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			profileNetworkStatusGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.profileNetworkStatusGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			protectCompute(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.protectCompute(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			protectEventGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.protectEventGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			protectEventSend(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.protectEventSend(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			protectReportCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.protectReportCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			protectUserInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.protectUserInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxBankIncomeFireWebhook(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxBankIncomeFireWebhook(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxBankTransferFireWebhook(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxBankTransferFireWebhook(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxBankTransferSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxBankTransferSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxCraCashflowUpdatesUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxCraCashflowUpdatesUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxIncomeFireWebhook(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxIncomeFireWebhook(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxItemFireWebhook(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxItemFireWebhook(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxItemResetLogin(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxItemResetLogin(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxItemSetVerificationStatus(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxItemSetVerificationStatus(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxOauthSelectAccounts(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxOauthSelectAccounts(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxPaymentProfileResetLogin(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxPaymentProfileResetLogin(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxPaymentSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxPaymentSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxProcessorTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxProcessorTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxPublicTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxPublicTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransactionsCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransactionsCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferFireWebhook(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferFireWebhook(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferLedgerDepositSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferLedgerDepositSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferLedgerSimulateAvailable(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferLedgerSimulateAvailable(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferLedgerWithdrawSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferLedgerWithdrawSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferRefundSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferRefundSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferRepaymentSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferRepaymentSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferSweepSimulate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferSweepSimulate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferTestClockAdvance(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferTestClockAdvance(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferTestClockCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferTestClockCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferTestClockGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferTestClockGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxTransferTestClockList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxTransferTestClockList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sandboxUserResetLogin(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sandboxUserResetLogin(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			sessionTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.sessionTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			signalDecisionReport(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.signalDecisionReport(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			signalEvaluate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.signalEvaluate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			signalPrepare(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.signalPrepare(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			signalReturnReport(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.signalReturnReport(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			signalSchedule(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.signalSchedule(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			statementsDownload(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.statementsDownload(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			statementsList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.statementsList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			statementsRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.statementsRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsEnhance(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsEnhance(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsEnrich(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsEnrich(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsRecurringGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsRecurringGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsRulesCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsRulesCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsRulesList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsRulesList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsRulesRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsRulesRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsSync(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsSync(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transactionsUserInsightsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transactionsUserInsightsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferAuthorizationCancel(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferAuthorizationCancel(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferAuthorizationCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferAuthorizationCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferBalanceGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferBalanceGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferCancel(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferCancel(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferCapabilitiesGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferCapabilitiesGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferConfigurationGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferConfigurationGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferDiligenceDocumentUpload(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferDiligenceDocumentUpload(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferDiligenceSubmit(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferDiligenceSubmit(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferEventList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferEventList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferEventSync(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferEventSync(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferIntentCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferIntentCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferIntentGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferIntentGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferLedgerDeposit(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferLedgerDeposit(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferLedgerDistribute(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferLedgerDistribute(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferLedgerEventList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferLedgerEventList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferLedgerGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferLedgerGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferLedgerWithdraw(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferLedgerWithdraw(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferMetricsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferMetricsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferMigrateAccount(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferMigrateAccount(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferOriginatorCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferOriginatorCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferOriginatorFundingAccountCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferOriginatorFundingAccountCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferOriginatorFundingAccountUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferOriginatorFundingAccountUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferOriginatorGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferOriginatorGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferOriginatorList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferOriginatorList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferPlatformOriginatorCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferPlatformOriginatorCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferPlatformPersonCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferPlatformPersonCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferPlatformRequirementSubmit(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferPlatformRequirementSubmit(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferQuestionnaireCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferQuestionnaireCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRecurringCancel(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRecurringCancel(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRecurringCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRecurringCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRecurringGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRecurringGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRecurringList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRecurringList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRefundCancel(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRefundCancel(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRefundCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRefundCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRefundGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRefundGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRepaymentList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRepaymentList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferRepaymentReturnList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferRepaymentReturnList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferSweepGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferSweepGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			transferSweepList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.transferSweepList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userAccountSessionEventSend(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userAccountSessionEventSend(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userAccountSessionGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userAccountSessionGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userCreate(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userCreate(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userFinancialDataRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userFinancialDataRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userGet(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userGet(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userIdentityRemove(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userIdentityRemove(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userItemsAssociate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userItemsAssociate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userItemsGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userItemsGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userItemsRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userItemsRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userProductsTerminate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userProductsTerminate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userRemove(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userRemove(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userThirdPartyTokenCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userThirdPartyTokenCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userThirdPartyTokenRemove(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userThirdPartyTokenRemove(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userTransactionsRefresh(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userTransactionsRefresh(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			userUpdate(e, s, c) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.userUpdate(e, s, c);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletTransactionExecute(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletTransactionExecute(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletTransactionGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletTransactionGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			walletTransactionList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.walletTransactionList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityHistoryList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityHistoryList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityHitList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityHitList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityProgramGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityProgramGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityProgramList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityProgramList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityReviewCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityReviewCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityReviewList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityReviewList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningEntityUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningEntityUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualHistoryList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualHistoryList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualHitList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualHitList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualProgramGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualProgramGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualProgramList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualProgramList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualReviewCreate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualReviewCreate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualReviewList(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualReviewList(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			watchlistScreeningIndividualUpdate(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.watchlistScreeningIndividualUpdate(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			},
			webhookVerificationKeyGet(e, s) {
				return t(this, void 0, void 0, function* () {
					let t = yield o.webhookVerificationKeyGet(e, s);
					return i.createRequestFunction(t, r.default, a.BASE_PATH, n);
				});
			}
		};
	}, e.PlaidApiFactory = function(t, n, r) {
		let i = e.PlaidApiFp(t);
		return {
			accountsBalanceGet(e, t) {
				return i.accountsBalanceGet(e, t).then((e) => e(r, n));
			},
			accountsGet(e, t) {
				return i.accountsGet(e, t).then((e) => e(r, n));
			},
			applicationGet(e, t) {
				return i.applicationGet(e, t).then((e) => e(r, n));
			},
			assetReportAuditCopyCreate(e, t) {
				return i.assetReportAuditCopyCreate(e, t).then((e) => e(r, n));
			},
			assetReportAuditCopyGet(e, t) {
				return i.assetReportAuditCopyGet(e, t).then((e) => e(r, n));
			},
			assetReportAuditCopyPdfGet(e, t) {
				return i.assetReportAuditCopyPdfGet(e, t).then((e) => e(r, n));
			},
			assetReportAuditCopyRemove(e, t) {
				return i.assetReportAuditCopyRemove(e, t).then((e) => e(r, n));
			},
			assetReportCreate(e, t) {
				return i.assetReportCreate(e, t).then((e) => e(r, n));
			},
			assetReportFilter(e, t) {
				return i.assetReportFilter(e, t).then((e) => e(r, n));
			},
			assetReportGet(e, t) {
				return i.assetReportGet(e, t).then((e) => e(r, n));
			},
			assetReportPdfGet(e, t) {
				return i.assetReportPdfGet(e, t).then((e) => e(r, n));
			},
			assetReportRefresh(e, t) {
				return i.assetReportRefresh(e, t).then((e) => e(r, n));
			},
			assetReportRemove(e, t) {
				return i.assetReportRemove(e, t).then((e) => e(r, n));
			},
			authGet(e, t) {
				return i.authGet(e, t).then((e) => e(r, n));
			},
			authVerify(e, t) {
				return i.authVerify(e, t).then((e) => e(r, n));
			},
			bankTransferBalanceGet(e, t) {
				return i.bankTransferBalanceGet(e, t).then((e) => e(r, n));
			},
			bankTransferCancel(e, t) {
				return i.bankTransferCancel(e, t).then((e) => e(r, n));
			},
			bankTransferCreate(e, t) {
				return i.bankTransferCreate(e, t).then((e) => e(r, n));
			},
			bankTransferEventList(e, t) {
				return i.bankTransferEventList(e, t).then((e) => e(r, n));
			},
			bankTransferEventSync(e, t) {
				return i.bankTransferEventSync(e, t).then((e) => e(r, n));
			},
			bankTransferGet(e, t) {
				return i.bankTransferGet(e, t).then((e) => e(r, n));
			},
			bankTransferList(e, t) {
				return i.bankTransferList(e, t).then((e) => e(r, n));
			},
			bankTransferMigrateAccount(e, t) {
				return i.bankTransferMigrateAccount(e, t).then((e) => e(r, n));
			},
			bankTransferSweepGet(e, t) {
				return i.bankTransferSweepGet(e, t).then((e) => e(r, n));
			},
			bankTransferSweepList(e, t) {
				return i.bankTransferSweepList(e, t).then((e) => e(r, n));
			},
			beaconAccountRiskEvaluate(e, t) {
				return i.beaconAccountRiskEvaluate(e, t).then((e) => e(r, n));
			},
			beaconDuplicateGet(e, t) {
				return i.beaconDuplicateGet(e, t).then((e) => e(r, n));
			},
			beaconReportCreate(e, t) {
				return i.beaconReportCreate(e, t).then((e) => e(r, n));
			},
			beaconReportGet(e, t) {
				return i.beaconReportGet(e, t).then((e) => e(r, n));
			},
			beaconReportList(e, t) {
				return i.beaconReportList(e, t).then((e) => e(r, n));
			},
			beaconReportSyndicationGet(e, t) {
				return i.beaconReportSyndicationGet(e, t).then((e) => e(r, n));
			},
			beaconReportSyndicationList(e, t) {
				return i.beaconReportSyndicationList(e, t).then((e) => e(r, n));
			},
			beaconUserAccountInsightsGet(e, t) {
				return i.beaconUserAccountInsightsGet(e, t).then((e) => e(r, n));
			},
			beaconUserCreate(e, t) {
				return i.beaconUserCreate(e, t).then((e) => e(r, n));
			},
			beaconUserGet(e, t) {
				return i.beaconUserGet(e, t).then((e) => e(r, n));
			},
			beaconUserHistoryList(e, t) {
				return i.beaconUserHistoryList(e, t).then((e) => e(r, n));
			},
			beaconUserReview(e, t) {
				return i.beaconUserReview(e, t).then((e) => e(r, n));
			},
			beaconUserUpdate(e, t) {
				return i.beaconUserUpdate(e, t).then((e) => e(r, n));
			},
			betaEwaReportV1Get(e, t) {
				return i.betaEwaReportV1Get(e, t).then((e) => e(r, n));
			},
			betaPartnerCustomerV1Create(e, t) {
				return i.betaPartnerCustomerV1Create(e, t).then((e) => e(r, n));
			},
			betaPartnerCustomerV1Enable(e, t) {
				return i.betaPartnerCustomerV1Enable(e, t).then((e) => e(r, n));
			},
			betaPartnerCustomerV1Get(e, t) {
				return i.betaPartnerCustomerV1Get(e, t).then((e) => e(r, n));
			},
			betaPartnerCustomerV1Update(e, t) {
				return i.betaPartnerCustomerV1Update(e, t).then((e) => e(r, n));
			},
			businessVerificationCreate(e, t) {
				return i.businessVerificationCreate(e, t).then((e) => e(r, n));
			},
			businessVerificationGet(e, t) {
				return i.businessVerificationGet(e, t).then((e) => e(r, n));
			},
			cashflowReportGet(e, t) {
				return i.cashflowReportGet(e, t).then((e) => e(r, n));
			},
			cashflowReportInsightsGet(e, t) {
				return i.cashflowReportInsightsGet(e, t).then((e) => e(r, n));
			},
			cashflowReportRefresh(e, t) {
				return i.cashflowReportRefresh(e, t).then((e) => e(r, n));
			},
			cashflowReportTransactionsGet(e, t) {
				return i.cashflowReportTransactionsGet(e, t).then((e) => e(r, n));
			},
			categoriesGet(e, t) {
				return i.categoriesGet(e, t).then((e) => e(r, n));
			},
			consentEventsGet(e, t) {
				return i.consentEventsGet(e, t).then((e) => e(r, n));
			},
			consumerReportPdfGet(e, t) {
				return i.consumerReportPdfGet(e, t).then((e) => e(r, n));
			},
			craCheckReportBaseReportGet(e, t) {
				return i.craCheckReportBaseReportGet(e, t).then((e) => e(r, n));
			},
			craCheckReportCashflowInsightsGet(e, t) {
				return i.craCheckReportCashflowInsightsGet(e, t).then((e) => e(r, n));
			},
			craCheckReportCreate(e, t) {
				return i.craCheckReportCreate(e, t).then((e) => e(r, n));
			},
			craCheckReportIncomeInsightsGet(e, t) {
				return i.craCheckReportIncomeInsightsGet(e, t).then((e) => e(r, n));
			},
			craCheckReportLendScoreGet(e, t) {
				return i.craCheckReportLendScoreGet(e, t).then((e) => e(r, n));
			},
			craCheckReportNetworkInsightsGet(e, t) {
				return i.craCheckReportNetworkInsightsGet(e, t).then((e) => e(r, n));
			},
			craCheckReportPartnerInsightsGet(e, t) {
				return i.craCheckReportPartnerInsightsGet(e, t).then((e) => e(r, n));
			},
			craCheckReportPdfGet(e, t) {
				return i.craCheckReportPdfGet(e, t).then((e) => e(r, n));
			},
			craCheckReportVerificationGet(e, t) {
				return i.craCheckReportVerificationGet(e, t).then((e) => e(r, n));
			},
			craCheckReportVerificationPdfGet(e, t) {
				return i.craCheckReportVerificationPdfGet(e, t).then((e) => e(r, n));
			},
			craLoansApplicationsRegister(e, t) {
				return i.craLoansApplicationsRegister(e, t).then((e) => e(r, n));
			},
			craLoansRegister(e, t) {
				return i.craLoansRegister(e, t).then((e) => e(r, n));
			},
			craLoansUnregister(e, t) {
				return i.craLoansUnregister(e, t).then((e) => e(r, n));
			},
			craLoansUpdate(e, t) {
				return i.craLoansUpdate(e, t).then((e) => e(r, n));
			},
			craMonitoringInsightsGet(e, t) {
				return i.craMonitoringInsightsGet(e, t).then((e) => e(r, n));
			},
			craMonitoringInsightsSubscribe(e, t) {
				return i.craMonitoringInsightsSubscribe(e, t).then((e) => e(r, n));
			},
			craMonitoringInsightsUnsubscribe(e, t) {
				return i.craMonitoringInsightsUnsubscribe(e, t).then((e) => e(r, n));
			},
			craPartnerInsightsGet(e, t) {
				return i.craPartnerInsightsGet(e, t).then((e) => e(r, n));
			},
			createPaymentToken(e, t) {
				return i.createPaymentToken(e, t).then((e) => e(r, n));
			},
			creditAssetReportFreddieMacGet(e, t) {
				return i.creditAssetReportFreddieMacGet(e, t).then((e) => e(r, n));
			},
			creditAuditCopyTokenCreate(e, t) {
				return i.creditAuditCopyTokenCreate(e, t).then((e) => e(r, n));
			},
			creditAuditCopyTokenUpdate(e, t) {
				return i.creditAuditCopyTokenUpdate(e, t).then((e) => e(r, n));
			},
			creditBankEmploymentGet(e, t) {
				return i.creditBankEmploymentGet(e, t).then((e) => e(r, n));
			},
			creditBankIncomeGet(e, t) {
				return i.creditBankIncomeGet(e, t).then((e) => e(r, n));
			},
			creditBankIncomePdfGet(e, t) {
				return i.creditBankIncomePdfGet(e, t).then((e) => e(r, n));
			},
			creditBankIncomeRefresh(e, t) {
				return i.creditBankIncomeRefresh(e, t).then((e) => e(r, n));
			},
			creditBankIncomeWebhookUpdate(e, t) {
				return i.creditBankIncomeWebhookUpdate(e, t).then((e) => e(r, n));
			},
			creditBankStatementsUploadsGet(e, t) {
				return i.creditBankStatementsUploadsGet(e, t).then((e) => e(r, n));
			},
			creditEmploymentGet(e, t) {
				return i.creditEmploymentGet(e, t).then((e) => e(r, n));
			},
			creditFreddieMacReportsGet(e, t) {
				return i.creditFreddieMacReportsGet(e, t).then((e) => e(r, n));
			},
			creditPayrollIncomeGet(e, t) {
				return i.creditPayrollIncomeGet(e, t).then((e) => e(r, n));
			},
			creditPayrollIncomeParsingConfigUpdate(e, t) {
				return i.creditPayrollIncomeParsingConfigUpdate(e, t).then((e) => e(r, n));
			},
			creditPayrollIncomePrecheck(e, t) {
				return i.creditPayrollIncomePrecheck(e, t).then((e) => e(r, n));
			},
			creditPayrollIncomeRefresh(e, t) {
				return i.creditPayrollIncomeRefresh(e, t).then((e) => e(r, n));
			},
			creditPayrollIncomeRiskSignalsGet(e, t) {
				return i.creditPayrollIncomeRiskSignalsGet(e, t).then((e) => e(r, n));
			},
			creditRelayCreate(e, t) {
				return i.creditRelayCreate(e, t).then((e) => e(r, n));
			},
			creditRelayGet(e, t) {
				return i.creditRelayGet(e, t).then((e) => e(r, n));
			},
			creditRelayPdfGet(e, t) {
				return i.creditRelayPdfGet(e, t).then((e) => e(r, n));
			},
			creditRelayRefresh(e, t) {
				return i.creditRelayRefresh(e, t).then((e) => e(r, n));
			},
			creditRelayRemove(e, t) {
				return i.creditRelayRemove(e, t).then((e) => e(r, n));
			},
			creditReportAuditCopyRemove(e, t) {
				return i.creditReportAuditCopyRemove(e, t).then((e) => e(r, n));
			},
			creditSessionsGet(e, t) {
				return i.creditSessionsGet(e, t).then((e) => e(r, n));
			},
			dashboardUserGet(e, t) {
				return i.dashboardUserGet(e, t).then((e) => e(r, n));
			},
			dashboardUserList(e, t) {
				return i.dashboardUserList(e, t).then((e) => e(r, n));
			},
			employersSearch(e, t) {
				return i.employersSearch(e, t).then((e) => e(r, n));
			},
			employmentVerificationGet(e, t) {
				return i.employmentVerificationGet(e, t).then((e) => e(r, n));
			},
			fdxNotifications(e, t) {
				return i.fdxNotifications(e, t).then((e) => e(r, n));
			},
			getRecipient(e, t, a) {
				return i.getRecipient(e, t, a).then((e) => e(r, n));
			},
			getRecipients(e) {
				return i.getRecipients(e).then((e) => e(r, n));
			},
			identityDocumentsUploadsGet(e, t) {
				return i.identityDocumentsUploadsGet(e, t).then((e) => e(r, n));
			},
			identityGet(e, t) {
				return i.identityGet(e, t).then((e) => e(r, n));
			},
			identityMatch(e, t) {
				return i.identityMatch(e, t).then((e) => e(r, n));
			},
			identityRefresh(e, t) {
				return i.identityRefresh(e, t).then((e) => e(r, n));
			},
			identityVerificationAutofillCreate(e, t) {
				return i.identityVerificationAutofillCreate(e, t).then((e) => e(r, n));
			},
			identityVerificationCreate(e, t) {
				return i.identityVerificationCreate(e, t).then((e) => e(r, n));
			},
			identityVerificationGet(e, t) {
				return i.identityVerificationGet(e, t).then((e) => e(r, n));
			},
			identityVerificationList(e, t) {
				return i.identityVerificationList(e, t).then((e) => e(r, n));
			},
			identityVerificationRetry(e, t) {
				return i.identityVerificationRetry(e, t).then((e) => e(r, n));
			},
			incomeVerificationCreate(e, t) {
				return i.incomeVerificationCreate(e, t).then((e) => e(r, n));
			},
			incomeVerificationDocumentsDownload(e, t) {
				return i.incomeVerificationDocumentsDownload(e, t).then((e) => e(r, n));
			},
			incomeVerificationPaystubsGet(e, t) {
				return i.incomeVerificationPaystubsGet(e, t).then((e) => e(r, n));
			},
			incomeVerificationPrecheck(e, t) {
				return i.incomeVerificationPrecheck(e, t).then((e) => e(r, n));
			},
			incomeVerificationTaxformsGet(e, t) {
				return i.incomeVerificationTaxformsGet(e, t).then((e) => e(r, n));
			},
			institutionsGet(e, t) {
				return i.institutionsGet(e, t).then((e) => e(r, n));
			},
			institutionsGetById(e, t) {
				return i.institutionsGetById(e, t).then((e) => e(r, n));
			},
			institutionsSearch(e, t) {
				return i.institutionsSearch(e, t).then((e) => e(r, n));
			},
			investmentsAuthGet(e, t) {
				return i.investmentsAuthGet(e, t).then((e) => e(r, n));
			},
			investmentsHoldingsGet(e, t) {
				return i.investmentsHoldingsGet(e, t).then((e) => e(r, n));
			},
			investmentsRefresh(e, t) {
				return i.investmentsRefresh(e, t).then((e) => e(r, n));
			},
			investmentsTransactionsGet(e, t) {
				return i.investmentsTransactionsGet(e, t).then((e) => e(r, n));
			},
			issuesGet(e, t) {
				return i.issuesGet(e, t).then((e) => e(r, n));
			},
			issuesSearch(e, t) {
				return i.issuesSearch(e, t).then((e) => e(r, n));
			},
			issuesSubscribe(e, t) {
				return i.issuesSubscribe(e, t).then((e) => e(r, n));
			},
			itemAccessTokenInvalidate(e, t) {
				return i.itemAccessTokenInvalidate(e, t).then((e) => e(r, n));
			},
			itemActivityList(e, t) {
				return i.itemActivityList(e, t).then((e) => e(r, n));
			},
			itemApplicationList(e, t) {
				return i.itemApplicationList(e, t).then((e) => e(r, n));
			},
			itemApplicationScopesUpdate(e, t) {
				return i.itemApplicationScopesUpdate(e, t).then((e) => e(r, n));
			},
			itemApplicationUnlink(e, t) {
				return i.itemApplicationUnlink(e, t).then((e) => e(r, n));
			},
			itemCreatePublicToken(e, t) {
				return i.itemCreatePublicToken(e, t).then((e) => e(r, n));
			},
			itemGet(e, t) {
				return i.itemGet(e, t).then((e) => e(r, n));
			},
			itemImport(e, t) {
				return i.itemImport(e, t).then((e) => e(r, n));
			},
			itemPublicTokenExchange(e, t) {
				return i.itemPublicTokenExchange(e, t).then((e) => e(r, n));
			},
			itemRemove(e, t) {
				return i.itemRemove(e, t).then((e) => e(r, n));
			},
			itemWebhookUpdate(e, t) {
				return i.itemWebhookUpdate(e, t).then((e) => e(r, n));
			},
			liabilitiesGet(e, t) {
				return i.liabilitiesGet(e, t).then((e) => e(r, n));
			},
			linkDeliveryCreate(e, t) {
				return i.linkDeliveryCreate(e, t).then((e) => e(r, n));
			},
			linkDeliveryGet(e, t) {
				return i.linkDeliveryGet(e, t).then((e) => e(r, n));
			},
			linkOauthCorrelationIdExchange(e, t) {
				return i.linkOauthCorrelationIdExchange(e, t).then((e) => e(r, n));
			},
			linkTokenCreate(e, t) {
				return i.linkTokenCreate(e, t).then((e) => e(r, n));
			},
			linkTokenGet(e, t) {
				return i.linkTokenGet(e, t).then((e) => e(r, n));
			},
			networkInsightsReportGet(e, t) {
				return i.networkInsightsReportGet(e, t).then((e) => e(r, n));
			},
			networkStatusGet(e, t) {
				return i.networkStatusGet(e, t).then((e) => e(r, n));
			},
			oauthIntrospect(e, t) {
				return i.oauthIntrospect(e, t).then((e) => e(r, n));
			},
			oauthRevoke(e, t) {
				return i.oauthRevoke(e, t).then((e) => e(r, n));
			},
			oauthToken(e, t) {
				return i.oauthToken(e, t).then((e) => e(r, n));
			},
			partnerCustomerCreate(e, t) {
				return i.partnerCustomerCreate(e, t).then((e) => e(r, n));
			},
			partnerCustomerEnable(e, t) {
				return i.partnerCustomerEnable(e, t).then((e) => e(r, n));
			},
			partnerCustomerGet(e, t) {
				return i.partnerCustomerGet(e, t).then((e) => e(r, n));
			},
			partnerCustomerOauthInstitutionsGet(e, t) {
				return i.partnerCustomerOauthInstitutionsGet(e, t).then((e) => e(r, n));
			},
			partnerCustomerRemove(e, t) {
				return i.partnerCustomerRemove(e, t).then((e) => e(r, n));
			},
			paymentInitiationConsentCreate(e, t) {
				return i.paymentInitiationConsentCreate(e, t).then((e) => e(r, n));
			},
			paymentInitiationConsentGet(e, t) {
				return i.paymentInitiationConsentGet(e, t).then((e) => e(r, n));
			},
			paymentInitiationConsentPaymentExecute(e, t) {
				return i.paymentInitiationConsentPaymentExecute(e, t).then((e) => e(r, n));
			},
			paymentInitiationConsentRevoke(e, t) {
				return i.paymentInitiationConsentRevoke(e, t).then((e) => e(r, n));
			},
			paymentInitiationPaymentCreate(e, t) {
				return i.paymentInitiationPaymentCreate(e, t).then((e) => e(r, n));
			},
			paymentInitiationPaymentGet(e, t) {
				return i.paymentInitiationPaymentGet(e, t).then((e) => e(r, n));
			},
			paymentInitiationPaymentList(e, t) {
				return i.paymentInitiationPaymentList(e, t).then((e) => e(r, n));
			},
			paymentInitiationPaymentReverse(e, t) {
				return i.paymentInitiationPaymentReverse(e, t).then((e) => e(r, n));
			},
			paymentInitiationRecipientCreate(e, t) {
				return i.paymentInitiationRecipientCreate(e, t).then((e) => e(r, n));
			},
			paymentInitiationRecipientGet(e, t) {
				return i.paymentInitiationRecipientGet(e, t).then((e) => e(r, n));
			},
			paymentInitiationRecipientList(e, t) {
				return i.paymentInitiationRecipientList(e, t).then((e) => e(r, n));
			},
			paymentProfileCreate(e, t) {
				return i.paymentProfileCreate(e, t).then((e) => e(r, n));
			},
			paymentProfileGet(e, t) {
				return i.paymentProfileGet(e, t).then((e) => e(r, n));
			},
			paymentProfileRemove(e, t) {
				return i.paymentProfileRemove(e, t).then((e) => e(r, n));
			},
			processorAccountGet(e, t) {
				return i.processorAccountGet(e, t).then((e) => e(r, n));
			},
			processorApexProcessorTokenCreate(e, t) {
				return i.processorApexProcessorTokenCreate(e, t).then((e) => e(r, n));
			},
			processorAuthGet(e, t) {
				return i.processorAuthGet(e, t).then((e) => e(r, n));
			},
			processorBalanceGet(e, t) {
				return i.processorBalanceGet(e, t).then((e) => e(r, n));
			},
			processorBankTransferCreate(e, t) {
				return i.processorBankTransferCreate(e, t).then((e) => e(r, n));
			},
			processorIdentityGet(e, t) {
				return i.processorIdentityGet(e, t).then((e) => e(r, n));
			},
			processorIdentityMatch(e, t) {
				return i.processorIdentityMatch(e, t).then((e) => e(r, n));
			},
			processorInvestmentsHoldingsGet(e, t) {
				return i.processorInvestmentsHoldingsGet(e, t).then((e) => e(r, n));
			},
			processorInvestmentsTransactionsGet(e, t) {
				return i.processorInvestmentsTransactionsGet(e, t).then((e) => e(r, n));
			},
			processorLiabilitiesGet(e, t) {
				return i.processorLiabilitiesGet(e, t).then((e) => e(r, n));
			},
			processorSignalDecisionReport(e, t) {
				return i.processorSignalDecisionReport(e, t).then((e) => e(r, n));
			},
			processorSignalEvaluate(e, t) {
				return i.processorSignalEvaluate(e, t).then((e) => e(r, n));
			},
			processorSignalPrepare(e, t) {
				return i.processorSignalPrepare(e, t).then((e) => e(r, n));
			},
			processorSignalReturnReport(e, t) {
				return i.processorSignalReturnReport(e, t).then((e) => e(r, n));
			},
			processorStripeBankAccountTokenCreate(e, t) {
				return i.processorStripeBankAccountTokenCreate(e, t).then((e) => e(r, n));
			},
			processorTokenCreate(e, t) {
				return i.processorTokenCreate(e, t).then((e) => e(r, n));
			},
			processorTokenPermissionsGet(e, t) {
				return i.processorTokenPermissionsGet(e, t).then((e) => e(r, n));
			},
			processorTokenPermissionsSet(e, t) {
				return i.processorTokenPermissionsSet(e, t).then((e) => e(r, n));
			},
			processorTokenWebhookUpdate(e, t) {
				return i.processorTokenWebhookUpdate(e, t).then((e) => e(r, n));
			},
			processorTransactionsGet(e, t) {
				return i.processorTransactionsGet(e, t).then((e) => e(r, n));
			},
			processorTransactionsRecurringGet(e, t) {
				return i.processorTransactionsRecurringGet(e, t).then((e) => e(r, n));
			},
			processorTransactionsRefresh(e, t) {
				return i.processorTransactionsRefresh(e, t).then((e) => e(r, n));
			},
			processorTransactionsSync(e, t) {
				return i.processorTransactionsSync(e, t).then((e) => e(r, n));
			},
			profileNetworkStatusGet(e, t) {
				return i.profileNetworkStatusGet(e, t).then((e) => e(r, n));
			},
			protectCompute(e, t) {
				return i.protectCompute(e, t).then((e) => e(r, n));
			},
			protectEventGet(e, t) {
				return i.protectEventGet(e, t).then((e) => e(r, n));
			},
			protectEventSend(e, t) {
				return i.protectEventSend(e, t).then((e) => e(r, n));
			},
			protectReportCreate(e, t) {
				return i.protectReportCreate(e, t).then((e) => e(r, n));
			},
			protectUserInsightsGet(e, t) {
				return i.protectUserInsightsGet(e, t).then((e) => e(r, n));
			},
			sandboxBankIncomeFireWebhook(e, t) {
				return i.sandboxBankIncomeFireWebhook(e, t).then((e) => e(r, n));
			},
			sandboxBankTransferFireWebhook(e, t) {
				return i.sandboxBankTransferFireWebhook(e, t).then((e) => e(r, n));
			},
			sandboxBankTransferSimulate(e, t) {
				return i.sandboxBankTransferSimulate(e, t).then((e) => e(r, n));
			},
			sandboxCraCashflowUpdatesUpdate(e, t) {
				return i.sandboxCraCashflowUpdatesUpdate(e, t).then((e) => e(r, n));
			},
			sandboxIncomeFireWebhook(e, t) {
				return i.sandboxIncomeFireWebhook(e, t).then((e) => e(r, n));
			},
			sandboxItemFireWebhook(e, t) {
				return i.sandboxItemFireWebhook(e, t).then((e) => e(r, n));
			},
			sandboxItemResetLogin(e, t) {
				return i.sandboxItemResetLogin(e, t).then((e) => e(r, n));
			},
			sandboxItemSetVerificationStatus(e, t) {
				return i.sandboxItemSetVerificationStatus(e, t).then((e) => e(r, n));
			},
			sandboxOauthSelectAccounts(e, t) {
				return i.sandboxOauthSelectAccounts(e, t).then((e) => e(r, n));
			},
			sandboxPaymentProfileResetLogin(e, t) {
				return i.sandboxPaymentProfileResetLogin(e, t).then((e) => e(r, n));
			},
			sandboxPaymentSimulate(e, t) {
				return i.sandboxPaymentSimulate(e, t).then((e) => e(r, n));
			},
			sandboxProcessorTokenCreate(e, t) {
				return i.sandboxProcessorTokenCreate(e, t).then((e) => e(r, n));
			},
			sandboxPublicTokenCreate(e, t) {
				return i.sandboxPublicTokenCreate(e, t).then((e) => e(r, n));
			},
			sandboxTransactionsCreate(e, t) {
				return i.sandboxTransactionsCreate(e, t).then((e) => e(r, n));
			},
			sandboxTransferFireWebhook(e, t) {
				return i.sandboxTransferFireWebhook(e, t).then((e) => e(r, n));
			},
			sandboxTransferLedgerDepositSimulate(e, t) {
				return i.sandboxTransferLedgerDepositSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferLedgerSimulateAvailable(e, t) {
				return i.sandboxTransferLedgerSimulateAvailable(e, t).then((e) => e(r, n));
			},
			sandboxTransferLedgerWithdrawSimulate(e, t) {
				return i.sandboxTransferLedgerWithdrawSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferRefundSimulate(e, t) {
				return i.sandboxTransferRefundSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferRepaymentSimulate(e, t) {
				return i.sandboxTransferRepaymentSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferSimulate(e, t) {
				return i.sandboxTransferSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferSweepSimulate(e, t) {
				return i.sandboxTransferSweepSimulate(e, t).then((e) => e(r, n));
			},
			sandboxTransferTestClockAdvance(e, t) {
				return i.sandboxTransferTestClockAdvance(e, t).then((e) => e(r, n));
			},
			sandboxTransferTestClockCreate(e, t) {
				return i.sandboxTransferTestClockCreate(e, t).then((e) => e(r, n));
			},
			sandboxTransferTestClockGet(e, t) {
				return i.sandboxTransferTestClockGet(e, t).then((e) => e(r, n));
			},
			sandboxTransferTestClockList(e, t) {
				return i.sandboxTransferTestClockList(e, t).then((e) => e(r, n));
			},
			sandboxUserResetLogin(e, t) {
				return i.sandboxUserResetLogin(e, t).then((e) => e(r, n));
			},
			sessionTokenCreate(e, t) {
				return i.sessionTokenCreate(e, t).then((e) => e(r, n));
			},
			signalDecisionReport(e, t) {
				return i.signalDecisionReport(e, t).then((e) => e(r, n));
			},
			signalEvaluate(e, t) {
				return i.signalEvaluate(e, t).then((e) => e(r, n));
			},
			signalPrepare(e, t) {
				return i.signalPrepare(e, t).then((e) => e(r, n));
			},
			signalReturnReport(e, t) {
				return i.signalReturnReport(e, t).then((e) => e(r, n));
			},
			signalSchedule(e, t) {
				return i.signalSchedule(e, t).then((e) => e(r, n));
			},
			statementsDownload(e, t) {
				return i.statementsDownload(e, t).then((e) => e(r, n));
			},
			statementsList(e, t) {
				return i.statementsList(e, t).then((e) => e(r, n));
			},
			statementsRefresh(e, t) {
				return i.statementsRefresh(e, t).then((e) => e(r, n));
			},
			transactionsEnhance(e, t) {
				return i.transactionsEnhance(e, t).then((e) => e(r, n));
			},
			transactionsEnrich(e, t) {
				return i.transactionsEnrich(e, t).then((e) => e(r, n));
			},
			transactionsGet(e, t) {
				return i.transactionsGet(e, t).then((e) => e(r, n));
			},
			transactionsRecurringGet(e, t) {
				return i.transactionsRecurringGet(e, t).then((e) => e(r, n));
			},
			transactionsRefresh(e, t) {
				return i.transactionsRefresh(e, t).then((e) => e(r, n));
			},
			transactionsRulesCreate(e, t) {
				return i.transactionsRulesCreate(e, t).then((e) => e(r, n));
			},
			transactionsRulesList(e, t) {
				return i.transactionsRulesList(e, t).then((e) => e(r, n));
			},
			transactionsRulesRemove(e, t) {
				return i.transactionsRulesRemove(e, t).then((e) => e(r, n));
			},
			transactionsSync(e, t) {
				return i.transactionsSync(e, t).then((e) => e(r, n));
			},
			transactionsUserInsightsGet(e, t) {
				return i.transactionsUserInsightsGet(e, t).then((e) => e(r, n));
			},
			transferAuthorizationCancel(e, t) {
				return i.transferAuthorizationCancel(e, t).then((e) => e(r, n));
			},
			transferAuthorizationCreate(e, t) {
				return i.transferAuthorizationCreate(e, t).then((e) => e(r, n));
			},
			transferBalanceGet(e, t) {
				return i.transferBalanceGet(e, t).then((e) => e(r, n));
			},
			transferCancel(e, t) {
				return i.transferCancel(e, t).then((e) => e(r, n));
			},
			transferCapabilitiesGet(e, t) {
				return i.transferCapabilitiesGet(e, t).then((e) => e(r, n));
			},
			transferConfigurationGet(e, t) {
				return i.transferConfigurationGet(e, t).then((e) => e(r, n));
			},
			transferCreate(e, t) {
				return i.transferCreate(e, t).then((e) => e(r, n));
			},
			transferDiligenceDocumentUpload(e, t) {
				return i.transferDiligenceDocumentUpload(e, t).then((e) => e(r, n));
			},
			transferDiligenceSubmit(e, t) {
				return i.transferDiligenceSubmit(e, t).then((e) => e(r, n));
			},
			transferEventList(e, t) {
				return i.transferEventList(e, t).then((e) => e(r, n));
			},
			transferEventSync(e, t) {
				return i.transferEventSync(e, t).then((e) => e(r, n));
			},
			transferGet(e, t) {
				return i.transferGet(e, t).then((e) => e(r, n));
			},
			transferIntentCreate(e, t) {
				return i.transferIntentCreate(e, t).then((e) => e(r, n));
			},
			transferIntentGet(e, t) {
				return i.transferIntentGet(e, t).then((e) => e(r, n));
			},
			transferLedgerDeposit(e, t) {
				return i.transferLedgerDeposit(e, t).then((e) => e(r, n));
			},
			transferLedgerDistribute(e, t) {
				return i.transferLedgerDistribute(e, t).then((e) => e(r, n));
			},
			transferLedgerEventList(e, t) {
				return i.transferLedgerEventList(e, t).then((e) => e(r, n));
			},
			transferLedgerGet(e, t) {
				return i.transferLedgerGet(e, t).then((e) => e(r, n));
			},
			transferLedgerWithdraw(e, t) {
				return i.transferLedgerWithdraw(e, t).then((e) => e(r, n));
			},
			transferList(e, t) {
				return i.transferList(e, t).then((e) => e(r, n));
			},
			transferMetricsGet(e, t) {
				return i.transferMetricsGet(e, t).then((e) => e(r, n));
			},
			transferMigrateAccount(e, t) {
				return i.transferMigrateAccount(e, t).then((e) => e(r, n));
			},
			transferOriginatorCreate(e, t) {
				return i.transferOriginatorCreate(e, t).then((e) => e(r, n));
			},
			transferOriginatorFundingAccountCreate(e, t) {
				return i.transferOriginatorFundingAccountCreate(e, t).then((e) => e(r, n));
			},
			transferOriginatorFundingAccountUpdate(e, t) {
				return i.transferOriginatorFundingAccountUpdate(e, t).then((e) => e(r, n));
			},
			transferOriginatorGet(e, t) {
				return i.transferOriginatorGet(e, t).then((e) => e(r, n));
			},
			transferOriginatorList(e, t) {
				return i.transferOriginatorList(e, t).then((e) => e(r, n));
			},
			transferPlatformOriginatorCreate(e, t) {
				return i.transferPlatformOriginatorCreate(e, t).then((e) => e(r, n));
			},
			transferPlatformPersonCreate(e, t) {
				return i.transferPlatformPersonCreate(e, t).then((e) => e(r, n));
			},
			transferPlatformRequirementSubmit(e, t) {
				return i.transferPlatformRequirementSubmit(e, t).then((e) => e(r, n));
			},
			transferQuestionnaireCreate(e, t) {
				return i.transferQuestionnaireCreate(e, t).then((e) => e(r, n));
			},
			transferRecurringCancel(e, t) {
				return i.transferRecurringCancel(e, t).then((e) => e(r, n));
			},
			transferRecurringCreate(e, t) {
				return i.transferRecurringCreate(e, t).then((e) => e(r, n));
			},
			transferRecurringGet(e, t) {
				return i.transferRecurringGet(e, t).then((e) => e(r, n));
			},
			transferRecurringList(e, t) {
				return i.transferRecurringList(e, t).then((e) => e(r, n));
			},
			transferRefundCancel(e, t) {
				return i.transferRefundCancel(e, t).then((e) => e(r, n));
			},
			transferRefundCreate(e, t) {
				return i.transferRefundCreate(e, t).then((e) => e(r, n));
			},
			transferRefundGet(e, t) {
				return i.transferRefundGet(e, t).then((e) => e(r, n));
			},
			transferRepaymentList(e, t) {
				return i.transferRepaymentList(e, t).then((e) => e(r, n));
			},
			transferRepaymentReturnList(e, t) {
				return i.transferRepaymentReturnList(e, t).then((e) => e(r, n));
			},
			transferSweepGet(e, t) {
				return i.transferSweepGet(e, t).then((e) => e(r, n));
			},
			transferSweepList(e, t) {
				return i.transferSweepList(e, t).then((e) => e(r, n));
			},
			userAccountSessionEventSend(e, t) {
				return i.userAccountSessionEventSend(e, t).then((e) => e(r, n));
			},
			userAccountSessionGet(e, t) {
				return i.userAccountSessionGet(e, t).then((e) => e(r, n));
			},
			userCreate(e, t, a) {
				return i.userCreate(e, t, a).then((e) => e(r, n));
			},
			userFinancialDataRefresh(e, t) {
				return i.userFinancialDataRefresh(e, t).then((e) => e(r, n));
			},
			userGet(e, t, a) {
				return i.userGet(e, t, a).then((e) => e(r, n));
			},
			userIdentityRemove(e, t, a) {
				return i.userIdentityRemove(e, t, a).then((e) => e(r, n));
			},
			userItemsAssociate(e, t) {
				return i.userItemsAssociate(e, t).then((e) => e(r, n));
			},
			userItemsGet(e, t) {
				return i.userItemsGet(e, t).then((e) => e(r, n));
			},
			userItemsRemove(e, t) {
				return i.userItemsRemove(e, t).then((e) => e(r, n));
			},
			userProductsTerminate(e, t) {
				return i.userProductsTerminate(e, t).then((e) => e(r, n));
			},
			userRemove(e, t, a) {
				return i.userRemove(e, t, a).then((e) => e(r, n));
			},
			userThirdPartyTokenCreate(e, t) {
				return i.userThirdPartyTokenCreate(e, t).then((e) => e(r, n));
			},
			userThirdPartyTokenRemove(e, t) {
				return i.userThirdPartyTokenRemove(e, t).then((e) => e(r, n));
			},
			userTransactionsRefresh(e, t) {
				return i.userTransactionsRefresh(e, t).then((e) => e(r, n));
			},
			userUpdate(e, t, a) {
				return i.userUpdate(e, t, a).then((e) => e(r, n));
			},
			walletCreate(e, t) {
				return i.walletCreate(e, t).then((e) => e(r, n));
			},
			walletGet(e, t) {
				return i.walletGet(e, t).then((e) => e(r, n));
			},
			walletList(e, t) {
				return i.walletList(e, t).then((e) => e(r, n));
			},
			walletTransactionExecute(e, t) {
				return i.walletTransactionExecute(e, t).then((e) => e(r, n));
			},
			walletTransactionGet(e, t) {
				return i.walletTransactionGet(e, t).then((e) => e(r, n));
			},
			walletTransactionList(e, t) {
				return i.walletTransactionList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityCreate(e, t) {
				return i.watchlistScreeningEntityCreate(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityGet(e, t) {
				return i.watchlistScreeningEntityGet(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityHistoryList(e, t) {
				return i.watchlistScreeningEntityHistoryList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityHitList(e, t) {
				return i.watchlistScreeningEntityHitList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityList(e, t) {
				return i.watchlistScreeningEntityList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityProgramGet(e, t) {
				return i.watchlistScreeningEntityProgramGet(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityProgramList(e, t) {
				return i.watchlistScreeningEntityProgramList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityReviewCreate(e, t) {
				return i.watchlistScreeningEntityReviewCreate(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityReviewList(e, t) {
				return i.watchlistScreeningEntityReviewList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningEntityUpdate(e, t) {
				return i.watchlistScreeningEntityUpdate(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualCreate(e, t) {
				return i.watchlistScreeningIndividualCreate(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualGet(e, t) {
				return i.watchlistScreeningIndividualGet(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualHistoryList(e, t) {
				return i.watchlistScreeningIndividualHistoryList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualHitList(e, t) {
				return i.watchlistScreeningIndividualHitList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualList(e, t) {
				return i.watchlistScreeningIndividualList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualProgramGet(e, t) {
				return i.watchlistScreeningIndividualProgramGet(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualProgramList(e, t) {
				return i.watchlistScreeningIndividualProgramList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualReviewCreate(e, t) {
				return i.watchlistScreeningIndividualReviewCreate(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualReviewList(e, t) {
				return i.watchlistScreeningIndividualReviewList(e, t).then((e) => e(r, n));
			},
			watchlistScreeningIndividualUpdate(e, t) {
				return i.watchlistScreeningIndividualUpdate(e, t).then((e) => e(r, n));
			},
			webhookVerificationKeyGet(e, t) {
				return i.webhookVerificationKeyGet(e, t).then((e) => e(r, n));
			}
		};
	}, e.PlaidApi = class extends a.BaseAPI {
		accountsBalanceGet(t, n) {
			return e.PlaidApiFp(this.configuration).accountsBalanceGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		accountsGet(t, n) {
			return e.PlaidApiFp(this.configuration).accountsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		applicationGet(t, n) {
			return e.PlaidApiFp(this.configuration).applicationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportAuditCopyCreate(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportAuditCopyCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportAuditCopyGet(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportAuditCopyGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportAuditCopyPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportAuditCopyPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportAuditCopyRemove(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportAuditCopyRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportCreate(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportFilter(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportFilter(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportGet(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		assetReportRemove(t, n) {
			return e.PlaidApiFp(this.configuration).assetReportRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		authGet(t, n) {
			return e.PlaidApiFp(this.configuration).authGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		authVerify(t, n) {
			return e.PlaidApiFp(this.configuration).authVerify(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferBalanceGet(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferBalanceGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferCancel(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferCancel(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferCreate(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferEventList(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferEventList(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferEventSync(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferEventSync(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferGet(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferList(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferList(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferMigrateAccount(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferMigrateAccount(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferSweepGet(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferSweepGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		bankTransferSweepList(t, n) {
			return e.PlaidApiFp(this.configuration).bankTransferSweepList(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconAccountRiskEvaluate(t, n) {
			return e.PlaidApiFp(this.configuration).beaconAccountRiskEvaluate(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconDuplicateGet(t, n) {
			return e.PlaidApiFp(this.configuration).beaconDuplicateGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconReportCreate(t, n) {
			return e.PlaidApiFp(this.configuration).beaconReportCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconReportGet(t, n) {
			return e.PlaidApiFp(this.configuration).beaconReportGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconReportList(t, n) {
			return e.PlaidApiFp(this.configuration).beaconReportList(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconReportSyndicationGet(t, n) {
			return e.PlaidApiFp(this.configuration).beaconReportSyndicationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconReportSyndicationList(t, n) {
			return e.PlaidApiFp(this.configuration).beaconReportSyndicationList(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserAccountInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserAccountInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserCreate(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserGet(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserHistoryList(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserHistoryList(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserReview(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserReview(t, n).then((e) => e(this.axios, this.basePath));
		}
		beaconUserUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).beaconUserUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		betaEwaReportV1Get(t, n) {
			return e.PlaidApiFp(this.configuration).betaEwaReportV1Get(t, n).then((e) => e(this.axios, this.basePath));
		}
		betaPartnerCustomerV1Create(t, n) {
			return e.PlaidApiFp(this.configuration).betaPartnerCustomerV1Create(t, n).then((e) => e(this.axios, this.basePath));
		}
		betaPartnerCustomerV1Enable(t, n) {
			return e.PlaidApiFp(this.configuration).betaPartnerCustomerV1Enable(t, n).then((e) => e(this.axios, this.basePath));
		}
		betaPartnerCustomerV1Get(t, n) {
			return e.PlaidApiFp(this.configuration).betaPartnerCustomerV1Get(t, n).then((e) => e(this.axios, this.basePath));
		}
		betaPartnerCustomerV1Update(t, n) {
			return e.PlaidApiFp(this.configuration).betaPartnerCustomerV1Update(t, n).then((e) => e(this.axios, this.basePath));
		}
		businessVerificationCreate(t, n) {
			return e.PlaidApiFp(this.configuration).businessVerificationCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		businessVerificationGet(t, n) {
			return e.PlaidApiFp(this.configuration).businessVerificationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		cashflowReportGet(t, n) {
			return e.PlaidApiFp(this.configuration).cashflowReportGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		cashflowReportInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).cashflowReportInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		cashflowReportRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).cashflowReportRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		cashflowReportTransactionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).cashflowReportTransactionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		categoriesGet(t, n) {
			return e.PlaidApiFp(this.configuration).categoriesGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		consentEventsGet(t, n) {
			return e.PlaidApiFp(this.configuration).consentEventsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		consumerReportPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).consumerReportPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportBaseReportGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportBaseReportGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportCashflowInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportCashflowInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportCreate(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportIncomeInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportIncomeInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportLendScoreGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportLendScoreGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportNetworkInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportNetworkInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportPartnerInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportPartnerInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportVerificationGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportVerificationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craCheckReportVerificationPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).craCheckReportVerificationPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craLoansApplicationsRegister(t, n) {
			return e.PlaidApiFp(this.configuration).craLoansApplicationsRegister(t, n).then((e) => e(this.axios, this.basePath));
		}
		craLoansRegister(t, n) {
			return e.PlaidApiFp(this.configuration).craLoansRegister(t, n).then((e) => e(this.axios, this.basePath));
		}
		craLoansUnregister(t, n) {
			return e.PlaidApiFp(this.configuration).craLoansUnregister(t, n).then((e) => e(this.axios, this.basePath));
		}
		craLoansUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).craLoansUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		craMonitoringInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craMonitoringInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		craMonitoringInsightsSubscribe(t, n) {
			return e.PlaidApiFp(this.configuration).craMonitoringInsightsSubscribe(t, n).then((e) => e(this.axios, this.basePath));
		}
		craMonitoringInsightsUnsubscribe(t, n) {
			return e.PlaidApiFp(this.configuration).craMonitoringInsightsUnsubscribe(t, n).then((e) => e(this.axios, this.basePath));
		}
		craPartnerInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).craPartnerInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		createPaymentToken(t, n) {
			return e.PlaidApiFp(this.configuration).createPaymentToken(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditAssetReportFreddieMacGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditAssetReportFreddieMacGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditAuditCopyTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).creditAuditCopyTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditAuditCopyTokenUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).creditAuditCopyTokenUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankEmploymentGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankEmploymentGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankIncomeGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankIncomeGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankIncomePdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankIncomePdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankIncomeRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankIncomeRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankIncomeWebhookUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankIncomeWebhookUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditBankStatementsUploadsGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditBankStatementsUploadsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditEmploymentGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditEmploymentGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditFreddieMacReportsGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditFreddieMacReportsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditPayrollIncomeGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditPayrollIncomeGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditPayrollIncomeParsingConfigUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).creditPayrollIncomeParsingConfigUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditPayrollIncomePrecheck(t, n) {
			return e.PlaidApiFp(this.configuration).creditPayrollIncomePrecheck(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditPayrollIncomeRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).creditPayrollIncomeRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditPayrollIncomeRiskSignalsGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditPayrollIncomeRiskSignalsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditRelayCreate(t, n) {
			return e.PlaidApiFp(this.configuration).creditRelayCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditRelayGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditRelayGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditRelayPdfGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditRelayPdfGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditRelayRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).creditRelayRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditRelayRemove(t, n) {
			return e.PlaidApiFp(this.configuration).creditRelayRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditReportAuditCopyRemove(t, n) {
			return e.PlaidApiFp(this.configuration).creditReportAuditCopyRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		creditSessionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).creditSessionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		dashboardUserGet(t, n) {
			return e.PlaidApiFp(this.configuration).dashboardUserGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		dashboardUserList(t, n) {
			return e.PlaidApiFp(this.configuration).dashboardUserList(t, n).then((e) => e(this.axios, this.basePath));
		}
		employersSearch(t, n) {
			return e.PlaidApiFp(this.configuration).employersSearch(t, n).then((e) => e(this.axios, this.basePath));
		}
		employmentVerificationGet(t, n) {
			return e.PlaidApiFp(this.configuration).employmentVerificationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		fdxNotifications(t, n) {
			return e.PlaidApiFp(this.configuration).fdxNotifications(t, n).then((e) => e(this.axios, this.basePath));
		}
		getRecipient(t, n, r) {
			return e.PlaidApiFp(this.configuration).getRecipient(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		getRecipients(t) {
			return e.PlaidApiFp(this.configuration).getRecipients(t).then((e) => e(this.axios, this.basePath));
		}
		identityDocumentsUploadsGet(t, n) {
			return e.PlaidApiFp(this.configuration).identityDocumentsUploadsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityGet(t, n) {
			return e.PlaidApiFp(this.configuration).identityGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityMatch(t, n) {
			return e.PlaidApiFp(this.configuration).identityMatch(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).identityRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityVerificationAutofillCreate(t, n) {
			return e.PlaidApiFp(this.configuration).identityVerificationAutofillCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityVerificationCreate(t, n) {
			return e.PlaidApiFp(this.configuration).identityVerificationCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityVerificationGet(t, n) {
			return e.PlaidApiFp(this.configuration).identityVerificationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityVerificationList(t, n) {
			return e.PlaidApiFp(this.configuration).identityVerificationList(t, n).then((e) => e(this.axios, this.basePath));
		}
		identityVerificationRetry(t, n) {
			return e.PlaidApiFp(this.configuration).identityVerificationRetry(t, n).then((e) => e(this.axios, this.basePath));
		}
		incomeVerificationCreate(t, n) {
			return e.PlaidApiFp(this.configuration).incomeVerificationCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		incomeVerificationDocumentsDownload(t, n) {
			return e.PlaidApiFp(this.configuration).incomeVerificationDocumentsDownload(t, n).then((e) => e(this.axios, this.basePath));
		}
		incomeVerificationPaystubsGet(t, n) {
			return e.PlaidApiFp(this.configuration).incomeVerificationPaystubsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		incomeVerificationPrecheck(t, n) {
			return e.PlaidApiFp(this.configuration).incomeVerificationPrecheck(t, n).then((e) => e(this.axios, this.basePath));
		}
		incomeVerificationTaxformsGet(t, n) {
			return e.PlaidApiFp(this.configuration).incomeVerificationTaxformsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		institutionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).institutionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		institutionsGetById(t, n) {
			return e.PlaidApiFp(this.configuration).institutionsGetById(t, n).then((e) => e(this.axios, this.basePath));
		}
		institutionsSearch(t, n) {
			return e.PlaidApiFp(this.configuration).institutionsSearch(t, n).then((e) => e(this.axios, this.basePath));
		}
		investmentsAuthGet(t, n) {
			return e.PlaidApiFp(this.configuration).investmentsAuthGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		investmentsHoldingsGet(t, n) {
			return e.PlaidApiFp(this.configuration).investmentsHoldingsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		investmentsRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).investmentsRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		investmentsTransactionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).investmentsTransactionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		issuesGet(t, n) {
			return e.PlaidApiFp(this.configuration).issuesGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		issuesSearch(t, n) {
			return e.PlaidApiFp(this.configuration).issuesSearch(t, n).then((e) => e(this.axios, this.basePath));
		}
		issuesSubscribe(t, n) {
			return e.PlaidApiFp(this.configuration).issuesSubscribe(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemAccessTokenInvalidate(t, n) {
			return e.PlaidApiFp(this.configuration).itemAccessTokenInvalidate(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemActivityList(t, n) {
			return e.PlaidApiFp(this.configuration).itemActivityList(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemApplicationList(t, n) {
			return e.PlaidApiFp(this.configuration).itemApplicationList(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemApplicationScopesUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).itemApplicationScopesUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemApplicationUnlink(t, n) {
			return e.PlaidApiFp(this.configuration).itemApplicationUnlink(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemCreatePublicToken(t, n) {
			return e.PlaidApiFp(this.configuration).itemCreatePublicToken(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemGet(t, n) {
			return e.PlaidApiFp(this.configuration).itemGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemImport(t, n) {
			return e.PlaidApiFp(this.configuration).itemImport(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemPublicTokenExchange(t, n) {
			return e.PlaidApiFp(this.configuration).itemPublicTokenExchange(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemRemove(t, n) {
			return e.PlaidApiFp(this.configuration).itemRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		itemWebhookUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).itemWebhookUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		liabilitiesGet(t, n) {
			return e.PlaidApiFp(this.configuration).liabilitiesGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		linkDeliveryCreate(t, n) {
			return e.PlaidApiFp(this.configuration).linkDeliveryCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		linkDeliveryGet(t, n) {
			return e.PlaidApiFp(this.configuration).linkDeliveryGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		linkOauthCorrelationIdExchange(t, n) {
			return e.PlaidApiFp(this.configuration).linkOauthCorrelationIdExchange(t, n).then((e) => e(this.axios, this.basePath));
		}
		linkTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).linkTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		linkTokenGet(t, n) {
			return e.PlaidApiFp(this.configuration).linkTokenGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		networkInsightsReportGet(t, n) {
			return e.PlaidApiFp(this.configuration).networkInsightsReportGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		networkStatusGet(t, n) {
			return e.PlaidApiFp(this.configuration).networkStatusGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		oauthIntrospect(t, n) {
			return e.PlaidApiFp(this.configuration).oauthIntrospect(t, n).then((e) => e(this.axios, this.basePath));
		}
		oauthRevoke(t, n) {
			return e.PlaidApiFp(this.configuration).oauthRevoke(t, n).then((e) => e(this.axios, this.basePath));
		}
		oauthToken(t, n) {
			return e.PlaidApiFp(this.configuration).oauthToken(t, n).then((e) => e(this.axios, this.basePath));
		}
		partnerCustomerCreate(t, n) {
			return e.PlaidApiFp(this.configuration).partnerCustomerCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		partnerCustomerEnable(t, n) {
			return e.PlaidApiFp(this.configuration).partnerCustomerEnable(t, n).then((e) => e(this.axios, this.basePath));
		}
		partnerCustomerGet(t, n) {
			return e.PlaidApiFp(this.configuration).partnerCustomerGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		partnerCustomerOauthInstitutionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).partnerCustomerOauthInstitutionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		partnerCustomerRemove(t, n) {
			return e.PlaidApiFp(this.configuration).partnerCustomerRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationConsentCreate(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationConsentCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationConsentGet(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationConsentGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationConsentPaymentExecute(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationConsentPaymentExecute(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationConsentRevoke(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationConsentRevoke(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationPaymentCreate(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationPaymentCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationPaymentGet(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationPaymentGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationPaymentList(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationPaymentList(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationPaymentReverse(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationPaymentReverse(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationRecipientCreate(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationRecipientCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationRecipientGet(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationRecipientGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentInitiationRecipientList(t, n) {
			return e.PlaidApiFp(this.configuration).paymentInitiationRecipientList(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentProfileCreate(t, n) {
			return e.PlaidApiFp(this.configuration).paymentProfileCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentProfileGet(t, n) {
			return e.PlaidApiFp(this.configuration).paymentProfileGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		paymentProfileRemove(t, n) {
			return e.PlaidApiFp(this.configuration).paymentProfileRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorAccountGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorAccountGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorApexProcessorTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).processorApexProcessorTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorAuthGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorAuthGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorBalanceGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorBalanceGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorBankTransferCreate(t, n) {
			return e.PlaidApiFp(this.configuration).processorBankTransferCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorIdentityGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorIdentityGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorIdentityMatch(t, n) {
			return e.PlaidApiFp(this.configuration).processorIdentityMatch(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorInvestmentsHoldingsGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorInvestmentsHoldingsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorInvestmentsTransactionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorInvestmentsTransactionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorLiabilitiesGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorLiabilitiesGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorSignalDecisionReport(t, n) {
			return e.PlaidApiFp(this.configuration).processorSignalDecisionReport(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorSignalEvaluate(t, n) {
			return e.PlaidApiFp(this.configuration).processorSignalEvaluate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorSignalPrepare(t, n) {
			return e.PlaidApiFp(this.configuration).processorSignalPrepare(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorSignalReturnReport(t, n) {
			return e.PlaidApiFp(this.configuration).processorSignalReturnReport(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorStripeBankAccountTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).processorStripeBankAccountTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).processorTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTokenPermissionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorTokenPermissionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTokenPermissionsSet(t, n) {
			return e.PlaidApiFp(this.configuration).processorTokenPermissionsSet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTokenWebhookUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).processorTokenWebhookUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTransactionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorTransactionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTransactionsRecurringGet(t, n) {
			return e.PlaidApiFp(this.configuration).processorTransactionsRecurringGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTransactionsRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).processorTransactionsRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		processorTransactionsSync(t, n) {
			return e.PlaidApiFp(this.configuration).processorTransactionsSync(t, n).then((e) => e(this.axios, this.basePath));
		}
		profileNetworkStatusGet(t, n) {
			return e.PlaidApiFp(this.configuration).profileNetworkStatusGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		protectCompute(t, n) {
			return e.PlaidApiFp(this.configuration).protectCompute(t, n).then((e) => e(this.axios, this.basePath));
		}
		protectEventGet(t, n) {
			return e.PlaidApiFp(this.configuration).protectEventGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		protectEventSend(t, n) {
			return e.PlaidApiFp(this.configuration).protectEventSend(t, n).then((e) => e(this.axios, this.basePath));
		}
		protectReportCreate(t, n) {
			return e.PlaidApiFp(this.configuration).protectReportCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		protectUserInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).protectUserInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxBankIncomeFireWebhook(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxBankIncomeFireWebhook(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxBankTransferFireWebhook(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxBankTransferFireWebhook(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxBankTransferSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxBankTransferSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxCraCashflowUpdatesUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxCraCashflowUpdatesUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxIncomeFireWebhook(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxIncomeFireWebhook(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxItemFireWebhook(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxItemFireWebhook(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxItemResetLogin(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxItemResetLogin(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxItemSetVerificationStatus(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxItemSetVerificationStatus(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxOauthSelectAccounts(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxOauthSelectAccounts(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxPaymentProfileResetLogin(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxPaymentProfileResetLogin(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxPaymentSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxPaymentSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxProcessorTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxProcessorTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxPublicTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxPublicTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransactionsCreate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransactionsCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferFireWebhook(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferFireWebhook(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferLedgerDepositSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferLedgerDepositSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferLedgerSimulateAvailable(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferLedgerSimulateAvailable(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferLedgerWithdrawSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferLedgerWithdrawSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferRefundSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferRefundSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferRepaymentSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferRepaymentSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferSweepSimulate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferSweepSimulate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferTestClockAdvance(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferTestClockAdvance(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferTestClockCreate(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferTestClockCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferTestClockGet(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferTestClockGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxTransferTestClockList(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxTransferTestClockList(t, n).then((e) => e(this.axios, this.basePath));
		}
		sandboxUserResetLogin(t, n) {
			return e.PlaidApiFp(this.configuration).sandboxUserResetLogin(t, n).then((e) => e(this.axios, this.basePath));
		}
		sessionTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).sessionTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		signalDecisionReport(t, n) {
			return e.PlaidApiFp(this.configuration).signalDecisionReport(t, n).then((e) => e(this.axios, this.basePath));
		}
		signalEvaluate(t, n) {
			return e.PlaidApiFp(this.configuration).signalEvaluate(t, n).then((e) => e(this.axios, this.basePath));
		}
		signalPrepare(t, n) {
			return e.PlaidApiFp(this.configuration).signalPrepare(t, n).then((e) => e(this.axios, this.basePath));
		}
		signalReturnReport(t, n) {
			return e.PlaidApiFp(this.configuration).signalReturnReport(t, n).then((e) => e(this.axios, this.basePath));
		}
		signalSchedule(t, n) {
			return e.PlaidApiFp(this.configuration).signalSchedule(t, n).then((e) => e(this.axios, this.basePath));
		}
		statementsDownload(t, n) {
			return e.PlaidApiFp(this.configuration).statementsDownload(t, n).then((e) => e(this.axios, this.basePath));
		}
		statementsList(t, n) {
			return e.PlaidApiFp(this.configuration).statementsList(t, n).then((e) => e(this.axios, this.basePath));
		}
		statementsRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).statementsRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsEnhance(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsEnhance(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsEnrich(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsEnrich(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsGet(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsRecurringGet(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsRecurringGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsRulesCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsRulesCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsRulesList(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsRulesList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsRulesRemove(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsRulesRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsSync(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsSync(t, n).then((e) => e(this.axios, this.basePath));
		}
		transactionsUserInsightsGet(t, n) {
			return e.PlaidApiFp(this.configuration).transactionsUserInsightsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferAuthorizationCancel(t, n) {
			return e.PlaidApiFp(this.configuration).transferAuthorizationCancel(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferAuthorizationCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferAuthorizationCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferBalanceGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferBalanceGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferCancel(t, n) {
			return e.PlaidApiFp(this.configuration).transferCancel(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferCapabilitiesGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferCapabilitiesGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferConfigurationGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferConfigurationGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferDiligenceDocumentUpload(t, n) {
			return e.PlaidApiFp(this.configuration).transferDiligenceDocumentUpload(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferDiligenceSubmit(t, n) {
			return e.PlaidApiFp(this.configuration).transferDiligenceSubmit(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferEventList(t, n) {
			return e.PlaidApiFp(this.configuration).transferEventList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferEventSync(t, n) {
			return e.PlaidApiFp(this.configuration).transferEventSync(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferIntentCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferIntentCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferIntentGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferIntentGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferLedgerDeposit(t, n) {
			return e.PlaidApiFp(this.configuration).transferLedgerDeposit(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferLedgerDistribute(t, n) {
			return e.PlaidApiFp(this.configuration).transferLedgerDistribute(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferLedgerEventList(t, n) {
			return e.PlaidApiFp(this.configuration).transferLedgerEventList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferLedgerGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferLedgerGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferLedgerWithdraw(t, n) {
			return e.PlaidApiFp(this.configuration).transferLedgerWithdraw(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferList(t, n) {
			return e.PlaidApiFp(this.configuration).transferList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferMetricsGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferMetricsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferMigrateAccount(t, n) {
			return e.PlaidApiFp(this.configuration).transferMigrateAccount(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferOriginatorCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferOriginatorCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferOriginatorFundingAccountCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferOriginatorFundingAccountCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferOriginatorFundingAccountUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).transferOriginatorFundingAccountUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferOriginatorGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferOriginatorGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferOriginatorList(t, n) {
			return e.PlaidApiFp(this.configuration).transferOriginatorList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferPlatformOriginatorCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferPlatformOriginatorCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferPlatformPersonCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferPlatformPersonCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferPlatformRequirementSubmit(t, n) {
			return e.PlaidApiFp(this.configuration).transferPlatformRequirementSubmit(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferQuestionnaireCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferQuestionnaireCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRecurringCancel(t, n) {
			return e.PlaidApiFp(this.configuration).transferRecurringCancel(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRecurringCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferRecurringCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRecurringGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferRecurringGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRecurringList(t, n) {
			return e.PlaidApiFp(this.configuration).transferRecurringList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRefundCancel(t, n) {
			return e.PlaidApiFp(this.configuration).transferRefundCancel(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRefundCreate(t, n) {
			return e.PlaidApiFp(this.configuration).transferRefundCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRefundGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferRefundGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRepaymentList(t, n) {
			return e.PlaidApiFp(this.configuration).transferRepaymentList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferRepaymentReturnList(t, n) {
			return e.PlaidApiFp(this.configuration).transferRepaymentReturnList(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferSweepGet(t, n) {
			return e.PlaidApiFp(this.configuration).transferSweepGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		transferSweepList(t, n) {
			return e.PlaidApiFp(this.configuration).transferSweepList(t, n).then((e) => e(this.axios, this.basePath));
		}
		userAccountSessionEventSend(t, n) {
			return e.PlaidApiFp(this.configuration).userAccountSessionEventSend(t, n).then((e) => e(this.axios, this.basePath));
		}
		userAccountSessionGet(t, n) {
			return e.PlaidApiFp(this.configuration).userAccountSessionGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		userCreate(t, n, r) {
			return e.PlaidApiFp(this.configuration).userCreate(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		userFinancialDataRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).userFinancialDataRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		userGet(t, n, r) {
			return e.PlaidApiFp(this.configuration).userGet(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		userIdentityRemove(t, n, r) {
			return e.PlaidApiFp(this.configuration).userIdentityRemove(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		userItemsAssociate(t, n) {
			return e.PlaidApiFp(this.configuration).userItemsAssociate(t, n).then((e) => e(this.axios, this.basePath));
		}
		userItemsGet(t, n) {
			return e.PlaidApiFp(this.configuration).userItemsGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		userItemsRemove(t, n) {
			return e.PlaidApiFp(this.configuration).userItemsRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		userProductsTerminate(t, n) {
			return e.PlaidApiFp(this.configuration).userProductsTerminate(t, n).then((e) => e(this.axios, this.basePath));
		}
		userRemove(t, n, r) {
			return e.PlaidApiFp(this.configuration).userRemove(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		userThirdPartyTokenCreate(t, n) {
			return e.PlaidApiFp(this.configuration).userThirdPartyTokenCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		userThirdPartyTokenRemove(t, n) {
			return e.PlaidApiFp(this.configuration).userThirdPartyTokenRemove(t, n).then((e) => e(this.axios, this.basePath));
		}
		userTransactionsRefresh(t, n) {
			return e.PlaidApiFp(this.configuration).userTransactionsRefresh(t, n).then((e) => e(this.axios, this.basePath));
		}
		userUpdate(t, n, r) {
			return e.PlaidApiFp(this.configuration).userUpdate(t, n, r).then((e) => e(this.axios, this.basePath));
		}
		walletCreate(t, n) {
			return e.PlaidApiFp(this.configuration).walletCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		walletGet(t, n) {
			return e.PlaidApiFp(this.configuration).walletGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		walletList(t, n) {
			return e.PlaidApiFp(this.configuration).walletList(t, n).then((e) => e(this.axios, this.basePath));
		}
		walletTransactionExecute(t, n) {
			return e.PlaidApiFp(this.configuration).walletTransactionExecute(t, n).then((e) => e(this.axios, this.basePath));
		}
		walletTransactionGet(t, n) {
			return e.PlaidApiFp(this.configuration).walletTransactionGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		walletTransactionList(t, n) {
			return e.PlaidApiFp(this.configuration).walletTransactionList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityCreate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityGet(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityHistoryList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityHistoryList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityHitList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityHitList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityProgramGet(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityProgramGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityProgramList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityProgramList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityReviewCreate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityReviewCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityReviewList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityReviewList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningEntityUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningEntityUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualCreate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualGet(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualHistoryList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualHistoryList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualHitList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualHitList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualProgramGet(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualProgramGet(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualProgramList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualProgramList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualReviewCreate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualReviewCreate(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualReviewList(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualReviewList(t, n).then((e) => e(this.axios, this.basePath));
		}
		watchlistScreeningIndividualUpdate(t, n) {
			return e.PlaidApiFp(this.configuration).watchlistScreeningIndividualUpdate(t, n).then((e) => e(this.axios, this.basePath));
		}
		webhookVerificationKeyGet(t, n) {
			return e.PlaidApiFp(this.configuration).webhookVerificationKeyGet(t, n).then((e) => e(this.axios, this.basePath));
		}
	};
})), Uo = /* @__PURE__ */ c(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.Configuration = e.PlaidEnvironments = void 0, e.PlaidEnvironments = {
		production: "https://production.plaid.com",
		sandbox: "https://sandbox.plaid.com"
	}, e.Configuration = class {
		constructor(e = {}) {
			this.apiKey = e.apiKey, this.username = e.username, this.password = e.password, this.accessToken = e.accessToken, this.basePath = e.basePath, this.baseOptions = e.baseOptions, this.formDataCtor = e.formDataCtor, this.baseOptions ||= {}, this.baseOptions.headers || (this.baseOptions.headers = {}), this.baseOptions.headers = Object.assign({
				"User-Agent": "Plaid Node v41.4.0",
				"Plaid-Version": "2020-09-14"
			}, this.baseOptions.headers);
		}
		isJsonMime(e) {
			return e !== null && ((/* @__PURE__ */ RegExp("^(application/json|[^;/ 	]+/[^;/ 	]+[+]json)[ 	]*(;.*)?$", "i")).test(e) || e.toLowerCase() === "application/json-patch+json");
		}
	};
})), Wo = (/* @__PURE__ */ c(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n), Object.defineProperty(e, r, {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		});
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), n(Ho(), e), n(Uo(), e);
})))(), Go = new Wo.Configuration({
	basePath: Wo.PlaidEnvironments[process.env.PLAID_ENV || "sandbox"],
	baseOptions: { headers: {
		"PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
		"PLAID-SECRET": process.env.PLAID_SECRET
	} }
}), Ko = new Wo.PlaidApi(Go);
async function qo(e, t) {
	return (await Ko.processorTokenCreate({
		access_token: e,
		account_id: t,
		processor: "stripe"
	})).data.processor_token;
}
async function Jo(e, t, n) {
	try {
		let r = (await Ko.accountsBalanceGet({ access_token: e })).data.accounts.find((e) => e.account_id === t);
		return !r || !r.balances.available ? {
			risk: "UNKNOWN",
			available: null
		} : r.balances.available < n ? {
			risk: "HIGH",
			available: r.balances.available
		} : {
			risk: "LOW",
			available: r.balances.available
		};
	} catch (e) {
		return console.error("Plaid checkBalance error:", e), {
			risk: "UNKNOWN",
			available: null
		};
	}
}
//#endregion
//#region src/lib/strategies/usa.ts
var Yo = class {
	stripe;
	constructor() {
		this.stripe = new Fo(process.env.STRIPE_SECRET_KEY, { apiVersion: "2026-02-25.clover" });
	}
	async initializePayment(e) {
		let n = Math.round(e.amount * 100), r = await t.tenantPaymentMethod.findFirst({ where: {
			userId: e.user.id,
			type: "ACH",
			isDefault: !0
		} });
		if (r && r.plaidAccessToken && r.plaidAccountId) try {
			if ((await Jo(r.plaidAccessToken, r.plaidAccountId, e.amount)).risk === "HIGH") throw Error("Insufficient funds in linked bank account.");
			let t = {
				amount: n,
				currency: "usd",
				customer: e.user.stripeCustomerId,
				payment_method: r.stripePaymentMethodId,
				off_session: !0,
				confirm: !0,
				metadata: {
					invoiceId: e.invoiceId,
					userId: e.user.id
				}
			};
			e.organization.stripeConnectId && (t.transfer_data = { destination: e.organization.stripeConnectId });
			let i = await this.stripe.paymentIntents.create(t);
			return {
				transactionId: i.id,
				status: m.TransactionStatus.PENDING,
				gateway: m.PaymentGateway.STRIPE,
				rawResponse: i
			};
		} catch (e) {
			console.warn("ACH Payment failed, falling back to Card:", e);
		}
		let i = {
			amount: n,
			currency: "usd",
			metadata: {
				invoiceId: e.invoiceId,
				userId: e.user.id
			},
			automatic_payment_methods: { enabled: !0 }
		};
		e.organization.stripeConnectId && (i.transfer_data = { destination: e.organization.stripeConnectId });
		let a = await this.stripe.paymentIntents.create(i);
		return {
			transactionId: a.id,
			status: m.TransactionStatus.PENDING,
			gateway: m.PaymentGateway.STRIPE,
			clientSecret: a.client_secret,
			rawResponse: a
		};
	}
	async verifyTransaction(e) {
		return {};
	}
}, Xo = class {
	static getStrategy(e) {
		return new Yo();
	}
}, Q = /* @__PURE__ */ function(e) {
	return e.NETWORK_ERROR = "NETWORK_ERROR", e.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", e.VALIDATION_ERROR = "VALIDATION_ERROR", e.PAYMENT_GATEWAY_ERROR = "PAYMENT_GATEWAY_ERROR", e.FRAUD_DETECTED = "FRAUD_DETECTED", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.TIMEOUT_ERROR = "TIMEOUT_ERROR", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e;
}({}), Zo = class e extends Error {
	constructor(e, t, n = {}) {
		super(t), this.type = e, this.options = n, this.name = "PaymentError";
	}
	get userMessage() {
		return this.options.userMessage || this.getDefaultUserMessage();
	}
	get retryable() {
		return this.options.retryable ?? this.isRetryableByDefault();
	}
	get shouldAlert() {
		return this.options.shouldAlert ?? this.shouldAlertByDefault();
	}
	getDefaultUserMessage() {
		return {
			[Q.NETWORK_ERROR]: "A network error occurred. Please check your connection and try again.",
			[Q.AUTHENTICATION_ERROR]: "Payment authentication failed. Please try again or contact support.",
			[Q.VALIDATION_ERROR]: "Please check your payment information and try again.",
			[Q.PAYMENT_GATEWAY_ERROR]: "The payment service is temporarily unavailable. Please try again later.",
			[Q.FRAUD_DETECTED]: "This transaction has been flagged for security review. Please contact support.",
			[Q.INSUFFICIENT_FUNDS]: "Insufficient funds. Please check your account balance.",
			[Q.TIMEOUT_ERROR]: "The payment request timed out. Please try again.",
			[Q.UNKNOWN_ERROR]: "An unexpected error occurred. Please try again or contact support."
		}[this.type];
	}
	isRetryableByDefault() {
		return [
			Q.NETWORK_ERROR,
			Q.TIMEOUT_ERROR,
			Q.PAYMENT_GATEWAY_ERROR
		].includes(this.type);
	}
	shouldAlertByDefault() {
		return [
			Q.FRAUD_DETECTED,
			Q.AUTHENTICATION_ERROR,
			Q.PAYMENT_GATEWAY_ERROR
		].includes(this.type);
	}
	toJSON() {
		return {
			type: this.type,
			message: this.message,
			userMessage: this.userMessage,
			retryable: this.retryable,
			gateway: this.options.gateway,
			transactionId: this.options.transactionId,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		};
	}
	static createNetworkError(t, n) {
		return new e(Q.NETWORK_ERROR, t, {
			userMessage: "Network connection failed. Please check your internet connection and try again.",
			retryable: !0,
			gateway: n
		});
	}
	static createAuthenticationError(t, n) {
		return new e(Q.AUTHENTICATION_ERROR, t, {
			userMessage: "Payment authentication failed. Please check your payment details or contact support.",
			retryable: !1,
			gateway: n,
			shouldAlert: !0
		});
	}
	static createValidationError(t, n) {
		return new e(Q.VALIDATION_ERROR, t, {
			userMessage: n ? `Please check the ${n} field and try again.` : "Please check your payment information and try again.",
			retryable: !1
		});
	}
	static createFraudError(t, n) {
		return new e(Q.FRAUD_DETECTED, t, {
			userMessage: "This transaction has been flagged for security review. Please contact support if you believe this is an error.",
			retryable: !1,
			shouldAlert: !0,
			technicalDetails: n
		});
	}
	static createInsufficientFundsError(t) {
		return new e(Q.INSUFFICIENT_FUNDS, t, {
			userMessage: "Insufficient funds. Please check your account balance and try again.",
			retryable: !1
		});
	}
}, Qo = {
	maxAttempts: 3,
	baseDelay: 1e3,
	backoffMultiplier: 2,
	maxDelay: 1e4,
	retryableErrorTypes: [
		Q.NETWORK_ERROR,
		Q.TIMEOUT_ERROR,
		Q.PAYMENT_GATEWAY_ERROR
	]
}, $o = class e {
	static instance;
	retryConfig;
	constructor(e = Qo) {
		this.retryConfig = e;
	}
	static getInstance(t) {
		return e.instance ||= new e(t), e.instance;
	}
	async withRetry(e, t, n) {
		let r = {
			...this.retryConfig,
			...n
		}, i;
		for (let n = 1; n <= r.maxAttempts; n++) try {
			return await e();
		} catch (e) {
			i = e;
			let a = this.normalizeError(e, t);
			if (n < r.maxAttempts && a.retryable && r.retryableErrorTypes.includes(a.type)) {
				let e = this.calculateDelay(n, r);
				console.warn(`Payment operation failed (attempt ${n}/${r.maxAttempts}), retrying in ${e}ms:`, {
					context: t,
					error: a.message,
					type: a.type,
					retryable: a.retryable
				}), await this.sleep(e);
				continue;
			}
			throw this.logError(a, t, n), a;
		}
		throw i;
	}
	normalizeError(e, t) {
		if (e instanceof Zo) return e;
		let n = e, r = n.message || "Unknown error", i = Q.UNKNOWN_ERROR, a, o = !1;
		return r.includes("network") || r.includes("fetch") || r.includes("connection") ? (i = Q.NETWORK_ERROR, o = !0) : r.includes("timeout") || r.includes("timed out") ? (i = Q.TIMEOUT_ERROR, o = !0) : r.includes("auth") || r.includes("unauthorized") || r.includes("invalid credentials") ? i = Q.AUTHENTICATION_ERROR : r.includes("invalid") || r.includes("validation") || r.includes("required") ? i = Q.VALIDATION_ERROR : r.includes("paystack") || r.includes("stripe") || r.includes("mpesa") || r.includes("gateway") ? (i = Q.PAYMENT_GATEWAY_ERROR, o = !0, r.toLowerCase().includes("paystack") ? a = m.PaymentGateway.PAYSTACK : r.toLowerCase().includes("stripe") ? a = m.PaymentGateway.STRIPE : r.toLowerCase().includes("mpesa") && (a = m.PaymentGateway.MPESA_DIRECT)) : r.includes("fraud") || r.includes("suspicious") ? i = Q.FRAUD_DETECTED : (r.includes("insufficient") || r.includes("funds")) && (i = Q.INSUFFICIENT_FUNDS), new Zo(i, r, {
			userMessage: this.getUserErrorMessage(i, t),
			retryable: o,
			gateway: a,
			technicalDetails: {
				originalError: r,
				stack: n.stack,
				context: t
			}
		});
	}
	getUserErrorMessage(e, t) {
		let n = new Zo(e, "").userMessage;
		return t.includes("initialization") || t.includes("initialize") ? `Failed to start payment: ${n.toLowerCase()}` : t.includes("verification") || t.includes("verify") ? `Failed to verify payment: ${n.toLowerCase()}` : n;
	}
	calculateDelay(e, t) {
		let n = t.baseDelay * t.backoffMultiplier ** (e - 1);
		return Math.min(n, t.maxDelay);
	}
	async sleep(e) {
		return new Promise((t) => setTimeout(t, e));
	}
	logError(e, t, n) {
		let r = e.shouldAlert ? "error" : "warn";
		console[r](`Payment operation failed after ${n} attempt(s):`, {
			context: t,
			errorType: e.type,
			message: e.message,
			userMessage: e.userMessage,
			retryable: e.retryable,
			gateway: e.options.gateway,
			transactionId: e.options.transactionId,
			shouldAlert: e.shouldAlert,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		}), e.shouldAlert && this.sendAlert(e, t);
	}
	sendAlert(e, t) {
		console.error("ALERT: Payment error requiring attention:", {
			errorType: e.type,
			context: t,
			message: e.message,
			gateway: e.options.gateway,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
}, es = $o.getInstance(), ts = class {
	rules = [];
	constructor() {
		this.initializeDefaultRules();
	}
	initializeDefaultRules() {
		this.rules = [
			{
				name: "AMOUNT_THRESHOLD",
				description: "Check if transaction amount exceeds typical limits",
				check: this.checkAmountThreshold.bind(this),
				severity: "MEDIUM",
				enabled: !0
			},
			{
				name: "RAPID_SUCCESSIVE_TRANSACTIONS",
				description: "Detect multiple transactions in short time period",
				check: this.checkRapidTransactions.bind(this),
				severity: "HIGH",
				enabled: !0
			},
			{
				name: "UNUSUAL_TIME",
				description: "Check if transaction occurs at unusual hours",
				check: this.checkUnusualTime.bind(this),
				severity: "LOW",
				enabled: !0
			},
			{
				name: "EMAIL_DOMAIN_VALIDATION",
				description: "Validate email domain for suspicious patterns",
				check: this.checkEmailDomain.bind(this),
				severity: "LOW",
				enabled: !0
			},
			{
				name: "IP_GEO_LOCATION",
				description: "Check if IP location matches user profile region",
				check: this.checkIpLocation.bind(this),
				severity: "MEDIUM",
				enabled: !1
			},
			{
				name: "DEVICE_FINGERPRINT",
				description: "Check for unusual device patterns",
				check: this.checkDeviceFingerprint.bind(this),
				severity: "MEDIUM",
				enabled: !1
			},
			{
				name: "CURRENCY_MISMATCH",
				description: "Check if currency matches user/organization region",
				check: this.checkCurrencyMismatch.bind(this),
				severity: "LOW",
				enabled: !0
			},
			{
				name: "AVS_CHECK",
				description: "Address Verification System check (if applicable)",
				check: this.checkAvs.bind(this),
				severity: "HIGH",
				enabled: !1
			},
			{
				name: "BLACKLIST_CHECK",
				description: "Check against known fraudster lists",
				check: this.checkBlacklist.bind(this),
				severity: "CRITICAL",
				enabled: !1
			}
		];
	}
	async checkPayment(e, t) {
		let n = [], r = 0, i = 0, a = 0;
		for (let o of this.rules) if (o.enabled) {
			i++;
			try {
				let i = await o.check(e, t);
				n.push(i), i.passed || (a++, r += i.score * this.getSeverityMultiplier(o.severity));
			} catch (e) {
				console.warn(`Fraud rule ${o.name} execution failed:`, e);
			}
		}
		let o = Math.min(100, r), s = this.getRecommendation(o, a);
		return {
			transactionId: e.invoiceId,
			overallScore: o,
			passed: s === "ALLOW",
			rulesChecked: i,
			rulesFailed: a,
			results: n,
			timestamp: /* @__PURE__ */ new Date(),
			recommendation: s
		};
	}
	getRecommendation(e, t) {
		return t === 0 ? "ALLOW" : e >= 80 ? "BLOCK" : e >= 50 ? "REVIEW" : "ALLOW";
	}
	getSeverityMultiplier(e) {
		switch (e) {
			case "LOW": return .5;
			case "MEDIUM": return 1;
			case "HIGH": return 2;
			case "CRITICAL": return 5;
		}
	}
	async checkAmountThreshold(e, t) {
		let n = 5e5, r = e.amount, i = e.currency, a = !0, o = 0, s = `Amount ${r} ${i} is within typical limits`;
		return r > n ? (a = !1, o = 70, s = `Amount ${r} ${i} exceeds typical maximum (${n} ${i})`) : r > n * .8 && (a = !1, o = 40, s = `Amount ${r} ${i} is approaching typical maximum`), r < 10 && (a = !1, o = Math.max(o, 30), s = `Small transaction amount ${r} ${i} detected`), {
			passed: a,
			ruleName: "AMOUNT_THRESHOLD",
			severity: "MEDIUM",
			message: s,
			details: {
				amount: r,
				currency: i,
				typicalMaxAmount: n
			},
			score: o
		};
	}
	async checkRapidTransactions(e, t) {
		let n = t.previousTransactions.filter((e) => Date.now() - e.timestamp.getTime() < 300 * 1e3), r = n.length < 3, i = Math.min(100, n.length * 25);
		return {
			passed: r,
			ruleName: "RAPID_SUCCESSIVE_TRANSACTIONS",
			severity: "HIGH",
			message: r ? `User has ${n.length} recent transactions (acceptable)` : `User has ${n.length} recent transactions in last 5 minutes (suspicious)`,
			details: {
				recentTransactionCount: n.length,
				timeWindow: "5 minutes",
				transactionIds: n.map((e) => e.id)
			},
			score: i
		};
	}
	async checkUnusualTime(e, t) {
		let n = /* @__PURE__ */ new Date(), r = n.getHours(), i = r < 8 || r > 20, a = !i, o = 0, s = `Transaction time ${r}:00 is within normal hours`;
		i && (a = !1, o = 30, s = `Transaction time ${r}:00 is outside normal business hours (8 AM - 8 PM)`);
		let c = n.getDay() === 0 || n.getDay() === 6;
		return c && (a = !1, o = Math.max(o, 20), s = `${s} and occurs on a weekend`), {
			passed: a,
			ruleName: "UNUSUAL_TIME",
			severity: "LOW",
			message: s,
			details: {
				hour: r,
				isWeekend: c,
				timestamp: n.toISOString()
			},
			score: o
		};
	}
	async checkEmailDomain(e, t) {
		let n = e.user.email.toLowerCase(), r = n.split("@")[1] || "", i = [
			"tempmail.com",
			"guerrillamail.com",
			"mailinator.com",
			"10minutemail.com",
			"yopmail.com",
			"trashmail.com",
			"dispostable.com",
			"fakeinbox.com",
			"throwawaymail.com",
			"temp-mail.org"
		], a = [
			"gmail.com",
			"yahoo.com",
			"hotmail.com",
			"outlook.com",
			"aol.com",
			"protonmail.com",
			"zoho.com",
			"mail.com",
			"yandex.com"
		], o = !0, s = 0, c = `Email domain ${r} appears legitimate`;
		i.includes(r) ? (o = !1, s = 80, c = `Email domain ${r} is associated with disposable/temporary email services`) : a.includes(r) && (o = !1, s = 20, c = `Email domain ${r} is a free/public email service`);
		for (let e of [
			/^\d+@/,
			/test/,
			/fake/,
			/temp/
		]) if (e.test(n)) {
			o = !1, s = Math.max(s, 40), c = `Email contains suspicious pattern: ${e}`;
			break;
		}
		return {
			passed: o,
			ruleName: "EMAIL_DOMAIN_VALIDATION",
			severity: "LOW",
			message: c,
			details: {
				email: n,
				domain: r,
				isSuspiciousDomain: i.includes(r)
			},
			score: s
		};
	}
	async checkIpLocation(e, t) {
		return {
			passed: !0,
			ruleName: "IP_GEO_LOCATION",
			severity: "MEDIUM",
			message: "IP geolocation check not enabled",
			details: { note: "Requires IP geolocation service integration" },
			score: 0
		};
	}
	async checkDeviceFingerprint(e, t) {
		return {
			passed: !0,
			ruleName: "DEVICE_FINGERPRINT",
			severity: "MEDIUM",
			message: "Device fingerprint check not enabled",
			details: { note: "Requires device fingerprinting integration" },
			score: 0
		};
	}
	async checkCurrencyMismatch(e, t) {
		let n = e.user.region, r = e.organization.region, i = e.currency, a = {
			KEN: "KES",
			USA: "USD",
			GBR: "GBP",
			EUR: "EUR"
		}, o = r || "", s = n || "", c = a[o] || a[s] || "KES", l = i === c, u = l ? 0 : 40;
		return {
			passed: l,
			ruleName: "CURRENCY_MISMATCH",
			severity: "LOW",
			message: l ? `Currency ${i} matches expected currency for region` : `Currency ${i} does not match expected currency ${c} for region ${r || n || "unknown"}`,
			details: {
				userRegion: n,
				organizationRegion: r,
				transactionCurrency: i,
				expectedCurrency: c
			},
			score: u
		};
	}
	async checkAvs(e, t) {
		return {
			passed: !0,
			ruleName: "AVS_CHECK",
			severity: "HIGH",
			message: "AVS check not enabled",
			details: { note: "Requires AVS integration with payment gateway" },
			score: 0
		};
	}
	async checkBlacklist(e, t) {
		return {
			passed: !0,
			ruleName: "BLACKLIST_CHECK",
			severity: "CRITICAL",
			message: "Blacklist check not enabled",
			details: { note: "Requires blacklist database integration" },
			score: 0
		};
	}
	setRuleEnabled(e, t) {
		let n = this.rules.find((t) => t.name === e);
		n && (n.enabled = t);
	}
	getRules() {
		return [...this.rules];
	}
	addRule(e) {
		this.rules.push(e);
	}
	removeRule(e) {
		this.rules = this.rules.filter((t) => t.name !== e);
	}
}, ns = new ts();
async function rs(e, t) {
	let n = {
		userId: e.user.id,
		userEmail: e.user.email,
		previousTransactions: [],
		organizationId: e.organization.id,
		timestamp: /* @__PURE__ */ new Date(),
		...t
	}, r = await ns.checkPayment(e, n);
	switch (console.log("Fraud Detection Report:", {
		transactionId: r.transactionId,
		overallScore: r.overallScore,
		recommendation: r.recommendation,
		rulesChecked: r.rulesChecked,
		rulesFailed: r.rulesFailed
	}), r.recommendation) {
		case "BLOCK": throw Zo.createFraudError(`Transaction blocked by fraud detection: overall score ${r.overallScore}`, r);
		case "REVIEW":
			console.warn("Transaction flagged for manual review:", {
				transactionId: r.transactionId,
				score: r.overallScore,
				failedRules: r.results.filter((e) => !e.passed).map((e) => e.ruleName)
			});
			break;
		case "ALLOW": break;
	}
}
//#endregion
//#region src/lib/encryption-utils.ts
var is = /* @__PURE__ */ d((/* @__PURE__ */ c(((e, t) => {
	t.exports = {};
})))()), $ = /* @__PURE__ */ function(e) {
	return e.PAYMENT_METADATA = "PAYMENT_METADATA", e.USER_INFO = "USER_INFO", e.TRANSACTION_DETAILS = "TRANSACTION_DETAILS", e.WEBHOOK_PAYLOAD = "WEBHOOK_PAYLOAD", e;
}({}), as = {
	algorithm: "aes-256-gcm",
	keyLength: 32,
	ivLength: 16,
	authTagLength: 16,
	encoding: "base64"
}, os = class extends Error {
	constructor(e, t, n, r) {
		super(e), this.purpose = t, this.operation = n, this.cause = r, this.name = "PaymentEncryptionError";
	}
}, ss = class e {
	static instance;
	config;
	keyCache = /* @__PURE__ */ new Map();
	constructor(e = as) {
		this.config = e;
	}
	static getInstance(t) {
		return e.instance ||= new e(t), e.instance;
	}
	getKey(e) {
		let t = this.getEnvKeyName(e), n = process.env[t];
		if (!n) throw new os(`Encryption key not configured for purpose: ${e}. Set ${t} environment variable.`, e, "key_validation");
		let r = `${e}:${n}`;
		if (this.keyCache.has(r)) return this.keyCache.get(r);
		try {
			let t = Buffer.from(n, this.config.encoding);
			if (t.length !== this.config.keyLength) throw new os(`Invalid key length for ${e}. Expected ${this.config.keyLength} bytes, got ${t.length}.`, e, "key_validation");
			return this.keyCache.set(r, t), t;
		} catch (t) {
			throw t instanceof os ? t : new os(`Invalid key format for ${e}. Key must be ${this.config.encoding} encoded.`, e, "key_validation", t);
		}
	}
	getEnvKeyName(e) {
		let t = "PAYMENT_ENCRYPTION_KEY";
		switch (e) {
			case $.PAYMENT_METADATA: return `${t}_METADATA`;
			case $.USER_INFO: return `${t}_USER_INFO`;
			case $.TRANSACTION_DETAILS: return `${t}_TRANSACTION`;
			case $.WEBHOOK_PAYLOAD: return `${t}_WEBHOOK`;
			default: return `${t}_DEFAULT`;
		}
	}
	encrypt(e, t) {
		try {
			let n = typeof e == "string" ? e : JSON.stringify(e);
			if (!n || n.trim().length === 0) throw Error("Data to encrypt cannot be empty");
			let r = this.getKey(t), i = is.default.randomBytes(this.config.ivLength), a = is.default.createCipheriv(this.config.algorithm, r, i), o = a.update(n, "utf8", "hex");
			o += a.final("hex");
			let s = a.getAuthTag();
			return `${t.substring(0, 3).toUpperCase()}:${i.toString("hex")}:${o}:${s.toString("hex")}`;
		} catch (e) {
			throw e instanceof os ? e : new os(`Failed to encrypt ${t} data: ${e instanceof Error ? e.message : "Unknown error"}`, t, "encrypt", e);
		}
	}
	decrypt(e, t) {
		try {
			if (!e || typeof e != "string") throw Error("Encrypted string must be a non-empty string");
			let n = e.split(":");
			if (n.length !== 4) throw Error("Invalid encrypted string format. Expected purpose:iv:ciphertext:authTag");
			let [r, i, a, o] = n, s;
			s = t || this.getPurposeFromPrefix(r);
			let c = this.getKey(s), l = Buffer.from(i, "hex"), u = Buffer.from(o, "hex");
			if (l.length !== this.config.ivLength) throw Error(`Invalid IV length: expected ${this.config.ivLength} bytes, got ${l.length}`);
			if (u.length !== this.config.authTagLength) throw Error(`Invalid auth tag length: expected ${this.config.authTagLength} bytes, got ${u.length}`);
			let d = is.default.createDecipheriv(this.config.algorithm, c, l);
			d.setAuthTag(u);
			let f = d.update(a, "hex", "utf8");
			return f += d.final("utf8"), f;
		} catch (e) {
			throw e instanceof os ? e : new os(`Failed to decrypt data: ${e instanceof Error ? e.message : "Unknown error"}`, t || $.PAYMENT_METADATA, "decrypt", e);
		}
	}
	decryptJson(e, t) {
		let n = this.decrypt(e, t);
		try {
			return JSON.parse(n);
		} catch (e) {
			throw new os(`Failed to parse decrypted JSON: ${e instanceof Error ? e.message : "Unknown error"}`, t || $.PAYMENT_METADATA, "decrypt", e);
		}
	}
	getPurposeFromPrefix(e) {
		let t = {
			PAY: $.PAYMENT_METADATA,
			USE: $.USER_INFO,
			TRA: $.TRANSACTION_DETAILS,
			WEB: $.WEBHOOK_PAYLOAD
		}[e.toUpperCase()];
		if (!t) throw Error(`Unknown encryption purpose prefix: ${e}`);
		return t;
	}
	isEncrypted(e) {
		if (!e || typeof e != "string") return !1;
		try {
			let t = e.split(":");
			if (t.length !== 4) return !1;
			let [n, r, i, a] = t;
			return !(!/^[A-Z]{3}$/.test(n) || !/^[0-9a-fA-F]+$/.test(r) || !/^[0-9a-fA-F]+$/.test(i) || !/^[0-9a-fA-F]+$/.test(a) || Buffer.from(r, "hex").length !== this.config.ivLength);
		} catch {
			return !1;
		}
	}
	encryptObjectFields(e, t, n = $.PAYMENT_METADATA) {
		let r = { ...e };
		for (let e of t) if (e in r && r[e] != null) {
			let t = r[e];
			if (typeof t == "string" || typeof t == "object" && t) {
				if (typeof t == "string" && this.isEncrypted(t)) continue;
				try {
					r[e] = this.encrypt(t, n);
				} catch (t) {
					console.warn(`Failed to encrypt field ${e}:`, t);
				}
			}
		}
		return r;
	}
	decryptObjectFields(e, t, n) {
		let r = { ...e };
		for (let e of t) if (e in r && r[e] != null) {
			let t = r[e];
			if (typeof t == "string" && this.isEncrypted(t)) try {
				r[e] = this.decrypt(t, n);
				let i = r[e];
				if (typeof i == "string" && (i.startsWith("{") || i.startsWith("["))) try {
					r[e] = JSON.parse(i);
				} catch {}
			} catch (t) {
				console.warn(`Failed to decrypt field ${e}:`, t);
			}
		}
		return r;
	}
	static generateKey() {
		return is.default.randomBytes(as.keyLength).toString(as.encoding);
	}
	static generateKeys() {
		return {
			[$.PAYMENT_METADATA]: this.generateKey(),
			[$.USER_INFO]: this.generateKey(),
			[$.TRANSACTION_DETAILS]: this.generateKey(),
			[$.WEBHOOK_PAYLOAD]: this.generateKey()
		};
	}
	clearCache() {
		this.keyCache.clear();
	}
}, cs = ss.getInstance(), ls = {
	encryptMetadata(e) {
		return cs.encrypt(e, $.PAYMENT_METADATA);
	},
	decryptMetadata(e) {
		return cs.decryptJson(e, $.PAYMENT_METADATA);
	},
	encryptUserInfo(e) {
		return cs.encrypt(e, $.USER_INFO);
	},
	decryptUserInfo(e) {
		return cs.decryptJson(e, $.USER_INFO);
	},
	encryptTransactionDetails(e) {
		return cs.encrypt(e, $.TRANSACTION_DETAILS);
	},
	decryptTransactionDetails(e) {
		return cs.decryptJson(e, $.TRANSACTION_DETAILS);
	},
	generateEnvironmentKeys() {
		let e = ss.generateKeys();
		return Object.entries(e).map(([e, t]) => `${cs.getEnvKeyName(e)}=${t}`).join("\n");
	}
}, us = class {
	constructor() {
		(!process.env.MPESA_CONSUMER_KEY || !process.env.MPESA_CONSUMER_SECRET) && console.warn("M-Pesa credentials not fully configured");
	}
	async getAccessToken() {
		let e = process.env.MPESA_CONSUMER_KEY, t = process.env.MPESA_CONSUMER_SECRET;
		if (!e || !t) throw Error("M-Pesa authentication failed: Missing credentials");
		let n = Buffer.from(`${e}:${t}`).toString("base64"), r = `https://${process.env.MPESA_ENV === "production" ? "api" : "sandbox"}.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`;
		try {
			let e = await fetch(r, {
				method: "GET",
				headers: { Authorization: `Basic ${n}` }
			}), t = await e.json();
			if (!e.ok || !t?.access_token) {
				let e = t?.errorMessage || t?.error || "Unknown error";
				throw Error(`M-Pesa authentication failed: ${e}`);
			}
			return t.access_token;
		} catch (e) {
			let t = e instanceof Error ? e.message : "Unknown error";
			throw t.startsWith("M-Pesa authentication failed:") ? e : Error(`M-Pesa authentication failed: ${t}`);
		}
	}
	async initializePayment(e) {
		throw Error("M-Pesa STK Push is not enabled in this deployment");
	}
	async verifyTransaction(e) {
		return {
			transactionId: e,
			status: m.TransactionStatus.PENDING,
			gateway: m.PaymentGateway.MPESA_DIRECT,
			rawResponse: { message: "Verification not implemented in compatibility strategy" }
		};
	}
}, ds = new m.PrismaClient();
async function fs(e) {
	let t = new Io(), { webhookEventId: n, stripeEventId: r } = e.data, i = e.name;
	console.log(`[Stripe Worker] Starting job ${e.id} (attempt ${e.attemptsMade + 1}) for ${i}`), await ds.webhookEvent.update({
		where: { id: n },
		data: {
			status: "PROCESSING",
			retryCount: { increment: 1 }
		}
	});
	try {
		let a = await ds.webhookEvent.findUnique({ where: { id: n } });
		if (!a) throw Error(`Webhook event ${n} not found`);
		let o = a.payload;
		i && o.type !== i && console.warn(`[Stripe Worker] Event type mismatch for ${n}: job=${i}, payload=${o.type}`), await t.processEvent(o), await ds.webhookEvent.update({
			where: { id: n },
			data: { status: "PROCESSED" }
		}), console.log(`[Stripe Worker] Completed job ${e.id} for ${i} (${r ?? "no-stripe-id"})`);
	} catch (t) {
		let r = t instanceof Error ? t.message : "Unknown error";
		throw console.error(`[Stripe Worker] Failed job ${e.id} for ${i}: ${r}`, t), await ds.webhookEvent.update({
			where: { id: n },
			data: {
				status: "FAILED",
				processingError: r
			}
		}), t;
	}
}
//#endregion
var ps = m.PaymentGateway, ms = m.TransactionStatus;
export { Qo as DEFAULT_RETRY_CONFIG, $ as EncryptionPurpose, ts as FraudDetectionService, us as KenyaPaymentStrategy, us as MpesaPaymentStrategy, os as PaymentEncryptionError, ss as PaymentEncryptionUtils, Zo as PaymentError, $o as PaymentErrorHandler, Q as PaymentErrorType, Xo as PaymentFactory, ps as PaymentGateway, Ro as Payments, Io as SubscriptionService, ms as TransactionStatus, Yo as UsaPaymentStrategy, g as UsageService, Jo as checkBalance, rs as checkForFraud, qo as createStripeBankAccountToken, ns as fraudDetectionService, ls as paymentEncryption, cs as paymentEncryptionUtils, es as paymentErrorHandler, Ko as plaidClient, fs as processStripeWebhookJob };
