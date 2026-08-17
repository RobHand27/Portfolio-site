/** u/type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
output: isProd ? 'export' : undefined,
basePath: isProd ? '/Portfolio-site' : '',
assetPrefix: isProd ? '/Portfolio-site/' : '',
images: {
unoptimized: true,
},
trailingSlash: isProd,
};

export default nextConfig;