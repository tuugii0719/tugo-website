"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const whatITBring = [
  {
    title: "A teacher's ear",
    body: "I've tutored students grades 4–12 in math, Python, and memory techniques since 2020. Explaining something new in a way that lands for the person in front of me is the part I love. Guiding is the same instinct in a different setting.",
  },
  {
    title: "A calm head",
    body: "I meditate daily and practice memory sport (International Master of Memory, 2018). Two quiet disciplines that — more than anything on the road — keep me steady when the plan shifts.",
  },
  {
    title: "The analytical side",
    body: "My degree is in applied mathematics. It sounds unrelated to guiding, and it mostly is — but it shows up in the logistics. Routes, weather calls, fuel, timing. I like keeping the machinery invisible so you can be in the trip.",
  },
  {
    title: "Bicultural fluency",
    body: "Three years in California, four back home in Ulaanbaatar. I can translate the country in both directions — not just the language, but the why behind what you&apos;re seeing.",
  },
  {
    title: "I'll remember your name",
    body: "Memory sport sounds like a trick — it is, a little. But it also means I won't forget your dietary note, your partner's birthday, or the song you mentioned on day two.",
  },
  {
    title: "Lifelong student",
    body: "The goal is never to have it all figured out. I'm curious about everyone I meet, every road I haven't driven, every skill I haven't learned. You'll catch me asking more questions than giving answers.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/about/adventure.jpg"
          alt="Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night-950/50 via-transparent to-night-950" />

        <div className="absolute inset-0 flex items-end pb-16 md:pb-24 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <p className="text-sand-300 text-xs tracking-[0.3em] uppercase mb-4">
                About
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-white leading-[0.95] mb-4">
                Meet your guide
              </h1>
              <p className="text-sand-200 text-lg md:text-xl max-w-xl leading-relaxed">
                Tuguldur Munkhbaatar — but everyone calls me Tugi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* STORY */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-32">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-sand-800/30">
                <Image
                  src="/images/about/guide.jpg"
                  alt="Tuguldur (Tugi) Munkhbaatar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
                Hi
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-sand-100 mb-8 leading-tight">
                I&apos;m Tugi.
              </h2>

              <div className="space-y-6 text-sand-300 text-lg leading-relaxed">
                <p>
                  I grew up in Ulaanbaatar. When I was seventeen, I left for California — three years at Diablo Valley College — then came back to Mongolia to finish a Bachelor&apos;s in Applied Mathematics at the National University. Somewhere in the middle of all that, Mongolia just stayed with me. The steppe. The families. The way a day feels out there. I don&apos;t think you can really explain it — you have to go.
                </p>
                <p>
                  I think of myself first as a teacher. Since 2020 I&apos;ve been tutoring students — memory techniques, math, Python — through Sur Academy in California. That&apos;s where I learned that the best part of showing someone something new is watching them make it their own. TUGO is the same instinct with a bigger classroom.
                </p>
                <p>
                  I&apos;m not the loudest person in the room. I meditate daily, I practice memory sport (International Master of Memory, certified back in 2018), and I read too much. What I&apos;ve spent years learning is how to pay attention — to the weather, to the day, to the group I&apos;m with. Turns out that&apos;s the most useful skill a guide can have.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ETHOS QUOTE */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-8">
              How I think about it
            </p>
            <blockquote className="font-display text-2xl md:text-4xl text-sand-100 leading-[1.25] italic">
              &ldquo;I find meaning in teaching and joy in learning. I&apos;m constantly refining my discipline and curiosity — trying to understand myself before trying to change the world.&rdquo;
            </blockquote>
            <p className="mt-6 text-sand-500 text-sm tracking-wider">— Tugi</p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT I BRING */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
                What I bring to the road
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-sand-100 leading-tight">
                Not the usual guide CV.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatITBring.map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-xl border border-sand-800/40 bg-night-900/30 hover:border-sand-700/60 transition-colors"
                >
                  <h3 className="font-display text-lg text-sand-100 mb-3">{v.title}</h3>
                  <p className="text-sand-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: v.body }} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE QUIET CV — facts presented humbly */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30 bg-night-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4 text-center">
              The resume bit, since you&apos;re probably curious
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-sand-100 mb-12 text-center leading-tight">
              The quiet CV
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {[
                {
                  t: "Education",
                  rows: [
                    "BS, Applied Mathematics · National University of Mongolia (2022 – 2025)",
                    "Diablo Valley College, California (2019 – 2022)",
                  ],
                },
                {
                  t: "Teaching & work",
                  rows: [
                    "Tutor · Sur Academy, California (2020 – present) — memory, math, Python",
                    "Business Analyst · Data Deus (summer 2025) — GWG Mongolia / Google program, assistant teacher",
                    "Data Analyst · Data Deus (2024 – 2025) — Python factory optimization, online data analytics course",
                    "Student Researcher · NUM Center of Mathematics for Applications (2023 – present) — one of 6 students in weekly research",
                  ],
                },
                {
                  t: "Certifications",
                  rows: [
                    "Google Advanced Data Analytics (Coursera, 2024)",
                    "International Master of Memory — IMM Memory Sport (2018)",
                  ],
                },
                {
                  t: "Languages",
                  rows: ["English · fluent", "Mongolian · native"],
                },
              ].map((b) => (
                <div key={b.t}>
                  <dt className="font-display text-lg text-sand-100 mb-3">{b.t}</dt>
                  <dd className="space-y-2 text-sand-400 text-sm leading-relaxed">
                    {b.rows.map((r, i) => (
                      <p key={i}>{r}</p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-12 text-center text-sand-500 text-sm italic">
              Happy to share references or the full PDF if it matters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT TUGO IS TO ME */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32 border-b border-sand-900/30">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-5 text-center">
              What TUGO is, to me
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-10 text-center leading-tight">
              A small, deliberate thing.
            </h2>

            <div className="space-y-6 text-sand-300 text-lg leading-relaxed">
              <p>
                TUGO isn&apos;t a tour company I&apos;m trying to scale. It&apos;s how I spend my summers, and it&apos;s where the different parts of me meet — the teacher, the mathematician, the meditator, the Mongolian who grew up between two worlds and kept choosing this one.
              </p>
              <p>
                I built the 2026 calendar around ten departures on routes I already know and love. Families I call friends. Roads I&apos;ve traced many times over. That&apos;s the whole design — I can show you what I know well, and keep the group small enough that the trip actually happens to you, not around you.
              </p>
              <p>
                If that sounds like your kind of thing, I&apos;d love to have you out there.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA */}
      {/* ============================================================ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-sand-100 mb-6">
              Come find me in Mongolia.
            </h2>
            <p className="text-sand-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Pick a tour, apply to join, or just send me an email — I&apos;ll reply personally.
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
                href="mailto:Tuugii7019@gmail.com"
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
