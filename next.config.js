/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  output: "export",
  images: {
    unoptimized: true, // Optimize if external loaders aren't used
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: https://images.pexels.com;",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;