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
type QuestionCategory = {
  title: string;
  count: string;
  icon: string;
  active?: boolean;
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
      { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
      { label: "Best Practices", icon: "shield", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions", active: true },
      { label: "Contributing", icon: "info", href: "/docs/contributing" },
    ],
  },
];

const categories: QuestionCategory[] = [
  { title: "All Questions", count: "128 Questions", icon: "message", active: true },
  { title: "Getting Started", count: "18 Questions", icon: "rocket" },
  { title: "Roadmaps", count: "24 Questions", icon: "book" },
  { title: "Learning", count: "28 Questions", icon: "book-open" },
  { title: "Account & Billing", count: "16 Questions", icon: "user" },
  { title: "Community", count: "22 Questions", icon: "users" },
];

const questions = [
  "What is a roadmap and how does it help me?",
  "How do I choose the right roadmap for me?",
  "What do beginner, intermediate, and advanced levels mean?",
  "Are the roadmaps free?",
  "How often are the roadmaps updated?",
  "Can I suggest changes or improvements to a roadmap?",
  "What if I get stuck while learning?",
  "Do I need prior experience to follow a roadmap?",
  "How do learning paths differ from roadmaps?",
  "Can I access roadmaps on mobile?",
  "How can I track my progress?",
];

const topQuestions = [
  ["What is a roadmap and how does it help me?", "324 views"],
  ["How do I choose the right roadmap for me?", "276 views"],
  ["Are the roadmaps free?", "198 views"],
  ["How often are the roadmaps updated?", "156 views"],
  ["What if I get stuck while learning?", "132 views"],
];

const helpTopics = [
  ["Getting Started Guide", "New here? Start with the basics.", "book"],
  ["How Roadmaps Work", "Understand the structure and flow.", "home"],
  ["Learning Tips", "Proven tips to learn faster and smarter.", "target"],
  ["Community Rules", "Guidelines for a positive and helpful community.", "shield"],
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
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  file: <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  message: <path d="M4 5h16v11H9l-5 4V5Zm5 5h6m-6 3h4" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  "book-open": <path d="M4 5h6a4 4 0 0 1 4 4v11a4 4 0 0 0-4-3H4V5Zm10 4a4 4 0 0 1 4-4h2v12h-2a4 4 0 0 0-4 3V9Z" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  thumbsUp: <path d="M7 10v10H4V10h3Zm0 0 4-7h1.5a2 2 0 0 1 2 2.3L14 8h5a2 2 0 0 1 2 2.3l-1.2 7A3 3 0 0 1 16.8 20H7" />,
  thumbsDown: <path d="M7 14V4H4v10h3Zm0 0 4 7h1.5a2 2 0 0 0 2-2.3L14 16h5a2 2 0 0 0 2-2.3l-1.2-7A3 3 0 0 0 16.8 4H7" />,
  external: <path d="M14 4h6v6m0-6-9 9M20 14v6H4V4h6" />,
  headset: <path d="M4 13a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2m-9-8H4v5h2v-5Zm14 0h-2v5h2v-5Z" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
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
        <Image alt="DemonTech logo" className="h-full w-full object-cover" height={64} src="/demontech-logo.png" width={64} />
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

export default function CommonQuestions() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300" style={theme}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${isDarkMode ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_80%_68%,rgba(127,29,29,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]" : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"}`} />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1260px] items-center gap-6 px-5 lg:px-8">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a className={`relative transition hover:text-red-500 ${item === "Guides" ? "text-red-500" : ""}`} href="#" key={item}>
                {item}
                {item === "Guides" && <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[235px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">K</kbd>
          </label>
          <button aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`} className="grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500" onClick={() => setIsDarkMode((value) => !value)} type="button">
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1260px] grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-72px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
            <div className="space-y-7">
              {sidebarGroups.map((group) => (
                <section key={group.title}>
                  <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[var(--text-secondary)]">{group.title}</h3>
                  <div className="mt-4 space-y-1">
                    {group.items.map((item) => (
                      <a className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm transition ${item.active ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]" : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"}`} href={item.href ?? "#"} key={item.label}>
                        <Icon className="h-4 w-4 shrink-0" name={item.icon} />
                        {item.label}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-md border border-red-500/35 bg-red-950/15 p-4 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-md bg-red-950/25 text-red-500">
                <Icon className="h-8 w-8" name="message" />
              </div>
              <h3 className="mt-6 font-black text-[var(--text-primary)]">Still have questions?</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                We&apos;re here to help! Join our community and get answers.
              </p>
              <a className="mt-6 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                <Icon className="h-4 w-4" name="discord" />
                Join Discord
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-[var(--text-muted)]" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">Common Questions</span>
            </div>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_310px]">
              <div>
                <h1 className="text-4xl font-black tracking-normal text-[var(--text-primary)] sm:text-5xl">
                  Common Questions
                  <Icon className="ml-5 inline-block h-8 w-8 align-top text-red-500" name="spark" />
                </h1>
                <div className="mt-2 h-1 w-72 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Find answers to the most common questions about roadmaps,
                  learning, and everything in between.
                </p>
              </div>

              <aside className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                <h2 className="text-lg font-black text-[var(--text-primary)]">Can&apos;t find your answer?</h2>
                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                  Our community is super helpful. Ask your question there.
                </p>
                <a className="mt-5 flex h-12 items-center justify-center gap-3 rounded-md bg-[linear-gradient(135deg,rgba(185,28,28,0.9),rgba(69,22,22,0.72))] px-5 text-sm font-black text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                  Ask in Community
                  <Icon className="h-4 w-4" name="external" />
                </a>
                <a className="mt-5 flex items-center gap-2 text-sm font-black text-red-500" href="#">
                  Contact Support
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </aside>
            </section>

            <section className="mt-10 max-w-2xl">
              <label className="flex h-14 items-center gap-4 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-5 text-sm text-[var(--text-muted)]">
                <Icon className="h-5 w-5" name="search" />
                <span>Search questions...</span>
              </label>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-black text-[var(--text-primary)]">Browse by Category</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
                {categories.map(({ title, count, icon, active }) => (
                  <article className={`rounded-lg border p-5 transition ${active ? "border-red-500 bg-red-950/15" : "border-[var(--border)] bg-[var(--panel-strong)] hover:border-red-500/45"}`} key={title}>
                    <Icon className={`h-8 w-8 ${active ? "text-red-500" : "text-[var(--text-primary)]"}`} name={icon} />
                    <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">{count}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-6 grid gap-5 xl:grid-cols-[1fr_240px]">
              <div>
                <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">All Questions (128)</h2>
                  <label className="flex h-11 items-center gap-3 text-sm text-[var(--text-muted)]">
                    Sort by:
                    <button className="flex h-11 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 font-bold text-[var(--text-primary)]" type="button">
                      Most Popular
                      <Icon className="h-4 w-4 rotate-90" name="chevron" />
                    </button>
                  </label>
                </div>

                <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-strong)]">
                  {questions.map((question, index) => (
                    <article className="border-b border-[var(--border)] px-5 py-5 last:border-b-0" key={question}>
                      <div className="flex items-center gap-4">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full border border-red-500 text-red-500">
                          <Icon className="h-3 w-3" name={index === 0 ? "minus" : "plus"} />
                        </span>
                        <h3 className="flex-1 text-base font-black text-[var(--text-primary)]">{question}</h3>
                        <Icon className={`h-4 w-4 ${index === 0 ? "-rotate-90" : "rotate-90"}`} name="chevron" />
                      </div>
                      {index === 0 && (
                        <div className="ml-9 mt-6 text-sm leading-7 text-[var(--text-secondary)]">
                          <p>
                            A roadmap is a structured guide that shows you what
                            to learn and in what order to achieve a specific goal.
                          </p>
                          <p className="mt-2">
                            It helps you stay focused, avoid confusion, and track
                            your progress step by step.
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[var(--text-muted)]">
                            <span>Was this helpful?</span>
                            <span className="flex items-center gap-2">
                              <Icon className="h-4 w-4" name="thumbsUp" />
                              324
                            </span>
                            <span className="flex items-center gap-2">
                              <Icon className="h-4 w-4" name="thumbsDown" />
                              18
                            </span>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="ml-9 mt-6 text-sm leading-7 text-[var(--text-secondary)]">
                          <p className="text-[var(--text-secondary)]">
                            These labels show how deep the topics usually are before
                            moving to the next stage:
                          </p>
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--text-secondary)]">
                            <li>
                              <span className="font-semibold text-[var(--text-primary)]">Beginner:</span>{" "}
                              foundation topics that build the core concepts and terms.
                            </li>
                            <li>
                              <span className="font-semibold text-[var(--text-primary)]">Intermediate:</span>{" "}
                              practical topics that combine core ideas with real examples and common pitfalls.
                            </li>
                            <li>
                              <span className="font-semibold text-[var(--text-primary)]">Advanced:</span>{" "}
                              project-scale, architecture-heavy topics where independent problem-solving is expected.
                            </li>
                          </ul>
                          <p className="mt-4">
                            In this roadmap you may also see labels such as Starter, Core,
                            Applied, Advanced, and Expert. Treat them as finer-grained
                            steps on the same path from beginner to advanced mastery.
                          </p>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              <aside className="space-y-5">
                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Top Questions</h2>
                  <div className="mt-5 space-y-5">
                    {topQuestions.map(([question, views]) => (
                      <a className="block text-sm leading-6 text-[var(--text-primary)]" href="#" key={question}>
                        {question}
                        <span className="mt-1 block font-black text-red-500">{views}</span>
                      </a>
                    ))}
                  </div>
                  <a className="mt-6 flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--border)] text-sm font-black text-[var(--text-primary)] transition hover:border-red-500 hover:text-red-500" href="#">
                    View All Popular
                    <Icon className="h-4 w-4" name="chevron" />
                  </a>
                </section>

                <section className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-black text-[var(--text-primary)]">Have a Question?</h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                        If you can&apos;t find the answer you&apos;re looking for,
                        feel free to reach out to us.
                      </p>
                    </div>
                    <Icon className="h-12 w-12 shrink-0 text-[var(--border)]" name="headset" />
                  </div>
                  <a className="mt-6 flex h-11 items-center justify-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-black text-[var(--text-primary)] transition hover:bg-red-500 hover:text-white" href="#">
                    Contact Support
                    <Icon className="h-4 w-4 text-red-500" name="chevron" />
                  </a>
                </section>
              </aside>
            </section>

            <section className="mt-10 rounded-lg border border-red-500/35 bg-red-950/10 p-5">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                  <Icon className="h-7 w-7" name="book" />
                </span>
                <div>
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Explore Help Topics</h2>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Quick guides and resources to help you on your journey.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {helpTopics.map(([title, detail, icon]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5" key={title}>
                    <span className="grid h-11 w-11 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                      <Icon className="h-6 w-6" name={icon} />
                    </span>
                    <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-2 min-h-[44px] text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
                    <a className="mt-4 flex items-center gap-2 text-sm font-black text-red-500" href="#">
                      Read Guide
                      <Icon className="h-4 w-4" name="chevron" />
                    </a>
                  </article>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-5 rounded-lg border border-red-500/35 bg-red-950/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-lg font-black text-[var(--text-primary)]">Still have questions?</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    Our community is always here to help you grow and succeed.
                  </p>
                </div>
                <a className="flex h-12 shrink-0 items-center justify-center gap-3 rounded-md bg-red-700/80 px-5 text-sm font-black text-white transition hover:bg-red-600" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                  <Icon className="h-5 w-5" name="discord" />
                  Join Discord Community
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
