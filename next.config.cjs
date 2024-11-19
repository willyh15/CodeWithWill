import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  output: "standalone", // For Vercel deployment
  images: {
    unoptimized: true, // Simplifies image handling
  },
  trailingSlash: true,
};

export default nextConfig;