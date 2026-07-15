/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Real photography (JPG/WebP/PNG) is optimized by next/image into modern
    // formats at these sizes. Placeholder SVGs bypass the optimizer via the
    // <SmartImage> wrapper, so no `dangerouslyAllowSVG` is required.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 828, 1080, 1200, 1600, 1920, 2560],
    imageSizes: [128, 256, 384],
  },
};

export default nextConfig;
