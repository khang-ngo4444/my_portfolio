/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for development - only use for production builds
  experimental: {
    optimizeCss: false,
  },
  images: {
    unoptimized: true
  },
  // Add webpack config to help with hot reload issues
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
      }
      config.cache = false // Disable caching in development to prevent issues
    }
    return config
  },
  // Ensure pages are properly processed
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // Add redirects if needed
  async redirects() {
    return [
      {
        source: '/gallery-redirect',
        destination: '/gallery',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
