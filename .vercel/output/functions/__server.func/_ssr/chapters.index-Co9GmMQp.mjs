import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./page-header-B-RFu5rR.mjs";
import { t as chapterRanges } from "./chapters-BYT2j8m5.mjs";
import { t as Input } from "./input-CQ4YVv87.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chapters.index-Co9GmMQp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChaptersPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return chapterRanges;
		return chapterRanges.map((r) => ({
			...r,
			chapters: r.chapters.filter((c) => c.n.toLowerCase().includes(s) || c.recap.toLowerCase().includes(s) || r.title.toLowerCase().includes(s) || r.thesis.toLowerCase().includes(s))
		})).filter((r) => r.chapters.length > 0 || r.title.toLowerCase().includes(s));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Spoiler ledger",
				title: "Chapter by chapter",
				lede: "Every movement of the novel, in order. Search a name, object, or chapter number. Each band has a thesis — the point of those pages — then the concrete beats."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search recaps — Emily, octagon, 10/18, Toby…",
				"aria-label": "Search chapter recaps",
				className: "mb-8 max-w-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-8 flex flex-wrap gap-2",
				children: chapterRanges.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#range-${r.id}`,
					className: "rounded-full border border-line px-3 py-2 text-xs text-muted no-underline hover:border-brass hover:text-brass-soft",
					children: r.label
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-10",
				children: filtered.map((range) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: `range-${range.id}`,
					className: "scroll-mt-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.2em] text-brass",
								children: range.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl text-fg",
								children: range.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/chapters/$rangeId",
								params: { rangeId: range.id },
								className: "text-sm text-muted no-underline hover:text-brass-soft",
								children: "Open as a page"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 max-w-3xl text-sm leading-relaxed text-muted",
							children: range.thesis
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "divide-y divide-line overflow-hidden rounded-xl border border-line",
							children: range.chapters.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[4.5rem_1fr] gap-4 bg-surface px-4 py-4 sm:px-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-brass tabular-nums",
									children: c.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-fg",
									children: c.recap
								})]
							}, c.n))
						})
					]
				}, range.id))
			}),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No recaps match that search."
			}) : null
		]
	});
}
//#endregion
export { ChaptersPage as component };
