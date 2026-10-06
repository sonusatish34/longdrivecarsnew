/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
      {
        source: '/api/proxy/:path*',
        destination: 'https://api.longdrivecars.com/:path*',
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
    unoptimized:true,
  },
  compress: true

};

export default nextConfig;
