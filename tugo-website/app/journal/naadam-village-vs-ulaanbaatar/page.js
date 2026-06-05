import Image from "next/image";
import Link from "next/link";

function Figure({ src, alt, caption }) {
  return (
    <figure className="not-prose my-8 md:my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-sand-800/40">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 672px" />
      </div>
      <figcaption className="mt-2 text-sand-500 text-[13px] leading-snug">{caption}</figcaption>
    </figure>
  );
}

export default function NaadamArticlePage() {
  return (
    <article className="min-h-screen bg-night-950 text-sand-100">
      {/* Header image */}
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/destinations/naadam-horse-racer.jpg"
          alt="Mongolian horse racer at Naadam, dust on the open steppe"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-night-950" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:pb-16">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-sand-300 text-[11px] tracking-[0.3em] uppercase mb-5 hover:text-sand-100 transition-colors"
            >
              ← Journal
            </Link>
            <p className="text-red-200 text-[11px] tracking-[0.3em] uppercase mb-4 font-medium">
              Mongolia 101 · Naadam
            </p>
            <h1
              className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-3xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
            >
              Naadam in a village vs. Naadam in Ulaanbaatar: which one is actually Mongolia?
            </h1>
            <p className="mt-4 text-sand-300 text-sm">
              By Tugi · June 2026 · 6 min read
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto prose-tugi">
          <p>
            Mongolia&apos;s national festival is called Naadam — &quot;the three games of men&quot; — and every July 11–13 the country shuts down for it. Wrestling, horse racing, archery. If you Google &quot;Naadam Mongolia,&quot; 90% of what comes back is footage of the Ulaanbaatar opening ceremony: 10,000 people in a Soviet-era stadium, drone shots of athletes in silk costume, the President walking out.
          </p>
          <p>
            That&apos;s the version most tour operators sell. It&apos;s not actually the version most Mongolians experience.
          </p>
          <p>
            Here&apos;s what&apos;s worth knowing if you want to go.
          </p>

          <h2>The Ulaanbaatar Naadam: what it really is</h2>
          <p>
            The UB Naadam at the Central Stadium is the national event. The opening ceremony on July 11 is legitimately spectacular — choreographed, televised, packed. If you&apos;ve never seen 512 wrestlers walk into a stadium in lambskin briefs and elbow-length silk sleeves, it&apos;s worth seeing once.
          </p>
          <p>
            But.
          </p>
          <p>
            The stadium seats around 20,000 people, and during Naadam those tickets are gone months in advance (or scalped for $200+). Most foreign visitors end up watching it on TVs in restaurants. The horse racing happens 30 km outside UB at Khui Doloon Khudag — a separate trip, a separate crowd. The archery is in a different venue again. You don&apos;t actually watch all three sports in one place. You watch a procession, then catch fragments on a screen.
          </p>
          <p>
            It&apos;s a great spectator event. It&apos;s a terrible immersion experience.
          </p>

          <h2>The village Naadam: what most foreigners don&apos;t see</h2>
          <p>
            Every soum (district) and every aimag (province) in Mongolia runs its own Naadam, usually a week or two before or after the national one. Same three sports, same costumes, same songs. Dramatically different scale.
          </p>

          <Figure
            src="/images/journal/naadam-ground.jpg"
            alt="A village Naadam ground — gers, market tents, a bouncy castle, parked cars, and the roped arena on the open steppe"
            caption="A soum Naadam in full swing — gers, market tents, a bouncy castle, the roped arena, and half the province parked on the grass."
          />
          <p>
            Take a soum in Arkhangai — a district center of a few thousand — where the local Naadam is the biggest day of the year. Families ride in from camps 50 km out. The wrestling happens on a grass field marked with rope. Twenty wrestlers compete instead of 512. You stand five meters from the bouts. You can talk to the wrestlers afterwards. Their grandmother is selling <em>khuushuur</em> (deep-fried mutton pancakes) two stalls over.
          </p>
          <p>
            The horse races aren&apos;t broadcast. They happen on the open steppe with no track and no fence. You drive your jeep along the route to follow the finish.
          </p>
          <p>
            The archery is the strangest one to a foreign eye. It&apos;s the quietest sport in the loudest village. Archers shoot at small leather targets stacked on the ground 65–75 meters away. A line of judges chants when a shot lands. The judges&apos; chant is the only sound for thirty seconds, then another silent shot, another chant.
          </p>

          <h2>The wrestling, specifically</h2>
          <p>
            Mongolian wrestling (<em>bökh</em>) has no weight classes and no time limits. Two men, leather boots, embroidered shorts. First one whose knee, elbow, or back touches the ground loses. That&apos;s it.
          </p>

          <Figure
            src="/images/destinations/naadam-wrestling.jpg"
            alt="Two Mongolian wrestlers in traditional zodog and shuudag locked in a bout at Naadam"
            caption="Bökh: no weight classes, no clock. First to touch a knee, elbow, or back to the ground loses."
          />
          <p>
            At the village level you&apos;ll see matches that last 30 seconds and matches that last 25 minutes. Pre-match, wrestlers do the <em>devekh</em> — the eagle dance — a slow circling stretch that imitates the takeoff of an eagle, hands extended, knees flexed. After winning, the eagle dance happens again — a victory lap, slower, with the wrestler eating <em>aaruul</em> (dried curd) from his pocket like nothing happened.
          </p>
          <p>
            You&apos;ll see grown men hug each other afterward, no matter what. The losing wrestler walks under the winner&apos;s outstretched arm — a gesture of respect that&apos;s older than the Mongol Empire.
          </p>

          <h2>The horse racing</h2>
          <p>
            This is the bit no tour ever shows you properly: in Mongolia, the riders are children. Aged 6 to 12. They ride bareheaded on small Mongolian horses across distances up to 25 km on open steppe. There&apos;s no track, no protective gear, no padded landing. Just kids, horses, and grass.
          </p>

          <Figure
            src="/images/journal/naadam-riders.jpg"
            alt="Two riders grinning on Mongolian horses along an open steppe track in Arkhangai"
            caption="Horse country, Arkhangai. The races run across open ground exactly like this — though on race day the riders are kids."
          />
          <p>
            The horses are bred and trained by the families that race them. A winning horse is more famous in its village than its rider. After the race, the families wash the lead horse with <em>airag</em> (fermented mare&apos;s milk) and sing songs to it.
          </p>
          <p>
            You don&apos;t watch this from a grandstand. You stand at the finish line and wait, and then a dust cloud appears on the horizon, and then it&apos;s hooves and small voices yelling <em>&quot;giin-giin&quot;</em> and the whole village runs out to check which horse came first.
          </p>
          <p>
            That&apos;s Naadam. Not the stadium version.
          </p>

          <h2>Can you take part?</h2>
          <p>
            You can watch all of it up close, for free — no ticket, no registration. Walk right up to the wrestling field, stand at the horse-race finish, watch the archery from a few meters away.
          </p>
          <p>
            The official competition is for locals — the jockeys are herding-family kids, the wrestlers register through the soum. But getting hands-on is easier than you&apos;d think. Families will put a bow in your hands at the archery, pour you <em>airag</em>, pull you into the dancing. And the wrestling: outside the official bracket, a friendly bout with a local is fair game. Test your strength — you&apos;ll lose, and the crowd will love you for trying. Honestly it makes their day too; a foreigner stepping onto the grass is half the entertainment.
          </p>
          <p>
            The real way in is to stay with a family near the event instead of day-tripping. Help cook, help prep the horses, sit through the long lunch — and somewhere in there you stop being a spectator and start being part of the day.
          </p>

          <Figure
            src="/images/journal/naadam-family.jpg"
            alt="A Mongolian family gathered for a meal beside their ger on the green steppe during Naadam"
            caption="Stay with a family near the festival and you stop being a spectator — this is lunch, and you're at the table."
          />

          <h2>How to choose</h2>
          <p>
            Two things to know:
          </p>
          <p>
            <strong>If you have 1–2 days in Ulaanbaatar over July 11–13</strong>, the UB Naadam is the only option that fits. Go to the opening ceremony if you can get a ticket. Then watch the wrestling on a TV with locals at a place like Beatles Pub (yes, really, that&apos;s a real bar in UB).
          </p>
          <p>
            <strong>If you have 4+ days and want to see Mongolia actually do Naadam</strong>, drive west. Village Naadams happen between roughly July 1 and July 20, depending on the soum&apos;s calendar. You won&apos;t find dates on Google — you have to ask a local guide which village is hosting when. That&apos;s the whole reason to use a guide for this.
          </p>

          <h2>Practical notes</h2>
          <ul>
            <li><strong>National Naadam dates:</strong> July 11–13, every year.</li>
            <li><strong>Village Naadam dates:</strong> flexible, July 1–20, varies by location.</li>
            <li><strong>What to bring:</strong> sun protection (no shade on the steppe), a phrasebook (<em>&quot;sain bain uu&quot;</em> = hello), and cash for <em>khuushuur</em> and <em>airag</em>. ATMs don&apos;t exist outside province capitals.</li>
            <li><strong>What to wear:</strong> something modest. Naadam is a national-pride event; locals dress up. Foreigners showing up in beach shorts get a mild side-eye.</li>
          </ul>

          {/* Soft CTA */}
          <hr className="border-sand-800/40 my-12" />
          <div className="rounded-2xl border border-red-800/30 bg-night-900/40 p-6 md:p-8 not-prose">
            <p className="text-red-300/90 text-[10px] tracking-[0.3em] uppercase mb-3">
              The trip
            </p>
            <h3 className="font-display text-xl md:text-2xl text-sand-100 mb-3">
              I run a Naadam tour in Arkhangai.
            </h3>
            <p className="text-sand-300 text-sm md:text-base leading-relaxed mb-5">
              Seven days, July 8–14, 2026 — based with my own relatives near Tsetserleg for a local soum Naadam (not the UB stadium), plus the Orkhon Valley, Terkhiin Tsagaan Nuur, and Tsenkher hot springs. Small group of 5–7.
            </p>
            <Link
              href="/tours/naadam"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-400/40 text-red-200 text-xs tracking-wider hover:bg-red-400/10 hover:border-red-300 transition-colors"
            >
              See the Naadam trip →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
