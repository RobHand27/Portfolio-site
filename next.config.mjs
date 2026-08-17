/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: isProd ? 'export' : undefined,
  // basePath and assetPrefix omitted because of the custom domain
  images: {
    unoptimized: true,
  },
  trailingSlash: isProd,
};

export default nextConfig;