"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CentralMongoliaSection from "@/components/tours/CentralMongoliaSection";

const HERO = "/images/tours/north-central/DSC02464-hero.jpg";

// 11 days Jul 21 → Jul 31
const itinerary = [
  { n: "01", t: "UB → Bulgan",       d: "Early drive north. First night in Huuchin ger camp in Bulgan — warm stove, tea, quiet." },
  { n: "02", t: "Bulgan → Khuvsgul", d: "Over the pass into forest country. Arrive lakeside by evening. Cold swim if you dare." },
  { n: "03", t: "Khuvsgul · shore",  d: "Slow day. Kayak, shore hikes, fish for dinner, stargaze. Sauna if the camp has one." },
  { n: "04", t: "Khuvsgul · boat",   d: "Day on the water — cliff lookouts, rocky islands, the opposite shore. Grill on the beach." },
  { n: "05", t: "Taiga · horseback", d: "Half-day ride up into the larch forest. Picnic lunch on a ridge. Easy pace." },
  { n: "06", t: "Khuvsgul → Zavkhan", d: "Drive day south-west through Mörön. Camp by a river on the way." },
  { n: "07", t: "Zavkhan",           d: "Explore the lakes and pine forests of Zavkhan. Local family dinner." },
  { n: "08", t: "Zavkhan → Khorgo",  d: "South to the dormant volcano and the pale water of Terkhiin Tsagaan Nuur." },
  { n: "09", t: "Tsenkher hot springs", d: "Soak day. A real bath after a week on the road." },
  { n: "10", t: "Central → UB",      d: "Drive back east through Orkhon Valley. One last khorkhog dinner at a family camp." },
  { n: "11", t: "Back in UB",        d: "Late-morning arrival. Showers, flight to catch, or stay a few more days in the city." },
];

// Waypoints in lon/lat-ish relative space for the simple SVG map
// Mongolia spans ~42-52°N and ~88-120°E. We'll normalize to 0-100 on a 1200x600 canvas.
// x: (lon - 87) / 33 * 100; y: (52 - lat) / 10 * 100
const waypoints = [
  { name: "Khuvsgul", lon: 100.5, lat: 51.0 },      // far north-west
  { name: "Mörön",    lon: 100.1, lat: 49.6 },
  { name: "Zavkhan",  lon:  96.4, lat: 47.8 },
  { name: "Terkh",    lon: 100.0, lat: 48.0 },      // Terkhiin Tsagaan Nuur / Khorgo
  { name: "Tsenkher", lon: 101.8, lat: 47.3 },
  { name: "Orkhon",   lon: 102.9, lat: 46.9 },
  { name: "Bulgan",   lon: 103.5, lat: 48.8 },
  { name: "UB",       lon: 106.9, lat: 47.9 },
];
// route order to draw
const routeOrder = ["UB", "Bulgan", "Khuvsgul", "Mörön", "Zavkhan", "Terkh", "Tsenkher", "Orkhon", "UB"];

function projectLon(lon) {
  return ((lon - 87) / 33) * 100;
}
function projectLat(lat) {
  return ((52 - lat) / 10) * 100;
}

function MongoliaRouteMap() {
  const wp = Object.fromEntries(waypoints.map((p) => [p.name, p]));
  const route = routeOrder.map((n) => wp[n]).filter(Boolean);
  const pathD = route
    .map((p, i) => `${i === 0 ? "M" : "L"} ${projectLon(p.lon).toFixed(2)} ${projectLat(p.lat).toFixed(2)}`)
    .join(" ");

  return (
    <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-sand-800/40 bg-night-900/60">
      <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Simplified Mongolia outline — stylized, not strictly geo-accurate */}
        <path
          d="M 3 18 Q 8 10, 25 12 Q 40 6, 55 10 Q 70 8, 82 14 Q 94 18, 96 24 Q 92 32, 80 36 Q 62 42, 45 42 Q 28 42, 15 38 Q 4 34, 3 26 Z"
          fill="currentColor"
          className="text-sand-900/40"
          stroke="currentColor"
          strokeWidth="0.25"
        />
        {/* Subtle grid */}
        <g className="text-sand-800/30" stroke="currentColor" strokeWidth="0.1">
          <line x1="0" y1="25" x2="100" y2="25" />
          <line x1="50" y1="0" x2="50" y2="50" />
        </g>

        {/* Route path — dashed */}
        <path
          d={pathD}
          fill="none"
          stroke="currentColor"
          className="text-sky-300"
          strokeWidth="0.45"
          strokeDasharray="1 1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Waypoints */}
        {waypoints.map((p) => {
          const x = projectLon(p.lon);
          const y = projectLat(p.lat);
          const isUB = p.name === "UB";
          return (
            <g key={p.name}>
              <circle
                cx={x}
                cy={y}
                r={isUB ? 1.0 : 0.65}
                fill="currentColor"
                className={isUB ? "text-sand-100" : "text-sky-300"}
              />
              <circle
                cx={x}
                cy={y}
                r={isUB ? 1.8 : 1.2}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.18"
                className={isUB ? "text-sand-100/50" : "text-sky-400/50"}
              />
              <text
                x={x}
                y={y - 1.8}
                textAnchor="middle"
                fontSize="1.8"
                fontFamily="sans-serif"
                className="fill-sand-300"
                fontWeight="500"
              >
                {p.name}
              </text>
            </g>
          );
        })}

        {/* Legend */}
        <g transform="translate(2, 46)">
          <circle cx="1" cy="0" r="0.65" className="fill-sky-300" />
          <text x="2.5" y="0.6" fontSize="1.5" className="fill-sand-400">stop</text>
          <circle cx="10" cy="0" r="1" className="fill-sand-100" />
          <text x="11.5" y="0.6" fontSize="1.5" className="fill-sand-400">start / end</text>
        </g>
      </svg>
    </div>
  );
}

export default function NorthCentralPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO — tight */}
      <section className="relative h-[72vh] min-h-[480px] overflow-hidden">
        <Image src={HERO} alt="Khuvsgul Lake at rest" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/40 via-transparent to-night-950" />
        <div className="absolute inset-0 flex items-end pb-12 md:pb-16 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-3 hover:text-sand-100 transition-colors"
              >
                ← 2026 Season
              </Link>
              <p className="text-sky-300 text-[11px] tracking-[0.3em] uppercase mb-2">
                Long North Route
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-5 max-w-2xl">
                North &amp; Central Loop
              </h1>
              <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed">
                Eleven days up to the Dark Blue Pearl and back. Lakeside camping, a day on the taiga, then the central country on the way home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VITALS — tighter strip */}
      <section className="border-y border-sand-900/30 bg-night-900/40">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm">
          {[
            { l: "Dates", v: "Jul 21 – 31, 2026" },
            { l: "Days", v: "11" },
            { l: "Group", v: "4–6" },
            { l: "Price", v: "$1,800" },
            { l: "Lodging", v: "Camp + ger" },
            { l: "Pace", v: "Slow, drive days" },
          ].map((x) => (
            <div key={x.l}>
              <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1">{x.l}</p>
              <p className="text-sand-100 font-display">{x.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP + INTRO side by side on desktop */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <p className="text-sky-400 text-[11px] tracking-[0.3em] uppercase mb-3">The route</p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-4 leading-tight">
              UB → Khuvsgul → Zavkhan → home.
            </h2>
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              Two days to climb north to the lake. Five around it. Four working our way
              back south-west through Zavkhan and the central highlights — Khorgo volcano,
              Terkhiin Tsagaan Nuur, Tsenkher hot springs, Orkhon Valley.
            </p>
            <p className="text-sand-400 text-sm leading-relaxed">
              Mostly camping and gers with the occasional hotel. Drive days are long but
              beautiful — we break them with hikes, stops at family camps, and whatever
              the day invites.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <MongoliaRouteMap />
            <p className="text-sand-600 text-[11px] text-center mt-2 italic">
              Route is approximate — the road bends where the day bends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ITINERARY — timeline */}
      <section className="py-14 md:py-20 border-t border-sand-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sky-400 text-[11px] tracking-[0.3em] uppercase mb-3 text-center">
            Itinerary
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-10 text-center leading-tight">
            Eleven days, day by day
          </h2>

          <div className="relative">
            {/* Trail */}
            <div className="absolute left-3 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/30 via-sky-700/20 to-transparent" />

            <div className="space-y-5 md:space-y-7">
              {itinerary.map((day, idx) => (
                <motion.div
                  key={day.n}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="relative pl-10 md:pl-16"
                >
                  <div className="absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-200 font-display text-[10px] md:text-xs">
                    {day.n}
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-sand-100 mb-1">
                    {day.t}
                  </h3>
                  <p className="text-sand-400 text-sm leading-relaxed">{day.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NORTH — Khuvsgul photos */}
      <section className="py-14 md:py-20 border-t border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sky-400 text-[11px] tracking-[0.3em] uppercase mb-3 text-center">
            The north leg
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-8 text-center leading-tight">
            Khuvsgul — the Dark Blue Pearl
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              "/images/tours/north-central/DSC02464.jpg",
              "/images/tours/north-central/DSC02471.jpg",
              "/images/tours/north-central/DSC02481.jpg",
              "/images/tours/north-central/DSC02514.jpg",
              "/images/gallery/DSC02424.jpg",
              "/images/gallery/DSC02459.jpg",
              "/images/gallery/DSC02462.jpg",
              "/images/tours/north-central/DSC02550.jpg",
            ].map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-lg group ${i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}`}
              >
                <Image
                  src={src}
                  alt="Khuvsgul"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTRAL — reusable component */}
      <div className="border-t border-sand-900/30">
        <CentralMongoliaSection accent="sky" compact />
      </div>

      {/* CTA */}
      <section className="border-t border-sand-900/30 py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-sky-800/30 bg-gradient-to-br from-sky-900/25 via-night-900/60 to-night-900/80 p-8 md:p-10"
          >
            <p className="text-sky-300 text-[11px] tracking-[0.3em] uppercase mb-2">Ready to go</p>
            <h2 className="font-display text-2xl md:text-3xl text-sand-100 mb-3">
              July 21 – 31, 2026 · $1,800
            </h2>
            <p className="text-sand-300 text-sm md:text-base mb-6 leading-relaxed">
              Small group of 4–6. Bring a friend and save 15% each.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-night-950 px-6 py-3 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition"
              >
                Reserve a Spot
              </Link>
              <a
                href="mailto:Tuugii7019@gmail.com?subject=North%20%26%20Central%20Loop%20%E2%80%94%20July%2021"
                className="inline-flex items-center justify-center border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-6 py-3 text-xs uppercase tracking-[0.15em] rounded-sm transition"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/tours"
              className="text-sand-500 hover:text-sand-300 text-[11px] tracking-[0.3em] uppercase transition-colors"
            >
              ← All tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
