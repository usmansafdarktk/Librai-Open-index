import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Librai-Open-index",
  assetPrefix: "/Librai-Open-index",
};

export default nextConfig;
