import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { chapterRanges } from "@/data/chapters";

export const Route = createFileRoute("/chapters/$rangeId")({
  component: RangePage,
});

function RangePage() {
  const { rangeId } = Route.useParams();
  const range = chapterRanges.find((r) => r.id === rangeId);
  if (!range) throw notFound();
  const idx = chapterRanges.findIndex((r) => r.id === rangeId);
  const prev = chapterRanges[idx - 1];
  const next = chapterRanges[idx + 1];

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/chapters"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline hover:text-fg"
      >
        <ArrowLeft className="size-4" /> All chapters
      </Link>
      <p className="mt-8 text-[11px] uppercase tracking-[0.2em] text-brass">{range.label}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-fg">{range.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{range.thesis}</p>
      <ol className="mt-8 space-y-6">
        {range.chapters.map((c) => (
          <li key={c.n}>
            <h2 className="font-display text-xl text-brass">Chapter {c.n}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-fg">{c.recap}</p>
          </li>
        ))}
      </ol>
      <nav className="mt-12 flex items-center justify-between border-t border-line pt-6 text-sm">
        {prev ? (
          <Link
            to="/chapters/$rangeId"
            params={{ rangeId: prev.id }}
            className="text-muted no-underline hover:text-brass-soft"
          >
            ← {prev.label}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/chapters/$rangeId"
            params={{ rangeId: next.id }}
            className="text-muted no-underline hover:text-brass-soft"
          >
            {next.label} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
