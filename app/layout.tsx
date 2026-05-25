import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yasinpatel.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yasin Patel — Computer Science @ Université de Montréal",
    template: "%s · Yasin Patel",
  },
  description:
    "Yasin Patel — Computer Science student at Université de Montréal. Building full-stack web apps, ML systems, and developer tools.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Yasin Patel — Computer Science @ Université de Montréal",
    description:
      "Full-stack web apps, ML systems, and developer tools. Centerpiece: SkinFast — a CS2 skin pricing and tradeup optimization tool.",
    siteName: "Yasin Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Patel",
    description:
      "Full-stack web apps, ML systems, and developer tools. Centerpiece: SkinFast.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Computer Science Student",
  email: `mailto:${profile.email}`,
  url: siteUrl,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Université de Montréal" },
    { "@type": "CollegeOrUniversity", name: "Vanier College" },
  ],
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased font-sans">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
