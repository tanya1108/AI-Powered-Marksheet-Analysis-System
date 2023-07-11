/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  babel: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  },
};

module.exports = nextConfig;
