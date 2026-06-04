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
  goals: string[];
  practice: string[];
  code: string;
  resources: number;
};

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

const topics: Topic[] = [
  {
    id: "css-basics",
    title: "CSS Basics",
    level: "Beginner",
    summary: "Learn what CSS does, how stylesheets connect to HTML, and how the cascade resolves conflicts.",
    subtopics: ["Syntax", "Stylesheets", "Cascade", "Specificity", "Inheritance", "Comments"],
    goals: [
      "Explain how CSS controls presentation for HTML documents.",
      "Link external stylesheets correctly.",
      "Predict which rule wins when multiple rules target the same element.",
    ],
    practice: ["Style a plain HTML resume.", "Create a profile card using only CSS.", "Recreate a simple color palette."],
    code: `/* styles.css */
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  color: #e5e7eb;
  background: #020617;
}

.profile-card {
  max-width: 28rem;
  padding: 2rem;
  border: 1px solid #1d4ed8;
  border-radius: 8px;
}`,
    resources: 6,
  },
  {
    id: "selectors",
    title: "Selectors",
    level: "Beginner",
    summary: "Target elements using type, class, id, attribute, pseudo-class, and pseudo-element selectors.",
    subtopics: ["Type", "Class", "ID", "Attribute", "Pseudo-class", "Pseudo-element"],
    goals: [
      "Choose selectors that are clear and maintainable.",
      "Calculate selector specificity.",
      "Use pseudo-classes and pseudo-elements for states and generated content.",
    ],
    practice: ["Build hover/focus states for a navbar.", "Write selectors for form states.", "Style first and last items in a list."],
    code: `a[href^="https"] {
  color: #60a5fa;
}

button:hover,
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 3px;
}

.card::before {
  content: "";
  display: block;
  height: 4px;
  background: linear-gradient(90deg, #2563eb, #38bdf8);
}`,
    resources: 8,
  },
  {
    id: "box-model",
    title: "Box Model",
    level: "Beginner",
    summary: "Control content, padding, border, margin, width, height, and sizing behavior.",
    subtopics: ["Content", "Padding", "Border", "Margin", "Width", "box-sizing"],
    goals: [
      "Describe the box model for any element.",
      "Use box-sizing: border-box confidently.",
      "Debug spacing and sizing problems in layouts.",
    ],
    practice: ["Build a pricing card.", "Create evenly spaced content sections.", "Compare content-box and border-box."],
    code: `*,
*::before,
*::after {
  box-sizing: border-box;
}

.pricing-card {
  width: min(100%, 360px);
  margin-inline: auto;
  padding: 1.5rem;
  border: 1px solid #334155;
  border-radius: 8px;
}`,
    resources: 6,
  },
  {
    id: "visual-design",
    title: "Typography, Colors & Effects",
    level: "Beginner",
    summary: "Use type scales, web fonts, HSL colors, gradients, shadows, and polished visual states.",
    subtopics: ["Typography", "HSL", "Gradients", "Shadows", "Web fonts", "Transitions"],
    goals: [
      "Apply a complete typographic scale to a page.",
      "Use HSL and modern color syntax confidently.",
      "Create gradients and shadows that feel intentional.",
    ],
    practice: ["Design a blog post layout.", "Build a product pricing card.", "Create a nav bar with hover states."],
    code: `:root {
  --color-primary: hsl(217 91% 60%);
  --color-surface: hsl(222 47% 11%);
  --shadow-card: 0 24px 70px hsl(217 91% 20% / 0.25);
}

h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1;
}

.hero {
  background: radial-gradient(circle at top right, #2563eb, transparent 35%),
    var(--color-surface);
  box-shadow: var(--shadow-card);
}`,
    resources: 7,
  },
  {
    id: "layout",
    title: "Layout & Positioning",
    level: "Intermediate",
    summary: "Master display, normal flow, position, z-index, overflow, float, and modern layout thinking.",
    subtopics: ["display", "position", "z-index", "overflow", "float", "flow"],
    goals: [
      "Choose the right display mode for a layout task.",
      "Use relative, absolute, fixed, and sticky positioning safely.",
      "Debug stacking and overflow issues.",
    ],
    practice: ["Build a sticky header.", "Create a layered badge on a card.", "Make a scrollable panel with overflow."],
    code: `.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
}

.notification {
  position: absolute;
  inset-block-start: 0.75rem;
  inset-inline-end: 0.75rem;
}`,
    resources: 8,
  },
  {
    id: "flexbox",
    title: "Flexbox",
    level: "Intermediate",
    summary: "Build one-dimensional layouts for navigation bars, card rows, alignment, and spacing.",
    subtopics: ["Container", "Items", "Direction", "Justify", "Align", "Gap"],
    goals: [
      "Center elements horizontally and vertically.",
      "Distribute space along a row or column.",
      "Know when Flexbox is a better fit than Grid.",
    ],
    practice: ["Build a responsive navbar.", "Create equal-height cards.", "Center an empty state."],
    code: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}`,
    resources: 8,
  },
  {
    id: "grid",
    title: "CSS Grid",
    level: "Intermediate",
    summary: "Create two-dimensional layouts with rows, columns, areas, auto-fit, and responsive grids.",
    subtopics: ["Columns", "Rows", "Areas", "auto-fit", "minmax", "Gap"],
    goals: [
      "Build full-page layouts with named areas.",
      "Create responsive card grids without many media queries.",
      "Use Grid when rows and columns matter together.",
    ],
    practice: ["Build an app shell.", "Create a photo gallery.", "Replicate a dashboard layout."],
    code: `.dashboard {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  grid-template-areas: "sidebar main";
  min-height: 100vh;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`,
    resources: 8,
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    level: "Intermediate",
    summary: "Use mobile-first CSS, media queries, breakpoints, responsive units, and fluid sizing.",
    subtopics: ["Mobile first", "Media queries", "Breakpoints", "Viewport", "clamp", "Units"],
    goals: [
      "Convert fixed desktop layouts into responsive layouts.",
      "Use rem, em, %, svh, dvh, and clamp() appropriately.",
      "Design components that adapt across screen sizes.",
    ],
    practice: ["Make a desktop layout mobile-first.", "Build a responsive card grid.", "Create a collapsing navigation."],
    code: `.page {
  width: min(100% - 2rem, 1180px);
  margin-inline: auto;
}

.title {
  font-size: clamp(2rem, 4vw + 1rem, 5rem);
}

@media (min-width: 768px) {
  .content {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}`,
    resources: 6,
  },
  {
    id: "animations",
    title: "Transitions & Animations",
    level: "Intermediate",
    summary: "Add motion with transitions, transforms, keyframes, timing functions, and reduced-motion support.",
    subtopics: ["Transitions", "Transform", "Keyframes", "Animation", "Timing", "Reduced motion"],
    goals: [
      "Add interactive motion without harming usability.",
      "Build keyframe animations.",
      "Respect prefers-reduced-motion.",
    ],
    practice: ["Build a CSS loading spinner.", "Animate card hover states.", "Create a modal entrance animation."],
    code: `.button {
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.button:hover {
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`,
    resources: 7,
  },
  {
    id: "architecture",
    title: "CSS Architecture & Design Tokens",
    level: "Advanced",
    summary: "Organize styles with custom properties, BEM-style naming, tokens, themes, and maintainable files.",
    subtopics: ["Variables", "BEM", "Tokens", "Themes", "Naming", "Structure"],
    goals: [
      "Create reusable design tokens with custom properties.",
      "Refactor messy CSS into clear component styles.",
      "Implement theme changes with semantic tokens.",
    ],
    practice: ["Refactor a CSS file using BEM.", "Build a token system.", "Implement dark mode with CSS variables."],
    code: `:root {
  --color-brand: #2563eb;
  --color-bg: #020617;
  --space-3: 0.75rem;
  --radius-md: 8px;
}

.card {
  padding: var(--space-3);
  border-radius: var(--radius-md);
  background: var(--color-bg);
}

.card--featured {
  border-color: var(--color-brand);
}`,
    resources: 8,
  },
  {
    id: "modern-css",
    title: "Modern CSS Features",
    level: "Advanced",
    summary: "Use :has(), container queries, nesting, calc(), clamp(), filters, blend modes, and modern selectors.",
    subtopics: [":has()", "Container queries", "Nesting", "calc()", "clamp()", "Filters"],
    goals: [
      "Use :has() to style parents based on children.",
      "Replace some media-query logic with container queries.",
      "Create fluid systems with calc() and clamp().",
    ],
    practice: ["Refactor a layout to container queries.", "Build fluid typography.", "Style cards with :has() states."],
    code: `.field:has(input:invalid) {
  border-color: #ef4444;
}

.card-grid {
  container-type: inline-size;
}

@container (min-width: 520px) {
  .card {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
}`,
    resources: 7,
  },
  {
    id: "tooling-performance-a11y",
    title: "Tooling, Performance & Accessibility",
    level: "Advanced",
    summary: "Use preprocessors, PostCSS, frameworks, build tools, performance checks, and accessible styling practices.",
    subtopics: ["PostCSS", "Sass", "Stylelint", "Performance", "A11y", "Build tools"],
    goals: [
      "Know when Sass, PostCSS, CSS Modules, or frameworks are useful.",
      "Optimize CSS delivery and avoid unused styles.",
      "Maintain contrast, focus states, zoom support, and reduced motion.",
    ],
    practice: ["Configure PostCSS with autoprefixer.", "Run a CSS audit.", "Add focus-visible states to every control."],
    code: `.skip-link {
  position: absolute;
  inset-inline-start: 1rem;
  transform: translateY(-120%);
}

.skip-link:focus {
  transform: translateY(1rem);
}

:focus-visible {
  outline: 3px solid #60a5fa;
  outline-offset: 3px;
}`,
    resources: 10,
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
  "--page-bg": "#02040a",
  "--header-bg": "rgba(2, 4, 10, 0.92)",
  "--panel-bg": "rgba(8, 12, 20, 0.82)",
  "--panel-strong": "rgba(11, 18, 32, 0.95)",
  "--field-bg": "rgba(8, 12, 20, 0.88)",
  "--border": "rgba(59, 130, 246, 0.24)",
  "--text-primary": "#f8fafc",
  "--text-secondary": "#cbd5e1",
  "--text-muted": "#94a3b8",
  "--shadow": "rgba(0, 0, 0, 0.34)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#f8fbff",
  "--header-bg": "rgba(248, 251, 255, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.9)",
  "--panel-strong": "rgba(239, 246, 255, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.94)",
  "--border": "rgba(37, 99, 235, 0.24)",
  "--text-primary": "#0f172a",
  "--text-secondary": "#334155",
  "--text-muted": "#64748b",
  "--shadow": "rgba(15, 23, 42, 0.08)",
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
      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_32px_rgba(59,130,246,0.24)]">
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
          Demon<span className="text-blue-500">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

export default function CSSRoadmap() {
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
            ? "bg-[radial-gradient(circle_at_78%_15%,rgba(59,130,246,0.2),transparent_24%),radial-gradient(circle_at_18%_78%,rgba(14,165,233,0.12),transparent_26%),linear-gradient(180deg,#02040a_0%,#05070d_100%)]"
            : "bg-[radial-gradient(circle_at_78%_14%,rgba(96,165,250,0.18),transparent_27%),radial-gradient(circle_at_16%_80%,rgba(37,99,235,0.1),transparent_25%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[82px] max-w-[1540px] items-center gap-8 px-5 lg:px-8">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-10 text-sm font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`transition hover:text-blue-500 ${item === "Roadmaps" ? "text-blue-500" : ""}`}
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
            className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-blue-500"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-blue-500/50 bg-blue-600 px-5 text-sm font-black text-white shadow-[0_0_28px_rgba(59,130,246,0.28)] transition hover:bg-blue-500 md:inline-flex"
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
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-500">Get Started</p>
            <nav className="mt-5 space-y-1 text-sm text-[var(--text-secondary)]">
              {["Introduction", "How Roadmaps Work", "Learning Paths", "Quick Start"].map((item) => (
                <a
                  className="flex h-10 items-center gap-3 rounded-md px-3 transition hover:bg-[var(--panel-strong)] hover:text-blue-500"
                  href={item === "Quick Start" ? "/docs/quick-start" : "#"}
                  key={item}
                >
                  <Icon className="h-4 w-4" name={item === "Introduction" ? "home" : "chevron"} />
                  {item}
                </a>
              ))}
            </nav>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-blue-500">Roadmap</p>
            <nav className="mt-5 space-y-1">
              {(["Beginner", "Intermediate", "Advanced"] as const).map((level) => (
                <button
                  className="flex h-10 w-full items-center justify-between rounded-md px-3 text-left text-sm text-[var(--text-secondary)] transition hover:bg-[var(--panel-strong)] hover:text-blue-500"
                  key={level}
                  onClick={() => setActiveTopicId(topics.find((topic) => topic.level === level)?.id ?? topics[0].id)}
                  type="button"
                >
                  <span>{level}</span>
                  <span className="rounded border border-[var(--border)] px-2 py-0.5 text-xs">{levelCounts[level]}</span>
                </button>
              ))}
            </nav>

            <div className="mt-9 rounded-lg border border-blue-500/25 bg-black/20 p-4">
              <div className="grid h-20 w-full place-items-center rounded-md border border-blue-500/35 bg-black/40 text-4xl font-black text-blue-500">
                CSS3
              </div>
              <p className="mt-4 text-sm font-black text-[var(--text-primary)]">Style the web.</p>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                Modern CSS turns clean HTML into responsive, polished interfaces.
              </p>
            </div>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-blue-500" name="home" />
              <Link className="hover:text-blue-500" href="/docs/all-roadmaps">
                Roadmaps
              </Link>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">CSS Roadmap</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-blue-500/40 bg-blue-600 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                  <Icon className="h-4 w-4" name="spark" />
                  CSS Learning Roadmap 2026
                </div>
                <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-normal sm:text-6xl">
                  CSS <span className="text-blue-500">Roadmap</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  A structured CSS roadmap from selectors and the box model to Flexbox, Grid, responsive
                  design, animation, design tokens, modern CSS, tooling, performance, and accessibility.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Level", "Beginner to Advanced", "levels"],
                    ["Time", "1-2 Months", "clock"],
                    ["Topics", `${topics.length} Core Topics`, "book"],
                  ].map(([label, value, icon]) => (
                    <div className="rounded-md border border-[var(--border)] bg-[var(--panel-bg)] p-4" key={label}>
                      <Icon className="h-5 w-5 text-blue-500" name={icon} />
                      <p className="mt-3 text-xs text-[var(--text-muted)]">{label}</p>
                      <p className="mt-1 text-sm font-black text-[var(--text-primary)]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[300px] overflow-hidden rounded-lg border border-blue-500/25 bg-black shadow-[0_0_80px_rgba(59,130,246,0.16)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.14)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/35 bg-black/80 shadow-[0_0_60px_rgba(59,130,246,0.28)]" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-blue-500 drop-shadow-[0_0_28px_rgba(59,130,246,0.7)]">
                  CSS3
                </div>
              </div>
            </section>

            <section className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="relative">
                <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-blue-500/45 sm:block" />
                <div className="space-y-4">
                  {topics.map((topic, index) => {
                    const isActive = topic.id === activeTopic.id;

                    return (
                      <article
                        className={`relative rounded-lg border bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] transition ${
                          isActive ? "border-blue-500/65" : "border-[var(--border)] hover:border-blue-500/40"
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
                              isActive ? "border-blue-400 bg-blue-600 text-white" : "border-blue-500 bg-black text-white"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span>
                            <span className="flex flex-wrap items-center gap-3">
                              <span className="text-xl font-black text-[var(--text-primary)]">{topic.title}</span>
                              <span className="rounded border border-[var(--border)] px-2 py-1 text-xs font-bold text-blue-500">
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
                            <Icon className="h-4 w-4 text-blue-500" name="book" />
                            {topic.resources} Resources
                            <Icon className={`h-4 w-4 transition ${isActive ? "rotate-90 text-blue-500" : ""}`} name="chevron" />
                          </span>
                        </button>

                        {isActive ? (
                          <div className="border-t border-[var(--border)] px-5 pb-5 sm:ml-[76px]">
                            <div className="mt-5 overflow-hidden rounded-md border border-blue-500/25 bg-black">
                              <div className="flex items-center justify-between border-b border-blue-500/20 bg-blue-500/10 px-4 py-3">
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-blue-500">CSS Example</h3>
                                <span className="rounded border border-blue-500/25 px-2 py-1 text-xs font-bold text-blue-300">
                                  CSS
                                </span>
                              </div>
                              <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-7 text-slate-100">
                                <code>{topic.code}</code>
                              </pre>
                            </div>

                            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-blue-500">Learning Goals</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.goals.map((goal) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={goal}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" name="check" />
                                      {goal}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-black uppercase tracking-[0.14em] text-blue-500">Practice Projects</h3>
                                <ul className="mt-3 space-y-3">
                                  {topic.practice.map((task) => (
                                    <li className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]" key={task}>
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" name="target" />
                                      {task}
                                    </li>
                                  ))}
                                </ul>
                              </div>
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
                    <div className="grid h-28 w-28 place-items-center rounded-full border-[10px] border-blue-500/25 border-t-blue-500 text-3xl font-black">
                      0%
                    </div>
                  </div>
                  <p className="mt-5 text-center text-sm leading-6 text-[var(--text-muted)]">
                    Start with cascade and box model, then move into layout and modern CSS.
                  </p>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">What You'll Learn</h2>
                  <div className="mt-5 space-y-4">
                    {[
                      "CSS fundamentals",
                      "Layout and positioning",
                      "Responsive design",
                      "Flexbox and Grid",
                      "Animations and transitions",
                      "Modern CSS features",
                      "Accessible styling",
                    ].map((item) => (
                      <div className="flex gap-3" key={item}>
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" name="check" />
                        <p className="text-sm font-bold text-[var(--text-secondary)]">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Helpful Resources</h2>
                  <div className="mt-5 space-y-3 text-sm">
                    {[
                      ["MDN CSS Docs", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
                      ["web.dev CSS", "https://web.dev/learn/css"],
                      ["CSS Tricks", "https://css-tricks.com/"],
                      ["Can I Use", "https://caniuse.com/"],
                      ["Flexbox Froggy", "https://flexboxfroggy.com/"],
                      ["Grid Garden", "https://cssgridgarden.com/"],
                    ].map(([name, href]) => (
                      <a
                        className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-3 py-2 font-bold text-[var(--text-secondary)] transition hover:border-blue-500/45 hover:text-blue-500"
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
