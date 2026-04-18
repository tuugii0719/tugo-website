"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const departures = [
  { label: "June departure", dates: "June 11 – 16, 2026", days: 6 },
  { label: "August departure", dates: "Aug 6 – 13, 2026", days: 8 },
];

const days = [
  {
    n: "01",
    title: "Ulaanbaatar → Ölgii → Khoton Lake",
    body:
      "Fly west to Ölgii, then a scenic 170 km drive to the twin Khoton–Khurgan lakes. Stop with an eagle hunter family — hold the eagle. Night with a nomad family on the shore.",
  },
  {
    n: "02",
    title: "Horse ride to Baga Turgen Waterfall",
    body:
      "Saddle up on Mongolia's tiny tough horses. A 22 km round trip to Baga Turgen waterfall with a local guide — forest, icy rivers, green pasture, and the snow line of the China border. ~6 hours total. Drive to the next family to stay the night.",
  },
  {
    n: "03",
    title: "Northern Altai Tavan Bogd",
    body:
      "Drive into the northern park. High passes, hour-by-hour changing terrain, the Yak Milk White River. Overnight with a nomad family near the ranger station.",
  },
  {
    n: "04",
    title: "Sacred Ovoo, Potanin Glacier, petroglyphs",
    body:
      "Breakfast, then 10 km to the sacred Ovoo — a spiritual lookout with a view of the Tavan Bogd peaks and the Potanin Ice Glacier. Optional 3.5 km hike to the glacier itself. On the return to Ölgii, stop at 3,000–4,000 BC petroglyphs. Evening drop at your accommodation.",
  },
];

const vitals = [
  { label: "Duration", value: "6–8 days" },
  { label: "Departures", value: "2 in 2026" },
  { label: "Group size", value: "6–8" },
  { label: "Region", value: "Western Mongolia" },
  { label: "Start / end", value: "Ulaanbaatar" },
  { label: "Price", value: "$1,200" },
];

const included = [
  "Round-trip flight: Ulaanbaatar ↔ Ölgii",
  "All meals (breakfast, lunch, dinner)",
  "4×4 Russian van + driver + fuel",
  "English-speaking guide",
  "Horse & local riding guide",
  "Ger camp + nomad family stays",
  "All park permits & petroglyph site fees",
  "Eagle hunter visit fee",
];

export default function AltaiTavanBogdPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="relative min-h-[55vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-night-950 to-night-950" />
        {/* Decorative peaks */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-48 text-indigo-500/10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path d="M0 200 L 80 120 L 160 60 L 260 140 L 360 40 L 460 110 L 580 20 L 680 100 L 800 60 L 920 140 L 1040 70 L 1200 130 L 1200 200 Z" fill="currentColor" />
          <path d="M340 60 L 360 40 L 380 65" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
          <path d="M560 38 L 580 20 L 600 42" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
        </svg>

        <div className="relative max-w-5xl mx-auto px-6">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sand-400 text-xs tracking-[0.3em] uppercase mb-6 hover:text-sand-200 transition-colors"
          >
            ← 2026 Season
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-indigo-300 text-xs tracking-[0.3em] uppercase mb-3">
              Western Heights
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-5 leading-[0.95]">
              Altai
              <br />
              Tavan Bogd
            </h1>
            <p className="text-sand-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              The Five Holy Peaks — glaciers, Kazakh eagle hunters, twin alpine lakes, 4,000-year-old petroglyphs. Flight in from UB, everything handled. Two departures this season.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DEPARTURES */}
      <section className="border-y border-sand-900/30 bg-night-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departures.map((d) => (
              <div
                key={d.label}
                className="border border-indigo-800/30 bg-indigo-900/10 rounded-xl p-5 flex items-center gap-4"
              >
                <span className="text-indigo-300 text-xs tracking-[0.2em] uppercase font-semibold">
                  {d.label}
                </span>
                <span className="text-sand-700">·</span>
                <span className="text-sand-100 font-display text-lg">{d.dates}</span>
                <span className="text-sand-700">·</span>
                <span className="text-sand-400 text-sm">{d.days} days</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VITALS */}
      <section className="border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {vitals.map((v) => (
            <div key={v.label}>
              <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1.5">
                {v.label}
              </p>
              <p className="text-sand-100 font-display text-sm md:text-base">
                {v.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4">
              The trip
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-6 leading-tight">
              Mongolia&apos;s wildest corner, all included.
            </h2>
            <div className="space-y-5 text-sand-300 text-lg leading-relaxed">
              <p>
                The Altai is the most remote part of the country — the peaks that make Mongolia&apos;s western border with China, Russia, and Kazakhstan. The people here are Kazakh. The culture is eagle hunters, twin lakes, glacier-fed rivers, and skies so big they feel impossible.
              </p>
              <p>
                This is the budget version: we fly you from UB to Ölgii so no driving days, stay with nomad families (not fancy hotels), eat what they eat, and cover the absolute highlights — Khoton Lake, Baga Turgen waterfall on horseback, the Potanin Glacier viewpoint, and petroglyphs older than the pyramids.
              </p>
              <p className="text-sand-400 italic">
                Everything is included — flight, food, guides, horses, permits. You bring your boots and a warm layer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAY BY DAY */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
            Day by day
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-14 text-center">
            Four days on the ground in the Altai
          </h2>

          <div className="relative">
            <div className="absolute left-4 md:left-12 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/30 via-indigo-700/20 to-transparent" />
            <div className="space-y-8 md:space-y-12">
              {days.map((day, idx) => (
                <motion.div
                  key={day.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="relative pl-14 md:pl-28"
                >
                  <div className="absolute left-0 md:left-6 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-200 font-display text-xs md:text-sm">
                    {day.n}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-sand-100 mb-3">
                    {day.title}
                  </h3>
                  <p className="text-sand-400 leading-relaxed">{day.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-center text-sand-500 text-sm mt-12 italic">
            The August departure adds 2 extra days at the lakes for deeper exploration and a second horse-ride day.
          </p>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-indigo-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
            What&apos;s included
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-10 text-center">
            Everything handled
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-center gap-3 p-4 rounded-lg bg-indigo-900/10 border border-indigo-800/20"
              >
                <span className="text-indigo-400 text-lg">✓</span>
                <span className="text-sand-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-indigo-800/30 bg-gradient-to-br from-indigo-900/25 via-night-900/60 to-night-900/80 p-8 md:p-12 backdrop-blur-sm"
          >
            <p className="text-indigo-300 text-xs tracking-[0.3em] uppercase mb-3">
              Pick your week
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-4">
              $1,200 per person
            </h2>
            <p className="text-sand-300 text-lg mb-8 max-w-xl leading-relaxed">
              Two departures in 2026 — June 11–16 or Aug 6–13. Small groups of 6–8. Flight included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-colors rounded-sm"
              >
                Reserve a Spot
              </Link>
              <a
                href="mailto:hello@tugo.mn?subject=Altai%20Tavan%20Bogd%202026"
                className="inline-flex items-center justify-center gap-2 border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors rounded-sm"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="text-sand-500 hover:text-sand-300 text-xs tracking-[0.3em] uppercase transition-colors"
            >
              ← Back to all tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
