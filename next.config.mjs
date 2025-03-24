/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This is critical for GitHub Pages - it sets the correct path prefix
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio-site' : '',
  // This ensures assets are referenced with the correct paths
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio-site/' : '',
  // Required for static image exports
  images: {
    unoptimized: true,
  },
  // This ensures trailing slashes which helps with static hosting
  trailingSlash: true,
};

export default nextConfig;
