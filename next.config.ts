import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alt-arkib",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
