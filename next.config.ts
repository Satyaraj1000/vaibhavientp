import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.vercel.com",
        pathname: "/**", // Allows all image paths
      },
    ],
  },
};

export default nextConfig;
