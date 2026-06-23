import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/sanay',
  output: "export",
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  }
};

export default nextConfig;
