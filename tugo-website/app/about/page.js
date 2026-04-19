"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const values = [
  {
    title: "Through the Lens",
    body: "From golden steppes to weathered faces, capturing life in its most natural form is something I treasure. Every photo is a story, and Mongolia has so many stories worth telling.",
  },
  {
    title: "A Life of Service",
    body: "My grandparents taught me to lead with empathy. Whether offering a warm meal or guiding someone through unfamiliar terrain, I find joy in caring for others.",
  },
  {
    title: "Fuel for the Soul",
    body: "Give me a dusty road, a new horizon, or an untouched valley, and I&apos;m home. I live for the thrill of discovery — long drives, hiking into the wild, conversations with locals along the way.",
  },
  {
    title: "People, Always",
    body: "Making a friend on the road feels like a little gift from the universe. Those unexpected connections are the heartbeat of every great journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-night-950">
      {/* Hero Section */}
      <section className="relative flex h-[60vh] items-center justify-center text-center">
        <Image
          src="/images/about/adventure.jpg"
          alt="Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/50 via-night-950/30 to-night-950" />

        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-400">
              ABOUT
            </p>
            <h1 className="font-display text-4xl text-white md:text-6xl">
              Meet Your Guide
            </h1>
            <p className="mt-4 text-sand-300">The story behind TUGO</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:items-start">
          {/* Left - Image */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] overflow-hidden rounded ring-1 ring-sand-800/20">
                <Image
                  src="/images/about/guide.jpg"
                  alt="Mike"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <h2 className="mb-8 font-display text-3xl text-sand-100 md:text-4xl">
                Hey, I&apos;m Mike
              </h2>

              <p className="mb-6 leading-relaxed text-sand-300">
                I grew up traveling across Mongolia&apos;s breathtaking countryside
                with my grandparents — experiences that sparked a lifelong
                passion for the untouched beauty and unique traditions of this
                land.
              </p>

              <p className="mb-6 leading-relaxed text-sand-300">
                After finishing my applied mathematics degree and spending time
                abroad, I realized all the parts of me — my love for
                photography, my instinct to serve, my thirst for adventure, and
                my connection to people — naturally converge into TUGO.
              </p>

              <p className="leading-relaxed text-sand-300">
                This isn&apos;t just a tour business. It&apos;s my way of inviting you
                into my world, where every journey is personal, every encounter
                meaningful, and every moment a memory in the making.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Grid Section */}
      <section className="bg-night-900/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sand-400">
            WHAT DRIVES ME
          </p>
          <h2 className="mb-12 font-display text-3xl text-sand-100">
            More Than a Guide
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <FadeIn
                key={index}
                delay={index * 0.1}
                direction="up"
              >
                <div className="border border-sand-900/15 bg-night-950/60 p-8 transition-all hover:border-sand-800/30">
                  <h3 className="mb-3 font-display text-xl text-sand-100">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sand-400">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s Different Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center font-display text-3xl text-sand-100">
            What Makes Our Tours Different?
          </h2>

          <div className="mb-10 border-l-2 border-sand-700 pl-6">
            <blockquote className="font-display text-xl leading-relaxed text-sand-200 italic md:text-2xl">
              This isn&apos;t your typical tour with a formal guide and driver. It&apos;s
              a genuine adventure led by a passionate traveler — just like you.
              You&apos;re not joining a tour — you&apos;re joining a journey.
            </blockquote>
          </div>

          <div className="flex flex-col gap-4 text-sm text-sand-300">
            <p>→ Come as travelers, leave as friends</p>
            <p>→ Step away from the mainstream, discover the real Mongolia</p>
            <p>→ Every journey is personal — no two trips are the same</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="border-t border-sand-900/20 py-20 text-center">
        <h2 className="mb-6 font-display text-2xl text-sand-100">
          Ready for your side quest?
        </h2>

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
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
