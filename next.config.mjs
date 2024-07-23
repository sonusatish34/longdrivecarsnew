/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd10uth61hedy2t.cloudfront.net',
      },
    ],
  },
};
export default nextConfig;
