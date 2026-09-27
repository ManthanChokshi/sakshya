/** @type {import('next').NextConfig} */
// Firebase Hosting needs a static export; Vercel renders natively (VERCEL=1 on its builders).
const isExport = process.env.NODE_ENV === 'production' && !process.env.VERCEL;

const nextConfig = {
  reactStrictMode: true,
  ...(isExport ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;