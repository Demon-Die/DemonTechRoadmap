"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type ThemeVars = CSSProperties & Record<`--${string}`, string>;

const navItems = ["Roadmaps", "Resources", "Docs", "Guides", "Community"];

const sidebarGroups = [
  {
    title: "Get Started",
    items: [
      ["Introduction", "home", "/"],
      ["Quick Start", "bolt", "/docs/quick-start"],
      ["How Roadmaps Work", "route", "/docs/how-roadmaps-work"],
      ["Learning Paths", "nodes", "/docs/learning-paths"],
    ],
  },
  {
    title: "Browse",
    items: [
      ["All Roadmaps", "grid", "/docs/all-roadmaps"],
      ["By Category", "folder", "/docs/by-category"],
      ["Learning Resources", "send", "/docs/resources"],
      ["Project Ideas", "spark", "/docs/project-ideas"],
    ],
  },
  {
    title: "Guides",
    items: [
      ["Study Guide", "book", "/docs/study-guide"],
      ["Best Practices", "shield", "/docs/best-practices"],
      ["Common Questions", "help", "/docs/common-questions"],
      ["Contributing", "info", "/docs/contributing"],
      ["About DemonTech", "info", "/docs/about-demontech"],
      ["Our Mission", "target", "/docs/our-mission"],
    ],
  },
  {
    title: "Tools",
    items: [
      ["Changelog", "clock", "/docs/changelog"],
      ["Status", "status", "https://github.com/Demon-Die/DemonTechRoadmap/actions"],
    ],
  },
];

const tabs = ["All Updates", "Features", "Improvements", "Fixes", "Docs", "Other"];

const updates = [
  {
    date: "June 12, 2026",
    version: "v3.0.0",
    title: "Major Audit Implementation",
    tag: "Release",
    tone: "purple",
    icon: "rocket",
    points: [
      "Implemented full UI/UX audit feedback",
      "Fixed SEO meta tags and canonical URLs",
      "Added testimonials and refined social proof",
    ],
    isNew: true,
  },
  {
    date: "June 05, 2026",
    version: "v2.5.0",
    title: "Vercel Deployment fixes",
    tag: "Fix",
    tone: "slate",
    icon: "bug",
    points: [
      "Fixed workspace dependency installation",
      "Removed hacky .next folder copying scripts",
      "Switched to proper Root Directory Vercel deployment",
    ],
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
  shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />,
  help: <path d="M10 9a3 3 0 1 1 4 2.83c-1.1.47-2 1.03-2 2.17m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  clock: <path d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  status: <path d="M12 21a9 9 0 1 1 9-9m-5.5 5.5 2 2L22 15" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  calendar: <path d="M7 3v4m10-4v4M4 8h16v13H4V8Zm0 5h16" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  bug: <path d="M8 8h8v8a4 4 0 0 1-8 0V8Zm0 2H5m14 0h-3M8 14H5m14 0h-3M9 4l2 4m4-4-2 4m-1 4h.01" />,
  "file-text": <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  settings: <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-12v3m0 11v3m8.5-8.5h-3m-11 0h-3m14.5-6-2.1 2.1M8.1 15.9 6 18m12 0-2.1-2.1M8.1 8.1 6 6" />,
  flag: <path d="M5 21V4m0 0h10l-1 4 1 4H5" />,
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
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
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
        <p className="text-2xl font-black leading-6 tracking-normal text-[var(--text-primary)]">Demon<span className="text-red-500">Tech</span></p>
        <p className="mt-1 text-[10px] font-black uppercase tracking-[0.32em] text-[var(--text-muted)]">Roadmap</p>
      </div>
    </Link>
  );
}

function tagClass(tone: string) {
  if (tone === "green") return "border-emerald-500/40 bg-emerald-500/10 text-emerald-400";
  if (tone === "purple") return "border-purple-500/40 bg-purple-500/10 text-purple-300";
  if (tone === "slate") return "border-slate-500/40 bg-slate-500/10 text-slate-300";
  return "border-red-500/40 bg-red-500/10 text-red-400";
}

export default function Changelog() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("All Updates");
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300" style={theme}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${isDarkMode ? "bg-[radial-gradient(circle_at_66%_12%,rgba(127,29,29,0.2),transparent_26%),radial-gradient(circle_at_86%_70%,rgba(127,29,29,0.15),transparent_30%),linear-gradient(180deg,#050505_0%,#030303_100%)]" : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"}`} />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1260px] items-center gap-6 px-5 lg:px-8">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a className={`relative transition hover:text-red-500 ${item === "Docs" ? "text-red-500" : ""}`} href="#" key={item}>
                {item}
                {item === "Docs" && <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[235px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
            <Icon className="h-5 w-5" name="search" />
            <span className="flex-1">Search anything...</span>
            <kbd className="rounded border border-[var(--border)] bg-[var(--panel-strong)] px-2 py-0.5 text-xs">K</kbd>
          </label>
          <button aria-label={`Switch to ${isDarkMode ? "light" : "dark"} theme`} className="grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--panel-strong)] text-[var(--text-primary)] transition hover:border-red-500" onClick={() => setIsDarkMode((value) => !value)} type="button">
            <Icon className="h-5 w-5" name={isDarkMode ? "sun" : "moon"} />
          </button>
          <a className="hidden h-11 items-center gap-2 rounded-md border border-red-600 bg-red-950/20 px-5 text-sm font-bold text-red-400 shadow-[0_0_26px_rgba(127,29,29,0.18)] transition hover:bg-red-600 hover:text-white md:inline-flex" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
            <Icon className="h-5 w-5" name="discord" />
            Join Discord
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1260px] grid-cols-1 lg:grid-cols-[235px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-72px)] border-r border-[var(--border)] px-5 py-5 lg:block">
          <div className="sticky top-[106px]">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
              <div className="space-y-7">
                {sidebarGroups.map((group) => (
                  <section key={group.title}>
                    <h3 className="text-xs font-black uppercase tracking-[0.14em] text-red-500">{group.title}</h3>
                    <div className="mt-4 space-y-1">
                      {group.items.map(([label, icon, href]) => {
                        const active = label === "Changelog";

                        return (
                          <a className={`flex h-10 items-center justify-between rounded-md px-3 text-sm transition ${active ? "border border-red-500/40 bg-[linear-gradient(135deg,rgba(153,27,27,0.95),rgba(45,15,15,0.88))] text-white shadow-[0_16px_36px_rgba(127,29,29,0.32)]" : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"}`} href={href} key={label}>
                            <span className="flex items-center gap-3">
                              <Icon className="h-4 w-4 shrink-0" name={icon} />
                              {label}
                            </span>
                            {label === "Status" && <span className="h-2 w-2 rounded-full bg-emerald-400" />}
                          </a>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-md border border-red-500/35 bg-[radial-gradient(circle_at_50%_8%,rgba(239,68,68,0.24),transparent_45%),rgba(10,10,11,0.72)] p-5">
              <div className="mx-auto grid h-32 w-32 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_45px_rgba(239,68,68,0.28)]">
                <Image alt="DemonTech changelog emblem" className="h-full w-full object-cover" height={128} src="/demontech-logo.png" width={128} />
              </div>
              <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">We are always improving.</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">See what is new, changed, and coming next.</p>
              <Link className="mt-5 flex h-10 items-center justify-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white" href="/docs/all-roadmaps">
                View Roadmaps
                <Icon className="h-4 w-4" name="chevron" />
              </Link>
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-5">
          <div className="mx-auto max-w-[1000px] rounded-xl border border-[var(--border)] bg-[rgba(5,5,6,0.34)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-7 lg:px-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-red-500" name="home" />
              <Link className="transition hover:text-red-500" href="/">Home</Link>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">Changelog</span>
            </div>

            <section className="relative mt-10 grid min-h-[250px] gap-6 overflow-hidden lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="relative z-10">
                <h1 className="text-4xl font-black leading-[1.04] tracking-normal text-[var(--text-primary)] sm:text-5xl">
                  Change Log
                  <span className="block text-red-500">Project Updates</span>
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                  Track the latest updates, improvements, and fixes across DemonTech Roadmap.
                </p>
              </div>
              <div className="relative min-h-[220px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.12)_1px,transparent_1px)] bg-[length:42px_42px] opacity-30" />
                <div className="absolute left-1/2 top-1/2 h-44 w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-[-14deg] rounded-[50%] border border-red-500/35" />
                <div className="absolute left-1/2 top-1/2 h-52 w-44 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-7 shadow-[0_0_60px_rgba(239,68,68,0.18)]">
                  <div className="h-2 w-20 rounded bg-[var(--border)]" />
                  <div className="mt-6 h-2 w-32 rounded bg-[var(--border)]" />
                  <div className="mt-5 h-2 w-24 rounded bg-red-500" />
                  <div className="mt-5 h-2 w-16 rounded bg-red-500" />
                </div>
                <div className="absolute bottom-5 right-[20%] grid h-28 w-28 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_45px_rgba(239,68,68,0.34)]">
                  <Image alt="DemonTech changelog emblem" className="h-full w-full object-cover" height={112} src="/demontech-logo.png" width={112} priority />
                </div>
              </div>
            </section>

            <section className="mt-6 rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-4">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex flex-wrap gap-3">
                  {tabs.map((tab) => (
                    <button className={`h-10 rounded-md px-5 text-sm font-bold transition ${activeTab === tab ? "border border-red-500/40 bg-red-950/55 text-white" : "text-[var(--text-secondary)] hover:bg-[var(--panel-strong)] hover:text-red-500"}`} key={tab} onClick={() => setActiveTab(tab)} type="button">
                      {tab}
                    </button>
                  ))}
                </div>
                <button className="flex h-11 items-center justify-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-strong)] px-4 text-sm font-bold text-[var(--text-secondary)] transition hover:border-red-500 hover:text-red-500" type="button">
                  <Icon className="h-5 w-5" name="calendar" />
                  All Time
                  <Icon className="h-4 w-4 rotate-90" name="chevron" />
                </button>
              </div>
            </section>

            <section className="mt-6">
              <div className="relative space-y-6">
                <span className="absolute bottom-16 left-[198px] top-12 hidden w-px bg-[var(--border)] xl:block" />
                {updates.map((update) => (
                  <article className="relative grid gap-5 xl:grid-cols-[118px_78px_1fr]" key={update.version}>
                    <div className="pt-7 text-sm font-bold text-[var(--text-primary)]">
                      <p>{update.date}</p>
                      {update.isNew && <span className="mt-4 inline-flex rounded-md border border-red-500/35 bg-red-950/30 px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-red-500">New</span>}
                    </div>
                    <div className="relative hidden items-start justify-center pt-4 xl:flex">
                      <span className="mt-6 h-2 w-2 rounded-full bg-[var(--text-muted)]" />
                      <span className="absolute right-1 top-5 grid h-16 w-16 place-items-center rounded-full border border-red-500/45 bg-[var(--panel-strong)] text-red-500 shadow-[0_0_24px_rgba(239,68,68,0.18)]">
                        <Icon className="h-8 w-8" name={update.icon} />
                      </span>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5 shadow-2xl shadow-[var(--shadow)]">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-base font-black text-[var(--text-primary)]">{update.version}</h2>
                            <span className="text-[var(--text-muted)]">|</span>
                            <h3 className="text-base font-black text-[var(--text-primary)]">{update.title}</h3>
                            <span className={`rounded-md border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${tagClass(update.tone)}`}>{update.tag}</span>
                          </div>
                          <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                            {update.points.map((point) => (
                              <li key={point}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                        <button className="flex h-11 shrink-0 items-center justify-center gap-3 rounded-md border border-[var(--border)] px-5 text-sm font-bold text-[var(--text-primary)] transition hover:border-red-500 hover:text-red-500" type="button">
                          View Changes
                          <Icon className="h-4 w-4" name="chevron" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10 overflow-hidden rounded-lg border border-red-500/45 bg-[radial-gradient(circle_at_10%_50%,rgba(239,68,68,0.18),transparent_28%),linear-gradient(135deg,rgba(127,29,29,0.22),rgba(12,12,14,0.78))] p-6 shadow-2xl shadow-[var(--shadow)]">
              <div className="grid gap-7 lg:grid-cols-[110px_1fr_260px] lg:items-center">
                <div className="grid h-24 w-24 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_45px_rgba(239,68,68,0.28)]">
                  <Image alt="DemonTech update emblem" className="h-full w-full object-cover" height={96} src="/demontech-logo.png" width={96} />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-normal text-[var(--text-primary)]">We are Just Getting Started</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-secondary)]">We have many exciting features and roadmaps coming your way. Stay tuned!</p>
                </div>
                <div className="space-y-4">
                  <a className="flex h-14 items-center justify-center gap-3 rounded-md bg-red-700 px-5 text-sm font-black text-white transition hover:bg-red-600" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                    <Icon className="h-5 w-5" name="discord" />
                    Join Our Community
                    <Icon className="h-4 w-4" name="chevron" />
                  </a>
                  <Link className="flex h-14 items-center justify-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-bg)] px-5 text-sm font-black text-[var(--text-primary)] transition hover:border-red-500 hover:text-red-500" href="/docs/all-roadmaps">
                    View Roadmaps
                    <Icon className="h-4 w-4" name="chevron" />
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <footer className="mx-auto mt-6 flex max-w-[1000px] flex-col gap-5 py-4 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} DemonTech Roadmap. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a className="transition hover:text-red-500" href="https://github.com/Demon-Die/DemonTechRoadmap" rel="noreferrer" target="_blank">GitHub</a>
              <a className="transition hover:text-red-500" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">Discord</a>
              <a className="transition hover:text-red-500" href="/privacy">Privacy Policy</a>
              <a className="transition hover:text-red-500" href="/terms">Terms</a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
