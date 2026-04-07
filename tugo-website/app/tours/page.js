"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: "North & Central Mongolia",
      duration: "12 Days",
      price: "From $1,500",
      description:
        "Journey through Mongolia&apos;s pristine north — ancient forests, the crystal waters of Khuvsgul Lake, rolling mountains and the wide-open steppe. Stay with nomadic families, ride horses through valleys, and experience a way of life unchanged for centuries.",
      image: "/images/tours/north-central.jpg",
      highlights: [
        "Khuvsgul Lake — Mongolia&apos;s Blue Pearl",
        "Horse trekking through Arkhangai valleys",
        "Nomadic family homestays",
        "Orkhon Valley waterfall",
        "Traditional cuisine & campfire nights",
        "Tsenkher Hot Springs",
      ],
      reversed: false,
    },
    {
      id: 2,
      title: "South & Central Mongolia",
      duration: "12 Days",
      price: "From $1,500",
      description:
        "Venture into the legendary Gobi desert — towering sand dunes, hidden ice canyons, and vast landscapes that stretch to the horizon. Then travel north through the steppe, meeting camel herders and discovering Mongolia&apos;s dramatic contrasts.",
      image: "/images/tours/south-central.jpg",
      highlights: [
        "Khongoriin Els — the Singing Sand Dunes",
        "Yolyn Am ice canyon exploration",
        "Camel trekking in the Gobi",
        "Flaming Cliffs of Bayanzag",
        "Steppe camping under infinite stars",
        "Nomadic culture & traditional meals",
      ],
      reversed: true,
    },
    {
      id: 3,
      title: "Central Mongolia",
      duration: "7 Days",
      price: "From $900",
      description:
        "A compact but powerful introduction to Mongolia. Ride horses across the central steppe, camp in valleys surrounded by mountains, and connect with nomadic families. Perfect for travelers with limited time who want the full experience.",
      image: "/images/tours/central.jpg",
      highlights: [
        "Horseback riding across the steppe",
        "Terelj National Park",
        "Valley camping & stargazing",
        "Nomadic family visits",
        "Traditional food experiences",
      ],
      reversed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/images/tours/north-central.jpg"
          alt="Mongolia Tours"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/60 via-night-950/40 to-night-950" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-sand-400 mb-4">
              EXPEDITIONS
            </p>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Choose Your Adventure
            </h1>
            <p className="text-sand-300 max-w-xl">
              Three routes through Mongolia&apos;s most extraordinary landscapes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tours */}
      {tours.map((tour, index) => (
        <section
          key={tour.id}
          className={`py-24 ${index === 1 ? "bg-night-900/30" : ""}`}
        >
          <FadeIn>
            <div className="mx-auto max-w-6xl px-6">
              <div
                className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                  tour.reversed ? "lg:grid-flow-col lg:grid-cols-2" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={tour.reversed ? "lg:order-last" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="mb-4 flex items-center">
                    <span className="inline-block bg-sand-400/10 px-3 py-1 text-xs uppercase tracking-wider text-sand-400">
                      {tour.duration}
                    </span>
                    <span className="ml-3 text-sm text-sand-500">
                      {tour.price}
                    </span>
                  </div>

                  <h2 className="mb-4 font-display text-3xl md:text-4xl text-sand-100">
                    {tour.title}
                  </h2>

                  <p className="mb-8 leading-relaxed text-sand-300">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-8 space-y-2">
                    {tour.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <span className="mr-2 text-sand-600">→</span>
                        <span className="text-sm text-sand-400">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/book"
                    className="mb-3 inline-block bg-sand-400 px-6 py-3 text-sm uppercase tracking-wider text-night-950 transition hover:bg-sand-300"
                  >
                    Book This Tour →
                  </Link>

                  {/* Fee Waiver Note */}
                  <p className="text-xs italic text-sand-600">
                    Fee waiver program available
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      ))}

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
