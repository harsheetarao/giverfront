/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gone.com',
        port: '',
        pathname: '/assets/**',
      }
    ],
  },
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;
