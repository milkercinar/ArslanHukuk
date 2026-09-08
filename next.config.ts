import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/faaliyet-alanlari",
        destination: "/uzmanlik-alanlari",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        // The hero video never changes; cache it aggressively.
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
