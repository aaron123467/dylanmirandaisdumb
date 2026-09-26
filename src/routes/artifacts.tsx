import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { artifacts, quotes } from "@/data/artifacts";

export const Route = createFileRoute("/artifacts")({ component: ArtifactsPage });

function ArtifactsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader
        kicker="Objects & lines"
        title="What the house leaves on the table"
        lede="The novel thinks in things: a will, a desk, a date, a sugar packet. Each object is an argument. Short lines only — then what they actually do in the plot."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        {artifacts.map((a) => (
          <article key={a.slug} className="paper-panel p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-2xl text-fg">{a.name}</h2>
              <Badge>{a.kind}</Badge>
            </div>
            <p className="mt-3 font-display text-lg italic text-brass-soft">{a.quote}</p>
            <p className="mt-4 text-sm leading-relaxed text-fg">{a.meaning}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.analysis}</p>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-fg">Lines that carry the book</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Paraphrase-tight. These are the sentences the plot leans on — not decoration.
        </p>
        <ul className="mt-8 space-y-4">
          {quotes.map((q) => (
            <li key={q.text} className="border-l-2 border-brass pl-5">
              <p className="font-display text-2xl leading-snug text-fg">{q.text}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-faint">{q.speaker}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{q.why}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
