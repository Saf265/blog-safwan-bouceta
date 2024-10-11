/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Appliquez ces en-têtes à toutes les routes
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value: "geolocation=(self), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
