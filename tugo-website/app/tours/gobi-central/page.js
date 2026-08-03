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

const ACCENT = "amber";

const acts = [
  { label: "Gobi", accent: "amber" },
  { label: "Central", accent: "rose" },
];

export default function GobiCentralPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={`${D}/khongoryn-2.jpg`} alt="Khongoryn Els at golden hour" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-yellow-900/55 to-orange-900/60" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-yellow-400/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-200 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-amber-200 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-amber-200 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Gobi + Central · 10 days · mid-August
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Gobi</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent italic">
                    + Central
                  </span>
                </h1>
                <p className="text-sand-100 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  The full Gobi loop, run at a comfortable ten-day pace in the first half of August — Yoliin Am ice canyon, a night with a camel family in the open desert, the Singing Dunes, the Flaming Cliffs, then north through central Mongolia for hot springs and family camps.
                </p>

                <div className="mb-5">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-200 text-[11px] tracking-[0.2em] uppercase font-semibold">
                    <span aria-hidden="true">⚠</span> Limited spots available
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Tour", v: "Aug 7 – 16" },
                    { l: "Days", v: "10" },
                    { l: "Group", v: "3 – 5" },
                    { l: "Price", v: "$950" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/50 backdrop-blur-md border border-amber-300/30">
                      <span className="text-amber-200 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-white text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-night-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(245,158,11,0.7)]">
                  Reserve a Spot
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/40 to-yellow-400/40 rounded-3xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-200/30 shadow-2xl">
                  <Image src={`${D}/khongoryn-1.jpg`} alt="Sand dunes at Khongoryn Els" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Khongoryn Els</p>
                    <p className="font-display text-lg leading-tight">The Singing Dunes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Dates", v: "Aug 7 – 16, 2026" },
          { l: "Days", v: "10" },
          { l: "Group", v: "3 – 5" },
          { l: "Region", v: "South + Central" },
          { l: "Pace", v: "Medium · breathing room" },
          { l: "Price", v: "$950" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="The whole Gobi loop, comfortably paced."
        paragraphs={[
          "This is the complete southern-Gobi-and-central circuit run over ten days in early August — Dalanzadgad gateway, Yoliin Am ice canyon, a night with a camel family in the open Gobi, Khongoriin Els, the Flaming Cliffs, then north through central Mongolia for the waterfall, hot springs, and family camps.",
          "Ten days is the sweet spot: every signature stop, but with time to actually sit in each place — a full evening on the dunes, a proper day at the waterfall gorge, a long soak at Tsenkher instead of a rushed morning.",
          "Early August still has the summer green in the central steppe and long warm evenings in the desert. If you want the Gobi and central Mongolia in one trip without the longest itinerary, this is the one.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        acts={acts}
        title="Ten days, every signature stop."
        days={[
          {
            n: "01", act: 0,
            t: "UB → Dalanzadgad",
            stops: ["Ulaanbaatar", "Dalanzadgad"],
            acts: ["drive", "city"],
            d: "Down to the gateway of the Gobi — ~560 km south, or a 1-hour flight if you'd rather save the day. Hotel night in Dalanzadgad.",
            more: "Most groups choose to fly down — saves a day, costs a bit more. If we drive, we split it with stops at Baga Gazriin Chuluu rock formations and a lunch break in Mandalgovi. Either way, we sleep in Dalanzadgad — last hot shower for a few days. Walk the bazaar in the evening if you want.",
          },
          {
            n: "02", act: 0,
            t: "Dalanzadgad → Yoliin Am",
            stops: ["Dalanzadgad", "Gurvansaikhan park", "Yoliin Am ice canyon", "Family ger"],
            acts: ["drive", "hike", "ger"],
            d: "Into Gurvansaikhan National Park and up the ice canyon — a narrow gorge that holds ice on the riverbed deep into summer. Lammergeier vultures on the upper cliffs.",
            more: "Yoliin Am is the most famous of the Gobi canyons for good reason — it's narrow enough that the sun barely touches the floor, which keeps ice on the riverbed well into August. We walk a few kilometres in, picnic where the gorge opens, then back to the family ger for dinner. Bring a layer — the cliff shadows stay cold.",
          },
          {
            n: "03", act: 0,
            t: "Camel family · open-space camp",
            stops: ["Gobi steppe", "Camel herder family", "Open-space camp"],
            acts: ["camel", "camp", "meal", "star"],
            d: "Morning with a camel-herder family — learn the harness, ride for a few hours into the open Gobi. No ger, no walls — we sleep in the open with the family, dinner around the fire.",
            more: "This is the kind of night you remember years later. The family has around 200 camels; they move twice a year and we catch them at their summer ground. We help set up the evening camp, share dinner — boiled mutton, milk tea, maybe some airag if they offer — and sleep on thick felt mats out under the sky. Stars unfiltered. Camels close by.",
          },
          {
            n: "04", act: 0,
            t: "Khongoriin Els",
            stops: ["Open Gobi", "Khongoriin Els · Singing Dunes"],
            acts: ["drive", "hike", "peak"],
            d: "Short drive to the Singing Dunes. Climb the main dune at sunset, walk the ridge, photography all evening. Camp at the foot.",
            more: "Khongoriin Els is 100 km long and tops out at 800 m of sand. The 'singing' is the sound the dune face makes when sand slides — like a low drone, eerie the first time. We aim to be on top for sunset; coming down is much easier (and faster) than going up.",
          },
          {
            n: "05", act: 0,
            t: "Flaming Cliffs",
            stops: ["Khongoriin", "Bayanzag · Flaming Cliffs", "Red-rock canyon"],
            acts: ["drive", "hike", "visit"],
            d: "~250 km east to Bayanzag — the Flaming Cliffs. Dinosaur eggs were first discovered here in 1923. Red-rock hike at golden hour. Ger camp.",
            more: "Roy Chapman Andrews' 1923 expedition found the first dinosaur eggs ever identified, right at these cliffs. The rock turns a deep red at golden hour — about as Mars-on-Earth as it gets. We hike the rim trail then drop into a small canyon for the last light.",
          },
          {
            n: "06", act: 1,
            t: "Gobi → Orkhon",
            stops: ["Bayanzag", "Mandalgovi", "Orkhon Valley family camp"],
            acts: ["drive"],
            d: "The long transition day — ~8 hours on the road. Desert greens into steppe by afternoon. Orkhon Valley family camp for the night.",
            more: "This is the leg that earns you the second half. Mostly paved, occasionally washboard. We stop at a few overlooks and pick up groceries along the way. By dusk the landscape has changed completely — grass, herds, the first proper rivers.",
          },
          {
            n: "07", act: 1,
            t: "Orkhon waterfall",
            stops: ["Orkhon Valley", "Ulaan Tsutgalan waterfall", "River gorge"],
            acts: ["hike", "water", "meal"],
            d: "Drive and hike to Ulaan Tsutgalan waterfall. Walk down into the gorge. Slow afternoon. Khorkhog for dinner.",
            more: "The waterfall is small but the gorge is genuinely beautiful — basalt walls, swallows nesting in the cracks. We pack a lunch, walk in for swims and photos, hang around till mid-afternoon. Family camp again that night with khorkhog (lamb cooked on hot stones in a sealed pot).",
          },
          {
            n: "08", act: 1,
            t: "Tsenkher hot springs",
            stops: ["Orkhon", "Tsenkher springs", "Wooden pool camp"],
            acts: ["drive", "hotspring", "star"],
            d: "South to the springs — 86°C at the source, piped into wooden tubs. Long soak under the stars. First real bath in a week.",
            more: "By day eight your body knows it's been to the desert and back. Tsenkher answers the question with hot mineral water. Tubs at varying temperatures — soak, read, soak again. Dinner at the camp, then a final hot soak after dark.",
          },
          {
            n: "09", act: 1,
            t: "Family day + Karakorum",
            stops: ["Tsenkher", "Family camp · lunch", "Karakorum", "Erdene Zuu Monastery"],
            acts: ["drive", "visit", "ger"],
            d: "Short drive to Karakorum via a family camp for lunch. Erdene Zuu Monastery in the afternoon. Ger night near the ruins.",
            more: "Erdene Zuu is the oldest surviving Buddhist monastery in Mongolia — 16th century, built from the stones of the old Mongol capital. Slow afternoon walk through the courtyards, then a final ger night nearby.",
          },
          {
            n: "10", act: 1,
            t: "Back to UB",
            stops: ["Karakorum", "Ulaanbaatar"],
            acts: ["drive", "city"],
            d: "~6 hours back east on paved road. Drop-off in UB by late afternoon. Group dinner that night if you're up for it.",
            more: "Last drive. Most groups want a real shower and a real bed first; we can do an optional group dinner around 7pm at a place I like in central UB. Flights home the next day.",
          },
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
              quote="Ten days is enough to stop counting them. The desert stops being a checklist and starts being a place you live in for a while."
              attribution="— Why this is the length I'd pick."
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
              On this trip you get six nights with nomadic families and two in the desert itself. The food is <em>buuz</em>, <em>khuushuur</em>, <em>khorkhog</em>, endless milk tea, and whatever the camp is harvesting.
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
        priceLabel="$950"
        included={[
          "4×4 Russian van, fuel, driver",
          "English/Mongolian guide (Tugi)",
          "All meals on the road",
          "Family ger stays (6 nights)",
          "Desert tent nights (2 nights)",
          "Hot-spring camp (1 night)",
          "Camel ride at Khongoriin Els",
          "All park permits and entrance fees",
          "UB airport pickup + drop-off",
        ]}
        bring={[
          "Hiking shoes (canyon + dune + waterfall walks)",
          "Layers — August Gobi nights can drop to 6 °C",
          "Sun hat + scarf for dust",
          "Swimsuit (hot springs + small oases)",
          "Sleeping bag rated to 0 °C (optional — we can lend)",
          "Water bottle — we refill from a jerry can",
          "Photography: dust-sealed gear or a rain sleeve",
        ]}
        note="Want more time in the desert? Southern Gobi + Central (Aug 18 – 28) runs the same country over eleven days."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How is this different from Southern Gobi + Central?", a: "Same country, one day shorter and a bit earlier in August. This ten-day version hits every signature stop with room to breathe; Southern Gobi (Aug 18 – 28) adds an extra day for a second night in the desert and a slower canyon day." },
          { q: "How different is it from the June Gobi Glimpse?", a: "Gobi Glimpse is the tight eight-day June run — long driving days, less time at each stop. This one adds two days so you actually get evenings on the dunes and a real day at the waterfall gorge." },
          { q: "Is early August hot in the Gobi?", a: "Days 22–30 °C, nights 6–14 °C. Warm, dry days and comfortable evenings. Bring a real sleeping bag and you&apos;ll love the desert nights." },
          { q: "What&apos;s the riding like?", a: "Camel at Khongoriin Els (~2 hours, gentle). Optional horse day at the Orkhon family camp. No technical riding required." },
          { q: "Can I bring my camera drone?", a: "Most areas yes, but always check with me first — Bayanzag and the monastery have rules. I know where flying is fine and where it&apos;ll get you yelled at." },
          { q: "How many in the group?", a: "3 – 5. Kept deliberately small — the drive days stay comfortable and everyone gets to know each other." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="August 7 – 16, 2026 · $950"
        subtitle="The full Gobi loop in ten days. Small group of 3 – 5. Bring a friend and save 15% each."
        emailSubject="Gobi + Central · August 7"
      />
    </div>
  );
}
