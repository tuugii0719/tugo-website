"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

export default function WhyMongoliaPage() {
  const sections = [
    {
      image: "/images/why-mongolia/landscape1.jpg",
      title: "Infinite Horizons",
      body: "Mongolia is the 18th largest country on Earth, yet one of the least densely populated. Vast grasslands stretch unbroken to the horizon. Mountains rise from green valleys. The Gobi desert meets the sky. Here, space isn't an absence — it's a presence you can feel.",
      reverse: false,
    },
    {
      image: "/images/why-mongolia/nomad1.jpg",
      title: "A Living Heritage",
      body: "Nearly half of Mongolia's population still lives nomadically or semi-nomadically. Families move with the seasons, living in gers on the open steppe. Their hospitality is legendary — stop at any ger and you'll be welcomed with tea, stories, and warmth.",
      reverse: true,
    },
    {
      image: "/images/why-mongolia/horse1.jpg",
      title: "Born in the Saddle",
      body: "Mongolians learn to ride before they can walk. Horses aren't just transportation — they're family, freedom, and a way of life. On our tours, you ride alongside herders whose ancestors rode with empires.",
      reverse: false,
    },
    {
      image: "/images/why-mongolia/steppe1.jpg",
      title: "Where Roads Disappear",
      body: "Outside the capital, paved roads give way to dirt tracks, then to nothing at all. You navigate by landmarks, by instinct, by the curve of the land. This is what real exploration feels like — no GPS, no guardrails, just the open world.",
      reverse: true,
    },
    {
      image: "/images/why-mongolia/desert1.jpg",
      title: "Silence You Can Hear",
      body: "The Gobi is not the barren wasteland you might imagine. It's a landscape of dramatic contrasts — towering sand dunes beside ice-filled canyons, fossil beds from the age of dinosaurs, and sunsets that paint the sky in impossible colors.",
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center text-center">
        <Image
          src="/images/why-mongolia/landscape1.jpg"
          alt="Mongolia Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/40 via-night-950/30 to-night-950" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-400">
              WHY MONGOLIA
            </p>
            <h1 className="mb-6 max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
              One of the Last Truly Untouched Places on Earth
            </h1>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-2xl text-sand-400">↓</span>
          </motion.div>
        </div>
      </section>

      {/* Alternating Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`relative flex min-h-[80vh] items-center ${
            index % 2 === 1 ? "bg-night-900/20" : ""
          }`}
        >
          <FadeIn>
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  section.reverse ? "lg:grid-flow-col lg:grid-cols-2" : ""
                }`}
              >
                {/* Image */}
                <div className={section.reverse ? "lg:order-last" : ""}>
                  <div className="relative overflow-hidden rounded lg:aspect-[3/4] aspect-[4/3]">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h2 className="mb-6 font-display text-3xl text-sand-100 md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-sand-300">
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

      {/* Bottom CTA Section */}
      <section className="py-24 text-center">
        <FadeIn>
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="mb-4 font-display text-3xl text-sand-100">
              Ready to see it for yourself?
            </h2>
            <p className="mb-8 text-sand-400">
              Choose your route and start the journey.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/tours"
                className="inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
              >
                Explore Tours
              </Link>
              <Link
                href="/book"
                className="inline-block border border-sand-400/40 px-6 py-3 text-sm uppercase tracking-wider text-sand-200 transition hover:bg-sand-400/10"
              >
                Book Your Adventure
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
