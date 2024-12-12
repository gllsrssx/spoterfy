import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  // Your Next.js config options here
};

export default withPWA({
  dest: "public",
  // Other PWA options here
})(nextConfig);