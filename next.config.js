/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["houinnovate.local"],
  },
};

module.exports = nextConfig;
