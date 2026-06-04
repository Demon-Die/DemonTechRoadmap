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
      { label: "Project Ideas", icon: "spark", href: "/docs/project-ideas", active: true },
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

const featuredProjects = [
  {
    title: "To-Do List App",
    detail: "A simple to-do list to manage tasks with add, edit, delete and mark as complete.",
    icon: "check-square",
    level: "Beginner",
    tone: "green",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Weather Dashboard",
    detail: "Get real-time weather info by city using a weather API with search functionality.",
    icon: "cloud",
    level: "Intermediate",
    tone: "yellow",
    tags: ["JavaScript", "API", "CSS"],
  },
  {
    title: "E-Commerce Platform",
    detail: "Full-featured shopping platform with cart, checkout, user auth and order management.",
    icon: "cart",
    level: "Advanced",
    tone: "red",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Social Media App",
    detail: "A social app with posts, likes, comments, follows and real-time updates.",
    icon: "users",
    level: "Advanced",
    tone: "red",
    tags: ["React", "Firebase", "Tailwind"],
  },
];

const categories = [
  ["Web Development", "62 Projects", "globe"],
  ["Frontend", "45 Projects", "monitor"],
  ["Backend", "38 Projects", "server"],
  ["Full Stack", "28 Projects", "layers"],
  ["Mobile Development", "24 Projects", "phone"],
  ["Data Science", "18 Projects", "chart"],
  ["DevOps", "15 Projects", "infinity"],
  ["Game Development", "12 Projects", "gamepad"],
  ["AI / Machine Learning", "10 Projects", "brain"],
  ["Cybersecurity", "8 Projects", "shield"],
  ["Blockchain", "7 Projects", "link"],
  ["Other", "5 Projects", "more"],
];

const projectSteps = [
  ["Pick an Idea", "Choose a project that matches your level and interests.", "search"],
  ["Build & Learn", "Build the project from scratch and learn by doing.", "code"],
  ["Deploy It", "Deploy your project and make it live for the world.", "upload"],
  ["Add to Portfolio", "Showcase your work and stand out to employers.", "trophy"],
];

const whyBuild = [
  ["Strengthen your knowledge", "flame"],
  ["Gain real-world experience", "target"],
  ["Build an impressive portfolio", "calendar"],
  ["Stand out to employers", "user"],
  ["Have fun while learning", "smile"],
];

const stats = [
  ["200+", "Project Ideas", "folder"],
  ["12+", "Categories", "grid"],
  ["Beginner to Advanced", "All Levels", "chart"],
  ["Updated Weekly", "Fresh Ideas", "calendar"],
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
  flame: <path d="M12 22c4 0 7-2.8 7-6.8 0-3.2-2.1-5.1-4.2-7.1-.9-.8-1.5-2-1.5-3.4C10 6.4 7 9.4 7 13c0 1.2.4 2.2 1 3-1.4-.5-2.3-1.7-2.7-3C4.5 14.1 4 15.3 4 16.5 4 19.7 7 22 12 22Z" />,
  "check-square": <path d="M4 5h16v16H4V5Zm4 8 3 3 6-7" />,
  cloud: <path d="M17 18H8a5 5 0 1 1 1.3-9.8A6 6 0 0 1 21 11.5 3.5 3.5 0 0 1 17 18Z" />,
  cart: <path d="M4 5h2l2 10h9l3-7H7m2 12h.01M17 20h.01" />,
  users: <path d="M10 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m1-10a3 3 0 1 0 0-6m-1 15a5.5 5.5 0 0 1 5-3.5" />,
  globe: <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 0 1 0 18m0-18a14 14 0 0 0 0 18" />,
  monitor: <path d="M4 5h16v11H4V5Zm5 16h6m-3-5v5" />,
  server: <path d="M5 4h14v6H5V4Zm0 10h14v6H5v-6Zm3-7h.01M8 17h.01" />,
  layers: <path d="m12 3 9 5-9 5-9-5 9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4" />,
  phone: <path d="M8 3h8v18H8V3Zm3 15h2" />,
  chart: <path d="M5 20V10m7 10V4m7 16v-7" />,
  infinity: <path d="M7.5 15C4 15 3 12 5 10s4.5-1 7 2c2.5 3 5 4 7 2s1-5-2.5-5c-2 0-3.4 1.4-4.5 3-1.1 1.6-2.5 3-4.5 3Z" />,
  gamepad: <path d="M8 13H5m1.5-1.5v3M16 13h.01M19 11h.01M6 8h12a4 4 0 0 1 3.7 5.5l-1 2.5a2.5 2.5 0 0 1-4.2.8L14 14h-4l-2.5 2.8a2.5 2.5 0 0 1-4.2-.8l-1-2.5A4 4 0 0 1 6 8Z" />,
  brain: <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6v1a3 3 0 0 0 5 2.2V4.8A3 3 0 0 0 9 4Zm6 0a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6v1a3 3 0 0 1-5 2.2V4.8A3 3 0 0 1 15 4Z" />,
  shield: <path d="M12 3 20 6v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6l8-3Z" />,
  link: <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1m3 6a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />,
  more: <path d="M5 12h.01M12 12h.01M19 12h.01" />,
  code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
  upload: <path d="M12 16V4m0 0 5 5m-5-5-5 5M5 16v4h14v-4" />,
  trophy: <path d="M7 4h10v4a5 5 0 0 1-10 0V4Zm-2 1H3v2a4 4 0 0 0 4 4m12-6h2v2a4 4 0 0 1-4 4m-5 3v4m-4 0h8" />,
  target: <path d="M21 12a9 9 0 1 1-9-9m6 3 3-3m0 0v5m0-5h-5M15 9l-3 3m3 0a3 3 0 1 1-3-3" />,
  calendar: <path d="M7 3v4m10-4v4M4 8h16v13H4V8Zm4 5h8m-8 4h5" />,
  user: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0" />,
  smile: <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-black text-[var(--text-primary)]">
      <span className="h-6 w-0.5 rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
      {children}
    </h2>
  );
}

export default function ProjectIdeas() {
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
            ? "bg-[radial-gradient(circle_at_69%_11%,rgba(127,29,29,0.2),transparent_27%),radial-gradient(circle_at_83%_65%,rgba(127,29,29,0.18),transparent_27%),linear-gradient(180deg,#050505_0%,#030303_100%)]"
            : "bg-[radial-gradient(circle_at_69%_11%,rgba(239,68,68,0.1),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
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
                Have an idea?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                Suggest a project idea and help others learn by building.
              </p>
              <a
                className="mt-5 flex h-10 items-center justify-center gap-2 rounded-md bg-red-700/70 px-4 text-sm font-bold text-white"
                href="#"
              >
                Suggest Idea
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
              <span className="font-semibold text-[var(--text-primary)]">
                Project Ideas
              </span>
            </div>

            <section className="mt-8 grid gap-8 xl:grid-cols-[1fr_430px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-950/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-red-400">
                  <Icon className="h-4 w-4" name="flame" />
                  Build. Learn. Grow.
                </div>
                <h1 className="mt-5 text-5xl font-black tracking-normal text-[var(--text-primary)] sm:text-6xl">
                  Project Ideas
                </h1>
                <div className="mt-2 h-1 w-64 rounded-full bg-[linear-gradient(90deg,#ef4444,rgba(239,68,68,0))]" />
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  Practice your skills by building real-world projects. Explore
                  ideas across different levels and domains.
                </p>
              </div>

              <aside className="rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-6">
                <h2 className="text-xl font-black text-[var(--text-primary)]">
                  Why Build Projects?
                </h2>
                <div className="mt-6 space-y-4">
                  {whyBuild.map(([label, icon]) => (
                    <div
                      className="flex items-center gap-4 text-sm text-[var(--text-secondary)]"
                      key={label}
                    >
                      <Icon className="h-5 w-5 shrink-0 text-red-500" name={icon} />
                      {label}
                    </div>
                  ))}
                </div>
              </aside>
            </section>

            <section className="mt-9 grid gap-4 rounded-lg border border-[var(--border)] bg-black/10 p-4 md:grid-cols-2 xl:grid-cols-[1.35fr_0.9fr_0.9fr_1fr_0.8fr]">
              <label className="flex h-12 items-center gap-3 rounded-md border border-[var(--border)] bg-[var(--field-bg)] px-4 text-sm text-[var(--text-muted)]">
                <span className="flex-1">Search projects...</span>
                <Icon className="h-5 w-5" name="search" />
              </label>
              {["All Categories", "All Levels", "All Technologies"].map((label) => (
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
                className="flex h-12 items-center justify-center gap-2 rounded-md border border-red-500/45 bg-red-950/10 px-4 text-sm font-bold text-red-500"
                type="button"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full border border-red-500 text-[10px]">
                  x
                </span>
                Clear Filters
              </button>
            </section>

            <section className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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

            <section className="mt-9">
              <SectionTitle>Featured Projects</SectionTitle>
              <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {featuredProjects.map((project) => (
                  <article
                    className="flex min-h-[310px] flex-col rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 transition hover:border-red-500/45 hover:shadow-[0_20px_60px_rgba(127,29,29,0.18)]"
                    key={project.title}
                  >
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-md border text-red-500 ${
                        project.tone === "yellow"
                          ? "border-yellow-500/25 bg-yellow-500/10 text-yellow-400"
                          : "border-red-500/20 bg-red-950/25"
                      }`}
                    >
                      <Icon className="h-7 w-7" name={project.icon} />
                    </span>
                    <span
                      className={`mt-5 w-fit rounded px-2.5 py-1 text-xs font-black uppercase ${
                        project.tone === "green"
                          ? "bg-green-500/15 text-green-400"
                          : project.tone === "yellow"
                            ? "bg-yellow-500/15 text-yellow-400"
                            : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {project.level}
                    </span>
                    <h3 className="mt-4 text-lg font-black text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">
                      {project.detail}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          className="rounded bg-[var(--field-bg)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      className="mt-6 flex h-10 items-center justify-center gap-2 border-t border-[var(--border)] pt-5 text-sm font-black text-red-500"
                      href="#"
                    >
                      View Details
                      <Icon className="h-4 w-4" name="chevron" />
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <SectionTitle>Explore by Category</SectionTitle>
                <a
                  className="flex h-10 items-center gap-2 rounded-md border border-red-500/45 px-4 text-sm font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
                  href="#"
                >
                  View All Categories
                  <Icon className="h-4 w-4" name="chevron" />
                </a>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {categories.map(([title, count, icon]) => (
                  <article
                    className="flex min-h-20 items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-4 transition hover:border-red-500/45"
                    key={title}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md border border-red-500/20 bg-red-950/25 text-red-500">
                      <Icon className="h-6 w-6" name={icon} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-[var(--text-primary)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {count}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <SectionTitle>How to Use Project Ideas</SectionTitle>
              <div className="mt-5 grid gap-5 lg:grid-cols-4">
                {projectSteps.map(([title, detail, icon], index) => (
                  <article
                    className="relative rounded-lg border border-[var(--border)] bg-[var(--panel-strong)] p-5 text-center"
                    key={title}
                  >
                    <span className="absolute left-4 top-4 rounded-md border border-red-500/20 bg-red-950/20 px-2 py-1 text-xl font-black text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mx-auto mt-7 grid h-16 w-16 place-items-center rounded-full bg-red-950/25 text-red-500">
                      <Icon className="h-8 w-8" name={icon} />
                    </span>
                    <h3 className="mt-6 text-sm font-black text-[var(--text-primary)]">
                      {title}
                    </h3>
                    <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-[var(--text-secondary)]">
                      {detail}
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
