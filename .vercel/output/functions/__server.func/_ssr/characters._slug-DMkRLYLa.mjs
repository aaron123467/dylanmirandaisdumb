import { J as notFound, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-Dxkn0ZLQ.mjs";
import { t as Badge } from "./badge-CxaBykS3.mjs";
import { t as characters } from "./characters-CETI4q-s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/characters._slug-DMkRLYLa.js
var import_jsx_runtime = require_jsx_runtime();
function CharacterPage() {
	const { slug } = Route.useParams();
	const c = characters.find((x) => x.slug === slug);
	if (!c) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/characters",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All characters"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: c.tag }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: c.role
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold text-fg sm:text-5xl",
				children: c.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] uppercase tracking-[0.2em] text-brass",
					children: "Arc"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[15px] leading-relaxed text-fg",
					children: c.arc
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] uppercase tracking-[0.2em] text-brass",
					children: "Fate (book one)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[15px] leading-relaxed text-fg",
					children: c.fate
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] uppercase tracking-[0.2em] text-brass",
					children: "Connections"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: c.connections.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l border-brass/50 pl-3 text-sm text-muted",
						children: line
					}, line))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[11px] uppercase tracking-[0.2em] text-brass",
					children: "Evidence"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: c.evidence.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "paper-panel px-4 py-3 text-sm leading-relaxed text-fg",
						children: line
					}, line))
				})]
			})
		]
	});
}
//#endregion
export { CharacterPage as component };
