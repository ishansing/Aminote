import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.169.20"],
  images: {
    domains: ["files.edgestore.dev"],
  },
};

export default nextConfig;
