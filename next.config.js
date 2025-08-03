/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/test01',
  assetPrefix: '/test01/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 