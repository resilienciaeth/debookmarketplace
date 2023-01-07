/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'gateway.ipfscdn.io'],
  },
};
const withFonts = require('next-fonts');

module.exports = withFonts({
  webpack(config, options) {
    config.node = {
      fs: 'empty',
    };
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader?limit=100000',
        },
        {
          loader: 'file-loader',
        },
      ],
    });
    return config;
  },
});

module.exports = nextConfig;
