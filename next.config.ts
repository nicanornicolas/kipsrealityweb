import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
   * 1. Output Standalone
   * Essential for VPS/Docker deployments.
   * It creates a small 'standalone' folder with only necessary files for production.
   */
  output: 'standalone',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // REMOVED: 'domains' (It is deprecated in Next.js 14+)

    // NEW: Strict Remote Patterns
    remotePatterns: [
      // External Image Providers
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '/**',
      },

      // Your Production Domain (If you serve uploaded images from the server)
      // Replace with your actual domain or VPS IP if needed
      {
        protocol: 'https',
        hostname: 'rentflow360.com',
        pathname: '/**',
      },
      // Allow http for IP-based access (common in VPS setups before SSL)
      {
        protocol: 'http',
        hostname: '184.168.21.114',
        pathname: '/**',
      },
    ],

    // Optimization: Compress images for faster page loads
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },

  allowedDevOrigins: ['192.168.32.1'],

  // Note: ESLint configuration is handled in eslint.config.mjs, not in NextConfig.
  // If you need to ignore ESLint errors during build, configure it in package.json
  // scripts or use ESLint's own ignore mechanisms.

  // Turbopack is default in Next.js 16. If fflate alias is needed, use --webpack flag
  // or migrate alias to Turbopack config when needed.
};

// TEMPORARY: Bypass Sentry Webpack wrapper to unblock Next.js 15 build
// TODO: Re-integrate Sentry in Epic 2 (Observability Phase) after core app stabilizes
// export default withSentryConfig(nextConfig, { ... });

export default nextConfig;
