/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeFonts: true,
    appDir: true,
  },
  // Imageでmicro cmsの画像を表示するための設定
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
