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

const navItems = ["Roadmaps", "Resources", "Guides", "Docs", "Community"];

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Get Started",
    items: [
      { label: "Introduction", icon: "home", href: "/", active: true },
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
  {
    title: "About",
    items: [
      { label: "About DemonTech", icon: "info" },
      { label: "Our Mission", icon: "target" },
      { label: "Changelog", icon: "search" },
    ],
  },
];

const introFeatures = [
  {
    title: "Structured Learning",
    detail: "Follow clear paths that turn scattered tutorials into focused skill growth.",
    icon: "map",
  },
  {
    title: "Practical Projects",
    detail: "Build real portfolio work as you learn, not after you finish learning.",
    icon: "code",
  },
  {
    title: "Community Support",
    detail: "Join learners, ask questions, share progress, and keep momentum.",
    icon: "users",
  },
];

const steps = [
  "Pick the roadmap that matches your goal and current level.",
  "Follow curated resources in order, without guessing what comes next.",
  "Build projects after each major topic to turn knowledge into proof.",
  "Track progress, ask for feedback, and keep leveling up with the community.",
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
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  users: <path d="M16 19a4 4 0 0 0-8 0M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 8a3.5 3.5 0 0 0-3-3.45M17 8.5a2.5 2.5 0 0 1 0 5M5 19a3.5 3.5 0 0 1 3-3.45M7 8.5a2.5 2.5 0 0 0 0 5" />,
  map: <path d="m4 6 5-2 6 2 5-2v14l-5 2-6-2-5 2V6Zm5-2v14m6-12v14" />,
  pen: <path d="m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Zm13-15 3 3" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  heart: <path d="M12 21s-7-4.4-9-9.2C1.5 8.2 3.3 5 6.5 5c1.8 0 3 1 3.5 2 .5-1 1.7-2 3.5-2 3.2 0 5 3.2 3.5 6.8C19 16.6 12 21 12 21Z" />,
  github: <path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 7.2c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.5 9.5 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />,
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
          Documentation
        </p>
      </div>
    </Link>
  );
}

export default function Introduction() {
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
            ? "bg-[radial-gradient(circle_at_49%_12%,rgba(127,29,29,0.18),transparent_22%),radial-gradient(circle_at_83%_63%,rgba(127,29,29,0.18),transparent_24%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_47%_10%,rgba(239,68,68,0.1),transparent_25%),radial-gradient(circle_at_86%_62%,rgba(220,38,38,0.1),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
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
            <span className="flex-1">Search documentation...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">
              K
            </kbd>
          </label>

          <a
            className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex"
            href="https://discord.gg/yWtjK2Tb8T"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>

          <button
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500"
            onClick={() => setIsDarkMode((value) => !value)}
            title={`Switch to ${isDarkMode ? "light" : "dark"} theme`}
            type="button"
          >
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1510px] grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-86px)] border-r border-[var(--border)] px-6 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-[var(--shadow)]">
            <h2 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Documentation
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              Everything you need to know about DemonTech Roadmap.
            </p>
            <div className="mt-5 h-px bg-[var(--border)]" />

            <div className="mt-6 space-y-7">
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
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-red-500" name="home" />
              <span>Docs</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span>Get Started</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">
                Introduction
              </span>
            </div>

            <div className="mt-8 grid gap-10 xl:grid-cols-[0.95fr_1.05fr]">
              <section>
                <div className="inline-flex rounded-full border border-red-500/35 bg-red-950/30 px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-red-400">
                  Get Started
                </div>
                <h1 className="mt-5 text-5xl font-black tracking-normal text-[var(--text-primary)]">
                  Welcome to DemonTech Documentation
                </h1>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                  DemonTech Roadmap is an open-source learning platform for
                  developers and tech enthusiasts. Learn through structured
                  roadmaps, curated resources, community support, and projects
                  that make your skills visible.
                </p>
                <div className="mt-8 h-px bg-[var(--border)]" />

                <div className="mt-9 space-y-8">
                  {introFeatures.map((feature) => (
                    <article
                      className="grid grid-cols-[58px_1fr] gap-6"
                      key={feature.title}
                    >
                      <div className="grid h-14 w-14 place-items-center rounded-md border border-red-500/30 bg-red-950/10 text-red-500 shadow-[0_0_24px_rgba(127,29,29,0.12)]">
                        <Icon className="h-7 w-7" name={feature.icon} />
                      </div>
                      <div>
                        <h2 className="text-base font-black text-[var(--text-primary)]">
                          {feature.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                          {feature.detail}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-7 shadow-2xl shadow-[var(--shadow)] ring-1 ring-red-500/30">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-red-500" name="spark" />
                  <h2 className="text-xl font-black text-[var(--text-primary)]">
                    How DemonTech Works
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  The roadmap system is designed to remove confusion from
                  self-learning. Each path gives you a sequence, resources,
                  projects, and a way to keep moving with confidence.
                </p>

                <div className="mt-7 space-y-4">
                  {steps.map((step, index) => (
                    <div
                      className="flex min-h-12 items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-4 text-sm text-[var(--text-secondary)]"
                      key={step}
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-600 text-xs font-black text-white">
                        {index + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section className="mt-8 grid gap-8 rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-8 shadow-2xl shadow-[var(--shadow)] lg:grid-cols-[1fr_2fr]">
              <div className="flex gap-5">
                <Icon className="mt-1 h-9 w-9 shrink-0 text-red-500" name="target" />
                <div>
                  <h2 className="text-xl font-black text-[var(--text-primary)]">
                    Who Is This For?
                  </h2>
                  <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                    Beginners, students, self-taught developers, and builders who
                    want a practical path from first concepts to real projects.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 border-t border-[var(--border)] pt-7 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                {["Choose a path", "Build projects", "Grow with feedback"].map(
                  (item, index) => (
                    <article className="text-center" key={item}>
                      <span className="mx-auto grid h-11 w-11 place-items-center rounded-md border border-red-500/30 bg-red-950/10 text-sm font-black text-red-500">
                        {index + 1}
                      </span>
                      <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">
                        {item}
                      </h3>
                      <p className="mx-auto mt-3 max-w-[180px] text-sm leading-6 text-[var(--text-muted)]">
                        Learn in order, practice consistently, and turn progress
                        into proof.
                      </p>
                    </article>
                  ),
                )}
              </div>
            </section>

            <div className="mt-7 flex flex-col items-center justify-between gap-5 border-t border-[var(--border)] pt-6 text-center text-[var(--text-muted)] sm:flex-row">
              <p className="flex items-center gap-3 text-sm">
                <Icon className="h-5 w-5 text-red-500" name="heart" />
                Love DemonTech Docs? Star us on GitHub and support the project!
              </p>
              <a
                className="flex h-11 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-bg)] px-5 text-sm font-bold text-red-500 transition hover:border-red-500"
                href="https://github.com/Demon-Die/DemonTechRoadmap"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-5 w-5" name="github" />
                Star on GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
