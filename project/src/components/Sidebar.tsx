"use client";

import { useId, useState } from "react";

export type SidebarItem = {
  id: string;
  label: string;
  count?: number;
};

type SidebarProps = {
  title: string;
  description?: string;
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
};

export default function Sidebar({
  title,
  description,
  items,
  activeId,
  onSelect,
  className = "",
}: SidebarProps) {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`w-full lg:w-80 ${className}`}>
      <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 lg:sticky lg:top-6">
        <div className="flex items-center justify-between gap-4 lg:block">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
              Navigation
            </p>
            <h3 className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
              {title}
            </h3>
            {description ? (
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">
                {description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 lg:hidden"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? "Hide" : "Show"}
          </button>
        </div>

        <div id={panelId} className={`${isOpen ? "mt-4" : "mt-4 hidden lg:block"}`}>
          <nav aria-label={title} className="space-y-2">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onSelect(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition focus:outline-none focus:ring-4 ${
                    isActive
                      ? "border-cyan-400 bg-cyan-50 text-slate-950 shadow-sm focus:ring-cyan-200 dark:border-cyan-500 dark:bg-cyan-500/10 dark:text-white dark:focus:ring-cyan-500/20"
                      : "border-transparent bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-slate-100 focus:ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:focus:ring-slate-700"
                  }`}
                >
                  <span className="font-semibold">{item.label}</span>
                  {typeof item.count === "number" ? (
                    <span
                      className={`ml-3 rounded-full px-2.5 py-1 text-xs font-bold ${
                        isActive
                          ? "bg-cyan-500 text-white"
                          : "bg-white text-slate-500 dark:bg-slate-950 dark:text-slate-400"
                      }`}
                    >
                      {item.count}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}