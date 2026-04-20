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

const ACCENT = "red";

export default function NaadamPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <TourHero
        image={`${G}/DSC02098.jpg`}
        kicker="Local Naadam"
        meta={["1 departure", "6 days"]}
        title="Naadam<br/>Festival"
        subtitle="Our chill take on Mongolia's biggest holiday — a single central province, horse racing, wrestling, holiday food, nomadic family stays, hot springs, and a volcano on the way home."
        accent={ACCENT}
      />

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jul 8 – 13, 2026" },
          { l: "Days", v: "6" },
          { l: "Group", v: "6 – 8" },
          { l: "Region", v: "Zavkhan + central" },
          { l: "Festival", v: "Local village" },
          { l: "Price", v: "$1,200" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Mongolia&rsquo;s biggest holiday, without the crowd."
        paragraphs={[
          "Naadam is the three-day national holiday — wrestling, horse racing, archery — that happens every July. Most travellers see it in Ulaanbaatar: a stadium, a lot of tourists, a great show but a packaged one.",
          "I run this one differently. We drive out to a single central-Mongolian province and catch the <em>local</em> Naadam there — the village version. Smaller stadium (sometimes just a roped-off field), actual neighbours wrestling, horse races you can watch from the fence, women in full holiday <em>deel</em>, the best <em>khuushuur</em> you&apos;ll ever eat.",
          "Around it we wrap the central highlights — Zavkhan&apos;s lakes and forests, Terkhiin Tsagaan Nuur, Khorgo&apos;s crater rim, Tsenkher hot springs, and a couple of nights with a nomadic family we know. The route bends with the festival schedule — which is the whole idea.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Six days with the holiday at the middle."
        days={[
          { n: "01", t: "UB → Central Mongolia", d: "Morning drive west out of UB. Lunch at a roadside <em>guanz</em>. Arrive at our first family ger camp by evening." },
          { n: "02", t: "Local Naadam — opening day", d: "Horse race in the morning (riders are kids aged 6–12 on Mongolian horses, some galloping 25 km). Wrestling in the afternoon. Archery alongside. Holiday food all day." },
          { n: "03", t: "Naadam finals", d: "Second day of the village Naadam. Final wrestling matches, the horse races that crown the champions, costumes and speeches. Night around a fire." },
          { n: "04", t: "Terkhiin Tsagaan Nuur + Khorgo", d: "Drive east to the lava-dammed White Lake. Hike the crater rim of Khorgo volcano (~40 min up). Swim in the lake if you&apos;re brave." },
          { n: "05", t: "Tsenkher hot springs", d: "South to the springs. 86 °C water piped into wooden pools under the stars. A proper reset after three hard-and-happy days." },
          { n: "06", t: "Back to UB", d: "Slow morning at the springs, then the drive back east. Stop at Erdene Zuu Monastery and Karakorum ruins. UB by evening." },
        ]}
      />

      {/* PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The festival" title="Three sports, one holiday." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC02098.jpg`} alt="Horse racing at Naadam" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="The kid riders gallop in bareheaded and the whole village runs out to check which horse was first. That's the finish line."
              attribution="— The Naadam horse race in one sentence."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[`${G}/DSC02090.jpg`, `${G}/DSC02095.jpg`, `${G}/DSC02105.jpg`, `${G}/DSC02132.jpg`].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
              {[`${G}/DSC02111.jpg`, `${G}/DSC02138.jpg`, `${G}/DSC02365.jpg`].map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOD + GER */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3">
            <SectionHead kicker="Holiday food" title="Khuushuur, airag, and then some." accent={ACCENT} />
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              Naadam is the biggest <em>khuushuur</em> weekend of the year — deep-fried mutton hand-pies eaten straight off the pan by the stadium fence. Everyone has a count. Ten is modest. The record on one of my trips is twenty-three.
            </p>
            <p className="text-sand-400 leading-relaxed mb-6">
              Add fermented mare&apos;s milk (<em>airag</em>), dried curds (<em>aaruul</em>), milk tea, and the occasional glass of vodka someone&apos;s grandfather insists you try. We eat well.
            </p>
          </div>
          <div className="md:col-span-2">
            <GerEtiquette />
          </div>
        </div>
      </section>

      {/* CENTRAL — reusable */}
      <div className="border-b border-sand-900/30">
        <CentralMongoliaSection accent="red" compact />
      </div>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$1,200"
        included={[
          "4×4 vehicle, fuel, driver",
          "English/Mongolian guide (Tugi)",
          "All meals on the road",
          "Nomadic family ger stays (4 nights)",
          "Hot-spring camp (1 night)",
          "Local village Naadam entry / seating",
          "All park and site entrance fees",
          "UB airport pickup + drop-off",
        ]}
        bring={[
          "Festival-friendly clothes — sun hat, sunglasses",
          "Warm layer for evenings (10–12 °C)",
          "Rain shell (afternoon storms in July)",
          "Swimsuit (hot springs + lake)",
          "Hiking shoes for the Khorgo crater",
          "Small cash bills for khuushuur and airag",
        ]}
        note="Photography note: always ask before photographing wrestlers, riders, or families. Tugi will help with the hello."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "Why the local Naadam instead of the big UB one?", a: "The stadium Naadam in UB is a huge show but also heavily commercial — thousands of tourists, assigned seats, everything behind a fence. Village Naadam is what the holiday actually is: your neighbours wrestling, kids racing, grandmothers selling khuushuur from a tent. Real." },
          { q: "Will I see opening ceremony fireworks?", a: "The village ceremony is smaller — speeches, a horse parade, maybe a military honor march. The UB ceremony is the bigger spectacle. If that matters, pair this with a day in UB around July 11 (the official holiday) for the stadium opening." },
          { q: "How far is the drive?", a: "UB to the province is ~6 – 7 hours on day 1. The festival site is close to the family camp. Day 4 – 6 are shorter drives, 3 – 5 hours each, all stopping at real places." },
          { q: "What about the heat?", a: "July in central Mongolia: 15–26 °C, which is pleasant. Evenings drop to 10 °C. Afternoon thunderstorms are common but usually pass in 30 min." },
          { q: "Is this good for photographers?", a: "Yes — the light is clean, the subjects are striking, the access is personal. Long lens for horse racing, wide for the crowd, fast prime for portraits. Tugi will help you get close without being in the way." },
          { q: "What if Naadam dates shift?", a: "Naadam falls on July 11–13 nationally. Village Naadam starts a few days earlier or later. We confirm exact dates 60 days out — the Jul 8–13 window catches most cycles." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="July 8 – 13, 2026 · $1,200"
        subtitle="One village, one holiday, one small group. Bring a friend and save 15% each. Limited seats — Naadam is the year&rsquo;s busiest week."
        emailSubject="Naadam · July 8 – 13"
      />
    </div>
  );
}
