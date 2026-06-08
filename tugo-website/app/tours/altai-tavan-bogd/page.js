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
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/85 via-black/70 to-slate-900/60" />
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
                  Glaciers, twin alpine lakes, Kazakh eagle hunters, 4,000-year-old petroglyphs. Overland across western Mongolia — the drive west is half the trip. The most remote tour on the 2026 calendar, and the one I&apos;m most excited to share.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Duration", v: "9 days" },
                    { l: "Style", v: "Overland" },
                    { l: "Group", v: "5 – 7" },
                    { l: "Price", v: "$810" },
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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
          { l: "Duration", v: "9 days" },
          { l: "Style", v: "Overland" },
          { l: "Group", v: "5 – 7" },
          { l: "Region", v: "Western Mongolia" },
          { l: "Price", v: "$810" },
          { l: "Co-host", v: "Kazakh local" },
        ]}
      />

      <Departures
        accent={ACCENT}
        list={[
          { label: "August departure", dates: "Aug 5 – 13, 2026", days: 9 },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Mongolia&rsquo;s wildest corner — the long way."
        paragraphs={[
          "The Altai is where Mongolia meets Russia, Kazakhstan, and China in a single mountain range. It&apos;s not like anywhere else in the country — the people are Kazakh, the culture is eagle-hunters, and the peaks start above 4,000 m.",
          "In 2026 we do it overland. No flight — we drive west across the whole country, and that drive is half the reason to come: the Khangai, the great salt lakes, Khovd, the deep blue of Tolbo Lake, the land drying and rising under you for three days until the Altai finally stands up on the horizon. Then four days deep in the mountains, and the long road home.",
          "We stay with nomad families, eat what they eat, and cover the highlights — Khoton Lake, Baga Turgen waterfall on horseback, the Potanin Glacier viewpoint, petroglyphs older than the pyramids. When we reach Ölgii a local Kazakh co-host takes the lead: you get the warmth of a personal trip AND the depth of someone who grew up in these peaks. Bring your boots, a warm layer, and a tolerance for long, beautiful drives.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Three days west, three in the mountains, three home."
        days={[
          {
            n: "01", t: "UB → central Mongolia",
            stops: ["Ulaanbaatar", "Kharkhorin", "Khangai ger camp"],
            acts: ["drive", "ger", "meal"],
            d: "Leave UB early and drive west on the paved road, through Kharkhorin and up into the Khangai. A long first day; ger camp in central Mongolia.",
            more: "We break the back of the distance on day one — pavement most of the way now. Pass Kharkhorin, the old imperial capital, then climb into the green Khangai. Ger camp for the night. The Altai is far; the road there is the trip.",
          },
          {
            n: "02", t: "Across the great lakes",
            stops: ["Khangai", "Zavkhan", "Great-lakes basin", "Lakeside camp"],
            acts: ["drive", "water", "camp"],
            d: "West again, through Zavkhan and into the great-lakes basin. The land dries and opens. Camp by the water as the steppe turns to desert-steppe.",
            more: "The country changes texture hour by hour — green Khangai to the huge salt and freshwater lakes of the west, ringed by nothing. We camp by a lake. A long driving day, but this emptiness is exactly what you came west for.",
          },
          {
            n: "03", t: "→ Khovd → Tolbo Lake → Ölgii",
            stops: ["Khovd", "Tolbo Lake", "Ölgii"],
            acts: ["drive", "visit", "ger"],
            d: "Into Khovd, then up past the deep-blue Tolbo Lake to Ölgii — Mongolia's Kazakh capital, gateway to the Altai. Our local co-host takes the lead.",
            more: "We reach Khovd around midday, then climb west and north — Tolbo Lake is a startling blue slab at altitude. Into Ölgii by evening: a different language, different food, mosques on the skyline. This is where my Kazakh co-host joins and leads. First night in the Altai.",
          },
          {
            n: "04", t: "Khoton Lake · eagle hunters",
            stops: ["Ölgii", "Khoton–Khurgan lakes", "Eagle-hunter family"],
            acts: ["drive", "visit", "ger"],
            d: "Scenic drive to the twin Khoton–Khurgan lakes. Stop with an eagle-hunter family — hold the bird if you dare. Night with a nomad family on the shore.",
            more: "West from Ölgii to the lakes. We stop with a Kazakh eagle-hunter family; you can hold the eagle if you want (heavy — about seven kilos). Sleep in a family ger on the Khoton lakeshore, snow-line mountains across the water.",
          },
          {
            n: "05", t: "Baga Turgen waterfall · horseback",
            stops: ["Khoton Lake", "Baga Turgen Waterfall", "Family camp"],
            acts: ["horse", "hike", "water", "ger"],
            d: "Saddle up on Mongolia's tough little horses — a ~22 km round trip to the waterfall, around 6 hours. Forest, icy fords, the snow-line at the China border. Family camp for the night.",
            more: "Mongolian horses are stockier than they look and handle the rocky trails fine. The ride to Baga Turgen crosses larch forest and a few icy streams and ends at a 30 m waterfall basically on the China border. Long day in the saddle, easy pace. Family camp at night.",
          },
          {
            n: "06", t: "Tavan Bogd · Potanin Glacier",
            stops: ["High passes", "Ranger station", "Sacred Ovoo", "Potanin Glacier", "Petroglyphs"],
            acts: ["drive", "hike", "peak", "visit"],
            d: "Deep into the national park — high passes, the Yak-Milk glacial river, the sacred Ovoo with the Five Holy Peaks and the Potanin Glacier laid out in front of you. Petroglyphs on the way back.",
            more: "The big mountain day. We drive in through high passes — the rock changes colour every hour — to the ranger station, then walk up to the sacred Ovoo: the Five Holy Peaks of Tavan Bogd and the Potanin Glacier right there. Optional extra push gets you onto the ice. Bronze Age petroglyphs on the way out. Last night in the Altai.",
          },
          {
            n: "07", t: "Ölgii → Khovd",
            stops: ["Ölgii bazaar", "Tolbo Lake", "Khovd"],
            acts: ["city", "drive", "meal"],
            d: "A morning in Ölgii — the bazaar, a Kazakh artisan or two — then we point east and start the long road home. Overnight in Khovd.",
            more: "We say goodbye to the co-host after a slow morning in Ölgii: the bazaar is the centre of life here, and there's time for embroidery and leather from a couple of artisans, plus beshbarmak before the road. Then back down past Tolbo Lake to Khovd for the night.",
          },
          {
            n: "08", t: "Khovd → the great lakes",
            stops: ["Khovd", "Great-lakes basin", "Khangai", "Camp"],
            acts: ["drive", "water", "camp"],
            d: "The long drive back east, retracing the lakes and the rising steppe. Camp on the way as the Altai drops behind you.",
            more: "A full day on the road, but a different trip in reverse — the light is different, you know the country now, and the talk in the van is all about the week behind you. We camp somewhere on the central-west steppe.",
          },
          {
            n: "09", t: "→ Ulaanbaatar",
            stops: ["Central Mongolia", "Kharkhorin highway", "Ulaanbaatar"],
            acts: ["drive", "city"],
            d: "Last stretch east on the paved road. Back in UB by evening — dusty, tired, and a long way from where you started the week.",
            more: "Home run. We roll back into UB in the evening and drop you at your hotel. Nine days and the whole width of the country behind you. Group dinner that night if anyone still has the legs.",
          },
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
        priceLabel="$810"
        included={[
          "All overland transport — 4×4 van, driver, fuel (UB ↔ Altai round trip)",
          "All meals (breakfast, lunch, dinner)",
          "English/Mongolian guide (Tugi) + local Kazakh co-host",
          "Horses and local riding guide for Baga Turgen",
          "Nomad family ger stays + tent camps on the road",
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
        note="This is now our longest tour and the biggest drive — six of the nine days have real road time, and the Altai is ~1,600 km from UB each way. On top of that the horse day is ~6 hours in the saddle and the glacier hike is at altitude. Come with patience for long, beautiful drives and something in the tank."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How much of this is driving?", a: "A lot — that's the trade for no flight in 2026. Six of the nine days have real road time, three of them long (the Altai is ~1,600 km from UB each way). But the drive west is genuinely the trip — the Khangai, the great lakes, Khovd, Tolbo Lake. If long days in a van aren't your thing, this isn't your tour." },
          { q: "How cold does it get?", a: "Days 10–20 °C, nights can drop to 0–5 °C. The wind is the real factor — it cuts through thin layers. Wool or synthetic mid-layer + wind shell beats any fleece." },
          { q: "Do I have to ride a horse?", a: "The Baga Turgen day is on horseback with a local guide leading. If you really can&apos;t ride, we can swap it for a shorter hike — but the waterfall is the highlight and the horses are famously gentle." },
          { q: "Is the eagle hunter real or a show?", a: "Real. We visit a hunting family that actually uses their eagles for winter hunting. Summer they&apos;re training and mostly welcoming guests like us. Most famous training grounds are within a 2-hour drive." },
          { q: "Can I do this + another tour?", a: "August Altai ends Aug 13, which leaves a few days before Gobi Glimpse + Central (Aug 18–28) — west then south, if you want to keep going. Ask and I'll plan the combo." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="$810 per person · overland, all in"
        subtitle="One departure in 2026 — Aug 5–13, nine days overland. Small group of 5–7. Bring a friend and save 15% each."
        emailSubject="Altai Tavan Bogd · Aug 5 – 13"
      />
    </div>
  );
}
