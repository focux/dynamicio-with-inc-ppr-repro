/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    dynamicIO: true,
    ppr: "incremental",
  },
};

export default nextConfig;
