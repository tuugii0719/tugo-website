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
          July 1 – 5 · 5 Days
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 mb-4">
          Playtime
        </h1>
        <p className="text-sand-400 leading-relaxed mb-4">
          5 days · $750 · 6–8 pax
        </p>
        <p className="text-sand-400 leading-relaxed mb-6">
          Meet young people around Mongolia&apos;s biggest music festival. Pre-party night the day before, festival together, a UB city day, a Terelj day, and a chill recovery day. Simple, social, and fun.
        </p>
        <div className="text-left max-w-md mx-auto text-sand-300 text-sm leading-relaxed bg-night-900/40 border border-sand-800/40 rounded-xl p-5 mb-8">
          <p className="font-medium text-sand-100 mb-2 text-center">What&apos;s included</p>
          <ul className="space-y-1">
            <li>✓  Festival ticket</li>
            <li>✓  3 meals a day</li>
            <li>✓  UB city tour</li>
            <li>✓  Terelj day trip</li>
            <li>✓  Accommodation throughout</li>
          </ul>
        </div>
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
