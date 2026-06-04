"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;
type SidebarGroup = {
  title: string;
  items: Array<{ label: string; icon: string; href?: string; active?: boolean }>;
};

const navItems = ["Roadmaps", "Resources", "Docs", "Guides", "Community"];

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Get Started",
    items: [
      { label: "Introduction", icon: "home", href: "/" },
      { label: "Quick Start", icon: "bolt", href: "/docs/quick-start" },
      { label: "How Roadmaps Work", icon: "route", href: "/docs/how-roadmaps-work" },
      { label: "Learning Paths", icon: "nodes", href: "/docs/learning-paths" },
    ],
  },
  {
    title: "Browse",
    items: [
      { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps", active: true },
      { label: "By Category", icon: "folder", href: "/docs/by-category" },
      { label: "Learning Resources", icon: "send" },
      { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
      { label: "Best Practices", icon: "clock", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
      { label: "Contributing", icon: "file", href: "/docs/contributing" },
    ],
  },
];

const roadmapStats = [
  ["20+", "Roadmaps"],
  ["10+", "Categories"],
  ["1000+", "Topics Covered"],
  ["50K+", "Developers Learning"],
  ["Weekly", "Content Updates"],
];

const roadmapCards = [
  {
    title: "HTML5 Roadmap",
    detail: "Document-backed path from HTML structure to forms, accessibility, SEO, Web APIs, and Web Components.",
    topics: "15 Topics",
    level: "Beginner to Advanced",
    progress: "82%",
    tags: ["HTML5", "Forms", "A11y", "SEO", "+5"],
    href: "/roadmaps/html5",
  },
  {
    title: "CSS Roadmap",
    detail: "Document-backed path from CSS fundamentals to layout, responsive design, modern CSS, tooling, and accessibility.",
    topics: "12 Topics",
    level: "Beginner to Advanced",
    progress: "84%",
    tags: ["CSS3", "Flexbox", "Grid", "A11y", "+5"],
    href: "/roadmaps/css",
  },
  {
    title: "JavaScript Roadmap",
    detail: "Document-backed path from JS fundamentals to ES2024, async, performance, and patterns.",
    topics: "20 Topics",
    level: "Beginner to Advanced",
    progress: "90%",
    tags: ["JavaScript", "ES2024", "Async", "Patterns", "+5"],
    href: "/roadmaps/javascript",
  },
  {
    title: "Python Roadmap",
    detail: "Document-backed path from Python basics to async, packaging, testing, and PEP 8.",
    topics: "16 Topics",
    level: "Beginner to Advanced",
    progress: "88%",
    tags: ["Python", "OOP", "Async", "Testing", "+5"],
    href: "/roadmaps/python",
  },
  {
    title: "React Roadmap",
    detail: "Document-backed path from React basics to hooks, routing, performance, TypeScript, and testing.",
    topics: "19 Topics",
    level: "Beginner to Advanced",
    progress: "86%",
    tags: ["React", "Hooks", "Router", "Testing", "+5"],
    href: "/roadmaps/react",
  },
  {
    title: "Frontend Developer",
    detail: "Step-by-step guide to becoming a modern frontend developer.",
    topics: "42 Topics",
    level: "Beginner to Advanced",
    progress: "85%",
    tags: ["HTML", "CSS", "JavaScript", "React", "+3"],
  },
  {
    title: "Backend Developer",
    detail: "Master server-side development, databases, APIs, and more.",
    topics: "48 Topics",
    level: "Beginner to Advanced",
    progress: "80%",
    tags: ["Node.js", "Express", "MongoDB", "SQL", "+3"],
  },
  {
    title: "Full Stack Developer",
    detail: "Complete roadmap to become a versatile full stack developer.",
    topics: "65 Topics",
    level: "Beginner to Advanced",
    progress: "75%",
    tags: ["React", "Node.js", "MongoDB", "DevOps", "+4"],
  },
  {
    title: "DevOps Engineer",
    detail: "Learn DevOps tools, CI/CD, cloud, and infrastructure.",
    topics: "38 Topics",
    level: "Intermediate to Advanced",
    progress: "70%",
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD", "+4"],
  },
  {
    title: "Data Scientist",
    detail: "Master data analysis, machine learning, and data visualization.",
    topics: "45 Topics",
    level: "Intermediate to Advanced",
    progress: "65%",
    tags: ["Python", "Pandas", "ML", "SQL", "+4"],
  },
  {
    title: "Mobile Developer",
    detail: "Build mobile apps for iOS and Android platforms.",
    topics: "40 Topics",
    level: "Beginner to Advanced",
    progress: "60%",
    tags: ["Flutter", "Dart", "React Native", "Firebase", "+3"],
  },
];

const whyRoadmaps = [
  {
    title: "Curated by Experts",
    detail: "Created and reviewed by industry professionals.",
    icon: "user",
  },
  {
    title: "Up-to-Date Content",
    detail: "Regularly updated with the latest tools and trends.",
    icon: "refresh",
  },
  {
    title: "Practical Learning",
    detail: "Focus on real-world projects and hands-on skills.",
    icon: "code",
  },
  {
    title: "Flexible Learning",
    detail: "Learn at your own pace with structured guidance.",
    icon: "clock",
  },
  {
    title: "Community Support",
    detail: "Get help and support from a strong developer community.",
    icon: "users",
  },
];

const iconPaths: Record<string, ReactNode> = {
  home: <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z" />,
  bolt: <path d="m13 2-9 13h7l-1 7 9-13h-7l1-7Z" />,
  route: <path d="M5 7h6a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h10M5 7l3-3M5 7l3 3m11 9-3-3m3 3-3 3" />,
  nodes: <path d="M6 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM8 5h8M8 19h8M6 7v10m12-10v10" />,
  grid: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
  folder: <path d="M4 6h7l2 2h7v13H4V6Z" />,
  send: <path d="m21 3-6.5 18-4-8-8-4L21 3Z" />,
  spark: <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />,
  book: <path d="M5 4h7a3 3 0 0 1 3 3v17a3 3 0 0 0-3-3H5V4Zm10 0h4v17h-4" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  trophy: <path d="M7 4h10v4a5 5 0 0 1-10 0V4Zm-2 1H3v2a4 4 0 0 0 4 4m12-6h2v2a4 4 0 0 1-4 4m-5 3v4m-4 0h8" />,
  paint: <path d="M5 19c3 0 3-4 6-4h4a6 6 0 1 0-6-6c0 3-4 3-4 6v4Zm10-11h.01M12 6h.01M9 8h.01" />,
  gear: <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-5v3m0 12v3m8-8h-3M7 12H4m13.7-5.7-2.1 2.1M8.4 15.6l-2.1 2.1m0-11.4 2.1 2.1m7.2 7.2 2.1 2.1" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  pen: <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Zm13-15 3 3" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  refresh: <path d="M20 7v5h-5M4 17v-5h5m10-1a7 7 0 0 0-12-4l-3 3m1 3a7 7 0 0 0 12 4l3-3" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 18.2 6.4 21.2 7.5 15 3 10.6l6.2-.9L12 3Z" />,
  flame: <path d="M12 22c4 0 7-2.8 7-6.8 0-3.2-2.1-5.1-4.2-7.1-.9-.8-1.5-2-1.5-3.4C10 6.4 7 9.4 7 13c0 1.2.4 2.2 1 3-1.4-.5-2.3-1.7-2.7-3C4.5 14.1 4 15.3 4 16.5 4 19.7 7 22 12 22Z" />,
};

const darkTheme: ThemeVars = {
  "--page-bg": "#030303",
  "--header-bg": "rgba(3, 3, 3, 0.9)",
  "--panel-bg": "rgba(9, 9, 10, 0.78)",
  "--panel-strong": "rgba(16, 16, 18, 0.92)",
  "--field-bg": "rgba(8, 8, 9, 0.86)",
  "--border": "rgba(90, 90, 94, 0.38)",
  "--text-primary": "#f8fafc",
  "--text-secondary": "#c5c7ce",
  "--text-muted": "#8e929d",
  "--shadow": "rgba(0, 0, 0, 0.32)",
};

const lightTheme: ThemeVars = {
  "--page-bg": "#f8fafc",
  "--header-bg": "rgba(255, 255, 255, 0.92)",
  "--panel-bg": "rgba(255, 255, 255, 0.88)",
  "--panel-strong": "rgba(241, 245, 249, 0.96)",
  "--field-bg": "rgba(255, 255, 255, 0.92)",
  "--border": "rgba(203, 213, 225, 0.9)",
  "--text-primary": "#0f172a",
  "--text-secondary": "#334155",
  "--text-muted": "#64748b",
  "--shadow": "rgba(15, 23, 42, 0.09)",
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
      {iconPaths[name]}
    </svg>
  );
}

function DemonTechLogo() {
  return (
    <Link className="flex min-w-fit items-center gap-3" href="/">
      <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_36px_rgba(220,38,38,0.26)]">
        <Image
          alt="DemonTech logo"
          className="h-full w-full object-cover"
          height={64}
          src="/demontech-logo.png"
          width={64}
        />
      </div>
      <div>
        <p className="text-2xl font-black leading-6 tracking-normal text-[var(--text-primary)]">
          Demon<span className="text-red-500">Tech</span>
        </p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">
          Roadmap
        </p>
      </div>
    </Link>
  );
}

export default function AllRoadmaps() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main
      className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300"
      style={theme}
    >
      <div
        className={`fixed inset-0 -z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.22),transparent_28%),radial-gradient(circle_at_82%_64%,rgba(127,29,29,0.18),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[86px] max-w-[1510px] items-center gap-8 px-6 lg:px-10">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`relative transition hover:text-red-500 ${
                  item === "Roadmaps" ? "text-red-500" : ""
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Roadmaps" && (
                  <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />
                )}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[286px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>
          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500"
            onClick={() => setIsDarkMode((value) => !value)}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1510px] grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-86px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-[var(--shadow)]">
            <div className="space-y-7">
              {sidebarGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 space-y-1">
                    {group.items.map((item) => (
                      <a
                        className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${
                          item.active
                            ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]"
                            : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"
                        }`}
                        href={item.href ?? "#"}
                        key={item.label}
                      >
                        <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-md border border-red-500/35 bg-red-950/15 p-4">
              <h3 className="font-bold text-[var(--text-primary)]">
                Still confused?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Check our FAQ or join our community. We&apos;re here to help!
              </p>
              <a
                className="mt-5 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white"
                href="#"
              >
                View FAQ
                <Icon className="h-4 w-4" name="pen" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-red-500" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">
                Roadmaps
              </span>
            </div>

            <section className="mt-8">
              <div className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-red-400">
                <Icon className="h-4 w-4" name="flame" />
                Explore All Possibilities
              </div>
              <h1 className="mt-5 text-5xl font-black tracking-normal text-[var(--text-primary)] sm:text-6xl">
                All Roadmaps
              </h1>
              <div className="mt-2 h-1 w-64 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                Explore our collection of developer roadmaps across different
                technologies and domains. Choose a roadmap that fits your goals
                and start your journey to mastery.
              </p>
            </section>

            <section className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {roadmapStats.map(([value, label]) => (
                <article
                  className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6"
                  key={label}
                >
                  <p className="text-2xl font-black text-red-500">{value}</p>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {label}
                  </p>
                </article>
              ))}
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-[1.35fr_0.9fr_0.9fr_1fr_1fr]">
              <label className="flex h-12 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)]">
                <span className="flex-1">Search roadmaps...</span>
                <Icon className="h-5 w-5" name="search" />
              </label>
              {["All Categories", "All Levels", "Sort: Popular"].map((label) => (
                <button
                  className="flex h-12 items-center justify-between rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm font-bold text-[var(--text-secondary)]"
                  key={label}
                  type="button"
                >
                  {label}
                  <Icon className="h-4 w-4 rotate-90" name="chevron" />
                </button>
              ))}
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm font-bold text-red-500"
                type="button"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-[10px]">
                  x
                </span>
                Clear Filters
              </button>
            </section>

            <section className="mt-6 grid gap-5 xl:grid-cols-3">
              {roadmapCards.map((roadmap) => {
                const cardContent = (
                  <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-black text-[var(--text-primary)]">
                        {roadmap.title}
                      </h2>
                      <p className="mt-3 min-h-[52px] text-sm leading-6 text-[var(--text-secondary)]">
                        {roadmap.detail}
                      </p>
                    </div>
                    <Icon className="h-5 w-5 shrink-0 text-[var(--text-muted)]" name="star" />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span>{roadmap.topics}</span>
                    <span className="h-4 w-px bg-[var(--border)]" />
                    <span>{roadmap.level}</span>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.45)]"
                        style={{ width: roadmap.progress }}
                      />
                    </div>
                    <span className="text-xs font-black text-[var(--text-secondary)]">
                      {roadmap.progress}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {roadmap.tags.map((tag) => (
                      <span
                        className="rounded bg-[var(--field-bg)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  </>
                );

                return roadmap.href ? (
                  <Link
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-red-500/45 hover:shadow-[0_20px_60px_rgba(127,29,29,0.18)]"
                    href={roadmap.href}
                    key={roadmap.title}
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <article
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-red-500/45 hover:shadow-[0_20px_60px_rgba(127,29,29,0.18)]"
                    key={roadmap.title}
                  >
                    {cardContent}
                  </article>
                );
              })}
            </section>

            <section className="mt-9 rounded-xl border border-[var(--border)] bg-black/20 p-6">
              <h2 className="flex items-center gap-3 text-2xl font-black text-[var(--text-primary)]">
                <Icon className="h-7 w-7 text-red-500" name="spark" />
                Why Choose Our Roadmaps?
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                {whyRoadmaps.map((item) => (
                  <article className="text-center" key={item.title}>
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-red-500/20 bg-red-950/20 text-red-500">
                      <Icon className="h-8 w-8" name={item.icon} />
                    </span>
                    <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
