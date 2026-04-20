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

const ACCENT = "amber";

const acts = [
  { label: "Gobi", accent: "amber" },
  { label: "Central", accent: "rose" },
];

export default function GobiGlimpsePage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <TourHero
        image={`${G}/DSC08000.jpg`}
        kicker="Gobi + Central"
        meta={["1 departure", "11 days"]}
        title="Gobi Glimpse<br/>+ Central"
        subtitle="The iconic southern Gobi loop, extended through central Mongolia. Same places as June&rsquo;s fast run — with three more days to actually be in them."
        accent={ACCENT}
      />

      <VitalsStrip
        items={[
          { l: "Dates", v: "Aug 18 – 28, 2026" },
          { l: "Days", v: "11" },
          { l: "Group", v: "4 – 6" },
          { l: "Region", v: "South + Central" },
          { l: "Pace", v: "Medium · breathing room" },
          { l: "Price", v: "$1,800" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Same country, three extra days."
        paragraphs={[
          "Gobi Glimpse is the slower, better-paced version of the June Southern Gobi tour. The route is almost identical — Yoliin Am, Khongoriin Els, Flaming Cliffs, then north through central — but we take eleven days instead of eight, which changes everything.",
          "Extra time means extra hikes. Extra time at the dunes. A proper second night in the desert. A real day hiking into the Orkhon waterfall gorge. A longer soak at Tsenkher. A hot-spring morning instead of rushing out.",
          "Late August is also when the Gobi cools off and the central steppe turns golden — different colour palette than the June version, quieter light, fewer flies. If you can only pick one Gobi trip, this one is my favourite.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        acts={acts}
        title="Eleven days, properly paced."
        days={[
          { n: "01", act: 0, t: "UB → Middle Gobi", d: "Leave UB late morning. Baga Gazriin Chuluu rock formations en route. Ger camp on the way south." },
          { n: "02", act: 0, t: "Middle → Yoliin Am", d: "Into Umnugobi proper. Afternoon at the Yoliin Am ice canyon — walk ~3 km up the gorge. Family ger camp." },
          { n: "03", act: 0, t: "Yoliin Am · hike day", d: "Full day in the canyon — hike deeper where the ice sits into August. Vulture sightings likely. Evening back at the family camp." },
          { n: "04", act: 0, t: "Khongoriin Els", d: "Drive to the Singing Dunes. Camel ride at sunset. Climb the main dune for the view." },
          { n: "05", act: 0, t: "Dunes · slow day", d: "A real desert morning — walk the dune ridge, swim in the small oasis, photography all day. Second night in the desert." },
          { n: "06", act: 0, t: "Flaming Cliffs", d: "Drive to Bayanzag. Red-rock hike at golden hour. Dinosaur-country story from me. Ger camp." },
          { n: "07", act: 1, t: "Gobi → Orkhon", d: "The long transition day, ~8 hours on the road. Landscape greens up by afternoon. Orkhon Valley family camp." },
          { n: "08", act: 1, t: "Orkhon waterfall", d: "Drive and hike to the Ulaan Tsutgalan waterfall. Walk down into the gorge. A slow afternoon." },
          { n: "09", act: 1, t: "Tsenkher hot springs", d: "South to the springs. Long soak under the stars. First real bath in a week." },
          { n: "10", act: 1, t: "Family day + Karakorum", d: "Short drive to Karakorum via a family camp for lunch. Erdene Zuu Monastery in the afternoon. Ger night near the ruins." },
          { n: "11", act: 1, t: "Back to UB", d: "~6 hours back east on paved road. Drop-off in UB by late afternoon." },
        ]}
      />

      {/* GOBI PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="Act I · The Gobi" title="Dunes, canyon, red rock." center accent={ACCENT} />

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
              quote="In August the Gobi loses its glare. The light goes warm, the wind drops, the country finally lets you sit with it."
              attribution="— Why I prefer the August run."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[`${G}/DSC08023.jpg`, `${G}/DSC07959.jpg`, `${G}/DSC08144.jpg`].map((src) => (
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
        <CentralMongoliaSection accent="amber" compact />
      </div>

      {/* GER + FOOD */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHead kicker="Family stays" title="Most nights in a ger." accent={ACCENT} />
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              On this trip you get seven nights with nomadic families and two in the desert itself. The food is <em>buuz</em>, <em>khuushuur</em>, <em>khorkhog</em>, endless milk tea, and whatever the camp is harvesting (late August means wild onions, roots, and berries).
            </p>
            <p className="text-sand-400 leading-relaxed">
              Kids, dogs, goats, wind, sunset. This is the part of the trip you remember most clearly a year later.
            </p>
          </div>
          <GerEtiquette />
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$1,800"
        included={[
          "4×4 Russian van, fuel, driver",
          "English/Mongolian guide (Tugi)",
          "All meals on the road",
          "Family ger stays (7 nights)",
          "Desert tent nights (2 nights)",
          "Hot-spring camp (1 night)",
          "Camel ride at Khongoriin Els",
          "All park permits and entrance fees",
          "UB airport pickup + drop-off",
        ]}
        bring={[
          "Hiking shoes (canyon + dune + waterfall walks)",
          "Layers — August Gobi nights can drop to 4 °C",
          "Sun hat + scarf for dust",
          "Swimsuit (hot springs + small oases)",
          "Sleeping bag rated to 0 °C (optional — we can lend)",
          "Water bottle — we refill from a jerry can",
          "Photography: dust-sealed gear or a rain sleeve",
        ]}
        note="If you want the fast version, Southern Gobi (June 16 – 23) covers similar ground in 8 days."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How is this different from Southern Gobi?", a: "Same places. Three more days. Southern Gobi (June) is tight — long driving days back-to-back. Gobi Glimpse (August) has breathing room — full days <em>at</em> the dunes, the canyon, the family camp. Same price-per-day, different experience." },
          { q: "Is late August cold in the Gobi?", a: "Days 18–26 °C, nights 4–12 °C. Much gentler than June. Bring a real sleeping bag and you&apos;ll love the desert nights." },
          { q: "Will the hot springs be crowded?", a: "No. Tsenkher gets busier in July for Naadam, but by late August it&apos;s mostly locals and our group. You&apos;ll have a pool to yourselves most evenings." },
          { q: "What&apos;s the riding like?", a: "Camel at Khongoriin Els (~2 hours, gentle). Optional horse day at the Orkhon family camp. No technical riding required." },
          { q: "Can I bring my camera drone?", a: "Most areas yes, but always check with me first — Bayanzag and the monastery have rules. I know where flying is fine and where it&apos;ll get you yelled at." },
          { q: "How many in the group?", a: "4 – 6. Smaller than Naadam or the festival — the drive days work better with fewer people." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="August 18 – 28, 2026 · $1,800"
        subtitle="The Gobi with time to breathe. Small group of 4 – 6. Bring a friend and save 15% each."
        emailSubject="Gobi Glimpse + Central · August 18"
      />
    </div>
  );
}
