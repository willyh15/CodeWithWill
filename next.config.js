/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
