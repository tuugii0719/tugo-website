"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const P = "/images/playtime";

// Real Playtime 2026 lineup (from playtimefestival.com)
const lineup = [
  {
    day: "THURSDAY",
    date: "Jul 2",
    headliner: "MOLCHAT DOMA",
    accent: "from-fuchsia-500 to-violet-500",
    chip: "from-fuchsia-500/30 to-violet-500/20 border-fuchsia-400/40 text-fuchsia-200",
    text: "text-fuchsia-300",
    highlights: [
      "Teresa in the Moon", "Magnolian", "Blindfold", "Night Train",
      "Aaguu", "Diskonnected", "Fat Hamster × Kang New", "Jesse You",
      "Ouissam", "Torden",
    ],
  },
  {
    day: "FRIDAY",
    date: "Jul 3",
    headliner: "KINGS OF CONVENIENCE · DIIV",
    accent: "from-violet-500 to-pink-500",
    chip: "from-violet-500/30 to-pink-500/20 border-violet-400/40 text-violet-200",
    text: "text-violet-300",
    highlights: [
      "Fazi", "OMA × Shing02 with Spin Master A-1", "Horse Radio", "The Colors",
      "Dotor Khuree", "Aisha Devi", "b.ai", "JASSS", "Gabbs",
      "Rhom Omit", "Sailor Honeymoon",
    ],
  },
  {
    day: "SATURDAY",
    date: "Jul 4",
    headliner: "STEREOLAB · HYUKOH",
    accent: "from-pink-500 to-orange-400",
    chip: "from-pink-500/30 to-orange-400/20 border-pink-400/40 text-pink-200",
    text: "text-pink-300",
    highlights: [
      "Helena Hauff", "DJ Stingray 313", "Identified Patient", "The Lemons",
      "HONH", "Lord Spikeheart", "IWKC", "One Click Straight",
      "Fat Cat Jazz Club", "Tumen Ekh Ensemble",
    ],
  },
];

const itinerary = [
  {
    n: "01",
    day: "Wed Jul 1",
    title: "Pre-party in UB",
    body: "Pickup from UB airport or your hostel. Half-day city tour — Gandan, Zaisan. Group dinner — Mongolian BBQ, cheap beer, introductions. You'll know everyone&apos;s name before you hear any music.",
    color: "from-fuchsia-500/20 to-violet-500/10",
    nodeColor: "bg-fuchsia-500/20 border-fuchsia-400/40 text-fuchsia-200",
  },
  {
    n: "02",
    day: "Thu Jul 2",
    title: "Festival opens — Molchat Doma night",
    body: "40-min drive out to Playtime Field, Nalaikh. Set up camp. Day stages from 2pm. Molchat Doma headlines after dark. Stay overnight in your festival tent.",
    color: "from-violet-500/20 to-pink-500/10",
    nodeColor: "bg-violet-500/20 border-violet-400/40 text-violet-200",
  },
  {
    n: "03",
    day: "Fri Jul 3",
    title: "Kings of Convenience + DIIV",
    body: "Second festival day. The international stage builds late — Aisha Devi and JASSS pull the night, then DIIV's wall of guitars, then Kings of Convenience close it acoustic.",
    color: "from-violet-500/20 to-pink-500/10",
    nodeColor: "bg-violet-500/20 border-violet-400/40 text-violet-200",
  },
  {
    n: "04",
    day: "Sat Jul 4",
    title: "Stereolab + Hyukoh — final night",
    body: "Closing day. Helena Hauff and DJ Stingray 313 push the dance tent. Hyukoh and Stereolab close it on the main stage. Late drive back to UB — drop-off at airport or hostel by midnight.",
    color: "from-pink-500/20 to-orange-400/10",
    nodeColor: "bg-pink-500/20 border-pink-400/40 text-pink-200",
  },
];

export default function PlaytimeMusicFestivalPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100 overflow-x-hidden">

      {/* =================================================== */}
      {/* HERO — official poster on the right, info on the left */}
      {/* =================================================== */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-8 overflow-hidden">
        {/* Festival color wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-fuchsia-900/30 to-pink-900/20 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-fuchsia-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-8 hover:text-fuchsia-300 transition-colors"
          >
            ← 2026 Season
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 lg:order-1 order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-fuchsia-300 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                  Mongolia&apos;s biggest music festival · 2026
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6">
                  <span className="block">Playtime</span>
                  <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-pink-400 bg-clip-text text-transparent italic">
                    Music Festival
                  </span>
                </h1>
                <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Four days, one crew. Pre-party Wednesday in UB, then Thursday through Saturday at Playtime Field — Molchat Doma, Kings of Convenience, DIIV, Stereolab, Hyukoh and 80+ acts across three stages.
                </p>

                {/* Date pill row */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { l: "Tour", v: "Jul 1 – 4" },
                    { l: "Festival", v: "Jul 2 – 4" },
                    { l: "Group", v: "6 – 8" },
                    { l: "Price", v: "$750" },
                  ].map((p) => (
                    <span
                      key={p.l}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-night-950/60 backdrop-blur-md border border-fuchsia-400/30"
                    >
                      <span className="text-fuchsia-300 text-[10px] tracking-[0.2em] uppercase">{p.l}</span>
                      <span className="text-sand-100 text-sm font-medium">{p.v}</span>
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-fuchsia-500 to-violet-500 hover:from-fuchsia-400 hover:to-violet-400 text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-all shadow-[0_10px_30px_-10px_rgba(217,70,239,0.6)]"
                  >
                    Reserve a Spot
                  </Link>
                  <a
                    href="https://playtimefestival.com/mn"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-fuchsia-400/40 text-fuchsia-200 hover:bg-fuchsia-500/10 hover:border-fuchsia-300 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.15em] transition-colors"
                  >
                    Festival site →
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Official poster */}
            <div className="lg:col-span-5 lg:order-2 order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative max-w-sm mx-auto"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-pink-500/40 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                  <Image
                    src={`${P}/poster.jpg`}
                    alt="Playtime Festival 2026 lineup poster"
                    width={1200}
                    height={1500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <p className="text-center text-sand-500 text-[10px] tracking-[0.3em] uppercase mt-4">
                  Official 2026 lineup
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* HEADLINER STRIP — three big day cards */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-fuchsia-400 text-[11px] tracking-[0.4em] uppercase mb-3 font-medium">
              Three days at Playtime Field
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Who&rsquo;s closing each night.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {lineup.map((day, idx) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl overflow-hidden bg-night-900/60 backdrop-blur-sm border border-sand-800/40 group"
              >
                {/* gradient header bar */}
                <div className={`h-2 bg-gradient-to-r ${day.accent}`} />

                <div className="p-7 md:p-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <p className={`${day.text} text-[11px] tracking-[0.3em] font-bold`}>
                      {day.day}
                    </p>
                    <p className="text-sand-500 text-xs">{day.date}</p>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl text-white leading-[1.05] mb-6 min-h-[3.5em]">
                    {day.headliner}
                  </h3>

                  <div className="border-t border-sand-800/40 pt-5">
                    <p className="text-sand-500 text-[10px] tracking-[0.25em] uppercase mb-3">
                      Also playing
                    </p>
                    <p className="text-sand-300 text-xs md:text-sm leading-relaxed">
                      {day.highlights.join(" · ")}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-8 text-sand-500 text-xs">
            80+ artists across three stages · full lineup at{" "}
            <a
              href="https://playtimefestival.com/mn/lineup"
              target="_blank"
              rel="noreferrer"
              className="text-fuchsia-300 hover:text-fuchsia-200 underline underline-offset-4"
            >
              playtimefestival.com
            </a>
          </p>
        </div>
      </section>

      {/* =================================================== */}
      {/* FOUR-DAY ITINERARY — gradient timeline cards */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-violet-400 text-[11px] tracking-[0.4em] uppercase mb-3 font-medium">
              How the four days flow
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Pre-party. Camp. Repeat.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            {itinerary.map((d, idx) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={`relative rounded-3xl border border-sand-800/40 bg-gradient-to-r ${d.color} backdrop-blur-sm p-6 md:p-8`}
              >
                <div className="flex items-start gap-5">
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 ${d.nodeColor} flex items-center justify-center font-display text-base md:text-lg`}>
                    {d.n}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1">
                      {d.day}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-sand-100 mb-2">
                      {d.title}
                    </h3>
                    <p className="text-sand-400 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: d.body }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* WHAT'S INCLUDED — 4 icon cards with gradient ring  */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-fuchsia-400 text-[11px] tracking-[0.4em] uppercase mb-3 font-medium">
              All in $750
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Everything you need.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎟", title: "Festival ticket", body: "3-day general admission, wristband sorted in advance." },
              { icon: "🍽", title: "All meals", body: "3 meals a day at the festival's better food stalls." },
              { icon: "⛺", title: "Camping kit", body: "Tent, mat, transfers, all set up for you on arrival." },
              { icon: "🚐", title: "All transfers", body: "UB ↔ festival, plus airport pickup and drop-off." },
            ].map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                <div className="relative rounded-2xl bg-night-900/70 border border-sand-800/40 p-5 md:p-6 h-full">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <h3 className="font-display text-base md:text-lg text-sand-100 mb-1">{p.title}</h3>
                  <p className="text-sand-400 text-xs leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* FULL POSTER — second show of the lineup            */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-pink-400 text-[11px] tracking-[0.4em] uppercase mb-3 font-medium">
            See the whole roster
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight mb-10">
            80+ artists. One field.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative inline-block"
          >
            <div className="absolute -inset-6 bg-gradient-to-br from-fuchsia-500/40 via-violet-500/30 to-pink-500/40 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <Image
                src={`${P}/poster.jpg`}
                alt="Playtime Festival 2026 full lineup"
                width={1200}
                height={1500}
                className="w-full h-auto max-w-2xl mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================================================== */}
      {/* FAQ                                                 */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-violet-400 text-[11px] tracking-[0.4em] uppercase mb-3 font-medium">
              Common questions
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
              Quick answers.
            </h2>
          </div>

          <div className="space-y-2">
            {[
              { q: "Where is the festival?", a: "Playtime Field, Nalaikh — about 40 minutes southeast of central Ulaanbaatar. We handle the transfer." },
              { q: "Camping or hotel?", a: "Camping at the festival site for the three festival nights. Tent + mat included. Wednesday night is in a UB hostel before the trip." },
              { q: "How old is the crowd?", a: "Mid-20s to mid-30s, very international — Seoul, Berlin, NYC, Melbourne all show up. Single travellers fit in fast." },
              { q: "Can I skip a day?", a: "Yes — your wristband is yours for all three days but using it is optional. Some people nap, walk off the field, find the river." },
              { q: "What about food?", a: "Festival has serious food vendors (Mongolian BBQ, ramen, vegetarian). Your 3 meals/day on festival days are covered there." },
              { q: "Bring a partner?", a: "Yes — and take 15% off each of you with the pair discount. Private hostel room on the UB night is +$100 total." },
            ].map((f) => (
              <details
                key={f.q}
                className="group border border-sand-800/40 rounded-2xl bg-night-900/40 open:bg-night-900/60 transition-colors"
              >
                <summary className="cursor-pointer px-5 py-4 text-sand-200 font-medium flex items-center justify-between list-none">
                  <span>{f.q}</span>
                  <span className="text-fuchsia-400 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-sand-400 text-base leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================== */}
      {/* CTA                                                 */}
      {/* =================================================== */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-t border-fuchsia-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
          >
            {/* Festival gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-violet-600 to-pink-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/50 via-violet-900/40 to-pink-900/30" />

            <div className="relative">
              <p className="text-fuchsia-200 text-[11px] tracking-[0.4em] uppercase mb-4 font-medium">
                Limited spots
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1] mb-6">
                Jul 1 – 4, 2026
                <br />
                <span className="bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent italic">
                  $750 all in.
                </span>
              </h2>
              <p className="text-sand-100 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                Bring a friend, save 15% each. Spots go fast once travellers see the lineup — the international crowd books months out.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 bg-white text-night-950 px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] font-bold hover:bg-fuchsia-100 transition-colors"
                >
                  Reserve a Spot
                </Link>
                <a
                  href="mailto:Tuugii7019@gmail.com?subject=Playtime%20Music%20Festival%20%C2%B7%20July%202026"
                  className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-8 py-4 rounded-full text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-colors"
                >
                  Ask a question
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 text-center">
            <Link href="/tours" className="text-sand-500 hover:text-fuchsia-300 text-[11px] tracking-[0.3em] uppercase transition-colors">
              ← All tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
