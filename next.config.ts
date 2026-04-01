import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * 1. Output Standalone
   * Essential for VPS/Docker deployments.
   * It creates a small 'standalone' folder with only necessary files for production.
   */
  output: "standalone",

  // Use webpack instead of Turbopack (required for custom webpack config like fflate alias)
  turbopack: {},

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    // REMOVED: 'domains' (It is deprecated in Next.js 14+)

    // NEW: Strict Remote Patterns
    remotePatterns: [
      // External Image Providers
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },

      // Your Production Domain (If you serve uploaded images from the server)
      // Replace with your actual domain or VPS IP if needed
      {
        protocol: "https",
        hostname: "rentflow360.com",
        pathname: "/**",
      },
      // Allow http for IP-based access (common in VPS setups before SSL)
      {
        protocol: "http",
        hostname: "184.168.21.114",
        pathname: "/**",
      },
    ],

    // Optimization: Compress images for faster page loads
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
  },

  // Note: ESLint configuration is handled in eslint.config.mjs, not in NextConfig.
  // If you need to ignore ESLint errors during build, configure it in package.json
  // scripts or use ESLint's own ignore mechanisms.

  // Fix fflate/Worker issue - force browser version instead of Node.js Worker API
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'fflate/lib/node.cjs': 'fflate/browser',
      }
    }
    return config
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "rentflow360",

  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
