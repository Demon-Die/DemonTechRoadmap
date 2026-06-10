import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Demon Tech Roadmap",
    template: "%s | Demon Tech Roadmap",
  },

  description:
    "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",

  keywords: [
    "Demon Tech Roadmap",
    "developer roadmap",
    "learning roadmap",
    "web development roadmap",
    "python roadmap",
    "AI roadmap",
    "machine learning roadmap",
    "open source roadmap",
    "programming roadmap",
    "technology learning path",
    "beginner developers",
    "software engineering",
  ],

  applicationName: "Demon Tech Roadmap",

  openGraph: {
    title: "Demon Tech Roadmap",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
    type: "website",
    locale: "en_US",
    siteName: "Demon Tech Roadmap",
  },

  twitter: {
    card: "summary_large_image",
    title: "Demon Tech Roadmap",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Demon Tech Roadmap",
    url: "https://demon-tech-roadmap.vercel.app",
    description:
      "Community-driven roadmaps that help beginners learn technology through clear learning paths, curated resources, and project-focused growth.",
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}