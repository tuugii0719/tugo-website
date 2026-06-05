const SITE_URL = "https://wildmongoliawithtugi.com";

const tourSlugs = [
  "altai-tavan-bogd",
  "gobi-glimpse",
  "naadam",
  "north-central",
  "playtime",
  "southern-gobi",
  "terelj-escape",
];

const topRoutes = ["", "/about", "/tours", "/book", "/gallery", "/why-tour-tugo", "/journal"];

const journalPosts = ["naadam-village-vs-ulaanbaatar"];

export default function sitemap() {
  const now = new Date();
  return [
    ...topRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1.0 : 0.8,
    })),
    ...tourSlugs.map((slug) => ({
      url: `${SITE_URL}/tours/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...journalPosts.map((slug) => ({
      url: `${SITE_URL}/journal/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];
}
