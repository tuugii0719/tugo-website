"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, HeartHandshake, Compass, UsersRound } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { GradientCard } from "@/components/ui/GradientCard";

const values = [
  {
    title: "Through the Lens",
    description:
      "From golden steppes to weathered faces, capturing life in its most natural form is something I treasure. Every photo is a story, and Mongolia has so many stories worth telling.",
    badgeText: "How I see it",
    badgeColor: "#F59E0B",
    gradient: "amber",
    icon: Camera,
    ctaText: "See the gallery",
    ctaHref: "/gallery",
  },
  {
    title: "A Life of Service",
    description:
      "My grandparents taught me to lead with empathy. Whether offering a warm meal or guiding someone through unfamiliar terrain, I find joy in caring for others.",
    badgeText: "Where I find true meaning",
    badgeColor: "#F43F5E",
    gradient: "rose",
    icon: HeartHandshake,
    ctaText: "How I host trips",
    ctaHref: "/why-tour-tugo",
  },
  {
    title: "Fuel for the Soul",
    description:
      "Give me a dusty road, a new horizon, or an untouched valley, and I'm home. I live for the thrill of discovery — long drives, hiking into the wild, conversations with locals along the way.",
    badgeText: "What I live for",
    badgeColor: "#10B981",
    gradient: "emerald",
    icon: Compass,
    ctaText: "See the routes",
    ctaHref: "/tours",
  },
  {
    title: "People, Always",
    description:
      "Making a friend on the road feels like a little gift from the universe. Those unexpected connections are the heartbeat of every great journey.",
    badgeText: "The point of it all",
    badgeColor: "#38BDF8",
    gradient: "sky",
    icon: UsersRound,
    ctaText: "Come along",
    ctaHref: "/book",
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-night-950/30 to-night-950" />

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
            <p className="mt-4 text-sand-300">The story behind the trips</p>
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
                  src="/images/tugi/tugi-on-horse.jpg"
                  alt="Tugi on horseback in the central Mongolian steppe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <h2 className="mb-8 font-display text-3xl text-sand-100 md:text-4xl">
                Hey, I&apos;m Tugi
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
                my connection to people — naturally come together here.
              </p>

              <p className="mb-6 leading-relaxed text-sand-300">
                This isn&apos;t just a tour business. It&apos;s my way of inviting you
                into my world, where every journey is personal, every encounter
                meaningful, and every moment a memory in the making.
              </p>

              <div className="mt-8 border-l-2 border-sand-700/60 pl-5 py-1">
                <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-sand-400">
                  Why me
                </p>
                <p className="leading-relaxed text-sand-300">
                  I&apos;ll be straight with you: 2026 is my first full season hosting paid trips. But I&apos;ve spent years on these roads — with family, with friends, alone with a camera — and I know them cold. What I bring isn&apos;t a stack of past tours. It&apos;s the history, the hidden places, a real read on the people I&apos;m travelling with, and the kind of energy that turns a group into friends by the second morning. You&apos;re getting me at my most hands-on.
                </p>
              </div>
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.08} direction="up">
                <GradientCard
                  gradient={value.gradient}
                  badgeText={value.badgeText}
                  badgeColor={value.badgeColor}
                  title={value.title}
                  description={value.description}
                  ctaText={value.ctaText}
                  ctaHref={value.ctaHref}
                  Icon={value.icon}
                />
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

        </div>
      </section>

      {/* Moments — humble portrait of who I am off the trail */}
      <section className="border-t border-sand-900/20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-sand-400">A few moments</p>
            <h2 className="mb-3 font-display text-3xl md:text-4xl text-sand-100">
              Off the trail.
            </h2>
            <p className="mb-12 text-sand-400 text-sm md:text-base max-w-lg">
              I wasn&apos;t born guiding. Here&apos;s a slower look at the years that got me here.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                src: "/images/tugi/tugi-marathon.jpg",
                caption: "Finishing a marathon. I&apos;m not the fastest. I just don&apos;t stop. Same legs that walk you across the Gobi.",
              },
              {
                src: "/images/tugi/tugi-with-kids.jpg",
                caption: "Mentoring at the San Francisco Junior Memory League. Some of the best days of my year happen when I get to host kids instead of strangers.",
              },
              {
                src: "/images/tugi/tugi-meditation.jpg",
                caption: "On a granite boulder, somewhere between trips. The country teaches you to sit still. I&apos;m a slow learner.",
              },
              {
                src: "/images/tugi/tugi-grand-canyon.jpg",
                caption: "Five years in California taught me what travel can do to a person. I came home wanting to share the version of this country I grew up in.",
              },
            ].map((m, i) => (
              <FadeIn key={m.src} delay={i * 0.08}>
                <figure className="flex flex-col gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand-800/40">
                    <Image
                      src={m.src}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-sand-300 text-sm md:text-[15px] leading-relaxed max-w-md">
                    {m.caption.replace(/&apos;/g, "’")}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
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
