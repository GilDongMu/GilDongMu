/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: prod ? false : true,
});

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "*",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["gildongmuu.s3.ap-northeast-2.amazonaws.com"],
  },
  rewrites: async () => [
    {
      source: "/post",
      destination: "http://3.38.76.39:8080",
    },
    {
      source: "/get",
      destination: "http://3.38.76.39:8080",
    },
    {
      source: "/put",
      destination: "http://3.38.76.39:8080",
    },
    {
      source: "/delete",
      destination: "http://3.38.76.39:8080",
    },
  ],
});

module.exports = nextConfig;
