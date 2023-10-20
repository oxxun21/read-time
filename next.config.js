/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["search1.kakaocdn.net"],
  },
  env: {
    RESTAPI_KEY: process.env.RESTAPI_KEY,
    DATABASE_KEY: process.env.DATABASE_KEY,
  },
};

module.exports = {
  reactStrictMode: true,
  output: "export",
};
