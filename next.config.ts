import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',  // Ensures Next.js exports static HTML files
  images: {
    unoptimized: true,  // Disable Next.js image optimization for static export
  },
  trailingSlash: true, // Ensures each page generates its own folder with index.html
};

export default nextConfig;
