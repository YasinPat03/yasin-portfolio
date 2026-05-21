export type SkinFastSection = {
  heading: string;
  title: string;
  body: string;
};

export const skinfast = {
  title: "SkinFast",
  eyebrow: "May 2026 · centerpiece",
  date: "May 2026",
  stack: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "SQLite",
    "REST APIs",
  ],
  narrative:
    "SkinFast is a real-time CS2 skin pricing and tradeup optimization tool. It scrapes the entire Steam Community Market — 21,000+ items — into a local SQLite cache, then runs an optimizer that finds the most cost-effective tradeup contract for any target skin. Under the hood it solves three problems: ingesting market data without getting rate-limited, modeling tradeup probability across multi-collection input pools, and ranking input combinations by cost-per-attempt and expected value.",
  poster: "/skinfast/poster.png",
  video: "/skinfast/preview.mp4" as string | undefined,
  githubUrl: "https://github.com/YasinPat03",
  liveUrl: "https://skinfast.app" as string | undefined,
  sections: [
    {
      heading: "01 — Scale",
      title: "21,000+ items priced in a single normalized cache",
      body: "The catalog covers 21,000+ tradeable Steam Community Market items, spanning 1,500+ skins and 15,000+ variants across wear conditions, StatTrak, and Souvenir editions. Indexed SQL queries return search results in under 50ms.",
    },
    {
      heading: "02 — Scraper design",
      title: "Paginated Steam scraping with backoff and resumability",
      body: "Pagination through Steam's search/render endpoint runs at 100 items per page with 3–5s jittered delays. Exponential backoff (30s → 60s → 120s) absorbs 429 responses, and scrape offsets persist to a scrape_state table so an interrupted run resumes cleanly. A full scrape completes in about 15 minutes without IP bans.",
    },
    {
      heading: "03 — Caching architecture",
      title: "Stale-while-revalidate over SQLite",
      body: "Bulk scrapes every 4–6 hours hydrate the cache. On-demand priceoverview refreshes target items older than 6 hours, throttled to 20 requests per minute. The serving path follows stale-while-revalidate: cached prices return immediately while a background job refreshes them.",
    },
    {
      heading: "04 — Tradeup optimizer",
      title: "Probability modeling, EV, and cost-per-attempt ranking",
      body: "For any target skin the optimizer enumerates input combinations across collections, computing per-skin probability as the sum over collections of (n_c / 10) × (1 / k_c). A greedy fill with enumeration then explores cheaper substitutions that trade probability for cost. Candidates rank by cost-per-attempt (ascending), and the optimizer also computes expected value to flag positive-EV contracts. The post–October 2025 normalized float formula models output wear.",
    },
    {
      heading: "05 — The data join",
      title: "market_hash_name as the universal join key",
      body: "Steam Market and ByMykel's CSGO-API metadata are bridged through market_hash_name as the universal join key. Two free, independent APIs become one coherent data layer without paying for a third-party aggregator.",
    },
  ] as SkinFastSection[],
} as const;
