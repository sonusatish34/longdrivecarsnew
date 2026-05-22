/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
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
      }

    ],
    formats: ["image/avif", "image/webp"]
  },
  compress: true

};

export default nextConfig;
