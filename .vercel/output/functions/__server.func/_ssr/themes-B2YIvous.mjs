import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHeader } from "./page-header-B-RFu5rR.mjs";
import { i as thesis, r as themes } from "./themes-sJgC9Ahs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/themes-B2YIvous.js
var import_jsx_runtime = require_jsx_runtime();
function ThemesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Meaning",
				title: "What the book is teaching",
				lede: "Not a list of motifs. Six arguments the novel actually makes, each tied to scenes you can point to."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "paper-panel mb-12 max-w-3xl p-6 font-display text-2xl leading-snug text-fg sm:text-3xl",
				children: thesis
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-12 overflow-x-auto rounded-xl border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "sr-only",
							children: "Theme map"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-bg-raised text-[11px] uppercase tracking-[0.16em] text-brass",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Theme"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "The move"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-4 py-3 font-medium",
									children: "Hard evidence"
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-4 font-display text-lg text-fg",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-4 text-muted",
									children: t.claim
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-4 py-4 text-faint",
									children: t.evidence[0]
								})
							]
						}, t.slug)) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: t.slug,
					className: "paper-panel p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl text-fg",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[15px] leading-relaxed text-fg",
							children: t.claim
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-[11px] uppercase tracking-[0.2em] text-brass",
							children: "On the page"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-2",
							children: t.evidence.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "text-sm leading-relaxed text-muted",
								children: ["— ", e]
							}, e))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-[11px] uppercase tracking-[0.2em] text-brass",
							children: "What an audience is meant to take"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[15px] leading-relaxed text-fg",
							children: t.teaches
						})
					]
				}, t.slug))
			})
		]
	});
}
//#endregion
export { ThemesPage as component };
