import type { NextConfig } from "next";

const isGithubPages = process.env.IS_GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // 只有在部署到 GitHub Pages 時才加上這個路徑前綴
  basePath: isGithubPages ? '/lazy-cv' : '',
  assetPrefix: isGithubPages ? '/lazy-cv/' : '',

  output: 'standalone',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.cakeresume.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lazy-cv.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
