/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com"],
  },
  appDir: false,
};

module.exports = nextConfig;
