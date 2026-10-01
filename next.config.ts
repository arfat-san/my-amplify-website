import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://34.204.89.236/api/:path*",
      },
    ];
  },
};

export default nextConfig;