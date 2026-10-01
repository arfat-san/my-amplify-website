import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://44.192.245.100/api/:path*",
      },
    ];
  },
};

export default nextConfig;