import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output to repo root .next/ so Vercel's framework validator finds all expected files
  // at /vercel/path0/.next/ (it checks there regardless of outputDirectory setting)
  distDir: "../.next",
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
