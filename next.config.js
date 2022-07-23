/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [ "www.linkedin.com", "m.media-amazon.com", "lh3.googleusercontent.com" ]
  }
}

module.exports = nextConfig
