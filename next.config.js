/** @type {import('next').NextConfig} */
const nextConfig = {
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
