"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { Counter } from "@/components/animations/Counter";

// ============================================================================
// SECTION 1 - HERO
// ============================================================================

const heroSlides = [
  { src: "/images/home/hero1.jpg", headline: "Ride Across the Last Wild Country" },
  { src: "/images/home/hero2.jpg", headline: "Where the Horizon Never Ends" },
  { src: "/images/home/hero3.jpg", headline: "12 Days Beyond the Map" },
  { src: "/images/home/hero4.jpg", headline: "The Road Chooses You" },
  { src: "/images/home/hero5.jpg", headline: "Your Side Quest Starts Here" },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].src}
            alt="Mongolia adventure"
            fill
            className="object-cover"
            priority={currentSlide === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 max-w-4xl leading-tight"
            style={{
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            {heroSlides[currentSlide].headline}
          </motion.h1>
        </AnimatePresence>

        {/* Subtitle */}
        <p className="text-sand-300 tracking-widest uppercase text-sm mb-12">
          Small-group adventure tours in Mongolia
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/tours"
            className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 transition-colors duration-300"
          >
            Explore Tours
          </Link>
          <Link
            href="/book"
            className="bg-sand-400 text-night-950 px-8 py-3 font-medium hover:bg-sand-300 transition-colors duration-300"
          >
            Join the Next Expedition
          </Link>
        </div>

        {/* Slide dots */}
        <div className="flex gap-3 justify-center">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-sand-400 w-8" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 2 - THE EXPERIENCE
// ============================================================================

const experiences = [
  {
    icon: "🐎",
    title: "Ride With Nomads",
    desc: "Travel through the steppe on horseback with local herders who've roamed these lands for generations.",
  },
  {
    icon: "✦",
    title: "Sleep Under Endless Skies",
    desc: "Camp far from cities and light pollution. The Milky Way becomes your ceiling.",
  },
  {
    icon: "⛰",
    title: "Explore Untouched Landscapes",
    desc: "Mountains, forests, steppe and desert — all in a single journey.",
  },
  {
    icon: "👥",
    title: "Small Groups Only",
    desc: "6–8 travelers max. No crowds. No scripts. Just real adventure.",
  },
];

function ExperienceSection() {
  return (
    <section className="py-28 md:py-36 bg-night-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
            THE EXPERIENCE
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100">
            This isn&apos;t a tour. It&apos;s a side quest.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-night-900/60 border border-sand-900/15 p-8 md:p-10 hover:border-sand-800/30 transition-all duration-500 group">
                <div className="text-3xl mb-4">{exp.icon}</div>
                <h3 className="font-display text-xl text-sand-100 mb-3">
                  {exp.title}
                </h3>
                <p className="text-sand-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 3 - MONGOLIA REVEAL
// ============================================================================

function MongoliaRevealSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <Image
        src="/images/why-mongolia/landscape1.jpg"
        alt="Mongolia landscape"
        fill
        className="object-cover animate-ken-burns"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-night-950/90 via-night-950/70 to-night-950/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <FadeIn direction="left">
            <div>
              <div className="text-sand-400 text-4xl md:text-5xl font-display mb-2">
                <Counter from={0} to={3} suffix="M+" />
              </div>
              <p className="text-sand-400 text-sm">
                People in a Country Twice the Size of Texas
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <div className="text-sand-400 text-4xl md:text-5xl font-display mb-2">
                <Counter from={0} to={1.5} decimals={1} suffix="M" />
              </div>
              <p className="text-sand-400 text-sm">
                Square Kilometers of Untamed Land
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <p className="text-sand-200 text-lg max-w-2xl leading-relaxed mb-8">
            Mongolia is one of the last truly wild places on Earth. Nomadic
            culture hasn&apos;t just survived here — it thrives. This is a land where
            you can ride for days and meet no one but the wind.
          </p>

          <Link
            href="/why-mongolia"
            className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase inline-block transition-colors duration-300"
          >
            Discover Why Mongolia →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 4 - FEATURED TOURS
// ============================================================================

const tours = [
  {
    title: "North & Central Mongolia",
    duration: "12 Days",
    image: "/images/tours/north-central.jpg",
    desc: "Forests, lakes, mountains and nomadic culture in Mongolia&apos;s pristine north.",
    tags: ["Khuvsgul Lake", "Horse Trekking", "Nomad Stays"],
    href: "/tours",
  },
  {
    title: "South & Central Mongolia",
    duration: "12 Days",
    image: "/images/tours/south-central.jpg",
    desc: "The Gobi desert, towering sand dunes and dramatic landscapes of the south.",
    tags: ["Gobi Desert", "Sand Dunes", "Camel Trekking"],
    href: "/tours",
  },
  {
    title: "Central Mongolia",
    duration: "7 Days",
    image: "/images/tours/central.jpg",
    desc: "A compact exploration of the steppe, valleys and nomadic life.",
    tags: ["Steppe Riding", "Valley Camps", "Cultural Immersion"],
    href: "/tours",
  },
];

function FeaturedToursSection() {
  return (
    <section className="bg-night-900/30 py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
            EXPEDITIONS
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100">
            Choose Your Adventure
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tours.map((tour, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="bg-night-950 border border-sand-900/15 overflow-hidden group h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="inline-block bg-sand-400/10 text-sand-400 text-xs px-3 py-1 tracking-wider uppercase mb-3 w-fit">
                    {tour.duration}
                  </div>

                  <h3 className="font-display text-xl text-sand-100 mb-2">
                    {tour.title}
                  </h3>

                  <p className="text-sand-400 text-sm mb-4 leading-relaxed flex-grow">
                    {tour.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs text-sand-500 border border-sand-900/20 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={tour.href}
                    className="text-sand-400 hover:text-sand-200 text-sm transition-colors duration-300"
                  >
                    View Tour →
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 5 - PHOTO STORY
// ============================================================================

const storyImages = [
  { src: "/images/story/story1.jpg", caption: "Riding with nomad herders" },
  { src: "/images/story/story2.jpg", caption: "Gathering around the ger" },
  { src: "/images/story/story3.jpg", caption: "Into the canyon" },
  { src: "/images/story/story4.jpg", caption: "Sharing a traditional feast" },
  { src: "/images/story/story5.jpg", caption: "Where the desert begins" },
  { src: "/images/story/story6.jpg", caption: "Day's end on the steppe" },
];

function PhotoStorySection() {
  return (
    <section className="py-20 md:py-32 bg-night-950">
      <div className="max-w-5xl mx-auto px-6">
        {storyImages.map((image, idx) => {
          const isOdd = idx % 2 === 0;
          const widthClass = isOdd
            ? "w-full"
            : idx % 4 === 1
              ? "w-full md:w-[85%] md:ml-auto"
              : "w-full md:w-[85%] md:mr-auto";

          return (
            <FadeIn key={idx} direction="up">
              <div className={widthClass}>
                <div className="relative aspect-[3/2] overflow-hidden mb-2">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sand-500 text-xs italic tracking-wide mb-16">
                  {image.caption}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 6 - GUIDE INTRO
// ============================================================================

function GuideIntroSection() {
  return (
    <section className="bg-night-900/40 py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-[500px] w-full overflow-hidden rounded">
              <Image
                src="/images/about/guide.jpg"
                alt="Mike, TUGO guide"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right">
            <div>
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
                YOUR GUIDE
              </p>

              <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-6">
                Hey, I&apos;m Mike
              </h2>

              <p className="text-sand-300 leading-relaxed mb-8">
                I grew up traveling across Mongolia&apos;s countryside with my
                grandparents. Now I share that world with adventurous travelers
                from around the globe. This isn&apos;t a business — it&apos;s my way of
                inviting you into my world, where every journey is personal and
                every moment a memory.
              </p>

              {/* Trust points */}
              <div className="mb-8 space-y-3">
                <div className="text-sand-400 text-sm">
                  <span className="text-sand-500">→ </span>Local knowledge &
                  family connections across Mongolia
                </div>
                <div className="text-sand-400 text-sm">
                  <span className="text-sand-500">→ </span>Small authentic
                  groups of 6–8 travelers
                </div>
                <div className="text-sand-400 text-sm">
                  <span className="text-sand-500">→ </span>Personal guiding —
                  I&apos;m with you the entire journey
                </div>
              </div>

              <Link
                href="/about"
                className="text-sand-400 hover:text-sand-200 text-sm tracking-wider uppercase transition-colors duration-300 inline-block"
              >
                Read My Story →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 7 - TESTIMONIALS
// ============================================================================

const testimonials = [
  {
    quote:
      "This wasn&apos;t a tour — it was the adventure of a lifetime. The freedom, the landscapes, the connections we made... nothing compares.",
    name: "Sarah K.",
    from: "United States",
  },
  {
    quote:
      "I came for the scenery and left with a new perspective on life. The most authentic travel experience I&apos;ve ever had.",
    name: "Thomas L.",
    from: "Germany",
  },
  {
    quote:
      "Riding horses across the steppe with actual nomad families? I still can&apos;t believe that was real. Best decision I&apos;ve ever made.",
    name: "Mia R.",
    from: "Australia",
  },
  {
    quote:
      "The lack of a rigid plan was actually what made it perfect. Every day was a surprise. Every night under the stars was magic.",
    name: "James W.",
    from: "United Kingdom",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-28 md:py-36 bg-night-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
            FROM FELLOW TRAVELERS
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100">
            What They Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-night-900/40 border border-sand-900/15 p-8">
                <div className="font-display text-5xl text-sand-800/40 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="text-sand-200 text-sm leading-relaxed italic mb-6">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="text-sand-300 text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-sand-500 text-xs">{testimonial.from}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 8 - EXPEDITIONS PREVIEW
// ============================================================================

const expeditions = [
  {
    month: "June 2026",
    name: "North & Central Tour",
    days: "12 Days",
    price: "From $1,500",
  },
  {
    month: "July 2026",
    name: "South & Central Tour",
    days: "12 Days",
    price: "From $1,500",
  },
  {
    month: "August 2026",
    name: "Central Explorer",
    days: "7 Days",
    price: "From $900",
  },
];

function ExpeditionsPreviewSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <Image
        src="/images/home/expedition-bg.jpg"
        alt="Expeditions background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-night-950/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full py-28">
        <div className="text-center mb-12">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
            UPCOMING
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-sand-100">
            2026 Expeditions
          </h2>
        </div>

        {/* Expeditions list */}
        <div className="space-y-0">
          {expeditions.map((exp, idx) => (
            <div
              key={idx}
              className="border-b border-sand-900/20 py-6 flex justify-between items-center group cursor-pointer hover:border-sand-700/30 transition-all"
            >
              <div>
                <p className="text-sand-400 text-sm">{exp.month}</p>
                <p className="text-sand-100 font-display text-lg md:text-xl">
                  {exp.name}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-sand-400 text-sm">{exp.days}</p>
                  <p className="text-sand-400 text-sm">{exp.price}</p>
                </div>

                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sand-400 text-sm">
                  Join →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/book"
            className="bg-sand-400 text-night-950 px-8 py-3 text-sm tracking-wider uppercase hover:bg-sand-300 transition-colors font-medium inline-block"
          >
            Reserve Your Adventure
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 9 - FINAL CTA
// ============================================================================

function FinalCTASection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/home/cta-bg.jpg"
        alt="Final CTA background"
        fill
        className="object-cover animate-ken-burns"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-night-950/60" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <FadeIn>
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-6">
            THE STEPPE IS WAITING
          </p>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white mb-10 leading-tight">
            Start Your Mongolian Adventure
          </h2>

          <Link
            href="/book"
            className="bg-sand-400 text-night-950 px-10 py-4 text-sm md:text-base tracking-wider uppercase hover:bg-sand-300 transition-colors font-medium inline-block"
          >
            Book Your Journey
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Home() {
  return (
    <main className="w-full bg-night-950">
      <HeroSection />
      <ExperienceSection />
      <MongoliaRevealSection />
      <FeaturedToursSection />
      <PhotoStorySection />
      <GuideIntroSection />
      <TestimonialsSection />
      <ExpeditionsPreviewSection />
      <FinalCTASection />
    </main>
  );
}
