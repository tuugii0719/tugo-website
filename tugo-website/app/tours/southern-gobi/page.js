"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SouthernGobiPage() {
  return (
    <div className="min-h-screen bg-night-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="text-sand-500 text-xs tracking-[0.3em] uppercase mb-4">
          June 16 – 23 · 8 Days
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 mb-4">
          Southern Gobi + Central
        </h1>
        <p className="text-sand-400 leading-relaxed mb-4">
          8 days · $1,000 · 4–6 pax
        </p>
        <p className="text-sand-400 leading-relaxed mb-8">
          For young travellers who want to cover ground — Umnugobi, Yoliin Am ice canyon, a night in the desert, camels at Khongoriin Els, then central Mongolia on the way back: hot springs, horse riding, hiking. Tight, adventure-packed, a lot of driving.
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
