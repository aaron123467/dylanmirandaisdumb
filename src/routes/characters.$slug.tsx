import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { characters } from "@/data/characters";

export const Route = createFileRoute("/characters/$slug")({
  component: CharacterPage,
});

function CharacterPage() {
  const { slug } = Route.useParams();
  const c = characters.find((x) => x.slug === slug);
  if (!c) throw notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        to="/characters"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-muted no-underline hover:text-fg"
      >
        <ArrowLeft className="size-4" /> All characters
      </Link>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Badge>{c.tag}</Badge>
        <span className="text-sm text-muted">{c.role}</span>
      </div>
      <h1 className="mt-3 font-display text-4xl font-semibold text-fg sm:text-5xl">{c.name}</h1>
      <section className="mt-10">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-brass">Arc</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-fg">{c.arc}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-brass">Fate (book one)</h2>
        <p className="mt-2 text-[15px] leading-relaxed text-fg">{c.fate}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-brass">Connections</h2>
        <ul className="mt-3 space-y-2">
          {c.connections.map((line) => (
            <li key={line} className="border-l border-brass/50 pl-3 text-sm text-muted">
              {line}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-brass">Evidence</h2>
        <ul className="mt-3 space-y-3">
          {c.evidence.map((line) => (
            <li key={line} className="paper-panel px-4 py-3 text-sm leading-relaxed text-fg">
              {line}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
