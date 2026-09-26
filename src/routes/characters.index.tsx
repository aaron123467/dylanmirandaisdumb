import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { characters } from "@/data/characters";

export const Route = createFileRoute("/characters/")({ component: CharactersPage });

function CharactersPage() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return characters;
    return characters.filter(
      (c) =>
        c.name.toLowerCase().includes(s) ||
        c.role.toLowerCase().includes(s) ||
        c.tag.toLowerCase().includes(s) ||
        c.arc.toLowerCase().includes(s),
    );
  }, [q]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <PageHeader
        kicker="Dossier"
        title="Who they are, what they cost"
        lede="Role, connections, arc, and fate at the end of book one. Click anyone for evidence — the concrete facts the novel actually gives you."
      />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter people…"
        aria-label="Filter characters"
        className="mb-8 max-w-md"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Link
            key={c.slug}
            to="/characters/$slug"
            params={{ slug: c.slug }}
            className="paper-panel flex flex-col p-5 no-underline transition-colors duration-150 hover:border-brass/50"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-2xl leading-tight text-fg">{c.name}</h2>
              <Badge className="shrink-0">{c.tag}</Badge>
            </div>
            <p className="mt-2 text-sm text-muted">{c.role}</p>
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-faint">{c.arc}</p>
          </Link>
        ))}
      </div>
      {list.length === 0 ? <p className="text-muted">No one matches.</p> : null}
    </main>
  );
}
