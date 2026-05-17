import Link from "next/link";

export const metadata = {
  title: "404 · Off the route",
  description: "This page isn't on any of the 2026 routes. Let's get you back to the tours.",
};

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 bg-night-950">
      <div className="text-center max-w-md">
        <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">404 · Off the route</p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 mb-5 leading-tight">
          This trail doesn&apos;t go anywhere.
        </h1>
        <p className="text-sand-300 mb-8 leading-relaxed">
          Mongolia is big and the steppe doesn&apos;t have signs. Let&apos;s get you back on the road.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-sand-400 hover:bg-sand-300 text-night-950 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition-colors"
          >
            Home
          </Link>
          <Link
            href="/tours"
            className="px-6 py-3 border border-sand-400/40 text-sand-200 text-sm uppercase tracking-[0.15em] hover:bg-sand-400/10 hover:border-sand-400/70 rounded-sm transition-colors"
          >
            All tours
          </Link>
        </div>
      </div>
    </main>
  );
}
