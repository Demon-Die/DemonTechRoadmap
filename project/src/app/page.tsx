// Feature: Dark/Light Theme Toggle
// Author: Dhrubajyoti930
// Resolves issue #15
// Added "use client" directive and useState to enable theme switching
"use client";

import { useState } from "react";

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
    </main>
  );
}