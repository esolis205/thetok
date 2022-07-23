/** @type {import('next').NextConfig} */
const nextConfig = {
  jsx: {
    ignoreBuildErrors: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [ "www.linkedin.com", "m.media-amazon.com", "lh3.googleusercontent.com" ]
  }
}

module.exports = nextConfig
