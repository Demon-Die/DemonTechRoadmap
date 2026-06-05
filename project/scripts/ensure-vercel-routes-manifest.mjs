import { copyFile, access, mkdir } from "node:fs/promises";
import { constants } from "node:fs";

const source = new URL("../.next/routes-manifest.json", import.meta.url);
const target = new URL("../.next/routes-manifest-deterministic.json", import.meta.url);
const repositoryRootTarget = new URL("../../.next/routes-manifest-deterministic.json", import.meta.url);
const mirroredManifests = [
  [new URL("../.next/app-path-routes-manifest.json", import.meta.url), new URL("../../.next/app-path-routes-manifest.json", import.meta.url)],
  [new URL("../.next/prerender-manifest.json", import.meta.url), new URL("../../.next/prerender-manifest.json", import.meta.url)],
  [new URL("../.next/required-server-files.json", import.meta.url), new URL("../../.next/required-server-files.json", import.meta.url)],
  [new URL("../.next/server/app-paths-manifest.json", import.meta.url), new URL("../../.next/server/app-paths-manifest.json", import.meta.url)],
  [new URL("../.next/server/middleware-manifest.json", import.meta.url), new URL("../../.next/server/middleware-manifest.json", import.meta.url)],
  [new URL("../.next/server/next-font-manifest.json", import.meta.url), new URL("../../.next/server/next-font-manifest.json", import.meta.url)],
  [new URL("../.next/server/pages-manifest.json", import.meta.url), new URL("../../.next/server/pages-manifest.json", import.meta.url)],
  [new URL("../.next/server/server-reference-manifest.json", import.meta.url), new URL("../../.next/server/server-reference-manifest.json", import.meta.url)],
];

async function copyIfPresent(from, to) {
  try {
    await access(from, constants.F_OK);
    await mkdir(new URL("./", to), { recursive: true });
    await copyFile(from, to);
    return true;
  } catch {
    return false;
  }
}

export async function ensureVercelRoutesManifest() {
  try {
    await access(target, constants.F_OK);
  } catch {
    await copyFile(source, target);
  }

  try {
    await access(repositoryRootTarget, constants.F_OK);
  } catch {
    await mkdir(new URL("../../.next/", import.meta.url), { recursive: true });
    await copyFile(source, repositoryRootTarget);
  }

  await Promise.all(mirroredManifests.map(([from, to]) => copyIfPresent(from, to)));
}

export async function watchVercelRoutesManifest({ signal, timeoutMs = 120000 } = {}) {
  const startedAt = Date.now();
  let copiedRoutesManifest = false;

  while (!signal?.aborted && Date.now() - startedAt < timeoutMs) {
    try {
      await access(source, constants.F_OK);
      await ensureVercelRoutesManifest();
      copiedRoutesManifest = true;
    } catch {
      // The file appears late in Next's build. Keep polling until it exists.
    }

    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  return copiedRoutesManifest;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  if (process.argv.includes("--watch")) {
    const copied = await watchVercelRoutesManifest();
    process.exit(copied ? 0 : 1);
  }

  await ensureVercelRoutesManifest();
}
