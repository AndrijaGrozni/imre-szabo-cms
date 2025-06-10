/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/imre-szabo-cms',
  assetPrefix: '/imre-szabo-cms/',
}

module.exports = nextConfig 