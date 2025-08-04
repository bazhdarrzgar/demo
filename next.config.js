const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // Remove if not using Server Components
    serverComponentsExternalPackages: ['mongodb'],
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack(config, { dev, isServer }) {
    // Performance optimizations
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
        },
      },
    };

    if (dev && !isServer) {
      // Reduce CPU/memory from file watching in development
      config.watchOptions = {
        poll: 1000, // check every 1 second (reduced from 2 seconds)
        aggregateTimeout: 200, // wait before rebuilding (reduced from 300ms)
        ignored: ['**/node_modules', '**/.git', '**/build', '**/dist'],
      };
    }

    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 5000, // reduced from 10000ms
    pagesBufferLength: 5, // increased from 2 for better caching
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
          // Performance headers
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      // Cache static assets
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache images
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;