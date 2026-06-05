import { copyFile, access, mkdir } from "node:fs/promises";
import { constants } from "node:fs";

const source = new URL("../.next/routes-manifest.json", import.meta.url);
const target = new URL("../.next/routes-manifest-deterministic.json", import.meta.url);
const repositoryRootTarget = new URL("../../.next/routes-manifest-deterministic.json", import.meta.url);

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
}

export async function watchVercelRoutesManifest({ timeoutMs = 120000 } = {}) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeoutMs) {
    try {
      await access(source, constants.F_OK);
      await ensureVercelRoutesManifest();
      return true;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }

  return false;
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  if (process.argv.includes("--watch")) {
    const copied = await watchVercelRoutesManifest();
    process.exit(copied ? 0 : 1);
  }

  await ensureVercelRoutesManifest();
}
