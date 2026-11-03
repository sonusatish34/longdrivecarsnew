/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/attach-and-earn/:path*',
        destination: '/attach&earn/:path*',
      },
    ];
  },
  reactStrictMode: true,

  images: {
    qualities: [70, 75],
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
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'longdrivecarsnew-lime.vercel.app',
      },
       {
        protocol: "https",
        hostname: "cdn.longdrivecars.com",
      },


    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true

};

export default nextConfig;
