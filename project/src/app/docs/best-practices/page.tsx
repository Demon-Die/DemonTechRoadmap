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
      { label: "Study Guide", icon: "book", href: "/docs/study-guide" },
      { label: "Best Practices", icon: "shield", href: "/docs/best-practices", active: true },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
      { label: "Contributing", icon: "file", href: "/docs/contributing" },
    ],
  },
];

const overview = [
  ["12", "Categories", "code"],
  ["80+", "Best Practices", "book"],
  ["Security", "Focused", "shield"],
  ["Production", "Ready", "rocket"],
];

const categories = [
  ["Code Quality", "Write clean, readable, and maintainable code.", "8 Practices", "code"],
  ["Performance", "Optimize your code and improve performance.", "7 Practices", "gauge"],
  ["Security", "Secure your applications and protect data.", "9 Practices", "shield"],
  ["Git & Version Control", "Manage code changes effectively with Git.", "6 Practices", "git-branch"],
  ["Testing", "Write tests and ensure code reliability.", "8 Practices", "check-square"],
  ["UI/UX", "Design better interfaces and experiences.", "6 Practices", "monitor"],
  ["Accessibility", "Build inclusive and accessible applications.", "5 Practices", "user"],
  ["Documentation", "Write clear and helpful documentation.", "6 Practices", "file-text"],
  ["Project Structure", "Organize your projects in a scalable way.", "7 Practices", "folder"],
  ["API Design", "Design clean, consistent, and reliable APIs.", "6 Practices", "api"],
  ["Database", "Design and use databases efficiently.", "6 Practices", "database"],
  ["Deployment", "Deploy applications like a pro.", "5 Practices", "cloud-upload"],
];

const topPractices = [
  ["Write Meaningful Variable Names", "Use descriptive names that clearly explain what the variable represents.", "Code Quality", "purple"],
  ["Keep Functions Small and Focused", "Each function should do one thing and do it well.", "Code Quality", "purple"],
  ["Avoid Code Duplication", "Don&apos;t repeat yourself. Reuse code and create reusable components.", "Code Quality", "purple"],
  ["Handle Errors Gracefully", "Always handle errors and provide meaningful messages.", "Security", "green"],
  ["Use Environment Variables", "Store sensitive data in environment variables, not in code.", "Security", "green"],
];

const applySteps = [
  ["Learn", "Read and understand the best practices.", "book"],
  ["Implement", "Apply them in your daily coding and projects.", "code"],
  ["Review", "Review your code and improve continuously.", "chart"],
  ["Master", "Make best practices a habit and level up your skills.", "star"],
];

const whyFollow = [
  "Write clean and maintainable code",
  "Improve performance and security",
  "Build scalable and reliable applications",
  "Save time and avoid common mistakes",
  "Become a professional developer",
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
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  gauge: <path d="M5 19a9 9 0 1 1 14 0M12 14l4-5M8 14h.01M16 14h.01" />,
  "git-branch": <path d="M6 4v12a4 4 0 0 0 4 4h8M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v3a3 3 0 0 1-3 3h-5" />,
  "check-square": <path d="M4 5h16v16H4V5Zm4 8 3 3 6-7" />,
  monitor: <path d="M4 5h16v11H4V5Zm5 16h6m-3-5v5" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  "file-text": <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  api: <path d="M5 18V6h14v12H5Zm3-3V9m0 0h2a2 2 0 0 1 0 4H8m5 2V9m4 6V9" />,
  database: <path d="M5 6c0-2 14-2 14 0v12c0 2-14 2-14 0V6Zm0 0c0 2 14 2 14 0M5 12c0 2 14 2 14 0" />,
  "cloud-upload": <path d="M17 18H8a5 5 0 1 1 1.3-9.8A6 6 0 0 1 21 11.5 3.5 3.5 0 0 1 17 18Zm-5 0v-7m0 0 3 3m-3-3-3 3" />,
  chart: <path d="M5 20V10m7 10V4m7 16v-7" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 18.2 6.4 21.2 7.5 15 3 10.6l6.2-.9L12 3Z" />,
  check: <path d="m5 12 4 4L19 6" />,
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-black text-[var(--text-primary)]">
      <span className="h-6 w-0.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
      {children}
    </h2>
  );
}

export default function BestPractices() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300" style={theme}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${isDarkMode ? "bg-[radial-gradient(circle_at_68%_12%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_80%_68%,rgba(127,29,29,0.16),transparent_28%),linear-gradient(180deg,#050505_0%,#030303_100%)]" : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"}`} />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[86px] max-w-[1510px] items-center gap-8 px-6 lg:px-10">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a className={`relative transition hover:text-red-500 ${item === "Guides" ? "text-red-500" : ""}`} href="#" key={item}>
                {item}
                {item === "Guides" && <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[286px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
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

      <div className="mx-auto grid max-w-[1510px] grid-cols-1 lg:grid-cols-[270px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-86px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-[var(--shadow)]">
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

            <div className="mt-10 rounded-md border border-red-500/35 bg-red-950/15 p-4">
              <h3 className="font-bold text-[var(--text-primary)]">Level Up Your Skills</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Follow best practices and write better code, build better projects, and become a better developer.
              </p>
              <a className="mt-6 flex h-10 w-fit items-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white" href="/docs/all-roadmaps">
                View Roadmaps
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </div>

            <div className="mt-5 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-5">
              <h3 className="font-bold text-[var(--text-primary)]">Stay Updated</h3>
              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                Get the latest tips and best practices straight to your inbox.
              </p>
              <label className="mt-5 flex h-10 items-center rounded-md border border-[var(--border)] bg-[var(--field-bg)] text-sm text-[var(--text-muted)]">
                <span className="flex-1 px-3">Enter your email</span>
                <button className="grid h-10 w-12 place-items-center border-l border-[var(--border)] text-red-500" type="button">
                  <Icon className="h-4 w-4" name="send" />
                </button>
              </label>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-red-500" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">Best Practices</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_430px]">
              <div>
                <h1 className="text-5xl font-black tracking-normal text-[var(--text-primary)] sm:text-6xl">
                  Best Practices
                  <Icon className="ml-5 inline-block h-8 w-8 align-top text-red-500" name="spark" />
                </h1>
                <div className="mt-2 h-1 w-72 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Follow industry-standard best practices to write clean code, build scalable projects, and grow as a developer.
                </p>
              </div>

              <aside className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-xl font-black text-[var(--text-primary)]">Why Follow Best Practices?</h2>
                <div className="mt-6 space-y-4">
                  {whyFollow.map((item) => (
                    <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]" key={item}>
                      <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-red-500">
                        <Icon className="h-2.5 w-2.5" name="check" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </section>

            <section className="mt-9">
              <SectionTitle>Quick Overview</SectionTitle>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {overview.map(([value, label, icon]) => (
                  <article className="flex items-center gap-5 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5" key={label}>
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                      <Icon className="h-7 w-7" name={icon} />
                    </span>
                    <div>
                      <p className="text-xl font-black text-[var(--text-primary)]">{value}</p>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">{label}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>Best Practices by Category</SectionTitle>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {categories.map(([title, detail, count, icon]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-red-500/45 hover:shadow-[0_20px_60px_rgba(127,29,29,0.18)]" key={title}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                        <Icon className="h-7 w-7" name={icon} />
                      </span>
                      <Icon className="mt-5 h-5 w-5 text-red-500" name="chevron" />
                    </div>
                    <h3 className="mt-5 text-base font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-3 min-h-[52px] text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
                    <p className="mt-3 text-sm text-[var(--text-muted)]">{count}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>Top Best Practices</SectionTitle>
              <div className="mt-5 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-strong)]">
                {topPractices.map(([title, detail, tag, tone], index) => (
                  <article className="grid gap-4 border-b border-[var(--border)] px-5 py-4 last:border-b-0 lg:grid-cols-[48px_1fr_160px_120px] lg:items-center" key={title}>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-red-950/20 text-sm font-black text-red-500">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: detail }} />
                    </div>
                    <span className={`w-fit rounded-md border px-3 py-1 text-xs font-bold ${tone === "green" ? "border-green-500/20 bg-green-500/10 text-green-400" : "border-purple-500/20 bg-purple-500/10 text-purple-300"}`}>{tag}</span>
                    <a className="flex items-center gap-2 text-sm font-black text-red-500 lg:justify-end" href="#">
                      Read More
                      <Icon className="h-4 w-4" name="chevron" />
                    </a>
                  </article>
                ))}
                <a className="mx-auto flex h-16 w-fit items-center gap-2 text-sm font-black text-red-500" href="#">
                  View All Best Practices
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>How to Apply Best Practices</SectionTitle>
              <div className="mt-6 grid gap-5 lg:grid-cols-4">
                {applySteps.map(([title, detail, icon], index) => (
                  <article className="relative text-center" key={title}>
                    <span className="absolute left-3 top-2 grid h-10 w-10 place-items-center rounded-full border border-red-500/35 bg-red-950/20 text-lg font-black text-red-500">{index + 1}</span>
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-red-500">
                      <Icon className="h-8 w-8" name={icon} />
                    </span>
                    <h3 className="mt-4 text-sm font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
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
