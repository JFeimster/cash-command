/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image Optimization Domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },

  // Setup for reading shared data during build
  // (Assuming shared/data is copied to public/data via root build script)
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Moonshine Capital',
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000/api' 
      : 'https://www.distilledfunding.com/api',
  },
}

module.exports = nextConfig