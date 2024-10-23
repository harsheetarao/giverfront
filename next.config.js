/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gone.com',
        pathname: '/assets/img/**',
      },
    ],
  },
}

module.exports = nextConfig
