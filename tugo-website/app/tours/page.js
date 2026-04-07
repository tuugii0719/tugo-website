"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const expeditions = [
  {
    id: "ara-festival",
    number: "01",
    title: "Ara Festival",
    dates: "June 20 – 26",
    duration: "7 Days",
    price: "$900",
    description:
      "Experience Mongolia's traditional Ara (airag) festival — fermented mare's milk, nomadic celebrations, and the start of summer on the open steppe.",
    status: "available",
    side: "left",
    route: "central",
  },
  {
    id: "playtime",
    number: "02",
    title: "Playtime",
    dates: "July 1 – 6",
    duration: "6 Days",
    price: "$850",
    description:
      "A playful introduction to Mongolia — horseback rides, eagle encounters, nomadic games, and wide-open grasslands before the big festival season kicks off.",
    status: "available",
    side: "right",
    route: "central",
  },
  {
    id: "naadam",
    number: "03",
    title: "Naadam Festival",
    dates: "July 8 – 13",
    duration: "6 Days",
    price: "$1,100",
    description:
      "Mongolia's legendary 'Three Games of Men' — wrestling, archery, and horse racing. The biggest cultural event of the year, experienced with a local guide.",
    status: "limited",
    side: "left",
    route: "central",
  },
  {
    id: "south-july",
    number: "04",
    title: "South & Central Mongolia",
    dates: "July 20 – Aug 5",
    duration: "17 Days",
    price: "$1,500",
    description:
      "The Gobi desert, singing sand dunes, ice canyons, and camel treks — then north through the steppe. Mongolia's dramatic contrasts in one epic journey.",
    status: "available",
    side: "right",
    route: "south-central",
  },
  {
    id: "south-august",
    number: "05",
    title: "South & Central Mongolia",
    dates: "Aug 8 – 20",
    duration: "13 Days",
    price: "$1,500",
    description:
      "Same legendary southern route — Gobi dunes, Flaming Cliffs, nomadic culture. A second departure for those who can't make July.",
    status: "available",
    side: "left",
    route: "south-central",
  },
  {
    id: "custom",
    number: "06",
    title: "Custom Adventure",
    dates: "Your Dates",
    duration: "Flexible",
    price: "From $900",
    description:
      "None of these dates work? Let's build your own Mongolian adventure. Private tours for any group size, any time between May and October.",
    status: "open",
    side: "right",
    route: "custom",
  },
];

function StatusBadge({ status }) {
  const styles = {
    available: "bg-green-500/20 text-green-400 border-green-500/30",
    limited: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    sold_out: "bg-red-500/20 text-red-400 border-red-500/30",
    open: "bg-sand-400/20 text-sand-400 border-sand-400/30",
  };
  const labels = {
    available: "Spots Available",
    limited: "Limited Spots",
    sold_out: "Sold Out",
    open: "Available to Book",
  };
  return (
    <span className={`inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function RoadTimeline() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* The winding road — central SVG path */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full pointer-events-none hidden md:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 2400"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Road shadow */}
            <path
              d="M400 0 C400 100, 650 150, 650 250 C650 350, 150 400, 150 500 C150 600, 650 650, 650 750 C650 850, 150 900, 150 1000 C150 1100, 650 1150, 650 1250 C650 1350, 400 1400, 400 1500"
              stroke="rgba(87,70,57,0.15)"
              strokeWidth="68"
              strokeLinecap="round"
              fill="none"
            />
            {/* Road base */}
            <path
              d="M400 0 C400 100, 650 150, 650 250 C650 350, 150 400, 150 500 C150 600, 650 650, 650 750 C650 850, 150 900, 150 1000 C150 1100, 650 1150, 650 1250 C650 1350, 400 1400, 400 1500"
              stroke="#2a2f38"
              strokeWidth="56"
              strokeLinecap="round"
              fill="none"
            />
            {/* Road center dashes */}
            <path
              d="M400 0 C400 100, 650 150, 650 250 C650 350, 150 400, 150 500 C150 600, 650 650, 650 750 C650 850, 150 900, 150 1000 C150 1100, 650 1150, 650 1250 C650 1350, 400 1400, 400 1500"
              stroke="#bfa88a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="16 12"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Mobile road — simple vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sand-700 via-sand-600 to-sand-700 md:hidden" />

        {/* Timeline items */}
        <div className="relative z-10 space-y-16 md:space-y-24">
          {expeditions.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 ${
                exp.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Number circle on the road */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-sand-400 flex items-center justify-center z-20 shadow-lg shadow-sand-400/30">
                <span className="text-night-950 font-bold text-sm">
                  {exp.number}
                </span>
              </div>

              {/* Spacer for mobile */}
              <div className="md:hidden w-14 flex-shrink-0" />

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 flex-1 max-w-full md:max-w-[42%] ${
                  exp.side === "left"
                    ? "md:pr-20 md:text-right"
                    : "md:pl-20 md:text-left"
                }`}
              >
                <div className="bg-night-900/80 border border-sand-900/20 backdrop-blur-sm rounded-lg p-6 hover:border-sand-800/40 transition-all duration-500 group">
                  {/* Date + Duration */}
                  <div className={`flex items-center gap-3 mb-3 flex-wrap ${
                    exp.side === "left" ? "md:justify-end" : ""
                  }`}>
                    <span className="text-sand-400 text-xs tracking-wider uppercase font-medium">
                      {exp.dates}
                    </span>
                    <span className="text-sand-600 text-xs">•</span>
                    <span className="text-sand-500 text-xs">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl text-sand-100 mb-2">
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sand-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Price + Status + CTA */}
                  <div className={`flex items-center gap-4 flex-wrap ${
                    exp.side === "left" ? "md:justify-end" : ""
                  }`}>
                    <div className="text-sand-300 text-sm font-medium">
                      {exp.status !== "open" && "From "}
                      {exp.price}
                    </div>
                    <StatusBadge status={exp.status} />
                  </div>

                  {/* Link */}
                  <div className={`mt-4 ${exp.side === "left" ? "md:text-right" : ""}`}>
                    {exp.id === "custom" ? (
                      <Link
                        href="/book"
                        className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300 inline-flex items-center gap-1"
                      >
                        Request a Tour <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    ) : (
                      <Link
                        href={`/tours/${exp.id}`}
                        className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300 inline-flex items-center gap-1"
                      >
                        View Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Empty spacer for the other side (desktop) */}
              <div className="hidden md:block flex-1 max-w-[42%]" />
            </motion.div>
          ))}
        </div>

        {/* Road endpoint */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 w-8 h-8 rounded-full bg-sand-600/40 items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-sand-400" />
        </div>
      </div>
    </section>
  );
}

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero Section */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <Image
          src="/images/tours/north-central.jpg"
          alt="Mongolia Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/30 to-night-950" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-sand-400 mb-4">
              2026 SEASON
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Your Journey Starts Here
            </h1>
            <p className="text-sand-300 max-w-xl mx-auto px-6">
              Follow the road through Mongolia&apos;s summer season — festivals, deserts, steppe, and everything in between.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Season overview bar */}
      <section className="border-b border-sand-900/20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap justify-center gap-8 text-center">
          {[
            { label: "Season", value: "June – August" },
            { label: "Tours", value: "5 Departures" },
            { label: "Group Size", value: "6–8 People" },
            { label: "Starting From", value: "$850" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-sand-500 text-xs tracking-wider uppercase mb-1">
                {stat.label}
              </p>
              <p className="text-sand-200 font-display text-lg">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Winding Road Timeline */}
      <RoadTimeline />

      {/* Route overview cards — quick comparison */}
      <section className="py-20 border-t border-sand-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
              ROUTES
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100">
              Three Ways to Explore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Festival Tours",
                duration: "5–7 Days",
                price: "From $850",
                items: ["Ara Festival", "Playtime", "Naadam"],
                desc: "Short, punchy trips built around Mongolia's biggest cultural moments.",
                color: "bg-sand-400",
              },
              {
                title: "South & Central",
                duration: "13–17 Days",
                price: "From $1,500",
                items: ["Gobi Desert", "Sand Dunes", "Steppe"],
                desc: "The full Mongolian experience — desert to grassland in one epic ride.",
                color: "bg-sand-500",
              },
              {
                title: "Custom Tours",
                duration: "Flexible",
                price: "From $900",
                items: ["Your dates", "Your group", "Your route"],
                desc: "Build your own adventure. Any time between May and October.",
                color: "bg-sand-600",
              },
            ].map((route, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="bg-night-900/60 border border-sand-900/15 p-8 hover:border-sand-800/30 transition-all duration-500 h-full flex flex-col">
                  <div className={`w-12 h-1 ${route.color} mb-6 rounded-full`} />

                  <h3 className="font-display text-xl text-sand-100 mb-1">
                    {route.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sand-500 text-xs">{route.duration}</span>
                    <span className="text-sand-700 text-xs">•</span>
                    <span className="text-sand-400 text-xs font-medium">{route.price}</span>
                  </div>

                  <p className="text-sand-400 text-sm leading-relaxed mb-5 flex-grow">
                    {route.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {route.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-sand-500">
                        <span className="text-sand-600">→</span>
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/book"
                    className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300"
                  >
                    Book Now →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-sand-900/20 py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 font-display text-2xl text-sand-100">
              Not sure which tour?
            </h2>
            <p className="mb-8 text-sand-400">
              Every journey is flexible and personal. Contact me and we&apos;ll find
              the perfect adventure for you.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/book"
                className="inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
              >
                Book Now
              </Link>
              <a
                href="mailto:hello@tugo.mn"
                className="inline-block border border-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-sand-400 transition hover:bg-sand-400/10"
              >
                Ask a Question
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
