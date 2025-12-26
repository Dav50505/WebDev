/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['miro.medium.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig

