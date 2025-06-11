/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig;

