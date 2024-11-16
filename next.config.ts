const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY, // Not necessary for CI/CD but ensures local compatibility
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;