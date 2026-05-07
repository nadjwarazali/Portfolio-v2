import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alt-arkib",
  assetPrefix: "/alt-arkib/",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
