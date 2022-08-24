/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/vaultuis/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  // experimental: {
  //   images: {
  //     unoptimized: true
  //   },
  // }
}

module.exports = nextConfig
