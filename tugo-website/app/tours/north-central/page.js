"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const IMG = "/images/tours/north-central";

// Photo credits live here so captions stay tidy
const gallery = [
  {
    src: `${IMG}/DSC02464.jpg`,
    alt: "Khuvsgul Lake framed through larch branches",
    caption: "Camp mornings by Khuvsgul",
  },
  {
    src: `${IMG}/DSC02471.jpg`,
    alt: "Speedboat on turquoise Khuvsgul water",
    caption: "Across the Dark Blue Pearl",
  },
  {
    src: `${IMG}/DSC02481.jpg`,
    alt: "Rocky lookout from the boat on Khuvsgul",
    caption: "Lookouts and rocky islands",
  },
  {
    src: `${IMG}/DSC02514.jpg`,
    alt: "The open road through green steppe and distant mountains",
    caption: "The long drive north",
  },
  {
    src: `${IMG}/DSC02550.jpg`,
    alt: "Sunset over a northern Mongolian town",
    caption: "Town light at the end of the day",
  },
];

const chapters = [
  {
    n: "01",
    title: "The long drive up",
    subtitle: "UB → Bulgan",
    body:
      "We roll out of Ulaanbaatar early, trade tarmac for open steppe, and settle into the rhythm of a proper Mongolian road trip. First night: Huuchin ger camp in Bulgan — warm stove, hot tea, quiet.",
    img: `${IMG}/DSC02514.jpg`,
  },
  {
    n: "02",
    title: "Khuvsgul, the Dark Blue Pearl",
    subtitle: "Lake camping · taiga · hikes",
    body:
      "Four or five slow days along the shore — shoreline camp, cold morning swims, horseback through the taiga, a boat day across the water, and long evenings around the fire. This is the heart of the trip.",
    img: `${IMG}/DSC02464.jpg`,
  },
  {
    n: "03",
    title: "Boat, rock, and the far shore",
    subtitle: "On the water",
    body:
      "A day on a fast boat — rocky islands, cliff-side lookouts, the lake opening up in every direction. Back to shore for grilled fish and a sauna, if we're lucky with the camp.",
    img: `${IMG}/DSC02481.jpg`,
  },
  {
    n: "04",
    title: "Through Zavkhan & central steppe",
    subtitle: "Back south, slowly",
    body:
      "We point south through Zavkhan and into central Mongolia — larch forests turning to open grassland, nomadic camps, hot-spring stops where available, and one last night out under the stars before coming home.",
    img: `${IMG}/DSC02550.jpg`,
  },
];

const vitals = [
  { label: "Dates", value: "July 21 – 31, 2026" },
  { label: "Duration", value: "11 days" },
  { label: "Region", value: "North + Central" },
  { label: "Group size", value: "6–8" },
  { label: "Lodging", value: "Camping & ger, occasional hotel" },
  { label: "Pace", value: "Slow, with drive days" },
];

export default function NorthCentralPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* HERO */}
      <section className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={`${IMG}/DSC02464-hero.jpg`}
          alt="Khuvsgul Lake at rest, framed by larch branches"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/40 via-transparent to-night-950" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 text-sand-300 text-xs tracking-[0.3em] uppercase mb-4 hover:text-sand-100 transition-colors"
              >
                ← 2026 Season
              </Link>
              <p className="text-sky-300 text-xs tracking-[0.3em] uppercase mb-3">
                Long North Route
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-white mb-5 leading-[0.95]">
                North & Central
                <br />
                Loop
              </h1>
              <p className="text-sand-200 text-lg md:text-xl max-w-2xl leading-relaxed">
                Eleven days up to the Dark Blue Pearl and back — camping on the shore of Khuvsgul, riding through the taiga, then a slow return through Zavkhan and central Mongolia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VITALS STRIP */}
      <section className="border-y border-sand-900/30 bg-night-900/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-6 gap-6 text-center">
          {vitals.map((v) => (
            <div key={v.label}>
              <p className="text-sand-500 text-[10px] tracking-[0.2em] uppercase mb-1.5">
                {v.label}
              </p>
              <p className="text-sand-100 font-display text-sm md:text-base">
                {v.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO / VIBE */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sky-400 text-xs tracking-[0.3em] uppercase mb-4">
              The trip
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-8 leading-tight">
              A week on the water, the rest on the road.
            </h2>
            <div className="space-y-5 text-sand-300 text-lg leading-relaxed">
              <p>
                The north has its own pace. You can feel it the moment you leave the main road — the steppe opens up, the air thins, the phone stops buzzing. Khuvsgul is clear enough to drink from and cold enough that a morning swim is an event.
              </p>
              <p>
                We&apos;re mostly camping on this one. A few nights in traditional gers, the occasional hotel when we pass through a town, but the core of the trip is tent-and-shore living — cooking outside, watching the light move across the mountains, waking up to larch forests and cold blue water.
              </p>
              <p>
                No fixed schedule. If the weather&apos;s holding we stay. If someone wants a rest day, we take one. That&apos;s the whole idea — ride the wind of the day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sky-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
            How the days move
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-16 text-center">
            Four chapters, one trip
          </h2>

          <div className="space-y-16 md:space-y-24">
            {chapters.map((ch, idx) => (
              <motion.div
                key={ch.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={ch.img}
                    alt={ch.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <p className="text-sky-400 text-xs tracking-[0.25em] font-medium mb-3">
                    CHAPTER {ch.n}  ·  {ch.subtitle}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-sand-100 mb-5 leading-tight">
                    {ch.title}
                  </h3>
                  <p className="text-sand-400 text-lg leading-relaxed">{ch.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sky-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
            From the field
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-12 text-center">
            A few frames
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((g, idx) => (
              <motion.figure
                key={g.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative overflow-hidden rounded-xl group ${
                  idx === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <figcaption className="absolute bottom-3 left-3 right-3 text-sand-100 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {g.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL BOX + CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-sky-800/30 bg-gradient-to-br from-sky-900/25 via-night-900/60 to-night-900/80 p-8 md:p-12 backdrop-blur-sm"
          >
            <p className="text-sky-300 text-xs tracking-[0.3em] uppercase mb-3">
              Ready to ride
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-4">
              July 21 – 31, 2026
            </h2>
            <p className="text-sand-300 text-lg mb-8 max-w-xl leading-relaxed">
              Small group, flexible days, long nights by the lake. Pricing and the final itinerary are still being locked in — get in touch and we&apos;ll send everything as soon as it&apos;s set.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-night-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold transition-colors rounded-sm"
              >
                Reserve a Spot
              </Link>
              <a
                href="mailto:hello@tugo.mn?subject=North%20%26%20Central%20Loop%20—%20July%2021"
                className="inline-flex items-center justify-center gap-2 border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-300 hover:text-sand-100 px-8 py-4 text-sm uppercase tracking-[0.15em] transition-colors rounded-sm"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="text-sand-500 hover:text-sand-300 text-xs tracking-[0.3em] uppercase transition-colors"
            >
              ← Back to all tours
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
