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
      { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps" },
      { label: "By Category", icon: "folder", href: "/docs/by-category" },
      { label: "Learning Resources", icon: "send" },
      { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book", href: "/docs/study-guide", active: true },
      { label: "Best Practices", icon: "shield", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
      { label: "Contributing", icon: "file", href: "/docs/contributing" },
    ],
  },
];

const stats = [
  ["100+", "Study Topics", "book"],
  ["50+", "Cheat Sheets", "file-text"],
  ["200+", "Notes", "pen"],
  ["10K+", "Downloads", "download"],
];

const tabs = [
  "All Topics",
  "Web Development",
  "Programming",
  "DevOps",
  "Data Science",
  "Mobile Development",
  "Tools & Others",
];

const topics = [
  {
    title: "JavaScript",
    detail: "Complete guide to JavaScript from basics to advanced concepts with examples.",
    icon: "js",
    level: "Beginner to Advanced",
    tone: "green",
    resources: "28",
    notes: "12",
    updated: "2 days ago",
  },
  {
    title: "React",
    detail: "Learn React core concepts, hooks, state management, routing and more.",
    icon: "react",
    level: "Beginner to Advanced",
    tone: "green",
    resources: "24",
    notes: "10",
    updated: "1 week ago",
  },
  {
    title: "Node.js",
    detail: "Understand Node.js, Express, APIs, middleware and build scalable servers.",
    icon: "node",
    level: "Intermediate",
    tone: "yellow",
    resources: "20",
    notes: "8",
    updated: "3 days ago",
  },
  {
    title: "HTML & CSS",
    detail: "Learn HTML5 and CSS3 from scratch and build beautiful layouts.",
    icon: "html",
    level: "Beginner",
    tone: "purple",
    resources: "16",
    notes: "7",
    updated: "5 days ago",
  },
  {
    title: "Python",
    detail: "Python programming guide for beginners to advanced with real examples.",
    icon: "python",
    level: "Beginner to Advanced",
    tone: "green",
    resources: "22",
    notes: "9",
    updated: "1 week ago",
  },
  {
    title: "Git & GitHub",
    detail: "Learn Git version control and GitHub for collaboration like a pro.",
    icon: "git",
    level: "Beginner",
    tone: "purple",
    resources: "14",
    notes: "6",
    updated: "4 days ago",
  },
];

const popularResources = [
  ["JavaScript Roadmap Study Notes", "2.5K views"],
  ["React Complete Notes", "1.8K views"],
  ["Node.js Best Practices", "1.2K views"],
  ["System Design Basics", "980 views"],
  ["Git Commands Cheat Sheet", "2.1K views"],
];

const cheatSheets = [
  ["HTML Cheat Sheet", "3.2K downloads"],
  ["CSS Flexbox Cheat Sheet", "2.7K downloads"],
  ["JavaScript ES6+ Cheat Sheet", "3.8K downloads"],
  ["Git Commands Cheat Sheet", "4.1K downloads"],
  ["Linux Commands Cheat Sheet", "2.2K downloads"],
];

const learnItems = [
  "Well structured content",
  "Beginner to advanced",
  "Regularly updated",
  "Free and community driven",
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
  shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  "file-text": <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  pen: <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Zm13-15 3 3" />,
  download: <path d="M12 4v12m0 0 5-5m-5 5-5-5M5 20h14" />,
  check: <path d="m5 12 4 4L19 6" />,
  calendar: <path d="M7 3v4m10-4v4M4 8h16v13H4V8Zm4 5h8m-8 4h5" />,
  external: <path d="M14 4h6v6m0-6-9 9M20 14v6H4V4h6" />,
  doc: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5m-8 5h4m-4 4h6" />,
  "circle-book": <path d="M5 5h6a3 3 0 0 1 3 3v11a3 3 0 0 0-3-2H5V5Zm9 0h5v12h-5" />,
  js: (
    <>
      <rect fill="#facc15" height="20" rx="2" stroke="none" width="20" x="2" y="2" />
      <path d="M8.4 16.6c.5.8 1.2 1.2 2.2 1.2 1.2 0 2-.7 2-2.2V8.5m1.9 7.7c.6 1 1.5 1.6 2.8 1.6 1.5 0 2.4-.8 2.4-1.9 0-1.3-.9-1.7-2.4-2.4l-.7-.3c-1.2-.5-2-1.2-2-2.6s1-2.4 2.7-2.4c1.2 0 2 .4 2.6 1.5" stroke="#101010" strokeWidth="1.8" />
    </>
  ),
  react: <path d="M12 10.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Zm0-5.2c5.5 0 10 3.1 10 7s-4.5 7-10 7S2 15.9 2 12s4.5-7 10-7Zm0 0c3.2 0 5.8 3.1 5.8 7s-2.6 7-5.8 7-5.8-3.1-5.8-7 2.6-7 5.8-7Z" />,
  node: <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-3 11V9l3 6 3-6v6" />,
  html: (
    <>
      <path d="M5 3h14l-1.2 15L12 21l-5.8-3L5 3Z" fill="#f97316" stroke="none" />
      <path d="M9 8h6m-6 4h5.5l-.3 3.2L12 16.2l-2.2-1" stroke="#ffffff" strokeWidth="1.8" />
    </>
  ),
  python: (
    <>
      <path d="M12 3h3a3 3 0 0 1 3 3v3h-7a3 3 0 0 0-3 3v1H5V8a3 3 0 0 1 3-3h4V3Z" fill="#3b82f6" stroke="none" />
      <path d="M12 21H9a3 3 0 0 1-3-3v-3h7a3 3 0 0 0 3-3v-1h3v5a3 3 0 0 1-3 3h-4v2Z" fill="#facc15" stroke="none" />
      <path d="M9 6h.01M15 18h.01" stroke="#111827" strokeWidth="2.5" />
    </>
  ),
  git: <path d="M12 2 22 12 12 22 2 12 12 2Zm-3 7 6 6m-3-9v6m0 0h4" fill="#f15a24" stroke="#111111" />,
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

function LevelBadge({ label, tone }: { label: string; tone: string }) {
  const className =
    tone === "green"
      ? "border-green-500/20 bg-green-500/10 text-green-400"
      : tone === "yellow"
        ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
        : "border-purple-500/20 bg-purple-500/10 text-purple-300";

  return (
    <span className={`rounded-md border px-3 py-1 text-xs font-bold ${className}`}>
      {label}
    </span>
  );
}

function ResourceList({
  title,
  items,
  action,
}: {
  title: string;
  items: string[][];
  action: string;
}) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5">
      <h2 className="text-xl font-black text-[var(--text-primary)]">{title}</h2>
      <div className="mt-5 space-y-2">
        {items.map(([label, meta]) => (
          <a
            className="flex min-h-14 items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 transition hover:border-red-500/45"
            href="#"
            key={label}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[var(--border)] text-[var(--text-secondary)]">
              <Icon className="h-4 w-4" name="doc" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold text-[var(--text-primary)]">
                {label}
              </span>
              <span className="mt-1 block text-xs text-[var(--text-muted)]">
                {meta}
              </span>
            </span>
            <Icon className="h-4 w-4 shrink-0 text-red-500" name="chevron" />
          </a>
        ))}
      </div>
      <a
        className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-black text-red-500"
        href="#"
      >
        {action}
        <Icon className="h-4 w-4" name="chevron" />
      </a>
    </section>
  );
}

export default function StudyGuide() {
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
            ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_80%_68%,rgba(127,29,29,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
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
                  item === "Guides" ? "text-red-500" : ""
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Guides" && (
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
                Stay Consistent
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Learning a little every day leads to big results.
              </p>
              <div className="mx-auto mt-6 grid h-20 w-20 place-items-center rounded-full border border-red-500/35 bg-red-950/20 text-red-500">
                <Icon className="h-10 w-10" name="circle-book" />
              </div>
              <a
                className="mt-6 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white"
                href="#"
              >
                View Best Practices
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </div>

            <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-5">
              <h3 className="font-bold text-[var(--text-primary)]">Your Progress</h3>
              <div className="mx-auto mt-6 grid h-24 w-24 place-items-center rounded-full bg-[conic-gradient(#ef4444_72%,rgba(255,255,255,0.12)_0)] p-2">
                <div className="grid h-full w-full place-items-center rounded-full bg-[var(--panel-strong)] text-xl font-black">
                  72%
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
                Keep going! You&apos;re doing great.
              </p>
              <a
                className="mt-4 flex items-center gap-2 text-sm font-black text-red-500"
                href="/docs/all-roadmaps"
              >
                View Roadmaps
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-[var(--text-muted)]" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">
                Study Guide
              </span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_430px]">
              <div>
                <h1 className="text-5xl font-black tracking-normal text-[var(--text-primary)] sm:text-6xl">
                  Study Guide
                  <Icon className="ml-5 inline-block h-8 w-8 align-top text-red-500" name="spark" />
                </h1>
                <div className="mt-2 h-1 w-72 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Curated study materials, cheat sheets, and notes to help you
                  learn and revise effectively.
                </p>
              </div>

              <aside className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-xl font-black text-[var(--text-primary)]">
                  Learn. Revise. Master.
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--text-secondary)]">
                  Everything you need to learn faster and remember better.
                </p>
                <div className="mt-5 grid gap-2 md:grid-cols-[1fr_92px]">
                  <div className="space-y-3">
                    {learnItems.map((item) => (
                      <div
                        className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                        key={item}
                      >
                        <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-red-500">
                          <Icon className="h-2.5 w-2.5" name="check" />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Icon className="hidden h-24 w-24 self-end text-red-500 md:block" name="circle-book" />
                </div>
              </aside>
            </section>

            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map(([value, label, icon]) => (
                <article
                  className="flex items-center gap-5 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5"
                  key={label}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                    <Icon className="h-7 w-7" name={icon} />
                  </span>
                  <div>
                    <p className="text-xl font-black text-[var(--text-primary)]">
                      {value}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {label}
                    </p>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-8">
              <div className="flex flex-wrap gap-3">
                {tabs.map((tab, index) => (
                  <button
                    className={`h-11 rounded-md border px-5 text-sm font-bold transition ${
                      index === 0
                        ? "border-red-500 bg-red-950/35 text-white"
                        : "border-[var(--border)] bg-[var(--field-bg)] text-[var(--text-secondary)] hover:border-red-500/45 hover:text-red-500"
                    }`}
                    key={tab}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_0.65fr_0.65fr_0.8fr]">
                <label className="flex h-12 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)]">
                  <Icon className="h-5 w-5" name="search" />
                  <span className="flex-1">Search topics...</span>
                  <Icon className="h-5 w-5" name="search" />
                </label>
                {["All Levels", "Sort: Popular"].map((label) => (
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
                  className="flex h-12 items-center justify-center gap-2 rounded-md px-4 text-sm font-bold text-red-500"
                  type="button"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-[10px]">
                    x
                  </span>
                  Clear Filters
                </button>
              </div>
            </section>

            <section className="mt-5 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-strong)]">
              <div className="hidden grid-cols-[1.6fr_0.52fr_0.55fr_0.45fr_32px] border-b border-[var(--border)] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[var(--text-muted)] lg:grid">
                <span>Topic</span>
                <span>Level</span>
                <span>Resources</span>
                <span>Updated</span>
                <span />
              </div>
              {topics.map((topic) => (
                <article
                  className="grid gap-4 border-b border-[var(--border)] px-5 py-5 last:border-b-0 lg:grid-cols-[1.6fr_0.52fr_0.55fr_0.45fr_32px] lg:items-center"
                  key={topic.title}
                >
                  <div className="grid grid-cols-[56px_1fr] gap-5">
                    <Icon
                      className={`h-12 w-12 ${
                        topic.icon === "react"
                          ? "text-cyan-400"
                          : topic.icon === "node"
                            ? "text-green-500"
                            : "text-red-500"
                      }`}
                      name={topic.icon}
                    />
                    <div>
                      <h3 className="text-base font-black text-[var(--text-primary)]">
                        {topic.title}
                      </h3>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                        {topic.detail}
                      </p>
                    </div>
                  </div>
                  <LevelBadge label={topic.level} tone={topic.tone} />
                  <div className="flex gap-8 text-sm text-[var(--text-secondary)]">
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" name="doc" />
                      {topic.resources}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" name="doc" />
                      {topic.notes}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--text-secondary)]">
                    {topic.updated}
                  </span>
                  <a className="text-red-500" href="#">
                    <Icon className="h-5 w-5" name="chevron" />
                  </a>
                </article>
              ))}
              <a
                className="mx-auto flex h-16 w-fit items-center gap-2 text-sm font-black text-red-500"
                href="#"
              >
                View All Topics
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </section>

            <section className="mt-7 grid gap-6 xl:grid-cols-2">
              <ResourceList
                action="View All Resources"
                items={popularResources}
                title="Popular Resources"
              />
              <ResourceList
                action="View All Cheat Sheets"
                items={cheatSheets}
                title="Top Cheat Sheets"
              />
            </section>

            <section className="mt-7 flex flex-col gap-5 rounded-lg border border-red-500/35 bg-red-950/10 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-5">
                <Icon className="mt-1 h-9 w-9 shrink-0 text-red-500" name="calendar" />
                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)]">
                    Can&apos;t find what you&apos;re looking for?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Request a topic or suggest content you want to see in our
                    study guide.
                  </p>
                </div>
              </div>
              <a
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-red-500/45 px-5 text-sm font-black text-red-500 transition hover:bg-red-500 hover:text-white"
                href="#"
              >
                Request a Topic
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
