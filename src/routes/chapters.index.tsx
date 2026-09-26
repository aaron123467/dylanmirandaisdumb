import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { chapterRanges } from "@/data/chapters";

export const Route = createFileRoute("/chapters/")({ component: ChaptersPage });

function ChaptersPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return chapterRanges;
    return chapterRanges
      .map((r) => ({
        ...r,
        chapters: r.chapters.filter(
          (c) =>
            c.n.toLowerCase().includes(s) ||
            c.recap.toLowerCase().includes(s) ||
            r.title.toLowerCase().includes(s) ||
            r.thesis.toLowerCase().includes(s),
        ),
      }))
      .filter((r) => r.chapters.length > 0 || r.title.toLowerCase().includes(s));
  }, [q]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader
        kicker="Spoiler ledger"
        title="Chapter by chapter"
        lede="Every movement of the novel, in order. Search a name, object, or chapter number. Each band has a thesis — the point of those pages — then the concrete beats."
      />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search recaps — Emily, octagon, 10/18, Toby…"
        aria-label="Search chapter recaps"
        className="mb-8 max-w-xl"
      />
      <div className="mb-8 flex flex-wrap gap-2">
        {chapterRanges.map((r) => (
          <a
            key={r.id}
            href={`#range-${r.id}`}
            className="rounded-full border border-line px-3 py-2 text-xs text-muted no-underline hover:border-brass hover:text-brass-soft"
          >
            {r.label}
          </a>
        ))}
      </div>
      <div className="space-y-10">
        {filtered.map((range) => (
          <section key={range.id} id={`range-${range.id}`} className="scroll-mt-24">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brass">{range.label}</p>
                <h2 className="font-display text-3xl text-fg">{range.title}</h2>
              </div>
              <Link
                to="/chapters/$rangeId"
                params={{ rangeId: range.id }}
                className="text-sm text-muted no-underline hover:text-brass-soft"
              >
                Open as a page
              </Link>
            </div>
            <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted">{range.thesis}</p>
            <ol className="divide-y divide-line overflow-hidden rounded-xl border border-line">
              {range.chapters.map((c) => (
                <li key={c.n} className="grid grid-cols-[4.5rem_1fr] gap-4 bg-surface px-4 py-4 sm:px-5">
                  <span className="font-display text-lg text-brass tabular-nums">{c.n}</span>
                  <p className="text-sm leading-relaxed text-fg">{c.recap}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-muted">No recaps match that search.</p>
      ) : null}
    </main>
  );
}
