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
}) : i, e)), u = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), d = async () => {
	try {
		let e = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appliances`, { next: { revalidate: 60 } });
		if (!e.ok) throw console.error(`API Error: ${e.status} ${e.statusText} for ${e.url}`), Error("Failed to fetch appliances");
		return await e.json() || [];
	} catch (e) {
		return console.error("fetchAppliances:", e), [];
	}
}, f = /* @__PURE__ */ s(((e, t) => {
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
		Decimal: () => kt,
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
	var ee = () => globalThis.process?.release?.name === "node", O = () => {
		var e;
		return !!globalThis.Bun || !!((e = globalThis.process?.versions) != null && e.bun);
	}, te = () => !!globalThis.Deno, k = () => typeof globalThis.Netlify == "object", A = () => typeof globalThis.EdgeRuntime == "object", ne = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
	function re() {
		return [
			[k, "netlify"],
			[A, "edge-light"],
			[ne, "workerd"],
			[te, "deno"],
			[O, "bun"],
			[ee, "node"]
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
	var oe = 9e15, j = 1e9, M = "0123456789abcdef", N = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", se = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", P = {
		precision: 20,
		rounding: 4,
		modulo: 1,
		toExpNeg: -7,
		toExpPos: 21,
		minE: -oe,
		maxE: oe,
		crypto: !1
	}, ce, F, I = !0, L = "[DecimalError] ", le = L + "Invalid argument: ", ue = L + "Precision limit exceeded", de = L + "crypto unavailable", fe = "[object Decimal]", R = Math.floor, z = Math.pow, pe = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, me = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, B = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, he = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, V = 1e7, H = 7, ge = 9007199254740991, U = N.length - 1, W = se.length - 1, G = { toStringTag: fe };
	G.absoluteValue = G.abs = function() {
		var e = new this.constructor(this);
		return e.s < 0 && (e.s = 1), J(e);
	}, G.ceil = function() {
		return J(new this.constructor(this), this.e + 1, 2);
	}, G.clampedTo = G.clamp = function(e, t) {
		var n, r = this, i = r.constructor;
		if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
		if (e.gt(t)) throw Error(le + t);
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
		return n.d ? n.d[0] ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + H, r.rounding = 1, n = be(r, Re(r, n)), r.precision = e, r.rounding = t, J(F == 2 || F == 3 ? n.neg() : n, e, t, !0)) : new r(1) : new r(NaN);
	}, G.cubeRoot = G.cbrt = function() {
		var e, t, n, r, i, a, o, s, c, l, u = this, d = u.constructor;
		if (!u.isFinite() || u.isZero()) return new d(u);
		for (I = !1, a = u.s * z(u.s * u, 1 / 3), !a || Math.abs(a) == Infinity ? (n = K(u.d), e = u.e, (a = (e - n.length + 1) % 3) && (n += a == 1 || a == -2 ? "0" : "00"), a = z(n, 1 / 3), e = R((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), a == Infinity ? n = "5e" + e : (n = a.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), r = new d(n), r.s = u.s) : r = new d(a.toString()), o = (e = d.precision) + 3;;) if (s = r, c = s.times(s).times(s), l = c.plus(u), r = q(l.plus(u).times(s), l.plus(c), o + 2, 1), K(s.d).slice(0, o) === (n = K(r.d)).slice(0, o)) if (n = n.slice(o - 3, o + 1), n == "9999" || !i && n == "4999") {
			if (!i && (J(s, e + 1, 0), s.times(s).times(s).eq(u))) {
				r = s;
				break;
			}
			o += 4, i = 1;
		} else {
			(!+n || !+n.slice(1) && n.charAt(0) == "5") && (J(r, e + 1, 1), t = !r.times(r).times(r).eq(u));
			break;
		}
		return I = !0, J(r, e, d.rounding, t);
	}, G.decimalPlaces = G.dp = function() {
		var e, t = this.d, n = NaN;
		if (t) {
			if (e = t.length - 1, n = (e - R(this.e / H)) * H, e = t[e], e) for (; e % 10 == 0; e /= 10) n--;
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
		n = o.precision, r = o.rounding, o.precision = n + Math.max(a.e, a.sd()) + 4, o.rounding = 1, i = a.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Le(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), a = Ie(o, 1, a.times(t), new o(1), !0);
		for (var c, l = e, u = new o(8); l--;) c = a.times(a), a = s.minus(c.times(u.minus(c.times(u))));
		return J(a, o.precision = n, o.rounding = r, !0);
	}, G.hyperbolicSine = G.sinh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		if (!i.isFinite() || i.isZero()) return new a(i);
		if (t = a.precision, n = a.rounding, a.precision = t + Math.max(i.e, i.sd()) + 4, a.rounding = 1, r = i.d.length, r < 3) i = Ie(a, 2, i, i, !0);
		else {
			e = 1.4 * Math.sqrt(r), e = e > 16 ? 16 : e | 0, i = i.times(1 / Le(5, e)), i = Ie(a, 2, i, i, !0);
			for (var o, s = new a(5), c = new a(16), l = new a(20); e--;) o = i.times(i), i = i.times(s.plus(o.times(c.times(o).plus(l))));
		}
		return a.precision = t, a.rounding = n, J(i, t, n, !0);
	}, G.hyperbolicTangent = G.tanh = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 7, r.rounding = 1, q(n.sinh(), n.cosh(), r.precision = e, r.rounding = t)) : new r(n.s);
	}, G.inverseCosine = G.acos = function() {
		var e = this, t = e.constructor, n = e.abs().cmp(1), r = t.precision, i = t.rounding;
		return n === -1 ? e.isZero() ? we(t, r + 4, i).times(.5) : (t.precision = r + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = r, t.rounding = i, e.times(2)) : n === 0 ? e.isNeg() ? we(t, r, i) : new t(0) : new t(NaN);
	}, G.inverseHyperbolicCosine = G.acosh = function() {
		var e, t, n = this, r = n.constructor;
		return n.lte(1) ? new r(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = r.precision, t = r.rounding, r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, r.rounding = 1, I = !1, n = n.times(n).minus(1).sqrt().plus(n), I = !0, r.precision = e, r.rounding = t, n.ln()) : new r(n);
	}, G.inverseHyperbolicSine = G.asinh = function() {
		var e, t, n = this, r = n.constructor;
		return !n.isFinite() || n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, r.rounding = 1, I = !1, n = n.times(n).plus(1).sqrt().plus(n), I = !0, r.precision = e, r.rounding = t, n.ln());
	}, G.inverseHyperbolicTangent = G.atanh = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isFinite() ? i.e >= 0 ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = a.precision, t = a.rounding, r = i.sd(), Math.max(r, e) < 2 * -i.e - 1 ? J(new a(i), e, t, !0) : (a.precision = n = r - i.e, i = q(i.plus(1), new a(1).minus(i), n + e, 1), a.precision = e + 4, a.rounding = 1, i = i.ln(), a.precision = e, a.rounding = t, i.times(.5))) : new a(NaN);
	}, G.inverseSine = G.asin = function() {
		var e, t, n, r, i = this, a = i.constructor;
		return i.isZero() ? new a(i) : (t = i.abs().cmp(1), n = a.precision, r = a.rounding, t === -1 ? (a.precision = n + 6, a.rounding = 1, i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(), a.precision = n, a.rounding = r, i.times(2)) : t === 0 ? (e = we(a, n + 4, r).times(.5), e.s = i.s, e) : new a(NaN));
	}, G.inverseTangent = G.atan = function() {
		var e, t, n, r, i, a, o, s, c, l = this, u = l.constructor, d = u.precision, f = u.rounding;
		if (l.isFinite()) {
			if (l.isZero()) return new u(l);
			if (l.abs().eq(1) && d + 4 <= W) return o = we(u, d + 4, f).times(.25), o.s = l.s, o;
		} else {
			if (!l.s) return new u(NaN);
			if (d + 4 <= W) return o = we(u, d + 4, f).times(.5), o.s = l.s, o;
		}
		for (u.precision = s = d + 10, u.rounding = 1, n = Math.min(28, s / H + 2 | 0), e = n; e; --e) l = l.div(l.times(l).plus(1).sqrt().plus(1));
		for (I = !1, t = Math.ceil(s / H), r = 1, c = l.times(l), o = new u(l), i = l; e !== -1;) if (i = i.times(c), a = o.minus(i.div(r += 2)), i = i.times(c), o = a.plus(i.div(r += 2)), o.d[t] !== void 0) for (e = t; o.d[e] === a.d[e] && e--;);
		return n && (o = o.times(2 << n - 1)), I = !0, J(o, u.precision = d, u.rounding = f, !0);
	}, G.isFinite = function() {
		return !!this.d;
	}, G.isInteger = G.isInt = function() {
		return !!this.d && R(this.e / H) > this.d.length - 2;
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
		if (I = !1, s = d + p, o = je(l, s), r = t ? Ce(u, s + 10) : je(e, s), c = q(o, r, s, 1), ve(c.d, i = d, f)) do
			if (s += 10, o = je(l, s), r = t ? Ce(u, s + 10) : je(e, s), c = q(o, r, s, 1), !a) {
				+K(c.d).slice(i + 1, i + 15) + 1 == 0x5af3107a4000 && (c = J(c, d + 1, 0));
				break;
			}
		while (ve(c.d, i += 10, f));
		return I = !0, J(c, d, f);
	}, G.minus = G.sub = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.constructor;
		if (e = new m(e), !p.d || !e.d) return !p.s || !e.s ? e = new m(NaN) : p.d ? e.s = -e.s : e = new m(e.d || p.s !== e.s ? p : NaN), e;
		if (p.s != e.s) return e.s = -e.s, p.plus(e);
		if (l = p.d, f = e.d, s = m.precision, c = m.rounding, !l[0] || !f[0]) {
			if (f[0]) e.s = -e.s;
			else if (l[0]) e = new m(p);
			else return new m(c === 3 ? -0 : 0);
			return I ? J(e, s, c) : e;
		}
		if (n = R(e.e / H), u = R(p.e / H), l = l.slice(), a = u - n, a) {
			for (d = a < 0, d ? (t = l, a = -a, o = f.length) : (t = f, n = u, o = l.length), r = Math.max(Math.ceil(s / H), o) + 2, a > r && (a = r, t.length = 1), t.reverse(), r = a; r--;) t.push(0);
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
				for (i = r; i && l[--i] === 0;) l[i] = V - 1;
				--l[i], l[r] += V;
			}
			l[r] -= f[r];
		}
		for (; l[--o] === 0;) l.pop();
		for (; l[0] === 0; l.shift()) --n;
		return l[0] ? (e.d = l, e.e = Se(l, n), I ? J(e, s, c) : e) : new m(c === 3 ? -0 : 0);
	}, G.modulo = G.mod = function(e) {
		var t, n = this, r = n.constructor;
		return e = new r(e), !n.d || !e.s || e.d && !e.d[0] ? new r(NaN) : !e.d || n.d && !n.d[0] ? J(new r(n), r.precision, r.rounding) : (I = !1, r.modulo == 9 ? (t = q(n, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(n, e, 0, r.modulo, 1), t = t.times(e), I = !0, n.minus(t));
	}, G.naturalExponential = G.exp = function() {
		return Ae(this);
	}, G.naturalLogarithm = G.ln = function() {
		return je(this);
	}, G.negated = G.neg = function() {
		var e = new this.constructor(this);
		return e.s = -e.s, J(e);
	}, G.plus = G.add = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d = this, f = d.constructor;
		if (e = new f(e), !d.d || !e.d) return !d.s || !e.s ? e = new f(NaN) : d.d || (e = new f(e.d || d.s === e.s ? d : NaN)), e;
		if (d.s != e.s) return e.s = -e.s, d.minus(e);
		if (l = d.d, u = e.d, s = f.precision, c = f.rounding, !l[0] || !u[0]) return u[0] || (e = new f(d)), I ? J(e, s, c) : e;
		if (a = R(d.e / H), r = R(e.e / H), l = l.slice(), i = a - r, i) {
			for (i < 0 ? (n = l, i = -i, o = u.length) : (n = u, r = a, o = l.length), a = Math.ceil(s / H), o = a > o ? a + 1 : o + 1, i > o && (i = o, n.length = 1), n.reverse(); i--;) n.push(0);
			n.reverse();
		}
		for (o = l.length, i = u.length, o - i < 0 && (i = o, n = u, u = l, l = n), t = 0; i;) t = (l[--i] = l[i] + u[i] + t) / V | 0, l[i] %= V;
		for (t && (l.unshift(t), ++r), o = l.length; l[--o] == 0;) l.pop();
		return e.d = l, e.e = Se(l, r), I ? J(e, s, c) : e;
	}, G.precision = G.sd = function(e) {
		var t, n = this;
		if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(le + e);
		return n.d ? (t = Te(n.d), e && n.e + 1 > t && (t = n.e + 1)) : t = NaN, t;
	}, G.round = function() {
		var e = this, t = e.constructor;
		return J(new t(e), e.e + 1, t.rounding);
	}, G.sine = G.sin = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + Math.max(n.e, n.sd()) + H, r.rounding = 1, n = Fe(r, Re(r, n)), r.precision = e, r.rounding = t, J(F > 2 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, G.squareRoot = G.sqrt = function() {
		var e, t, n, r, i, a, o = this, s = o.d, c = o.e, l = o.s, u = o.constructor;
		if (l !== 1 || !s || !s[0]) return new u(!l || l < 0 && (!s || s[0]) ? NaN : s ? o : Infinity);
		for (I = !1, l = Math.sqrt(+o), l == 0 || l == Infinity ? (t = K(s), (t.length + c) % 2 == 0 && (t += "0"), l = Math.sqrt(t), c = R((c + 1) / 2) - (c < 0 || c % 2), l == Infinity ? t = "5e" + c : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c), r = new u(t)) : r = new u(l.toString()), n = (c = u.precision) + 3;;) if (a = r, r = a.plus(q(o, a, n + 2, 1)).times(.5), K(a.d).slice(0, n) === (t = K(r.d)).slice(0, n)) if (t = t.slice(n - 3, n + 1), t == "9999" || !i && t == "4999") {
			if (!i && (J(a, c + 1, 0), a.times(a).eq(o))) {
				r = a;
				break;
			}
			n += 4, i = 1;
		} else {
			(!+t || !+t.slice(1) && t.charAt(0) == "5") && (J(r, c + 1, 1), e = !r.times(r).eq(o));
			break;
		}
		return I = !0, J(r, c, u.rounding, e);
	}, G.tangent = G.tan = function() {
		var e, t, n = this, r = n.constructor;
		return n.isFinite() ? n.isZero() ? new r(n) : (e = r.precision, t = r.rounding, r.precision = e + 10, r.rounding = 1, n = n.sin(), n.s = 1, n = q(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0), r.precision = e, r.rounding = t, J(F == 2 || F == 4 ? n.neg() : n, e, t, !0)) : new r(NaN);
	}, G.times = G.mul = function(e) {
		var t, n, r, i, a, o, s, c, l, u = this, d = u.constructor, f = u.d, p = (e = new d(e)).d;
		if (e.s *= u.s, !f || !f[0] || !p || !p[0]) return new d(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
		for (n = R(u.e / H) + R(e.e / H), c = f.length, l = p.length, c < l && (a = f, f = p, p = a, o = c, c = l, l = o), a = [], o = c + l, r = o; r--;) a.push(0);
		for (r = l; --r >= 0;) {
			for (t = 0, i = c + r; i > r;) s = a[i] + p[r] * f[i - r - 1] + t, a[i--] = s % V | 0, t = s / V | 0;
			a[i] = (a[i] + t) % V | 0;
		}
		for (; !a[--o];) a.pop();
		return t ? ++n : a.shift(), e.d = a, e.e = Se(a, n), I ? J(e, d.precision, d.rounding) : e;
	}, G.toBinary = function(e, t) {
		return ze(this, 2, e, t);
	}, G.toDecimalPlaces = G.toDP = function(e, t) {
		var n = this, r = n.constructor;
		return n = new r(n), e === void 0 ? n : (_e(e, 0, j), t === void 0 ? t = r.rounding : _e(t, 0, 8), J(n, e + n.e + 1, t));
	}, G.toExponential = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = xe(r, !0) : (_e(e, 0, j), t === void 0 ? t = i.rounding : _e(t, 0, 8), r = J(new i(r), e + 1, t), n = xe(r, !0, e + 1)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, G.toFixed = function(e, t) {
		var n, r, i = this, a = i.constructor;
		return e === void 0 ? n = xe(i) : (_e(e, 0, j), t === void 0 ? t = a.rounding : _e(t, 0, 8), r = J(new a(i), e + i.e + 1, t), n = xe(r, !1, e + r.e + 1)), i.isNeg() && !i.isZero() ? "-" + n : n;
	}, G.toFraction = function(e) {
		var t, n, r, i, a, o, s, c, l, u, d, f, p = this, m = p.d, h = p.constructor;
		if (!m) return new h(p);
		if (l = n = new h(1), r = c = new h(0), t = new h(r), a = t.e = Te(m) - p.e - 1, o = a % H, t.d[0] = z(10, o < 0 ? H + o : o), e == null) e = a > 0 ? t : l;
		else {
			if (s = new h(e), !s.isInt() || s.lt(l)) throw Error(le + s);
			e = s.gt(t) ? a > 0 ? t : l : s;
		}
		for (I = !1, s = new h(K(m)), u = h.precision, h.precision = a = m.length * H * 2; d = q(s, t, 0, 1, 1), i = n.plus(d.times(r)), i.cmp(e) != 1;) n = r, r = i, i = l, l = c.plus(d.times(i)), c = i, i = t, t = s.minus(d.times(i)), s = i;
		return i = q(e.minus(n), r, 0, 1, 1), c = c.plus(i.times(l)), n = n.plus(i.times(r)), c.s = l.s = p.s, f = q(l, r, a, 1).minus(p).abs().cmp(q(c, n, a, 1).minus(p).abs()) < 1 ? [l, r] : [c, n], h.precision = u, I = !0, f;
	}, G.toHexadecimal = G.toHex = function(e, t) {
		return ze(this, 16, e, t);
	}, G.toNearest = function(e, t) {
		var n = this, r = n.constructor;
		if (n = new r(n), e == null) {
			if (!n.d) return n;
			e = new r(1), t = r.rounding;
		} else {
			if (e = new r(e), t === void 0 ? t = r.rounding : _e(t, 0, 8), !n.d) return e.s ? n : e;
			if (!e.d) return e.s &&= n.s, e;
		}
		return e.d[0] ? (I = !1, n = q(n, e, 0, t, 1).times(e), I = !0, J(n)) : (e.s = n.s, n = e), n;
	}, G.toNumber = function() {
		return +this;
	}, G.toOctal = function(e, t) {
		return ze(this, 8, e, t);
	}, G.toPower = G.pow = function(e) {
		var t, n, r, i, a, o, s = this, c = s.constructor, l = +(e = new c(e));
		if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(z(+s, l));
		if (s = new c(s), s.eq(1)) return s;
		if (r = c.precision, a = c.rounding, e.eq(1)) return J(s, r, a);
		if (t = R(e.e / H), t >= e.d.length - 1 && (n = l < 0 ? -l : l) <= ge) return i = De(c, s, n, r), e.s < 0 ? new c(1).div(i) : J(i, r, a);
		if (o = s.s, o < 0) {
			if (t < e.d.length - 1) return new c(NaN);
			if (!(e.d[t] & 1) && (o = 1), s.e == 0 && s.d[0] == 1 && s.d.length == 1) return s.s = o, s;
		}
		return n = z(+s, l), t = n == 0 || !isFinite(n) ? R(l * (Math.log("0." + K(s.d)) / Math.LN10 + s.e + 1)) : new c(n + "").e, t > c.maxE + 1 || t < c.minE - 1 ? new c(t > 0 ? o / 0 : 0) : (I = !1, c.rounding = s.s = 1, n = Math.min(12, (t + "").length), i = Ae(e.times(je(s, r + n)), r), i.d && (i = J(i, r + 5, 1), ve(i.d, r, a) && (t = r + 10, i = J(Ae(e.times(je(s, t + n)), t), t + 5, 1), +K(i.d).slice(r + 1, r + 15) + 1 == 0x5af3107a4000 && (i = J(i, r + 1, 0)))), i.s = o, I = !0, c.rounding = a, J(i, r, a));
	}, G.toPrecision = function(e, t) {
		var n, r = this, i = r.constructor;
		return e === void 0 ? n = xe(r, r.e <= i.toExpNeg || r.e >= i.toExpPos) : (_e(e, 1, j), t === void 0 ? t = i.rounding : _e(t, 0, 8), r = J(new i(r), e, t), n = xe(r, e <= r.e || r.e <= i.toExpNeg, e)), r.isNeg() && !r.isZero() ? "-" + n : n;
	}, G.toSignificantDigits = G.toSD = function(e, t) {
		var n = this, r = n.constructor;
		return e === void 0 ? (e = r.precision, t = r.rounding) : (_e(e, 1, j), t === void 0 ? t = r.rounding : _e(t, 0, 8)), J(new r(n), e, t);
	}, G.toString = function() {
		var e = this, t = e.constructor, n = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() && !e.isZero() ? "-" + n : n;
	}, G.truncated = G.trunc = function() {
		return J(new this.constructor(this), this.e + 1, 1);
	}, G.valueOf = G.toJSON = function() {
		var e = this, t = e.constructor, n = xe(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
		return e.isNeg() ? "-" + n : n;
	};
	function K(e) {
		var t, n, r, i = e.length - 1, a = "", o = e[0];
		if (i > 0) {
			for (a += o, t = 1; t < i; t++) r = e[t] + "", n = H - r.length, n && (a += Ee(n)), a += r;
			o = e[t], r = o + "", n = H - r.length, n && (a += Ee(n));
		} else if (o === 0) return "0";
		for (; o % 10 == 0;) o /= 10;
		return a + o;
	}
	function _e(e, t, n) {
		if (e !== ~~e || e < t || e > n) throw Error(le + e);
	}
	function ve(e, t, n, r) {
		var i, a, o, s;
		for (a = e[0]; a >= 10; a /= 10) --t;
		return --t < 0 ? (t += H, i = 0) : (i = Math.ceil((t + 1) / H), t %= H), a = z(10, H - t), s = e[i] % a | 0, r == null ? t < 3 ? (t == 0 ? s = s / 100 | 0 : t == 1 && (s = s / 10 | 0), o = n < 4 && s == 99999 || n > 3 && s == 49999 || s == 5e4 || s == 0) : o = (n < 4 && s + 1 == a || n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 100 | 0) == z(10, t - 2) - 1 || (s == a / 2 || s == 0) && (e[i + 1] / a / 100 | 0) == 0 : t < 4 ? (t == 0 ? s = s / 1e3 | 0 : t == 1 ? s = s / 100 | 0 : t == 2 && (s = s / 10 | 0), o = (r || n < 4) && s == 9999 || !r && n > 3 && s == 4999) : o = ((r || n < 4) && s + 1 == a || !r && n > 3 && s + 1 == a / 2) && (e[i + 1] / a / 1e3 | 0) == z(10, t - 3) - 1, o;
	}
	function ye(e, t, n) {
		for (var r, i = [0], a, o = 0, s = e.length; o < s;) {
			for (a = i.length; a--;) i[a] *= t;
			for (i[0] += M.indexOf(e.charAt(o++)), r = 0; r < i.length; r++) i[r] > n - 1 && (i[r + 1] === void 0 && (i[r + 1] = 0), i[r + 1] += i[r] / n | 0, i[r] %= n);
		}
		return i.reverse();
	}
	function be(e, t) {
		var n, r, i;
		if (t.isZero()) return t;
		r = t.d.length, r < 32 ? (n = Math.ceil(r / 3), i = (1 / Le(4, n)).toString()) : (n = 16, i = "2.3283064365386962890625e-10"), e.precision += n, t = Ie(e, 1, t.times(i), new e(1));
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
			var l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, ee, O = r.constructor, te = r.s == i.s ? 1 : -1, k = r.d, A = i.d;
			if (!k || !k[0] || !A || !A[0]) return new O(!r.s || !i.s || (k ? A && k[0] == A[0] : !A) ? NaN : k && k[0] == 0 || !A ? te * 0 : te / 0);
			for (c ? (p = 1, u = r.e - i.e) : (c = V, p = H, u = R(r.e / p) - R(i.e / p)), D = A.length, T = k.length, _ = new O(te), v = _.d = [], d = 0; A[d] == (k[d] || 0); d++);
			if (A[d] > (k[d] || 0) && u--, a == null ? (S = a = O.precision, o = O.rounding) : S = s ? a + (r.e - i.e) + 1 : a, S < 0) v.push(1), m = !0;
			else {
				if (S = S / p + 2 | 0, d = 0, D == 1) {
					for (f = 0, A = A[0], S++; (d < T || f) && S--; d++) C = f * c + (k[d] || 0), v[d] = C / A | 0, f = C % A | 0;
					m = f || d < T;
				} else {
					for (f = c / (A[0] + 1) | 0, f > 1 && (A = e(A, f, c), k = e(k, f, c), D = A.length, T = k.length), w = D, y = k.slice(0, D), b = y.length; b < D;) y[b++] = 0;
					ee = A.slice(), ee.unshift(0), E = A[0], A[1] >= c / 2 && ++E;
					do
						f = 0, l = t(A, y, D, b), l < 0 ? (x = y[0], D != b && (x = x * c + (y[1] || 0)), f = x / E | 0, f > 1 ? (f >= c && (f = c - 1), h = e(A, f, c), g = h.length, b = y.length, l = t(h, y, g, b), l == 1 && (f--, n(h, D < g ? ee : A, g, c))) : (f == 0 && (l = f = 1), h = A.slice()), g = h.length, g < b && h.unshift(0), n(y, h, b, c), l == -1 && (b = y.length, l = t(A, y, D, b), l < 1 && (f++, n(y, D < b ? ee : A, b, c))), b = y.length) : l === 0 && (f++, y = [0]), v[d++] = f, l && y[0] ? y[b++] = k[w] || 0 : (y = [k[w]], b = 1);
					while ((w++ < T || y[0] !== void 0) && S--);
					m = y[0] !== void 0;
				}
				v[0] || v.shift();
			}
			if (p == 1) _.e = u, ce = m;
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
			if (a = t - i, a < 0) a += H, o = t, u = d[f = 0], c = u / z(10, i - o - 1) % 10 | 0;
			else if (f = Math.ceil((a + 1) / H), s = d.length, f >= s) if (r) {
				for (; s++ <= f;) d.push(0);
				u = c = 0, i = 1, a %= H, o = a - H + 1;
			} else break e;
			else {
				for (u = s = d[f], i = 1; s >= 10; s /= 10) i++;
				a %= H, o = a - H + i, c = o < 0 ? 0 : u / z(10, i - o - 1) % 10 | 0;
			}
			if (r = r || t < 0 || d[f + 1] !== void 0 || (o < 0 ? u : u % z(10, i - o - 1)), l = n < 4 ? (c || r) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (n == 4 || r || n == 6 && (a > 0 ? o > 0 ? u / z(10, i - o) : 0 : d[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, l ? (t -= e.e + 1, d[0] = z(10, (H - t % H) % H), e.e = -t || 0) : d[0] = e.e = 0, e;
			if (a == 0 ? (d.length = f, s = 1, f--) : (d.length = f + 1, s = z(10, H - a), d[f] = o > 0 ? (u / z(10, i - o) % z(10, o) | 0) * s : 0), l) for (;;) if (f == 0) {
				for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
				for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
				a != s && (e.e++, d[0] == V && (d[0] = 1));
				break;
			} else {
				if (d[f] += s, d[f] != V) break;
				d[f--] = 0, s = 1;
			}
			for (a = d.length; d[--a] === 0;) d.pop();
		}
		return I && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
	}
	function xe(e, t, n) {
		if (!e.isFinite()) return Me(e);
		var r, i = e.e, a = K(e.d), o = a.length;
		return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ee(r) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (a = "0." + Ee(-i - 1) + a, n && (r = n - o) > 0 && (a += Ee(r))) : i >= o ? (a += Ee(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + "." + Ee(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + "." + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += "."), a += Ee(r))), a;
	}
	function Se(e, t) {
		var n = e[0];
		for (t *= H; n >= 10; n /= 10) t++;
		return t;
	}
	function Ce(e, t, n) {
		if (t > U) throw I = !0, n && (e.precision = n), Error(ue);
		return J(new e(N), t, 1, !0);
	}
	function we(e, t, n) {
		if (t > W) throw Error(ue);
		return J(new e(se), t, n, !0);
	}
	function Te(e) {
		var t = e.length - 1, n = t * H + 1;
		if (t = e[t], t) {
			for (; t % 10 == 0; t /= 10) n--;
			for (t = e[0]; t >= 10; t /= 10) n++;
		}
		return n;
	}
	function Ee(e) {
		for (var t = ""; e--;) t += "0";
		return t;
	}
	function De(e, t, n, r) {
		var i, a = new e(1), o = Math.ceil(r / H + 4);
		for (I = !1;;) {
			if (n % 2 && (a = a.times(t), Be(a.d, o) && (i = !0)), n = R(n / 2), n === 0) {
				n = a.d.length - 1, i && a.d[n] === 0 && ++a.d[n];
				break;
			}
			t = t.times(t), Be(t.d, o);
		}
		return I = !0, a;
	}
	function Oe(e) {
		return e.d[e.d.length - 1] & 1;
	}
	function ke(e, t, n) {
		for (var r, i, a = new e(t[0]), o = 0; ++o < t.length;) {
			if (i = new e(t[o]), !i.s) {
				a = i;
				break;
			}
			r = a.cmp(i), (r === n || r === 0 && a.s === n) && (a = i);
		}
		return a;
	}
	function Ae(e, t) {
		var n, r, i, a, o, s, c, l = 0, u = 0, d = 0, f = e.constructor, p = f.rounding, m = f.precision;
		if (!e.d || !e.d[0] || e.e > 17) return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : Infinity : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
		for (t == null ? (I = !1, c = m) : c = t, s = new f(.03125); e.e > -2;) e = e.times(s), d += 5;
		for (r = Math.log(z(2, d)) / Math.LN10 * 2 + 5 | 0, c += r, n = a = o = new f(1), f.precision = c;;) {
			if (a = J(a.times(e), c, 1), n = n.times(++u), s = o.plus(q(a, n, c, 1)), K(s.d).slice(0, c) === K(o.d).slice(0, c)) {
				for (i = d; i--;) o = J(o.times(o), c, 1);
				if (t == null) if (l < 3 && ve(o.d, c - r, p, l)) f.precision = c += 10, n = a = s = new f(1), u = 0, l++;
				else return J(o, f.precision = m, p, I = !0);
				else return f.precision = m, o;
			}
			o = s;
		}
	}
	function je(e, t) {
		var n, r, i, a, o, s, c, l, u, d, f, p = 1, m = 10, h = e, g = h.d, _ = h.constructor, v = _.rounding, y = _.precision;
		if (h.s < 0 || !g || !g[0] || !h.e && g[0] == 1 && g.length == 1) return new _(g && !g[0] ? -Infinity : h.s == 1 ? g ? 0 : h : NaN);
		if (t == null ? (I = !1, u = y) : u = t, _.precision = u += m, n = K(g), r = n.charAt(0), Math.abs(a = h.e) < 0x5543df729c000) {
			for (; r < 7 && r != 1 || r == 1 && n.charAt(1) > 3;) h = h.times(e), n = K(h.d), r = n.charAt(0), p++;
			a = h.e, r > 1 ? (h = new _("0." + n), a++) : h = new _(r + "." + n.slice(1));
		} else return l = Ce(_, u + 2, y).times(a + ""), h = je(new _(r + "." + n.slice(1)), u - m).plus(l), _.precision = y, t == null ? J(h, y, v, I = !0) : h;
		for (d = h, c = o = h = q(h.minus(1), h.plus(1), u, 1), f = J(h.times(h), u, 1), i = 3;;) {
			if (o = J(o.times(f), u, 1), l = c.plus(q(o, new _(i), u, 1)), K(l.d).slice(0, u) === K(c.d).slice(0, u)) if (c = c.times(2), a !== 0 && (c = c.plus(Ce(_, u + 2, y).times(a + ""))), c = q(c, new _(p), u, 1), t == null) if (ve(c.d, u - m, v, s)) _.precision = u += m, l = o = h = q(d.minus(1), d.plus(1), u, 1), f = J(h.times(h), u, 1), i = s = 1;
			else return J(c, _.precision = y, v, I = !0);
			else return _.precision = y, c;
			c = l, i += 2;
		}
	}
	function Me(e) {
		return String(e.s * e.s / 0);
	}
	function Ne(e, t) {
		var n, r, i;
		for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; t.charCodeAt(r) === 48; r++);
		for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
		if (t = t.slice(r, i), t) {
			if (i -= r, e.e = n = n - r - 1, e.d = [], r = (n + 1) % H, n < 0 && (r += H), r < i) {
				for (r && e.d.push(+t.slice(0, r)), i -= H; r < i;) e.d.push(+t.slice(r, r += H));
				t = t.slice(r), r = H - t.length;
			} else r -= i;
			for (; r--;) t += "0";
			e.d.push(+t), I && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
		} else e.e = 0, e.d = [0];
		return e;
	}
	function Pe(e, t) {
		var n, r, i, a, o, s, c, l, u;
		if (t.indexOf("_") > -1) {
			if (t = t.replace(/(\d)_(?=\d)/g, "$1"), he.test(t)) return Ne(e, t);
		} else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
		if (me.test(t)) n = 16, t = t.toLowerCase();
		else if (pe.test(t)) n = 2;
		else if (B.test(t)) n = 8;
		else throw Error(le + t);
		for (a = t.search(/p/i), a > 0 ? (c = +t.slice(a + 1), t = t.substring(2, a)) : t = t.slice(2), a = t.indexOf("."), o = a >= 0, r = e.constructor, o && (t = t.replace(".", ""), s = t.length, a = s - a, i = De(r, new r(n), a, a * 2)), l = ye(t, n, V), u = l.length - 1, a = u; l[a] === 0; --a) l.pop();
		return a < 0 ? new r(e.s * 0) : (e.e = Se(l, u), e.d = l, I = !1, o && (e = q(e, i, s * 4)), c && (e = e.times(Math.abs(c) < 54 ? z(2, c) : Ot.pow(2, c))), I = !0, e);
	}
	function Fe(e, t) {
		var n, r = t.d.length;
		if (r < 3) return t.isZero() ? t : Ie(e, 2, t, t);
		n = 1.4 * Math.sqrt(r), n = n > 16 ? 16 : n | 0, t = t.times(1 / Le(5, n)), t = Ie(e, 2, t, t);
		for (var i, a = new e(5), o = new e(16), s = new e(20); n--;) i = t.times(t), t = t.times(a.plus(i.times(o.times(i).minus(s))));
		return t;
	}
	function Ie(e, t, n, r, i) {
		var a, o, s, c, l = 1, u = e.precision, d = Math.ceil(u / H);
		for (I = !1, c = n.times(n), s = new e(r);;) {
			if (o = q(s.times(c), new e(t++ * t++), u, 1), s = i ? r.plus(o) : r.minus(o), r = q(o.times(c), new e(t++ * t++), u, 1), o = s.plus(r), o.d[d] !== void 0) {
				for (a = d; o.d[a] === s.d[a] && a--;);
				if (a == -1) break;
			}
			a = s, s = r, r = o, o = a, l++;
		}
		return I = !0, o.d.length = d + 1, o;
	}
	function Le(e, t) {
		for (var n = e; --t;) n *= e;
		return n;
	}
	function Re(e, t) {
		var n, r = t.s < 0, i = we(e, e.precision, 1), a = i.times(.5);
		if (t = t.abs(), t.lte(a)) return F = r ? 4 : 1, t;
		if (n = t.divToInt(i), n.isZero()) F = r ? 3 : 2;
		else {
			if (t = t.minus(n.times(i)), t.lte(a)) return F = Oe(n) ? r ? 2 : 3 : r ? 4 : 1, t;
			F = Oe(n) ? r ? 1 : 4 : r ? 3 : 2;
		}
		return t.minus(i).abs();
	}
	function ze(e, t, n, r) {
		var i, a, o, s, c, l, u, d, f, p = e.constructor, m = n !== void 0;
		if (m ? (_e(n, 1, j), r === void 0 ? r = p.rounding : _e(r, 0, 8)) : (n = p.precision, r = p.rounding), !e.isFinite()) u = Me(e);
		else {
			for (u = xe(e), o = u.indexOf("."), m ? (i = 2, t == 16 ? n = n * 4 - 3 : t == 8 && (n = n * 3 - 2)) : i = t, o >= 0 && (u = u.replace(".", ""), f = new p(1), f.e = u.length - o, f.d = ye(xe(f), 10, i), f.e = f.d.length), d = ye(u, 10, i), a = c = d.length; d[--c] == 0;) d.pop();
			if (!d[0]) u = m ? "0p+0" : "0";
			else {
				if (o < 0 ? a-- : (e = new p(e), e.d = d, e.e = a, e = q(e, f, n, r, 0, i), d = e.d, a = e.e, l = ce), o = d[n], s = i / 2, l ||= d[n + 1] !== void 0, l = r < 4 ? (o !== void 0 || l) && (r === 0 || r === (e.s < 0 ? 3 : 2)) : o > s || o === s && (r === 4 || l || r === 6 && d[n - 1] & 1 || r === (e.s < 0 ? 8 : 7)), d.length = n, l) for (; ++d[--n] > i - 1;) d[n] = 0, n || (++a, d.unshift(1));
				for (c = d.length; !d[c - 1]; --c);
				for (o = 0, u = ""; o < c; o++) u += M.charAt(d[o]);
				if (m) {
					if (c > 1) if (t == 16 || t == 8) {
						for (o = t == 16 ? 4 : 3, --c; c % o; c++) u += "0";
						for (d = ye(u, i, t), c = d.length; !d[c - 1]; --c);
						for (o = 1, u = "1."; o < c; o++) u += M.charAt(d[o]);
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
	function Be(e, t) {
		if (e.length > t) return e.length = t, !0;
	}
	function Ve(e) {
		return new this(e).abs();
	}
	function He(e) {
		return new this(e).acos();
	}
	function Ue(e) {
		return new this(e).acosh();
	}
	function We(e, t) {
		return new this(e).plus(t);
	}
	function Ge(e) {
		return new this(e).asin();
	}
	function Ke(e) {
		return new this(e).asinh();
	}
	function qe(e) {
		return new this(e).atan();
	}
	function Je(e) {
		return new this(e).atanh();
	}
	function Ye(e, t) {
		e = new this(e), t = new this(t);
		var n, r = this.precision, i = this.rounding, a = r + 4;
		return !e.s || !t.s ? n = new this(NaN) : !e.d && !t.d ? (n = we(this, a, 1).times(t.s > 0 ? .25 : .75), n.s = e.s) : !t.d || e.isZero() ? (n = t.s < 0 ? we(this, r, i) : new this(0), n.s = e.s) : !e.d || t.isZero() ? (n = we(this, a, 1).times(.5), n.s = e.s) : t.s < 0 ? (this.precision = a, this.rounding = 1, n = this.atan(q(e, t, a, 1)), t = we(this, a, 1), this.precision = r, this.rounding = i, n = e.s < 0 ? n.minus(t) : n.plus(t)) : n = this.atan(q(e, t, a, 1)), n;
	}
	function Xe(e) {
		return new this(e).cbrt();
	}
	function Ze(e) {
		return J(e = new this(e), e.e + 1, 2);
	}
	function Qe(e, t, n) {
		return new this(e).clamp(t, n);
	}
	function $e(e) {
		if (!e || typeof e != "object") throw Error(L + "Object expected");
		var t, n, r, i = e.defaults === !0, a = [
			"precision",
			1,
			j,
			"rounding",
			0,
			8,
			"toExpNeg",
			-oe,
			0,
			"toExpPos",
			0,
			oe,
			"maxE",
			0,
			oe,
			"minE",
			-oe,
			0,
			"modulo",
			0,
			9
		];
		for (t = 0; t < a.length; t += 3) if (n = a[t], i && (this[n] = P[n]), (r = e[n]) !== void 0) if (R(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
		else throw Error(le + n + ": " + r);
		if (n = "crypto", i && (this[n] = P[n]), (r = e[n]) !== void 0) if (r === !0 || r === !1 || r === 0 || r === 1) if (r) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[n] = !0;
		else throw Error(de);
		else this[n] = !1;
		else throw Error(le + n + ": " + r);
		return this;
	}
	function et(e) {
		return new this(e).cos();
	}
	function tt(e) {
		return new this(e).cosh();
	}
	function nt(e) {
		var t, n, r;
		function i(e) {
			var t, n, r, a = this;
			if (!(a instanceof i)) return new i(e);
			if (a.constructor = i, st(e)) {
				a.s = e.s, I ? !e.d || e.e > i.maxE ? (a.e = NaN, a.d = null) : e.e < i.minE ? (a.e = 0, a.d = [0]) : (a.e = e.e, a.d = e.d.slice()) : (a.e = e.e, a.d = e.d ? e.d.slice() : e.d);
				return;
			}
			if (r = typeof e, r === "number") {
				if (e === 0) {
					a.s = 1 / e < 0 ? -1 : 1, a.e = 0, a.d = [0];
					return;
				}
				if (e < 0 ? (e = -e, a.s = -1) : a.s = 1, e === ~~e && e < 1e7) {
					for (t = 0, n = e; n >= 10; n /= 10) t++;
					I ? t > i.maxE ? (a.e = NaN, a.d = null) : t < i.minE ? (a.e = 0, a.d = [0]) : (a.e = t, a.d = [e]) : (a.e = t, a.d = [e]);
					return;
				}
				if (e * 0 != 0) {
					e || (a.s = NaN), a.e = NaN, a.d = null;
					return;
				}
				return Ne(a, e.toString());
			}
			if (r === "string") return (n = e.charCodeAt(0)) === 45 ? (e = e.slice(1), a.s = -1) : (n === 43 && (e = e.slice(1)), a.s = 1), he.test(e) ? Ne(a, e) : Pe(a, e);
			if (r === "bigint") return e < 0 ? (e = -e, a.s = -1) : a.s = 1, Ne(a, e.toString());
			throw Error(le + e);
		}
		if (i.prototype = G, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = $e, i.clone = nt, i.isDecimal = st, i.abs = Ve, i.acos = He, i.acosh = Ue, i.add = We, i.asin = Ge, i.asinh = Ke, i.atan = qe, i.atanh = Je, i.atan2 = Ye, i.cbrt = Xe, i.ceil = Ze, i.clamp = Qe, i.cos = et, i.cosh = tt, i.div = rt, i.exp = it, i.floor = at, i.hypot = ot, i.ln = ct, i.log = lt, i.log10 = dt, i.log2 = ut, i.max = ft, i.min = pt, i.mod = mt, i.mul = ht, i.pow = gt, i.random = _t, i.round = vt, i.sign = yt, i.sin = bt, i.sinh = xt, i.sqrt = St, i.sub = Ct, i.sum = wt, i.tan = Tt, i.tanh = Et, i.trunc = Dt, e === void 0 && (e = {}), e && e.defaults !== !0) for (r = [
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
	function rt(e, t) {
		return new this(e).div(t);
	}
	function it(e) {
		return new this(e).exp();
	}
	function at(e) {
		return J(e = new this(e), e.e + 1, 3);
	}
	function ot() {
		var e, t, n = new this(0);
		for (I = !1, e = 0; e < arguments.length;) if (t = new this(arguments[e++]), t.d) n.d && (n = n.plus(t.times(t)));
		else {
			if (t.s) return I = !0, new this(Infinity);
			n = t;
		}
		return I = !0, n.sqrt();
	}
	function st(e) {
		return e instanceof Ot || e && e.toStringTag === fe || !1;
	}
	function ct(e) {
		return new this(e).ln();
	}
	function lt(e, t) {
		return new this(e).log(t);
	}
	function ut(e) {
		return new this(e).log(2);
	}
	function dt(e) {
		return new this(e).log(10);
	}
	function ft() {
		return ke(this, arguments, -1);
	}
	function pt() {
		return ke(this, arguments, 1);
	}
	function mt(e, t) {
		return new this(e).mod(t);
	}
	function ht(e, t) {
		return new this(e).mul(t);
	}
	function gt(e, t) {
		return new this(e).pow(t);
	}
	function _t(e) {
		var t, n, r, i, a = 0, o = new this(1), s = [];
		if (e === void 0 ? e = this.precision : _e(e, 1, j), r = Math.ceil(e / H), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(r)); a < r;) i = t[a], i >= 429e7 ? t[a] = crypto.getRandomValues(new Uint32Array(1))[0] : s[a++] = i % 1e7;
		else if (crypto.randomBytes) {
			for (t = crypto.randomBytes(r *= 4); a < r;) i = t[a] + (t[a + 1] << 8) + (t[a + 2] << 16) + ((t[a + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, a) : (s.push(i % 1e7), a += 4);
			a = r / 4;
		} else throw Error(de);
		else for (; a < r;) s[a++] = Math.random() * 1e7 | 0;
		for (r = s[--a], e %= H, r && e && (i = z(10, H - e), s[a] = (r / i | 0) * i); s[a] === 0; a--) s.pop();
		if (a < 0) n = 0, s = [0];
		else {
			for (n = -1; s[0] === 0; n -= H) s.shift();
			for (r = 1, i = s[0]; i >= 10; i /= 10) r++;
			r < H && (n -= H - r);
		}
		return o.e = n, o.d = s, o;
	}
	function vt(e) {
		return J(e = new this(e), e.e + 1, this.rounding);
	}
	function yt(e) {
		return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
	}
	function bt(e) {
		return new this(e).sin();
	}
	function xt(e) {
		return new this(e).sinh();
	}
	function St(e) {
		return new this(e).sqrt();
	}
	function Ct(e, t) {
		return new this(e).sub(t);
	}
	function wt() {
		var e = 0, t = arguments, n = new this(t[e]);
		for (I = !1; n.s && ++e < t.length;) n = n.plus(t[e]);
		return I = !0, J(n, this.precision, this.rounding);
	}
	function Tt(e) {
		return new this(e).tan();
	}
	function Et(e) {
		return new this(e).tanh();
	}
	function Dt(e) {
		return J(e = new this(e), e.e + 1, 1);
	}
	G[Symbol.for("nodejs.util.inspect.custom")] = G.toString, G[Symbol.toStringTag] = "Decimal";
	var Ot = G.constructor = nt(P);
	N = new Ot(N), se = new Ot(se);
	var kt = Ot;
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
		finalPdfSha256Hex: "finalPdfSha256Hex"
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
] : ["error"] });
process.env.NODE_ENV !== "production" && (h.prisma = g);
//#endregion
//#region ../../node_modules/base64-js/index.js
var _ = /* @__PURE__ */ s(((e) => {
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
})), v = /* @__PURE__ */ s(((e) => {
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
})), y = /* @__PURE__ */ s(((e) => {
	var t = _(), n = v(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
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
		if (U(e, ArrayBuffer) || e && U(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (U(e, SharedArrayBuffer) || e && U(e.buffer, SharedArrayBuffer))) return h(e, t, n);
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
	function m(e) {
		if (U(e, Uint8Array)) {
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
			let t = y(e.length) | 0, n = o(t);
			return n.length === 0 || e.copy(n, 0, 0, t), n;
		}
		if (e.length !== void 0) return typeof e.length != "number" || W(e.length) ? o(0) : p(e);
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
		if (U(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), U(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
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
			if (U(t, Uint8Array)) i + t.length > r.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
			else if (s.isBuffer(t)) t.copy(r, i);
			else throw TypeError("\"list\" argument must be an Array of Buffers");
			i += t.length;
		}
		return r;
	};
	function x(e, t) {
		if (s.isBuffer(e)) return e.length;
		if (ArrayBuffer.isView(e) || U(e, ArrayBuffer)) return e.byteLength;
		if (typeof e != "string") throw TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
		let n = e.length, r = arguments.length > 2 && arguments[2] === !0;
		if (!r && n === 0) return 0;
		let i = !1;
		for (;;) switch (t) {
			case "ascii":
			case "latin1":
			case "binary": return n;
			case "utf8":
			case "utf-8": return B(e).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return n * 2;
			case "hex": return n >>> 1;
			case "base64": return H(e).length;
			default:
				if (i) return r ? -1 : B(e).length;
				t = ("" + t).toLowerCase(), i = !0;
		}
	}
	s.byteLength = x;
	function S(e, t, n) {
		let r = !1;
		if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t)) return "";
		for (e ||= "utf8";;) switch (e) {
			case "hex": return oe(this, t, n);
			case "utf8":
			case "utf-8": return A(this, t, n);
			case "ascii": return ie(this, t, n);
			case "latin1":
			case "binary": return ae(this, t, n);
			case "base64": return k(this, t, n);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le": return j(this, t, n);
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
		if (U(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
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
		if (typeof n == "string" ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, W(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
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
			if (W(r)) return o;
			e[n + o] = r;
		}
		return o;
	}
	function D(e, t, n, r) {
		return ge(B(t, e.length - n), e, n, r);
	}
	function ee(e, t, n, r) {
		return ge(he(t), e, n, r);
	}
	function O(e, t, n, r) {
		return ge(H(t), e, n, r);
	}
	function te(e, t, n, r) {
		return ge(V(t, e.length - n), e, n, r);
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
			case "binary": return ee(this, e, t, n);
			case "base64": return O(this, e, t, n);
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
	function oe(e, t, n) {
		let r = e.length;
		(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
		let i = "";
		for (let r = t; r < n; ++r) i += G[e[r]];
		return i;
	}
	function j(e, t, n) {
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
	function M(e, t, n) {
		if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
		if (e + t > n) throw RangeError("Trying to access beyond buffer length");
	}
	s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return r;
	}, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e + --t], i = 1;
		for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
		return r;
	}, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
		return e >>>= 0, t || M(e, 1, this.length), this[e];
	}, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
		return e >>>= 0, t || M(e, 2, this.length), this[e] | this[e + 1] << 8;
	}, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
		return e >>>= 0, t || M(e, 2, this.length), this[e] << 8 | this[e + 1];
	}, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
	}, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
	}, s.prototype.readBigUInt64LE = K(function(e) {
		e >>>= 0, R(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && z(e, this.length - 8);
		let r = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
		return BigInt(r) + (BigInt(i) << BigInt(32));
	}), s.prototype.readBigUInt64BE = K(function(e) {
		e >>>= 0, R(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && z(e, this.length - 8);
		let r = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
		return (BigInt(r) << BigInt(32)) + BigInt(i);
	}), s.prototype.readIntLE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = this[e], i = 1, a = 0;
		for (; ++a < t && (i *= 256);) r += this[e + a] * i;
		return i *= 128, r >= i && (r -= 2 ** (8 * t)), r;
	}, s.prototype.readIntBE = function(e, t, n) {
		e >>>= 0, t >>>= 0, n || M(e, t, this.length);
		let r = t, i = 1, a = this[e + --r];
		for (; r > 0 && (i *= 256);) a += this[e + --r] * i;
		return i *= 128, a >= i && (a -= 2 ** (8 * t)), a;
	}, s.prototype.readInt8 = function(e, t) {
		return e >>>= 0, t || M(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
	}, s.prototype.readInt16LE = function(e, t) {
		e >>>= 0, t || M(e, 2, this.length);
		let n = this[e] | this[e + 1] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt16BE = function(e, t) {
		e >>>= 0, t || M(e, 2, this.length);
		let n = this[e + 1] | this[e] << 8;
		return n & 32768 ? n | 4294901760 : n;
	}, s.prototype.readInt32LE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
	}, s.prototype.readInt32BE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
	}, s.prototype.readBigInt64LE = K(function(e) {
		e >>>= 0, R(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && z(e, this.length - 8);
		let r = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
		return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
	}), s.prototype.readBigInt64BE = K(function(e) {
		e >>>= 0, R(e, "offset");
		let t = this[e], n = this[e + 7];
		(t === void 0 || n === void 0) && z(e, this.length - 8);
		let r = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
		return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
	}), s.prototype.readFloatLE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), n.read(this, e, !0, 23, 4);
	}, s.prototype.readFloatBE = function(e, t) {
		return e >>>= 0, t || M(e, 4, this.length), n.read(this, e, !1, 23, 4);
	}, s.prototype.readDoubleLE = function(e, t) {
		return e >>>= 0, t || M(e, 8, this.length), n.read(this, e, !0, 52, 8);
	}, s.prototype.readDoubleBE = function(e, t) {
		return e >>>= 0, t || M(e, 8, this.length), n.read(this, e, !1, 52, 8);
	};
	function N(e, t, n, r, i, a) {
		if (!s.isBuffer(e)) throw TypeError("\"buffer\" argument must be a Buffer instance");
		if (t > i || t < a) throw RangeError("\"value\" argument is out of bounds");
		if (n + r > e.length) throw RangeError("Index out of range");
	}
	s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			N(this, e, t, n, r, 0);
		}
		let i = 1, a = 0;
		for (this[t] = e & 255; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
		return t + n;
	}, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, n >>>= 0, !r) {
			let r = 2 ** (8 * n) - 1;
			N(this, e, t, n, r, 0);
		}
		let i = n - 1, a = 1;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
		return t + n;
	}, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
	}, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
	}, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	};
	function se(e, t, n, r, i) {
		fe(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n;
	}
	function P(e, t, n, r, i) {
		fe(t, r, i, e, n, 7);
		let a = Number(t & BigInt(4294967295));
		e[n + 7] = a, a >>= 8, e[n + 6] = a, a >>= 8, e[n + 5] = a, a >>= 8, e[n + 4] = a;
		let o = Number(t >> BigInt(32) & BigInt(4294967295));
		return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8;
	}
	s.prototype.writeBigUInt64LE = K(function(e, t = 0) {
		return se(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeBigUInt64BE = K(function(e, t = 0) {
		return P(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
	}), s.prototype.writeIntLE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			N(this, e, t, n, r - 1, -r);
		}
		let i = 0, a = 1, o = 0;
		for (this[t] = e & 255; ++i < n && (a *= 256);) e < 0 && o === 0 && this[t + i - 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeIntBE = function(e, t, n, r) {
		if (e = +e, t >>>= 0, !r) {
			let r = 2 ** (8 * n - 1);
			N(this, e, t, n, r - 1, -r);
		}
		let i = n - 1, a = 1, o = 0;
		for (this[t + i] = e & 255; --i >= 0 && (a *= 256);) e < 0 && o === 0 && this[t + i + 1] !== 0 && (o = 1), this[t + i] = (e / a >> 0) - o & 255;
		return t + n;
	}, s.prototype.writeInt8 = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
	}, s.prototype.writeInt16LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
	}, s.prototype.writeInt16BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
	}, s.prototype.writeInt32LE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
	}, s.prototype.writeInt32BE = function(e, t, n) {
		return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
	}, s.prototype.writeBigInt64LE = K(function(e, t = 0) {
		return se(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	}), s.prototype.writeBigInt64BE = K(function(e, t = 0) {
		return P(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
	});
	function ce(e, t, n, r, i, a) {
		if (n + r > e.length || n < 0) throw RangeError("Index out of range");
	}
	function F(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ce(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4;
	}
	s.prototype.writeFloatLE = function(e, t, n) {
		return F(this, e, t, !0, n);
	}, s.prototype.writeFloatBE = function(e, t, n) {
		return F(this, e, t, !1, n);
	};
	function I(e, t, r, i, a) {
		return t = +t, r >>>= 0, a || ce(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8;
	}
	s.prototype.writeDoubleLE = function(e, t, n) {
		return I(this, e, t, !0, n);
	}, s.prototype.writeDoubleBE = function(e, t, n) {
		return I(this, e, t, !1, n);
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
	var L = {};
	function le(e, t, n) {
		L[e] = class extends n {
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
	le("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
		return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
	}, RangeError), le("ERR_INVALID_ARG_TYPE", function(e, t) {
		return `The "${e}" argument must be of type number. Received type ${typeof t}`;
	}, TypeError), le("ERR_OUT_OF_RANGE", function(e, t, n) {
		let r = `The value of "${e}" is out of range.`, i = n;
		return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = ue(String(n)) : typeof n == "bigint" && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = ue(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r;
	}, RangeError);
	function ue(e) {
		let t = "", n = e.length, r = +(e[0] === "-");
		for (; n >= r + 4; n -= 3) t = `_${e.slice(n - 3, n)}${t}`;
		return `${e.slice(0, n)}${t}`;
	}
	function de(e, t, n) {
		R(t, "offset"), (e[t] === void 0 || e[t + n] === void 0) && z(t, e.length - (n + 1));
	}
	function fe(e, t, n, r, i, a) {
		if (e > n || e < t) {
			let r = typeof t == "bigint" ? "n" : "", i;
			throw i = a > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(a + 1) * 8}${r}` : `>= -(2${r} ** ${(a + 1) * 8 - 1}${r}) and < 2 ** ${(a + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new L.ERR_OUT_OF_RANGE("value", i, e);
		}
		de(r, i, a);
	}
	function R(e, t) {
		if (typeof e != "number") throw new L.ERR_INVALID_ARG_TYPE(t, "number", e);
	}
	function z(e, t, n) {
		throw Math.floor(e) === e ? t < 0 ? new L.ERR_BUFFER_OUT_OF_BOUNDS() : new L.ERR_OUT_OF_RANGE(n || "offset", `>= ${+!!n} and <= ${t}`, e) : (R(e, n), new L.ERR_OUT_OF_RANGE(n || "offset", "an integer", e));
	}
	var pe = /[^+/0-9A-Za-z-_]/g;
	function me(e) {
		if (e = e.split("=")[0], e = e.trim().replace(pe, ""), e.length < 2) return "";
		for (; e.length % 4 != 0;) e += "=";
		return e;
	}
	function B(e, t) {
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
	function he(e) {
		let t = [];
		for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n) & 255);
		return t;
	}
	function V(e, t) {
		let n, r, i, a = [];
		for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
		return a;
	}
	function H(e) {
		return t.toByteArray(me(e));
	}
	function ge(e, t, n, r) {
		let i;
		for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
		return i;
	}
	function U(e, t) {
		return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
	}
	function W(e) {
		return e !== e;
	}
	var G = (function() {
		let e = "0123456789abcdef", t = Array(256);
		for (let n = 0; n < 16; ++n) {
			let r = n * 16;
			for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
		}
		return t;
	})();
	function K(e) {
		return typeof BigInt > "u" ? _e : e;
	}
	function _e() {
		throw Error("BigInt not supported");
	}
})), b = /* @__PURE__ */ s(((e, t) => {
	var n = y(), r = n.Buffer;
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
})), x = /* @__PURE__ */ s(((e, t) => {
	t.exports = {};
})), S = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = x(), i = x();
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
})), C = /* @__PURE__ */ s(((e, t) => {
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
})), w = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = C(), i = 128, a = 0, o = 32, s = 16, c = 2, l = s | o | a << 6, u = c | a << 6;
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
})), T = /* @__PURE__ */ s(((e, t) => {
	var n = y().Buffer, r = y().SlowBuffer;
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
})), E = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = x(), i = w(), a = x(), o = "\"%s\" is not a valid algorithm.\n  Supported algorithms are:\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\", \"PS256\", \"PS384\", \"PS512\", \"ES256\", \"ES384\", \"ES512\" and \"none\".", s = "secret must be a string or buffer", c = "key must be a string or a buffer", l = "key must be a string, a buffer or an object", u = typeof r.createPublicKey == "function";
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
	var S, C = "timingSafeEqual" in r ? function(e, t) {
		return e.byteLength === t.byteLength ? r.timingSafeEqual(e, t) : !1;
	} : function(e, t) {
		return S ||= T(), S(e, t);
	};
	function E(e) {
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
	function ee(e) {
		return function(t, n, i) {
			d(i), t = v(t), n = h(n);
			var a = r.createVerify("RSA-SHA" + e);
			return a.update(t), a.verify(i, n, "base64");
		};
	}
	function O(e) {
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
		var t = ee(e);
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
			ps: O,
			es: k,
			none: ne
		}, n = {
			hs: E,
			rs: ee,
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
})), D = /* @__PURE__ */ s(((e, t) => {
	var n = y().Buffer;
	t.exports = function(e) {
		return typeof e == "string" ? e : typeof e == "number" || n.isBuffer(e) ? e.toString() : JSON.stringify(e);
	};
})), ee = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = S(), i = E(), a = x(), o = D(), s = x();
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
})), O = /* @__PURE__ */ s(((e, t) => {
	var n = b().Buffer, r = S(), i = E(), a = x(), o = D(), s = x(), c = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
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
})), te = /* @__PURE__ */ s(((e) => {
	var t = ee(), n = O();
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
})), k = /* @__PURE__ */ s(((e, t) => {
	var n = te();
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
})), A = /* @__PURE__ */ s(((e, t) => {
	var n = function(e, t) {
		Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, t && (this.inner = t);
	};
	n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, t.exports = n;
})), ne = /* @__PURE__ */ s(((e, t) => {
	var n = A(), r = function(e, t) {
		n.call(this, e), this.name = "NotBeforeError", this.date = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), re = /* @__PURE__ */ s(((e, t) => {
	var n = A(), r = function(e, t) {
		n.call(this, e), this.name = "TokenExpiredError", this.expiredAt = t;
	};
	r.prototype = Object.create(n.prototype), r.prototype.constructor = r, t.exports = r;
})), ie = /* @__PURE__ */ s(((e, t) => {
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
})), ae = /* @__PURE__ */ s(((e, t) => {
	var n = ie();
	t.exports = function(e, t) {
		var r = t || Math.floor(Date.now() / 1e3);
		if (typeof e == "string") {
			var i = n(e);
			return i === void 0 ? void 0 : Math.floor(r + i / 1e3);
		} else if (typeof e == "number") return r + e;
		else return;
	};
})), oe = /* @__PURE__ */ s(((e, t) => {
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
})), j = /* @__PURE__ */ s(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), M = /* @__PURE__ */ s(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = oe(), a = j();
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
})), N = /* @__PURE__ */ s(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), se = /* @__PURE__ */ s(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), P = /* @__PURE__ */ s(((e, t) => {
	var n = j(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = oe(), { safeRe: a, t: o } = M(), s = N(), { compareIdentifiers: c } = se();
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
})), ce = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t, r = !1) => {
		if (e instanceof n) return e;
		try {
			return new n(e, t);
		} catch (e) {
			if (!r) return null;
			throw e;
		}
	};
})), F = /* @__PURE__ */ s(((e, t) => {
	var n = ce();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r ? r.version : null;
	};
})), I = /* @__PURE__ */ s(((e, t) => {
	var n = ce();
	t.exports = (e, t) => {
		let r = n(e.trim().replace(/^[=v]+/, ""), t);
		return r ? r.version : null;
	};
})), L = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t, r, i, a) => {
		typeof r == "string" && (a = i, i = r, r = void 0);
		try {
			return new n(e instanceof n ? e.version : e, r).inc(t, i, a).version;
		} catch {
			return null;
		}
	};
})), le = /* @__PURE__ */ s(((e, t) => {
	var n = ce();
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
})), ue = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t) => new n(e, t).major;
})), de = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t) => new n(e, t).minor;
})), fe = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t) => new n(e, t).patch;
})), R = /* @__PURE__ */ s(((e, t) => {
	var n = ce();
	t.exports = (e, t) => {
		let r = n(e, t);
		return r && r.prerelease.length ? r.prerelease : null;
	};
})), z = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), pe = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(t, e, r);
})), me = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t) => n(e, t, !0);
})), B = /* @__PURE__ */ s(((e, t) => {
	var n = P();
	t.exports = (e, t, r) => {
		let i = new n(e, r), a = new n(t, r);
		return i.compare(a) || i.compareBuild(a);
	};
})), he = /* @__PURE__ */ s(((e, t) => {
	var n = B();
	t.exports = (e, t) => e.sort((e, r) => n(e, r, t));
})), V = /* @__PURE__ */ s(((e, t) => {
	var n = B();
	t.exports = (e, t) => e.sort((e, r) => n(r, e, t));
})), H = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), ge = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), U = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), W = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), G = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), K = /* @__PURE__ */ s(((e, t) => {
	var n = z();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), _e = /* @__PURE__ */ s(((e, t) => {
	var n = U(), r = W(), i = H(), a = G(), o = ge(), s = K();
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
})), ve = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = ce(), { safeRe: i, t: a } = M();
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
})), ye = /* @__PURE__ */ s(((e, t) => {
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
})), be = /* @__PURE__ */ s(((e, t) => {
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
			e = e.replace(s, ee(this.options.includePrerelease)), o("hyphen replace", e), e = e.replace(c[l.COMPARATORTRIM], u), o("comparator trim", e), e = e.replace(c[l.TILDETRIM], d), o("tilde trim", e), e = e.replace(c[l.CARETTRIM], f), o("caret trim", e);
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
			for (let t = 0; t < this.set.length; t++) if (O(this.set[t], e, this.options)) return !0;
			return !1;
		}
	};
	var r = new (ye())(), i = N(), a = q(), o = j(), s = P(), { safeRe: c, t: l, comparatorTrimReplace: u, tildeTrimReplace: d, caretTrimReplace: f } = M(), { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: m } = oe(), h = (e) => e.value === "<0.0.0-0", g = (e) => e.value === "", _ = (e, t) => {
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
	}, E = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[l.STAR], "")), D = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? l.GTE0PRE : l.GTE0], "")), ee = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = y(r) ? "" : y(i) ? `>=${r}.0.0${e ? "-0" : ""}` : y(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = y(l) ? "" : y(u) ? `<${+l + 1}.0.0-0` : y(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), O = (e, t, n) => {
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
})), q = /* @__PURE__ */ s(((e, t) => {
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
	var r = N(), { safeRe: i, t: a } = M(), o = _e(), s = j(), c = P(), l = be();
})), J = /* @__PURE__ */ s(((e, t) => {
	var n = be();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), xe = /* @__PURE__ */ s(((e, t) => {
	var n = be();
	t.exports = (e, t) => new n(e, t).set.map((e) => e.map((e) => e.value).join(" ").trim().split(" "));
})), Se = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = be();
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
})), Ce = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = be();
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
})), we = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = be(), i = H();
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
})), Te = /* @__PURE__ */ s(((e, t) => {
	var n = be();
	t.exports = (e, t) => {
		try {
			return new n(e, t).range || "*";
		} catch {
			return null;
		}
	};
})), Ee = /* @__PURE__ */ s(((e, t) => {
	var n = P(), r = q(), { ANY: i } = r, a = be(), o = J(), s = H(), c = ge(), l = K(), u = G();
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
})), De = /* @__PURE__ */ s(((e, t) => {
	var n = Ee();
	t.exports = (e, t, r) => n(e, t, ">", r);
})), Oe = /* @__PURE__ */ s(((e, t) => {
	var n = Ee();
	t.exports = (e, t, r) => n(e, t, "<", r);
})), ke = /* @__PURE__ */ s(((e, t) => {
	var n = be();
	t.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r));
})), Ae = /* @__PURE__ */ s(((e, t) => {
	var n = J(), r = z();
	t.exports = (e, t, i) => {
		let a = [], o = null, s = null, c = e.sort((e, t) => r(e, t, i));
		for (let e of c) n(e, t, i) ? (s = e, o ||= e) : (s && a.push([o, s]), s = null, o = null);
		o && a.push([o, null]);
		let l = [];
		for (let [e, t] of a) e === t ? l.push(e) : !t && e === c[0] ? l.push("*") : t ? e === c[0] ? l.push(`<=${t}`) : l.push(`${e} - ${t}`) : l.push(`>=${e}`);
		let u = l.join(" || "), d = typeof t.raw == "string" ? t.raw : String(t);
		return u.length < d.length ? u : t;
	};
})), je = /* @__PURE__ */ s(((e, t) => {
	var n = be(), r = q(), { ANY: i } = r, a = J(), o = z(), s = (e, t, r = {}) => {
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
})), Me = /* @__PURE__ */ s(((e, t) => {
	var n = M(), r = oe(), i = P(), a = se();
	t.exports = {
		parse: ce(),
		valid: F(),
		clean: I(),
		inc: L(),
		diff: le(),
		major: ue(),
		minor: de(),
		patch: fe(),
		prerelease: R(),
		compare: z(),
		rcompare: pe(),
		compareLoose: me(),
		compareBuild: B(),
		sort: he(),
		rsort: V(),
		gt: H(),
		lt: ge(),
		eq: U(),
		neq: W(),
		gte: G(),
		lte: K(),
		cmp: _e(),
		coerce: ve(),
		Comparator: q(),
		Range: be(),
		satisfies: J(),
		toComparators: xe(),
		maxSatisfying: Se(),
		minSatisfying: Ce(),
		minVersion: we(),
		validRange: Te(),
		outside: Ee(),
		gtr: De(),
		ltr: Oe(),
		intersects: ke(),
		simplifyRange: Ae(),
		subset: je(),
		SemVer: i,
		re: n.re,
		src: n.src,
		tokens: n.t,
		SEMVER_SPEC_VERSION: r.SEMVER_SPEC_VERSION,
		RELEASE_TYPES: r.RELEASE_TYPES,
		compareIdentifiers: a.compareIdentifiers,
		rcompareIdentifiers: a.rcompareIdentifiers
	};
})), Ne = /* @__PURE__ */ s(((e, t) => {
	t.exports = Me().satisfies(process.version, ">=15.7.0");
})), Pe = /* @__PURE__ */ s(((e, t) => {
	t.exports = Me().satisfies(process.version, ">=16.9.0");
})), Fe = /* @__PURE__ */ s(((e, t) => {
	var n = Ne(), r = Pe(), i = {
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
})), Ie = /* @__PURE__ */ s(((e, t) => {
	t.exports = Me().satisfies(process.version, "^6.12.0 || >=8.0.0");
})), Le = /* @__PURE__ */ s(((e, t) => {
	var n = A(), r = ne(), i = re(), a = k(), o = ae(), s = Fe(), c = Ie(), l = te(), { KeyObject: u, createSecretKey: d, createPublicKey: f } = x(), p = [
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
})), Re = /* @__PURE__ */ s(((e, t) => {
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
	var w = Object.prototype, T = w.hasOwnProperty, E = w.toString, D = w.propertyIsEnumerable, ee = C(Object.keys, Object), O = Math.max;
	function te(e, t) {
		var n = ae(e) || ie(e) ? x(e.length, String) : [], r = n.length, i = !!r;
		for (var a in e) (t || T.call(e, a)) && !(i && (a == "length" || A(a, r))) && n.push(a);
		return n;
	}
	function k(e) {
		if (!ne(e)) return ee(e);
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
		e = oe(e) ? e : de(e), n = n && !r ? L(n) : 0;
		var i = e.length;
		return n < 0 && (n = O(i + n, 0)), ce(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && y(e, t, n) > -1;
	}
	function ie(e) {
		return j(e) && T.call(e, "callee") && (!D.call(e, "callee") || E.call(e) == o);
	}
	var ae = Array.isArray;
	function oe(e) {
		return e != null && N(e.length) && !M(e);
	}
	function j(e) {
		return P(e) && oe(e);
	}
	function M(e) {
		var t = se(e) ? E.call(e) : "";
		return t == s || t == c;
	}
	function N(e) {
		return typeof e == "number" && e > -1 && e % 1 == 0 && e <= r;
	}
	function se(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function P(e) {
		return !!e && typeof e == "object";
	}
	function ce(e) {
		return typeof e == "string" || !ae(e) && P(e) && E.call(e) == l;
	}
	function F(e) {
		return typeof e == "symbol" || P(e) && E.call(e) == u;
	}
	function I(e) {
		return e ? (e = le(e), e === n || e === -n ? (e < 0 ? -1 : 1) * i : e === e ? e : 0) : e === 0 ? e : 0;
	}
	function L(e) {
		var t = I(e), n = t % 1;
		return t === t ? n ? t - n : t : 0;
	}
	function le(e) {
		if (typeof e == "number") return e;
		if (F(e)) return a;
		if (se(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = se(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(d, "");
		var n = p.test(e);
		return n || m.test(e) ? g(e.slice(2), n ? 2 : 8) : f.test(e) ? a : +e;
	}
	function ue(e) {
		return oe(e) ? te(e) : k(e);
	}
	function de(e) {
		return e ? S(e, ue(e)) : [];
	}
	t.exports = re;
})), ze = /* @__PURE__ */ s(((e, t) => {
	var n = "[object Boolean]", r = Object.prototype.toString;
	function i(e) {
		return e === !0 || e === !1 || a(e) && r.call(e) == n;
	}
	function a(e) {
		return !!e && typeof e == "object";
	}
	t.exports = i;
})), Be = /* @__PURE__ */ s(((e, t) => {
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
})), Ve = /* @__PURE__ */ s(((e, t) => {
	var n = "[object Number]", r = Object.prototype.toString;
	function i(e) {
		return !!e && typeof e == "object";
	}
	function a(e) {
		return typeof e == "number" || i(e) && r.call(e) == n;
	}
	t.exports = a;
})), He = /* @__PURE__ */ s(((e, t) => {
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
})), Ue = /* @__PURE__ */ s(((e, t) => {
	var n = "[object String]", r = Object.prototype.toString, i = Array.isArray;
	function a(e) {
		return !!e && typeof e == "object";
	}
	function o(e) {
		return typeof e == "string" || !i(e) && a(e) && r.call(e) == n;
	}
	t.exports = o;
})), We = /* @__PURE__ */ s(((e, t) => {
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
})), Ge = /* @__PURE__ */ s(((e, t) => {
	var n = ae(), r = Ie(), i = Fe(), a = te(), o = Re(), s = ze(), c = Be(), l = Ve(), u = He(), d = Ue(), f = We(), { KeyObject: p, createSecretKey: m, createPrivateKey: h } = x(), g = [
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
	function S(e) {
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
})), Ke = /* @__PURE__ */ l((/* @__PURE__ */ s(((e, t) => {
	t.exports = {
		decode: k(),
		verify: Le(),
		sign: Ge(),
		JsonWebTokenError: A(),
		NotBeforeError: ne(),
		TokenExpiredError: re()
	};
})))());
function qe() {
	let e = process.env.JWT_SECRET;
	if (!e) throw Error("JWT_SECRET is not defined in environment variables");
	return e;
}
function Je(e) {
	return Ke.default.verify(e, qe(), {
		issuer: "rentflow360",
		audience: "rentflow360-web"
	});
}
process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET, x();
//#endregion
//#region ../../node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var Ye = /* @__PURE__ */ s(((e, t) => {
	var n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, a = Object.prototype.hasOwnProperty, o = (e, t) => {
		for (var r in t) n(e, r, {
			get: t[r],
			enumerable: !0
		});
	}, s = (e, t, o, s) => {
		if (t && typeof t == "object" || typeof t == "function") for (let c of i(t)) !a.call(e, c) && c !== o && n(e, c, {
			get: () => t[c],
			enumerable: !(s = r(t, c)) || s.enumerable
		});
		return e;
	}, c = (e) => s(n({}, "__esModule", { value: !0 }), e), l = {};
	o(l, {
		RequestCookies: () => y,
		ResponseCookies: () => b,
		parseCookie: () => d,
		parseSetCookie: () => f,
		stringifyCookie: () => u
	}), t.exports = c(l);
	function u(e) {
		let t = [
			"path" in e && e.path && `Path=${e.path}`,
			"expires" in e && (e.expires || e.expires === 0) && `Expires=${(typeof e.expires == "number" ? new Date(e.expires) : e.expires).toUTCString()}`,
			"maxAge" in e && typeof e.maxAge == "number" && `Max-Age=${e.maxAge}`,
			"domain" in e && e.domain && `Domain=${e.domain}`,
			"secure" in e && e.secure && "Secure",
			"httpOnly" in e && e.httpOnly && "HttpOnly",
			"sameSite" in e && e.sameSite && `SameSite=${e.sameSite}`,
			"partitioned" in e && e.partitioned && "Partitioned",
			"priority" in e && e.priority && `Priority=${e.priority}`
		].filter(Boolean), n = `${e.name}=${encodeURIComponent(e.value ?? "")}`;
		return t.length === 0 ? n : `${n}; ${t.join("; ")}`;
	}
	function d(e) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.split(/; */)) {
			if (!n) continue;
			let e = n.indexOf("=");
			if (e === -1) {
				t.set(n, "true");
				continue;
			}
			let [r, i] = [n.slice(0, e), n.slice(e + 1)];
			try {
				t.set(r, decodeURIComponent(i ?? "true"));
			} catch {}
		}
		return t;
	}
	function f(e) {
		if (!e) return;
		let [[t, n], ...r] = d(e), { domain: i, expires: a, httponly: o, maxage: s, path: c, samesite: l, secure: u, partitioned: f, priority: m } = Object.fromEntries(r.map(([e, t]) => [e.toLowerCase().replace(/-/g, ""), t]));
		return p({
			name: t,
			value: decodeURIComponent(n),
			domain: i,
			...a && { expires: new Date(a) },
			...o && { httpOnly: !0 },
			...typeof s == "string" && { maxAge: Number(s) },
			path: c,
			...l && { sameSite: h(l) },
			...u && { secure: !0 },
			...m && { priority: _(m) },
			...f && { partitioned: !0 }
		});
	}
	function p(e) {
		let t = {};
		for (let n in e) e[n] && (t[n] = e[n]);
		return t;
	}
	var m = [
		"strict",
		"lax",
		"none"
	];
	function h(e) {
		return e = e.toLowerCase(), m.includes(e) ? e : void 0;
	}
	var g = [
		"low",
		"medium",
		"high"
	];
	function _(e) {
		return e = e.toLowerCase(), g.includes(e) ? e : void 0;
	}
	function v(e) {
		if (!e) return [];
		var t = [], n = 0, r, i, a, o, s;
		function c() {
			for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
			return n < e.length;
		}
		function l() {
			return i = e.charAt(n), i !== "=" && i !== ";" && i !== ",";
		}
		for (; n < e.length;) {
			for (r = n, s = !1; c();) if (i = e.charAt(n), i === ",") {
				for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
				n < e.length && e.charAt(n) === "=" ? (s = !0, n = o, t.push(e.substring(r, a)), r = n) : n = a + 1;
			} else n += 1;
			(!s || n >= e.length) && t.push(e.substring(r, e.length));
		}
		return t;
	}
	var y = class {
		constructor(e) {
			this._parsed = /* @__PURE__ */ new Map(), this._headers = e;
			let t = e.get("cookie");
			if (t) {
				let e = d(t);
				for (let [t, n] of e) this._parsed.set(t, {
					name: t,
					value: n
				});
			}
		}
		[Symbol.iterator]() {
			return this._parsed[Symbol.iterator]();
		}
		get size() {
			return this._parsed.size;
		}
		get(...e) {
			let t = typeof e[0] == "string" ? e[0] : e[0].name;
			return this._parsed.get(t);
		}
		getAll(...e) {
			let t = Array.from(this._parsed);
			if (!e.length) return t.map(([e, t]) => t);
			let n = typeof e[0] == "string" ? e[0] : e[0]?.name;
			return t.filter(([e]) => e === n).map(([e, t]) => t);
		}
		has(e) {
			return this._parsed.has(e);
		}
		set(...e) {
			let [t, n] = e.length === 1 ? [e[0].name, e[0].value] : e, r = this._parsed;
			return r.set(t, {
				name: t,
				value: n
			}), this._headers.set("cookie", Array.from(r).map(([e, t]) => u(t)).join("; ")), this;
		}
		delete(e) {
			let t = this._parsed, n = Array.isArray(e) ? e.map((e) => t.delete(e)) : t.delete(e);
			return this._headers.set("cookie", Array.from(t).map(([e, t]) => u(t)).join("; ")), n;
		}
		clear() {
			return this.delete(Array.from(this._parsed.keys())), this;
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
		}
		toString() {
			return [...this._parsed.values()].map((e) => `${e.name}=${encodeURIComponent(e.value)}`).join("; ");
		}
	}, b = class {
		constructor(e) {
			this._parsed = /* @__PURE__ */ new Map(), this._headers = e;
			let t = e.getSetCookie?.call(e) ?? e.get("set-cookie") ?? [], n = Array.isArray(t) ? t : v(t);
			for (let e of n) {
				let t = f(e);
				t && this._parsed.set(t.name, t);
			}
		}
		get(...e) {
			let t = typeof e[0] == "string" ? e[0] : e[0].name;
			return this._parsed.get(t);
		}
		getAll(...e) {
			let t = Array.from(this._parsed.values());
			if (!e.length) return t;
			let n = typeof e[0] == "string" ? e[0] : e[0]?.name;
			return t.filter((e) => e.name === n);
		}
		has(e) {
			return this._parsed.has(e);
		}
		set(...e) {
			let [t, n, r] = e.length === 1 ? [
				e[0].name,
				e[0].value,
				e[0]
			] : e, i = this._parsed;
			return i.set(t, S({
				name: t,
				value: n,
				...r
			})), x(i, this._headers), this;
		}
		delete(...e) {
			let [t, n] = typeof e[0] == "string" ? [e[0]] : [e[0].name, e[0]];
			return this.set({
				...n,
				name: t,
				value: "",
				expires: /* @__PURE__ */ new Date(0)
			});
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
		}
		toString() {
			return [...this._parsed.values()].map(u).join("; ");
		}
	};
	function x(e, t) {
		t.delete("set-cookie");
		for (let [, n] of e) {
			let e = u(n);
			t.append("set-cookie", e);
		}
	}
	function S(e = {
		name: "",
		value: ""
	}) {
		return typeof e.expires == "number" && (e.expires = new Date(e.expires)), e.maxAge && (e.expires = new Date(Date.now() + e.maxAge * 1e3)), (e.path === null || e.path === void 0) && (e.path = "/"), e;
	}
})), Xe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		RequestCookies: function() {
			return n.RequestCookies;
		},
		ResponseCookies: function() {
			return n.ResponseCookies;
		},
		stringifyCookie: function() {
			return n.stringifyCookie;
		}
	});
	var n = Ye();
})), Ze = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ReflectAdapter", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = class {
		static get(e, t, n) {
			let r = Reflect.get(e, t, n);
			return typeof r == "function" ? r.bind(e) : r;
		}
		static set(e, t, n, r) {
			return Reflect.set(e, t, n, r);
		}
		static has(e, t) {
			return Reflect.has(e, t);
		}
		static deleteProperty(e, t) {
			return Reflect.deleteProperty(e, t);
		}
	};
})), Qe = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		bindSnapshot: function() {
			return o;
		},
		createAsyncLocalStorage: function() {
			return a;
		},
		createSnapshot: function() {
			return s;
		}
	});
	var n = Object.defineProperty(/* @__PURE__ */ Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
		value: "E504",
		enumerable: !1,
		configurable: !0
	}), r = class {
		disable() {
			throw n;
		}
		getStore() {}
		run() {
			throw n;
		}
		exit() {
			throw n;
		}
		enterWith() {
			throw n;
		}
		static bind(e) {
			return e;
		}
	}, i = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
	function a() {
		return i ? new i() : new r();
	}
	function o(e) {
		return i ? i.bind(e) : r.bind(e);
	}
	function s() {
		return i ? i.snapshot() : function(e, ...t) {
			return e(...t);
		};
	}
})), $e = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Qe().createAsyncLocalStorage)();
})), et = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.workAsyncStorageInstance;
		}
	});
	var t = $e();
})), tt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		ActionDidNotRevalidate: function() {
			return n;
		},
		ActionDidRevalidateDynamicOnly: function() {
			return i;
		},
		ActionDidRevalidateStaticAndDynamic: function() {
			return r;
		}
	});
	var n = 0, r = 1, i = 2;
})), nt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		MutableRequestCookiesAdapter: function() {
			return d;
		},
		ReadonlyRequestCookiesError: function() {
			return o;
		},
		RequestCookiesAdapter: function() {
			return s;
		},
		appendMutableCookies: function() {
			return u;
		},
		areCookiesMutableInCurrentPhase: function() {
			return p;
		},
		createCookiesWithMutableAccessCheck: function() {
			return f;
		},
		getModifiedCookieValues: function() {
			return l;
		},
		responseCookiesToRequestCookies: function() {
			return h;
		}
	});
	var n = Xe(), r = Ze(), i = et(), a = tt(), o = class e extends Error {
		constructor() {
			super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options");
		}
		static callable() {
			throw new e();
		}
	}, s = class {
		static seal(e) {
			return new Proxy(e, { get(e, t, n) {
				switch (t) {
					case "clear":
					case "delete":
					case "set": return o.callable;
					default: return r.ReflectAdapter.get(e, t, n);
				}
			} });
		}
	}, c = Symbol.for("next.mutated.cookies");
	function l(e) {
		let t = e[c];
		return !t || !Array.isArray(t) || t.length === 0 ? [] : t;
	}
	function u(e, t) {
		let r = l(t);
		if (r.length === 0) return !1;
		let i = new n.ResponseCookies(e), a = i.getAll();
		for (let e of r) i.set(e);
		for (let e of a) i.set(e);
		return !0;
	}
	var d = class {
		static wrap(e, t) {
			let o = new n.ResponseCookies(new Headers());
			for (let t of e.getAll()) o.set(t);
			let s = [], l = /* @__PURE__ */ new Set(), u = () => {
				let e = i.workAsyncStorage.getStore();
				if (e && (e.pathWasRevalidated = a.ActionDidRevalidateStaticAndDynamic), s = o.getAll().filter((e) => l.has(e.name)), t) {
					let e = [];
					for (let t of s) {
						let r = new n.ResponseCookies(new Headers());
						r.set(t), e.push(r.toString());
					}
					t(e);
				}
			}, d = new Proxy(o, { get(e, t, n) {
				switch (t) {
					case c: return s;
					case "delete": return function(...t) {
						l.add(typeof t[0] == "string" ? t[0] : t[0].name);
						try {
							return e.delete(...t), d;
						} finally {
							u();
						}
					};
					case "set": return function(...t) {
						l.add(typeof t[0] == "string" ? t[0] : t[0].name);
						try {
							return e.set(...t), d;
						} finally {
							u();
						}
					};
					default: return r.ReflectAdapter.get(e, t, n);
				}
			} });
			return d;
		}
	};
	function f(e) {
		let t = new Proxy(e.mutableCookies, { get(n, i, a) {
			switch (i) {
				case "delete": return function(...r) {
					return m(e, "cookies().delete"), n.delete(...r), t;
				};
				case "set": return function(...r) {
					return m(e, "cookies().set"), n.set(...r), t;
				};
				default: return r.ReflectAdapter.get(n, i, a);
			}
		} });
		return t;
	}
	function p(e) {
		return e.phase === "action";
	}
	function m(e, t) {
		if (!p(e)) throw new o();
	}
	function h(e) {
		let t = new n.RequestCookies(new Headers());
		for (let n of e.getAll()) t.set(n);
		return t;
	}
})), rt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "workUnitAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Qe().createAsyncLocalStorage)();
})), it = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		ACTION_HEADER: function() {
			return i;
		},
		FLIGHT_HEADERS: function() {
			return m;
		},
		NEXT_ACTION_NOT_FOUND_HEADER: function() {
			return x;
		},
		NEXT_ACTION_REVALIDATED_HEADER: function() {
			return w;
		},
		NEXT_DID_POSTPONE_HEADER: function() {
			return _;
		},
		NEXT_HMR_REFRESH_HASH_COOKIE: function() {
			return l;
		},
		NEXT_HMR_REFRESH_HEADER: function() {
			return c;
		},
		NEXT_HTML_REQUEST_ID_HEADER: function() {
			return C;
		},
		NEXT_INSTANT_PREFETCH_HEADER: function() {
			return f;
		},
		NEXT_INSTANT_TEST_COOKIE: function() {
			return p;
		},
		NEXT_IS_PRERENDER_HEADER: function() {
			return b;
		},
		NEXT_REQUEST_ID_HEADER: function() {
			return S;
		},
		NEXT_REWRITTEN_PATH_HEADER: function() {
			return v;
		},
		NEXT_REWRITTEN_QUERY_HEADER: function() {
			return y;
		},
		NEXT_ROUTER_PREFETCH_HEADER: function() {
			return o;
		},
		NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
			return s;
		},
		NEXT_ROUTER_STALE_TIME_HEADER: function() {
			return g;
		},
		NEXT_ROUTER_STATE_TREE_HEADER: function() {
			return a;
		},
		NEXT_RSC_UNION_QUERY: function() {
			return h;
		},
		NEXT_URL: function() {
			return u;
		},
		RSC_CONTENT_TYPE_HEADER: function() {
			return d;
		},
		RSC_HEADER: function() {
			return r;
		}
	});
	var r = "rsc", i = "next-action", a = "next-router-state-tree", o = "next-router-prefetch", s = "next-router-segment-prefetch", c = "next-hmr-refresh", l = "__next_hmr_refresh_hash__", u = "next-url", d = "text/x-component", f = "next-instant-navigation-testing-prefetch", p = "next-instant-navigation-testing", m = [
		r,
		a,
		o,
		c,
		s
	], h = "_rsc", g = "x-nextjs-stale-time", _ = "x-nextjs-postponed", v = "x-nextjs-rewritten-path", y = "x-nextjs-rewritten-query", b = "x-nextjs-prerender", x = "x-nextjs-action-not-found", S = "x-nextjs-request-id", C = "x-nextjs-html-request-id", w = "x-action-revalidated";
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), at = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "InvariantError", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = class extends Error {
		constructor(e, t) {
			super(`Invariant: ${e.endsWith(".") ? e : e + "."} This is a bug in Next.js.`, t), this.name = "InvariantError";
		}
	};
})), ot = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "createPromiseWithResolvers", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t() {
		let e, t, n = new Promise((n, r) => {
			e = n, t = r;
		});
		return {
			resolve: e,
			reject: t,
			promise: n
		};
	}
})), st = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		RenderStage: function() {
			return i;
		},
		StagedRenderingController: function() {
			return a;
		}
	});
	var n = at(), r = ot(), i = /* @__PURE__ */ function(e) {
		return e[e.Before = 1] = "Before", e[e.EarlyStatic = 2] = "EarlyStatic", e[e.Static = 3] = "Static", e[e.EarlyRuntime = 4] = "EarlyRuntime", e[e.Runtime = 5] = "Runtime", e[e.Dynamic = 6] = "Dynamic", e[e.Abandoned = 7] = "Abandoned", e;
	}({}), a = class {
		constructor(e, t, n) {
			this.abortSignal = e, this.abandonController = t, this.shouldTrackSyncIO = n, this.currentStage = 1, this.syncInterruptReason = null, this.staticStageEndTime = Infinity, this.runtimeStageEndTime = Infinity, this.staticStageListeners = [], this.earlyRuntimeStageListeners = [], this.runtimeStageListeners = [], this.dynamicStageListeners = [], this.staticStagePromise = (0, r.createPromiseWithResolvers)(), this.earlyRuntimeStagePromise = (0, r.createPromiseWithResolvers)(), this.runtimeStagePromise = (0, r.createPromiseWithResolvers)(), this.dynamicStagePromise = (0, r.createPromiseWithResolvers)(), e && e.addEventListener("abort", () => {
				let { reason: t } = e;
				this.staticStagePromise.promise.catch(o), this.staticStagePromise.reject(t), this.earlyRuntimeStagePromise.promise.catch(o), this.earlyRuntimeStagePromise.reject(t), this.runtimeStagePromise.promise.catch(o), this.runtimeStagePromise.reject(t), this.dynamicStagePromise.promise.catch(o), this.dynamicStagePromise.reject(t);
			}, { once: !0 }), t && t.signal.addEventListener("abort", () => {
				this.abandonRender();
			}, { once: !0 });
		}
		onStage(e, t) {
			if (this.currentStage >= e) t();
			else if (e === 3) this.staticStageListeners.push(t);
			else if (e === 4) this.earlyRuntimeStageListeners.push(t);
			else if (e === 5) this.runtimeStageListeners.push(t);
			else if (e === 6) this.dynamicStageListeners.push(t);
			else throw Object.defineProperty(new n.InvariantError(`Invalid render stage: ${e}`), "__NEXT_ERROR_CODE", {
				value: "E881",
				enumerable: !1,
				configurable: !0
			});
		}
		shouldTrackSyncInterrupt() {
			if (!this.shouldTrackSyncIO) return !1;
			switch (this.currentStage) {
				case 1: return !1;
				case 2:
				case 3: return !0;
				case 4: return !0;
				case 5: return !1;
				case 6:
				case 7: return !1;
				default: return !1;
			}
		}
		syncInterruptCurrentStageWithReason(e) {
			if (this.currentStage !== 1 && this.currentStage !== 7) {
				if (this.abandonController) {
					this.abandonController.abort();
					return;
				}
				if (this.abortSignal) {
					this.syncInterruptReason = e, this.currentStage = 7;
					return;
				}
				switch (this.currentStage) {
					case 2:
					case 3:
					case 4:
						this.syncInterruptReason = e, this.advanceStage(6);
						return;
					case 5: return;
					default:
				}
			}
		}
		getSyncInterruptReason() {
			return this.syncInterruptReason;
		}
		getStaticStageEndTime() {
			return this.staticStageEndTime;
		}
		getRuntimeStageEndTime() {
			return this.runtimeStageEndTime;
		}
		abandonRender() {
			let { currentStage: e } = this;
			switch (e) {
				case 2: this.resolveStaticStage();
				case 3: this.resolveEarlyRuntimeStage();
				case 4: this.resolveRuntimeStage();
				case 5:
					this.currentStage = 7;
					return;
				case 6:
				case 1:
				case 7: break;
				default:
			}
		}
		advanceStage(e) {
			if (e <= this.currentStage) return;
			let t = this.currentStage;
			if (this.currentStage = e, t < 3 && e >= 3 && this.resolveStaticStage(), t < 4 && e >= 4 && this.resolveEarlyRuntimeStage(), t < 5 && e >= 5 && (this.staticStageEndTime = performance.now() + performance.timeOrigin, this.resolveRuntimeStage()), t < 6 && e >= 6) {
				this.runtimeStageEndTime = performance.now() + performance.timeOrigin, this.resolveDynamicStage();
				return;
			}
		}
		resolveStaticStage() {
			let e = this.staticStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.staticStagePromise.resolve();
		}
		resolveEarlyRuntimeStage() {
			let e = this.earlyRuntimeStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.earlyRuntimeStagePromise.resolve();
		}
		resolveRuntimeStage() {
			let e = this.runtimeStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.runtimeStagePromise.resolve();
		}
		resolveDynamicStage() {
			let e = this.dynamicStageListeners;
			for (let t = 0; t < e.length; t++) e[t]();
			e.length = 0, this.dynamicStagePromise.resolve();
		}
		getStagePromise(e) {
			switch (e) {
				case 3: return this.staticStagePromise.promise;
				case 4: return this.earlyRuntimeStagePromise.promise;
				case 5: return this.runtimeStagePromise.promise;
				case 6: return this.dynamicStagePromise.promise;
				default: throw Object.defineProperty(new n.InvariantError(`Invalid render stage: ${e}`), "__NEXT_ERROR_CODE", {
					value: "E881",
					enumerable: !1,
					configurable: !0
				});
			}
		}
		waitForStage(e) {
			return this.getStagePromise(e);
		}
		delayUntilStage(e, t, n) {
			let r = s(this.getStagePromise(e), t, n);
			return this.abortSignal && r.catch(o), r;
		}
	};
	function o() {}
	function s(e, t, n) {
		let r = new Promise((t, r) => {
			e.then(t.bind(null, n), r);
		});
		return t !== void 0 && (r.displayName = t), r;
	}
})), ct = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		getCacheSignal: function() {
			return g;
		},
		getDraftModeProviderForCacheScope: function() {
			return m;
		},
		getHmrRefreshHash: function() {
			return d;
		},
		getPrerenderResumeDataCache: function() {
			return l;
		},
		getRenderResumeDataCache: function() {
			return u;
		},
		getServerComponentsHmrCache: function() {
			return p;
		},
		getStagedRenderingController: function() {
			return h;
		},
		isHmrRefresh: function() {
			return f;
		},
		isInEarlyRenderStage: function() {
			return o;
		},
		throwForMissingRequestStore: function() {
			return s;
		},
		throwInvariantForMissingStore: function() {
			return c;
		},
		workUnitAsyncStorage: function() {
			return n.workUnitAsyncStorageInstance;
		}
	});
	var n = rt(), r = it(), i = at(), a = st();
	function o(e) {
		let t = e.stagedRendering;
		return t ? t.currentStage === a.RenderStage.EarlyStatic || t.currentStage === a.RenderStage.EarlyRuntime : !1;
	}
	function s(e) {
		throw Object.defineProperty(/* @__PURE__ */ Error(`\`${e}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
			value: "E251",
			enumerable: !1,
			configurable: !0
		});
	}
	function c() {
		throw Object.defineProperty(new i.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
			value: "E696",
			enumerable: !1,
			configurable: !0
		});
	}
	function l(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-runtime":
			case "prerender-ppr": return e.prerenderResumeDataCache;
			case "prerender-client":
			case "validation-client": return e.prerenderResumeDataCache;
			case "request": if (e.prerenderResumeDataCache) return e.prerenderResumeDataCache;
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function u(e) {
		switch (e.type) {
			case "request":
			case "prerender":
			case "prerender-runtime":
			case "prerender-client":
			case "validation-client": if (e.renderResumeDataCache) return e.renderResumeDataCache;
			case "prerender-ppr": return e.prerenderResumeDataCache ?? null;
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "prerender-legacy":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function d(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "prerender":
			case "prerender-runtime": return e.hmrRefreshHash;
			case "request": return e.cookies.get(r.NEXT_HMR_REFRESH_HASH_COOKIE)?.value;
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
	}
	function f(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "request": return e.isHmrRefresh ?? !1;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
		return !1;
	}
	function p(e) {
		if (process.env.__NEXT_DEV_SERVER) switch (e.type) {
			case "cache":
			case "private-cache":
			case "request": return e.serverComponentsHmrCache;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime":
			case "prerender-ppr":
			case "prerender-legacy":
			case "unstable-cache":
			case "generate-static-params": break;
			default:
		}
	}
	function m(e, t) {
		if (e.isDraftMode) switch (t.type) {
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "prerender-runtime":
			case "request": return t.draftMode;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "generate-static-params": break;
			default:
		}
	}
	function h(e) {
		switch (e.type) {
			case "request":
			case "prerender-runtime": return e.stagedRendering ?? null;
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
	function g(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-client":
			case "validation-client":
			case "prerender-runtime": return e.cacheSignal;
			case "request": if (e.cacheSignal) return e.cacheSignal;
			case "prerender-ppr":
			case "prerender-legacy":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return null;
			default: return e;
		}
	}
})), lt = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		DynamicServerError: function() {
			return i;
		},
		isDynamicServerError: function() {
			return a;
		}
	});
	var r = "DYNAMIC_SERVER_USAGE", i = class extends Error {
		constructor(e) {
			super(`Dynamic server usage: ${e}`), this.description = e, this.digest = r;
		}
	};
	function a(e) {
		return typeof e != "object" || !e || !("digest" in e) || typeof e.digest != "string" ? !1 : e.digest === r;
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), ut = /* @__PURE__ */ s(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		StaticGenBailoutError: function() {
			return i;
		},
		isStaticGenBailoutError: function() {
			return a;
		}
	});
	var r = "NEXT_STATIC_GEN_BAILOUT", i = class extends Error {
		constructor(...e) {
			super(...e), this.code = r;
		}
	};
	function a(e) {
		return typeof e != "object" || !e || !("code" in e) ? !1 : e.code === r;
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), dt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		delayUntilRuntimeStage: function() {
			return d;
		},
		getRuntimeStage: function() {
			return u;
		},
		isHangingPromiseRejectionError: function() {
			return r;
		},
		makeDevtoolsIOAwarePromise: function() {
			return l;
		},
		makeHangingPromise: function() {
			return s;
		}
	});
	var n = st();
	function r(e) {
		return typeof e != "object" || !e || !("digest" in e) ? !1 : e.digest === i;
	}
	var i = "HANGING_PROMISE_REJECTION", a = class extends Error {
		constructor(e, t) {
			super(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`), this.route = e, this.expression = t, this.digest = i;
		}
	}, o = /* @__PURE__ */ new WeakMap();
	function s(e, t, n) {
		if (e.aborted) return Promise.reject(new a(t, n));
		{
			let r = new Promise((r, i) => {
				let s = i.bind(null, new a(t, n)), c = o.get(e);
				if (c) c.push(s);
				else {
					let t = [s];
					o.set(e, t), e.addEventListener("abort", () => {
						for (let e = 0; e < t.length; e++) t[e]();
					}, { once: !0 });
				}
			});
			return r.catch(c), r;
		}
	}
	function c() {}
	function l(e, t, n) {
		return t.stagedRendering ? t.stagedRendering.delayUntilStage(n, void 0, e) : new Promise((t) => {
			setTimeout(() => {
				t(e);
			}, 0);
		});
	}
	function u(e) {
		return e.currentStage === n.RenderStage.EarlyStatic || e.currentStage === n.RenderStage.EarlyRuntime ? n.RenderStage.EarlyRuntime : n.RenderStage.Runtime;
	}
	function d(e, t) {
		let { stagedRendering: n } = e;
		return n ? n.waitForStage(u(n)).then(() => t) : t;
	}
})), ft = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		METADATA_BOUNDARY_NAME: function() {
			return n;
		},
		OUTLET_BOUNDARY_NAME: function() {
			return i;
		},
		ROOT_LAYOUT_BOUNDARY_NAME: function() {
			return a;
		},
		VIEWPORT_BOUNDARY_NAME: function() {
			return r;
		}
	});
	var n = "__next_metadata_boundary__", r = "__next_viewport_boundary__", i = "__next_outlet_boundary__", a = "__next_root_layout_boundary__";
})), pt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		atLeastOneTask: function() {
			return i;
		},
		scheduleImmediate: function() {
			return r;
		},
		scheduleOnNextTick: function() {
			return n;
		},
		waitAtLeastOneReactRenderTask: function() {
			return a;
		}
	});
	var n = (e) => {
		Promise.resolve().then(() => {
			process.env.NEXT_RUNTIME === "edge" ? setTimeout(e, 0) : process.nextTick(e);
		});
	}, r = (e) => {
		process.env.NEXT_RUNTIME === "edge" ? setTimeout(e, 0) : setImmediate(e);
	};
	function i() {
		return new Promise((e) => r(e));
	}
	function a() {
		return process.env.NEXT_RUNTIME === "edge" ? new Promise((e) => setTimeout(e, 0)) : new Promise((e) => setImmediate(e));
	}
})), mt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		BailoutToCSRError: function() {
			return r;
		},
		isBailoutToCSRError: function() {
			return i;
		}
	});
	var n = "BAILOUT_TO_CLIENT_SIDE_RENDERING", r = class extends Error {
		constructor(e) {
			super(`Bail out to client-side rendering: ${e}`), this.reason = e, this.digest = n;
		}
	};
	function i(e) {
		return typeof e != "object" || !e || !("digest" in e) ? !1 : e.digest === n;
	}
})), ht = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "INSTANT_VALIDATION_BOUNDARY_NAME", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = "__next_instant_validation_boundary__";
})), gt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		DynamicHoleKind: function() {
			return de;
		},
		Postpone: function() {
			return T;
		},
		PreludeState: function() {
			return he;
		},
		abortAndThrowOnSynchronousRequestDataAccess: function() {
			return w;
		},
		abortOnSynchronousPlatformIOAccess: function() {
			return C;
		},
		accessedDynamicData: function() {
			return ne;
		},
		annotateDynamicAccess: function() {
			return M;
		},
		consumeDynamicAccess: function() {
			return re;
		},
		createDynamicTrackingState: function() {
			return g;
		},
		createDynamicValidationState: function() {
			return _;
		},
		createHangingInputAbortSignal: function() {
			return j;
		},
		createInstantValidationState: function() {
			return fe;
		},
		createRenderInBrowserAbortSignal: function() {
			return oe;
		},
		formatDynamicAPIAccesses: function() {
			return ie;
		},
		getFirstDynamicReason: function() {
			return v;
		},
		getNavigationDisallowedDynamicReasons: function() {
			return U;
		},
		getStaticShellDisallowedDynamicReasons: function() {
			return ge;
		},
		isDynamicPostpone: function() {
			return ee;
		},
		isPrerenderInterruptedError: function() {
			return A;
		},
		logDisallowedDynamicError: function() {
			return V;
		},
		markCurrentScopeAsDynamic: function() {
			return y;
		},
		postponeWithTracking: function() {
			return E;
		},
		throwIfDisallowedDynamic: function() {
			return H;
		},
		throwToInterruptStaticGeneration: function() {
			return b;
		},
		trackAllowedDynamicAccess: function() {
			return ue;
		},
		trackDynamicDataInDynamicRender: function() {
			return x;
		},
		trackDynamicHoleInNavigation: function() {
			return R;
		},
		trackDynamicHoleInRuntimeShell: function() {
			return pe;
		},
		trackDynamicHoleInStaticShell: function() {
			return me;
		},
		trackThrownErrorInNavigation: function() {
			return z;
		},
		useDynamicRouteParams: function() {
			return N;
		},
		useDynamicSearchParams: function() {
			return se;
		}
	});
	var n = /* @__PURE__ */ m(u("react")), r = lt(), i = ut(), a = ct(), o = et(), s = dt(), c = ft(), l = pt(), d = mt(), f = at(), p = ht();
	function m(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var h = typeof n.default.unstable_postpone == "function";
	function g(e) {
		return {
			isDebugDynamicAccesses: e,
			dynamicAccesses: [],
			syncDynamicErrorWithStack: null
		};
	}
	function _() {
		return {
			hasSuspenseAboveBody: !1,
			hasDynamicMetadata: !1,
			dynamicMetadata: null,
			hasDynamicViewport: !1,
			hasAllowedDynamic: !1,
			dynamicErrors: []
		};
	}
	function v(e) {
		return e.dynamicAccesses[0]?.expression;
	}
	function y(e, t, n) {
		if (t) switch (t.type) {
			case "cache":
			case "unstable-cache": return;
			case "private-cache": return;
			case "prerender-legacy":
			case "prerender-ppr":
			case "request":
			case "generate-static-params": break;
			default:
		}
		if (!(e.forceDynamic || e.forceStatic)) {
			if (e.dynamicShouldError) throw Object.defineProperty(new i.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${n}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E553",
				enumerable: !1,
				configurable: !0
			});
			if (t) switch (t.type) {
				case "prerender-ppr": return E(e.route, n, t.dynamicTracking);
				case "prerender-legacy":
					t.revalidate = 0;
					let i = Object.defineProperty(new r.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${n}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
						value: "E550",
						enumerable: !1,
						configurable: !0
					});
					throw e.dynamicUsageDescription = n, e.dynamicUsageStack = i.stack, i;
				case "request":
					process.env.NODE_ENV !== "production" && (t.usedDynamic = !0);
					break;
				case "generate-static-params": break;
				default:
			}
		}
	}
	function b(e, t, n) {
		let i = Object.defineProperty(new r.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
			value: "E558",
			enumerable: !1,
			configurable: !0
		});
		throw n.revalidate = 0, t.dynamicUsageDescription = e, t.dynamicUsageStack = i.stack, i;
	}
	function x(e) {
		switch (e.type) {
			case "cache":
			case "unstable-cache": return;
			case "private-cache": return;
			case "prerender":
			case "prerender-runtime":
			case "prerender-legacy":
			case "prerender-ppr":
			case "prerender-client":
			case "validation-client":
			case "generate-static-params": break;
			case "request":
				process.env.NODE_ENV !== "production" && (e.usedDynamic = !0);
				break;
			default:
		}
	}
	function S(e, t, n) {
		let r = k(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
		n.controller.abort(r);
		let i = n.dynamicTracking;
		i && i.dynamicAccesses.push({
			stack: i.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: t
		});
	}
	function C(e, t, n, r) {
		let i = r.dynamicTracking;
		S(e, t, r), i && i.syncDynamicErrorWithStack === null && (i.syncDynamicErrorWithStack = n);
	}
	function w(e, t, n, r) {
		if (r.controller.signal.aborted === !1) {
			S(e, t, r);
			let i = r.dynamicTracking;
			i && i.syncDynamicErrorWithStack === null && (i.syncDynamicErrorWithStack = n);
		}
		throw k(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);
	}
	function T({ reason: e, route: t }) {
		let n = a.workUnitAsyncStorage.getStore();
		E(t, e, n && n.type === "prerender-ppr" ? n.dynamicTracking : null);
	}
	function E(e, t, r) {
		ae(), r && r.dynamicAccesses.push({
			stack: r.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: t
		}), n.default.unstable_postpone(D(e, t));
	}
	function D(e, t) {
		return `Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
	}
	function ee(e) {
		return typeof e == "object" && e && typeof e.message == "string" ? O(e.message) : !1;
	}
	function O(e) {
		return e.includes("needs to bail out of prerendering at this point because it used") && e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
	}
	if (O(D("%%%", "^^^")) === !1) throw Object.defineProperty(/* @__PURE__ */ Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
		value: "E296",
		enumerable: !1,
		configurable: !0
	});
	var te = "NEXT_PRERENDER_INTERRUPTED";
	function k(e) {
		let t = Object.defineProperty(Error(e), "__NEXT_ERROR_CODE", {
			value: "E394",
			enumerable: !1,
			configurable: !0
		});
		return t.digest = te, t;
	}
	function A(e) {
		return typeof e == "object" && !!e && e.digest === te && "name" in e && "message" in e && e instanceof Error;
	}
	function ne(e) {
		return e.length > 0;
	}
	function re(e, t) {
		return e.dynamicAccesses.push(...t.dynamicAccesses), e.dynamicAccesses;
	}
	function ie(e) {
		return e.filter((e) => typeof e.stack == "string" && e.stack.length > 0).map(({ expression: e, stack: t }) => (t = t.split("\n").slice(4).filter((e) => !(e.includes("node_modules/next/") || e.includes(" (<anonymous>)") || e.includes(" (node:"))).join("\n"), `Dynamic API Usage Debug - ${e}:\n${t}`));
	}
	function ae() {
		if (!h) throw Object.defineProperty(/* @__PURE__ */ Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
			value: "E224",
			enumerable: !1,
			configurable: !0
		});
	}
	function oe() {
		let e = new AbortController();
		return e.abort(Object.defineProperty(new d.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
			value: "E721",
			enumerable: !1,
			configurable: !0
		})), e.signal;
	}
	function j(e) {
		switch (e.type) {
			case "prerender":
			case "prerender-runtime":
				let t = new AbortController();
				if (e.cacheSignal) e.cacheSignal.inputReady().then(() => {
					t.abort();
				});
				else if (e.type === "prerender-runtime" && e.stagedRendering) {
					let { stagedRendering: n } = e;
					n.waitForStage((0, s.getRuntimeStage)(n)).then(() => (0, l.scheduleOnNextTick)(() => t.abort()));
				} else (0, l.scheduleOnNextTick)(() => t.abort());
				return t.signal;
			case "prerender-client":
			case "validation-client":
			case "prerender-ppr":
			case "prerender-legacy":
			case "request":
			case "cache":
			case "private-cache":
			case "unstable-cache":
			case "generate-static-params": return;
			default:
		}
	}
	function M(e, t) {
		let n = t.dynamicTracking;
		n && n.dynamicAccesses.push({
			stack: n.isDebugDynamicAccesses ? (/* @__PURE__ */ Error()).stack : void 0,
			expression: e
		});
	}
	function N(e) {
		let t = o.workAsyncStorage.getStore(), r = a.workUnitAsyncStorage.getStore();
		if (t && r) switch (r.type) {
			case "prerender-client":
			case "prerender": {
				let i = r.fallbackRouteParams;
				i && i.size > 0 && n.default.use((0, s.makeHangingPromise)(r.renderSignal, t.route, e));
				break;
			}
			case "prerender-ppr": {
				let n = r.fallbackRouteParams;
				if (n && n.size > 0) return E(t.route, e, r.dynamicTracking);
				break;
			}
			case "validation-client": break;
			case "prerender-runtime": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E771",
				enumerable: !1,
				configurable: !0
			});
			case "cache":
			case "private-cache": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E745",
				enumerable: !1,
				configurable: !0
			});
			case "generate-static-params": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E1130",
				enumerable: !1,
				configurable: !0
			});
			case "prerender-legacy":
			case "request":
			case "unstable-cache": break;
			default:
		}
	}
	function se(e) {
		let t = o.workAsyncStorage.getStore(), r = a.workUnitAsyncStorage.getStore();
		if (t) switch (r || (0, a.throwForMissingRequestStore)(e), r.type) {
			case "validation-client": return;
			case "prerender-client":
				n.default.use((0, s.makeHangingPromise)(r.renderSignal, t.route, e));
				break;
			case "prerender-legacy":
			case "prerender-ppr":
				if (t.forceStatic) return;
				throw Object.defineProperty(new d.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
					value: "E394",
					enumerable: !1,
					configurable: !0
				});
			case "prerender":
			case "prerender-runtime": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E795",
				enumerable: !1,
				configurable: !0
			});
			case "cache":
			case "unstable-cache":
			case "private-cache": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E745",
				enumerable: !1,
				configurable: !0
			});
			case "generate-static-params": throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called in \`generateStaticParams\`. Next.js should be preventing ${e} from being included in server component files statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
				value: "E1130",
				enumerable: !1,
				configurable: !0
			});
			case "request": return;
			default:
		}
	}
	var P = /\n\s+at Suspense \(<anonymous>\)/, ce = RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${c.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`), F = RegExp(`\\n\\s+at ${c.METADATA_BOUNDARY_NAME}[\\n\\s]`), I = RegExp(`\\n\\s+at ${c.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), L = RegExp(`\\n\\s+at ${c.OUTLET_BOUNDARY_NAME}[\\n\\s]`), le = RegExp(`\\n\\s+at ${p.INSTANT_VALIDATION_BOUNDARY_NAME}[\\n\\s]`);
	function ue(e, t, n, r) {
		if (!L.test(t)) if (F.test(t)) {
			n.hasDynamicMetadata = !0;
			return;
		} else if (I.test(t)) {
			n.hasDynamicViewport = !0;
			return;
		} else if (ce.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (P.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		} else {
			let r = `Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, i = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1079",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		}
	}
	var de = /* @__PURE__ */ function(e) {
		return e[e.Runtime = 1] = "Runtime", e[e.Dynamic = 2] = "Dynamic", e;
	}({});
	function fe(e) {
		return {
			hasDynamicMetadata: !1,
			hasAllowedClientDynamicAboveBoundary: !1,
			dynamicMetadata: null,
			hasDynamicViewport: !1,
			hasAllowedDynamic: !1,
			dynamicErrors: [],
			validationPreventingErrors: [],
			thrownErrorsOutsideBoundary: [],
			createInstantStack: e
		};
	}
	function R(e, t, n, r, i, a) {
		if (L.test(t)) return;
		if (F.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateMetadata` or you have file-based metadata such as icons that depend on dynamic params segments." : "Uncached data or `connection()` was accessed inside `generateMetadata`.", a = `Route "${e.route}": ${r} Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = B(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1076",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			return;
		}
		if (I.test(t)) {
			let r = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed inside `generateViewport`." : "Uncached data or `connection()` was accessed inside `generateViewport`.", a = `Route "${e.route}": ${r} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, o = B(Object.defineProperty(Error(a), "__NEXT_ERROR_CODE", {
				value: "E1086",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			n.dynamicErrors.push(o);
			return;
		}
		let o = le.exec(t);
		if (o) {
			let e = P.exec(t);
			if (e && e.index < o.index) {
				n.hasAllowedDynamic = !0;
				return;
			}
		} else if (a.expectedIds.size === a.renderedIds.size) {
			n.hasAllowedClientDynamicAboveBoundary = !0, n.hasAllowedDynamic = !0;
			return;
		} else {
			let r = `Route "${e.route}": Could not validate \`unstable_instant\` because a Client Component in a parent segment prevented the page from rendering.`, i = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1082",
				enumerable: !1,
				configurable: !0
			}), t, n.createInstantStack);
			n.validationPreventingErrors.push(i);
			return;
		}
		if (r.syncDynamicErrorWithStack) {
			let e = r.syncDynamicErrorWithStack;
			n.createInstantStack !== null && e.cause === void 0 && (e.cause = n.createInstantStack()), n.dynamicErrors.push(e);
			return;
		}
		let s = i === 1 ? "Runtime data such as `cookies()`, `headers()`, `params`, or `searchParams` was accessed outside of `<Suspense>`." : "Uncached data or `connection()` was accessed outside of `<Suspense>`.", c = `Route "${e.route}": ${s} This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, l = B(Object.defineProperty(Error(c), "__NEXT_ERROR_CODE", {
			value: "E1078",
			enumerable: !1,
			configurable: !0
		}), t, n.createInstantStack);
		n.dynamicErrors.push(l);
	}
	function z(e, t, n, r) {
		let i = le.exec(r);
		if (i) {
			let a = P.exec(r);
			if (a && a.index < i.index) return;
			let o = `Route "${e.route}": Could not validate \`unstable_instant\` because an error prevented the target segment from rendering.`, s = B(Object.defineProperty(Error(o, { cause: n }), "__NEXT_ERROR_CODE", {
				value: "E1112",
				enumerable: !1,
				configurable: !0
			}), r, null);
			t.validationPreventingErrors.push(s);
		} else {
			let e = B(Object.defineProperty(Error("An error occurred while attempting to validate instant UI. This error may be preventing the validation from completing.", { cause: n }), "__NEXT_ERROR_CODE", {
				value: "E1118",
				enumerable: !1,
				configurable: !0
			}), r, null);
			t.thrownErrorsOutsideBoundary.push(e);
		}
	}
	function pe(e, t, n, r) {
		if (L.test(t)) return;
		if (F.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1080",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (I.test(t)) {
			let r = `Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1077",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ce.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (P.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		}
		let i = `Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, a = B(Object.defineProperty(Error(i), "__NEXT_ERROR_CODE", {
			value: "E1084",
			enumerable: !1,
			configurable: !0
		}), t, null);
		n.dynamicErrors.push(a);
	}
	function me(e, t, n, r) {
		if (!L.test(t)) if (F.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`;
			n.dynamicMetadata = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1085",
				enumerable: !1,
				configurable: !0
			}), t, null);
			return;
		} else if (I.test(t)) {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`, i = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1081",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		} else if (ce.test(t)) {
			n.hasAllowedDynamic = !0, n.hasSuspenseAboveBody = !0;
			return;
		} else if (P.test(t)) {
			n.hasAllowedDynamic = !0;
			return;
		} else if (r.syncDynamicErrorWithStack) {
			n.dynamicErrors.push(r.syncDynamicErrorWithStack);
			return;
		} else {
			let r = `Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, i = B(Object.defineProperty(Error(r), "__NEXT_ERROR_CODE", {
				value: "E1083",
				enumerable: !1,
				configurable: !0
			}), t, null);
			n.dynamicErrors.push(i);
			return;
		}
	}
	function B(e, t, r) {
		let i = process.env.NODE_ENV !== "production" && n.default.captureOwnerStack ? n.default.captureOwnerStack() : null;
		return r !== null && (e.cause = r()), e.stack = e.name + ": " + e.message + (i || t), e;
	}
	var he = /* @__PURE__ */ function(e) {
		return e[e.Full = 0] = "Full", e[e.Empty = 1] = "Empty", e[e.Errored = 2] = "Errored", e;
	}({});
	function V(e, t) {
		console.error(t), process.env.NODE_ENV === "development" ? process.env.__NEXT_DEV_SERVER || console.error(`To debug the issue, start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.`) : console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
	}
	function H(e, t, n, r) {
		if (r.syncDynamicErrorWithStack) throw V(e, r.syncDynamicErrorWithStack), new i.StaticGenBailoutError();
		if (t !== 0) {
			if (n.hasSuspenseAboveBody) return;
			let r = n.dynamicErrors;
			if (r.length > 0) {
				for (let t = 0; t < r.length; t++) V(e, r[t]);
				throw new i.StaticGenBailoutError();
			}
			if (n.hasDynamicViewport) throw console.error(`Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new i.StaticGenBailoutError();
			if (t === 1) throw console.error(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new i.StaticGenBailoutError();
		} else if (n.hasAllowedDynamic === !1 && n.hasDynamicMetadata) throw console.error(`Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new i.StaticGenBailoutError();
	}
	function ge(e, t, n, r) {
		if (r || n.hasSuspenseAboveBody) return [];
		if (t !== 0) {
			let r = n.dynamicErrors;
			if (r.length > 0) return r;
			if (t === 1) return [Object.defineProperty(new f.InvariantError(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
				value: "E936",
				enumerable: !1,
				configurable: !0
			})];
		} else if (n.hasAllowedDynamic === !1 && n.dynamicErrors.length === 0 && n.dynamicMetadata) return [n.dynamicMetadata];
		return [];
	}
	function U(e, t, n, r, i) {
		if (r) {
			let { missingSampleErrors: e } = r;
			if (e.length > 0) return e;
		}
		let { validationPreventingErrors: a } = n;
		if (a.length > 0) return a;
		if (i.renderedIds.size < i.expectedIds.size) {
			let { thrownErrorsOutsideBoundary: t, createInstantStack: r } = n;
			if (t.length === 0) {
				let t = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering for an unknown reason.`, n = r === null ? /* @__PURE__ */ Error() : r();
				return n.name = "Error", n.message = t, [n];
			} else if (t.length === 1) {
				let n = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to the following error.`, i = r === null ? /* @__PURE__ */ Error() : r();
				return i.name = "Error", i.message = n, [i, t[0]];
			} else {
				let n = `Route "${e.route}": Could not validate \`unstable_instant\` because the target segment was prevented from rendering, likely due to one of the following errors.`, i = r === null ? /* @__PURE__ */ Error() : r();
				return i.name = "Error", i.message = n, [i, ...t];
			}
		}
		if (t !== 0) {
			let r = n.dynamicErrors;
			if (r.length > 0) return r;
			if (t === 1) return n.hasAllowedClientDynamicAboveBoundary ? [] : [Object.defineProperty(new f.InvariantError(`Route "${e.route}" failed to render during instant validation and Next.js was unable to determine a reason.`), "__NEXT_ERROR_CODE", {
				value: "E1055",
				enumerable: !1,
				configurable: !0
			})];
		} else {
			let e = n.dynamicErrors;
			if (e.length > 0) return e;
			if (n.hasAllowedDynamic === !1 && n.dynamicMetadata) return [n.dynamicMetadata];
		}
		return [];
	}
})), _t = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "createDedupedByCallsiteServerErrorLoggerDev", {
		enumerable: !0,
		get: function() {
			return c;
		}
	});
	var t = /* @__PURE__ */ r(u("react"));
	function n(e) {
		if (typeof WeakMap != "function") return null;
		var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
		return (n = function(e) {
			return e ? r : t;
		})(e);
	}
	function r(e, t) {
		if (!t && e && e.__esModule) return e;
		if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
		var r = n(t);
		if (r && r.has(e)) return r.get(e);
		var i = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
		for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
			var s = a ? Object.getOwnPropertyDescriptor(e, o) : null;
			s && (s.get || s.set) ? Object.defineProperty(i, o, s) : i[o] = e[o];
		}
		return i.default = e, r && r.set(e, i), i;
	}
	var i = { current: null }, a = typeof t.cache == "function" ? t.cache : (e) => e, o = process.env.__NEXT_CACHE_COMPONENTS ? console.error : console.warn, s = a((e) => {
		try {
			o(i.current);
		} finally {
			i.current = null;
		}
	});
	function c(e) {
		return function(...t) {
			let n = e(...t);
			if (process.env.NODE_ENV !== "production") {
				let e = (/* @__PURE__ */ Error()).stack?.split("\n");
				if (e === void 0 || e.length < 4) o(n);
				else {
					let t = e[4];
					i.current = n, s(t);
				}
			} else o(n);
		};
	}
})), vt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorageInstance", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (0, Qe().createAsyncLocalStorage)();
})), yt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "afterTaskAsyncStorage", {
		enumerable: !0,
		get: function() {
			return t.afterTaskAsyncStorageInstance;
		}
	});
	var t = vt();
})), bt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		isRequestAPICallableInsideAfter: function() {
			return o;
		},
		throwForSearchParamsAccessInUseCache: function() {
			return a;
		},
		throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
			return i;
		}
	});
	var n = ut(), r = yt();
	function i(e, t) {
		throw Object.defineProperty(new n.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
			value: "E543",
			enumerable: !1,
			configurable: !0
		});
	}
	function a(e, t) {
		let n = Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
			value: "E842",
			enumerable: !1,
			configurable: !0
		});
		throw Error.captureStackTrace(n, t), e.invalidDynamicUsageError ??= n, n;
	}
	function o() {
		return r.afterTaskAsyncStorage.getStore()?.rootTaskSpawnPhase === "action";
	}
})), xt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "cookies", {
		enumerable: !0,
		get: function() {
			return f;
		}
	});
	var t = nt(), n = Xe(), r = et(), i = ct(), a = gt(), o = ut(), s = dt(), c = _t(), l = bt(), u = at(), d = st();
	function f() {
		let e = "cookies", n = r.workAsyncStorage.getStore(), c = i.workUnitAsyncStorage.getStore();
		if (n) {
			if (c && c.phase === "after" && !(0, l.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`cookies()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E843",
				enumerable: !1,
				configurable: !0
			});
			if (n.forceStatic) return g(p());
			if (n.dynamicShouldError) throw Object.defineProperty(new o.StaticGenBailoutError(`Route ${n.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E849",
				enumerable: !1,
				configurable: !0
			});
			if (c) switch (c.type) {
				case "cache":
					let r = Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E831",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(r, f), n.invalidDynamicUsageError ??= r, r;
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`cookies()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E846",
					enumerable: !1,
					configurable: !0
				});
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${n.route} used \`cookies()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1123",
					enumerable: !1,
					configurable: !0
				});
				case "prerender": return h(n, c);
				case "prerender-client":
				case "validation-client":
					let o = "`cookies`";
					throw Object.defineProperty(new u.InvariantError(`${o} must not be used within a Client Component. Next.js should be preventing ${o} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1037",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, a.postponeWithTracking)(n.route, e, c.dynamicTracking);
				case "prerender-legacy": return (0, a.throwToInterruptStaticGeneration)(e, n, c);
				case "prerender-runtime": return (0, s.delayUntilRuntimeStage)(c, g(c.cookies));
				case "private-cache": return g(c.cookies);
				case "request":
					(0, a.trackDynamicDataInDynamicRender)(c);
					let l;
					if (l = (0, t.areCookiesMutableInCurrentPhase)(c) ? c.userspaceMutableCookies : c.cookies, process.env.NODE_ENV === "development") return _(c, l, n?.route);
					if (c.asyncApiPromises) {
						let e = (0, i.isInEarlyRenderStage)(c);
						return l === c.mutableCookies ? e ? c.asyncApiPromises.earlyMutableCookies : c.asyncApiPromises.mutableCookies : e ? c.asyncApiPromises.earlyCookies : c.asyncApiPromises.cookies;
					} else return g(l);
				default:
			}
		}
		(0, i.throwForMissingRequestStore)(e);
	}
	function p() {
		return t.RequestCookiesAdapter.seal(new n.RequestCookies(new Headers({})));
	}
	var m = /* @__PURE__ */ new WeakMap();
	function h(e, t) {
		let n = m.get(t);
		if (n) return n;
		let r = (0, s.makeHangingPromise)(t.renderSignal, e.route, "`cookies()`");
		return m.set(t, r), r;
	}
	function g(e) {
		let t = m.get(e);
		if (t) return t;
		let n = Promise.resolve(e);
		return m.set(e, n), n;
	}
	function _(e, t, n) {
		if (e.asyncApiPromises) {
			let r = (0, i.isInEarlyRenderStage)(e), a;
			if (t === e.mutableCookies) a = r ? e.asyncApiPromises.earlyMutableCookies : e.asyncApiPromises.mutableCookies;
			else if (t === e.cookies) a = r ? e.asyncApiPromises.earlyCookies : e.asyncApiPromises.cookies;
			else throw Object.defineProperty(new u.InvariantError("Received an underlying cookies object that does not match either `cookies` or `mutableCookies`"), "__NEXT_ERROR_CODE", {
				value: "E890",
				enumerable: !1,
				configurable: !0
			});
			return y(a, n);
		}
		let r = m.get(t);
		if (r) return r;
		let a = y((0, s.makeDevtoolsIOAwarePromise)(t, e, d.RenderStage.Runtime), n);
		return m.set(t, a), a;
	}
	var v = (0, c.createDedupedByCallsiteServerErrorLoggerDev)(S);
	function y(e, t) {
		return Object.defineProperties(e, {
			[Symbol.iterator]: x(e, t),
			size: b(e, "size", t),
			get: b(e, "get", t),
			getAll: b(e, "getAll", t),
			has: b(e, "has", t),
			set: b(e, "set", t),
			delete: b(e, "delete", t),
			clear: b(e, "clear", t),
			toString: b(e, "toString", t)
		}), e;
	}
	function b(e, t, n) {
		return {
			enumerable: !1,
			get() {
				v(n, `\`cookies().${t}\``);
			},
			set(n) {
				Object.defineProperty(e, t, {
					value: n,
					writable: !0,
					configurable: !0
				});
			},
			configurable: !0
		};
	}
	function x(e, t) {
		return {
			enumerable: !1,
			get() {
				v(t, "`...cookies()` or similar iteration");
			},
			set(t) {
				Object.defineProperty(e, Symbol.iterator, {
					value: t,
					writable: !0,
					enumerable: !0,
					configurable: !0
				});
			},
			configurable: !0
		};
	}
	function S(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`cookies()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E830",
			enumerable: !1,
			configurable: !0
		});
	}
})), St = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		HeadersAdapter: function() {
			return i;
		},
		ReadonlyHeadersError: function() {
			return r;
		}
	});
	var n = Ze(), r = class e extends Error {
		constructor() {
			super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
		}
		static callable() {
			throw new e();
		}
	}, i = class e extends Headers {
		constructor(e) {
			super(), this.headers = new Proxy(e, {
				get(t, r, i) {
					if (typeof r == "symbol") return n.ReflectAdapter.get(t, r, i);
					let a = r.toLowerCase(), o = Object.keys(e).find((e) => e.toLowerCase() === a);
					if (o !== void 0) return n.ReflectAdapter.get(t, o, i);
				},
				set(t, r, i, a) {
					if (typeof r == "symbol") return n.ReflectAdapter.set(t, r, i, a);
					let o = r.toLowerCase(), s = Object.keys(e).find((e) => e.toLowerCase() === o);
					return n.ReflectAdapter.set(t, s ?? r, i, a);
				},
				has(t, r) {
					if (typeof r == "symbol") return n.ReflectAdapter.has(t, r);
					let i = r.toLowerCase(), a = Object.keys(e).find((e) => e.toLowerCase() === i);
					return a === void 0 ? !1 : n.ReflectAdapter.has(t, a);
				},
				deleteProperty(t, r) {
					if (typeof r == "symbol") return n.ReflectAdapter.deleteProperty(t, r);
					let i = r.toLowerCase(), a = Object.keys(e).find((e) => e.toLowerCase() === i);
					return a === void 0 ? !0 : n.ReflectAdapter.deleteProperty(t, a);
				}
			});
		}
		static seal(e) {
			return new Proxy(e, { get(e, t, i) {
				switch (t) {
					case "append":
					case "delete":
					case "set": return r.callable;
					default: return n.ReflectAdapter.get(e, t, i);
				}
			} });
		}
		merge(e) {
			return Array.isArray(e) ? e.join(", ") : e;
		}
		static from(t) {
			return t instanceof Headers ? t : new e(t);
		}
		append(e, t) {
			let n = this.headers[e];
			typeof n == "string" ? this.headers[e] = [n, t] : Array.isArray(n) ? n.push(t) : this.headers[e] = t;
		}
		delete(e) {
			delete this.headers[e];
		}
		get(e) {
			let t = this.headers[e];
			return t === void 0 ? null : this.merge(t);
		}
		has(e) {
			return this.headers[e] !== void 0;
		}
		set(e, t) {
			this.headers[e] = t;
		}
		forEach(e, t) {
			for (let [n, r] of this.entries()) e.call(t, r, n, this);
		}
		*entries() {
			for (let e of Object.keys(this.headers)) {
				let t = e.toLowerCase();
				yield [t, this.get(t)];
			}
		}
		*keys() {
			for (let e of Object.keys(this.headers)) yield e.toLowerCase();
		}
		*values() {
			for (let e of Object.keys(this.headers)) yield this.get(e);
		}
		[Symbol.iterator]() {
			return this.entries();
		}
	};
})), Ct = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "headers", {
		enumerable: !0,
		get: function() {
			return d;
		}
	});
	var t = St(), n = et(), r = ct(), i = gt(), a = ut(), o = dt(), s = _t(), c = bt(), l = at(), u = st();
	function d() {
		let e = "headers", s = n.workAsyncStorage.getStore(), u = r.workUnitAsyncStorage.getStore();
		if (s) {
			if (u && u.phase === "after" && !(0, c.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside \`after()\`. This is not supported. If you need this data inside an \`after()\` callback, use \`headers()\` outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E839",
				enumerable: !1,
				configurable: !0
			});
			if (s.forceStatic) return m(t.HeadersAdapter.seal(new Headers({})));
			if (u) switch (u.type) {
				case "cache": {
					let e = Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E833",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(e, d), s.invalidDynamicUsageError ??= e, e;
				}
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside a function cached with \`unstable_cache()\`. Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use \`headers()\` outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E838",
					enumerable: !1,
					configurable: !0
				});
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${s.route} used \`headers()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1134",
					enumerable: !1,
					configurable: !0
				});
				case "prerender":
				case "prerender-client":
				case "validation-client":
				case "private-cache":
				case "prerender-runtime":
				case "prerender-ppr":
				case "prerender-legacy":
				case "request": break;
				default:
			}
			if (s.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${s.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E828",
				enumerable: !1,
				configurable: !0
			});
			if (u) switch (u.type) {
				case "prerender": return p(s, u);
				case "prerender-client":
				case "validation-client":
					let t = "`headers`";
					throw Object.defineProperty(new l.InvariantError(`${t} must not be used within a client component. Next.js should be preventing ${t} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1017",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, i.postponeWithTracking)(s.route, e, u.dynamicTracking);
				case "prerender-legacy": return (0, i.throwToInterruptStaticGeneration)(e, s, u);
				case "prerender-runtime": return (0, o.delayUntilRuntimeStage)(u, m(u.headers));
				case "private-cache": return m(u.headers);
				case "request": return (0, i.trackDynamicDataInDynamicRender)(u), process.env.NODE_ENV === "development" ? h(u.headers, s?.route, u) : u.asyncApiPromises ? (0, r.isInEarlyRenderStage)(u) ? u.asyncApiPromises.earlyHeaders : u.asyncApiPromises.headers : m(u.headers);
				default:
			}
		}
		(0, r.throwForMissingRequestStore)(e);
	}
	var f = /* @__PURE__ */ new WeakMap();
	function p(e, t) {
		let n = f.get(t);
		if (n) return n;
		let r = (0, o.makeHangingPromise)(t.renderSignal, e.route, "`headers()`");
		return f.set(t, r), r;
	}
	function m(e) {
		let t = f.get(e);
		if (t) return t;
		let n = Promise.resolve(e);
		return f.set(e, n), n;
	}
	function h(e, t, n) {
		if (n.asyncApiPromises) return _((0, r.isInEarlyRenderStage)(n) ? n.asyncApiPromises.earlyHeaders : n.asyncApiPromises.headers, t);
		let i = f.get(e);
		if (i) return i;
		let a = _((0, o.makeDevtoolsIOAwarePromise)(e, n, u.RenderStage.Runtime), t);
		return f.set(e, a), a;
	}
	var g = (0, s.createDedupedByCallsiteServerErrorLoggerDev)(b);
	function _(e, t) {
		return Object.defineProperties(e, {
			[Symbol.iterator]: y(e, t),
			append: v(e, "append", t),
			delete: v(e, "delete", t),
			get: v(e, "get", t),
			has: v(e, "has", t),
			set: v(e, "set", t),
			getSetCookie: v(e, "getSetCookie", t),
			forEach: v(e, "forEach", t),
			keys: v(e, "keys", t),
			values: v(e, "values", t),
			entries: v(e, "entries", t)
		}), e;
	}
	function v(e, t, n) {
		return {
			enumerable: !1,
			get() {
				g(n, `\`headers().${t}\``);
			},
			set(n) {
				Object.defineProperty(e, t, {
					value: n,
					writable: !0,
					configurable: !0
				});
			},
			configurable: !0
		};
	}
	function y(e, t) {
		return {
			enumerable: !1,
			get() {
				g(t, "`...headers()` or similar iteration");
			},
			set(t) {
				Object.defineProperty(e, Symbol.iterator, {
					value: t,
					writable: !0,
					enumerable: !0,
					configurable: !0
				});
			},
			configurable: !0
		};
	}
	function b(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`headers()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E836",
			enumerable: !1,
			configurable: !0
		});
	}
})), wt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "draftMode", {
		enumerable: !0,
		get: function() {
			return u;
		}
	});
	var t = ct(), n = et(), r = gt(), i = _t(), a = ut(), o = lt(), s = at(), c = dt(), l = Ze();
	function u() {
		let e = "draftMode", r = n.workAsyncStorage.getStore(), i = t.workUnitAsyncStorage.getStore();
		switch ((!r || !i) && (0, t.throwForMissingRequestStore)(e), i.type) {
			case "prerender-runtime": return (0, c.delayUntilRuntimeStage)(i, d(i.draftMode, r));
			case "request": return d(i.draftMode, r);
			case "cache":
			case "private-cache":
			case "unstable-cache":
				let n = (0, t.getDraftModeProviderForCacheScope)(r, i);
				if (n) return d(n, r);
			case "prerender":
			case "prerender-ppr":
			case "prerender-legacy": return d(null, r);
			case "prerender-client":
			case "validation-client": {
				let e = "`draftMode`";
				throw Object.defineProperty(new s.InvariantError(`${e} must not be used within a Client Component. Next.js should be preventing ${e} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
					value: "E1046",
					enumerable: !1,
					configurable: !0
				});
			}
			case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${r.route} used \`${e}()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
				value: "E1132",
				enumerable: !1,
				configurable: !0
			});
			default: return i;
		}
	}
	function d(e, t) {
		let n = e ?? f;
		return p.get(n) || (process.env.NODE_ENV === "development" && !t?.isPrefetchRequest ? m(e, t?.route) : Promise.resolve(new h(e)));
	}
	var f = {}, p = /* @__PURE__ */ new WeakMap();
	function m(e, t) {
		let n = new h(e), r = Promise.resolve(n);
		return new Proxy(r, { get(e, n, r) {
			switch (n) {
				case "isEnabled":
					g(t, `\`draftMode().${n}\``);
					break;
				case "enable":
				case "disable":
					g(t, `\`draftMode().${n}()\``);
					break;
				default:
			}
			return l.ReflectAdapter.get(e, n, r);
		} });
	}
	var h = class {
		constructor(e) {
			this._provider = e;
		}
		get isEnabled() {
			return this._provider === null ? !1 : this._provider.isEnabled;
		}
		enable() {
			v("draftMode().enable()", this.enable), this._provider !== null && this._provider.enable();
		}
		disable() {
			v("draftMode().disable()", this.disable), this._provider !== null && this._provider.disable();
		}
	}, g = (0, i.createDedupedByCallsiteServerErrorLoggerDev)(_);
	function _(e, t) {
		let n = e ? `Route "${e}" ` : "This route ";
		return Object.defineProperty(/* @__PURE__ */ Error(`${n}used ${t}. \`draftMode()\` returns a Promise and must be unwrapped with \`await\` or \`React.use()\` before accessing its properties. Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
			value: "E835",
			enumerable: !1,
			configurable: !0
		});
	}
	function v(e, i) {
		let c = n.workAsyncStorage.getStore(), l = t.workUnitAsyncStorage.getStore();
		if (c) {
			if (l?.phase === "after") throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside \`after()\`. The enabled status of \`draftMode()\` can be read inside \`after()\` but you cannot enable or disable \`draftMode()\`. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E845",
				enumerable: !1,
				configurable: !0
			});
			if (c.dynamicShouldError) throw Object.defineProperty(new a.StaticGenBailoutError(`Route ${c.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E553",
				enumerable: !1,
				configurable: !0
			});
			if (l) switch (l.type) {
				case "cache":
				case "private-cache": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside "use cache". The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E829",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(t, i), c.invalidDynamicUsageError ??= t, t;
				}
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used "${e}" inside a function cached with \`unstable_cache()\`. The enabled status of \`draftMode()\` can be read in caches but you must not enable or disable \`draftMode()\` inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E844",
					enumerable: !1,
					configurable: !0
				});
				case "prerender":
				case "prerender-runtime": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used ${e} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
						value: "E126",
						enumerable: !1,
						configurable: !0
					});
					return (0, r.abortAndThrowOnSynchronousRequestDataAccess)(c.route, e, t, l);
				}
				case "prerender-client":
				case "validation-client":
					let t = "`draftMode`";
					throw Object.defineProperty(new s.InvariantError(`${t} must not be used within a Client Component. Next.js should be preventing ${t} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1046",
						enumerable: !1,
						configurable: !0
					});
				case "prerender-ppr": return (0, r.postponeWithTracking)(c.route, e, l.dynamicTracking);
				case "prerender-legacy":
					l.revalidate = 0;
					let n = Object.defineProperty(new o.DynamicServerError(`Route ${c.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
						value: "E558",
						enumerable: !1,
						configurable: !0
					});
					throw c.dynamicUsageDescription = e, c.dynamicUsageStack = n.stack, n;
				case "request":
					(0, r.trackDynamicDataInDynamicRender)(l);
					break;
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${c.route} used \`${e}\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1121",
					enumerable: !1,
					configurable: !0
				});
				default:
			}
		}
	}
})), Tt = (/* @__PURE__ */ s(((e, t) => {
	t.exports.cookies = xt().cookies, t.exports.headers = Ct().headers, t.exports.draftMode = wt().draftMode;
})))();
async function Et(e) {
	try {
		let t = null;
		if (e) {
			let n = e.headers.get("authorization");
			n && n.startsWith("Bearer ") && (t = n.split(" ")[1]);
		}
		if (t ||= (await (0, Tt.cookies)()).get("token")?.value || null, !t) return null;
		let n = Je(t);
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
//#endregion
//#region ../../node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var Dt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "detectDomainLocale", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e, t, n) {
		if (e) {
			n &&= n.toLowerCase();
			for (let r of e) if (t === r.domain?.split(":", 1)[0].toLowerCase() || n === r.defaultLocale.toLowerCase() || r.locales?.some((e) => e.toLowerCase() === n)) return r;
		}
	}
})), Ot = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "removeTrailingSlash", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e) {
		return e.replace(/\/$/, "") || "/";
	}
})), kt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "parsePath", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e) {
		let t = e.indexOf("#"), n = e.indexOf("?"), r = n > -1 && (t < 0 || n < t);
		return r || t > -1 ? {
			pathname: e.substring(0, r ? n : t),
			query: r ? e.substring(n, t > -1 ? t : void 0) : "",
			hash: t > -1 ? e.slice(t) : ""
		} : {
			pathname: e,
			query: "",
			hash: ""
		};
	}
})), At = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "addPathPrefix", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = kt();
	function n(e, n) {
		if (!e.startsWith("/") || !n) return e;
		let { pathname: r, query: i, hash: a } = (0, t.parsePath)(e);
		return `${n}${r}${i}${a}`;
	}
})), jt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "addPathSuffix", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = kt();
	function n(e, n) {
		if (!e.startsWith("/") || !n) return e;
		let { pathname: r, query: i, hash: a } = (0, t.parsePath)(e);
		return `${r}${n}${i}${a}`;
	}
})), Mt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "pathHasPrefix", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = kt();
	function n(e, n) {
		if (typeof e != "string") return !1;
		let { pathname: r } = (0, t.parsePath)(e);
		return r === n || r.startsWith(n + "/");
	}
})), Nt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "addLocale", {
		enumerable: !0,
		get: function() {
			return r;
		}
	});
	var t = At(), n = Mt();
	function r(e, r, i, a) {
		if (!r || r === i) return e;
		let o = e.toLowerCase();
		return !a && ((0, n.pathHasPrefix)(o, "/api") || (0, n.pathHasPrefix)(o, `/${r.toLowerCase()}`)) ? e : (0, t.addPathPrefix)(e, `/${r}`);
	}
})), Pt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "formatNextPathnameInfo", {
		enumerable: !0,
		get: function() {
			return a;
		}
	});
	var t = Ot(), n = At(), r = jt(), i = Nt();
	function a(e) {
		let a = (0, i.addLocale)(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
		return (e.buildId || !e.trailingSlash) && (a = (0, t.removeTrailingSlash)(a)), e.buildId && (a = (0, r.addPathSuffix)((0, n.addPathPrefix)(a, `/_next/data/${e.buildId}`), e.pathname === "/" ? "index.json" : ".json")), a = (0, n.addPathPrefix)(a, e.basePath), !e.buildId && e.trailingSlash ? a.endsWith("/") ? a : (0, r.addPathSuffix)(a, "/") : (0, t.removeTrailingSlash)(a);
	}
})), Ft = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getHostname", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t(e, t) {
		let n;
		if (t?.host && !Array.isArray(t.host)) n = t.host.toString().split(":", 1)[0];
		else if (e.hostname) n = e.hostname;
		else return;
		return n.toLowerCase();
	}
})), It = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "normalizeLocalePath", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = /* @__PURE__ */ new WeakMap();
	function n(e, n) {
		if (!n) return { pathname: e };
		let r = t.get(n);
		r || (r = n.map((e) => e.toLowerCase()), t.set(n, r));
		let i, a = e.split("/", 2);
		if (!a[1]) return { pathname: e };
		let o = a[1].toLowerCase(), s = r.indexOf(o);
		return s < 0 ? { pathname: e } : (i = n[s], e = e.slice(i.length + 1) || "/", {
			pathname: e,
			detectedLocale: i
		});
	}
})), Lt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "removePathPrefix", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = Mt();
	function n(e, n) {
		if (!(0, t.pathHasPrefix)(e, n)) return e;
		let r = e.slice(n.length);
		return r.startsWith("/") ? r : `/${r}`;
	}
})), Rt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "getNextPathnameInfo", {
		enumerable: !0,
		get: function() {
			return i;
		}
	});
	var t = It(), n = Lt(), r = Mt();
	function i(e, i) {
		let { basePath: a, i18n: o, trailingSlash: s } = i.nextConfig ?? {}, c = {
			pathname: e,
			trailingSlash: e === "/" ? s : e.endsWith("/")
		};
		a && (0, r.pathHasPrefix)(c.pathname, a) && (c.pathname = (0, n.removePathPrefix)(c.pathname, a), c.basePath = a);
		let l = c.pathname;
		if (c.pathname.startsWith("/_next/data/") && c.pathname.endsWith(".json")) {
			let e = c.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
			c.buildId = e[0], l = e[1] === "index" ? "/" : `/${e.slice(1).join("/")}`, i.parseData === !0 && (c.pathname = l);
		}
		if (o) {
			let e = i.i18nProvider ? i.i18nProvider.analyze(c.pathname) : (0, t.normalizeLocalePath)(c.pathname, o.locales);
			c.locale = e.detectedLocale, c.pathname = e.pathname ?? c.pathname, !e.detectedLocale && c.buildId && (e = i.i18nProvider ? i.i18nProvider.analyze(l) : (0, t.normalizeLocalePath)(l, o.locales), e.detectedLocale && (c.locale = e.detectedLocale));
		}
		return c;
	}
})), zt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "NextURL", {
		enumerable: !0,
		get: function() {
			return c;
		}
	});
	var t = Dt(), n = Pt(), r = Ft(), i = Rt(), a = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
	function o(e, t) {
		let n = new URL(String(e), t && String(t));
		return a.test(n.hostname) && (n.hostname = "localhost"), n;
	}
	var s = Symbol("NextURLInternal"), c = class e {
		constructor(e, t, n) {
			let r, i;
			typeof t == "object" && "pathname" in t || typeof t == "string" ? (r = t, i = n || {}) : i = n || t || {}, this[s] = {
				url: o(e, r ?? i.base),
				options: i,
				basePath: ""
			}, this.analyze();
		}
		analyze() {
			let e = (0, i.getNextPathnameInfo)(this[s].url.pathname, {
				nextConfig: this[s].options.nextConfig,
				parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
				i18nProvider: this[s].options.i18nProvider
			}), n = (0, r.getHostname)(this[s].url, this[s].options.headers);
			this[s].domainLocale = this[s].options.i18nProvider ? this[s].options.i18nProvider.detectDomainLocale(n) : (0, t.detectDomainLocale)(this[s].options.nextConfig?.i18n?.domains, n);
			let a = this[s].domainLocale?.defaultLocale || this[s].options.nextConfig?.i18n?.defaultLocale;
			this[s].url.pathname = e.pathname, this[s].defaultLocale = a, this[s].basePath = e.basePath ?? "", this[s].buildId = e.buildId, this[s].locale = e.locale ?? a, this[s].trailingSlash = e.trailingSlash;
		}
		formatPathname() {
			return (0, n.formatNextPathnameInfo)({
				basePath: this[s].basePath,
				buildId: this[s].buildId,
				defaultLocale: this[s].options.forceLocale ? void 0 : this[s].defaultLocale,
				locale: this[s].locale,
				pathname: this[s].url.pathname,
				trailingSlash: this[s].trailingSlash
			});
		}
		formatSearch() {
			return this[s].url.search;
		}
		get buildId() {
			return this[s].buildId;
		}
		set buildId(e) {
			this[s].buildId = e;
		}
		get locale() {
			return this[s].locale ?? "";
		}
		set locale(e) {
			var t;
			if (!this[s].locale || !((t = this[s].options.nextConfig) != null && t.i18n?.locales.includes(e))) throw Object.defineProperty(/* @__PURE__ */ TypeError(`The NextURL configuration includes no locale "${e}"`), "__NEXT_ERROR_CODE", {
				value: "E597",
				enumerable: !1,
				configurable: !0
			});
			this[s].locale = e;
		}
		get defaultLocale() {
			return this[s].defaultLocale;
		}
		get domainLocale() {
			return this[s].domainLocale;
		}
		get searchParams() {
			return this[s].url.searchParams;
		}
		get host() {
			return this[s].url.host;
		}
		set host(e) {
			this[s].url.host = e;
		}
		get hostname() {
			return this[s].url.hostname;
		}
		set hostname(e) {
			this[s].url.hostname = e;
		}
		get port() {
			return this[s].url.port;
		}
		set port(e) {
			this[s].url.port = e;
		}
		get protocol() {
			return this[s].url.protocol;
		}
		set protocol(e) {
			this[s].url.protocol = e;
		}
		get href() {
			let e = this.formatPathname(), t = this.formatSearch();
			return `${this.protocol}//${this.host}${e}${t}${this.hash}`;
		}
		set href(e) {
			this[s].url = o(e), this.analyze();
		}
		get origin() {
			return this[s].url.origin;
		}
		get pathname() {
			return this[s].url.pathname;
		}
		set pathname(e) {
			this[s].url.pathname = e;
		}
		get hash() {
			return this[s].url.hash;
		}
		set hash(e) {
			this[s].url.hash = e;
		}
		get search() {
			return this[s].url.search;
		}
		set search(e) {
			this[s].url.search = e;
		}
		get password() {
			return this[s].url.password;
		}
		set password(e) {
			this[s].url.password = e;
		}
		get username() {
			return this[s].url.username;
		}
		set username(e) {
			this[s].url.username = e;
		}
		get basePath() {
			return this[s].basePath;
		}
		set basePath(e) {
			this[s].basePath = e.startsWith("/") ? e : `/${e}`;
		}
		toString() {
			return this.href;
		}
		toJSON() {
			return this.href;
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return {
				href: this.href,
				origin: this.origin,
				protocol: this.protocol,
				username: this.username,
				password: this.password,
				host: this.host,
				hostname: this.hostname,
				port: this.port,
				pathname: this.pathname,
				search: this.search,
				searchParams: this.searchParams,
				hash: this.hash
			};
		}
		clone() {
			return new e(String(this), this[s].options);
		}
	};
})), Bt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		ACTION_SUFFIX: function() {
			return p;
		},
		APP_DIR_ALIAS: function() {
			return j;
		},
		CACHE_ONE_YEAR_SECONDS: function() {
			return ee;
		},
		DOT_NEXT_ALIAS: function() {
			return ae;
		},
		ESLINT_DEFAULT_DIRS: function() {
			return H;
		},
		GSP_NO_RETURNED_VALUE: function() {
			return z;
		},
		GSSP_COMPONENT_MEMBER_ERROR: function() {
			return B;
		},
		GSSP_NO_RETURNED_VALUE: function() {
			return pe;
		},
		HTML_CONTENT_TYPE_HEADER: function() {
			return r;
		},
		INFINITE_CACHE: function() {
			return O;
		},
		INSTRUMENTATION_HOOK_FILENAME: function() {
			return re;
		},
		JSON_CONTENT_TYPE_HEADER: function() {
			return i;
		},
		MATCHED_PATH_HEADER: function() {
			return s;
		},
		MIDDLEWARE_FILENAME: function() {
			return te;
		},
		MIDDLEWARE_LOCATION_REGEXP: function() {
			return k;
		},
		NEXT_BODY_SUFFIX: function() {
			return g;
		},
		NEXT_CACHE_IMPLICIT_TAG_ID: function() {
			return E;
		},
		NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
			return y;
		},
		NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
			return b;
		},
		NEXT_CACHE_ROOT_PARAM_TAG_ID: function() {
			return D;
		},
		NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
			return T;
		},
		NEXT_CACHE_TAGS_HEADER: function() {
			return v;
		},
		NEXT_CACHE_TAG_MAX_ITEMS: function() {
			return C;
		},
		NEXT_CACHE_TAG_MAX_LENGTH: function() {
			return w;
		},
		NEXT_DATA_SUFFIX: function() {
			return m;
		},
		NEXT_INTERCEPTION_MARKER_PREFIX: function() {
			return o;
		},
		NEXT_META_SUFFIX: function() {
			return h;
		},
		NEXT_NAV_DEPLOYMENT_ID_HEADER: function() {
			return _;
		},
		NEXT_QUERY_PARAM_PREFIX: function() {
			return a;
		},
		NEXT_RESUME_HEADER: function() {
			return x;
		},
		NEXT_RESUME_STATE_LENGTH_HEADER: function() {
			return S;
		},
		NON_STANDARD_NODE_ENV: function() {
			return he;
		},
		PAGES_DIR_ALIAS: function() {
			return ie;
		},
		PRERENDER_REVALIDATE_HEADER: function() {
			return c;
		},
		PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
			return l;
		},
		PROXY_FILENAME: function() {
			return A;
		},
		PROXY_LOCATION_REGEXP: function() {
			return ne;
		},
		PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
			return L;
		},
		ROOT_DIR_ALIAS: function() {
			return oe;
		},
		RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
			return I;
		},
		RSC_ACTION_ENCRYPTION_ALIAS: function() {
			return F;
		},
		RSC_ACTION_PROXY_ALIAS: function() {
			return se;
		},
		RSC_ACTION_VALIDATE_ALIAS: function() {
			return N;
		},
		RSC_CACHE_WRAPPER_ALIAS: function() {
			return P;
		},
		RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
			return ce;
		},
		RSC_MOD_REF_PROXY_ALIAS: function() {
			return M;
		},
		RSC_SEGMENTS_DIR_SUFFIX: function() {
			return u;
		},
		RSC_SEGMENT_SUFFIX: function() {
			return d;
		},
		RSC_SUFFIX: function() {
			return f;
		},
		SERVER_PROPS_EXPORT_ERROR: function() {
			return R;
		},
		SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
			return ue;
		},
		SERVER_PROPS_SSG_CONFLICT: function() {
			return de;
		},
		SERVER_RUNTIME: function() {
			return ge;
		},
		SSG_FALLBACK_EXPORT_ERROR: function() {
			return V;
		},
		SSG_GET_INITIAL_PROPS_CONFLICT: function() {
			return le;
		},
		STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
			return fe;
		},
		TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
			return n;
		},
		UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
			return me;
		},
		WEBPACK_LAYERS: function() {
			return G;
		},
		WEBPACK_RESOURCE_QUERIES: function() {
			return K;
		},
		WEB_SOCKET_MAX_RECONNECTIONS: function() {
			return U;
		}
	});
	var n = "text/plain", r = "text/html; charset=utf-8", i = "application/json; charset=utf-8", a = "nxtP", o = "nxtI", s = "x-matched-path", c = "x-prerender-revalidate", l = "x-prerender-revalidate-if-generated", u = ".segments", d = ".segment.rsc", f = ".rsc", p = ".action", m = ".json", h = ".meta", g = ".body", _ = "x-nextjs-deployment-id", v = "x-next-cache-tags", y = "x-next-revalidated-tags", b = "x-next-revalidate-tag-token", x = "next-resume", S = "x-next-resume-state-length", C = 128, w = 256, T = 1024, E = "_N_T_", D = "_N_RP_", ee = 31536e3, O = 4294967294, te = "middleware", k = `(?:src/)?${te}`, A = "proxy", ne = `(?:src/)?${A}`, re = "instrumentation", ie = "private-next-pages", ae = "private-dot-next", oe = "private-next-root-dir", j = "private-next-app-dir", M = "private-next-rsc-mod-ref-proxy", N = "private-next-rsc-action-validate", se = "private-next-rsc-server-reference", P = "private-next-rsc-cache-wrapper", ce = "private-next-rsc-track-dynamic-import", F = "private-next-rsc-action-encryption", I = "private-next-rsc-action-client-wrapper", L = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", le = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", ue = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", de = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", fe = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", R = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", z = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", pe = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", me = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", B = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", he = "You are using a non-standard \"NODE_ENV\" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env", V = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", H = [
		"app",
		"pages",
		"components",
		"lib",
		"src"
	], ge = {
		edge: "edge",
		experimentalEdge: "experimental-edge",
		nodejs: "nodejs"
	}, U = 12, W = {
		shared: "shared",
		reactServerComponents: "rsc",
		serverSideRendering: "ssr",
		actionBrowser: "action-browser",
		apiNode: "api-node",
		apiEdge: "api-edge",
		middleware: "middleware",
		instrument: "instrument",
		edgeAsset: "edge-asset",
		appPagesBrowser: "app-pages-browser",
		pagesDirBrowser: "pages-dir-browser",
		pagesDirEdge: "pages-dir-edge",
		pagesDirNode: "pages-dir-node"
	}, G = {
		...W,
		GROUP: {
			builtinReact: [W.reactServerComponents, W.actionBrowser],
			serverOnly: [
				W.reactServerComponents,
				W.actionBrowser,
				W.instrument,
				W.middleware
			],
			neutralTarget: [W.apiNode, W.apiEdge],
			clientOnly: [W.serverSideRendering, W.appPagesBrowser],
			bundled: [
				W.reactServerComponents,
				W.actionBrowser,
				W.serverSideRendering,
				W.appPagesBrowser,
				W.shared,
				W.instrument,
				W.middleware
			],
			appPages: [
				W.reactServerComponents,
				W.serverSideRendering,
				W.appPagesBrowser,
				W.actionBrowser
			]
		}
	}, K = {
		edgeSSREntry: "__next_edge_ssr_entry__",
		metadata: "__next_metadata__",
		metadataRoute: "__next_metadata_route__",
		metadataImageMeta: "__next_metadata_image_meta__"
	};
})), Vt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		fromNodeOutgoingHttpHeaders: function() {
			return r;
		},
		normalizeNextQueryParam: function() {
			return s;
		},
		splitCookiesString: function() {
			return i;
		},
		toNodeOutgoingHttpHeaders: function() {
			return a;
		},
		validateURL: function() {
			return o;
		}
	});
	var n = Bt();
	function r(e) {
		let t = new Headers();
		for (let [n, r] of Object.entries(e)) {
			let e = Array.isArray(r) ? r : [r];
			for (let r of e) r !== void 0 && (typeof r == "number" && (r = r.toString()), t.append(n, r));
		}
		return t;
	}
	function i(e) {
		var t = [], n = 0, r, i, a, o, s;
		function c() {
			for (; n < e.length && /\s/.test(e.charAt(n));) n += 1;
			return n < e.length;
		}
		function l() {
			return i = e.charAt(n), i !== "=" && i !== ";" && i !== ",";
		}
		for (; n < e.length;) {
			for (r = n, s = !1; c();) if (i = e.charAt(n), i === ",") {
				for (a = n, n += 1, c(), o = n; n < e.length && l();) n += 1;
				n < e.length && e.charAt(n) === "=" ? (s = !0, n = o, t.push(e.substring(r, a)), r = n) : n = a + 1;
			} else n += 1;
			(!s || n >= e.length) && t.push(e.substring(r, e.length));
		}
		return t;
	}
	function a(e) {
		let t = {}, n = [];
		if (e) for (let [r, a] of e.entries()) r.toLowerCase() === "set-cookie" ? (n.push(...i(a)), t[r] = n.length === 1 ? n[0] : n) : t[r] = a;
		return t;
	}
	function o(e) {
		try {
			return String(new URL(String(e)));
		} catch (t) {
			throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t }), "__NEXT_ERROR_CODE", {
				value: "E61",
				enumerable: !1,
				configurable: !0
			});
		}
	}
	function s(e) {
		let t = [n.NEXT_QUERY_PARAM_PREFIX, n.NEXT_INTERCEPTION_MARKER_PREFIX];
		for (let n of t) if (e !== n && e.startsWith(n)) return e.substring(n.length);
		return null;
	}
})), Ht = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		PageSignatureError: function() {
			return n;
		},
		RemovedPageError: function() {
			return r;
		},
		RemovedUAError: function() {
			return i;
		}
	});
	var n = class extends Error {
		constructor({ page: e }) {
			super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
		}
	}, r = class extends Error {
		constructor() {
			super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
		}
	}, i = class extends Error {
		constructor() {
			super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
		}
	};
})), Ut = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		INTERNALS: function() {
			return o;
		},
		NextRequest: function() {
			return s;
		}
	});
	var n = zt(), r = Vt(), i = Ht(), a = Xe(), o = Symbol("internal request"), s = class extends Request {
		constructor(e, t = {}) {
			let i = typeof e != "string" && "url" in e ? e.url : String(e);
			(0, r.validateURL)(i), process.env.NEXT_RUNTIME !== "edge" && t.body && t.duplex !== "half" && (t.duplex = "half"), e instanceof Request ? super(e, t) : super(i, t);
			let s = new n.NextURL(i, {
				headers: (0, r.toNodeOutgoingHttpHeaders)(this.headers),
				nextConfig: t.nextConfig
			});
			this[o] = {
				cookies: new a.RequestCookies(this.headers),
				nextUrl: s,
				url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? i : s.toString()
			};
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return {
				cookies: this.cookies,
				nextUrl: this.nextUrl,
				url: this.url,
				bodyUsed: this.bodyUsed,
				cache: this.cache,
				credentials: this.credentials,
				destination: this.destination,
				headers: Object.fromEntries(this.headers),
				integrity: this.integrity,
				keepalive: this.keepalive,
				method: this.method,
				mode: this.mode,
				redirect: this.redirect,
				referrer: this.referrer,
				referrerPolicy: this.referrerPolicy,
				signal: this.signal
			};
		}
		get cookies() {
			return this[o].cookies;
		}
		get nextUrl() {
			return this[o].nextUrl;
		}
		get page() {
			throw new i.RemovedPageError();
		}
		get ua() {
			throw new i.RemovedUAError();
		}
		get url() {
			return this[o].url;
		}
	};
})), Wt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "NextResponse", {
		enumerable: !0,
		get: function() {
			return l;
		}
	});
	var t = Xe(), n = zt(), r = Vt(), i = Ze(), a = Xe(), o = Symbol("internal response"), s = new Set([
		301,
		302,
		303,
		307,
		308
	]);
	function c(e, t) {
		if (e != null && e.request?.headers) {
			if (!(e.request.headers instanceof Headers)) throw Object.defineProperty(/* @__PURE__ */ Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
				value: "E119",
				enumerable: !1,
				configurable: !0
			});
			let n = [];
			for (let [r, i] of e.request.headers) t.set("x-middleware-request-" + r, i), n.push(r);
			t.set("x-middleware-override-headers", n.join(","));
		}
	}
	var l = class e extends Response {
		constructor(e, s = {}) {
			super(e, s);
			let l = this.headers, u = new a.ResponseCookies(l);
			this[o] = {
				cookies: new Proxy(u, { get(e, n, r) {
					switch (n) {
						case "delete":
						case "set": return (...r) => {
							let i = Reflect.apply(e[n], e, r), o = new Headers(l);
							return i instanceof a.ResponseCookies && l.set("x-middleware-set-cookie", i.getAll().map((e) => (0, t.stringifyCookie)(e)).join(",")), c(s, o), i;
						};
						default: return i.ReflectAdapter.get(e, n, r);
					}
				} }),
				url: s.url ? new n.NextURL(s.url, {
					headers: (0, r.toNodeOutgoingHttpHeaders)(l),
					nextConfig: s.nextConfig
				}) : void 0
			};
		}
		[Symbol.for("edge-runtime.inspect.custom")]() {
			return {
				cookies: this.cookies,
				url: this.url,
				body: this.body,
				bodyUsed: this.bodyUsed,
				headers: Object.fromEntries(this.headers),
				ok: this.ok,
				redirected: this.redirected,
				status: this.status,
				statusText: this.statusText,
				type: this.type
			};
		}
		get cookies() {
			return this[o].cookies;
		}
		static json(t, n) {
			let r = Response.json(t, n);
			return new e(r.body, r);
		}
		static redirect(t, n) {
			let i = typeof n == "number" ? n : n?.status ?? 307;
			if (!s.has(i)) throw Object.defineProperty(/* @__PURE__ */ RangeError("Failed to execute \"redirect\" on \"response\": Invalid status code"), "__NEXT_ERROR_CODE", {
				value: "E529",
				enumerable: !1,
				configurable: !0
			});
			let a = typeof n == "object" ? n : {}, o = new Headers(a?.headers);
			return o.set("Location", (0, r.validateURL)(t)), new e(null, {
				...a,
				headers: o,
				status: i
			});
		}
		static rewrite(t, n) {
			let i = new Headers(n?.headers);
			return i.set("x-middleware-rewrite", (0, r.validateURL)(t)), c(n, i), new e(null, {
				...n,
				headers: i
			});
		}
		static next(t) {
			let n = new Headers(t?.headers);
			return n.set("x-middleware-next", "1"), c(t, n), new e(null, {
				...t,
				headers: n
			});
		}
	};
})), Gt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "ImageResponse", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	function t() {
		throw Object.defineProperty(/* @__PURE__ */ Error("ImageResponse moved from \"next/server\" to \"next/og\" since Next.js 14, please import from \"next/og\" instead"), "__NEXT_ERROR_CODE", {
			value: "E183",
			enumerable: !1,
			configurable: !0
		});
	}
})), Kt = /* @__PURE__ */ s(((e, t) => {
	(() => {
		var e = { 226: function(e, t) {
			(function(n, r) {
				var i = "1.0.35", a = "", o = "?", s = "function", c = "undefined", l = "object", u = "string", d = "major", f = "model", p = "name", m = "type", h = "vendor", g = "version", _ = "architecture", v = "console", y = "mobile", b = "tablet", x = "smarttv", S = "wearable", C = "embedded", w = 350, T = "Amazon", E = "Apple", D = "ASUS", ee = "BlackBerry", O = "Browser", te = "Chrome", k = "Edge", A = "Firefox", ne = "Google", re = "Huawei", ie = "LG", ae = "Microsoft", oe = "Motorola", j = "Opera", M = "Samsung", N = "Sharp", se = "Sony", P = "Xiaomi", ce = "Zebra", F = "Facebook", I = "Chromium OS", L = "Mac OS", le = function(e, t) {
					var n = {};
					for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
					return n;
				}, ue = function(e) {
					for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
					return t;
				}, de = function(e, t) {
					return typeof e === u ? fe(t).indexOf(fe(e)) !== -1 : !1;
				}, fe = function(e) {
					return e.toLowerCase();
				}, R = function(e) {
					return typeof e === u ? e.replace(/[^\d\.]/g, a).split(".")[0] : r;
				}, z = function(e, t) {
					if (typeof e === u) return e = e.replace(/^\s\s*/, a), typeof t === c ? e : e.substring(0, w);
				}, pe = function(e, t) {
					for (var n = 0, i, a, o, c, u, d; n < t.length && !u;) {
						var f = t[n], p = t[n + 1];
						for (i = a = 0; i < f.length && !u && f[i];) if (u = f[i++].exec(e), u) for (o = 0; o < p.length; o++) d = u[++a], c = p[o], typeof c === l && c.length > 0 ? c.length === 2 ? typeof c[1] == s ? this[c[0]] = c[1].call(this, d) : this[c[0]] = c[1] : c.length === 3 ? typeof c[1] === s && !(c[1].exec && c[1].test) ? this[c[0]] = d ? c[1].call(this, d, c[2]) : r : this[c[0]] = d ? d.replace(c[1], c[2]) : r : c.length === 4 && (this[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : r) : this[c] = d || r;
						n += 2;
					}
				}, me = function(e, t) {
					for (var n in t) if (typeof t[n] === l && t[n].length > 0) {
						for (var i = 0; i < t[n].length; i++) if (de(t[n][i], e)) return n === o ? r : n;
					} else if (de(t[n], e)) return n === o ? r : n;
					return e;
				}, B = {
					"1.0": "/8",
					1.2: "/1",
					1.3: "/3",
					"2.0": "/412",
					"2.0.2": "/416",
					"2.0.3": "/417",
					"2.0.4": "/419",
					"?": "/"
				}, he = {
					ME: "4.90",
					"NT 3.11": "NT3.51",
					"NT 4.0": "NT4.0",
					2e3: "NT 5.0",
					XP: ["NT 5.1", "NT 5.2"],
					Vista: "NT 6.0",
					7: "NT 6.1",
					8: "NT 6.2",
					8.1: "NT 6.3",
					10: ["NT 6.4", "NT 10.0"],
					RT: "ARM"
				}, V = {
					browser: [
						[/\b(?:crmo|crios)\/([\w\.]+)/i],
						[g, [p, "Chrome"]],
						[/edg(?:e|ios|a)?\/([\w\.]+)/i],
						[g, [p, "Edge"]],
						[
							/(opera mini)\/([-\w\.]+)/i,
							/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
							/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
						],
						[p, g],
						[/opios[\/ ]+([\w\.]+)/i],
						[g, [p, j + " Mini"]],
						[/\bopr\/([\w\.]+)/i],
						[g, [p, j]],
						[
							/(kindle)\/([\w\.]+)/i,
							/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
							/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
							/(ba?idubrowser)[\/ ]?([\w\.]+)/i,
							/(?:ms|\()(ie) ([\w\.]+)/i,
							/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
							/(heytap|ovi)browser\/([\d\.]+)/i,
							/(weibo)__([\d\.]+)/i
						],
						[p, g],
						[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
						[g, [p, "UC" + O]],
						[/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
						[g, [p, "WeChat(Win) Desktop"]],
						[/micromessenger\/([\w\.]+)/i],
						[g, [p, "WeChat"]],
						[/konqueror\/([\w\.]+)/i],
						[g, [p, "Konqueror"]],
						[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
						[g, [p, "IE"]],
						[/ya(?:search)?browser\/([\w\.]+)/i],
						[g, [p, "Yandex"]],
						[/(avast|avg)\/([\w\.]+)/i],
						[[
							p,
							/(.+)/,
							"$1 Secure " + O
						], g],
						[/\bfocus\/([\w\.]+)/i],
						[g, [p, A + " Focus"]],
						[/\bopt\/([\w\.]+)/i],
						[g, [p, j + " Touch"]],
						[/coc_coc\w+\/([\w\.]+)/i],
						[g, [p, "Coc Coc"]],
						[/dolfin\/([\w\.]+)/i],
						[g, [p, "Dolphin"]],
						[/coast\/([\w\.]+)/i],
						[g, [p, j + " Coast"]],
						[/miuibrowser\/([\w\.]+)/i],
						[g, [p, "MIUI " + O]],
						[/fxios\/([-\w\.]+)/i],
						[g, [p, A]],
						[/\bqihu|(qi?ho?o?|360)browser/i],
						[[p, "360 " + O]],
						[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
						[[
							p,
							/(.+)/,
							"$1 " + O
						], g],
						[/(comodo_dragon)\/([\w\.]+)/i],
						[[
							p,
							/_/g,
							" "
						], g],
						[
							/(electron)\/([\w\.]+) safari/i,
							/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
							/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
						],
						[p, g],
						[
							/(metasr)[\/ ]?([\w\.]+)/i,
							/(lbbrowser)/i,
							/\[(linkedin)app\]/i
						],
						[p],
						[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
						[[p, F], g],
						[
							/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
							/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
							/safari (line)\/([\w\.]+)/i,
							/\b(line)\/([\w\.]+)\/iab/i,
							/(chromium|instagram)[\/ ]([-\w\.]+)/i
						],
						[p, g],
						[/\bgsa\/([\w\.]+) .*safari\//i],
						[g, [p, "GSA"]],
						[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
						[g, [p, "TikTok"]],
						[/headlesschrome(?:\/([\w\.]+)| )/i],
						[g, [p, te + " Headless"]],
						[/ wv\).+(chrome)\/([\w\.]+)/i],
						[[p, te + " WebView"], g],
						[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
						[g, [p, "Android " + O]],
						[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
						[p, g],
						[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
						[g, [p, "Mobile Safari"]],
						[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
						[g, p],
						[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
						[p, [
							g,
							me,
							B
						]],
						[/(webkit|khtml)\/([\w\.]+)/i],
						[p, g],
						[/(navigator|netscape\d?)\/([-\w\.]+)/i],
						[[p, "Netscape"], g],
						[/mobile vr; rv:([\w\.]+)\).+firefox/i],
						[g, [p, A + " Reality"]],
						[
							/ekiohf.+(flow)\/([\w\.]+)/i,
							/(swiftfox)/i,
							/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
							/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
							/(firefox)\/([\w\.]+)/i,
							/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
							/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
							/(links) \(([\w\.]+)/i,
							/panasonic;(viera)/i
						],
						[p, g],
						[/(cobalt)\/([\w\.]+)/i],
						[p, [
							g,
							/master.|lts./,
							""
						]]
					],
					cpu: [
						[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
						[[_, "amd64"]],
						[/(ia32(?=;))/i],
						[[_, fe]],
						[/((?:i[346]|x)86)[;\)]/i],
						[[_, "ia32"]],
						[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
						[[_, "arm64"]],
						[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
						[[_, "armhf"]],
						[/windows (ce|mobile); ppc;/i],
						[[_, "arm"]],
						[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
						[[
							_,
							/ower/,
							a,
							fe
						]],
						[/(sun4\w)[;\)]/i],
						[[_, "sparc"]],
						[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
						[[_, fe]]
					],
					device: [
						[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
						[
							f,
							[h, M],
							[m, b]
						],
						[
							/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
							/samsung[- ]([-\w]+)/i,
							/sec-(sgh\w+)/i
						],
						[
							f,
							[h, M],
							[m, y]
						],
						[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
						[
							f,
							[h, E],
							[m, y]
						],
						[
							/\((ipad);[-\w\),; ]+apple/i,
							/applecoremedia\/[\w\.]+ \((ipad)/i,
							/\b(ipad)\d\d?,\d\d?[;\]].+ios/i
						],
						[
							f,
							[h, E],
							[m, b]
						],
						[/(macintosh);/i],
						[f, [h, E]],
						[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
						[
							f,
							[h, N],
							[m, y]
						],
						[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
						[
							f,
							[h, re],
							[m, b]
						],
						[/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
						[
							f,
							[h, re],
							[m, y]
						],
						[
							/\b(poco[\w ]+)(?: bui|\))/i,
							/\b; (\w+) build\/hm\1/i,
							/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
							/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
							/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
						],
						[
							[
								f,
								/_/g,
								" "
							],
							[h, P],
							[m, y]
						],
						[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
						[
							[
								f,
								/_/g,
								" "
							],
							[h, P],
							[m, b]
						],
						[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
						[
							f,
							[h, "OPPO"],
							[m, y]
						],
						[/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
						[
							f,
							[h, "Vivo"],
							[m, y]
						],
						[/\b(rmx[12]\d{3})(?: bui|;|\))/i],
						[
							f,
							[h, "Realme"],
							[m, y]
						],
						[
							/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
							/\bmot(?:orola)?[- ](\w*)/i,
							/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
						],
						[
							f,
							[h, oe],
							[m, y]
						],
						[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
						[
							f,
							[h, oe],
							[m, b]
						],
						[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
						[
							f,
							[h, ie],
							[m, b]
						],
						[
							/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
							/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
							/\blg-?([\d\w]+) bui/i
						],
						[
							f,
							[h, ie],
							[m, y]
						],
						[/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
						[
							f,
							[h, "Lenovo"],
							[m, b]
						],
						[/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
						[
							[
								f,
								/_/g,
								" "
							],
							[h, "Nokia"],
							[m, y]
						],
						[/(pixel c)\b/i],
						[
							f,
							[h, ne],
							[m, b]
						],
						[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
						[
							f,
							[h, ne],
							[m, y]
						],
						[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
						[
							f,
							[h, se],
							[m, y]
						],
						[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
						[
							[f, "Xperia Tablet"],
							[h, se],
							[m, b]
						],
						[/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
						[
							f,
							[h, "OnePlus"],
							[m, y]
						],
						[
							/(alexa)webm/i,
							/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
							/(kf[a-z]+)( bui|\)).+silk\//i
						],
						[
							f,
							[h, T],
							[m, b]
						],
						[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
						[
							[
								f,
								/(.+)/g,
								"Fire Phone $1"
							],
							[h, T],
							[m, y]
						],
						[/(playbook);[-\w\),; ]+(rim)/i],
						[
							f,
							h,
							[m, b]
						],
						[/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
						[
							f,
							[h, ee],
							[m, y]
						],
						[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
						[
							f,
							[h, D],
							[m, b]
						],
						[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
						[
							f,
							[h, D],
							[m, y]
						],
						[/(nexus 9)/i],
						[
							f,
							[h, "HTC"],
							[m, b]
						],
						[
							/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
							/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
							/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
						],
						[
							h,
							[
								f,
								/_/g,
								" "
							],
							[m, y]
						],
						[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
						[
							f,
							[h, "Acer"],
							[m, b]
						],
						[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
						[
							f,
							[h, "Meizu"],
							[m, y]
						],
						[
							/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
							/(hp) ([\w ]+\w)/i,
							/(asus)-?(\w+)/i,
							/(microsoft); (lumia[\w ]+)/i,
							/(lenovo)[-_ ]?([-\w]+)/i,
							/(jolla)/i,
							/(oppo) ?([\w ]+) bui/i
						],
						[
							h,
							f,
							[m, y]
						],
						[
							/(kobo)\s(ereader|touch)/i,
							/(archos) (gamepad2?)/i,
							/(hp).+(touchpad(?!.+tablet)|tablet)/i,
							/(kindle)\/([\w\.]+)/i,
							/(nook)[\w ]+build\/(\w+)/i,
							/(dell) (strea[kpr\d ]*[\dko])/i,
							/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
							/(trinity)[- ]*(t\d{3}) bui/i,
							/(gigaset)[- ]+(q\w{1,9}) bui/i,
							/(vodafone) ([\w ]+)(?:\)| bui)/i
						],
						[
							h,
							f,
							[m, b]
						],
						[/(surface duo)/i],
						[
							f,
							[h, ae],
							[m, b]
						],
						[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
						[
							f,
							[h, "Fairphone"],
							[m, y]
						],
						[/(u304aa)/i],
						[
							f,
							[h, "AT&T"],
							[m, y]
						],
						[/\bsie-(\w*)/i],
						[
							f,
							[h, "Siemens"],
							[m, y]
						],
						[/\b(rct\w+) b/i],
						[
							f,
							[h, "RCA"],
							[m, b]
						],
						[/\b(venue[\d ]{2,7}) b/i],
						[
							f,
							[h, "Dell"],
							[m, b]
						],
						[/\b(q(?:mv|ta)\w+) b/i],
						[
							f,
							[h, "Verizon"],
							[m, b]
						],
						[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
						[
							f,
							[h, "Barnes & Noble"],
							[m, b]
						],
						[/\b(tm\d{3}\w+) b/i],
						[
							f,
							[h, "NuVision"],
							[m, b]
						],
						[/\b(k88) b/i],
						[
							f,
							[h, "ZTE"],
							[m, b]
						],
						[/\b(nx\d{3}j) b/i],
						[
							f,
							[h, "ZTE"],
							[m, y]
						],
						[/\b(gen\d{3}) b.+49h/i],
						[
							f,
							[h, "Swiss"],
							[m, y]
						],
						[/\b(zur\d{3}) b/i],
						[
							f,
							[h, "Swiss"],
							[m, b]
						],
						[/\b((zeki)?tb.*\b) b/i],
						[
							f,
							[h, "Zeki"],
							[m, b]
						],
						[/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
						[
							[h, "Dragon Touch"],
							f,
							[m, b]
						],
						[/\b(ns-?\w{0,9}) b/i],
						[
							f,
							[h, "Insignia"],
							[m, b]
						],
						[/\b((nxa|next)-?\w{0,9}) b/i],
						[
							f,
							[h, "NextBook"],
							[m, b]
						],
						[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
						[
							[h, "Voice"],
							f,
							[m, y]
						],
						[/\b(lvtel\-)?(v1[12]) b/i],
						[
							[h, "LvTel"],
							f,
							[m, y]
						],
						[/\b(ph-1) /i],
						[
							f,
							[h, "Essential"],
							[m, y]
						],
						[/\b(v(100md|700na|7011|917g).*\b) b/i],
						[
							f,
							[h, "Envizen"],
							[m, b]
						],
						[/\b(trio[-\w\. ]+) b/i],
						[
							f,
							[h, "MachSpeed"],
							[m, b]
						],
						[/\btu_(1491) b/i],
						[
							f,
							[h, "Rotor"],
							[m, b]
						],
						[/(shield[\w ]+) b/i],
						[
							f,
							[h, "Nvidia"],
							[m, b]
						],
						[/(sprint) (\w+)/i],
						[
							h,
							f,
							[m, y]
						],
						[/(kin\.[onetw]{3})/i],
						[
							[
								f,
								/\./g,
								" "
							],
							[h, ae],
							[m, y]
						],
						[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
						[
							f,
							[h, ce],
							[m, b]
						],
						[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
						[
							f,
							[h, ce],
							[m, y]
						],
						[/smart-tv.+(samsung)/i],
						[h, [m, x]],
						[/hbbtv.+maple;(\d+)/i],
						[
							[
								f,
								/^/,
								"SmartTV"
							],
							[h, M],
							[m, x]
						],
						[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
						[[h, ie], [m, x]],
						[/(apple) ?tv/i],
						[
							h,
							[f, E + " TV"],
							[m, x]
						],
						[/crkey/i],
						[
							[f, te + "cast"],
							[h, ne],
							[m, x]
						],
						[/droid.+aft(\w)( bui|\))/i],
						[
							f,
							[h, T],
							[m, x]
						],
						[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
						[
							f,
							[h, N],
							[m, x]
						],
						[/(bravia[\w ]+)( bui|\))/i],
						[
							f,
							[h, se],
							[m, x]
						],
						[/(mitv-\w{5}) bui/i],
						[
							f,
							[h, P],
							[m, x]
						],
						[/Hbbtv.*(technisat) (.*);/i],
						[
							h,
							f,
							[m, x]
						],
						[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
						[
							[h, z],
							[f, z],
							[m, x]
						],
						[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
						[[m, x]],
						[/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
						[
							h,
							f,
							[m, v]
						],
						[/droid.+; (shield) bui/i],
						[
							f,
							[h, "Nvidia"],
							[m, v]
						],
						[/(playstation [345portablevi]+)/i],
						[
							f,
							[h, se],
							[m, v]
						],
						[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
						[
							f,
							[h, ae],
							[m, v]
						],
						[/((pebble))app/i],
						[
							h,
							f,
							[m, S]
						],
						[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
						[
							f,
							[h, E],
							[m, S]
						],
						[/droid.+; (glass) \d/i],
						[
							f,
							[h, ne],
							[m, S]
						],
						[/droid.+; (wt63?0{2,3})\)/i],
						[
							f,
							[h, ce],
							[m, S]
						],
						[/(quest( 2| pro)?)/i],
						[
							f,
							[h, F],
							[m, S]
						],
						[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
						[h, [m, C]],
						[/(aeobc)\b/i],
						[
							f,
							[h, T],
							[m, C]
						],
						[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
						[f, [m, y]],
						[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
						[f, [m, b]],
						[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
						[[m, b]],
						[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
						[[m, y]],
						[/(android[-\w\. ]{0,9});.+buil/i],
						[f, [h, "Generic"]]
					],
					engine: [
						[/windows.+ edge\/([\w\.]+)/i],
						[g, [p, k + "HTML"]],
						[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
						[g, [p, "Blink"]],
						[
							/(presto)\/([\w\.]+)/i,
							/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
							/ekioh(flow)\/([\w\.]+)/i,
							/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
							/(icab)[\/ ]([23]\.[\d\.]+)/i,
							/\b(libweb)/i
						],
						[p, g],
						[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
						[g, p]
					],
					os: [
						[/microsoft (windows) (vista|xp)/i],
						[p, g],
						[
							/(windows) nt 6\.2; (arm)/i,
							/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
							/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
						],
						[p, [
							g,
							me,
							he
						]],
						[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
						[[p, "Windows"], [
							g,
							me,
							he
						]],
						[
							/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
							/ios;fbsv\/([\d\.]+)/i,
							/cfnetwork\/.+darwin/i
						],
						[[
							g,
							/_/g,
							"."
						], [p, "iOS"]],
						[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
						[[p, L], [
							g,
							/_/g,
							"."
						]],
						[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
						[g, p],
						[
							/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
							/(blackberry)\w*\/([\w\.]*)/i,
							/(tizen|kaios)[\/ ]([\w\.]+)/i,
							/\((series40);/i
						],
						[p, g],
						[/\(bb(10);/i],
						[g, [p, ee]],
						[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
						[g, [p, "Symbian"]],
						[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
						[g, [p, A + " OS"]],
						[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
						[g, [p, "webOS"]],
						[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
						[g, [p, "watchOS"]],
						[/crkey\/([\d\.]+)/i],
						[g, [p, te + "cast"]],
						[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
						[[p, I], g],
						[
							/panasonic;(viera)/i,
							/(netrange)mmh/i,
							/(nettv)\/(\d+\.[\w\.]+)/i,
							/(nintendo|playstation) ([wids345portablevuch]+)/i,
							/(xbox); +xbox ([^\);]+)/i,
							/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
							/(mint)[\/\(\) ]?(\w*)/i,
							/(mageia|vectorlinux)[; ]/i,
							/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
							/(hurd|linux) ?([\w\.]*)/i,
							/(gnu) ?([\w\.]*)/i,
							/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
							/(haiku) (\w+)/i
						],
						[p, g],
						[/(sunos) ?([\w\.\d]*)/i],
						[[p, "Solaris"], g],
						[
							/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
							/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
							/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
							/(unix) ?([\w\.]*)/i
						],
						[p, g]
					]
				}, H = function(e, t) {
					if (typeof e === l && (t = e, e = r), !(this instanceof H)) return new H(e, t).getResult();
					var i = typeof n !== c && n.navigator ? n.navigator : r, o = e || (i && i.userAgent ? i.userAgent : a), v = i && i.userAgentData ? i.userAgentData : r, x = t ? le(V, t) : V, S = i && i.userAgent == o;
					return this.getBrowser = function() {
						var e = {};
						return e[p] = r, e[g] = r, pe.call(e, o, x.browser), e[d] = R(e[g]), S && i && i.brave && typeof i.brave.isBrave == s && (e[p] = "Brave"), e;
					}, this.getCPU = function() {
						var e = {};
						return e[_] = r, pe.call(e, o, x.cpu), e;
					}, this.getDevice = function() {
						var e = {};
						return e[h] = r, e[f] = r, e[m] = r, pe.call(e, o, x.device), S && !e[m] && v && v.mobile && (e[m] = y), S && e[f] == "Macintosh" && i && typeof i.standalone !== c && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[f] = "iPad", e[m] = b), e;
					}, this.getEngine = function() {
						var e = {};
						return e[p] = r, e[g] = r, pe.call(e, o, x.engine), e;
					}, this.getOS = function() {
						var e = {};
						return e[p] = r, e[g] = r, pe.call(e, o, x.os), S && !e[p] && v && v.platform != "Unknown" && (e[p] = v.platform.replace(/chrome os/i, I).replace(/macos/i, L)), e;
					}, this.getResult = function() {
						return {
							ua: this.getUA(),
							browser: this.getBrowser(),
							engine: this.getEngine(),
							os: this.getOS(),
							device: this.getDevice(),
							cpu: this.getCPU()
						};
					}, this.getUA = function() {
						return o;
					}, this.setUA = function(e) {
						return o = typeof e === u && e.length > w ? z(e, w) : e, this;
					}, this.setUA(o), this;
				};
				H.VERSION = i, H.BROWSER = ue([
					p,
					g,
					d
				]), H.CPU = ue([_]), H.DEVICE = ue([
					f,
					h,
					m,
					v,
					y,
					x,
					b,
					S,
					C
				]), H.ENGINE = H.OS = ue([p, g]), typeof t === c ? typeof define === s && define.amd ? define((function() {
					return H;
				})) : typeof n !== c && (n.UAParser = H) : (c !== "object" && e.exports && (t = e.exports = H), t.UAParser = H);
				var ge = typeof n !== c && (n.jQuery || n.Zepto);
				if (ge && !ge.ua) {
					var U = new H();
					ge.ua = U.getResult(), ge.ua.get = function() {
						return U.getUA();
					}, ge.ua.set = function(e) {
						U.setUA(e);
						var t = U.getResult();
						for (var n in t) ge.ua[n] = t[n];
					};
				}
			})(typeof window == "object" ? window : this);
		} }, n = {};
		function r(t) {
			var i = n[t];
			if (i !== void 0) return i.exports;
			var a = n[t] = { exports: {} }, o = !0;
			try {
				e[t].call(a.exports, a, a.exports, r), o = !1;
			} finally {
				o && delete n[t];
			}
			return a.exports;
		}
		r !== void 0 && (r.ab = __dirname + "/"), t.exports = r(226);
	})();
})), qt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	t(e, {
		isBot: function() {
			return i;
		},
		userAgent: function() {
			return o;
		},
		userAgentFromString: function() {
			return a;
		}
	});
	var n = /* @__PURE__ */ r(Kt());
	function r(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function i(e) {
		return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver|GPTBot/i.test(e);
	}
	function a(e) {
		return {
			...(0, n.default)(e),
			isBot: e === void 0 ? !1 : i(e)
		};
	}
	function o({ headers: e }) {
		return a(e.get("user-agent") || void 0);
	}
})), Jt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "URLPattern", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = typeof URLPattern > "u" ? void 0 : URLPattern;
})), Yt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "after", {
		enumerable: !0,
		get: function() {
			return n;
		}
	});
	var t = et();
	function n(e) {
		let n = t.workAsyncStorage.getStore();
		if (!n) throw Object.defineProperty(/* @__PURE__ */ Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
			value: "E468",
			enumerable: !1,
			configurable: !0
		});
		let { afterContext: r } = n;
		return r.after(e);
	}
})), Xt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), t(Yt(), e);
	function t(e, t) {
		return Object.keys(e).forEach(function(n) {
			n !== "default" && !Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: function() {
					return e[n];
				}
			});
		}), e;
	}
})), Zt = /* @__PURE__ */ s(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "connection", {
		enumerable: !0,
		get: function() {
			return l;
		}
	});
	var t = et(), n = ct(), r = gt(), i = ut(), a = dt(), o = bt(), s = st(), c = at();
	function l() {
		let e = t.workAsyncStorage.getStore(), u = n.workUnitAsyncStorage.getStore();
		if (e) {
			if (u && u.phase === "after" && !(0, o.isRequestAPICallableInsideAfter)()) throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`connection()\` inside \`after()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
				value: "E827",
				enumerable: !1,
				configurable: !0
			});
			if (e.forceStatic) return Promise.resolve(void 0);
			if (e.dynamicShouldError) throw Object.defineProperty(new i.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
				value: "E847",
				enumerable: !1,
				configurable: !0
			});
			if (u) switch (u.type) {
				case "cache": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E841",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(t, l), e.invalidDynamicUsageError ??= t, t;
				}
				case "private-cache": {
					let t = Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
						value: "E837",
						enumerable: !1,
						configurable: !0
					});
					throw Error.captureStackTrace(t, l), e.invalidDynamicUsageError ??= t, t;
				}
				case "unstable-cache": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
					value: "E840",
					enumerable: !1,
					configurable: !0
				});
				case "generate-static-params": throw Object.defineProperty(/* @__PURE__ */ Error(`Route ${e.route} used \`connection()\` inside \`generateStaticParams\`. This is not supported because \`generateStaticParams\` runs at build time without an HTTP request. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
					value: "E1125",
					enumerable: !1,
					configurable: !0
				});
				case "prerender":
				case "prerender-client":
				case "prerender-runtime": return (0, a.makeHangingPromise)(u.renderSignal, e.route, "`connection()`");
				case "validation-client": {
					let e = "`connection`";
					throw Object.defineProperty(new c.InvariantError(`${e} must not be used within a Client Component. Next.js should be preventing ${e} from being included in Client Components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
						value: "E1063",
						enumerable: !1,
						configurable: !0
					});
				}
				case "prerender-ppr": return (0, r.postponeWithTracking)(e.route, "connection", u.dynamicTracking);
				case "prerender-legacy": return (0, r.throwToInterruptStaticGeneration)("connection", e, u);
				case "request": return (0, r.trackDynamicDataInDynamicRender)(u), process.env.NODE_ENV === "development" ? u.asyncApiPromises ? u.asyncApiPromises.connection : (0, a.makeDevtoolsIOAwarePromise)(void 0, u, s.RenderStage.Dynamic) : u.asyncApiPromises ? u.asyncApiPromises.connection : Promise.resolve(void 0);
				default:
			}
		}
		(0, n.throwForMissingRequestStore)("connection");
	}
})), Qt = (/* @__PURE__ */ s(((e, t) => {
	var n = {
		NextRequest: Ut().NextRequest,
		NextResponse: Wt().NextResponse,
		ImageResponse: Gt().ImageResponse,
		userAgentFromString: qt().userAgentFromString,
		userAgent: qt().userAgent,
		URLPattern: Jt().URLPattern,
		after: Xt().after,
		connection: Zt().connection
	};
	t.exports = n, e.NextRequest = n.NextRequest, e.NextResponse = n.NextResponse, e.ImageResponse = n.ImageResponse, e.userAgentFromString = n.userAgentFromString, e.userAgent = n.userAgent, e.URLPattern = n.URLPattern, e.after = n.after, e.connection = n.connection;
})))(), Y = /* @__PURE__ */ function(e) {
	return e.PRIVATE = "PRIVATE", e.ACTIVE = "ACTIVE", e.SUSPENDED = "SUSPENDED", e.PENDING = "PENDING", e.EXPIRED = "EXPIRED", e.MAINTENANCE = "MAINTENANCE", e.COMING_SOON = "COMING_SOON", e;
}({}), X = /* @__PURE__ */ function(e) {
	return e.CREATE = "CREATE", e.REMOVE = "REMOVE", e.SUSPEND = "SUSPEND", e.ACTIVATE = "ACTIVATE", e.UPDATE = "UPDATE", e.EXPIRE = "EXPIRE", e.MAINTENANCE_START = "MAINTENANCE_START", e.MAINTENANCE_END = "MAINTENANCE_END", e.AUTO_ACTIVATE = "AUTO_ACTIVATE", e.AUTO_EXPIRE = "AUTO_EXPIRE", e.SET_COMING_SOON = "SET_COMING_SOON", e;
}({}), $t = /* @__PURE__ */ function(e) {
	return e.LIST = "LIST", e.UNLIST = "UNLIST", e.SUSPEND = "SUSPEND", e.MAINTENANCE_START = "MAINTENANCE_START", e.MAINTENANCE_END = "MAINTENANCE_END", e;
}({}), en = /* @__PURE__ */ function(e) {
	return e.UNIT_NOT_FOUND = "UNIT_NOT_FOUND", e.UNIT_HAS_ACTIVE_LEASE = "UNIT_HAS_ACTIVE_LEASE", e.UNIT_ALREADY_LISTED = "UNIT_ALREADY_LISTED", e.INVALID_UNIT_DATA = "INVALID_UNIT_DATA", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e;
}({}), tn = /* @__PURE__ */ function(e) {
	return e.LISTING_NOT_FOUND = "LISTING_NOT_FOUND", e.UNIT_NOT_FOUND = "UNIT_NOT_FOUND", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.CLEANUP_FAILED = "CLEANUP_FAILED", e;
}({}), nn = /* @__PURE__ */ function(e) {
	return e.LISTING_NOT_FOUND = "LISTING_NOT_FOUND", e.INVALID_TRANSITION = "INVALID_TRANSITION", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.VALIDATION_FAILED = "VALIDATION_FAILED", e;
}({}), rn = /* @__PURE__ */ function(e) {
	return e.INVALID_INPUT = "INVALID_INPUT", e.PERMISSION_DENIED = "PERMISSION_DENIED", e.PARTIAL_FAILURE = "PARTIAL_FAILURE", e.TRANSACTION_FAILED = "TRANSACTION_FAILED", e;
}({}), an = {
	[Y.PRIVATE]: [
		Y.ACTIVE,
		Y.PENDING,
		Y.COMING_SOON
	],
	[Y.PENDING]: [
		Y.ACTIVE,
		Y.PRIVATE,
		Y.COMING_SOON
	],
	[Y.COMING_SOON]: [
		Y.ACTIVE,
		Y.PRIVATE,
		Y.SUSPENDED
	],
	[Y.ACTIVE]: [
		Y.PRIVATE,
		Y.SUSPENDED,
		Y.EXPIRED,
		Y.MAINTENANCE
	],
	[Y.SUSPENDED]: [
		Y.ACTIVE,
		Y.PRIVATE,
		Y.MAINTENANCE
	],
	[Y.EXPIRED]: [
		Y.ACTIVE,
		Y.PRIVATE,
		Y.COMING_SOON
	],
	[Y.MAINTENANCE]: [
		Y.ACTIVE,
		Y.PRIVATE,
		Y.SUSPENDED
	]
};
function on(e, t) {
	return an[e].includes(t);
}
//#endregion
//#region src/lib/application-control-service.ts
var sn = class {
	config;
	constructor(e) {
		this.config = {
			requireActiveListing: !0,
			allowedStatuses: [Y.ACTIVE],
			gracePeriodHours: 0,
			...e
		};
	}
	async checkApplicationEligibility(e) {
		try {
			let t = await g.unit.findUnique({
				where: { id: e },
				include: {
					listing: !0,
					leases: { where: { leaseStatus: { in: ["ACTIVE", "PENDING_APPROVAL"] } } }
				}
			});
			if (!t) return {
				isEligible: !1,
				reason: "Unit not found",
				unitId: e
			};
			if (t.leases && t.leases.length > 0) return {
				isEligible: !1,
				reason: "Unit has an active lease and is not available for applications",
				unitId: e
			};
			if (!this.config.requireActiveListing) return {
				isEligible: !0,
				unitId: e
			};
			if (!t.listing) return this.config.gracePeriodHours && this.config.gracePeriodHours > 0 && await this.checkRecentListing(e) ? {
				isEligible: !0,
				reason: "Unit recently delisted but still within grace period",
				listingStatus: Y.PRIVATE,
				unitId: e
			} : {
				isEligible: !1,
				reason: "Unit is not currently listed on the marketplace",
				listingStatus: Y.PRIVATE,
				unitId: e
			};
			let n = Y.ACTIVE, r = /* @__PURE__ */ new Date();
			return t.listing.expirationDate && new Date(t.listing.expirationDate) < r && (n = Y.EXPIRED), n !== Y.EXPIRED && t.listing.availabilityDate && new Date(t.listing.availabilityDate) > r && (n = Y.COMING_SOON), this.config.allowedStatuses.includes(n) ? {
				isEligible: !0,
				listingStatus: n,
				unitId: e
			} : n === Y.COMING_SOON ? {
				isEligible: !1,
				reason: "Coming Soon",
				listingStatus: n,
				unitId: e
			} : {
				isEligible: !1,
				reason: `Unit listing status (${n}) does not allow applications`,
				listingStatus: n,
				unitId: e
			};
		} catch (t) {
			return console.error("Error checking application eligibility:", t), {
				isEligible: !1,
				reason: "Error checking unit eligibility",
				unitId: e
			};
		}
	}
	async checkMultipleUnitsEligibility(e) {
		return await Promise.all(e.map((e) => this.checkApplicationEligibility(e)));
	}
	async getEligibleUnits(e) {
		try {
			let t = {
				listing: { isNot: null },
				leases: { none: { leaseStatus: { in: ["ACTIVE", "PENDING_APPROVAL"] } } }
			};
			return e && (t.propertyId = e), (await g.unit.findMany({
				where: t,
				select: {
					id: !0,
					unitNumber: !0,
					listing: { select: {
						id: !0,
						createdAt: !0
					} }
				}
			})).map((e) => ({
				unitId: e.id,
				unitNumber: e.unitNumber,
				listingStatus: Y.ACTIVE
			}));
		} catch (e) {
			return console.error("Error getting eligible units:", e), [];
		}
	}
	async validateApplicationDataIntegrity(e) {
		try {
			let t = await g.tenantApplication.findUnique({
				where: { id: e },
				include: {
					unit: { include: {
						listing: !0,
						property: !0
					} },
					property: !0
				}
			});
			if (!t) return {
				isValid: !1,
				issues: ["Application not found"]
			};
			let n = [];
			return t.unit ? (this.config.requireActiveListing && !t.unit.listing && n.push("Application unit no longer has an active listing"), t.propertyId !== t.unit.propertyId && n.push("Application property ID does not match unit property ID")) : n.push("Application has no associated unit"), t.property || n.push("Application has no associated property"), {
				isValid: n.length === 0,
				issues: n
			};
		} catch (e) {
			return console.error("Error validating application data integrity:", e), {
				isValid: !1,
				issues: ["Error validating application data"]
			};
		}
	}
	async handleListingStatusChange(e, t, n) {
		try {
			console.log("Application Control - Listing Status Change:", {
				unitId: e,
				previousStatus: n,
				newStatus: t,
				timestamp: /* @__PURE__ */ new Date()
			}), n === Y.ACTIVE && t !== Y.ACTIVE && await this.handleApplicationsForInactiveListing(e, t), t === Y.ACTIVE && n !== Y.ACTIVE && await this.enableApplicationsForUnit(e);
		} catch (e) {
			console.error("Error handling listing status change:", e);
		}
	}
	async cleanupOrphanedApplications() {
		try {
			let e = [], t = 0;
			if (this.config.requireActiveListing) {
				let n = await g.tenantApplication.findMany({
					where: {
						unit: { listing: null },
						status: "PENDING"
					},
					include: { unit: !0 }
				});
				for (let r of n) try {
					if (this.config.gracePeriodHours && this.config.gracePeriodHours > 0 && await this.checkRecentListing(r.unitId || "")) continue;
					await g.tenantApplication.update({
						where: { id: r.id },
						data: { status: "REJECTED" }
					}), t++;
				} catch (t) {
					e.push(`Failed to clean up application ${r.id}: ${t instanceof Error ? t.message : "Unknown error"}`);
				}
			}
			return {
				cleaned: t,
				errors: e
			};
		} catch (e) {
			return console.error("Error cleaning up orphaned applications:", e), {
				cleaned: 0,
				errors: [`Cleanup failed: ${e instanceof Error ? e.message : "Unknown error"}`]
			};
		}
	}
	async handleApplicationStateOnListingChange(e, t, n, r) {
		try {
			let i = [], a = await g.tenantApplication.findMany({ where: {
				unitId: e,
				status: "PENDING"
			} });
			for (let o of a) {
				let a = "MAINTAINED", s = r || "Listing status changed";
				switch (t) {
					case Y.PRIVATE:
						await g.tenantApplication.update({
							where: { id: o.id },
							data: { status: "REJECTED" }
						}), a = "REJECTED", s = "Unit removed from marketplace";
						break;
					case Y.SUSPENDED:
						a = "NOTIFIED", s = "Unit temporarily suspended";
						break;
					case Y.MAINTENANCE:
						a = "NOTIFIED", s = "Unit temporarily unavailable for maintenance";
						break;
					case Y.EXPIRED:
						await g.tenantApplication.update({
							where: { id: o.id },
							data: { status: "REJECTED" }
						}), a = "REJECTED", s = "Listing has expired";
						break;
					case Y.ACTIVE:
						a = "MAINTAINED", s = "Unit is now available for applications";
						break;
					default: console.warn(`Unknown listing status: ${t} for unit ${e}`), a = "MAINTAINED", s = "Status change processed";
				}
				i.push({
					applicationId: o.id,
					action: a,
					reason: s
				}), console.log(`Application ${o.id} ${a.toLowerCase()} due to listing status change: ${n} -> ${t}`);
			}
			return {
				applicationsAffected: a.length,
				actions: i
			};
		} catch (e) {
			return console.error("Error handling application state on listing change:", e), {
				applicationsAffected: 0,
				actions: []
			};
		}
	}
	async validateAndFixApplicationAssociations() {
		try {
			let e = [], t = 0, n = 0, r = await g.tenantApplication.findMany({ include: {
				unit: { include: { property: !0 } },
				property: !0
			} });
			for (let i of r) {
				t++;
				try {
					let t = !1, r = {};
					i.unit && i.unit.property && i.propertyId !== i.unit.property.id && (r.propertyId = i.unit.property.id, t = !0), i.unit && !i.property && i.unit.property && (r.propertyId = i.unit.property.id, t = !0), i.property && i.unit && i.unit.propertyId !== i.property.id && e.push(`Application ${i.id} has inconsistent unit-property relationship`), t && (await g.tenantApplication.update({
						where: { id: i.id },
						data: r
					}), n++);
				} catch (t) {
					e.push(`Failed to validate application ${i.id}: ${t instanceof Error ? t.message : "Unknown error"}`);
				}
			}
			return {
				checked: t,
				fixed: n,
				errors: e
			};
		} catch (e) {
			return console.error("Error validating application associations:", e), {
				checked: 0,
				fixed: 0,
				errors: [`Validation failed: ${e instanceof Error ? e.message : "Unknown error"}`]
			};
		}
	}
	async getApplicationIntegrityReport(e) {
		try {
			let t = {};
			e && (t.propertyId = e);
			let n = await g.tenantApplication.findMany({
				where: t,
				include: {
					unit: { include: {
						listing: !0,
						property: !0
					} },
					property: !0
				}
			}), r = [], i = 0, a = 0, o = 0;
			for (let e of n) {
				let t = !0;
				e.unit || (r.push({
					applicationId: e.id,
					type: "MISSING_UNIT",
					description: "Application has no associated unit",
					severity: "HIGH"
				}), t = !1), e.property || (r.push({
					applicationId: e.id,
					type: "MISSING_PROPERTY",
					description: "Application has no associated property",
					severity: "HIGH"
				}), t = !1), e.unit && !e.unit.listing && this.config.requireActiveListing && (r.push({
					applicationId: e.id,
					type: "ORPHANED",
					description: "Application for unit without active listing",
					severity: "MEDIUM"
				}), a++, t = !1), e.unit && e.property && e.unit.propertyId !== e.property.id && (r.push({
					applicationId: e.id,
					type: "INCONSISTENT",
					description: "Unit and property references are inconsistent",
					severity: "HIGH"
				}), o++, t = !1), t && i++;
			}
			return {
				summary: {
					totalApplications: n.length,
					validApplications: i,
					invalidApplications: n.length - i,
					orphanedApplications: a,
					inconsistentApplications: o
				},
				issues: r
			};
		} catch (e) {
			return console.error("Error generating application integrity report:", e), {
				summary: {
					totalApplications: 0,
					validApplications: 0,
					invalidApplications: 0,
					orphanedApplications: 0,
					inconsistentApplications: 0
				},
				issues: []
			};
		}
	}
	async checkRecentListing(e) {
		if (!this.config.gracePeriodHours || this.config.gracePeriodHours <= 0) return !1;
		try {
			return !1;
		} catch (e) {
			return console.error("Error checking recent listing:", e), !1;
		}
	}
	async handleApplicationsForInactiveListing(e, t) {
		try {
			let n = await g.tenantApplication.findMany({ where: {
				unitId: e,
				status: "PENDING"
			} });
			for (let r of n) t === Y.MAINTENANCE ? console.log(`Unit ${e} in maintenance - application ${r.id} remains pending`) : t === Y.PRIVATE && (await g.tenantApplication.update({
				where: { id: r.id },
				data: { status: "REJECTED" }
			}), console.log(`Unit ${e} made private - application ${r.id} rejected`));
		} catch (e) {
			console.error("Error handling applications for inactive listing:", e);
		}
	}
	async enableApplicationsForUnit(e) {
		try {
			console.log(`Applications enabled for unit ${e} - listing is now active`);
		} catch (e) {
			console.error("Error enabling applications for unit:", e);
		}
	}
}, cn = new sn();
function ln(e) {
	return new sn(e);
}
//#endregion
//#region src/lib/application-listing-integration.ts
var un = class {
	async handleListingStatusChange(e) {
		try {
			console.log("Processing listing change event:", {
				unitId: e.unitId,
				action: e.action,
				previousStatus: e.previousStatus,
				newStatus: e.newStatus,
				timestamp: e.timestamp
			}), await cn.handleListingStatusChange(e.unitId, e.newStatus, e.previousStatus);
			let t = await cn.handleApplicationStateOnListingChange(e.unitId, e.newStatus, e.previousStatus, e.reason);
			console.log(`Listing change processed: ${t.applicationsAffected} applications affected`), t.applicationsAffected > 0 && await this.notifyAffectedApplicants(e.unitId, e.newStatus, t.actions), await this.createIntegrationAuditEntry(e, t);
		} catch (e) {
			console.error("Error handling listing status change:", e);
		}
	}
	async handleListingCreated(e) {
		try {
			console.log(`Listing created for unit ${e.unitId} - applications now enabled`), await cn.handleListingStatusChange(e.unitId, Y.ACTIVE), await this.processWaitingApplications(e.unitId);
		} catch (e) {
			console.error("Error handling listing creation:", e);
		}
	}
	async handleListingRemoved(e) {
		try {
			console.log(`Listing removed for unit ${e.unitId} - applications now disabled`);
			let t = await cn.handleApplicationStateOnListingChange(e.unitId, Y.PRIVATE, e.previousStatus, e.reason || "Listing removed from marketplace");
			t.applicationsAffected > 0 && await this.notifyAffectedApplicants(e.unitId, Y.PRIVATE, t.actions);
		} catch (e) {
			console.error("Error handling listing removal:", e);
		}
	}
	async handleMaintenanceMode(e) {
		try {
			let t = e.action === X.MAINTENANCE_START, n = t ? Y.MAINTENANCE : Y.ACTIVE;
			console.log(`Maintenance mode ${t ? "started" : "ended"} for unit ${e.unitId}`);
			let r = await cn.handleApplicationStateOnListingChange(e.unitId, n, e.previousStatus, e.reason || `Maintenance mode ${t ? "started" : "ended"}`);
			r.applicationsAffected > 0 && await this.notifyAffectedApplicants(e.unitId, n, r.actions);
		} catch (e) {
			console.error("Error handling maintenance mode:", e);
		}
	}
	async validateSystemIntegrity() {
		try {
			console.log("Starting system integrity validation...");
			let e = [], t = 0, n = 0, r = 0, i = 0, a = await cn.getApplicationIntegrityReport();
			n = a.summary.totalApplications, r = a.summary.invalidApplications;
			let o = await cn.validateAndFixApplicationAssociations();
			i = o.fixed, e.push(...o.errors);
			let s = await cn.cleanupOrphanedApplications();
			return i += s.cleaned, e.push(...s.errors), t = (await g.unit.findMany({ select: { id: !0 } })).length, console.log("System integrity validation completed:", {
				unitsChecked: t,
				applicationsChecked: n,
				issuesFound: r,
				issuesFixed: i,
				errorCount: e.length
			}), {
				unitsChecked: t,
				applicationsChecked: n,
				issuesFound: r,
				issuesFixed: i,
				errors: e
			};
		} catch (e) {
			return console.error("Error validating system integrity:", e), {
				unitsChecked: 0,
				applicationsChecked: 0,
				issuesFound: 0,
				issuesFixed: 0,
				errors: [e instanceof Error ? e.message : "Unknown error"]
			};
		}
	}
	async processWaitingApplications(e) {
		try {
			console.log(`Processing waiting applications for unit ${e}`);
		} catch (e) {
			console.error("Error processing waiting applications:", e);
		}
	}
	async notifyAffectedApplicants(e, t, n) {
		try {
			let t = await g.unit.findUnique({
				where: { id: e },
				include: { property: { select: {
					name: !0,
					city: !0
				} } }
			});
			if (!t) {
				console.warn(`Unit ${e} not found for notifications`);
				return;
			}
			let r = n.filter((e) => e.action === "NOTIFIED" || e.action === "REJECTED").map((e) => e.applicationId);
			if (r.length === 0) return;
			let i = await g.tenantApplication.findMany({
				where: { id: { in: r } },
				select: {
					id: !0,
					fullName: !0,
					email: !0
				}
			});
			for (let e of i) {
				let r = n.find((t) => t.applicationId === e.id);
				r && console.log(`Notification: ${e.email} - ${r.reason} for unit ${t.unitNumber}`);
			}
		} catch (e) {
			console.error("Error notifying affected applicants:", e);
		}
	}
	async createIntegrationAuditEntry(e, t) {
		try {
			console.log("Integration audit entry:", {
				unitId: e.unitId,
				listingAction: e.action,
				applicationsAffected: t.applicationsAffected,
				timestamp: e.timestamp
			});
		} catch (e) {
			console.error("Error creating integration audit entry:", e);
		}
	}
}, dn = new un();
function fn(e, t, n, r, i) {
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
//#endregion
//#region src/lib/audit-service.ts
var pn = class {
	async createAuditEntry(e, t, n) {
		let r = t || g, i = n?.includeRelations ?? !t, a = await r.listingAuditEntry.create({
			data: {
				unitId: e.unitId,
				listingId: e.listingId,
				action: e.action,
				previousStatus: e.previousStatus,
				newStatus: e.newStatus,
				userId: e.userId,
				reason: e.reason,
				metadata: e.metadata,
				timestamp: /* @__PURE__ */ new Date()
			},
			...i ? { include: {
				user: { select: {
					id: !0,
					firstName: !0,
					lastName: !0,
					email: !0
				} },
				unit: { select: {
					id: !0,
					unitNumber: !0,
					property: { select: {
						id: !0,
						name: !0,
						address: !0
					} }
				} },
				listing: { select: {
					id: !0,
					title: !0,
					price: !0
				} }
			} } : {}
		});
		return this.mapToAuditEntry(a);
	}
	async getAuditTrail(e = {}) {
		let { unitId: t, listingId: n, userId: r, action: i, status: a, dateFrom: o, dateTo: s, limit: c = 50, offset: l = 0 } = e, u = {};
		t && (u.unitId = t), n && (u.listingId = n), r && (u.userId = r), i && (u.action = i), a && (u.newStatus = a), (o || s) && (u.timestamp = {}, o && (u.timestamp.gte = o), s && (u.timestamp.lte = s));
		let d = await g.listingAuditEntry.count({ where: u }), f = (await g.listingAuditEntry.findMany({
			where: u,
			include: {
				user: { select: {
					id: !0,
					firstName: !0,
					lastName: !0,
					email: !0
				} },
				unit: { select: {
					id: !0,
					unitNumber: !0,
					property: { select: {
						id: !0,
						name: !0,
						address: !0
					} }
				} },
				listing: { select: {
					id: !0,
					title: !0,
					price: !0
				} }
			},
			orderBy: { timestamp: "desc" },
			take: c,
			skip: l
		})).map((e) => this.mapToAuditEntry(e)), p = l + c < d;
		return {
			entries: f,
			total: d,
			hasMore: p,
			nextOffset: p ? l + c : void 0
		};
	}
	async getUnitAuditHistory(e, t = 100) {
		return (await this.getAuditTrail({
			unitId: e,
			limit: t
		})).entries;
	}
	async getListingAuditHistory(e, t = 100) {
		return (await this.getAuditTrail({
			listingId: e,
			limit: t
		})).entries;
	}
	async exportAuditData(e, t) {
		let n = {
			...e,
			limit: void 0,
			offset: void 0
		}, r = await this.getAuditTrail(n);
		return t.format === "csv" ? this.exportToCsv(r.entries, t.includeMetadata) : this.exportToJson(r.entries, t.includeMetadata);
	}
	async getAuditStatistics(e = {}) {
		let t = this.buildWhereClause(e), n = await g.listingAuditEntry.count({ where: t }), r = (await g.listingAuditEntry.groupBy({
			by: ["action"],
			where: t,
			_count: { action: !0 }
		})).reduce((e, t) => (e[t.action] = t._count.action, e), {}), i = (await g.listingAuditEntry.groupBy({
			by: ["newStatus"],
			where: t,
			_count: { newStatus: !0 }
		})).reduce((e, t) => (e[t.newStatus] = t._count.newStatus, e), {}), a = await g.listingAuditEntry.groupBy({
			by: ["userId"],
			where: t,
			_count: { userId: !0 },
			orderBy: { _count: { userId: "desc" } },
			take: 10
		}), o = a.map((e) => e.userId), s = await g.user.findMany({
			where: { id: { in: o } },
			select: {
				id: !0,
				firstName: !0,
				lastName: !0,
				email: !0
			}
		}), c = a.map((e) => {
			let t = s.find((t) => t.id === e.userId);
			return {
				userId: e.userId,
				userName: t ? `${t.firstName || ""} ${t.lastName || ""}`.trim() || t.email : "Unknown User",
				actionCount: e._count.userId
			};
		}), l = /* @__PURE__ */ new Date();
		return l.setDate(l.getDate() - 30), {
			totalEntries: n,
			actionBreakdown: r,
			statusBreakdown: i,
			userActivity: c,
			timelineData: (await g.listingAuditEntry.groupBy({
				by: ["timestamp"],
				where: {
					...t,
					timestamp: { gte: l }
				},
				_count: { timestamp: !0 }
			})).map((e) => ({
				date: e.timestamp.toISOString().split("T")[0],
				count: e._count.timestamp
			}))
		};
	}
	async createBulkAuditEntry(e, t, n) {
		let r = {
			id: `bulk-${Date.now()}`,
			userId: t,
			organizationId: n,
			timestamp: /* @__PURE__ */ new Date(),
			operations: e.map((e) => ({
				unitId: e.unitId,
				action: e.action,
				success: e.success,
				error: e.error
			})),
			summary: {
				total: e.length,
				successful: e.filter((e) => e.success).length,
				failed: e.filter((e) => !e.success).length
			}
		};
		await Promise.all(e.map((e) => this.createAuditEntry({
			unitId: e.unitId,
			action: e.action,
			newStatus: e.success ? Y.ACTIVE : Y.PRIVATE,
			userId: t,
			reason: e.success ? `Bulk ${e.action} operation` : `Bulk ${e.action} failed: ${e.error}`,
			metadata: {
				bulkOperationId: r.id,
				success: e.success,
				error: e.error
			}
		})));
	}
	mapToAuditEntry(e) {
		return {
			id: e.id,
			unitId: e.unitId,
			listingId: e.listingId,
			action: e.action,
			previousStatus: e.previousStatus,
			newStatus: e.newStatus,
			userId: e.userId,
			timestamp: e.timestamp,
			reason: e.reason,
			metadata: e.metadata
		};
	}
	buildWhereClause(e) {
		let t = {};
		return e.unitId && (t.unitId = e.unitId), e.listingId && (t.listingId = e.listingId), e.userId && (t.userId = e.userId), e.action && (t.action = e.action), e.status && (t.newStatus = e.status), (e.dateFrom || e.dateTo) && (t.timestamp = {}, e.dateFrom && (t.timestamp.gte = e.dateFrom), e.dateTo && (t.timestamp.lte = e.dateTo)), t;
	}
	exportToCsv(e, t = !1) {
		let n = [
			"ID",
			"Unit ID",
			"Listing ID",
			"Action",
			"Previous Status",
			"New Status",
			"User ID",
			"Timestamp",
			"Reason"
		];
		t && n.push("Metadata");
		let r = [n.join(",")];
		return e.forEach((e) => {
			let n = [
				e.id,
				e.unitId,
				e.listingId || "",
				e.action,
				e.previousStatus || "",
				e.newStatus,
				e.userId,
				e.timestamp.toISOString(),
				e.reason || ""
			];
			t && n.push(e.metadata ? JSON.stringify(e.metadata) : ""), r.push(n.map((e) => `"${e}"`).join(","));
		}), r.join("\n");
	}
	exportToJson(e, t = !1) {
		let n = e.map((e) => {
			let n = {
				id: e.id,
				unitId: e.unitId,
				listingId: e.listingId,
				action: e.action,
				previousStatus: e.previousStatus,
				newStatus: e.newStatus,
				userId: e.userId,
				timestamp: e.timestamp.toISOString(),
				reason: e.reason
			};
			return t && e.metadata && (n.metadata = e.metadata), n;
		});
		return JSON.stringify(n, null, 2);
	}
	async getPropertyAuditHistory(e) {
		try {
			return (await g.unit.findMany({
				where: { propertyId: e },
				select: { id: !0 }
			})).map((e) => e.id).length, [];
		} catch (e) {
			return console.error("Error getting property audit history:", e), [];
		}
	}
}, mn = new pn(), hn = async () => {
	try {
		let e = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categoriesmarket`, { next: { revalidate: 60 } });
		if (!e.ok) throw console.error(`API Error: ${e.status} ${e.statusText} for ${e.url}`), Error("Failed to fetch categories");
		return await e.json() || [];
	} catch (e) {
		return console.error("fetchAboutUs:", e), [];
	}
}, gn = {};
//#endregion
//#region src/lib/property.tsx
function _n() {
	return /* @__PURE__ */ e("div", {
		className: gn.container,
		children: /* @__PURE__ */ e("h1", { children: "Welcome to Property!" })
	});
}
//#endregion
//#region src/lib/listing-logger.ts
var Z = /* @__PURE__ */ function(e) {
	return e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARN = "WARN", e.ERROR = "ERROR", e.CRITICAL = "CRITICAL", e;
}({}), Q = /* @__PURE__ */ function(e) {
	return e.LISTING_OPERATION = "LISTING_OPERATION", e.BULK_OPERATION = "BULK_OPERATION", e.STATUS_CHANGE = "STATUS_CHANGE", e.VALIDATION = "VALIDATION", e.PERMISSION = "PERMISSION", e.PERFORMANCE = "PERFORMANCE", e.AUDIT = "AUDIT", e.INTEGRATION = "INTEGRATION", e.ERROR_RECOVERY = "ERROR_RECOVERY", e;
}({}), vn = class e {
	static instance;
	performanceMetrics = /* @__PURE__ */ new Map();
	constructor() {}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	log(e) {
		let t = {
			...e,
			timestamp: /* @__PURE__ */ new Date()
		};
		this.outputLog(t), process.env.NODE_ENV === "production" && this.sendToMonitoringService(t);
	}
	debug(e, t, n) {
		this.log({
			level: Z.DEBUG,
			category: e,
			message: t,
			context: n
		});
	}
	info(e, t, n) {
		this.log({
			level: Z.INFO,
			category: e,
			message: t,
			context: n
		});
	}
	warn(e, t, n) {
		this.log({
			level: Z.WARN,
			category: e,
			message: t,
			context: n
		});
	}
	error(e, t, n, r) {
		this.log({
			level: Z.ERROR,
			category: e,
			message: t,
			error: n,
			stack: n?.stack,
			context: r
		});
	}
	critical(e, t, n, r) {
		this.log({
			level: Z.CRITICAL,
			category: e,
			message: t,
			error: n,
			stack: n?.stack,
			context: r
		});
	}
	logListingOperation(e, t, n, r, i, a) {
		this.info(Q.LISTING_OPERATION, `Listing ${e}`, {
			operation: e,
			listingId: t,
			unitId: n,
			userId: r,
			success: i,
			...a
		});
	}
	logBulkOperation(e, t, n, r, i) {
		this.info(Q.BULK_OPERATION, `Bulk ${e}`, {
			operation: e,
			unitCount: t.length,
			unitIds: t,
			userId: n,
			results: r,
			...i
		});
	}
	logStatusChange(e, t, n, r, i, a) {
		this.info(Q.STATUS_CHANGE, "Listing status changed", {
			listingId: e,
			unitId: t,
			previousStatus: n,
			newStatus: r,
			userId: i,
			reason: a
		});
	}
	logValidation(e, t, n, r) {
		let i = t ? Z.DEBUG : Z.WARN;
		this.log({
			level: i,
			category: Q.VALIDATION,
			message: `Validation ${t ? "passed" : "failed"} for ${e}`,
			context: {
				operation: e,
				success: t,
				errors: n,
				...r
			}
		});
	}
	logPermissionCheck(e, t, n, r, i) {
		let a = i ? Z.DEBUG : Z.WARN;
		this.log({
			level: a,
			category: Q.PERMISSION,
			message: `Permission ${i ? "granted" : "denied"} for ${e}`,
			context: {
				operation: e,
				userId: t,
				userRole: n,
				requiredRoles: r,
				granted: i
			}
		});
	}
	startPerformanceTracking(e, t) {
		let n = `${e}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
		return this.performanceMetrics.set(n, {
			operationName: e,
			startTime: performance.now(),
			success: !1,
			metadata: t
		}), this.debug(Q.PERFORMANCE, `Started tracking: ${e}`, {
			operationId: n,
			operationName: e,
			metadata: t
		}), n;
	}
	endPerformanceTracking(e, t, n, r) {
		let i = this.performanceMetrics.get(e);
		if (!i) return this.warn(Q.PERFORMANCE, `Performance tracking not found for operation: ${e}`), null;
		let a = performance.now(), o = a - i.startTime, s = {
			...i,
			endTime: a,
			duration: o,
			success: t,
			errorType: n,
			metadata: {
				...i.metadata,
				...r
			}
		};
		this.performanceMetrics.delete(e);
		let c = t ? Z.INFO : Z.WARN;
		return this.log({
			level: c,
			category: Q.PERFORMANCE,
			message: `Completed: ${i.operationName}`,
			context: {
				operationId: e,
				operationName: i.operationName,
				duration: Math.round(o),
				success: t,
				errorType: n,
				...s.metadata
			},
			duration: Math.round(o)
		}), o > 5e3 && this.warn(Q.PERFORMANCE, `Slow operation detected: ${i.operationName}`, {
			operationId: e,
			duration: Math.round(o),
			threshold: 5e3
		}), s;
	}
	logIntegration(e, t, n, r, i, a) {
		let o = n ? Z.INFO : Z.ERROR;
		this.log({
			level: o,
			category: Q.INTEGRATION,
			message: `${e} integration: ${t}`,
			error: i,
			duration: r,
			context: {
				system: e,
				operation: t,
				success: n,
				...a
			}
		});
	}
	logErrorRecovery(e, t, n, r, i, a) {
		this.warn(Q.ERROR_RECOVERY, `Error recovery attempt ${t}/${n}`, {
			operation: e,
			attempt: t,
			maxAttempts: n,
			error: r.message,
			willRetry: i,
			...a
		});
	}
	outputLog(e) {
		let t = `[${e.timestamp.toISOString()}] [${e.level}] [${e.category}] ${e.message}`;
		switch (e.level) {
			case Z.DEBUG:
				console.debug(t, e.context || "");
				break;
			case Z.INFO:
				console.info(t, e.context || "");
				break;
			case Z.WARN:
				console.warn(t, e.context || "");
				break;
			case Z.ERROR:
				console.error(t, e.error || "", e.context || "");
				break;
			case Z.CRITICAL:
				console.error("🚨 CRITICAL:", t, e.error || "", e.context || "");
				break;
		}
	}
	sendToMonitoringService(e) {
		let t = {
			timestamp: e.timestamp.toISOString(),
			level: e.level,
			category: e.category,
			message: e.message,
			context: e.context,
			userId: e.userId,
			organizationId: e.organizationId,
			listingId: e.listingId,
			unitId: e.unitId,
			propertyId: e.propertyId,
			operationId: e.operationId,
			duration: e.duration,
			error: e.error ? {
				name: e.error.name,
				message: e.error.message,
				stack: e.stack
			} : void 0,
			environment: process.env.NODE_ENV,
			service: "listing-management",
			version: process.env.npm_package_version || "1.0.0"
		};
		process.env.NODE_ENV === "development" && e.level === Z.CRITICAL && console.log("Monitoring data:", t);
	}
	getPerformanceStats() {
		let e = Array.from(this.performanceMetrics.values());
		return {
			activeOperations: e.length,
			operationNames: e.map((e) => e.operationName)
		};
	}
	cleanupOldMetrics() {
		let e = performance.now();
		for (let [t, n] of this.performanceMetrics.entries()) e - n.startTime > 3e5 && (this.warn(Q.PERFORMANCE, `Cleaning up stale performance tracking: ${n.operationName}`, {
			operationId: t,
			age: Math.round(e - n.startTime)
		}), this.performanceMetrics.delete(t));
	}
}, yn = vn.getInstance();
function bn(e) {
	return function(t, n, r) {
		let i = r.value, a = e || `${t.constructor.name}.${n}`;
		return r.value = async function(...e) {
			let r = yn.startPerformanceTracking(a, {
				className: t.constructor.name,
				methodName: n,
				argumentCount: e.length
			});
			try {
				let t = await i.apply(this, e);
				return yn.endPerformanceTracking(r, !0), t;
			} catch (e) {
				throw yn.endPerformanceTracking(r, !1, e instanceof Error ? e.constructor.name : "UnknownError"), e;
			}
		}, r;
	};
}
function xn(e) {
	return {
		debug: (t, n, r) => yn.debug(t, n, {
			...e,
			...r
		}),
		info: (t, n, r) => yn.info(t, n, {
			...e,
			...r
		}),
		warn: (t, n, r) => yn.warn(t, n, {
			...e,
			...r
		}),
		error: (t, n, r, i) => yn.error(t, n, r, {
			...e,
			...i
		}),
		critical: (t, n, r, i) => yn.critical(t, n, r, {
			...e,
			...i
		})
	};
}
//#endregion
//#region src/lib/listing-auth.types.ts
var Sn = /* @__PURE__ */ function(e) {
	return e.PROPERTY_MANAGER = "PROPERTY_MANAGER", e.ADMIN = "ADMIN", e.SUPER_ADMIN = "SUPER_ADMIN", e.TENANT = "TENANT", e.VENDOR = "VENDOR", e;
}({}), Cn = /* @__PURE__ */ function(e) {
	return e.CREATE_LISTING = "CREATE_LISTING", e.UPDATE_LISTING = "UPDATE_LISTING", e.DELETE_LISTING = "DELETE_LISTING", e.VIEW_LISTING = "VIEW_LISTING", e.BULK_OPERATIONS = "BULK_OPERATIONS", e.VIEW_ANALYTICS = "VIEW_ANALYTICS", e.EXPORT_DATA = "EXPORT_DATA", e.MANAGE_STATUS = "MANAGE_STATUS", e;
}({}), wn = {
	"listing:create": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.CREATE_LISTING],
		rateLimit: {
			windowMs: 6e4,
			maxRequests: 10
		},
		validateInput: !0,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	},
	"listing:update": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.UPDATE_LISTING],
		rateLimit: {
			windowMs: 6e4,
			maxRequests: 20
		},
		validateInput: !0,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	},
	"listing:delete": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.DELETE_LISTING],
		rateLimit: {
			windowMs: 3e5,
			maxRequests: 5
		},
		validateInput: !0,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	},
	"listing:view": {
		requireAuth: !1,
		permissions: [Cn.VIEW_LISTING],
		rateLimit: {
			windowMs: 6e4,
			maxRequests: 100
		},
		validateInput: !1,
		sanitizeOutput: !0,
		logAccess: !1,
		auditTrail: !1
	},
	"listing:bulk": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.BULK_OPERATIONS],
		rateLimit: {
			windowMs: 3e5,
			maxRequests: 5
		},
		validateInput: !0,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	},
	"listing:status": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.MANAGE_STATUS],
		rateLimit: {
			windowMs: 6e4,
			maxRequests: 30
		},
		validateInput: !0,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	},
	"listing:analytics": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.VIEW_ANALYTICS],
		rateLimit: {
			windowMs: 3e5,
			maxRequests: 10
		},
		validateInput: !1,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !1
	},
	"listing:export": {
		requireAuth: !0,
		requiredRole: Sn.PROPERTY_MANAGER,
		permissions: [Cn.EXPORT_DATA],
		rateLimit: {
			windowMs: 3e5,
			maxRequests: 3
		},
		validateInput: !1,
		sanitizeOutput: !0,
		logAccess: !0,
		auditTrail: !0
	}
}, Tn = {
	listing: {
		title: {
			minLength: 1,
			maxLength: 200,
			pattern: /^[a-zA-Z0-9\s\-.,!?()]+$/,
			required: !0
		},
		description: {
			minLength: 10,
			maxLength: 2e3,
			allowHTML: !0,
			required: !0
		},
		price: {
			min: 1,
			max: 5e4,
			decimals: 2,
			required: !0
		},
		availabilityDate: {
			minDate: /* @__PURE__ */ new Date(),
			required: !1
		},
		expirationDate: {
			minDate: /* @__PURE__ */ new Date(),
			required: !1
		}
	},
	bulk: {
		maxUnits: 50,
		requiredFields: ["unitIds", "action"],
		allowedActions: [
			"LIST",
			"UNLIST",
			"SUSPEND",
			"ACTIVATE"
		]
	}
}, En = {
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "DENY",
	"X-XSS-Protection": "1; mode=block",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
	"Strict-Transport-Security": "max-age=31536000; includeSubDomains"
}, Dn = {
	maxFailedAttempts: 5,
	banDuration: 900 * 1e3,
	suspiciousPatterns: {
		rapidRequests: {
			threshold: 100,
			windowMs: 6e4
		},
		largePayloads: { maxSize: 1024 * 1024 },
		repeatedFailures: {
			threshold: 10,
			windowMs: 3e5
		}
	},
	ipRestrictions: {
		enabled: !0,
		whitelist: [],
		blacklist: [],
		maxRequestsPerIP: 1e3,
		windowMs: 36e5
	}
}, On = {
	auditLogs: {
		retentionDays: 365,
		archiveAfterDays: 90
	},
	accessLogs: {
		retentionDays: 30,
		archiveAfterDays: 7
	},
	errorLogs: {
		retentionDays: 90,
		archiveAfterDays: 30
	},
	rateLimitData: { retentionHours: 24 }
}, kn = {
	algorithm: "aes-256-gcm",
	keyDerivation: {
		iterations: 1e5,
		keyLength: 32,
		digest: "sha256"
	},
	encryptedFields: [
		"personalData",
		"paymentInfo",
		"sensitiveNotes"
	]
}, An = {
	alerts: {
		enabled: !0,
		thresholds: {
			failedAuthAttempts: 10,
			suspiciousActivity: 5,
			systemErrors: 20
		},
		notificationChannels: ["email", "slack"]
	},
	metrics: {
		enabled: !0,
		collectInterval: 6e4,
		retentionDays: 30
	},
	healthChecks: {
		enabled: !0,
		interval: 3e4,
		timeout: 5e3
	}
};
function jn(e) {
	return wn[e] || null;
}
function Mn(e) {
	return jn(e)?.requireAuth ?? !0;
}
function Nn(e) {
	return jn(e)?.requiredRole || null;
}
function Pn(e) {
	return jn(e)?.rateLimit || null;
}
//#endregion
//#region src/lib/listing-abuse-prevention.ts
var Fn = class e {
	static instance;
	logger;
	failedAttempts = /* @__PURE__ */ new Map();
	bannedUsers = /* @__PURE__ */ new Map();
	bannedIPs = /* @__PURE__ */ new Map();
	suspiciousActivities = [];
	ipRequestCounts = /* @__PURE__ */ new Map();
	constructor() {
		this.logger = vn.getInstance(), this.startCleanupInterval();
	}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	isBanned(e, t) {
		let n = /* @__PURE__ */ new Date(), r = this.bannedUsers.get(e);
		if (r && (r.permanent || r.expiresAt > n)) return {
			banned: !0,
			reason: r.reason,
			expiresAt: r.expiresAt,
			permanent: r.permanent
		};
		let i = this.bannedIPs.get(t);
		return i && (i.permanent || i.expiresAt > n) ? {
			banned: !0,
			reason: i.reason,
			expiresAt: i.expiresAt,
			permanent: i.permanent
		} : { banned: !1 };
	}
	recordFailedAttempt(e, t, n) {
		let r = `${e}:${t}`, i = (this.failedAttempts.get(r) || 0) + 1;
		this.failedAttempts.set(r, i), this.logger.warn(Q.PERMISSION, "Failed attempt recorded", {
			userId: e,
			ip: t,
			reason: n,
			attemptCount: i
		}), i >= Dn.maxFailedAttempts && this.banUser(e, t, `Too many failed attempts: ${n}`, !1), this.recordSuspiciousActivity({
			userId: e,
			ip: t,
			activity: `Failed attempt: ${n}`,
			timestamp: /* @__PURE__ */ new Date(),
			severity: i > 3 ? "HIGH" : "MEDIUM",
			metadata: {
				attemptCount: i,
				reason: n
			}
		});
	}
	banUser(e, t, n, r = !1) {
		let i = /* @__PURE__ */ new Date(), a = r ? /* @__PURE__ */ new Date("2099-12-31") : new Date(i.getTime() + Dn.banDuration), o = {
			userId: e,
			ip: t,
			reason: n,
			bannedAt: i,
			expiresAt: a,
			permanent: r
		};
		this.bannedUsers.set(e, o), this.bannedIPs.set(t, o), this.logger.error(Q.ERROR_RECOVERY, "User banned", void 0, {
			userId: e,
			ip: t,
			reason: n,
			permanent: r,
			expiresAt: a.toISOString()
		}), this.recordSuspiciousActivity({
			userId: e,
			ip: t,
			activity: `User banned: ${n}`,
			timestamp: i,
			severity: "CRITICAL",
			metadata: {
				permanent: r,
				expiresAt: a
			}
		});
	}
	checkIPRateLimit(e) {
		if (!Dn.ipRestrictions.enabled || Dn.ipRestrictions.whitelist.includes(e)) return { allowed: !0 };
		if (Dn.ipRestrictions.blacklist.includes(e)) return { allowed: !1 };
		let t = Date.now(), n = this.ipRequestCounts.get(e);
		return !n || t > n.resetTime ? (this.ipRequestCounts.set(e, {
			count: 1,
			resetTime: t + Dn.ipRestrictions.windowMs,
			violations: n?.violations || 0
		}), {
			allowed: !0,
			resetTime: t + Dn.ipRestrictions.windowMs,
			remainingRequests: Dn.ipRestrictions.maxRequestsPerIP - 1
		}) : n.count >= Dn.ipRestrictions.maxRequestsPerIP ? (n.violations++, this.ipRequestCounts.set(e, n), n.violations >= 3 && this.banUser("unknown", e, "Repeated rate limit violations", !1), {
			allowed: !1,
			resetTime: n.resetTime,
			remainingRequests: 0
		}) : (n.count++, this.ipRequestCounts.set(e, n), {
			allowed: !0,
			resetTime: n.resetTime,
			remainingRequests: Dn.ipRestrictions.maxRequestsPerIP - n.count
		});
	}
	detectSuspiciousActivity(e, t, n) {
		let r = [], i = "LOW";
		n.requestCount && n.timeWindow && n.requestCount / (n.timeWindow / 1e3) > Dn.suspiciousPatterns.rapidRequests.threshold / 60 && (r.push("Unusually high request rate"), i = "HIGH"), n.payloadSize && n.payloadSize > Dn.suspiciousPatterns.largePayloads.maxSize && (r.push("Unusually large request payload"), i = i === "HIGH" ? "HIGH" : "MEDIUM"), n.userAgent && [
			"bot",
			"crawler",
			"spider",
			"scraper",
			"curl",
			"wget"
		].some((e) => n.userAgent.toLowerCase().includes(e)) && (r.push("Suspicious user agent detected"), i = i === "HIGH" ? "HIGH" : "MEDIUM"), this.suspiciousActivities.filter((t) => t.userId === e && t.timestamp > /* @__PURE__ */ new Date(Date.now() - 3e5)).length > 10 && (r.push("High frequency of suspicious activities"), i = "CRITICAL");
		let a = r.length > 0;
		return a && this.recordSuspiciousActivity({
			userId: e,
			ip: t,
			activity: `Suspicious ${n.operation}`,
			timestamp: /* @__PURE__ */ new Date(),
			severity: i,
			metadata: {
				reasons: r,
				...n
			}
		}), {
			suspicious: a,
			reasons: r,
			severity: i
		};
	}
	recordSuspiciousActivity(e) {
		this.suspiciousActivities.push(e);
		let t = /* @__PURE__ */ new Date(Date.now() - 1440 * 60 * 1e3);
		this.suspiciousActivities = this.suspiciousActivities.filter((e) => e.timestamp > t), this.logger.warn(Q.AUDIT, "Suspicious activity detected", e), e.severity === "CRITICAL" && this.suspiciousActivities.filter((t) => t.userId === e.userId && t.severity === "CRITICAL" && t.timestamp > /* @__PURE__ */ new Date(Date.now() - 3e5)).length >= 3 && this.banUser(e.userId, e.ip, "Multiple critical security violations", !1);
	}
	getUserSecurityStatus(e, t) {
		let n = this.isBanned(e, t), r = this.failedAttempts.get(`${e}:${t}`) || 0, i = this.suspiciousActivities.filter((t) => t.userId === e && t.timestamp > /* @__PURE__ */ new Date(Date.now() - 36e5)), a = "LOW";
		return n.banned ? a = "CRITICAL" : r >= 3 || i.some((e) => e.severity === "CRITICAL") ? a = "HIGH" : (r >= 1 || i.some((e) => e.severity === "HIGH")) && (a = "MEDIUM"), {
			banned: n.banned,
			failedAttempts: r,
			suspiciousActivities: i.length,
			riskLevel: a
		};
	}
	clearFailedAttempts(e, t) {
		let n = `${e}:${t}`;
		this.failedAttempts.delete(n), this.logger.info(Q.AUDIT, "Failed attempts cleared", {
			userId: e,
			ip: t
		});
	}
	unbanUser(e, t, n) {
		this.bannedUsers.delete(e), this.bannedIPs.delete(t), this.clearFailedAttempts(e, t), this.logger.info(Q.AUDIT, "User unbanned", {
			userId: e,
			ip: t,
			reason: n
		});
	}
	getSecurityStats() {
		let e = /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).getTime() - 1440 * 60 * 1e3), t = this.suspiciousActivities.filter((t) => t.timestamp > e), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			n.set(e.ip, (n.get(e.ip) || 0) + 1);
		});
		let r = Array.from(n.entries()).map(([e, t]) => ({
			ip: e,
			count: t
		})).sort((e, t) => t.count - e.count).slice(0, 10);
		return {
			totalBannedUsers: this.bannedUsers.size,
			totalBannedIPs: this.bannedIPs.size,
			suspiciousActivitiesLast24h: t.length,
			failedAttemptsLast24h: Array.from(this.failedAttempts.values()).reduce((e, t) => e + t, 0),
			topSuspiciousIPs: r
		};
	}
	startCleanupInterval() {
		setInterval(() => {
			this.cleanup();
		}, 6e4);
	}
	cleanup() {
		let e = /* @__PURE__ */ new Date();
		for (let [t, n] of this.bannedUsers.entries()) !n.permanent && n.expiresAt <= e && this.bannedUsers.delete(t);
		for (let [t, n] of this.bannedIPs.entries()) !n.permanent && n.expiresAt <= e && this.bannedIPs.delete(t);
		let t = /* @__PURE__ */ new Date(e.getTime() - 1440 * 60 * 1e3);
		this.suspiciousActivities = this.suspiciousActivities.filter((e) => e.timestamp > t);
		for (let [t, n] of this.ipRequestCounts.entries()) e.getTime() > n.resetTime && this.ipRequestCounts.delete(t);
	}
}, $ = /* @__PURE__ */ function(e) {
	return e.VALIDATION_ERROR = "VALIDATION_ERROR", e.PERMISSION_ERROR = "PERMISSION_ERROR", e.NOT_FOUND_ERROR = "NOT_FOUND_ERROR", e.CONFLICT_ERROR = "CONFLICT_ERROR", e.DATABASE_ERROR = "DATABASE_ERROR", e.NETWORK_ERROR = "NETWORK_ERROR", e.RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR", e.EXTERNAL_SERVICE_ERROR = "EXTERNAL_SERVICE_ERROR", e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e;
}({}), In = /* @__PURE__ */ function(e) {
	return e.LOW = "LOW", e.MEDIUM = "MEDIUM", e.HIGH = "HIGH", e.CRITICAL = "CRITICAL", e;
}({}), Ln = class extends Error {
	type;
	severity;
	code;
	userMessage;
	technicalDetails;
	retryable;
	timestamp;
	constructor(e, t, n = {}) {
		super(t), this.name = "ListingError", this.type = e, this.severity = n.severity || In.MEDIUM, this.code = n.code || e, this.userMessage = n.userMessage || this.getDefaultUserMessage(e), this.technicalDetails = n.technicalDetails, this.retryable = n.retryable || this.isRetryableByDefault(e), this.timestamp = /* @__PURE__ */ new Date(), n.cause && (this.cause = n.cause);
	}
	getDefaultUserMessage(e) {
		switch (e) {
			case $.VALIDATION_ERROR: return "Please check your input and try again.";
			case $.PERMISSION_ERROR: return "You do not have permission to perform this action.";
			case $.NOT_FOUND_ERROR: return "The requested item could not be found.";
			case $.CONFLICT_ERROR: return "This action conflicts with the current state. Please refresh and try again.";
			case $.DATABASE_ERROR: return "A database error occurred. Please try again later.";
			case $.NETWORK_ERROR: return "Network connection failed. Please check your connection and try again.";
			case $.RATE_LIMIT_ERROR: return "Too many requests. Please wait a moment and try again.";
			case $.EXTERNAL_SERVICE_ERROR: return "An external service is temporarily unavailable. Please try again later.";
			default: return "An unexpected error occurred. Please try again or contact support.";
		}
	}
	isRetryableByDefault(e) {
		return [
			$.DATABASE_ERROR,
			$.NETWORK_ERROR,
			$.EXTERNAL_SERVICE_ERROR
		].includes(e);
	}
	toJSON() {
		return {
			name: this.name,
			type: this.type,
			severity: this.severity,
			code: this.code,
			message: this.message,
			userMessage: this.userMessage,
			technicalDetails: this.technicalDetails,
			retryable: this.retryable,
			timestamp: this.timestamp,
			stack: this.stack
		};
	}
}, Rn = {
	maxAttempts: 3,
	baseDelay: 1e3,
	maxDelay: 1e4,
	backoffMultiplier: 2,
	retryableErrors: [
		$.DATABASE_ERROR,
		$.NETWORK_ERROR,
		$.EXTERNAL_SERVICE_ERROR
	]
}, zn = class e {
	static instance;
	retryConfig;
	constructor(e = Rn) {
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
			if (this.logError(a, {
				attempt: n,
				context: t
			}), n < r.maxAttempts && a.retryable && r.retryableErrors.includes(a.type)) {
				let e = this.calculateDelay(n, r);
				await this.sleep(e);
				continue;
			}
			throw a;
		}
		throw this.normalizeError(i, t);
	}
	normalizeError(e, t) {
		return e instanceof Ln ? e : e.code && typeof e.code == "string" ? this.handlePrismaError(e, t) : e.name === "NetworkError" || e.code === "ECONNREFUSED" ? new Ln($.NETWORK_ERROR, `Network error in ${t}: ${e.message}`, {
			severity: In.HIGH,
			technicalDetails: { originalError: e },
			cause: e
		}) : e.name === "ValidationError" || e.message?.includes("validation") ? new Ln($.VALIDATION_ERROR, `Validation error in ${t}: ${e.message}`, {
			severity: In.LOW,
			technicalDetails: { originalError: e },
			cause: e
		}) : new Ln($.UNKNOWN_ERROR, `Unknown error in ${t}: ${e.message || "Unknown error"}`, {
			severity: In.MEDIUM,
			technicalDetails: { originalError: e },
			cause: e
		});
	}
	handlePrismaError(e, t) {
		switch (e.code) {
			case "P2002": return new Ln($.CONFLICT_ERROR, `Duplicate entry in ${t}`, {
				severity: In.LOW,
				userMessage: "This item already exists. Please use a different value.",
				technicalDetails: { prismaError: e },
				retryable: !1
			});
			case "P2025": return new Ln($.NOT_FOUND_ERROR, `Record not found in ${t}`, {
				severity: In.LOW,
				technicalDetails: { prismaError: e },
				retryable: !1
			});
			case "P2003": return new Ln($.VALIDATION_ERROR, `Invalid reference in ${t}`, {
				severity: In.MEDIUM,
				userMessage: "Invalid reference. Please check your input.",
				technicalDetails: { prismaError: e },
				retryable: !1
			});
			case "P1001":
			case "P1002": return new Ln($.DATABASE_ERROR, `Database connection error in ${t}`, {
				severity: In.HIGH,
				technicalDetails: { prismaError: e },
				retryable: !0
			});
			default: return new Ln($.DATABASE_ERROR, `Database error in ${t}: ${e.message}`, {
				severity: In.MEDIUM,
				technicalDetails: { prismaError: e }
			});
		}
	}
	createErrorResponse(e) {
		let t = this.getHttpStatusCode(e.type), n = {
			success: !1,
			error: {
				type: e.type,
				code: e.code,
				message: e.userMessage,
				retryable: e.retryable,
				timestamp: e.timestamp
			},
			...process.env.NODE_ENV === "development" && { debug: {
				technicalMessage: e.message,
				technicalDetails: e.technicalDetails,
				stack: e.stack
			} }
		};
		return Qt.NextResponse.json(n, { status: t });
	}
	getHttpStatusCode(e) {
		switch (e) {
			case $.VALIDATION_ERROR: return 400;
			case $.PERMISSION_ERROR: return 403;
			case $.NOT_FOUND_ERROR: return 404;
			case $.CONFLICT_ERROR: return 409;
			case $.RATE_LIMIT_ERROR: return 429;
			case $.DATABASE_ERROR:
			case $.EXTERNAL_SERVICE_ERROR: return 503;
			case $.NETWORK_ERROR: return 502;
			default: return 500;
		}
	}
	logError(e, t) {
		let n = {
			timestamp: e.timestamp,
			type: e.type,
			severity: e.severity,
			code: e.code,
			message: e.message,
			userMessage: e.userMessage,
			technicalDetails: e.technicalDetails,
			context: t,
			stack: e.stack
		};
		switch (e.severity) {
			case In.CRITICAL:
				console.error("CRITICAL ERROR:", n);
				break;
			case In.HIGH:
				console.error("HIGH SEVERITY ERROR:", n);
				break;
			case In.MEDIUM:
				console.warn("MEDIUM SEVERITY ERROR:", n);
				break;
			case In.LOW:
				console.info("LOW SEVERITY ERROR:", n);
				break;
		}
	}
	calculateDelay(e, t) {
		let n = t.baseDelay * t.backoffMultiplier ** (e - 1);
		return Math.min(n, t.maxDelay);
	}
	sleep(e) {
		return new Promise((t) => setTimeout(t, e));
	}
}, Bn = zn.getInstance();
function Vn(e) {
	return async (t, n) => {
		try {
			return await e(t, n);
		} catch (t) {
			let n = Bn.normalizeError(t, `API Handler: ${e.name || "anonymous"}`);
			return Bn.createErrorResponse(n);
		}
	};
}
function Hn(e, t, n = "validation") {
	let r = t.filter((t) => e[t] === void 0 || e[t] === null || e[t] === "");
	if (r.length > 0) throw new Ln($.VALIDATION_ERROR, `Missing required fields in ${n}: ${r.join(", ")}`, {
		severity: In.LOW,
		userMessage: `Please provide the following required fields: ${r.join(", ")}`,
		technicalDetails: {
			missingFields: r,
			providedData: e
		},
		retryable: !1
	});
}
function Un(e, t, n) {
	if (!t.includes(e)) throw new Ln($.PERMISSION_ERROR, `Insufficient permissions for ${n}`, {
		severity: In.MEDIUM,
		userMessage: `You do not have permission to ${n}. Please contact your administrator.`,
		technicalDetails: {
			userRole: e,
			requiredRoles: t,
			operation: n
		},
		retryable: !1
	});
}
function Wn(e, t) {
	return new Ln($.NOT_FOUND_ERROR, `${e} not found: ${t}`, {
		severity: In.LOW,
		userMessage: `The requested ${e.toLowerCase()} could not be found.`,
		technicalDetails: {
			resourceType: e,
			resourceId: t
		},
		retryable: !1
	});
}
function Gn(e, t, n) {
	return new Ln($.CONFLICT_ERROR, `Cannot ${e}: current state is ${t}, required state is ${n}`, {
		severity: In.MEDIUM,
		userMessage: "This action cannot be performed in the current state. Please refresh and try again.",
		technicalDetails: {
			operation: e,
			currentState: t,
			requiredState: n
		},
		retryable: !1
	});
}
//#endregion
//#region src/lib/listing-service.ts
var Kn = 300 * 1e3, qn = /* @__PURE__ */ new Map(), Jn = class {
	async getUnitWithRelations(e, t = {}) {
		let n = `unit_${e}_${JSON.stringify(t)}`, r = qn.get(n);
		if (r && Date.now() - r.timestamp < Kn) return r.data;
		let i = await g.unit.findUnique({
			where: { id: e },
			include: {
				property: { select: {
					id: !0,
					name: !0,
					address: !0,
					city: !0,
					country: !0,
					zipCode: !0,
					managerId: !0
				} },
				listing: !0,
				leases: {
					where: { leaseStatus: "ACTIVE" },
					select: {
						id: !0,
						leaseStatus: !0,
						startDate: !0,
						endDate: !0
					},
					take: 1
				},
				...t
			}
		});
		return i && qn.set(n, {
			data: i,
			timestamp: Date.now()
		}), i;
	}
	clearCache(e) {
		if (e) for (let t of qn.keys()) t.startsWith(`unit_${e}_`) && qn.delete(t);
		else qn.clear();
	}
	async getStatusIdByName(e) {
		let t = await g.listingStatus.findFirst({ where: { name: { equals: e } } });
		if (t?.id) return t.id;
		try {
			return (await g.listingStatus.create({ data: { name: e } })).id;
		} catch {
			return;
		}
	}
	async getMarketplaceCategoryIdByName(e) {
		return (await g.categoryMarketplace.findUnique({ where: { name: e } }))?.id;
	}
	async createListing(e, t, n, r) {
		return await Bn.withRetry(async () => {
			try {
				let { unitId: i, ...a } = t;
				Hn({
					unitId: e,
					userId: n,
					organizationId: r,
					...a
				}, [
					"unitId",
					"userId",
					"organizationId",
					"title",
					"description",
					"price"
				], "createListing");
				let o = await this.getUnitWithRelations(e, { leases: {
					where: { leaseStatus: { in: ["ACTIVE", "PENDING_APPROVAL"] } },
					select: {
						id: !0,
						leaseStatus: !0
					}
				} });
				if (!o) throw Wn("Unit", e);
				if (o.listing) throw Gn("create listing", "unit already has listing", "unit without listing");
				if (o.leases && o.leases.length > 0) throw Gn("create listing", "unit has active lease", "unit without active lease");
				if (!o.property) return {
					success: !1,
					error: en.INVALID_UNIT_DATA,
					message: `Unit ${o.unitNumber} is missing required property information`
				};
				let s = this.validateAndPopulateListingData(t, o);
				if (this.clearCache(e), !s.isValid) return {
					success: !1,
					error: en.VALIDATION_FAILED,
					message: s.errors.join(", ")
				};
				let { title: c, description: l, price: u, availabilityDate: d, expirationDate: f } = s.data, p = this.determineInitialStatus(d), m = await this.getStatusIdByName(p), h = await this.getMarketplaceCategoryIdByName("Property");
				if (!h) return {
					success: !1,
					error: en.VALIDATION_FAILED,
					message: "Marketplace category 'Property' not configured"
				};
				let _ = await g.$transaction(async (t) => {
					let i = await t.listing.create({ data: {
						organizationId: r,
						createdBy: n,
						categoryId: h,
						statusId: m,
						title: c,
						description: l,
						price: u,
						availabilityDate: d,
						expirationDate: f,
						propertyId: o.propertyId,
						unitId: e
					} });
					return await t.unit.update({
						where: { id: e },
						data: { listingId: i.id }
					}), await mn.createAuditEntry({
						unitId: e,
						listingId: i.id,
						action: p === Y.COMING_SOON ? X.SET_COMING_SOON : X.CREATE,
						newStatus: p,
						userId: n,
						reason: p === Y.COMING_SOON ? "Listing created with future availability date" : "Listing created",
						metadata: {
							availabilityDate: d,
							expirationDate: f
						}
					}, t), i;
				}, { timeout: 15e3 }), v = fn(e, p === Y.COMING_SOON ? X.SET_COMING_SOON : X.CREATE, p, n, {
					listingId: _.id,
					previousStatus: Y.PRIVATE,
					reason: p === Y.COMING_SOON ? "Listing created with future availability date" : "Listing created"
				});
				return await dn.handleListingCreated(v), {
					success: !0,
					data: {
						listingId: _.id,
						status: p
					}
				};
			} catch (e) {
				return console.error("Error creating listing:", e), {
					success: !1,
					error: en.VALIDATION_FAILED,
					message: `Failed to create listing: ${e instanceof Error ? e.message : "Unknown error"}`
				};
			}
		}, "createListing");
	}
	async removeListing(e, t, n) {
		try {
			let r = await g.unit.findUnique({
				where: { id: e },
				include: { listing: !0 }
			});
			if (!r) return {
				success: !1,
				error: tn.UNIT_NOT_FOUND,
				message: `Unit with ID ${e} not found`
			};
			if (!r.listing) return {
				success: !1,
				error: tn.LISTING_NOT_FOUND,
				message: "Unit does not have an active listing"
			};
			let i = r.listing.id;
			await g.$transaction(async (r) => {
				await mn.createAuditEntry({
					unitId: e,
					listingId: i,
					action: X.REMOVE,
					previousStatus: Y.ACTIVE,
					newStatus: Y.PRIVATE,
					userId: t,
					reason: n || "Listing removed"
				}, r), await r.unit.update({
					where: { id: e },
					data: { listingId: null }
				}), await r.listing.delete({ where: { id: i } });
			});
			let a = fn(e, X.REMOVE, Y.PRIVATE, t, {
				listingId: i,
				previousStatus: Y.ACTIVE,
				reason: n || "Listing removed"
			});
			return await dn.handleListingRemoved(a), {
				success: !0,
				data: { success: !0 }
			};
		} catch (e) {
			return console.error("Error removing listing:", e), {
				success: !1,
				error: tn.CLEANUP_FAILED,
				message: `Failed to remove listing: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async updateListingStatus(e, t, n, r) {
		try {
			let i = await g.listing.findUnique({
				where: { id: e },
				include: {
					unit: !0,
					status: !0
				}
			});
			if (!i) return {
				success: !1,
				error: nn.LISTING_NOT_FOUND,
				message: `Listing with ID ${e} not found`
			};
			let a = i?.status?.name ? i.status.name : Y.ACTIVE;
			if (!on(a, t)) return {
				success: !1,
				error: nn.INVALID_TRANSITION,
				message: `Invalid status transition from ${a} to ${t}`
			};
			let o = await this.getStatusIdByName(t);
			return await g.$transaction(async (s) => {
				await mn.createAuditEntry({
					unitId: i.unit?.id || "",
					listingId: e,
					action: X.UPDATE,
					previousStatus: a,
					newStatus: t,
					userId: n,
					reason: r || `Status updated to ${t}`
				}, s), await s.listing.update({
					where: { id: e },
					data: { statusId: o ?? null }
				});
			}), {
				success: !0,
				data: {
					listingId: e,
					newStatus: t
				}
			};
		} catch (e) {
			return console.error("Error updating listing status:", e), {
				success: !1,
				error: nn.VALIDATION_FAILED,
				message: `Failed to update listing status: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async getListingHistory(e, t) {
		try {
			let n = await g.unit.findUnique({
				where: { id: e },
				include: { property: { include: { organization: { include: { users: { where: { userId: t } } } } } } }
			});
			return n ? n.property?.organization?.users.length ? {
				success: !0,
				data: await mn.getUnitAuditHistory(e)
			} : {
				success: !1,
				error: "PERMISSION_DENIED",
				message: "You don't have permission to view this unit's history"
			} : {
				success: !1,
				error: "UNIT_NOT_FOUND",
				message: `Unit with ID ${e} not found`
			};
		} catch (e) {
			return console.error("Error retrieving listing history:", e), {
				success: !1,
				error: "PERMISSION_DENIED",
				message: `Failed to retrieve listing history: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async updateListingInformation(e, t, n) {
		try {
			let r = await g.listing.findUnique({
				where: { id: e },
				include: {
					unit: !0,
					property: !0
				}
			});
			if (!r) return {
				success: !1,
				error: nn.LISTING_NOT_FOUND,
				message: `Listing with ID ${e} not found`
			};
			let i = this.validateListingUpdateData(t, r);
			if (!i.isValid) return {
				success: !1,
				error: nn.VALIDATION_FAILED,
				message: i.errors.join(", ")
			};
			let a = this.trackListingChanges(r, i.data), o = await g.$transaction(async (t) => {
				let o = await t.listing.update({
					where: { id: e },
					data: {
						title: i.data.title,
						description: i.data.description,
						price: i.data.price,
						updatedAt: /* @__PURE__ */ new Date()
					}
				});
				return await mn.createAuditEntry({
					unitId: r.unit?.id || "",
					listingId: e,
					action: X.UPDATE,
					previousStatus: Y.ACTIVE,
					newStatus: Y.ACTIVE,
					userId: n,
					reason: "Listing information updated",
					metadata: { changes: a }
				}, t), o;
			});
			return await this.synchronizeWithMarketplace(e, i.data), {
				success: !0,
				data: {
					listingId: o.id,
					newStatus: Y.ACTIVE
				}
			};
		} catch (e) {
			return console.error("Error updating listing information:", e), {
				success: !1,
				error: nn.VALIDATION_FAILED,
				message: `Failed to update listing: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async bulkUpdateListings(e, t, n) {
		try {
			if (!e || e.length === 0) return {
				success: !1,
				error: rn.INVALID_INPUT,
				message: "No operations provided"
			};
			let r = this.validateBulkOperations(e);
			if (r.length > 0) return {
				success: !1,
				error: rn.INVALID_INPUT,
				message: `Validation errors: ${r.join(", ")}`
			};
			let i = {
				successful: [],
				failed: [],
				summary: {
					total: e.length,
					succeeded: 0,
					failed: 0
				}
			}, a = [];
			for (let r of e) {
				let e, o = null;
				try {
					let s = await this.validateSingleOperation(r, t, n);
					if (!s.valid) throw Error(s.error);
					switch (o = s.rollbackData, r.action) {
						case "LIST":
							if (!r.listingData) throw Error("Listing data required for LIST operation");
							e = await this.createListing(r.unitId, r.listingData, t, n);
							break;
						case "UNLIST":
							e = await this.removeListing(r.unitId, t, "Bulk unlist operation");
							break;
						case "SUSPEND":
							e = await this.suspendListing(r.unitId, t, "Bulk suspend operation");
							break;
						case "MAINTENANCE_START":
							if (!r.listingData?.reason) throw Error("Maintenance reason required for MAINTENANCE_START operation");
							let i = {
								unitId: r.unitId,
								startDate: /* @__PURE__ */ new Date(),
								reason: r.listingData.reason,
								notifyTenants: !0,
								autoRestore: !1
							};
							e = await this.startMaintenanceMode(i, t);
							break;
						case "MAINTENANCE_END":
							e = await this.endMaintenanceMode(r.unitId, t, void 0, "Bulk maintenance end operation");
							break;
						default: throw Error(`Unknown operation: ${r.action}`);
					}
					e.success ? (i.successful.push(r.unitId), i.summary.succeeded++, a.push({
						operation: r,
						success: !0,
						rollbackData: o
					})) : (i.failed.push({
						unitId: r.unitId,
						error: e.message || "Operation failed"
					}), i.summary.failed++, a.push({
						operation: r,
						success: !1
					}));
				} catch (e) {
					let t = e instanceof Error ? e.message : "Unknown error";
					i.failed.push({
						unitId: r.unitId,
						error: t
					}), i.summary.failed++, a.push({
						operation: r,
						success: !1
					}), console.error(`Bulk operation failed for unit ${r.unitId}:`, e);
				}
			}
			let o = Math.ceil(e.length * .5);
			return i.summary.failed >= o && e.length > 1 ? (console.warn(`Critical failure threshold reached (${i.summary.failed}/${e.length}). Initiating rollback.`), (await this.rollbackBulkOperations(a.filter((e) => e.success), t)).success ? {
				success: !1,
				error: rn.TRANSACTION_FAILED,
				message: `Bulk operation rolled back due to high failure rate (${i.summary.failed}/${e.length} failed). All changes have been reverted.`
			} : {
				success: !1,
				error: rn.TRANSACTION_FAILED,
				message: `Bulk operation failed with high failure rate and rollback also failed. Manual intervention may be required. Original failures: ${i.summary.failed}/${e.length}`
			}) : (await mn.createBulkAuditEntry(e.map((e) => ({
				unitId: e.unitId,
				action: this.mapBulkAction(e.action),
				success: i.successful.includes(e.unitId),
				error: i.failed.find((t) => t.unitId === e.unitId)?.error
			})), t, n), {
				success: !0,
				data: i
			});
		} catch (e) {
			return console.error("Error processing bulk operations:", e), {
				success: !1,
				error: rn.TRANSACTION_FAILED,
				message: `Bulk operation failed: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	validateAndPopulateListingData(e, t) {
		let n = [], r = this.generateDefaultTitle(e.title, t), i = this.generateDefaultDescription(e.description, t), a = this.generateDefaultPrice(e.price, t);
		if (!r || r.trim().length === 0 ? n.push("Title is required") : r.trim().length < 3 ? n.push("Title must be at least 3 characters long") : r.trim().length > 100 && n.push("Title must be less than 100 characters"), !i || i.trim().length === 0 ? n.push("Description is required") : i.trim().length < 10 ? n.push("Description must be at least 10 characters long") : i.trim().length > 1e3 && n.push("Description must be less than 1000 characters"), a == null ? n.push("Price is required") : typeof a != "number" || a <= 0 ? n.push("Price must be a positive number") : a > 5e4 && n.push("Price seems unusually high, please verify"), e.availabilityDate) {
			let t = new Date(e.availabilityDate), r = /* @__PURE__ */ new Date();
			r.setFullYear(r.getFullYear() - 1), t < r && n.push("Availability date cannot be more than 1 year in the past");
		}
		return e.expirationDate && e.availabilityDate && new Date(e.expirationDate) <= new Date(e.availabilityDate) && n.push("Expiration date must be after availability date"), n.length > 0 ? {
			isValid: !1,
			errors: n
		} : {
			isValid: !0,
			data: {
				title: this.sanitizeText(r),
				description: this.sanitizeText(i),
				price: a,
				availabilityDate: e.availabilityDate,
				expirationDate: e.expirationDate
			},
			errors: []
		};
	}
	generateDefaultTitle(e, t) {
		if (e && e.trim().length > 0) return e.trim();
		let n = t.unitNumber || "Unit", r = [t.bedrooms ? `${t.bedrooms}BR` : "", t.bathrooms ? `${t.bathrooms}BA` : ""].filter(Boolean).join("/");
		return r ? `${n} - ${r}` : n;
	}
	generateDefaultDescription(e, t) {
		if (e && e.trim().length > 0) return e.trim();
		let n = [];
		return t.bedrooms && n.push(`${t.bedrooms} bedroom${t.bedrooms > 1 ? "s" : ""}`), t.bathrooms && n.push(`${t.bathrooms} bathroom${t.bathrooms > 1 ? "s" : ""}`), t.squareFootage && n.push(`${t.squareFootage} sq ft`), (n.length > 0 ? `Spacious ${n.join(", ")} unit available for rent.` : "Quality rental unit available.") + " Contact us for more details and to schedule a viewing.";
	}
	generateDefaultPrice(e, t) {
		return e ?? (t.rentAmount && t.rentAmount > 0 ? t.rentAmount : 1e3);
	}
	validateListingUpdateData(e, t) {
		return e.title === void 0 ? t.title : e.title, e.description === void 0 ? t.description : e.description, e.price === void 0 ? t.price : e.price, this.validateAndPopulateListingData({
			...e,
			unitId: t.unitId
		}, t.unit);
	}
	trackListingChanges(e, t) {
		let n = {};
		return e.title !== t.title && (n.title = {
			from: e.title,
			to: t.title
		}), e.description !== t.description && (n.description = {
			from: e.description,
			to: t.description
		}), e.price !== t.price && (n.price = {
			from: e.price,
			to: t.price
		}), n;
	}
	sanitizeText(e) {
		return e ? e.trim().replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").substring(0, 1e3) : "";
	}
	async synchronizeWithMarketplace(e, t) {
		try {
			console.log("Marketplace Synchronization:", {
				listingId: e,
				timestamp: /* @__PURE__ */ new Date(),
				action: "UPDATE",
				data: {
					title: t.title,
					description: t.description,
					price: t.price
				}
			});
		} catch (e) {
			console.error("Marketplace synchronization failed:", e);
		}
	}
	validateBulkOperations(e) {
		let t = [], n = /* @__PURE__ */ new Set();
		for (let r of e) n.has(r.unitId) && t.push(`Duplicate unit ID: ${r.unitId}`), n.add(r.unitId), r.action === $t.LIST && !r.listingData && t.push(`LIST operation for unit ${r.unitId} missing listing data`), (!r.unitId || r.unitId.trim().length === 0) && t.push("Invalid unit ID provided");
		return t;
	}
	async validateSingleOperation(e, t, n) {
		try {
			let n = await g.unit.findUnique({
				where: { id: e.unitId },
				include: {
					listing: !0,
					property: { include: { organization: { include: { users: { where: { userId: t } } } } } }
				}
			});
			return n ? n.property?.organization?.users.length ? {
				valid: !0,
				rollbackData: {
					unitId: e.unitId,
					hadListing: !!n.listing,
					listingId: n.listing?.id,
					originalListingData: n.listing ? {
						title: n.listing.title,
						description: n.listing.description,
						price: n.listing.price
					} : null
				}
			} : {
				valid: !1,
				error: `No permission to modify unit ${e.unitId}`
			} : {
				valid: !1,
				error: `Unit ${e.unitId} not found`
			};
		} catch (t) {
			return {
				valid: !1,
				error: `Validation failed for unit ${e.unitId}: ${t instanceof Error ? t.message : "Unknown error"}`
			};
		}
	}
	async suspendListing(e, t, n) {
		return this.removeListing(e, t, n);
	}
	async rollbackBulkOperations(e, t) {
		try {
			for (let n of e) {
				let { operation: e, rollbackData: r } = n;
				try {
					switch (e.action) {
						case $t.LIST:
							await this.removeListing(e.unitId, t, "Rollback: Bulk operation failed");
							break;
						case $t.UNLIST:
						case $t.SUSPEND:
							r?.hadListing && r.originalListingData && await this.createListing(e.unitId, r.originalListingData, t, "system");
							break;
					}
				} catch (t) {
					console.error(`Rollback failed for unit ${e.unitId}:`, t);
				}
			}
			return { success: !0 };
		} catch (e) {
			return console.error("Rollback operation failed:", e), {
				success: !1,
				error: e instanceof Error ? e.message : "Rollback failed"
			};
		}
	}
	async createBulkAuditEntry(e, t, n, r) {
		await mn.createBulkAuditEntry(e.map((e) => ({
			unitId: e.unitId,
			action: this.mapBulkAction(e.action),
			success: t.successful.includes(e.unitId),
			error: t.failed.find((t) => t.unitId === e.unitId)?.error
		})), n, r);
	}
	mapBulkAction(e) {
		switch (e) {
			case $t.LIST: return X.CREATE;
			case $t.UNLIST: return X.REMOVE;
			case $t.SUSPEND: return X.SUSPEND;
			case $t.MAINTENANCE_START: return X.MAINTENANCE_START;
			case $t.MAINTENANCE_END: return X.MAINTENANCE_END;
			default: return X.UPDATE;
		}
	}
	async startMaintenanceMode(e, t) {
		try {
			let n = await g.unit.findUnique({
				where: { id: e.unitId },
				include: {
					listing: !0,
					maintenanceRequests: { where: {
						id: e.maintenanceRequestId || void 0,
						status: { in: [
							"OPEN",
							"IN_PROGRESS",
							"ON_HOLD"
						] }
					} }
				}
			});
			if (!n) return {
				success: !1,
				error: "UNIT_NOT_FOUND",
				message: `Unit with ID ${e.unitId} not found`
			};
			if (e.maintenanceRequestId && !n.maintenanceRequests.find((t) => t.id === e.maintenanceRequestId)) return {
				success: !1,
				error: "VALIDATION_FAILED",
				message: `Maintenance request ${e.maintenanceRequestId} not found or not active`
			};
			if (!n.listing) return {
				success: !1,
				error: "LISTING_NOT_FOUND",
				message: `Unit ${n.unitNumber} does not have an active listing`
			};
			let r = n.listing.id, i = Y.ACTIVE;
			return on(i, Y.MAINTENANCE) ? (await g.$transaction(async (n) => {
				await mn.createAuditEntry({
					unitId: e.unitId,
					listingId: r,
					action: X.MAINTENANCE_START,
					previousStatus: i,
					newStatus: Y.MAINTENANCE,
					userId: t,
					reason: e.reason,
					metadata: {
						maintenanceRequestId: e.maintenanceRequestId,
						startDate: e.startDate,
						estimatedEndDate: e.estimatedEndDate,
						autoRestore: e.autoRestore,
						notifyTenants: e.notifyTenants
					}
				}, n), await n.listing.update({
					where: { id: r },
					data: { updatedAt: /* @__PURE__ */ new Date() }
				}), e.maintenanceRequestId && await n.maintenanceRequest.update({
					where: { id: e.maintenanceRequestId },
					data: { updatedAt: /* @__PURE__ */ new Date() }
				});
			}), await this.synchronizeMaintenanceModeWithMarketplace(r, Y.MAINTENANCE, e), e.notifyTenants && await this.notifyTenantsOfMaintenance(e.unitId, e), {
				success: !0,
				data: {
					unitId: e.unitId,
					status: Y.MAINTENANCE,
					maintenanceRequestId: e.maintenanceRequestId
				}
			}) : {
				success: !1,
				error: "INVALID_TRANSITION",
				message: `Cannot transition from ${i} to MAINTENANCE`
			};
		} catch (e) {
			return console.error("Error starting maintenance mode:", e), {
				success: !1,
				error: "VALIDATION_FAILED",
				message: `Failed to start maintenance mode: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async endMaintenanceMode(e, t, n, r) {
		try {
			let i = await g.unit.findUnique({
				where: { id: e },
				include: { listing: !0 }
			});
			if (!i) return {
				success: !1,
				error: "UNIT_NOT_FOUND",
				message: `Unit with ID ${e} not found`
			};
			if (!i.listing) return {
				success: !1,
				error: "LISTING_NOT_FOUND",
				message: `Unit ${i.unitNumber} does not have an active listing`
			};
			let a = i.listing.id, o = await this.getMaintenanceModeStatus(e);
			if (!o.isInMaintenance) return {
				success: !1,
				error: "INVALID_TRANSITION",
				message: `Unit ${i.unitNumber} is not currently in maintenance mode`
			};
			let s = n || o.previousStatus || Y.ACTIVE;
			return on(Y.MAINTENANCE, s) ? (await g.$transaction(async (n) => {
				await mn.createAuditEntry({
					unitId: e,
					listingId: a,
					action: X.MAINTENANCE_END,
					previousStatus: Y.MAINTENANCE,
					newStatus: s,
					userId: t,
					reason: r || "Maintenance completed",
					metadata: {
						maintenanceRequestId: o.maintenanceRequestId,
						endDate: /* @__PURE__ */ new Date(),
						restoredToStatus: s
					}
				}, n), await n.listing.update({
					where: { id: a },
					data: { updatedAt: /* @__PURE__ */ new Date() }
				});
			}), await this.synchronizeMaintenanceModeWithMarketplace(a, s, null), {
				success: !0,
				data: {
					unitId: e,
					status: s,
					maintenanceRequestId: o.maintenanceRequestId
				}
			}) : {
				success: !1,
				error: "INVALID_TRANSITION",
				message: `Cannot transition from MAINTENANCE to ${s}`
			};
		} catch (e) {
			return console.error("Error ending maintenance mode:", e), {
				success: !1,
				error: "VALIDATION_FAILED",
				message: `Failed to end maintenance mode: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async getMaintenanceModeStatus(e) {
		try {
			let t = (await mn.getUnitAuditHistory(e)).filter((e) => e.action === X.MAINTENANCE_START || e.action === X.MAINTENANCE_END).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime());
			if (t.length === 0) return {
				isInMaintenance: !1,
				canRestore: !1
			};
			let n = t[0];
			if (n.action !== X.MAINTENANCE_START) return {
				isInMaintenance: !1,
				canRestore: !1
			};
			let r = n.metadata || {};
			return {
				isInMaintenance: !0,
				maintenanceRequestId: r.maintenanceRequestId,
				startDate: r.startDate ? new Date(r.startDate) : n.timestamp,
				estimatedEndDate: r.estimatedEndDate ? new Date(r.estimatedEndDate) : void 0,
				reason: n.reason,
				previousStatus: n.previousStatus,
				canRestore: !0
			};
		} catch (e) {
			return console.error("Error getting maintenance mode status:", e), {
				isInMaintenance: !1,
				canRestore: !1
			};
		}
	}
	async handleMaintenanceRequestCreated(e, t, n) {
		try {
			let r = await g.maintenanceRequest.findUnique({
				where: { id: e },
				include: { unit: !0 }
			});
			if (!r || !r.unit) {
				console.warn(`Maintenance request ${e} not found or has no unit`);
				return;
			}
			if (!(r.priority === "HIGH" || r.priority === "URGENT" || r.description.toLowerCase().includes("offline") || r.description.toLowerCase().includes("unavailable"))) return;
			let i = {
				unitId: t,
				maintenanceRequestId: e,
				startDate: /* @__PURE__ */ new Date(),
				reason: `Maintenance request: ${r.title}`,
				notifyTenants: !0,
				autoRestore: !1
			}, a = await this.startMaintenanceMode(i, n);
			a.success ? console.log(`Maintenance mode started for unit ${t} due to maintenance request ${e}`) : console.warn(`Failed to start maintenance mode for unit ${t}:`, a.message);
		} catch (e) {
			console.error("Error handling maintenance request creation:", e);
		}
	}
	async handleMaintenanceRequestCompleted(e, t, n) {
		try {
			let r = await this.getMaintenanceModeStatus(t);
			if (!r.isInMaintenance || r.maintenanceRequestId !== e) return;
			let i = await this.endMaintenanceMode(t, n, void 0, `Maintenance request completed: ${e}`);
			i.success ? console.log(`Maintenance mode ended for unit ${t} after completing maintenance request ${e}`) : console.warn(`Failed to end maintenance mode for unit ${t}:`, i.message);
		} catch (e) {
			console.error("Error handling maintenance request completion:", e);
		}
	}
	async synchronizeMaintenanceModeWithMarketplace(e, t, n) {
		try {
			console.log("Maintenance Mode Marketplace Synchronization:", {
				listingId: e,
				status: t,
				timestamp: /* @__PURE__ */ new Date(),
				action: t === Y.MAINTENANCE ? "HIDE_FOR_MAINTENANCE" : "RESTORE_FROM_MAINTENANCE",
				maintenanceConfig: n ? {
					reason: n.reason,
					estimatedEndDate: n.estimatedEndDate
				} : null
			});
		} catch (e) {
			console.error("Maintenance mode marketplace synchronization failed:", e);
		}
	}
	async notifyTenantsOfMaintenance(e, t) {
		try {
			console.log("Tenant Maintenance Notification:", {
				unitId: e,
				reason: t.reason,
				startDate: t.startDate,
				estimatedEndDate: t.estimatedEndDate,
				timestamp: /* @__PURE__ */ new Date()
			});
		} catch (e) {
			console.error("Failed to notify tenants of maintenance:", e);
		}
	}
	determineInitialStatus(e) {
		if (!e) return Y.ACTIVE;
		let t = /* @__PURE__ */ new Date();
		return new Date(e) > t ? Y.COMING_SOON : Y.ACTIVE;
	}
	async processTimeBasedTransitions() {
		let e = {
			processed: 0,
			activated: 0,
			expired: 0,
			errors: []
		};
		try {
			let t = /* @__PURE__ */ new Date(), n = await g.listing.findMany({
				where: { availabilityDate: { lte: t } },
				include: { unit: !0 }
			}), r = await g.listing.findMany({
				where: { expirationDate: { lte: t } },
				include: { unit: !0 }
			});
			for (let t of n) try {
				await this.autoActivateListing(t.id, t.unitId || ""), e.activated++, e.processed++;
			} catch (n) {
				let r = `Failed to activate listing ${t.id}: ${n instanceof Error ? n.message : "Unknown error"}`;
				e.errors.push(r), console.error(r);
			}
			for (let t of r) try {
				await this.autoExpireListing(t.id, t.unitId || ""), e.expired++, e.processed++;
			} catch (n) {
				let r = `Failed to expire listing ${t.id}: ${n instanceof Error ? n.message : "Unknown error"}`;
				e.errors.push(r), console.error(r);
			}
			return console.log("Time-based transitions processed:", e), e;
		} catch (t) {
			let n = `Failed to process time-based transitions: ${t instanceof Error ? t.message : "Unknown error"}`;
			return e.errors.push(n), console.error(n), e;
		}
	}
	async autoActivateListing(e, t) {
		await g.$transaction(async (n) => {
			await n.listing.update({
				where: { id: e },
				data: { updatedAt: /* @__PURE__ */ new Date() }
			}), await mn.createAuditEntry({
				unitId: t,
				listingId: e,
				action: X.AUTO_ACTIVATE,
				previousStatus: Y.COMING_SOON,
				newStatus: Y.ACTIVE,
				userId: "system",
				reason: "Automatically activated on availability date"
			}, n);
		});
		let n = fn(t, X.AUTO_ACTIVATE, Y.ACTIVE, "system", {
			listingId: e,
			previousStatus: Y.COMING_SOON,
			reason: "Automatically activated on availability date"
		});
		await dn.handleListingStatusChange(n);
	}
	async autoExpireListing(e, t) {
		await g.$transaction(async (n) => {
			await n.listing.update({
				where: { id: e },
				data: { updatedAt: /* @__PURE__ */ new Date() }
			}), await mn.createAuditEntry({
				unitId: t,
				listingId: e,
				action: X.AUTO_EXPIRE,
				previousStatus: Y.ACTIVE,
				newStatus: Y.EXPIRED,
				userId: "system",
				reason: "Automatically expired on expiration date"
			}, n);
		});
		let n = fn(t, X.AUTO_EXPIRE, Y.EXPIRED, "system", {
			listingId: e,
			previousStatus: Y.ACTIVE,
			reason: "Automatically expired on expiration date"
		});
		await dn.handleListingStatusChange(n), await this.notifyPropertyManagerOfExpiration(e, t);
	}
	async notifyPropertyManagerOfExpiration(e, t) {
		try {
			let n = await g.listing.findUnique({
				where: { id: e },
				include: { unit: { include: { property: { include: { organization: { include: { users: { include: { user: !0 } } } } } } } } }
			});
			if (!n || !n.unit?.property?.organization) {
				console.warn(`Could not find listing or organization for expiration notification: ${e}`);
				return;
			}
			console.log("Listing Expiration Notification:", {
				listingId: e,
				unitId: t,
				unitNumber: n.unit.unitNumber,
				propertyName: n.unit.property.name,
				organizationId: n.unit.property.organizationId,
				timestamp: /* @__PURE__ */ new Date()
			});
		} catch (e) {
			console.error("Failed to notify property manager of expiration:", e);
		}
	}
	async getExpiringSoonListings(e = 7) {
		try {
			let t = /* @__PURE__ */ new Date(), n = /* @__PURE__ */ new Date();
			return n.setDate(t.getDate() + e), {
				success: !0,
				data: (await g.listing.findMany({
					where: { expirationDate: {
						gt: t,
						lte: n
					} },
					include: { unit: !0 },
					orderBy: { expirationDate: "asc" }
				})).map((e) => ({
					listingId: e.id,
					unitId: e.unitId || "",
					unitNumber: e.unit?.unitNumber || "Unknown",
					title: e.title,
					expirationDate: e.expirationDate,
					daysUntilExpiration: Math.max(0, Math.ceil((e.expirationDate.getTime() - t.getTime()) / (1e3 * 60 * 60 * 24)))
				}))
			};
		} catch (e) {
			return console.error("Error getting expiring soon listings:", e), {
				success: !1,
				error: e instanceof Error ? e.message : "Unknown error"
			};
		}
	}
	async extendListingExpiration(e, t, n, r) {
		try {
			let i = await g.listing.findUnique({
				where: { id: e },
				include: { unit: !0 }
			});
			return i ? t <= /* @__PURE__ */ new Date() ? {
				success: !1,
				error: nn.VALIDATION_FAILED,
				message: "New expiration date must be in the future"
			} : (await g.$transaction(async (a) => {
				await a.listing.update({
					where: { id: e },
					data: {
						expirationDate: t,
						updatedAt: /* @__PURE__ */ new Date()
					}
				}), await mn.createAuditEntry({
					unitId: i.unit?.id || "",
					listingId: e,
					action: X.UPDATE,
					previousStatus: Y.ACTIVE,
					newStatus: Y.ACTIVE,
					userId: n,
					reason: r || "Expiration date extended",
					metadata: {
						previousExpirationDate: i.expirationDate,
						newExpirationDate: t
					}
				}, a);
			}), {
				success: !0,
				data: {
					listingId: e,
					newStatus: Y.ACTIVE
				}
			}) : {
				success: !1,
				error: nn.LISTING_NOT_FOUND,
				message: `Listing with ID ${e} not found`
			};
		} catch (e) {
			return console.error("Error extending listing expiration:", e), {
				success: !1,
				error: nn.VALIDATION_FAILED,
				message: `Failed to extend expiration: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
}, Yn = new Jn(), Xn = class {
	async sendExpirationWarnings(e = 7) {
		let t = {
			sent: 0,
			errors: []
		};
		try {
			let n = await Yn.getExpiringSoonListings(e);
			if (!n.success || !n.data) return t.errors.push("Failed to get expiring listings"), t;
			for (let e of n.data) try {
				await this.sendExpirationNotification(e), t.sent++;
			} catch (n) {
				let r = `Failed to send notification for listing ${e.listingId}: ${n instanceof Error ? n.message : "Unknown error"}`;
				t.errors.push(r), console.error(r);
			}
			return console.log("Expiration warnings sent:", t), t;
		} catch (e) {
			let n = `Failed to send expiration warnings: ${e instanceof Error ? e.message : "Unknown error"}`;
			return t.errors.push(n), console.error(n), t;
		}
	}
	async sendExpirationNotification(e) {
		try {
			let t = await this.getPropertyManagers(e.unitId);
			if (t.length === 0) {
				console.warn(`No property managers found for unit ${e.unitId}`);
				return;
			}
			let n = {
				...e,
				propertyManagerEmails: t.map((e) => e.email)
			};
			await this.sendExpirationEmail(n), await this.createInAppNotifications(n, t), console.log("Expiration notification sent:", {
				listingId: e.listingId,
				unitNumber: e.unitNumber,
				daysUntilExpiration: e.daysUntilExpiration,
				recipientCount: t.length
			});
		} catch (e) {
			throw console.error("Error sending expiration notification:", e), e;
		}
	}
	async getPropertyManagers(e) {
		try {
			let t = await g.unit.findUnique({
				where: { id: e },
				include: { property: { include: { organization: { include: { users: {
					where: { role: "PROPERTY_MANAGER" },
					include: { user: { select: {
						id: !0,
						email: !0,
						firstName: !0,
						lastName: !0
					} } }
				} } } } } }
			});
			return t?.property?.organization?.users ? t.property.organization.users.map((e) => e.user) : [];
		} catch (e) {
			return console.error("Error getting property managers:", e), [];
		}
	}
	async sendExpirationEmail(e) {
		try {
			console.log("Email Notification (Simulated):", {
				to: e.propertyManagerEmails,
				subject: `Listing Expiring Soon: ${e.title}`,
				listingId: e.listingId,
				unitNumber: e.unitNumber,
				expirationDate: e.expirationDate,
				daysUntilExpiration: e.daysUntilExpiration
			}), await new Promise((e) => setTimeout(e, 100));
		} catch (e) {
			throw console.error("Error sending expiration email:", e), e;
		}
	}
	async createInAppNotifications(e, t) {
		try {
			console.log("In-App Notifications (Simulated):", {
				recipientIds: t.map((e) => e.id),
				type: "LISTING_EXPIRING",
				title: "Listing Expiring Soon",
				message: `Your listing "${e.title}" (Unit ${e.unitNumber}) expires in ${e.daysUntilExpiration} day(s)`,
				listingId: e.listingId,
				unitId: e.unitId,
				expirationDate: e.expirationDate
			});
		} catch (e) {
			throw console.error("Error creating in-app notifications:", e), e;
		}
	}
	async sendDailyExpirationDigest() {
		let e = {
			sent: 0,
			errors: []
		};
		try {
			let t = await this.getOrganizationsWithExpiringListings();
			for (let n of t) try {
				await this.sendOrganizationDigest(n), e.sent++;
			} catch (t) {
				let r = `Failed to send digest for organization ${n.id}: ${t instanceof Error ? t.message : "Unknown error"}`;
				e.errors.push(r), console.error(r);
			}
			return e;
		} catch (t) {
			let n = `Failed to send daily expiration digest: ${t instanceof Error ? t.message : "Unknown error"}`;
			return e.errors.push(n), console.error(n), e;
		}
	}
	async getOrganizationsWithExpiringListings() {
		try {
			let e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
			return t.setDate(e.getDate() + 30), (await g.organization.findMany({
				where: { listings: { some: { expirationDate: {
					gte: e,
					lte: t
				} } } },
				include: {
					users: {
						where: { role: "PROPERTY_MANAGER" },
						include: { user: { select: {
							id: !0,
							email: !0,
							firstName: !0,
							lastName: !0
						} } }
					},
					listings: {
						where: { expirationDate: {
							gte: e,
							lte: t
						} },
						include: { unit: { select: { unitNumber: !0 } } },
						orderBy: { expirationDate: "asc" }
					}
				}
			})).map((t) => ({
				id: t.id,
				name: t.name,
				propertyManagers: t.users.map((e) => e.user),
				expiringListings: t.listings.map((t) => ({
					listingId: t.id,
					unitNumber: t.unit?.unitNumber || "Unknown",
					title: t.title,
					expirationDate: t.expirationDate,
					daysUntilExpiration: Math.ceil((t.expirationDate.getTime() - e.getTime()) / (1e3 * 60 * 60 * 24))
				}))
			}));
		} catch (e) {
			return console.error("Error getting organizations with expiring listings:", e), [];
		}
	}
	async sendOrganizationDigest(e) {
		try {
			if (e.propertyManagers.length === 0 || e.expiringListings.length === 0) return;
			console.log("Daily Digest (Simulated):", {
				organizationId: e.id,
				organizationName: e.name,
				recipientEmails: e.propertyManagers.map((e) => e.email),
				expiringListingsCount: e.expiringListings.length,
				expiringListings: e.expiringListings.slice(0, 5),
				timestamp: /* @__PURE__ */ new Date()
			});
		} catch (e) {
			throw console.error("Error sending organization digest:", e), e;
		}
	}
}, Zn = new Xn(), Qn = class {
	async getListingPerformance(e) {
		let t = await g.listing.findUnique({
			where: { id: e },
			include: {
				unit: { include: {
					property: !0,
					tenantApplications: !0
				} },
				status: !0,
				auditEntries: { orderBy: { timestamp: "asc" } }
			}
		});
		if (!t) return null;
		let n = t.unit?.tenantApplications || [], r = t.auditEntries || [], i = t.createdAt, a = Math.ceil(((/* @__PURE__ */ new Date()).getTime() - i.getTime()) / (1e3 * 60 * 60 * 24)), o = n.length, s = o > 0 ? n.filter((e) => e.status === "APPROVED").length / o * 100 : 0, c = 0;
		n.length > 0 && (c = (n.sort((e, t) => e.createdAt.getTime() - t.createdAt.getTime())[0].createdAt.getTime() - i.getTime()) / (1e3 * 60 * 60 * 24));
		let l = r.length > 0 ? r[r.length - 1].timestamp : i, u = n.filter((e) => e.status === "APPROVED").reduce((e, n) => e + (t.price || 0), 0);
		return {
			listingId: t.id,
			unitId: t.unitId || "",
			unitNumber: t.unit?.unitNumber || "",
			propertyName: t.unit?.property?.name || "",
			daysListed: a,
			applicationCount: o,
			viewCount: 0,
			conversionRate: s,
			averageTimeToApplication: c,
			currentStatus: this.mapPrismaStatusToEnum(t.status?.name),
			totalRevenue: u,
			createdAt: i,
			lastStatusChange: l
		};
	}
	async getPropertyPerformance(e) {
		let t = await g.property.findUnique({
			where: { id: e },
			include: { units: { include: {
				listing: { include: {
					auditEntries: !0,
					status: !0
				} },
				tenantApplications: !0,
				leases: !0
			} } }
		});
		if (!t) return null;
		let n = t.units, r = n.length, i = n.filter((e) => e.listing && this.mapPrismaStatusToEnum(e.listing.status?.name) === Y.ACTIVE).length, a = r - i, o = n.reduce((e, t) => e + t.tenantApplications.length, 0), s = n.reduce((e, t) => e + t.tenantApplications.filter((e) => e.status === "APPROVED").length, 0), c = o > 0 ? s / o * 100 : 0, l = n.filter((e) => e.leases.length > 0), u = 0;
		l.length > 0 && (u = l.reduce((e, t) => {
			let n = t.listing, r = t.leases[0];
			return n && r ? e + (r.createdAt.getTime() - n.createdAt.getTime()) / (1e3 * 60 * 60 * 24) : e;
		}, 0) / l.length);
		let d = n.reduce((e, t) => e + t.tenantApplications.filter((e) => e.status === "APPROVED").reduce((e, n) => e + (t.listing?.price || 0), 0), 0), f = n.filter((e) => e.leases.some((e) => e.leaseStatus === "ACTIVE")).length, p = r > 0 ? f / r * 100 : 0;
		return {
			propertyId: t.id,
			propertyName: t.name || "",
			totalUnits: r,
			listedUnits: i,
			privateUnits: a,
			averageDaysToLease: u,
			totalApplications: o,
			conversionRate: c,
			totalRevenue: d,
			occupancyRate: p
		};
	}
	async getListingAnalytics(e) {
		let t = {};
		e?.propertyId && (t.unit = { propertyId: e.propertyId }), (e?.startDate || e?.endDate) && (t.createdAt = {}, e.startDate && (t.createdAt.gte = e.startDate), e.endDate && (t.createdAt.lte = e.endDate));
		let n = await g.listing.findMany({
			where: t,
			include: {
				unit: { include: {
					property: !0,
					tenantApplications: !0
				} },
				status: !0,
				auditEntries: !0
			}
		}), r = n.length, i = n.filter((e) => this.mapPrismaStatusToEnum(e.status?.name) === Y.ACTIVE).length, a = /* @__PURE__ */ new Date(), o = n.reduce((e, t) => e + (a.getTime() - t.createdAt.getTime()) / (1e3 * 60 * 60 * 24), 0), s = r > 0 ? o / r : 0, c = n.reduce((e, t) => e + (t.unit?.tenantApplications?.length || 0), 0), l = n.reduce((e, t) => e + (t.unit?.tenantApplications?.filter((e) => e.status === "APPROVED").length || 0), 0);
		return {
			totalListings: r,
			activeListings: i,
			averageDaysListed: s,
			totalApplications: c,
			overallConversionRate: c > 0 ? l / c * 100 : 0,
			monthlyTrends: await this.generateMonthlyTrends(e),
			statusDistribution: this.generateStatusDistribution(n),
			topPerformingProperties: await this.getTopPerformingProperties(5, e)
		};
	}
	async generateMonthlyTrends(e) {
		let t = e?.endDate || /* @__PURE__ */ new Date(), n = e?.startDate || new Date(t.getFullYear() - 1, t.getMonth(), 1), r = [], i = new Date(n);
		for (; i <= t;) {
			let t = new Date(i.getFullYear(), i.getMonth(), 1), n = new Date(i.getFullYear(), i.getMonth() + 1, 0), a = await g.listing.findMany({
				where: {
					createdAt: {
						gte: t,
						lte: n
					},
					...e?.propertyId && { unit: { propertyId: e.propertyId } }
				},
				include: { unit: { include: { tenantApplications: { where: { createdAt: {
					gte: t,
					lte: n
				} } } } } }
			}), o = a.length, s = a.reduce((e, t) => e + (t.unit?.tenantApplications?.length || 0), 0), c = a.reduce((e, t) => e + (t.unit?.tenantApplications?.filter((e) => e.status === "APPROVED").length || 0), 0), l = /* @__PURE__ */ new Date(), u = a.reduce((e, t) => e + (l.getTime() - t.createdAt.getTime()) / (1e3 * 60 * 60 * 24), 0), d = o > 0 ? u / o : 0;
			r.push({
				month: i.toLocaleString("default", { month: "long" }),
				year: i.getFullYear(),
				newListings: o,
				applications: s,
				conversions: c,
				averageDaysListed: d
			}), i.setMonth(i.getMonth() + 1);
		}
		return r;
	}
	generateStatusDistribution(e) {
		let t = {}, n = e.length;
		return e.forEach((e) => {
			let n = this.mapPrismaStatusToEnum(e.status?.name) || Y.PRIVATE;
			t[n] = (t[n] || 0) + 1;
		}), Object.entries(t).map(([e, t]) => ({
			status: e,
			count: t,
			percentage: n > 0 ? t / n * 100 : 0
		}));
	}
	async getTopPerformingProperties(e, t) {
		let n = await g.property.findMany({ include: { units: { include: {
			listing: { include: { auditEntries: !0 } },
			tenantApplications: !0,
			leases: !0
		} } } }), r = [];
		for (let e of n) {
			let t = await this.getPropertyPerformance(e.id);
			t && r.push(t);
		}
		return r.sort((e, t) => t.conversionRate - e.conversionRate).slice(0, e);
	}
	async exportListingData(e, t) {
		let n = await this.getListingAnalytics(e), r = [];
		switch (t?.includeDetails && (r = await this.getDetailedListingData(e)), t?.format || "JSON") {
			case "JSON": return this.generateEnhancedJSONExport(n, r, t);
			case "CSV": return this.generateEnhancedCSVExport(n, r, t);
			case "PDF": return this.generateEnhancedPDFExport(n, r, t);
			default: throw Error(`Unsupported export format: ${t?.format}`);
		}
	}
	async getDetailedListingData(e) {
		let t = {};
		return e?.propertyId && (t.unit = { propertyId: e.propertyId }), (e?.startDate || e?.endDate) && (t.createdAt = {}, e.startDate && (t.createdAt.gte = e.startDate), e.endDate && (t.createdAt.lte = e.endDate)), (await g.listing.findMany({
			where: t,
			include: {
				unit: { include: {
					property: !0,
					tenantApplications: !0,
					leases: !0
				} },
				status: !0,
				auditEntries: {
					orderBy: { timestamp: "desc" },
					take: 10
				}
			}
		})).map((e) => {
			let t = e.unit?.tenantApplications || [], n = e.unit?.leases || [], r = e.auditEntries || [], i = Math.ceil(((/* @__PURE__ */ new Date()).getTime() - e.createdAt.getTime()) / (1e3 * 60 * 60 * 24)), a = t.length, o = t.filter((e) => e.status === "APPROVED").length, s = a > 0 ? o / a * 100 : 0, c = n.some((e) => e.leaseStatus === "ACTIVE");
			return {
				listingId: e.id,
				unitId: e.unitId,
				unitNumber: e.unit?.unitNumber,
				propertyName: e.unit?.property?.name,
				propertyAddress: e.unit?.property?.address,
				title: e.title,
				description: e.description,
				price: e.price,
				status: e.status?.name,
				createdAt: e.createdAt,
				availabilityDate: e.availabilityDate,
				expirationDate: e.expirationDate,
				daysListed: i,
				applicationCount: a,
				approvedApplications: o,
				conversionRate: s,
				hasActiveLease: c,
				statusChanges: r.length,
				lastStatusChange: r[0]?.timestamp,
				totalRevenue: o * (e.price || 0)
			};
		});
	}
	generateEnhancedJSONExport(e, t, n) {
		let r = {
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			filters: n?.dateRange,
			summary: e,
			metadata: {
				totalRecords: t.length,
				includesDetails: n?.includeDetails || !1,
				groupedBy: n?.groupBy || "none"
			}
		};
		return n?.includeDetails && (n?.groupBy ? r.groupedData = this.groupListingData(t, n.groupBy) : r.listings = t), JSON.stringify(r, null, 2);
	}
	generateEnhancedCSVExport(e, t, n) {
		if (!n?.includeDetails || t.length === 0) return this.generateCSVExport(e);
		let r = [...[
			"Listing ID",
			"Unit Number",
			"Property Name",
			"Property Address",
			"Title",
			"Price",
			"Status",
			"Created Date",
			"Days Listed",
			"Applications",
			"Approved Apps",
			"Conversion Rate (%)",
			"Has Active Lease",
			"Total Revenue"
		]];
		return n?.customFields && r.push(...n.customFields), [r, ...t.map((e) => {
			let t = [
				e.listingId,
				e.unitNumber || "",
				e.propertyName || "",
				e.propertyAddress || "",
				e.title || "",
				e.price?.toString() || "0",
				e.status || "",
				e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "",
				e.daysListed?.toString() || "0",
				e.applicationCount?.toString() || "0",
				e.approvedApplications?.toString() || "0",
				e.conversionRate?.toFixed(2) || "0",
				e.hasActiveLease ? "Yes" : "No",
				e.totalRevenue?.toFixed(2) || "0"
			];
			return n?.customFields && n.customFields.forEach((n) => {
				t.push(e[n]?.toString() || "");
			}), t;
		})].map((e) => e.map((e) => `"${e.toString().replace(/"/g, "\"\"")}"`).join(",")).join("\n");
	}
	generateEnhancedPDFExport(e, t, n) {
		let r = `
Comprehensive Listing Performance Report
Generated: ${(/* @__PURE__ */ new Date()).toISOString()}
${n?.dateRange ? `Period: ${n.dateRange.start.toLocaleDateString()} - ${n.dateRange.end.toLocaleDateString()}` : ""}

EXECUTIVE SUMMARY
================
Total Listings: ${e.totalListings}
Active Listings: ${e.activeListings}
Average Days Listed: ${e.averageDaysListed.toFixed(1)}
Total Applications: ${e.totalApplications}
Overall Conversion Rate: ${e.overallConversionRate.toFixed(2)}%

STATUS DISTRIBUTION
==================
${e.statusDistribution.map((e) => `${e.status}: ${e.count} (${e.percentage.toFixed(1)}%)`).join("\n")}

TOP PERFORMING PROPERTIES
========================
${e.topPerformingProperties.slice(0, 5).map((e, t) => `
${t + 1}. ${e.propertyName}
   - Total Units: ${e.totalUnits}
   - Listed Units: ${e.listedUnits}
   - Conversion Rate: ${e.conversionRate.toFixed(2)}%
   - Total Revenue: $${e.totalRevenue.toFixed(2)}
   - Occupancy Rate: ${e.occupancyRate.toFixed(2)}%
`).join("")}

MONTHLY TRENDS
=============
${e.monthlyTrends.map((e) => `${e.month} ${e.year}: ${e.newListings} new listings, ${e.applications} applications, ${e.conversions} conversions`).join("\n")}
        `;
		return n?.includeDetails && t.length > 0 && (r += `

DETAILED LISTING ANALYSIS
========================
${t.slice(0, 20).map((e) => `
Listing: ${e.title} (${e.unitNumber})
Property: ${e.propertyName}
Price: $${e.price}
Status: ${e.status}
Days Listed: ${e.daysListed}
Applications: ${e.applicationCount} (${e.conversionRate.toFixed(1)}% conversion)
Revenue: $${e.totalRevenue.toFixed(2)}
---
`).join("")}
            `), Buffer.from(r, "utf-8");
	}
	groupListingData(e, t) {
		let n = {};
		return e.forEach((e) => {
			let r;
			switch (t) {
				case "property":
					r = e.propertyName || "Unknown Property";
					break;
				case "status":
					r = e.status || "Unknown Status";
					break;
				case "month":
					let t = new Date(e.createdAt);
					r = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}`;
					break;
				default: r = "All";
			}
			n[r] || (n[r] = []), n[r].push(e);
		}), n;
	}
	generateCSVExport(e) {
		return e.totalListings > 0 ? this.generateDetailedCSVFromAnalytics(e) : [[
			"Property Name",
			"Total Units",
			"Listed Units",
			"Private Units",
			"Total Applications",
			"Conversion Rate (%)",
			"Average Days to Lease",
			"Total Revenue",
			"Occupancy Rate (%)"
		], ...e.topPerformingProperties.map((e) => [
			e.propertyName,
			e.totalUnits.toString(),
			e.listedUnits.toString(),
			e.privateUnits.toString(),
			e.totalApplications.toString(),
			e.conversionRate.toFixed(2),
			e.averageDaysToLease.toFixed(1),
			e.totalRevenue.toFixed(2),
			e.occupancyRate.toFixed(2)
		])].map((e) => e.join(",")).join("\n");
	}
	generateDetailedCSVFromAnalytics(e) {
		let t = [
			"Unit Number",
			"Property Name",
			"Title",
			"Price",
			"Status",
			"Days Listed",
			"Applications",
			"Conversion Rate (%)"
		], n = e.topPerformingProperties.flatMap((e) => Array(e.listedUnits).fill(null).map((t, n) => [
			`Unit-${n + 1}`,
			e.propertyName,
			"Listing",
			"0",
			"ACTIVE",
			"0",
			"0",
			"0"
		]));
		return n.length === 0 ? t.join(",") + "\n" : [t, ...n].map((e) => e.join(",")).join("\n");
	}
	generatePDFExport(e, t) {
		let n = `
Listing Performance Report
Generated: ${(/* @__PURE__ */ new Date()).toISOString()}

Summary:
- Total Listings: ${e.totalListings}
- Active Listings: ${e.activeListings}
- Average Days Listed: ${e.averageDaysListed.toFixed(1)}
- Total Applications: ${e.totalApplications}
- Overall Conversion Rate: ${e.overallConversionRate.toFixed(2)}%

Top Performing Properties:
${e.topPerformingProperties.map((e) => `- ${e.propertyName}: ${e.conversionRate.toFixed(2)}% conversion rate`).join("\n")}
        `;
		return Buffer.from(n, "utf-8");
	}
	mapPrismaStatusToEnum(e) {
		switch (e?.toUpperCase()) {
			case "ACTIVE": return Y.ACTIVE;
			case "PRIVATE": return Y.PRIVATE;
			case "SUSPENDED": return Y.SUSPENDED;
			case "PENDING": return Y.PENDING;
			case "EXPIRED": return Y.EXPIRED;
			case "MAINTENANCE": return Y.MAINTENANCE;
			case "COMING_SOON": return Y.COMING_SOON;
			default: return Y.PRIVATE;
		}
	}
}, $n = new Qn(), er = class {
	static SQL_INJECTION_PATTERNS = [
		/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi,
		/(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi,
		/(--|\/\*|\*\/|;)/g,
		/(\b(CHAR|NCHAR|VARCHAR|NVARCHAR)\s*\()/gi,
		/(\b(CAST|CONVERT|SUBSTRING|ASCII|CHAR_LENGTH)\s*\()/gi
	];
	static containsSQLInjection(e) {
		return this.SQL_INJECTION_PATTERNS.some((t) => t.test(e));
	}
	static sanitize(e) {
		if (this.containsSQLInjection(e)) throw Error("Potential SQL injection detected");
		return e.replace(/['"\\]/g, "");
	}
}, tr = class {
	static XSS_PATTERNS = [
		/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
		/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
		/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
		/<link\b[^>]*>/gi,
		/<meta\b[^>]*>/gi,
		/javascript:/gi,
		/vbscript:/gi,
		/on\w+\s*=/gi,
		/<\s*\/?\s*(script|iframe|object|embed|link|meta|form|input|button)\b[^>]*>/gi
	];
	static ALLOWED_TAGS = [
		"p",
		"br",
		"strong",
		"em",
		"u",
		"i",
		"b",
		"ul",
		"ol",
		"li",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6"
	];
	static containsXSS(e) {
		return this.XSS_PATTERNS.some((t) => t.test(e));
	}
	static sanitizeHTML(e) {
		let t = e;
		return this.XSS_PATTERNS.forEach((e) => {
			t = t.replace(e, "");
		}), t = t.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (e, t) => this.ALLOWED_TAGS.includes(t.toLowerCase()) ? `<${t.toLowerCase()}>` : ""), t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t;
	}
	static stripHTML(e) {
		return e.replace(/<[^>]*>/g, "");
	}
}, nr = class {
	static PATH_TRAVERSAL_PATTERNS = [
		/\.\./g,
		/\.\\/g,
		/\.\//g,
		/~\//g,
		/\\/g,
		/\/\//g
	];
	static containsPathTraversal(e) {
		return this.PATH_TRAVERSAL_PATTERNS.some((t) => t.test(e));
	}
	static sanitizePath(e) {
		if (this.containsPathTraversal(e)) throw Error("Path traversal attempt detected");
		return e.replace(/[^a-zA-Z0-9._-]/g, "").substring(0, 255);
	}
}, rr = class {
	static sanitizeText(e, t = {}) {
		let { maxLength: n = 5e3, allowHTML: r = !1, strictMode: i = !1 } = t;
		if (typeof e != "string") throw Error("Input must be a string");
		let a = e.trim();
		if (a.length > n && (a = a.substring(0, n)), a = a.replace(/[\x00-\x1F\x7F]/g, ""), er.containsSQLInjection(a)) {
			if (i) throw Error("Potential SQL injection detected");
			a = er.sanitize(a);
		}
		if (r) {
			if (tr.containsXSS(a)) {
				if (i) throw Error("Potential XSS attack detected");
				a = tr.sanitizeHTML(a);
			}
		} else a = tr.stripHTML(a);
		if (nr.containsPathTraversal(a)) {
			if (i) throw Error("Path traversal attempt detected");
			nr.PATH_TRAVERSAL_PATTERNS.forEach((e) => {
				a = a.replace(e, "");
			});
		}
		return a;
	}
	static sanitizeNumber(e, t = {}) {
		let { min: n = -(2 ** 53 - 1), max: r = 2 ** 53 - 1, decimals: i = 2, allowNegative: a = !0 } = t, o = Number(e);
		if (isNaN(o) || !isFinite(o) || !a && o < 0 || o < n || o > r) return null;
		let s = 10 ** i;
		return Math.round(o * s) / s;
	}
	static sanitizeEmail(e) {
		if (typeof e != "string") return null;
		let t = this.sanitizeText(e, {
			maxLength: 254,
			strictMode: !0
		});
		return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t) ? t.toLowerCase() : null;
	}
	static sanitizePhone(e) {
		if (typeof e != "string") return null;
		let t = e.replace(/\D/g, "");
		return t.length < 10 || t.length > 15 ? null : t;
	}
	static sanitizeURL(e) {
		if (typeof e != "string") return null;
		let t = this.sanitizeText(e, {
			maxLength: 2048,
			strictMode: !0
		});
		try {
			let e = new URL(t);
			return ["http:", "https:"].includes(e.protocol) ? e.toString() : null;
		} catch {
			return null;
		}
	}
	static sanitizeDate(e) {
		if (e instanceof Date) return isNaN(e.getTime()) ? null : e;
		if (typeof e == "string" || typeof e == "number") {
			let t = new Date(e);
			return isNaN(t.getTime()) ? null : t;
		}
		return null;
	}
	static sanitizeBoolean(e) {
		if (typeof e == "boolean") return e;
		if (typeof e == "string") {
			let t = e.toLowerCase().trim();
			return [
				"true",
				"1",
				"yes",
				"on"
			].includes(t);
		}
		return typeof e == "number" ? e !== 0 : !1;
	}
	static sanitizeArray(e, t) {
		return Array.isArray(e) ? e.map((e) => {
			try {
				return t(e);
			} catch {
				return null;
			}
		}).filter((e) => e !== null) : [];
	}
	static sanitizeObject(e, t) {
		if (typeof e != "object" || !e || Array.isArray(e)) throw Error("Input must be an object");
		let n = {};
		for (let [r, i] of Object.entries(t)) if (r in e) try {
			n[r] = i(e[r]);
		} catch (e) {
			let t = e instanceof Error ? e.message : String(e);
			throw Error(`Sanitization failed for field '${r}': ${t}`);
		}
		return n;
	}
}, ir = class {
	static auditInput(e, t) {
		let n = [], r = "LOW", i = JSON.stringify(e);
		return er.containsSQLInjection(i) && (n.push("Potential SQL injection detected"), r = "CRITICAL"), tr.containsXSS(i) && (n.push("Potential XSS attack detected"), r = r === "CRITICAL" ? "CRITICAL" : "HIGH"), nr.containsPathTraversal(i) && (n.push("Path traversal attempt detected"), r = r === "CRITICAL" ? "CRITICAL" : "HIGH"), i.length > 1e5 && (n.push("Unusually large input detected"), r = r === "CRITICAL" ? "CRITICAL" : "MEDIUM"), /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(i) && (n.push("Control characters detected"), r = r === "CRITICAL" ? "CRITICAL" : "MEDIUM"), {
			passed: n.length === 0,
			violations: n,
			riskLevel: r
		};
	}
}, ar = class e {
	static instance;
	logger;
	rateLimitStore = /* @__PURE__ */ new Map();
	constructor() {
		this.logger = vn.getInstance();
	}
	static getInstance() {
		return e.instance ||= new e(), e.instance;
	}
	checkRateLimit(e, t) {
		let n = Pn(t);
		if (!n) return { allowed: !0 };
		let r = Date.now(), i = `${e}:${t}`, a = this.rateLimitStore.get(i);
		return !a || r > a.resetTime ? (this.rateLimitStore.set(i, {
			count: 1,
			resetTime: r + n.windowMs
		}), {
			allowed: !0,
			resetTime: r + n.windowMs
		}) : a.count >= n.maxRequests ? {
			allowed: !1,
			resetTime: a.resetTime
		} : (a.count += 1, this.rateLimitStore.set(i, a), {
			allowed: !0,
			resetTime: a.resetTime
		});
	}
	async validateListingOperation(e) {
		let t = [], n = e.data || {}, r = { ...n }, i = e.operation.includes("create"), a = e.operation.includes("update"), o = e.operation.includes("status");
		if (e.operation.includes("bulk") && (Tn.bulk.requiredFields.forEach((e) => {
			e in n || t.push(`Missing required field: ${e}`);
		}), Array.isArray(n.unitIds) ? (n.unitIds.length === 0 && t.push("unitIds must include at least one unit"), n.unitIds.length > Tn.bulk.maxUnits && t.push(`unitIds cannot exceed ${Tn.bulk.maxUnits}`)) : n.unitIds !== void 0 && t.push("unitIds must be an array"), n.action && !Tn.bulk.allowedActions.includes(n.action) && t.push("Invalid bulk action")), i || a || o) {
			let e = Tn.listing;
			if (i || "title" in n) {
				let i = typeof n.title == "string" ? n.title.trim() : "";
				e.title.required && !i && t.push("Title is required"), i && (i.length < e.title.minLength || i.length > e.title.maxLength) && t.push(`Title must be between ${e.title.minLength} and ${e.title.maxLength} characters`), r.title = i;
			}
			if (i || "description" in n) {
				let i = typeof n.description == "string" ? n.description.trim() : "";
				e.description.required && !i && t.push("Description is required"), i && (i.length < e.description.minLength || i.length > e.description.maxLength) && t.push(`Description must be between ${e.description.minLength} and ${e.description.maxLength} characters`), r.description = i;
			}
			if (i || "price" in n) {
				let i = typeof n.price == "number" ? n.price : Number(n.price);
				Number.isNaN(i) ? t.push("Price must be a number") : ((i < e.price.min || i > e.price.max) && t.push(`Price must be between ${e.price.min} and ${e.price.max}`), r.price = i);
			}
			if (n.availabilityDate) {
				let e = new Date(n.availabilityDate);
				Number.isNaN(e.getTime()) ? t.push("availabilityDate is invalid") : r.availabilityDate = e;
			}
			if (n.expirationDate) {
				let e = new Date(n.expirationDate);
				Number.isNaN(e.getTime()) ? t.push("expirationDate is invalid") : r.expirationDate = e;
			}
		}
		(!e.unitIds || e.unitIds.length === 0) && (i || a || o) && t.push("At least one unitId is required");
		let s = t.length === 0;
		return this.logger.logValidation(e.operation, s, t, {
			userId: e.userId,
			userRole: e.userRole
		}), {
			isValid: s,
			errors: t,
			sanitizedData: s ? r : void 0
		};
	}
}, or = class {
	validationService;
	logger;
	abusePreventionService;
	constructor() {
		this.validationService = ar.getInstance(), this.logger = vn.getInstance(), this.abusePreventionService = Fn.getInstance();
	}
	async validateRequest(e, t) {
		let n = Date.now();
		try {
			let r = this.extractIP(e), i = e.headers.get("user-agent") || "unknown", a = parseInt(e.headers.get("content-length") || "0");
			if (t.preventAbuse) {
				let e = this.abusePreventionService.checkIPRateLimit(r);
				if (!e.allowed) return {
					success: !1,
					response: this.createRateLimitResponse(e)
				};
			}
			let o = await this.checkAuthentication(e, t.requireAuth);
			if (!o.success) return t.preventAbuse && o.context && this.abusePreventionService.recordFailedAttempt(o.context.userId, r, "Authentication failed"), {
				success: !1,
				response: o.response
			};
			let s = {
				...o.context,
				ip: r,
				userAgent: i
			};
			if (t.preventAbuse) {
				let e = this.abusePreventionService.isBanned(s.userId, r);
				if (e.banned) return {
					success: !1,
					response: this.createBanResponse(e)
				};
			}
			if (t.requiredRole) {
				let e = this.checkAuthorization(s, t.requiredRole);
				if (!e.success) return t.preventAbuse && this.abusePreventionService.recordFailedAttempt(s.userId, r, "Authorization failed"), {
					success: !1,
					response: e.response
				};
			}
			if (t.preventAbuse) {
				let e = this.abusePreventionService.detectSuspiciousActivity(s.userId, r, {
					operation: t.operation,
					payloadSize: a,
					userAgent: i,
					requestCount: 1,
					timeWindow: 6e4
				});
				if (e.suspicious && e.severity === "CRITICAL") return {
					success: !1,
					response: Qt.NextResponse.json({
						error: "Suspicious activity detected",
						reasons: e.reasons
					}, { status: 403 })
				};
			}
			if (t.checkRateLimit) {
				let e = this.checkRateLimit(s.userId, t.operation);
				if (!e.success) return {
					success: !1,
					response: e.response
				};
			}
			let c;
			if (t.validateData && e.method !== "GET") {
				let n = await this.validateRequestData(e, s, t);
				if (!n.success) return t.preventAbuse && this.abusePreventionService.recordFailedAttempt(s.userId, r, "Data validation failed"), {
					success: !1,
					response: n.response
				};
				c = n.sanitizedData;
			}
			if (t.auditInput && c) {
				let e = ir.auditInput(c, {
					operation: t.operation,
					userId: s.userId,
					timestamp: /* @__PURE__ */ new Date()
				});
				if (!e.passed && e.riskLevel === "CRITICAL") return this.logger.error(Q.AUDIT, "Critical security audit failure", void 0, {
					userId: s.userId,
					ip: r,
					violations: e.violations,
					riskLevel: e.riskLevel
				}), {
					success: !1,
					response: Qt.NextResponse.json({
						error: "Security audit failed",
						violations: e.violations
					}, { status: 400 })
				};
			}
			return t.logAccess && await this.logAccess(e, s, t.operation, Date.now() - n), {
				success: !0,
				context: s,
				sanitizedData: c
			};
		} catch (e) {
			return this.logger.error(Q.ERROR_RECOVERY, "Security middleware error", e instanceof Error ? e : void 0, {
				operation: t.operation,
				processingTime: Date.now() - n
			}), {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Internal security error" }, { status: 500 }))
			};
		}
	}
	extractIP(e) {
		return e.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || e.headers.get("x-real-ip") || e.headers.get("cf-connecting-ip") || "unknown";
	}
	async checkAuthentication(e, t = !0) {
		if (!t) return {
			success: !0,
			context: {
				userId: "anonymous",
				userRole: Sn.TENANT,
				isAuthenticated: !1,
				ip: this.extractIP(e),
				userAgent: e.headers.get("user-agent") || "unknown"
			}
		};
		try {
			let t = await Et(e);
			if (!t) return {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Authentication required" }, { status: 401 }))
			};
			let n = t.id || t.email || "unknown", r = t.role || Sn.TENANT;
			return !n || n === "unknown" ? {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Invalid session data" }, { status: 401 }))
			} : {
				success: !0,
				context: {
					userId: n,
					userRole: r,
					isAuthenticated: !0,
					ip: this.extractIP(e),
					userAgent: e.headers.get("user-agent") || "unknown"
				}
			};
		} catch (e) {
			return this.logger.error(Q.PERMISSION, "Authentication check failed", e instanceof Error ? e : void 0), {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Authentication failed" }, { status: 401 }))
			};
		}
	}
	checkAuthorization(e, t) {
		let n = {
			[Sn.TENANT]: 0,
			[Sn.VENDOR]: 1,
			[Sn.PROPERTY_MANAGER]: 2,
			[Sn.ADMIN]: 3,
			[Sn.SUPER_ADMIN]: 4
		};
		return (n[e.userRole] || 0) < (n[t] || 0) ? {
			success: !1,
			response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Insufficient permissions" }, { status: 403 }))
		} : { success: !0 };
	}
	checkRateLimit(e, t) {
		let n = this.validationService.checkRateLimit(e, t);
		if (!n.allowed) {
			let e = n.resetTime || Date.now() + 6e4, t = Math.ceil((e - Date.now()) / 1e3);
			return {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({
					error: "Rate limit exceeded",
					retryAfter: t,
					resetTime: new Date(e).toISOString()
				}, {
					status: 429,
					headers: {
						"Retry-After": t.toString(),
						"X-RateLimit-Remaining": "0",
						"X-RateLimit-Reset": e.toString()
					}
				}))
			};
		}
		return { success: !0 };
	}
	async validateRequestData(e, t, n) {
		try {
			let r;
			try {
				let t = await e.text();
				if (t.length > 1024 * 1024) return {
					success: !1,
					response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Request payload too large" }, { status: 413 }))
				};
				r = t ? JSON.parse(t) : {};
			} catch {
				return {
					success: !1,
					response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 }))
				};
			}
			let i = new URL(e.url), a = r.unitIds || (i.pathname.includes("/units/") ? [i.pathname.split("/units/")[1]] : []), o = await this.validationService.validateListingOperation({
				userId: t.userId,
				userRole: t.userRole,
				operation: n.operation,
				data: r,
				unitIds: a
			});
			return o.isValid ? {
				success: !0,
				sanitizedData: o.sanitizedData
			} : {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({
					error: "Validation failed",
					details: o.errors
				}, { status: 400 }))
			};
		} catch (e) {
			return this.logger.error(Q.VALIDATION, "Data validation failed", e instanceof Error ? e : void 0, { operation: n.operation }), {
				success: !1,
				response: this.createSecurityHeaders(Qt.NextResponse.json({ error: "Data validation error" }, { status: 400 }))
			};
		}
	}
	async logAccess(e, t, n, r) {
		try {
			let i = new URL(e.url);
			this.logger.info(Q.LISTING_OPERATION, "API access", {
				userId: t.userId,
				userRole: t.userRole,
				operation: n,
				method: e.method,
				path: i.pathname,
				query: Object.fromEntries(i.searchParams),
				userAgent: t.userAgent,
				ip: t.ip,
				processingTime: r,
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			});
		} catch (e) {
			console.error("Access logging failed:", e);
		}
	}
	createRateLimitResponse(e) {
		let t = e.resetTime || Date.now() + 6e4, n = Math.ceil((t - Date.now()) / 1e3);
		return this.createSecurityHeaders(Qt.NextResponse.json({
			error: "IP rate limit exceeded",
			retryAfter: n,
			resetTime: new Date(t).toISOString()
		}, {
			status: 429,
			headers: {
				"Retry-After": n.toString(),
				"X-RateLimit-Remaining": "0",
				"X-RateLimit-Reset": t.toString()
			}
		}));
	}
	createBanResponse(e) {
		return this.createSecurityHeaders(Qt.NextResponse.json({
			error: "Access denied",
			reason: e.reason,
			expiresAt: e.expiresAt?.toISOString(),
			permanent: e.permanent
		}, { status: 403 }));
	}
	createSecurityHeaders(e) {
		return Object.entries(En).forEach(([t, n]) => {
			e.headers.set(t, n);
		}), e;
	}
};
function sr(e) {
	let t = new or();
	return async (n) => await t.validateRequest(n, e);
}
function cr(e, t) {
	return async (n, ...r) => {
		let i = await new or().validateRequest(n, {
			...t,
			preventAbuse: !0,
			auditInput: !0
		});
		if (!i.success) return i.response;
		try {
			let t = await e(n, i.context, i.sanitizedData);
			return Object.entries(En).forEach(([e, n]) => {
				t.headers.set(e, n);
			}), t;
		} catch (e) {
			return vn.getInstance().error(Q.ERROR_RECOVERY, "Handler execution failed", e instanceof Error ? e : void 0, {
				operation: t.operation,
				userId: i.context?.userId
			}), Qt.NextResponse.json({ error: "Internal server error" }, { status: 500 });
		}
	};
}
//#endregion
//#region src/lib/listing-status-service.ts
var lr = /* @__PURE__ */ new Map();
async function ur() {
	let e = [
		{
			name: "PRIVATE",
			description: "Unit exists but not listed"
		},
		{
			name: "ACTIVE",
			description: "Listed and visible in marketplace"
		},
		{
			name: "SUSPENDED",
			description: "Temporarily hidden from marketplace"
		},
		{
			name: "PENDING",
			description: "Listing created but not yet active"
		},
		{
			name: "EXPIRED",
			description: "Listing has expired"
		},
		{
			name: "MAINTENANCE",
			description: "Temporarily removed for maintenance"
		},
		{
			name: "COMING_SOON",
			description: "Listed but not yet available"
		}
	], t = /* @__PURE__ */ new Map();
	for (let { name: n, description: r } of e) {
		let e = n, i = await g.listingStatus.upsert({
			where: { name: n },
			update: { description: r },
			create: {
				name: n,
				description: r
			}
		});
		t.set(e, i.id), lr.set(e, i.id);
	}
	return t;
}
async function dr(e) {
	let t = lr.get(e);
	if (t) return t;
	let n = await g.listingStatus.findFirst({ where: { name: { equals: e } } });
	if (n) return lr.set(e, n.id), n.id;
	let r = await g.listingStatus.create({ data: {
		name: e,
		description: hr(e)
	} });
	return lr.set(e, r.id), r.id;
}
async function fr() {
	let e = await g.listingStatus.findMany(), t = {};
	for (let n of e) {
		let e = n.name;
		t[e] = n.id, lr.set(e, n.id);
	}
	let n = [
		Y.PRIVATE,
		Y.ACTIVE,
		Y.SUSPENDED,
		Y.PENDING,
		Y.EXPIRED,
		Y.MAINTENANCE,
		Y.COMING_SOON
	];
	for (let e of n) t[e] || (t[e] = await dr(e));
	return t;
}
function pr() {
	lr.clear();
}
function mr(e) {
	if (!e) return Y.ACTIVE;
	let t = /* @__PURE__ */ new Date();
	return new Date(e) > t ? Y.COMING_SOON : Y.ACTIVE;
}
function hr(e) {
	switch (e) {
		case Y.PRIVATE: return "Unit exists but not listed";
		case Y.ACTIVE: return "Listed and visible in marketplace";
		case Y.SUSPENDED: return "Temporarily hidden from marketplace";
		case Y.PENDING: return "Listing created but not yet active";
		case Y.EXPIRED: return "Listing has expired";
		case Y.MAINTENANCE: return "Temporarily removed for maintenance";
		case Y.COMING_SOON: return "Listed but not yet available";
		default: return "Unknown listing status";
	}
}
function gr(e, t) {
	return {
		[Y.PRIVATE]: [
			Y.ACTIVE,
			Y.PENDING,
			Y.COMING_SOON
		],
		[Y.PENDING]: [
			Y.ACTIVE,
			Y.PRIVATE,
			Y.COMING_SOON
		],
		[Y.COMING_SOON]: [
			Y.ACTIVE,
			Y.PRIVATE,
			Y.SUSPENDED
		],
		[Y.ACTIVE]: [
			Y.PRIVATE,
			Y.SUSPENDED,
			Y.EXPIRED,
			Y.MAINTENANCE
		],
		[Y.SUSPENDED]: [
			Y.ACTIVE,
			Y.PRIVATE,
			Y.MAINTENANCE
		],
		[Y.EXPIRED]: [
			Y.ACTIVE,
			Y.PRIVATE,
			Y.COMING_SOON
		],
		[Y.MAINTENANCE]: [
			Y.ACTIVE,
			Y.PRIVATE,
			Y.SUSPENDED
		]
	}[e]?.includes(t) ?? !1;
}
//#endregion
//#region src/lib/maintenance-listing-integration.ts
var _r = class {
	async handleMaintenanceStatusChange(e, t, n) {
		try {
			let r = await g.maintenanceRequest.findUnique({
				where: { id: e },
				include: { unit: { include: { listing: !0 } } }
			});
			if (!r || !r.unit) {
				console.warn(`Maintenance request ${e} not found or has no unit`);
				return;
			}
			let i = r.unit.id;
			switch (t) {
				case m.MaintenanceRequestStatus.IN_PROGRESS:
				case m.MaintenanceRequestStatus.ON_HOLD:
					await this.evaluateMaintenanceModeStart(r, n);
					break;
				case m.MaintenanceRequestStatus.COMPLETED:
					await Yn.handleMaintenanceRequestCompleted(e, i, n);
					break;
				case m.MaintenanceRequestStatus.CANCELLED:
					await Yn.handleMaintenanceRequestCompleted(e, i, n);
					break;
			}
		} catch (e) {
			console.error("Error handling maintenance status change:", e);
		}
	}
	async evaluateMaintenanceModeStart(e, t) {
		e.unit.listing && this.doesMaintenanceRequireOffline(e) && await Yn.handleMaintenanceRequestCreated(e.id, e.unit.id, t);
	}
	doesMaintenanceRequireOffline(e) {
		if (e.priority === "HIGH" || e.priority === "URGENT") return !0;
		let t = (e.description || "").toLowerCase(), n = (e.title || "").toLowerCase();
		return [
			"offline",
			"unavailable",
			"not available",
			"out of service",
			"major repair",
			"renovation",
			"remodel",
			"flooring",
			"painting",
			"electrical work",
			"plumbing work",
			"hvac replacement",
			"appliance replacement",
			"kitchen",
			"bathroom",
			"water damage",
			"mold",
			"pest control",
			"fumigation",
			"inspection"
		].some((e) => t.includes(e) || n.includes(e));
	}
	async getMaintenanceListingStatus(e) {
		try {
			let t = await Yn.getMaintenanceModeStatus(e);
			return {
				isInMaintenance: t.isInMaintenance,
				maintenanceRequestId: t.maintenanceRequestId,
				canRestore: t.canRestore,
				estimatedEndDate: t.estimatedEndDate
			};
		} catch (e) {
			return console.error("Error getting maintenance listing status:", e), {
				isInMaintenance: !1,
				canRestore: !1
			};
		}
	}
	async startMaintenanceModeManually(e, t, n, r, i) {
		try {
			let a = {
				unitId: e,
				startDate: /* @__PURE__ */ new Date(),
				reason: t,
				estimatedEndDate: r,
				maintenanceRequestId: i,
				notifyTenants: !0,
				autoRestore: !1
			}, o = await Yn.startMaintenanceMode(a, n);
			return {
				success: o.success,
				message: o.success ? "Maintenance mode started successfully" : o.message
			};
		} catch (e) {
			return console.error("Error starting maintenance mode manually:", e), {
				success: !1,
				message: `Failed to start maintenance mode: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async endMaintenanceModeManually(e, t, n) {
		try {
			let r = await Yn.endMaintenanceMode(e, t, void 0, n || "Maintenance completed manually");
			return {
				success: r.success,
				message: r.success ? "Maintenance mode ended successfully" : r.message
			};
		} catch (e) {
			return console.error("Error ending maintenance mode manually:", e), {
				success: !1,
				message: `Failed to end maintenance mode: ${e instanceof Error ? e.message : "Unknown error"}`
			};
		}
	}
	async getUnitsInMaintenanceMode(e) {
		try {
			let t = await g.unit.findMany({
				where: {
					property: { organizationId: e },
					listing: { isNot: null }
				},
				include: {
					property: !0,
					listing: !0
				}
			}), n = [];
			for (let e of t) {
				let t = await Yn.getMaintenanceModeStatus(e.id);
				t.isInMaintenance && n.push({
					unitId: e.id,
					unitNumber: e.unitNumber,
					propertyName: e.property.name || "Unknown Property",
					maintenanceRequestId: t.maintenanceRequestId,
					startDate: t.startDate || /* @__PURE__ */ new Date(),
					estimatedEndDate: t.estimatedEndDate,
					reason: t.reason || "Maintenance in progress"
				});
			}
			return n;
		} catch (e) {
			return console.error("Error getting units in maintenance mode:", e), [];
		}
	}
}, vr = new _r(), yr = async () => {
	try {
		let e = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/my-property`, { next: { revalidate: 60 } });
		if (!e.ok) throw console.error(`API Error: ${e.status} ${e.statusText} for ${e.url}`), Error("Failed to fetch Propertys");
		return await e.json() || [];
	} catch (e) {
		return console.error("fetchProperty:", e), [];
	}
}, br = class {
	async deactivateProperty(e, t) {
		let n = {
			success: !1,
			propertyId: e.propertyId,
			unitsAffected: 0,
			listingsRemoved: 0,
			applicationsAffected: 0,
			notificationsSent: 0,
			errors: [],
			canRecover: !1
		};
		try {
			let r = await this.getPropertyWithRelatedData(e.propertyId);
			if (!r) return n.errors.push(`Property ${e.propertyId} not found`), n;
			if (r.availabilityStatus === "DEACTIVATED") return n.errors.push("Property is already deactivated"), n;
			let i = await this.collectRecoveryData(r, t);
			if (n.recoveryData = i, n.canRecover = !0, await g.$transaction(async (a) => {
				await a.property.update({
					where: { id: e.propertyId },
					data: { availabilityStatus: "DEACTIVATED" }
				});
				let o = r.units.filter((e) => e.listing);
				n.unitsAffected = r.units.length, n.listingsRemoved = o.length;
				for (let r of o) if (r.listing) {
					let i = await Yn.removeListing(r.id, t, `Property deactivated: ${e.reason}`);
					i.success || n.errors.push(`Failed to remove listing for unit ${r.unitNumber}: ${i.message}`);
				}
				n.applicationsAffected = (await this.handleAffectedApplications(r.units.map((e) => e.id), e.reason, a)).length, await mn.createAuditEntry({
					unitId: "PROPERTY_LEVEL",
					action: X.REMOVE,
					previousStatus: Y.ACTIVE,
					newStatus: Y.PRIVATE,
					userId: t,
					reason: `Property deactivated: ${e.reason}`,
					metadata: {
						propertyId: e.propertyId,
						propertyName: r.name,
						unitsAffected: n.unitsAffected,
						listingsRemoved: n.listingsRemoved,
						applicationsAffected: n.applicationsAffected,
						deactivationType: "PROPERTY_DEACTIVATION",
						recoveryDataId: i.propertyId
					}
				}, a);
			}), e.notifyPropertyManagers) {
				let t = await this.notifyPropertyManagers(r, e, n);
				n.notificationsSent += t;
			}
			if (e.notifyTenants) {
				let t = await this.notifyAffectedTenants(r, e, n);
				n.notificationsSent += t;
			}
			return n.success = !0, console.log("Property deactivation completed:", {
				propertyId: e.propertyId,
				unitsAffected: n.unitsAffected,
				listingsRemoved: n.listingsRemoved,
				applicationsAffected: n.applicationsAffected
			}), n;
		} catch (e) {
			return console.error("Error deactivating property:", e), n.errors.push(e instanceof Error ? e.message : "Unknown error"), n;
		}
	}
	async recoverProperty(e, t, n, r) {
		let i = {
			success: !1,
			propertyId: e,
			unitsAffected: 0,
			listingsRemoved: 0,
			applicationsAffected: 0,
			notificationsSent: 0,
			errors: [],
			canRecover: !1
		};
		try {
			let a = await g.property.findUnique({
				where: { id: e },
				include: {
					units: !0,
					organization: { include: { users: {
						where: { role: "PROPERTY_MANAGER" },
						include: { user: !0 }
					} } }
				}
			});
			return a ? a.availabilityStatus === "DEACTIVATED" ? (await g.$transaction(async (o) => {
				await o.property.update({
					where: { id: e },
					data: { availabilityStatus: t.originalStatus }
				});
				let s = t.affectedUnits.filter((e) => e.hadListing);
				i.unitsAffected = t.affectedUnits.length, i.listingsRemoved = s.length;
				for (let e of s) if (e.listingData) {
					let t = await Yn.createListing(e.unitId, {
						unitId: e.unitId,
						title: e.listingData.title,
						description: e.listingData.description,
						price: e.listingData.price,
						availabilityDate: e.listingData.availabilityDate,
						expirationDate: e.listingData.expirationDate
					}, n, a.organizationId || "system");
					t.success || i.errors.push(`Failed to restore listing for unit ${e.unitNumber}: ${t.message}`);
				}
				await mn.createAuditEntry({
					unitId: "PROPERTY_LEVEL",
					action: X.CREATE,
					previousStatus: Y.PRIVATE,
					newStatus: Y.ACTIVE,
					userId: n,
					reason: r || "Property recovered from deactivation",
					metadata: {
						propertyId: e,
						propertyName: a.name,
						unitsRestored: i.unitsAffected,
						listingsRestored: i.listingsRemoved,
						recoveryType: "PROPERTY_RECOVERY",
						originalDeactivationDate: t.deactivationTimestamp
					}
				}, o);
			}), i.notificationsSent = await this.notifyPropertyManagersOfRecovery(a, i), i.success = !0, console.log("Property recovery completed:", {
				propertyId: e,
				unitsRestored: i.unitsAffected,
				listingsRestored: i.listingsRemoved
			}), i) : (i.errors.push("Property is not currently deactivated"), i) : (i.errors.push(`Property ${e} not found`), i);
		} catch (e) {
			return console.error("Error recovering property:", e), i.errors.push(e instanceof Error ? e.message : "Unknown error"), i;
		}
	}
	async getScheduledDeactivations() {
		try {
			return [];
		} catch (e) {
			return console.error("Error getting scheduled deactivations:", e), [];
		}
	}
	async getRecoveryData(e) {
		try {
			let t = (await mn.getPropertyAuditHistory(e)).find((e) => e.metadata?.deactivationType === "PROPERTY_DEACTIVATION");
			if (!t || !t.metadata) return null;
			let n = Array.isArray(t.metadata.affectedUnits) ? t.metadata.affectedUnits : [], r = Array.isArray(t.metadata.affectedApplications) ? t.metadata.affectedApplications : [];
			return {
				propertyId: e,
				originalStatus: "ACTIVE",
				deactivationTimestamp: t.timestamp,
				affectedUnits: n,
				affectedApplications: r
			};
		} catch (e) {
			return console.error("Error getting recovery data:", e), null;
		}
	}
	async getPropertyWithRelatedData(e) {
		return await g.property.findUnique({
			where: { id: e },
			include: {
				units: { include: {
					listing: !0,
					tenantApplications: { where: { status: { in: [
						"PENDING",
						"UNDER_REVIEW",
						"APPROVED"
					] } } }
				} },
				organization: { include: { users: {
					where: { role: "PROPERTY_MANAGER" },
					include: { user: !0 }
				} } }
			}
		});
	}
	async collectRecoveryData(e, t) {
		let n = {
			propertyId: e.id,
			originalStatus: e.availabilityStatus || "ACTIVE",
			deactivationTimestamp: /* @__PURE__ */ new Date(),
			affectedUnits: [],
			affectedApplications: []
		};
		for (let t of e.units) {
			let e = {
				unitId: t.id,
				unitNumber: t.unitNumber,
				hadListing: !!t.listing,
				listingData: t.listing ? {
					title: t.listing.title,
					description: t.listing.description,
					price: t.listing.price,
					availabilityDate: t.listing.availabilityDate,
					expirationDate: t.listing.expirationDate
				} : void 0
			};
			n.affectedUnits.push(e);
			for (let e of t.tenantApplications || []) n.affectedApplications.push({
				applicationId: e.id,
				unitId: t.id,
				applicantEmail: e.email,
				status: e.status
			});
		}
		return n;
	}
	async handleAffectedApplications(e, t, n) {
		try {
			let t = await n.tenantApplication.findMany({ where: {
				unitId: { in: e },
				status: { in: [
					"PENDING",
					"UNDER_REVIEW",
					"APPROVED"
				] }
			} });
			return t.length > 0 && await n.tenantApplication.updateMany({
				where: { id: { in: t.map((e) => e.id) } },
				data: {
					status: "CANCELLED",
					updatedAt: /* @__PURE__ */ new Date()
				}
			}), t.map((e) => e.id);
		} catch (e) {
			return console.error("Error handling affected applications:", e), [];
		}
	}
	async notifyPropertyManagers(e, t, n) {
		try {
			let r = e.organization?.users || [];
			return r.length === 0 ? 0 : (console.log("Property Manager Deactivation Notification:", {
				propertyId: e.id,
				propertyName: e.name,
				reason: t.reason,
				unitsAffected: n.unitsAffected,
				listingsRemoved: n.listingsRemoved,
				applicationsAffected: n.applicationsAffected,
				recipients: r.map((e) => e.user.email),
				timestamp: /* @__PURE__ */ new Date()
			}), r.length);
		} catch (e) {
			return console.error("Error notifying property managers:", e), 0;
		}
	}
	async notifyAffectedTenants(e, t, n) {
		try {
			let n = e.units.flatMap((e) => e.tenantApplications || []);
			return n.length === 0 ? 0 : (console.log("Tenant Deactivation Notification:", {
				propertyId: e.id,
				propertyName: e.name,
				reason: t.reason,
				affectedApplications: n.length,
				recipients: n.map((e) => e.email),
				timestamp: /* @__PURE__ */ new Date()
			}), n.length);
		} catch (e) {
			return console.error("Error notifying affected tenants:", e), 0;
		}
	}
	async notifyPropertyManagersOfRecovery(e, t) {
		try {
			let n = e.organization?.users || [];
			return n.length === 0 ? 0 : (console.log("Property Manager Recovery Notification:", {
				propertyId: e.id,
				propertyName: e.name,
				unitsRestored: t.unitsAffected,
				listingsRestored: t.listingsRemoved,
				recipients: n.map((e) => e.user.email),
				timestamp: /* @__PURE__ */ new Date()
			}), n.length);
		} catch (e) {
			return console.error("Error notifying property managers of recovery:", e), 0;
		}
	}
}, xr = new br();
//#endregion
//#region src/lib/property-images.ts
async function Sr(e, t) {
	try {
		let n = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/property-post/${e}/images`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ images: t })
		});
		if (!n.ok) throw Error("Failed to save images to database");
		return await n.json();
	} catch (e) {
		throw console.error("Error saving images:", e), e;
	}
}
//#endregion
//#region src/lib/property-manager.ts
var Cr = async (e) => {
	try {
		if (!e.manager?.orgUserId || !e.manager?.organizationId) throw Error("Manager or organization info is missing. Make sure you are logged in.");
		let t = {
			...e,
			managerId: e.manager.orgUserId,
			organizationId: e.manager.organizationId
		}, n = await fetch("/api/propertymanager", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(t)
		});
		if (!n.ok) {
			let e = await n.text();
			throw console.error(`API Error: ${n.status} ${n.statusText} - ${e}`), Error("Failed to post property");
		}
		return await n.json();
	} catch (e) {
		throw console.error("Error posting property:", e), e;
	}
}, wr = async (e, t) => {
	try {
		let n = new URLSearchParams();
		e && n.append("managerId", e), t && n.append("organizationId", t);
		let r = `/api/propertymanager${n.toString() ? `?${n.toString()}` : ""}`, i = await fetch(r, {
			method: "GET",
			cache: "no-store"
		});
		if (!i.ok) throw Error("Failed to fetch properties");
		return i.json();
	} catch (e) {
		throw console.error("Error fetching properties:", e), e;
	}
}, Tr = async (e) => {
	try {
		let t = await fetch(`/api/propertymanager/${e}`, { cache: "no-store" });
		if (!t.ok) {
			let e = await t.text();
			throw console.error(`API Error: ${t.status} ${t.statusText} - ${e}`), Error("Failed to fetch property");
		}
		let n = await t.json();
		return {
			...n,
			propertyDetails: n.details || void 0
		};
	} catch (e) {
		throw console.error("Error fetching property by ID:", e), e;
	}
}, Er = async (e, t) => {
	try {
		let n = {
			id: e,
			...t,
			managerId: t.manager?.orgUserId,
			organizationId: t.manager?.organizationId
		}, r = await fetch("/api/propertymanager", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(n)
		});
		if (!r.ok) {
			let e = await r.text();
			throw console.error(`API Error: ${r.status} ${r.statusText} - ${e}`), Error("Failed to update property");
		}
		return await r.json();
	} catch (e) {
		throw console.error("Error updating property:", e), e;
	}
}, Dr = async (e) => {
	try {
		let t = await fetch("/api/propertymanager", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: e })
		});
		if (!t.ok) {
			let e = await t.text();
			throw console.error(`API Error: ${t.status} ${t.statusText} - ${e}`), Error("Failed to delete property");
		}
		return await t.json();
	} catch (e) {
		throw console.error("Error deleting property:", e), e;
	}
}, Or = async (e) => {
	let t = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/property-post`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(e)
	});
	if (!t.ok) throw console.error(`API Error: ${t.status} ${t.statusText}`), Error("Failed to post property");
	return t.json();
}, kr = async () => {
	try {
		let e = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/propertytypes`, { next: { revalidate: 60 } });
		if (!e.ok) throw console.error(`API Error: ${e.status} ${e.statusText} for ${e.url}`), Error("Failed to fetch property types");
		return await e.json() || [];
	} catch (e) {
		return console.error("fetchAboutUs:", e), [];
	}
}, Ar = async (e) => {
	let t = await g.property.findUnique({
		where: { id: e },
		include: {
			units: { include: {
				appliances: !0,
				listing: { include: { status: !0 } }
			} },
			apartmentComplexDetail: !0,
			houseDetail: !0
		}
	});
	if (!t) return [];
	let n = (/* @__PURE__ */ new Date()).toISOString(), r = [];
	if (t.apartmentComplexDetail) {
		let e = t.apartmentComplexDetail.totalUnits ?? 0, i = t.units || [];
		r = Array.from({ length: e }, (e, r) => {
			let a = (r + 1 + 100).toString(), o = i.find((e) => e.unitNumber === a), s = t.apartmentComplexDetail;
			return {
				id: o?.id ?? `placeholder-${a}`,
				propertyId: t.id,
				complexDetailId: s.id,
				houseDetailId: null,
				unitNumber: o?.unitNumber ?? a,
				unitName: o?.unitName ?? null,
				bedrooms: o?.bedrooms ?? null,
				bathrooms: o?.bathrooms ?? null,
				floorNumber: o?.floorNumber ?? null,
				rentAmount: o?.rentAmount ?? null,
				currency: o?.currency ?? null,
				isOccupied: o?.isOccupied ?? !1,
				createdAt: o?.createdAt instanceof Date ? o.createdAt.toISOString() : n,
				appliances: o?.appliances?.map((e) => ({
					id: e.id,
					name: e.name,
					createdAt: e.createdAt instanceof Date ? e.createdAt.toISOString() : n
				})) ?? [],
				listing: o?.listing ? {
					id: o.listing.id,
					status: o.listing.status ? { name: o.listing.status.name } : null
				} : null
			};
		});
	} else if (t.houseDetail) {
		let e = t.houseDetail.totalUnits ?? 1, i = t.units || [];
		r = Array.from({ length: e }, (e, r) => {
			let a = (r + 1).toString(), o = i.find((e) => e.unitNumber === a), s = t.houseDetail;
			return {
				id: o?.id ?? `placeholder-${a}`,
				propertyId: t.id,
				complexDetailId: null,
				houseDetailId: s.id,
				unitNumber: o?.unitNumber ?? a,
				unitName: o?.unitName ?? null,
				bedrooms: o?.bedrooms ?? s.bedrooms ?? null,
				bathrooms: o?.bathrooms ?? s.bathrooms ?? null,
				floorNumber: o?.floorNumber ?? s.numberOfFloors ?? null,
				rentAmount: o?.rentAmount ?? null,
				currency: o?.currency ?? null,
				isOccupied: o?.isOccupied ?? !1,
				createdAt: o?.createdAt instanceof Date ? o.createdAt.toISOString() : n,
				appliances: o?.appliances?.map((e) => ({
					id: e.id,
					name: e.name,
					createdAt: e.createdAt instanceof Date ? e.createdAt.toISOString() : n
				})) ?? [],
				listing: o?.listing ? {
					id: o.listing.id,
					status: o.listing.status ? { name: o.listing.status.name } : null
				} : null
			};
		});
	}
	return r;
}, jr = async (e, t, n) => {
	try {
		let r = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/units/${e}/${t}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(n)
		});
		if (!r.ok) throw console.error(`API Error: ${r.status} ${r.statusText} for ${r.url}`), Error("Failed to update unit");
		let i = await r.json();
		return {
			success: !0,
			message: i.message || "Unit updated",
			isNewUnit: i.isNewUnit,
			unit: i.unit
		};
	} catch (e) {
		return console.error("updateUnitDetails:", e), {
			success: !1,
			message: e.message || "Update failed"
		};
	}
}, Mr = async (e, t, n) => {
	try {
		let r;
		if (n) {
			let n = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXTAUTH_URL || process.env.VERCEL_URL, i = n ? n.startsWith("http") ? n : `https://${n}` : null;
			if (!i) throw Error("Missing base URL env. Set NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_BASE_URL, NEXTAUTH_URL, or VERCEL_URL.");
			r = `${i}/api/units/${e}/${t}`;
		} else r = `/api/units/${e}/${t}`;
		let i = await fetch(r);
		if (!i.ok) throw console.error(`API Error: ${i.status} ${i.statusText} for ${r}`), Error("Failed to fetch unit details");
		return await i.json();
	} catch (e) {
		return console.error("fetchUnitDetails:", e), null;
	}
};
//#endregion
export { Dn as ABUSE_PREVENTION, Fn as AbusePreventionService, sn as ApplicationControlService, un as ApplicationListingIntegrationService, pn as AuditService, $t as BulkListingActionType, rn as BulkOperationError, en as CreateListingError, On as DATA_RETENTION, Rn as DEFAULT_RETRY_CONFIG, kn as ENCRYPTION_CONFIG, In as ErrorSeverity, X as ListingAction, Ln as ListingError, zn as ListingErrorHandler, $ as ListingErrorType, vn as ListingLogger, Xn as ListingNotificationService, Cn as ListingPermission, Qn as ListingReportingService, rr as ListingSanitizer, or as ListingSecurityMiddleware, Jn as ListingService, Y as ListingStatus, ar as ListingValidationService, Q as LogCategory, Z as LogLevel, An as MONITORING_CONFIG, _r as MaintenanceListingIntegration, nr as PathSanitizer, _n as PropertyComponent, br as PropertyDeactivationService, tn as RemoveListingError, En as SECURITY_HEADERS, wn as SECURITY_POLICIES, er as SQLSanitizer, ir as SecurityAuditor, nn as UpdateStatusError, Sn as UserRole, Tn as VALIDATION_RULES, an as VALID_STATUS_TRANSITIONS, tr as XSSSanitizer, cn as applicationControlService, dn as applicationListingIntegration, mn as auditService, pr as clearStatusCache, ln as createApplicationControlService, Gn as createConflictError, xn as createContextLogger, fn as createListingChangeEvent, Wn as createNotFoundError, Or as createPropertyFromPost, sr as createSecurityMiddleware, Dr as deleteProperty, mr as determineInitialStatus, ur as ensureListingStatuses, d as fetchAppliances, hn as fetchCategories, yr as fetchProperty, kr as fetchPropertyTypes, Mr as fetchUnitDetails, Ar as fetchUnits, fr as getAllStatusIds, wr as getProperties, Tr as getPropertyById, Pn as getRateLimit, Nn as getRequiredRole, jn as getSecurityPolicy, dr as getStatusId, on as isValidStatusTransition, Bn as listingErrorHandler, yn as listingLogger, Zn as listingNotificationService, $n as listingReportingService, Yn as listingService, vr as maintenanceListingIntegration, Cr as postProperty, xr as propertyDeactivationService, Mn as requiresAuth, Sr as savePropertyImages, bn as trackPerformance, Er as updateProperty, jr as updateUnitDetails, Un as validatePermissions, Hn as validateRequiredFields, gr as validateStatusTransition, Vn as withErrorHandling, cr as withSecurity };
