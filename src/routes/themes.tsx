import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { themes } from "@/data/themes";
import { thesis } from "@/data/plot";

export const Route = createFileRoute("/themes")({ component: ThemesPage });

function ThemesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader
        kicker="Meaning"
        title="What the book is teaching"
        lede="Not a list of motifs. Six arguments the novel actually makes, each tied to scenes you can point to."
      />

      <blockquote className="paper-panel mb-12 max-w-3xl p-6 font-display text-2xl leading-snug text-fg sm:text-3xl">
        {thesis}
      </blockquote>

      <div className="mb-12 overflow-x-auto rounded-xl border border-line">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <caption className="sr-only">Theme map</caption>
          <thead className="bg-bg-raised text-[11px] uppercase tracking-[0.16em] text-brass">
            <tr>
              <th className="px-4 py-3 font-medium">Theme</th>
              <th className="px-4 py-3 font-medium">The move</th>
              <th className="px-4 py-3 font-medium">Hard evidence</th>
            </tr>
          </thead>
          <tbody>
            {themes.map((t) => (
              <tr key={t.slug} className="border-t border-line">
                <td className="px-4 py-4 font-display text-lg text-fg">{t.title}</td>
                <td className="px-4 py-4 text-muted">{t.claim}</td>
                <td className="px-4 py-4 text-faint">{t.evidence[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-8">
        {themes.map((t) => (
          <article key={t.slug} id={t.slug} className="paper-panel p-6 sm:p-8">
            <h2 className="font-display text-3xl text-fg">{t.title}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-fg">{t.claim}</p>
            <h3 className="mt-6 text-[11px] uppercase tracking-[0.2em] text-brass">On the page</h3>
            <ul className="mt-3 space-y-2">
              {t.evidence.map((e) => (
                <li key={e} className="text-sm leading-relaxed text-muted">
                  — {e}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-[11px] uppercase tracking-[0.2em] text-brass">What an audience is meant to take</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-fg">{t.teaches}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
