const nextConfig = {
  env: {
    PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  },
  images: {
    domains: ["images.pexels.com"],
  },
  trailingSlash: true,
  output: "export",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              connect-src 'self' https://api.pexels.com;
              img-src 'self' https://images.pexels.com data:;
              style-src 'self' 'unsafe-inline';
            `.trim(),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
