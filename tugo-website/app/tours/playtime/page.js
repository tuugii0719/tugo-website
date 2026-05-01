"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TourHero, VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote,
} from "@/components/tours/kit";

const G = "/images/gallery";
const P = "/images/playtime";

// Image paths with fallback to gallery photos until the user drops the real
// festival shots (the crowd photo and the 2026 lineup poster) into
// /public/images/playtime/ as `hero.jpg` and `poster.jpg`.
const heroImage = `${G}/DSC02098.jpg`;      // swap to `${P}/hero.jpg` when ready
const crowdImage = `${G}/DSC02098.jpg`;      // swap to `${P}/crowd.jpg` when ready
const posterImage = `${G}/DSC02365.jpg`;     // swap to `${P}/poster.jpg` when ready

const ACCENT = "emerald";

// Real Playtime 2026 lineup — Ulaanbaatar, July 2-4
const lineup = [
  {
    day: "Thursday",
    date: "Jul 2",
    headliner: "MOLCHAT DOMA",
    highlights: [
      "Teresa in the Moon", "Magnolian", "Blindfold", "Night Train",
      "Aaguu", "Diskonnected", "Fat Hamster × Kang New", "Jesse You",
      "Ouissam", "Torden",
    ],
  },
  {
    day: "Friday",
    date: "Jul 3",
    headliner: "KINGS OF CONVENIENCE · DIIV",
    highlights: [
      "Fazi", "OMA × Shing02 with Spin Master A-1", "Horse Radio", "The Colors",
      "Dotor Khuree", "Aisha Devi", "b.ai", "JASSS", "Gabbs",
      "Rhom Omit", "Sailor Honeymoon",
    ],
  },
  {
    day: "Saturday",
    date: "Jul 4",
    headliner: "STEREOLAB · HYUKOH",
    highlights: [
      "Helena Hauff", "DJ Stingray 313", "Identified Patient", "The Lemons",
      "HONH", "Lord Spikeheart", "IWKC", "One Click Straight",
      "Fat Cat Jazz Club", "Tumen Ekh Ensemble",
    ],
  },
];

export default function PlaytimePage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <TourHero
        image={heroImage}
        kicker="Playtime Music Festival · UB"
        meta={["1 departure", "5 days", "Jul 1 – 5"]}
        title="Playtime<br/>Music Festival"
        subtitle="Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh — Mongolia&rsquo;s biggest festival. A 5-day crew trip built around the long weekend. Ticket, meals, camping, city, Terelj — all in."
        accent={ACCENT}
      />

      <VitalsStrip
        items={[
          { l: "Tour dates", v: "Jul 1 – 5, 2026" },
          { l: "Festival", v: "Jul 2 – 4" },
          { l: "Days", v: "5" },
          { l: "Group", v: "6 – 8" },
          { l: "Venue", v: "Playtime Field, Nalaikh" },
          { l: "Price", v: "$750" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Come for the headliners. Stay for the crew."
        paragraphs={[
          "Playtime is the festival weekend I build my July around. It runs in a field just outside Ulaanbaatar — three days, three stages, and a lineup that sneaks international acts into a Mongolian crowd in the middle of the steppe. 2026 brings Molchat Doma, Kings of Convenience, DIIV, Stereolab, and Hyukoh. That&apos;s a real roster.",
          "This tour is for the people who&apos;d go alone but would rather not. We gather Wednesday night before the gates open — introductions, Mongolian BBQ, cheap beer, you know everyone&apos;s name before you hear any music. Thursday through Saturday: the festival. Sunday is a reset — morning in UB, afternoon out at Terelj, drop-off that evening so you can fly home.",
          "It&apos;s the cheapest tour on the calendar on purpose. Festival ticket, all meals, camping kit, transfers, the hostel nights, the city day, the Terelj day — all in the $750. I want it to be a yes for students, first-timers, and anyone who just wants to show up and see who they meet.",
        ]}
      />

      {/* LINEUP */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead kicker="2026 Lineup" title="Who&rsquo;s playing." center accent={ACCENT} />

          <div className="grid md:grid-cols-3 gap-4">
            {lineup.map((day) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-emerald-800/30 bg-emerald-900/10 p-6 md:p-8 flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <p className="text-emerald-300 text-xs tracking-[0.25em] uppercase font-semibold">
                    {day.day}
                  </p>
                  <p className="text-sand-500 text-xs tracking-wider">{day.date}</p>
                </div>
                <h3 className="font-display text-lg md:text-xl text-sand-100 leading-tight mb-5">
                  {day.headliner}
                </h3>
                <div className="border-t border-emerald-800/30 pt-4 mt-auto">
                  <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-2">
                    Also playing
                  </p>
                  <p className="text-sand-400 text-xs leading-relaxed">
                    {day.highlights.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sand-500 text-xs mt-8 italic">
            80+ artists across three stages. Full lineup on <a href="https://playtime.mn" target="_blank" rel="noreferrer" className="text-sand-300 underline underline-offset-4 hover:text-sand-100">playtime.mn</a>.
          </p>
        </div>
      </section>

      <Itinerary
        accent={ACCENT}
        title="Five days, three acts."
        days={[
          { n: "01", t: "Wed Jul 1 · Arrive & pre-party", d: "Pick you up from UB airport or your hostel. Afternoon city tour — Gandan monastery, Zaisan hill, a Mongolian BBQ dinner. Names and faces before the field." },
          { n: "02", t: "Thu Jul 2 · Festival Day 1", d: "Drive out to Playtime Field in Nalaikh (~40 min). Set up camp. Day stages from 2 pm. Molchat Doma headlines. Stay at the festival overnight — tent included." },
          { n: "03", t: "Fri Jul 3 · Festival Day 2", d: "Second festival day. Kings of Convenience and DIIV headline. International stage builds late — Aisha Devi and JASSS if that&apos;s your thing." },
          { n: "04", t: "Sat Jul 4 · Festival Day 3", d: "Final day. Stereolab and Hyukoh headline. Helena Hauff and DJ Stingray 313 push the night late. Back to UB for one proper bed." },
          { n: "05", t: "Sun Jul 5 · Recovery + Terelj + fly out", d: "Slow UB morning. Drive out to Gorkhi-Terelj National Park after lunch — Turtle Rock, family ger dinner, khorkhog if you can still eat. Drop-off at UB airport or hostel by 9 pm." },
        ]}
      />

      {/* WHAT'S IN THE $750 */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead kicker="The price covers" title="Everything you need for 5 days." center accent={ACCENT} />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎟", title: "Festival ticket", body: "3-day general admission. We sort your wristband in advance." },
              { icon: "🍽", title: "3 meals a day", body: "Breakfasts, lunches, dinners on the road. Local food, no hunger." },
              { icon: "🏛", title: "UB city tour", body: "Gandan, Zaisan, lunch. Half-day, solid intro." },
              { icon: "🌲", title: "Terelj day trip", body: "Turtle Rock, horseback, family ger. Sunday reset." },
            ].map((x) => (
              <div key={x.title} className="rounded-xl border border-sand-800/40 bg-night-900/40 p-6">
                <div className="text-3xl mb-3">{x.icon}</div>
                <h3 className="font-display text-lg text-sand-100 mb-1">{x.title}</h3>
                <p className="text-sand-400 text-sm leading-relaxed">{x.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO ESSAY */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHead kicker="The field" title="What Playtime looks like." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={crowdImage} alt="Playtime crowd at night" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="You come for the music. You leave with friends on four continents."
              attribution="— Someone who came solo two years in a row."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[posterImage, `${G}/DSC08283.jpg`, `${G}/DSC01558.jpg`, `${G}/DSC02098.jpg`].map((src) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image src={src} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IncludedBring
        accent={ACCENT}
        priceLabel="$750"
        included={[
          "3-day Playtime Festival ticket (general admission)",
          "All transfers: airport → UB → festival → UB → Terelj → airport",
          "3 meals a day, all 5 days",
          "2 nights camping at the festival (tent + mat included)",
          "2 nights in a UB hostel (shared dorm — private option +$100)",
          "UB half-day city tour + Terelj day trip",
          "English/Mongolian guide (Tugi) throughout",
        ]}
        bring={[
          "Festival-appropriate clothes (rain possible, cold at night)",
          "Warm jacket for festival evenings (~8 °C)",
          "Sleeping bag rated to 5 °C (or rent for $30)",
          "Rain shell, ear plugs, water bottle",
          "Photo ID (wristband pickup requires passport)",
          "Phone charger / power bank",
          "Cash — MNT or USD, small bills for snacks",
        ]}
        note="Venue is <strong>Playtime Field, Nalaikh</strong> — ~40 minutes from central UB. Official festival dates: July 2 – 4, 2026."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "Who&apos;s on the 2026 lineup?", a: "Thursday: Molchat Doma + Teresa in the Moon, Magnolian, Night Train. Friday: Kings of Convenience, DIIV + Fazi, Aisha Devi, JASSS. Saturday: Stereolab, Hyukoh + Helena Hauff, DJ Stingray 313, Identified Patient. 80+ acts across three stages. Full lineup at playtime.mn." },
          { q: "How old is the Playtime crowd?", a: "Most of the crowd is 20 – 35, and about a third are international. It&apos;s the single most global weekend in the Mongolian calendar — expect Seoul, Berlin, Melbourne, New York all within ten metres." },
          { q: "Do I have to camp?", a: "The price includes camping at the festival site on the two nights of music. If you&apos;d rather come back to UB each night, say the word and we&apos;ll arrange transport — but camping is part of the experience most people love." },
          { q: "Is there food and water on site?", a: "Yes, Playtime has serious food vendors and refill stations. Your 3-meals-a-day on festival days are covered by us at the festival&apos;s better stalls (Mongolian BBQ, ramen, vegetarian options) — just show up." },
          { q: "What if there&apos;s a big act I don&apos;t want to miss?", a: "Tell me Wednesday and I&apos;ll build the Thursday-Saturday schedule so your must-sees are covered. We don&apos;t move as one blob — you&apos;re free to wander." },
          { q: "Can I bring a partner?", a: "Yes — and take 15% off each of you. Private hostel room on the UB nights is a $100 add-on." },
          { q: "What if I arrive late on Wednesday?", a: "No problem — the pre-party runs until about midnight. Text me your landing time and I&apos;ll hold dinner." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="July 1 – 5, 2026 · $750"
        subtitle="The easiest way to see the festival with company. Small group of 6 – 8. Applications open — spots go fast once travellers see the lineup."
        emailSubject="Playtime Festival · July 2026"
      />
    </div>
  );
}
