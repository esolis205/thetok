/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ "www.linkedin.com", "m.media-amazon.com", "lh3.googleusercontent.com" ]
  }
}

module.exports = nextConfig
