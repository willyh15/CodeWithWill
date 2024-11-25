const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY, // Ensure this is set in .env.local
  },
  images: {
    domains: ["images.pexels.com"], // Allow images from Pexels
  },
  trailingSlash: true, // Ensure trailing slashes in routes
  async headers() {
    return [
      {
        source: "/(.*)", // Apply headers to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; connect-src 'self' https://api.pexels.com; img-src 'self' https://images.pexels.com data:; style-src 'self' 'unsafe-inline';",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN", // Prevent clickjacking
          },
        ],
      },
    ];
  },
};

export default nextConfig;
