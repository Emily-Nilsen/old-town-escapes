/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com', process.env.WP_IMAGES_URL],
    unoptimized: true,
  },
}

module.exports = nextConfig
