import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col justify-center px-4 py-16">
      <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Missing page</p>
      <h1 className="mt-2 font-display text-4xl text-fg">Not in the ledger</h1>
      <p className="mt-3 text-muted">That path does not exist in this companion.</p>
      <Link to="/" className="mt-8 inline-flex min-h-11 items-center text-brass no-underline">
        Return to the plot
      </Link>
    </main>
  );
}
