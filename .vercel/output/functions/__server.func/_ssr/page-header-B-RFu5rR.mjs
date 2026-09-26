import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-CxaBykS3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-B-RFu5rR.js
var import_jsx_runtime = require_jsx_runtime();
function PageHeader({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-10 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				className: "mb-4 border-brass/40 text-brass",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold leading-[1.12] tracking-tight text-fg sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted sm:text-lg",
				children: lede
			})
		]
	});
}
//#endregion
export { PageHeader as t };
