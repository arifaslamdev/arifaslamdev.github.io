import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If deploying to a project page like https://<username>.github.io/my-portfolio,
  // uncomment and set the repo name below:
  // basePath: "/my-portfolio",
  // assetPrefix: "/my-portfolio/",
};

export default nextConfig;
