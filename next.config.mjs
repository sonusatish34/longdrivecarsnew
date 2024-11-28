  /** @type {import('next').NextConfig} */
const nextConfig = {
  
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
    ],
  },
};

export default nextConfig;
