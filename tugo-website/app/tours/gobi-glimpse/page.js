"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote, GerEtiquette,
} from "@/components/tours/kit";
import CentralMongoliaSection from "@/components/tours/CentralMongoliaSection";

const G = "/images/gallery";
const D = "/images/destinations";

const ACCENT = "orange";

const acts = [
  { label: "Gobi", accent: "orange" },
  { label: "Central", accent: "rose" },
];

export default function SouthernGobiPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO — desert sunset gradient */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={`${D}/khongoryn-1.jpg`} alt="Khongoryn Els sand dunes" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-amber-900/60 to-red-900/40" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-200 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-amber-200 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-amber-200 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Long Gobi loop · 10 days · 5 – 7 pax
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Gobi Glimpse</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent italic">
                    + Central
                  </span>
                </h1>
                <p className="text-sand-100 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  The Gobi for people on the clock. Ten days to hit the desert&apos;s three icons — Yoliin Am ice canyon, the singing dunes at Khongoriin Els, the Flaming Cliffs — then north through central Mongolia with a full horse-trek day in Tsetserleg. Heavy on road. Heavier on light.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Tour", v: "Jun 10 – 19" },
                    { l: "Days", v: "10" },
                    { l: "Group", v: "5 – 7" },
                    { l: "Price", v: "$900" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/50 backdrop-blur-md border border-amber-300/30">
                      <span className="text-amber-200 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-white text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-night-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(249,115,22,0.7)]">
                    Reserve a Spot
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/40 to-amber-500/40 rounded-3xl blur-2xl" />
                <div className="relative grid grid-cols-2 gap-2">
                  <div className="relative col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border-2 border-amber-200/30 shadow-2xl">
                    <Image src={`${D}/khongoryn-2.jpg`} alt="Khongoryn Els dunes from above" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-200/30 shadow-xl">
                    <Image src={`${D}/yolyn-am.jpg`} alt="Yoliin Am ice canyon" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-200/30 shadow-xl">
                    <Image src={`${G}/DSC08000.jpg`} alt="Gobi desert footprints" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jun 10 – 19, 2026" },
          { l: "Days", v: "9" },
          { l: "Group", v: "5 – 7" },
          { l: "Region", v: "South + Central" },
          { l: "Pace", v: "Tight · lots of driving" },
          { l: "Price", v: "$900" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Ten days. Desert to steppe. One loop."
        paragraphs={[
          "This is the tour I built for the young crew on a tight window. You&apos;ve got a week-plus in Mongolia, you want the Gobi, and you still want the central steppe. The trade-off is a lot of driving — and the driving is worth it.",
          "We push hard the first half: UB to the Gobi in two days, then 2 – 3 days moving between the desert&apos;s big three — Yoliin Am ice canyon, Khongoriin Els singing dunes, and the Flaming Cliffs. Camel trek included. Desert night included.",
          "The back half is the reset. We roll north through central Mongolia, stop for hot springs, horseback, hikes, one last khorkhog dinner with a family. Then home. If you want more chill, take Southern Gobi in August instead — this one is for people who like the pace.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        acts={acts}
        title="Ten days, two acts."
        days={[
          {
            n: "01", act: 0, t: "UB → Middle Gobi",
            stops: ["Ulaanbaatar", "Baga Gazriin Chuluu", "Steppe ger camp"],
            acts: ["drive", "hike", "ger"],
            d: "Early drive south. Stop at the Baga Gazriin Chuluu granite outcrops. Tonight: ger camp on the edge of the steppe.",
            more: "Long drive south on paved road. Baga Gazriin Chuluu is a granite outcrop with a small monastery hidden inside — worth the 30-minute detour. We arrive at a ger camp on the steppe edge by sundown.",
          },
          {
            n: "02", act: 0, t: "Middle → Yoliin Am",
            stops: ["Steppe", "Umnugobi province", "Yoliin Am gorge", "Family ger"],
            acts: ["drive", "hike", "ger"],
            d: "Drive into Umnugobi. Yoliin Am ice canyon — a valley that holds ice into July. Walk 2 km up the gorge and back. Overnight at a family camp.",
            more: "Into proper Gobi. Yoliin Am is the famous ice canyon — even in June it holds slabs of ice on the river floor. We walk in about 2 km on the first afternoon, get a sense of the place. Family ger for the night.",
          },
          {
            n: "03", act: 0, t: "Yoliin Am · hike day",
            stops: ["Yoliin Am gorge", "Vulture cliffs", "Family ger"],
            acts: ["hike", "peak"],
            d: "Full day in the canyon — hike deeper where the ice sits longest. Vultures on the upper cliffs. Picnic lunch in the gorge. Evening back at the family ger.",
            more: "Full day in the canyon. Walk deeper than yesterday — where the ice still sits, where vultures nest. Bring water and a layer (the cliff shadows are cold). Picnic lunch, slow afternoon back at camp.",
          },
          {
            n: "04", act: 0, t: "Khongoriin Els",
            stops: ["Yoliin Am", "Khongoriin Els · Singing Dunes"],
            acts: ["drive", "camel", "peak"],
            d: "Four hours driving to the Singing Dunes. Camel ride at golden hour (~2 hours). Climb the tallest dune for sunset. Sleep in the desert.",
            more: "Four-hour drive to the Singing Dunes — 100 km of sand, up to 800m tall. Camel ride at golden hour, gentle pace, about two hours. Climb the main dune for sunset. Sleep at the foot of the sand.",
          },
          {
            n: "05", act: 0, t: "Flaming Cliffs + dinosaur country",
            stops: ["Khongoriin", "Bayanzag · Flaming Cliffs", "Red canyon", "Ger camp"],
            acts: ["drive", "hike", "visit"],
            d: "Drive to Bayanzag (the Flaming Cliffs) — where the first dinosaur eggs were found in 1923. Red-rock hike at golden hour. Ger camp.",
            more: "Drive east to Bayanzag — where dinosaur eggs were first identified in 1923 by Roy Chapman Andrews' expedition. The rock turns deep red at golden hour. We walk the rim, drop into a small side canyon for the last light. Ger camp for the night.",
          },
          {
            n: "06", act: 1, t: "Gobi → Orkhon Valley",
            stops: ["Bayanzag", "Mandalgovi", "Orkhon Valley family camp"],
            acts: ["drive"],
            d: "The long transition day, ~8 hours on the road. Camel saddle sore by now but the landscape starts to green up by afternoon. Orkhon Valley family camp for the night.",
            more: "This is the leg that earns you the second half. Mostly paved, occasionally washboard. We stop at a few overlooks, pick up groceries somewhere along the way. By dusk the landscape has changed completely — grass, herds, the first proper rivers.",
          },
          {
            n: "07", act: 1, t: "Tsenkher hot springs",
            stops: ["Orkhon", "Tsenkher springs", "Wooden pool camp"],
            acts: ["drive", "hotspring", "star"],
            d: "Shorter drive, ~3 hours. Hot-spring soak. First proper bath since UB. Everyone sleeps well.",
            more: "Tsenkher is 86°C at the source, piped into wooden tubs at varying temperatures. First proper bath in a week. You soak, you read, you soak again. By dark there's nothing but you, the water, and the stars.",
          },
          {
            n: "08", act: 1, t: "Tsetserleg · horse-trek day",
            stops: ["Tsenkher", "Tsetserleg", "Family horse camp"],
            acts: ["drive", "horse", "meal"],
            d: "Short drive to Tsetserleg in Arkhangai. Full day on horseback into the surrounding hills with a local horse family. Picnic lunch on a ridge. Family camp for the night.",
            more: "Tsetserleg is the capital of Arkhangai — small green provincial town built into a hillside, the kind of place you'd happily get stuck in. We meet the horse family by mid-morning and spend the day in the saddle: gentle climb into the larch hills behind the town, picnic on a ridge with the valley spread out below, slow ride back as the light goes long. Night at the family camp — fire, milk vodka if you want it, stars if the sky cooperates.",
          },
          {
            n: "09", act: 1, t: "Central family day",
            stops: ["Tsetserleg area", "Family camp", "Ridge above the camp"],
            acts: ["hike", "meal"],
            d: "A chill day after the saddle. Short hike up the ridge behind the camp, help cook dinner. Khorkhog night.",
            more: "Chill day after yesterday's ride. Short hike up the ridge behind the camp, help cook dinner if you want. Khorkhog (lamb cooked on hot stones in a sealed pot) goes on the fire.",
          },
          {
            n: "10", act: 1, t: "Back to UB",
            stops: ["Family camp", "Karakorum", "Erdene Zuu Monastery", "Ulaanbaatar"],
            acts: ["drive", "visit", "city"],
            d: "Drive back east, ~6 hours. Stop at Erdene Zuu Monastery in Karakorum. UB by evening.",
            more: "Slow morning, then we point east. Erdene Zuu Monastery in Karakorum is the oldest surviving Buddhist monastery in Mongolia — 16th century, built from the stones of the old Mongol capital. Walk the courtyards, then UB by evening.",
          },
        ]}
      />

      {/* GOBI PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="Act I · The Gobi" title="Sand, ice, and red rock." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC08000.jpg`} alt="Gobi sand dunes" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="The Singing Dunes actually sing. Sit at the top for five minutes and you hear the sand slide — a low hum you feel in your chest."
              attribution="— Worth the climb."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[`${G}/DSC07959.jpg`, `${G}/DSC08023.jpg`, `${G}/DSC08144.jpg`].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CENTRAL reusable */}
      <div className="border-b border-sand-900/30">
        <CentralMongoliaSection accent="rose" compact />
      </div>

      {/* GER + FOOD */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHead kicker="Nomadic stays" title="Four nights with families, three in tents." accent={ACCENT} />
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              In the Gobi we alternate desert tents and ger camps. In the central leg you&apos;re guests of families I already know — <em>buuz</em> on the table, milk tea going, kids teaching you to throw ankle bones.
            </p>
            <p className="text-sand-400 leading-relaxed">
              If you&apos;ve never been to a ger, these pages help. The short version: right foot in, move clockwise, say yes to the tea.
            </p>
          </div>
          <GerEtiquette />
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$900"
        included={[
          "4×4 Russian van, fuel, driver",
          "English/Mongolian guide (Tugi)",
          "All meals on the road",
          "Nomadic family ger stays (4 nights)",
          "Desert tent night (1 night)",
          "Hot-spring camp (1 night)",
          "Ger camp + UB arrival/departure (2 nights)",
          "Camel ride at Khongoriin Els",
          "All park permits and entrance fees",
        ]}
        bring={[
          "Sturdy shoes for dune climbs and canyon walks",
          "Layers — Gobi days are hot, nights are cold",
          "Sun hat, sunglasses, lip balm, SPF 50",
          "Scarf or buff (dust in the Gobi)",
          "Swimsuit (hot springs)",
          "Sleeping bag rated to 5 °C",
          "A 40 L duffel (no hard suitcases)",
        ]}
        note="This tour has the longest driving days of the season. If that&rsquo;s a hard no, take Southern Gobi in August instead — same places, more time."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How hard are the drive days really?", a: "Day 5 (Gobi → Orkhon) is ~8 hours and most of it is off-road. It&apos;s the longest. Days 1, 2, 3, and 8 are 5–7 hours each. Day 6 is 3. We stop every 90 min or so. It&apos;s doable — but you&apos;ll earn your hot-spring night." },
          { q: "Can I skip the camel ride?", a: "Yes — some travellers prefer a dune walk at sunset instead. No judgement, no price difference." },
          { q: "What&apos;s the temperature range?", a: "Gobi in June: 15–28 °C days, 5–12 °C nights. Central: 12–24 °C days, 5–15 °C nights. Wind is the bigger factor — it can turn a warm day cold in 10 minutes." },
          { q: "Is this good for photographers?", a: "Gobi at golden hour (dunes + Flaming Cliffs) is unreal. Long days with dust mean lens cleaning kit, not just a cloth. A dust-sealed zoom is ideal." },
          { q: "Can I combine this with another tour?", a: "Playtime starts Jul 1 — a few days of rest in UB between the two works well. Naadam (Jul 8–14) is the other natural pairing. Ask and I'll sort." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="June 10 – 19, 2026 · $900"
        subtitle="Small group of 5 – 7. Deeper Gobi loop with a swing through central Mongolia on the way back. Bring a friend and save 15% each."
        emailSubject="Gobi Glimpse + Central · June 10"
      />
    </div>
  );
}
