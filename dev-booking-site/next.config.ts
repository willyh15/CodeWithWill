/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dev-booking-site', // adjust this to match your repo name
  assetPrefix: '/dev-booking-site/',
};

export default nextConfig;
