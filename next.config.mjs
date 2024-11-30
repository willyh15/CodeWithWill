const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY, // Environment variable
  },
  images: {
    domains: ["images.pexels.com"], // Allow images from Pexels
  },
  trailingSlash: true, // Ensure trailing slashes in routes
  async headers() {
    return [
      {
        source: "/(.*)", // Apply headers globally
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; connect-src 'self' https://api.pexels.com; img-src 'self' data: https://images.pexels.com; style-src 'self' 'unsafe-inline';",
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

export default nextConfig;
