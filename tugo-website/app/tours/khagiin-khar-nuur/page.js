"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const days = [
  {
    n: "01",
    title: "Terelj National Park",
    body:
      "Leave Ulaanbaatar in the morning and drive to Gorkhi-Terelj National Park. Turtle Rock, a visit to Aryabal Meditation Temple (the staircase shaped like an elephant's trunk), crossing the Terelj River. Night in a traditional family ger.",
  },
  {
    n: "02",
    title: "Heading to Khagiin Khar Lake",
    body:
      "Pack the kitchen and bags onto the horses. Ride out across Khavirga Pass and into the quiet taiga. A long day in the saddle — tents set up for the night under the stars.",
  },
  {
    n: "03",
    title: "Arriving at Khagiin Khar Lake",
    body:
      "By late afternoon we reach Khagiin Khar Lake — the Pearl of the Taiga, at the southern edge of the Siberian forest. Camp by the lake with the mountains all around. If the conditions are right, we gallop a little along the shore.",
  },
  {
    n: "04",
    title: "Return ride to Khavirga Pass camp",
    body:
      "Back along the same trail through the taiga. Reach the area below Khavirga Pass in the afternoon and set up tents. Campfire, stories, and quiet wilderness after a long day of riding.",
  },
  {
    n: "05",
    title: "Last day of riding",
    body:
      "Pack up and ride back to the family camp. Night in gers again, cooking traditional dishes with the local women — a warm evening and a taste of everyday nomad life.",
  },
  {
    n: "06",
    title: "Chinggis Khaan Statue & Ulaanbaatar",
    body:
      "Drive back to the city. A stop at the iconic Chinggis Khaan Equestrian Statue on the way. Arrive in UB in the late afternoon.",
  },
];

const vitals = [
  { label: "Dates", value: "June 25 – 30, 2026" },
  { label: "Duration", value: "6 days" },
  { label: "Group size", value: "6–8" },
  { label: "Region", value: "Khan Khentii" },
  { label: "Start / end", value: "Ulaanbaatar" },
  { label: "Price", value: "$1,200" },
];

export default function KhagiinKharNuurPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="relative min-h-[50vh] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-900/20 via-night-950 to-night-950" />

        {/* Decorative SVG of trail + mountains */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-40 text-lime-500/10"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
        >
          <path d="M0 160 L 100 80 L 200 110 L 330 40 L 450 90 L 580 30 L 700 80 L 850 50 L 1000 100 L 1200 60 L 1200 160 Z" fill="currentColor" />
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
            <p className="text-lime-300 text-xs tracking-[0.3em] uppercase mb-3">
              Taiga Horse Trek
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-5 leading-[0.95]">
              Horse Trek to
              <br />
              Khagiin Khar Nuur
            </h1>
            <p className="text-sand-300 text-lg md:text-xl max-w-2xl leading-relaxed">
              Six days on horseback into the Khan Khentii taiga — two days riding in, a night camped on the Pearl of the Taiga, two days riding out, and the Chinggis statue on the drive home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VITALS */}
      <section className="border-y border-sand-900/30 bg-night-900/40 backdrop-blur-sm">
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
            <p className="text-lime-400 text-xs tracking-[0.3em] uppercase mb-4">
              The vibe
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-6 leading-tight">
              A lake only the horses know how to reach.
            </h2>
            <div className="space-y-5 text-sand-300 text-lg leading-relaxed">
              <p>
                Khagiin Khar Nuur — the <em>Pearl of the Taiga</em> — sits at the southern edge of the Siberian forest, deep inside the Khan Khentii strict protected area. There&apos;s no road in. The only way is on horseback, and that&apos;s the point.
              </p>
              <p>
                You&apos;ll spend the first night in a family ger, meet the horses, learn the basics. Then two days in the saddle through birch and larch, over Khavirga Pass, down to the lake. One morning waking up on the shore with the mountains all around. Ride back out the same way. Finish in a ger camp cooking khuushuur with the host family before driving home past Chinggis.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DAY BY DAY */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-lime-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
            Day by day
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-14 text-center">
            Six days in the saddle
          </h2>

          <div className="relative">
            {/* Vertical trail */}
            <div className="absolute left-4 md:left-12 top-4 bottom-4 w-px bg-gradient-to-b from-lime-500/30 via-lime-700/20 to-transparent" />

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
                  {/* Node */}
                  <div className="absolute left-0 md:left-6 top-1 w-8 h-8 md:w-12 md:h-12 rounded-full bg-lime-500/20 border border-lime-400/40 flex items-center justify-center text-lime-200 font-display text-xs md:text-sm">
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
            className="relative overflow-hidden rounded-3xl border border-lime-800/30 bg-gradient-to-br from-lime-900/25 via-night-900/60 to-night-900/80 p-8 md:p-12 backdrop-blur-sm"
          >
            <p className="text-lime-300 text-xs tracking-[0.3em] uppercase mb-3">
              Saddle up
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-4">
              June 25 – 30, 2026  ·  $1,200
            </h2>
            <p className="text-sand-300 text-lg mb-8 max-w-xl leading-relaxed">
              Small group (6–8), starting and ending in Ulaanbaatar. Limited horses — reserve early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-night-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-colors rounded-sm"
              >
                Reserve a Spot
              </Link>
              <a
                href="mailto:hello@tugo.mn?subject=Khagiin%20Khar%20Nuur%20horse%20trek%20—%20June%2025"
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
