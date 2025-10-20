// next.config.ts (or .mjs/.js)
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "cdn.sanity.io" }, // ← add this
    ],
  },
};
export default nextConfig;
