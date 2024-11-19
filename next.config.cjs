// next.config.cjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  output: "standalone",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
