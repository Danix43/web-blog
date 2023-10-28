/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
      },
      {
        hostname: "www.svgrepo.com",
      },
    ],
  },
};

module.exports = nextConfig;
