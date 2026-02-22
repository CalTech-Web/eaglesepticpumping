import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/book", destination: "/blog", permanent: false },
      { source: "/reviews", destination: "/blog", permanent: false },
      { source: "/estimate", destination: "/pricing", permanent: false },
      { source: "/contact", destination: "/about", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
