import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/va-ra-2" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
