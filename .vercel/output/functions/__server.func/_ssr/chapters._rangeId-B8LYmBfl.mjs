import { J as notFound, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft } from "../_libs/lucide-react.mjs";
import { r as Route$2 } from "./router-Dxkn0ZLQ.mjs";
import { t as chapterRanges } from "./chapters-BYT2j8m5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chapters._rangeId-B8LYmBfl.js
var import_jsx_runtime = require_jsx_runtime();
function RangePage() {
	const { rangeId } = Route$2.useParams();
	const range = chapterRanges.find((r) => r.id === rangeId);
	if (!range) throw notFound();
	const idx = chapterRanges.findIndex((r) => r.id === rangeId);
	const prev = chapterRanges[idx - 1];
	const next = chapterRanges[idx + 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/chapters",
				className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All chapters"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-[11px] uppercase tracking-[0.2em] text-brass",
				children: range.label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl font-semibold text-fg",
				children: range.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted",
				children: range.thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-8 space-y-6",
				children: range.chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-xl text-brass",
					children: ["Chapter ", c.n]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[15px] leading-relaxed text-fg",
					children: c.recap
				})] }, c.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-12 flex items-center justify-between border-t border-line pt-6 text-sm",
				children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chapters/$rangeId",
					params: { rangeId: prev.id },
					className: "text-muted no-underline hover:text-brass-soft",
					children: ["← ", prev.label]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chapters/$rangeId",
					params: { rangeId: next.id },
					className: "text-muted no-underline hover:text-brass-soft",
					children: [next.label, " →"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})]
			})
		]
	});
}
//#endregion
export { RangePage as component };
