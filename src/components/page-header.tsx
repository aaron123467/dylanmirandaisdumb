import { Badge } from "@/components/ui/badge";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mb-10 max-w-3xl">
      <Badge className="mb-4 border-brass/40 text-brass">{kicker}</Badge>
      <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-fg sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{lede}</p>
    </header>
  );
}
