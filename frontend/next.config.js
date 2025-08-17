/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/astrology-app' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/astrology-app' : '',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production' 
      ? 'https://eburns009-astrology-backend.onrender.com'
      : 'http://localhost:3001'
  }
}

module.exports = nextConfig
