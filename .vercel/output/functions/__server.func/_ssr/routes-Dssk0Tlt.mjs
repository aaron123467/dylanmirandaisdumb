import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-CxaBykS3.mjs";
import { i as thesis, n as plotBeats, r as themes, t as bookMeta } from "./themes-sJgC9Ahs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dssk0Tlt.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[11px] uppercase tracking-[0.28em] text-brass",
						children: [
							bookMeta.author,
							" · ",
							bookMeta.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl",
						children: bookMeta.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ledger-rule my-8 max-w-xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-lg leading-relaxed text-muted sm:text-xl",
						children: thesis
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: bookMeta.genre }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: bookMeta.setting }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: bookMeta.fortune })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-3 sm:grid-cols-3",
						children: [
							{
								to: "/chapters",
								label: "Chapter recaps",
								hint: "1–epilogue, no filler"
							},
							{
								to: "/characters",
								label: "People & fates",
								hint: "Who owes whom"
							},
							{
								to: "/artifacts",
								label: "Objects that matter",
								hint: "Will, octagon, sugar"
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: c.to,
							className: "group paper-panel flex min-h-[7.5rem] flex-col justify-between p-5 no-underline transition-colors duration-150 hover:border-brass/50",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-fg",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between text-sm text-muted",
								children: [c.hint, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-brass transition-transform duration-150 group-hover:translate-x-0.5" })]
							})]
						}, c.to))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-[0.22em] text-brass",
					children: "Six beats"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold text-fg",
					children: "What happens"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-4 md:grid-cols-2",
					children: plotBeats.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "paper-panel p-5 sm:p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-brass",
								children: b.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl text-fg",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: b.body
							})
						]
					}, b.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.22em] text-brass",
							children: "What it means"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold text-fg",
							children: "Occurring themes"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/themes",
							className: "hidden text-sm text-brass no-underline sm:inline",
							children: "Full analysis"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: themes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "paper-panel p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-fg",
								children: t.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: t.claim
							})]
						}, t.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/themes",
						className: "mt-6 inline-flex min-h-11 items-center text-sm text-brass no-underline sm:hidden",
						children: "Full analysis"
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
