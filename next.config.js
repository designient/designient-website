/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.perplexity.ai',
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'bolt.new',
      },
      {
        protocol: 'https',
        hostname: 'cdn.logo.dev',
      },
      {
        protocol: 'https',
        hostname: 'logo.synthfinance.com',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
      },
      {
        protocol: 'https',
        hostname: 'www.midjourney.com',
      },
      {
        protocol: 'https',
        hostname: 'www.anthropic.com',
      },
      {
        protocol: 'https',
        hostname: 'stability.ai',
      },
      {
        protocol: 'https',
        hostname: 'adplist.org',
      },
      {
        protocol: 'https',
        hostname: 'designient.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for SEO
  compress: true,
  poweredByHeader: false,
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig
