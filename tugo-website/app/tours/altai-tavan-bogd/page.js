"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AltaiTavanBogdPage() {
  return (
    <div className="min-h-screen bg-night-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="text-sand-500 text-xs tracking-[0.3em] uppercase mb-4">
          Aug 8 – 21 · 14 Days
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 mb-4">
          Altai Tavan Bogd
        </h1>
        <p className="text-sand-400 leading-relaxed mb-8">
          Full tour details coming soon. Mongolia&apos;s remote west — the Five Holy Peaks, Potanin Glacier, Kazakh eagle hunters in their summer pastures, Malchin Peak trek, and camps beneath snow and stars.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
          >
            Reserve Your Spot
          </Link>
          <Link
            href="/tours"
            className="inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-wider text-sand-400 transition hover:bg-sand-400/10"
          >
            ← All Tours
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
