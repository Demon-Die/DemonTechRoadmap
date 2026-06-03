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
      {
        label: "How Roadmaps Work",
        icon: "route",
        href: "/docs/how-roadmaps-work",
        active: true,
      },
      { label: "Learning Paths", icon: "nodes", href: "/docs/learning-paths" },
    ],
  },
  {
    title: "Browse",
    items: [
      { label: "All Roadmaps", icon: "grid", href: "/docs/all-roadmaps" },
      { label: "By Category", icon: "folder", href: "/docs/by-category" },
      { label: "Learning Resources", icon: "send" },
      { label: "Project Ideas", icon: "spark" },
    ],
  },
  {
    title: "Guides",
    items: [
      { label: "Study Guide", icon: "book" },
      { label: "Best Practices", icon: "clock" },
      { label: "Common Questions", icon: "help" },
      { label: "Contributing", icon: "file" },
    ],
  },
];

const heroBadges = [
  { label: "Structured Learning", icon: "map" },
  { label: "Practical Examples", icon: "puzzle" },
  { label: "Real-World Projects", icon: "nodes" },
  { label: "Track Your Progress", icon: "pen" },
];

const flowSteps = [
  {
    title: "Pick a Roadmap",
    detail: "Choose a roadmap that matches your goals and current skill level.",
    icon: "compass",
  },
  {
    title: "Follow the Path",
    detail: "Go step-by-step through carefully structured topics and resources.",
    icon: "list",
  },
  {
    title: "Learn & Understand",
    detail: "Read explanations, view code examples and understand concepts.",
    icon: "code",
  },
  {
    title: "Practice & Build",
    detail: "Solve challenges and work on projects to apply what you learn.",
    icon: "terminal",
  },
  {
    title: "Track Progress",
    detail: "Track your progress, mark completed topics and stay motivated.",
    icon: "chart",
  },
  {
    title: "Grow & Master",
    detail: "Keep building, explore advanced topics and become job-ready.",
    icon: "trophy",
  },
];

const reasons = [
  {
    title: "Beginner Friendly",
    detail: "We start from the basics and build up, no gatekeeping.",
    icon: "user",
  },
  {
    title: "Hands-on First",
    detail: "More practice, real-world projects and code.",
    icon: "puzzle",
  },
  {
    title: "Curated & Tested",
    detail: "Every roadmap is carefully crafted by developers.",
    icon: "shield",
  },
  {
    title: "Always Improving",
    detail: "We update content based on trends and community feedback.",
    icon: "trend",
  },
];

const actionItems = [
  "View code examples",
  "Edit in real-time",
  "Experiment & Learn",
  "Instant Preview",
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
  map: <path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Zm5-2v14m6-12v14" />,
  puzzle: <path d="M9 3h6v4h2a2 2 0 1 1 0 4h-2v3h-3v2a2 2 0 1 1-4 0v-2H5V9h4V7a2 2 0 1 1 4 0v2h2V3H9Z" />,
  pen: <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Zm13-15 3 3" />,
  play: <path d="m8 5 12 7-12 7V5Z" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  trophy: <path d="M7 4h10v4a5 5 0 0 1-10 0V4Zm-2 1H3v2a4 4 0 0 0 4 4m12-6h2v2a4 4 0 0 1-4 4m-5 3v4m-4 0h8" />,
  compass: <path d="m16 8-3 7-7 3 3-7 7-3Zm5 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  list: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />,
  terminal: <path d="m8 9 4 3-4 3m6 0h4M4 5h20v14H4V5Z" />,
  chart: <path d="M4 19h18M7 16l4-4 3 3 6-8m0 0v5m0-5h-5" />,
  user: <path d="M18 20a6 6 0 0 0-12 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 10-4.6-2-8-5-8-10V6l8-3Zm-3 9 2 2 4-5" />,
  trend: <path d="M4 17 10 11l4 4 7-9m0 0v6m0-6h-6" />,
  external: <path d="M14 4h6v6m0-6-9 9M20 14v6H4V4h6" />,
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

export default function HowRoadmapsWork() {
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
            ? "bg-[radial-gradient(circle_at_65%_11%,rgba(127,29,29,0.22),transparent_28%),radial-gradient(circle_at_82%_60%,rgba(127,29,29,0.2),transparent_26%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_65%_11%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        }`}
      />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[86px] max-w-[1510px] items-center gap-8 px-6 lg:px-10">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a
                className={`relative transition hover:text-red-500 ${
                  item === "Docs" ? "text-red-500" : ""
                }`}
                href="#"
                key={item}
              >
                {item}
                {item === "Docs" && (
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
                <Icon className="h-4 w-4" name="external" />
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
              <span>Guides</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">
                How Roadmaps Work
              </span>
            </div>

            <section className="relative mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(135deg,rgba(14,14,16,0.96),rgba(12,12,13,0.72))] p-6 sm:p-8">
              <div className="absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden lg:block">
                <Image
                  alt="DemonTech roadmap mountain path"
                  className="h-full w-full object-cover object-[center_42%] opacity-95"
                  fill
                  priority
                  sizes="54vw"
                  src="/roadmap-journey-bg.png"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,14,16,0.98)_0%,rgba(14,14,16,0.72)_16%,rgba(14,14,16,0.18)_46%,rgba(14,14,16,0)_100%)]" />
                <div className="absolute inset-y-0 left-0 w-32 bg-[linear-gradient(90deg,rgba(14,14,16,1),rgba(14,14,16,0))]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(14,14,16,0.86),rgba(14,14,16,0))]" />
              </div>

              <div className="relative max-w-xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-red-500/20 bg-red-950/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-red-400">
                  Understand The Journey
                  <Icon className="h-4 w-4" name="chevron" />
                </div>
                <h1 className="mt-6 text-5xl font-black tracking-normal text-white sm:text-6xl">
                  How Roadmaps Work
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  DemonTech Roadmaps break down complex skills into clear,
                  actionable steps so you can learn, practice and build with
                  confidence.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {heroBadges.map((badge) => (
                    <div
                      className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-black/35 p-3 text-sm text-white"
                      key={badge.label}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-red-500" name={badge.icon} />
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-xl border border-[var(--border)] bg-black/20 p-6">
              <h2 className="border-l-4 border-red-500 pl-4 text-2xl font-black text-[var(--text-primary)]">
                The Roadmap Flow
              </h2>
              <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
                {flowSteps.map((step, index) => (
                  <article
                    className="relative rounded-xl border border-[var(--border)] bg-[var(--panel-strong)] p-5 text-center"
                    key={step.title}
                  >
                    <span className="absolute left-4 top-0 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-red-950 text-xs font-black text-white ring-1 ring-red-500/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="mx-auto h-14 w-14 text-red-500" name={step.icon} />
                    <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                      {step.detail}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_1fr]">
              <section>
                <h2 className="flex items-center gap-3 text-2xl font-black text-[var(--text-primary)]">
                  <Icon className="h-8 w-8 text-red-500" name="spark" />
                  Why DemonTech Roadmaps Work
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {reasons.map((reason) => (
                    <article
                      className="rounded-xl border border-[var(--border)] bg-[var(--panel-bg)] p-5 text-center"
                      key={reason.title}
                    >
                      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-red-500/30 bg-red-950/20 text-red-500">
                        <Icon className="h-9 w-9" name={reason.icon} />
                      </span>
                      <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">
                        {reason.title}
                      </h3>
                      <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                        {reason.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-xl border border-red-500/45 bg-red-950/10 p-5">
                <h2 className="flex items-center gap-3 text-xl font-black text-[var(--text-primary)]">
                  See it in Action
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-red-700 text-white">
                    <Icon className="h-3.5 w-3.5" name="play" />
                  </span>
                </h2>
                <div className="mt-5 grid gap-5 md:grid-cols-[1.3fr_0.8fr]">
                  <div className="grid min-h-44 place-items-center rounded-lg border border-[var(--border)] bg-[linear-gradient(135deg,#0b0b0c,#1f0708)]">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white shadow-[0_0_30px_rgba(239,68,68,0.55)]">
                      <Icon className="h-8 w-8" name="play" />
                    </span>
                  </div>
                  <div className="space-y-4">
                    {actionItems.map((item) => (
                      <div
                        className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                        key={item}
                      >
                        <Icon className="h-4 w-4 text-red-500" name="code" />
                        {item}
                      </div>
                    ))}
                    <a
                      className="mt-3 flex h-11 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white"
                      href="/docs/quick-start"
                    >
                      Try It Now
                      <Icon className="h-4 w-4" name="chevron" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
