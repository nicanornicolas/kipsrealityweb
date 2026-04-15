import { jsx as e } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var t = Object.create, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.getPrototypeOf, o = Object.prototype.hasOwnProperty, s = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), c = (e, t, a, s) => {
	if (t && typeof t == "object" || typeof t == "function") for (var c = i(t), l = 0, u = c.length, d; l < u; l++) d = c[l], !o.call(e, d) && d !== a && n(e, d, {
		get: ((e) => t[e]).bind(null, d),
		enumerable: !(s = r(t, d)) || s.enumerable
	});
	return e;
}, l = (e, r, i) => (i = e == null ? {} : t(a(e)), c(r || !e || !e.__esModule ? n(i, "default", {
	value: e,
	enumerable: !0
}) : i, e)), u = {};
//#endregion
//#region src/lib/iam.tsx
function d() {
	return /* @__PURE__ */ e("div", {
		className: u.container,
		children: /* @__PURE__ */ e("h1", { children: "Welcome to Iam!" })
	});
}
//#endregion
//#region ../../node_modules/@prisma/client/runtime/index-browser.js
var f = /* @__PURE__ */ s(((e, t) => {
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
		Decimal: () => wt,
		Public: () => f,
		getRuntime: () => ae,
		makeStrictEnum: () => D,
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
	var E = new Set([
		"toJSON",
		"$$typeof",
		"asymmetricMatch",
		Symbol.iterator,
		Symbol.toStringTag,
		Symbol.isConcatSpreadable,
		Symbol.toPrimitive
	]);
	function D(e) {
		return new Proxy(e, { get(e, t) {
			if (t in e) return e[t];
			if (!E.has(t)) throw TypeError(`Invalid enum value: ${String(t)}`);
		} });
	}
	var O = () => globalThis.process?.release?.name === "node", ee = () => {
		var e;
		return !!globalThis.Bun || !!((e = globalThis.process?.versions) != null && e.bun);
	}, te = () => !!globalThis.Deno, k = () => typeof globalThis.Netlify == "object", A = () => typeof globalThis.EdgeRuntime == "object", ne = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function re() {
		return [
			[k, "netlify"],
			[A, "edge-light"],
			[ne, "workerd"],
			[te, "deno"],
			[ee, "bun"],
			[O, "node"]
		].flatMap((e) => e[0]() ? [e[1]] : []).at(0) ?? "";
	}
	var ie = {
		node: "Node.js",
		workerd: "Cloudflare Workers",
		deno: "Deno and Deno Deploy",
		netlify: "Netlify Edge Functions",
		"edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"
	};
	function ae() {
		let e = re();
		return {
			id: e,
			prettyName: ie[e] || e,
			isEdge: [
				"workerd",
				"deno",
				"netlify",
				"edge-light"
			].includes(e)
		};
	}
	var j = 9e15, M = 1e9, N = "0123456789abcdef", P = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", F = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", oe = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -j,
		maxE: j,
		crypto: !1
	}, I, L, R = !0, z = "[DecimalError] ", B = z + "Invalid argument: ", se = z + "Precision limit exceeded", ce = z + "crypto unavailable", le = "[object Decimal]", V = Math.floor, H = Math.pow, U = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, ue = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, de = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, fe = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, W = 1e7, G = 7, pe = 9007199254740991, K = P.length - 1, me = F.length - 1, q = { toStringTag: le };
	q.absoluteValue = q.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), Z(e);
	}, q.ceil = function() {
		return Z(new this.constructor(this), this.e + 1, 2);
	}, q.clampedTo = q.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(B + t);
		return n = r.cmp(e), n < 0 ? e : r.cmp(t) > 0 ? t : new i(r);
	}, q.comparedTo = q.cmp = function(e) {
		var t, n, r, i, a = this, o = a.d, s = (e = new a.constructor(e)).d, c = a.s, l = e.s;
		if (!o || !s) return !c || !l ? NaN : c === l ? o === s ? 0 : !o ^ c < 0 ? 1 : -1 : c;
		if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
		if (c !== l) return c;
		if (a.e !== e.e) return a.e > e.e ^ c < 0 ? 1 : -1;
		for (r = o.length, i = s.length, t = 0, n = r < i ? r : i; t < n; ++t) if (o[t] !== s[t]) return o[t] > s[t] ^ c < 0 ? 1 : -1;
		return r === i ? 0 : r > i ^ c < 0 ? 1 : -1;
	}, q.cosine = q.cos = function() {
		var e, t, n = this, r = n.constructor;
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + G, r.rounding = 1, n = _e(r, Ne(r, n)), r.precision = e, r.rounding = t, Z(L == 2 || L == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, q.cubeRoot = q.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (R = !1, a = u.s * H(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = J(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = H(n, 1 / 3), e = V((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = X(l.plus(u).times(s), l.plus(c), o + 2, 1), J(s.d).slice(0, o) === (n = J(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (Z(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (Z(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return R = !0, Z(r, e, d.rounding, t);
	}, q.decimalPlaces = q.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - V(this.e / G)) * G, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
			n < 0 && (n = 0);
		}
		return n;
	}, q.dividedBy = q.div = function(e) {
		return X(this, new this.constructor(e));
	}, q.dividedToIntegerBy = q.divToInt = function(e) {
		var t = this, n = t.constructor;
		return Z(X(t, new n(e), 0, 1, 1), n.precision, n.rounding);
	}, q.equals = q.eq = function(e) {
		return this.cmp(e) === 0;
	}, q.floor = function() {
		return Z(new this.constructor(this), this.e + 1, 3);
	}, q.greaterThan = q.gt = function(e) {
		return this.cmp(e) > 0;
	}, q.greaterThanOrEqualTo = q.gte = function(e) {
		var t = this.cmp(e);
		return t == 1 || t === 0;
	}, q.hyperbolicCosine = q.cosh = function() {
		var e, t, n, r, i, a = this, o = a.constructor, s = new o(1);
		if (!a.isFinite()) return new o(a.s ? Infinity : NaN);
		if (a.isZero()) return s;
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Me(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = je(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return Z(a, o.precision = n, o.rounding = r, !0);
	}, q.hyperbolicSine = q.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = je(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / Me(5, e)), i = je(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, Z(i, t, n, !0);
	}, q.hyperbolicTangent = q.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, X(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, q.inverseCosine = q.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? $(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? $(t, r, i) : new t(0) : new t(NaN);
	}, q.inverseHyperbolicCosine = q.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, R = !1, n = n.times(n).minus(1).sqrt().plus(n), R = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, q.inverseHyperbolicSine = q.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, R = !1, n = n.times(n).plus(1).sqrt().plus(n), R = !0, r.precision = e, r.rounding = t, n.ln());
	}, q.inverseHyperbolicTangent = q.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? Z(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = X(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, q.inverseSine = q.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = $(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, q.inverseTangent = q.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= me) return o = $(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= me) return o = $(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / G + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (R = !1, t = Math.ceil(s / G), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), R = !0, Z(o, u.precision = d, u.rounding = f, !0);
	}, q.isFinite = function() {
		return !!this.d;
	}, q.isInteger = q.isInt = function() {
		return !!this.d && V(this.e / G) > this.d.length - 2;
	}, q.isNaN = function() {
		return !this.s;
	}, q.isNegative = q.isNeg = function() {
		return this.s < 0;
	}, q.isPositive = q.isPos = function() {
		return this.s > 0;
	}, q.isZero = function() {
		return !!this.d && this.d[0] === 0;
	}, q.lessThan = q.lt = function(e) {
		return this.cmp(e) < 0;
	}, q.lessThanOrEqualTo = q.lte = function(e) {
		return this.cmp(e) < 1;
	}, q.logarithm = q.log = function(e) {
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
		if (R = !1, s = d + p, o = Ee(l, s), r = t ? ye(u, s + 10) : Ee(e, s), c = X(o, r, s, 1), he(c.d, i = d, f)) do
			if (s += 10, o = Ee(l, s), r = t ? ye(u, s + 10) : Ee(e, s), c = X(o, r, s, 1), !a) {
				+J(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = Z(c, d + 1, 0));
				break;
			}
		while (he(c.d, i += 10, f));
		return R = !0, Z(c, d, f);
	}, q.minus = q.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return R ? Z(e, s, c) : e;
		}
		if (n = V(e.e / G), u = V(p.e / G), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / G), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = W - 1;
				--l[i], l[r] += W;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = ve(l, n), R ? Z(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, q.modulo = q.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? Z(new r(n), r.precision, r.rounding) : (R = !1, r.modulo == 9 ? (t = X(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = X(n, e, 0, r.modulo, 1), t = t.times(e), R = !0, n.minus(t));
	}, q.naturalExponential = q.exp = function() {
		return Te(this);
	}, q.naturalLogarithm = q.ln = function() {
		return Ee(this);
	}, q.negated = q.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, Z(e);
	}, q.plus = q.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), R ? Z(e, s, c) : e;
		if (a = V(d.e / G), r = V(e.e / G), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / G), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / W | 0, l[i] %= W;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = ve(l, r), R ? Z(e, s, c) : e;
	}, q.precision = q.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(B + e);
		return n.d ? (t = be(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, q.round = function() {
		var e = this, t = e.constructor;
		return Z(new t(e), e.e + 1, t.rounding);
	}, q.sine = q.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + G, r.rounding = 1, n = Ae(r, Ne(r, n)), r.precision = e, r.rounding = t, Z(L > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, q.squareRoot = q.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (R = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = J(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = V((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(X(o, a, n + 2, 1)).times(.5), J(a.d).slice(0, n) === (t = J(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (Z(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (Z(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return R = !0, Z(r, c, u.rounding, e);
	}, q.tangent = q.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = X(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, Z(L == 2 || L == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, q.times = q.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = V(u.e / G) + V(e.e / G), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % W | 0, t = s / W | 0;
			a[i] = (a[i] + t) % W | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = ve(a, n), R ? Z(e, d.precision, d.rounding) : e;
	}, q.toBinary = function(e, t) {
		return Pe(this, 2, e, t);
	}, q.toDecimalPlaces = q.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (Y(e, 0, M), t === void 0 ? t = r.rounding : Y(t, 0, 8), Z(n, e + n.e + 1, t));
	}, q.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Q(r, !0) : (Y(e, 0, M), t === void 0 ? t = i.rounding : Y(t, 0, 8), r = Z(new i(r), e + 1, t), n = Q(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, q.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = Q(i) : (Y(e, 0, M), t === void 0 ? t = a.rounding : Y(t, 0, 8), r = Z(new a(i), e + i.e + 1, t), n = Q(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, q.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = be(m) - p.e - 1, o = a % G, t.d[0] = H(10, o < 0 ? G + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(B + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (R = !1, s = new h(J(m)), u = h.precision, h.precision = a = m.length * G * 2; d = X(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = X(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = X(l, r, a, 1).minus(p).abs().cmp(X(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, R = !0, f;
	}, q.toHexadecimal = q.toHex = function(e, t) {
		return Pe(this, 16, e, t);
	}, q.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : Y(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (R = !1, n = X(n, e, 0, t, 1).times(e), R = !0, Z(n)) : (e.s = n.s, n = e), n;
	}, q.toNumber = function() {
		return +this;
	}, q.toOctal = function(e, t) {
		return Pe(this, 8, e, t);
	}, q.toPower = q.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(H(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return Z(s, r, a);
		if (t = V(e.e / G), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= pe) return i = Se(c, s, n, r), e.s < 0 ? new c(1).div(i) : Z(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = H(+s, l), t = n == 0 || !isFinite(n) ? V(l * (Math.log("0." + J(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (R = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Te(e.times(Ee(s, r + n)), r), i.d && (i = Z(i, r + 5, 1), he(i.d, r, a) && (t = r + 10, i = Z(Te(e.times(Ee(s, t + n)), t), t + 5, 1), +J(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = Z(i, r + 1, 0)))), i.s = o, R = !0, c.rounding = a, Z(i, r, a));
	}, q.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = Q(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (Y(e, 1, M), t === void 0 ? t = i.rounding : Y(t, 0, 8), r = Z(new i(r), e, t), n = Q(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, q.toSignificantDigits = q.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (Y(e, 1, M), t === void 0 ? t = r.rounding : Y(t, 0, 8)), Z(new r(n), e, t);
	}, q.toString = function() {
		var e = this, t = e.constructor, n = Q(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, q.truncated = q.trunc = function() {
		return Z(new this.constructor(this), this.e + 1, 1);
	}, q.valueOf = q.toJSON = function() {
		var e = this, t = e.constructor, n = Q(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function J(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = G - r.length, n && (a += xe(n)), a += r;
			o = e[t], r = o + "", n = G - r.length, n && (a += xe(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function Y(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(B + e);
	}
	function he(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += G, i = 0) : (i = Math.ceil((t + 1) / G), t %= G), a = H(10, G - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == H(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == H(10, t - 3) - 1, o;
	}
	function ge(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += N.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function _e(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Me(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = je(e, 1, t.times(i), new e(1));
		for (var a = n; a--;) {
			var o = t.times(t);
			t = o.times(o).minus(o).times(8).plus(1);
		}
		return e.precision -= n, t;
	}
	var X = function() {
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
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, ee = r.constructor, te = r.s == i.s ? 1 : -1, k = r.d, A = i.d;
			if (!k || !k[0] || !A || !A[0]) return new ee(!r.s || !i.s || (k ? A && k[0] == A[0] : !A) ? NaN : k && k[0] == 0 || !A ? te * 0 : te / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = W, p = G, u = V(r.e / p) - V(i.e / p)), D = A.length, T = k.length, _ = new ee(te), v = _.d = [], d = 0; A[d] == (k[d] || 0); d++);
			if (A[d] > (k[d] || 0) && u--, a == null ? (S = a = ee.precision, o = ee.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, D == 1) {
					for (f = 0, A = A[0], S++; (d < T || f) && S--; d++) C = f * c + (k[d] || 0), v[d] = C / A | 0, f = C % A | 0;
					m = f || d < T;
				} else {
					for (f = c / (A[0] + 1) | 0, f > 1 && (A = e(A, f, c), k = e(k, f, c), D = A.length, T = k.length), w = D, y = k.slice(0, D), b = y.length; b < D;) y[b++] = 0;
					O = A.slice(), O.unshift(0), E = A[0], A[1] >= c / 2 && ++E;
					do
						f = 0, l = t(A, y, D, b), l < 0 ? (x = y[0], D != b && (x = x * c + (y[1] || 0)), f = x / E | 0, f > 1 ? (f >= c && (f = c - 1), h = e(A, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, D < g ? O : A, g, c))) : (f == 0 && (l = f = 1), h = A.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(A, y, D, b), l < 1 && (f++, n(y, D < b ? O : A, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = k[w] || 0 : (y = [k[w]], b = 1);
					while ((w++ < T || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, I = m;
			else {
				for (d = 1, f = v[0]; f >= 10; f /= 10) d++;
				_.e = d + u * p - 1, Z(_, s ? a + _.e + 1 : a, o, m);
			}
			return _;
		};
	}();
	function Z(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor;
		e: if (t != null) {
			if (d = e.d, !d) return e;
			for (i = 1, s = d[0]; s >= 10; s /= 10) i++;
			if (a = t - i, a < 0) a += G, o = t, u = d[f = 0], c = u / H(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / G), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= G, o = a - G + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= G, o = a - G + i, c = o < 0 ? 0 : u / H(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % H(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / H(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = H(10, (G - t % G) % G), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = H(10, G - a), d[f] = o > 0 ? (u / H(10, i - o) % H(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == W && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != W) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return R && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function Q(e, t, n) {
		if (!e.isFinite()) return De(e);
		var r, i = e.e, a = J(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + xe(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + xe(-i - 1) + a, n && (r = n - o) > 0 && (a += xe(r))) : i >= o ? (a += xe(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + xe(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += xe(r))), a;
	}
	function ve(e, t) {
		var n = e[0];
		for (t *= G; n >= 10; n /= 10) t++;
		return t;
	}
	function ye(e, t, n) {
		if (t > K) throw R = !0, n && (e.precision = n), Error(se);
		return Z(new e(P), t, 1, !0);
	}
	function $(e, t, n) {
		if (t > me) throw Error(se);
		return Z(new e(F), t, n, !0);
	}
	function be(e) {
		var t = e.length - 1, n = t * G + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function xe(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function Se(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / G + 4);
		for (R = !1;;) {
			if (n % 2 && (a = a.times(t), Fe(a.d, o) && (i = !0)), n = V(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), Fe(t.d, o);
		}
		return R = !0, a;
	}
	function Ce(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function we(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Te(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (R = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(H(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = Z(a.times(e), c, 1), n = n.times(++u), s = o.plus(X(a, n, c, 1)), J(s.d).slice(0, c) === J(o.d).slice(0, c)) {
				for (i = d; i--;) o = Z(o.times(o), c, 1);
				if (t == null) if (l < 3 && he(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return Z(o, f.precision = m, p, R = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function Ee(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (R = !1, u = y) : u = t, _.precision = u += m, n = J(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = J(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = ye(_, u + 2, y).times(a + ""), h = Ee(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? Z(h, y, v, R = !0) : h;
		for (d = h, c = o = h = X(h.minus(1), h.plus(1), u, 1), f = Z(h.times(h), u, 1), i = 3;;) {
			if (o = Z(o.times(f), u, 1), l = c.plus(X(o, new _(i), u, 1)), J(l.d).slice(0, u) === J(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(ye(_, u + 2, y).times(a + ""))), c = X(c, new _(p), u, 1), t == null) if (he(c.d, u - m, v, s)) _.precision = u += m, l = o = h = X(d.minus(1), d.plus(1), u, 1), f = Z(h.times(h), u, 1), i = s = 1;
			else return Z(c, _.precision = y, v, R = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function De(e) {
		return String(e.s * e.s / 0);
	}
	function Oe(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % G, n < 0 && (r += G), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= G; r < i;) e.d.push(+t.slice(r, r += G));
				t = t.slice(r), r = G - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), R && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function ke(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), fe.test(t)) return Oe(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (ue.test(t)) n = 16, t = t.toLowerCase();
		else if (U.test(t)) n = 2;
		else if (de.test(t)) n = 8;
		else throw Error(B + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = Se(r, new r(n), a, a * 2)), l = ge(t, n, W), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = ve(l, u), e.d = l, R = !1, o && (e = X(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? H(2, c) : Ct.pow(2, c))), R = !0, e);
	}
	function Ae(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : je(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Me(5, n)), t = je(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function je(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / G);
		for (R = !1, c = n.times(n), s = new e(r);;) {
			if (o = X(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = X(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return R = !0, o.d.length = d + 1, o;
	}
	function Me(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Ne(e, t) {
		var n, r = t.s < 0, i = $(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return L = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) L = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return L = Ce(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			L = Ce(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function Pe(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (Y(n, 1, M), r === void 0 ? r = p.rounding : Y(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = De(e);
		else {
			for (u = Q(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = ge(Q(f), 10, i), f.e = f.d.length), d = ge(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = X(e, f, n, r, 0, i), d = e.d, a = e.e, l = I), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += N.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = ge(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += N.charAt(d[o]);
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
	function Fe(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function Ie(e) {
		return new this(e).abs();
	}
	function Le(e) {
		return new this(e).acos();
	}
	function Re(e) {
		return new this(e).acosh();
	}
	function ze(e, t) {
		return new this(e).plus(t);
	}
	function Be(e) {
		return new this(e).asin();
	}
	function Ve(e) {
		return new this(e).asinh();
	}
	function He(e) {
		return new this(e).atan();
	}
	function Ue(e) {
		return new this(e).atanh();
	}
	function We(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = $(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? $(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = $(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(X(e, t, a, 1)), t = $(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(X(e, t, a, 1)), n;
	}
	function Ge(e) {
		return new this(e).cbrt();
	}
	function Ke(e) {
		return Z(e = new this(e), e.e + 1, 2);
	}
	function qe(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function Je(e) {
		if (!e || typeof e != "object") throw Error(z + "Object expected");
		var t, n, r, i = e.defaults === !0, a = [
			"precision",
			1,
			M,
			"rounding",
			0,
			8,
			"toExpNeg",
			-j,
			0,
			"toExpPos",
			0,
			j,
			"maxE",
			0,
			j,
			"minE",
			-j,
			0,
			"modulo",
			0,
			9
		];
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = oe[n]), (r = e[n]) !== void 0) if (V(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(B + n + ": " + r);
		if (n = "crypto", i && (this[n] = oe[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(ce);
		else this[n] = !1;
		else throw Error(B + n + ": " + r);
		return this;
	}
	function Ye(e) {
		return new this(e).cos();
	}
	function Xe(e) {
		return new this(e).cosh();
	}
	function Ze(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, nt(e)) {
				a.s = e.s, R ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					R ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return Oe(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), fe.test(e) ? Oe(a, e) : ke(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Oe(a, e.toString());
			throw Error(B + e);
		}
		if (i.prototype = q, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Je, i.clone = Ze, i.isDecimal = nt, i.abs = Ie, i.acos = Le, i.acosh = Re, i.add = ze, i.asin = Be, i.asinh = Ve, i.atan = He, i.atanh = Ue, i.atan2 = We, i.cbrt = Ge, i.ceil = Ke, i.clamp = qe, i.cos = Ye, i.cosh = Xe, i.div = Qe, i.exp = $e, i.floor = et, i.hypot = tt, i.ln = rt, i.log = it, i.log10 = ot, i.log2 = at, i.max = st, i.min = ct, i.mod = lt, i.mul = ut, i.pow = dt, i.random = ft, i.round = pt, i.sign = mt, i.sin = ht, i.sinh = gt, i.sqrt = _t, i.sub = vt, i.sum = yt, i.tan = bt, i.tanh = xt, i.trunc = St, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
	function Qe(e, t) {
		return new this(e).div(t);
	}
	function $e(e) {
		return new this(e).exp();
	}
	function et(e) {
		return Z(e = new this(e), e.e + 1, 3);
	}
	function tt() {
		var e, t, n = new this(0);
		for (R = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return R = !0, new this(Infinity);
			n = t;
		}
		return R = !0, n.sqrt();
	}
	function nt(e) {
		return e instanceof Ct || e && e.toStringTag === le || !1;
	}
	function rt(e) {
		return new this(e).ln();
	}
	function it(e, t) {
		return new this(e).log(t);
	}
	function at(e) {
		return new this(e).log(2);
	}
	function ot(e) {
		return new this(e).log(10);
	}
	function st() {
		return we(this, arguments, -1);
	}
	function ct() {
		return we(this, arguments, 1);
	}
	function lt(e, t) {
		return new this(e).mod(t);
	}
	function ut(e, t) {
		return new this(e).mul(t);
	}
	function dt(e, t) {
		return new this(e).pow(t);
	}
	function ft(e) {
		var t, n, r, i, a = 0, o = new this(1), s = [];
		if (e === void 0 ? e = this.precision : Y(e, 1, M), r = Math.ceil(e / G), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(ce);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= G, r && e && (i = H(10, G - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= G) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < G && (n -= G - r);
		}
		return o.e = n, o.d = s, o;
	}
	function pt(e) {
		return Z(e = new this(e), e.e + 1, this.rounding);
	}
	function mt(e) {
		return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
	}
	function ht(e) {
		return new this(e).sin();
	}
	function gt(e) {
		return new this(e).sinh();
	}
	function _t(e) {
		return new this(e).sqrt();
	}
	function vt(e, t) {
		return new this(e).sub(t);
	}
	function yt() {
		var e = 0, t = arguments, n = new this(t[e]);
		for (R = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return R = !0, Z(n, this.precision, this.rounding);
	}
	function bt(e) {
		return new this(e).tan();
	}
	function xt(e) {
		return new this(e).tanh();
	}
	function St(e) {
		return Z(e = new this(e), e.e + 1, 1);
	}
	q[Symbol.for("nodejs.util.inspect.custom")] = q.toString, q[Symbol.toStringTag] = "Decimal";
	var Ct = q.constructor = Ze(oe);
	P = new Ct(P), F = new Ct(F);
	var wt = Ct;
})), p = /* @__PURE__ */ s(((e) => {
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
})), m = (/* @__PURE__ */ s(((e, t) => {
	t.exports = p();
})))();
BigInt.prototype.toJSON = function() {
	return this.toString();
};
var h = globalThis, g = h.prisma ?? new m.PrismaClient({ log: process.env.NODE_ENV === "development" ? [
	"query",
	"error",
	"warn"
] : ["error"] }), _ = g;
process.env.NODE_ENV !== "production" && (h.prisma = g);
//#endregion
//#region ../../node_modules/base64-js/index.js
var v = /* @__PURE__ */ s(((e) => {
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
})), y = /* @__PURE__ */ s(((e) => {
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
})), b = /* @__PURE__ */ s(((e) => {
	var t = v(), n = y(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (ArrayBuffer.isView(e)) return m(e);
		if (e == null) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
		if (K(e, ArrayBuffer) || e && K(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(e, SharedArrayBuffer) || e && K(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
		let n = x(e, t) | 0, r = o(n), i = r.write(e, t);
		return i !== n && (r = r.slice(0, i)), r;
	}
	function p(e) {
		let t = e.length < 0 ? 0 : _(e.length) | 0, n = o(t);
		for (let r = 0; r < t; r += 1) n[r] = e[r] & 255;
		return n;
	}
	function m(e) {
		if (K(e, Uint8Array)) {
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
		if (e.length !== void 0) return typeof e.length != "number" || me(e.length) ? o(0) : p(e);
		if (e.type === "Buffer" && Array.isArray(e.data)) return p(e.data);
	}
	function _(e) {
		if (e >= i) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
		return e | 0;
	}
	function b(e) {
		return +e != e && (e = 0), s.alloc(+e);
	}
	s.isBuffer = function(e) {
		return e != null && e._isBuffer === !0 && e !== s.prototype;
	}, s.compare = function(e, t) {
		if (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
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
			if (K(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function x(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || K(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return de(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return G(e).length;
			default:
				if (i) return r ? -1 : de(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = x;
	function S(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return j(this, t, n);
			case "utf8":
			case "utf-8": return A(this, t, n);
			case "ascii": return ie(this, t, n);
			case "latin1":
			case "binary": return ae(this, t, n);
			case "base64": return k(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return M(this, t, n);
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
		return e === 0 ? "" : arguments.length === 0 ? A(this, 0, e) : S.apply(this, arguments);
	}, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
		if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
		return this === e ? !0 : s.compare(this, e) === 0;
	}, s.prototype.inspect = function() {
		let t = "", n = e.INSPECT_MAX_BYTES;
		return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
	}, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, n, r, i) {
		if (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, me(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
			if (i) return -1;
			n = e.length - 1;
		} else if (n < 0) if (i) n = 0;
		else return -1;
		if (typeof t == "string" && (t = s.from(t, r)), s.isBuffer(t)) return t.length === 0 ? -1 : T(e, t, n, r, i);
		if (typeof t == "number") return t &= 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : T(e, [t], n, r, i);
		throw TypeError("val must be string, number or Buffer");
	}
	function T(e, t, n, r, i) {
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
	function E(e, t, n, r) {
		n = Number(n) || 0;
		let i = e.length - n;
		r ? (r = Number(r), r > i && (r = i)) : r = i;
		let a = t.length;
		r > a / 2 && (r = a / 2);
		let o;
		for (o = 0; o < r; ++o) {
			let r = parseInt(t.substr(o * 2, 2), 16);
			if (me(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function D(e, t, n, r) {
		return pe(de(t, e.length - n), e, n, r);
	}
	function O(e, t, n, r) {
		return pe(fe(t), e, n, r);
	}
	function ee(e, t, n, r) {
		return pe(G(t), e, n, r);
	}
	function te(e, t, n, r) {
		return pe(W(t, e.length - n), e, n, r);
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
			case "hex": return E(this, e, t, n);
			case "utf8":
			case "utf-8": return D(this, e, t, n);
			case "ascii":
			case "latin1":
			case "binary": return O(this, e, t, n);
			case "base64": return ee(this, e, t, n);
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
	function k(e, n, r) {
		return n === 0 && r === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(n, r));
	}
	function A(e, t, n) {
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
		return re(r);
	}
	var ne = 4096;
	function re(e) {
		let t = e.length;
		if (t <= ne) return String.fromCharCode.apply(String, e);
		let n = "", r = 0;
		for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += ne));
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
	function j(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += q[e[r]];
		return i;
	}
	function M(e, t, n) {
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
	function N(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || N(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || N(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || N(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = J(function(e) {
		e >>>= 0, V(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && H(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = J(function(e) {
		e >>>= 0, V(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && H(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || N(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || N(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || N(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || N(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || N(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = J(function(e) {
		e >>>= 0, V(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && H(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = J(function(e) {
		e >>>= 0, V(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && H(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || N(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || N(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || N(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function P(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			P(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			P(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function F(e, t, n, r, i) {
		le(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function oe(e, t, n, r, i) {
		le(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = J(function(e, t = 0) {
		return F(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = J(function(e, t = 0) {
		return oe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			P(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			P(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = J(function(e, t = 0) {
		return F(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = J(function(e, t = 0) {
		return oe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function I(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function L(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || I(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return L(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return L(this, e, t, !1, n);
	};
	function R(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || I(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return R(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return R(this, e, t, !1, n);
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
	var z = {};
	function B(e, t, n) {
		z[e] = class extends n {
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
	B("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), B("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), B("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = se(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = se(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function se(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function ce(e, t, n) {
		V(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && H(t, e.length - (n + 1));
	}
	function le(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new z.ERR_OUT_OF_RANGE("value", i, e);
		}
		ce(r, i, a);
	}
	function V(e, t) {
		if (typeof e != "number") throw new z.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function H(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new z.ERR_BUFFER_OUT_OF_BOUNDS() : new z.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (V(e, n), new z.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var U = /[^+/0-9A-Za-z-_]/g;
	function ue(e) {
		if (e = e.split("=")[0], e = e.trim().replace(U, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function de(e, t) {
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
	function fe(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function W(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function G(e) {
		return t.toByteArray(ue(e));
	}
	function pe(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function K(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function me(e) {
		return e !== e;
	}
	var q = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function J(e) {
		return typeof BigInt > "u" ? Y : e;
	}
	function Y() {
		throw Error("BigInt not supported");
	}
})), x = /* @__PURE__ */ s(((e, t) => {
	var n = b(), r = n.Buffer;
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
})), S = /* @__PURE__ */ s(((e, t) => {
	t.exports = {};
})), C = /* @__PURE__ */ s(((e, t) => {
	var n = x().Buffer, r = S(), i = S();
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
})), w = /* @__PURE__ */ s(((e, t) => {
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
})), T = /* @__PURE__ */ s(((e, t) => {
	var n = x().Buffer, r = w(), i = 128, a = 0, o = 32, s = 16, c = 2, l = s | o | a << 6, u = c | a << 6;
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
})), E = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = b().SlowBuffer;
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
})), D = /* @__PURE__ */ s(((e, t) => {
	var n = x().Buffer, r = S(), i = T(), a = S(), o = "\"%s\" is not a valid algorithm.\n  Supported algorithms are:\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".", s = "secret must be a string or buffer", c = "key must be a string or a buffer", l = "key must be a string, a buffer or an object", u = typeof r.createPublicKey == "function";
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
	function _(e) {
		return n.isBuffer(e) || typeof e == "string";
	}
	function v(e) {
		return _(e) || (e = JSON.stringify(e)), e;
	}
	function y(e) {
		return function(t, n) {
			p(n), t = v(t);
			var i = r.createHmac("sha" + e, n);
			return m((i.update(t), i.digest("base64")));
		};
	}
	var b, C = "timingSafeEqual" in r ? function(e, t) {
		return e.byteLength === t.byteLength ? r.timingSafeEqual(e, t) : !1;
	} : function(e, t) {
		return b ||= E(), b(e, t);
	};
	function w(e) {
		return function(t, r, i) {
			var a = y(e)(t, i);
			return C(n.from(r), n.from(a));
		};
	}
	function D(e) {
		return function(t, n) {
			f(n), t = v(t);
			var i = r.createSign("RSA-SHA" + e);
			return m((i.update(t), i.sign(n, "base64")));
		};
	}
	function O(e) {
		return function(t, n, i) {
			d(i), t = v(t), n = h(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify(i, n, "base64");
		};
	}
	function ee(e) {
		return function(t, n) {
			f(n), t = v(t);
			var i = r.createSign("RSA-SHA" + e);
			return m((i.update(t), i.sign({
				key: n,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, "base64")));
		};
	}
	function te(e) {
		return function(t, n, i) {
			d(i), t = v(t), n = h(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify({
				key: i,
				padding: r.constants.RSA_PKCS1_PSS_PADDING,
				saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
			}, n, "base64");
		};
	}
	function k(e) {
		var t = D(e);
		return function() {
			var n = t.apply(null, arguments);
			return n = i.derToJose(n, "ES" + e), n;
		};
	}
	function A(e) {
		var t = O(e);
		return function(n, r, a) {
			return r = i.joseToDer(r, "ES" + e).toString("base64"), t(n, r, a);
		};
	}
	function ne() {
		return function() {
			return "";
		};
	}
	function re() {
		return function(e, t) {
			return t === "";
		};
	}
	t.exports = function(e) {
		var t = {
			hs: y,
			rs: D,
			ps: ee,
			es: k,
			none: ne
		}, n = {
			hs: w,
			rs: O,
			ps: te,
			es: A,
			none: re
		}, r = e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);
		if (!r) throw g(o, e);
		var i = (r[1] || r[3]).toLowerCase(), a = r[2];
		return {
			sign: t[i](a),
			verify: n[i](a)
		};
	};
})), O = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer;
	t.exports = function(e) {
		return typeof e == "string" ? e : typeof e == "number" || n.isBuffer(e) ? e.toString() : JSON.stringify(e);
	};
})), ee = /* @__PURE__ */ s(((e, t) => {
	var n = x().Buffer, r = C(), i = D(), a = S(), o = O(), s = S();
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
})), te = /* @__PURE__ */ s(((e, t) => {
	var n = x().Buffer, r = C(), i = D(), a = S(), o = O(), s = S(), c = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
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
	function _(e, t) {
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
	function v(e) {
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
	s.inherits(v, a), v.prototype.verify = function() {
		try {
			var e = g(this.signature.buffer, this.algorithm, this.key.buffer), t = _(this.signature.buffer, this.encoding);
			return this.emit("done", e, t), this.emit("data", e), this.emit("end"), this.readable = !1, e;
		} catch (e) {
			this.readable = !1, this.emit("error", e), this.emit("close");
		}
	}, v.decode = _, v.isValid = h, v.verify = g, t.exports = v;
})), k = /* @__PURE__ */ s(((e) => {
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
})), A = /* @__PURE__ */ s(((e, t) => {
	var n = k();
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
})), ne = /* @__PURE__ */ s(((e, t) => {
	var n = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
	};
	n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
})), re = /* @__PURE__ */ s(((e, t) => {
	var n = ne(), r = function(e, t) {
		n.call(this, e), this.name = "NotBeforeError", this.date = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), ie = /* @__PURE__ */ s(((e, t) => {
	var n = ne(), r = function(e, t) {
		n.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), ae = /* @__PURE__ */ s(((e, t) => {
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
})), j = /* @__PURE__ */ s(((e, t) => {
	var n = ae();
	t.exports = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if (typeof e == "string") {
			var i = n(e);
			return i === void 0 ? void 0 : Math.floor(r + i / 1e3);
		} else if (typeof e == "number") return r + e;
		else return;
	};
})), M = /* @__PURE__ */ s(((e, t) => {
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
})), N = /* @__PURE__ */ s(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), P = /* @__PURE__ */ s(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = M(), a = N();
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
})), F = /* @__PURE__ */ s(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), oe = /* @__PURE__ */ s(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), I = /* @__PURE__ */ s(((e, t) => {
	var n = N(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = M(), { safeRe: a, t: o } = P(), s = F(), { compareIdentifiers: c } = oe();
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
})), L = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), R = /* @__PURE__ */ s(((e, t) => {
	var n = L();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), z = /* @__PURE__ */ s(((e, t) => {
	var n = L();
	t.exports = (e, t) => {
		let r = n(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
})), B = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t, r, i, a) => {
		typeof r == "string" && (a = i, i = r, r = void 0);
		try {
			return new n(e instanceof n ? e.version : e, r).inc(t, i, a).version;
		} catch {
			return null;
		}
	};
})), se = /* @__PURE__ */ s(((e, t) => {
	var n = L();
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
})), ce = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t) => new n(e, t).major;
})), le = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t) => new n(e, t).minor;
})), V = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t) => new n(e, t).patch;
})), H = /* @__PURE__ */ s(((e, t) => {
	var n = L();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
})), U = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), ue = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(t, e, r);
})), de = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t) => n(e, t, !0);
})), fe = /* @__PURE__ */ s(((e, t) => {
	var n = I();
	t.exports = (e, t, r) => {
		let i = new n(e, r), a = new n(t, r);
		return i.compare(a) || i.compareBuild(a);
	};
})), W = /* @__PURE__ */ s(((e, t) => {
	var n = fe();
	t.exports = (e, t) => e.sort((e, r) => n(e, r, t));
})), G = /* @__PURE__ */ s(((e, t) => {
	var n = fe();
	t.exports = (e, t) => e.sort((e, r) => n(r, e, t));
})), pe = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), K = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), me = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), q = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), J = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), Y = /* @__PURE__ */ s(((e, t) => {
	var n = U();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), he = /* @__PURE__ */ s(((e, t) => {
	var n = me(), r = q(), i = pe(), a = J(), o = K(), s = Y();
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
})), ge = /* @__PURE__ */ s(((e, t) => {
	var n = I(), r = L(), { safeRe: i, t: a } = P();
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
})), _e = /* @__PURE__ */ s(((e, t) => {
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
})), X = /* @__PURE__ */ s(((e, t) => {
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
			e = e.replace(s, O(this.options.includePrerelease)), o("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], u), o("comparator trim", e), e = e.replace(c[l.TILDETRIM], d), o("tilde trim", e), e = e.replace(c[l.CARETTRIM], f), o("caret trim", e);
			let g = e.split(" ").map((e) => v(e, this.options)).join(" ").split(/\s+/).map((e) => D(e, this.options));
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
			for (let t = 0; t < this.set.length; t++) if (ee(this.set[t], e, this.options)) return !0;
			return !1;
		}
	};
	var r = new (_e())(), i = F(), a = Z(), o = N(), s = I(), { safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: d, caretTrimReplace: f } = P(), { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = M(), h = (e) => e.value === "<0.0.0-0", g = (e) => e.value === "", _ = (e, t) => {
		let n = !0, r = e.slice(), i = r.pop();
		for (; n && r.length;) n = r.every((e) => i.intersects(e, t)), i = r.pop();
		return n;
	}, v = (e, t) => (e = e.replace(c[l.BUILD], ""), o("comp", e, t), e = S(e, t), o("caret", e), e = b(e, t), o("tildes", e), e = w(e, t), o("xrange", e), e = E(e, t), o("stars", e), e), y = (e) => !e || e.toLowerCase() === "x" || e === "*", b = (e, t) => e.trim().split(/\s+/).map((e) => x(e, t)).join(" "), x = (e, t) => {
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
	}, E = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[l.STAR], "")), D = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")), O = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = y(r) ? "" : y(i) ? `>=${r}.0.0${e ? "-0" : ""}` : y(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = y(l) ? "" : y(u) ? `<${+l + 1}.0.0-0` : y(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), ee = (e, t, n) => {
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
})), Z = /* @__PURE__ */ s(((e, t) => {
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
	var r = F(), { safeRe: i, t: a } = P(), o = he(), s = N(), c = I(), l = X();
})), Q = /* @__PURE__ */ s(((e, t) => {
	var n = X();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), ve = /* @__PURE__ */ s(((e, t) => {
	var n = X();
	t.exports = (e, t) => new n(e, t).set.map((e) => e.map((e) => e.value).join(" ").trim().split(" "));
})), ye = /* @__PURE__ */ s(((e, t) => {
	var n = I(), r = X();
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
})), $ = /* @__PURE__ */ s(((e, t) => {
	var n = I(), r = X();
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
})), be = /* @__PURE__ */ s(((e, t) => {
	var n = I(), r = X(), i = pe();
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
})), xe = /* @__PURE__ */ s(((e, t) => {
	var n = X();
	t.exports = (e, t) => {
		try {
			return new n(e, t).range || "*";
		} catch {
			return null;
		}
	};
})), Se = /* @__PURE__ */ s(((e, t) => {
	var n = I(), r = Z(), { ANY: i } = r, a = X(), o = Q(), s = pe(), c = K(), l = Y(), u = J();
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
})), Ce = /* @__PURE__ */ s(((e, t) => {
	var n = Se();
	t.exports = (e, t, r) => n(e, t, ">", r);
})), we = /* @__PURE__ */ s(((e, t) => {
	var n = Se();
	t.exports = (e, t, r) => n(e, t, "<", r);
})), Te = /* @__PURE__ */ s(((e, t) => {
	var n = X();
	t.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
})), Ee = /* @__PURE__ */ s(((e, t) => {
	var n = Q(), r = U();
	t.exports = (e, t, i) => {
		let a = [], o = null, s = null, c = e.sort((e, t) => r(e, t, i));
		for (let e of c) n(e, t, i) ? (s = e, o ||= e) : (s && a.push([o, s]), s = null, o = null);
		o && a.push([o, null]);
		let l = [];
		for (let [e, t] of a) e === t ? l.push(e) : !t && e === c[0] ? l.push("*") : t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`);
		let u = l.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
		return u.length < d.length ? u : t;
	};
})), De = /* @__PURE__ */ s(((e, t) => {
	var n = X(), r = Z(), { ANY: i } = r, a = Q(), o = U(), s = (e, t, r = {}) => {
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
})), Oe = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = M(), i = I(), a = oe();
	t.exports = {
		parse: L(),
		valid: R(),
		clean: z(),
		inc: B(),
		diff: se(),
		major: ce(),
		minor: le(),
		patch: V(),
		prerelease: H(),
		compare: U(),
		rcompare: ue(),
		compareLoose: de(),
		compareBuild: fe(),
		sort: W(),
		rsort: G(),
		gt: pe(),
		lt: K(),
		eq: me(),
		neq: q(),
		gte: J(),
		lte: Y(),
		cmp: he(),
		coerce: ge(),
		Comparator: Z(),
		Range: X(),
		satisfies: Q(),
		toComparators: ve(),
		maxSatisfying: ye(),
		minSatisfying: $(),
		minVersion: be(),
		validRange: xe(),
		outside: Se(),
		gtr: Ce(),
		ltr: we(),
		intersects: Te(),
		simplifyRange: Ee(),
		subset: De(),
		SemVer: i,
		re: n.re,
		src: n.src,
		tokens: n.t,
		SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
		RELEASE_TYPES: r.RELEASE_TYPES,
		compareIdentifiers: a.compareIdentifiers,
		rcompareIdentifiers: a.rcompareIdentifiers
	};
})), ke = /* @__PURE__ */ s(((e, t) => {
	t.exports = Oe().satisfies(process.version, ">=15.7.0");
})), Ae = /* @__PURE__ */ s(((e, t) => {
	t.exports = Oe().satisfies(process.version, ">=16.9.0");
})), je = /* @__PURE__ */ s(((e, t) => {
	var n = ke(), r = Ae(), i = {
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
})), Me = /* @__PURE__ */ s(((e, t) => {
	t.exports = Oe().satisfies(process.version, "^6.12.0 || >=8.0.0");
})), Ne = /* @__PURE__ */ s(((e, t) => {
	var n = ne(), r = re(), i = ie(), a = A(), o = j(), s = je(), c = Me(), l = k(), { KeyObject: u, createSecretKey: d, createPublicKey: f } = S(), p = [
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
})), Pe = /* @__PURE__ */ s(((e, t) => {
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
	var w = Object.prototype, T = w.hasOwnProperty, E = w.toString, D = w.propertyIsEnumerable, O = C(Object.keys, Object), ee = Math.max;
	function te(e, t) {
		var n = ae(e) || ie(e) ? x(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || T.call(e, a)) && !(i && (a == "length" || A(a, r))) && n.push(a);
		return n;
	}
	function k(e) {
		if (!ne(e)) return O(e);
		var t = [];
		for (var n in Object(e)) T.call(e, n) && n != "constructor" && t.push(n);
		return t;
	}
	function A(e, t) {
		return t ??= r, !!t && (typeof e == "number" || h.test(e)) && e > -1 && e % 1 == 0 && e < t;
	}
	function ne(e) {
		var t = e && e.constructor;
		return e === (typeof t == "function" && t.prototype || w);
	}
	function re(e, t, n, r) {
		e = j(e) ? e : ce(e), n = n && !r ? z(n) : 0;
		var i = e.length;
		return n < 0 && (n = ee(i + n, 0)), I(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1;
	}
	function ie(e) {
		return M(e) && T.call(e, "callee") && (!D.call(e, "callee") || E.call(e) == o);
	}
	var ae = Array.isArray;
	function j(e) {
		return e != null && P(e.length) && !N(e);
	}
	function M(e) {
		return oe(e) && j(e);
	}
	function N(e) {
		var t = F(e) ? E.call(e) : "";
		return t == s || t == c;
	}
	function P(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function F(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function oe(e) {
		return !!e && typeof e == "object";
	}
	function I(e) {
		return typeof e == "string" || !ae(e) && oe(e) && E.call(e) == l;
	}
	function L(e) {
		return typeof e == "symbol" || oe(e) && E.call(e) == u;
	}
	function R(e) {
		return e ? (e = B(e), e === n || e === -n ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function z(e) {
		var t = R(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function B(e) {
		if (typeof e == "number") return e;
		if (L(e)) return a;
		if (F(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = F(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(d, "");
		var n = p.test(e);
		return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : f.test(e) ? a : +e;
	}
	function se(e) {
		return j(e) ? te(e) : k(e);
	}
	function ce(e) {
		return e ? S(e, se(e)) : [];
	}
	t.exports = re;
})), Fe = /* @__PURE__ */ s(((e, t) => {
	var n = "[object Boolean]", r = Object.prototype.toString;
	function i(e) {
		return e === !0 || e === !1 || a(e) && r.call(e) == n;
	}
	function a(e) {
		return !!e && typeof e == "object";
	}
	t.exports = i;
})), Ie = /* @__PURE__ */ s(((e, t) => {
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
})), Le = /* @__PURE__ */ s(((e, t) => {
	var n = "[object Number]", r = Object.prototype.toString;
	function i(e) {
		return !!e && typeof e == "object";
	}
	function a(e) {
		return typeof e == "number" || i(e) && r.call(e) == n;
	}
	t.exports = a;
})), Re = /* @__PURE__ */ s(((e, t) => {
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
})), ze = /* @__PURE__ */ s(((e, t) => {
	var n = "[object String]", r = Object.prototype.toString, i = Array.isArray;
	function a(e) {
		return !!e && typeof e == "object";
	}
	function o(e) {
		return typeof e == "string" || !i(e) && a(e) && r.call(e) == n;
	}
	t.exports = o;
})), Be = /* @__PURE__ */ s(((e, t) => {
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
})), Ve = /* @__PURE__ */ s(((e, t) => {
	var n = j(), r = Me(), i = je(), a = k(), o = Pe(), s = Fe(), c = Ie(), l = Le(), u = Re(), d = ze(), f = Be(), { KeyObject: p, createSecretKey: m, createPrivateKey: h } = S(), g = [
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
	}, v = {
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
	function y(e, t, n, r) {
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
	function b(e) {
		return y(_, !1, e, "options");
	}
	function x(e) {
		return y(v, !0, e, "payload");
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
				x(e);
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
			b(r);
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
})), He = /* @__PURE__ */ l((/* @__PURE__ */ s(((e, t) => {
	t.exports = {
		decode: A(),
		verify: Ne(),
		sign: Ve(),
		JsonWebTokenError: ne(),
		NotBeforeError: re(),
		TokenExpiredError: ie()
	};
})))());
function Ue() {
	let e = process.env.JWT_SECRET;
	if (!e) throw Error("JWT_SECRET is not defined in environment variables");
	return e;
}
function We() {
	let e = process.env.JWT_REFRESH_SECRET;
	if (!e) {
		if (process.env.NODE_ENV === "test") return console.warn("JWT_REFRESH_SECRET missing - using fallback (test only)"), "test-fallback-secret";
		throw Error("JWT_REFRESH_SECRET is not defined in environment variables");
	}
	return e;
}
function Ge(e) {
	return He.default.sign(e, Ue(), {
		expiresIn: "1h",
		issuer: "rentflow360",
		audience: "rentflow360-web"
	});
}
function Ke(e) {
	return He.default.sign(e, We(), {
		expiresIn: "7d",
		issuer: "rentflow360",
		audience: "rentflow360-web"
	});
}
function qe(e) {
	return He.default.verify(e, Ue(), {
		issuer: "rentflow360",
		audience: "rentflow360-web"
	});
}
function Je(e) {
	return He.default.verify(e, We(), {
		issuer: "rentflow360",
		audience: "rentflow360-web"
	});
}
var Ye = {
	secret: process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET,
	providers: [],
	callbacks: {
		jwt: async ({ token: e, user: t }) => (t && (e.userId = t.id, e.role = t.role, e.organizationId = t.organizationId), e),
		session: async ({ session: e, token: t }) => (t && (e.user.id = t.userId, e.user.role = t.role, e.user.organizationId = t.organizationId), e)
	}
}, Xe = async () => null, Ze = /* @__PURE__ */ l(S());
function Qe() {
	return Ze.default.randomInt(1e5, 999999).toString();
}
async function $e(e, t, n) {
	await g.otp.deleteMany({ where: {
		userId: e,
		type: n
	} });
	let r = Qe(), i = new Date(Date.now() + 300 * 1e3);
	return await g.otp.create({ data: {
		userId: e,
		phone: t,
		code: r,
		type: n,
		expiresAt: i
	} }), r;
}
async function et(e, t, n) {
	let r = await g.otp.findFirst({ where: {
		userId: e,
		code: t,
		type: n,
		expiresAt: { gt: /* @__PURE__ */ new Date() }
	} });
	return r ? (await g.otp.delete({ where: { id: r.id } }), !0) : !1;
}
//#endregion
//#region ../../node_modules/server-only/index.js
throw Error("This module cannot be imported from a Client Component module. It should only be used from a Server Component.");
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/carrier.js
function tt() {
	return nt(Ct), Ct;
}
function nt(e) {
	let t = e.__SENTRY__ = e.__SENTRY__ || {};
	return t.version = t.version || "10.47.0", t[wt] = t["10.47.0"] || {};
}
function rt(e, t, n = Ct) {
	let r = n.__SENTRY__ = n.__SENTRY__ || {}, i = r[wt] = r["10.47.0"] || {};
	return i[e] || (i[e] = t());
}
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/utils/merge.js
function it(e, t, n = 2) {
	if (!t || typeof t != "object" || n <= 0) return t;
	if (e && Object.keys(t).length === 0) return e;
	let r = { ...e };
	for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = it(r[e], t[e], n - 1));
	return r;
}
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/defaultScopes.js
function at() {
	return rt("defaultCurrentScope", () => new Tt());
}
function ot() {
	return rt("defaultIsolationScope", () => new Tt());
}
function st() {
	let e = nt(tt());
	return e.stack = e.stack || new Et(at(), ot());
}
function ct(e) {
	return st().withScope(e);
}
function lt(e, t) {
	let n = st();
	return n.withScope(() => (n.getStackTop().scope = e, t(e)));
}
function ut(e) {
	return st().withScope(() => e(st().getIsolationScope()));
}
function dt() {
	return {
		withIsolationScope: ut,
		withScope: ct,
		withSetScope: lt,
		withSetIsolationScope: (e, t) => ut(t),
		getCurrentScope: () => st().getScope(),
		getIsolationScope: () => st().getIsolationScope()
	};
}
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/asyncContext/index.js
function ft(e) {
	let t = nt(e);
	return t.acs ? t.acs : dt();
}
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/currentScopes.js
function pt() {
	return ft(tt()).getIsolationScope();
}
//#endregion
//#region ../../node_modules/@sentry/core/build/esm/exports.js
function mt(e, t) {
	pt().setContext(e, t);
}
function ht(e, t) {
	pt().setTag(e, t);
}
function gt(e) {
	pt().setUser(e);
}
async function _t() {
	try {
		let e = (await (0, Ot.cookies)()).get("token")?.value;
		return e ? qe(e) : null;
	} catch {
		return null;
	}
}
async function vt(e, t) {
	let n = await _t();
	if (!n) return Dt.NextResponse.json({ error: "Unauthorized - No valid token" }, { status: 401 });
	if (gt({
		id: n.userId,
		email: n.email
	}), ht("auth.role", n.role), ht("org.id", n.organizationId), ht("org.userId", n.organizationUserId), mt("organization", {
		id: n.organizationId,
		userId: n.organizationUserId
	}), mt("auth", {
		role: n.role,
		userId: n.userId,
		email: n.email
	}), t) try {
		let e = new URL(t.url);
		ht("http.method", t.method), ht("http.route", e.pathname);
	} catch {}
	return !n.role || !e.includes(n.role) ? Dt.NextResponse.json({ error: `Forbidden - Requires one of: ${e.join(", ")}` }, { status: 403 }) : null;
}
async function yt(e) {
	return vt(["SYSTEM_ADMIN"], e);
}
async function bt(e) {
	return vt(["SYSTEM_ADMIN", "PROPERTY_MANAGER"], e);
}
async function xt() {
	return (await _t())?.role ?? null;
}
//#endregion
//#region src/lib/get-current-user.ts
async function St(e) {
	try {
		let t = null;
		if (e) {
			let n = e.headers.get("authorization");
			n && n.startsWith("Bearer ") && (t = n.split(" ")[1]);
		}
		if (t ||= (await (0, Ot.cookies)()).get("token")?.value || null, !t) return null;
		let n = qe(t);
		return {
			id: n.userId,
			email: n.email,
			role: n.role,
			organizationId: n.organizationId,
			organizationUserId: n.organizationUserId
		};
	} catch {
		return null;
	}
}
export { d as Iam, kt as PrismaClient, Xe as auth, Ye as authOptions, $e as createOtp, _ as db, Ge as generateAccessToken, Qe as generateOtpCode, Ke as generateRefreshToken, St as getCurrentUser, xt as getCurrentUserRole, We as getJwtRefreshSecret, Ue as getJwtSecret, g as prisma, bt as requireAdminRole, vt as requireRole, yt as requireSystemAdmin, qe as verifyAccessToken, et as verifyOtp, Je as verifyRefreshToken };
var Ct, wt, Tt, Et, Dt, Ot, kt;
