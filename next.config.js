const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY, // This injects the API key into the build
  },
  images: {
    domains: ["images.pexels.com"], // Allow Pexels image domains
  },
  trailingSlash: true,
};

export default nextConfig;
