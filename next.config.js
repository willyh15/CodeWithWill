const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"]
  },
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: https://images.pexels.com;"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer"
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;