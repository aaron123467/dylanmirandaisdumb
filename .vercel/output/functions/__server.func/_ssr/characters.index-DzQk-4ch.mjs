import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-CxaBykS3.mjs";
import { t as PageHeader } from "./page-header-B-RFu5rR.mjs";
import { t as Input } from "./input-CQ4YVv87.mjs";
import { t as characters } from "./characters-CETI4q-s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/characters.index-DzQk-4ch.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CharactersPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return characters;
		return characters.filter((c) => c.name.toLowerCase().includes(s) || c.role.toLowerCase().includes(s) || c.tag.toLowerCase().includes(s) || c.arc.toLowerCase().includes(s));
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				kicker: "Dossier",
				title: "Who they are, what they cost",
				lede: "Role, connections, arc, and fate at the end of book one. Click anyone for evidence — the concrete facts the novel actually gives you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Filter people…",
				"aria-label": "Filter characters",
				className: "mb-8 max-w-md"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/characters/$slug",
					params: { slug: c.slug },
					className: "paper-panel flex flex-col p-5 no-underline transition-colors duration-150 hover:border-brass/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl leading-tight text-fg",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								className: "shrink-0",
								children: c.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: c.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 line-clamp-3 text-sm leading-relaxed text-faint",
							children: c.arc
						})
					]
				}, c.slug))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "No one matches."
			}) : null
		]
	});
}
//#endregion
export { CharactersPage as component };
