import i18nextConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...i18nextConfig,
};

export default nextConfig;
