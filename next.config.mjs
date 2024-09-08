/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.ignoreWarnings = [
        { module: /node_modules\/quill/ },
      ];
    }
    return config;
  },


  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
  images: {
    domains: ['img.clerk.com'],
  },
  // Remove the clerk configuration from here
};

export default nextConfig;
