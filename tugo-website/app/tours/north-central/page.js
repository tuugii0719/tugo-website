"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CentralMongoliaSection from "@/components/tours/CentralMongoliaSection";
import { ACT_ICONS } from "@/components/tours/kit";

const IMG = "/images/tours/north-central";
const G = "/images/gallery";

// ============================================================================
// DATA
// ============================================================================

const acts = [
  {
    n: "I",
    label: "North",
    days: "Days 1 – 5",
    title: "The Dark Blue Pearl",
    body: "Two drive days earn you three at the lake. Camp on the shore, ride into the larch taiga, take a boat to the opposite cliffs, fall asleep to water.",
    image: `${IMG}/DSC02464.jpg`,
    accent: "sky",
  },
  {
    n: "II",
    label: "West",
    days: "Days 6 – 8",
    title: "Into Zavkhan",
    body: "Sand dunes pressed against larch forest, turquoise lakes, the Otgontenger massif in the distance. A full day on horseback into the larch hills above Khar Nuur — Zavkhan the way it should be moved through.",
    image: `${G}/DSC02431.jpg`,
    accent: "violet",
  },
  {
    n: "III",
    label: "Central",
    days: "Days 9 – 12",
    title: "Volcano, hot spring, home",
    body: "Khorgo's crater rim, the pale water of Terkh, a long soak at Tsenkher, the Orkhon waterfall, and Erdene Zuu — one last khorkhog before the drive home.",
    image: `${G}/DSC01684.jpg`,
    accent: "rose",
  },
];

const itinerary = [
  {
    n: "01", act: 0,
    t: "UB → Bulgan",
    stops: ["Ulaanbaatar", "Mörön highway", "Huuchin ger camp"],
    acts: ["drive", "ger", "meal"],
    d: "Early drive north, ~330 km on paved road. First night in Huuchin ger camp — warm stove, tea, quiet.",
    more: "We leave UB around 8am to catch good light on the central steppe. Paved road all the way to Bulgan — long but smooth. By late afternoon we settle into the family ger at Huuchin: hot stove, milk tea, slow dinner. Early to bed; tomorrow is the long one.",
  },
  {
    n: "02", act: 0,
    t: "Bulgan → Khuvsgul",
    stops: ["Bulgan", "Mörön", "Khuvsgul east shore"],
    acts: ["drive", "camp", "water"],
    d: "Through Mörön and up to the lake shore, ~470 km in two long stints. Arrive by evening. Cold swim if you dare.",
    more: "Big driving day. We break in Mörön for fuel and hot soup, then push north into the Khuvsgul valley. First sight of the lake from the eastern ridge is one of those views that doesn't translate to a photo. We camp right at the water. The brave swim; the wise watch.",
  },
  {
    n: "03", act: 0,
    t: "Khuvsgul · shore day",
    stops: ["Khuvsgul east shore", "Larch forest edge"],
    acts: ["water", "hike", "fish", "star"],
    d: "Slow day. Kayak, shore hikes, fish for dinner, stargaze. Sauna if the camp has one.",
    more: "Nothing scheduled. You wake when you wake. Kayaks are free for the morning; hike to one of the small waterfalls or just sit on the rocks. Some camps have a Russian-style banya we can fire up. Dinner is whatever we caught.",
  },
  {
    n: "04", act: 0,
    t: "Khuvsgul · boat day",
    stops: ["Khuvsgul shore", "Cliff lookouts", "Far-shore beach"],
    acts: ["water", "meal"],
    d: "On the water — cliff lookouts, rocky islands, the opposite shore. Grill on a beach.",
    more: "Local boatman takes us out for the full lake. We stop at the cliffs on the east side, motor across to the far shore, pull up on an empty beach for a grill lunch. Back by late afternoon, fire pit by sundown.",
  },
  {
    n: "05", act: 0,
    t: "Taiga · horseback",
    stops: ["Larch taiga", "Ridge picnic spot", "Khuvsgul ger camp"],
    acts: ["horse", "hike", "meal"],
    d: "Half-day ride up into the larch forest with a local horse family. Picnic lunch on a ridge. Easy pace.",
    more: "Horses, not snowmobiles. The family that runs the trek has been there since the lake was a Soviet outpost — they read the weather by the trees. Easy pace, no riding experience needed. We picnic on a ridge with the whole lake at our feet, then back down by mid-afternoon.",
  },
  {
    n: "06", act: 1,
    t: "Khuvsgul → Tosontsengel",
    stops: ["Khuvsgul south", "Tosontsengel pass", "River camp"],
    acts: ["drive", "camp"],
    d: "The hard day — ~450 km south-west, much of it off-road. We stop often. Camp by a river on the way.",
    more: "This is the leg that earns you Zavkhan. Most of it is unpaved — we move with the country, not against it. Stops for tea, for views, for the herders who flag us down. By nightfall we're set up by a river, fire going, dinner from the cooler.",
  },
  {
    n: "07", act: 1,
    t: "Zavkhan · lakes & dunes",
    stops: ["Khar Nuur", "Sand dunes", "Herder family ger"],
    acts: ["hike", "ger", "meal"],
    d: "Explore the lakes and dunes. Visit a herder family, taste fresh aaruul, dinner around a fire.",
    more: "Zavkhan is Mongolia's strangest, most beautiful province — sand dunes pressed against larch forest, turquoise lakes that shouldn't exist there. We move slowly between them, visit a herder family in the afternoon (fresh aaruul, milk vodka if you want it), and end with fire and stew.",
  },
  {
    n: "08", act: 1,
    t: "Zavkhan · horse-trek day",
    stops: ["Khar Nuur foothills", "Larch ridge", "Herder camp"],
    acts: ["horse", "hike", "meal"],
    d: "Full day on horseback into the larch hills above Khar Nuur. Picnic lunch on a ridge, slow ride back to the family camp. Fire and stew that night.",
    more: "Horses, not 4×4s. We meet the family that runs the trek at first light, pick our mounts — patient, sure-footed ones for whoever's never ridden — and head up into the larch hills above the lake. The pace is easy, the views are not. Picnic lunch on a ridge with Khar Nuur laid out below, ride back through the afternoon shadows. Another night in the herder ger; horsemeat stew if the family makes it, otherwise lamb.",
  },
  {
    n: "09", act: 2,
    t: "Zavkhan → Khorgo",
    stops: ["Tosontsengel", "Terkhiin Tsagaan Nuur", "Khorgo crater"],
    acts: ["drive", "peak", "hike", "camp"],
    d: "~240 km east to Terkhiin Tsagaan Nuur, the lava-dammed \"White Lake\". Walk the crater rim at sunset.",
    more: "We swap one weird landscape for another. Khorgo is a dormant volcano whose lava once dammed a river to create Terkhiin Tsagaan Nuur — a lake nobody expected, sitting in basalt. Crater rim walk at sunset, then camp by the lake.",
  },
  {
    n: "10", act: 2,
    t: "Tsetserleg → Tsenkher springs",
    stops: ["Terkhiin", "Tsetserleg", "Tsenkher", "Pool camp"],
    acts: ["drive", "hotspring", "star"],
    d: "South toward the springs, passing through Tsetserleg — Arkhangai's leafy capital and home of ARA Fest. If the festival has a show on, we stop in. Tonight: Tsenkher, 86 °C water in wooden pools under the stars.",
    more: "We come down through Tsetserleg, where the ARA Complex runs a summer of concerts, shows, and sport. If the timing lines up we catch an evening of it on the way through — a bonus, not a fixed stop. Then Tsenkher: 86°C at the source, piped into wooden tubs at varying temperatures. You soak, you read, you soak again, and the stars do the rest.",
  },
  {
    n: "11", act: 2,
    t: "Orkhon Valley",
    stops: ["Tsenkher", "Orkhon waterfall", "Family camp"],
    acts: ["drive", "water", "meal", "ger"],
    d: "Drop into the Orkhon gorge to the waterfall. Family camp for the night; khorkhog on the fire.",
    more: "The Orkhon is the river that birthed the Mongol empire — the valley is heavy with that history. We hike down to the waterfall in the late morning, hang around for swims and photos, then spend the night with a family I've known for years. Khorkhog (sealed-pot lamb cooked on hot stones) is on the menu.",
  },
  {
    n: "12", act: 2,
    t: "Karakorum → UB",
    stops: ["Orkhon", "Karakorum", "Erdene Zuu", "Ulaanbaatar"],
    acts: ["visit", "drive", "city"],
    d: "Erdene Zuu Monastery in the morning, then ~380 km back to the city. Late-afternoon arrival.",
    more: "Erdene Zuu is the oldest surviving Buddhist monastery in Mongolia — 16th century, built from the stones of the old Mongol capital. Slow morning walk through the courtyards, then we point east. Back in UB by late afternoon. Group dinner that night if you're up for it.",
  },
];

// Drive legs for the data strip
const legs = [
  ["UB", "Bulgan", "330", "6"],
  ["Bulgan", "Mörön", "370", "7"],
  ["Mörön", "Khuvsgul", "100", "2.5"],
  ["Khuvsgul", "Tosontsengel", "450", "9–10"],
  ["Tosontsengel", "Terkhiin", "240", "5–6"],
  ["Terkhiin", "Tsenkher", "180", "4–5"],
  ["Tsenkher", "Orkhon", "140", "3–4"],
  ["Orkhon", "Karakorum", "70", "1.5"],
  ["Karakorum", "UB", "380", "6"],
];

const included = [
  "4×4 vehicle, fuel, and driver",
  "English/Mongolian guide (Tugi)",
  "All meals on the road",
  "Family ger stays, tents, hot-spring camp",
  "Park and site entrance fees",
  "Camping gear (tent, mat, stove)",
  "UB airport pickup & drop-off",
];

const bring = [
  "Sleeping bag rated to 0 °C",
  "Hiking boots + quick-dry layers",
  "Warm outer shell (nights drop to 5 °C)",
  "Swimsuit (hot springs + lake)",
  "Headlamp, sunhat, sunscreen, bug repellent",
  "A 40 L duffel (no hard suitcases)",
  "Cash — USD/EUR exchangeable in UB",
];

const faq = [
  {
    q: "How physical is this tour?",
    a: "Moderate. The hard part is the drive days (6–9 hours, bumpy once off tarmac). Walks are optional and rarely over 2 hours. One easy half-day horse ride. No altitude above 2,000 m.",
  },
  {
    q: "What's the weather like in late July?",
    a: "Days 10 – 26 °C, nights 5 – 12 °C. North is the coldest, Zavkhan the windiest, central Mongolia can throw afternoon thunderstorms. Pack layers, not bulk.",
  },
  {
    q: "Do we catch the ARA Festival?",
    a: "Maybe — and it's a bonus, not a fixed stop. Near the end we pass through Tsetserleg in Arkhangai, where ARA Fest runs concerts, shows, and sport across July. If our dates line up with something good, we stop in for an evening. The route bends to what's on.",
  },
  {
    q: "How reliable is mobile signal?",
    a: "Ulaanbaatar and the provincial towns (Mörön, Tsetserleg) are excellent. Outside of those, expect patchy 4G for 1–2 hours a day and 2–3 fully off-grid days around Khuvsgul and Zavkhan.",
  },
  {
    q: "Can I join as a solo traveller?",
    a: "Yes — solo travellers share a ger (usually 2-per-ger, same-gender unless you request otherwise). No single supplement in 2026.",
  },
  {
    q: "What about dietary needs?",
    a: "Vegetarian and pescatarian work with advance notice. Strict vegan is hard in the countryside but we'll make it work. Tell me when you apply.",
  },
];

// ============================================================================
// MAP
// ============================================================================

const waypoints = [
  { name: "Khuvsgul",    lon: 100.5, lat: 51.0 },
  { name: "Mörön",       lon: 100.1, lat: 49.6 },
  { name: "Tosontsengel",lon:  98.3, lat: 48.8 },
  { name: "Zavkhan",     lon:  96.4, lat: 47.8 },
  { name: "Terkh",       lon: 100.0, lat: 48.0 },
  { name: "Tsenkher",    lon: 101.8, lat: 47.3 },
  { name: "Orkhon",      lon: 102.9, lat: 46.9 },
  { name: "Bulgan",      lon: 103.5, lat: 48.8 },
  { name: "UB",          lon: 106.9, lat: 47.9 },
];
const routeOrder = ["UB", "Bulgan", "Mörön", "Khuvsgul", "Tosontsengel", "Zavkhan", "Terkh", "Tsenkher", "Orkhon", "UB"];

// Project lon/lat into the stylised map's viewBox (100 wide × 50 tall),
// aligned to the hand-drawn country outline: lon 87–120 → x 3–96,
// lat 41.5–52 → y 6–42. (Previously lat was scaled ×100 into a 50-tall box,
// which pushed the southern stops below the country shape and off-canvas.)
const projectLon = (lon) => ((lon - 87) / 33) * 93 + 3;
const projectLat = (lat) => ((52 - lat) / 10.5) * 36 + 6;

function MongoliaRouteMap() {
  const wp = Object.fromEntries(waypoints.map((p) => [p.name, p]));
  const route = routeOrder.map((n) => wp[n]).filter(Boolean);
  const pathD = route
    .map((p, i) => `${i === 0 ? "M" : "L"} ${projectLon(p.lon).toFixed(2)} ${projectLat(p.lat).toFixed(2)}`)
    .join(" ");

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-sand-800/40 bg-night-900/60">
      <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <path
          d="M 3 18 Q 8 10, 25 12 Q 40 6, 55 10 Q 70 8, 82 14 Q 94 18, 96 24 Q 92 32, 80 36 Q 62 42, 45 42 Q 28 42, 15 38 Q 4 34, 3 26 Z"
          fill="currentColor"
          className="text-sand-900/40"
          stroke="currentColor"
          strokeWidth="0.25"
        />
        <g className="text-sand-800/30" stroke="currentColor" strokeWidth="0.1">
          <line x1="0" y1="25" x2="100" y2="25" />
          <line x1="50" y1="0" x2="50" y2="50" />
        </g>

        {/* Animated route path — draws in on load */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="currentColor"
          className="text-sky-300"
          strokeWidth="0.45"
          strokeDasharray="1 1"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {waypoints.map((p) => {
          const x = projectLon(p.lon);
          const y = projectLat(p.lat);
          const isUB = p.name === "UB";
          return (
            <g key={p.name}>
              <circle cx={x} cy={y} r={isUB ? 1.0 : 0.65} fill="currentColor" className={isUB ? "text-sand-100" : "text-sky-300"} />
              <circle cx={x} cy={y} r={isUB ? 1.8 : 1.2} fill="none" stroke="currentColor" strokeWidth="0.18" className={isUB ? "text-sand-100/50" : "text-sky-400/50"} />
              <text x={x} y={y - 1.8} textAnchor="middle" fontSize="1.8" fontFamily="sans-serif" className="fill-sand-300" fontWeight="500">{p.name}</text>
            </g>
          );
        })}

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

// ============================================================================
// REUSABLE BITS
// ============================================================================

function Kicker({ children, className = "text-sky-400" }) {
  return (
    <p className={`${className} text-[11px] tracking-[0.3em] uppercase mb-3`}>
      {children}
    </p>
  );
}

function SectionHead({ kicker, title, center = false, accent = "text-sky-400" }) {
  return (
    <div className={center ? "text-center mb-10 md:mb-14" : "mb-8 md:mb-12"}>
      {kicker && <Kicker className={accent}>{kicker}</Kicker>}
      <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
        {title}
      </h2>
    </div>
  );
}

function Signature() {
  // A handwritten-style SVG signature, one of the signature crafted touches
  return (
    <svg viewBox="0 0 180 50" className="h-10 w-auto text-sand-300" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* T */}
      <path d="M 6 12 L 22 12 M 14 12 L 14 36" />
      {/* u */}
      <path d="M 28 20 C 28 34, 38 36, 40 24 M 40 20 L 40 36" />
      {/* g */}
      <path d="M 56 20 C 46 20, 46 32, 54 32 C 60 32, 60 20, 56 20 M 60 20 L 60 40 C 60 46, 50 46, 48 42" />
      {/* i */}
      <path d="M 68 20 L 68 36 M 68 14 L 68 15" />
      {/* dot swash */}
      <path d="M 78 34 Q 100 8, 150 28 Q 165 32, 174 22" opacity="0.6" />
    </svg>
  );
}

// ============================================================================
// PAGE
// ============================================================================

export default function NorthCentralPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">

      {/* =========================================================== */}
      {/* HERO                                                         */}
      {/* =========================================================== */}
      <section className="relative h-[86vh] min-h-[580px] overflow-hidden">
        <Image
          src={`${IMG}/DSC02464-hero.jpg`}
          alt="Khuvsgul Lake at rest"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-night-950" />

        <div className="absolute inset-0 flex items-end pb-14 md:pb-20 px-6">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-5 hover:text-sand-100 transition-colors"
              >
                ← 2026 Season
              </Link>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <p className="text-sky-300 text-[11px] tracking-[0.3em] uppercase">
                  Long North Route
                </p>
                <span className="text-sand-700">·</span>
                <p className="text-sand-400 text-[11px] tracking-[0.3em] uppercase">
                  12 days
                </p>
                <span className="text-sand-700">·</span>
                <p className="text-sand-400 text-[11px] tracking-[0.3em] uppercase">
                  Jul 21 – Aug 1, 2026
                </p>
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6 max-w-3xl">
                North &amp; Central
                <br />
                Loop
              </h1>
              <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed">
                Twelve days up to the Dark Blue Pearl and back. Lakeside camping, a day on the taiga, a full horse-trek day in Zavkhan, then the central country on the way home.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 6, 0] }}
          transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2.5 } }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-500 text-xs tracking-[0.3em] uppercase"
        >
          Scroll ↓
        </motion.div>
      </section>

      {/* =========================================================== */}
      {/* VITALS STRIP                                                 */}
      {/* =========================================================== */}
      <section className="border-y border-sand-900/30 bg-night-900/40">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-sm">
          {[
            { l: "Dates", v: "Jul 21 – Aug 1, 2026" },
            { l: "Days", v: "12" },
            { l: "Group", v: "5–7" },
            { l: "Price", v: "$1,080" },
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

      {/* =========================================================== */}
      {/* PROLOGUE · letter from Tugi                                  */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <Kicker>A letter from Tugi</Kicker>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight mb-8">
              The driving is the trip.
            </h2>
            <div className="space-y-5 text-sand-300 text-lg leading-relaxed">
              <p>
                I grew up with Khuvsgul a day&apos;s drive from my family&apos;s ger. I want to show you the version of the lake I know — slow mornings, no rush to the next thing, a little time for the light to do what it does.
              </p>
              <p>
                People come in thinking the long drive days will be the hard part. They&apos;re actually the best part. The country changes texture hour by hour — steppe to larch forest to basalt to dune — and that only lands from the passenger seat. We stop for marmots. For herders moving livestock. For a roadside canteen with the best khuushuur you&apos;ll eat. For the ovoo on a pass where you circle three times and add a stone.
              </p>
              <p>
                Twelve days is enough to hit the places that matter. Short enough to keep the group tight and the energy up, long enough that a morning at the lake can go three hours without anyone watching the clock. Ride the wind of the day — that&apos;s the whole idea.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <Signature />
              <span className="text-sand-500 text-sm italic">— Tugi</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* ROUTE AT A GLANCE                                            */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The route" title="UB → Khuvsgul → Zavkhan → home." center />

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <MongoliaRouteMap />
              <p className="text-sand-600 text-[11px] text-center mt-3 italic">
                Approximate. The road bends where the day bends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2"
            >
              <p className="text-sand-300 text-lg leading-relaxed mb-6">
                One loop. A hard push north to the lake, five days around it, then a slow working back through Zavkhan and the central highlights.
              </p>

              {/* Drive distances */}
              <div className="rounded-xl border border-sand-800/40 bg-night-900/40 divide-y divide-sand-900/40 text-sm">
                <div className="px-4 py-2 flex justify-between items-center text-sand-500 text-[10px] tracking-[0.2em] uppercase">
                  <span>Leg</span>
                  <span className="flex gap-6"><span>km</span><span>hrs</span></span>
                </div>
                {legs.map(([from, to, km, hr]) => (
                  <div key={`${from}-${to}`} className="px-4 py-2 flex justify-between items-center">
                    <span className="text-sand-300">
                      {from} <span className="text-sand-600">→</span> {to}
                    </span>
                    <span className="flex gap-6 tabular-nums text-sand-400">
                      <span className="w-10 text-right">{km}</span>
                      <span className="w-10 text-right">{hr}</span>
                    </span>
                  </div>
                ))}
                <div className="px-4 py-2 flex justify-between items-center text-sand-500 text-[11px] bg-night-950/40">
                  <span className="uppercase tracking-[0.15em]">Total</span>
                  <span className="flex gap-6 tabular-nums">
                    <span className="w-10 text-right">2,260</span>
                    <span className="w-10 text-right">~45</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* THREE ACTS                                                   */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30 bg-night-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="How the trip breaks down" title="Three acts." center />

          <div className="grid md:grid-cols-3 gap-5">
            {acts.map((act, idx) => {
              const accentRing = {
                sky: "ring-sky-400/40",
                violet: "ring-violet-400/40",
                rose: "ring-rose-400/40",
              }[act.accent];
              const accentText = {
                sky: "text-sky-300",
                violet: "text-violet-300",
                rose: "text-rose-300",
              }[act.accent];
              return (
                <motion.div
                  key={act.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative rounded-2xl overflow-hidden border border-sand-800/40 bg-night-900/60 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={act.image} alt={act.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-3">
                      <span className={`w-10 h-10 rounded-full bg-night-950/70 ring-1 ${accentRing} flex items-center justify-center font-display text-lg ${accentText}`}>
                        {act.n}
                      </span>
                      <span className={`${accentText} text-[11px] tracking-[0.25em] uppercase`}>
                        {act.label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sand-300 text-[11px] tracking-[0.2em] uppercase">{act.days}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="font-display text-2xl text-sand-100 mb-3">{act.title}</h3>
                    <p className="text-sand-400 text-sm leading-relaxed">{act.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* ITINERARY — grouped by act                                    */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHead kicker="Day by day" title="Twelve days, one loop." center />

          <div className="relative">
            <div className="absolute left-3 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/30 via-violet-500/20 to-rose-500/20" />

            <div className="space-y-5 md:space-y-7">
              {itinerary.map((day, idx) => {
                const act = acts[day.act];
                const nodeColor = {
                  sky: "bg-sky-500/20 border-sky-400/40 text-sky-200",
                  violet: "bg-violet-500/20 border-violet-400/40 text-violet-200",
                  rose: "bg-rose-500/20 border-rose-400/40 text-rose-200",
                }[act.accent];
                const showActHead = idx === 0 || itinerary[idx - 1].act !== day.act;
                return (
                  <div key={day.n}>
                    {showActHead && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className={`ml-10 md:ml-16 mb-2 mt-${idx === 0 ? "0" : "6"}`}
                      >
                        <p className={`text-[10px] tracking-[0.3em] uppercase ${
                          { sky: "text-sky-300", violet: "text-violet-300", rose: "text-rose-300" }[act.accent]
                        }`}>
                          Act {act.n} · {act.label}
                        </p>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: idx * 0.02 }}
                      className="relative pl-10 md:pl-16"
                    >
                      <div className={`absolute left-0 md:left-2 top-0 w-6 h-6 md:w-8 md:h-8 rounded-full border flex items-center justify-center font-display text-[10px] md:text-xs ${nodeColor}`}>
                        {day.n}
                      </div>
                      <h3 className="font-display text-lg md:text-xl text-sand-100 mb-1.5">{day.t}</h3>

                      {Array.isArray(day.stops) && day.stops.length > 0 && (
                        <p className="text-sand-500 text-[11px] md:text-xs mb-1.5 flex items-baseline gap-1.5 flex-wrap leading-relaxed">
                          <span className="text-sand-600">📍</span>
                          {day.stops.map((s, i) => (
                            <span key={i} className="inline">
                              {s}
                              {i < day.stops.length - 1 && <span className="text-sand-700 mx-1">·</span>}
                            </span>
                          ))}
                        </p>
                      )}

                      {Array.isArray(day.acts) && day.acts.length > 0 && (
                        <p className="flex items-center gap-2 mb-2 text-base">
                          {day.acts.map((tok) => {
                            const a = ACT_ICONS[tok];
                            if (!a) return null;
                            return (
                              <span
                                key={tok}
                                title={a.l}
                                aria-label={a.l}
                                className="leading-none opacity-90"
                              >
                                {a.i}
                              </span>
                            );
                          })}
                        </p>
                      )}

                      <p className="text-sand-400 text-base leading-relaxed">{day.d}</p>

                      {day.more && (
                        <details className="group/details mt-3">
                          <summary className="cursor-pointer list-none inline-flex items-center gap-1 text-sand-500 text-[10px] md:text-[11px] tracking-[0.2em] uppercase hover:text-sand-200 transition-colors select-none">
                            <span className="group-open/details:hidden">More details</span>
                            <span className="hidden group-open/details:inline">Show less</span>
                            <span className="text-[8px] transition-transform group-open/details:rotate-180">▾</span>
                          </summary>
                          <p className="text-sand-400 text-sm md:text-[15px] leading-relaxed mt-3 pl-3 border-l border-sand-800/40">
                            {day.more}
                          </p>
                        </details>
                      )}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* PHOTO ESSAY · Khuvsgul                                       */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The north leg" title="The Dark Blue Pearl." center />

          <div className="space-y-6 md:space-y-8">
            {/* Big landscape */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${IMG}/DSC02464-hero.jpg`} alt="Khuvsgul wide view" fill className="object-cover" sizes="100vw" />
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto py-10 md:py-14 border-l-2 border-sky-400/50 pl-6 md:pl-8"
            >
              <p className="font-display text-2xl md:text-3xl text-sand-100 italic leading-snug">
                &ldquo;The water is clear enough that you can see the shadow of your boat on the bottom, twenty meters down.&rdquo;
              </p>
              <footer className="mt-4 text-sand-500 text-sm">Something I tell every first-timer.</footer>
            </motion.blockquote>

            {/* Diptych */}
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              {[
                { src: `${IMG}/DSC02471.jpg`, alt: "Boat on Khuvsgul" },
                { src: `${IMG}/DSC02481.jpg`, alt: "Rocky lookout from the boat" },
              ].map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </motion.div>
              ))}
            </div>

            {/* Secondary strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 pt-2">
              {[
                `${IMG}/DSC02514.jpg`,
                `${G}/DSC02424.jpg`,
                `${G}/DSC02459.jpg`,
                `${IMG}/DSC02550.jpg`,
              ].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* CENTRAL — reusable                                           */}
      {/* =========================================================== */}
      <div className="border-b border-sand-900/30">
        <CentralMongoliaSection accent="sky" compact />
      </div>

      {/* =========================================================== */}
      {/* FOOD & HOSTS + GER ETIQUETTE                                 */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="Food & hosts" title="The parts you&rsquo;ll remember most." center />

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-3 md:space-y-4"
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image src={`${G}/DSC01820.jpg`} alt="Khorkhog — hot-stone lamb prep" fill className="object-cover" sizes="50vw" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  <Image src={`${G}/DSC01810.jpg`} alt="Family ger camp dinner" fill className="object-cover" sizes="50vw" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <p className="text-sand-300 text-lg leading-relaxed mb-5">
                Most nights we&apos;re guests of a family we already know. Dinner is whatever the steppe gives that day — <em>khorkhog</em> (lamb and vegetables seared in their own juices with hot river stones), handmade <em>buuz</em>, fresh <em>aaruul</em> from the racks, milk tea that keeps coming.
              </p>
              <p className="text-sand-400 text-base leading-relaxed">
                The food is part of it, but the evening is bigger. Card games, a little throat-singing if the grandfather&apos;s in the mood, kids showing you their horse. By day three you&apos;re not a guest anymore.
              </p>

              {/* Ger etiquette */}
              <div className="mt-8 rounded-xl border border-sand-800/40 bg-night-900/40 p-5">
                <p className="text-sand-500 text-[10px] tracking-[0.25em] uppercase mb-3">Your first ger visit</p>
                <ul className="space-y-2 text-sand-300 text-sm leading-relaxed">
                  {[
                    "Enter right foot first, move clockwise inside.",
                    "Never touch the two central columns — they hold the sky up.",
                    "Receive food and drink with the right hand.",
                    "Don't step on the threshold; don't whistle indoors.",
                    "Accept the bowl of milk tea — a sip is enough.",
                  ].map((rule) => (
                    <li key={rule} className="flex gap-2">
                      <span className="text-sand-600">·</span><span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* WHAT'S INCLUDED / BRING                                      */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead kicker="Practicals" title="What&rsquo;s included, what to bring." center />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-sky-800/30 bg-sky-900/10 p-6 md:p-8">
              <h3 className="font-display text-xl text-sand-100 mb-5 flex items-center gap-2">
                <span className="text-sky-400">✓</span>
                Included in $1,080
              </h3>
              <ul className="space-y-3 text-sand-300 text-sm leading-relaxed">
                {included.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-sky-400 mt-0.5">·</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-sand-800/40 bg-night-900/40 p-6 md:p-8">
              <h3 className="font-display text-xl text-sand-100 mb-5 flex items-center gap-2">
                <span className="text-sand-400">◇</span>
                You bring
              </h3>
              <ul className="space-y-3 text-sand-300 text-sm leading-relaxed">
                {bring.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-sand-500 mt-0.5">·</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 border-t border-sand-800/40 text-sand-500 text-xs italic">
                A full packing list goes out once you&apos;re confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* FAQ                                                          */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHead kicker="Before you apply" title="Answers to the usual questions." center />

          <div className="space-y-2">
            {faq.map((f) => (
              <details
                key={f.q}
                className="group border border-sand-800/40 rounded-xl bg-night-900/30 open:bg-night-900/50 transition-colors"
              >
                <summary className="cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none">
                  <span>{f.q}</span>
                  <span className="text-sand-600 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-sand-400 text-base leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================== */}
      {/* CTA                                                          */}
      {/* =========================================================== */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-sky-800/30 bg-gradient-to-br from-sky-900/25 via-night-900/60 to-night-900/80 p-8 md:p-12"
          >
            <Kicker>Come with me</Kicker>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-4">
              July 21 – Aug 1, 2026 · $1,080
            </h2>
            <p className="text-sand-300 text-lg mb-8 max-w-xl leading-relaxed">
              Small group of 4 – 6. Bring a friend and save 15% each. Application, not checkout — I read every one personally and reply within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-400 text-night-950 px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition"
              >
                Reserve a Spot
              </Link>
              <a
                href="mailto:tuklobin@gmail.com?subject=North%20%26%20Central%20Loop%20%E2%80%94%20July%2021"
                className="inline-flex items-center justify-center border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-7 py-3.5 text-xs uppercase tracking-[0.15em] rounded-sm transition"
              >
                Ask a question
              </a>
            </div>
          </motion.div>

          <div className="mt-10 text-center">
            <Link href="/tours" className="text-sand-500 hover:text-sand-300 text-[11px] tracking-[0.3em] uppercase transition-colors">
              ← All tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
