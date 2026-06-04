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
      { label: "Best Practices", icon: "shield", href: "/docs/best-practices" },
      { label: "Common Questions", icon: "help", href: "/docs/common-questions" },
      { label: "Contributing", icon: "heart", href: "/docs/contributing" },
      { label: "About DemonTech", icon: "info", href: "/docs/about-demontech", active: true },
      { label: "Our Mission", icon: "target", href: "/docs/our-mission" },
    ],
  },
];

const stats = [
  ["100K+", "Developers Trust Us", "users"],
  ["150+", "Roadmaps & Guides", "book-open"],
  ["500+", "Learning Resources", "file-text"],
  ["Open Source", "Community Driven", "code"],
];

const purpose = [
  ["Simplify Learning", "We break down complex topics into structured roadmaps and guides that anyone can follow.", "target"],
  ["Empower Growth", "We provide the right resources and knowledge to help you grow at your own pace.", "rocket"],
  ["Build Community", "We believe in the power of community and collaboration to create a better learning experience.", "users"],
];

const timeline = [
  ["2023", "DemonTech Roadmap was founded.", "flag"],
  ["Built with heart", "Passion, late nights, and countless coffees.", "heart"],
  ["Open Source", "Because knowledge should be free.", "code"],
  ["Growing Together", "A global community of learners and builders.", "users"],
];

const differences = [
  ["Well Structured", "Roadmaps designed for clarity and effective learning.", "layout"],
  ["Curated Carefully", "Handpicked resources, tested and trusted by developers.", "shield-star"],
  ["Always Updated", "We continuously update our content to keep it relevant.", "zap"],
  ["Community First", "We listen, we improve, and we build with our community.", "heart-hand"],
  ["100% Free", "All resources are free and always will be.", "lock"],
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
  heart: <path d="M12 21s-7-4.4-9-9.2C1.5 8.2 3.3 5 6.5 5c1.8 0 3 1 3.5 2 .5-1 1.7-2 3.5-2 3.2 0 5 3.2 3.5 6.8C19 16.6 12 21 12 21Z" />,
  info: <path d="M12 10v7m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  github: <path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 7.2c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.5 9.5 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  "book-open": <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v17H6.5A2.5 2.5 0 0 0 4 22V5.5Zm8-2.5h5.5A2.5 2.5 0 0 1 20 5.5V22a2.5 2.5 0 0 0-2.5-2H12" />,
  "file-text": <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  flag: <path d="M5 21V4m0 0h10l-1 4 1 4H5" />,
  layout: <path d="M4 5h16v14H4V5Zm0 5h16M9 10v9" />,
  "shield-star": <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Zm0 5 1 2 2.2.3-1.6 1.5.4 2.2-2-1.1-2 1.1.4-2.2-1.6-1.5 2.2-.3 1-2Z" />,
  zap: <path d="m13 2-9 13h7l-1 7 9-13h-7l1-7Z" />,
  "heart-hand": <path d="M12 20s-5-3-7-6.5C3.5 10.6 5 8 7.7 8c1.4 0 2.3.8 2.8 1.6.5-.8 1.4-1.6 2.8-1.6 2.7 0 4.2 2.6 2.7 5.5C17 16.5 12 20 12 20Zm-9-2 4 2h5m9-4-4 4h-5" />,
  lock: <path d="M7 11V8a5 5 0 0 1 10 0v3m-12 0h14v10H5V11Zm7 5v2" />,
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.14em] text-red-500">
      <span className="h-px w-3 bg-red-500" />
      {children}
    </p>
  );
}

export default function AboutDemonTech() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300" style={theme}>
      <div className={`fixed inset-0 -z-10 transition-colors duration-300 ${isDarkMode ? "bg-[radial-gradient(circle_at_65%_10%,rgba(127,29,29,0.2),transparent_26%),radial-gradient(circle_at_86%_70%,rgba(127,29,29,0.15),transparent_30%),linear-gradient(180deg,#050505_0%,#030303_100%)]" : "bg-[radial-gradient(circle_at_68%_12%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"}`} />

      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
        <div className="mx-auto flex h-[86px] max-w-[1510px] items-center gap-8 px-6 lg:px-10">
          <DemonTechLogo />
          <nav className="ml-auto hidden items-center gap-12 text-[15px] font-bold text-[var(--text-secondary)] lg:flex">
            {navItems.map((item) => (
              <a className={`relative transition hover:text-red-500 ${item === "Docs" ? "text-red-500" : ""}`} href="#" key={item}>
                {item}
                {item === "Docs" && <span className="absolute -bottom-[30px] left-1/2 h-0.5 w-16 -translate-x-1/2 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.8)]" />}
              </a>
            ))}
          </nav>
          <label className="ml-auto hidden h-11 w-[286px] items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)] lg:ml-8 xl:flex">
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

      <div className="mx-auto grid max-w-[1510px] grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-86px)] border-r border-[var(--border)] px-6 py-5 lg:block">
          <div className="sticky top-[106px]">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-6 shadow-2xl shadow-[var(--shadow)]">
              <div className="space-y-7">
                {sidebarGroups.map((group) => (
                  <section key={group.title}>
                    <h3 className="text-xs font-black uppercase tracking-[0.14em] text-red-500">{group.title}</h3>
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
            </div>

            <div className="mt-6 rounded-md border border-red-500/35 bg-[radial-gradient(circle_at_50%_8%,rgba(239,68,68,0.24),transparent_45%),rgba(10,10,11,0.72)] p-5">
              <div className="mx-auto grid h-32 w-32 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_45px_rgba(239,68,68,0.28)]">
                <Image alt="DemonTech mascot" className="h-full w-full object-cover" height={128} src="/demontech-logo.png" width={128} />
              </div>
              <h3 className="mt-5 text-sm font-black text-[var(--text-primary)]">More than a platform. A movement.</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">We are building the largest free learning ecosystem for developers, by developers.</p>
              <a className="mt-5 flex h-10 items-center justify-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                Join Our Community
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </div>
          </div>
        </aside>

        <section className="px-5 py-8 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1180px]">
            <section className="relative grid min-h-[520px] overflow-hidden border-b border-[var(--border)] py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
              <div className="relative z-10">
                <Eyebrow>Our Story</Eyebrow>
                <h1 className="mt-6 text-5xl font-black leading-[1.04] tracking-normal text-[var(--text-primary)] sm:text-7xl">
                  About
                  <span className="block text-red-500">DemonTech</span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                  We are on a mission to make high-quality roadmaps, resources, and guides accessible to everyone, helping learners and developers grow and build amazing things.
                </p>
                <a className="mt-8 inline-flex h-14 items-center gap-3 rounded-md border border-red-500/55 px-7 text-sm font-black text-[var(--text-primary)] transition hover:bg-red-600 hover:text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                  Join Our Mission
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </div>

              <div className="relative mt-12 min-h-[300px] lg:mt-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.12)_1px,transparent_1px)] bg-[length:42px_42px] opacity-30" />
                <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/28 shadow-[0_0_70px_rgba(239,68,68,0.22)] sm:h-[430px] sm:w-[430px]" />
                <div className="absolute left-1/2 top-1/2 h-[250px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-[-16deg] rounded-[50%] border border-red-500/35" />
                <div className="absolute left-1/2 top-1/2 grid h-56 w-56 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_80px_rgba(239,68,68,0.42)] sm:h-72 sm:w-72">
                  <Image alt="DemonTech glowing emblem" className="h-full w-full object-cover" height={288} src="/demontech-logo.png" width={288} priority />
                </div>
              </div>
            </section>

            <section className="mt-10 grid gap-0 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] shadow-2xl shadow-[var(--shadow)] sm:grid-cols-2 xl:grid-cols-4">
              {stats.map(([value, label, icon], index) => (
                <article className={`flex min-h-28 items-center gap-5 p-6 ${index > 0 ? "xl:border-l xl:border-[var(--border)]" : ""}`} key={label}>
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-md border border-red-500/35 bg-red-950/20 text-red-500">
                    <Icon className="h-8 w-8" name={icon} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-black text-[var(--text-primary)]">{value}</h2>
                    <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{label}</p>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-14">
              <Eyebrow>Our Purpose</Eyebrow>
              <div className="mt-6 grid gap-7 lg:grid-cols-3">
                {purpose.map(([title, detail, icon]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-7 shadow-2xl shadow-[var(--shadow)]" key={title}>
                    <span className="grid h-16 w-16 place-items-center rounded-md bg-red-950/20 text-red-500 shadow-[0_0_28px_rgba(239,68,68,0.15)]">
                      <Icon className="h-9 w-9" name={icon} />
                    </span>
                    <h2 className="mt-7 text-lg font-black text-[var(--text-primary)]">{title}</h2>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <Eyebrow>Our Story</Eyebrow>
                <div className="mt-8 space-y-8">
                  {timeline.map(([title, detail, icon]) => (
                    <article className="grid grid-cols-[60px_1fr] gap-5" key={title}>
                      <div className="relative flex justify-center">
                        <span className="grid h-12 w-12 place-items-center rounded-full border border-red-500/45 bg-red-950/20 text-red-500">
                          <Icon className="h-6 w-6" name={icon} />
                        </span>
                      </div>
                      <div className="pb-2">
                        <h2 className="text-lg font-black text-[var(--text-primary)]">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <Eyebrow>What Makes Us Different?</Eyebrow>
                <div className="mt-8 space-y-4">
                  {differences.map(([title, detail, icon]) => (
                    <article className="flex items-center gap-5 rounded-lg border border-[var(--border)] bg-[var(--panel-bg)] p-5" key={title}>
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-red-500/30 bg-red-950/20 text-red-500">
                        <Icon className="h-6 w-6" name={icon} />
                      </span>
                      <div>
                        <h2 className="text-sm font-black text-[var(--text-primary)]">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-12 overflow-hidden rounded-lg border border-red-500/45 bg-[radial-gradient(circle_at_12%_20%,rgba(239,68,68,0.22),transparent_28%),linear-gradient(135deg,rgba(127,29,29,0.22),rgba(12,12,14,0.78))] p-7 shadow-2xl shadow-[var(--shadow)]">
              <div className="grid gap-8 lg:grid-cols-[190px_1fr_310px] lg:items-center">
                <div className="grid h-40 w-40 place-items-center overflow-hidden rounded-full bg-black shadow-[0_0_55px_rgba(239,68,68,0.28)]">
                  <Image alt="DemonTech community emblem" className="h-full w-full object-cover" height={160} src="/demontech-logo.png" width={160} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-red-500">Be Part of Something Bigger</p>
                  <h2 className="mt-4 text-3xl font-black tracking-normal text-[var(--text-primary)]">Learn. Build. Grow. Together.</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Whether you are just starting out or leveling up your skills, you are always welcome here.</p>
                </div>
                <div className="space-y-4">
                  <a className="flex h-14 items-center justify-center gap-3 rounded-md bg-red-700 px-6 text-sm font-black text-white transition hover:bg-red-600" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                    <Icon className="h-5 w-5" name="discord" />
                    Join Our Community
                    <Icon className="h-4 w-4" name="chevron" />
                  </a>
                  <Link className="flex h-14 items-center justify-center gap-3 rounded-md border border-[var(--border)] bg-[var(--panel-bg)] px-6 text-sm font-black text-[var(--text-primary)] transition hover:border-red-500 hover:text-red-500" href="/docs/all-roadmaps">
                    Explore Roadmaps
                    <Icon className="h-4 w-4" name="chevron" />
                  </Link>
                </div>
              </div>
            </section>

            <footer className="mt-10 flex flex-col gap-5 border-t border-[var(--border)] py-7 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
              <p>© 2024 DemonTech. All rights reserved.</p>
              <div className="flex flex-wrap gap-8">
                <a className="transition hover:text-red-500" href="https://github.com/Demon-Die/DemonTechRoadmap" rel="noreferrer" target="_blank">GitHub</a>
                <a className="transition hover:text-red-500" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">Discord</a>
                <a className="transition hover:text-red-500" href="#">Privacy Policy</a>
                <a className="transition hover:text-red-500" href="#">Terms</a>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
