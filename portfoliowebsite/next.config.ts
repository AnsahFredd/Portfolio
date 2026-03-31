import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  serverExternalPackages: ["lightningcss", "@tailwindcss/oxide"],
};

export default nextConfig;
