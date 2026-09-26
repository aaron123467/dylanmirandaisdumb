import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { bookMeta, plotBeats, thesis } from "@/data/plot";
import { themes } from "@/data/themes";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-brass">
            {bookMeta.author} · {bookMeta.year}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-fg sm:text-7xl">
            {bookMeta.title}
          </h1>
          <div className="ledger-rule my-8 max-w-xl" />
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{thesis}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>{bookMeta.genre}</Badge>
            <Badge>{bookMeta.setting}</Badge>
            <Badge>{bookMeta.fortune}</Badge>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { to: "/chapters", label: "Chapter recaps", hint: "1–epilogue, no filler" },
              { to: "/characters", label: "People & fates", hint: "Who owes whom" },
              { to: "/artifacts", label: "Objects that matter", hint: "Will, octagon, sugar" },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group paper-panel flex min-h-[7.5rem] flex-col justify-between p-5 no-underline transition-colors duration-150 hover:border-brass/50"
              >
                <span className="font-display text-2xl text-fg">{c.label}</span>
                <span className="flex items-center justify-between text-sm text-muted">
                  {c.hint}
                  <ArrowRight className="size-4 text-brass transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Six beats</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-fg">What happens</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {plotBeats.map((b) => (
            <li key={b.n} className="paper-panel p-5 sm:p-6">
              <p className="font-display text-sm text-brass">{b.n}</p>
              <h3 className="mt-1 font-display text-2xl text-fg">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-brass">What it means</p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-fg">Occurring themes</h2>
            </div>
            <Link to="/themes" className="hidden text-sm text-brass no-underline sm:inline">
              Full analysis
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t) => (
              <article key={t.slug} className="paper-panel p-5">
                <h3 className="font-display text-xl text-fg">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.claim}</p>
              </article>
            ))}
          </div>
          <Link
            to="/themes"
            className="mt-6 inline-flex min-h-11 items-center text-sm text-brass no-underline sm:hidden"
          >
            Full analysis
          </Link>
        </div>
      </section>
    </main>
  );
}
