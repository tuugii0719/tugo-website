"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA, Departures,
  SectionHead, PullQuote, GerEtiquette,
} from "@/components/tours/kit";

const G = "/images/gallery";
const D = "/images/destinations";

const ACCENT = "teal";

export default function TerelJEscapePage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* HERO — soft forest weekend */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image src={`${D}/terelj-park.jpg`} alt="Gorkhi-Terelj National Park" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-teal-900/40 to-emerald-900/30" />
        </div>
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-400/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-400/12 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <Link href="/tours" className="inline-flex items-center gap-2 text-sand-200 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-teal-200 transition-colors">
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-teal-200 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Forest weekend · 3 departures · any age
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Terelj</span>
                  <span className="block bg-gradient-to-r from-teal-300 via-emerald-300 to-lime-300 bg-clip-text text-transparent italic">
                    Escape
                  </span>
                </h1>
                <p className="text-sand-100 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  A gentle weekend in Gorkhi-Terelj — Turtle Rock, alpine rides, Aryabal Monastery, khorkhog with a family, and a night in a ger camp 90 minutes from the city. Three weekends across the season.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Departures", v: "3" },
                    { l: "Days", v: "3 each" },
                    { l: "Group", v: "8 – 16" },
                    { l: "Price", v: "$350" },
                  ].map((p) => (
                    <span key={p.l} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/55 backdrop-blur-md border border-teal-300/30">
                      <span className="text-teal-200 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-white text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <Link href="/book" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-night-950 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(20,184,166,0.6)]">
                  Reserve a Spot
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/30 to-emerald-400/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-teal-200/30 shadow-2xl">
                  <Image src={`${G}/DSC01810.jpg`} alt="Family ger camp evening" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Family camp</p>
                    <p className="font-display text-lg leading-tight">Khorkhog night</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <VitalsStrip
        items={[
          { l: "Days", v: "3" },
          { l: "Price", v: "$350" },
          { l: "Group", v: "8 – 16" },
          { l: "Region", v: "Khentii foothills" },
          { l: "Pace", v: "Easy · any age" },
          { l: "Start / end", v: "Ulaanbaatar" },
        ]}
      />

      <Departures
        accent={ACCENT}
        list={[
          { label: "Jun departure", dates: "Jun 5 – 7, 2026", days: 3 },
          { label: "Jul departure", dates: "Jul 16 – 18, 2026", days: 3 },
          { label: "Aug departure", dates: "Aug 11 – 13, 2026", days: 3 },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="The easiest yes of the season."
        paragraphs={[
          "Ninety minutes from Ulaanbaatar and you&apos;re in a different country. Terelj is where I take my own family — the granite stacks in the forest, the little meandering river, the one ger camp that makes the best khorkhog on the shoulder of Khentii.",
          "This is the tour I run three times a year on purpose. It&apos;s short, it&apos;s warm, it&apos;s any-age. First-time travellers come out of this one ready for the bigger trips. Longer-time Mongolia friends come back just to sit by the fire.",
          "If the rest of the calendar is too much, this is the one. I can all but guarantee you&apos;ll want to stay an extra night.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Three days, one weekend."
        days={[
          {
            n: "01", t: "UB → Terelj",
            stops: ["Ulaanbaatar", "Chinggis Khaan Statue", "Family ger camp"],
            acts: ["drive", "visit", "horse", "ger", "meal"],
            d: "Drive out late morning. Stop at the Chinggis Khaan Equestrian Statue on the way. Arrive at the family ger camp for lunch, afternoon horseback, hot-stone khorkhog dinner.",
            more: "Late-morning start so we beat UB traffic. The Chinggis Statue is worth the 40-minute stop — climb inside if you want the view. At the ger camp the family will have lunch ready (probably bansh and milk tea), then we saddle up for a couple of hours in the meadows. Khorkhog goes on the fire while you're still riding.",
          },
          {
            n: "02", t: "Turtle Rock · Aryabal Monastery",
            stops: ["Aryabal Meditation Temple", "Turtle Rock", "Family ger"],
            acts: ["hike", "visit", "horse"],
            d: "Up early for the Aryabal Meditation Temple (the staircase shaped like an elephant's trunk). Walk or ride to Turtle Rock. Afternoon free — nap, swim, or head up a hill with the family kids.",
            more: "Aryabal is quiet if we get there before the day-trippers — the elephant-trunk staircase is the photo, but the temple itself is worth the slow walk-through. Turtle Rock is more of a stretch than a hike. Free afternoon means you choose: nap in the ger, swim in the river, or ride up a ridge with the family kids who'd love to take you.",
          },
          {
            n: "03", t: "Terelj → UB",
            stops: ["Family ger", "Park viewpoint", "Ulaanbaatar"],
            acts: ["meal", "drive", "city"],
            d: "Slow morning. Pack up after a final family breakfast, drive back via a viewpoint. Drop-off in UB by mid-afternoon.",
            more: "No rush — final breakfast with the family, slow pack-up, photos. We stop at a viewpoint on the way back if the light is good. Drop-off in central UB by mid-afternoon, giving you the evening for showers and dinner if you're staying on.",
          },
        ]}
      />

      {/* PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The weekend" title="What Terelj looks like." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC01558.jpg`} alt="Terelj steppe and sky" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="In three days you meet a family, ride a horse, eat off the fire, and remember what quiet sounds like. That's the whole thing."
              attribution="— Something I tell every first-timer."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[`${G}/DSC01810.jpg`, `${G}/DSC01820.jpg`, `${G}/DSC01846.jpg`, `${G}/DSC01861.jpg`].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOD + GER ETIQUETTE */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHead kicker="Family dinner" title="Khorkhog night." accent={ACCENT} />
            <p className="text-sand-300 text-lg leading-relaxed mb-4">
              On night one we eat <em>khorkhog</em> — lamb, potatoes, carrots, and onions seared in a milk can with river stones pulled hot from the fire. The stones cook the food from the inside out. They&apos;re also passed around after dinner — you hold them to soak up the heat.
            </p>
            <p className="text-sand-400 leading-relaxed">
              If the weather is too wet for an open fire, we move inside the ger and switch to <em>buuz</em> dumplings, still hand-made, still by people you&apos;ll know by first name within an hour.
            </p>
          </div>
          <GerEtiquette />
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$350"
        included={[
          "Return transfer from UB (private car, ~90 min each way)",
          "2 nights in a family ger camp (shared)",
          "All meals on the road (khorkhog, buuz, breakfasts)",
          "1 × horseback session with local horse family",
          "Aryabal Monastery entrance fee",
          "English/Mongolian guide (Tugi) + driver",
        ]}
        bring={[
          "Comfortable clothes for horseback and hiking",
          "A warm layer — nights can drop to 8 °C",
          "Rain shell (Terelj catches thunderstorms)",
          "Headlamp for the ger",
          "Closed shoes",
          "Any personal medications",
        ]}
        note="Under-12s are welcome with a parent. Kids are free under 5; half-price 5–12."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "How is this different from the other weekend Terelj day tours?", a: "Most day tours from UB take you to Turtle Rock and back in 8 hours. You see the rock, you buy a souvenir, you're done. Ours is an actual weekend — a family stay, two meals with them, horses, Aryabal, and the time to actually <em>be</em> there instead of just arriving and leaving." },
          { q: "Is it okay if I don't ride horses?", a: "Totally fine. The horseback session is optional. There are plenty of walks, river spots, and a ger to read in." },
          { q: "What if the weather turns?", a: "We run rain or shine. Ger is warm, khorkhog is better in the rain, and Turtle Rock looks incredible with clouds rolling in. Only cancellation would be an actual safety issue like a flooded road — which is rare." },
          { q: "How many people in the group?", a: "8–16. These departures often book up with families and friend groups, so the vibe tilts social. If you want a smaller private version, message me." },
          { q: "Can I combine this with another tour?", a: "Yes — many people do Terelj (Jun 5–7) then rest a couple days and join Gobi Glimpse (Jun 10–18). Or Terelj (Aug 11–13) right before Southern Gobi + Central (Aug 18–28). Tell me what you're thinking and I'll suggest a combo." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="3 departures · $350 each"
        subtitle="Pick the weekend that fits. Bring a friend and save 15% each. Applications open now."
        emailSubject="Terelj Escape · 2026"
      />
    </div>
  );
}
