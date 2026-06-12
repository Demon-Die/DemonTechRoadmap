import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readdir, copyFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { ensureVercelRoutesManifest, watchVercelRoutesManifest } from "./ensure-vercel-routes-manifest.mjs";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const projectRoot = new URL("../", import.meta.url);
const controller = new AbortController();

const watcher = watchVercelRoutesManifest({ signal: controller.signal });
const build = spawn(process.execPath, [nextBin, "build", "--webpack"], {
  cwd: projectRoot,
  stdio: "inherit",
});

const exitCode = await new Promise((resolve) => {
  build.on("close", resolve);
});

controller.abort();

if (exitCode === 0) {
  await watcher;
  await ensureVercelRoutesManifest();

  // Vercel's post-build validator ALWAYS checks /vercel/path0/.next/ (the repo root)
  // regardless of outputDirectory settings. The actual build outputs to project/.next/.
  // We mirror the files that the validator needs:
  //
  // Safe to mirror at any depth:
  //   - All *.json files (excluding *.nft.json trace files which have relative paths)
  //   - Root-level files in server/ (middleware-build-manifest.js, etc.) — these are
  //     pure data exports with no require() statements
  //
  // NOT safe to mirror (have require() calls / trace deps that break at different depths):
  //   - Files in server/app/, server/pages/, server/chunks/ subdirectories
  //   - *.nft.json trace files

  const srcNextDir = new URL("../.next/", import.meta.url).pathname;    // project/.next/
  const dstNextDir = new URL("../../.next/", import.meta.url).pathname; // repo root .next/

  /** Directories under .next/server/ that contain JS bundles with trace dependencies */
  const SERVER_BUNDLE_DIRS = new Set(["app", "pages", "chunks", "edge-chunks", "edge-runtime-webpack"]);

  async function mirrorSafeFiles(src, dst, depth = 0) {
    await mkdir(dst, { recursive: true });
    const entries = await readdir(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const dstPath = join(dst, entry.name);

      if (entry.isDirectory()) {
        // At depth=1 (inside server/), skip bundle subdirectories
        if (depth === 1 && SERVER_BUNDLE_DIRS.has(entry.name)) continue;
        await mirrorSafeFiles(srcPath, dstPath, depth + 1);
      } else {
        // Skip .nft.json trace files (relative paths break at different depths)
        if (entry.name.endsWith(".nft.json")) continue;
        await copyFile(srcPath, dstPath);
      }
    }
  }

  try {
    await rm(dstNextDir, { recursive: true, force: true });
    await mirrorSafeFiles(srcNextDir, dstNextDir);
    console.log("Mirrored safe manifest files to repo root .next/ for Vercel post-build validation.");
  } catch (err) {
    console.error("Warning: could not mirror manifests to repo root:", err.message);
  }
}

process.exit(exitCode ?? 1);
