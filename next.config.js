/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const { i18n } = require("./i18next");

const nextConfig = {
  i18n,
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
