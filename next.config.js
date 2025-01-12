/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://teko.vercel.app'
      : 'http://localhost:3000',
  env: {
    STORAGE_URL: process.env.AWS_BUCKET_URL,
  },
  compiler: {
    styledComponents: true,
    // reactRemoveProperties: true,
    // removeConsole: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tekostorage.s3.ap-southeast-1.amazonaws.com',
        pathname: '/teko/**',
      },
    ],
  },
  experimental: {
    appDir: true,
    modularizeImports: {
      'react-bootstrap': {
        transform: 'react-bootstrap/{{member}}',
      },
      'components/?(((\\w*)?/?)*)': {
        transform: 'components/{{ matches.[1] }}/{{member}}',
      },
    },
  },
};

module.exports = nextConfig;
