import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/markdown-reader', // 根据你的仓库名称设置
  assetPrefix: '/markdown-reader',  // 配置静态资源的路径前缀
  trailingSlash: true,  // URL 末尾带有斜杠
};

export default nextConfig;
