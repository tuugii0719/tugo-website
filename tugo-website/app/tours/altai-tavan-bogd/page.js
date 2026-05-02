"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA, Departures,
  SectionHead, PullQuote,
} from "@/components/tours/kit";

const G = "/images/gallery";
const D = "/images/destinations";

const ACCENT = "indigo";

function PeaksBackground() {
  return (
    <svg className="absolute bottom-0 left-0 right-0 w-full h-48 text-indigo-500/10" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 200 L 80 120 L 160 60 L 260 140 L 360 40 L 460 110 L 580 20 L 680 100 L 800 60 L 920 140 L 1040 70 L 1200 130 L 1200 200 Z" fill="currentColor" />
      <path d="M340 60 L 360 40 L 380 65" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M560 38 L 580 20 L 600 42" stroke="white" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  );
}

export default function AltaiTavanBogdPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO — full-bleed peaks photo with frosted glass card */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={`${D}/altai-peaks.jpg`} alt="Tavan Bogd peaks and glaciers" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/85 via-night-950/70 to-slate-900/60" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-indigo-300 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-indigo-300 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Mongolia&apos;s remote west · Five Holy Peaks
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Altai</span>
                  <span className="block bg-gradient-to-r from-indigo-300 via-blue-200 to-slate-100 bg-clip-text text-transparent italic">
                    Tavan Bogd
                  </span>
                </h1>
                <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Glaciers, twin alpine lakes, Kazakh eagle hunters, 4,000-year-old petroglyphs. Flight in from UB, everything handled. The most remote tour I run — and the one most travellers come back for.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Duration", v: "6 days" },
                    { l: "Departures", v: "2 / season" },
                    { l: "Flight", v: "Included" },
                    { l: "Price", v: "$1,400" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/60 backdrop-blur-md border border-indigo-300/30">
                      <span className="text-indigo-200 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-sand-100 text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(99,102,241,0.6)]">
                    Reserve a Spot
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                  <Image src={`${D}/altai-plateau.jpg`} alt="Altai plateau and snow peaks" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Tavan Bogd massif</p>
                    <p className="font-display text-lg leading-tight">View from the Ukok Plateau</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Duration", v: "6 days" },
          { l: "Departures", v: "2 in 2026" },
          { l: "Group", v: "6 – 8" },
          { l: "Region", v: "Western Mongolia" },
          { l: "Price", v: "$1,400" },
          { l: "Co-host", v: "Kazakh local" },
        ]}
      />

      <Departures
        accent={ACCENT}
        list={[
          { label: "June departure", dates: "Jun 8 – 13, 2026", days: 6 },
          { label: "August departure", dates: "Aug 3 – 8, 2026", days: 6 },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Mongolia&rsquo;s wildest corner, all included."
        paragraphs={[
          "The Altai is where Mongolia meets Russia, Kazakhstan, and China in a single mountain range. It&apos;s not like anywhere else in the country — the people are Kazakh, the culture is eagle-hunters, and the peaks start above 4,000 m.",
          "I run this as the budget version on purpose. We fly you from UB to Ölgii so no wasted drive days, stay with nomad families (not fancy hotels), eat what they eat, and cover the absolute highlights — Khoton Lake, Baga Turgen waterfall on horseback, the Potanin Glacier viewpoint, petroglyphs older than the pyramids.",
          "Everything is included — flight, food, guides, horses, permits. You bring your boots and a warm layer. I hand off to a local Altai co-host the moment we land in Ölgii; you get the warmth of a personal tour AND the depth of someone who grew up in this specific landscape.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Four days on the ground, two on the wing."
        days={[
          { n: "01", t: "UB → Ölgii · Khoton Lake", d: "Morning flight west to Ölgii (~3 hours). Scenic 170 km drive to the twin Khoton–Khurgan lakes. Stop with an eagle-hunter family — hold the eagle. Night with a nomad family on the shore." },
          { n: "02", t: "Horse ride to Baga Turgen Waterfall", d: "Saddle up on Mongolia&apos;s tough little horses. 22 km round-trip to the waterfall, ~6 hours total. Forest, icy rivers, green pasture, snow-line at the China border. Drive to another family camp to stay." },
          { n: "03", t: "Northern Altai Tavan Bogd", d: "Drive deep into the national park. High passes, hour-by-hour shifts in terrain, the Yak Milk White River. Night with a nomad family near the ranger station." },
          { n: "04", t: "Sacred Ovoo · Potanin Glacier · petroglyphs", d: "10 km to the sacred Ovoo — the viewpoint for the Five Holy Peaks and the Potanin Ice Glacier. Optional 3.5 km hike to the glacier. Return to Ölgii via 3,000–4,000 BC petroglyphs." },
          { n: "05", t: "Ölgii · rest + culture", d: "Recovery day. Explore Ölgii bazaar, meet Kazakh artisans, visit the Museum of Natural History. Dinner at a local spot." },
          { n: "06", t: "Ölgii → UB", d: "Morning flight back east. Arrive in UB by afternoon with time for a shower before your onward plans." },
        ]}
      />

      {/* PHOTO ESSAY */}
      <section className="relative py-20 md:py-28 border-b border-sand-900/30 overflow-hidden">
        <PeaksBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <SectionHead kicker="Western landscape" title="The Five Holy Peaks." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC02435.jpg`} alt="Altai landscape" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="The eagle weighs about seven kilos and she looks at you like you&rsquo;re prey. It&rsquo;s the longest ten seconds of the trip."
              attribution="— On meeting the eagle hunter&rsquo;s bird."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[
                `${G}/DSC02431.jpg`,
                `${G}/DSC02433.jpg`,
                `${G}/DSC02429.jpg`,
                `${G}/DSC02424.jpg`,
              ].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CO-HOST */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-indigo-800/30 bg-indigo-900/10 p-8 md:p-10"
          >
            <p className="text-indigo-300 text-[11px] tracking-[0.3em] uppercase mb-3">Co-host on this tour</p>
            <h2 className="font-display text-2xl md:text-3xl text-sand-100 mb-4">
              A local Altai guide joins the group.
            </h2>
            <p className="text-sand-400 leading-relaxed text-base md:text-lg">
              The Altai is its own world — Kazakh instead of Khalkh, eagle-hunter culture, mountains above 4,000 m. I travel with the group from UB, but once we&apos;re in Ölgii a local co-host joins us: someone with years of direct experience in these peaks, family ties to the eagle hunters, and fluent Kazakh. You get the warmth of a personal tour AND the depth of someone who grew up in this specific landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$1,400"
        included={[
          "Round-trip flight: Ulaanbaatar ↔ Ölgii",
          "All meals (breakfast, lunch, dinner)",
          "4×4 Russian van, driver, and fuel",
          "English/Mongolian guide (Tugi) + local Altai co-host",
          "Horses and local riding guide for Baga Turgen",
          "Ger camps and nomad family stays",
          "All park permits and site entrance fees",
          "Eagle-hunter visit fee",
        ]}
        bring={[
          "Hiking boots (broken in) + blister tape",
          "Warm layer — nights drop below 5 °C even in August",
          "Rain shell (Altai weather flips fast)",
          "Sleeping bag rated to 0 °C for the ger camps",
          "Headlamp, sunhat, sunscreen, lip balm",
          "Altitude is up to ~3,000 m — flag any heart conditions",
          "A 40 L duffel (no hard suitcases)",
        ]}
        note="Altai is physically the most demanding of our tours. The horse day is 6 hours in the saddle; the glacier hike is 3.5 km each way at altitude. Most ages handle it — just come with something in the tank."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "Is the flight really included?", a: "Yes. Round-trip UB ↔ Ölgii is built into the $1,400 price. Flight tickets go non-refundable ~45 days before departure, so if you need to cancel after that the flight portion is forfeit." },
          { q: "How cold does it get?", a: "Days 10–20 °C, nights can drop to 0–5 °C. The wind is the real factor — it cuts through thin layers. Wool or synthetic mid-layer + wind shell beats any fleece." },
          { q: "Do I have to ride a horse?", a: "The Baga Turgen day is on horseback with a local guide leading. If you really can&apos;t ride, we can swap it for a shorter hike — but the waterfall is the highlight and the horses are famously gentle." },
          { q: "Is the eagle hunter real or a show?", a: "Real. We visit a hunting family that actually uses their eagles for winter hunting. Summer they&apos;re training and mostly welcoming guests like us. Most famous training grounds are within a 2-hour drive." },
          { q: "Can I do this + North & Central?", a: "Yes — the June Altai (Jun 8–13) leaves 6 weeks before the N&C Loop (Jul 21–31). Plenty of time to reset. Or: August Altai (Aug 3–8) → Gobi Glimpse (Aug 18–28). Ask and I'll plan the combo." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="$1,400 per person · flight included"
        subtitle="Two departures in 2026 — June 8–13 or Aug 3–8. Small groups of 6–8. Bring a friend and save 15% each."
        emailSubject="Altai Tavan Bogd · 2026"
      />
    </div>
  );
}
