/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/vijayawada/:keyword.xml',  // URL pattern with .xml extension
        destination: '/api/vijayawada/:keyword',  // API route without .xml
      },
    ];
  },
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.cdn.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.digitaloceanspaces.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'longdrivecarsnew-lime.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'ldcars.blr1.digitaloceanspaces.com',
      },
    ],
  },
};

export default nextConfig;
