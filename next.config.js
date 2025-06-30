/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dynamic configuration based on deployment target
  ...(process.env.EXPORT === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    }
  })
}

module.exports = nextConfig 