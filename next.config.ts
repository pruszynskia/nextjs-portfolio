import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
