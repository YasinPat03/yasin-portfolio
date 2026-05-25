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
    "SkinFast is a real-time CS2 skin pricing and tradeup optimization tool. It scrapes the entire Steam Community Market, 21,000+ items, into a local SQLite cache, then runs an optimizer that finds the most cost-effective tradeup contract for any target skin. Under the hood it solves three problems: ingesting market data without getting rate-limited, modeling tradeup probability across multi-collection input pools, and ranking input combinations by cost-per-attempt and expected value.",
  poster: "/skinfast/poster.png",
  video: "/skinfast/preview.mp4" as string | undefined,
  githubUrl: "https://github.com/YasinPat03",
  liveUrl: "https://skinfast.app" as string | undefined,
  sections: [
    {
      heading: "01 — Web Scraper",
      title: "Full Steam Market scraper with 21,000+ live items",
      body: "A custom scraper crawls Steam's entire Community Market, 21,000+ items, with jittered delays, exponential backoff, and resumable offsets. A full pass completes in about 15 minutes without triggering rate limits.",
    },
    {
      heading: "02 — Real-Time Prices",
      title: "Live pricing via stale-while-revalidate caching",
      body: "Bulk scrapes every 4–6 hours hydrate a local SQLite cache, and on-demand refreshes keep high-traffic items current. Cached prices serve instantly while background jobs pull the latest data from Steam.",
    },
    {
      heading: "03 — Tradeup Algorithm",
      title: "Probability modeling and cost-per-attempt ranking",
      body: "For any target skin the optimizer enumerates input combinations across collections, models per-skin probability, and ranks candidates by cost-per-attempt and expected value, surfacing positive-EV contracts automatically.",
    },
    {
      heading: "04 — One of a Kind",
      title: "The only site in the world with the most profitable tradeups",
      body: "No other platform combines a full live-priced catalog with a probabilistic optimizer. SkinFast surfaces tradeup contracts that don't appear anywhere else, giving users an edge that simply isn't available on any competing tool.",
    },
  ] as SkinFastSection[],
} as const;
