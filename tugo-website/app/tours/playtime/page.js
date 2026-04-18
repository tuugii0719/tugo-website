"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PlaytimePage() {
  return (
    <div className="min-h-screen bg-night-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <p className="text-sand-500 text-xs tracking-[0.3em] uppercase mb-4">
          July 1 – 6 · 6 Days
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 mb-4">
          Playtime
        </h1>
        <p className="text-sand-400 leading-relaxed mb-4">
          6 days · $800 · 6–8 pax
        </p>
        <p className="text-sand-400 leading-relaxed mb-8">
          Meet young people around Mongolia&apos;s biggest music festival. Pre-party day the day before, festival together, optional Terelj day trips in between, one city recovery day. Tent + water + a burrito a day — simple, social, and cheap.
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
