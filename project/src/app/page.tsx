// Feature: Dark/Light Theme Toggle & Live Hall of Fame
// Author: Dhrubajyoti930
// Resolves issue #15,#21
// Added "use client" directive, useState, and useEffect to enable theme switching and live data fetching
"use client";

import { useState, useEffect } from "react";

// Types for GitHub API response
interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const roadmapTracks = [
  "Web Development",
  "Python",
  "AI / ML",
  "Open Source",
];

const roadmapSteps = [
  { title: "Foundations", detail: "HTML, CSS, Git" },
  { title: "Build", detail: "Projects and practice" },
  { title: "Grow", detail: "Career-ready skills" },
];

export default function Home() {
  // isDarkMode: true = dark theme (default), false = light theme
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // State for dynamic contributor tracking
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/Demon-Die/DemonTechRoadmap/contributors")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setContributors(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch contributors data", err);
        setLoading(false);
      });
  }, []);

  return (
    // Root background and text color change based on isDarkMode state
    <main className={`min-h-screen overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"}`}>
      
      {/* Toggle button — switches isDarkMode between true and false on click */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed right-6 top-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg shadow-md backdrop-blur transition hover:scale-105 active:scale-95"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      <section className="relative isolate flex min-h-screen items-center px-6 py-14 sm:px-10 lg:px-16">
        <div className={`absolute inset-0 -z-20 transition-opacity duration-500 ${
          isDarkMode 
            ? "bg-[linear-gradient(135deg,#111827_0%,#0f172a_46%,#0f766e_100%)] opacity-100" 
            : "bg-[linear-gradient(135deg,#f8fafc_0%,#e2e8f0_50%,#ccfbf1_100%)] opacity-100"
        }`} />
        <div className={`absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:96px_96px] ${isDarkMode ? "opacity-30" : "invert opacity-20"}`} />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className={`max-w-3xl pt-8 lg:pt-0 transition-colors ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            <p className={`mb-5 inline-flex rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] shadow-sm backdrop-blur ${isDarkMode ? "border-white/20 bg-white/10 text-cyan-100" : "border-slate-300 bg-slate-200/50 text-teal-800"}`}>
              Open-source learning paths
            </p>
            <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              Demon Tech Roadmap
            </h1>
            <p className={`mt-6 max-w-2xl text-pretty text-lg leading-8 sm:text-xl ${isDarkMode ? "text-slate-100" : "text-slate-600"}`}>
              Community-driven roadmaps that help beginners learn technology
              with clear steps, curated resources, and project-focused growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#roadmaps"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-400 px-6 py-3 text-base font-bold text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-200/70"
              >
                Explore Roadmaps
              </a>
              <a
                href="https://github.com/Demon-Die/DemonTechRoadmap"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center justify-center rounded-md border px-6 py-3 text-base font-bold backdrop-blur transition focus:outline-none focus:ring-4 ${isDarkMode ? "border-white/30 bg-white/10 text-white hover:bg-white/20 focus:ring-white/30" : "border-slate-300 bg-slate-200/30 text-slate-900 hover:bg-slate-200/60 focus:ring-slate-400/30"}`}
              >
                Contribute on GitHub
              </a>
            </div>

            <div
              id="roadmaps"
              className="mt-10 flex flex-wrap gap-3 text-sm font-semibold"
            >
              {roadmapTracks.map((track) => (
                <span
                  key={track}
                  className={`rounded-full border px-4 py-2 backdrop-blur ${isDarkMode ? "border-white/20 bg-white/10 text-slate-100" : "border-slate-300 bg-slate-200/40 text-slate-700"}`}
                >
                  {track}
                </span>
              ))}
            </div>
          </div>

          <div className={`rounded-lg border p-4 shadow-2xl transition-colors duration-300 sm:p-6 ${isDarkMode ? "border-slate-800 bg-slate-900 shadow-slate-950/50" : "border-slate-200 bg-white shadow-slate-300/50"}`}>
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${isDarkMode ? "text-cyan-400" : "text-teal-700"}`}>
                  Roadmap preview
                </p>
                <h2 className={`mt-2 text-2xl font-bold tracking-normal ${isDarkMode ? "text-white" : "text-slate-950"}`}>
                  From first lesson to real project
                </h2>
              </div>
              <div className={`hidden rounded-md px-3 py-2 text-sm font-bold sm:block ${isDarkMode ? "bg-slate-800 text-white" : "bg-slate-950 text-white"}`}>
                2026
              </div>
            </div>

            <div className="space-y-4">
              {roadmapSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`grid grid-cols-[3rem_1fr] gap-4 rounded-md border p-4 ${isDarkMode ? "border-slate-800 bg-slate-950/50" : "border-slate-200 bg-slate-50"}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-md text-lg font-bold ${isDarkMode ? "bg-slate-800 text-cyan-400" : "bg-slate-950 text-cyan-300"}`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${isDarkMode ? "text-white" : "text-slate-950"}`}>
                      {step.title}
                    </h3>
                    <p className={`mt-1 text-sm leading-6 ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {step.detail}
                    </p>
                    <div className={`mt-4 h-2 overflow-hidden rounded-full ${isDarkMode ? "bg-slate-800" : "bg-slate-200"}`}>
                      <div
                        className="h-full rounded-full bg-teal-500"
                        style={{ width: `${(index + 1) * 28}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Curated resources", "Beginner friendly", "Project ideas"].map(
                (item) => (
                  <div
                    key={item}
                    className={`rounded-md border px-4 py-3 text-sm font-bold text-center sm:text-left ${isDarkMode ? "border-slate-800 bg-slate-950/30 text-slate-300" : "border-slate-200 bg-white text-slate-700"}`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Hall of Fame Section */}
      <section className={`py-20 px-6 sm:px-10 lg:px-16 transition-colors duration-300 ${isDarkMode ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b pb-6 mb-10 gap-4 border-dashed border-slate-700/30">
            <div>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${isDarkMode ? "text-cyan-400" : "text-teal-600"}`}>
                Community Ecosystem
              </p>
              <h2 className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Hall of Fame
              </h2>
              <p className={`mt-3 text-base max-w-xl ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                The architects, builders, and visionaries driving the <b>DemonTechRoadmap</b> forward.
              </p>
            </div>
            
            {/* Live Count Stat Block */}
            <div className="flex gap-6 text-sm">
              <div className="flex flex-col">
                <span className={`font-mono text-xl font-bold ${isDarkMode ? "text-cyan-400" : "text-teal-600"}`}>
                  {loading ? "--" : contributors.length}
                </span>
                <span className={`text-xs uppercase tracking-wider ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Core Builders</span>
              </div>
              <div className="border-l pl-6 border-dashed border-slate-700/30 flex flex-col">
                <span className={`font-mono text-xl font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>100%</span>
                <span className={`text-xs uppercase tracking-wider ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>Open Source</span>
              </div>
            </div>
          </div>

          {/* Bento Grid Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contributor Card (Dynamic Live Data Grid) */}
            <div className={`lg:col-span-2 rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 ${
              isDarkMode ? "border-slate-800 bg-slate-950/50" : "border-slate-200 bg-white"
            }`}>
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Code Contributors
                </h3>
                <p className={`text-xs mt-1 mb-6 ${isDarkMode ? "text-slate-500" : "text-slate-400"}`}>
                  Live lookup synced directly with repository history.
                </p>
              </div>
              
              {/* Conditional Loading vs Content Grid Container */}
              {loading ? (
                <div className="flex h-48 items-center justify-center font-mono text-xs animate-pulse tracking-widest text-slate-500">
                  LOADING_REPOS_CONTRIBUTORS...
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                  {contributors.map((user) => (
                    <a
                      key={user.id}
                      href={user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all duration-200 group ${
                        isDarkMode 
                          ? "border-slate-800/60 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700" 
                          : "border-slate-100 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-8 h-8 rounded-lg border border-slate-700/20 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className={`text-xs font-semibold truncate group-hover:underline ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                          {user.login}
                        </p>
                        <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {user.contributions} {user.contributions === 1 ? "commit" : "commits"}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Detail / Call to Action Card */}
            <div className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
              isDarkMode 
                ? "border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/40 hover:border-slate-700" 
                : "border-slate-200 bg-gradient-to-b from-white to-slate-50 hover:border-slate-300"
            }`}>
              <div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                  Leave Your Mark
                </h3>
                <p className={`text-sm mt-3 leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Whether you are fixing a typo, optimizing documentation, or shipping architectural changes—every commit earns you a permanent spot on the wall.
                </p>
              </div>
              
              <div className="mt-8">
                <a
                  href="https://github.com/Demon-Die/DemonTechRoadmap"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ${
                    isDarkMode 
                      ? "bg-slate-800 text-white hover:bg-slate-700" 
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Contribute on GitHub
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </main>
  );
}