/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'travel-zip-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
