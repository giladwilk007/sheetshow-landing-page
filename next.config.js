/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only enable static export for non-Vercel builds
  ...(process.env.EXPORT === 'true' ? {
    output: 'export',
    trailingSlash: true,
    images: { unoptimized: true }
  } : {}),
  
  swcMinify: true
}

module.exports = nextConfig 