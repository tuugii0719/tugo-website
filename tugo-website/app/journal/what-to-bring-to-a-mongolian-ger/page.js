import Image from "next/image";
import Link from "next/link";

export default function GerArticlePage() {
  return (
    <article className="min-h-screen bg-night-950 text-sand-100">
      {/* Header image */}
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="/images/gallery/DSC01558.jpg"
          alt="A Mongolian family ger on the steppe at dusk"
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
            <p className="text-teal-200 text-[11px] tracking-[0.3em] uppercase mb-4 font-medium">
              Mongolia 101 · Ger etiquette
            </p>
            <h1
              className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05] max-w-3xl"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}
            >
              What to bring to a Mongolian ger — and a few things not to do.
            </h1>
            <p className="mt-4 text-sand-300 text-sm">
              By Tugi · June 2026 · 7 min read
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto prose-tugi">
          <p>
            Sleeping in a ger with a nomadic family is the best night of most Mongolia trips. It&apos;s also the night people worry about most — what do I wear, where do I sit, am I going to accidentally insult someone&apos;s grandmother?
          </p>
          <p>
            Short answer: no. Mongolian families are some of the most forgiving hosts on earth. You will not be quietly judged for getting things wrong. They expect foreigners to not know.
          </p>
          <p>
            But there&apos;s a small list of things that&apos;ll make the night smoother — for you and for them — and a couple of small things that genuinely matter. Here it is, the version I&apos;d give a friend before their first ger night.
          </p>

          <h2>What a ger actually is</h2>
          <p>
            A ger is the white round tent you&apos;ve seen in every Mongolia photo. Felt walls over a collapsible wooden frame, central stove, smoke hole at the top. Most herding families have one as their permanent home. They take about two hours to assemble or take down.
          </p>
          <p>
            Inside, the layout is the same in every ger in the country, because it&apos;s tied to direction. The door faces south. The back (the wall opposite the door) is north — that&apos;s the <em>khoimor</em>, where the family altar sits and where honored guests are seated. East side is traditionally the women&apos;s side (kitchen, water, food). West side is the men&apos;s side (saddles, tools, men&apos;s belongings). The center is the stove.
          </p>
          <p>
            None of this is enforced strictly with foreigners. But if you understand the geometry, the rest of the etiquette makes sense.
          </p>

          <h2>What to bring</h2>

          <h3>The actual essentials</h3>
          <ul>
            <li><strong>A headlamp.</strong> No electricity, or electricity only when the solar panel cooperates. A phone torch works but eats battery.</li>
            <li><strong>Earplugs.</strong> Dogs bark at night. Livestock moves. The wind hits the felt walls. Some people sleep through it; some really don&apos;t.</li>
            <li><strong>Wet wipes.</strong> No running water. You wash from a bowl in the morning. Wipes cover the gap.</li>
            <li><strong>A sleeping bag liner</strong> if you&apos;re particular. Most families provide bedding and most bedding is clean — but some camps wash less often than you&apos;d like. A silk or cotton liner solves it.</li>
            <li><strong>Thick socks.</strong> You take your shoes off inside. The floor is felt over wood; cold in the morning before the stove gets going.</li>
            <li><strong>Toilet paper.</strong> The outhouse is usually a wooden hut over a hole, 20–30 meters from the ger. No paper. Bring your own.</li>
            <li><strong>Cash in tugrik.</strong> If you want to tip the family or buy something from them (a small leather thing, a jar of <em>aaruul</em>), Mongolian cash. They don&apos;t take cards and dollars are awkward for them to spend.</li>
          </ul>

          <h3>Good gifts (small, practical)</h3>
          <p>
            Don&apos;t bring money. It makes things weird. Bring something small from your country:
          </p>
          <ul>
            <li>Sweets or chocolate (kids love these; adults eat them with tea)</li>
            <li>A scarf, a postcard, a coin from where you&apos;re from</li>
            <li>School supplies if you&apos;re going to a family with kids — pens, notebooks, simple toys</li>
            <li>Reading glasses (cheap drugstore ones; older herders often need them and can&apos;t get them locally)</li>
          </ul>
          <p>
            <strong>Don&apos;t bring alcohol.</strong> Some families don&apos;t drink. Some really shouldn&apos;t. It&apos;s never wrong to skip this.
          </p>

          <h2>The actual rules — the ones that matter</h2>

          <h3>Right foot in, don&apos;t step on the threshold</h3>
          <p>
            When you enter, lead with your right foot. Step <em>over</em> the wooden threshold at the base of the door, not on it. The threshold (<em>bos</em>) is symbolic — stepping on it is the equivalent of stepping on someone&apos;s spine. Easy to remember once you know.
          </p>

          <h3>Move clockwise</h3>
          <p>
            Once inside, move to the left (west) and circle clockwise around the stove. The host will gesture where to sit. If you&apos;re an honored guest, that&apos;s the north (khoimor) — facing the door, back to the altar.
          </p>

          <h3>Accept the tea</h3>
          <p>
            The first thing you&apos;ll be handed is milk tea — <em>suutei tsai</em>. Salted milk with brick tea boiled in. Some foreigners hate it. Drink some anyway. Refusing the first tea is the closest thing to a real insult I know in Mongolian hospitality. Even one sip is fine. After that you can decline more.
          </p>

          <h3>Don&apos;t point your feet at the altar</h3>
          <p>
            When sitting, don&apos;t stretch your legs out toward the north wall — that&apos;s where the family altar is. Cross your legs, tuck them under you, or angle them toward the door. Same logic if you&apos;re sleeping: head toward the altar, feet toward the door.
          </p>

          <h3>Don&apos;t touch the central posts</h3>
          <p>
            The two wooden poles (<em>bagana</em>) in the middle hold the roof up. Don&apos;t lean on them, don&apos;t pass things around them. Walking <em>between</em> the two posts is also avoided — walk around.
          </p>

          <h3>Use the right hand (or both)</h3>
          <p>
            When you&apos;re handed something — a bowl, the snuff bottle (<em>khuurug</em>), a piece of cheese — accept with your right hand, or both hands, never the left. The left is considered unclean (older taboo, still observed). Same when handing things over.
          </p>

          <h3>Don&apos;t whistle inside</h3>
          <p>
            Whistling inside the ger is bad luck. Hum if you must.
          </p>

          <h3>Don&apos;t put anything on the stove that isn&apos;t food or wood</h3>
          <p>
            The stove is sacred. No trash in it. No water poured on the embers. Don&apos;t step over it. Tugi&apos;s grandmother would call that down a whole generation.
          </p>

          <h2>Things foreigners worry about that don&apos;t matter</h2>
          <ul>
            <li><strong>The food is safe.</strong> Mutton is cooked thoroughly. <em>Khuushuur</em>, <em>buuz</em>, <em>khorkhog</em> — all fine. The dairy is fermented, which is its own preservation. You will not get sick. (You might, separately, decide you&apos;re not a huge fan of fermented mare&apos;s milk — that&apos;s allowed.)</li>
            <li><strong>The dogs look terrifying, they&apos;re fine.</strong> Mongolian herding dogs are big, loud, and committed to their job. Don&apos;t run from them. Walk normally, let the family call them off. If you&apos;re approaching a ger from a distance, the herder will come out and the dogs will stand down.</li>
            <li><strong>The smell of mutton fat in everything.</strong> Yes. That&apos;s the country. You stop noticing it by day two.</li>
            <li><strong>You&apos;ll sleep poorly the first night.</strong> Probably. The second night you sleep like a stone.</li>
          </ul>

          <h2>How to leave on a high note</h2>
          <p>
            In the morning, help carry things out. Bring your bowl back to wherever it came from. Say <em>bayarlalaa</em> (thank you) to the woman of the house — she did most of the work even if you didn&apos;t see it.
          </p>
          <p>
            If you took photos of anyone, ask before posting them anywhere. Most families don&apos;t mind, but some do. Either way, asking matters.
          </p>
          <p>
            Tipping isn&apos;t expected in the countryside the way it is in cities. If you want to leave something, do it through your guide rather than handing cash directly — it lands better. A gift on departure is always welcomed.
          </p>

          {/* Soft CTA */}
          <hr className="border-sand-800/40 my-12" />
          <div className="rounded-2xl border border-teal-800/30 bg-night-900/40 p-6 md:p-8 not-prose">
            <p className="text-teal-300/90 text-[10px] tracking-[0.3em] uppercase mb-3">
              Ger nights, properly
            </p>
            <h3 className="font-display text-xl md:text-2xl text-sand-100 mb-3">
              Every tour I run includes nights with families.
            </h3>
            <p className="text-sand-300 text-sm md:text-base leading-relaxed mb-5">
              Not staged camps for tourists — actual families I know, in their actual gers. I handle the etiquette so you don&apos;t have to memorize this list. You just show up.
            </p>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-400/40 text-teal-200 text-xs tracking-wider hover:bg-teal-400/10 hover:border-teal-300 transition-colors"
            >
              See the 2026 trips →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
