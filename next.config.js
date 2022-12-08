/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GSAP: "d82d5cbf-73e7-45eb-bba8-5b4c5b29bc66",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["innovate.blackgraystudio.com", "iondistrict-admin.rice.edu"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
