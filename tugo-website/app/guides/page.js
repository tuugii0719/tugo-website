import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Guides",
  description:
    "Practical guides to Mongolia from Tugi — the festivals, the routes, the markets, and what tours often get wrong.",
};

const posts = [
  {
    slug: "naadam-village-vs-ulaanbaatar",
    title: "Naadam in a village vs. Naadam in Ulaanbaatar",
    blurb:
      "Mongolia's national festival is on July 11–13. Most tours sell the stadium version. Here's the village version — and how to actually see it.",
    image: "/images/destinations/naadam-horse-racer.jpg",
    date: "June 2026",
    read: "6 min",
    kicker: "Mongolia 101 · Naadam",
    accent: "text-red-200",
  },
  {
    slug: "what-to-bring-to-a-mongolian-ger",
    title: "Before you stay with a nomad family: the ger guide",
    blurb:
      "Staying overnight with a nomad family in their own ger — what a family ger is, what to bring and gift, ger etiquette, and the things foreigners worry about that don’t matter.",
    image: "/images/gallery/DSC01558.jpg",
    date: "June 2026",
    read: "8 min",
    kicker: "Mongolia 101 · Staying with a family",
    accent: "text-teal-200",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-night-950 text-sand-100">
      <section className="px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-sand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Guides
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-sand-100 leading-[1.05] mb-5">
            Guides to Mongolia.
          </h1>
          <p className="text-sand-300 text-base md:text-lg max-w-xl leading-relaxed">
            Practical pieces I&apos;ve been meaning to write — about the festivals, the routes, the markets, and the parts of the country tours often skip or get wrong.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="group grid grid-cols-1 md:grid-cols-5 gap-6 rounded-2xl overflow-hidden bg-night-900/40 border border-sand-800/40 hover:border-sand-600/60 transition-colors"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:col-span-2 md:min-h-[200px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                <p className={`${post.accent} text-[10px] tracking-[0.3em] uppercase mb-3`}>
                  {post.kicker}
                </p>
                <h2 className="font-display text-xl md:text-2xl text-sand-100 leading-tight mb-3 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-sand-400 text-sm md:text-base leading-relaxed mb-4">
                  {post.blurb}
                </p>
                <p className="text-sand-500 text-xs">
                  {post.date} · {post.read}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
