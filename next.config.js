/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "",
    domains: "i.dummyjson.com",
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.dummyjson.com",
  //       port: "",
  //       pathname: "/",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
