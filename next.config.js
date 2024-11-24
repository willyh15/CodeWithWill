const nextConfig = {
    env: {
        PEXELS_API_KEY: process.env.PEXELS_API_KEY,
          },
            images: {
                domains: ["images.pexels.com"],
                  },
                    trailingSlash: true,
                    };

                    export default nextConfig;