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
                  Glaciers, twin alpine lakes, Kazakh eagle hunters, 4,000-year-old petroglyphs. Overland across western Mongolia to Ölgii, deep into the Altai, then a different road home through the great lakes and Chuka&apos;s Zavkhan mountains. The most remote tour on the 2026 calendar, and the one I&apos;m most excited to share.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Duration", v: "11 days" },
                    { l: "Style", v: "Overland" },
                    { l: "Group", v: "5 – 7" },
                    { l: "Price", v: "$1,080" },
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
          { l: "Duration", v: "11 days" },
          { l: "Style", v: "Overland loop" },
          { l: "Group", v: "5 – 7" },
          { l: "Region", v: "Western Mongolia" },
          { l: "Price", v: "$1,080" },
          { l: "Co-hosts", v: "Kazakh + Chuka" },
        ]}
      />

      <Departures
        accent={ACCENT}
        list={[
          { label: "August departure", dates: "Aug 4 – 14, 2026", days: 11 },
        ]}
      />

      {/* RETURN-DATE FLEXIBILITY NOTICE */}
      <section className="px-4 md:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 md:p-6 flex gap-4"
        >
          <span className="text-2xl leading-none shrink-0" aria-hidden="true">⏳</span>
          <div>
            <p className="text-amber-200 text-[11px] tracking-[0.25em] uppercase mb-2 font-medium">
              Plan a buffer on your return
            </p>
            <p className="text-sand-200 text-sm md:text-base leading-relaxed">
              This is a ~3,000 km overland loop. The published end date (Aug 14) is our target, but western roads, weather, and the occasional detour the group votes for can push the return back — <strong className="text-amber-100 font-semibold">expect up to 1 day&rsquo;s delay, 2 days at the very most.</strong> Please don&rsquo;t book a tight onward flight or connection for Aug 14 — leave yourself a buffer of at least two days in Ulaanbaatar.
            </p>
          </div>
        </motion.div>
      </section>

      <Prologue
        accent={ACCENT}
        title="Mongolia&rsquo;s wildest corner — the long way."
        paragraphs={[
          "The Altai is where Mongolia meets Russia, Kazakhstan, and China in a single mountain range. It&apos;s not like anywhere else in the country — the people are Kazakh, the culture is eagle-hunters, and the peaks start above 4,000 m.",
          "In 2026 we do it overland — no flight. Three days west just to reach Ölgii: Bayankhongor on day one, the long haul through Govi-Altai to Khovd on day two, then up past the deep blue of Tolbo Lake into the Kazakh west. The land dries and rises under you the whole way — the drive is half the reason to come.",
          "Then four days deep in the Altai out of Ölgii: the twin Khoton–Khurgan lakes, the Turgen waterfalls, the Potanin Glacier and the Five Holy Peaks, Tsengel Khairkhan and the Süün Gol on the way back. And we don&apos;t double back the way we came — we loop home a different road, through the great lakes, my western co-host Chuka&apos;s mountains in Zavkhan, and a long soak at Tsenkher hot springs. We stay with nomad families, eat what they eat, and in Ölgii a local Kazakh co-host takes the lead. Bring your boots, a warm layer, and a tolerance for long, beautiful drives.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Three days west, four in the Altai, four home the long way."
        days={[
          {
            n: "01", t: "UB → Bayankhongor",
            stops: ["Ulaanbaatar", "Central steppe", "Bayankhongor"],
            acts: ["drive", "ger", "meal"],
            d: "Leave UB early and drive southwest — about 700 km of paved road to Bayankhongor. A long first day; we break the back of the distance to the west.",
            more: "The Altai is the far corner of the country, so day one is about covering ground. Pavement most of the way southwest through the steppe to Bayankhongor, a provincial town on the edge of the Gobi. Easy night, early start tomorrow — the longest driving day of the trip is next.",
          },
          {
            n: "02", t: "Bayankhongor → Khovd",
            stops: ["Bayankhongor", "Govi-Altai", "Khovd"],
            acts: ["drive", "camp", "meal"],
            d: "The big driving day — roughly 800 km west through Govi-Altai to Khovd, the hub of the far west. The land dries, opens, and starts to rise.",
            more: "A full day in the van, and the one that earns you the Altai. We cross Govi-Altai, where the steppe turns to desert and the mountains begin to stack up on the horizon. Khovd is the old garrison town of the west — a melting pot of Kazakh, Khalkh, and a dozen smaller peoples. Night in Khovd.",
          },
          {
            n: "03", t: "Khovd → Tolbo Lake → Ölgii",
            stops: ["Khovd", "Tolbo Lake", "Ölgii"],
            acts: ["drive", "visit", "ger"],
            d: "Up past the deep-blue Tolbo Lake to Ölgii — Mongolia's Kazakh capital and our base for the Altai. Our local co-host takes the lead here.",
            more: "A shorter, beautiful leg. Tolbo Lake is a startling blue slab at altitude — we stop for it. Into Ölgii by afternoon: a different language, different food, mosques on the skyline. This is where my Kazakh co-host joins and leads. We sort out gear and the lake run, and sleep in town before heading into the mountains.",
          },
          {
            n: "04", t: "Ölgii → Khoton–Khurgan Lake",
            stops: ["Ölgii", "Sagsai", "Mogoit bridge", "Khoton–Khurgan lakes"],
            acts: ["drive", "water", "ger"],
            d: "West from Ölgii through Sagsai and over the Mogoit bridge to the twin Khoton–Khurgan lakes. Stop with an eagle-hunter family on the way. Night on the lakeshore.",
            more: "We leave town through Sagsai, cross the Mogoit bridge, and work along rough track to the lakes — about 165 km but slow going. On the way we stop with a Kazakh eagle-hunter family; you can hold the eagle if you want (heavy — about seven kilos). Sleep in a family ger on the Khoton shore, snow-line mountains across the water.",
          },
          {
            n: "05", t: "Ikh & Baga Turgen waterfalls",
            stops: ["Khoton Lake", "Ikh & Baga Turgen Waterfall", "Family camp"],
            acts: ["horse", "hike", "water", "ger"],
            d: "Out to the Turgen waterfalls — the Ikh (Big) and Baga (Small) Turgen, fed by snowmelt near the China border. Larch forest, icy fords, a day partly in the saddle. Family camp for the night.",
            more: "Mongolian horses are stockier than they look and handle the rocky trails fine. The route to the Turgen falls crosses larch forest and a few icy streams and ends below the snow-line basically on the China border. Easy pace, long day. Family camp at night, the mountains close on every side.",
          },
          {
            n: "06", t: "Altai Tavan Bogd · Potanin Glacier",
            stops: ["High passes", "Ranger station", "Sacred Ovoo", "Potanin Glacier", "Petroglyphs"],
            acts: ["drive", "hike", "peak", "visit"],
            d: "Deep into the national park — high passes, the glacial Süün Gol (Milk River), and the sacred Ovoo with the Five Holy Peaks and the Potanin Glacier laid out in front of you. Petroglyphs on the way.",
            more: "The big mountain day. We drive in through high passes — the rock changes colour every hour — past the milky Süün Gol to the ranger station, then walk up to the sacred Ovoo: the Five Holy Peaks of Tavan Bogd and the Potanin Glacier right there. Optional extra push gets you onto the ice. Bronze-Age petroglyphs on the way out. Night in the park.",
          },
          {
            n: "07", t: "Tavan Bogd → Tsengel → Ölgii",
            stops: ["Altai Tavan Bogd", "Tsengel Khairkhan", "Tsengel soum", "Ölgii"],
            acts: ["drive", "peak", "city"],
            d: "The loop back to Ölgii, swinging past Tsengel Khairkhan and through Tsengel soum. Last night in the Kazakh capital — a hot shower and beshbarmak.",
            more: "We close the Altai loop on a long but spectacular drive — the sacred massif of Tsengel Khairkhan on one side, then down through Tsengel soum and back to Ölgii by evening. A slow last evening with the co-host: the bazaar, embroidery and leather from a couple of artisans, and beshbarmak before the road east.",
          },
          {
            n: "08", t: "Ölgii → the great lakes",
            stops: ["Ölgii", "Khovd", "Great-lakes basin", "Lakeside camp"],
            acts: ["drive", "water", "camp"],
            d: "Goodbye to the co-host. East out of the Altai into the great-lakes basin — huge salt and freshwater lakes ringed by nothing. Camp by the water.",
            more: "We don't retrace the whole way home — we loop. East past Khovd into the great-lakes depression, a string of enormous lakes between the mountain ranges of the west. We camp by the water as the Altai finally drops behind us. A long driving day, but this emptiness is exactly what you came west for.",
          },
          {
            n: "09", t: "→ Zavkhan · Chuka's home",
            stops: ["Great lakes", "Ikh-Uul", "Chuka's family camp"],
            acts: ["drive", "ger", "meal"],
            d: "On to Ikh-Uul in Zavkhan — the home of Chuka, my western co-host. Settle in with his family under the mountains.",
            more: "We cross into Zavkhan and reach Ikh-Uul, where we move in with Chuka — my co-host out west, who knows these mountains the way I know the central steppe. His family hosts us: their ger, their food, their kitchen. Milk tea, a long dinner, and the first night under a roof in a few days.",
          },
          {
            n: "10", t: "Zavkhan → Tsenkher springs",
            stops: ["Ikh-Uul", "Tsetserleg", "Tsenkher", "Pool camp"],
            acts: ["drive", "hotspring", "star"],
            d: "East toward the central highlands, down through Tsetserleg to Tsenkher — 86 °C water in wooden pools under the stars. The first hot soak in over a week.",
            more: "A driving day that ends well. We come down through Tsetserleg, Arkhangai's leafy capital, then on to Tsenkher: 86 °C at the source, piped into wooden tubs at varying temperatures. You soak, you read, you soak again, and the stars do the rest. After ten days on the road this is the reward.",
          },
          {
            n: "11", t: "Tsenkher → Kharkhorin → UB",
            stops: ["Tsenkher", "Kharkhorin · Erdene Zuu", "Ulaanbaatar"],
            acts: ["visit", "drive", "city"],
            d: "Erdene Zuu Monastery at Kharkhorin, then the paved road home. Back in UB by evening — the whole width of the country behind you.",
            more: "Home run. Erdene Zuu at Kharkhorin is Mongolia's oldest surviving monastery — 16th century, walled with 108 stupas, built on the site of Chinggis Khaan's old capital. Then east on tarmac and back into UB in the evening. Eleven days and the full width of the country behind you. Group dinner that night if anyone still has the legs.",
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
        priceLabel="$1,080"
        included={[
          "All overland transport — 4×4 van, driver, fuel (full UB → Altai → UB loop)",
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
        note="This is our longest tour and the biggest drive — seven of the eleven days have real road time, and we loop the full width of the country rather than doubling back. On top of that there's a day partly in the saddle out to the Turgen falls and the glacier hike is at altitude. Come with patience for long, beautiful drives and something in the tank."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How much of this is driving?", a: "A lot — that's the trade for no flight in 2026. Seven of the eleven days have real road time, and we loop the full width of the country: Bayankhongor and Khovd on the way out, the great lakes and Zavkhan on the way home. But the driving is genuinely the trip — Tolbo Lake, the great-lakes basin, Chuka's mountains. If long days in a van aren't your thing, this isn't your tour." },
          { q: "How cold does it get?", a: "Days 10–20 °C, nights can drop to 0–5 °C. The wind is the real factor — it cuts through thin layers. Wool or synthetic mid-layer + wind shell beats any fleece." },
          { q: "Do I have to ride a horse?", a: "The Baga Turgen day is on horseback with a local guide leading. If you really can&apos;t ride, we can swap it for a shorter hike — but the waterfall is the highlight and the horses are famously gentle." },
          { q: "Is the eagle hunter real or a show?", a: "Real. We visit a hunting family that actually uses their eagles for winter hunting. Summer they&apos;re training and mostly welcoming guests like us. Most famous training grounds are within a 2-hour drive." },
          { q: "Could we get back later than Aug 14?", a: "Possibly. This is a ~3,000 km overland loop, and the far west is the one place a day can slip away from you — a washed-out track, a storm on a pass, or a detour the group decides is worth it. The Aug 14 return is our target, not a guarantee: plan for up to 1 day's delay, 2 at the very most. Don't book a tight flight out of UB on Aug 14 — give yourself a two-day buffer." },
          { q: "Can I do this + another tour?", a: "August Altai targets Aug 14 (allow a day or two of buffer), which still leaves room before Gobi Glimpse + Central (Aug 18–28) — west then south, if you want to keep going. Ask and I'll plan the combo." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="$1,080 per person · overland, all in"
        subtitle="One departure in 2026 — Aug 4–14, eleven days overland. Small group of 5–7. Bring a friend and save 15% each."
        emailSubject="Altai Tavan Bogd · Aug 4 – 14"
      />
    </div>
  );
}
