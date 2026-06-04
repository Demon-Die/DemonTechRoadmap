"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;
type Topic = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  subtopics: string[];
  keyPoints: string[];
  practice: string;
  resources: number;
  code: string;
  notes: string[];
};

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

const topics: Topic[] = [
  {
    id: "what-is-html",
    title: "What is HTML?",
    level: "Beginner",
    summary: "Understand HTML as the structure layer of the web and learn how browsers render documents.",
    subtopics: ["HTML role", "Browser rendering", "Document tree", "Basic file", "Tags"],
    keyPoints: [
      "HTML defines the structure and meaning of web content.",
      "Browsers parse HTML into the DOM before painting the page.",
      "A valid page starts with a doctype, html, head, and body.",
    ],
    practice: "Create a basic HTML file with a title, heading, paragraph, and link.",
    resources: 5,
    code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello HTML5</h1>
    <p>This page has structure, meaning, and content.</p>
  </body>
</html>`,
    notes: [
      "doctype tells the browser to use standards mode.",
      "lang helps browsers, translation tools, and assistive technology.",
      "The body contains visible page content.",
    ],
  },
  {
    id: "syntax-elements",
    title: "HTML Syntax & Elements",
    level: "Beginner",
    summary: "Learn opening tags, closing tags, void elements, nesting, and attributes.",
    subtopics: ["Elements", "Attributes", "Void tags", "Nesting", "Comments"],
    keyPoints: [
      "Most elements have opening and closing tags.",
      "Attributes add extra information such as href, src, alt, id, and class.",
      "Correct nesting keeps the DOM predictable.",
    ],
    practice: "Write a small profile card using attributes, nested content, and one HTML comment.",
    resources: 6,
    code: `<article class="profile-card" id="rishi-profile">
  <!-- Short public profile -->
  <h2>Rishi Bhardwaj</h2>
  <p>Frontend learner building strong HTML foundations.</p>
  <img src="/avatar.png" alt="Rishi smiling" />
</article>`,
    notes: [
      "class is commonly used for styling and grouping.",
      "id should be unique on the page.",
      "img is a void element, so it does not wrap child content.",
    ],
  },
  {
    id: "text-content",
    title: "Text, Headings & Inline Elements",
    level: "Beginner",
    summary: "Use headings, paragraphs, line breaks, emphasis, strong text, and inline semantics.",
    subtopics: ["Headings", "Paragraphs", "strong", "em", "br", "Inline text"],
    keyPoints: [
      "Use headings to create a meaningful document outline.",
      "Use strong and em for meaning, not just visual styling.",
      "Paragraphs should contain readable chunks of related text.",
    ],
    practice: "Create an article with one h1, multiple h2 sections, paragraphs, and emphasized terms.",
    resources: 6,
    code: `<main>
  <h1>HTML5 Study Notes</h1>
  <section>
    <h2>Why Semantics Matter</h2>
    <p><strong>Semantic HTML</strong> gives content meaning.</p>
    <p>Use <em>emphasis</em> when a word should be stressed.</p>
  </section>
</main>`,
    notes: [
      "Avoid skipping heading levels for visual size only.",
      "CSS should control appearance; HTML should describe meaning.",
      "Inline elements flow inside text content.",
    ],
  },
  {
    id: "links-images",
    title: "Links & Images",
    level: "Beginner",
    summary: "Create internal links, external links, download links, email links, and accessible images.",
    subtopics: ["Anchor tags", "href", "target", "Images", "Alt text"],
    keyPoints: [
      "Anchor text should describe the destination.",
      "External links opened in new tabs should use rel for security.",
      "Every meaningful image needs useful alt text.",
    ],
    practice: "Build a resources section with three links and two images with different alt strategies.",
    resources: 7,
    code: `<a href="/docs/quick-start">Read the quick start</a>
<a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">
  Visit MDN
</a>
<img src="/html-logo.png" alt="HTML5 shield logo" />`,
    notes: [
      "Use relative URLs for routes inside your own site.",
      "Decorative images can use empty alt text.",
      "Download and mailto links should make their action obvious.",
    ],
  },
  {
    id: "lists-tables",
    title: "Lists & Tables",
    level: "Beginner",
    summary: "Structure ordered lists, unordered lists, description lists, and accessible tables.",
    subtopics: ["ul", "ol", "dl", "table", "thead", "scope"],
    keyPoints: [
      "Use lists when items are related.",
      "Use tables only for real row-and-column data.",
      "Table headers and scope improve accessibility.",
    ],
    practice: "Create a weekly learning plan list and a table comparing HTML elements.",
    resources: 8,
    code: `<table>
  <caption>Learning Plan</caption>
  <thead>
    <tr>
      <th scope="col">Day</th>
      <th scope="col">Topic</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td>Semantic HTML</td>
    </tr>
  </tbody>
</table>`,
    notes: [
      "caption gives the table a visible or accessible title.",
      "scope connects headers to cells.",
      "Do not use tables for page layout.",
    ],
  },
  {
    id: "semantic-html",
    title: "Semantic HTML5 Elements",
    level: "Intermediate",
    summary: "Use header, nav, main, section, article, aside, and footer to describe page regions.",
    subtopics: ["header", "nav", "main", "section", "article", "footer"],
    keyPoints: [
      "Semantic elements communicate purpose to browsers and assistive tech.",
      "main should represent the primary content of the page.",
      "article works well for self-contained content that can stand alone.",
    ],
    practice: "Rebuild a div-heavy page using semantic landmarks and sectioning elements.",
    resources: 7,
    code: `<body>
  <header>
    <nav aria-label="Primary">...</nav>
  </header>
  <main>
    <article>
      <h1>HTML5 Roadmap</h1>
      <p>Learn structure before styling.</p>
    </article>
  </main>
  <footer>Copyright DemonTech</footer>
</body>`,
    notes: [
      "Landmarks make keyboard and screen-reader navigation easier.",
      "Use section when the content has a heading and thematic grouping.",
      "Avoid replacing semantic elements with generic divs without reason.",
    ],
  },
  {
    id: "forms",
    title: "HTML Forms",
    level: "Intermediate",
    summary: "Build forms with labels, inputs, selects, textareas, validation, and submit behavior.",
    subtopics: ["form", "label", "input types", "textarea", "select", "Validation"],
    keyPoints: [
      "Every form control needs a label.",
      "HTML5 input types improve mobile keyboards and validation.",
      "required, minlength, pattern, and type can provide native validation.",
    ],
    practice: "Build a contact form with name, email, topic, message, and consent fields.",
    resources: 9,
    code: `<form action="/contact" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="message">Message</label>
  <textarea id="message" name="message" minlength="20"></textarea>

  <button type="submit">Send</button>
</form>`,
    notes: [
      "The for attribute should match the input id.",
      "Use name so submitted form data has a key.",
      "Native validation is helpful, but server validation is still required.",
    ],
  },
  {
    id: "multimedia",
    title: "Multimedia, Audio, Video & Embeds",
    level: "Intermediate",
    summary: "Add video, audio, captions, responsive embeds, SVG, and iframe content safely.",
    subtopics: ["video", "audio", "track", "iframe", "SVG", "Embeds"],
    keyPoints: [
      "Video and audio should provide controls when users need playback control.",
      "Captions make video content accessible.",
      "iframes should use descriptive titles and careful permissions.",
    ],
    practice: "Embed a video with captions and an iframe with a useful title.",
    resources: 7,
    code: `<video controls width="640" poster="/preview.jpg">
  <source src="/lesson.mp4" type="video/mp4" />
  <track src="/captions.vtt" kind="captions" srclang="en" label="English" />
  Your browser does not support the video element.
</video>`,
    notes: [
      "source lets the browser choose a supported media file.",
      "track adds captions, subtitles, or descriptions.",
      "poster shows an image before playback starts.",
    ],
  },
  {
    id: "head-metadata",
    title: "The head Element & Metadata",
    level: "Intermediate",
    summary: "Configure title, viewport, charset, descriptions, social previews, icons, and resource hints.",
    subtopics: ["title", "meta", "viewport", "Open Graph", "icons", "preload"],
    keyPoints: [
      "The title is critical for tabs, bookmarks, and search results.",
      "The viewport tag is required for responsive layouts.",
      "Meta descriptions and Open Graph tags improve previews.",
    ],
    practice: "Write a complete head block for a portfolio homepage.",
    resources: 8,
    code: `<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DemonTech HTML5 Roadmap</title>
  <meta name="description" content="Learn modern HTML5 from beginner to advanced." />
  <meta property="og:title" content="HTML5 Roadmap" />
</head>`,
    notes: [
      "Metadata is not visible in the body but strongly affects the page.",
      "Open Graph controls link previews on many platforms.",
      "Keep descriptions human-readable and specific.",
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    level: "Advanced",
    summary: "Write HTML that works with keyboards, screen readers, labels, landmarks, and ARIA.",
    subtopics: ["a11y", "ARIA", "Alt text", "Labels", "Keyboard", "Roles"],
    keyPoints: [
      "Prefer native semantic HTML before reaching for ARIA.",
      "Interactive elements must be keyboard accessible.",
      "Accessible names help assistive technology identify controls.",
    ],
    practice: "Audit a page for headings, labels, alt text, focus order, and button/link usage.",
    resources: 9,
    code: `<button type="button" aria-expanded="false" aria-controls="menu">
  Menu
</button>
<nav id="menu" aria-label="Main navigation">
  <a href="/docs/all-roadmaps">Roadmaps</a>
</nav>`,
    notes: [
      "ARIA can improve custom UI, but wrong ARIA can make things worse.",
      "Use button for actions and a for navigation.",
      "Visible focus styles are part of accessibility.",
    ],
  },
  {
    id: "html5-apis",
    title: "HTML5 Web APIs",
    level: "Advanced",
    summary: "Explore Canvas, Drag and Drop, Geolocation, Web Storage, Web Workers, and Intersection Observer.",
    subtopics: ["Canvas", "Drag and Drop", "Geolocation", "Local Storage", "Workers", "Observer"],
    keyPoints: [
      "Canvas is useful for custom drawing and visualizations.",
      "Web Storage saves small client-side values.",
      "Intersection Observer can detect when elements enter the viewport.",
    ],
    practice: "Build a small page that saves theme preference with localStorage.",
    resources: 10,
    code: `<canvas id="chart" width="300" height="160"></canvas>
<script>
  const canvas = document.querySelector("#chart");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#f97316";
  ctx.fillRect(20, 20, 120, 80);
</script>`,
    notes: [
      "APIs are accessed through JavaScript, but HTML provides the elements and structure.",
      "Some APIs require user permission or secure origins.",
      "Use APIs progressively so content still has a useful fallback.",
    ],
  },
  {
    id: "performance",
    title: "HTML Performance Best Practices",
    level: "Advanced",
    summary: "Optimize resource loading, script behavior, image loading, and Core Web Vitals.",
    subtopics: ["preload", "defer", "async", "lazy loading", "Core Web Vitals"],
    keyPoints: [
      "Load critical resources early and defer non-critical work.",
      "Images should include dimensions to reduce layout shift.",
      "defer keeps scripts from blocking HTML parsing.",
    ],
    practice: "Improve an HTML page by adding lazy images, deferred scripts, and image dimensions.",
    resources: 7,
    code: `<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
<img src="/hero.jpg" alt="HTML workspace" width="1200" height="640" loading="eager" />
<script src="/app.js" defer></script>`,
    notes: [
      "Preload should be used for genuinely important resources.",
      "Use loading=\"lazy\" for below-the-fold images.",
      "Script strategy affects how quickly the page becomes interactive.",
    ],
  },
  {
    id: "seo-structured-data",
    title: "SEO & Structured Data",
    level: "Advanced",
    summary: "Use semantic structure, metadata, headings, canonical URLs, and JSON-LD schema.",
    subtopics: ["SEO", "Meta tags", "Canonical", "Structured data", "Headings"],
    keyPoints: [
      "Search engines benefit from clear headings and semantic content.",
      "Structured data describes entities in machine-readable form.",
      "Each page should have a unique title and description.",
    ],
    practice: "Add title, description, canonical, and JSON-LD to a blog article page.",
    resources: 8,
    code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HTML5 Roadmap",
  "author": { "@type": "Person", "name": "DemonTech" }
}
</script>`,
    notes: [
      "Structured data should match visible page content.",
      "Do not stuff keywords into metadata.",
      "Good HTML structure supports both SEO and accessibility.",
    ],
  },
  {
    id: "web-components",
    title: "Web Components",
    level: "Advanced",
    summary: "Learn custom elements, shadow DOM concepts, templates, and reusable native components.",
    subtopics: ["Custom elements", "Templates", "Shadow DOM", "Slots", "Lifecycle"],
    keyPoints: [
      "Custom elements define reusable browser-native components.",
      "template stores inert markup until JavaScript clones it.",
      "Web Components can work across frameworks when designed carefully.",
    ],
    practice: "Create a simple custom element that renders a reusable alert message.",
    resources: 6,
    code: `<template id="alert-template">
  <strong>Note:</strong>
  <span></span>
</template>

<demon-alert message="HTML can power reusable components."></demon-alert>`,
    notes: [
      "Templates are not rendered until used.",
      "Custom element names must contain a hyphen.",
      "Use Web Components when native reuse is more important than framework-specific patterns.",
    ],
  },
  {
    id: "build-projects",
    title: "Build Projects",
    level: "Advanced",
    summary: "Apply HTML5 by building real pages with forms, media, semantics, SEO, and accessibility.",
    subtopics: ["Portfolio", "Resume", "Landing page", "Documentation", "Dashboard", "SaaS page"],
    keyPoints: [
      "Projects turn isolated elements into real page structure.",
      "Review each project for semantics, accessibility, SEO, and performance.",
      "Build without CSS first to test whether the document structure makes sense.",
    ],
    practice: "Build a portfolio, documentation page, product landing page, and accessible contact form.",
    resources: 9,
    code: `<main>
  <section>
    <h1>Project: Accessible Portfolio</h1>
    <p>Use semantic HTML, forms, images, metadata, and clean navigation.</p>
  </section>
</main>`,
    notes: [
      "A strong HTML foundation makes CSS and JavaScript easier.",
      "Test with keyboard navigation and a validator.",
      "Ship small projects, then improve them with feedback.",
    ],
  },
];

const icons: Record<string, ReactNode> = {
  home: <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  book: <path d="M5 4h7a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H5V4Zm10 0h4v14h-4" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  levels: <path d="M5 19V9m7 10V5m7 14v-7" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  check: <path d="m5 12 4 4L19 6" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />,
};

const darkTheme: ThemeVars = {
  "--page-bg": "#030303",
  "--header-bg": "rgba(3, 3, 3, 0.92)",
  "--panel-bg": "rgba(8, 9, 10, 0.82)",
  "--panel-strong": "rgba(13, 14, 15, 0.95)",
  "--field-bg": "rgba(8, 8, 9, 0.88)",
  "--border": "rgba(249, 115, 22, 0.22)",
  "--text-primary": "#f8fafc",
  "--text-secondary": "#c7c9d1",
  "--text-muted": "#8c909b",
  "--shadow": "rgba(0, 0, 0, 0.34)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#fffaf5",
  "--header-bg": "rgba(255, 250, 245, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.9)",
  "--panel-strong": "rgba(255, 247, 237, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.94)",
  "--border": "rgba(234, 88, 12, 0.22)",
  "--text-primary": "#1c1917",
  "--text-secondary": "#44403c",
  "--text-muted": "#78716c",
  "--shadow": "rgba(67, 20, 7, 0.08)",
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function DemonTechLogo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_32px_rgba(249,115,22,0.24)]">
        <Image
          alt="DemonTech logo"
          className="h-full w-full object-cover"
          height={56}
          src="/demontech-logo.png"
          width={56}
        />
      </div>
      <div>
        <p className="text-2xl font-black leading-6 tracking-normal text-[var(--text-primary)]">
          Demon<span className="text-orange-500">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

export default function HTML5Roadmap() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTopicId, setActiveTopicId] = useState(topics[0].id);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const activeTopic = topics.find((topic) => topic.id === activeTopicId) ?? topics[0];

  const levelCounts = useMemo(
    () =>
      topics.reduce<Record<Topic["level"], number>>(
        (counts, topic) => ({ ...counts, [topic.level]: counts[topic.level] + 1 }),
        { Beginner: 0, Intermediate: 0, Advanced: 0 },
      ),
    [],
  );

  return (
    <main
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_78%_15%,rgba(249,115,22,0.18),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(251,146,60,0.1),transparent_26%),linear-gradient(180deg,#020202_0%,#050505_100%)]"
            : "bg-[radial-gradient(circle_at_78%_14%,rgba(251,146,60,0.18),transparent_27%),radial-gradient(circle_at_16%_80%,rgba(249,115,22,0.1),transparent_25%),linear-gradient(180deg,#fffaf5_0%,#ffffff_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1540px] items-center gap-8 px-5 lg:px-8">
          <DemonTechLogo />

          <nav className="ml-auto hidden items-center gap-10 text-sm font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`transition hover:text-orange-500 ${item === "Roadmaps" ? "text-orange-500" : ""}`}
                href={item === "Roadmaps" ? "/docs/all-roadmaps" : "#"}
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <label className="hidden h-11 w-[280px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>

          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-orange-500"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>

          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-orange-500/50 bg-orange-600 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(249,115,22,0.28)] transition hover:bg-orange-500 md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1540px] grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-82px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="sticky top-[102px] rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Get Started</p>
            <nav className="mt-5 space-y-1 text-sm text-[var(--text-secondary)]">
              {["Introduction", "How Roadmaps Work", "Learning Paths", "Quick Start"].map((item) => (
                <a
                  className="flex h-10 items-center gap-3 rounded-md px-3 transition hover:bg-[var(--panel-strong)] hover:text-orange-500"
                  href={item === "Quick Start" ? "/docs/quick-start" : "#"}
                  key={item}
                >
                  <Icon className="h-4 w-4" name={item === "Introduction" ? "home" : "chevron"} />
                  {item}
                </a>
              ))}
            </nav>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-orange-500">Roadmap</p>
            <nav className="mt-5 space-y-1">
              {(["Beginner", "Intermediate", "Advanced"] as const).map((level) => (
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md px-3 text-left text-sm text-[var(--text-secondary)] transition hover:bg-[var(--panel-strong)] hover:text-orange-500"
                  key={level}
                  onClick={() => setActiveTopicId(topics.find((topic) => topic.level === level)?.id ?? topics[0].id)}
                  type="button"
                >
                  <span>{level}</span>
                  <span className="rounded border border-[var(--border)] px-2 py-0.5 text-xs">{levelCounts[level]}</span>
                </button>
              ))}
            </nav>

            <div className="mt-9 rounded-lg border border-orange-500/25 bg-black/20 p-4">
              <div className="grid h-20 w-full place-items-center rounded-md border border-orange-500/35 bg-black/40 text-4xl font-black text-orange-500">
                HTML5
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">Structure first.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Great websites start with meaningful, accessible HTML.
              </p>
            </div>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-orange-500" name="home" />
              <Link className="hover:text-orange-500" href="/docs/all-roadmaps">
                Roadmaps
              </Link>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">HTML5 Roadmap</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-orange-500/40 bg-orange-600 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Icon className="h-4 w-4" name="spark" />
                  HTML5 Complete Documentation
                </div>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
                  HTML5 <span className="text-orange-500">Roadmap</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  A document-backed HTML5 roadmap from page structure and text elements to forms, media,
                  accessibility, performance, SEO, Web APIs, and Web Components.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Level", "Beginner to Advanced", "levels"],
                    ["Time", "1-2 Months", "clock"],
                    ["Topics", `${topics.length} Core Topics`, "book"],
                  ].map(([label, value, icon]) => (
                    <div className="rounded-md border border-[var(--border)] bg-[var(--panel-bg)] p-4" key={label}>
                      <Icon className="h-5 w-5 text-orange-500" name={icon} />
                      <p className="mt-3 text-xs text-[var(--text-muted)]">{label}</p>
                      <p className="mt-1 text-sm font-black text-[var(--text-primary)]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-orange-500/25 bg-black shadow-[0_0_80px_rgba(249,115,22,0.16)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.14)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500/35 bg-black/80 shadow-[0_0_60px_rgba(249,115,22,0.28)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-black text-orange-500 drop-shadow-[0_0_28px_rgba(249,115,22,0.7)]">
                  HTML5
                </div>
              </div>
            </section>

            <section className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="relative">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-orange-500/45 sm:block" />
                <div className="space-y-4">
                  {topics.map((topic, index) => {
                    const isActive = topic.id === activeTopic.id;

                    return (
                      <article
                        className={`relative rounded-lg border bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] transition ${
                          isActive ? "border-orange-500/65" : "border-[var(--border)] hover:border-orange-500/40"
                        }`}
                        key={topic.id}
                      >
                        <button
                          aria-expanded={isActive}
                          className="grid w-full gap-5 p-5 text-left sm:grid-cols-[56px_minmax(0,1fr)_auto]"
                          onClick={() => setActiveTopicId(topic.id)}
                          type="button"
                        >
                          <span
                            className={`z-10 grid h-12 w-12 place-items-center rounded-lg border text-lg font-black ${
                              isActive
                                ? "border-orange-400 bg-orange-600 text-white"
                                : "border-orange-500 bg-black text-white"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span>
                            <span className="flex flex-wrap items-center gap-3">
                              <span className="text-xl font-black text-[var(--text-primary)]">{topic.title}</span>
                              <span className="rounded border border-[var(--border)] px-2 py-1 text-xs font-bold text-orange-500">
                                {topic.level}
                              </span>
                            </span>
                            <span className="mt-2 block text-sm leading-6 text-[var(--text-secondary)]">{topic.summary}</span>
                            <span className="mt-4 flex flex-wrap gap-2">
                              {topic.subtopics.slice(0, 6).map((subtopic) => (
                                <span
                                  className="rounded border border-[var(--border)] bg-[var(--field-bg)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                                  key={subtopic}
                                >
                                  {subtopic}
                                </span>
                              ))}
                            </span>
                          </span>
                          <span className="hidden items-center gap-2 text-xs font-bold text-[var(--text-muted)] sm:flex">
                            <Icon className="h-4 w-4 text-orange-500" name="book" />
                            {topic.resources} Resources
                            <Icon className={`h-4 w-4 transition ${isActive ? "rotate-90 text-orange-500" : ""}`} name="chevron" />
                          </span>
                        </button>

                        {isActive ? (
                          <div className="border-t border-[var(--border)] px-5 pb-5 sm:ml-[76px]">
                            <div className="mt-5 overflow-hidden rounded-md border border-orange-500/25 bg-black">
                              <div className="flex items-center justify-between border-b border-orange-500/20 bg-orange-500/10 px-4 py-3">
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-orange-500">HTML Example</h3>
                                <span className="rounded border border-orange-500/25 px-2 py-1 text-xs font-bold text-orange-300">
                                  HTML5
                                </span>
                              </div>
                              <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-7 text-slate-100">
                                <code>{topic.code}</code>
                              </pre>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-orange-500">Key Points</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.keyPoints.map((point) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={point}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" name="check" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-orange-500">Study Notes</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.notes.map((note) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={note}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" name="check" />
                                      {note}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4">
                              <h3 className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
                                <Icon className="h-4 w-4 text-orange-500" name="target" />
                                Practice Task
                              </h3>
                              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{topic.practice}</p>
                            </div>
                          </div>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>

              <aside className="space-y-5 xl:sticky xl:top-[104px] xl:self-start">
                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Roadmap Progress</h2>
                  <div className="mt-5 grid place-items-center">
                    <div className="grid h-28 w-28 place-items-center rounded-full border-[10px] border-orange-500/25 border-t-orange-500 text-3xl font-black">
                      0%
                    </div>
                  </div>
                  <p className="mt-5 text-center text-sm leading-6 text-[var(--text-muted)]">Start with structure, then layer accessibility and performance.</p>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">What You'll Learn</h2>
                  <div className="mt-5 space-y-4">
                    {["HTML fundamentals", "Forms and validation", "Semantic structure", "Accessibility", "SEO basics", "Modern HTML5 APIs", "Web Components"].map((item) => (
                      <div className="flex gap-3" key={item}>
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" name="check" />
                        <p className="text-sm font-bold text-[var(--text-secondary)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Helpful Resources</h2>
                  <div className="mt-5 space-y-3 text-sm">
                    {[
                      ["MDN HTML Docs", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
                      ["HTML Living Standard", "https://html.spec.whatwg.org/"],
                      ["web.dev HTML", "https://web.dev/learn/html"],
                      ["W3C Validator", "https://validator.w3.org/"],
                    ].map(([name, href]) => (
                      <a
                        className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-3 py-2 font-bold text-[var(--text-secondary)] transition hover:border-orange-500/45 hover:text-orange-500"
                        href={href}
                        key={name}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {name}
                        <Icon className="h-4 w-4" name="chevron" />
                      </a>
                    ))}
                  </div>
                </section>
              </aside>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
