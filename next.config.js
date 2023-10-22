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
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  trailingSlash: true,
};
