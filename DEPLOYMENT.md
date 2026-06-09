# Vercel Deployment Documentation

This document explains the Vercel deployment workflow and build commands used in this repository.

## Repository Structure

The project uses a nested setup where the root repository contains a `project/` directory holding the actual Next.js application.

- The root `package.json` defines npm workspaces pointing to `project`.
- You can run the application from the root using npm workspace scripts:
  - `npm run dev` → runs `npm --workspace project run dev`
  - `npm run build` → runs `npm --workspace project run build`
  - `npm run lint` → runs `npm --workspace project run lint`
  - `npm run clean` → removes `.next` and `project/.next`

## Vercel Configuration

Because the main Next.js app lives in `project/`, Vercel must be explicitly configured to run commands there. This is handled by `vercel.json` in the root:

```json
{
  "framework": "nextjs",
  "installCommand": "npm --prefix project ci --include=dev",
  "buildCommand": "npm --prefix project run build",
  "outputDirectory": "project/.next"
}
```

- `installCommand`: Uses `--prefix project` to install dependencies in the `project/` directory.
- `buildCommand`: Runs the build inside `project/`.
- `outputDirectory`: Points to `project/.next` where the compiled Next.js app is output.

### The Custom Build Script

The actual build process inside `project/package.json` uses a custom script:
`"build": "node scripts/build-for-vercel.mjs"`

This script (`project/scripts/build-for-vercel.mjs` and `project/scripts/ensure-vercel-routes-manifest.mjs`):
1. Runs `next build --webpack` from the project directory.
2. Watches for and ensures `routes-manifest.json` is correctly generated.
3. Mirrors the `.next` output from `project/.next` to the repo root `.next`.

**Warning for Contributors:** Do NOT remove or modify `project/scripts/build-for-vercel.mjs` or `project/scripts/ensure-vercel-routes-manifest.mjs` without testing a full Vercel deployment first. These scripts handle critical manifest mirroring that Vercel needs to deploy the application successfully. 

## Local Production Build

To test a production build locally and verify everything works:

**From the `project` directory:**
1. `cd project`
2. `npm ci --include=dev`
3. `npm run build`
4. `npm start`

**From the repository root:**
1. `npm install`
2. `npm run build`
3. `cd project && npm start`

## Important Warnings

- Do NOT change the `vercel.json` install/build commands without understanding the nested project structure.
- The `--webpack` flag on dev and build commands is intentional and should not be removed.
