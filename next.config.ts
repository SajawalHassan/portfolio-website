import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.100.*"],
  images: {
    qualities: [75, 85, 95, 100],
  },
};

export default nextConfig;
