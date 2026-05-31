"use client";

import React, { useMemo, useState } from "react";
import { ResourceCard } from ".";
import resources from "../data/resources";

export default function SearchableResources() {
  const [q, setQ] = useState("");

  const normalized = (s?: string) => (s || "").toLowerCase();

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (term === "") return resources;

    return resources.filter((r) => {
      if (normalized(r.title).includes(term)) return true;
      if (normalized(r.description).includes(term)) return true;
      if (r.tags && r.tags.some((t) => t.toLowerCase().includes(term))) return true;
      return false;
    });
  }, [q]);

  return (
    <section className="mt-8 w-full">
      <div className="flex items-center gap-4 w-full">
        <label htmlFor="search" className="sr-only">
          Search roadmaps and topics
        </label>
        <input
          id="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search roadmaps and topics — try 'react' or 'roadmap'"
          className="w-full rounded-md border border-gray-200 dark:border-zinc-800 px-4 py-2 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50"
        />
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((r) => (
          <ResourceCard
            key={r.id}
            title={r.title}
            description={r.description}
            href={r.href}
            tags={r.tags}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          No results for &quot;{q}&quot;. Try different keywords or tags.
        </p>
      )}
    </section>
  );
}
