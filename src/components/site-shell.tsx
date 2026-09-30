import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EstateBackdrop } from "@/components/estate-backdrop";

const links = [
  { to: "/", label: "Plot" },
  { to: "/chapters", label: "Chapters" },
  { to: "/characters", label: "Characters" },
  { to: "/artifacts", label: "Artifacts" },
  { to: "/themes", label: "Themes" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-dvh text-fg">
      <EstateBackdrop />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/72 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
            <Link to="/" className="flex items-baseline gap-2 no-underline" onClick={() => setOpen(false)}>
              <span className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                Hawthorne Ledger
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-brass sm:inline">
                The Inheritance Games
              </span>
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => {
                const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm tracking-wide no-underline transition-colors duration-150",
                      active ? "text-brass-soft" : "text-muted hover:text-fg",
                    )}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md border border-line text-fg md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          {open ? (
            <nav className="border-t border-line bg-bg-raised/90 px-4 py-3 md:hidden">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block min-h-11 py-3 text-base text-fg no-underline"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </header>
        <div className="relative">{children}</div>
        <footer className="border-t border-line bg-bg/55">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-faint sm:px-6">
            <p className="font-display text-lg text-muted">Hawthorne Ledger</p>
            <p>
              Companion notes for Jennifer Lynn Barnes’s novel. Spoilers throughout. Not affiliated with the
              author or publisher.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
