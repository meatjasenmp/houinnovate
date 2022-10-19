/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GSAP: "d82d5cbf-73e7-45eb-bba8-5b4c5b29bc66",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["innovate.blackgraystudio.com"],
  },
};

module.exports = nextConfig;
