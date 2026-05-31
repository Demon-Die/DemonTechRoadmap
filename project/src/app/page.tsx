import Image from "next/image";
import { ResourceCard } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <div className="mt-8 w-full flex flex-col items-center sm:items-start">
          <a
            href="https://discord.gg/yWtjK2Tb8T"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
          >
            Join our Discord
          </a>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            Join the community on Discord to discuss roadmaps, ask questions, and
            contribute to projects — we'd love to have you!
          </p>
        </div>
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ResourceCard
              title="Frontend Roadmap"
              description="A curated roadmap to learn frontend development: HTML, CSS, JS, and frameworks."
              href="https://github.com/kamranahmedse/developer-roadmap"
              tags={["frontend", "roadmap"]}
            />
            <ResourceCard
              title="JavaScript Info"
              description="Comprehensive guide to modern JavaScript with tutorials and examples."
              href="https://javascript.info/"
              tags={["javascript", "tutorial"]}
            />
            <ResourceCard
              title="FreeCodeCamp"
              description="Interactive coding lessons and projects to build your portfolio."
              href="https://www.freecodecamp.org/"
              tags={["practice", "projects"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
