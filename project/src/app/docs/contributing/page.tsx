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
      { label: "Contributing", icon: "heart", href: "/docs/contributing", active: true },
    ],
  },
];

const whyContribute = [
  ["Help Others", "Your contributions help thousands of developers on their learning journey.", "users"],
  ["Grow Together", "Learn new things, improve your skills, and grow as a developer.", "rocket"],
  ["Build Your Portfolio", "Get recognized for your contributions and strengthen your portfolio.", "code"],
  ["Be a Part of Something Awesome", "Join a passionate community of developers and creators.", "star"],
];

const steps = [
  ["Find an Issue", "Browse issues labeled good first issue or pick one you&apos;d like to work on.", "search"],
  ["Fork the Repo", "Fork the repository to your GitHub account.", "git-branch"],
  ["Make Changes", "Create a new branch and make your changes.", "code"],
  ["Commit & Push", "Commit your changes and push them to your fork.", "git-branch"],
  ["Open a PR", "Open a Pull Request and describe your changes.", "pull-request"],
];

const ways = [
  ["Improve Roadmaps", "Add missing topics, fix content or update outdated information.", "book"],
  ["Add Resources", "Suggest or add useful resources, articles, videos, and more.", "link"],
  ["Fix Issues", "Report bugs or fix issues to improve the platform.", "bug"],
  ["Enhance Docs", "Improve documentation, guides, and explanations.", "file-text"],
  ["Suggest Features", "Have an idea? Suggest new features or improvements.", "star"],
  ["Project Ideas", "Add creative project ideas for the community.", "lightbulb"],
  ["UI/UX Improvements", "Improve UI, accessibility, and overall experience.", "paint"],
  ["Spreading the Word", "Share DemonTech Roadmap and help the community grow.", "megaphone"],
];

const guidelines = [
  "Be respectful and inclusive.",
  "Follow the code of conduct.",
  "Ensure your contributions are high quality and relevant.",
  "Test your changes before submitting a pull request.",
];

const introChecks = [
  "Open & inclusive community",
  "Beginner friendly",
  "Every contribution is valued",
  "Learn, build, and grow together",
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
  search: <path d="m21 21-4.3-4.3M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />,
  discord: <path d="M8 16c1.5 1 6.5 1 8 0m-9-3h.01M17 13h.01M7 8c3-1.5 7-1.5 10 0l1 7c-1.5 1-3 1.5-4.5 1.8L12 15l-1.5 1.8C9 16.5 7.5 16 6 15l1-7Z" />,
  github: <path d="M12 2a10 10 0 0 0-3 19c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7 7.2c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1.1a9.5 9.5 0 0 1 5.1 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.8 1 .8 2v3c0 .3.2.6.8.5A10 10 0 0 0 12 2Z" />,
  moon: <path d="M21 14.5A7.5 7.5 0 0 1 9.5 3a8.7 8.7 0 1 0 11.5 11.5Z" />,
  sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.36-6.36 1.42-1.42M4.22 19.78l1.42-1.42m0-12.72L4.22 4.22m15.56 15.56-1.42-1.42M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  rocket: <path d="M14 4c3.5.4 5.6 2.5 6 6l-4 4-5-5 4-5Zm-7 8-3 3 5 5 3-3m-5-5 5 5m-7 1-2 2m9-17 5 5" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 18.2 6.4 21.2 7.5 15 3 10.6l6.2-.9L12 3Z" />,
  "git-branch": <path d="M6 4v12a4 4 0 0 0 4 4h8M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v3a3 3 0 0 1-3 3h-5" />,
  "pull-request": <path d="M6 4v12m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-3V8m0 0-3 3m3-3 3 3" />,
  link: <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1m3 6a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />,
  bug: <path d="M8 8h8v8a4 4 0 0 1-8 0V8Zm0 2H5m14 0h-3M8 14H5m14 0h-3M9 4l2 4m4-4-2 4m-1 4h.01" />,
  "file-text": <path d="M7 3h7l5 5v13H7V3Zm7 0v5h5M10 13h6m-6 4h6" />,
  lightbulb: <path d="M9 18h6m-5 3h4m3-11a5 5 0 0 1-2.2 4.1c-.7.5-.8 1-.8 1.9h-4c0-.9-.1-1.4-.8-1.9A5 5 0 1 1 17 10Z" />,
  paint: <path d="M5 19c3 0 3-4 6-4h4a6 6 0 1 0-6-6c0 3-4 3-4 6v4Zm10-11h.01M12 6h.01M9 8h.01" />,
  megaphone: <path d="M4 13h3l10 5V6L7 11H4v2Zm3 0 2 6" />,
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-black text-[var(--text-primary)]">
      <span className="h-6 w-0.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
      {children}
    </h2>
  );
}

export default function Contributing() {
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
              <h3 className="font-bold text-[var(--text-primary)]">Make an Impact</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">Your contribution helps thousands of developers learn and grow every day.</p>
              <a className="mt-6 flex h-10 w-fit items-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                Join Our Community
                <Icon className="h-4 w-4" name="chevron" />
              </a>
              <Icon className="mx-auto mt-10 h-24 w-24 text-red-500/70" name="heart" />
            </div>
          </div>
        </aside>

        <section className="px-5 py-6 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel-bg)] px-5 py-6 shadow-2xl shadow-[var(--shadow)] sm:px-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
              <Icon className="h-4 w-4 text-[var(--text-muted)]" name="home" />
              <span>Home</span>
              <Icon className="h-3 w-3" name="chevron" />
              <span className="font-semibold text-[var(--text-primary)]">Contributing</span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_500px]">
              <div>
                <h1 className="text-5xl font-black tracking-normal text-[var(--text-primary)] sm:text-6xl">
                  Contributing
                  <Icon className="ml-5 inline-block h-8 w-8 align-top text-red-500" name="spark" />
                </h1>
                <div className="mt-2 h-1 w-72 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  DemonTech Roadmap is an open-source community-driven platform.
                  Your contributions help us make it better for everyone.
                </p>
              </div>

              <aside className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-xl font-black text-[var(--text-primary)]">Together, We Build Better.</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Whether it&apos;s fixing a typo, adding a new resource, or
                  improving a roadmap, every contribution counts!
                </p>
                <div className="mt-6 grid gap-5 md:grid-cols-[1fr_130px]">
                  <div className="space-y-3">
                    {introChecks.map((item) => (
                      <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]" key={item}>
                        <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-red-500">
                          <Icon className="h-2.5 w-2.5" name="check" />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Icon className="hidden h-28 w-28 self-end text-red-500 md:block" name="users" />
                </div>
              </aside>
            </section>

            <section className="mt-10">
              <SectionTitle>Why Contribute?</SectionTitle>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {whyContribute.map(([title, detail, icon]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6" key={title}>
                    <span className="grid h-14 w-14 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                      <Icon className="h-7 w-7" name={icon} />
                    </span>
                    <h3 className="mt-5 text-base font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>How to Contribute</SectionTitle>
              <div className="mt-5 grid gap-5 xl:grid-cols-5">
                {steps.map(([title, detail, icon], index) => (
                  <article className="relative rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5" key={title}>
                    <span className="rounded-md border border-red-500/20 bg-red-950/20 px-2 py-1 text-xl font-black text-red-500">{String(index + 1).padStart(2, "0")}</span>
                    <span className="ml-4 inline-grid h-12 w-12 place-items-center rounded-md border border-red-500/10 bg-red-950/15 text-red-500">
                      <Icon className="h-6 w-6" name={icon} />
                    </span>
                    <h3 className="mt-7 text-base font-black text-[var(--text-primary)]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: detail }} />
                    {index < steps.length - 1 && <Icon className="absolute -right-4 top-1/2 hidden h-5 w-5 text-red-500 xl:block" name="chevron" />}
                  </article>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-5">
                  <Icon className="h-11 w-11 shrink-0 text-red-500" name="lightbulb" />
                  <div>
                    <h3 className="text-lg font-black text-[var(--text-primary)]">New here?</h3>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">Check out our Contribution Guide to get started with everything you need to know.</p>
                  </div>
                </div>
                <a className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-red-700/75 px-6 text-sm font-black text-white transition hover:bg-red-600" href="#">
                  Read Contribution Guide
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>Ways You Can Contribute</SectionTitle>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {ways.map(([title, detail, icon]) => (
                  <article className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5" key={title}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                        <Icon className="h-6 w-6" name={icon} />
                      </span>
                      <h3 className="text-sm font-black text-[var(--text-primary)]">{title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>Contribution Guidelines</SectionTitle>
              <div className="mt-5 grid gap-6 xl:grid-cols-[1fr_580px]">
                <div className="space-y-4">
                  {guidelines.map((item) => (
                    <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]" key={item}>
                      <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-red-500">
                        <Icon className="h-2.5 w-2.5" name="check" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
                <article className="flex items-center justify-between gap-6 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                  <div>
                    <h3 className="text-lg font-black text-[var(--text-primary)]">Code of Conduct</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">We are committed to providing a welcoming and inclusive environment for everyone.</p>
                    <a className="mt-4 flex items-center gap-2 text-sm font-black text-red-500" href="#">
                      Read Code of Conduct
                      <Icon className="h-4 w-4" name="chevron" />
                    </a>
                  </div>
                  <Icon className="h-20 w-20 shrink-0 text-red-500" name="shield" />
                </article>
              </div>
            </section>

            <section className="mt-8 rounded-lg border border-red-500/35 bg-red-950/10 p-6">
              <div className="grid gap-6 lg:grid-cols-[170px_1fr_340px] lg:items-center">
                <Icon className="mx-auto h-28 w-28 text-red-500 lg:mx-0" name="code" />
                <div>
                  <h2 className="text-2xl font-black text-[var(--text-primary)]">Ready to contribute?</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">Join our community of amazing developers and let&apos;s build something incredible together!</p>
                </div>
                <div className="space-y-4">
                  <a className="flex h-12 items-center justify-center gap-3 rounded-md bg-red-700/80 px-5 text-sm font-black text-white transition hover:bg-red-600" href="https://github.com/Demon-Die/DemonTechRoadmap" rel="noreferrer" target="_blank">
                    <Icon className="h-5 w-5" name="github" />
                    Start Contributing on GitHub
                    <Icon className="h-4 w-4" name="chevron" />
                  </a>
                  <a className="flex items-center justify-center gap-2 text-sm font-black text-red-500" href="https://discord.gg/yWtjK2Tb8T" rel="noreferrer" target="_blank">
                    Join Discord Community
                    <Icon className="h-4 w-4" name="chevron" />
                  </a>
                </div>
              </div>
            </section>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-sm text-[var(--text-secondary)]">
              <Icon className="h-4 w-4 text-red-500" name="heart" />
              Thank you for helping make DemonTech Roadmap better for everyone!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
