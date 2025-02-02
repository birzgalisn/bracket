import type { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    reactCompiler: true,
  },
} satisfies NextConfig;

export default nextConfig;
