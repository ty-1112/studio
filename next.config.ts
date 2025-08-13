import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // This is the recommended way to resolve issues with server-side rendering of Firebase.
    // It ensures that the admin SDK is not bundled on the client.
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'firebase-admin': false,
      };
    }

    return config;
  },
  // The following turbo object is added to support turbopack
  turbo: {
    rules: {
      '**/*.ts': {
        loaders: ['ts-loader'],
        as: '*.js',
      },
      // This is the recommended way to resolve issues with server-side rendering of Firebase with turbopack.
      // It ensures that the admin SDK is not bundled on the client.
      'node_modules/firebase-admin/lib/index.js': {
        browser: 'empty',
      },
    },
  },
};

export default nextConfig;
