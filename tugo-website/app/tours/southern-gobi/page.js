"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TourHero, VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote, GerEtiquette,
} from "@/components/tours/kit";
import CentralMongoliaSection from "@/components/tours/CentralMongoliaSection";

const G = "/images/gallery";

const ACCENT = "orange";

const acts = [
  { label: "Gobi", accent: "orange" },
  { label: "Central", accent: "rose" },
];

export default function SouthernGobiPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <TourHero
        image={`${G}/DSC08000.jpg`}
        kicker="Fast Gobi run"
        meta={["1 departure", "8 days"]}
        title="Southern Gobi<br/>+ Central"
        subtitle="For young travellers who want to cover ground. Umnugobi, Yoliin Am ice canyon, a night in the desert, camels at Khongoriin Els, then central Mongolia on the way home. Packed."
        accent={ACCENT}
      />

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jun 16 – 23, 2026" },
          { l: "Days", v: "8" },
          { l: "Group", v: "4 – 6" },
          { l: "Region", v: "South + Central" },
          { l: "Pace", v: "Tight · lots of driving" },
          { l: "Price", v: "$1,200" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Eight days. Desert to steppe. One loop."
        paragraphs={[
          "This is the tour I built for the young crew on a tight window. You&apos;ve got a week-plus in Mongolia, you want the Gobi, and you still want the central steppe. The trade-off is a lot of driving — and the driving is worth it.",
          "We push hard the first half: UB to the Gobi in two days, then 2 – 3 days moving between the desert&apos;s big three — Yoliin Am ice canyon, Khongoriin Els singing dunes, and the Flaming Cliffs. Camel trek included. Desert night included.",
          "The back half is the reset. We roll north through central Mongolia, stop for hot springs, horseback, hikes, one last khorkhog dinner with a family. Then home. If you want more chill, take Gobi Glimpse in August instead — this one is for people who like the pace.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        acts={acts}
        title="Eight days, two acts."
        days={[
          { n: "01", act: 0, t: "UB → Middle Gobi", d: "Early drive south. Stop at the Baga Gazriin Chuluu granite outcrops. Tonight: ger camp on the edge of the steppe." },
          { n: "02", act: 0, t: "Middle → Yoliin Am", d: "Drive into Umnugobi. Yoliin Am ice canyon — a valley that holds ice into July. Walk 2 km up the gorge and back. Overnight at a family camp." },
          { n: "03", act: 0, t: "Khongoriin Els", d: "Four hours driving to the Singing Dunes. Camel ride at golden hour (~2 hours). Climb the tallest dune for sunset. Sleep in the desert." },
          { n: "04", act: 0, t: "Flaming Cliffs + dinosaur country", d: "Drive to Bayanzag (the Flaming Cliffs) — where the first dinosaur eggs were found in 1923. Red-rock hike at golden hour. Ger camp." },
          { n: "05", act: 1, t: "Gobi → Orkhon Valley", d: "The long transition day, ~8 hours on the road. Camel saddle sore by now but the landscape starts to green up by afternoon. Orkhon Valley family camp for the night." },
          { n: "06", act: 1, t: "Tsenkher hot springs", d: "Shorter drive, ~3 hours. Hot-spring soak. First proper bath since UB. Everyone sleeps well." },
          { n: "07", act: 1, t: "Central family day", d: "A chill day — optional horseback in the morning, hike up the hill behind the family camp, help cook dinner. Khorkhog night." },
          { n: "08", act: 1, t: "Back to UB", d: "Drive back east, ~6 hours. Stop at Erdene Zuu Monastery in Karakorum. UB by evening." },
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
        priceLabel="$1,200"
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
        note="This tour has the longest driving days of the season. If that&rsquo;s a hard no, take Gobi Glimpse in August instead — same places, more time."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How hard are the drive days really?", a: "Day 5 (Gobi → Orkhon) is ~8 hours and most of it is off-road. It&apos;s the longest. Days 1, 2, 3, and 8 are 5–7 hours each. Day 6 is 3. We stop every 90 min or so. It&apos;s doable — but you&apos;ll earn your hot-spring night." },
          { q: "Can I skip the camel ride?", a: "Yes — some travellers prefer a dune walk at sunset instead. No judgement, no price difference." },
          { q: "What&apos;s the temperature range?", a: "Gobi in June: 15–28 °C days, 5–12 °C nights. Central: 12–24 °C days, 5–15 °C nights. Wind is the bigger factor — it can turn a warm day cold in 10 minutes." },
          { q: "Is this good for photographers?", a: "Gobi at golden hour (dunes + Flaming Cliffs) is unreal. Long days with dust mean lens cleaning kit, not just a cloth. A dust-sealed zoom is ideal." },
          { q: "Can I combine this with another tour?", a: "It ends Jun 23. The Horse Trek (Jun 25–30) starts 2 days later — tight but doable. Or the July 1 Playtime. Ask and I'll sort." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="June 16 – 23, 2026 · $1,200"
        subtitle="Small group of 4 – 6. Fast pace, high reward. Bring a friend and save 15% each."
        emailSubject="Southern Gobi + Central · June 16"
      />
    </div>
  );
}
