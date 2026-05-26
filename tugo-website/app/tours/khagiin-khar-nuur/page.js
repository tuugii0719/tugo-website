"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote, GerEtiquette,
} from "@/components/tours/kit";

const G = "/images/gallery";

const ACCENT = "lime";

export default function KhagiinKharNuurPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO — taiga horse trek, forest greens */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={`${G}/DSC01684.jpg`} alt="Khan Khentii taiga river canyon" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-lime-900/35 to-emerald-900/30" />
        </div>
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-lime-400/12 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-400/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-200 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-lime-200 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-lime-200 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Khan Khentii taiga · horseback only
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Khagiin</span>
                  <span className="block bg-gradient-to-r from-lime-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent italic">
                    Khar Nuur
                  </span>
                </h1>
                <p className="text-sand-100 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Six days on horseback into the Khan Khentii taiga to the Pearl of the Taiga — a hidden alpine lake reachable only by horse. No road in. No phone signal. Just trail, river, fire.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Tour", v: "Jun 22 – 27" },
                    { l: "Days", v: "6" },
                    { l: "Group", v: "5 – 7" },
                    { l: "Price", v: "$900" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/55 backdrop-blur-md border border-lime-300/30">
                      <span className="text-lime-200 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-white text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-night-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(132,204,22,0.6)]">
                  Reserve a Spot
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-lime-400/30 to-emerald-400/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-lime-200/30 shadow-2xl">
                  <Image src={`${G}/DSC02365.jpg`} alt="Mongolian horses on the steppe" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Pearl of the Taiga</p>
                    <p className="font-display text-lg leading-tight">Two days in. One night by the lake.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jun 22 – 27, 2026" },
          { l: "Days", v: "6" },
          { l: "Group", v: "5 – 7" },
          { l: "Region", v: "Khan Khentii taiga" },
          { l: "Start / end", v: "Ulaanbaatar" },
          { l: "Price", v: "$900" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="A lake only the horses know how to reach."
        paragraphs={[
          "Khagiin Khar Nuur — the <em>Pearl of the Taiga</em> — sits at the southern edge of the Siberian forest, deep inside the Khan Khentii strict protected area. There is no road in. The only way is on horseback, and that is the point.",
          "I love this tour because it slows everything down. Your legs stop checking for phones, your breath evens out, and by day three you&apos;re asleep by the fire with a dog using your jacket as a pillow.",
          "It&apos;s real riding — two long days in the saddle each way — but the horses are patient and the pace is easy. If you&apos;ve ridden a few times before, you&apos;ll be fine. Come for the country you can only reach by horse.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Six days in the saddle."
        days={[
          {
            n: "01", t: "UB → Terelj",
            stops: ["Ulaanbaatar", "Turtle Rock", "Aryabal Meditation Temple", "Family ger"],
            acts: ["drive", "visit", "ger", "meal"],
            d: "Leave UB in the morning, drive to Gorkhi-Terelj. Turtle Rock, a visit to Aryabal Meditation Temple, crossing the Terelj River. Night in a traditional family ger.",
            more: "Morning drive out of UB to Gorkhi-Terelj. We stop at Turtle Rock for a stretch and the Aryabal Meditation Temple for the climb (the elephant-trunk staircase). Cross the Terelj River into the family's land — they'll have dinner waiting. This is the soft start; tomorrow gets real.",
          },
          {
            n: "02", t: "Into the taiga",
            stops: ["Family ger", "Khavirga Pass", "Taiga tent camp"],
            acts: ["horse", "camp", "morning"],
            d: "Pack the kitchen and bags onto the horses. Ride out across Khavirga Pass into the quiet taiga. Long day in the saddle. Tents set up for the night under the stars.",
            more: "Up early to load kitchen and bags onto the pack horses. The trail climbs into the Khentii taiga — birch and larch, no people. Khavirga Pass is the high point of the day; then a gradual descent. We set up tents in a clearing by water before dark.",
          },
          {
            n: "03", t: "Arriving at Khagiin Khar Lake",
            stops: ["Taiga trail", "Khagiin Khar Lake", "Lake camp"],
            acts: ["horse", "water", "camp", "peak"],
            d: "By late afternoon we reach the Pearl of the Taiga — the southern edge of the Siberian forest. Camp by the lake with mountains all around. A short canter along the shore if the ground allows.",
            more: "Second day of riding, into the heart of the Khentii. By late afternoon the lake opens up below — glacial-fed, slate-coloured, surrounded by larch. Camp on the shore. Cold water, but if you've made it this far you'll swim.",
          },
          {
            n: "04", t: "Return ride to Khavirga camp",
            stops: ["Khagiin Khar Lake", "Taiga trail", "Khavirga camp"],
            acts: ["horse", "camp", "meal"],
            d: "Back along the same trail through the taiga. Reach the area below Khavirga Pass in the afternoon and set up tents. Campfire, stories, quiet wilderness after a long day.",
            more: "Same trail, different light, different mood. Saddle-time is real by now. We make a fire at the Khavirga area, have a proper dinner — vodka if anyone brought some, stories whether you brought any or not.",
          },
          {
            n: "05", t: "Back to the family",
            stops: ["Khavirga trail", "Family ger", "Ger kitchen"],
            acts: ["horse", "ger", "meal"],
            d: "Pack up and ride back to the family camp. Night in gers, cooking traditional dishes with the local women — a warm evening, a taste of everyday nomad life.",
            more: "Final ride out of the taiga. Reach the family camp by late afternoon. The women of the family will be cooking — buuz, khuushuur, things you didn't know you needed. Hot wash if the camp has the setup. Real ger bed for the first time in four nights.",
          },
          {
            n: "06", t: "Chinggis Statue & UB",
            stops: ["Family ger", "Chinggis Khaan Statue", "Ulaanbaatar"],
            acts: ["drive", "visit", "city"],
            d: "Drive back to the city. Stop at the iconic Chinggis Khaan Equestrian Statue on the way. Arrive in UB late afternoon.",
            more: "Goodbye to the family and the horses. The statue is on the route back — 40 metres of stainless-steel Chinggis on a horse, with a viewing platform on top. UB by late afternoon.",
          },
        ]}
      />

      {/* PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The taiga" title="What a horse week looks like." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC01684.jpg`} alt="Orkhon / taiga canyon" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="By day three the horses know your name before your people do. You catch yourself talking to them."
              attribution="— Something I keep noticing."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[`${G}/DSC02365.jpg`, `${G}/DSC02098.jpg`, `${G}/DSC01687.jpg`, `${G}/DSC01690.jpg`].map((src) => (
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
            className="rounded-2xl border border-lime-800/30 bg-lime-900/10 p-8 md:p-10"
          >
            <p className="text-lime-300 text-[11px] tracking-[0.3em] uppercase mb-3">Co-host on this tour</p>
            <h2 className="font-display text-2xl md:text-3xl text-sand-100 mb-4">
              A local horse guide joins the group.
            </h2>
            <p className="text-sand-400 leading-relaxed text-base md:text-lg">
              Horses don&apos;t follow GPS, and neither does the taiga. Tugi is with you from UB, but on the ride itself we travel with a local horse guide who knows the Khavirga Pass trail by heart, lives with these horses, and can read the forest like a map. You&apos;re riding with the people who do this for real — not rented hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GER ETIQUETTE */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHead kicker="In the ger" title="Your first ger visit." center accent={ACCENT} />
          <GerEtiquette />
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$900"
        included={[
          "UB ↔ Terelj transfers (private car)",
          "Horses, tack, and local horse guide for 4 riding days",
          "Family ger stays (nights 1, 5)",
          "Tent camps (nights 2, 3, 4) — tents, sleeping pads, kitchen",
          "All meals on the trail — cooked fresh at camp",
          "English/Mongolian guide (Tugi)",
          "Chinggis Khaan Statue entry on the way home",
          "Khan Khentii protected-area permits",
        ]}
        bring={[
          "Hiking boots + riding-friendly trousers (long + stretchy)",
          "A padded seat-pad if you want extra cushion (I can lend one)",
          "Sleeping bag rated to 0 °C",
          "Rain shell — summer showers happen",
          "A light riding helmet if you prefer (we have a few to lend)",
          "Head torch, sunhat, bug spray, blister tape",
          "Cash — no ATMs after UB",
        ]}
        note="Horse experience isn&rsquo;t required but 2–3 prior rides helps. We pair you with a patient horse and go slow on day 2."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How many hours in the saddle per day?", a: "Days 2 and 4 are ~6 hours with breaks. Day 3 is shorter, ~3–4 hours. Day 5 is ~2 hours. It&apos;s real time on a horse — expect to feel it." },
          { q: "What if I can't keep riding?", a: "Our support 4×4 stays near the trail on the first and last rides. If you genuinely can't continue, we swap to the vehicle. We've never had to on this tour, but the option is there." },
          { q: "How cold at night?", a: "Late June in the taiga: 5–12 °C overnight. The campfire helps. Your 0 °C bag will be comfortable." },
          { q: "Are there bugs?", a: "Yes — June is mosquito season in the forest. Long sleeves + Deet-based repellent is essential. After day 2 you stop noticing them." },
          { q: "What's the trail like?", a: "Soft forest floor, stream crossings, one real pass (Khavirga, ~1,800 m). Gentle elevation. The horses do the work — the riding is sustained but not technical." },
          { q: "Can solo travellers join?", a: "Absolutely. Most riders come solo. The group bonds fast on this one." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="June 22 – 27, 2026 · $900"
        subtitle="Small group of 6 – 8. Limited horses — reserve early. Bring a friend and save 15% each."
        emailSubject="Khagiin Khar Nuur horse trek · June 22"
      />
    </div>
  );
}
