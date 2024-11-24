const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  images: {
    domains: ["images.pexels.com"],
  },
  trailingSlash: true,
  output: "export", // Use 'export' instead of 'next export'
};

export default nextConfig;
