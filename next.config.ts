import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alt-arkib",
  assetPrefix: "/alt-arkib/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
