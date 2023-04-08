/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 1. Add experiment appDirectory and state experimental code
  experimental: {
    appDir: true
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig
