"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Languages, Map, Wrench, HeartHandshake, ShieldCheck, CloudSun } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { GradientCard } from "@/components/ui/GradientCard";

export default function WhyTourTugoPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* ============================================================ */}
      {/* HERO — personal framing */}
      {/* ============================================================ */}
      <section className="relative h-screen min-h-[620px] overflow-hidden">
        <Image
          src="/images/tours/north-central/DSC02464-hero.jpg"
          alt="Khuvsgul Lake at rest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-night-950" />

        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <p className="text-sand-300 text-xs tracking-[0.3em] uppercase mb-4">
                Why Tugi
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.92] mb-6 max-w-3xl">
                It&apos;s not
                <br />a tour company.
                <br />
                <span className="text-sand-300 italic">It&apos;s me, showing you around.</span>
              </h1>
              <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed">
                I&apos;m a Mongolian guy who fell hard for the country — the peace, the wind, the way a day feels, the hospitality of the people. This is how I like to travel, and I&apos;m inviting you along.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHO RUNS THIS */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5 text-center">
              Who runs this
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-10 text-center leading-tight">
              Hi — I&apos;m your guide.
            </h2>

            <div className="space-y-6 text-sand-300 text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                I grew up in Mongolia. Left for a while to see the world. Came back because it&apos;s still the best thing I know — the most open country, the kindest hosts, the quietest nights.
              </p>
              <p>
                I don&apos;t run this like a business. I run it like hosting cousins from out of town. If you come on one of my trips, I&apos;m going to take care of you — fed, warm, safe, understood — and I&apos;ll be easy to hang out with while I do it. I want you to leave Mongolia with stories and friends, not just a camera roll.
              </p>
              <p>
                Every tour I run is a route I already know and love — trails I&apos;ve traced many times over, families I already call friends. That&apos;s the whole point of this small calendar. And when the weather turns, or the plan bends, or dinner runs three hours long at a ger — that&apos;s where the trip becomes the trip. My job on the road is just to keep it smooth: reading the weather, keeping the van moving, picking the right camp, translating the jokes so you&apos;re laughing <em>with</em> everyone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT A DAY LOOKS LIKE */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5">
                What a day with me looks like
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
                Not a schedule.
                <br className="hidden md:block" /> A rhythm.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  t: "Mornings",
                  body: "Sunrise if we&apos;re camping, coffee no matter what. I cook breakfast more than people expect. We pack slow — no one&apos;s yelling go-go-go.",
                },
                {
                  t: "Middle",
                  body: "Driving, riding, walking, talking. If a herder waves us down, we stop. If the light is too good to leave, we stay. The plan bends around the day.",
                },
                {
                  t: "Evenings",
                  body: "A fire if we have wood. Card games, family stories, whatever music the group is into. I don&apos;t impose bedtimes. People sleep when they sleep.",
                },
              ].map((d) => (
                <div key={d.t} className="text-center">
                  <h3 className="font-display text-2xl text-sand-100 mb-3">{d.t}</h3>
                  <p className="text-sand-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: d.body }} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SMALL-GROUP ADVANTAGE + SPLIT IMAGE */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/why-mongolia/nomad1.jpg"
                alt="Nomadic family life"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
                The group
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-6 leading-tight">
                4 to 8 people.
                <br />Never more.
              </h2>
              <div className="space-y-4 text-sand-300 leading-relaxed">
                <p>
                  By day two, you know everyone&apos;s name, what they cook, what music they put on. By day four, you&apos;re a small strange family. That is the whole thing. It does not happen in a 20-person coach tour — and it cannot happen in a luxury retreat where everyone is in their own suite.
                </p>
                <p>
                  Small groups also mean a Mongolian family can actually host us. You eat what they eat, sit in their ger, play with their kids. That experience doesn&apos;t scale — that&apos;s why I don&apos;t scale these trips.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* I'VE GOT YOU — capabilities */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5">
                I&apos;ve got you
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
                Everything handled — smoothly.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Mongolian and English",
                  description:
                    "I translate both ways — the words and the meaning behind them. No awkward silences at the ger table.",
                  badgeText: "Language bridge",
                  badgeColor: "#38BDF8",
                  gradient: "sky",
                  icon: Languages,
                },
                {
                  title: "The routes I know",
                  description:
                    "Years of going up and down these roads means I have people I trust all over the country — family camps, drivers, herders — and I can lean on them when it matters.",
                  badgeText: "Local network",
                  badgeColor: "#F59E0B",
                  gradient: "amber",
                  icon: Map,
                },
                {
                  title: "Problem-solving, calmly",
                  description:
                    "Stuck van, bad weather, missed flight, altitude headache — things happen out there. My job is to keep a level head and sort it without adding stress to your trip.",
                  badgeText: "When it goes sideways",
                  badgeColor: "#10B981",
                  gradient: "emerald",
                  icon: Wrench,
                },
                {
                  title: "The cultural bridge",
                  description:
                    "Translating the jokes, the etiquette, why the grandmother is offering you that bowl. You'll never feel lost at a table.",
                  badgeText: "Culture bridge",
                  badgeColor: "#F43F5E",
                  gradient: "rose",
                  icon: HeartHandshake,
                },
                {
                  title: "Safety-first, smoothly",
                  description:
                    "Satellite comms on remote tours. First-aid trained. I know the evac options. I won't scare you with it — I'll just have it.",
                  badgeText: "Quiet safety net",
                  badgeColor: "#2DD4BF",
                  gradient: "teal",
                  icon: ShieldCheck,
                },
                {
                  title: "Flexible on the day",
                  description:
                    "If the weather shifts or the mood shifts, the plan shifts. I'd rather give you the right day than the scheduled one.",
                  badgeText: "Day-by-day",
                  badgeColor: "#A78BFA",
                  gradient: "violet",
                  icon: CloudSun,
                },
              ].map((item, idx) => (
                <FadeIn key={item.title} delay={idx * 0.06} direction="up">
                  <GradientCard
                    gradient={item.gradient}
                    badgeText={item.badgeText}
                    badgeColor={item.badgeColor}
                    title={item.title}
                    description={item.description}
                    Icon={item.icon}
                  />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 DEPARTURES QUICK LINK */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30 relative overflow-hidden">
        <Image
          src="/images/tours/north-central/DSC02514.jpg"
          alt="Open road through the steppe"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950 via-black/80 to-night-950" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5">
              The 2026 season
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-6 leading-tight">
              Ten departures.
              <br />June to the end of August.
            </h2>
            <p className="text-sand-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Weekend escapes in Terelj. A horse trek into the taiga to a hidden alpine lake. A chill local Naadam in central Mongolia. The full Gobi loop. The Altai peaks with Kazakh eagle hunters. Pick what fits, or pick two.
            </p>
            <Link
              href="/tours"
              className="inline-block border border-sand-300/40 bg-sand-400/10 hover:bg-sand-400/20 hover:border-sand-300 px-8 py-3.5 text-sm uppercase tracking-[0.15em] text-sand-100 rounded-sm transition"
            >
              See the calendar →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HONEST FRAMING */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5 text-center">
              Let&apos;s be honest
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-14 text-center leading-tight">
              Who this is for — and who it isn&apos;t.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-emerald-800/30 bg-emerald-900/10">
                <h3 className="font-display text-xl text-emerald-200 mb-5">You&apos;ll love this if…</h3>
                <ul className="space-y-3 text-sand-300">
                  {[
                    "You&apos;re curious about the actual country, not a postcard version",
                    "You&apos;re okay with dust, wind, cold morning water, and the occasional long drive",
                    "You like people — and the people you end up with",
                    "You want a real window into nomadic life, not a petting-zoo version",
                    "You&apos;d rather a homemade dinner than a hotel buffet",
                  ].map((l, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-emerald-400 mt-1">→</span>
                      <span dangerouslySetInnerHTML={{ __html: l }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-sand-800/40 bg-night-900/30">
                <h3 className="font-display text-xl text-sand-200 mb-5">Maybe not your thing if…</h3>
                <ul className="space-y-3 text-sand-400">
                  {[
                    "You want white-glove luxury, daily hot showers, and a private driver",
                    "You need total solitude and a strict introvert schedule",
                    "You&apos;re hoping for fast internet and a fixed itinerary to the hour",
                    "You don&apos;t eat mutton, dairy, or grilled anything, and aren&apos;t flexible about it",
                  ].map((l, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-sand-700 mt-1">↯</span>
                      <span dangerouslySetInnerHTML={{ __html: l }} />
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sand-500 text-sm italic">
                  No judgement — we&apos;re just not built for it, and I&apos;d rather you have the right trip than a wrong one.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5">
              If we sound right for each other
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-sand-100 mb-6 leading-tight">
              Come see it.
            </h2>
            <p className="text-sand-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Browse the 2026 calendar, pick a tour, or tell me what you&apos;re thinking and we&apos;ll figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center bg-sand-400 hover:bg-sand-300 text-night-950 px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold rounded-sm transition"
              >
                See the 10 tours
              </Link>
              <Link
                href="/book"
                className="inline-flex items-center justify-center border border-sand-400/40 hover:border-sand-300 hover:bg-sand-400/10 text-sand-200 px-8 py-4 text-sm uppercase tracking-[0.15em] rounded-sm transition"
              >
                Apply to join
              </Link>
              <a
                href="mailto:tuklobin@gmail.com"
                className="inline-flex items-center justify-center text-sand-400 hover:text-sand-100 px-8 py-4 text-sm uppercase tracking-[0.15em] transition"
              >
                Just say hi →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
