/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site — emits ./out with no server runtime.
  output: "export",
  // Static hosts (DigitalOcean App Platform static sites) serve /path/ as /path/index.html.
  trailingSlash: true,
  // next/image optimization needs a server; disable for static export.
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
