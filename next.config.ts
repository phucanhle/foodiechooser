import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Chấp nhận tất cả các hostname
      },
    ],
  },
};

export default nextConfig;
