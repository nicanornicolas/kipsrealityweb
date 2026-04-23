import { i as e, t } from "./chunk-Cr9pTUWm.mjs";
//#region ../../node_modules/react-dom/cjs/react-dom-server-legacy.browser.production.js
var n = /* @__PURE__ */ t(((t) => {
	var n = e("react"), r = e("react-dom");
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), _ = Symbol.for("react.scope"), v = Symbol.for("react.activity"), y = Symbol.for("react.legacy_hidden"), b = Symbol.for("react.memo_cache_sentinel"), x = Symbol.for("react.view_transition"), S = Symbol.iterator;
	function C(e) {
		return typeof e != "object" || !e ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var w = Array.isArray;
	function T(e, t) {
		var n = e.length & 3, r = e.length - n, i = t;
		for (t = 0; t < r;) {
			var a = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
			++t, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, i = 5 * (i & 65535) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (i & 65535) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
		}
		switch (a = 0, n) {
			case 3: a ^= (e.charCodeAt(t + 2) & 255) << 16;
			case 2: a ^= (e.charCodeAt(t + 1) & 255) << 8;
			case 1: a ^= e.charCodeAt(t) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, i ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
		}
		return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (i & 65535) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (i & 65535) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^ i >>> 16) >>> 0;
	}
	var E = Object.assign, D = Object.prototype.hasOwnProperty, O = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), k = {}, A = {};
	function j(e) {
		return D.call(A, e) ? !0 : D.call(k, e) ? !1 : O.test(e) ? A[e] = !0 : (k[e] = !0, !1);
	}
	var M = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), N = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), P = /["'&<>]/;
	function F(e) {
		if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
		e = "" + e;
		var t = P.exec(e);
		if (t) {
			var n = "", r, i = 0;
			for (r = t.index; r < e.length; r++) {
				switch (e.charCodeAt(r)) {
					case 34:
						t = "&quot;";
						break;
					case 38:
						t = "&amp;";
						break;
					case 39:
						t = "&#x27;";
						break;
					case 60:
						t = "&lt;";
						break;
					case 62:
						t = "&gt;";
						break;
					default: continue;
				}
				i !== r && (n += e.slice(i, r)), i = r + 1, n += t;
			}
			e = i === r ? n : n + e.slice(i, r);
		}
		return e;
	}
	var ee = /([A-Z])/g, I = /^ms-/, L = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function R(e) {
		return L.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	var z = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, B = te.d;
	te.d = {
		f: B.f,
		r: B.r,
		D: nt,
		C: rt,
		L: it,
		m: at,
		X: st,
		S: ot,
		M: ct
	};
	var re = [], ie = null, ae = /(<\/|<)(s)(cript)/gi;
	function oe(e, t, n, r) {
		return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
	}
	function se(e, t, n, r, i) {
		return {
			idPrefix: e === void 0 ? "" : e,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent: n,
			bootstrapScripts: r,
			bootstrapModules: i,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function ce(e, t, n, r) {
		return {
			insertionMode: e,
			selectedValue: t,
			tagScope: n,
			viewTransition: r
		};
	}
	function le(e, t, n) {
		var r = e.tagScope & -25;
		switch (t) {
			case "noscript": return ce(2, null, r | 1, null);
			case "select": return ce(2, n.value == null ? n.defaultValue : n.value, r, null);
			case "svg": return ce(4, null, r, null);
			case "picture": return ce(2, null, r | 2, null);
			case "math": return ce(5, null, r, null);
			case "foreignObject": return ce(2, null, r, null);
			case "table": return ce(6, null, r, null);
			case "thead":
			case "tbody":
			case "tfoot": return ce(7, null, r, null);
			case "colgroup": return ce(9, null, r, null);
			case "tr": return ce(8, null, r, null);
			case "head":
				if (2 > e.insertionMode) return ce(3, null, r, null);
				break;
			case "html": if (e.insertionMode === 0) return ce(1, null, r, null);
		}
		return 6 <= e.insertionMode || 2 > e.insertionMode ? ce(2, null, r, null) : e.tagScope === r ? e : ce(e.insertionMode, e.selectedValue, r, null);
	}
	function V(e) {
		return e === null ? null : {
			update: e.update,
			enter: "none",
			exit: "none",
			share: e.update,
			name: e.autoName,
			autoName: e.autoName,
			nameIdx: 0
		};
	}
	function ue(e, t) {
		return t.tagScope & 32 && (e.instructions |= 128), ce(t.insertionMode, t.selectedValue, t.tagScope | 12, V(t.viewTransition));
	}
	function de(e, t) {
		e = V(t.viewTransition);
		var n = t.tagScope | 16;
		return e !== null && e.share !== "none" && (n |= 64), ce(t.insertionMode, t.selectedValue, n, e);
	}
	var fe = /* @__PURE__ */ new Map();
	function pe(e, t) {
		if (typeof t != "object") throw Error(i(62));
		var n = !0, r;
		for (r in t) if (D.call(t, r)) {
			var a = t[r];
			if (a != null && typeof a != "boolean" && a !== "") {
				if (r.indexOf("--") === 0) {
					var o = F(r);
					a = F(("" + a).trim());
				} else o = fe.get(r), o === void 0 && (o = F(r.replace(ee, "-$1").toLowerCase().replace(I, "-ms-")), fe.set(r, o)), a = typeof a == "number" ? a === 0 || M.has(r) ? "" + a : a + "px" : F(("" + a).trim());
				n ? (n = !1, e.push(" style=\"", o, ":", a)) : e.push(";", o, ":", a);
			}
		}
		n || e.push("\"");
	}
	function me(e, t, n) {
		n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"\"");
	}
	function he(e, t, n) {
		typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(" ", t, "=\"", F(n), "\"");
	}
	var ge = F("javascript:throw new Error('React form unexpectedly submitted.')");
	function _e(e, t) {
		this.push("<input type=\"hidden\""), ve(e), he(this, "name", t), he(this, "value", e), this.push("/>");
	}
	function ve(e) {
		if (typeof e != "string") throw Error(i(480));
	}
	function ye(e, t) {
		if (typeof t.$$FORM_ACTION == "function") {
			var n = e.nextFormID++;
			e = e.idPrefix + n;
			try {
				var r = t.$$FORM_ACTION(e);
				return r && r.data?.forEach(ve), r;
			} catch (e) {
				if (typeof e == "object" && e && typeof e.then == "function") throw e;
			}
		}
		return null;
	}
	function be(e, t, n, r, i, a, o, s) {
		var c = null;
		if (typeof r == "function") {
			var l = ye(t, r);
			l === null ? (e.push(" ", "formAction", "=\"", ge, "\""), o = a = i = r = s = null, we(t, n)) : (s = l.name, r = l.action || "", i = l.encType, a = l.method, o = l.target, c = l.data);
		}
		return s != null && xe(e, "name", s), r != null && xe(e, "formAction", r), i != null && xe(e, "formEncType", i), a != null && xe(e, "formMethod", a), o != null && xe(e, "formTarget", o), c;
	}
	function xe(e, t, n) {
		switch (t) {
			case "className":
				he(e, "class", n);
				break;
			case "tabIndex":
				he(e, "tabindex", n);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				he(e, t, n);
				break;
			case "style":
				pe(e, n);
				break;
			case "src":
			case "href": if (n === "") break;
			case "action":
			case "formAction":
				if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = R("" + n), e.push(" ", t, "=\"", F(n), "\"");
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				me(e, t.toLowerCase(), n);
				break;
			case "xlinkHref":
				if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = R("" + n), e.push(" ", "xlink:href", "=\"", F(n), "\"");
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"", F(n), "\"");
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"\"");
				break;
			case "capture":
			case "download":
				!0 === n ? e.push(" ", t, "=\"\"") : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(" ", t, "=\"", F(n), "\"");
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(" ", t, "=\"", F(n), "\"");
				break;
			case "rowSpan":
			case "start":
				typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(" ", t, "=\"", F(n), "\"");
				break;
			case "xlinkActuate":
				he(e, "xlink:actuate", n);
				break;
			case "xlinkArcrole":
				he(e, "xlink:arcrole", n);
				break;
			case "xlinkRole":
				he(e, "xlink:role", n);
				break;
			case "xlinkShow":
				he(e, "xlink:show", n);
				break;
			case "xlinkTitle":
				he(e, "xlink:title", n);
				break;
			case "xlinkType":
				he(e, "xlink:type", n);
				break;
			case "xmlBase":
				he(e, "xml:base", n);
				break;
			case "xmlLang":
				he(e, "xml:lang", n);
				break;
			case "xmlSpace":
				he(e, "xml:space", n);
				break;
			default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = N.get(t) || t, j(t))) {
				switch (typeof n) {
					case "function":
					case "symbol": return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") return;
				}
				e.push(" ", t, "=\"", F(n), "\"");
			}
		}
	}
	function Se(e, t, n) {
		if (t != null) {
			if (n != null) throw Error(i(60));
			if (typeof t != "object" || !("__html" in t)) throw Error(i(61));
			t = t.__html, t != null && e.push("" + t);
		}
	}
	function Ce(e) {
		var t = "";
		return n.Children.forEach(e, function(e) {
			e != null && (t += e);
		}), t;
	}
	function we(e, t) {
		if (!(e.instructions & 16)) {
			e.instructions |= 16;
			var n = t.preamble, r = t.bootstrapChunks;
			(n.htmlChunks || n.headChunks) && r.length === 0 ? (r.push(t.startInlineScript), et(r, e), r.push(">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", "<\/script>")) : r.unshift(t.startInlineScript, ">", "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", "<\/script>");
		}
	}
	function Te(e, t) {
		for (var n in e.push(Fe("link")), t) if (D.call(t, n)) {
			var r = t[n];
			if (r != null) switch (n) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
				default: xe(e, n, r);
			}
		}
		return e.push("/>"), null;
	}
	var Ee = /(<\/|<)(s)(tyle)/gi;
	function De(e, t, n, r) {
		return "" + t + (n === "s" ? "\\73 " : "\\53 ") + r;
	}
	function Oe(e, t, n) {
		for (var r in e.push(Fe(n)), t) if (D.call(t, r)) {
			var a = t[r];
			if (a != null) switch (r) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, n));
				default: xe(e, r, a);
			}
		}
		return e.push("/>"), null;
	}
	function ke(e, t) {
		e.push(Fe("title"));
		var n = null, r = null, i;
		for (i in t) if (D.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: xe(e, i, a);
			}
		}
		return e.push(">"), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(F("" + t)), Se(e, r, n), e.push(Le("title")), null;
	}
	function Ae(e, t) {
		e.push(Fe("script"));
		var n = null, r = null, i;
		for (i in t) if (D.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: xe(e, i, a);
			}
		}
		return e.push(">"), Se(e, r, n), typeof n == "string" && e.push(("" + n).replace(ae, oe)), e.push(Le("script")), null;
	}
	function je(e, t, n) {
		e.push(Fe(n));
		var r = n = null, i;
		for (i in t) if (D.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: xe(e, i, a);
			}
		}
		return e.push(">"), Se(e, r, n), n;
	}
	function Me(e, t, n) {
		e.push(Fe(n));
		var r = n = null, i;
		for (i in t) if (D.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: xe(e, i, a);
			}
		}
		return e.push(">"), Se(e, r, n), typeof n == "string" ? (e.push(F(n)), null) : n;
	}
	var Ne = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Pe = /* @__PURE__ */ new Map();
	function Fe(e) {
		var t = Pe.get(e);
		if (t === void 0) {
			if (!Ne.test(e)) throw Error(i(65, e));
			t = "<" + e, Pe.set(e, t);
		}
		return t;
	}
	function H(e, t, n, r, a, o, s, c, l) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				e.push(Fe("a"));
				var u = null, d = null, f;
				for (f in n) if (D.call(n, f)) {
					var p = n[f];
					if (p != null) switch (f) {
						case "children":
							u = p;
							break;
						case "dangerouslySetInnerHTML":
							d = p;
							break;
						case "href":
							p === "" ? he(e, "href", "") : xe(e, f, p);
							break;
						default: xe(e, f, p);
					}
				}
				if (e.push(">"), Se(e, d, u), typeof u == "string") {
					e.push(F(u));
					var m = null;
				} else m = u;
				return m;
			case "g":
			case "p":
			case "li": break;
			case "select":
				e.push(Fe("select"));
				var h = null, g = null, _;
				for (_ in n) if (D.call(n, _)) {
					var v = n[_];
					if (v != null) switch (_) {
						case "children":
							h = v;
							break;
						case "dangerouslySetInnerHTML":
							g = v;
							break;
						case "defaultValue":
						case "value": break;
						default: xe(e, _, v);
					}
				}
				return e.push(">"), Se(e, g, h), h;
			case "option":
				var y = c.selectedValue;
				e.push(Fe("option"));
				var b = null, x = null, S = null, C = null, T;
				for (T in n) if (D.call(n, T)) {
					var O = n[T];
					if (O != null) switch (T) {
						case "children":
							b = O;
							break;
						case "selected":
							S = O;
							break;
						case "dangerouslySetInnerHTML":
							C = O;
							break;
						case "value": x = O;
						default: xe(e, T, O);
					}
				}
				if (y != null) {
					var k = x === null ? Ce(b) : "" + x;
					if (w(y)) {
						for (var A = 0; A < y.length; A++) if ("" + y[A] === k) {
							e.push(" selected=\"\"");
							break;
						}
					} else "" + y === k && e.push(" selected=\"\"");
				} else S && e.push(" selected=\"\"");
				return e.push(">"), Se(e, C, b), b;
			case "textarea":
				e.push(Fe("textarea"));
				var M = null, N = null, P = null, ee;
				for (ee in n) if (D.call(n, ee)) {
					var I = n[ee];
					if (I != null) switch (ee) {
						case "children":
							P = I;
							break;
						case "value":
							M = I;
							break;
						case "defaultValue":
							N = I;
							break;
						case "dangerouslySetInnerHTML": throw Error(i(91));
						default: xe(e, ee, I);
					}
				}
				if (M === null && N !== null && (M = N), e.push(">"), P != null) {
					if (M != null) throw Error(i(92));
					if (w(P)) {
						if (1 < P.length) throw Error(i(93));
						M = "" + P[0];
					}
					M = "" + P;
				}
				return typeof M == "string" && M[0] === "\n" && e.push("\n"), M !== null && e.push(F("" + M)), null;
			case "input":
				e.push(Fe("input"));
				var L = null, z = null, te = null, ne = null, B = null, ie = null, ae = null, oe = null, se = null, ce;
				for (ce in n) if (D.call(n, ce)) {
					var le = n[ce];
					if (le != null) switch (ce) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(399, "input"));
						case "name":
							L = le;
							break;
						case "formAction":
							z = le;
							break;
						case "formEncType":
							te = le;
							break;
						case "formMethod":
							ne = le;
							break;
						case "formTarget":
							B = le;
							break;
						case "defaultChecked":
							se = le;
							break;
						case "defaultValue":
							ae = le;
							break;
						case "checked":
							oe = le;
							break;
						case "value":
							ie = le;
							break;
						default: xe(e, ce, le);
					}
				}
				var V = be(e, r, a, z, te, ne, B, L);
				return oe === null ? se !== null && me(e, "checked", se) : me(e, "checked", oe), ie === null ? ae !== null && xe(e, "value", ae) : xe(e, "value", ie), e.push("/>"), V?.forEach(_e, e), null;
			case "button":
				e.push(Fe("button"));
				var ue = null, de = null, fe = null, ve = null, Ne = null, Pe = null, H = null, Ie;
				for (Ie in n) if (D.call(n, Ie)) {
					var Re = n[Ie];
					if (Re != null) switch (Ie) {
						case "children":
							ue = Re;
							break;
						case "dangerouslySetInnerHTML":
							de = Re;
							break;
						case "name":
							fe = Re;
							break;
						case "formAction":
							ve = Re;
							break;
						case "formEncType":
							Ne = Re;
							break;
						case "formMethod":
							Pe = Re;
							break;
						case "formTarget":
							H = Re;
							break;
						default: xe(e, Ie, Re);
					}
				}
				var ze = be(e, r, a, ve, Ne, Pe, H, fe);
				if (e.push(">"), ze?.forEach(_e, e), Se(e, de, ue), typeof ue == "string") {
					e.push(F(ue));
					var Be = null;
				} else Be = ue;
				return Be;
			case "form":
				e.push(Fe("form"));
				var Ve = null, He = null, Ue = null, U = null, We = null, Ge = null, Ke;
				for (Ke in n) if (D.call(n, Ke)) {
					var qe = n[Ke];
					if (qe != null) switch (Ke) {
						case "children":
							Ve = qe;
							break;
						case "dangerouslySetInnerHTML":
							He = qe;
							break;
						case "action":
							Ue = qe;
							break;
						case "encType":
							U = qe;
							break;
						case "method":
							We = qe;
							break;
						case "target":
							Ge = qe;
							break;
						default: xe(e, Ke, qe);
					}
				}
				var Je = null, W = null;
				if (typeof Ue == "function") {
					var Ye = ye(r, Ue);
					Ye === null ? (e.push(" ", "action", "=\"", ge, "\""), Ge = We = U = Ue = null, we(r, a)) : (Ue = Ye.action || "", U = Ye.encType, We = Ye.method, Ge = Ye.target, Je = Ye.data, W = Ye.name);
				}
				if (Ue != null && xe(e, "action", Ue), U != null && xe(e, "encType", U), We != null && xe(e, "method", We), Ge != null && xe(e, "target", Ge), e.push(">"), W !== null && (e.push("<input type=\"hidden\""), he(e, "name", W), e.push("/>"), Je?.forEach(_e, e)), Se(e, He, Ve), typeof Ve == "string") {
					e.push(F(Ve));
					var Xe = null;
				} else Xe = Ve;
				return Xe;
			case "menuitem":
				for (var G in e.push(Fe("menuitem")), n) if (D.call(n, G)) {
					var Ze = n[G];
					if (Ze != null) switch (G) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(400));
						default: xe(e, G, Ze);
					}
				}
				return e.push(">"), null;
			case "object":
				e.push(Fe("object"));
				var K = null, Qe = null, $e;
				for ($e in n) if (D.call(n, $e)) {
					var et = n[$e];
					if (et != null) switch ($e) {
						case "children":
							K = et;
							break;
						case "dangerouslySetInnerHTML":
							Qe = et;
							break;
						case "data":
							var tt = R("" + et);
							if (tt === "") break;
							e.push(" ", "data", "=\"", F(tt), "\"");
							break;
						default: xe(e, $e, et);
					}
				}
				if (e.push(">"), Se(e, Qe, K), typeof K == "string") {
					e.push(F(K));
					var q = null;
				} else q = K;
				return q;
			case "title":
				var J = c.tagScope & 1, nt = c.tagScope & 4;
				if (c.insertionMode === 4 || J || n.itemProp != null) var rt = ke(e, n);
				else nt ? rt = null : (ke(a.hoistableChunks, n), rt = void 0);
				return rt;
			case "link":
				var it = c.tagScope & 1, at = c.tagScope & 4, ot = n.rel, st = n.href, ct = n.precedence;
				if (c.insertionMode === 4 || it || n.itemProp != null || typeof ot != "string" || typeof st != "string" || st === "") {
					Te(e, n);
					var dt = null;
				} else if (n.rel === "stylesheet") if (typeof ct != "string" || n.disabled != null || n.onLoad || n.onError) dt = Te(e, n);
				else {
					var ft = a.styles.get(ct), pt = r.styleResources.hasOwnProperty(st) ? r.styleResources[st] : void 0;
					if (pt !== null) {
						r.styleResources[st] = null, ft || (ft = {
							precedence: F(ct),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(ct, ft));
						var mt = {
							state: 0,
							props: E({}, n, {
								"data-precedence": n.precedence,
								precedence: null
							})
						};
						if (pt) {
							pt.length === 2 && lt(mt.props, pt);
							var ht = a.preloads.stylesheets.get(st);
							ht && 0 < ht.length ? ht.length = 0 : mt.state = 1;
						}
						ft.sheets.set(st, mt), s && s.stylesheets.add(mt);
					} else if (ft) {
						var gt = ft.sheets.get(st);
						gt && s && s.stylesheets.add(gt);
					}
					l && e.push("<!-- -->"), dt = null;
				}
				else n.onLoad || n.onError ? dt = Te(e, n) : (l && e.push("<!-- -->"), dt = at ? null : Te(a.hoistableChunks, n));
				return dt;
			case "script":
				var _t = c.tagScope & 1, vt = n.async;
				if (typeof n.src != "string" || !n.src || !vt || typeof vt == "function" || typeof vt == "symbol" || n.onLoad || n.onError || c.insertionMode === 4 || _t || n.itemProp != null) var yt = Ae(e, n);
				else {
					var bt = n.src;
					if (n.type === "module") var xt = r.moduleScriptResources, St = a.preloads.moduleScripts;
					else xt = r.scriptResources, St = a.preloads.scripts;
					var Ct = xt.hasOwnProperty(bt) ? xt[bt] : void 0;
					if (Ct !== null) {
						xt[bt] = null;
						var wt = n;
						if (Ct) {
							Ct.length === 2 && (wt = E({}, n), lt(wt, Ct));
							var Tt = St.get(bt);
							Tt && (Tt.length = 0);
						}
						var Et = [];
						a.scripts.add(Et), Ae(Et, wt);
					}
					l && e.push("<!-- -->"), yt = null;
				}
				return yt;
			case "style":
				var Dt = c.tagScope & 1, Ot = n.precedence, kt = n.href, At = n.nonce;
				if (c.insertionMode === 4 || Dt || n.itemProp != null || typeof Ot != "string" || typeof kt != "string" || kt === "") {
					e.push(Fe("style"));
					var jt = null, Mt = null, Nt;
					for (Nt in n) if (D.call(n, Nt)) {
						var Pt = n[Nt];
						if (Pt != null) switch (Nt) {
							case "children":
								jt = Pt;
								break;
							case "dangerouslySetInnerHTML":
								Mt = Pt;
								break;
							default: xe(e, Nt, Pt);
						}
					}
					e.push(">");
					var Ft = Array.isArray(jt) ? 2 > jt.length ? jt[0] : null : jt;
					typeof Ft != "function" && typeof Ft != "symbol" && Ft != null && e.push(("" + Ft).replace(Ee, De)), Se(e, Mt, jt), e.push(Le("style"));
					var It = null;
				} else {
					var Lt = a.styles.get(Ot);
					if ((r.styleResources.hasOwnProperty(kt) ? r.styleResources[kt] : void 0) !== null) {
						r.styleResources[kt] = null, Lt || (Lt = {
							precedence: F(Ot),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(Ot, Lt));
						var Rt = a.nonce.style;
						if (!Rt || Rt === At) {
							Lt.hrefs.push(F(kt));
							var zt = Lt.rules, Y = null, Bt = null, Vt;
							for (Vt in n) if (D.call(n, Vt)) {
								var Ht = n[Vt];
								if (Ht != null) switch (Vt) {
									case "children":
										Y = Ht;
										break;
									case "dangerouslySetInnerHTML": Bt = Ht;
								}
							}
							var Ut = Array.isArray(Y) ? 2 > Y.length ? Y[0] : null : Y;
							typeof Ut != "function" && typeof Ut != "symbol" && Ut != null && zt.push(("" + Ut).replace(Ee, De)), Se(zt, Bt, Y);
						}
					}
					Lt && s && s.styles.add(Lt), l && e.push("<!-- -->"), It = void 0;
				}
				return It;
			case "meta":
				var Wt = c.tagScope & 1, Gt = c.tagScope & 4;
				if (c.insertionMode === 4 || Wt || n.itemProp != null) var Kt = Oe(e, n, "meta");
				else l && e.push("<!-- -->"), Kt = Gt ? null : typeof n.charSet == "string" ? Oe(a.charsetChunks, n, "meta") : n.name === "viewport" ? Oe(a.viewportChunks, n, "meta") : Oe(a.hoistableChunks, n, "meta");
				return Kt;
			case "listing":
			case "pre":
				e.push(Fe(t));
				var qt = null, Jt = null, Yt;
				for (Yt in n) if (D.call(n, Yt)) {
					var X = n[Yt];
					if (X != null) switch (Yt) {
						case "children":
							qt = X;
							break;
						case "dangerouslySetInnerHTML":
							Jt = X;
							break;
						default: xe(e, Yt, X);
					}
				}
				if (e.push(">"), Jt != null) {
					if (qt != null) throw Error(i(60));
					if (typeof Jt != "object" || !("__html" in Jt)) throw Error(i(61));
					var Xt = Jt.__html;
					Xt != null && (typeof Xt == "string" && 0 < Xt.length && Xt[0] === "\n" ? e.push("\n", Xt) : e.push("" + Xt));
				}
				return typeof qt == "string" && qt[0] === "\n" && e.push("\n"), qt;
			case "img":
				var Zt = c.tagScope & 3, Qt = n.src, Z = n.srcSet;
				if (!(n.loading === "lazy" || !Qt && !Z || typeof Qt != "string" && Qt != null || typeof Z != "string" && Z != null || n.fetchPriority === "low" || Zt) && (typeof Qt != "string" || Qt[4] !== ":" || Qt[0] !== "d" && Qt[0] !== "D" || Qt[1] !== "a" && Qt[1] !== "A" || Qt[2] !== "t" && Qt[2] !== "T" || Qt[3] !== "a" && Qt[3] !== "A") && (typeof Z != "string" || Z[4] !== ":" || Z[0] !== "d" && Z[0] !== "D" || Z[1] !== "a" && Z[1] !== "A" || Z[2] !== "t" && Z[2] !== "T" || Z[3] !== "a" && Z[3] !== "A")) {
					s !== null && c.tagScope & 64 && (s.suspenseyImages = !0);
					var $t = typeof n.sizes == "string" ? n.sizes : void 0, en = Z ? Z + "\n" + ($t || "") : Qt, tn = a.preloads.images, nn = tn.get(en);
					if (nn) (n.fetchPriority === "high" || 10 > a.highImagePreloads.size) && (tn.delete(en), a.highImagePreloads.add(nn));
					else if (!r.imageResources.hasOwnProperty(en)) {
						r.imageResources[en] = re;
						var Q = n.crossOrigin, $ = typeof Q == "string" ? Q === "use-credentials" ? Q : "" : void 0, rn = a.headers, an;
						rn && 0 < rn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > rn.highImagePreloads.length) && (an = ut(Qt, "image", {
							imageSrcSet: n.srcSet,
							imageSizes: n.sizes,
							crossOrigin: $,
							integrity: n.integrity,
							nonce: n.nonce,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.refererPolicy
						}), 0 <= (rn.remainingCapacity -= an.length + 2)) ? (a.resets.image[en] = re, rn.highImagePreloads && (rn.highImagePreloads += ", "), rn.highImagePreloads += an) : (nn = [], Te(nn, {
							rel: "preload",
							as: "image",
							href: Z ? void 0 : Qt,
							imageSrcSet: Z,
							imageSizes: $t,
							crossOrigin: $,
							integrity: n.integrity,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.referrerPolicy
						}), n.fetchPriority === "high" || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(nn) : (a.bulkPreloads.add(nn), tn.set(en, nn)));
					}
				}
				return Oe(e, n, "img");
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return Oe(e, n, t);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > c.insertionMode) {
					var on = o || a.preamble;
					if (on.headChunks) throw Error(i(545, "`<head>`"));
					o !== null && e.push("<!--head-->"), on.headChunks = [];
					var sn = je(on.headChunks, n, "head");
				} else sn = Me(e, n, "head");
				return sn;
			case "body":
				if (2 > c.insertionMode) {
					var cn = o || a.preamble;
					if (cn.bodyChunks) throw Error(i(545, "`<body>`"));
					o !== null && e.push("<!--body-->"), cn.bodyChunks = [];
					var ln = je(cn.bodyChunks, n, "body");
				} else ln = Me(e, n, "body");
				return ln;
			case "html":
				if (c.insertionMode === 0) {
					var un = o || a.preamble;
					if (un.htmlChunks) throw Error(i(545, "`<html>`"));
					o !== null && e.push("<!--html-->"), un.htmlChunks = [""];
					var dn = je(un.htmlChunks, n, "html");
				} else dn = Me(e, n, "html");
				return dn;
			default: if (t.indexOf("-") !== -1) {
				e.push(Fe(t));
				var fn = null, pn = null, mn;
				for (mn in n) if (D.call(n, mn)) {
					var hn = n[mn];
					if (hn != null) {
						var gn = mn;
						switch (mn) {
							case "children":
								fn = hn;
								break;
							case "dangerouslySetInnerHTML":
								pn = hn;
								break;
							case "style":
								pe(e, hn);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": gn = "class";
							default: if (j(mn) && typeof hn != "function" && typeof hn != "symbol" && !1 !== hn) {
								if (!0 === hn) hn = "";
								else if (typeof hn == "object") continue;
								e.push(" ", gn, "=\"", F(hn), "\"");
							}
						}
					}
				}
				return e.push(">"), Se(e, pn, fn), fn;
			}
		}
		return Me(e, n, t);
	}
	var Ie = /* @__PURE__ */ new Map();
	function Le(e) {
		var t = Ie.get(e);
		return t === void 0 && (t = "</" + e + ">", Ie.set(e, t)), t;
	}
	function Re(e, t) {
		e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
	}
	function ze(e, t) {
		t = t.bootstrapChunks;
		for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
		return n < t.length ? (n = t[n], t.length = 0, e.push(n)) : !0;
	}
	function Be(e, t, n) {
		if (e.push("<!--$?--><template id=\""), n === null) throw Error(i(395));
		return e.push(t.boundaryPrefix), t = n.toString(16), e.push(t), e.push("\"></template>");
	}
	function Ve(e, t, n, r) {
		switch (n.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return e.push("<div hidden id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 4: return e.push("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 5: return e.push("<math aria-hidden=\"true\" style=\"display:none\" id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 6: return e.push("<table hidden id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 7: return e.push("<table hidden><tbody id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 8: return e.push("<table hidden><tr id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			case 9: return e.push("<table hidden><colgroup id=\""), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push("\">");
			default: throw Error(i(397));
		}
	}
	function He(e, t) {
		switch (t.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return e.push("</div>");
			case 4: return e.push("</svg>");
			case 5: return e.push("</math>");
			case 6: return e.push("</table>");
			case 7: return e.push("</tbody></table>");
			case 8: return e.push("</tr></table>");
			case 9: return e.push("</colgroup></table>");
			default: throw Error(i(397));
		}
	}
	var Ue = /[<\u2028\u2029]/g;
	function U(e) {
		return JSON.stringify(e).replace(Ue, function(e) {
			switch (e) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var We = /[&><\u2028\u2029]/g;
	function Ge(e) {
		return JSON.stringify(e).replace(We, function(e) {
			switch (e) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var Ke = !1, qe = !0;
	function Je(e) {
		var t = e.rules, n = e.hrefs, r = 0;
		if (n.length) {
			for (this.push(ie.startInlineStyle), this.push(" media=\"not all\" data-precedence=\""), this.push(e.precedence), this.push("\" data-href=\""); r < n.length - 1; r++) this.push(n[r]), this.push(" ");
			for (this.push(n[r]), this.push("\">"), r = 0; r < t.length; r++) this.push(t[r]);
			qe = this.push("</style>"), Ke = !0, t.length = 0, n.length = 0;
		}
	}
	function W(e) {
		return e.state === 2 ? !1 : Ke = !0;
	}
	function Ye(e, t, n) {
		return Ke = !1, qe = !0, ie = n, t.styles.forEach(Je, e), ie = null, t.stylesheets.forEach(W), Ke && (n.stylesToHoist = !0), qe;
	}
	function Xe(e) {
		for (var t = 0; t < e.length; t++) this.push(e[t]);
		e.length = 0;
	}
	var G = [];
	function Ze(e) {
		Te(G, e.props);
		for (var t = 0; t < G.length; t++) this.push(G[t]);
		G.length = 0, e.state = 2;
	}
	function K(e) {
		var t = 0 < e.sheets.size;
		e.sheets.forEach(Ze, this), e.sheets.clear();
		var n = e.rules, r = e.hrefs;
		if (!t || r.length) {
			if (this.push(ie.startInlineStyle), this.push(" data-precedence=\""), this.push(e.precedence), e = 0, r.length) {
				for (this.push("\" data-href=\""); e < r.length - 1; e++) this.push(r[e]), this.push(" ");
				this.push(r[e]);
			}
			for (this.push("\">"), e = 0; e < n.length; e++) this.push(n[e]);
			this.push("</style>"), n.length = 0, r.length = 0;
		}
	}
	function Qe(e) {
		if (e.state === 0) {
			e.state = 1;
			var t = e.props;
			for (Te(G, {
				rel: "preload",
				as: "style",
				href: e.props.href,
				crossOrigin: t.crossOrigin,
				fetchPriority: t.fetchPriority,
				integrity: t.integrity,
				media: t.media,
				hrefLang: t.hrefLang,
				referrerPolicy: t.referrerPolicy
			}), e = 0; e < G.length; e++) this.push(G[e]);
			G.length = 0;
		}
	}
	function $e(e) {
		e.sheets.forEach(Qe, this), e.sheets.clear();
	}
	function et(e, t) {
		!(t.instructions & 32) && (t.instructions |= 32, e.push(" id=\"", F("_" + t.idPrefix + "R_"), "\""));
	}
	function tt(e, t) {
		e.push("[");
		var n = "[";
		t.stylesheets.forEach(function(t) {
			if (t.state !== 2) if (t.state === 3) e.push(n), t = Ge("" + t.props.href), e.push(t), e.push("]"), n = ",[";
			else {
				e.push(n);
				var r = t.props["data-precedence"], a = t.props, o = R("" + t.props.href);
				for (var s in o = Ge(o), e.push(o), r = "" + r, e.push(","), r = Ge(r), e.push(r), a) if (D.call(a, s) && (r = a[s], r != null)) switch (s) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
					default: q(e, s, r);
				}
				e.push("]"), n = ",[", t.state = 3;
			}
		}), e.push("]");
	}
	function q(e, t, n) {
		var r = t.toLowerCase();
		switch (typeof n) {
			case "function":
			case "symbol": return;
		}
		switch (t) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				r = "class", t = "" + n;
				break;
			case "hidden":
				if (!1 === n) return;
				t = "";
				break;
			case "src":
			case "href":
				n = R(n), t = "" + n;
				break;
			default:
				if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !j(t)) return;
				t = "" + n;
		}
		e.push(","), r = Ge(r), e.push(r), e.push(","), r = Ge(t), e.push(r);
	}
	function J() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function nt(e) {
		var t = jn || null;
		if (t) {
			var n = t.resumableState, r = t.renderState;
			if (typeof e == "string" && e) {
				if (!n.dnsResources.hasOwnProperty(e)) {
					n.dnsResources[e] = null, n = r.headers;
					var i, a;
					(a = n && 0 < n.remainingCapacity) && (a = (i = "<" + ("" + e).replace(dt, ft) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= i.length + 2))), a ? (r.resets.dns[e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += i) : (i = [], Te(i, {
						href: e,
						rel: "dns-prefetch"
					}), r.preconnects.add(i));
				}
				Er(t);
			}
		} else B.D(e);
	}
	function rt(e, t) {
		var n = jn || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (typeof e == "string" && e) {
				var a = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
				if (!r.connectResources[a].hasOwnProperty(e)) {
					r.connectResources[a][e] = null, r = i.headers;
					var o, s;
					if (s = r && 0 < r.remainingCapacity) {
						if (s = "<" + ("" + e).replace(dt, ft) + ">; rel=preconnect", typeof t == "string") {
							var c = ("" + t).replace(pt, mt);
							s += "; crossorigin=\"" + c + "\"";
						}
						s = (o = s, 0 <= (r.remainingCapacity -= o.length + 2));
					}
					s ? (i.resets.connect[a][e] = null, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (a = [], Te(a, {
						rel: "preconnect",
						href: e,
						crossOrigin: t
					}), i.preconnects.add(a));
				}
				Er(n);
			}
		} else B.C(e, t);
	}
	function it(e, t, n) {
		var r = jn || null;
		if (r) {
			var i = r.resumableState, a = r.renderState;
			if (t && e) {
				switch (t) {
					case "image":
						if (n) var o = n.imageSrcSet, s = n.imageSizes, c = n.fetchPriority;
						var l = o ? o + "\n" + (s || "") : e;
						if (i.imageResources.hasOwnProperty(l)) return;
						i.imageResources[l] = re, i = a.headers;
						var u;
						i && 0 < i.remainingCapacity && typeof o != "string" && c === "high" && (u = ut(e, t, n), 0 <= (i.remainingCapacity -= u.length + 2)) ? (a.resets.image[l] = re, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (i = [], Te(i, E({
							rel: "preload",
							href: o ? void 0 : e,
							as: t
						}, n)), c === "high" ? a.highImagePreloads.add(i) : (a.bulkPreloads.add(i), a.preloads.images.set(l, i)));
						break;
					case "style":
						if (i.styleResources.hasOwnProperty(e)) return;
						o = [], Te(o, E({
							rel: "preload",
							href: e,
							as: t
						}, n)), i.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? re : [n.crossOrigin, n.integrity], a.preloads.stylesheets.set(e, o), a.bulkPreloads.add(o);
						break;
					case "script":
						if (i.scriptResources.hasOwnProperty(e)) return;
						o = [], a.preloads.scripts.set(e, o), a.bulkPreloads.add(o), Te(o, E({
							rel: "preload",
							href: e,
							as: t
						}, n)), i.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? re : [n.crossOrigin, n.integrity];
						break;
					default:
						if (i.unknownResources.hasOwnProperty(t)) {
							if (o = i.unknownResources[t], o.hasOwnProperty(e)) return;
						} else o = {}, i.unknownResources[t] = o;
						if (o[e] = re, (i = a.headers) && 0 < i.remainingCapacity && t === "font" && (l = ut(e, t, n), 0 <= (i.remainingCapacity -= l.length + 2))) a.resets.font[e] = re, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += l;
						else switch (i = [], e = E({
							rel: "preload",
							href: e,
							as: t
						}, n), Te(i, e), t) {
							case "font":
								a.fontPreloads.add(i);
								break;
							default: a.bulkPreloads.add(i);
						}
				}
				Er(r);
			}
		} else B.L(e, t, n);
	}
	function at(e, t) {
		var n = jn || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = t && typeof t.as == "string" ? t.as : "script";
				switch (a) {
					case "script":
						if (r.moduleScriptResources.hasOwnProperty(e)) return;
						a = [], r.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? re : [t.crossOrigin, t.integrity], i.preloads.moduleScripts.set(e, a);
						break;
					default:
						if (r.moduleUnknownResources.hasOwnProperty(a)) {
							var o = r.unknownResources[a];
							if (o.hasOwnProperty(e)) return;
						} else o = {}, r.moduleUnknownResources[a] = o;
						a = [], o[e] = re;
				}
				Te(a, E({
					rel: "modulepreload",
					href: e
				}, t)), i.bulkPreloads.add(a), Er(n);
			}
		} else B.m(e, t);
	}
	function ot(e, t, n) {
		var r = jn || null;
		if (r) {
			var i = r.resumableState, a = r.renderState;
			if (e) {
				t ||= "default";
				var o = a.styles.get(t), s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
				s !== null && (i.styleResources[e] = null, o || (o = {
					precedence: F(t),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, a.styles.set(t, o)), t = {
					state: 0,
					props: E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n)
				}, s && (s.length === 2 && lt(t.props, s), (a = a.preloads.stylesheets.get(e)) && 0 < a.length ? a.length = 0 : t.state = 1), o.sheets.set(e, t), Er(r));
			}
		} else B.S(e, t, n);
	}
	function st(e, t) {
		var n = jn || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
				a !== null && (r.scriptResources[e] = null, t = E({
					src: e,
					async: !0
				}, t), a && (a.length === 2 && lt(t, a), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), Ae(e, t), Er(n));
			}
		} else B.X(e, t);
	}
	function ct(e, t) {
		var n = jn || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
				a !== null && (r.moduleScriptResources[e] = null, t = E({
					src: e,
					type: "module",
					async: !0
				}, t), a && (a.length === 2 && lt(t, a), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), Ae(e, t), Er(n));
			}
		} else B.M(e, t);
	}
	function lt(e, t) {
		e.crossOrigin ??= t[0], e.integrity ??= t[1];
	}
	function ut(e, t, n) {
		for (var r in e = ("" + e).replace(dt, ft), t = ("" + t).replace(pt, mt), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) D.call(n, r) && (e = n[r], typeof e == "string" && (t += "; " + r.toLowerCase() + "=\"" + ("" + e).replace(pt, mt) + "\""));
		return t;
	}
	var dt = /[<>\r\n]/g;
	function ft(e) {
		switch (e) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var pt = /["';,\r\n]/g;
	function mt(e) {
		switch (e) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function ht(e) {
		this.styles.add(e);
	}
	function gt(e) {
		this.stylesheets.add(e);
	}
	function _t(e, t) {
		t.styles.forEach(ht, e), t.stylesheets.forEach(gt, e), t.suspenseyImages && (e.suspenseyImages = !0);
	}
	function vt(e, t) {
		var n = e.idPrefix, r = [], i = e.bootstrapScriptContent, a = e.bootstrapScripts, o = e.bootstrapModules;
		i !== void 0 && (r.push("<script"), et(r, e), r.push(">", ("" + i).replace(ae, oe), "<\/script>")), i = n + "P:";
		var s = n + "S:";
		n += "B:";
		var c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Set(), h = {
			images: /* @__PURE__ */ new Map(),
			stylesheets: /* @__PURE__ */ new Map(),
			scripts: /* @__PURE__ */ new Map(),
			moduleScripts: /* @__PURE__ */ new Map()
		};
		if (a !== void 0) for (var g = 0; g < a.length; g++) {
			var _ = a[g], v, y = void 0, b = void 0, x = {
				rel: "preload",
				as: "script",
				fetchPriority: "low",
				nonce: void 0
			};
			typeof _ == "string" ? x.href = v = _ : (x.href = v = _.src, x.integrity = b = typeof _.integrity == "string" ? _.integrity : void 0, x.crossOrigin = y = typeof _ == "string" || _.crossOrigin == null ? void 0 : _.crossOrigin === "use-credentials" ? "use-credentials" : ""), _ = e;
			var S = v;
			_.scriptResources[S] = null, _.moduleScriptResources[S] = null, _ = [], Te(_, x), f.add(_), r.push("<script src=\"", F(v), "\""), typeof b == "string" && r.push(" integrity=\"", F(b), "\""), typeof y == "string" && r.push(" crossorigin=\"", F(y), "\""), et(r, e), r.push(" async=\"\"><\/script>");
		}
		if (o !== void 0) for (a = 0; a < o.length; a++) x = o[a], y = v = void 0, b = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: void 0
		}, typeof x == "string" ? b.href = g = x : (b.href = g = x.src, b.integrity = y = typeof x.integrity == "string" ? x.integrity : void 0, b.crossOrigin = v = typeof x == "string" || x.crossOrigin == null ? void 0 : x.crossOrigin === "use-credentials" ? "use-credentials" : ""), x = e, _ = g, x.scriptResources[_] = null, x.moduleScriptResources[_] = null, x = [], Te(x, b), f.add(x), r.push("<script type=\"module\" src=\"", F(g), "\""), typeof y == "string" && r.push(" integrity=\"", F(y), "\""), typeof v == "string" && r.push(" crossorigin=\"", F(v), "\""), et(r, e), r.push(" async=\"\"><\/script>");
		return {
			placeholderPrefix: i,
			segmentPrefix: s,
			boundaryPrefix: n,
			startInlineScript: "<script",
			startInlineStyle: "<style",
			preamble: {
				htmlChunks: null,
				headChunks: null,
				bodyChunks: null
			},
			externalRuntimeScript: null,
			bootstrapChunks: r,
			importMapChunks: [],
			onHeaders: void 0,
			headers: null,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: c,
			fontPreloads: l,
			highImagePreloads: u,
			styles: d,
			bootstrapScripts: f,
			scripts: p,
			bulkPreloads: m,
			preloads: h,
			nonce: {
				script: void 0,
				style: void 0
			},
			stylesToHoist: !1,
			generateStaticMarkup: t
		};
	}
	function yt(e, t, n, r) {
		return n.generateStaticMarkup ? (e.push(F(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(F(t)), e = !0), e);
	}
	function bt(e, t, n, r) {
		t.generateStaticMarkup || n && r && e.push("<!-- -->");
	}
	var xt = Function.prototype.bind, St = Symbol.for("react.client.reference");
	function Ct(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === St ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case s: return "Fragment";
			case l: return "Profiler";
			case c: return "StrictMode";
			case p: return "Suspense";
			case m: return "SuspenseList";
			case v: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case o: return "Portal";
			case d: return e.displayName || "Context";
			case u: return (e._context.displayName || "Context") + ".Consumer";
			case f:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case h: return t = e.displayName || null, t === null ? Ct(e.type) || "Memo" : t;
			case g:
				t = e._payload, e = e._init;
				try {
					return Ct(e(t));
				} catch {}
		}
		return null;
	}
	var wt = {}, Tt = null;
	function Et(e, t) {
		if (e !== t) {
			e.context._currentValue2 = e.parentValue, e = e.parent;
			var n = t.parent;
			if (e === null) {
				if (n !== null) throw Error(i(401));
			} else {
				if (n === null) throw Error(i(401));
				Et(e, n);
			}
			t.context._currentValue2 = t.value;
		}
	}
	function Dt(e) {
		e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Dt(e);
	}
	function Ot(e) {
		var t = e.parent;
		t !== null && Ot(t), e.context._currentValue2 = e.value;
	}
	function kt(e, t) {
		if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(i(402));
		e.depth === t.depth ? Et(e, t) : kt(e, t);
	}
	function At(e, t) {
		var n = t.parent;
		if (n === null) throw Error(i(402));
		e.depth === n.depth ? Et(e, n) : At(e, n), t.context._currentValue2 = t.value;
	}
	function jt(e) {
		var t = Tt;
		t !== e && (t === null ? Ot(e) : e === null ? Dt(t) : t.depth === e.depth ? Et(t, e) : t.depth > e.depth ? kt(t, e) : At(t, e), Tt = e);
	}
	var Mt = {
		enqueueSetState: function(e, t) {
			e = e._reactInternals, e.queue !== null && e.queue.push(t);
		},
		enqueueReplaceState: function(e, t) {
			e = e._reactInternals, e.replace = !0, e.queue = [t];
		},
		enqueueForceUpdate: function() {}
	}, Nt = {
		id: 1,
		overflow: ""
	};
	function Pt(e, t, n) {
		var r = e.id;
		e = e.overflow;
		var i = 32 - Ft(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ft(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
				id: 1 << 32 - Ft(t) + i | n << i | r,
				overflow: a + e
			};
		}
		return {
			id: 1 << a | n << i | r,
			overflow: e
		};
	}
	var Ft = Math.clz32 ? Math.clz32 : Rt, It = Math.log, Lt = Math.LN2;
	function Rt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (It(e) / Lt | 0) | 0;
	}
	function zt() {}
	var Y = Error(i(460));
	function Bt(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(zt, zt), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw t.reason;
			default:
				switch (typeof t.status == "string" ? t.then(zt, zt) : (e = t, e.status = "pending", e.then(function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "fulfilled", n.value = e;
					}
				}, function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "rejected", n.reason = e;
					}
				})), t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw t.reason;
				}
				throw Vt = t, Y;
		}
	}
	var Vt = null;
	function Ht() {
		if (Vt === null) throw Error(i(459));
		var e = Vt;
		return Vt = null, e;
	}
	function Ut(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Wt = typeof Object.is == "function" ? Object.is : Ut, Gt = null, Kt = null, qt = null, Jt = null, Yt = null, X = null, Xt = !1, Zt = !1, Qt = 0, Z = 0, $t = -1, en = 0, tn = null, nn = null, Q = 0;
	function $() {
		if (Gt === null) throw Error(i(321));
		return Gt;
	}
	function rn() {
		if (0 < Q) throw Error(i(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function an() {
		return X === null ? Yt === null ? (Xt = !1, Yt = X = rn()) : (Xt = !0, X = Yt) : X.next === null ? (Xt = !1, X = X.next = rn()) : (Xt = !0, X = X.next), X;
	}
	function on() {
		var e = tn;
		return tn = null, e;
	}
	function sn() {
		Jt = qt = Kt = Gt = null, Zt = !1, Yt = null, Q = 0, X = nn = null;
	}
	function cn(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ln(e, t, n) {
		if (Gt = $(), X = an(), Xt) {
			var r = X.queue;
			if (t = r.dispatch, nn !== null && (n = nn.get(r), n !== void 0)) {
				nn.delete(r), r = X.memoizedState;
				do
					r = e(r, n.action), n = n.next;
				while (n !== null);
				return X.memoizedState = r, [r, t];
			}
			return [X.memoizedState, t];
		}
		return e = e === cn ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), X.memoizedState = e, e = X.queue = {
			last: null,
			dispatch: null
		}, e = e.dispatch = dn.bind(null, Gt, e), [X.memoizedState, e];
	}
	function un(e, t) {
		if (Gt = $(), X = an(), t = t === void 0 ? null : t, X !== null) {
			var n = X.memoizedState;
			if (n !== null && t !== null) {
				var r = n[1];
				a: if (r === null) r = !1;
				else {
					for (var i = 0; i < r.length && i < t.length; i++) if (!Wt(t[i], r[i])) {
						r = !1;
						break a;
					}
					r = !0;
				}
				if (r) return n[0];
			}
		}
		return e = e(), X.memoizedState = [e, t], e;
	}
	function dn(e, t, n) {
		if (25 <= Q) throw Error(i(301));
		if (e === Gt) if (Zt = !0, e = {
			action: n,
			next: null
		}, nn === null && (nn = /* @__PURE__ */ new Map()), n = nn.get(t), n === void 0) nn.set(t, e);
		else {
			for (t = n; t.next !== null;) t = t.next;
			t.next = e;
		}
	}
	function fn() {
		throw Error(i(440));
	}
	function pn() {
		throw Error(i(394));
	}
	function mn() {
		throw Error(i(479));
	}
	function hn(e, t, n) {
		$();
		var r = Z++, i = qt;
		if (typeof e.$$FORM_ACTION == "function") {
			var a = null, o = Jt;
			i = i.formState;
			var s = e.$$IS_SIGNATURE_EQUAL;
			if (i !== null && typeof s == "function") {
				var c = i[1];
				s.call(e, i[2], i[3]) && (a = n === void 0 ? "k" + T(JSON.stringify([
					o,
					null,
					r
				]), 0) : "p" + n, c === a && ($t = r, t = i[0]));
			}
			var l = e.bind(null, t);
			return e = function(e) {
				l(e);
			}, typeof l.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
				e = l.$$FORM_ACTION(e), n !== void 0 && (n += "", e.action = n);
				var t = e.data;
				return t && (a === null && (a = n === void 0 ? "k" + T(JSON.stringify([
					o,
					null,
					r
				]), 0) : "p" + n), t.append("$ACTION_KEY", a)), e;
			}), [
				t,
				e,
				!1
			];
		}
		var u = e.bind(null, t);
		return [
			t,
			function(e) {
				u(e);
			},
			!1
		];
	}
	function gn(e) {
		var t = en;
		return en += 1, tn === null && (tn = []), Bt(tn, e, t);
	}
	function _n() {
		throw Error(i(393));
	}
	var vn = {
		readContext: function(e) {
			return e._currentValue2;
		},
		use: function(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return gn(e);
				if (e.$$typeof === d) return e._currentValue2;
			}
			throw Error(i(438, String(e)));
		},
		useContext: function(e) {
			return $(), e._currentValue2;
		},
		useMemo: un,
		useReducer: ln,
		useRef: function(e) {
			Gt = $(), X = an();
			var t = X.memoizedState;
			return t === null ? (e = { current: e }, X.memoizedState = e) : t;
		},
		useState: function(e) {
			return ln(cn, e);
		},
		useInsertionEffect: zt,
		useLayoutEffect: zt,
		useCallback: function(e, t) {
			return un(function() {
				return e;
			}, t);
		},
		useImperativeHandle: zt,
		useEffect: zt,
		useDebugValue: zt,
		useDeferredValue: function(e, t) {
			return $(), t === void 0 ? e : t;
		},
		useTransition: function() {
			return $(), [!1, pn];
		},
		useId: function() {
			var e = Kt.treeContext, t = e.overflow;
			e = e.id, e = (e & ~(1 << 32 - Ft(e) - 1)).toString(32) + t;
			var n = yn;
			if (n === null) throw Error(i(404));
			return t = Qt++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
		},
		useSyncExternalStore: function(e, t, n) {
			if (n === void 0) throw Error(i(407));
			return n();
		},
		useOptimistic: function(e) {
			return $(), [e, mn];
		},
		useActionState: hn,
		useFormState: hn,
		useHostTransitionStatus: function() {
			return $(), ne;
		},
		useMemoCache: function(e) {
			for (var t = Array(e), n = 0; n < e; n++) t[n] = b;
			return t;
		},
		useCacheRefresh: function() {
			return _n;
		},
		useEffectEvent: function() {
			return fn;
		}
	}, yn = null, bn = {
		getCacheForType: function() {
			throw Error(i(248));
		},
		cacheSignal: function() {
			throw Error(i(248));
		}
	}, xn, Sn;
	function Cn(e) {
		if (xn === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			xn = t && t[1] || "", Sn = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + xn + e + Sn;
	}
	var wn = !1;
	function Tn(e, t) {
		if (!e || wn) return "";
		wn = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			wn = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Cn(n) : "";
	}
	function En(e) {
		if (typeof e == "string") return Cn(e);
		if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? Tn(e, !0) : Tn(e, !1);
		if (typeof e == "object" && e) {
			switch (e.$$typeof) {
				case f: return Tn(e.render, !1);
				case h: return Tn(e.type, !1);
				case g:
					var t = e, n = t._payload;
					t = t._init;
					try {
						e = t(n);
					} catch {
						return Cn("Lazy");
					}
					return En(e);
			}
			if (typeof e.name == "string") {
				a: {
					n = e.name, t = e.env;
					var r = e.debugLocation;
					if (r != null && (e = Error.prepareStackTrace, Error.prepareStackTrace = void 0, r = r.stack, Error.prepareStackTrace = e, r.startsWith("Error: react-stack-top-frame\n") && (r = r.slice(29)), e = r.indexOf("\n"), e !== -1 && (r = r.slice(e + 1)), e = r.indexOf("react_stack_bottom_frame"), e !== -1 && (e = r.lastIndexOf("\n", e)), e = e === -1 ? "" : r = r.slice(0, e), r = e.lastIndexOf("\n"), e = r === -1 ? e : e.slice(r + 1), e.indexOf(n) !== -1)) {
						n = "\n" + e;
						break a;
					}
					n = Cn(n + (t ? " [" + t + "]" : ""));
				}
				return n;
			}
		}
		switch (e) {
			case m: return Cn("SuspenseList");
			case p: return Cn("Suspense");
		}
		return "";
	}
	function Dn(e, t) {
		return (500 < t.byteSize || !1) && t.contentPreamble === null;
	}
	function On(e) {
		if (typeof e == "object" && e && typeof e.environmentName == "string") {
			var t = e.environmentName;
			e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "[%s] " + e[0], " " + t + " ") : e.splice(0, 0, "[%s]", " " + t + " "), e.unshift(console), t = xt.apply(console.error, e), t();
		} else console.error(e);
		return null;
	}
	function kn(e, t, n, r, i, a, o, s, c, l, u) {
		var d = /* @__PURE__ */ new Set();
		this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = r === void 0 ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = i === void 0 ? On : i, this.onPostpone = l === void 0 ? zt : l, this.onAllReady = a === void 0 ? zt : a, this.onShellReady = o === void 0 ? zt : o, this.onShellError = s === void 0 ? zt : s, this.onFatalError = c === void 0 ? zt : c, this.formState = u === void 0 ? null : u;
	}
	function An(e, t, n, r, i, a, o, s, c, l, u, d) {
		return t = new kn(t, n, r, i, a, o, s, c, l, u, d), n = In(t, 0, null, r, !1, !1), n.parentFlushed = !0, e = Pn(t, null, e, -1, null, n, null, null, t.abortableTasks, null, r, null, Nt, null, null), Ln(e), t.pingedTasks.push(e), t;
	}
	var jn = null;
	function Mn(e, t) {
		e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, mr(e));
	}
	function Nn(e, t, n, r, i) {
		return n = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row: t,
			completedSegments: [],
			byteSize: 0,
			fallbackAbortableTasks: n,
			errorDigest: null,
			contentState: J(),
			fallbackState: J(),
			contentPreamble: r,
			fallbackPreamble: i,
			trackedContentKeyPath: null,
			trackedFallbackNode: null
		}, t !== null && (t.pendingTasks++, r = t.boundaries, r !== null && (e.allPendingTasks++, n.pendingTasks++, r.push(n)), e = t.inheritedHoistables, e !== null && _t(n.contentState, e)), n;
	}
	function Pn(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
		e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++, p !== null && p.pendingTasks++;
		var h = {
			replay: null,
			node: n,
			childIndex: r,
			ping: function() {
				return Mn(e, h);
			},
			blockedBoundary: i,
			blockedSegment: a,
			blockedPreamble: o,
			hoistableState: s,
			abortSet: c,
			keyPath: l,
			formatContext: u,
			context: d,
			treeContext: f,
			row: p,
			componentStack: m,
			thenableState: t
		};
		return c.add(h), h;
	}
	function Fn(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, f !== null && f.pendingTasks++, n.pendingTasks++;
		var m = {
			replay: n,
			node: r,
			childIndex: i,
			ping: function() {
				return Mn(e, m);
			},
			blockedBoundary: a,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState: o,
			abortSet: s,
			keyPath: c,
			formatContext: l,
			context: u,
			treeContext: d,
			row: f,
			componentStack: p,
			thenableState: t
		};
		return s.add(m), m;
	}
	function In(e, t, n, r, i, a) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index: t,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext: r,
			boundary: n,
			lastPushedText: i,
			textEmbedded: a
		};
	}
	function Ln(e) {
		var t = e.node;
		if (typeof t == "object" && t) switch (t.$$typeof) {
			case a: e.componentStack = {
				parent: e.componentStack,
				type: t.type
			};
		}
	}
	function Rn(e) {
		return e === null ? null : {
			parent: e.parent,
			type: "Suspense Fallback"
		};
	}
	function zn(e) {
		var t = {};
		return e && Object.defineProperty(t, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var n = "", r = e;
					do
						n += En(r.type), r = r.parent;
					while (r);
					var i = n;
				} catch (e) {
					i = "\nError generating stack: " + e.message + "\n" + e.stack;
				}
				return Object.defineProperty(t, "componentStack", { value: i }), i;
			}
		}), t;
	}
	function Bn(e, t, n) {
		if (e = e.onError, t = e(t, n), t == null || typeof t == "string") return t;
	}
	function Vn(e, t) {
		var n = e.onShellError, r = e.onFatalError;
		n(t), r(t), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = 14, e.destination.destroy(t));
	}
	function Hn(e, t) {
		Un(e, t.next, t.hoistables);
	}
	function Un(e, t, n) {
		for (; t !== null;) {
			n !== null && (_t(t.hoistables, n), t.inheritedHoistables = n);
			var r = t.boundaries;
			if (r !== null) {
				t.boundaries = null;
				for (var i = 0; i < r.length; i++) {
					var a = r[i];
					n !== null && _t(a.contentState, n), pr(e, a, null, null);
				}
			}
			if (t.pendingTasks--, 0 < t.pendingTasks) break;
			n = t.hoistables, t = t.next;
		}
	}
	function Wn(e, t) {
		var n = t.boundaries;
		if (n !== null && t.pendingTasks === n.length) {
			for (var r = !0, i = 0; i < n.length; i++) {
				var a = n[i];
				if (a.pendingTasks !== 1 || a.parentFlushed || Dn(e, a)) {
					r = !1;
					break;
				}
			}
			r && Un(e, t, t.hoistables);
		}
	}
	function Gn(e) {
		var t = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: J(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
	}
	function Kn(e, t, n, r, i) {
		var a = t.keyPath, o = t.treeContext, s = t.row;
		t.keyPath = n, n = r.length;
		var c = null;
		if (t.replay !== null) {
			var l = t.replay.slots;
			if (typeof l == "object" && l) for (var u = 0; u < n; u++) {
				var d = i !== "backwards" && i !== "unstable_legacy-backwards" ? u : n - 1 - u, f = r[d];
				t.row = c = Gn(c), t.treeContext = Pt(o, n, d);
				var p = l[d];
				typeof p == "number" ? (Xn(e, t, p, f, d), delete l[d]) : ar(e, t, f, d), --c.pendingTasks === 0 && Hn(e, c);
			}
			else for (l = 0; l < n; l++) u = i !== "backwards" && i !== "unstable_legacy-backwards" ? l : n - 1 - l, d = r[u], t.row = c = Gn(c), t.treeContext = Pt(o, n, u), ar(e, t, d, u), --c.pendingTasks === 0 && Hn(e, c);
		} else if (i !== "backwards" && i !== "unstable_legacy-backwards") for (i = 0; i < n; i++) l = r[i], t.row = c = Gn(c), t.treeContext = Pt(o, n, i), ar(e, t, l, i), --c.pendingTasks === 0 && Hn(e, c);
		else {
			for (i = t.blockedSegment, l = i.children.length, u = i.chunks.length, d = n - 1; 0 <= d; d--) {
				f = r[d], t.row = c = Gn(c), t.treeContext = Pt(o, n, d), p = In(e, u, null, t.formatContext, d === 0 ? i.lastPushedText : !0, !0), i.children.splice(l, 0, p), t.blockedSegment = p;
				try {
					ar(e, t, f, d), bt(p.chunks, e.renderState, p.lastPushedText, p.textEmbedded), p.status = 1, --c.pendingTasks === 0 && Hn(e, c);
				} catch (t) {
					throw p.status = e.status === 12 ? 3 : 4, t;
				}
			}
			t.blockedSegment = i, i.lastPushedText = !1;
		}
		s !== null && c !== null && 0 < c.pendingTasks && (s.pendingTasks++, c.next = s), t.treeContext = o, t.row = s, t.keyPath = a;
	}
	function qn(e, t, n, r, i, a) {
		var o = t.thenableState;
		for (t.thenableState = null, Gt = {}, Kt = t, qt = e, Jt = n, Z = Qt = 0, $t = -1, en = 0, tn = o, e = r(i, a); Zt;) Zt = !1, Z = Qt = 0, $t = -1, en = 0, Q += 1, X = null, e = r(i, a);
		return sn(), e;
	}
	function Jn(e, t, n, r, i, a, o) {
		var s = !1;
		if (a !== 0 && e.formState !== null) {
			var c = t.blockedSegment;
			if (c !== null) {
				s = !0, c = c.chunks;
				for (var l = 0; l < a; l++) l === o ? c.push("<!--F!-->") : c.push("<!--F-->");
			}
		}
		a = t.keyPath, t.keyPath = n, i ? (n = t.treeContext, t.treeContext = Pt(n, 1, 0), ar(e, t, r, -1), t.treeContext = n) : s ? ar(e, t, r, -1) : Zn(e, t, r, -1), t.keyPath = a;
	}
	function Yn(e, t, n, r, a, o) {
		if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
			var b = a;
			if ("ref" in a) for (var S in b = {}, a) S !== "ref" && (b[S] = a[S]);
			var T = r.defaultProps;
			if (T) for (var D in b === a && (b = E({}, b, a)), T) b[D] === void 0 && (b[D] = T[D]);
			a = b, b = wt, T = r.contextType, typeof T == "object" && T && (b = T._currentValue2), b = new r(a, b);
			var O = b.state === void 0 ? null : b.state;
			if (b.updater = Mt, b.props = a, b.state = O, T = {
				queue: [],
				replace: !1
			}, b._reactInternals = T, o = r.contextType, b.context = typeof o == "object" && o ? o._currentValue2 : wt, o = r.getDerivedStateFromProps, typeof o == "function" && (o = o(a, O), O = o == null ? O : E({}, O, o), b.state = O), typeof r.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function")) if (r = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), r !== b.state && Mt.enqueueReplaceState(b, b.state, null), T.queue !== null && 0 < T.queue.length) if (r = T.queue, o = T.replace, T.queue = null, T.replace = !1, o && r.length === 1) b.state = r[0];
			else {
				for (T = o ? r[0] : b.state, O = !0, o = +!!o; o < r.length; o++) D = r[o], D = typeof D == "function" ? D.call(b, T, a, void 0) : D, D != null && (O ? (O = !1, T = E({}, T, D)) : E(T, D));
				b.state = T;
			}
			else T.queue = null;
			if (r = b.render(), e.status === 12) throw null;
			a = t.keyPath, t.keyPath = n, Zn(e, t, r, -1), t.keyPath = a;
		} else {
			if (r = qn(e, t, n, r, a, void 0), e.status === 12) throw null;
			Jn(e, t, n, r, Qt !== 0, Z, $t);
		}
		else if (typeof r == "string") if (b = t.blockedSegment, b === null) b = a.children, T = t.formatContext, O = t.keyPath, t.formatContext = le(T, r, a), t.keyPath = n, ar(e, t, b, -1), t.formatContext = T, t.keyPath = O;
		else {
			if (O = H(b.chunks, r, a, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, b.lastPushedText), b.lastPushedText = !1, T = t.formatContext, o = t.keyPath, t.keyPath = n, (t.formatContext = le(T, r, a)).insertionMode === 3) {
				n = In(e, 0, null, t.formatContext, !1, !1), b.preambleChildren.push(n), t.blockedSegment = n;
				try {
					n.status = 6, ar(e, t, O, -1), bt(n.chunks, e.renderState, n.lastPushedText, n.textEmbedded), n.status = 1;
				} finally {
					t.blockedSegment = b;
				}
			} else ar(e, t, O, -1);
			t.formatContext = T, t.keyPath = o;
			a: {
				switch (t = b.chunks, e = e.resumableState, r) {
					case "title":
					case "style":
					case "script":
					case "area":
					case "base":
					case "br":
					case "col":
					case "embed":
					case "hr":
					case "img":
					case "input":
					case "keygen":
					case "link":
					case "meta":
					case "param":
					case "source":
					case "track":
					case "wbr": break a;
					case "body":
						if (1 >= T.insertionMode) {
							e.hasBody = !0;
							break a;
						}
						break;
					case "html":
						if (T.insertionMode === 0) {
							e.hasHtml = !0;
							break a;
						}
						break;
					case "head": if (1 >= T.insertionMode) break a;
				}
				t.push(Le(r));
			}
			b.lastPushedText = !1;
		}
		else {
			switch (r) {
				case y:
				case c:
				case l:
				case s:
					r = t.keyPath, t.keyPath = n, Zn(e, t, a.children, -1), t.keyPath = r;
					return;
				case v:
					r = t.blockedSegment, r === null ? a.mode !== "hidden" && (r = t.keyPath, t.keyPath = n, ar(e, t, a.children, -1), t.keyPath = r) : a.mode !== "hidden" && (e.renderState.generateStaticMarkup || r.chunks.push("<!--&-->"), r.lastPushedText = !1, b = t.keyPath, t.keyPath = n, ar(e, t, a.children, -1), t.keyPath = b, e.renderState.generateStaticMarkup || r.chunks.push("<!--/&-->"), r.lastPushedText = !1);
					return;
				case m:
					a: {
						if (r = a.children, a = a.revealOrder, a === "forwards" || a === "backwards" || a === "unstable_legacy-backwards") {
							if (w(r)) {
								Kn(e, t, n, r, a);
								break a;
							}
							if ((b = C(r)) && (b = b.call(r))) {
								if (T = b.next(), !T.done) {
									do
										T = b.next();
									while (!T.done);
									Kn(e, t, n, r, a);
								}
								break a;
							}
						}
						a === "together" ? (a = t.keyPath, b = t.row, T = t.row = Gn(null), T.boundaries = [], T.together = !0, t.keyPath = n, Zn(e, t, r, -1), --T.pendingTasks === 0 && Hn(e, T), t.keyPath = a, t.row = b, b !== null && 0 < T.pendingTasks && (b.pendingTasks++, T.next = b)) : (a = t.keyPath, t.keyPath = n, Zn(e, t, r, -1), t.keyPath = a);
					}
					return;
				case x:
				case _: throw Error(i(343));
				case p:
					a: if (t.replay !== null) {
						r = t.keyPath, b = t.formatContext, T = t.row, t.keyPath = n, t.formatContext = de(e.resumableState, b), t.row = null, n = a.children;
						try {
							ar(e, t, n, -1);
						} finally {
							t.keyPath = r, t.formatContext = b, t.row = T;
						}
					} else {
						r = t.keyPath, o = t.formatContext;
						var k = t.row, A = t.blockedBoundary;
						D = t.blockedPreamble;
						var j = t.hoistableState;
						S = t.blockedSegment;
						var M = a.fallback;
						a = a.children;
						var N = /* @__PURE__ */ new Set(), P = Nn(e, t.row, N, null, null);
						e.trackedPostpones !== null && (P.trackedContentKeyPath = n);
						var F = In(e, S.chunks.length, P, t.formatContext, !1, !1);
						S.children.push(F), S.lastPushedText = !1;
						var ee = In(e, 0, null, t.formatContext, !1, !1);
						if (ee.parentFlushed = !0, e.trackedPostpones !== null) {
							b = t.componentStack, T = [
								n[0],
								"Suspense Fallback",
								n[2]
							], O = [
								T[1],
								T[2],
								[],
								null
							], e.trackedPostpones.workingMap.set(T, O), P.trackedFallbackNode = O, t.blockedSegment = F, t.blockedPreamble = P.fallbackPreamble, t.keyPath = T, t.formatContext = ue(e.resumableState, o), t.componentStack = Rn(b), F.status = 6;
							try {
								ar(e, t, M, -1), bt(F.chunks, e.renderState, F.lastPushedText, F.textEmbedded), F.status = 1;
							} catch (t) {
								throw F.status = e.status === 12 ? 3 : 4, t;
							} finally {
								t.blockedSegment = S, t.blockedPreamble = D, t.keyPath = r, t.formatContext = o;
							}
							t = Pn(e, null, a, -1, P, ee, P.contentPreamble, P.contentState, t.abortSet, n, de(e.resumableState, t.formatContext), t.context, t.treeContext, null, b), Ln(t), e.pingedTasks.push(t);
						} else {
							t.blockedBoundary = P, t.blockedPreamble = P.contentPreamble, t.hoistableState = P.contentState, t.blockedSegment = ee, t.keyPath = n, t.formatContext = de(e.resumableState, o), t.row = null, ee.status = 6;
							try {
								if (ar(e, t, a, -1), bt(ee.chunks, e.renderState, ee.lastPushedText, ee.textEmbedded), ee.status = 1, fr(P, ee), P.pendingTasks === 0 && P.status === 0) {
									if (P.status = 1, !Dn(e, P)) {
										k !== null && --k.pendingTasks === 0 && Hn(e, k), e.pendingRootTasks === 0 && t.blockedPreamble && _r(e);
										break a;
									}
								} else k !== null && k.together && Wn(e, k);
							} catch (n) {
								P.status = 4, e.status === 12 ? (ee.status = 3, b = e.fatalError) : (ee.status = 4, b = n), T = zn(t.componentStack), O = Bn(e, b, T), P.errorDigest = O, nr(e, P);
							} finally {
								t.blockedBoundary = A, t.blockedPreamble = D, t.hoistableState = j, t.blockedSegment = S, t.keyPath = r, t.formatContext = o, t.row = k;
							}
							t = Pn(e, null, M, -1, A, F, P.fallbackPreamble, P.fallbackState, N, [
								n[0],
								"Suspense Fallback",
								n[2]
							], ue(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Rn(t.componentStack)), Ln(t), e.pingedTasks.push(t);
						}
					}
					return;
			}
			if (typeof r == "object" && r) switch (r.$$typeof) {
				case f:
					if ("ref" in a) for (M in b = {}, a) M !== "ref" && (b[M] = a[M]);
					else b = a;
					r = qn(e, t, n, r.render, b, o), Jn(e, t, n, r, Qt !== 0, Z, $t);
					return;
				case h:
					Yn(e, t, n, r.type, a, o);
					return;
				case d:
					if (T = a.children, b = t.keyPath, a = a.value, O = r._currentValue2, r._currentValue2 = a, o = Tt, Tt = r = {
						parent: o,
						depth: o === null ? 0 : o.depth + 1,
						context: r,
						parentValue: O,
						value: a
					}, t.context = r, t.keyPath = n, Zn(e, t, T, -1), e = Tt, e === null) throw Error(i(403));
					e.context._currentValue2 = e.parentValue, e = Tt = e.parent, t.context = e, t.keyPath = b;
					return;
				case u:
					a = a.children, r = a(r._context._currentValue2), a = t.keyPath, t.keyPath = n, Zn(e, t, r, -1), t.keyPath = a;
					return;
				case g:
					if (b = r._init, r = b(r._payload), e.status === 12) throw null;
					Yn(e, t, n, r, a, o);
					return;
			}
			throw Error(i(130, r == null ? r : typeof r, ""));
		}
	}
	function Xn(e, t, n, r, i) {
		var a = t.replay, o = t.blockedBoundary, s = In(e, 0, null, t.formatContext, !1, !1);
		s.id = n, s.parentFlushed = !0;
		try {
			t.replay = null, t.blockedSegment = s, ar(e, t, r, i), s.status = 1, o === null ? e.completedRootSegment = s : (fr(o, s), o.parentFlushed && e.partialBoundaries.push(o));
		} finally {
			t.replay = a, t.blockedSegment = null;
		}
	}
	function Zn(e, t, n, r) {
		t.replay !== null && typeof t.replay.slots == "number" ? Xn(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, Ln(t), Qn(e, t), t.componentStack = n);
	}
	function Qn(e, t) {
		var n = t.node, r = t.childIndex;
		if (n !== null) {
			if (typeof n == "object") {
				switch (n.$$typeof) {
					case a:
						var s = n.type, c = n.key, l = n.props;
						n = l.ref;
						var u = n === void 0 ? null : n, f = Ct(s), m = c ?? (r === -1 ? 0 : r);
						if (c = [
							t.keyPath,
							f,
							m
						], t.replay !== null) a: {
							var h = t.replay;
							for (r = h.nodes, n = 0; n < r.length; n++) {
								var _ = r[n];
								if (m === _[1]) {
									if (_.length === 4) {
										if (f !== null && f !== _[0]) throw Error(i(490, _[0], f));
										var v = _[2];
										f = _[3], m = t.node, t.replay = {
											nodes: v,
											slots: f,
											pendingTasks: 1
										};
										try {
											if (Yn(e, t, c, s, l, u), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
											t.replay.pendingTasks--;
										} catch (i) {
											if (typeof i == "object" && i && (i === Y || typeof i.then == "function")) throw t.node === m ? t.replay = h : r.splice(n, 1), i;
											t.replay.pendingTasks--, l = zn(t.componentStack), c = e, e = t.blockedBoundary, s = i, l = Bn(c, s, l), sr(c, e, v, f, s, l);
										}
										t.replay = h;
									} else {
										if (s !== p) throw Error(i(490, "Suspense", Ct(s) || "Unknown"));
										b: {
											h = void 0, s = _[5], u = _[2], f = _[3], m = _[4] === null ? [] : _[4][2], _ = _[4] === null ? null : _[4][3];
											var y = t.keyPath, b = t.formatContext, x = t.row, S = t.replay, T = t.blockedBoundary, E = t.hoistableState, D = l.children, O = l.fallback, k = /* @__PURE__ */ new Set();
											l = Nn(e, t.row, k, null, null), l.parentFlushed = !0, l.rootSegmentID = s, t.blockedBoundary = l, t.hoistableState = l.contentState, t.keyPath = c, t.formatContext = de(e.resumableState, b), t.row = null, t.replay = {
												nodes: u,
												slots: f,
												pendingTasks: 1
											};
											try {
												if (ar(e, t, D, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
												if (t.replay.pendingTasks--, l.pendingTasks === 0 && l.status === 0) {
													l.status = 1, e.completedBoundaries.push(l);
													break b;
												}
											} catch (n) {
												l.status = 4, v = zn(t.componentStack), h = Bn(e, n, v), l.errorDigest = h, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(l);
											} finally {
												t.blockedBoundary = T, t.hoistableState = E, t.replay = S, t.keyPath = y, t.formatContext = b, t.row = x;
											}
											v = Fn(e, null, {
												nodes: m,
												slots: _,
												pendingTasks: 0
											}, O, -1, T, l.fallbackState, k, [
												c[0],
												"Suspense Fallback",
												c[2]
											], ue(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Rn(t.componentStack)), Ln(v), e.pingedTasks.push(v);
										}
									}
									r.splice(n, 1);
									break a;
								}
							}
						}
						else Yn(e, t, c, s, l, u);
						return;
					case o: throw Error(i(257));
					case g:
						if (v = n._init, n = v(n._payload), e.status === 12) throw null;
						Zn(e, t, n, r);
						return;
				}
				if (w(n)) {
					$n(e, t, n, r);
					return;
				}
				if ((v = C(n)) && (v = v.call(n))) {
					if (n = v.next(), !n.done) {
						l = [];
						do
							l.push(n.value), n = v.next();
						while (!n.done);
						$n(e, t, l, r);
					}
					return;
				}
				if (typeof n.then == "function") return t.thenableState = null, Zn(e, t, gn(n), r);
				if (n.$$typeof === d) return Zn(e, t, n._currentValue2, r);
				throw r = Object.prototype.toString.call(n), Error(i(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r));
			}
			typeof n == "string" ? (r = t.blockedSegment, r !== null && (r.lastPushedText = yt(r.chunks, n, e.renderState, r.lastPushedText))) : (typeof n == "number" || typeof n == "bigint") && (r = t.blockedSegment, r !== null && (r.lastPushedText = yt(r.chunks, "" + n, e.renderState, r.lastPushedText)));
		}
	}
	function $n(e, t, n, r) {
		var a = t.keyPath;
		if (r !== -1 && (t.keyPath = [
			t.keyPath,
			"Fragment",
			r
		], t.replay !== null)) {
			for (var o = t.replay, s = o.nodes, c = 0; c < s.length; c++) {
				var l = s[c];
				if (l[1] === r) {
					r = l[2], l = l[3], t.replay = {
						nodes: r,
						slots: l,
						pendingTasks: 1
					};
					try {
						if ($n(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
						t.replay.pendingTasks--;
					} catch (i) {
						if (typeof i == "object" && i && (i === Y || typeof i.then == "function")) throw i;
						t.replay.pendingTasks--, n = zn(t.componentStack);
						var u = t.blockedBoundary, d = i;
						n = Bn(e, d, n), sr(e, u, r, l, d, n);
					}
					t.replay = o, s.splice(c, 1);
					break;
				}
			}
			t.keyPath = a;
			return;
		}
		if (o = t.treeContext, s = n.length, t.replay !== null && (c = t.replay.slots, typeof c == "object" && c)) {
			for (r = 0; r < s; r++) l = n[r], t.treeContext = Pt(o, s, r), u = c[r], typeof u == "number" ? (Xn(e, t, u, l, r), delete c[r]) : ar(e, t, l, r);
			t.treeContext = o, t.keyPath = a;
			return;
		}
		for (c = 0; c < s; c++) r = n[c], t.treeContext = Pt(o, s, c), ar(e, t, r, c);
		t.treeContext = o, t.keyPath = a;
	}
	function er(e, t, n) {
		if (n.status = 5, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error(i(486));
		var r = n.trackedFallbackNode, a = [], o = t.workingMap.get(e);
		return o === void 0 ? (n = [
			e[1],
			e[2],
			a,
			null,
			r,
			n.rootSegmentID
		], t.workingMap.set(e, n), kr(n, e[0], t), n) : (o[4] = r, o[5] = n.rootSegmentID, o);
	}
	function tr(e, t, n, r) {
		r.status = 5;
		var a = n.keyPath, o = n.blockedBoundary;
		if (o === null) r.id = e.nextSegmentId++, t.rootSlots = r.id, e.completedRootSegment !== null && (e.completedRootSegment.status = 5);
		else {
			if (o !== null && o.status === 0) {
				var s = er(e, t, o);
				if (o.trackedContentKeyPath === a && n.childIndex === -1) {
					r.id === -1 && (r.id = r.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), s[3] = r.id;
					return;
				}
			}
			if (r.id === -1 && (r.id = r.parentFlushed && o !== null ? o.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) a === null ? t.rootSlots = r.id : (n = t.workingMap.get(a), n === void 0 ? (n = [
				a[1],
				a[2],
				[],
				r.id
			], kr(n, a[0], t)) : n[3] = r.id);
			else {
				if (a === null) {
					if (e = t.rootSlots, e === null) e = t.rootSlots = {};
					else if (typeof e == "number") throw Error(i(491));
				} else if (o = t.workingMap, s = o.get(a), s === void 0) e = {}, s = [
					a[1],
					a[2],
					[],
					e
				], o.set(a, s), kr(s, a[0], t);
				else if (e = s[3], e === null) e = s[3] = {};
				else if (typeof e == "number") throw Error(i(491));
				e[n.childIndex] = r.id;
			}
		}
	}
	function nr(e, t) {
		e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
	}
	function rr(e, t, n) {
		return Fn(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function ir(e, t, n) {
		var r = t.blockedSegment, i = In(e, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
		return r.children.push(i), r.lastPushedText = !1, Pn(e, n, t.node, t.childIndex, t.blockedBoundary, i, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function ar(e, t, n, r) {
		var i = t.formatContext, a = t.context, o = t.keyPath, s = t.treeContext, c = t.componentStack, l = t.blockedSegment;
		if (l === null) {
			l = t.replay;
			try {
				return Zn(e, t, n, r);
			} catch (u) {
				if (sn(), n = u === Y ? Ht() : u, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						r = u === Y ? on() : null, e = rr(e, t, r).ping, n.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = l, jt(a);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						n = u === Y ? on() : null, n = rr(e, t, n), e.pingedTasks.push(n), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = l, jt(a);
						return;
					}
				}
			}
		} else {
			var u = l.children.length, d = l.chunks.length;
			try {
				return Zn(e, t, n, r);
			} catch (r) {
				if (sn(), l.children.length = u, l.chunks.length = d, n = r === Y ? Ht() : r, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						l = n, n = r === Y ? on() : null, e = ir(e, t, n).ping, l.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, jt(a);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						l = r === Y ? on() : null, l = ir(e, t, l), e.pingedTasks.push(l), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, jt(a);
						return;
					}
				}
			}
		}
		throw t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, jt(a), n;
	}
	function or(e) {
		var t = e.blockedBoundary, n = e.blockedSegment;
		n !== null && (n.status = 3, pr(this, t, e.row, n));
	}
	function sr(e, t, n, r, a, o) {
		for (var s = 0; s < n.length; s++) {
			var c = n[s];
			if (c.length === 4) sr(e, t, c[2], c[3], a, o);
			else {
				c = c[5];
				var l = e, u = o, d = Nn(l, null, /* @__PURE__ */ new Set(), null, null);
				d.parentFlushed = !0, d.rootSegmentID = c, d.status = 4, d.errorDigest = u, d.parentFlushed && l.clientRenderedBoundaries.push(d);
			}
		}
		if (n.length = 0, r !== null) {
			if (t === null) throw Error(i(487));
			if (t.status !== 4 && (t.status = 4, t.errorDigest = o, t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof r == "object") for (var f in r) delete r[f];
		}
	}
	function cr(e, t, n) {
		var r = e.blockedBoundary, i = e.blockedSegment;
		if (i !== null) {
			if (i.status === 6) return;
			i.status = 3;
		}
		var a = zn(e.componentStack);
		if (r === null) {
			if (t.status !== 13 && t.status !== 14) {
				if (r = e.replay, r === null) {
					t.trackedPostpones !== null && i !== null ? (r = t.trackedPostpones, Bn(t, n, a), tr(t, r, e, i), pr(t, null, e.row, i)) : (Bn(t, n, a), Vn(t, n));
					return;
				}
				r.pendingTasks--, r.pendingTasks === 0 && 0 < r.nodes.length && (i = Bn(t, n, a), sr(t, null, r.nodes, r.slots, n, i)), t.pendingRootTasks--, t.pendingRootTasks === 0 && ur(t);
			}
		} else {
			var o = t.trackedPostpones;
			if (r.status !== 4) {
				if (o !== null && i !== null) return Bn(t, n, a), tr(t, o, e, i), r.fallbackAbortableTasks.forEach(function(e) {
					return cr(e, t, n);
				}), r.fallbackAbortableTasks.clear(), pr(t, r, e.row, i);
				r.status = 4, i = Bn(t, n, a), r.status = 4, r.errorDigest = i, nr(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r);
			}
			r.pendingTasks--, i = r.row, i !== null && --i.pendingTasks === 0 && Hn(t, i), r.fallbackAbortableTasks.forEach(function(e) {
				return cr(e, t, n);
			}), r.fallbackAbortableTasks.clear();
		}
		e = e.row, e !== null && --e.pendingTasks === 0 && Hn(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && dr(t);
	}
	function lr(e, t) {
		try {
			var n = e.renderState, r = n.onHeaders;
			if (r) {
				var i = n.headers;
				if (i) {
					n.headers = null;
					var a = i.preconnects;
					if (i.fontPreloads && (a && (a += ", "), a += i.fontPreloads), i.highImagePreloads && (a && (a += ", "), a += i.highImagePreloads), !t) {
						var o = n.styles.values(), s = o.next();
						b: for (; 0 < i.remainingCapacity && !s.done; s = o.next()) for (var c = s.value.sheets.values(), l = c.next(); 0 < i.remainingCapacity && !l.done; l = c.next()) {
							var u = l.value, d = u.props, f = d.href, p = u.props, m = ut(p.href, "style", {
								crossOrigin: p.crossOrigin,
								integrity: p.integrity,
								nonce: p.nonce,
								type: p.type,
								fetchPriority: p.fetchPriority,
								referrerPolicy: p.referrerPolicy,
								media: p.media
							});
							if (0 <= (i.remainingCapacity -= m.length + 2)) n.resets.style[f] = re, a && (a += ", "), a += m, n.resets.style[f] = typeof d.crossOrigin == "string" || typeof d.integrity == "string" ? [d.crossOrigin, d.integrity] : re;
							else break b;
						}
					}
					r(a ? { Link: a } : {});
				}
			}
		} catch (t) {
			Bn(e, t, {});
		}
	}
	function ur(e) {
		e.trackedPostpones === null && lr(e, !0), e.trackedPostpones === null && _r(e), e.onShellError = zt, e = e.onShellReady, e();
	}
	function dr(e) {
		lr(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== 5), _r(e), e = e.onAllReady, e();
	}
	function fr(e, t) {
		if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
			var n = t.children[0];
			n.id = t.id, n.parentFlushed = !0, n.status !== 1 && n.status !== 3 && n.status !== 4 || fr(e, n);
		} else e.completedSegments.push(t);
	}
	function pr(e, t, n, r) {
		if (n !== null && (--n.pendingTasks === 0 ? Hn(e, n) : n.together && Wn(e, n)), e.allPendingTasks--, t === null) {
			if (r !== null && r.parentFlushed) {
				if (e.completedRootSegment !== null) throw Error(i(389));
				e.completedRootSegment = r;
			}
			e.pendingRootTasks--, e.pendingRootTasks === 0 && ur(e);
		} else if (t.pendingTasks--, t.status !== 4) if (t.pendingTasks === 0) {
			if (t.status === 0 && (t.status = 1), r !== null && r.parentFlushed && (r.status === 1 || r.status === 3) && fr(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.status === 1) n = t.row, n !== null && _t(n.hoistables, t.contentState), Dn(e, t) || (t.fallbackAbortableTasks.forEach(or, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && Hn(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && _r(e);
			else if (t.status === 5 && (t = t.row, t !== null)) {
				if (e.trackedPostpones !== null) {
					n = e.trackedPostpones;
					var a = t.next;
					if (a !== null && (r = a.boundaries, r !== null)) for (a.boundaries = null, a = 0; a < r.length; a++) {
						var o = r[a];
						er(e, n, o), pr(e, o, null, null);
					}
				}
				--t.pendingTasks === 0 && Hn(e, t);
			}
		} else r === null || !r.parentFlushed || r.status !== 1 && r.status !== 3 || (fr(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && Wn(e, t);
		e.allPendingTasks === 0 && dr(e);
	}
	function mr(e) {
		if (e.status !== 14 && e.status !== 13) {
			var t = Tt, n = z.H;
			z.H = vn;
			var r = z.A;
			z.A = bn;
			var a = jn;
			jn = e;
			var o = yn;
			yn = e.resumableState;
			try {
				var s = e.pingedTasks, c;
				for (c = 0; c < s.length; c++) {
					var l = s[c], u = e, d = l.blockedSegment;
					if (d === null) {
						var f = u;
						if (l.replay.pendingTasks !== 0) {
							jt(l.context);
							try {
								if (typeof l.replay.slots == "number" ? Xn(f, l, l.replay.slots, l.node, l.childIndex) : Qn(f, l), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length) throw Error(i(488));
								l.replay.pendingTasks--, l.abortSet.delete(l), pr(f, l.blockedBoundary, l.row, null);
							} catch (e) {
								sn();
								var p = e === Y ? Ht() : e;
								if (typeof p == "object" && p && typeof p.then == "function") {
									var m = l.ping;
									p.then(m, m), l.thenableState = e === Y ? on() : null;
								} else {
									l.replay.pendingTasks--, l.abortSet.delete(l);
									var h = zn(l.componentStack);
									u = void 0;
									var g = f, _ = l.blockedBoundary, v = f.status === 12 ? f.fatalError : p, y = l.replay.nodes, b = l.replay.slots;
									u = Bn(g, v, h), sr(g, _, y, b, v, u), f.pendingRootTasks--, f.pendingRootTasks === 0 && ur(f), f.allPendingTasks--, f.allPendingTasks === 0 && dr(f);
								}
							}
						}
					} else if (f = void 0, g = d, g.status === 0) {
						g.status = 6, jt(l.context);
						var x = g.children.length, S = g.chunks.length;
						try {
							Qn(u, l), bt(g.chunks, u.renderState, g.lastPushedText, g.textEmbedded), l.abortSet.delete(l), g.status = 1, pr(u, l.blockedBoundary, l.row, g);
						} catch (e) {
							sn(), g.children.length = x, g.chunks.length = S;
							var C = e === Y ? Ht() : u.status === 12 ? u.fatalError : e;
							if (u.status === 12 && u.trackedPostpones !== null) {
								var w = u.trackedPostpones, T = zn(l.componentStack);
								l.abortSet.delete(l), Bn(u, C, T), tr(u, w, l, g), pr(u, l.blockedBoundary, l.row, g);
							} else if (typeof C == "object" && C && typeof C.then == "function") {
								g.status = 0, l.thenableState = e === Y ? on() : null;
								var E = l.ping;
								C.then(E, E);
							} else {
								var D = zn(l.componentStack);
								l.abortSet.delete(l), g.status = 4;
								var O = l.blockedBoundary, k = l.row;
								if (k !== null && --k.pendingTasks === 0 && Hn(u, k), u.allPendingTasks--, f = Bn(u, C, D), O === null) Vn(u, C);
								else if (O.pendingTasks--, O.status !== 4) {
									O.status = 4, O.errorDigest = f, nr(u, O);
									var A = O.row;
									A !== null && --A.pendingTasks === 0 && Hn(u, A), O.parentFlushed && u.clientRenderedBoundaries.push(O), u.pendingRootTasks === 0 && u.trackedPostpones === null && O.contentPreamble !== null && _r(u);
								}
								u.allPendingTasks === 0 && dr(u);
							}
						}
					}
				}
				s.splice(0, c), e.destination !== null && Tr(e, e.destination);
			} catch (t) {
				Bn(e, t, {}), Vn(e, t);
			} finally {
				yn = o, z.H = n, z.A = r, n === vn && jt(t), jn = a;
			}
		}
	}
	function hr(e, t, n) {
		t.preambleChildren.length && n.push(t.preambleChildren);
		for (var r = !1, i = 0; i < t.children.length; i++) r = gr(e, t.children[i], n) || r;
		return r;
	}
	function gr(e, t, n) {
		var r = t.boundary;
		if (r === null) return hr(e, t, n);
		var a = r.contentPreamble, o = r.fallbackPreamble;
		if (a === null || o === null) return !1;
		switch (r.status) {
			case 1:
				if (Re(e.renderState, a), e.byteSize += r.byteSize, t = r.completedSegments[0], !t) throw Error(i(391));
				return hr(e, t, n);
			case 5: if (e.trackedPostpones !== null) return !0;
			case 4: if (t.status === 1) return Re(e.renderState, o), hr(e, t, n);
			default: return !0;
		}
	}
	function _r(e) {
		if (e.completedRootSegment && e.completedPreambleSegments === null) {
			var t = [], n = e.byteSize, r = gr(e, e.completedRootSegment, t), i = e.renderState.preamble;
			!1 === r || i.headChunks && i.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
		}
	}
	function vr(e, t, n, r) {
		switch (n.parentFlushed = !0, n.status) {
			case 0: n.id = e.nextSegmentId++;
			case 5: return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, t.push("<template id=\""), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push("\"></template>");
			case 1:
				n.status = 2;
				var a = !0, o = n.chunks, s = 0;
				n = n.children;
				for (var c = 0; c < n.length; c++) {
					for (a = n[c]; s < a.index; s++) t.push(o[s]);
					a = br(e, t, a, r);
				}
				for (; s < o.length - 1; s++) t.push(o[s]);
				return s < o.length && (a = t.push(o[s])), a;
			case 3: return !0;
			default: throw Error(i(390));
		}
	}
	var yr = 0;
	function br(e, t, n, r) {
		var a = n.boundary;
		if (a === null) return vr(e, t, n, r);
		if (a.parentFlushed = !0, a.status === 4) {
			var o = a.row;
			return o !== null && --o.pendingTasks === 0 && Hn(e, o), e.renderState.generateStaticMarkup || (a = a.errorDigest, t.push("<!--$!-->"), t.push("<template"), a && (t.push(" data-dgst=\""), a = F(a), t.push(a), t.push("\"")), t.push("></template>")), vr(e, t, n, r), e = e.renderState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
		}
		if (a.status !== 1) return a.status === 0 && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), Be(t, e.renderState, a.rootSegmentID), r && _t(r, a.fallbackState), vr(e, t, n, r), t.push("<!--/$-->");
		if (!wr && Dn(e, a) && yr + a.byteSize > e.progressiveChunkSize) return a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), Be(t, e.renderState, a.rootSegmentID), vr(e, t, n, r), t.push("<!--/$-->");
		if (yr += a.byteSize, r && _t(r, a.contentState), n = a.row, n !== null && Dn(e, a) && --n.pendingTasks === 0 && Hn(e, n), e.renderState.generateStaticMarkup || t.push("<!--$-->"), n = a.completedSegments, n.length !== 1) throw Error(i(391));
		return br(e, t, n[0], r), e = e.renderState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
	}
	function xr(e, t, n, r) {
		return Ve(t, e.renderState, n.parentFormatContext, n.id), br(e, t, n, r), He(t, n.parentFormatContext);
	}
	function Sr(e, t, n) {
		yr = n.byteSize;
		for (var r = n.completedSegments, i = 0; i < r.length; i++) Cr(e, t, n, r[i]);
		r.length = 0, r = n.row, r !== null && Dn(e, n) && --r.pendingTasks === 0 && Hn(e, r), Ye(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = n.rootSegmentID, n = n.contentState;
		var a = e.stylesToHoist;
		return e.stylesToHoist = !1, t.push(e.startInlineScript), t.push(">"), a ? (!(r.instructions & 4) && (r.instructions |= 4, t.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};")), !(r.instructions & 2) && (r.instructions |= 2, t.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), r.instructions & 8 ? t.push("$RR(\"") : (r.instructions |= 8, t.push("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""))) : (!(r.instructions & 2) && (r.instructions |= 2, t.push("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};")), t.push("$RC(\"")), r = i.toString(16), t.push(e.boundaryPrefix), t.push(r), t.push("\",\""), t.push(e.segmentPrefix), t.push(r), a ? (t.push("\","), tt(t, n)) : t.push("\""), n = t.push(")<\/script>"), ze(t, e) && n;
	}
	function Cr(e, t, n, r) {
		if (r.status === 2) return !0;
		var a = n.contentState, o = r.id;
		if (o === -1) {
			if ((r.id = n.rootSegmentID) === -1) throw Error(i(392));
			return xr(e, t, r, a);
		}
		return o === n.rootSegmentID ? xr(e, t, r, a) : (xr(e, t, r, a), n = e.resumableState, e = e.renderState, t.push(e.startInlineScript), t.push(">"), n.instructions & 1 ? t.push("$RS(\"") : (n.instructions |= 1, t.push("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"")), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push("\",\""), t.push(e.placeholderPrefix), t.push(o), t = t.push("\")<\/script>"), t);
	}
	var wr = !1;
	function Tr(e, t) {
		try {
			if (!(0 < e.pendingRootTasks)) {
				var n, r = e.completedRootSegment;
				if (r !== null) {
					if (r.status === 5) return;
					var i = e.completedPreambleSegments;
					if (i === null) return;
					yr = e.byteSize;
					var a = e.resumableState, o = e.renderState, s = o.preamble, c = s.htmlChunks, l = s.headChunks, u;
					if (c) {
						for (u = 0; u < c.length; u++) t.push(c[u]);
						if (l) for (u = 0; u < l.length; u++) t.push(l[u]);
						else {
							var d = Fe("head");
							t.push(d), t.push(">");
						}
					} else if (l) for (u = 0; u < l.length; u++) t.push(l[u]);
					var f = o.charsetChunks;
					for (u = 0; u < f.length; u++) t.push(f[u]);
					f.length = 0, o.preconnects.forEach(Xe, t), o.preconnects.clear();
					var p = o.viewportChunks;
					for (u = 0; u < p.length; u++) t.push(p[u]);
					p.length = 0, o.fontPreloads.forEach(Xe, t), o.fontPreloads.clear(), o.highImagePreloads.forEach(Xe, t), o.highImagePreloads.clear(), ie = o, o.styles.forEach(K, t), ie = null;
					var m = o.importMapChunks;
					for (u = 0; u < m.length; u++) t.push(m[u]);
					m.length = 0, o.bootstrapScripts.forEach(Xe, t), o.scripts.forEach(Xe, t), o.scripts.clear(), o.bulkPreloads.forEach(Xe, t), o.bulkPreloads.clear(), a.instructions |= 32;
					var h = o.hoistableChunks;
					for (u = 0; u < h.length; u++) t.push(h[u]);
					for (a = h.length = 0; a < i.length; a++) {
						var g = i[a];
						for (o = 0; o < g.length; o++) br(e, t, g[o], null);
					}
					var _ = e.renderState.preamble, v = _.headChunks;
					if (_.htmlChunks || v) {
						var y = Le("head");
						t.push(y);
					}
					var b = _.bodyChunks;
					if (b) for (i = 0; i < b.length; i++) t.push(b[i]);
					br(e, t, r, null), e.completedRootSegment = null;
					var x = e.renderState;
					if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
						var S = e.resumableState;
						if (!(S.instructions & 64)) {
							if (S.instructions |= 64, t.push(x.startInlineScript), !(S.instructions & 32)) {
								S.instructions |= 32;
								var C = "_" + S.idPrefix + "R_";
								t.push(" id=\"");
								var w = F(C);
								t.push(w), t.push("\"");
							}
							t.push(">"), t.push("requestAnimationFrame(function(){$RT=performance.now()});"), t.push("<\/script>");
						}
					}
					ze(t, x);
				}
				var T = e.renderState;
				r = 0;
				var E = T.viewportChunks;
				for (r = 0; r < E.length; r++) t.push(E[r]);
				E.length = 0, T.preconnects.forEach(Xe, t), T.preconnects.clear(), T.fontPreloads.forEach(Xe, t), T.fontPreloads.clear(), T.highImagePreloads.forEach(Xe, t), T.highImagePreloads.clear(), T.styles.forEach($e, t), T.scripts.forEach(Xe, t), T.scripts.clear(), T.bulkPreloads.forEach(Xe, t), T.bulkPreloads.clear();
				var D = T.hoistableChunks;
				for (r = 0; r < D.length; r++) t.push(D[r]);
				D.length = 0;
				var O = e.clientRenderedBoundaries;
				for (n = 0; n < O.length; n++) {
					var k = O[n];
					T = t;
					var A = e.resumableState, j = e.renderState, M = k.rootSegmentID, N = k.errorDigest;
					T.push(j.startInlineScript), T.push(">"), A.instructions & 4 ? T.push("$RX(\"") : (A.instructions |= 4, T.push("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"")), T.push(j.boundaryPrefix);
					var P = M.toString(16);
					if (T.push(P), T.push("\""), N) {
						T.push(",");
						var ee = U(N || "");
						T.push(ee);
					}
					var I = T.push(")<\/script>");
					if (!I) {
						e.destination = null, n++, O.splice(0, n);
						return;
					}
				}
				O.splice(0, n);
				var L = e.completedBoundaries;
				for (n = 0; n < L.length; n++) if (!Sr(e, t, L[n])) {
					e.destination = null, n++, L.splice(0, n);
					return;
				}
				L.splice(0, n), wr = !0;
				var R = e.partialBoundaries;
				for (n = 0; n < R.length; n++) {
					var z = R[n];
					a: {
						O = e, k = t, yr = z.byteSize;
						var te = z.completedSegments;
						for (I = 0; I < te.length; I++) if (!Cr(O, k, z, te[I])) {
							I++, te.splice(0, I);
							var ne = !1;
							break a;
						}
						te.splice(0, I);
						var B = z.row;
						B !== null && B.together && z.pendingTasks === 1 && (B.pendingTasks === 1 ? Un(O, B, B.hoistables) : B.pendingTasks--), ne = Ye(k, z.contentState, O.renderState);
					}
					if (!ne) {
						e.destination = null, n++, R.splice(0, n);
						return;
					}
				}
				R.splice(0, n), wr = !1;
				var re = e.completedBoundaries;
				for (n = 0; n < re.length; n++) if (!Sr(e, t, re[n])) {
					e.destination = null, n++, re.splice(0, n);
					return;
				}
				re.splice(0, n);
			}
		} finally {
			wr = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.flushScheduled = !1, n = e.resumableState, n.hasBody && (R = Le("body"), t.push(R)), n.hasHtml && (n = Le("html"), t.push(n)), e.status = 14, t.push(null), e.destination = null);
		}
	}
	function Er(e) {
		if (!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null) {
			e.flushScheduled = !0;
			var t = e.destination;
			t ? Tr(e, t) : e.flushScheduled = !1;
		}
	}
	function Dr(e, t) {
		if (e.status === 13) e.status = 14, t.destroy(e.fatalError);
		else if (e.status !== 14 && e.destination === null) {
			e.destination = t;
			try {
				Tr(e, t);
			} catch (t) {
				Bn(e, t, {}), Vn(e, t);
			}
		}
	}
	function Or(e, t) {
		(e.status === 11 || e.status === 10) && (e.status = 12);
		try {
			var n = e.abortableTasks;
			if (0 < n.size) {
				var r = t === void 0 ? Error(i(432)) : typeof t == "object" && t && typeof t.then == "function" ? Error(i(530)) : t;
				e.fatalError = r, n.forEach(function(t) {
					return cr(t, e, r);
				}), n.clear();
			}
			e.destination !== null && Tr(e, e.destination);
		} catch (t) {
			Bn(e, t, {}), Vn(e, t);
		}
	}
	function kr(e, t, n) {
		if (t === null) n.rootNodes.push(e);
		else {
			var r = n.workingMap, i = r.get(t);
			i === void 0 && (i = [
				t[1],
				t[2],
				[],
				null
			], r.set(t, i), kr(i, t[0], n)), i[2].push(e);
		}
	}
	function Ar() {}
	function jr(e, t, n, r) {
		var a = !1, o = null, s = "", c = !1;
		if (t = se(t ? t.identifierPrefix : void 0), e = An(e, t, vt(t, n), ce(0, null, 0, null), Infinity, Ar, void 0, function() {
			c = !0;
		}, void 0, void 0, void 0), e.flushScheduled = e.destination !== null, mr(e), e.status === 10 && (e.status = 11), e.trackedPostpones === null && lr(e, e.pendingRootTasks === 0), Or(e, r), Dr(e, {
			push: function(e) {
				return e !== null && (s += e), !0;
			},
			destroy: function(e) {
				a = !0, o = e;
			}
		}), a && o !== r) throw o;
		if (!c) throw Error(i(426));
		return s;
	}
	t.renderToStaticMarkup = function(e, t) {
		return jr(e, t, !0, "The server used \"renderToStaticMarkup\" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	}, t.renderToString = function(e, t) {
		return jr(e, t, !1, "The server used \"renderToString\" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
	}, t.version = "19.2.4";
})), r = /* @__PURE__ */ t(((t) => {
	var n = e("react"), r = e("react-dom");
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), _ = Symbol.for("react.scope"), v = Symbol.for("react.activity"), y = Symbol.for("react.legacy_hidden"), b = Symbol.for("react.memo_cache_sentinel"), x = Symbol.for("react.view_transition"), S = Symbol.iterator;
	function C(e) {
		return typeof e != "object" || !e ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var w = Array.isArray;
	function T(e, t) {
		var n = e.length & 3, r = e.length - n, i = t;
		for (t = 0; t < r;) {
			var a = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
			++t, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, i = 5 * (i & 65535) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (i & 65535) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
		}
		switch (a = 0, n) {
			case 3: a ^= (e.charCodeAt(t + 2) & 255) << 16;
			case 2: a ^= (e.charCodeAt(t + 1) & 255) << 8;
			case 1: a ^= e.charCodeAt(t) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, i ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
		}
		return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (i & 65535) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (i & 65535) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^ i >>> 16) >>> 0;
	}
	var E = new MessageChannel(), D = [];
	E.port1.onmessage = function() {
		var e = D.shift();
		e && e();
	};
	function O(e) {
		D.push(e), E.port2.postMessage(null);
	}
	function k(e) {
		setTimeout(function() {
			throw e;
		});
	}
	var A = Promise, j = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
		A.resolve(null).then(e).catch(k);
	}, M = null, N = 0;
	function P(e, t) {
		if (t.byteLength !== 0) if (2048 < t.byteLength) 0 < N && (e.enqueue(new Uint8Array(M.buffer, 0, N)), M = new Uint8Array(2048), N = 0), e.enqueue(t);
		else {
			var n = M.length - N;
			n < t.byteLength && (n === 0 ? e.enqueue(M) : (M.set(t.subarray(0, n), N), e.enqueue(M), t = t.subarray(n)), M = new Uint8Array(2048), N = 0), M.set(t, N), N += t.byteLength;
		}
	}
	function F(e, t) {
		return P(e, t), !0;
	}
	function ee(e) {
		M && 0 < N && (e.enqueue(new Uint8Array(M.buffer, 0, N)), M = null, N = 0);
	}
	var I = new TextEncoder();
	function L(e) {
		return I.encode(e);
	}
	function R(e) {
		return I.encode(e);
	}
	function z(e) {
		return e.byteLength;
	}
	function te(e, t) {
		typeof e.error == "function" ? e.error(t) : e.close();
	}
	var ne = Object.assign, B = Object.prototype.hasOwnProperty, re = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ie = {}, ae = {};
	function oe(e) {
		return B.call(ae, e) ? !0 : B.call(ie, e) ? !1 : re.test(e) ? ae[e] = !0 : (ie[e] = !0, !1);
	}
	var se = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), ce = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), le = /["'&<>]/;
	function V(e) {
		if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
		e = "" + e;
		var t = le.exec(e);
		if (t) {
			var n = "", r, i = 0;
			for (r = t.index; r < e.length; r++) {
				switch (e.charCodeAt(r)) {
					case 34:
						t = "&quot;";
						break;
					case 38:
						t = "&amp;";
						break;
					case 39:
						t = "&#x27;";
						break;
					case 60:
						t = "&lt;";
						break;
					case 62:
						t = "&gt;";
						break;
					default: continue;
				}
				i !== r && (n += e.slice(i, r)), i = r + 1, n += t;
			}
			e = i === r ? n : n + e.slice(i, r);
		}
		return e;
	}
	var ue = /([A-Z])/g, de = /^ms-/, fe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function pe(e) {
		return fe.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	var me = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, _e = he.d;
	he.d = {
		f: _e.f,
		r: _e.r,
		D: cr,
		C: lr,
		L: ur,
		m: dr,
		X: pr,
		S: fr,
		M: mr
	};
	var ve = [], ye = null;
	R("\"></template>");
	var be = R("<script"), xe = R("<\/script>"), Se = R("<script src=\""), Ce = R("<script type=\"module\" src=\""), we = R(" nonce=\""), Te = R(" integrity=\""), Ee = R(" crossorigin=\""), De = R(" async=\"\"><\/script>"), Oe = R("<style"), ke = /(<\/|<)(s)(cript)/gi;
	function Ae(e, t, n, r) {
		return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
	}
	var je = R("<script type=\"importmap\">"), Me = R("<\/script>");
	function Ne(e, t, n, r, i, a) {
		n = typeof t == "string" ? t : t && t.script;
		var o = n === void 0 ? be : R("<script nonce=\"" + V(n) + "\""), s = typeof t == "string" ? void 0 : t && t.style, c = s === void 0 ? Oe : R("<style nonce=\"" + V(s) + "\""), l = e.idPrefix, u = [], d = e.bootstrapScriptContent, f = e.bootstrapScripts, p = e.bootstrapModules;
		if (d !== void 0 && (u.push(o), er(u, e), u.push(J, L(("" + d).replace(ke, Ae)), xe)), d = [], r !== void 0 && (d.push(je), d.push(L(("" + JSON.stringify(r)).replace(ke, Ae))), d.push(Me)), r = i ? {
			preconnects: "",
			fontPreloads: "",
			highImagePreloads: "",
			remainingCapacity: 2 + (typeof a == "number" ? a : 2e3)
		} : null, i = {
			placeholderPrefix: R(l + "P:"),
			segmentPrefix: R(l + "S:"),
			boundaryPrefix: R(l + "B:"),
			startInlineScript: o,
			startInlineStyle: c,
			preamble: Fe(),
			externalRuntimeScript: null,
			bootstrapChunks: u,
			importMapChunks: d,
			onHeaders: i,
			headers: r,
			resets: {
				font: {},
				dns: {},
				connect: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				image: {},
				style: {}
			},
			charsetChunks: [],
			viewportChunks: [],
			hoistableChunks: [],
			preconnects: /* @__PURE__ */ new Set(),
			fontPreloads: /* @__PURE__ */ new Set(),
			highImagePreloads: /* @__PURE__ */ new Set(),
			styles: /* @__PURE__ */ new Map(),
			bootstrapScripts: /* @__PURE__ */ new Set(),
			scripts: /* @__PURE__ */ new Set(),
			bulkPreloads: /* @__PURE__ */ new Set(),
			preloads: {
				images: /* @__PURE__ */ new Map(),
				stylesheets: /* @__PURE__ */ new Map(),
				scripts: /* @__PURE__ */ new Map(),
				moduleScripts: /* @__PURE__ */ new Map()
			},
			nonce: {
				script: n,
				style: s
			},
			hoistableState: null,
			stylesToHoist: !1
		}, f !== void 0) for (r = 0; r < f.length; r++) l = f[r], s = o = void 0, c = {
			rel: "preload",
			as: "script",
			fetchPriority: "low",
			nonce: t
		}, typeof l == "string" ? c.href = a = l : (c.href = a = l.src, c.integrity = s = typeof l.integrity == "string" ? l.integrity : void 0, c.crossOrigin = o = typeof l == "string" || l.crossOrigin == null ? void 0 : l.crossOrigin === "use-credentials" ? "use-credentials" : ""), l = e, d = a, l.scriptResources[d] = null, l.moduleScriptResources[d] = null, l = [], ut(l, c), i.bootstrapScripts.add(l), u.push(Se, L(V(a)), W), n && u.push(we, L(V(n)), W), typeof s == "string" && u.push(Te, L(V(s)), W), typeof o == "string" && u.push(Ee, L(V(o)), W), er(u, e), u.push(De);
		if (p !== void 0) for (t = 0; t < p.length; t++) s = p[t], a = r = void 0, o = {
			rel: "modulepreload",
			fetchPriority: "low",
			nonce: n
		}, typeof s == "string" ? o.href = f = s : (o.href = f = s.src, o.integrity = a = typeof s.integrity == "string" ? s.integrity : void 0, o.crossOrigin = r = typeof s == "string" || s.crossOrigin == null ? void 0 : s.crossOrigin === "use-credentials" ? "use-credentials" : ""), s = e, c = f, s.scriptResources[c] = null, s.moduleScriptResources[c] = null, s = [], ut(s, o), i.bootstrapScripts.add(s), u.push(Ce, L(V(f)), W), n && u.push(we, L(V(n)), W), typeof a == "string" && u.push(Te, L(V(a)), W), typeof r == "string" && u.push(Ee, L(V(r)), W), er(u, e), u.push(De);
		return i;
	}
	function Pe(e, t, n, r, i) {
		return {
			idPrefix: e === void 0 ? "" : e,
			nextFormID: 0,
			streamingFormat: 0,
			bootstrapScriptContent: n,
			bootstrapScripts: r,
			bootstrapModules: i,
			instructions: 0,
			hasBody: !1,
			hasHtml: !1,
			unknownResources: {},
			dnsResources: {},
			connectResources: {
				default: {},
				anonymous: {},
				credentials: {}
			},
			imageResources: {},
			styleResources: {},
			scriptResources: {},
			moduleUnknownResources: {},
			moduleScriptResources: {}
		};
	}
	function Fe() {
		return {
			htmlChunks: null,
			headChunks: null,
			bodyChunks: null
		};
	}
	function H(e, t, n, r) {
		return {
			insertionMode: e,
			selectedValue: t,
			tagScope: n,
			viewTransition: r
		};
	}
	function Ie(e) {
		return H(e === "http://www.w3.org/2000/svg" ? 4 : e === "http://www.w3.org/1998/Math/MathML" ? 5 : 0, null, 0, null);
	}
	function Le(e, t, n) {
		var r = e.tagScope & -25;
		switch (t) {
			case "noscript": return H(2, null, r | 1, null);
			case "select": return H(2, n.value == null ? n.defaultValue : n.value, r, null);
			case "svg": return H(4, null, r, null);
			case "picture": return H(2, null, r | 2, null);
			case "math": return H(5, null, r, null);
			case "foreignObject": return H(2, null, r, null);
			case "table": return H(6, null, r, null);
			case "thead":
			case "tbody":
			case "tfoot": return H(7, null, r, null);
			case "colgroup": return H(9, null, r, null);
			case "tr": return H(8, null, r, null);
			case "head":
				if (2 > e.insertionMode) return H(3, null, r, null);
				break;
			case "html": if (e.insertionMode === 0) return H(1, null, r, null);
		}
		return 6 <= e.insertionMode || 2 > e.insertionMode ? H(2, null, r, null) : e.tagScope === r ? e : H(e.insertionMode, e.selectedValue, r, null);
	}
	function Re(e) {
		return e === null ? null : {
			update: e.update,
			enter: "none",
			exit: "none",
			share: e.update,
			name: e.autoName,
			autoName: e.autoName,
			nameIdx: 0
		};
	}
	function ze(e, t) {
		return t.tagScope & 32 && (e.instructions |= 128), H(t.insertionMode, t.selectedValue, t.tagScope | 12, Re(t.viewTransition));
	}
	function Be(e, t) {
		e = Re(t.viewTransition);
		var n = t.tagScope | 16;
		return e !== null && e.share !== "none" && (n |= 64), H(t.insertionMode, t.selectedValue, n, e);
	}
	var Ve = R("<!-- -->");
	function He(e, t, n, r) {
		return t === "" ? r : (r && e.push(Ve), e.push(L(V(t))), !0);
	}
	var Ue = /* @__PURE__ */ new Map(), U = R(" style=\""), We = R(":"), Ge = R(";");
	function Ke(e, t) {
		if (typeof t != "object") throw Error(i(62));
		var n = !0, r;
		for (r in t) if (B.call(t, r)) {
			var a = t[r];
			if (a != null && typeof a != "boolean" && a !== "") {
				if (r.indexOf("--") === 0) {
					var o = L(V(r));
					a = L(V(("" + a).trim()));
				} else o = Ue.get(r), o === void 0 && (o = R(V(r.replace(ue, "-$1").toLowerCase().replace(de, "-ms-"))), Ue.set(r, o)), a = typeof a == "number" ? a === 0 || se.has(r) ? L("" + a) : L(a + "px") : L(V(("" + a).trim()));
				n ? (n = !1, e.push(U, o, We, a)) : e.push(Ge, o, We, a);
			}
		}
		n || e.push(W);
	}
	var qe = R(" "), Je = R("=\""), W = R("\""), Ye = R("=\"\"");
	function Xe(e, t, n) {
		n && typeof n != "function" && typeof n != "symbol" && e.push(qe, L(t), Ye);
	}
	function G(e, t, n) {
		typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(qe, L(t), Je, L(V(n)), W);
	}
	var Ze = R(V("javascript:throw new Error('React form unexpectedly submitted.')")), K = R("<input type=\"hidden\"");
	function Qe(e, t) {
		this.push(K), $e(e), G(this, "name", t), G(this, "value", e), this.push(nt);
	}
	function $e(e) {
		if (typeof e != "string") throw Error(i(480));
	}
	function et(e, t) {
		if (typeof t.$$FORM_ACTION == "function") {
			var n = e.nextFormID++;
			e = e.idPrefix + n;
			try {
				var r = t.$$FORM_ACTION(e);
				return r && r.data?.forEach($e), r;
			} catch (e) {
				if (typeof e == "object" && e && typeof e.then == "function") throw e;
			}
		}
		return null;
	}
	function tt(e, t, n, r, i, a, o, s) {
		var c = null;
		if (typeof r == "function") {
			var l = et(t, r);
			l === null ? (e.push(qe, L("formAction"), Je, Ze, W), o = a = i = r = s = null, st(t, n)) : (s = l.name, r = l.action || "", i = l.encType, a = l.method, o = l.target, c = l.data);
		}
		return s != null && q(e, "name", s), r != null && q(e, "formAction", r), i != null && q(e, "formEncType", i), a != null && q(e, "formMethod", a), o != null && q(e, "formTarget", o), c;
	}
	function q(e, t, n) {
		switch (t) {
			case "className":
				G(e, "class", n);
				break;
			case "tabIndex":
				G(e, "tabindex", n);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				G(e, t, n);
				break;
			case "style":
				Ke(e, n);
				break;
			case "src":
			case "href": if (n === "") break;
			case "action":
			case "formAction":
				if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = pe("" + n), e.push(qe, L(t), Je, L(V(n)), W);
				break;
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "ref": break;
			case "autoFocus":
			case "multiple":
			case "muted":
				Xe(e, t.toLowerCase(), n);
				break;
			case "xlinkHref":
				if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
				n = pe("" + n), e.push(qe, L("xlink:href"), Je, L(V(n)), W);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				typeof n != "function" && typeof n != "symbol" && e.push(qe, L(t), Je, L(V(n)), W);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				n && typeof n != "function" && typeof n != "symbol" && e.push(qe, L(t), Ye);
				break;
			case "capture":
			case "download":
				!0 === n ? e.push(qe, L(t), Ye) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(qe, L(t), Je, L(V(n)), W);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(qe, L(t), Je, L(V(n)), W);
				break;
			case "rowSpan":
			case "start":
				typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(qe, L(t), Je, L(V(n)), W);
				break;
			case "xlinkActuate":
				G(e, "xlink:actuate", n);
				break;
			case "xlinkArcrole":
				G(e, "xlink:arcrole", n);
				break;
			case "xlinkRole":
				G(e, "xlink:role", n);
				break;
			case "xlinkShow":
				G(e, "xlink:show", n);
				break;
			case "xlinkTitle":
				G(e, "xlink:title", n);
				break;
			case "xlinkType":
				G(e, "xlink:type", n);
				break;
			case "xmlBase":
				G(e, "xml:base", n);
				break;
			case "xmlLang":
				G(e, "xml:lang", n);
				break;
			case "xmlSpace":
				G(e, "xml:space", n);
				break;
			default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = ce.get(t) || t, oe(t))) {
				switch (typeof n) {
					case "function":
					case "symbol": return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") return;
				}
				e.push(qe, L(t), Je, L(V(n)), W);
			}
		}
	}
	var J = R(">"), nt = R("/>");
	function rt(e, t, n) {
		if (t != null) {
			if (n != null) throw Error(i(60));
			if (typeof t != "object" || !("__html" in t)) throw Error(i(61));
			t = t.__html, t != null && e.push(L("" + t));
		}
	}
	function it(e) {
		var t = "";
		return n.Children.forEach(e, function(e) {
			e != null && (t += e);
		}), t;
	}
	var at = R(" selected=\"\""), ot = R("addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});");
	function st(e, t) {
		if (!(e.instructions & 16)) {
			e.instructions |= 16;
			var n = t.preamble, r = t.bootstrapChunks;
			(n.htmlChunks || n.headChunks) && r.length === 0 ? (r.push(t.startInlineScript), er(r, e), r.push(J, ot, xe)) : r.unshift(t.startInlineScript, J, ot, xe);
		}
	}
	var ct = R("<!--F!-->"), lt = R("<!--F-->");
	function ut(e, t) {
		for (var n in e.push(wt("link")), t) if (B.call(t, n)) {
			var r = t[n];
			if (r != null) switch (n) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
				default: q(e, n, r);
			}
		}
		return e.push(nt), null;
	}
	var dt = /(<\/|<)(s)(tyle)/gi;
	function ft(e, t, n, r) {
		return "" + t + (n === "s" ? "\\73 " : "\\53 ") + r;
	}
	function pt(e, t, n) {
		for (var r in e.push(wt(n)), t) if (B.call(t, r)) {
			var a = t[r];
			if (a != null) switch (r) {
				case "children":
				case "dangerouslySetInnerHTML": throw Error(i(399, n));
				default: q(e, r, a);
			}
		}
		return e.push(nt), null;
	}
	function mt(e, t) {
		e.push(wt("title"));
		var n = null, r = null, i;
		for (i in t) if (B.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: q(e, i, a);
			}
		}
		return e.push(J), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(L(V("" + t))), rt(e, r, n), e.push(Ot("title")), null;
	}
	var ht = R("<!--head-->"), gt = R("<!--body-->"), _t = R("<!--html-->");
	function vt(e, t) {
		e.push(wt("script"));
		var n = null, r = null, i;
		for (i in t) if (B.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: q(e, i, a);
			}
		}
		return e.push(J), rt(e, r, n), typeof n == "string" && e.push(L(("" + n).replace(ke, Ae))), e.push(Ot("script")), null;
	}
	function yt(e, t, n) {
		e.push(wt(n));
		var r = n = null, i;
		for (i in t) if (B.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: q(e, i, a);
			}
		}
		return e.push(J), rt(e, r, n), n;
	}
	function bt(e, t, n) {
		e.push(wt(n));
		var r = n = null, i;
		for (i in t) if (B.call(t, i)) {
			var a = t[i];
			if (a != null) switch (i) {
				case "children":
					n = a;
					break;
				case "dangerouslySetInnerHTML":
					r = a;
					break;
				default: q(e, i, a);
			}
		}
		return e.push(J), rt(e, r, n), typeof n == "string" ? (e.push(L(V(n))), null) : n;
	}
	var xt = R("\n"), St = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ct = /* @__PURE__ */ new Map();
	function wt(e) {
		var t = Ct.get(e);
		if (t === void 0) {
			if (!St.test(e)) throw Error(i(65, e));
			t = R("<" + e), Ct.set(e, t);
		}
		return t;
	}
	var Tt = R("<!DOCTYPE html>");
	function Et(e, t, n, r, a, o, s, c, l) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path": break;
			case "a":
				e.push(wt("a"));
				var u = null, d = null, f;
				for (f in n) if (B.call(n, f)) {
					var p = n[f];
					if (p != null) switch (f) {
						case "children":
							u = p;
							break;
						case "dangerouslySetInnerHTML":
							d = p;
							break;
						case "href":
							p === "" ? G(e, "href", "") : q(e, f, p);
							break;
						default: q(e, f, p);
					}
				}
				if (e.push(J), rt(e, d, u), typeof u == "string") {
					e.push(L(V(u)));
					var m = null;
				} else m = u;
				return m;
			case "g":
			case "p":
			case "li": break;
			case "select":
				e.push(wt("select"));
				var h = null, g = null, _;
				for (_ in n) if (B.call(n, _)) {
					var v = n[_];
					if (v != null) switch (_) {
						case "children":
							h = v;
							break;
						case "dangerouslySetInnerHTML":
							g = v;
							break;
						case "defaultValue":
						case "value": break;
						default: q(e, _, v);
					}
				}
				return e.push(J), rt(e, g, h), h;
			case "option":
				var y = c.selectedValue;
				e.push(wt("option"));
				var b = null, x = null, S = null, C = null, T;
				for (T in n) if (B.call(n, T)) {
					var E = n[T];
					if (E != null) switch (T) {
						case "children":
							b = E;
							break;
						case "selected":
							S = E;
							break;
						case "dangerouslySetInnerHTML":
							C = E;
							break;
						case "value": x = E;
						default: q(e, T, E);
					}
				}
				if (y != null) {
					var D = x === null ? it(b) : "" + x;
					if (w(y)) {
						for (var O = 0; O < y.length; O++) if ("" + y[O] === D) {
							e.push(at);
							break;
						}
					} else "" + y === D && e.push(at);
				} else S && e.push(at);
				return e.push(J), rt(e, C, b), b;
			case "textarea":
				e.push(wt("textarea"));
				var k = null, A = null, j = null, M;
				for (M in n) if (B.call(n, M)) {
					var N = n[M];
					if (N != null) switch (M) {
						case "children":
							j = N;
							break;
						case "value":
							k = N;
							break;
						case "defaultValue":
							A = N;
							break;
						case "dangerouslySetInnerHTML": throw Error(i(91));
						default: q(e, M, N);
					}
				}
				if (k === null && A !== null && (k = A), e.push(J), j != null) {
					if (k != null) throw Error(i(92));
					if (w(j)) {
						if (1 < j.length) throw Error(i(93));
						k = "" + j[0];
					}
					k = "" + j;
				}
				return typeof k == "string" && k[0] === "\n" && e.push(xt), k !== null && e.push(L(V("" + k))), null;
			case "input":
				e.push(wt("input"));
				var P = null, F = null, ee = null, I = null, R = null, z = null, te = null, re = null, ie = null, ae;
				for (ae in n) if (B.call(n, ae)) {
					var se = n[ae];
					if (se != null) switch (ae) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(399, "input"));
						case "name":
							P = se;
							break;
						case "formAction":
							F = se;
							break;
						case "formEncType":
							ee = se;
							break;
						case "formMethod":
							I = se;
							break;
						case "formTarget":
							R = se;
							break;
						case "defaultChecked":
							ie = se;
							break;
						case "defaultValue":
							te = se;
							break;
						case "checked":
							re = se;
							break;
						case "value":
							z = se;
							break;
						default: q(e, ae, se);
					}
				}
				var ce = tt(e, r, a, F, ee, I, R, P);
				return re === null ? ie !== null && Xe(e, "checked", ie) : Xe(e, "checked", re), z === null ? te !== null && q(e, "value", te) : q(e, "value", z), e.push(nt), ce?.forEach(Qe, e), null;
			case "button":
				e.push(wt("button"));
				var le = null, ue = null, de = null, fe = null, me = null, he = null, ge = null, _e;
				for (_e in n) if (B.call(n, _e)) {
					var ye = n[_e];
					if (ye != null) switch (_e) {
						case "children":
							le = ye;
							break;
						case "dangerouslySetInnerHTML":
							ue = ye;
							break;
						case "name":
							de = ye;
							break;
						case "formAction":
							fe = ye;
							break;
						case "formEncType":
							me = ye;
							break;
						case "formMethod":
							he = ye;
							break;
						case "formTarget":
							ge = ye;
							break;
						default: q(e, _e, ye);
					}
				}
				var be = tt(e, r, a, fe, me, he, ge, de);
				if (e.push(J), be?.forEach(Qe, e), rt(e, ue, le), typeof le == "string") {
					e.push(L(V(le)));
					var xe = null;
				} else xe = le;
				return xe;
			case "form":
				e.push(wt("form"));
				var Se = null, Ce = null, we = null, Te = null, Ee = null, De = null, Oe;
				for (Oe in n) if (B.call(n, Oe)) {
					var ke = n[Oe];
					if (ke != null) switch (Oe) {
						case "children":
							Se = ke;
							break;
						case "dangerouslySetInnerHTML":
							Ce = ke;
							break;
						case "action":
							we = ke;
							break;
						case "encType":
							Te = ke;
							break;
						case "method":
							Ee = ke;
							break;
						case "target":
							De = ke;
							break;
						default: q(e, Oe, ke);
					}
				}
				var Ae = null, je = null;
				if (typeof we == "function") {
					var Me = et(r, we);
					Me === null ? (e.push(qe, L("action"), Je, Ze, W), De = Ee = Te = we = null, st(r, a)) : (we = Me.action || "", Te = Me.encType, Ee = Me.method, De = Me.target, Ae = Me.data, je = Me.name);
				}
				if (we != null && q(e, "action", we), Te != null && q(e, "encType", Te), Ee != null && q(e, "method", Ee), De != null && q(e, "target", De), e.push(J), je !== null && (e.push(K), G(e, "name", je), e.push(nt), Ae?.forEach(Qe, e)), rt(e, Ce, Se), typeof Se == "string") {
					e.push(L(V(Se)));
					var Ne = null;
				} else Ne = Se;
				return Ne;
			case "menuitem":
				for (var Pe in e.push(wt("menuitem")), n) if (B.call(n, Pe)) {
					var Fe = n[Pe];
					if (Fe != null) switch (Pe) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(400));
						default: q(e, Pe, Fe);
					}
				}
				return e.push(J), null;
			case "object":
				e.push(wt("object"));
				var H = null, Ie = null, Le;
				for (Le in n) if (B.call(n, Le)) {
					var Re = n[Le];
					if (Re != null) switch (Le) {
						case "children":
							H = Re;
							break;
						case "dangerouslySetInnerHTML":
							Ie = Re;
							break;
						case "data":
							var ze = pe("" + Re);
							if (ze === "") break;
							e.push(qe, L("data"), Je, L(V(ze)), W);
							break;
						default: q(e, Le, Re);
					}
				}
				if (e.push(J), rt(e, Ie, H), typeof H == "string") {
					e.push(L(V(H)));
					var Be = null;
				} else Be = H;
				return Be;
			case "title":
				var He = c.tagScope & 1, Ue = c.tagScope & 4;
				if (c.insertionMode === 4 || He || n.itemProp != null) var U = mt(e, n);
				else Ue ? U = null : (mt(a.hoistableChunks, n), U = void 0);
				return U;
			case "link":
				var We = c.tagScope & 1, Ge = c.tagScope & 4, Ye = n.rel, $e = n.href, ot = n.precedence;
				if (c.insertionMode === 4 || We || n.itemProp != null || typeof Ye != "string" || typeof $e != "string" || $e === "") {
					ut(e, n);
					var ct = null;
				} else if (n.rel === "stylesheet") if (typeof ot != "string" || n.disabled != null || n.onLoad || n.onError) ct = ut(e, n);
				else {
					var lt = a.styles.get(ot), St = r.styleResources.hasOwnProperty($e) ? r.styleResources[$e] : void 0;
					if (St !== null) {
						r.styleResources[$e] = null, lt || (lt = {
							precedence: L(V(ot)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(ot, lt));
						var Ct = {
							state: 0,
							props: ne({}, n, {
								"data-precedence": n.precedence,
								precedence: null
							})
						};
						if (St) {
							St.length === 2 && hr(Ct.props, St);
							var Et = a.preloads.stylesheets.get($e);
							Et && 0 < Et.length ? Et.length = 0 : Ct.state = 1;
						}
						lt.sheets.set($e, Ct), s && s.stylesheets.add(Ct);
					} else if (lt) {
						var Dt = lt.sheets.get($e);
						Dt && s && s.stylesheets.add(Dt);
					}
					l && e.push(Ve), ct = null;
				}
				else n.onLoad || n.onError ? ct = ut(e, n) : (l && e.push(Ve), ct = Ge ? null : ut(a.hoistableChunks, n));
				return ct;
			case "script":
				var kt = c.tagScope & 1, At = n.async;
				if (typeof n.src != "string" || !n.src || !At || typeof At == "function" || typeof At == "symbol" || n.onLoad || n.onError || c.insertionMode === 4 || kt || n.itemProp != null) var jt = vt(e, n);
				else {
					var Mt = n.src;
					if (n.type === "module") var Nt = r.moduleScriptResources, Pt = a.preloads.moduleScripts;
					else Nt = r.scriptResources, Pt = a.preloads.scripts;
					var Ft = Nt.hasOwnProperty(Mt) ? Nt[Mt] : void 0;
					if (Ft !== null) {
						Nt[Mt] = null;
						var It = n;
						if (Ft) {
							Ft.length === 2 && (It = ne({}, n), hr(It, Ft));
							var Lt = Pt.get(Mt);
							Lt && (Lt.length = 0);
						}
						var Rt = [];
						a.scripts.add(Rt), vt(Rt, It);
					}
					l && e.push(Ve), jt = null;
				}
				return jt;
			case "style":
				var zt = c.tagScope & 1, Y = n.precedence, Bt = n.href, Vt = n.nonce;
				if (c.insertionMode === 4 || zt || n.itemProp != null || typeof Y != "string" || typeof Bt != "string" || Bt === "") {
					e.push(wt("style"));
					var Ht = null, Ut = null, Wt;
					for (Wt in n) if (B.call(n, Wt)) {
						var Gt = n[Wt];
						if (Gt != null) switch (Wt) {
							case "children":
								Ht = Gt;
								break;
							case "dangerouslySetInnerHTML":
								Ut = Gt;
								break;
							default: q(e, Wt, Gt);
						}
					}
					e.push(J);
					var Kt = Array.isArray(Ht) ? 2 > Ht.length ? Ht[0] : null : Ht;
					typeof Kt != "function" && typeof Kt != "symbol" && Kt != null && e.push(L(("" + Kt).replace(dt, ft))), rt(e, Ut, Ht), e.push(Ot("style"));
					var qt = null;
				} else {
					var Jt = a.styles.get(Y);
					if ((r.styleResources.hasOwnProperty(Bt) ? r.styleResources[Bt] : void 0) !== null) {
						r.styleResources[Bt] = null, Jt || (Jt = {
							precedence: L(V(Y)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(Y, Jt));
						var Yt = a.nonce.style;
						if (!Yt || Yt === Vt) {
							Jt.hrefs.push(L(V(Bt)));
							var X = Jt.rules, Xt = null, Zt = null, Qt;
							for (Qt in n) if (B.call(n, Qt)) {
								var Z = n[Qt];
								if (Z != null) switch (Qt) {
									case "children":
										Xt = Z;
										break;
									case "dangerouslySetInnerHTML": Zt = Z;
								}
							}
							var $t = Array.isArray(Xt) ? 2 > Xt.length ? Xt[0] : null : Xt;
							typeof $t != "function" && typeof $t != "symbol" && $t != null && X.push(L(("" + $t).replace(dt, ft))), rt(X, Zt, Xt);
						}
					}
					Jt && s && s.styles.add(Jt), l && e.push(Ve), qt = void 0;
				}
				return qt;
			case "meta":
				var en = c.tagScope & 1, tn = c.tagScope & 4;
				if (c.insertionMode === 4 || en || n.itemProp != null) var nn = pt(e, n, "meta");
				else l && e.push(Ve), nn = tn ? null : typeof n.charSet == "string" ? pt(a.charsetChunks, n, "meta") : n.name === "viewport" ? pt(a.viewportChunks, n, "meta") : pt(a.hoistableChunks, n, "meta");
				return nn;
			case "listing":
			case "pre":
				e.push(wt(t));
				var Q = null, $ = null, rn;
				for (rn in n) if (B.call(n, rn)) {
					var an = n[rn];
					if (an != null) switch (rn) {
						case "children":
							Q = an;
							break;
						case "dangerouslySetInnerHTML":
							$ = an;
							break;
						default: q(e, rn, an);
					}
				}
				if (e.push(J), $ != null) {
					if (Q != null) throw Error(i(60));
					if (typeof $ != "object" || !("__html" in $)) throw Error(i(61));
					var on = $.__html;
					on != null && (typeof on == "string" && 0 < on.length && on[0] === "\n" ? e.push(xt, L(on)) : e.push(L("" + on)));
				}
				return typeof Q == "string" && Q[0] === "\n" && e.push(xt), Q;
			case "img":
				var sn = c.tagScope & 3, cn = n.src, ln = n.srcSet;
				if (!(n.loading === "lazy" || !cn && !ln || typeof cn != "string" && cn != null || typeof ln != "string" && ln != null || n.fetchPriority === "low" || sn) && (typeof cn != "string" || cn[4] !== ":" || cn[0] !== "d" && cn[0] !== "D" || cn[1] !== "a" && cn[1] !== "A" || cn[2] !== "t" && cn[2] !== "T" || cn[3] !== "a" && cn[3] !== "A") && (typeof ln != "string" || ln[4] !== ":" || ln[0] !== "d" && ln[0] !== "D" || ln[1] !== "a" && ln[1] !== "A" || ln[2] !== "t" && ln[2] !== "T" || ln[3] !== "a" && ln[3] !== "A")) {
					s !== null && c.tagScope & 64 && (s.suspenseyImages = !0);
					var un = typeof n.sizes == "string" ? n.sizes : void 0, dn = ln ? ln + "\n" + (un || "") : cn, fn = a.preloads.images, pn = fn.get(dn);
					if (pn) (n.fetchPriority === "high" || 10 > a.highImagePreloads.size) && (fn.delete(dn), a.highImagePreloads.add(pn));
					else if (!r.imageResources.hasOwnProperty(dn)) {
						r.imageResources[dn] = ve;
						var mn = n.crossOrigin, hn = typeof mn == "string" ? mn === "use-credentials" ? mn : "" : void 0, gn = a.headers, _n;
						gn && 0 < gn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > gn.highImagePreloads.length) && (_n = gr(cn, "image", {
							imageSrcSet: n.srcSet,
							imageSizes: n.sizes,
							crossOrigin: hn,
							integrity: n.integrity,
							nonce: n.nonce,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.refererPolicy
						}), 0 <= (gn.remainingCapacity -= _n.length + 2)) ? (a.resets.image[dn] = ve, gn.highImagePreloads && (gn.highImagePreloads += ", "), gn.highImagePreloads += _n) : (pn = [], ut(pn, {
							rel: "preload",
							as: "image",
							href: ln ? void 0 : cn,
							imageSrcSet: ln,
							imageSizes: un,
							crossOrigin: hn,
							integrity: n.integrity,
							type: n.type,
							fetchPriority: n.fetchPriority,
							referrerPolicy: n.referrerPolicy
						}), n.fetchPriority === "high" || 10 > a.highImagePreloads.size ? a.highImagePreloads.add(pn) : (a.bulkPreloads.add(pn), fn.set(dn, pn)));
					}
				}
				return pt(e, n, "img");
			case "base":
			case "area":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "param":
			case "source":
			case "track":
			case "wbr": return pt(e, n, t);
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": break;
			case "head":
				if (2 > c.insertionMode) {
					var vn = o || a.preamble;
					if (vn.headChunks) throw Error(i(545, "`<head>`"));
					o !== null && e.push(ht), vn.headChunks = [];
					var yn = yt(vn.headChunks, n, "head");
				} else yn = bt(e, n, "head");
				return yn;
			case "body":
				if (2 > c.insertionMode) {
					var bn = o || a.preamble;
					if (bn.bodyChunks) throw Error(i(545, "`<body>`"));
					o !== null && e.push(gt), bn.bodyChunks = [];
					var xn = yt(bn.bodyChunks, n, "body");
				} else xn = bt(e, n, "body");
				return xn;
			case "html":
				if (c.insertionMode === 0) {
					var Sn = o || a.preamble;
					if (Sn.htmlChunks) throw Error(i(545, "`<html>`"));
					o !== null && e.push(_t), Sn.htmlChunks = [Tt];
					var Cn = yt(Sn.htmlChunks, n, "html");
				} else Cn = bt(e, n, "html");
				return Cn;
			default: if (t.indexOf("-") !== -1) {
				e.push(wt(t));
				var wn = null, Tn = null, En;
				for (En in n) if (B.call(n, En)) {
					var Dn = n[En];
					if (Dn != null) {
						var On = En;
						switch (En) {
							case "children":
								wn = Dn;
								break;
							case "dangerouslySetInnerHTML":
								Tn = Dn;
								break;
							case "style":
								Ke(e, Dn);
								break;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "ref": break;
							case "className": On = "class";
							default: if (oe(En) && typeof Dn != "function" && typeof Dn != "symbol" && !1 !== Dn) {
								if (!0 === Dn) Dn = "";
								else if (typeof Dn == "object") continue;
								e.push(qe, L(On), Je, L(V(Dn)), W);
							}
						}
					}
				}
				return e.push(J), rt(e, Tn, wn), wn;
			}
		}
		return bt(e, n, t);
	}
	var Dt = /* @__PURE__ */ new Map();
	function Ot(e) {
		var t = Dt.get(e);
		return t === void 0 && (t = R("</" + e + ">"), Dt.set(e, t)), t;
	}
	function kt(e, t) {
		e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
	}
	function At(e, t) {
		t = t.bootstrapChunks;
		for (var n = 0; n < t.length - 1; n++) P(e, t[n]);
		return n < t.length ? (n = t[n], t.length = 0, F(e, n)) : !0;
	}
	var jt = R("requestAnimationFrame(function(){$RT=performance.now()});"), Mt = R("<template id=\""), Nt = R("\"></template>"), Pt = R("<!--&-->"), Ft = R("<!--/&-->"), It = R("<!--$-->"), Lt = R("<!--$?--><template id=\""), Rt = R("\"></template>"), zt = R("<!--$!-->"), Y = R("<!--/$-->"), Bt = R("<template"), Vt = R("\""), Ht = R(" data-dgst=\"");
	R(" data-msg=\""), R(" data-stck=\""), R(" data-cstck=\"");
	var Ut = R("></template>");
	function Wt(e, t, n) {
		if (P(e, Lt), n === null) throw Error(i(395));
		return P(e, t.boundaryPrefix), P(e, L(n.toString(16))), F(e, Rt);
	}
	var Gt = R("<div hidden id=\""), Kt = R("\">"), qt = R("</div>"), Jt = R("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), Yt = R("\">"), X = R("</svg>"), Xt = R("<math aria-hidden=\"true\" style=\"display:none\" id=\""), Zt = R("\">"), Qt = R("</math>"), Z = R("<table hidden id=\""), $t = R("\">"), en = R("</table>"), tn = R("<table hidden><tbody id=\""), nn = R("\">"), Q = R("</tbody></table>"), $ = R("<table hidden><tr id=\""), rn = R("\">"), an = R("</tr></table>"), on = R("<table hidden><colgroup id=\""), sn = R("\">"), cn = R("</colgroup></table>");
	function ln(e, t, n, r) {
		switch (n.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return P(e, Gt), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, Kt);
			case 4: return P(e, Jt), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, Yt);
			case 5: return P(e, Xt), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, Zt);
			case 6: return P(e, Z), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, $t);
			case 7: return P(e, tn), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, nn);
			case 8: return P(e, $), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, rn);
			case 9: return P(e, on), P(e, t.segmentPrefix), P(e, L(r.toString(16))), F(e, sn);
			default: throw Error(i(397));
		}
	}
	function un(e, t) {
		switch (t.insertionMode) {
			case 0:
			case 1:
			case 3:
			case 2: return F(e, qt);
			case 4: return F(e, X);
			case 5: return F(e, Qt);
			case 6: return F(e, en);
			case 7: return F(e, Q);
			case 8: return F(e, an);
			case 9: return F(e, cn);
			default: throw Error(i(397));
		}
	}
	var dn = R("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\""), fn = R("$RS(\""), pn = R("\",\""), mn = R("\")<\/script>");
	R("<template data-rsi=\"\" data-sid=\""), R("\" data-pid=\"");
	var hn = R("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};");
	L("$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),\"auto\"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+K++ +\"_\"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute(\"vt-name\"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if(\"/$\"===r)if(0===f)break;else f--;else\"$\"!==r&&\"$?\"!==r&&\"$~\"!==r&&\"$!\"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute(\"vt-name\"),y=m.get(D);k(d,y?\"vt-share\":\"vt-exit\");y&&(k(y,\"vt-share\"),m.set(D,null));var E=d.querySelectorAll(\"[vt-share]\");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute(\"vt-name\"),\nH=m.get(G);H&&(k(F,\"vt-share\"),k(H,\"vt-share\"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute(\"vt-name\"))&&k(t,\"vt-enter\"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute(\"vt-update\");J&&\"none\"!==J&&!l.includes(n)&&k(n,\"vt-update\");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&\"none\"!==c.getAttribute(\"vt-update\"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener(\"load\",q);w.g.addEventListener(\"error\",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===b.getAttribute(\"style\")&&b.removeAttribute(\"style\")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);");
	var gn = R("$RC(\""), _n = R("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""), vn = R("$RR(\""), yn = R("\",\""), bn = R("\","), xn = R("\""), Sn = R(")<\/script>");
	R("<template data-rci=\"\" data-bid=\""), R("<template data-rri=\"\" data-bid=\""), R("\" data-sid=\""), R("\" data-sty=\"");
	var Cn = R("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};"), wn = R("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\""), Tn = R("$RX(\""), En = R("\""), Dn = R(","), On = R(")<\/script>");
	R("<template data-rxi=\"\" data-bid=\""), R("\" data-dgst=\""), R("\" data-msg=\""), R("\" data-stck=\""), R("\" data-cstck=\"");
	var kn = /[<\u2028\u2029]/g;
	function An(e) {
		return JSON.stringify(e).replace(kn, function(e) {
			switch (e) {
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var jn = /[&><\u2028\u2029]/g;
	function Mn(e) {
		return JSON.stringify(e).replace(jn, function(e) {
			switch (e) {
				case "&": return "\\u0026";
				case ">": return "\\u003e";
				case "<": return "\\u003c";
				case "\u2028": return "\\u2028";
				case "\u2029": return "\\u2029";
				default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		});
	}
	var Nn = R(" media=\"not all\" data-precedence=\""), Pn = R("\" data-href=\""), Fn = R("\">"), In = R("</style>"), Ln = !1, Rn = !0;
	function zn(e) {
		var t = e.rules, n = e.hrefs, r = 0;
		if (n.length) {
			for (P(this, ye.startInlineStyle), P(this, Nn), P(this, e.precedence), P(this, Pn); r < n.length - 1; r++) P(this, n[r]), P(this, qn);
			for (P(this, n[r]), P(this, Fn), r = 0; r < t.length; r++) P(this, t[r]);
			Rn = F(this, In), Ln = !0, t.length = 0, n.length = 0;
		}
	}
	function Bn(e) {
		return e.state === 2 ? !1 : Ln = !0;
	}
	function Vn(e, t, n) {
		return Ln = !1, Rn = !0, ye = n, t.styles.forEach(zn, e), ye = null, t.stylesheets.forEach(Bn), Ln && (n.stylesToHoist = !0), Rn;
	}
	function Hn(e) {
		for (var t = 0; t < e.length; t++) P(this, e[t]);
		e.length = 0;
	}
	var Un = [];
	function Wn(e) {
		ut(Un, e.props);
		for (var t = 0; t < Un.length; t++) P(this, Un[t]);
		Un.length = 0, e.state = 2;
	}
	var Gn = R(" data-precedence=\""), Kn = R("\" data-href=\""), qn = R(" "), Jn = R("\">"), Yn = R("</style>");
	function Xn(e) {
		var t = 0 < e.sheets.size;
		e.sheets.forEach(Wn, this), e.sheets.clear();
		var n = e.rules, r = e.hrefs;
		if (!t || r.length) {
			if (P(this, ye.startInlineStyle), P(this, Gn), P(this, e.precedence), e = 0, r.length) {
				for (P(this, Kn); e < r.length - 1; e++) P(this, r[e]), P(this, qn);
				P(this, r[e]);
			}
			for (P(this, Jn), e = 0; e < n.length; e++) P(this, n[e]);
			P(this, Yn), n.length = 0, r.length = 0;
		}
	}
	function Zn(e) {
		if (e.state === 0) {
			e.state = 1;
			var t = e.props;
			for (ut(Un, {
				rel: "preload",
				as: "style",
				href: e.props.href,
				crossOrigin: t.crossOrigin,
				fetchPriority: t.fetchPriority,
				integrity: t.integrity,
				media: t.media,
				hrefLang: t.hrefLang,
				referrerPolicy: t.referrerPolicy
			}), e = 0; e < Un.length; e++) P(this, Un[e]);
			Un.length = 0;
		}
	}
	function Qn(e) {
		e.sheets.forEach(Zn, this), e.sheets.clear();
	}
	R("<link rel=\"expect\" href=\"#"), R("\" blocking=\"render\"/>");
	var $n = R(" id=\"");
	function er(e, t) {
		!(t.instructions & 32) && (t.instructions |= 32, e.push($n, L(V("_" + t.idPrefix + "R_")), W));
	}
	var tr = R("["), nr = R(",["), rr = R(","), ir = R("]");
	function ar(e, t) {
		P(e, tr);
		var n = tr;
		t.stylesheets.forEach(function(t) {
			if (t.state !== 2) if (t.state === 3) P(e, n), P(e, L(Mn("" + t.props.href))), P(e, ir), n = nr;
			else {
				P(e, n);
				var r = t.props["data-precedence"], a = t.props;
				for (var o in P(e, L(Mn(pe("" + t.props.href)))), r = "" + r, P(e, rr), P(e, L(Mn(r))), a) if (B.call(a, o) && (r = a[o], r != null)) switch (o) {
					case "href":
					case "rel":
					case "precedence":
					case "data-precedence": break;
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(399, "link"));
					default: or(e, o, r);
				}
				P(e, ir), n = nr, t.state = 3;
			}
		}), P(e, ir);
	}
	function or(e, t, n) {
		var r = t.toLowerCase();
		switch (typeof n) {
			case "function":
			case "symbol": return;
		}
		switch (t) {
			case "innerHTML":
			case "dangerouslySetInnerHTML":
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "style":
			case "ref": return;
			case "className":
				r = "class", t = "" + n;
				break;
			case "hidden":
				if (!1 === n) return;
				t = "";
				break;
			case "src":
			case "href":
				n = pe(n), t = "" + n;
				break;
			default:
				if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !oe(t)) return;
				t = "" + n;
		}
		P(e, rr), P(e, L(Mn(r))), P(e, rr), P(e, L(Mn(t)));
	}
	function sr() {
		return {
			styles: /* @__PURE__ */ new Set(),
			stylesheets: /* @__PURE__ */ new Set(),
			suspenseyImages: !1
		};
	}
	function cr(e) {
		var t = Hi || null;
		if (t) {
			var n = t.resumableState, r = t.renderState;
			if (typeof e == "string" && e) {
				if (!n.dnsResources.hasOwnProperty(e)) {
					n.dnsResources[e] = null, n = r.headers;
					var i, a;
					(a = n && 0 < n.remainingCapacity) && (a = (i = "<" + ("" + e).replace(_r, vr) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= i.length + 2))), a ? (r.resets.dns[e] = null, n.preconnects && (n.preconnects += ", "), n.preconnects += i) : (i = [], ut(i, {
						href: e,
						rel: "dns-prefetch"
					}), r.preconnects.add(i));
				}
				za(t);
			}
		} else _e.D(e);
	}
	function lr(e, t) {
		var n = Hi || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (typeof e == "string" && e) {
				var a = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
				if (!r.connectResources[a].hasOwnProperty(e)) {
					r.connectResources[a][e] = null, r = i.headers;
					var o, s;
					if (s = r && 0 < r.remainingCapacity) {
						if (s = "<" + ("" + e).replace(_r, vr) + ">; rel=preconnect", typeof t == "string") {
							var c = ("" + t).replace(yr, br);
							s += "; crossorigin=\"" + c + "\"";
						}
						s = (o = s, 0 <= (r.remainingCapacity -= o.length + 2));
					}
					s ? (i.resets.connect[a][e] = null, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (a = [], ut(a, {
						rel: "preconnect",
						href: e,
						crossOrigin: t
					}), i.preconnects.add(a));
				}
				za(n);
			}
		} else _e.C(e, t);
	}
	function ur(e, t, n) {
		var r = Hi || null;
		if (r) {
			var i = r.resumableState, a = r.renderState;
			if (t && e) {
				switch (t) {
					case "image":
						if (n) var o = n.imageSrcSet, s = n.imageSizes, c = n.fetchPriority;
						var l = o ? o + "\n" + (s || "") : e;
						if (i.imageResources.hasOwnProperty(l)) return;
						i.imageResources[l] = ve, i = a.headers;
						var u;
						i && 0 < i.remainingCapacity && typeof o != "string" && c === "high" && (u = gr(e, t, n), 0 <= (i.remainingCapacity -= u.length + 2)) ? (a.resets.image[l] = ve, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (i = [], ut(i, ne({
							rel: "preload",
							href: o ? void 0 : e,
							as: t
						}, n)), c === "high" ? a.highImagePreloads.add(i) : (a.bulkPreloads.add(i), a.preloads.images.set(l, i)));
						break;
					case "style":
						if (i.styleResources.hasOwnProperty(e)) return;
						o = [], ut(o, ne({
							rel: "preload",
							href: e,
							as: t
						}, n)), i.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ve : [n.crossOrigin, n.integrity], a.preloads.stylesheets.set(e, o), a.bulkPreloads.add(o);
						break;
					case "script":
						if (i.scriptResources.hasOwnProperty(e)) return;
						o = [], a.preloads.scripts.set(e, o), a.bulkPreloads.add(o), ut(o, ne({
							rel: "preload",
							href: e,
							as: t
						}, n)), i.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ve : [n.crossOrigin, n.integrity];
						break;
					default:
						if (i.unknownResources.hasOwnProperty(t)) {
							if (o = i.unknownResources[t], o.hasOwnProperty(e)) return;
						} else o = {}, i.unknownResources[t] = o;
						if (o[e] = ve, (i = a.headers) && 0 < i.remainingCapacity && t === "font" && (l = gr(e, t, n), 0 <= (i.remainingCapacity -= l.length + 2))) a.resets.font[e] = ve, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += l;
						else switch (i = [], e = ne({
							rel: "preload",
							href: e,
							as: t
						}, n), ut(i, e), t) {
							case "font":
								a.fontPreloads.add(i);
								break;
							default: a.bulkPreloads.add(i);
						}
				}
				za(r);
			}
		} else _e.L(e, t, n);
	}
	function dr(e, t) {
		var n = Hi || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = t && typeof t.as == "string" ? t.as : "script";
				switch (a) {
					case "script":
						if (r.moduleScriptResources.hasOwnProperty(e)) return;
						a = [], r.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? ve : [t.crossOrigin, t.integrity], i.preloads.moduleScripts.set(e, a);
						break;
					default:
						if (r.moduleUnknownResources.hasOwnProperty(a)) {
							var o = r.unknownResources[a];
							if (o.hasOwnProperty(e)) return;
						} else o = {}, r.moduleUnknownResources[a] = o;
						a = [], o[e] = ve;
				}
				ut(a, ne({
					rel: "modulepreload",
					href: e
				}, t)), i.bulkPreloads.add(a), za(n);
			}
		} else _e.m(e, t);
	}
	function fr(e, t, n) {
		var r = Hi || null;
		if (r) {
			var i = r.resumableState, a = r.renderState;
			if (e) {
				t ||= "default";
				var o = a.styles.get(t), s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
				s !== null && (i.styleResources[e] = null, o || (o = {
					precedence: L(V(t)),
					rules: [],
					hrefs: [],
					sheets: /* @__PURE__ */ new Map()
				}, a.styles.set(t, o)), t = {
					state: 0,
					props: ne({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n)
				}, s && (s.length === 2 && hr(t.props, s), (a = a.preloads.stylesheets.get(e)) && 0 < a.length ? a.length = 0 : t.state = 1), o.sheets.set(e, t), za(r));
			}
		} else _e.S(e, t, n);
	}
	function pr(e, t) {
		var n = Hi || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
				a !== null && (r.scriptResources[e] = null, t = ne({
					src: e,
					async: !0
				}, t), a && (a.length === 2 && hr(t, a), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), vt(e, t), za(n));
			}
		} else _e.X(e, t);
	}
	function mr(e, t) {
		var n = Hi || null;
		if (n) {
			var r = n.resumableState, i = n.renderState;
			if (e) {
				var a = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
				a !== null && (r.moduleScriptResources[e] = null, t = ne({
					src: e,
					type: "module",
					async: !0
				}, t), a && (a.length === 2 && hr(t, a), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), vt(e, t), za(n));
			}
		} else _e.M(e, t);
	}
	function hr(e, t) {
		e.crossOrigin ??= t[0], e.integrity ??= t[1];
	}
	function gr(e, t, n) {
		for (var r in e = ("" + e).replace(_r, vr), t = ("" + t).replace(yr, br), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) B.call(n, r) && (e = n[r], typeof e == "string" && (t += "; " + r.toLowerCase() + "=\"" + ("" + e).replace(yr, br) + "\""));
		return t;
	}
	var _r = /[<>\r\n]/g;
	function vr(e) {
		switch (e) {
			case "<": return "%3C";
			case ">": return "%3E";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	var yr = /["';,\r\n]/g;
	function br(e) {
		switch (e) {
			case "\"": return "%22";
			case "'": return "%27";
			case ";": return "%3B";
			case ",": return "%2C";
			case "\n": return "%0A";
			case "\r": return "%0D";
			default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
		}
	}
	function xr(e) {
		this.styles.add(e);
	}
	function Sr(e) {
		this.stylesheets.add(e);
	}
	function Cr(e, t) {
		t.styles.forEach(xr, e), t.stylesheets.forEach(Sr, e), t.suspenseyImages && (e.suspenseyImages = !0);
	}
	function wr(e) {
		return 0 < e.stylesheets.size || e.suspenseyImages;
	}
	var Tr = Function.prototype.bind, Er = Symbol.for("react.client.reference");
	function Dr(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === Er ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case s: return "Fragment";
			case l: return "Profiler";
			case c: return "StrictMode";
			case p: return "Suspense";
			case m: return "SuspenseList";
			case v: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case o: return "Portal";
			case d: return e.displayName || "Context";
			case u: return (e._context.displayName || "Context") + ".Consumer";
			case f:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case h: return t = e.displayName || null, t === null ? Dr(e.type) || "Memo" : t;
			case g:
				t = e._payload, e = e._init;
				try {
					return Dr(e(t));
				} catch {}
		}
		return null;
	}
	var Or = {}, kr = null;
	function Ar(e, t) {
		if (e !== t) {
			e.context._currentValue = e.parentValue, e = e.parent;
			var n = t.parent;
			if (e === null) {
				if (n !== null) throw Error(i(401));
			} else {
				if (n === null) throw Error(i(401));
				Ar(e, n);
			}
			t.context._currentValue = t.value;
		}
	}
	function jr(e) {
		e.context._currentValue = e.parentValue, e = e.parent, e !== null && jr(e);
	}
	function Mr(e) {
		var t = e.parent;
		t !== null && Mr(t), e.context._currentValue = e.value;
	}
	function Nr(e, t) {
		if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(i(402));
		e.depth === t.depth ? Ar(e, t) : Nr(e, t);
	}
	function Pr(e, t) {
		var n = t.parent;
		if (n === null) throw Error(i(402));
		e.depth === n.depth ? Ar(e, n) : Pr(e, n), t.context._currentValue = t.value;
	}
	function Fr(e) {
		var t = kr;
		t !== e && (t === null ? Mr(e) : e === null ? jr(t) : t.depth === e.depth ? Ar(t, e) : t.depth > e.depth ? Nr(t, e) : Pr(t, e), kr = e);
	}
	var Ir = {
		enqueueSetState: function(e, t) {
			e = e._reactInternals, e.queue !== null && e.queue.push(t);
		},
		enqueueReplaceState: function(e, t) {
			e = e._reactInternals, e.replace = !0, e.queue = [t];
		},
		enqueueForceUpdate: function() {}
	}, Lr = {
		id: 1,
		overflow: ""
	};
	function Rr(e, t, n) {
		var r = e.id;
		e = e.overflow;
		var i = 32 - zr(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - zr(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
				id: 1 << 32 - zr(t) + i | n << i | r,
				overflow: a + e
			};
		}
		return {
			id: 1 << a | n << i | r,
			overflow: e
		};
	}
	var zr = Math.clz32 ? Math.clz32 : Hr, Br = Math.log, Vr = Math.LN2;
	function Hr(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Br(e) / Vr | 0) | 0;
	}
	function Ur() {}
	var Wr = Error(i(460));
	function Gr(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Ur, Ur), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw t.reason;
			default:
				switch (typeof t.status == "string" ? t.then(Ur, Ur) : (e = t, e.status = "pending", e.then(function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "fulfilled", n.value = e;
					}
				}, function(e) {
					if (t.status === "pending") {
						var n = t;
						n.status = "rejected", n.reason = e;
					}
				})), t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw t.reason;
				}
				throw Kr = t, Wr;
		}
	}
	var Kr = null;
	function qr() {
		if (Kr === null) throw Error(i(459));
		var e = Kr;
		return Kr = null, e;
	}
	function Jr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Yr = typeof Object.is == "function" ? Object.is : Jr, Xr = null, Zr = null, Qr = null, $r = null, ei = null, ti = null, ni = !1, ri = !1, ii = 0, ai = 0, oi = -1, si = 0, ci = null, li = null, ui = 0;
	function di() {
		if (Xr === null) throw Error(i(321));
		return Xr;
	}
	function fi() {
		if (0 < ui) throw Error(i(312));
		return {
			memoizedState: null,
			queue: null,
			next: null
		};
	}
	function pi() {
		return ti === null ? ei === null ? (ni = !1, ei = ti = fi()) : (ni = !0, ti = ei) : ti.next === null ? (ni = !1, ti = ti.next = fi()) : (ni = !0, ti = ti.next), ti;
	}
	function mi() {
		var e = ci;
		return ci = null, e;
	}
	function hi() {
		$r = Qr = Zr = Xr = null, ri = !1, ei = null, ui = 0, ti = li = null;
	}
	function gi(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function _i(e, t, n) {
		if (Xr = di(), ti = pi(), ni) {
			var r = ti.queue;
			if (t = r.dispatch, li !== null && (n = li.get(r), n !== void 0)) {
				li.delete(r), r = ti.memoizedState;
				do
					r = e(r, n.action), n = n.next;
				while (n !== null);
				return ti.memoizedState = r, [r, t];
			}
			return [ti.memoizedState, t];
		}
		return e = e === gi ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), ti.memoizedState = e, e = ti.queue = {
			last: null,
			dispatch: null
		}, e = e.dispatch = yi.bind(null, Xr, e), [ti.memoizedState, e];
	}
	function vi(e, t) {
		if (Xr = di(), ti = pi(), t = t === void 0 ? null : t, ti !== null) {
			var n = ti.memoizedState;
			if (n !== null && t !== null) {
				var r = n[1];
				a: if (r === null) r = !1;
				else {
					for (var i = 0; i < r.length && i < t.length; i++) if (!Yr(t[i], r[i])) {
						r = !1;
						break a;
					}
					r = !0;
				}
				if (r) return n[0];
			}
		}
		return e = e(), ti.memoizedState = [e, t], e;
	}
	function yi(e, t, n) {
		if (25 <= ui) throw Error(i(301));
		if (e === Xr) if (ri = !0, e = {
			action: n,
			next: null
		}, li === null && (li = /* @__PURE__ */ new Map()), n = li.get(t), n === void 0) li.set(t, e);
		else {
			for (t = n; t.next !== null;) t = t.next;
			t.next = e;
		}
	}
	function bi() {
		throw Error(i(440));
	}
	function xi() {
		throw Error(i(394));
	}
	function Si() {
		throw Error(i(479));
	}
	function Ci(e, t, n) {
		di();
		var r = ai++, i = Qr;
		if (typeof e.$$FORM_ACTION == "function") {
			var a = null, o = $r;
			i = i.formState;
			var s = e.$$IS_SIGNATURE_EQUAL;
			if (i !== null && typeof s == "function") {
				var c = i[1];
				s.call(e, i[2], i[3]) && (a = n === void 0 ? "k" + T(JSON.stringify([
					o,
					null,
					r
				]), 0) : "p" + n, c === a && (oi = r, t = i[0]));
			}
			var l = e.bind(null, t);
			return e = function(e) {
				l(e);
			}, typeof l.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
				e = l.$$FORM_ACTION(e), n !== void 0 && (n += "", e.action = n);
				var t = e.data;
				return t && (a === null && (a = n === void 0 ? "k" + T(JSON.stringify([
					o,
					null,
					r
				]), 0) : "p" + n), t.append("$ACTION_KEY", a)), e;
			}), [
				t,
				e,
				!1
			];
		}
		var u = e.bind(null, t);
		return [
			t,
			function(e) {
				u(e);
			},
			!1
		];
	}
	function wi(e) {
		var t = si;
		return si += 1, ci === null && (ci = []), Gr(ci, e, t);
	}
	function Ti() {
		throw Error(i(393));
	}
	var Ei = {
		readContext: function(e) {
			return e._currentValue;
		},
		use: function(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return wi(e);
				if (e.$$typeof === d) return e._currentValue;
			}
			throw Error(i(438, String(e)));
		},
		useContext: function(e) {
			return di(), e._currentValue;
		},
		useMemo: vi,
		useReducer: _i,
		useRef: function(e) {
			Xr = di(), ti = pi();
			var t = ti.memoizedState;
			return t === null ? (e = { current: e }, ti.memoizedState = e) : t;
		},
		useState: function(e) {
			return _i(gi, e);
		},
		useInsertionEffect: Ur,
		useLayoutEffect: Ur,
		useCallback: function(e, t) {
			return vi(function() {
				return e;
			}, t);
		},
		useImperativeHandle: Ur,
		useEffect: Ur,
		useDebugValue: Ur,
		useDeferredValue: function(e, t) {
			return di(), t === void 0 ? e : t;
		},
		useTransition: function() {
			return di(), [!1, xi];
		},
		useId: function() {
			var e = Zr.treeContext, t = e.overflow;
			e = e.id, e = (e & ~(1 << 32 - zr(e) - 1)).toString(32) + t;
			var n = Di;
			if (n === null) throw Error(i(404));
			return t = ii++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
		},
		useSyncExternalStore: function(e, t, n) {
			if (n === void 0) throw Error(i(407));
			return n();
		},
		useOptimistic: function(e) {
			return di(), [e, Si];
		},
		useActionState: Ci,
		useFormState: Ci,
		useHostTransitionStatus: function() {
			return di(), ge;
		},
		useMemoCache: function(e) {
			for (var t = Array(e), n = 0; n < e; n++) t[n] = b;
			return t;
		},
		useCacheRefresh: function() {
			return Ti;
		},
		useEffectEvent: function() {
			return bi;
		}
	}, Di = null, Oi = {
		getCacheForType: function() {
			throw Error(i(248));
		},
		cacheSignal: function() {
			throw Error(i(248));
		}
	}, ki, Ai;
	function ji(e) {
		if (ki === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			ki = t && t[1] || "", Ai = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + ki + e + Ai;
	}
	var Mi = !1;
	function Ni(e, t) {
		if (!e || Mi) return "";
		Mi = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Mi = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? ji(n) : "";
	}
	function Pi(e) {
		if (typeof e == "string") return ji(e);
		if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? Ni(e, !0) : Ni(e, !1);
		if (typeof e == "object" && e) {
			switch (e.$$typeof) {
				case f: return Ni(e.render, !1);
				case h: return Ni(e.type, !1);
				case g:
					var t = e, n = t._payload;
					t = t._init;
					try {
						e = t(n);
					} catch {
						return ji("Lazy");
					}
					return Pi(e);
			}
			if (typeof e.name == "string") {
				a: {
					n = e.name, t = e.env;
					var r = e.debugLocation;
					if (r != null && (e = Error.prepareStackTrace, Error.prepareStackTrace = void 0, r = r.stack, Error.prepareStackTrace = e, r.startsWith("Error: react-stack-top-frame\n") && (r = r.slice(29)), e = r.indexOf("\n"), e !== -1 && (r = r.slice(e + 1)), e = r.indexOf("react_stack_bottom_frame"), e !== -1 && (e = r.lastIndexOf("\n", e)), e = e === -1 ? "" : r = r.slice(0, e), r = e.lastIndexOf("\n"), e = r === -1 ? e : e.slice(r + 1), e.indexOf(n) !== -1)) {
						n = "\n" + e;
						break a;
					}
					n = ji(n + (t ? " [" + t + "]" : ""));
				}
				return n;
			}
		}
		switch (e) {
			case m: return ji("SuspenseList");
			case p: return ji("Suspense");
		}
		return "";
	}
	function Fi(e, t) {
		return (500 < t.byteSize || wr(t.contentState)) && t.contentPreamble === null;
	}
	function Ii(e) {
		if (typeof e == "object" && e && typeof e.environmentName == "string") {
			var t = e.environmentName;
			e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", "") : e.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), t = Tr.apply(console.error, e), t();
		} else console.error(e);
		return null;
	}
	function Li(e, t, n, r, i, a, o, s, c, l, u) {
		var d = /* @__PURE__ */ new Set();
		this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = r === void 0 ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = i === void 0 ? Ii : i, this.onPostpone = l === void 0 ? Ur : l, this.onAllReady = a === void 0 ? Ur : a, this.onShellReady = o === void 0 ? Ur : o, this.onShellError = s === void 0 ? Ur : s, this.onFatalError = c === void 0 ? Ur : c, this.formState = u === void 0 ? null : u;
	}
	function Ri(e, t, n, r, i, a, o, s, c, l, u, d) {
		return t = new Li(t, n, r, i, a, o, s, c, l, u, d), n = qi(t, 0, null, r, !1, !1), n.parentFlushed = !0, e = Gi(t, null, e, -1, null, n, null, null, t.abortableTasks, null, r, null, Lr, null, null), Ji(e), t.pingedTasks.push(e), t;
	}
	function zi(e, t, n, r, i, a, o, s, c, l, u) {
		return e = Ri(e, t, n, r, i, a, o, s, c, l, u, void 0), e.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		}, e;
	}
	function Bi(e, t, n, r, i, a, o, s, c) {
		return n = new Li(t.resumableState, n, t.rootFormatContext, t.progressiveChunkSize, r, i, a, o, s, c, null), n.nextSegmentId = t.nextSegmentId, typeof t.replaySlots == "number" ? (r = qi(n, 0, null, t.rootFormatContext, !1, !1), r.parentFlushed = !0, e = Gi(n, null, e, -1, null, r, null, null, n.abortableTasks, null, t.rootFormatContext, null, Lr, null, null), Ji(e), n.pingedTasks.push(e), n) : (e = Ki(n, null, {
			nodes: t.replayNodes,
			slots: t.replaySlots,
			pendingTasks: 0
		}, e, -1, null, null, n.abortableTasks, null, t.rootFormatContext, null, Lr, null, null), Ji(e), n.pingedTasks.push(e), n);
	}
	function Vi(e, t, n, r, i, a, o, s, c) {
		return e = Bi(e, t, n, r, i, a, o, s, c), e.trackedPostpones = {
			workingMap: /* @__PURE__ */ new Map(),
			rootNodes: [],
			rootSlots: null
		}, e;
	}
	var Hi = null;
	function Ui(e, t) {
		e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? j(function() {
			return Ea(e);
		}) : O(function() {
			return Ea(e);
		}));
	}
	function Wi(e, t, n, r, i) {
		return n = {
			status: 0,
			rootSegmentID: -1,
			parentFlushed: !1,
			pendingTasks: 0,
			row: t,
			completedSegments: [],
			byteSize: 0,
			fallbackAbortableTasks: n,
			errorDigest: null,
			contentState: sr(),
			fallbackState: sr(),
			contentPreamble: r,
			fallbackPreamble: i,
			trackedContentKeyPath: null,
			trackedFallbackNode: null
		}, t !== null && (t.pendingTasks++, r = t.boundaries, r !== null && (e.allPendingTasks++, n.pendingTasks++, r.push(n)), e = t.inheritedHoistables, e !== null && Cr(n.contentState, e)), n;
	}
	function Gi(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
		e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++, p !== null && p.pendingTasks++;
		var h = {
			replay: null,
			node: n,
			childIndex: r,
			ping: function() {
				return Ui(e, h);
			},
			blockedBoundary: i,
			blockedSegment: a,
			blockedPreamble: o,
			hoistableState: s,
			abortSet: c,
			keyPath: l,
			formatContext: u,
			context: d,
			treeContext: f,
			row: p,
			componentStack: m,
			thenableState: t
		};
		return c.add(h), h;
	}
	function Ki(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, f !== null && f.pendingTasks++, n.pendingTasks++;
		var m = {
			replay: n,
			node: r,
			childIndex: i,
			ping: function() {
				return Ui(e, m);
			},
			blockedBoundary: a,
			blockedSegment: null,
			blockedPreamble: null,
			hoistableState: o,
			abortSet: s,
			keyPath: c,
			formatContext: l,
			context: u,
			treeContext: d,
			row: f,
			componentStack: p,
			thenableState: t
		};
		return s.add(m), m;
	}
	function qi(e, t, n, r, i, a) {
		return {
			status: 0,
			parentFlushed: !1,
			id: -1,
			index: t,
			chunks: [],
			children: [],
			preambleChildren: [],
			parentFormatContext: r,
			boundary: n,
			lastPushedText: i,
			textEmbedded: a
		};
	}
	function Ji(e) {
		var t = e.node;
		if (typeof t == "object" && t) switch (t.$$typeof) {
			case a: e.componentStack = {
				parent: e.componentStack,
				type: t.type
			};
		}
	}
	function Yi(e) {
		return e === null ? null : {
			parent: e.parent,
			type: "Suspense Fallback"
		};
	}
	function Xi(e) {
		var t = {};
		return e && Object.defineProperty(t, "componentStack", {
			configurable: !0,
			enumerable: !0,
			get: function() {
				try {
					var n = "", r = e;
					do
						n += Pi(r.type), r = r.parent;
					while (r);
					var i = n;
				} catch (e) {
					i = "\nError generating stack: " + e.message + "\n" + e.stack;
				}
				return Object.defineProperty(t, "componentStack", { value: i }), i;
			}
		}), t;
	}
	function Zi(e, t, n) {
		if (e = e.onError, t = e(t, n), t == null || typeof t == "string") return t;
	}
	function Qi(e, t) {
		var n = e.onShellError, r = e.onFatalError;
		n(t), r(t), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = 14, te(e.destination, t));
	}
	function $i(e, t) {
		ea(e, t.next, t.hoistables);
	}
	function ea(e, t, n) {
		for (; t !== null;) {
			n !== null && (Cr(t.hoistables, n), t.inheritedHoistables = n);
			var r = t.boundaries;
			if (r !== null) {
				t.boundaries = null;
				for (var i = 0; i < r.length; i++) {
					var a = r[i];
					n !== null && Cr(a.contentState, n), Ta(e, a, null, null);
				}
			}
			if (t.pendingTasks--, 0 < t.pendingTasks) break;
			n = t.hoistables, t = t.next;
		}
	}
	function ta(e, t) {
		var n = t.boundaries;
		if (n !== null && t.pendingTasks === n.length) {
			for (var r = !0, i = 0; i < n.length; i++) {
				var a = n[i];
				if (a.pendingTasks !== 1 || a.parentFlushed || Fi(e, a)) {
					r = !1;
					break;
				}
			}
			r && ea(e, t, t.hoistables);
		}
	}
	function na(e) {
		var t = {
			pendingTasks: 1,
			boundaries: null,
			hoistables: sr(),
			inheritedHoistables: null,
			together: !1,
			next: null
		};
		return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
	}
	function ra(e, t, n, r, i) {
		var a = t.keyPath, o = t.treeContext, s = t.row;
		t.keyPath = n, n = r.length;
		var c = null;
		if (t.replay !== null) {
			var l = t.replay.slots;
			if (typeof l == "object" && l) for (var u = 0; u < n; u++) {
				var d = i !== "backwards" && i !== "unstable_legacy-backwards" ? u : n - 1 - u, f = r[d];
				t.row = c = na(c), t.treeContext = Rr(o, n, d);
				var p = l[d];
				typeof p == "number" ? (sa(e, t, p, f, d), delete l[d]) : ga(e, t, f, d), --c.pendingTasks === 0 && $i(e, c);
			}
			else for (l = 0; l < n; l++) u = i !== "backwards" && i !== "unstable_legacy-backwards" ? l : n - 1 - l, d = r[u], t.row = c = na(c), t.treeContext = Rr(o, n, u), ga(e, t, d, u), --c.pendingTasks === 0 && $i(e, c);
		} else if (i !== "backwards" && i !== "unstable_legacy-backwards") for (i = 0; i < n; i++) l = r[i], t.row = c = na(c), t.treeContext = Rr(o, n, i), ga(e, t, l, i), --c.pendingTasks === 0 && $i(e, c);
		else {
			for (i = t.blockedSegment, l = i.children.length, u = i.chunks.length, d = n - 1; 0 <= d; d--) {
				f = r[d], t.row = c = na(c), t.treeContext = Rr(o, n, d), p = qi(e, u, null, t.formatContext, d === 0 ? i.lastPushedText : !0, !0), i.children.splice(l, 0, p), t.blockedSegment = p;
				try {
					ga(e, t, f, d), p.lastPushedText && p.textEmbedded && p.chunks.push(Ve), p.status = 1, wa(e, t.blockedBoundary, p), --c.pendingTasks === 0 && $i(e, c);
				} catch (t) {
					throw p.status = e.status === 12 ? 3 : 4, t;
				}
			}
			t.blockedSegment = i, i.lastPushedText = !1;
		}
		s !== null && c !== null && 0 < c.pendingTasks && (s.pendingTasks++, c.next = s), t.treeContext = o, t.row = s, t.keyPath = a;
	}
	function ia(e, t, n, r, i, a) {
		var o = t.thenableState;
		for (t.thenableState = null, Xr = {}, Zr = t, Qr = e, $r = n, ai = ii = 0, oi = -1, si = 0, ci = o, e = r(i, a); ri;) ri = !1, ai = ii = 0, oi = -1, si = 0, ui += 1, ti = null, e = r(i, a);
		return hi(), e;
	}
	function aa(e, t, n, r, i, a, o) {
		var s = !1;
		if (a !== 0 && e.formState !== null) {
			var c = t.blockedSegment;
			if (c !== null) {
				s = !0, c = c.chunks;
				for (var l = 0; l < a; l++) l === o ? c.push(ct) : c.push(lt);
			}
		}
		a = t.keyPath, t.keyPath = n, i ? (n = t.treeContext, t.treeContext = Rr(n, 1, 0), ga(e, t, r, -1), t.treeContext = n) : s ? ga(e, t, r, -1) : ca(e, t, r, -1), t.keyPath = a;
	}
	function oa(e, t, n, r, a, o) {
		if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
			var b = a;
			if ("ref" in a) for (var S in b = {}, a) S !== "ref" && (b[S] = a[S]);
			var T = r.defaultProps;
			if (T) for (var E in b === a && (b = ne({}, b, a)), T) b[E] === void 0 && (b[E] = T[E]);
			a = b, b = Or, T = r.contextType, typeof T == "object" && T && (b = T._currentValue), b = new r(a, b);
			var D = b.state === void 0 ? null : b.state;
			if (b.updater = Ir, b.props = a, b.state = D, T = {
				queue: [],
				replace: !1
			}, b._reactInternals = T, o = r.contextType, b.context = typeof o == "object" && o ? o._currentValue : Or, o = r.getDerivedStateFromProps, typeof o == "function" && (o = o(a, D), D = o == null ? D : ne({}, D, o), b.state = D), typeof r.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function")) if (r = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), r !== b.state && Ir.enqueueReplaceState(b, b.state, null), T.queue !== null && 0 < T.queue.length) if (r = T.queue, o = T.replace, T.queue = null, T.replace = !1, o && r.length === 1) b.state = r[0];
			else {
				for (T = o ? r[0] : b.state, D = !0, o = +!!o; o < r.length; o++) E = r[o], E = typeof E == "function" ? E.call(b, T, a, void 0) : E, E != null && (D ? (D = !1, T = ne({}, T, E)) : ne(T, E));
				b.state = T;
			}
			else T.queue = null;
			if (r = b.render(), e.status === 12) throw null;
			a = t.keyPath, t.keyPath = n, ca(e, t, r, -1), t.keyPath = a;
		} else {
			if (r = ia(e, t, n, r, a, void 0), e.status === 12) throw null;
			aa(e, t, n, r, ii !== 0, ai, oi);
		}
		else if (typeof r == "string") if (b = t.blockedSegment, b === null) b = a.children, T = t.formatContext, D = t.keyPath, t.formatContext = Le(T, r, a), t.keyPath = n, ga(e, t, b, -1), t.formatContext = T, t.keyPath = D;
		else {
			if (D = Et(b.chunks, r, a, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, b.lastPushedText), b.lastPushedText = !1, T = t.formatContext, o = t.keyPath, t.keyPath = n, (t.formatContext = Le(T, r, a)).insertionMode === 3) {
				n = qi(e, 0, null, t.formatContext, !1, !1), b.preambleChildren.push(n), t.blockedSegment = n;
				try {
					n.status = 6, ga(e, t, D, -1), n.lastPushedText && n.textEmbedded && n.chunks.push(Ve), n.status = 1, wa(e, t.blockedBoundary, n);
				} finally {
					t.blockedSegment = b;
				}
			} else ga(e, t, D, -1);
			t.formatContext = T, t.keyPath = o;
			a: {
				switch (t = b.chunks, e = e.resumableState, r) {
					case "title":
					case "style":
					case "script":
					case "area":
					case "base":
					case "br":
					case "col":
					case "embed":
					case "hr":
					case "img":
					case "input":
					case "keygen":
					case "link":
					case "meta":
					case "param":
					case "source":
					case "track":
					case "wbr": break a;
					case "body":
						if (1 >= T.insertionMode) {
							e.hasBody = !0;
							break a;
						}
						break;
					case "html":
						if (T.insertionMode === 0) {
							e.hasHtml = !0;
							break a;
						}
						break;
					case "head": if (1 >= T.insertionMode) break a;
				}
				t.push(Ot(r));
			}
			b.lastPushedText = !1;
		}
		else {
			switch (r) {
				case y:
				case c:
				case l:
				case s:
					r = t.keyPath, t.keyPath = n, ca(e, t, a.children, -1), t.keyPath = r;
					return;
				case v:
					r = t.blockedSegment, r === null ? a.mode !== "hidden" && (r = t.keyPath, t.keyPath = n, ga(e, t, a.children, -1), t.keyPath = r) : a.mode !== "hidden" && (r.chunks.push(Pt), r.lastPushedText = !1, b = t.keyPath, t.keyPath = n, ga(e, t, a.children, -1), t.keyPath = b, r.chunks.push(Ft), r.lastPushedText = !1);
					return;
				case m:
					a: {
						if (r = a.children, a = a.revealOrder, a === "forwards" || a === "backwards" || a === "unstable_legacy-backwards") {
							if (w(r)) {
								ra(e, t, n, r, a);
								break a;
							}
							if ((b = C(r)) && (b = b.call(r))) {
								if (T = b.next(), !T.done) {
									do
										T = b.next();
									while (!T.done);
									ra(e, t, n, r, a);
								}
								break a;
							}
						}
						a === "together" ? (a = t.keyPath, b = t.row, T = t.row = na(null), T.boundaries = [], T.together = !0, t.keyPath = n, ca(e, t, r, -1), --T.pendingTasks === 0 && $i(e, T), t.keyPath = a, t.row = b, b !== null && 0 < T.pendingTasks && (b.pendingTasks++, T.next = b)) : (a = t.keyPath, t.keyPath = n, ca(e, t, r, -1), t.keyPath = a);
					}
					return;
				case x:
				case _: throw Error(i(343));
				case p:
					a: if (t.replay !== null) {
						r = t.keyPath, b = t.formatContext, T = t.row, t.keyPath = n, t.formatContext = Be(e.resumableState, b), t.row = null, n = a.children;
						try {
							ga(e, t, n, -1);
						} finally {
							t.keyPath = r, t.formatContext = b, t.row = T;
						}
					} else {
						r = t.keyPath, o = t.formatContext;
						var O = t.row;
						E = t.blockedBoundary, S = t.blockedPreamble;
						var k = t.hoistableState, A = t.blockedSegment, j = a.fallback;
						a = a.children;
						var M = /* @__PURE__ */ new Set(), N = 2 > t.formatContext.insertionMode ? Wi(e, t.row, M, Fe(), Fe()) : Wi(e, t.row, M, null, null);
						e.trackedPostpones !== null && (N.trackedContentKeyPath = n);
						var P = qi(e, A.chunks.length, N, t.formatContext, !1, !1);
						A.children.push(P), A.lastPushedText = !1;
						var F = qi(e, 0, null, t.formatContext, !1, !1);
						if (F.parentFlushed = !0, e.trackedPostpones !== null) {
							b = t.componentStack, T = [
								n[0],
								"Suspense Fallback",
								n[2]
							], D = [
								T[1],
								T[2],
								[],
								null
							], e.trackedPostpones.workingMap.set(T, D), N.trackedFallbackNode = D, t.blockedSegment = P, t.blockedPreamble = N.fallbackPreamble, t.keyPath = T, t.formatContext = ze(e.resumableState, o), t.componentStack = Yi(b), P.status = 6;
							try {
								ga(e, t, j, -1), P.lastPushedText && P.textEmbedded && P.chunks.push(Ve), P.status = 1, wa(e, E, P);
							} catch (t) {
								throw P.status = e.status === 12 ? 3 : 4, t;
							} finally {
								t.blockedSegment = A, t.blockedPreamble = S, t.keyPath = r, t.formatContext = o;
							}
							t = Gi(e, null, a, -1, N, F, N.contentPreamble, N.contentState, t.abortSet, n, Be(e.resumableState, t.formatContext), t.context, t.treeContext, null, b), Ji(t), e.pingedTasks.push(t);
						} else {
							t.blockedBoundary = N, t.blockedPreamble = N.contentPreamble, t.hoistableState = N.contentState, t.blockedSegment = F, t.keyPath = n, t.formatContext = Be(e.resumableState, o), t.row = null, F.status = 6;
							try {
								if (ga(e, t, a, -1), F.lastPushedText && F.textEmbedded && F.chunks.push(Ve), F.status = 1, wa(e, N, F), Ca(N, F), N.pendingTasks === 0 && N.status === 0) {
									if (N.status = 1, !Fi(e, N)) {
										O !== null && --O.pendingTasks === 0 && $i(e, O), e.pendingRootTasks === 0 && t.blockedPreamble && ka(e);
										break a;
									}
								} else O !== null && O.together && ta(e, O);
							} catch (n) {
								N.status = 4, e.status === 12 ? (F.status = 3, b = e.fatalError) : (F.status = 4, b = n), T = Xi(t.componentStack), D = Zi(e, b, T), N.errorDigest = D, pa(e, N);
							} finally {
								t.blockedBoundary = E, t.blockedPreamble = S, t.hoistableState = k, t.blockedSegment = A, t.keyPath = r, t.formatContext = o, t.row = O;
							}
							t = Gi(e, null, j, -1, E, P, N.fallbackPreamble, N.fallbackState, M, [
								n[0],
								"Suspense Fallback",
								n[2]
							], ze(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Yi(t.componentStack)), Ji(t), e.pingedTasks.push(t);
						}
					}
					return;
			}
			if (typeof r == "object" && r) switch (r.$$typeof) {
				case f:
					if ("ref" in a) for (A in b = {}, a) A !== "ref" && (b[A] = a[A]);
					else b = a;
					r = ia(e, t, n, r.render, b, o), aa(e, t, n, r, ii !== 0, ai, oi);
					return;
				case h:
					oa(e, t, n, r.type, a, o);
					return;
				case d:
					if (T = a.children, b = t.keyPath, a = a.value, D = r._currentValue, r._currentValue = a, o = kr, kr = r = {
						parent: o,
						depth: o === null ? 0 : o.depth + 1,
						context: r,
						parentValue: D,
						value: a
					}, t.context = r, t.keyPath = n, ca(e, t, T, -1), e = kr, e === null) throw Error(i(403));
					e.context._currentValue = e.parentValue, e = kr = e.parent, t.context = e, t.keyPath = b;
					return;
				case u:
					a = a.children, r = a(r._context._currentValue), a = t.keyPath, t.keyPath = n, ca(e, t, r, -1), t.keyPath = a;
					return;
				case g:
					if (b = r._init, r = b(r._payload), e.status === 12) throw null;
					oa(e, t, n, r, a, o);
					return;
			}
			throw Error(i(130, r == null ? r : typeof r, ""));
		}
	}
	function sa(e, t, n, r, i) {
		var a = t.replay, o = t.blockedBoundary, s = qi(e, 0, null, t.formatContext, !1, !1);
		s.id = n, s.parentFlushed = !0;
		try {
			t.replay = null, t.blockedSegment = s, ga(e, t, r, i), s.status = 1, wa(e, o, s), o === null ? e.completedRootSegment = s : (Ca(o, s), o.parentFlushed && e.partialBoundaries.push(o));
		} finally {
			t.replay = a, t.blockedSegment = null;
		}
	}
	function ca(e, t, n, r) {
		t.replay !== null && typeof t.replay.slots == "number" ? sa(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, Ji(t), la(e, t), t.componentStack = n);
	}
	function la(e, t) {
		var n = t.node, r = t.childIndex;
		if (n !== null) {
			if (typeof n == "object") {
				switch (n.$$typeof) {
					case a:
						var s = n.type, c = n.key, l = n.props;
						n = l.ref;
						var u = n === void 0 ? null : n, f = Dr(s), m = c ?? (r === -1 ? 0 : r);
						if (c = [
							t.keyPath,
							f,
							m
						], t.replay !== null) a: {
							var h = t.replay;
							for (r = h.nodes, n = 0; n < r.length; n++) {
								var _ = r[n];
								if (m === _[1]) {
									if (_.length === 4) {
										if (f !== null && f !== _[0]) throw Error(i(490, _[0], f));
										var v = _[2];
										f = _[3], m = t.node, t.replay = {
											nodes: v,
											slots: f,
											pendingTasks: 1
										};
										try {
											if (oa(e, t, c, s, l, u), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
											t.replay.pendingTasks--;
										} catch (i) {
											if (typeof i == "object" && i && (i === Wr || typeof i.then == "function")) throw t.node === m ? t.replay = h : r.splice(n, 1), i;
											t.replay.pendingTasks--, l = Xi(t.componentStack), c = e, e = t.blockedBoundary, s = i, l = Zi(c, s, l), va(c, e, v, f, s, l);
										}
										t.replay = h;
									} else {
										if (s !== p) throw Error(i(490, "Suspense", Dr(s) || "Unknown"));
										b: {
											h = void 0, s = _[5], u = _[2], f = _[3], m = _[4] === null ? [] : _[4][2], _ = _[4] === null ? null : _[4][3];
											var y = t.keyPath, b = t.formatContext, x = t.row, S = t.replay, T = t.blockedBoundary, E = t.hoistableState, D = l.children, O = l.fallback, k = /* @__PURE__ */ new Set();
											l = 2 > t.formatContext.insertionMode ? Wi(e, t.row, k, Fe(), Fe()) : Wi(e, t.row, k, null, null), l.parentFlushed = !0, l.rootSegmentID = s, t.blockedBoundary = l, t.hoistableState = l.contentState, t.keyPath = c, t.formatContext = Be(e.resumableState, b), t.row = null, t.replay = {
												nodes: u,
												slots: f,
												pendingTasks: 1
											};
											try {
												if (ga(e, t, D, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
												if (t.replay.pendingTasks--, l.pendingTasks === 0 && l.status === 0) {
													l.status = 1, e.completedBoundaries.push(l);
													break b;
												}
											} catch (n) {
												l.status = 4, v = Xi(t.componentStack), h = Zi(e, n, v), l.errorDigest = h, t.replay.pendingTasks--, e.clientRenderedBoundaries.push(l);
											} finally {
												t.blockedBoundary = T, t.hoistableState = E, t.replay = S, t.keyPath = y, t.formatContext = b, t.row = x;
											}
											v = Ki(e, null, {
												nodes: m,
												slots: _,
												pendingTasks: 0
											}, O, -1, T, l.fallbackState, k, [
												c[0],
												"Suspense Fallback",
												c[2]
											], ze(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Yi(t.componentStack)), Ji(v), e.pingedTasks.push(v);
										}
									}
									r.splice(n, 1);
									break a;
								}
							}
						}
						else oa(e, t, c, s, l, u);
						return;
					case o: throw Error(i(257));
					case g:
						if (v = n._init, n = v(n._payload), e.status === 12) throw null;
						ca(e, t, n, r);
						return;
				}
				if (w(n)) {
					ua(e, t, n, r);
					return;
				}
				if ((v = C(n)) && (v = v.call(n))) {
					if (n = v.next(), !n.done) {
						l = [];
						do
							l.push(n.value), n = v.next();
						while (!n.done);
						ua(e, t, l, r);
					}
					return;
				}
				if (typeof n.then == "function") return t.thenableState = null, ca(e, t, wi(n), r);
				if (n.$$typeof === d) return ca(e, t, n._currentValue, r);
				throw r = Object.prototype.toString.call(n), Error(i(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r));
			}
			typeof n == "string" ? (r = t.blockedSegment, r !== null && (r.lastPushedText = He(r.chunks, n, e.renderState, r.lastPushedText))) : (typeof n == "number" || typeof n == "bigint") && (r = t.blockedSegment, r !== null && (r.lastPushedText = He(r.chunks, "" + n, e.renderState, r.lastPushedText)));
		}
	}
	function ua(e, t, n, r) {
		var a = t.keyPath;
		if (r !== -1 && (t.keyPath = [
			t.keyPath,
			"Fragment",
			r
		], t.replay !== null)) {
			for (var o = t.replay, s = o.nodes, c = 0; c < s.length; c++) {
				var l = s[c];
				if (l[1] === r) {
					r = l[2], l = l[3], t.replay = {
						nodes: r,
						slots: l,
						pendingTasks: 1
					};
					try {
						if (ua(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error(i(488));
						t.replay.pendingTasks--;
					} catch (i) {
						if (typeof i == "object" && i && (i === Wr || typeof i.then == "function")) throw i;
						t.replay.pendingTasks--, n = Xi(t.componentStack);
						var u = t.blockedBoundary, d = i;
						n = Zi(e, d, n), va(e, u, r, l, d, n);
					}
					t.replay = o, s.splice(c, 1);
					break;
				}
			}
			t.keyPath = a;
			return;
		}
		if (o = t.treeContext, s = n.length, t.replay !== null && (c = t.replay.slots, typeof c == "object" && c)) {
			for (r = 0; r < s; r++) l = n[r], t.treeContext = Rr(o, s, r), u = c[r], typeof u == "number" ? (sa(e, t, u, l, r), delete c[r]) : ga(e, t, l, r);
			t.treeContext = o, t.keyPath = a;
			return;
		}
		for (c = 0; c < s; c++) r = n[c], t.treeContext = Rr(o, s, c), ga(e, t, r, c);
		t.treeContext = o, t.keyPath = a;
	}
	function da(e, t, n) {
		if (n.status = 5, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error(i(486));
		var r = n.trackedFallbackNode, a = [], o = t.workingMap.get(e);
		return o === void 0 ? (n = [
			e[1],
			e[2],
			a,
			null,
			r,
			n.rootSegmentID
		], t.workingMap.set(e, n), Ha(n, e[0], t), n) : (o[4] = r, o[5] = n.rootSegmentID, o);
	}
	function fa(e, t, n, r) {
		r.status = 5;
		var a = n.keyPath, o = n.blockedBoundary;
		if (o === null) r.id = e.nextSegmentId++, t.rootSlots = r.id, e.completedRootSegment !== null && (e.completedRootSegment.status = 5);
		else {
			if (o !== null && o.status === 0) {
				var s = da(e, t, o);
				if (o.trackedContentKeyPath === a && n.childIndex === -1) {
					r.id === -1 && (r.id = r.parentFlushed ? o.rootSegmentID : e.nextSegmentId++), s[3] = r.id;
					return;
				}
			}
			if (r.id === -1 && (r.id = r.parentFlushed && o !== null ? o.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) a === null ? t.rootSlots = r.id : (n = t.workingMap.get(a), n === void 0 ? (n = [
				a[1],
				a[2],
				[],
				r.id
			], Ha(n, a[0], t)) : n[3] = r.id);
			else {
				if (a === null) {
					if (e = t.rootSlots, e === null) e = t.rootSlots = {};
					else if (typeof e == "number") throw Error(i(491));
				} else if (o = t.workingMap, s = o.get(a), s === void 0) e = {}, s = [
					a[1],
					a[2],
					[],
					e
				], o.set(a, s), Ha(s, a[0], t);
				else if (e = s[3], e === null) e = s[3] = {};
				else if (typeof e == "number") throw Error(i(491));
				e[n.childIndex] = r.id;
			}
		}
	}
	function pa(e, t) {
		e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
	}
	function ma(e, t, n) {
		return Ki(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function ha(e, t, n) {
		var r = t.blockedSegment, i = qi(e, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
		return r.children.push(i), r.lastPushedText = !1, Gi(e, n, t.node, t.childIndex, t.blockedBoundary, i, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack);
	}
	function ga(e, t, n, r) {
		var i = t.formatContext, a = t.context, o = t.keyPath, s = t.treeContext, c = t.componentStack, l = t.blockedSegment;
		if (l === null) {
			l = t.replay;
			try {
				return ca(e, t, n, r);
			} catch (u) {
				if (hi(), n = u === Wr ? qr() : u, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						r = u === Wr ? mi() : null, e = ma(e, t, r).ping, n.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = l, Fr(a);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						n = u === Wr ? mi() : null, n = ma(e, t, n), e.pingedTasks.push(n), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = l, Fr(a);
						return;
					}
				}
			}
		} else {
			var u = l.children.length, d = l.chunks.length;
			try {
				return ca(e, t, n, r);
			} catch (r) {
				if (hi(), l.children.length = u, l.chunks.length = d, n = r === Wr ? qr() : r, e.status !== 12 && typeof n == "object" && n) {
					if (typeof n.then == "function") {
						l = n, n = r === Wr ? mi() : null, e = ha(e, t, n).ping, l.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, Fr(a);
						return;
					}
					if (n.message === "Maximum call stack size exceeded") {
						l = r === Wr ? mi() : null, l = ha(e, t, l), e.pingedTasks.push(l), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, Fr(a);
						return;
					}
				}
			}
		}
		throw t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, Fr(a), n;
	}
	function _a(e) {
		var t = e.blockedBoundary, n = e.blockedSegment;
		n !== null && (n.status = 3, Ta(this, t, e.row, n));
	}
	function va(e, t, n, r, a, o) {
		for (var s = 0; s < n.length; s++) {
			var c = n[s];
			if (c.length === 4) va(e, t, c[2], c[3], a, o);
			else {
				c = c[5];
				var l = e, u = o, d = Wi(l, null, /* @__PURE__ */ new Set(), null, null);
				d.parentFlushed = !0, d.rootSegmentID = c, d.status = 4, d.errorDigest = u, d.parentFlushed && l.clientRenderedBoundaries.push(d);
			}
		}
		if (n.length = 0, r !== null) {
			if (t === null) throw Error(i(487));
			if (t.status !== 4 && (t.status = 4, t.errorDigest = o, t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof r == "object") for (var f in r) delete r[f];
		}
	}
	function ya(e, t, n) {
		var r = e.blockedBoundary, i = e.blockedSegment;
		if (i !== null) {
			if (i.status === 6) return;
			i.status = 3;
		}
		var a = Xi(e.componentStack);
		if (r === null) {
			if (t.status !== 13 && t.status !== 14) {
				if (r = e.replay, r === null) {
					t.trackedPostpones !== null && i !== null ? (r = t.trackedPostpones, Zi(t, n, a), fa(t, r, e, i), Ta(t, null, e.row, i)) : (Zi(t, n, a), Qi(t, n));
					return;
				}
				r.pendingTasks--, r.pendingTasks === 0 && 0 < r.nodes.length && (i = Zi(t, n, a), va(t, null, r.nodes, r.slots, n, i)), t.pendingRootTasks--, t.pendingRootTasks === 0 && xa(t);
			}
		} else {
			var o = t.trackedPostpones;
			if (r.status !== 4) {
				if (o !== null && i !== null) return Zi(t, n, a), fa(t, o, e, i), r.fallbackAbortableTasks.forEach(function(e) {
					return ya(e, t, n);
				}), r.fallbackAbortableTasks.clear(), Ta(t, r, e.row, i);
				r.status = 4, i = Zi(t, n, a), r.status = 4, r.errorDigest = i, pa(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r);
			}
			r.pendingTasks--, i = r.row, i !== null && --i.pendingTasks === 0 && $i(t, i), r.fallbackAbortableTasks.forEach(function(e) {
				return ya(e, t, n);
			}), r.fallbackAbortableTasks.clear();
		}
		e = e.row, e !== null && --e.pendingTasks === 0 && $i(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && Sa(t);
	}
	function ba(e, t) {
		try {
			var n = e.renderState, r = n.onHeaders;
			if (r) {
				var i = n.headers;
				if (i) {
					n.headers = null;
					var a = i.preconnects;
					if (i.fontPreloads && (a && (a += ", "), a += i.fontPreloads), i.highImagePreloads && (a && (a += ", "), a += i.highImagePreloads), !t) {
						var o = n.styles.values(), s = o.next();
						b: for (; 0 < i.remainingCapacity && !s.done; s = o.next()) for (var c = s.value.sheets.values(), l = c.next(); 0 < i.remainingCapacity && !l.done; l = c.next()) {
							var u = l.value, d = u.props, f = d.href, p = u.props, m = gr(p.href, "style", {
								crossOrigin: p.crossOrigin,
								integrity: p.integrity,
								nonce: p.nonce,
								type: p.type,
								fetchPriority: p.fetchPriority,
								referrerPolicy: p.referrerPolicy,
								media: p.media
							});
							if (0 <= (i.remainingCapacity -= m.length + 2)) n.resets.style[f] = ve, a && (a += ", "), a += m, n.resets.style[f] = typeof d.crossOrigin == "string" || typeof d.integrity == "string" ? [d.crossOrigin, d.integrity] : ve;
							else break b;
						}
					}
					r(a ? { Link: a } : {});
				}
			}
		} catch (t) {
			Zi(e, t, {});
		}
	}
	function xa(e) {
		e.trackedPostpones === null && ba(e, !0), e.trackedPostpones === null && ka(e), e.onShellError = Ur, e = e.onShellReady, e();
	}
	function Sa(e) {
		ba(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== 5), ka(e), e = e.onAllReady, e();
	}
	function Ca(e, t) {
		if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
			var n = t.children[0];
			n.id = t.id, n.parentFlushed = !0, n.status !== 1 && n.status !== 3 && n.status !== 4 || Ca(e, n);
		} else e.completedSegments.push(t);
	}
	function wa(e, t, n) {
		if (z !== null) {
			n = n.chunks;
			for (var r = 0, i = 0; i < n.length; i++) r += n[i].byteLength;
			t === null ? e.byteSize += r : t.byteSize += r;
		}
	}
	function Ta(e, t, n, r) {
		if (n !== null && (--n.pendingTasks === 0 ? $i(e, n) : n.together && ta(e, n)), e.allPendingTasks--, t === null) {
			if (r !== null && r.parentFlushed) {
				if (e.completedRootSegment !== null) throw Error(i(389));
				e.completedRootSegment = r;
			}
			e.pendingRootTasks--, e.pendingRootTasks === 0 && xa(e);
		} else if (t.pendingTasks--, t.status !== 4) if (t.pendingTasks === 0) {
			if (t.status === 0 && (t.status = 1), r !== null && r.parentFlushed && (r.status === 1 || r.status === 3) && Ca(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.status === 1) n = t.row, n !== null && Cr(n.hoistables, t.contentState), Fi(e, t) || (t.fallbackAbortableTasks.forEach(_a, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && $i(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && ka(e);
			else if (t.status === 5 && (t = t.row, t !== null)) {
				if (e.trackedPostpones !== null) {
					n = e.trackedPostpones;
					var a = t.next;
					if (a !== null && (r = a.boundaries, r !== null)) for (a.boundaries = null, a = 0; a < r.length; a++) {
						var o = r[a];
						da(e, n, o), Ta(e, o, null, null);
					}
				}
				--t.pendingTasks === 0 && $i(e, t);
			}
		} else r === null || !r.parentFlushed || r.status !== 1 && r.status !== 3 || (Ca(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && ta(e, t);
		e.allPendingTasks === 0 && Sa(e);
	}
	function Ea(e) {
		if (e.status !== 14 && e.status !== 13) {
			var t = kr, n = me.H;
			me.H = Ei;
			var r = me.A;
			me.A = Oi;
			var a = Hi;
			Hi = e;
			var o = Di;
			Di = e.resumableState;
			try {
				var s = e.pingedTasks, c;
				for (c = 0; c < s.length; c++) {
					var l = s[c], u = e, d = l.blockedSegment;
					if (d === null) {
						var f = u;
						if (l.replay.pendingTasks !== 0) {
							Fr(l.context);
							try {
								if (typeof l.replay.slots == "number" ? sa(f, l, l.replay.slots, l.node, l.childIndex) : la(f, l), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length) throw Error(i(488));
								l.replay.pendingTasks--, l.abortSet.delete(l), Ta(f, l.blockedBoundary, l.row, null);
							} catch (e) {
								hi();
								var p = e === Wr ? qr() : e;
								if (typeof p == "object" && p && typeof p.then == "function") {
									var m = l.ping;
									p.then(m, m), l.thenableState = e === Wr ? mi() : null;
								} else {
									l.replay.pendingTasks--, l.abortSet.delete(l);
									var h = Xi(l.componentStack);
									u = void 0;
									var g = f, _ = l.blockedBoundary, v = f.status === 12 ? f.fatalError : p, y = l.replay.nodes, b = l.replay.slots;
									u = Zi(g, v, h), va(g, _, y, b, v, u), f.pendingRootTasks--, f.pendingRootTasks === 0 && xa(f), f.allPendingTasks--, f.allPendingTasks === 0 && Sa(f);
								}
							}
						}
					} else if (f = void 0, g = d, g.status === 0) {
						g.status = 6, Fr(l.context);
						var x = g.children.length, S = g.chunks.length;
						try {
							la(u, l), g.lastPushedText && g.textEmbedded && g.chunks.push(Ve), l.abortSet.delete(l), g.status = 1, wa(u, l.blockedBoundary, g), Ta(u, l.blockedBoundary, l.row, g);
						} catch (e) {
							hi(), g.children.length = x, g.chunks.length = S;
							var C = e === Wr ? qr() : u.status === 12 ? u.fatalError : e;
							if (u.status === 12 && u.trackedPostpones !== null) {
								var w = u.trackedPostpones, T = Xi(l.componentStack);
								l.abortSet.delete(l), Zi(u, C, T), fa(u, w, l, g), Ta(u, l.blockedBoundary, l.row, g);
							} else if (typeof C == "object" && C && typeof C.then == "function") {
								g.status = 0, l.thenableState = e === Wr ? mi() : null;
								var E = l.ping;
								C.then(E, E);
							} else {
								var D = Xi(l.componentStack);
								l.abortSet.delete(l), g.status = 4;
								var O = l.blockedBoundary, k = l.row;
								if (k !== null && --k.pendingTasks === 0 && $i(u, k), u.allPendingTasks--, f = Zi(u, C, D), O === null) Qi(u, C);
								else if (O.pendingTasks--, O.status !== 4) {
									O.status = 4, O.errorDigest = f, pa(u, O);
									var A = O.row;
									A !== null && --A.pendingTasks === 0 && $i(u, A), O.parentFlushed && u.clientRenderedBoundaries.push(O), u.pendingRootTasks === 0 && u.trackedPostpones === null && O.contentPreamble !== null && ka(u);
								}
								u.allPendingTasks === 0 && Sa(u);
							}
						}
					}
				}
				s.splice(0, c), e.destination !== null && La(e, e.destination);
			} catch (t) {
				Zi(e, t, {}), Qi(e, t);
			} finally {
				Di = o, me.H = n, me.A = r, n === Ei && Fr(t), Hi = a;
			}
		}
	}
	function Da(e, t, n) {
		t.preambleChildren.length && n.push(t.preambleChildren);
		for (var r = !1, i = 0; i < t.children.length; i++) r = Oa(e, t.children[i], n) || r;
		return r;
	}
	function Oa(e, t, n) {
		var r = t.boundary;
		if (r === null) return Da(e, t, n);
		var a = r.contentPreamble, o = r.fallbackPreamble;
		if (a === null || o === null) return !1;
		switch (r.status) {
			case 1:
				if (kt(e.renderState, a), e.byteSize += r.byteSize, t = r.completedSegments[0], !t) throw Error(i(391));
				return Da(e, t, n);
			case 5: if (e.trackedPostpones !== null) return !0;
			case 4: if (t.status === 1) return kt(e.renderState, o), Da(e, t, n);
			default: return !0;
		}
	}
	function ka(e) {
		if (e.completedRootSegment && e.completedPreambleSegments === null) {
			var t = [], n = e.byteSize, r = Oa(e, e.completedRootSegment, t), i = e.renderState.preamble;
			!1 === r || i.headChunks && i.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
		}
	}
	function Aa(e, t, n, r) {
		switch (n.parentFlushed = !0, n.status) {
			case 0: n.id = e.nextSegmentId++;
			case 5: return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, P(t, Mt), P(t, e.placeholderPrefix), e = L(r.toString(16)), P(t, e), F(t, Nt);
			case 1:
				n.status = 2;
				var a = !0, o = n.chunks, s = 0;
				n = n.children;
				for (var c = 0; c < n.length; c++) {
					for (a = n[c]; s < a.index; s++) P(t, o[s]);
					a = Ma(e, t, a, r);
				}
				for (; s < o.length - 1; s++) P(t, o[s]);
				return s < o.length && (a = F(t, o[s])), a;
			case 3: return !0;
			default: throw Error(i(390));
		}
	}
	var ja = 0;
	function Ma(e, t, n, r) {
		var a = n.boundary;
		if (a === null) return Aa(e, t, n, r);
		if (a.parentFlushed = !0, a.status === 4) {
			var o = a.row;
			o !== null && --o.pendingTasks === 0 && $i(e, o), a = a.errorDigest, F(t, zt), P(t, Bt), a && (P(t, Ht), P(t, L(V(a))), P(t, Vt)), F(t, Ut), Aa(e, t, n, r);
		} else if (a.status !== 1) a.status === 0 && (a.rootSegmentID = e.nextSegmentId++), 0 < a.completedSegments.length && e.partialBoundaries.push(a), Wt(t, e.renderState, a.rootSegmentID), r && Cr(r, a.fallbackState), Aa(e, t, n, r);
		else if (!Ia && Fi(e, a) && (ja + a.byteSize > e.progressiveChunkSize || wr(a.contentState))) a.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(a), Wt(t, e.renderState, a.rootSegmentID), Aa(e, t, n, r);
		else {
			if (ja += a.byteSize, r && Cr(r, a.contentState), n = a.row, n !== null && Fi(e, a) && --n.pendingTasks === 0 && $i(e, n), F(t, It), n = a.completedSegments, n.length !== 1) throw Error(i(391));
			Ma(e, t, n[0], r);
		}
		return F(t, Y);
	}
	function Na(e, t, n, r) {
		return ln(t, e.renderState, n.parentFormatContext, n.id), Ma(e, t, n, r), un(t, n.parentFormatContext);
	}
	function Pa(e, t, n) {
		ja = n.byteSize;
		for (var r = n.completedSegments, i = 0; i < r.length; i++) Fa(e, t, n, r[i]);
		r.length = 0, r = n.row, r !== null && Fi(e, n) && --r.pendingTasks === 0 && $i(e, r), Vn(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = n.rootSegmentID, n = n.contentState;
		var a = e.stylesToHoist;
		return e.stylesToHoist = !1, P(t, e.startInlineScript), P(t, J), a ? (!(r.instructions & 4) && (r.instructions |= 4, P(t, Cn)), !(r.instructions & 2) && (r.instructions |= 2, P(t, hn)), r.instructions & 8 ? P(t, vn) : (r.instructions |= 8, P(t, _n))) : (!(r.instructions & 2) && (r.instructions |= 2, P(t, hn)), P(t, gn)), r = L(i.toString(16)), P(t, e.boundaryPrefix), P(t, r), P(t, yn), P(t, e.segmentPrefix), P(t, r), a ? (P(t, bn), ar(t, n)) : P(t, xn), n = F(t, Sn), At(t, e) && n;
	}
	function Fa(e, t, n, r) {
		if (r.status === 2) return !0;
		var a = n.contentState, o = r.id;
		if (o === -1) {
			if ((r.id = n.rootSegmentID) === -1) throw Error(i(392));
			return Na(e, t, r, a);
		}
		return o === n.rootSegmentID ? Na(e, t, r, a) : (Na(e, t, r, a), n = e.resumableState, e = e.renderState, P(t, e.startInlineScript), P(t, J), n.instructions & 1 ? P(t, fn) : (n.instructions |= 1, P(t, dn)), P(t, e.segmentPrefix), o = L(o.toString(16)), P(t, o), P(t, pn), P(t, e.placeholderPrefix), P(t, o), t = F(t, mn), t);
	}
	var Ia = !1;
	function La(e, t) {
		M = new Uint8Array(2048), N = 0;
		try {
			if (!(0 < e.pendingRootTasks)) {
				var n, r = e.completedRootSegment;
				if (r !== null) {
					if (r.status === 5) return;
					var i = e.completedPreambleSegments;
					if (i === null) return;
					ja = e.byteSize;
					var a = e.resumableState, o = e.renderState, s = o.preamble, c = s.htmlChunks, l = s.headChunks, u;
					if (c) {
						for (u = 0; u < c.length; u++) P(t, c[u]);
						if (l) for (u = 0; u < l.length; u++) P(t, l[u]);
						else P(t, wt("head")), P(t, J);
					} else if (l) for (u = 0; u < l.length; u++) P(t, l[u]);
					var d = o.charsetChunks;
					for (u = 0; u < d.length; u++) P(t, d[u]);
					d.length = 0, o.preconnects.forEach(Hn, t), o.preconnects.clear();
					var f = o.viewportChunks;
					for (u = 0; u < f.length; u++) P(t, f[u]);
					f.length = 0, o.fontPreloads.forEach(Hn, t), o.fontPreloads.clear(), o.highImagePreloads.forEach(Hn, t), o.highImagePreloads.clear(), ye = o, o.styles.forEach(Xn, t), ye = null;
					var p = o.importMapChunks;
					for (u = 0; u < p.length; u++) P(t, p[u]);
					p.length = 0, o.bootstrapScripts.forEach(Hn, t), o.scripts.forEach(Hn, t), o.scripts.clear(), o.bulkPreloads.forEach(Hn, t), o.bulkPreloads.clear(), c || l || (a.instructions |= 32);
					var m = o.hoistableChunks;
					for (u = 0; u < m.length; u++) P(t, m[u]);
					for (a = m.length = 0; a < i.length; a++) {
						var h = i[a];
						for (o = 0; o < h.length; o++) Ma(e, t, h[o], null);
					}
					var g = e.renderState.preamble, _ = g.headChunks;
					(g.htmlChunks || _) && P(t, Ot("head"));
					var v = g.bodyChunks;
					if (v) for (i = 0; i < v.length; i++) P(t, v[i]);
					Ma(e, t, r, null), e.completedRootSegment = null;
					var y = e.renderState;
					if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
						var b = e.resumableState;
						if (!(b.instructions & 64)) {
							if (b.instructions |= 64, P(t, y.startInlineScript), !(b.instructions & 32)) {
								b.instructions |= 32;
								var x = "_" + b.idPrefix + "R_";
								P(t, $n), P(t, L(V(x))), P(t, W);
							}
							P(t, J), P(t, jt), F(t, xe);
						}
					}
					At(t, y);
				}
				var S = e.renderState;
				r = 0;
				var C = S.viewportChunks;
				for (r = 0; r < C.length; r++) P(t, C[r]);
				C.length = 0, S.preconnects.forEach(Hn, t), S.preconnects.clear(), S.fontPreloads.forEach(Hn, t), S.fontPreloads.clear(), S.highImagePreloads.forEach(Hn, t), S.highImagePreloads.clear(), S.styles.forEach(Qn, t), S.scripts.forEach(Hn, t), S.scripts.clear(), S.bulkPreloads.forEach(Hn, t), S.bulkPreloads.clear();
				var w = S.hoistableChunks;
				for (r = 0; r < w.length; r++) P(t, w[r]);
				w.length = 0;
				var T = e.clientRenderedBoundaries;
				for (n = 0; n < T.length; n++) {
					var E = T[n];
					S = t;
					var D = e.resumableState, O = e.renderState, k = E.rootSegmentID, A = E.errorDigest;
					P(S, O.startInlineScript), P(S, J), D.instructions & 4 ? P(S, Tn) : (D.instructions |= 4, P(S, wn)), P(S, O.boundaryPrefix), P(S, L(k.toString(16))), P(S, En), A && (P(S, Dn), P(S, L(An(A || ""))));
					var j = F(S, On);
					if (!j) {
						e.destination = null, n++, T.splice(0, n);
						return;
					}
				}
				T.splice(0, n);
				var I = e.completedBoundaries;
				for (n = 0; n < I.length; n++) if (!Pa(e, t, I[n])) {
					e.destination = null, n++, I.splice(0, n);
					return;
				}
				I.splice(0, n), ee(t), M = new Uint8Array(2048), N = 0, Ia = !0;
				var R = e.partialBoundaries;
				for (n = 0; n < R.length; n++) {
					var z = R[n];
					a: {
						T = e, E = t, ja = z.byteSize;
						var te = z.completedSegments;
						for (j = 0; j < te.length; j++) if (!Fa(T, E, z, te[j])) {
							j++, te.splice(0, j);
							var ne = !1;
							break a;
						}
						te.splice(0, j);
						var B = z.row;
						B !== null && B.together && z.pendingTasks === 1 && (B.pendingTasks === 1 ? ea(T, B, B.hoistables) : B.pendingTasks--), ne = Vn(E, z.contentState, T.renderState);
					}
					if (!ne) {
						e.destination = null, n++, R.splice(0, n);
						return;
					}
				}
				R.splice(0, n), Ia = !1;
				var re = e.completedBoundaries;
				for (n = 0; n < re.length; n++) if (!Pa(e, t, re[n])) {
					e.destination = null, n++, re.splice(0, n);
					return;
				}
				re.splice(0, n);
			}
		} finally {
			Ia = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, n = e.resumableState, n.hasBody && P(t, Ot("body")), n.hasHtml && P(t, Ot("html")), ee(t), e.status = 14, t.close(), e.destination = null) : ee(t);
		}
	}
	function Ra(e) {
		e.flushScheduled = e.destination !== null, j(function() {
			return Ea(e);
		}), O(function() {
			e.status === 10 && (e.status = 11), e.trackedPostpones === null && ba(e, e.pendingRootTasks === 0);
		});
	}
	function za(e) {
		!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, O(function() {
			var t = e.destination;
			t ? La(e, t) : e.flushScheduled = !1;
		}));
	}
	function Ba(e, t) {
		if (e.status === 13) e.status = 14, te(t, e.fatalError);
		else if (e.status !== 14 && e.destination === null) {
			e.destination = t;
			try {
				La(e, t);
			} catch (t) {
				Zi(e, t, {}), Qi(e, t);
			}
		}
	}
	function Va(e, t) {
		(e.status === 11 || e.status === 10) && (e.status = 12);
		try {
			var n = e.abortableTasks;
			if (0 < n.size) {
				var r = t === void 0 ? Error(i(432)) : typeof t == "object" && t && typeof t.then == "function" ? Error(i(530)) : t;
				e.fatalError = r, n.forEach(function(t) {
					return ya(t, e, r);
				}), n.clear();
			}
			e.destination !== null && La(e, e.destination);
		} catch (t) {
			Zi(e, t, {}), Qi(e, t);
		}
	}
	function Ha(e, t, n) {
		if (t === null) n.rootNodes.push(e);
		else {
			var r = n.workingMap, i = r.get(t);
			i === void 0 && (i = [
				t[1],
				t[2],
				[],
				null
			], r.set(t, i), Ha(i, t[0], n)), i[2].push(e);
		}
	}
	function Ua(e) {
		var t = e.trackedPostpones;
		if (t === null || t.rootNodes.length === 0 && t.rootSlots === null) return e.trackedPostpones = null;
		if (e.completedRootSegment === null || e.completedRootSegment.status !== 5 && e.completedPreambleSegments !== null) {
			var n = e.nextSegmentId, r = t.rootSlots, i = e.resumableState;
			i.bootstrapScriptContent = void 0, i.bootstrapScripts = void 0, i.bootstrapModules = void 0;
		} else {
			n = 0, r = -1, i = e.resumableState;
			var a = e.renderState;
			i.nextFormID = 0, i.hasBody = !1, i.hasHtml = !1, i.unknownResources = { font: a.resets.font }, i.dnsResources = a.resets.dns, i.connectResources = a.resets.connect, i.imageResources = a.resets.image, i.styleResources = a.resets.style, i.scriptResources = {}, i.moduleUnknownResources = {}, i.moduleScriptResources = {}, i.instructions = 0;
		}
		return {
			nextSegmentId: n,
			rootFormatContext: e.rootFormatContext,
			progressiveChunkSize: e.progressiveChunkSize,
			resumableState: e.resumableState,
			replayNodes: t.rootNodes,
			replaySlots: r
		};
	}
	function Wa() {
		var e = n.version;
		if (e !== "19.2.4") throw Error(i(527, e, "19.2.4"));
	}
	Wa(), Wa(), t.prerender = function(e, t) {
		return new Promise(function(n, r) {
			var i = t ? t.onHeaders : void 0, a;
			i && (a = function(e) {
				i(new Headers(e));
			});
			var o = Pe(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), s = zi(e, o, Ne(o, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, a, t ? t.maxHeadersLength : void 0), Ie(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ba(s, e);
					},
					cancel: function(e) {
						s.destination = null, Va(s, e);
					}
				}, { highWaterMark: 0 });
				e = {
					postponed: Ua(s),
					prelude: e
				}, n(e);
			}, void 0, void 0, r, t ? t.onPostpone : void 0);
			if (t && t.signal) {
				var c = t.signal;
				if (c.aborted) Va(s, c.reason);
				else {
					var l = function() {
						Va(s, c.reason), c.removeEventListener("abort", l);
					};
					c.addEventListener("abort", l);
				}
			}
			Ra(s);
		});
	}, t.renderToReadableStream = function(e, t) {
		return new Promise(function(n, r) {
			var i, a, o = new Promise(function(e, t) {
				a = e, i = t;
			}), s = t ? t.onHeaders : void 0, c;
			s && (c = function(e) {
				s(new Headers(e));
			});
			var l = Pe(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), u = Ri(e, l, Ne(l, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, c, t ? t.maxHeadersLength : void 0), Ie(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, a, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ba(u, e);
					},
					cancel: function(e) {
						u.destination = null, Va(u, e);
					}
				}, { highWaterMark: 0 });
				e.allReady = o, n(e);
			}, function(e) {
				o.catch(function() {}), r(e);
			}, i, t ? t.onPostpone : void 0, t ? t.formState : void 0);
			if (t && t.signal) {
				var d = t.signal;
				if (d.aborted) Va(u, d.reason);
				else {
					var f = function() {
						Va(u, d.reason), d.removeEventListener("abort", f);
					};
					d.addEventListener("abort", f);
				}
			}
			Ra(u);
		});
	}, t.resume = function(e, t, n) {
		return new Promise(function(r, i) {
			var a, o, s = new Promise(function(e, t) {
				o = e, a = t;
			}), c = Bi(e, t, Ne(t.resumableState, n ? n.nonce : void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, o, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ba(c, e);
					},
					cancel: function(e) {
						c.destination = null, Va(c, e);
					}
				}, { highWaterMark: 0 });
				e.allReady = s, r(e);
			}, function(e) {
				s.catch(function() {}), i(e);
			}, a, n ? n.onPostpone : void 0);
			if (n && n.signal) {
				var l = n.signal;
				if (l.aborted) Va(c, l.reason);
				else {
					var u = function() {
						Va(c, l.reason), l.removeEventListener("abort", u);
					};
					l.addEventListener("abort", u);
				}
			}
			Ra(c);
		});
	}, t.resumeAndPrerender = function(e, t, n) {
		return new Promise(function(r, i) {
			var a = Vi(e, t, Ne(t.resumableState, void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, function() {
				var e = new ReadableStream({
					type: "bytes",
					pull: function(e) {
						Ba(a, e);
					},
					cancel: function(e) {
						a.destination = null, Va(a, e);
					}
				}, { highWaterMark: 0 });
				e = {
					postponed: Ua(a),
					prelude: e
				}, r(e);
			}, void 0, void 0, i, n ? n.onPostpone : void 0);
			if (n && n.signal) {
				var o = n.signal;
				if (o.aborted) Va(a, o.reason);
				else {
					var s = function() {
						Va(a, o.reason), o.removeEventListener("abort", s);
					};
					o.addEventListener("abort", s);
				}
			}
			Ra(a);
		});
	}, t.version = "19.2.4";
})), i = /* @__PURE__ */ t(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t, n, r) {
			return "" + t + (n === "s" ? "\\73 " : "\\53 ") + r;
		}
		function r(e, t, n, r) {
			return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = qn && e[qn] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e) {
			return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
		}
		function o(e) {
			var t = JSON.stringify(e);
			return "\"" + e + "\"" === t ? e : t;
		}
		function s(e) {
			switch (typeof e) {
				case "string": return JSON.stringify(10 >= e.length ? e : e.slice(0, 10) + "...");
				case "object": return Jn(e) ? "[...]" : e !== null && e.$$typeof === Zn ? "client" : (e = a(e), e === "Object" ? "{...}" : e);
				case "function": return e.$$typeof === Zn ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
				default: return String(e);
			}
		}
		function c(e) {
			if (typeof e == "string") return e;
			switch (e) {
				case Rn: return "Suspense";
				case zn: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case Ln: return c(e.render);
				case Bn: return c(e.type);
				case Vn:
					var t = e._payload;
					e = e._init;
					try {
						return c(e(t));
					} catch {}
			}
			return "";
		}
		function l(e, t) {
			var n = a(e);
			if (n !== "Object" && n !== "Array") return n;
			var r = -1, i = 0;
			if (Jn(e)) if (Xn.has(e)) {
				var u = Xn.get(e);
				n = "<" + c(u) + ">";
				for (var d = 0; d < e.length; d++) {
					var f = e[d];
					f = typeof f == "string" ? f : typeof f == "object" && f ? "{" + l(f) + "}" : "{" + s(f) + "}", "" + d === t ? (r = n.length, i = f.length, n += f) : n = 15 > f.length && 40 > n.length + f.length ? n + f : n + "{...}";
				}
				n += "</" + c(u) + ">";
			} else {
				for (n = "[", u = 0; u < e.length; u++) 0 < u && (n += ", "), d = e[u], d = typeof d == "object" && d ? l(d) : s(d), "" + u === t ? (r = n.length, i = d.length, n += d) : n = 10 > d.length && 40 > n.length + d.length ? n + d : n + "...";
				n += "]";
			}
			else if (e.$$typeof === An) n = "<" + c(e.type) + "/>";
			else {
				if (e.$$typeof === Zn) return "client";
				if (Yn.has(e)) {
					for (n = Yn.get(e), n = "<" + (c(n) || "..."), u = Object.keys(e), d = 0; d < u.length; d++) {
						n += " ", f = u[d], n += o(f) + "=";
						var p = e[f], m = f === t && typeof p == "object" && p ? l(p) : s(p);
						typeof p != "string" && (m = "{" + m + "}"), f === t ? (r = n.length, i = m.length, n += m) : n = 10 > m.length && 40 > n.length + m.length ? n + m : n + "...";
					}
					n += ">";
				} else {
					for (n = "{", u = Object.keys(e), d = 0; d < u.length; d++) 0 < d && (n += ", "), f = u[d], n += o(f) + ": ", p = e[f], p = typeof p == "object" && p ? l(p) : s(p), f === t ? (r = n.length, i = p.length, n += p) : n = 10 > p.length && 40 > n.length + p.length ? n + p : n + "...";
					n += "}";
				}
			}
			return t === void 0 ? n : -1 < r && 0 < i ? (e = " ".repeat(r) + "^".repeat(i), "\n  " + n + "\n  " + e) : "\n  " + n;
		}
		function u(e, t) {
			var n = e.length & 3, r = e.length - n, i = t;
			for (t = 0; t < r;) {
				var a = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
				++t, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, i = 5 * (i & 65535) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (i & 65535) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
			}
			switch (a = 0, n) {
				case 3: a ^= (e.charCodeAt(t + 2) & 255) << 16;
				case 2: a ^= (e.charCodeAt(t + 1) & 255) << 8;
				case 1: a ^= e.charCodeAt(t) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, i ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
			}
			return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (i & 65535) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (i & 65535) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^ i >>> 16) >>> 0;
		}
		function d(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function f(e) {
			try {
				return p(e), !1;
			} catch {
				return !0;
			}
		}
		function p(e) {
			return "" + e;
		}
		function m(e, t) {
			if (f(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), p(e);
		}
		function h(e, t) {
			if (f(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), p(e);
		}
		function g(e) {
			if (f(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", d(e)), p(e);
		}
		function _(e) {
			return $n.call(nr, e) ? !0 : $n.call(tr, e) ? !1 : er.test(e) ? nr[e] = !0 : (tr[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function v(e, t) {
			ar[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function y(e, t) {
			if ($n.call(sr, t) && sr[t]) return !0;
			if (lr.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = or.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), sr[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), sr[t] = !0;
			}
			if (cr.test(t)) {
				if (e = t.toLowerCase(), e = or.hasOwnProperty(e) ? e : null, e == null) return sr[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), sr[t] = !0);
			}
			return !0;
		}
		function b(e, t) {
			var n = [], r;
			for (r in t) y(e, r) || n.push(r);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function x(e, t, n, r) {
			if ($n.call(fr, t) && fr[t]) return !0;
			var i = t.toLowerCase();
			if (i === "onfocusin" || i === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), fr[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (r != null) {
				if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (r = e.hasOwnProperty(i) ? e[i] : null, r != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), fr[t] = !0;
				if (pr.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), fr[t] = !0;
			} else if (pr.test(t)) return mr.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), fr[t] = !0;
			if (hr.test(t) || gr.test(t)) return !0;
			if (i === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), fr[t] = !0;
			if (i === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), fr[t] = !0;
			if (i === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), fr[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), fr[t] = !0;
			if (dr.hasOwnProperty(i)) {
				if (i = dr[i], i !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, i), fr[t] = !0;
			} else if (t !== i) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), fr[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return i = t.toLowerCase().slice(0, 5), i === "data-" || i === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), fr[t] = !0);
				}
				case "function":
				case "symbol": return fr[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), fr[t] = !0;
				}
			}
			return !0;
		}
		function S(e, t, n) {
			var r = [], i;
			for (i in t) x(e, i, t[i], n) || r.push(i);
			t = r.map(function(e) {
				return "`" + e + "`";
			}).join(", "), r.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < r.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function C(e) {
			return e.replace(yr, function(e, t) {
				return t.toUpperCase();
			});
		}
		function w(e) {
			if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
			g(e), e = "" + e;
			var t = Tr.exec(e);
			if (t) {
				var n = "", r, i = 0;
				for (r = t.index; r < e.length; r++) {
					switch (e.charCodeAt(r)) {
						case 34:
							t = "&quot;";
							break;
						case 38:
							t = "&amp;";
							break;
						case 39:
							t = "&#x27;";
							break;
						case 60:
							t = "&lt;";
							break;
						case 62:
							t = "&gt;";
							break;
						default: continue;
					}
					i !== r && (n += e.slice(i, r)), i = r + 1, n += t;
				}
				e = i === r ? n : n + e.slice(i, r);
			}
			return e;
		}
		function T(e) {
			return Or.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function E(e) {
			return g(e), ("" + e).replace(Wr, r);
		}
		function D(e, t, n, r, i) {
			return {
				idPrefix: e === void 0 ? "" : e,
				nextFormID: 0,
				streamingFormat: 0,
				bootstrapScriptContent: n,
				bootstrapScripts: r,
				bootstrapModules: i,
				instructions: Nr,
				hasBody: !1,
				hasHtml: !1,
				unknownResources: {},
				dnsResources: {},
				connectResources: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				imageResources: {},
				styleResources: {},
				scriptResources: {},
				moduleUnknownResources: {},
				moduleScriptResources: {}
			};
		}
		function O(e, t, n, r) {
			return {
				insertionMode: e,
				selectedValue: t,
				tagScope: n,
				viewTransition: r
			};
		}
		function k(e, t, n) {
			var r = e.tagScope & -25;
			switch (t) {
				case "noscript": return O(Jr, null, r | 1, null);
				case "select": return O(Jr, n.value == null ? n.defaultValue : n.value, r, null);
				case "svg": return O(Xr, null, r, null);
				case "picture": return O(Jr, null, r | 2, null);
				case "math": return O(Zr, null, r, null);
				case "foreignObject": return O(Jr, null, r, null);
				case "table": return O(Qr, null, r, null);
				case "thead":
				case "tbody":
				case "tfoot": return O($r, null, r, null);
				case "colgroup": return O(ti, null, r, null);
				case "tr": return O(ei, null, r, null);
				case "head":
					if (e.insertionMode < Jr) return O(Yr, null, r, null);
					break;
				case "html": if (e.insertionMode === Kr) return O(qr, null, r, null);
			}
			return e.insertionMode >= Qr || e.insertionMode < Jr ? O(Jr, null, r, null) : e.tagScope === r ? e : O(e.insertionMode, e.selectedValue, r, null);
		}
		function A(e) {
			return e === null ? null : {
				update: e.update,
				enter: "none",
				exit: "none",
				share: e.update,
				name: e.autoName,
				autoName: e.autoName,
				nameIdx: 0
			};
		}
		function j(e, t) {
			return t.tagScope & 32 && (e.instructions |= 128), O(t.insertionMode, t.selectedValue, t.tagScope | 12, A(t.viewTransition));
		}
		function M(e, t) {
			e = A(t.viewTransition);
			var n = t.tagScope | 16;
			return e !== null && e.share !== "none" && (n |= 64), O(t.insertionMode, t.selectedValue, n, e);
		}
		function N(e, t) {
			if (typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			var n = !0, r;
			for (r in t) if ($n.call(t, r)) {
				var i = t[r];
				if (i != null && typeof i != "boolean" && i !== "") {
					if (r.indexOf("--") === 0) {
						var a = w(r);
						h(i, r), i = w(("" + i).trim());
					} else {
						a = r;
						var o = i;
						if (-1 < a.indexOf("-")) {
							var s = a;
							xr.hasOwnProperty(s) && xr[s] || (xr[s] = !0, console.error("Unsupported style property %s. Did you mean %s?", s, C(s.replace(vr, "ms-"))));
						} else if (_r.test(a)) s = a, xr.hasOwnProperty(s) && xr[s] || (xr[s] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
						else if (br.test(o)) {
							s = a;
							var c = o;
							Sr.hasOwnProperty(c) && Sr[c] || (Sr[c] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", s, c.replace(br, "")));
						}
						typeof o == "number" && (isNaN(o) ? Cr || (Cr = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", a)) : isFinite(o) || wr || (wr = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", a))), a = r, o = ni.get(a), o === void 0 ? (o = w(a.replace(Er, "-$1").toLowerCase().replace(Dr, "-ms-")), ni.set(a, o), a = o) : a = o, typeof i == "number" ? i = i === 0 || rr.has(r) ? "" + i : i + "px" : (h(i, r), i = w(("" + i).trim()));
					}
					n ? (n = !1, e.push(ri, a, ii, i)) : e.push(ai, a, ii, i);
				}
			}
			n || e.push(ci);
		}
		function P(e, t, n) {
			n && typeof n != "function" && typeof n != "symbol" && e.push(oi, t, li);
		}
		function F(e, t, n) {
			typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(oi, t, si, w(n), ci);
		}
		function ee(e, t) {
			this.push("<input type=\"hidden\""), I(e), F(this, "name", t), F(this, "value", e), this.push(fi);
		}
		function I(e) {
			if (typeof e != "string") throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
		}
		function L(e, t) {
			if (typeof t.$$FORM_ACTION == "function") {
				var n = e.nextFormID++;
				e = e.idPrefix + n;
				try {
					var r = t.$$FORM_ACTION(e);
					return r && r.data?.forEach(I), r;
				} catch (e) {
					if (typeof e == "object" && e && typeof e.then == "function") throw e;
					console.error("Failed to serialize an action for progressive enhancement:\n%s", e);
				}
			}
			return null;
		}
		function R(e, t, n, r, i, a, o, s) {
			var c = null;
			if (typeof r == "function") {
				s === null || xi || (xi = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), i === null && a === null || Ci || (Ci = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), o === null || Si || (Si = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
				var l = L(t, r);
				l === null ? (e.push(oi, "formAction", si, ui, ci), o = a = i = r = s = null, re(t, n)) : (s = l.name, r = l.action || "", i = l.encType, a = l.method, o = l.target, c = l.data);
			}
			return s != null && z(e, "name", s), r != null && z(e, "formAction", r), i != null && z(e, "formEncType", i), a != null && z(e, "formMethod", a), o != null && z(e, "formTarget", o), c;
		}
		function z(e, t, n) {
			switch (t) {
				case "className":
					F(e, "class", n);
					break;
				case "tabIndex":
					F(e, "tabindex", n);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					F(e, t, n);
					break;
				case "style":
					N(e, n);
					break;
				case "src":
				case "href": if (n === "") {
					console.error(t === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t);
					break;
				}
				case "action":
				case "formAction":
					if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					m(n, t), n = T("" + n), e.push(oi, t, si, w(n), ci);
					break;
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "ref": break;
				case "autoFocus":
				case "multiple":
				case "muted":
					P(e, t.toLowerCase(), n);
					break;
				case "xlinkHref":
					if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					m(n, t), n = T("" + n), e.push(oi, "xlink:href", si, w(n), ci);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					typeof n != "function" && typeof n != "symbol" && e.push(oi, t, si, w(n), ci);
					break;
				case "inert": n !== "" || Gr[t] || (Gr[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					n && typeof n != "function" && typeof n != "symbol" && e.push(oi, t, li);
					break;
				case "capture":
				case "download":
					!0 === n ? e.push(oi, t, li) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(oi, t, si, w(n), ci);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(oi, t, si, w(n), ci);
					break;
				case "rowSpan":
				case "start":
					typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(oi, t, si, w(n), ci);
					break;
				case "xlinkActuate":
					F(e, "xlink:actuate", n);
					break;
				case "xlinkArcrole":
					F(e, "xlink:arcrole", n);
					break;
				case "xlinkRole":
					F(e, "xlink:role", n);
					break;
				case "xlinkShow":
					F(e, "xlink:show", n);
					break;
				case "xlinkTitle":
					F(e, "xlink:title", n);
					break;
				case "xlinkType":
					F(e, "xlink:type", n);
					break;
				case "xmlBase":
					F(e, "xml:base", n);
					break;
				case "xmlLang":
					F(e, "xml:lang", n);
					break;
				case "xmlSpace":
					F(e, "xml:space", n);
					break;
				default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = ir.get(t) || t, _(t))) {
					switch (typeof n) {
						case "function":
						case "symbol": return;
						case "boolean":
							var r = t.toLowerCase().slice(0, 5);
							if (r !== "data-" && r !== "aria-") return;
					}
					e.push(oi, t, si, w(n), ci);
				}
			}
		}
		function te(e, t, n) {
			if (t != null) {
				if (n != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
				if (typeof t != "object" || !("__html" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
				t = t.__html, t != null && (g(t), e.push("" + t));
			}
		}
		function ne(e, t) {
			var n = e[t];
			n != null && (n = Jn(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t));
		}
		function B(e) {
			var t = "";
			return On.Children.forEach(e, function(e) {
				e != null && (t += e, _i || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || (_i = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
			}), t;
		}
		function re(e, t) {
			if ((e.instructions & 16) === Nr) {
				e.instructions |= 16;
				var n = t.preamble, r = t.bootstrapChunks;
				(n.htmlChunks || n.headChunks) && r.length === 0 ? (r.push(t.startInlineScript), Oe(r, e), r.push(di, wi, Ur)) : r.unshift(t.startInlineScript, di, wi, Ur);
			}
		}
		function ie(e, t) {
			for (var n in e.push(ue("link")), t) if ($n.call(t, n)) {
				var r = t[n];
				if (r != null) switch (n) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: z(e, n, r);
				}
			}
			return e.push(fi), null;
		}
		function ae(e) {
			return g(e), ("" + e).replace(Ti, n);
		}
		function oe(e, t, n) {
			for (var r in e.push(ue(n)), t) if ($n.call(t, r)) {
				var i = t[r];
				if (i != null) switch (r) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: z(e, r, i);
				}
			}
			return e.push(fi), null;
		}
		function se(e, t) {
			e.push(ue("title"));
			var n = null, r = null, i;
			for (i in t) if ($n.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: z(e, i, a);
				}
			}
			return e.push(di), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(w("" + t)), te(e, r, n), e.push(fe("title")), null;
		}
		function ce(e, t) {
			e.push(ue("script"));
			var n = null, r = null, i;
			for (i in t) if ($n.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: z(e, i, a);
				}
			}
			return e.push(di), n != null && typeof n != "string" && (t = typeof n == "number" ? "a number for children" : Array.isArray(n) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t)), te(e, r, n), typeof n == "string" && e.push(E(n)), e.push(fe("script")), null;
		}
		function le(e, t, n) {
			e.push(ue(n));
			var r = n = null, i;
			for (i in t) if ($n.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: z(e, i, a);
				}
			}
			return e.push(di), te(e, r, n), n;
		}
		function V(e, t, n) {
			e.push(ue(n));
			var r = n = null, i;
			for (i in t) if ($n.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: z(e, i, a);
				}
			}
			return e.push(di), te(e, r, n), typeof n == "string" ? (e.push(w(n)), null) : n;
		}
		function ue(e) {
			var t = Oi.get(e);
			if (t === void 0) {
				if (!Di.test(e)) throw Error("Invalid tag: " + e);
				t = "<" + e, Oi.set(e, t);
			}
			return t;
		}
		function de(e, t, n, r, i, a, o, s, c) {
			b(t, n), t !== "input" && t !== "textarea" && t !== "select" || n == null || n.value !== null || ur || (ur = !0, t === "select" && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
			b: if (t.indexOf("-") === -1) var l = !1;
			else switch (t) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					l = !1;
					break b;
				default: l = !0;
			}
			switch (l || typeof n.is == "string" || S(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== Xr && s.insertionMode !== Zr && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
				case "div":
				case "span":
				case "svg":
				case "path": break;
				case "a":
					e.push(ue("a"));
					var u = null, d = null, f;
					for (f in n) if ($n.call(n, f)) {
						var p = n[f];
						if (p != null) switch (f) {
							case "children":
								u = p;
								break;
							case "dangerouslySetInnerHTML":
								d = p;
								break;
							case "href":
								p === "" ? F(e, "href", "") : z(e, f, p);
								break;
							default: z(e, f, p);
						}
					}
					if (e.push(di), te(e, d, u), typeof u == "string") {
						e.push(w(u));
						var h = null;
					} else h = u;
					return h;
				case "g":
				case "p":
				case "li": break;
				case "select":
					v("select", n), ne(n, "value"), ne(n, "defaultValue"), n.value === void 0 || n.defaultValue === void 0 || hi || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), hi = !0), e.push(ue("select"));
					var y = null, x = null, C;
					for (C in n) if ($n.call(n, C)) {
						var E = n[C];
						if (E != null) switch (C) {
							case "children":
								y = E;
								break;
							case "dangerouslySetInnerHTML":
								x = E;
								break;
							case "defaultValue":
							case "value": break;
							default: z(e, C, E);
						}
					}
					return e.push(di), te(e, x, y), y;
				case "option":
					var D = s.selectedValue;
					e.push(ue("option"));
					var O = null, k = null, A = null, j = null, M;
					for (M in n) if ($n.call(n, M)) {
						var I = n[M];
						if (I != null) switch (M) {
							case "children":
								O = I;
								break;
							case "selected":
								A = I, yi ||= (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), !0);
								break;
							case "dangerouslySetInnerHTML":
								j = I;
								break;
							case "value": k = I;
							default: z(e, M, I);
						}
					}
					if (D != null) {
						if (k !== null) {
							m(k, "value");
							var de = "" + k;
						} else j === null || vi || (vi = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), de = B(O);
						if (Jn(D)) {
							for (var pe = 0; pe < D.length; pe++) if (m(D[pe], "value"), "" + D[pe] === de) {
								e.push(" selected=\"\"");
								break;
							}
						} else m(D, "select.value"), "" + D === de && e.push(" selected=\"\"");
					} else A && e.push(" selected=\"\"");
					return e.push(di), te(e, j, O), O;
				case "textarea":
					v("textarea", n), n.value === void 0 || n.defaultValue === void 0 || gi || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), gi = !0), e.push(ue("textarea"));
					var me = null, he = null, ge = null, _e;
					for (_e in n) if ($n.call(n, _e)) {
						var ve = n[_e];
						if (ve != null) switch (_e) {
							case "children":
								ge = ve;
								break;
							case "value":
								me = ve;
								break;
							case "defaultValue":
								he = ve;
								break;
							case "dangerouslySetInnerHTML": throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							default: z(e, _e, ve);
						}
					}
					if (me === null && he !== null && (me = he), e.push(di), ge != null) {
						if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), me != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
						if (Jn(ge)) {
							if (1 < ge.length) throw Error("<textarea> can only have at most one child.");
							g(ge[0]), me = "" + ge[0];
						}
						g(ge), me = "" + ge;
					}
					return typeof me == "string" && me[0] === "\n" && e.push(Ei), me !== null && (m(me, "value"), e.push(w("" + me))), null;
				case "input":
					v("input", n), e.push(ue("input"));
					var ye = null, be = null, xe = null, Se = null, Ce = null, we = null, Te = null, Ee = null, De = null, Oe;
					for (Oe in n) if ($n.call(n, Oe)) {
						var ke = n[Oe];
						if (ke != null) switch (Oe) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							case "name":
								ye = ke;
								break;
							case "formAction":
								be = ke;
								break;
							case "formEncType":
								xe = ke;
								break;
							case "formMethod":
								Se = ke;
								break;
							case "formTarget":
								Ce = ke;
								break;
							case "defaultChecked":
								De = ke;
								break;
							case "defaultValue":
								Te = ke;
								break;
							case "checked":
								Ee = ke;
								break;
							case "value":
								we = ke;
								break;
							default: z(e, Oe, ke);
						}
					}
					be === null || n.type === "image" || n.type === "submit" || bi || (bi = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\"."));
					var Ae = R(e, r, i, be, xe, Se, Ce, ye);
					return Ee === null || De === null || mi || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), mi = !0), we === null || Te === null || pi || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), pi = !0), Ee === null ? De !== null && P(e, "checked", De) : P(e, "checked", Ee), we === null ? Te !== null && z(e, "value", Te) : z(e, "value", we), e.push(fi), Ae?.forEach(ee, e), null;
				case "button":
					e.push(ue("button"));
					var je = null, Me = null, Fe = null, H = null, Ie = null, Le = null, Re = null, ze;
					for (ze in n) if ($n.call(n, ze)) {
						var Be = n[ze];
						if (Be != null) switch (ze) {
							case "children":
								je = Be;
								break;
							case "dangerouslySetInnerHTML":
								Me = Be;
								break;
							case "name":
								Fe = Be;
								break;
							case "formAction":
								H = Be;
								break;
							case "formEncType":
								Ie = Be;
								break;
							case "formMethod":
								Le = Be;
								break;
							case "formTarget":
								Re = Be;
								break;
							default: z(e, ze, Be);
						}
					}
					H === null || n.type == null || n.type === "submit" || bi || (bi = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type."));
					var Ve = R(e, r, i, H, Ie, Le, Re, Fe);
					if (e.push(di), Ve?.forEach(ee, e), te(e, Me, je), typeof je == "string") {
						e.push(w(je));
						var He = null;
					} else He = je;
					return He;
				case "form":
					e.push(ue("form"));
					var Ue = null, U = null, We = null, Ge = null, Ke = null, qe = null, Je;
					for (Je in n) if ($n.call(n, Je)) {
						var W = n[Je];
						if (W != null) switch (Je) {
							case "children":
								Ue = W;
								break;
							case "dangerouslySetInnerHTML":
								U = W;
								break;
							case "action":
								We = W;
								break;
							case "encType":
								Ge = W;
								break;
							case "method":
								Ke = W;
								break;
							case "target":
								qe = W;
								break;
							default: z(e, Je, W);
						}
					}
					var Ye = null, Xe = null;
					if (typeof We == "function") {
						Ge === null && Ke === null || Ci || (Ci = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), qe === null || Si || (Si = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
						var G = L(r, We);
						G === null ? (e.push(oi, "action", si, ui, ci), qe = Ke = Ge = We = null, re(r, i)) : (We = G.action || "", Ge = G.encType, Ke = G.method, qe = G.target, Ye = G.data, Xe = G.name);
					}
					if (We != null && z(e, "action", We), Ge != null && z(e, "encType", Ge), Ke != null && z(e, "method", Ke), qe != null && z(e, "target", qe), e.push(di), Xe !== null && (e.push("<input type=\"hidden\""), F(e, "name", Xe), e.push(fi), Ye?.forEach(ee, e)), te(e, U, Ue), typeof Ue == "string") {
						e.push(w(Ue));
						var Ze = null;
					} else Ze = Ue;
					return Ze;
				case "menuitem":
					for (var K in e.push(ue("menuitem")), n) if ($n.call(n, K)) {
						var Qe = n[K];
						if (Qe != null) switch (K) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
							default: z(e, K, Qe);
						}
					}
					return e.push(di), null;
				case "object":
					e.push(ue("object"));
					var $e = null, et = null, tt;
					for (tt in n) if ($n.call(n, tt)) {
						var q = n[tt];
						if (q != null) switch (tt) {
							case "children":
								$e = q;
								break;
							case "dangerouslySetInnerHTML":
								et = q;
								break;
							case "data":
								m(q, "data");
								var J = T("" + q);
								if (J === "") {
									console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", tt, tt);
									break;
								}
								e.push(oi, "data", si, w(J), ci);
								break;
							default: z(e, tt, q);
						}
					}
					if (e.push(di), te(e, et, $e), typeof $e == "string") {
						e.push(w($e));
						var nt = null;
					} else nt = $e;
					return nt;
				case "title":
					var rt = s.tagScope & 1, it = s.tagScope & 4;
					if ($n.call(n, "children")) {
						var at = n.children, ot = Array.isArray(at) ? 2 > at.length ? at[0] : null : at;
						Array.isArray(at) && 1 < at.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", at.length) : typeof ot == "function" || typeof ot == "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof ot == "function" ? "a Function" : "a Sybmol") : ot && ot.toString === {}.toString && (ot.$$typeof == null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."));
					}
					if (s.insertionMode === Xr || rt || n.itemProp != null) var st = se(e, n);
					else it ? st = null : (se(i.hoistableChunks, n), st = void 0);
					return st;
				case "link":
					var ct = s.tagScope & 1, lt = s.tagScope & 4, ut = n.rel, dt = n.href, ft = n.precedence;
					if (s.insertionMode === Xr || ct || n.itemProp != null || typeof ut != "string" || typeof dt != "string" || dt === "") {
						ut === "stylesheet" && typeof n.precedence == "string" && (typeof dt == "string" && dt || console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.", dt === null ? "`null`" : dt === void 0 ? "`undefined`" : dt === "" ? "an empty string" : "something with type \"" + typeof dt + "\"")), ie(e, n);
						var pt = null;
					} else if (n.rel === "stylesheet") if (typeof ft != "string" || n.disabled != null || n.onLoad || n.onError) {
						if (typeof ft == "string") {
							if (n.disabled != null) console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.");
							else if (n.onLoad || n.onError) {
								var mt = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
								console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", mt, mt);
							}
						}
						pt = ie(e, n);
					} else {
						var ht = i.styles.get(ft), gt = r.styleResources.hasOwnProperty(dt) ? r.styleResources[dt] : void 0;
						if (gt !== Br) {
							r.styleResources[dt] = Br, ht || (ht = {
								precedence: w(ft),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, i.styles.set(ft, ht));
							var _t = {
								state: Ya,
								props: Qn({}, n, {
									"data-precedence": n.precedence,
									precedence: null
								})
							};
							if (gt) {
								gt.length === 2 && Ne(_t.props, gt);
								var vt = i.preloads.stylesheets.get(dt);
								vt && 0 < vt.length ? vt.length = 0 : _t.state = Xa;
							}
							ht.sheets.set(dt, _t), o && o.stylesheets.add(_t);
						} else if (ht) {
							var yt = ht.sheets.get(dt);
							yt && o && o.stylesheets.add(yt);
						}
						c && e.push("<!-- -->"), pt = null;
					}
					else n.onLoad || n.onError ? pt = ie(e, n) : (c && e.push("<!-- -->"), pt = lt ? null : ie(i.hoistableChunks, n));
					return pt;
				case "script":
					var bt = s.tagScope & 1, xt = n.async;
					if (typeof n.src != "string" || !n.src || !xt || typeof xt == "function" || typeof xt == "symbol" || n.onLoad || n.onError || s.insertionMode === Xr || bt || n.itemProp != null) var St = ce(e, n);
					else {
						var Ct = n.src;
						if (n.type === "module") var wt = r.moduleScriptResources, Tt = i.preloads.moduleScripts;
						else wt = r.scriptResources, Tt = i.preloads.scripts;
						var Et = wt.hasOwnProperty(Ct) ? wt[Ct] : void 0;
						if (Et !== Br) {
							wt[Ct] = Br;
							var Dt = n;
							if (Et) {
								Et.length === 2 && (Dt = Qn({}, n), Ne(Dt, Et));
								var Ot = Tt.get(Ct);
								Ot && (Ot.length = 0);
							}
							var kt = [];
							i.scripts.add(kt), ce(kt, Dt);
						}
						c && e.push("<!-- -->"), St = null;
					}
					return St;
				case "style":
					var At = s.tagScope & 1;
					if ($n.call(n, "children")) {
						var jt = n.children, Mt = Array.isArray(jt) ? 2 > jt.length ? jt[0] : null : jt;
						(typeof Mt == "function" || typeof Mt == "symbol" || Array.isArray(Mt)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof Mt == "function" ? "a Function" : typeof Mt == "symbol" ? "a Sybmol" : "an Array");
					}
					var Nt = n.precedence, Pt = n.href, Ft = n.nonce;
					if (s.insertionMode === Xr || At || n.itemProp != null || typeof Nt != "string" || typeof Pt != "string" || Pt === "") {
						e.push(ue("style"));
						var It = null, Lt = null, Rt;
						for (Rt in n) if ($n.call(n, Rt)) {
							var zt = n[Rt];
							if (zt != null) switch (Rt) {
								case "children":
									It = zt;
									break;
								case "dangerouslySetInnerHTML":
									Lt = zt;
									break;
								default: z(e, Rt, zt);
							}
						}
						e.push(di);
						var Y = Array.isArray(It) ? 2 > It.length ? It[0] : null : It;
						typeof Y != "function" && typeof Y != "symbol" && Y != null && e.push(ae(Y)), te(e, Lt, It), e.push(fe("style"));
						var Bt = null;
					} else {
						Pt.includes(" ") && console.error("React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is \"%s\".", Pt);
						var Vt = i.styles.get(Nt), Ht = r.styleResources.hasOwnProperty(Pt) ? r.styleResources[Pt] : void 0;
						if (Ht !== Br) {
							r.styleResources[Pt] = Br, Ht && console.error("React encountered a hoistable style tag for the same href as a preload: \"%s\". When using a style tag to inline styles you should not also preload it as a stylsheet.", Pt), Vt || (Vt = {
								precedence: w(Nt),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, i.styles.set(Nt, Vt));
							var Ut = i.nonce.style;
							if (Ut && Ut !== Ft) console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce \"%s\" that was included with this render.", Nt, Ft, Ut);
							else {
								!Ut && Ft && console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.", Nt, Ft), Vt.hrefs.push(w(Pt));
								var Wt = Vt.rules, Gt = null, Kt = null, qt;
								for (qt in n) if ($n.call(n, qt)) {
									var Jt = n[qt];
									if (Jt != null) switch (qt) {
										case "children":
											Gt = Jt;
											break;
										case "dangerouslySetInnerHTML": Kt = Jt;
									}
								}
								var Yt = Array.isArray(Gt) ? 2 > Gt.length ? Gt[0] : null : Gt;
								typeof Yt != "function" && typeof Yt != "symbol" && Yt != null && Wt.push(ae(Yt)), te(Wt, Kt, Gt);
							}
						}
						Vt && o && o.styles.add(Vt), c && e.push("<!-- -->"), Bt = void 0;
					}
					return Bt;
				case "meta":
					var X = s.tagScope & 1, Xt = s.tagScope & 4;
					if (s.insertionMode === Xr || X || n.itemProp != null) var Zt = oe(e, n, "meta");
					else c && e.push("<!-- -->"), Zt = Xt ? null : typeof n.charSet == "string" ? oe(i.charsetChunks, n, "meta") : n.name === "viewport" ? oe(i.viewportChunks, n, "meta") : oe(i.hoistableChunks, n, "meta");
					return Zt;
				case "listing":
				case "pre":
					e.push(ue(t));
					var Qt = null, Z = null, $t;
					for ($t in n) if ($n.call(n, $t)) {
						var en = n[$t];
						if (en != null) switch ($t) {
							case "children":
								Qt = en;
								break;
							case "dangerouslySetInnerHTML":
								Z = en;
								break;
							default: z(e, $t, en);
						}
					}
					if (e.push(di), Z != null) {
						if (Qt != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
						if (typeof Z != "object" || !("__html" in Z)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						var tn = Z.__html;
						tn != null && (typeof tn == "string" && 0 < tn.length && tn[0] === "\n" ? e.push(Ei, tn) : (g(tn), e.push("" + tn)));
					}
					return typeof Qt == "string" && Qt[0] === "\n" && e.push(Ei), Qt;
				case "img":
					var nn = s.tagScope & 3, Q = n.src, $ = n.srcSet;
					if (!(n.loading === "lazy" || !Q && !$ || typeof Q != "string" && Q != null || typeof $ != "string" && $ != null || n.fetchPriority === "low" || nn) && (typeof Q != "string" || Q[4] !== ":" || Q[0] !== "d" && Q[0] !== "D" || Q[1] !== "a" && Q[1] !== "A" || Q[2] !== "t" && Q[2] !== "T" || Q[3] !== "a" && Q[3] !== "A") && (typeof $ != "string" || $[4] !== ":" || $[0] !== "d" && $[0] !== "D" || $[1] !== "a" && $[1] !== "A" || $[2] !== "t" && $[2] !== "T" || $[3] !== "a" && $[3] !== "A")) {
						o !== null && s.tagScope & 64 && (o.suspenseyImages = !0);
						var rn = typeof n.sizes == "string" ? n.sizes : void 0, an = $ ? $ + "\n" + (rn || "") : Q, on = i.preloads.images, sn = on.get(an);
						if (sn) (n.fetchPriority === "high" || 10 > i.highImagePreloads.size) && (on.delete(an), i.highImagePreloads.add(sn));
						else if (!r.imageResources.hasOwnProperty(an)) {
							r.imageResources[an] = Vr;
							var cn = n.crossOrigin, ln = typeof cn == "string" ? cn === "use-credentials" ? cn : "" : void 0, un = i.headers, dn;
							un && 0 < un.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > un.highImagePreloads.length) && (dn = Pe(Q, "image", {
								imageSrcSet: n.srcSet,
								imageSizes: n.sizes,
								crossOrigin: ln,
								integrity: n.integrity,
								nonce: n.nonce,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.refererPolicy
							}), 0 <= (un.remainingCapacity -= dn.length + 2)) ? (i.resets.image[an] = Vr, un.highImagePreloads && (un.highImagePreloads += ", "), un.highImagePreloads += dn) : (sn = [], ie(sn, {
								rel: "preload",
								as: "image",
								href: $ ? void 0 : Q,
								imageSrcSet: $,
								imageSizes: rn,
								crossOrigin: ln,
								integrity: n.integrity,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.referrerPolicy
							}), n.fetchPriority === "high" || 10 > i.highImagePreloads.size ? i.highImagePreloads.add(sn) : (i.bulkPreloads.add(sn), on.set(an, sn)));
						}
					}
					return oe(e, n, "img");
				case "base":
				case "area":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "param":
				case "source":
				case "track":
				case "wbr": return oe(e, n, t);
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": break;
				case "head":
					if (s.insertionMode < Jr) {
						var fn = a || i.preamble;
						if (fn.headChunks) throw Error("The `<head>` tag may only be rendered once.");
						a !== null && e.push("<!--head-->"), fn.headChunks = [];
						var pn = le(fn.headChunks, n, "head");
					} else pn = V(e, n, "head");
					return pn;
				case "body":
					if (s.insertionMode < Jr) {
						var mn = a || i.preamble;
						if (mn.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
						a !== null && e.push("<!--body-->"), mn.bodyChunks = [];
						var hn = le(mn.bodyChunks, n, "body");
					} else hn = V(e, n, "body");
					return hn;
				case "html":
					if (s.insertionMode === Kr) {
						var gn = a || i.preamble;
						if (gn.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
						a !== null && e.push("<!--html-->"), gn.htmlChunks = [to];
						var _n = le(gn.htmlChunks, n, "html");
					} else _n = V(e, n, "html");
					return _n;
				default: if (t.indexOf("-") !== -1) {
					e.push(ue(t));
					var vn = null, yn = null, bn;
					for (bn in n) if ($n.call(n, bn)) {
						var xn = n[bn];
						if (xn != null) {
							var Sn = bn;
							switch (bn) {
								case "children":
									vn = xn;
									break;
								case "dangerouslySetInnerHTML":
									yn = xn;
									break;
								case "style":
									N(e, xn);
									break;
								case "suppressContentEditableWarning":
								case "suppressHydrationWarning":
								case "ref": break;
								case "className": Sn = "class";
								default: if (_(bn) && typeof xn != "function" && typeof xn != "symbol" && !1 !== xn) {
									if (!0 === xn) xn = "";
									else if (typeof xn == "object") continue;
									e.push(oi, Sn, si, w(xn), ci);
								}
							}
						}
					}
					return e.push(di), te(e, yn, vn), vn;
				}
			}
			return V(e, n, t);
		}
		function fe(e) {
			var t = ki.get(e);
			return t === void 0 && (t = "</" + e + ">", ki.set(e, t)), t;
		}
		function pe(e, t) {
			e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
		}
		function me(e, t) {
			t = t.bootstrapChunks;
			for (var n = 0; n < t.length - 1; n++) e.push(t[n]);
			return n < t.length ? (n = t[n], t.length = 0, e.push(n)) : !0;
		}
		function he(e, t, n) {
			if (e.push(Pi), n === null) throw Error("An ID must have been assigned before we can complete the boundary.");
			return e.push(t.boundaryPrefix), t = n.toString(16), e.push(t), e.push(Fi);
		}
		function ge(e, t, n, r) {
			switch (n.insertionMode) {
				case Kr:
				case qr:
				case Yr:
				case Jr: return e.push(Gi), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(Ki);
				case Xr: return e.push(Ji), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(Yi);
				case Zr: return e.push(Zi), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(Qi);
				case Qr: return e.push(ea), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(ta);
				case $r: return e.push(ra), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(ia);
				case ei: return e.push(oa), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(sa);
				case ti: return e.push(la), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push(ua);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function _e(e, t) {
			switch (t.insertionMode) {
				case Kr:
				case qr:
				case Yr:
				case Jr: return e.push(qi);
				case Xr: return e.push(Xi);
				case Zr: return e.push($i);
				case Qr: return e.push(na);
				case $r: return e.push(aa);
				case ei: return e.push(ca);
				case ti: return e.push(da);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function ve(e) {
			return JSON.stringify(e).replace(Aa, function(e) {
				switch (e) {
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function ye(e) {
			return JSON.stringify(e).replace(ja, function(e) {
				switch (e) {
					case "&": return "\\u0026";
					case ">": return "\\u003e";
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function be(e) {
			var t = e.rules, n = e.hrefs;
			0 < t.length && n.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
			var r = 0;
			if (n.length) {
				for (this.push(Hr.startInlineStyle), this.push(Ma), this.push(e.precedence), this.push(Na); r < n.length - 1; r++) this.push(n[r]), this.push(Va);
				for (this.push(n[r]), this.push(Pa), r = 0; r < t.length; r++) this.push(t[r]);
				La = this.push(Fa), Ia = !0, t.length = 0, n.length = 0;
			}
		}
		function xe(e) {
			return e.state === Za ? !1 : Ia = !0;
		}
		function Se(e, t, n) {
			return Ia = !1, La = !0, Hr = n, t.styles.forEach(be, e), Hr = null, t.stylesheets.forEach(xe), Ia && (n.stylesToHoist = !0), La;
		}
		function Ce(e) {
			for (var t = 0; t < e.length; t++) this.push(e[t]);
			e.length = 0;
		}
		function we(e) {
			ie(Ra, e.props);
			for (var t = 0; t < Ra.length; t++) this.push(Ra[t]);
			Ra.length = 0, e.state = Za;
		}
		function Te(e) {
			var t = 0 < e.sheets.size;
			e.sheets.forEach(we, this), e.sheets.clear();
			var n = e.rules, r = e.hrefs;
			if (!t || r.length) {
				if (this.push(Hr.startInlineStyle), this.push(za), this.push(e.precedence), e = 0, r.length) {
					for (this.push(Ba); e < r.length - 1; e++) this.push(r[e]), this.push(Va);
					this.push(r[e]);
				}
				for (this.push(Ha), e = 0; e < n.length; e++) this.push(n[e]);
				this.push(Ua), n.length = 0, r.length = 0;
			}
		}
		function Ee(e) {
			if (e.state === Ya) {
				e.state = Xa;
				var t = e.props;
				for (ie(Ra, {
					rel: "preload",
					as: "style",
					href: e.props.href,
					crossOrigin: t.crossOrigin,
					fetchPriority: t.fetchPriority,
					integrity: t.integrity,
					media: t.media,
					hrefLang: t.hrefLang,
					referrerPolicy: t.referrerPolicy
				}), e = 0; e < Ra.length; e++) this.push(Ra[e]);
				Ra.length = 0;
			}
		}
		function De(e) {
			e.sheets.forEach(Ee, this), e.sheets.clear();
		}
		function Oe(e, t) {
			(t.instructions & Rr) === Nr && (t.instructions |= Rr, e.push(Wa, w("_" + t.idPrefix + "R_"), ci));
		}
		function ke(e, t) {
			e.push(Ga);
			var n = Ga;
			t.stylesheets.forEach(function(t) {
				if (t.state !== Za) if (t.state === Qa) e.push(n), t = t.props.href, m(t, "href"), t = ye("" + t), e.push(t), e.push(Ja), n = Ka;
				else {
					e.push(n);
					var r = t.props["data-precedence"], i = t.props, a = T("" + t.props.href);
					for (var o in a = ye(a), e.push(a), m(r, "precedence"), r = "" + r, e.push(qa), r = ye(r), e.push(r), i) if ($n.call(i, o) && (r = i[o], r != null)) switch (o) {
						case "href":
						case "rel":
						case "precedence":
						case "data-precedence": break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: Ae(e, o, r);
					}
					e.push(Ja), n = Ka, t.state = Qa;
				}
			}), e.push(Ja);
		}
		function Ae(e, t, n) {
			var r = t.toLowerCase();
			switch (typeof n) {
				case "function":
				case "symbol": return;
			}
			switch (t) {
				case "innerHTML":
				case "dangerouslySetInnerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "style":
				case "ref": return;
				case "className":
					r = "class", m(n, r), t = "" + n;
					break;
				case "hidden":
					if (!1 === n) return;
					t = "";
					break;
				case "src":
				case "href":
					n = T(n), m(n, r), t = "" + n;
					break;
				default:
					if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !_(t)) return;
					m(n, r), t = "" + n;
			}
			e.push(qa), r = ye(r), e.push(r), e.push(qa), r = ye(t), e.push(r);
		}
		function je() {
			return {
				styles: /* @__PURE__ */ new Set(),
				stylesheets: /* @__PURE__ */ new Set(),
				suspenseyImages: !1
			};
		}
		function Me(e, t, n, r) {
			(e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error("Internal React Error: React expected bootstrap script or module with src \"%s\" to not have been preloaded already. please file an issue", n), e.scriptResources[n] = Br, e.moduleScriptResources[n] = Br, e = [], ie(e, r), t.bootstrapScripts.add(e);
		}
		function Ne(e, t) {
			e.crossOrigin ??= t[0], e.integrity ??= t[1];
		}
		function Pe(e, t, n) {
			for (var r in e = Fe(e), t = Ie(t, "as"), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) $n.call(n, r) && (e = n[r], typeof e == "string" && (t += "; " + r.toLowerCase() + "=\"" + Ie(e, r) + "\""));
			return t;
		}
		function Fe(e) {
			return m(e, "href"), ("" + e).replace($a, H);
		}
		function H(e) {
			switch (e) {
				case "<": return "%3C";
				case ">": return "%3E";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Ie(e, t) {
			return f(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, d(e)), p(e)), ("" + e).replace(eo, Le);
		}
		function Le(e) {
			switch (e) {
				case "\"": return "%22";
				case "'": return "%27";
				case ";": return "%3B";
				case ",": return "%2C";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Re(e) {
			this.styles.add(e);
		}
		function ze(e) {
			this.stylesheets.add(e);
		}
		function Be(e, t) {
			t.styles.forEach(Re, e), t.stylesheets.forEach(ze, e), t.suspenseyImages && (e.suspenseyImages = !0);
		}
		function Ve(e, t) {
			var n = e.idPrefix, r = [], i = e.bootstrapScriptContent, a = e.bootstrapScripts, o = e.bootstrapModules;
			if (i !== void 0 && (r.push("<script"), Oe(r, e), r.push(di, E(i), Ur)), n = {
				placeholderPrefix: n + "P:",
				segmentPrefix: n + "S:",
				boundaryPrefix: n + "B:",
				startInlineScript: "<script",
				startInlineStyle: "<style",
				preamble: {
					htmlChunks: null,
					headChunks: null,
					bodyChunks: null
				},
				externalRuntimeScript: null,
				bootstrapChunks: r,
				importMapChunks: [],
				onHeaders: void 0,
				headers: null,
				resets: {
					font: {},
					dns: {},
					connect: {
						default: {},
						anonymous: {},
						credentials: {}
					},
					image: {},
					style: {}
				},
				charsetChunks: [],
				viewportChunks: [],
				hoistableChunks: [],
				preconnects: /* @__PURE__ */ new Set(),
				fontPreloads: /* @__PURE__ */ new Set(),
				highImagePreloads: /* @__PURE__ */ new Set(),
				styles: /* @__PURE__ */ new Map(),
				bootstrapScripts: /* @__PURE__ */ new Set(),
				scripts: /* @__PURE__ */ new Set(),
				bulkPreloads: /* @__PURE__ */ new Set(),
				preloads: {
					images: /* @__PURE__ */ new Map(),
					stylesheets: /* @__PURE__ */ new Map(),
					scripts: /* @__PURE__ */ new Map(),
					moduleScripts: /* @__PURE__ */ new Map()
				},
				nonce: {
					script: void 0,
					style: void 0
				},
				hoistableState: null,
				stylesToHoist: !1
			}, a !== void 0) for (i = 0; i < a.length; i++) {
				var s = a[i], c, l = void 0, u = void 0, d = {
					rel: "preload",
					as: "script",
					fetchPriority: "low",
					nonce: void 0
				};
				typeof s == "string" ? d.href = c = s : (d.href = c = s.src, d.integrity = u = typeof s.integrity == "string" ? s.integrity : void 0, d.crossOrigin = l = typeof s == "string" || s.crossOrigin == null ? void 0 : s.crossOrigin === "use-credentials" ? "use-credentials" : ""), Me(e, n, c, d), r.push("<script src=\"", w(c), ci), typeof u == "string" && r.push(" integrity=\"", w(u), ci), typeof l == "string" && r.push(" crossorigin=\"", w(l), ci), Oe(r, e), r.push(" async=\"\"><\/script>");
			}
			if (o !== void 0) for (a = 0; a < o.length; a++) i = o[a], l = c = void 0, u = {
				rel: "modulepreload",
				fetchPriority: "low",
				nonce: void 0
			}, typeof i == "string" ? u.href = s = i : (u.href = s = i.src, u.integrity = l = typeof i.integrity == "string" ? i.integrity : void 0, u.crossOrigin = c = typeof i == "string" || i.crossOrigin == null ? void 0 : i.crossOrigin === "use-credentials" ? "use-credentials" : ""), Me(e, n, s, u), r.push("<script type=\"module\" src=\"", w(s), ci), typeof l == "string" && r.push(" integrity=\"", w(l), ci), typeof c == "string" && r.push(" crossorigin=\"", w(c), ci), Oe(r, e), r.push(" async=\"\"><\/script>");
			return {
				placeholderPrefix: n.placeholderPrefix,
				segmentPrefix: n.segmentPrefix,
				boundaryPrefix: n.boundaryPrefix,
				startInlineScript: n.startInlineScript,
				startInlineStyle: n.startInlineStyle,
				preamble: n.preamble,
				externalRuntimeScript: n.externalRuntimeScript,
				bootstrapChunks: n.bootstrapChunks,
				importMapChunks: n.importMapChunks,
				onHeaders: n.onHeaders,
				headers: n.headers,
				resets: n.resets,
				charsetChunks: n.charsetChunks,
				viewportChunks: n.viewportChunks,
				hoistableChunks: n.hoistableChunks,
				preconnects: n.preconnects,
				fontPreloads: n.fontPreloads,
				highImagePreloads: n.highImagePreloads,
				styles: n.styles,
				bootstrapScripts: n.bootstrapScripts,
				scripts: n.scripts,
				bulkPreloads: n.bulkPreloads,
				preloads: n.preloads,
				nonce: n.nonce,
				stylesToHoist: n.stylesToHoist,
				generateStaticMarkup: t
			};
		}
		function He(e, t, n, r) {
			return n.generateStaticMarkup ? (e.push(w(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(w(t)), e = !0), e);
		}
		function Ue(e, t, n, r) {
			t.generateStaticMarkup || n && r && e.push("<!-- -->");
		}
		function U(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === ro ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Mn: return "Fragment";
				case Pn: return "Profiler";
				case Nn: return "StrictMode";
				case Rn: return "Suspense";
				case zn: return "SuspenseList";
				case Un: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case jn: return "Portal";
				case In: return e.displayName || "Context";
				case Fn: return (e._context.displayName || "Context") + ".Consumer";
				case Ln:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case Bn: return t = e.displayName || null, t === null ? U(e.type) || "Memo" : t;
				case Vn:
					t = e._payload, e = e._init;
					try {
						return U(e(t));
					} catch {}
			}
			return null;
		}
		function We(e, t) {
			if (e !== t) {
				e.context._currentValue2 = e.parentValue, e = e.parent;
				var n = t.parent;
				if (e === null) {
					if (n !== null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
				} else {
					if (n === null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
					We(e, n);
				}
				t.context._currentValue2 = t.value;
			}
		}
		function Ge(e) {
			e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && Ge(e);
		}
		function Ke(e) {
			var t = e.parent;
			t !== null && Ke(t), e.context._currentValue2 = e.value;
		}
		function qe(e, t) {
			if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === t.depth ? We(e, t) : qe(e, t);
		}
		function Je(e, t) {
			var n = t.parent;
			if (n === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === n.depth ? We(e, n) : Je(e, n), t.context._currentValue2 = t.value;
		}
		function W(e) {
			var t = oo;
			t !== e && (t === null ? Ke(e) : e === null ? Ge(t) : t.depth === e.depth ? We(t, e) : t.depth > e.depth ? qe(t, e) : Je(t, e), oo = e);
		}
		function Ye(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				vo.has(t) || (vo.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function Xe(e, t) {
			e = (e = e.constructor) && U(e) || "ReactClass";
			var n = e + "." + t;
			so[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), so[n] = !0);
		}
		function G(e, t, n) {
			var r = e.id;
			e = e.overflow;
			var i = 32 - xo(r) - 1;
			r &= ~(1 << i), n += 1;
			var a = 32 - xo(t) + i;
			if (30 < a) {
				var o = i - i % 5;
				return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
					id: 1 << 32 - xo(t) + i | n << i | r,
					overflow: a + e
				};
			}
			return {
				id: 1 << a | n << i | r,
				overflow: e
			};
		}
		function Ze(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (So(e) / Co | 0) | 0;
		}
		function K() {}
		function Qe(e, t, n) {
			switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(K, K), t = n), t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw t.reason;
				default:
					switch (typeof t.status == "string" ? t.then(K, K) : (e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					})), t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw t.reason;
					}
					throw To = t, wo;
			}
		}
		function $e() {
			if (To === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = To;
			return To = null, e;
		}
		function et(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function tt() {
			if (Do === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return Ho && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), Do;
		}
		function q() {
			if (0 < Vo) throw Error("Rendered more hooks than during the previous render");
			return {
				memoizedState: null,
				queue: null,
				next: null
			};
		}
		function J() {
			return Mo === null ? jo === null ? (No = !1, jo = Mo = q()) : (No = !0, Mo = jo) : Mo.next === null ? (No = !1, Mo = Mo.next = q()) : (No = !0, Mo = Mo.next), Mo;
		}
		function nt() {
			var e = zo;
			return zo = null, e;
		}
		function rt() {
			Ho = !1, Ao = ko = Oo = Do = null, Po = !1, jo = null, Vo = 0, Mo = Bo = null;
		}
		function it(e) {
			return Ho && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e._currentValue2;
		}
		function at(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function ot(e, t, n) {
			if (e !== at && (Uo = "useReducer"), Do = tt(), Mo = J(), No) {
				if (n = Mo.queue, t = n.dispatch, Bo !== null) {
					var r = Bo.get(n);
					if (r !== void 0) {
						Bo.delete(n), n = Mo.memoizedState;
						do {
							var i = r.action;
							Ho = !0, n = e(n, i), Ho = !1, r = r.next;
						} while (r !== null);
						return Mo.memoizedState = n, [n, t];
					}
				}
				return [Mo.memoizedState, t];
			}
			return Ho = !0, e = e === at ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), Ho = !1, Mo.memoizedState = e, e = Mo.queue = {
				last: null,
				dispatch: null
			}, e = e.dispatch = ct.bind(null, Do, e), [Mo.memoizedState, e];
		}
		function st(e, t) {
			if (Do = tt(), Mo = J(), t = t === void 0 ? null : t, Mo !== null) {
				var n = Mo.memoizedState;
				if (n !== null && t !== null) {
					a: {
						var r = n[1];
						if (r === null) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Uo), r = !1;
						else {
							t.length !== r.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", Uo, "[" + t.join(", ") + "]", "[" + r.join(", ") + "]");
							for (var i = 0; i < r.length && i < t.length; i++) if (!Eo(t[i], r[i])) {
								r = !1;
								break a;
							}
							r = !0;
						}
					}
					if (r) return n[0];
				}
			}
			return Ho = !0, e = e(), Ho = !1, Mo.memoizedState = [e, t], e;
		}
		function ct(e, t, n) {
			if (25 <= Vo) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
			if (e === Do) if (Po = !0, e = {
				action: n,
				next: null
			}, Bo === null && (Bo = /* @__PURE__ */ new Map()), n = Bo.get(t), n === void 0) Bo.set(t, e);
			else {
				for (t = n; t.next !== null;) t = t.next;
				t.next = e;
			}
		}
		function lt() {
			throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
		}
		function ut() {
			throw Error("startTransition cannot be called during server rendering.");
		}
		function dt() {
			throw Error("Cannot update optimistic state while rendering.");
		}
		function ft(e, t, n) {
			tt();
			var r = Io++, i = ko;
			if (typeof e.$$FORM_ACTION == "function") {
				var a = null, o = Ao;
				i = i.formState;
				var s = e.$$IS_SIGNATURE_EQUAL;
				if (i !== null && typeof s == "function") {
					var c = i[1];
					s.call(e, i[2], i[3]) && (a = n === void 0 ? "k" + u(JSON.stringify([
						o,
						null,
						r
					]), 0) : "p" + n, c === a && (Lo = r, t = i[0]));
				}
				var l = e.bind(null, t);
				return e = function(e) {
					l(e);
				}, typeof l.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
					e = l.$$FORM_ACTION(e), n !== void 0 && (m(n, "target"), n += "", e.action = n);
					var t = e.data;
					return t && (a === null && (a = n === void 0 ? "k" + u(JSON.stringify([
						o,
						null,
						r
					]), 0) : "p" + n), t.append("$ACTION_KEY", a)), e;
				}), [
					t,
					e,
					!1
				];
			}
			var d = e.bind(null, t);
			return [
				t,
				function(e) {
					d(e);
				},
				!1
			];
		}
		function pt(e) {
			var t = Ro;
			return Ro += 1, zo === null && (zo = []), Qe(zo, e, t);
		}
		function mt() {
			throw Error("Cache cannot be refreshed during server rendering.");
		}
		function ht() {}
		function gt() {
			if (Jo === 0) {
				Yo = console.log, Xo = console.info, Zo = console.warn, Qo = console.error, $o = console.group, es = console.groupCollapsed, ts = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: ht,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			Jo++;
		}
		function _t() {
			if (Jo--, Jo === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: Qn({}, e, { value: Yo }),
					info: Qn({}, e, { value: Xo }),
					warn: Qn({}, e, { value: Zo }),
					error: Qn({}, e, { value: Qo }),
					group: Qn({}, e, { value: $o }),
					groupCollapsed: Qn({}, e, { value: es }),
					groupEnd: Qn({}, e, { value: ts })
				});
			}
			0 > Jo && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function vt(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function yt(e) {
			if (ns === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				ns = t && t[1] || "", rs = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + ns + e + rs;
		}
		function bt(e, t) {
			if (!e || is) return "";
			var n = as.get(e);
			if (n !== void 0) return n;
			is = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var r = null;
			r = kr.H, kr.H = null, gt();
			try {
				var i = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									r = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
					}
					return [null, null];
				} };
				i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
				a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
				if (s && c) {
					var l = s.split("\n"), u = c.split("\n");
					for (o = a = 0; a < l.length && !l[a].includes("DetermineComponentFrameRoot");) a++;
					for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					if (a === l.length || o === u.length) for (a = l.length - 1, o = u.length - 1; 1 <= a && 0 <= o && l[a] !== u[o];) o--;
					for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== u[o]) {
						if (a !== 1 || o !== 1) do
							if (a--, o--, 0 > o || l[a] !== u[o]) {
								var d = "\n" + l[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && as.set(e, d), d;
							}
						while (1 <= a && 0 <= o);
						break;
					}
				}
			} finally {
				is = !1, kr.H = r, _t(), Error.prepareStackTrace = n;
			}
			return l = (l = e ? e.displayName || e.name : "") ? yt(l) : "", typeof e == "function" && as.set(e, l), l;
		}
		function xt(e) {
			if (typeof e == "string") return yt(e);
			if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? bt(e, !0) : bt(e, !1);
			if (typeof e == "object" && e) {
				switch (e.$$typeof) {
					case Ln: return bt(e.render, !1);
					case Bn: return bt(e.type, !1);
					case Vn:
						var t = e, n = t._payload;
						t = t._init;
						try {
							e = t(n);
						} catch {
							return yt("Lazy");
						}
						return xt(e);
				}
				if (typeof e.name == "string") {
					a: {
						if (n = e.name, t = e.env, e = e.debugLocation, e != null) {
							e = vt(e);
							var r = e.lastIndexOf("\n");
							if (e = r === -1 ? e : e.slice(r + 1), e.indexOf(n) !== -1) {
								n = "\n" + e;
								break a;
							}
						}
						n = yt(n + (t ? " [" + t + "]" : ""));
					}
					return n;
				}
			}
			switch (e) {
				case zn: return yt("SuspenseList");
				case Rn: return yt("Suspense");
			}
			return "";
		}
		function St(e, t) {
			return (500 < t.byteSize || !1) && t.contentPreamble === null;
		}
		function Ct(e) {
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var t = e.environmentName;
				e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "[%s] " + e[0], " " + t + " ") : e.splice(0, 0, "[%s]", " " + t + " "), e.unshift(console), t = no.apply(console.error, e), t();
			} else console.error(e);
			return null;
		}
		function wt(e, t, n, r, i, a, o, s, c, l, u) {
			var d = /* @__PURE__ */ new Set();
			this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = r === void 0 ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = i === void 0 ? Ct : i, this.onPostpone = l === void 0 ? K : l, this.onAllReady = a === void 0 ? K : a, this.onShellReady = o === void 0 ? K : o, this.onShellError = s === void 0 ? K : s, this.onFatalError = c === void 0 ? K : c, this.formState = u === void 0 ? null : u, this.didWarnForKey = null;
		}
		function Tt(e, t, n, r, i, a, o, s, c, l, u, d) {
			var f = ms();
			return 1e3 < f - fs && (kr.recentlyCreatedOwnerStacks = 0, fs = f), t = new wt(t, n, r, i, a, o, s, c, l, u, d), n = At(t, 0, null, r, !1, !1), n.parentFlushed = !0, e = Ot(t, null, e, -1, null, n, null, null, t.abortableTasks, null, r, null, bo, null, null, io, null), Pt(e), t.pingedTasks.push(e), t;
		}
		function Et(e, t) {
			e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, dn(e));
		}
		function Dt(e, t, n, r, i) {
			return n = {
				status: _s,
				rootSegmentID: -1,
				parentFlushed: !1,
				pendingTasks: 0,
				row: t,
				completedSegments: [],
				byteSize: 0,
				fallbackAbortableTasks: n,
				errorDigest: null,
				contentState: je(),
				fallbackState: je(),
				contentPreamble: r,
				fallbackPreamble: i,
				trackedContentKeyPath: null,
				trackedFallbackNode: null,
				errorMessage: null,
				errorStack: null,
				errorComponentStack: null
			}, t !== null && (t.pendingTasks++, r = t.boundaries, r !== null && (e.allPendingTasks++, n.pendingTasks++, r.push(n)), e = t.inheritedHoistables, e !== null && Be(n.contentState, e)), n;
		}
		function Ot(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
			e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++, p !== null && p.pendingTasks++;
			var _ = {
				replay: null,
				node: n,
				childIndex: r,
				ping: function() {
					return Et(e, _);
				},
				blockedBoundary: i,
				blockedSegment: a,
				blockedPreamble: o,
				hoistableState: s,
				abortSet: c,
				keyPath: l,
				formatContext: u,
				context: d,
				treeContext: f,
				row: p,
				componentStack: m,
				thenableState: t
			};
			return _.debugTask = g, c.add(_), _;
		}
		function kt(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
			e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, f !== null && f.pendingTasks++, n.pendingTasks++;
			var g = {
				replay: n,
				node: r,
				childIndex: i,
				ping: function() {
					return Et(e, g);
				},
				blockedBoundary: a,
				blockedSegment: null,
				blockedPreamble: null,
				hoistableState: o,
				abortSet: s,
				keyPath: c,
				formatContext: l,
				context: u,
				treeContext: d,
				row: f,
				componentStack: p,
				thenableState: t
			};
			return g.debugTask = h, s.add(g), g;
		}
		function At(e, t, n, r, i, a) {
			return {
				status: _s,
				parentFlushed: !1,
				id: -1,
				index: t,
				chunks: [],
				children: [],
				preambleChildren: [],
				parentFormatContext: r,
				boundary: n,
				lastPushedText: i,
				textEmbedded: a
			};
		}
		function jt() {
			if (Ko === null || Ko.componentStack === null) return "";
			var e = Ko.componentStack;
			try {
				var t = "";
				if (typeof e.type == "string") t += yt(e.type);
				else if (typeof e.type == "function") {
					if (!e.owner) {
						var n = t, r = e.type, i = r ? r.displayName || r.name : "", a = i ? yt(i) : "";
						t = n + a;
					}
				} else e.owner || (t += xt(e.type));
				for (; e;) n = null, e.debugStack == null ? (a = e, a.stack != null && (n = typeof a.stack == "string" ? a.stack : a.stack = vt(a.stack))) : n = vt(e.debugStack), (e = e.owner) && n && (t += "\n" + n);
				var o = t;
			} catch (e) {
				o = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return o;
		}
		function Mt(e, t) {
			if (t != null) for (var n = t.length - 1; 0 <= n; n--) {
				var r = t[n];
				if (typeof r.name == "string" || typeof r.time == "number") break;
				if (r.awaited != null) {
					var i = r.debugStack == null ? r.awaited : r;
					if (i.debugStack !== void 0) {
						e.componentStack = {
							parent: e.componentStack,
							type: r,
							owner: i.owner,
							stack: i.debugStack
						}, e.debugTask = i.debugTask;
						break;
					}
				}
			}
		}
		function Nt(e, t) {
			if (t != null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				typeof r.name == "string" && r.debugStack !== void 0 && (e.componentStack = {
					parent: e.componentStack,
					type: r,
					owner: r.owner,
					stack: r.debugStack
				}, e.debugTask = r.debugTask);
			}
		}
		function Pt(e) {
			var t = e.node;
			if (typeof t == "object" && t) switch (t.$$typeof) {
				case An:
					var n = t.type, r = t._owner, i = t._debugStack;
					Nt(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
						parent: e.componentStack,
						type: n,
						owner: r,
						stack: i
					};
					break;
				case Vn:
					Nt(e, t._debugInfo);
					break;
				default: typeof t.then == "function" && Nt(e, t._debugInfo);
			}
		}
		function Ft(e) {
			return e === null ? null : {
				parent: e.parent,
				type: "Suspense Fallback",
				owner: e.owner,
				stack: e.stack
			};
		}
		function It(e) {
			var t = {};
			return e && Object.defineProperty(t, "componentStack", {
				configurable: !0,
				enumerable: !0,
				get: function() {
					try {
						var n = "", r = e;
						do
							n += xt(r.type), r = r.parent;
						while (r);
						var i = n;
					} catch (e) {
						i = "\nError generating stack: " + e.message + "\n" + e.stack;
					}
					return Object.defineProperty(t, "componentStack", { value: i }), i;
				}
			}), t;
		}
		function Lt(e, t, n, r, i) {
			e.errorDigest = t, n instanceof Error ? (t = String(n.message), n = String(n.stack)) : (t = typeof n == "object" && n ? l(n) : String(n), n = null), i = i ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = i + t, e.errorStack = n === null ? null : i + n, e.errorComponentStack = r.componentStack;
		}
		function Rt(e, t, n, r) {
			if (e = e.onError, t = r ? r.run(e.bind(null, t, n)) : e(t, n), t != null && typeof t != "string") console.error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"%s\" instead", typeof t);
			else return t;
		}
		function zt(e, t, n, r) {
			n = e.onShellError;
			var i = e.onFatalError;
			r ? (r.run(n.bind(null, t)), r.run(i.bind(null, t))) : (n(t), i(t)), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = Cs, e.destination.destroy(t));
		}
		function Y(e, t) {
			Bt(e, t.next, t.hoistables);
		}
		function Bt(e, t, n) {
			for (; t !== null;) {
				n !== null && (Be(t.hoistables, n), t.inheritedHoistables = n);
				var r = t.boundaries;
				if (r !== null) {
					t.boundaries = null;
					for (var i = 0; i < r.length; i++) {
						var a = r[i];
						n !== null && Be(a.contentState, n), un(e, a, null, null);
					}
				}
				if (t.pendingTasks--, 0 < t.pendingTasks) break;
				n = t.hoistables, t = t.next;
			}
		}
		function Vt(e, t) {
			var n = t.boundaries;
			if (n !== null && t.pendingTasks === n.length) {
				for (var r = !0, i = 0; i < n.length; i++) {
					var a = n[i];
					if (a.pendingTasks !== 1 || a.parentFlushed || St(e, a)) {
						r = !1;
						break;
					}
				}
				r && Bt(e, t, t.hoistables);
			}
		}
		function Ht(e) {
			var t = {
				pendingTasks: 1,
				boundaries: null,
				hoistables: je(),
				inheritedHoistables: null,
				together: !1,
				next: null
			};
			return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
		}
		function Ut(e, t, n, r, i) {
			var a = t.keyPath, o = t.treeContext, s = t.row, c = t.componentStack, l = t.debugTask;
			Nt(t, t.node.props.children._debugInfo), t.keyPath = n, n = r.length;
			var u = null;
			if (t.replay !== null) {
				var d = t.replay.slots;
				if (typeof d == "object" && d) for (var f = 0; f < n; f++) {
					var p = i !== "backwards" && i !== "unstable_legacy-backwards" ? f : n - 1 - f, m = r[p];
					t.row = u = Ht(u), t.treeContext = G(o, n, p);
					var h = d[p];
					typeof h == "number" ? (qt(e, t, h, m, p), delete d[p]) : Q(e, t, m, p), --u.pendingTasks === 0 && Y(e, u);
				}
				else for (d = 0; d < n; d++) f = i !== "backwards" && i !== "unstable_legacy-backwards" ? d : n - 1 - d, p = r[f], Zt(e, t, p), t.row = u = Ht(u), t.treeContext = G(o, n, f), Q(e, t, p, f), --u.pendingTasks === 0 && Y(e, u);
			} else if (i !== "backwards" && i !== "unstable_legacy-backwards") for (i = 0; i < n; i++) d = r[i], Zt(e, t, d), t.row = u = Ht(u), t.treeContext = G(o, n, i), Q(e, t, d, i), --u.pendingTasks === 0 && Y(e, u);
			else {
				for (i = t.blockedSegment, d = i.children.length, f = i.chunks.length, p = n - 1; 0 <= p; p--) {
					m = r[p], t.row = u = Ht(u), t.treeContext = G(o, n, p), h = At(e, f, null, t.formatContext, p === 0 ? i.lastPushedText : !0, !0), i.children.splice(d, 0, h), t.blockedSegment = h, Zt(e, t, m);
					try {
						Q(e, t, m, p), Ue(h.chunks, e.renderState, h.lastPushedText, h.textEmbedded), h.status = vs, --u.pendingTasks === 0 && Y(e, u);
					} catch (t) {
						throw h.status = e.status === 12 ? bs : xs, t;
					}
				}
				t.blockedSegment = i, i.lastPushedText = !1;
			}
			s !== null && u !== null && 0 < u.pendingTasks && (s.pendingTasks++, u.next = s), t.treeContext = o, t.row = s, t.keyPath = a, t.componentStack = c, t.debugTask = l;
		}
		function Wt(e, t, n, r, i, a) {
			var o = t.thenableState;
			for (t.thenableState = null, Do = {}, Oo = t, ko = e, Ao = n, Ho = !1, Io = Fo = 0, Lo = -1, Ro = 0, zo = o, e = ss(r, i, a); Po;) Po = !1, Io = Fo = 0, Lo = -1, Ro = 0, Vo += 1, Mo = null, e = r(i, a);
			return rt(), e;
		}
		function Gt(e, t, n, r, i, a, o) {
			var s = !1;
			if (a !== 0 && e.formState !== null) {
				var c = t.blockedSegment;
				if (c !== null) {
					s = !0, c = c.chunks;
					for (var l = 0; l < a; l++) l === o ? c.push("<!--F!-->") : c.push("<!--F-->");
				}
			}
			a = t.keyPath, t.keyPath = n, i ? (n = t.treeContext, t.treeContext = G(n, 1, 0), Q(e, t, r, -1), t.treeContext = n) : s ? Q(e, t, r, -1) : X(e, t, r, -1), t.keyPath = a;
		}
		function Kt(e, t, n, r, a, o) {
			if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
				var s = a;
				if ("ref" in a) for (var c in s = {}, a) c !== "ref" && (s[c] = a[c]);
				var l = r.defaultProps;
				if (l) for (var u in s === a && (s = Qn({}, s, a)), l) s[u] === void 0 && (s[u] = l[u]);
				var d = s, f = io, p = r.contextType;
				if ("contextType" in r && p !== null && (p === void 0 || p.$$typeof !== In) && !_o.has(r)) {
					_o.add(r);
					var m = p === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p == "object" ? p.$$typeof === Fn ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}." : " However, it is set to a " + typeof p + ".";
					console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", U(r) || "Component", m);
				}
				typeof p == "object" && p && (f = p._currentValue2);
				var h = new r(d, f);
				if (typeof r.getDerivedStateFromProps == "function" && (h.state === null || h.state === void 0)) {
					var g = U(r) || "Component";
					lo.has(g) || (lo.add(g), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", g, h.state === null ? "null" : "undefined", g));
				}
				if (typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
					var _ = null, v = null, y = null;
					if (typeof h.componentWillMount == "function" && !0 !== h.componentWillMount.__suppressDeprecationWarning ? _ = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (_ = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && !0 !== h.componentWillReceiveProps.__suppressDeprecationWarning ? v = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (v = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && !0 !== h.componentWillUpdate.__suppressDeprecationWarning ? y = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), _ !== null || v !== null || y !== null) {
						var b = U(r) || "Component", x = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						fo.has(b) || (fo.add(b), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", b, x, _ === null ? "" : "\n  " + _, v === null ? "" : "\n  " + v, y === null ? "" : "\n  " + y));
					}
				}
				var S = U(r) || "Component";
				h.render || (r.prototype && typeof r.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", S) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", S)), !h.getInitialState || h.getInitialState.isReactClassApproved || h.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", S), h.getDefaultProps && !h.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", S), h.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", S), r.childContextTypes && !go.has(r) && (go.add(r), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", S)), r.contextTypes && !ho.has(r) && (ho.add(r), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", S)), typeof h.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", S), r.prototype && r.prototype.isPureReactComponent && h.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", U(r) || "A pure component"), typeof h.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", S), typeof h.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", S), typeof h.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", S), typeof h.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", S);
				var C = h.props !== d;
				h.props !== void 0 && C && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", S), h.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", S, S), typeof h.getSnapshotBeforeUpdate != "function" || typeof h.componentDidUpdate == "function" || uo.has(r) || (uo.add(r), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", U(r))), typeof h.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", S), typeof h.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", S), typeof r.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", S);
				var w = h.state;
				w && (typeof w != "object" || Jn(w)) && console.error("%s.state: must be set to an object or null", S), typeof h.getChildContext == "function" && typeof r.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", S);
				var T = h.state === void 0 ? null : h.state;
				h.updater = yo, h.props = d, h.state = T;
				var E = {
					queue: [],
					replace: !1
				};
				h._reactInternals = E;
				var D = r.contextType;
				if (h.context = typeof D == "object" && D ? D._currentValue2 : io, h.state === d) {
					var O = U(r) || "Component";
					po.has(O) || (po.add(O), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", O));
				}
				var A = r.getDerivedStateFromProps;
				if (typeof A == "function") {
					var N = A(d, T);
					if (N === void 0) {
						var P = U(r) || "Component";
						mo.has(P) || (mo.add(P), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", P));
					}
					h.state = N == null ? T : Qn({}, T, N);
				}
				if (typeof r.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function")) {
					var F = h.state;
					if (typeof h.componentWillMount == "function") {
						if (!0 !== h.componentWillMount.__suppressDeprecationWarning) {
							var ee = U(r) || "Unknown";
							co[ee] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", ee), co[ee] = !0);
						}
						h.componentWillMount();
					}
					if (typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), F !== h.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", U(r) || "Component"), yo.enqueueReplaceState(h, h.state, null)), E.queue !== null && 0 < E.queue.length) {
						var I = E.queue, L = E.replace;
						if (E.queue = null, E.replace = !1, L && I.length === 1) h.state = I[0];
						else {
							for (var R = L ? I[0] : h.state, z = !0, te = +!!L; te < I.length; te++) {
								var ne = I[te], B = typeof ne == "function" ? ne.call(h, R, d, void 0) : ne;
								B != null && (z ? (z = !1, R = Qn({}, R, B)) : Qn(R, B));
							}
							h.state = R;
						}
					} else E.queue = null;
				}
				var re = ls(h);
				if (e.status === 12) throw null;
				h.props !== d && (ks || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", U(r) || "a component"), ks = !0);
				var ie = t.keyPath;
				t.keyPath = n, X(e, t, re, -1), t.keyPath = ie;
			} else {
				if (r.prototype && typeof r.prototype.render == "function") {
					var ae = U(r) || "Unknown";
					Ts[ae] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", ae, ae), Ts[ae] = !0);
				}
				var oe = Wt(e, t, n, r, a, void 0);
				if (e.status === 12) throw null;
				var se = Fo !== 0, ce = Io, le = Lo;
				if (r.contextTypes) {
					var V = U(r) || "Unknown";
					Es[V] || (Es[V] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", V));
				}
				if (r && r.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", r.displayName || r.name || "Component"), typeof r.getDerivedStateFromProps == "function") {
					var ue = U(r) || "Unknown";
					Os[ue] || (console.error("%s: Function components do not support getDerivedStateFromProps.", ue), Os[ue] = !0);
				}
				if (typeof r.contextType == "object" && r.contextType !== null) {
					var pe = U(r) || "Unknown";
					Ds[pe] || (console.error("%s: Function components do not support contextType.", pe), Ds[pe] = !0);
				}
				Gt(e, t, n, oe, se, ce, le);
			}
			else if (typeof r == "string") {
				var me = t.blockedSegment;
				if (me === null) {
					var he = a.children, ge = t.formatContext, _e = t.keyPath;
					t.formatContext = k(ge, r, a), t.keyPath = n, Q(e, t, he, -1), t.formatContext = ge, t.keyPath = _e;
				} else {
					var ve = de(me.chunks, r, a, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, me.lastPushedText);
					me.lastPushedText = !1;
					var ye = t.formatContext, be = t.keyPath;
					if (t.keyPath = n, (t.formatContext = k(ye, r, a)).insertionMode === Yr) {
						var xe = At(e, 0, null, t.formatContext, !1, !1);
						me.preambleChildren.push(xe), t.blockedSegment = xe;
						try {
							xe.status = 6, Q(e, t, ve, -1), Ue(xe.chunks, e.renderState, xe.lastPushedText, xe.textEmbedded), xe.status = vs;
						} finally {
							t.blockedSegment = me;
						}
					} else Q(e, t, ve, -1);
					t.formatContext = ye, t.keyPath = be;
					a: {
						var Se = me.chunks, Ce = e.resumableState;
						switch (r) {
							case "title":
							case "style":
							case "script":
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr": break a;
							case "body":
								if (ye.insertionMode <= qr) {
									Ce.hasBody = !0;
									break a;
								}
								break;
							case "html":
								if (ye.insertionMode === Kr) {
									Ce.hasHtml = !0;
									break a;
								}
								break;
							case "head": if (ye.insertionMode <= qr) break a;
						}
						Se.push(fe(r));
					}
					me.lastPushedText = !1;
				}
			} else {
				switch (r) {
					case Wn:
					case Nn:
					case Pn:
					case Mn:
						var we = t.keyPath;
						t.keyPath = n, X(e, t, a.children, -1), t.keyPath = we;
						return;
					case Un:
						var Te = t.blockedSegment;
						if (Te === null) {
							if (a.mode !== "hidden") {
								var Ee = t.keyPath;
								t.keyPath = n, Q(e, t, a.children, -1), t.keyPath = Ee;
							}
						} else if (a.mode !== "hidden") {
							e.renderState.generateStaticMarkup || Te.chunks.push("<!--&-->"), Te.lastPushedText = !1;
							var De = t.keyPath;
							t.keyPath = n, Q(e, t, a.children, -1), t.keyPath = De, e.renderState.generateStaticMarkup || Te.chunks.push("<!--/&-->"), Te.lastPushedText = !1;
						}
						return;
					case zn:
						a: {
							var Oe = a.children, ke = a.revealOrder;
							if (ke === "forwards" || ke === "backwards" || ke === "unstable_legacy-backwards") {
								if (Jn(Oe)) {
									Ut(e, t, n, Oe, ke);
									break a;
								}
								var Ae = i(Oe);
								if (Ae) {
									var je = Ae.call(Oe);
									if (je) {
										Yt(t, Oe, -1, je, Ae);
										var Me = je.next();
										if (!Me.done) {
											var Ne = [];
											do
												Ne.push(Me.value), Me = je.next();
											while (!Me.done);
											Ut(e, t, n, Oe, ke);
										}
										break a;
									}
								}
							}
							if (ke === "together") {
								var Pe = t.keyPath, Fe = t.row, H = t.row = Ht(null);
								H.boundaries = [], H.together = !0, t.keyPath = n, X(e, t, Oe, -1), --H.pendingTasks === 0 && Y(e, H), t.keyPath = Pe, t.row = Fe, Fe !== null && 0 < H.pendingTasks && (Fe.pendingTasks++, H.next = Fe);
							} else {
								var Ie = t.keyPath;
								t.keyPath = n, X(e, t, Oe, -1), t.keyPath = Ie;
							}
						}
						return;
					case Kn:
					case Hn: throw Error("ReactDOMServer does not yet support scope components.");
					case Rn:
						a: if (t.replay !== null) {
							var Le = t.keyPath, Re = t.formatContext, ze = t.row;
							t.keyPath = n, t.formatContext = M(e.resumableState, Re), t.row = null;
							var Be = a.children;
							try {
								Q(e, t, Be, -1);
							} finally {
								t.keyPath = Le, t.formatContext = Re, t.row = ze;
							}
						} else {
							var Ve = t.keyPath, He = t.formatContext, We = t.row, Ge = t.blockedBoundary, Ke = t.blockedPreamble, qe = t.hoistableState, Je = t.blockedSegment, W = a.fallback, Ye = a.children, Xe = /* @__PURE__ */ new Set(), G = Dt(e, t.row, Xe, null, null);
							e.trackedPostpones !== null && (G.trackedContentKeyPath = n);
							var Ze = At(e, Je.chunks.length, G, t.formatContext, !1, !1);
							Je.children.push(Ze), Je.lastPushedText = !1;
							var K = At(e, 0, null, t.formatContext, !1, !1);
							if (K.parentFlushed = !0, e.trackedPostpones !== null) {
								var Qe = t.componentStack, $e = [
									n[0],
									"Suspense Fallback",
									n[2]
								], et = [
									$e[1],
									$e[2],
									[],
									null
								];
								e.trackedPostpones.workingMap.set($e, et), G.trackedFallbackNode = et, t.blockedSegment = Ze, t.blockedPreamble = G.fallbackPreamble, t.keyPath = $e, t.formatContext = j(e.resumableState, He), t.componentStack = Ft(Qe), Ze.status = 6;
								try {
									Q(e, t, W, -1), Ue(Ze.chunks, e.renderState, Ze.lastPushedText, Ze.textEmbedded), Ze.status = vs;
								} catch (t) {
									throw Ze.status = e.status === 12 ? bs : xs, t;
								} finally {
									t.blockedSegment = Je, t.blockedPreamble = Ke, t.keyPath = Ve, t.formatContext = He;
								}
								var tt = Ot(e, null, Ye, -1, G, K, G.contentPreamble, G.contentState, t.abortSet, n, M(e.resumableState, t.formatContext), t.context, t.treeContext, null, Qe, io, t.debugTask);
								Pt(tt), e.pingedTasks.push(tt);
							} else {
								t.blockedBoundary = G, t.blockedPreamble = G.contentPreamble, t.hoistableState = G.contentState, t.blockedSegment = K, t.keyPath = n, t.formatContext = M(e.resumableState, He), t.row = null, K.status = 6;
								try {
									if (Q(e, t, Ye, -1), Ue(K.chunks, e.renderState, K.lastPushedText, K.textEmbedded), K.status = vs, ln(G, K), G.pendingTasks === 0 && G.status === _s) {
										if (G.status = vs, !St(e, G)) {
											We !== null && --We.pendingTasks === 0 && Y(e, We), e.pendingRootTasks === 0 && t.blockedPreamble && mn(e);
											break a;
										}
									} else We !== null && We.together && Vt(e, We);
								} catch (n) {
									if (G.status = gs, e.status === 12) {
										K.status = bs;
										var q = e.fatalError;
									} else K.status = xs, q = n;
									var J = It(t.componentStack);
									Lt(G, Rt(e, q, J, t.debugTask), q, J, !1), en(e, G);
								} finally {
									t.blockedBoundary = Ge, t.blockedPreamble = Ke, t.hoistableState = qe, t.blockedSegment = Je, t.keyPath = Ve, t.formatContext = He, t.row = We;
								}
								var nt = Ot(e, null, W, -1, Ge, Ze, G.fallbackPreamble, G.fallbackState, Xe, [
									n[0],
									"Suspense Fallback",
									n[2]
								], j(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Ft(t.componentStack), io, t.debugTask);
								Pt(nt), e.pingedTasks.push(nt);
							}
						}
						return;
				}
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case Ln:
						if ("ref" in a) {
							var rt = {};
							for (var it in a) it !== "ref" && (rt[it] = a[it]);
						} else rt = a;
						Gt(e, t, n, Wt(e, t, n, r.render, rt, o), Fo !== 0, Io, Lo);
						return;
					case Bn:
						Kt(e, t, n, r.type, a, o);
						return;
					case In:
						var at = a.value, ot = a.children, st = t.context, ct = t.keyPath, lt = r._currentValue2;
						r._currentValue2 = at, r._currentRenderer2 !== void 0 && r._currentRenderer2 !== null && r._currentRenderer2 !== ao && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer2 = ao;
						var ut = oo, dt = {
							parent: ut,
							depth: ut === null ? 0 : ut.depth + 1,
							context: r,
							parentValue: lt,
							value: at
						};
						oo = dt, t.context = dt, t.keyPath = n, X(e, t, ot, -1);
						var ft = oo;
						if (ft === null) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
						ft.context !== r && console.error("The parent context is not the expected context. This is probably a bug in React."), ft.context._currentValue2 = ft.parentValue, r._currentRenderer2 !== void 0 && r._currentRenderer2 !== null && r._currentRenderer2 !== ao && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer2 = ao, t.context = oo = ft.parent, t.keyPath = ct, st !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
						return;
					case Fn:
						var pt = r._context, mt = a.children;
						typeof mt != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
						var ht = mt(pt._currentValue2), gt = t.keyPath;
						t.keyPath = n, X(e, t, ht, -1), t.keyPath = gt;
						return;
					case Vn:
						var _t = ds(r);
						if (e.status === 12) throw null;
						Kt(e, t, n, _t, a, o);
						return;
				}
				var vt = "";
				throw (r === void 0 || typeof r == "object" && r && Object.keys(r).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((r == null ? r : typeof r) + "." + vt));
			}
		}
		function qt(e, t, n, r, i) {
			var a = t.replay, o = t.blockedBoundary, s = At(e, 0, null, t.formatContext, !1, !1);
			s.id = n, s.parentFlushed = !0;
			try {
				t.replay = null, t.blockedSegment = s, Q(e, t, r, i), s.status = vs, o === null ? e.completedRootSegment = s : (ln(o, s), o.parentFlushed && e.partialBoundaries.push(o));
			} finally {
				t.replay = a, t.blockedSegment = null;
			}
		}
		function Jt(e, t, n, r, i, a, o, s, c, l) {
			a = l.nodes;
			for (var u = 0; u < a.length; u++) {
				var d = a[u];
				if (i === d[1]) {
					if (d.length === 4) {
						if (r !== null && r !== d[0]) throw Error("Expected the resume to render <" + d[0] + "> in this slot but instead it rendered <" + r + ">. The tree doesn't match so React will fallback to client rendering.");
						var f = d[2];
						r = d[3], i = t.node, t.replay = {
							nodes: f,
							slots: r,
							pendingTasks: 1
						};
						try {
							if (Kt(e, t, n, o, s, c), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (d) {
							if (typeof d == "object" && d && (d === wo || typeof d.then == "function")) throw t.node === i ? t.replay = l : a.splice(u, 1), d;
							t.replay.pendingTasks--, o = It(t.componentStack), s = e, e = t.blockedBoundary, n = d, c = r, r = Rt(s, n, o, t.debugTask), rn(s, e, f, c, n, r, o, !1);
						}
						t.replay = l;
					} else {
						if (o !== Rn) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (U(o) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
						a: {
							l = void 0, r = d[5], o = d[2], c = d[3], i = d[4] === null ? [] : d[4][2], d = d[4] === null ? null : d[4][3];
							var p = t.keyPath, m = t.formatContext, h = t.row, g = t.replay, _ = t.blockedBoundary, v = t.hoistableState, y = s.children, b = s.fallback, x = /* @__PURE__ */ new Set();
							s = Dt(e, t.row, x, null, null), s.parentFlushed = !0, s.rootSegmentID = r, t.blockedBoundary = s, t.hoistableState = s.contentState, t.keyPath = n, t.formatContext = M(e.resumableState, m), t.row = null, t.replay = {
								nodes: o,
								slots: c,
								pendingTasks: 1
							};
							try {
								if (Q(e, t, y, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
								if (t.replay.pendingTasks--, s.pendingTasks === 0 && s.status === _s) {
									s.status = vs, e.completedBoundaries.push(s);
									break a;
								}
							} catch (n) {
								s.status = gs, f = It(t.componentStack), l = Rt(e, n, f, t.debugTask), Lt(s, l, n, f, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(s);
							} finally {
								t.blockedBoundary = _, t.hoistableState = v, t.replay = g, t.keyPath = p, t.formatContext = m, t.row = h;
							}
							s = kt(e, null, {
								nodes: i,
								slots: d,
								pendingTasks: 0
							}, b, -1, _, s.fallbackState, x, [
								n[0],
								"Suspense Fallback",
								n[2]
							], j(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Ft(t.componentStack), io, t.debugTask), Pt(s), e.pingedTasks.push(s);
						}
					}
					a.splice(u, 1);
					break;
				}
			}
		}
		function Yt(e, t, n, r, i) {
			r === t ? (n !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(r) !== "[object Generator]") && (As || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), As = !0) : t.entries !== i || js || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), js = !0);
		}
		function X(e, t, n, r) {
			t.replay !== null && typeof t.replay.slots == "number" ? qt(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, r = t.debugTask, Pt(t), Xt(e, t), t.componentStack = n, t.debugTask = r);
		}
		function Xt(e, t) {
			var n = t.node, r = t.childIndex;
			if (n !== null) {
				if (typeof n == "object") {
					switch (n.$$typeof) {
						case An:
							var a = n.type, o = n.key;
							n = n.props;
							var s = n.ref;
							s = s === void 0 ? null : s;
							var c = t.debugTask, l = U(a);
							o ??= r === -1 ? 0 : r;
							var u = [
								t.keyPath,
								l,
								o
							];
							t.replay === null ? c ? c.run(Kt.bind(null, e, t, u, a, n, s)) : Kt(e, t, u, a, n, s) : c ? c.run(Jt.bind(null, e, t, u, l, o, r, a, n, s, t.replay)) : Jt(e, t, u, l, o, r, a, n, s, t.replay);
							return;
						case jn: throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
						case Vn:
							if (a = ds(n), e.status === 12) throw null;
							X(e, t, a, r);
							return;
					}
					if (Jn(n)) {
						Qt(e, t, n, r);
						return;
					}
					if ((o = i(n)) && (a = o.call(n))) {
						if (Yt(t, n, r, a, o), n = a.next(), !n.done) {
							o = [];
							do
								o.push(n.value), n = a.next();
							while (!n.done);
							Qt(e, t, o, r);
						}
						return;
					}
					if (typeof n.then == "function") return t.thenableState = null, X(e, t, pt(n), r);
					if (n.$$typeof === In) return X(e, t, n._currentValue2, r);
					throw e = Object.prototype.toString.call(n), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
				}
				typeof n == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = He(t.chunks, n, e.renderState, t.lastPushedText))) : typeof n == "number" || typeof n == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = He(t.chunks, "" + n, e.renderState, t.lastPushedText))) : (typeof n == "function" && (e = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", e, e)), typeof n == "symbol" && console.error("Symbols are not valid as a React child.\n  %s", String(n)));
			}
		}
		function Zt(e, t, n) {
			if (typeof n == "object" && n && (n.$$typeof === An || n.$$typeof === jn) && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var r = e.didWarnForKey;
				if (r ??= e.didWarnForKey = /* @__PURE__ */ new WeakSet(), e = t.componentStack, e !== null && !r.has(e)) {
					r.add(e);
					var i = U(n.type);
					r = n._owner;
					var a = e.owner;
					if (e = "", a && a.type !== void 0) {
						var o = U(a.type);
						o && (e = "\n\nCheck the render method of `" + o + "`.");
					}
					e || i && (e = "\n\nCheck the top-level render call using <" + i + ">."), i = "", r != null && a !== r && (a = null, r.type === void 0 ? typeof r.name == "string" && (a = r.name) : a = U(r.type), a && (i = " It was passed a child from " + a + ".")), r = t.componentStack, t.componentStack = {
						parent: t.componentStack,
						type: n.type,
						owner: n._owner,
						stack: n._debugStack
					}, console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", e, i), t.componentStack = r;
				}
			}
		}
		function Qt(e, t, n, r) {
			var i = t.keyPath, a = t.componentStack, o = t.debugTask;
			if (Nt(t, t.node._debugInfo), r !== -1 && (t.keyPath = [
				t.keyPath,
				"Fragment",
				r
			], t.replay !== null)) {
				for (var s = t.replay, c = s.nodes, l = 0; l < c.length; l++) {
					var u = c[l];
					if (u[1] === r) {
						r = u[2], u = u[3], t.replay = {
							nodes: r,
							slots: u,
							pendingTasks: 1
						};
						try {
							if (Qt(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (i) {
							if (typeof i == "object" && i && (i === wo || typeof i.then == "function")) throw i;
							t.replay.pendingTasks--;
							var d = It(t.componentStack);
							n = t.blockedBoundary;
							var f = i, p = u;
							u = Rt(e, f, d, t.debugTask), rn(e, n, r, p, f, u, d, !1);
						}
						t.replay = s, c.splice(l, 1);
						break;
					}
				}
				t.keyPath = i, t.componentStack = a, t.debugTask = o;
				return;
			}
			if (s = t.treeContext, c = n.length, t.replay !== null && (l = t.replay.slots, typeof l == "object" && l)) {
				for (r = 0; r < c; r++) u = n[r], t.treeContext = G(s, c, r), f = l[r], typeof f == "number" ? (qt(e, t, f, u, r), delete l[r]) : Q(e, t, u, r);
				t.treeContext = s, t.keyPath = i, t.componentStack = a, t.debugTask = o;
				return;
			}
			for (l = 0; l < c; l++) r = n[l], Zt(e, t, r), t.treeContext = G(s, c, l), Q(e, t, r, l);
			t.treeContext = s, t.keyPath = i, t.componentStack = a, t.debugTask = o;
		}
		function Z(e, t, n) {
			if (n.status = Ss, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error("It should not be possible to postpone at the root. This is a bug in React.");
			var r = n.trackedFallbackNode, i = [], a = t.workingMap.get(e);
			return a === void 0 ? (n = [
				e[1],
				e[2],
				i,
				null,
				r,
				n.rootSegmentID
			], t.workingMap.set(e, n), Tn(n, e[0], t), n) : (a[4] = r, a[5] = n.rootSegmentID, a);
		}
		function $t(e, t, n, r) {
			r.status = Ss;
			var i = n.keyPath, a = n.blockedBoundary;
			if (a === null) r.id = e.nextSegmentId++, t.rootSlots = r.id, e.completedRootSegment !== null && (e.completedRootSegment.status = Ss);
			else {
				if (a !== null && a.status === _s) {
					var o = Z(e, t, a);
					if (a.trackedContentKeyPath === i && n.childIndex === -1) {
						r.id === -1 && (r.id = r.parentFlushed ? a.rootSegmentID : e.nextSegmentId++), o[3] = r.id;
						return;
					}
				}
				if (r.id === -1 && (r.id = r.parentFlushed && a !== null ? a.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) i === null ? t.rootSlots = r.id : (n = t.workingMap.get(i), n === void 0 ? (n = [
					i[1],
					i[2],
					[],
					r.id
				], Tn(n, i[0], t)) : n[3] = r.id);
				else {
					if (i === null) {
						if (e = t.rootSlots, e === null) e = t.rootSlots = {};
						else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					} else if (a = t.workingMap, o = a.get(i), o === void 0) e = {}, o = [
						i[1],
						i[2],
						[],
						e
					], a.set(i, o), Tn(o, i[0], t);
					else if (e = o[3], e === null) e = o[3] = {};
					else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					e[n.childIndex] = r.id;
				}
			}
		}
		function en(e, t) {
			e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
		}
		function tn(e, t, n) {
			return kt(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, io, t.debugTask);
		}
		function nn(e, t, n) {
			var r = t.blockedSegment, i = At(e, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
			return r.children.push(i), r.lastPushedText = !1, Ot(e, n, t.node, t.childIndex, t.blockedBoundary, i, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, io, t.debugTask);
		}
		function Q(e, t, n, r) {
			var i = t.formatContext, a = t.context, o = t.keyPath, s = t.treeContext, c = t.componentStack, l = t.debugTask, u = t.blockedSegment;
			if (u === null) {
				u = t.replay;
				try {
					return X(e, t, n, r);
				} catch (d) {
					if (rt(), n = d === wo ? $e() : d, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							r = d === wo ? nt() : null, e = tn(e, t, r).ping, n.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = u, t.debugTask = l, W(a);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							n = d === wo ? nt() : null, n = tn(e, t, n), e.pingedTasks.push(n), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = u, t.debugTask = l, W(a);
							return;
						}
					}
				}
			} else {
				var d = u.children.length, f = u.chunks.length;
				try {
					return X(e, t, n, r);
				} catch (r) {
					if (rt(), u.children.length = d, u.chunks.length = f, n = r === wo ? $e() : r, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							u = n, n = r === wo ? nt() : null, e = nn(e, t, n).ping, u.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.debugTask = l, W(a);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							u = r === wo ? nt() : null, u = nn(e, t, u), e.pingedTasks.push(u), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.debugTask = l, W(a);
							return;
						}
					}
				}
			}
			throw t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, W(a), n;
		}
		function $(e) {
			var t = e.blockedBoundary, n = e.blockedSegment;
			n !== null && (n.status = bs, un(this, t, e.row, n));
		}
		function rn(e, t, n, r, i, a, o, s) {
			for (var c = 0; c < n.length; c++) {
				var l = n[c];
				if (l.length === 4) rn(e, t, l[2], l[3], i, a, o, s);
				else {
					var u = e;
					l = l[5];
					var d = i, f = a, p = o, m = s, h = Dt(u, null, /* @__PURE__ */ new Set(), null, null);
					h.parentFlushed = !0, h.rootSegmentID = l, h.status = gs, Lt(h, f, d, p, m), h.parentFlushed && u.clientRenderedBoundaries.push(h);
				}
			}
			if (n.length = 0, r !== null) {
				if (t === null) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
				if (t.status !== gs && (t.status = gs, Lt(t, a, i, o, s), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof r == "object") for (var g in r) delete r[g];
			}
		}
		function an(e, t, n) {
			var r = e.blockedBoundary, i = e.blockedSegment;
			if (i !== null) {
				if (i.status === 6) return;
				i.status = bs;
			}
			var a = It(e.componentStack), o = e.node;
			if (typeof o == "object" && o && Mt(e, o._debugInfo), r === null) {
				if (t.status !== 13 && t.status !== Cs) {
					if (r = e.replay, r === null) {
						t.trackedPostpones !== null && i !== null ? (r = t.trackedPostpones, Rt(t, n, a, e.debugTask), $t(t, r, e, i), un(t, null, e.row, i)) : (Rt(t, n, a, e.debugTask), zt(t, n, a, e.debugTask));
						return;
					}
					r.pendingTasks--, r.pendingTasks === 0 && 0 < r.nodes.length && (i = Rt(t, n, a, null), rn(t, null, r.nodes, r.slots, n, i, a, !0)), t.pendingRootTasks--, t.pendingRootTasks === 0 && sn(t);
				}
			} else {
				if (o = t.trackedPostpones, r.status !== gs) {
					if (o !== null && i !== null) return Rt(t, n, a, e.debugTask), $t(t, o, e, i), r.fallbackAbortableTasks.forEach(function(e) {
						return an(e, t, n);
					}), r.fallbackAbortableTasks.clear(), un(t, r, e.row, i);
					r.status = gs, i = Rt(t, n, a, e.debugTask), r.status = gs, Lt(r, i, n, a, !0), en(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r);
				}
				r.pendingTasks--, a = r.row, a !== null && --a.pendingTasks === 0 && Y(t, a), r.fallbackAbortableTasks.forEach(function(e) {
					return an(e, t, n);
				}), r.fallbackAbortableTasks.clear();
			}
			e = e.row, e !== null && --e.pendingTasks === 0 && Y(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && cn(t);
		}
		function on(e, t) {
			try {
				var n = e.renderState, r = n.onHeaders;
				if (r) {
					var i = n.headers;
					if (i) {
						n.headers = null;
						var a = i.preconnects;
						if (i.fontPreloads && (a && (a += ", "), a += i.fontPreloads), i.highImagePreloads && (a && (a += ", "), a += i.highImagePreloads), !t) {
							var o = n.styles.values(), s = o.next();
							b: for (; 0 < i.remainingCapacity && !s.done; s = o.next()) for (var c = s.value.sheets.values(), l = c.next(); 0 < i.remainingCapacity && !l.done; l = c.next()) {
								var u = l.value, d = u.props, f = d.href, p = u.props, m = Pe(p.href, "style", {
									crossOrigin: p.crossOrigin,
									integrity: p.integrity,
									nonce: p.nonce,
									type: p.type,
									fetchPriority: p.fetchPriority,
									referrerPolicy: p.referrerPolicy,
									media: p.media
								});
								if (0 <= (i.remainingCapacity -= m.length + 2)) n.resets.style[f] = Vr, a && (a += ", "), a += m, n.resets.style[f] = typeof d.crossOrigin == "string" || typeof d.integrity == "string" ? [d.crossOrigin, d.integrity] : Vr;
								else break b;
							}
						}
						r(a ? { Link: a } : {});
					}
				}
			} catch (t) {
				Rt(e, t, {}, null);
			}
		}
		function sn(e) {
			e.trackedPostpones === null && on(e, !0), e.trackedPostpones === null && mn(e), e.onShellError = K, e = e.onShellReady, e();
		}
		function cn(e) {
			on(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== Ss), mn(e), e = e.onAllReady, e();
		}
		function ln(e, t) {
			if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
				var n = t.children[0];
				n.id = t.id, n.parentFlushed = !0, n.status !== vs && n.status !== bs && n.status !== xs || ln(e, n);
			} else e.completedSegments.push(t);
		}
		function un(e, t, n, r) {
			if (n !== null && (--n.pendingTasks === 0 ? Y(e, n) : n.together && Vt(e, n)), e.allPendingTasks--, t === null) {
				if (r !== null && r.parentFlushed) {
					if (e.completedRootSegment !== null) throw Error("There can only be one root segment. This is a bug in React.");
					e.completedRootSegment = r;
				}
				e.pendingRootTasks--, e.pendingRootTasks === 0 && sn(e);
			} else if (t.pendingTasks--, t.status !== gs) if (t.pendingTasks === 0) {
				if (t.status === _s && (t.status = vs), r !== null && r.parentFlushed && (r.status === vs || r.status === bs) && ln(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.status === vs) n = t.row, n !== null && Be(n.hoistables, t.contentState), St(e, t) || (t.fallbackAbortableTasks.forEach($, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && Y(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && mn(e);
				else if (t.status === Ss && (t = t.row, t !== null)) {
					if (e.trackedPostpones !== null) {
						n = e.trackedPostpones;
						var i = t.next;
						if (i !== null && (r = i.boundaries, r !== null)) for (i.boundaries = null, i = 0; i < r.length; i++) {
							var a = r[i];
							Z(e, n, a), un(e, a, null, null);
						}
					}
					--t.pendingTasks === 0 && Y(e, t);
				}
			} else r === null || !r.parentFlushed || r.status !== vs && r.status !== bs || (ln(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && Vt(e, t);
			e.allPendingTasks === 0 && cn(e);
		}
		function dn(e) {
			if (e.status !== Cs && e.status !== 13) {
				var t = oo, n = kr.H;
				kr.H = Wo;
				var r = kr.A;
				kr.A = qo;
				var i = ws;
				ws = e;
				var a = kr.getCurrentStack;
				kr.getCurrentStack = jt;
				var o = Go;
				Go = e.resumableState;
				try {
					var s = e.pingedTasks, c;
					for (c = 0; c < s.length; c++) {
						var l = e, u = s[c], d = u.blockedSegment;
						if (d === null) {
							var f = void 0, p = l;
							if (l = u, l.replay.pendingTasks !== 0) {
								W(l.context), f = Ko, Ko = l;
								try {
									if (typeof l.replay.slots == "number" ? qt(p, l, l.replay.slots, l.node, l.childIndex) : Xt(p, l), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
									l.replay.pendingTasks--, l.abortSet.delete(l), un(p, l.blockedBoundary, l.row, null);
								} catch (e) {
									rt();
									var m = e === wo ? $e() : e;
									if (typeof m == "object" && m && typeof m.then == "function") {
										var h = l.ping;
										m.then(h, h), l.thenableState = e === wo ? nt() : null;
									} else {
										l.replay.pendingTasks--, l.abortSet.delete(l);
										var g = It(l.componentStack), _ = void 0, v = p, y = l.blockedBoundary, b = p.status === 12 ? p.fatalError : m, x = g, S = l.replay.nodes, C = l.replay.slots;
										_ = Rt(v, b, x, l.debugTask), rn(v, y, S, C, b, _, x, !1), p.pendingRootTasks--, p.pendingRootTasks === 0 && sn(p), p.allPendingTasks--, p.allPendingTasks === 0 && cn(p);
									}
								} finally {
									Ko = f;
								}
							}
						} else if (p = f = void 0, _ = u, v = d, v.status === _s) {
							v.status = 6, W(_.context), p = Ko, Ko = _;
							var w = v.children.length, T = v.chunks.length;
							try {
								Xt(l, _), Ue(v.chunks, l.renderState, v.lastPushedText, v.textEmbedded), _.abortSet.delete(_), v.status = vs, un(l, _.blockedBoundary, _.row, v);
							} catch (e) {
								rt(), v.children.length = w, v.chunks.length = T;
								var E = e === wo ? $e() : l.status === 12 ? l.fatalError : e;
								if (l.status === 12 && l.trackedPostpones !== null) {
									var D = l.trackedPostpones, O = It(_.componentStack);
									_.abortSet.delete(_), Rt(l, E, O, _.debugTask), $t(l, D, _, v), un(l, _.blockedBoundary, _.row, v);
								} else if (typeof E == "object" && E && typeof E.then == "function") {
									v.status = _s, _.thenableState = e === wo ? nt() : null;
									var k = _.ping;
									E.then(k, k);
								} else {
									var A = It(_.componentStack);
									_.abortSet.delete(_), v.status = xs;
									var j = _.blockedBoundary, M = _.row, N = _.debugTask;
									if (M !== null && --M.pendingTasks === 0 && Y(l, M), l.allPendingTasks--, f = Rt(l, E, A, N), j === null) zt(l, E, A, N);
									else if (j.pendingTasks--, j.status !== gs) {
										j.status = gs, Lt(j, f, E, A, !1), en(l, j);
										var P = j.row;
										P !== null && --P.pendingTasks === 0 && Y(l, P), j.parentFlushed && l.clientRenderedBoundaries.push(j), l.pendingRootTasks === 0 && l.trackedPostpones === null && j.contentPreamble !== null && mn(l);
									}
									l.allPendingTasks === 0 && cn(l);
								}
							} finally {
								Ko = p;
							}
						}
					}
					s.splice(0, c), e.destination !== null && bn(e, e.destination);
				} catch (t) {
					s = {}, Rt(e, t, s, null), zt(e, t, s, null);
				} finally {
					Go = o, kr.H = n, kr.A = r, kr.getCurrentStack = a, n === Wo && W(t), ws = i;
				}
			}
		}
		function fn(e, t, n) {
			t.preambleChildren.length && n.push(t.preambleChildren);
			for (var r = !1, i = 0; i < t.children.length; i++) r = pn(e, t.children[i], n) || r;
			return r;
		}
		function pn(e, t, n) {
			var r = t.boundary;
			if (r === null) return fn(e, t, n);
			var i = r.contentPreamble, a = r.fallbackPreamble;
			if (i === null || a === null) return !1;
			switch (r.status) {
				case vs:
					if (pe(e.renderState, i), e.byteSize += r.byteSize, t = r.completedSegments[0], !t) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
					return fn(e, t, n);
				case Ss: if (e.trackedPostpones !== null) return !0;
				case gs: if (t.status === vs) return pe(e.renderState, a), fn(e, t, n);
				default: return !0;
			}
		}
		function mn(e) {
			if (e.completedRootSegment && e.completedPreambleSegments === null) {
				var t = [], n = e.byteSize, r = pn(e, e.completedRootSegment, t), i = e.renderState.preamble;
				!1 === r || i.headChunks && i.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
			}
		}
		function hn(e, t, n, r) {
			switch (n.parentFlushed = !0, n.status) {
				case _s: n.id = e.nextSegmentId++;
				case Ss: return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, t.push(ji), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push(Mi);
				case vs:
					n.status = ys;
					var i = !0, a = n.chunks, o = 0;
					n = n.children;
					for (var s = 0; s < n.length; s++) {
						for (i = n[s]; o < i.index; o++) t.push(a[o]);
						i = gn(e, t, i, r);
					}
					for (; o < a.length - 1; o++) t.push(a[o]);
					return o < a.length && (i = t.push(a[o])), i;
				case bs: return !0;
				default: throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
			}
		}
		function gn(e, t, n, r) {
			var i = n.boundary;
			if (i === null) return hn(e, t, n, r);
			if (i.parentFlushed = !0, i.status === gs) {
				var a = i.row;
				if (a !== null && --a.pendingTasks === 0 && Y(e, a), !e.renderState.generateStaticMarkup) {
					var o = i.errorDigest, s = i.errorMessage;
					a = i.errorStack, i = i.errorComponentStack, t.push(Ii), t.push(Ri), o && (t.push(Bi), o = w(o), t.push(o), t.push(zi)), s && (t.push(Vi), s = w(s), t.push(s), t.push(zi)), a && (t.push(Hi), a = w(a), t.push(a), t.push(zi)), i && (t.push(Ui), a = w(i), t.push(a), t.push(zi)), t.push(Wi);
				}
				return hn(e, t, n, r), e = e.renderState.generateStaticMarkup ? !0 : t.push(Li), e;
			}
			if (i.status !== vs) return i.status === _s && (i.rootSegmentID = e.nextSegmentId++), 0 < i.completedSegments.length && e.partialBoundaries.push(i), he(t, e.renderState, i.rootSegmentID), r && Be(r, i.fallbackState), hn(e, t, n, r), t.push(Li);
			if (!Ns && St(e, i) && Ms + i.byteSize > e.progressiveChunkSize) return i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), he(t, e.renderState, i.rootSegmentID), hn(e, t, n, r), t.push(Li);
			if (Ms += i.byteSize, r && Be(r, i.contentState), n = i.row, n !== null && St(e, i) && --n.pendingTasks === 0 && Y(e, n), e.renderState.generateStaticMarkup || t.push(Ni), n = i.completedSegments, n.length !== 1) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
			return gn(e, t, n[0], r), e = e.renderState.generateStaticMarkup ? !0 : t.push(Li), e;
		}
		function _n(e, t, n, r) {
			return ge(t, e.renderState, n.parentFormatContext, n.id), gn(e, t, n, r), _e(t, n.parentFormatContext);
		}
		function vn(e, t, n) {
			Ms = n.byteSize;
			for (var r = n.completedSegments, i = 0; i < r.length; i++) yn(e, t, n, r[i]);
			r.length = 0, r = n.row, r !== null && St(e, n) && --r.pendingTasks === 0 && Y(e, r), Se(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = n.rootSegmentID, n = n.contentState;
			var a = e.stylesToHoist;
			return e.stylesToHoist = !1, t.push(e.startInlineScript), t.push(di), a ? ((r.instructions & Ir) === Nr && (r.instructions |= Ir, t.push(wa)), (r.instructions & Fr) === Nr && (r.instructions |= Fr, t.push(ga)), (r.instructions & Lr) === Nr ? (r.instructions |= Lr, t.push(va)) : t.push(ya)) : ((r.instructions & Fr) === Nr && (r.instructions |= Fr, t.push(ga)), t.push(_a)), r = i.toString(16), t.push(e.boundaryPrefix), t.push(r), t.push(ba), t.push(e.segmentPrefix), t.push(r), a ? (t.push(xa), ke(t, n)) : t.push(Sa), n = t.push(Ca), me(t, e) && n;
		}
		function yn(e, t, n, r) {
			if (r.status === ys) return !0;
			var i = n.contentState, a = r.id;
			if (a === -1) {
				if ((r.id = n.rootSegmentID) === -1) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
				return _n(e, t, r, i);
			}
			return a === n.rootSegmentID ? _n(e, t, r, i) : (_n(e, t, r, i), n = e.resumableState, e = e.renderState, t.push(e.startInlineScript), t.push(di), (n.instructions & Pr) === Nr ? (n.instructions |= Pr, t.push(fa)) : t.push(pa), t.push(e.segmentPrefix), a = a.toString(16), t.push(a), t.push(ma), t.push(e.placeholderPrefix), t.push(a), t = t.push(ha), t);
		}
		function bn(e, t) {
			try {
				if (!(0 < e.pendingRootTasks)) {
					var n, r = e.completedRootSegment;
					if (r !== null) {
						if (r.status === Ss) return;
						var i = e.completedPreambleSegments;
						if (i === null) return;
						Ms = e.byteSize;
						var a = e.resumableState, o = e.renderState, s = o.preamble, c = s.htmlChunks, l = s.headChunks, u;
						if (c) {
							for (u = 0; u < c.length; u++) t.push(c[u]);
							if (l) for (u = 0; u < l.length; u++) t.push(l[u]);
							else {
								var d = ue("head");
								t.push(d), t.push(di);
							}
						} else if (l) for (u = 0; u < l.length; u++) t.push(l[u]);
						var f = o.charsetChunks;
						for (u = 0; u < f.length; u++) t.push(f[u]);
						f.length = 0, o.preconnects.forEach(Ce, t), o.preconnects.clear();
						var p = o.viewportChunks;
						for (u = 0; u < p.length; u++) t.push(p[u]);
						p.length = 0, o.fontPreloads.forEach(Ce, t), o.fontPreloads.clear(), o.highImagePreloads.forEach(Ce, t), o.highImagePreloads.clear(), Hr = o, o.styles.forEach(Te, t), Hr = null;
						var m = o.importMapChunks;
						for (u = 0; u < m.length; u++) t.push(m[u]);
						m.length = 0, o.bootstrapScripts.forEach(Ce, t), o.scripts.forEach(Ce, t), o.scripts.clear(), o.bulkPreloads.forEach(Ce, t), o.bulkPreloads.clear(), a.instructions |= Rr;
						var h = o.hoistableChunks;
						for (u = 0; u < h.length; u++) t.push(h[u]);
						for (a = h.length = 0; a < i.length; a++) {
							var g = i[a];
							for (o = 0; o < g.length; o++) gn(e, t, g[o], null);
						}
						var _ = e.renderState.preamble, v = _.headChunks;
						if (_.htmlChunks || v) {
							var y = fe("head");
							t.push(y);
						}
						var b = _.bodyChunks;
						if (b) for (i = 0; i < b.length; i++) t.push(b[i]);
						gn(e, t, r, null), e.completedRootSegment = null;
						var x = e.renderState;
						if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
							var S = e.resumableState;
							if ((S.instructions & zr) === Nr) {
								if (S.instructions |= zr, t.push(x.startInlineScript), (S.instructions & Rr) === Nr) {
									S.instructions |= Rr;
									var C = "_" + S.idPrefix + "R_";
									t.push(Wa);
									var T = w(C);
									t.push(T), t.push(ci);
								}
								t.push(di), t.push(Ai), t.push(Ur);
							}
						}
						me(t, x);
					}
					var E = e.renderState;
					r = 0;
					var D = E.viewportChunks;
					for (r = 0; r < D.length; r++) t.push(D[r]);
					D.length = 0, E.preconnects.forEach(Ce, t), E.preconnects.clear(), E.fontPreloads.forEach(Ce, t), E.fontPreloads.clear(), E.highImagePreloads.forEach(Ce, t), E.highImagePreloads.clear(), E.styles.forEach(De, t), E.scripts.forEach(Ce, t), E.scripts.clear(), E.bulkPreloads.forEach(Ce, t), E.bulkPreloads.clear();
					var O = E.hoistableChunks;
					for (r = 0; r < O.length; r++) t.push(O[r]);
					O.length = 0;
					var k = e.clientRenderedBoundaries;
					for (n = 0; n < k.length; n++) {
						var A = k[n];
						E = t;
						var j = e.resumableState, M = e.renderState, N = A.rootSegmentID, P = A.errorDigest, F = A.errorMessage, ee = A.errorStack, I = A.errorComponentStack;
						E.push(M.startInlineScript), E.push(di), (j.instructions & Ir) === Nr ? (j.instructions |= Ir, E.push(Ta)) : E.push(Ea), E.push(M.boundaryPrefix);
						var L = N.toString(16);
						if (E.push(L), E.push(Da), P || F || ee || I) {
							E.push(Oa);
							var R = ve(P || "");
							E.push(R);
						}
						if (F || ee || I) {
							E.push(Oa);
							var z = ve(F || "");
							E.push(z);
						}
						if (ee || I) {
							E.push(Oa);
							var te = ve(ee || "");
							E.push(te);
						}
						if (I) {
							E.push(Oa);
							var ne = ve(I);
							E.push(ne);
						}
						var B = E.push(ka);
						if (!B) {
							e.destination = null, n++, k.splice(0, n);
							return;
						}
					}
					k.splice(0, n);
					var re = e.completedBoundaries;
					for (n = 0; n < re.length; n++) if (!vn(e, t, re[n])) {
						e.destination = null, n++, re.splice(0, n);
						return;
					}
					re.splice(0, n), Ns = !0;
					var ie = e.partialBoundaries;
					for (n = 0; n < ie.length; n++) {
						a: {
							k = e, A = t;
							var ae = ie[n];
							Ms = ae.byteSize;
							var oe = ae.completedSegments;
							for (B = 0; B < oe.length; B++) if (!yn(k, A, ae, oe[B])) {
								B++, oe.splice(0, B);
								var se = !1;
								break a;
							}
							oe.splice(0, B);
							var ce = ae.row;
							ce !== null && ce.together && ae.pendingTasks === 1 && (ce.pendingTasks === 1 ? Bt(k, ce, ce.hoistables) : ce.pendingTasks--), se = Se(A, ae.contentState, k.renderState);
						}
						if (!se) {
							e.destination = null, n++, ie.splice(0, n);
							return;
						}
					}
					ie.splice(0, n), Ns = !1;
					var le = e.completedBoundaries;
					for (n = 0; n < le.length; n++) if (!vn(e, t, le[n])) {
						e.destination = null, n++, le.splice(0, n);
						return;
					}
					le.splice(0, n);
				}
			} finally {
				Ns = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && (e.flushScheduled = !1, n = e.resumableState, n.hasBody && (ie = fe("body"), t.push(ie)), n.hasHtml && (n = fe("html"), t.push(n)), e.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = Cs, t.push(null), e.destination = null);
			}
		}
		function xn(e) {
			e.flushScheduled = e.destination !== null, dn(e), e.status === 10 && (e.status = 11), e.trackedPostpones === null && on(e, e.pendingRootTasks === 0);
		}
		function Sn(e) {
			if (!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null) {
				e.flushScheduled = !0;
				var t = e.destination;
				t ? bn(e, t) : e.flushScheduled = !1;
			}
		}
		function Cn(e, t) {
			if (e.status === 13) e.status = Cs, t.destroy(e.fatalError);
			else if (e.status !== Cs && e.destination === null) {
				e.destination = t;
				try {
					bn(e, t);
				} catch (n) {
					t = {}, Rt(e, n, t, null), zt(e, n, t, null);
				}
			}
		}
		function wn(e, t) {
			(e.status === 11 || e.status === 10) && (e.status = 12);
			try {
				var n = e.abortableTasks;
				if (0 < n.size) {
					var r = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
					e.fatalError = r, n.forEach(function(t) {
						var n = Ko, i = kr.getCurrentStack;
						Ko = t, kr.getCurrentStack = jt;
						try {
							an(t, e, r);
						} finally {
							Ko = n, kr.getCurrentStack = i;
						}
					}), n.clear();
				}
				e.destination !== null && bn(e, e.destination);
			} catch (n) {
				t = {}, Rt(e, n, t, null), zt(e, n, t, null);
			}
		}
		function Tn(e, t, n) {
			if (t === null) n.rootNodes.push(e);
			else {
				var r = n.workingMap, i = r.get(t);
				i === void 0 && (i = [
					t[1],
					t[2],
					[],
					null
				], r.set(t, i), Tn(i, t[0], n)), i[2].push(e);
			}
		}
		function En() {}
		function Dn(e, t, n, r) {
			var i = !1, a = null, o = "", s = !1;
			if (t = D(t ? t.identifierPrefix : void 0), e = Tt(e, t, Ve(t, n), O(Kr, null, 0, null), Infinity, En, void 0, function() {
				s = !0;
			}, void 0, void 0, void 0), xn(e), wn(e, r), Cn(e, {
				push: function(e) {
					return e !== null && (o += e), !0;
				},
				destroy: function(e) {
					i = !0, a = e;
				}
			}), i && a !== r) throw a;
			if (!s) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
			return o;
		}
		var On = e("react"), kn = e("react-dom"), An = Symbol.for("react.transitional.element"), jn = Symbol.for("react.portal"), Mn = Symbol.for("react.fragment"), Nn = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), Fn = Symbol.for("react.consumer"), In = Symbol.for("react.context"), Ln = Symbol.for("react.forward_ref"), Rn = Symbol.for("react.suspense"), zn = Symbol.for("react.suspense_list"), Bn = Symbol.for("react.memo"), Vn = Symbol.for("react.lazy"), Hn = Symbol.for("react.scope"), Un = Symbol.for("react.activity"), Wn = Symbol.for("react.legacy_hidden"), Gn = Symbol.for("react.memo_cache_sentinel"), Kn = Symbol.for("react.view_transition"), qn = Symbol.iterator, Jn = Array.isArray, Yn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Zn = Symbol.for("react.client.reference"), Qn = Object.assign, $n = Object.prototype.hasOwnProperty, er = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), tr = {}, nr = {}, rr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), ir = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), ar = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, or = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, sr = {}, cr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), lr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ur = !1, dr = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, fr = {}, pr = /^on./, mr = /^on[^A-Z]/, hr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), gr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), _r = /^(?:webkit|moz|o)[A-Z]/, vr = /^-ms-/, yr = /-(.)/g, br = /;\s*$/, xr = {}, Sr = {}, Cr = !1, wr = !1, Tr = /["'&<>]/, Er = /([A-Z])/g, Dr = /^ms-/, Or = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, kr = On.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ar = kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, jr = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), Mr = Ar.d;
		Ar.d = {
			f: Mr.f,
			r: Mr.r,
			D: function(e) {
				var t = ws || null;
				if (t) {
					var n = t.resumableState, r = t.renderState;
					if (typeof e == "string" && e) {
						if (!n.dnsResources.hasOwnProperty(e)) {
							n.dnsResources[e] = Br, n = r.headers;
							var i, a;
							(a = n && 0 < n.remainingCapacity) && (a = (i = "<" + Fe(e) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= i.length + 2))), a ? (r.resets.dns[e] = Br, n.preconnects && (n.preconnects += ", "), n.preconnects += i) : (i = [], ie(i, {
								href: e,
								rel: "dns-prefetch"
							}), r.preconnects.add(i));
						}
						Sn(t);
					}
				} else Mr.D(e);
			},
			C: function(e, t) {
				var n = ws || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (typeof e == "string" && e) {
						var a = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
						if (!r.connectResources[a].hasOwnProperty(e)) {
							r.connectResources[a][e] = Br, r = i.headers;
							var o, s;
							if (s = r && 0 < r.remainingCapacity) {
								if (s = "<" + Fe(e) + ">; rel=preconnect", typeof t == "string") {
									var c = Ie(t, "crossOrigin");
									s += "; crossorigin=\"" + c + "\"";
								}
								s = (o = s, 0 <= (r.remainingCapacity -= o.length + 2));
							}
							s ? (i.resets.connect[a][e] = Br, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (a = [], ie(a, {
								rel: "preconnect",
								href: e,
								crossOrigin: t
							}), i.preconnects.add(a));
						}
						Sn(n);
					}
				} else Mr.C(e, t);
			},
			L: function(e, t, n) {
				var r = ws || null;
				if (r) {
					var i = r.resumableState, a = r.renderState;
					if (t && e) {
						switch (t) {
							case "image":
								if (n) var o = n.imageSrcSet, s = n.imageSizes, c = n.fetchPriority;
								var l = o ? o + "\n" + (s || "") : e;
								if (i.imageResources.hasOwnProperty(l)) return;
								i.imageResources[l] = Vr, i = a.headers;
								var u;
								i && 0 < i.remainingCapacity && typeof o != "string" && c === "high" && (u = Pe(e, t, n), 0 <= (i.remainingCapacity -= u.length + 2)) ? (a.resets.image[l] = Vr, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (i = [], ie(i, Qn({
									rel: "preload",
									href: o ? void 0 : e,
									as: t
								}, n)), c === "high" ? a.highImagePreloads.add(i) : (a.bulkPreloads.add(i), a.preloads.images.set(l, i)));
								break;
							case "style":
								if (i.styleResources.hasOwnProperty(e)) return;
								o = [], ie(o, Qn({
									rel: "preload",
									href: e,
									as: t
								}, n)), i.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? Vr : [n.crossOrigin, n.integrity], a.preloads.stylesheets.set(e, o), a.bulkPreloads.add(o);
								break;
							case "script":
								if (i.scriptResources.hasOwnProperty(e)) return;
								o = [], a.preloads.scripts.set(e, o), a.bulkPreloads.add(o), ie(o, Qn({
									rel: "preload",
									href: e,
									as: t
								}, n)), i.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? Vr : [n.crossOrigin, n.integrity];
								break;
							default:
								if (i.unknownResources.hasOwnProperty(t)) {
									if (o = i.unknownResources[t], o.hasOwnProperty(e)) return;
								} else o = {}, i.unknownResources[t] = o;
								if (o[e] = Vr, (i = a.headers) && 0 < i.remainingCapacity && t === "font" && (l = Pe(e, t, n), 0 <= (i.remainingCapacity -= l.length + 2))) a.resets.font[e] = Vr, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += l;
								else switch (i = [], e = Qn({
									rel: "preload",
									href: e,
									as: t
								}, n), ie(i, e), t) {
									case "font":
										a.fontPreloads.add(i);
										break;
									default: a.bulkPreloads.add(i);
								}
						}
						Sn(r);
					}
				} else Mr.L(e, t, n);
			},
			m: function(e, t) {
				var n = ws || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = t && typeof t.as == "string" ? t.as : "script";
						switch (a) {
							case "script":
								if (r.moduleScriptResources.hasOwnProperty(e)) return;
								a = [], r.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? Vr : [t.crossOrigin, t.integrity], i.preloads.moduleScripts.set(e, a);
								break;
							default:
								if (r.moduleUnknownResources.hasOwnProperty(a)) {
									var o = r.unknownResources[a];
									if (o.hasOwnProperty(e)) return;
								} else o = {}, r.moduleUnknownResources[a] = o;
								a = [], o[e] = Vr;
						}
						ie(a, Qn({
							rel: "modulepreload",
							href: e
						}, t)), i.bulkPreloads.add(a), Sn(n);
					}
				} else Mr.m(e, t);
			},
			X: function(e, t) {
				var n = ws || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
						a !== Br && (r.scriptResources[e] = Br, t = Qn({
							src: e,
							async: !0
						}, t), a && (a.length === 2 && Ne(t, a), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), ce(e, t), Sn(n));
					}
				} else Mr.X(e, t);
			},
			S: function(e, t, n) {
				var r = ws || null;
				if (r) {
					var i = r.resumableState, a = r.renderState;
					if (e) {
						t ||= "default";
						var o = a.styles.get(t), s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
						s !== Br && (i.styleResources[e] = Br, o || (o = {
							precedence: w(t),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(t, o)), t = {
							state: Ya,
							props: Qn({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n)
						}, s && (s.length === 2 && Ne(t.props, s), (a = a.preloads.stylesheets.get(e)) && 0 < a.length ? a.length = 0 : t.state = Xa), o.sheets.set(e, t), Sn(r));
					}
				} else Mr.S(e, t, n);
			},
			M: function(e, t) {
				var n = ws || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
						a !== Br && (r.moduleScriptResources[e] = Br, t = Qn({
							src: e,
							type: "module",
							async: !0
						}, t), a && (a.length === 2 && Ne(t, a), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), ce(e, t), Sn(n));
					}
				} else Mr.M(e, t);
			}
		};
		var Nr = 0, Pr = 1, Fr = 2, Ir = 4, Lr = 8, Rr = 32, zr = 64, Br = null, Vr = [];
		Object.freeze(Vr);
		var Hr = null, Ur = "<\/script>", Wr = /(<\/|<)(s)(cript)/gi, Gr = {}, Kr = 0, qr = 1, Jr = 2, Yr = 3, Xr = 4, Zr = 5, Qr = 6, $r = 7, ei = 8, ti = 9, ni = /* @__PURE__ */ new Map(), ri = " style=\"", ii = ":", ai = ";", oi = " ", si = "=\"", ci = "\"", li = "=\"\"", ui = w("javascript:throw new Error('React form unexpectedly submitted.')"), di = ">", fi = "/>", pi = !1, mi = !1, hi = !1, gi = !1, _i = !1, vi = !1, yi = !1, bi = !1, xi = !1, Si = !1, Ci = !1, wi = "addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});", Ti = /(<\/|<)(s)(tyle)/gi, Ei = "\n", Di = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Oi = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), Ai = "requestAnimationFrame(function(){$RT=performance.now()});", ji = "<template id=\"", Mi = "\"></template>", Ni = "<!--$-->", Pi = "<!--$?--><template id=\"", Fi = "\"></template>", Ii = "<!--$!-->", Li = "<!--/$-->", Ri = "<template", zi = "\"", Bi = " data-dgst=\"", Vi = " data-msg=\"", Hi = " data-stck=\"", Ui = " data-cstck=\"", Wi = "></template>", Gi = "<div hidden id=\"", Ki = "\">", qi = "</div>", Ji = "<svg aria-hidden=\"true\" style=\"display:none\" id=\"", Yi = "\">", Xi = "</svg>", Zi = "<math aria-hidden=\"true\" style=\"display:none\" id=\"", Qi = "\">", $i = "</math>", ea = "<table hidden id=\"", ta = "\">", na = "</table>", ra = "<table hidden><tbody id=\"", ia = "\">", aa = "</tbody></table>", oa = "<table hidden><tr id=\"", sa = "\">", ca = "</tr></table>", la = "<table hidden><colgroup id=\"", ua = "\">", da = "</colgroup></table>", fa = "$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\"", pa = "$RS(\"", ma = "\",\"", ha = "\")<\/script>", ga = "$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};", _a = "$RC(\"", va = "$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\"", ya = "$RR(\"", ba = "\",\"", xa = "\",", Sa = "\"", Ca = ")<\/script>", wa = "$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};", Ta = "$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\"", Ea = "$RX(\"", Da = "\"", Oa = ",", ka = ")<\/script>", Aa = /[<\u2028\u2029]/g, ja = /[&><\u2028\u2029]/g, Ma = " media=\"not all\" data-precedence=\"", Na = "\" data-href=\"", Pa = "\">", Fa = "</style>", Ia = !1, La = !0, Ra = [], za = " data-precedence=\"", Ba = "\" data-href=\"", Va = " ", Ha = "\">", Ua = "</style>", Wa = " id=\"", Ga = "[", Ka = ",[", qa = ",", Ja = "]", Ya = 0, Xa = 1, Za = 2, Qa = 3, $a = /[<>\r\n]/g, eo = /["';,\r\n]/g, to = "", no = Function.prototype.bind, ro = Symbol.for("react.client.reference"), io = {};
		Object.freeze(io);
		var ao = {}, oo = null, so = {}, co = {}, lo = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set(), fo = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set(), mo = /* @__PURE__ */ new Set(), ho = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), _o = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), yo = {
			enqueueSetState: function(e, t, n) {
				var r = e._reactInternals;
				r.queue === null ? Xe(e, "setState") : (r.queue.push(t), n != null && Ye(n));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals, e.replace = !0, e.queue = [t], n != null && Ye(n);
			},
			enqueueForceUpdate: function(e, t) {
				e._reactInternals.queue === null ? Xe(e, "forceUpdate") : t != null && Ye(t);
			}
		}, bo = {
			id: 1,
			overflow: ""
		}, xo = Math.clz32 ? Math.clz32 : Ze, So = Math.log, Co = Math.LN2, wo = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), To = null, Eo = typeof Object.is == "function" ? Object.is : et, Do = null, Oo = null, ko = null, Ao = null, jo = null, Mo = null, No = !1, Po = !1, Fo = 0, Io = 0, Lo = -1, Ro = 0, zo = null, Bo = null, Vo = 0, Ho = !1, Uo, Wo = {
			readContext: it,
			use: function(e) {
				if (typeof e == "object" && e) {
					if (typeof e.then == "function") return pt(e);
					if (e.$$typeof === In) return it(e);
				}
				throw Error("An unsupported type was passed to use(): " + String(e));
			},
			useContext: function(e) {
				return Uo = "useContext", tt(), e._currentValue2;
			},
			useMemo: st,
			useReducer: ot,
			useRef: function(e) {
				Do = tt(), Mo = J();
				var t = Mo.memoizedState;
				return t === null ? (e = { current: e }, Object.seal(e), Mo.memoizedState = e) : t;
			},
			useState: function(e) {
				return Uo = "useState", ot(at, e);
			},
			useInsertionEffect: K,
			useLayoutEffect: K,
			useCallback: function(e, t) {
				return st(function() {
					return e;
				}, t);
			},
			useImperativeHandle: K,
			useEffect: K,
			useDebugValue: K,
			useDeferredValue: function(e, t) {
				return tt(), t === void 0 ? e : t;
			},
			useTransition: function() {
				return tt(), [!1, ut];
			},
			useId: function() {
				var e = Oo.treeContext, t = e.overflow;
				e = e.id, e = (e & ~(1 << 32 - xo(e) - 1)).toString(32) + t;
				var n = Go;
				if (n === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
				return t = Fo++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
			},
			useSyncExternalStore: function(e, t, n) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				return n();
			},
			useOptimistic: function(e) {
				return tt(), [e, dt];
			},
			useActionState: ft,
			useFormState: ft,
			useHostTransitionStatus: function() {
				return tt(), jr;
			},
			useMemoCache: function(e) {
				for (var t = Array(e), n = 0; n < e; n++) t[n] = Gn;
				return t;
			},
			useCacheRefresh: function() {
				return mt;
			},
			useEffectEvent: function() {
				return lt;
			}
		}, Go = null, Ko = null, qo = {
			getCacheForType: function() {
				throw Error("Not implemented.");
			},
			cacheSignal: function() {
				throw Error("Not implemented.");
			},
			getOwner: function() {
				return Ko === null ? null : Ko.componentStack;
			}
		}, Jo = 0, Yo, Xo, Zo, Qo, $o, es, ts;
		ht.__reactDisabledLog = !0;
		var ns, rs, is = !1, as = new (typeof WeakMap == "function" ? WeakMap : Map)(), os = { react_stack_bottom_frame: function(e, t, n) {
			return e(t, n);
		} }, ss = os.react_stack_bottom_frame.bind(os), cs = { react_stack_bottom_frame: function(e) {
			return e.render();
		} }, ls = cs.react_stack_bottom_frame.bind(cs), us = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, ds = us.react_stack_bottom_frame.bind(us), fs = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var ps = performance, ms = function() {
			return ps.now();
		};
		else {
			var hs = Date;
			ms = function() {
				return hs.now();
			};
		}
		var gs = 4, _s = 0, vs = 1, ys = 2, bs = 3, xs = 4, Ss = 5, Cs = 14, ws = null, Ts = {}, Es = {}, Ds = {}, Os = {}, ks = !1, As = !1, js = !1, Ms = 0, Ns = !1;
		t.renderToStaticMarkup = function(e, t) {
			return Dn(e, t, !0, "The server used \"renderToStaticMarkup\" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
		}, t.renderToString = function(e, t) {
			return Dn(e, t, !1, "The server used \"renderToString\" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to \"renderToReadableStream\" which supports Suspense on the server");
		}, t.version = "19.2.4";
	})();
})), a = /* @__PURE__ */ t(((t) => {
	process.env.NODE_ENV !== "production" && (function() {
		function n(e, t, n, r) {
			return "" + t + (n === "s" ? "\\73 " : "\\53 ") + r;
		}
		function r(e, t, n, r) {
			return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = lr && e[lr] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e) {
			return e = Object.prototype.toString.call(e), e.slice(8, e.length - 1);
		}
		function o(e) {
			var t = JSON.stringify(e);
			return "\"" + e + "\"" === t ? e : t;
		}
		function s(e) {
			switch (typeof e) {
				case "string": return JSON.stringify(10 >= e.length ? e : e.slice(0, 10) + "...");
				case "object": return ur(e) ? "[...]" : e !== null && e.$$typeof === pr ? "client" : (e = a(e), e === "Object" ? "{...}" : e);
				case "function": return e.$$typeof === pr ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
				default: return String(e);
			}
		}
		function c(e) {
			if (typeof e == "string") return e;
			switch (e) {
				case er: return "Suspense";
				case tr: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case $n: return c(e.render);
				case nr: return c(e.type);
				case rr:
					var t = e._payload;
					e = e._init;
					try {
						return c(e(t));
					} catch {}
			}
			return "";
		}
		function l(e, t) {
			var n = a(e);
			if (n !== "Object" && n !== "Array") return n;
			var r = -1, i = 0;
			if (ur(e)) if (fr.has(e)) {
				var u = fr.get(e);
				n = "<" + c(u) + ">";
				for (var d = 0; d < e.length; d++) {
					var f = e[d];
					f = typeof f == "string" ? f : typeof f == "object" && f ? "{" + l(f) + "}" : "{" + s(f) + "}", "" + d === t ? (r = n.length, i = f.length, n += f) : n = 15 > f.length && 40 > n.length + f.length ? n + f : n + "{...}";
				}
				n += "</" + c(u) + ">";
			} else {
				for (n = "[", u = 0; u < e.length; u++) 0 < u && (n += ", "), d = e[u], d = typeof d == "object" && d ? l(d) : s(d), "" + u === t ? (r = n.length, i = d.length, n += d) : n = 10 > d.length && 40 > n.length + d.length ? n + d : n + "...";
				n += "]";
			}
			else if (e.$$typeof === Kn) n = "<" + c(e.type) + "/>";
			else {
				if (e.$$typeof === pr) return "client";
				if (dr.has(e)) {
					for (n = dr.get(e), n = "<" + (c(n) || "..."), u = Object.keys(e), d = 0; d < u.length; d++) {
						n += " ", f = u[d], n += o(f) + "=";
						var p = e[f], m = f === t && typeof p == "object" && p ? l(p) : s(p);
						typeof p != "string" && (m = "{" + m + "}"), f === t ? (r = n.length, i = m.length, n += m) : n = 10 > m.length && 40 > n.length + m.length ? n + m : n + "...";
					}
					n += ">";
				} else {
					for (n = "{", u = Object.keys(e), d = 0; d < u.length; d++) 0 < d && (n += ", "), f = u[d], n += o(f) + ": ", p = e[f], p = typeof p == "object" && p ? l(p) : s(p), f === t ? (r = n.length, i = p.length, n += p) : n = 10 > p.length && 40 > n.length + p.length ? n + p : n + "...";
					n += "}";
				}
			}
			return t === void 0 ? n : -1 < r && 0 < i ? (e = " ".repeat(r) + "^".repeat(i), "\n  " + n + "\n  " + e) : "\n  " + n;
		}
		function u(e, t) {
			var n = e.length & 3, r = e.length - n, i = t;
			for (t = 0; t < r;) {
				var a = e.charCodeAt(t) & 255 | (e.charCodeAt(++t) & 255) << 8 | (e.charCodeAt(++t) & 255) << 16 | (e.charCodeAt(++t) & 255) << 24;
				++t, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, i = 5 * (i & 65535) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (i & 65535) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
			}
			switch (a = 0, n) {
				case 3: a ^= (e.charCodeAt(t + 2) & 255) << 16;
				case 2: a ^= (e.charCodeAt(t + 1) & 255) << 8;
				case 1: a ^= e.charCodeAt(t) & 255, a = 3432918353 * (a & 65535) + ((3432918353 * (a >>> 16) & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, i ^= 461845907 * (a & 65535) + ((461845907 * (a >>> 16) & 65535) << 16) & 4294967295;
			}
			return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (i & 65535) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (i & 65535) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, (i ^ i >>> 16) >>> 0;
		}
		function d(e) {
			hr.push(e), mr.port2.postMessage(null);
		}
		function f(e) {
			setTimeout(function() {
				throw e;
			});
		}
		function p(e, t) {
			if (t.byteLength !== 0) if (2048 < t.byteLength) 0 < yr && (e.enqueue(new Uint8Array(vr.buffer, 0, yr)), vr = new Uint8Array(2048), yr = 0), e.enqueue(t);
			else {
				var n = vr.length - yr;
				n < t.byteLength && (n === 0 ? e.enqueue(vr) : (vr.set(t.subarray(0, n), yr), e.enqueue(vr), t = t.subarray(n)), vr = new Uint8Array(2048), yr = 0), vr.set(t, yr), yr += t.byteLength;
			}
		}
		function m(e, t) {
			return p(e, t), !0;
		}
		function h(e) {
			vr && 0 < yr && (e.enqueue(new Uint8Array(vr.buffer, 0, yr)), vr = null, yr = 0);
		}
		function g(e) {
			return br.encode(e);
		}
		function _(e) {
			return e = br.encode(e), 2048 < e.byteLength && console.error("precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."), e;
		}
		function v(e) {
			return e.byteLength;
		}
		function y(e, t) {
			typeof e.error == "function" ? e.error(t) : e.close();
		}
		function b(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function x(e) {
			try {
				return S(e), !1;
			} catch {
				return !0;
			}
		}
		function S(e) {
			return "" + e;
		}
		function C(e, t) {
			if (x(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, b(e)), S(e);
		}
		function w(e, t) {
			if (x(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, b(e)), S(e);
		}
		function T(e) {
			if (x(e)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", b(e)), S(e);
		}
		function E(e) {
			return Sr.call(Tr, e) ? !0 : Sr.call(wr, e) ? !1 : Cr.test(e) ? Tr[e] = !0 : (wr[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function D(e, t) {
			Or[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function O(e, t) {
			if (Sr.call(Ar, t) && Ar[t]) return !0;
			if (Mr.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = kr.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ar[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Ar[t] = !0;
			}
			if (jr.test(t)) {
				if (e = t.toLowerCase(), e = kr.hasOwnProperty(e) ? e : null, e == null) return Ar[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Ar[t] = !0);
			}
			return !0;
		}
		function k(e, t) {
			var n = [], r;
			for (r in t) O(e, r) || n.push(r);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function A(e, t, n, r) {
			if (Sr.call(Fr, t) && Fr[t]) return !0;
			var i = t.toLowerCase();
			if (i === "onfocusin" || i === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Fr[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (r != null) {
				if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (r = e.hasOwnProperty(i) ? e[i] : null, r != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), Fr[t] = !0;
				if (Ir.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), Fr[t] = !0;
			} else if (Ir.test(t)) return Lr.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Fr[t] = !0;
			if (Rr.test(t) || zr.test(t)) return !0;
			if (i === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Fr[t] = !0;
			if (i === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Fr[t] = !0;
			if (i === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Fr[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Fr[t] = !0;
			if (Pr.hasOwnProperty(i)) {
				if (i = Pr[i], i !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, i), Fr[t] = !0;
			} else if (t !== i) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Fr[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return i = t.toLowerCase().slice(0, 5), i === "data-" || i === "aria-" ? !0 : (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Fr[t] = !0);
				}
				case "function":
				case "symbol": return Fr[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Fr[t] = !0;
				}
			}
			return !0;
		}
		function j(e, t, n) {
			var r = [], i;
			for (i in t) A(e, i, t[i], n) || r.push(i);
			t = r.map(function(e) {
				return "`" + e + "`";
			}).join(", "), r.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < r.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function M(e) {
			return e.replace(Hr, function(e, t) {
				return t.toUpperCase();
			});
		}
		function N(e) {
			if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint") return "" + e;
			T(e), e = "" + e;
			var t = Jr.exec(e);
			if (t) {
				var n = "", r, i = 0;
				for (r = t.index; r < e.length; r++) {
					switch (e.charCodeAt(r)) {
						case 34:
							t = "&quot;";
							break;
						case 38:
							t = "&amp;";
							break;
						case 39:
							t = "&#x27;";
							break;
						case 60:
							t = "&lt;";
							break;
						case 62:
							t = "&gt;";
							break;
						default: continue;
					}
					i !== r && (n += e.slice(i, r)), i = r + 1, n += t;
				}
				e = i === r ? n : n + e.slice(i, r);
			}
			return e;
		}
		function P(e) {
			return Zr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function F(e) {
			return T(e), ("" + e).replace(xi, r);
		}
		function ee(e, t, n, r, i, a) {
			n = typeof t == "string" ? t : t && t.script;
			var o = n === void 0 ? fi : _("<script nonce=\"" + N(n) + "\""), s = typeof t == "string" ? void 0 : t && t.style, c = s === void 0 ? bi : _("<style nonce=\"" + N(s) + "\""), l = e.idPrefix, u = [], d = e.bootstrapScriptContent, f = e.bootstrapScripts, p = e.bootstrapModules;
			if (d !== void 0 && (u.push(o), Be(u, e), u.push(Ki, g(F(d)), pi)), d = [], r !== void 0 && (d.push(Si), d.push(g(F(JSON.stringify(r)))), d.push(Ci)), i && typeof a == "number" && 0 >= a && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", a === 0 ? "zero" : a), r = i ? {
				preconnects: "",
				fontPreloads: "",
				highImagePreloads: "",
				remainingCapacity: 2 + (typeof a == "number" ? a : 2e3)
			} : null, i = {
				placeholderPrefix: _(l + "P:"),
				segmentPrefix: _(l + "S:"),
				boundaryPrefix: _(l + "B:"),
				startInlineScript: o,
				startInlineStyle: c,
				preamble: L(),
				externalRuntimeScript: null,
				bootstrapChunks: u,
				importMapChunks: d,
				onHeaders: i,
				headers: r,
				resets: {
					font: {},
					dns: {},
					connect: {
						default: {},
						anonymous: {},
						credentials: {}
					},
					image: {},
					style: {}
				},
				charsetChunks: [],
				viewportChunks: [],
				hoistableChunks: [],
				preconnects: /* @__PURE__ */ new Set(),
				fontPreloads: /* @__PURE__ */ new Set(),
				highImagePreloads: /* @__PURE__ */ new Set(),
				styles: /* @__PURE__ */ new Map(),
				bootstrapScripts: /* @__PURE__ */ new Set(),
				scripts: /* @__PURE__ */ new Set(),
				bulkPreloads: /* @__PURE__ */ new Set(),
				preloads: {
					images: /* @__PURE__ */ new Map(),
					stylesheets: /* @__PURE__ */ new Map(),
					scripts: /* @__PURE__ */ new Map(),
					moduleScripts: /* @__PURE__ */ new Map()
				},
				nonce: {
					script: n,
					style: s
				},
				hoistableState: null,
				stylesToHoist: !1
			}, f !== void 0) for (r = 0; r < f.length; r++) a = f[r], c = s = void 0, l = {
				rel: "preload",
				as: "script",
				fetchPriority: "low",
				nonce: t
			}, typeof a == "string" ? l.href = o = a : (l.href = o = a.src, l.integrity = c = typeof a.integrity == "string" ? a.integrity : void 0, l.crossOrigin = s = typeof a == "string" || a.crossOrigin == null ? void 0 : a.crossOrigin === "use-credentials" ? "use-credentials" : ""), U(e, i, o, l), u.push(mi, g(N(o)), Hi), n && u.push(gi, g(N(n)), Hi), typeof c == "string" && u.push(_i, g(N(c)), Hi), typeof s == "string" && u.push(vi, g(N(s)), Hi), Be(u, e), u.push(yi);
			if (p !== void 0) for (t = 0; t < p.length; t++) f = p[t], o = a = void 0, s = {
				rel: "modulepreload",
				fetchPriority: "low",
				nonce: n
			}, typeof f == "string" ? s.href = r = f : (s.href = r = f.src, s.integrity = o = typeof f.integrity == "string" ? f.integrity : void 0, s.crossOrigin = a = typeof f == "string" || f.crossOrigin == null ? void 0 : f.crossOrigin === "use-credentials" ? "use-credentials" : ""), U(e, i, r, s), u.push(hi, g(N(r)), Hi), n && u.push(gi, g(N(n)), Hi), typeof o == "string" && u.push(_i, g(N(o)), Hi), typeof a == "string" && u.push(vi, g(N(a)), Hi), Be(u, e), u.push(yi);
			return i;
		}
		function I(e, t, n, r, i) {
			return {
				idPrefix: e === void 0 ? "" : e,
				nextFormID: 0,
				streamingFormat: 0,
				bootstrapScriptContent: n,
				bootstrapScripts: r,
				bootstrapModules: i,
				instructions: ni,
				hasBody: !1,
				hasHtml: !1,
				unknownResources: {},
				dnsResources: {},
				connectResources: {
					default: {},
					anonymous: {},
					credentials: {}
				},
				imageResources: {},
				styleResources: {},
				scriptResources: {},
				moduleUnknownResources: {},
				moduleScriptResources: {}
			};
		}
		function L() {
			return {
				htmlChunks: null,
				headChunks: null,
				bodyChunks: null
			};
		}
		function R(e, t, n, r) {
			return {
				insertionMode: e,
				selectedValue: t,
				tagScope: n,
				viewTransition: r
			};
		}
		function z(e) {
			return R(e === "http://www.w3.org/2000/svg" ? ki : e === "http://www.w3.org/1998/Math/MathML" ? Ai : Ti, null, 0, null);
		}
		function te(e, t, n) {
			var r = e.tagScope & -25;
			switch (t) {
				case "noscript": return R(Di, null, r | 1, null);
				case "select": return R(Di, n.value == null ? n.defaultValue : n.value, r, null);
				case "svg": return R(ki, null, r, null);
				case "picture": return R(Di, null, r | 2, null);
				case "math": return R(Ai, null, r, null);
				case "foreignObject": return R(Di, null, r, null);
				case "table": return R(ji, null, r, null);
				case "thead":
				case "tbody":
				case "tfoot": return R(Mi, null, r, null);
				case "colgroup": return R(Pi, null, r, null);
				case "tr": return R(Ni, null, r, null);
				case "head":
					if (e.insertionMode < Di) return R(Oi, null, r, null);
					break;
				case "html": if (e.insertionMode === Ti) return R(Ei, null, r, null);
			}
			return e.insertionMode >= ji || e.insertionMode < Di ? R(Di, null, r, null) : e.tagScope === r ? e : R(e.insertionMode, e.selectedValue, r, null);
		}
		function ne(e) {
			return e === null ? null : {
				update: e.update,
				enter: "none",
				exit: "none",
				share: e.update,
				name: e.autoName,
				autoName: e.autoName,
				nameIdx: 0
			};
		}
		function B(e, t) {
			return t.tagScope & 32 && (e.instructions |= 128), R(t.insertionMode, t.selectedValue, t.tagScope | 12, ne(t.viewTransition));
		}
		function re(e, t) {
			e = ne(t.viewTransition);
			var n = t.tagScope | 16;
			return e !== null && e.share !== "none" && (n |= 64), R(t.insertionMode, t.selectedValue, n, e);
		}
		function ie(e, t, n, r) {
			return t === "" ? r : (r && e.push(Fi), e.push(g(N(t))), !0);
		}
		function ae(e, t) {
			if (typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			var n = !0, r;
			for (r in t) if (Sr.call(t, r)) {
				var i = t[r];
				if (i != null && typeof i != "boolean" && i !== "") {
					if (r.indexOf("--") === 0) {
						var a = g(N(r));
						w(i, r), i = g(N(("" + i).trim()));
					} else {
						a = r;
						var o = i;
						if (-1 < a.indexOf("-")) {
							var s = a;
							Wr.hasOwnProperty(s) && Wr[s] || (Wr[s] = !0, console.error("Unsupported style property %s. Did you mean %s?", s, M(s.replace(Vr, "ms-"))));
						} else if (Br.test(a)) s = a, Wr.hasOwnProperty(s) && Wr[s] || (Wr[s] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", s, s.charAt(0).toUpperCase() + s.slice(1)));
						else if (Ur.test(o)) {
							s = a;
							var c = o;
							Gr.hasOwnProperty(c) && Gr[c] || (Gr[c] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", s, c.replace(Ur, "")));
						}
						typeof o == "number" && (isNaN(o) ? Kr || (Kr = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", a)) : isFinite(o) || qr || (qr = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", a))), a = r, o = Ii.get(a), o === void 0 ? (o = _(N(a.replace(Yr, "-$1").toLowerCase().replace(Xr, "-ms-"))), Ii.set(a, o), a = o) : a = o, typeof i == "number" ? i = i === 0 || Er.has(r) ? g("" + i) : g(i + "px") : (w(i, r), i = g(N(("" + i).trim())));
					}
					n ? (n = !1, e.push(Li, a, Ri, i)) : e.push(zi, a, Ri, i);
				}
			}
			n || e.push(Hi);
		}
		function oe(e, t, n) {
			n && typeof n != "function" && typeof n != "symbol" && e.push(Bi, g(t), Ui);
		}
		function se(e, t, n) {
			typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && e.push(Bi, g(t), Vi, g(N(n)), Hi);
		}
		function ce(e, t) {
			this.push(Gi), le(e), se(this, "name", t), se(this, "value", e), this.push(qi);
		}
		function le(e) {
			if (typeof e != "string") throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
		}
		function V(e, t) {
			if (typeof t.$$FORM_ACTION == "function") {
				var n = e.nextFormID++;
				e = e.idPrefix + n;
				try {
					var r = t.$$FORM_ACTION(e);
					return r && r.data?.forEach(le), r;
				} catch (e) {
					if (typeof e == "object" && e && typeof e.then == "function") throw e;
					console.error("Failed to serialize an action for progressive enhancement:\n%s", e);
				}
			}
			return null;
		}
		function ue(e, t, n, r, i, a, o, s) {
			var c = null;
			if (typeof r == "function") {
				s === null || na || (na = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), i === null && a === null || ia || (ia = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), o === null || ra || (ra = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
				var l = V(t, r);
				l === null ? (e.push(Bi, g("formAction"), Vi, Wi, Hi), o = a = i = r = s = null, he(t, n)) : (s = l.name, r = l.action || "", i = l.encType, a = l.method, o = l.target, c = l.data);
			}
			return s != null && de(e, "name", s), r != null && de(e, "formAction", r), i != null && de(e, "formEncType", i), a != null && de(e, "formMethod", a), o != null && de(e, "formTarget", o), c;
		}
		function de(e, t, n) {
			switch (t) {
				case "className":
					se(e, "class", n);
					break;
				case "tabIndex":
					se(e, "tabindex", n);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					se(e, t, n);
					break;
				case "style":
					ae(e, n);
					break;
				case "src":
				case "href": if (n === "") {
					console.error(t === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", t, t);
					break;
				}
				case "action":
				case "formAction":
					if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					C(n, t), n = P("" + n), e.push(Bi, g(t), Vi, g(N(n)), Hi);
					break;
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "ref": break;
				case "autoFocus":
				case "multiple":
				case "muted":
					oe(e, t.toLowerCase(), n);
					break;
				case "xlinkHref":
					if (typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") break;
					C(n, t), n = P("" + n), e.push(Bi, g("xlink:href"), Vi, g(N(n)), Hi);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					typeof n != "function" && typeof n != "symbol" && e.push(Bi, g(t), Vi, g(N(n)), Hi);
					break;
				case "inert": n !== "" || wi[t] || (wi[t] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", t));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					n && typeof n != "function" && typeof n != "symbol" && e.push(Bi, g(t), Ui);
					break;
				case "capture":
				case "download":
					!0 === n ? e.push(Bi, g(t), Ui) : !1 !== n && typeof n != "function" && typeof n != "symbol" && e.push(Bi, g(t), Vi, g(N(n)), Hi);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n && e.push(Bi, g(t), Vi, g(N(n)), Hi);
					break;
				case "rowSpan":
				case "start":
					typeof n == "function" || typeof n == "symbol" || isNaN(n) || e.push(Bi, g(t), Vi, g(N(n)), Hi);
					break;
				case "xlinkActuate":
					se(e, "xlink:actuate", n);
					break;
				case "xlinkArcrole":
					se(e, "xlink:arcrole", n);
					break;
				case "xlinkRole":
					se(e, "xlink:role", n);
					break;
				case "xlinkShow":
					se(e, "xlink:show", n);
					break;
				case "xlinkTitle":
					se(e, "xlink:title", n);
					break;
				case "xlinkType":
					se(e, "xlink:type", n);
					break;
				case "xmlBase":
					se(e, "xml:base", n);
					break;
				case "xmlLang":
					se(e, "xml:lang", n);
					break;
				case "xmlSpace":
					se(e, "xml:space", n);
					break;
				default: if ((!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = Dr.get(t) || t, E(t))) {
					switch (typeof n) {
						case "function":
						case "symbol": return;
						case "boolean":
							var r = t.toLowerCase().slice(0, 5);
							if (r !== "data-" && r !== "aria-") return;
					}
					e.push(Bi, g(t), Vi, g(N(n)), Hi);
				}
			}
		}
		function fe(e, t, n) {
			if (t != null) {
				if (n != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
				if (typeof t != "object" || !("__html" in t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
				t = t.__html, t != null && (T(t), e.push(g("" + t)));
			}
		}
		function pe(e, t) {
			var n = e[t];
			n != null && (n = ur(n), e.multiple && !n ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", t) : !e.multiple && n && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", t));
		}
		function me(e) {
			var t = "";
			return Wn.Children.forEach(e, function(e) {
				e != null && (t += e, Qi || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || (Qi = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
			}), t;
		}
		function he(e, t) {
			if ((e.instructions & 16) === ni) {
				e.instructions |= 16;
				var n = t.preamble, r = t.bootstrapChunks;
				(n.htmlChunks || n.headChunks) && r.length === 0 ? (r.push(t.startInlineScript), Be(r, e), r.push(Ki, oa, pi)) : r.unshift(t.startInlineScript, Ki, oa, pi);
			}
		}
		function ge(e, t) {
			for (var n in e.push(Ce("link")), t) if (Sr.call(t, n)) {
				var r = t[n];
				if (r != null) switch (n) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: de(e, n, r);
				}
			}
			return e.push(qi), null;
		}
		function _e(e) {
			return T(e), ("" + e).replace(la, n);
		}
		function ve(e, t, n) {
			for (var r in e.push(Ce(n)), t) if (Sr.call(t, r)) {
				var i = t[r];
				if (i != null) switch (r) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(n + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
					default: de(e, r, i);
				}
			}
			return e.push(qi), null;
		}
		function ye(e, t) {
			e.push(Ce("title"));
			var n = null, r = null, i;
			for (i in t) if (Sr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: de(e, i, a);
				}
			}
			return e.push(Ki), t = Array.isArray(n) ? 2 > n.length ? n[0] : null : n, typeof t != "function" && typeof t != "symbol" && t != null && e.push(g(N("" + t))), fe(e, r, n), e.push(Te("title")), null;
		}
		function be(e, t) {
			e.push(Ce("script"));
			var n = null, r = null, i;
			for (i in t) if (Sr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: de(e, i, a);
				}
			}
			return e.push(Ki), n != null && typeof n != "string" && (t = typeof n == "number" ? "a number for children" : Array.isArray(n) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", t)), fe(e, r, n), typeof n == "string" && e.push(g(F(n))), e.push(Te("script")), null;
		}
		function xe(e, t, n) {
			e.push(Ce(n));
			var r = n = null, i;
			for (i in t) if (Sr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: de(e, i, a);
				}
			}
			return e.push(Ki), fe(e, r, n), n;
		}
		function Se(e, t, n) {
			e.push(Ce(n));
			var r = n = null, i;
			for (i in t) if (Sr.call(t, i)) {
				var a = t[i];
				if (a != null) switch (i) {
					case "children":
						n = a;
						break;
					case "dangerouslySetInnerHTML":
						r = a;
						break;
					default: de(e, i, a);
				}
			}
			return e.push(Ki), fe(e, r, n), typeof n == "string" ? (e.push(g(N(n))), null) : n;
		}
		function Ce(e) {
			var t = ha.get(e);
			if (t === void 0) {
				if (!ma.test(e)) throw Error("Invalid tag: " + e);
				t = _("<" + e), ha.set(e, t);
			}
			return t;
		}
		function we(e, t, n, r, i, a, o, s, c) {
			k(t, n), t !== "input" && t !== "textarea" && t !== "select" || n == null || n.value !== null || Nr || (Nr = !0, t === "select" && n.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", t) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", t));
			b: if (t.indexOf("-") === -1) var l = !1;
			else switch (t) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph":
					l = !1;
					break b;
				default: l = !0;
			}
			switch (l || typeof n.is == "string" || j(t, n, null), !n.suppressContentEditableWarning && n.contentEditable && n.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), s.insertionMode !== ki && s.insertionMode !== Ai && t.indexOf("-") === -1 && t.toLowerCase() !== t && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", t), t) {
				case "div":
				case "span":
				case "svg":
				case "path": break;
				case "a":
					e.push(Ce("a"));
					var u = null, d = null, f;
					for (f in n) if (Sr.call(n, f)) {
						var p = n[f];
						if (p != null) switch (f) {
							case "children":
								u = p;
								break;
							case "dangerouslySetInnerHTML":
								d = p;
								break;
							case "href":
								p === "" ? se(e, "href", "") : de(e, f, p);
								break;
							default: de(e, f, p);
						}
					}
					if (e.push(Ki), fe(e, d, u), typeof u == "string") {
						e.push(g(N(u)));
						var m = null;
					} else m = u;
					return m;
				case "g":
				case "p":
				case "li": break;
				case "select":
					D("select", n), pe(n, "value"), pe(n, "defaultValue"), n.value === void 0 || n.defaultValue === void 0 || Xi || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), Xi = !0), e.push(Ce("select"));
					var h = null, _ = null, v;
					for (v in n) if (Sr.call(n, v)) {
						var y = n[v];
						if (y != null) switch (v) {
							case "children":
								h = y;
								break;
							case "dangerouslySetInnerHTML":
								_ = y;
								break;
							case "defaultValue":
							case "value": break;
							default: de(e, v, y);
						}
					}
					return e.push(Ki), fe(e, _, h), h;
				case "option":
					var b = s.selectedValue;
					e.push(Ce("option"));
					var x = null, S = null, w = null, O = null, A;
					for (A in n) if (Sr.call(n, A)) {
						var M = n[A];
						if (M != null) switch (A) {
							case "children":
								x = M;
								break;
							case "selected":
								w = M, ea ||= (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), !0);
								break;
							case "dangerouslySetInnerHTML":
								O = M;
								break;
							case "value": S = M;
							default: de(e, A, M);
						}
					}
					if (b != null) {
						if (S !== null) {
							C(S, "value");
							var F = "" + S;
						} else O === null || $i || ($i = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), F = me(x);
						if (ur(b)) {
							for (var ee = 0; ee < b.length; ee++) if (C(b[ee], "value"), "" + b[ee] === F) {
								e.push(aa);
								break;
							}
						} else C(b, "select.value"), "" + b === F && e.push(aa);
					} else w && e.push(aa);
					return e.push(Ki), fe(e, O, x), x;
				case "textarea":
					D("textarea", n), n.value === void 0 || n.defaultValue === void 0 || Zi || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), Zi = !0), e.push(Ce("textarea"));
					var I = null, L = null, R = null, z;
					for (z in n) if (Sr.call(n, z)) {
						var te = n[z];
						if (te != null) switch (z) {
							case "children":
								R = te;
								break;
							case "value":
								I = te;
								break;
							case "defaultValue":
								L = te;
								break;
							case "dangerouslySetInnerHTML": throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							default: de(e, z, te);
						}
					}
					if (I === null && L !== null && (I = L), e.push(Ki), R != null) {
						if (console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), I != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
						if (ur(R)) {
							if (1 < R.length) throw Error("<textarea> can only have at most one child.");
							T(R[0]), I = "" + R[0];
						}
						T(R), I = "" + R;
					}
					return typeof I == "string" && I[0] === "\n" && e.push(pa), I !== null && (C(I, "value"), e.push(g(N("" + I)))), null;
				case "input":
					D("input", n), e.push(Ce("input"));
					var ne = null, B = null, re = null, ie = null, le = null, we = null, Ee = null, De = null, Oe = null, ke;
					for (ke in n) if (Sr.call(n, ke)) {
						var Ae = n[ke];
						if (Ae != null) switch (ke) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							case "name":
								ne = Ae;
								break;
							case "formAction":
								B = Ae;
								break;
							case "formEncType":
								re = Ae;
								break;
							case "formMethod":
								ie = Ae;
								break;
							case "formTarget":
								le = Ae;
								break;
							case "defaultChecked":
								Oe = Ae;
								break;
							case "defaultValue":
								Ee = Ae;
								break;
							case "checked":
								De = Ae;
								break;
							case "value":
								we = Ae;
								break;
							default: de(e, ke, Ae);
						}
					}
					B === null || n.type === "image" || n.type === "submit" || ta || (ta = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\"."));
					var je = ue(e, r, i, B, re, ie, le, ne);
					return De === null || Oe === null || Yi || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Yi = !0), we === null || Ee === null || Ji || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", n.type), Ji = !0), De === null ? Oe !== null && oe(e, "checked", Oe) : oe(e, "checked", De), we === null ? Ee !== null && de(e, "value", Ee) : de(e, "value", we), e.push(qi), je?.forEach(ce, e), null;
				case "button":
					e.push(Ce("button"));
					var Me = null, Ne = null, Pe = null, Fe = null, H = null, Ie = null, Le = null, Re;
					for (Re in n) if (Sr.call(n, Re)) {
						var ze = n[Re];
						if (ze != null) switch (Re) {
							case "children":
								Me = ze;
								break;
							case "dangerouslySetInnerHTML":
								Ne = ze;
								break;
							case "name":
								Pe = ze;
								break;
							case "formAction":
								Fe = ze;
								break;
							case "formEncType":
								H = ze;
								break;
							case "formMethod":
								Ie = ze;
								break;
							case "formTarget":
								Le = ze;
								break;
							default: de(e, Re, ze);
						}
					}
					Fe === null || n.type == null || n.type === "submit" || ta || (ta = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type."));
					var Be = ue(e, r, i, Fe, H, Ie, Le, Pe);
					if (e.push(Ki), Be?.forEach(ce, e), fe(e, Ne, Me), typeof Me == "string") {
						e.push(g(N(Me)));
						var Ve = null;
					} else Ve = Me;
					return Ve;
				case "form":
					e.push(Ce("form"));
					var He = null, Ue = null, U = null, Ke = null, qe = null, Je = null, W;
					for (W in n) if (Sr.call(n, W)) {
						var Ye = n[W];
						if (Ye != null) switch (W) {
							case "children":
								He = Ye;
								break;
							case "dangerouslySetInnerHTML":
								Ue = Ye;
								break;
							case "action":
								U = Ye;
								break;
							case "encType":
								Ke = Ye;
								break;
							case "method":
								qe = Ye;
								break;
							case "target":
								Je = Ye;
								break;
							default: de(e, W, Ye);
						}
					}
					var Xe = null, G = null;
					if (typeof U == "function") {
						Ke === null && qe === null || ia || (ia = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), Je === null || ra || (ra = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
						var Ze = V(r, U);
						Ze === null ? (e.push(Bi, g("action"), Vi, Wi, Hi), Je = qe = Ke = U = null, he(r, i)) : (U = Ze.action || "", Ke = Ze.encType, qe = Ze.method, Je = Ze.target, Xe = Ze.data, G = Ze.name);
					}
					if (U != null && de(e, "action", U), Ke != null && de(e, "encType", Ke), qe != null && de(e, "method", qe), Je != null && de(e, "target", Je), e.push(Ki), G !== null && (e.push(Gi), se(e, "name", G), e.push(qi), Xe?.forEach(ce, e)), fe(e, Ue, He), typeof He == "string") {
						e.push(g(N(He)));
						var K = null;
					} else K = He;
					return K;
				case "menuitem":
					for (var Qe in e.push(Ce("menuitem")), n) if (Sr.call(n, Qe)) {
						var $e = n[Qe];
						if ($e != null) switch (Qe) {
							case "children":
							case "dangerouslySetInnerHTML": throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
							default: de(e, Qe, $e);
						}
					}
					return e.push(Ki), null;
				case "object":
					e.push(Ce("object"));
					var et = null, tt = null, q;
					for (q in n) if (Sr.call(n, q)) {
						var J = n[q];
						if (J != null) switch (q) {
							case "children":
								et = J;
								break;
							case "dangerouslySetInnerHTML":
								tt = J;
								break;
							case "data":
								C(J, "data");
								var nt = P("" + J);
								if (nt === "") {
									console.error("An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", q, q);
									break;
								}
								e.push(Bi, g("data"), Vi, g(N(nt)), Hi);
								break;
							default: de(e, q, J);
						}
					}
					if (e.push(Ki), fe(e, tt, et), typeof et == "string") {
						e.push(g(N(et)));
						var rt = null;
					} else rt = et;
					return rt;
				case "title":
					var it = s.tagScope & 1, at = s.tagScope & 4;
					if (Sr.call(n, "children")) {
						var ot = n.children, st = Array.isArray(ot) ? 2 > ot.length ? ot[0] : null : ot;
						Array.isArray(ot) && 1 < ot.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", ot.length) : typeof st == "function" || typeof st == "symbol" ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", typeof st == "function" ? "a Function" : "a Sybmol") : st && st.toString === {}.toString && (st.$$typeof == null ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."));
					}
					if (s.insertionMode === ki || it || n.itemProp != null) var ct = ye(e, n);
					else at ? ct = null : (ye(i.hoistableChunks, n), ct = void 0);
					return ct;
				case "link":
					var lt = s.tagScope & 1, ut = s.tagScope & 4, dt = n.rel, ft = n.href, pt = n.precedence;
					if (s.insertionMode === ki || lt || n.itemProp != null || typeof dt != "string" || typeof ft != "string" || ft === "") {
						dt === "stylesheet" && typeof n.precedence == "string" && (typeof ft == "string" && ft || console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.", ft === null ? "`null`" : ft === void 0 ? "`undefined`" : ft === "" ? "an empty string" : "something with type \"" + typeof ft + "\"")), ge(e, n);
						var mt = null;
					} else if (n.rel === "stylesheet") if (typeof pt != "string" || n.disabled != null || n.onLoad || n.onError) {
						if (typeof pt == "string") {
							if (n.disabled != null) console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.");
							else if (n.onLoad || n.onError) {
								var ht = n.onLoad && n.onError ? "`onLoad` and `onError` props" : n.onLoad ? "`onLoad` prop" : "`onError` prop";
								console.error("React encountered a `<link rel=\"stylesheet\" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", ht, ht);
							}
						}
						mt = ge(e, n);
					} else {
						var gt = i.styles.get(pt), _t = r.styleResources.hasOwnProperty(ft) ? r.styleResources[ft] : void 0;
						if (_t !== li) {
							r.styleResources[ft] = li, gt || (gt = {
								precedence: g(N(pt)),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, i.styles.set(pt, gt));
							var vt = {
								state: Bo,
								props: xr({}, n, {
									"data-precedence": n.precedence,
									precedence: null
								})
							};
							if (_t) {
								_t.length === 2 && We(vt.props, _t);
								var yt = i.preloads.stylesheets.get(ft);
								yt && 0 < yt.length ? yt.length = 0 : vt.state = Vo;
							}
							gt.sheets.set(ft, vt), o && o.stylesheets.add(vt);
						} else if (gt) {
							var bt = gt.sheets.get(ft);
							bt && o && o.stylesheets.add(bt);
						}
						c && e.push(Fi), mt = null;
					}
					else n.onLoad || n.onError ? mt = ge(e, n) : (c && e.push(Fi), mt = ut ? null : ge(i.hoistableChunks, n));
					return mt;
				case "script":
					var xt = s.tagScope & 1, St = n.async;
					if (typeof n.src != "string" || !n.src || !St || typeof St == "function" || typeof St == "symbol" || n.onLoad || n.onError || s.insertionMode === ki || xt || n.itemProp != null) var Ct = be(e, n);
					else {
						var wt = n.src;
						if (n.type === "module") var Tt = r.moduleScriptResources, Et = i.preloads.moduleScripts;
						else Tt = r.scriptResources, Et = i.preloads.scripts;
						var Dt = Tt.hasOwnProperty(wt) ? Tt[wt] : void 0;
						if (Dt !== li) {
							Tt[wt] = li;
							var Ot = n;
							if (Dt) {
								Dt.length === 2 && (Ot = xr({}, n), We(Ot, Dt));
								var kt = Et.get(wt);
								kt && (kt.length = 0);
							}
							var At = [];
							i.scripts.add(At), be(At, Ot);
						}
						c && e.push(Fi), Ct = null;
					}
					return Ct;
				case "style":
					var jt = s.tagScope & 1;
					if (Sr.call(n, "children")) {
						var Mt = n.children, Nt = Array.isArray(Mt) ? 2 > Mt.length ? Mt[0] : null : Mt;
						(typeof Nt == "function" || typeof Nt == "symbol" || Array.isArray(Nt)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", typeof Nt == "function" ? "a Function" : typeof Nt == "symbol" ? "a Sybmol" : "an Array");
					}
					var Pt = n.precedence, Ft = n.href, It = n.nonce;
					if (s.insertionMode === ki || jt || n.itemProp != null || typeof Pt != "string" || typeof Ft != "string" || Ft === "") {
						e.push(Ce("style"));
						var Lt = null, Rt = null, zt;
						for (zt in n) if (Sr.call(n, zt)) {
							var Y = n[zt];
							if (Y != null) switch (zt) {
								case "children":
									Lt = Y;
									break;
								case "dangerouslySetInnerHTML":
									Rt = Y;
									break;
								default: de(e, zt, Y);
							}
						}
						e.push(Ki);
						var Bt = Array.isArray(Lt) ? 2 > Lt.length ? Lt[0] : null : Lt;
						typeof Bt != "function" && typeof Bt != "symbol" && Bt != null && e.push(g(_e(Bt))), fe(e, Rt, Lt), e.push(Te("style"));
						var Vt = null;
					} else {
						Ft.includes(" ") && console.error("React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is \"%s\".", Ft);
						var Ht = i.styles.get(Pt), Ut = r.styleResources.hasOwnProperty(Ft) ? r.styleResources[Ft] : void 0;
						if (Ut !== li) {
							r.styleResources[Ft] = li, Ut && console.error("React encountered a hoistable style tag for the same href as a preload: \"%s\". When using a style tag to inline styles you should not also preload it as a stylsheet.", Ft), Ht || (Ht = {
								precedence: g(N(Pt)),
								rules: [],
								hrefs: [],
								sheets: /* @__PURE__ */ new Map()
							}, i.styles.set(Pt, Ht));
							var Wt = i.nonce.style;
							if (Wt && Wt !== It) console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include rules if the nonce matches the style nonce \"%s\" that was included with this render.", Pt, It, Wt);
							else {
								!Wt && It && console.error("React encountered a style tag with `precedence` \"%s\" and `nonce` \"%s\". When React manages style rules using `precedence` it will only include a nonce attributes if you also provide the same style nonce value as a render option.", Pt, It), Ht.hrefs.push(g(N(Ft)));
								var Gt = Ht.rules, Kt = null, qt = null, Jt;
								for (Jt in n) if (Sr.call(n, Jt)) {
									var Yt = n[Jt];
									if (Yt != null) switch (Jt) {
										case "children":
											Kt = Yt;
											break;
										case "dangerouslySetInnerHTML": qt = Yt;
									}
								}
								var X = Array.isArray(Kt) ? 2 > Kt.length ? Kt[0] : null : Kt;
								typeof X != "function" && typeof X != "symbol" && X != null && Gt.push(g(_e(X))), fe(Gt, qt, Kt);
							}
						}
						Ht && o && o.styles.add(Ht), c && e.push(Fi), Vt = void 0;
					}
					return Vt;
				case "meta":
					var Xt = s.tagScope & 1, Zt = s.tagScope & 4;
					if (s.insertionMode === ki || Xt || n.itemProp != null) var Qt = ve(e, n, "meta");
					else c && e.push(Fi), Qt = Zt ? null : typeof n.charSet == "string" ? ve(i.charsetChunks, n, "meta") : n.name === "viewport" ? ve(i.viewportChunks, n, "meta") : ve(i.hoistableChunks, n, "meta");
					return Qt;
				case "listing":
				case "pre":
					e.push(Ce(t));
					var Z = null, $t = null, en;
					for (en in n) if (Sr.call(n, en)) {
						var tn = n[en];
						if (tn != null) switch (en) {
							case "children":
								Z = tn;
								break;
							case "dangerouslySetInnerHTML":
								$t = tn;
								break;
							default: de(e, en, tn);
						}
					}
					if (e.push(Ki), $t != null) {
						if (Z != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
						if (typeof $t != "object" || !("__html" in $t)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						var nn = $t.__html;
						nn != null && (typeof nn == "string" && 0 < nn.length && nn[0] === "\n" ? e.push(pa, g(nn)) : (T(nn), e.push(g("" + nn))));
					}
					return typeof Z == "string" && Z[0] === "\n" && e.push(pa), Z;
				case "img":
					var Q = s.tagScope & 3, $ = n.src, rn = n.srcSet;
					if (!(n.loading === "lazy" || !$ && !rn || typeof $ != "string" && $ != null || typeof rn != "string" && rn != null || n.fetchPriority === "low" || Q) && (typeof $ != "string" || $[4] !== ":" || $[0] !== "d" && $[0] !== "D" || $[1] !== "a" && $[1] !== "A" || $[2] !== "t" && $[2] !== "T" || $[3] !== "a" && $[3] !== "A") && (typeof rn != "string" || rn[4] !== ":" || rn[0] !== "d" && rn[0] !== "D" || rn[1] !== "a" && rn[1] !== "A" || rn[2] !== "t" && rn[2] !== "T" || rn[3] !== "a" && rn[3] !== "A")) {
						o !== null && s.tagScope & 64 && (o.suspenseyImages = !0);
						var an = typeof n.sizes == "string" ? n.sizes : void 0, on = rn ? rn + "\n" + (an || "") : $, sn = i.preloads.images, cn = sn.get(on);
						if (cn) (n.fetchPriority === "high" || 10 > i.highImagePreloads.size) && (sn.delete(on), i.highImagePreloads.add(cn));
						else if (!r.imageResources.hasOwnProperty(on)) {
							r.imageResources[on] = ui;
							var ln = n.crossOrigin, un = typeof ln == "string" ? ln === "use-credentials" ? ln : "" : void 0, dn = i.headers, fn;
							dn && 0 < dn.remainingCapacity && typeof n.srcSet != "string" && (n.fetchPriority === "high" || 500 > dn.highImagePreloads.length) && (fn = Ge($, "image", {
								imageSrcSet: n.srcSet,
								imageSizes: n.sizes,
								crossOrigin: un,
								integrity: n.integrity,
								nonce: n.nonce,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.refererPolicy
							}), 0 <= (dn.remainingCapacity -= fn.length + 2)) ? (i.resets.image[on] = ui, dn.highImagePreloads && (dn.highImagePreloads += ", "), dn.highImagePreloads += fn) : (cn = [], ge(cn, {
								rel: "preload",
								as: "image",
								href: rn ? void 0 : $,
								imageSrcSet: rn,
								imageSizes: an,
								crossOrigin: un,
								integrity: n.integrity,
								type: n.type,
								fetchPriority: n.fetchPriority,
								referrerPolicy: n.referrerPolicy
							}), n.fetchPriority === "high" || 10 > i.highImagePreloads.size ? i.highImagePreloads.add(cn) : (i.bulkPreloads.add(cn), sn.set(on, cn)));
						}
					}
					return ve(e, n, "img");
				case "base":
				case "area":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "param":
				case "source":
				case "track":
				case "wbr": return ve(e, n, t);
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": break;
				case "head":
					if (s.insertionMode < Di) {
						var pn = a || i.preamble;
						if (pn.headChunks) throw Error("The `<head>` tag may only be rendered once.");
						a !== null && e.push(ua), pn.headChunks = [];
						var mn = xe(pn.headChunks, n, "head");
					} else mn = Se(e, n, "head");
					return mn;
				case "body":
					if (s.insertionMode < Di) {
						var hn = a || i.preamble;
						if (hn.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
						a !== null && e.push(da), hn.bodyChunks = [];
						var gn = xe(hn.bodyChunks, n, "body");
					} else gn = Se(e, n, "body");
					return gn;
				case "html":
					if (s.insertionMode === Ti) {
						var _n = a || i.preamble;
						if (_n.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
						a !== null && e.push(fa), _n.htmlChunks = [ga];
						var vn = xe(_n.htmlChunks, n, "html");
					} else vn = Se(e, n, "html");
					return vn;
				default: if (t.indexOf("-") !== -1) {
					e.push(Ce(t));
					var yn = null, bn = null, xn;
					for (xn in n) if (Sr.call(n, xn)) {
						var Sn = n[xn];
						if (Sn != null) {
							var Cn = xn;
							switch (xn) {
								case "children":
									yn = Sn;
									break;
								case "dangerouslySetInnerHTML":
									bn = Sn;
									break;
								case "style":
									ae(e, Sn);
									break;
								case "suppressContentEditableWarning":
								case "suppressHydrationWarning":
								case "ref": break;
								case "className": Cn = "class";
								default: if (E(xn) && typeof Sn != "function" && typeof Sn != "symbol" && !1 !== Sn) {
									if (!0 === Sn) Sn = "";
									else if (typeof Sn == "object") continue;
									e.push(Bi, g(Cn), Vi, g(N(Sn)), Hi);
								}
							}
						}
					}
					return e.push(Ki), fe(e, bn, yn), yn;
				}
			}
			return Se(e, n, t);
		}
		function Te(e) {
			var t = _a.get(e);
			return t === void 0 && (t = _("</" + e + ">"), _a.set(e, t)), t;
		}
		function Ee(e, t) {
			e = e.preamble, e.htmlChunks === null && t.htmlChunks && (e.htmlChunks = t.htmlChunks), e.headChunks === null && t.headChunks && (e.headChunks = t.headChunks), e.bodyChunks === null && t.bodyChunks && (e.bodyChunks = t.bodyChunks);
		}
		function De(e, t) {
			t = t.bootstrapChunks;
			for (var n = 0; n < t.length - 1; n++) p(e, t[n]);
			return n < t.length ? (n = t[n], t.length = 0, m(e, n)) : !0;
		}
		function Oe(e, t, n) {
			if (p(e, wa), n === null) throw Error("An ID must have been assigned before we can complete the boundary.");
			return p(e, t.boundaryPrefix), p(e, g(n.toString(16))), m(e, Ta);
		}
		function ke(e, t, n, r) {
			switch (n.insertionMode) {
				case Ti:
				case Ei:
				case Oi:
				case Di: return p(e, Fa), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, Ia);
				case ki: return p(e, Ra), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, za);
				case Ai: return p(e, Va), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, Ha);
				case ji: return p(e, Wa), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, Ga);
				case Mi: return p(e, qa), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, Ja);
				case Ni: return p(e, Xa), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, Za);
				case Pi: return p(e, $a), p(e, t.segmentPrefix), p(e, g(r.toString(16))), m(e, eo);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function Ae(e, t) {
			switch (t.insertionMode) {
				case Ti:
				case Ei:
				case Oi:
				case Di: return m(e, La);
				case ki: return m(e, Ba);
				case Ai: return m(e, Ua);
				case ji: return m(e, Ka);
				case Mi: return m(e, Ya);
				case Ni: return m(e, Qa);
				case Pi: return m(e, to);
				default: throw Error("Unknown insertion mode. This is a bug in React.");
			}
		}
		function je(e) {
			return JSON.stringify(e).replace(xo, function(e) {
				switch (e) {
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function Me(e) {
			return JSON.stringify(e).replace(So, function(e) {
				switch (e) {
					case "&": return "\\u0026";
					case ">": return "\\u003e";
					case "<": return "\\u003c";
					case "\u2028": return "\\u2028";
					case "\u2029": return "\\u2029";
					default: throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
				}
			});
		}
		function Ne(e) {
			var t = e.rules, n = e.hrefs;
			0 < t.length && n.length === 0 && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
			var r = 0;
			if (n.length) {
				for (p(this, di.startInlineStyle), p(this, Co), p(this, e.precedence), p(this, wo); r < n.length - 1; r++) p(this, n[r]), p(this, Mo);
				for (p(this, n[r]), p(this, To), r = 0; r < t.length; r++) p(this, t[r]);
				Oo = m(this, Eo), Do = !0, t.length = 0, n.length = 0;
			}
		}
		function Pe(e) {
			return e.state === Ho ? !1 : Do = !0;
		}
		function Fe(e, t, n) {
			return Do = !1, Oo = !0, di = n, t.styles.forEach(Ne, e), di = null, t.stylesheets.forEach(Pe), Do && (n.stylesToHoist = !0), Oo;
		}
		function H(e) {
			for (var t = 0; t < e.length; t++) p(this, e[t]);
			e.length = 0;
		}
		function Ie(e) {
			ge(ko, e.props);
			for (var t = 0; t < ko.length; t++) p(this, ko[t]);
			ko.length = 0, e.state = Ho;
		}
		function Le(e) {
			var t = 0 < e.sheets.size;
			e.sheets.forEach(Ie, this), e.sheets.clear();
			var n = e.rules, r = e.hrefs;
			if (!t || r.length) {
				if (p(this, di.startInlineStyle), p(this, Ao), p(this, e.precedence), e = 0, r.length) {
					for (p(this, jo); e < r.length - 1; e++) p(this, r[e]), p(this, Mo);
					p(this, r[e]);
				}
				for (p(this, No), e = 0; e < n.length; e++) p(this, n[e]);
				p(this, Po), n.length = 0, r.length = 0;
			}
		}
		function Re(e) {
			if (e.state === Bo) {
				e.state = Vo;
				var t = e.props;
				for (ge(ko, {
					rel: "preload",
					as: "style",
					href: e.props.href,
					crossOrigin: t.crossOrigin,
					fetchPriority: t.fetchPriority,
					integrity: t.integrity,
					media: t.media,
					hrefLang: t.hrefLang,
					referrerPolicy: t.referrerPolicy
				}), e = 0; e < ko.length; e++) p(this, ko[e]);
				ko.length = 0;
			}
		}
		function ze(e) {
			e.sheets.forEach(Re, this), e.sheets.clear();
		}
		function Be(e, t) {
			(t.instructions & si) === ni && (t.instructions |= si, e.push(Fo, g(N("_" + t.idPrefix + "R_")), Hi));
		}
		function Ve(e, t) {
			p(e, Io);
			var n = Io;
			t.stylesheets.forEach(function(t) {
				if (t.state !== Ho) if (t.state === Uo) p(e, n), t = t.props.href, C(t, "href"), p(e, g(Me("" + t))), p(e, zo), n = Lo;
				else {
					p(e, n);
					var r = t.props["data-precedence"], i = t.props;
					for (var a in p(e, g(Me(P("" + t.props.href)))), C(r, "precedence"), r = "" + r, p(e, Ro), p(e, g(Me(r))), i) if (Sr.call(i, a) && (r = i[a], r != null)) switch (a) {
						case "href":
						case "rel":
						case "precedence":
						case "data-precedence": break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: He(e, a, r);
					}
					p(e, zo), n = Lo, t.state = Uo;
				}
			}), p(e, zo);
		}
		function He(e, t, n) {
			var r = t.toLowerCase();
			switch (typeof n) {
				case "function":
				case "symbol": return;
			}
			switch (t) {
				case "innerHTML":
				case "dangerouslySetInnerHTML":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "style":
				case "ref": return;
				case "className":
					r = "class", C(n, r), t = "" + n;
					break;
				case "hidden":
					if (!1 === n) return;
					t = "";
					break;
				case "src":
				case "href":
					n = P(n), C(n, r), t = "" + n;
					break;
				default:
					if (2 < t.length && (t[0] === "o" || t[0] === "O") && (t[1] === "n" || t[1] === "N") || !E(t)) return;
					C(n, r), t = "" + n;
			}
			p(e, Ro), p(e, g(Me(r))), p(e, Ro), p(e, g(Me(t)));
		}
		function Ue() {
			return {
				styles: /* @__PURE__ */ new Set(),
				stylesheets: /* @__PURE__ */ new Set(),
				suspenseyImages: !1
			};
		}
		function U(e, t, n, r) {
			(e.scriptResources.hasOwnProperty(n) || e.moduleScriptResources.hasOwnProperty(n)) && console.error("Internal React Error: React expected bootstrap script or module with src \"%s\" to not have been preloaded already. please file an issue", n), e.scriptResources[n] = li, e.moduleScriptResources[n] = li, e = [], ge(e, r), t.bootstrapScripts.add(e);
		}
		function We(e, t) {
			e.crossOrigin ??= t[0], e.integrity ??= t[1];
		}
		function Ge(e, t, n) {
			for (var r in e = Ke(e), t = Je(t, "as"), t = "<" + e + ">; rel=preload; as=\"" + t + "\"", n) Sr.call(n, r) && (e = n[r], typeof e == "string" && (t += "; " + r.toLowerCase() + "=\"" + Je(e, r) + "\""));
			return t;
		}
		function Ke(e) {
			return C(e, "href"), ("" + e).replace(Wo, qe);
		}
		function qe(e) {
			switch (e) {
				case "<": return "%3C";
				case ">": return "%3E";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Je(e, t) {
			return x(e) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", t, b(e)), S(e)), ("" + e).replace(Go, W);
		}
		function W(e) {
			switch (e) {
				case "\"": return "%22";
				case "'": return "%27";
				case ";": return "%3B";
				case ",": return "%2C";
				case "\n": return "%0A";
				case "\r": return "%0D";
				default: throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
			}
		}
		function Ye(e) {
			this.styles.add(e);
		}
		function Xe(e) {
			this.stylesheets.add(e);
		}
		function G(e, t) {
			t.styles.forEach(Ye, e), t.stylesheets.forEach(Xe, e), t.suspenseyImages && (e.suspenseyImages = !0);
		}
		function Ze(e) {
			return 0 < e.stylesheets.size || e.suspenseyImages;
		}
		function K(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === qo ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Jn: return "Fragment";
				case Xn: return "Profiler";
				case Yn: return "StrictMode";
				case er: return "Suspense";
				case tr: return "SuspenseList";
				case ar: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case qn: return "Portal";
				case Qn: return e.displayName || "Context";
				case Zn: return (e._context.displayName || "Context") + ".Consumer";
				case $n:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case nr: return t = e.displayName || null, t === null ? K(e.type) || "Memo" : t;
				case rr:
					t = e._payload, e = e._init;
					try {
						return K(e(t));
					} catch {}
			}
			return null;
		}
		function Qe(e, t) {
			if (e !== t) {
				e.context._currentValue = e.parentValue, e = e.parent;
				var n = t.parent;
				if (e === null) {
					if (n !== null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
				} else {
					if (n === null) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
					Qe(e, n);
				}
				t.context._currentValue = t.value;
			}
		}
		function $e(e) {
			e.context._currentValue = e.parentValue, e = e.parent, e !== null && $e(e);
		}
		function et(e) {
			var t = e.parent;
			t !== null && et(t), e.context._currentValue = e.value;
		}
		function tt(e, t) {
			if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === t.depth ? Qe(e, t) : tt(e, t);
		}
		function q(e, t) {
			var n = t.parent;
			if (n === null) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
			e.depth === n.depth ? Qe(e, n) : q(e, n), t.context._currentValue = t.value;
		}
		function J(e) {
			var t = Xo;
			t !== e && (t === null ? et(e) : e === null ? $e(t) : t.depth === e.depth ? Qe(t, e) : t.depth > e.depth ? tt(t, e) : q(t, e), Xo = e);
		}
		function nt(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				ss.has(t) || (ss.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function rt(e, t) {
			e = (e = e.constructor) && K(e) || "ReactClass";
			var n = e + "." + t;
			Zo[n] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", t, e), Zo[n] = !0);
		}
		function it(e, t, n) {
			var r = e.id;
			e = e.overflow;
			var i = 32 - us(r) - 1;
			r &= ~(1 << i), n += 1;
			var a = 32 - us(t) + i;
			if (30 < a) {
				var o = i - i % 5;
				return a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, {
					id: 1 << 32 - us(t) + i | n << i | r,
					overflow: a + e
				};
			}
			return {
				id: 1 << a | n << i | r,
				overflow: e
			};
		}
		function at(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (ds(e) / fs | 0) | 0;
		}
		function ot() {}
		function st(e, t, n) {
			switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(ot, ot), t = n), t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw t.reason;
				default:
					switch (typeof t.status == "string" ? t.then(ot, ot) : (e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					})), t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw t.reason;
					}
					throw ms = t, ps;
			}
		}
		function ct() {
			if (ms === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = ms;
			return ms = null, e;
		}
		function lt(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function ut() {
			if (gs === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return js && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"), gs;
		}
		function dt() {
			if (0 < As) throw Error("Rendered more hooks than during the previous render");
			return {
				memoizedState: null,
				queue: null,
				next: null
			};
		}
		function ft() {
			return xs === null ? bs === null ? (Ss = !1, bs = xs = dt()) : (Ss = !0, xs = bs) : xs.next === null ? (Ss = !1, xs = xs.next = dt()) : (Ss = !0, xs = xs.next), xs;
		}
		function pt() {
			var e = Os;
			return Os = null, e;
		}
		function mt() {
			js = !1, ys = vs = _s = gs = null, Cs = !1, bs = null, As = 0, xs = ks = null;
		}
		function ht(e) {
			return js && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), e._currentValue;
		}
		function gt(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function _t(e, t, n) {
			if (e !== gt && (Ms = "useReducer"), gs = ut(), xs = ft(), Ss) {
				if (n = xs.queue, t = n.dispatch, ks !== null) {
					var r = ks.get(n);
					if (r !== void 0) {
						ks.delete(n), n = xs.memoizedState;
						do {
							var i = r.action;
							js = !0, n = e(n, i), js = !1, r = r.next;
						} while (r !== null);
						return xs.memoizedState = n, [n, t];
					}
				}
				return [xs.memoizedState, t];
			}
			return js = !0, e = e === gt ? typeof t == "function" ? t() : t : n === void 0 ? t : n(t), js = !1, xs.memoizedState = e, e = xs.queue = {
				last: null,
				dispatch: null
			}, e = e.dispatch = yt.bind(null, gs, e), [xs.memoizedState, e];
		}
		function vt(e, t) {
			if (gs = ut(), xs = ft(), t = t === void 0 ? null : t, xs !== null) {
				var n = xs.memoizedState;
				if (n !== null && t !== null) {
					a: {
						var r = n[1];
						if (r === null) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ms), r = !1;
						else {
							t.length !== r.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", Ms, "[" + t.join(", ") + "]", "[" + r.join(", ") + "]");
							for (var i = 0; i < r.length && i < t.length; i++) if (!hs(t[i], r[i])) {
								r = !1;
								break a;
							}
							r = !0;
						}
					}
					if (r) return n[0];
				}
			}
			return js = !0, e = e(), js = !1, xs.memoizedState = [e, t], e;
		}
		function yt(e, t, n) {
			if (25 <= As) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
			if (e === gs) if (Cs = !0, e = {
				action: n,
				next: null
			}, ks === null && (ks = /* @__PURE__ */ new Map()), n = ks.get(t), n === void 0) ks.set(t, e);
			else {
				for (t = n; t.next !== null;) t = t.next;
				t.next = e;
			}
		}
		function bt() {
			throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
		}
		function xt() {
			throw Error("startTransition cannot be called during server rendering.");
		}
		function St() {
			throw Error("Cannot update optimistic state while rendering.");
		}
		function Ct(e, t, n) {
			ut();
			var r = Ts++, i = vs;
			if (typeof e.$$FORM_ACTION == "function") {
				var a = null, o = ys;
				i = i.formState;
				var s = e.$$IS_SIGNATURE_EQUAL;
				if (i !== null && typeof s == "function") {
					var c = i[1];
					s.call(e, i[2], i[3]) && (a = n === void 0 ? "k" + u(JSON.stringify([
						o,
						null,
						r
					]), 0) : "p" + n, c === a && (Es = r, t = i[0]));
				}
				var l = e.bind(null, t);
				return e = function(e) {
					l(e);
				}, typeof l.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(e) {
					e = l.$$FORM_ACTION(e), n !== void 0 && (C(n, "target"), n += "", e.action = n);
					var t = e.data;
					return t && (a === null && (a = n === void 0 ? "k" + u(JSON.stringify([
						o,
						null,
						r
					]), 0) : "p" + n), t.append("$ACTION_KEY", a)), e;
				}), [
					t,
					e,
					!1
				];
			}
			var d = e.bind(null, t);
			return [
				t,
				function(e) {
					d(e);
				},
				!1
			];
		}
		function wt(e) {
			var t = Ds;
			return Ds += 1, Os === null && (Os = []), st(Os, e, t);
		}
		function Tt() {
			throw Error("Cache cannot be refreshed during server rendering.");
		}
		function Et() {}
		function Dt() {
			if (Ls === 0) {
				Rs = console.log, zs = console.info, Bs = console.warn, Vs = console.error, Hs = console.group, Us = console.groupCollapsed, Ws = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: Et,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			Ls++;
		}
		function Ot() {
			if (Ls--, Ls === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: xr({}, e, { value: Rs }),
					info: xr({}, e, { value: zs }),
					warn: xr({}, e, { value: Bs }),
					error: xr({}, e, { value: Vs }),
					group: xr({}, e, { value: Hs }),
					groupCollapsed: xr({}, e, { value: Us }),
					groupEnd: xr({}, e, { value: Ws })
				});
			}
			0 > Ls && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function kt(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function At(e) {
			if (Gs === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				Gs = t && t[1] || "", Ks = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + Gs + e + Ks;
		}
		function jt(e, t) {
			if (!e || qs) return "";
			var n = Js.get(e);
			if (n !== void 0) return n;
			qs = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var r = null;
			r = Qr.H, Qr.H = null, Dt();
			try {
				var i = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									r = e;
								}
								e.call(n.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
					}
					return [null, null];
				} };
				i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
				a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
				if (s && c) {
					var l = s.split("\n"), u = c.split("\n");
					for (o = a = 0; a < l.length && !l[a].includes("DetermineComponentFrameRoot");) a++;
					for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					if (a === l.length || o === u.length) for (a = l.length - 1, o = u.length - 1; 1 <= a && 0 <= o && l[a] !== u[o];) o--;
					for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== u[o]) {
						if (a !== 1 || o !== 1) do
							if (a--, o--, 0 > o || l[a] !== u[o]) {
								var d = "\n" + l[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && Js.set(e, d), d;
							}
						while (1 <= a && 0 <= o);
						break;
					}
				}
			} finally {
				qs = !1, Qr.H = r, Ot(), Error.prepareStackTrace = n;
			}
			return l = (l = e ? e.displayName || e.name : "") ? At(l) : "", typeof e == "function" && Js.set(e, l), l;
		}
		function Mt(e) {
			if (typeof e == "string") return At(e);
			if (typeof e == "function") return e.prototype && e.prototype.isReactComponent ? jt(e, !0) : jt(e, !1);
			if (typeof e == "object" && e) {
				switch (e.$$typeof) {
					case $n: return jt(e.render, !1);
					case nr: return jt(e.type, !1);
					case rr:
						var t = e, n = t._payload;
						t = t._init;
						try {
							e = t(n);
						} catch {
							return At("Lazy");
						}
						return Mt(e);
				}
				if (typeof e.name == "string") {
					a: {
						if (n = e.name, t = e.env, e = e.debugLocation, e != null) {
							e = kt(e);
							var r = e.lastIndexOf("\n");
							if (e = r === -1 ? e : e.slice(r + 1), e.indexOf(n) !== -1) {
								n = "\n" + e;
								break a;
							}
						}
						n = At(n + (t ? " [" + t + "]" : ""));
					}
					return n;
				}
			}
			switch (e) {
				case tr: return At("SuspenseList");
				case er: return At("Suspense");
			}
			return "";
		}
		function Nt() {
			var e = rc();
			1e3 < e - tc && (Qr.recentlyCreatedOwnerStacks = 0, tc = e);
		}
		function Pt(e, t) {
			return (500 < t.byteSize || Ze(t.contentState)) && t.contentPreamble === null;
		}
		function Ft(e) {
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var t = e.environmentName;
				e = [e].slice(0), typeof e[0] == "string" ? e.splice(0, 1, "%c%s%c " + e[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", "") : e.splice(0, 0, "%c%s%c", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + t + " ", ""), e.unshift(console), t = Ko.apply(console.error, e), t();
			} else console.error(e);
			return null;
		}
		function It(e, t, n, r, i, a, o, s, c, l, u) {
			var d = /* @__PURE__ */ new Set();
			this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = t, this.rootFormatContext = n, this.progressiveChunkSize = r === void 0 ? 12800 : r, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.byteSize = 0, this.abortableTasks = d, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = i === void 0 ? Ft : i, this.onPostpone = l === void 0 ? ot : l, this.onAllReady = a === void 0 ? ot : a, this.onShellReady = o === void 0 ? ot : o, this.onShellError = s === void 0 ? ot : s, this.onFatalError = c === void 0 ? ot : c, this.formState = u === void 0 ? null : u, this.didWarnForKey = null;
		}
		function Lt(e, t, n, r, i, a, o, s, c, l, u, d) {
			return Nt(), t = new It(t, n, r, i, a, o, s, c, l, u, d), n = Wt(t, 0, null, r, !1, !1), n.parentFlushed = !0, e = Ht(t, null, e, -1, null, n, null, null, t.abortableTasks, null, r, null, ls, null, null, Jo, null), Jt(e), t.pingedTasks.push(e), t;
		}
		function Rt(e, t, n, r, i, a, o, s, c, l, u) {
			return e = Lt(e, t, n, r, i, a, o, s, c, l, u, void 0), e.trackedPostpones = {
				workingMap: /* @__PURE__ */ new Map(),
				rootNodes: [],
				rootSlots: null
			}, e;
		}
		function zt(e, t, n, r, i, a, o, s, c) {
			return Nt(), n = new It(t.resumableState, n, t.rootFormatContext, t.progressiveChunkSize, r, i, a, o, s, c, null), n.nextSegmentId = t.nextSegmentId, typeof t.replaySlots == "number" ? (r = Wt(n, 0, null, t.rootFormatContext, !1, !1), r.parentFlushed = !0, e = Ht(n, null, e, -1, null, r, null, null, n.abortableTasks, null, t.rootFormatContext, null, ls, null, null, Jo, null), Jt(e), n.pingedTasks.push(e), n) : (e = Ut(n, null, {
				nodes: t.replayNodes,
				slots: t.replaySlots,
				pendingTasks: 0
			}, e, -1, null, null, n.abortableTasks, null, t.rootFormatContext, null, ls, null, null, Jo, null), Jt(e), n.pingedTasks.push(e), n);
		}
		function Y(e, t, n, r, i, a, o, s, c) {
			return e = zt(e, t, n, r, i, a, o, s, c), e.trackedPostpones = {
				workingMap: /* @__PURE__ */ new Map(),
				rootNodes: [],
				rootSlots: null
			}, e;
		}
		function Bt(e, t) {
			e.pingedTasks.push(t), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? _r(function() {
				return Dn(e);
			}) : d(function() {
				return Dn(e);
			}));
		}
		function Vt(e, t, n, r, i) {
			return n = {
				status: oc,
				rootSegmentID: -1,
				parentFlushed: !1,
				pendingTasks: 0,
				row: t,
				completedSegments: [],
				byteSize: 0,
				fallbackAbortableTasks: n,
				errorDigest: null,
				contentState: Ue(),
				fallbackState: Ue(),
				contentPreamble: r,
				fallbackPreamble: i,
				trackedContentKeyPath: null,
				trackedFallbackNode: null,
				errorMessage: null,
				errorStack: null,
				errorComponentStack: null
			}, t !== null && (t.pendingTasks++, r = t.boundaries, r !== null && (e.allPendingTasks++, n.pendingTasks++, r.push(n)), e = t.inheritedHoistables, e !== null && G(n.contentState, e)), n;
		}
		function Ht(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g) {
			e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++, p !== null && p.pendingTasks++;
			var _ = {
				replay: null,
				node: n,
				childIndex: r,
				ping: function() {
					return Bt(e, _);
				},
				blockedBoundary: i,
				blockedSegment: a,
				blockedPreamble: o,
				hoistableState: s,
				abortSet: c,
				keyPath: l,
				formatContext: u,
				context: d,
				treeContext: f,
				row: p,
				componentStack: m,
				thenableState: t
			};
			return _.debugTask = g, c.add(_), _;
		}
		function Ut(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
			e.allPendingTasks++, a === null ? e.pendingRootTasks++ : a.pendingTasks++, f !== null && f.pendingTasks++, n.pendingTasks++;
			var g = {
				replay: n,
				node: r,
				childIndex: i,
				ping: function() {
					return Bt(e, g);
				},
				blockedBoundary: a,
				blockedSegment: null,
				blockedPreamble: null,
				hoistableState: o,
				abortSet: s,
				keyPath: c,
				formatContext: l,
				context: u,
				treeContext: d,
				row: f,
				componentStack: p,
				thenableState: t
			};
			return g.debugTask = h, s.add(g), g;
		}
		function Wt(e, t, n, r, i, a) {
			return {
				status: oc,
				parentFlushed: !1,
				id: -1,
				index: t,
				chunks: [],
				children: [],
				preambleChildren: [],
				parentFormatContext: r,
				boundary: n,
				lastPushedText: i,
				textEmbedded: a
			};
		}
		function Gt() {
			if (Fs === null || Fs.componentStack === null) return "";
			var e = Fs.componentStack;
			try {
				var t = "";
				if (typeof e.type == "string") t += At(e.type);
				else if (typeof e.type == "function") {
					if (!e.owner) {
						var n = t, r = e.type, i = r ? r.displayName || r.name : "", a = i ? At(i) : "";
						t = n + a;
					}
				} else e.owner || (t += Mt(e.type));
				for (; e;) n = null, e.debugStack == null ? (a = e, a.stack != null && (n = typeof a.stack == "string" ? a.stack : a.stack = kt(a.stack))) : n = kt(e.debugStack), (e = e.owner) && n && (t += "\n" + n);
				var o = t;
			} catch (e) {
				o = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return o;
		}
		function Kt(e, t) {
			if (t != null) for (var n = t.length - 1; 0 <= n; n--) {
				var r = t[n];
				if (typeof r.name == "string" || typeof r.time == "number") break;
				if (r.awaited != null) {
					var i = r.debugStack == null ? r.awaited : r;
					if (i.debugStack !== void 0) {
						e.componentStack = {
							parent: e.componentStack,
							type: r,
							owner: i.owner,
							stack: i.debugStack
						}, e.debugTask = i.debugTask;
						break;
					}
				}
			}
		}
		function qt(e, t) {
			if (t != null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				typeof r.name == "string" && r.debugStack !== void 0 && (e.componentStack = {
					parent: e.componentStack,
					type: r,
					owner: r.owner,
					stack: r.debugStack
				}, e.debugTask = r.debugTask);
			}
		}
		function Jt(e) {
			var t = e.node;
			if (typeof t == "object" && t) switch (t.$$typeof) {
				case Kn:
					var n = t.type, r = t._owner, i = t._debugStack;
					qt(e, t._debugInfo), e.debugTask = t._debugTask, e.componentStack = {
						parent: e.componentStack,
						type: n,
						owner: r,
						stack: i
					};
					break;
				case rr:
					qt(e, t._debugInfo);
					break;
				default: typeof t.then == "function" && qt(e, t._debugInfo);
			}
		}
		function Yt(e) {
			return e === null ? null : {
				parent: e.parent,
				type: "Suspense Fallback",
				owner: e.owner,
				stack: e.stack
			};
		}
		function X(e) {
			var t = {};
			return e && Object.defineProperty(t, "componentStack", {
				configurable: !0,
				enumerable: !0,
				get: function() {
					try {
						var n = "", r = e;
						do
							n += Mt(r.type), r = r.parent;
						while (r);
						var i = n;
					} catch (e) {
						i = "\nError generating stack: " + e.message + "\n" + e.stack;
					}
					return Object.defineProperty(t, "componentStack", { value: i }), i;
				}
			}), t;
		}
		function Xt(e, t, n, r, i) {
			e.errorDigest = t, n instanceof Error ? (t = String(n.message), n = String(n.stack)) : (t = typeof n == "object" && n ? l(n) : String(n), n = null), i = i ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n", e.errorMessage = i + t, e.errorStack = n === null ? null : i + n, e.errorComponentStack = r.componentStack;
		}
		function Zt(e, t, n, r) {
			if (e = e.onError, t = r ? r.run(e.bind(null, t, n)) : e(t, n), t != null && typeof t != "string") console.error("onError returned something with a type other than \"string\". onError should return a string and may return null or undefined but must not return anything else. It received something of type \"%s\" instead", typeof t);
			else return t;
		}
		function Qt(e, t, n, r) {
			n = e.onShellError;
			var i = e.onFatalError;
			r ? (r.run(n.bind(null, t)), r.run(i.bind(null, t))) : (n(t), i(t)), e.destination === null ? (e.status = 13, e.fatalError = t) : (e.status = fc, y(e.destination, t));
		}
		function Z(e, t) {
			$t(e, t.next, t.hoistables);
		}
		function $t(e, t, n) {
			for (; t !== null;) {
				n !== null && (G(t.hoistables, n), t.inheritedHoistables = n);
				var r = t.boundaries;
				if (r !== null) {
					t.boundaries = null;
					for (var i = 0; i < r.length; i++) {
						var a = r[i];
						n !== null && G(a.contentState, n), En(e, a, null, null);
					}
				}
				if (t.pendingTasks--, 0 < t.pendingTasks) break;
				n = t.hoistables, t = t.next;
			}
		}
		function en(e, t) {
			var n = t.boundaries;
			if (n !== null && t.pendingTasks === n.length) {
				for (var r = !0, i = 0; i < n.length; i++) {
					var a = n[i];
					if (a.pendingTasks !== 1 || a.parentFlushed || Pt(e, a)) {
						r = !1;
						break;
					}
				}
				r && $t(e, t, t.hoistables);
			}
		}
		function tn(e) {
			var t = {
				pendingTasks: 1,
				boundaries: null,
				hoistables: Ue(),
				inheritedHoistables: null,
				together: !1,
				next: null
			};
			return e !== null && 0 < e.pendingTasks && (t.pendingTasks++, t.boundaries = [], e.next = t), t;
		}
		function nn(e, t, n, r, i) {
			var a = t.keyPath, o = t.treeContext, s = t.row, c = t.componentStack, l = t.debugTask;
			qt(t, t.node.props.children._debugInfo), t.keyPath = n, n = r.length;
			var u = null;
			if (t.replay !== null) {
				var d = t.replay.slots;
				if (typeof d == "object" && d) for (var f = 0; f < n; f++) {
					var p = i !== "backwards" && i !== "unstable_legacy-backwards" ? f : n - 1 - f, m = r[p];
					t.row = u = tn(u), t.treeContext = it(o, n, p);
					var h = d[p];
					typeof h == "number" ? (an(e, t, h, m, p), delete d[p]) : _n(e, t, m, p), --u.pendingTasks === 0 && Z(e, u);
				}
				else for (d = 0; d < n; d++) f = i !== "backwards" && i !== "unstable_legacy-backwards" ? d : n - 1 - d, p = r[f], un(e, t, p), t.row = u = tn(u), t.treeContext = it(o, n, f), _n(e, t, p, f), --u.pendingTasks === 0 && Z(e, u);
			} else if (i !== "backwards" && i !== "unstable_legacy-backwards") for (i = 0; i < n; i++) d = r[i], un(e, t, d), t.row = u = tn(u), t.treeContext = it(o, n, i), _n(e, t, d, i), --u.pendingTasks === 0 && Z(e, u);
			else {
				for (i = t.blockedSegment, d = i.children.length, f = i.chunks.length, p = n - 1; 0 <= p; p--) {
					m = r[p], t.row = u = tn(u), t.treeContext = it(o, n, p), h = Wt(e, f, null, t.formatContext, p === 0 ? i.lastPushedText : !0, !0), i.children.splice(d, 0, h), t.blockedSegment = h, un(e, t, m);
					try {
						_n(e, t, m, p), h.lastPushedText && h.textEmbedded && h.chunks.push(Fi), h.status = sc, Tn(e, t.blockedBoundary, h), --u.pendingTasks === 0 && Z(e, u);
					} catch (t) {
						throw h.status = e.status === 12 ? lc : uc, t;
					}
				}
				t.blockedSegment = i, i.lastPushedText = !1;
			}
			s !== null && u !== null && 0 < u.pendingTasks && (s.pendingTasks++, u.next = s), t.treeContext = o, t.row = s, t.keyPath = a, t.componentStack = c, t.debugTask = l;
		}
		function Q(e, t, n, r, i, a) {
			var o = t.thenableState;
			for (t.thenableState = null, gs = {}, _s = t, vs = e, ys = n, js = !1, Ts = ws = 0, Es = -1, Ds = 0, Os = o, e = Xs(r, i, a); Cs;) Cs = !1, Ts = ws = 0, Es = -1, Ds = 0, As += 1, xs = null, e = r(i, a);
			return mt(), e;
		}
		function $(e, t, n, r, i, a, o) {
			var s = !1;
			if (a !== 0 && e.formState !== null) {
				var c = t.blockedSegment;
				if (c !== null) {
					s = !0, c = c.chunks;
					for (var l = 0; l < a; l++) l === o ? c.push(sa) : c.push(ca);
				}
			}
			a = t.keyPath, t.keyPath = n, i ? (n = t.treeContext, t.treeContext = it(n, 1, 0), _n(e, t, r, -1), t.treeContext = n) : s ? _n(e, t, r, -1) : cn(e, t, r, -1), t.keyPath = a;
		}
		function rn(e, t, n, r, a, o) {
			if (typeof r == "function") if (r.prototype && r.prototype.isReactComponent) {
				var s = a;
				if ("ref" in a) for (var c in s = {}, a) c !== "ref" && (s[c] = a[c]);
				var l = r.defaultProps;
				if (l) for (var u in s === a && (s = xr({}, s, a)), l) s[u] === void 0 && (s[u] = l[u]);
				var d = s, f = Jo, p = r.contextType;
				if ("contextType" in r && p !== null && (p === void 0 || p.$$typeof !== Qn) && !os.has(r)) {
					os.add(r);
					var m = p === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p == "object" ? p.$$typeof === Zn ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}." : " However, it is set to a " + typeof p + ".";
					console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", K(r) || "Component", m);
				}
				typeof p == "object" && p && (f = p._currentValue);
				var h = new r(d, f);
				if (typeof r.getDerivedStateFromProps == "function" && (h.state === null || h.state === void 0)) {
					var g = K(r) || "Component";
					$o.has(g) || ($o.add(g), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", g, h.state === null ? "null" : "undefined", g));
				}
				if (typeof r.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function") {
					var _ = null, v = null, y = null;
					if (typeof h.componentWillMount == "function" && !0 !== h.componentWillMount.__suppressDeprecationWarning ? _ = "componentWillMount" : typeof h.UNSAFE_componentWillMount == "function" && (_ = "UNSAFE_componentWillMount"), typeof h.componentWillReceiveProps == "function" && !0 !== h.componentWillReceiveProps.__suppressDeprecationWarning ? v = "componentWillReceiveProps" : typeof h.UNSAFE_componentWillReceiveProps == "function" && (v = "UNSAFE_componentWillReceiveProps"), typeof h.componentWillUpdate == "function" && !0 !== h.componentWillUpdate.__suppressDeprecationWarning ? y = "componentWillUpdate" : typeof h.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), _ !== null || v !== null || y !== null) {
						var b = K(r) || "Component", x = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						ts.has(b) || (ts.add(b), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", b, x, _ === null ? "" : "\n  " + _, v === null ? "" : "\n  " + v, y === null ? "" : "\n  " + y));
					}
				}
				var S = K(r) || "Component";
				h.render || (r.prototype && typeof r.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", S) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", S)), !h.getInitialState || h.getInitialState.isReactClassApproved || h.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", S), h.getDefaultProps && !h.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", S), h.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", S), r.childContextTypes && !as.has(r) && (as.add(r), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", S)), r.contextTypes && !is.has(r) && (is.add(r), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", S)), typeof h.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", S), r.prototype && r.prototype.isPureReactComponent && h.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", K(r) || "A pure component"), typeof h.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", S), typeof h.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", S), typeof h.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", S), typeof h.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", S);
				var C = h.props !== d;
				h.props !== void 0 && C && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", S), h.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", S, S), typeof h.getSnapshotBeforeUpdate != "function" || typeof h.componentDidUpdate == "function" || es.has(r) || (es.add(r), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", K(r))), typeof h.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", S), typeof h.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", S), typeof r.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", S);
				var w = h.state;
				w && (typeof w != "object" || ur(w)) && console.error("%s.state: must be set to an object or null", S), typeof h.getChildContext == "function" && typeof r.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", S);
				var T = h.state === void 0 ? null : h.state;
				h.updater = cs, h.props = d, h.state = T;
				var E = {
					queue: [],
					replace: !1
				};
				h._reactInternals = E;
				var D = r.contextType;
				if (h.context = typeof D == "object" && D ? D._currentValue : Jo, h.state === d) {
					var O = K(r) || "Component";
					ns.has(O) || (ns.add(O), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", O));
				}
				var k = r.getDerivedStateFromProps;
				if (typeof k == "function") {
					var A = k(d, T);
					if (A === void 0) {
						var j = K(r) || "Component";
						rs.has(j) || (rs.add(j), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", j));
					}
					h.state = A == null ? T : xr({}, T, A);
				}
				if (typeof r.getDerivedStateFromProps != "function" && typeof h.getSnapshotBeforeUpdate != "function" && (typeof h.UNSAFE_componentWillMount == "function" || typeof h.componentWillMount == "function")) {
					var M = h.state;
					if (typeof h.componentWillMount == "function") {
						if (!0 !== h.componentWillMount.__suppressDeprecationWarning) {
							var N = K(r) || "Unknown";
							Qo[N] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", N), Qo[N] = !0);
						}
						h.componentWillMount();
					}
					if (typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), M !== h.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", K(r) || "Component"), cs.enqueueReplaceState(h, h.state, null)), E.queue !== null && 0 < E.queue.length) {
						var P = E.queue, F = E.replace;
						if (E.queue = null, E.replace = !1, F && P.length === 1) h.state = P[0];
						else {
							for (var ee = F ? P[0] : h.state, I = !0, R = +!!F; R < P.length; R++) {
								var z = P[R], ne = typeof z == "function" ? z.call(h, ee, d, void 0) : z;
								ne != null && (I ? (I = !1, ee = xr({}, ee, ne)) : xr(ee, ne));
							}
							h.state = ee;
						}
					} else E.queue = null;
				}
				var ie = Qs(h);
				if (e.status === 12) throw null;
				h.props !== d && (vc || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", K(r) || "a component"), vc = !0);
				var ae = t.keyPath;
				t.keyPath = n, cn(e, t, ie, -1), t.keyPath = ae;
			} else {
				if (r.prototype && typeof r.prototype.render == "function") {
					var oe = K(r) || "Unknown";
					mc[oe] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", oe, oe), mc[oe] = !0);
				}
				var se = Q(e, t, n, r, a, void 0);
				if (e.status === 12) throw null;
				var ce = ws !== 0, le = Ts, V = Es;
				if (r.contextTypes) {
					var ue = K(r) || "Unknown";
					hc[ue] || (hc[ue] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", ue));
				}
				if (r && r.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", r.displayName || r.name || "Component"), typeof r.getDerivedStateFromProps == "function") {
					var de = K(r) || "Unknown";
					_c[de] || (console.error("%s: Function components do not support getDerivedStateFromProps.", de), _c[de] = !0);
				}
				if (typeof r.contextType == "object" && r.contextType !== null) {
					var fe = K(r) || "Unknown";
					gc[fe] || (console.error("%s: Function components do not support contextType.", fe), gc[fe] = !0);
				}
				$(e, t, n, se, ce, le, V);
			}
			else if (typeof r == "string") {
				var pe = t.blockedSegment;
				if (pe === null) {
					var me = a.children, he = t.formatContext, ge = t.keyPath;
					t.formatContext = te(he, r, a), t.keyPath = n, _n(e, t, me, -1), t.formatContext = he, t.keyPath = ge;
				} else {
					var _e = we(pe.chunks, r, a, e.resumableState, e.renderState, t.blockedPreamble, t.hoistableState, t.formatContext, pe.lastPushedText);
					pe.lastPushedText = !1;
					var ve = t.formatContext, ye = t.keyPath;
					if (t.keyPath = n, (t.formatContext = te(ve, r, a)).insertionMode === Oi) {
						var be = Wt(e, 0, null, t.formatContext, !1, !1);
						pe.preambleChildren.push(be), t.blockedSegment = be;
						try {
							be.status = 6, _n(e, t, _e, -1), be.lastPushedText && be.textEmbedded && be.chunks.push(Fi), be.status = sc, Tn(e, t.blockedBoundary, be);
						} finally {
							t.blockedSegment = pe;
						}
					} else _n(e, t, _e, -1);
					t.formatContext = ve, t.keyPath = ye;
					a: {
						var xe = pe.chunks, Se = e.resumableState;
						switch (r) {
							case "title":
							case "style":
							case "script":
							case "area":
							case "base":
							case "br":
							case "col":
							case "embed":
							case "hr":
							case "img":
							case "input":
							case "keygen":
							case "link":
							case "meta":
							case "param":
							case "source":
							case "track":
							case "wbr": break a;
							case "body":
								if (ve.insertionMode <= Ei) {
									Se.hasBody = !0;
									break a;
								}
								break;
							case "html":
								if (ve.insertionMode === Ti) {
									Se.hasHtml = !0;
									break a;
								}
								break;
							case "head": if (ve.insertionMode <= Ei) break a;
						}
						xe.push(Te(r));
					}
					pe.lastPushedText = !1;
				}
			} else {
				switch (r) {
					case or:
					case Yn:
					case Xn:
					case Jn:
						var Ce = t.keyPath;
						t.keyPath = n, cn(e, t, a.children, -1), t.keyPath = Ce;
						return;
					case ar:
						var Ee = t.blockedSegment;
						if (Ee === null) {
							if (a.mode !== "hidden") {
								var De = t.keyPath;
								t.keyPath = n, _n(e, t, a.children, -1), t.keyPath = De;
							}
						} else if (a.mode !== "hidden") {
							Ee.chunks.push(xa), Ee.lastPushedText = !1;
							var Oe = t.keyPath;
							t.keyPath = n, _n(e, t, a.children, -1), t.keyPath = Oe, Ee.chunks.push(Sa), Ee.lastPushedText = !1;
						}
						return;
					case tr:
						a: {
							var ke = a.children, Ae = a.revealOrder;
							if (Ae === "forwards" || Ae === "backwards" || Ae === "unstable_legacy-backwards") {
								if (ur(ke)) {
									nn(e, t, n, ke, Ae);
									break a;
								}
								var je = i(ke);
								if (je) {
									var Me = je.call(ke);
									if (Me) {
										sn(t, ke, -1, Me, je);
										var Ne = Me.next();
										if (!Ne.done) {
											var Pe = [];
											do
												Pe.push(Ne.value), Ne = Me.next();
											while (!Ne.done);
											nn(e, t, n, ke, Ae);
										}
										break a;
									}
								}
							}
							if (Ae === "together") {
								var Fe = t.keyPath, H = t.row, Ie = t.row = tn(null);
								Ie.boundaries = [], Ie.together = !0, t.keyPath = n, cn(e, t, ke, -1), --Ie.pendingTasks === 0 && Z(e, Ie), t.keyPath = Fe, t.row = H, H !== null && 0 < Ie.pendingTasks && (H.pendingTasks++, Ie.next = H);
							} else {
								var Le = t.keyPath;
								t.keyPath = n, cn(e, t, ke, -1), t.keyPath = Le;
							}
						}
						return;
					case cr:
					case ir: throw Error("ReactDOMServer does not yet support scope components.");
					case er:
						a: if (t.replay !== null) {
							var Re = t.keyPath, ze = t.formatContext, Be = t.row;
							t.keyPath = n, t.formatContext = re(e.resumableState, ze), t.row = null;
							var Ve = a.children;
							try {
								_n(e, t, Ve, -1);
							} finally {
								t.keyPath = Re, t.formatContext = ze, t.row = Be;
							}
						} else {
							var He = t.keyPath, Ue = t.formatContext, U = t.row, We = t.blockedBoundary, Ge = t.blockedPreamble, Ke = t.hoistableState, qe = t.blockedSegment, Je = a.fallback, W = a.children, Ye = /* @__PURE__ */ new Set(), Xe = t.formatContext.insertionMode < Di ? Vt(e, t.row, Ye, L(), L()) : Vt(e, t.row, Ye, null, null);
							e.trackedPostpones !== null && (Xe.trackedContentKeyPath = n);
							var G = Wt(e, qe.chunks.length, Xe, t.formatContext, !1, !1);
							qe.children.push(G), qe.lastPushedText = !1;
							var Ze = Wt(e, 0, null, t.formatContext, !1, !1);
							if (Ze.parentFlushed = !0, e.trackedPostpones !== null) {
								var Qe = t.componentStack, $e = [
									n[0],
									"Suspense Fallback",
									n[2]
								], et = [
									$e[1],
									$e[2],
									[],
									null
								];
								e.trackedPostpones.workingMap.set($e, et), Xe.trackedFallbackNode = et, t.blockedSegment = G, t.blockedPreamble = Xe.fallbackPreamble, t.keyPath = $e, t.formatContext = B(e.resumableState, Ue), t.componentStack = Yt(Qe), G.status = 6;
								try {
									_n(e, t, Je, -1), G.lastPushedText && G.textEmbedded && G.chunks.push(Fi), G.status = sc, Tn(e, We, G);
								} catch (t) {
									throw G.status = e.status === 12 ? lc : uc, t;
								} finally {
									t.blockedSegment = qe, t.blockedPreamble = Ge, t.keyPath = He, t.formatContext = Ue;
								}
								var tt = Ht(e, null, W, -1, Xe, Ze, Xe.contentPreamble, Xe.contentState, t.abortSet, n, re(e.resumableState, t.formatContext), t.context, t.treeContext, null, Qe, Jo, t.debugTask);
								Jt(tt), e.pingedTasks.push(tt);
							} else {
								t.blockedBoundary = Xe, t.blockedPreamble = Xe.contentPreamble, t.hoistableState = Xe.contentState, t.blockedSegment = Ze, t.keyPath = n, t.formatContext = re(e.resumableState, Ue), t.row = null, Ze.status = 6;
								try {
									if (_n(e, t, W, -1), Ze.lastPushedText && Ze.textEmbedded && Ze.chunks.push(Fi), Ze.status = sc, Tn(e, Xe, Ze), wn(Xe, Ze), Xe.pendingTasks === 0 && Xe.status === oc) {
										if (Xe.status = sc, !Pt(e, Xe)) {
											U !== null && --U.pendingTasks === 0 && Z(e, U), e.pendingRootTasks === 0 && t.blockedPreamble && An(e);
											break a;
										}
									} else U !== null && U.together && en(e, U);
								} catch (n) {
									if (Xe.status = ac, e.status === 12) {
										Ze.status = lc;
										var q = e.fatalError;
									} else Ze.status = uc, q = n;
									var J = X(t.componentStack);
									Xt(Xe, Zt(e, q, J, t.debugTask), q, J, !1), mn(e, Xe);
								} finally {
									t.blockedBoundary = We, t.blockedPreamble = Ge, t.hoistableState = Ke, t.blockedSegment = qe, t.keyPath = He, t.formatContext = Ue, t.row = U;
								}
								var nt = Ht(e, null, Je, -1, We, G, Xe.fallbackPreamble, Xe.fallbackState, Ye, [
									n[0],
									"Suspense Fallback",
									n[2]
								], B(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Yt(t.componentStack), Jo, t.debugTask);
								Jt(nt), e.pingedTasks.push(nt);
							}
						}
						return;
				}
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case $n:
						if ("ref" in a) {
							var rt = {};
							for (var it in a) it !== "ref" && (rt[it] = a[it]);
						} else rt = a;
						$(e, t, n, Q(e, t, n, r.render, rt, o), ws !== 0, Ts, Es);
						return;
					case nr:
						rn(e, t, n, r.type, a, o);
						return;
					case Qn:
						var at = a.value, ot = a.children, st = t.context, ct = t.keyPath, lt = r._currentValue;
						r._currentValue = at, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Yo && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Yo;
						var ut = Xo, dt = {
							parent: ut,
							depth: ut === null ? 0 : ut.depth + 1,
							context: r,
							parentValue: lt,
							value: at
						};
						Xo = dt, t.context = dt, t.keyPath = n, cn(e, t, ot, -1);
						var ft = Xo;
						if (ft === null) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
						ft.context !== r && console.error("The parent context is not the expected context. This is probably a bug in React."), ft.context._currentValue = ft.parentValue, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Yo && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Yo, t.context = Xo = ft.parent, t.keyPath = ct, st !== t.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
						return;
					case Zn:
						var pt = r._context, mt = a.children;
						typeof mt != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
						var ht = mt(pt._currentValue), gt = t.keyPath;
						t.keyPath = n, cn(e, t, ht, -1), t.keyPath = gt;
						return;
					case rr:
						var _t = ec(r);
						if (e.status === 12) throw null;
						rn(e, t, n, _t, a, o);
						return;
				}
				var vt = "";
				throw (r === void 0 || typeof r == "object" && r && Object.keys(r).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((r == null ? r : typeof r) + "." + vt));
			}
		}
		function an(e, t, n, r, i) {
			var a = t.replay, o = t.blockedBoundary, s = Wt(e, 0, null, t.formatContext, !1, !1);
			s.id = n, s.parentFlushed = !0;
			try {
				t.replay = null, t.blockedSegment = s, _n(e, t, r, i), s.status = sc, Tn(e, o, s), o === null ? e.completedRootSegment = s : (wn(o, s), o.parentFlushed && e.partialBoundaries.push(o));
			} finally {
				t.replay = a, t.blockedSegment = null;
			}
		}
		function on(e, t, n, r, i, a, o, s, c, l) {
			a = l.nodes;
			for (var u = 0; u < a.length; u++) {
				var d = a[u];
				if (i === d[1]) {
					if (d.length === 4) {
						if (r !== null && r !== d[0]) throw Error("Expected the resume to render <" + d[0] + "> in this slot but instead it rendered <" + r + ">. The tree doesn't match so React will fallback to client rendering.");
						var f = d[2];
						r = d[3], i = t.node, t.replay = {
							nodes: f,
							slots: r,
							pendingTasks: 1
						};
						try {
							if (rn(e, t, n, o, s, c), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (d) {
							if (typeof d == "object" && d && (d === ps || typeof d.then == "function")) throw t.node === i ? t.replay = l : a.splice(u, 1), d;
							t.replay.pendingTasks--, o = X(t.componentStack), s = e, e = t.blockedBoundary, n = d, c = r, r = Zt(s, n, o, t.debugTask), yn(s, e, f, c, n, r, o, !1);
						}
						t.replay = l;
					} else {
						if (o !== er) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (K(o) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
						a: {
							l = void 0, r = d[5], o = d[2], c = d[3], i = d[4] === null ? [] : d[4][2], d = d[4] === null ? null : d[4][3];
							var p = t.keyPath, m = t.formatContext, h = t.row, g = t.replay, _ = t.blockedBoundary, v = t.hoistableState, y = s.children, b = s.fallback, x = /* @__PURE__ */ new Set();
							s = t.formatContext.insertionMode < Di ? Vt(e, t.row, x, L(), L()) : Vt(e, t.row, x, null, null), s.parentFlushed = !0, s.rootSegmentID = r, t.blockedBoundary = s, t.hoistableState = s.contentState, t.keyPath = n, t.formatContext = re(e.resumableState, m), t.row = null, t.replay = {
								nodes: o,
								slots: c,
								pendingTasks: 1
							};
							try {
								if (_n(e, t, y, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
								if (t.replay.pendingTasks--, s.pendingTasks === 0 && s.status === oc) {
									s.status = sc, e.completedBoundaries.push(s);
									break a;
								}
							} catch (n) {
								s.status = ac, f = X(t.componentStack), l = Zt(e, n, f, t.debugTask), Xt(s, l, n, f, !1), t.replay.pendingTasks--, e.clientRenderedBoundaries.push(s);
							} finally {
								t.blockedBoundary = _, t.hoistableState = v, t.replay = g, t.keyPath = p, t.formatContext = m, t.row = h;
							}
							s = Ut(e, null, {
								nodes: i,
								slots: d,
								pendingTasks: 0
							}, b, -1, _, s.fallbackState, x, [
								n[0],
								"Suspense Fallback",
								n[2]
							], B(e.resumableState, t.formatContext), t.context, t.treeContext, t.row, Yt(t.componentStack), Jo, t.debugTask), Jt(s), e.pingedTasks.push(s);
						}
					}
					a.splice(u, 1);
					break;
				}
			}
		}
		function sn(e, t, n, r, i) {
			r === t ? (n !== -1 || e.componentStack === null || typeof e.componentStack.type != "function" || Object.prototype.toString.call(e.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(r) !== "[object Generator]") && (yc || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), yc = !0) : t.entries !== i || bc || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), bc = !0);
		}
		function cn(e, t, n, r) {
			t.replay !== null && typeof t.replay.slots == "number" ? an(e, t, t.replay.slots, n, r) : (t.node = n, t.childIndex = r, n = t.componentStack, r = t.debugTask, Jt(t), ln(e, t), t.componentStack = n, t.debugTask = r);
		}
		function ln(e, t) {
			var n = t.node, r = t.childIndex;
			if (n !== null) {
				if (typeof n == "object") {
					switch (n.$$typeof) {
						case Kn:
							var a = n.type, o = n.key;
							n = n.props;
							var s = n.ref;
							s = s === void 0 ? null : s;
							var c = t.debugTask, l = K(a);
							o ??= r === -1 ? 0 : r;
							var u = [
								t.keyPath,
								l,
								o
							];
							t.replay === null ? c ? c.run(rn.bind(null, e, t, u, a, n, s)) : rn(e, t, u, a, n, s) : c ? c.run(on.bind(null, e, t, u, l, o, r, a, n, s, t.replay)) : on(e, t, u, l, o, r, a, n, s, t.replay);
							return;
						case qn: throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
						case rr:
							if (a = ec(n), e.status === 12) throw null;
							cn(e, t, a, r);
							return;
					}
					if (ur(n)) {
						dn(e, t, n, r);
						return;
					}
					if ((o = i(n)) && (a = o.call(n))) {
						if (sn(t, n, r, a, o), n = a.next(), !n.done) {
							o = [];
							do
								o.push(n.value), n = a.next();
							while (!n.done);
							dn(e, t, o, r);
						}
						return;
					}
					if (typeof n.then == "function") return t.thenableState = null, cn(e, t, wt(n), r);
					if (n.$$typeof === Qn) return cn(e, t, n._currentValue, r);
					throw e = Object.prototype.toString.call(n), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
				}
				typeof n == "string" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = ie(t.chunks, n, e.renderState, t.lastPushedText))) : typeof n == "number" || typeof n == "bigint" ? (t = t.blockedSegment, t !== null && (t.lastPushedText = ie(t.chunks, "" + n, e.renderState, t.lastPushedText))) : (typeof n == "function" && (e = n.displayName || n.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", e, e)), typeof n == "symbol" && console.error("Symbols are not valid as a React child.\n  %s", String(n)));
			}
		}
		function un(e, t, n) {
			if (typeof n == "object" && n && (n.$$typeof === Kn || n.$$typeof === qn) && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var r = e.didWarnForKey;
				if (r ??= e.didWarnForKey = /* @__PURE__ */ new WeakSet(), e = t.componentStack, e !== null && !r.has(e)) {
					r.add(e);
					var i = K(n.type);
					r = n._owner;
					var a = e.owner;
					if (e = "", a && a.type !== void 0) {
						var o = K(a.type);
						o && (e = "\n\nCheck the render method of `" + o + "`.");
					}
					e || i && (e = "\n\nCheck the top-level render call using <" + i + ">."), i = "", r != null && a !== r && (a = null, r.type === void 0 ? typeof r.name == "string" && (a = r.name) : a = K(r.type), a && (i = " It was passed a child from " + a + ".")), r = t.componentStack, t.componentStack = {
						parent: t.componentStack,
						type: n.type,
						owner: n._owner,
						stack: n._debugStack
					}, console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", e, i), t.componentStack = r;
				}
			}
		}
		function dn(e, t, n, r) {
			var i = t.keyPath, a = t.componentStack, o = t.debugTask;
			if (qt(t, t.node._debugInfo), r !== -1 && (t.keyPath = [
				t.keyPath,
				"Fragment",
				r
			], t.replay !== null)) {
				for (var s = t.replay, c = s.nodes, l = 0; l < c.length; l++) {
					var u = c[l];
					if (u[1] === r) {
						r = u[2], u = u[3], t.replay = {
							nodes: r,
							slots: u,
							pendingTasks: 1
						};
						try {
							if (dn(e, t, n, -1), t.replay.pendingTasks === 1 && 0 < t.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
							t.replay.pendingTasks--;
						} catch (i) {
							if (typeof i == "object" && i && (i === ps || typeof i.then == "function")) throw i;
							t.replay.pendingTasks--;
							var d = X(t.componentStack);
							n = t.blockedBoundary;
							var f = i, p = u;
							u = Zt(e, f, d, t.debugTask), yn(e, n, r, p, f, u, d, !1);
						}
						t.replay = s, c.splice(l, 1);
						break;
					}
				}
				t.keyPath = i, t.componentStack = a, t.debugTask = o;
				return;
			}
			if (s = t.treeContext, c = n.length, t.replay !== null && (l = t.replay.slots, typeof l == "object" && l)) {
				for (r = 0; r < c; r++) u = n[r], t.treeContext = it(s, c, r), f = l[r], typeof f == "number" ? (an(e, t, f, u, r), delete l[r]) : _n(e, t, u, r);
				t.treeContext = s, t.keyPath = i, t.componentStack = a, t.debugTask = o;
				return;
			}
			for (l = 0; l < c; l++) r = n[l], un(e, t, r), t.treeContext = it(s, c, l), _n(e, t, r, l);
			t.treeContext = s, t.keyPath = i, t.componentStack = a, t.debugTask = o;
		}
		function fn(e, t, n) {
			if (n.status = dc, n.rootSegmentID = e.nextSegmentId++, e = n.trackedContentKeyPath, e === null) throw Error("It should not be possible to postpone at the root. This is a bug in React.");
			var r = n.trackedFallbackNode, i = [], a = t.workingMap.get(e);
			return a === void 0 ? (n = [
				e[1],
				e[2],
				i,
				null,
				r,
				n.rootSegmentID
			], t.workingMap.set(e, n), Vn(n, e[0], t), n) : (a[4] = r, a[5] = n.rootSegmentID, a);
		}
		function pn(e, t, n, r) {
			r.status = dc;
			var i = n.keyPath, a = n.blockedBoundary;
			if (a === null) r.id = e.nextSegmentId++, t.rootSlots = r.id, e.completedRootSegment !== null && (e.completedRootSegment.status = dc);
			else {
				if (a !== null && a.status === oc) {
					var o = fn(e, t, a);
					if (a.trackedContentKeyPath === i && n.childIndex === -1) {
						r.id === -1 && (r.id = r.parentFlushed ? a.rootSegmentID : e.nextSegmentId++), o[3] = r.id;
						return;
					}
				}
				if (r.id === -1 && (r.id = r.parentFlushed && a !== null ? a.rootSegmentID : e.nextSegmentId++), n.childIndex === -1) i === null ? t.rootSlots = r.id : (n = t.workingMap.get(i), n === void 0 ? (n = [
					i[1],
					i[2],
					[],
					r.id
				], Vn(n, i[0], t)) : n[3] = r.id);
				else {
					if (i === null) {
						if (e = t.rootSlots, e === null) e = t.rootSlots = {};
						else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					} else if (a = t.workingMap, o = a.get(i), o === void 0) e = {}, o = [
						i[1],
						i[2],
						[],
						e
					], a.set(i, o), Vn(o, i[0], t);
					else if (e = o[3], e === null) e = o[3] = {};
					else if (typeof e == "number") throw Error("It should not be possible to postpone both at the root of an element as well as a slot below. This is a bug in React.");
					e[n.childIndex] = r.id;
				}
			}
		}
		function mn(e, t) {
			e = e.trackedPostpones, e !== null && (t = t.trackedContentKeyPath, t !== null && (t = e.workingMap.get(t), t !== void 0 && (t.length = 4, t[2] = [], t[3] = null)));
		}
		function hn(e, t, n) {
			return Ut(e, n, t.replay, t.node, t.childIndex, t.blockedBoundary, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, Jo, t.debugTask);
		}
		function gn(e, t, n) {
			var r = t.blockedSegment, i = Wt(e, r.chunks.length, null, t.formatContext, r.lastPushedText, !0);
			return r.children.push(i), r.lastPushedText = !1, Ht(e, n, t.node, t.childIndex, t.blockedBoundary, i, t.blockedPreamble, t.hoistableState, t.abortSet, t.keyPath, t.formatContext, t.context, t.treeContext, t.row, t.componentStack, Jo, t.debugTask);
		}
		function _n(e, t, n, r) {
			var i = t.formatContext, a = t.context, o = t.keyPath, s = t.treeContext, c = t.componentStack, l = t.debugTask, u = t.blockedSegment;
			if (u === null) {
				u = t.replay;
				try {
					return cn(e, t, n, r);
				} catch (d) {
					if (mt(), n = d === ps ? ct() : d, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							r = d === ps ? pt() : null, e = hn(e, t, r).ping, n.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = u, t.debugTask = l, J(a);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							n = d === ps ? pt() : null, n = hn(e, t, n), e.pingedTasks.push(n), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.replay = u, t.debugTask = l, J(a);
							return;
						}
					}
				}
			} else {
				var d = u.children.length, f = u.chunks.length;
				try {
					return cn(e, t, n, r);
				} catch (r) {
					if (mt(), u.children.length = d, u.chunks.length = f, n = r === ps ? ct() : r, e.status !== 12 && typeof n == "object" && n) {
						if (typeof n.then == "function") {
							u = n, n = r === ps ? pt() : null, e = gn(e, t, n).ping, u.then(e, e), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.debugTask = l, J(a);
							return;
						}
						if (n.message === "Maximum call stack size exceeded") {
							u = r === ps ? pt() : null, u = gn(e, t, u), e.pingedTasks.push(u), t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, t.componentStack = c, t.debugTask = l, J(a);
							return;
						}
					}
				}
			}
			throw t.formatContext = i, t.context = a, t.keyPath = o, t.treeContext = s, J(a), n;
		}
		function vn(e) {
			var t = e.blockedBoundary, n = e.blockedSegment;
			n !== null && (n.status = lc, En(this, t, e.row, n));
		}
		function yn(e, t, n, r, i, a, o, s) {
			for (var c = 0; c < n.length; c++) {
				var l = n[c];
				if (l.length === 4) yn(e, t, l[2], l[3], i, a, o, s);
				else {
					var u = e;
					l = l[5];
					var d = i, f = a, p = o, m = s, h = Vt(u, null, /* @__PURE__ */ new Set(), null, null);
					h.parentFlushed = !0, h.rootSegmentID = l, h.status = ac, Xt(h, f, d, p, m), h.parentFlushed && u.clientRenderedBoundaries.push(h);
				}
			}
			if (n.length = 0, r !== null) {
				if (t === null) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
				if (t.status !== ac && (t.status = ac, Xt(t, a, i, o, s), t.parentFlushed && e.clientRenderedBoundaries.push(t)), typeof r == "object") for (var g in r) delete r[g];
			}
		}
		function bn(e, t, n) {
			var r = e.blockedBoundary, i = e.blockedSegment;
			if (i !== null) {
				if (i.status === 6) return;
				i.status = lc;
			}
			var a = X(e.componentStack), o = e.node;
			if (typeof o == "object" && o && Kt(e, o._debugInfo), r === null) {
				if (t.status !== 13 && t.status !== fc) {
					if (r = e.replay, r === null) {
						t.trackedPostpones !== null && i !== null ? (r = t.trackedPostpones, Zt(t, n, a, e.debugTask), pn(t, r, e, i), En(t, null, e.row, i)) : (Zt(t, n, a, e.debugTask), Qt(t, n, a, e.debugTask));
						return;
					}
					r.pendingTasks--, r.pendingTasks === 0 && 0 < r.nodes.length && (i = Zt(t, n, a, null), yn(t, null, r.nodes, r.slots, n, i, a, !0)), t.pendingRootTasks--, t.pendingRootTasks === 0 && Sn(t);
				}
			} else {
				if (o = t.trackedPostpones, r.status !== ac) {
					if (o !== null && i !== null) return Zt(t, n, a, e.debugTask), pn(t, o, e, i), r.fallbackAbortableTasks.forEach(function(e) {
						return bn(e, t, n);
					}), r.fallbackAbortableTasks.clear(), En(t, r, e.row, i);
					r.status = ac, i = Zt(t, n, a, e.debugTask), r.status = ac, Xt(r, i, n, a, !0), mn(t, r), r.parentFlushed && t.clientRenderedBoundaries.push(r);
				}
				r.pendingTasks--, a = r.row, a !== null && --a.pendingTasks === 0 && Z(t, a), r.fallbackAbortableTasks.forEach(function(e) {
					return bn(e, t, n);
				}), r.fallbackAbortableTasks.clear();
			}
			e = e.row, e !== null && --e.pendingTasks === 0 && Z(t, e), t.allPendingTasks--, t.allPendingTasks === 0 && Cn(t);
		}
		function xn(e, t) {
			try {
				var n = e.renderState, r = n.onHeaders;
				if (r) {
					var i = n.headers;
					if (i) {
						n.headers = null;
						var a = i.preconnects;
						if (i.fontPreloads && (a && (a += ", "), a += i.fontPreloads), i.highImagePreloads && (a && (a += ", "), a += i.highImagePreloads), !t) {
							var o = n.styles.values(), s = o.next();
							b: for (; 0 < i.remainingCapacity && !s.done; s = o.next()) for (var c = s.value.sheets.values(), l = c.next(); 0 < i.remainingCapacity && !l.done; l = c.next()) {
								var u = l.value, d = u.props, f = d.href, p = u.props, m = Ge(p.href, "style", {
									crossOrigin: p.crossOrigin,
									integrity: p.integrity,
									nonce: p.nonce,
									type: p.type,
									fetchPriority: p.fetchPriority,
									referrerPolicy: p.referrerPolicy,
									media: p.media
								});
								if (0 <= (i.remainingCapacity -= m.length + 2)) n.resets.style[f] = ui, a && (a += ", "), a += m, n.resets.style[f] = typeof d.crossOrigin == "string" || typeof d.integrity == "string" ? [d.crossOrigin, d.integrity] : ui;
								else break b;
							}
						}
						r(a ? { Link: a } : {});
					}
				}
			} catch (t) {
				Zt(e, t, {}, null);
			}
		}
		function Sn(e) {
			e.trackedPostpones === null && xn(e, !0), e.trackedPostpones === null && An(e), e.onShellError = ot, e = e.onShellReady, e();
		}
		function Cn(e) {
			xn(e, e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== dc), An(e), e = e.onAllReady, e();
		}
		function wn(e, t) {
			if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null && t.children[0].id === -1) {
				var n = t.children[0];
				n.id = t.id, n.parentFlushed = !0, n.status !== sc && n.status !== lc && n.status !== uc || wn(e, n);
			} else e.completedSegments.push(t);
		}
		function Tn(e, t, n) {
			if (v !== null) {
				n = n.chunks;
				for (var r = 0, i = 0; i < n.length; i++) r += n[i].byteLength;
				t === null ? e.byteSize += r : t.byteSize += r;
			}
		}
		function En(e, t, n, r) {
			if (n !== null && (--n.pendingTasks === 0 ? Z(e, n) : n.together && en(e, n)), e.allPendingTasks--, t === null) {
				if (r !== null && r.parentFlushed) {
					if (e.completedRootSegment !== null) throw Error("There can only be one root segment. This is a bug in React.");
					e.completedRootSegment = r;
				}
				e.pendingRootTasks--, e.pendingRootTasks === 0 && Sn(e);
			} else if (t.pendingTasks--, t.status !== ac) if (t.pendingTasks === 0) {
				if (t.status === oc && (t.status = sc), r !== null && r.parentFlushed && (r.status === sc || r.status === lc) && wn(t, r), t.parentFlushed && e.completedBoundaries.push(t), t.status === sc) n = t.row, n !== null && G(n.hoistables, t.contentState), Pt(e, t) || (t.fallbackAbortableTasks.forEach(vn, e), t.fallbackAbortableTasks.clear(), n !== null && --n.pendingTasks === 0 && Z(e, n)), e.pendingRootTasks === 0 && e.trackedPostpones === null && t.contentPreamble !== null && An(e);
				else if (t.status === dc && (t = t.row, t !== null)) {
					if (e.trackedPostpones !== null) {
						n = e.trackedPostpones;
						var i = t.next;
						if (i !== null && (r = i.boundaries, r !== null)) for (i.boundaries = null, i = 0; i < r.length; i++) {
							var a = r[i];
							fn(e, n, a), En(e, a, null, null);
						}
					}
					--t.pendingTasks === 0 && Z(e, t);
				}
			} else r === null || !r.parentFlushed || r.status !== sc && r.status !== lc || (wn(t, r), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)), t = t.row, t !== null && t.together && en(e, t);
			e.allPendingTasks === 0 && Cn(e);
		}
		function Dn(e) {
			if (e.status !== fc && e.status !== 13) {
				var t = Xo, n = Qr.H;
				Qr.H = Ns;
				var r = Qr.A;
				Qr.A = Is;
				var i = pc;
				pc = e;
				var a = Qr.getCurrentStack;
				Qr.getCurrentStack = Gt;
				var o = Ps;
				Ps = e.resumableState;
				try {
					var s = e.pingedTasks, c;
					for (c = 0; c < s.length; c++) {
						var l = e, u = s[c], d = u.blockedSegment;
						if (d === null) {
							var f = void 0, p = l;
							if (l = u, l.replay.pendingTasks !== 0) {
								J(l.context), f = Fs, Fs = l;
								try {
									if (typeof l.replay.slots == "number" ? an(p, l, l.replay.slots, l.node, l.childIndex) : ln(p, l), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
									l.replay.pendingTasks--, l.abortSet.delete(l), En(p, l.blockedBoundary, l.row, null);
								} catch (e) {
									mt();
									var m = e === ps ? ct() : e;
									if (typeof m == "object" && m && typeof m.then == "function") {
										var h = l.ping;
										m.then(h, h), l.thenableState = e === ps ? pt() : null;
									} else {
										l.replay.pendingTasks--, l.abortSet.delete(l);
										var g = X(l.componentStack), _ = void 0, v = p, y = l.blockedBoundary, b = p.status === 12 ? p.fatalError : m, x = g, S = l.replay.nodes, C = l.replay.slots;
										_ = Zt(v, b, x, l.debugTask), yn(v, y, S, C, b, _, x, !1), p.pendingRootTasks--, p.pendingRootTasks === 0 && Sn(p), p.allPendingTasks--, p.allPendingTasks === 0 && Cn(p);
									}
								} finally {
									Fs = f;
								}
							}
						} else if (p = f = void 0, _ = u, v = d, v.status === oc) {
							v.status = 6, J(_.context), p = Fs, Fs = _;
							var w = v.children.length, T = v.chunks.length;
							try {
								ln(l, _), v.lastPushedText && v.textEmbedded && v.chunks.push(Fi), _.abortSet.delete(_), v.status = sc, Tn(l, _.blockedBoundary, v), En(l, _.blockedBoundary, _.row, v);
							} catch (e) {
								mt(), v.children.length = w, v.chunks.length = T;
								var E = e === ps ? ct() : l.status === 12 ? l.fatalError : e;
								if (l.status === 12 && l.trackedPostpones !== null) {
									var D = l.trackedPostpones, O = X(_.componentStack);
									_.abortSet.delete(_), Zt(l, E, O, _.debugTask), pn(l, D, _, v), En(l, _.blockedBoundary, _.row, v);
								} else if (typeof E == "object" && E && typeof E.then == "function") {
									v.status = oc, _.thenableState = e === ps ? pt() : null;
									var k = _.ping;
									E.then(k, k);
								} else {
									var A = X(_.componentStack);
									_.abortSet.delete(_), v.status = uc;
									var j = _.blockedBoundary, M = _.row, N = _.debugTask;
									if (M !== null && --M.pendingTasks === 0 && Z(l, M), l.allPendingTasks--, f = Zt(l, E, A, N), j === null) Qt(l, E, A, N);
									else if (j.pendingTasks--, j.status !== ac) {
										j.status = ac, Xt(j, f, E, A, !1), mn(l, j);
										var P = j.row;
										P !== null && --P.pendingTasks === 0 && Z(l, P), j.parentFlushed && l.clientRenderedBoundaries.push(j), l.pendingRootTasks === 0 && l.trackedPostpones === null && j.contentPreamble !== null && An(l);
									}
									l.allPendingTasks === 0 && Cn(l);
								}
							} finally {
								Fs = p;
							}
						}
					}
					s.splice(0, c), e.destination !== null && In(e, e.destination);
				} catch (t) {
					s = {}, Zt(e, t, s, null), Qt(e, t, s, null);
				} finally {
					Ps = o, Qr.H = n, Qr.A = r, Qr.getCurrentStack = a, n === Ns && J(t), pc = i;
				}
			}
		}
		function On(e, t, n) {
			t.preambleChildren.length && n.push(t.preambleChildren);
			for (var r = !1, i = 0; i < t.children.length; i++) r = kn(e, t.children[i], n) || r;
			return r;
		}
		function kn(e, t, n) {
			var r = t.boundary;
			if (r === null) return On(e, t, n);
			var i = r.contentPreamble, a = r.fallbackPreamble;
			if (i === null || a === null) return !1;
			switch (r.status) {
				case sc:
					if (Ee(e.renderState, i), e.byteSize += r.byteSize, t = r.completedSegments[0], !t) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
					return On(e, t, n);
				case dc: if (e.trackedPostpones !== null) return !0;
				case ac: if (t.status === sc) return Ee(e.renderState, a), On(e, t, n);
				default: return !0;
			}
		}
		function An(e) {
			if (e.completedRootSegment && e.completedPreambleSegments === null) {
				var t = [], n = e.byteSize, r = kn(e, e.completedRootSegment, t), i = e.renderState.preamble;
				!1 === r || i.headChunks && i.bodyChunks ? e.completedPreambleSegments = t : e.byteSize = n;
			}
		}
		function jn(e, t, n, r) {
			switch (n.parentFlushed = !0, n.status) {
				case oc: n.id = e.nextSegmentId++;
				case dc: return r = n.id, n.lastPushedText = !1, n.textEmbedded = !1, e = e.renderState, p(t, ya), p(t, e.placeholderPrefix), e = g(r.toString(16)), p(t, e), m(t, ba);
				case sc:
					n.status = cc;
					var i = !0, a = n.chunks, o = 0;
					n = n.children;
					for (var s = 0; s < n.length; s++) {
						for (i = n[s]; o < i.index; o++) p(t, a[o]);
						i = Mn(e, t, i, r);
					}
					for (; o < a.length - 1; o++) p(t, a[o]);
					return o < a.length && (i = m(t, a[o])), i;
				case lc: return !0;
				default: throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
			}
		}
		function Mn(e, t, n, r) {
			var i = n.boundary;
			if (i === null) return jn(e, t, n, r);
			if (i.parentFlushed = !0, i.status === ac) {
				var a = i.row;
				a !== null && --a.pendingTasks === 0 && Z(e, a), a = i.errorDigest;
				var o = i.errorMessage, s = i.errorStack;
				i = i.errorComponentStack, m(t, Ea), p(t, Oa), a && (p(t, Aa), p(t, g(N(a))), p(t, ka)), o && (p(t, ja), p(t, g(N(o))), p(t, ka)), s && (p(t, Ma), p(t, g(N(s))), p(t, ka)), i && (p(t, Na), p(t, g(N(i))), p(t, ka)), m(t, Pa), jn(e, t, n, r);
			} else if (i.status !== sc) i.status === oc && (i.rootSegmentID = e.nextSegmentId++), 0 < i.completedSegments.length && e.partialBoundaries.push(i), Oe(t, e.renderState, i.rootSegmentID), r && G(r, i.fallbackState), jn(e, t, n, r);
			else if (!Sc && Pt(e, i) && (xc + i.byteSize > e.progressiveChunkSize || Ze(i.contentState))) i.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(i), Oe(t, e.renderState, i.rootSegmentID), jn(e, t, n, r);
			else {
				if (xc += i.byteSize, r && G(r, i.contentState), n = i.row, n !== null && Pt(e, i) && --n.pendingTasks === 0 && Z(e, n), m(t, Ca), n = i.completedSegments, n.length !== 1) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
				Mn(e, t, n[0], r);
			}
			return m(t, Da);
		}
		function Nn(e, t, n, r) {
			return ke(t, e.renderState, n.parentFormatContext, n.id), Mn(e, t, n, r), Ae(t, n.parentFormatContext);
		}
		function Pn(e, t, n) {
			xc = n.byteSize;
			for (var r = n.completedSegments, i = 0; i < r.length; i++) Fn(e, t, n, r[i]);
			r.length = 0, r = n.row, r !== null && Pt(e, n) && --r.pendingTasks === 0 && Z(e, r), Fe(t, n.contentState, e.renderState), r = e.resumableState, e = e.renderState, i = n.rootSegmentID, n = n.contentState;
			var a = e.stylesToHoist;
			return e.stylesToHoist = !1, p(t, e.startInlineScript), p(t, Ki), a ? ((r.instructions & ai) === ni && (r.instructions |= ai, p(t, ho)), (r.instructions & ii) === ni && (r.instructions |= ii, p(t, oo)), (r.instructions & oi) === ni ? (r.instructions |= oi, p(t, co)) : p(t, lo)) : ((r.instructions & ii) === ni && (r.instructions |= ii, p(t, oo)), p(t, so)), r = g(i.toString(16)), p(t, e.boundaryPrefix), p(t, r), p(t, uo), p(t, e.segmentPrefix), p(t, r), a ? (p(t, fo), Ve(t, n)) : p(t, po), n = m(t, mo), De(t, e) && n;
		}
		function Fn(e, t, n, r) {
			if (r.status === cc) return !0;
			var i = n.contentState, a = r.id;
			if (a === -1) {
				if ((r.id = n.rootSegmentID) === -1) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
				return Nn(e, t, r, i);
			}
			return a === n.rootSegmentID ? Nn(e, t, r, i) : (Nn(e, t, r, i), n = e.resumableState, e = e.renderState, p(t, e.startInlineScript), p(t, Ki), (n.instructions & ri) === ni ? (n.instructions |= ri, p(t, no)) : p(t, ro), p(t, e.segmentPrefix), a = g(a.toString(16)), p(t, a), p(t, io), p(t, e.placeholderPrefix), p(t, a), t = m(t, ao), t);
		}
		function In(e, t) {
			vr = new Uint8Array(2048), yr = 0;
			try {
				if (!(0 < e.pendingRootTasks)) {
					var n, r = e.completedRootSegment;
					if (r !== null) {
						if (r.status === dc) return;
						var i = e.completedPreambleSegments;
						if (i === null) return;
						xc = e.byteSize;
						var a = e.resumableState, o = e.renderState, s = o.preamble, c = s.htmlChunks, l = s.headChunks, u;
						if (c) {
							for (u = 0; u < c.length; u++) p(t, c[u]);
							if (l) for (u = 0; u < l.length; u++) p(t, l[u]);
							else p(t, Ce("head")), p(t, Ki);
						} else if (l) for (u = 0; u < l.length; u++) p(t, l[u]);
						var d = o.charsetChunks;
						for (u = 0; u < d.length; u++) p(t, d[u]);
						d.length = 0, o.preconnects.forEach(H, t), o.preconnects.clear();
						var f = o.viewportChunks;
						for (u = 0; u < f.length; u++) p(t, f[u]);
						f.length = 0, o.fontPreloads.forEach(H, t), o.fontPreloads.clear(), o.highImagePreloads.forEach(H, t), o.highImagePreloads.clear(), di = o, o.styles.forEach(Le, t), di = null;
						var _ = o.importMapChunks;
						for (u = 0; u < _.length; u++) p(t, _[u]);
						_.length = 0, o.bootstrapScripts.forEach(H, t), o.scripts.forEach(H, t), o.scripts.clear(), o.bulkPreloads.forEach(H, t), o.bulkPreloads.clear(), c || l || (a.instructions |= si);
						var v = o.hoistableChunks;
						for (u = 0; u < v.length; u++) p(t, v[u]);
						for (a = v.length = 0; a < i.length; a++) {
							var y = i[a];
							for (o = 0; o < y.length; o++) Mn(e, t, y[o], null);
						}
						var b = e.renderState.preamble, x = b.headChunks;
						(b.htmlChunks || x) && p(t, Te("head"));
						var S = b.bodyChunks;
						if (S) for (i = 0; i < S.length; i++) p(t, S[i]);
						Mn(e, t, r, null), e.completedRootSegment = null;
						var C = e.renderState;
						if (e.allPendingTasks !== 0 || e.clientRenderedBoundaries.length !== 0 || e.completedBoundaries.length !== 0 || e.trackedPostpones !== null && (e.trackedPostpones.rootNodes.length !== 0 || e.trackedPostpones.rootSlots !== null)) {
							var w = e.resumableState;
							if ((w.instructions & ci) === ni) {
								if (w.instructions |= ci, p(t, C.startInlineScript), (w.instructions & si) === ni) {
									w.instructions |= si;
									var T = "_" + w.idPrefix + "R_";
									p(t, Fo), p(t, g(N(T))), p(t, Hi);
								}
								p(t, Ki), p(t, va), m(t, pi);
							}
						}
						De(t, C);
					}
					var E = e.renderState;
					r = 0;
					var D = E.viewportChunks;
					for (r = 0; r < D.length; r++) p(t, D[r]);
					D.length = 0, E.preconnects.forEach(H, t), E.preconnects.clear(), E.fontPreloads.forEach(H, t), E.fontPreloads.clear(), E.highImagePreloads.forEach(H, t), E.highImagePreloads.clear(), E.styles.forEach(ze, t), E.scripts.forEach(H, t), E.scripts.clear(), E.bulkPreloads.forEach(H, t), E.bulkPreloads.clear();
					var O = E.hoistableChunks;
					for (r = 0; r < O.length; r++) p(t, O[r]);
					O.length = 0;
					var k = e.clientRenderedBoundaries;
					for (n = 0; n < k.length; n++) {
						var A = k[n];
						E = t;
						var j = e.resumableState, M = e.renderState, P = A.rootSegmentID, F = A.errorDigest, ee = A.errorMessage, I = A.errorStack, L = A.errorComponentStack;
						p(E, M.startInlineScript), p(E, Ki), (j.instructions & ai) === ni ? (j.instructions |= ai, p(E, go)) : p(E, _o), p(E, M.boundaryPrefix), p(E, g(P.toString(16))), p(E, vo), (F || ee || I || L) && (p(E, yo), p(E, g(je(F || "")))), (ee || I || L) && (p(E, yo), p(E, g(je(ee || "")))), (I || L) && (p(E, yo), p(E, g(je(I || "")))), L && (p(E, yo), p(E, g(je(L))));
						var R = m(E, bo);
						if (!R) {
							e.destination = null, n++, k.splice(0, n);
							return;
						}
					}
					k.splice(0, n);
					var z = e.completedBoundaries;
					for (n = 0; n < z.length; n++) if (!Pn(e, t, z[n])) {
						e.destination = null, n++, z.splice(0, n);
						return;
					}
					z.splice(0, n), h(t), vr = new Uint8Array(2048), yr = 0, Sc = !0;
					var te = e.partialBoundaries;
					for (n = 0; n < te.length; n++) {
						a: {
							k = e, A = t;
							var ne = te[n];
							xc = ne.byteSize;
							var B = ne.completedSegments;
							for (R = 0; R < B.length; R++) if (!Fn(k, A, ne, B[R])) {
								R++, B.splice(0, R);
								var re = !1;
								break a;
							}
							B.splice(0, R);
							var ie = ne.row;
							ie !== null && ie.together && ne.pendingTasks === 1 && (ie.pendingTasks === 1 ? $t(k, ie, ie.hoistables) : ie.pendingTasks--), re = Fe(A, ne.contentState, k.renderState);
						}
						if (!re) {
							e.destination = null, n++, te.splice(0, n);
							return;
						}
					}
					te.splice(0, n), Sc = !1;
					var ae = e.completedBoundaries;
					for (n = 0; n < ae.length; n++) if (!Pn(e, t, ae[n])) {
						e.destination = null, n++, ae.splice(0, n);
						return;
					}
					ae.splice(0, n);
				}
			} finally {
				Sc = !1, e.allPendingTasks === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, n = e.resumableState, n.hasBody && p(t, Te("body")), n.hasHtml && p(t, Te("html")), h(t), e.abortableTasks.size !== 0 && console.error("There was still abortable task at the root when we closed. This is a bug in React."), e.status = fc, t.close(), e.destination = null) : h(t);
			}
		}
		function Ln(e) {
			e.flushScheduled = e.destination !== null, _r(function() {
				return Dn(e);
			}), d(function() {
				e.status === 10 && (e.status = 11), e.trackedPostpones === null && xn(e, e.pendingRootTasks === 0);
			});
		}
		function Rn(e) {
			!1 === e.flushScheduled && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, d(function() {
				var t = e.destination;
				t ? In(e, t) : e.flushScheduled = !1;
			}));
		}
		function zn(e, t) {
			if (e.status === 13) e.status = fc, y(t, e.fatalError);
			else if (e.status !== fc && e.destination === null) {
				e.destination = t;
				try {
					In(e, t);
				} catch (n) {
					t = {}, Zt(e, n, t, null), Qt(e, n, t, null);
				}
			}
		}
		function Bn(e, t) {
			(e.status === 11 || e.status === 10) && (e.status = 12);
			try {
				var n = e.abortableTasks;
				if (0 < n.size) {
					var r = t === void 0 ? Error("The render was aborted by the server without a reason.") : typeof t == "object" && t && typeof t.then == "function" ? Error("The render was aborted by the server with a promise.") : t;
					e.fatalError = r, n.forEach(function(t) {
						var n = Fs, i = Qr.getCurrentStack;
						Fs = t, Qr.getCurrentStack = Gt;
						try {
							bn(t, e, r);
						} finally {
							Fs = n, Qr.getCurrentStack = i;
						}
					}), n.clear();
				}
				e.destination !== null && In(e, e.destination);
			} catch (n) {
				t = {}, Zt(e, n, t, null), Qt(e, n, t, null);
			}
		}
		function Vn(e, t, n) {
			if (t === null) n.rootNodes.push(e);
			else {
				var r = n.workingMap, i = r.get(t);
				i === void 0 && (i = [
					t[1],
					t[2],
					[],
					null
				], r.set(t, i), Vn(i, t[0], n)), i[2].push(e);
			}
		}
		function Hn(e) {
			var t = e.trackedPostpones;
			if (t === null || t.rootNodes.length === 0 && t.rootSlots === null) return e.trackedPostpones = null;
			if (e.completedRootSegment === null || e.completedRootSegment.status !== dc && e.completedPreambleSegments !== null) {
				var n = e.nextSegmentId, r = t.rootSlots, i = e.resumableState;
				i.bootstrapScriptContent = void 0, i.bootstrapScripts = void 0, i.bootstrapModules = void 0;
			} else {
				n = 0, r = -1, i = e.resumableState;
				var a = e.renderState;
				i.nextFormID = 0, i.hasBody = !1, i.hasHtml = !1, i.unknownResources = { font: a.resets.font }, i.dnsResources = a.resets.dns, i.connectResources = a.resets.connect, i.imageResources = a.resets.image, i.styleResources = a.resets.style, i.scriptResources = {}, i.moduleUnknownResources = {}, i.moduleScriptResources = {}, i.instructions = ni;
			}
			return {
				nextSegmentId: n,
				rootFormatContext: e.rootFormatContext,
				progressiveChunkSize: e.progressiveChunkSize,
				resumableState: e.resumableState,
				replayNodes: t.rootNodes,
				replaySlots: r
			};
		}
		function Un() {
			var e = Wn.version;
			if (e !== "19.2.4") throw Error("Incompatible React versions: The \"react\" and \"react-dom\" packages must have the exact same version. Instead got:\n  - react:      " + (e + "\n  - react-dom:  19.2.4\nLearn more: https://react.dev/warnings/version-mismatch"));
		}
		var Wn = e("react"), Gn = e("react-dom"), Kn = Symbol.for("react.transitional.element"), qn = Symbol.for("react.portal"), Jn = Symbol.for("react.fragment"), Yn = Symbol.for("react.strict_mode"), Xn = Symbol.for("react.profiler"), Zn = Symbol.for("react.consumer"), Qn = Symbol.for("react.context"), $n = Symbol.for("react.forward_ref"), er = Symbol.for("react.suspense"), tr = Symbol.for("react.suspense_list"), nr = Symbol.for("react.memo"), rr = Symbol.for("react.lazy"), ir = Symbol.for("react.scope"), ar = Symbol.for("react.activity"), or = Symbol.for("react.legacy_hidden"), sr = Symbol.for("react.memo_cache_sentinel"), cr = Symbol.for("react.view_transition"), lr = Symbol.iterator, ur = Array.isArray, dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), pr = Symbol.for("react.client.reference"), mr = new MessageChannel(), hr = [];
		mr.port1.onmessage = function() {
			var e = hr.shift();
			e && e();
		};
		var gr = Promise, _r = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
			gr.resolve(null).then(e).catch(f);
		}, vr = null, yr = 0, br = new TextEncoder(), xr = Object.assign, Sr = Object.prototype.hasOwnProperty, Cr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), wr = {}, Tr = {}, Er = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Dr = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), Or = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, kr = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, Ar = {}, jr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Mr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Nr = !1, Pr = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, Fr = {}, Ir = /^on./, Lr = /^on[^A-Z]/, Rr = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zr = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Br = /^(?:webkit|moz|o)[A-Z]/, Vr = /^-ms-/, Hr = /-(.)/g, Ur = /;\s*$/, Wr = {}, Gr = {}, Kr = !1, qr = !1, Jr = /["'&<>]/, Yr = /([A-Z])/g, Xr = /^ms-/, Zr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Qr = Wn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $r = Gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ei = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), ti = $r.d;
		$r.d = {
			f: ti.f,
			r: ti.r,
			D: function(e) {
				var t = pc || null;
				if (t) {
					var n = t.resumableState, r = t.renderState;
					if (typeof e == "string" && e) {
						if (!n.dnsResources.hasOwnProperty(e)) {
							n.dnsResources[e] = li, n = r.headers;
							var i, a;
							(a = n && 0 < n.remainingCapacity) && (a = (i = "<" + Ke(e) + ">; rel=dns-prefetch", 0 <= (n.remainingCapacity -= i.length + 2))), a ? (r.resets.dns[e] = li, n.preconnects && (n.preconnects += ", "), n.preconnects += i) : (i = [], ge(i, {
								href: e,
								rel: "dns-prefetch"
							}), r.preconnects.add(i));
						}
						Rn(t);
					}
				} else ti.D(e);
			},
			C: function(e, t) {
				var n = pc || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (typeof e == "string" && e) {
						var a = t === "use-credentials" ? "credentials" : typeof t == "string" ? "anonymous" : "default";
						if (!r.connectResources[a].hasOwnProperty(e)) {
							r.connectResources[a][e] = li, r = i.headers;
							var o, s;
							if (s = r && 0 < r.remainingCapacity) {
								if (s = "<" + Ke(e) + ">; rel=preconnect", typeof t == "string") {
									var c = Je(t, "crossOrigin");
									s += "; crossorigin=\"" + c + "\"";
								}
								s = (o = s, 0 <= (r.remainingCapacity -= o.length + 2));
							}
							s ? (i.resets.connect[a][e] = li, r.preconnects && (r.preconnects += ", "), r.preconnects += o) : (a = [], ge(a, {
								rel: "preconnect",
								href: e,
								crossOrigin: t
							}), i.preconnects.add(a));
						}
						Rn(n);
					}
				} else ti.C(e, t);
			},
			L: function(e, t, n) {
				var r = pc || null;
				if (r) {
					var i = r.resumableState, a = r.renderState;
					if (t && e) {
						switch (t) {
							case "image":
								if (n) var o = n.imageSrcSet, s = n.imageSizes, c = n.fetchPriority;
								var l = o ? o + "\n" + (s || "") : e;
								if (i.imageResources.hasOwnProperty(l)) return;
								i.imageResources[l] = ui, i = a.headers;
								var u;
								i && 0 < i.remainingCapacity && typeof o != "string" && c === "high" && (u = Ge(e, t, n), 0 <= (i.remainingCapacity -= u.length + 2)) ? (a.resets.image[l] = ui, i.highImagePreloads && (i.highImagePreloads += ", "), i.highImagePreloads += u) : (i = [], ge(i, xr({
									rel: "preload",
									href: o ? void 0 : e,
									as: t
								}, n)), c === "high" ? a.highImagePreloads.add(i) : (a.bulkPreloads.add(i), a.preloads.images.set(l, i)));
								break;
							case "style":
								if (i.styleResources.hasOwnProperty(e)) return;
								o = [], ge(o, xr({
									rel: "preload",
									href: e,
									as: t
								}, n)), i.styleResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ui : [n.crossOrigin, n.integrity], a.preloads.stylesheets.set(e, o), a.bulkPreloads.add(o);
								break;
							case "script":
								if (i.scriptResources.hasOwnProperty(e)) return;
								o = [], a.preloads.scripts.set(e, o), a.bulkPreloads.add(o), ge(o, xr({
									rel: "preload",
									href: e,
									as: t
								}, n)), i.scriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? ui : [n.crossOrigin, n.integrity];
								break;
							default:
								if (i.unknownResources.hasOwnProperty(t)) {
									if (o = i.unknownResources[t], o.hasOwnProperty(e)) return;
								} else o = {}, i.unknownResources[t] = o;
								if (o[e] = ui, (i = a.headers) && 0 < i.remainingCapacity && t === "font" && (l = Ge(e, t, n), 0 <= (i.remainingCapacity -= l.length + 2))) a.resets.font[e] = ui, i.fontPreloads && (i.fontPreloads += ", "), i.fontPreloads += l;
								else switch (i = [], e = xr({
									rel: "preload",
									href: e,
									as: t
								}, n), ge(i, e), t) {
									case "font":
										a.fontPreloads.add(i);
										break;
									default: a.bulkPreloads.add(i);
								}
						}
						Rn(r);
					}
				} else ti.L(e, t, n);
			},
			m: function(e, t) {
				var n = pc || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = t && typeof t.as == "string" ? t.as : "script";
						switch (a) {
							case "script":
								if (r.moduleScriptResources.hasOwnProperty(e)) return;
								a = [], r.moduleScriptResources[e] = !t || typeof t.crossOrigin != "string" && typeof t.integrity != "string" ? ui : [t.crossOrigin, t.integrity], i.preloads.moduleScripts.set(e, a);
								break;
							default:
								if (r.moduleUnknownResources.hasOwnProperty(a)) {
									var o = r.unknownResources[a];
									if (o.hasOwnProperty(e)) return;
								} else o = {}, r.moduleUnknownResources[a] = o;
								a = [], o[e] = ui;
						}
						ge(a, xr({
							rel: "modulepreload",
							href: e
						}, t)), i.bulkPreloads.add(a), Rn(n);
					}
				} else ti.m(e, t);
			},
			X: function(e, t) {
				var n = pc || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = r.scriptResources.hasOwnProperty(e) ? r.scriptResources[e] : void 0;
						a !== li && (r.scriptResources[e] = li, t = xr({
							src: e,
							async: !0
						}, t), a && (a.length === 2 && We(t, a), e = i.preloads.scripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), be(e, t), Rn(n));
					}
				} else ti.X(e, t);
			},
			S: function(e, t, n) {
				var r = pc || null;
				if (r) {
					var i = r.resumableState, a = r.renderState;
					if (e) {
						t ||= "default";
						var o = a.styles.get(t), s = i.styleResources.hasOwnProperty(e) ? i.styleResources[e] : void 0;
						s !== li && (i.styleResources[e] = li, o || (o = {
							precedence: g(N(t)),
							rules: [],
							hrefs: [],
							sheets: /* @__PURE__ */ new Map()
						}, a.styles.set(t, o)), t = {
							state: Bo,
							props: xr({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n)
						}, s && (s.length === 2 && We(t.props, s), (a = a.preloads.stylesheets.get(e)) && 0 < a.length ? a.length = 0 : t.state = Vo), o.sheets.set(e, t), Rn(r));
					}
				} else ti.S(e, t, n);
			},
			M: function(e, t) {
				var n = pc || null;
				if (n) {
					var r = n.resumableState, i = n.renderState;
					if (e) {
						var a = r.moduleScriptResources.hasOwnProperty(e) ? r.moduleScriptResources[e] : void 0;
						a !== li && (r.moduleScriptResources[e] = li, t = xr({
							src: e,
							type: "module",
							async: !0
						}, t), a && (a.length === 2 && We(t, a), e = i.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], i.scripts.add(e), be(e, t), Rn(n));
					}
				} else ti.M(e, t);
			}
		};
		var ni = 0, ri = 1, ii = 2, ai = 4, oi = 8, si = 32, ci = 64, li = null, ui = [];
		Object.freeze(ui);
		var di = null;
		_("\"></template>");
		var fi = _("<script"), pi = _("<\/script>"), mi = _("<script src=\""), hi = _("<script type=\"module\" src=\""), gi = _(" nonce=\""), _i = _(" integrity=\""), vi = _(" crossorigin=\""), yi = _(" async=\"\"><\/script>"), bi = _("<style"), xi = /(<\/|<)(s)(cript)/gi, Si = _("<script type=\"importmap\">"), Ci = _("<\/script>"), wi = {}, Ti = 0, Ei = 1, Di = 2, Oi = 3, ki = 4, Ai = 5, ji = 6, Mi = 7, Ni = 8, Pi = 9, Fi = _("<!-- -->"), Ii = /* @__PURE__ */ new Map(), Li = _(" style=\""), Ri = _(":"), zi = _(";"), Bi = _(" "), Vi = _("=\""), Hi = _("\""), Ui = _("=\"\""), Wi = _(N("javascript:throw new Error('React form unexpectedly submitted.')")), Gi = _("<input type=\"hidden\""), Ki = _(">"), qi = _("/>"), Ji = !1, Yi = !1, Xi = !1, Zi = !1, Qi = !1, $i = !1, ea = !1, ta = !1, na = !1, ra = !1, ia = !1, aa = _(" selected=\"\""), oa = _("addEventListener(\"submit\",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute(\"formAction\");null!=f&&(e=f,b=null)}\"javascript:throw new Error('React form unexpectedly submitted.')\"===e&&(a.preventDefault(),b?(a=document.createElement(\"input\"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});"), sa = _("<!--F!-->"), ca = _("<!--F-->"), la = /(<\/|<)(s)(tyle)/gi, ua = _("<!--head-->"), da = _("<!--body-->"), fa = _("<!--html-->"), pa = _("\n"), ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ha = /* @__PURE__ */ new Map(), ga = _("<!DOCTYPE html>"), _a = /* @__PURE__ */ new Map(), va = _("requestAnimationFrame(function(){$RT=performance.now()});"), ya = _("<template id=\""), ba = _("\"></template>"), xa = _("<!--&-->"), Sa = _("<!--/&-->"), Ca = _("<!--$-->"), wa = _("<!--$?--><template id=\""), Ta = _("\"></template>"), Ea = _("<!--$!-->"), Da = _("<!--/$-->"), Oa = _("<template"), ka = _("\""), Aa = _(" data-dgst=\""), ja = _(" data-msg=\""), Ma = _(" data-stck=\""), Na = _(" data-cstck=\""), Pa = _("></template>"), Fa = _("<div hidden id=\""), Ia = _("\">"), La = _("</div>"), Ra = _("<svg aria-hidden=\"true\" style=\"display:none\" id=\""), za = _("\">"), Ba = _("</svg>"), Va = _("<math aria-hidden=\"true\" style=\"display:none\" id=\""), Ha = _("\">"), Ua = _("</math>"), Wa = _("<table hidden id=\""), Ga = _("\">"), Ka = _("</table>"), qa = _("<table hidden><tbody id=\""), Ja = _("\">"), Ya = _("</tbody></table>"), Xa = _("<table hidden><tr id=\""), Za = _("\">"), Qa = _("</tr></table>"), $a = _("<table hidden><colgroup id=\""), eo = _("\">"), to = _("</colgroup></table>"), no = _("$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS(\""), ro = _("$RS(\""), io = _("\",\""), ao = _("\")<\/script>");
		_("<template data-rsi=\"\" data-sid=\""), _("\" data-pid=\"");
		var oo = _("$RB=[];$RV=function(a){$RT=performance.now();for(var b=0;b<a.length;b+=2){var c=a[b],e=a[b+1];null!==e.parentNode&&e.parentNode.removeChild(e);var f=c.parentNode;if(f){var g=c.previousSibling,h=0;do{if(c&&8===c.nodeType){var d=c.data;if(\"/$\"===d||\"/&\"===d)if(0===h)break;else h--;else\"$\"!==d&&\"$?\"!==d&&\"$~\"!==d&&\"$!\"!==d&&\"&\"!==d||h++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;e.firstChild;)f.insertBefore(e.firstChild,c);g.data=\"$\";g._reactRetry&&requestAnimationFrame(g._reactRetry)}}a.length=0};\n$RC=function(a,b){if(b=document.getElementById(b))(a=document.getElementById(a))?(a.previousSibling.data=\"$~\",$RB.push(a,b),2===$RB.length&&(\"number\"!==typeof $RT?requestAnimationFrame($RV.bind(null,$RB)):(a=performance.now(),setTimeout($RV.bind(null,$RB),2300>a&&2E3<a?2300-a:$RT+300-a)))):b.parentNode.removeChild(b)};");
		g("$RV=function(A,g){function k(a,b){var e=a.getAttribute(b);e&&(b=a.style,l.push(a,b.viewTransitionName,b.viewTransitionClass),\"auto\"!==e&&(b.viewTransitionClass=e),(a=a.getAttribute(\"vt-name\"))||(a=\"_T_\"+K++ +\"_\"),b.viewTransitionName=a,B=!0)}var B=!1,K=0,l=[];try{var f=document.__reactViewTransition;if(f){f.finished.finally($RV.bind(null,g));return}var m=new Map;for(f=1;f<g.length;f+=2)for(var h=g[f].querySelectorAll(\"[vt-share]\"),d=0;d<h.length;d++){var c=h[d];m.set(c.getAttribute(\"vt-name\"),c)}var u=[];for(h=0;h<g.length;h+=2){var C=g[h],x=C.parentNode;if(x){var v=x.getBoundingClientRect();if(v.left||v.top||v.width||v.height){c=C;for(f=0;c;){if(8===c.nodeType){var r=c.data;if(\"/$\"===r)if(0===f)break;else f--;else\"$\"!==r&&\"$?\"!==r&&\"$~\"!==r&&\"$!\"!==r||f++}else if(1===c.nodeType){d=c;var D=d.getAttribute(\"vt-name\"),y=m.get(D);k(d,y?\"vt-share\":\"vt-exit\");y&&(k(y,\"vt-share\"),m.set(D,null));var E=d.querySelectorAll(\"[vt-share]\");for(d=0;d<E.length;d++){var F=E[d],G=F.getAttribute(\"vt-name\"),\nH=m.get(G);H&&(k(F,\"vt-share\"),k(H,\"vt-share\"),m.set(G,null))}}c=c.nextSibling}for(var I=g[h+1],t=I.firstElementChild;t;)null!==m.get(t.getAttribute(\"vt-name\"))&&k(t,\"vt-enter\"),t=t.nextElementSibling;c=x;do for(var n=c.firstElementChild;n;){var J=n.getAttribute(\"vt-update\");J&&\"none\"!==J&&!l.includes(n)&&k(n,\"vt-update\");n=n.nextElementSibling}while((c=c.parentNode)&&1===c.nodeType&&\"none\"!==c.getAttribute(\"vt-update\"));u.push.apply(u,I.querySelectorAll('img[src]:not([loading=\"lazy\"])'))}}}if(B){var z=\ndocument.__reactViewTransition=document.startViewTransition({update:function(){A(g);for(var a=[document.documentElement.clientHeight,document.fonts.ready],b={},e=0;e<u.length;b={g:b.g},e++)if(b.g=u[e],!b.g.complete){var p=b.g.getBoundingClientRect();0<p.bottom&&0<p.right&&p.top<window.innerHeight&&p.left<window.innerWidth&&(p=new Promise(function(w){return function(q){w.g.addEventListener(\"load\",q);w.g.addEventListener(\"error\",q)}}(b)),a.push(p))}return Promise.race([Promise.all(a),new Promise(function(w){var q=\nperformance.now();setTimeout(w,2300>q&&2E3<q?2300-q:500)})])},types:[]});z.ready.finally(function(){for(var a=l.length-3;0<=a;a-=3){var b=l[a],e=b.style;e.viewTransitionName=l[a+1];e.viewTransitionClass=l[a+1];\"\"===b.getAttribute(\"style\")&&b.removeAttribute(\"style\")}});z.finished.finally(function(){document.__reactViewTransition===z&&(document.__reactViewTransition=null)});$RB=[];return}}catch(a){}A(g)}.bind(null,$RV);");
		var so = _("$RC(\""), co = _("$RM=new Map;$RR=function(n,w,p){function u(q){this._p=null;q()}for(var r=new Map,t=document,h,b,e=t.querySelectorAll(\"link[data-precedence],style[data-precedence]\"),v=[],k=0;b=e[k++];)\"not all\"===b.getAttribute(\"media\")?v.push(b):(\"LINK\"===b.tagName&&$RM.set(b.getAttribute(\"href\"),b),r.set(b.dataset.precedence,h=b));e=0;b=[];var l,a;for(k=!0;;){if(k){var f=p[e++];if(!f){k=!1;e=0;continue}var c=!1,m=0;var d=f[m++];if(a=$RM.get(d)){var g=a._p;c=!0}else{a=t.createElement(\"link\");a.href=d;a.rel=\n\"stylesheet\";for(a.dataset.precedence=l=f[m++];g=f[m++];)a.setAttribute(g,f[m++]);g=a._p=new Promise(function(q,x){a.onload=u.bind(a,q);a.onerror=u.bind(a,x)});$RM.set(d,a)}d=a.getAttribute(\"media\");!g||d&&!matchMedia(d).matches||b.push(g);if(c)continue}else{a=v[e++];if(!a)break;l=a.getAttribute(\"data-precedence\");a.removeAttribute(\"media\")}c=r.get(l)||h;c===h&&(h=a);r.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=t.head,c.insertBefore(a,c.firstChild))}if(p=document.getElementById(n))p.previousSibling.data=\n\"$~\";Promise.all(b).then($RC.bind(null,n,w),$RX.bind(null,n,\"CSS failed to load\"))};$RR(\""), lo = _("$RR(\""), uo = _("\",\""), fo = _("\","), po = _("\""), mo = _(")<\/script>");
		_("<template data-rci=\"\" data-bid=\""), _("<template data-rri=\"\" data-bid=\""), _("\" data-sid=\""), _("\" data-sty=\"");
		var ho = _("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};"), go = _("$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data=\"$!\",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX(\""), _o = _("$RX(\""), vo = _("\""), yo = _(","), bo = _(")<\/script>");
		_("<template data-rxi=\"\" data-bid=\""), _("\" data-dgst=\""), _("\" data-msg=\""), _("\" data-stck=\""), _("\" data-cstck=\"");
		var xo = /[<\u2028\u2029]/g, So = /[&><\u2028\u2029]/g, Co = _(" media=\"not all\" data-precedence=\""), wo = _("\" data-href=\""), To = _("\">"), Eo = _("</style>"), Do = !1, Oo = !0, ko = [], Ao = _(" data-precedence=\""), jo = _("\" data-href=\""), Mo = _(" "), No = _("\">"), Po = _("</style>");
		_("<link rel=\"expect\" href=\"#"), _("\" blocking=\"render\"/>");
		var Fo = _(" id=\""), Io = _("["), Lo = _(",["), Ro = _(","), zo = _("]"), Bo = 0, Vo = 1, Ho = 2, Uo = 3, Wo = /[<>\r\n]/g, Go = /["';,\r\n]/g, Ko = Function.prototype.bind, qo = Symbol.for("react.client.reference"), Jo = {};
		Object.freeze(Jo);
		var Yo = {}, Xo = null, Zo = {}, Qo = {}, $o = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ new Set(), ts = /* @__PURE__ */ new Set(), ns = /* @__PURE__ */ new Set(), rs = /* @__PURE__ */ new Set(), is = /* @__PURE__ */ new Set(), as = /* @__PURE__ */ new Set(), os = /* @__PURE__ */ new Set(), ss = /* @__PURE__ */ new Set(), cs = {
			enqueueSetState: function(e, t, n) {
				var r = e._reactInternals;
				r.queue === null ? rt(e, "setState") : (r.queue.push(t), n != null && nt(n));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals, e.replace = !0, e.queue = [t], n != null && nt(n);
			},
			enqueueForceUpdate: function(e, t) {
				e._reactInternals.queue === null ? rt(e, "forceUpdate") : t != null && nt(t);
			}
		}, ls = {
			id: 1,
			overflow: ""
		}, us = Math.clz32 ? Math.clz32 : at, ds = Math.log, fs = Math.LN2, ps = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), ms = null, hs = typeof Object.is == "function" ? Object.is : lt, gs = null, _s = null, vs = null, ys = null, bs = null, xs = null, Ss = !1, Cs = !1, ws = 0, Ts = 0, Es = -1, Ds = 0, Os = null, ks = null, As = 0, js = !1, Ms, Ns = {
			readContext: ht,
			use: function(e) {
				if (typeof e == "object" && e) {
					if (typeof e.then == "function") return wt(e);
					if (e.$$typeof === Qn) return ht(e);
				}
				throw Error("An unsupported type was passed to use(): " + String(e));
			},
			useContext: function(e) {
				return Ms = "useContext", ut(), e._currentValue;
			},
			useMemo: vt,
			useReducer: _t,
			useRef: function(e) {
				gs = ut(), xs = ft();
				var t = xs.memoizedState;
				return t === null ? (e = { current: e }, Object.seal(e), xs.memoizedState = e) : t;
			},
			useState: function(e) {
				return Ms = "useState", _t(gt, e);
			},
			useInsertionEffect: ot,
			useLayoutEffect: ot,
			useCallback: function(e, t) {
				return vt(function() {
					return e;
				}, t);
			},
			useImperativeHandle: ot,
			useEffect: ot,
			useDebugValue: ot,
			useDeferredValue: function(e, t) {
				return ut(), t === void 0 ? e : t;
			},
			useTransition: function() {
				return ut(), [!1, xt];
			},
			useId: function() {
				var e = _s.treeContext, t = e.overflow;
				e = e.id, e = (e & ~(1 << 32 - us(e) - 1)).toString(32) + t;
				var n = Ps;
				if (n === null) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
				return t = ws++, e = "_" + n.idPrefix + "R_" + e, 0 < t && (e += "H" + t.toString(32)), e + "_";
			},
			useSyncExternalStore: function(e, t, n) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				return n();
			},
			useOptimistic: function(e) {
				return ut(), [e, St];
			},
			useActionState: Ct,
			useFormState: Ct,
			useHostTransitionStatus: function() {
				return ut(), ei;
			},
			useMemoCache: function(e) {
				for (var t = Array(e), n = 0; n < e; n++) t[n] = sr;
				return t;
			},
			useCacheRefresh: function() {
				return Tt;
			},
			useEffectEvent: function() {
				return bt;
			}
		}, Ps = null, Fs = null, Is = {
			getCacheForType: function() {
				throw Error("Not implemented.");
			},
			cacheSignal: function() {
				throw Error("Not implemented.");
			},
			getOwner: function() {
				return Fs === null ? null : Fs.componentStack;
			}
		}, Ls = 0, Rs, zs, Bs, Vs, Hs, Us, Ws;
		Et.__reactDisabledLog = !0;
		var Gs, Ks, qs = !1, Js = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ys = { react_stack_bottom_frame: function(e, t, n) {
			return e(t, n);
		} }, Xs = Ys.react_stack_bottom_frame.bind(Ys), Zs = { react_stack_bottom_frame: function(e) {
			return e.render();
		} }, Qs = Zs.react_stack_bottom_frame.bind(Zs), $s = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, ec = $s.react_stack_bottom_frame.bind($s), tc = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var nc = performance, rc = function() {
			return nc.now();
		};
		else {
			var ic = Date;
			rc = function() {
				return ic.now();
			};
		}
		var ac = 4, oc = 0, sc = 1, cc = 2, lc = 3, uc = 4, dc = 5, fc = 14, pc = null, mc = {}, hc = {}, gc = {}, _c = {}, vc = !1, yc = !1, bc = !1, xc = 0, Sc = !1;
		Un(), Un(), t.prerender = function(e, t) {
			return new Promise(function(n, r) {
				var i = t ? t.onHeaders : void 0, a;
				i && (a = function(e) {
					i(new Headers(e));
				});
				var o = I(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), s = Rt(e, o, ee(o, void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, a, t ? t.maxHeadersLength : void 0), z(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							zn(s, e);
						},
						cancel: function(e) {
							s.destination = null, Bn(s, e);
						}
					}, { highWaterMark: 0 });
					e = {
						postponed: Hn(s),
						prelude: e
					}, n(e);
				}, void 0, void 0, r, t ? t.onPostpone : void 0);
				if (t && t.signal) {
					var c = t.signal;
					if (c.aborted) Bn(s, c.reason);
					else {
						var l = function() {
							Bn(s, c.reason), c.removeEventListener("abort", l);
						};
						c.addEventListener("abort", l);
					}
				}
				Ln(s);
			});
		}, t.renderToReadableStream = function(e, t) {
			return new Promise(function(n, r) {
				var i, a, o = new Promise(function(e, t) {
					a = e, i = t;
				}), s = t ? t.onHeaders : void 0, c;
				s && (c = function(e) {
					s(new Headers(e));
				});
				var l = I(t ? t.identifierPrefix : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), u = Lt(e, l, ee(l, t ? t.nonce : void 0, t ? t.unstable_externalRuntimeSrc : void 0, t ? t.importMap : void 0, c, t ? t.maxHeadersLength : void 0), z(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, a, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							zn(u, e);
						},
						cancel: function(e) {
							u.destination = null, Bn(u, e);
						}
					}, { highWaterMark: 0 });
					e.allReady = o, n(e);
				}, function(e) {
					o.catch(function() {}), r(e);
				}, i, t ? t.onPostpone : void 0, t ? t.formState : void 0);
				if (t && t.signal) {
					var d = t.signal;
					if (d.aborted) Bn(u, d.reason);
					else {
						var f = function() {
							Bn(u, d.reason), d.removeEventListener("abort", f);
						};
						d.addEventListener("abort", f);
					}
				}
				Ln(u);
			});
		}, t.resume = function(e, t, n) {
			return new Promise(function(r, i) {
				var a, o, s = new Promise(function(e, t) {
					o = e, a = t;
				}), c = zt(e, t, ee(t.resumableState, n ? n.nonce : void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, o, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							zn(c, e);
						},
						cancel: function(e) {
							c.destination = null, Bn(c, e);
						}
					}, { highWaterMark: 0 });
					e.allReady = s, r(e);
				}, function(e) {
					s.catch(function() {}), i(e);
				}, a, n ? n.onPostpone : void 0);
				if (n && n.signal) {
					var l = n.signal;
					if (l.aborted) Bn(c, l.reason);
					else {
						var u = function() {
							Bn(c, l.reason), l.removeEventListener("abort", u);
						};
						l.addEventListener("abort", u);
					}
				}
				Ln(c);
			});
		}, t.resumeAndPrerender = function(e, t, n) {
			return new Promise(function(r, i) {
				var a = Y(e, t, ee(t.resumableState, void 0, void 0, void 0, void 0, void 0), n ? n.onError : void 0, function() {
					var e = new ReadableStream({
						type: "bytes",
						pull: function(e) {
							zn(a, e);
						},
						cancel: function(e) {
							a.destination = null, Bn(a, e);
						}
					}, { highWaterMark: 0 });
					e = {
						postponed: Hn(a),
						prelude: e
					}, r(e);
				}, void 0, void 0, i, n ? n.onPostpone : void 0);
				if (n && n.signal) {
					var o = n.signal;
					if (o.aborted) Bn(a, o.reason);
					else {
						var s = function() {
							Bn(a, o.reason), o.removeEventListener("abort", s);
						};
						o.addEventListener("abort", s);
					}
				}
				Ln(a);
			});
		}, t.version = "19.2.4";
	})();
})), o = /* @__PURE__ */ t(((e) => {
	var t, o;
	process.env.NODE_ENV === "production" ? (t = n(), o = r()) : (t = i(), o = a()), e.version = t.version, e.renderToString = t.renderToString, e.renderToStaticMarkup = t.renderToStaticMarkup, e.renderToReadableStream = o.renderToReadableStream, e.resume = o.resume;
}));
//#endregion
export default o();
