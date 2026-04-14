//#region ../../node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
var e = (e) => new TextEncoder().encode(e), t = (e) => {
	if (typeof e == "string") return e;
	if (typeof e != "object" || typeof e.byteOffset != "number" || typeof e.byteLength != "number") throw Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
	return new TextDecoder("utf-8").decode(e);
};
//#endregion
export { e as n, t };
