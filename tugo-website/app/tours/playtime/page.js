"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  TourHero, VitalsStrip, Prologue, Itinerary,
  IncludedBring, TourFAQ, TourCTA,
  SectionHead, PullQuote,
} from "@/components/tours/kit";

const G = "/images/gallery";

const ACCENT = "emerald";

export default function PlaytimePage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <TourHero
        image={`${G}/DSC01558.jpg`}
        kicker="Festival meet-up"
        meta={["1 departure", "5 days"]}
        title="Playtime"
        subtitle="Meet young people around Mongolia's biggest music festival. Ticket, 3 meals a day, UB city tour, and a Terelj day trip — all in. Half festival, half fresh-air reset."
        accent={ACCENT}
      />

      <VitalsStrip
        items={[
          { l: "Dates", v: "Jul 1 – 5, 2026" },
          { l: "Days", v: "5" },
          { l: "Group", v: "6 – 8" },
          { l: "Region", v: "UB + Terelj" },
          { l: "Vibe", v: "Social · young" },
          { l: "Price", v: "$750" },
        ]}
      />

      <Prologue
        accent={ACCENT}
        title="Come for the festival, stay for the people."
        paragraphs={[
          "Playtime is Mongolia&apos;s biggest music festival — three days of Mongolian and international acts on an open field outside Ulaanbaatar. For me it&apos;s the one weekend a year when the city empties into the countryside and you meet everyone.",
          "This tour is built around the festival, but it&apos;s not <em>just</em> the festival. We gather the night before — a pre-party dinner so you arrive with names, faces, and a group. Then the festival. Then a city day to recover in UB. Then a Terelj day trip to breathe. Then home.",
          "It&apos;s the cheapest tour on the calendar on purpose. I want it to be the one that doesn&apos;t scare off students, first-time travellers, or anyone who just wants to show up and see who they meet.",
        ]}
      />

      <Itinerary
        accent={ACCENT}
        title="Five days, three worlds."
        days={[
          { n: "01", t: "Pre-party in UB", d: "Arrive in UB. Group dinner at a local spot — Mongolian BBQ, cheap beer, introductions. Easy night. You&apos;ll know everyone by morning." },
          { n: "02", t: "Festival Day 1", d: "Drive to the festival site (~1 hour). Camp on the field. Mongolian hip-hop, rock, electronic — three stages. We stay together or split up as the group prefers." },
          { n: "03", t: "Festival Day 2", d: "Same site, bigger energy. Main international act. Late night around the fire after the music ends." },
          { n: "04", t: "City recovery day in UB", d: "Return to the city in the morning. Casual UB tour — Gandan monastery, Zaisan hill, a hot lunch. Evening is yours — most people nap." },
          { n: "05", t: "Terelj day trip + home", d: "Day trip to Gorkhi-Terelj. Turtle Rock, a short horseback ride, lunch at a family ger. Drop-off back in UB by 7 pm — fly out that night or stay on." },
        ]}
      />

      {/* WHAT'S IN THE $750 */}
      <section className="py-20 md:py-28 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead kicker="The price covers" title="Everything you need for 5 days." center accent={ACCENT} />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎟", title: "Festival ticket", body: "3-day general admission — our seats, not yours to figure out." },
              { icon: "🍽", title: "3 meals a day", body: "Breakfasts, lunches, dinners. Local food, no hunger." },
              { icon: "🏛", title: "UB city tour", body: "Gandan, Zaisan, a museum — the greatest hits." },
              { icon: "🌲", title: "Terelj day trip", body: "Horses, Turtle Rock, family ger lunch." },
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
          <SectionHead kicker="The vibe" title="What the weekend looks like." center accent={ACCENT} />

          <div className="space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[21/9] overflow-hidden rounded-2xl"
            >
              <Image src={`${G}/DSC01558.jpg`} alt="Open steppe near UB" fill className="object-cover" sizes="100vw" />
            </motion.div>

            <PullQuote
              accent={ACCENT}
              quote="You come for the music. You leave with friends on four continents."
              attribution="— Someone who came solo two years in a row."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
              {[`${G}/DSC02098.jpg`, `${G}/DSC08283.jpg`, `${G}/DSC01820.jpg`, `${G}/DSC02365.jpg`].map((src) => (
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
          "3-day festival ticket (general admission)",
          "All transfers: UB → festival → UB → Terelj → UB",
          "3 meals a day, all 5 days",
          "2 nights camping at the festival (tent + mat included)",
          "2 nights in a UB hostel (shared dorm, private option available)",
          "UB city tour + Terelj day trip",
          "English/Mongolian guide (Tugi) throughout",
        ]}
        bring={[
          "Festival-appropriate clothes (it rains; it's cold at night)",
          "A warm jacket for festival evenings",
          "Sleeping bag rated to 5 °C (or rent for $30)",
          "Rain shell",
          "Water bottle (we refill)",
          "Earplugs if you're a light sleeper",
          "Photo ID (festival entry requires it)",
        ]}
        note="Private UB hotel room available for +$100 total. Flag it when you apply."
      />

      <TourFAQ
        accent={ACCENT}
        items={[
          { q: "Is this the actual Playtime Festival?", a: "Yes. Playtime is Mongolia&apos;s biggest outdoor music festival — runs every July outside UB. The ticket we include is the full 3-day general admission." },
          { q: "What kind of music?", a: "Mongolian hip-hop, rock, and pop are the headliners — think The Hu, Magnolian, Rokit Bay. Each year there's 2–3 international acts across genres. Check the 2026 lineup once it drops in the spring." },
          { q: "How old are the people on this tour?", a: "Most of our travellers are 20 – 35. If you're outside that range and up for the vibe, you're welcome — I just want you to know the social energy is young." },
          { q: "Do I have to go to all of the festival?", a: "Nope. You can skip a day, nap, walk off the field — nothing is mandatory. The included ticket covers all 3 days but using it is your call." },
          { q: "What if I don't drink?", a: "Totally fine. Plenty of us on the trip don&apos;t. Mongolia also has great kombucha — <em>tsaan suutei tsai</em>." },
          { q: "Can I bring a partner?", a: "Yes — and take 15% off each of you." },
        ]}
      />

      <TourCTA
        accent={ACCENT}
        title="July 1 – 5, 2026 · $750"
        subtitle="The easiest way to see the festival with company. Small group of 6 – 8. Applications open — spots go fast once the lineup drops."
        emailSubject="Playtime Festival · July 2026"
      />
    </div>
  );
}
