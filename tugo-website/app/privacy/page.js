import Link from "next/link";

export default function PrivacyPage() {
  const updated = "May 2026";

  return (
    <main className="bg-night-950 text-sand-100 pt-28 md:pt-36 pb-24">
      <article className="max-w-2xl mx-auto px-6">
        <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">Fine print, plain language</p>
        <h1 className="font-display text-4xl md:text-5xl text-sand-100 leading-tight mb-3">
          Privacy &amp; Terms
        </h1>
        <p className="text-sand-500 text-sm mb-12">Last updated · {updated}</p>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">What I collect</h2>
          <p className="text-sand-300 leading-relaxed">
            When you apply for a tour or fee waiver, I ask for the basics: name, email, country,
            phone, the tour you want, why you want it, any health/dietary notes, and your travel
            history. Sometimes a social handle or portfolio link if you offer one. That&apos;s it.
          </p>
          <p className="text-sand-300 leading-relaxed">
            No cookies, no tracking pixels, no analytics on the site yet. If I ever add something
            like Plausible or Vercel Analytics, I&apos;ll list it here first.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">What I do with it</h2>
          <ul className="space-y-2 text-sand-300 leading-relaxed list-disc pl-5">
            <li>Read every application personally.</li>
            <li>Reply by email — usually within 48 hours.</li>
            <li>If you book, keep your details for the trip and however long Mongolian tax/legal records require.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">What I never do</h2>
          <ul className="space-y-2 text-sand-300 leading-relaxed list-disc pl-5">
            <li>Sell your data.</li>
            <li>Send marketing blasts.</li>
            <li>Share your info with anyone except as required by Mongolian or your country&apos;s law.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">Booking terms</h2>
          <ul className="space-y-2 text-sand-300 leading-relaxed list-disc pl-5">
            <li><strong className="text-sand-100">30% deposit</strong> confirms your spot.</li>
            <li>Balance due <strong className="text-sand-100">45 days before departure</strong>.</li>
            <li>Cancellation schedule — see the full detail on the <Link href="/book" className="text-sand-300 underline underline-offset-4 hover:text-sand-100">/book</Link> page.</li>
            <li>Altai departures include a flight ticket that becomes non-refundable once issued (typically ~45 days before departure). If you cancel after that, that portion is forfeit.</li>
            <li>If I have to cancel a tour for safety or insufficient signups, you get a full refund or a swap to another date.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">Insurance</h2>
          <p className="text-sand-300 leading-relaxed">
            You must travel with medical, evacuation, and trip-cancellation insurance. If you
            don&apos;t have a plan when you book, tell me and we&apos;ll sort one together.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">Photos on the trip</h2>
          <p className="text-sand-300 leading-relaxed">
            I take photos on every trip and may use some for the site or Instagram. If you&apos;d
            rather not be in any photos I publish, tell me at booking and I&apos;ll respect that —
            no problem.
          </p>
        </section>

        <section className="space-y-4 mb-12">
          <h2 className="font-display text-2xl text-sand-100">Your data, your call</h2>
          <p className="text-sand-300 leading-relaxed">
            Want a copy of what I have on you, or want me to delete it? Email{" "}
            <a href="mailto:tuklobin@gmail.com" className="text-sand-300 underline underline-offset-4 hover:text-sand-100">
              tuklobin@gmail.com
            </a>
            . I&apos;ll handle it within a week.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl text-sand-100">Contact</h2>
          <p className="text-sand-300 leading-relaxed">
            <a href="mailto:tuklobin@gmail.com" className="text-sand-300 underline underline-offset-4 hover:text-sand-100">
              tuklobin@gmail.com
            </a>
            <br />
            <a href="https://www.instagram.com/tugi.mongolia/" target="_blank" rel="noopener noreferrer" className="text-sand-300 underline underline-offset-4 hover:text-sand-100">
              @tugi.mongolia
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
