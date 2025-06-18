import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s3-eu-west-1.amazonaws.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://manual-case-study.herokuapp.com/:path*",
      },
    ];
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
